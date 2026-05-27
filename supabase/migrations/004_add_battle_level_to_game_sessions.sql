-- Migration 004: Add battle_level to game_sessions
-- Allows distinguishing N1/N2/N3 BattleMode sessions from classic mode sessions

ALTER TABLE public.game_sessions
  ADD COLUMN IF NOT EXISTS battle_level text CHECK (battle_level IN ('n1', 'n2', 'n3'));

-- Index for common query: sessions by level for a user+chapter
CREATE INDEX IF NOT EXISTS idx_game_sessions_battle_level
  ON public.game_sessions (user_id, chapter_id, battle_level);

COMMENT ON COLUMN public.game_sessions.battle_level IS
  'BattleMode level: n1=Fixação Kumon, n2=Aplicação Escolar, n3=Vestibular. NULL = classic game mode.';
