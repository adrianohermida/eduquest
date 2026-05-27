-- ============================================================
-- EduQuest — Migration 007
-- Analytics dashboard RPC function.
-- SECURITY DEFINER so it can aggregate data across all users
-- without adding an admin-bypass RLS policy that exposes raw rows.
-- Only authenticated callers can invoke it (GRANT below).
-- ============================================================

CREATE OR REPLACE FUNCTION public.eq_analytics_dashboard(p_days INT DEFAULT 30)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_cutoff TIMESTAMPTZ := now() - (p_days || ' days')::INTERVAL;
BEGIN
    RETURN jsonb_build_object(

        -- ── KPIs ─────────────────────────────────────────────────
        'kpis', (
            SELECT jsonb_build_object(
                'total_sessions',   COUNT(*)::int,
                'total_questions',  COALESCE(SUM(total_questions), 0)::int,
                'total_correct',    COALESCE(SUM(correct_count), 0)::int,
                'avg_accuracy',     ROUND(COALESCE(AVG(
                    CASE WHEN total_questions > 0
                        THEN correct_count::float / total_questions * 100
                        ELSE NULL END), 0)::numeric, 1),
                'victory_rate',     ROUND(COALESCE(AVG(
                    CASE WHEN victory THEN 100.0 ELSE 0.0 END), 0)::numeric, 1),
                'avg_duration_min', ROUND(COALESCE(
                    AVG(duration_ms) / 60000.0, 0)::numeric, 1),
                'unique_users',     COUNT(DISTINCT user_id)::int,
                'avg_stars',        ROUND(COALESCE(AVG(stars), 0)::numeric, 2)
            )
            FROM public.game_sessions
            WHERE played_at >= v_cutoff
        ),

        -- ── Sessions by chapter ──────────────────────────────────
        'by_chapter', (
            SELECT COALESCE(
                jsonb_agg(row_data ORDER BY (row_data->>'sessions')::int DESC),
                '[]'::jsonb
            )
            FROM (
                SELECT jsonb_build_object(
                    'chapter_id', chapter_id,
                    'sessions',   COUNT(*)::int,
                    'correct',    COALESCE(SUM(correct_count), 0)::int,
                    'questions',  COALESCE(SUM(total_questions), 0)::int,
                    'accuracy',   ROUND(CASE WHEN SUM(total_questions) > 0
                        THEN SUM(correct_count)::numeric / SUM(total_questions) * 100
                        ELSE 0 END, 1),
                    'avg_stars',  ROUND(COALESCE(AVG(stars), 0)::numeric, 2)
                ) AS row_data
                FROM public.game_sessions
                WHERE played_at >= v_cutoff
                GROUP BY chapter_id
            ) t
        ),

        -- ── Sessions by battle level ─────────────────────────────
        'by_level', (
            SELECT COALESCE(
                jsonb_agg(row_data ORDER BY (row_data->>'sessions')::int DESC),
                '[]'::jsonb
            )
            FROM (
                SELECT jsonb_build_object(
                    'level',    COALESCE(battle_level, 'none'),
                    'sessions', COUNT(*)::int
                ) AS row_data
                FROM public.game_sessions
                WHERE played_at >= v_cutoff
                GROUP BY battle_level
            ) t
        ),

        -- ── Hardest stages (most wrong answers) ──────────────────
        'hard_stages', (
            SELECT COALESCE(
                jsonb_agg(row_data ORDER BY (row_data->>'errors')::int DESC),
                '[]'::jsonb
            )
            FROM (
                SELECT jsonb_build_object(
                    'stage_id',   COALESCE(stage_id, 'N/A'),
                    'chapter_id', chapter_id,
                    'errors',     COUNT(*)::int
                ) AS row_data
                FROM public.wrong_answers
                WHERE reviewed_at >= v_cutoff
                GROUP BY stage_id, chapter_id
                ORDER BY COUNT(*) DESC
                LIMIT 10
            ) t
        ),

        -- ── Daily sessions (last 14 days, for sparkline) ─────────
        'daily', (
            SELECT COALESCE(
                jsonb_agg(row_data ORDER BY row_data->>'d'),
                '[]'::jsonb
            )
            FROM (
                SELECT jsonb_build_object(
                    'd',        TO_CHAR(
                                    DATE(played_at AT TIME ZONE 'America/Sao_Paulo'),
                                    'DD/MM'),
                    'sessions', COUNT(*)::int
                ) AS row_data
                FROM public.game_sessions
                WHERE played_at >= now() - INTERVAL '14 days'
                GROUP BY DATE(played_at AT TIME ZONE 'America/Sao_Paulo')
            ) t
        )
    );
END;
$$;

-- Allow any authenticated user (admin is always authenticated)
GRANT EXECUTE ON FUNCTION public.eq_analytics_dashboard(INT) TO authenticated;
