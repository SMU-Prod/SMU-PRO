// AUDITORIA DE NOMENCLATURA DA FROTA DJ — simulador × manual oficial do fabricante.
// (CLAUDE.md regra 2 "fonte de verdade" + regra do projeto "não clonar pele de outra marca")
//
// PERGUNTA QUE ELA RESPONDE: cada rótulo que o aluno vê na tela existe no manual DA MARCA daquele
// equipamento? Isso pega dois erros que ler o próprio código não pega:
//   1. nome inventado    (ex.: "MAGVEL PRO" no DJM-V10 — não existe na Pioneer)
//   2. nome de OUTRA marca (ex.: "TRIM"/"MT" no Denon — são Pioneer; a Denon diz Channel Level/Key Lock)
//
// ⚠️ ANTES DE RODAR:  node ferramentas/pdftext.teste.mjs
// Extração incompleta INVERTE a conclusão: o manual "sem" o termo acusa de inventado o que está
// escrito nele. Já aconteceu (a impedância 32 Ω do HDJ-X10 foi apagada do curso por causa disso).
// Por segurança, esta auditoria se RECUSA a concluir quando lê menos de 5 controles de um manual.
//
// COMO BAIXAR OS MANUAIS:  node cursos-novos/pleno-dj/auditoria-nomenclatura.mjs --baixar
//
//   node cursos-novos/pleno-dj/auditoria-nomenclatura.mjs [pasta-dos-manuais]
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const BAIXAR = process.argv.includes("--baixar");
const MAN = process.argv.find(a => !a.startsWith("-") && a !== process.argv[0] && a !== process.argv[1])
  || path.join(os.tmpdir(), "smu-manuais-dj");

/* ---------- os manuais oficiais (URL = a fonte de verdade de cada marca) ---------- */
const MANUAIS = {
  "cdj3000.pdf":      "https://downloads.support.alphatheta.com/manuals/dj-players/CDJ-3000/CDJ-3000_DRI1586A_manual.pdf",
  "djm-a9.pdf":       "https://downloads.support.alphatheta.com/manuals/dj-mixers/DJM-A9/DJM-A9_DRI1785B_manual.pdf",
  "djm-v10.pdf":      "https://downloads.support.alphatheta.com/manuals/dj-mixers/DJM-V10/DJM-V10_DRI1643C_manual.pdf",
  // DRI = manual completo; DRH = quickstart (NÃO traz a lista de controles — não serve para auditar)
  "cdj-2000nxs2.pdf": "https://downloads.support.alphatheta.com/manuals/dj-players/CDJ-2000NXS2/CDJ-2000NXS2_DRI1290A_manual.pdf",
  "djm-900nxs2.pdf":  "https://downloads.support.alphatheta.com/manuals/dj-mixers/DJM-900NXS2/DJM-900NXS2_DRH1330C_quickstart-manual.pdf",
  "xdj-rx2.pdf":      "https://downloads.support.alphatheta.com/manuals/all-in-one-dj-systems/XDJ-RX2/XDJ-RX2_DRH1448A_quickstart-manual.pdf",
  "denon-prime4.pdf": "https://cdn.inmusicbrands.com/Software/ENDJ5/PRIME%204%2C%20PRIME%204%2B%2C%20PRIME%202%2C%20PRIME%20GO%2C%20PRIME%20GO%2B%2C%20SC%20LIVE%204%2C%20SC%20LIVE%202%20-%20User%20Guide%20-%20v5.0.0.pdf",
  "technics-mk7.pdf": "https://help.na.panasonic.com/wp-content/uploads/2023/02/SL1200MK7_TQBM0410_ENG_FRE.pdf",
  "mpc.pdf":          "https://cdn.inmusicbrands.com/Software/37/MPC%20Standalone%20OS%20-%20User%20Guide%20-%20v3.7.pdf",
  "sp404.pdf":        "https://static.roland.com/assets/media/pdf/SP-404MK2_v4_reference_eng02_W.pdf",
};

