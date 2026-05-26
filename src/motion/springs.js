/**
 * Small spring-like helpers using Web Animations.
 */

const EduSprings = {
    pop(el, intensity = 1) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${1 + 0.08 * intensity})`, offset: 0.45 },
            { transform: 'scale(1)' },
        ], {
            duration: EduMotionTokens.duration.base,
            easing: EduMotionTokens.easing.spring,
        });
    },

    press(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${EduMotionTokens.scale.press})`, offset: 0.45 },
            { transform: 'scale(1)' },
        ], {
            duration: EduMotionTokens.duration.fast,
            easing: EduMotionTokens.easing.press,
        });
    },

    reward(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'translateY(0) scale(1)', filter: 'brightness(1)' },
            { transform: 'translateY(-3px) scale(1.08)', filter: 'brightness(1.08)', offset: 0.38 },
            { transform: 'translateY(0) scale(1)', filter: 'brightness(1)' },
        ], {
            duration: EduMotionTokens.duration.reward,
            easing: EduMotionTokens.easing.spring,
        });
    },
};

window.EduSprings = EduSprings;
