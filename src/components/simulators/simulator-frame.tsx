"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";
import { PONTE_TOQUE, PONTE_MOUSE, precisaPonteMouse } from "@/lib/simulators/toque";

export function SimulatorFrame({ src, titulo }: { src: string; titulo: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [telaCheiaNativa, setTelaCheiaNativa] = useState(false);
  const [expandidoCSS, setExpandidoCSS] = useState(false);
  const expandido = telaCheiaNativa || expandidoCSS;

  // Mesma correção do player da aula (ver animation-player.tsx): `requestFullscreen?.()` sozinho
  // não faz NADA no Safari do iPhone, onde o método não existe em <div> — o botão ficava morto e
  // sem erro. A API nativa vira a primeira tentativa; recusada ou ausente, entra a sobreposição
  // em CSS, que funciona em todo navegador.
  function alternaExpandido() {
    const el = wrapRef.current;
    if (!el) return;
    if (expandido) {
      if (document.fullscreenElement === el) document.exitFullscreen?.().catch(() => {});
      setExpandidoCSS(false);
      return;
    }
    const nativo = el.requestFullscreen?.bind(el);
    if (!nativo) { setExpandidoCSS(true); return; }
    nativo().catch(() => setExpandidoCSS(true));
  }

  useEffect(() => {
    const aoMudar = () => setTelaCheiaNativa(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", aoMudar);
    return () => document.removeEventListener("fullscreenchange", aoMudar);
  }, []);

  useEffect(() => {
    if (!expandidoCSS) return;
    const aoTeclar = (e: KeyboardEvent) => { if (e.key === "Escape") setExpandidoCSS(false); };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [expandidoCSS]);

  // Aqui o simulador vem de `public/` por URL, não por srcDoc — então a ponte de toque não pode
  // ser costurada no HTML como o player da aula faz. Este iframe é MESMA ORIGEM (o sandbox tem
  // `allow-same-origin`), então dá para inserir o <style>/<script> no documento dele depois que
  // carrega. Sem isto, o arraste do fader nesta página continuaria virando rolagem no dedo.
  const injetaPonte = useCallback(() => {
    try {
      const doc = frameRef.current?.contentDocument;
      if (!doc?.body || doc.getElementById("smu-ponte-toque")) return;

      // A ponte de mouse é condicional pelo mesmo critério do player: aqui dá para ler o HTML
      // já carregado e decidir. Sem essa condição, um sim que já usa ponteiro andaria 2× por gesto.
      const fonte = doc.documentElement.outerHTML;
      const pontes = PONTE_TOQUE + (precisaPonteMouse(fonte) ? PONTE_MOUSE : "");

      const cx = doc.createElement("div");
      cx.id = "smu-ponte-toque";
      cx.innerHTML = pontes;
      // `innerHTML` não EXECUTA <script>: cada um precisa ser recriado para o navegador rodar.
      // O <style> passa direto; só o script precisa da cópia.
      for (const no of Array.from(cx.childNodes)) {
        if (no.nodeName === "SCRIPT") {
          const s = doc.createElement("script");
          s.textContent = (no as HTMLScriptElement).textContent;
          doc.body.appendChild(s);
        } else {
          doc.body.appendChild(no);
        }
      }
      doc.body.appendChild(cx); // marcador de idempotência (fica vazio)
    } catch {
      // Origem opaca (não deveria acontecer aqui, o sandbox tem allow-same-origin): o simulador
      // só perde a ponte de toque, nada quebra.
    }
  }, []);

  // O `onLoad` do iframe NÃO basta, e o motivo é uma corrida difícil de ver: o `src` já vem no
  // HTML do servidor, então em página em cache o simulador termina de carregar ANTES do React
  // hidratar — quando o handler é anexado, o evento `load` já passou e a ponte nunca entra.
  // Medido em 31/07/2026: na primeira visita funcionava (dev server compilando = carregamento
  // lento) e na segunda não, sem erro nenhum no console. Este efeito fecha o buraco: injeta
  // agora se já estiver pronto, e senão espera o documento do próprio simulador. A marca de
  // idempotência (`#smu-ponte-toque`) garante que os dois caminhos não injetem duas vezes.
  useEffect(() => {
    injetaPonte();
    const doc = frameRef.current?.contentDocument;
    if (!doc || doc.readyState === "complete") return;
    doc.addEventListener("DOMContentLoaded", injetaPonte);
    return () => doc.removeEventListener("DOMContentLoaded", injetaPonte);
  }, [injetaPonte, src]);

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2">
        <Link href="/simuladores" className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <span className="truncate text-sm font-medium text-foreground">{titulo}</span>
        <button
          onClick={alternaExpandido}
          className="ml-auto flex min-h-11 items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:text-foreground"
        >
          {expandido ? <Minimize size={15} /> : <Maximize size={15} />}
          {expandido ? "Sair" : "Tela cheia"}
        </button>
      </div>
      <div
        ref={wrapRef}
        className={
          expandidoCSS
            ? "fixed inset-0 z-[9999] bg-black"
            : "relative flex-1 bg-black"
        }
      >
        <iframe
          ref={frameRef}
          src={src}
          onLoad={injetaPonte}
          title={titulo}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; microphone; camera; midi"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
        />
        {/* Na sobreposição em CSS o cabeçalho fica atrás: sem este botão não há como voltar
            num aparelho sem teclado. Em tela cheia nativa o navegador já oferece a saída. */}
        {expandidoCSS && (
          <button
            onClick={alternaExpandido}
            aria-label="Sair da tela cheia"
            className="absolute right-1 top-1 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-black/60 text-white/80 hover:bg-black/80 hover:text-white"
          >
            <Minimize size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
