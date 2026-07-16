import { describe, it, expect } from "vitest";
import { computeStreak, toBrtDateString } from "./streak";

describe("computeStreak", () => {
  it("dias consecutivos a partir de hoje", () => {
    expect(computeStreak(["2026-07-16", "2026-07-15", "2026-07-14"], "2026-07-16")).toBe(3);
  });

  it("BUG #38: dias alternados NÃO contam como sequência", () => {
    // 16, 14, 12 — dia sim, dia não. Antes retornava 3; correto é 1.
    expect(computeStreak(["2026-07-16", "2026-07-14", "2026-07-12"], "2026-07-16")).toBe(1);
  });

  it("conta a partir de ontem (ainda não estudou hoje)", () => {
    expect(computeStreak(["2026-07-15", "2026-07-14"], "2026-07-16")).toBe(2);
  });

  it("último estudo antes de ontem → streak 0", () => {
    expect(computeStreak(["2026-07-13", "2026-07-12"], "2026-07-16")).toBe(0);
  });

  it("buraco no meio corta a sequência", () => {
    expect(computeStreak(["2026-07-16", "2026-07-15", "2026-07-13"], "2026-07-16")).toBe(2);
  });

  it("datas repetidas no mesmo dia contam uma vez", () => {
    expect(computeStreak(["2026-07-16", "2026-07-16", "2026-07-15"], "2026-07-16")).toBe(2);
  });

  it("sem atividade → 0", () => {
    expect(computeStreak([], "2026-07-16")).toBe(0);
  });
});

describe("toBrtDateString", () => {
  it("23h30 BRT (02h30 UTC do dia seguinte) fica no dia BRT correto", () => {
    // 2026-07-15T02:30:00Z = 2026-07-14 23:30 em São Paulo (UTC-3)
    expect(toBrtDateString("2026-07-15T02:30:00Z")).toBe("2026-07-14");
  });
});
