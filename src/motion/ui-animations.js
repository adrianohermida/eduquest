/**
 * EduQuest UI Animations
 * Counters, stagger reveals, scroll-triggered entrances, progress bars.
 */

const EduAnimations = {
    _observer: null,

    init() {
        if (typeof IntersectionObserver === 'undefined') return;
        this._observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                this._revealEl(entry.target);
                this._observer.unobserve(entry.target);
            });
        }, { threshold: 0.10, rootMargin: '0px 0px -20px 0px' });
    },

    observe(root) {
        if (!this._observer || !root) return;
        root.querySelectorAll('.eq-reveal:not(.eq-revealed)').forEach(el => {
            this._observer.observe(el);
        });
    },

    _revealEl(el) {
        if (EduTransitions.reducedMotion()) {
            el.classList.add('eq-revealed');
            return;
        }
        el.classList.add('eq-revealed');
        const delay = parseInt(el.dataset.revealDelay, 10) || 0;
        el.animate([
            { opacity: 0, transform: 'translateY(12px)' },
            { opacity: 1, transform: 'translateY(0)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.soft,
            fill: 'both',
        });
    },

    counter(el, from, to, duration, suffix) {
        if (!el) return;
        duration = duration || 600;
        suffix = suffix || '';
        const start = performance.now();
        const range = to - from;
        const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const step = now => {
            const elapsed = Math.min(now - start, duration);
            el.textContent = Math.round(from + range * ease(elapsed / duration)) + suffix;
            if (elapsed < duration) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    },

    stagger(els, options) {
        if (!els || !els.length || EduTransitions.reducedMotion()) return;
        const delay = (options && options.delay) || 54;
        const distance = (options && options.distance) || 12;
        const from = (options && options.from) || 'bottom';
        const ty = from === 'top' ? -distance : distance;

        Array.from(els).forEach((el, i) => {
            el.animate([
                { opacity: 0, transform: `translateY(${ty}px)` },
                { opacity: 1, transform: 'translateY(0)' },
            ], {
                duration: EduMotionTokens.duration.base,
                delay: i * delay,
                easing: EduMotionTokens.easing.soft,
                fill: 'both',
            });
        });
    },

    popIn(el, delay) {
        if (!el || EduTransitions.reducedMotion()) return;
        delay = delay || 0;
        el.animate([
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1.05)', offset: 0.62 },
            { opacity: 1, transform: 'scale(1)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.spring,
            fill: 'both',
        });
    },

    slideIn(el, direction, delay) {
        if (!el || EduTransitions.reducedMotion()) return;
        direction = direction || 'up';
        delay = delay || 0;
        const map = { up: 'translateY(16px)', down: 'translateY(-16px)', left: 'translateX(16px)', right: 'translateX(-16px)' };
        el.animate([
            { opacity: 0, transform: map[direction] || 'translateY(16px)' },
            { opacity: 1, transform: 'translate(0,0)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.soft,
            fill: 'both',
        });
    },

    progressBar(fill, targetPct, duration) {
        if (!fill) return;
        duration = duration || 680;
        const current = parseFloat(fill.style.width) || 0;
        fill.animate([
            { width: `${current}%` },
            { width: `${targetPct}%` },
        ], {
            duration,
            easing: EduMotionTokens.easing.soft,
            fill: 'forwards',
        });
    },

    staggerCards(container, selector) {
        if (!container) return;
        selector = selector || '.chapter-card,.mission-card,.daily-mission,.bldr-chapter-card,.bldr-stage-card,.ai-set-card';
        this.stagger(container.querySelectorAll(selector), { delay: 44 });
    },

    idleFloat(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-4px)', offset: 0.5 },
            { transform: 'translateY(0px)' },
        ], {
            duration: 3200 + Math.random() * 800,
            iterations: Infinity,
            easing: 'ease-in-out',
        });
    },
};

window.EduAnimations = EduAnimations;
EduAnimations.init();
