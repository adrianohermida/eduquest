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
};

window.DeepFocus = DeepFocus;

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
