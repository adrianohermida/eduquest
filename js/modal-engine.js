/**
 * EDUQUEST MODAL ENGINE v2.0
 * Centralized overlay system — rewards, confirmations, alerts, dialogs
 * Replaces ALL native browser alert/confirm/prompt calls.
 */

const ModalEngine = {
    _queue:            [],
    _showing:          false,
    _currentCallbacks: null,

    // ── PUBLIC API ───────────────────────────────────────────────

    // Enqueue: respects currently showing modal
    enqueue(type, data = {}) {
        this._queue.push({ type, data });
        if (!this._showing) this._processQueue();
    },

    // Interrupt: show immediately, pauses any current modal
    interrupt(type, data = {}) {
        this._queue = [{ type, data }];
        const existing = document.getElementById('modal-overlay');
        if (existing) { existing.remove(); this._showing = false; this._currentCallbacks = null; }
        this._processQueue();
    },

    // ── INTERNAL ─────────────────────────────────────────────────

    _processQueue() {
        if (this._queue.length === 0) { this._showing = false; return; }
        this._showing = true;
        const { type, data } = this._queue.shift();
        this._render(type, data);
    },

    _render(type, data) {
        const existing = document.getElementById('modal-overlay');
        if (existing) existing.remove();

        this._currentCallbacks = {
            onConfirm: data.onConfirm || null,
            onCancel:  data.onCancel  || null,
        };

        const overlay = document.createElement('div');
        overlay.id        = 'modal-overlay';
        overlay.className = `modal-overlay modal-type-${type}`;
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'modal-title-el');

        let html = '';
        switch (type) {
            // Rewards & Progress
            case 'levelUp':          html = this._levelUpHTML(data);          break;
            case 'dailyReward':      html = this._dailyRewardHTML(data);      break;
            case 'streakRisk':       html = this._streakRiskHTML(data);       break;
            case 'questComplete':    html = this._questCompleteHTML(data);    break;
            case 'allQuestsDone':    html = this._allQuestsDoneHTML(data);    break;
            case 'noGems':           html = this._noGemsHTML(data);           break;
            case 'achievement':      html = this._achievementHTML(data);      break;
            case 'streakMilestone':  html = this._streakMilestoneHTML(data);  break;
            case 'streakFreezeUsed': html = this._streakFreezeUsedHTML(data); break;
            case 'motivational':     html = this._motivationalHTML(data);     break;
            // Dialogs — replaces native browser calls
            case 'missionExit':   html = this._missionExitHTML(data);    break;
            case 'confirm':       html = this._confirmHTML(data);         break;
            case 'dangerConfirm': html = this._dangerConfirmHTML(data);  break;
            case 'simpleAlert':   html = this._simpleAlertHTML(data);    break;
            case 'success':       html = this._successHTML(data);        break;
            case 'warning':       html = this._warningHTML(data);        break;
            default: this._showing = false; return;
        }

        overlay.innerHTML = `<div class="modal-card" id="modal-card" role="document">${html}</div>`;
        document.body.appendChild(overlay);

        // Double rAF — ensures CSS transition fires
        requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('show')));

        // Tap outside — never on destructive confirms or streakRisk
        const lockOutside = ['streakRisk', 'missionExit', 'dangerConfirm'];
        if (!lockOutside.includes(type)) {
            overlay.addEventListener('click', e => { if (e.target === overlay) this.dismiss(false); });
        }

        // ESC = dismiss(false) = cancel
        this._escHandler = e => { if (e.key === 'Escape') this.dismiss(false); };
        document.addEventListener('keydown', this._escHandler, { once: true });

        // Keyboard focus trap — auto-focus first button
        requestAnimationFrame(() => {
            const btn = overlay.querySelector('.modal-cta, .btn-primary, button');
            if (btn) btn.focus();
        });

        // Post-render effects
        if (type === 'levelUp') setTimeout(() => this._levelUpFX(data), 200);
        if (['dailyReward', 'allQuestsDone', 'streakMilestone'].includes(type)) {
            if (typeof Utils !== 'undefined') setTimeout(() => Utils.confetti(), 400);
        }
    },

    /**
     * dismiss(confirmed = false)
     *   confirmed=true  → fires onConfirm (user accepted)
     *   confirmed=false → fires onCancel  (user rejected/closed)
     */
    dismiss(confirmed = false) {
        document.removeEventListener('keydown', this._escHandler);
        const overlay = document.getElementById('modal-overlay');
        const cbs     = this._currentCallbacks;
        this._currentCallbacks = null;

        const proceed = () => {
            if (confirmed && cbs?.onConfirm) cbs.onConfirm();
            else if (!confirmed && cbs?.onCancel) cbs.onCancel();
            this._processQueue();
        };

        if (!overlay) { this._showing = false; proceed(); return; }
        overlay.classList.remove('show');
        setTimeout(() => { overlay.remove(); proceed(); }, 300);
    },

    // ── MODAL HTML — Rewards & Progress ──────────────────────────

    _levelUpHTML({ level, rank, prevRank }) {
        const rankChanged = rank?.name !== prevRank?.name;
        return `
            <div class="modal-levelup-glow"></div>
            <div class="modal-levelup-badge">⚡</div>
            <div class="modal-levelup-num">${level}</div>
            <h2 class="modal-title" id="modal-title-el">NÍVEL ${level}!</h2>
            ${rankChanged ? `
            <div class="modal-rank-change">
                <span>${prevRank?.icon || ''} ${prevRank?.name || ''}</span>
                <span class="modal-rank-arrow">→</span>
                <span class="modal-rank-new">${rank?.icon || ''} ${rank?.name || ''}</span>
            </div>` : `<p class="modal-subtitle">Você está ficando cada vez mais forte!</p>`}
            <div class="modal-xp-bar-wrap">
                <div class="modal-xp-bar-fill" id="modal-xp-fill" style="width:0%"></div>
            </div>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">🚀 Continuar!</button>`;
    },

    _levelUpFX({ level }) {
        const fill = document.getElementById('modal-xp-fill');
        if (fill) setTimeout(() => { fill.style.transition = 'width 1s ease'; fill.style.width = '35%'; }, 50);
        if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
    },

    _dailyRewardHTML({ streak, xp, gems }) {
        const milestones = [3, 7, 14, 30, 60, 100];
        const next   = milestones.find(m => m > streak) || streak + 1;
        const toNext = next - streak;
        return `
            <div class="modal-daily-header">
                <div class="modal-daily-fire">🔥</div>
                <div class="modal-daily-streak-badge">${streak}</div>
            </div>
            <h2 class="modal-title" id="modal-title-el">Login Diário!</h2>
            <p class="modal-subtitle">Dia ${streak} de sequência${streak >= 7 ? ' 🏆' : streak >= 3 ? ' ⭐' : ''}</p>
            <div class="modal-rewards-row">
                <div class="modal-reward-chip">
                    <span class="mrc-icon">⚡</span>
                    <span class="mrc-value">+${xp}</span>
                    <span class="mrc-label">XP</span>
                </div>
                ${gems > 0 ? `<div class="modal-reward-chip">
                    <span class="mrc-icon">💎</span>
                    <span class="mrc-value">+${gems}</span>
                    <span class="mrc-label">Gemas</span>
                </div>` : ''}
            </div>
            <div class="modal-milestone-hint">🎯 Faltam ${toNext} dia${toNext !== 1 ? 's' : ''} para o próximo milestone</div>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">⚡ Receber!</button>`;
    },

    _streakRiskHTML({ streak }) {
        return `
            <div class="modal-streak-risk-wrap">
                <div class="modal-streak-risk-fire">🔥</div>
                <div class="modal-streak-risk-warn">⚠️</div>
            </div>
            <h2 class="modal-title modal-title-warn" id="modal-title-el">Sequência em Risco!</h2>
            <p class="modal-subtitle">Você tem <strong>${streak} dia${streak !== 1 ? 's' : ''}</strong> de sequência.</p>
            <p class="modal-text">Complete pelo menos 1 missão hoje para não perder!</p>
            <button class="btn-primary modal-cta" onclick="Router.navigate('#missions'); ModalEngine.dismiss()">
                ⚔️ Fazer Missão Agora
            </button>
            <button class="modal-dismiss-link" onclick="ModalEngine.dismiss()">Deixar para depois</button>`;
    },

    _questCompleteHTML({ icon, title, xp, gems }) {
        return `
            <div class="modal-quest-icon">${icon || '⚡'}</div>
            <h2 class="modal-title" id="modal-title-el">Missão Completa!</h2>
            <p class="modal-subtitle">${title}</p>
            <div class="modal-rewards-row">
                <div class="modal-reward-chip">
                    <span class="mrc-icon">⚡</span>
                    <span class="mrc-value">+${xp}</span>
                    <span class="mrc-label">XP</span>
                </div>
                ${gems > 0 ? `<div class="modal-reward-chip">
                    <span class="mrc-icon">💎</span>
                    <span class="mrc-value">+${gems}</span>
                    <span class="mrc-label">Gemas</span>
                </div>` : ''}
            </div>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">✅ Incrível!</button>`;
    },

    _allQuestsDoneHTML({ bonusXP, bonusGems }) {
        return `
            <div class="modal-crown">👑</div>
            <h2 class="modal-title" id="modal-title-el">Todas as Missões!</h2>
            <p class="modal-subtitle">Você completou <strong>todas</strong> as missões de hoje!</p>
            <div class="modal-rewards-row">
                <div class="modal-reward-chip modal-reward-gold">
                    <span class="mrc-icon">⚡</span>
                    <span class="mrc-value">+${bonusXP}</span>
                    <span class="mrc-label">Bônus XP</span>
                </div>
                <div class="modal-reward-chip modal-reward-gold">
                    <span class="mrc-icon">💎</span>
                    <span class="mrc-value">+${bonusGems}</span>
                    <span class="mrc-label">Bônus Gemas</span>
                </div>
            </div>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">🔥 Arrasou!</button>`;
    },

    _noGemsHTML({ needed, have }) {
        return `
            <div class="modal-no-gems-icon">💎</div>
            <h2 class="modal-title" id="modal-title-el">Gemas Insuficientes</h2>
            <p class="modal-subtitle">Você tem <strong>${have} 💎</strong> mas precisa de <strong>${needed} 💎</strong>.</p>
            <button class="btn-primary modal-cta" onclick="Router.navigate('#shop'); ModalEngine.dismiss()">🛒 Ir à Loja</button>
            <button class="modal-dismiss-link" onclick="ModalEngine.dismiss()">Fechar</button>`;
    },

    _achievementHTML({ icon, name, description, rarity = 'common' }) {
        const labels = { common: '🏅 Conquista', rare: '⭐ Raro', epic: '💜 Épico', legendary: '👑 Lendário' };
        return `
            <div class="modal-ach-badge modal-ach-${rarity}"><span class="modal-ach-icon">${icon}</span></div>
            <div class="modal-ach-ribbon">${labels[rarity] || '🏅 Conquista'}</div>
            <h2 class="modal-title" id="modal-title-el">${name}</h2>
            <p class="modal-subtitle">${description}</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">🏅 Incrível!</button>`;
    },

    _streakMilestoneHTML({ streak, gems }) {
        const icons  = { 3: '🔥', 7: '🏅', 14: '💪', 30: '👑' };
        const titles = { 3: '3 dias seguidos!', 7: 'Semana de Fogo!', 14: 'Duas Semanas!', 30: 'Um Mês Incrível!' };
        return `
            <div class="modal-milestone-icon">${icons[streak] || '🔥'}</div>
            <div class="modal-milestone-badge">${streak} dias</div>
            <h2 class="modal-title" id="modal-title-el">${titles[streak] || `${streak} dias!`}</h2>
            <p class="modal-subtitle">Você atingiu um marco de sequência incrível!</p>
            <div class="modal-rewards-row">
                <div class="modal-reward-chip modal-reward-gold">
                    <span class="mrc-icon">💎</span>
                    <span class="mrc-value">+${gems}</span>
                    <span class="mrc-label">Bônus Gemas</span>
                </div>
            </div>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">🔥 Continuar!</button>`;
    },

    _streakFreezeUsedHTML({ streak }) {
        return `
            <div class="modal-freeze-icon">🧊</div>
            <h2 class="modal-title" id="modal-title-el">Streak Salvo!</h2>
            <p class="modal-subtitle">Seu Freeze de Streak foi usado automaticamente.</p>
            <p class="modal-text">Sua sequência de <strong>${streak} dias</strong> está intacta!</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">✅ Ótimo!</button>`;
    },

    _motivationalHTML({ title, msg, icon }) {
        return `
            <div class="modal-motivational-icon">${icon || '⚡'}</div>
            <h2 class="modal-title" id="modal-title-el">${title || 'Você consegue!'}</h2>
            <p class="modal-subtitle">${msg || 'Continue jogando e alcance novos níveis!'}</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">💪 Bora!</button>`;
    },

    // ── MODAL HTML — Dialogs (native replacements) ────────────────

    _missionExitHTML({ context = 'missão' }) {
        const ctxMap = {
            'missão':    { icon: '⚔️', title: 'Abandonar a Missão?',     sub: 'Seu progresso desta batalha será perdido.' },
            'memória':   { icon: '🃏', title: 'Sair do Jogo de Memória?', sub: 'Você perderá o progresso atual.'          },
            'forca':     { icon: '🔤', title: 'Sair do Jogo da Forca?',   sub: 'Você perderá o progresso atual.'          },
            'aventura':  { icon: '🗺️', title: 'Sair do Mapa Aventura?',  sub: 'Você poderá retornar depois.'             },
            'caça-palavras': { icon: '🔍', title: 'Sair do Caça-Palavras?', sub: 'Você perderá o progresso atual.'       },
        };
        const c = ctxMap[context] || ctxMap['missão'];
        return `
            <div class="modal-exit-icon">${c.icon}</div>
            <h2 class="modal-title" id="modal-title-el">${c.title}</h2>
            <p class="modal-subtitle">${c.sub}</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss(false)">
                ▶ Continuar ${context === 'aventura' ? 'explorando' : 'jogando'}
            </button>
            <button class="modal-exit-danger-btn" onclick="ModalEngine.dismiss(true)">
                🚪 Sair da ${context}
            </button>`;
    },

    _confirmHTML({ title = 'Confirmar ação?', message = '', confirmText = 'Confirmar', cancelText = 'Cancelar', icon = '❓' }) {
        return `
            <div class="modal-dialog-icon">${icon}</div>
            <h2 class="modal-title" id="modal-title-el">${title}</h2>
            ${message ? `<p class="modal-subtitle">${message}</p>` : ''}
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss(true)">${confirmText}</button>
            <button class="modal-dismiss-link" onclick="ModalEngine.dismiss(false)">${cancelText}</button>`;
    },

    _dangerConfirmHTML({ title = 'Tem certeza?', message = '', confirmText = 'Confirmar', cancelText = 'Cancelar', icon = '⚠️' }) {
        return `
            <div class="modal-dialog-icon modal-danger-icon">${icon}</div>
            <h2 class="modal-title modal-title-warn" id="modal-title-el">${title}</h2>
            ${message ? `<p class="modal-subtitle">${message}</p>` : ''}
            <button class="btn-danger modal-cta" onclick="ModalEngine.dismiss(true)">${confirmText}</button>
            <button class="modal-dismiss-link" onclick="ModalEngine.dismiss(false)">${cancelText}</button>`;
    },

    _simpleAlertHTML({ title = 'Aviso', message = '', icon = 'ℹ️' }) {
        return `
            <div class="modal-dialog-icon">${icon}</div>
            <h2 class="modal-title" id="modal-title-el">${title}</h2>
            ${message ? `<p class="modal-subtitle">${message}</p>` : ''}
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">OK</button>`;
    },

    _successHTML({ title = 'Sucesso!', message = '', icon = '✅' }) {
        return `
            <div class="modal-success-icon">${icon}</div>
            <h2 class="modal-title" id="modal-title-el">${title}</h2>
            ${message ? `<p class="modal-subtitle">${message}</p>` : ''}
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">Ótimo!</button>`;
    },

    _warningHTML({ title = 'Atenção!', message = '', icon = '⚠️' }) {
        return `
            <div class="modal-dialog-icon modal-warning-icon">${icon}</div>
            <h2 class="modal-title" id="modal-title-el">${title}</h2>
            ${message ? `<p class="modal-subtitle">${message}</p>` : ''}
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">Entendido</button>`;
    },
};

window.ModalEngine = ModalEngine;
