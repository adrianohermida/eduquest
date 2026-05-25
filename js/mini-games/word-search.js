/**
 * EDUQUEST WORD SEARCH MINI-GAME
 * 10x10 grid · vocabulary from chapter · two-tap selection · 2-min timer
 */

const WordSearch = {
    _state: null,

    DEFAULT_WORDS: ['VIRUS', 'FUNGO', 'VACINA', 'IMUNE', 'FEBRE', 'DENGUE', 'BACTERIA', 'DOENCA'],

    _ic(id, o) { return typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : ''; },

    start(chapterId, stageIndex, container) {
        const words = this._getWords(chapterId);
        this._state = {
            chapterId,
            stageIndex,
            container,
            words,
            grid:         [],
            placed:       [],   // { word, cells: [{r,c}] }
            found:        new Set(),
            anchor:        null,
            timeLeft:     120,
            timerInterval: null,
            startTime:    Date.now(),
        };

        this._buildGrid(words);
        this._render(container);
        this._startTimer();
    },

    _getWords(chapterId) {
        // Try to pull from chapter vocabulary (mnemonics list)
        const meta = window.CHAPTER_METADATA;
        if (meta?.id === chapterId) {
            const stages = Object.keys(window).filter(k => k.startsWith('STAGE_'));
            const collected = new Set();
            for (const key of stages) {
                const s = window[key];
                if (s?.mnemonics) {
                    for (const m of s.mnemonics) {
                        const w = (typeof m === 'string' ? m : m.word || '').toUpperCase().replace(/\s/g, '');
                        if (w.length >= 4 && w.length <= 10) collected.add(w);
                    }
                }
            }
            if (collected.size >= 4) return [...collected].slice(0, 8);
        }
        return this.DEFAULT_WORDS;
    },

    // ── GRID BUILDER ───────────────────────────────────────
    _buildGrid(words) {
        const SIZE  = 10;
        const grid  = Array.from({ length: SIZE }, () => Array(SIZE).fill(''));
        const placed = [];

        const directions = [
            [0, 1],  // right
            [1, 0],  // down
            [1, 1],  // diagonal down-right
        ];

        const shuffle = arr => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        };

        const tryPlace = word => {
            const dirs = shuffle([...directions]);
            for (let attempt = 0; attempt < 60; attempt++) {
                const [dr, dc] = dirs[attempt % dirs.length];
                const r = Math.floor(Math.random() * SIZE);
                const c = Math.floor(Math.random() * SIZE);
                const cells = [];
                let ok = true;
                for (let i = 0; i < word.length; i++) {
                    const nr = r + dr * i;
                    const nc = c + dc * i;
                    if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) { ok = false; break; }
                    if (grid[nr][nc] !== '' && grid[nr][nc] !== word[i]) { ok = false; break; }
                    cells.push({ r: nr, c: nc });
                }
                if (ok) {
                    for (let i = 0; i < word.length; i++) grid[cells[i].r][cells[i].c] = word[i];
                    placed.push({ word, cells });
                    return true;
                }
            }
            return false;
        };

        const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (const word of words) tryPlace(word);

        // Fill blanks
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                if (!grid[r][c]) grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
            }
        }

        this._state.grid   = grid;
        this._state.placed = placed;
    },

    // ── RENDER ─────────────────────────────────────────────
    _render(container) {
        const { grid, placed, found, timeLeft, stageIndex, chapterId } = this._state;
        const SIZE = 10;

        const cellsHTML = grid.map((row, r) =>
            row.map((letter, c) =>
                `<div class="ws-cell" data-r="${r}" data-c="${c}" onclick="WordSearch._tap(${r},${c})">${letter}</div>`
            ).join('')
        ).join('');

        const wordsHTML = placed.map(p => `
            <div class="ws-word ${found.has(p.word) ? 'ws-word-found' : ''}">${p.word}</div>
        `).join('');

        const mins  = Math.floor(timeLeft / 60);
        const secs  = String(timeLeft % 60).padStart(2, '0');

        container.innerHTML = `
        <div class="ws-wrap">
            <div class="ws-header">
                <button class="ws-back-btn" onclick="Router.navigate('#chapter/${chapterId}')">‹ Mapa</button>
                <div class="ws-title">${this._ic('compass',{size:'sm'})} Caça-Palavras</div>
                <div class="ws-timer ${timeLeft <= 30 ? 'ws-timer-urgent' : ''}" id="ws-timer">${mins}:${secs}</div>
            </div>
            <div class="ws-grid" id="ws-grid">${cellsHTML}</div>
            <div class="ws-word-list">${wordsHTML}</div>
        </div>`;
    },

    _rerenderGrid() {
        const { grid, found, placed, anchor } = this._state;
        const gridEl = document.getElementById('ws-grid');
        if (!gridEl) return;

        // Collect anchor + found cells
        const foundCells = new Set();
        for (const p of placed) {
            if (found.has(p.word)) p.cells.forEach(({ r, c }) => foundCells.add(`${r},${c}`));
        }

        gridEl.querySelectorAll('.ws-cell').forEach(cell => {
            const r = parseInt(cell.dataset.r);
            const c = parseInt(cell.dataset.c);
            const key = `${r},${c}`;
            cell.className = 'ws-cell';
            if (foundCells.has(key))              cell.classList.add('ws-cell-found');
            if (anchor && anchor.r === r && anchor.c === c) cell.classList.add('ws-cell-anchor');
        });
    },

    _rerenderWords() {
        const { placed, found } = this._state;
        document.querySelectorAll('.ws-word').forEach((el, i) => {
            if (found.has(placed[i]?.word)) el.classList.add('ws-word-found');
        });
    },

    // ── INTERACTION ────────────────────────────────────────
    _tap(r, c) {
        const s = this._state;
        if (!s.anchor) {
            s.anchor = { r, c };
            this._rerenderGrid();
            return;
        }

        const ar = s.anchor.r;
        const ac = s.anchor.c;

        // Determine direction
        const dr = Math.sign(r - ar);
        const dc = Math.sign(c - ac);
        const len = Math.max(Math.abs(r - ar), Math.abs(c - ac)) + 1;

        // Must be straight line (horizontal, vertical, or diagonal)
        const straightH  = r === ar;
        const straightV  = c === ac;
        const straightD  = Math.abs(r - ar) === Math.abs(c - ac);
        if (!straightH && !straightV && !straightD) {
            // Reset anchor to new cell
            s.anchor = { r, c };
            this._rerenderGrid();
            return;
        }

        const cells = [];
        for (let i = 0; i < len; i++) cells.push({ r: ar + dr * i, c: ac + dc * i });
        const selected = cells.map(({ r, c }) => s.grid[r][c]).join('');

        // Check forward and reverse
        const match = s.placed.find(p => p.word === selected || p.word === selected.split('').reverse().join(''));
        if (match && !s.found.has(match.word)) {
            s.found.add(match.word);
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
        }

        s.anchor = null;
        this._rerenderGrid();
        this._rerenderWords();

        if (s.found.size === s.placed.length) this._win();
    },

    // ── TIMER ──────────────────────────────────────────────
    _startTimer() {
        this._state.timerInterval = setInterval(() => {
            if (!this._state) return;
            this._state.timeLeft--;
            const timerEl = document.getElementById('ws-timer');
            if (timerEl) {
                const t    = this._state.timeLeft;
                const mins = Math.floor(t / 60);
                const secs = String(t % 60).padStart(2, '0');
                timerEl.textContent = `${mins}:${secs}`;
                if (t <= 30) timerEl.classList.add('ws-timer-urgent');
            }
            if (this._state.timeLeft <= 0) this._timeout();
        }, 1000);
    },

    _stopTimer() {
        clearInterval(this._state?.timerInterval);
    },

    // ── END STATES ─────────────────────────────────────────
    _win() {
        this._stopTimer();
        const elapsed = Math.floor((Date.now() - this._state.startTime) / 1000);
        const stars   = elapsed < 60 ? 3 : elapsed < 100 ? 2 : 1;
        const { chapterId, stageIndex } = this._state;

        State.completeStage(chapterId, `wordsearch_${stageIndex}`, stars);
        State.addXP(50 + stars * 20);
        State.addGems(stars);

        const gridEl = document.getElementById('ws-grid');
        if (gridEl) gridEl.style.pointerEvents = 'none';

        // Overlay result
        const wrap = document.querySelector('.ws-wrap');
        if (!wrap) return;

        const starsHTML = [1,2,3].map(s =>
            `<span style="color:${s<=stars?'var(--gold)':'var(--border)'};font-size:1.5rem">${s<=stars?'★':'☆'}</span>`
        ).join('');

        const overlay = document.createElement('div');
        overlay.className = 'ws-result-overlay';
        overlay.innerHTML = `
            <div class="ws-result-card">
                <div class="ws-result-icon">${this._ic('achievement',{size:'xl',color:'final'})}</div>
                <h2 class="ws-result-title">Caça-palavras completo!</h2>
                <div class="ws-result-stars">${starsHTML}</div>
                <p class="ws-result-sub">Tempo: ${Math.floor(elapsed/60)}m${String(elapsed%60).padStart(2,'0')}s</p>
                <button class="btn-primary" onclick="Router.navigate('#chapter/${chapterId}')">${this._ic('check',{size:'sm'})} Continuar</button>
            </div>`;
        wrap.appendChild(overlay);
        if (typeof Utils !== 'undefined') Utils.confetti();
    },

    _timeout() {
        this._stopTimer();
        const { chapterId, placed, found } = this._state;

        const wrap = document.querySelector('.ws-wrap');
        if (!wrap) return;

        const overlay = document.createElement('div');
        overlay.className = 'ws-result-overlay';
        overlay.innerHTML = `
            <div class="ws-result-card">
                <div class="ws-result-icon">${this._ic('warning',{size:'xl',color:'rpg'})}</div>
                <h2 class="ws-result-title">Tempo esgotado!</h2>
                <p class="ws-result-sub">${found.size}/${placed.length} palavras encontradas</p>
                <button class="btn-primary" onclick="WordSearch.start('${chapterId}', ${this._state.stageIndex}, document.getElementById('app-container'))">${this._ic('xp',{size:'sm'})} Tentar novamente</button>
                <button class="btn-secondary" style="margin-top:8px" onclick="Router.navigate('#chapter/${chapterId}')">Voltar</button>
            </div>`;
        wrap.appendChild(overlay);
    },
};

window.WordSearch = WordSearch;
