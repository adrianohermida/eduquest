/**
 * Runtime transition utilities.
 */

const EduTransitions = {
    reducedMotion() {
        return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    },

    pageEnter(container) {
        if (!container || this.reducedMotion()) return;
        container.classList.remove('eq-page-enter');
        void container.offsetWidth;
        container.classList.add('eq-page-enter');
        if (typeof EduAnimations !== 'undefined') {
            requestAnimationFrame(() => EduAnimations.observe(container));
        }
    },

    markRoute(route) {
        document.body.dataset.route = route || 'home';
    },

    shimmer(el) {
        if (!el || this.reducedMotion()) return;
        el.classList.remove('eq-reward-shimmer');
        void el.offsetWidth;
        el.classList.add('eq-reward-shimmer');
        setTimeout(() => el.classList.remove('eq-reward-shimmer'), 900);
    },

    slideIn(el, direction, delay) {
        if (!el || this.reducedMotion()) return;
        direction = direction || 'up';
        delay = delay || 0;
        const map = {
            up:    'translateY(20px)',
            down:  'translateY(-20px)',
            left:  'translateX(20px)',
            right: 'translateX(-20px)',
        };
        el.animate([
            { opacity: 0, transform: map[direction] || 'translateY(20px)' },
            { opacity: 1, transform: 'translate(0,0)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.soft,
            fill: 'both',
        });
    },

    fadeUp(el, delay) {
        if (!el || this.reducedMotion()) return;
        delay = delay || 0;
        el.animate([
            { opacity: 0, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'translateY(0)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.soft,
            fill: 'both',
        });
    },

    stagger(container, selector, baseDelay) {
        if (!container || this.reducedMotion()) return;
        baseDelay = baseDelay || 48;
        Array.from(container.querySelectorAll(selector)).forEach((el, i) => {
            this.fadeUp(el, i * baseDelay);
        });
    },
};

window.EduTransitions = EduTransitions;
