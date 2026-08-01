-- ====================================================================
-- SMU PRO — NOTA ON Preparatório: 12 disciplinas, 504 capítulos
-- Gerado por scripts/adapt-notaon.mjs — 2026-07-31
--
-- Cada aula tem pdf_path = 'notaon:{subject}:{capNum}'
-- O lesson-player detecta o prefixo "notaon:" e renderiza o componente JSX.
-- Cursos criados com ativo=false — ative manualmente no admin após revisar.
-- ====================================================================
begin;

-- ── BIOLOGIA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '9f100000-0000-4000-9000-000000000000',
  'NOTA ON — Biologia',
  'preparatorio-biologia',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Biologia completa em 46 capítulos com exercícios interativos.',
  46, 920, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000001', '9f100000-0000-4000-9000-000000000000', 'Módulo 1 — Biologia', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000002', '9f100000-0000-4000-9000-000000000000', 'Módulo 2 — Biologia', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000003', '9f100000-0000-4000-9000-000000000000', 'Módulo 3 — Biologia', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000004', '9f100000-0000-4000-9000-000000000000', 'Módulo 4 — Biologia', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000005', '9f100000-0000-4000-9000-000000000000', 'Módulo 5 — Biologia', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('9f100000-0000-4000-9000-000000000006', '9f100000-0000-4000-9000-000000000000', 'Módulo 6 — Biologia', 6)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000101', '9f100000-0000-4000-9000-000000000001', 'Introdução à Biologia, Método Científico e Seres Vivos', 'texto', 'notaon:biologia:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000102', '9f100000-0000-4000-9000-000000000001', 'Bioquímica Celular I: Água, Sais Minerais e Carboidratos', 'texto', 'notaon:biologia:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000103', '9f100000-0000-4000-9000-000000000001', 'Bioquímica Celular II: Lipídios, Aminoácidos e Proteínas (Estrutura e Enzimas)', 'texto', 'notaon:biologia:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000104', '9f100000-0000-4000-9000-000000000001', 'Bioquímica Celular III: Ácidos Nucleicos (DNA e RNA) e Código Genético', 'texto', 'notaon:biologia:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000105', '9f100000-0000-4000-9000-000000000001', 'Introdução à Citologia: Teoria Celular, Procariontes × Eucariontes e Vírus', 'texto', 'notaon:biologia:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000106', '9f100000-0000-4000-9000-000000000001', 'Membrana Plasmática: Mosaico Fluido, Especializações e Transportes', 'texto', 'notaon:biologia:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000107', '9f100000-0000-4000-9000-000000000001', 'Citoplasma e Organelas (Membranosas e Não-Membranosas)', 'texto', 'notaon:biologia:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000108', '9f100000-0000-4000-9000-000000000001', 'Bioenergética I: Respiração Celular Aeróbica e Anaeróbica (Fermentação)', 'texto', 'notaon:biologia:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000109', '9f100000-0000-4000-9000-000000000001', 'Bioenergética II: Fotossíntese (Etapas Clara e Escura) e Quimiossíntese', 'texto', 'notaon:biologia:9', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000110', '9f100000-0000-4000-9000-000000000001', 'Núcleo Celular, Cromatina, Cromossomos e Cariótipo', 'texto', 'notaon:biologia:10', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000111', '9f100000-0000-4000-9000-000000000001', 'Divisão Celular I: Ciclo Celular e Mitose', 'texto', 'notaon:biologia:11', 20, 11, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000112', '9f100000-0000-4000-9000-000000000001', 'Divisão Celular II: Meiose, Gametogênese e Crossing-over', 'texto', 'notaon:biologia:12', 20, 12, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000113', '9f100000-0000-4000-9000-000000000002', 'Introdução à Genética: Conceitos Básicos e Primeira Lei de Mendel', 'texto', 'notaon:biologia:13', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000114', '9f100000-0000-4000-9000-000000000002', 'Extensões da Primeira Lei: Codominância, Dominância Incompleta, Alelos Letais, Heredogramas', 'texto', 'notaon:biologia:14', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000115', '9f100000-0000-4000-9000-000000000002', 'Alelos Múltiplos: Sistema ABO, Rh, MN e Incompatibilidade Sanguínea', 'texto', 'notaon:biologia:15', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000116', '9f100000-0000-4000-9000-000000000002', 'Segunda Lei de Mendel (Segregação Independente) e Interação Gênica (Epistasia, Polimeria)', 'texto', 'notaon:biologia:16', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000117', '9f100000-0000-4000-9000-000000000002', 'Ligação Gênica, Mapas Cromossômicos e Genética do Sexo', 'texto', 'notaon:biologia:17', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000118', '9f100000-0000-4000-9000-000000000002', 'Biotecnologia e Engenharia Genética', 'texto', 'notaon:biologia:18', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000119', '9f100000-0000-4000-9000-000000000002', 'Teorias Evolutivas: Fixismo, Lamarckismo, Darwinismo e Neodarwinismo', 'texto', 'notaon:biologia:19', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000120', '9f100000-0000-4000-9000-000000000002', 'Evidências da Evolução e Especiação', 'texto', 'notaon:biologia:20', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000121', '9f100000-0000-4000-9000-000000000002', 'Genética de Populações (Hardy-Weinberg) e Evolução Humana', 'texto', 'notaon:biologia:21', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000122', '9f100000-0000-4000-9000-000000000003', 'Taxonomia e Sistemática Filogenética', 'texto', 'notaon:biologia:22', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000123', '9f100000-0000-4000-9000-000000000003', 'Virologia: Estrutura, Ciclos e Viroses Humanas', 'texto', 'notaon:biologia:23', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000124', '9f100000-0000-4000-9000-000000000003', 'Reino Monera: Bactérias, Arqueas e Bacterioses', 'texto', 'notaon:biologia:24', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000125', '9f100000-0000-4000-9000-000000000003', 'Reino Protoctista: Algas e Protozoários', 'texto', 'notaon:biologia:25', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000126', '9f100000-0000-4000-9000-000000000003', 'Reino Fungi: Características, Classificação, Liquens e Micoses', 'texto', 'notaon:biologia:26', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000127', '9f100000-0000-4000-9000-000000000003', 'Reino Animalia I: Poríferos, Cnidários, Platelmintos e Nematelmintos', 'texto', 'notaon:biologia:27', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000128', '9f100000-0000-4000-9000-000000000003', 'Reino Animalia II: Moluscos, Anelídeos e Artrópodes', 'texto', 'notaon:biologia:28', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000129', '9f100000-0000-4000-9000-000000000003', 'Reino Animalia III: Equinodermos e Cordados', 'texto', 'notaon:biologia:29', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000130', '9f100000-0000-4000-9000-000000000003', 'Reino Animalia IV: Cordados Homeotérmicos', 'texto', 'notaon:biologia:30', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000131', '9f100000-0000-4000-9000-000000000003', 'Introdução à Botânica: Evolução Vegetal, Algas Ancestrais,Briófitas e Pteridófitas', 'texto', 'notaon:biologia:31', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000132', '9f100000-0000-4000-9000-000000000003', 'Botânica Fanerogâmica: Gimnospermas e Angiospermas', 'texto', 'notaon:biologia:32', 20, 11, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000137', '9f100000-0000-4000-9000-000000000003', 'Histologia Animal: Tecido Epitelial e Tecidos Conjuntivos', 'texto', 'notaon:biologia:37', 20, 12, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000138', '9f100000-0000-4000-9000-000000000003', 'Histologia e Fisiologia dos Tecidos Musculares e do Tecido Nervoso', 'texto', 'notaon:biologia:38', 20, 13, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000139', '9f100000-0000-4000-9000-000000000003', 'Sistemas de Nutrição: Sistema Digestório e Sistema Respiratório Humano', 'texto', 'notaon:biologia:39', 20, 14, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000133', '9f100000-0000-4000-9000-000000000004', 'Histologia Vegetal: Meristemas e Tecidos Adultos', 'texto', 'notaon:biologia:33', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000134', '9f100000-0000-4000-9000-000000000004', 'Anatomia e Organografia Vegetal: Raiz, Caule, Folha, Flor, Fruto, Semente', 'texto', 'notaon:biologia:34', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000135', '9f100000-0000-4000-9000-000000000004', 'Fisiologia Vegetal I: Absorção de Água, Xilema, Floema e Transpiração Estomática', 'texto', 'notaon:biologia:35', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000136', '9f100000-0000-4000-9000-000000000004', 'Fisiologia Vegetal II: Fitormônios e Fotoperiodismo', 'texto', 'notaon:biologia:36', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000140', '9f100000-0000-4000-9000-000000000004', 'Sistemas de Integração e Transporte: Sistema Cardiovascular e Sistema Excretor', 'texto', 'notaon:biologia:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000141', '9f100000-0000-4000-9000-000000000005', 'Sistemas de Controle: Sistema Endócrino e Sistema Nervoso', 'texto', 'notaon:biologia:41', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000142', '9f100000-0000-4000-9000-000000000005', 'Sistema Reprodutor Humano, Ciclo Menstrual, Contracepção e Embriologia', 'texto', 'notaon:biologia:42', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000143', '9f100000-0000-4000-9000-000000000006', 'Conceitos Fundamentais em Ecologia: População, Comunidade, Ecossistema, Habitat, Nicho, Ecótono', 'texto', 'notaon:biologia:43', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000144', '9f100000-0000-4000-9000-000000000006', 'Dinâmica de Populações e Relações Ecológicas', 'texto', 'notaon:biologia:44', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000145', '9f100000-0000-4000-9000-000000000006', 'Fluxo de Energia, Sucessão Ecológica e Ciclos Biogeoquímicos', 'texto', 'notaon:biologia:45', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('9f100000-0000-4000-9000-000000000146', '9f100000-0000-4000-9000-000000000006', 'Impactos Ambientais: Poluição, Eutrofização, Magnificação, Invasoras e Pegada Ecológica', 'texto', 'notaon:biologia:46', 20, 4, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 46 where id = '9f100000-0000-4000-9000-000000000000';

