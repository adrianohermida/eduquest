/**
 * EDUQUEST SIDEBAR v1.0
 * Responsive navigation manager
 * Mobile: off-canvas drawer | Tablet: compact icons | Desktop: full expanded
 * Right panel: mission quests, streak calendar, rank, boss (desktop only)
 */

const Sidebar = {
    _isOpen: false,

    NAV_ITEMS: [
        { icon: '🗺️', label: 'Início',   route: 'home',     hash: '#home'     },
        { icon: '📚', label: 'Missões',  route: 'missions', hash: '#missions'  },
        { icon: '⚔️', label: 'Arena',    route: 'arena',    hash: '#arena',    soon: true },
        { icon: '🏆', label: 'Ranking',  route: 'ranking',  hash: '#ranking'   },
        { icon: '🛒', label: 'Loja',     route: 'shop',     hash: '#shop'      },
        { icon: '👥', label: 'Turmas',   route: 'teams',    hash: '#teams'     },
        { icon: '🦸', label: 'Perfil',   route: 'profile',  hash: '#profile'   },
    ],

    // ── LIFECYCLE ─────────────────────────────────────────
    init() {
        this._renderSidebar();
        this._renderRightPanel();
        this._bindOverlay();
        this._bindSwipe();
        this._bindKeyboard();
    },

    // ── OPEN / CLOSE / TOGGLE ─────────────────────────────
    open() {
        const el = document.getElementById('sidebar');
        const ov = document.getElementById('sidebar-overlay');
        if (!el) return;
        this._isOpen = true;
        el.classList.add('open');
        if (ov) ov.classList.add('active');
        document.body.style.overflow = 'hidden';
        const btn = document.getElementById('hud-menu-btn');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        // Focus first nav item
        const firstItem = el.querySelector('.sidebar-item:not(.soon)');
        if (firstItem) setTimeout(() => firstItem.focus(), 80);
    },

    close() {
        const el = document.getElementById('sidebar');
        const ov = document.getElementById('sidebar-overlay');
        if (!el) return;
        this._isOpen = false;
        el.classList.remove('open');
        if (ov) ov.classList.remove('active');
        document.body.style.overflow = '';
        const btn = document.getElementById('hud-menu-btn');
        if (btn) {
            btn.setAttribute('aria-expanded', 'false');
            btn.focus();
        }
    },

    toggle() {
        this._isOpen ? this.close() : this.open();
    },

    // ── ACTIVE STATE ──────────────────────────────────────
    updateActive(route) {
        document.querySelectorAll('.sidebar-item').forEach(item => {
            const active = item.dataset.route === route ||
                           (route === '' && item.dataset.route === 'home');
            item.classList.toggle('active', active);
            item.setAttribute('aria-current', active ? 'page' : 'false');
        });
    },

    // ── USER INFO ─────────────────────────────────────────
    updateUser() {
        if (typeof State === 'undefined') return;
        const u = State.data.user;
        const nameEl   = document.getElementById('sb-user-name');
        const levelEl  = document.getElementById('sb-user-level');
        const avatarEl = document.getElementById('sb-user-avatar');
        if (nameEl)   nameEl.textContent   = u.name  || 'Herói';
        if (levelEl)  levelEl.textContent  = `Nível ${u.level || 1}`;
        if (avatarEl) avatarEl.textContent = u.avatar || '🦸';
    },

    // ── REFRESH RIGHT PANEL ───────────────────────────────
    refreshRightPanel() {
        this._renderRightPanel();
    },

    // ── RENDER SIDEBAR ────────────────────────────────────
    _renderSidebar() {
        const el = document.getElementById('sidebar');
        if (!el) return;

        const itemsHTML = this.NAV_ITEMS.map(item => `
            <a class="sidebar-item${item.soon ? ' soon' : ''}"
               href="${item.hash}"
               data-route="${item.route}"
               data-tooltip="${item.label}"
               aria-label="${item.label}${item.soon ? ' — em breve' : ''}"
               role="menuitem"
               ${item.soon ? 'aria-disabled="true" tabindex="-1"' : ''}
            >
                <span class="sidebar-item-icon" aria-hidden="true">${item.icon}</span>
                <span class="sidebar-item-label">${item.label}</span>
                ${item.soon ? '<span class="sidebar-soon-chip" aria-hidden="true">breve</span>' : ''}
            </a>`).join('');

        const u = (typeof State !== 'undefined') ? State.data.user : { name: 'Herói', level: 1, avatar: '🦸' };

        el.innerHTML = `
        <div class="sidebar-inner">

            <a class="sidebar-brand" href="#home" aria-label="EduQuest — Ir para o início">
                <span class="sidebar-brand-icon" aria-hidden="true">⚡</span>
                <span class="sidebar-brand-text">EduQuest</span>
            </a>

            <nav class="sidebar-nav" role="menubar" aria-label="Navegação principal">
                ${itemsHTML}
            </nav>

            <div class="sidebar-footer" aria-label="Usuário atual">
                <a class="sidebar-user" href="#profile" aria-label="Ver perfil de ${u.name}">
                    <span class="sidebar-user-avatar" id="sb-user-avatar" aria-hidden="true">${u.avatar || '🦸'}</span>
                    <div class="sidebar-user-info">
                        <span class="sidebar-user-name"  id="sb-user-name">${u.name || 'Herói'}</span>
                        <span class="sidebar-user-level" id="sb-user-level">Nível ${u.level || 1}</span>
                    </div>
                </a>
            </div>

        </div>`;
    },

    // ── RENDER RIGHT PANEL ────────────────────────────────
    _renderRightPanel() {
        const el = document.getElementById('right-panel');
        if (!el) return;
        if (typeof State === 'undefined') return;

        const user     = State.data.user;
        const missions = State.getMissions();
        const rank     = State.getRank();
        const calendar = State.getStreakCalendar();

        const calHTML = calendar.map(d => `
            <div class="rp-cal-day${d.active ? ' active' : ''}${d.isToday ? ' today' : ''}"
                 role="listitem"
                 aria-label="${d.label}${d.active ? ', streak ativo' : ''}">
                <span class="rp-cal-dot" aria-hidden="true">${d.active ? '🔥' : '○'}</span>
                <span class="rp-cal-label">${d.label}</span>
            </div>`).join('');

        const mHTML = missions.map(m => `
            <div class="rp-mission${m.completed ? ' done' : ''}" role="listitem">
                <span class="rp-mission-icon" aria-hidden="true">${m.icon}</span>
                <div class="rp-mission-body">
                    <div class="rp-mission-title">${m.title}</div>
                    <div class="rp-mission-reward">⚡ +${m.xp}${m.gems ? ` · 💎 +${m.gems}` : ''}</div>
                </div>
                <span class="rp-mission-check" aria-label="${m.completed ? 'Concluída' : 'Pendente'}">${m.completed ? '✅' : '⬜'}</span>
            </div>`).join('');

        el.innerHTML = `
        <div class="rp-inner">

            <section class="rp-section" aria-labelledby="rp-streak-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-streak-lbl">🔥 Sequência</h2>
                    <span class="rp-streak-count" aria-label="${user.streak || 1} dias">${user.streak || 1} dia${(user.streak || 1) !== 1 ? 's' : ''}</span>
                </div>
                <div class="rp-calendar" role="list" aria-label="Calendário de sequência">${calHTML}</div>
            </section>

            <section class="rp-section" aria-labelledby="rp-quests-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-quests-lbl">⚡ Missões do Dia</h2>
                    <span class="rp-badge" aria-label="${missions.filter(m=>m.completed).length} de ${missions.length} concluídas">${missions.filter(m=>m.completed).length}/${missions.length}</span>
                </div>
                <div role="list" aria-label="Lista de missões diárias">${mHTML}</div>
            </section>

            <section class="rp-section" aria-labelledby="rp-rank-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-rank-lbl">🏆 Sua Liga</h2>
                </div>
                <div class="rp-rank-card">
                    <span class="rp-rank-icon" aria-hidden="true">${rank.icon}</span>
                    <div class="rp-rank-info">
                        <div class="rp-rank-name">Liga ${rank.name}</div>
                        <div class="rp-rank-xp">${user.xp || 0} XP total</div>
                    </div>
                    <a href="#ranking" class="rp-rank-btn" aria-label="Ver ranking completo">Ver →</a>
                </div>
            </section>

            <section class="rp-section" aria-labelledby="rp-boss-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-boss-lbl">💀 Boss da Semana</h2>
                    <span class="rp-soon-chip" aria-label="Em breve">breve</span>
                </div>
                <div class="rp-boss-card" aria-label="Boss da semana — em breve">
                    <span class="rp-boss-icon" aria-hidden="true">🐲</span>
                    <div>
                        <div class="rp-boss-name">Dragão do Conhecimento</div>
                        <div class="rp-boss-sub">Desbloqueio em breve!</div>
                    </div>
                </div>
            </section>

        </div>`;
    },

    // ── EVENT BINDING ─────────────────────────────────────
    _bindOverlay() {
        const ov = document.getElementById('sidebar-overlay');
        if (ov) ov.addEventListener('click', () => this.close());
    },

    _bindSwipe() {
        const el = document.getElementById('sidebar');
        if (!el) return;
        let startX = 0, startY = 0;

        el.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        el.addEventListener('touchmove', e => {
            const dx = e.touches[0].clientX - startX;
            const dy = Math.abs(e.touches[0].clientY - startY);
            if (dx < -44 && dy < 72) this.close();
        }, { passive: true });

        // Edge swipe to open (from left edge)
        document.addEventListener('touchstart', e => {
            if (e.touches[0].clientX < 20 && !this._isOpen && window.innerWidth < 768) {
                startX = e.touches[0].clientX;
            }
        }, { passive: true });

        document.addEventListener('touchmove', e => {
            if (startX < 20 && e.touches[0].clientX - startX > 60 && window.innerWidth < 768) {
                this.open();
                startX = 9999;
            }
        }, { passive: true });
    },

    _bindKeyboard() {
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && this._isOpen) {
                e.preventDefault();
                this.close();
            }
        });
    },
};

