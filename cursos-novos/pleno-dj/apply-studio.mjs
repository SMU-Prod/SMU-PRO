// Publica o SMU DJ STUDIO (pen drive + músicas reais) como AULA NOVA no curso "DJ" ao vivo.
//   node cursos-novos/pleno-dj/apply-studio.mjs          (aplica)
//   node cursos-novos/pleno-dj/apply-studio.mjs --dry    (mostra o plano)
// Aditivo: cria 1 lesson no módulo 4 (Técnicas Básicas e Beatmatching, ordem 3) + ai_animations.
// Idempotente: reaplicar atualiza a mesma aula (id fixo). total_aulas 19 -> 20.
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

const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0"; // curso "DJ" ao vivo
const MODULE = "14b6dff0-0497-4d6f-afe9-76c63b99708c"; // "Técnicas Básicas e Beatmatching"
const LESSON = "d15d0000-57d1-4d00-9000-000000000001"; // id fixo (idempotente)

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 300)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}

const conteudo = `
<p><strong>DJ de verdade treina com as músicas que vai tocar.</strong> Nesta aula você monta o seu <strong>pen drive virtual</strong> e pratica na cabine com as SUAS músicas — do jeito que acontece no clube: escolher o repertório, organizar o pen, carregar nos decks e mixar.</p>
<h3>Como funciona o seu pen drive</h3>
<ul>
<li><strong>Adicionar músicas:</strong> escolha arquivos do seu computador/celular (MP3, WAV…). Eles tocam em modo <strong>PLAY COMPLETO</strong>: pitch, cue, hot cues, loop, EQ e mixer de verdade — o simulador detecta até o BPM da faixa.</li>
<li><strong>Privacidade total:</strong> suas músicas ficam <strong>só no seu navegador</strong> (mídia temporária). Nada é enviado ao servidor — saiu da aula, saíram as músicas.</li>
<li><strong>Pasta autorizada:</strong> se você autorizar uma pasta do seu dispositivo, o sistema lembra dela e recarrega suas músicas nas próximas aulas (sempre com a sua permissão).</li>
<li><strong>YouTube:</strong> cole um link e a música toca <strong>pela plataforma</strong> — assim o artista recebe pela execução digital. No modo streaming a mixagem é por volume e pitch (EQ completo é exclusivo das faixas do pen).</li>
<li><strong>Spotify:</strong> em preparação — em breve você conecta sua conta e toca pelo catálogo, com o artista ganhando a execução.</li>
</ul>
<h3>O treino</h3>
<ol>
<li>Monte o pen com 2+ músicas do mesmo estilo (ou use as <strong>faixas de treino SMU</strong>).</li>
<li><strong>LOAD</strong> uma em cada deck e confira o BPM detectado (duplo clique corrige).</li>
<li>Pré-escute no <strong>CUE</strong>, iguale o BPM no <strong>TEMPO</strong>, alinhe com a <strong>jog</strong> e faça a virada trocando os graves no EQ.</li>
<li>Grave <strong>hot cues</strong> nos pontos-chave (drop, refrão) e use o <strong>loop de 4 batidas</strong> para estender a saída.</li>
</ol>
<p><strong>Por que assim?</strong> Respeito ao artista e ao aluno: música do próprio pen toca completa; música de plataforma toca NA plataforma (execução remunerada); e nada fica salvo em servidor sem sua autorização. É o fluxo profissional — repertório próprio, técnica real, direitos respeitados.</p>`.trim();

const roteiro = {
  cenas: [{ modo: "widget", numero: 1, titulo: "SMU DJ Studio — seu pen drive, suas músicas", duracao: 180,
    destaques: ["Pen drive virtual: suas músicas, só no seu navegador", "PLAY COMPLETO: pitch, cue, hot cues, loop, EQ reais", "Pasta autorizada: o sistema lembra nas próximas aulas", "YouTube: toca pela plataforma (artista recebe)"],
    explicacao_texto: "Monte o pen com as suas músicas e treine na cabine com áudio real. Mídia temporária: nada é enviado ao servidor.",
    dica_profissional: "Treine sempre com o repertório que você vai tocar de verdade — beatmatch de música conhecida forma o ouvido duas vezes mais rápido." }],
  metadata: { titulo: "SMU DJ Studio — pen drive + músicas reais", gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 180, abordagem_didatica: "estúdio com playback real (Web Audio) e fontes autorizadas" },
};

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj/smu-dj-studio-real.html"), "utf8");
  console.log(`Simulador: ${(html.length / 1024).toFixed(0)} KB`);
  const mod = await req("GET", `/modules?id=eq.${MODULE}&select=id,titulo`);
  if (!mod.length) throw new Error("módulo não encontrado");
  console.log(`Módulo: ${mod[0].titulo}`);
  if (DRY) { console.log("[dry-run] nada gravado."); return; }

  // upsert da aula (id fixo)
  await req("DELETE", `/ai_animations?lesson_id=eq.${LESSON}`, null, { Prefer: "return=minimal" });
  await req("DELETE", `/lessons?id=eq.${LESSON}`, null, { Prefer: "return=minimal" });
  await req("POST", "/lessons", [{
    id: LESSON, module_id: MODULE, titulo: "Monte seu pen drive: treine com as suas músicas (SMU DJ Studio)",
    tipo: "texto", conteudo_rico: conteudo, duracao_min: 30, ordem: 3, tem_quiz: false, preview_gratis: false,
  }], { Prefer: "return=minimal" });
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: LESSON, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive", roteiro, urls: [{ html }], custo_usd: 0,
  }], { Prefer: "return=minimal" });
  // total_aulas
  const les = await req("GET", `/lessons?select=id&module_id=in.(${(await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",")})`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les.length }, { Prefer: "return=minimal" });
  console.log(`✅ Aula "SMU DJ Studio" publicada no curso DJ (módulo 4, ordem 3). total_aulas=${les.length}.`);
})();