-- ── ESPANHOL ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '6a100000-0000-4000-9000-000000000000',
  'NOTA ON — Espanhol',
  'preparatorio-espanhol',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Espanhol completa em 34 capítulos com exercícios interativos.',
  34, 680, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000001', '6a100000-0000-4000-9000-000000000000', 'Módulo 1 — Espanhol', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000002', '6a100000-0000-4000-9000-000000000000', 'Módulo 2 — Espanhol', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000003', '6a100000-0000-4000-9000-000000000000', 'Módulo 3 — Espanhol', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000004', '6a100000-0000-4000-9000-000000000000', 'Módulo 4 — Espanhol', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000005', '6a100000-0000-4000-9000-000000000000', 'Módulo 5 — Espanhol', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000006', '6a100000-0000-4000-9000-000000000000', 'Módulo 6 — Espanhol', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000007', '6a100000-0000-4000-9000-000000000000', 'Módulo 7 — Espanhol', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6a100000-0000-4000-9000-000000000008', '6a100000-0000-4000-9000-000000000000', 'Módulo 8 — Espanhol', 8)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000101', '6a100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em Espanhol: competências, habilidades e estratégias de leitura', 'texto', 'notaon:espanhol:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000102', '6a100000-0000-4000-9000-000000000001', 'Como compreender textos em espanhol mesmo sem dominar o idioma', 'texto', 'notaon:espanhol:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000103', '6a100000-0000-4000-9000-000000000001', 'Palavras cognatas, falsos cognatos e estratégias de ampliação do vocabulário', 'texto', 'notaon:espanhol:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000104', '6a100000-0000-4000-9000-000000000001', 'Contexto, inferência e técnicas de interpretação textual', 'texto', 'notaon:espanhol:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000105', '6a100000-0000-4000-9000-000000000002', 'Alfabeto, pronúncia e acentuação gráfica', 'texto', 'notaon:espanhol:5', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000106', '6a100000-0000-4000-9000-000000000002', 'Artigos, substantivos e formação do gênero e número', 'texto', 'notaon:espanhol:6', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000107', '6a100000-0000-4000-9000-000000000002', 'Pronomes pessoais, possessivos, demonstrativos e interrogativos', 'texto', 'notaon:espanhol:7', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000108', '6a100000-0000-4000-9000-000000000002', 'Adjetivos, advérbios e numerais', 'texto', 'notaon:espanhol:8', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000109', '6a100000-0000-4000-9000-000000000002', 'Preposições, conjunções e conectores textuais', 'texto', 'notaon:espanhol:9', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000110', '6a100000-0000-4000-9000-000000000003', 'Verbos regulares no Presente do Indicativo', 'texto', 'notaon:espanhol:10', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000111', '6a100000-0000-4000-9000-000000000003', 'Verbos irregulares mais frequentes', 'texto', 'notaon:espanhol:11', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000112', '6a100000-0000-4000-9000-000000000003', 'Pretérito Perfeito, Pretérito Imperfeito e Pretérito Indefinido', 'texto', 'notaon:espanhol:12', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000113', '6a100000-0000-4000-9000-000000000003', 'Futuro, Condicional e Perífrases Verbais', 'texto', 'notaon:espanhol:13', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000114', '6a100000-0000-4000-9000-000000000003', 'Imperativo, Subjuntivo e usos mais frequentes no ENEM', 'texto', 'notaon:espanhol:14', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000115', '6a100000-0000-4000-9000-000000000004', 'Ser, Estar e Haber: diferenças e aplicações', 'texto', 'notaon:espanhol:15', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000116', '6a100000-0000-4000-9000-000000000004', 'Pronomes reflexivos e verbos pronominais', 'texto', 'notaon:espanhol:16', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000117', '6a100000-0000-4000-9000-000000000004', 'Comparativos, superlativos e expressões de intensidade', 'texto', 'notaon:espanhol:17', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000118', '6a100000-0000-4000-9000-000000000004', 'Voz ativa, voz passiva e discurso indireto', 'texto', 'notaon:espanhol:18', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000119', '6a100000-0000-4000-9000-000000000005', 'Skimming, Scanning e leitura eficiente', 'texto', 'notaon:espanhol:19', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000120', '6a100000-0000-4000-9000-000000000005', 'Ideia principal, informações explícitas e implícitas', 'texto', 'notaon:espanhol:20', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000121', '6a100000-0000-4000-9000-000000000005', 'Inferência, ironia, humor e intenção comunicativa', 'texto', 'notaon:espanhol:21', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000122', '6a100000-0000-4000-9000-000000000005', 'Interpretação de gráficos, tabelas, mapas e infográficos', 'texto', 'notaon:espanhol:22', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000123', '6a100000-0000-4000-9000-000000000006', 'Notícias, reportagens e textos jornalísticos', 'texto', 'notaon:espanhol:23', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000124', '6a100000-0000-4000-9000-000000000006', 'Artigos de opinião e textos argumentativos', 'texto', 'notaon:espanhol:24', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000125', '6a100000-0000-4000-9000-000000000006', 'Propagandas, campanhas publicitárias e linguagem persuasiva', 'texto', 'notaon:espanhol:25', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000126', '6a100000-0000-4000-9000-000000000006', 'Quadrinhos, charges, cartuns e tirinhas', 'texto', 'notaon:espanhol:26', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000127', '6a100000-0000-4000-9000-000000000006', 'Poemas, músicas e textos literários', 'texto', 'notaon:espanhol:27', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000128', '6a100000-0000-4000-9000-000000000006', 'Blogs, e-mails, redes sociais e comunicação digital', 'texto', 'notaon:espanhol:28', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000129', '6a100000-0000-4000-9000-000000000007', 'Meio ambiente, sustentabilidade e mudanças climáticas', 'texto', 'notaon:espanhol:29', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000130', '6a100000-0000-4000-9000-000000000007', 'Tecnologia, internet e inteligência artificial', 'texto', 'notaon:espanhol:30', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000131', '6a100000-0000-4000-9000-000000000007', 'Direitos Humanos, cidadania e diversidade cultural', 'texto', 'notaon:espanhol:31', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000132', '6a100000-0000-4000-9000-000000000007', 'América Latina: cultura, sociedade e integração regional', 'texto', 'notaon:espanhol:32', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000133', '6a100000-0000-4000-9000-000000000008', 'Questões comentadas das últimas provas de Espanhol do ENEM', 'texto', 'notaon:espanhol:33', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6a100000-0000-4000-9000-000000000134', '6a100000-0000-4000-9000-000000000008', 'Revisão Geral de Espanhol: estratégias de prova, interpretação textual e simulado comentado', 'texto', 'notaon:espanhol:34', 20, 2, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 34 where id = '6a100000-0000-4000-9000-000000000000';

-- ── FILOSOFIA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '6b100000-0000-4000-9000-000000000000',
  'NOTA ON — Filosofia',
  'preparatorio-filosofia',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Filosofia completa em 43 capítulos com exercícios interativos.',
  43, 860, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000001', '6b100000-0000-4000-9000-000000000000', 'Módulo 1 — Filosofia', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000002', '6b100000-0000-4000-9000-000000000000', 'Módulo 2 — Filosofia', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000003', '6b100000-0000-4000-9000-000000000000', 'Módulo 3 — Filosofia', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000004', '6b100000-0000-4000-9000-000000000000', 'Módulo 4 — Filosofia', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000005', '6b100000-0000-4000-9000-000000000000', 'Módulo 5 — Filosofia', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000006', '6b100000-0000-4000-9000-000000000000', 'Módulo 6 — Filosofia', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000007', '6b100000-0000-4000-9000-000000000000', 'Módulo 7 — Filosofia', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000008', '6b100000-0000-4000-9000-000000000000', 'Módulo 8 — Filosofia', 8)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6b100000-0000-4000-9000-000000000009', '6b100000-0000-4000-9000-000000000000', 'Módulo 9 — Filosofia', 9)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000101', '6b100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em Filosofia: competências, habilidades e interpretação de textos filosóficos', 'texto', 'notaon:filosofia:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000102', '6b100000-0000-4000-9000-000000000001', 'O que é Filosofia? Origem, conceitos e importância do pensamento filosófico', 'texto', 'notaon:filosofia:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000103', '6b100000-0000-4000-9000-000000000001', 'Mito, religião, senso comum e conhecimento filosófico', 'texto', 'notaon:filosofia:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000104', '6b100000-0000-4000-9000-000000000001', 'Lógica, argumentação e construção do pensamento crítico', 'texto', 'notaon:filosofia:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000105', '6b100000-0000-4000-9000-000000000001', 'Conhecimento, verdade e diferentes formas de compreender a realidade', 'texto', 'notaon:filosofia:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000106', '6b100000-0000-4000-9000-000000000002', 'Os filósofos pré-socráticos e a busca pela origem da natureza', 'texto', 'notaon:filosofia:6', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000107', '6b100000-0000-4000-9000-000000000002', 'Sócrates: ética, diálogo e método socrático', 'texto', 'notaon:filosofia:7', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000108', '6b100000-0000-4000-9000-000000000002', 'Platão: teoria das ideias, justiça e política', 'texto', 'notaon:filosofia:8', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000109', '6b100000-0000-4000-9000-000000000002', 'Aristóteles: lógica, ética e organização da sociedade', 'texto', 'notaon:filosofia:9', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000110', '6b100000-0000-4000-9000-000000000002', 'Escolas helenísticas: Estoicismo, Epicurismo, Ceticismo e Cinismo', 'texto', 'notaon:filosofia:10', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000111', '6b100000-0000-4000-9000-000000000003', 'Patrística: Santo Agostinho e a relação entre fé e razão', 'texto', 'notaon:filosofia:11', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000112', '6b100000-0000-4000-9000-000000000003', 'Escolástica: São Tomás de Aquino e a síntese entre filosofia e cristianismo', 'texto', 'notaon:filosofia:12', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000113', '6b100000-0000-4000-9000-000000000003', 'Filosofia Islâmica e Judaica na Idade Média', 'texto', 'notaon:filosofia:13', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000114', '6b100000-0000-4000-9000-000000000003', 'Universidades medievais e a construção do pensamento ocidental', 'texto', 'notaon:filosofia:14', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000115', '6b100000-0000-4000-9000-000000000003', 'A transição da Filosofia Medieval para a Moderna', 'texto', 'notaon:filosofia:15', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000116', '6b100000-0000-4000-9000-000000000004', 'Renascimento, Humanismo e a valorização da razão', 'texto', 'notaon:filosofia:16', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000117', '6b100000-0000-4000-9000-000000000004', 'Racionalismo: René Descartes e o método científico', 'texto', 'notaon:filosofia:17', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000118', '6b100000-0000-4000-9000-000000000004', 'Empirismo: Locke, Berkeley e Hume', 'texto', 'notaon:filosofia:18', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000119', '6b100000-0000-4000-9000-000000000004', 'Iluminismo: liberdade, direitos e contrato social', 'texto', 'notaon:filosofia:19', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000120', '6b100000-0000-4000-9000-000000000004', 'Immanuel Kant: razão, moral e autonomia', 'texto', 'notaon:filosofia:20', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000121', '6b100000-0000-4000-9000-000000000005', 'Maquiavel e o nascimento da política moderna', 'texto', 'notaon:filosofia:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000122', '6b100000-0000-4000-9000-000000000005', 'Hobbes, Locke e Rousseau: teorias do contrato social', 'texto', 'notaon:filosofia:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000123', '6b100000-0000-4000-9000-000000000005', 'Democracia, Cidadania e Estado de Direito', 'texto', 'notaon:filosofia:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000124', '6b100000-0000-4000-9000-000000000005', 'Poder, Ideologia e Participação Política', 'texto', 'notaon:filosofia:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000125', '6b100000-0000-4000-9000-000000000005', 'Direitos Humanos e Ética na Sociedade Contemporânea', 'texto', 'notaon:filosofia:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000126', '6b100000-0000-4000-9000-000000000006', 'Karl Marx: Trabalho, Capitalismo e Luta de Classes', 'texto', 'notaon:filosofia:26', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000127', '6b100000-0000-4000-9000-000000000006', 'Friedrich Nietzsche: Crítica à Moral e ao Pensamento Tradicional', 'texto', 'notaon:filosofia:27', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000128', '6b100000-0000-4000-9000-000000000006', 'Freud e a Psicanálise: O Inconsciente e a Condição Humana', 'texto', 'notaon:filosofia:28', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000129', '6b100000-0000-4000-9000-000000000006', 'Existencialismo: Sartre, Simone de Beauvoir e Albert Camus', 'texto', 'notaon:filosofia:29', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000130', '6b100000-0000-4000-9000-000000000006', 'Escola de Frankfurt: Indústria Cultural e Sociedade de Massa', 'texto', 'notaon:filosofia:30', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000131', '6b100000-0000-4000-9000-000000000007', 'Ética: Conceitos Fundamentais e Dilemas Contemporâneos', 'texto', 'notaon:filosofia:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000132', '6b100000-0000-4000-9000-000000000007', 'Bioética, Inteligência Artificial e Responsabilidade Científica', 'texto', 'notaon:filosofia:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000133', '6b100000-0000-4000-9000-000000000007', 'Ciência, Tecnologia e Produção do Conhecimento', 'texto', 'notaon:filosofia:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000134', '6b100000-0000-4000-9000-000000000007', 'Filosofia da Linguagem e Comunicação', 'texto', 'notaon:filosofia:34', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000135', '6b100000-0000-4000-9000-000000000007', 'Consumo, Mídia e Cultura Digital', 'texto', 'notaon:filosofia:35', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000136', '6b100000-0000-4000-9000-000000000008', 'Diversidade Cultural, Pluralidade e Tolerância', 'texto', 'notaon:filosofia:36', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000137', '6b100000-0000-4000-9000-000000000008', 'Filosofia, Gênero, Identidade e Direitos Humanos', 'texto', 'notaon:filosofia:37', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000138', '6b100000-0000-4000-9000-000000000008', 'Meio Ambiente, Sustentabilidade e Ética Ambiental', 'texto', 'notaon:filosofia:38', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000139', '6b100000-0000-4000-9000-000000000008', 'Filosofia Brasileira e Latino-Americana', 'texto', 'notaon:filosofia:39', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000140', '6b100000-0000-4000-9000-000000000008', 'Temas Contemporâneos Recorrentes no ENEM', 'texto', 'notaon:filosofia:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000141', '6b100000-0000-4000-9000-000000000009', 'Leitura e Interpretação de Textos Filosóficos no ENEM', 'texto', 'notaon:filosofia:41', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000142', '6b100000-0000-4000-9000-000000000009', 'Questões Comentadas dos Principais Filósofos do ENEM', 'texto', 'notaon:filosofia:42', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6b100000-0000-4000-9000-000000000143', '6b100000-0000-4000-9000-000000000009', 'Revisão Geral de Filosofia: Conceitos Essenciais e Estratégias de Prova', 'texto', 'notaon:filosofia:43', 20, 3, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 43 where id = '6b100000-0000-4000-9000-000000000000';

