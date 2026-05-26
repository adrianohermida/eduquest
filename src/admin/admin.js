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
        return (map[_section] || _renderOverview)();
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

    function _renderContentChapters(data) {
        const sc = { ciencias:'green', matematica:'blue', historia:'orange', portugues:'purple', geografia:'yellow' };
        return `
        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Capítulo</th><th>Matéria</th><th>Ano</th><th>Estágios</th><th>Questões</th><th>Flashcards</th><th>Status</th><th>Ações</th></tr></thead>
                <tbody>${data.map(c => `
                <tr>
                    <td><div style="display:flex;align-items:center;gap:8px"><span style="font-size:1.2rem">${c.icon}</span><strong>${c.title}</strong></div></td>
                    <td>${badge(c.subjectLabel, sc[c.subject] || 'grey')}</td>
                    <td>${c.grade}</td>
                    <td>${c.stagesLoaded}/${c.totalStages}</td>
                    <td>${c.questionCount}</td>
                    <td>${c.flashcardCount}</td>
                    <td>${badge('Publicado','green')}</td>
                    <td><button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._contentNav('stages','${c.id}')" style="padding:4px 10px;font-size:0.7rem">Ver Estágios →</button></td>
                </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    function _renderContentStages(chapterId, data) {
        const chapter = (data || _loadContentData()).find(c => c.id === chapterId);
        if (!chapter) return `<div style="padding:40px;text-align:center;color:#94a3b8">Capítulo não encontrado.</div>`;
        const dc = { easy:'green', medium:'blue', hard:'orange', boss:'red' };
        return `
        <div class="admin-wide-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Estágio</th><th>Dificuldade</th><th>Tempo</th><th>Total Questões</th><th>Flashcards</th><th>Ações</th></tr></thead>
                <tbody>${chapter.stages.map(s => {
                    const sd = window[s.varName];
                    if (!sd) return `<tr><td colspan="6" style="color:#94a3b8;font-style:italic;padding:12px">${s.id} — não carregado</td></tr>`;
                    const total = (sd.warmup?.length||0) + (sd.guidedPractice?.length||0) + (sd.questions?.length||0) + (sd.adaptiveReview?.length||0);
                    const fc    = sd.summary?.flashcards?.length || 0;
                    const diff  = sd.difficulty || (s.isBoss ? 'boss' : 'medium');
                    return `<tr>
                        <td><span style="font-size:1.1rem">${sd.icon||'📖'}</span> <strong>${sd.title}</strong>${s.isBoss ? ' <span style="color:#ef4444">💀</span>' : ''}${s.isFinal ? ' <span style="color:#f59e0b">🏆</span>' : ''}</td>
                        <td>${badge(diff, dc[diff]||'grey')}</td>
                        <td>${sd.estimatedTime||'—'}min</td>
                        <td>${total}</td>
                        <td>${fc}</td>
                        <td style="display:flex;gap:4px">
                            <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduAdmin._contentNav('questions','${chapterId}','${s.varName}')" style="padding:4px 10px;font-size:0.7rem">Ver</button>
                            <button class="admin-topbar-btn admin-topbar-btn-primary" onclick="EduAdmin._openStageEditor('${s.varName}')" style="padding:4px 10px;font-size:0.7rem">✏️ Editar</button>
                        </td>
                    </tr>`;
                }).join('')}
                </tbody>
            </table>
        </div>`;
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
        if (!sd) { alert(`Stage ${varName} não encontrado.`); return; }
        _editBuffer = JSON.parse(JSON.stringify(sd));
        const modal = document.createElement('div');
        modal.id = 'stage-editor-overlay';
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(2,6,23,0.97);z-index:2000;display:flex;flex-direction:column;font-family:inherit';
        modal.innerHTML = _buildStageEditorHTML();
        document.body.appendChild(modal);
    }

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
        const metaHTML = `
        <div style="display:grid;grid-template-columns:1fr 90px 160px 110px;gap:12px;margin-bottom:14px">
            <div><label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:4px">Título</label>
                <input type="text" value="${_esc(sd.title||'')}" oninput="EduAdmin._bufSet('title',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px 10px;border-radius:6px;font-size:0.9rem;box-sizing:border-box"></div>
            <div><label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:4px">Ícone</label>
                <input type="text" value="${_esc(sd.icon||'')}" oninput="EduAdmin._bufSet('icon',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:1.3rem;text-align:center;box-sizing:border-box"></div>
            <div><label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:4px">Dificuldade</label>
                <select onchange="EduAdmin._bufSet('difficulty',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box">
                    ${['easy','medium','hard','boss'].map(d => `<option value="${d}" ${sd.difficulty===d?'selected':''}>${d}</option>`).join('')}
                </select></div>
            <div><label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:4px">Tempo (min)</label>
                <input type="number" value="${sd.estimatedTime||10}" oninput="EduAdmin._bufSet('estimatedTime',parseInt(this.value)||0)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;box-sizing:border-box"></div>
        </div>
        <div><label style="font-size:0.72rem;color:#94a3b8;display:block;margin-bottom:4px">Objetivos de Aprendizagem (um por linha)</label>
            <textarea rows="4" oninput="EduAdmin._bufSetObjectives(this.value)"
            style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc((sd.learningObjectives||[]).join('\n'))}</textarea>
        </div>`;

        const questionsHTML = qSections.map(sec => {
            const qs = sd[sec.key] || [];
            return `
            <div style="margin-bottom:20px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                    <h4 style="margin:0;color:#f97316;font-size:0.9rem">${sec.label} <span style="color:#64748b;font-weight:400">(${qs.length})</span></h4>
                    <button onclick="EduAdmin._editorAddQuestion('${sec.key}')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.75rem">+ Questão</button>
                </div>
                <div id="ed-${sec.key}-list">${qs.map((q,i) => _buildQuestionEditor(sec.key, i, q)).join('')}</div>
            </div>`;
        }).join('');

        const flashcardsHTML = `
        <div style="margin-bottom:20px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <h4 style="margin:0;color:#f97316;font-size:0.9rem">🃏 Flashcards <span style="color:#64748b;font-weight:400">(${(sd.summary?.flashcards||[]).length})</span></h4>
                <button onclick="EduAdmin._editorAddFlashcard()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:4px 10px;font-size:0.75rem">+ Flashcard</button>
            </div>
            <div id="ed-flashcard-list">${(sd.summary?.flashcards||[]).map((fc,i) => _buildFlashcardEditor(i, fc)).join('')}</div>
        </div>`;

        return `
        <div style="background:#1e293b;border-bottom:1px solid #334155;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px">
            <div style="min-width:0">
                <div style="font-size:1.05rem;font-weight:700;color:#f1f5f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">✏️ ${_esc(sd.title||varName)}</div>
                <div style="font-size:0.72rem;color:#64748b;margin-top:2px">${varName} · alterações em memória até exportar</div>
            </div>
            <div style="display:flex;gap:8px;flex-shrink:0">
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
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">❓ Questões</h3>
                    ${questionsHTML}
                </div>
                <div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:20px;margin-bottom:20px">
                    <h3 style="margin:0 0 14px;color:#f97316;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em">🃏 Flashcards</h3>
                    ${flashcardsHTML}
                </div>
                <div style="padding:32px 0;text-align:center;display:flex;gap:12px;justify-content:center">
                    <button onclick="EduAdmin._exportStageJS()" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:10px 28px">⬇ Exportar .js</button>
                    <button onclick="EduAdmin._applyStageEdit()" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:10px 28px;background:linear-gradient(135deg,#22c55e,#16a34a)">✅ Aplicar na Sessão</button>
                </div>
            </div>
        </div>`;
    }

    function _buildQuestionEditor(section, idx, q) {
        const opts = q.options || [
            {text:'',correct:true},{text:'',correct:false},{text:'',correct:false},{text:'',correct:false}
        ];
        return `
        <div id="qed-${section}-${idx}" style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:14px;margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <span style="font-size:0.72rem;color:#64748b;font-weight:700;letter-spacing:0.05em">QUESTÃO ${idx+1}</span>
                <button onclick="EduAdmin._editorRemoveQuestion('${section}',${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.9rem;padding:2px 6px;border-radius:4px" title="Remover">✕</button>
            </div>
            <div style="margin-bottom:10px">
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Enunciado</label>
                <textarea rows="2" oninput="EduAdmin._bufQ('${section}',${idx},'prompt',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc(q.prompt||'')}</textarea>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
                ${opts.map((o, oi) => `
                <div style="display:flex;align-items:center;gap:6px">
                    <input type="radio" name="correct-${section}-${idx}" value="${oi}" ${o.correct?'checked':''} onchange="EduAdmin._bufQCorrect('${section}',${idx},${oi})" style="accent-color:#f97316;flex-shrink:0" title="Marcar como correta">
                    <input type="text" value="${_esc(o.text||'')}" oninput="EduAdmin._bufQ('${section}',${idx},'options.${oi}.text',this.value)" placeholder="Opção ${String.fromCharCode(65+oi)}"
                    style="flex:1;background:#1e293b;border:1px solid ${o.correct?'#22c55e':'#334155'};color:#f1f5f9;padding:6px 8px;border-radius:6px;font-size:0.8rem;min-width:0;box-sizing:border-box">
                </div>`).join('')}
            </div>
            <div>
                <label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:3px">Explicação (feedback após resposta)</label>
                <textarea rows="2" oninput="EduAdmin._bufQ('${section}',${idx},'explanation',this.value)"
                style="width:100%;background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box">${_esc(q.explanation||'')}</textarea>
            </div>
        </div>`;
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

    /* ── AI & Builder ────────────────────────────────────────── */
    function _renderAI() {
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">IA & Builder</div>
            <div class="admin-page-sub">Monitoramento de tokens, custos e geração de conteúdo</div></div>
        </div>

        <div class="admin-kpi-grid">
            ${_kpiCard('Tokens Mai/25',   { val: '3.1M',   trend: '+31%', dir: 'up',   icon: '🤖' }, 'accent-purple')}
            ${_kpiCard('Custo IA',        { val: 'R$ 64,50', trend: '+28%', dir: 'up', icon: '💸' }, 'accent-red')}
            ${_kpiCard('Questões Geradas', { val: '1.842',  trend: '+44%', dir: 'up',  icon: '✨' }, 'accent-orange')}
            ${_kpiCard('Acurácia IA',      { val: '94%',    trend: '+2%',  dir: 'up',  icon: '🎯' }, 'accent-green')}
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">🧠 Consumo por Modelo</div>
            </div>
            <table class="admin-table">
                <thead><tr><th>Modelo</th><th>Tokens</th><th>Custo</th><th>Req/min</th><th>Uso %</th></tr></thead>
                <tbody>${MOCK.ai_models.map(m => `
                    <tr>
                        <td style="font-family:monospace;font-size:0.78rem">${m.model}</td>
                        <td>${m.tokens}</td>
                        <td>${m.cost}</td>
                        <td>${m.rpm}</td>
                        <td><div class="admin-bar-track" style="width:100px;display:inline-flex">
                            <div class="admin-bar-fill" style="width:${m.usage}%"></div>
                        </div> ${m.usage}%</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div class="admin-section-card">
            <div class="admin-section-card-header">
                <div class="admin-chart-title">✨ AI Builder — Gerar Questões</div>
                <span class="adm-badge adm-badge-purple">Beta</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
                <div>
                    <div style="margin-bottom:12px">
                        <label style="font-size:0.72rem;font-weight:800;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">Matéria</label>
                        <select class="admin-filter-select" style="width:100%">
                            <option>Ciências — 7º Ano</option>
                            <option>Matemática — 6º Ano</option>
                            <option>História — 9º Ano</option>
                        </select>
                    </div>
                    <div style="margin-bottom:12px">
                        <label style="font-size:0.72rem;font-weight:800;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">Tópico</label>
                        <input class="admin-filter-input" value="Doenças infecciosas e parasitárias" style="width:100%;box-sizing:border-box" />
                    </div>
                    <div style="margin-bottom:16px">
                        <label style="font-size:0.72rem;font-weight:800;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">Quantidade</label>
                        <select class="admin-filter-select">
                            <option>5 questões</option>
                            <option>10 questões</option>
                            <option>20 questões</option>
                        </select>
                    </div>
                    <button class="admin-topbar-btn admin-topbar-btn-primary" style="width:100%">✨ Gerar com Claude</button>
                </div>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px">
                    <div style="font-size:0.75rem;font-weight:800;color:#94a3b8;text-transform:uppercase;margin-bottom:12px">Preview gerado</div>
                    <div style="font-size:0.82rem;font-weight:700;color:#0f172a;margin-bottom:8px">Q1 · Múltipla Escolha</div>
                    <div style="font-size:0.8rem;color:#334155;margin-bottom:8px">Qual é o agente causador da malária?</div>
                    ${['A) Vírus Plasmodium','B) Bactéria Anopheles','✅ C) Protozoário Plasmodium','D) Fungo Candida'].map(o =>
                        `<div style="font-size:0.75rem;color:#64748b;padding:4px 0;">${o}</div>`
                    ).join('')}
                </div>
            </div>
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
    }

    function _navigate(section) {
        _section = section;
        _closeCmd();
        _closeMobileSidebar();
        if (!_container) return;
        _container.innerHTML = _buildLayout();
        _container.querySelector('.admin-main')?.scrollTo(0, 0);
        window.location.hash = `#admin/${section}`;
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
    };
})();
