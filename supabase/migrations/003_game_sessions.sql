-- ============================================================
-- EduQuest — Game Sessions & Wrong Answers Schema
-- Apply via: Supabase Dashboard > SQL Editor
-- ============================================================

-- ── GAME SESSIONS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.game_sessions (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    chapter_id      TEXT        NOT NULL,
    stage_index     INTEGER     NOT NULL DEFAULT 0,
    stage_id        TEXT,
    score           INTEGER     NOT NULL DEFAULT 0,
    stars           SMALLINT    NOT NULL DEFAULT 0 CHECK (stars BETWEEN 0 AND 3),
    correct_count   INTEGER     NOT NULL DEFAULT 0,
    total_questions INTEGER     NOT NULL DEFAULT 0,
    peak_combo      INTEGER     NOT NULL DEFAULT 0,
    victory         BOOLEAN     NOT NULL DEFAULT false,
    duration_ms     INTEGER     NOT NULL DEFAULT 0,
    played_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS game_sessions_user_chapter
    ON public.game_sessions (user_id, chapter_id, played_at DESC);

ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own sessions"
    ON public.game_sessions FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own sessions"
    ON public.game_sessions FOR SELECT
    USING (auth.uid() = user_id);


-- ── WRONG ANSWERS (spaced-repetition source) ─────────────────
CREATE TABLE IF NOT EXISTS public.wrong_answers (
    id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    chapter_id     TEXT        NOT NULL,
    stage_id       TEXT,
    question       TEXT        NOT NULL DEFAULT '',
    correct_answer TEXT        NOT NULL DEFAULT '',
    user_answer    TEXT        NOT NULL DEFAULT '',
    review_count   INTEGER     NOT NULL DEFAULT 0,
    next_review_at TIMESTAMPTZ,          -- for SM-2 scheduling (future use)
    reviewed_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS wrong_answers_user_chapter
    ON public.wrong_answers (user_id, chapter_id, reviewed_at DESC);

ALTER TABLE public.wrong_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own wrong answers"
    ON public.wrong_answers FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own wrong answers"
    ON public.wrong_answers FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update own wrong answers"
    ON public.wrong_answers FOR UPDATE
    USING (auth.uid() = user_id);