-- ── FÍSICA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '6c100000-0000-4000-9000-000000000000',
  'NOTA ON — Física',
  'preparatorio-fisica',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Física completa em 45 capítulos com exercícios interativos.',
  45, 900, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000001', '6c100000-0000-4000-9000-000000000000', 'Módulo 1 — Física', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000002', '6c100000-0000-4000-9000-000000000000', 'Módulo 2 — Física', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000003', '6c100000-0000-4000-9000-000000000000', 'Módulo 3 — Física', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000004', '6c100000-0000-4000-9000-000000000000', 'Módulo 4 — Física', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000005', '6c100000-0000-4000-9000-000000000000', 'Módulo 5 — Física', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000006', '6c100000-0000-4000-9000-000000000000', 'Módulo 6 — Física', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6c100000-0000-4000-9000-000000000007', '6c100000-0000-4000-9000-000000000000', 'Módulo 7 — Física', 7)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000101', '6c100000-0000-4000-9000-000000000001', 'Fundamentos da Física, Vetores e Álgebra Vetorial', 'texto', 'notaon:fisica:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000102', '6c100000-0000-4000-9000-000000000001', 'Conceitos Iniciais de Cinemática: Referencial, Posição, Deslocamento e Velocidade Média', 'texto', 'notaon:fisica:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000103', '6c100000-0000-4000-9000-000000000001', 'Movimento Retilíneo Uniforme (MRU) e Análise Gráfica (S×t e v×t)', 'texto', 'notaon:fisica:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000104', '6c100000-0000-4000-9000-000000000001', 'Movimento Retilíneo Uniformemente Variado (MRUV) e Funções Horárias', 'texto', 'notaon:fisica:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000105', '6c100000-0000-4000-9000-000000000001', 'Movimentos sob Ação da Gravidade: Queda Livre e Lançamento Vertical', 'texto', 'notaon:fisica:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000106', '6c100000-0000-4000-9000-000000000001', 'Lançamento Oblíquo e Lançamento Horizontal no Vácuo', 'texto', 'notaon:fisica:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000107', '6c100000-0000-4000-9000-000000000001', 'Cinemática Angular e Movimento Circular Uniforme (MCU)', 'texto', 'notaon:fisica:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000108', '6c100000-0000-4000-9000-000000000001', 'Acoplamento de Polias e Engrenagens (Transmissão de Movimento Circular)', 'texto', 'notaon:fisica:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000109', '6c100000-0000-4000-9000-000000000002', 'As Leis de Newton: Inércia, Dinâmica e Ação e Reação', 'texto', 'notaon:fisica:9', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000110', '6c100000-0000-4000-9000-000000000002', 'Forças Especiais: Peso, Normal, Tração e Força Elástica (Lei de Hooke)', 'texto', 'notaon:fisica:10', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000111', '6c100000-0000-4000-9000-000000000002', 'Forças de Atrito (Estático e Dinâmico) e Resistência do Ar', 'texto', 'notaon:fisica:11', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000112', '6c100000-0000-4000-9000-000000000002', 'Dinâmica do Movimento Circular: Força Centrípeta e Globo da Morte', 'texto', 'notaon:fisica:12', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000113', '6c100000-0000-4000-9000-000000000002', 'Trabalho de uma Força (Constante e Variável) e Potência Mecânica', 'texto', 'notaon:fisica:13', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000114', '6c100000-0000-4000-9000-000000000002', 'Energia Mecânica: Cinética, Potencial Gravitacional e Elástica', 'texto', 'notaon:fisica:14', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000115', '6c100000-0000-4000-9000-000000000002', 'Sistemas Conservativos, Dissipativos e Teorema da Conservação da Energia', 'texto', 'notaon:fisica:15', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000116', '6c100000-0000-4000-9000-000000000002', 'Impulso, Quantidade de Movimento (Q = mv) e Teorema do Impulso', 'texto', 'notaon:fisica:16', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000117', '6c100000-0000-4000-9000-000000000002', 'Conservação da Quantidade de Movimento e Sistemas de Colisões', 'texto', 'notaon:fisica:17', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000118', '6c100000-0000-4000-9000-000000000003', 'Estática do Ponto Material e do Corpo Extenso (Torque)', 'texto', 'notaon:fisica:18', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000119', '6c100000-0000-4000-9000-000000000003', 'Tipos de Alavancas, Vínculos e Centro de Gravidade', 'texto', 'notaon:fisica:19', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000120', '6c100000-0000-4000-9000-000000000003', 'Hidrostática I: Densidade, Pressão e Teorema de Stevin', 'texto', 'notaon:fisica:20', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000121', '6c100000-0000-4000-9000-000000000003', 'Hidrostática II: Princípio de Pascal e Princípio de Arquimedes', 'texto', 'notaon:fisica:21', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000122', '6c100000-0000-4000-9000-000000000004', 'Termometria: Escalas Térmicas e Dilatação dos Sólidos e Líquidos', 'texto', 'notaon:fisica:22', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000123', '6c100000-0000-4000-9000-000000000004', 'Calorimetria I: Calor Sensível, Calor Latente e Mudanças de Estado', 'texto', 'notaon:fisica:23', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000124', '6c100000-0000-4000-9000-000000000004', 'Calorimetria II: Sistemas Isolados, Trocas de Calor e Diagramas de Fase', 'texto', 'notaon:fisica:24', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000125', '6c100000-0000-4000-9000-000000000004', 'Propagação do Calor: Condução, Convecção e Irradiação (Efeito Estufa)', 'texto', 'notaon:fisica:25', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000126', '6c100000-0000-4000-9000-000000000004', 'Estudo dos Gases Perfeitos: Leis Gasosas, Equação de Clapeyron e Teoria Cinética', 'texto', 'notaon:fisica:26', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000127', '6c100000-0000-4000-9000-000000000004', 'Primeira Lei da Termodinâmica: Trabalho Gasoso e Energia Interna', 'texto', 'notaon:fisica:27', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000128', '6c100000-0000-4000-9000-000000000004', 'Segunda Lei da Termodinâmica: Máquinas Térmicas, Ciclo de Carnot e Entropia', 'texto', 'notaon:fisica:28', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000129', '6c100000-0000-4000-9000-000000000005', 'Introdução às Ondas: Classificação, Elementos de uma Onda e Equação Fundamental (v = λf)', 'texto', 'notaon:fisica:29', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000130', '6c100000-0000-4000-9000-000000000005', 'Fenômenos Ondulatórios I: Reflexão, Refração, Difração e Polarização', 'texto', 'notaon:fisica:30', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000131', '6c100000-0000-4000-9000-000000000005', 'Fenômenos Ondulatórios II: Interferência (Experimento de Young) e Ressonância', 'texto', 'notaon:fisica:31', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000132', '6c100000-0000-4000-9000-000000000005', 'Acústica: Propriedades Qualitativas do Som, Fontes Sonoras e Efeito Doppler', 'texto', 'notaon:fisica:32', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000133', '6c100000-0000-4000-9000-000000000005', 'Óptica Geométrica: Princípios, Sombra, Penumbra e Espelhos Planos', 'texto', 'notaon:fisica:33', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000134', '6c100000-0000-4000-9000-000000000005', 'Espelhos Esféricos: Formação de Imagens e Estudo Analítico', 'texto', 'notaon:fisica:34', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000135', '6c100000-0000-4000-9000-000000000005', 'Refração da Luz: Lei de Snell-Descartes, Reflexão Total e Dioptro Plano', 'texto', 'notaon:fisica:35', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000136', '6c100000-0000-4000-9000-000000000005', 'Lentes Esféricas Delgadas, Instrumentos Ópticos e Instrumentos de Visão', 'texto', 'notaon:fisica:36', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000137', '6c100000-0000-4000-9000-000000000005', 'Óptica da Visão: Ametropias e suas Correções', 'texto', 'notaon:fisica:37', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000138', '6c100000-0000-4000-9000-000000000006', 'Eletrostática I: Carga Elétrica, Processos de Eletrização e Lei de Coulomb', 'texto', 'notaon:fisica:38', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000139', '6c100000-0000-4000-9000-000000000006', 'Eletrostática II: Campo Elétrico, Potencial Elétrico e Trabalho da Força Elétrica', 'texto', 'notaon:fisica:39', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000140', '6c100000-0000-4000-9000-000000000006', 'Eletrodinâmica I: Corrente Elétrica, Resistores, Primeira e Segunda Leis de Ohm', 'texto', 'notaon:fisica:40', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000141', '6c100000-0000-4000-9000-000000000006', 'Eletrodinâmica II: Associação de Resistores (Série, Paralelo e Mista) e Circuitos Elétricos', 'texto', 'notaon:fisica:41', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000142', '6c100000-0000-4000-9000-000000000006', 'Eletrodinâmica III: Geradores, Receptores, Medidores Elétricos (Amperímetro/Voltímetro) e Leis de Kirchhoff', 'texto', 'notaon:fisica:42', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000143', '6c100000-0000-4000-9000-000000000006', 'Magnetismo: Ímãs, Campo Magnético Terrestre e Campo Magnético gerado por Correntes (Fio, Espira e Solenóide)', 'texto', 'notaon:fisica:43', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000144', '6c100000-0000-4000-9000-000000000006', 'Força Magnética (sobre Cargas e Fios) e Indução Eletromagnética (Lei de Faraday e Lei de Lenz)', 'texto', 'notaon:fisica:44', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6c100000-0000-4000-9000-000000000145', '6c100000-0000-4000-9000-000000000007', 'Introdução à Física Moderna: Teoria da Relatividade Restrita (Insights), Efeito Fotoelétrico e Dualidade Onda-Partícula', 'texto', 'notaon:fisica:45', 20, 1, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 45 where id = '6c100000-0000-4000-9000-000000000000';

