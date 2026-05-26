/**
 * EDUQUEST AI STUDIO v1.0
 * Text → Quiz generator. "MMORPG Illusion" — feels like AI, runs offline.
 * Parses pasted text and generates multiple-choice questions deterministically.
 */

const AIStudio = {

    MIN_SENTENCE_LEN: 25,

    get maxQuestions() {
        if (typeof State === 'undefined') return 7;
        if (State.isAdmin())   return 50;
        if (State.isPremium()) return 20;
        return 7;
    },

    // ── PDF OCR ────────────────────────────────────────────────────

    async extractFromPDF(file) {
        if (typeof pdfjsLib === 'undefined') throw new Error('PDF.js não disponível');
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        const buffer = await file.arrayBuffer();
        const pdf    = await pdfjsLib.getDocument({ data: buffer }).promise;
        const maxPg  = Math.min(pdf.numPages, 30);
        let text = '';
        for (let i = 1; i <= maxPg; i++) {
            const page    = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + '\n\n';
        }
        return text.trim();
    },

    // ── PUBLIC API ─────────────────────────────────────────────────

    analyze(text, onDone) {
        setTimeout(() => {
            const questions = this._generateQuestions(text);
            onDone(questions);
        }, 1800 + Math.floor(Math.random() * 800));
    },

    saveStudySet(name, text, questions, meta = {}) {
        if (typeof State === 'undefined') return null;
        const limit = State.isAdmin() ? 100 : State.isPremium() ? 30 : 10;
        const set = {
            id:        `ai_${Date.now()}`,
            name:      name || 'Estudo Personalizado',
            createdAt: Date.now(),
            text:      text.slice(0, 5000),
            questions,
            ...meta,
        };
        if (!State.data.aiStudySets) State.data.aiStudySets = [];
        State.data.aiStudySets.unshift(set);
        if (State.data.aiStudySets.length > limit) State.data.aiStudySets.length = limit;
        State.save();
        return set;
    },

    // Convert a study set into a GameEngine-compatible stage object
    setToStage(set) {
        if (!set) return null;
        return {
            id:                set.id,
            title:             set.name,
            icon:              '🤖',
            difficulty:        'normal',
            estimatedTime:     Math.max(5, Math.ceil(set.questions.length * 0.5)),
            learningObjectives: [],
            questions:         set.questions.map(q => ({
                question:     q.text,
                options:      q.options,
                correctIndex: q.correctIndex,
                topic:        'AI Studio',
            })),
            rewards:  { xp: 20 + set.questions.length * 10, gems: Math.floor(set.questions.length / 2) },
            summary:  { flashcards: [], mnemonics: [], content: [] },
            _isAISet: true,
        };
    },

    getStudySets() {
        if (typeof State === 'undefined') return [];
        return State.data.aiStudySets || [];
    },

    deleteStudySet(id) {
        if (typeof State === 'undefined') return;
        State.data.aiStudySets = (State.data.aiStudySets || []).filter(s => s.id !== id);
        State.save();
    },

    // ── QUESTION GENERATION ────────────────────────────────────────

    _generateQuestions(text) {
        const sentences = this._getSentences(text);
        if (sentences.length < 2) return [];

        const questions = [];
        const seed      = this._hashText(text);

        // Strategy 1: Definition questions ("X é/são Y")
        sentences.forEach(s => {
            if (questions.length >= this.maxQuestions) return;
            const m = s.match(/^(.{3,40}?)\s+(é|são|consiste em|representa|define-se como|pode ser definido como)\s+(.{10,})/i);
            if (!m) return;
            const subject   = m[1].trim();
            const verb      = m[2];
            const predicate = m[3].replace(/[.!?:;]$/, '').trim();
            const distractors = this._getDistractors(predicate, sentences, seed);
            if (distractors.length < 3) return;
            const opts = this._shuffle([predicate, ...distractors.slice(0, 3)], seed + questions.length);
            questions.push({
                text:         `Segundo o texto, "${subject}" ${verb}:`,
                options:      opts,
                correctIndex: opts.indexOf(predicate),
                type:         'definition',
            });
        });

        // Strategy 2: Comprehension — "Qual está correta segundo o texto?"
        const eligible = sentences.filter(s => s.length >= this.MIN_SENTENCE_LEN && s.length <= 200);
        const picked   = this._seededPick(eligible, 3, seed);
        picked.forEach(s => {
            if (questions.length >= this.maxQuestions) return;
            const correct     = s.replace(/[.!?]$/, '').trim();
            const distorted   = this._distortSentence(s, sentences, seed);
            const other       = this._getDistractors(correct, sentences, seed + 1).slice(0, 2);
            if (!distorted || other.length < 2) return;
            const opts = this._shuffle([correct, distorted, ...other], seed + questions.length + 10);
            questions.push({
                text:         'Qual das alternativas está CORRETA segundo o texto?',
                options:      opts,
                correctIndex: opts.indexOf(correct),
                type:         'comprehension',
            });
        });

        // Strategy 3: Keyword fill-in-the-blank
        const terms = this._extractTopTerms(text, 8);
        sentences.forEach(s => {
            if (questions.length >= this.maxQuestions) return;
            const lowerS = s.toLowerCase();
            const term   = terms.find(t => lowerS.includes(t.toLowerCase()) && t.length >= 4);
            if (!term) return;
            const blank    = s.replace(new RegExp(term, 'i'), '______');
            if (blank === s) return;
            const others   = terms.filter(t => t !== term).slice(0, 3);
            if (others.length < 3) return;
            const opts     = this._shuffle([term, ...others], seed + questions.length + 20);
            questions.push({
                text:         `Complete a lacuna: "${blank.trim().replace(/[.!?]$/, '')}"`,
                options:      opts,
                correctIndex: opts.indexOf(term),
                type:         'blank',
            });
        });

        return questions.slice(0, this.maxQuestions);
    },

    _getSentences(text) {
        return (text.match(/[^.!?\n]+[.!?]/g) || [])
            .map(s => s.trim())
            .filter(s => s.length >= this.MIN_SENTENCE_LEN);
    },

    _extractTopTerms(text, n) {
        const words = (text.match(/\b[A-Za-zÀ-ú]{4,}\b/g) || []);
        const freq  = {};
        const stop  = new Set(['para','pelo','pela','como','este','esta','isso','esse','essa','mais','quando','onde','qual','quais','como','que','não','com','sem','por','uma','um','são','ser','ter','tem','foi','após','antes','seus','suas','muito','mais','menos','sobre','entre','cada','toda','todo','deste','desta','numa','num']);
        words.forEach(w => {
            const k = w.toLowerCase();
            if (!stop.has(k)) freq[k] = (freq[k] || 0) + 1;
        });
        return Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, n)
            .map(([w]) => w);
    },

    _getDistractors(correct, sentences, seed) {
        const pool = sentences
            .map(s => s.replace(/[.!?]$/, '').trim())
            .filter(s => s !== correct && s.length >= 10 && s.length <= correct.length * 3);
        const shuffled = this._shuffle(pool, seed);
        return shuffled.slice(0, 5);
    },

    _distortSentence(sentence, sentences, seed) {
        const terms = this._extractTopTerms(sentence, 4);
        if (terms.length < 2) return null;
        const allTerms = this._extractTopTerms(sentences.join(' '), 12);
        const others   = allTerms.filter(t => !terms.includes(t));
        if (!others.length) return null;

        const rng    = this._seededRng(seed);
        const idx    = Math.floor(rng() * terms.length);
        const repl   = others[Math.floor(rng() * others.length)];
        const re     = new RegExp(terms[idx], 'i');
        return sentence.replace(re, repl).replace(/[.!?]$/, '').trim();
    },

    _seededPick(arr, n, seed) {
        const out = [];
        const rng = this._seededRng(seed);
        const copy = [...arr];
        while (out.length < n && copy.length) {
            const i = Math.floor(rng() * copy.length);
            out.push(copy.splice(i, 1)[0]);
        }
        return out;
    },

    _shuffle(arr, seed) {
        const out = [...arr];
        const rng = this._seededRng(seed || 42);
        for (let i = out.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
    },

    _seededRng(seed) {
        let s = (seed || 1) & 0x7fffffff;
        return () => {
            s = (s * 1664525 + 1013904223) & 0x7fffffff;
            return s / 0x80000000;
        };
    },

    _hashText(text) {
        let h = 0;
        for (let i = 0; i < Math.min(text.length, 500); i++) {
            h = ((h << 5) - h) + text.charCodeAt(i);
            h |= 0;
        }
        return Math.abs(h);
    },
};

window.AIStudio = AIStudio;