window.Sidebar = Sidebar;

// ── HUD AVATAR DROPDOWN ───────────────────────────────────
const HUD = {
    _open: false,

    toggleAvatarDropdown() {
        this._open ? this.closeAvatarDropdown() : this.openAvatarDropdown();
    },

    openAvatarDropdown() {
        const dd  = document.getElementById('hud-avatar-dropdown');
        const btn = document.getElementById('hud-avatar-btn');
        if (!dd) return;
        this._open = true;
        dd.classList.add('open');
        dd.setAttribute('aria-hidden', 'false');
        btn?.setAttribute('aria-expanded', 'true');
        this._updateDropdown();
        setTimeout(() => document.addEventListener('click', this._outside, { once: true }), 10);
    },

    closeAvatarDropdown() {
        const dd  = document.getElementById('hud-avatar-dropdown');
        const btn = document.getElementById('hud-avatar-btn');
        if (!dd) return;
        this._open = false;
        dd.classList.remove('open');
        dd.setAttribute('aria-hidden', 'true');
        btn?.setAttribute('aria-expanded', 'false');
    },

    _outside(e) {
        if (!e.target.closest('#hud-avatar-wrap')) HUD.closeAvatarDropdown();
    },

    _updateDropdown() {
        if (typeof State === 'undefined') return;
        const u    = State.data.user;
        const rank = State.getRank();
        const el   = id => document.getElementById(id);
        if (el('had-avatar'))   el('had-avatar').textContent   = u.avatar || '🦸';
        if (el('had-name'))     el('had-name').textContent     = u.name   || 'Herói';
        if (el('had-lvl-txt'))  el('had-lvl-txt').textContent  = `Nível ${u.level} · ${rank.icon} ${rank.name}`;
        if (el('had-xp-val'))   el('had-xp-val').textContent   = `${u.xp} XP`;
        if (el('had-streak-val')) el('had-streak-val').textContent = `${u.streak || 1} dias 🔥`;
        if (el('had-gems-val')) el('had-gems-val').textContent  = `${u.gems} 💎`;
    },
};

window.HUD = HUD;
