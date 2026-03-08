-- ============================================================
-- SMU PRO — Schema SQL Completo v1.0
-- Escola de Música e Eventos — Plataforma de Cursos
-- ============================================================

-- Extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm"; -- busca full-text

-- ============================================================
-- ENUMS
-- ============================================================

create type user_role as enum ('visitor', 'trainee', 'junior', 'pleno', 'projeto_cultural', 'admin');
create type course_level as enum ('trainee', 'junior', 'pleno');
create type course_category as enum ('som', 'luz', 'producao', 'dj', 'vj', 'roadie', 'marketing', 'efeitos', 'outros');
create type course_type as enum ('free', 'pago', 'projeto_cultural');
create type access_type as enum ('free', 'pago', 'projeto_cultural', 'manual');
create type enrollment_status as enum ('pendente', 'ativo', 'expirado', 'cancelado');
create type payment_provider as enum ('mercado_pago', 'stripe', 'manual', 'asaas');
create type content_type as enum ('video', 'pdf', 'texto', 'quiz', 'misto');
create type activity_type as enum (
  'enrollment', 'lesson_complete', 'quiz_pass', 'quiz_fail',
  'certificate_issued', 'login', 'payment', 'role_change'
);

-- ============================================================
-- TABELA: users
-- Sincronizada via Clerk Webhook
-- ============================================================

