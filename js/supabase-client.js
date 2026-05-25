/**
 * EDUQUEST SUPABASE CLIENT v1.0
 * Auth + Cloud sync for profiles, progress, and teams
 */

const SUPA_URL = 'https://vjnwuowgxyzrfomykdxu.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqbnd1b3dneHl6cmZvbXlrZHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTY5NjQsImV4cCI6MjA5NTI5Mjk2NH0.rtgXikCvBUp-eChPue4U_5aDcmj67-NwrhcYD17HFdA';

let _client = null;

function getClient() {
    if (!_client) {
        if (typeof window.supabase === 'undefined') {
            console.warn('SupaClient: supabase-js not loaded yet');
            return null;
        }
        _client = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
            auth: { persistSession: true, autoRefreshToken: true }
        });
    }
    return _client;
}

// ── AUTH ──────────────────────────────────────────────────────
const SupaAuth = {
    async signUp(email, password, name) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.auth.signUp({ email, password, options: { data: { name } } });
    },

    async signIn(email, password) {
        const c = getClient(); if (!c) return { data: null, error: { message: 'offline' } };
        return c.auth.signInWithPassword({ email, password });
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

    async resetPassword(email) {
        const c = getClient(); if (!c) return { error: { message: 'offline' } };
        return c.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://adrianohermida.github.io/eduquest/reset-password.html'
        });
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
    }
};

window.SupaClient = { getClient };
window.SupaAuth   = SupaAuth;
window.SupaDB     = SupaDB;
