/**
 * EDUQUEST STATE MANAGER v3.0
 * localStorage + Supabase cloud sync · Premium · Teams · Schema migration · Dark mode
 */

const ACHIEVEMENTS = [
    // Common
    { id:'first_step',    icon:'shield',      name:'Primeiros Passos',    desc:'Complete sua primeira missão',            rarity:'common'    },
    { id:'streak_3',      icon:'streak',      name:'3 em Sequência',      desc:'Mantenha 3 dias de sequência',            rarity:'common'    },
    { id:'gems_10',       icon:'gem',         name:'Caçador de Gemas',    desc:'Colete 10 gemas',                         rarity:'common'    },
    { id:'level_3',       icon:'xp',          name:'Guerreiro',           desc:'Alcance o nível 3',                       rarity:'common'    },
    { id:'questions_10',  icon:'star',        name:'Aprendiz',            desc:'Responda 10 questões corretamente',        rarity:'common'    },
    { id:'perfect_first', icon:'star',        name:'Estrela de Ouro',     desc:'Ganhe 3 estrelas em uma missão',           rarity:'common'    },
    // Rare
    { id:'stage_3',       icon:'sword',       name:'Bom de Missões',      desc:'Complete 3 missões diferentes',            rarity:'rare'      },
    { id:'streak_7',      icon:'streak',      name:'Semana de Fogo',      desc:'Mantenha 7 dias de sequência',             rarity:'rare'      },
    { id:'level_5',       icon:'star',        name:'Herói',               desc:'Alcance o nível 5',                        rarity:'rare'      },
    { id:'combo_5',       icon:'xp',          name:'Combo Devastador',    desc:'Acerte 5 questões em sequência',           rarity:'rare'      },
    { id:'gems_50',       icon:'gem',         name:'Colecionador',        desc:'Acumule 50 gemas',                         rarity:'rare'      },
    { id:'questions_50',  icon:'scroll',      name:'Estudioso',           desc:'Responda 50 questões corretamente',        rarity:'rare'      },
    // Epic
    { id:'streak_14',     icon:'achievement', name:'Quinzena',            desc:'Mantenha 14 dias de sequência',            rarity:'epic'      },
    { id:'level_10',      icon:'portal',      name:'Mestre',              desc:'Alcance o nível 10',                       rarity:'epic'      },
    { id:'perfect_5',     icon:'star',        name:'Perfeccionista',      desc:'Ganhe 3 estrelas em 5 missões',            rarity:'epic'      },
    { id:'questions_100', icon:'scroll',      name:'Devorador de Livros', desc:'Responda 100 questões corretamente',       rarity:'epic'      },
    { id:'gems_100',      icon:'gem',         name:'Magnata',             desc:'Acumule 100 gemas',                        rarity:'epic'      },
    { id:'stage_10',      icon:'trophy',      name:'Caçador de Fases',    desc:'Complete 10 missões diferentes',           rarity:'epic'      },
    // Legendary
    { id:'streak_30',     icon:'streak',      name:'Dedicação Total',     desc:'30 dias de sequência ininterrupta',        rarity:'legendary' },
    { id:'level_15',      icon:'crown',       name:'Lendário',            desc:'Alcance o nível 15',                       rarity:'legendary' },
    { id:'perfect_10',    icon:'star',        name:'Supremo',             desc:'Ganhe 3 estrelas em 10 missões',           rarity:'legendary' },
    { id:'questions_500', icon:'dna',         name:'Sábio',               desc:'Responda 500 questões corretamente',       rarity:'legendary' },
];
window.ACHIEVEMENTS = ACHIEVEMENTS;

