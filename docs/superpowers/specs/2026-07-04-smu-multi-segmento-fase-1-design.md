# SMU PRO — Plataforma Multi-Segmento · Fase 1 (Fundação)

**Data:** 2026-07-04
**Status:** Aprovado para plano de implementação
**Autor:** Erick + Claude (análise de CTO)

---

## 0. Contexto e visão

O SMU PRO foi construído como plataforma de cursos em vídeo **monodomínio**, cravada no mercado de eventos ao vivo (som, luz, DJ, VJ, produção, efeitos, roadie, marketing). O objetivo estratégico é transformá-lo em um **marketplace único** (marca SMU, um único deploy e banco) capaz de abrigar cursos de **outros segmentos** (ex: fotografia, produção musical, marketing, e futuramente exam-prep como OAB/concursos), **sem misturar** os públicos.

Decisões estratégicas já travadas (ver seção 2). Esta é a visão completa em 4 fases; **este documento especifica apenas a Fase 1**:

| Fase | Entrega | Visível ao usuário? |
|---|---|---|
| **1. Fundação** *(este spec)* | Tabelas de segmento, FKs em `courses`, backfill "Eventos", separação de roles/acesso | **Não** |
| 2. Multi-hub | Seletor de mundos, hubs por segmento, switcher, catálogo/tema por segmento, "Meus Cursos" unificado | Sim |
| 3. Domínio configurável | Prompt de IA, certificado e programas de acesso por segmento; admin cria segmento ponta-a-ponta | Admin |
| 4. Prova real | Subir 1 segmento novo (ex: Fotografia) 100% pelo admin, zero código | Sim |

A Fase 1 é o alicerce **invisível**: ao final dela, a plataforma renderiza exatamente como hoje (um único segmento "Eventos"), mas toda a estrutura de dados já é multi-segmento. As fases 2–4 recebem specs próprios.

---

## 1. Objetivo e não-objetivos da Fase 1

### Objetivo
Substituir as suposições monodomínio cravadas em **enums de Postgres e no modelo de papéis** por estrutura **orientada a dados**, com **zero mudança visível** e **zero downtime**.

### Escopo (in)
1. Tabelas `segments`, `segment_categories`, `segment_levels`.
2. FKs em `courses` (`segment_id`, `category_id`, `level_id`) convivendo com os enums atuais (dual-write).
3. Backfill: seed do segmento "Eventos" + migração de 100% dos cursos, categorias e níveis existentes.
4. Separação do `users.role` em: **permissão** (role) vs. **progressão por segmento** (dado) vs. **programa de acesso** (dado).
5. Generalização do acesso "MIT/projeto_cultural" para `access_programs`.
6. Ajuste da função de acesso (`user_has_course_access`) e das RLS afetadas para ler a nova estrutura, preservando o comportamento atual.

### Não-objetivos (fora da Fase 1)
- Qualquer mudança de UI/navegação (seletor de mundos, hubs, switcher) → Fase 2.
- Prompt de IA por segmento, certificado por segmento, admin de segmentos → Fase 3.
- Remoção definitiva dos enums antigos → só após Fase 2 estável.
- Migração dos arquivos JSON estáticos de metadados de curso (dívida técnica pré-existente, tratada em separado).
- Motor de exam-prep (banco de questões/simulados) — o motor de conteúdo permanece o de curso em vídeo.

---

## 2. Decisões travadas

1. **Marketplace único** — marca SMU, um deploy, um banco. Segmento é dado, não tenant nem deploy separado. (Não é white-label/multi-tenant.)
2. **Mesmo motor de conteúdo** — `Curso → Módulo → Aula → Quiz` permanece intacto.
3. **Usuário cruza entre segmentos** — conta, "Meus Cursos" e checkout unificados.
4. **Modelo A: hubs com troca livre** — descoberta separada por segmento, conta unificada.
5. **Nível opcional por segmento** — cada segmento define (ou não) sua própria escada de níveis.
6. **Entrada: seletor público + hub ao logar** — landing pública é um seletor de mundos; logado, cai no último segmento com switcher. *(Comportamento de UI implementado na Fase 2; a Fase 1 só garante que o dado existe.)*

---

## 3. Estado atual (o que está cravado)

Enums monodomínio em `supabase/schema.sql`:

```sql
create type user_role       as enum ('visitor','trainee','junior','pleno','projeto_cultural','admin');
create type course_level    as enum ('trainee','junior','pleno');
create type course_category as enum ('som','luz','producao','dj','vj','roadie','marketing','efeitos','outros');
create type course_type     as enum ('free','pago','projeto_cultural');
```

Colunas acopladas:
- `courses.nivel course_level`, `courses.categoria course_category`, `courses.categorias text[]`, `courses.tipo course_type`.
- `users.role user_role` (mistura permissão + nível + programa), `users.projeto_cultural boolean`, `users.nivel_atual course_level`.
- `user_has_course_access(uid, course_id)`: retorna true se `role='admin'`, ou `projeto_cultural=true`, ou `course.tipo='free'`; senão checa `enrollments`.
- Catálogo (`courses-view.tsx`) agrupa a vitrine **por `nivel`** (trainee/junior/pleno).

