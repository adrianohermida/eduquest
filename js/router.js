/**
 * EDUQUEST ROUTER v3.0
 * Hash-based SPA routing com auth guard, onboarding e adventure map
 */

const Router = {
    currentRoute: null,
    _onboardData: { goal: null, dailyGoal: null, name: '', grade: '7ano', avatar: '🦸' },

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

        // Supabase auth callback (magic link / password recovery / OAuth)
        const rawHash = window.location.hash;
        if (rawHash.includes('access_token=') || rawHash.includes('error_code=')) {
            container.innerHTML = `
            <div class="auth-screen">
                <div class="auth-logo">⚡ EduQuest</div>
                <p style="color:var(--text-muted);font-size:0.9rem;font-weight:700;margin-top:8px">Verificando...</p>
            </div>`;
            return; // onAuthStateChange handles navigation
        }

        const publicRoutes = ['landing', 'login', 'register', 'onboarding', 'reset-password'];
        if (!publicRoutes.includes(route)) {
            if (!State.isAuthenticated()) { this.navigate('#landing'); return; }
            if (!State.isOnboarded())     { this.navigate('#onboarding/1'); return; }
        }

        // Action-only routes — toggle overlay without clearing the screen
        if (route === 'deep-focus') {
            if (typeof DeepFocus !== 'undefined') DeepFocus.toggle();
            return;
        }

        const isGame      = route === 'stage';
        const isAdventure = route === 'adventure';
        const isAuth      = publicRoutes.includes(route);
        // admin, ai-studio, etc. are normal app pages — keep HUD/sidebar visible
        const isFullscreen = isGame || isAuth || route === 'speed-drill' || route === 'reading';

        // Layout mode: full-screen (auth/game) vs app (normal)
        document.body.dataset.layout = isFullscreen ? 'full' : 'app';

        if (hudEl) hudEl.classList.toggle('hidden', isFullscreen);
        if (navEl) navEl.classList.toggle('hidden', isFullscreen || isAdventure);

        // Close mobile drawer when navigating
        if (typeof Sidebar !== 'undefined' && window.innerWidth < 768) Sidebar.close();

        container.innerHTML = '';
        if (!isFullscreen) this._updateNavActive(route);

        switch (route) {
            case 'landing':         this.renderLanding(container);                        break;
            case 'login':           this.renderLogin(container);                          break;
            case 'register':        this.renderRegister(container);                       break;
            case 'reset-password':  this.renderResetPassword(container);                  break;
            case 'onboarding': this.renderOnboarding(container, parseInt(parts[1]) || 1); break;
            case 'home':
            case '':           this.renderHome(container);      break;
            case 'chapter':    this.renderChapterMap(container, parts[1]);               break;
            case 'stage':      this.renderStagePrep(container, parts[1], parts[2]);      break;
            case 'profile':    this.renderProfile(container);   break;
            case 'shop':       this.renderShop(container);      break;
            case 'missions':   this.renderMissions(container);           break;
            case 'adventure':  AdventureMap.start(parts[1]);            break;
            case 'ranking':       this.renderRanking(container);           break;
            case 'teams':         this.renderTeams(container, parts[1]);   break;
            case 'guild':         this.renderGuild(container);              break;
            case 'friends':       this.renderFriends(container);            break;
            case 'mastery':       this.renderMastery(container);            break;
            case 'review':        this.renderReview(container);             break;
            case 'achievements':  this.renderAchievements(container);       break;
            case 'word-search':   this.renderWordSearch(container, parts[1], parts[2]); break;
            case 'events':        this.renderEvents(container);                          break;
            case 'battle-pass':   this.renderBattlePass(container);                     break;
            case 'ai-studio':     this.renderAIStudio(container);                       break;
            case 'pvp':           this.renderPvP(container);                            break;
            case 'memory':        if (typeof MemoryEngine !== 'undefined') MemoryEngine.renderMemoryScreen(container); else container.innerHTML = '<div class="screen"><p style="padding:32px">Memory Engine não carregado.</p></div>'; break;
            case 'speed-drill':   if (typeof SpeedDrill !== 'undefined') SpeedDrill.start(); else container.innerHTML = '<div class="screen"><p style="padding:32px">Speed Drill não carregado.</p></div>'; break;
            case 'flashcards':    this._renderFlashcardsRoute(container); break;
            case 'reading':       if (typeof ReadingFocus !== 'undefined') ReadingFocus.start(parts[1], parts[2]); else container.innerHTML = '<div class="screen"><p style="padding:32px">Reading Focus não carregado.</p></div>'; break;
            case 'builder':       if (typeof Builder !== 'undefined') Builder.start(container); else container.innerHTML = '<div class="screen"><p style="padding:32px">Builder não carregado.</p></div>'; break;
            case 'admin':
                if (typeof EduAdmin !== 'undefined' && State.isAdmin()) {
                    EduAdmin.render(container, parts[1] || 'overview');
                } else {
                    this.renderHome(container);
                }
                break;
            default:              this.renderHome(container);
        }

        // Refresh right panel content after each app-route render
        if (!isFullscreen && typeof Sidebar !== 'undefined') {
            setTimeout(() => Sidebar.refreshRightPanel(), 0);
        }

        // Update HUD context bar and notification badge
        if (typeof HUD !== 'undefined') {
            setTimeout(() => {
                HUD.refreshNotifBadge();
                const _getActiveChapter = () => {
                    const chs = (typeof CONFIG !== 'undefined' && CONFIG.chapters) || [];
                    return chs.find(ch => ch.unlocked && typeof State !== 'undefined' && !State.getChapterProgress(ch.id).completed) || chs[0];
                };
                if (isFullscreen) {
                    HUD.clearContext();
                } else if (route === 'home' || route === '') {
                    const ch = _getActiveChapter();
                    if (ch) HUD.setContext({ icon: ch.icon, subject: ch.subject, grade: ch.grade, stage: 'Mapa', href: `#chapter/${ch.id}` });
                    else    HUD.clearContext();
                } else if (route === 'chapter' && parts[1]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '📚', subject: meta.subject || meta.title, grade: meta.grade, stage: 'Mapa', href: `#chapter/${parts[1]}` });
                } else if (route === 'stage' && parts[1] && parts[2]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '📚', subject: meta.subject || meta.title, grade: meta.grade, stage: `Fase ${parts[2]}`, href: `#chapter/${parts[1]}` });
                } else if (route === 'adventure' && parts[1]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '🗺️', subject: meta.subject || meta.title, grade: meta.grade, stage: 'Mapa Aventura', href: `#chapter/${parts[1]}` });
                } else {
                    // All other app pages: show default chapter context (discipline + mapa always visible)
                    const ch = _getActiveChapter();
                    if (ch) HUD.setContext({ icon: ch.icon, subject: ch.subject, grade: ch.grade, stage: 'Mapa', href: `#chapter/${ch.id}` });
                }
            }, 0);
        }
    },

    _updateNavActive(route) {
        // Update both bottom nav tabs AND sidebar items
        document.querySelectorAll('.nav-tab, .sidebar-item').forEach(tab => {
            const isActive = tab.dataset.route === route ||
                             (route === '' && tab.dataset.route === 'home');
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
        // Sync sidebar user info in case name/level changed
        if (typeof Sidebar !== 'undefined') Sidebar.updateUser();
    },

    // ── LANDING PAGE ─────────────────────────────────────
    renderLanding(container) {
        container.innerHTML = `
        <div class="landing-screen">

            <!-- ── HERO ── -->
            <div class="landing-hero">
                <div class="lp-orb lp-orb-1"></div>
                <div class="lp-orb lp-orb-2"></div>
                <div class="lp-orb lp-orb-3"></div>

                <div class="landing-badge">✨ v2.0 · Gamificado · Gratuito</div>
                <div class="landing-logo">⚡ EduQuest</div>
                <h1 class="landing-headline">Aprenda como um<br><span class="landing-highlight">Herói</span></h1>

                <!-- Social avatars + live counter -->
                <div class="lp-social-row">
                    <div class="lp-avatars">
                        <span class="lp-av">🦸</span>
                        <span class="lp-av">🧙</span>
                        <span class="lp-av">🦹</span>
                        <span class="lp-av">⚔️</span>
                        <span class="lp-av lp-av-more">+12k</span>
                    </div>
                    <div class="lp-online">
                        <span class="lp-online-dot"></span>
                        <span id="lp-online-count">847</span> heróis online
                    </div>
                </div>

                <p class="landing-sub">Missões, batalhas e conquistas reais.<br>O app de estudos mais viciante do Brasil.</p>

                <!-- Preview card -->
                <div class="landing-preview">
                    <div class="landing-preview-card">
                        <div class="lp-hud">
                            <span class="lp-chip">🔥 7 dias</span>
                            <span class="lp-chip">⚡ 1.250 XP</span>
                            <span class="lp-chip">💎 48</span>
                        </div>
                        <div class="lp-stage-row">
                            <div class="lp-node done">✓</div>
                            <div class="lp-connector done"></div>
                            <div class="lp-node done">✓</div>
                            <div class="lp-connector done"></div>
                            <div class="lp-node active pulse">3</div>
                            <div class="lp-connector"></div>
                            <div class="lp-node locked">🔒</div>
                            <div class="lp-connector"></div>
                            <div class="lp-node lp-boss-node">💀</div>
                        </div>
                        <div class="lp-mission">
                            <span class="lp-m-icon">🧬</span>
                            <div>
                                <div class="lp-m-title">Vírus vs Bactérias</div>
                                <div class="lp-m-sub">Missão 3 · Difícil · +150 XP</div>
                            </div>
                            <button class="lp-play-btn" onclick="Router.navigate('#register')">JOGAR →</button>
                        </div>
                        <div class="lp-combo-row">
                            <span class="lp-combo-badge">🔥 5x Combo!</span>
                            <span class="lp-xp-pop">+75 XP</span>
                        </div>
                    </div>
                </div>

                <div class="landing-ctas">
                    <button class="btn-primary landing-cta-main" onclick="Router.navigate('#register')">
                        ⚡ Começar Jornada — Grátis
                    </button>
                    <button class="btn-ghost landing-cta-sec" onclick="Router.navigate('#login')">
                        Já tenho conta →
                    </button>
                </div>
            </div>

            <!-- ── LIVE ACTIVITY TICKER ── -->
            <div class="lp-ticker-wrap" aria-hidden="true">
                <div class="lp-ticker">
                    <span class="lp-tick">🔥 Ana manteve 30 dias de sequência</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">⚡ Pedro subiu para Liga Ouro</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">🏆 Maria venceu o Boss Mutante</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">💎 Lucas ganhou 150 gemas hoje</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">⭐ Carla completou 3 estrelas</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">🛡️ Diego desbloqueou a Cidadela Final</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">🔥 Fernanda tem 45 dias seguidos</span>
                    <span class="lp-tick-dot">·</span>
                    <span class="lp-tick">⚡ Rafael subiu para Nível 10</span>
                </div>
            </div>

            <!-- ── FEATURES ── -->
            <div class="landing-features">
                <div class="landing-section-title">Por que EduQuest?</div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🗺️</div>
                        <div class="feature-title">Mapa Aventura RPG</div>
                        <div class="feature-desc">Navegue por um mundo, explore regiões e enfrente bosses épicos.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <div class="feature-title">Sistema de Combos</div>
                        <div class="feature-desc">XP extra por velocidade e sequências. Fica difícil de parar.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔥</div>
                        <div class="feature-title">Streaks Diários</div>
                        <div class="feature-desc">Construa hábitos de estudo e ganhe recompensas por consistência.</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <div class="feature-title">Ranking & Ligas</div>
                        <div class="feature-desc">Bronze → Prata → Ouro → Platina. Suba de liga e domine.</div>
                    </div>
                </div>
            </div>

            <!-- ── BOSS TEASER ── -->
            <div class="lp-boss-teaser">
                <div class="lp-boss-glow"></div>
                <div class="lp-boss-label">👑 PRÓXIMO DESAFIO</div>
                <div class="lp-boss-name">💀 Vírus Mutante</div>
                <div class="lp-boss-hp-wrap">
                    <div class="lp-boss-hp-fill"></div>
                </div>
                <p class="lp-boss-sub">Complete as missões para desafiar o chefão</p>
            </div>

            <!-- ── HOW IT WORKS ── -->
            <div class="landing-how">
                <div class="landing-section-title">Como funciona?</div>
                <div class="how-steps">
                    <div class="how-step">
                        <div class="how-step-num">1</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Crie seu herói</div>
                            <div class="how-step-desc">Escolha avatar, classe e objetivo. Leva 1 minuto.</div>
                        </div>
                    </div>
                    <div class="how-step">
                        <div class="how-step-num">2</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Explore o mapa</div>
                            <div class="how-step-desc">Navegue por regiões, complete missões, enfrente bosses.</div>
                        </div>
                    </div>
                    <div class="how-step">
                        <div class="how-step-num">3</div>
                        <div class="how-step-text">
                            <div class="how-step-title">Domine e suba de liga</div>
                            <div class="how-step-desc">Acumule XP, conquistas e tome o topo do ranking.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── SOCIAL PROOF ── -->
            <div class="landing-social">
                <div class="social-stat"><span class="social-num">12k+</span><span class="social-label">Estudantes</span></div>
                <div class="social-divider"></div>
                <div class="social-stat"><span class="social-num">500+</span><span class="social-label">Questões</span></div>
                <div class="social-divider"></div>
                <div class="social-stat"><span class="social-num">4.9 ⭐</span><span class="social-label">Avaliação</span></div>
            </div>

            <!-- ── FINAL CTA ── -->
            <div class="landing-final-cta">
                <div class="lp-urgency">🔥 <span id="lp-joined">23</span> heróis se juntaram hoje</div>
                <button class="btn-primary" style="font-size:1rem;padding:16px 40px;max-width:300px" onclick="Router.navigate('#register')">
                    ⚡ Começar Grátis Agora
                </button>
                <p style="font-size:0.75rem;color:var(--text-muted);margin-top:10px">Gratuito · Sem cartão · Para sempre</p>
            </div>

        </div>`;

        // Animate the live counters — creates illusion of active community
        const liveEl = document.getElementById('lp-online-count');
        if (liveEl) {
            let base = 830 + Math.floor(Math.random() * 40);
            liveEl.textContent = base;
            setInterval(() => {
                base += Math.floor(Math.random() * 5) - 2;
                base = Math.max(820, base);
                liveEl.textContent = base;
            }, 3200);
        }
        const joinedEl = document.getElementById('lp-joined');
        if (joinedEl) {
            let j = 18 + Math.floor(Math.random() * 12);
            joinedEl.textContent = j;
            setInterval(() => {
                if (Math.random() > 0.65) { j++; joinedEl.textContent = j; }
            }, 4500);
        }
    },

    // ── AUTH ─────────────────────────────────────────────
    renderLogin(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-logo">⚡ EduQuest</div>
            <div class="auth-tagline">Aprenda. Evolua. Domine.</div>
            <div class="auth-card">
                <div class="auth-tabs">
                    <button class="auth-tab active" onclick="Router._switchAuthTab('password',this)">Senha</button>
                    <button class="auth-tab" onclick="Router._switchAuthTab('magic',this)">Link Mágico</button>
                    <button class="auth-tab" onclick="Router._switchAuthTab('otp',this)">Código</button>
                </div>

                <!-- Tab: Email + Senha -->
                <div id="tab-password" class="auth-tab-pane active">
                    <div class="auth-field">
                        <input class="auth-input" type="email" id="login-email"
                            placeholder="seu@email.com" autocomplete="email">
                    </div>
                    <div class="auth-field">
                        <input class="auth-input" type="password" id="login-password"
                            placeholder="sua senha" autocomplete="current-password">
                    </div>
                    <div class="auth-error" id="login-error"></div>
                    <button class="btn-primary mt-3" id="login-submit-btn" onclick="Router._doLogin()">⚡ Entrar</button>
                    <div style="text-align:center;margin-top:10px">
                        <span onclick="Router._showForgotPassword()" class="auth-link">Esqueci minha senha</span>
                    </div>
                </div>

                <!-- Tab: Link Mágico -->
                <div id="tab-magic" class="auth-tab-pane">
                    <p class="auth-hint">Receba um link de acesso direto no email, sem precisar de senha.</p>
                    <div class="auth-field">
                        <input class="auth-input" type="email" id="magic-email"
                            placeholder="seu@email.com" autocomplete="email">
                    </div>
                    <div class="auth-error" id="magic-error"></div>
                    <div class="auth-success" id="magic-success">✅ Verifique seu email para o link de acesso!</div>
                    <button class="btn-primary mt-3" id="magic-btn" onclick="Router._sendMagicLink()">📧 Enviar Link Mágico</button>
                </div>

                <!-- Tab: Código OTP -->
                <div id="tab-otp" class="auth-tab-pane">
                    <div id="otp-phase-1">
                        <p class="auth-hint">Enviaremos um código de 6 dígitos para seu email.</p>
                        <div class="auth-field">
                            <input class="auth-input" type="email" id="otp-email"
                                placeholder="seu@email.com" autocomplete="email">
                        </div>
                        <div class="auth-error" id="otp-error"></div>
                        <button class="btn-primary mt-3" id="otp-send-btn" onclick="Router._sendOTP()">🔑 Enviar Código</button>
                    </div>
                    <div id="otp-phase-2" style="display:none">
                        <div class="otp-sent-label" id="otp-sent-label">Código enviado!</div>
                        <div class="auth-field" style="margin-top:12px">
                            <input class="auth-input otp-input" type="text" id="otp-code"
                                placeholder="000000" maxlength="6" inputmode="numeric"
                                autocomplete="one-time-code">
                        </div>
                        <div class="auth-error" id="otp-verify-error"></div>
                        <button class="btn-primary mt-3" id="otp-verify-btn" onclick="Router._verifyOTP()">✓ Verificar</button>
                        <div style="text-align:center;margin-top:8px">
                            <span onclick="Router._otpBack()" class="auth-link">← Trocar email</span>
                        </div>
                    </div>
                </div>

                <div class="auth-footer mt-3">
                    Não tem conta?
                    <span onclick="Router.navigate('#register')" class="auth-link-brand">Criar conta</span>
                </div>
            </div>
        </div>`;
        setTimeout(() => document.getElementById('login-email')?.focus(), 120);
        setTimeout(() => {
            ['login-email','login-password'].forEach(id => {
                document.getElementById(id)?.addEventListener('keydown', e => {
                    if (e.key === 'Enter') Router._doLogin();
                });
            });
            document.getElementById('magic-email')?.addEventListener('keydown', e => {
                if (e.key === 'Enter') Router._sendMagicLink();
            });
            document.getElementById('otp-email')?.addEventListener('keydown', e => {
                if (e.key === 'Enter') Router._sendOTP();
            });
            document.getElementById('otp-code')?.addEventListener('keydown', e => {
                if (e.key === 'Enter') Router._verifyOTP();
            });
        }, 150);
    },

    _switchAuthTab(tabId, btn) {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + tabId)?.classList.add('active');
    },

    async _doLogin() {
        const email    = (document.getElementById('login-email')?.value  || '').trim();
        const password = (document.getElementById('login-password')?.value || '');
        const btn      = document.getElementById('login-submit-btn');
        if (btn) { btn.disabled = true; btn.textContent = 'Entrando...'; }

        const result = await State.loginAsync(email, password);

        if (result.success) {
            if (typeof SoundManager !== 'undefined') SoundManager.play('click');
            if (!State.data.user.uid) {
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

    async _sendMagicLink() {
        const email = (document.getElementById('magic-email')?.value || '').trim();
        const errEl = document.getElementById('magic-error');
        const okEl  = document.getElementById('magic-success');
        const btn   = document.getElementById('magic-btn');
        if (!email) { if(errEl){errEl.textContent='Digite seu email.';errEl.classList.add('show');} return; }
        if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }
        if (errEl) errEl.classList.remove('show');
        const { error } = await SupaAuth.sendMagicLink(email);
        if (error) {
            if (errEl) { errEl.textContent = error.message; errEl.classList.add('show'); }
            if (btn) { btn.disabled = false; btn.textContent = '📧 Enviar Link Mágico'; }
        } else {
            if (okEl) okEl.classList.add('show');
            if (btn) { btn.textContent = '📧 Reenviar Link'; btn.disabled = false; }
        }
    },

    async _sendOTP() {
        const email = (document.getElementById('otp-email')?.value || '').trim();
        const errEl = document.getElementById('otp-error');
        const btn   = document.getElementById('otp-send-btn');
        if (!email) { if(errEl){errEl.textContent='Digite seu email.';errEl.classList.add('show');} return; }
        if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }
        if (errEl) errEl.classList.remove('show');
        const { error } = await SupaAuth.sendOTP(email);
        if (error) {
            if (errEl) { errEl.textContent = error.message; errEl.classList.add('show'); }
            if (btn) { btn.disabled = false; btn.textContent = '🔑 Enviar Código'; }
        } else {
            const lbl = document.getElementById('otp-sent-label');
            if (lbl) lbl.textContent = `Código enviado para ${email}`;
            document.getElementById('otp-phase-1').style.display = 'none';
            document.getElementById('otp-phase-2').style.display = '';
            setTimeout(() => document.getElementById('otp-code')?.focus(), 100);
        }
    },

    async _verifyOTP() {
        const email = (document.getElementById('otp-email')?.value || '').trim();
        const token = (document.getElementById('otp-code')?.value  || '').trim();
        const errEl = document.getElementById('otp-verify-error');
        const btn   = document.getElementById('otp-verify-btn');
        if (token.length < 6) { if(errEl){errEl.textContent='Digite o código de 6 dígitos.';errEl.classList.add('show');} return; }
        if (btn) { btn.disabled = true; btn.textContent = 'Verificando...'; }
        if (errEl) errEl.classList.remove('show');
        const { error } = await SupaAuth.verifyOTP(email, token);
        if (error) {
            if (errEl) { errEl.textContent = error.message || 'Código inválido ou expirado.'; errEl.classList.add('show'); }
            if (btn) { btn.disabled = false; btn.textContent = '✓ Verificar'; }
        }
        // success: onAuthStateChange handles navigation
    },

    _otpBack() {
        document.getElementById('otp-phase-1').style.display = '';
        document.getElementById('otp-phase-2').style.display = 'none';
        if (document.getElementById('otp-code')) document.getElementById('otp-code').value = '';
        const errEl = document.getElementById('otp-verify-error');
        if (errEl) errEl.classList.remove('show');
    },

    _showForgotPassword() {
        const email = (document.getElementById('login-email')?.value || '').trim();
        if (!email) {
            ModalEngine.interrupt('simpleAlert', { icon: '📧', title: 'Email necessário', message: 'Digite seu email no campo acima primeiro.' });
            return;
        }
        if (typeof SupaAuth === 'undefined') {
            ModalEngine.interrupt('warning', { title: 'Serviço indisponível', message: 'Tente novamente mais tarde.' });
            return;
        }
        SupaAuth.resetPassword(email).then(({ error }) => {
            if (error) {
                ModalEngine.interrupt('warning', { title: 'Erro ao enviar', message: error.message });
            } else {
                ModalEngine.interrupt('success', { title: 'Email enviado!', message: 'Verifique sua caixa de entrada para redefinir sua senha.' });
            }
        });
    },

    // ── RESET PASSWORD ────────────────────────────────────
    renderResetPassword(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-logo">⚡ EduQuest</div>
            <div class="auth-tagline">Defina sua nova senha</div>
            <div class="auth-card">
                <div class="auth-title" style="margin-bottom:16px">🔐 Nova Senha</div>
                <div class="auth-field">
                    <input class="auth-input" type="password" id="rp-new"
                        placeholder="mínimo 6 caracteres" autocomplete="new-password">
                </div>
                <div class="auth-field">
                    <input class="auth-input" type="password" id="rp-confirm"
                        placeholder="confirme a senha" autocomplete="new-password">
                </div>
                <div class="auth-error" id="rp-error"></div>
                <button class="btn-primary mt-3" id="rp-btn" onclick="Router._doResetPassword()">✅ Salvar Nova Senha</button>
            </div>
        </div>`;
        setTimeout(() => document.getElementById('rp-new')?.focus(), 120);
    },

    async _doResetPassword() {
        const pass  = document.getElementById('rp-new')?.value     || '';
        const conf  = document.getElementById('rp-confirm')?.value || '';
        const errEl = document.getElementById('rp-error');
        const btn   = document.getElementById('rp-btn');
        if (pass.length < 6) { errEl.textContent='Senha muito curta (mín. 6 caracteres).'; errEl.classList.add('show'); return; }
        if (pass !== conf)    { errEl.textContent='As senhas não coincidem.';               errEl.classList.add('show'); return; }
        if (errEl) errEl.classList.remove('show');
        if (btn) { btn.disabled = true; btn.textContent = 'Salvando...'; }
        const { error } = await SupaAuth.updatePassword(pass);
        if (error) {
            errEl.textContent = error.message; errEl.classList.add('show');
            if (btn) { btn.disabled = false; btn.textContent = '✅ Salvar Nova Senha'; }
        } else {
            ModalEngine.interrupt('success', {
                title:   'Senha atualizada!',
                message: 'Você já está logado com a nova senha.',
                onConfirm: () => this.navigate(State.isOnboarded() ? '#home' : '#onboarding/1'),
                onCancel:  () => this.navigate(State.isOnboarded() ? '#home' : '#onboarding/1'),
            });
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

        if (btn) { btn.disabled = true; btn.textContent = 'Criando conta...'; }
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
            this._onboardData.name      || 'Herói',
            this._onboardData.dailyGoal || 10,
            this._onboardData.grade     || '7ano',
            this._onboardData.avatar,
            this._onboardData.goal      || 'compete'
        );
        if (typeof Utils !== 'undefined') Utils.confetti();
        this.navigate('#home');
    },

    // ── HOME ─────────────────────────────────────────────
    renderHome(container) {
        const user      = State.data.user;
        const xpProg    = State.getXPProgress();
        const streak    = State.getUserStreak();
        const chapters  = CONFIG.chapters || [];
        const missions  = State.getMissions();
        const companion = State.getCompanionMessage();
        const avatarCls   = State.getAvatarClass();
        const _ic         = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const _social     = typeof SocialEngine !== 'undefined';
        const liveCount   = _social ? SocialEngine.getLiveCount() : 0;
        const activityFeed= _social ? SocialEngine.getActivityFeed(5) : [];
        const userGuild   = _social ? SocialEngine.getUserGuild() : null;

        const clsColor = { guerreiro: 'rpg', mago: 'science', ninja: 'final', cientista: 'science' };
        const avatarColor = clsColor[avatarCls] || 'xp';

        // Find the first unlocked-but-incomplete chapter for "Continue" card
        const activeChapter = chapters.find(ch => {
            if (!ch.unlocked) return false;
            const prog = State.getChapterProgress(ch.id);
            return !prog.completed;
        }) || chapters[0];
        const activeProg = activeChapter ? State.getChapterProgress(activeChapter.id) : null;

        const missionsHTML = missions.map(m => `
            <div class="daily-mission ${m.completed ? 'done' : ''}">
                <div class="dm-icon">${_ic(m.icon, {size:'md'})}</div>
                <div class="dm-body">
                    <div class="dm-title">${m.title}</div>
                    <div class="dm-desc">${m.desc}</div>
                </div>
                <div class="dm-rewards-row">
                    <span class="dm-reward-chip dm-reward-xp">+${m.xp} XP</span>
                    ${m.gems ? `<span class="dm-reward-chip dm-reward-gem">${_ic('gem',{size:'xs',color:'gem'})} +${m.gems}</span>` : ''}
                    <div class="dm-check">${m.completed ? '<span class="dm-check-done">✓</span>' : '<span class="dm-check-empty"></span>'}</div>
                </div>
            </div>`).join('');

        const chaptersHTML = chapters.map(ch => {
            const prog      = State.getChapterProgress(ch.id);
            const completed = prog.percent >= 100;
            return `
            <div class="chapter-card ${ch.unlocked ? '' : 'locked'}${completed ? ' ch-completed' : ''}"
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
                <div class="chapter-arrow">${completed ? _ic('check',{size:'sm',color:'success'}) : ch.unlocked ? '›' : _ic('lock',{size:'sm',color:'locked'})}</div>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="screen screen-home">

            <!-- Greeting -->
            <div class="home-greeting">
                <div class="home-greeting-text">
                    <div class="home-greeting-hi">Olá, ${user.name}! 👋</div>
                    <div class="home-greeting-sub">Continue aprendendo e salvando o mundo!</div>
                </div>
                <div class="home-greeting-avatar home-greeting-avatar--${avatarCls}" onclick="Router.navigate('#profile')">${_ic('avatar',{size:'lg',color:avatarColor})}</div>
            </div>

            <!-- XP bar -->
            <div class="home-xp-wrap">
                <div class="home-xp-bar">
                    <div class="home-xp-fill" style="width:${xpProg.percent}%"></div>
                </div>
                <span class="home-xp-label">${xpProg.current} / ${xpProg.needed} XP</span>
            </div>

            ${companion.msg ? `
            <!-- Companion Widget -->
            <div class="companion-bar" data-mood="${companion.mood}" data-cls="${companion.cls}">
                <div class="companion-face">${_ic('companion',{size:'xl'})}</div>
                <div class="companion-bubble">${companion.msg}</div>
            </div>` : ''}

            <!-- Continue Journey -->
            ${activeChapter ? `
            <div class="continue-card" onclick="Router.navigate('#chapter/${activeChapter.id}')">
                <div class="continue-content">
                    <div class="continue-hex-wrap" aria-hidden="true">${activeChapter.icon}</div>
                    <div class="continue-left">
                        <div class="continue-badge">▶ CONTINUAR</div>
                        <div class="continue-title">${activeChapter.title}</div>
                        <div class="continue-subject">${activeChapter.subject} · Fase ${(activeProg.completed || 0) + 1}</div>
                        <div class="continue-progress-row">
                            <div class="continue-track">
                                <div class="continue-fill" style="width:${activeProg.percent}%"></div>
                            </div>
                            <span class="continue-pct">${activeProg.percent}%</span>
                        </div>
                    </div>
                    <div class="continue-art" aria-hidden="true"></div>
                </div>
            </div>` : ''}

            <!-- Quick Actions Row -->
            <div class="quick-actions-row">
                ${(() => {
                    const activeEvents = typeof EventsEngine !== 'undefined' ? (EventsEngine.getCurrentEvent() ? 1 : 0) : 0;
                    const onlineFriends = typeof SocialEngine !== 'undefined' ? SocialEngine.getLiveCount() : 0;
                    const mDone = missions.filter(m => m.completed).length;
                    const hasReward = mDone >= missions.length && missions.length > 0;
                    return [
                        { icon: '📅', label: 'Eventos',    value: activeEvents > 0 ? `${activeEvents} ativo${activeEvents>1?'s':''}` : 'Ver todos', badge: activeEvents > 0 ? String(activeEvents) : '', route: '#events'    },
                        { icon: '🏆', label: 'Desafios',   value: '1 novo',    badge: '1',               route: '#missions'   },
                        { icon: '🎁', label: 'Recompensas',value: hasReward ? 'Pronto' : `${mDone}/${missions.length}`, badge: hasReward ? '●' : '', route: '#shop' },
                        { icon: '👥', label: 'Amigos',     value: onlineFriends > 0 ? `${onlineFriends} online` : 'Ver todos', badge: '', route: '#friends' },
                    ].map(a => `
                    <a class="qa-chip" href="${a.route}">
                        <div class="qa-chip-icon-wrap">
                            ${a.badge ? `<span class="qa-badge">${a.badge}</span>` : ''}
                            <span class="qa-chip-icon">${a.icon}</span>
                        </div>
                        <div class="qa-chip-text">
                            <span class="qa-chip-label">${a.label}</span>
                            <span class="qa-chip-value">${a.value}</span>
                        </div>
                    </a>`).join('');
                })()}
            </div>

            <!-- Daily Missions -->
            <div class="daily-missions-card">
                <div class="daily-missions-card-header">
                    <div class="daily-missions-card-title">${_ic('missions',{size:'sm'})} Missões do dia</div>
                    <span class="section-done-text">${missions.filter(m=>m.completed).length}/${missions.length} concluídas</span>
                </div>
                <div class="daily-missions-list">${missionsHTML}</div>
            </div>

            <!-- Live Presence -->
            ${liveCount ? `
            <div class="live-presence-bar">
                <span class="live-dot"></span>
                <span class="live-count">${liveCount}</span>
                <span class="live-label">estudantes estudando agora</span>
                <span class="live-sep"></span>
                <a class="live-link" href="#ranking" onclick="event.preventDefault();Router.navigate('#ranking')">Ver ranking ›</a>
            </div>` : ''}

            <!-- Chapters -->
            <div class="section-header" style="margin-top:var(--sp-6)">
                <span class="section-title">${_ic('scroll',{size:'sm'})} Matérias</span>
                <span class="section-link" onclick="Router.navigate('#missions')" style="cursor:pointer">Ver todas ›</span>
            </div>
            ${chaptersHTML}

            <!-- Social Feed -->
            ${activityFeed.length ? `
            <div class="section-header mt-4">
                <span class="section-title">${_ic('friends',{size:'sm'})} Atividade Recente</span>
                <span class="section-link" onclick="Router.navigate('#guild')" style="cursor:pointer">${userGuild ? userGuild.name : 'Ver Guildas'} ›</span>
            </div>
            <div class="social-feed-list">
                ${activityFeed.map(a => `
                <div class="social-feed-item">
                    <span class="sfi-avatar">${a.avatar}</span>
                    <div class="sfi-body">
                        <div class="sfi-text">${a.text}</div>
                        <div class="sfi-time">${a.timeStr}</div>
                    </div>
                    <span class="sfi-icon">${_ic(a.icon,{size:'xs',color:a.color})}</span>
                </div>`).join('')}
            </div>` : ''}

        </div>`;
    },

    // ── CHAPTER MAP (Adventure Mission Cards) ─────────────
    renderChapterMap(container, chapterId) {
        if (!chapterId) { this.renderHome(container); return; }
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const meta   = window.CHAPTER_METADATA || { title: 'Capítulo', icon: '📚', description: '', totalStages: 5, stages: [] };
        const stages = meta.stages || [];

        // Story Mode: show lore intro on first visit
        if (meta.lore?.intro && typeof State !== 'undefined' && !State.hasSeenLore(chapterId)) {
            State.markLoreSeen(chapterId);
            setTimeout(() => {
                if (typeof ModalEngine !== 'undefined') {
                    ModalEngine.interrupt('story', {
                        icon:    'scroll',
                        title:   meta.title,
                        lore:    meta.lore.intro,
                        chapter: chapterId,
                    });
                }
            }, 400);
        }

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

            const nodeLabel = isFinal ? _ic('portal',{size:'sm',color:'final'}) : isBoss ? _ic('boss',{size:'sm',color:'rpg'}) : i;
            const nodeIcon  = completed ? _ic('check',{size:'sm',color:'success'}) : (unlocked ? nodeLabel : _ic('lock',{size:'sm',color:'locked'}));
            const typeLabel = isFinal ? `${_ic('portal',{size:'xs',color:'final'})} EXAME FINAL · ` : isBoss ? `${_ic('crown',{size:'xs',color:'rpg'})} CHEFE · ` : '';
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
                        ${isFinal ? `${_ic('portal',{size:'xs'})} Exame` : isBoss ? `${_ic('sword',{size:'xs'})} Boss` : 'JOGAR →'}
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
                ${_ic('map',{size:'sm'})} Modo Aventura
            </button>

            <div class="adventure-path">
                ${pathHTML}
            </div>
        </div>`;
    },

    // ── STAGE PREP ────────────────────────────────────────
    renderStagePrep(container, chapterId, stageId) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
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
        const passages     = stageData.summary?.content    || [];
        const hasFlashcards = flashcards.length > 0;
        const hasMnemonics  = mnemonics.length  > 0;
        const hasPassages   = passages.length   > 0;

        container.innerHTML = `
        <div class="prep-screen">
            <button class="btn-back" onclick="Router.navigate('#chapter/${chapterId}')">‹ Mapa</button>

            ${(isBoss || isFinal) ? `<div style="text-align:center; margin-bottom:var(--sp-2)">
                <span style="background:var(--gold-light);color:#92400e;font-size:0.8rem;font-weight:900;padding:4px 12px;border-radius:var(--r-full);border:2px solid var(--gold)">
                    ${isFinal ? `${_ic('achievement',{size:'xs'})} EXAME FINAL` : `${_ic('crown',{size:'xs',color:'final'})} MISSÃO CHEFE`}
                </span>
            </div>` : ''}

            <div class="prep-icon-wrap" style="${(isBoss || isFinal) ? 'background:var(--gold-light);box-shadow:0 4px 18px rgba(245,158,11,0.4)' : ''}">
                ${stageData.icon || _ic('xp',{size:'xl',color:'xp'})}
            </div>
            <div class="prep-title">${stageData.title}</div>
            <div class="prep-sub">${stageData.estimatedTime || 15} min · ${stageData.questions?.length || 10} questões</div>

            <div class="prep-rewards">
                <div class="reward-chip">${_ic('xp',{size:'xs',color:'xp'})} ${xpReward} XP</div>
                <div class="reward-chip">${_ic('gem',{size:'xs',color:'gem'})} ${gemReward} Gemas</div>
                ${State.isStageCompleted(chapterId, stageIndex)
                    ? `<div class="reward-chip" style="background:var(--success-light);border-color:var(--success);color:var(--success)">
                        ${_ic('check',{size:'xs'})} Já concluída
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
                ${isFinal ? `${_ic('achievement',{size:'sm'})} Iniciar Exame Final!` : isBoss ? `${_ic('sword',{size:'sm'})} Enfrentar o Chefe!` : `${_ic('xp',{size:'sm'})} Iniciar Missão!`}
            </button>

            <div class="minigame-select">
                <div class="minigame-select-title">ou pratique com</div>
                ${hasFlashcards ? `
                <button class="minigame-btn"
                        onclick="MemoryGame.start('${chapterId}', '${stageId}', ${stageIndex})">
                    <span class="mg-icon">${_ic('backpack',{size:'md'})}</span>
                    <div class="mg-info">
                        <span class="mg-name">Jogo da Memória</span>
                        <span class="mg-desc">Combine termos e definições · ${flashcards.length} pares</span>
                    </div>
                </button>` : ''}
                ${hasMnemonics ? `
                <button class="minigame-btn"
                        onclick="Forca.start('${chapterId}', '${stageId}', ${stageIndex})">
                    <span class="mg-icon">${_ic('scroll',{size:'md'})}</span>
                    <div class="mg-info">
                        <span class="mg-name">Jogo da Forca</span>
                        <span class="mg-desc">Adivinhe termos do capítulo · ${mnemonics.length} palavras</span>
                    </div>
                </button>` : ''}
                <button class="minigame-btn"
                        onclick="Router.navigate('#word-search/${chapterId}/${stageIndex}')">
                    <span class="mg-icon">${_ic('compass',{size:'md'})}</span>
                    <div class="mg-info">
                        <span class="mg-name">Caça-Palavras</span>
                        <span class="mg-desc">Encontre os termos do capítulo no grid</span>
                    </div>
                </button>
                ${hasPassages ? `
                <button class="minigame-btn"
                        onclick="Router.navigate('#reading/${chapterId}/${stageId}')">
                    <span class="mg-icon">${_ic('scroll',{size:'md'})}</span>
                    <div class="mg-info">
                        <span class="mg-name">Leitura Focada</span>
                        <span class="mg-desc">Leia com destaque de palavras · ${passages.length} passagem${passages.length > 1 ? 's' : ''}</span>
                    </div>
                </button>` : ''}
            </div>
        </div>`;
    },

    // ── PROFILE ───────────────────────────────────────────
    renderProfile(container) {
        const user       = State.data.user;
        const xpProg     = State.getXPProgress();
        const rank       = State.getRank();
        const heroClass  = State.getHeroClass();
        const theme      = user.theme || 'light';
        const premium    = State.isPremium();
        const chapters   = CONFIG.chapters || [];
        const avatarCls  = State.getAvatarClass();

        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : id;
        const badges = [
            { icon: 'shield',      name: 'Guardião',    locked: false },
            { icon: 'microscope',  name: 'Cientista',   locked: false },
            { icon: 'xp',          name: 'Relâmpago',   locked: user.level < 3 },
            { icon: 'star',        name: 'Estrela',     locked: user.level < 5 },
            { icon: 'trophy',      name: 'Campeão',     locked: user.level < 10 },
            { icon: 'streak',      name: 'Imparável',   locked: user.streak < 7 },
            { icon: 'gem',         name: 'Colecionador',locked: user.gems < 100 },
            { icon: 'scroll',      name: 'Gênio',       locked: user.level < 15 }
        ];
        const badgesHTML = badges.map(b => `
            <div class="achievement-item ${b.locked ? 'locked' : ''}">
                <span class="achievement-icon">${b.locked ? _ic('lock',{size:'sm',color:'locked'}) : _ic(b.icon,{size:'md'})}</span>
                <span class="achievement-name">${b.name}</span>
            </div>`).join('');

        const masteryHTML = chapters.map(ch => {
            const prog = State.getChapterProgress(ch.id);
            return `
            <div class="mastery-item">
                <div class="mastery-icon">${ch.icon}</div>
                <div class="mastery-body">
                    <div class="mastery-name">${ch.subject} · ${ch.grade}</div>
                    <div class="mastery-track">
                        <div class="mastery-fill" style="width:${prog.percent}%"></div>
                    </div>
                </div>
                <div class="mastery-pct">${prog.percent}%</div>
            </div>`;
        }).join('') + `
            <div class="mastery-item" style="opacity:0.5">
                <div class="mastery-icon">📐</div>
                <div class="mastery-body">
                    <div class="mastery-name">Matemática · Em breve</div>
                    <div class="mastery-track"><div class="mastery-fill" style="width:0%"></div></div>
                </div>
                <div class="mastery-pct" style="color:var(--text-muted)">${_ic('lock',{size:'sm',color:'locked'})}</div>
            </div>`;

        container.innerHTML = `
        <div class="profile-screen">

            <!-- Hero Banner -->
            <div class="profile-hero-banner profile-hero-banner--${avatarCls}">
                <div class="profile-hero-avatar">${_ic('avatar',{size:'xl',color:avatarCls==='guerreiro'?'rpg':avatarCls==='mago'?'science':avatarCls==='ninja'?'final':'science'})}</div>
                <div class="profile-hero-identity">
                    <div class="profile-hero-name">
                        ${user.name}
                        ${premium ? `<span class="premium-badge">${_ic('crown',{size:'xs',color:'final'})}</span>` : ''}
                    </div>
                    <div class="profile-hero-badges">
                        <span class="hero-class-badge">${_ic(heroClass.icon,{size:'xs'})} ${heroClass.name}</span>
                        <span class="hero-rank-badge ${rank.cssClass}">${_ic(rank.iconId,{size:'xs',color:rank.iconColor})} ${rank.name}</span>
                    </div>
                    <div class="profile-hero-level">Nível ${user.level} · ${user.grade || '7º Ano'}</div>
                </div>
            </div>

            <!-- XP Bar -->
            <div class="profile-xp-wrap">
                <div class="profile-xp-row">
                    <span style="font-size:0.78rem;font-weight:900;color:var(--brand)">${_ic('xp',{size:'xs',color:'xp'})} Nível ${user.level}</span>
                    <span style="font-size:0.72rem;color:var(--text-muted);font-weight:700">${xpProg.current} / ${xpProg.needed} XP</span>
                </div>
                <div class="profile-xp-track">
                    <div class="profile-xp-fill" style="width:${xpProg.percent}%"></div>
                </div>
            </div>

            <!-- Body -->
            <div class="profile-body">

                <!-- Stats -->
                <div class="section-header" style="margin-bottom:var(--sp-3)"><span class="section-title">${_ic('trophy',{size:'sm'})} Estatísticas</span></div>
                <div class="profile-stats-row">
                    <div class="profile-stat">
                        <span class="profile-stat-icon">${_ic('xp',{size:'md',color:'xp'})}</span>
                        <span class="profile-stat-value">${user.xp}</span>
                        <span class="profile-stat-label">XP</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat-icon">${_ic('gem',{size:'md',color:'gem'})}</span>
                        <span class="profile-stat-value">${user.gems}</span>
                        <span class="profile-stat-label">Gemas</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat-icon">${_ic('streak',{size:'md',color:'xp'})}</span>
                        <span class="profile-stat-value">${user.streak}</span>
                        <span class="profile-stat-label">Streak</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat-icon">${_ic('heart',{size:'md',color:'heart'})}</span>
                        <span class="profile-stat-value">${user.hearts}</span>
                        <span class="profile-stat-label">Vidas</span>
                    </div>
                </div>

                <!-- Avatar Class -->
                <div class="section-header mt-3" style="margin-bottom:var(--sp-3)"><span class="section-title">${_ic('sword',{size:'sm'})} Classe do Herói</span></div>
                <div class="avatar-class-grid">
                    ${[
                        { id: 'guerreiro', iconId: 'sword',      color: 'rpg',     name: 'Guerreiro', perk: '+1 vida em batalha'        },
                        { id: 'mago',      iconId: 'portal',     color: 'science', name: 'Mago',      perk: '+1 dica por fase'           },
                        { id: 'ninja',     iconId: 'star',       color: 'final',   name: 'Ninja',     perk: '1.5× XP em combos'         },
                        { id: 'cientista', iconId: 'microscope', color: 'science', name: 'Cientista', perk: '+1 gema a cada 5 acertos'   },
                    ].map(cls => `
                        <div class="avatar-class-card ${avatarCls === cls.id ? 'acc-selected' : ''}"
                             onclick="State.setAvatarClass('${cls.id}'); Router.renderProfile(document.getElementById('app-container'))">
                            <div class="acc-icon">${_ic(cls.iconId, {size:'xl', color: avatarCls === cls.id ? cls.color : 'locked'})}</div>
                            <div class="acc-name">${cls.name}</div>
                            <div class="acc-perk">${cls.perk}</div>
                            ${avatarCls === cls.id ? `<div class="acc-active-badge">${_ic('check',{size:'xs'})} Ativo</div>` : ''}
                        </div>`).join('')}
                </div>

                <!-- Mastery -->
                <div class="section-header mt-3" style="margin-bottom:var(--sp-3)"><span class="section-title">${_ic('dna',{size:'sm'})} Domínio</span></div>
                ${masteryHTML}

                <!-- Achievements -->
                <div class="section-header mt-3" style="margin-bottom:var(--sp-3)">
                    <span class="section-title">${_ic('achievement',{size:'sm'})} Conquistas</span>
                    <span class="section-link" onclick="Router.navigate('#achievements')" style="cursor:pointer">Ver todas ›</span>
                </div>
                <div class="achievements-grid mb-3">${badgesHTML}</div>

                <!-- Theme -->
                <div class="section-header mt-3" style="margin-bottom:var(--sp-3)"><span class="section-title">${_ic('settings',{size:'sm'})} Configurações</span></div>
                <div class="theme-toggle-row" style="margin-bottom:var(--sp-3)">
                    <span class="theme-toggle-label">🎨 Aparência</span>
                    <div class="theme-toggle-btns">
                        <button class="theme-btn ${theme==='light'?'active':''}" onclick="State.setTheme('light'); Router.renderProfile(document.getElementById('app-container'))">☀️</button>
                        <button class="theme-btn ${theme==='dark'?'active':''}"  onclick="State.setTheme('dark');  Router.renderProfile(document.getElementById('app-container'))">🌙</button>
                        <button class="theme-btn ${theme==='auto'?'active':''}"  onclick="State.setTheme('auto');  Router.renderProfile(document.getElementById('app-container'))">🔄</button>
                    </div>
                </div>

                ${!premium ? `
                <div class="premium-card" onclick="Router._showPremiumModal()" style="margin-bottom:var(--sp-3)">
                    <div class="premium-card-icon">${_ic('crown',{size:'lg',color:'final'})}</div>
                    <div class="premium-card-text">
                        <div class="premium-card-title">Seja Premium!</div>
                        <div class="premium-card-desc">Vidas ilimitadas, estatísticas avançadas e mais.</div>
                    </div>
                    <div style="font-size:0.8rem;font-weight:900;color:var(--gold)">Ver →</div>
                </div>` : ''}

                <button class="profile-nav-btn" onclick="Router.navigate('#mastery')">
                    <span class="pnb-icon">${_ic('microscope',{size:'sm',color:'science'})}</span>
                    <span class="pnb-label">Mapa de Domínio</span>
                    ${(() => { const wc = typeof State !== 'undefined' ? State.getWrongAnswerCount() : 0; return wc > 0 ? `<span class="pnb-count" style="color:#ef4444">${wc} para revisar</span>` : `<span class="pnb-count" style="color:var(--text-muted)">Sem pendências</span>`; })()}
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#achievements')">
                    <span class="pnb-icon">${_ic('achievement',{size:'sm'})}</span>
                    <span class="pnb-label">Todas as Conquistas</span>
                    <span class="pnb-count">${(State.data.user.unlockedAchievements || []).length}/${(window.ACHIEVEMENTS || []).length}</span>
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#ranking')">
                    <span class="pnb-icon">${_ic('trophy',{size:'sm'})}</span>
                    <span class="pnb-label">Ranking Global</span>
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#guild')">
                    <span class="pnb-icon">${_ic('guild',{size:'sm'})}</span>
                    <span class="pnb-label">Minha Guild</span>
                    ${(typeof SocialEngine !== 'undefined' && SocialEngine.getUserGuild()) ? `<span class="pnb-count">${SocialEngine.getUserGuild().name}</span>` : `<span class="pnb-count" style="color:var(--text-muted)">Sem guild</span>`}
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#friends')">
                    <span class="pnb-icon">${_ic('friends',{size:'sm'})}</span>
                    <span class="pnb-label">Amigos</span>
                    ${(() => { const fc = typeof SocialEngine !== 'undefined' ? SocialEngine.getFriendPlayers().length : 0; const pc = typeof SocialEngine !== 'undefined' ? SocialEngine.getChallenges().filter(c=>c.status==='pending').length : 0; return pc > 0 ? `<span class="pnb-count" style="color:#ef4444">${pc} desafio${pc>1?'s':''}</span>` : fc > 0 ? `<span class="pnb-count">${fc} amigo${fc>1?'s':''}</span>` : `<span class="pnb-count" style="color:var(--text-muted)">0 amigos</span>`; })()}
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#teams')">
                    <span class="pnb-icon">${_ic('friends',{size:'sm'})}</span>
                    <span class="pnb-label">Minhas Turmas</span>
                    <span class="pnb-arrow">›</span>
                </button>
                <button class="profile-nav-btn" onclick="Router.navigate('#shop')">
                    <span class="pnb-icon">${_ic('shop',{size:'sm'})}</span>
                    <span class="pnb-label">Loja de Itens</span>
                    <span class="pnb-arrow">›</span>
                </button>

                <button class="btn-secondary mt-3" onclick="State.logoutAsync()">Sair da conta</button>
            </div>
        </div>`;
    },

    // ── RANKING ───────────────────────────────────────────
    async renderRanking(container) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        container.innerHTML = `
        <div class="screen" style="padding-top:var(--sp-4)">
            <div style="text-align:center;padding:40px 0">
                ${_ic('trophy',{size:'xl',color:'xp'})}
                <p style="color:var(--text-muted);font-weight:700;margin-top:8px">Carregando ranking...</p>
            </div>
        </div>`;

        const uid  = State.data.user.uid;
        const rank = State.getRank();

        let players = [];
        if (typeof SupaDB !== 'undefined') {
            const { data } = await SupaDB.getRanking(20);
            if (data?.length) players = data;
        }

        // Use mixed ranking (ghost players + user) when no remote data
        if (!players.length) {
            if (typeof SocialEngine !== 'undefined') {
                players = SocialEngine.getMixedRanking(State.data.user);
            } else {
                players = [{
                    id: uid, name: State.data.user.name, level: State.data.user.level,
                    xp: State.data.user.xp, avatar: State.data.user.avatar || '🦸',
                    streak: State.data.user.streak
                }];
            }
        }

        const getRankIcon = xp => xp >= 5000 ? _ic('crown',{size:'xs',color:'final'}) : xp >= 2000 ? _ic('star',{size:'xs',color:'xp'}) : xp >= 800 ? _ic('shield',{size:'xs',color:'science'}) : _ic('achievement',{size:'xs',color:'locked'});
        const myIdx = players.findIndex(p => p.id === uid);

        const top3 = players.slice(0, 3);
        const rest = players.slice(3, 10);

        // Podium: render in display order [2nd, 1st, 3rd]
        const podiumMap = [
            { p: top3[1], pos: 2, medal: _ic('star',{size:'sm',color:'science'}),  cls: 'second' },
            { p: top3[0], pos: 1, medal: _ic('crown',{size:'sm',color:'final'}),   cls: 'first'  },
            { p: top3[2], pos: 3, medal: _ic('shield',{size:'sm',color:'science'}),cls: 'third'  },
        ].filter(item => item.p);

        const podiumHTML = podiumMap.map(({ p, medal, cls }) => {
            const isMe = p.id === uid;
            return `
            <div class="podium-item ${cls}">
                <div class="podium-medal">${medal}</div>
                <div class="podium-avatar">${p.avatar || '🦸'}</div>
                <div class="podium-name">${isMe ? 'Você' : (p.name || '—').slice(0, 9)}</div>
                <div class="podium-xp">⚡ ${p.xp || 0}</div>
                <div class="podium-block"></div>
            </div>`;
        }).join('');

        const listHTML = rest.map((p, i) => {
            const pos  = i + 4;
            const isMe = p.id === uid;
            return `
            <div class="ranking-row ${isMe ? 'is-me' : ''}">
                <span class="rank-num">#${pos}</span>
                <div class="rank-avatar-cell">${p.avatar || '🦸'}</div>
                <div class="rank-info">
                    <div class="rank-info-name">${isMe ? 'Você ✦' : (p.name || '—')}</div>
                    <div class="rank-info-level">Nível ${p.level || 1}</div>
                </div>
                <span class="rank-xp-col">⚡ ${p.xp || 0}</span>
                <span class="rank-medal-col">${getRankIcon(p.xp || 0)}</span>
            </div>`;
        }).join('');

        // Show my row if outside top 10
        let myPosHTML = '';
        if (myIdx >= 10) {
            const me = players[myIdx];
            myPosHTML = `
            <div class="ranking-my-section">
                <div class="ranking-my-label">Sua posição</div>
                <div class="ranking-row is-me">
                    <span class="rank-num">#${myIdx + 1}</span>
                    <div class="rank-avatar-cell">${me.avatar || '🦸'}</div>
                    <div class="rank-info">
                        <div class="rank-info-name">Você ✦</div>
                        <div class="rank-info-level">Nível ${me.level || 1}</div>
                    </div>
                    <span class="rank-xp-col">⚡ ${me.xp || 0}</span>
                    <span class="rank-medal-col">${getRankIcon(me.xp || 0)}</span>
                </div>
            </div>`;
        }

        container.innerHTML = `
        <div class="screen" style="padding-top:0;padding-left:0;padding-right:0">

            <div class="ranking-header">
                <span class="ranking-league-icon">${_ic(rank.iconId,{size:'lg',color:rank.iconColor})}</span>
                <div class="ranking-league-name">Liga ${rank.name}</div>
                <div class="ranking-league-desc">Top jogadores do EduQuest</div>
            </div>

            ${top3.length ? `<div class="ranking-podium">${podiumHTML}</div>` : ''}

            ${rest.length ? `<div class="ranking-list">${listHTML}</div>` : ''}

            ${myPosHTML}

            ${!players.length ? `
            <div class="empty-state" style="padding: 32px">
                <span class="empty-icon">🏆</span>
                <p>Nenhum jogador encontrado ainda.</p>
                <p style="font-size:0.8rem;color:var(--text-muted)">Seja o primeiro a aparecer aqui!</p>
            </div>` : ''}

        </div>`;
    },

    _showPremiumModal() {
        const _ic    = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const perks  = [
            [_ic('heart',{size:'xs',color:'heart'}),    'Vidas ilimitadas'],
            [_ic('star',{size:'xs',color:'xp'}),        'Estatísticas avançadas'],
            [_ic('shield',{size:'xs',color:'science'}), 'Sem pressão de tempo'],
            [_ic('crown',{size:'xs',color:'final'}),    'Conteúdo exclusivo'],
            [_ic('gem',{size:'xs',color:'gem'}),        'Backup na nuvem'],
        ];
        const el = document.createElement('div');
        el.className = 'feedback-overlay show';
        el.style.cssText = 'display:flex;align-items:center;justify-content:center;z-index:999';
        el.innerHTML = `
        <div class="feedback-card" style="max-width:320px;padding:28px 24px;text-align:center">
            <div style="font-size:2.5rem;margin-bottom:8px">${_ic('crown',{size:'xl',color:'final'})}</div>
            <div style="font-size:1.2rem;font-weight:900;color:var(--gold);margin-bottom:4px">EduQuest Premium</div>
            <div style="font-size:0.82rem;color:var(--text-2);margin-bottom:16px">Desbloqueie todo o potencial do app</div>
            ${perks.map(([icon,label])=>`<div style="font-size:0.85rem;font-weight:700;padding:6px 0;border-bottom:1px solid var(--border);text-align:left;display:flex;align-items:center;gap:8px">${icon}${label}</div>`).join('')}
            <div style="margin-top:20px;font-size:0.8rem;color:var(--text-muted)">Em breve — fique atento!</div>
            <button class="btn-primary mt-4" onclick="this.closest('.feedback-overlay').remove()">Fechar</button>
        </div>`;
        document.body.appendChild(el);
    },

    // ── TEAMS ─────────────────────────────────────────────
    renderTeams(container, teamId) {
        if (teamId) { this._renderTeamDetail(container, teamId); return; }
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        container.innerHTML = `<div class="screen teams-screen">
            <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>
            <h2 style="font-size:1.1rem;font-weight:900;margin-bottom:16px">${_ic('friends',{size:'sm'})} Minhas Turmas</h2>

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
            <div id="teams-list"><div class="team-empty"><span class="team-empty-icon">${_ic('friends',{size:'md'})}</span>Carregando...</div></div>
        </div>`;
        this._loadTeamsList();
    },

    async _loadTeamsList() {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const el = document.getElementById('teams-list'); if (!el) return;
        const uid = State.data.user.uid;
        if (!uid || typeof SupaDB === 'undefined') {
            el.innerHTML = `<div class="team-empty"><span class="team-empty-icon">${_ic('friends',{size:'md'})}</span>Faça login para ver suas turmas.</div>`;
            return;
        }
        const { data, error } = await SupaDB.getMyTeams(uid);
        if (error || !data?.length) {
            el.innerHTML = `<div class="team-empty"><span class="team-empty-icon">${_ic('friends',{size:'md'})}</span>Você ainda não participa de nenhuma turma.</div>`;
            return;
        }
        el.innerHTML = data.map(m => {
            const t = m.teams;
            const isOwner = t.owner_id === uid;
            return `
            <div class="team-card" onclick="Router.navigate('#teams/${t.id}')">
                <div class="team-card-icon">${_ic('shield',{size:'md',color:'science'})}</div>
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
        if (!name) {
            ModalEngine.interrupt('simpleAlert', { icon: 'friends', title: 'Nome obrigatório', message: 'Digite o nome da turma.' });
            return;
        }
        const uid = State.data.user.uid;
        if (!uid) {
            ModalEngine.interrupt('warning', { title: 'Login necessário', message: 'Faça login para criar uma turma.' });
            return;
        }
        const btn = document.querySelector('[onclick="Router._createTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '...'; }
        const { data, error } = await SupaDB.createTeam(name, uid);
        if (btn) { btn.disabled = false; btn.textContent = 'Criar'; }
        if (error) {
            ModalEngine.interrupt('warning', { title: 'Erro ao criar turma', message: error.message });
            return;
        }
        ModalEngine.interrupt('success', {
            title:   `Turma criada!`,
            message: `"${data.name}" — Código: ${data.code}`,
        });
        this._loadTeamsList();
        const inp = document.getElementById('new-team-name'); if (inp) inp.value = '';
    },

    async _joinTeam() {
        const code = (document.getElementById('team-code-input')?.value || '').trim();
        if (code.length < 4) {
            ModalEngine.interrupt('simpleAlert', { icon: 'lock', title: 'Código inválido', message: 'Digite o código da turma (6 letras).' });
            return;
        }
        const uid = State.data.user.uid;
        if (!uid) {
            ModalEngine.interrupt('warning', { title: 'Login necessário', message: 'Faça login para entrar em uma turma.' });
            return;
        }
        const btn = document.querySelector('[onclick="Router._joinTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '...'; }
        const { data, error } = await SupaDB.joinTeamByCode(code, uid);
        if (btn) { btn.disabled = false; btn.textContent = 'Entrar'; }
        if (error) {
            ModalEngine.interrupt('warning', { title: 'Erro ao entrar', message: error.message });
            return;
        }
        ModalEngine.interrupt('success', { title: 'Bem-vindo!', message: `Você entrou na turma "${data.team.name}"!` });
        this._loadTeamsList();
        const inp = document.getElementById('team-code-input'); if (inp) inp.value = '';
    },

    async _renderTeamDetail(container, teamId) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        container.innerHTML = `<div class="screen teams-screen">
            <button class="btn-back" onclick="Router.navigate('#teams')">‹ Turmas</button>
            <div id="team-detail-wrap"><div class="team-empty"><span class="team-empty-icon">${_ic('friends',{size:'md'})}</span>Carregando...</div></div>
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

            <div class="team-section-title">${_ic('friends',{size:'xs'})} Membros (${members.length})</div>
            ${sorted.map((m, i) => {
                const p     = m.profiles || {};
                const medal = i === 0 ? _ic('crown',{size:'sm',color:'final'}) : i === 1 ? _ic('star',{size:'sm',color:'xp'}) : i === 2 ? _ic('shield',{size:'sm',color:'science'}) : _ic('avatar',{size:'sm'});
                return `
                <div class="team-member-row">
                    <div class="team-member-avatar">${medal}</div>
                    <div>
                        <div class="team-member-name">${p.name || '—'}${m.role==='owner'?'<span class="team-owner-chip">Dono</span>':''}</div>
                        <div class="team-member-level">Nível ${p.level||1} · ${_ic('streak',{size:'xs',color:'xp'})} ${p.streak||1}</div>
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

    _leaveTeam(teamId) {
        ModalEngine.interrupt('confirm', {
            icon:        '🚪',
            title:       'Sair da turma?',
            message:     'Você será removido desta turma. Pode entrar novamente com o código.',
            confirmText: '🚪 Sair da turma',
            cancelText:  'Cancelar',
            onConfirm:   async () => {
                await SupaDB.leaveTeam(teamId, State.data.user.uid);
                this.navigate('#teams');
            },
        });
    },

    _deleteTeam(teamId) {
        ModalEngine.interrupt('dangerConfirm', {
            icon:        '🗑️',
            title:       'Excluir turma?',
            message:     'A turma será excluída permanentemente. Esta ação não pode ser desfeita.',
            confirmText: '🗑️ Excluir permanentemente',
            cancelText:  'Cancelar',
            onConfirm:   async () => {
                await SupaDB.deleteTeam(teamId);
                this.navigate('#teams');
            },
        });
    },

    // ── GUILD ────────────────────────────────────────────
    renderGuild(container) {
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const SE    = typeof SocialEngine !== 'undefined' ? SocialEngine : null;
        if (!SE) {
            container.innerHTML = `<div class="screen"><p style="padding:40px;text-align:center;color:var(--text-muted)">Sistema social carregando...</p></div>`;
            return;
        }

        const myGuild = SE.getUserGuild();

        if (myGuild) {
            this._renderGuildHome(container, myGuild, SE, _ic);
        } else {
            this._renderGuildJoin(container, SE, _ic);
        }
    },

    _renderGuildHome(container, guild, SE, _ic) {
        const user  = State.data.user;
        const feed  = SE.getGuildFeed(guild.id, 6);
        const lb    = SE.getGuildLeaderboard(guild.id);
        const preset= SE.GUILD_PRESETS.find(g => g.id === guild.id);

        const myEntry = {
            name: user.name || 'Você', avatar: user.avatar || '🦸',
            level: user.level || 1, xp: user.xp || 0, streak: user.streak || 1, isMe: true,
        };
        const allMembers = [...lb, myEntry].sort((a, b) => b.xp - a.xp);

        const lbHTML = allMembers.slice(0, 8).map((m, i) => `
            <div class="guild-lb-row ${m.isMe ? 'is-me' : ''}">
                <span class="glb-pos">${i === 0 ? _ic('crown',{size:'xs',color:'final'}) : i === 1 ? _ic('star',{size:'xs',color:'xp'}) : i === 2 ? _ic('shield',{size:'xs',color:'science'}) : `#${i+1}`}</span>
                <span class="glb-avatar">${m.avatar}</span>
                <span class="glb-name">${m.isMe ? 'Você ✦' : m.name}</span>
                <span class="glb-streak">${_ic('streak',{size:'xs',color:'xp'})} ${m.streak}</span>
                <span class="glb-xp">${_ic('xp',{size:'xs',color:'xp'})} ${m.xp.toLocaleString()}</span>
            </div>`).join('');

        const feedHTML = feed.map(f => `
            <div class="guild-feed-item">
                <span class="gfi-avatar">${f.avatar}</span>
                <div class="gfi-body">
                    <div class="gfi-text">${f.text}</div>
                    <div class="gfi-time">${f.timeStr}</div>
                </div>
                <span class="gfi-icon">${_ic(f.icon,{size:'xs',color:f.color})}</span>
            </div>`).join('');

        container.innerHTML = `
        <div class="guild-screen">
            <div class="guild-hero" style="background:${guild.banner || '#1e3a5f'}">
                <div class="guild-hero-icon">${guild.icon}</div>
                <div class="guild-hero-name">${guild.name}</div>
                <div class="guild-hero-meta">${allMembers.length} membros</div>
                <div class="guild-hero-xp">${_ic('xp',{size:'xs'})} ${(preset?.xp || 0).toLocaleString()} XP da guild</div>
                <div class="guild-hero-badges">
                    <span class="guild-hero-badge">${_ic('trophy',{size:'xs'})} Liga Bronze</span>
                    <span class="guild-hero-badge">Ativa</span>
                </div>
                <button class="guild-leave-btn" onclick="Router._leaveGuild()">Sair da guild</button>
            </div>

            <div class="guild-body">

                <!-- Boss Battle Async -->
                ${(() => {
                    const boss = SE.getGuildBoss(guild.id);
                    const hpColor = boss.hp > 60 ? '#ef4444' : boss.hp > 30 ? '#f97316' : '#10b981';
                    return `
                <div class="guild-boss-card">
                    <div class="gbc-header">
                        <span class="gbc-icon">${boss.icon}</span>
                        <div class="gbc-info">
                            <div class="gbc-name">${boss.name}</div>
                            <div class="gbc-meta">Boss Global da Guild · ${boss.hp}% HP restante</div>
                        </div>
                        ${boss.canAttack ? `
                        <button class="gbc-attack-btn" onclick="Router._attackGuildBoss('${guild.id}')">
                            ${_ic('sword',{size:'xs',color:'rpg'})} Atacar!
                        </button>` : `
                        <span class="gbc-attacked-badge">${_ic('check',{size:'xs',color:'success'})} Atacado hoje</span>`}
                    </div>
                    <div class="gbc-hp-track">
                        <div class="gbc-hp-fill" style="width:${boss.hp}%;background:${hpColor}"></div>
                    </div>
                    <div class="gbc-stats">
                        <span>${_ic('friends',{size:'xs'})} Dano da guild: ${boss.ghostDamage} pts</span>
                        ${boss.userDamage ? `<span>${_ic('xp',{size:'xs',color:'xp'})} Seu dano: ${boss.userDamage} pts</span>` : ''}
                    </div>
                </div>`;
                })()}

                <div class="section-header mt-4" style="margin-bottom:var(--sp-3)">
                    <span class="section-title">${_ic('trophy',{size:'sm'})} Ranking da Guild</span>
                </div>
                ${lbHTML}

                <div class="section-header mt-4" style="margin-bottom:var(--sp-3)">
                    <span class="section-title">${_ic('friends',{size:'sm'})} Atividade</span>
                </div>
                ${feedHTML}
            </div>
        </div>`;
    },

    _renderGuildJoin(container, SE, _ic) {
        const guilds = SE.GUILD_PRESETS;
        const liveCount = SE.getLiveCount();

        const guildsHTML = guilds.map(g => `
            <div class="guild-card" onclick="Router._joinGuild('${g.id}')">
                <span class="guild-card-icon">${g.icon}</span>
                <div class="guild-card-info">
                    <div class="guild-card-name">${g.name}</div>
                    <div class="guild-card-meta">
                        <span>${_ic('friends',{size:'xs'})} ${g.members} membros</span>
                        <span>${_ic('xp',{size:'xs',color:'xp'})} ${g.xp.toLocaleString()} XP</span>
                    </div>
                </div>
                <button class="guild-join-btn">Entrar</button>
            </div>`).join('');

        container.innerHTML = `
        <div class="guild-screen">
            <div class="guild-list-section">
                <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>

                <div style="text-align:center;padding:var(--sp-4) 0 var(--sp-3)">
                    <div style="font-size:2.5rem;margin-bottom:8px">${_ic('guild',{size:'xl',color:'science'})}</div>
                    <div style="font-size:1.1rem;font-weight:900;color:var(--text)">Entrar em uma Guild</div>
                    <div style="font-size:0.78rem;color:var(--text-muted);font-weight:700;margin-top:4px">
                        Compita, colabore e suba no ranking com sua equipe
                    </div>
                    ${liveCount ? `<div style="font-size:0.72rem;color:#10b981;font-weight:800;margin-top:6px">🟢 ${liveCount} estudantes ativos agora</div>` : ''}
                </div>

                <div class="guild-list-header">${_ic('flag',{size:'sm'})} Guildas Disponíveis</div>
                <div class="guild-list-grid">${guildsHTML}</div>
            </div>
        </div>`;
    },

    _joinGuild(guildId) {
        if (typeof SocialEngine === 'undefined') return;
        const guild = SocialEngine.joinGuild(guildId);
        if (!guild) return;
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('motivational', {
                icon:  'guild',
                title: `Bem-vindo, ${guild.name}!`,
                msg:   'Você entrou na guild! Compita com seus colegas e suba no ranking.',
            });
        }
        this.renderGuild(document.getElementById('app-container'));
    },

    _attackGuildBoss(guildId) {
        if (typeof SocialEngine === 'undefined') return;
        const dmg = SocialEngine.attackBoss(guildId);
        if (dmg === false) { if (typeof HUD !== 'undefined') HUD._toast('Você já atacou hoje!'); return; }
        if (typeof State !== 'undefined') State.addXP(dmg);
        if (typeof HUD !== 'undefined') HUD._toast(`Ataque! ${dmg} dano causado ao Boss. +${dmg} XP`);
        this.renderGuild(document.getElementById('app-container'));
    },

    _leaveGuild() {
        ModalEngine.interrupt('confirm', {
            title:       'Sair da guild?',
            message:     'Você poderá entrar em outra guild a qualquer momento.',
            confirmText: 'Sair',
            cancelText:  'Cancelar',
            onConfirm:   () => {
                if (typeof SocialEngine !== 'undefined') SocialEngine.leaveGuild();
                this.navigate('#guild');
            },
        });
    },

    // ── MASTERY SCREEN ───────────────────────────────────
    renderMastery(container) {
        const _ic      = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const mastery  = typeof State !== 'undefined' ? State.getMasteryData() : [];
        const weakAll  = typeof State !== 'undefined' ? State.getWeakTopics()  : [];
        const wrongCnt = typeof State !== 'undefined' ? State.getWrongAnswerCount() : 0;

        const barColor = pct => pct >= 70 ? 'fill-green' : pct >= 40 ? 'fill-yellow' : 'fill-red';

        // SVG Radar chart — pentagon axes for up to 5 chapters
        const axes   = mastery.slice(0, 5);
        const cx = 110, cy = 110, r = 80;
        const angleStep = (Math.PI * 2) / Math.max(axes.length, 3);
        const toXY = (i, pct) => {
            const a = -Math.PI / 2 + i * angleStep;
            const d = (pct / 100) * r;
            return { x: cx + d * Math.cos(a), y: cy + d * Math.sin(a) };
        };
        const gridLevels = [25, 50, 75, 100];
        const gridHTML = gridLevels.map(lvl => {
            const pts = axes.map((_, i) => {
                const a = -Math.PI / 2 + i * angleStep;
                const d = (lvl / 100) * r;
                return `${cx + d * Math.cos(a)},${cy + d * Math.sin(a)}`;
            }).join(' ');
            return `<polygon points="${pts}" fill="none" stroke="var(--border)" stroke-width="${lvl === 100 ? 1.5 : 0.7}"/>`;
        }).join('');
        const axisLines = axes.map((_, i) => {
            const a = -Math.PI / 2 + i * angleStep;
            return `<line x1="${cx}" y1="${cy}" x2="${cx + r * Math.cos(a)}" y2="${cy + r * Math.sin(a)}" stroke="var(--border)" stroke-width="0.7"/>`;
        }).join('');
        const dataPoints = axes.map((ch, i) => toXY(i, ch.prog.percent));
        const dataPoly   = dataPoints.map(p => `${p.x},${p.y}`).join(' ');
        const labelHTML  = axes.map((ch, i) => {
            const a  = -Math.PI / 2 + i * angleStep;
            const lx = cx + (r + 22) * Math.cos(a);
            const ly = cy + (r + 22) * Math.sin(a);
            return `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle"
                style="font-size:9px;font-weight:900;fill:var(--text-muted);font-family:var(--font)">${ch.subject.slice(0,8)}</text>`;
        }).join('');
        const radarSVG = axes.length >= 3 ? `
        <div class="radar-wrap">
            <svg class="radar-svg" width="220" height="220" viewBox="0 0 220 220">
                ${gridHTML}${axisLines}
                <polygon points="${dataPoly}" fill="rgba(249,115,22,0.15)" stroke="var(--brand)" stroke-width="2"/>
                ${dataPoints.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--brand)"/>`).join('')}
                ${labelHTML}
            </svg>
        </div>` : '';

        const masteryCardsHTML = mastery.map(ch => `
        <div class="mastery-card">
            <div class="mastery-card-header">
                <span class="mastery-card-icon">${ch.icon}</span>
                <div class="mastery-card-info">
                    <div class="mastery-card-title">${ch.title}</div>
                    <div class="mastery-card-sub">${ch.subject} · ${ch.prog.stagesCompleted}/${ch.prog.totalStages} missões</div>
                </div>
                <span class="mastery-card-pct">${ch.prog.percent}%</span>
            </div>
            <div class="mastery-bar-track">
                <div class="mastery-bar-fill ${barColor(ch.prog.percent)}" style="width:${ch.prog.percent}%"></div>
            </div>
            ${ch.weakTopics.length ? `
            <div style="margin-top:8px;font-size:0.7rem;color:#ef4444;font-weight:800">
                ${_ic('warning',{size:'xs',color:'danger'})} Fraco em: ${ch.weakTopics.map(t=>t.topic).join(', ')}
            </div>` : ''}
        </div>`).join('');

        const weakHTML = weakAll.slice(0, 5).map(t => `
        <div class="weak-topic-row">
            <span class="wt-icon">${_ic('warning',{size:'xs',color:'danger'})}</span>
            <span class="wt-name">${t.topic}</span>
            <span class="wt-count">${t.count}× errado</span>
        </div>`).join('');

        container.innerHTML = `
        <div class="screen mastery-screen">
            <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>

            <div class="mastery-header">
                <span class="mastery-header-icon">${_ic('microscope',{size:'lg',color:'science'})}</span>
                <div>
                    <div class="mastery-header-title">Mapa de Domínio</div>
                    <div class="mastery-header-sub">Sua performance por tópico</div>
                </div>
            </div>

            ${radarSVG}

            ${wrongCnt > 0 ? `
            <div class="review-cta-wrap">
                <span class="review-cta-icon">${_ic('compass',{size:'lg',color:'xp'})}</span>
                <div class="review-cta-info">
                    <div class="review-cta-title">Revisão Inteligente disponível</div>
                    <div class="review-cta-sub">${wrongCnt} questão${wrongCnt > 1 ? 'ões' : ''} para reforçar</div>
                </div>
                <button class="fr-accept-btn" onclick="Router.navigate('#review')">
                    ${_ic('scroll',{size:'xs'})} Revisar
                </button>
            </div>` : ''}

            <div class="mastery-section">
                <div class="mastery-section-title">${_ic('scroll',{size:'xs',color:'science'})} Por Matéria</div>
                ${masteryCardsHTML || `<p style="color:var(--text-muted);font-size:0.85rem;font-weight:700;padding:16px">Complete missões para ver seu domínio aqui.</p>`}
            </div>

            ${weakAll.length ? `
            <div class="mastery-section">
                <div class="mastery-section-title">${_ic('warning',{size:'xs',color:'danger'})} Tópicos Fracos</div>
                <div class="weak-topics-list">${weakHTML}</div>
            </div>` : ''}
        </div>`;
    },

    // ── SMART REVIEW ─────────────────────────────────────
    renderReview(container) {
        const _ic   = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const questions = typeof State !== 'undefined' ? State.getReviewQuestions(8) : [];

        if (!questions.length) {
            container.innerHTML = `
            <div class="screen review-screen">
                <button class="btn-back" onclick="Router.navigate('#mastery')">‹ Domínio</button>
                <div class="review-header">
                    <span class="review-header-icon">${_ic('compass',{size:'lg',color:'science'})}</span>
                    <div>
                        <div class="review-header-title">Revisão Inteligente</div>
                        <div class="review-header-sub">Sem questões para revisar ainda</div>
                    </div>
                </div>
                <div class="review-empty">
                    ${_ic('check',{size:'xl',color:'success'})}
                    <p style="margin-top:12px">Você não errou nenhuma questão ainda.</p>
                    <p>Complete missões para construir sua fila de revisão!</p>
                    <button class="btn-primary mt-4" onclick="Router.navigate('#home')">Jogar agora</button>
                </div>
            </div>`;
            return;
        }

        // In-page mini quiz state
        const state = { idx: 0, correct: 0, answered: false };
        window._reviewState = state;
        window._reviewQuestions = questions;

        const renderQ = () => {
            const q   = window._reviewQuestions[window._reviewState.idx];
            const s   = window._reviewState;
            const pct = Math.round((s.idx / window._reviewQuestions.length) * 100);
            const letters = ['A','B','C','D'];
            const optHTML = (q.options || []).map((opt, i) => `
                <button class="review-option" id="rv-opt-${i}" onclick="window._reviewAnswer(${i})">
                    <span class="review-option-letter">${letters[i] || i+1}</span>${opt}
                </button>`).join('');

            const wrap = document.getElementById('review-quiz-wrap');
            if (!wrap) return;
            wrap.innerHTML = `
                <div class="review-progress">
                    <span>${s.idx + 1}/${window._reviewQuestions.length}</span>
                    <div class="review-progress-track"><div class="review-progress-fill" style="width:${pct}%"></div></div>
                    <span>${s.correct} certas</span>
                </div>
                <div class="review-question-card">
                    <div class="review-q-meta">${_ic('warning',{size:'xs',color:'danger'})} Errado ${q._wrongCount || 1}× · Tópico: ${q._topic || 'Geral'}</div>
                    <div class="review-q-text">${q.question}</div>
                    <div class="review-options" id="rv-options">${optHTML}</div>
                </div>`;
        };

        window._reviewAnswer = (selectedIdx) => {
            const q = window._reviewQuestions[window._reviewState.idx];
            const s = window._reviewState;
            if (s.answered) return;
            s.answered = true;

            const opts = document.querySelectorAll('.review-option');
            opts.forEach((el, i) => {
                el.disabled = true;
                if (i === q.correctIndex) el.classList.add('correct');
                else if (i === selectedIdx) el.classList.add('wrong');
            });

            if (selectedIdx === q.correctIndex) s.correct++;

            const nextBtn = document.getElementById('rv-next-btn');
            if (nextBtn) {
                nextBtn.style.display = 'block';
                nextBtn.textContent   = s.idx + 1 < window._reviewQuestions.length ? 'Próxima →' : 'Finalizar';
            }
        };

        window._reviewNext = () => {
            const s = window._reviewState;
            s.idx++;
            s.answered = false;
            const nextBtn = document.getElementById('rv-next-btn');
            if (nextBtn) nextBtn.style.display = 'none';

            if (s.idx >= window._reviewQuestions.length) {
                const xpEarned = s.correct * 10;
                if (typeof State !== 'undefined' && xpEarned > 0) State.addXP(xpEarned);
                const wrap = document.getElementById('review-quiz-wrap');
                if (wrap) wrap.innerHTML = `
                    <div style="text-align:center;padding:32px 16px">
                        ${_ic('achievement',{size:'xl',color:'xp'})}
                        <div style="font-size:1.1rem;font-weight:900;margin-top:12px">Revisão Concluída!</div>
                        <div style="color:var(--text-muted);font-size:0.85rem;font-weight:700;margin-top:4px">${s.correct}/${window._reviewQuestions.length} corretas · +${xpEarned} XP</div>
                        <button class="btn-primary mt-4" onclick="Router.navigate('#mastery')">Ver Domínio</button>
                        <button class="btn-secondary mt-2" onclick="Router.renderReview(document.getElementById('app-container'))">Revisar Novamente</button>
                    </div>`;
                return;
            }
            renderQ();
        };

        container.innerHTML = `
        <div class="screen review-screen">
            <button class="btn-back" onclick="Router.navigate('#mastery')">‹ Domínio</button>
            <div class="review-header">
                <span class="review-header-icon">${_ic('compass',{size:'lg',color:'science'})}</span>
                <div>
                    <div class="review-header-title">Revisão Inteligente</div>
                    <div class="review-header-sub">${questions.length} questões das suas fraquezas</div>
                </div>
            </div>
            <div id="review-quiz-wrap"></div>
            <div style="padding:0 var(--sp-4)">
                <button class="btn-primary" id="rv-next-btn" style="display:none;width:100%" onclick="window._reviewNext()">Próxima →</button>
            </div>
        </div>`;

        renderQ();
    },

    // ── FRIENDS ──────────────────────────────────────────
    renderFriends(container) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const SE  = typeof SocialEngine !== 'undefined' ? SocialEngine : null;
        if (!SE) { container.innerHTML = `<div class="screen"><p style="padding:32px;color:var(--text-muted);text-align:center">Sistema social indisponível.</p></div>`; return; }

        const myFriendIds  = SE.getFriends();
        const friendPlayers = SE.getFriendPlayers();
        const challenges    = SE.getChallenges();
        const pending       = challenges.filter(c => c.status === 'pending');
        const resolved      = challenges.filter(c => c.status !== 'pending').slice(-5).reverse();

        // Suggested friends: ghost players NOT already friends (up to 8)
        const allGhosts = SE.GHOST_PLAYERS.map((p, i) => ({ ...p, id: `ghost_${i}` }));
        const suggested = allGhosts.filter(g => !myFriendIds.includes(g.id)).slice(0, 8);

        const challengeBadge = pending.length
            ? `<span style="background:#ef4444;color:#fff;font-size:0.65rem;font-weight:900;padding:2px 7px;border-radius:99px;margin-left:6px">${pending.length}</span>`
            : '';

        const friendsHTML = friendPlayers.length ? friendPlayers.map(p => `
            <div class="friends-row">
                <span class="fr-avatar">${p.avatar}</span>
                <div class="fr-info">
                    <div class="fr-name">${p.name}</div>
                    <div class="fr-meta">Nv.${p.level} · ⚡${p.xp} · 🔥${p.streak}d</div>
                </div>
                <button class="fr-challenge-btn" onclick="Router._sendChallenge('${p.id}')">
                    ${_ic('sword',{size:'xs',color:'rpg'})} Desafiar
                </button>
                <button class="fr-remove-btn" onclick="Router._removeFriend('${p.id}')" title="Remover amigo">×</button>
            </div>`).join('') : `
            <div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.82rem;font-weight:700">
                Nenhum amigo adicionado ainda. Sugestões abaixo!
            </div>`;

        const pendingHTML = pending.map(ch => `
            <div class="challenge-row challenge-pending">
                <span class="fr-avatar">${ch.ghostAvatar}</span>
                <div class="fr-info">
                    <div class="fr-name">${ch.ghostName} te desafiou!</div>
                    <div class="fr-meta">Tópico: ${ch.topic}</div>
                </div>
                <button class="fr-accept-btn" onclick="Router._acceptChallenge('${ch.id}')">
                    ${_ic('check',{size:'xs'})} Aceitar
                </button>
            </div>`).join('');

        const resolvedHTML = resolved.map(ch => `
            <div class="challenge-row ${ch.status === 'won' ? 'challenge-won' : 'challenge-lost'}">
                <span class="fr-avatar">${ch.ghostAvatar}</span>
                <div class="fr-info">
                    <div class="fr-name">${ch.ghostName}</div>
                    <div class="fr-meta">${ch.topic} · ${ch.status === 'won' ? `Você venceu! +${ch.xpGain} XP` : `Você perdeu. +${ch.xpGain} XP`}</div>
                </div>
                <span class="challenge-result-badge ${ch.status}">${ch.status === 'won' ? 'VITÓRIA' : 'DERROTA'}</span>
            </div>`).join('');

        const suggestedHTML = suggested.map(p => `
            <div class="friends-row">
                <span class="fr-avatar">${p.avatar}</span>
                <div class="fr-info">
                    <div class="fr-name">${p.name}</div>
                    <div class="fr-meta">Nv.${p.level} · ⚡${p.xp} · 🔥${p.streak}d · ${p.guild}</div>
                </div>
                <button class="fr-add-btn" onclick="Router._addFriend('${p.id}')">
                    ${_ic('friends',{size:'xs'})} Adicionar
                </button>
            </div>`).join('');

        container.innerHTML = `
        <div class="screen" style="padding-top:var(--sp-4)">
            <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>

            <div class="friends-header">
                <span class="friends-header-icon">${_ic('friends',{size:'md',color:'science'})}</span>
                <div>
                    <div class="friends-header-title">Amigos${challengeBadge}</div>
                    <div class="friends-header-sub">${friendPlayers.length} amigo${friendPlayers.length !== 1 ? 's' : ''} · ${pending.length} desafio${pending.length !== 1 ? 's' : ''} pendente${pending.length !== 1 ? 's' : ''}</div>
                </div>
            </div>

            ${pending.length ? `
            <div class="friends-section">
                <div class="friends-section-title">${_ic('sword',{size:'xs',color:'rpg'})} Desafios Pendentes</div>
                <div class="friends-list">${pendingHTML}</div>
            </div>` : ''}

            <div class="friends-section">
                <div class="friends-section-title">${_ic('friends',{size:'xs',color:'science'})} Meus Amigos</div>
                <div class="friends-list">${friendsHTML}</div>
            </div>

            ${resolved.length ? `
            <div class="friends-section">
                <div class="friends-section-title">${_ic('scroll',{size:'xs',color:'xp'})} Histórico de Desafios</div>
                <div class="friends-list">${resolvedHTML}</div>
            </div>` : ''}

            <div class="friends-section">
                <div class="friends-section-title">${_ic('compass',{size:'xs',color:'final'})} Sugestões de Amigos</div>
                <div class="friends-list">${suggestedHTML}</div>
            </div>
        </div>`;
    },

    _addFriend(ghostId) {
        if (typeof SocialEngine === 'undefined') return;
        SocialEngine.addFriend(ghostId);
        const idx    = parseInt(ghostId.replace('ghost_', ''), 10);
        const ghost  = SocialEngine.GHOST_PLAYERS[idx];
        if (typeof HUD !== 'undefined') HUD._toast(`${ghost?.name || 'Jogador'} adicionado aos amigos!`);
        this.renderFriends(document.getElementById('app-container'));
    },

    _removeFriend(ghostId) {
        if (typeof SocialEngine === 'undefined') return;
        SocialEngine.removeFriend(ghostId);
        this.renderFriends(document.getElementById('app-container'));
    },

    _sendChallenge(ghostId) {
        if (typeof SocialEngine === 'undefined') return;
        const ch = SocialEngine.sendChallenge(ghostId);
        if (ch && typeof HUD !== 'undefined') HUD._toast(`Desafio enviado para ${ch.ghostName}!`);
        this.renderFriends(document.getElementById('app-container'));
    },

    _acceptChallenge(challengeId) {
        if (typeof SocialEngine === 'undefined') return;
        const ch = SocialEngine.resolveChallenge(challengeId);
        if (!ch) return;
        if (ch.xpGain && typeof State !== 'undefined') {
            State.addXP(ch.xpGain);
        }
        const msg = ch.status === 'won'
            ? `Você venceu ${ch.ghostName}! +${ch.xpGain} XP`
            : `${ch.ghostName} venceu desta vez. +${ch.xpGain} XP`;
        if (typeof HUD !== 'undefined') HUD._toast(msg);
        this.renderFriends(document.getElementById('app-container'));
    },

    // ── ACHIEVEMENTS ──────────────────────────────────────
    renderAchievements(container) {
        const _ic      = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : id;
        const unlocked  = State.data.user.unlockedAchievements || [];
        const allAchs   = window.ACHIEVEMENTS || [];
        const rarities  = ['common', 'rare', 'epic', 'legendary'];
        const rLabels   = {
            common:    `${_ic('achievement',{size:'xs'})} Comum`,
            rare:      `${_ic('star',{size:'xs',color:'science'})} Raro`,
            epic:      `${_ic('portal',{size:'xs',color:'rpg'})} Épico`,
            legendary: `${_ic('crown',{size:'xs',color:'final'})} Lendário`,
        };
        const rarityColor = { common: '', rare: 'science', epic: 'rpg', legendary: 'final' };

        let sectionsHTML = '';
        for (const rarity of rarities) {
            const group    = allAchs.filter(a => a.rarity === rarity);
            const doneCount = group.filter(a => unlocked.includes(a.id)).length;

            const itemsHTML = group.map(ach => {
                const done = unlocked.includes(ach.id);
                return `
                <div class="ach-item ${done ? '' : 'ach-locked'}" title="${done ? ach.desc : '???'}">
                    <div class="ach-badge ach-${rarity}${done ? '' : ' ach-badge-locked'}">
                        <span class="ach-icon">${done ? _ic(ach.icon,{size:'lg',color:rarityColor[rarity]}) : _ic('lock',{size:'sm',color:'locked'})}</span>
                    </div>
                    <div class="ach-name">${done ? ach.name : '???'}</div>
                    ${done ? `<div class="ach-desc">${ach.desc}</div>` : ''}
                </div>`;
            }).join('');

            sectionsHTML += `
            <div class="ach-rarity-section">
                <div class="ach-rarity-header">
                    <span class="ach-rarity-label">${rLabels[rarity]}</span>
                    <span class="ach-rarity-count">${doneCount}/${group.length}</span>
                </div>
                <div class="ach-grid">${itemsHTML}</div>
            </div>`;
        }

        const pct = allAchs.length ? Math.round((unlocked.length / allAchs.length) * 100) : 0;

        container.innerHTML = `
        <div class="screen screen-ach">
            <button class="btn-back" onclick="Router.navigate('#profile')">‹ Perfil</button>

            <div class="ach-header">
                <div class="ach-header-title">${_ic('achievement',{size:'sm'})} Conquistas</div>
                <div class="ach-header-count">${unlocked.length} / ${allAchs.length} desbloqueadas</div>
                <div class="ach-progress-wrap">
                    <div class="ach-progress-fill" style="width:${pct}%"></div>
                </div>
            </div>

            ${sectionsHTML}
        </div>`;
    },

    // ── SHOP ──────────────────────────────────────────────
    renderShop(container) {
        const gems      = State.getUserGems();
        const inventory = State.getInventory();
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const items = [
            { iconId: 'heart',       color: 'heart',   name: 'Vida Extra',        desc: 'Recupere uma vida',               price: 20,  action: 'heart'        },
            { iconId: 'booster',     color: 'xp',      name: 'Mais Tempo',        desc: '+10s em cada questão',            price: 30,  action: 'time'         },
            { iconId: 'lock',        color: 'science',  name: 'Dica Mágica',       desc: 'Dica extra na próxima fase',      price: 40,  action: 'hint'         },
            { iconId: 'shield',      color: 'rpg',     name: 'Escudo',            desc: 'Protege 1 vida por fase',         price: 50,  action: 'shield'       },
            { iconId: 'xp',          color: 'xp',      name: 'XP Duplo',          desc: 'Dobra XP na próxima fase',        price: 80,  action: 'xp2x'        },
            { iconId: 'star',        color: 'final',   name: 'Estrela Grátis',    desc: 'Garante 1 estrela mínima',        price: 100, action: 'star'         },
            { iconId: 'premium',     color: 'science', name: 'Freeze de Streak',  desc: 'Protege sua sequência por 1 dia', price: 25,  action: 'streakFreeze' },
        ];

        const itemsHTML = items.map(item => {
            const owned = inventory[item.action] || 0;
            return `
            <div class="shop-item-card${owned > 0 ? ' si-owned' : ''}">
                <span class="shop-item-icon">${_ic(item.iconId,{size:'xl',color:item.color})}</span>
                <div class="shop-item-name">${item.name}</div>
                <div class="shop-item-desc">${item.desc}</div>
                ${owned > 0 ? `<div class="shop-item-owned">Você tem: ${owned}</div>` : ''}
                <button class="shop-buy-btn" onclick="Router._shopBuy('${item.action}', ${item.price})">
                    ${_ic('gem',{size:'xs',color:'gem'})} ${item.price}
                </button>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="shop-balance">
                <div class="shop-balance-label">Suas Gemas</div>
                <div class="shop-balance-gems">${_ic('gem',{size:'md',color:'gem'})} ${gems}</div>
            </div>

            <div class="section-header">
                <span class="section-title">${_ic('shop',{size:'sm'})} Itens Disponíveis</span>
            </div>
            <div class="shop-grid">
                ${itemsHTML}
            </div>

            <div class="section-header mt-4">
                <span class="section-title">${_ic('gem',{size:'sm',color:'gem'})} Comprar Gemas</span>
            </div>
            <div class="xp-level-card">
                <p style="font-size:0.82rem;color:var(--text-muted);font-weight:600;text-align:center">
                    Loja de gemas em breve! Continue jogando para ganhar gemas gratuitamente.
                </p>
            </div>
        </div>`;
    },

    _shopBuy(action, price) {
        const have = State.getUserGems();
        if (have < price) {
            if (typeof ModalEngine !== 'undefined') {
                ModalEngine.enqueue('noGems', { needed: price, have });
            }
            return;
        }
        State.addGems(-price);
        State.addItem(action);
        this._toast('Item comprado! Disponível na próxima missão.');
        this.renderShop(document.getElementById('app-container'));
    },

    _toast(msg, ms = 2800) {
        const t = document.createElement('div');
        t.className = 'app-toast';
        t.textContent = msg;
        document.body.appendChild(t);
        requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
        setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 350); }, ms);
    },

    // ── MISSIONS ──────────────────────────────────────────
    renderMissions(container) {
        const chapters = CONFIG.chapters || [];
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const chaptersHTML = chapters.map(ch => {
            const prog      = State.getChapterProgress(ch.id);
            const percent   = prog.percent;
            const completed = percent >= 100;
            return `
            <div class="chapter-card${completed ? ' ch-completed' : ''}" onclick="Router.navigate('#chapter/${ch.id}')">
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
                <div class="chapter-arrow">${completed ? _ic('check',{size:'sm',color:'success'}) : '›'}</div>
            </div>`;
        }).join('');

        const comingSoonHTML = ['Matemática 7º Ano', 'Português 7º Ano', 'História 7º Ano'].map(name => `
            <div class="chapter-card locked">
                <div class="chapter-icon-wrap" style="background:var(--surface-3)">${_ic('scroll',{size:'md',color:'locked'})}</div>
                <div class="chapter-body">
                    <div class="chapter-subject" style="color:var(--text-muted)">Em Breve</div>
                    <div class="chapter-title">${name}</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;margin-top:4px">Aguarde novos conteúdos!</div>
                </div>
                <div class="chapter-arrow">${_ic('lock',{size:'sm',color:'locked'})}</div>
            </div>`
        ).join('');

        container.innerHTML = `
        <div class="screen">
            <div class="missions-banner">
                <h2>${_ic('sword',{size:'sm'})} Todas as Missões</h2>
                <p>Escolha sua próxima batalha, herói!</p>
            </div>

            <div class="section-header">
                <span class="section-title">${_ic('map',{size:'sm'})} Disponíveis</span>
            </div>
            ${chaptersHTML}

            <div class="section-header mt-4">
                <span class="section-title">${_ic('lock',{size:'sm',color:'locked'})} Em Breve</span>
            </div>
            ${comingSoonHTML}
        </div>`;
    },

    // ── WORD SEARCH ───────────────────────────────────────
    renderWordSearch(container, chapterId, stageIndex) {
        if (typeof WordSearch !== 'undefined') {
            WordSearch.start(chapterId, parseInt(stageIndex) || 1, container);
        } else {
            container.innerHTML = `<div class="screen"><p style="padding:40px;text-align:center;color:var(--text-muted)">Caça-palavras não disponível.</p></div>`;
        }
    },

    // ── EVENTS ────────────────────────────────────────────────
    renderEvents(container) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        if (typeof EventsEngine === 'undefined') {
            container.innerHTML = `<div class="screen"><p style="padding:40px;text-align:center;color:var(--text-muted)">Eventos não disponíveis.</p></div>`;
            return;
        }
        const event    = EventsEngine.getCurrentEvent();
        const secs     = EventsEngine.getEventTimeRemaining();
        const timeLeft = EventsEngine.formatTimeRemaining(secs);

        const missionsHTML = event.missions.map(m => {
            const progress  = EventsEngine.getEventMissionProgress(m.id);
            const claimed   = EventsEngine.isEventMissionClaimed(m.id);
            const claimable = !claimed && progress >= m.goal;
            const pct       = Math.min(100, Math.round((progress / m.goal) * 100));
            return `
            <div class="event-mission-card${claimed ? ' done' : claimable ? ' claimable' : ''}">
                <div class="event-mission-icon">${_ic(m.type === 'streak' ? 'streak' : m.type === 'combo' ? 'crown' : m.type === 'gems' ? 'gem' : 'star', {size:'sm', color: claimed ? 'locked' : 'xp'})}</div>
                <div class="event-mission-body">
                    <div class="event-mission-desc">${m.desc}</div>
                    <div class="event-mission-progress"><div class="event-mission-pf" style="width:${pct}%"></div></div>
                    <div class="event-mission-meta">
                        <span>${progress}/${m.goal}</span>
                        <span>${_ic('xp',{size:'xs',color:'xp'})} +${m.xp} XP</span>
                        <span>${_ic('gem',{size:'xs',color:'gem'})} +${m.gems}</span>
                    </div>
                </div>
                ${claimed
                    ? `<div class="event-mission-done-badge">${_ic('check',{size:'xs',color:'success'})} Resgatado</div>`
                    : `<button class="event-mission-btn" ${claimable ? '' : 'disabled'} onclick="Router._claimEventMission('${m.id}')">${claimable ? 'Resgatar' : 'Pendente'}</button>`
                }
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="events-screen">
            <div class="event-hero">
                <div class="event-hero-badge">${_ic(event.icon, {size:'xs'})} Evento Ativo</div>
                <div class="event-hero-title">${event.name}</div>
                <div class="event-hero-desc">${event.desc}</div>
                <div class="event-timer">${_ic('streak',{size:'xs'})} Termina em ${timeLeft}</div>
                ${event.bonusXPMult > 1 ? `<div class="event-bonus-tag">${_ic('xp',{size:'xs'})} XP x${event.bonusXPMult} ativo neste evento!</div>` : ''}
            </div>

            <div class="event-missions-title">${_ic('scroll',{size:'sm',color:'science'})} Missoes do Evento</div>
            ${missionsHTML}

            <div style="margin-top:20px;padding:16px;background:var(--surface);border:1.5px solid var(--border);border-radius:16px;text-align:center;">
                <div style="font-size:.85rem;color:var(--text-muted);margin-bottom:10px">Passe de Batalha da Temporada</div>
                <a href="#battle-pass" class="btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:12px;text-decoration:none;font-weight:800;font-size:.9rem;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff">
                    ${_ic('crown',{size:'sm',color:'final'})} Ver Battle Pass
                </a>
            </div>
        </div>`;
    },

    _claimEventMission(id) {
        if (typeof EventsEngine === 'undefined') return;
        const result = EventsEngine.claimEventMission(id);
        if (result && typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('reward', {
                title: 'Missao Concluida!',
                desc:  result.desc,
                xp:    result.xp,
                gems:  result.gems,
            });
        }
        this.renderEvents(document.getElementById('app-container'));
    },

    // ── BATTLE PASS ───────────────────────────────────────────
    renderBattlePass(container) {
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        if (typeof EventsEngine === 'undefined') {
            container.innerHTML = `<div class="screen"><p style="padding:40px;text-align:center;color:var(--text-muted)">Battle Pass nao disponivel.</p></div>`;
            return;
        }
        const prog     = EventsEngine.getBattlePassProgress();
        const isPrem   = typeof State !== 'undefined' && State.data.user.isPremium;
        const season   = typeof State !== 'undefined' ? (State.data.user.battlePassSeason || 1) : 1;
        const totalXP  = typeof State !== 'undefined' ? (State.data.user.battlePassXP || 0) : 0;

        const rewardLabel = r => {
            if (r.type === 'xp')   return `+${r.amount} XP`;
            if (r.type === 'gems') return `+${r.amount} Gemas`;
            if (r.type === 'item') return `${EventsEngine.ITEM_LABELS[r.id] || r.id} x${r.qty}`;
            return '';
        };
        const rewardIcon = r => {
            if (r.type === 'xp')   return _ic('xp',    {size:'sm', color:'xp'});
            if (r.type === 'gems') return _ic('gem',   {size:'sm', color:'gem'});
            if (r.type === 'item') return _ic(EventsEngine.ITEM_ICONS[r.id] || 'star', {size:'sm', color:'rpg'});
            return '';
        };

        const tiersHTML = Array.from({length: EventsEngine.TIERS_COUNT}, (_, i) => {
            const tier      = i + 1;
            const unlocked  = prog.tier >= tier;
            const isCur     = prog.tier + 1 === tier;
            const rewardDef = EventsEngine.BATTLE_PASS_REWARDS.find(r => r.tier === tier);
            if (!rewardDef) return '';

            const freeClm  = EventsEngine.isRewardClaimed(tier, 'free');
            const premClm  = EventsEngine.isRewardClaimed(tier, 'premium');
            const freeCan  = unlocked && !freeClm;
            const premCan  = unlocked && isPrem && !premClm;

            return `
            <div class="bp-tier-row${unlocked ? ' unlocked' : ''}${isCur ? ' current' : ''}">
                <div class="bp-tier-num">${tier}</div>
                <div class="bp-reward-cell${freeCan ? ' claimable' : freeClm ? ' claimed' : !unlocked ? ' locked' : ''}"
                     onclick="Router._claimBPReward(${tier},'free')">
                    ${rewardIcon(rewardDef.free)}
                    <span class="bp-reward-text">${rewardLabel(rewardDef.free)}</span>
                    ${freeClm ? `<span class="bp-reward-check">${_ic('check',{size:'xs',color:'success'})}</span>` : ''}
                </div>
                <div class="bp-reward-cell premium${premCan ? ' claimable' : premClm ? ' claimed' : !unlocked || !isPrem ? ' locked' : ''}"
                     onclick="Router._claimBPReward(${tier},'premium')">
                    ${rewardIcon(rewardDef.premium)}
                    <span class="bp-reward-text">${rewardLabel(rewardDef.premium)}</span>
                    ${premClm
                        ? `<span class="bp-reward-check">${_ic('check',{size:'xs',color:'success'})}</span>`
                        : !isPrem
                            ? `<span class="bp-premium-lock">${_ic('crown',{size:'xs'})} PREMIUM</span>`
                            : ''
                    }
                </div>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div class="bp-screen">
            <div class="s5-screen-header">
                <div style="font-size:1.2rem;font-weight:900;color:var(--text-main)">${_ic('crown',{size:'sm',color:'final'})} Battle Pass</div>
                <div class="bp-season-badge">${_ic('star',{size:'xs'})} Temporada ${season}</div>
            </div>

            <div class="bp-progress-card">
                <div class="bp-progress-label">
                    <span class="bp-tier-label">Tier ${prog.tier} / ${EventsEngine.TIERS_COUNT}</span>
                    <span class="bp-xp-label">${totalXP.toLocaleString('pt-BR')} XP total</span>
                </div>
                <div class="bp-progress-bar"><div class="bp-progress-fill" style="width:${prog.pct}%"></div></div>
                <div class="bp-progress-sub">${prog.xpInTier} / ${EventsEngine.XP_PER_TIER} XP para proximo tier</div>
            </div>

            ${!isPrem ? `
            <div style="background:linear-gradient(135deg,#7c3aed22,#a855f722);border:1.5px solid #a855f7;border-radius:16px;padding:16px;text-align:center;margin-bottom:20px;">
                <div style="font-size:.95rem;font-weight:800;color:var(--text-main);margin-bottom:6px">${_ic('crown',{size:'sm',color:'final'})} Desbloqueie o Premium Pass</div>
                <div style="font-size:.82rem;color:var(--text-muted);margin-bottom:12px">Acesse recompensas exclusivas, XP extra e itens raros em cada tier.</div>
                <button class="btn-primary" style="background:linear-gradient(135deg,#7c3aed,#a855f7);border:none;padding:10px 24px;border-radius:12px;font-weight:800;color:#fff;cursor:pointer;font-size:.88rem" onclick="Router._showPremiumModal()">
                    ${_ic('crown',{size:'xs'})} Assinar Premium
                </button>
            </div>` : ''}

            <div class="bp-track-header">
                <span></span>
                <span class="th-free">Gratis</span>
                <span class="th-prem">${_ic('crown',{size:'xs'})} Premium</span>
            </div>
            ${tiersHTML}
        </div>`;
    },

    _claimBPReward(tier, track) {
        if (typeof EventsEngine === 'undefined') return;
        const r = EventsEngine.claimReward(tier, track);
        if (!r) return;
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('reward', {
                title: `Tier ${tier} Resgatado!`,
                desc:  EventsEngine.BATTLE_PASS_REWARDS.find(x => x.tier === tier)
                    ? (track === 'free' ? 'Recompensa gratis' : 'Recompensa premium') : '',
                xp:    r.type === 'xp'   ? r.amount : 0,
                gems:  r.type === 'gems' ? r.amount : 0,
            });
        }
        this.renderBattlePass(document.getElementById('app-container'));
    },

    // ── AI STUDIO ────────────────────────────────────────────
    renderAIStudio(container) {
        const _ic     = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const sets    = typeof AIStudio !== 'undefined' ? AIStudio.getStudySets() : [];
        const isAdmin = typeof State !== 'undefined' && State.isAdmin();
        const isPrem  = typeof State !== 'undefined' && State.isPremiumOrAdmin();
        const maxQ    = typeof AIStudio !== 'undefined' ? AIStudio.maxQuestions : 7;

        const setsHTML = sets.length
            ? sets.map(s => `
            <div class="ai-set-card">
                <div class="ai-set-icon">${_ic('scroll',{size:'sm',color:'science'})}</div>
                <div class="ai-set-body" onclick="Router._playAISet('${s.id}')" style="cursor:pointer">
                    <div class="ai-set-name">${s.name}</div>
                    <div class="ai-set-meta">${s.questions.length} questões · ${new Date(s.createdAt).toLocaleDateString('pt-BR')}</div>
                </div>
                <div class="ai-set-actions">
                    <button class="ai-set-action-btn" title="Flashcards" onclick="event.stopPropagation();Router._aiSetFlashcards('${s.id}')">🃏</button>
                    <button class="ai-set-action-btn ai-set-play-btn" title="Jogar" onclick="event.stopPropagation();Router._playAISet('${s.id}')">▶</button>
                    ${isAdmin ? `<button class="ai-set-action-btn" title="Salvar como Fase no Builder" onclick="event.stopPropagation();Router._aiSetToBuilder('${s.id}')">📦</button>` : ''}
                    <button class="ai-set-delete" onclick="event.stopPropagation();Router._deleteAISet('${s.id}')" title="Excluir">✕</button>
                </div>
            </div>`).join('')
            : `<div class="ai-no-sets">${_ic('scroll',{size:'lg',color:'locked'})}<br>Nenhum estudo criado ainda.<br>Cole um texto acima e clique em Analisar!</div>`;

        container.innerHTML = `
        <div class="ai-studio-screen">
            ${isAdmin ? `
            <div class="ai-admin-banner">
                ${_ic('crown',{size:'xs',color:'final'})} <strong>Admin Mode</strong> — limite ${maxQ} questões · conteúdo exportável para plataforma
                <a href="#builder" style="margin-left:auto;font-size:.78rem;color:var(--brand);font-weight:900">Abrir Builder →</a>
            </div>` : ''}

            <div class="ai-studio-hero">
                <div class="ai-studio-hero-badge">${_ic('ai-tutor',{size:'xs'})} IA Generativa</div>
                <div class="ai-studio-hero-title">AI Studio</div>
                <div class="ai-studio-hero-desc">Cole texto ou envie um PDF e gero questões automaticamente para praticar em qualquer módulo.</div>
            </div>

            <div class="ai-input-card">
                <div class="ai-input-tabs" id="ai-input-tabs">
                    <button class="ai-input-tab active" id="ai-tab-text" onclick="Router._switchAITab('text')">
                        ${_ic('scroll',{size:'xs',color:'science'})} Colar Texto
                    </button>
                    <button class="ai-input-tab${isPrem ? '' : ' ai-tab-locked'}" id="ai-tab-pdf" onclick="Router._switchAITab('pdf')" ${isPrem?'':'title="Recurso Premium"'}>
                        📄 PDF ${isPrem ? '' : '👑'}
                    </button>
                </div>

                <!-- TEXT INPUT -->
                <div id="ai-pane-text">
                    <textarea class="ai-textarea" id="ai-text-input"
                        placeholder="Cole aqui seu material: apostila, livro, artigo, resumo..."
                        maxlength="8000"
                        oninput="document.getElementById('ai-char-count').textContent=this.value.length+'/8000'"></textarea>
                    <div class="ai-char-count" id="ai-char-count">0/8000</div>
                </div>

                <!-- PDF INPUT -->
                <div id="ai-pane-pdf" style="display:none">
                    ${isPrem ? `
                    <div class="ai-pdf-drop" id="ai-pdf-drop"
                        onclick="document.getElementById('ai-pdf-input').click()"
                        ondragover="event.preventDefault();this.classList.add('drag-over')"
                        ondragleave="this.classList.remove('drag-over')"
                        ondrop="event.preventDefault();this.classList.remove('drag-over');Router._handlePDFDrop(event)">
                        <div class="ai-pdf-drop-icon">📄</div>
                        <p>Clique ou arraste um PDF aqui</p>
                        <span>Máximo 30 páginas · OCR automático</span>
                        <input type="file" id="ai-pdf-input" accept=".pdf" style="display:none"
                            onchange="Router._handlePDFFile(this)">
                    </div>
                    <div class="ai-pdf-status" id="ai-pdf-status" style="display:none"></div>
                    ` : `
                    <div class="ai-pdf-gate">
                        ${_ic('crown',{size:'lg',color:'final'})}
                        <p>Upload de PDF disponível para usuários <strong>Premium</strong>.</p>
                        <button class="btn-primary" onclick="Router.navigate('#shop')">Upgrade Premium</button>
                    </div>`}
                </div>

                <div class="ai-analyze-row">
                    <button class="ai-analyze-btn" id="ai-analyze-btn" onclick="Router._analyzeAIText()">
                        ${_ic('ai-tutor',{size:'sm'})} Analisar com IA
                        <span class="ai-limit-chip">até ${maxQ} questões</span>
                    </button>
                </div>
            </div>

            <div id="ai-results-area"></div>

            <div class="ai-saved-section">
                <div class="ai-saved-title">
                    ${_ic('backpack',{size:'xs',color:'science'})} Meus Estudos Salvos
                    <span class="ai-saved-count">${sets.length}</span>
                </div>
                ${setsHTML}
            </div>
        </div>`;
    },

    _switchAITab(tab) {
        const isPrem = typeof State !== 'undefined' && State.isPremiumOrAdmin();
        if (tab === 'pdf' && !isPrem) { Router.navigate('#shop'); return; }
        document.querySelectorAll('.ai-input-tab').forEach(t => t.classList.remove('active'));
        document.getElementById(`ai-tab-${tab}`)?.classList.add('active');
        document.getElementById('ai-pane-text').style.display = tab === 'text' ? '' : 'none';
        document.getElementById('ai-pane-pdf').style.display  = tab === 'pdf'  ? '' : 'none';
    },

    async _handlePDFFile(input) {
        const file = input.files?.[0];
        if (!file) return;
        await this._processPDF(file);
        input.value = '';
    },

    async _handlePDFDrop(event) {
        const file = Array.from(event.dataTransfer.files).find(f => f.type === 'application/pdf');
        if (!file) return;
        await this._processPDF(file);
    },

    async _processPDF(file) {
        const status = document.getElementById('ai-pdf-status');
        const drop   = document.getElementById('ai-pdf-drop');
        const btn    = document.getElementById('ai-analyze-btn');
        if (status) { status.style.display = ''; status.innerHTML = `<span class="ai-pdf-progress">📄 Extraindo texto de "${file.name}"...</span>`; }
        if (drop) drop.style.display = 'none';
        if (btn) btn.disabled = true;

        try {
            const text = await AIStudio.extractFromPDF(file);
            window._aiCurrentPDFText = text;
            if (status) status.innerHTML = `
                <div class="ai-pdf-done">
                    <div class="ai-pdf-done-info">
                        <div class="ai-pdf-done-name">✅ ${file.name}</div>
                        <div class="ai-pdf-done-meta">${text.split(/\s+/).length.toLocaleString()} palavras extraídas</div>
                    </div>
                    <button class="ai-pdf-clear" onclick="Router._clearPDF()">✕ Remover</button>
                </div>`;
        } catch (err) {
            if (status) status.innerHTML = `<span style="color:var(--error)">❌ Erro ao ler PDF: ${err.message}</span>`;
            if (drop) drop.style.display = '';
        } finally {
            if (btn) btn.disabled = false;
        }
    },

    _clearPDF() {
        window._aiCurrentPDFText = null;
        const drop   = document.getElementById('ai-pdf-drop');
        const status = document.getElementById('ai-pdf-status');
        if (drop) drop.style.display = '';
        if (status) status.style.display = 'none';
    },

    _analyzeAIText() {
        const _ic    = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const btn    = document.getElementById('ai-analyze-btn');
        const area   = document.getElementById('ai-results-area');
        if (!area || typeof AIStudio === 'undefined') return;

        // Determine text source (PDF or textarea)
        const isPDFTab = document.getElementById('ai-pane-pdf')?.style.display !== 'none';
        const text     = isPDFTab ? (window._aiCurrentPDFText || '') : (document.getElementById('ai-text-input')?.value.trim() || '');

        if (text.length < 100) {
            if (typeof ModalEngine !== 'undefined') ModalEngine.interrupt('simpleAlert',{icon:'⚠️',title:'Texto muito curto',message:'São necessários pelo menos 100 caracteres para gerar questões.'});
            return;
        }

        if (btn) btn.disabled = true;
        const steps = ['Lendo o texto...','Identificando conceitos-chave...','Gerando questões...','Validando alternativas...'];
        let si = 0;
        area.innerHTML = `
        <div class="ai-processing">
            <div class="ai-processing-dots">
                <div class="ai-processing-dot"></div><div class="ai-processing-dot"></div><div class="ai-processing-dot"></div>
            </div>
            <div class="ai-processing-text">Analisando com IA...</div>
            <div class="ai-processing-steps" id="ai-step-text">${steps[0]}</div>
        </div>`;

        const stepT = setInterval(() => { si=(si+1)%steps.length; const el=document.getElementById('ai-step-text'); if(el) el.textContent=steps[si]; }, 500);

        AIStudio.analyze(text, questions => {
            clearInterval(stepT);
            if (btn) btn.disabled = false;
            if (!questions.length) {
                area.innerHTML = `<div class="ai-processing"><div class="ai-processing-text" style="color:var(--error)">Não consegui gerar questões com este texto.<br>Tente um texto mais longo com definições claras.</div></div>`;
                return;
            }
            window._aiCurrentQuestions = questions;
            window._aiCurrentText      = text;
            const letters = ['A','B','C','D'];
            const qHTML   = questions.map((q,qi) => `
            <div class="ai-question-item">
                <div class="ai-question-text">${qi+1}. ${q.text}</div>
                <div class="ai-question-opts">
                    ${q.options.map((opt,oi) => `
                    <div class="ai-question-opt${oi===q.correctIndex?' correct':''}">
                        <span class="ai-opt-letter">${letters[oi]||oi+1}</span>${opt}
                    </div>`).join('')}
                </div>
            </div>`).join('');
            area.innerHTML = `
            <div class="ai-results-card">
                <div class="ai-results-header">
                    <div class="ai-results-title">${_ic('star',{size:'sm',color:'xp'})} Questões Geradas <span class="ai-questions-count">${questions.length}</span></div>
                </div>
                ${qHTML}
                <div class="ai-save-row">
                    <input class="ai-name-input" id="ai-set-name" type="text" placeholder="Nome do estudo..." maxlength="60">
                    <button class="ai-save-btn" onclick="Router._saveAISet()">Salvar</button>
                </div>
            </div>`;
        });
    },

    _saveAISet() {
        if (typeof AIStudio === 'undefined') return;
        const name      = document.getElementById('ai-set-name')?.value.trim() || '';
        const questions = window._aiCurrentQuestions || [];
        const text      = window._aiCurrentText      || '';
        if (!questions.length) return;
        AIStudio.saveStudySet(name || 'Estudo Personalizado', text, questions);
        if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('reward',{title:'Estudo Salvo!',desc:`"${name||'Estudo Personalizado'}" adicionado.`,xp:0,gems:0});
        this.renderAIStudio(document.getElementById('app-container'));
    },

    _deleteAISet(id) {
        if (typeof AIStudio === 'undefined') return;
        AIStudio.deleteStudySet(id);
        this.renderAIStudio(document.getElementById('app-container'));
    },

    _aiSetFlashcards(id) {
        const sets = typeof AIStudio !== 'undefined' ? AIStudio.getStudySets() : [];
        const idx  = sets.findIndex(s => s.id === id);
        if (idx < 0) return;
        if (typeof FlashcardEngine !== 'undefined') FlashcardEngine.start({ cards: FlashcardEngine.buildCardsFromStudySet(idx), source:'ai-studio', title: sets[idx].name });
    },

    _aiSetToBuilder(id) {
        const sets  = typeof AIStudio !== 'undefined' ? AIStudio.getStudySets() : [];
        const set   = sets.find(s => s.id === id);
        if (!set || typeof State === 'undefined' || !State.isAdmin()) return;
        const stage = typeof AIStudio !== 'undefined' ? AIStudio.setToStage(set) : null;
        if (!stage) return;

        // Ensure a default admin chapter exists
        const adminChId = 'ch_admin_default';
        const existing  = State.getCustomContent().chapters.find(c => c.id === adminChId);
        if (!existing) State.addCustomChapter({ id: adminChId, icon:'🤖', title:'AI Studio — Conteúdo Gerado', subject:'IA', grade:'' });
        stage.chapterId = adminChId;
        State.addCustomStage(stage);
        if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('reward',{title:'Fase criada no Builder!',desc:`"${set.name}" disponível em Builder → Disciplinas.`,xp:0,gems:0});
    },

    _playAISet(id) {
        const sets = typeof AIStudio !== 'undefined' ? AIStudio.getStudySets() : [];
        const set  = sets.find(s => s.id === id);
        if (!set || !set.questions.length) return;
        window._aiPlaySet    = set;
        window._aiPlayIdx    = 0;
        window._aiPlayScore  = 0;
        window._aiPlayHearts = typeof State !== 'undefined' ? (State.data.user.hearts ?? 5) : 5;
        window._aiPlayCombo  = 0;
        this._renderEnhancedPlay(document.getElementById('app-container'));
    },

    // ── ENHANCED MCQ PLAY (hearts · XP · combo) ────────────────────
    _renderEnhancedPlay(container, titleOverride) {
        const _ic  = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const set  = window._aiPlaySet;
        const idx  = window._aiPlayIdx || 0;

        if (!set || idx >= set.questions.length) {
            const total  = set ? set.questions.length : 0;
            const score  = window._aiPlayScore || 0;
            const xp     = 20 + score * 12;
            const pct    = total > 0 ? Math.round((score/total)*100) : 100;
            if (typeof State !== 'undefined') State.addXP(xp);
            if (typeof EventsEngine !== 'undefined') { EventsEngine.onXPGained(xp); EventsEngine.trackMissionComplete(); }
            container.innerHTML = `
            <div class="ai-studio-screen" style="text-align:center;padding:40px 20px">
                <div style="margin-bottom:16px">${_ic('trophy',{size:'4xl',color:'final'})}</div>
                <div style="font-size:1.4rem;font-weight:900;margin-bottom:6px">Estudo Concluído!</div>
                <div style="font-size:2rem;font-weight:900;color:var(--brand);margin-bottom:4px">${pct}%</div>
                <div style="color:var(--text-muted);margin-bottom:4px">${score}/${total} corretas</div>
                <div style="color:var(--brand);font-weight:900;margin-bottom:20px">+${xp} XP</div>
                <button class="btn-primary" onclick="Router.navigate('#ai-studio')">
                    ${_ic('scroll',{size:'sm'})} Voltar ao AI Studio
                </button>
            </div>`;
            return;
        }

        const q       = set.questions[idx];
        const hearts  = window._aiPlayHearts ?? 5;
        const combo   = window._aiPlayCombo  || 0;
        const letters = ['A','B','C','D'];
        const title   = titleOverride || set.name;

        const heartsHTML = Array.from({length:5},(_,i) =>
            `<span style="font-size:1rem;opacity:${i<hearts?1:.25}">❤️</span>`
        ).join('');

        container.innerHTML = `
        <div class="ai-studio-screen">
            <div class="aip-topbar">
                <button class="aip-exit-btn" onclick="Router.navigate('#ai-studio')">✕</button>
                <div class="aip-prog-wrap">
                    <div class="aip-prog-track"><div class="aip-prog-fill" style="width:${Math.round((idx/set.questions.length)*100)}%"></div></div>
                    <span class="aip-prog-label">${idx+1}/${set.questions.length}</span>
                </div>
                <div class="aip-hearts">${heartsHTML}</div>
            </div>
            ${combo >= 3 ? `<div class="aip-combo-banner">🔥 ${combo}x Combo!</div>` : ''}
            <div class="aip-question-card">
                <div class="aip-badge">${_ic('ai-tutor',{size:'xs',color:'science'})} ${title}</div>
                <div class="aip-q-text">${q.text}</div>
            </div>
            <div class="aip-options">
                ${q.options.map((opt,oi) => `
                <button class="aip-option" onclick="Router._answerEnhanced(${oi})">
                    <span class="aip-opt-key">${letters[oi]}</span>${opt}
                </button>`).join('')}
            </div>
        </div>`;
    },

    _answerEnhanced(selectedIdx) {
        const set = window._aiPlaySet;
        const idx = window._aiPlayIdx || 0;
        const q   = set.questions[idx];
        const ok  = selectedIdx === q.correctIndex;

        document.querySelectorAll('.aip-option').forEach((btn,i) => {
            btn.disabled = true;
            if (i === q.correctIndex) btn.classList.add('aip-correct');
            else if (i === selectedIdx && !ok) btn.classList.add('aip-wrong');
        });

        if (ok) {
            window._aiPlayScore = (window._aiPlayScore||0) + 1;
            window._aiPlayCombo = (window._aiPlayCombo||0) + 1;
            if (typeof State !== 'undefined') State.addXP(12);
            if (typeof EventsEngine !== 'undefined') EventsEngine.trackCorrectAnswer();
            if (typeof MemoryEngine !== 'undefined' && q._leitnerKey) {
                const card = (State.data.leitnerBoxes||{})[q._leitnerKey];
                if (card) MemoryEngine.processAnswer(card.chapterId,card.stageId,card.qIdx,true,3,card.question,card.answer,card.topic);
            }
        } else {
            window._aiPlayCombo = 0;
            window._aiPlayHearts = Math.max(0, (window._aiPlayHearts??5) - 1);
        }

        setTimeout(() => {
            window._aiPlayIdx = idx + 1;
            if ((window._aiPlayHearts??5) <= 0) {
                const container = document.getElementById('app-container');
                if (container) {
                    container.innerHTML = `
                    <div class="ai-studio-screen" style="text-align:center;padding:40px 20px">
                        <div style="font-size:3rem;margin-bottom:12px">💔</div>
                        <div style="font-size:1.3rem;font-weight:900;margin-bottom:8px">Sem vidas!</div>
                        <div style="color:var(--text-muted);margin-bottom:20px">Compre vidas na loja e continue estudando.</div>
                        <button class="btn-primary" onclick="Router.navigate('#shop')">🛒 Comprar Vidas</button>
                        <button class="btn-secondary" style="margin-top:8px" onclick="Router.navigate('#ai-studio')">Voltar</button>
                    </div>`;
                }
                return;
            }
            this._renderEnhancedPlay(document.getElementById('app-container'));
        }, 800);
    },

    // ── PVP ────────────────────────────────────────────────────
    renderPvP(container) {
        const _ic       = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
        const SE        = typeof SocialEngine !== 'undefined' ? SocialEngine : null;
        const user      = typeof State !== 'undefined' ? State.data.user : {};
        const wins      = user.pvpWins   || 0;
        const losses    = user.pvpLosses || 0;
        const elo       = user.pvpElo    ?? 1000;
        const winRate   = wins + losses > 0 ? Math.round((wins / (wins + losses)) * 100) : 0;

        const challenges    = SE ? SE.getChallenges() : [];
        const pending       = challenges.filter(c => c.status === 'pending');
        const resolved      = challenges.filter(c => c.status !== 'pending').slice(0, 5);
        const friendPlayers = SE ? SE.getFriendPlayers() : [];

        const challengeCard = c => {
            const name    = c.ghostName || c.name || '?';
            const avatar  = c.ghostAvatar || '?';
            const level   = c.ghostLevel || '?';
            const isResolved = c.status !== 'pending';
            const statusBadge = isResolved ? c.status : 'outgoing';
            const sentMs  = c.sentAt ? new Date(c.sentAt).getTime() : Date.now();
            const ago     = Math.floor((Date.now() - sentMs) / 60000);
            const agoTxt  = ago < 60 ? `${ago}m atras` : `${Math.floor(ago/60)}h atras`;
            return `
            <div class="pvp-challenge-card outgoing${isResolved ? ' resolved' : ''}">
                <div class="pvp-challenge-avatar">${avatar}</div>
                <div class="pvp-challenge-body">
                    <div class="pvp-challenge-name">${name}</div>
                    <div class="pvp-challenge-meta">
                        <span class="pvp-challenge-badge ${statusBadge}">${isResolved ? (c.status === 'won' ? 'Vitoria' : 'Derrota') : 'Aguardando'}</span>
                        <span>${agoTxt}</span>
                        <span>Nivel ${level}</span>
                    </div>
                </div>
            </div>`;
        };

        const friendsGrid = friendPlayers.length
            ? `<div class="pvp-friends-grid">
                ${friendPlayers.map(fp => `
                <div class="pvp-friend-card">
                    <div class="pvp-friend-avatar">${fp.avatar}</div>
                    <div class="pvp-friend-name">${fp.name}</div>
                    <div class="pvp-friend-level">Nivel ${fp.level} &middot; ${fp.xp.toLocaleString('pt-BR')} XP</div>
                    <button class="pvp-friend-challenge-btn" onclick="Router._sendPvPChallenge('${fp.name}')">
                        ${_ic('sword',{size:'xs',color:'rpg'})} Desafiar
                    </button>
                </div>`).join('')}
               </div>`
            : `<div class="pvp-empty">Adicione amigos para desafia-los! Va em <a href="#friends" style="color:var(--brand)">Amigos</a> para comecar.</div>`;

        container.innerHTML = `
        <div class="pvp-screen">
            <div class="pvp-hero">
                <div class="pvp-hero-title">${_ic('sword',{size:'md',color:'rpg'})} Batalhas PvP</div>
                <div class="pvp-hero-desc">Desafie amigos em duelos assincronos. Venca e suba no ranking!</div>
                <div class="pvp-stats-row">
                    <div class="pvp-stat">
                        <div class="pvp-stat-val" style="color:#22c55e">${wins}</div>
                        <div class="pvp-stat-lbl">Vitorias</div>
                    </div>
                    <div class="pvp-stat">
                        <div class="pvp-stat-val" style="color:#ef4444">${losses}</div>
                        <div class="pvp-stat-lbl">Derrotas</div>
                    </div>
                    <div class="pvp-stat">
                        <div class="pvp-stat-val">${winRate}%</div>
                        <div class="pvp-stat-lbl">Win Rate</div>
                    </div>
                    <div class="pvp-stat">
                        <div class="pvp-stat-val pvp-stat-elo">${elo}</div>
                        <div class="pvp-stat-lbl">ELO</div>
                    </div>
                </div>
            </div>

            ${pending.length ? `
            <div class="pvp-section-title">${_ic('flag',{size:'sm',color:'science'})} Desafios Enviados (${pending.length})</div>
            ${pending.map(c => challengeCard(c)).join('')}` : ''}

            ${resolved.length ? `
            <div class="pvp-section-title" style="margin-top:${pending.length?16:0}px">${_ic('scroll',{size:'sm',color:'locked'})} Historico</div>
            ${resolved.map(c => challengeCard(c)).join('')}` : ''}

            ${!pending.length && !resolved.length ? `
            <div class="s5-empty-state">
                <div class="s5-empty-icon">${_ic('sword',{size:'xl',color:'locked'})}</div>
                <div class="s5-empty-title">Nenhuma batalha ainda</div>
                <div class="s5-empty-desc">Desafie um amigo abaixo para comecar!</div>
            </div>` : ''}

            <div class="pvp-send-section">
                <div class="pvp-section-title" style="margin-top:8px">${_ic('friends',{size:'sm',color:'science'})} Desafiar um Amigo</div>
                ${friendsGrid}
            </div>
        </div>`;
    },

    _sendPvPChallenge(ghostName) {
        if (typeof SocialEngine === 'undefined') return;
        const idx = SocialEngine.GHOST_PLAYERS.findIndex(g => g.name === ghostName);
        if (idx === -1) return;
        SocialEngine.sendChallenge(`ghost_${idx}`);
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('info', { title: 'Desafio Enviado!', desc: `${ghostName} foi desafiado. Aguarde a resposta!` });
        }
        this.renderPvP(document.getElementById('app-container'));
    },

    _acceptPvP(challengeId) {
        if (typeof SocialEngine === 'undefined') return;
        SocialEngine.resolveChallenge(challengeId);
        if (typeof State !== 'undefined') {
            const won = (challengeId.charCodeAt(0) % 2 === 0);
            if (won) {
                State.data.user.pvpWins  = (State.data.user.pvpWins  || 0) + 1;
                State.data.user.pvpElo   = (State.data.user.pvpElo   ?? 1000) + 18;
                State.addXP(50);
                State.addGems(5);
                if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('reward', { title: 'Vitoria!', desc: 'Voce venceu o duelo!', xp: 50, gems: 5 });
            } else {
                State.data.user.pvpLosses = (State.data.user.pvpLosses || 0) + 1;
                State.data.user.pvpElo    = Math.max(800, (State.data.user.pvpElo ?? 1000) - 12);
                if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('info', { title: 'Derrota', desc: 'Estude mais para vencer da proxima vez!' });
            }
            State.save();
        }
        this.renderPvP(document.getElementById('app-container'));
    },

    _declinePvP(challengeId) {
        if (typeof SocialEngine === 'undefined') return;
        SocialEngine.resolveChallenge(challengeId);
        this.renderPvP(document.getElementById('app-container'));
    },

    // ── FLASHCARDS ROUTE ───────────────────────────────────────
    _renderFlashcardsRoute(container) {
        if (typeof FlashcardEngine === 'undefined') {
            container.innerHTML = '<div class="screen"><p style="padding:32px">Flashcard Engine não carregado.</p></div>';
            return;
        }
        const cards = FlashcardEngine.buildCardsFromMemory(40);
        // Also merge AI study set cards
        if (typeof State !== 'undefined') {
            const sets = State.data.aiStudySets || [];
            sets.forEach((set, idx) => {
                const fc = FlashcardEngine.buildCardsFromStudySet(idx);
                fc.forEach(c => cards.push(c));
            });
        }
        FlashcardEngine.start({
            cards,
            source: 'memory',
            title:  'Flashcards',
        });
    },
};

window.Router = Router;
