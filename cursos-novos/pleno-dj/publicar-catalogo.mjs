#!/usr/bin/env node
/**
 * publicar-catalogo.mjs — cria as aulas do catálogo "cada marca um módulo, cada
 * modelo uma aula" e anexa o simulador de cada uma.
 *
 * REGRA 5 (faixa de id): este curso escreve SÓ em d1a00000-0000-4000-9000-*
 *   módulo Pioneer   = ...0001   → aulas 01xx
 *   módulo Technics  = ...0002   → aulas 02xx
 *   módulo Denon     = ...0003   → aulas 03xx
 *   módulo Numark    = ...0004   → aulas 04xx
 * Nada é sobrescrito: o script ABORTA se o id já existir com outro título.
 *
 * A chave vem de SMU-PRO/.local/svckey (ver ferramentas/publicar-sim.mjs).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const CURSO = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
const P = "d1a00000-0000-4000-9000-";

function chave() {
  if (process.env.SUPABASE_SERVICE_KEY) return process.env.SUPABASE_SERVICE_KEY.trim();
  const f = path.join(RAIZ, ".local", "svckey");
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  throw new Error("chave nao encontrada em SMU-PRO/.local/svckey");
}
const K = chave();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 180)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* módulo Numark (só é criado se ainda não existir) */
const MOD_NUMARK = { id: P + "000000000004", titulo: "🟧 Numark — por modelo", ordem: 13 };

