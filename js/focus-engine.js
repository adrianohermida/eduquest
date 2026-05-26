/**
 * EDUQUEST FOCUS ENGINE v1.0 — Sprint 6C
 * P03: Deep Focus Mode (Kumon-style immersive drilling)
 * P05: Reading Focus System (karaoke word-highlight + vocab spotlight + mini-quiz)
 */

// ── P03: DEEP FOCUS MODE ─────────────────────────────────────────────────────

const DeepFocus = {
    _active:   false,
    _timer:    null,
    _elapsed:  0,          // seconds
    _target:   25 * 60,    // 25 min Pomodoro default
    _onExit:   null,

    isActive() { return this._active; },

    enter(opts = {}) {
        if (this._active) return;
        this._active  = true;
        this._elapsed = 0;
        this._target  = (opts.minutes || 25) * 60;
        this._onExit  = opts.onExit || null;

        document.body.dataset.focusMode = 'deep';

        // Inject focus HUD overlay
        const existing = document.getElementById('df-hud');
        if (existing) existing.remove();
        const hud = document.createElement('div');
        hud.id        = 'df-hud';
        hud.className = 'df-hud';
        hud.innerHTML = `
            <div class="df-timer" id="df-timer">25:00</div>
            <button class="df-exit-btn" onclick="DeepFocus.exit()" title="Sair do Foco">✕ Foco</button>`;
        document.body.appendChild(hud);

        this._timer = setInterval(() => {
            this._elapsed++;
            this._updateTimer();
            if (this._elapsed >= this._target) this._onTimeUp();
        }, 1000);

        if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
    },

    exit() {
        if (!this._active) return;
        this._active = false;
        clearInterval(this._timer);
        document.body.dataset.focusMode = '';
        document.getElementById('df-hud')?.remove();
        if (typeof this._onExit === 'function') this._onExit(this._elapsed);
    },

    _updateTimer() {
        const el = document.getElementById('df-timer');
        if (!el) return;
        const remaining = Math.max(0, this._target - this._elapsed);
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if (remaining <= 60)  el.classList.add('df-timer-warn');
        if (remaining === 0)  el.classList.add('df-timer-done');
    },

    _onTimeUp() {
        clearInterval(this._timer);
        const hud = document.getElementById('df-hud');
        if (hud) {
            hud.innerHTML += `<div class="df-done-badge">✅ Sessão concluída!</div>`;
            setTimeout(() => this.exit(), 3000);
        }
        if (typeof State !== 'undefined') State.addXP(50);
        if (typeof EventsEngine !== 'undefined') EventsEngine.onXPGained(50);
    },

    toggle(opts = {}) {
        this._active ? this.exit() : this.enter(opts);
    },

    // ── P03: ENTRY SCREEN (Kumon-style config) ───────────────────────
    renderScreen(container) {
        if (!container) return;
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        // Collect available stages from active chapter
        const chapters = (typeof CONFIG !== 'undefined' && CONFIG.chapters) || [];
        const activeCh = chapters.find(ch =>
            ch.unlocked && typeof State !== 'undefined' && !State.getChapterProgress(ch.id).completed
        ) || chapters.find(ch => ch.unlocked) || chapters[0];
        const stages = (window.CHAPTER_METADATA?.stages || []).filter(s => !s.isFinal);
        const hasReview = typeof State !== 'undefined' && State.getWrongAnswerCount() > 0;
        const reviewCount = typeof State !== 'undefined' ? State.getWrongAnswerCount() : 0;

        const stageOptsHTML = stages.map(s => {
            const done = activeCh && typeof State !== 'undefined'
                ? State.isStageCompleted(activeCh.id, s.index || 1) : false;
            return `<option value="${s.id}">${done ? '✅' : s.isBoss ? '👑' : '📖'} Fase ${s.index}: ${s.label || s.id}</option>`;
        }).join('');

        container.innerHTML = `
        <div class="screen df-screen">
            <button class="btn-back" onclick="history.back()">‹ Voltar</button>

            <div class="df-screen-hero">
                <div class="df-screen-icon">${_ic('compass', {size:'4xl', color:'brand'})}</div>
                <h2 class="df-screen-title">Modo Foco</h2>
                <p class="df-screen-desc">Estudo imersivo estilo Kumon — questões sequenciais, timer Pomodoro, zero distração.</p>
            </div>

            <div class="df-config-card">
                <div class="df-section-label">⏱️ Duração da sessão</div>
                <div class="df-duration-grid" id="df-dur-grid">
                    <button class="df-dur-btn" onclick="DeepFocus._selectDur(this,15)">15 min</button>
                    <button class="df-dur-btn df-dur-active" onclick="DeepFocus._selectDur(this,25)">⭐ 25 min</button>
                    <button class="df-dur-btn" onclick="DeepFocus._selectDur(this,45)">45 min</button>
                </div>

                <div class="df-section-label" style="margin-top:16px">📚 Conteúdo de estudo</div>
                <div class="df-source-opts" id="df-src-opts">
                    ${stages.length ? `
                    <label class="df-source-opt df-src-selected" id="df-src-stage">
                        <input type="radio" name="df-src" value="stage" checked>
                        <div class="df-src-info">
                            <span class="df-src-icon">${activeCh ? activeCh.icon : '📚'}</span>
                            <span class="df-src-label">${activeCh ? activeCh.subject : 'Capítulo atual'}</span>
                        </div>
                        ${stages.length > 1 ? `
                        <select class="df-stage-sel" id="df-stage-sel">${stageOptsHTML}</select>` : ''}
                    </label>` : ''}
                    <label class="df-source-opt${stages.length ? '' : ' df-src-selected'}" id="df-src-review"
                        onclick="this.querySelector('input').checked=true;document.querySelectorAll('.df-source-opt').forEach(el=>el.classList.remove('df-src-selected'));this.classList.add('df-src-selected')">
                        <input type="radio" name="df-src" value="review"${!stages.length ? ' checked' : ''}>
                        <div class="df-src-info">
                            <span class="df-src-icon">🔁</span>
                            <span class="df-src-label">Revisão de erros</span>
                        </div>
                        ${hasReview ? `<span class="df-src-badge">${reviewCount}</span>` : '<span class="df-src-badge df-src-empty">0</span>'}
                    </label>
                </div>
            </div>

            <button class="btn-primary df-start-btn" onclick="DeepFocus._start()">
                ${_ic('compass', {size:'sm'})} Entrar em Foco
            </button>

            <div class="df-tips">
                <div class="df-tip">💡 Coloque o celular no silencioso</div>
                <div class="df-tip">🧠 Sessão completa = +50 XP bônus</div>
                <div class="df-tip">🔥 3+ questões corretas = streak de foco</div>
            </div>
        </div>`;

        // Stage radio click sync
        const stageLabel = document.getElementById('df-src-stage');
        if (stageLabel) {
            stageLabel.addEventListener('click', () => {
                stageLabel.querySelector('input').checked = true;
                document.querySelectorAll('.df-source-opt').forEach(el => el.classList.remove('df-src-selected'));
                stageLabel.classList.add('df-src-selected');
            });
        }

        this._pendingMinutes = 25;
        this._drillActive    = false;
    },

    _selectDur(btn, minutes) {
        this._pendingMinutes = minutes;
        document.querySelectorAll('.df-dur-btn').forEach(b => b.classList.remove('df-dur-active'));
        btn.classList.add('df-dur-active');
    },

    _start() {
        const src      = document.querySelector('input[name="df-src"]:checked')?.value || 'stage';
        const stageSel = document.getElementById('df-stage-sel');
        const stageId  = stageSel ? stageSel.value : null;

        let questions = [];

        if (src === 'review' && typeof State !== 'undefined') {
            questions = State.getReviewQuestions(20);
        } else if (stageId) {
            const stageVar = window[stageId.toUpperCase().replace(/-/g, '_')];
            questions = stageVar?.questions || [];
        }

        // Fallback
        if (!questions.length && typeof State !== 'undefined') {
            questions = State.getReviewQuestions(15);
        }

        // Shuffle + cap at 15
        questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);

        if (!questions.length) {
            // No questions — timer-only mode
            this.enter({ minutes: this._pendingMinutes || 25 });
            return;
        }

        this._drillQuestions = questions;
        this._drillIdx       = 0;
        this._drillScore     = 0;
        this._drillActive    = true;
        this._drillCombo     = 0;

        this.enter({
            minutes: this._pendingMinutes || 25,
            onExit: () => {
                this._drillActive = false;
                if (typeof Router !== 'undefined') Router.navigate('#home');
            }
        });

        const container = document.getElementById('app-container');
        if (container) this._renderDrillQ(container);
    },

    _renderDrillQ(container) {
        if (!this._drillActive || !container) return;
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        if (this._drillIdx >= this._drillQuestions.length) {
            const total = this._drillQuestions.length;
            const score = this._drillScore;
            const xp    = 50 + score * 8;   // session bonus + per-correct
            if (typeof State !== 'undefined') State.addXP(xp);
            if (typeof EventsEngine !== 'undefined') { EventsEngine.onXPGained(xp); EventsEngine.trackMissionComplete(); }
            container.innerHTML = `
            <div class="screen df-drill-done">
                <div class="df-done-icon">${_ic('trophy', {size:'4xl', color:'final'})}</div>
                <h2 class="df-done-title">Sessão Concluída!</h2>
                <div class="df-done-score">${score}/${total}</div>
                <div class="df-done-pct" style="color:var(--brand);font-size:2rem;font-weight:900;line-height:1">${Math.round((score/total)*100)}%</div>
                <div class="df-done-sub">corretas · +${xp} XP ganhos</div>
                <button class="btn-primary df-done-btn" onclick="DeepFocus.exit();Router.navigate('#home')">
                    ${_ic('xp', {size:'sm'})} Sair do Foco
                </button>
                <button class="btn-secondary df-done-btn" onclick="DeepFocus._replayDrill()">
                    🔁 Repetir sessão
                </button>
            </div>`;
            return;
        }

        const q       = this._drillQuestions[this._drillIdx];
        const total   = this._drillQuestions.length;
        const idx     = this._drillIdx;
        const combo   = this._drillCombo || 0;
        const letters = ['A','B','C','D'];

        // Normalise question format (stage vs AI-studio)
        const qText    = q.prompt || q.text || q.question || '';
        const qOptions = q.options || [];
        const optsHTML = qOptions.map((opt, oi) => {
            const label = typeof opt === 'string' ? opt : (opt.text || '');
            return `<button class="df-drill-opt" id="dfo-${oi}" onclick="DeepFocus._answerDrill(${oi})">
                <span class="df-opt-key">${letters[oi]}</span>${label}
            </button>`;
        }).join('');

        container.innerHTML = `
        <div class="screen df-drill-screen">
            <div class="df-drill-topbar">
                <button class="df-drill-exit" onclick="DeepFocus.exit();Router.navigate('#home')">✕ Sair</button>
                <div class="df-drill-prog-wrap">
                    <div class="df-drill-prog-track">
                        <div class="df-drill-prog-fill" style="width:${Math.round((idx/total)*100)}%"></div>
                    </div>
                    <span class="df-drill-prog-lbl">${idx + 1}/${total}</span>
                </div>
                <div class="df-drill-score-badge">⚡ ${this._drillScore}</div>
            </div>
            ${combo >= 3 ? `<div class="df-combo-banner">🔥 ${combo}x Combo!</div>` : ''}
            <div class="df-drill-q-card">
                <div class="df-drill-q-num">Questão ${idx + 1}</div>
                <div class="df-drill-q-text">${qText}</div>
            </div>
            <div class="df-drill-opts">${optsHTML}</div>
        </div>`;
    },

    _answerDrill(selectedIdx) {
        const q = this._drillQuestions[this._drillIdx];

        // Find correct index for both formats
        let correctIdx;
        if (Array.isArray(q.options) && typeof q.options[0] === 'object') {
            // Stage format: {text, correct:bool}
            correctIdx = q.options.findIndex(o => o.correct === true);
        } else {
            // AI-Studio format: correct is an integer
            correctIdx = typeof q.correct === 'number' ? q.correct : 0;
        }

        const isCorrect = selectedIdx === correctIdx;

        if (isCorrect) {
            this._drillScore++;
            this._drillCombo = (this._drillCombo || 0) + 1;
            document.getElementById(`dfo-${selectedIdx}`)?.classList.add('df-opt-correct');
            if (typeof State !== 'undefined') State.addXP(5);
            if (typeof SoundManager !== 'undefined') SoundManager.play('correct');
        } else {
            this._drillCombo = 0;
            document.getElementById(`dfo-${selectedIdx}`)?.classList.add('df-opt-wrong');
            document.getElementById(`dfo-${correctIdx}`)?.classList.add('df-opt-correct');
            if (typeof State !== 'undefined') State.recordWrongAnswer(q);
            if (typeof SoundManager !== 'undefined') SoundManager.play('wrong');
        }

        if (typeof MemoryEngine !== 'undefined') {
            MemoryEngine.processAnswer(q.id || (q.prompt || q.text || '').slice(0, 30), isCorrect);
        }

        // Disable all options while showing feedback
        document.querySelectorAll('.df-drill-opt').forEach(b => { b.disabled = true; });

        setTimeout(() => {
            this._drillIdx++;
            const container = document.getElementById('app-container');
            if (container) this._renderDrillQ(container);
        }, 700);
    },

    _replayDrill() {
        this._drillIdx   = 0;
        this._drillScore = 0;
        this._drillCombo = 0;
        // Reshuffle
        this._drillQuestions = [...this._drillQuestions].sort(() => Math.random() - 0.5);
        const container = document.getElementById('app-container');
        if (container) this._renderDrillQ(container);
    },
};

