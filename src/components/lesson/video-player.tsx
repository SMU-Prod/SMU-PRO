"use client";

import { useEffect, useRef } from "react";
import { updateWatchTime } from "@/lib/actions/progress";
import { useT } from "@/lib/i18n/ui";

interface VideoPlayerProps {
  youtubeId: string;
  lessonId: string;
}

export function VideoPlayer({ youtubeId, lessonId }: VideoPlayerProps) {
  const t = useT();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Registra 60s de cada vez, mas SÓ quando a aba está visível — evita acumular
  // tempo de vídeo que ninguém está assistindo (aba de fundo / esquecida aberta).
  // O servidor incrementa de forma atômica, então remontar não desfaz o total.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState !== "visible") return;
      updateWatchTime(lessonId, 60).catch((err) => console.error("[VideoPlayer Watch Time Error]", err));
    }, 60_000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [lessonId]);

  const embedUrl =
    `https://www.youtube.com/embed/${youtubeId}` +
    `?rel=0&modestbranding=1&controls=1&disablekb=0&fs=0&iv_load_policy=3&origin=${process.env.NEXT_PUBLIC_APP_URL}`;

  return (
    <iframe
      src={embedUrl}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={false}
      title={t("Vídeo da aula")}
    />
  );
}
