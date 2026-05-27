// Fix script: rewrite _renderArena + _loadQuestion + feedback methods
const fs = require('fs');
let content = fs.readFileSync('d:/Github/eduquest/js/game-engine.js', 'utf8');

// ── 1. Fix _renderArena (broken template literal) ────────────────────
// Find the broken method
const brokenStart = content.indexOf('    _renderArena() {');
const brokenEnd   = content.indexOf('\n    // ── HP BARS', brokenStart);
const brokenBlock = content.slice(brokenStart, brokenEnd);

const newRenderArena = `    _renderArena() {
        const app      = document.getElementById('app-container');
        const theme    = this._getBattleTheme();
        const maxLives = CONFIG.lives.gameHearts || 3;
        const _ic      = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const heartsHTML = Array.from({length: maxLives}, () => _ic('heart',{size:'xs',color:'heart'})).join('');

        app.innerHTML = \`
            <div class="game-arena battle-arena battle-duo \${theme.bgClass}" id="game-arena">
                <div class="duo-topbar">
                    <button class="duo-exit" onclick="GameEngine.exit()">✕</button>
                    <div class="duo-progress-wrap">
                        <div class="duo-progress-track">
                            <div class="duo-progress-fill" id="game-progress" style="width:0%"></div>
                        </div>
                    </div>
                    <div class="duo-lives" id="game-lives">\${heartsHTML}</div>
                </div>
                <div class="duo-enemy-bar">
                    <span class="duo-enemy-icon" id="enemy-sprite">\${theme.enemy}</span>
                    <div class="duo-hp-track">
                        <div class="duo-hp-fill" id="enemy-hp" style="width:100%"></div>
                    </div>
                    <div class="duo-timer" id="game-timer">15s</div>
                </div>
                <div class="duo-question-area" id="question-container"></div>
                <div class="duo-feedback-bar" id="feedback-overlay"></div>
            </div>\`;

        this._loadQuestion();
    },

`;

content = content.slice(0, brokenStart) + newRenderArena + content.slice(brokenEnd + 1);
console.log('Step 1: _renderArena fixed');

// ── 2. Fix _updateEnemyHP — remove enemy-hp-text reference ───────────
content = content.replace(
    `    _updateEnemyHP() {
        const pct = Math.max(0, Math.round(this.state.enemyHP));
        const bar = document.getElementById('enemy-hp');
        const txt = document.getElementById('enemy-hp-text');
        if (bar) bar.style.width = \`\${pct}%\`;
        if (txt) txt.textContent = \`\${pct}%\`;
    },`,
    `    _updateEnemyHP() {
        const pct = Math.max(0, Math.round(this.state.enemyHP));
        const bar = document.getElementById('enemy-hp');
        if (bar) bar.style.width = \`\${pct}%\`;
    },`
);
console.log('Step 2: _updateEnemyHP fixed');

// ── 3. Fix _updatePlayerHP — use game-lives for hearts ───────────────
const oldPlayerHP = `    _updatePlayerHP() {
        const maxLives = CONFIG.lives.gameHearts || 3;
        const pct      = (this.state.lives / maxLives) * 100;
        const bar      = document.getElementById('player-hp');
        if (bar) {
            bar.style.width = \`\${pct}%\`;
            bar.classList.remove('low', 'critical');
            if      (this.state.lives === 1)          bar.classList.add('critical');
            else if (this.state.lives < maxLives - 1) bar.classList.add('low');
        }
        const hearts = document.getElementById('player-hp-hearts');
        if (hearts) {
            const ic = typeof IconSystem !== 'undefined' ? IconSystem : null;
            const live  = Math.max(0, this.state.lives);
            const empty = Math.max(0, maxLives - live);
            if (ic) {
                hearts.innerHTML =
                    Array.from({length: live},  () => ic.html('heart',{size:'xs',color:'heart'})).join('') +
                    Array.from({length: empty}, () => ic.html('heart',{size:'xs',color:'locked'})).join('');
            } else {
                hearts.textContent = '❤️'.repeat(live) + '🖤'.repeat(empty);
            }
        }
    },`;