const State = {
    SCHEMA_VERSION: 11,
    LS_KEY: 'eduquest_v5',

    data: {
        schemaVersion: 11,
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
            avatar:          '🦸',
            grade:           '7ano',
            // v5 additions
            goal:            'compete',
            // v6 additions
            lastLoginDate:   null,
            // v7 additions
            inventory:            {},
            unlockedAchievements: [],
            totalCorrect:         0,
            totalMissions:        0,
            totalPerfect:         0,
            maxCombo:             0,
            // v8 additions
            avatarClass:          'guerreiro',
            lastStreakMilestone:  0,
            // v9 additions (Sprint 4)
            loreSeenChapters:     [],
            // v10 additions (Sprint 5)
            battlePassXP:         0,
            battlePassSeason:     1,
            battlePassClaimed:    [],
            eventMissionsClaimed: [],
            pvpWins:              0,
            pvpLosses:            0,
            pvpElo:               1000,
        },
        progress: {},
        dailyMissions: { date: null, completed: [] },
        wrongAnswers:  {},
        eventMissions: {},
        aiStudySets:   [],
        leitnerBoxes:  {},
        customContent: { chapters: [], stages: [] },
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
                goal:                 parsed.user.goal                 ?? 'compete',
                lastLoginDate:        parsed.user.lastLoginDate        ?? null,
                inventory:            parsed.user.inventory            || {},
                unlockedAchievements: parsed.user.unlockedAchievements || [],
                totalCorrect:         parsed.user.totalCorrect         || 0,
                totalMissions:        parsed.user.totalMissions        || 0,
                totalPerfect:         parsed.user.totalPerfect         || 0,
                maxCombo:             parsed.user.maxCombo             || 0,
                avatarClass:          parsed.user.avatarClass          || 'guerreiro',
                lastStreakMilestone:  parsed.user.lastStreakMilestone  || 0,
                loreSeenChapters:     parsed.user.loreSeenChapters     || [],
                // v10 Sprint 5
                battlePassXP:         parsed.user.battlePassXP         || 0,
                battlePassSeason:     parsed.user.battlePassSeason      || 1,
                battlePassClaimed:    parsed.user.battlePassClaimed     || [],
                eventMissionsClaimed: parsed.user.eventMissionsClaimed  || [],
                pvpWins:              parsed.user.pvpWins               || 0,
                pvpLosses:            parsed.user.pvpLosses             || 0,
                pvpElo:               parsed.user.pvpElo                ?? 1000,
            };
        }
        this.data.progress      = parsed.progress      || {};
        this.data.dailyMissions = parsed.dailyMissions  || { date: null, completed: [] };
        this.data.wrongAnswers  = parsed.wrongAnswers   || {};
        this.data.eventMissions = parsed.eventMissions  || {};
        this.data.aiStudySets   = parsed.aiStudySets    || [];
        this.data.leitnerBoxes  = parsed.leitnerBoxes   || {};
        this.data.customContent = parsed.customContent  || { chapters: [], stages: [] };
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
        if (!last) { this.data.user.streak = 1; this.data.user.lastPlayed = today; this._recordPlayedDate(today); return; }
        if (last === today) return;
        const diff = Math.round((new Date(today) - new Date(last)) / 86400000);

        if (diff === 1) {
            this.data.user.streak = (this.data.user.streak || 0) + 1;
        } else if (diff === 2 && this.hasItem('streakFreeze')) {
            this.useItem('streakFreeze');
            this.data.user.streak = (this.data.user.streak || 0) + 1;
            if (typeof ModalEngine !== 'undefined') {
                ModalEngine.enqueue('streakFreezeUsed', { streak: this.data.user.streak });
            }
        } else {
            this.data.user.streak = 1;
            if (typeof ModalEngine !== 'undefined') {
                ModalEngine.enqueue('reviewSuggestion', { days: diff });
            }
        }

        this.data.user.lastPlayed = today;
        this._recordPlayedDate(today);
        this._checkStreakMilestone(this.data.user.streak);
        this.save();
        this.checkProgressAchievements();
    },

    _recordPlayedDate(dateStr) {
        const dates = this.data.user.playedDates || [];
        if (!dates.includes(dateStr)) {
            dates.push(dateStr);
            if (dates.length > 90) dates.splice(0, dates.length - 90);
        }
        this.data.user.playedDates = dates;
    },

    _checkStreakMilestone(streak) {
        const milestones = [3, 7, 14, 30];
        const last = this.data.user.lastStreakMilestone || 0;
        const reached = milestones.filter(m => m <= streak && m > last);
        if (!reached.length) return;
        const milestone = reached[reached.length - 1];
        this.data.user.lastStreakMilestone = milestone;
        const gemBonus = milestone;
        this.data.user.gems += gemBonus;
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('streakMilestone', { streak: milestone, gems: gemBonus });
        }
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
    isAdmin()          { return this.data.user.email === 'jghermidamaia@gmail.com'; },
    isPremiumOrAdmin() { return this.isPremium() || this.isAdmin(); },

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
        this.showXPFloat(amount);
        this._checkLevelUp();
        this.save();
    },

    addGems(amount) {
        this.data.user.gems += amount;
        this.save();
        if (amount > 0) this.checkProgressAchievements();
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
        let leveled = false;
        const prevRank = this.getRank();
        while (this.data.user.xp >= this.getXPForLevel(this.data.user.level)) {
            this.data.user.level++;
            leveled = true;
        }
        if (!leveled) return;
        this.checkProgressAchievements();
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('levelUp', {
                level:    this.data.user.level,
                rank:     this.getRank(),
                prevRank
            });
        } else if (typeof Utils !== 'undefined') {
            setTimeout(() => Utils.confetti(), 100);
        }
    },

    checkDailyLogin() {
        if (typeof ModalEngine === 'undefined') return;
        const today     = new Date().toDateString();
        const lastLogin = this.data.user.lastLoginDate;
        if (lastLogin === today) return;

        const streak = this.data.user.streak || 1;

        // Tiered daily reward
        const xp   = streak >= 30 ? 200 : streak >= 14 ? 150 : streak >= 7 ? 100 : streak >= 3 ? 50 : 25;
        const gems  = streak >= 14 ? 25  : streak >= 7  ? 15  : streak >= 3 ? 10  : 5;

        this.data.user.xp   += xp;
        this.data.user.gems += gems;
        this.data.user.lastLoginDate = today;
        this._checkLevelUp();
        this.save();

        ModalEngine.enqueue('dailyReward', { streak, xp, gems });

        // Queue streak risk if no missions done yet today
        const missions  = this.getMissions();
        const anyDone   = missions.some(m => m.completed);
        if (!anyDone && streak > 1) {
            ModalEngine.enqueue('streakRisk', { streak });
        }
    },

    // ── HUD ──────────────────────────────────────────────────
    updateHUD() {
        const u = this.data.user;
        const chips = { 'hud-streak': u.streak || 1, 'hud-gems': u.gems, 'hud-xp': u.xp, 'hud-hearts': u.hearts };
        for (const [id, val] of Object.entries(chips)) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.textContent !== String(val)) {
                el.textContent = val;
                const chip = el.closest('.hud-chip');
                if (chip) { chip.classList.remove('hud-pulse'); void chip.offsetWidth; chip.classList.add('hud-pulse'); }
            }
        }
        const avatarEl = document.getElementById('hud-avatar-btn');
        if (avatarEl) avatarEl.textContent = u.avatar || '🦸';
        const levelEl = document.getElementById('hud-level');
        if (levelEl) levelEl.textContent = `Nv.${u.level}`;
    },

    // ── RANK & CLASS ─────────────────────────────────────────
    getRank() {
        const xp = this.data.user.xp || 0;
        if (xp >= 5000) return { name: 'Platina', iconId: 'crown',       cssClass: 'rank-platinum', iconColor: 'final',   min: 5000, next: Infinity };
        if (xp >= 2000) return { name: 'Ouro',    iconId: 'star',        cssClass: 'rank-gold',     iconColor: 'xp',      min: 2000, next: 5000 };
        if (xp >= 800)  return { name: 'Prata',   iconId: 'shield',      cssClass: 'rank-silver',   iconColor: 'science', min: 800,  next: 2000 };
        return                  { name: 'Bronze',  iconId: 'achievement', cssClass: 'rank-bronze',   iconColor: 'locked',  min: 0,    next: 800  };
    },

    getHeroClass() {
        const goal = this.data.user.goal || 'compete';
        const classes = {
            grades:    { name: 'Estudioso',  icon: 'scroll',  desc: 'Mestre do conhecimento' },
            exams:     { name: 'Guerreiro',  icon: 'sword',   desc: 'Pronto para a batalha'  },
            curiosity: { name: 'Explorador', icon: 'compass', desc: 'Descobridor de mundos'  },
            compete:   { name: 'Campeão',    icon: 'trophy',  desc: 'Nascido para vencer'    },
        };
        return classes[goal] || classes.compete;
    },

    // ── AVATAR CLASS ─────────────────────────────────────────
    getAvatarClass() {
        return this.data.user.avatarClass || 'guerreiro';
    },

    setAvatarClass(cls) {
        const valid = ['guerreiro', 'mago', 'ninja', 'cientista'];
        if (!valid.includes(cls)) return;
        this.data.user.avatarClass = cls;
        this.save();
    },

    getAvatarClassPerk() {
        const cls = this.getAvatarClass();
        const perks = {
            guerreiro: { extraHeart: true,  extraHint: false, xpMult: 1,   gemBonus: false, desc: '+1 vida em batalha' },
            mago:      { extraHeart: false, extraHint: true,  xpMult: 1,   gemBonus: false, desc: '+1 dica por fase'    },
            ninja:     { extraHeart: false, extraHint: false, xpMult: 1.5, gemBonus: false, desc: '1.5× XP em combos'  },
            cientista: { extraHeart: false, extraHint: false, xpMult: 1,   gemBonus: true,  desc: '+1 gema a cada 5 acertos' },
        };
        return perks[cls] || perks.guerreiro;
    },

    // ── COMPANION ────────────────────────────────────────────
    getCompanionMessage() {
        const u        = this.data.user;
        const streak   = u.streak || 1;
        const hour     = new Date().getHours();
        const missions = this.getMissions();
        const done     = missions.filter(m => m.completed).length;
        const cls      = this.getAvatarClass();

        // ── Behavior-aware layer (Sprint 5: AI Companion Full) ──

        // 1. Re-engagement: days since last play
        if (u.lastPlayed) {
            const daysSince = Math.floor((Date.now() - new Date(u.lastPlayed).getTime()) / 86400000);
            if (daysSince >= 3) return { mood: 'worried',   cls, msg: `${daysSince} dias sem estudar! Volte antes de perder o streak!` };
            if (daysSince >= 2) return { mood: 'encourage', cls, msg: 'Saudades! Vamos retomar onde paramos?' };
        }

        // 2. Weak topic detected
        const weak = this.getWeakTopics(1);
        if (weak.length && (u.totalCorrect || 0) > 10) {
            return { mood: 'coach', cls, msg: `Você erra bastante em "${weak[0].topic}". Que tal revisar agora?` };
        }

        // 3. XP milestone proximity
        const rank = this.getRank();
        if (rank.next !== Infinity) {
            const toNext = rank.next - (u.xp || 0);
            if (toNext <= 150 && toNext > 0) return { mood: 'excited', cls, msg: `Só ${toNext} XP para subir de liga! Vamos!` };
        }

        // 4. High XP today (detected via battle pass progress)
        const bpXP = u.battlePassXP || 0;
        if (bpXP > 0 && (bpXP % 150) < 30) return { mood: 'celebrate', cls, msg: 'Você está em chamas hoje! Continue!' };

        // 5. Streak milestones
        if (streak >= 30) return { mood: 'legendary', cls, msg: `${streak} dias! Você é uma lenda do conhecimento!` };
        if (streak >= 14) return { mood: 'fire',       cls, msg: `${streak} dias! Dedicação total, mestre!`           };
        if (streak >= 7)  return { mood: 'fire',       cls, msg: `${streak} dias! Você é imparável!`                 };
        if (streak >= 3)  return { mood: 'cool',       cls, msg: `${streak} dias seguidos, continue assim!`          };

        // 6. Daily mission progress
        if (done === 3)   return { mood: 'celebrate', cls, msg: 'Todas as missões do dia! Você arrasouu!' };
        if (done >= 1)    return { mood: 'encourage', cls, msg: `${done} missão feita! Falta pouco.`     };

        // 7. Class-specific messages
        const classMessages = {
            guerreiro:  ['Guerreiros não recuam! Vamos batalhar?',  'Força e honra! Uma missão te espera.'],
            mago:       ['A sabedoria aumenta com cada questão!',   'Invoque seu poder intelectual!'],
            arqueiro:   ['Foco no alvo! Acerte todas as questões.', 'Precisão é tudo. Vamos treinar?'],
            cientista:  ['A ciência aguarda sua exploração!',       'Cada questão é um experimento!'],
            explorador: ['Aventura e aprendizado te esperam!',      'Novos horizontes te chamam!'],
        };
        const msgs = classMessages[cls] || classMessages.guerreiro;
        const classMsg = msgs[Math.floor(Date.now() / 3600000) % msgs.length];

        // 8. Time of day fallback
        if (hour < 12) return { mood: 'morning',   cls, msg: 'Bom dia! Hora de treinar a mente.'  };
        if (hour < 18) return { mood: 'afternoon', cls, msg: classMsg                             };
        return               { mood: 'night',      cls, msg: 'Ainda dá tempo de manter o streak!' };
    },

    showXPFloat(amount) {
        const el = document.createElement('div');
        el.className = 'xp-float';
        el.textContent = `+${amount} XP`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1500);
    },

    // ── DAILY MISSIONS ───────────────────────────────────────
    getMissions() {
        const today = new Date().toDateString();
        if (!this.data.dailyMissions || this.data.dailyMissions.date !== today) {
            this.data.dailyMissions = { date: today, completed: [] };
        }
        const pool = [
            { id: 'complete_stage', icon: 'sword',   title: 'Complete uma missão',  desc: 'Termine qualquer fase hoje',    xp: 100, gems: 15 },
            { id: 'streak_day',     icon: 'streak',  title: 'Sequência mantida',    desc: 'Jogue pelo menos 1x hoje',      xp: 50,  gems: 5  },
            { id: 'perfect_score',  icon: 'star',    title: 'Pontuação perfeita',   desc: 'Acerte tudo em uma fase',       xp: 150, gems: 20 },
            { id: 'combo_5',        icon: 'xp',      title: 'Combo devastador',     desc: 'Acerte 5 seguidas',             xp: 75,  gems: 10 },
            { id: 'earn_gems',      icon: 'gem',     title: 'Caça gemas',           desc: 'Ganhe 10+ gemas hoje',          xp: 50,  gems: 0  },
            { id: 'fast_answer',    icon: 'xp',      title: 'Raio',                 desc: 'Responda em menos de 5s',       xp: 75,  gems: 10 },
            { id: 'hard_mode',      icon: 'boss',    title: 'Desafio difícil',      desc: 'Complete uma fase difícil',     xp: 200, gems: 25 },
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
        if (this.data.dailyMissions.completed.includes(missionId)) return;

        this.data.dailyMissions.completed.push(missionId);
        this.save();

        if (typeof ModalEngine === 'undefined') return;
        const missions = this.getMissions();
        const mission  = missions.find(m => m.id === missionId);
        if (!mission) return;

        // Give the mission reward
        this.addXP(mission.xp);
        if (mission.gems) this.addGems(mission.gems);

        ModalEngine.enqueue('questComplete', { icon: mission.icon, title: mission.title, xp: mission.xp, gems: mission.gems || 0 });

        // Check if ALL missions just completed
        const allDone = missions.every(m => m.completed || m.id === missionId);
        if (allDone) {
            const bonusXP   = Math.round(missions.reduce((s, m) => s + m.xp, 0) * 0.25);
            const bonusGems = Math.round(missions.reduce((s, m) => s + (m.gems || 0), 0) * 0.5) + 10;
            this.addXP(bonusXP);
            this.addGems(bonusGems);
            ModalEngine.enqueue('allQuestsDone', { bonusXP, bonusGems });
        }
    },

    getStreakCalendar(n = 7) {
        const today   = new Date();
        const DAYS    = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
        const played  = new Set(this.data.user.playedDates || []);

        // Fallback for existing users with no playedDates: infer from streak count
        if (played.size === 0) {
            const streak = Math.min(this.data.user.streak || 0, n);
            for (let i = 0; i < streak; i++) {
                const d = new Date(today);
                d.setDate(d.getDate() - i);
                played.add(d.toDateString());
            }
        }

        return Array.from({ length: n }, (_, i) => {
            const d = new Date(today);
            d.setDate(d.getDate() - (n - 1 - i));
            return {
                label:   DAYS[d.getDay()],
                dayNum:  d.getDate(),
                active:  played.has(d.toDateString()),
                isToday: i === n - 1,
            };
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

    // ── CUSTOM CONTENT (Builder + AI Studio) ─────────────────────
    getCustomContent() { return this.data.customContent || { chapters: [], stages: [] }; },

    addCustomChapter(ch) {
        if (!this.data.customContent) this.data.customContent = { chapters: [], stages: [] };
        const idx = this.data.customContent.chapters.findIndex(c => c.id === ch.id);
        if (idx >= 0) this.data.customContent.chapters[idx] = ch;
        else this.data.customContent.chapters.unshift(ch);
        this.save();
    },

    addCustomStage(stage) {
        if (!this.data.customContent) this.data.customContent = { chapters: [], stages: [] };
        const idx = this.data.customContent.stages.findIndex(s => s.id === stage.id);
        if (idx >= 0) this.data.customContent.stages[idx] = stage;
        else this.data.customContent.stages.unshift(stage);
        this.save();
    },

    deleteCustomChapter(id) {
        if (!this.data.customContent) return;
        this.data.customContent.chapters = this.data.customContent.chapters.filter(c => c.id !== id);
        this.data.customContent.stages   = this.data.customContent.stages.filter(s => s.chapterId !== id);
        this.save();
    },

    deleteCustomStage(id) {
        if (!this.data.customContent) return;
        this.data.customContent.stages = this.data.customContent.stages.filter(s => s.id !== id);
        this.save();
    },

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
    completeOnboarding(name, dailyGoal, grade, avatar, goal) {
        this.data.user.name      = name      || 'Herói';
        this.data.user.dailyGoal = dailyGoal || 10;
        this.data.user.grade     = grade     || '7ano';
        this.data.user.avatar    = avatar    || '🦸';
        this.data.user.goal      = goal      || 'compete';
        this.data.user.onboarded = true;
        this.save();
    },

    // ── INVENTORY ────────────────────────────────────────────
    addItem(action, qty = 1) {
        if (!this.data.user.inventory) this.data.user.inventory = {};
        this.data.user.inventory[action] = (this.data.user.inventory[action] || 0) + qty;
        this.save();
    },

    hasItem(action) {
        return (this.data.user.inventory?.[action] || 0) > 0;
    },

    useItem(action) {
        if (!this.hasItem(action)) return false;
        this.data.user.inventory[action]--;
        this.save();
        return true;
    },

    getInventory() {
        return this.data.user.inventory || {};
    },

    // ── ACHIEVEMENTS ─────────────────────────────────────────
    unlockAchievement(id) {
        if (!this.data.user.unlockedAchievements) this.data.user.unlockedAchievements = [];
        if (this.data.user.unlockedAchievements.includes(id)) return;
        this.data.user.unlockedAchievements.push(id);
        this.save();
        const ach = ACHIEVEMENTS.find(a => a.id === id);
        if (!ach) return;
        if (typeof SoundManager !== 'undefined') SoundManager.play('complete');
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('achievement', { icon: ach.icon, name: ach.name, description: ach.desc, rarity: ach.rarity });
        }
    },

    checkProgressAchievements() {
        const u = this.data.user;
        if (!u.unlockedAchievements) u.unlockedAchievements = [];
        const checks = {
            first_step:    (u.totalMissions   || 0) >= 1,
            streak_3:      (u.streak          || 0) >= 3,
            gems_10:       (u.gems            || 0) >= 10,
            level_3:       (u.level           || 1) >= 3,
            questions_10:  (u.totalCorrect    || 0) >= 10,
            perfect_first: (u.totalPerfect    || 0) >= 1,
            stage_3:       (u.totalMissions   || 0) >= 3,
            streak_7:      (u.streak          || 0) >= 7,
            level_5:       (u.level           || 1) >= 5,
            combo_5:       (u.maxCombo        || 0) >= 5,
            gems_50:       (u.gems            || 0) >= 50,
            questions_50:  (u.totalCorrect    || 0) >= 50,
            streak_14:     (u.streak          || 0) >= 14,
            level_10:      (u.level           || 1) >= 10,
            perfect_5:     (u.totalPerfect    || 0) >= 5,
            questions_100: (u.totalCorrect    || 0) >= 100,
            gems_100:      (u.gems            || 0) >= 100,
            stage_10:      (u.totalMissions   || 0) >= 10,
            streak_30:     (u.streak          || 0) >= 30,
            level_15:      (u.level           || 1) >= 15,
            perfect_10:    (u.totalPerfect    || 0) >= 10,
            questions_500: (u.totalCorrect    || 0) >= 500,
        };
        for (const ach of ACHIEVEMENTS) {
            if (!u.unlockedAchievements.includes(ach.id) && checks[ach.id]) {
                this.unlockAchievement(ach.id);
            }
        }
    },

    recordGameEnd({ correct = 0, perfect = false, combo = 0, victory = true } = {}) {
        this.data.user.totalCorrect = (this.data.user.totalCorrect || 0) + correct;
        this.data.user.maxCombo     = Math.max(this.data.user.maxCombo || 0, combo);
        if (victory) {
            this.data.user.totalMissions = (this.data.user.totalMissions || 0) + 1;
            if (perfect) {
                this.data.user.totalPerfect = (this.data.user.totalPerfect || 0) + 1;
                if (typeof ModalEngine !== 'undefined') {
                    ModalEngine.enqueue('motivational', {
                        icon:  'star',
                        title: 'Pontuação Perfeita!',
                        msg:   'Você acertou tudo! Continue assim para desbloquear conquistas épicas!',
                    });
                }
            }
        }
        this.save();
        this.checkProgressAchievements();
    },

    // ── MASTERY & SMART REVIEW ───────────────────────────────
    recordWrongAnswer(chapterId, stageId, qIdx, topic) {
        if (!this.data.wrongAnswers) this.data.wrongAnswers = {};
        const key = `${chapterId}/${stageId}/${qIdx}`;
        if (!this.data.wrongAnswers[key]) {
            this.data.wrongAnswers[key] = { chapterId, stageId, qIdx, topic: topic || 'Geral', count: 0, last: 0 };
        }
        this.data.wrongAnswers[key].count++;
        this.data.wrongAnswers[key].last = Date.now();
        this.save();
    },

    getWeakTopics() {
        const wa = this.data.wrongAnswers || {};
        const topicMap = {};
        for (const item of Object.values(wa)) {
            const t = item.topic || 'Geral';
            if (!topicMap[t]) topicMap[t] = { topic: t, count: 0, chapterId: item.chapterId };
            topicMap[t].count += item.count;
        }
        return Object.values(topicMap).sort((a, b) => b.count - a.count);
    },

    getWrongAnswerCount() {
        return Object.keys(this.data.wrongAnswers || {}).length;
    },

    getReviewQuestions(n = 5) {
        const wa = Object.values(this.data.wrongAnswers || {})
            .sort((a, b) => b.count - a.count)
            .slice(0, n * 3);
        const questions = [];
        for (const item of wa) {
            const stageVar = window[item.stageId?.toUpperCase()];
            if (stageVar?.questions?.[item.qIdx]) {
                questions.push({
                    ...stageVar.questions[item.qIdx],
                    _chapterId:  item.chapterId,
                    _stageId:    item.stageId,
                    _qIdx:       item.qIdx,
                    _wrongCount: item.count,
                    _topic:      item.topic,
                });
            }
            if (questions.length >= n) break;
        }
        return questions;
    },

    getMasteryData() {
        const chapters  = window.CONFIG?.chapters || [];
        const meta      = window.CHAPTER_METADATA;
        const result    = [];

        for (const ch of chapters) {
            const prog    = this.getChapterProgress(ch.id);
            const stages  = meta?.id === ch.id ? (meta.stages || []) : [];
            const totalStars  = stages.reduce((sum, s) => sum + this.getStageStars(ch.id, s.index), 0);
            const maxStars    = stages.length * 3;
            const starPct     = maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0;
            const topics      = (this.getWeakTopics() || []).filter(t => t.chapterId === ch.id);
            result.push({
                id:       ch.id,
                subject:  ch.subject,
                title:    ch.title,
                icon:     ch.icon,
                prog,
                starPct,
                weakTopics: topics.slice(0, 3),
            });
        }
        return result;
    },

    // ── STORY MODE ───────────────────────────────────────────
    hasSeenLore(chapterId) {
        return (this.data.user.loreSeenChapters || []).includes(chapterId);
    },

    markLoreSeen(chapterId) {
        if (!this.data.user.loreSeenChapters) this.data.user.loreSeenChapters = [];
        if (!this.data.user.loreSeenChapters.includes(chapterId)) {
            this.data.user.loreSeenChapters.push(chapterId);
            this.save();
        }
    },

    // ── RESET (dev only) ─────────────────────────────────────
    hardReset() {
        ModalEngine.interrupt('dangerConfirm', {
            icon:        'warning',
            title:       'Apagar Progresso?',
            message:     'Todo o progresso local será apagado permanentemente. Esta ação não pode ser desfeita.',
            confirmText: 'Apagar tudo',
            cancelText:  'Cancelar',
            onConfirm:   () => { localStorage.removeItem(this.LS_KEY); location.reload(); },
        });
    }
};

window.State = State;
window.STATE  = State;
