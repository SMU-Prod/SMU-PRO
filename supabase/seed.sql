-- ============================================================
-- Seed Script para Desenvolvimento
-- Execute no Supabase SQL Editor para popular dados de teste
-- ============================================================

-- 1. Configurações padrão da plataforma
insert into public.settings (chave, valor) values
  ('nome_plataforma', '"SMU PRO"'),
  ('email_contato', '"contato@smupro.com.br"'),
  ('manutencao', 'false')
on conflict (chave) do nothing;

-- 2. Curso de exemplo: Sonorização Básica
insert into public.courses (
  id, titulo, slug, descricao, descricao_curta, nivel, categoria, tipo,
  preco, carga_horaria, ativo, destaque, ordem
) values (
  'a0000000-0000-0000-0000-000000000001',
  'Sonorização Básica para Eventos',
  'sonorizacao-basica',
  'Aprenda os fundamentos de sonorização para eventos ao vivo. Este curso cobre desde a teoria básica do som até a operação de mesas de som analógicas e digitais.',
  'Fundamentos de som para quem está começando na área de eventos.',
  'trainee', 'som', 'free',
  0, 120, true, true, 1
) on conflict (slug) do nothing;

-- 3. Módulos do curso
insert into public.modules (id, course_id, titulo, descricao, ordem) values
  ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001',
   'Introdução ao Som', 'Conceitos básicos de acústica e propagação sonora.', 1),
  ('b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001',
   'Equipamentos Essenciais', 'Conheça os equipamentos fundamentais para sonorização.', 2),
  ('b0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001',
   'Mesa de Som na Prática', 'Operação de mesas analógicas e digitais.', 3)
on conflict (id) do nothing;

-- 4. Aulas
insert into public.lessons (id, module_id, titulo, descricao, tipo, duracao_min, ordem, preview_gratis) values
  -- Módulo 1
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001',
   'O que é som?', 'Entenda a física por trás do som.', 'video', 15, 1, true),
  ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000001',
   'Frequência, amplitude e timbre', 'Os três pilares do som.', 'video', 20, 2, false),
  ('c0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000001',
   'Acústica de ambientes', 'Como o ambiente afeta o som.', 'video', 18, 3, false),
  -- Módulo 2
  ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002',
   'Microfones: tipos e aplicações', 'Dinâmicos, condensadores e ribbon.', 'video', 22, 1, false),
  ('c0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000002',
   'Caixas de som e amplificadores', 'Potência, impedância e posicionamento.', 'video', 25, 2, false),
  -- Módulo 3
  ('c0000000-0000-0000-0000-000000000006', 'b0000000-0000-0000-0000-000000000003',
   'Canais e ganho', 'Configuração de canais na mesa.', 'video', 20, 1, false),
  ('c0000000-0000-0000-0000-000000000007', 'b0000000-0000-0000-0000-000000000003',
   'EQ e efeitos', 'Equalização e processamento de sinal.', 'video', 20, 2, false)
on conflict (id) do nothing;

-- 5. Curso pago de exemplo: Iluminação Avançada
insert into public.courses (
  id, titulo, slug, descricao, descricao_curta, nivel, categoria, tipo,
  preco, carga_horaria, ativo, destaque, ordem
) values (
  'a0000000-0000-0000-0000-000000000002',
  'Iluminação Avançada para Shows',
  'iluminacao-avancada',
  'Domine técnicas avançadas de iluminação para shows e eventos de grande porte. Aprenda a programar mesas de luz, criar cenas e trabalhar com moving heads.',
  'Técnicas avançadas de iluminação para eventos profissionais.',
  'pleno', 'luz', 'pago',
  197.00, 240, true, false, 2
) on conflict (slug) do nothing;

insert into public.modules (id, course_id, titulo, descricao, ordem) values
  ('b0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000002',
   'Teoria da Luz', 'Fundamentos de temperatura de cor, lux e ângulos.', 1),
  ('b0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000002',
   'Programação de Mesa de Luz', 'GrandMA, Avolites e outros consoles.', 2)
on conflict (id) do nothing;

insert into public.lessons (id, module_id, titulo, descricao, tipo, duracao_min, ordem, preview_gratis) values
  ('c0000000-0000-0000-0000-000000000008', 'b0000000-0000-0000-0000-000000000004',
   'Temperatura de cor e CRI', 'Entenda a qualidade da luz.', 'video', 18, 1, true),
  ('c0000000-0000-0000-0000-000000000009', 'b0000000-0000-0000-0000-000000000004',
   'Tipos de refletores', 'PAR, Fresnel, Elipsoidal e LED.', 'video', 22, 2, false),
  ('c0000000-0000-0000-0000-000000000010', 'b0000000-0000-0000-0000-000000000005',
   'Introdução ao DMX', 'Protocolo DMX512 e endereçamento.', 'video', 25, 1, false),
  ('c0000000-0000-0000-0000-000000000011', 'b0000000-0000-0000-0000-000000000005',
   'Criando cenas e efeitos', 'Programação de cenas na mesa.', 'video', 30, 2, false)
on conflict (id) do nothing;

-- 6. Collection de exemplo
insert into public.collections (id, titulo, slug, descricao, ativo, ordem) values
  ('d0000000-0000-0000-0000-000000000001',
   'Trilha Técnico de Eventos',
   'trilha-tecnico-eventos',
   'Do zero ao profissional: sonorização + iluminação para eventos.',
   true, 1)
on conflict (slug) do nothing;

insert into public.collection_courses (collection_id, course_id, ordem) values
  ('d0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 1),
  ('d0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000002', 2)
on conflict (collection_id, course_id) do nothing;
