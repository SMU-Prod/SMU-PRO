"use client";

import { useT } from "@/lib/i18n/ui";

export function YouTubeLivePlayer({ youtubeId }: { youtubeId: string }) {
  const t = useT();

  // allowFullScreen LIGADO — diferente do video-player.tsx da aula (que é false
  // de propósito). Uma palestra de 1h a 40vh num iPhone em retrato faz o aluno
  // sair para o YouTube, e aí perdemos chat, presença e o app inteiro.
  const src =
    `https://www.youtube.com/embed/${youtubeId}` +
    `?rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3` +
    `&origin=${process.env.NEXT_PUBLIC_APP_URL}`;

  return (
    <div className="w-full aspect-video bg-black">
      <iframe
        src={src}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        title={t("Transmissão ao vivo")}
      />
    </div>
  );
}
