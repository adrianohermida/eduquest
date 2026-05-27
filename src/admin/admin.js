/* ════════════════════════════════════════════════════════════
   EDUQUEST ADMIN DASHBOARD v1.0
   Premium SaaS command center — Stripe × Linear × Supabase
   ════════════════════════════════════════════════════════════ */

'use strict';

window.EduAdmin = (() => {

    /* ── State ──────────────────────────────────────────────── */
    let _section          = 'overview';
    let _container        = null;
    let _cmdOpen          = false;
    let _cmdIdx           = 0;
    let _contentTab       = 'chapters';
    let _contentChapterId = null;
    let _contentStageVar  = null;
    let _editBuffer       = null;
    let _editVarName      = null;

    /* ── Mock Data ──────────────────────────────────────────── */
    const MOCK = {
        kpis: {
            mau:         { val: '12.847', trend: '+18%', dir: 'up',   icon: '👥' },
            revenue:     { val: 'R$ 48.2k', trend: '+24%', dir: 'up', icon: '💰' },
            retention:   { val: '73%',     trend: '+4%',  dir: 'up',  icon: '🔄' },
            aiTokens:    { val: '3.1M',    trend: '+31%', dir: 'up',  icon: '🤖' },
            churn:       { val: '2.4%',    trend: '-0.3%', dir: 'up', icon: '📉' },
            dau:         { val: '4.219',   trend: '+9%',  dir: 'up',  icon: '📊' },
            arpu:        { val: 'R$ 37,5', trend: '+6%',  dir: 'up',  icon: '💎' },
            sessions:    { val: '94.3k',   trend: '+12%', dir: 'up',  icon: '⚡' },
        },
        dau_sparkline: [38,42,35,51,48,60,55,72,68,74,80,76,88,85,92],
        revenue_chart:  [28,33,31,38,35,42,44,48],
        top_users: [
            { name: 'Ana Beatriz', email: 'ana@escola.edu.br', plan: 'Premium', xp: 48200, streak: 42, avatar: '🦸‍♀️', status: 'active' },
            { name: 'Pedro Henrique', email: 'ph@gmail.com', plan: 'Premium', xp: 39100, streak: 28, avatar: '🧙', status: 'active' },
            { name: 'Sophia Martins', email: 'sof@hotmail.com', plan: 'Free', xp: 31800, streak: 19, avatar: '🧝‍♀️', status: 'active' },
            { name: 'Lucas Ferreira', email: 'lucas.f@school.br', plan: 'Turma', xp: 27400, streak: 14, avatar: '🧑‍🚀', status: 'active' },
            { name: 'Mariana Costa', email: 'mari@gmail.com', plan: 'Premium', xp: 22900, streak: 8,  avatar: '🦊', status: 'inactive' },
        ],
        activities: [
            { type: 'billing', icon: '💳', text: '<strong>Nova assinatura Premium</strong> · ana@escola.edu.br', time: 'há 4 min' },
            { type: 'user',    icon: '👤', text: '<strong>12 novos cadastros</strong> via campanha Google', time: 'há 11 min' },
            { type: 'ai',      icon: '🤖', text: '<strong>AI Builder</strong> gerou 3 novas questões', time: 'há 18 min' },
            { type: 'event',   icon: '⚡', text: '<strong>Evento "Semana Ciências"</strong> iniciado', time: 'há 32 min' },
            { type: 'billing', icon: '💸', text: '<strong>Pagamento processado</strong> · R$ 1.290,00 via Stripe', time: 'há 45 min' },
            { type: 'error',   icon: '⚠️', text: '<strong>Edge Function timeout</strong> · /api/ai-questions (3×)', time: 'há 1h' },
            { type: 'user',    icon: '🏆', text: '<strong>pedro@school.br</strong> atingiu Nível 30', time: 'há 1h 20min' },
        ],
        health: {
            supabase:   { latency: '34ms',  uptime: '99.98%', conns: '47/200',   status: 'green' },
            edge:       { latency: '28ms',  uptime: '99.99%', reqs: '1.2k/min',  status: 'green' },
            storage:    { used: '14.2 GB',  limit: '50 GB',   files: '84.391',   status: 'green' },
            ai:         { tokens: '3.1M',   budget: '10M',    rpm: '28 req/min', status: 'yellow' },
        },
        users: [
            { name: 'Ana Beatriz',   email: 'ana@escola.edu.br',   plan: 'Premium',  status: 'active',   joined: '12/01/25', xp: 48200, streak: 42, avatar: '🦸‍♀️' },
            { name: 'Pedro H.',      email: 'ph@gmail.com',         plan: 'Premium',  status: 'active',   joined: '03/02/25', xp: 39100, streak: 28, avatar: '🧙' },
            { name: 'Sophia M.',     email: 'sof@hotmail.com',      plan: 'Free',     status: 'active',   joined: '18/02/25', xp: 31800, streak: 19, avatar: '🧝‍♀️' },
            { name: 'Lucas F.',      email: 'lucas.f@school.br',    plan: 'Turma',    status: 'active',   joined: '25/02/25', xp: 27400, streak: 14, avatar: '🧑‍🚀' },
            { name: 'Mariana C.',    email: 'mari@gmail.com',       plan: 'Premium',  status: 'inactive', joined: '01/03/25', xp: 22900, streak: 0,  avatar: '🦊' },
            { name: 'Rafael T.',     email: 'rafa@escola.edu.br',   plan: 'Free',     status: 'active',   joined: '05/03/25', xp: 18700, streak: 7,  avatar: '🧑‍🎓' },
            { name: 'Juliana P.',    email: 'ju@gmail.com',         plan: 'Premium',  status: 'active',   joined: '10/03/25', xp: 16200, streak: 5,  avatar: '🧜‍♀️' },
            { name: 'Carlos S.',     email: 'carlos@isp.com.br',    plan: 'Free',     status: 'banned',   joined: '15/03/25', xp: 1200,  streak: 0,  avatar: '🧑' },
        ],
        plans: [
            { name: 'Free',    users: 8240, revenue: 'R$ 0',       price: 'Grátis',      features: '3 capítulos, 5 vidas/dia, IA limitada' },
            { name: 'Premium', users: 3820, revenue: 'R$ 38.200',  price: 'R$ 19,90/mês', features: 'Tudo desbloqueado, IA ilimitada, sem ads' },
            { name: 'Turma',   users: 787,  revenue: 'R$ 10.000',  price: 'R$ 12,90/aluno', features: 'Painel professor, turmas, relatórios' },
        ],
        ai_models: [
            { model: 'claude-sonnet-4-6', tokens: '1.8M',  cost: 'R$ 42,00',  rpm: 18, usage: 58 },
            { model: 'claude-haiku-4-5',  tokens: '1.1M',  cost: 'R$ 8,50',   rpm: 9,  usage: 35 },
            { model: 'claude-opus-4-7',   tokens: '200k',  cost: 'R$ 14,00',  rpm: 1,  usage: 7  },
        ],
        chapters: [
            { title: 'Doenças e Prevenção',   subject: 'Ciências', year: '7º Ano', stages: 12, completions: 842, rating: 4.8 },
            { title: 'Sistema Solar',          subject: 'Ciências', year: '7º Ano', stages: 10, completions: 631, rating: 4.6 },
            { title: 'Células e Organismos',   subject: 'Ciências', year: '8º Ano', stages: 14, completions: 419, rating: 4.7 },
            { title: 'Frações e Proporções',   subject: 'Matemática', year: '6º Ano', stages: 8, completions: 1023, rating: 4.5 },
            { title: 'Revolução Industrial',   subject: 'História',  year: '9º Ano', stages: 11, completions: 388, rating: 4.4 },
        ],
        events: [
            { name: 'Semana Ciências',    status: 'active',  start: '20/05/25', end: '27/05/25', participants: 2841, xpBonus: '2×' },
            { name: 'Maratona Histórica', status: 'upcoming', start: '02/06/25', end: '08/06/25', participants: 0,    xpBonus: '1.5×' },
            { name: 'Copa Matemática',    status: 'ended',   start: '01/05/25', end: '07/05/25', participants: 4122, xpBonus: '2×' },
        ],
        logs: [
            { level: 'INFO',  service: 'auth',       msg: 'Login bem-sucedido · ana@escola.edu.br',          ts: '14:32:11' },
            { level: 'WARN',  service: 'edge-fn',    msg: 'Timeout 3× · /api/ai-questions · 2.8s',           ts: '14:28:04' },
            { level: 'INFO',  service: 'billing',    msg: 'Webhook Stripe recebido · payment_intent.succeeded', ts: '14:21:59' },
            { level: 'INFO',  service: 'storage',    msg: 'Upload completo · assets/banner_evento.png · 248KB', ts: '14:19:33' },
            { level: 'ERROR', service: 'ai',         msg: 'Rate limit · claude-opus-4-7 · retry 1/3',        ts: '14:15:07' },
            { level: 'INFO',  service: 'auth',       msg: '12 novos registros · campanha google_ads',         ts: '14:08:22' },
            { level: 'INFO',  service: 'game',       msg: 'pedro@school.br atingiu Nível 30',                 ts: '13:52:44' },
            { level: 'WARN',  service: 'db',         msg: 'Query lenta 840ms · SELECT user_progress JOIN',    ts: '13:47:18' },
        ],
    };

    /* ── Nav Definition ─────────────────────────────────────── */
    const NAV = [
        { group: 'Principal' },
        { id: 'overview',      icon: '📊', label: 'Visão Geral',     badge: 'LIVE' },
        { id: 'analytics',     icon: '📈', label: 'Analytics' },
        { group: 'Usuários' },
        { id: 'users',         icon: '👥', label: 'Usuários',        badge: '12.8k' },
        { id: 'subscriptions', icon: '💳', label: 'Assinaturas' },
        { id: 'billing',       icon: '💰', label: 'Financeiro' },
        { group: 'Produto' },
        { id: 'content',       icon: '📚', label: 'Conteúdo' },
        { id: 'gamification',  icon: '🎮', label: 'Gamificação' },
        { id: 'events',        icon: '⚡', label: 'Eventos' },
        { id: 'ai',            icon: '🤖', label: 'IA & Builder' },
        { group: 'Infra' },
        { id: 'storage',       icon: '🗄️', label: 'Storage' },
        { id: 'observability', icon: '🔍', label: 'Observabilidade' },
        { id: 'logs',          icon: '📋', label: 'Logs & Audit' },
        { id: 'security',      icon: '🔐', label: 'Segurança' },
        { group: 'Sistema' },
        { id: 'settings',      icon: '⚙️', label: 'Configurações' },
    ];

    const CMD_ITEMS = [
        { group: 'Navegar',   icon: '📊', label: 'Visão Geral',     meta: 'overview',      action: () => _navigate('overview') },
        { group: 'Navegar',   icon: '👥', label: 'Usuários',        meta: 'users',         action: () => _navigate('users') },
        { group: 'Navegar',   icon: '💰', label: 'Financeiro',      meta: 'billing',       action: () => _navigate('billing') },
        { group: 'Navegar',   icon: '📈', label: 'Analytics',       meta: 'analytics',     action: () => _navigate('analytics') },
        { group: 'Navegar',   icon: '🤖', label: 'IA & Builder',    meta: 'ai',            action: () => _navigate('ai') },
        { group: 'Navegar',   icon: '⚡', label: 'Eventos',         meta: 'events',        action: () => _navigate('events') },
        { group: 'Navegar',   icon: '📚', label: 'Conteúdo',        meta: 'content',       action: () => _navigate('content') },
        { group: 'Navegar',   icon: '📋', label: 'Logs & Audit',    meta: 'logs',          action: () => _navigate('logs') },
        { group: 'Ações',     icon: '🚪', label: 'Voltar ao App',   meta: 'esc',           action: () => _exit() },
        { group: 'Ações',     icon: '🔄', label: 'Atualizar dados', meta: '⌘R',            action: () => _refresh() },
    ];

    /* ── HTML Helpers ────────────────────────────────────────── */
    const badge = (text, color = 'grey') =>
        `<span class="adm-badge adm-badge-${color}"><span class="adm-badge-dot"></span>${text}</span>`;

    const planBadge = (plan) => {
        const map = { Premium: 'orange', Free: 'grey', Turma: 'blue', Admin: 'purple' };
        return badge(plan, map[plan] || 'grey');
    };

    const statusBadge = (s) => {
        const map = { active: ['Ativo', 'green'], inactive: ['Inativo', 'grey'], banned: ['Banido', 'red'], upcoming: ['Em breve', 'blue'], ended: ['Encerrado', 'grey'] };
        const [label, color] = map[s] || [s, 'grey'];
        return badge(label, color);
    };

    const logLevelBadge = (level) => {
        const map = { INFO: 'blue', WARN: 'yellow', ERROR: 'red', DEBUG: 'grey' };
        return badge(level, map[level] || 'grey');
    };

    const sparkline = (data) => {
        const max = Math.max(...data, 1);
        return `<div class="admin-sparkline">${data.map((v, i) =>
            `<div class="admin-sparkline-bar ${i === data.length - 1 ? 'today' : ''}" style="height:${Math.max(8, (v/max)*60)}px" title="${v}"></div>`
        ).join('')}</div>`;
    };

    const barChart = (rows) => /* rows: [{label, val, pct, color}] */
        `<div class="admin-bar-chart">${rows.map(r =>
            `<div class="admin-bar-item">
                <span class="admin-bar-label">${r.label}</span>
                <div class="admin-bar-track"><div class="admin-bar-fill" style="width:${r.pct}%;background:${r.color||'linear-gradient(90deg,#f97316,#fb923c)'}"></div></div>
                <span class="admin-bar-val">${r.val}</span>
            </div>`
        ).join('')}</div>`;

    /* ── Layout Builder ──────────────────────────────────────── */
    function _buildLayout() {
        const navHtml = NAV.map(n => {
            if (n.group) return `<div class="admin-nav-group"><div class="admin-nav-group-label">${n.group}</div>`;
            const active = n.id === _section ? ' active' : '';
            const bdg = n.badge ? `<span class="admin-nav-item-badge">${n.badge}</span>` : '';
            return `<button class="admin-nav-item${active}" onclick="EduAdmin._navigate('${n.id}')">
                <span class="admin-nav-item-icon">${n.icon}</span>
                <span class="admin-nav-item-label">${n.label}</span>
                ${bdg}
            </button>`;
        }).join('');

        const sectionLabel = NAV.find(n => n.id === _section)?.label || 'Dashboard';

        return `
        <div class="admin-layout" id="admin-layout">
            <div class="admin-sidebar-backdrop" id="admin-sidebar-backdrop" onclick="EduAdmin._closeMobileSidebar()"></div>
            <aside class="admin-sidebar" id="admin-sidebar">
                <div class="admin-sidebar-logo" onclick="EduAdmin._navigate('overview')">
                    <div class="admin-sidebar-logo-icon">⚡</div>
                    <div class="admin-sidebar-logo-text">EduQuest</div>
                    <div class="admin-sidebar-logo-badge">Admin</div>
                </div>
                <div style="padding:8px 8px 0;flex:1;overflow-y:auto;">
                    ${navHtml}
                </div>
                <div class="admin-sidebar-footer">
                    <button class="admin-back-btn" onclick="EduAdmin._exit()">
                        ← Voltar ao App
                    </button>
                    <div class="admin-sidebar-user">
                        <div class="admin-sidebar-user-avatar">🛡️</div>
                        <div>
                            <div class="admin-sidebar-user-name">Admin</div>
                            <div class="admin-sidebar-user-role">Super Admin</div>
                        </div>
                    </div>
                </div>
            </aside>
            <div class="admin-body">
                <div class="admin-topbar">
                    <button class="admin-mobile-menu-btn" onclick="EduAdmin._openMobileSidebar()" aria-label="Menu">☰</button>
                    <div class="admin-topbar-breadcrumb">
                        <span>EduQuest</span>
                        <span class="admin-topbar-breadcrumb-sep">›</span>
                        <span class="admin-topbar-breadcrumb-current">${sectionLabel}</span>
                    </div>
                    <button class="admin-topbar-search" onclick="EduAdmin._openCmd()">
                        <span class="admin-topbar-search-icon">🔍</span>
                        Buscar ou navegar…
                        <span class="admin-topbar-search-hint">⌘K</span>
                    </button>
                    <div class="admin-topbar-right">
                        <div class="admin-topbar-status">
                            <div class="admin-topbar-status-dot"></div>
                            Sistemas normais
                        </div>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._refresh()">↺ Refresh</button>
                        <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._navigate('ai')">+ Novo</button>
                    </div>
                    <button class="admin-topbar-back-mobile" onclick="EduAdmin._exit()">← App</button>
                </div>
                <div class="admin-main" id="admin-main">
                    ${_renderSection()}
                </div>
            </div>
        </div>`;
    }

    /* ── Section Dispatch ────────────────────────────────────── */
    function _renderSection() {
        const map = {
            overview:      _renderOverview,
            analytics:     _renderAnalytics,
            users:         _renderUsers,
            subscriptions: _renderSubscriptions,
            billing:       _renderBilling,
            content:       _renderContent,
            gamification:  _renderGamification,
            events:        _renderEvents,
            ai:            _renderAI,
            storage:       _renderStorage,
            observability: _renderObservability,
            logs:          _renderLogs,
            security:      _renderSecurity,
            settings:      _renderSettings,
        };
        const result = (map[_section] || _renderOverview)();
        return result === null ? '' : result;
    }

    /* ── Overview ────────────────────────────────────────────── */
    function _renderOverview() {
        const k = MOCK.kpis;
        return `
        <div class="admin-page-header">
            <div>
                <div class="admin-page-title">Visão Geral</div>
                <div class="admin-page-sub">Dashboard executivo · Atualizado agora</div>
            </div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-ghost">⬇ Exportar</button>
                <button class="admin-topbar-btn admin-topbar-btn-ghost">📅 Últimos 30 dias</button>
            </div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('MAU', k.mau, 'accent-orange')}
            ${_kpiCard('Receita Mensal', k.revenue, 'accent-green')}
            ${_kpiCard('DAU', k.dau, 'accent-blue')}
            ${_kpiCard('Retenção D30', k.retention, 'accent-purple')}
            ${_kpiCard('Churn Rate', k.churn, 'accent-red')}
            ${_kpiCard('ARPU', k.arpu, 'accent-orange')}
            ${_kpiCard('Sessões/Mês', k.sessions, 'accent-blue')}
            ${_kpiCard('Tokens IA', k.aiTokens, 'accent-purple')}
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div>
                        <div class="admin-chart-title">Usuários Ativos (DAU)</div>
                        <div class="admin-chart-sub">Últimos 15 dias</div>
                    </div>
                    <span class="adm-badge adm-badge-green"><span class="adm-badge-dot"></span>+18% vs mês anterior</span>
                </div>
                ${sparkline(MOCK.dau_sparkline)}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div>
                        <div class="admin-chart-title">Receita Semanal (R$k)</div>
                        <div class="admin-chart-sub">Últimas 8 semanas</div>
                    </div>
                </div>
                ${barChart(MOCK.revenue_chart.map((v, i) => ({
                    label: `S${i+1}`, val: `${v}k`, pct: (v/50)*100
                })))}
            </div>
        </div>

        <div class="admin-content-grid">
            <div class="admin-table-card">
                <div class="admin-table-header">
                    <span class="admin-table-title">🏆 Top Usuários</span>
                    <span class="admin-table-action" onclick="EduAdmin._navigate('users')">Ver todos →</span>
                </div>
                <table class="admin-table">
                    <thead><tr><th>Usuário</th><th>Plano</th><th>XP</th><th>Streak</th></tr></thead>
                    <tbody>${MOCK.top_users.map(u => `
                        <tr>
                            <td><div class="admin-user-cell">
                                <div class="admin-user-avatar">${u.avatar}</div>
                                <div><div class="admin-user-info-name">${u.name}</div>
                                <div class="admin-user-info-email">${u.email}</div></div>
                            </div></td>
                            <td>${planBadge(u.plan)}</td>
                            <td>${u.xp.toLocaleString('pt-BR')}</td>
                            <td>🔥 ${u.streak}d</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
            <div class="admin-table-card">
                <div class="admin-table-header">
                    <span class="admin-table-title">📡 Atividade Recente</span>
                    <span class="admin-table-action" onclick="EduAdmin._navigate('logs')">Ver logs →</span>
                </div>
                <div style="padding:0 20px;">
                    ${MOCK.activities.map(a => `
                    <div class="admin-activity-item">
                        <div class="admin-activity-icon type-${a.type}">${a.icon}</div>
                        <div class="admin-activity-text">${a.text}</div>
                        <div class="admin-activity-time">${a.time}</div>
                    </div>`).join('')}
                </div>
            </div>
        </div>

        <div class="admin-health-grid">
            ${_healthCard('🗄️ Supabase DB', MOCK.health.supabase, [['Latência','latency'],['Uptime','uptime'],['Conexões','conns']])}
            ${_healthCard('⚡ Edge Functions', MOCK.health.edge, [['Latência','latency'],['Uptime','uptime'],['Requisições','reqs']])}
            ${_healthCard('📦 Storage', MOCK.health.storage, [['Usado','used'],['Limite','limit'],['Arquivos','files']])}
            ${_healthCard('🤖 IA (Claude)', MOCK.health.ai, [['Tokens mês','tokens'],['Budget','budget'],['Req/min','rpm']])}
        </div>`;
    }

    function _kpiCard(label, kpi, accent) {
        return `<div class="admin-kpi-card ${accent}">
            <div class="admin-kpi-icon">${kpi.icon}</div>
            <div class="admin-kpi-label">${label}</div>
            <div class="admin-kpi-value">${kpi.val}</div>
            <span class="admin-kpi-trend ${kpi.dir}">${kpi.dir === 'up' ? '↑' : '↓'} ${kpi.trend}</span>
        </div>`;
    }

    function _healthCard(title, data, fields) {
        const statusColor = data.status === 'green' ? '#22c55e' : data.status === 'yellow' ? '#f59e0b' : '#ef4444';
        return `<div class="admin-health-card">
            <div class="admin-health-header">
                <span class="admin-health-service">${title}</span>
                <span style="width:8px;height:8px;border-radius:50%;background:${statusColor};display:inline-block;"></span>
            </div>
            ${fields.map(([lbl, key]) => `
            <div class="admin-health-metric">
                <span>${lbl}</span>
                <span class="admin-health-val">${data[key]}</span>
            </div>`).join('')}
        </div>`;
    }

    /* ── Analytics ───────────────────────────────────────────── */
    function _renderAnalytics() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Analytics</div>
            <div class="admin-page-sub">Aprendizagem, engajamento e retenção</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Taxa de Conclusão', { val: '68%',   trend: '+5%',  dir: 'up',   icon: '✅' }, 'accent-green')}
            ${_kpiCard('Tempo Médio/Sessão', { val: '18min', trend: '+2min', dir: 'up',  icon: '⏱️' }, 'accent-blue')}
            ${_kpiCard('Questões/Usuário',   { val: '142',   trend: '+22',  dir: 'up',   icon: '❓' }, 'accent-orange')}
            ${_kpiCard('Acurácia Média',      { val: '74%',   trend: '+3%',  dir: 'up',   icon: '🎯' }, 'accent-purple')}
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Distribuição por Matéria</div>
                    <div class="admin-chart-sub">Questões respondidas este mês</div></div>
                </div>
                ${barChart([
                    { label: 'Ciê', val: '42%', pct: 42 },
                    { label: 'Mat', val: '28%', pct: 28 },
                    { label: 'His', val: '16%', pct: 16 },
                    { label: 'Por', val: '9%',  pct: 9 },
                    { label: 'Geo', val: '5%',  pct: 5 },
                ])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Funil de Retenção</div>
                    <div class="admin-chart-sub">Cadastro → Ativo → Premium</div></div>
                </div>
                ${barChart([
                    { label: 'Cad', val: '12.847', pct: 100, color: '#3b82f6' },
                    { label: 'D1',  val: '9.823',  pct: 76,  color: '#3b82f6' },
                    { label: 'D7',  val: '6.118',  pct: 48,  color: '#8b5cf6' },
                    { label: 'D30', val: '3.851',  pct: 30,  color: '#f97316' },
                    { label: 'Prm', val: '3.820',  pct: 30,  color: '#22c55e' },
                ])}
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">📚 Capítulos Mais Acessados</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Capítulo</th><th>Matéria</th><th>Ano</th><th>Conclusões</th><th>Avaliação</th><th>Estágios</th></tr></thead>
                <tbody>${MOCK.chapters.map(c => `
                    <tr>
                        <td>${c.title}</td>
                        <td>${badge(c.subject, 'blue')}</td>
                        <td>${c.year}</td>
                        <td>${c.completions.toLocaleString('pt-BR')}</td>
                        <td>⭐ ${c.rating}</td>
                        <td>${c.stages} estágios</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Users ───────────────────────────────────────────────── */
    function _renderUsers() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Usuários</div>
            <div class="admin-page-sub">${MOCK.kpis.mau.val} usuários ativos</div></div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-ghost">⬇ Exportar CSV</button>
                <button class="admin-topbar-btn admin-topbar-btn-primary">+ Convidar</button>
            </div>
        </div>

        <div class="admin-metric-row">
            ${[
                ['👥','Total',    '12.847'],
                ['✅','Ativos',   '9.823'],
                ['💳','Premium',  '3.820'],
                ['🚫','Banidos',  '14'],
                ['📧','Email conf.', '11.202'],
                ['📱','App instalado', '7.841'],
            ].map(([icon,lbl,val]) => `
            <div class="admin-metric-pill">
                <div class="admin-metric-pill-icon">${icon}</div>
                <div><div class="admin-metric-pill-label">${lbl}</div>
                <div class="admin-metric-pill-val">${val}</div></div>
            </div>`).join('')}
        </div>

        <div class="admin-filters">
            <input class="admin-filter-input" placeholder="🔍 Buscar por nome, email…" />
            <select class="admin-filter-select">
                <option>Todos os planos</option>
                <option>Free</option>
                <option>Premium</option>
                <option>Turma</option>
            </select>
            <select class="admin-filter-select">
                <option>Todos os status</option>
                <option>Ativo</option>
                <option>Inativo</option>
                <option>Banido</option>
            </select>
        </div>

        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Usuário</th><th>Plano</th><th>Status</th><th>XP</th><th>Streak</th><th>Cadastro</th><th>Ações</th></tr></thead>
                <tbody>${MOCK.users.map(u => `
                    <tr>
                        <td><div class="admin-user-cell">
                            <div class="admin-user-avatar">${u.avatar}</div>
                            <div><div class="admin-user-info-name">${u.name}</div>
                            <div class="admin-user-info-email">${u.email}</div></div>
                        </div></td>
                        <td>${planBadge(u.plan)}</td>
                        <td>${statusBadge(u.status)}</td>
                        <td>${u.xp.toLocaleString('pt-BR')}</td>
                        <td>🔥 ${u.streak}d</td>
                        <td>${u.joined}</td>
                        <td><button class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.7rem;">Ver</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
            <div class="admin-pagination">
                <span>Mostrando 1–8 de 12.847 usuários</span>
                <div class="admin-pagination-btns">
                    <button class="admin-pagination-btn active">1</button>
                    <button class="admin-pagination-btn">2</button>
                    <button class="admin-pagination-btn">3</button>
                    <button class="admin-pagination-btn">…</button>
                    <button class="admin-pagination-btn">1.606</button>
                </div>
            </div>
        </div>`;
    }

    /* ── Subscriptions ───────────────────────────────────────── */
    function _renderSubscriptions() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Assinaturas</div>
            <div class="admin-page-sub">Gestão de planos e ciclos de cobrança</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('MRR',            { val: 'R$ 48.2k', trend: '+24%', dir: 'up', icon: '💰' }, 'accent-green')}
            ${_kpiCard('ARR Projetado',  { val: 'R$ 578k',  trend: '+24%', dir: 'up', icon: '📈' }, 'accent-blue')}
            ${_kpiCard('Assinantes',     { val: '4.607',    trend: '+8%',  dir: 'up', icon: '💳' }, 'accent-orange')}
            ${_kpiCard('Trial → Pago',   { val: '38%',      trend: '+4%',  dir: 'up', icon: '🎯' }, 'accent-purple')}
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">📦 Planos Disponíveis</div>
                <button class="admin-topbar-btn admin-topbar-btn-primary">+ Novo Plano</button>
            </div>
            <table class="admin-table">
                <thead><tr><th>Plano</th><th>Usuários</th><th>Receita</th><th>Preço</th><th>Features</th><th>Ação</th></tr></thead>
                <tbody>${MOCK.plans.map(p => `
                    <tr>
                        <td>${planBadge(p.name)}</td>
                        <td>${p.users.toLocaleString('pt-BR')}</td>
                        <td>${p.revenue}</td>
                        <td>${p.price}</td>
                        <td style="font-weight:600;color:#64748b;font-size:0.75rem;">${p.features}</td>
                        <td><button class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.7rem;">Editar</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Distribuição de Planos</div></div>
                </div>
                ${barChart([
                    { label: 'Free', val: '64%', pct: 64, color: '#94a3b8' },
                    { label: 'Prm',  val: '30%', pct: 30, color: '#f97316' },
                    { label: 'Trm',  val: '6%',  pct: 6,  color: '#3b82f6' },
                ])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">MRR Histórico</div></div>
                </div>
                ${sparkline([20,24,22,28,26,32,30,36,34,38,42,40,44,46,48])}
            </div>
        </div>`;
    }

    /* ── Billing ─────────────────────────────────────────────── */
    function _renderBilling() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Financeiro</div>
            <div class="admin-page-sub">Receitas, pagamentos e gestão Stripe</div></div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-ghost">Abrir Stripe Dashboard ↗</button>
            </div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Receita Mai/25',  { val: 'R$ 48.2k', trend: '+24%', dir: 'up', icon: '💰' }, 'accent-green')}
            ${_kpiCard('Ticket Médio',    { val: 'R$ 37,50', trend: '+6%',  dir: 'up', icon: '🎫' }, 'accent-orange')}
            ${_kpiCard('Inadimplência',   { val: 'R$ 1.240', trend: '-12%', dir: 'up', icon: '⚠️' }, 'accent-red')}
            ${_kpiCard('Reembolsos',      { val: 'R$ 290',   trend: '-8%',  dir: 'up', icon: '↩️' }, 'accent-blue')}
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">💳 Últimas Transações</div>
                <span class="adm-badge adm-badge-green"><span class="adm-badge-dot"></span>Stripe Conectado</span>
            </div>
            <table class="admin-table">
                <thead><tr><th>Data</th><th>Usuário</th><th>Valor</th><th>Plano</th><th>Status</th><th>ID Stripe</th></tr></thead>
                <tbody>${[
                    ['25/05/25','ana@escola.edu.br','R$ 19,90','Premium','succeeded','pi_3Rf8...'],
                    ['25/05/25','ph@gmail.com','R$ 19,90','Premium','succeeded','pi_3Rf7...'],
                    ['24/05/25','escola@edu.br','R$ 129,00','Turma','succeeded','pi_3Rf5...'],
                    ['24/05/25','mari@gmail.com','R$ 19,90','Premium','failed','pi_3Rf4...'],
                    ['23/05/25','rafa@escola.edu.br','R$ 19,90','Premium','succeeded','pi_3Rf2...'],
                ].map(([dt,em,val,pl,st,id]) => `
                    <tr>
                        <td>${dt}</td>
                        <td>${em}</td>
                        <td style="font-weight:900">${val}</td>
                        <td>${planBadge(pl)}</td>
                        <td>${st === 'succeeded' ? badge('Pago','green') : badge('Falhou','red')}</td>
                        <td style="font-family:monospace;font-size:0.72rem;color:#94a3b8">${id}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Content — Real Data ─────────────────────────────────── */

    function _loadContentData() {
        const registry = window.CHAPTERS_REGISTRY || {};
        const subjectLabels = { ciencias: 'Ciências', matematica: 'Matemática', historia: 'História', portugues: 'Português', geografia: 'Geografia' };
        return Object.values(registry).map(meta => {
            const stages = meta.stages || [];
            const loaded = stages.filter(s => !!window[s.varName]);
            const qCount = loaded.reduce((n, s) => n + ((window[s.varName]?.questions?.length) || 0), 0);
            const fcCount = loaded.reduce((n, s) => n + ((window[s.varName]?.summary?.flashcards?.length) || 0), 0);
            return {
                id: meta.id, title: meta.title, subject: meta.subject,
                subjectLabel: subjectLabels[meta.subject] || meta.subject,
                grade: (meta.grade || '').replace('7ano','7º Ano').replace('8ano','8º Ano').replace('9ano','9º Ano'),
                icon: meta.icon || '📚', totalStages: meta.totalStages || stages.length,
                stagesLoaded: loaded.length, questionCount: qCount, flashcardCount: fcCount, stages
            };
        });
    }

    function _renderContent() {
        const data = _loadContentData();
        const totalStages    = data.reduce((s, c) => s + c.stagesLoaded, 0);
        const totalQuestions = data.reduce((s, c) => s + c.questionCount, 0);
        const totalFC        = data.reduce((s, c) => s + c.flashcardCount, 0);
        let crumbs = '', body = '';

        if (!_contentChapterId || _contentTab === 'chapters') {
            crumbs = `Todos os capítulos`;
            body = _renderContentChapters(data);
        } else if (_contentTab === 'expand') {
            const cap = data.find(c => c.id === _contentChapterId);
            crumbs = `<button onclick="EduAdmin._contentNav('chapters')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:2px 8px;font-size:0.75rem">← Capítulos</button>
                <span style="margin:0 6px;color:#64748b">›</span><strong style="color:#f1f5f9">${cap?.title || _contentChapterId}</strong>
                <span style="margin-left:8px;font-size:0.72rem;color:#f97316;font-weight:700">⊞ Vista Expandida</span>`;
            body = _renderContentExpand(_contentChapterId, data);
        } else if (_contentTab === 'stages') {
            const cap = data.find(c => c.id === _contentChapterId);
            crumbs = `<button onclick="EduAdmin._contentNav('chapters')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:2px 8px;font-size:0.75rem">← Capítulos</button>
                <span style="margin:0 6px;color:#64748b">›</span><strong style="color:#f1f5f9">${cap?.title || _contentChapterId}</strong>`;
            body = _renderContentStages(_contentChapterId, data);
        } else if (_contentTab === 'questions') {
            const cap = data.find(c => c.id === _contentChapterId);
            const sd  = window[_contentStageVar] || {};
            crumbs = `<button onclick="EduAdmin._contentNav('chapters')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:2px 8px;font-size:0.75rem">← Capítulos</button>
                <span style="margin:0 6px;color:#64748b">›</span>
                <button onclick="EduAdmin._contentNav('stages','${_contentChapterId}')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:2px 8px;font-size:0.75rem">${cap?.title || _contentChapterId}</button>
                <span style="margin:0 6px;color:#64748b">›</span><strong style="color:#f1f5f9">${sd.title || _contentStageVar}</strong>`;
            body = _renderContentQuestions(_contentStageVar);
        }

        return `
        <div class="admin-page-header">
            <div>
                <div class="admin-page-title">Conteúdo</div>
                <div class="admin-page-sub" style="margin-top:6px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">${crumbs}</div>
            </div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._navigate('ai')">🤖 Gerar com IA</button>
            </div>
        </div>
        <div class="admin-metric-row">
            ${[['📚','Capítulos',data.length],['🗺️','Estágios',totalStages],['❓','Questões',totalQuestions],['🃏','Flashcards',totalFC]].map(([i,l,v]) => `
            <div class="admin-metric-pill"><div class="admin-metric-pill-icon">${i}</div>
            <div><div class="admin-metric-pill-label">${l}</div><div class="admin-metric-pill-val">${v}</div></div></div>`).join('')}
        </div>
        ${body}`;
    }

    function _renderContentQuestions(stageVar) {
        const sd = window[stageVar];
        if (!sd) return `<div style="padding:40px;text-align:center;color:#94a3b8">Stage não encontrado.</div>`;
        const secs = [
            { label:'🔥 Aquecimento',        qs: sd.warmup || [] },
            { label:'🔍 Prática Guiada',     qs: sd.guidedPractice || [] },
            { label:'⚔️ Questões Principais', qs: sd.questions || [] },
            { label:'🧠 Revisão Adaptativa',  qs: sd.adaptiveReview || [] },
        ].filter(s => s.qs.length);
        return `
        <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
            <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._openStageEditor('${stageVar}')">✏️ Editar Stage Completo</button>
        </div>
        ${secs.map(sec => `
        <div class="admin-section-card" style="margin-bottom:16px">
            <div class="admin-section-card-header"><div class="admin-chart-title">${sec.label} — ${sec.qs.length} questões</div></div>
            <table class="admin-table">
                <thead><tr><th>#</th><th>Enunciado</th><th>Opções (✓=correta)</th><th>Explicação</th></tr></thead>
                <tbody>${sec.qs.map((q, i) => `
                <tr>
                    <td style="color:#64748b">${i+1}</td>
                    <td style="max-width:200px;font-size:0.82rem">${_esc((q.prompt||'').substring(0,100))}</td>
                    <td style="font-size:0.75rem">${(q.options||[]).map(o => `<span style="display:block;color:${o.correct?'#22c55e':'#94a3b8'}">${o.correct?'✓':'○'} ${_esc(o.text||'')}</span>`).join('')}</td>
                    <td style="max-width:160px;font-size:0.74rem;color:#94a3b8;font-style:italic">${_esc((q.explanation||'').substring(0,80))}</td>
                </tr>`).join('')}
                </tbody>
            </table>
        </div>`).join('')}`;
    }

    /* ── Stage Editor ─────────────────────────────────────────── */

    function _esc(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }

    function _openStageEditor(varName) {
        _editVarName = varName;
        const sd = window[varName];
        if (!sd) { _editorToast(`⚠️ Stage "${varName}" não encontrado.`); return; }
        _editBuffer = JSON.parse(JSON.stringify(sd));
        const modal = document.createElement('div');
        modal.id = 'stage-editor-overlay';
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(2,6,23,0.97);z-index:2000;display:flex;flex-direction:column;font-family:inherit';
        modal.innerHTML = _buildStageEditorHTML();
        document.body.appendChild(modal);
    }

    function _buildFlashcardEditor(idx, fc) {
        return `
        <div id="fced-${idx}" style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <span style="font-size:0.7rem;color:#64748b">FC ${idx+1}</span>
                <button onclick="EduAdmin._editorRemoveFlashcard(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.85rem;padding:2px 6px;border-radius:4px">✕</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div>
                    <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Pergunta</label>
                    <textarea rows="2" oninput="EduAdmin._bufFC(${idx},'q',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;resize:vertical;box-sizing:border-box">${_esc(fc.q||'')}</textarea>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Resposta</label>
                    <textarea rows="2" oninput="EduAdmin._bufFC(${idx},'a',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;resize:vertical;box-sizing:border-box">${_esc(fc.a||'')}</textarea>
                </div>
            </div>
        </div>`;
    }

    /* ── Editor Buffer Helpers ────────────────────────────────── */

    function _bufSet(key, val) { if (_editBuffer) _editBuffer[key] = val; }

    function _bufSetObjectives(text) {
        if (_editBuffer) _editBuffer.learningObjectives = text.split('\n').map(l => l.trim()).filter(Boolean);
    }

    function _bufQ(section, idx, path, val) {
        if (!_editBuffer?.[section]?.[idx]) return;
        const parts = path.split('.');
        let obj = _editBuffer[section][idx];
        for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
        obj[parts[parts.length - 1]] = val;
    }

    function _bufQCorrect(section, idx, correctIdx) {
        if (!_editBuffer?.[section]?.[idx]?.options) return;
        _editBuffer[section][idx].options.forEach((o, i) => { o.correct = (i === correctIdx); });
    }

    function _bufFC(idx, key, val) {
        if (_editBuffer?.summary?.flashcards?.[idx]) _editBuffer.summary.flashcards[idx][key] = val;
    }

    function _editorAddQuestion(section) {
        if (!_editBuffer) return;
        if (!_editBuffer[section]) _editBuffer[section] = [];
        const newQ = { prompt: 'Nova questão', options: [
            {text:'Opção A',correct:true},{text:'Opção B',correct:false},
            {text:'Opção C',correct:false},{text:'Opção D',correct:false}
        ], explanation: 'Explicação da resposta correta.' };
        _editBuffer[section].push(newQ);
        const list = document.getElementById(`ed-${section}-list`);
        if (list) list.insertAdjacentHTML('beforeend', _buildQuestionEditor(section, _editBuffer[section].length - 1, newQ));
    }

    function _editorRemoveQuestion(section, idx) {
        if (!_editBuffer?.[section]) return;
        _editBuffer[section].splice(idx, 1);
        const list = document.getElementById(`ed-${section}-list`);
        if (list) list.innerHTML = _editBuffer[section].map((q, i) => _buildQuestionEditor(section, i, q)).join('');
    }

    function _editorAddFlashcard() {
        if (!_editBuffer) return;
        if (!_editBuffer.summary) _editBuffer.summary = {};
        if (!_editBuffer.summary.flashcards) _editBuffer.summary.flashcards = [];
        const newFC = { q: 'Pergunta', a: 'Resposta' };
        _editBuffer.summary.flashcards.push(newFC);
        const list = document.getElementById('ed-flashcard-list');
        if (list) list.insertAdjacentHTML('beforeend', _buildFlashcardEditor(_editBuffer.summary.flashcards.length - 1, newFC));
    }

    function _editorRemoveFlashcard(idx) {
        if (!_editBuffer?.summary?.flashcards) return;
        _editBuffer.summary.flashcards.splice(idx, 1);
        const list = document.getElementById('ed-flashcard-list');
        if (list) list.innerHTML = _editBuffer.summary.flashcards.map((fc, i) => _buildFlashcardEditor(i, fc)).join('');
    }

    function _applyStageEdit() {
        if (!_editBuffer || !_editVarName) return;
        window[_editVarName] = JSON.parse(JSON.stringify(_editBuffer));
        _editorToast('✅ Aplicado! O estágio foi atualizado na sessão. Feche e teste no jogo.');
    }

    function _exportStageJS() {
        if (!_editBuffer || !_editVarName) return;
        const varName = _editVarName;
        const content = `// ${varName} — ${_editBuffer.title || varName}\n// Exportado pelo EduQuest Admin em ${new Date().toLocaleString('pt-BR')}\n\nconst ${varName} = ${JSON.stringify(_editBuffer, null, 2)};\n\nwindow.${varName} = ${varName};\n`;
        const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `${varName.toLowerCase()}.js`;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);
        _editorToast(`⬇ ${varName.toLowerCase()}.js baixado! Substitua o arquivo original no repositório.`);
    }

    function _editorToast(msg) {
        const t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:12px 24px;border-radius:8px;font-size:0.88rem;font-weight:600;z-index:3000;box-shadow:0 4px 24px rgba(0,0,0,0.5);white-space:nowrap';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 4000);
    }

    function _closeStageEditor() {
        document.getElementById('stage-editor-overlay')?.remove();
        _editBuffer = null;
        _editVarName = null;
    }

    function _contentNav(tab, chapterId, stageVar) {
        _contentTab       = tab || 'chapters';
        _contentChapterId = chapterId || null;
        _contentStageVar  = stageVar  || null;
        const main = document.getElementById('admin-main');
        if (main) main.innerHTML = _renderContent();
    }

    /* ── CRUD Helpers ────────────────────────────────────────── */

    function _confirmModal(title, msg, onConfirm) {
        document.getElementById('admin-confirm-modal')?.remove();
        const m = document.createElement('div');
        m.id = 'admin-confirm-modal';
        m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:4000;display:flex;align-items:center;justify-content:center';
        m.innerHTML = `
        <div style="background:#1e293b;border:1px solid #ef4444;border-radius:12px;padding:24px;width:420px;max-width:95vw">
            <div style="font-size:1rem;font-weight:700;color:#f1f5f9;margin-bottom:8px">${title}</div>
            <div style="font-size:0.84rem;color:#94a3b8;margin-bottom:20px;line-height:1.55">${msg}</div>
            <div style="display:flex;gap:8px;justify-content:flex-end">
                <button onclick="document.getElementById('admin-confirm-modal').remove()" class="admin-topbar-btn admin-topbar-btn-ghost">Cancelar</button>
                <button id="admin-confirm-yes" class="admin-topbar-btn admin-topbar-btn-primary" style="background:#ef4444;border-color:#ef4444">Excluir</button>
            </div>
        </div>`;
        document.body.appendChild(m);
        document.getElementById('admin-confirm-yes').onclick = () => { m.remove(); onConfirm(); };
        m.addEventListener('click', e => { if (e.target === m) m.remove(); });
    }

    /* ── CRUD: Create Chapter ─────────────────────────────────── */

    function _openCreateChapter() {
        document.getElementById('crud-modal')?.remove();
        const subjects = ['ciencias','matematica','historia','portugues','geografia','outro'];
        const subjectLabels = { ciencias:'Ciências', matematica:'Matemática', historia:'História', portugues:'Português', geografia:'Geografia', outro:'Outro' };
        const m = document.createElement('div');
        m.id = 'crud-modal';
        m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:3000;display:flex;align-items:center;justify-content:center';
        m.innerHTML = `
        <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:28px;width:540px;max-width:95vw;max-height:85vh;overflow-y:auto">
            <div style="font-size:1.05rem;font-weight:700;color:#f1f5f9;margin-bottom:18px">📚 Novo Capítulo</div>
            <div style="display:grid;gap:12px">
                <div style="display:grid;grid-template-columns:1fr 70px;gap:12px">
                    <div><label class="bld-label">Título do Capítulo</label>
                        <input id="cc-title" type="text" placeholder="ex: O Sistema Solar" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
                    <div><label class="bld-label">Ícone</label>
                        <input id="cc-icon" type="text" value="📚" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:1.4rem;text-align:center;box-sizing:border-box"></div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                    <div><label class="bld-label">Matéria</label>
                        <select id="cc-subject" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${subjects.map(s=>`<option value="${s}">${subjectLabels[s]}</option>`).join('')}
                        </select></div>
                    <div><label class="bld-label">Ano Escolar</label>
                        <select id="cc-grade" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['6ano','7ano','8ano','9ano','1em','2em'].map((g,i)=>`<option value="${g}"${i===1?' selected':''}>${['6º','7º','8º','9º','1º EM','2º EM'][i]} Ano</option>`).join('')}
                        </select></div>
                </div>
                <div><label class="bld-label">Descrição</label>
                    <textarea id="cc-desc" rows="2" placeholder="Descrição curta do capítulo para o aluno..."
                    style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;resize:vertical;box-sizing:border-box;font-size:0.85rem"></textarea></div>
                <div><label class="bld-label">Lore / Introdução Narrativa</label>
                    <textarea id="cc-lore" rows="3" placeholder="Narrativa de introdução (estilo RPG)..."
                    style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;resize:vertical;box-sizing:border-box;font-size:0.85rem"></textarea></div>
            </div>
            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px">
                <button onclick="document.getElementById('crud-modal').remove()" class="admin-topbar-btn admin-topbar-btn-ghost">Cancelar</button>
                <button onclick="EduAdmin._saveNewChapter()" class="admin-topbar-btn admin-topbar-btn-primary">Criar Capítulo</button>
            </div>
        </div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target===m) m.remove(); });
    }

    function _saveNewChapter() {
        const title   = document.getElementById('cc-title')?.value?.trim();
        const icon    = document.getElementById('cc-icon')?.value?.trim() || '📚';
        const subject = document.getElementById('cc-subject')?.value || 'outro';
        const grade   = document.getElementById('cc-grade')?.value || '7ano';
        const desc    = document.getElementById('cc-desc')?.value?.trim() || '';
        const lore    = document.getElementById('cc-lore')?.value?.trim() || '';
        if (!title) { _editorToast('⚠️ Informe o título do capítulo'); return; }
        const id = `${subject}_${Date.now()}`;
        const meta = {
            id, title, subject, grade, icon, description: desc,
            totalStages: 0, stages: [],
            lore: { intro: lore, boss: '', victory: '' },
        };
        window.CHAPTERS_REGISTRY = window.CHAPTERS_REGISTRY || {};
        window.CHAPTERS_REGISTRY[id] = meta;
        document.getElementById('crud-modal')?.remove();
        _editorToast(`✅ Capítulo "${title}" criado!`);
        _contentNav('chapters');
    }

    function _confirmDeleteChapter(chapterId) {
        const chapter = (window.CHAPTERS_REGISTRY || {})[chapterId];
        if (!chapter) return;
        _confirmModal(
            '🗑 Excluir Capítulo',
            `Excluir <strong style="color:#f1f5f9">${_esc(chapter.title)}</strong> e todos os seus ${chapter.stages?.length || 0} estágios?<br><br>Esta ação não pode ser desfeita.`,
            () => {
                (chapter.stages || []).forEach(s => { delete window[s.varName]; });
                delete window.CHAPTERS_REGISTRY[chapterId];
                _editorToast(`🗑 Capítulo "${chapter.title}" excluído.`);
                _contentNav('chapters');
            }
        );
    }

    /* ── CRUD: Create Stage ───────────────────────────────────── */

    function _openCreateStage(chapterId) {
        document.getElementById('crud-modal')?.remove();
        const chapter = (window.CHAPTERS_REGISTRY || {})[chapterId];
        if (!chapter) { _editorToast('Capítulo não encontrado'); return; }
        const stageNum = (chapter.stages?.length || 0) + 1;
        const prefix   = chapterId.split('_')[0].toUpperCase().substring(0, 4);
        const m = document.createElement('div');
        m.id = 'crud-modal';
        m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:3000;display:flex;align-items:center;justify-content:center';
        m.innerHTML = `
        <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:28px;width:500px;max-width:95vw">
            <div style="font-size:1.05rem;font-weight:700;color:#f1f5f9;margin-bottom:6px">🗺️ Novo Estágio</div>
            <div style="font-size:0.78rem;color:#64748b;margin-bottom:18px">Capítulo: <strong style="color:#f1f5f9">${_esc(chapter.title)}</strong></div>
            <div style="display:grid;gap:12px">
                <div style="display:grid;grid-template-columns:1fr 70px;gap:12px">
                    <div><label class="bld-label">Título do Estágio</label>
                        <input id="cs-title" type="text" placeholder="ex: Sistema Digestório" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
                    <div><label class="bld-label">Ícone</label>
                        <input id="cs-icon" type="text" value="⚔️" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:1.4rem;text-align:center;box-sizing:border-box"></div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr 100px;gap:12px">
                    <div><label class="bld-label">ID da variável</label>
                        <input id="cs-var" type="text" value="${prefix}_S${stageNum}" placeholder="${prefix}_S${stageNum}" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-family:monospace;box-sizing:border-box"></div>
                    <div><label class="bld-label">Dificuldade</label>
                        <select id="cs-diff" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['easy','medium','hard','boss'].map(d=>`<option value="${d}">${d}</option>`).join('')}
                        </select></div>
                    <div><label class="bld-label">Tempo (min)</label>
                        <input id="cs-time" type="number" value="12" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
                </div>
                <div style="display:flex;gap:12px">
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.82rem;color:#f1f5f9">
                        <input type="checkbox" id="cs-boss" style="accent-color:#f97316"> Estágio Chefe 💀</label>
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.82rem;color:#f1f5f9">
                        <input type="checkbox" id="cs-final" style="accent-color:#f97316"> Estágio Final 🏆</label>
                </div>
            </div>
            <input type="hidden" id="cs-chapter" value="${chapterId}">
            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px">
                <button onclick="document.getElementById('crud-modal').remove()" class="admin-topbar-btn admin-topbar-btn-ghost">Cancelar</button>
                <button onclick="EduAdmin._saveNewStage()" class="admin-topbar-btn admin-topbar-btn-primary">Criar Estágio</button>
            </div>
        </div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target===m) m.remove(); });
    }

    function _saveNewStage() {
        const chapterId = document.getElementById('cs-chapter')?.value;
        const title     = document.getElementById('cs-title')?.value?.trim();
        const icon      = document.getElementById('cs-icon')?.value?.trim() || '⚔️';
        const varName   = (document.getElementById('cs-var')?.value?.trim() || '').toUpperCase().replace(/\s+/g,'_');
        const diff      = document.getElementById('cs-diff')?.value || 'medium';
        const time      = parseInt(document.getElementById('cs-time')?.value) || 12;
        const isBoss    = document.getElementById('cs-boss')?.checked || false;
        const isFinal   = document.getElementById('cs-final')?.checked || false;
        if (!title)   { _editorToast('⚠️ Informe o título'); return; }
        if (!varName) { _editorToast('⚠️ Informe o ID da variável'); return; }
        if (window[varName]) { _editorToast(`⚠️ Variável ${varName} já existe`); return; }
        const chapter = (window.CHAPTERS_REGISTRY || {})[chapterId];
        if (!chapter) { _editorToast('Capítulo não encontrado'); return; }
        const stageId = varName.toLowerCase();
        const stageData = {
            id: stageId, title, icon, difficulty: diff, estimatedTime: time,
            learningObjectives: [],
            summary: { readTime: 3, content: [], flashcards: [], mnemonics: [], miniReview: [] },
            warmup: [], guidedPractice: [], questions: [], adaptiveReview: [],
            rewards: { xp: 100, gems: 10, badge: `${icon} ${title}` },
            completionMessage: `🎉 Você completou ${title}!`,
            nextStage: '',
        };
        window[varName] = stageData;
        if (!chapter.stages) chapter.stages = [];
        const index = chapter.stages.length + 1;
        chapter.stages.push({ index, id: stageId, varName, isBoss, isFinal });
        chapter.totalStages = chapter.stages.length;
        document.getElementById('crud-modal')?.remove();
        _editorToast(`✅ Estágio "${title}" criado! Abra o editor para adicionar conteúdo.`);
        _contentNav('stages', chapterId);
    }

    function _confirmDeleteStage(chapterId, varName) {
        const sd = window[varName];
        const title = sd?.title || varName;
        _confirmModal(
            '🗑 Excluir Estágio',
            `Excluir o estágio <strong style="color:#f1f5f9">${_esc(title)}</strong>?<br><br>Esta ação não pode ser desfeita.`,
            () => {
                delete window[varName];
                const chapter = (window.CHAPTERS_REGISTRY || {})[chapterId];
                if (chapter?.stages) {
                    chapter.stages = chapter.stages.filter(s => s.varName !== varName);
                    chapter.totalStages = chapter.stages.length;
                }
                _editorToast(`🗑 Estágio "${title}" excluído.`);
                _contentNav('stages', chapterId);
            }
        );
    }

    /* ── Content renders with full CRUD ──────────────────────── */

    function _renderContentChapters(data) {
        const sc = { ciencias:'green', matematica:'blue', historia:'orange', portugues:'purple', geografia:'yellow' };
        return `
        <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
            <button onclick="EduAdmin._openCreateChapter()" class="admin-topbar-btn admin-topbar-btn-primary">+ Novo Capítulo</button>
        </div>
        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Capítulo</th><th>Matéria</th><th>Ano</th><th>Estágios</th><th>Questões</th><th>Flashcards</th><th>Status</th><th>Ações</th></tr></thead>
                <tbody>${data.map(c => {
                    const reg = (window.CHAPTERS_REGISTRY || {})[c.id] || {};
                    const published = reg.published !== false;
                    const statusBadge = published ? badge('Publicado','green') : badge('Despublicado','red');
                    return `
                <tr>
                    <td><div style="display:flex;align-items:center;gap:8px"><span style="font-size:1.2rem">${c.icon}</span><strong>${c.title}</strong></div></td>
                    <td>${badge(c.subjectLabel, sc[c.subject] || 'grey')}</td>
                    <td>${c.grade}</td>
                    <td>${c.stagesLoaded}/${c.totalStages}</td>
                    <td>${c.questionCount}</td>
                    <td>${c.flashcardCount}</td>
                    <td>${statusBadge}</td>
                    <td style="display:flex;gap:4px;flex-wrap:wrap">
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._contentNav('stages','${c.id}')" style="padding:4px 10px;font-size:0.7rem" title="Ver estágios">Ver →</button>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._expandChapterView('${c.id}')" style="padding:4px 10px;font-size:0.7rem" title="Expandir tudo">⊞</button>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._openEditChapter('${c.id}')" style="padding:4px 10px;font-size:0.7rem" title="Editar capítulo">✏️</button>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._togglePublishChapter('${c.id}')" style="padding:4px 10px;font-size:0.7rem;color:${published ? '#f59e0b' : '#22c55e'}" title="${published ? 'Despublicar' : 'Publicar'}">${published ? '⛔' : '✅'}</button>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._confirmDeleteChapter('${c.id}')" style="padding:4px 10px;font-size:0.7rem;color:#ef4444" title="Excluir">🗑</button>
                    </td>
                </tr>`; }).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── CRUD: Edit Chapter ────────────────────────────────── */

    function _openEditChapter(chapterId) {
        const reg = (window.CHAPTERS_REGISTRY || {})[chapterId];
        if (!reg) { _editorToast('⚠️ Capítulo não encontrado.'); return; }
        document.getElementById('crud-modal')?.remove();
        const m = document.createElement('div');
        m.id = 'crud-modal';
        m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:3000;display:flex;align-items:center;justify-content:center';
        const gradeVal = (reg.grade || '').includes('8') ? '8ano' : (reg.grade || '').includes('9') ? '9ano' : '7ano';
        m.innerHTML = `
        <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:28px;width:540px;max-width:95vw;max-height:85vh;overflow-y:auto">
            <div style="font-size:1.05rem;font-weight:700;color:#f1f5f9;margin-bottom:18px">✏️ Editar Capítulo</div>
            <div style="display:grid;gap:12px">
                <div style="display:grid;grid-template-columns:1fr 70px;gap:12px">
                    <div><label class="bld-label">Título</label>
                        <input id="ec-title" type="text" value="${_esc(reg.title||'')}" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
                    <div><label class="bld-label">Ícone</label>
                        <input id="ec-icon" type="text" value="${_esc(reg.icon||'📚')}" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:1.3rem;text-align:center;box-sizing:border-box"></div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr 100px;gap:12px">
                    <div><label class="bld-label">Cor (hex)</label>
                        <input id="ec-color" type="text" value="${_esc(reg.color||'#64748b')}" placeholder="#f97316" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-family:monospace;box-sizing:border-box"></div>
                    <div><label class="bld-label">Matéria</label>
                        <select id="ec-subject" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['ciencias','matematica','historia','portugues','geografia','outro'].map(s => `<option value="${s}" ${reg.subject===s?'selected':''}>${{ciencias:'Ciências',matematica:'Matemática',historia:'História',portugues:'Português',geografia:'Geografia',outro:'Outro'}[s]}</option>`).join('')}
                        </select></div>
                    <div><label class="bld-label">Ano</label>
                        <select id="ec-grade" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['6ano','7ano','8ano','9ano'].map((g,i)=>`<option value="${g}" ${gradeVal===g?'selected':''}>${['6º','7º','8º','9º'][i]} Ano</option>`).join('')}
                        </select></div>
                </div>
                <div><label class="bld-label">Descrição</label>
                    <textarea id="ec-desc" rows="2" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;resize:vertical;box-sizing:border-box;font-size:0.85rem">${_esc(reg.description||'')}</textarea></div>
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.85rem;color:#f1f5f9">
                    <input type="checkbox" id="ec-unlocked" ${(reg.published!==false)?'checked':''} style="accent-color:#f97316">
                    Publicado (visível para alunos)</label>
            </div>
            <input type="hidden" id="ec-id" value="${chapterId}">
            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px">
                <button onclick="document.getElementById('crud-modal').remove()" class="admin-topbar-btn admin-topbar-btn-ghost">Cancelar</button>
                <button onclick="EduAdmin._saveChapterEdit()" class="admin-topbar-btn admin-topbar-btn-primary">Salvar</button>
            </div>
        </div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) m.remove(); });
    }

    function _saveChapterEdit() {
        const id      = document.getElementById('ec-id')?.value;
        const reg     = (window.CHAPTERS_REGISTRY || {})[id];
        if (!reg) return;
        const title   = document.getElementById('ec-title')?.value?.trim() || reg.title;
        const icon    = document.getElementById('ec-icon')?.value?.trim()  || reg.icon;
        const color   = document.getElementById('ec-color')?.value?.trim() || reg.color;
        const subject = document.getElementById('ec-subject')?.value        || reg.subject;
        const grade   = document.getElementById('ec-grade')?.value          || '';
        const desc    = document.getElementById('ec-desc')?.value?.trim()   || '';
        const pub     = document.getElementById('ec-unlocked')?.checked;
        const gradeLabel = { '6ano':'6º Ano','7ano':'7º Ano','8ano':'8º Ano','9ano':'9º Ano' }[grade] || grade;
        reg.title = title; reg.icon = icon; reg.color = color;
        reg.subject = subject; reg.grade = grade; reg.description = desc;
        reg.published = pub;
        // Sync into CONFIG.subjects
        (CONFIG.subjects || []).forEach(s => {
            const ch = s.chapters.find(c => c.id === id);
            if (ch) { ch.title = title; ch.icon = icon; ch.description = desc; ch.unlocked = pub; }
        });
        document.getElementById('crud-modal')?.remove();
        _editorToast('✅ Capítulo atualizado! Mudanças visíveis para alunos imediatamente.');
        _contentNav('chapters');
    }

    /* ── CRUD: Toggle Publish ─────────────────────────────── */

    function _togglePublishChapter(chapterId) {
        const reg = (window.CHAPTERS_REGISTRY || {})[chapterId];
        if (!reg) return;
        reg.published = reg.published === false ? true : false;
        (CONFIG.subjects || []).forEach(s => {
            const ch = s.chapters.find(c => c.id === chapterId);
            if (ch) ch.unlocked = reg.published !== false;
        });
        _editorToast(reg.published === false
            ? `⛔ "${reg.title}" despublicado — não aparece para alunos.`
            : `✅ "${reg.title}" publicado — visível para alunos.`);
        _contentNav('chapters');
    }

    /* ── Expand Chapter: full content view ───────────────── */

    function _expandChapterView(chapterId) {
        _contentChapterId = chapterId;
        _contentTab = 'expand';
        const main = document.getElementById('admin-main');
        if (main) main.innerHTML = _renderContent();
    }

    function _renderContentExpand(chapterId, data) {
        const chapter = data.find(c => c.id === chapterId);
        if (!chapter) return `<div style="padding:40px;text-align:center;color:#94a3b8">Capítulo não encontrado.</div>`;
        const dc = { easy:'green', medium:'blue', hard:'orange', boss:'red' };
        const stagesHTML = chapter.stages.map((s, si) => {
            const sd = window[s.varName];
            if (!sd) return `<div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:14px;margin-bottom:10px;color:#94a3b8;font-style:italic">${s.id} — não carregado</div>`;
            const totalQ = (sd.warmup?.length||0)+(sd.guidedPractice?.length||0)+(sd.questions?.length||0)+(sd.adaptiveReview?.length||0);
            const fcs = sd.summary?.flashcards || [];
            const mnems = sd.summary?.mnemonics || [];
            const secs = [
                { label:'🔥 Aquecimento',        key:'warmup',         qs: sd.warmup||[] },
                { label:'🔍 Prática Guiada',     key:'guidedPractice', qs: sd.guidedPractice||[] },
                { label:'⚔️ Questões',            key:'questions',      qs: sd.questions||[] },
                { label:'🧠 Revisão Adaptativa',  key:'adaptiveReview', qs: sd.adaptiveReview||[] },
            ].filter(sec => sec.qs.length);
            return `
            <details style="background:#0f172a;border:1px solid #334155;border-radius:8px;margin-bottom:10px;overflow:hidden" ${si===0?'open':''}>
                <summary style="padding:14px 18px;cursor:pointer;display:flex;align-items:center;gap:10px;list-style:none;outline:none">
                    <span style="font-size:1.1rem">${sd.icon||'📖'}</span>
                    <strong style="color:#f1f5f9">${sd.title}</strong>
                    ${s.isBoss?'<span style="color:#ef4444;font-size:0.75rem">💀 CHEFE</span>':''}
                    ${s.isFinal?'<span style="color:#f59e0b;font-size:0.75rem">🏆 FINAL</span>':''}
                    <span style="margin-left:auto;font-size:0.72rem;color:#64748b">${badge(sd.difficulty||'medium',dc[sd.difficulty||'medium']||'grey')} · ${totalQ} questões · ${fcs.length} FC · ${sd.estimatedTime||'—'}min</span>
                </summary>
                <div style="padding:0 18px 18px">
                    ${sd.learningObjectives?.length ? `
                    <div style="margin-bottom:12px"><div style="font-size:0.72rem;font-weight:700;color:#64748b;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Objetivos de Aprendizagem</div>
                    ${sd.learningObjectives.map(o=>`<div style="font-size:0.8rem;color:#94a3b8;padding:2px 0">• ${_esc(o)}</div>`).join('')}</div>` : ''}
                    ${fcs.length ? `
                    <div style="margin-bottom:12px"><div style="font-size:0.72rem;font-weight:700;color:#f97316;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">🃏 Flashcards (${fcs.length})</div>
                    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:6px">
                    ${fcs.map(fc=>`<div style="background:#1e293b;border:1px solid #334155;border-radius:6px;padding:8px;font-size:0.78rem"><div style="color:#f97316;font-weight:700;margin-bottom:3px">${_esc(fc.q||'')}</div><div style="color:#94a3b8">${_esc(fc.a||'')}</div></div>`).join('')}
                    </div></div>` : ''}
                    ${mnems.length ? `
                    <div style="margin-bottom:12px"><div style="font-size:0.72rem;font-weight:700;color:#8b5cf6;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">🧠 Mnemônicos (${mnems.length})</div>
                    ${mnems.map(m=>`<div style="background:#1e293b;border:1px solid #334155;border-radius:6px;padding:8px;font-size:0.78rem;margin-bottom:4px"><strong style="color:#c4b5fd">${_esc(m.trigger||'')}</strong> → <span style="color:#94a3b8">${_esc(m.memory||'')}</span></div>`).join('')}
                    </div>` : ''}
                    ${secs.map(sec => `
                    <div style="margin-bottom:10px"><div style="font-size:0.72rem;font-weight:700;color:#64748b;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">${sec.label} — ${sec.qs.length}</div>
                    <table class="admin-table" style="font-size:0.76rem">
                        <thead><tr><th>#</th><th>Enunciado</th><th>Correta</th><th>Explicação</th></tr></thead>
                        <tbody>${sec.qs.map((q,i)=>`<tr>
                            <td style="color:#64748b;width:30px">${i+1}</td>
                            <td style="max-width:240px">${_esc((q.prompt||'').substring(0,120))}</td>
                            <td style="max-width:160px;color:#22c55e">${_esc((q.options||[]).find(o=>o.correct)?.text||'—')}</td>
                            <td style="max-width:180px;color:#64748b;font-style:italic">${_esc((q.explanation||'').substring(0,90))}</td>
                        </tr>`).join('')}</tbody>
                    </table></div>`).join('')}
                    <div style="display:flex;gap:8px;margin-top:10px">
                        <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._openStageEditor('${s.varName}')" style="padding:5px 12px;font-size:0.75rem">✏️ Editar Stage</button>
                        <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._contentNav('questions','${chapterId}','${s.varName}')" style="padding:5px 12px;font-size:0.75rem">Ver Questões</button>
                    </div>
                </div>
            </details>`;
        }).join('');
        return `
        <div style="margin-bottom:14px;display:flex;align-items:center;gap:10px">
            <span style="font-size:1.5rem">${chapter.icon}</span>
            <strong style="font-size:1rem;color:#f1f5f9">${chapter.title}</strong>
            <span style="font-size:0.78rem;color:#64748b">· ${chapter.stagesLoaded} estágios · ${chapter.questionCount} questões · ${chapter.flashcardCount} flashcards</span>
            <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._openEditChapter('${chapterId}')" style="padding:4px 10px;font-size:0.72rem;margin-left:auto">✏️ Editar</button>
        </div>
        ${stagesHTML}`;
    }

    function _renderContentStages(chapterId, data) {
        const chapter = (data || _loadContentData()).find(c => c.id === chapterId);
        if (!chapter) return `<div style="padding:40px;text-align:center;color:#94a3b8">Capítulo não encontrado.</div>`;
        const dc = { easy:'green', medium:'blue', hard:'orange', boss:'red' };
        const hasApproval = typeof EduBuilder !== 'undefined';
        return `
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-bottom:12px">
            <button onclick="EduAdmin._expandChapterView('${chapterId}')" class="admin-topbar-btn admin-topbar-btn-ghost">⊞ Expandir Tudo</button>
            <button onclick="EduAdmin._openCreateStage('${chapterId}')" class="admin-topbar-btn admin-topbar-btn-primary">+ Novo Estágio</button>
        </div>
        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Estágio</th><th>Dificuldade</th><th>Tempo</th><th>Total Questões</th><th>Flashcards</th><th>Status</th><th>Ações</th></tr></thead>
                <tbody>${chapter.stages.map(s => {
                    const sd = window[s.varName];
                    if (!sd) return `<tr><td colspan="7" style="color:#94a3b8;font-style:italic;padding:12px">${s.id} — não carregado</td></tr>`;
                    const total = (sd.warmup?.length||0) + (sd.guidedPractice?.length||0) + (sd.questions?.length||0) + (sd.adaptiveReview?.length||0);
                    const fc    = sd.summary?.flashcards?.length || 0;
                    const diff  = sd.difficulty || (s.isBoss ? 'boss' : 'medium');
                    const apprBadge = hasApproval ? EduBuilder.getStatusBadge(s.varName) : badge('Publicado','green');
                    return `<tr>
                        <td><span style="font-size:1.1rem">${sd.icon||'📖'}</span> <strong>${sd.title}</strong>${s.isBoss?' <span style="color:#ef4444">💀</span>':''}${s.isFinal?' <span style="color:#f59e0b">🏆</span>':''}</td>
                        <td>${badge(diff, dc[diff]||'grey')}</td>
                        <td>${sd.estimatedTime||'—'}min</td>
                        <td>${total}</td>
                        <td>${fc}</td>
                        <td>${apprBadge}</td>
                        <td style="display:flex;gap:4px;flex-wrap:wrap">
                            <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._contentNav('questions','${chapterId}','${s.varName}')" style="padding:4px 8px;font-size:0.7rem">Ver</button>
                            <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._openStageEditor('${s.varName}')" style="padding:4px 8px;font-size:0.7rem">✏️</button>
                            <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._confirmDeleteStage('${chapterId}','${s.varName}')" style="padding:4px 8px;font-size:0.7rem;color:#ef4444">🗑</button>
                        </td>
                    </tr>`;
                }).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Enhanced Stage Editor: Summary Cards + Media + Approval ─ */

    function _buildSummaryCardsEditor(sd) {
        const cards = sd.summary?.content || [];
        return `
        <div style="margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <h4 style="margin:0;color:#f97316;font-size:0.9rem">📋 Cards de Resumo <span style="color:#64748b;font-weight:400">(${cards.length})</span></h4>
                <button onclick="EduAdmin._addSummaryCard()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.75rem">+ Card</button>
            </div>
            <div id="ed-summary-list">${cards.map((c,i) => _buildSummaryCardEditor(i, c)).join('')}</div>
        </div>`;
    }

    function _buildSummaryCardEditor(idx, card) {
        return `
        <div id="sced-${idx}" style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <span style="font-size:0.7rem;color:#64748b;font-weight:700">CARD ${idx+1}</span>
                <button onclick="EduAdmin._removeSummaryCard(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.85rem;padding:2px 6px;border-radius:4px">✕</button>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;margin-bottom:8px">
                <div>
                    <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Ícone</label>
                    <input type="text" value="${_esc(card.icon||'')}" oninput="EduAdmin._bufSCard(${idx},'icon',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:1.2rem;text-align:center;box-sizing:border-box">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Título</label>
                    <input type="text" value="${_esc(card.title||'')}" oninput="EduAdmin._bufSCard(${idx},'title',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.85rem;box-sizing:border-box">
                </div>
            </div>
            <div>
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Texto (suporta \n para quebras, macetes, exemplos)</label>
                <textarea rows="3" oninput="EduAdmin._bufSCard(${idx},'text',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;resize:vertical;box-sizing:border-box">${_esc(card.text||'')}</textarea>
            </div>
        </div>`;
    }

    function _buildMediaEditor(sd) {
        const media = sd.media || {};
        return `
        <div style="display:grid;gap:12px">
            <div>
                <label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:3px">🖼️ Imagem de capa (URL)</label>
                <div style="display:flex;gap:8px">
                    <input type="text" id="ed-media-img" value="${_esc(media.coverImage||'')}" oninput="EduAdmin._bufMedia('coverImage',this.value)" placeholder="https://..."
                    style="flex:1;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;min-width:0;box-sizing:border-box">
                    <button onclick="EduAdmin._previewImage()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:6px 10px;flex-shrink:0">👁</button>
                </div>
                <div id="ed-img-preview" style="margin-top:6px;display:none"><img id="ed-img-el" style="max-height:120px;border-radius:6px;border:1px solid #334155" src=""></div>
            </div>
            <div>
                <label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:3px">🎥 Vídeo (YouTube / Vimeo URL)</label>
                <input type="text" value="${_esc(media.videoUrl||'')}" oninput="EduAdmin._bufMedia('videoUrl',this.value)" placeholder="https://www.youtube.com/watch?v=..."
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;box-sizing:border-box">
                ${media.videoUrl ? `<div style="margin-top:6px;font-size:0.75rem;color:#64748b">Embed: ${_esc(_getEmbedUrl(media.videoUrl))}</div>` : ''}
            </div>
            <div>
                <label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:3px">🎵 Áudio (URL)</label>
                <input type="text" value="${_esc(media.audioUrl||'')}" oninput="EduAdmin._bufMedia('audioUrl',this.value)" placeholder="https://... .mp3"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;box-sizing:border-box">
            </div>
        </div>`;
    }

    function _getEmbedUrl(url) {
        const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
        if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
        const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
        if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
        return url;
    }

    function _previewImage() {
        const url = document.getElementById('ed-media-img')?.value?.trim();
        const wrap = document.getElementById('ed-img-preview');
        const img  = document.getElementById('ed-img-el');
        if (!url || !wrap || !img) return;
        img.src = url;
        wrap.style.display = url ? 'block' : 'none';
    }

    function _bufMedia(key, val) {
        if (!_editBuffer) return;
        if (!_editBuffer.media) _editBuffer.media = {};
        _editBuffer.media[key] = val;
    }

    function _bufSCard(idx, key, val) {
        if (!_editBuffer?.summary?.content?.[idx]) return;
        _editBuffer.summary.content[idx][key] = val;
    }

    function _addSummaryCard() {
        if (!_editBuffer) return;
        if (!_editBuffer.summary) _editBuffer.summary = {};
        if (!_editBuffer.summary.content) _editBuffer.summary.content = [];
        const nc = { icon:'📌', title:'Novo Card', text:'Conteúdo do card...' };
        _editBuffer.summary.content.push(nc);
        const list = document.getElementById('ed-summary-list');
        if (list) list.insertAdjacentHTML('beforeend', _buildSummaryCardEditor(_editBuffer.summary.content.length - 1, nc));
    }

    function _removeSummaryCard(idx) {
        if (!_editBuffer?.summary?.content) return;
        _editBuffer.summary.content.splice(idx, 1);
        const list = document.getElementById('ed-summary-list');
        if (list) list.innerHTML = _editBuffer.summary.content.map((c,i) => _buildSummaryCardEditor(i, c)).join('');
    }

    /* ── Question Type-aware Editor ───────────────────────────── */

    const QTYPES = [
        { id:'multiple_choice', label:'Múltipla Escolha', icon:'🔘' },
        { id:'true_false',      label:'Verdadeiro/Falso', icon:'✅' },
        { id:'fill_blank',      label:'Completar Lacuna', icon:'✍️' },
        { id:'short_answer',    label:'Resposta Curta',   icon:'💬' },
        { id:'ordering',        label:'Ordenar Items',    icon:'🔢' },
        { id:'matching',        label:'Correspondência',  icon:'🔗' },
        { id:'scale',           label:'Escala (1-5)',     icon:'📊' },
    ];

    /* Override _buildQuestionEditor to be type-aware */
    function _buildQuestionEditor(section, idx, q) {
        const qtype = q.type || 'multiple_choice';
        const opts  = q.options || [{text:'',correct:true},{text:'',correct:false},{text:'',correct:false},{text:'',correct:false}];
        const bodyHTML = _buildQTypeBody(section, idx, qtype, q, opts);
        return `
        <div id="qed-${section}-${idx}" style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:14px;margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <div style="display:flex;align-items:center;gap:8px">
                    <span style="font-size:0.7rem;color:#64748b;font-weight:700">Q${idx+1}</span>
                    <select onchange="EduAdmin._changeQType('${section}',${idx},this.value)"
                    style="background:#1e293b;border:1px solid #334155;color:#f97316;padding:3px 6px;border-radius:5px;font-size:0.75rem">
                        ${QTYPES.map(t=>`<option value="${t.id}" ${qtype===t.id?'selected':''}>${t.icon} ${t.label}</option>`).join('')}
                    </select>
                </div>
                <button onclick="EduAdmin._editorRemoveQuestion('${section}',${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.9rem;padding:2px 6px;border-radius:4px">✕</button>
            </div>
            <div style="margin-bottom:10px">
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Enunciado ${qtype==='fill_blank'?'(use ___ para indicar a lacuna)':''}</label>
                <textarea rows="2" oninput="EduAdmin._bufQ('${section}',${idx},'prompt',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc(q.prompt||'')}</textarea>
            </div>
            ${bodyHTML}
            <div style="margin-top:10px">
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Explicação (feedback pós-resposta)</label>
                <textarea rows="2" oninput="EduAdmin._bufQ('${section}',${idx},'explanation',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc(q.explanation||'')}</textarea>
            </div>
            ${q.imageUrl !== undefined ? `<div style="margin-top:8px">
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">🖼️ URL de imagem para esta questão (opcional)</label>
                <input type="text" value="${_esc(q.imageUrl||'')}" oninput="EduAdmin._bufQ('${section}',${idx},'imageUrl',this.value)" placeholder="https://..."
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box">
            </div>` : ''}
        </div>`;
    }

    function _buildQTypeBody(section, idx, qtype, q, opts) {
        if (qtype === 'multiple_choice') {
            return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                ${opts.slice(0,4).map((o,oi)=>`<div style="display:flex;align-items:center;gap:6px">
                    <input type="radio" name="correct-${section}-${idx}" value="${oi}" ${o.correct?'checked':''} onchange="EduAdmin._bufQCorrect('${section}',${idx},${oi})" style="accent-color:#f97316;flex-shrink:0" title="Correta">
                    <input type="text" value="${_esc(o.text||'')}" oninput="EduAdmin._bufQ('${section}',${idx},'options.${oi}.text',this.value)" placeholder="Opção ${String.fromCharCode(65+oi)}"
                    style="flex:1;background:#1e293b;border:1px solid ${o.correct?'#22c55e':'#334155'};color:#f1f5f9;padding:6px 8px;border-radius:6px;font-size:0.8rem;min-width:0;box-sizing:border-box">
                </div>`).join('')}
            </div>`;
        }
        if (qtype === 'true_false') {
            const isTrue = q.options?.[0]?.correct ?? (q.correct === true);
            return `<div style="display:flex;gap:12px">
                <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.85rem;color:#f1f5f9;background:#1e293b;border:1px solid ${isTrue?'#22c55e':'#334155'};padding:8px 16px;border-radius:6px;flex:1;justify-content:center">
                    <input type="radio" name="tf-${section}-${idx}" value="true" ${isTrue?'checked':''} onchange="EduAdmin._bufQTrueFalse('${section}',${idx},true)" style="accent-color:#22c55e">
                    ✅ Verdadeiro
                </label>
                <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.85rem;color:#f1f5f9;background:#1e293b;border:1px solid ${!isTrue?'#ef4444':'#334155'};padding:8px 16px;border-radius:6px;flex:1;justify-content:center">
                    <input type="radio" name="tf-${section}-${idx}" value="false" ${!isTrue?'checked':''} onchange="EduAdmin._bufQTrueFalse('${section}',${idx},false)" style="accent-color:#ef4444">
                    ❌ Falso
                </label>
            </div>`;
        }
        if (qtype === 'fill_blank') {
            return `<div style="margin-bottom:8px">
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Resposta correta (palavra/frase para a lacuna)</label>
                <input type="text" value="${_esc(q.answer||'')}" oninput="EduAdmin._bufQ('${section}',${idx},'answer',this.value)" placeholder="A resposta esperada"
                style="width:100%;background:#1e293b;border:1px solid #22c55e;color:#22c55e;padding:8px;border-radius:6px;font-size:0.85rem;box-sizing:border-box;font-weight:700">
            </div>
            <div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Distratores (opções erradas)</label>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">
                ${[0,1,2].map(i=>{const o=opts[i+1]||{text:'',correct:false};return `<input type="text" value="${_esc(o.text||'')}" oninput="EduAdmin._bufQ('${section}',${idx},'options.${i+1}.text',this.value)" placeholder="Errado ${i+1}"
                style="background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box">`}).join('')}
            </div></div>`;
        }
        if (qtype === 'short_answer') {
            return `<div>
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Resposta modelo (referência para correção)</label>
                <textarea rows="2" oninput="EduAdmin._bufQ('${section}',${idx},'answer',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #22c55e;color:#22c55e;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc(q.answer||'')}</textarea>
            </div>`;
        }
        if (qtype === 'ordering') {
            const items = q.items || ['Item 1','Item 2','Item 3'];
            return `<div>
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:4px">Items na ordem CORRETA (de cima para baixo)</label>
                <div id="ord-${section}-${idx}">${items.map((item,i)=>`<div style="display:flex;gap:6px;margin-bottom:4px">
                    <span style="color:#64748b;font-size:0.75rem;padding:6px 4px;flex-shrink:0">${i+1}.</span>
                    <input type="text" value="${_esc(item)}" oninput="EduAdmin._bufQItem('${section}',${idx},${i},this.value)"
                    style="flex:1;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.82rem;box-sizing:border-box">
                    <button onclick="EduAdmin._removeQItem('${section}',${idx},${i})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.8rem;padding:0 4px">✕</button>
                </div>`).join('')}</div>
                <button onclick="EduAdmin._addQItem('${section}',${idx})" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:3px 8px;font-size:0.72rem;margin-top:4px">+ Item</button>
            </div>`;
        }
        if (qtype === 'matching') {
            const pairs = q.pairs || [{left:'Conceito',right:'Definição'}];
            return `<div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:4px">
                    <div style="font-size:0.7rem;color:#64748b;text-align:center">Coluna A</div>
                    <div style="font-size:0.7rem;color:#64748b;text-align:center">Coluna B</div>
                </div>
                <div id="match-${section}-${idx}">${pairs.map((p,i)=>`<div style="display:grid;grid-template-columns:1fr 24px 1fr;gap:4px;margin-bottom:4px;align-items:center">
                    <input type="text" value="${_esc(p.left||'')}" oninput="EduAdmin._bufQPair('${section}',${idx},${i},'left',this.value)"
                    style="background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box">
                    <span style="text-align:center;color:#f97316;font-size:0.85rem">→</span>
                    <input type="text" value="${_esc(p.right||'')}" oninput="EduAdmin._bufQPair('${section}',${idx},${i},'right',this.value)"
                    style="background:#1e293b;border:1px solid #22c55e;color:#22c55e;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box">
                </div>`).join('')}</div>
                <button onclick="EduAdmin._addQPair('${section}',${idx})" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:3px 8px;font-size:0.72rem;margin-top:4px">+ Par</button>
            </div>`;
        }
        if (qtype === 'scale') {
            const correct = q.correct ?? 3;
            return `<div style="display:grid;gap:10px">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                    <div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Label mínimo (1)</label>
                    <input type="text" value="${_esc(q.minLabel||'Discordo totalmente')}" oninput="EduAdmin._bufQ('${section}',${idx},'minLabel',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box"></div>
                    <div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Label máximo (5)</label>
                    <input type="text" value="${_esc(q.maxLabel||'Concordo totalmente')}" oninput="EduAdmin._bufQ('${section}',${idx},'maxLabel',this.value)"
                    style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:6px;border-radius:6px;font-size:0.8rem;box-sizing:border-box"></div>
                </div>
                <div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:4px">Valor correto esperado: <strong style="color:#f97316" id="scale-${section}-${idx}-val">${correct}</strong></label>
                <input type="range" min="1" max="5" value="${correct}" oninput="EduAdmin._bufQ('${section}',${idx},'correct',parseInt(this.value));document.getElementById('scale-${section}-${idx}-val').textContent=this.value"
                style="width:100%;accent-color:#f97316"></div>
            </div>`;
        }
        return '';
    }

    /* Question type helper methods */
    function _changeQType(section, idx, newType) {
        if (!_editBuffer?.[section]?.[idx]) return;
        _editBuffer[section][idx].type = newType;
        const card = document.getElementById(`qed-${section}-${idx}`);
        if (card) card.outerHTML = _buildQuestionEditor(section, idx, _editBuffer[section][idx]);
    }

    function _bufQTrueFalse(section, idx, isTrue) {
        if (!_editBuffer?.[section]?.[idx]) return;
        _editBuffer[section][idx].correct = isTrue;
        _editBuffer[section][idx].options = [
            {text:'Verdadeiro',correct:isTrue},
            {text:'Falso',correct:!isTrue},
        ];
    }

    function _bufQItem(section, idx, itemIdx, val) {
        if (!_editBuffer?.[section]?.[idx]) return;
        if (!_editBuffer[section][idx].items) _editBuffer[section][idx].items = [];
        _editBuffer[section][idx].items[itemIdx] = val;
    }

    function _addQItem(section, idx) {
        if (!_editBuffer?.[section]?.[idx]) return;
        if (!_editBuffer[section][idx].items) _editBuffer[section][idx].items = ['Item 1','Item 2'];
        _editBuffer[section][idx].items.push('Novo item');
        const card = document.getElementById(`qed-${section}-${idx}`);
        if (card) card.outerHTML = _buildQuestionEditor(section, idx, _editBuffer[section][idx]);
    }

    function _removeQItem(section, idx, itemIdx) {
        if (!_editBuffer?.[section]?.[idx]?.items) return;
        _editBuffer[section][idx].items.splice(itemIdx, 1);
        const card = document.getElementById(`qed-${section}-${idx}`);
        if (card) card.outerHTML = _buildQuestionEditor(section, idx, _editBuffer[section][idx]);
    }

    function _bufQPair(section, idx, pairIdx, side, val) {
        if (!_editBuffer?.[section]?.[idx]) return;
        if (!_editBuffer[section][idx].pairs) _editBuffer[section][idx].pairs = [];
        if (!_editBuffer[section][idx].pairs[pairIdx]) _editBuffer[section][idx].pairs[pairIdx] = {left:'',right:''};
        _editBuffer[section][idx].pairs[pairIdx][side] = val;
    }

    function _addQPair(section, idx) {
        if (!_editBuffer?.[section]?.[idx]) return;
        if (!_editBuffer[section][idx].pairs) _editBuffer[section][idx].pairs = [];
        _editBuffer[section][idx].pairs.push({left:'Conceito',right:'Definição'});
        const card = document.getElementById(`qed-${section}-${idx}`);
        if (card) card.outerHTML = _buildQuestionEditor(section, idx, _editBuffer[section][idx]);
    }

    /* Override _buildStageEditorHTML to include summary cards + media + approval */
    function _buildStageEditorHTML() {
        if (!_editBuffer) return '';
        const sd = _editBuffer;
        const varName = _editVarName;
        const qSections = [
            { key:'warmup',         label:'🔥 Aquecimento' },
            { key:'guidedPractice', label:'🔍 Prática Guiada' },
            { key:'questions',      label:'⚔️ Questões Principais' },
            { key:'adaptiveReview', label:'🧠 Revisão Adaptativa' },
        ];
        const apprStatus = typeof EduBuilder !== 'undefined' ? EduBuilder.getStatus(varName) : 'draft';
        const apprColors = { draft:'#64748b', review:'#3b82f6', approved:'#22c55e', published:'#f97316', rejected:'#ef4444' };
        const metaHTML = `
        <div style="display:grid;grid-template-columns:1fr 90px 160px 110px;gap:12px;margin-bottom:14px">
            <div><label class="bld-label">Título</label>
                <input type="text" value="${_esc(sd.title||'')}" oninput="EduAdmin._bufSet('title',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px 10px;border-radius:6px;font-size:0.9rem;box-sizing:border-box"></div>
            <div><label class="bld-label">Ícone</label>
                <input type="text" value="${_esc(sd.icon||'')}" oninput="EduAdmin._bufSet('icon',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:1.3rem;text-align:center;box-sizing:border-box"></div>
            <div><label class="bld-label">Dificuldade</label>
                <select onchange="EduAdmin._bufSet('difficulty',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box">
                    ${['easy','medium','hard','boss'].map(d=>`<option value="${d}" ${sd.difficulty===d?'selected':''}>${d}</option>`).join('')}
                </select></div>
            <div><label class="bld-label">Tempo (min)</label>
                <input type="number" value="${sd.estimatedTime||10}" oninput="EduAdmin._bufSet('estimatedTime',parseInt(this.value)||0)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
        </div>
        <div><label class="bld-label">Objetivos de Aprendizagem (um por linha)</label>
            <textarea rows="4" oninput="EduAdmin._bufSetObjectives(this.value)"
            style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc((sd.learningObjectives||[]).join('\n'))}</textarea>
        </div>`;

        const questionsHTML = qSections.map(sec => {
            const qs = sd[sec.key] || [];
            return `<div style="margin-bottom:20px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                    <h4 style="margin:0;color:#f97316;font-size:0.9rem">${sec.label} <span style="color:#64748b;font-weight:400">(${qs.length})</span></h4>
                    <button onclick="EduAdmin._editorAddQuestion('${sec.key}')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.75rem">+ Questão</button>
                </div>
                <div id="ed-${sec.key}-list">${qs.map((q,i) => _buildQuestionEditor(sec.key, i, q)).join('')}</div>
            </div>`;
        }).join('');

        return `
        <div style="background:#1e293b;border-bottom:1px solid #334155;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px">
            <div style="min-width:0">
                <div style="font-size:1.05rem;font-weight:700;color:#f1f5f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">✏️ ${_esc(sd.title||varName)}</div>
                <div style="font-size:0.72rem;color:#64748b;margin-top:2px">${varName} · <span style="color:${apprColors[apprStatus]||'#64748b'}">${apprStatus}</span></div>
            </div>
            <div style="display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap">
                <select onchange="EduAdmin._setApprovalStatus('${varName}',this.value)" style="background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:6px 8px;border-radius:6px;font-size:0.78rem">
                    ${['draft','review','approved','published'].map(s=>`<option value="${s}" ${apprStatus===s?'selected':''}>${s}</option>`).join('')}
                </select>
                <button onclick="EduAdmin._exportStageJS()" class="admin-topbar-btn admin-topbar-btn-ghost">⬇ Exportar .js</button>
                <button onclick="EduAdmin._applyStageEdit()" class="admin-topbar-btn admin-topbar-btn-primary" style="background:linear-gradient(135deg,#22c55e,#16a34a)">✅ Aplicar na Sessão</button>
                <button onclick="EduAdmin._closeStageEditor()" class="admin-topbar-btn admin-topbar-btn-ghost" style="color:#ef4444;border-color:#ef4444">✕</button>
            </div>
        </div>
        <div style="flex:1;overflow-y:auto;padding:24px">
            <div style="max-width:1080px;margin:0 auto">
                <div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:20px;margin-bottom:20px">
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">📋 Metadados</h3>
                    ${metaHTML}
                </div>
                <div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:20px;margin-bottom:20px">
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">📖 Cards de Resumo & Flashcards</h3>
                    ${_buildSummaryCardsEditor(sd)}
                    <div style="margin-top:16px;padding-top:16px;border-top:1px solid #334155">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                            <h4 style="margin:0;color:#f97316;font-size:0.9rem">🃏 Flashcards <span style="color:#64748b;font-weight:400">(${(sd.summary?.flashcards||[]).length})</span></h4>
                            <button onclick="EduAdmin._editorAddFlashcard()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.75rem">+ Flashcard</button>
                        </div>
                        <div id="ed-flashcard-list">${(sd.summary?.flashcards||[]).map((fc,i) => _buildFlashcardEditor(i, fc)).join('')}</div>
                    </div>
                </div>
                <div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:20px;margin-bottom:20px">
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">❓ Questões</h3>
                    ${questionsHTML}
                </div>
                <div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:20px;margin-bottom:20px">
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">🎬 Mídia</h3>
                    ${_buildMediaEditor(sd)}
                </div>
                <div style="padding:32px 0;text-align:center;display:flex;gap:12px;justify-content:center">
                    <button onclick="EduAdmin._exportStageJS()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:10px 28px">⬇ Exportar .js</button>
                    <button onclick="EduAdmin._applyStageEdit()" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:10px 28px;background:linear-gradient(135deg,#22c55e,#16a34a)">✅ Aplicar na Sessão</button>
                </div>
            </div>
        </div>`;
    }

    /* Approval status helper */
    function _setApprovalStatus(varName, status) {
        if (typeof EduBuilder !== 'undefined') {
            const s = JSON.parse(localStorage.getItem('eq-approval-store')||'{}');
            if (!s[varName]) s[varName] = { status, comments:[], ts:Date.now(), author:'Admin' };
            else { s[varName].status = status; s[varName].ts = Date.now(); }
            localStorage.setItem('eq-approval-store', JSON.stringify(s));
        }
        _editorToast(`Status atualizado: ${status}`);
    }

    /* ── Gamification ────────────────────────────────────────── */
    function _renderGamification() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Gamificação</div>
            <div class="admin-page-sub">Conquistas, itens, ligas e mecânicas</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Conquistas',   { val: '142',    trend: '+8',   dir: 'up', icon: '🏅' }, 'accent-orange')}
            ${_kpiCard('Itens Loja',   { val: '38',     trend: '+3',   dir: 'up', icon: '🛒' }, 'accent-purple')}
            ${_kpiCard('Ligas Ativas', { val: '8',      trend: '0',    dir: 'flat',icon: '🏆' }, 'accent-blue')}
            ${_kpiCard('XP Total/Dia', { val: '2.1M',   trend: '+15%', dir: 'up', icon: '⚡' }, 'accent-green')}
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Distribuição de Raridades</div></div>
                </div>
                ${barChart([
                    { label: 'Com',   val: '64',  pct: 64,  color: '#94a3b8' },
                    { label: 'Rar',   val: '42',  pct: 42,  color: '#3b82f6' },
                    { label: 'Epic',  val: '24',  pct: 24,  color: '#8b5cf6' },
                    { label: 'Lend',  val: '12',  pct: 12,  color: '#f59e0b' },
                ])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Itens Mais Comprados</div></div>
                </div>
                ${barChart([
                    { label: '🧊', val: 'Freeze × 8.2k',    pct: 82 },
                    { label: '❤️', val: 'Vida Extra × 6.1k', pct: 61 },
                    { label: '💎', val: 'XP Boost × 4.8k',  pct: 48 },
                    { label: '🎭', val: 'Avatar × 2.3k',    pct: 23 },
                ])}
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🏆 Tabela de Ligas</div>
                <button class="admin-topbar-btn admin-topbar-btn-primary">+ Nova Liga</button>
            </div>
            <table class="admin-table">
                <thead><tr><th>Liga</th><th>Jogadores</th><th>XP Mínimo</th><th>Recompensa</th><th>Status</th></tr></thead>
                <tbody>${[
                    ['🥉 Bronze',    '4.219', '0',      '50 💎',    'active'],
                    ['🥈 Prata',     '3.841', '5.000',  '150 💎',   'active'],
                    ['🥇 Ouro',      '2.618', '15.000', '300 💎',   'active'],
                    ['💎 Diamante',  '1.492', '35.000', '500 💎',   'active'],
                    ['👑 Lendário',  '677',   '80.000', '1.000 💎', 'active'],
                ].map(([lg,pl,xp,rw,st]) => `
                    <tr><td>${lg}</td><td>${pl}</td><td>${xp} XP</td><td>${rw}</td><td>${statusBadge(st)}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Events ──────────────────────────────────────────────── */
    function _renderEvents() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Eventos</div>
            <div class="admin-page-sub">Campanhas sazonais e maratonas de aprendizado</div></div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-primary">+ Criar Evento</button>
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">⚡ Eventos</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Nome</th><th>Status</th><th>Início</th><th>Fim</th><th>Participantes</th><th>Bônus XP</th><th>Ação</th></tr></thead>
                <tbody>${MOCK.events.map(e => `
                    <tr>
                        <td>${e.name}</td>
                        <td>${statusBadge(e.status)}</td>
                        <td>${e.start}</td>
                        <td>${e.end}</td>
                        <td>${e.participants.toLocaleString('pt-BR')}</td>
                        <td>${badge(e.xpBonus, 'orange')}</td>
                        <td><button class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.7rem;">Editar</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Participação · Semana Ciências</div>
                    <div class="admin-chart-sub">Crescimento diário</div></div>
                </div>
                ${sparkline([120,280,540,890,1320,1980,2841])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Engajamento por Missão</div></div>
                </div>
                ${barChart([
                    { label: 'M01', val: '2.1k', pct: 74 },
                    { label: 'M02', val: '1.8k', pct: 62 },
                    { label: 'M03', val: '1.2k', pct: 42 },
                    { label: 'M04', val: '0.8k', pct: 28 },
                ])}
            </div>
        </div>`;
    }

    /* ── AI & Builder ─────────────────────────────────────────── */
    function _renderAI() {
        const ready = typeof EduBuilder !== 'undefined';
        return `<div style="padding:40px;text-align:center;color:#64748b">
            <div style="font-size:2rem;margin-bottom:10px">⚡</div>
            <div>${ready ? 'Carregando AI Builder…' : '⚠️ AI Builder não disponível. Verifique se o script foi carregado.'}</div>
        </div>`;
    }

    /* ── Storage ─────────────────────────────────────────────── */
    function _renderStorage() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Storage</div>
            <div class="admin-page-sub">Supabase Storage — 14.2 GB / 50 GB</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Usado',         { val: '14.2 GB', trend: '+2.1GB', dir: 'up',   icon: '📦' }, 'accent-blue')}
            ${_kpiCard('Arquivos',      { val: '84.391',  trend: '+1.2k',  dir: 'up',   icon: '📁' }, 'accent-orange')}
            ${_kpiCard('Banda/mês',     { val: '38.4 GB', trend: '+18%',   dir: 'up',   icon: '🌐' }, 'accent-purple')}
            ${_kpiCard('CDN Hit Rate',  { val: '96.8%',   trend: '+0.4%',  dir: 'up',   icon: '⚡' }, 'accent-green')}
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Distribuição por Bucket</div></div>
                </div>
                ${barChart([
                    { label: 'img', val: '8.2 GB', pct: 58, color: '#3b82f6' },
                    { label: 'aud', val: '3.8 GB', pct: 27, color: '#8b5cf6' },
                    { label: 'pdf', val: '1.6 GB', pct: 11, color: '#f97316' },
                    { label: 'etc', val: '0.6 GB', pct: 4,  color: '#94a3b8' },
                ])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Uploads Diários</div></div>
                </div>
                ${sparkline([42,38,55,48,62,58,71,65,80,74,88,82,91,87,94])}
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">📁 Buckets</div>
                <button class="admin-topbar-btn admin-topbar-btn-primary">+ Novo Bucket</button>
            </div>
            <table class="admin-table">
                <thead><tr><th>Bucket</th><th>Arquivos</th><th>Tamanho</th><th>Acesso</th><th>Status</th></tr></thead>
                <tbody>${[
                    ['avatars',         '12.847', '1.2 GB',  'public',  'active'],
                    ['chapter-assets',  '38.421', '7.8 GB',  'public',  'active'],
                    ['audio-lessons',   '2.842',  '3.8 GB',  'private', 'active'],
                    ['pdfs',            '1.241',  '1.6 GB',  'private', 'active'],
                    ['event-banners',   '248',    '0.3 GB',  'public',  'active'],
                    ['temp-uploads',    '28.792', '0.5 GB',  'private', 'active'],
                ].map(([b,f,s,a,st]) => `
                    <tr>
                        <td style="font-family:monospace">${b}</td>
                        <td>${f}</td>
                        <td>${s}</td>
                        <td>${badge(a, a === 'public' ? 'green' : 'grey')}</td>
                        <td>${statusBadge(st)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Observability ───────────────────────────────────────── */
    function _renderObservability() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Observabilidade</div>
            <div class="admin-page-sub">Performance, uptime e métricas de sistema</div></div>
        </div>

        <div class="admin-health-grid" style="grid-template-columns:repeat(4,1fr)">
            ${_healthCard('🗄️ Supabase DB',   MOCK.health.supabase, [['Latência','latency'],['Uptime','uptime'],['Conexões','conns']])}
            ${_healthCard('⚡ Edge Functions', MOCK.health.edge,    [['Latência','latency'],['Uptime','uptime'],['Req/min','reqs']])}
            ${_healthCard('📦 Storage CDN',   MOCK.health.storage, [['Usado','used'],['Limite','limit'],['Arquivos','files']])}
            ${_healthCard('🤖 IA API',        MOCK.health.ai,      [['Tokens','tokens'],['Budget','budget'],['RPM','rpm']])}
        </div>

        <div class="admin-charts-row">
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Latência P95 (ms)</div>
                    <div class="admin-chart-sub">Últimas 15h</div></div>
                </div>
                ${sparkline([28,32,29,35,38,42,31,28,34,30,26,29,28,31,28])}
            </div>
            <div class="admin-chart-card">
                <div class="admin-chart-header">
                    <div><div class="admin-chart-title">Erros por Hora</div>
                    <div class="admin-chart-sub">Últimas 24h</div></div>
                </div>
                ${sparkline([2,1,0,3,1,0,0,2,5,3,1,0,1,2,0])}
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🔥 Edge Functions — Últimas 24h</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Função</th><th>Invocações</th><th>Erros</th><th>Latência P50</th><th>Latência P95</th><th>Status</th></tr></thead>
                <tbody>${[
                    ['/api/ai-questions',   '8.421', '12', '240ms', '1.2s',  'yellow'],
                    ['/api/auth-hook',      '12.847','0',  '18ms',  '45ms',  'active'],
                    ['/api/xp-calc',        '28.932','1',  '8ms',   '22ms',  'active'],
                    ['/api/notify-push',    '4.218', '2',  '32ms',  '120ms', 'active'],
                    ['/api/leaderboard',    '18.441','0',  '42ms',  '98ms',  'active'],
                ].map(([fn,inv,err,p50,p95,st]) => `
                    <tr>
                        <td style="font-family:monospace;font-size:0.75rem">${fn}</td>
                        <td>${inv}</td>
                        <td>${parseInt(err) > 5 ? badge(err,'red') : badge(err,'green')}</td>
                        <td>${p50}</td>
                        <td>${p95}</td>
                        <td>${statusBadge(st)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Logs ────────────────────────────────────────────────── */
    function _renderLogs() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Logs & Audit</div>
            <div class="admin-page-sub">Trilha de auditoria e logs de sistema em tempo real</div></div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-ghost">⬇ Exportar</button>
            </div>
        </div>

        <div class="admin-filters">
            <input class="admin-filter-input" placeholder="🔍 Filtrar logs…" />
            <select class="admin-filter-select">
                <option>Todos os níveis</option>
                <option>INFO</option>
                <option>WARN</option>
                <option>ERROR</option>
            </select>
            <select class="admin-filter-select">
                <option>Todos os serviços</option>
                <option>auth</option>
                <option>billing</option>
                <option>ai</option>
                <option>game</option>
                <option>edge-fn</option>
            </select>
        </div>

        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Hora</th><th>Nível</th><th>Serviço</th><th>Mensagem</th></tr></thead>
                <tbody>${MOCK.logs.map(l => `
                    <tr>
                        <td style="font-family:monospace;font-size:0.75rem;white-space:nowrap">${l.ts}</td>
                        <td>${logLevelBadge(l.level)}</td>
                        <td>${badge(l.service, 'grey')}</td>
                        <td style="font-family:monospace;font-size:0.75rem">${l.msg}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
            <div class="admin-pagination">
                <span>Mostrando últimas 8 entradas</span>
                <div class="admin-pagination-btns">
                    <button class="admin-pagination-btn active">1</button>
                    <button class="admin-pagination-btn">2</button>
                    <button class="admin-pagination-btn">Mais</button>
                </div>
            </div>
        </div>`;
    }

    /* ── Security ────────────────────────────────────────────── */
    function _renderSecurity() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Segurança</div>
            <div class="admin-page-sub">Auth, RLS, permissões e auditoria de acesso</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Logins/Dia',       { val: '4.219',  trend: '+9%',  dir: 'up',   icon: '🔑' }, 'accent-blue')}
            ${_kpiCard('Falhas Auth',      { val: '28',     trend: '-12%', dir: 'up',   icon: '🚫' }, 'accent-red')}
            ${_kpiCard('Contas Suspensas', { val: '14',     trend: '+2',   dir: 'up',   icon: '⚠️' }, 'accent-yellow')}
            ${_kpiCard('2FA Ativado',      { val: '18%',    trend: '+3%',  dir: 'up',   icon: '🔐' }, 'accent-green')}
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🛡️ Providers de Autenticação</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Provider</th><th>Usuários</th><th>%</th><th>Status</th></tr></thead>
                <tbody>${[
                    ['📧 Email/Senha', '8.421', '65%', 'active'],
                    ['🔵 Google OAuth', '3.842', '30%', 'active'],
                    ['🍎 Apple OAuth',  '584',   '5%',  'active'],
                ].map(([p,u,pct,st]) => `
                    <tr><td>${p}</td><td>${u}</td><td>${pct}</td><td>${statusBadge(st)}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🔒 Row Level Security (RLS) — Tabelas</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Tabela</th><th>RLS</th><th>Políticas</th><th>Última Revisão</th></tr></thead>
                <tbody>${[
                    ['profiles',        'active', '4', '22/05/25'],
                    ['user_progress',   'active', '3', '22/05/25'],
                    ['chapters',        'active', '2', '20/05/25'],
                    ['subscriptions',   'active', '5', '23/05/25'],
                    ['events',          'active', '3', '18/05/25'],
                    ['ai_usage_logs',   'active', '2', '22/05/25'],
                ].map(([t,rls,p,dt]) => `
                    <tr>
                        <td style="font-family:monospace">${t}</td>
                        <td>${badge('Ativo','green')}</td>
                        <td>${p} políticas</td>
                        <td>${dt}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Settings ────────────────────────────────────────────── */
    function _renderSettings() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">Configurações</div>
            <div class="admin-page-sub">Parâmetros globais do app</div></div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">⚙️ Configurações do App</div>
                <button class="admin-topbar-btn admin-topbar-btn-primary">Salvar</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
                ${[
                    ['Nome do App', 'EduQuest'],
                    ['XP por Questão', '10'],
                    ['Vidas Máximas', '5'],
                    ['Tempo Recarga Vida (min)', '30'],
                    ['Daily Streak Bônus (XP)', '20'],
                    ['Gems por Nível', '50'],
                ].map(([lbl,val]) => `
                <div>
                    <label style="font-size:0.72rem;font-weight:800;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">${lbl}</label>
                    <input class="admin-filter-input" value="${val}" style="width:100%;box-sizing:border-box" />
                </div>`).join('')}
            </div>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🔑 Integrações</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Serviço</th><th>Status</th><th>Ambiente</th><th>Ação</th></tr></thead>
                <tbody>${[
                    ['Supabase',       'active', 'Production'],
                    ['Stripe',         'active', 'Live'],
                    ['Claude AI API',  'active', 'Production'],
                    ['Cloudflare',     'active', 'Production'],
                    ['Google OAuth',   'active', 'Production'],
                    ['Apple OAuth',    'active', 'Production'],
                ].map(([svc,st,env]) => `
                    <tr>
                        <td>${svc}</td>
                        <td>${statusBadge(st)}</td>
                        <td>${badge(env, env === 'Production' || env === 'Live' ? 'orange' : 'blue')}</td>
                        <td><button class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.7rem;">Configurar</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    /* ── Command Palette ─────────────────────────────────────── */
    function _renderCmdPalette(query = '') {
        const filtered = query
            ? CMD_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
            : CMD_ITEMS;

        const groups = {};
        filtered.forEach(item => {
            if (!groups[item.group]) groups[item.group] = [];
            groups[item.group].push(item);
        });

        const itemsHtml = Object.entries(groups).map(([g, items]) => `
            <div class="admin-cmd-group-label">${g}</div>
            ${items.map((item, i) => `
            <button class="admin-cmd-item ${i === _cmdIdx ? 'focused' : ''}"
                data-cmd="${CMD_ITEMS.indexOf(item)}"
                onclick="EduAdmin._execCmd(${CMD_ITEMS.indexOf(item)})">
                <div class="admin-cmd-item-icon">${item.icon}</div>
                ${item.label}
                <span class="admin-cmd-item-meta">${item.meta}</span>
            </button>`).join('')}
        `).join('');

        return `
        <div class="admin-cmd-overlay" id="admin-cmd" onclick="EduAdmin._closeCmd(event)">
            <div class="admin-cmd-box" onclick="event.stopPropagation()">
                <div class="admin-cmd-input-wrap">
                    <span class="admin-cmd-icon">🔍</span>
                    <input class="admin-cmd-input" id="admin-cmd-input"
                        placeholder="Buscar seção, ação ou usuário…"
                        value="${query}"
                        oninput="EduAdmin._cmdSearch(this.value)"
                        onkeydown="EduAdmin._cmdKey(event)"
                        autofocus />
                    <span class="admin-cmd-kbd">ESC</span>
                </div>
                <div class="admin-cmd-results" id="admin-cmd-results">
                    ${itemsHtml || '<div class="admin-empty" style="padding:24px"><div class="admin-empty-text">Nenhum resultado</div></div>'}
                </div>
                <div class="admin-cmd-footer">
                    <div class="admin-cmd-footer-hint"><span class="admin-cmd-kbd">↑↓</span> navegar</div>
                    <div class="admin-cmd-footer-hint"><span class="admin-cmd-kbd">↵</span> selecionar</div>
                    <div class="admin-cmd-footer-hint"><span class="admin-cmd-kbd">ESC</span> fechar</div>
                </div>
            </div>
        </div>`;
    }

    /* ── Public API ──────────────────────────────────────────── */
    function init() {
        document.addEventListener('keydown', e => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                const layout = document.getElementById('admin-layout');
                if (layout) { e.preventDefault(); _openCmd(); }
            }
            if (e.key === 'Escape' && _cmdOpen) _closeCmd();
        });
    }

    function render(container, section) {
        _container = container;
        _section   = section || 'overview';
        container.innerHTML = _buildLayout();
        if (_section === 'ai' && typeof EduBuilder !== 'undefined') {
            const main = document.getElementById('admin-main');
            if (main) EduBuilder.render(main);
        }
    }

    function _navigate(section) {
        _section = section;
        _closeCmd();
        _closeMobileSidebar();
        if (!_container) return;
        _container.innerHTML = _buildLayout();
        _container.querySelector('.admin-main')?.scrollTo(0, 0);
        window.location.hash = `#admin/${section}`;
        if (section === 'ai' && typeof EduBuilder !== 'undefined') {
            const main = document.getElementById('admin-main');
            if (main) EduBuilder.render(main);
        }
    }

    function _exit() {
        _closeMobileSidebar();
        if (_container) _container.innerHTML = '';
        window.location.hash = '#home';
    }

    function _openMobileSidebar() {
        const sidebar   = document.getElementById('admin-sidebar');
        const backdrop  = document.getElementById('admin-sidebar-backdrop');
        if (sidebar)  sidebar.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
    }

    function _closeMobileSidebar() {
        const sidebar   = document.getElementById('admin-sidebar');
        const backdrop  = document.getElementById('admin-sidebar-backdrop');
        if (sidebar)  sidebar.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
    }

    function _refresh() {
        if (_container) render(_container, _section);
    }

    function _openCmd() {
        _cmdOpen = true;
        _cmdIdx  = 0;
        document.body.insertAdjacentHTML('beforeend', _renderCmdPalette());
        document.getElementById('admin-cmd-input')?.focus();
    }

    function _closeCmd(e) {
        if (e && e.target.closest('.admin-cmd-box')) return;
        _cmdOpen = false;
        document.getElementById('admin-cmd')?.remove();
    }

    function _cmdSearch(q) {
        _cmdIdx = 0;
        const overlay = document.getElementById('admin-cmd');
        if (!overlay) return;
        const tmp = document.createElement('div');
        tmp.innerHTML = _renderCmdPalette(q);
        const newResults = tmp.querySelector('.admin-cmd-results');
        const curResults = overlay.querySelector('.admin-cmd-results');
        if (newResults && curResults) curResults.innerHTML = newResults.innerHTML;
    }

    function _cmdKey(e) {
        const items = document.querySelectorAll('.admin-cmd-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            _cmdIdx = Math.min(_cmdIdx + 1, items.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            _cmdIdx = Math.max(_cmdIdx - 1, 0);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const focused = document.querySelector('.admin-cmd-item.focused');
            if (focused) { const idx = parseInt(focused.dataset.cmd); if (!isNaN(idx)) _execCmd(idx); }
            return;
        } else if (e.key === 'Escape') {
            document.getElementById('admin-cmd')?.remove();
            _cmdOpen = false;
            return;
        }
        items.forEach((el, i) => el.classList.toggle('focused', i === _cmdIdx));
        items[_cmdIdx]?.scrollIntoView({ block: 'nearest' });
    }

    function _execCmd(idx) {
        _cmdOpen = false;
        document.getElementById('admin-cmd')?.remove();
        CMD_ITEMS[idx]?.action?.();
    }

    return {
        init, render, _navigate, _exit, _openCmd, _closeCmd, _cmdSearch, _cmdKey, _execCmd, _refresh,
        _openMobileSidebar, _closeMobileSidebar,
        _contentNav, _openStageEditor, _closeStageEditor, _applyStageEdit, _exportStageJS,
        _bufSet, _bufSetObjectives, _bufQ, _bufQCorrect, _bufFC,
        _editorAddQuestion, _editorRemoveQuestion, _editorAddFlashcard, _editorRemoveFlashcard,
        _confirmModal,
        _openCreateChapter, _saveNewChapter, _confirmDeleteChapter,
        _openEditChapter, _saveChapterEdit, _togglePublishChapter,
        _expandChapterView,
        _openCreateStage, _saveNewStage, _confirmDeleteStage,
        _bufMedia, _bufSCard, _addSummaryCard, _removeSummaryCard, _previewImage,
        _changeQType, _bufQTrueFalse, _bufQItem, _addQItem, _removeQItem,
        _bufQPair, _addQPair,
        _setApprovalStatus,
    };
})();
