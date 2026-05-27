-- ============================================================
-- EduQuest — Migration 006
-- Add mnemonics and mini_review columns to the stages table.
-- Both store JSONB arrays so they survive Supabase round-trips
-- without needing separate tables.
-- ============================================================

ALTER TABLE public.stages
    ADD COLUMN IF NOT EXISTS mnemonics   JSONB NOT NULL DEFAULT '[]',
    ADD COLUMN IF NOT EXISTS mini_review JSONB NOT NULL DEFAULT '[]';
