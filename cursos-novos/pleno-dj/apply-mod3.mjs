// Anexa os 3 LABS DE MÚSICA às aulas existentes do módulo 3 (Conhecendo a Música) do curso "DJ" ao vivo.
//   node cursos-novos/pleno-dj/apply-mod3.mjs [--dry]
// Só ai_animations (DELETE+POST) — teoria/quiz das aulas ficam intactos. custo_usd=0 sempre.
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
  { lesson: "17c7b7f4-f63f-4750-8ab4-b198a9a8f613", aula: "3.1 BPM e gênero musical",
    file: "dj-bpm-genero-lab.html", titulo: "Lab de BPM e Gêneros — treine o relógio interno",
    sub: "Grooves reais de 6 gêneros (hip-hop, funk BR, house, techno, psy, D&B) e TAP TEMPO de verdade: descubra o BPM no ouvido, vença o modo desafio e monte o mapa mental gênero↔BPM.",
    dica: "O DJ escolhe a próxima música pelo tempo — decorar as faixas de BPM de cada gênero é ferramenta de trabalho.",
    dest: ["6 gêneros com groove real e luzes de tempo", "TAP tempo com medição do SEU BPM", "Modo desafio: BPM oculto aleatório", "Associação gênero ↔ faixa de BPM"] },
  { lesson: "da6e1fb2-dad0-42e6-b44d-770ab6caae8c", aula: "3.2 Estrutura de uma música para DJs",
    file: "dj-estrutura-lab.html", titulo: "Mapa da Música — estrutura, frases e ponto de mix",
    sub: "Uma faixa completa (96 compassos) tocando de verdade: intro, groove, build, drop, break e outro na timeline. Reconheça as seções de ouvido, marque o '1' das frases de 8 e ache o ponto de mix.",
    dica: "As mudanças SEMPRE caem no 1 de uma frase — quem conta 8 nunca entra no lugar errado.",
    dest: ["Timeline com as seções coloridas e cursor ao vivo", "Contador de frase de 8 tempos", "Quiz de seção com a música rodando", "Missão: marcar o ponto de mix na outro"] },
  { lesson: "b808465e-553b-4f5f-b84d-a2d3008555e1", aula: "3.3 Como analisar uma música para mixar melhor",
    file: "dj-analise-lab.html", titulo: "Lab de Análise — escolha a próxima música certa",
    sub: "A pista está tocando 124 BPM · 8A · energia 3. Pré-escute candidatas reais e escolha a próxima por harmonia (roda de Camelot), BPM (±6%), curva de energia e forma de onda (outro mixável).",
    dica: "Repertório é 50% do set: a escolha certa faz a mixagem quase sozinha.",
    dest: ["Roda de Camelot interativa (compatíveis destacados)", "Pré-escuta real de cada candidata (tom audível)", "Rodadas: harmonia, BPM, energia, forma de onda", "Leitura de intro/outro na waveform"] },
];

function roteiro(m) {
  return { cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 150, destaques: m.dest, explicacao_texto: m.sub, dica_profissional: m.dica }],
    metadata: { titulo: m.titulo, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 150, abordagem_didatica: "laboratório musical com áudio real (Web Audio)" } };
}

(async () => {
  const plan = [];
  for (const m of MAP) {
    const p = path.join(ROOT, "simuladores/dj", m.file);
    if (!fs.existsSync(p)) { console.log("✗ falta " + m.file); process.exit(1); }
    const les = await req("GET", `/lessons?id=eq.${m.lesson}&select=id,titulo`);
    if (!les.length) { console.log("✗ aula não encontrada: " + m.aula); process.exit(1); }
    plan.push({ m, html: fs.readFileSync(p, "utf8") });
    console.log(`✓ ${m.aula.padEnd(48)} <- ${m.file} (${(fs.statSync(p).size / 1024).toFixed(0)} KB)`);
  }
  if (DRY) { console.log("[dry-run]"); return; }
  for (const { m, html } of plan) {
    await req("DELETE", `/ai_animations?lesson_id=eq.${m.lesson}&tipo=eq.interactive`, null, { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: m.lesson, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: roteiro(m), urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    console.log(`  ✓ publicado: ${m.aula}`);
  }
  console.log("\n✅ Módulo 3 completo: 3 labs de música no ar.");
})();
