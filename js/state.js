/**
 * EDUQUEST STATE MANAGER v2.0
 * Gestão completa de estado com persistência e métodos para todos os componentes
 */

const State = {
    data: {
        user: {
            name: 'Herói',
            level: 1,
            xp: 0,
            gems: 0,
            hearts: 5,
            streak: 1,
            lastPlayed: null,
            achievements: [],
            authenticated: false,
            onboarded: false,
            email: null,
            dailyGoal: 10
        },
        progress: {}
    },

    init() {
        const saved = localStorage.getItem('eduquest_v5');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Merge preservando defaults para campos novos
                this.data.user = { ...this.data.user, ...parsed.user };
                this.data.progress = parsed.progress || {};
            } catch (e) {
                console.warn('State: erro ao carregar save, usando padrão.');
            }
        }
        this.checkStreak();
        this.updateHUD();
        return this;
    },

    save() {
        localStorage.setItem('eduquest_v5', JSON.stringify(this.data));
        this.updateHUD();
    },

    checkStreak() {
        const today = new Date().toDateString();
        const last  = this.data.user.lastPlayed;

        if (!last) {
            this.data.user.streak = 1;
            this.data.user.lastPlayed = today;
            return;
        }
        if (last === today) return;

        const lastDate = new Date(last);
        const todayDate = new Date(today);
        const diff = Math.round((todayDate - lastDate) / 86400000);

        if (diff === 1) {
            this.data.user.streak = (this.data.user.streak || 0) + 1;
        } else {
            this.data.user.streak = 1;
        }
        this.data.user.lastPlayed = today;
        this.save();
    },

    // ── GETTERS ──────────────────────────────────────────
    getUserName()   { return this.data.user.name; },
    getUserLevel()  { return this.data.user.level; },
    getUserXP()     { return this.data.user.xp; },
    getUserGems()   { return this.data.user.gems; },
    getUserHearts() { return this.data.user.hearts; },
    getUserStreak() { return this.data.user.streak || 1; },

    getXPForLevel(level) {
        return level * 500;
    },

    getXPProgress() {
        const level    = this.data.user.level;
        const totalXP  = this.data.user.xp;
        const prevReq  = level > 1 ? this.getXPForLevel(level - 1) : 0;
        const nextReq  = this.getXPForLevel(level);
        const current  = totalXP - prevReq;
        const needed   = nextReq - prevReq;
        return {
            current,
            needed,
            percent: Math.min(100, Math.max(0, Math.round((current / needed) * 100)))
        };
    },

    getChapterProgress(chapterId) {
        const chProgress  = this.data.progress[chapterId];
        const totalStages = this._getChapterTotalStages(chapterId);

        if (!chProgress || !chProgress.stages) {
            return { stagesCompleted: 0, totalStages, completed: false, percent: 0 };
        }

        const stages       = chProgress.stages;
        const completedCount = Object.values(stages).filter(s => s && s.completed).length;

        return {
            stagesCompleted: completedCount,
            totalStages,
            completed: completedCount >= totalStages,
            percent: Math.round((completedCount / totalStages) * 100)
        };
    },

    _getChapterTotalStages(chapterId) {
        const meta = window.CHAPTER_METADATA;
        if (meta && meta.id === chapterId) return meta.totalStages;
        const cfg = (window.CONFIG && window.CONFIG.chapters || []).find(c => c.id === chapterId);
        if (cfg) return cfg.totalStages;
        return 5;
    },

    isStageUnlocked(chapterId, stageIndex) {
        if (stageIndex <= 1) return true;
        return this.isStageCompleted(chapterId, stageIndex - 1);
    },

    isStageCompleted(chapterId, stageIndex) {
        const stages = this.data.progress[chapterId]?.stages || {};
        return !!(stages[stageIndex]?.completed);
    },

    getStageStars(chapterId, stageIndex) {
        const stages = this.data.progress[chapterId]?.stages || {};
        return stages[stageIndex]?.stars || 0;
    },

    // ── ACTIONS ──────────────────────────────────────────
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
        if (this.data.user.hearts > 0) {
            this.data.user.hearts--;
            this.save();
        }
        return this.data.user.hearts;
    },

    completeStage(chapterId, stageIndex, stars) {
        if (!this.data.progress[chapterId]) {
            this.data.progress[chapterId] = { stages: {} };
        }
        const existing = this.data.progress[chapterId].stages[stageIndex];
        if (!existing || stars > (existing.stars || 0)) {
            this.data.progress[chapterId].stages[stageIndex] = {
                completed: true,
                stars: stars,
                completedAt: new Date().toISOString()
            };
        }
        this.save();
    },

    _checkLevelUp() {
        const needed = this.getXPForLevel(this.data.user.level);
        if (this.data.user.xp >= needed) {
            this.data.user.level++;
            // Trigger visual de level up se disponível
            if (typeof Utils !== 'undefined') {
                setTimeout(() => Utils.confetti(), 100);
            }
        }
    },

    // ── HUD UPDATE ───────────────────────────────────────
    updateHUD() {
        const u = this.data.user;
        const map = {
            'hud-streak': u.streak || 1,
            'hud-gems':   u.gems,
            'hud-xp':     u.xp,
            'hud-hearts': u.hearts
        };
        for (const [id, val] of Object.entries(map)) {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        }
    },

    // ── AUTH ─────────────────────────────────────────────
    isAuthenticated() {
        return this.data.user.authenticated === true;
    },

    login(email, password) {
        const OK_EMAIL = 'jghermidamaia@gmail.com';
        const OK_PASS  = '180514';
        if (email === OK_EMAIL && password === OK_PASS) {
            this.data.user.authenticated = true;
            this.data.user.email = email;
            this.save();
            return { success: true };
        }
        return { success: false };
    },

    logout() {
        this.data.user.authenticated = false;
        this.save();
    },

    // ── ONBOARDING ────────────────────────────────────────
    isOnboarded() {
        return this.data.user.onboarded === true;
    },

    completeOnboarding(name, dailyGoal) {
        this.data.user.name       = name || 'Herói';
        this.data.user.dailyGoal  = dailyGoal || 10;
        this.data.user.onboarded  = true;
        this.save();
    }
};

// Dual export para compatibilidade
window.State = State;
window.STATE = State;