-- ── GEOGRAFIA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '6d100000-0000-4000-9000-000000000000',
  'NOTA ON — Geografia',
  'preparatorio-geografia',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Geografia completa em 45 capítulos com exercícios interativos.',
  45, 900, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000001', '6d100000-0000-4000-9000-000000000000', 'Módulo 1 — Geografia', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000002', '6d100000-0000-4000-9000-000000000000', 'Módulo 2 — Geografia', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000003', '6d100000-0000-4000-9000-000000000000', 'Módulo 3 — Geografia', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000004', '6d100000-0000-4000-9000-000000000000', 'Módulo 4 — Geografia', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000005', '6d100000-0000-4000-9000-000000000000', 'Módulo 5 — Geografia', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000006', '6d100000-0000-4000-9000-000000000000', 'Módulo 6 — Geografia', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000007', '6d100000-0000-4000-9000-000000000000', 'Módulo 7 — Geografia', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000008', '6d100000-0000-4000-9000-000000000000', 'Módulo 8 — Geografia', 8)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6d100000-0000-4000-9000-000000000009', '6d100000-0000-4000-9000-000000000000', 'Módulo 9 — Geografia', 9)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000101', '6d100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em Geografia: competências, habilidades e interpretação do espaço geográfico', 'texto', 'notaon:geografia:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000102', '6d100000-0000-4000-9000-000000000001', 'Fundamentos da Geografia: espaço, território, lugar, paisagem e região', 'texto', 'notaon:geografia:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000103', '6d100000-0000-4000-9000-000000000001', 'Cartografia I: orientação, coordenadas geográficas e escalas', 'texto', 'notaon:geografia:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000104', '6d100000-0000-4000-9000-000000000001', 'Cartografia II: projeções cartográficas, mapas temáticos, gráficos e interpretação de dados', 'texto', 'notaon:geografia:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000105', '6d100000-0000-4000-9000-000000000001', 'Tecnologias geográficas: GPS, sensoriamento remoto e geoprocessamento', 'texto', 'notaon:geografia:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000106', '6d100000-0000-4000-9000-000000000002', 'Estrutura interna da Terra e tectônica de placas', 'texto', 'notaon:geografia:6', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000107', '6d100000-0000-4000-9000-000000000002', 'Vulcanismo, terremotos e tsunamis', 'texto', 'notaon:geografia:7', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000108', '6d100000-0000-4000-9000-000000000002', 'Relevo terrestre e agentes modeladores', 'texto', 'notaon:geografia:8', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000109', '6d100000-0000-4000-9000-000000000002', 'Tipos de solo, erosão e conservação', 'texto', 'notaon:geografia:9', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000110', '6d100000-0000-4000-9000-000000000002', 'Recursos minerais e exploração econômica', 'texto', 'notaon:geografia:10', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000111', '6d100000-0000-4000-9000-000000000003', 'Atmosfera, elementos e fatores climáticos', 'texto', 'notaon:geografia:11', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000112', '6d100000-0000-4000-9000-000000000003', 'Climas do Brasil e do mundo', 'texto', 'notaon:geografia:12', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000113', '6d100000-0000-4000-9000-000000000003', 'Mudanças climáticas, efeito estufa e aquecimento global', 'texto', 'notaon:geografia:13', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000114', '6d100000-0000-4000-9000-000000000003', 'Hidrografia mundial e brasileira', 'texto', 'notaon:geografia:14', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000115', '6d100000-0000-4000-9000-000000000003', 'Crise hídrica, gestão da água e sustentabilidade', 'texto', 'notaon:geografia:15', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000116', '6d100000-0000-4000-9000-000000000004', 'Vegetação e domínios morfoclimáticos', 'texto', 'notaon:geografia:16', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000117', '6d100000-0000-4000-9000-000000000004', 'Biomas brasileiros', 'texto', 'notaon:geografia:17', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000118', '6d100000-0000-4000-9000-000000000004', 'Biomas mundiais', 'texto', 'notaon:geografia:18', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000119', '6d100000-0000-4000-9000-000000000004', 'Impactos ambientais, poluição e desmatamento', 'texto', 'notaon:geografia:19', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000120', '6d100000-0000-4000-9000-000000000004', 'Desenvolvimento sustentável, Agenda 2030 e economia verde', 'texto', 'notaon:geografia:20', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000121', '6d100000-0000-4000-9000-000000000005', 'Demografia: crescimento populacional e transição demográfica', 'texto', 'notaon:geografia:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000122', '6d100000-0000-4000-9000-000000000005', 'Migrações nacionais e internacionais', 'texto', 'notaon:geografia:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000123', '6d100000-0000-4000-9000-000000000005', 'Urbanização brasileira', 'texto', 'notaon:geografia:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000124', '6d100000-0000-4000-9000-000000000005', 'Problemas urbanos: mobilidade, habitação, violência e segregação socioespacial', 'texto', 'notaon:geografia:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000125', '6d100000-0000-4000-9000-000000000005', 'Metropolização, redes urbanas e cidades inteligentes', 'texto', 'notaon:geografia:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000126', '6d100000-0000-4000-9000-000000000006', 'Estrutura fundiária e reforma agrária', 'texto', 'notaon:geografia:26', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000127', '6d100000-0000-4000-9000-000000000006', 'Agricultura moderna, agronegócio e agricultura familiar', 'texto', 'notaon:geografia:27', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000128', '6d100000-0000-4000-9000-000000000006', 'Industrialização mundial e brasileira', 'texto', 'notaon:geografia:28', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000129', '6d100000-0000-4000-9000-000000000006', 'Fontes de energia: renováveis e não renováveis', 'texto', 'notaon:geografia:29', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000130', '6d100000-0000-4000-9000-000000000006', 'Transportes, logística e infraestrutura', 'texto', 'notaon:geografia:30', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000131', '6d100000-0000-4000-9000-000000000007', 'Globalização e nova divisão internacional do trabalho', 'texto', 'notaon:geografia:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000132', '6d100000-0000-4000-9000-000000000007', 'Blocos econômicos: Mercosul, União Europeia, USMCA, ASEAN e BRICS', 'texto', 'notaon:geografia:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000133', '6d100000-0000-4000-9000-000000000007', 'Geopolítica contemporânea e conflitos internacionais', 'texto', 'notaon:geografia:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000134', '6d100000-0000-4000-9000-000000000007', 'Organismos internacionais: ONU, FMI, Banco Mundial, OMC e OTAN', 'texto', 'notaon:geografia:34', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000135', '6d100000-0000-4000-9000-000000000007', 'Regionalização do espaço mundial e multipolaridade', 'texto', 'notaon:geografia:35', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000136', '6d100000-0000-4000-9000-000000000008', 'Regionalização do território brasileiro', 'texto', 'notaon:geografia:36', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000137', '6d100000-0000-4000-9000-000000000008', 'Aspectos físicos do Brasil: relevo, clima, vegetação e hidrografia', 'texto', 'notaon:geografia:37', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000138', '6d100000-0000-4000-9000-000000000008', 'Economia brasileira: setores produtivos e desenvolvimento regional', 'texto', 'notaon:geografia:38', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000139', '6d100000-0000-4000-9000-000000000008', 'Questões ambientais brasileiras: Amazônia, Cerrado, Pantanal, Caatinga, Mata Atlântica e Pampa', 'texto', 'notaon:geografia:39', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000140', '6d100000-0000-4000-9000-000000000008', 'Desigualdades regionais e políticas públicas', 'texto', 'notaon:geografia:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000141', '6d100000-0000-4000-9000-000000000009', 'Questões ambientais globais e conferências internacionais', 'texto', 'notaon:geografia:41', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000142', '6d100000-0000-4000-9000-000000000009', 'Geografia da população mundial: pobreza, desigualdade, fome e indicadores socioeconômicos', 'texto', 'notaon:geografia:42', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000143', '6d100000-0000-4000-9000-000000000009', 'Questões territoriais brasileiras: povos indígenas, quilombolas, fronteiras e uso do território', 'texto', 'notaon:geografia:43', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000144', '6d100000-0000-4000-9000-000000000009', 'Interpretação de mapas, gráficos, tabelas, charges e imagens no ENEM', 'texto', 'notaon:geografia:44', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6d100000-0000-4000-9000-000000000145', '6d100000-0000-4000-9000-000000000009', 'Revisão Geral de Geografia para o ENEM: resolução comentada de questões e estratégias de prova', 'texto', 'notaon:geografia:45', 20, 5, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 45 where id = '6d100000-0000-4000-9000-000000000000';

