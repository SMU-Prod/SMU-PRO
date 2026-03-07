-- ============================================================
-- MIGRATION 001 — Fixes de segurança, performance e Asaas
-- Rodar no Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Adicionar 'asaas' ao enum payment_provider
ALTER TYPE payment_provider ADD VALUE IF NOT EXISTS 'asaas';

-- ============================================================
-- 2. INDEXES de FK faltantes (performance crítica)
-- ============================================================

-- progress
CREATE INDEX IF NOT EXISTS idx_progress_user_id     ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson_id   ON public.progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_lesson  ON public.progress(user_id, lesson_id);

-- lessons / modules
CREATE INDEX IF NOT EXISTS idx_lessons_module_id    ON public.lessons(module_id);
CREATE INDEX IF NOT EXISTS idx_modules_course_id    ON public.modules(course_id);

-- certificates
CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_course_id ON public.certificates(course_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_certificates_codigo ON public.certificates(codigo_verificacao);

-- quiz_attempts
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON public.quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_id  ON public.quiz_attempts(quiz_id);

-- activity_log
CREATE INDEX IF NOT EXISTS idx_activity_log_user_id    ON public.activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON public.activity_log(created_at DESC);

-- notes
CREATE INDEX IF NOT EXISTS idx_notes_user_id    ON public.notes(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_lesson_id  ON public.notes(lesson_id);

-- collections
CREATE INDEX IF NOT EXISTS idx_collection_courses_collection_id ON public.collection_courses(collection_id);
CREATE INDEX IF NOT EXISTS idx_collection_courses_course_id     ON public.collection_courses(course_id);

-- Composite enrollments (queries comuns)
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON public.enrollments(user_id, course_id);

-- Partial index cursos ativos (public listing)
CREATE INDEX IF NOT EXISTS idx_courses_ativo_created ON public.courses(created_at DESC) WHERE ativo = true;

-- ============================================================
-- 3. FULL-TEXT SEARCH em português
-- ============================================================

-- Adiciona coluna gerada para FTS (título + descrição)
ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS fts tsvector
  GENERATED ALWAYS AS (
    to_tsvector('portuguese',
      coalesce(titulo, '') || ' ' || coalesce(descricao, '')
    )
  ) STORED;

CREATE INDEX IF NOT EXISTS idx_courses_fts ON public.courses USING GIN(fts);

-- ============================================================
-- 4. Função auxiliar: resolve clerk_id → UUID (elimina repetição)
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_user_uuid(p_clerk_id TEXT)
RETURNS UUID AS $$
  SELECT id FROM public.users WHERE clerk_id = p_clerk_id LIMIT 1;
$$ LANGUAGE sql STABLE SECURITY DEFINER;
