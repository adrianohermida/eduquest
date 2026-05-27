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
    }
};

window.SupaClient = { getClient };
window.SupaAuth   = SupaAuth;
window.SupaDB     = SupaDB;
