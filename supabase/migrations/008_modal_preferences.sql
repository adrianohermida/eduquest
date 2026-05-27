-- ============================================================
-- Migration: 008_modal_preferences
-- Purpose:   Frequency-capped incentive modal preferences
--            Replaces: repetitive modal display on every app_open
-- Stack:     Supabase (substitui Redis + Prisma do template original)
-- ============================================================

CREATE TABLE IF NOT EXISTS modal_preferences (
  id                       uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id                  uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  modal_id                 text        NOT NULL
    CHECK (modal_id IN ('streak_risk','achievement','encouragement','motivational','review_suggestion')),

  -- Display tracking
  last_shown_at            timestamptz,
  show_count               integer     DEFAULT 0,
  last_interaction_at      timestamptz,

  -- Dismissal preferences
  is_dismissed_permanently boolean     DEFAULT false,
  dismissed_at             timestamptz,
  snooze_until             timestamptz,

  -- Rate-limit counters (substitui Redis; resetados quando a chave de data muda)
  daily_date               text,          -- 'YYYY-MM-DD'
  daily_count              integer     DEFAULT 0,
  weekly_date              text,          -- Segunda-feira da semana como 'YYYY-MM-DD'
  weekly_count             integer     DEFAULT 0,

  -- Analytics payloads (mantidos enxutos — últimas 50 impressões / 100 interações)
  impressions              jsonb       DEFAULT '[]'::jsonb,
  interactions             jsonb       DEFAULT '[]'::jsonb,

  created_at               timestamptz DEFAULT now(),
  updated_at               timestamptz DEFAULT now(),

  UNIQUE (user_id, modal_id)
);

-- ── INDEXES ─────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_modal_pref_user
  ON modal_preferences (user_id, modal_id);

CREATE INDEX IF NOT EXISTS idx_modal_pref_snooze
  ON modal_preferences (user_id, snooze_until)
  WHERE NOT is_dismissed_permanently;

-- ── ROW LEVEL SECURITY ───────────────────────────────────────────
ALTER TABLE modal_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users own their modal preferences"
  ON modal_preferences
  FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ── updated_at TRIGGER ───────────────────────────────────────────
CREATE OR REPLACE FUNCTION _update_modal_preferences_ts()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_modal_preferences_updated_at ON modal_preferences;
CREATE TRIGGER trg_modal_preferences_updated_at
  BEFORE UPDATE ON modal_preferences
  FOR EACH ROW EXECUTE FUNCTION _update_modal_preferences_ts();
