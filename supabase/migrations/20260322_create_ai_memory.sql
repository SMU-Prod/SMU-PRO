-- ══════════════════════════════════════════════════════════════
-- ai_memory: Sistema de memória para a IA aprender com ela mesma
-- A IA guarda o que funcionou bem e o que não funcionou
-- para melhorar a qualidade das gerações futuras.
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS ai_memory (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  categoria TEXT NOT NULL,                    -- 'som', 'luz', 'producao', etc.
  tipo TEXT NOT NULL DEFAULT 'lesson',        -- 'lesson', 'widget', 'image', 'prompt'
  chave TEXT NOT NULL,                        -- identificador do aprendizado
  conteudo TEXT NOT NULL,                     -- o que a IA aprendeu
  contexto JSONB DEFAULT '{}',               -- metadados (lesson_id, score, etc.)
  vezes_usado INTEGER DEFAULT 0,             -- quantas vezes esse aprendizado foi usado
  score REAL DEFAULT 0.0,                    -- pontuação de utilidade (-1 a 1)
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Índices para busca rápida
CREATE INDEX IF NOT EXISTS idx_ai_memory_categoria ON ai_memory(categoria);
CREATE INDEX IF NOT EXISTS idx_ai_memory_tipo ON ai_memory(tipo);
CREATE INDEX IF NOT EXISTS idx_ai_memory_score ON ai_memory(score DESC);

-- Unique constraint para não duplicar aprendizados
CREATE UNIQUE INDEX IF NOT EXISTS idx_ai_memory_unique
  ON ai_memory(categoria, tipo, chave);

-- RLS
ALTER TABLE ai_memory ENABLE ROW LEVEL SECURITY;

-- Apenas admin pode ler/escrever memória da IA
CREATE POLICY "Admin full access ai_memory"
  ON ai_memory FOR ALL
  USING (true)
  WITH CHECK (true);
