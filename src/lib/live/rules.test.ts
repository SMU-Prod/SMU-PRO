import { describe, it, expect } from "vitest";
import { deriveProvider, validateLiveEvent, accumulateWatchTime } from "./rules";

describe("deriveProvider", () => {
  it("live aberta vai para o YouTube (custo zero)", () => {
    expect(deriveProvider("aberto")).toBe("youtube");
  });

  it("live restrita vai para o Cloudflare (gating real)", () => {
    expect(deriveProvider("restrito")).toBe("cloudflare");
  });
});

describe("validateLiveEvent", () => {
  const base = {
    portal: "aula" as const,
    acesso: "aberto" as const,
    provider: "youtube" as const,
    course_id: null,
    youtube_id: "abc123",
  };

  it("aceita uma live aberta de YouTube com youtube_id", () => {
    expect(validateLiveEvent(base)).toEqual({ ok: true });
  });

  it("rejeita live de YouTube sem youtube_id", () => {
    const r = validateLiveEvent({ ...base, youtube_id: null });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erro).toMatch(/youtube_id/i);
  });

  it("rejeita live restrita sem curso", () => {
    const r = validateLiveEvent({
      ...base, acesso: "restrito", provider: "cloudflare", course_id: null, youtube_id: null,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erro).toMatch(/curso/i);
  });

  it("rejeita live restrita no YouTube (publicaria conteudo pago)", () => {
    const r = validateLiveEvent({
      ...base, acesso: "restrito", provider: "youtube", course_id: "c1",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erro).toMatch(/restrita/i);
  });

  it("rejeita portal 'ambos' com curso — curso pertence a uma escola so", () => {
    const r = validateLiveEvent({ ...base, portal: "ambos", course_id: "c1" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erro).toMatch(/ambos/i);
  });

  it("aceita portal 'ambos' sem curso (palestra de topo de funil)", () => {
    expect(validateLiveEvent({ ...base, portal: "ambos", course_id: null })).toEqual({ ok: true });
  });
});

describe("accumulateWatchTime", () => {
  it("soma o intervalo quando o heartbeat chega dentro da janela", () => {
    const r = accumulateWatchTime(
      { duracao_segundos: 100, last_seen_at: "2026-07-15T10:00:00.000Z" },
      "2026-07-15T10:00:30.000Z",
    );
    expect(r).toBe(130);
  });

  it("NAO soma o buraco quando o aluno some e volta depois", () => {
    // Saiu 10:00, voltou 10:50 — nao pode contar 50 minutos que ele nao assistiu.
    const r = accumulateWatchTime(
      { duracao_segundos: 300, last_seen_at: "2026-07-15T10:00:00.000Z" },
      "2026-07-15T10:50:00.000Z",
    );
    expect(r).toBe(300);
  });

  it("aceita ate a janela maxima (90s) e nao alem", () => {
    const prev = { duracao_segundos: 0, last_seen_at: "2026-07-15T10:00:00.000Z" };
    expect(accumulateWatchTime(prev, "2026-07-15T10:01:30.000Z")).toBe(90);
    expect(accumulateWatchTime(prev, "2026-07-15T10:01:31.000Z")).toBe(0);
  });

  it("ignora heartbeat com relogio para tras (nao subtrai)", () => {
    const r = accumulateWatchTime(
      { duracao_segundos: 200, last_seen_at: "2026-07-15T10:05:00.000Z" },
      "2026-07-15T10:00:00.000Z",
    );
    expect(r).toBe(200);
  });

  it("ignora heartbeat duplicado (delta zero) sem somar nada", () => {
    const r = accumulateWatchTime(
      { duracao_segundos: 42, last_seen_at: "2026-07-15T10:00:00.000Z" },
      "2026-07-15T10:00:00.000Z",
    );
    expect(r).toBe(42);
  });

  it("nao corrompe o total quando a data e invalida (NaN envenenaria o log)", () => {
    const r = accumulateWatchTime(
      { duracao_segundos: 42, last_seen_at: "data-invalida" },
      "2026-07-15T10:00:00.000Z",
    );
    expect(r).toBe(42);
    expect(Number.isNaN(r)).toBe(false);
  });
});
