-- ============================================================
-- EduQuest — Initial Schema
-- Apply via: Supabase Dashboard > SQL Editor
-- ============================================================

-- ── PROFILES (extends auth.users) ────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
    id            UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    name          TEXT        NOT NULL DEFAULT 'Herói',
    level         INTEGER     NOT NULL DEFAULT 1,
    xp            INTEGER     NOT NULL DEFAULT 0,
    gems          INTEGER     NOT NULL DEFAULT 0,
    hearts        INTEGER     NOT NULL DEFAULT 3,
    streak        INTEGER     NOT NULL DEFAULT 1,
    last_played   DATE,
    daily_goal    INTEGER     NOT NULL DEFAULT 10,
    is_premium    BOOLEAN     NOT NULL DEFAULT false,
    premium_until TIMESTAMPTZ,
    onboarded     BOOLEAN     NOT NULL DEFAULT false,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── USER PROGRESS ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_progress (
    id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id      UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    chapter_id   TEXT        NOT NULL,
    stage_index  INTEGER     NOT NULL,
    completed    BOOLEAN     NOT NULL DEFAULT false,
    stars        INTEGER     NOT NULL DEFAULT 0,
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, chapter_id, stage_index)
);

-- ── TEAMS ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.teams (
    id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
    name       TEXT        NOT NULL,
    code       TEXT        UNIQUE NOT NULL,
    owner_id   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── TEAM MEMBERS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.team_members (
    team_id   UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    user_id   UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    role      TEXT        NOT NULL DEFAULT 'student',
    joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (team_id, user_id)
);

-- ── ROW LEVEL SECURITY ────────────────────────────────────────
ALTER TABLE public.profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members  ENABLE ROW LEVEL SECURITY;

-- Profiles: each user owns their own row
CREATE POLICY "profiles_own"
    ON public.profiles FOR ALL USING (auth.uid() = id);

-- Progress: each user owns their own rows
CREATE POLICY "progress_own"
    ON public.user_progress FOR ALL USING (auth.uid() = user_id);

-- Teams: anyone can read; only owner can modify
CREATE POLICY "teams_read"
    ON public.teams FOR SELECT USING (true);
CREATE POLICY "teams_insert"
    ON public.teams FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "teams_owner_update"
    ON public.teams FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "teams_owner_delete"
    ON public.teams FOR DELETE USING (auth.uid() = owner_id);

-- Members: members see their own teams; owners see all members
CREATE POLICY "members_select"
    ON public.team_members FOR SELECT
    USING (auth.uid() = user_id
        OR auth.uid() = (SELECT owner_id FROM public.teams WHERE id = team_id));
CREATE POLICY "members_join"
    ON public.team_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "members_leave"
    ON public.team_members FOR DELETE
    USING (auth.uid() = user_id
        OR auth.uid() = (SELECT owner_id FROM public.teams WHERE id = team_id));

-- ── AUTO-CREATE PROFILE ON SIGN UP ───────────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
    INSERT INTO public.profiles (id, name)
    VALUES (
        new.id,
        COALESCE(new.raw_user_meta_data->>'name', 'Herói')
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ── UPDATED_AT AUTO-STAMP ────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ── ADMIN: seed demo user profile (run after creating user in Auth) ──
-- UPDATE public.profiles SET is_premium = true WHERE id = 'a4538018-094a-4e93-bac1-79d9bb162ffc';
