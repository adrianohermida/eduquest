/**
 * EDUQUEST FLASHCARD ENGINE v1.0 — Sprint 6B
 * Multisensory: CSS3D flip · Web Speech API TTS · touch swipe · Leitner integration
 */

const FlashcardEngine = {

    // ── ENTRY POINT ──────────────────────────────────────────────

    /**
     * start(opts)
     * opts.cards    — array of card objects (see _normalizeCard)
     * opts.source   — 'memory' | 'ai-studio' | 'free' (controls exit navigation)
     * opts.title    — session title string (optional)
     * opts.onAnswer — fn(card, correct) called after each answer (optional)
     * opts.onDone   — fn(results) called at end (optional, overrides default results screen)
     */
    start(opts = {}) {
        const container = document.getElementById('app-container');
        if (!container) return;

        this._opts    = opts;
        this._allCards = (opts.cards || []).map(c => this._normalizeCard(c)).filter(Boolean);

        if (this._allCards.length === 0) {
            container.innerHTML = `
            <div class="screen fc-empty-screen">
                <div class="fc-empty-body">
                    <div class="fc-empty-icon">📚</div>
                    <h2>Sem cards disponíveis</h2>
                    <p>Complete missões para criar seu banco de flashcards!</p>
                    <button class="btn-primary" onclick="FlashcardEngine._exit()">Voltar</button>
                </div>
            </div>`;
            return;
        }

        // Build unique topic list for filter
        const topics = [...new Set(this._allCards.map(c => c.topic).filter(Boolean))];
        if (topics.length > 1) {
            this._renderFilter(container, topics);
        } else {
            this._beginSession(container, this._allCards);
        }
    },

    // ── CATEGORY FILTER ──────────────────────────────────────────

    _renderFilter(container, topics) {
        const _ic  = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const title = this._opts.title || 'Flashcards';

        container.innerHTML = `
        <div class="screen fc-filter-screen">
            <div class="fc-filter-header">
                <button class="btn-exit" onclick="FlashcardEngine._exit()">✕</button>
                <h2 class="fc-filter-title">${_ic('scroll',{size:'sm',color:'brand'})} ${title}</h2>
            </div>
            <div class="fc-filter-body">
                <p class="fc-filter-label">Escolha um tópico para revisar:</p>
                <div class="fc-topic-grid">
                    <button class="fc-topic-chip fc-topic-all active" onclick="FlashcardEngine._filterSelect(this,'__all__')">
                        Todos <span class="fc-chip-count">${this._allCards.length}</span>
                    </button>
                    ${topics.map(t => {
                        const count = this._allCards.filter(c => c.topic === t).length;
                        return `<button class="fc-topic-chip" onclick="FlashcardEngine._filterSelect(this,'${t.replace(/'/g,"\\'")}')">
                            ${t} <span class="fc-chip-count">${count}</span>
                        </button>`;
                    }).join('')}
                </div>
            </div>
            <div class="fc-filter-footer">
                <button class="btn-primary fc-filter-start-btn" id="fc-filter-start" onclick="FlashcardEngine._filterStart()">
                    ${_ic('sword',{size:'sm'})} Iniciar sessão
                </button>
            </div>
        </div>`;

        this._filterTopic = '__all__';
    },

    _filterSelect(btn, topic) {
        document.querySelectorAll('.fc-topic-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._filterTopic = topic;
    },

    _filterStart() {
        const container = document.getElementById('app-container');
        if (!container) return;
        const filtered = this._filterTopic === '__all__'
            ? this._allCards
            : this._allCards.filter(c => c.topic === this._filterTopic);
        this._beginSession(container, filtered);
    },

    // ── SESSION ───────────────────────────────────────────────────

    _beginSession(container, cards) {
        this._session = {
            cards:    this._shuffled(cards),
            idx:      0,
            correct:  0,
            wrong:    0,
            startedAt: Date.now(),
            isFlipped: false,
        };
        this._renderCard(container);
    },

    _renderCard(container) {
        const { cards, idx } = this._session;
        if (idx >= cards.length) {
            this._showResults(container);
            return;
        }

        const card  = cards[idx];
        const total = cards.length;
        const pct   = Math.round((idx / total) * 100);
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        this._session.isFlipped = false;

        container.innerHTML = `
        <div class="fc-arena" id="fc-arena">
            <div class="fc-topbar">
                <button class="fc-exit-btn" onclick="FlashcardEngine._exit()" aria-label="Sair">✕</button>
                <div class="fc-progress-wrap">
                    <div class="fc-progress-track">
                        <div class="fc-progress-fill" style="width:${pct}%"></div>
                    </div>
                    <span class="fc-counter">${idx + 1}/${total}</span>
                </div>
                <button class="fc-tts-btn" id="fc-tts-btn" onclick="FlashcardEngine._speakCurrent()" title="Ouvir">
                    ${_ic('companion',{size:'sm',color:'brand'})}
                </button>
            </div>

            <div class="fc-scene" id="fc-scene">
                <div class="fc-card" id="fc-card" onclick="FlashcardEngine._flip()" role="button" tabindex="0" aria-label="Toque para revelar resposta">
                    <div class="fc-face fc-front">
                        <div class="fc-face-label">Pergunta</div>
                        ${card.iconId ? `<div class="fc-icon-hint">${_ic(card.iconId,{size:'2xl',color:'brand'})}</div>` : ''}
                        <div class="fc-question-text">${card.question}</div>
                        <div class="fc-topic-tag">${card.topic || ''}</div>
                        <div class="fc-tap-hint">${_ic('companion',{size:'xs',color:'muted'})} Toque para ver a resposta</div>
                    </div>
                    <div class="fc-face fc-back">
                        <div class="fc-face-label">Resposta</div>
                        <div class="fc-answer-text">${card.answer}</div>
                        ${card.explanation ? `<div class="fc-explanation">${card.explanation}</div>` : ''}
                    </div>
                </div>
            </div>

            <div class="fc-swipe-hint" id="fc-swipe-hint">
                <span class="fc-swipe-wrong">← Não sei</span>
                <span class="fc-swipe-correct">Sei →</span>
            </div>

            <div class="fc-actions" id="fc-actions">
                <button class="fc-btn fc-btn-wrong" onclick="FlashcardEngine._answer(false)" aria-label="Não sabia">
                    ${_ic('warning',{size:'sm',color:'danger'})} Não sei
                </button>
                <button class="fc-btn fc-btn-correct" onclick="FlashcardEngine._answer(true)" aria-label="Sabia">
                    ${_ic('check',{size:'sm',color:'success'})} Sei!
                </button>
            </div>

            <div class="fc-answer-pending" id="fc-answer-pending">
                Toque no card para revelar a resposta
            </div>
        </div>`;

        this._setupSwipe(document.getElementById('fc-card'));

        // Keyboard support
        document.getElementById('fc-card')?.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!this._session.isFlipped) this._flip();
            } else if (this._session.isFlipped) {
                if (e.key === 'ArrowRight') this._answer(true);
                if (e.key === 'ArrowLeft')  this._answer(false);
            }
        });
    },

    // ── FLIP ─────────────────────────────────────────────────────

    _flip() {
        if (this._session.isFlipped) return;
        this._session.isFlipped = true;

        const card = document.getElementById('fc-card');
        if (card) card.classList.add('flipped');

        document.getElementById('fc-answer-pending')?.classList.add('hidden');
        document.getElementById('fc-actions')?.classList.add('revealed');

        if (typeof speechSynthesis !== 'undefined') {
            const c = this._session.cards[this._session.idx];
            this._speak(c.answer);
        }
    },

    // ── ANSWER ───────────────────────────────────────────────────

    _answer(correct) {
        if (!this._session.isFlipped) {
            this._flip();
            return;
        }

        const card = this._session.cards[this._session.idx];

        if (correct) this._session.correct++;
        else          this._session.wrong++;

        // Leitner/MemoryEngine callback
        if (typeof MemoryEngine !== 'undefined' && card._leitnerKey) {
            MemoryEngine.processAnswer(card.chapterId, card.stageId, card.qIdx, correct, 0, card.question, card.answer, card.topic);
        }

        // User-provided callback
        if (typeof this._opts.onAnswer === 'function') {
            this._opts.onAnswer(card, correct);
        }

        // Visual feedback swipe-out
        const fcCard = document.getElementById('fc-card');
        if (fcCard) {
            fcCard.classList.add(correct ? 'fc-exit-right' : 'fc-exit-left');
        }

        if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();

        setTimeout(() => {
            this._session.idx++;
            const container = document.getElementById('app-container');
            if (container) this._renderCard(container);
        }, 280);
    },

    // ── TTS ──────────────────────────────────────────────────────

    _speak(text, lang = 'pt-BR') {
        if (!window.speechSynthesis) return;
        speechSynthesis.cancel();
        const u   = new SpeechSynthesisUtterance(text);
        u.lang    = lang;
        u.rate    = 0.88;
        u.pitch   = 1;
        speechSynthesis.speak(u);
    },

    _speakCurrent() {
        const c = this._session?.cards?.[this._session.idx];
        if (!c) return;
        const text = this._session.isFlipped ? c.answer : c.question;
        this._speak(text);
    },

    // ── SWIPE ────────────────────────────────────────────────────

    _setupSwipe(el) {
        if (!el) return;
        let sx = 0, sy = 0, sTime = 0, isDragging = false;
        let startX = 0;

        el.addEventListener('touchstart', e => {
            sx     = e.touches[0].clientX;
            sy     = e.touches[0].clientY;
            sTime  = Date.now();
            startX = sx;
            isDragging = true;
        }, { passive: true });

        el.addEventListener('touchmove', e => {
            if (!isDragging || !this._session.isFlipped) return;
            const dx = e.touches[0].clientX - startX;
            if (Math.abs(dx) > 10) {
                el.style.transform = `rotateY(180deg) translateX(${-dx * 0.4}px) rotate(${dx * 0.04}deg)`;
            }
        }, { passive: true });

        el.addEventListener('touchend', e => {
            isDragging = false;
            el.style.transform = '';
            const dx   = e.changedTouches[0].clientX - sx;
            const dy   = e.changedTouches[0].clientY - sy;
            const dt   = Date.now() - sTime;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 55 && dt < 450) {
                if (this._session.isFlipped) {
                    this._answer(dx > 0);
                } else {
                    this._flip();
                }
            }
        }, { passive: true });
    },

    // ── RESULTS ──────────────────────────────────────────────────

    _showResults(container) {
        const s      = this._session;
        const total  = s.correct + s.wrong;
        const pct    = total > 0 ? Math.round((s.correct / total) * 100) : 0;
        const xp     = s.correct * 8;
        const _ic    = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const stars  = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;

        if (xp > 0 && typeof State !== 'undefined') {
            State.addXP(xp);
            if (typeof EventsEngine !== 'undefined') EventsEngine.onXPGained(xp);
        }

        if (typeof this._opts.onDone === 'function') {
            this._opts.onDone({ correct: s.correct, wrong: s.wrong, pct, xp });
            return;
        }

        const exitRoute = this._opts.source === 'memory' ? '#memory' :
                          this._opts.source === 'ai-studio' ? '#ai-studio' : '#memory';

        container.innerHTML = `
        <div class="screen fc-results-screen">
            <div class="fc-res-hero">
                <div class="fc-res-stars">
                    ${[1,2,3].map(n => `
                    <span class="fc-res-star ${n <= stars ? 'lit' : ''}">
                        ${_ic('star',{size:'xl',color: n <= stars ? 'brand' : 'muted'})}
                    </span>`).join('')}
                </div>
                <h2>Sessão concluída!</h2>
                <div class="fc-res-pct">${pct}%</div>
                <div class="fc-res-pct-lbl">de acerto</div>
            </div>
            <div class="fc-res-grid">
                <div class="fc-res-cell">
                    <div class="fc-res-val fc-rv-c">${s.correct}</div>
                    <div class="fc-res-lbl">sabia</div>
                </div>
                <div class="fc-res-cell">
                    <div class="fc-res-val fc-rv-w">${s.wrong}</div>
                    <div class="fc-res-lbl">revisar</div>
                </div>
                <div class="fc-res-cell">
                    <div class="fc-res-val">${total}</div>
                    <div class="fc-res-lbl">cards</div>
                </div>
                <div class="fc-res-cell">
                    <div class="fc-res-val fc-rv-xp">+${xp}</div>
                    <div class="fc-res-lbl">XP</div>
                </div>
            </div>
            <div class="fc-res-actions">
                <button class="btn-primary" onclick="Router.navigate('${exitRoute}')">Ver Memória</button>
                <button class="btn-secondary" onclick="FlashcardEngine.start(FlashcardEngine._opts)">Repetir sessão</button>
            </div>
        </div>`;
    },

    // ── UTILS ─────────────────────────────────────────────────────

    _exit() {
        if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
        const exitRoute = this._opts?.source === 'ai-studio' ? '#ai-studio' : '#memory';
        Router.navigate(exitRoute);
    },

    _shuffled(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    _normalizeCard(raw) {
        if (!raw) return null;
        // Already normalized (from Leitner or AI studio)
        if (raw.question && raw.answer) {
            return {
                question:    raw.question.slice(0, 200),
                answer:      raw.answer.slice(0, 200),
                topic:       raw.topic   || 'Geral',
                iconId:      raw.iconId  || null,
                explanation: raw.explanation || null,
                chapterId:   raw.chapterId   || null,
                stageId:     raw.stageId     || null,
                qIdx:        raw.qIdx        ?? null,
                _leitnerKey: raw.key         || raw._leitnerKey || null,
            };
        }
        // Stage question format: { question, options, correctIndex, topic, explanation }
        if (raw.question && Array.isArray(raw.options) && raw.correctIndex !== undefined) {
            return {
                question:    raw.question.slice(0, 200),
                answer:      (raw.options[raw.correctIndex] || '').slice(0, 200),
                topic:       raw.topic || raw.tags?.[0] || 'Geral',
                iconId:      null,
                explanation: raw.explanation || null,
                chapterId:   null,
                stageId:     null,
                qIdx:        null,
                _leitnerKey: null,
            };
        }
        return null;
    },

    // ── STATIC BUILDER: cards from Leitner boxes ─────────────────

    buildCardsFromMemory(n = 30) {
        if (typeof MemoryEngine === 'undefined' || typeof State === 'undefined') return [];
        const due     = MemoryEngine.getDueCards().slice(0, n);
        const allKeys = Object.keys(State.data.leitnerBoxes || {});
        const rest    = allKeys
            .map(k => State.data.leitnerBoxes[k])
            .filter(c => !due.find(d => d.key === c.key))
            .slice(0, Math.max(0, n - due.length));
        return [...due, ...rest].map(c => ({ ...c, key: c.key }));
    },

    // ── STATIC BUILDER: cards from AI Study Sets ─────────────────

    buildCardsFromStudySet(setIdx) {
        if (typeof State === 'undefined') return [];
        const sets = State.data.aiStudySets || [];
        const set  = sets[setIdx];
        if (!set?.questions) return [];
        return set.questions.map(q => ({
            question:  q.question || '',
            answer:    q.options?.[q.correctIndex] || q.answer || '',
            topic:     set.topic || 'AI Studio',
            iconId:    'ai-tutor',
        }));
    },
};

window.FlashcardEngine = FlashcardEngine;
