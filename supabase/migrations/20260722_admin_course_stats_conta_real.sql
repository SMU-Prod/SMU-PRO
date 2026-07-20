-- ====================================================================
-- admin_course_stats: contar as aulas DE VERDADE (aplicada em 15/07/2026)
--
-- O painel mostrava "4 aulas" num curso que tinha 0 módulos e 0 aulas
-- (som-formacao-completa). A view lia `courses.total_aulas` — uma coluna
-- GUARDADA, que só muda quando algum script lembra de gravar. Toda aula
-- criada ou apagada pelo painel deixava o número mentindo, e o admin ficava
-- "defasado" sem ninguém perceber: o card diz um número, o curso tem outro.
--
-- Agora conta pelo caminho real (lessons -> modules -> course). Não envelhece
-- mais, para nenhum curso, das duas escolas.
--
-- Colunas 1..12 mantêm NOME e ORDEM originais — `create or replace view` exige
-- isso (ele recusa até renomear coluna). As novas entram no fim:
--   · slug        → o admin fazia uma 2ª consulta em `courses` só para pegar o slug
--   · categorias  → permite filtrar por escola (portal) direto no SQL
--   · total_modulos → curso vazio fica visível na lista
-- ====================================================================
create or replace view public.admin_course_stats as
select
  c.id,
  c.titulo,
  c.nivel,
  c.categoria,
  c.tipo,
  c.ativo,
  coalesce(la.total_aulas, 0)::integer          as total_aulas,
  c.avaliacao_media,
  coalesce(e.total_alunos, 0::bigint)           as total_alunos,
  coalesce(cert.total_certificados, 0::bigint)  as total_certificados,
  e.progresso_medio,
  c.created_at,
  c.slug,
  c.categorias,
  coalesce(md.total_modulos, 0)::integer        as total_modulos
from courses c
left join lateral (
  select count(distinct en.user_id) as total_alunos,
         round(avg(en.progresso), 1) as progresso_medio
  from enrollments en
  where en.course_id = c.id and en.status = 'ativo'::enrollment_status
) e on true
left join lateral (
  select count(distinct cert2.id) as total_certificados
  from certificates cert2
  where cert2.course_id = c.id
) cert on true
left join lateral (
  select count(*) as total_aulas
  from lessons l
  join modules m2 on m2.id = l.module_id
  where m2.course_id = c.id
) la on true
left join lateral (
  select count(*) as total_modulos
  from modules m3
  where m3.course_id = c.id
) md on true;
