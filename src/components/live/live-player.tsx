"use client";

import { YouTubeLivePlayer } from "./youtube-live-player";
import type { LiveEvent } from "@/types/database";

/**
 * A fronteira do híbrido. Todo o resto do app é cego ao provider: sala, chat,
 * presença e agenda nunca sabem qual player está tocando. Trocar de provider
 * é mexer aqui, não na arquitetura.
 */
export function LivePlayer({ event }: { event: LiveEvent }) {
  if (event.provider === "youtube" && event.youtube_id) {
    return <YouTubeLivePlayer youtubeId={event.youtube_id} />;
  }
  // Cloudflare entra aqui na fase 2 (plano separado).
  return null;
}
