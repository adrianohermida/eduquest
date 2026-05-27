/**
 * EDUQUEST SUPABASE CLIENT v2.0
 * Auth + Cloud sync — email/password, magic link, OTP, password reset
 */

const SUPA_URL = 'https://vjnwuowgxyzrfomykdxu.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqbnd1b3dneHl6cmZvbXlrZHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTY5NjQsImV4cCI6MjA5NTI5Mjk2NH0.rtgXikCvBUp-eChPue4U_5aDcmj67-NwrhcYD17HFdA';
const APP_URL  = 'https://adrianohermida.github.io/eduquest/';

let _client = null;

function getClient() {
    if (!_client) {
        if (typeof window.supabase === 'undefined') {
            console.warn('SupaClient: supabase-js not loaded yet');
            return null;
        }
        _client = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
            auth: {
                persistSession:    true,
                autoRefreshToken:  true,
                detectSessionInUrl: true,
            }
        });
    }
    return _client;
}

// ── AUTH ──────────────────────────────────────────────────────
const SupaAuth = {
    async signUp(email, password, name) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.auth.signUp({
            email, password,
            options: { data: { name }, emailRedirectTo: APP_URL }
        });
    },

    async signIn(email, password) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.auth.signInWithPassword({ email, password });
    },

    async sendMagicLink(email) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: APP_URL }
        });
    },

    async sendOTP(email) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.signInWithOtp({
            email,
            options: { shouldCreateUser: true }
        });
    },

    async verifyOTP(email, token) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.verifyOtp({ email, token, type: 'email' });
    },

    async resetPassword(email) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.resetPasswordForEmail(email, { redirectTo: APP_URL });
    },

    async updatePassword(newPassword) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.updateUser({ password: newPassword });
    },

    async signOut() {
        const c = getClient(); if (!c) return { error: null };
        return c.auth.signOut();
    },

    async getSession() {
        const c = getClient(); if (!c) return null;
        const { data: { session } } = await c.auth.getSession();
        return session;
    },

    onAuthChange(callback) {
        const c = getClient();
        if (!c) return { data: { subscription: { unsubscribe: () => {} } } };
        return c.auth.onAuthStateChange(callback);
    }
};

