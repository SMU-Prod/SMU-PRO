"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ============================================================================
   PONTE DO YOUTUBE — o player vive AQUI, na moldura da aula, nunca no simulador
   ----------------------------------------------------------------------------
   POR QUE ESTA PONTE EXISTE (medido, não deduzido — 29/07/2026)

   O simulador é montado em <iframe srcDoc sandbox="allow-scripts allow-popups">,
   SEM `allow-same-origin`. Isso dá origem opaca (`location.origin === "null"`).
   Teste feito reproduzindo esse sandbox exato, lado a lado com um controle que
   só diferia pelo `allow-same-origin`:

     DENTRO do sandbox de produção          | COM allow-same-origin (controle)
     --------------------------------------|---------------------------------
     script iframe_api carregou       ✓     | carregou                     ✓
     onYouTubeIframeAPIReady disparou ✓     | disparou                     ✓
     new YT.Player() sem exceção      ✓     | sem exceção                  ✓
     onReady .......................  NUNCA | +675ms                       ✓
     onStateChange .................  NUNCA | -1 → 3 → 1 (tocando)         ✓
     onError .......................  NUNCA | —
     quadro do vídeo ...............  PRETO | vídeo tocou até o fim
     localStorage ..................  SecurityError: "The document is
       sandboxed and lacks the 'allow-same-origin' flag."

   O embed cru (sem a JS API, `youtube.com/embed/...` direto) também morre: o
   iframe dispara `onload`, mas o quadro fica PRETO e o player não responde nem
   a postMessage direto. A causa é a mesma nos dois casos — o iframe aninhado
   HERDA o sandbox do pai, então a própria página do player do YouTube roda sem
   `allow-same-origin` e não consegue subir.

   Conclusão testada: NÃO EXISTE jeito de tocar YouTube dentro do simulador.
   Por isso o player mora na moldura (esta página, origem real) e o simulador
   sandboxado só manda comando por postMessage. O caminho de volta funciona: no
   teste a moldura recebeu `play`/`ler`/`pause` vindos de uma origem "null",
   executou tudo e devolveu ready/state/tempo ao simulador.

   REGRAS DA API DO YOUTUBE QUE ESTE ARQUIVO PRECISA RESPEITAR
   - O player TEM de ficar VISÍVEL. Nada de display:none, visibility:hidden,
     tamanho 0, opacidade 0 ou posicionado fora da tela. Já houve o bug de
     `left:-9999px` aqui no projeto — na prática aquilo extraía só o áudio.
     Não reintroduzir.
   - O áudio do stream NÃO pode ser processado, separado nem modificado. Por
     isso a ponte só expõe play/pause/seek/volume — nunca EQ, filtro ou scratch.
   - Usa youtube.com (não o -nocookie): com -nocookie a sessão logada do aluno
     não é vista e o YouTube Premium dele não vale.
   ============================================================================ */

type Slot = {
  id: string;
  label: string;
  videoId: string | null;
  player: YTPlayer | null;
  pronto: boolean;
};

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  seekTo(s: number, allow: boolean): void;
  setVolume(v: number): void;
  mute(): void;
  unMute(): void;
  loadVideoById(id: string): void;
  cueVideoById(id: string): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  destroy(): void;
}

declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement | string, cfg: unknown) => YTPlayer; PlayerState?: Record<string, number> };
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Carrega a lib uma única vez por página, mesmo com várias pontes montadas.
let apiPromise: Promise<void> | null = null;
function carregaApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<void>((resolve, reject) => {
    const anterior = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { anterior?.(); resolve(); };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.onerror = () => reject(new Error("iframe_api bloqueada"));
    document.head.appendChild(s);
  });
  return apiPromise;
}

