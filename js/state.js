/**
 * EDUQUEST STATE MANAGER v3.0
 * localStorage + Supabase cloud sync · Premium · Teams · Schema migration · Dark mode
 */

const State = {
    SCHEMA_VERSION: 7,
    LS_KEY: 'eduquest_v5',

    data: {
        schemaVersion: 7,
        user: {
            name:         'Herói',
            level:        1,
            xp:           0,
            gems:         0,
            hearts:       5,
            streak:       1,
            lastPlayed:   null,
            authenticated: false,
            onboarded:    false,
            email:        null,
            dailyGoal:    10,
            // v3 additions
            uid:          null,
            isPremium:    false,
            premiumUntil: null,
            theme:        'light',
            // v4 additions
            avatar:       '🦸',
            grade:        '7ano',
        },
        progress: {},
        dailyMissions: { date: null, completed: [] },
    },

    _syncTimer:  null,
    _syncBusy:   false,
    _isOnline:   true,

    // ── INIT ─────────────────────────────────────────────────
    init() {
        this._isOnline = navigator.onLine;

        const saved = localStorage.getItem(this.LS_KEY);
        if (saved) {
            try {
                this._migrate(JSON.parse(saved));
            } catch(e) {
                console.warn('State: save corrompido, usando padrão.');
            }
        }

        this._applyTheme(this.data.user.theme || 'light');
        this.checkStreak();
        this.updateHUD();

        window.addEventListener('online',  () => { this._isOnline = true;  this._syncToCloud(); });
        window.addEventListener('offline', () => { this._isOnline = false; });

        // Supabase auth listener (fires asynchronously on load)
        if (typeof SupaAuth !== 'undefined') {
            SupaAuth.onAuthChange(async (event, session) => {
                if (event === 'PASSWORD_RECOVERY') {
                    // Show reset-password form instead of logging in
                    if (typeof Router !== 'undefined') Router.navigate('#reset-password');
                    return;
                }
                if (session?.user) {
                    this.data.user.uid           = session.user.id;
                    this.data.user.email         = session.user.email;
                    this.data.user.authenticated = true;
                    await this._loadFromCloud(session.user.id);
                    this.save();
                    this.updateHUD();
                    // Navigate away from auth/landing pages
                    const r = window.location.hash.replace('#', '').split('/')[0];
                    const authPages = ['landing','login','register','','reset-password'];
                    if (authPages.includes(r) || r.includes('access_token')) {
                        Router.navigate(this.data.user.onboarded ? '#home' : '#onboarding/1');
                    }
                } else if (event === 'SIGNED_OUT') {
                    this.data.user.uid           = null;
                    this.data.user.authenticated = false;
                    this.save();
                }
            });
        }

        return this;
    },

    // ── SCHEMA MIGRATION ─────────────────────────────────────
    _migrate(parsed) {
        // Never wipe — always merge, adding new fields with defaults
        if (parsed.user) {
            this.data.user = {
                ...this.data.user,
                ...parsed.user,
                uid:          parsed.user.uid          ?? null,
                isPremium:    parsed.user.isPremium     ?? false,
                premiumUntil: parsed.user.premiumUntil  ?? null,
                theme:        parsed.user.theme         ?? 'light',
                avatar:       parsed.user.avatar        ?? '🦸',
                grade:        parsed.user.grade         ?? '7ano',
            };
        }
        this.data.progress      = parsed.progress || {};
        this.data.dailyMissions = parsed.dailyMissions || { date: null, completed: [] };
        this.data.schemaVersion = this.SCHEMA_VERSION;
    },

    // ── PERSISTENCE ──────────────────────────────────────────
    save() {
        this.data.schemaVersion = this.SCHEMA_VERSION;
        localStorage.setItem(this.LS_KEY, JSON.stringify(this.data));
        this.updateHUD();
        this._queueCloudSync();
    },

    _queueCloudSync() {
        if (!this.data.user.uid || !this._isOnline || this._syncBusy) return;
        clearTimeout(this._syncTimer);
        this._syncTimer = setTimeout(() => this._syncToCloud(), 1800);
    },

    async _syncToCloud() {
        if (!this.data.user.uid || !this._isOnline) return;
        if (typeof SupaDB === 'undefined') return;
        this._syncBusy = true;
        const u = this.data.user;
        await SupaDB.saveProfile(u.uid, {
            name:          u.name,
            level:         u.level,
            xp:            u.xp,
            gems:          u.gems,
            hearts:        u.hearts,
            streak:        u.streak,
            last_played:   u.lastPlayed,
            daily_goal:    u.dailyGoal,
            is_premium:    u.isPremium,
            premium_until: u.premiumUntil,
            onboarded:     u.onboarded,
            avatar:        u.avatar,
            grade:         u.grade,
        });
        this._syncBusy = false;
    },

    async _loadFromCloud(userId) {
        if (typeof SupaDB === 'undefined') return;

        const [{ data: profile }, { data: progressRows }] = await Promise.all([
            SupaDB.loadProfile(userId),
            SupaDB.loadProgress(userId),
        ]);

        if (profile) {
            const u = this.data.user;
            Object.assign(this.data.user, {
                name:         profile.name          || u.name,
                level:        Math.max(profile.level    || 1, u.level),
                xp:           Math.max(profile.xp        || 0, u.xp),
                gems:         Math.max(profile.gems       || 0, u.gems),
                hearts:       profile.hearts         ?? u.hearts,
                streak:       Math.max(profile.streak     || 1, u.streak),
                lastPlayed:   profile.last_played    || u.lastPlayed,
                dailyGoal:    profile.daily_goal     || u.dailyGoal,
                isPremium:    profile.is_premium     || u.isPremium,
                premiumUntil: profile.premium_until  || u.premiumUntil,
                onboarded:    profile.onboarded      || u.onboarded,
                avatar:       profile.avatar         || u.avatar,
                grade:        profile.grade          || u.grade,
            });
        }

        if (progressRows?.length) {
            for (const row of progressRows) {
                if (!this.data.progress[row.chapter_id]) {
                    this.data.progress[row.chapter_id] = { stages: {} };
                }
                const local = this.data.progress[row.chapter_id].stages[row.stage_index];
                if (!local || row.stars > (local.stars || 0)) {
                    this.data.progress[row.chapter_id].stages[row.stage_index] = {
                        completed:   row.completed,
                        stars:       row.stars,
                        completedAt: row.completed_at,
                    };
                }
            }
        }
    },

    // ── STREAK ───────────────────────────────────────────────
    checkStreak() {
        const today = new Date().toDateString();
        const last  = this.data.user.lastPlayed;
        if (!last) { this.data.user.streak = 1; this.data.user.lastPlayed = today; return; }
        if (last === today) return;
        const diff = Math.round((new Date(today) - new Date(last)) / 86400000);
        this.data.user.streak    = diff === 1 ? (this.data.user.streak || 0) + 1 : 1;
        this.data.user.lastPlayed = today;
        this.save();
    },

    // ── GETTERS ──────────────────────────────────────────────
    getUserName()    { return this.data.user.name; },
    getUserLevel()   { return this.data.user.level; },
    getUserXP()      { return this.data.user.xp; },
    getUserGems()    { return this.data.user.gems; },
    getUserHearts()  { return this.data.user.hearts; },
    getUserStreak()  { return this.data.user.streak || 1; },
    isPremium()      {
        if (this.data.user.isPremium) return true;
        if (this.data.user.premiumUntil) return new Date(this.data.user.premiumUntil) > new Date();
        return false;
    },

    getXPForLevel(level) { return level * 500; },

    getXPProgress() {
        const level   = this.data.user.level;
        const totalXP = this.data.user.xp;
        const prev    = level > 1 ? this.getXPForLevel(level - 1) : 0;
        const next    = this.getXPForLevel(level);
        const current = totalXP - prev;
        const needed  = next - prev;
        return { current, needed, percent: Math.min(100, Math.max(0, Math.round((current / needed) * 100))) };
    },

    getChapterProgress(chapterId) {
        const chProg      = this.data.progress[chapterId];
        const totalStages = this._getChapterTotalStages(chapterId);
        if (!chProg?.stages) return { stagesCompleted: 0, totalStages, completed: false, percent: 0 };
        const done = Object.values(chProg.stages).filter(s => s?.completed).length;
        return { stagesCompleted: done, totalStages, completed: done >= totalStages, percent: Math.round((done / totalStages) * 100) };
    },

    _getChapterTotalStages(chapterId) {
        const meta = window.CHAPTER_METADATA;
        if (meta?.id === chapterId) return meta.totalStages;
        const cfg = (window.CONFIG?.chapters || []).find(c => c.id === chapterId);
        return cfg?.totalStages || 5;
    },

    isStageUnlocked(chapterId, stageIndex) {
        if (stageIndex <= 1) return true;
        if (!this.isStageCompleted(chapterId, stageIndex - 1)) return false;
        const minStars = window.CONFIG?.stages?.minStarsToAdvance ?? 1;
        if (minStars <= 0) return true;
        return this.getStageStars(chapterId, stageIndex - 1) >= minStars;
    },

    isStageCompleted(chapterId, stageIndex) {
        return !!(this.data.progress[chapterId]?.stages?.[stageIndex]?.completed);
    },

    getStageStars(chapterId, stageIndex) {
        return this.data.progress[chapterId]?.stages?.[stageIndex]?.stars || 0;
    },

    // ── ACTIONS ──────────────────────────────────────────────
    addXP(amount) {
        this.data.user.xp += amount;
        this._checkLevelUp();
        this.save();
    },

    addGems(amount) {
        this.data.user.gems += amount;
        this.save();
    },

    useHeart() {
        if (this.data.user.hearts > 0) this.data.user.hearts--;
        this.save();
        return this.data.user.hearts;
    },

    completeStage(chapterId, stageIndex, stars) {
        if (!this.data.progress[chapterId]) this.data.progress[chapterId] = { stages: {} };
        const existing = this.data.progress[chapterId].stages[stageIndex];
        if (!existing || stars > (existing.stars || 0)) {
            const completedAt = new Date().toISOString();
            this.data.progress[chapterId].stages[stageIndex] = { completed: true, stars, completedAt };
            // Cloud sync of this specific stage
            if (this.data.user.uid && this._isOnline && typeof SupaDB !== 'undefined') {
                SupaDB.upsertProgress(this.data.user.uid, chapterId, stageIndex, stars, completedAt);
            }
        }
        this.save();
    },

    _checkLevelUp() {
        const needed = this.getXPForLevel(this.data.user.level);
        if (this.data.user.xp >= needed) {
            this.data.user.level++;
            if (typeof Utils !== 'undefined') setTimeout(() => Utils.confetti(), 100);
        }
    },

    // ── HUD ──────────────────────────────────────────────────
    updateHUD() {
        const u = this.data.user;
        const map = { 'hud-streak': u.streak || 1, 'hud-gems': u.gems, 'hud-xp': u.xp, 'hud-hearts': u.hearts };
        for (const [id, val] of Object.entries(map)) {
            const el = document.getElementById(id); if (el) el.textContent = val;
        }
        const avatarEl = document.getElementById('hud-avatar-btn');
        if (avatarEl) avatarEl.textContent = u.avatar || '🦸';
    },

    // ── DAILY MISSIONS ───────────────────────────────────────
    getMissions() {
        const today = new Date().toDateString();
        if (!this.data.dailyMissions || this.data.dailyMissions.date !== today) {
            this.data.dailyMissions = { date: today, completed: [] };
        }
        const pool = [
            { id: 'complete_stage', icon: '⚔️', title: 'Complete uma missão',  desc: 'Termine qualquer fase hoje',    xp: 100, gems: 15 },
            { id: 'streak_day',     icon: '🔥', title: 'Sequência mantida',    desc: 'Jogue pelo menos 1x hoje',      xp: 50,  gems: 5  },
            { id: 'perfect_score',  icon: '⭐', title: 'Pontuação perfeita',   desc: 'Acerte tudo em uma fase',       xp: 150, gems: 20 },
            { id: 'combo_5',        icon: '⚡', title: 'Combo devastador',     desc: 'Acerte 5 seguidas',             xp: 75,  gems: 10 },
            { id: 'earn_gems',      icon: '💎', title: 'Caça gemas',           desc: 'Ganhe 10+ gemas hoje',          xp: 50,  gems: 0  },
            { id: 'fast_answer',    icon: '⏱️', title: 'Raio',                desc: 'Responda em menos de 5s',       xp: 75,  gems: 10 },
            { id: 'hard_mode',      icon: '💀', title: 'Desafio difícil',      desc: 'Complete uma fase difícil',     xp: 200, gems: 25 },
        ];
        const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
        const picks = [];
        const used  = new Set();
        for (let i = 0; picks.length < 3 && i < pool.length * 2; i++) {
            const idx = (seed + i * 3) % pool.length;
            if (!used.has(idx)) { used.add(idx); picks.push({ ...pool[idx] }); }
        }
        return picks.map(m => ({ ...m, completed: this.data.dailyMissions.completed.includes(m.id) }));
    },

    completeMission(missionId) {
        const today = new Date().toDateString();
        if (!this.data.dailyMissions || this.data.dailyMissions.date !== today) {
            this.data.dailyMissions = { date: today, completed: [] };
        }
        if (!this.data.dailyMissions.completed.includes(missionId)) {
            this.data.dailyMissions.completed.push(missionId);
            this.save();
        }
    },

    getStreakCalendar() {
        const today  = new Date();
        const streak = Math.min(this.data.user.streak || 0, 7);
        const labels = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(today);
            d.setDate(d.getDate() - (6 - i));
            return { label: labels[d.getDay()], active: i >= (7 - streak), isToday: i === 6 };
        });
    },

    // ── THEME ────────────────────────────────────────────────
    setTheme(theme) {
        this.data.user.theme = theme;
        this._applyTheme(theme);
        this.save();
    },

    _applyTheme(theme) {
        const html = document.documentElement;
        html.removeAttribute('data-theme');
        if (theme === 'dark' || theme === 'auto') html.setAttribute('data-theme', theme);
    },

    // ── AUTH (Supabase-backed) ────────────────────────────────
    isAuthenticated() { return this.data.user.authenticated === true; },
    isOnboarded()     { return this.data.user.onboarded === true; },

    async loginAsync(email, password) {
        if (typeof SupaAuth === 'undefined') return this.login(email, password);
        const { error } = await SupaAuth.signIn(email, password);
        if (error) return { success: false, message: error.message };
        return { success: true };
    },

    async signUpAsync(email, password, name) {
        if (typeof SupaAuth === 'undefined') return { success: false, message: 'Supabase não disponível' };
        const { data, error } = await SupaAuth.signUp(email, password, name);
        if (error) return { success: false, message: error.message };
        return { success: true, needsConfirmation: !data.session };
    },

    async logoutAsync() {
        if (typeof SupaAuth !== 'undefined') await SupaAuth.signOut();
        this.data.user.authenticated = false;
        this.data.user.uid           = null;
        this.save();
        if (typeof Router !== 'undefined') Router.navigate('#landing');
    },

    // Legacy fallback (dev/offline)
    login(email, password) {
        const OK_EMAIL = 'jghermidamaia@gmail.com';
        const OK_PASS  = '180514';
        if (email === OK_EMAIL && password === OK_PASS) {
            this.data.user.authenticated = true;
            this.data.user.email = email;
            this.save();
            return { success: true };
        }
        return { success: false, message: 'Email ou senha incorretos.' };
    },

    logout() {
        this.data.user.authenticated = false;
        this.save();
    },

    // ── ONBOARDING ────────────────────────────────────────────
    completeOnboarding(name, dailyGoal, grade, avatar) {
        this.data.user.name      = name      || 'Herói';
        this.data.user.dailyGoal = dailyGoal || 10;
        this.data.user.grade     = grade     || '7ano';
        this.data.user.avatar    = avatar    || '🦸';
        this.data.user.onboarded = true;
        this.save();
    },

    // ── RESET (dev only) ─────────────────────────────────────
    hardReset() {
        if (!confirm('⚠️ Apagar TODO o progresso local?')) return;
        localStorage.removeItem(this.LS_KEY);
        location.reload();
    }
};

window.State = State;
window.STATE  = State;
