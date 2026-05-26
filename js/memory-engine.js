/**
 * EDUQUEST MEMORY ENGINE v1.0 — Sprint 6A
 * Leitner 5-box + SM-2 algorithm + Ebbinghaus forgetting curve
 * processAnswer() hooks into GameEngine; renderMemoryScreen() is a router destination
 */

const MemoryEngine = {
    // Leitner box review intervals in days
    BOX_INTERVALS: [0, 1, 3, 7, 14, 30],  // index = box number (1-5)

    // ── CORE: process a single answer ────────────────────────────

    processAnswer(chapterId, stageId, qIdx, correct, responseTimeSecs, questionText, answerText, topic) {
        if (typeof State === 'undefined') return;
        if (!State.data.leitnerBoxes) State.data.leitnerBoxes = {};

        const key  = `${chapterId}/${stageId}/${qIdx}`;
        const now  = Date.now();
        let   card = State.data.leitnerBoxes[key];

        if (!card) {
            card = {
                key, chapterId, stageId, qIdx,
                question:   (questionText || '').slice(0, 120),
                answer:     (answerText   || '').slice(0, 80),
                topic:      topic || 'Geral',
                box:        1,
                reps:       0,
                easiness:   2.5,
                interval:   1,
                nextReview: now,
                lastReview: 0,
                createdAt:  now,
            };
            State.data.leitnerBoxes[key] = card;
        }

        const quality = correct ? this._qualityFromTime(responseTimeSecs) : 1;

        if (correct) {
            // Advance box (Leitner)
            card.box      = Math.min(5, card.box + 1);
            // SM-2
            card.reps++;
            if (card.reps === 1)      card.interval = 1;
            else if (card.reps === 2) card.interval = 6;
            else                      card.interval = Math.round(card.interval * card.easiness);
        } else {
            // Drop to box 1 (Leitner)
            card.box      = 1;
            card.reps     = 0;
            card.interval = 1;
        }

        // SM-2 easiness update (clamped to ≥1.3)
        card.easiness = Math.max(1.3,
            card.easiness + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
        );

        card.lastReview = now;
        card.nextReview = now + card.interval * 86400000;

        State.save();
    },

    // Quality score 1-5 from response time (used in SM-2 easiness calc)
    _qualityFromTime(secs) {
        if (!secs || secs <= 0) return 3;
        if (secs < 2)  return 5;
        if (secs < 5)  return 4;
        if (secs < 10) return 3;
        return 2;
    },

    // ── QUERY METHODS ────────────────────────────────────────────

    getDueCards() {
        const boxes = State.data.leitnerBoxes || {};
        const now   = Date.now();
        return Object.values(boxes).filter(c => c.nextReview <= now);
    },

    getUrgentCards(n = 10) {
        const now  = Date.now();
        const boxes = State.data.leitnerBoxes || {};
        return Object.values(boxes)
            .filter(c => c.nextReview <= now)
            .sort((a, b) => {
                const retA = this._retention(a, now);
                const retB = this._retention(b, now);
                return retA - retB; // lowest retention first
            })
            .slice(0, n);
    },

    // ── ANALYTICS ────────────────────────────────────────────────

    _retention(card, now) {
        if (!card.lastReview) return 0;
        const stability = this.BOX_INTERVALS[card.box] || 1;
        const daysSince = (now - card.lastReview) / 86400000;
        return Math.exp(-daysSince / stability);
    },

    getMemoryHeatmap() {
        const boxes = State.data.leitnerBoxes || {};
        const now   = Date.now();
        const topicMap = {};

        for (const card of Object.values(boxes)) {
            const t = card.topic || 'Geral';
            if (!topicMap[t]) topicMap[t] = { topic: t, cards: 0, retention: 0, weakCards: 0 };
            const ret = this._retention(card, now);
            topicMap[t].cards++;
            topicMap[t].retention += ret;
            if (ret < 0.5) topicMap[t].weakCards++;
        }

        return Object.values(topicMap).map(t => ({
            ...t,
            avgRetention: t.cards > 0 ? t.retention / t.cards : 0,
        })).sort((a, b) => a.avgRetention - b.avgRetention);
    },

    detectIssues() {
        return this.getMemoryHeatmap()
            .filter(t => t.avgRetention < 0.5 && t.cards >= 2)
            .map(t => ({
                topic:      t.topic,
                retention:  Math.round(t.avgRetention * 100),
                weakCards:  t.weakCards,
                suggestion: `Revisar "${t.topic}" — ${t.weakCards} card${t.weakCards > 1 ? 's' : ''} esquecendo`,
            }));
    },

    getReviewSuggestions() {
        const due    = this.getDueCards().length;
        const issues = this.detectIssues();
        const result = [];
        if (due > 0)          result.push({ type: 'review',  msg: `${due} card${due > 1 ? 's' : ''} para revisar hoje` });
        if (issues.length > 0) result.push({ type: 'weak',   msg: issues[0].suggestion });
        if (result.length === 0) result.push({ type: 'good', msg: 'Memória em dia! Continue assim.' });
        return result;
    },

    getMasteryScore() {
        const boxes = State.data.leitnerBoxes || {};
        const cards = Object.values(boxes);
        if (cards.length === 0) return 0;
        const now   = Date.now();
        const total = cards.reduce((sum, c) => sum + this._retention(c, now), 0);
        return Math.round((total / cards.length) * 100);
    },

    getBoxStats() {
        const boxes = State.data.leitnerBoxes || {};
        const counts = [0, 0, 0, 0, 0]; // box 1-5
        for (const c of Object.values(boxes)) counts[c.box - 1]++;
        return counts;
    },

    getTotalCards() { return Object.keys(State.data.leitnerBoxes || {}).length; },

    // ── SCREEN RENDERER ──────────────────────────────────────────

    renderMemoryScreen(container) {
        const mastery  = this.getMasteryScore();
        const due      = this.getDueCards().length;
        const total    = this.getTotalCards();
        const boxStats = this.getBoxStats();
        const heatmap  = this.getMemoryHeatmap();
        const issues   = this.detectIssues();
        const _ic      = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const masteryColor = mastery >= 75 ? 'var(--success)' : mastery >= 50 ? 'var(--brand)' : 'var(--danger)';

        const heatmapRows = heatmap.length === 0
            ? `<div class="mem-empty">${_ic('scroll',{size:'lg',color:'muted'})} <p>Estude missões para gerar dados de memória.</p></div>`
            : heatmap.map(t => {
                const pct   = Math.round(t.avgRetention * 100);
                const color = pct >= 75 ? 'success' : pct >= 50 ? 'warn' : 'danger';
                return `
                <div class="mem-topic-row">
                    <div class="mem-topic-name">${t.topic}</div>
                    <div class="mem-topic-bar-wrap">
                        <div class="mem-topic-bar mem-bar-${color}" style="width:${pct}%"></div>
                    </div>
                    <div class="mem-topic-pct mem-pct-${color}">${pct}%</div>
                    <div class="mem-topic-cards">${t.cards} card${t.cards !== 1 ? 's' : ''}</div>
                </div>`;
            }).join('');

        const issueCards = issues.slice(0, 3).map(i => `
            <div class="mem-issue-card">
                ${_ic('warning',{size:'sm',color:'danger'})}
                <span>${i.suggestion}</span>
            </div>`).join('');

        const boxLabels = ['Diário','3 dias','7 dias','14 dias','Mensal'];

        container.innerHTML = `
        <div class="screen memory-screen">
            <div class="mem-hero">
                <div class="mem-hero-top">
                    <h1 class="mem-title">${_ic('scroll',{size:'lg',color:'brand'})} Memória</h1>
                    <button class="btn-secondary mem-drill-btn" onclick="Router.navigate('#speed-drill')">
                        ${_ic('sword',{size:'sm'})} Speed Drill
                    </button>
                </div>
                <div class="mem-mastery-ring-wrap">
                    <div class="mem-mastery-ring" style="--mastery-pct:${mastery};--mastery-color:${masteryColor}">
                        <div class="mem-mastery-val">${mastery}%</div>
                        <div class="mem-mastery-lbl">domínio</div>
                    </div>
                    <div class="mem-stats-col">
                        <div class="mem-stat"><span class="mem-stat-val">${total}</span><span class="mem-stat-lbl">cards</span></div>
                        <div class="mem-stat mem-due ${due > 0 ? 'has-due' : ''}">
                            <span class="mem-stat-val">${due}</span><span class="mem-stat-lbl">para hoje</span>
                        </div>
                    </div>
                </div>
                ${due > 0 ? `
                <button class="btn-primary mem-review-btn" onclick="MemoryEngine._startReviewSession()">
                    ${_ic('star',{size:'sm'})} Revisar ${due} card${due > 1 ? 's' : ''} agora
                </button>` : `
                <div class="mem-all-done">
                    ${_ic('check',{size:'sm',color:'success'})} Tudo revisado por hoje!
                </div>`}
            </div>

            <div class="mem-boxes-section">
                <h2 class="mem-section-title">Caixas de Leitner</h2>
                <div class="mem-boxes-grid">
                    ${boxStats.map((count, i) => `
                    <div class="mem-box-card mem-box-${i+1}">
                        <div class="mem-box-num">${i+1}</div>
                        <div class="mem-box-count">${count}</div>
                        <div class="mem-box-interval">${boxLabels[i]}</div>
                    </div>`).join('')}
                </div>
            </div>

            ${issues.length > 0 ? `
            <div class="mem-issues-section">
                <h2 class="mem-section-title">${_ic('warning',{size:'sm',color:'danger'})} Requer atenção</h2>
                <div class="mem-issues-list">${issueCards}</div>
            </div>` : ''}

            <div class="mem-heatmap-section">
                <h2 class="mem-section-title">Mapa de Retenção por Tópico</h2>
                <div class="mem-heatmap">${heatmapRows}</div>
            </div>
        </div>`;
    },

    // ── REVIEW SESSION — delegates to FlashcardEngine (Sprint 6B) ──

    _startReviewSession() {
        const due = this.getDueCards().slice(0, 20);
        if (due.length === 0) return;

        if (typeof FlashcardEngine !== 'undefined') {
            FlashcardEngine.start({
                cards:  due,
                source: 'memory',
                title:  `Revisão (${due.length} card${due.length > 1 ? 's' : ''})`,
            });
        } else {
            // Fallback: plain text review (FlashcardEngine not loaded)
            this._reviewQueue = [...due];
            this._reviewIdx   = 0;
            this._reviewScore = { correct: 0, wrong: 0 };
            this._renderReviewCardFallback();
        }
    },

    _renderReviewCardFallback() {
        const container = document.getElementById('app-container');
        if (!container) return;
        if (this._reviewIdx >= this._reviewQueue.length) {
            const s   = this._reviewScore;
            const xp  = s.correct * 5;
            if (xp > 0 && typeof State !== 'undefined') State.addXP(xp);
            container.innerHTML = `<div class="screen"><div style="padding:32px;text-align:center">
                <h2>Revisão concluída!</h2>
                <p>${s.correct} corretas · +${xp} XP</p>
                <button class="btn-primary" onclick="Router.navigate('#memory')">Ver Memória</button>
            </div></div>`;
            return;
        }
        const card = this._reviewQueue[this._reviewIdx];
        container.innerHTML = `
        <div class="screen review-session-screen">
            <div class="rev-topbar">
                <button class="btn-exit" onclick="Router.navigate('#memory')">✕</button>
                <div class="rev-progress-track">
                    <div class="rev-progress-fill" style="width:${(this._reviewIdx/this._reviewQueue.length)*100}%"></div>
                </div>
                <div class="rev-counter">${this._reviewIdx+1}/${this._reviewQueue.length}</div>
            </div>
            <div class="rev-card-wrap">
                <div class="rev-card" id="rev-card">
                    <div class="rev-topic-badge">${card.topic}</div>
                    <div class="rev-question">${card.question || 'Questão'}</div>
                    <div class="rev-flip-hint">Toque para revelar</div>
                    <div class="rev-answer hidden" id="rev-answer">${card.answer || 'Resposta'}</div>
                    <div class="rev-actions hidden" id="rev-actions">
                        <button class="rev-btn-wrong" onclick="MemoryEngine._reviewAnswerFallback(false)">Errei</button>
                        <button class="rev-btn-correct" onclick="MemoryEngine._reviewAnswerFallback(true)">Acertei</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.getElementById('rev-card')?.addEventListener('click', () => {
            document.getElementById('rev-answer')?.classList.remove('hidden');
            document.getElementById('rev-actions')?.classList.remove('hidden');
            document.querySelector('.rev-flip-hint')?.classList.add('hidden');
        });
    },

    _reviewAnswerFallback(correct) {
        const card = this._reviewQueue[this._reviewIdx];
        this.processAnswer(card.chapterId, card.stageId, card.qIdx, correct, 0, card.question, card.answer, card.topic);
        if (correct) this._reviewScore.correct++;
        else          this._reviewScore.wrong++;
        this._reviewIdx++;
        this._renderReviewCardFallback();
    },

    // ── QUESTION POOL FOR SPEED DRILL ────────────────────────────

    getSpeedDrillPool(limit = 30) {
        const pool = [];

        // 1. Urgent cards from Leitner (prioritized)
        const urgent = this.getUrgentCards(10);
        for (const card of urgent) {
            // We need the actual question with options — try to find it in stage globals
            const q = this._resolveQuestion(card);
            if (q) pool.push(q);
        }

        // 2. Recent wrong answers
        if (typeof State !== 'undefined') {
            const review = State.getReviewQuestions(10);
            for (const q of review) {
                if (pool.length >= limit) break;
                if (!pool.find(p => p._key === (q._key || q.question))) pool.push(q);
            }
        }

        // 3. Fill from stage globals
        if (pool.length < limit) {
            const stageQs = this._getRandomStageQuestions(limit - pool.length);
            for (const q of stageQs) {
                if (!pool.find(p => p.question === q.question)) pool.push(q);
            }
        }

        return pool.slice(0, limit);
    },

    _resolveQuestion(card) {
        const stageVar = card.stageId ? card.stageId.toUpperCase().replace(/-/g, '_') : null;
        if (!stageVar) return null;
        const stage = window[stageVar];
        if (!stage?.questions) return null;
        const q = stage.questions[card.qIdx];
        if (!q || !q.options) return null;
        return { ...q, _leitnerKey: card.key, topic: card.topic };
    },

    _getRandomStageQuestions(n) {
        const all = [];
        for (const key of Object.keys(window)) {
            const val = window[key];
            if (val && typeof val === 'object' && Array.isArray(val.questions) && val.questions.length > 0) {
                for (const q of val.questions) {
                    if (q && q.options && Array.isArray(q.options) && q.options.length >= 2) {
                        all.push({ ...q, _stageKey: key });
                    }
                }
            }
        }
        // Fisher-Yates shuffle
        for (let i = all.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [all[i], all[j]] = [all[j], all[i]];
        }
        return all.slice(0, n);
    },
};

window.MemoryEngine = MemoryEngine;
