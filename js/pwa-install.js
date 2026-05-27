/**
 * EduQuest PWA Install Prompt v2.0
 * - Bottom sheet with X dismiss button
 * - Draggable floating FAB (hold & drag) after banner dismissed
 * - Remembers dismissal for 7 days
 * - Respects bottom-nav safe area
 */

const PWAInstall = {
    _prompt: null,
    _fab:    null,
    _DISMISS_KEY: 'eq_pwa_dismiss',
    _DISMISS_DAYS: 7,

    init() {
        // Don't show if already installed as PWA
        if (this._isInstalled()) return;

        // Don't show if dismissed recently
        const dismissed = localStorage.getItem(this._DISMISS_KEY);
        if (dismissed && Date.now() - Number(dismissed) < this._DISMISS_DAYS * 86400000) {
            this._showFAB(); // show small FAB only
            return;
        }

        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            this._deferred = e;
            // Delay banner slightly so main app can render first
            setTimeout(() => this._showBanner(), 2800);
        });

        window.addEventListener('appinstalled', () => {
            this._deferred = null;
            this._hideBanner();
            this._hideFAB();
        });
    },

    _isInstalled() {
        return window.matchMedia('(display-mode: standalone)').matches ||
               window.navigator.standalone === true;
    },

    // ── Bottom Sheet Banner ────────────────────────────────
    _showBanner() {
        if (document.getElementById('pwa-banner')) return;

        const el = document.createElement('div');
        el.id = 'pwa-banner';
        el.innerHTML = `
            <div class="pwa-banner-icon">📲</div>
            <div class="pwa-banner-text">
                <strong>Instalar EduQuest</strong>
                <span>Acesse offline, mais rápido</span>
            </div>
            <button class="pwa-banner-install" id="pwa-btn-install">Instalar</button>
            <button class="pwa-banner-close"  id="pwa-btn-close"   aria-label="Fechar">✕</button>
        `;
        document.body.appendChild(el);

        // Animate in
        requestAnimationFrame(() => el.classList.add('pwa-banner--show'));

        document.getElementById('pwa-btn-install').addEventListener('click', () => this._triggerInstall());
        document.getElementById('pwa-btn-close').addEventListener('click',   () => this._dismissBanner());
    },

    _hideBanner() {
        const el = document.getElementById('pwa-banner');
        if (!el) return;
        el.classList.remove('pwa-banner--show');
        setTimeout(() => el.remove(), 350);
    },

    _dismissBanner() {
        localStorage.setItem(this._DISMISS_KEY, String(Date.now()));
        this._hideBanner();
        this._showFAB();
    },

    // ── Draggable FAB ──────────────────────────────────────
    _showFAB() {
        if (!this._deferred) return;
        if (document.getElementById('pwa-fab')) return;

        const fab = document.createElement('div');
        fab.id = 'pwa-fab';
        fab.innerHTML = `
            <span class="pwa-fab-icon">📲</span>
            <button class="pwa-fab-close" id="pwa-fab-close" aria-label="Fechar">✕</button>
        `;
        document.body.appendChild(fab);
        this._fab = fab;

        // Tap = install
        fab.addEventListener('click', e => {
            if (e.target.id === 'pwa-fab-close') {
                fab.remove();
                this._fab = null;
                return;
            }
            if (!this._dragged) this._triggerInstall();
        });

        // Drag support
        this._makeDraggable(fab);
    },

    _hideFAB() {
        if (this._fab) { this._fab.remove(); this._fab = null; }
    },

    _makeDraggable(el) {
        let startX, startY, startElX, startElY;
        this._dragged = false;

        const getPos = e => {
            const t = e.touches?.[0] || e;
            return { x: t.clientX, y: t.clientY };
        };

        const onDown = e => {
            this._dragged = false;
            const pos = getPos(e);
            const rect = el.getBoundingClientRect();
            startX = pos.x; startY = pos.y;
            startElX = rect.left; startElY = rect.top;
            el.style.transition = 'none';
            window.addEventListener('mousemove', onMove);
            window.addEventListener('touchmove', onMove, { passive: false });
            window.addEventListener('mouseup',   onUp);
            window.addEventListener('touchend',  onUp);
        };

        const onMove = e => {
            e.preventDefault?.();
            const pos = getPos(e);
            const dx = pos.x - startX;
            const dy = pos.y - startY;
            if (Math.abs(dx) > 6 || Math.abs(dy) > 6) this._dragged = true;
            if (!this._dragged) return;
            const vw = window.innerWidth, vh = window.innerHeight;
            const elW = el.offsetWidth, elH = el.offsetHeight;
            const nx = Math.max(8, Math.min(vw - elW - 8, startElX + dx));
            const ny = Math.max(8, Math.min(vh - elH - 8, startElY + dy));
            el.style.left   = nx + 'px';
            el.style.top    = ny + 'px';
            el.style.right  = 'auto';
            el.style.bottom = 'auto';
        };

        const onUp = () => {
            el.style.transition = '';
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('mouseup',   onUp);
            window.removeEventListener('touchend',  onUp);
        };

        el.addEventListener('mousedown',  onDown);
        el.addEventListener('touchstart', onDown, { passive: true });
    },

    async _triggerInstall() {
        if (!this._deferred) return;
        this._hideBanner();
        this._deferred.prompt();
        const { outcome } = await this._deferred.userChoice;
        this._deferred = null;
        if (outcome === 'accepted') this._hideFAB();
    }
};

// Auto-init
PWAInstall.init();

// Legacy compat
window.pwaInstallManager = PWAInstall;