/* ---------- a frota: cada sim × os manuais dos equipamentos que ele reproduz ----------
   Um sim de cabine mostra PLAYER e MIXER juntos: auditar contra um manual só faz cada metade
   acusar a outra ("TRIM" do mixer aparecia como inventado no manual do CDJ). */
const FROTA = [
  { sim: "pioneer-cdj-djm-real.html",        nome: "Cabine CDJ-3000 + DJM-A9",     aula: "4.2 / 5.1", pdfs: ["cdj3000.pdf", "djm-a9.pdf"] },
  { sim: "pioneer-djm-v10-real.html",        nome: "DJM-V10 + decks CDJ-3000",     aula: "4.1",       pdfs: ["djm-v10.pdf", "cdj3000.pdf"] },
  { sim: "pioneer-cdj2000-djm900-real.html", nome: "CDJ-2000NXS2 + DJM-900NXS2",   aula: "2.1",       pdfs: ["cdj-2000nxs2.pdf", "djm-900nxs2.pdf"] },
  { sim: "pioneer-xdj-rx2-real.html",        nome: "XDJ-RX2 all-in-one",           aula: "2.4",       pdfs: ["xdj-rx2.pdf"] },
  { sim: "denon-prime4-real.html",           nome: "Denon Prime 4+",               aula: "5.2",       pdfs: ["denon-prime4.pdf"],
    outraMarca: /\b(TRIM|IN\/CUE|MASTER TEMPO|BEAT FX|SOUND COLOR)\b/ },
  { sim: "turntable-scratch-real.html",      nome: "Technics SL-1200MK7 (2×)",     aula: "5.3",       pdfs: ["technics-mk7.pdf"],
    // o battle mixer do sim é genérico (não afirma marca): seus rótulos não são auditáveis aqui
    foraDoManual: /^(TRIM|CROSSFADER|BATTLE MIXER|LOOP|BEAT|VOCAL|SUAVE|CUT|FADER|LINE|PHONO)$/,
    outraMarca: /\bTARGET\b/ },
  { sim: "akai-mpc-real.html",               nome: "Akai MPC Live II",             aula: "7.1–7.4",   pdfs: ["mpc.pdf"],
    outraMarca: /\bT\.C\.|SP-404|VINYL SIM\b/ },
  { sim: "roland-sp404-real.html",           nome: "Roland SP-404MKII",            aula: "7.5",       pdfs: ["sp404.pdf"],
    outraMarca: /\b(XPM|Q-LINK|SP-404 MKII)\b/ },
];

// Rótulos NOSSOS (marca, equipamento vizinho no chassi, legenda didática em português).
// Não faz sentido procurá-los no manual do fabricante.
const NOSSOS = /^(SMU|CDJ-3000|CDJ-2000NXS2|DJM-A9|DJM-V10|DJM-900NXS2|XDJ-RX2|PLAYER [12]|DECK [ABCD1-4]|BARS|TIME ?\/? ?REMAIN|ON\/OFF|OK|ON|OFF|[A-D]|CH ?[1-4]|ARQUIVOS|PAD SELECIONADO|REC \+ PLAY|GATE \/ LOOP|MFX ON\/OFF|[0-9 .%·+—–\/-]+)$/;

// Rótulos que o MANUAL não usa mas são OFICIAIS — conferidos em outra fonte do fabricante.
// Ficam aqui com a fonte anotada para ninguém "corrigir" um acerto depois.
const VERIFICADO_FORA_DO_MANUAL = {
  "MAGVEL FADER": 'página oficial do DJM-A9: "third-generation MAGVEL FADER crossfader"; o 900NXS2 diz "Magvel Faders". ' +
                  'O manual só usa "CROSSFADER" — MAGVEL é a tecnologia, não o controle. ' +
                  'CUIDADO: MAGVEL FADER *PRO* é dos mixers de scratch (DJM-S11/S7/S5, DDJ-REV7), NÃO do A9.',
  "BEAT FX": 'o quickstart do XDJ-RX2 agrupa como "Mixer/effect section"; BEAT FX é o nome no painel e nos manuais dos DJM.',
  "SP-404MKII": 'nome do PRODUTO na página oficial da Roland (título e headings). O manual usa a abreviação "SP-404MK2" — ' +
                'para nome de produto a fonte é a página do produto, não o manual.',
};

