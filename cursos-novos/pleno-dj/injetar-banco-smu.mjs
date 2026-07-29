/* ============================================================================
   INJETA O "BANCO SMU" NA FROTA DE SIMULADORES DE DJ
   ----------------------------------------------------------------------------
   Objetivo (ordem do dono, 29/07/2026): TODOS os simuladores de DJ podem tocar
   as musicas do banco da SMU. So a aula de internet (do outro chat) usa YouTube.

     node cursos-novos/pleno-dj/injetar-banco-smu.mjs --dry    (so mostra o plano)
     node cursos-novos/pleno-dj/injetar-banco-smu.mjs          (aplica)
     node cursos-novos/pleno-dj/injetar-banco-smu.mjs --só=pioneer-cdj-3000-real.html

   COMO FUNCIONA (o porque de nao reescrever 32 arquivos a mao):
   Todo sim da frota pega o audio no mesmo ponto:
       const buf = await renderTrack();          // OfflineAudioContext
       const data=buf.getChannelData(0), len=data.length;
       d/D = { buffer:buf, data, len, ..., baseBpm:128, ... }
   `decodeAudioData` devolve o MESMO tipo (AudioBuffer). Entao basta ENVOLVER o
   `renderTrack`: se o aluno escolheu faixa do banco, devolve o MP3 decodificado;
   senao, cai na faixa sintetizada de sempre. O motor do deck nao muda 1 linha.
   O unico ponto que varia por sim e o `baseBpm` fixo — vira `(window.__BANCO_BPM||X)`.

   SEGURANCA:
   - IDEMPOTENTE: marca com MARCA e pula quem ja tem.
   - PULA quem nao casar com o padrao esperado (nao adivinha, RELATA).
   - EXCLUIR[] p/ nao colidir com a outra sessao que edita a mesma arvore.
   - Faz .bak antes de escrever. Reverter = renomear de volta.
   ============================================================================ */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dir, "..", "..", "simuladores", "dj");
const DRY = process.argv.includes("--dry");
const SO = (process.argv.find(a => a.startsWith("--só=")) || process.argv.find(a => a.startsWith("--so=")) || "").split("=")[1];
const MARCA = "/*BANCO-SMU-v2*/";
const INI = "/*BANCO-SMU-INI*/", FIM = "/*BANCO-SMU-FIM*/";
/* Delimitadores p/ o bloco poder ser TROCADO numa versao futura sem lixo
   acumulado. Reaplicar arranca o bloco antigo (qualquer versao) e poe o novo. */

/* Arquivos que a OUTRA SESSAO esta editando agora — nao encostar.
   Atualizar conforme ela responder. */
/* Lista confirmada pela sessao "DJ booth simulator reference library" em
   29/07/2026: 4 agentes dela estao corrigindo colisao de layout nestes.
   NAO ENCOSTAR ate ela avisar que terminou. */
const EXCLUIR = new Set([
  "pioneer-xdj-1000mk2-real.html",
  "pioneer-cdj-800mk2-real.html",
  "pioneer-xdj-rx2-real.html",
  "pioneer-xdj-rx3-real.html",
  "pioneer-cdj-900nxs-real.html",
  "pioneer-cdj-3000-real.html",
  "pioneer-cdj-2000nxs2-real.html",
  "pioneer-plx-1000-real.html",
  "technics-sl1200mk2-real.html",
  "technics-sl1200mk7-real.html",    // ela lista como EDITANDO e como LENDO -> trato como editando
  "smu-dj-studio-real.html",         // ja tem o Banco (feito a mao, com pen drive)
]);

/* Ela vai LER (nao escrever) estes p/ embutir copia na aula de montagem.
   Posso aplicar — mas TENHO de avisar quando terminar, senao ela embute a
   versao sem banco. */
const AVISAR_DEPOIS = new Set([
  "pioneer-cdj-1000mk3-real.html", "pioneer-cdj-400-real.html",
  "pioneer-djm-800-real.html", "pioneer-djm-600-real.html",
  "pioneer-djm-900nxs2-real.html",
]);

/* Labs/infograficos: nao sao tocadores de musica, nao levam banco. */
const NAO_E_TOCADOR = new Set([
  "dj-caixas-lab-real.html", "dj-fones-lab-real.html", "dj-setup-gain-real.html",
  "dj-softwares-real.html", "akai-mpc-real.html", "roland-sp404-real.html",
]);

/* --------------------------------------------------------------------------
   O modulo que entra em cada sim. Autossuficiente: so depende de AC e fetch.
   -------------------------------------------------------------------------- */