const newPlayerHP = `    _updatePlayerHP() {
        const maxLives = CONFIG.lives.gameHearts || 3;
        // Update hearts in topbar (duo-lives)
        const hearts = document.getElementById('game-lives') || document.getElementById('player-hp-hearts');
        if (hearts) {
            const ic = typeof IconSystem !== 'undefined' ? IconSystem : null;
            const live  = Math.max(0, this.state.lives);
            const empty = Math.max(0, maxLives - live);
            if (ic) {
                hearts.innerHTML =
                    Array.from({length: live},  () => ic.html('heart',{size:'xs',color:'heart'})).join('') +
                    Array.from({length: empty}, () => ic.html('heart',{size:'xs',color:'locked'})).join('');
            } else {
                hearts.textContent = '❤️'.repeat(live) + '🖤'.repeat(empty);
            }
        }
    },`;

content = content.replace(oldPlayerHP, newPlayerHP);
console.log('Step 3: _updatePlayerHP fixed');

// ── 4. Fix _updateTimerUI — use plain text, no icon ──────────────────
const oldTimer = `    _updateTimerUI() {
        const el = document.getElementById('game-timer');
        if (!el) return;
        const ic = (typeof IconSystem !== 'undefined') ? IconSystem.html('warning',{size:'xs'}) : '';
        el.innerHTML = \`\${ic} \${this.state.timer}s\`;
        el.classList.toggle('urgent', this.state.timer <= 5);
    },`;

const newTimer = `    _updateTimerUI() {
        const el = document.getElementById('game-timer');
        if (!el) return;
        el.textContent = \`\${this.state.timer}s\`;
        el.classList.toggle('urgent', this.state.timer <= 5);
    },`;

content = content.replace(oldTimer, newTimer);
console.log('Step 4: _updateTimerUI fixed');

// ── 5. Fix _loadQuestion — new Duolingo HTML structure ───────────────
const loadQStart = content.indexOf('    _loadQuestion() {');
const loadQEnd   = content.indexOf('\n    // ── AI TUTOR TIP', loadQStart);
const oldLoadQ   = content.slice(loadQStart, loadQEnd);

