/**
 * EDUQUEST GAME ENGINE v3.0
 * Battle Arena UI + Learning Phase + RPG Combat System
 */

const GameEngine = {
    state: {
        chapterId:       null,
        stageId:         null,
        stageIndex:      null,
        stageData:       null,
        questions:       [],
        currentIndex:    0,
        score:           0,
        lives:           3,
        timer:           15,
        timerInterval:   null,
        isPlaying:       false,
        combo:           0,
        pendingFeedback: false,
        enemyHP:         100,
        learningCardIdx: 0
    },

    start(chapterId, stageId, stageIndex) {
        const stageVarName = stageId.toUpperCase();
        const stageData    = window[stageVarName];

        if (!stageData) {
            console.error(`GameEngine: ${stageVarName} não encontrado.`);
            Router.navigate(`#chapter/${chapterId}`);
            return;
        }

        this.state.chapterId       = chapterId;
        this.state.stageId         = stageId;
        this.state.stageIndex      = parseInt(stageIndex) || 1;
        this.state.stageData       = stageData;
        this.state.questions       = this._loadQuestions(stageData);
        this.state.currentIndex    = 0;
        this.state.score           = 0;
        this.state.lives           = CONFIG.lives.gameHearts || 3;
        this.state.combo           = 0;
        this.state.isPlaying       = true;
        this.state.pendingFeedback = false;
        this.state.enemyHP         = 100;
        this.state.learningCardIdx = 0;

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        const hasContent = (stageData.summary?.content || []).length > 0;
        if (hasContent) {
            this._showLearningPhase(stageData);
        } else {
            this._renderArena();
            this._startTimer();
        }
    },

    // ── LEARNING PHASE ──────────────────────────────────────────

    _showLearningPhase(stageData) {
        this.state.learningCardIdx = 0;
        const cards = stageData.summary.content || [];
        const app   = document.getElementById('app-container');

        app.innerHTML = `
            <div class="learning-phase" id="learning-phase">
                <div class="learning-topbar">
                    <button class="btn-exit" onclick="GameEngine.exit()">✕</button>
                    <div class="learning-dots" id="learning-dots">
                        ${cards.map((_, i) =>
                            `<span class="ldot${i === 0 ? ' active' : ''}"></span>`
                        ).join('')}
                    </div>
                    <button class="learning-skip" onclick="GameEngine._startBattle()">Pular ›</button>
                </div>
                <div class="learning-card-wrap">
                    <div class="learning-cards">
                        ${cards.map((c, i) => `
                            <div class="learning-card ${i === 0 ? 'active' : 'next'}">
                                <div class="lc-icon">${c.icon || '📖'}</div>
                                <h2 class="lc-title">${c.title || ''}</h2>
                                <p class="lc-text">${(c.text || '').replace(/\n/g, '<br>')}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="learning-footer">
                    <div class="learning-stage-label">${stageData.icon || '⚡'} ${stageData.title || ''}</div>
                    <button class="btn-primary learning-next-btn" id="learning-next-btn"
                            onclick="GameEngine._nextLearningCard()">
                        ${cards.length <= 1 ? '⚔️ BATALHAR!' : 'Próximo →'}
                    </button>
                </div>
            </div>`;

        this._setupLearningSwipe(cards.length);
    },

    _setupLearningSwipe(totalCards) {
        const wrap = document.getElementById('learning-phase');
        if (!wrap) return;
        let sx = 0, sy = 0;
        wrap.addEventListener('touchstart', e => {
            sx = e.touches[0].clientX;
            sy = e.touches[0].clientY;
        }, { passive: true });
        wrap.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - sx;
            const dy = e.changedTouches[0].clientY - sy;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx < 0) {
                    this._nextLearningCard();
                } else if (this.state.learningCardIdx > 0) {
                    this._goLearningCard(this.state.learningCardIdx - 1, totalCards);
                }
            }
        }, { passive: true });
    },

    _nextLearningCard() {
        const cards = this.state.stageData?.summary?.content || [];
        const next  = this.state.learningCardIdx + 1;
        if (next >= cards.length) {
            this._startBattle();
        } else {
            this._goLearningCard(next, cards.length);
        }
    },

    _goLearningCard(idx, total) {
        this.state.learningCardIdx = idx;
        document.querySelectorAll('.learning-card').forEach((el, i) => {
            el.className = `learning-card ${i < idx ? 'prev' : i === idx ? 'active' : 'next'}`;
        });
        document.querySelectorAll('.ldot').forEach((d, i) =>
            d.classList.toggle('active', i === idx)
        );
        const btn = document.getElementById('learning-next-btn');
        if (btn) btn.textContent = (idx === total - 1) ? '⚔️ BATALHAR!' : 'Próximo →';
    },

    _startBattle() {
        this._renderArena();
        this._startTimer();
    },

    // ── BATTLE ARENA ────────────────────────────────────────────

    _getBattleTheme() {
        const sd = this.state.stageData || {};
        if (sd.isFinal) return { bgClass: 'final-mode', enemy: '🎓', name: 'Exame Final' };
        if (sd.isBoss)  return { bgClass: 'boss-mode',  enemy: '💀', name: 'Chefe Final' };
        return { bgClass: '', enemy: sd.icon || '🦠', name: sd.title || 'Inimigo' };
    },

    _renderArena() {
        const app      = document.getElementById('app-container');
        const theme    = this._getBattleTheme();
        const maxLives = CONFIG.lives.gameHearts || 3;

        app.innerHTML = `
            <div class="game-arena battle-arena ${theme.bgClass}" id="game-arena">
                <div class="battle-topbar">
                    <button class="btn-exit" onclick="GameEngine.exit()">✕</button>
                    <div class="game-progress-track">
                        <div class="game-progress-fill" id="game-progress" style="width:0%"></div>
                    </div>
                    <div class="game-timer" id="game-timer">⏱ 15s</div>
                </div>

                <div class="battle-scene">
                    <div class="battle-entity battle-enemy-side">
                        <div class="battle-entity-name">${theme.enemy} ${theme.name}</div>
                        <div class="battle-hp-wrap">
                            <div class="battle-hp-bar">
                                <div class="battle-hp-fill hp-enemy" id="enemy-hp" style="width:100%"></div>
                            </div>
                            <span class="battle-hp-text" id="enemy-hp-text">100%</span>
                        </div>
                        <div class="battle-sprite enemy-sprite" id="enemy-sprite">${theme.enemy}</div>
                    </div>

                    <div class="battle-center-info">
                        <div class="battle-combo-zone" id="battle-combo"></div>
                    </div>

                    <div class="battle-entity battle-player-side">
                        <div class="battle-sprite player-sprite" id="player-sprite">🦸</div>
                        <div class="battle-hp-wrap">
                            <div class="battle-hp-bar">
                                <div class="battle-hp-fill hp-player" id="player-hp" style="width:100%"></div>
                            </div>
                            <span class="battle-hp-text" id="player-hp-hearts">
                                ${'❤️'.repeat(maxLives)}
                            </span>
                        </div>
                        <div class="battle-entity-name">🦸 Herói</div>
                    </div>
                </div>

                <div class="question-container" id="question-container"></div>
                <div class="feedback-overlay" id="feedback-overlay"></div>
            </div>`;

        this._loadQuestion();
    },

    _updateEnemyHP() {
        const pct = Math.max(0, Math.round(this.state.enemyHP));
        const bar = document.getElementById('enemy-hp');
        const txt = document.getElementById('enemy-hp-text');
        if (bar) bar.style.width = `${pct}%`;
        if (txt) txt.textContent = `${pct}%`;
    },

    _updatePlayerHP() {
        const maxLives = CONFIG.lives.gameHearts || 3;
        const pct      = (this.state.lives / maxLives) * 100;
        const bar      = document.getElementById('player-hp');
        if (bar) {
            bar.style.width = `${pct}%`;
            bar.classList.remove('low', 'critical');
            if      (this.state.lives === 1)           bar.classList.add('critical');
            else if (this.state.lives < maxLives - 1)  bar.classList.add('low');
        }
        const hearts = document.getElementById('player-hp-hearts');
        if (hearts) {
            const alive = Math.max(0, this.state.lives);
            const dead  = Math.max(0, maxLives - this.state.lives);
            hearts.textContent = '❤️'.repeat(alive) + '🖤'.repeat(dead);
        }
    },

    _showBattleEffect(isCorrect) {
        const enemy  = document.getElementById('enemy-sprite');
        const player = document.getElementById('player-sprite');
        if (isCorrect) {
            if (player) { player.classList.add('anim-attack'); setTimeout(() => player.classList.remove('anim-attack'), 360); }
            if (enemy)  { enemy.classList.add('anim-hit');     setTimeout(() => enemy.classList.remove('anim-hit'),     460); }
            this._spawnFloatText('⚔️ ACERTO!', '.battle-enemy-side', 'hit');
        } else {
            if (player) { player.classList.add('anim-damage'); setTimeout(() => player.classList.remove('anim-damage'), 460); }
            this._spawnFloatText('💔 -1 vida', '.battle-player-side', 'dmg');
        }
    },

    _spawnFloatText(text, selector, cls) {
        const anchor = document.querySelector(selector);
        if (!anchor) return;
        const r  = anchor.getBoundingClientRect();
        const el = document.createElement('div');
        el.className   = `battle-damage-float ${cls}`;
        el.textContent = text;
        el.style.left  = `${r.left + r.width / 2 - 42}px`;
        el.style.top   = `${r.top + 8}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 950);
    },

    // ── CORE QUIZ LOGIC ──────────────────────────────────────────

    _loadQuestions(stageData) {
        let questions = [];
        if (stageData.questions && stageData.questions.length > 0) {
            questions = stageData.questions.map(q => this._normalizeQuestion(q));
        }
        if (questions.length === 0) {
            const bank = window.QUESTIONS_BANK || [];
            questions  = bank.map(q => this._normalizeQuestion(q));
        }
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, CONFIG.stages.questionsPerGame || 10);
    },

    _normalizeQuestion(q) {
        if (Array.isArray(q.options) && typeof q.options[0] === 'object') {
            return {
                question:     q.prompt || q.question || 'Questão',
                options:      q.options.map(o => o.text || String(o)),
                correctIndex: q.options.findIndex(o => o.correct === true),
                explanation:  q.explanation || ''
            };
        }
        return {
            question:     q.question || q.prompt || 'Questão',
            options:      q.options || [],
            correctIndex: typeof q.correct === 'number' ? q.correct : (q.correctIndex || 0),
            explanation:  q.explanation || ''
        };
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

    _stopTimer() { clearInterval(this.state.timerInterval); },

    _updateTimerUI() {
        const el = document.getElementById('game-timer');
        if (!el) return;
        el.textContent = `⏱ ${this.state.timer}s`;
        el.classList.toggle('urgent', this.state.timer <= 5);
    },

    _loadQuestion() {
        if (this.state.currentIndex >= this.state.questions.length) {
            this._endGame(true);
            return;
        }

        this.state.pendingFeedback = false;
        this.state.isPlaying       = true;

        const q         = this.state.questions[this.state.currentIndex];
        const container = document.getElementById('question-container');
        const letters   = ['A', 'B', 'C', 'D'];

        this.state.timer = CONFIG.stages.timePerQuestion || 15;
        this._updateTimerUI();
        this._startTimer();

        const pct = (this.state.currentIndex / this.state.questions.length) * 100;
        const progressEl = document.getElementById('game-progress');
        if (progressEl) progressEl.style.width = `${pct}%`;

        this._updateLivesUI();

        container.innerHTML = `
            <div class="question-counter">Questão ${this.state.currentIndex + 1} / ${this.state.questions.length}</div>
            <div class="question-card">
                <div class="question-text">${q.question}</div>
            </div>
            <div class="options-grid" id="options-grid">
                ${q.options.map((opt, idx) => `
                    <button class="option-btn" id="opt-${idx}" onclick="GameEngine.handleAnswer(${idx})">
                        <span class="option-letter">${letters[idx] || (idx + 1)}</span>
                        ${opt}
                    </button>
                `).join('')}
            </div>`;
    },

    _updateLivesUI() {
        this._updatePlayerHP();
        const el = document.getElementById('game-lives');
        if (!el) return;
        const max = CONFIG.lives.gameHearts || 3;
        el.innerHTML = '❤️'.repeat(Math.max(0, this.state.lives)) +
                       '🖤'.repeat(Math.max(0, max - this.state.lives));
    },

    handleAnswer(selectedIndex) {
        if (!this.state.isPlaying || this.state.pendingFeedback) return;

        this._stopTimer();
        this.state.isPlaying       = false;
        this.state.pendingFeedback = true;

        const q         = this.state.questions[this.state.currentIndex];
        const isCorrect = selectedIndex === q.correctIndex;
        const buttons   = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            this.state.combo++;
            const timeBonusMax = CONFIG.xp.timeBonusMax || 75;
            const comboBonus   = (CONFIG.xp.comboBonus || 0) * this.state.combo;
            const timeBonus    = Math.floor((this.state.timer / 15) * timeBonusMax);
            const points       = (CONFIG.xp.correct || 10) + comboBonus + timeBonus;
            this.state.score  += points;

            const hpDrop = 100 / this.state.questions.length;
            this.state.enemyHP = Math.max(0, this.state.enemyHP - hpDrop);
            this._updateEnemyHP();

            const btn = document.getElementById(`opt-${selectedIndex}`);
            if (btn) {
                btn.classList.add('correct');
                this._showXPFloat(points, btn);
            }
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
            this._showBattleEffect(true);
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
            this._showBattleEffect(false);
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
        if (!overlay) { this._nextQuestion(isCorrect); return; }

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
        if (overlay) { overlay.className = 'feedback-overlay'; overlay.innerHTML = ''; }
        if (this.state.lives <= 0) { this._endGame(false); return; }
        this.state.currentIndex++;
        this._loadQuestion();
    },

    _showXPFloat(points, anchorEl) {
        const float       = document.createElement('div');
        float.className   = 'xp-float';
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
        const zone = document.getElementById('battle-combo');
        if (zone) zone.textContent = `🔥 ${this.state.combo}x Combo!`;
        const badge       = document.createElement('div');
        badge.className   = 'combo-badge';
        badge.id          = 'combo-badge';
        badge.textContent = `🔥 ${this.state.combo}x Combo!`;
        document.body.appendChild(badge);
    },

    _removeCombo() {
        document.getElementById('combo-badge')?.remove();
        const zone = document.getElementById('battle-combo');
        if (zone) zone.textContent = '';
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
            const xpGain  = this.state.score + (CONFIG.xp.stageComplete || 0);
            const gemGain = (CONFIG.gems.stageComplete || 0) + (stars === 3 ? (CONFIG.gems.perfect || 0) : 0);
            State.addXP(xpGain);
            State.addGems(gemGain);
        }

        const starsDisplay = victory
            ? (['⭐', '⭐⭐', '⭐⭐⭐'][stars - 1] || '')
            : '💀';

        const app = document.getElementById('app-container');
        app.innerHTML = `
            <div class="result-screen">
                <div class="result-icon">${victory ? '🏆' : '💀'}</div>
                <h1 class="result-title ${victory ? 'victory' : 'defeat'}">
                    ${victory ? 'MISSÃO CUMPRIDA!' : 'GAME OVER'}
                </h1>
                <p class="result-subtitle">
                    ${victory
                        ? 'Você foi incrível, herói!'
                        : 'Não desista! Cada erro é um aprendizado.'}
                </p>
                ${victory ? `<div class="result-stars">${starsDisplay}</div>` : ''}
                <div class="result-stats">
                    <div class="result-stat-box">
                        <span class="result-stat-value">${this.state.score}</span>
                        <span class="result-stat-label">Pontos</span>
                    </div>
                    ${victory ? `
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${this.state.score + (CONFIG.xp.stageComplete || 0)} ⚡</span>
                        <span class="result-stat-label">XP Ganho</span>
                    </div>
                    <div class="result-stat-box">
                        <span class="result-stat-value">+${(CONFIG.gems.stageComplete || 0) + (stars === 3 ? (CONFIG.gems.perfect || 0) : 0)} 💎</span>
                        <span class="result-stat-label">Gemas</span>
                    </div>` : ''}
                </div>
                <div class="result-actions">
                    <button class="btn-primary"
                            onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                    ${!victory ? `
                    <button class="btn-secondary"
                            onclick="GameEngine.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Tentar de Novo
                    </button>` : ''}
                </div>
            </div>`;

        if (victory) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
            if (typeof Utils !== 'undefined') Utils.confetti();
        }

        this._removeCombo();
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
