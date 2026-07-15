// Anexa os GAMES do EFEITO BÁSICO às aulas (tabela ai_animations, tipo=interactive).
//   node cursos-novos/efeito-games/apply-rest.mjs           (aplica)
//   node cursos-novos/efeito-games/apply-rest.mjs --dry     (só mostra o mapeamento)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const SIMDIR = path.join(ROOT, "simuladores", "efeito-basico");
const DRY = process.argv.includes("--dry");

const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/87b43c42-b06b-409a-a321-75e301124bef/scratchpad/.svckey", "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
const COURSE = "95993270-1a7a-4c64-ab1c-29a8db62b33f"; // efeito-basico

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 300)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}
const q = (p) => req("GET", p);

// slug do game -> {frag do título da aula, título, subtítulo, dica}
const MAP = [
  { slug: "palco-de-efeitos", frag: "o que é um efeito", titulo: "Palco de Efeitos", sub: "Experimente cada família de efeito e sinta o impacto no palco.", dica: "Efeito bom é o disparado na hora certa — pense sempre no momento do show." },
  { slug: "familias-de-efeitos", frag: "famílias de efeitos", titulo: "Classifique as Famílias", sub: "Leia o efeito e toque na família certa; acertou, ele acontece.", dica: "Atmosférico dá volume ao ar; impacto é o susto; pirotécnico é fogo; cênico é festa." },
  { slug: "cadeia-de-disparo", frag: "como um efeito é acionado", titulo: "Cadeia de Disparo", sub: "Veja o sinal ir do botão GO à mesa e ao equipamento.", dica: "O GO só dispara com o sistema ARMADO — segurança primeiro." },
  { slug: "maquina-de-fumaca", frag: "máquina de fumaça", titulo: "Máquina de Fumaça", sub: "Ligue, aqueça até PRONTA e solte a fumaça.", dica: "Soltar com fluido frio só cospe gotas e suja o palco. Espere aquecer." },
  { slug: "hazer-e-feixes", frag: "hazer", titulo: "Hazer + Feixes", sub: "Suba a névoa e veja os feixes de luz surgirem no ar.", dica: "Haze demais deixa o palco 'leitoso' e apaga o contraste. Menos é mais." },
  { slug: "low-fog", frag: "fumaça baixa", titulo: "Fumaça Baixa (Low Fog)", sub: "Forme o tapete de nuvem que fica no chão.", dica: "Fluido resfriado deixa a fumaça pesada — por isso ela não sobe." },
  { slug: "co2-jet", frag: "jato de co", titulo: "Jato de CO₂ — Timing", sub: "Ajuste o jato e dispare exatamente no DROP.", dica: "CO₂ é timing puro: fora do tempo, quebra o clima em vez de construir." },
  { slug: "faisca-fria", frag: "faísca fria", titulo: "Faísca Fria (Cold Spark)", sub: "Posicione duas fontes para emoldurar o artista.", dica: "Fria ao toque e sem pólvora — por isso entra em casamento e entrada de artista." },
  { slug: "pirotecnia-gerb-airburst", frag: "pirotecnia de palco", titulo: "Pirotecnia — Protocolo", sub: "Área livre → armar → disparar. Sem protocolo, fica bloqueado.", dica: "Pirotecnia é fogo real: a ordem de segurança nunca muda." },
  { slug: "chama-flame-jet", frag: "chama", titulo: "Chama (Flame Jet)", sub: "Controle a altura da labareda e o pé-direito.", dica: "A altura da chama define o teto mínimo e o afastamento necessários." },
  { slug: "efeitos-de-celebracao", frag: "confete", titulo: "Efeitos de Celebração", sub: "Confete, serpentina, bolhas e neve fecham o show.", dica: "Efeitos de celebração são seguros — sem fogo nem pressão perigosa." },
  { slug: "distancias-seguranca", frag: "distâncias de segurança", titulo: "Distâncias de Segurança", sub: "Posicione os efeitos com a zona de exclusão livre do público.", dica: "Cada efeito tem seu raio: nenhuma zona pode tocar a plateia." },
  { slug: "operador-go-nogo", frag: "quem pode operar", titulo: "Plantão do Operador — Go/No-Go", sub: "Decida disparar ou bloquear em cada situação de show.", dica: "Um item crítico de segurança em falta = sempre bloquear." },
];

function roteiro(m) {
  return {
    cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 90, destaques: [], explicacao_texto: m.sub, dica_profissional: m.dica }],
    metadata: { titulo: m.titulo, gerado_por: "interactive-game-smu", total_cenas: 1, duracao_total: 90, abordagem_didatica: "game interativo (StageFX)" },
  };
}

(async () => {
  const mods = await q(`/modules?course_id=eq.${COURSE}&select=id,ordem&order=ordem`);
  const lessons = [];
  for (const mo of mods) {
    const ls = await q(`/lessons?module_id=eq.${mo.id}&select=id,titulo,ordem&order=ordem`);
    ls.forEach(l => lessons.push({ ...l, mod: mo.ordem }));
  }
  console.log(`Aulas no curso: ${lessons.length}\n`);

  const plan = [];
  for (const m of MAP) {
    const hits = lessons.filter(l => l.titulo.toLowerCase().includes(m.frag));
    if (hits.length !== 1) { console.log(`✗ "${m.slug}" -> ${hits.length} matches p/ "${m.frag}": ${hits.map(h => h.titulo).join(" | ")}`); continue; }
    const html = fs.readFileSync(path.join(SIMDIR, m.slug + ".html"), "utf8");
    plan.push({ m, lesson: hits[0], html });
    console.log(`✓ ${m.slug.padEnd(26)} -> [${hits[0].mod}.${hits[0].ordem}] ${hits[0].titulo.slice(0, 44)}  (${(html.length / 1024).toFixed(0)} KB)`);
  }
  if (plan.length !== MAP.length) { console.log(`\n⚠ ${MAP.length - plan.length} mapeamentos falharam — corrija antes de aplicar.`); process.exit(1); }
  if (DRY) { console.log("\n[dry-run] nada gravado."); return; }

  console.log("\nGravando ai_animations…");
  for (const { m, lesson, html } of plan) {
    await req("DELETE", `/ai_animations?lesson_id=eq.${lesson.id}&tipo=eq.interactive`, null, { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{
      id: crypto.randomUUID(), lesson_id: lesson.id, tipo: "interactive", status: "ready",
      roteiro: roteiro(m), urls: [{ html }], custo_usd: 0,
    }], { Prefer: "return=minimal" });
    // garante tem_quiz não afetado; marca a aula como tendo interativo (não há coluna dedicada, o player detecta pela tabela)
    console.log(`  ✓ ${lesson.titulo.slice(0, 46)}`);
  }
  console.log(`\n✅ ${plan.length} games anexados às aulas do EFEITO BÁSICO.`);
})();