export function YoutubeBridge({ frameRef }: { frameRef: React.RefObject<HTMLIFrameElement | null> }) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const slotsRef = useRef<Slot[]>([]);
  const hostRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [erroApi, setErroApi] = useState<string | null>(null);
  // Espelho dos slots para ler de dentro dos ouvintes de `message` sem recriá-los a cada
  // render. Atualizado em efeito (nunca durante o render) e lido só fora do render.
  useEffect(() => { slotsRef.current = slots; }, [slots]);

  // Só aceita mensagem vinda do iframe do simulador. A origem é "null" (sandbox
  // opaco), então comparar `e.origin` não serve para nada aqui — o que identifica
  // o remetente é a referência da janela.
  const doSim = useCallback((e: MessageEvent) => e.source === frameRef.current?.contentWindow, [frameRef]);

  const responde = useCallback((msg: Record<string, unknown>) => {
    frameRef.current?.contentWindow?.postMessage({ smu: "ytev", ...msg }, "*");
  }, [frameRef]);

  // ── monta/desmonta slot ────────────────────────────────────────────────────
  const montaSlot = useCallback((id: string, label: string) => {
    setSlots((s) => (s.some((x) => x.id === id) ? s : [...s, { id, label, videoId: null, player: null, pronto: false }]));
  }, []);

  const criaPlayer = useCallback(async (slot: Slot, videoId: string) => {
    try { await carregaApi(); } catch { setErroApi("O YouTube não carregou neste navegador (bloqueador ou rede)."); return; }
    if (!window.YT?.Player) return;
    // O <div> host só existe depois que o React pinta o slot. Espera ele aparecer em vez
    // de desistir calado — senão, num render lento, o vídeo simplesmente não montaria.
    let host = hostRefs.current[slot.id];
    for (let i = 0; i < 20 && !host; i++) {
      await new Promise((r) => setTimeout(r, 50));
      host = hostRefs.current[slot.id];
    }
    if (!host) return;

    if (slot.player) { try { slot.player.loadVideoById(videoId); slot.player.pauseVideo(); } catch { /* player morto */ } return; }

    const p = new window.YT.Player(host, {
      width: "100%", height: "100%", videoId,
      // controls:1 — o aluno precisa poder agir no player oficial (regra da API).
      playerVars: { rel: 0, playsinline: 1, controls: 1, origin: window.location.origin },
      events: {
        onReady: () => {
          setSlots((s) => s.map((x) => (x.id === slot.id ? { ...x, pronto: true } : x)));
          responde({ ev: "ready", slot: slot.id });
        },
        onStateChange: (ev: { data: number }) => responde({ ev: "state", slot: slot.id, data: ev.data }),
        onError: (ev: { data: number }) => responde({ ev: "error", slot: slot.id, data: ev.data }),
      },
    });
    setSlots((s) => s.map((x) => (x.id === slot.id ? { ...x, player: p, videoId } : x)));
  }, [responde]);

  // ── ouvinte de comandos do simulador ───────────────────────────────────────
  useEffect(() => {
    async function onMsg(e: MessageEvent) {
      const d = e.data as Record<string, unknown> | null;
      if (!d || d.smu !== "yt" || !doSim(e)) return;
      const cmd = String(d.cmd || "");
      const id = String(d.slot ?? "A");
      const slot = slotsRef.current.find((x) => x.id === id);
      const pl = slot?.player;

      switch (cmd) {
        // O sim pergunta "existe ponte aí fora?". Sem resposta em ~700ms ele
        // assume que está rodando solto (fora do player) e usa o modo local.
        case "hello":
          responde({ ev: "hello", ok: true });
          return;
        case "mount":
          montaSlot(id, String(d.label || `DECK ${id}`));
          return;
        case "load": {
          const vid = String(d.videoId || "");
          if (!/^[A-Za-z0-9_-]{11}$/.test(vid)) { responde({ ev: "error", slot: id, data: -2 }); return; }
          montaSlot(id, String(d.label || `DECK ${id}`));
          // espera o React pintar o host antes de instanciar o player
          setTimeout(() => {
            const atual = slotsRef.current.find((x) => x.id === id);
            if (atual) criaPlayer(atual, vid);
          }, 60);
          return;
        }
        case "play": try { pl?.playVideo(); } catch { /* ainda não pronto */ } return;
        case "pause": try { pl?.pauseVideo(); } catch { /* ainda não pronto */ } return;
        case "stop": try { pl?.stopVideo(); } catch { /* ainda não pronto */ } return;
        case "seek": try { pl?.seekTo(Number(d.val) || 0, true); } catch { /* ainda não pronto */ } return;
        case "volume": try { pl?.setVolume(Math.max(0, Math.min(100, Number(d.val) || 0))); } catch { /* ainda não pronto */ } return;
        case "unmount":
          try { pl?.destroy(); } catch { /* já destruído */ }
          setSlots((s) => s.filter((x) => x.id !== id));
          return;
        // Busca: a chave do YouTube NUNCA vai para o navegador — quem fala com a
        // API do Google é a rota do servidor. 1 busca = 100 unidades de quota,
        // por isso o simulador só chama isto quando o aluno confirma.
        case "buscar": {
          const q = String(d.q || "").slice(0, 120);
          try {
            const r = await fetch(`/api/youtube/buscar?q=${encodeURIComponent(q)}`);
            const j = await r.json();
            responde({ ev: "busca", reqId: d.reqId, itens: j.itens || [], erro: j.erro || null });
          } catch {
            responde({ ev: "busca", reqId: d.reqId, itens: [], erro: "Falha de rede na busca." });
          }
          return;
        }
      }
    }
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [doSim, responde, montaSlot, criaPlayer]);

  // Relógio do stream: o simulador precisa do tempo para desenhar a linha do
  // tempo, mas não pode ler o player (não é dele). 4x por segundo basta.
  useEffect(() => {
    if (!slots.some((s) => s.pronto)) return;
    const t = setInterval(() => {
      slotsRef.current.forEach((s) => {
        if (!s.player || !s.pronto) return;
        try {
          responde({ ev: "tempo", slot: s.id, t: s.player.getCurrentTime(), dur: s.player.getDuration(), st: s.player.getPlayerState() });
        } catch { /* player trocando de vídeo */ }
      });
    }, 250);
    return () => clearInterval(t);
  }, [slots, responde]);

  useEffect(() => () => { slotsRef.current.forEach((s) => { try { s.player?.destroy(); } catch { /* já foi */ } }); }, []);

  if (!slots.length) return null;

  return (
    <div className="shrink-0 rounded-lg border border-red-500/25 bg-[#0c0e12] p-2">
      <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="rounded bg-red-600/90 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white">YOUTUBE</span>
        <span className="text-[11px] text-white/80">
          A música toca <b>no player oficial do YouTube</b> — por isso ele fica à vista.
        </span>
        <span className="text-[10px] text-white/45">
          Em streaming valem play, pause, busca e volume. EQ, filtro e scratch só em faixa do pen ou do Banco SMU.
        </span>
      </div>
      {erroApi && <div className="mb-1.5 text-[11px] text-red-300">{erroApi}</div>}
      <div className="flex flex-wrap gap-2">
        {slots.map((s) => (
          <div key={s.id} className="flex flex-col gap-1">
            <span className="text-[9px] font-bold tracking-wider text-amber-400">{s.label}</span>
            {/* Tamanho real e visível. Não encolher, não esconder: é exigência da API. */}
            <div
              ref={(el) => { hostRefs.current[s.id] = el; }}
              className="h-[158px] w-[280px] overflow-hidden rounded bg-black sm:h-[180px] sm:w-[320px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