const newLoadQ = `    _loadQuestion() {
        if (this.state.currentIndex >= this.state.questions.length) {
            this._endGame(true);
            return;
        }

        this.state.pendingFeedback = false;
        this.state.isPlaying       = true;
        this.state.eliminatedIdx   = new Set();
        this.state.hintShown       = false;
        this.state.typingMode      = false;

        const q         = this.state.questions[this.state.currentIndex];
        const container = document.getElementById('question-container');
        const letters   = ['A', 'B', 'C', 'D'];

        this.state.timer = CONFIG.stages.timePerQuestion || 15;
        this._updateTimerUI();
        this._startTimer();

        const pct = (this.state.currentIndex / this.state.questions.length) * 100;
        document.getElementById('game-progress')?.style.setProperty('width', \`\${pct}%\`);

        this._updateLivesUI();

        const isTF      = q.type === 'tf';
        const isTyping  = q.type === 'typing';
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        // Question type badge
        const typeBadge = isTF
            ? \`<span class="qtype-badge qtype-tf">V/F</span>\`
            : isTyping
            ? \`<span class="qtype-badge qtype-type">Digitação</span>\`
            : \`<span class="qtype-badge qtype-mc">múltipla escolha</span>\`;

        // Options HTML
        let optionsHTML = '';
        if (isTyping) {
            optionsHTML = \`
                <div class="duo-typing-zone">
                    <input class="duo-typing-input" id="typing-input" type="text"
                           placeholder="Digite sua resposta..."
                           autocomplete="off" autocorrect="off" spellcheck="false"
                           onkeydown="if(event.key==='Enter') GameEngine._submitTyping()">
                    <button class="duo-typing-confirm"
                            onclick="GameEngine._submitTyping()">Confirmar</button>
                </div>\`;
        } else if (isTF) {
            optionsHTML = \`
                <div class="duo-tf-grid">
                    \${q.options.map((opt, idx) => \`
                        <button class="duo-tf-btn" id="opt-\${idx}" onclick="GameEngine.handleAnswer(\${idx})">
                            \${opt}
                        </button>
                    \`).join('')}
                </div>\`;
        } else {
            optionsHTML = \`
                <div class="duo-options" id="options-grid">
                    \${q.options.map((opt, idx) => \`
                        <button class="duo-option" id="opt-\${idx}"
                                onclick="GameEngine.handleAnswer(\${idx})">
                            <span class="duo-option-letter">\${letters[idx] || idx + 1}</span>
                            \${opt}
                        </button>
                    \`).join('')}
                </div>\`;
        }

        // Action buttons
        const hintDisabled    = this.state.hintsLeft <= 0;
        const elimDisabled    = this.state.eliminationsLeft <= 0 || isTF || isTyping;
        const actionsHTML = \`
            <div class="duo-actions">
                <button class="duo-action-btn \${hintDisabled ? 'spent' : ''}"
                        id="qa-hint-btn"
                        onclick="GameEngine.useHint()"
                        \${hintDisabled ? 'disabled' : ''}>
                    \${_ic('companion',{size:'xs'})} Dica\${this.state.hintsLeft > 0 ? \` (\${this.state.hintsLeft})\` : ''}
                </button>
                <button class="duo-action-btn \${elimDisabled ? 'spent' : ''}"
                        id="qa-elim-btn"
                        onclick="GameEngine.eliminate()"
                        \${elimDisabled ? 'disabled' : ''}>
                    Eliminar\${this.state.eliminationsLeft > 0 ? \` (\${this.state.eliminationsLeft})\` : ''}
                </button>
            </div>\`;

        // AI Tutor tip
        const tutorTip = this._getTutorTip(q);
        const tutorHTML = tutorTip ? \`
            <div class="duo-tutor-tip" id="tutor-tip">
                <span class="duo-tutor-face">\${_ic('companion',{size:'sm',color:'xp'})}</span>
                <span class="duo-tutor-text">\${tutorTip}</span>
                <button class="duo-tutor-close" onclick="document.getElementById('tutor-tip')?.remove()" aria-label="Fechar dica">×</button>
            </div>\` : '';

        container.innerHTML = \`
            <div class="duo-q-inner">
                \${tutorHTML}
                <div class="duo-question-meta">
                    <span class="duo-q-counter">Questão \${this.state.currentIndex + 1} / \${this.state.questions.length}</span>
                    \${typeBadge}
                </div>
                <div class="duo-question-text">\${q.question.replace(/\\n/g, '<br>')}</div>
                \${optionsHTML}
                \${actionsHTML}
                <div class="duo-hint-reveal" id="hint-reveal"></div>
            </div>\`;

        // Focus typing input
        if (isTyping) setTimeout(() => document.getElementById('typing-input')?.focus(), 100);
    },

`;

content = content.slice(0, loadQStart) + newLoadQ + content.slice(loadQEnd + 1);
console.log('Step 5: _loadQuestion fixed');

// ── 6. Fix useHint — update class names ──────────────────────────────
content = content.replace(
    'hintEl.innerHTML = `<div class="hint-bubble">${_ic(\'companion\',{size:\'xs\',color:\'xp\'})} ${hintText}</div>`;',
    'hintEl.innerHTML = `<div class="duo-hint-bubble">${_ic(\'companion\',{size:\'xs\',color:\'xp\'})} ${hintText}</div>`;'
);
console.log('Step 6: useHint hint-bubble class fixed');

// ── 7. Fix eliminate — update class names ─────────────────────────────
content = content.replace(
    "btn.classList.add('eliminated');",
    "btn.classList.add('duo-eliminated');"
);
console.log('Step 7: eliminate class fixed');

// ── 8. Fix handleAnswer — update selectors and class names ────────────
content = content.replace(
    "document.querySelectorAll('.option-btn, .tf-btn').forEach(b => b.disabled = true);",
    "document.querySelectorAll('.duo-option, .duo-tf-btn').forEach(b => b.disabled = true);"
);
// Correct answer button
content = content.replace(
    "if (btn) { btn.classList.add('correct'); this._showXPFloat(points, btn); }",
    "if (btn) { btn.classList.add('duo-correct'); this._showXPFloat(points, btn); }"
);
// Wrong answer + show correct
content = content.replace(
    "document.getElementById(`opt-${selectedIndex}`)?.classList.add('wrong');",
    "document.getElementById(`opt-${selectedIndex}`)?.classList.add('duo-wrong');"
);
content = content.replace(
    "document.getElementById(`opt-${q.correctIndex}`)?.classList.add('correct');",
    "document.getElementById(`opt-${q.correctIndex}`)?.classList.add('duo-correct');"
);
console.log('Step 8: handleAnswer class names fixed');

