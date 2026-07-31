"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Zap, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX,
  Sparkles, CheckCircle2, Maximize2, Minimize2,
} from "lucide-react";
import { useT } from "@/lib/i18n/ui";
import { YoutubeBridge } from "./youtube-bridge";

// ── Types ──────────────────────────────────────────────────

interface ContentScene {
  numero: number;
  titulo: string;
  modo?: "widget" | "image";
  narracao: string;
  explicacao_texto?: string;
  destaques?: string[];
  duracao: number;
  conceito_tecnico?: string;
  por_que_este_modo?: string;
  intencao_pedagogica?: string;
  dica_profissional?: string;
  // Legacy
  tipo?: string;
  elementos_texto?: { dica_pratica?: string };
}

interface AnimationData {
  status: "generating" | "ready" | "error" | "not_found";
  tipo: string;
  roteiro?: {
    metadata: {
      titulo_aula: string;
      total_cenas: number;
      duracao_total: number;
      abordagem_didatica: string;
    };
    analise_tecnica?: {
      dominio: string;
      conceitos_chave: Array<{ conceito: string; status: string; observacao: string }>;
      lacunas_criticas: string[];
    };
    classificacao?: {
      nivel: string;
      justificativa: string;
    };
    diagnostico?: {
      correto: string[];
      incompleto: string[];
      incorreto: string[];
      deveria_incluir: string[];
      nota_geral: string;
    };
    cenas: ContentScene[];
  };
  urls?: Array<{
    html?: string;
    widget?: string;
    image?: string;
    audio?: string;
  }>;
  model?: string;
  // `custo_usd` (coluna do banco) NÃO entra aqui: era o gasto da IA por aula, e a geração por
  // IA está desativada. As 306 linhas de ai_animations são artesanais, todas com custo 0 — o
  // rodapé nunca tinha o que mostrar. A COLUNA continua no banco e em src/types/database.ts:
  // vários `publicar-*.mjs` fazem pós-checagem `custo_usd !== 0 → aborta`.
}

// `titulo`, `categoria` e `isAdmin` continuam no contrato porque o lesson-player os passa
// (tirá-los daqui quebraria a chamada em lesson-player.tsx:584). O componente não os lê mais:
// serviam só para o POST de geração por IA, hoje desativado — por isso não são desestruturados.
interface AnimationPlayerProps {
  lessonId: string;
  titulo: string;
  conteudo: string;
  categoria: string;
  isAdmin?: boolean;
}

// ── Component ──────────────────────────────────────────────

// CONTRATO DE TELA CHEIA (player ⇄ simulador)
// ─────────────────────────────────────────────
// O player avisa; o simulador decide. Aqui mora o SINAL, um lugar só, valendo para todos os
// cursos e para todo simulador futuro. A RESPOSTA é de cada simulador: só ele conhece o próprio
// layout — mesa de zoom-fit não pode virar 2 colunas, cenário fluido pode.
//
// Como o simulador responde: escreva CSS contra `html.smu-fs`. Nada de JS. Ex.:
//   @media (min-width:1250px){
//     html.smu-fs .app{max-width:1900px;display:block;columns:2}   /* `columns` exige block */
//   }
// Quem não tiver esse CSS simplesmente não reage — é assim que som/DJ/vídeo ficam a salvo.
//
// O `resize` é disparado junto porque a classe muda o layout sem gerar evento nenhum, e os
// simuladores redimensionam o canvas no `resize` — sem ele o arraste sai desalinhado.
const PONTE_TELA_CHEIA =
  `<script>/*SMU-FS*/addEventListener('message',function(e){var d=e&&e.data;` +
  `if(d&&d.smu==='fullscreen'){document.documentElement.classList.toggle('smu-fs',!!d.on);` +
  `dispatchEvent(new Event('resize'));}});<\/script>`;

// Prepara o HTML do widget antes de virar srcDoc. PRECISA ser puro e não depender do estado de
// tela cheia: qualquer mudança no srcDoc remonta o iframe e o aluno perde o que já fez.
// Remove também o controle de zoom antigo (script marcado com SMU-ZOOM), que sobrepunha os
// botões do simulador — o zoom agora é o GLOBAL (PageZoom).
function preparaWidget(html: string): string {
  const limpo = html.replace(/<script[^>]*>\s*\/\*SMU-ZOOM\*\/[\s\S]*?<\/script>/gi, "");
  // Simulador antigo pode trazer a ponte embutida (era assim antes de o player assumir): não
  // duplica. Se não houver </body>, anexa no fim — o navegador resolve.
  if (limpo.includes("/*SMU-FS*/")) return limpo;
  return limpo.includes("</body>")
    ? limpo.replace("</body>", `${PONTE_TELA_CHEIA}\n</body>`)
    : limpo + PONTE_TELA_CHEIA;
}