// ── P05: READING FOCUS SYSTEM ─────────────────────────────────────────────────

const ReadingFocus = {
    _hlTimer:  null,
    _wordIdx:  0,
    _words:    [],
    _wpm:      160,      // words per minute for auto-highlight

    // Entry: called by router for #reading/chapterId/stageId
    start(chapterId, stageId) {
        const container = document.getElementById('app-container');
        if (!container) return;

        const stageVar = stageId ? stageId.toUpperCase().replace(/-/g, '_') : null;
        const stage    = stageVar ? window[stageVar] : null;
        const passages = stage?.summary?.content || [];

        if (!passages.length) {
            container.innerHTML = `
            <div class="screen rf-empty">
                <div style="text-align:center;padding:48px 24px">
                    <div style="font-size:3rem;margin-bottom:16px">📖</div>
                    <h2 style="font-weight:800;margin-bottom:8px">Sem texto disponível</h2>
                    <p style="color:var(--text-muted);margin-bottom:24px">Esta fase não possui passagens de leitura.</p>
                    <button class="btn-primary" onclick="history.back()">Voltar</button>
                </div>
            </div>`;
            return;
        }

        this._passages  = passages;
        this._stage     = stage;
        this._chapterId = chapterId;
        this._stageId   = stageId;
        this._passIdx   = 0;
        this._renderPassage(container);
    },

    _renderPassage(container) {
        clearInterval(this._hlTimer);

        if (this._passIdx >= this._passages.length) {
            this._renderQuiz(container);
            return;
        }

        const p     = this._passages[this._passIdx];
        const total = this._passages.length;
        const idx   = this._passIdx;
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const pct   = Math.round((idx / total) * 100);

        // Split text into tagged word spans
        const rawText  = (p.text || '').replace(/\n\n/g, ' ¶ ').replace(/\n/g, ' ');
        this._words    = rawText.split(/\s+/).filter(Boolean);
        this._wordIdx  = 0;

        const wordsHTML = this._words.map((w, i) => {
            const isPara = w === '¶';
            return isPara
                ? `<span class="rf-para-break"> </span>`
                : `<span class="rf-word" id="rf-w-${i}" onclick="ReadingFocus._spotlight(${i})">${w} </span>`;
        }).join('');

        container.innerHTML = `
        <div class="screen rf-screen">
            <div class="rf-topbar">
                <button class="btn-exit rf-exit" onclick="ReadingFocus._exit()">✕</button>
                <div class="rf-progress-wrap">
                    <div class="rf-prog-track"><div class="rf-prog-fill" style="width:${pct}%"></div></div>
                    <span class="rf-prog-label">${idx + 1}/${total}</span>
                </div>
                <button class="rf-tts-btn" onclick="ReadingFocus._toggleAutoRead()" id="rf-tts-btn" title="Leitura automática">
                    ${_ic('companion',{size:'sm',color:'brand'})}
                </button>
            </div>

            <div class="rf-content-wrap">
                <div class="rf-passage-icon">${p.icon || '📖'}</div>
                <h2 class="rf-passage-title">${p.title || ''}</h2>
                <div class="rf-text" id="rf-text">${wordsHTML}</div>

                <div class="rf-vocab-tip" id="rf-vocab-tip" style="display:none">
                    <span id="rf-vocab-word"></span>
                </div>
            </div>

            <div class="rf-footer">
                ${idx + 1 < total
                    ? `<button class="btn-primary rf-next-btn" onclick="ReadingFocus._nextPassage()">
                        ${_ic('compass',{size:'sm'})} Próxima passagem →
                       </button>`
                    : `<button class="btn-primary rf-next-btn rf-quiz-btn" onclick="ReadingFocus._renderQuiz(document.getElementById('app-container'))">
                        ${_ic('star',{size:'sm'})} Mini-quiz →
                       </button>`}
            </div>
        </div>`;

        // Auto-highlight first word
        this._startAutoHighlight();
    },

    _startAutoHighlight() {
        clearInterval(this._hlTimer);
        const msPerWord = Math.round(60000 / this._wpm);
        this._hlTimer = setInterval(() => {
            this._highlightWord(this._wordIdx);
            this._wordIdx++;
            if (this._wordIdx >= this._words.length) clearInterval(this._hlTimer);
        }, msPerWord);
    },

    _highlightWord(idx) {
        // Clear previous
        document.querySelectorAll('.rf-word.rf-hl').forEach(el => el.classList.remove('rf-hl'));
        const el = document.getElementById(`rf-w-${idx}`);
        if (!el) return;
        el.classList.add('rf-hl');
        // Smooth scroll into view if needed
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },

    _toggleAutoRead() {
        if (this._hlTimer) {
            clearInterval(this._hlTimer);
            this._hlTimer = null;
            document.getElementById('rf-tts-btn')?.classList.remove('rf-tts-active');
        } else {
            this._startAutoHighlight();
            document.getElementById('rf-tts-btn')?.classList.add('rf-tts-active');
        }
    },

    _spotlight(wordIdx) {
        clearInterval(this._hlTimer);
        this._hlTimer = null;
        this._highlightWord(wordIdx);
        this._wordIdx = wordIdx + 1;

        const word    = (this._words[wordIdx] || '').replace(/[.,!?;:'"()]/g, '');
        const tip     = document.getElementById('rf-vocab-tip');
        const tipWord = document.getElementById('rf-vocab-word');
        if (tip && tipWord && word.length > 3) {
            tipWord.textContent = word;
            tip.style.display   = 'flex';
            clearTimeout(this._tipTimer);
            this._tipTimer = setTimeout(() => { if (tip) tip.style.display = 'none'; }, 2000);
        }
    },

    _nextPassage() {
        clearInterval(this._hlTimer);
        this._passIdx++;
        const container = document.getElementById('app-container');
        if (container) this._renderPassage(container);
    },

    // ── MINI-QUIZ ─────────────────────────────────────────────────

    _renderQuiz(container) {
        clearInterval(this._hlTimer);
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const stage = this._stage;

        // Build quiz from miniReview OR first 3 questions
        let items = [];
        if (stage?.summary?.miniReview?.length) {
            items = stage.summary.miniReview.slice(0, 3).map(r => ({
                question:    r.q,
                answer:      r.a,
                isOpenEnded: true,
            }));
        } else if (stage?.questions?.length) {
            items = stage.questions.slice(0, 3);
        }

        if (!items.length) {
            this._renderQuizResults(container, 0, 0);
            return;
        }

        this._quizItems  = items;
        this._quizIdx    = 0;
        this._quizScore  = 0;
        this._renderQuizItem(container);
    },

    _renderQuizItem(container) {
        if (this._quizIdx >= this._quizItems.length) {
            this._renderQuizResults(container, this._quizScore, this._quizItems.length);
            return;
        }

        const q   = this._quizItems[this._quizIdx];
        const idx = this._quizIdx;
        const tot = this._quizItems.length;
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        if (q.isOpenEnded) {
            // Show Q then reveal A
            container.innerHTML = `
            <div class="screen rf-quiz-screen">
                <div class="rf-quiz-topbar">
                    <button class="btn-exit" onclick="ReadingFocus._exit()">✕</button>
                    <div class="rf-prog-track"><div class="rf-prog-fill" style="width:${(idx/tot)*100}%"></div></div>
                    <span class="rf-prog-label">${idx+1}/${tot}</span>
                </div>
                <div class="rf-quiz-body">
                    <div class="rf-quiz-badge">${_ic('scroll',{size:'sm',color:'brand'})} Mini-quiz</div>
                    <div class="rf-quiz-q">${q.question}</div>
                    <button class="btn-secondary rf-reveal-btn" id="rf-reveal-btn" onclick="ReadingFocus._revealAnswer()">Ver resposta</button>
                    <div class="rf-quiz-answer hidden" id="rf-quiz-answer">${q.answer}</div>
                    <div class="rf-quiz-self hidden" id="rf-quiz-self">
                        <p>Você sabia?</p>
                        <button class="rf-self-yes" onclick="ReadingFocus._selfScore(true)">✅ Sim</button>
                        <button class="rf-self-no"  onclick="ReadingFocus._selfScore(false)">❌ Não</button>
                    </div>
                </div>
            </div>`;
        } else {
            // MCQ
            const opts = (q.options || []).map((opt, i) => `
                <button class="rf-quiz-opt" onclick="ReadingFocus._mcqAnswer(${i}, ${q.correctIndex})">
                    <span class="rf-opt-key">${String.fromCharCode(65+i)}</span>${opt}
                </button>`).join('');
            container.innerHTML = `
            <div class="screen rf-quiz-screen">
                <div class="rf-quiz-topbar">
                    <button class="btn-exit" onclick="ReadingFocus._exit()">✕</button>
                    <div class="rf-prog-track"><div class="rf-prog-fill" style="width:${(idx/tot)*100}%"></div></div>
                    <span class="rf-prog-label">${idx+1}/${tot}</span>
                </div>
                <div class="rf-quiz-body">
                    <div class="rf-quiz-badge">${_ic('scroll',{size:'sm',color:'brand'})} Mini-quiz</div>
                    <div class="rf-quiz-q">${q.question}</div>
                    <div class="rf-quiz-opts">${opts}</div>
                </div>
            </div>`;
        }
    },

    _revealAnswer() {
        document.getElementById('rf-reveal-btn')?.classList.add('hidden');
        document.getElementById('rf-quiz-answer')?.classList.remove('hidden');
        document.getElementById('rf-quiz-self')?.classList.remove('hidden');
    },

    _selfScore(knew) {
        if (knew) this._quizScore++;
        this._quizIdx++;
        const container = document.getElementById('app-container');
        if (container) this._renderQuizItem(container);
    },

    _mcqAnswer(selected, correct) {
        document.querySelectorAll('.rf-quiz-opt').forEach((b, i) => {
            b.disabled = true;
            if (i === correct) b.classList.add('rf-opt-correct');
            else if (i === selected) b.classList.add('rf-opt-wrong');
        });
        if (selected === correct) this._quizScore++;
        setTimeout(() => {
            this._quizIdx++;
            const container = document.getElementById('app-container');
            if (container) this._renderQuizItem(container);
        }, 700);
    },

    _renderQuizResults(container, correct, total) {
        const pct = total > 0 ? Math.round((correct / total) * 100) : 100;
        const xp  = 20 + correct * 10;
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        if (typeof State !== 'undefined') State.addXP(xp);
        if (typeof EventsEngine !== 'undefined') EventsEngine.onXPGained(xp);

        container.innerHTML = `
        <div class="screen rf-results-screen">
            <div class="rf-res-hero">
                ${_ic('star',{size:'4xl',color:'brand'})}
                <h2>Leitura concluída!</h2>
                <div class="rf-res-pct">${pct}%</div>
                <div class="rf-res-label">no mini-quiz</div>
            </div>
            <div class="rf-res-stats">
                <div class="rf-res-stat">${_ic('check',{size:'sm',color:'success'})} ${correct}/${total} corretas</div>
                <div class="rf-res-stat">${_ic('xp',{size:'sm',color:'xp'})} +${xp} XP</div>
            </div>
            <div class="rf-res-actions">
                <button class="btn-primary" onclick="Router.navigate('#chapter/${this._chapterId}')">Voltar ao Capítulo</button>
                <button class="btn-secondary" onclick="Router.navigate('#stage/${this._chapterId}/${this._stageId}/1')">Ir para a Missão</button>
            </div>
        </div>`;
    },

    _exit() {
        clearInterval(this._hlTimer);
        clearInterval(this._tipTimer);
        if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
        if (this._chapterId) Router.navigate(`#chapter/${this._chapterId}`);
        else                  Router.navigate('#home');
    },
};

window.ReadingFocus = ReadingFocus;