/* aula = [id, módulo, ordem, arquivo, título, o que o aluno pratica] */
const AULAS = [
  // ---- Pioneer (módulo 0001) ----
  ["0111","0001",11,"pioneer-cdj-200-real.html","Pioneer CDJ-200 (player compacto · Jog Break)","O CD player de entrada que colocou a Pioneer em toda casa noturna. Tem DIGITAL JOG BREAK (JET/ZIP/WAH), BEAT LOOP e FOLDER SEARCH — mas <b>não tem Hot Cue</b>, conferido no painel real."],
  ["0112","0001",12,"pioneer-cdj-800mk2-real.html","Pioneer CDJ-800MK2 (scratch em vinil · Auto Beat Loop)","O irmão do meio do CDJ-1000: jog grande com modo VINYL para scratch, AUTO BEAT LOOP (1/2/4/8 batidas) que vira BEAT CUT, e TEMPO ±10/WIDE."],
  ["0113","0001",13,"pioneer-cdj-850-real.html","Pioneer CDJ-850 (rekordbox · jog grande)","Player com display LCD, seletor rotativo de navegação e jog grande. A ponte entre o CDJ-800 e a era rekordbox."],
  ["0114","0001",14,"pioneer-cdj-900nxs-real.html","Pioneer CDJ-900NXS (Nexus · memória de pontos)","O Nexus de 4 dígitos. <b>Não tem botões Hot Cue</b> (confirmado no manual): trabalha com MEMORY / CALL ◄► / DELETE — grave o ponto, chame quando precisar."],
  ["0115","0001",15,"pioneer-cdj-2000nxs2-real.html","Pioneer CDJ-2000NXS2 (o padrão de clube)","O player que virou padrão mundial de cabine: tela colorida, forma de onda ampliada, 8 hot cues, beat jump e loop. É o que você encontra na maioria dos clubes.","57 controles"],
  ["0116","0001",16,"pioneer-cdj-3000-real.html","Pioneer CDJ-3000 (flagship · tela 9\")","O topo de linha: tela touch de 9\", 8 pads coloridos A–H, jog com LCD central e KEY SYNC. Medido no diagrama oficial (spec 329 × 452,6 mm)."],
  ["0117","0001",17,"pioneer-djm-450-real.html","Pioneer DJM-450 (mixer 2 canais · COLOR FX)","O mixer de 2 canais para cabine pequena e estúdio: COLOR FX por canal, BEAT FX e crossfader — o essencial para aprender a mixar."],
  ["0118","0001",18,"pioneer-djm-750mk2-real.html","Pioneer DJM-750MK2 (4 canais · Beat FX)","Mixer de 4 canais com COLOR FX, BEAT FX com display e EQ de 3 bandas. O caminho natural de quem sai do DJM-450."],
  ["0119","0001",19,"pioneer-djm-900nxs2-real.html","Pioneer DJM-900NXS2 (o mixer padrão de clube)","O par do CDJ-2000NXS2 e o mixer mais encontrado em clube: X-PAD, display OLED do BEAT FX, COLOR por canal e o crossfader MAGVEL. 102 controles."],
  ["0120","0001",20,"pioneer-djm-v10-real.html","Pioneer DJM-V10 (6 canais · EQ de 4 bandas)","O mixer de 6 canais com EQ de <b>4 bandas</b> por canal e compressor — feito para quem toca com muitas fontes ao mesmo tempo."],
  ["0121","0001",21,"pioneer-plx-1000-real.html","Pioneer PLX-1000 (toca-discos direct drive)","A resposta da Pioneer ao Technics: tração direta, braço em S e pitch ±8/±16/±50. Aqui você aprende o vinil sem o mito."],
  ["0122","0001",22,"pioneer-xdj-700-real.html","Pioneer XDJ-700 (player USB compacto · touch)","O menor player de tela touch da linha: toca direto do pendrive, em pé, ocupando pouco espaço na cabine."],
  ["0123","0001",23,"pioneer-xdj-1000mk2-real.html","Pioneer XDJ-1000MK2 (touch 7\" · sem bandeja)","Player de tela touch de 7\" sem leitor de CD — o formato que substituiu o CDJ na maioria das cabines novas."],
  ["0124","0001",24,"pioneer-xdj-aero-real.html","Pioneer XDJ-AERO (all-in-one wireless)","O all-in-one que tocava por Wi-Fi: 2 decks, mixer embutido, AUTO BEAT LOOP e JOG DRUM. Bom para entender o conceito de sistema fechado."],
  ["0125","0001",25,"pioneer-xdj-rr-real.html","Pioneer XDJ-RR (all-in-one 2 decks)","All-in-one com tela colorida central, 2 jogs e mixer de 2 canais — <b>não precisa de mixer separado</b>, o mixer já está no corpo."],
  ["0126","0001",26,"pioneer-xdj-rx3-real.html","Pioneer XDJ-RX3 (all-in-one · tela 10,1\")","A evolução do RX2: tela touch grande, 2 decks e mixer de 2 canais integrado, com os pads de performance completos."],
  ["0127","0001",27,"pioneer-xdj-xz-real.html","Pioneer XDJ-XZ (all-in-one 4 canais)","O all-in-one de topo: jogs do tamanho do CDJ-2000NXS2 e mixer de <b>4 canais</b> — os decks internos entram nos canais 1 e 2, e os canais 3 e 4 ficam para fontes externas."],
  ["0128","0001",28,"alphatheta-opus-quad-real.html","AlphaTheta OPUS-QUAD (4 decks · chassi curvo)","O sucessor premium: 4 decks, tela touch central e o desenho curvo que abandonou o formato retangular. 143 controles."],
  ["0129","0001",29,"alphatheta-xdj-az-real.html","AlphaTheta XDJ-AZ (all-in-one 4 canais)","O all-in-one mais novo da casa: tela de 10,1\", 4 canais e pratos de 206 mm. Medido na spec oficial (895 × 504,1 mm)."],
  // ---- Technics (módulo 0002) ----
  ["0202","0002",2,"technics-sl1200mk2-real.html","Technics SL-1200MK2 (o clássico eterno)","O toca-discos que definiu o DJ: tração direta, torque de partida em 0,7 s, pitch ±8 e a luz estroboscópica do prato. Praticamente todo clube do mundo teve um par."],
  // ---- Denon (módulo 0003) ----
  ["0302","0003",2,"denon-x1850-real.html","Denon DJ X1850 Prime (mixer 4 canais)","O mixer da linha Prime: BPM FX com display, SWEEP FX por canal e filtros — o par natural do SC6000 e do Prime 4."],
  // ---- Numark (módulo 0004, criado por este script) ----
  ["0401","0004",1,"numark-ns7-real.html","Numark NS7 (controlador com pratos motorizados)","O controlador que trouxe pratos <b>motorizados de vinil</b> de verdade: você sente o disco girando embaixo da mão, com mixer de 3 canais no corpo."],
];


/* o arquivo pode estar em simuladores/dj/<fabricante>/ — procura recursiva */
function acharSim(nome) {
  const pilha = [SIMS];
  while (pilha.length) {
    const d = pilha.pop();
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) pilha.push(p);
      else if (e.name === nome) return p;
    }
  }
  return null;
}