export function AnimationPlayer({ lessonId, conteudo }: AnimationPlayerProps) {
  const t = useT();
  const [data, setData] = useState<AnimationData | null>(null);
  const [generating, setGenerating] = useState(false);

  // Player state
  const [currentScene, setCurrentScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasContent = conteudo && conteudo.length > 100;
  const isReady = data?.status === "ready" && data.roteiro && data.urls;
  const scenes = data?.roteiro?.cenas || [];
  const urls = data?.urls || [];

  useEffect(() => { playingRef.current = playing; }, [playing]);

  // ── Check existing ──
  // ORDEM IMPORTA: `pollStatus` e `checkExisting` vêm ANTES do useEffect que os chama.
  // Declarar depois funciona em runtime (hoisting), mas o React Compiler lê como acesso a
  // valor ainda não declarado dentro do hook e barra (react-hooks/immutability).
  //
  // Não há estado de erro: com a geração desativada o player devolve `null` enquanto não
  // houver conteúdo pronto (o guard mais abaixo), então nunca existiu lugar na tela para a
  // mensagem aparecer — era um `useState` só de escrita. O que resta vai para o console.
  async function pollStatus() {
    // Evita polls concorrentes: limpa qualquer intervalo anterior antes de iniciar
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/animation/generate?lessonId=${lessonId}&tipo=interactive`);
        const result = await res.json();
        if (result.status === "ready") {
          setData(result);
          setGenerating(false);
          clearInterval(interval);
          pollIntervalRef.current = null;
        } else if (result.status === "error") {
          console.warn(`[AnimationPlayer] geração falhou para a aula ${lessonId}`);
          setGenerating(false);
          clearInterval(interval);
          pollIntervalRef.current = null;
        }
      } catch { /* keep polling */ }
    }, 5000);
    pollIntervalRef.current = interval;
    // Esgotou o tempo: sai do estado `generating` — sem isto o poll de 5s ficaria de pé para
    // sempre nesta aula.
    setTimeout(() => {
      clearInterval(interval);
      if (pollIntervalRef.current === interval) {
        pollIntervalRef.current = null;
        setGenerating(false);
        console.warn(`[AnimationPlayer] geração demorou demais na aula ${lessonId}`);
      }
    }, 300_000);
  }

  async function checkExisting() {
    try {
      const res = await fetch(`/api/animation/generate?lessonId=${lessonId}&tipo=interactive`);
      const result = await res.json();
      if (result.status === "ready") {
        setData(result);
      } else if (result.status === "generating") {
        setGenerating(true);
        pollStatus();
      }
    } catch { /* No existing */ }
  }

  useEffect(() => { checkExisting(); }, [lessonId]);

  // ── Navigation ──
  // Função comum, não `useCallback`: nenhum hook depende da identidade dela (só os handlers de
  // clique a chamam), e `advanceToNext` a chama recursivamente para encadear as cenas — dentro
  // de um useCallback isso é auto-referência e o React Compiler barra.
  function goToScene(index: number, autoplay: boolean) {
    if (!isReady || index < 0 || index >= scenes.length) return;

    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.onended = null; }

    setCurrentScene(index);

    if (!autoplay) return;

    const sceneUrl = urls[index];
    const sceneDuration = (scenes[index]?.duracao || 12) * 1000;

    const advanceToNext = () => {
      if (!playingRef.current) return;
      if (index < scenes.length - 1) {
        goToScene(index + 1, true);
      } else {
        setPlaying(false);
      }
    };

    if (sceneUrl?.audio && audioRef.current) {
      audioRef.current.src = sceneUrl.audio;
      audioRef.current.muted = muted;

      audioRef.current.onended = () => {
        timerRef.current = setTimeout(advanceToNext, 2000);
      };

      audioRef.current.onloadedmetadata = () => {
        const audioDur = audioRef.current?.duration || 0;
        const fallbackMs = Math.max(sceneDuration, (audioDur + 4) * 1000);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          if (audioRef.current?.ended || audioRef.current?.paused) advanceToNext();
        }, fallbackMs);
      };

      audioRef.current.play().catch(() => {
        timerRef.current = setTimeout(advanceToNext, sceneDuration + 2000);
      });
    } else {
      timerRef.current = setTimeout(advanceToNext, sceneDuration + 2000);
    }
  }

  function togglePlay() {
    if (!isReady) return;
    if (playing) {
      setPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.onended = null; }
    } else {
      setPlaying(true);
      goToScene(currentScene, true);
    }
  }

  function nextScene() {
    if (currentScene < scenes.length - 1) goToScene(currentScene + 1, playing);
  }
  function prevSceneFn() {
    if (currentScene > 0) goToScene(currentScene - 1, playing);
  }

  // O simulador roda num iframe sandbox (origem opaca): não dá para alcançar o DOM dele nem
  // injetar CSS — e mexer no srcDoc remontaria o iframe, jogando fora o que o aluno já fez.
  // Então avisamos por mensagem, e o sim decide o que fazer. Sim antigo sem ouvinte ignora;
  // player antigo nunca avisa e o sim fica em coluna única. Os dois lados degradam sozinhos.
  const sinalizaTelaCheia = useCallback(() => {
    frameRef.current?.contentWindow?.postMessage({ smu: "fullscreen", on: fullscreen }, "*");
  }, [fullscreen]);

  useEffect(sinalizaTelaCheia, [sinalizaTelaCheia]);

  function toggleFullscreen() {
    if (!containerRef.current) return;
    // requestFullscreen é assíncrono e pode ser recusado (iOS, gesto inválido, iframe sem allow),
    // então o estado só muda pelo evento `fullscreenchange` — nunca aqui.
    if (!fullscreen) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  useEffect(() => {
    // Compara com o próprio container: qualquer outro elemento da página em tela cheia
    // também dispara este evento.
    const handleFS = () => setFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", handleFS);
    return () => {
      document.removeEventListener("fullscreenchange", handleFS);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.onended = null; }
    };
  }, []);

  if (!hasContent) return null;

  // Geração por IA desativada: não mostra os botões "Gerar/Preparando conteúdo".
  // O player abaixo só renderiza quando JÁ existe conteúdo pronto (ex: os games).
  if (generating || !isReady) return null;

  const currentSceneData = scenes[currentScene];
  const currentUrl = urls[currentScene];

  // ── Ficha da prática (o texto que ANTES ficava em volta do simulador) ──
  const abordagem = data.roteiro?.metadata?.abordagem_didatica;
  const explicacao = currentSceneData?.explicacao_texto;
  const destaques = currentSceneData?.destaques ?? [];
  const dica = currentSceneData?.dica_profissional;
  const temFicha = !!(currentSceneData?.titulo || abordagem || explicacao || destaques.length || dica);

  // A barra de transporte (play/anterior/próxima/volume) só faz sentido em conteúdo NARRADO —
  // várias cenas ou áudio de narração. Simulador é uma cena só e sem áudio nenhum: a barra ficava
  // ali sem função, ocupando tela e sugerindo ao aluno que havia algo para "tocar". Hoje isso vale
  // para 306 de 306 registros; a condição fica no lugar do `false` para o dia em que voltar a
  // existir conteúdo multi-cena de verdade.
  const temNarrativa = scenes.length > 1 || urls.some((u) => !!u?.audio);

  // ── Player ──
  // O quadro é DO SIMULADOR: nada de moldura, cabeçalho ou controle em volta dele. Todo o texto de
  // leitura (título, explicação, pontos-chave, dica) virou uma peça própria, LOGO ABAIXO do palco.
  // Esse enfeite era herança da animação narrada por IA — formato que não existe mais em produção
  // (306 de 306 registros têm 1 cena e nenhum áudio). Ocupava tela do simulador e deixava o aluno
  // adivinhando o que aqueles botões faziam: nada.
  return (
    <div
      ref={containerRef}
      className={fullscreen ? "flex h-full flex-col bg-[#0b0e14]" : "space-y-3"}
    >
      <audio ref={audioRef} preload="auto" />

      {/* Palco — só o simulador.
          Em tela cheia a proporção 16:9 sai de cena: `aspect-video` deriva a altura da LARGURA, que
          ali é a da tela inteira — o palco ficaria mais alto que a janela e o rodapé do console
          sairia do quadro. A borda também sai: em tela cheia não há o que emoldurar. */}
      <div
        className={`relative w-full overflow-hidden bg-[#0f172a] ${
          fullscreen ? "min-h-0 flex-1" : "aspect-video min-h-[470px] rounded-xl ring-1 ring-border"
        }`}
      >
        {/* Interactive widget (iframe with srcdoc) */}
        {currentUrl?.html ? (
          <iframe
            key={`widget-${currentScene}`}
            ref={frameRef}
            onLoad={sinalizaTelaCheia}
            srcDoc={preparaWidget(currentUrl.html)}
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
            allow="autoplay"
            title={currentSceneData?.titulo || t("Widget interativo")}
            style={{ display: "block" }}
          />
        ) : currentUrl?.widget ? (
          <iframe
            key={`widget-url-${currentScene}`}
            src={currentUrl.widget}
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
            title={currentSceneData?.titulo || t("Widget interativo")}
          />
        ) : currentUrl?.image ? (
          /* Fallback: static image */
          <img
            key={`img-${currentScene}`}
            src={currentUrl.image}
            alt={currentSceneData?.titulo || ""}
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap size={32} className="text-purple-400/40" />
          </div>
        )}

        {/* Tela cheia — o ÚNICO controle que fica sobre o palco, no canto que os simuladores deixam
            livre. A faixa preta com o título da cena saiu daqui: o título agora está na ficha
            abaixo, e em 7 registros sem `modo` aquela faixa cobria o cabeçalho do próprio console. */}
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-2 right-2 z-20 p-1.5 rounded-lg bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
        >
          {fullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
        </button>
      </div>

      {/* Player do YouTube. Fica FORA do iframe do simulador de propósito: o sandbox de produção
          não tem `allow-same-origin`, e lá dentro o player do YouTube nem sobe (testado — ver o
          cabeçalho de youtube-bridge.tsx). Só aparece quando o simulador pede; sim que não usa
          YouTube não vê nada. Continua DENTRO do container de tela cheia porque esconder o player
          viola a política da API. */}
      <YoutubeBridge frameRef={frameRef} />

      {/* Transporte — só existe para conteúdo NARRADO (ver `temNarrativa`). Nenhum simulador cai
          aqui hoje; some inteiro em vez de ficar inerte na tela. */}
      {temNarrativa && !fullscreen && (
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={prevSceneFn}
            disabled={currentScene === 0}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors disabled:opacity-30"
          >
            <SkipBack size={14} />
          </button>

          <button
            onClick={togglePlay}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-colors"
          >
            {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>

          <button
            onClick={nextScene}
            disabled={currentScene === scenes.length - 1}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors disabled:opacity-30"
          >
            <SkipForward size={14} />
          </button>

          {/* Progress dots */}
          <div className="flex-1 flex items-center justify-center gap-1">
            {scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => goToScene(i, playing)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentScene
                    ? "w-4 bg-purple-400"
                    : i < currentScene
                    ? "w-1.5 bg-purple-400/40"
                    : "w-1.5 bg-surface-3"
                }`}
              />
            ))}
          </div>

          {/* Volume — muta a NARRAÇÃO, não o simulador: o áudio da mesa mora no `AudioContext` de
              dentro do iframe e não passa por aqui. Por isso este botão só aparece quando existe
              narração de verdade; solto na tela ele prometia calar a mesa e não calava nada. */}
          <button
            onClick={() => {
              setMuted(!muted);
              if (audioRef.current) audioRef.current.muted = !muted;
            }}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          <span className="text-[10px] text-muted-light min-w-[60px] text-right">
            {currentScene + 1}/{scenes.length}
          </span>
        </div>
      )}

      {/* ── Ficha da prática ──────────────────────────────────────────────────────────────────
          É aqui que mora o que antes emoldurava o simulador. Fora do palco, largura inteira, para
          ler. Sai em tela cheia: ali a página é do console, e a altura desta ficha viraria corte
          na base do simulador. */}
      {temFicha && !fullscreen && (
        <section className="overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.07] to-indigo-500/[0.03]">
          <header className="flex items-start gap-3 border-b border-purple-500/10 px-4 py-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15">
              <Zap size={15} className="text-purple-300" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-foreground">
                {currentSceneData?.titulo || t("Sobre esta prática")}
              </h4>
              {abordagem && (
                <p className="mt-0.5 text-[11px] leading-relaxed text-muted-light">{abordagem}</p>
              )}
            </div>
          </header>

          {(explicacao || destaques.length > 0 || dica) && (
            <div className="space-y-3 p-4">
              {explicacao && (
                <p className="text-sm leading-relaxed text-foreground/80">{explicacao}</p>
              )}

              {destaques.length > 0 && (
                <div className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.05] p-3">
                  <div className="mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
                      {t("Pontos-chave")}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {destaques.map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                        <span className="text-xs text-foreground/70">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dica && (
                <div className="flex items-start gap-3 rounded-lg border border-amber-500/15 bg-amber-500/[0.05] p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                    <Sparkles size={13} className="text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                      {t("Dica do Profissional")}
                    </span>
                    <p className="mt-0.5 text-xs leading-relaxed text-amber-100/70">{dica}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
