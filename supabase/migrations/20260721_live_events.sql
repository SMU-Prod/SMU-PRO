-- ╔══════════════════════════════════════════════════╗
-- ║  Lives — Aulas, Palestras e Podcasts ao Vivo    ║
-- ╚══════════════════════════════════════════════════╝
-- Spec: docs/superpowers/specs/2026-07-15-lives-aulas-palestras-podcasts-design.md

DO $$ BEGIN
  CREATE TYPE live_type AS ENUM ('aula', 'palestra', 'podcast');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  -- 'ambos' existe porque palestra/podcast de topo de funil servem as duas escolas.
  CREATE TYPE live_portal AS ENUM ('aula', 'main', 'ambos');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE live_access AS ENUM ('aberto', 'restrito');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE live_provider AS ENUM ('youtube', 'cloudflare');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE live_status AS ENUM ('agendado', 'ao_vivo', 'encerrado', 'cancelado');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS live_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  descricao TEXT,
  tipo live_type NOT NULL DEFAULT 'palestra',
  portal live_portal NOT NULL,
  acesso live_access NOT NULL DEFAULT 'aberto',
  provider live_provider NOT NULL DEFAULT 'youtube',
  course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
  youtube_id TEXT,
  cf_live_input_id TEXT,
  cf_video_uid TEXT,
  status live_status NOT NULL DEFAULT 'agendado',
  inicio_previsto TIMESTAMPTZ NOT NULL,
  inicio_real TIMESTAMPTZ,
  fim_real TIMESTAMPTZ,
  recording_lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
  criado_por UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Invariantes no banco, não só no app: uma action com bug não pode
  -- gravar um estado que o produto considera impossível.
  CONSTRAINT live_restrito_exige_curso
    CHECK (acesso <> 'restrito' OR course_id IS NOT NULL),
  CONSTRAINT live_youtube_exige_id
    CHECK (provider <> 'youtube' OR youtube_id IS NOT NULL),
  CONSTRAINT live_cloudflare_exige_input
    CHECK (provider <> 'cloudflare' OR cf_live_input_id IS NOT NULL),
  -- O erro caro: marcar restrito e publicar no YouTube por engano.
  CONSTRAINT live_restrito_exige_cloudflare
    CHECK (acesso <> 'restrito' OR provider = 'cloudflare'),
  -- Curso pertence a uma escola; a live dele também.
  CONSTRAINT live_ambos_sem_curso
    CHECK (portal <> 'ambos' OR course_id IS NULL)
);

CREATE INDEX IF NOT EXISTS idx_live_events_agenda
  ON live_events (status, inicio_previsto);
CREATE INDEX IF NOT EXISTS idx_live_events_portal
  ON live_events (portal, status);

-- Log de presença. NR-01 Anexo II 4.7.1: retenção mínima de 2 anos após o
-- fim da validade do curso. NUNCA incluir esta tabela em rotina de limpeza.
CREATE TABLE IF NOT EXISTS live_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  live_event_id UUID NOT NULL REFERENCES live_events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  duracao_segundos INTEGER NOT NULL DEFAULT 0,
  ip TEXT,
  user_agent TEXT,
  UNIQUE (live_event_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_live_attendance_evento
  ON live_attendance (live_event_id);

CREATE TABLE IF NOT EXISTS live_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  live_event_id UUID NOT NULL REFERENCES live_events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  texto TEXT NOT NULL,
  oculto BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_live_messages_evento
  ON live_messages (live_event_id, created_at);

-- ============================================================
-- RLS
-- ============================================================
-- O app acessa estas tabelas via service_role, que bypassa RLS. As policies
-- abaixo existem por dois motivos: profundidade de defesa se a anon key
-- encostar nelas, e o Realtime do chat — que roda no NAVEGADOR com a anon key
-- e RESPEITA RLS. Sem policy de SELECT, o chat nao recebe evento nenhum e
-- quebra em silencio.
--
-- Nao existe ponte Clerk->Supabase neste app (src/lib/supabase/client.ts usa a
-- anon key crua, sem accessToken), entao auth.uid() e SEMPRE NULL aqui. Por
-- isso as policies nao tentam identificar o usuario: elas so distinguem o que
-- e publico do que nao e.

ALTER TABLE live_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_messages ENABLE ROW LEVEL SECURITY;

-- Live aberta vai para o YouTube listado — a agenda dela e publica por definicao.
DROP POLICY IF EXISTS "anon_le_live_aberta" ON live_events;
CREATE POLICY "anon_le_live_aberta" ON live_events
  FOR SELECT USING (acesso = 'aberto');

-- Chat de live aberta: leitura publica. Necessario para o Realtime funcionar.
-- Falha FECHADO de proposito: quando a live restrita (Cloudflare) chegar, o
-- chat dela NAO sera legivel pela anon key e o Realtime vai parar de entregar
-- — o que nos obriga a resolver a identidade direito, em vez de vazar calado.
DROP POLICY IF EXISTS "anon_le_chat_de_live_aberta" ON live_messages;
CREATE POLICY "anon_le_chat_de_live_aberta" ON live_messages
  FOR SELECT USING (
    oculto = false
    AND EXISTS (
      SELECT 1 FROM live_events e
      WHERE e.id = live_messages.live_event_id AND e.acesso = 'aberto'
    )
  );

-- live_attendance NAO recebe policy: guarda ip e user_agent por aluno (PII, e
-- e o log de auditoria NR-01 Anexo II 4.7.1). Ninguem alem do service_role
-- encosta nela.

-- ============================================================
-- Trigger: manter updated_at em dia
-- ============================================================
CREATE OR REPLACE FUNCTION update_live_events_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS live_events_updated_at ON live_events;
CREATE TRIGGER live_events_updated_at
  BEFORE UPDATE ON live_events
  FOR EACH ROW EXECUTE FUNCTION update_live_events_updated_at();

-- ============================================================
-- Realtime
-- ============================================================
-- A publication supabase_realtime e opt-in por tabela. Sem esta linha o chat
-- assina o canal com sucesso, o RLS deixa passar, e nenhum evento chega —
-- falha silenciosa que parece bug de cliente. Vai junto da policy acima, que
-- existe exatamente para o mesmo caminho.
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE live_messages;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
