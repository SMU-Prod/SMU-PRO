// Modelo do curso PLENO — PRODUTOR (f82b5aeb). Reestruturação IN-PLACE:
// as aulas existentes são PRESERVADAS (mesmo id -> progresso/matrícula intactos),
// apenas remanejadas de módulo/ordem/título. Aulas novas entram com id EXPLÍCITO.
// Exporta COURSE, MODULES, LAYOUT e helpers. Usado por apply-rest.mjs.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { IMAGES, imgUrl } from "./images.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");

export const COURSE = "f82b5aeb-95fd-4212-a067-4bec55c0fb6d";

// ⚠️ Namespace 7a8xxxxx é EXCLUSIVO deste curso. NÃO use 72d00000-*: aquele id pertence ao
// Módulo 8 do Pleno — Vídeo (cursos-novos/pleno-video-sims/apply-pleno.mjs) e um PATCH nele
// rouba o módulo daquele curso. Antes de inventar um id de módulo, cheque colisão no banco
// (o apply-rest.mjs aborta se o id pertencer a outro curso).
export const MODULES = [
  { n:  1, id: "70490a9d-5f7f-4d28-be19-59e91f405bb9", titulo: "Módulo 1 — O Produtor Executivo: papel, perfil e mercado" },
  { n:  2, id: "22e48967-735f-485e-b1d9-971d1c3e99bf", titulo: "Módulo 2 — Pré-produção I: briefing, viabilidade e o legal" },
  { n:  3, id: "731cdd00-a84e-4302-a3f4-b8032e7d5c9b", titulo: "Módulo 3 — Os riders: técnico, camarim e transporte" },
  { n:  4, id: "7a800000-0000-4000-9000-0000000000a4", titulo: "Módulo 4 — Viagem: passagem, bagagem e o backline na estrada", novo: true },
  { n:  5, id: "37296755-a6ac-43c8-b0a2-a2a46b427baf", titulo: "Módulo 5 — Planilhas, orçamento e precificação" },
  { n:  6, id: "25d936ed-0c2b-4b15-a57c-1f5e5ef56467", titulo: "Módulo 6 — Cronogramas e o tempo" },
  { n:  7, id: "db404c27-9482-4439-bb2c-c0b040efd55a", titulo: "Módulo 7 — Equipe e fornecedores" },
  { n:  8, id: "e649b8c9-7385-4ab5-9f46-6a547c9ff1a3", titulo: "Módulo 8 — Logística e operação" },
  { n:  9, id: "7a800000-0000-4000-9000-0000000000a8", titulo: "Módulo 9 — Comunicação, documentação e nuvem", novo: true },
  { n: 10, id: "7a800000-0000-4000-9000-0000000000a9", titulo: "Módulo 10 — Pós-evento, resultado e carreira", novo: true },
];