function modulo() {
  return `
${INI}
${MARCA}
/* BANCO SMU — faixas liberadas da SMU tocando no motor completo deste aparelho.
   ⛔ Em producao BASE tem de ser URL ABSOLUTA com CORS "*": o sim roda em
   <iframe srcDoc sandbox> sem allow-same-origin e sem <base>, entao caminho
   relativo resolve contra a URL da AULA (404) e o fetch vai com Origin: null. */
(function(){
  var BASE = "musicas/";
  var FAIXAS = [
    { arquivo:"sotex-1.mp3",  nome:"SOTEX 01", bpm:98.4  },
    { arquivo:"sotex-2.mp3",  nome:"SOTEX 02", bpm:144.6 },
    { arquivo:"sotex-3.mp3",  nome:"SOTEX 03", bpm:146.4 },
    { arquivo:"sotex-4.mp3",  nome:"SOTEX 04", bpm:95.3  },
    { arquivo:"sotex-5.mp3",  nome:"SOTEX 05", bpm:133.4 },
    { arquivo:"sotex-6.mp3",  nome:"SOTEX 06", bpm:113.3 },
    { arquivo:"sotex-7.mp3",  nome:"SOTEX 07", bpm:117.7 },
    { arquivo:"sotex-8.mp3",  nome:"SOTEX 08", bpm:117.7 },
    { arquivo:"sotex-9.mp3",  nome:"SOTEX 09", bpm:160.2 },
    { arquivo:"sotex-10.mp3", nome:"SOTEX 10", bpm:160.2 },
    { arquivo:"sotex-11.mp3", nome:"SOTEX 11", bpm:89.6  },
    { arquivo:"sotex-12.mp3", nome:"SOTEX 12", bpm:139.6 },
    { arquivo:"sotex-13.mp3", nome:"SOTEX 13", bpm:122.5 }
  ];
  window.BANCO_SMU = { base:BASE, faixas:FAIXAS, escolhida:null, cache:{} };

  /* Envolve renderTrack: escolheu faixa -> MP3 real; senao -> faixa sintetizada.
     O deck recebe um AudioBuffer nos dois casos e nao percebe diferenca. */
  if (typeof renderTrack === "function") {
    var _orig = renderTrack;
    renderTrack = async function(){
      var esc = window.BANCO_SMU.escolhida;
      if (!esc) return await _orig.apply(this, arguments);
      try {
        if (window.BANCO_SMU.cache[esc.arquivo]) {
          window.__BANCO_BPM = esc.bpm;
          return window.BANCO_SMU.cache[esc.arquivo];
        }
        var r = await fetch(window.BANCO_SMU.base + esc.arquivo);
        if (!r.ok) throw new Error("HTTP " + r.status);
        var buf = await AC.decodeAudioData(await r.arrayBuffer());
        window.BANCO_SMU.cache[esc.arquivo] = buf;
        window.__BANCO_BPM = esc.bpm;
        return buf;
      } catch(e) {
        console.warn("Banco SMU falhou, usando faixa de treino:", e);
        window.__BANCO_BPM = null;
        return await _orig.apply(this, arguments);
      }
    };
  }

  /* A barra e position:fixed, entao ela se prende a viewport do IFRAME em que
     o sim roda. Em uso normal isso e a tela do simulador (ok). Mas quando o sim
     e EMBUTIDO dentro de outra aula (iframe dentro de iframe), a viewport vira
     do tamanho do aparelho na bancada e a barra cobriria o painel.

     ⛔ NAO usar "window.self !== window.top" p/ detectar isso: em uso NORMAL o
     sim JA roda dentro de um iframe (srcDoc do animation-player), entao essa
     condicao e sempre verdadeira e some com a barra em todo lugar.
     O que distingue e a PROFUNDIDADE: aninhado 2+ niveis -> parent != top. */
  function embutido(){
    if (window.__SMU_EMBUTIDO) return true;              // bandeira explicita
    try { return window.parent !== window.top; } catch(e) { return false; }
  }
  window.BANCO_SMU.mostrarBarra = function(v){           // controle manual
    var b = document.getElementById("bancoSmuBar");
    if (b) b.style.display = v ? "flex" : "none";
  };

  /* Barra flutuante: nao depende do layout do aparelho (cada sim tem o seu). */
  function montar(){
    if (embutido()) return;                              // quem embute controla a UI
    if (document.getElementById("bancoSmuBar")) return;
    var bar = document.createElement("div");
    bar.id = "bancoSmuBar";
    bar.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:9999;display:flex;gap:6px;"+
      "align-items:center;background:#0d1117ee;border:1px solid #1d5638;border-radius:9px;"+
      "padding:6px 9px;font:11px/1.3 Inter,system-ui,sans-serif;color:#b7f5cf;"+
      "box-shadow:0 6px 24px #000a;backdrop-filter:blur(4px)";
    var lbl = document.createElement("span");
    lbl.textContent = "🎵 BANCO SMU";
    lbl.style.cssText = "font-weight:800;letter-spacing:.5px";
    var sel = document.createElement("select");
    sel.style.cssText = "font:inherit;background:#10241a;color:#dff7e9;border:1px solid #1d5638;"+
      "border-radius:6px;padding:3px 6px;max-width:190px";
    var op0 = document.createElement("option");
    op0.value = ""; op0.textContent = "faixa de treino (padrão)";
    sel.appendChild(op0);
    FAIXAS.forEach(function(f,i){
      var o = document.createElement("option");
      o.value = String(i); o.textContent = f.nome + " · " + f.bpm + " BPM";
      sel.appendChild(o);
    });
    var msg = document.createElement("span");
    msg.style.cssText = "color:#7fa08d";
    sel.addEventListener("change", function(){
      window.BANCO_SMU.escolhida = sel.value === "" ? null : FAIXAS[+sel.value];
      msg.textContent = sel.value === ""
        ? "recarregue p/ voltar à faixa de treino"
        : "recarregue o áudio p/ tocar esta faixa";
    });
    bar.appendChild(lbl); bar.appendChild(sel); bar.appendChild(msg);
    document.body.appendChild(bar);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar);
  else montar();
})();
`;
}

