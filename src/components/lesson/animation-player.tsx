"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Zap, Loader2, ChevronDown, ChevronUp, Play, Pause,
  SkipForward, SkipBack, Volume2, VolumeX, Sparkles, BookOpen,
  CheckCircle2, Lightbulb, Maximize2, Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/ui";

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
  custo_usd?: number;
}

interface AnimationPlayerProps {
  lessonId: string;
  titulo: string;
  conteudo: string;
  categoria: string;
  isAdmin?: boolean;  // Só admin pode gerar. Aluno só vê se já existe.
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

export function AnimationPlayer({ lessonId, titulo, conteudo, categoria, isAdmin = false }: AnimationPlayerProps) {
  const t = useT();
  const [data, setData] = useState<AnimationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Player state
  const [currentScene, setCurrentScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showText, setShowText] = useState(true);
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
  const isHybrid = data?.model?.includes("hybrid") || data?.model?.includes("interactive");

  useEffect(() => { playingRef.current = playing; }, [playing]);

  // ── Check existing ──
  useEffect(() => { checkExisting(); }, [lessonId]);

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
          setError(t("Erro na geração. Tente novamente."));
          setGenerating(false);
          clearInterval(interval);
          pollIntervalRef.current = null;
        }
      } catch { /* keep polling */ }
    }, 5000);
    pollIntervalRef.current = interval;
    setTimeout(() => clearInterval(interval), 300_000);
  }

  // ── Generate ──
  async function handleGenerate() {
    if (loading || generating) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/animation/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo, categoria, force: false }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao gerar conteúdo");
      }
      const result = await res.json();
      if (result.status === "ready") {
        setData(result);
      } else {
        setGenerating(true);
        pollStatus();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ── Navigation ──
  const goToScene = useCallback((index: number, autoplay: boolean) => {
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
  }, [isReady, scenes, urls, muted]);

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

  // ── Badge ──
  const engineLabel = data?.model?.includes("hybrid")
    ? t("Híbrido")
    : isHybrid
    ? t("Interativo")
    : t("IA Visual");

  const currentMode = currentSceneData?.modo;
  const nivel = data?.roteiro?.classificacao?.nivel;

  // Admin: regenerar com force
  async function handleRegenerate() {
    if (loading || generating) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch("/api/animation/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo, categoria, force: true }),
      });
      if (!res.ok) throw new Error("Erro ao regenerar");
      const result = await res.json();
      if (result.status === "ready") {
        setData(result);
        setCurrentScene(0);
      } else {
        setGenerating(true);
        pollStatus();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ── Player ──
  return (
    <div
      ref={containerRef}
      className={`rounded-xl bg-purple-500/5 border border-purple-500/20 overflow-hidden ${
        fullscreen ? "flex h-full flex-col bg-[#0b0e14]" : ""
      }`}
    >
      <audio ref={audioRef} preload="auto" />

      {/* Header */}
      <div className="flex shrink-0 items-center justify-between px-4 py-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Zap size={14} className="text-purple-400" />
          <span className="text-sm font-medium text-foreground">
            {isHybrid ? t("Simulação Interativa") : t("Conteúdo Visual")}
          </span>
          <span className="text-[10px] text-muted-light px-1.5 py-0.5 rounded-full bg-surface-3">
            {engineLabel}
          </span>
          {nivel && (
            <span className="text-[10px] text-muted-light px-1.5 py-0.5 rounded-full bg-surface-3 capitalize">
              {nivel}
            </span>
          )}
          <span className="text-[10px] text-muted-light">
            {scenes.length} {t("cenas")}
          </span>
        </button>
        <div className="flex items-center gap-2">
          {/* Admin: Regenerar (IA) removido a pedido */}
          {false && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleRegenerate}
              disabled={loading || generating}
              className="gap-1.5 text-xs border-smu-amber/30 text-smu-amber hover:bg-smu-amber/10 h-7 px-3"
            >
              {loading ? <Loader2 size={12} className="animate-spin" /> : <Zap size={12} />}
              {loading ? "Regenerando..." : "Regenerar"}
            </Button>
          )}
          <button onClick={() => setExpanded(!expanded)} className="p-1 hover:opacity-70">
            {expanded ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className={`px-4 pb-4 space-y-3 ${fullscreen ? "flex min-h-0 flex-1 flex-col" : ""}`}>
          {/* Widget canvas — responsivo: altura mínima confortável em celular/tablet, 16:9 quando sobra espaço.
              Em tela cheia o 16:9 sai de cena: `aspect-video` deriva a altura da largura, que ali é a da tela
              inteira, então o palco ficaria mais alto que a janela e o `overflow-hidden` cortaria a base. */}
          <div
            className={`relative w-full rounded-lg overflow-hidden bg-[#0f172a] ${
              fullscreen ? "min-h-0 flex-1" : "aspect-video min-h-[470px]"
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

            {/* Scene label overlay — oculto nos simuladores interativos: a faixa
                cobria o cabeçalho/logo do próprio console (o simulador ocupa o quadro todo). */}
            {currentMode !== "widget" && (
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded text-white font-medium uppercase tracking-wider bg-purple-500/80">
                  {currentMode === "image" ? t("imagem") : currentSceneData?.tipo?.replace(/_/g, " ") || t("cena")}
                </span>
                <span className="text-xs font-medium text-white/80 line-clamp-1">
                  {currentSceneData?.titulo}
                </span>
              </div>
            </div>
            )}

            {/* Fullscreen button */}
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-2 right-2 z-20 p-1.5 rounded-lg bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
            >
              {fullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>

          {/* Controls */}
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

            {/* Toggle text */}
            <button
              onClick={() => setShowText(!showText)}
              className={`p-1.5 rounded-lg transition-colors ${
                showText ? "text-purple-400 bg-purple-500/10" : "text-muted hover:text-foreground hover:bg-hover"
              }`}
              title={showText ? t("Ocultar texto") : t("Mostrar texto")}
            >
              <BookOpen size={14} />
            </button>

            {/* Volume */}
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

          {/* Didactic panel — card-based visual layout.
              Oculto em tela cheia: a altura que ele ocuparia sairia do palco do simulador. */}
          {showText && currentSceneData && !fullscreen && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
              {/* Card: Conceito + Explicação */}
              {currentSceneData.explicacao_texto && (
                <div className="rounded-xl bg-gradient-to-br from-purple-500/8 to-indigo-500/5 border border-purple-500/15 p-3">
                  {currentSceneData.conceito_tecnico && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-1 h-4 rounded-full bg-purple-400" />
                      <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wide">
                        {currentSceneData.conceito_tecnico}
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    {currentSceneData.explicacao_texto}
                  </p>
                </div>
              )}

              {/* Card: Pontos-chave */}
              {currentSceneData.destaques && currentSceneData.destaques.length > 0 && (
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/8 to-blue-500/5 border border-cyan-500/15 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <CheckCircle2 size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-semibold text-cyan-300 uppercase tracking-wide">{t("Pontos-chave")}</span>
                  </div>
                  <div className="space-y-1.5">
                    {currentSceneData.destaques.map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-1.5 shrink-0" />
                        <span className="text-xs text-foreground/70">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card: Dica profissional (full width) */}
              {currentSceneData.dica_profissional && (
                <div className="md:col-span-2 rounded-xl bg-gradient-to-r from-amber-500/8 to-orange-500/5 border border-amber-500/15 p-3 flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
                    <Sparkles size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wide">{t("Dica do Profissional")}</span>
                    <p className="text-xs text-amber-100/70 leading-relaxed mt-0.5">
                      {currentSceneData.dica_profissional}
                    </p>
                  </div>
                </div>
              )}

              {/* Interactivity hint */}
              {isHybrid && currentUrl?.html && (
                <div className="md:col-span-2 flex items-center gap-1.5 text-[10px] text-purple-400/50 px-1">
                  <Zap size={10} />
                  <span>{t("Interaja com o widget acima — mova sliders e clique nos elementos")}</span>
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center gap-2 pt-1 border-t border-purple-500/10">
            <Sparkles size={10} className="text-purple-400 shrink-0" />
            <span className="text-[10px] text-muted-light line-clamp-1">
              {data.roteiro?.metadata?.abordagem_didatica}
            </span>
            {data.custo_usd != null && data.custo_usd > 0 && (
              <span className="text-[10px] text-muted-light ml-auto">
                ~${data.custo_usd.toFixed(3)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