// ⚠️ TODA aula tem `id` EXPLÍCITO — nunca derive id da POSIÇÃO no array.
// Ids posicionais (LID(index)) quebram no dia em que se insere um módulo no meio:
// os índices deslocam, o script não reconhece as aulas já criadas e DUPLICA todas elas.
// `novo:true` = aula criada por este projeto (tem .fragment.html + .quiz.json aqui).
// Sem `novo` = aula pré-existente: só remaneja (module_id/ordem/titulo/dur), texto intacto.
export const LAYOUT = [
  // ---- M1 — O Produtor Executivo
  { mod:1, id:"09fbf284-95c2-45dd-ab2f-1aeab21a2c24", titulo:"Quem é o produtor e os tipos de produção", dur:25, sim:null },
  { mod:1, id:"101dcafb-40db-4f1e-b6b1-fdb2358ecb97", titulo:"Competências do produtor: perfil profissional", dur:20, sim:null },

  // ---- M2 — Pré-produção I
  { mod:2, id:"29163c42-4b0f-44d9-89bb-6d434e22c9ab", titulo:"Briefing: o documento que dá origem ao evento", dur:30, sim:"producao/briefing-lab.html" },
  { mod:2, id:"09b1d99a-1337-4c67-85f7-c108e7c993e8", titulo:"Licenças, autorizações e documentação legal do evento", dur:30, sim:null },
  { mod:2, id:"8f16af9b-7415-4df0-9b4a-0a4642a9dd99", titulo:"Contratos e jurídico: cláusulas, direitos autorais (ECAD) e seguros", dur:32, sim:null },

  // ---- M3 — Os riders
  { mod:3, id:"2a1cb3d4-8a10-40d8-978a-2f18b82d612f", titulo:"Rider técnico: o documento técnico do artista", dur:30, sim:"producao/rider-tecnico-lab.html" },
  { mod:3, id:"72100000-0000-4000-9000-000000000007", novo:true, frag:"aula-rider-camarim",    titulo:"Rider de camarim: hospitality é contrato, não gentileza", dur:30, sim:"producao/rider-camarim-lab.html" },
  { mod:3, id:"72100000-0000-4000-9000-000000000008", novo:true, frag:"aula-rider-transporte", titulo:"Rider de transporte e hospedagem: frota, carga e jornada", dur:32, sim:"producao/rider-transporte-lab.html" },

  // ---- M4 — Viagem  ★ módulo novo
  { mod:4, id:"7a810000-0000-4000-9000-0000000000c1", novo:true, frag:"aula-aviao-ou-onibus",   titulo:"Avião ou ônibus? A conta que decide", dur:32, sim:"producao/aviao-ou-onibus.html" },
  { mod:4, id:"7a810000-0000-4000-9000-0000000000c2", novo:true, frag:"aula-bagagem",           titulo:"Bagagem: franquia, excesso e como dividir para gastar menos", dur:34, sim:"producao/bagagem-comitiva.html" },
  { mod:4, id:"7a810000-0000-4000-9000-0000000000c3", novo:true, frag:"aula-checkin-remarcacao",titulo:"Check-in, no-show e remarcação: como não perder dinheiro", dur:32, sim:"producao/checkin-remarcacao.html" },
  { mod:4, id:"7a810000-0000-4000-9000-0000000000c4", novo:true, frag:"aula-docs-backline",     titulo:"Documentos para viajar com o backline", dur:34, sim:"producao/docs-backline.html" },

  // ---- M5 — Planilhas, orçamento e precificação
  { mod:5, id:"9fed4ee2-09df-4046-b532-63eb662c232f", titulo:"Orçamento do evento: como montar a planilha", dur:35, sim:"producao/planilha-orcamento.html" },
  { mod:5, id:"0785fc6b-4b6a-4d24-9784-e514e35c20a7", titulo:"Orçamento profissional: estrutura de custos, margem e contingência", dur:30, sim:"producao/margem-precificacao.html" },
  { mod:5, id:"72100000-0000-4000-9000-000000000011", novo:true, frag:"aula-planilha-pratica", titulo:"A planilha na prática: fórmulas, travas e conferência", dur:32, sim:"producao/planilha-auditoria.html" },
  { mod:5, id:"641b86e1-b247-498a-beef-58c1414720a5", titulo:"Documentos financeiros: despesas, pagamentos e contratações", dur:30, sim:null },
  { mod:5, id:"2c593baf-d58a-4419-99cd-63a7b8869230", titulo:"Precificação do serviço: 'Artista = Empresa' e padronização", dur:30, sim:null },

  // ---- M6 — Cronogramas e o tempo
  { mod:6, id:"fb0b730f-f363-440d-8370-0843d4ff9e39", titulo:"Roteiro logístico do evento", dur:30, sim:null },
  { mod:6, id:"26fbb910-2570-4488-a426-fea6346108e3", titulo:"Cronogramas de equipe técnica, artística e de viagem", dur:30, sim:null },
  { mod:6, id:"fe3280de-b423-4362-b9ad-dd4a9108f3ef", titulo:"Cronograma e gestão de tempo: timeline, caminho crítico e marcos", dur:30, sim:"producao/caminho-critico.html" },
  { mod:6, id:"72100000-0000-4000-9000-000000000017", novo:true, frag:"aula-run-of-show", titulo:"Run of Show: o minuto a minuto do dia", dur:33, sim:"producao/run-of-show-pro.html" },

  // ---- M7 — Equipe e fornecedores
  { mod:7, id:"f08dda32-5363-4765-9403-4609e9e0df99", titulo:"Montando a equipe: funções, contratação e escala", dur:30, sim:"producao/escala-equipe.html" },
  { mod:7, id:"1750a5eb-ff6d-4331-9f46-18cff4b7b234", titulo:"Equipe e fornecedores: contratação, briefing, escala e hierarquia", dur:31, sim:null },
  { mod:7, id:"64e0c14e-bdab-4fb9-b92b-9a1c5a998c9c", titulo:"Documentação completa: rider, stage plan, ordem de serviço e run of show", dur:33, sim:null },

  // ---- M8 — Logística e operação
  { mod:8, id:"4fbaf91c-4e38-45ae-868e-ca005b97d8ff", titulo:"Assegurar a logística e acompanhar a montagem", dur:30, sim:"producao/logistica-carga.html" },
  { mod:8, id:"0bfc9bb3-2b3a-4a66-b74d-dd6ddf341a0c", titulo:"Logística e operação: montagem, credenciamento, segurança e contingência", dur:32, sim:"producao/credenciamento-zonas.html" },
  { mod:8, id:"3fb82069-5851-4045-bdd9-b48967830086", titulo:"Gerenciar a execução do evento", dur:30, sim:null },

  // ---- M9 — Comunicação, documentação e nuvem
  { mod:9, id:"a697a3a7-5a0e-4a4c-bae8-809b00b15057", titulo:"Documentação, organização digital e comunicação", dur:30, sim:"producao/nuvem-organizacao.html" },
  { mod:9, id:"72100000-0000-4000-9000-000000000025", novo:true, frag:"aula-comunicacao", titulo:"Comunicação profissional: canal, rastro e cadeia de comando", dur:30, sim:"producao/comunicacao-lab.html" },

  // ---- M10 — Pós-evento, resultado e carreira
  { mod:10, id:"b2106b82-473d-4f80-a279-a1fc9994d6d3", titulo:"Desmontagem e fechamento financeiro pós-evento", dur:30, sim:null },
  { mod:10, id:"b7a52235-2e91-4450-b380-332155cfcec6", titulo:"Financeiro e pós-evento: settlement, conciliação, relatório e KPIs", dur:31, sim:"producao/settlement-lab.html" },
  { mod:10, id:"3311b215-1ced-43f8-8ba0-c0fb07643bf2", titulo:"Relatório pós-evento: avaliar e aprender", dur:25, sim:null },
  { mod:10, id:"2c094cbd-3318-4564-aeeb-0526e76eec29", titulo:"Jargões, o produtor sênior e visão de carreira", dur:20, sim:null },
];

// ---- helpers ----
const imgBySlug = Object.fromEntries(IMAGES.map(i => [i.slug, i]));
/** Embute a figura. Imagem `pendente` (sem crédito no Runway) => string vazia:
 *  a aula sai correta, só sem foto. Nada de placeholder quebrado. */
export function figure(slug){
  const im = imgBySlug[slug];
  if(!im || im.pendente) return "";
  return `<figure style="margin:18px 0"><img src="${imgUrl(slug)}" alt="${(im.alt||"").replace(/"/g,'&quot;')}" style="width:100%;border-radius:10px;display:block"/>`+
         `<figcaption style="font-size:13px;color:#94a3b8;margin-top:6px;line-height:1.4">${im.caption||""}</figcaption></figure>`;
}
export function readFrag(frag){
  let html = fs.readFileSync(path.join(HERE, frag + ".fragment.html"), "utf8");
  html = html.replace(/\{\{IMG:([a-z0-9\-]+)\}\}\n?/gi, (_,slug)=>figure(slug));
  return html;
}
export function readQuiz(frag){
  const p = path.join(HERE, frag + ".quiz.json");
  if(!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
export function readSim(rel){
  if(!rel) return null;
  return fs.readFileSync(path.join(SIM_DIR, rel), "utf8");
}
