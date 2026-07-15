-- Lista TODOS os cursos e a escola em que cada um cai HOJE (conforme a coluna `categorias`).
-- Regra: categorias contendo 'tecnico' ou 'renda-em-casa' => escola AULA (aula.smuproducoes.com).
--        caso contrário                                    => escola BACKSTAGE (smuproducoes.com).
-- Rode no Supabase → SQL Editor.

select
  case when c.categorias && array['tecnico','renda-em-casa'] then 'AULA' else 'BACKSTAGE' end as escola_hoje,
  c.slug,
  c.titulo,
  c.nivel,
  c.categoria  as categoria_assunto,
  c.categorias as categorias_atuais,
  c.ativo
from public.courses c
order by escola_hoje, c.slug;
