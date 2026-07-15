// Anexa os SIMULADORES PROFISSIONAIS de DJ às aulas do curso "DJ" AO VIVO em produção
// (course 8febe92b-ca5e-48ce-ab73-0e672fadd3c0, slug "dj"). IDs de aula fixos (sem matching frágil).
//   node cursos-novos/pleno-dj/apply-rest.mjs          (aplica)
//   node cursos-novos/pleno-dj/apply-rest.mjs --dry    (só valida arquivos e mostra o plano)
// custo_usd SEMPRE 0 (null derruba o player — bug conhecido dos sims de luz).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const SIMDIR = path.join(ROOT, "simuladores", "dj");
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

// aula (id real em produção) -> simulador
const MAP = [
  { lesson: "5d799cc9-d984-4339-85a6-fd51a9f2f48e", aula: "2.1 Controladoras, toca-discos, mixers e CDJs",
    file: "pioneer-cdj2000-djm900-real.html", titulo: "Cabine clássica — 2× CDJ-2000NXS2 + DJM-900NXS2",
    sub: "Conheça na prática a cabine mais comum do mundo: hot cues em coluna com bancos e SOUND COLOR FX no knob COLOR. Complete as 7 missões.",
    dica: "O DJM-900NXS2 é o mixer que você mais vai encontrar em clube. Decore a ordem do canal: TRIM → EQ → COLOR → CUE → fader.",
    dest: ["CDJ-2000NXS2: hot cues A-D/E-H", "DJM-900NXS2: SOUND COLOR FX", "Decks nos canais 2 e 3", "Áudio real: beatmatch de verdade"] },
  { lesson: "88359470-ce05-47f9-8acd-712cfd32d28a", aula: "2.4 Setup completo para iniciantes",
    file: "pioneer-xdj-rx2-real.html", titulo: "Pioneer XDJ-RX2 — All-in-One",
    sub: "O all-in-one completo: 2 decks + mixer + tela, tudo funcional. 4 modos de pad (HOT CUE/BEAT LOOP/SLIP/BEAT JUMP), SOUND COLOR FX, BEAT FX e scratch no jog. Complete as 7 missões.",
    dica: "Treinar no all-in-one constrói a mesma memória muscular da cabine profissional — só muda a distância entre as mãos.",
    dest: ["Chassi e serigrafia fiéis ao XDJ-RX2", "4 modos de pad reais + SOUND COLOR FX", "Scratch no jog + 6 BEAT FX", "Beatmatch real: BPM + fase"] },
  { lesson: "46cdc703-f813-480f-a9f8-b97c32e4805e", aula: "4.1 Operação dos equipamentos e configuração do setup",
    file: "pioneer-djm-v10-real.html", titulo: "Cabine 6 canais — 2× CDJ-3000 + DJM-V10",
    sub: "Opere um mixer profissional de 6 canais: EQ de 4 bandas, FILTER e SEND por canal e o MASTER ISOLATOR que esculpe o som da casa.",
    dica: "Gain staging primeiro: TRIM até o VU bater no amarelo nos picos, nos DOIS canais, antes de qualquer mixagem.",
    dest: ["6 canais (decks no 3 e 4)", "EQ de 4 bandas por canal", "SEND de FX com assign", "MASTER ISOLATOR real"] },
  { lesson: "79bb3e24-0745-4789-a64b-941307bbc314", aula: "4.2 Beatmatching: alinhando as batidas",
    file: "pioneer-cdj-djm-real.html", titulo: "Cabine de DJ — 2× CDJ-3000 + DJM-A9",
    sub: "Beatmatch de verdade, com áudio: iguale o BPM pelo tempo fader e alinhe a fase pela jogwheel até a barra ficar verde.",
    dica: "Dois bumbos alinhados soam como um só. Se soar 'galopado', a fase está fora — corrija na jogwheel, não no tempo.",
    dest: ["Δ BPM e barra de FASE em tempo real", "Tempo fader fiel (topo = −)", "Jogwheel = nudge de fase", "Pré-escuta no fone (CUE/PFL)"] },
  { lesson: "127588cc-7f55-4ba2-9904-7d85eedb7d8a", aula: "5.1 Mixagem básica: transições suaves",
    file: "pioneer-cdj-djm-real.html", titulo: "Cabine de DJ — 2× CDJ-3000 + DJM-A9 (virada limpa)",
    sub: "Pratique a virada limpa: pré-escute no fone, case as batidas e faça o bass swap — corte o grave de uma música e abra o da outra.",
    dica: "Regra de ouro: só UMA música é dona do grave. Corte o LOW antes de subir o fader da música que entra.",
    dest: ["Troca de graves (bass swap)", "EQ 3 bandas + color filter", "Crossfader e channel faders", "BEAT FX no momento certo"] },
  { lesson: "c29e42f1-f1f4-43ac-bbe2-924069713089", aula: "5.2 Construção de um set",
    file: "denon-prime4-real.html", titulo: "Denon Prime 4+ — All-in-One 4 decks",
    sub: "Construa com camadas: 4 decks e mixer de 4 canais. Faça o fluxo nos decks 1 e 2 e depois traga o deck 3 como camada extra.",
    dica: "Cada camada nova ocupa espaço: corte os graves das camadas secundárias. Deck extra é ponte, não competição.",
    dest: ["4 decks reais (toggle 1/3 e 2/4)", "Mixer 4 canais Engine DJ", "Tela com as 4 waveforms", "Camadas: loop, acapella, ponte"] },
  { lesson: "1e9b1552-eda2-4ac4-b39a-4a220b470d1e", aula: "5.3 Técnicas de performance: efeitos, loops, hot cues e scratch",
    file: "turntable-scratch-real.html", titulo: "Toca-discos + Scratch — 2× Technics SL-1200MK7",
    sub: "Arranhe de verdade: arraste o prato e o som segue a mão (inclusive no reverso). Baby scratch, transform e solte no tempo.",
    dica: "O crossfader de CORTE é metade do scratch: a mão no disco faz o som, o fader escolhe o que a plateia ouve.",
    dest: ["Prato arrastável com áudio real", "Scratch para frente e reverso", "Crossfader curva de corte", "Baby, forward e transform"] },
];