const norm = t => t.toUpperCase().replace(/\s+/g, " ").trim();

if (BAIXAR) {
  fs.mkdirSync(MAN, { recursive: true });
  console.log(`baixando os manuais oficiais em ${MAN}\n`);
  for (const [f, url] of Object.entries(MANUAIS)) {
    const dest = path.join(MAN, f);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100000) { console.log(`  · ${f} (já existe)`); continue; }
    try {
      execFileSync("curl", ["-sL", "--max-time", "180", "-A", "Mozilla/5.0", "-o", dest, url]);
      const kb = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`  ${kb > 100 ? "✓" : "✗"} ${f.padEnd(20)} ${kb} KB`);
    } catch { console.log(`  ✗ ${f} — falhou`); }
  }
  console.log("\npronto. rode a auditoria sem --baixar.");
  process.exit(0);
}

/** Nomes de controle declarados na seção "Part names" do manual.
 *  Cada fabricante formata de um jeito — exigir um formato só devolve ZERO e INVERTE o veredito
 *  (o manual "sem" o termo acusa de inventado o que está escrito nele):
 *    CDJ-3000 -> "1. PLAY/PAUSE button (page46)"     (número, ponto, espaço, sufixo)
 *    DJM-A9   -> "1.USB section (page57)"            (sem espaço; painel por seções)
 *    XDJ-RX2  -> "1 Power section"                   (sem ponto)
 *    Technics -> "( 18) Strobe light ( 20) RESET button"  (número ANTES, entre parênteses!)
 *  Por isso o nome é reconhecido pelo SUFIXO, com ou sem numeração na frente. */
const SUF = "button|buttons|lever|knob|dial|slider|wheel|port|slot|jack|indicator|display|selector|switch|fader|control|section|terminal|connector|light|lamp|pad";
// Um controle real é curto e não é frase. Sem isto, o sumário ("PART NAMES 8TOP PANEL 8…") e
// frases soltas ("Unplug this apparatus during light") entram como se fossem controles.
const ehControle = c => c.length >= 2 && c.length <= 30 && !/\d/.test(c)
  && !/\b(THE|AND|FOR|WITH|THIS|THAT|YOUR|FROM|PRESS|TURN|SELECT|ADJUST\w*|OUTPUT\w*|CONNECT\w*|SETTING|MOVE|SWITCH ON|DURING|WHEN|IF|TO|OF|IN|ON|AT|BY|USE|USING|SET)\b/.test(c);

function controlesDoManual(pdf) {
  const out = execFileSync("node", [path.join(ROOT, "ferramentas/pdftext.mjs"), pdf], { encoding: "utf8", maxBuffer: 1 << 27 });
  const txt = out.replace(/\0/g, "").replace(/\.{3,}/g, " ").replace(/\s+/g, " ");
  const set = new Set();
  for (const m of txt.matchAll(new RegExp(String.raw`(?:^|[\s.)])([A-Z][A-Za-z0-9 ./,&+–-]{1,40}?)\s+(${SUF})\b`, "g"))) {
    const c = norm(m[1]);
    if (ehControle(c)) set.add(c);
  }
  return { set, txt: txt.toUpperCase() };
}

/** O que o aluno lê na tela (comentários do código não contam).
 *  Uma legenda pode listar várias funções de uma vez ("LINK · MIC · UTILITY"): é preciso quebrar
 *  pelo separador e conferir cada nome, senão a legenda inteira vira um "nome inventado". */
