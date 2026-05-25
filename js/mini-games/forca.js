/**
 * JOGO DA FORCA — EduQuest Mini-Game v2.0
 * Visual stages · QWERTY keyboard · Hint system
 */

const Forca = {

    FIGURE_STAGES: [
        { body: '',      face: '',    legs: '' },
        { body: '',      face: '😐',  legs: '' },
        { body: '│',     face: '😰',  legs: '' },
        { body: '╠══',   face: '😰',  legs: '' },
        { body: '╠══╣',  face: '😱',  legs: '' },
        { body: '╠══╣',  face: '😱',  legs: '╱' },
        { body: '╠══╣',  face: '💀',  legs: '╱ ╲' },
    ],

    KEYBOARD_ROWS: ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'],

    state: {
        chapterId:   null,
        stageId:     null,
        stageIndex:  null,
        wordOrig:    '',
        wordNorm:    '',
        hints:       [],
        hintIdx:     0,
        guessed:     null,
        wrong:       0,
        maxWrong:    6,
        gameOver:    false
    },

    _norm: s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z ]/g, ''),

    _getWordList(stageData) {
        const words = [];
        (stageData.summary?.mnemonics || []).forEach(m => {
            const w = (m.trigger || '').trim();
            if (w.length >= 4 && w.split(' ').length <= 2)
                words.push({ word: w, hints: ['💡 Conceito do estágio', `Tem ${w.length} letras`] });
        });
        (stageData.summary?.content || []).forEach(c => {
            const t = (c.title || '').trim();
            if (t.split(' ').length <= 3 && t.length >= 4)
                words.push({ word: t, hints: [`${c.icon || '📖'} ${c.title}`, `${t.length} letras no total`] });
        });
        const titleParts = (stageData.title || 'DOENÇA').split(' ');
        titleParts.forEach(w => {
            const clean = w.replace(/[^A-Za-zÀ-ú]/g, '');
            if (clean.length >= 5)
                words.push({ word: clean, hints: ['⚡ Palavra do título da fase', `Tem ${clean.length} letras`] });
        });
        return words.length > 0 ? words : [{ word: stageData.title || 'IMUNIDADE', hints: ['⚡ Tema principal'] }];
    },

    start(chapterId, stageId, stageIndex) {
        const stageData = window[stageId.toUpperCase()];
        if (!stageData) { Router.navigate(`#chapter/${chapterId}`); return; }

        const wordList = this._getWordList(stageData);
        const chosen   = wordList[Math.floor(Math.random() * wordList.length)];

        Object.assign(this.state, {
            chapterId, stageId, stageIndex,
            wordOrig: chosen.word.toUpperCase(),
            wordNorm: this._norm(chosen.word),
            hints:    chosen.hints || ['💡 Boa sorte!'],
            hintIdx:  0,
            guessed:  new Set(),
            wrong:    0,
            gameOver: false
        });

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        this._render(stageData.title || stageData.id);
    },

    _render(stageTitle) {
        const app = document.getElementById('app-container');

        const kbHTML = this.KEYBOARD_ROWS.map(row => `
            <div class="forca-kb-row">
                ${row.split('').map(l => `
                    <button class="forca-key" id="fk-${l}" onclick="Forca.guess('${l}')">${l}</button>
                `).join('')}
            </div>`).join('');

        app.innerHTML = `
            <div class="forca-game" id="forca-game">
                <div class="forca-topbar">
                    <button class="btn-exit" onclick="Forca.exit()">✕</button>
                    <div class="forca-title">🔤 ${stageTitle}</div>
                    <button class="forca-hint-btn" id="forca-hint-btn" onclick="Forca.useHint()">
                        💡 Dica
                    </button>
                </div>

                <div class="forca-main">
                    <div class="forca-gallows-wrap">
                        <div class="forca-gallows">
                            <div class="gallows-beam"></div>
                            <div class="gallows-rope"></div>
                            <div class="forca-figure" id="forca-figure">
                                <div class="figure-face" id="figure-face"></div>
                                <div class="figure-body" id="figure-body"></div>
                                <div class="figure-legs" id="figure-legs"></div>
                            </div>
                        </div>
                        <div class="forca-wrong-count" id="forca-wrong">
                            <span id="forca-wrong-hearts">${'❤️'.repeat(this.state.maxWrong)}</span>
                        </div>
                    </div>

                    <div class="forca-right">
                        <div class="forca-hint-banner" id="forca-hint-banner">
                            ${this.state.hints[0] || ''}
                        </div>
                        <div class="forca-word" id="forca-word">${this._renderWord()}</div>
                        <div class="forca-wrong-letters" id="forca-wrong-letters"></div>
                    </div>
                </div>

                <div class="forca-keyboard" id="forca-kb">${kbHTML}</div>
            </div>`;
    },

    _renderWord() {
        const orig = this.state.wordOrig;
        const norm = this.state.wordNorm;
        let html = '<div class="forca-word-inner">';
        for (let i = 0; i < orig.length; i++) {
            const ch = orig[i];
            if (ch === ' ') {
                html += '<div class="forca-space"></div>';
            } else {
                const shown = this.state.guessed.has(norm[i] || '') || this.state.gameOver;
                html += `<div class="forca-letter-slot">
                    <div class="forca-letter-char${shown ? ' revealed' : ''}">${shown ? ch : ''}</div>
                    <div class="forca-letter-line"></div>
                </div>`;
            }
        }
        return html + '</div>';
    },

    _updateFigure() {
        const stage = this.FIGURE_STAGES[Math.min(this.state.wrong, this.FIGURE_STAGES.length - 1)];
        const face  = document.getElementById('figure-face');
        const body  = document.getElementById('figure-body');
        const legs  = document.getElementById('figure-legs');
        if (face) face.textContent = stage.face;
        if (body) body.textContent = stage.body;
        if (legs) legs.textContent = stage.legs;
    },

    guess(letter) {
        if (this.state.gameOver || this.state.guessed.has(letter)) return;
        this.state.guessed.add(letter);

        const btn    = document.getElementById(`fk-${letter}`);
        const inWord = this.state.wordNorm.includes(letter);

        if (inWord) {
            btn?.classList.add('correct-key');
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
        } else {
            this.state.wrong++;
            btn?.classList.add('wrong-key');
            this._updateFigure();
            this._updateWrongHearts();
            this._updateWrongLetters();
            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
        }
        if (btn) btn.disabled = true;

        const wordEl = document.getElementById('forca-word');
        if (wordEl) wordEl.innerHTML = this._renderWord();

        const normChars  = this.state.wordNorm.replace(/ /g, '').split('');
        const allRevealed = normChars.every(c => this.state.guessed.has(c));

        if (allRevealed) {
            this.state.gameOver = true;
            setTimeout(() => this._win(), 500);
        } else if (this.state.wrong >= this.state.maxWrong) {
            this.state.gameOver = true;
            const wordEl2 = document.getElementById('forca-word');
            if (wordEl2) wordEl2.innerHTML = this._renderWord();
            setTimeout(() => this._lose(), 800);
        }
    },

    _updateWrongHearts() {
        const el  = document.getElementById('forca-wrong-hearts');
        if (!el) return;
        const rem = this.state.maxWrong - this.state.wrong;
        el.innerHTML = '❤️'.repeat(Math.max(0, rem)) + '🖤'.repeat(Math.max(0, this.state.wrong));
    },

    _updateWrongLetters() {
        const el = document.getElementById('forca-wrong-letters');
        if (!el) return;
        const wrong = [...this.state.guessed].filter(l => !this.state.wordNorm.includes(l));
        el.textContent = wrong.length ? `Erradas: ${wrong.join(' ')}` : '';
    },

    useHint() {
        const idx  = this.state.hintIdx;
        const next = idx + 1;
        const hint = this.state.hints[next] || this.state.hints[this.state.hints.length - 1];
        this.state.hintIdx = Math.min(next, this.state.hints.length - 1);

        const banner = document.getElementById('forca-hint-banner');
        if (banner) {
            banner.textContent = hint;
            banner.classList.add('hint-pop');
            setTimeout(() => banner.classList.remove('hint-pop'), 400);
        }

        const btn = document.getElementById('forca-hint-btn');
        if (btn && this.state.hintIdx >= this.state.hints.length - 1) {
            btn.disabled = true;
            btn.textContent = '💡 Sem mais dicas';
        }
        if (typeof SoundManager !== 'undefined') SoundManager.play('click');
    },

    _win() {
        const xp = 50 + (this.state.maxWrong - this.state.wrong) * 10;
        State.addXP(xp);
        if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
        if (typeof Utils !== 'undefined') Utils.confetti();
        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
        State.updateHUD();

        document.getElementById('app-container').innerHTML = `
            <div class="result-screen">
                <div class="result-icon">🎉</div>
                <h1 class="result-title victory">ACERTOU!</h1>
                <p class="result-subtitle">A palavra era: <strong>${this.state.wordOrig}</strong></p>
                <div class="result-stats">
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${xp} ⚡</span>
                        <span class="result-stat-label">XP Ganho</span>
                    </div>
                    <div class="result-stat-box">
                        <span class="result-stat-value">${this.state.maxWrong - this.state.wrong}</span>
                        <span class="result-stat-label">Vidas restantes</span>
                    </div>
                </div>
                <div class="result-actions">
                    <button class="btn-primary" onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                    <button class="btn-secondary" onclick="Forca.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Nova Palavra
                    </button>
                </div>
            </div>`;
    },

    _lose() {
        if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');

        document.getElementById('app-container').innerHTML = `
            <div class="result-screen">
                <div class="result-icon">💀</div>
                <h1 class="result-title defeat">GAME OVER</h1>
                <p class="result-subtitle">A palavra era: <strong>${this.state.wordOrig}</strong></p>
                <div class="result-actions">
                    <button class="btn-primary" onclick="Forca.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Tentar Novamente
                    </button>
                    <button class="btn-secondary" onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                </div>
            </div>`;
    },

    exit() {
        if (confirm('Sair do jogo da forca?')) {
            document.getElementById('top-hud')?.classList.remove('hidden');
            document.getElementById('bottom-nav')?.classList.remove('hidden');
            Router.navigate(`#stage/${this.state.chapterId}/${this.state.stageId}`);
        }
    }
};

window.Forca = Forca;
