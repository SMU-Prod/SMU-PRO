"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize } from "lucide-react";

export function SimulatorFrame({ src, titulo }: { src: string; titulo: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const goFullscreen = () => {
    const el = wrapRef.current;
    if (el?.requestFullscreen) el.requestFullscreen().catch(() => {});
  };

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2">
        <Link href="/simuladores" className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <span className="truncate text-sm font-medium text-foreground">{titulo}</span>
        <button
          onClick={goFullscreen}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:text-foreground"
        >
          <Maximize size={15} /> Tela cheia
        </button>
      </div>
      <div ref={wrapRef} className="relative flex-1 bg-black">
        <iframe
          src={src}
          title={titulo}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; microphone; camera; midi"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
        />
      </div>
    </div>
  );
}
