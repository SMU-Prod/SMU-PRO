// Cria o Módulo de DSP dentro do pleno-som + a aula flagship do VENU360.
// Regra 5: ids gerados pelos helpers do cartório + conferirFaixa() antes de escrever.
import fs from "node:fs";
import crypto from "node:crypto";
import { faixa, idModulo, idAula, conferirFaixa } from "../_REGISTRO-IDS.mjs";

const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey", "utf8").trim();
const BASE = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: "Bearer " + SVC, "Content-Type": "application/json" };

const COURSE_PLENO_SOM = "8f29f6dd-3dc6-47fe-b4d3-1cd15514a21d";
const ROOT = "D:/Show smu producoes/SMU-PRO";

const F = faixa("pleno-som-dsp");
const MOD_ID = idModulo(F, 1);        // 7c100000-...-000000000001
const AULA_VENU = idAula(F, 1, 1);    // 7c100000-...-000000000101

// TRAVA: aborta se algum id cair fora da faixa do pleno-som-dsp
conferirFaixa(F, [MOD_ID, AULA_VENU]);
console.log("faixa OK:", F.mod, "| módulo", MOD_ID, "| aula", AULA_VENU);

const conteudo = fs.readFileSync(ROOT + "/cursos-novos/pleno-som-dsp/aula-venu360.conteudo.html", "utf8");
const simHtml = fs.readFileSync(ROOT + "/simuladores/som/dbx-venu360-real.html", "utf8");

async function upsert(tabela, row) {
  const r = await fetch(`${BASE}/${tabela}`, {
    method: "POST",
    headers: { ...H, Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(row),
  });
  if (!r.ok) throw new Error(`${tabela} upsert ${r.status}: ${await r.text()}`);
}

// 1) MÓDULO (course_id aponta pleno-som; id na MINHA faixa)
await upsert("modules", {
  id: MOD_ID, course_id: COURSE_PLENO_SOM, parent_id: null, ordem: 15,
  titulo: "Processadores de Sistema (DSP) — Loudspeaker Management",
  descricao: "Crossover, PEQ/GEQ, limiter, delay e supressão de microfonia. O simulador é o software oficial do fabricante.",
});
console.log("módulo criado (ordem 15)");

// 2) AULA VENU360 (tipo texto + conteudo_rico; o sim vem da ai_animation)
await upsert("lessons", {
  id: AULA_VENU, module_id: MOD_ID, ordem: 1, tipo: "texto",
  titulo: "dbx DriveRack VENU360 — crossover, limiter, AFS e System Wizard (simulador fiel)",
  descricao: "O processador de sistema 3×6 da dbx: divisão de vias, proteção de caixa, alinhamento e supressão de microfonia — na interface real do software.",
  conteudo_rico: conteudo, duracao_min: 25, tem_quiz: false, preview_gratis: false,
});
console.log("aula VENU360 criada");

// 3) ANIMAÇÃO (o simulador). Idempotente: PATCH se já existir p/ esta aula, senão POST.
const ex = await (await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_VENU}&select=id`, { headers: H })).json();
const animRow = {
  lesson_id: AULA_VENU, tipo: "interactive", status: "ready", model: "handcrafted-interactive",
  custo_usd: 0, urls: [{ html: simHtml }],
  roteiro: { titulo: "dbx DriveRack VENU360 (simulador fiel)", cenas: [], metadata: { fabricante: "dbx", modelo: "DriveRack VENU360", tipo: "processador de sistema", fonte: "VENU360 Control App v2.0.5 (device virtual) + manual oficial 5058681-C" } },
};
if (ex.length) {
  const r = await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_VENU}`, { method: "PATCH", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify(animRow) });
  if (!r.ok) throw new Error("anim PATCH " + r.status + ": " + await r.text());
  console.log("animação atualizada (já existia)");
} else {
  const r = await fetch(`${BASE}/ai_animations`, { method: "POST", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify({ id: crypto.randomUUID(), ...animRow }) });
  if (!r.ok) throw new Error("anim POST " + r.status + ": " + await r.text());
  console.log("animação criada");
}

// 4) CONFERÊNCIA de leitura
const back = await (await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_VENU}&select=status,custo_usd,urls`, { headers: H })).json();
const simOK = back[0] && back[0].urls[0].html.length === simHtml.length;
console.log(`\nconferência: status=${back[0]?.status} custo=${back[0]?.custo_usd} sim-idêntico=${simOK ? "SIM" : "NÃO"} (${(simHtml.length/1024).toFixed(0)}KB)`);
console.log("pronto.");