**Diagnóstico:** o eixo organizador do produto é `Área (categoria) × Nível`. "Nível" (trainee/junior/pleno) é uma escada de carreira específica de eventos e está entranhado em 6 lugares (catálogo, `courses.nivel`, `users.role`, acesso, certificado, auto-promoção). Forçar cursos de outros segmentos nessa escada é o que gera a "sopa".

---

## 4. Modelo de dados alvo (Fase 1)

### 4.1 Novas tabelas

```sql
-- Segmento: o novo topo da hierarquia
create table public.segments (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,              -- 'eventos', 'fotografia', 'oab'
  nome          text not null,                     -- 'Eventos ao Vivo'
  descricao     text,
  cor_primaria  text,                              -- accent do hub (ex: '#F59E0B' âmbar atual)
  cor_accent    text,
  icone         text,                              -- nome do ícone lucide
  ordem         integer not null default 0,
  ativo         boolean not null default true,
  config        jsonb not null default '{}',       -- has_levels, ai_prompt_template, cert_rules, copy_home (usados nas fases 2-3)
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Categoria: filha do segmento (substitui o enum course_category)
create table public.segment_categories (
  id          uuid primary key default gen_random_uuid(),
  segment_id  uuid not null references public.segments(id) on delete cascade,
  slug        text not null,                       -- 'som', 'luz', ...
  nome        text not null,                       -- 'Sonorização'
  icone       text,
  ordem       integer not null default 0,
  ativo       boolean not null default true,
  unique (segment_id, slug)
);

-- Nível: OPCIONAL por segmento (substitui o enum course_level)
create table public.segment_levels (
  id            uuid primary key default gen_random_uuid(),
  segment_id    uuid not null references public.segments(id) on delete cascade,
  slug          text not null,                     -- 'trainee','junior','pleno'
  nome          text not null,                     -- 'Trainee'
  ordem         integer not null,                  -- posição na escada
  padrao_gratis boolean not null default false,    -- espelha o "free até junior" atual
  unique (segment_id, slug)
);
```

### 4.2 Alterações em `courses` (aditivas, não-destrutivas)

```sql
alter table public.courses
  add column segment_id  uuid references public.segments(id),
  add column category_id uuid references public.segment_categories(id),
  add column level_id    uuid references public.segment_levels(id);   -- NULLABLE (segmento sem nível)

create index idx_courses_segment  on public.courses(segment_id);
create index idx_courses_category on public.courses(category_id);
create index idx_courses_level    on public.courses(level_id);
```

Os enums antigos (`nivel`, `categoria`, `tipo`, `categorias[]`) **permanecem** durante toda a Fase 1/2 (dual-write). `segment_id` só recebe `not null` **após** o backfill validar.

### 4.3 Separação de papéis e acesso

```sql
-- Permissão pura (sem nível). Migração de valores na seção 5.
create type app_role as enum ('admin','content_manager','instructor','student');
alter table public.users add column app_role app_role not null default 'student';

-- Progressão por segmento (o "nivel_atual" deixa de ser global)
create table public.user_segment_progress (
  user_id           uuid not null references public.users(id) on delete cascade,
  segment_id        uuid not null references public.segments(id) on delete cascade,
  current_level_id  uuid references public.segment_levels(id),
  updated_at        timestamptz not null default now(),
  primary key (user_id, segment_id)
);

-- Programas de acesso (generaliza o MIT/projeto_cultural)
create table public.access_programs (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,                -- 'mit'
  nome        text not null,                       -- 'Projeto Cultural MIT'
  escopo      text not null default 'segment',     -- 'segment' | 'all'
  segment_id  uuid references public.segments(id), -- null quando escopo='all'
  ativo       boolean not null default true
);

create table public.user_access_programs (
  user_id     uuid not null references public.users(id) on delete cascade,
  program_id  uuid not null references public.access_programs(id) on delete cascade,
  concedido_em timestamptz not null default now(),
  primary key (user_id, program_id)
);
```

`users.role`, `users.projeto_cultural` e `users.nivel_atual` **permanecem** na Fase 1 (dual-write / fonte de verdade legada) e só são removidos após validação em fase posterior.

---

## 5. Migração de dados (zero downtime)

Executada em migração idempotente, dentro de transação onde possível:

1. **Seed do segmento Eventos**
   - `insert into segments (slug,nome,cor_primaria,ordem) values ('eventos','Eventos ao Vivo','#F59E0B',0)`.
2. **Seed das categorias** — as 8 do enum (`som,luz,producao,dj,vj,roadie,marketing,efeitos` + `outros`) → `segment_categories` do segmento Eventos, com os rótulos hoje hardcoded em `course-form.tsx`/`cursos/page.tsx`.
3. **Seed dos níveis** — `trainee/junior/pleno` → `segment_levels` de Eventos (`ordem` 0/1/2; `padrao_gratis=true` para trainee e junior, espelhando a regra atual).
4. **Backfill de `courses`**
   - `segment_id` = Eventos para todos.
   - `category_id` = match por `courses.categoria` → `segment_categories.slug`.
   - `level_id` = match por `courses.nivel` → `segment_levels.slug`.
