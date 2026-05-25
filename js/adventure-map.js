/**
 * EDUQUEST WORLD MAP ENGINE v2.0
 * An exploreable educational world — biomes, organic paths, ambient life.
 * Architecture: static world render once → only character+UI update per frame.
 */

const AdventureMap = {

    // ── WORLD DIMENSIONS ─────────────────────────────────────────
    WORLD_W: 440,
    WORLD_H: 2700,

    // ── STAGE POSITIONS [xPercent, worldY] — bottom→top ─────────
    // Organic zigzag layout: stages meander up the world
    _stagePositions: [
        [50,  2520],  //  1 — Forest of Origin (center)
        [26,  2330],  //  2 — (left)
        [68,  2150],  //  3 — (right)
        [22,  1970],  //  4 — (far left)
        [60,  1800],  //  5 — Village (right)
        [78,  1620],  //  6 — (far right)
        [28,  1440],  //  7 — Lab (left)
        [64,  1260],  //  8 — (right)
        [32,  1080],  //  9 — Tower (left)
        [58,   900],  // 10 — (right)
        [50,   660],  // 11 — BOSS (center dramatic)
        [50,   380],  // 12 — FINAL (center triumphant)
    ],

    // ── BIOMES ───────────────────────────────────────────────────
    _biomes: [
        {
            top: 0, bottom: 550,
            id: 'citadel',
            name: 'Cidadela Final',
            icon: '🏰',
            bg1: '#fffbeb', bg2: '#fef3c7',
        },
        {
            top: 550, bottom: 1100,
            id: 'tower',
            name: 'Torre do Saber',
            icon: '🔮',
            bg1: '#f5f3ff', bg2: '#ede9fe',
        },
        {
            top: 1100, bottom: 1680,
            id: 'lab',
            name: 'Laboratório Arcano',
            icon: '🧪',
            bg1: '#f0f9ff', bg2: '#e0f2fe',
        },
        {
            top: 1680, bottom: 2250,
            id: 'village',
            name: 'Aldeia do Saber',
            icon: '🏡',
            bg1: '#f7fef4', bg2: '#f0fdf4',
        },
        {
            top: 2250, bottom: 2700,
            id: 'forest',
            name: 'Floresta de Início',
            icon: '🌿',
            bg1: '#fafdf8', bg2: '#f7fee7',
        },
    ],

    // ── WORLD DECORATIONS ────────────────────────────────────────
    _decorations: [
        // Forest zone
        { x:  7, y: 2640, emoji: '🌲', cls: 'wm-deco-tree'  },
        { x: 86, y: 2680, emoji: '🌳', cls: 'wm-deco-tree'  },
        { x: 14, y: 2480, emoji: '🍄', cls: 'wm-deco-small' },
        { x: 82, y: 2520, emoji: '🌸', cls: 'wm-deco-small wm-float' },
        { x:  8, y: 2360, emoji: '🦋', cls: 'wm-deco-small wm-float' },
        { x: 88, y: 2400, emoji: '🌿', cls: 'wm-deco-small' },
        { x: 40, y: 2580, emoji: '🪨', cls: 'wm-deco-rock'  },

        // Village zone
        { x:  9, y: 2200, emoji: '🏠',    cls: 'wm-deco-building' },
        { x: 84, y: 2170, emoji: '🌻',    cls: 'wm-deco-tree'     },
        { x: 10, y: 1970, emoji: '🧑‍🌾',  cls: 'wm-deco-npc', label: 'Aldeão'  },
        { x: 85, y: 1840, emoji: '🛖',    cls: 'wm-deco-building' },
        { x: 38, y: 1720, emoji: '🌾',    cls: 'wm-deco-small'    },
        { x: 88, y: 1700, emoji: '🐓',    cls: 'wm-deco-small wm-float' },

        // Lab zone
        { x:  8, y: 1640, emoji: '🧪',    cls: 'wm-deco-building' },
        { x: 86, y: 1580, emoji: '🔬',    cls: 'wm-deco-building' },
        { x: 12, y: 1380, emoji: '👩‍🔬',  cls: 'wm-deco-npc', label: 'Cientista' },
        { x: 84, y: 1200, emoji: '⚗️',    cls: 'wm-deco-building' },
        { x: 50, y: 1120, emoji: '🔭',    cls: 'wm-deco-small'    },
        { x: 10, y: 1120, emoji: '💡',    cls: 'wm-deco-small wm-pulse' },

        // Tower zone
        { x:  8, y: 1060, emoji: '💠',    cls: 'wm-deco-crystal wm-pulse' },
        { x: 87, y: 980,  emoji: '🔮',    cls: 'wm-deco-crystal wm-pulse' },
        { x: 10, y: 780,  emoji: '🧙',    cls: 'wm-deco-npc', label: 'Mago Sábio' },
        { x: 84, y: 720,  emoji: '✨',    cls: 'wm-deco-small wm-float' },
        { x: 35, y: 580,  emoji: '📚',    cls: 'wm-deco-building' },
        { x: 88, y: 570,  emoji: '🌟',    cls: 'wm-deco-small wm-float' },

        // Citadel zone
        { x: 12, y: 510, emoji: '🚩',    cls: 'wm-deco-small'    },
        { x: 80, y: 490, emoji: '🏰',    cls: 'wm-deco-building' },
        { x: 10, y: 300, emoji: '👑',    cls: 'wm-deco-npc', label: 'Rei do Saber' },
        { x: 85, y: 250, emoji: '⭐',    cls: 'wm-deco-crystal wm-float' },
        { x: 50, y: 140, emoji: '🎓',    cls: 'wm-deco-crystal wm-pulse' },
    ],

    // ── STATE ─────────────────────────────────────────────────────
    chapterId:    null,
    stages:       [],
    nearStageIdx: -1,
    running:      false,
    rafId:        null,
    _walkTimer:   null,
    _currentBiome: '',

    world: {
        charX: 220, charY: 2480,
        targetX: null, targetY: null,
        speed: 3.2,
        facing: 1,  // 1=right, -1=left
    },

    keys: { up: false, down: false, left: false, right: false },

    _boundKeyDown: null,
    _boundKeyUp:   null,
    _boundClick:   null,
    _boundTouch:   null,

    _charEl:   null,
    _interEl:  null,
    _zoneEl:   null,

    // ── ENTRY POINT ───────────────────────────────────────────────
    start(chapterId) {
        if (this.running) {
            this.running = false;
            if (this.rafId) cancelAnimationFrame(this.rafId);
        }
        if (this._boundKeyDown) {
            window.removeEventListener('keydown', this._boundKeyDown);
            window.removeEventListener('keyup',   this._boundKeyUp);
        }

        this.chapterId    = chapterId;
        this.nearStageIdx = -1;
        Object.assign(this.keys, { up:false, down:false, left:false, right:false });

        const meta = window.CHAPTER_METADATA;
        if (!meta) { Router.navigate(`#chapter/${chapterId}`); return; }

        this.stages = (meta.stages || []).map((s, i) => {
            const pos  = this._stagePositions[i] || [50, this.WORLD_H - (i + 1) * 220];
            const data = window[s.varName] || {};
            return {
                id:        s.id,
                index:     s.index,
                isBoss:    s.isBoss  || false,
                isFinal:   s.isFinal || false,
                title:     data.title || `Missão ${s.index}`,
                xPct:      pos[0],
                worldY:    pos[1],
                unlocked:  State.isStageUnlocked(chapterId, s.index),
                completed: State.isStageCompleted(chapterId, s.index),
                stars:     State.getStageStars(chapterId, s.index),
            };
        });

        // Place character near first active stage
        const firstActive = this.stages.find(s => s.unlocked && !s.completed) || this.stages[0];
        if (firstActive) {
            this.world.charX = (firstActive.xPct / 100) * this.WORLD_W;
            this.world.charY = firstActive.worldY + 80;
        }
        this.world.targetX = null;
        this.world.targetY = null;

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        this._renderWorld();
        this._bindEvents();
        this.running = true;
        this._loop();
        // Smooth scroll to character
        requestAnimationFrame(() => this._scrollToChar(true));
    },

    // ── WORLD RENDER (once) ───────────────────────────────────────
    _renderWorld() {
        const app = document.getElementById('app-container');
        const W   = this.WORLD_W;
        const H   = this.WORLD_H;
        const u   = State.data.user;

        const biomesHTML    = this._buildBiomes();
        const decoHTML      = this._buildDecorations();
        const pathsSVG      = this._buildPathsSVG();
        const nodesHTML     = this._buildNodes();
        const charAvatar    = u.avatar || '🦸';
        const starsProgress = this.stages.filter(s => s.completed).length;

        app.innerHTML = `
<div class="wm-wrap" id="wm-wrap">

    <!-- MINIMAL WORLD HUD -->
    <header class="wm-hud" id="wm-hud" role="banner">
        <button class="wm-back-btn" onclick="AdventureMap.exit()" aria-label="Sair do mundo">
            <span aria-hidden="true">←</span>
        </button>
        <div class="wm-zone-pill" id="wm-zone-pill">
            <span class="wm-zone-icon" id="wm-zone-icon">🌿</span>
            <span class="wm-zone-name" id="wm-zone-name">Floresta de Início</span>
        </div>
        <div class="wm-hud-stats" role="status" aria-label="Progresso">
            <div class="wm-stat-chip">⚡ ${u.level}</div>
            <div class="wm-stat-chip">⭐ ${starsProgress}/${this.stages.length}</div>
        </div>
    </header>

    <!-- SCROLLABLE WORLD VIEWPORT -->
    <div class="wm-viewport" id="wm-viewport" role="main">
        <div class="wm-world" id="wm-world" style="width:${W}px;height:${H}px">

            <!-- Biome layers -->
            ${biomesHTML}

            <!-- Organic SVG paths -->
            ${pathsSVG}

            <!-- World decorations -->
            ${decoHTML}

            <!-- Stage nodes -->
            ${nodesHTML}

            <!-- Player character -->
            <div class="wm-char" id="wm-char"
                 style="left:${this.world.charX}px;top:${this.world.charY}px"
                 aria-label="Seu personagem">${charAvatar}</div>

        </div>
    </div>

    <!-- INTERACT PANEL (shown near unlocked stage) -->
    <div class="wm-interact hidden" id="wm-interact" role="dialog" aria-live="polite">
        <div class="wm-interact-inner">
            <div class="wm-interact-meta" id="wm-interact-meta">⚔️ MISSÃO</div>
            <div class="wm-interact-title" id="wm-interact-title">Missão</div>
            <div class="wm-interact-stars" id="wm-interact-stars"></div>
            <button class="wm-enter-btn" onclick="AdventureMap.interactWithNear()">
                Entrar <span class="wm-enter-arrow">→</span>
            </button>
        </div>
    </div>

    <!-- D-PAD (touch/gamepad, hidden on hover-capable devices) -->
    <div class="wm-dpad" role="group" aria-label="Controles de movimento">
        <button class="wm-dpad-btn wm-dpad-up"
            ontouchstart="AdventureMap.dpad('up',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('up',false)"
            onmousedown="AdventureMap.dpad('up',true)"
            onmouseup="AdventureMap.dpad('up',false)"
            onmouseleave="AdventureMap.dpad('up',false)"
            aria-label="Mover para cima">↑</button>
        <button class="wm-dpad-btn wm-dpad-left"
            ontouchstart="AdventureMap.dpad('left',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('left',false)"
            onmousedown="AdventureMap.dpad('left',true)"
            onmouseup="AdventureMap.dpad('left',false)"
            onmouseleave="AdventureMap.dpad('left',false)"
            aria-label="Mover para esquerda">←</button>
        <button class="wm-dpad-btn wm-dpad-right"
            ontouchstart="AdventureMap.dpad('right',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('right',false)"
            onmousedown="AdventureMap.dpad('right',true)"
            onmouseup="AdventureMap.dpad('right',false)"
            onmouseleave="AdventureMap.dpad('right',false)"
            aria-label="Mover para direita">→</button>
        <button class="wm-dpad-btn wm-dpad-down"
            ontouchstart="AdventureMap.dpad('down',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('down',false)"
            onmousedown="AdventureMap.dpad('down',true)"
            onmouseup="AdventureMap.dpad('down',false)"
            onmouseleave="AdventureMap.dpad('down',false)"
            aria-label="Mover para baixo">↓</button>
    </div>

</div>`;

        this._charEl  = document.getElementById('wm-char');
        this._interEl = document.getElementById('wm-interact');
        this._zoneEl  = { icon: document.getElementById('wm-zone-icon'), name: document.getElementById('wm-zone-name') };
    },

    // ── BIOME LAYERS ──────────────────────────────────────────────
    _buildBiomes() {
        return this._biomes.map((b, i) => {
            const h = b.bottom - b.top;
            // Add subtle wave divider between biomes using a clip-path gradient overlay
            const dividerTop = i > 0 ? `<div class="wm-biome-divide" style="top:${b.top}px"></div>` : '';
            return `
            ${dividerTop}
            <div class="wm-biome wm-biome-${b.id}"
                 style="top:${b.top}px;height:${h}px;background:linear-gradient(180deg,${b.bg1} 0%,${b.bg2} 100%)">
                <div class="wm-biome-name" aria-hidden="true">${b.icon} ${b.name}</div>
            </div>`;
        }).join('');
    },

    // ── SVG ORGANIC PATHS ─────────────────────────────────────────
    _buildPathsSVG() {
        const W = this.WORLD_W;
        const H = this.WORLD_H;
        let paths = '';

        for (let i = 0; i < this.stages.length - 1; i++) {
            const a  = this.stages[i];
            const b  = this.stages[i + 1];
            const x1 = (a.xPct / 100) * W;
            const y1 = a.worldY;
            const x2 = (b.xPct / 100) * W;
            const y2 = b.worldY;

            // Deterministic organic curve: alternate which side the bulge goes
            const sign = (i % 2 === 0) ? 1 : -1;
            const bulge = 44 * sign;
            const cp1x  = x1 + bulge;
            const cp1y  = y1 + (y2 - y1) * 0.38;
            const cp2x  = x2 - bulge;
            const cp2y  = y1 + (y2 - y1) * 0.62;

            const isDone = a.completed;
            paths += `<path class="wm-path ${isDone ? 'wm-path-done' : ''}"
                d="M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}" />`;
        }

        return `<svg class="wm-paths-svg"
            width="${W}" height="${H}"
            viewBox="0 0 ${W} ${H}"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <defs>
                <linearGradient id="pathDone" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%"   stop-color="#4ade80" />
                    <stop offset="100%" stop-color="#34d399" />
                </linearGradient>
            </defs>
            ${paths}
        </svg>`;
    },

    // ── DECORATION ELEMENTS ───────────────────────────────────────
    _buildDecorations() {
        return this._decorations.map(d => {
            const x = (d.x / 100) * this.WORLD_W;
            const label = d.label
                ? `<div class="wm-npc-label">${d.label}</div>`
                : '';
            return `<div class="${d.cls} wm-deco"
                         style="left:${x}px;top:${d.y}px"
                         aria-hidden="true">${d.emoji}${label}</div>`;
        }).join('');
    },

    // ── STAGE NODES ───────────────────────────────────────────────
    _buildNodes() {
        return this.stages.map((s, i) => {
            const x = (s.xPct / 100) * this.WORLD_W;

            const stateClass = s.completed ? 'wm-done'
                             : s.unlocked  ? 'wm-active'
                             :               'wm-locked';
            const typeClass  = s.isFinal ? 'wm-final'
                             : s.isBoss  ? 'wm-boss'
                             :              '';

            const icon = s.completed ? '✓'
                       : s.isFinal   ? '🎓'
                       : s.isBoss    ? '💀'
                       : s.unlocked  ? String(s.index)
                       :               '🔒';

            const starsHTML = s.completed
                ? `<div class="wm-node-stars" aria-label="${s.stars} estrelas">
                     ${[1,2,3].map(n => `<span class="${n <= s.stars ? 'wm-star-lit' : 'wm-star-dim'}">★</span>`).join('')}
                   </div>`
                : '';

            const typeLabel = s.isFinal ? '✦ FINAL'
                            : s.isBoss  ? '💀 CHEFE'
                            :              '';

            return `
            <div class="wm-node ${stateClass} ${typeClass}"
                 id="wmn-${i}"
                 style="left:${x}px;top:${s.worldY}px"
                 onclick="AdventureMap._clickNode(${i})"
                 role="button"
                 aria-label="${s.title}${s.completed ? ' (completo)' : s.unlocked ? ' (disponível)' : ' (bloqueado)'}"
                 tabindex="${s.unlocked ? 0 : -1}">
                <div class="wm-node-shadow" aria-hidden="true"></div>
                <div class="wm-node-body" aria-hidden="true">
                    <div class="wm-node-icon">${icon}</div>
                </div>
                ${starsHTML}
                ${typeLabel ? `<div class="wm-node-type-badge" aria-hidden="true">${typeLabel}</div>` : ''}
            </div>`;
        }).join('');
    },

    // ── GAME LOOP ─────────────────────────────────────────────────
    _loop() {
        if (!this.running) return;
        this._update();
        this.rafId = requestAnimationFrame(() => this._loop());
    },

    _update() {
        let dx = 0, dy = 0;
        const sp = this.world.speed;

        // Keyboard input
        if (this.keys.up)    dy -= sp;
        if (this.keys.down)  dy += sp;
        if (this.keys.left)  { dx -= sp; this.world.facing = -1; }
        if (this.keys.right) { dx += sp; this.world.facing =  1; }

        // Click/touch target movement
        if (this.world.targetX !== null && dx === 0 && dy === 0) {
            const tdx  = this.world.targetX - this.world.charX;
            const tdy  = this.world.targetY - this.world.charY;
            const dist = Math.sqrt(tdx * tdx + tdy * tdy);
            if (dist < sp * 1.5) {
                this.world.targetX = null;
                this.world.targetY = null;
            } else {
                dx = (tdx / dist) * sp;
                dy = (tdy / dist) * sp;
                if (dx < 0) this.world.facing = -1;
                if (dx > 0) this.world.facing =  1;
            }
        }

        if (dx !== 0 || dy !== 0) {
            this.world.charX = Math.max(20, Math.min(this.WORLD_W - 20, this.world.charX + dx));
            this.world.charY = Math.max(40, Math.min(this.WORLD_H - 40, this.world.charY + dy));

            if (this._charEl) {
                this._charEl.classList.add('wm-char-walking');
                // Flip facing
                this._charEl.style.transform = `translate(-50%, -50%) scaleX(${this.world.facing})`;
                clearTimeout(this._walkTimer);
                this._walkTimer = setTimeout(() => {
                    this._charEl?.classList.remove('wm-char-walking');
                }, 200);
            }
        }

        if (this._charEl) {
            this._charEl.style.left = this.world.charX + 'px';
            this._charEl.style.top  = this.world.charY + 'px';
        }

        this._scrollToChar(false);
        this._checkNearStage();
        this._updateBiomeLabel();
    },

    _scrollToChar(instant) {
        const vp = document.getElementById('wm-viewport');
        if (!vp) return;
        const viewH = vp.clientHeight || window.innerHeight - 52;
        let scrollY = this.world.charY - viewH / 2;
        scrollY = Math.max(0, Math.min(this.WORLD_H - viewH, scrollY));

        if (instant) {
            vp.scrollTop = scrollY;
        } else {
            const diff = scrollY - vp.scrollTop;
            if (Math.abs(diff) > 0.5) vp.scrollTop += diff * 0.10;
        }
    },

    _checkNearStage() {
        const RADIUS = 72;
        let nearest = -1, minDist = Infinity;

        for (let i = 0; i < this.stages.length; i++) {
            const s  = this.stages[i];
            const sx = (s.xPct / 100) * this.WORLD_W;
            const dx = this.world.charX - sx;
            const dy = this.world.charY - s.worldY;
            const d  = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS && d < minDist) { minDist = d; nearest = i; }
        }

        if (nearest === this.nearStageIdx) return;
        this.nearStageIdx = nearest;

        if (!this._interEl) return;
        if (nearest >= 0 && this.stages[nearest].unlocked) {
            const s = this.stages[nearest];
            this._interEl.classList.remove('hidden');

            const titleEl = document.getElementById('wm-interact-title');
            const metaEl  = document.getElementById('wm-interact-meta');
            const starsEl = document.getElementById('wm-interact-stars');

            if (titleEl)  titleEl.textContent  = s.title;
            if (metaEl)   metaEl.textContent    = s.isFinal ? '✦ MISSÃO FINAL' : s.isBoss ? '💀 CHEFE' : `⚔️ MISSÃO ${s.index}`;
            if (starsEl) {
                starsEl.innerHTML = s.completed
                    ? [1,2,3].map(n => `<span class="${n <= s.stars ? 'wm-star-lit' : 'wm-star-dim'}">★</span>`).join('')
                    : '';
            }
        } else {
            this._interEl.classList.add('hidden');
        }
    },

    _updateBiomeLabel() {
        if (!this._zoneEl?.name) return;
        for (const b of this._biomes) {
            if (this.world.charY >= b.top && this.world.charY < b.bottom) {
                if (this._currentBiome !== b.id) {
                    this._currentBiome = b.id;
                    this._zoneEl.icon.textContent = b.icon;
                    this._zoneEl.name.textContent = b.name;
                    // Flash the zone pill on biome change
                    const pill = document.getElementById('wm-zone-pill');
                    if (pill) {
                        pill.classList.add('wm-zone-flash');
                        setTimeout(() => pill.classList.remove('wm-zone-flash'), 800);
                    }
                }
                break;
            }
        }
    },

    // ── INTERACTIONS ──────────────────────────────────────────────
    interactWithNear() {
        if (this.nearStageIdx < 0) return;
        const s = this.stages[this.nearStageIdx];
        if (!s.unlocked) return;
        this._doExit();
        Router.navigate(`#stage/${this.chapterId}/${s.id}`);
    },

    _clickNode(idx) {
        const s = this.stages[idx];
        this.world.targetX = (s.xPct / 100) * this.WORLD_W;
        this.world.targetY = s.worldY;
    },

    // ── INPUT BINDING ─────────────────────────────────────────────
    _bindEvents() {
        this._boundKeyDown = e => this._onKeyDown(e);
        this._boundKeyUp   = e => this._onKeyUp(e);
        window.addEventListener('keydown', this._boundKeyDown);
        window.addEventListener('keyup',   this._boundKeyUp);

        const vp = document.getElementById('wm-viewport');
        if (vp) {
            this._boundClick = e => this._onViewportClick(e);
            this._boundTouch = e => this._onViewportTouch(e);
            vp.addEventListener('click',    this._boundClick);
            vp.addEventListener('touchend', this._boundTouch, { passive: true });
        }
    },

    _onKeyDown(e) {
        if (!this.running) return;
        const MAP = {
            ArrowUp:'up', ArrowDown:'down', ArrowLeft:'left', ArrowRight:'right',
            w:'up', s:'down', a:'left', d:'right',
            W:'up', S:'down', A:'left', D:'right',
        };
        if (MAP[e.key]) {
            this.keys[MAP[e.key]] = true;
            this.world.targetX    = null;
            e.preventDefault();
        }
        if (e.key === 'Enter' || e.key === ' ') { this.interactWithNear(); e.preventDefault(); }
        if (e.key === 'Escape') this.exit();
    },

    _onKeyUp(e) {
        const MAP = {
            ArrowUp:'up', ArrowDown:'down', ArrowLeft:'left', ArrowRight:'right',
            w:'up', s:'down', a:'left', d:'right',
            W:'up', S:'down', A:'left', D:'right',
        };
        if (MAP[e.key]) this.keys[MAP[e.key]] = false;
    },

    _onViewportClick(e) {
        if (e.target.closest('.wm-node,.wm-hud,.wm-interact,.wm-dpad,.wm-enter-btn,.wm-back-btn,.wm-deco-npc')) return;
        const worldEl = document.getElementById('wm-world');
        if (!worldEl) return;
        const r = worldEl.getBoundingClientRect();
        this.world.targetX = e.clientX - r.left;
        this.world.targetY = e.clientY - r.top + document.getElementById('wm-viewport').scrollTop;
    },

    _onViewportTouch(e) {
        if (e.target.closest('.wm-node,.wm-hud,.wm-interact,.wm-dpad,.wm-enter-btn,.wm-back-btn,.wm-deco-npc')) return;
        const t = e.changedTouches[0];
        if (!t) return;
        const worldEl = document.getElementById('wm-world');
        if (!worldEl) return;
        const r = worldEl.getBoundingClientRect();
        this.world.targetX = t.clientX - r.left;
        this.world.targetY = t.clientY - r.top + document.getElementById('wm-viewport').scrollTop;
    },

    dpad(dir, pressed) {
        this.keys[dir] = pressed;
        if (pressed) this.world.targetX = null;
    },

    // ── EXIT ──────────────────────────────────────────────────────
    exit() {
        ModalEngine.interrupt('missionExit', {
            context:   'aventura',
            onConfirm: () => {
                this._doExit();
                Router.navigate(`#chapter/${this.chapterId}`);
            },
        });
    },

    _doExit() {
        this.running = false;
        if (this.rafId) { cancelAnimationFrame(this.rafId); this.rafId = null; }
        if (this._boundKeyDown) {
            window.removeEventListener('keydown', this._boundKeyDown);
            window.removeEventListener('keyup',   this._boundKeyUp);
        }
        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
    },
};

window.AdventureMap = AdventureMap;