const GUARDS = [
  [/pos>=len\)\s*\w\.pos-=len/, "loop continuo"],
  [/bars=16/, "render rapido"],
  [/gain\.value=0\.9/, "fader 0.9"],
  [/function init\(\)\s*\{[\s\S]{0,600}?\bframe\(\)/, "desenha antes do audio"],
];

async function main() {
  const soLista = process.argv.includes("--listar");

  // módulo Numark
  const mods = await req("GET", `/modules?course_id=eq.${CURSO}&select=id&id=eq.${MOD_NUMARK.id}`);
  if (!mods.length && !soLista) {
    await req("POST", "/modules", [{ id: MOD_NUMARK.id, course_id: CURSO, titulo: MOD_NUMARK.titulo,
      descricao: "Controladores e toca-discos Numark.", ordem: MOD_NUMARK.ordem }], { Prefer: "return=minimal" });
    console.log(`+ modulo criado: ${MOD_NUMARK.titulo}`);
  }

  let feitas = 0, puladas = 0;
  for (const [sufixo, mod, ordem, arq, titulo, resumo] of AULAS) {
    /* o ultimo grupo do UUID tem 12 chars: 8 zeros + o sufixo de 4 */
    const lid = P + "00000000" + sufixo, mid = P + "00000000" + mod;
    if (lid.split("-").pop().length !== 12) throw new Error(`id malformado: ${lid}`);
    const alvo = acharSim(arq) || path.join(SIMS, arq);
    if (!alvo || !fs.existsSync(alvo)) { console.log(`! sem arquivo: ${arq}`); puladas++; continue; }
    const html = fs.readFileSync(alvo, "utf8");
    let falhou = null;
    for (const [re, nome] of GUARDS) if (!re.test(html)) falhou = nome;
    if (/data:image\/(jpeg|png);base64/.test(html)) falhou = "foto embutida";
    if (falhou) { console.log(`! guard reprovou ${arq}: ${falhou}`); puladas++; continue; }

    // Regra 5: nao sobrescrever aula de outro conteudo
    const ja = await req("GET", `/lessons?id=eq.${lid}&select=id,titulo,module_id`);
    if (ja.length && ja[0].titulo !== titulo) {
      console.log(`! ABORTADO ${sufixo}: id ja usado por "${ja[0].titulo}"`); puladas++; continue;
    }
    if (soLista) { console.log(`  ${sufixo}  ${titulo}`); continue; }

    const conteudo = `<p><strong>${titulo}</strong></p><p>${resumo}</p>
<p>Passe o mouse (ou toque) em qualquer controle: o simulador explica <em>o que aquele botão faz</em>, com o texto tirado do manual oficial. Depois pratique — todos os controles funcionam.</p>`;

    if (!ja.length) {
      await req("POST", "/lessons", [{ id: lid, module_id: mid, titulo, tipo: "texto",
        conteudo_rico: conteudo, duracao_min: 12, ordem, tem_quiz: false, preview_gratis: false }],
        { Prefer: "return=minimal" });
    } else {
      await req("PATCH", `/lessons?id=eq.${lid}`, { conteudo_rico: conteudo, ordem, module_id: mid }, { Prefer: "return=minimal" });
    }

    const an = await req("GET", `/ai_animations?lesson_id=eq.${lid}&select=id`);
    if (an.length) {
      await req("PATCH", `/ai_animations?id=eq.${an[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
    } else {
      await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: lid, tipo: "interactive",
        status: "ready", model: "handcrafted-interactive",
        roteiro: { cenas: [{ modo: "widget", numero: 1, titulo, duracao: 180 }], metadata: { titulo } },
        urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    }
    console.log(`OK ${sufixo}  ${titulo}  (${(html.length / 1024).toFixed(0)}KB)`);
    feitas++;
  }

  if (!soLista) {
    const ms = (await req("GET", `/modules?course_id=eq.${CURSO}&select=id`)).map(m => m.id).join(",");
    const ls = await req("GET", `/lessons?module_id=in.(${ms})&select=id`);
    await req("PATCH", `/courses?id=eq.${CURSO}`, { total_aulas: ls.length }, { Prefer: "return=minimal" });
    console.log(`\n${feitas} publicadas, ${puladas} puladas. Curso agora com ${ls.length} aulas.`);
  }
}
main().catch(e => { console.error("FALHOU:", e.message); process.exit(1); });
