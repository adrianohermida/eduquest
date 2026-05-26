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
    },
    easing: {
        standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        press: 'cubic-bezier(0.2, 0, 0, 1)',
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    scale: {
        press: 0.96,
        softPress: 0.985,
        lift: 1.018,
        pop: 1.08,
    },
    haptics: {
        light: 10,
        medium: 18,
        reward: [12, 36, 18],
        error: [18, 22, 18],
    },
};

window.EduMotionTokens = EduMotionTokens;
