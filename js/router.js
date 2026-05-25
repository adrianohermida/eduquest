/**
 * EDUQUEST ROUTER v3.0
 * Hash-based SPA routing com auth guard, onboarding e adventure map
 */

const Router = {
    currentRoute: null,
    _onboardData: { goal: null, dailyGoal: null, name: '' },

    init() {},

    navigate(hash) {
        window.location.hash = hash || '#home';
    },

    handleRoute() {
        const hash  = window.location.hash || '#home';
        const clean = hash.replace('#', '');
        const parts = clean.split('/');
        const route = parts[0] || 'home';

        this.currentRoute = route;

        const container = document.getElementById('app-container');
        const hudEl     = document.getElementById('top-hud');
        const navEl     = document.getElementById('bottom-nav');

        if (!container) { console.error('❌ #app-container não encontrado!'); return; }

        const publicRoutes = ['login', 'register', 'onboarding'];
        if (!publicRoutes.includes(route)) {
            if (!State.isAuthenticated()) { this.navigate('#login'); return; }
            if (!State.isOnboarded())     { this.navigate('#onboarding/1'); return; }
        }

        const isGame = route === 'stage';
        const isAuth = publicRoutes.includes(route);
        if (hudEl) hudEl.classList.toggle('hidden', isGame || isAuth);
        if (navEl) navEl.classList.toggle('hidden', isGame || isAuth);

        container.innerHTML = '';
        if (!isAuth && !isGame) this._updateNavActive(route);

        switch (route) {
            case 'login':      this.renderLogin(container);                               break;
            case 'register':   this.renderRegister(container);                            break;
            case 'onboarding': this.renderOnboarding(container, parseInt(parts[1]) || 1); break;
            case 'home':
            case '':           this.renderHome(container);      break;
            case 'chapter':    this.renderChapterMap(container, parts[1]);               break;
            case 'stage':      this.renderStagePrep(container, parts[1], parts[2]);      break;
            case 'profile':    this.renderProfile(container);   break;
            case 'shop':       this.renderShop(container);      break;
            case 'missions':   this.renderMissions(container);  break;
            default:           this.renderHome(container);
        }
    },

    _updateNavActive(route) {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            const isActive = tab.dataset.route === route ||
                             (route === '' && tab.dataset.route === 'home');
            tab.classList.toggle('active', isActive);
        });
    },

    // ── AUTH ─────────────────────────────────────────────
    renderLogin(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-logo">⚡ EduQuest</div>
            <div class="auth-tagline">Aprenda. Evolua. Domine.</div>
            <div class="auth-card">
                <div class="auth-title">Bem-vindo de volta!</div>
                <div class="auth-field">
                    <label class="auth-label">Email</label>
                    <input class="auth-input" type="email" id="login-email"
                        placeholder="seu@email.com" autocomplete="email">
                </div>
                <div class="auth-field">
                    <label class="auth-label">Senha</label>
                    <input class="auth-input" type="password" id="login-password"
                        placeholder="••••••" autocomplete="current-password">
                </div>
                <div class="auth-error" id="login-error">Email ou senha incorretos.</div>
                <button class="btn-primary mt-4" onclick="Router._doLogin()">⚡ Entrar</button>
                <div class="auth-footer mt-3">
                    Não tem conta?
                    <span onclick="Router.navigate('#register')" style="cursor:pointer">
                        <strong style="color:var(--brand)">Criar conta</strong>
                    </span>
                </div>
            </div>
        </div>`;
        setTimeout(() => document.getElementById('login-email')?.focus(), 120);

        // Allow enter key
        setTimeout(() => {
            ['login-email','login-password'].forEach(id => {
                document.getElementById(id)?.addEventListener('keydown', e => {
                    if (e.key === 'Enter') Router._doLogin();
                });
            });
        }, 150);
    },

    _doLogin() {
        const email    = (document.getElementById('login-email')?.value || '').trim();
        const password = (document.getElementById('login-password')?.value || '');
        const result   = State.login(email, password);
        if (result.success) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('click');
            State.isOnboarded() ? this.navigate('#home') : this.navigate('#onboarding/1');
        } else {
            const err = document.getElementById('login-error');
            if (err) err.classList.add('show');
            document.getElementById('login-password')?.classList.add('shake');
            setTimeout(() => document.getElementById('login-password')?.classList.remove('shake'), 500);
        }
    },

    renderRegister(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-logo">⚡ EduQuest</div>
            <div class="auth-tagline">Crie sua conta gratuitamente</div>
            <div class="auth-card">
                <div class="auth-title">Criar Conta</div>
                <div class="auth-field">
                    <label class="auth-label">Email</label>
                    <input class="auth-input" type="email" id="reg-email"
                        placeholder="seu@email.com">
                </div>
                <div class="auth-field">
                    <label class="auth-label">Senha</label>
                    <input class="auth-input" type="password" id="reg-password"
                        placeholder="mínimo 6 caracteres">
                </div>
                <div class="auth-error show" id="reg-info"
                    style="color:var(--text-muted); display:block;">
                    Demo: jghermidamaia@gmail.com / 180514
                </div>
                <button class="btn-primary mt-4" onclick="Router._doLogin()">🚀 Entrar</button>
                <div class="auth-footer mt-3">
                    Já tem conta?
                    <span onclick="Router.navigate('#login')" style="cursor:pointer">
                        <strong style="color:var(--brand)">Entrar</strong>
                    </span>
                </div>
            </div>
        </div>`;
    },

    // ── ONBOARDING ────────────────────────────────────────
    renderOnboarding(container, step) {
        const steps = [
            {
                emoji: '🎯',
                title: 'Por que você quer aprender?',
                sub: 'Isso nos ajuda a personalizar sua experiência',
                options: [
                    { icon: '📈', title: 'Melhorar minhas notas',  desc: 'Quero ir bem nas provas',        value: 'grades'   },
                    { icon: '🏆', title: 'Me preparar para provas', desc: 'Tenho provas importantes',       value: 'exams'    },
                    { icon: '🧠', title: 'Aprender por curiosidade',desc: 'Gosto de coisas novas',          value: 'curiosity'},
                    { icon: '⚡', title: 'Superar desafios',         desc: 'Quero ser o melhor da turma',   value: 'compete'  }
                ],
                key: 'goal'
            },
            {
                emoji: '⏰',
                title: 'Qual é seu objetivo diário?',
                sub: 'Pequenos compromissos constroem grandes resultados',
                options: [
                    { icon: '🌱', title: '5 minutos',  desc: 'Treino leve — vai devagar',      value: 5  },
                    { icon: '⚡', title: '10 minutos', desc: 'Ritmo ideal — recomendado',      value: 10 },
                    { icon: '🔥', title: '15 minutos', desc: 'Modo intenso — vai fundo',        value: 15 }
                ],
                key: 'dailyGoal'
            },
            {
                emoji: '✨',
                title: 'Como posso te chamar?',
                sub: 'Seu nome de herói no EduQuest',
                isName: true, key: 'name'
            }
        ];

        const s = steps[step - 1];
        if (!s) { this.navigate('#home'); return; }

        const dotsHTML = steps.map((_, i) =>
            `<div class="onboard-progress-dot ${i < step ? 'active' : ''}"></div>`
        ).join('');

        let contentHTML = '';
        if (s.isName) {
            contentHTML = `
            <div class="auth-field" style="padding: 0 var(--sp-4)">
                <input class="auth-input" type="text" id="onboard-name"
                    placeholder="Ex: Herói, Alex, Campeão..."
                    style="text-align:center; font-size:1.1rem; font-weight:900;"
                    maxlength="20" value="${this._onboardData.name || ''}">
            </div>`;
        } else {
            contentHTML = `
            <div class="onboard-options">
                ${s.options.map(o => {
                    const val = typeof o.value === 'number' ? o.value : `'${o.value}'`;
                    const sel = this._onboardData[s.key] === o.value ? 'selected' : '';
                    return `
                    <button class="onboard-option ${sel}"
                        onclick="Router._onboardSelect('${s.key}', ${val}, this)">
                        <span class="onboard-option-icon">${o.icon}</span>
                        <div class="onboard-option-text">
                            <span class="onboard-option-title">${o.title}</span>
                            <span class="onboard-option-desc">${o.desc}</span>
                        </div>
                    </button>`;
                }).join('')}
            </div>`;
        }

        const isLast   = step === steps.length;
        const btnLabel = isLast ? '🚀 Começar Aventura!' : 'Continuar →';
        const onNext   = isLast
            ? `Router._finishOnboarding()`
            : `Router._onboardNext(${step}, '${s.key}', ${!!s.isName})`;

        container.innerHTML = `
        <div class="onboard-screen">
            <div class="onboard-progress">${dotsHTML}</div>
            <div class="onboard-step">
                <div class="onboard-emoji">${s.emoji}</div>
                <div class="onboard-title">${s.title}</div>
                <div class="onboard-sub">${s.sub}</div>
                ${contentHTML}
            </div>
            <button class="btn-primary" onclick="${onNext}">${btnLabel}</button>
        </div>`;

        if (s.isName) {
            setTimeout(() => {
                const inp = document.getElementById('onboard-name');
                inp?.focus();
                inp?.addEventListener('keydown', e => {
                    if (e.key === 'Enter') Router._finishOnboarding();
                });
            }, 120);
        }
    },

    _onboardSelect(key, value, el) {
        this._onboardData[key] = value;
        el.closest('.onboard-options').querySelectorAll('.onboard-option')
            .forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        if (typeof SoundManager !== 'undefined') SoundManager.play('click');
    },

    _onboardNext(step, key, isName) {
        if (isName) {
            this._onboardData.name = document.getElementById('onboard-name')?.value?.trim() || '';
        }
        this.navigate(`#onboarding/${step + 1}`);
    },

    _finishOnboarding() {
        const name = document.getElementById('onboard-name')?.value?.trim() || 'Herói';
        this._onboardData.name = name;
        State.completeOnboarding(this._onboardData.name, this._onboardData.dailyGoal || 10);
        if (typeof Utils !== 'undefined') Utils.confetti();
        this.navigate('#home');
    },

    // ── HOME ─────────────────────────────────────────────
    renderHome(container) {
        const user     = State.data.user;
        const xpProg   = State.getXPProgress();
        const streak   = State.getUserStreak();
        const chapters = CONFIG.chapters || [];

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

        const questsHTML = `
        <div class="quests-panel">
            <div class="quest-item">
                <span class="quest-icon">📚</span>
                <div class="quest-body">
                    <div class="quest-title">Complete uma missão hoje</div>
                    <div class="quest-reward">+50 ⚡ · +10 💎</div>
                    <div class="quest-track"><div class="quest-fill" style="width:0%"></div></div>
                </div>
                <span class="quest-check">⬜</span>
            </div>
            <div class="quest-item">
                <span class="quest-icon">🔥</span>
                <div class="quest-body">
                    <div class="quest-title">Mantenha sua sequência</div>
                    <div class="quest-reward">+${CONFIG.gems.dailyStreak} 💎</div>
                    <div class="quest-track"><div class="quest-fill" style="width:${streak > 0 ? 100 : 0}%"></div></div>
                </div>
                <span class="quest-check">${streak > 0 ? '✅' : '⬜'}</span>
            </div>
            <div class="quest-item">
                <span class="quest-icon">⚡</span>
                <div class="quest-body">
                    <div class="quest-title">Acerte 5 questões seguidas</div>
                    <div class="quest-reward">+25 ⚡</div>
                    <div class="quest-track"><div class="quest-fill" style="width:0%"></div></div>
                </div>
                <span class="quest-check">⬜</span>
            </div>
        </div>`;

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
                <span class="section-title">🎯 Missões de Hoje</span>
            </div>
            ${questsHTML}

            <div class="section-header">
                <span class="section-title">📚 Suas Matérias</span>
                <a href="#missions" class="section-link" onclick="Router.navigate('#missions')">Ver todas ›</a>
            </div>
            ${chaptersHTML}

            <div class="section-header mt-4">
                <span class="section-title">🏆 Sua Jornada</span>
            </div>
            <div class="xp-level-card">
                <div style="display:flex; gap:var(--sp-5); justify-content:space-around; flex-wrap:wrap;">
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:var(--brand)">${user.xp}</div>
                        <div style="font-size:0.68rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">XP Total</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:#0369a1">${user.gems}</div>
                        <div style="font-size:0.68rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Gemas</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:#c2410c">${streak}</div>
                        <div style="font-size:0.68rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Sequência</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.4rem;font-weight:900;color:var(--success)">${user.level}</div>
                        <div style="font-size:0.68rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Nível</div>
                    </div>
                </div>
            </div>
        </div>`;
    },

    // ── CHAPTER MAP (Adventure Mission Cards) ─────────────
    renderChapterMap(container, chapterId) {
        if (!chapterId) { this.renderHome(container); return; }

        const meta        = window.CHAPTER_METADATA || { title: 'Capítulo', icon: '📚', description: '', totalStages: 5 };
        const totalStages = meta.totalStages || 5;

        let pathHTML = '';
        for (let i = 1; i <= totalStages; i++) {
            const unlocked  = State.isStageUnlocked(chapterId, i);
            const completed = State.isStageCompleted(chapterId, i);
            const stars     = State.getStageStars(chapterId, i);
            const isCurrent = unlocked && !completed;
            const isBoss    = i === totalStages;
            const stageData = window[`STAGE_0${i}`];
            const stageName = stageData?.title || `Missão ${i}`;
            const stageDiff = stageData?.difficulty || 'easy';
            const diffLabel = CONFIG.difficulty?.[stageDiff]?.label || stageDiff;
            const stageKey  = `stage_0${i}`;

            const starsHTML = [1,2,3].map(s =>
                `<span style="color:${s <= stars ? 'var(--gold)' : 'var(--border)'}">${s <= stars ? '★' : '☆'}</span>`
            ).join('');

            let cardClass = 'mission-card';
            if (isBoss)    cardClass += ' mc-boss';
            if (completed) cardClass += ' mc-completed';
            else if (isCurrent) cardClass += ' mc-active';
            else if (!unlocked) cardClass += ' mc-locked';

            const nodeIcon  = completed ? '✓' : isBoss ? '💀' : (unlocked ? i : '🔒');
            const metaLabel = `${isBoss ? '👑 CHEFE · ' : ''}MISSÃO ${i} · ${diffLabel.toUpperCase()}`;

            let btnHTML = '';
            if (unlocked) {
                if (completed) {
                    btnHTML = `<button class="mission-play-btn done"
                        onclick="event.stopPropagation(); Router.navigate('#stage/${chapterId}/${stageKey}')">
                        Repetir
                    </button>`;
                } else {
                    const btnClass = isBoss ? 'boss-play' : 'play';
                    btnHTML = `<button class="mission-play-btn ${btnClass}"
                        onclick="event.stopPropagation(); Router.navigate('#stage/${chapterId}/${stageKey}')">
                        ${isBoss ? '⚔️ Boss' : 'JOGAR →'}
                    </button>`;
                }
            }

            const statusText = completed ? 'Concluída' : isCurrent ? 'Em andamento →' : 'Bloqueada';
            const onCardClick = unlocked
                ? `onclick="Router.navigate('#stage/${chapterId}/${stageKey}')"`
                : '';

            const connectorClass = i > 1 ? (State.isStageCompleted(chapterId, i-1) ? 'done' : '') : '';

            pathHTML += `
            ${i > 1 ? `<div class="mission-connector ${connectorClass}"></div>` : ''}
            <div class="${cardClass}" ${onCardClick}>
                <div class="mission-node">${nodeIcon}</div>
                <div class="mission-body">
                    <div class="mission-meta">${metaLabel}</div>
                    <div class="mission-title">${stageName}</div>
                    ${completed
                        ? `<div class="mission-stars">${starsHTML}</div>`
                        : `<div class="mission-status">${statusText}</div>`
                    }
                </div>
                ${btnHTML}
            </div>`;
        }

        container.innerHTML = `
        <div class="screen">
            <button class="btn-back" onclick="Router.navigate('#home')">‹ Voltar</button>

            <div class="chapter-map-header">
                <span class="chapter-map-icon">${meta.icon || '📚'}</span>
                <div class="chapter-map-title">${meta.title}</div>
                <div class="chapter-map-desc">${meta.description || ''}</div>
            </div>

            <div class="adventure-path">
                ${pathHTML}
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
        if (!isUnlocked)  { this.renderChapterMap(container, chapterId); return; }

        const isBoss     = stageIndex === (window.CHAPTER_METADATA?.totalStages || 5);
        const rewards    = stageData.rewards || {};
        const difficulty = stageData.difficulty || 'easy';
        const diffData   = CONFIG.difficulty?.[difficulty] || CONFIG.difficulty.easy;
        const objectives = (stageData.learningObjectives || []).slice(0, 4);

        const objectivesHTML = objectives.map(obj =>
            `<div class="objective-item">${obj}</div>`
        ).join('');

        const xpReward  = rewards.xp  || CONFIG.xp.correct * 10;
        const gemReward = Math.floor(xpReward / 10);

        container.innerHTML = `
        <div class="prep-screen">
            <button class="btn-back" onclick="Router.navigate('#chapter/${chapterId}')">‹ Mapa</button>

            ${isBoss ? `<div style="text-align:center; margin-bottom:var(--sp-2)">
                <span style="background:var(--gold-light);color:#92400e;font-size:0.8rem;font-weight:900;padding:4px 12px;border-radius:var(--r-full);border:2px solid var(--gold)">
                    👑 MISSÃO FINAL
                </span>
            </div>` : ''}

            <div class="prep-icon-wrap" style="${isBoss ? 'background:var(--gold-light);box-shadow:0 4px 18px rgba(245,158,11,0.4)' : ''}">
                ${stageData.icon || '⚡'}
            </div>
            <div class="prep-title">${stageData.title}</div>
            <div class="prep-sub">${stageData.estimatedTime || 15} min · ${stageData.questions?.length || 10} questões</div>

            <div class="prep-rewards">
                <div class="reward-chip">⚡ ${xpReward} XP</div>
                <div class="reward-chip">💎 ${gemReward} Gemas</div>
                ${State.isStageCompleted(chapterId, stageIndex)
                    ? `<div class="reward-chip" style="background:var(--success-light);border-color:var(--success);color:var(--success)">
                        ✓ Já concluída
                       </div>`
                    : ''}
            </div>

            <div class="prep-objectives">
                <h3>O que você vai aprender</h3>
                ${objectivesHTML}
            </div>

            <div class="prep-difficulty">
                <div class="difficulty-dot ${difficulty}"></div>
                Dificuldade: ${diffData.label}
            </div>

            <button class="btn-primary ${isBoss ? '' : ''}"
                style="${isBoss ? 'background:var(--gold);box-shadow:0 5px 0 #92400e' : ''}"
                onclick="GameEngine.start('${chapterId}', '${stageId}', ${stageIndex})">
                ${isBoss ? '⚔️ Enfrentar o Chefe!' : '⚡ Iniciar Missão!'}
            </button>
        </div>`;
    },

    // ── PROFILE ───────────────────────────────────────────
    renderProfile(container) {
        const user   = State.data.user;
        const xpProg = State.getXPProgress();

        const badges = [
            { icon: '🛡️', name: 'Guardião',    locked: false },
            { icon: '🔬', name: 'Cientista',    locked: false },
            { icon: '⚡', name: 'Relâmpago',    locked: user.level < 3 },
            { icon: '🌟', name: 'Estrela',      locked: user.level < 5 },
            { icon: '🏆', name: 'Campeão',      locked: user.level < 10 },
            { icon: '🔥', name: 'Imparável',    locked: user.streak < 7 },
            { icon: '💎', name: 'Colecionador', locked: user.gems < 100 },
            { icon: '🧠', name: 'Gênio',        locked: user.level < 15 }
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

            <button class="btn-secondary mt-3" onclick="State.logout(); Router.navigate('#login')">
                Sair da conta
            </button>
        </div>`;
    },

    // ── SHOP ──────────────────────────────────────────────
    renderShop(container) {
        const gems = State.getUserGems();

        const items = [
            { icon: '❤️', name: 'Vida Extra',     desc: 'Recupere uma vida',           price: 20, action: 'heart'  },
            { icon: '⏱️', name: 'Mais Tempo',     desc: '+10s em cada questão',        price: 30, action: 'time'   },
            { icon: '🔑', name: 'Dica Mágica',    desc: 'Elimina 2 opções erradas',   price: 40, action: 'hint'   },
            { icon: '🛡️', name: 'Escudo',         desc: 'Protege 1 vida por fase',    price: 50, action: 'shield' },
            { icon: '⚡', name: 'XP Duplo',        desc: 'Dobra XP na próxima fase',   price: 80, action: 'xp2x'  },
            { icon: '🌟', name: 'Estrela Grátis',  desc: 'Garante 1 estrela mínima',   price: 100, action: 'star' }
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
        alert('✅ Item comprado! Disponível na próxima missão.');
        this.renderShop(document.getElementById('app-container'));
    },

    // ── MISSIONS ──────────────────────────────────────────
    renderMissions(container) {
        const chapters = CONFIG.chapters || [];

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