5. **Programa MIT** — `insert into access_programs (slug,nome,escopo,segment_id) values ('mit','Projeto Cultural MIT','segment', <eventos_id>)`; `insert into user_access_programs` para todos com `users.projeto_cultural=true`.
6. **Papéis**
   - `admin` → `app_role='admin'`.
   - `trainee|junior|pleno|projeto_cultural|visitor` → `app_role='student'`.
   - `content_manager`/`instrutor` (se existirem em dados) → mapear para `content_manager`/`instructor`.
   - `nivel_atual` → `user_segment_progress` (segmento Eventos, `current_level_id` correspondente).
7. **Validação** — assert de que **nenhum** curso ficou com `segment_id`/`category_id` nulos (level pode ser nulo por design) antes de qualquer passo destrutivo futuro.

### Rollback
Como todas as mudanças são **aditivas**, o rollback da Fase 1 é: parar de ler as novas colunas/tabelas (feature flag no código) e, se necessário, `drop` das colunas/tabelas novas. Os dados legados (`nivel`, `categoria`, `role`, `projeto_cultural`) nunca são apagados nesta fase.

---

## 6. Impacto no código (Fase 1 — sem mudança visível)

O comportamento **não muda**; a leitura é adaptada para preferir a nova estrutura com fallback ao enum.

| Arquivo | Mudança |
|---|---|
| `supabase/schema.sql` + nova migração | DDL das seções 4–5 |
| `supabase/schema.sql` → `user_has_course_access` | Passar a checar `app_role='admin'`, `user_access_programs` (via `access_programs` que cobre o curso) e `courses.tipo='free'` — mantendo o resultado idêntico ao atual |
| RLS afetadas por `role`/`projeto_cultural` | Espelhar via `app_role`/`user_access_programs` sem alterar quem vê o quê |
| `src/types/database.ts` | Tipos das novas tabelas; `app_role`; campos FK em `Course` |
| `src/lib/actions/courses.ts` | Selects passam a trazer `segment_id/category_id/level_id` (join), mantendo `categoria/nivel` no retorno para não quebrar a UI |
| `src/lib/actions/access.ts` | Ler `app_role` + programas; helpers de "é admin", "tem acesso" preservam contrato |
| Catálogo (`courses-view.tsx`, `cursos/page.tsx`) | **Nenhuma mudança funcional na Fase 1** — segue agrupando por `nivel`; adaptação para agrupar por `segment_levels` é da Fase 2 |
| Seed de categorias/níveis/labels | Deixar de depender das listas hardcoded será concluído na Fase 2; na Fase 1 as listas continuam válidas pois espelham o seed |

**Regra:** nenhuma leitura na Fase 1 pode passar a depender exclusivamente das novas colunas antes do backfill validar. Preferir novo-com-fallback.

---

## 7. Verificação / testes

- **Migração idempotente:** rodar 2× não duplica seeds nem quebra.
- **Paridade de acesso:** suíte que, para uma amostra de usuários (admin, MIT, trainee, pleno com/sem enrollment), compara o retorno de `user_has_course_access` **antes e depois** — deve ser idêntico.
- **Backfill completo:** query de auditoria garante `count(*) where segment_id is null = 0` e `where category_id is null = 0`.
- **Catálogo inalterado:** snapshot da listagem `/cursos` (contagem por grupo e ordem) idêntico antes/depois.
- **Tipos:** `tsc` limpo após alterar `database.ts`.
- **RLS:** teste de que aluno sem acesso continua sem ver aula paga; admin continua vendo tudo.

---

## 8. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Backfill mapear categoria/nível errado | Match por `slug` exato + auditoria de nulos antes de prosseguir |
| RLS/acesso divergir do comportamento atual | Teste de paridade lado a lado (seção 7) como gate obrigatório |
| Dual-write dessincronizar enum vs. FK | Na Fase 1 os writes de curso passam a gravar **ambos**; validação de consistência em CI |
| Escopo vazar para UI | "Não-objetivos" explícitos; qualquer mudança de navegação é barrada para a Fase 2 |
| Dívida dos JSONs estáticos de metadados | Fora de escopo; apenas **não** adicionar novos JSONs |

---

## 9. Definição de pronto (DoD) da Fase 1

- [ ] Migração aplicada em staging com as 3 tabelas novas + FKs + tabelas de acesso.
- [ ] 100% dos cursos com `segment_id` e `category_id` preenchidos; níveis migrados.
- [ ] MIT convertido em `access_programs` + `user_access_programs`.
- [ ] `app_role` populado; `user_segment_progress` populado a partir de `nivel_atual`.
- [ ] Teste de paridade de acesso verde (antes == depois).
- [ ] Catálogo e player renderizam idênticos ao atual.
- [ ] `tsc` limpo; RLS testada.
- [ ] Enums e colunas legadas **preservados** (nada removido).

Ao cumprir o DoD, a plataforma está pronta para a **Fase 2 (Multi-hub)** — onde o dado passa a virar experiência.
