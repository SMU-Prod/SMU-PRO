-- ============================================================
-- Migration 003: Collections tables + security/performance fixes
-- ============================================================

-- 1. Criar tabelas de collections (trilhas de aprendizado)
create table if not exists public.collections (
  id          uuid primary key default uuid_generate_v4(),
  titulo      text not null,
  slug        text unique not null,
  descricao   text,
  ativo       boolean not null default false,
  ordem       integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.collection_courses (
  id              uuid primary key default uuid_generate_v4(),
  collection_id   uuid not null references public.collections(id) on delete cascade,
  course_id       uuid not null references public.courses(id) on delete cascade,
  ordem           integer not null default 0,
  unique(collection_id, course_id)
);

create index idx_collection_courses_collection on public.collection_courses(collection_id);
create index idx_collection_courses_course on public.collection_courses(course_id);

-- RLS para collections
alter table public.collections enable row level security;
alter table public.collection_courses enable row level security;

create policy "Collections ativas são públicas" on public.collections
  for select using (ativo = true);
create policy "Admin gerencia collections" on public.collections
  for all using (public.is_admin());

create policy "Collection courses são públicos" on public.collection_courses
  for select using (
    exists(select 1 from public.collections c where c.id = collection_id and c.ativo = true)
  );
create policy "Admin gerencia collection courses" on public.collection_courses
  for all using (public.is_admin());

-- Triggers de updated_at
create trigger set_updated_at before update on public.collections
  for each row execute function handle_updated_at();

-- 2. Fix: Certificates RLS - restringir acesso público
-- Remove política antiga que expõe todos os certificados
drop policy if exists "Certificado público por código" on public.certificates;

-- Nova política: usuário vê seus próprios OU acessa por código de verificação
create policy "Dono vê seus certificados" on public.certificates
  for select using (user_id = auth.uid());
create policy "Admin vê todos certificados" on public.certificates
  for select using (public.is_admin());
-- Acesso público apenas por código de verificação (para QR code de validação)
-- Essa verificação é feita via service_role no API route /api/certificates/pdf/[codigo]

-- 3. Fix: Divisão inteira no cálculo de progresso
-- Usar ROUND com cast para numeric para evitar truncamento
create or replace function public.recalculate_enrollment_progress(p_user_id uuid, p_course_id uuid)
returns void as $$
declare
  v_total_lessons integer;
  v_completed_lessons integer;
  v_progress integer;
begin
  select count(*) into v_total_lessons
    from public.lessons l
    join public.modules m on m.id = l.module_id
    where m.course_id = p_course_id;

  if v_total_lessons = 0 then return; end if;

  select count(*) into v_completed_lessons
    from public.progress p
    join public.lessons l on l.id = p.lesson_id
    join public.modules m on m.id = l.module_id
    where p.user_id = p_user_id
      and m.course_id = p_course_id
      and p.concluido = true;

  v_progress := round((v_completed_lessons::numeric / v_total_lessons::numeric) * 100);

  update public.enrollments
    set progresso = v_progress
    where user_id = p_user_id and course_id = p_course_id;
end;
$$ language plpgsql security definer;

-- 4. Webhook deduplication table
-- Previne processamento duplicado de webhooks do Asaas
create table if not exists public.webhook_log (
  id          uuid primary key default uuid_generate_v4(),
  provider    text not null,           -- 'asaas', 'clerk'
  event_type  text not null,
  external_id text not null,           -- payment.id ou webhook ID
  processed   boolean not null default true,
  created_at  timestamptz not null default now(),
  unique(provider, external_id)
);

create index idx_webhook_log_lookup on public.webhook_log(provider, external_id);

alter table public.webhook_log enable row level security;
create policy "Admin vê webhook logs" on public.webhook_log
  for select using (public.is_admin());
create policy "Sistema insere webhook logs" on public.webhook_log
  for insert with check (true);