function roteiro(m) {
  return {
    cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 120, destaques: m.dest, explicacao_texto: m.sub, dica_profissional: m.dica }],
    metadata: { titulo: m.titulo, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 120, abordagem_didatica: "simulador fiel com áudio real (Web Audio)" },
  };
}

(async () => {
  // valida arquivos e aulas
  const plan = [];
  for (const m of MAP) {
    const p = path.join(SIMDIR, m.file);
    if (!fs.existsSync(p)) { console.log(`✗ arquivo faltando: ${m.file}`); process.exit(1); }
    const html = fs.readFileSync(p, "utf8");
    const les = await req("GET", `/lessons?id=eq.${m.lesson}&select=id,titulo`);
    if (!les.length) { console.log(`✗ aula não encontrada em produção: ${m.lesson} (${m.aula})`); process.exit(1); }
    plan.push({ m, html, titulo: les[0].titulo });
    console.log(`✓ ${m.aula.padEnd(58)} <- ${m.file} (${(html.length / 1024).toFixed(0)} KB)`);
  }
  if (DRY) { console.log("\n[dry-run] nada gravado."); return; }

  console.log("\nGravando ai_animations…");
  for (const { m, html } of plan) {
    await req("DELETE", `/ai_animations?lesson_id=eq.${m.lesson}&tipo=eq.interactive`, null, { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{
      id: crypto.randomUUID(), lesson_id: m.lesson, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: roteiro(m), urls: [{ html }], custo_usd: 0,
    }], { Prefer: "return=minimal" });
    console.log(`  ✓ ${m.aula}`);
  }
  console.log(`\n✅ ${plan.length} simuladores profissionais anexados ao curso DJ (produção).`);
})();
