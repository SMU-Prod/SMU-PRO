-- ══════════════════════════════════════════════════════════════
-- Fix ai_explanations para suportar múltiplos tipos (basic + refined_content)
-- A tabela original só tinha unique(lesson_id) e campo "explanation".
-- Precisamos adicionar "tipo" e "content" para o sistema de refinamento.
-- ══════════════════════════════════════════════════════════════

-- Adicionar coluna tipo (se não existir)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_explanations' AND column_name = 'tipo'
  ) THEN
    ALTER TABLE public.ai_explanations ADD COLUMN tipo TEXT NOT NULL DEFAULT 'basic';
  END IF;
END $$;

-- Adicionar coluna content (para armazenar HTML refinado, separado do explanation)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_explanations' AND column_name = 'content'
  ) THEN
    ALTER TABLE public.ai_explanations ADD COLUMN content TEXT;
  END IF;
END $$;

-- Remover constraint unique antiga (só lesson_id)
ALTER TABLE public.ai_explanations DROP CONSTRAINT IF EXISTS ai_explanations_lesson_id_key;

-- Criar novo unique constraint composto (lesson_id + tipo)
CREATE UNIQUE INDEX IF NOT EXISTS idx_ai_explanations_lesson_tipo
  ON public.ai_explanations(lesson_id, tipo);

-- Index por tipo para queries rápidas
CREATE INDEX IF NOT EXISTS idx_ai_explanations_tipo ON public.ai_explanations(tipo);
