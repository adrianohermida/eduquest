/**
 * EDUQUEST MODAL ENGINE v1.0
 * Centralized overlay modal system — retention loops, rewards, warnings
 */

const ModalEngine = {
    _queue:   [],
    _showing: false,

    // Enqueue: respects current showing modal
    enqueue(type, data = {}) {
        this._queue.push({ type, data });
        if (!this._showing) this._processQueue();
    },

    // Interrupt: show immediately, discard pending queue
    interrupt(type, data = {}) {
        this._queue = [{ type, data }];
        const existing = document.getElementById('modal-overlay');
        if (existing) { existing.remove(); this._showing = false; }
        this._processQueue();
    },

    _processQueue() {
        if (this._queue.length === 0) { this._showing = false; return; }
        this._showing = true;
        const { type, data } = this._queue.shift();
        this._render(type, data);
    },

    _render(type, data) {
        const existing = document.getElementById('modal-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id        = 'modal-overlay';
        overlay.className = `modal-overlay modal-type-${type}`;
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        let html = '';
        switch (type) {
            case 'levelUp':       html = this._levelUpHTML(data);       break;
            case 'dailyReward':   html = this._dailyRewardHTML(data);   break;
            case 'streakRisk':    html = this._streakRiskHTML(data);    break;
            case 'questComplete': html = this._questCompleteHTML(data); break;
            case 'allQuestsDone': html = this._allQuestsDoneHTML(data); break;
            case 'noGems':        html = this._noGemsHTML(data);        break;
            case 'achievement':      html = this._achievementHTML(data);      break;
            case 'streakMilestone':  html = this._streakMilestoneHTML(data);  break;
            case 'streakFreezeUsed': html = this._streakFreezeUsedHTML(data); break;
            case 'motivational':     html = this._motivationalHTML(data);     break;
            default: this._showing = false; return;
        }

        overlay.innerHTML = `<div class="modal-card" id="modal-card">${html}</div>`;
        document.body.appendChild(overlay);

        // Double rAF to ensure transition fires
        requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('show')));

        // Tap outside closes (except streak risk — must be confirmed)
        if (type !== 'streakRisk') {
            overlay.addEventListener('click', e => { if (e.target === overlay) this.dismiss(); });
        }

        // ESC closes
        this._escHandler = e => { if (e.key === 'Escape') this.dismiss(); };
        document.addEventListener('keydown', this._escHandler, { once: true });

        // Post-render effects
        if (type === 'levelUp')    setTimeout(() => this._levelUpFX(data), 200);
        if (type === 'dailyReward' || type === 'allQuestsDone' || type === 'streakMilestone') {
            if (typeof Utils !== 'undefined') setTimeout(() => Utils.confetti(), 400);
        }
    },

    dismiss() {
        document.removeEventListener('keydown', this._escHandler);
        const overlay = document.getElementById('modal-overlay');
        if (!overlay) { this._showing = false; this._processQueue(); return; }
        overlay.classList.remove('show');
        setTimeout(() => { overlay.remove(); this._processQueue(); }, 320);
    },

    // ── MODAL HTML ────────────────────────────────────────────

    _levelUpHTML({ level, rank, prevRank }) {
        const rankChanged = rank?.name !== prevRank?.name;
        return `
            <div class="modal-levelup-glow"></div>
            <div class="modal-levelup-badge">⚡</div>
            <div class="modal-levelup-num">${level}</div>
            <h2 class="modal-title">NÍVEL ${level}!</h2>
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
        const next = milestones.find(m => m > streak) || streak + 1;
        const toNext = next - streak;
        return `
            <div class="modal-daily-header">
                <div class="modal-daily-fire">🔥</div>
                <div class="modal-daily-streak-badge">${streak}</div>
            </div>
            <h2 class="modal-title">Login Diário!</h2>
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
            <h2 class="modal-title modal-title-warn">Sequência em Risco!</h2>
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
            <h2 class="modal-title">Missão Completa!</h2>
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
            <h2 class="modal-title">Todas as Missões!</h2>
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
            <h2 class="modal-title">Gemas Insuficientes</h2>
            <p class="modal-subtitle">Você tem <strong>${have} 💎</strong> mas precisa de <strong>${needed} 💎</strong>.</p>
            <button class="btn-primary modal-cta" onclick="Router.navigate('#shop'); ModalEngine.dismiss()">🛒 Ir à Loja</button>
            <button class="modal-dismiss-link" onclick="ModalEngine.dismiss()">Fechar</button>`;
    },

    _achievementHTML({ icon, name, description, rarity = 'common' }) {
        const labels = { common: '🏅 Conquista', rare: '⭐ Raro', epic: '💜 Épico', legendary: '👑 Lendário' };
        return `
            <div class="modal-ach-badge modal-ach-${rarity}"><span class="modal-ach-icon">${icon}</span></div>
            <div class="modal-ach-ribbon">${labels[rarity] || '🏅 Conquista'}</div>
            <h2 class="modal-title">${name}</h2>
            <p class="modal-subtitle">${description}</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">🏅 Incrível!</button>`;
    },
    _streakMilestoneHTML({ streak, gems }) {
        const icons = { 3: '🔥', 7: '🏅', 14: '💪', 30: '👑' };
        const titles = { 3: 'Semana em Chamas!', 7: 'Semana de Fogo!', 14: 'Duas Semanas!', 30: 'Um Mês Incrível!' };
        return `
            <div class="modal-milestone-icon">${icons[streak] || '🔥'}</div>
            <div class="modal-milestone-badge">${streak} dias</div>
            <h2 class="modal-title">${titles[streak] || `${streak} dias!`}</h2>
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
            <h2 class="modal-title">Streak Salvo!</h2>
            <p class="modal-subtitle">Seu Freeze de Streak foi usado automaticamente.</p>
            <p class="modal-text">Sua sequência de <strong>${streak} dias</strong> está intacta!</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">✅ Ótimo!</button>`;
    },

    _motivationalHTML({ title, msg, icon }) {
        return `
            <div class="modal-motivational-icon">${icon || '⚡'}</div>
            <h2 class="modal-title">${title || 'Você consegue!'}</h2>
            <p class="modal-subtitle">${msg || 'Continue jogando e alcance novos níveis!'}</p>
            <button class="btn-primary modal-cta" onclick="ModalEngine.dismiss()">💪 Bora!</button>`;
    },
};

window.ModalEngine = ModalEngine;
