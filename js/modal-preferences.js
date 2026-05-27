/**
 * EDUQUEST MODAL PREFERENCES v1.0
 * ─────────────────────────────────────────────────────────────
 * Frequency capping · Snooze · Permanent dismiss
 * Content rotation  · Analytics (impressions + interactions)
 *
 * Stack adaptado para EduQuest:
 *   Backend  → Supabase (tabela modal_preferences, migration 008)
 *   Cache    → localStorage (fallback offline / anônimo)
 *   Frontend → Vanilla JS (sem TypeScript, sem React)
 *   Auth     → SupaClient.getClient() já exposto globalmente
 *
 * Depende de: supabase-client.js (SupaClient), state.js (State)
 * Carregado:  após modal-engine.js, antes de app.js
 * TODO: integrar PostHog para seleção de variante por CTR
 */

const ModalPreferences = (() => {
    'use strict';

    // ── CONSTANTES ────────────────────────────────────────────────
    const LS_KEY = 'eduquest_modal_prefs_v1';
    const TABLE  = 'modal_preferences';

    /**
     * Regras de frequency cap por modal.
     * Sem Redis → contadores armazenados no próprio row do Supabase;
     * daily_date / weekly_date controlam o reset automático.
     *
     * @type {Record<string, {maxPerDay:number, maxPerWeek:number, minIntervalHours:number, cooldownAfterDismissHours:number}>}
     */
    const CAP_RULES = {
        streak_risk:       { maxPerDay: 1, maxPerWeek: 3, minIntervalHours: 4,  cooldownAfterDismissHours: 24 },
        achievement:       { maxPerDay: 2, maxPerWeek: 5, minIntervalHours: 2,  cooldownAfterDismissHours: 0  },
        encouragement:     { maxPerDay: 1, maxPerWeek: 2, minIntervalHours: 6,  cooldownAfterDismissHours: 0  },
        motivational:      { maxPerDay: 1, maxPerWeek: 3, minIntervalHours: 6,  cooldownAfterDismissHours: 12 },
        review_suggestion: { maxPerDay: 1, maxPerWeek: 2, minIntervalHours: 8,  cooldownAfterDismissHours: 0  },
    };

    /**
     * Pool de conteúdo para rotação.
     * Cada variante tem prioridade, segmento de streak e tag A/B.
     * TODO: integrar PostHog/Mixpanel para seleção por performance de variante.
     */
    const CONTENT_POOL = [
        // streak_risk — streak baixo (1-6 dias)
        {
            id: 'sr_001', modalId: 'streak_risk', variant: 'A', priority: 10,
            streakRange:  { min: 1, max: 6 },
            title:        'Sequência em Risco! 🔥',
            message:      'Você tem {streak} dias de sequência. Complete 1 missão hoje para não perder!',
            cta:          'Fazer Missão Agora',
            secondary:    'Lembrar Depois',
        },
        // streak_risk — streak médio (7-14 dias)
        {
            id: 'sr_002', modalId: 'streak_risk', variant: 'B', priority: 8,
            streakRange:  { min: 7, max: 14 },
            title:        'Não deixe sua chama apagar! 🔥',
            message:      'Sua sequência de {streak} dias está em perigo. Que tal uma missão rapidinha?',
            cta:          'Manter Sequência',
            secondary:    'Depois',
        },
        // streak_risk — streak alto (15+)
        {
            id: 'sr_003', modalId: 'streak_risk', variant: 'C', priority: 9,
            streakRange:  { min: 15, max: null },
            title:        'Herói em risco! ⚔️',
            message:      '{streak} dias de dedicação! Não pare agora — 1 missão salva sua sequência.',
            cta:          'Salvar Sequência',
            secondary:    'Talvez depois',
        },
        // encouragement
        {
            id: 'enc_001', modalId: 'encouragement', variant: 'A', priority: 7,
            streakRange:  null,
            title:        'Você está indo bem! 🌟',
            message:      'Continue estudando para alcançar ainda mais conquistas.',
            cta:          'Continuar',
            secondary:    null,
        },
    ];

    // ── HELPERS ───────────────────────────────────────────────────

    const _now      = () => new Date();
    const _isoNow   = () => _now().toISOString();
    const _todayKey = () => _isoNow().slice(0, 10);                     // 'YYYY-MM-DD'

    /** Segunda-feira da semana atual como 'YYYY-MM-DD' */
    function _weekKey() {
        const d   = new Date();
        const day = d.getDay();                                         // 0=Dom … 6=Sáb
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);         // ajusta para seg
        const mon = new Date(d.getFullYear(), d.getMonth(), diff);
        return mon.toISOString().slice(0, 10);
    }

    /** Diferença em horas entre duas datas */
    const _hoursDiff = (a, b) => Math.abs(new Date(b) - new Date(a)) / 3_600_000;

    /** Retorna o Supabase client global exposto por supabase-client.js */
    function _client() {
        if (typeof SupaClient !== 'undefined' && typeof SupaClient.getClient === 'function') {
            return SupaClient.getClient();
        }
        return null;
    }

    /** Retorna o UID do usuário autenticado ou null */
    function _userId() {
        return (typeof State !== 'undefined') ? (State.data?.user?.uid ?? null) : null;
    }

    // ── LOCALSTORAGE FALLBACK (offline / anônimo) ─────────────────

    function _loadLS() {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
        catch { return {}; }
    }
    function _saveLS(data) {
        try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch {}
    }
    function _getLocalPref(modalId) {
        return _loadLS()[modalId] || null;
    }
    function _setLocalPref(modalId, updates) {
        const all      = _loadLS();
        all[modalId]   = { ...(all[modalId] || {}), ...updates, updated_at: _isoNow() };
        _saveLS(all);
        return all[modalId];
    }

    // ── REGRAS DE FREQUENCY CAP (lógica compartilhada) ────────────

    /**
     * Avalia o objeto pref (vindo do DB ou LS) contra as regras do modal.
     * Fail-open: sem regras → shouldShow = true.
     *
     * @param {object|null} pref
     * @param {string}      modalId
     * @returns {{ shouldShow: boolean, reason: string, nextAllowedAt?: Date }}
     */
    function _checkRules(pref, modalId) {
        const rules = CAP_RULES[modalId];
        if (!rules) return { shouldShow: true, reason: 'NO_RULES' };

        const now = _now();

        // 1. Dismissed permanentemente
        if (pref?.is_dismissed_permanently)
            return { shouldShow: false, reason: 'PERMANENT_DISMISS' };

        // 2. Snooze ativo
        if (pref?.snooze_until) {
            const until = new Date(pref.snooze_until);
            if (until > now)
                return { shouldShow: false, reason: 'SNOOZED', nextAllowedAt: until };
        }

        // 3. Intervalo mínimo entre exibições
        if (pref?.last_shown_at) {
            const diff = _hoursDiff(pref.last_shown_at, now);
            if (diff < rules.minIntervalHours) {
                const next = new Date(new Date(pref.last_shown_at).getTime() + rules.minIntervalHours * 3_600_000);
                return { shouldShow: false, reason: 'MIN_INTERVAL', nextAllowedAt: next };
            }
        }

        // 4. Cap diário (resetado quando daily_date != hoje)
        const today      = _todayKey();
        const dailyCount = (pref?.daily_date === today) ? (pref?.daily_count ?? 0) : 0;
        if (dailyCount >= rules.maxPerDay) {
            const tomorrow = new Date(today + 'T00:00:00');
            tomorrow.setDate(tomorrow.getDate() + 1);
            return { shouldShow: false, reason: 'DAILY_LIMIT', nextAllowedAt: tomorrow };
        }

        // 5. Cap semanal
        const week        = _weekKey();
        const weeklyCount = (pref?.weekly_date === week) ? (pref?.weekly_count ?? 0) : 0;
        if (weeklyCount >= rules.maxPerWeek)
            return { shouldShow: false, reason: 'WEEKLY_LIMIT' };

        return { shouldShow: true, reason: 'ALLOWED' };
    }

    // ── API PÚBLICA ───────────────────────────────────────────────

    /**
     * Verifica se um modal deve ser exibido agora.
     * Sempre resolve (nunca lança) — fail-open: erro → mostra modal.
     *
     * @param {string} modalId   ex: 'streak_risk'
     * @param {string} [context] ex: 'app_open', 'mission_complete'
     * @returns {Promise<{shouldShow:boolean, reason:string, nextAllowedAt?:Date}>}
     */
    async function shouldShow(modalId, context = 'app_open') {
        try {
            const uid = _userId();
            const c   = uid ? _client() : null;
            let pref  = null;

            if (c && uid) {
                const { data } = await c
                    .from(TABLE)
                    .select('*')
                    .eq('user_id', uid)
                    .eq('modal_id', modalId)
                    .maybeSingle();
                pref = data;
            } else {
                pref = _getLocalPref(modalId);
            }

            return _checkRules(pref, modalId);

        } catch (err) {
            console.warn('[ModalPreferences] shouldShow error — fail open:', err);
            return { shouldShow: true, reason: 'ERROR_FAIL_OPEN' };
        }
    }

    /**
     * Registra uma impressão (chamado APÓS decidir mostrar).
     * Incrementa contadores diário/semanal e total.
     *
     * @param {string} modalId
     * @param {string} [context]
     */
    async function recordImpression(modalId, context = 'app_open') {
        try {
            const uid   = _userId();
            const today = _todayKey();
            const week  = _weekKey();
            const entry = { ts: _isoNow(), context };
            const c     = uid ? _client() : null;

            if (c && uid) {
                const { data: ex } = await c
                    .from(TABLE)
                    .select('daily_date,daily_count,weekly_date,weekly_count,show_count,impressions')
                    .eq('user_id', uid)
                    .eq('modal_id', modalId)
                    .maybeSingle();

                const dailyCount  = (ex?.daily_date  === today) ? (ex.daily_count  ?? 0) + 1 : 1;
                const weeklyCount = (ex?.weekly_date === week)  ? (ex.weekly_count ?? 0) + 1 : 1;
                const impressions = [...((ex?.impressions || []).slice(-49)), entry];

                await c.from(TABLE).upsert({
                    user_id:       uid,
                    modal_id:      modalId,
                    last_shown_at: _isoNow(),
                    show_count:    (ex?.show_count ?? 0) + 1,
                    daily_date:    today,
                    daily_count:   dailyCount,
                    weekly_date:   week,
                    weekly_count:  weeklyCount,
                    impressions,
                }, { onConflict: 'user_id,modal_id' });

            } else {
                const pref        = _getLocalPref(modalId) || {};
                const dailyCount  = (pref.daily_date  === today) ? (pref.daily_count  ?? 0) + 1 : 1;
                const weeklyCount = (pref.weekly_date === week)  ? (pref.weekly_count ?? 0) + 1 : 1;
                _setLocalPref(modalId, {
                    last_shown_at: _isoNow(),
                    show_count:    (pref.show_count ?? 0) + 1,
                    daily_date:    today,
                    daily_count:   dailyCount,
                    weekly_date:   week,
                    weekly_count:  weeklyCount,
                    impressions:   [...((pref.impressions || []).slice(-49)), entry],
                });
            }
        } catch (err) {
            console.warn('[ModalPreferences] recordImpression error:', err);
        }
    }

    /**
     * Registra uma interação do usuário (cta_click, dismiss, checkbox_toggle).
     *
     * @param {string} modalId
     * @param {string} type     ex: 'cta_click' | 'dismiss' | 'checkbox_toggle'
     * @param {object} [meta]   metadados extras (dontShowAgain, snoozeDays, variant…)
     */
    async function recordInteraction(modalId, type, meta = {}) {
        try {
            const uid   = _userId();
            const entry = { ts: _isoNow(), type, ...meta };
            const c     = uid ? _client() : null;

            if (c && uid) {
                const { data: ex } = await c
                    .from(TABLE)
                    .select('interactions')
                    .eq('user_id', uid)
                    .eq('modal_id', modalId)
                    .maybeSingle();

                const interactions = [...((ex?.interactions || []).slice(-99)), entry];
                await c.from(TABLE).upsert({
                    user_id:             uid,
                    modal_id:            modalId,
                    last_interaction_at: _isoNow(),
                    interactions,
                }, { onConflict: 'user_id,modal_id' });

            } else {
                const pref = _getLocalPref(modalId) || {};
                _setLocalPref(modalId, {
                    last_interaction_at: _isoNow(),
                    interactions: [...((pref.interactions || []).slice(-99)), entry],
                });
            }
        } catch (err) {
            console.warn('[ModalPreferences] recordInteraction error:', err);
        }
    }

    /**
     * Persiste preferência de dismiss — permanente ou snooze.
     * Chamado pelo ModalEngine.dismissIncentive().
     *
     * @param {string}  modalId
     * @param {boolean} [permanently=false]
     * @param {number}  [snoozeDays=3]  ignorado se permanently=true
     */
    async function setDismissed(modalId, permanently = false, snoozeDays = 3) {
        try {
            const uid = _userId();
            const c   = uid ? _client() : null;

            const updates = { last_interaction_at: _isoNow() };

            if (permanently) {
                updates.is_dismissed_permanently = true;
                updates.dismissed_at             = _isoNow();
                updates.snooze_until             = null;
            } else if (snoozeDays > 0) {
                updates.snooze_until             = new Date(Date.now() + snoozeDays * 86_400_000).toISOString();
                updates.is_dismissed_permanently = false;
            }

            if (c && uid) {
                await c.from(TABLE).upsert({
                    user_id:  uid,
                    modal_id: modalId,
                    ...updates,
                }, { onConflict: 'user_id,modal_id' });
            } else {
                _setLocalPref(modalId, updates);
            }
        } catch (err) {
            console.warn('[ModalPreferences] setDismissed error:', err);
        }
    }

    /**
     * Seleciona o melhor conteúdo para o modal dado o streak do usuário.
     * Critérios: streakRange match → maior priority → random tiebreak (A/B).
     * TODO: integrar PostHog para seleção por CTR de variante.
     *
     * @param {string} modalId
     * @param {number} [streak=1]
     * @returns {object|null}
     */
    function getContent(modalId, streak = 1) {
        const candidates = CONTENT_POOL.filter(item => {
            if (item.modalId !== modalId) return false;
            if (!item.streakRange) return true;
            const { min, max } = item.streakRange;
            return streak >= min && (max === null || streak <= max);
        });

        // Se nenhum candidato no range, usa qualquer um do pool deste modal
        const pool = candidates.length
            ? candidates
            : CONTENT_POOL.filter(item => item.modalId === modalId);

        if (!pool.length) return null;

        // Ordena por prioridade desc, desempate aleatório → pega o primeiro
        pool.sort((a, b) => b.priority - a.priority || Math.random() - 0.5);
        return pool[0];
    }

    /**
     * Reseta preferências de dismiss para um modal (ex: via configurações do usuário).
     * @param {string} modalId
     */
    async function resetPreferences(modalId) {
        try {
            const uid   = _userId();
            const c     = uid ? _client() : null;
            const reset = {
                is_dismissed_permanently: false,
                dismissed_at:             null,
                snooze_until:             null,
            };
            if (c && uid) {
                await c.from(TABLE).upsert(
                    { user_id: uid, modal_id: modalId, ...reset },
                    { onConflict: 'user_id,modal_id' }
                );
            } else {
                _setLocalPref(modalId, reset);
            }
        } catch (err) {
            console.warn('[ModalPreferences] resetPreferences error:', err);
        }
    }

    // ── EXPÕE APENAS O NECESSÁRIO ─────────────────────────────────
    return {
        shouldShow,
        recordImpression,
        recordInteraction,
        setDismissed,
        getContent,
        resetPreferences,
    };
})();

window.ModalPreferences = ModalPreferences;