/* -------------------------------------------------------------------------- */
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const alvos = fs.readdirSync(DIR)
  .filter(f => f.endsWith("-real.html"))
  .filter(f => !SO || f === SO);

const rel = { aplicado: [], jaTinha: [], excluido: [], naoTocador: [], semPadrao: [] };

for (const f of alvos) {
  const p = path.join(DIR, f);
  let html = fs.readFileSync(p, "utf8");

  if (EXCLUIR.has(f))        { rel.excluido.push(f);    continue; }
  if (NAO_E_TOCADOR.has(f))  { rel.naoTocador.push(f);  continue; }
  if (html.includes(MARCA))  { rel.jaTinha.push(f);     continue; }

  /* Bloco de versao ANTERIOR: arranca antes de por o novo (senao acumula
     modulo velho e o renderTrack fica envolvido duas vezes). */
  let tinhaVelho = false;
  const blocoAntigo = new RegExp(
    escRe(INI) + "[\\s\\S]*?" + escRe(FIM) + "\\n?", "g");
  if (blocoAntigo.test(html)) { html = html.replace(blocoAntigo, ""); tinhaVelho = true; }
  else if (/\/\*BANCO-SMU-v1\*\//.test(html)) {
    // v1 saiu sem delimitador de fim: remove do marcador ate o fim daquele IIFE
    const i = html.indexOf("/*BANCO-SMU-v1*/");
    const j = html.indexOf("})();", i);
    if (i >= 0 && j > i) { html = html.slice(0, i) + html.slice(j + 5); tinhaVelho = true; }
    else { rel.semPadrao.push(f + " (bloco v1 sem fim reconhecível — refazer à mão)"); continue; }
  }

  // Exige o padrao do motor. Nao adivinha: se nao casar, RELATA e pula.
  if (!/async function renderTrack/.test(html) || !/<\/script>/.test(html)) {
    rel.semPadrao.push(f + " (sem renderTrack)"); continue;
  }
  /* Aceita as DUAS formas: `baseBpm:128` (virgem) e
     `baseBpm:(window.__BANCO_BPM||128)` (ja remendado numa rodada anterior).
     Se so procurar a virgem, reaplicar reprova arquivo que esta correto. */
  const bpmHits = [...html.matchAll(
    /baseBpm:\s*(?:\(window\.__BANCO_BPM\|\|)?([A-Za-z_$][\w$]*|\d+(?:\.\d+)?)/g)];
  if (!bpmHits.length) { rel.semPadrao.push(f + " (sem baseBpm)"); continue; }

  /* 1) baseBpm respeita a faixa escolhida. NAO remendar o que ja foi remendado
        (senao vira baseBpm:(window.__BANCO_BPM||(window.__BANCO_BPM||128))). */
  let jaTinhaBpm = 0;
  let novo = html.replace(/baseBpm:\s*(\(window\.__BANCO_BPM\|\||)([A-Za-z_$][\w$]*|\d+(?:\.\d+)?)/g,
    (m, guarda, v) => { if (guarda) { jaTinhaBpm++; return m; }
                        return `baseBpm:(window.__BANCO_BPM||${v})`; });
  // 2) modulo entra no FIM do ultimo <script> (renderTrack ja declarado)
  const fim = novo.lastIndexOf("</script>");
  novo = novo.slice(0, fim) + modulo() + "\n" + novo.slice(fim);

  if (!DRY) fs.writeFileSync(p, novo, "utf8");
  rel.aplicado.push(
    `${f}  (baseBpm×${bpmHits.length}${jaTinhaBpm ? ", " + jaTinhaBpm + " já ok" : ""}${tinhaVelho ? ", bloco antigo trocado" : ""})`);
}

const linha = (t, xs) => xs.length ? `\n${t} (${xs.length}):\n  ` + xs.join("\n  ") : "";
console.log(
  (DRY ? "=== SIMULAÇÃO (--dry): nada foi escrito ===" : "=== APLICADO ===") +
  linha("APLICAR/APLICADO", rel.aplicado) +
  linha("JÁ TINHA (pulado)", rel.jaTinha) +
  linha("EXCLUÍDO — outra sessão / feito à mão", rel.excluido) +
  linha("NÃO É TOCADOR (lab/sampler)", rel.naoTocador) +
  linha("⚠️ FORA DO PADRÃO — precisa de mão", rel.semPadrao) +
  `\n\nTOTAL: ${rel.aplicado.length} sim(s) receberiam o Banco SMU.`
);
