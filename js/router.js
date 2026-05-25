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

        const isGame      = route === 'stage';
        const isAdventure = route === 'adventure';
        const isAuth      = publicRoutes.includes(route);
        const isFullscreen = isGame || isAuth;  // adventure keeps app layout (HUD/sidebar visible)

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
            case 'achievements':  this.renderAchievements(container);       break;
            case 'word-search':   this.renderWordSearch(container, parts[1], parts[2]); break;
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
                if (isFullscreen || route === 'home' || route === '') {
                    HUD.clearContext();
                } else if (route === 'chapter' && parts[1]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '📚', subject: meta.title, stage: 'Mapa', href: `#chapter/${parts[1]}` });
                } else if (route === 'stage' && parts[1] && parts[2]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '📚', subject: meta.title, stage: `Fase ${parts[2]}`, href: `#chapter/${parts[1]}` });
                } else if (route === 'adventure' && parts[1]) {
                    const meta = window.CHAPTER_METADATA;
                    if (meta) HUD.setContext({ icon: meta.icon || '🗺️', subject: meta.title, stage: 'Mapa Aventura', href: `#chapter/${parts[1]}` });
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
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Entrando...'; }

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
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Enviando...'; }
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
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Enviando...'; }
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
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Verificando...'; }
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
        if (btn) { btn.disabled = true; btn.textContent = '⏳ Salvando...'; }
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
        const calendar  = State.getStreakCalendar();
        const companion = State.getCompanionMessage();
        const avatarCls = State.getAvatarClass();
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const clsColor = { guerreiro: 'rpg', mago: 'science', ninja: 'final', cientista: 'science' };
        const avatarColor = clsColor[avatarCls] || 'xp';

        // Find the first unlocked-but-incomplete chapter for "Continue" card
        const activeChapter = chapters.find(ch => {
            if (!ch.unlocked) return false;
            const prog = State.getChapterProgress(ch.id);
            return !prog.completed;
        }) || chapters[0];
        const activeProg = activeChapter ? State.getChapterProgress(activeChapter.id) : null;

        const calendarHTML = calendar.map(d => `
            <div class="streak-day ${d.active ? 'active' : ''} ${d.isToday ? 'today' : ''}">
                <div class="streak-day-dot">${d.active ? _ic('streak',{size:'sm'}) : ''}</div>
                <div class="streak-day-label">${d.label}</div>
            </div>`).join('');

        const missionsHTML = missions.map(m => `
            <div class="daily-mission ${m.completed ? 'done' : ''}">
                <div class="dm-icon">${_ic(m.icon, {size:'md'})}</div>
                <div class="dm-body">
                    <div class="dm-title">${m.title}</div>
                    <div class="dm-desc">${m.desc}</div>
                    <div class="dm-rewards">
                        <span>${_ic('xp',{size:'xs',color:'xp'})} +${m.xp}</span>
                        ${m.gems ? `<span>${_ic('gem',{size:'xs',color:'gem'})} +${m.gems}</span>` : ''}
                    </div>
                </div>
                <div class="dm-check">${m.completed ? _ic('check',{size:'sm',color:'success'}) : ''}</div>
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
                <div class="home-greeting-avatar home-greeting-avatar--${avatarCls}" onclick="Router.navigate('#profile')">${_ic('avatar',{size:'lg',color:avatarColor})}</div>
            </div>

            <!-- XP bar -->
            <div class="home-xp-bar">
                <div class="home-xp-fill" style="width:${xpProg.percent}%"></div>
            </div>

            <!-- Companion Widget -->
            <div class="companion-bar" data-mood="${companion.mood}" data-cls="${companion.cls}">
                <div class="companion-face">${_ic('companion',{size:'xl'})}</div>
                <div class="companion-bubble">${companion.msg}</div>
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
                    <span class="streak-cal-title">${_ic('streak',{size:'sm',color:'xp'})} ${streak} ${streak === 1 ? 'dia' : 'dias'} seguidos</span>
                    <span class="streak-cal-sub">Mantenha a sequência!</span>
                </div>
                <div class="streak-calendar">${calendarHTML}</div>
            </div>

            <!-- Daily Missions -->
            <div class="section-header">
                <span class="section-title">${_ic('missions',{size:'sm'})} Missões do Dia</span>
                <span class="section-badge">${missions.filter(m=>m.completed).length}/${missions.length}</span>
            </div>
            <div class="daily-missions-list">${missionsHTML}</div>

            <!-- Chapters -->
            <div class="section-header mt-4">
                <span class="section-title">${_ic('scroll',{size:'sm'})} Matérias</span>
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
        const hasFlashcards = flashcards.length > 0;
        const hasMnemonics  = mnemonics.length  > 0;

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
                <div class="mastery-pct" style="color:var(--text-muted)">🔒</div>
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
                        <span class="hero-rank-badge ${rank.cssClass}">${rank.icon} ${rank.name}</span>
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
        container.innerHTML = `
        <div class="screen" style="padding-top:var(--sp-4)">
            <div style="text-align:center;padding:40px 0">
                <span style="font-size:2.5rem">⏳</span>
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

        // Ensure current user appears even with no remote data
        if (!players.length) {
            players = [{
                id: uid, name: State.data.user.name, level: State.data.user.level,
                xp: State.data.user.xp, avatar: State.data.user.avatar || '🦸',
                streak: State.data.user.streak
            }];
        }

        const getRankIcon = xp => xp >= 5000 ? '💜' : xp >= 2000 ? '🥇' : xp >= 800 ? '🥈' : '🥉';
        const myIdx = players.findIndex(p => p.id === uid);

        const top3 = players.slice(0, 3);
        const rest = players.slice(3, 10);

        // Podium: render in display order [2nd, 1st, 3rd]
        const podiumMap = [
            { p: top3[1], pos: 2, medal: '🥈', cls: 'second' },
            { p: top3[0], pos: 1, medal: '🥇', cls: 'first'  },
            { p: top3[2], pos: 3, medal: '🥉', cls: 'third'  },
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
                <span class="ranking-league-icon">${rank.icon}</span>
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
        if (!name) {
            ModalEngine.interrupt('simpleAlert', { icon: '👥', title: 'Nome obrigatório', message: 'Digite o nome da turma.' });
            return;
        }
        const uid = State.data.user.uid;
        if (!uid) {
            ModalEngine.interrupt('warning', { title: 'Login necessário', message: 'Faça login para criar uma turma.' });
            return;
        }
        const btn = document.querySelector('[onclick="Router._createTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '⏳'; }
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
            ModalEngine.interrupt('simpleAlert', { icon: '🔑', title: 'Código inválido', message: 'Digite o código da turma (6 letras).' });
            return;
        }
        const uid = State.data.user.uid;
        if (!uid) {
            ModalEngine.interrupt('warning', { title: 'Login necessário', message: 'Faça login para entrar em uma turma.' });
            return;
        }
        const btn = document.querySelector('[onclick="Router._joinTeam()"]');
        if (btn) { btn.disabled = true; btn.textContent = '⏳'; }
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
            <div class="shop-item-card">
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
};

window.Router = Router;
