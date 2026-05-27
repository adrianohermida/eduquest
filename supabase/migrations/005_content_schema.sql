-- ============================================================
-- EduQuest — Content Schema (Sprint 3)
-- chapters → stages → questions / flashcards / summary_cards
-- RLS: public read-only, service_role write (admin seeder uses anon
--       key so we add a permissive INSERT policy for authenticated
--       users who have the "admin" claim — kept simple for now
--       as content is seeded by the admin UI one-time).
-- ============================================================

-- ── CHAPTERS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.chapters (
    id          TEXT        PRIMARY KEY,            -- e.g. 'cap7_doencas'
    subject     TEXT        NOT NULL,               -- 'ciencias', 'espanhol', …
    grade       TEXT        NOT NULL,               -- '7ano', '8ano', …
    title       TEXT        NOT NULL,
    icon        TEXT        NOT NULL DEFAULT '📚',
    color       TEXT        NOT NULL DEFAULT '#64748b',
    total_stages INT        NOT NULL DEFAULT 0,
    description TEXT        NOT NULL DEFAULT '',
    published   BOOLEAN     NOT NULL DEFAULT true,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── STAGES ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.stages (
    id              TEXT        PRIMARY KEY,         -- e.g. 'cap7_s01'
    chapter_id      TEXT        NOT NULL REFERENCES public.chapters(id) ON DELETE CASCADE,
    stage_index     INT         NOT NULL DEFAULT 1,
    var_name        TEXT        NOT NULL,            -- JS global name: 'CAP7_S01'
    title           TEXT        NOT NULL,
    icon            TEXT        NOT NULL DEFAULT '⚔️',
    difficulty      TEXT        NOT NULL DEFAULT 'medium'
                                CHECK (difficulty IN ('easy','medium','hard','boss')),
    estimated_time  INT         NOT NULL DEFAULT 10,
    is_boss         BOOLEAN     NOT NULL DEFAULT false,
    is_final        BOOLEAN     NOT NULL DEFAULT false,
    learning_objectives TEXT[]  NOT NULL DEFAULT '{}',
    completion_message  TEXT    NOT NULL DEFAULT '',
    rewards         JSONB       NOT NULL DEFAULT '{}',
    published       BOOLEAN     NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_stages_chapter
    ON public.stages (chapter_id, stage_index);

-- ── QUESTIONS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.questions (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    stage_id    TEXT        NOT NULL REFERENCES public.stages(id) ON DELETE CASCADE,
    section     TEXT        NOT NULL
                            CHECK (section IN ('warmup','guidedPractice','questions','adaptiveReview')),
    seq_index   INT         NOT NULL DEFAULT 0,
    prompt      TEXT        NOT NULL DEFAULT '',
    options     JSONB       NOT NULL DEFAULT '[]',  -- [{text,correct}]
    explanation TEXT        NOT NULL DEFAULT '',
    difficulty  TEXT,
    topic       TEXT,
    type        TEXT        NOT NULL DEFAULT 'multiple_choice',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_questions_stage
    ON public.questions (stage_id, section, seq_index);

-- ── FLASHCARDS ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.flashcards (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    stage_id    TEXT        NOT NULL REFERENCES public.stages(id) ON DELETE CASCADE,
    seq_index   INT         NOT NULL DEFAULT 0,
    question    TEXT        NOT NULL DEFAULT '',
    answer      TEXT        NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_flashcards_stage
    ON public.flashcards (stage_id, seq_index);

-- ── SUMMARY CARDS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.summary_cards (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    stage_id    TEXT        NOT NULL REFERENCES public.stages(id) ON DELETE CASCADE,
    seq_index   INT         NOT NULL DEFAULT 0,
    icon        TEXT        NOT NULL DEFAULT '📌',
    title       TEXT        NOT NULL DEFAULT '',
    text        TEXT        NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_summary_cards_stage
    ON public.summary_cards (stage_id, seq_index);

-- ── ROW LEVEL SECURITY ───────────────────────────────────────
-- Content is public-read; inserts require authenticated user
-- (the admin seeder runs authenticated — service_role bypass in prod)

ALTER TABLE public.chapters     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stages       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcards   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.summary_cards ENABLE ROW LEVEL SECURITY;

-- ── SELECT: anyone (including anon) can read published content ─
CREATE POLICY "public_read_chapters"
    ON public.chapters FOR SELECT USING (published = true);

CREATE POLICY "public_read_stages"
    ON public.stages FOR SELECT USING (published = true);

CREATE POLICY "public_read_questions"
    ON public.questions FOR SELECT USING (true);

CREATE POLICY "public_read_flashcards"
    ON public.flashcards FOR SELECT USING (true);

CREATE POLICY "public_read_summary_cards"
    ON public.summary_cards FOR SELECT USING (true);

-- ── INSERT/UPDATE/DELETE: authenticated only (admin seeder) ───
CREATE POLICY "auth_write_chapters"
    ON public.chapters FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "auth_write_stages"
    ON public.stages FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "auth_write_questions"
    ON public.questions FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "auth_write_flashcards"
    ON public.flashcards FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "auth_write_summary_cards"
    ON public.summary_cards FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');
