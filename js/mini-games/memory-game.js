/**
 * MEMORY GAME — EduQuest Mini-Game
 * Card matching using stage flashcards (term ↔ definition)
 */

const MemoryGame = {
    state: {
        chapterId:  null,
        stageId:    null,
        stageIndex: null,
        cards:      [],
        flipped:    [],
        matched:    0,
        total:      0,
        canFlip:    true,
        score:      0
    },

    start(chapterId, stageId, stageIndex) {
        const stageData = window[stageId.toUpperCase()];
        if (!stageData) {
            Router.navigate(`#chapter/${chapterId}`);
            return;
        }

        const flashcards = stageData.summary?.flashcards || [];
        if (flashcards.length === 0) {
            ModalEngine.interrupt('simpleAlert', {
                icon:    '🃏',
                title:   'Sem flashcards',
                message: 'Este estágio ainda não tem flashcards para o Jogo de Memória.',
                onConfirm: () => Router.navigate(`#stage/${chapterId}/${stageId}`),
                onCancel:  () => Router.navigate(`#stage/${chapterId}/${stageId}`),
            });
            return;
        }

        this.state.chapterId  = chapterId;
        this.state.stageId    = stageId;
        this.state.stageIndex = stageIndex;

        const pairCount = Math.min(6, flashcards.length);
        const selected  = [...flashcards].sort(() => Math.random() - 0.5).slice(0, pairCount);

        const pairs = [];
        selected.forEach((fc, i) => {
            pairs.push({ pairId: i, type: 'term', content: fc.q, revealed: false, matched: false });
            pairs.push({ pairId: i, type: 'def',  content: fc.a, revealed: false, matched: false });
        });

        this.state.cards   = [...pairs].sort(() => Math.random() - 0.5).map((c, idx) => ({ ...c, idx }));
        this.state.flipped = [];
        this.state.matched = 0;
        this.state.total   = pairCount;
        this.state.canFlip = true;
        this.state.score   = 0;

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        this._render(stageData.title || stageData.id);
    },

    _render(title) {
        const app  = document.getElementById('app-container');
        const cols = this.state.total <= 3 ? 'cols-3' : 'cols-4';

        app.innerHTML = `
            <div class="memory-game" id="memory-game">
                <div class="memory-topbar">
                    <button class="btn-exit" onclick="MemoryGame.exit()">✕</button>
                    <div class="memory-title">🃏 ${title}</div>
                    <div class="memory-score-badge" id="mem-score">0/${this.state.total}</div>
                </div>
                <div class="memory-grid ${cols}" id="memory-grid">
                    ${this.state.cards.map(c => `
                        <div class="memory-card" id="mc-${c.idx}" onclick="MemoryGame.flip(${c.idx})">
                            <div class="memory-card-inner">
                                <div class="memory-card-back">🧠</div>
                                <div class="memory-card-front">
                                    ${c.type === 'term'
                                        ? `<span class="mc-term">${c.content}</span>`
                                        : `<span class="mc-def">${c.content}</span>`}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="memory-status-bar">
                    <div class="memory-pairs-text">Encontre ${this.state.total} pares iguais</div>
                    <button class="btn-secondary" style="width:auto;padding:7px 14px;font-size:0.78rem"
                            onclick="MemoryGame.exit()">Sair</button>
                </div>
            </div>`;
    },

    flip(idx) {
        if (!this.state.canFlip) return;
        const card = this.state.cards[idx];
        if (!card || card.matched || card.revealed) return;
        if (this.state.flipped.length >= 2) return;

        card.revealed = true;
        const el = document.getElementById(`mc-${idx}`);
        if (el) el.classList.add('flipped');
        if (typeof SoundManager !== 'undefined') SoundManager.play('click');

        this.state.flipped.push(idx);
        if (this.state.flipped.length === 2) {
            this.state.canFlip = false;
            setTimeout(() => this._checkMatch(), 750);
        }
    },

    _checkMatch() {
        const [a, b] = this.state.flipped;
        const ca = this.state.cards[a];
        const cb = this.state.cards[b];

        if (ca.pairId === cb.pairId) {
            ca.matched = cb.matched = true;
            ['mc-' + a, 'mc-' + b].forEach(id => {
                document.getElementById(id)?.classList.add('matched');
            });
            this.state.matched++;
            this.state.score += 10;

            const sc = document.getElementById('mem-score');
            if (sc) sc.textContent = `${this.state.matched}/${this.state.total}`;

            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');

            if (this.state.matched === this.state.total) {
                setTimeout(() => this._win(), 500);
            }
        } else {
            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
            ['mc-' + a, 'mc-' + b].forEach(id => document.getElementById(id)?.classList.add('mismatch'));
            this.state.flipped = [];
            setTimeout(() => {
                ['mc-' + a, 'mc-' + b].forEach(id => {
                    const el = document.getElementById(id);
                    el?.classList.remove('flipped', 'mismatch');
                });
                this.state.cards[a].revealed = false;
                this.state.cards[b].revealed = false;
                this.state.canFlip = true;
            }, 700);
            return;
        }

        this.state.flipped = [];
        this.state.canFlip = true;
    },

    _win() {
        const xp = this.state.score * 10;
        State.addXP(xp);
        if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
        if (typeof Utils !== 'undefined') Utils.confetti();

        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
        State.updateHUD();

        const app = document.getElementById('app-container');
        app.innerHTML = `
            <div class="result-screen">
                <div class="result-icon">🃏</div>
                <h1 class="result-title victory">MEMÓRIA PERFEITA!</h1>
                <p class="result-subtitle">Você combinou todos os ${this.state.total} pares!</p>
                <div class="result-stats">
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${xp} ⚡</span>
                        <span class="result-stat-label">XP Ganho</span>
                    </div>
                </div>
                <div class="result-actions">
                    <button class="btn-primary" onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                    <button class="btn-secondary" onclick="MemoryGame.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Jogar Novamente
                    </button>
                </div>
            </div>`;
    },

    exit() {
        ModalEngine.interrupt('missionExit', {
            context:   'memória',
            onConfirm: () => {
                document.getElementById('top-hud')?.classList.remove('hidden');
                document.getElementById('bottom-nav')?.classList.remove('hidden');
                Router.navigate(`#stage/${this.state.chapterId}/${this.state.stageId}`);
            },
        });
    }
};

window.MemoryGame = MemoryGame;
