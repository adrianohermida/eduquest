/**
 * EDUQUEST GAME ENGINE v2.0
 * Motor de quiz com feedback visual, timer, vidas e sistema de pontuação
 */

const GameEngine = {
    state: {
        chapterId:    null,
        stageId:      null,
        stageIndex:   null,
        stageData:    null,
        questions:    [],
        currentIndex: 0,
        score:        0,
        lives:        3,
        timer:        15,
        timerInterval:null,
        isPlaying:    false,
        combo:        0,
        pendingFeedback: false
    },

    start(chapterId, stageId, stageIndex) {
        const stageVarName = stageId.toUpperCase();
        const stageData    = window[stageVarName];

        if (!stageData) {
            console.error(`GameEngine: ${stageVarName} não encontrado.`);
            Router.navigate(`#chapter/${chapterId}`);
            return;
        }

        this.state.chapterId  = chapterId;
        this.state.stageId    = stageId;
        this.state.stageIndex = parseInt(stageIndex) || 1;
        this.state.stageData  = stageData;
        this.state.questions  = this._loadQuestions(stageData);
        this.state.currentIndex = 0;
        this.state.score      = 0;
        this.state.lives      = CONFIG.lives.gameHearts || 3;
        this.state.combo      = 0;
        this.state.isPlaying  = true;
        this.state.pendingFeedback = false;

        this._renderArena();
        this._startTimer();
    },

    _loadQuestions(stageData) {
        let questions = [];

        if (stageData.questions && stageData.questions.length > 0) {
            questions = stageData.questions.map(q => this._normalizeQuestion(q));
        }

        if (questions.length === 0) {
            const bank = window.QUESTIONS_BANK || [];
            questions = bank.map(q => this._normalizeQuestion(q));
        }

        // Shuffle and limit
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, CONFIG.stages.questionsPerGame || 10);
    },

    _normalizeQuestion(q) {
        // Handle both question formats:
        // Format A (stage files): { prompt, options: [{text, correct}], explanation }
        // Format B (questions bank): { question, options: [string], correct: index, explanation }
        if (Array.isArray(q.options) && typeof q.options[0] === 'object') {
            // Format A
            return {
                question:     q.prompt || q.question || 'Questão',
                options:      q.options.map(o => o.text || String(o)),
                correctIndex: q.options.findIndex(o => o.correct === true),
                explanation:  q.explanation || ''
            };
        } else {
            // Format B
            return {
                question:     q.question || q.prompt || 'Questão',
                options:      q.options || [],
                correctIndex: typeof q.correct === 'number' ? q.correct : (q.correctIndex || 0),
                explanation:  q.explanation || ''
            };
        }
    },

    _startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timer = CONFIG.stages.timePerQuestion || 15;
        this._updateTimerUI();

        this.state.timerInterval = setInterval(() => {
            if (this.state.pendingFeedback) return;
            this.state.timer--;
            this._updateTimerUI();
            if (this.state.timer <= 0) {
                clearInterval(this.state.timerInterval);
                this.handleAnswer(-1);
            }
        }, 1000);
    },

    _stopTimer() {
        clearInterval(this.state.timerInterval);
    },

    _updateTimerUI() {
        const el = document.getElementById('game-timer');
        if (!el) return;
        el.textContent = `⏱ ${this.state.timer}s`;
        el.classList.toggle('urgent', this.state.timer <= 5);
    },

    _renderArena() {
        // Oculta HUD e nav para tela cheia do jogo
        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        const app = document.getElementById('app-container');
        app.innerHTML = `
            <div class="game-arena" id="game-arena">
                <div class="game-header">
                    <button class="btn-exit" onclick="GameEngine.exit()" title="Sair">✕</button>
                    <div class="game-progress-track">
                        <div class="game-progress-fill" id="game-progress" style="width:0%"></div>
                    </div>
                    <div class="game-lives" id="game-lives">❤️❤️❤️</div>
                    <div class="game-timer" id="game-timer">⏱ 15s</div>
                </div>

                <div class="question-container" id="question-container"></div>

                <div class="feedback-overlay" id="feedback-overlay"></div>
            </div>`;

        this._loadQuestion();
    },

    _loadQuestion() {
        if (this.state.currentIndex >= this.state.questions.length) {
            this._endGame(true);
            return;
        }

        this.state.pendingFeedback = false;
        this.state.isPlaying = true;

        const q         = this.state.questions[this.state.currentIndex];
        const container = document.getElementById('question-container');
        const letters   = ['A', 'B', 'C', 'D'];

        // Reset and restart timer
        this.state.timer = CONFIG.stages.timePerQuestion || 15;
        this._updateTimerUI();
        this._startTimer();

        // Update progress bar
        const pct = (this.state.currentIndex / this.state.questions.length) * 100;
        const progressEl = document.getElementById('game-progress');
        if (progressEl) progressEl.style.width = `${pct}%`;

        // Update lives
        this._updateLivesUI();

        container.innerHTML = `
            <div class="question-counter">Questão ${this.state.currentIndex + 1} / ${this.state.questions.length}</div>
            <div class="question-card">
                <div class="question-text">${q.question}</div>
            </div>
            <div class="options-grid" id="options-grid">
                ${q.options.map((opt, idx) => `
                    <button class="option-btn" id="opt-${idx}" onclick="GameEngine.handleAnswer(${idx})">
                        <span class="option-letter">${letters[idx] || idx + 1}</span>
                        ${opt}
                    </button>
                `).join('')}
            </div>`;
    },

    _updateLivesUI() {
        const el = document.getElementById('game-lives');
        if (!el) return;
        const max    = CONFIG.lives.gameHearts || 3;
        const alive  = this.state.lives;
        el.innerHTML = '❤️'.repeat(Math.max(0, alive)) + '🖤'.repeat(Math.max(0, max - alive));
    },

    handleAnswer(selectedIndex) {
        if (!this.state.isPlaying || this.state.pendingFeedback) return;

        this._stopTimer();
        this.state.isPlaying      = false;
        this.state.pendingFeedback = true;

        const q         = this.state.questions[this.state.currentIndex];
        const isCorrect = selectedIndex === q.correctIndex;
        const buttons   = document.querySelectorAll('.option-btn');

        // Desabilita todos os botões
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            this.state.combo++;
            const timeBonusMax  = CONFIG.xp.timeBonusMax || 75;
            const comboBonus    = CONFIG.xp.comboBonus * this.state.combo;
            const timeBonus     = Math.floor((this.state.timer / 15) * timeBonusMax);
            const points        = CONFIG.xp.correct + comboBonus + timeBonus;
            this.state.score   += points;

            const btn = document.getElementById(`opt-${selectedIndex}`);
            if (btn) {
                btn.classList.add('correct');
                this._showXPFloat(points, btn);
            }

            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
            this._updateCombo();
            this._showFeedback(true, q.explanation, points);
        } else {
            this.state.combo = 0;
            this._removeCombo();
            this.state.lives--;
            this._updateLivesUI();

            if (selectedIndex !== -1) {
                const wrongBtn = document.getElementById(`opt-${selectedIndex}`);
                if (wrongBtn) wrongBtn.classList.add('wrong');
            }
            const correctBtn = document.getElementById(`opt-${q.correctIndex}`);
            if (correctBtn) correctBtn.classList.add('correct');

            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
            this._showFeedback(false, q.explanation, 0);

            const arena = document.getElementById('game-arena');
            if (arena) {
                arena.classList.add('shake');
                setTimeout(() => arena.classList.remove('shake'), 500);
            }
            if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
        }
    },

    _showFeedback(isCorrect, explanation, points) {
        const overlay = document.getElementById('feedback-overlay');
        if (!overlay) {
            this._nextQuestion(isCorrect);
            return;
        }

        const icon  = isCorrect ? '✅' : '❌';
        const label = isCorrect ? `Correto! +${points} pts` : 'Incorreto!';

        overlay.className = `feedback-overlay show ${isCorrect ? 'success-fb' : 'error-fb'}`;
        overlay.innerHTML = `
            <div class="feedback-icon">${icon}</div>
            <div class="feedback-body feedback-${isCorrect ? 'success' : 'error'}">
                <div class="feedback-label">${label}</div>
                ${explanation ? `<div class="feedback-explanation">${explanation}</div>` : ''}
            </div>
            <button class="feedback-continue" onclick="GameEngine._dismissFeedback()">
                ${this.state.lives <= 0 ? 'Ver resultado' : 'Continuar'}
            </button>`;
    },

    _dismissFeedback() {
        const overlay = document.getElementById('feedback-overlay');
        if (overlay) {
            overlay.className = 'feedback-overlay';
            overlay.innerHTML = '';
        }

        const isAlive = this.state.lives > 0;
        if (!isAlive) {
            this._endGame(false);
            return;
        }

        this.state.currentIndex++;
        this._loadQuestion();
    },

    _showXPFloat(points, anchorEl) {
        const float = document.createElement('div');
        float.className = 'xp-float';
        float.textContent = `+${points} ⚡`;
        if (anchorEl) {
            const r = anchorEl.getBoundingClientRect();
            float.style.left = `${r.left + r.width / 2 - 30}px`;
            float.style.top  = `${r.top - 10}px`;
        } else {
            float.style.left = '50%';
            float.style.top  = '40%';
        }
        document.body.appendChild(float);
        setTimeout(() => float.remove(), 1300);
    },

    _updateCombo() {
        this._removeCombo();
        if (this.state.combo < 2) return;
        const badge = document.createElement('div');
        badge.className = 'combo-badge';
        badge.id = 'combo-badge';
        badge.textContent = `🔥 ${this.state.combo}x Combo!`;
        document.body.appendChild(badge);
    },

    _removeCombo() {
        document.getElementById('combo-badge')?.remove();
    },

    _nextQuestion(isCorrect) {
        if (!isCorrect && this.state.lives <= 0) {
            setTimeout(() => this._endGame(false), 1200);
            return;
        }
        setTimeout(() => {
            this.state.currentIndex++;
            this._loadQuestion();
        }, isCorrect ? 800 : 1500);
    },

    _endGame(victory) {
        this._stopTimer();

        const stars = victory
            ? (this.state.lives === 3 ? 3 : this.state.lives === 2 ? 2 : 1)
            : 0;

        if (victory) {
            State.completeStage(this.state.chapterId, this.state.stageIndex, stars);
            const xpGain  = this.state.score + CONFIG.xp.stageComplete;
            const gemGain = CONFIG.gems.stageComplete + (stars === 3 ? CONFIG.gems.perfect : 0);
            State.addXP(xpGain);
            State.addGems(gemGain);
        }

        const starsDisplay = victory
            ? ['⭐', '⭐⭐', '⭐⭐⭐'][stars - 1] || ''
            : '💀';

        const app = document.getElementById('app-container');
        app.innerHTML = `
            <div class="result-screen">
                <div class="result-icon">${victory ? '🏆' : '💀'}</div>
                <h1 class="result-title ${victory ? 'victory' : 'defeat'}">
                    ${victory ? 'MISSÃO CUMPRIDA!' : 'GAME OVER'}
                </h1>
                <p class="result-subtitle">
                    ${victory ? 'Você foi incrível, herói!' : 'Não desista! Cada erro é um aprendizado.'}
                </p>

                ${victory ? `<div class="result-stars">${starsDisplay}</div>` : ''}

                <div class="result-stats">
                    <div class="result-stat-box">
                        <span class="result-stat-value">${this.state.score}</span>
                        <span class="result-stat-label">Pontos</span>
                    </div>
                    ${victory ? `
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${this.state.score + CONFIG.xp.stageComplete} ⚡</span>
                        <span class="result-stat-label">XP Ganho</span>
                    </div>
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${CONFIG.gems.stageComplete + (stars === 3 ? CONFIG.gems.perfect : 0)} 💎</span>
                        <span class="result-stat-label">Gemas</span>
                    </div>` : ''}
                </div>

                <div class="result-actions">
                    <button class="btn-primary" onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                    ${!victory ? `
                    <button class="btn-secondary" onclick="GameEngine.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Tentar de Novo
                    </button>` : ''}
                </div>
            </div>`;

        if (victory) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
            if (typeof Utils !== 'undefined') Utils.confetti();
        }

        this._removeCombo();

        // Restaura HUD e nav
        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
        State.updateHUD();
    },

    exit() {
        if (confirm('Deseja sair da missão? Seu progresso será perdido.')) {
            this._stopTimer();
            document.getElementById('top-hud')?.classList.remove('hidden');
            document.getElementById('bottom-nav')?.classList.remove('hidden');
            Router.navigate(`#chapter/${this.state.chapterId}`);
        }
    }
};

window.GameEngine = GameEngine;