// ── DATABASE ──────────────────────────────────────────────────
const SupaDB = {
    async loadProfile(userId) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.from('profiles').select('*').eq('id', userId).single();
    },

    async saveProfile(userId, updates) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.from('profiles')
            .upsert({ id: userId, ...updates }, { onConflict: 'id' })
            .select().single();
    },

    async loadProgress(userId) {
        const c = getClient(); if (!c) return { data: [], error: null };
        return c.from('user_progress').select('*').eq('user_id', userId);
    },

    async upsertProgress(userId, chapterId, stageIndex, stars, completedAt) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.from('user_progress').upsert({
            user_id:      userId,
            chapter_id:   chapterId,
            stage_index:  stageIndex,
            completed:    true,
            stars,
            completed_at: completedAt
        }, { onConflict: 'user_id,chapter_id,stage_index' });
    },

    // ── TEAMS ────────────────────────────────────────────
    async createTeam(name, ownerId) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        const code = Math.random().toString(36).slice(2, 8).toUpperCase();
        const { data: team, error } = await c
            .from('teams')
            .insert({ name, code, owner_id: ownerId })
            .select().single();
        if (!error && team) {
            await c.from('team_members').insert({ team_id: team.id, user_id: ownerId, role: 'owner' });
        }
        return { data: team, error };
    },

    async joinTeamByCode(code, userId) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        const { data: team, error: tErr } = await c
            .from('teams').select('id, name, code').eq('code', code.toUpperCase()).single();
        if (tErr || !team) return { data: null, error: { message: 'Código inválido ou turma não encontrada.' } };
        const { data, error } = await c
            .from('team_members')
            .insert({ team_id: team.id, user_id: userId, role: 'student' })
            .select().single();
        return { data: data ? { ...data, team } : null, error };
    },

    async getMyTeams(userId) {
        const c = getClient(); if (!c) return { data: [], error: null };
        return c.from('team_members')
            .select('role, joined_at, teams(id, name, code, owner_id)')
            .eq('user_id', userId);
    },

    async getTeamMembers(teamId) {
        const c = getClient(); if (!c) return { data: [], error: null };
        return c.from('team_members')
            .select('role, joined_at, profiles(id, name, level, xp, streak)')
            .eq('team_id', teamId)
            .order('role', { ascending: false });
    },

    async renameTeam(teamId, newName) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.from('teams').update({ name: newName }).eq('id', teamId).select().single();
    },

    async leaveTeam(teamId, userId) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.from('team_members').delete().eq('team_id', teamId).eq('user_id', userId);
    },

    async deleteTeam(teamId) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.from('teams').delete().eq('id', teamId);
    },

    async getRanking(limit = 20) {
        const c = getClient(); if (!c) return { data: [], error: null };
        return c.from('profiles')
            .select('id, name, level, xp, streak, avatar')
            .order('xp', { ascending: false })
            .limit(limit);
    },

    // ── GAME SESSIONS ────────────────────────────────────
    /**
     * Persist a completed game session.
     * Table: game_sessions
     *   id uuid pk, user_id uuid, chapter_id text, stage_index int,
     *   stage_id text, score int, stars int, correct_count int,
     *   total_questions int, peak_combo int, victory bool,
     *   duration_ms int, played_at timestamptz
     */
    async saveGameSession(userId, {
        chapterId, stageIndex, stageId, score, stars,
        correctCount, totalQuestions, peakCombo, victory, durationMs,
        battleLevel
    }) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        const row = {
            user_id:         userId,
            chapter_id:      chapterId,
            stage_index:     stageIndex,
            stage_id:        stageId,
            score:           score          || 0,
            stars:           stars          || 0,
            correct_count:   correctCount   || 0,
            total_questions: totalQuestions || 0,
            peak_combo:      peakCombo      || 0,
            victory:         !!victory,
            duration_ms:     durationMs     || 0,
            played_at:       new Date().toISOString()
        };
        // Only set battle_level when explicitly provided (classic mode = null)
        if (battleLevel) row.battle_level = battleLevel;
        return c.from('game_sessions').insert(row);
    },

    /**
     * Persist a wrong answer for spaced-repetition review.
     * Table: wrong_answers
     *   id uuid pk, user_id uuid, chapter_id text, stage_id text,
     *   question text, correct_answer text, user_answer text,
     *   reviewed_at timestamptz, review_count int
     */
    async saveWrongAnswer(userId, { chapterId, stageId, question, correctAnswer, userAnswer }) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.from('wrong_answers').insert({
            user_id:        userId,
            chapter_id:     chapterId,
            stage_id:       stageId,
            question:       (question      || '').slice(0, 500),
            correct_answer: (correctAnswer || '').slice(0, 200),
            user_answer:    (userAnswer    || '').slice(0, 200),
            reviewed_at:    new Date().toISOString(),
            review_count:   0
        });
    },

    // ── CONTENT SEEDER ───────────────────────────────────────
    /**
     * Seeds all content from window.CHAPTERS_REGISTRY into Supabase.
     * Idempotent: upserts chapters/stages, replaces questions/flashcards/summary_cards per stage.
     *
     * @param {function} onProgress  Called with ({ done, total, label, error? })
     * @returns {{ chaptersOk, stagesOk, questionsOk, flashcardsOk, cardsOk, errors[] }}
     */
    async seedContent(onProgress) {
        const c = getClient();
        if (!c) return { error: 'Supabase client not available' };

        const registry  = window.CHAPTERS_REGISTRY || {};
        const chapters  = Object.values(registry);
        const report    = { chaptersOk: 0, stagesOk: 0, questionsOk: 0, flashcardsOk: 0, cardsOk: 0, errors: [] };
        const total     = chapters.reduce((s, ch) => s + (ch.stages?.length || 0), chapters.length);
        let done        = 0;

        const progress = (label, error) => {
            done++;
            if (typeof onProgress === 'function') onProgress({ done, total, label, error });
        };

        for (const meta of chapters) {
            // ── 1. Upsert chapter ─────────────────────────────────
            const chRow = {
                id: meta.id, subject: meta.subject, grade: meta.grade,
                title: meta.title, icon: meta.icon || '📚', color: meta.color || '#64748b',
                total_stages: meta.totalStages || meta.stages?.length || 0,
                description: meta.description || '', published: meta.published !== false
            };
            const { error: chErr } = await c.from('chapters')
                .upsert(chRow, { onConflict: 'id' });
            if (chErr) {
                report.errors.push(`chapter ${meta.id}: ${chErr.message}`);
                progress(`⚠️ chapter/${meta.id}`, chErr.message);
                continue;
            }
            report.chaptersOk++;
            progress(`📚 ${meta.title}`);

            for (const s of (meta.stages || [])) {
                const sd = window[s.varName];
                if (!sd) {
                    report.errors.push(`stage ${s.id}: window.${s.varName} not loaded`);
                    progress(`⚠️ ${s.id} (not loaded)`);
                    continue;
                }

                // ── 2. Upsert stage ───────────────────────────────
                const stRow = {
                    id: s.id, chapter_id: meta.id,
                    stage_index: s.index || 1, var_name: s.varName,
                    title: sd.title || s.id, icon: sd.icon || '⚔️',
                    difficulty: sd.difficulty || (s.isBoss ? 'boss' : 'medium'),
                    estimated_time: sd.estimatedTime || 10,
                    is_boss: !!s.isBoss, is_final: !!s.isFinal,
                    learning_objectives: sd.learningObjectives || [],
                    completion_message: sd.completionMessage || '',
                    rewards: sd.rewards || {}, published: true,
                    mnemonics:   sd.summary?.mnemonics  || [],
                    mini_review: sd.summary?.miniReview || []
                };
                const { error: stErr } = await c.from('stages')
                    .upsert(stRow, { onConflict: 'id' });
                if (stErr) {
                    report.errors.push(`stage ${s.id}: ${stErr.message}`);
                    progress(`⚠️ stage/${s.id}`, stErr.message);
                    continue;
                }
                report.stagesOk++;

                // ── 3. Replace questions (delete + insert) ────────
                await c.from('questions').delete().eq('stage_id', s.id);
                const sections = [
                    { key: 'warmup',         data: sd.warmup         || [] },
                    { key: 'guidedPractice', data: sd.guidedPractice || [] },
                    { key: 'questions',      data: sd.questions      || [] },
                    { key: 'adaptiveReview', data: sd.adaptiveReview || [] },
                ];
                const qRows = [];
                for (const sec of sections) {
                    sec.data.forEach((q, i) => {
                        qRows.push({
                            stage_id: s.id, section: sec.key, seq_index: i,
                            prompt: (q.prompt || '').slice(0, 2000),
                            options: q.options || [],
                            explanation: (q.explanation || '').slice(0, 2000),
                            difficulty: q.difficulty || null,
                            topic: q.topic || null,
                            type: q.type || 'multiple_choice'
                        });
                    });
                }
                if (qRows.length) {
                    const { error: qErr } = await c.from('questions').insert(qRows);
                    if (qErr) report.errors.push(`questions ${s.id}: ${qErr.message}`);
                    else report.questionsOk += qRows.length;
                }

                // ── 4. Replace flashcards ─────────────────────────
                await c.from('flashcards').delete().eq('stage_id', s.id);
                const fcs = sd.summary?.flashcards || [];
                if (fcs.length) {
                    const fcRows = fcs.map((fc, i) => ({
                        stage_id: s.id, seq_index: i,
                        question: (fc.q || '').slice(0, 500),
                        answer:   (fc.a || '').slice(0, 1000)
                    }));
                    const { error: fcErr } = await c.from('flashcards').insert(fcRows);
                    if (fcErr) report.errors.push(`flashcards ${s.id}: ${fcErr.message}`);
                    else report.flashcardsOk += fcRows.length;
                }

                // ── 5. Replace summary cards ──────────────────────
                await c.from('summary_cards').delete().eq('stage_id', s.id);
                const cards = sd.summary?.content || [];
                if (cards.length) {
                    const cardRows = cards.map((card, i) => ({
                        stage_id: s.id, seq_index: i,
                        icon:  card.icon  || '📌',
                        title: (card.title || '').slice(0, 200),
                        text:  (card.text  || '').slice(0, 3000)
                    }));
                    const { error: cardErr } = await c.from('summary_cards').insert(cardRows);
                    if (cardErr) report.errors.push(`summary_cards ${s.id}: ${cardErr.message}`);
                    else report.cardsOk += cardRows.length;
                }

                progress(`✅ ${sd.title}`);
            }
        }
        return report;
    },

    // ── SINGLE STAGE SAVE (Sprint 4) ────────────────────────
    /**
     * Saves / updates a single stage and all its sub-content to Supabase.
     * Used by the stage editor "Save to Cloud" button.
     * @param {string} chapterId  e.g. 'cap7_doencas'
     * @param {object} stageMeta  { id, varName, index, isBoss, isFinal }
     * @param {object} stageData  the full stage JS object (from window[varName])
     * @returns {{ ok: boolean, errors: string[] }}
     */
    async saveStage(chapterId, stageMeta, stageData) {
        const c = getClient();
        if (!c) return { ok: false, errors: ['offline'] };
        const errors = [];

        // 1. Ensure chapter row exists (upsert minimal)
        const meta = (window.CHAPTERS_REGISTRY || {})[chapterId] || {};
        if (meta.id) {
            await c.from('chapters').upsert({
                id: meta.id, subject: meta.subject || '', grade: meta.grade || '',
                title: meta.title || chapterId, icon: meta.icon || '📚',
                color: meta.color || '#64748b',
                total_stages: meta.totalStages || meta.stages?.length || 0,
                description: meta.description || '', published: meta.published !== false
            }, { onConflict: 'id' });
        }

        // 2. Upsert stage row
        const { error: stErr } = await c.from('stages').upsert({
            id: stageMeta.id, chapter_id: chapterId,
            stage_index: stageMeta.index || 1, var_name: stageMeta.varName || stageMeta.id.toUpperCase(),
            title: stageData.title || stageMeta.id, icon: stageData.icon || '⚔️',
            difficulty: stageData.difficulty || (stageMeta.isBoss ? 'boss' : 'medium'),
            estimated_time: stageData.estimatedTime || 10,
            is_boss: !!stageMeta.isBoss, is_final: !!stageMeta.isFinal,
            learning_objectives: stageData.learningObjectives || [],
            completion_message: stageData.completionMessage || '',
            rewards: stageData.rewards || {}, published: true,
            mnemonics:   stageData.summary?.mnemonics  || [],
            mini_review: stageData.summary?.miniReview || [],
            updated_at: new Date().toISOString()
        }, { onConflict: 'id' });
        if (stErr) { errors.push(`stage: ${stErr.message}`); return { ok: false, errors }; }

        // 3. Replace questions
        await c.from('questions').delete().eq('stage_id', stageMeta.id);
        const sections = [
            { key: 'warmup',         data: stageData.warmup         || [] },
            { key: 'guidedPractice', data: stageData.guidedPractice || [] },
            { key: 'questions',      data: stageData.questions      || [] },
            { key: 'adaptiveReview', data: stageData.adaptiveReview || [] },
        ];
        const qRows = [];
        sections.forEach(sec => sec.data.forEach((q, i) => qRows.push({
            stage_id: stageMeta.id, section: sec.key, seq_index: i,
            prompt:      (q.prompt      || '').slice(0, 2000),
            options:     q.options      || [],
            explanation: (q.explanation || '').slice(0, 2000),
            difficulty:  q.difficulty   || null,
            topic:       q.topic        || null,
            type:        q.type         || 'multiple_choice'
        })));
        if (qRows.length) {
            const { error: qErr } = await c.from('questions').insert(qRows);
            if (qErr) errors.push(`questions: ${qErr.message}`);
        }

        // 4. Replace flashcards
        await c.from('flashcards').delete().eq('stage_id', stageMeta.id);
        const fcs = stageData.summary?.flashcards || [];
        if (fcs.length) {
            const { error: fcErr } = await c.from('flashcards').insert(
                fcs.map((fc, i) => ({ stage_id: stageMeta.id, seq_index: i,
                    question: (fc.q || '').slice(0, 500), answer: (fc.a || '').slice(0, 1000) }))
            );
            if (fcErr) errors.push(`flashcards: ${fcErr.message}`);
        }

        // 5. Replace summary cards
        await c.from('summary_cards').delete().eq('stage_id', stageMeta.id);
        const cards = stageData.summary?.content || [];
        if (cards.length) {
            const { error: cardErr } = await c.from('summary_cards').insert(
                cards.map((card, i) => ({ stage_id: stageMeta.id, seq_index: i,
                    icon:  card.icon  || '📌',
                    title: (card.title || '').slice(0, 200),
                    text:  (card.text  || '').slice(0, 3000) }))
            );
            if (cardErr) errors.push(`summary_cards: ${cardErr.message}`);
        }

        // 6. Mark stage as synced in localStorage
        try {
            const synced = JSON.parse(localStorage.getItem('eq_synced_stages') || '{}');
            synced[stageMeta.id] = Date.now();
            localStorage.setItem('eq_synced_stages', JSON.stringify(synced));
        } catch(e) {}

        return { ok: errors.length === 0, errors };
    },

    // ── LOAD STAGE FROM DB (Sprint 4) ───────────────────────
    /**
     * Reconstructs a full stage data object from Supabase tables.
     * Returns null if not found. Used as GameEngine offline fallback.
     */
    async loadStageFromDB(stageId) {
        const c = getClient();
        if (!c) return null;
        // Load stage metadata
        const { data: stage, error: stErr } = await c
            .from('stages').select('*').eq('id', stageId).single();
        if (stErr || !stage) return null;

        // Load questions grouped by section
        const { data: questions } = await c
            .from('questions').select('*').eq('stage_id', stageId)
            .order('seq_index', { ascending: true });
        const { data: flashcards } = await c
            .from('flashcards').select('*').eq('stage_id', stageId)
            .order('seq_index', { ascending: true });
        const { data: summaryCards } = await c
            .from('summary_cards').select('*').eq('stage_id', stageId)
            .order('seq_index', { ascending: true });

        const groupQ = (section) => (questions || [])
            .filter(q => q.section === section)
            .map(q => ({ prompt: q.prompt, options: q.options || [],
                explanation: q.explanation, difficulty: q.difficulty, topic: q.topic, type: q.type }));

        return {
            id:                  stage.id,
            title:               stage.title,
            icon:                stage.icon,
            difficulty:          stage.difficulty,
            estimatedTime:       stage.estimated_time,
            learningObjectives:  stage.learning_objectives || [],
            completionMessage:   stage.completion_message,
            rewards:             stage.rewards || {},
            isBoss:              stage.is_boss,
            isFinal:             stage.is_final,
            warmup:              groupQ('warmup'),
            guidedPractice:      groupQ('guidedPractice'),
            questions:           groupQ('questions'),
            adaptiveReview:      groupQ('adaptiveReview'),
            summary: {
                flashcards:  (flashcards || []).map(fc => ({ q: fc.question, a: fc.answer })),
                content:     (summaryCards || []).map(card => ({ icon: card.icon, title: card.title, text: card.text })),
                mnemonics:   stage.mnemonics   || [],
                miniReview:  stage.mini_review || []
            }
        };
    },

    // ── ANALYTICS DASHBOARD (Sprint 5) ─────────────────────
    /**
     * Fetches aggregated analytics from the eq_analytics_dashboard
     * SECURITY DEFINER RPC (bypasses RLS; requires authentication).
     * @param {number} days  lookback window (default 30)
     * @returns {Promise<object|null>}  { kpis, by_chapter, by_level, hard_stages, daily }
     */
    async getAnalytics(days = 30) {
        const c = getClient();
        if (!c) return null;
        const { data, error } = await c.rpc('eq_analytics_dashboard', { p_days: days });
        if (error) { console.error('SupaDB.getAnalytics:', error); return null; }
        return data;
    },

    // ── SYNC STATUS HELPERS ─────────────────────────────────
    isStageSynced(stageId) {
        try {
            const synced = JSON.parse(localStorage.getItem('eq_synced_stages') || '{}');
            return !!synced[stageId];
        } catch(e) { return false; }
    },

    getSyncedAt(stageId) {
        try {
            const synced = JSON.parse(localStorage.getItem('eq_synced_stages') || '{}');
            return synced[stageId] ? new Date(synced[stageId]).toLocaleDateString('pt-BR') : null;
        } catch(e) { return null; }
    }
};

window.SupaClient = { getClient };
window.SupaAuth   = SupaAuth;
window.SupaDB     = SupaDB;
