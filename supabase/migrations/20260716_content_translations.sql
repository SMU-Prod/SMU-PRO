-- Cache de traduções de CONTEÚDO (títulos/descrições de cursos, módulos e aulas).
-- Preenchido sob demanda pelo tradutor de conteúdo (src/lib/i18n/content.ts):
-- quando um curso/aula é aberto em EN/ES, o que falta é traduzido via OpenAI e
-- gravado aqui. `source_hash` guarda o hash do texto de origem em PT — se o texto
-- for editado, o hash muda e a tradução é refeita automaticamente na próxima visita.

create table if not exists public.content_translations (
  entity_type text        not null,          -- 'course' | 'module' | 'lesson'
  entity_id   uuid        not null,
  lang        text        not null,          -- 'en' | 'es'
  source_hash text        not null,
  fields      jsonb       not null default '{}'::jsonb,  -- { titulo, descricao, descricao_curta }
  updated_at  timestamptz not null default now(),
  primary key (entity_type, entity_id, lang)
);

create index if not exists content_translations_entity_idx
  on public.content_translations (entity_id, lang);

-- RLS: leitura liberada (traduções não são sensíveis); escrita só via service_role
-- (o server usa createAdminClient, que ignora RLS).
alter table public.content_translations enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'content_translations'
      and policyname = 'content_translations_read'
  ) then
    create policy "content_translations_read"
      on public.content_translations for select using (true);
  end if;
end $$;
