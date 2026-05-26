/* ════════════════════════════════════════════════════════════
   SESSION GUARD — Inactivity timer + sleep screen
   15 min idle → cochilo screen → resume or re-login
   ════════════════════════════════════════════════════════════ */

'use strict';

window.SessionGuard = (() => {

    const IDLE_MS      = 15 * 60 * 1000;   // 15 min
    const WARN_MS      = 14 * 60 * 1000;   // warn at 14 min (1 min before)
    const CHECK_MS     = 10_000;            // check session every 10 s while asleep

    const SKIP_ROUTES  = new Set(['landing', 'login', 'register', 'onboarding', 'reset-password', 'stage', 'speed-drill', 'reading']);

    let _idleTimer   = null;
    let _warnTimer   = null;
    let _checkTimer  = null;
    let _sleeping    = false;
    let _started     = false;
    let _resumeRoute = '#home';

    /* ── CSS (injected once) ─────────────────────────────── */
    function _injectCSS() {
        if (document.getElementById('sg-style')) return;
        document.head.insertAdjacentHTML('beforeend', `
        <style id="sg-style">
        /* ── Sleep Overlay ── */
        #sg-overlay {
            position: fixed;
            inset: 0;
            z-index: 10500;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(ellipse at 50% 60%, #1e1033 0%, #0f0a1e 70%);
            animation: sg-fade-in 600ms ease forwards;
        }
        @keyframes sg-fade-in {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Stars */
        .sg-stars {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .sg-star {
            position: absolute;
            border-radius: 50%;
            background: #fff;
            animation: sg-twinkle var(--dur, 3s) ease-in-out infinite;
            animation-delay: var(--delay, 0s);
            opacity: 0;
        }
        @keyframes sg-twinkle {
            0%, 100% { opacity: 0;   transform: scale(0.8); }
            50%       { opacity: 0.9; transform: scale(1.2); }
        }

        /* Moon */
        .sg-moon {
            position: absolute;
            top: 8%;
            right: 12%;
            font-size: 3.2rem;
            animation: sg-float 6s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(255,220,120,0.45));
        }
        @keyframes sg-float {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(-10px); }
        }

        /* Panel */
        .sg-panel {
            position: relative;
            text-align: center;
            padding: 48px 40px 40px;
            max-width: 380px;
            width: 90%;
            animation: sg-pop-in 500ms cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes sg-pop-in {
            from { transform: translateY(24px) scale(0.94); opacity: 0; }
            to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }

        .sg-character {
            font-size: 5rem;
            display: block;
            margin-bottom: 16px;
            animation: sg-breathe 4s ease-in-out infinite;
            filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
        }
        @keyframes sg-breathe {
            0%, 100% { transform: scale(1)    rotate(-2deg); }
            50%       { transform: scale(1.06) rotate(2deg);  }
        }

        .sg-zz {
            position: absolute;
            top: 28px;
            right: 60px;
            font-size: 1.4rem;
            color: #a78bfa;
            font-weight: 900;
            font-family: 'Nunito', sans-serif;
            animation: sg-zz-float 2.4s ease-in-out infinite;
        }
        .sg-zz:nth-child(2) { font-size: 1rem; top: 44px; right: 78px; animation-delay: 0.8s; }
        .sg-zz:nth-child(3) { font-size: 0.7rem; top: 56px; right: 92px; animation-delay: 1.6s; }
        @keyframes sg-zz-float {
            0%   { opacity: 0; transform: translate(0,0)    scale(0.8); }
            30%  { opacity: 1; }
            100% { opacity: 0; transform: translate(-10px,-28px) scale(1.1); }
        }

        .sg-title {
            font-family: 'Nunito', sans-serif;
            font-size: 1.5rem;
            font-weight: 900;
            color: #f1f5f9;
            letter-spacing: -0.4px;
            margin-bottom: 10px;
        }
        .sg-sub {
            font-family: 'Nunito', sans-serif;
            font-size: 0.9rem;
            color: #94a3b8;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: 28px;
        }
        .sg-sub strong { color: #c4b5fd; font-weight: 800; }

        .sg-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: #fff;
            font-family: 'Nunito', sans-serif;
            font-size: 1rem;
            font-weight: 900;
            padding: 14px 32px;
            border-radius: 99px;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 24px rgba(249,115,22,0.45);
            transition: transform 150ms, box-shadow 150ms;
            width: 100%;
            justify-content: center;
        }
        .sg-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(249,115,22,0.55);
        }
        .sg-btn:active { transform: scale(0.97); }

        .sg-btn-ghost {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 12px;
            width: 100%;
            background: none;
            border: 1px solid rgba(255,255,255,0.12);
            color: #64748b;
            font-family: 'Nunito', sans-serif;
            font-size: 0.82rem;
            font-weight: 700;
            padding: 10px 24px;
            border-radius: 99px;
            cursor: pointer;
            transition: border-color 150ms, color 150ms;
        }
        .sg-btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: #94a3b8; }

        /* Warn flash on the HUD chips */
        @keyframes sg-warn-pulse {
            0%, 100% { box-shadow: none; }
            50%       { box-shadow: 0 0 0 3px rgba(249,115,22,0.5); }
        }
        .sg-warn-pulse { animation: sg-warn-pulse 1s ease-in-out 3; }
        </style>`);
    }

    /* ── Stars factory ───────────────────────────────────── */
    function _buildStars(count = 60) {
        return Array.from({ length: count }, () => {
            const size  = Math.random() * 3 + 1;
            const dur   = (Math.random() * 4 + 2).toFixed(1);
            const delay = (Math.random() * 5).toFixed(1);
            const top   = Math.random() * 100;
            const left  = Math.random() * 100;
            return `<div class="sg-star" style="
                width:${size}px;height:${size}px;
                top:${top}%;left:${left}%;
                --dur:${dur}s;--delay:${delay}s"></div>`;
        }).join('');
    }

    /* ── Show sleep screen ───────────────────────────────── */
    function _showSleep() {
        if (_sleeping) return;
        _sleeping    = true;
        _resumeRoute = window.location.hash || '#home';

        // Don't interrupt fullscreen game
        const route = (_resumeRoute.replace('#','').split('/')[0]);
        if (SKIP_ROUTES.has(route)) { _sleeping = false; return; }

        document.body.insertAdjacentHTML('beforeend', `
        <div id="sg-overlay" role="dialog" aria-modal="true" aria-label="Sessão pausada">
            <div class="sg-stars">${_buildStars()}</div>
            <div class="sg-moon">🌙</div>
            <div class="sg-panel">
                <span class="sg-zz">z</span>
                <span class="sg-zz">z</span>
                <span class="sg-zz">z</span>
                <span class="sg-character" aria-hidden="true">😴</span>
                <div class="sg-title">Psst… fui dar um cochilo!</div>
                <div class="sg-sub">
                    Você ficou <strong>15 minutos</strong> sem atividade.<br>
                    Sua aventura está te esperando!
                </div>
                <button class="sg-btn" onclick="SessionGuard.resume()">
                    ▸ Estou aqui! Continuar
                </button>
                <button class="sg-btn-ghost" onclick="SessionGuard.logout()">
                    🚪 Sair da conta
                </button>
            </div>
        </div>`);

        // Check if session is still alive in the background
        _checkTimer = setInterval(_pingSession, CHECK_MS);
    }

    /* ── Ping Supabase session ───────────────────────────── */
    async function _pingSession() {
        if (!_sleeping) { clearInterval(_checkTimer); return; }
        try {
            const c = window.SupaClient?.getClient?.();
            if (!c) return;
            const { data } = await c.auth.getSession();
            if (!data?.session) {
                // Session expired server-side → force proper logout UI
                clearInterval(_checkTimer);
                _forceExpired();
            }
        } catch (_) { /* offline — stay asleep */ }
    }

    function _forceExpired() {
        const panel = document.querySelector('.sg-panel');
        if (!panel) return;
        panel.innerHTML = `
            <span class="sg-character" aria-hidden="true">⏰</span>
            <div class="sg-title">Sessão expirada</div>
            <div class="sg-sub">
                Sua sessão foi encerrada por segurança.<br>
                Faça login para continuar.
            </div>
            <button class="sg-btn" onclick="SessionGuard.logout()">
                🔑 Fazer login novamente
            </button>`;
    }

    /* ── Warn (1 min before sleep) ───────────────────────── */
    function _warnUser() {
        // Subtle pulse on HUD chips to signal impending sleep
        document.querySelectorAll('.hud-chip, .hud-notif-btn').forEach(el => {
            el.classList.remove('sg-warn-pulse');
            void el.offsetWidth; // force reflow
            el.classList.add('sg-warn-pulse');
        });
    }

    /* ── Activity listener ───────────────────────────────── */
    function _onActivity() {
        if (_sleeping) return; // don't reset while sleep screen is showing
        _resetTimers();
    }

    function _resetTimers() {
        clearTimeout(_idleTimer);
        clearTimeout(_warnTimer);
        _warnTimer = setTimeout(_warnUser,  WARN_MS);
        _idleTimer = setTimeout(_showSleep, IDLE_MS);
    }

    /* ── Public: resume ──────────────────────────────────── */
    async function resume() {
        // Verify session is still valid before resuming
        try {
            const c = window.SupaClient?.getClient?.();
            if (c) {
                const { data } = await c.auth.getSession();
                if (!data?.session) { logout(); return; }
            }
        } catch (_) { /* offline — allow resume optimistically */ }

        clearInterval(_checkTimer);
        _sleeping = false;

        const overlay = document.getElementById('sg-overlay');
        if (overlay) {
            overlay.style.animation = 'sg-fade-in 300ms ease reverse forwards';
            setTimeout(() => overlay.remove(), 280);
        }
        _resetTimers();
    }

    /* ── Public: logout ──────────────────────────────────── */
    async function logout() {
        clearInterval(_checkTimer);
        _sleeping = false;
        document.getElementById('sg-overlay')?.remove();
        if (typeof State !== 'undefined') {
            await State.logoutAsync();
        } else {
            window.location.hash = '#landing';
        }
    }

    /* ── Init ────────────────────────────────────────────── */
    function init() {
        _injectCSS();

        const EVENTS = ['mousemove','mousedown','keydown','touchstart','pointerdown','scroll','wheel'];
        EVENTS.forEach(ev => document.addEventListener(ev, _onActivity, { passive: true }));

        _resetTimers();
    }

    /* ── Guard: only run for authenticated users ─────────── */
    function start() {
        if (typeof State === 'undefined' || !State.isAuthenticated()) return;
        if (_started) { _resetTimers(); return; } // already listening — just reset
        _started = true;
        init();
    }

    return { start, resume, logout };
})();
