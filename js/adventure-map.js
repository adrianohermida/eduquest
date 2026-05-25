/**
 * ADVENTURE MAP — EduQuest
 * Vertical world with character movement: keyboard, mouse-click, D-pad / touch
 */

const AdventureMap = {

    // ── WORLD DIMENSIONS ──────────────────────────────────
    WORLD_W: 480,
    WORLD_H: 3200,

    // ── STAGE POSITIONS [xPercent, worldY] — bottom→top ──
    _stagePositions: [
        [50, 2950],  // stage_01
        [25, 2720],  // stage_02
        [75, 2490],  // stage_03
        [25, 2260],  // stage_04
        [50, 2030],  // stage_05
        [75, 1800],  // stage_06
        [25, 1570],  // stage_07
        [75, 1340],  // stage_08
        [25, 1110],  // stage_09
        [50,  880],  // stage_10
        [50,  560],  // stage_boss
        [50,  280],  // stage_final
    ],

    // ── ZONE BANDS ────────────────────────────────────────
    _zones: [
        { top:    0, bottom:  500, name: '🏰 Cidadela Final',      bg: '#fef3c7', fg: '#92400e' },
        { top:  500, bottom: 1000, name: '🔮 Torre do Saber',      bg: '#ede9fe', fg: '#5b21b6' },
        { top: 1000, bottom: 1600, name: '🧪 Laboratório Arcano',  bg: '#e0f2fe', fg: '#0369a1' },
        { top: 1600, bottom: 2200, name: '🏙️ Cidade do Saber',    bg: '#f0fdf4', fg: '#15803d' },
        { top: 2200, bottom: 3200, name: '🌿 Floresta da Origem',  bg: '#fafaf8', fg: '#1e293b' },
    ],

    // ── STATE ─────────────────────────────────────────────
    chapterId:    null,
    stages:       [],
    nearStageIdx: -1,
    running:      false,
    rafId:        null,
    _walkTimer:   null,

    world: {
        charX: 240, charY: 2900,
        targetX: null, targetY: null,
        speed: 2.8,
    },

    keys: { up: false, down: false, left: false, right: false },

    _boundKeyDown: null,
    _boundKeyUp:   null,
    _boundClick:   null,
    _boundTouch:   null,

    // Cached DOM elements
    _charEl:   null,
    _interEl:  null,
    _zoneEl:   null,

    // ── ENTRY ─────────────────────────────────────────────
    start(chapterId) {
        // Clean up any previous session
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

        // Build stage list with state
        this.stages = (meta.stages || []).map((s, i) => {
            const pos  = this._stagePositions[i] || [50, this.WORLD_H - (i + 1) * 240];
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

        this._render();
        this._bindEvents();
        this.running = true;
        this._loop();
    },

    // ── RENDER ────────────────────────────────────────────
    _render() {
        const app = document.getElementById('app-container');

        // Zone backgrounds
        const zonesHTML = this._zones.map(z => `
            <div style="position:absolute;left:0;top:${z.top}px;width:100%;height:${z.bottom - z.top}px;background:${z.bg};pointer-events:none">
                <div class="amap-zone-deco" style="color:${z.fg}">${z.name}</div>
            </div>`).join('');

        // Stage nodes + path lines
        let nodesHTML = '';
        for (let i = 0; i < this.stages.length; i++) {
            const s   = this.stages[i];
            const xPx = (s.xPct / 100) * this.WORLD_W;

            // Dashed path line to next stage
            if (i < this.stages.length - 1) {
                const n    = this.stages[i + 1];
                const nx   = (n.xPct / 100) * this.WORLD_W;
                const dx   = nx - xPx;
                const dy   = n.worldY - s.worldY;
                const len  = Math.sqrt(dx * dx + dy * dy);
                const ang  = Math.atan2(dy, dx) * 180 / Math.PI;
                const done = s.completed ? ' amap-path-done' : '';
                nodesHTML += `<div class="amap-path-line${done}" style="left:${xPx}px;top:${s.worldY}px;width:${len.toFixed(1)}px;transform:rotate(${ang.toFixed(2)}deg)"></div>`;
            }

            const nodeClass = 'amap-node' +
                (s.isFinal ? ' amap-final' : s.isBoss ? ' amap-boss' : '') +
                (s.completed ? ' amap-done' : s.unlocked ? ' amap-active' : ' amap-locked');

            const icon = s.completed ? '✓'
                       : s.unlocked  ? (s.isFinal ? '🎓' : s.isBoss ? '💀' : s.index)
                       : '🔒';

            const starsHTML = s.completed
                ? [1,2,3].map(n => `<span style="color:${n<=s.stars?'#f59e0b':'rgba(0,0,0,0.15)'}">${n<=s.stars?'★':'☆'}</span>`).join('')
                : '';

            nodesHTML += `
            <div class="${nodeClass}" id="amapn-${i}" style="left:${xPx}px;top:${s.worldY}px" onclick="AdventureMap._clickNode(${i})">
                <div class="amap-node-icon">${icon}</div>
                ${starsHTML ? `<div class="amap-node-stars">${starsHTML}</div>` : ''}
                <div class="amap-node-label">${s.title}</div>
            </div>`;
        }

        app.innerHTML = `
        <div class="amap-wrap" id="amap-wrap">

            <!-- Top HUD overlay -->
            <div class="amap-hud">
                <button class="amap-back-btn" onclick="AdventureMap.exit()">‹ Sair</button>
                <div class="amap-zone-label" id="amap-zone-lbl">🌿 Floresta da Origem</div>
            </div>

            <!-- Interact prompt (shown near unlocked stage) -->
            <div class="amap-interact hidden" id="amap-interact">
                <div class="amap-interact-name" id="amap-interact-name">Missão</div>
                <button class="btn-primary" style="padding:8px 22px;font-size:0.88rem"
                    onclick="AdventureMap.interactWithNear()">⚡ Entrar</button>
            </div>

            <!-- Scrollable world viewport -->
            <div class="amap-viewport" id="amap-viewport">
                <div id="amap-world" style="position:relative;width:${this.WORLD_W}px;height:${this.WORLD_H}px;overflow:hidden;margin:0 auto">
                    ${zonesHTML}
                    ${nodesHTML}
                    <div class="amap-char" id="amap-char" style="left:${this.world.charX}px;top:${this.world.charY}px">🦸</div>
                </div>
            </div>

            <!-- D-pad (touch/mouse fallback, auto-hidden on desktop) -->
            <div class="amap-dpad">
                <div style="grid-column:2;grid-row:1">
                    <button class="dpad-btn"
                        ontouchstart="AdventureMap.dpad('up',true);event.preventDefault()"
                        ontouchend="AdventureMap.dpad('up',false)"
                        onmousedown="AdventureMap.dpad('up',true)"
                        onmouseup="AdventureMap.dpad('up',false)"
                        onmouseleave="AdventureMap.dpad('up',false)">▲</button>
                </div>
                <div style="grid-column:1;grid-row:2">
                    <button class="dpad-btn"
                        ontouchstart="AdventureMap.dpad('left',true);event.preventDefault()"
                        ontouchend="AdventureMap.dpad('left',false)"
                        onmousedown="AdventureMap.dpad('left',true)"
                        onmouseup="AdventureMap.dpad('left',false)"
                        onmouseleave="AdventureMap.dpad('left',false)">◄</button>
                </div>
                <div style="grid-column:3;grid-row:2">
                    <button class="dpad-btn"
                        ontouchstart="AdventureMap.dpad('right',true);event.preventDefault()"
                        ontouchend="AdventureMap.dpad('right',false)"
                        onmousedown="AdventureMap.dpad('right',true)"
                        onmouseup="AdventureMap.dpad('right',false)"
                        onmouseleave="AdventureMap.dpad('right',false)">►</button>
                </div>
                <div style="grid-column:2;grid-row:3">
                    <button class="dpad-btn"
                        ontouchstart="AdventureMap.dpad('down',true);event.preventDefault()"
                        ontouchend="AdventureMap.dpad('down',false)"
                        onmousedown="AdventureMap.dpad('down',true)"
                        onmouseup="AdventureMap.dpad('down',false)"
                        onmouseleave="AdventureMap.dpad('down',false)">▼</button>
                </div>
            </div>

        </div>`;

        this._charEl  = document.getElementById('amap-char');
        this._interEl = document.getElementById('amap-interact');
        this._zoneEl  = document.getElementById('amap-zone-lbl');

        this._scrollToChar(true);
    },

    // ── GAME LOOP ─────────────────────────────────────────
    _loop() {
        if (!this.running) return;
        this._update();
        this.rafId = requestAnimationFrame(() => this._loop());
    },

    _update() {
        let dx = 0, dy = 0;
        const sp = this.world.speed;

        // Keyboard
        if (this.keys.up)    dy -= sp;
        if (this.keys.down)  dy += sp;
        if (this.keys.left)  dx -= sp;
        if (this.keys.right) dx += sp;

        // Mouse / touch target (only when no key held)
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
            }
        }

        // Apply & clamp
        if (dx !== 0 || dy !== 0) {
            this.world.charX = Math.max(24, Math.min(this.WORLD_W - 24, this.world.charX + dx));
            this.world.charY = Math.max(40, Math.min(this.WORLD_H - 40, this.world.charY + dy));

            if (this._charEl) {
                this._charEl.classList.add('walking');
                clearTimeout(this._walkTimer);
                this._walkTimer = setTimeout(() => this._charEl?.classList.remove('walking'), 200);
            }
        }

        // Update DOM
        if (this._charEl) {
            this._charEl.style.left = this.world.charX + 'px';
            this._charEl.style.top  = this.world.charY + 'px';
        }

        this._scrollToChar(false);
        this._checkNearStage();
        this._updateZoneLabel();
    },

    _scrollToChar(instant) {
        const viewport = document.getElementById('amap-viewport');
        if (!viewport) return;
        const viewH   = viewport.clientHeight || (window.innerHeight - 56);
        let   scrollY = this.world.charY - viewH / 2;
        scrollY = Math.max(0, Math.min(this.WORLD_H - viewH, scrollY));
        if (instant) {
            viewport.scrollTop = scrollY;
        } else {
            // Lerp scroll for smooth camera
            const diff = scrollY - viewport.scrollTop;
            if (Math.abs(diff) > 1) viewport.scrollTop += diff * 0.12;
        }
    },

    _checkNearStage() {
        const RADIUS = 68;
        let   nearest = -1, minDist = Infinity;

        for (let i = 0; i < this.stages.length; i++) {
            const s   = this.stages[i];
            const xPx = (s.xPct / 100) * this.WORLD_W;
            const dx  = this.world.charX - xPx;
            const dy  = this.world.charY - s.worldY;
            const d   = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS && d < minDist) { minDist = d; nearest = i; }
        }

        if (nearest === this.nearStageIdx) return;
        this.nearStageIdx = nearest;

        if (!this._interEl) return;
        if (nearest >= 0 && this.stages[nearest].unlocked) {
            this._interEl.classList.remove('hidden');
            const n = document.getElementById('amap-interact-name');
            if (n) n.textContent = this.stages[nearest].title;
        } else {
            this._interEl.classList.add('hidden');
        }
    },

    _updateZoneLabel() {
        if (!this._zoneEl) return;
        for (const z of this._zones) {
            if (this.world.charY >= z.top && this.world.charY < z.bottom) {
                if (this._zoneEl.textContent !== z.name) this._zoneEl.textContent = z.name;
                break;
            }
        }
    },

    // ── INTERACTIONS ──────────────────────────────────────
    interactWithNear() {
        if (this.nearStageIdx < 0) return;
        const s = this.stages[this.nearStageIdx];
        if (!s.unlocked) return;
        this._doExit();
        Router.navigate(`#stage/${this.chapterId}/${s.id}`);
    },

    _clickNode(idx) {
        const s = this.stages[idx];
        // Walk toward the node
        this.world.targetX = (s.xPct / 100) * this.WORLD_W;
        this.world.targetY = s.worldY;
    },

    // ── INPUT ─────────────────────────────────────────────
    _bindEvents() {
        this._boundKeyDown = (e) => this._onKeyDown(e);
        this._boundKeyUp   = (e) => this._onKeyUp(e);
        window.addEventListener('keydown', this._boundKeyDown);
        window.addEventListener('keyup',   this._boundKeyUp);

        const vp = document.getElementById('amap-viewport');
        if (vp) {
            this._boundClick = (e) => this._onViewportClick(e);
            this._boundTouch = (e) => this._onViewportTouch(e);
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
        // Ignore clicks on interactive elements
        if (e.target.closest('.amap-node,.amap-hud,.amap-interact,.amap-dpad,.btn-primary,.amap-back-btn')) return;
        const worldEl = document.getElementById('amap-world');
        if (!worldEl) return;
        const r = worldEl.getBoundingClientRect();
        this.world.targetX = e.clientX - r.left;
        this.world.targetY = e.clientY - r.top;
    },

    _onViewportTouch(e) {
        if (e.target.closest('.amap-node,.amap-hud,.amap-interact,.amap-dpad,.btn-primary,.amap-back-btn')) return;
        const t = e.changedTouches[0];
        if (!t) return;
        const worldEl = document.getElementById('amap-world');
        if (!worldEl) return;
        const r = worldEl.getBoundingClientRect();
        this.world.targetX = t.clientX - r.left;
        this.world.targetY = t.clientY - r.top;
    },

    dpad(dir, pressed) {
        this.keys[dir] = pressed;
        if (pressed) this.world.targetX = null;
    },

    // ── EXIT ──────────────────────────────────────────────
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
