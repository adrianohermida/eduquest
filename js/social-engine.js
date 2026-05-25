/**
 * EDUQUEST SOCIAL ENGINE v1.0
 * "MMORPG Illusion" — deterministic fake social data that feels live.
 * No real-time infrastructure needed. Duolingo-style social proof.
 */

const SocialEngine = {

    // ── GHOST PLAYERS ────────────────────────────────────────────
    GHOST_PLAYERS: [
        { name: 'Ana Lima',      avatar: '🦸', level: 8,  xp: 3200, streak: 14, guild: 'Dragões do Saber' },
        { name: 'Pedro Silva',   avatar: '🧙', level: 12, xp: 5800, streak: 7,  guild: 'Dragões do Saber' },
        { name: 'Maria Souza',   avatar: '🦊', level: 5,  xp: 1900, streak: 21, guild: 'Mestres da Ciência' },
        { name: 'Lucas Costa',   avatar: '🐺', level: 9,  xp: 4100, streak: 3,  guild: 'Guardiões do Quiz' },
        { name: 'Carla Mendes',  avatar: '🦁', level: 6,  xp: 2400, streak: 30, guild: 'Mestres da Ciência' },
        { name: 'Rafael Nunes',  avatar: '🤖', level: 15, xp: 7900, streak: 45, guild: 'Dragões do Saber' },
        { name: 'Fernanda Reis', avatar: '👾', level: 4,  xp: 1200, streak: 5,  guild: 'Guardiões do Quiz' },
        { name: 'Bruno Alves',   avatar: '🐯', level: 11, xp: 5100, streak: 12, guild: 'Dragões do Saber' },
        { name: 'Julia Rocha',   avatar: '🦅', level: 7,  xp: 2900, streak: 8,  guild: 'Mestres da Ciência' },
        { name: 'Thiago Melo',   avatar: '🐉', level: 3,  xp: 800,  streak: 2,  guild: 'Guardiões do Quiz' },
        { name: 'Isabela Dias',  avatar: '🐸', level: 10, xp: 4600, streak: 19, guild: 'Dragões do Saber' },
        { name: 'Gabriel Lima',  avatar: '🦹', level: 14, xp: 6700, streak: 33, guild: 'Mestres da Ciência' },
        { name: 'Sofia Castro',  avatar: '🐲', level: 6,  xp: 2200, streak: 6,  guild: 'Guardiões do Quiz' },
        { name: 'Mateus Pires',  avatar: '🤖', level: 8,  xp: 3500, streak: 11, guild: 'Dragões do Saber' },
        { name: 'Laura Ferreira',avatar: '🦊', level: 5,  xp: 1700, streak: 4,  guild: 'Mestres da Ciência' },
        { name: 'Victor Santos', avatar: '🧙', level: 13, xp: 6200, streak: 22, guild: 'Guardiões do Quiz' },
        { name: 'Camila Barros', avatar: '🦁', level: 9,  xp: 4000, streak: 17, guild: 'Dragões do Saber' },
        { name: 'Diego Moreira', avatar: '🐺', level: 7,  xp: 3100, streak: 9,  guild: 'Mestres da Ciência' },
        { name: 'Bianca Vieira', avatar: '👾', level: 4,  xp: 1500, streak: 1,  guild: 'Guardiões do Quiz' },
        { name: 'Henrique Luz',  avatar: '🦸', level: 16, xp: 8400, streak: 60, guild: 'Dragões do Saber' },
    ],

    ACTIVITY_TYPES: [
        { tpl: '{name} completou {stage} com 3 estrelas!', icon: 'star',    color: 'final'   },
        { tpl: '{name} mantém {streak} dias de sequência!', icon: 'streak', color: 'xp'      },
        { tpl: '{name} subiu para o Nível {level}!',        icon: 'xp',     color: 'xp'      },
        { tpl: '{name} desbloqueou a conquista "{ach}"!',   icon: 'achievement', color: 'rpg' },
        { tpl: '{name} derrotou o Boss Mutante V1!',        icon: 'boss',   color: 'rpg'      },
        { tpl: '{name} ganhou {gems} gemas hoje!',          icon: 'gem',    color: 'gem'      },
        { tpl: '{name} completou o Caça-Palavras!',         icon: 'compass',color: 'science'  },
        { tpl: '{name} entrou na guild {guild}!',           icon: 'guild',  color: 'science'  },
    ],

    STAGE_NAMES: [
        'Vírus e Bactérias', 'Vacinas', 'Sistema Imune', 'DNA e Genes',
        'Células', 'Doenças Infecciosas', 'Protistas', 'Fungos',
    ],

    ACHIEVEMENTS_POOL: [
        'Primeiros Passos', 'Semana de Fogo', 'Combo Devastador',
        'Caçador de Gemas', 'Estudioso', 'Guerreiro', 'Devorador de Livros',
    ],

    // ── LIVE COUNT ───────────────────────────────────────────────
    getLiveCount() {
        const h    = new Date().getHours();
        const base = h >= 8 && h <= 22 ? 180 : 40;
        const seed = Math.floor(Date.now() / 60000);
        return base + ((seed * 37 + h * 13) % 80);
    },

    // ── ACTIVITY FEED ────────────────────────────────────────────
    getActivityFeed(n = 8) {
        const feed = [];
        const now  = Date.now();
        for (let i = 0; i < n; i++) {
            const seed   = Math.floor(now / 30000) - i;
            const pi     = (seed * 7 + i * 13) % this.GHOST_PLAYERS.length;
            const ti     = (seed * 3 + i * 7)  % this.ACTIVITY_TYPES.length;
            const player = this.GHOST_PLAYERS[pi];
            const tpl    = this.ACTIVITY_TYPES[ti];

            const stage  = this.STAGE_NAMES[(seed + i) % this.STAGE_NAMES.length];
            const ach    = this.ACHIEVEMENTS_POOL[(seed * 2 + i) % this.ACHIEVEMENTS_POOL.length];
            const gems   = 10 + ((seed * 11 + i * 5) % 40);

            const text = tpl.tpl
                .replace('{name}',   `<strong>${player.name}</strong>`)
                .replace('{stage}',  stage)
                .replace('{streak}', player.streak)
                .replace('{level}',  player.level)
                .replace('{ach}',    ach)
                .replace('{gems}',   gems)
                .replace('{guild}',  player.guild);

            const minAgo = i === 0 ? 1 : i < 4 ? i * 3 : i * 7 - 5;
            feed.push({
                icon:    tpl.icon,
                color:   tpl.color,
                text,
                avatar:  player.avatar,
                name:    player.name,
                minAgo,
                timeStr: minAgo < 60
                    ? `há ${minAgo} min`
                    : `há ${Math.floor(minAgo / 60)}h`,
            });
        }
        return feed;
    },

    // ── RANKINGS (ghost + user) ──────────────────────────────────
    getGhostRankings(userXP = 0) {
        return this.GHOST_PLAYERS.map((p, i) => ({ ...p, id: `ghost_${i}` }))
            .sort((a, b) => b.xp - a.xp);
    },

    getMixedRanking(user) {
        const ghosts = this.getGhostRankings();
        const entry  = {
            id:     user.uid || 'me',
            name:   user.name || 'Você',
            avatar: user.avatar || '🦸',
            level:  user.level || 1,
            xp:     user.xp    || 0,
            streak: user.streak || 1,
            isMe:   true,
        };
        const all = [...ghosts, entry].sort((a, b) => b.xp - a.xp);
        return all.map((p, i) => ({ ...p, pos: i + 1 }));
    },

    // ── GUILDS ──────────────────────────────────────────────────
    GUILD_PRESETS: [
        { id: 'dragoes',   name: 'Dragões do Saber',    icon: '🐉', color: '#dc2626', banner: '#7f1d1d', members: 18, xp: 48200 },
        { id: 'mestres',   name: 'Mestres da Ciência',  icon: '🔬', color: '#2563eb', banner: '#1e3a5f', members: 14, xp: 39500 },
        { id: 'guardioes', name: 'Guardiões do Quiz',   icon: '🛡️', color: '#16a34a', banner: '#064e3b', members: 11, xp: 31800 },
        { id: 'fenix',     name: 'Fênix do Conhecimento', icon: '🦅', color: '#d97706', banner: '#78350f', members: 9, xp: 27300 },
        { id: 'explorers', name: 'Exploradores Livres', icon: '🧭', color: '#7c3aed', banner: '#2e1065', members: 7, xp: 19100 },
    ],

    getUserGuild() {
        const saved = localStorage.getItem('eq_guild');
        if (!saved) return null;
        try { return JSON.parse(saved); } catch { return null; }
    },

    joinGuild(guildId) {
        const g = this.GUILD_PRESETS.find(g => g.id === guildId);
        if (!g) return null;
        const guild = { ...g, joinedAt: new Date().toISOString() };
        localStorage.setItem('eq_guild', JSON.stringify(guild));
        return guild;
    },

    leaveGuild() {
        localStorage.removeItem('eq_guild');
    },

    getGuildFeed(guildId, n = 6) {
        const feed = [];
        const now  = Date.now();
        const preset = this.GUILD_PRESETS.find(g => g.id === guildId);
        const members = this.GHOST_PLAYERS.filter(p =>
            preset ? p.guild === preset.name : true
        ).slice(0, 6);

        for (let i = 0; i < Math.min(n, members.length * 2); i++) {
            const seed   = Math.floor(now / 60000) - i;
            const pi     = (seed + i) % members.length;
            const ti     = (seed * 2 + i) % 5;  // only use first 5 activity types
            const player = members[pi];
            const tpl    = this.ACTIVITY_TYPES[ti];
            const stage  = this.STAGE_NAMES[(seed + i) % this.STAGE_NAMES.length];
            const gems   = 5 + ((seed * 7 + i * 3) % 20);
            const ach    = this.ACHIEVEMENTS_POOL[(seed + i) % this.ACHIEVEMENTS_POOL.length];

            const text = tpl.tpl
                .replace('{name}',   player.name)
                .replace('{stage}',  stage)
                .replace('{streak}', player.streak)
                .replace('{level}',  player.level)
                .replace('{ach}',    ach)
                .replace('{gems}',   gems)
                .replace('{guild}',  preset?.name || '');

            const minAgo = i < 5 ? (i + 1) * 12 : (i + 1) * 30;
            feed.push({
                icon:    tpl.icon,
                color:   tpl.color,
                text,
                avatar:  player.avatar,
                name:    player.name,
                timeStr: minAgo < 60 ? `há ${minAgo} min` : `há ${Math.floor(minAgo/60)}h`,
            });
        }
        return feed;
    },

    getGuildLeaderboard(guildId) {
        const preset  = this.GUILD_PRESETS.find(g => g.id === guildId);
        const members = this.GHOST_PLAYERS
            .filter(p => preset ? p.guild === preset.name : true)
            .sort((a, b) => b.xp - a.xp);
        return members;
    },

    // ── FRIENDS ─────────────────────────────────────────────────
    getFriends() {
        try { return JSON.parse(localStorage.getItem('eq_friends') || '[]'); } catch { return []; }
    },

    addFriend(ghostId) {
        const friends = this.getFriends();
        if (!friends.includes(ghostId)) {
            friends.push(ghostId);
            localStorage.setItem('eq_friends', JSON.stringify(friends));
        }
    },

    removeFriend(ghostId) {
        const friends = this.getFriends().filter(id => id !== ghostId);
        localStorage.setItem('eq_friends', JSON.stringify(friends));
    },

    isFriend(ghostId) {
        return this.getFriends().includes(ghostId);
    },

    getFriendPlayers() {
        const ids = this.getFriends();
        return ids.map(id => {
            const idx = parseInt(id.replace('ghost_', ''), 10);
            return { ...this.GHOST_PLAYERS[idx], id };
        }).filter(p => p.name);
    },

    getChallenges() {
        try { return JSON.parse(localStorage.getItem('eq_challenges') || '[]'); } catch { return []; }
    },

    sendChallenge(ghostId) {
        const challenges = this.getChallenges();
        const idx = parseInt(ghostId.replace('ghost_', ''), 10);
        const ghost = this.GHOST_PLAYERS[idx];
        if (!ghost) return null;

        const id = `ch_${Date.now()}_${ghostId}`;
        const challenge = {
            id, ghostId,
            ghostName: ghost.name, ghostAvatar: ghost.avatar, ghostLevel: ghost.level,
            status: 'pending',
            sentAt: new Date().toISOString(),
            topic: this.STAGE_NAMES[Math.floor(Date.now() / 1000) % this.STAGE_NAMES.length],
        };
        challenges.push(challenge);
        localStorage.setItem('eq_challenges', JSON.stringify(challenges));
        return challenge;
    },

    resolveChallenge(challengeId) {
        const challenges = this.getChallenges();
        const ch = challenges.find(c => c.id === challengeId);
        if (!ch || ch.status !== 'pending') return null;

        const userLevel = (typeof State !== 'undefined') ? (State.data?.user?.level || 1) : 1;
        const seed      = parseInt(challengeId.split('_')[1], 10) || Date.now();
        const roll      = ((seed * 37) % 100);
        const winChance = 40 + Math.min(userLevel * 3, 30);
        ch.status  = roll < winChance ? 'won' : 'lost';
        ch.xpGain  = ch.status === 'won' ? 30 + Math.floor(Math.random() * 20) : 5;
        ch.resolvedAt = new Date().toISOString();

        localStorage.setItem('eq_challenges', JSON.stringify(challenges));
        return ch;
    },

    clearResolvedChallenges() {
        const challenges = this.getChallenges().filter(c => c.status === 'pending');
        localStorage.setItem('eq_challenges', JSON.stringify(challenges));
    },

    // ── SOCIAL NOTIFICATIONS ─────────────────────────────────────
    getSocialNotifications() {
        const feed  = this.getActivityFeed(3);
        const guild = this.getUserGuild();
        const notifs = [];

        // Pending challenges from friends
        const pending = this.getChallenges().filter(c => c.status === 'pending');
        if (pending.length) {
            notifs.push({
                icon:   'sword',
                color:  'rpg',
                text:   `${pending[0].ghostName} te desafiou em ${pending[0].topic}!`,
                time:   'agora',
                unread: true,
                href:   '#friends',
            });
        }

        if (guild) {
            const gFeed = this.getGuildFeed(guild.id, 2);
            if (gFeed[0]) {
                notifs.push({
                    icon:   gFeed[0].icon,
                    color:  gFeed[0].color,
                    text:   `[${guild.name}] ${gFeed[0].text.replace(/<[^>]+>/g, '')}`,
                    time:   gFeed[0].timeStr,
                    unread: true,
                    href:   '#guild',
                });
            }
        }

        if (feed[0]) {
            notifs.push({
                icon:   feed[0].icon,
                color:  feed[0].color,
                text:   feed[0].text.replace(/<[^>]+>/g, ''),
                time:   feed[0].timeStr,
                unread: false,
                href:   '#ranking',
            });
        }

        return notifs;
    },
};

window.SocialEngine = SocialEngine;
