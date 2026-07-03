"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type ZoomImg = { src: string; alt: string };

/**
 * Lupa reutilizável: clicar em qualquer <img> dentro do container abre a imagem
 * ampliada em tela cheia, com zoom (+/-/roda do mouse) para ler o que está escrito.
 *
 * Uso:
 *   const { onContentClick, lightbox } = useImageLightbox();
 *   <div onClick={onContentClick} dangerouslySetInnerHTML={...} />
 *   {lightbox}
 */
export function useImageLightbox() {
  const [img, setImg] = useState<ZoomImg | null>(null);

  const onContentClick = useCallback((e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
    if (t && t.tagName === "IMG") {
      const el = t as HTMLImageElement;
      // ignora ícones minúsculos (não são conteúdo pra ler)
      if (el.naturalWidth && el.naturalWidth < 48) return;
      setImg({ src: el.currentSrc || el.src, alt: el.alt || "" });
    }
  }, []);

  const close = useCallback(() => setImg(null), []);

  const lightbox = img ? <ImageLightbox img={img} onClose={close} /> : null;

  return { onContentClick, lightbox, openImage: setImg };
}

function ImageLightbox({ img, onClose }: { img: ZoomImg; onClose: () => void }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(6, s + 0.5));
      if (e.key === "-") setScale((s) => Math.max(1, s - 0.5));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(6, Math.max(1, s + (e.deltaY < 0 ? 0.3 : -0.3))));
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur";

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Controles */}
      <div className="absolute top-4 right-4 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
        <button className={btn} title="Diminuir" onClick={() => setScale((s) => Math.max(1, s - 0.5))}>
          <ZoomOut size={18} />
        </button>
        <button className={btn} title="Aumentar" onClick={() => setScale((s) => Math.min(6, s + 0.5))}>
          <ZoomIn size={18} />
        </button>
        <button className={btn} title="Tamanho original" onClick={() => setScale(1)}>
          <RotateCcw size={16} />
        </button>
        <button className={btn} title="Fechar (Esc)" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* Imagem */}
      <div
        className="max-w-[96vw] max-h-[92vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          onClick={() => setScale((s) => (s > 1 ? 1 : 2.5))}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            transition: "transform 0.15s ease-out",
            cursor: scale > 1 ? "zoom-out" : "zoom-in",
          }}
          className="block max-w-full select-none"
          draggable={false}
        />
      </div>

      {img.alt && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[90vw] rounded-full bg-black/60 px-4 py-1.5 text-center text-sm text-white/80 backdrop-blur">
          {img.alt}
        </div>
      )}
    </div>
  );
}
