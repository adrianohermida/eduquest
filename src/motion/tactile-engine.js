/**
 * EduQuest Tactile Engine
 * Particle bursts, floating labels, reward sparks, combo flashes.
 */

const EduTactile = {

    floatText(el, text, color) {
        if (!el || EduTransitions.reducedMotion()) return;
        color = color || 'var(--brand)';
        const rect = el.getBoundingClientRect();
        const node = document.createElement('div');
        node.style.cssText = [
            'position:fixed',
            `left:${rect.left + rect.width / 2}px`,
            `top:${rect.top}px`,
            'transform:translateX(-50%)',
            `color:${color}`,
            'font-size:.9rem',
            'font-weight:900',
            'font-family:inherit',
            'pointer-events:none',
            'z-index:9999',
            'text-shadow:0 1px 4px rgba(0,0,0,.18)',
            'will-change:transform,opacity',
            'white-space:nowrap',
        ].join(';');
        node.textContent = text;
        document.body.appendChild(node);
        node.animate([
            { transform: 'translateX(-50%) translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateX(-50%) translateY(-40px) scale(1.12)', opacity: 1, offset: 0.55 },
            { transform: 'translateX(-50%) translateY(-56px) scale(1)', opacity: 0 },
        ], {
            duration: 780,
            easing: EduMotionTokens.easing.soft,
            fill: 'forwards',
        }).onfinish = () => node.remove();
    },

    xpBurst(el, amount) {
        this.floatText(el, `+${amount} XP`, 'var(--brand)');
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.success || [12, 16, 24]);
        }
    },

    gemBurst(el, amount) {
        this.floatText(el, `+${amount}`, '#3b82f6');
    },

    heartLost(el) {
        this.floatText(el, '-1', 'var(--error, #ef4444)');
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.error);
        }
    },

    sparks(el, count) {
        if (!el || EduTransitions.reducedMotion()) return;
        count = count || 6;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const colors = ['#f97316', '#fb923c', '#fed7aa', '#fbbf24', '#fde68a', '#fdba74'];

        for (let i = 0; i < count; i++) {
            const angle = (360 / count) * i + (Math.random() * 24 - 12);
            const dist = 22 + Math.random() * 26;
            const rad = (angle * Math.PI) / 180;
            const tx = Math.cos(rad) * dist;
            const ty = Math.sin(rad) * dist;
            const size = 3 + Math.random() * 4;

            const spark = document.createElement('div');
            spark.style.cssText = [
                'position:fixed',
                `left:${cx}px`,
                `top:${cy}px`,
                `width:${size}px`,
                `height:${size}px`,
                'border-radius:50%',
                `background:${colors[i % colors.length]}`,
                'pointer-events:none',
                'z-index:9999',
                'will-change:transform,opacity',
            ].join(';');
            document.body.appendChild(spark);

            spark.animate([
                { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px)) scale(0.18)`, opacity: 0 },
            ], {
                duration: 440 + Math.random() * 180,
                delay: i * 18,
                easing: 'cubic-bezier(0,0,0.2,1)',
                fill: 'forwards',
            }).onfinish = () => spark.remove();
        }
    },

    rewardBurst(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        this.sparks(el, 8);
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.reward);
        }
    },

    comboFlash(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { boxShadow: '0 0 0 0 rgba(249,115,22,0)' },
            { boxShadow: '0 0 0 8px rgba(249,115,22,0.22)', offset: 0.35 },
            { boxShadow: '0 0 0 0 rgba(249,115,22,0)' },
        ], { duration: 540, easing: EduMotionTokens.easing.soft });
    },

    successGlow(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { boxShadow: '0 0 0 0 rgba(34,197,94,0)' },
            { boxShadow: '0 0 0 8px rgba(34,197,94,0.28)', offset: 0.4 },
            { boxShadow: '0 0 0 0 rgba(34,197,94,0)' },
        ], { duration: 620, easing: EduMotionTokens.easing.soft });
    },

    errorShake(el) {
        if (!el || EduTransitions.reducedMotion()) return;
        el.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-6px)', offset: 0.18 },
            { transform: 'translateX(5px)', offset: 0.38 },
            { transform: 'translateX(-4px)', offset: 0.56 },
            { transform: 'translateX(3px)', offset: 0.74 },
            { transform: 'translateX(0)' },
        ], {
            duration: 440,
            easing: EduMotionTokens.easing.standard,
        });
        if (navigator.vibrate && !EduTransitions.reducedMotion()) {
            navigator.vibrate(EduMotionTokens.haptics.error);
        }
    },
};

window.EduTactile = EduTactile;
