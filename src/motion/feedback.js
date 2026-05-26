/**
 * EduQuest global interaction feedback.
 * Adds tactile response without coupling to individual components.
 */

const EduFeedback = {
    _bound: false,

    init() {
        if (this._bound) return;
        this._bound = true;
        document.documentElement.classList.add('eq-motion-ready');
        document.addEventListener('pointerdown', e => this._onPress(e), { passive: true });
        document.addEventListener('click', e => this._onClick(e), true);
        document.addEventListener('keydown', e => this._onKey(e));
    },

    interactiveSelector() {
        return [
            'button',
            'a[href]',
            '.nav-tab',
            '.hud-chip',
            '.hud-notif-btn',
            '.hud-avatar-btn',
            '.sidebar-item',
            '.mission-card',
            '.daily-mission',
            '.chapter-card',
            '.avatar-option',
            '.avatar-class-card',
            '.wm-node',
            '.wm-label-enter-btn',
            '.bldr-chapter-card',
            '.bldr-stage-card',
            '.bldr-tab',
            '.bldr-btn-sm',
            '.ai-set-card',
            '.aip-option',
            '.rp-mission',
        ].join(',');
    },

    _onPress(event) {
        const target = event.target.closest(this.interactiveSelector());
        if (!target || target.closest('[aria-disabled="true"], :disabled')) return;
        target.classList.add('eq-pressed');
        setTimeout(() => target.classList.remove('eq-pressed'), 180);
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.light);
        }
    },

    _onClick(event) {
        const target = event.target.closest(this.interactiveSelector());
        if (!target || target.closest('[aria-disabled="true"], :disabled')) return;
        if (target.matches('.nav-tab, .hud-chip, .mission-play-btn, .wm-node, .daily-mission, .bldr-tab, .ai-set-card')) {
            EduSprings.pop(target, target.matches('.wm-node') ? 1.2 : 0.75);
        }
        if (target.matches('.aip-option')) {
            EduSprings.soft(target);
        }
        if (typeof SoundManager !== 'undefined') {
            try { SoundManager.play('click'); } catch (_) {}
        }
    },

    _onKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && document.activeElement) {
            const target = document.activeElement.closest(this.interactiveSelector());
            if (target) EduSprings.press(target);
        }
    },

    reward(selector, burstEl) {
        selector = selector || '.hud-xp-wrap, .hud-gems-wrap';
        document.querySelectorAll(selector).forEach(el => {
            EduSprings.reward(el);
            EduTransitions.shimmer(el);
        });
        if (burstEl && typeof EduTactile !== 'undefined') {
            EduTactile.rewardBurst(burstEl);
        }
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.reward);
        }
    },

    avatarMood(mood = 'idle') {
        document.querySelectorAll('.hud-avatar-btn, .home-greeting-avatar, .profile-hero-avatar, .battle-sprite.player-sprite')
            .forEach(el => {
                el.dataset.mood = mood;
                EduSprings.pop(el, mood === 'celebrate' ? 1.5 : 0.7);
            });
    },
};

window.EduFeedback = EduFeedback;
