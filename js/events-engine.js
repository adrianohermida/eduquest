/**
 * EDUQUEST EVENTS ENGINE v1.0
 * Seasonal events, battle pass, and rotating weekly content.
 * "MMORPG Illusion" — deterministic event rotation, no backend needed.
 */

const EventsEngine = {

    SEASON_DURATION_DAYS: 30,
    TIERS_COUNT: 30,
    XP_PER_TIER: 150,

    // ── WEEKLY EVENTS ──────────────────────────────────────────────
    EVENTS: [
        {
            id: 'pandemia_zero',
            name: 'Operação: Pandemia Zero',
            icon: 'virus',
            color: 'science',
            badgeColor: '#16a34a',
            desc: 'XP em dobro em missões de Ciências! Erradique as doenças.',
            bonusXPMult: 2,
            missions: [
                { id: 'ev_pz_complete3', desc: 'Complete 3 missões',         xp: 100, gems: 5,  goal: 3,  type: 'complete' },
                { id: 'ev_pz_streak3',   desc: 'Mantenha streak de 3 dias',  xp: 150, gems: 8,  goal: 3,  type: 'streak'   },
                { id: 'ev_pz_correct20', desc: 'Acerte 20 questões',         xp: 200, gems: 10, goal: 20, type: 'correct'  },
            ],
        },
        {
            id: 'liga_campeoes',
            name: 'Liga dos Campeões',
            icon: 'trophy',
            color: 'final',
            badgeColor: '#d97706',
            desc: 'Compete com jogadores de todo Brasil. Melhor XP na semana vence!',
            bonusXPMult: 1.5,
            missions: [
                { id: 'ev_lc_perfect2',  desc: 'Conclua 2 missões perfeitas', xp: 200, gems: 15, goal: 2,  type: 'perfect'  },
                { id: 'ev_lc_combo10',   desc: 'Alcance combo x10',           xp: 300, gems: 20, goal: 10, type: 'combo'    },
                { id: 'ev_lc_correct30', desc: 'Acerte 30 questões',          xp: 150, gems: 10, goal: 30, type: 'correct'  },
            ],
        },
        {
            id: 'maratona_descobertas',
            name: 'Maratona das Descobertas',
            icon: 'compass',
            color: 'gem',
            badgeColor: '#7c3aed',
            desc: 'Quanto mais você estuda, mais XP ganha. Não pare nunca!',
            bonusXPMult: 1.8,
            missions: [
                { id: 'ev_md_play5',   desc: 'Jogue 5 missões',      xp: 120, gems: 8,  goal: 5,   type: 'complete' },
                { id: 'ev_md_xp500',   desc: 'Ganhe 500 XP no evento', xp: 250, gems: 15, goal: 500, type: 'xp'      },
                { id: 'ev_md_streak5', desc: 'Streak de 5 dias',      xp: 350, gems: 20, goal: 5,   type: 'streak'   },
            ],
        },
        {
            id: 'caca_tesouro',
            name: 'Caça ao Tesouro',
            icon: 'gem',
            color: 'gem',
            badgeColor: '#0ea5e9',
            desc: 'Cada missão tem chance de dropar gemas extras. Corra!',
            bonusXPMult: 1,
            bonusGems: true,
            missions: [
                { id: 'ev_ct_gems30',    desc: 'Colete 30 gemas',          xp: 100, gems: 20, goal: 30, type: 'gems'    },
                { id: 'ev_ct_perfect3',  desc: 'Conclua 3 missões perfeitas', xp: 200, gems: 15, goal: 3, type: 'perfect'  },
                { id: 'ev_ct_complete5', desc: 'Complete 5 missões',        xp: 150, gems: 10, goal: 5,  type: 'complete' },
            ],
        },
    ],

    // ── BATTLE PASS REWARDS ────────────────────────────────────────
    BATTLE_PASS_REWARDS: [
        { tier: 1,  free: { type: 'xp',   amount: 50  },          premium: { type: 'gems', amount: 20 } },
        { tier: 2,  free: { type: 'gems', amount: 5   },          premium: { type: 'item', id: 'hint', qty: 2 } },
        { tier: 3,  free: { type: 'xp',   amount: 100 },          premium: { type: 'gems', amount: 30 } },
        { tier: 5,  free: { type: 'item', id: 'xp2x', qty: 1 },   premium: { type: 'item', id: 'shield', qty: 2 } },
        { tier: 7,  free: { type: 'xp',   amount: 200 },          premium: { type: 'gems', amount: 50 } },
        { tier: 10, free: { type: 'gems', amount: 15  },           premium: { type: 'item', id: 'star', qty: 2 } },
        { tier: 12, free: { type: 'item', id: 'heart', qty: 3 },  premium: { type: 'xp', amount: 500 } },
        { tier: 15, free: { type: 'xp',   amount: 300 },          premium: { type: 'gems', amount: 100 } },
        { tier: 18, free: { type: 'item', id: 'time', qty: 2 },   premium: { type: 'item', id: 'xp2x', qty: 3 } },
        { tier: 20, free: { type: 'gems', amount: 25  },           premium: { type: 'xp', amount: 800 } },
        { tier: 25, free: { type: 'item', id: 'hint', qty: 5 },   premium: { type: 'gems', amount: 150 } },
        { tier: 30, free: { type: 'xp',   amount: 500 },          premium: { type: 'gems', amount: 300 } },
    ],

    ITEM_LABELS: { xp2x: 'XP Duplo', hint: 'Dica', heart: 'Vida Extra', shield: 'Escudo', star: 'Estrela', time: 'Tempo Extra' },
    ITEM_ICONS:  { xp2x: 'xp', hint: 'ai-tutor', heart: 'heart', shield: 'shield', star: 'star', time: 'streak' },

    // ── EVENT API ──────────────────────────────────────────────────
    getCurrentEvent() {
        const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
        return this.EVENTS[weekNum % this.EVENTS.length];
    },

    getEventTimeRemaining() {
        const now     = Date.now();
        const weekMs  = 7 * 24 * 60 * 60 * 1000;
        const weekEnd = (Math.floor(now / weekMs) + 1) * weekMs;
        return Math.max(0, Math.floor((weekEnd - now) / 1000));
    },

    formatTimeRemaining(seconds) {
        const d = Math.floor(seconds / 86400);
        const h = Math.floor((seconds % 86400) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        if (d > 0) return `${d}d ${h}h`;
        if (h > 0) return `${h}h ${m}m`;
        return `${m}m`;
    },

    getEventMissionProgress(missionId) {
        if (typeof State === 'undefined') return 0;
        return (State.data.eventMissions || {})[missionId] || 0;
    },

    isEventMissionClaimed(missionId) {
        if (typeof State === 'undefined') return false;
        return (State.data.user.eventMissionsClaimed || []).includes(missionId);
    },

    claimEventMission(missionId) {
        if (typeof State === 'undefined') return null;
        const event   = this.getCurrentEvent();
        const mission = event.missions.find(m => m.id === missionId);
        if (!mission) return null;
        if (this.isEventMissionClaimed(missionId)) return null;
        if (this.getEventMissionProgress(missionId) < mission.goal) return null;

        State.addXP(mission.xp);
        State.addGems(mission.gems);
        if (!State.data.user.eventMissionsClaimed) State.data.user.eventMissionsClaimed = [];
        State.data.user.eventMissionsClaimed.push(missionId);
        State.save();
        return mission;
    },

    // Called by game-engine after completing a mission
    trackMissionComplete() {
        this._incrementEventMissions('complete', 1);
        this._incrementEventMissions('xp', 0); // xp tracked separately
    },

    trackCorrectAnswer() {
        this._incrementEventMissions('correct', 1);
    },

    trackCombo(combo) {
        const em = State.data.eventMissions || {};
        const event = this.getCurrentEvent();
        event.missions.filter(m => m.type === 'combo').forEach(m => {
            if (!this.isEventMissionClaimed(m.id)) {
                em[m.id] = Math.max(em[m.id] || 0, combo);
            }
        });
        State.data.eventMissions = em;
        State.save();
    },

    trackXPGained(amount) {
        this._incrementEventMissions('xp', amount);
    },

    trackPerfect() {
        this._incrementEventMissions('perfect', 1);
    },

    trackGemsGained(amount) {
        this._incrementEventMissions('gems', amount);
    },

    _incrementEventMissions(type, delta) {
        if (typeof State === 'undefined') return;
        const em    = State.data.eventMissions || {};
        const event = this.getCurrentEvent();
        event.missions.filter(m => m.type === type).forEach(m => {
            if (!this.isEventMissionClaimed(m.id)) {
                em[m.id] = (em[m.id] || 0) + delta;
            }
        });
        State.data.eventMissions = em;
        State.save();
    },

    // ── BATTLE PASS ────────────────────────────────────────────────
    getBattlePassTier() {
        if (typeof State === 'undefined') return 0;
        const bpXP = State.data.user.battlePassXP || 0;
        return Math.min(this.TIERS_COUNT, Math.floor(bpXP / this.XP_PER_TIER));
    },

    getBattlePassProgress() {
        if (typeof State === 'undefined') return { tier: 0, pct: 0, xpInTier: 0, xpForNext: this.XP_PER_TIER };
        const bpXP      = State.data.user.battlePassXP || 0;
        const tier      = this.getBattlePassTier();
        if (tier >= this.TIERS_COUNT) return { tier, pct: 100, xpInTier: this.XP_PER_TIER, xpForNext: 0 };
        const xpInTier  = bpXP % this.XP_PER_TIER;
        const xpForNext = this.XP_PER_TIER - xpInTier;
        return { tier, pct: Math.round((xpInTier / this.XP_PER_TIER) * 100), xpInTier, xpForNext };
    },

    isRewardClaimed(tier, track) {
        if (typeof State === 'undefined') return false;
        return (State.data.user.battlePassClaimed || []).includes(`${track}_${tier}`);
    },

    claimReward(tier, track = 'free') {
        if (typeof State === 'undefined') return null;
        const id = `${track}_${tier}`;
        if (this.isRewardClaimed(tier, track)) return null;
        if (this.getBattlePassTier() < tier) return null;
        if (track === 'premium' && !State.data.user.isPremium) return null;

        const rewardDef = this.BATTLE_PASS_REWARDS.find(r => r.tier === tier);
        if (!rewardDef) return null;
        const r = rewardDef[track];

        if (r.type === 'xp')   State.addXP(r.amount);
        if (r.type === 'gems') State.addGems(r.amount);
        if (r.type === 'item') State.addItem(r.id, r.qty || 1);

        if (!State.data.user.battlePassClaimed) State.data.user.battlePassClaimed = [];
        State.data.user.battlePassClaimed.push(id);
        State.save();
        return r;
    },

    addBattlePassXP(amount) {
        if (typeof State === 'undefined') return;
        State.data.user.battlePassXP = (State.data.user.battlePassXP || 0) + amount;
        State.save();
    },

    // Called after any XP gain (hook from state or game engine)
    onXPGained(amount) {
        this.addBattlePassXP(amount);
        this.trackXPGained(amount);
    },
};

window.EventsEngine = EventsEngine;
