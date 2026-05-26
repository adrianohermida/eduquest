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
};

window.EduTransitions = EduTransitions;
