/**
 * EDUQUEST BATTLE MODE ENGINE v1.0
 * N1 (Fixação Progressiva) → N2 (Aplicação Escolar) → N3 (Calibragem Vestibular)
 * Sprint 9 — 2026-05-26
 */

const BattleMode = {

    // ── LEVEL CONFIG ─────────────────────────────────────────────
    LEVELS: {
        n1: {
            key:        'n1',
            label:      'N1',
            fullLabel:  'Fixação Kumon',
            icon:       '🌱',
            color:      '#16a34a',
            timer:      60,        // 60s — feels unlimited, focus on concept
            multiplier: 1.0,       // base score multiplier
            threshold:  85,        // % accuracy to unlock N2
            desc:       'Automatize os conceitos sem pressão de tempo'
        },
        n2: {
            key:        'n2',
            label:      'N2',
            fullLabel:  'Aplicação Escolar',
            icon:       '🌿',
            color:      '#f59e0b',
            timer:      30,        // 30s — simulate school test pace
            multiplier: 1.5,       // 1.5× score
            threshold:  80,        // % accuracy to unlock N3
            desc:       'Interprete contextos com gestão de tempo'
        },
        n3: {
            key:        'n3',
            label:      'N3',
            fullLabel:  'Calibragem Vestibular',
            icon:       '🌳',
            color:      '#7c3aed',
            timer:      20,        // 20s — ENEM/FUVEST pressure
            multiplier: 2.5,       // 2.5× score
            threshold:  null,      // top level — no unlock gate
            desc:       'Análise crítica sob pressão — nível ENEM/FUVEST'
        }
    },

    // ── STREAK MULTIPLIERS ────────────────────────────────────────
    STREAK_TABLE: [
        { min: 10, mult: 1.5  },
        { min: 5,  mult: 1.25 },
        { min: 3,  mult: 1.1  },
        { min: 0,  mult: 1.0  }
    ],

    // ── BADGE CATALOG ─────────────────────────────────────────────
    BADGES: {
        n1_complete:     { id: 'n1_complete',     icon: '🌱', label: 'Iniciante',            desc: 'Completou N1 pela primeira vez!'           },
        n1_perfect:      { id: 'n1_perfect',      icon: '⭐', label: 'Fixação Perfeita',      desc: 'Acertou 100% no Nível 1!'                  },
        n2_unlock:       { id: 'n2_unlock',       icon: '🔓', label: 'Nível 2 Desbloqueado', desc: '≥85% no N1 — você está evoluindo!'          },
        n2_complete:     { id: 'n2_complete',     icon: '🌿', label: 'Aplicado',              desc: 'Completou N2 pela primeira vez!'            },
        n3_unlock:       { id: 'n3_unlock',       icon: '🚀', label: 'Nível Vestibular',      desc: '≥80% no N2 — calibragem iniciada!'          },
        n3_complete:     { id: 'n3_complete',     icon: '🌳', label: 'Vestibularista',        desc: 'Completou o N3 vestibular!'                 },
        n3_perfect:      { id: 'n3_perfect',      icon: '🎯', label: 'Precisão Vestibular',   desc: '≥95% no N3 — você está pronto para o ENEM!'},
        streak_3:        { id: 'streak_3',        icon: '🔥', label: '3 em Fila',             desc: '3 acertos consecutivos!'                   },
        streak_5:        { id: 'streak_5',        icon: '⚡', label: 'Combo ×5',              desc: '5 acertos consecutivos!'                   },
        streak_10:       { id: 'streak_10',       icon: '👑', label: 'Streak Master',         desc: '10 acertos consecutivos!'                  },
        speed_demon:     { id: 'speed_demon',     icon: '⏱️', label: 'Relâmpago',            desc: 'Respondeu em menos de 5s no N3!'            },
        combo_master:    { id: 'combo_master',    icon: '💥', label: 'Combo Master',          desc: 'Streak de 20 em qualquer nível!'            },
        geo_urbanista:   { id: 'geo_urbanista',   icon: '🏙️', label: 'Urbanista Jr.',        desc: 'Completou todos os N2 de Urbanização!'      },
        geo_visionario:  { id: 'geo_visionario',  icon: '🔮', label: 'Visionário 2050',       desc: 'Completou todos os N3 de Geografia!'        }
    },

    // ── INTERNAL STORAGE ─────────────────────────────────────────
    _store: {},
    _STORAGE_KEY: 'eq_battle_v1',

    // ── INIT ─────────────────────────────────────────────────────

    init() {
        try {
            const raw = localStorage.getItem(this._STORAGE_KEY);
            this._store = raw ? JSON.parse(raw) : {};
        } catch (e) {
            this._store = {};
        }
    },

    _save() {
        try { localStorage.setItem(this._STORAGE_KEY, JSON.stringify(this._store)); } catch(e) {}
    },

    _key(chapterId, stageId) { return `${chapterId}|${stageId}`; },

    _entry(chapterId, stageId) {
        const k = this._key(chapterId, stageId);
        if (!this._store[k]) {
            this._store[k] = {
                n1: { best: 0, attempts: 0, unlocked: true,  lastPct: 0 },
                n2: { best: 0, attempts: 0, unlocked: false, lastPct: 0 },
                n3: { best: 0, attempts: 0, unlocked: false, lastPct: 0 },
                badges: []
            };
        }
        return this._store[k];
    },

    // ── PUBLIC API ────────────────────────────────────────────────

    getUnlockedLevels(chapterId, stageId) {
        const e = this._entry(chapterId, stageId);
        return { n1: e.n1.unlocked, n2: e.n2.unlocked, n3: e.n3.unlocked };
    },

    getBest(chapterId, stageId, level) {
        return this._entry(chapterId, stageId)[level]?.best || 0;
    },

    getTimerForLevel(level) {
        return (this.LEVELS[level] || this.LEVELS.n1).timer;
    },

    getMultiplier(level) {
        return (this.LEVELS[level] || this.LEVELS.n1).multiplier;
    },

    getStreakMultiplier(streak) {
        for (const row of this.STREAK_TABLE) {
            if (streak >= row.min) return row.mult;
        }
        return 1.0;
    },

    /**
     * Record a battle result and handle level progression.
     * @returns {{ leveledUp, newLevel, earnedBadges, pct }}
     */
    recordResult(chapterId, stageId, level, correctCount, totalQuestions, peakCombo, fastestAnswerMs) {
        if (!totalQuestions) return { leveledUp: false, newLevel: null, earnedBadges: [], pct: 0 };

        const pct    = Math.round((correctCount / totalQuestions) * 100);
        const e      = this._entry(chapterId, stageId);
        const lvData = e[level] || e.n1;
        const lv     = this.LEVELS[level] || this.LEVELS.n1;

        lvData.attempts++;
        lvData.lastPct = pct;
        if (pct > lvData.best) lvData.best = pct;

        const earned = [];

        // ── First completion badge ──
        const completeBadge = `${level}_complete`;
        if (lvData.attempts === 1 && this.BADGES[completeBadge] && !e.badges.includes(completeBadge)) {
            e.badges.push(completeBadge);
            earned.push(this.BADGES[completeBadge]);
        }

        // ── Perfect score badges ──
        if (pct === 100 && level === 'n1' && !e.badges.includes('n1_perfect')) {
            e.badges.push('n1_perfect');
            earned.push(this.BADGES.n1_perfect);
        }
        if (pct >= 95 && level === 'n3' && !e.badges.includes('n3_perfect')) {
            e.badges.push('n3_perfect');
            earned.push(this.BADGES.n3_perfect);
        }

        // ── Streak badges ──
        if (peakCombo >= 20 && !e.badges.includes('combo_master')) {
            e.badges.push('combo_master');
            earned.push(this.BADGES.combo_master);
        } else if (peakCombo >= 10 && !e.badges.includes('streak_10')) {
            e.badges.push('streak_10');
            earned.push(this.BADGES.streak_10);
        } else if (peakCombo >= 5 && !e.badges.includes('streak_5')) {
            e.badges.push('streak_5');
            earned.push(this.BADGES.streak_5);
        } else if (peakCombo >= 3 && !e.badges.includes('streak_3')) {
            e.badges.push('streak_3');
            earned.push(this.BADGES.streak_3);
        }

        // ── Speed demon (N3 + answered in <5s) ──
        if (level === 'n3' && fastestAnswerMs > 0 && fastestAnswerMs < 5000 && !e.badges.includes('speed_demon')) {
            e.badges.push('speed_demon');
            earned.push(this.BADGES.speed_demon);
        }

        // ── Level unlock ──
        let leveledUp = false;
        let newLevel  = null;
        if (lv.threshold !== null && pct >= lv.threshold) {
            const next = level === 'n1' ? 'n2' : level === 'n2' ? 'n3' : null;
            if (next && !e[next].unlocked) {
                e[next].unlocked = true;
                leveledUp = true;
                newLevel  = next;
                const unlockKey = `${next}_unlock`;
                if (this.BADGES[unlockKey] && !e.badges.includes(unlockKey)) {
                    e.badges.push(unlockKey);
                    earned.push(this.BADGES[unlockKey]);
                }
            }
        }

        this._save();
        return { leveledUp, newLevel, earnedBadges: earned, pct };
    },

    // ── HEATMAP (concept error aggregation) ──────────────────────

    getHeatmapData() {
        if (typeof State === 'undefined') return [];
        try {
            const raw = State.getWrongAnswersMap?.() || {};
            return Object.entries(raw)
                .map(([topic, count]) => ({ topic, count }))
                .filter(x => x.count > 0)
                .sort((a, b) => b.count - a.count)
                .slice(0, 12);
        } catch(e) { return []; }
    },

    // ── LEVEL-UP MODAL ────────────────────────────────────────────

    showLevelUpModal(newLevel, badges) {
        const lv = this.LEVELS[newLevel] || {};
        const badgesHtml = (badges || []).map(b =>
            `<div class="bm-badge-pill">
                <span class="bm-badge-icon">${b.icon}</span>
                <span class="bm-badge-lbl">${b.label}</span>
            </div>`
        ).join('');

        const overlay = document.createElement('div');
        overlay.className = 'bm-levelup-overlay';
        overlay.innerHTML = `
            <div class="bm-levelup-card">
                <div class="bm-levelup-burst" aria-hidden="true"></div>
                <div class="bm-levelup-icon">${lv.icon || '🚀'}</div>
                <div class="bm-levelup-tag">NÍVEL DESBLOQUEADO!</div>
                <div class="bm-levelup-name" style="color:${lv.color}">${lv.label} — ${lv.fullLabel}</div>
                <p class="bm-levelup-desc">${lv.desc || ''}</p>
                ${badgesHtml ? `<div class="bm-badges-row">${badgesHtml}</div>` : ''}
                <button class="btn-primary bm-levelup-close"
                        onclick="this.closest('.bm-levelup-overlay').remove()">
                    🎉 Incrível!
                </button>
            </div>`;
        document.body.appendChild(overlay);

        if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
        if (typeof Utils       !== 'undefined') setTimeout(() => Utils.confetti(), 300);
    },

    showBadgeToast(badge) {
        const t = document.createElement('div');
        t.className = 'bm-badge-toast';
        t.innerHTML = `
            <span class="bm-toast-icon">${badge.icon}</span>
            <div class="bm-toast-body">
                <strong>${badge.label}</strong>
                <small>${badge.desc}</small>
            </div>`;
        document.body.appendChild(t);
        requestAnimationFrame(() => t.classList.add('show'));
        setTimeout(() => {
            t.classList.remove('show');
            setTimeout(() => t.remove(), 400);
        }, 3200);
    },

    // ── LEVEL SELECTOR HTML ───────────────────────────────────────

    /**
     * Returns HTML for the 3-level picker used in renderStagePrep.
     * onSelectFn: a global function name string called with the level key.
     */
    renderLevelSelector(chapterId, stageId, onSelectFn) {
        if (!chapterId || !stageId) return '';
        const levels  = this.getUnlockedLevels(chapterId, stageId);
        const entry   = this._entry(chapterId, stageId);

        return Object.values(this.LEVELS).map(lv => {
            const isUnlocked = levels[lv.key];
            const lvData     = entry[lv.key] || {};
            const best       = lvData.best    || 0;
            const attempts   = lvData.attempts || 0;
            const threshold  = lv.threshold;

            const progressHtml = attempts > 0 ? `
                <div class="bm-lv-prog">
                    <div class="bm-lv-prog-bar">
                        <div class="bm-lv-prog-fill" style="width:${best}%;background:${lv.color}"></div>
                    </div>
                    <span class="bm-lv-prog-lbl">${best}% melhor${threshold ? ` · desbloqueio: ${threshold}%` : ''}</span>
                </div>` : (isUnlocked ? `<span class="bm-lv-new">Novo! Tente agora →</span>` : '');

            return `
            <button class="bm-lv-btn${isUnlocked ? '' : ' bm-locked'} bm-lv-${lv.key}"
                    data-level="${lv.key}"
                    ${isUnlocked ? `onclick="${onSelectFn}('${lv.key}')"` : 'disabled aria-disabled="true"'}
                    style="--lv-clr:${lv.color}">
                <span class="bm-lv-icon">${lv.icon}</span>
                <div class="bm-lv-info">
                    <div class="bm-lv-top">
                        <span class="bm-lv-tag" style="background:${lv.color}">${lv.label}</span>
                        <span class="bm-lv-name">${lv.fullLabel}</span>
                    </div>
                    <span class="bm-lv-desc">${lv.desc}</span>
                    ${progressHtml}
                </div>
                ${!isUnlocked ? `<span class="bm-lv-lock" aria-label="Bloqueado">🔒</span>` : ''}
            </button>`;
        }).join('');
    },

    // ── HEATMAP HTML ──────────────────────────────────────────────

    renderHeatmap() {
        const data = this.getHeatmapData();
        if (!data.length) return `<p class="bm-heatmap-empty">Nenhum erro registrado ainda. Continue estudando!</p>`;

        const maxCount = data[0]?.count || 1;
        return data.map(({ topic, count }) => {
            const pct  = Math.round((count / maxCount) * 100);
            const heat = pct >= 80 ? 'heat-5' : pct >= 60 ? 'heat-4' : pct >= 40 ? 'heat-3' : pct >= 20 ? 'heat-2' : 'heat-1';
            return `
            <div class="bm-heatmap-row">
                <span class="bm-heatmap-topic">${topic || 'Geral'}</span>
                <div class="bm-heatmap-bar-wrap">
                    <div class="bm-heatmap-bar ${heat}" style="width:${Math.max(pct, 8)}%"></div>
                </div>
                <span class="bm-heatmap-count">${count}×</span>
            </div>`;
        }).join('');
    }
};

window.BattleMode = BattleMode;

// Auto-init on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BattleMode.init());
} else {
    BattleMode.init();
}
