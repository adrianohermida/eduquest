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
        for (let i = 0; i < 52; i++) {
            const el = document.createElement('div');
            el.className = 'confetti';
            el.style.cssText = `
                left: ${Math.random() * 100}vw;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                width: ${5 + Math.random() * 9}px;
                height: ${5 + Math.random() * 9}px;
                animation-duration: ${1.8 + Math.random() * 1.8}s;
                animation-delay: ${Math.random() * 0.6}s;
                border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }
    },

    // Burst particles from a specific DOM element (reward pop)
    burst(el, count = 12, color = '#f97316') {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top  + r.height / 2;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            const angle = (i / count) * 360;
            const dist  = 28 + Math.random() * 32;
            const dx    = Math.cos(angle * Math.PI / 180) * dist;
            const dy    = Math.sin(angle * Math.PI / 180) * dist;
            p.className = 'burst-particle';
            p.style.cssText = `
                left:${cx}px; top:${cy}px;
                background:${color};
                --dx:${dx}px; --dy:${dy}px;
                width:${4 + Math.random() * 4}px;
                height:${4 + Math.random() * 4}px;
                border-radius:${Math.random() > 0.4 ? '50%' : '2px'};
            `;
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 700);
        }
    },

    // Animate a number counting up in an element
    countUp(el, from, to, duration = 800) {
        if (!el) return;
        const start = performance.now();
        const step  = (now) => {
            const t   = Math.min((now - start) / duration, 1);
            const val = Math.round(from + (to - from) * (t < 0.5 ? 2*t*t : -1+(4-2*t)*t));
            el.textContent = val;
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    },
};

window.Utils = Utils;