-- ── HISTÓRIA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  '6e100000-0000-4000-9000-000000000000',
  'NOTA ON — História',
  'preparatorio-historia',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: História completa em 48 capítulos com exercícios interativos.',
  48, 960, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000001', '6e100000-0000-4000-9000-000000000000', 'Módulo 1 — História', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000002', '6e100000-0000-4000-9000-000000000000', 'Módulo 2 — História', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000003', '6e100000-0000-4000-9000-000000000000', 'Módulo 3 — História', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000004', '6e100000-0000-4000-9000-000000000000', 'Módulo 4 — História', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000005', '6e100000-0000-4000-9000-000000000000', 'Módulo 5 — História', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000006', '6e100000-0000-4000-9000-000000000000', 'Módulo 6 — História', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000007', '6e100000-0000-4000-9000-000000000000', 'Módulo 7 — História', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000008', '6e100000-0000-4000-9000-000000000000', 'Módulo 8 — História', 8)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000009', '6e100000-0000-4000-9000-000000000000', 'Módulo 9 — História', 9)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000010', '6e100000-0000-4000-9000-000000000000', 'Módulo 10 — História', 10)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000011', '6e100000-0000-4000-9000-000000000000', 'Módulo 11 — História', 11)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('6e100000-0000-4000-9000-000000000012', '6e100000-0000-4000-9000-000000000000', 'Módulo 12 — História', 12)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000101', '6e100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em História: competências, habilidades e interpretação histórica', 'texto', 'notaon:historia:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000102', '6e100000-0000-4000-9000-000000000001', 'História como ciência: fontes históricas, tempo histórico e historiografia', 'texto', 'notaon:historia:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000103', '6e100000-0000-4000-9000-000000000001', 'Pré-História: Paleolítico, Neolítico e Idade dos Metais', 'texto', 'notaon:historia:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000104', '6e100000-0000-4000-9000-000000000001', 'O surgimento da agricultura, das cidades e das primeiras civilizações', 'texto', 'notaon:historia:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000105', '6e100000-0000-4000-9000-000000000002', 'Egito Antigo', 'texto', 'notaon:historia:5', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000106', '6e100000-0000-4000-9000-000000000002', 'Mesopotâmia', 'texto', 'notaon:historia:6', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000107', '6e100000-0000-4000-9000-000000000002', 'Hebreus, Fenícios e Persas', 'texto', 'notaon:historia:7', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000108', '6e100000-0000-4000-9000-000000000002', 'Legados culturais das civilizações orientais', 'texto', 'notaon:historia:8', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000109', '6e100000-0000-4000-9000-000000000003', 'Grécia Antiga: formação, democracia e cultura', 'texto', 'notaon:historia:9', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000110', '6e100000-0000-4000-9000-000000000003', 'Período Helenístico', 'texto', 'notaon:historia:10', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000111', '6e100000-0000-4000-9000-000000000003', 'Roma: Monarquia, República e Império', 'texto', 'notaon:historia:11', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000112', '6e100000-0000-4000-9000-000000000003', 'Crise do Império Romano e legado greco-romano', 'texto', 'notaon:historia:12', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000113', '6e100000-0000-4000-9000-000000000004', 'Formação da Europa Medieval', 'texto', 'notaon:historia:13', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000114', '6e100000-0000-4000-9000-000000000004', 'Feudalismo', 'texto', 'notaon:historia:14', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000115', '6e100000-0000-4000-9000-000000000004', 'Igreja Católica, Cruzadas e Cultura Medieval', 'texto', 'notaon:historia:15', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000116', '6e100000-0000-4000-9000-000000000004', 'Crise do Feudalismo e transição para a Idade Moderna', 'texto', 'notaon:historia:16', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000117', '6e100000-0000-4000-9000-000000000005', 'Renascimento Cultural e Humanismo', 'texto', 'notaon:historia:17', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000118', '6e100000-0000-4000-9000-000000000005', 'Reforma Protestante e Contrarreforma', 'texto', 'notaon:historia:18', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000119', '6e100000-0000-4000-9000-000000000005', 'Absolutismo e Mercantilismo', 'texto', 'notaon:historia:19', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000120', '6e100000-0000-4000-9000-000000000005', 'Grandes Navegações e Expansão Marítima', 'texto', 'notaon:historia:20', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000121', '6e100000-0000-4000-9000-000000000006', 'Civilizações Pré-Colombianas', 'texto', 'notaon:historia:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000122', '6e100000-0000-4000-9000-000000000006', 'Colonização Espanhola', 'texto', 'notaon:historia:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000123', '6e100000-0000-4000-9000-000000000006', 'Brasil Colonial: economia açucareira', 'texto', 'notaon:historia:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000124', '6e100000-0000-4000-9000-000000000006', 'Escravidão indígena e africana no Brasil', 'texto', 'notaon:historia:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000125', '6e100000-0000-4000-9000-000000000007', 'União Ibérica, Invasões Holandesas e Bandeirismo', 'texto', 'notaon:historia:25', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000126', '6e100000-0000-4000-9000-000000000007', 'Mineração e Sociedade Mineradora', 'texto', 'notaon:historia:26', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000127', '6e100000-0000-4000-9000-000000000007', 'Revoltas Coloniais e Emancipacionistas', 'texto', 'notaon:historia:27', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000128', '6e100000-0000-4000-9000-000000000007', 'Iluminismo e Independência dos Estados Unidos', 'texto', 'notaon:historia:28', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000129', '6e100000-0000-4000-9000-000000000008', 'Revolução Francesa', 'texto', 'notaon:historia:29', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000130', '6e100000-0000-4000-9000-000000000008', 'Era Napoleônica e Congresso de Viena', 'texto', 'notaon:historia:30', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000131', '6e100000-0000-4000-9000-000000000008', 'Revolução Industrial', 'texto', 'notaon:historia:31', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000132', '6e100000-0000-4000-9000-000000000008', 'Movimentos Sociais do Século XIX', 'texto', 'notaon:historia:32', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000133', '6e100000-0000-4000-9000-000000000009', 'Independência do Brasil', 'texto', 'notaon:historia:33', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000134', '6e100000-0000-4000-9000-000000000009', 'Primeiro Reinado e Período Regencial', 'texto', 'notaon:historia:34', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000135', '6e100000-0000-4000-9000-000000000009', 'Segundo Reinado', 'texto', 'notaon:historia:35', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000136', '6e100000-0000-4000-9000-000000000009', 'Crise do Império e Proclamação da República', 'texto', 'notaon:historia:36', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000137', '6e100000-0000-4000-9000-000000000010', 'República Velha', 'texto', 'notaon:historia:37', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000138', '6e100000-0000-4000-9000-000000000010', 'Era Vargas', 'texto', 'notaon:historia:38', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000139', '6e100000-0000-4000-9000-000000000010', 'República Populista (1946–1964)', 'texto', 'notaon:historia:39', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000140', '6e100000-0000-4000-9000-000000000010', 'Ditadura Militar (1964–1985)', 'texto', 'notaon:historia:40', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000141', '6e100000-0000-4000-9000-000000000011', 'Primeira Guerra Mundial', 'texto', 'notaon:historia:41', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000142', '6e100000-0000-4000-9000-000000000011', 'Revolução Russa e União Soviética', 'texto', 'notaon:historia:42', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000143', '6e100000-0000-4000-9000-000000000011', 'Crise de 1929, Fascismo e Nazismo', 'texto', 'notaon:historia:43', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000144', '6e100000-0000-4000-9000-000000000011', 'Segunda Guerra Mundial e Guerra Fria', 'texto', 'notaon:historia:44', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000145', '6e100000-0000-4000-9000-000000000012', 'Globalização, Nova Ordem Mundial e Organismos Internacionais', 'texto', 'notaon:historia:45', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000146', '6e100000-0000-4000-9000-000000000012', 'Brasil Contemporâneo: Redemocratização e Constituição de 1988', 'texto', 'notaon:historia:46', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000147', '6e100000-0000-4000-9000-000000000012', 'Questões sociais contemporâneas: direitos humanos, movimentos sociais, povos indígenas, racismo e meio ambiente', 'texto', 'notaon:historia:47', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('6e100000-0000-4000-9000-000000000148', '6e100000-0000-4000-9000-000000000012', 'Revisão Geral de História para o ENEM', 'texto', 'notaon:historia:48', 20, 4, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 48 where id = '6e100000-0000-4000-9000-000000000000';

-- ── INGLÊS ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'aa100000-0000-4000-9000-000000000000',
  'NOTA ON — Inglês',
  'preparatorio-ingles',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Inglês completa em 31 capítulos com exercícios interativos.',
  31, 620, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000001', 'aa100000-0000-4000-9000-000000000000', 'Módulo 1 — Inglês', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000002', 'aa100000-0000-4000-9000-000000000000', 'Módulo 2 — Inglês', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000003', 'aa100000-0000-4000-9000-000000000000', 'Módulo 3 — Inglês', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000004', 'aa100000-0000-4000-9000-000000000000', 'Módulo 4 — Inglês', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000005', 'aa100000-0000-4000-9000-000000000000', 'Módulo 5 — Inglês', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000006', 'aa100000-0000-4000-9000-000000000000', 'Módulo 6 — Inglês', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000007', 'aa100000-0000-4000-9000-000000000000', 'Módulo 7 — Inglês', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('aa100000-0000-4000-9000-000000000008', 'aa100000-0000-4000-9000-000000000000', 'Módulo 8 — Inglês', 8)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000101', 'aa100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em Inglês', 'texto', 'notaon:ingles:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000102', 'aa100000-0000-4000-9000-000000000001', 'Como interpretar textos em inglês mesmo sem ser fluente', 'texto', 'notaon:ingles:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000103', 'aa100000-0000-4000-9000-000000000001', 'Palavras cognatas, falsos cognatos e estratégias de vocabulário', 'texto', 'notaon:ingles:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000104', 'aa100000-0000-4000-9000-000000000001', 'Uso do contexto para descobrir o significado das palavras', 'texto', 'notaon:ingles:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000105', 'aa100000-0000-4000-9000-000000000001', 'Prefixos, sufixos e formação de palavras', 'texto', 'notaon:ingles:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000108', 'aa100000-0000-4000-9000-000000000002', 'Presente Simples e Presente Contínuo', 'texto', 'notaon:ingles:8', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000109', 'aa100000-0000-4000-9000-000000000002', 'Passado Simples e Passado Contínuo', 'texto', 'notaon:ingles:9', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000110', 'aa100000-0000-4000-9000-000000000002', 'Futuro: Will, Going To e Present Continuous', 'texto', 'notaon:ingles:10', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000111', 'aa100000-0000-4000-9000-000000000003', 'Present Perfect e Present Perfect Continuous', 'texto', 'notaon:ingles:11', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000112', 'aa100000-0000-4000-9000-000000000003', 'Past Perfect e Future Perfect', 'texto', 'notaon:ingles:12', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000115', 'aa100000-0000-4000-9000-000000000003', 'Discurso Direto e Indireto (Reported Speech)', 'texto', 'notaon:ingles:15', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000116', 'aa100000-0000-4000-9000-000000000004', 'Conjunções e conectores textuais', 'texto', 'notaon:ingles:16', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000117', 'aa100000-0000-4000-9000-000000000004', 'Preposições mais utilizadas', 'texto', 'notaon:ingles:17', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000118', 'aa100000-0000-4000-9000-000000000004', 'Comparativos e Superlativos', 'texto', 'notaon:ingles:18', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000119', 'aa100000-0000-4000-9000-000000000004', 'Conditional Sentences: Zero, First, Second e Third', 'texto', 'notaon:ingles:19', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000120', 'aa100000-0000-4000-9000-000000000004', 'Phrasal Verbs e Expressões Idiomáticas', 'texto', 'notaon:ingles:20', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000121', 'aa100000-0000-4000-9000-000000000005', 'Estratégias avançadas de leitura: Skimming e Scanning', 'texto', 'notaon:ingles:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000122', 'aa100000-0000-4000-9000-000000000005', 'Identificação da ideia principal e informações implícitas', 'texto', 'notaon:ingles:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000123', 'aa100000-0000-4000-9000-000000000005', 'Inferência, opinião, humor, ironia e intenção comunicativa', 'texto', 'notaon:ingles:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000124', 'aa100000-0000-4000-9000-000000000005', 'Interpretação de gráficos, tabelas, anúncios e infográficos', 'texto', 'notaon:ingles:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000125', 'aa100000-0000-4000-9000-000000000005', 'Interpretação de tirinhas, charges, quadrinhos e memes', 'texto', 'notaon:ingles:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000126', 'aa100000-0000-4000-9000-000000000006', 'Notícias, reportagens e artigos jornalísticos', 'texto', 'notaon:ingles:26', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000127', 'aa100000-0000-4000-9000-000000000006', 'Artigos científicos e textos de divulgação científica', 'texto', 'notaon:ingles:27', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000128', 'aa100000-0000-4000-9000-000000000006', 'Propagandas, campanhas publicitárias e marketing', 'texto', 'notaon:ingles:28', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000129', 'aa100000-0000-4000-9000-000000000006', 'Letras de músicas, poemas e textos literários', 'texto', 'notaon:ingles:29', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000130', 'aa100000-0000-4000-9000-000000000006', 'E-mails, blogs, redes sociais e comunicação digital', 'texto', 'notaon:ingles:30', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000131', 'aa100000-0000-4000-9000-000000000007', 'Meio ambiente, sustentabilidade e mudanças climáticas', 'texto', 'notaon:ingles:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000132', 'aa100000-0000-4000-9000-000000000007', 'Tecnologia, inteligência artificial e redes sociais', 'texto', 'notaon:ingles:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000133', 'aa100000-0000-4000-9000-000000000007', 'Direitos Humanos, diversidade cultural e cidadania global', 'texto', 'notaon:ingles:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000134', 'aa100000-0000-4000-9000-000000000008', 'Questões comentadas das últimas provas do ENEM', 'texto', 'notaon:ingles:34', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000135', 'aa100000-0000-4000-9000-000000000008', 'Revisão Geral de Inglês: estratégias finais e simulados comentados', 'texto', 'notaon:ingles:35', 20, 2, false, false)
on conflict (id) do nothing;

-- caps 06 e 07 (sem meta.ts na fonte — adicionados manualmente)
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000106', 'aa100000-0000-4000-9000-000000000001', 'Pronomes pessoais, possessivos, demonstrativos e interrogativos', 'texto', 'notaon:ingles:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000107', 'aa100000-0000-4000-9000-000000000001', 'Artigos, substantivos, adjetivos e advérbios', 'texto', 'notaon:ingles:7', 20, 7, false, false)
on conflict (id) do nothing;
-- caps 13 e 14 (sem meta.ts na fonte — adicionados manualmente, reordenando mod 3)
update public.lessons set ordem = 5 where id = 'aa100000-0000-4000-9000-000000000115';
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000113', 'aa100000-0000-4000-9000-000000000003', 'Modal Verbs: Can, Could, May, Might, Must, Should, Would', 'texto', 'notaon:ingles:13', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('aa100000-0000-4000-9000-000000000114', 'aa100000-0000-4000-9000-000000000003', 'Voz Ativa e Voz Passiva', 'texto', 'notaon:ingles:14', 20, 4, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 35 where id = 'aa100000-0000-4000-9000-000000000000';

-- ── MATEMÁTICA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'ab100000-0000-4000-9000-000000000000',
  'NOTA ON — Matemática',
  'preparatorio-matematica',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Matemática completa em 42 capítulos com exercícios interativos.',
  42, 840, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000001', 'ab100000-0000-4000-9000-000000000000', 'Módulo 1 — Matemática', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000002', 'ab100000-0000-4000-9000-000000000000', 'Módulo 2 — Matemática', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000003', 'ab100000-0000-4000-9000-000000000000', 'Módulo 3 — Matemática', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000004', 'ab100000-0000-4000-9000-000000000000', 'Módulo 4 — Matemática', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000005', 'ab100000-0000-4000-9000-000000000000', 'Módulo 5 — Matemática', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000006', 'ab100000-0000-4000-9000-000000000000', 'Módulo 6 — Matemática', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ab100000-0000-4000-9000-000000000007', 'ab100000-0000-4000-9000-000000000000', 'Módulo 7 — Matemática', 7)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000101', 'ab100000-0000-4000-9000-000000000001', 'Teoria dos Conjuntos', 'texto', 'notaon:matematica:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000102', 'ab100000-0000-4000-9000-000000000001', 'Conjuntos Numéricos', 'texto', 'notaon:matematica:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000103', 'ab100000-0000-4000-9000-000000000001', 'Razão, Proporção e Regra de Três', 'texto', 'notaon:matematica:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000104', 'ab100000-0000-4000-9000-000000000001', 'Juros Simples e Compostos', 'texto', 'notaon:matematica:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000105', 'ab100000-0000-4000-9000-000000000001', 'Expressões Numéricas e Divisibilidade', 'texto', 'notaon:matematica:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000106', 'ab100000-0000-4000-9000-000000000001', 'Potenciação e Radiciação', 'texto', 'notaon:matematica:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000107', 'ab100000-0000-4000-9000-000000000001', 'Álgebra: Expressões e Produtos Notáveis', 'texto', 'notaon:matematica:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000108', 'ab100000-0000-4000-9000-000000000001', 'Equações do 1º e 2º Grau', 'texto', 'notaon:matematica:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000109', 'ab100000-0000-4000-9000-000000000001', 'Inequações e Equações Modulares', 'texto', 'notaon:matematica:9', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000110', 'ab100000-0000-4000-9000-000000000002', 'Funções: Conceito e Tipos', 'texto', 'notaon:matematica:10', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000111', 'ab100000-0000-4000-9000-000000000002', 'Função do 1º Grau (Linear)', 'texto', 'notaon:matematica:11', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000112', 'ab100000-0000-4000-9000-000000000002', 'Função do 2º Grau (Quadrática)', 'texto', 'notaon:matematica:12', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000113', 'ab100000-0000-4000-9000-000000000002', 'Função Exponencial', 'texto', 'notaon:matematica:13', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000114', 'ab100000-0000-4000-9000-000000000002', 'Função Logarítmica', 'texto', 'notaon:matematica:14', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000115', 'ab100000-0000-4000-9000-000000000002', 'Progressões Aritméticas (PA)', 'texto', 'notaon:matematica:15', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000116', 'ab100000-0000-4000-9000-000000000002', 'Progressões Geométricas (PG)', 'texto', 'notaon:matematica:16', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000117', 'ab100000-0000-4000-9000-000000000003', 'Trigonometria no Triângulo Retângulo', 'texto', 'notaon:matematica:17', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000118', 'ab100000-0000-4000-9000-000000000003', 'Trigonometria no Ciclo Trigonométrico', 'texto', 'notaon:matematica:18', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000119', 'ab100000-0000-4000-9000-000000000003', 'Funções Trigonométricas', 'texto', 'notaon:matematica:19', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000120', 'ab100000-0000-4000-9000-000000000003', 'Identidades e Equações Trigonométricas', 'texto', 'notaon:matematica:20', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000121', 'ab100000-0000-4000-9000-000000000003', 'Lei dos Senos e Lei dos Cossenos', 'texto', 'notaon:matematica:21', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000122', 'ab100000-0000-4000-9000-000000000004', 'Matrizes', 'texto', 'notaon:matematica:22', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000123', 'ab100000-0000-4000-9000-000000000004', 'Determinantes e Regra de Cramer', 'texto', 'notaon:matematica:23', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000124', 'ab100000-0000-4000-9000-000000000004', 'Sistemas Lineares', 'texto', 'notaon:matematica:24', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000125', 'ab100000-0000-4000-9000-000000000005', 'Análise Combinatória: Princípio Fundamental da Contagem', 'texto', 'notaon:matematica:25', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000126', 'ab100000-0000-4000-9000-000000000005', 'Permutações, Arranjos e Combinações', 'texto', 'notaon:matematica:26', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000127', 'ab100000-0000-4000-9000-000000000005', 'Binômio de Newton', 'texto', 'notaon:matematica:27', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000128', 'ab100000-0000-4000-9000-000000000005', 'Probabilidade', 'texto', 'notaon:matematica:28', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000129', 'ab100000-0000-4000-9000-000000000005', 'Estatística: Medidas de Tendência Central', 'texto', 'notaon:matematica:29', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000130', 'ab100000-0000-4000-9000-000000000005', 'Estatística: Medidas de Dispersão e Gráficos', 'texto', 'notaon:matematica:30', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000131', 'ab100000-0000-4000-9000-000000000006', 'Geometria Plana: Ângulos e Triângulos', 'texto', 'notaon:matematica:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000132', 'ab100000-0000-4000-9000-000000000006', 'Semelhança e Teorema de Tales', 'texto', 'notaon:matematica:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000133', 'ab100000-0000-4000-9000-000000000006', 'Quadriláteros e Polígonos', 'texto', 'notaon:matematica:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000134', 'ab100000-0000-4000-9000-000000000006', 'Circunferência e Círculo', 'texto', 'notaon:matematica:34', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000135', 'ab100000-0000-4000-9000-000000000006', 'Áreas de Figuras Planas', 'texto', 'notaon:matematica:35', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000136', 'ab100000-0000-4000-9000-000000000007', 'Geometria Espacial: Prismas', 'texto', 'notaon:matematica:36', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000137', 'ab100000-0000-4000-9000-000000000007', 'Pirâmides e Cones', 'texto', 'notaon:matematica:37', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000138', 'ab100000-0000-4000-9000-000000000007', 'Cilindros e Esferas', 'texto', 'notaon:matematica:38', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000139', 'ab100000-0000-4000-9000-000000000007', 'Geometria Analítica: Ponto e Reta', 'texto', 'notaon:matematica:39', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000140', 'ab100000-0000-4000-9000-000000000007', 'Geometria Analítica: Circunferência', 'texto', 'notaon:matematica:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000141', 'ab100000-0000-4000-9000-000000000007', 'Cônicas: Elipse, Hipérbole e Parábola', 'texto', 'notaon:matematica:41', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ab100000-0000-4000-9000-000000000142', 'ab100000-0000-4000-9000-000000000007', 'Números Complexos', 'texto', 'notaon:matematica:42', 20, 7, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 42 where id = 'ab100000-0000-4000-9000-000000000000';

-- ── PORTUGUÊS ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'ac100000-0000-4000-9000-000000000000',
  'NOTA ON — Português',
  'preparatorio-portugues',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Português completa em 42 capítulos com exercícios interativos.',
  42, 840, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('ac100000-0000-4000-9000-000000000001', 'ac100000-0000-4000-9000-000000000000', 'Módulo 1 — Português', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ac100000-0000-4000-9000-000000000002', 'ac100000-0000-4000-9000-000000000000', 'Módulo 2 — Português', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ac100000-0000-4000-9000-000000000003', 'ac100000-0000-4000-9000-000000000000', 'Módulo 3 — Português', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ac100000-0000-4000-9000-000000000004', 'ac100000-0000-4000-9000-000000000000', 'Módulo 4 — Português', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ac100000-0000-4000-9000-000000000005', 'ac100000-0000-4000-9000-000000000000', 'Módulo 5 — Português', 5)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000101', 'ac100000-0000-4000-9000-000000000001', 'Linguagem, Língua e Fala', 'texto', 'notaon:portugues:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000102', 'ac100000-0000-4000-9000-000000000001', 'Funções da Linguagem', 'texto', 'notaon:portugues:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000103', 'ac100000-0000-4000-9000-000000000001', 'Gêneros Textuais e Tipologias Textuais', 'texto', 'notaon:portugues:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000104', 'ac100000-0000-4000-9000-000000000001', 'Gêneros Textuais', 'texto', 'notaon:portugues:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000105', 'ac100000-0000-4000-9000-000000000001', 'Figuras de Linguagem', 'texto', 'notaon:portugues:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000106', 'ac100000-0000-4000-9000-000000000001', 'Interpretação Textual e Inferência', 'texto', 'notaon:portugues:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000107', 'ac100000-0000-4000-9000-000000000001', 'Denotação e Conotação', 'texto', 'notaon:portugues:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000108', 'ac100000-0000-4000-9000-000000000001', 'Intertextualidade e Referenciação', 'texto', 'notaon:portugues:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000109', 'ac100000-0000-4000-9000-000000000001', 'Figuras de Linguagem', 'texto', 'notaon:portugues:9', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000110', 'ac100000-0000-4000-9000-000000000001', 'Capítulo 10', 'texto', 'notaon:portugues:10', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000111', 'ac100000-0000-4000-9000-000000000001', 'Tipos de Discurso: Direto, Indireto e Indireto Livre', 'texto', 'notaon:portugues:11', 20, 11, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000112', 'ac100000-0000-4000-9000-000000000001', 'Funções da Linguagem', 'texto', 'notaon:portugues:12', 20, 12, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000113', 'ac100000-0000-4000-9000-000000000001', 'Classes Gramaticais I', 'texto', 'notaon:portugues:13', 20, 13, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000114', 'ac100000-0000-4000-9000-000000000001', 'Classes Gramaticais II', 'texto', 'notaon:portugues:14', 20, 14, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000115', 'ac100000-0000-4000-9000-000000000001', 'Estrutura e Formação das Palavras', 'texto', 'notaon:portugues:15', 20, 15, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000116', 'ac100000-0000-4000-9000-000000000001', 'Ortografia Oficial e Acentuação Gráfica', 'texto', 'notaon:portugues:16', 20, 16, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000117', 'ac100000-0000-4000-9000-000000000001', 'Sintaxe I: Termos Essenciais da Oração', 'texto', 'notaon:portugues:17', 20, 17, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000118', 'ac100000-0000-4000-9000-000000000001', 'Sintaxe II: Termos Integrantes da Oração', 'texto', 'notaon:portugues:18', 20, 18, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000119', 'ac100000-0000-4000-9000-000000000001', 'Sintaxe III: Termos Acessórios da Oração', 'texto', 'notaon:portugues:19', 20, 19, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000120', 'ac100000-0000-4000-9000-000000000001', 'Concordância Verbal e Nominal', 'texto', 'notaon:portugues:20', 20, 20, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000121', 'ac100000-0000-4000-9000-000000000001', 'Regência Verbal e Nominal', 'texto', 'notaon:portugues:21', 20, 21, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000122', 'ac100000-0000-4000-9000-000000000001', 'Crase', 'texto', 'notaon:portugues:22', 20, 22, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000123', 'ac100000-0000-4000-9000-000000000002', 'Semântica', 'texto', 'notaon:portugues:23', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000124', 'ac100000-0000-4000-9000-000000000002', 'Vícios e Qualidades de Linguagem', 'texto', 'notaon:portugues:24', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000125', 'ac100000-0000-4000-9000-000000000003', 'Trovadorismo', 'texto', 'notaon:portugues:25', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000126', 'ac100000-0000-4000-9000-000000000003', 'Humanismo', 'texto', 'notaon:portugues:26', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000127', 'ac100000-0000-4000-9000-000000000003', 'Classicismo', 'texto', 'notaon:portugues:27', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000128', 'ac100000-0000-4000-9000-000000000003', 'Quinhentismo', 'texto', 'notaon:portugues:28', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000129', 'ac100000-0000-4000-9000-000000000003', 'Barroco', 'texto', 'notaon:portugues:29', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000130', 'ac100000-0000-4000-9000-000000000003', 'Arcadismo', 'texto', 'notaon:portugues:30', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000131', 'ac100000-0000-4000-9000-000000000003', 'Romantismo', 'texto', 'notaon:portugues:31', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000132', 'ac100000-0000-4000-9000-000000000003', 'Realismo e Naturalismo', 'texto', 'notaon:portugues:32', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000133', 'ac100000-0000-4000-9000-000000000003', 'Parnasianismo', 'texto', 'notaon:portugues:33', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000134', 'ac100000-0000-4000-9000-000000000003', 'Simbolismo', 'texto', 'notaon:portugues:34', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000135', 'ac100000-0000-4000-9000-000000000003', 'Pré-Modernismo', 'texto', 'notaon:portugues:35', 20, 11, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000136', 'ac100000-0000-4000-9000-000000000003', 'Modernismo: Primeira Fase (Semana de 22)', 'texto', 'notaon:portugues:36', 20, 12, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000137', 'ac100000-0000-4000-9000-000000000003', 'Modernismo: Segunda Fase (Geração de 30)', 'texto', 'notaon:portugues:37', 20, 13, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000138', 'ac100000-0000-4000-9000-000000000003', 'Modernismo: Terceira Fase (Pós-45)', 'texto', 'notaon:portugues:38', 20, 14, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000139', 'ac100000-0000-4000-9000-000000000004', 'Literatura Contemporânea', 'texto', 'notaon:portugues:39', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000140', 'ac100000-0000-4000-9000-000000000004', 'Interpretação de Texto', 'texto', 'notaon:portugues:40', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000141', 'ac100000-0000-4000-9000-000000000005', 'Redação ENEM: Estrutura e Argumentação', 'texto', 'notaon:portugues:41', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ac100000-0000-4000-9000-000000000142', 'ac100000-0000-4000-9000-000000000005', 'Revisão Geral de Português para o ENEM', 'texto', 'notaon:portugues:42', 20, 2, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 42 where id = 'ac100000-0000-4000-9000-000000000000';

-- ── QUÍMICA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'ad100000-0000-4000-9000-000000000000',
  'NOTA ON — Química',
  'preparatorio-quimica',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Química completa em 45 capítulos com exercícios interativos.',
  45, 900, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000001', 'ad100000-0000-4000-9000-000000000000', 'Módulo 1 — Química', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000002', 'ad100000-0000-4000-9000-000000000000', 'Módulo 2 — Química', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000003', 'ad100000-0000-4000-9000-000000000000', 'Módulo 3 — Química', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000004', 'ad100000-0000-4000-9000-000000000000', 'Módulo 4 — Química', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000005', 'ad100000-0000-4000-9000-000000000000', 'Módulo 5 — Química', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000006', 'ad100000-0000-4000-9000-000000000000', 'Módulo 6 — Química', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ad100000-0000-4000-9000-000000000007', 'ad100000-0000-4000-9000-000000000000', 'Módulo 7 — Química', 7)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000101', 'ad100000-0000-4000-9000-000000000001', 'Matéria e Energia: Propriedades, Estados e Fenômenos', 'texto', 'notaon:quimica:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000102', 'ad100000-0000-4000-9000-000000000001', 'Sistemas e Misturas: Homogênea, Heterogênea e Gráficos de Aquecimento', 'texto', 'notaon:quimica:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000103', 'ad100000-0000-4000-9000-000000000001', 'Métodos de Separação de Misturas', 'texto', 'notaon:quimica:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000104', 'ad100000-0000-4000-9000-000000000001', 'Evolução dos Modelos Atômicos: Dalton, Thomson, Rutherford e Bohr', 'texto', 'notaon:quimica:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000105', 'ad100000-0000-4000-9000-000000000001', 'Estrutura Atômica Moderna: Prótons, Nêutrons, Elétrons, Íons e Semelhanças Atômicas', 'texto', 'notaon:quimica:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000106', 'ad100000-0000-4000-9000-000000000001', 'Distribuição Eletrônica, Números Quânticos e Estado Fundamental × Excitado', 'texto', 'notaon:quimica:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000107', 'ad100000-0000-4000-9000-000000000001', 'Tabela Periódica: Organização, Histórico e Classificação dos Elementos', 'texto', 'notaon:quimica:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000108', 'ad100000-0000-4000-9000-000000000001', 'Propriedades Periódicas: Raio Atômico, Energia de Ionização, Afinidade e Eletronegatividade', 'texto', 'notaon:quimica:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000109', 'ad100000-0000-4000-9000-000000000002', 'Ligação Iônica e Ligação Metálica: Características, Propriedades e Teoria do Octeto', 'texto', 'notaon:quimica:9', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000110', 'ad100000-0000-4000-9000-000000000002', 'Ligação Covalente (Molecular): Fórmulas Eletrônicas (Lewis), Estruturais e Moleculares', 'texto', 'notaon:quimica:10', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000111', 'ad100000-0000-4000-9000-000000000002', 'Geometria Molecular (RPECV) e Polaridade das Moléculas', 'texto', 'notaon:quimica:11', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000112', 'ad100000-0000-4000-9000-000000000002', 'Forças Intermoleculares: Dipolo-Induzido, Dipolo-Dipolo, Ligação de Hidrogênio, Íon-Dipolo', 'texto', 'notaon:quimica:12', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000113', 'ad100000-0000-4000-9000-000000000002', 'Relação entre Forças Intermoleculares e Propriedades Físicas (Fusão, Ebulição, Solubilidade)', 'texto', 'notaon:quimica:13', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000114', 'ad100000-0000-4000-9000-000000000003', 'Funções Inorgânicas I: Ácidos e Bases (Arrhenius, Brønsted-Lowry e Lewis)', 'texto', 'notaon:quimica:14', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000115', 'ad100000-0000-4000-9000-000000000003', 'Funções Inorgânicas II: Sais e Óxidos (Classificação, Nomenclatura e Chuva Ácida)', 'texto', 'notaon:quimica:15', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000116', 'ad100000-0000-4000-9000-000000000003', 'Reações Químicas Inorgânicas: Síntese, Análise, Simples Troca e Dupla Troca', 'texto', 'notaon:quimica:16', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000117', 'ad100000-0000-4000-9000-000000000003', 'Grandezas Químicas: Massa Atômica, Massa Molecular, Mol e Constante de Avogadro', 'texto', 'notaon:quimica:17', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000118', 'ad100000-0000-4000-9000-000000000003', 'Determinação de Fórmulas: Centesimal, Mínima (Empírica) e Molecular', 'texto', 'notaon:quimica:18', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000119', 'ad100000-0000-4000-9000-000000000003', 'Leis Ponderais e Introdução ao Cálculo Estequiométrico Simples', 'texto', 'notaon:quimica:19', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000120', 'ad100000-0000-4000-9000-000000000003', 'Estequiometria Avançada: Reagente Limitante, Excesso, Pureza e Rendimento', 'texto', 'notaon:quimica:20', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000121', 'ad100000-0000-4000-9000-000000000004', 'Estudo das Soluções: Classificação, Curvas de Solubilidade e Concentrações', 'texto', 'notaon:quimica:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000122', 'ad100000-0000-4000-9000-000000000004', 'Diluição, Mistura de Soluções (Sem e Com Reação) e Titulação Ácido-Base', 'texto', 'notaon:quimica:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000123', 'ad100000-0000-4000-9000-000000000004', 'Propriedades Coligativas: Tonoscopia, Ebulioscopia, Crioscopia e Osmose', 'texto', 'notaon:quimica:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000124', 'ad100000-0000-4000-9000-000000000004', 'Termoquímica I: Processos Endo/Exotérmicos, Entalpia (H), Gráficos de Energia', 'texto', 'notaon:quimica:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000125', 'ad100000-0000-4000-9000-000000000004', 'Termoquímica II: Entalpia de Formação, Combustão e Lei de Hess', 'texto', 'notaon:quimica:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000126', 'ad100000-0000-4000-9000-000000000005', 'Cinética Química: Velocidade de Reação, Teoria das Colisões, Energia de Ativação', 'texto', 'notaon:quimica:26', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000127', 'ad100000-0000-4000-9000-000000000005', 'Fatores que Alteram a Velocidade (Temperatura, Concentração, Superfície, Catalisadores)', 'texto', 'notaon:quimica:27', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000128', 'ad100000-0000-4000-9000-000000000005', 'Equilíbrio Químico Reversível: Conceito, Kc e Kp, Gráficos', 'texto', 'notaon:quimica:28', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000129', 'ad100000-0000-4000-9000-000000000005', 'Princípio de Le Chatelier: Deslocamento de Equilíbrios', 'texto', 'notaon:quimica:29', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000130', 'ad100000-0000-4000-9000-000000000005', 'Equilíbrio Iônico: Ka, Kb, Lei de Ostwald e Efeito do Íon Comum', 'texto', 'notaon:quimica:30', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000131', 'ad100000-0000-4000-9000-000000000005', 'Equilíbrio da Água: Produto Iônico (Kw), pH e pOH', 'texto', 'notaon:quimica:31', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000132', 'ad100000-0000-4000-9000-000000000005', 'Hidrólise Salina e Solução Tampão', 'texto', 'notaon:quimica:32', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000133', 'ad100000-0000-4000-9000-000000000005', 'Eletroquímica I: NOX e Reações de Oxirredução', 'texto', 'notaon:quimica:33', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000134', 'ad100000-0000-4000-9000-000000000005', 'Eletroquímica II: Pilhas Galvânicas, Potencial Padrão e Corrosão', 'texto', 'notaon:quimica:34', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000135', 'ad100000-0000-4000-9000-000000000005', 'Eletroquímica III: Eletrólise Ígnea, Aquosa e Leis de Faraday', 'texto', 'notaon:quimica:35', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000136', 'ad100000-0000-4000-9000-000000000006', 'Introdução à Química Orgânica: Kekulé, Hibridização e Cadeias', 'texto', 'notaon:quimica:36', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000137', 'ad100000-0000-4000-9000-000000000006', 'Funções Orgânicas I: Hidrocarbonetos e Nomenclatura IUPAC', 'texto', 'notaon:quimica:37', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000138', 'ad100000-0000-4000-9000-000000000006', 'Funções Orgânicas II: Oxigenadas', 'texto', 'notaon:quimica:38', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000139', 'ad100000-0000-4000-9000-000000000006', 'Funções Orgânicas III: Nitrogenadas e Haletos', 'texto', 'notaon:quimica:39', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000140', 'ad100000-0000-4000-9000-000000000006', 'Propriedades Físicas dos Compostos Orgânicos', 'texto', 'notaon:quimica:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000141', 'ad100000-0000-4000-9000-000000000006', 'Isomeria Plana', 'texto', 'notaon:quimica:41', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000142', 'ad100000-0000-4000-9000-000000000006', 'Isomeria Espacial: Geométrica e Óptica', 'texto', 'notaon:quimica:42', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000143', 'ad100000-0000-4000-9000-000000000006', 'Reações Orgânicas Principais', 'texto', 'notaon:quimica:43', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000144', 'ad100000-0000-4000-9000-000000000006', 'Esterificação, Saponificação e Polímeros', 'texto', 'notaon:quimica:44', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ad100000-0000-4000-9000-000000000145', 'ad100000-0000-4000-9000-000000000007', 'Química Ambiental e Bioquímica', 'texto', 'notaon:quimica:45', 20, 1, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 45 where id = 'ad100000-0000-4000-9000-000000000000';

-- ── REDAÇÃO ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'ae100000-0000-4000-9000-000000000000',
  'NOTA ON — Redação',
  'preparatorio-redacao',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Redação completa em 37 capítulos com exercícios interativos.',
  37, 740, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('ae100000-0000-4000-9000-000000000001', 'ae100000-0000-4000-9000-000000000000', 'Módulo 1 — Redação', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ae100000-0000-4000-9000-000000000002', 'ae100000-0000-4000-9000-000000000000', 'Módulo 2 — Redação', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ae100000-0000-4000-9000-000000000003', 'ae100000-0000-4000-9000-000000000000', 'Módulo 3 — Redação', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('ae100000-0000-4000-9000-000000000004', 'ae100000-0000-4000-9000-000000000000', 'Módulo 4 — Redação', 4)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000101', 'ae100000-0000-4000-9000-000000000001', '️ Aula 1 — Introdução à Redação ENEM', 'texto', 'notaon:redacao:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000102', 'ae100000-0000-4000-9000-000000000001', '️ Aula 2 — Estrutura do Texto Dissertativo-Argumentativo', 'texto', 'notaon:redacao:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000103', 'ae100000-0000-4000-9000-000000000001', '️ Aula 3 — Como Interpretar o Tema', 'texto', 'notaon:redacao:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000104', 'ae100000-0000-4000-9000-000000000001', '️ Aula 4 — Tese e Posicionamento', 'texto', 'notaon:redacao:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000105', 'ae100000-0000-4000-9000-000000000001', '️ Aula 5 — Construção da Introdução', 'texto', 'notaon:redacao:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000106', 'ae100000-0000-4000-9000-000000000001', '️ Aula 6 — Desenvolvimento Argumentativo', 'texto', 'notaon:redacao:6', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000107', 'ae100000-0000-4000-9000-000000000001', '️ Aula 7 — Construção da Conclusão', 'texto', 'notaon:redacao:7', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000108', 'ae100000-0000-4000-9000-000000000001', '️ Aula 8 — Proposta de Intervenção Completa', 'texto', 'notaon:redacao:8', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000109', 'ae100000-0000-4000-9000-000000000001', '️ Aula 9 — Competências da Redação ENEM', 'texto', 'notaon:redacao:9', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000110', 'ae100000-0000-4000-9000-000000000001', '️ Aula 10 — Coesão Textual e Conectivos', 'texto', 'notaon:redacao:10', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000111', 'ae100000-0000-4000-9000-000000000001', '️ Aula 11 — Repertório Sociocultural', 'texto', 'notaon:redacao:11', 20, 11, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000112', 'ae100000-0000-4000-9000-000000000002', '️ Aula 12 — Argumentação Filosófica', 'texto', 'notaon:redacao:12', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000113', 'ae100000-0000-4000-9000-000000000002', '️ Aula 13 — Argumentação Sociológica', 'texto', 'notaon:redacao:13', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000114', 'ae100000-0000-4000-9000-000000000002', '️ Aula 14 — Direitos Humanos na Redação ENEM', 'texto', 'notaon:redacao:14', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000115', 'ae100000-0000-4000-9000-000000000002', '️ Aula 14 — Direitos Humanos na Redação ENEM', 'texto', 'notaon:redacao:15', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000116', 'ae100000-0000-4000-9000-000000000002', '️ Aula 16 — Introdução Nota 1000', 'texto', 'notaon:redacao:16', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000117', 'ae100000-0000-4000-9000-000000000002', '️ Aula 17 — Desenvolvimento Nota 1000', 'texto', 'notaon:redacao:17', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000118', 'ae100000-0000-4000-9000-000000000002', '️ Aula 18 — Estratégias para Nota 1000', 'texto', 'notaon:redacao:18', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000119', 'ae100000-0000-4000-9000-000000000002', '️ Aula 19 — Linguagem Formal e Norma Culta', 'texto', 'notaon:redacao:19', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000120', 'ae100000-0000-4000-9000-000000000002', '️ Aula 20 — Repertório Sociocultural Nota 1000', 'texto', 'notaon:redacao:20', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000121', 'ae100000-0000-4000-9000-000000000003', '️ Aula 21 — Conclusão e Proposta de Intervenção', 'texto', 'notaon:redacao:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000122', 'ae100000-0000-4000-9000-000000000003', '️ Aula 22 — Introdução com Repertório', 'texto', 'notaon:redacao:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000123', 'ae100000-0000-4000-9000-000000000003', '️ Aula 23 — Conectivos e Coesão Textual', 'texto', 'notaon:redacao:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000124', 'ae100000-0000-4000-9000-000000000003', '️ Aula 24 — Argumentação e Persuasão', 'texto', 'notaon:redacao:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000125', 'ae100000-0000-4000-9000-000000000003', '️ Aula 25 — Como Evitar Fuga ao Tema', 'texto', 'notaon:redacao:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000126', 'ae100000-0000-4000-9000-000000000003', '️ Aula 26 — Uso de Filmes e Séries na Redação', 'texto', 'notaon:redacao:26', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000127', 'ae100000-0000-4000-9000-000000000003', '️ Aula 27 — Uso de Literatura na Redação', 'texto', 'notaon:redacao:27', 20, 7, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000128', 'ae100000-0000-4000-9000-000000000003', '️ Aula 28 — Uso de Atualidades', 'texto', 'notaon:redacao:28', 20, 8, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000129', 'ae100000-0000-4000-9000-000000000003', '️ Aula 29 — Filosofia na Redação ENEM', 'texto', 'notaon:redacao:29', 20, 9, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000130', 'ae100000-0000-4000-9000-000000000003', '️ Aula 30 — Sociologia na Redação ENEM', 'texto', 'notaon:redacao:30', 20, 10, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000131', 'ae100000-0000-4000-9000-000000000004', '️ Aula 31 — Direitos Humanos na Redação', 'texto', 'notaon:redacao:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000132', 'ae100000-0000-4000-9000-000000000004', '️ Aula 32 — Temas Sociais Recorrentes no ENEM', 'texto', 'notaon:redacao:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000133', 'ae100000-0000-4000-9000-000000000004', '️ Aula 33 — Como Fazer uma Redação Nota 1000', 'texto', 'notaon:redacao:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000134', 'ae100000-0000-4000-9000-000000000004', '️ Aula 34 — Redação sobre Saúde Mental', 'texto', 'notaon:redacao:34', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000135', 'ae100000-0000-4000-9000-000000000004', '️ Aula 35 — Redação sobre Tecnologia e Redes Sociais', 'texto', 'notaon:redacao:35', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000136', 'ae100000-0000-4000-9000-000000000004', '️ Aula 36 — Redação sobre Meio Ambiente', 'texto', 'notaon:redacao:36', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('ae100000-0000-4000-9000-000000000137', 'ae100000-0000-4000-9000-000000000004', '️ Aula 37 — Revisão Final e Estratégias para o ENEM', 'texto', 'notaon:redacao:37', 20, 7, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 37 where id = 'ae100000-0000-4000-9000-000000000000';

-- ── SOCIOLOGIA ─────────────────────────────────────────────────────
insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)
values (
  'af100000-0000-4000-9000-000000000000',
  'NOTA ON — Sociologia',
  'preparatorio-sociologia',
  'trainee', 'outros', ARRAY['tecnico','preparatorio'],
  'pago', 'NOTA ON — Preparatório ENEM e Vestibular: Sociologia completa em 42 capítulos com exercícios interativos.',
  42, 840, false, false, 200
) on conflict (id) do nothing;

insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000001', 'af100000-0000-4000-9000-000000000000', 'Módulo 1 — Sociologia', 1)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000002', 'af100000-0000-4000-9000-000000000000', 'Módulo 2 — Sociologia', 2)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000003', 'af100000-0000-4000-9000-000000000000', 'Módulo 3 — Sociologia', 3)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000004', 'af100000-0000-4000-9000-000000000000', 'Módulo 4 — Sociologia', 4)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000005', 'af100000-0000-4000-9000-000000000000', 'Módulo 5 — Sociologia', 5)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000006', 'af100000-0000-4000-9000-000000000000', 'Módulo 6 — Sociologia', 6)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000007', 'af100000-0000-4000-9000-000000000000', 'Módulo 7 — Sociologia', 7)
on conflict (id) do nothing;
insert into public.modules (id, course_id, titulo, ordem)
values ('af100000-0000-4000-9000-000000000008', 'af100000-0000-4000-9000-000000000000', 'Módulo 8 — Sociologia', 8)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000101', 'af100000-0000-4000-9000-000000000001', 'O que o ENEM cobra em Sociologia: competências, habilidades e interpretação de questões', 'texto', 'notaon:sociologia:1', 20, 1, false, true)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000102', 'af100000-0000-4000-9000-000000000001', 'O que é Sociologia? Origem, objeto de estudo e importância para a compreensão da sociedade', 'texto', 'notaon:sociologia:2', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000103', 'af100000-0000-4000-9000-000000000001', 'Indivíduo, sociedade, cultura e socialização', 'texto', 'notaon:sociologia:3', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000104', 'af100000-0000-4000-9000-000000000001', 'Instituições sociais: família, escola, religião, Estado e mídia', 'texto', 'notaon:sociologia:4', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000105', 'af100000-0000-4000-9000-000000000001', 'Normas sociais, valores, controle social e cidadania', 'texto', 'notaon:sociologia:5', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000106', 'af100000-0000-4000-9000-000000000002', 'Auguste Comte e o Positivismo', 'texto', 'notaon:sociologia:6', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000107', 'af100000-0000-4000-9000-000000000002', 'Émile Durkheim: fatos sociais, solidariedade e divisão do trabalho', 'texto', 'notaon:sociologia:7', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000108', 'af100000-0000-4000-9000-000000000002', 'Karl Marx: capitalismo, trabalho, alienação e luta de classes', 'texto', 'notaon:sociologia:8', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000109', 'af100000-0000-4000-9000-000000000002', 'Max Weber: ação social, burocracia, racionalização e poder', 'texto', 'notaon:sociologia:9', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000110', 'af100000-0000-4000-9000-000000000002', 'Comparando Marx, Durkheim e Weber: diferentes interpretações da sociedade', 'texto', 'notaon:sociologia:10', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000111', 'af100000-0000-4000-9000-000000000003', 'Cultura, identidade e diversidade cultural', 'texto', 'notaon:sociologia:11', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000112', 'af100000-0000-4000-9000-000000000003', 'Etnocentrismo, relativismo cultural e multiculturalismo', 'texto', 'notaon:sociologia:12', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000113', 'af100000-0000-4000-9000-000000000003', 'Indústria cultural, cultura de massa e cultura digital', 'texto', 'notaon:sociologia:13', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000114', 'af100000-0000-4000-9000-000000000003', 'Globalização, consumo e transformações culturais', 'texto', 'notaon:sociologia:14', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000115', 'af100000-0000-4000-9000-000000000003', 'Movimentos culturais e patrimônio histórico-cultural', 'texto', 'notaon:sociologia:15', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000116', 'af100000-0000-4000-9000-000000000004', 'Estratificação social, mobilidade social e classes sociais', 'texto', 'notaon:sociologia:16', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000117', 'af100000-0000-4000-9000-000000000004', 'Desigualdade social no Brasil e no mundo', 'texto', 'notaon:sociologia:17', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000118', 'af100000-0000-4000-9000-000000000004', 'Pobreza, exclusão social e vulnerabilidade', 'texto', 'notaon:sociologia:18', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000119', 'af100000-0000-4000-9000-000000000004', 'Raça, racismo estrutural e relações étnico-raciais', 'texto', 'notaon:sociologia:19', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000120', 'af100000-0000-4000-9000-000000000004', 'Gênero, sexualidade e diversidade na sociedade contemporânea', 'texto', 'notaon:sociologia:20', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000121', 'af100000-0000-4000-9000-000000000005', 'Transformações do mundo do trabalho', 'texto', 'notaon:sociologia:21', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000122', 'af100000-0000-4000-9000-000000000005', 'Capitalismo, consumo e sociedade contemporânea', 'texto', 'notaon:sociologia:22', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000123', 'af100000-0000-4000-9000-000000000005', 'Revolução Industrial, fordismo, taylorismo e toyotismo', 'texto', 'notaon:sociologia:23', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000124', 'af100000-0000-4000-9000-000000000005', 'Precarização do trabalho, economia digital e plataformas', 'texto', 'notaon:sociologia:24', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000125', 'af100000-0000-4000-9000-000000000005', 'Empreendedorismo, economia solidária e novas formas de produção', 'texto', 'notaon:sociologia:25', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000126', 'af100000-0000-4000-9000-000000000006', 'Estado, poder e formas de organização política', 'texto', 'notaon:sociologia:26', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000127', 'af100000-0000-4000-9000-000000000006', 'Democracia, cidadania e participação política', 'texto', 'notaon:sociologia:27', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000128', 'af100000-0000-4000-9000-000000000006', 'Direitos Humanos e Constituição de 1988', 'texto', 'notaon:sociologia:28', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000129', 'af100000-0000-4000-9000-000000000006', 'Movimentos sociais e participação popular', 'texto', 'notaon:sociologia:29', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000130', 'af100000-0000-4000-9000-000000000006', 'Mídia, opinião pública e formação política', 'texto', 'notaon:sociologia:30', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000131', 'af100000-0000-4000-9000-000000000007', 'Formação da sociedade brasileira', 'texto', 'notaon:sociologia:31', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000132', 'af100000-0000-4000-9000-000000000007', 'Urbanização, violência e segregação socioespacial', 'texto', 'notaon:sociologia:32', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000133', 'af100000-0000-4000-9000-000000000007', 'Educação, desigualdade e mobilidade social', 'texto', 'notaon:sociologia:33', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000134', 'af100000-0000-4000-9000-000000000007', 'Questão indígena, povos tradicionais e comunidades quilombolas', 'texto', 'notaon:sociologia:34', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000135', 'af100000-0000-4000-9000-000000000007', 'Questões ambientais e sustentabilidade sob a perspectiva sociológica', 'texto', 'notaon:sociologia:35', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000136', 'af100000-0000-4000-9000-000000000008', 'Globalização e sociedade em rede', 'texto', 'notaon:sociologia:36', 20, 1, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000137', 'af100000-0000-4000-9000-000000000008', 'Tecnologia, inteligência artificial e impactos sociais', 'texto', 'notaon:sociologia:37', 20, 2, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000138', 'af100000-0000-4000-9000-000000000008', 'Biopolítica, vigilância e controle social', 'texto', 'notaon:sociologia:38', 20, 3, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000139', 'af100000-0000-4000-9000-000000000008', 'Temas contemporâneos recorrentes no ENEM', 'texto', 'notaon:sociologia:39', 20, 4, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000140', 'af100000-0000-4000-9000-000000000008', 'Leitura e interpretação de textos, gráficos, charges e infográficos em Sociologia', 'texto', 'notaon:sociologia:40', 20, 5, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000141', 'af100000-0000-4000-9000-000000000008', 'Questões comentadas dos principais sociólogos e temas do ENEM', 'texto', 'notaon:sociologia:41', 20, 6, false, false)
on conflict (id) do nothing;
insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)
values ('af100000-0000-4000-9000-000000000142', 'af100000-0000-4000-9000-000000000008', 'Revisão Geral de Sociologia: conceitos fundamentais, estratégias de prova e resolução comentada de questões', 'texto', 'notaon:sociologia:42', 20, 7, false, false)
on conflict (id) do nothing;

update public.courses set total_aulas = 42 where id = 'af100000-0000-4000-9000-000000000000';

commit;
