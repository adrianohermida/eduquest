/**
 * EDUQUEST GAME ENGINE v4.0
 * Battle Arena · Learning Phase · V/F · Eliminação · Dicas · Digitação
 */

const GameEngine = {
    state: {
        chapterId:        null,
        stageId:          null,
        stageIndex:       null,
        stageData:        null,
        questions:        [],
        currentIndex:     0,
        score:            0,
        lives:            3,
        timer:            15,
        timerInterval:    null,
        isPlaying:        false,
        combo:            0,
        pendingFeedback:  false,
        enemyHP:          100,
        learningCardIdx:  0,
        eliminationsLeft: 1,
        hintsLeft:        3,
        eliminatedIdx:    new Set(),
        hintShown:        false,
        typingMode:       false,
        typingTimeout:    null,
        _floats:          [],
        xpMultiplier:     1,
        hasShield:        false,
        extraTime:        0,
        hasStarGuarantee: false,
        correctCount:     0,
    },

    // ── ENTRY POINT ─────────────────────────────────────────────

    start(chapterId, stageId, stageIndex) {
        const stageVarName = stageId.toUpperCase();
        const stageData    = window[stageVarName];
        if (!stageData) {
            console.error(`GameEngine: ${stageVarName} não encontrado.`);
            Router.navigate(`#chapter/${chapterId}`);
            return;
        }

        Object.assign(this.state, {
            chapterId, stageId,
            stageIndex:       parseInt(stageIndex) || 1,
            stageData,
            questions:        this._buildQuestionSet(stageData),
            currentIndex:     0,
            score:            0,
            lives:            CONFIG.lives.gameHearts || 3,
            combo:            0,
            isPlaying:        true,
            pendingFeedback:  false,
            enemyHP:          100,
            learningCardIdx:  0,
            eliminationsLeft: 1,
            hintsLeft:        3,
            eliminatedIdx:    new Set(),
            hintShown:        false,
            typingMode:       false,
            xpMultiplier:     1,
            hasShield:        false,
            extraTime:        0,
            hasStarGuarantee: false,
            correctCount:     0,
            peakCombo:        0,
        });

        // Apply purchased inventory items
        if (State.useItem('heart'))  this.state.lives = Math.min(this.state.lives + 1, 5);
        if (State.useItem('hint'))   this.state.hintsLeft++;
        if (State.useItem('xp2x'))   this.state.xpMultiplier = 2;
        if (State.useItem('shield')) this.state.hasShield = true;
        if (State.useItem('time'))   this.state.extraTime = 10;
        if (State.useItem('star'))   this.state.hasStarGuarantee = true;

        // Apply avatar class perks
        const perk = State.getAvatarClassPerk();
        if (perk.extraHeart) this.state.lives = Math.min(this.state.lives + 1, 5);
        if (perk.extraHint)  this.state.hintsLeft++;
        if (perk.xpMult > 1 && this.state.xpMultiplier === 1) this.state.xpMultiplier = perk.xpMult;
        this.state.cientistGemCount = 0;

        document.getElementById('top-hud')?.classList.add('hidden');
        document.getElementById('bottom-nav')?.classList.add('hidden');

        const hasContent = (stageData.summary?.content || []).length > 0;
        hasContent ? this._showLearningPhase(stageData) : this._renderArena();
    },

    // ── QUESTION BUILDING ───────────────────────────────────────

    _buildQuestionSet(stageData) {
        let mc = [];
        if (stageData.questions?.length > 0) {
            mc = stageData.questions.map(q => this._normalizeQuestion(q));
        } else {
            mc = (window.QUESTIONS_BANK || []).map(q => this._normalizeQuestion(q));
        }
        mc = this._fisherYates(mc).slice(0, CONFIG.stages.questionsPerGame || 10);

        const tf = this._generateTFQuestions(stageData);

        return [...tf, ...mc].map(q =>
            q.type === 'tf' ? q : { ...q, ...this._shuffleOptions(q) }
        );
    },

    _fisherYates(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    _shuffleOptions(q) {
        const indexed = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
        for (let i = indexed.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
        }
        return {
            options:      indexed.map(o => o.text),
            correctIndex: indexed.findIndex(o => o.isCorrect)
        };
    },

    _generateTFQuestions(stageData) {
        const flashcards = stageData.summary?.flashcards || [];
        if (flashcards.length < 2) return [];

        const shuffled = this._fisherYates(flashcards);
        const count    = Math.min(2, Math.floor(flashcards.length / 2));
        const result   = [];

        for (let i = 0; i < count; i++) {
            const fc      = shuffled[i];
            const isTrue  = Math.random() > 0.5;
            // Randomly swap button order so True isn't always first
            const trueFirst = Math.random() > 0.5;
            const opts    = trueFirst
                ? ['✅ Verdadeiro', '❌ Falso']
                : ['❌ Falso',      '✅ Verdadeiro'];
            if (isTrue) {
                result.push({
                    type:         'tf',
                    question:     `✅ ou ❌ — Verdadeiro ou Falso?\n\n"${fc.q}\n→ ${fc.a}"`,
                    options:      opts,
                    correctIndex: trueFirst ? 0 : 1,
                    explanation:  `Correto! ${fc.a}`
                });
            } else {
                const other = shuffled[(i + count + 1) % shuffled.length];
                result.push({
                    type:         'tf',
                    question:     `✅ ou ❌ — Verdadeiro ou Falso?\n\n"${fc.q}\n→ ${other.a}"`,
                    options:      opts,
                    correctIndex: trueFirst ? 1 : 0,
                    explanation:  `Falso! A resposta correta é: ${fc.a}`
                });
            }
        }
        return result;
    },

    _normalizeQuestion(q) {
        if (Array.isArray(q.options) && typeof q.options[0] === 'object') {
            return {
                question:     q.prompt || q.question || 'Questão',
                options:      q.options.map(o => o.text || String(o)),
                correctIndex: q.options.findIndex(o => o.correct === true),
                explanation:  q.explanation || '',
                type:         q.type || 'mc'
            };
        }
        return {
            question:     q.question || q.prompt || 'Questão',
            options:      q.options || [],
            correctIndex: typeof q.correct === 'number' ? q.correct : (q.correctIndex || 0),
            explanation:  q.explanation || '',
            type:         q.type || 'mc'
        };
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
                    <div class="learning-stage-label">${(typeof IconSystem !== 'undefined' ? IconSystem.html('xp',{size:'sm',color:'xp'}) : '⚡')} ${stageData.title || ''}</div>
                    <button class="btn-primary learning-next-btn" id="learning-next-btn"
                            onclick="GameEngine._nextLearningCard()">
                        ${cards.length <= 1 ? `${(typeof IconSystem !== 'undefined' ? IconSystem.html('sword',{size:'sm'}) : '⚔️')} BATALHAR!` : 'Próximo →'}
                    </button>
                </div>
            </div>`;

        this._setupLearningSwipe(cards.length);
    },

    _setupLearningSwipe(total) {
        const wrap = document.getElementById('learning-phase');
        if (!wrap) return;
        let sx = 0, sy = 0;
        wrap.addEventListener('touchstart', e => {
            sx = e.touches[0].clientX; sy = e.touches[0].clientY;
        }, { passive: true });
        wrap.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - sx;
            const dy = e.changedTouches[0].clientY - sy;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                dx < 0 ? this._nextLearningCard() : (this.state.learningCardIdx > 0 && this._goLearningCard(this.state.learningCardIdx - 1, total));
            }
        }, { passive: true });
    },

    _nextLearningCard() {
        const cards = this.state.stageData?.summary?.content || [];
        const next  = this.state.learningCardIdx + 1;
        next >= cards.length ? this._startBattle() : this._goLearningCard(next, cards.length);
    },

    _goLearningCard(idx, total) {
        this.state.learningCardIdx = idx;
        document.querySelectorAll('.learning-card').forEach((el, i) => {
            el.className = `learning-card ${i < idx ? 'prev' : i === idx ? 'active' : 'next'}`;
        });
        document.querySelectorAll('.ldot').forEach((d, i) => d.classList.toggle('active', i === idx));
        const btn = document.getElementById('learning-next-btn');
        if (btn) btn.innerHTML = idx === total - 1
            ? `${(typeof IconSystem !== 'undefined' ? IconSystem.html('sword',{size:'sm'}) : '⚔️')} BATALHAR!`
            : 'Próximo →';
    },

    _startBattle() { this._renderArena(); },

    // ── BATTLE ARENA ────────────────────────────────────────────

    _getBattleTheme() {
        const sd  = this.state.stageData || {};
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        if (sd.isFinal) return { bgClass: 'final-mode', enemy: _ic('portal',{size:'3xl',color:'final'}), name: 'Exame Final' };
        if (sd.isBoss)  return { bgClass: 'boss-mode',  enemy: _ic('boss',  {size:'3xl',color:'rpg'}),   name: 'Chefe Final' };
        const enemyIcon = _ic(sd.iconId || 'virus',{size:'3xl',color:'science'}) || sd.icon || '🦠';
        return { bgClass: '', enemy: enemyIcon, name: sd.title || 'Inimigo' };
    },

    _renderArena() {
        const app      = document.getElementById('app-container');
        const theme    = this._getBattleTheme();
        const maxLives = CONFIG.lives.gameHearts || 3;
        const _ic      = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const heartsHTML = Array.from({length: maxLives}, () => _ic('heart',{size:'xs',color:'heart'})).join('');

        app.innerHTML = ;

        this._loadQuestion();
    },

    // ── HP BARS ──────────────────────────────────────────────────

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
    },

    // ── BATTLE EFFECTS ───────────────────────────────────────────

    _showBattleEffect(isCorrect) {
        const enemy  = document.getElementById('enemy-sprite');
        const player = document.getElementById('player-sprite');
        if (isCorrect) {
            player?.classList.add('anim-attack');   setTimeout(() => player?.classList.remove('anim-attack'),   360);
            enemy?.classList.add('anim-hit');        setTimeout(() => enemy?.classList.remove('anim-hit'),        460);
            this._spawnFloatText('⚔️ ACERTO!', '.battle-enemy-side', 'hit');
        } else {
            player?.classList.add('anim-damage');   setTimeout(() => player?.classList.remove('anim-damage'), 460);
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
        this.state._floats.push(el);
        setTimeout(() => { el.remove(); this.state._floats = this.state._floats.filter(f => f !== el); }, 950);
    },

    // ── QUESTION RENDERING ───────────────────────────────────────

    _loadQuestion() {
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
        document.getElementById('game-progress')?.style.setProperty('width', `${pct}%`);

        this._updateLivesUI();

        const isTF      = q.type === 'tf';
        const isTyping  = q.type === 'typing';

        // Question type badge
        const typeBadge = isTF
            ? `<span class="qtype-badge qtype-tf">V/F</span>`
            : isTyping
            ? `<span class="qtype-badge qtype-type">${_ic('scroll',{size:'xs'})} Digitação</span>`
            : `<span class="qtype-badge qtype-mc">múltipla escolha</span>`;

        // Options HTML
        let optionsHTML = '';
        if (isTyping) {
            optionsHTML = `
                <div class="typing-zone">
                    <input class="typing-input" id="typing-input" type="text"
                           placeholder="Digite sua resposta..."
                           autocomplete="off" autocorrect="off" spellcheck="false"
                           onkeydown="if(event.key==='Enter') GameEngine._submitTyping()">
                    <button class="btn-primary" style="margin-top:10px"
                            onclick="GameEngine._submitTyping()">${_ic('check',{size:'xs'})} Confirmar</button>
                </div>`;
        } else if (isTF) {
            optionsHTML = `
                <div class="tf-grid">
                    ${q.options.map((opt, idx) => `
                        <button class="tf-btn" id="opt-${idx}" onclick="GameEngine.handleAnswer(${idx})">
                            ${opt}
                        </button>
                    `).join('')}
                </div>`;
        } else {
            optionsHTML = `
                <div class="options-grid" id="options-grid">
                    ${q.options.map((opt, idx) => `
                        <button class="option-btn" id="opt-${idx}"
                                onclick="GameEngine.handleAnswer(${idx})">
                            <span class="option-letter">${letters[idx] || idx + 1}</span>
                            ${opt}
                        </button>
                    `).join('')}
                </div>`;
        }

        // Action buttons
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const hintDisabled    = this.state.hintsLeft <= 0;
        const elimDisabled    = this.state.eliminationsLeft <= 0 || isTF || isTyping;
        const actionsHTML = `
            <div class="question-actions">
                <button class="qa-btn qa-hint ${hintDisabled ? 'qa-spent' : ''}"
                        id="qa-hint-btn"
                        onclick="GameEngine.useHint()"
                        ${hintDisabled ? 'disabled' : ''}>
                    ${_ic('companion',{size:'xs'})} Dica${this.state.hintsLeft > 0 ? ` (${this.state.hintsLeft})` : ''}
                </button>
                <button class="qa-btn qa-elim ${elimDisabled ? 'qa-spent' : ''}"
                        id="qa-elim-btn"
                        onclick="GameEngine.eliminate()"
                        ${elimDisabled ? 'disabled' : ''}>
                    ${_ic('warning',{size:'xs'})} Eliminar${this.state.eliminationsLeft > 0 ? ` (${this.state.eliminationsLeft})` : ''}
                </button>
            </div>`;

        // AI Tutor tip (shown for weak topics or first question)
        const tutorTip = this._getTutorTip(q);
        const tutorHTML = tutorTip ? `
            <div class="tutor-tip" id="tutor-tip">
                <span class="tutor-tip-face">${_ic('companion',{size:'sm',color:'xp'})}</span>
                <span class="tutor-tip-text">${tutorTip}</span>
                <button class="tutor-tip-close" onclick="document.getElementById('tutor-tip')?.remove()" aria-label="Fechar dica">×</button>
            </div>` : '';

        container.innerHTML = `
            ${tutorHTML}
            <div class="question-counter">
                Questão ${this.state.currentIndex + 1} / ${this.state.questions.length}
                ${typeBadge}
            </div>
            <div class="question-card">
                <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>
            </div>
            ${optionsHTML}
            ${actionsHTML}
            <div class="hint-reveal" id="hint-reveal"></div>`;

        // Focus typing input
        if (isTyping) setTimeout(() => document.getElementById('typing-input')?.focus(), 100);
    },

    // ── AI TUTOR TIP ─────────────────────────────────────────────

    _getTutorTip(q) {
        if (!q) return null;
        const idx   = this.state.currentIndex;
        const total = this.state.questions.length;
        const topic = q.topic || q.tags?.[0] || '';

        // Only show on first question, last question, or weak topics
        const weakTopics = (typeof State !== 'undefined') ? State.getWeakTopics() : [];
        const isWeak     = weakTopics.some(t => t.topic === topic && t.count >= 2);
        const isFirst    = idx === 0;
        const isLast     = idx === total - 1;
        const isBoss     = this.state.stageData?.isBoss;
        const isFinal    = this.state.stageData?.isFinal;

        if (!isFirst && !isLast && !isWeak && !isBoss) return null;

        if (isBoss && isFirst)    return 'Você está no BOSS! Mantenha o foco e use suas dicas com sabedoria.';
        if (isFinal && isFirst)   return 'Exame final! Esta é sua chance de mostrar todo o conhecimento acumulado.';
        if (isWeak && topic)      return `Você errou questões sobre "${topic}" antes. Atenção redobrada aqui!`;
        if (isFirst && topic)     return `Começando com "${topic}". Respire fundo e confie no que estudou!`;
        if (isLast)               return 'Última questão! Você chegou até aqui, pode ir além!';
        return null;
    },

    // ── HINT ─────────────────────────────────────────────────────

    useHint() {
        if (this.state.hintsLeft <= 0 || this.state.hintShown || this.state.pendingFeedback) return;

        const q          = this.state.questions[this.state.currentIndex];
        const hintText   = q.explanation
            ? q.explanation.split('.')[0] + '.'
            : 'Pense na relação entre os conceitos do estágio.';

        this.state.hintsLeft--;
        this.state.hintShown = true;
        this.state.combo     = Math.max(0, this.state.combo - 1); // penaliza combo

        const _ic    = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const hintEl = document.getElementById('hint-reveal');
        if (hintEl) {
            hintEl.innerHTML = `<div class="hint-bubble">${_ic('companion',{size:'xs',color:'xp'})} ${hintText}</div>`;
        }
        const btn = document.getElementById('qa-hint-btn');
        if (btn) {
            btn.innerHTML = this.state.hintsLeft > 0
                ? `${_ic('companion',{size:'xs'})} Dica (${this.state.hintsLeft})`
                : `${_ic('companion',{size:'xs'})} Sem dicas`;
            if (this.state.hintsLeft <= 0) { btn.disabled = true; btn.classList.add('qa-spent'); }
        }
        this._removeCombo();
        if (typeof SoundManager !== 'undefined') SoundManager.play('click');
    },

    // ── ELIMINATE ────────────────────────────────────────────────

    eliminate() {
        if (this.state.eliminationsLeft <= 0 || this.state.pendingFeedback) return;

        const q       = this.state.questions[this.state.currentIndex];
        const wrong   = q.options
            .map((_, i) => i)
            .filter(i => i !== q.correctIndex && !this.state.eliminatedIdx.has(i));

        if (wrong.length === 0) return;

        const toRemove = wrong[Math.floor(Math.random() * wrong.length)];
        this.state.eliminatedIdx.add(toRemove);
        this.state.eliminationsLeft = 0;

        const btn = document.getElementById(`opt-${toRemove}`);
        if (btn) {
            btn.classList.add('eliminated');
            btn.disabled = true;
        }
        const elimBtn = document.getElementById('qa-elim-btn');
        if (elimBtn) { elimBtn.textContent = '❌ Usado'; elimBtn.disabled = true; elimBtn.classList.add('qa-spent'); }

        if (typeof SoundManager !== 'undefined') SoundManager.play('click');
    },

    // ── TYPING SUBMISSION ────────────────────────────────────────

    _submitTyping() {
        if (this.state.pendingFeedback) return;
        const input = document.getElementById('typing-input');
        if (!input) return;

        const answer  = input.value.trim();
        const q       = this.state.questions[this.state.currentIndex];
        const correct = q.options[q.correctIndex] || '';

        const sim = this._stringSimilarity(answer, correct);
        const idx = sim >= 0.55 ? q.correctIndex : -99;
        this.handleAnswer(idx, answer);
    },

    _stringSimilarity(a, b) {
        const norm = s => s.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9\s]/g, '').trim();
        const s1 = norm(a), s2 = norm(b);
        if (!s1 || !s2) return 0;
        if (s1 === s2)   return 1;
        if (s1.includes(s2) || s2.includes(s1)) return 0.85;

        const words1 = s1.split(/\s+/);
        const words2 = s2.split(/\s+/);
        const matched = words1.filter(w =>
            words2.some(w2 => w === w2 || this._levenshtein(w, w2) <= 2)
        ).length;
        return matched / Math.max(words1.length, words2.length);
    },

    _levenshtein(a, b) {
        const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
        for (let j = 1; j <= b.length; j++) dp[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                dp[i][j] = a[i-1] === b[j-1]
                    ? dp[i-1][j-1]
                    : Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
        }
        return dp[a.length][b.length];
    },

    // ── TIMER ────────────────────────────────────────────────────

    _startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timer = (CONFIG.stages.timePerQuestion || 15) + (this.state.extraTime || 0);
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

    _stopTimer()  { clearInterval(this.state.timerInterval); },

    _updateTimerUI() {
        const el = document.getElementById('game-timer');
        if (!el) return;
        const ic = (typeof IconSystem !== 'undefined') ? IconSystem.html('warning',{size:'xs'}) : '';
        el.innerHTML = `${ic} ${this.state.timer}s`;
        el.classList.toggle('urgent', this.state.timer <= 5);
    },

    _updateLivesUI() {
        this._updatePlayerHP();
        const el  = document.getElementById('game-lives');
        if (!el) return;
        const max  = CONFIG.lives.gameHearts || 3;
        const live = Math.max(0, this.state.lives);
        const ic   = typeof IconSystem !== 'undefined' ? IconSystem : null;
        if (ic) {
            el.innerHTML =
                Array.from({length: live},          () => ic.html('heart',{size:'xs',color:'heart'})).join('') +
                Array.from({length: max - live},     () => ic.html('heart',{size:'xs',color:'locked'})).join('');
        } else {
            el.innerHTML = '❤️'.repeat(live) + '🖤'.repeat(max - live);
        }
    },

    // ── ANSWER HANDLING ──────────────────────────────────────────

    handleAnswer(selectedIndex, typedValue) {
        if (!this.state.isPlaying || this.state.pendingFeedback) return;

        this._stopTimer();
        this.state.isPlaying       = false;
        this.state.pendingFeedback = true;

        const q         = this.state.questions[this.state.currentIndex];
        const isCorrect = selectedIndex === q.correctIndex;

        // Disable all option buttons
        document.querySelectorAll('.option-btn, .tf-btn').forEach(b => b.disabled = true);
        document.getElementById('qa-hint-btn')?.setAttribute('disabled', true);
        document.getElementById('qa-elim-btn')?.setAttribute('disabled', true);

        if (isCorrect) {
            this.state.combo++;
            this.state.correctCount = (this.state.correctCount || 0) + 1;
            if (this.state.combo > (this.state.peakCombo || 0)) this.state.peakCombo = this.state.combo;
            if (this.state.combo >= 5) State.completeMission('combo_5');
            const timeLimit = CONFIG.stages.timePerQuestion || 15;
            if (this.state.timer > timeLimit - 5) State.completeMission('fast_answer');
            const comboBonus = (CONFIG.xp.comboBonus || 0) * this.state.combo;
            const timeBonus  = Math.floor((this.state.timer / 15) * (CONFIG.xp.timeBonusMax || 75));
            const points     = Math.round(((CONFIG.xp.correct || 10) + comboBonus + timeBonus) * (this.state.xpMultiplier || 1));
            this.state.score += points;

            this.state.enemyHP = Math.max(0, this.state.enemyHP - 100 / this.state.questions.length);
            this._updateEnemyHP();

            const btn = document.getElementById(`opt-${selectedIndex}`);
            if (btn) { btn.classList.add('correct'); this._showXPFloat(points, btn); }

            // Cientista class: +1 gem every 5 correct answers
            if (State.getAvatarClass() === 'cientista') {
                this.state.cientistGemCount = (this.state.cientistGemCount || 0) + 1;
                if (this.state.cientistGemCount % 5 === 0) State.addGems(1);
            }

            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
            if (typeof EventsEngine !== 'undefined') {
                EventsEngine.trackCorrectAnswer();
                EventsEngine.trackCombo(this.state.combo);
            }
            if (typeof MemoryEngine !== 'undefined') {
                MemoryEngine.processAnswer(
                    this.state.chapterId, this.state.stageId, this.state.currentIndex, true,
                    (CONFIG.stages.timePerQuestion || 15) - this.state.timer,
                    q.question, q.options?.[q.correctIndex] || '', q.topic || q.tags?.[0] || 'Geral'
                );
            }
            this._showBattleEffect(true);
            this._updateCombo();
            this._showFeedback(true, q.explanation, points, typedValue);
        } else {
            this.state.combo = 0;
            this._removeCombo();
            if (this.state.hasShield) {
                this.state.hasShield = false;
            } else {
                this.state.lives--;
            }
            this._updateLivesUI();

            if (selectedIndex !== -1 && selectedIndex !== -99) {
                document.getElementById(`opt-${selectedIndex}`)?.classList.add('wrong');
            }
            document.getElementById(`opt-${q.correctIndex}`)?.classList.add('correct');

            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
            if (typeof State !== 'undefined') {
                State.recordWrongAnswer(
                    this.state.chapterId,
                    this.state.stageId,
                    this.state.currentIndex,
                    q.topic || q.tags?.[0] || 'Geral'
                );
            }
            if (typeof MemoryEngine !== 'undefined') {
                MemoryEngine.processAnswer(
                    this.state.chapterId, this.state.stageId, this.state.currentIndex, false,
                    (CONFIG.stages.timePerQuestion || 15) - this.state.timer,
                    q.question, q.options?.[q.correctIndex] || '', q.topic || q.tags?.[0] || 'Geral'
                );
            }
            this._showBattleEffect(false);
            this._showFeedback(false, q.explanation, 0, typedValue);

            const arena = document.getElementById('game-arena');
            if (arena) { arena.classList.add('shake'); setTimeout(() => arena.classList.remove('shake'), 500); }
            if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
        }
    },

    // ── FEEDBACK ─────────────────────────────────────────────────

    _showFeedback(isCorrect, explanation, points, typedValue) {
        const overlay = document.getElementById('feedback-overlay');
        if (!overlay) { this._nextQuestion(isCorrect); return; }

        const icon  = (typeof IconSystem !== 'undefined')
            ? (isCorrect ? IconSystem.html('check',{size:'xl',color:'success'}) : IconSystem.html('warning',{size:'xl',color:'danger'}))
            : (isCorrect ? '✅' : '❌');
        const label = isCorrect ? `Correto! +${points} pts` : 'Incorreto!';
        const typingNote = typedValue && !isCorrect
            ? `<div class="feedback-typed">Você digitou: "${typedValue}"</div>`
            : '';

        overlay.className = `feedback-overlay show ${isCorrect ? 'success-fb' : 'error-fb'}`;
        overlay.innerHTML = `
            <div class="feedback-icon">${icon}</div>
            <div class="feedback-body feedback-${isCorrect ? 'success' : 'error'}">
                <div class="feedback-label">${label}</div>
                ${explanation ? `<div class="feedback-explanation">${explanation}</div>` : ''}
                ${typingNote}
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

    _nextQuestion(isCorrect) {
        if (!isCorrect && this.state.lives <= 0) { setTimeout(() => this._endGame(false), 1200); return; }
        setTimeout(() => { this.state.currentIndex++; this._loadQuestion(); }, isCorrect ? 800 : 1500);
    },

    // ── XP FLOAT + COMBO ─────────────────────────────────────────

    _showXPFloat(points, anchorEl) {
        const float = document.createElement('div');
        float.className   = 'xp-float';
        float.innerHTML = `+${points} ${(typeof IconSystem !== 'undefined') ? IconSystem.html('xp',{size:'xs',color:'xp'}) : '⚡'}`;
        if (anchorEl) {
            const r = anchorEl.getBoundingClientRect();
            float.style.left = `${r.left + r.width / 2 - 30}px`;
            float.style.top  = `${r.top - 10}px`;
        } else { float.style.left = '50%'; float.style.top = '40%'; }
        document.body.appendChild(float);
        this.state._floats.push(float);
        if (this.state.combo >= 3 && typeof Utils !== 'undefined') {
            Utils.burst(float, this.state.combo >= 5 ? 14 : 10, '#f97316');
        }
        setTimeout(() => { float.remove(); this.state._floats = this.state._floats.filter(f => f !== float); }, 1300);
    },

    _updateCombo() {
        this._removeCombo();
        if (this.state.combo < 2) return;
        const combo = this.state.combo;
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const icon  = combo >= 10 ? _ic('crown',{size:'xs',color:'final'}) : _ic('streak',{size:'xs',color:'xp'});
        const label = combo >= 10 ? `${icon} ${combo}x INSANO!` : combo >= 5 ? `${icon} ${combo}x COMBO!` : `${icon} ${combo}x Combo!`;
        const zone  = document.getElementById('battle-combo');
        if (zone) zone.innerHTML = label;
        const badge = document.createElement('div');
        const intensity = combo >= 10 ? 'fire' : combo >= 5 ? 'hot' : '';
        badge.className = intensity ? `combo-badge ${intensity}` : 'combo-badge';
        badge.id = 'combo-badge';
        badge.innerHTML = label;
        document.body.appendChild(badge);
        if (typeof Utils !== 'undefined') {
            Utils.burst(badge, combo >= 10 ? 18 : combo >= 5 ? 14 : 10, combo >= 10 ? '#7c3aed' : '#f97316');
        }
    },

    _removeCombo() {
        document.getElementById('combo-badge')?.remove();
        const zone = document.getElementById('battle-combo');
        if (zone) zone.innerHTML = '';
    },

    // ── END GAME ─────────────────────────────────────────────────

    _endGame(victory) {
        this._stopTimer();
        let stars = victory ? (this.state.lives === 3 ? 3 : this.state.lives === 2 ? 2 : 1) : 0;
        if (victory && this.state.hasStarGuarantee) stars = Math.max(1, stars);

        if (victory) {
            State.completeStage(this.state.chapterId, this.state.stageIndex, stars);
            const xpGain  = this.state.score + (CONFIG.xp.stageComplete || 0);
            const gemGain = (CONFIG.gems.stageComplete || 0) + (stars === 3 ? (CONFIG.gems.perfect || 0) : 0);
            State.addXP(xpGain); State.addGems(gemGain);
            // Mission hooks
            State.completeMission('complete_stage');
            State.completeMission('streak_day');
            if (stars === 3) State.completeMission('perfect_score');
            // Events + Battle Pass hooks
            if (typeof EventsEngine !== 'undefined') {
                EventsEngine.trackMissionComplete();
                EventsEngine.onXPGained(xpGain);
                if (stars === 3) EventsEngine.trackPerfect();
                if (gemGain > 0) EventsEngine.trackGemsGained(gemGain);
            }
        }

        State.recordGameEnd({
            correct: this.state.correctCount || 0,
            perfect: victory && stars === 3,
            combo:   this.state.peakCombo || 0,
            victory,
        });

        const ic = (typeof IconSystem !== 'undefined') ? IconSystem : null;
        const starsHtml = victory
            ? Array(stars).fill(0).map((_, i) =>
                `<span class="result-star" style="animation-delay:${0.45 + i * 0.22}s">${ic ? ic.html('star',{size:'xl',color:'final',variant:'glow'}) : '⭐'}</span>`
              ).join('')
            : '';
        const xpGain   = this.state.score + (CONFIG.xp.stageComplete || 0);
        const gemGain  = (CONFIG.gems.stageComplete || 0) + (stars === 3 ? (CONFIG.gems.perfect || 0) : 0);
        const iconVict = ic ? ic.html('trophy',{size:'3xl',color:'final',variant:'glow'}) : '🏆';
        const iconDef  = ic ? ic.html('boss',  {size:'3xl',color:'boss'}) : '💀';
        const iconXP   = ic ? ic.html('xp',   {size:'xs',color:'xp'})    : '⚡';
        const iconGem  = ic ? ic.html('gem',  {size:'xs',color:'gem'})   : '💎';
        const app = document.getElementById('app-container');
        app.innerHTML = `
            <div class="result-screen ${victory ? 'victory-mode' : 'defeat-mode'}">
                <div class="result-icon ${victory ? 'result-icon-victory' : ''}">${victory ? iconVict : iconDef}</div>
                <h1 class="result-title ${victory ? 'victory' : 'defeat'}">
                    ${victory ? 'MISSÃO CUMPRIDA!' : 'GAME OVER'}
                </h1>
                <p class="result-subtitle">
                    ${victory ? 'Você foi incrível, herói!' : 'Não desista! Cada erro é um aprendizado.'}
                </p>
                ${victory ? `<div class="result-stars">${starsHtml}</div>` : ''}
                <div class="result-stats">
                    <div class="result-stat-box">
                        <span class="result-stat-value" id="rs-score">0</span>
                        <span class="result-stat-label">Pontos</span>
                    </div>
                    ${victory ? `
                    <div class="result-stat-box">
                        <span class="result-stat-value">+<span id="rs-xp">0</span> ${iconXP}</span>
                        <span class="result-stat-label">XP Ganho</span>
                    </div>
                    <div class="result-stat-box">
                        <span class="result-stat-value">+<span id="rs-gems">0</span> ${iconGem}</span>
                        <span class="result-stat-label">Gemas</span>
                    </div>` : ''}
                </div>
                <div class="result-actions">
                    <button class="btn-primary" onclick="Router.navigate('#chapter/${this.state.chapterId}')">
                        🗺️ Voltar ao Mapa
                    </button>
                    <button class="btn-secondary" onclick="Router.navigate('#adventure/${this.state.chapterId}')">
                        🗺️ Modo Aventura
                    </button>
                    ${!victory ? `
                    <button class="btn-secondary"
                            onclick="GameEngine.start('${this.state.chapterId}','${this.state.stageId}',${this.state.stageIndex})">
                        🔄 Tentar de Novo
                    </button>` : ''}
                </div>
            </div>`;

        if (typeof Utils !== 'undefined') {
            setTimeout(() => {
                Utils.countUp(document.getElementById('rs-score'), 0, this.state.score, 900);
                if (victory) {
                    Utils.countUp(document.getElementById('rs-xp'),   0, xpGain,  1000);
                    Utils.countUp(document.getElementById('rs-gems'), 0, gemGain,  800);
                }
            }, 300);
        }

        if (victory) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
            setTimeout(() => { if (typeof Utils !== 'undefined') Utils.confetti(); }, 600);
        }
        this._removeCombo();
        document.getElementById('top-hud')?.classList.remove('hidden');
        document.getElementById('bottom-nav')?.classList.remove('hidden');
        State.updateHUD();
    },

    exit() {
        ModalEngine.interrupt('missionExit', {
            context:   'missão',
            onConfirm: () => {
                this._stopTimer();
                this.state._floats.forEach(el => el.remove());
                this.state._floats = [];
                this._removeCombo();
                document.getElementById('top-hud')?.classList.remove('hidden');
                document.getElementById('bottom-nav')?.classList.remove('hidden');
                Router.navigate(`#chapter/${this.state.chapterId}`);
            },
        });
    }
};

window.GameEngine = GameEngine;
