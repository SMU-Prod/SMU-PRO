// Adiciona a 2ª aula do módulo DSP: dbx DriveRack PA2. Regra 5: id via idAula() + conferirFaixa().
import fs from "node:fs";
import crypto from "node:crypto";
import { faixa, idModulo, idAula, conferirFaixa } from "../_REGISTRO-IDS.mjs";

const SVC = fs.readFileSync("C:/Users/SMUSTUDIO/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey", "utf8").trim();
const BASE = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: "Bearer " + SVC, "Content-Type": "application/json" };
const ROOT = "D:/Show smu producoes/SMU-PRO";

const F = faixa("pleno-som-dsp");
const MOD_ID = idModulo(F, 1);
const AULA_260 = idAula(F, 1, 3);        // 2ª aula do módulo
conferirFaixa(F, [MOD_ID, AULA_260]);
console.log("faixa OK | aula PA2:", AULA_260);

const conteudo = fs.readFileSync(ROOT + "/cursos-novos/pleno-som-dsp/aula-260.conteudo.html", "utf8");
const simHtml = fs.readFileSync(ROOT + "/simuladores/som/dbx-driverack260-real.html", "utf8");

async function upsert(t, row) {
  const r = await fetch(`${BASE}/${t}`, { method: "POST", headers: { ...H, Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify(row) });
  if (!r.ok) throw new Error(`${t} ${r.status}: ${await r.text()}`);
}

await upsert("lessons", {
  id: AULA_260, module_id: MOD_ID, ordem: 3, tipo: "texto",
  titulo: "dbx DriveRack 260 — o clássico, crossover com Bessel (simulador fiel)",
  descricao: "O gerenciador de sistema classico da dbx: 2x6, 48 kHz, crossover Bessel/Butterworth/Linkwitz-Riley e GEQ 28 bandas.",
  conteudo_rico: conteudo, duracao_min: 20, tem_quiz: false, preview_gratis: false,
});
console.log("aula PA2 criada (ordem 2)");

const ex = await (await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_260}&select=id`, { headers: H })).json();
const anim = {
  lesson_id: AULA_260, tipo: "interactive", status: "ready", model: "handcrafted-interactive",
  custo_usd: 0, urls: [{ html: simHtml }],
  roteiro: { titulo: "dbx DriveRack 260 (simulador fiel)", cenas: [], metadata: { fabricante: "dbx", modelo: "DriveRack 260", tipo: "processador de sistema", fonte: "Manual oficial 260 5059585-A (o software DriveWare pede hardware)." } },
};
if (ex.length) {
  const r = await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_260}`, { method: "PATCH", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify(anim) });
  if (!r.ok) throw new Error("anim PATCH " + await r.text());
  console.log("animação atualizada");
} else {
  const r = await fetch(`${BASE}/ai_animations`, { method: "POST", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify({ id: crypto.randomUUID(), ...anim }) });
  if (!r.ok) throw new Error("anim POST " + await r.text());
  console.log("animação criada");
}

const back = await (await fetch(`${BASE}/ai_animations?lesson_id=eq.${AULA_260}&select=status,urls`, { headers: H })).json();
console.log(`conferência: status=${back[0]?.status} sim-idêntico=${back[0]?.urls[0].html.length === simHtml.length ? "SIM" : "NÃO"} (${(simHtml.length/1024).toFixed(0)}KB)`);
