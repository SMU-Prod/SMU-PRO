-- ============================================================
-- Migration 002: Adiciona tipo de questão (multiple_choice, true_false)
-- ============================================================

-- Enum para tipo de questão
create type question_type as enum ('multiple_choice', 'true_false');

-- Adiciona coluna tipo à tabela quiz_questions
alter table public.quiz_questions
  add column tipo question_type not null default 'multiple_choice';
