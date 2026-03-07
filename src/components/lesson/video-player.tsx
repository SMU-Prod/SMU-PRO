"use client";

import { useEffect, useRef } from "react";
import { updateWatchTime } from "@/lib/actions/progress";

interface VideoPlayerProps {
  youtubeId: string;
  lessonId: string;
}

export function VideoPlayer({ youtubeId, lessonId }: VideoPlayerProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const watchTimeRef = useRef(0);

  // Salva tempo assistido a cada 60 segundos (batch para reduzir writes no banco)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      watchTimeRef.current += 60;
      updateWatchTime(lessonId, watchTimeRef.current).catch(() => {});
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
      title="Vídeo da aula"
    />
  );
}
