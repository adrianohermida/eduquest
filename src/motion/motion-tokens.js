/**
 * EduQuest Motion Tokens
 * Shared motion vocabulary for premium mobile game feel.
 */

const EduMotionTokens = {
    duration: {
        instant: 90,
        fast: 160,
        base: 240,
        slow: 420,
        reward: 720,
        long: 1200,
    },
    easing: {
        standard:   'cubic-bezier(0.2, 0.8, 0.2, 1)',
        spring:     'cubic-bezier(0.34, 1.56, 0.64, 1)',
        bounce:     'cubic-bezier(0.34, 1.82, 0.64, 1)',
        press:      'cubic-bezier(0.2, 0, 0, 1)',
        soft:       'cubic-bezier(0.22, 1, 0.36, 1)',
        elastic:    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        game:       'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
    },
    scale: {
        press:     0.96,
        softPress: 0.985,
        lift:      1.018,
        pop:       1.08,
        bounce:    1.14,
    },
    haptics: {
        light:   10,
        medium:  18,
        heavy:   28,
        reward:  [12, 36, 18],
        success: [12, 16, 24],
        error:   [18, 22, 18],
        warning: [14, 18],
    },

    cssInject() {
        const r = document.documentElement.style;
        const d = this.duration;
        const e = this.easing;
        r.setProperty('--dur-instant', `${d.instant}ms`);
        r.setProperty('--dur-fast',    `${d.fast}ms`);
        r.setProperty('--dur-base',    `${d.base}ms`);
        r.setProperty('--dur-slow',    `${d.slow}ms`);
        r.setProperty('--dur-reward',  `${d.reward}ms`);
        r.setProperty('--ease-standard',   e.standard);
        r.setProperty('--ease-spring',     e.spring);
        r.setProperty('--ease-bounce',     e.bounce);
        r.setProperty('--ease-press',      e.press);
        r.setProperty('--ease-soft',       e.soft);
        r.setProperty('--ease-elastic',    e.elastic);
        r.setProperty('--ease-game',       e.game);
        r.setProperty('--ease-decelerate', e.decelerate);
    },
};

window.EduMotionTokens = EduMotionTokens;
EduMotionTokens.cssInject();