create table public.users (
  id            uuid primary key,                    -- ID vindo do Clerk
  clerk_id      text unique not null,                -- clerk user id
  nome          text not null,
  email         text unique not null,
  avatar_url    text,
  bio           text,
  role          user_role not null default 'trainee',
  projeto_cultural boolean not null default false,   -- aluno MIT
  nivel_atual   course_level not null default 'trainee',
  telefone      text,
  cidade        text,
  estado        text,
  ativo         boolean not null default true,
  ultimo_acesso timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ============================================================
-- TABELA: courses
-- ============================================================

create table public.courses (
  id              uuid primary key default uuid_generate_v4(),
  titulo          text not null,
  slug            text unique not null,
  descricao       text,
  descricao_curta text,
  nivel           course_level not null,
  categoria       course_category not null,
  categorias      text[] not null default '{}',          -- categorias adicionais (multi-select)
  tipo            course_type not null default 'free',
  preco           numeric(10,2),
  carga_horaria   integer,                            -- em minutos
  thumbnail_url   text,
  trailer_youtube_id text,
  ativo           boolean not null default false,
  destaque        boolean not null default false,
  ordem           integer not null default 0,
  total_aulas     integer not null default 0,         -- denormalizado
  total_alunos    integer not null default 0,         -- denormalizado
  avaliacao_media numeric(3,2) not null default 0,    -- 0-5
  criado_por      uuid references public.users(id),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_courses_nivel on public.courses(nivel);
create index idx_courses_categoria on public.courses(categoria);
create index idx_courses_ativo on public.courses(ativo);
create index idx_courses_slug on public.courses(slug);

-- ============================================================
-- TABELA: modules
-- ============================================================

create table public.modules (
  id          uuid primary key default uuid_generate_v4(),
  course_id   uuid not null references public.courses(id) on delete cascade,
  titulo      text not null,
  descricao   text,
  ordem       integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index idx_modules_course_id on public.modules(course_id);

-- ============================================================
-- TABELA: lessons
-- ============================================================

create table public.lessons (
  id              uuid primary key default uuid_generate_v4(),
  module_id       uuid not null references public.modules(id) on delete cascade,
  titulo          text not null,
  descricao       text,
  tipo            content_type not null default 'video',
  youtube_id      text,                               -- apenas o ID, nunca a URL
  pdf_path        text,                               -- Supabase Storage path
  conteudo_rico   text,                               -- HTML / Markdown
  duracao_min     integer not null default 0,
  ordem           integer not null default 0,
  tem_quiz        boolean not null default false,
  preview_gratis  boolean not null default false,     -- aula disponível sem matrícula
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_lessons_module_id on public.lessons(module_id);

-- ============================================================
-- TABELA: enrollments
-- ============================================================

create table public.enrollments (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid not null references public.users(id) on delete cascade,
  course_id       uuid not null references public.courses(id) on delete cascade,
  tipo_acesso     access_type not null default 'free',
  status          enrollment_status not null default 'ativo',
  payment_id      text,
  payment_provider payment_provider,
  valor_pago      numeric(10,2),
  progresso       integer not null default 0,         -- 0-100%
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  expires_at      timestamptz,                        -- null = vitalício
  unique(user_id, course_id)
);

create index idx_enrollments_user_id on public.enrollments(user_id);
create index idx_enrollments_course_id on public.enrollments(course_id);
create index idx_enrollments_status on public.enrollments(status);

-- ============================================================
-- TABELA: progress
-- ============================================================

create table public.progress (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid not null references public.users(id) on delete cascade,
  lesson_id     uuid not null references public.lessons(id) on delete cascade,
  concluido     boolean not null default false,
  tempo_assistido integer not null default 0,         -- segundos
  completed_at  timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create index idx_progress_user_id on public.progress(user_id);
create index idx_progress_lesson_id on public.progress(lesson_id);

-- ============================================================
-- TABELA: quizzes
-- ============================================================

create table public.quizzes (
  id                      uuid primary key default uuid_generate_v4(),
  lesson_id               uuid not null references public.lessons(id) on delete cascade,
  titulo                  text not null,
  descricao               text,
  nivel_minimo_aprovacao  integer not null default 70,  -- 0-100
  tentativas_permitidas   integer not null default 3,
  tempo_limite_min        integer,                       -- null = sem limite
  embaralhar_questoes     boolean not null default true,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

-- ============================================================
-- TABELA: quiz_questions
-- ============================================================

create table public.quiz_questions (
  id          uuid primary key default uuid_generate_v4(),
  quiz_id     uuid not null references public.quizzes(id) on delete cascade,
  texto       text not null,
  explicacao  text,                                    -- explicação da resposta correta
  ordem       integer not null default 0,
  pontos      integer not null default 1
);

-- ============================================================
-- TABELA: quiz_options
-- ============================================================

create table public.quiz_options (
  id          uuid primary key default uuid_generate_v4(),
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  texto       text not null,
  correta     boolean not null default false,
  ordem       integer not null default 0
);

-- ============================================================
-- TABELA: quiz_attempts
-- ============================================================

create table public.quiz_attempts (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid not null references public.users(id) on delete cascade,
  quiz_id       uuid not null references public.quizzes(id) on delete cascade,
  nota          integer not null,                      -- 0-100
  aprovado      boolean not null,
  respostas     jsonb,                                 -- {question_id: option_id, ...}
  tempo_gasto   integer,                               -- segundos
  created_at    timestamptz not null default now()
);

create index idx_quiz_attempts_user_id on public.quiz_attempts(user_id);
create index idx_quiz_attempts_quiz_id on public.quiz_attempts(quiz_id);

-- ============================================================
-- TABELA: notes (Anotações do aluno)
-- ============================================================

create table public.notes (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references public.users(id) on delete cascade,
  lesson_id   uuid not null references public.lessons(id) on delete cascade,
  conteudo    text not null,
  timestamp_video integer,                             -- segundo do vídeo
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index idx_notes_user_lesson on public.notes(user_id, lesson_id);

-- ============================================================
-- TABELA: certificates
-- ============================================================

create table public.certificates (
  id                  uuid primary key default uuid_generate_v4(),
  user_id             uuid not null references public.users(id) on delete cascade,
  course_id           uuid not null references public.courses(id) on delete cascade,
  codigo_verificacao  uuid unique not null default uuid_generate_v4(),
  pdf_path            text,
  emitido_em          timestamptz not null default now(),
  nota_final          integer,                         -- média das quizzes
  carga_horaria       integer,                         -- snapshot
  projeto_cultural    boolean not null default false,  -- selo MIT
  unique(user_id, course_id)
);

create index idx_certificates_codigo on public.certificates(codigo_verificacao);
create index idx_certificates_user_id on public.certificates(user_id);

-- ============================================================
-- TABELA: course_ratings
-- ============================================================

create table public.course_ratings (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references public.users(id) on delete cascade,
  course_id   uuid not null references public.courses(id) on delete cascade,
  nota        integer not null check (nota between 1 and 5),
  comentario  text,
  created_at  timestamptz not null default now(),
  unique(user_id, course_id)
);

-- ============================================================
-- TABELA: activity_log
-- ============================================================

create table public.activity_log (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users(id) on delete set null,
  tipo        activity_type not null,
  descricao   text,
  metadata    jsonb,
  ip_address  text,
  created_at  timestamptz not null default now()
);

create index idx_activity_log_user_id on public.activity_log(user_id);
create index idx_activity_log_tipo on public.activity_log(tipo);
create index idx_activity_log_created_at on public.activity_log(created_at desc);

-- ============================================================
-- TABELA: settings (configurações gerais da plataforma)
-- ============================================================

create table public.settings (
  key         text primary key,
  value       jsonb not null,
  descricao   text,
  updated_at  timestamptz not null default now()
);

insert into public.settings (key, value, descricao) values
  ('platform_name', '"SMU PRO"', 'Nome da plataforma'),
  ('platform_logo_url', 'null', 'URL do logo'),
  ('maintenance_mode', 'false', 'Modo manutenção'),
  ('allow_registration', 'true', 'Permitir novos cadastros'),
  ('certificate_min_quiz_score', '70', 'Nota mínima para certificado (%)'),
  ('stripe_enabled', 'false', 'Stripe habilitado'),
  ('mercado_pago_enabled', 'false', 'Mercado Pago habilitado'),
  ('smtp_from_email', '"no-reply@smupro.com.br"', 'Email remetente');

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Atualiza updated_at automaticamente
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Aplica trigger de updated_at em todas as tabelas relevantes
create trigger set_updated_at before update on public.users for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.courses for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.modules for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.lessons for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.enrollments for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.progress for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.quizzes for each row execute function handle_updated_at();
create trigger set_updated_at before update on public.notes for each row execute function handle_updated_at();

-- Verifica se usuário tem acesso a um curso
create or replace function public.user_has_course_access(p_user_id uuid, p_course_id uuid)
returns boolean as $$
declare
  v_user public.users;
  v_course public.courses;
  v_enrollment public.enrollments;
begin
  select * into v_user from public.users where id = p_user_id;
  select * into v_course from public.courses where id = p_course_id;

  if not found then return false; end if;
  if v_user.role = 'admin' then return true; end if;
  if v_user.projeto_cultural = true then return true; end if;
  if v_course.tipo = 'free' then return true; end if;

  select * into v_enrollment
    from public.enrollments
    where user_id = p_user_id
      and course_id = p_course_id
      and status = 'ativo'
      and (expires_at is null or expires_at > now());

  return found;
end;
$$ language plpgsql security definer;

-- Recalcula progresso do aluno no curso
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

  v_progress := (v_completed_lessons * 100 / v_total_lessons);

  update public.enrollments
    set progresso = v_progress
    where user_id = p_user_id and course_id = p_course_id;
end;
$$ language plpgsql security definer;

-- Trigger: ao concluir aula, recalcula progresso e emite certificado se 100%
create or replace function public.on_lesson_completed()
returns trigger as $$
declare
  v_course_id uuid;
  v_enrollment public.enrollments;
  v_all_quizzes_passed boolean;
begin
  if new.concluido = true and (old.concluido = false or old.concluido is null) then
    select m.course_id into v_course_id
      from public.lessons l
      join public.modules m on m.id = l.module_id
      where l.id = new.lesson_id;

    perform public.recalculate_enrollment_progress(new.user_id, v_course_id);

    select * into v_enrollment
      from public.enrollments
      where user_id = new.user_id and course_id = v_course_id;

    -- Se 100% e ainda sem certificado, verificar quizzes
    if v_enrollment.progresso = 100 then
      -- Checar se todos quizzes foram aprovados
      select not exists (
        select 1 from public.quizzes q
        join public.lessons l on l.id = q.lesson_id
        join public.modules m on m.id = l.module_id
        where m.course_id = v_course_id
          and not exists (
            select 1 from public.quiz_attempts qa
            where qa.quiz_id = q.id
              and qa.user_id = new.user_id
              and qa.aprovado = true
          )
      ) into v_all_quizzes_passed;

      if v_all_quizzes_passed then
        insert into public.certificates (user_id, course_id, projeto_cultural)
        select new.user_id, v_course_id, u.projeto_cultural
        from public.users u where u.id = new.user_id
        on conflict (user_id, course_id) do nothing;
      end if;
    end if;

    -- Log de atividade
    insert into public.activity_log (user_id, tipo, descricao, metadata)
    values (new.user_id, 'lesson_complete', 'Aula concluída',
            jsonb_build_object('lesson_id', new.lesson_id, 'course_id', v_course_id));
  end if;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_lesson_completed
  after insert or update on public.progress
  for each row execute function public.on_lesson_completed();

-- Atualiza total de aulas no curso (denormalized)
create or replace function public.update_course_lesson_count()
returns trigger as $$
declare v_course_id uuid;
begin
  select m.course_id into v_course_id
    from public.modules m
    where m.id = coalesce(new.module_id, old.module_id);

  update public.courses set total_aulas = (
    select count(*) from public.lessons l
    join public.modules m on m.id = l.module_id
    where m.course_id = v_course_id
  ) where id = v_course_id;

  return coalesce(new, old);
end;
$$ language plpgsql;

create trigger update_lesson_count after insert or delete on public.lessons
  for each row execute function public.update_course_lesson_count();

-- Atualiza avaliação média do curso
create or replace function public.update_course_rating()
returns trigger as $$
begin
  update public.courses set avaliacao_media = (
    select coalesce(avg(nota), 0) from public.course_ratings
    where course_id = coalesce(new.course_id, old.course_id)
  ) where id = coalesce(new.course_id, old.course_id);
  return coalesce(new, old);
end;
$$ language plpgsql;

create trigger update_rating after insert or update or delete on public.course_ratings
  for each row execute function public.update_course_rating();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

alter table public.users enable row level security;
alter table public.courses enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.progress enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_options enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.notes enable row level security;
alter table public.certificates enable row level security;
alter table public.course_ratings enable row level security;
alter table public.activity_log enable row level security;
alter table public.settings enable row level security;

-- Helper: obtém role do usuário logado
create or replace function public.get_my_role()
returns user_role as $$
  select role from public.users where id = auth.uid()
$$ language sql security definer stable;

create or replace function public.is_admin()
returns boolean as $$
  select exists(select 1 from public.users where id = auth.uid() and role = 'admin')
$$ language sql security definer stable;

-- USERS policies
create policy "Usuário vê seu próprio perfil" on public.users for select using (id = auth.uid());
create policy "Admin vê todos usuários" on public.users for select using (public.is_admin());
create policy "Usuário atualiza seu perfil" on public.users for update using (id = auth.uid());
create policy "Admin gerencia usuários" on public.users for all using (public.is_admin());
create policy "Webhook cria usuário" on public.users for insert with check (true);

-- COURSES policies
create policy "Cursos ativos são públicos" on public.courses for select using (ativo = true);
create policy "Admin gerencia cursos" on public.courses for all using (public.is_admin());

-- MODULES policies
create policy "Módulos de cursos ativos são públicos" on public.modules for select using (
  exists(select 1 from public.courses c where c.id = course_id and c.ativo = true)
);
create policy "Admin gerencia módulos" on public.modules for all using (public.is_admin());

-- LESSONS policies
create policy "Aulas de preview são públicas" on public.lessons for select using (preview_gratis = true);
create policy "Aluno com acesso vê aulas" on public.lessons for select using (
  exists(
    select 1 from public.modules m
    join public.courses c on c.id = m.course_id
    where m.id = module_id
      and public.user_has_course_access(auth.uid(), c.id)
  )
);
create policy "Admin gerencia aulas" on public.lessons for all using (public.is_admin());

-- ENROLLMENTS policies
create policy "Aluno vê suas matrículas" on public.enrollments for select using (user_id = auth.uid());
create policy "Admin gerencia matrículas" on public.enrollments for all using (public.is_admin());
create policy "Sistema cria matrícula" on public.enrollments for insert with check (user_id = auth.uid() or public.is_admin());

-- PROGRESS policies
create policy "Aluno vê seu próprio progresso" on public.progress for select using (user_id = auth.uid());
create policy "Aluno atualiza seu progresso" on public.progress for insert with check (user_id = auth.uid());
create policy "Aluno edita seu progresso" on public.progress for update using (user_id = auth.uid());
create policy "Admin vê todo progresso" on public.progress for select using (public.is_admin());

-- QUIZZES policies
create policy "Alunos com acesso veem quizzes" on public.quizzes for select using (
  exists(
    select 1 from public.lessons l
    join public.modules m on m.id = l.module_id
    join public.courses c on c.id = m.course_id
    where l.id = lesson_id
      and public.user_has_course_access(auth.uid(), c.id)
  )
);
create policy "Admin gerencia quizzes" on public.quizzes for all using (public.is_admin());

-- QUIZ QUESTIONS E OPTIONS policies
create policy "Alunos veem questões" on public.quiz_questions for select using (
  exists(
    select 1 from public.quizzes q
    join public.lessons l on l.id = q.lesson_id
    join public.modules m on m.id = l.module_id
    join public.courses c on c.id = m.course_id
    where q.id = quiz_id
      and public.user_has_course_access(auth.uid(), c.id)
  )
);
create policy "Admin gerencia questões" on public.quiz_questions for all using (public.is_admin());
create policy "Alunos veem opções" on public.quiz_options for select using (
  exists(
    select 1 from public.quiz_questions qq
    join public.quizzes q on q.id = qq.quiz_id
    join public.lessons l on l.id = q.lesson_id
    join public.modules m on m.id = l.module_id
    join public.courses c on c.id = m.course_id
    where qq.id = question_id
      and public.user_has_course_access(auth.uid(), c.id)
  )
);
create policy "Admin gerencia opções" on public.quiz_options for all using (public.is_admin());

-- QUIZ ATTEMPTS policies
create policy "Aluno vê suas tentativas" on public.quiz_attempts for select using (user_id = auth.uid());
create policy "Aluno cria tentativas" on public.quiz_attempts for insert with check (user_id = auth.uid());
create policy "Admin vê todas tentativas" on public.quiz_attempts for select using (public.is_admin());

-- NOTES policies
create policy "Aluno gerencia suas anotações" on public.notes for all using (user_id = auth.uid());

-- CERTIFICATES policies
create policy "Certificado público por código" on public.certificates for select using (true);
create policy "Sistema emite certificados" on public.certificates for insert with check (public.is_admin() or user_id = auth.uid());

-- RATINGS policies
create policy "Ratings são públicos" on public.course_ratings for select using (true);
create policy "Aluno avalia curso" on public.course_ratings for insert with check (user_id = auth.uid());
create policy "Aluno edita sua avaliação" on public.course_ratings for update using (user_id = auth.uid());

-- ACTIVITY LOG policies
create policy "Admin vê logs" on public.activity_log for select using (public.is_admin());
create policy "Sistema insere logs" on public.activity_log for insert with check (true);

-- SETTINGS policies
create policy "Settings são públicos para leitura" on public.settings for select using (true);
create policy "Admin gerencia settings" on public.settings for all using (public.is_admin());

-- ============================================================
-- VIEWS úteis para Admin Dashboard
-- ============================================================

create or replace view public.admin_course_stats as
select
  c.id,
  c.titulo,
  c.nivel,
  c.categoria,
  c.tipo,
  c.ativo,
  c.total_aulas,
  c.avaliacao_media,
  count(distinct e.user_id) as total_alunos,
  count(distinct cert.id) as total_certificados,
  round(avg(e.progresso), 1) as progresso_medio,
  c.created_at
from public.courses c
left join public.enrollments e on e.course_id = c.id and e.status = 'ativo'
left join public.certificates cert on cert.course_id = c.id
group by c.id;

create or replace view public.admin_dashboard_metrics as
select
  (select count(*) from public.users where ativo = true) as total_users,
  (select count(*) from public.users where projeto_cultural = true) as alunos_mit,
  (select count(*) from public.courses where ativo = true) as total_courses,
  (select count(*) from public.enrollments where status = 'ativo') as total_enrollments,
  (select count(*) from public.certificates) as total_certificates,
  (select coalesce(sum(valor_pago), 0) from public.enrollments where tipo_acesso = 'pago') as receita_total,
  (select count(*) from public.users where created_at > now() - interval '30 days') as new_users_30d,
  (select count(*) from public.enrollments where created_at > now() - interval '30 days') as new_enrollments_30d;

-- ============================================================
-- AI EXPLANATIONS CACHE
-- ============================================================
create table if not exists public.ai_explanations (
  id              uuid primary key default gen_random_uuid(),
  lesson_id       uuid not null references public.lessons(id) on delete cascade,
  explanation     text not null,
  model           text not null default 'claude-haiku-4-5-20251001',
  created_at      timestamptz not null default now(),
  unique(lesson_id)
);

-- ============================================================
-- STORAGE BUCKETS (executar no dashboard Supabase)
-- ============================================================
-- insert into storage.buckets (id, name, public) values ('course-thumbnails', 'course-thumbnails', true);
-- insert into storage.buckets (id, name, public) values ('lesson-pdfs', 'lesson-pdfs', false);
-- insert into storage.buckets (id, name, public) values ('certificates', 'certificates', false);
-- insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true);
-- insert into storage.buckets (id, name, public) values ('lesson-audio', 'lesson-audio', false);
