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

        const publicRoutes = ['landing', 'login', 'register', 'onboarding'];
        if (!publicRoutes.includes(route)) {
            if (!State.isAuthenticated()) { this.navigate('#landing'); return; }
            if (!State.isOnboarded())     { this.navigate('#onboarding/1'); return; }
        }

        const isGame      = route === 'stage';
        const isAdventure = route === 'adventure';
        const isAuth      = publicRoutes.includes(route);
        if (hudEl) hudEl.classList.toggle('hidden', isGame || isAdventure || isAuth);
        if (navEl) navEl.classList.toggle('hidden', isGame || isAdventure || isAuth);

        container.innerHTML = '';
        if (!isAuth && !isGame) this._updateNavActive(route);

        switch (route) {
            case 'landing':    this.renderLanding(container);                             break;
            case 'login':      this.renderLogin(container);                               break;
            case 'register':   this.renderRegister(container);                            break;
            case 'onboarding': this.renderOnboarding(container, parseInt(parts[1]) || 1); break;
            case 'home':
            case '':           this.renderHome(container);      break;
            case 'chapter':    this.renderChapterMap(container, parts[1]);               break;
            case 'stage':      this.renderStagePrep(container, parts[1], parts[2]);      break;
            case 'profile':    this.renderProfile(container);   break;
            case 'shop':       this.renderShop(container);      break;
            case 'missions':   this.renderMissions(container);           break;
            case 'adventure':  AdventureMap.start(parts[1]);            break;
            case 'teams':      this.renderTeams(container, parts[1]);   break;
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

    // ── LANDING PAGE ─────────────────────────────────────
    renderLanding(container) {
        container.innerHTML = `
        <div class="landing-screen">
            <!-- Hero -->
            <div class="landing-hero">
                <div class="landing-badge">✨ Novo · Gamificado · Gratuito</div>
                <div class="landing-logo">⚡ EduQuest</div>
                <h1 class="landing-headline">Aprenda como um<br><span class="landing-highlight">Herói</span></h1>
                <p class="landing-sub">Transforme seus estudos em uma aventura épica. Ganhe XP, suba de nível e domine cada matéria.</p>
                <div class="landing-ctas">
                    <button class="btn-primary landing-cta-main" onclick="Router.navigate('#register')">
                        ⚡ Começar Jornada
                    </button>
                    <button class="btn-ghost landing-cta-sec" onclick="Router.navigate('#login')">
                        Já tenho conta →
                    </button>
                </div>
                <div class="landing-preview">
                    <div class="landing-preview-card">
                        <div class="lp-hud">
                            <span class="lp-chip">🔥 7 dias</span>
                            <span class="lp-chip">⚡ 1250 XP</span>
                            <span class="lp-chip">💎 48</span>
                        </div>
                        <div class="lp-stage-row">
                            <div class="lp-node done">✓</div>
                            <div class="lp-connector done"></div>
                            <div class="lp-node active pulse">3</div>
                            <div class="lp-connector"></div>
                            <div class="lp-node locked">🔒</div>
                        </div>
                        <div class="lp-mission">
                            <span class="lp-m-icon">🧬</span>
                            <div>
                                <div class="lp-m-title">Vírus vs Bactérias</div>
                                <div class="lp-m-sub">Missão 3 · Difícil · +150 XP</div>
                            </div>
                            <button class="lp-play-btn">JOGAR →</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="landing-features">
                <div class="landing-section-title">Por que EduQuest?</div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🎮</div>
                        <div class="feature-title">Aprendizado gamificado</div>
                        <div class="feature-desc">Missões, chefões, power-ups e recompensas reais que tornam o estudo viciante.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔥</div>
                        <div class="feature-title">Sequências diárias</div>
                        <div class="feature-desc">Mantenha sua sequência de dias e ganhe recompensas exclusivas por consistência.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <div class="feature-title">Ranking & Turmas</div>
                        <div class="feature-desc">Compita com amigos, crie ou entre em turmas e veja quem sobe mais rápido.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📚</div>
                        <div class="feature-title">Conteúdo do 7º ao 9º</div>
                        <div class="feature-desc">Ciências, Matemática, Português, História e muito mais do currículo nacional.</div>
                    </div>
                </div>
            </div>

            <!-- How it works -->
            <div class="landing-how">
                <div class="landing-section-title">Como funciona?</div>
                <div class="how-steps">
                    <div class="how-step">
                        <div class="how-step-num">1</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Crie seu herói</div>
                            <div class="how-step-desc">Escolha seu avatar, série e objetivo. Leva 1 minuto.</div>
                        </div>
                    </div>
                    <div class="how-step">
                        <div class="how-step-num">2</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Jogue missões</div>
                            <div class="how-step-desc">Responda questões em formato de jogo, ganhe estrelas e XP.</div>
                        </div>
                    </div>
                    <div class="how-step">
                        <div class="how-step-num">3</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Evolua e domine</div>
                            <div class="how-step-desc">Suba de nível, desbloqueie fases e vire o melhor da turma.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social proof -->
            <div class="landing-social">
                <div class="social-stat"><span class="social-num">10k+</span><span class="social-label">Estudantes</span></div>
                <div class="social-divider"></div>
                <div class="social-stat"><span class="social-num">500+</span><span class="social-label">Questões</span></div>
                <div class="social-divider"></div>
                <div class="social-stat"><span class="social-num">4.9 ⭐</span><span class="social-label">Avaliação</span></div>
            </div>

            <!-- Final CTA -->
            <div class="landing-final-cta">
                <button class="btn-primary" style="font-size:1rem;padding:16px 40px" onclick="Router.navigate('#register')">
                    ⚡ Começar Grátis Agora
                </button>
                <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px">Gratuito · Sem cartão · Para sempre</p>
            </div>
        </div>`;
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
                <button class="btn-primary mt-4" id="login-submit-btn" onclick="Router._doLogin()">⚡ Entrar</button>
                <div style="text-align:center;margin-top:10px">
                    <span onclick="Router._showForgotPassword()" style="cursor:pointer;font-size:0.8rem;color:var(--text-muted);font-weight:700">
                        Esqueci minha senha
                    </span>
                </div>
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

    async _doLogin() {
        const email    = (document.getElementById('login-email')?.value  || '').trim();
        const password = (document.getElementById('login-password')?.value || '');
        const btn      = document.getElementById('login-submit-btn');
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Entrando...'; }

        const result = await State.loginAsync(email, password);

        if (result.success) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('click');
            // onAuthChange in state.js handles navigation after loading cloud profile
            if (!State.data.user.uid) {
                // offline/legacy fallback
                State.isOnboarded() ? this.navigate('#home') : this.navigate('#onboarding/1');
            }
        } else {
            const err = document.getElementById('login-error');
            if (err) { err.textContent = result.message || 'Email ou senha incorretos.'; err.classList.add('show'); }
            document.getElementById('login-password')?.classList.add('shake');
            setTimeout(() => document.getElementById('login-password')?.classList.remove('shake'), 500);
            if (btn) { btn.disabled = false; btn.textContent = '⚡ Entrar'; }
        }
    },

    _showForgotPassword() {
        const email = (document.getElementById('login-email')?.value || '').trim();
        if (!email) { alert('Digite seu email primeiro.'); return; }
        if (typeof SupaAuth === 'undefined') { alert('Serviço indisponível no momento.'); return; }
        SupaAuth.resetPassword(email).then(({ error }) => {
            if (error) alert('Erro: ' + error.message);
            else alert('✅ Email de recuperação enviado! Verifique sua caixa de entrada.');
        });
    },

    renderRegister(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-logo">⚡ EduQuest</div>
            <div class="auth-tagline">Crie sua conta gratuitamente</div>
            <div class="auth-card">
                <div class="auth-title">Criar Conta</div>
                <div class="auth-field">
                    <label class="auth-label">Seu nome</label>
                    <input class="auth-input" type="text" id="reg-name"
                        placeholder="Como você quer ser chamado?" autocomplete="name">
                </div>
                <div class="auth-field">
                    <label class="auth-label">Email</label>
                    <input class="auth-input" type="email" id="reg-email"
                        placeholder="seu@email.com" autocomplete="email">
                </div>
                <div class="auth-field">
                    <label class="auth-label">Senha</label>
                    <input class="auth-input" type="password" id="reg-password"
                        placeholder="mínimo 6 caracteres" autocomplete="new-password">
                </div>
                <div class="auth-error" id="reg-error"></div>
                <div class="auth-success hidden" id="reg-success"
                    style="color:var(--success);font-size:0.82rem;font-weight:700;padding:8px 0;display:none">
                    ✅ Conta criada! Verifique seu email para confirmar.
                </div>
                <button class="btn-primary mt-4" id="reg-submit-btn" onclick="Router._doRegister()">🚀 Criar Conta</button>
                <div class="auth-footer mt-3">
                    Já tem conta?
                    <span onclick="Router.navigate('#login')" style="cursor:pointer">
                        <strong style="color:var(--brand)">Entrar</strong>
                    </span>
                </div>
            </div>
        </div>`;
        setTimeout(() => document.getElementById('reg-name')?.focus(), 100);
        setTimeout(() => {
            ['reg-name','reg-email','reg-password'].forEach(id => {
                document.getElementById(id)?.addEventListener('keydown', e => {
                    if (e.key === 'Enter') Router._doRegister();
                });
            });
        }, 150);
    },

    async _doRegister() {
        const name     = (document.getElementById('reg-name')?.value  || '').trim();
        const email    = (document.getElementById('reg-email')?.value || '').trim();
        const password = (document.getElementById('reg-password')?.value || '');
        const btn      = document.getElementById('reg-submit-btn');
        const errEl    = document.getElementById('reg-error');
        const okEl     = document.getElementById('reg-success');

        if (!name)              { if(errEl){errEl.textContent='Digite seu nome.';errEl.classList.add('show');} return; }
        if (!email)             { if(errEl){errEl.textContent='Digite seu email.';errEl.classList.add('show');} return; }
        if (password.length<6)  { if(errEl){errEl.textContent='Senha muito curta (mínimo 6 caracteres).';errEl.classList.add('show');} return; }

        if (btn) { btn.disabled = true; btn.textContent = '⏳ Criando conta...'; }
        if (errEl) errEl.classList.remove('show');

        const result = await State.signUpAsync(email, password, name);

        if (result.success) {
            if (result.needsConfirmation) {
                if (okEl) { okEl.style.display = 'block'; }
                if (btn)  { btn.disabled = false; btn.textContent = '🚀 Criar Conta'; }
            } else {
                // auto-confirmed — onAuthChange will navigate
                State.data.user.name = name;
            }
        } else {
            if (errEl) { errEl.textContent = result.message || 'Erro ao criar conta.'; errEl.classList.add('show'); }
            if (btn)   { btn.disabled = false; btn.textContent = '🚀 Criar Conta'; }
        }
    },

    // ── ONBOARDING ────────────────────────────────────────
    renderOnboarding(container, step) {
        const AVATARS = ['🦸','🧙','🐉','🦊','🐺','🦁','🐯','🐸','🤖','👾','🦅','🐲'];
        const steps = [
            {
                emoji: '🎯',
                title: 'Por que você quer aprender?',
                sub: 'Isso nos ajuda a personalizar sua experiência',
                options: [
                    { icon: '📈', title: 'Melhorar minhas notas',   desc: 'Quero ir bem nas provas',       value: 'grades'   },
                    { icon: '🏆', title: 'Me preparar para provas', desc: 'Tenho provas importantes',      value: 'exams'    },
                    { icon: '🧠', title: 'Aprender por curiosidade',desc: 'Gosto de coisas novas',         value: 'curiosity'},
                    { icon: '⚡', title: 'Superar desafios',         desc: 'Quero ser o melhor da turma',  value: 'compete'  }
                ],
                key: 'goal'
            },
            {
                emoji: '📚',
                title: 'Qual é o seu ano escolar?',
                sub: 'Vamos personalizar o conteúdo para você',
                options: [
                    { icon: '6️⃣', title: '6º Ano',        desc: 'Ensino Fundamental II', value: '6ano' },
                    { icon: '7️⃣', title: '7º Ano',        desc: 'Ensino Fundamental II', value: '7ano' },
                    { icon: '8️⃣', title: '8º Ano',        desc: 'Ensino Fundamental II', value: '8ano' },
                    { icon: '9️⃣', title: '9º Ano',        desc: 'Ensino Fundamental II', value: '9ano' }
                ],
                key: 'grade'
            },
            {
                emoji: '⏰',
                title: 'Qual é seu objetivo diário?',
                sub: 'Pequenos compromissos constroem grandes resultados',
                options: [
                    { icon: '🌱', title: '5 minutos',  desc: 'Treino leve — vai devagar',  value: 5  },
                    { icon: '⚡', title: '10 minutos', desc: 'Ritmo ideal — recomendado',  value: 10 },
                    { icon: '🔥', title: '15 minutos', desc: 'Modo intenso — vai fundo',   value: 15 }
                ],
                key: 'dailyGoal'
            },
            {
                emoji: '✨',
                title: 'Como posso te chamar?',
                sub: 'Seu nome de herói no EduQuest',
                isName: true, key: 'name'
            },
            {
                emoji: '🎨',
                title: 'Escolha seu herói!',
                sub: 'Quem vai representar você nessa aventura?',
                isAvatar: true, key: 'avatar'
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
        } else if (s.isAvatar) {
            const selected = this._onboardData.avatar || '🦸';
            contentHTML = `
            <div class="avatar-picker">
                ${AVATARS.map(av => `
                <button class="avatar-option ${av === selected ? 'selected' : ''}"
                    onclick="Router._onboardSelectAvatar('${av}', this)">
                    ${av}
                </button>`).join('')}
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
                    if (e.key === 'Enter') Router._onboardNext(step, 'name', true);
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

    _onboardSelectAvatar(avatar, el) {
        this._onboardData.avatar = avatar;
        el.closest('.avatar-picker').querySelectorAll('.avatar-option')
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
        this._onboardData.avatar = this._onboardData.avatar || '🦸';
        State.completeOnboarding(
            this._onboardData.name     || 'Herói',
            this._onboardData.dailyGoal || 10,
            this._onboardData.grade    || '7ano',
            this._onboardData.avatar
        );
        if (typeof Utils !== 'undefined') Utils.confetti();
        this.navigate('#home');
    },

    // ── HOME ─────────────────────────────────────────────
    renderHome(container) {
        const user     = State.data.user;
        const xpProg   = State.getXPProgress();
        const streak   = State.getUserStreak();
        const chapters = CONFIG.chapters || [];
        const missions = State.getMissions();
        const calendar = State.getStreakCalendar();

        // Find the first unlocked-but-incomplete chapter for "Continue" card
        const activeChapter = chapters.find(ch => {
            if (!ch.unlocked) return false;
            const prog = State.getChapterProgress(ch.id);
            return !prog.completed;
        }) || chapters[0];
        const activeProg = activeChapter ? State.getChapterProgress(activeChapter.id) : null;

        const calendarHTML = calendar.map(d => `
            <div class="streak-day ${d.active ? 'active' : ''} ${d.isToday ? 'today' : ''}">
                <div class="streak-day-dot">${d.active ? '🔥' : '○'}</div>
                <div class="streak-day-label">${d.label}</div>
            </div>`).join('');

        const missionsHTML = missions.map(m => `
            <div class="daily-mission ${m.completed ? 'done' : ''}">
                <div class="dm-icon">${m.icon}</div>
                <div class="dm-body">
                    <div class="dm-title">${m.title}</div>
                    <div class="dm-desc">${m.desc}</div>
                    <div class="dm-rewards"><span>⚡ +${m.xp}</span>${m.gems ? `<span>💎 +${m.gems}</span>` : ''}</div>
                </div>
                <div class="dm-check">${m.completed ? '✅' : '⬜'}</div>
            </div>`).join('');

        const chaptersHTML = chapters.map(ch => {
            const prog    = State.getChapterProgress(ch.id);
            return `
            <div class="chapter-card ${ch.unlocked ? '' : 'locked'}"
                 onclick="${ch.unlocked ? `Router.navigate('#chapter/${ch.id}')` : ''}">
                <div class="chapter-icon-wrap">${ch.icon}</div>
                <div class="chapter-body">
                    <div class="chapter-subject">${ch.subject} · ${ch.grade}</div>
                    <div class="chapter-title">${ch.title}</div>
                    <div class="chapter-progress-row">
                        <div class="chapter-progress-track">
                            <div class="chapter-progress-fill" style="width:${prog.percent}%"></div>
                        </div>
                        <span class="chapter-percent">${prog.percent}%</span>
                    </div>
                </div>
                <div class="chapter-arrow">${ch.unlocked ? '›' : '🔒'}</div>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="screen screen-home">

            <!-- Greeting -->
            <div class="home-greeting">
                <div class="home-greeting-text">
                    <div class="home-greeting-hi">Olá, ${user.name}! 👋</div>
                    <div class="home-greeting-sub">Nível ${user.level} · ${xpProg.current}/${xpProg.needed} XP</div>
                </div>
                <div class="home-greeting-avatar" onclick="Router.navigate('#profile')">${user.avatar || '🦸'}</div>
            </div>

            <!-- XP bar -->
            <div class="home-xp-bar">
                <div class="home-xp-fill" style="width:${xpProg.percent}%"></div>
            </div>

            <!-- Continue Journey -->
            ${activeChapter ? `
            <div class="continue-card" onclick="Router.navigate('#chapter/${activeChapter.id}')">
                <div class="continue-top">
                    <div class="continue-badge">▶ CONTINUAR</div>
                    <div class="continue-subject">${activeChapter.subject} · ${activeChapter.grade}</div>
                </div>
                <div class="continue-body">
                    <div class="continue-icon">${activeChapter.icon}</div>
                    <div class="continue-info">
                        <div class="continue-title">${activeChapter.title}</div>
                        <div class="continue-progress-row">
                            <div class="continue-track">
                                <div class="continue-fill" style="width:${activeProg.percent}%"></div>
                            </div>
                            <span class="continue-pct">${activeProg.percent}%</span>
                        </div>
                    </div>
                </div>
            </div>` : ''}

            <!-- Streak Calendar -->
            <div class="streak-calendar-wrap">
                <div class="streak-cal-header">
                    <span class="streak-cal-title">🔥 ${streak} ${streak === 1 ? 'dia' : 'dias'} seguidos</span>
                    <span class="streak-cal-sub">Mantenha a sequência!</span>
                </div>
                <div class="streak-calendar">${calendarHTML}</div>
            </div>

            <!-- Daily Missions -->
            <div class="section-header">
                <span class="section-title">⚡ Missões do Dia</span>
                <span class="section-badge">${missions.filter(m=>m.completed).length}/${missions.length}</span>
            </div>
            <div class="daily-missions-list">${missionsHTML}</div>

            <!-- Chapters -->
            <div class="section-header mt-4">
                <span class="section-title">📚 Matérias</span>
                <span class="section-link" onclick="Router.navigate('#missions')" style="cursor:pointer">Ver todas ›</span>
            </div>
            ${chaptersHTML}

        </div>`;
    },

    // ── CHAPTER MAP (Adventure Mission Cards) ─────────────
    renderChapterMap(container, chapterId) {
        if (!chapterId) { this.renderHome(container); return; }

        const meta   = window.CHAPTER_METADATA || { title: 'Capítulo', icon: '📚', description: '', totalStages: 5, stages: [] };
        const stages = meta.stages || [];

        let pathHTML = '';
        for (const stage of stages) {
            const i         = stage.index;
            const unlocked  = State.isStageUnlocked(chapterId, i);
            const completed = State.isStageCompleted(chapterId, i);
            const stars     = State.getStageStars(chapterId, i);
            const isCurrent = unlocked && !completed;
            const isBoss    = stage.isBoss || false;
            const isFinal   = stage.isFinal || false;
            const stageData = window[stage.varName];
            const stageName = stageData?.title || `Missão ${i}`;
            const stageDiff = stageData?.difficulty || (isBoss ? 'boss' : 'easy');
            const diffLabel = CONFIG.difficulty?.[stageDiff]?.label || stageDiff;
            const stageKey  = stage.id;

            const starsHTML = [1,2,3].map(s =>
                `<span style="color:${s <= stars ? 'var(--gold)' : 'var(--border)'}">${s <= stars ? '★' : '☆'}</span>`
            ).join('');

            let cardClass = 'mission-card';
            if (isBoss)    cardClass += ' mc-boss';
            if (isFinal)   cardClass += ' mc-final';
            if (completed) cardClass += ' mc-completed';
            else if (isCurrent) cardClass += ' mc-active';
            else if (!unlocked) cardClass += ' mc-locked';

            const nodeLabel = isFinal ? '🎓' : isBoss ? '💀' : i;
            const nodeIcon  = completed ? '✓' : (unlocked ? nodeLabel : '🔒');
            const typeLabel = isFinal ? '🎓 EXAME FINAL · ' : isBoss ? '👑 CHEFE · ' : '';
            const metaLabel = `${typeLabel}MISSÃO ${i} · ${diffLabel.toUpperCase()}`;

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
                        ${isFinal ? '🎓 Exame' : isBoss ? '⚔️ Boss' : 'JOGAR →'}
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

            <button class="btn-secondary" style="margin-bottom:16px;display:flex;align-items:center;justify-content:center;gap:8px"
                onclick="Router.navigate('#adventure/${chapterId}')">
                🗺️ Modo Aventura
            </button>

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

        const stageEntry  = (window.CHAPTER_METADATA?.stages || []).find(s => s.id === stageId);
        const stageIndex  = stageEntry?.index || 1;
        const isUnlocked  = State.isStageUnlocked(chapterId, stageIndex);
        if (!isUnlocked)  { this.renderChapterMap(container, chapterId); return; }

        const isBoss     = stageEntry?.isBoss || false;
        const isFinal    = stageEntry?.isFinal || false;
        const rewards    = stageData.rewards || {};
        const difficulty = stageData.difficulty || 'easy';
        const diffData   = CONFIG.difficulty?.[difficulty] || CONFIG.difficulty.easy;
        const objectives = (stageData.learningObjectives || []).slice(0, 4);

        const objectivesHTML = objectives.map(obj =>
            `<div class="objective-item">${obj}</div>`
        ).join('');

        const xpReward     = rewards.xp  || CONFIG.xp.correct * 10;
        const gemReward    = Math.floor(xpReward / 10);
        const flashcards   = stageData.summary?.flashcards || [];
        const mnemonics    = stageData.summary?.mnemonics  || [];
        const hasFlashcards = flashcards.length > 0;
        const hasMnemonics  = mnemonics.length  > 0;

        container.innerHTML = `
        <div class="prep-screen">
            <button class="btn-back" onclick="Router.navigate('#chapter/${chapterId}')">‹ Mapa</button>

            ${(isBoss || isFinal) ? `<div style="text-align:center; margin-bottom:var(--sp-2)">
                <span style="background:var(--gold-light);color:#92400e;font-size:0.8rem;font-weight:900;padding:4px 12px;border-radius:var(--r-full);border:2px solid var(--gold)">
                    ${isFinal ? '🎓 EXAME FINAL' : '👑 MISSÃO CHEFE'}
                </span>
            </div>` : ''}

            <div class="prep-icon-wrap" style="${(isBoss || isFinal) ? 'background:var(--gold-light);box-shadow:0 4px 18px rgba(245,158,11,0.4)' : ''}">
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

            <button class="btn-primary"
                style="${(isBoss || isFinal) ? 'background:var(--gold);box-shadow:0 5px 0 #92400e' : ''}"
                onclick="GameEngine.start('${chapterId}', '${stageId}', ${stageIndex})">
                ${isFinal ? '🎓 Iniciar Exame Final!' : isBoss ? '⚔️ Enfrentar o Chefe!' : '⚡ Iniciar Missão!'}
            </button>

            ${(hasFlashcards || hasMnemonics) ? `
            <div class="minigame-select">
                <div class="minigame-select-title">ou pratique com</div>
                ${hasFlashcards ? `
                <button class="minigame-btn"
                        onclick="MemoryGame.start('${chapterId}', '${stageId}', ${stageIndex})">
                    <span class="mg-icon">🃏</span>
                    <div class="mg-info">
                        <span class="mg-name">Jogo da Memória</span>
                        <span class="mg-desc">Combine termos e definições · ${flashcards.length} pares</span>
                    </div>
                </button>` : ''}
                ${hasMnemonics ? `
                <button class="minigame-btn"
                        onclick="Forca.start('${chapterId}', '${stageId}', ${stageIndex})">
                    <span class="mg-icon">🔤</span>
                    <div class="mg-info">
                        <span class="mg-name">Jogo da Forca</span>
                        <span class="mg-desc">Adivinhe termos do capítulo · ${mnemonics.length} palavras</span>
                    </div>
                </button>` : ''}
            </div>` : ''}
        </div>`;
    },

    // ── PROFILE ───────────────────────────────────────────
    renderProfile(container) {
        const user   = State.data.user;
        const xpProg = State.getXPProgress();
        const theme  = user.theme || 'light';
        const premium = State.isPremium();

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
            </div>`).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="profile-hero">
                <span class="profile-avatar">🦸</span>
                <div class="profile-name">
                    ${user.name}
                    ${premium ? '<span class="premium-badge" style="margin-left:8px">👑 Premium</span>' : ''}
                </div>
                <div class="profile-level">Nível ${user.level} · ${user.email || ''}</div>
            </div>

            <div class="xp-level-card mb-3">
                <div class="xp-level-row">
                    <span class="level-badge">⚡ Nível ${user.level}</span>
                    <span class="xp-text-small">${xpProg.current} / ${xpProg.needed} XP</span>
                </div>
                <div class="xp-track"><div class="xp-fill" style="width:${xpProg.percent}%"></div></div>
            </div>

            <div class="stats-grid-2x2 mb-3">
                <div class="stat-box-card"><span class="stat-box-icon">⚡</span><span class="stat-box-value">${user.xp}</span><span class="stat-box-label">XP Total</span></div>
                <div class="stat-box-card"><span class="stat-box-icon">💎</span><span class="stat-box-value">${user.gems}</span><span class="stat-box-label">Gemas</span></div>
                <div class="stat-box-card"><span class="stat-box-icon">🔥</span><span class="stat-box-value">${user.streak}</span><span class="stat-box-label">Sequência</span></div>
                <div class="stat-box-card"><span class="stat-box-icon">❤️</span><span class="stat-box-value">${user.hearts}</span><span class="stat-box-label">Vidas</span></div>
            </div>

            ${!premium ? `
            <div class="premium-card" onclick="Router._showPremiumModal()">
                <div class="premium-card-icon">👑</div>
                <div class="premium-card-text">
                    <div class="premium-card-title">Seja Premium!</div>
                    <div class="premium-card-desc">Vidas ilimitadas, estatísticas avançadas e muito mais.</div>
                </div>
                <div style="font-size:0.8rem;font-weight:900;color:var(--gold)">Ver →</div>
            </div>` : `
            <div class="premium-card">
                <div class="premium-card-icon">👑</div>
                <div class="premium-card-text">
                    <div class="premium-card-title">Conta Premium Ativa</div>
                    <div class="premium-card-desc">Aproveite todos os benefícios exclusivos!</div>
                </div>
            </div>`}

            <!-- Theme toggle -->
            <div class="theme-toggle-row">
                <span class="theme-toggle-label">🎨 Aparência</span>
                <div class="theme-toggle-btns">
                    <button class="theme-btn ${theme==='light'?'active':''}" onclick="State.setTheme('light'); Router.renderProfile(document.getElementById('app-container'))">☀️ Claro</button>
                    <button class="theme-btn ${theme==='dark'?'active':''}"  onclick="State.setTheme('dark');  Router.renderProfile(document.getElementById('app-container'))">🌙 Escuro</button>
                    <button class="theme-btn ${theme==='auto'?'active':''}"  onclick="State.setTheme('auto');  Router.renderProfile(document.getElementById('app-container'))">🔄 Auto</button>
                </div>
            </div>

            <!-- Teams shortcut -->
            <button class="btn-secondary" style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:12px"
                onclick="Router.navigate('#teams')">
                <span>👥 Minhas Turmas</span><span style="opacity:0.5">›</span>
            </button>

            <div class="section-header"><span class="section-title">🏅 Conquistas</span></div>
            <div class="achievements-grid mb-3">${badgesHTML}</div>

            <button class="btn-secondary mt-3" onclick="State.logoutAsync()">
                Sair da conta
            </button>
        </div>`;
    },

    _showPremiumModal() {
        const perks = ['❤️ Vidas ilimitadas','📊 Estatísticas avançadas','⏱️ Sem pressão de tempo','🌟 Conteúdo exclusivo','💾 Backup na nuvem'];
        const el = document.createElement('div');
        el.className = 'feedback-overlay show';
        el.style.cssText = 'display:flex;align-items:center;justify-content:center;z-index:999';
        el.innerHTML = `
        <div class="feedback-card" style="max-width:320px;padding:28px 24px;text-align:center">
            <div style="font-size:2.5rem;margin-bottom:8px">👑</div>
            <div style="font-size:1.2rem;font-weight:900;color:var(--gold);margin-bottom:4px">EduQuest Premium</div>
            <div style="font-size:0.82rem;color:var(--text-2);margin-bottom:16px">Desbloqueie todo o potencial do app</div>
            ${perks.map(p=>`<div style="font-size:0.85rem;font-weight:700;padding:6px 0;border-bottom:1px solid var(--border);text-align:left">${p}</div>`).join('')}
            <div style="margin-top:20px;font-size:0.8rem;color:var(--text-muted)">🚧 Em breve — fique atento!</div>
            <button class="btn-primary mt-4" onclick="this.closest('.feedback-overlay').remove()">Fechar</button>
        </div>`;
        document.body.appendChild(el);
    },

    // ── TEAMS ─────────────────────────────────────────────
    renderTeams(container, teamId) {
        if (teamId) { this._renderTeamDetail(container, teamId); return; }
        container.innerHTML = `<div class="screen teams-screen">
            <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>
            <h2 style="font-size:1.1rem;font-weight:900;margin-bottom:16px">👥 Minhas Turmas</h2>

            <div class="team-section-title">Entrar em uma turma</div>
            <div class="team-join-form">
                <input class="team-code-input" id="team-code-input" maxlength="6"
                    placeholder="CÓDIGO" oninput="this.value=this.value.toUpperCase()">
                <button class="btn-primary" style="padding:12px 18px;white-space:nowrap"
                    onclick="Router._joinTeam()">Entrar</button>
            </div>

            <div class="team-section-title">Criar nova turma</div>
            <div style="display:flex;gap:10px;margin-bottom:20px">
                <input class="auth-input" id="new-team-name" placeholder="Nome da turma" style="flex:1;margin:0">
                <button class="btn-primary" style="padding:12px 18px;white-space:nowrap"
                    onclick="Router._createTeam()">Criar</button>
            </div>

            <div class="team-section-title">Suas turmas</div>
            <div id="teams-list"><div class="team-empty"><span class="team-empty-icon">👥</span>Carregando...</div></div>
        </div>`;
        this._loadTeamsList();
    },

    async _loadTeamsList() {
        const el = document.getElementById('teams-list'); if (!el) return;
        const uid = State.data.user.uid;
        if (!uid || typeof SupaDB === 'undefined') {
            el.innerHTML = '<div class="team-empty"><span class="team-empty-icon">👥</span>Faça login para ver suas turmas.</div>';
            return;
        }
        const { data, error } = await SupaDB.getMyTeams(uid);
        if (error || !data?.length) {
            el.innerHTML = '<div class="team-empty"><span class="team-empty-icon">👥</span>Você ainda não participa de nenhuma turma.</div>';
            return;
        }
        el.innerHTML = data.map(m => {
            const t = m.teams;
            const isOwner = t.owner_id === uid;
            return `
            <div class="team-card" onclick="Router.navigate('#teams/${t.id}')">
                <div class="team-card-icon">🏫</div>
                <div class="team-card-body">
                    <div class="team-card-name">${t.name}${isOwner ? '<span class="team-owner-chip">Dono</span>' : ''}</div>
                    <div class="team-card-meta">${m.role === 'owner' ? 'Turma criada por você' : 'Estudante'}</div>
                </div>
                <div class="team-card-code">${t.code}</div>
            </div>`;
        }).join('');
    },

    async _createTeam() {
        const name = (document.getElementById('new-team-name')?.value || '').trim();
        if (!name) { alert('Digite o nome da turma.'); return; }
        const uid = State.data.user.uid;
        if (!uid) { alert('Faça login primeiro.'); return; }
        const btn = document.querySelector('[onclick="Router._createTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '⏳'; }
        const { data, error } = await SupaDB.createTeam(name, uid);
        if (btn) { btn.disabled = false; btn.textContent = 'Criar'; }
        if (error) { alert('Erro: ' + error.message); return; }
        alert(`✅ Turma "${data.name}" criada! Código: ${data.code}`);
        this._loadTeamsList();
        const inp = document.getElementById('new-team-name'); if (inp) inp.value = '';
    },

    async _joinTeam() {
        const code = (document.getElementById('team-code-input')?.value || '').trim();
        if (code.length < 4) { alert('Digite o código da turma (6 letras).'); return; }
        const uid = State.data.user.uid;
        if (!uid) { alert('Faça login primeiro.'); return; }
        const btn = document.querySelector('[onclick="Router._joinTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '⏳'; }
        const { data, error } = await SupaDB.joinTeamByCode(code, uid);
        if (btn) { btn.disabled = false; btn.textContent = 'Entrar'; }
        if (error) { alert('Erro: ' + error.message); return; }
        alert(`✅ Você entrou na turma "${data.team.name}"!`);
        this._loadTeamsList();
        const inp = document.getElementById('team-code-input'); if (inp) inp.value = '';
    },

    async _renderTeamDetail(container, teamId) {
        container.innerHTML = `<div class="screen teams-screen">
            <button class="btn-back" onclick="Router.navigate('#teams')">‹ Turmas</button>
            <div id="team-detail-wrap"><div class="team-empty"><span class="team-empty-icon">⏳</span>Carregando...</div></div>
        </div>`;
        const { data: members, error } = await SupaDB.getTeamMembers(teamId);
        const wrap = document.getElementById('team-detail-wrap'); if (!wrap) return;
        if (error || !members) { wrap.innerHTML = '<p style="color:var(--danger)">Erro ao carregar.</p>'; return; }

        const uid     = State.data.user.uid;
        const myRow   = members.find(m => m.profiles?.id === uid);
        const isOwner = myRow?.role === 'owner';
        const sorted  = [...members].sort((a,b) => (b.profiles?.xp||0) - (a.profiles?.xp||0));

        wrap.innerHTML = `
            ${isOwner ? `
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
                <input class="auth-input" id="team-rename-input" placeholder="Renomear turma" style="flex:1;margin:0">
                <button class="btn-secondary" style="padding:10px 14px" onclick="Router._renameTeam('${teamId}')">Renomear</button>
            </div>` : ''}

            <div class="team-section-title">👥 Membros (${members.length})</div>
            ${sorted.map((m, i) => {
                const p = m.profiles || {};
                return `
                <div class="team-member-row">
                    <div class="team-member-avatar">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '🦸'}</div>
                    <div>
                        <div class="team-member-name">${p.name || '—'}${m.role==='owner'?'<span class="team-owner-chip">Dono</span>':''}</div>
                        <div class="team-member-level">Nível ${p.level||1} · 🔥 ${p.streak||1}</div>
                    </div>
                    <div class="team-member-xp">⚡ ${p.xp||0}</div>
                </div>`;
            }).join('')}
            ${isOwner ? `
            <button class="btn-secondary mt-4" style="color:var(--danger);border-color:var(--danger)"
                onclick="Router._deleteTeam('${teamId}')">🗑️ Excluir turma</button>` : `
            <button class="btn-secondary mt-4"
                onclick="Router._leaveTeam('${teamId}')">🚪 Sair da turma</button>`}`;
    },

    async _renameTeam(teamId) {
        const name = (document.getElementById('team-rename-input')?.value || '').trim();
        if (!name) return;
        await SupaDB.renameTeam(teamId, name);
        this._renderTeamDetail(document.getElementById('app-container'), teamId);
    },

    async _leaveTeam(teamId) {
        if (!confirm('Sair desta turma?')) return;
        await SupaDB.leaveTeam(teamId, State.data.user.uid);
        this.navigate('#teams');
    },

    async _deleteTeam(teamId) {
        if (!confirm('Excluir a turma permanentemente? Esta ação não pode ser desfeita.')) return;
        await SupaDB.deleteTeam(teamId);
        this.navigate('#teams');
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
