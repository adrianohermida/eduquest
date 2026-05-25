/**
 * JOGO DA FORCA — EduQuest Mini-Game
 * Hangman using stage terms from mnemonics / content titles
 */

const Forca = {
    FIGURES: ['🧍', '🤕', '😰', '😱', '💀💀', '💀💀💀'],

    state: {
        chapterId:   null,
        stageId:     null,
        stageIndex:  null,
        wordOrig:    '',
        wordNorm:    '',
        hint:        '',
        guessed:     null,
        wrong:       0,
        maxWrong:    6
    },

    _norm: s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z ]/g, ''),

    _getWordList(stageData) {
        const words = [];
        // From mnemonics triggers (prefer short single words)
        (stageData.summary?.mnemonics || []).forEach(m => {
            const w = (m.trigger || '').trim();
            if (w.length >= 4 && w.split(' ').length <= 2) {
                words.push({ word: w, hint: '💡 Conceito do estágio' });
            }
        });
        // From content titles (single-word preferred)
        (stageData.summary?.content || []).forEach(c => {
            const t = (c.title || '').trim();
            const parts = t.split(' ');
            if (parts.length <= 3 && t.length >= 4) {
                words.push({ word: t, hint: `${c.icon || '📖'} Tema: ${t}` });
            }
        });
        // Fallback: stage title words
        const titleParts = (stageData.title || 'DOENÇA').split(' ');
        titleParts.forEach(w => {
            const clean = w.replace(/[^A-Za-zÀ-ú]/g, '');
            if (clean.length >= 5) words.push({ word: clean, hint: '⚡ Palavra do título' });
        });
        return words.length > 0 ? words : [{ word: stageData.title || 'IMUNIDADE', hint: '⚡ Tema principal' }];
    },

    start(chapterId, stageId, stageIndex) {
        const stageData = window[stageId.toUpperCase()];
        if (!stageData) { Router.navigate(`#chapter/${chapterId}`); return; }

        this.state.chapterId  = chapterId;
        this.state.stageId    = stageId;
        this.state.stageIndex = stageIndex;

        const wordList = this._getWordList(stageData);
        const chosen   = wordList[Math.floor(Math.random() * wordList.length)];

        this.state.wordOrig = chosen.word.toUpperCase();
        this.state.wordNorm = this._norm(chosen.word);
        this.state.hint     = chosen.hint;
        this.state.guessed  = new Set();
        this.state.wrong    = 0;

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        this._render(stageData.title || stageData.id);
    },

    _render(stageTitle) {
        const app = document.getElementById('app-container');

        app.innerHTML = `
            <div class="forca-game" id="forca-game">
                <div class="forca-topbar">
                    <button class="btn-exit" onclick="Forca.exit()">✕</button>
                    <div class="forca-title">🔤 Forca · ${stageTitle}</div>
                    <div class="forca-lives-row" id="forca-lives">
                        ${'❤️'.repeat(this.state.maxWrong)}
                    </div>
                </div>
                <div class="forca-body">
                    <div class="forca-figure" id="forca-fig">${this.FIGURES[0]}</div>
                    <div class="forca-hint" id="forca-hint">💡 ${this.state.hint}</div>
                    <div class="forca-word" id="forca-word">${this._renderWord()}</div>
                </div>
                <div class="forca-keyboard" id="forca-kb">
                    ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => `
                        <button class="forca-key" id="fk-${l}" onclick="Forca.guess('${l}')">${l}</button>
                    `).join('')}
                </div>
            </div>`;
    },

    _renderWord() {
        const orig = this.state.wordOrig;
        const norm = this.state.wordNorm;
        let html = '';
        for (let i = 0; i < orig.length; i++) {
            const ch     = orig[i];
            const chNorm = norm[i] || '';
            if (ch === ' ') {
                html += '<div class="forca-space"></div>';
            } else {
                const shown = this.state.guessed.has(chNorm) || this.state.wrong >= this.state.maxWrong;
                html += `
                    <div class="forca-letter-slot">
                        <div class="forca-letter-char${shown ? ' revealed' : ''}">${shown ? ch : ' '}</div>
                        <div class="forca-letter-line"></div>
                    </div>`;
            }
        }
        return html;
    },

    guess(letter) {
        if (this.state.guessed.has(letter)) return;
        this.state.guessed.add(letter);

        const btn  = document.getElementById(`fk-${letter}`);
        const inWord = this.state.wordNorm.includes(letter);

        if (inWord) {
            if (btn) { btn.classList.add('correct-key'); btn.disabled = true; }
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
        } else {
            this.state.wrong++;
            if (btn) { btn.classList.add('wrong-key'); btn.disabled = true; }
            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
        }

        // Update word display
        const wordEl = document.getElementById('forca-word');
        if (wordEl) wordEl.innerHTML = this._renderWord();

        // Update figure
        const figEl = document.getElementById('forca-fig');
        if (figEl) figEl.textContent = this.FIGURES[Math.min(this.state.wrong, this.FIGURES.length - 1)];

        // Update lives
        const livesEl = document.getElementById('forca-lives');
        if (livesEl) {
            const rem = this.state.maxWrong - this.state.wrong;
            livesEl.innerHTML = '❤️'.repeat(Math.max(0, rem)) + '🖤'.repeat(Math.max(0, this.state.wrong));
        }

        // Check win: all non-space letters revealed
        const normChars = this.state.wordNorm.replace(/ /g, '').split('');
        const allRevealed = normChars.every(c => this.state.guessed.has(c));

        if (allRevealed) {
            setTimeout(() => this._win(), 400);
        } else if (this.state.wrong >= this.state.maxWrong) {
            // Reveal word then show lose
            const wordEl2 = document.getElementById('forca-word');
            if (wordEl2) wordEl2.innerHTML = this._renderWord();
            setTimeout(() => this._lose(), 800);
        }
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
