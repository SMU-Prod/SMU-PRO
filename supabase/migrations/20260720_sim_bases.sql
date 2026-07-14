-- ====================================================================
-- SMU PRO — Bases (backing tracks) dos simuladores de mesa de som.
--
-- Antes: a lista de músicas ("SONGS") vivia HARD-CODED dentro de cada
-- HTML de simulador (simuladores/som/*-real.html). Adicionar uma música
-- nova exigia editar 14 arquivos à mão.
--
-- Agora: a lista mora nesta tabela. Os simuladores leem em runtime
-- (fetch anônimo via REST) e o admin gerencia pela página /admin/bases.
--
-- Cada base = uma música. `stems` é um array JSON de canais no formato
--   {n:nome, c:corHex, f:arquivo, p:pan(-30..30), h:hpfOn, a:ativo?}
-- em que o índice do stem mapeia para o canal N da mesa (stem 0 -> canal 1).
-- `a` (ativo do canal) é OPCIONAL — ausente = canal ativo. Um canal com
-- a=false fica guardado na base mas NÃO entra na mesa (nada é truncado).
--
-- Cada simulador abre até a capacidade real do console (MAXCH). A base
-- pode ter mais canais que o console; nesse caso o console usa os
-- primeiros MAXCH e ignora o resto (como uma mesa real sem patch).
--
-- Aplicar via SQL Editor do Supabase (produção) ou `supabase db push`.
-- Idempotente: reaplicar não duplica (folder é UNIQUE + ON CONFLICT).
-- ====================================================================
begin;

create table if not exists public.sim_bases (
  id         uuid primary key default gen_random_uuid(),
  label      text not null,
  folder     text not null unique,
  ordem      int  not null default 0,
  ativo      boolean not null default true,
  stems      jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

comment on table  public.sim_bases        is 'Bases (backing tracks) dos simuladores de mesa. Lidas em runtime pelos *-real.html.';
comment on column public.sim_bases.folder is 'Pasta no bucket Storage "media/" onde ficam os stems (mp3/wav). Único e imutável.';
comment on column public.sim_bases.stems  is 'Array de canais {n,c,f,p,h,a}. Índice = canal da mesa (0 -> canal 1). a=false = canal guardado porém inativo.';
comment on column public.sim_bases.ordem  is 'Ordem de exibição no seletor de músicas dos simuladores.';

create index if not exists sim_bases_ativo_ordem_idx on public.sim_bases (ativo, ordem);

-- ---------------------------------------------------------------
-- RLS: leitura pública (anon) das bases ATIVAS — os simuladores
-- fazem fetch sem login, de dentro de um iframe sandbox. Escrita
-- (INSERT/UPDATE/DELETE) fica só para admin: as rotas /api/admin/*
-- usam a service_role, que ignora RLS. Sem policy de escrita para
-- anon/authenticated => escrita negada por padrão.
-- ---------------------------------------------------------------
alter table public.sim_bases enable row level security;

drop policy if exists "Bases ativas são públicas" on public.sim_bases;
create policy "Bases ativas são públicas"
  on public.sim_bases for select
  using (ativo = true);

drop policy if exists "Admin gerencia bases" on public.sim_bases;
create policy "Admin gerencia bases"
  on public.sim_bases for all
  using (public.is_admin());

-- ---------------------------------------------------------------
-- SEED — as 6 músicas atualmente hard-coded em yamaha-cl5-real.html,
-- copiadas VERBATIM (mesmos nomes/cores/arquivos/pan/hpf) para não
-- regredir nada. ON CONFLICT (folder) mantém idempotência.
-- ---------------------------------------------------------------
insert into public.sim_bases (label, folder, ordem, ativo, stems) values
  ('Pagodão — Tá Sozinha', 'mix-pagodao-tasozinha', 0, true, '[{"n":"Bumbo","c":"#e0483f","f":"BB.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"CX.mp3","p":0,"h":true},{"n":"Surdo 1","c":"#f4a02a","f":"SD_1.mp3","p":-8,"h":false},{"n":"Surdo 2","c":"#eab308","f":"SD_2.mp3","p":8,"h":false},{"n":"Chimbal","c":"#84cc16","f":"HH.mp3","p":-15,"h":true},{"n":"Repique","c":"#3ad07a","f":"REP.mp3","p":12,"h":true},{"n":"Rototom","c":"#14b8a6","f":"ROTANTAN.mp3","p":-10,"h":true},{"n":"Timbau","c":"#39c0e6","f":"TIMBAL.mp3","p":10,"h":true},{"n":"Tom 1","c":"#3b82f6","f":"TOM1.mp3","p":-6,"h":true},{"n":"Tom 2","c":"#6366f1","f":"TOM2.mp3","p":0,"h":true},{"n":"Tom 3","c":"#8b5cf6","f":"TOM3.mp3","p":6,"h":true},{"n":"Conga Hi","c":"#a855f7","f":"CONGA_HI.mp3","p":18,"h":true},{"n":"Conga Low","c":"#c084fc","f":"CONGA_LOW.mp3","p":-18,"h":true},{"n":"Baixo","c":"#3ad07a","f":"BASS-02.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"GT-03.mp3","p":-20,"h":true},{"n":"Teclado 1","c":"#6366f1","f":"KEY_1-04.mp3","p":15,"h":false},{"n":"Teclado 2","c":"#818cf8","f":"KEY_2-03.mp3","p":-15,"h":false}]'::jsonb),
  ('Forró — Thullio (c/ voz)', 'mix-forro-thullio', 1, true, '[{"n":"Bumbo","c":"#e0483f","f":"1-KICK-glued.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"2-CX-glued.mp3","p":0,"h":true},{"n":"Esteira","c":"#f4a02a","f":"3-ESTEIRA-glued.mp3","p":-10,"h":true},{"n":"Caixa FX","c":"#eab308","f":"4-CX_FX-glued.mp3","p":10,"h":true},{"n":"Chimbal","c":"#84cc16","f":"5-HH-glued.mp3","p":-14,"h":true},{"n":"Rototom","c":"#3ad07a","f":"6-RTT6-glued.mp3","p":-8,"h":true},{"n":"Tom 8","c":"#14b8a6","f":"7-TOM_8-glued.mp3","p":-6,"h":true},{"n":"Tom 10","c":"#39c0e6","f":"8-TOM_10-glued.mp3","p":0,"h":true},{"n":"Tom 12","c":"#3b82f6","f":"9-TOM_12-glued.mp3","p":6,"h":true},{"n":"Surdo 14","c":"#6366f1","f":"10-SD14-glued.mp3","p":-12,"h":false},{"n":"Surdo 16","c":"#8b5cf6","f":"11-SD_16-glued.mp3","p":12,"h":false},{"n":"OH L","c":"#a855f7","f":"12-OVER_L-glued.mp3","p":-30,"h":true},{"n":"OH R","c":"#c084fc","f":"13-OVER_R-glued.mp3","p":30,"h":true},{"n":"Repique","c":"#ec4899","f":"14-RPK-glued.mp3","p":16,"h":true},{"n":"Baixo","c":"#3ad07a","f":"15-BAIXO-glued.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"16-GUITA-glued.mp3","p":-22,"h":true},{"n":"Sanfona L","c":"#6366f1","f":"17-SANF_L-glued.mp3","p":-18,"h":true},{"n":"Sanfona R","c":"#818cf8","f":"18-SANF_R-glued.mp3","p":18,"h":true},{"n":"Sanfona Solo","c":"#a855f7","f":"19-SAN_SOLO-glued.mp3","p":0,"h":true},{"n":"Voz (Thullio)","c":"#ec4899","f":"20-THULLIO-190905_1154-glued-01.mp3","p":0,"h":true}]'::jsonb),
  ('Avineh Vinny (c/ voz)', 'mix-avineh-3minutos', 2, true, '[{"n":"Bumbo","c":"#e0483f","f":"01_Bb_01.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"02_Cx_01.mp3","p":0,"h":true},{"n":"Caixa 2","c":"#fb923c","f":"03_Cx2_01.mp3","p":4,"h":true},{"n":"Chimbal","c":"#84cc16","f":"04_Ch_01.mp3","p":-14,"h":true},{"n":"Tom 8","c":"#eab308","f":"05_T8_01.mp3","p":-8,"h":true},{"n":"Tom 10","c":"#3ad07a","f":"06_T10_01.mp3","p":0,"h":true},{"n":"Tom 12","c":"#14b8a6","f":"07_T12_01.mp3","p":8,"h":true},{"n":"Surdo 14","c":"#39c0e6","f":"08_Sd14_01.mp3","p":-6,"h":false},{"n":"Surdo 16","c":"#3b82f6","f":"09_Sd16_01.mp3","p":6,"h":false},{"n":"OH L","c":"#6366f1","f":"10_Ov_01.mp3","p":-28,"h":true},{"n":"OH R","c":"#818cf8","f":"11_Ov_01.mp3","p":28,"h":true},{"n":"Quica","c":"#8b5cf6","f":"12_Qt_01.mp3","p":-16,"h":true},{"n":"Conga","c":"#a855f7","f":"13_Cg_01.mp3","p":16,"h":true},{"n":"Timbau","c":"#c084fc","f":"14_Tb_01.mp3","p":12,"h":true},{"n":"Repique","c":"#d946ef","f":"15_Rp_01.mp3","p":-12,"h":true},{"n":"Baixo","c":"#3ad07a","f":"17_Bx_01.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"18_Gt_01.mp3","p":-20,"h":true},{"n":"Teclado","c":"#6366f1","f":"19_KeyMono_01.mp3","p":0,"h":false},{"n":"Violão","c":"#f4a02a","f":"24_Ac_01.mp3","p":-10,"h":true},{"n":"Sax","c":"#fbbf24","f":"25_Sx_01.mp3","p":10,"h":true},{"n":"Vocais L","c":"#ec4899","f":"22_VsL_01.mp3","p":-16,"h":true},{"n":"Vocais R","c":"#f472b6","f":"23_VsR_01.mp3","p":16,"h":true},{"n":"Voz","c":"#f43f5e","f":"28_Vz_01.mp3","p":0,"h":true},{"n":"Backing","c":"#fb7185","f":"29_Bk_01.mp3","p":-10,"h":true}]'::jsonb),
  ('Samvibe — Roger (c/ voz)', 'mix-samvibe', 3, true, '[{"n":"Bumbo","c":"#e0483f","f":"BB.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"CX.mp3","p":0,"h":true},{"n":"Surdo","c":"#f4a02a","f":"SD.mp3","p":-6,"h":false},{"n":"Chimbal","c":"#84cc16","f":"HIHAT.mp3","p":-14,"h":true},{"n":"Pandeiro","c":"#eab308","f":"PANDEIRO.mp3","p":14,"h":true},{"n":"Tom 1","c":"#3ad07a","f":"TOM1.mp3","p":-8,"h":true},{"n":"Tom 2","c":"#14b8a6","f":"TOM2.mp3","p":0,"h":true},{"n":"Tom 3","c":"#39c0e6","f":"TOM3.mp3","p":8,"h":true},{"n":"Conga 1","c":"#3b82f6","f":"CG1.mp3","p":-16,"h":true},{"n":"Conga 2","c":"#6366f1","f":"CG2.mp3","p":16,"h":true},{"n":"Timbau","c":"#8b5cf6","f":"TIMBAL.mp3","p":12,"h":true},{"n":"OH L","c":"#a855f7","f":"OVER_L.mp3","p":-28,"h":true},{"n":"OH R","c":"#c084fc","f":"OVER_R.mp3","p":28,"h":true},{"n":"Baixo","c":"#3ad07a","f":"BASS.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"GUIT.mp3","p":-20,"h":true},{"n":"Violão","c":"#f4a02a","f":"VIOLAO.mp3","p":20,"h":true},{"n":"Teclado","c":"#6366f1","f":"KEY1.mp3","p":-10,"h":false},{"n":"Sampler","c":"#94a3b8","f":"SAMPLER.mp3","p":10,"h":true},{"n":"Voz (Roger)","c":"#ec4899","f":"roger.mp3","p":0,"h":true}]'::jsonb),
  ('Vaneirão — Dany (c/ voz)', 'mix-vaneirao', 4, true, '[{"n":"Bumbo","c":"#e0483f","f":"BB.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"CX.mp3","p":0,"h":true},{"n":"Chimbal","c":"#84cc16","f":"HH.mp3","p":-14,"h":true},{"n":"Repique","c":"#eab308","f":"REP.mp3","p":14,"h":true},{"n":"Tom 1","c":"#3ad07a","f":"TOM1.mp3","p":-8,"h":true},{"n":"Tom 2","c":"#14b8a6","f":"TOM2.mp3","p":-3,"h":true},{"n":"Tom 3","c":"#39c0e6","f":"TOM3.mp3","p":3,"h":true},{"n":"Tom 4","c":"#3b82f6","f":"TOM4.mp3","p":8,"h":true},{"n":"Conga Hi","c":"#6366f1","f":"CONGA_HI.mp3","p":-16,"h":true},{"n":"Conga Low","c":"#8b5cf6","f":"CONGA_LOW.mp3","p":16,"h":true},{"n":"Baixo","c":"#3ad07a","f":"BASS-01.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"GT.mp3","p":-20,"h":true},{"n":"Violão","c":"#f4a02a","f":"AC.mp3","p":20,"h":true},{"n":"Voz (Dany)","c":"#ec4899","f":"DANY.mp3","p":0,"h":true}]'::jsonb),
  ('Forró Pra Recordar (c/ voz)', 'mix-forro-recordar', 5, true, '[{"n":"Bumbo","c":"#e0483f","f":"1-BB.mp3","p":0,"h":false},{"n":"Caixa","c":"#f97316","f":"2-CX.mp3","p":0,"h":true},{"n":"Chimbal","c":"#84cc16","f":"3-HH.mp3","p":-14,"h":true},{"n":"Tom 1","c":"#eab308","f":"4-TOM1.mp3","p":-8,"h":true},{"n":"Tom 2","c":"#3ad07a","f":"5-TOM2.mp3","p":8,"h":true},{"n":"Surdo","c":"#14b8a6","f":"6-SD.mp3","p":-6,"h":false},{"n":"Conga 1","c":"#39c0e6","f":"7-CG1.mp3","p":-16,"h":true},{"n":"Conga 2","c":"#3b82f6","f":"8-CG2.mp3","p":16,"h":true},{"n":"Baixo","c":"#3ad07a","f":"9-BASS.mp3","p":0,"h":false},{"n":"Guitarra","c":"#14b8a6","f":"10-GT.mp3","p":-20,"h":true},{"n":"Sanfona","c":"#f4a02a","f":"11-AC.mp3","p":20,"h":true},{"n":"Teclado","c":"#6366f1","f":"12-KEY.mp3","p":-10,"h":false},{"n":"Sax","c":"#fbbf24","f":"13-SAX.mp3","p":10,"h":true},{"n":"Voz","c":"#ec4899","f":"14-VOZ.mp3","p":0,"h":true}]'::jsonb)
on conflict (folder) do update
  set label = excluded.label,
      ordem = excluded.ordem,
      stems = excluded.stems;

commit;
