-- ═══════════════════════════════════════════════════════════════
-- SMU PRO — AI Animations
-- Armazena roteiros e assets de animações geradas por IA
-- Pipeline: Gemini (roteiro) → Imagen (imagens) → Veo (vídeo) → TTS (narração)
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS ai_animations (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id   UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  tipo        TEXT NOT NULL DEFAULT 'standard',   -- 'standard' (Imagen only) | 'premium' (Imagen + Veo)
  status      TEXT NOT NULL DEFAULT 'pending',     -- 'pending' | 'generating' | 'ready' | 'error'
  roteiro     JSONB,                               -- Roteiro completo gerado pelo Gemini
  urls        JSONB,                               -- [{image, video, audio}] por cena
  model       TEXT,                                -- ex: "gemini-2.5-flash+imagen4+veo2"
  custo_usd   NUMERIC(8,4),                        -- Custo estimado da geração
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(lesson_id, tipo)
);

-- Índices para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_ai_animations_lesson ON ai_animations(lesson_id);
CREATE INDEX IF NOT EXISTS idx_ai_animations_status ON ai_animations(status);

-- RLS: Qualquer usuário autenticado pode ler animações (são conteúdo do curso)
ALTER TABLE ai_animations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read animations"
  ON ai_animations FOR SELECT
  TO authenticated
  USING (true);

-- Apenas service_role pode inserir/atualizar (via API server-side)
CREATE POLICY "Service role can manage animations"
  ON ai_animations FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
