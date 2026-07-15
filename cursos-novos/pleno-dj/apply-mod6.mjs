// Anexa os 3 labs de decisão às aulas do módulo 6 (Profissionalização) do curso "DJ" ao vivo.
// SEM checklist de gig (curso de produção) e SEM cachê/valores (decisão do dono).
//   node cursos-novos/pleno-dj/apply-mod6.mjs [--dry]
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
  { lesson: "3f38d1ba-8882-4001-b157-2718903479f3", aula: "6.1 Marketing pessoal e identidade de DJ",
    file: "dj-marca-lab.html", titulo: "Construtor de Marca do DJ",
    sub: "6 decisões reais de carreira: nome artístico buscável, nicho, bio com fatos, press kit (EPK), consistência nas redes e o demo mix. Cada erro explica o porquê.",
    dica: "Marca é o que dizem de você quando você não está na sala.",
    dest: ["Nome artístico: buscável e sem conflito", "Nicho e bio profissional", "EPK: mix 30min + fotos + release", "Consistência nas redes e demo com identidade"] },
  { lesson: "d0e2c0f9-6a15-4568-ac1d-f729e1490c09", aula: "6.2 Conseguindo gigs e relacionamento profissional",
    file: "dj-contratante-lab.html", titulo: "Primeira Conversa com o Contratante",
    sub: "Simule a conversa que fecha (ou perde) a gig: resposta rápida, as perguntas técnicas certas (equipamento da cabine! horário! público!), confirmação por escrito e o pós-gig que vira residência.",
    dica: "A gig se ganha na conversa — e a próxima se ganha no pós desta.",
    dest: ["Resposta profissional ao primeiro contato", "A pergunta do equipamento da cabine", "Set, horário e público amarrados", "Confirmação por escrito + pós-gig"] },
  { lesson: "786c471e-c544-4b1d-8dce-ecb26a6396ff", aula: "6.3 Ética, cuidados e evolução contínua",
    file: "dj-etica-lab.html", titulo: "Ética na Cabine — Go/No-Go",
    sub: "7 situações reais de cabine: o pedido no auge do set, bebida, equipamento da casa com defeito, colega atrasado, imagem do público, saúde auditiva e o plano B dos 2 pens.",
    dica: "Reputação leva anos para construir e uma noite para perder.",
    dest: ["Pedidos: recusar com simpatia", "Bebida e foco: você está trabalhando", "Defeito da casa: avisar, nunca esconder", "Ouvido protegido + 2 pens sempre"] },
];

function roteiro(m) {
  return { cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 120, destaques: m.dest, explicacao_texto: m.sub, dica_profissional: m.dica }],
    metadata: { titulo: m.titulo, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 120, abordagem_didatica: "simulador de decisão profissional (cenários reais)" } };
}

(async () => {
  const plan = [];
  for (const m of MAP) {
    const p = path.join(ROOT, "simuladores/dj", m.file);
    if (!fs.existsSync(p)) { console.log("✗ falta " + m.file); process.exit(1); }
    const les = await req("GET", `/lessons?id=eq.${m.lesson}&select=id,titulo`);
    if (!les.length) { console.log("✗ aula não encontrada: " + m.aula); process.exit(1); }
    plan.push({ m, html: fs.readFileSync(p, "utf8") });
    console.log(`✓ ${m.aula.padEnd(52)} <- ${m.file} (${(fs.statSync(p).size / 1024).toFixed(0)} KB)`);
  }
  if (DRY) { console.log("[dry-run]"); return; }
  for (const { m, html } of plan) {
    await req("DELETE", `/ai_animations?lesson_id=eq.${m.lesson}&tipo=eq.interactive`, null, { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: m.lesson, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: roteiro(m), urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    console.log(`  ✓ publicado: ${m.aula}`);
  }
  console.log("\n✅ Módulo 6 completo: 3 labs de profissionalização no ar.");
})();
