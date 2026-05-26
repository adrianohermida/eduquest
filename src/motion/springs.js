/**
 * Spring-like helpers using Web Animations API.
 */

const EduSprings = {
    pop(el, intensity) {
        if (!el || EduTransitions.reducedMotion()) return;
        intensity = intensity == null ? 1 : intensity;
        el.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${1 + 0.08 * intensity})`, offset: 0.45 },
            { transform: 'scale(1)' },
        ], { duration: EduMotionTokens.duration.base, easing: EduMotionTokens.easing.spring });
    },

    press(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${EduMotionTokens.scale.press})`, offset: 0.45 },
            { transform: 'scale(1)' },
        ], { duration: EduMotionTokens.duration.fast, easing: EduMotionTokens.easing.press });
    },

    reward(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'translateY(0) scale(1)', filter: 'brightness(1)' },
            { transform: 'translateY(-4px) scale(1.10)', filter: 'brightness(1.10)', offset: 0.38 },
            { transform: 'translateY(-1px) scale(1.04)', offset: 0.62 },
            { transform: 'translateY(0) scale(1)', filter: 'brightness(1)' },
        ], { duration: EduMotionTokens.duration.reward, easing: EduMotionTokens.easing.spring });
    },

    soft(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.04)', offset: 0.5 },
            { transform: 'scale(1)' },
        ], { duration: EduMotionTokens.duration.base, easing: EduMotionTokens.easing.soft });
    },

    bounce(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${EduMotionTokens.scale.bounce})`, offset: 0.42 },
            { transform: 'scale(0.96)', offset: 0.70 },
            { transform: 'scale(1)' },
        ], { duration: EduMotionTokens.duration.reward, easing: EduMotionTokens.easing.bounce });
    },

    shake(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-7px)', offset: 0.15 },
            { transform: 'translateX(6px)',  offset: 0.35 },
            { transform: 'translateX(-5px)', offset: 0.55 },
            { transform: 'translateX(3px)',  offset: 0.75 },
            { transform: 'translateX(0)' },
        ], { duration: 420, easing: EduMotionTokens.easing.standard });
    },

    wiggle(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-6deg)', offset: 0.25 },
            { transform: 'rotate(6deg)',  offset: 0.50 },
            { transform: 'rotate(-3deg)', offset: 0.75 },
            { transform: 'rotate(0deg)' },
        ], { duration: 480, easing: EduMotionTokens.easing.spring });
    },

    enter(el, delay) {
        if (!el || EduTransitions.reducedMotion()) return;
        delay = delay || 0;
        el.animate([
            { opacity: 0, transform: 'scale(0.88) translateY(8px)' },
            { opacity: 1, transform: 'scale(1.02) translateY(-2px)', offset: 0.6 },
            { opacity: 1, transform: 'scale(1) translateY(0)' },
        ], {
            duration: EduMotionTokens.duration.base,
            delay,
            easing: EduMotionTokens.easing.spring,
            fill: 'both',
        });
    },
};

window.EduSprings = EduSprings;
