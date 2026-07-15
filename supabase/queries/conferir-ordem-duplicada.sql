-- Procura estrago deixado pelo bug do `ordem` (a nova aula recebia `length` em vez de
-- max+1: apagar uma aula do meio e adicionar outra gerava DUAS com a mesma `ordem`,
-- e a lista embaralhava). Corrigido no app em 14/07 — isto acha o que já ficou torto.
-- Rode no Supabase → SQL Editor. Se não vier linha, não há estrago.

-- 1) AULAS com `ordem` repetida dentro do mesmo módulo
select c.slug            as curso,
       m.titulo          as modulo,
       l.ordem,
       count(*)          as qtd_aulas_nessa_ordem,
       string_agg(l.titulo, ' | ' order by l.titulo) as aulas
from public.lessons l
join public.modules m on m.id = l.module_id
join public.courses c on c.id = m.course_id
group by c.slug, m.titulo, l.ordem
having count(*) > 1
order by c.slug, m.titulo, l.ordem;

-- 2) MÓDULOS com `ordem` repetida dentro do mesmo curso
select c.slug as curso, m.ordem, count(*) as qtd,
       string_agg(m.titulo, ' | ' order by m.titulo) as modulos
from public.modules m
join public.courses c on c.id = m.course_id
group by c.slug, m.ordem
having count(*) > 1
order by c.slug, m.ordem;

-- ── CONSERTO (só rode depois de olhar o resultado acima) ─────────────────────
-- Renumera as aulas de cada módulo para 0,1,2… mantendo a ordem que aparece hoje
-- (desempata por título, que é estável). NÃO toca em `id` — o progresso do aluno
-- fica intacto; só a coluna `ordem` muda.
--
-- with novo as (
--   select l.id, row_number() over (partition by l.module_id order by l.ordem, l.titulo) - 1 as nova_ordem
--   from public.lessons l
-- )
-- update public.lessons l set ordem = novo.nova_ordem
-- from novo where novo.id = l.id and l.ordem is distinct from novo.nova_ordem;
