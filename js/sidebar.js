/**
 * EDUQUEST SIDEBAR v2.0
 * Navigation + Right Panel + HUD Premium Dropdown System
 * Mobile: off-canvas drawer | Tablet: compact icons | Desktop: full expanded
 */

const Sidebar = {
    _isOpen: false,

    NAV_ITEMS: [
        { icon: 'map',      label: 'Início',    route: 'home',       hash: '#home'       },
        { icon: 'missions', label: 'Missões',   route: 'missions',   hash: '#missions'   },
        { icon: 'trophy',   label: 'Ranking',   route: 'ranking',    hash: '#ranking'    },
        { icon: 'shop',     label: 'Loja',      route: 'shop',       hash: '#shop'       },
        { icon: 'guild',    label: 'Guild',     route: 'guild',      hash: '#guild'      },
        { icon: 'friends',  label: 'Amigos',    route: 'friends',    hash: '#friends'    },
        { icon: 'xp',       label: 'Eventos',   route: 'events',     hash: '#events'     },
        { icon: 'crown',    label: 'Battle Pass',route: 'battle-pass',hash: '#battle-pass'},
        { icon: 'ai-tutor', label: 'AI Studio', route: 'ai-studio',  hash: '#ai-studio'  },
        { icon: 'sword',    label: 'PvP',       route: 'pvp',        hash: '#pvp'        },
        { icon: 'scroll',   label: 'Memória',   route: 'memory',     hash: '#memory'     },
        { icon: 'xp',       label: 'Speed Drill',route: 'speed-drill',hash: '#speed-drill'},
        { icon: 'avatar',   label: 'Perfil',    route: 'profile',    hash: '#profile'    },
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
        document.querySelectorAll('.nav-tab').forEach(tab => {
            const active = tab.dataset.route === route ||
                           (route === '' && tab.dataset.route === 'home');
            tab.classList.toggle('active', active);
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
                <span class="sidebar-item-icon" aria-hidden="true">${typeof IconSystem !== 'undefined' ? IconSystem.html(item.icon,{size:'md'}) : item.icon}</span>
                <span class="sidebar-item-label">${item.label}</span>
                ${item.soon ? '<span class="sidebar-soon-chip" aria-hidden="true">breve</span>' : ''}
            </a>`).join('');

        const u = (typeof State !== 'undefined') ? State.data.user : { name: 'Herói', level: 1, avatar: '🦸' };

        el.innerHTML = `
        <div class="sidebar-inner">

            <a class="sidebar-brand" href="#home" aria-label="EduQuest — Ir para o início">
                <span class="sidebar-brand-icon" aria-hidden="true">
                    <img src="assets/icons/icon-192.png" alt="" style="width:22px;height:22px;border-radius:6px;object-fit:cover;display:block;">
                </span>
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

        // ── Streak calendar (7-day) ──
        const calHTML = calendar.map(d => `
            <div class="rp-cal-day${d.active ? ' active' : ''}${d.isToday ? ' today' : ''}"
                 role="listitem"
                 aria-label="${d.label}${d.active ? ', streak ativo' : ''}">
                <span class="rp-cal-dot" aria-hidden="true">${d.active ? (typeof IconSystem !== 'undefined' ? IconSystem.html('streak',{size:'xs',color:'streak'}) : '🔥') : '○'}</span>
                <span class="rp-cal-label">${d.label}</span>
                <span class="rp-cal-num">${d.dayNum}</span>
            </div>`).join('');

        // ── Missions ──
        const mDone  = missions.filter(m => m.completed).length;
        const mTotal = missions.length;
        const mHTML  = missions.map(m => {
            const prog = m.completed ? 100 : (m.progress ?? 0);
            return `
            <div class="rp-mission${m.completed ? ' done' : ''}" role="listitem">
                <span class="rp-mission-icon" aria-hidden="true">${typeof IconSystem !== 'undefined' ? IconSystem.html(m.icon,{size:'sm'}) : m.icon}</span>
                <div class="rp-mission-body">
                    <div class="rp-mission-title">${m.title}</div>
                    <div class="rp-mission-reward">${typeof IconSystem !== 'undefined' ? IconSystem.html('xp',{size:'xs',color:'xp'}) : '⚡'} +${m.xp}${m.gems ? ` · ${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'xs',color:'gem'}) : '💎'} +${m.gems}` : ''}</div>
                    ${!m.completed ? `
                    <div class="rp-mission-progress-wrap" aria-hidden="true">
                        <div class="rp-mission-progress-fill" style="width:${prog}%"></div>
                    </div>` : ''}
                </div>
                <span class="rp-mission-check" aria-label="${m.completed ? 'Concluída' : 'Pendente'}">${m.completed ? (typeof IconSystem !== 'undefined' ? IconSystem.html('check',{size:'xs',color:'success'}) : '✅') : '⬜'}</span>
            </div>`;
        }).join('');

        // ── League tiers ──
        const _icT = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const TIERS = [
            { name: 'Bronze',  iconId: 'achievement', iconColor: 'locked',  min: 0    },
            { name: 'Prata',   iconId: 'shield',       iconColor: 'science', min: 1000 },
            { name: 'Ouro',    iconId: 'star',         iconColor: 'xp',      min: 5000 },
            { name: 'Platina', iconId: 'crown',        iconColor: 'final',   min: 15000},
            { name: 'Diamante',iconId: 'gem',          iconColor: 'gem',     min: 40000},
        ];
        const xp = user.xp || 0;
        const curTierIdx = TIERS.reduce((best, t, i) => xp >= t.min ? i : best, 0);
        const nextTier   = TIERS[curTierIdx + 1];
        const barPct     = nextTier
            ? Math.min(100, Math.round(((xp - TIERS[curTierIdx].min) / (nextTier.min - TIERS[curTierIdx].min)) * 100))
            : 100;

        const tiersHTML = TIERS.map((t, i) => `
            <div class="rp-rank-tier${i < curTierIdx ? ' rt-done' : i === curTierIdx ? ' rt-cur' : ''}" aria-hidden="true">
                <div class="rp-rank-tier-dot">${i <= curTierIdx ? _icT(t.iconId, {size:'xs', color:t.iconColor}) : ''}</div>
                <span class="rp-rank-tier-lbl">${t.name.substring(0, 3)}</span>
            </div>`).join('');

        // ── Missão Atual (active stage from CHAPTER_METADATA) ──
        const activeMeta  = window.CHAPTER_METADATA;
        const activeStage = activeMeta?.stages?.find(s => {
            return !State.isStageCompleted(activeMeta.id || 'cap7_doencas', s.index) &&
                    State.isStageUnlocked(activeMeta.id || 'cap7_doencas', s.index);
        });
        const missionHTML = activeMeta && activeStage
            ? (() => {
                const stageData = window[activeStage.varName] || {};
                const chId = activeMeta.id || 'cap7_doencas';
                return `
                <section class="rp-section rp-mission-cur-section" aria-labelledby="rp-cur-lbl">
                    <div class="rp-mission-cur-header">
                        <h2 class="rp-section-title" id="rp-cur-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('star',{size:'xs',color:'xp'}) : '🎯'} Missão Atual</h2>
                    </div>
                    <a href="#stage/${chId}/${activeStage.id}" class="rp-mission-cur-card" aria-label="Entrar na missão ${stageData.title || activeStage.id}">
                        <div class="rp-mission-cur-meta">FASE ${activeStage.index}</div>
                        <div class="rp-mission-cur-title">${stageData.title || `Missão ${activeStage.index}`}</div>
                        <div class="rp-mission-cur-sub">${activeMeta.icon || '📚'} ${activeMeta.title || ''}</div>
                        <div class="rp-mission-cur-action">Jogar agora <span aria-hidden="true">→</span></div>
                    </a>
                </section>`;
              })()
            : '';

        el.innerHTML = `
        <div class="rp-inner">

            ${missionHTML}

            <!-- Streak section -->
            <section class="rp-section" aria-labelledby="rp-streak-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-streak-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('streak',{size:'xs',color:'streak'}) : '🔥'} Sequência</h2>
                    <span class="rp-streak-count" aria-label="${user.streak || 1} dias">${user.streak || 1} dia${(user.streak || 1) !== 1 ? 's' : ''}</span>
                </div>
                <div class="rp-calendar" role="list" aria-label="Calendário de sequência">${calHTML}</div>
            </section>

            <!-- Daily missions section -->
            <section class="rp-section" aria-labelledby="rp-quests-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-quests-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('xp',{size:'xs',color:'xp'}) : '⚡'} Missões do Dia</h2>
                    <span class="rp-badge" aria-label="${mDone} de ${mTotal} concluídas">${mDone}/${mTotal}</span>
                </div>
                <div role="list" aria-label="Lista de missões diárias">${mHTML}</div>
            </section>

            <!-- League section -->
            <section class="rp-section" aria-labelledby="rp-rank-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-rank-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('trophy',{size:'xs',color:'final'}) : '🏆'} Sua Liga</h2>
                    <a href="#ranking" class="rp-section-link" aria-label="Ver ranking">Ver →</a>
                </div>
                <div class="rp-rank-card">
                    <span class="rp-rank-icon" aria-hidden="true">${_icT(rank.iconId, {size:'sm', color:rank.iconColor})}</span>
                    <div class="rp-rank-info">
                        <div class="rp-rank-name">Liga ${rank.name}</div>
                        <div class="rp-rank-xp">${xp.toLocaleString('pt-BR')} XP total</div>
                        <div class="rp-league-bar-wrap" aria-hidden="true">
                            <div class="rp-league-bar-fill" style="width:${barPct}%"></div>
                        </div>
                    </div>
                </div>
                <div class="rp-rank-tiers" aria-hidden="true">${tiersHTML}</div>
            </section>

            <!-- Boss section -->
            <section class="rp-section" aria-labelledby="rp-boss-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-boss-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('boss',{size:'xs',color:'rpg'}) : '💀'} Boss da Semana</h2>
                    <span class="rp-soon-chip" aria-label="Em breve">breve</span>
                </div>
                <div class="rp-boss-card" aria-label="Boss da semana — em breve">
                    <span class="rp-boss-icon" aria-hidden="true">🐲</span>
                    <div style="flex:1;min-width:0">
                        <div class="rp-boss-name">Dragão do Conhecimento</div>
                        <div class="rp-boss-hp-wrap" aria-hidden="true">
                            <div class="rp-boss-hp-fill"></div>
                        </div>
                        <div class="rp-boss-meta">
                            <span class="rp-boss-hp-label">HP: 78%</span>
                            <span class="rp-boss-timer">⏰ 5d restantes</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Weekly event (decorative/teaser) -->
            <section class="rp-section" aria-labelledby="rp-event-lbl">
                <div class="rp-section-header">
                    <h2 class="rp-section-title" id="rp-event-lbl">${typeof IconSystem !== 'undefined' ? IconSystem.html('flag',{size:'xs',color:'xp'}) : '🎯'} Evento</h2>
                    <span class="rp-soon-chip">breve</span>
                </div>
                <a class="rp-event-card" href="#home" aria-label="Evento semanal — em breve">
                    <span class="rp-event-icon" aria-hidden="true">${typeof IconSystem !== 'undefined' ? IconSystem.html('star',{size:'md',color:'final'}) : '🌟'}</span>
                    <div>
                        <div class="rp-event-title">Semana da Ciência</div>
                        <div class="rp-event-sub">XP em dobro · Em breve!</div>
                    </div>
                    <span class="rp-event-timer">7d</span>
                </a>
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

// ════════════════════════════════════════════════════════════
//  HUD — Premium Dropdown System v2.0
// ════════════════════════════════════════════════════════════

const HUD = {
    _openDropdown: null, // which dropdown is open: 'streak'|'gems'|'xp'|'hearts'|'notifications'|'avatar'
    _outsideHandler: null,

    // ── AVATAR DROPDOWN (legacy-compatible) ───────────────
    toggleAvatarDropdown() {
        if (this._openDropdown === 'avatar') {
            this.closeAvatarDropdown();
        } else {
            this._closeAll();
            this.openAvatarDropdown();
        }
    },

    openAvatarDropdown() {
        const dd  = document.getElementById('hud-avatar-dropdown');
        const btn = document.getElementById('hud-avatar-btn');
        if (!dd) return;
        this._openDropdown = 'avatar';
        dd.classList.add('open');
        dd.setAttribute('aria-hidden', 'false');
        btn?.setAttribute('aria-expanded', 'true');
        if (typeof EduSprings !== 'undefined') EduSprings.pop(btn, 0.55);
        this._updateAvatarDropdown();
        this._updateLayoutPrefUI();
        this._bindOutside();
    },

    closeAvatarDropdown() {
        const dd  = document.getElementById('hud-avatar-dropdown');
        const btn = document.getElementById('hud-avatar-btn');
        if (!dd) return;
        this._openDropdown = null;
        dd.classList.remove('open');
        dd.setAttribute('aria-hidden', 'true');
        btn?.setAttribute('aria-expanded', 'false');
    },

    // ── GENERIC DROPDOWN ──────────────────────────────────
    toggleDropdown(type) {
        if (this._openDropdown === type) {
            this._closeDropdown(type);
        } else {
            this._closeAll();
            this._openStat(type);
        }
    },

    _openStat(type) {
        const ddEl  = document.getElementById(`hud-dd-${type}`);
        const btnEl = document.getElementById(`hud-${type === 'notifications' ? 'notif' : type}-btn`) ||
                      document.getElementById(`hud-${type}s-btn`) ||
                      document.getElementById(`hud-streak-btn`);

        const btnId = {
            streak:        'hud-streak-btn',
            gems:          'hud-gems-btn',
            xp:            'hud-xp-btn',
            hearts:        'hud-hearts-btn',
            notifications: 'hud-notif-btn',
            discipline:    'hud-disc-btn',
        }[type];

        const btn = document.getElementById(btnId);
        if (!ddEl) return;

        this._openDropdown = type;
        ddEl.innerHTML = this._renderDropdown(type);
        ddEl.classList.add('open');
        ddEl.setAttribute('aria-hidden', 'false');
        btn?.setAttribute('aria-expanded', 'true');
        if (typeof EduSprings !== 'undefined') EduSprings.pop(btn, 0.55);
        this._bindOutside();
    },

    _closeDropdown(type) {
        const ddEl  = document.getElementById(`hud-dd-${type}`);
        const btnId = {
            streak:        'hud-streak-btn',
            gems:          'hud-gems-btn',
            xp:            'hud-xp-btn',
            hearts:        'hud-hearts-btn',
            notifications: 'hud-notif-btn',
            discipline:    'hud-disc-btn',
        }[type];
        const btn = document.getElementById(btnId);
        if (ddEl) {
            ddEl.classList.remove('open');
            ddEl.setAttribute('aria-hidden', 'true');
        }
        btn?.setAttribute('aria-expanded', 'false');
        this._openDropdown = null;
    },

    _closeAll() {
        ['streak','gems','xp','hearts','notifications','discipline'].forEach(t => this._closeDropdown(t));
        this.closeAvatarDropdown();
        if (this._outsideHandler) {
            document.removeEventListener('click', this._outsideHandler);
            this._outsideHandler = null;
        }
    },

    _bindOutside() {
        if (this._outsideHandler) {
            document.removeEventListener('click', this._outsideHandler);
        }
        this._outsideHandler = e => {
            const inside = e.target.closest(
                '#hud-avatar-wrap, #hud-streak-wrap, #hud-gems-wrap, #hud-xp-wrap, #hud-hearts-wrap, #hud-notif-wrap, #hud-disc-wrap'
            );
            if (!inside) this._closeAll();
        };
        setTimeout(() => document.addEventListener('click', this._outsideHandler), 10);
    },

    // ── DROPDOWN RENDERERS ────────────────────────────────
    _renderDropdown(type) {
        if (typeof State === 'undefined') return '';
        const u = State.data.user;
        switch (type) {
            case 'xp':            return this._ddXP(u);
            case 'streak':        return this._ddStreak(u);
            case 'gems':          return this._ddGems(u);
            case 'hearts':        return this._ddHearts(u);
            case 'notifications': return this._ddNotifications(u);
            case 'discipline':    return this._ddDiscipline();
            default: return '';
        }
    },

    _ddXP(u) {
        const xp       = u.xp || 0;
        const level    = u.level || 1;
        const xpPerLvl = (typeof Config !== 'undefined' && Config.XP_PER_LEVEL) || 500;
        const xpInLvl  = xp % xpPerLvl;
        const pct      = Math.min(100, Math.round((xpInLvl / xpPerLvl) * 100));
        const toNext   = xpPerLvl - xpInLvl;
        const gemRwd   = Math.floor(level / 5) * 10 + 10;

        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('xp',{size:'lg',color:'xp'}) : '⚡'}</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">XP &amp; Nível</div>
                <div class="hdd-head-sub">${xp.toLocaleString('pt-BR')} XP total</div>
            </div>
        </div>
        <div class="hdd-body">
            <div class="hdd-level-row">
                <div>
                    <div style="font-size:0.62rem;font-weight:700;color:var(--text-muted);margin-bottom:2px">NÍVEL ATUAL</div>
                    <div class="hdd-lvl-big">${level}</div>
                </div>
                <div style="text-align:right">
                    <div class="hdd-next-reward">Próxima recompensa</div>
                    <div style="font-size:0.8rem;font-weight:900;color:var(--gold,#f59e0b)">+${gemRwd} ${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'xs',color:'gem'}) : '💎'}</div>
                </div>
            </div>
            <div>
                <div class="hdd-bar-wrap">
                    <div class="hdd-bar-fill" style="width:${pct}%"></div>
                </div>
                <div class="hdd-bar-text">${xpInLvl} / ${xpPerLvl} XP · faltam ${toNext}</div>
            </div>
        </div>
        <div class="hdd-footer">
            <a href="#profile" class="hdd-action" onclick="HUD._closeAll()">Ver progresso completo →</a>
        </div>`;
    },

    _ddStreak(u) {
        const streak   = u.streak || 1;
        const calendar = (typeof State !== 'undefined') ? State.getStreakCalendar(30) : [];
        const hasFrz   = (u.inventory?.['streak-freeze'] || 0) > 0;
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : id;

        const calHTML = calendar.map(d => `
            <div class="hdd-cal-day${d.active ? ' sc-active' : ''}${d.isToday ? ' sc-today' : ''}" title="${d.label} ${d.dayNum}${d.active ? ' ✓' : ''}">
                <div class="hdd-cal-dot">${d.active ? _ic('streak',{size:'xs',color:'streak'}) : d.isToday ? '●' : '·'}</div>
                <span class="hdd-cal-num">${d.dayNum}</span>
            </div>`).join('');

        const MILESTONES = [3, 7, 14, 30, 60, 100];
        const msHTML = MILESTONES.slice(0, 4).map(days => {
            const done = streak >= days;
            const next = !done && MILESTONES.find(m => m > streak) === days;
            return `
            <div class="hdd-milestone${done ? ' ms-done' : next ? ' ms-next' : ''}">
                <span class="hdd-milestone-icon">${done ? (typeof IconSystem !== 'undefined' ? IconSystem.html('check',{size:'xs',color:'success'}) : '✅') : next ? (typeof IconSystem !== 'undefined' ? IconSystem.html('star',{size:'xs',color:'xp'}) : '🎯') : '○'}</span>
                <span class="hdd-milestone-days">${days} dias</span>
                <span>${done ? 'Concluído!' : next ? 'Próximo!' : ''}</span>
                <span class="hdd-milestone-reward">${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'xs',color:'gem'}) : '💎'} +${days < 10 ? 5 : days < 20 ? 10 : 25}</span>
            </div>`;
        }).join('');

        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('streak',{size:'lg',color:'streak'}) : '🔥'}</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">${streak} dia${streak !== 1 ? 's' : ''} seguidos!</div>
                <div class="hdd-head-sub">${hasFrz ? '🧊 1 freeze disponível' : 'Sem proteção ativa'}</div>
            </div>
        </div>
        <div class="hdd-body">
            <div class="hdd-streak-cal">${calHTML}</div>
            <div class="hdd-streak-row">
                <div class="hdd-streak-chip">
                    <span class="hdd-streak-chip-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('streak',{size:'sm',color:'streak'}) : '🔥'}</span>
                    <span class="hdd-streak-chip-val">${streak}</span>
                    <span class="hdd-streak-chip-lbl">Atual</span>
                </div>
                <div class="hdd-streak-chip">
                    <span class="hdd-streak-chip-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('star',{size:'sm',color:'final'}) : '⭐'}</span>
                    <span class="hdd-streak-chip-val">${Math.max(streak, u.maxStreak || streak)}</span>
                    <span class="hdd-streak-chip-lbl">Recorde</span>
                </div>
                <div class="hdd-streak-chip">
                    <span class="hdd-streak-chip-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'sm',color:'gem'}) : '💎'}</span>
                    <span class="hdd-streak-chip-val">+5</span>
                    <span class="hdd-streak-chip-lbl">Por dia</span>
                </div>
            </div>
            <div class="hdd-milestones">${msHTML}</div>
        </div>
        <div class="hdd-footer">
            <a href="#shop" class="hdd-action" onclick="HUD._closeAll()">🧊 Comprar Freeze na Loja</a>
        </div>`;
    },

    _ddGems(u) {
        const gems   = u.gems || 0;
        const today  = new Date().toDateString();
        const lastRw = u.lastDailyReward || '';
        const claimed = lastRw === today;

        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'lg',color:'gem'}) : '💎'}</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">Gemas</div>
                <div class="hdd-head-sub">Moeda premium do EduQuest</div>
            </div>
        </div>
        <div class="hdd-body">
            <div class="hdd-gems-hero">
                <span class="hdd-gems-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('gem',{size:'xl',color:'gem'}) : '💎'}</span>
                <div>
                    <div class="hdd-gems-count">${gems}</div>
                    <div class="hdd-gems-label">gemas disponíveis</div>
                </div>
            </div>
            <div class="hdd-daily-reward">
                <span class="hdd-dr-icon">${claimed ? (typeof IconSystem !== 'undefined' ? IconSystem.html('check',{size:'sm',color:'success'}) : '✅') : '🎁'}</span>
                <div>
                    <div class="hdd-dr-text">Recompensa diária</div>
                    <div class="hdd-dr-sub">${claimed ? 'Coletada hoje!' : '+5 gemas disponíveis'}</div>
                </div>
                <span class="hdd-dr-badge ${claimed ? '' : 'pending'}">${claimed ? 'Coletado' : 'Coletar!'}</span>
            </div>
            <div class="hdd-milestone">
                <span class="hdd-milestone-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('trophy',{size:'sm',color:'final'}) : '🏆'}</span>
                <span style="flex:1;font-size:0.74rem;font-weight:700">Complete missões para ganhar mais</span>
            </div>
        </div>
        <div class="hdd-footer">
            <a href="#shop" class="hdd-action" onclick="HUD._closeAll()">🛒 Ir para a Loja</a>
        </div>`;
    },

    _ddHearts(u) {
        const hearts    = u.hearts ?? 5;
        const maxHearts = 5;
        const regen     = 3600; // 1h per heart in seconds
        const full      = hearts >= maxHearts;

        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : id;
        const heartsHTML = Array.from({ length: maxHearts }, (_, i) =>
            `<span class="hdd-heart${i >= hearts ? ' hh-empty' : ''}" aria-hidden="true">${i < hearts ? _ic('heart',{size:'md',color:'heart'}) : _ic('heart',{size:'md',color:'locked'})}</span>`
        ).join('');

        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('heart',{size:'lg',color:'heart'}) : '❤️'}</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">${hearts} / ${maxHearts} Vidas</div>
                <div class="hdd-head-sub">${full ? 'Cheio! Vá batalhar!' : `Recuperação: 1h por vida`}</div>
            </div>
        </div>
        <div class="hdd-body">
            <div class="hdd-hearts-row">${heartsHTML}</div>
            ${!full ? `
            <div class="hdd-recovery">
                Próxima vida em <strong>~${regen / 60}min</strong>
            </div>` : `
            <div class="hdd-hearts-max">Todas as vidas disponíveis ✓</div>`}
            <div class="hdd-milestone">
                <span class="hdd-milestone-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('shield',{size:'sm',color:'success'}) : '🛡️'}</span>
                <span style="flex:1;font-size:0.74rem;font-weight:700">Escudo protege contra perda de vidas</span>
            </div>
        </div>
        <div class="hdd-footer">
            <a href="#shop" class="hdd-action" onclick="HUD._closeAll()">🛒 Comprar Vidas</a>
        </div>`;
    },

    _ddNotifications(u) {
        const notifs = this._getNotifications(u);
        if (!notifs.length) {
            return `
            <div class="hdd-head">
                <span class="hdd-head-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('bell',{size:'lg'}) : '🔔'}</span>
                <div class="hdd-head-info">
                    <div class="hdd-head-title">Notificações</div>
                    <div class="hdd-head-sub">Tudo em dia!</div>
                </div>
            </div>
            <div class="hdd-notif-empty">
                <span class="hdd-notif-empty-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html('achievement',{size:'lg',color:'xp'}) : '🎉'}</span>
                Sem notificações pendentes
            </div>`;
        }

        const listHTML = notifs.map(n => `
            <a class="hdd-notif-item${n.unread ? ' hni-unread' : ''}"
               href="${n.href || '#home'}"
               onclick="HUD._closeAll()">
                <span class="hdd-notif-icon">${n.icon}</span>
                <div class="hdd-notif-body">
                    <div class="hdd-notif-text">${n.text}</div>
                    <div class="hdd-notif-time">${n.time}</div>
                </div>
            </a>`).join('');

        const muted = (typeof SoundManager !== 'undefined') && SoundManager.muted;
        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">🔔</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">Notificações</div>
                <div class="hdd-head-sub">${notifs.filter(n=>n.unread).length} novas</div>
            </div>
        </div>
        <div class="hdd-body" style="padding-bottom:4px">
            <div class="hdd-notif-list">${listHTML}</div>
        </div>
        <div class="hdd-footer hdd-notif-footer">
            <button class="hdd-mute-toggle" onclick="SoundManager.toggle();HUD.toggleDropdown('notifications')" aria-label="Alternar som">
                <span>${muted ? '🔇' : '🔊'}</span>
                <span>${muted ? 'Som desativado' : 'Som ativado'}</span>
                <span class="hdd-mute-badge ${muted ? 'muted' : ''}">${muted ? 'OFF' : 'ON'}</span>
            </button>
        </div>`;
    },

    _ddDiscipline() {
        const subjects = [
            { icon: 'microscope', name: 'Ciências',   grade: '7º Ano', id: 'ciencias-7' },
            { icon: 'star',       name: 'Matemática', grade: '7º Ano', id: 'mat-7', soon: true },
            { icon: 'scroll',     name: 'Português',  grade: '7º Ano', id: 'port-7', soon: true },
            { icon: 'compass',    name: 'Geografia',  grade: '7º Ano', id: 'geo-7',  soon: true },
        ];
        const cur = window.CHAPTER_METADATA;
        const itemsHTML = subjects.map(s => {
            const active = cur && cur.subject === s.id;
            return `
            <button class="hdd-disc-item${active ? ' hdd-disc-active' : ''}${s.soon ? ' hdd-disc-soon' : ''}"
                    onclick="${s.soon ? '' : `HUD._closeAll()`}"
                    ${s.soon ? 'disabled aria-disabled="true"' : ''}>
                <span class="hdd-disc-icon">${typeof IconSystem !== 'undefined' ? IconSystem.html(s.icon,{size:'md',color:'science'}) : s.icon}</span>
                <div class="hdd-disc-info">
                    <div class="hdd-disc-name">${s.name}</div>
                    <div class="hdd-disc-grade">${s.grade}</div>
                </div>
                ${active ? '<span class="hdd-disc-check">✓</span>' : ''}
                ${s.soon ? '<span class="hdd-disc-soon-chip">Em breve</span>' : ''}
            </button>`;
        }).join('');

        return `
        <div class="hdd-head">
            <span class="hdd-head-icon">📚</span>
            <div class="hdd-head-info">
                <div class="hdd-head-title">Disciplina</div>
                <div class="hdd-head-sub">Selecione o conteúdo</div>
            </div>
        </div>
        <div class="hdd-body hdd-disc-list">${itemsHTML}</div>`;
    },

    _getNotifications(u) {
        const notifs = [];
        const streak = u.streak || 1;
        const hearts = u.hearts ?? 5;
        const missions = (typeof State !== 'undefined') ? State.getMissions() : [];
        const pendingMissions = missions.filter(m => !m.completed);

        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : id;
        if (streak >= 3) {
            notifs.push({ icon: _ic('streak',{size:'sm',color:'streak'}), text: `Sequência de ${streak} dias! Continue assim!`, time: 'Hoje', unread: false, href: '#home' });
        }
        if (hearts <= 1) {
            notifs.push({ icon: _ic('heart',{size:'sm',color:'heart'}), text: `Atenção: você está com apenas ${hearts} vida(s)!`, time: 'Agora', unread: true, href: '#shop' });
        }
        if (pendingMissions.length) {
            notifs.push({ icon: _ic('xp',{size:'sm',color:'xp'}), text: `${pendingMissions.length} missão(ões) diária(s) disponível(is)!`, time: 'Hoje', unread: true, href: '#missions' });
        }
        notifs.push({ icon: _ic('boss',{size:'sm',color:'rpg'}), text: 'Boss da semana chegando em breve!', time: 'Esta semana', unread: false, href: '#home' });

        // Social notifications from SocialEngine
        if (typeof SocialEngine !== 'undefined') {
            const socialNotifs = SocialEngine.getSocialNotifications();
            for (const sn of socialNotifs) {
                notifs.push({
                    icon:   _ic(sn.icon, {size:'sm', color: sn.color}),
                    text:   sn.text,
                    time:   sn.time,
                    unread: sn.unread,
                    href:   sn.href,
                });
            }
        }

        return notifs;
    },

    // ── NOTIFICATION BADGE ────────────────────────────────
    refreshNotifBadge() {
        if (typeof State === 'undefined') return;
        const u      = State.data.user;
        const notifs = this._getNotifications(u);
        const count  = notifs.filter(n => n.unread).length;
        const badge  = document.getElementById('hud-notif-badge');
        if (!badge) return;
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    },

    // ── AVATAR DROPDOWN DATA UPDATE ───────────────────────
    _updateAvatarDropdown() {
        if (typeof State === 'undefined') return;
        const u    = State.data.user;
        const rank = State.getRank();
        const id   = s => document.getElementById(s);
        const _icT = (rid, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(rid, o) : '';
        if (id('had-avatar'))     id('had-avatar').textContent     = u.avatar || '🦸';
        if (id('had-name'))       id('had-name').textContent       = u.name   || 'Herói';
        if (id('had-lvl-txt'))    id('had-lvl-txt').innerHTML      = `Nível ${u.level} · ${_icT(rank.iconId, {size:'xs', color:rank.iconColor})} ${rank.name}`;
        if (id('had-xp-val'))     id('had-xp-val').textContent     = `${(u.xp||0).toLocaleString('pt-BR')} XP`;
        if (id('had-streak-val')) id('had-streak-val').textContent = `${u.streak || 1} dias`;
        if (id('had-gems-val'))   id('had-gems-val').textContent   = `${u.gems || 0}`;
    },

    // ── LAYOUT PREFERENCE (compact / advanced) ────────────
    _layoutPref: null, // null = auto | 'compact' | 'advanced'

    toggleLayoutPref() {
        const body = document.body;
        if (body.dataset.mapPref === 'compact') {
            body.dataset.mapPref = 'advanced';
            this._layoutPref    = 'advanced';
        } else {
            body.dataset.mapPref = 'compact';
            this._layoutPref    = 'compact';
        }
        try { localStorage.setItem('eq_map_pref', body.dataset.mapPref); } catch (_) {}
        this._updateLayoutPrefUI();
    },

    _updateLayoutPrefUI() {
        const pref  = document.body.dataset.mapPref || 'advanced';
        const icon  = document.getElementById('hud-pref-icon');
        const label = document.getElementById('hud-pref-label');
        const badge = document.getElementById('hud-pref-badge');
        if (!icon) return;
        if (pref === 'compact') {
            icon.textContent  = '🖥️';
            label.textContent = 'Modo Avançado';
            if (badge) badge.textContent = 'COMPACTO';
        } else {
            icon.textContent  = '🗂️';
            label.textContent = 'Modo Compacto';
            if (badge) badge.textContent = 'AVANÇADO';
        }
    },

    _loadLayoutPref() {
        try {
            const saved = localStorage.getItem('eq_map_pref');
            if (saved) {
                document.body.dataset.mapPref = saved;
                this._layoutPref = saved;
            }
        } catch (_) {}
    },

    // ── CONTEXT BAR ───────────────────────────────────────
    setContext(data) {
        const el   = document.getElementById('hud-context');
        const disc = document.getElementById('hud-disc-wrap');
        if (!el) return;
        if (!data) { el.innerHTML = ''; return; }

        el.innerHTML = `
        <a class="hud-ctx-pill" href="${data.href || '#home'}" aria-label="${data.subject} — ${data.stage}">
            <span class="hud-ctx-icon" aria-hidden="true">${data.icon || '📚'}</span>
            <span class="hud-ctx-subject">${data.subject}</span>
            <span class="hud-ctx-sep" aria-hidden="true">•</span>
            <span class="hud-ctx-stage">${data.stage}</span>
        </a>`;

        // Show discipline chip with current subject/grade
        if (disc) {
            disc.style.display = '';
            const txt = document.getElementById('hud-disc-text');
            if (txt) txt.textContent = `${data.subject} • 7º Ano`;
        }
    },

    clearContext() {
        const el   = document.getElementById('hud-context');
        const disc = document.getElementById('hud-disc-wrap');
        if (el) el.innerHTML = '';
        if (disc) disc.style.display = 'none';
    },

    // ── INIT ──────────────────────────────────────────────
    init() {
        this._loadLayoutPref();
        this._updateLayoutPrefUI();
        this.refreshNotifBadge();
    },
};

window.HUD = HUD;