// ── 9. Fix _showFeedback — Duolingo bottom bar ────────────────────────
const oldFeedback = `    _showFeedback(isCorrect, explanation, points, typedValue) {
        const overlay = document.getElementById('feedback-overlay');
        if (!overlay) { this._nextQuestion(isCorrect); return; }

        const icon  = (typeof IconSystem !== 'undefined')
            ? (isCorrect ? IconSystem.html('check',{size:'xl',color:'success'}) : IconSystem.html('warning',{size:'xl',color:'danger'}))
            : (isCorrect ? '✅' : '❌');
        const label = isCorrect ? \`Correto! +\${points} pts\` : 'Incorreto!';
        const typingNote = typedValue && !isCorrect
            ? \`<div class="feedback-typed">Você digitou: "\${typedValue}"</div>\`
            : '';

        overlay.className = \`feedback-overlay show \${isCorrect ? 'success-fb' : 'error-fb'}\`;
        overlay.innerHTML = \`
            <div class="feedback-icon">\${icon}</div>
            <div class="feedback-body feedback-\${isCorrect ? 'success' : 'error'}">
                <div class="feedback-label">\${label}</div>
                \${explanation ? \`<div class="feedback-explanation">\${explanation}</div>\` : ''}
                \${typingNote}
            </div>
            <button class="feedback-continue" onclick="GameEngine._dismissFeedback()">
                \${this.state.lives <= 0 ? 'Ver resultado' : 'Continuar'}
            </button>\`;
    },`;

const newFeedback = `    _showFeedback(isCorrect, explanation, points, typedValue) {
        const bar = document.getElementById('feedback-overlay');
        if (!bar) { this._nextQuestion(isCorrect); return; }

        const icon  = isCorrect ? '✅' : '❌';
        const label = isCorrect ? \`Ótimo! +\${points} pts\` : 'Incorreto!';
        const typingNote = typedValue && !isCorrect
            ? \`<div class="duo-fb-typed">Você digitou: "\${typedValue}"</div>\`
            : '';

        bar.className = \`duo-feedback-bar show \${isCorrect ? 'fb-success' : 'fb-error'}\`;
        bar.innerHTML = \`
            <div class="duo-fb-header">
                <span class="duo-fb-icon">\${icon}</span>
                <span class="duo-fb-label">\${label}</span>
            </div>
            \${explanation ? \`<div class="duo-fb-explanation">\${explanation}</div>\` : ''}
            \${typingNote}
            <button class="duo-fb-continue" onclick="GameEngine._dismissFeedback()">
                \${this.state.lives <= 0 ? 'VER RESULTADO' : 'CONTINUAR'}
            </button>\`;
    },`;

content = content.replace(oldFeedback, newFeedback);
console.log('Step 9: _showFeedback fixed');

// ── 10. Fix _dismissFeedback ──────────────────────────────────────────
content = content.replace(
    `    _dismissFeedback() {
        const overlay = document.getElementById('feedback-overlay');
        if (overlay) { overlay.className = 'feedback-overlay'; overlay.innerHTML = ''; }
        if (this.state.lives <= 0) { this._endGame(false); return; }
        this.state.currentIndex++;
        this._loadQuestion();
    },`,
    `    _dismissFeedback() {
        const bar = document.getElementById('feedback-overlay');
        if (bar) { bar.className = 'duo-feedback-bar'; bar.innerHTML = ''; }
        if (this.state.lives <= 0) { this._endGame(false); return; }
        this.state.currentIndex++;
        this._loadQuestion();
    },`
);
console.log('Step 10: _dismissFeedback fixed');

fs.writeFileSync('d:/Github/eduquest/js/game-engine.js', content, 'utf8');
console.log('\nAll steps complete. File saved.');
