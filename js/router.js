/**
 * EDUQUEST ROUTER v2.0
 * Hash-based SPA routing com screens completas
 */

const Router = {
    currentRoute: null,

    init() {
        // Nada especial necessário para hash routing
    },

    navigate(hash) {
        window.location.hash = hash || '#home';
    },

    handleRoute() {
        const hash  = window.location.hash || '#home';
        const clean = hash.replace('#', '');
        const parts = clean.split('/');
        const route = parts[0] || 'home';

        this.currentRoute = route;

        const container  = document.getElementById('app-container');
        const hudEl      = document.getElementById('top-hud');
        const navEl      = document.getElementById('bottom-nav');

        if (!container) {
            console.error('❌ #app-container não encontrado!');
            return;
        }

        const isGame = route === 'stage';
        if (hudEl) hudEl.classList.toggle('hidden', isGame);
        if (navEl) navEl.classList.toggle('hidden', isGame);

        container.innerHTML = '';
        this._updateNavActive(route);

        switch (route) {
            case 'home':
            case '':
                this.renderHome(container);
                break;
            case 'chapter':
                this.renderChapterMap(container, parts[1]);
                break;
            case 'stage':
                this.renderStagePrep(container, parts[1], parts[2]);
                break;
            case 'profile':
                this.renderProfile(container);
                break;
            case 'shop':
                this.renderShop(container);
                break;
            case 'missions':
                this.renderMissions(container);
                break;
            default:
                this.renderHome(container);
        }
    },

    _updateNavActive(route) {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            const isActive = tab.dataset.route === route ||
                             (route === '' && tab.dataset.route === 'home');
            tab.classList.toggle('active', isActive);
        });
    },

    // ── HOME ─────────────────────────────────────────────
    renderHome(container) {
        const user     = State.data.user;
        const xpProg   = State.getXPProgress();
        const streak   = State.getUserStreak();
        const chapters = (CONFIG.chapters || []);

        const chaptersHTML = chapters.map(ch => {
            const prog    = State.getChapterProgress(ch.id);
            const percent = prog.percent;
            return `
            <div class="chapter-card ${ch.unlocked ? '' : 'locked'}"
                 onclick="${ch.unlocked ? `Router.navigate('#chapter/${ch.id}')` : ''}">
                <div class="chapter-icon-wrap">${ch.icon}</div>
                <div class="chapter-body">
                    <div class="chapter-subject">${ch.subject} · ${ch.grade}</div>
                    <div class="chapter-title">${ch.title}</div>
                    <div class="chapter-progress-row">
                        <div class="chapter-progress-track">
                            <div class="chapter-progress-fill" style="width:${percent}%"></div>
                        </div>
                        <span class="chapter-percent">${percent}%</span>
                    </div>
                </div>
                <div class="chapter-arrow">${ch.unlocked ? '›' : '🔒'}</div>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="screen screen-home">
            <div class="home-hero">
                <div class="hero-text">
                    <h1>Olá, ${user.name}! 👋</h1>
                    <p>Continue sua jornada épica</p>
                </div>
                <div class="hero-avatar">🦸</div>
            </div>

            <div class="xp-level-card">
                <div class="xp-level-row">
                    <span class="level-badge">⚡ Nível ${user.level}</span>
                    <span class="xp-text-small">${xpProg.current} / ${xpProg.needed} XP</span>
                </div>
                <div class="xp-track">
                    <div class="xp-fill" style="width:${xpProg.percent}%"></div>
                </div>
            </div>

            ${streak > 0 ? `
            <div class="streak-banner">
                <div class="streak-flame">🔥</div>
                <div class="streak-info">
                    <span class="streak-count">${streak} ${streak === 1 ? 'dia' : 'dias'} seguidos!</span>
                    <span class="streak-sub">Continue amanhã para manter a sequência</span>
                </div>
                <span class="streak-gems">+${CONFIG.gems.dailyStreak} 💎</span>
            </div>` : ''}

            <div class="section-header">
                <span class="section-title">📚 Suas Matérias</span>
                <a href="#missions" class="section-link">Ver todas ›</a>
            </div>

            ${chaptersHTML}

            <div class="section-header mt-4">
                <span class="section-title">🏆 Sua Jornada</span>
            </div>
            <div class="xp-level-card">
                <div style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:var(--brand)">${user.xp}</div>
                        <div style="font-size:0.7rem;color:var(--text-muted);font-weight:700">XP TOTAL</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:#0369a1">${user.gems}</div>
                        <div style="font-size:0.7rem;color:var(--text-muted);font-weight:700">GEMAS</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:#c2410c">${streak}</div>
                        <div style="font-size:0.7rem;color:var(--text-muted);font-weight:700">SEQUÊNCIA</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:var(--success)">${user.level}</div>
                        <div style="font-size:0.7rem;color:var(--text-muted);font-weight:700">NÍVEL</div>
                    </div>
                </div>
            </div>
        </div>`;
    },

    // ── CHAPTER MAP ───────────────────────────────────────
    renderChapterMap(container, chapterId) {
        if (!chapterId) { this.renderHome(container); return; }

        const meta        = window.CHAPTER_METADATA || { title: 'Capítulo', icon: '📚', description: '', totalStages: 5 };
        const totalStages = meta.totalStages || 5;

        let nodesHTML = '';
        for (let i = 1; i <= totalStages; i++) {
            const unlocked  = State.isStageUnlocked(chapterId, i);
            const completed = State.isStageCompleted(chapterId, i);
            const stars     = State.getStageStars(chapterId, i);
            const isCurrent = unlocked && !completed;
            const stageKey  = `stage_0${i}`;
            const stageData = window[`STAGE_0${i}`];
            const stageName = stageData ? stageData.title : `Missão ${i}`;
            const stageDiff = stageData ? stageData.difficulty : 'easy';

            const starsHTML = [1,2,3].map(s =>
                `<span style="color:${s <= stars ? 'var(--gold)' : 'var(--border)'};font-size:0.9rem">★</span>`
            ).join('');

            const nodeClass = completed ? 'completed' : isCurrent ? 'current-active unlocked' : unlocked ? 'unlocked' : 'locked';
            const nodeIcon  = completed ? '🏆' : unlocked ? i : '🔒';

            const connectorClass = i > 1 ? (State.isStageCompleted(chapterId, i-1) ? 'done' : '') : '';

            const onclick = unlocked
                ? `onclick="Router.navigate('#stage/${chapterId}/${stageKey}')"`
                : '';

            const isRight = i % 2 === 0;

            nodesHTML += `
            ${i > 1 ? `<div class="stage-connector ${connectorClass}"></div>` : ''}
            <div class="stage-node-wrap ${isRight ? 'right' : ''}">
                <div class="stage-node ${nodeClass}" ${onclick} title="${stageName}">
                    ${nodeIcon}
                </div>
                <div class="stage-info">
                    <div class="stage-stars">${completed ? starsHTML : ''}</div>
                    <div class="stage-name">${stageName}</div>
                    <div class="stage-meta">${unlocked ? (completed ? 'Concluída' : 'Em andamento') : 'Bloqueada'} · ${stageDiff ? (CONFIG.difficulty[stageDiff]?.label || stageDiff) : ''}</div>
                </div>
            </div>`;
        }

        container.innerHTML = `
        <div class="screen">
            <button class="btn-back" onclick="Router.navigate('#home')">
                ‹ Voltar
            </button>

            <div class="chapter-map-header">
                <span class="chapter-map-icon">${meta.icon || '📚'}</span>
                <div class="chapter-map-title">${meta.title}</div>
                <div class="chapter-map-desc">${meta.description || ''}</div>
            </div>

            <div class="stages-path">
                ${nodesHTML}
            </div>
        </div>`;
    },

    // ── STAGE PREP ────────────────────────────────────────
    renderStagePrep(container, chapterId, stageId) {
        if (!chapterId || !stageId) { this.renderHome(container); return; }

        const stageVarName = stageId.toUpperCase();
        const stageData    = window[stageVarName];

        if (!stageData) {
            container.innerHTML = `
            <div class="screen">
                <button class="btn-back" onclick="Router.navigate('#chapter/${chapterId}')">‹ Voltar</button>
                <div class="empty-state">
                    <span class="empty-icon">⚠️</span>
                    <p>Dados desta missão não encontrados.</p>
                </div>
                <button class="btn-primary mt-4" onclick="Router.navigate('#chapter/${chapterId}')">Voltar ao Mapa</button>
            </div>`;
            return;
        }

        const stageIndex  = parseInt(stageId.replace('stage_0', '')) || 1;
        const isUnlocked  = State.isStageUnlocked(chapterId, stageIndex);

        if (!isUnlocked) {
            this.renderChapterMap(container, chapterId);
            return;
        }

        const rewards    = stageData.rewards || {};
        const difficulty = stageData.difficulty || 'easy';
        const diffData   = CONFIG.difficulty[difficulty] || CONFIG.difficulty.easy;
        const objectives = (stageData.learningObjectives || []).slice(0, 4);

        const objectivesHTML = objectives.map(obj =>
            `<div class="objective-item">${obj}</div>`
        ).join('');

        const xpReward   = rewards.xp   || CONFIG.xp.correct * 10;
        const gemReward  = Math.floor(xpReward / 10);

        container.innerHTML = `
        <div class="prep-screen">
            <button class="btn-back" onclick="Router.navigate('#chapter/${chapterId}')">‹ Mapa</button>

            <div class="prep-icon-wrap">${stageData.icon || '⚡'}</div>
            <div class="prep-title">${stageData.title}</div>
            <div class="prep-sub">${stageData.estimatedTime || 15} min · ${stageData.questions?.length || 10} questões</div>

            <div class="prep-rewards">
                <div class="reward-chip">⚡ ${xpReward} XP</div>
                <div class="reward-chip">💎 ${gemReward} Gemas</div>
            </div>

            <div class="prep-objectives">
                <h3>O que você vai aprender</h3>
                ${objectivesHTML}
            </div>

            <div class="prep-difficulty">
                <div class="difficulty-dot ${difficulty}"></div>
                Dificuldade: ${diffData.label}
            </div>

            <button class="btn-primary" onclick="GameEngine.start('${chapterId}', '${stageId}', ${stageIndex})">
                ⚡ Iniciar Missão!
            </button>
        </div>`;
    },

    // ── PROFILE ───────────────────────────────────────────
    renderProfile(container) {
        const user   = State.data.user;
        const xpProg = State.getXPProgress();

        const badges = [
            { icon: '🛡️', name: 'Guardião',   locked: false },
            { icon: '🔬', name: 'Cientista',   locked: false },
            { icon: '⚡', name: 'Relâmpago',   locked: user.level < 3 },
            { icon: '🌟', name: 'Estrela',     locked: user.level < 5 },
            { icon: '🏆', name: 'Campeão',     locked: user.level < 10 },
            { icon: '🔥', name: 'Imparável',   locked: user.streak < 7 },
            { icon: '💎', name: 'Colecionador',locked: user.gems < 100 },
            { icon: '🧠', name: 'Gênio',       locked: user.level < 15 }
        ];

        const badgesHTML = badges.map(b => `
            <div class="achievement-item ${b.locked ? 'locked' : ''}">
                <span class="achievement-icon">${b.icon}</span>
                <span class="achievement-name">${b.name}</span>
            </div>`
        ).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="profile-hero">
                <span class="profile-avatar">🦸</span>
                <div class="profile-name">${user.name}</div>
                <div class="profile-level">Nível ${user.level} · Aprendiz</div>
            </div>

            <div class="xp-level-card mb-3">
                <div class="xp-level-row">
                    <span class="level-badge">⚡ Nível ${user.level}</span>
                    <span class="xp-text-small">${xpProg.current} / ${xpProg.needed} XP</span>
                </div>
                <div class="xp-track">
                    <div class="xp-fill" style="width:${xpProg.percent}%"></div>
                </div>
            </div>

            <div class="stats-grid-2x2 mb-3">
                <div class="stat-box-card">
                    <span class="stat-box-icon">⚡</span>
                    <span class="stat-box-value">${user.xp}</span>
                    <span class="stat-box-label">XP Total</span>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-icon">💎</span>
                    <span class="stat-box-value">${user.gems}</span>
                    <span class="stat-box-label">Gemas</span>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-icon">🔥</span>
                    <span class="stat-box-value">${user.streak}</span>
                    <span class="stat-box-label">Sequência</span>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-icon">❤️</span>
                    <span class="stat-box-value">${user.hearts}</span>
                    <span class="stat-box-label">Vidas</span>
                </div>
            </div>

            <div class="section-header">
                <span class="section-title">🏅 Conquistas</span>
            </div>
            <div class="achievements-grid mb-3">
                ${badgesHTML}
            </div>
        </div>`;
    },

    // ── SHOP ──────────────────────────────────────────────
    renderShop(container) {
        const gems = State.getUserGems();

        const items = [
            { icon: '❤️', name: 'Vida Extra',    desc: 'Recupere uma vida', price: 20, action: 'heart' },
            { icon: '⏱️', name: 'Mais Tempo',    desc: '+10s em cada questão', price: 30, action: 'time' },
            { icon: '🔑', name: 'Dica Mágica',   desc: 'Elimina 2 opções erradas', price: 40, action: 'hint' },
            { icon: '🛡️', name: 'Escudo',        desc: 'Protege 1 vida por fase', price: 50, action: 'shield' },
            { icon: '⚡', name: 'XP Duplo',       desc: 'Dobra XP na próxima fase', price: 80, action: 'xp2x' },
            { icon: '🌟', name: 'Estrela Grátis', desc: 'Garante 1 estrela mínima', price: 100, action: 'star' }
        ];

        const itemsHTML = items.map(item => `
            <div class="shop-item-card">
                <span class="shop-item-icon">${item.icon}</span>
                <div class="shop-item-name">${item.name}</div>
                <div class="shop-item-desc">${item.desc}</div>
                <button class="shop-buy-btn" onclick="Router._shopBuy('${item.action}', ${item.price})">
                    💎 ${item.price}
                </button>
            </div>`
        ).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="shop-balance">
                <div class="shop-balance-label">Suas Gemas</div>
                <div class="shop-balance-gems">💎 ${gems}</div>
            </div>

            <div class="section-header">
                <span class="section-title">🛒 Itens Disponíveis</span>
            </div>
            <div class="shop-grid">
                ${itemsHTML}
            </div>

            <div class="section-header mt-4">
                <span class="section-title">💎 Comprar Gemas</span>
            </div>
            <div class="xp-level-card">
                <p style="font-size:0.82rem;color:var(--text-muted);font-weight:600;text-align:center">
                    🚧 Loja de gemas em breve! Continue jogando para ganhar gemas gratuitamente.
                </p>
            </div>
        </div>`;
    },

    _shopBuy(action, price) {
        if (State.getUserGems() < price) {
            alert('Gemas insuficientes! Continue jogando para ganhar mais. 💎');
            return;
        }
        State.addGems(-price);
        alert(`✅ Item comprado! Disponível na próxima missão.`);
        this.renderShop(document.getElementById('app-container'));
    },

    // ── MISSIONS ──────────────────────────────────────────
    renderMissions(container) {
        const chapters   = CONFIG.chapters || [];

        const chaptersHTML = chapters.map(ch => {
            const prog    = State.getChapterProgress(ch.id);
            const percent = prog.percent;
            return `
            <div class="chapter-card" onclick="Router.navigate('#chapter/${ch.id}')">
                <div class="chapter-icon-wrap">${ch.icon}</div>
                <div class="chapter-body">
                    <div class="chapter-subject">${ch.subject} · ${ch.grade}</div>
                    <div class="chapter-title">${ch.title}</div>
                    <div class="chapter-progress-row">
                        <div class="chapter-progress-track">
                            <div class="chapter-progress-fill" style="width:${percent}%"></div>
                        </div>
                        <span class="chapter-percent">${percent}%</span>
                    </div>
                </div>
                <div class="chapter-arrow">›</div>
            </div>`;
        }).join('');

        const comingSoonHTML = ['Matemática 7º Ano', 'Português 7º Ano', 'História 7º Ano'].map(name => `
            <div class="chapter-card locked">
                <div class="chapter-icon-wrap" style="background:var(--surface-3)">📚</div>
                <div class="chapter-body">
                    <div class="chapter-subject" style="color:var(--text-muted)">Em Breve</div>
                    <div class="chapter-title">${name}</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;margin-top:4px">Aguarde novos conteúdos!</div>
                </div>
                <div class="chapter-arrow">🔒</div>
            </div>`
        ).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="missions-banner">
                <h2>⚔️ Todas as Missões</h2>
                <p>Escolha sua próxima batalha, herói!</p>
            </div>

            <div class="section-header">
                <span class="section-title">🔓 Disponíveis</span>
            </div>
            ${chaptersHTML}

            <div class="section-header mt-4">
                <span class="section-title">🔒 Em Breve</span>
            </div>
            ${comingSoonHTML}
        </div>`;
    }
};

window.Router = Router;
