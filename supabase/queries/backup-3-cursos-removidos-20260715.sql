-- ====================================================================
-- BACKUP dos 3 cursos removidos em 15/07/2026, a pedido do dono
-- ("estes tres nao estamos usando pode deletar").
--
-- Conferido ANTES de apagar: 0 certificados e 0 progresso de aluno nos três.
-- Perderam-se apenas 4 matrículas, todas com progresso 0 — ninguém perdeu
-- documento nem estudo.
--
-- Para restaurar, rode os inserts abaixo (os ids são os originais).
-- ====================================================================

-- 1) Curso de Física — vazio (0 módulos), rascunho, 3 matrículas sem progresso
insert into public.courses (id,titulo,slug,descricao,descricao_curta,nivel,categoria,tipo,carga_horaria,thumbnail_url,trailer_youtube_id,ativo,destaque,ordem,total_aulas,criado_por,categorias) values
  ('b4161cf1-0d2f-4051-a76c-e3a8711ce66d','Curso de Física','curso-de-fisica','Pré-requisito: Ensino Fundamental completo.','Curso de Física para nível médio de ensino.','trainee','outros','free',null,'','',false,true,0,0,'06b92d1e-188f-4c9b-b205-0ef9990d9c0a','{outros}');

-- 2) Som — Básico (som-basico-formacao) — rascunho duplicado do "Som — Básico" ativo.
--    Tinha 1 módulo e 8 aulas; o curso vivo (som-basico, e669a8b5-…) tem 2 módulos e 14 aulas.
insert into public.courses (id,titulo,slug,descricao_curta,nivel,categoria,tipo,carga_horaria,ativo,destaque,ordem,total_aulas,categorias) values
  ('5b000000-b551-4c00-9000-000000000001','Som — Básico','som-basico-formacao','Fundamentos do som ao vivo para iniciantes: a cadeia do som, microfones, cabos, mesa, e como ligar tudo — com simuladores práticos.','trainee','som','free',0,false,false,10,8,'{som}');
insert into public.modules (id,course_id,titulo,ordem) values
  ('5b000000-b551-4c00-9000-0000000000a1','5b000000-b551-4c00-9000-000000000001','Fundamentos do Som ao Vivo',1);
-- Aulas que existiam neste módulo (conteúdo não guardado — as boas foram para som-basico):
--   A cadeia do som ao vivo: da voz até a caixa
--   Microfones: tipos, phantom power e padrão polar
--   A mesa analógica: canais, ganho e EQ de 3 bandas (notebook via P2->P10)
--   Microfones sem fio: canal, frequência, sincronismo e bateria
--   Analógico x Digital e gain staging: sinal forte e limpo
--   PA de menor porte: caixa ativa x passiva, amplificação e posicionamento
--   Ordem de ligar e desligar o sistema (proteja as caixas)
--   Passagem de som: o checklist do técnico (capstone)

-- 3) Som — Formação Completa — ÓRFÃO: 0 módulos, 0 aulas, 0 matrículas.
--    ATENÇÃO: o id dele (5504c000-…-0001) era referenciado por 4 scripts de build
--    (pleno-mix-show, pleno-ah-sq, pleno-digico, som-formacao-completa). O conteúdo
--    deles NÃO estava aqui — os módulos 5504c000-…-a1/a2 pertencem ao pleno-som
--    (8f29f6dd-3dc6-47fe-b4d3-1cd15514a21d). Os scripts foram repontados para lá.
insert into public.courses (id,titulo,slug,descricao_curta,nivel,categoria,tipo,carga_horaria,ativo,destaque,ordem,total_aulas,categorias) values
  ('5504c000-5011-4a00-9000-000000000001','Som — Formação Completa','som-formacao-completa','Formação profissional em som ao vivo: teoria de fontes técnicas + simuladores-réplica por marca (Yamaha, Allen & Heath, Soundcraft, DiGiCo…).','pleno','som','pago',40,false,false,20,4,'{som}');
