/**
 * EDUQUEST SPEED DRILL v1.0 — Sprint 6A
 * Rapid-fire quiz: 3s per question, combo & speed multipliers, feeds MemoryEngine
 */

const SpeedDrill = {
    // ── CONFIG ───────────────────────────────────────────────────
    QUESTION_TIME: 3,    // seconds per question
    TOTAL_TIME:    90,   // session time limit in seconds
    BASE_POINTS:   10,

    state: {
        questions:       [],
        currentIdx:      0,
        score:           0,
        combo:           0,
        maxCombo:        0,
        correct:         0,
        wrong:           0,
        startedAt:       0,
        qStartedAt:      0,
        qTimer:          null,
        sessionTimer:    null,
        sessionTimeLeft: 90,
        isPlaying:       false,
        answered:        false,
    },

    // ── ENTRY POINT ──────────────────────────────────────────────

    start() {
        const container = document.getElementById('app-container');
        if (!container) return;

        document.body.dataset.layout = 'full';
        const hudEl = document.getElementById('top-hud');
        const navEl = document.getElementById('bottom-nav');
        if (hudEl) hudEl.classList.add('hidden');
        if (navEl) navEl.classList.add('hidden');

        // Build question pool
        const pool = typeof MemoryEngine !== 'undefined'
            ? MemoryEngine.getSpeedDrillPool(30)
            : this._fallbackPool();

        if (pool.length === 0) {
            container.innerHTML = `
            <div class="screen sd-empty-screen">
                <div style="text-align:center;padding:48px 24px">
                    <div style="font-size:3rem;margin-bottom:16px">📚</div>
                    <h2 style="font-weight:800;margin-bottom:8px">Sem questões disponíveis</h2>
                    <p style="color:var(--text-muted);margin-bottom:24px">Complete algumas missões primeiro para desbloquear o Speed Drill!</p>
                    <button class="btn-primary" onclick="SpeedDrill.exit()">Voltar</button>
                </div>
            </div>`;
            return;
        }

        Object.assign(this.state, {
            questions:       pool,
            currentIdx:      0,
            score:           0,
            combo:           0,
            maxCombo:        0,
            correct:         0,
            wrong:           0,
            startedAt:       Date.now(),
            sessionTimeLeft: this.TOTAL_TIME,
            isPlaying:       true,
            answered:        false,
        });

        this._renderShell(container);
        this._startSessionTimer();
        this._loadQuestion();
    },

    // ── LAYOUT ───────────────────────────────────────────────────

    _renderShell(container) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        container.innerHTML = `
        <div class="sd-arena" id="sd-arena">
            <div class="sd-topbar">
                <button class="sd-exit-btn" onclick="SpeedDrill.exit()" aria-label="Sair">✕</button>
                <div class="sd-session-timer" id="sd-session-timer">
                    ${_ic('warning',{size:'xs'})} <span id="sd-time-val">${this.TOTAL_TIME}</span>s
                </div>
                <div class="sd-score-hud">
                    ${_ic('xp',{size:'xs',color:'xp'})} <span id="sd-score">0</span>
                </div>
            </div>

            <div class="sd-combo-strip" id="sd-combo-strip" aria-live="polite"></div>

            <div class="sd-question-zone" id="sd-question-zone">
                <!-- populated per question -->
            </div>

            <div class="sd-qtimer-bar-wrap">
                <div class="sd-qtimer-bar" id="sd-qtimer-bar"></div>
            </div>
        </div>`;
    },

    // ── SESSION TIMER ────────────────────────────────────────────

    _startSessionTimer() {
        clearInterval(this.state.sessionTimer);
        this.state.sessionTimer = setInterval(() => {
            this.state.sessionTimeLeft--;
            const el = document.getElementById('sd-time-val');
            if (el) el.textContent = this.state.sessionTimeLeft;
            if (this.state.sessionTimeLeft <= 10) {
                document.getElementById('sd-session-timer')?.classList.add('sd-timer-critical');
            }
            if (this.state.sessionTimeLeft <= 0) this._endGame('timeout');
        }, 1000);
    },

    // ── QUESTION RENDERING ───────────────────────────────────────

    _loadQuestion() {
        clearTimeout(this.state.qTimer);
        const { questions, currentIdx } = this.state;

        if (currentIdx >= questions.length) { this._endGame('done'); return; }

        const q    = questions[currentIdx];
        const zone = document.getElementById('sd-question-zone');
        if (!zone) return;

        this.state.answered  = false;
        this.state.qStartedAt = Date.now();

        const opts = (q.options || []).map((opt, i) => `
            <button class="sd-opt-btn" id="sd-opt-${i}"
                onclick="SpeedDrill._answer(${i})"
                data-idx="${i}">
                <span class="sd-opt-key">${String.fromCharCode(65+i)}</span>
                <span class="sd-opt-text">${opt}</span>
            </button>`).join('');

        zone.innerHTML = `
        <div class="sd-q-header">
            <span class="sd-q-num">${currentIdx + 1}/${questions.length}</span>
            <span class="sd-q-topic">${q.topic || ''}</span>
        </div>
        <div class="sd-question">${q.question || ''}</div>
        <div class="sd-options">${opts}</div>`;

        this._startQTimer();
    },

    _startQTimer() {
        const bar = document.getElementById('sd-qtimer-bar');
        if (bar) {
            bar.style.transition = 'none';
            bar.style.width      = '100%';
            requestAnimationFrame(() => {
                bar.style.transition = `width ${this.QUESTION_TIME}s linear`;
                bar.style.width      = '0%';
            });
        }
        this.state.qTimer = setTimeout(() => {
            if (!this.state.answered) this._answer(-1); // timeout = wrong
        }, this.QUESTION_TIME * 1000);
    },

    // ── ANSWER HANDLING ──────────────────────────────────────────

    _answer(selectedIdx) {
        if (!this.state.isPlaying || this.state.answered) return;
        this.state.answered = true;
        clearTimeout(this.state.qTimer);

        const q        = this.state.questions[this.state.currentIdx];
        const isCorrect = selectedIdx === q.correctIndex;
        const elapsed  = (Date.now() - this.state.qStartedAt) / 1000;

        // Mark buttons
        document.querySelectorAll('.sd-opt-btn').forEach(b => b.disabled = true);
        if (selectedIdx >= 0) {
            document.getElementById(`sd-opt-${selectedIdx}`)?.classList.add(isCorrect ? 'sd-correct' : 'sd-wrong');
        }
        document.getElementById(`sd-opt-${q.correctIndex}`)?.classList.add('sd-correct');

        if (isCorrect) {
            this.state.combo++;
            this.state.correct++;
            if (this.state.combo > this.state.maxCombo) this.state.maxCombo = this.state.combo;
            const pts = this._calcPoints(elapsed);
            this.state.score += pts;
            this._showCombo(pts);
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
            // Feed MemoryEngine (positive reinforcement)
            if (q._leitnerKey && typeof MemoryEngine !== 'undefined') {
                const card = (State.data.leitnerBoxes || {})[q._leitnerKey];
                if (card) MemoryEngine.processAnswer(card.chapterId, card.stageId, card.qIdx, true, elapsed, card.question, card.answer, card.topic);
            }
        } else {
            this.state.combo = 0;
            this.state.wrong++;
            this._clearCombo();
            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
        }

        this._updateScoreHUD();
        setTimeout(() => {
            this.state.currentIdx++;
            this._loadQuestion();
        }, 600);
    },

    _calcPoints(elapsedSecs) {
        let pts = this.BASE_POINTS;
        // Speed bonus
        if (elapsedSecs < 1)      pts *= 2.0;
        else if (elapsedSecs < 2) pts *= 1.5;
        // Combo multiplier: +25% per 3 consecutive correct
        const comboMult = 1 + Math.floor(this.state.combo / 3) * 0.25;
        return Math.round(pts * comboMult);
    },

    // ── HUD UPDATES ──────────────────────────────────────────────

    _updateScoreHUD() {
        const el = document.getElementById('sd-score');
        if (el) el.textContent = this.state.score;
    },

    _showCombo(pts) {
        const strip = document.getElementById('sd-combo-strip');
        if (!strip) return;
        const c     = this.state.combo;
        let   label = `+${pts}`;
        if (c >= 10)      label = `🔥 COMBO x${c}! +${pts}`;
        else if (c >= 5)  label = `⚡ COMBO x${c}! +${pts}`;
        else if (c >= 3)  label = `✨ x${c} +${pts}`;
        strip.textContent = label;
        strip.className   = `sd-combo-strip show ${c >= 5 ? 'sd-combo-fire' : ''}`;
        clearTimeout(this._comboHideTimer);
        this._comboHideTimer = setTimeout(() => { strip.className = 'sd-combo-strip'; }, 900);
    },

    _clearCombo() {
        const strip = document.getElementById('sd-combo-strip');
        if (strip) strip.className = 'sd-combo-strip';
    },

    // ── END GAME ─────────────────────────────────────────────────

    _endGame(reason) {
        if (!this.state.isPlaying) return;
        this.state.isPlaying = false;
        clearInterval(this.state.sessionTimer);
        clearTimeout(this.state.qTimer);

        const xp        = Math.round(this.state.score * 0.5);
        const totalAnsw = this.state.correct + this.state.wrong;
        const accuracy  = totalAnsw > 0 ? Math.round((this.state.correct / totalAnsw) * 100) : 0;

        if (xp > 0 && typeof State !== 'undefined') {
            State.addXP(xp);
            if (typeof EventsEngine !== 'undefined') EventsEngine.onXPGained(xp);
        }

        const container = document.getElementById('app-container');
        if (!container) return;

        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const stars = accuracy >= 80 ? 3 : accuracy >= 50 ? 2 : 1;

        container.innerHTML = `
        <div class="screen sd-results-screen">
            <div class="sd-results-hero">
                <div class="sd-stars-row">
                    ${[1,2,3].map(s => `<span class="sd-star ${s <= stars ? 'lit' : ''}">${_ic('star',{size:'xl',color: s <= stars ? 'brand':'muted'})}</span>`).join('')}
                </div>
                <h2 class="sd-results-title">Speed Drill!</h2>
                <div class="sd-results-score">${this.state.score}</div>
                <div class="sd-results-score-lbl">pontos</div>
            </div>
            <div class="sd-results-grid">
                <div class="sd-result-cell">
                    <div class="sd-result-val sd-rv-correct">${this.state.correct}</div>
                    <div class="sd-result-lbl">corretas</div>
                </div>
                <div class="sd-result-cell">
                    <div class="sd-result-val sd-rv-wrong">${this.state.wrong}</div>
                    <div class="sd-result-lbl">erradas</div>
                </div>
                <div class="sd-result-cell">
                    <div class="sd-result-val">${this.state.maxCombo}</div>
                    <div class="sd-result-lbl">combo máx</div>
                </div>
                <div class="sd-result-cell">
                    <div class="sd-result-val">${accuracy}%</div>
                    <div class="sd-result-lbl">acurácia</div>
                </div>
            </div>
            <div class="sd-xp-earned">
                ${_ic('xp',{size:'sm',color:'xp'})} <strong>+${xp} XP</strong> ganhos!
            </div>
            <div class="sd-results-actions">
                <button class="btn-primary" onclick="SpeedDrill.start()">
                    ${_ic('sword',{size:'sm'})} Jogar novamente
                </button>
                <button class="btn-secondary" onclick="SpeedDrill.exit()">
                    Voltar
                </button>
            </div>
        </div>`;
    },

    // ── UTILS ────────────────────────────────────────────────────

    exit() {
        this.state.isPlaying = false;
        clearInterval(this.state.sessionTimer);
        clearTimeout(this.state.qTimer);
        document.body.dataset.layout = 'app';
        const hudEl = document.getElementById('top-hud');
        const navEl = document.getElementById('bottom-nav');
        if (hudEl) hudEl.classList.remove('hidden');
        if (navEl) navEl.classList.remove('hidden');
        Router.navigate('#memory');
    },

    _fallbackPool() {
        const all = [];
        for (const key of Object.keys(window)) {
            const val = window[key];
            if (val && typeof val === 'object' && Array.isArray(val.questions)) {
                for (const q of val.questions) {
                    if (q?.options?.length >= 2) all.push(q);
                }
            }
        }
        for (let i = all.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [all[i], all[j]] = [all[j], all[i]];
        }
        return all.slice(0, 30);
    },
};

window.SpeedDrill = SpeedDrill;
