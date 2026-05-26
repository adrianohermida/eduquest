/**
 * EduQuest Adventure Map Engine
 * Node animation helpers.
 */

const AdventureNodeAnimations = {
    bump(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('wm-node-bump');
        void el.offsetWidth;
        el.classList.add('wm-node-bump');
        setTimeout(() => el.classList.remove('wm-node-bump'), 520);
    },

    locked(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('wm-node-shake');
        void el.offsetWidth;
        el.classList.add('wm-node-shake');
        setTimeout(() => el.classList.remove('wm-node-shake'), 500);
    },

    burst(x, y) {
        const world = document.getElementById('wm-world');
        if (!world) return;
        for (let i = 0; i < 9; i++) {
            const p = document.createElement('span');
            p.className = 'wm-unlock-burst';
            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.setProperty('--burst-x', `${Math.cos(i / 9 * Math.PI * 2) * 44}px`);
            p.style.setProperty('--burst-y', `${Math.sin(i / 9 * Math.PI * 2) * 44}px`);
            world.appendChild(p);
            setTimeout(() => p.remove(), 680);
        }
    },
};

window.AdventureNodeAnimations = AdventureNodeAnimations;
