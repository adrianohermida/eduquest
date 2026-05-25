/**
 * EDUQUEST UTILS v2.0
 */

const Utils = {
    $(sel)   { return document.querySelector(sel); },
    $$(sel)  { return document.querySelectorAll(sel); },

    createElement(tag, className = '', html = '') {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (html)      el.innerHTML = html;
        return el;
    },

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    confetti() {
        const colors = ['#f97316', '#ea580c', '#fbbf24', '#fb923c', '#fdba74', '#fff'];
        for (let i = 0; i < 40; i++) {
            const el = document.createElement('div');
            el.className = 'confetti';
            el.style.cssText = `
                left: ${Math.random() * 100}vw;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                width: ${6 + Math.random() * 8}px;
                height: ${6 + Math.random() * 8}px;
                animation-duration: ${2 + Math.random() * 1.5}s;
                animation-delay: ${Math.random() * 0.5}s;
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            `;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 3500);
        }
    }
};

window.Utils = Utils;
