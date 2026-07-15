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
