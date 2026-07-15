// Anexa os labs do módulo 1 (Fundamentos) do curso "DJ" ao vivo: 1.2 História e 1.4 Tipos de DJs.
//   node cursos-novos/pleno-dj/apply-mod1.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/87b43c42-b06b-409a-a321-75e301124bef/scratchpad/.svckey", "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 300)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}
const MAP = [
  { lesson: "be0ebfd5-b382-4e88-bcec-fb1be7a930d5", aula: "1.2 História do DJ",
    file: "dj-historia-lab.html", titulo: "Linha do Tempo do DJ",
    sub: "Percorra as 6 eras: Bronx anos 70 (Kool Herc e o break), as técnicas (Flash e o scratch), house/techno nos anos 80, raves e o 1º CDJ nos 90, a revolução digital e a era standalone de hoje.",
    dica: "Cada era criou uma técnica que você usa até hoje — o break virou loop, o scratch virou performance.",
    dest: ["Anos 70: Kool Herc e o merry-go-round", "Flash e Theodore: as técnicas e o scratch", "House (Chicago) e Techno (Detroit)", "Do 1º CDJ (1994) ao standalone de hoje"] },
  { lesson: "930082f0-9643-48f6-8028-d49da3009134", aula: "1.4 Tipos de DJs",
    file: "dj-tipos-lab.html", titulo: "Que DJ é esse? — perfis da profissão",
    sub: "6 cenas reais para identificar cada perfil: residente de clube, mobile/eventos, turntablist, DJ/produtor, rádio e open format — com o mercado e a habilidade-chave de cada um.",
    dica: "Não existe UM jeito de ser DJ — os perfis se combinam ao longo da carreira.",
    dest: ["Residente: a escola do clube", "Mobile/eventos: o maior mercado", "Turntablist e DJ/produtor", "Rádio e open format"] },
];
function roteiro(m) {
  return { cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 120, destaques: m.dest, explicacao_texto: m.sub, dica_profissional: m.dica }],
    metadata: { titulo: m.titulo, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 120, abordagem_didatica: "simulador de decisão (cultura e perfis)" } };
}
(async () => {
  const plan = [];
  for (const m of MAP) {
    const p = path.join(ROOT, "simuladores/dj", m.file);
    if (!fs.existsSync(p)) { console.log("✗ falta " + m.file); process.exit(1); }
    const les = await req("GET", `/lessons?id=eq.${m.lesson}&select=id,titulo`);
    if (!les.length) { console.log("✗ aula não encontrada: " + m.aula); process.exit(1); }
    plan.push({ m, html: fs.readFileSync(p, "utf8") });
    console.log(`✓ ${m.aula.padEnd(24)} <- ${m.file}`);
  }
  if (DRY) { console.log("[dry-run]"); return; }
  for (const { m, html } of plan) {
    await req("DELETE", `/ai_animations?lesson_id=eq.${m.lesson}&tipo=eq.interactive`, null, { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: m.lesson, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: roteiro(m), urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    console.log(`  ✓ publicado: ${m.aula}`);
  }
  console.log("\n✅ Módulo 1 com prática: 2 labs no ar.");
})();
