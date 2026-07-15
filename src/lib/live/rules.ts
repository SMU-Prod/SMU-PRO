import type { LiveAccess, LiveProvider, LivePortalDb } from "@/types/database";

/**
 * `acesso` é a verdade de negócio; `provider` é consequência.
 * O admin escolhe se a live é aberta ou restrita — o sistema deriva o resto.
 * Aberta → YouTube (custo zero, alcance). Restrita → Cloudflare (gating real).
 */
export function deriveProvider(acesso: LiveAccess): LiveProvider {
  return acesso === "restrito" ? "cloudflare" : "youtube";
}

export type ValidateLiveInput = {
  portal: LivePortalDb;
  acesso: LiveAccess;
  provider: LiveProvider;
  course_id: string | null;
  youtube_id: string | null;
};

export type ValidationResult = { ok: true } | { ok: false; erro: string };

/**
 * Espelha os CHECK constraints da migration 20260721. Existe em duplicata de
 * propósito: o banco é a rede de segurança, isto aqui é a mensagem de erro
 * legível que o admin vê antes de tentar gravar.
 */
export function validateLiveEvent(input: ValidateLiveInput): ValidationResult {
  const { portal, acesso, provider, course_id, youtube_id } = input;

  if (acesso === "restrito" && !course_id) {
    return { ok: false, erro: "Live restrita exige um curso: é a matrícula nele que libera o acesso." };
  }
  if (acesso === "restrito" && provider !== "cloudflare") {
    return { ok: false, erro: "Live restrita não pode ir para o YouTube — publicaria conteúdo pago." };
  }
  if (provider === "youtube" && !youtube_id) {
    return { ok: false, erro: "Live no YouTube exige o youtube_id da transmissão." };
  }
  if (portal === "ambos" && course_id) {
    return { ok: false, erro: "Portal 'ambos' não pode ter curso: curso pertence a uma escola só." };
  }
  return { ok: true };
}

export type WatchState = { duracao_segundos: number; last_seen_at: string };

/**
 * Acumula tempo REALMENTE assistido.
 *
 * Não usar `last_seen_at - joined_at`: quem entra 10:00, some 10:05 e volta
 * 10:50 assistiu 15min, não 60. Este log existe para auditoria (NR-01 Anexo II
 * 4.7.1) — número inflado é pior que número ausente.
 *
 * Só soma o intervalo se o heartbeat anterior estiver dentro de `maxGapSegundos`
 * (padrão 90s = 3× o intervalo de 30s do cliente, tolerando uma perda).
 */
export function accumulateWatchTime(
  prev: WatchState,
  agoraIso: string,
  maxGapSegundos = 90,
): number {
  const delta = (new Date(agoraIso).getTime() - new Date(prev.last_seen_at).getTime()) / 1000;
  if (delta <= 0) return prev.duracao_segundos;        // relógio para trás / heartbeat duplicado
  if (delta > maxGapSegundos) return prev.duracao_segundos; // esteve ausente — não conta o buraco
  return prev.duracao_segundos + Math.round(delta);
}
