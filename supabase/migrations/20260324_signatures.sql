-- ============================================================
-- Migration: Digital Signatures for NR Certificates
-- ============================================================

-- Instrutores e responsáveis técnicos
create table if not exists public.instructors (
  id              uuid primary key default gen_random_uuid(),
  nome            text not null,
  qualificacao    text,
  formacao        text,
  registro        text,
  tipo            text not null default 'instrutor' check (tipo in ('instrutor', 'responsavel_tecnico')),
  assinatura_img  text,
  ativo           boolean not null default true,
  created_at      timestamptz not null default now()
);

-- Vínculo instrutor → curso/aula
create table if not exists public.course_instructors (
  id              uuid primary key default gen_random_uuid(),
  course_id       uuid not null references public.courses(id) on delete cascade,
  lesson_id       uuid references public.lessons(id) on delete cascade,
  instructor_id   uuid not null references public.instructors(id) on delete cascade,
  tipo            text not null check (tipo in ('instrutor', 'responsavel_tecnico')),
  created_at      timestamptz not null default now(),
  unique(course_id, lesson_id, tipo)
);

create index if not exists idx_course_instructors_course on public.course_instructors(course_id);
create index if not exists idx_course_instructors_lesson on public.course_instructors(lesson_id);

-- Assinaturas digitais nos certificados
create table if not exists public.certificate_signatures (
  id              uuid primary key default gen_random_uuid(),
  certificate_id  uuid not null references public.certificates(id) on delete cascade,
  tipo            text not null check (tipo in ('trabalhador', 'instrutor', 'responsavel_tecnico')),
  assinatura_img  text not null,
  nome_assinante  text,
  assinado_em     timestamptz not null default now(),
  unique(certificate_id, tipo)
);

create index if not exists idx_cert_signatures_cert on public.certificate_signatures(certificate_id);

-- RLS
alter table public.instructors enable row level security;
alter table public.course_instructors enable row level security;
alter table public.certificate_signatures enable row level security;

-- Policies: instructors (admin full, users read)
create policy "Admins manage instructors" on public.instructors
  for all using (
    exists (select 1 from public.users where clerk_id = auth.jwt()->>'sub' and role = 'admin')
  );
create policy "Users read instructors" on public.instructors
  for select using (true);

-- Policies: course_instructors (admin full, users read)
create policy "Admins manage course_instructors" on public.course_instructors
  for all using (
    exists (select 1 from public.users where clerk_id = auth.jwt()->>'sub' and role = 'admin')
  );
create policy "Users read course_instructors" on public.course_instructors
  for select using (true);

-- Policies: certificate_signatures
create policy "Admins manage signatures" on public.certificate_signatures
  for all using (
    exists (select 1 from public.users where clerk_id = auth.jwt()->>'sub' and role = 'admin')
  );
create policy "Users sign own certificates" on public.certificate_signatures
  for insert with check (
    exists (
      select 1 from public.certificates c
      join public.users u on u.id = c.user_id
      where c.id = certificate_id and u.clerk_id = auth.jwt()->>'sub'
    )
  );
create policy "Users read own signatures" on public.certificate_signatures
  for select using (
    exists (
      select 1 from public.certificates c
      join public.users u on u.id = c.user_id
      where c.id = certificate_id and u.clerk_id = auth.jwt()->>'sub'
    )
  );
