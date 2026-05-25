/**
 * EDUQUEST WORLD MAP ENGINE v3.0
 * Top-to-bottom progression, attack animations, auto-walk, Web Audio synthesis.
 * Renders within app-container — HUD and sidebar stay visible on desktop/tablet.
 */

const AdventureMap = {

    WORLD_W: 440,
    WORLD_H: 2700,

    // Stage 1 at TOP (y≈180), final boss at BOTTOM (y≈2530)
    _stagePositions: [
        [50,  180],  //  1 — Forest of Origin (center, top)
        [28,  380],  //  2 — (left)
        [72,  580],  //  3 — (right)
        [22,  790],  //  4 — (far left)
        [65,  990],  //  5 — Village (right)
        [30, 1170],  //  6 — (left)
        [68, 1370],  //  7 — Lab (right)
        [28, 1570],  //  8 — (left)
        [62, 1770],  //  9 — Tower (right)
        [36, 1970],  // 10 — (left)
        [50, 2210],  // 11 — BOSS (center dramatic)
        [50, 2540],  // 12 — FINAL (center triumphant)
    ],

    // Biomes top → bottom (forest=start at top, citadel=end at bottom)
    _biomes: [
        { top:    0, bottom:  450, id: 'forest',  name: 'Floresta de Início',  svgIcon: 'compass',    iconColor: 'success', bg1: '#d1fae5', bg2: '#a7f3d0' },
        { top:  450, bottom: 1020, id: 'village', name: 'Aldeia do Saber',      svgIcon: 'home',       iconColor: '',        bg1: '#fef9c3', bg2: '#fde68a' },
        { top: 1020, bottom: 1590, id: 'lab',     name: 'Laboratório Arcano',   svgIcon: 'microscope', iconColor: 'science', bg1: '#dbeafe', bg2: '#bfdbfe' },
        { top: 1590, bottom: 2160, id: 'tower',   name: 'Torre do Saber',       svgIcon: 'portal',     iconColor: 'rpg',     bg1: '#ede9fe', bg2: '#ddd6fe' },
        { top: 2160, bottom: 2700, id: 'citadel', name: 'Cidadela Final',       svgIcon: 'crown',      iconColor: 'final',   bg1: '#fef3c7', bg2: '#fde68a' },
    ],

    _decorations: [
        // Forest zone (y 0–450)
        { x:  7, y: 100, emoji: '🌲', cls: 'wm-deco-tree' },
        { x: 86, y:  80, emoji: '🌳', cls: 'wm-deco-tree' },
        { x: 14, y: 290, emoji: '🍄', cls: 'wm-deco-small' },
        { x: 82, y: 260, emoji: '🌸', cls: 'wm-deco-small wm-float' },
        { x:  8, y: 380, emoji: '🦋', cls: 'wm-deco-small wm-float' },
        { x: 88, y: 350, emoji: '🌿', cls: 'wm-deco-small' },
        { x: 42, y: 160, emoji: '🪨', cls: 'wm-deco-rock' },
        // Village zone (y 450–1020)
        { x:  9, y: 520, emoji: '🏠',   cls: 'wm-deco-building' },
        { x: 84, y: 490, emoji: '🌻',   cls: 'wm-deco-tree' },
        { x: 10, y: 720, emoji: '🧑‍🌾', cls: 'wm-deco-npc', label: 'Aldeão' },
        { x: 85, y: 790, emoji: '🛖',   cls: 'wm-deco-building' },
        { x: 38, y: 920, emoji: '🌾',   cls: 'wm-deco-small' },
        { x: 88, y: 950, emoji: '🐓',   cls: 'wm-deco-small wm-float' },
        // Lab zone (y 1020–1590)
        { x:  8, y: 1090, emoji: '🧪',   cls: 'wm-deco-building' },
        { x: 86, y: 1070, emoji: '🔬',   cls: 'wm-deco-building' },
        { x: 12, y: 1290, emoji: '👩‍🔬', cls: 'wm-deco-npc', label: 'Cientista' },
        { x: 84, y: 1440, emoji: '⚗️',   cls: 'wm-deco-building' },
        { x: 50, y: 1510, emoji: '🔭',   cls: 'wm-deco-small' },
        { x: 10, y: 1545, emoji: '💡',   cls: 'wm-deco-small wm-pulse' },
        // Tower zone (y 1590–2160)
        { x:  8, y: 1660, emoji: '💠',   cls: 'wm-deco-crystal wm-pulse' },
        { x: 87, y: 1710, emoji: '🔮',   cls: 'wm-deco-crystal wm-pulse' },
        { x: 10, y: 1870, emoji: '🧙',   cls: 'wm-deco-npc', label: 'Mago Sábio' },
        { x: 84, y: 1955, emoji: '✨',   cls: 'wm-deco-small wm-float' },
        { x: 35, y: 2080, emoji: '📚',   cls: 'wm-deco-building' },
        { x: 88, y: 2110, emoji: '🌟',   cls: 'wm-deco-small wm-float' },
        // Citadel zone (y 2160–2700)
        { x: 12, y: 2230, emoji: '🚩',   cls: 'wm-deco-small' },
        { x: 80, y: 2200, emoji: '🏰',   cls: 'wm-deco-building' },
        { x: 10, y: 2370, emoji: '👑',   cls: 'wm-deco-npc', label: 'Rei do Saber' },
        { x: 85, y: 2460, emoji: '⭐',   cls: 'wm-deco-crystal wm-float' },
        { x: 50, y: 2630, emoji: '🎓',   cls: 'wm-deco-crystal wm-pulse' },
    ],

    // ── STATE ────────────────────────────────────────────────────
    chapterId:     null,
    stages:        [],
    nearStageIdx:  -1,
    _labelNearIdx: -1,
    running:       false,
    rafId:         null,
    _walkTimer:    null,
    _currentBiome: '',

    world: { charX: 220, charY: 140, speed: 3.2, facing: 1 },

    _autoWalk: {
        active: false, fromX: 0, fromY: 0, toX: 0, toY: 0,
        progress: 0, duration: 1400, startTime: 0, stepTimer: 0,
    },

    keys: { up: false, down: false, left: false, right: false },

    _boundKeyDown: null,
    _boundKeyUp:   null,
    _audioCtx:     null,
    _charEl:       null,
    _zoneEl:       null,

    // ── ENTRY POINT ──────────────────────────────────────────────
    start(chapterId) {
        if (this.running) {
            this.running = false;
            if (this.rafId) cancelAnimationFrame(this.rafId);
        }
        if (this._boundKeyDown) {
            window.removeEventListener('keydown', this._boundKeyDown);
            window.removeEventListener('keyup',   this._boundKeyUp);
        }

        this.chapterId     = chapterId;
        this.nearStageIdx  = -1;
        this._labelNearIdx = -1;
        this._autoWalk.active = false;
        Object.assign(this.keys, { up: false, down: false, left: false, right: false });

        const meta = window.CHAPTER_METADATA;
        if (!meta) { Router.navigate(`#chapter/${chapterId}`); return; }

        this.stages = (meta.stages || []).map((s, i) => {
            const pos  = this._stagePositions[i] || [50, (i + 1) * 220];
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

        // Place character near first active (unlocked but incomplete) stage
        const firstActive = this.stages.find(s => s.unlocked && !s.completed) || this.stages[0];
        if (firstActive) {
            this.world.charX = (firstActive.xPct / 100) * this.WORLD_W;
            this.world.charY = firstActive.worldY - 55;
        } else {
            this.world.charX = 220;
            this.world.charY = 120;
        }

        // Mark app-container so CSS can make it a proper flex scroll host
        const container = document.getElementById('app-container');
        if (container) container.classList.add('wm-host');

        // Hide global right panel (app layout) — our wm-right-panel replaces it
        const globalRP = document.getElementById('right-panel');
        if (globalRP) globalRP.style.display = 'none';

        document.getElementById('bottom-nav')?.classList.add('hidden');

        this._renderWorld();

        // Show discipline selector in header
        const discWrap = document.getElementById('hud-disc-wrap');
        const discText = document.getElementById('hud-disc-text');
        if (discWrap) discWrap.style.removeProperty('display');
        if (discText && meta) {
            const subNames = { ciencias: 'Ciências', matematica: 'Matemática', historia: 'História', geografia: 'Geografia' };
            const gradeNames = { '7ano': '7º Ano', '8ano': '8º Ano', '9ano': '9º Ano' };
            const sub = subNames[meta.subject] || 'Ciências';
            const grade = gradeNames[meta.grade] || '';
            discText.textContent = grade ? `${sub} • ${grade}` : sub;
        }

        this._bindEvents();
        this.running = true;
        this._loop();
        requestAnimationFrame(() => this._scrollToChar(true));
    },

    // ── WORLD RENDER ─────────────────────────────────────────────
    _renderWorld() {
        const app = document.getElementById('app-container');
        const W   = this.WORLD_W;
        const H   = this.WORLD_H;
        const u   = State.data.user;
        const starsProgress = this.stages.filter(s => s.completed).length;

        const ic = IconSystem;
        app.innerHTML = `
<div class="wm-wrap" id="wm-wrap">

    <div class="wm-topstrip" id="wm-topstrip">
        <button class="wm-back-btn" onclick="AdventureMap.exit()" aria-label="Sair do mapa">${ic.html('chevron-left',{size:'md'})}</button>
        <div class="wm-zone-pill" id="wm-zone-pill">
            <span class="wm-zone-icon" id="wm-zone-icon">${ic.html('compass',{size:'sm',color:'success'})}</span>
            <span class="wm-zone-name" id="wm-zone-name">Floresta de Início</span>
        </div>
        <div class="wm-hud-stats">
            <div class="wm-stat-chip">${ic.html('xp',{size:'xs',color:'xp'})} ${u.level || 1}</div>
            <div class="wm-stat-chip">${ic.html('star',{size:'xs',color:'final'})} ${starsProgress}/${this.stages.length}</div>
        </div>
    </div>

    <div class="wm-content" id="wm-content">

        <div class="wm-map-area">
            <div class="wm-map-pghdr">
                <span class="wm-map-pghdr-globe">🌍</span>
                <div>
                    <div class="wm-map-pghdr-title">Modo Aventura</div>
                    <div class="wm-map-pghdr-sub">Explore os mundos, aprenda e derrote os vilões da desinformação!</div>
                </div>
            </div>

            <div class="wm-viewport" id="wm-viewport" role="main">
                <div class="wm-world" id="wm-world" style="width:${W}px;height:${H}px">

                    ${this._buildBiomes()}
                    ${this._buildPathsSVG()}
                    ${this._buildDecorations()}
                    ${this._buildNodes()}
                    ${this._buildLabels()}

                    <div class="wm-char" id="wm-char"
                         style="left:${this.world.charX}px;top:${this.world.charY}px"
                         aria-label="Seu personagem">${ic.html('char',{size:'xl'})}</div>

                </div>
            </div>
        </div>

        ${this._buildRightPanel()}

    </div>

    <div class="wm-dpad" role="group" aria-label="Controles de movimento">
        <button class="wm-dpad-btn wm-dpad-up"
            ontouchstart="AdventureMap.dpad('up',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('up',false)"
            onmousedown="AdventureMap.dpad('up',true)"
            onmouseup="AdventureMap.dpad('up',false)"
            onmouseleave="AdventureMap.dpad('up',false)">${ic.html('chevron-up',{size:'lg'})}</button>
        <button class="wm-dpad-btn wm-dpad-left"
            ontouchstart="AdventureMap.dpad('left',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('left',false)"
            onmousedown="AdventureMap.dpad('left',true)"
            onmouseup="AdventureMap.dpad('left',false)"
            onmouseleave="AdventureMap.dpad('left',false)">${ic.html('chevron-left',{size:'lg'})}</button>
        <button class="wm-dpad-btn wm-dpad-right"
            ontouchstart="AdventureMap.dpad('right',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('right',false)"
            onmousedown="AdventureMap.dpad('right',true)"
            onmouseup="AdventureMap.dpad('right',false)"
            onmouseleave="AdventureMap.dpad('right',false)">${ic.html('chevron-right',{size:'lg'})}</button>
        <button class="wm-dpad-btn wm-dpad-down"
            ontouchstart="AdventureMap.dpad('down',true);event.preventDefault()"
            ontouchend="AdventureMap.dpad('down',false)"
            onmousedown="AdventureMap.dpad('down',true)"
            onmouseup="AdventureMap.dpad('down',false)"
            onmouseleave="AdventureMap.dpad('down',false)">${ic.html('chevron-down',{size:'lg'})}</button>
    </div>

</div>`;

        this._charEl = document.getElementById('wm-char');
        this._zoneEl = {
            icon: document.getElementById('wm-zone-icon'),
            name: document.getElementById('wm-zone-name'),
        };
    },

    // ── BIOMES ───────────────────────────────────────────────────
    _buildBiomes() {
        return this._biomes.map((b, i) => {
            const h       = b.bottom - b.top;
            const divider = i > 0 ? `<div class="wm-biome-divide" style="top:${b.top}px"></div>` : '';
            return `${divider}
            <div class="wm-biome wm-biome-${b.id}"
                 style="top:${b.top}px;height:${h}px;background:linear-gradient(180deg,${b.bg1} 0%,${b.bg2} 100%)">
                <div class="wm-biome-name" aria-hidden="true">${IconSystem.html(b.svgIcon,{size:'sm',color:b.iconColor||'muted'})} ${b.name}</div>
            </div>`;
        }).join('');
    },

    // ── COBBLESTONE PATHS — double SVG layer ─────────────────────
    _buildPathsSVG() {
        const W = this.WORLD_W;
        const H = this.WORLD_H;
        let base = '', tiles = '', doneBase = '', doneTiles = '';

        for (let i = 0; i < this.stages.length - 1; i++) {
            const a    = this.stages[i];
            const b    = this.stages[i + 1];
            const x1   = (a.xPct / 100) * W;
            const y1   = a.worldY;
            const x2   = (b.xPct / 100) * W;
            const y2   = b.worldY;
            const sign = (i % 2 === 0) ? 1 : -1;
            const bulge = 44 * sign;
            const cp1x = x1 + bulge,  cp1y = y1 + (y2 - y1) * 0.38;
            const cp2x = x2 - bulge,  cp2y = y1 + (y2 - y1) * 0.62;
            const d = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

            if (a.completed) {
                doneBase  += `<path class="wm-path-base wm-path-done-base"  d="${d}" />`;
                doneTiles += `<path class="wm-path-tiles wm-path-done-tiles" d="${d}" />`;
            } else {
                base  += `<path class="wm-path-base"  d="${d}" />`;
                tiles += `<path class="wm-path-tiles" d="${d}" />`;
            }
        }

        return `<svg class="wm-paths-svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <linearGradient id="pathDone" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#4ade80" />
                    <stop offset="100%" stop-color="#22c55e" />
                </linearGradient>
            </defs>
            ${base}${doneBase}${tiles}${doneTiles}
        </svg>`;
    },

    // ── DECORATIONS ──────────────────────────────────────────────
    _buildDecorations() {
        return this._decorations.map(d => {
            const x     = (d.x / 100) * this.WORLD_W;
            const label = d.label ? `<div class="wm-npc-label">${d.label}</div>` : '';
            return `<div class="${d.cls} wm-deco" style="left:${x}px;top:${d.y}px" aria-hidden="true">${d.emoji}${label}</div>`;
        }).join('');
    },

    // ── STAGE NODES ──────────────────────────────────────────────
    _buildNodes() {
        return this.stages.map((s, i) => {
            const x          = (s.xPct / 100) * this.WORLD_W;
            const stateClass = s.completed ? 'wm-done' : s.unlocked ? 'wm-active' : 'wm-locked';
            const typeClass  = s.isFinal ? 'wm-final' : s.isBoss ? 'wm-boss' : '';
            const ic = IconSystem;
            const icon = s.completed
                ? ic.html('check',  { size: 'lg' })
                : s.isFinal
                    ? ic.html('crown',  { size: 'xl', variant: 'glow' })
                    : s.isBoss
                        ? ic.html('boss',   { size: 'lg' })
                        : s.unlocked
                            ? `<span class="wm-node-num">${s.index}</span>`
                            : ic.html('lock', { size: 'md' });
            const typeLabel = s.isFinal
                ? `${ic.html('star',{size:'xs'})} FINAL`
                : s.isBoss
                    ? `${ic.html('boss',{size:'xs'})} CHEFE`
                    : '';
            const starsHTML  = s.completed
                ? `<div class="wm-node-stars" aria-label="${s.stars} estrelas">
                     ${[1,2,3].map(n => `<span class="${n <= s.stars ? 'wm-star-lit' : 'wm-star-dim'}">★</span>`).join('')}
                   </div>`
                : '';

            return `
            <div class="wm-node ${stateClass} ${typeClass}" id="wmn-${i}"
                 style="left:${x}px;top:${s.worldY}px"
                 onclick="AdventureMap._clickNode(${i})"
                 role="button"
                 aria-label="${s.title} — ${s.completed ? 'concluído' : s.unlocked ? 'disponível' : 'bloqueado'}"
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

    // ── CALLOUT LABELS ────────────────────────────────────────────
    _buildLabels() {
        return this.stages.map((s, i) => {
            const nodeX     = (s.xPct / 100) * this.WORLD_W;
            const isRight   = s.xPct < 50;  // node on left half → label extends right
            const ic2 = IconSystem;
            const statusText = s.completed
                ? `${ic2.html('check',{size:'xs',color:'success'})} Concluído`
                : s.unlocked
                    ? `${ic2.html('chevron-right',{size:'xs',color:'xp'})} Disponível`
                    : `${ic2.html('lock',{size:'xs'})} Bloqueado`;
            const statusCls  = s.completed ? 'wm-status-done' : s.unlocked ? 'wm-status-active' : 'wm-status-locked';
            const posStyle   = isRight
                ? `left:${nodeX + 34}px;top:${s.worldY}px;transform:translateY(-50%)`
                : `left:${nodeX - 34}px;top:${s.worldY}px;transform:translate(-100%,-50%)`;

            return `
            <div class="wm-label ${isRight ? 'wm-label-right' : 'wm-label-left'}" id="wml-${i}" style="${posStyle}">
                <div class="wm-label-card">
                    <div class="wm-label-title">${s.title}</div>
                    <div class="wm-label-status ${statusCls}">${statusText}</div>
                    <button class="wm-label-enter-btn" onclick="AdventureMap._enterStage(${i})">
                        Entrar <span aria-hidden="true">→</span>
                    </button>
                </div>
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
        const now = performance.now();

        if (this._autoWalk.active) {
            this._updateAutoWalk(now);
        } else {
            this._updateManual();
        }

        if (this._charEl) {
            this._charEl.style.left = this.world.charX + 'px';
            this._charEl.style.top  = this.world.charY + 'px';
        }

        this._scrollToChar(false);
        this._checkNearStage();
        this._updateBiomeLabel();
    },

    _updateManual() {
        let dx = 0, dy = 0;
        const sp = this.world.speed;
        if (this.keys.up)    dy -= sp;
        if (this.keys.down)  dy += sp;
        if (this.keys.left)  { dx -= sp; this.world.facing = -1; }
        if (this.keys.right) { dx += sp; this.world.facing =  1; }

        if (dx !== 0 || dy !== 0) {
            this.world.charX = Math.max(20, Math.min(this.WORLD_W - 20, this.world.charX + dx));
            this.world.charY = Math.max(40, Math.min(this.WORLD_H - 40, this.world.charY + dy));
            if (this._charEl) {
                this._charEl.classList.add('wm-char-walking');
                this._charEl.style.transform = `translate(-50%,-50%) scaleX(${this.world.facing})`;
                clearTimeout(this._walkTimer);
                this._walkTimer = setTimeout(() => this._charEl?.classList.remove('wm-char-walking'), 200);
            }
        }
    },

    _updateAutoWalk(now) {
        const aw = this._autoWalk;
        const elapsed = now - aw.startTime;
        aw.progress = Math.min(1, elapsed / aw.duration);

        // Ease in-out cubic
        const t = aw.progress < 0.5
            ? 4 * aw.progress ** 3
            : 1 - (-2 * aw.progress + 2) ** 3 / 2;

        this.world.charX = aw.fromX + (aw.toX - aw.fromX) * t;
        this.world.charY = aw.fromY + (aw.toY - aw.fromY) * t;

        const ddx = aw.toX - aw.fromX;
        if (Math.abs(ddx) > 2) this.world.facing = ddx > 0 ? 1 : -1;

        if (this._charEl) {
            this._charEl.classList.add('wm-char-walking');
            this._charEl.style.transform = `translate(-50%,-50%) scaleX(${this.world.facing})`;
        }

        if (now - aw.stepTimer > 340) {
            aw.stepTimer = now;
            this._playStep();
            this._spawnFootstep();
        }

        if (aw.progress >= 1) {
            aw.active = false;
            if (this._charEl) this._charEl.classList.remove('wm-char-walking');
            this._playBell();
            this._spawnArrivalEffect(this.world.charX, this.world.charY);
        }
    },

    // ── SCROLL ───────────────────────────────────────────────────
    _scrollToChar(instant) {
        const vp = document.getElementById('wm-viewport');
        if (!vp) return;
        const viewH = vp.clientHeight || window.innerHeight - 100;
        let scrollY = this.world.charY - viewH / 2;
        scrollY = Math.max(0, Math.min(this.WORLD_H - viewH, scrollY));
        if (instant) {
            vp.scrollTop = scrollY;
        } else {
            const diff = scrollY - vp.scrollTop;
            if (Math.abs(diff) > 0.5) vp.scrollTop += diff * 0.09;
        }
    },

    // ── NEAR STAGE CHECK ─────────────────────────────────────────
    _checkNearStage() {
        const RADIUS = 80;
        let nearest = -1, minDist = Infinity;

        for (let i = 0; i < this.stages.length; i++) {
            const s  = this.stages[i];
            const sx = (s.xPct / 100) * this.WORLD_W;
            const dx = this.world.charX - sx;
            const dy = this.world.charY - s.worldY;
            const d  = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS && d < minDist) { minDist = d; nearest = i; }
        }

        if (nearest === this._labelNearIdx) return;

        if (this._labelNearIdx >= 0) {
            document.getElementById(`wml-${this._labelNearIdx}`)?.classList.remove('wm-label-near');
        }
        this._labelNearIdx = nearest;
        this.nearStageIdx  = nearest;

        if (nearest >= 0 && this.stages[nearest].unlocked) {
            document.getElementById(`wml-${nearest}`)?.classList.add('wm-label-near');
        }
    },

    // ── BIOME LABEL ──────────────────────────────────────────────
    _updateBiomeLabel() {
        if (!this._zoneEl?.name) return;
        for (const b of this._biomes) {
            if (this.world.charY >= b.top && this.world.charY < b.bottom) {
                if (this._currentBiome !== b.id) {
                    this._currentBiome = b.id;
                    this._zoneEl.icon.innerHTML = IconSystem.html(b.svgIcon, { size: 'sm', color: b.iconColor || '' });
                    this._zoneEl.name.textContent = b.name;
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

    // ── NODE CLICK ───────────────────────────────────────────────
    _clickNode(idx) {
        const s  = this.stages[idx];
        const sx = (s.xPct / 100) * this.WORLD_W;

        if (!s.unlocked) {
            const el = document.getElementById(`wmn-${idx}`);
            el?.classList.remove('wm-node-shake');
            void el?.offsetWidth;
            el?.classList.add('wm-node-shake');
            setTimeout(() => el?.classList.remove('wm-node-shake'), 500);
            this._playLock();
            return;
        }

        const dx   = this.world.charX - sx;
        const dy   = this.world.charY - s.worldY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 88) {
            this._fireProjectile(idx);
        } else {
            this._startAutoWalk(sx, s.worldY - 55, idx);
        }
    },

    _startAutoWalk(targetX, targetY, stageIdx) {
        const aw = this._autoWalk;
        aw.active    = true;
        aw.fromX     = this.world.charX;
        aw.fromY     = this.world.charY;
        aw.toX       = Math.max(20, Math.min(this.WORLD_W - 20, targetX));
        aw.toY       = Math.max(40, Math.min(this.WORLD_H - 40, targetY));
        aw.progress  = 0;
        aw.startTime = performance.now();
        aw.stepTimer = performance.now();
        const dist   = Math.hypot(aw.toX - aw.fromX, aw.toY - aw.fromY);
        aw.duration  = Math.max(700, Math.min(2400, dist * 4.2));
    },

    _fireProjectile(idx) {
        const s     = this.stages[idx];
        const sx    = (s.xPct / 100) * this.WORLD_W;
        const sy    = s.worldY;
        const isBig = s.isBoss || s.isFinal;
        const world = document.getElementById('wm-world');
        if (!world) { this._enterStage(idx); return; }

        const proj  = document.createElement('div');
        proj.className = `wm-projectile ${isBig ? 'wm-proj-cannonball' : 'wm-proj-arrow'}`;

        const ddx   = sx - this.world.charX;
        const ddy   = sy - this.world.charY;
        const angle = Math.atan2(ddy, ddx) * (180 / Math.PI);

        proj.style.left = this.world.charX + 'px';
        proj.style.top  = this.world.charY + 'px';
        proj.style.setProperty('--proj-dx', ddx + 'px');
        proj.style.setProperty('--proj-dy', ddy + 'px');
        proj.style.setProperty('--proj-rot', angle + 'deg');
        world.appendChild(proj);

        this._playArrow(isBig);

        setTimeout(() => {
            proj.remove();
            this._spawnExplosion(sx, sy, isBig);
            this._playExplosion(isBig);
        }, 380);

        setTimeout(() => this._enterStage(idx), 750);
    },

    _enterStage(idx) {
        const s = this.stages[idx];
        if (!s.unlocked) return;
        this._doExit();
        Router.navigate(`#stage/${this.chapterId}/${s.id}`);
    },

    // ── EFFECTS ───────────────────────────────────────────────────
    _spawnExplosion(x, y, big) {
        const world = document.getElementById('wm-world');
        if (!world) return;
        const el = document.createElement('div');
        el.className = `wm-explosion${big ? ' wm-explosion-big' : ''}`;
        el.style.left = x + 'px';
        el.style.top  = y + 'px';
        el.textContent = big ? '💥' : '✨';
        world.appendChild(el);
        setTimeout(() => el.remove(), 700);
    },

    _spawnArrivalEffect(x, y) {
        const world = document.getElementById('wm-world');
        if (!world) return;
        for (let i = 0; i < 5; i++) {
            const el = document.createElement('div');
            el.className = 'wm-arrival-spark';
            el.style.left = (x + (Math.random() - 0.5) * 36) + 'px';
            el.style.top  = (y + (Math.random() - 0.5) * 36) + 'px';
            el.textContent = '✦';
            world.appendChild(el);
            setTimeout(() => el.remove(), 600);
        }
    },

    _spawnFootstep() {
        const world = document.getElementById('wm-world');
        if (!world) return;
        const el = document.createElement('div');
        el.className = 'wm-footstep';
        el.style.left = (this.world.charX + (Math.random() - 0.5) * 18) + 'px';
        el.style.top  = (this.world.charY + 14) + 'px';
        el.textContent = '·';
        world.appendChild(el);
        setTimeout(() => el.remove(), 420);
    },

    // ── WEB AUDIO SYNTHESIS ───────────────────────────────────────
    _getAudioCtx() {
        try {
            if (!this._audioCtx) {
                this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (this._audioCtx.state === 'suspended') this._audioCtx.resume();
            return this._audioCtx;
        } catch { return null; }
    },

    _playStep() {
        const ctx = this._getAudioCtx();
        if (!ctx) return;
        const dur = 0.055;
        const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const f = ctx.createBiquadFilter();
        f.type = 'lowpass'; f.frequency.value = 280;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.10, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
        src.connect(f); f.connect(g); g.connect(ctx.destination);
        src.start();
    },

    _playBell() {
        const ctx = this._getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.45);
        g.gain.setValueAtTime(0.22, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.5);
    },

    _playArrow(heavy) {
        const ctx = this._getAudioCtx();
        if (!ctx) return;
        const dur = heavy ? 0.20 : 0.10;
        const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const f = ctx.createBiquadFilter();
        f.type = 'highpass'; f.frequency.value = heavy ? 180 : 550;
        const g = ctx.createGain();
        g.gain.setValueAtTime(heavy ? 0.38 : 0.24, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
        src.connect(f); f.connect(g); g.connect(ctx.destination);
        src.start();
    },

    _playExplosion(heavy) {
        const ctx = this._getAudioCtx();
        if (!ctx) return;
        const dur = heavy ? 0.60 : 0.32;
        const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 1.4;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const f = ctx.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.setValueAtTime(heavy ? 820 : 520, ctx.currentTime);
        f.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + dur);
        const g = ctx.createGain();
        g.gain.setValueAtTime(heavy ? 0.55 : 0.38, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
        src.connect(f); f.connect(g); g.connect(ctx.destination);
        src.start();
    },

    _playLock() {
        const ctx = this._getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.14);
        g.gain.setValueAtTime(0.14, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.14);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.14);
    },

    // ── INPUT ─────────────────────────────────────────────────────
    _bindEvents() {
        this._boundKeyDown = e => this._onKeyDown(e);
        this._boundKeyUp   = e => this._onKeyUp(e);
        window.addEventListener('keydown', this._boundKeyDown);
        window.addEventListener('keyup',   this._boundKeyUp);
    },

    _onKeyDown(e) {
        if (!this.running) return;
        const MAP = {
            ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
            w: 'up', s: 'down', a: 'left', d: 'right',
            W: 'up', S: 'down', A: 'left', D: 'right',
        };
        if (MAP[e.key]) {
            this.keys[MAP[e.key]] = true;
            this._autoWalk.active = false;
            e.preventDefault();
        }
        if ((e.key === 'Enter' || e.key === ' ') && this.nearStageIdx >= 0) {
            this._clickNode(this.nearStageIdx);
            e.preventDefault();
        }
        if (e.key === 'Escape') this.exit();
    },

    _onKeyUp(e) {
        const MAP = {
            ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
            w: 'up', s: 'down', a: 'left', d: 'right',
            W: 'up', S: 'down', A: 'left', D: 'right',
        };
        if (MAP[e.key]) this.keys[MAP[e.key]] = false;
    },

    dpad(dir, pressed) {
        this.keys[dir] = pressed;
        if (pressed) this._autoWalk.active = false;
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
        if (this._audioCtx) {
            try { this._audioCtx.close(); } catch {}
            this._audioCtx = null;
        }
        document.getElementById('app-container')?.classList.remove('wm-host');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
        const discWrap = document.getElementById('hud-disc-wrap');
        if (discWrap) discWrap.style.display = 'none';
        // Restore global right panel
        const globalRP = document.getElementById('right-panel');
        if (globalRP) globalRP.style.removeProperty('display');
    },

    // ── RIGHT PANEL ───────────────────────────────────────────────
    _buildRightPanel() {
        const u  = State.data.user;
        const ic = IconSystem;
        const activeStage = this.stages.find(s => s.unlocked && !s.completed);
        const activeIdx   = activeStage ? this.stages.indexOf(activeStage) : -1;
        const boss        = this.stages.find(s => s.isBoss);
        const streakDays  = u.streak || 1;

        const DAYS = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'];
        const today = new Date().getDay();
        const weekDays = Array.from({length: 7}, (_, i) => {
            const offset = 6 - i;
            const dayIdx = (today - offset + 7) % 7;
            return { label: DAYS[dayIdx], isDone: offset < streakDays, isToday: offset === 0 };
        });

        const xp     = u.xp || 0;
        const league = xp >= 15000 ? 'Liga Platina' : xp >= 5000 ? 'Liga Ouro' : xp >= 1000 ? 'Liga Prata' : 'Liga Bronze';
        const dm     = State.data.dailyMissions || {};
        const dmDone = Array.isArray(dm.completed) ? dm.completed : [];
        const dailyList = [
            { id: 'complete_mission', icon: 'sword', label: 'Complete uma missão', xp: 100, gem: 15 },
            { id: 'combo_5',         icon: 'xp',    label: 'Combo devastador',    xp:  75, gem: 10 },
            { id: 'hard_stage',      icon: 'sword', label: 'Desafio difícil',     xp: 200, gem: 25 },
        ];
        const dmCount = dailyList.filter(d => dmDone.includes(d.id)).length;

        return `
<aside class="wm-right-panel" id="wm-right-panel">

    <div class="wm-rp-card wm-rp-mission-card">
        <div class="wm-rp-mission-hdr">
            ${ic.html('xp',{size:'sm'})} Missão Atual
        </div>
        <div class="wm-rp-mission-body">
            <div class="wm-rp-mission-title">${activeStage ? activeStage.title : 'Capítulo concluído!'}</div>
            <div class="wm-rp-mission-desc">${activeStage ? 'Responda as questões e avance!' : 'Todos os estágios completos.'}</div>
            ${activeIdx >= 0 ? `<button class="wm-rp-mission-btn" onclick="AdventureMap._enterStage(${activeIdx})">${ic.html('chevron-right',{size:'sm'})} Entrar</button>` : ''}
        </div>
    </div>

    <div class="wm-rp-card">
        <div class="wm-rp-header">
            ${ic.html('streak',{size:'sm',color:'streak'})} Sequência
            <span class="wm-rp-badge">${streakDays} dia${streakDays !== 1 ? 's' : ''}</span>
        </div>
        <div class="wm-rp-streak-row">
            ${weekDays.map(d => `
            <div class="wm-rp-streak-day${d.isToday ? ' today' : ''}${d.isDone ? ' done' : ''}">
                <div class="wm-rp-streak-icon">${d.isDone
                    ? ic.html('streak',{size:'xs',color:'streak'})
                    : ic.html('lock',{size:'xs'})}</div>
                <div class="wm-rp-streak-label">${d.label}</div>
            </div>`).join('')}
        </div>
    </div>

    <div class="wm-rp-card">
        <div class="wm-rp-header">
            ${ic.html('xp',{size:'sm',color:'xp'})} Missões do Dia
            <span class="wm-rp-badge${dmCount === 3 ? ' done' : ''}">${dmCount}/3</span>
        </div>
        <div class="wm-rp-dm-list">
            ${dailyList.map(d => {
                const done = dmDone.includes(d.id);
                return `
            <div class="wm-rp-dm-row${done ? ' done' : ''}">
                <div class="wm-rp-dm-icon">${ic.html(d.icon, {size:'sm', color: done ? 'success' : 'xp'})}</div>
                <div class="wm-rp-dm-info">
                    <div class="wm-rp-dm-label">${d.label}</div>
                    <div class="wm-rp-dm-rewards">
                        ${ic.html('xp',{size:'xs',color:'xp'})} +${d.xp}&nbsp;XP
                        &ensp;${ic.html('gem',{size:'xs',color:'gem'})} +${d.gem}
                    </div>
                </div>
                <div class="wm-rp-dm-check${done ? ' checked' : ''}">${done ? ic.html('check',{size:'xs',color:'white'}) : ''}</div>
            </div>`;}).join('')}
        </div>
    </div>

    <div class="wm-rp-card">
        <div class="wm-rp-header">
            ${ic.html('trophy',{size:'sm',color:'final'})} Sua Liga
        </div>
        <a href="#ranking" class="wm-rp-league-row">
            <div class="wm-rp-league-icon">${ic.html('crown',{size:'xl',color:'premium'})}</div>
            <div class="wm-rp-league-info">
                <div class="wm-rp-league-name">${league}</div>
                <div class="wm-rp-league-xp">${xp.toLocaleString('pt-BR')} XP total</div>
                <span class="wm-rp-league-link">Ver ranking →</span>
            </div>
            <div class="wm-rp-league-chev">${ic.html('chevron-right',{size:'sm'})}</div>
        </a>
    </div>

    <div class="wm-rp-card">
        <div class="wm-rp-header">
            ${ic.html('boss',{size:'sm',color:'boss'})} Boss da Semana
            <span class="wm-rp-badge soon">BREVE</span>
        </div>
        <div class="wm-rp-boss-row">
            <div class="wm-rp-boss-icon">${ic.html('boss',{size:'2xl',color:'boss'})}</div>
            <div class="wm-rp-boss-info">
                <div class="wm-rp-boss-name">${boss ? boss.title : 'Dragão do Conhecimento'}</div>
                <div class="wm-rp-boss-desc">Desbloqueio em breve!</div>
            </div>
        </div>
    </div>

</aside>`;
    },
};

window.AdventureMap = AdventureMap;