function rotulosDoSim(file) {
  const v = fs.readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const brutos = [...v.matchAll(/>([A-Z][A-Z0-9 /+.·-]{1,28})</g)].map(m => m[1]);
  const rot = new Set();
  for (const b of brutos) for (const parte of b.split("·")) { const t = norm(parte); if (t) rot.add(t); }
  return { rot: [...rot], v };
}

console.log("AUDITORIA DE NOMENCLATURA — frota DJ × manual oficial\n" + "=".repeat(74));
let suspeitosTotal = 0, semLeitura = 0, semManual = 0;

for (const a of FROTA) {
  const sim = path.join(ROOT, "simuladores/dj", a.sim);
  if (!fs.existsSync(sim)) { console.log(`\n${a.nome}: simulador não encontrado — pulado`); continue; }

  const man = new Set();
  let txt = "", falta = null;
  for (const p of a.pdfs) {
    const pdf = path.join(MAN, p);
    if (!fs.existsSync(pdf)) { falta = p; continue; }
    const r = controlesDoManual(pdf);
    r.set.forEach(c => man.add(c));
    txt += r.txt;
  }
  if (falta) { console.log(`\n${a.nome} (aula ${a.aula}): manual ausente (${falta}) — rode com --baixar`); semManual++; continue; }

  const { rot, v } = rotulosDoSim(sim);
  console.log(`\n${a.nome}  (aula ${a.aula})  —  ${man.size} controles no(s) manual(is); ${rot.length} rótulos na tela`);

  if (man.size < 5) {
    console.log(`  ⛔ extração insuficiente (${man.size}): veredito INDISPONÍVEL — não é "aprovado". Conserte o parser.`);
    semLeitura++; continue;
  }

  const naoAchei = rot.filter(t => t.length > 2 && !NOSSOS.test(t) && (a.foraDoManual ? !a.foraDoManual.test(t) : true)
    && !man.has(t) && ![...man].some(c => c.includes(t) || t.includes(c)) && !txt.includes(t));
  const justificados = naoAchei.filter(t => VERIFICADO_FORA_DO_MANUAL[t]);
  const suspeitos = naoAchei.filter(t => !VERIFICADO_FORA_DO_MANUAL[t]);

  for (const t of justificados) console.log(`  ⓘ  "${t}" não está no manual, mas é oficial — ${VERIFICADO_FORA_DO_MANUAL[t]}`);
  if (suspeitos.length) { suspeitosTotal += suspeitos.length; console.log(`  ⚠️  SEM respaldo e SEM fonte: ${suspeitos.join(" · ")}`); }
  else console.log("  ✓ todo rótulo vem do manual (ou tem fonte oficial anotada)");

  if (a.outraMarca) {
    // Só os RÓTULOS: varrer o HTML cru acusa `d.trim` e `data-ck="trim"` — id interno do motor,
    // que o aluno nunca vê e que trocar só quebraria a lógica.
    const cont = [...new Set(rot.join(" ").match(a.outraMarca) || [])];
    if (cont.length) { suspeitosTotal += cont.length; console.log(`  ⚠️  nomenclatura de OUTRA marca na tela: ${cont.join(" · ")}`); }
    else console.log("  ✓ sem nomenclatura de outra marca (só ids internos, que não aparecem)");
  }
}

console.log("\n" + "=".repeat(74));
if (semManual) console.log(`○ ${semManual} equipamento(s) sem manual baixado — rode com --baixar.`);
if (semLeitura) console.log(`⛔ ${semLeitura} sem leitura válida do manual — veredito INDISPONÍVEL (não é "aprovado").`);
console.log(suspeitosTotal ? `⚠️  ${suspeitosTotal} rótulo(s) para conferir à mão.` : "✅ frota limpa: todo rótulo vem do manual do fabricante.");
process.exit(suspeitosTotal || semLeitura ? 1 : 0);
