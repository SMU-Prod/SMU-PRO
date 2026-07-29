/* Publica um simulador de SOM (arquivo do disco) numa aula, em ai_animations.
   Cria se não existir, ATUALIZA se já existir (nunca duplica).

     node cursos-novos/som/publicar-sim-som.mjs <curso> <modulo> <aula> <arquivo> ["Título"]
     node cursos-novos/som/publicar-sim-som.mjs som-basico 1 4 som-basico-compressor-real.html "Compressor e gate"

   ⚠ custo_usd TEM de ser 0 e não null: null derruba o player (bug já visto no curso de luz).
*/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const SVC = fs.readFileSync(path.join(ROOT, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };

const [curso, mod, aula, arquivo, titulo] = process.argv.slice(2);
if (!arquivo) { console.error("uso: <curso> <modulo> <aula> <arquivo> [titulo]"); process.exit(1); }

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0, 240)}`);
  return t ? JSON.parse(t) : null;
}

const html = fs.readFileSync(path.join(ROOT, "simuladores", "som", arquivo), "utf8");
if (!/<\/html>\s*$/i.test(html.trim())) throw new Error("HTML truncado: não termina em </html>");
if (!/smu-fs/.test(html)) console.warn("⚠ sem CSS html.smu-fs — o sim não vai reagir à tela cheia");

const [c] = await req("GET", `/courses?slug=eq.${curso}&select=id`);
if (!c) throw new Error("curso não encontrado: " + curso);
const [m] = await req("GET", `/modules?course_id=eq.${c.id}&ordem=eq.${mod}&select=id`);
if (!m) throw new Error(`módulo ${mod} não encontrado`);
const [l] = await req("GET", `/lessons?module_id=eq.${m.id}&ordem=eq.${aula}&select=id,titulo`);
if (!l) throw new Error(`aula ${mod}.${aula} não encontrada`);

const corpo = {
  lesson_id: l.id, tipo: "interactive", status: "ready",
  urls: [{ html }],
  roteiro: [{ titulo: titulo || l.titulo, descricao: "Simulador interativo com áudio real." }],
  model: "smu-artesanal", custo_usd: 0,
};

const existe = await req("GET", `/ai_animations?lesson_id=eq.${l.id}&select=id`);
if (existe && existe.length) {
  await req("PATCH", `/ai_animations?id=eq.${existe[0].id}`, { ...corpo, updated_at: new Date().toISOString() });
  console.log(`✓ ATUALIZADO em "${l.titulo}" (${(html.length / 1024).toFixed(1)} KB)`);
} else {
  await req("POST", "/ai_animations", corpo);
  console.log(`✓ CRIADO em "${l.titulo}" (${(html.length / 1024).toFixed(1)} KB)`);
}
