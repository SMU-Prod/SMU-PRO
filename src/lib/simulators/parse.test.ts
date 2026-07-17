import { describe, it, expect } from "vitest";
import { slugify, cleanTitle, deriveSegment, deriveNivel, deriveTipo, dedupe } from "./parse";
import type { Simulator } from "./types";

describe("slugify", () => {
  it("normaliza para kebab-case sem acento", () => {
    expect(slugify("Yamaha CL5 — CL Editor")).toBe("yamaha-cl5-cl-editor");
    expect(slugify("Produção/Rider Técnico")).toBe("producao-rider-tecnico");
  });
});

describe("cleanTitle", () => {
  it("remove sufixos de marca do <title>", () => {
    expect(cleanTitle("CL Editor — Yamaha CL5 (Simulador SMU)")).toBe("CL Editor — Yamaha CL5");
    expect(cleanTitle("Simulador — grandMA3 (réplica funcional)")).toBe("grandMA3");
    expect(cleanTitle("SMU PRO · Briefing — as perguntas e os buracos")).toBe("Briefing — as perguntas e os buracos");
  });
  it("remove sufixo '— Simulador fiel' e decodifica entidades", () => {
    expect(cleanTitle("Behringer X32 / Midas M32 — Simulador fiel")).toBe("Behringer X32 / Midas M32");
    expect(cleanTitle("Allen &amp; Heath SQ — Simulador fiel")).toBe("Allen & Heath SQ");
  });
  it("cai no fallback quando vazio", () => {
    expect(cleanTitle("")).toBe("Simulador");
  });
});

describe("deriveSegment", () => {
  it("mapeia pasta de topo para segmento", () => {
    expect(deriveSegment("som")).toBe("som");
    expect(deriveSegment("som-basico")).toBe("som");
    expect(deriveSegment("producao-legado")).toBe("producao");
    expect(deriveSegment("efeito-basico")).toBe("efeito");
  });
});

describe("deriveNivel", () => {
  it("deriva nível do sufixo da pasta", () => {
    expect(deriveNivel("som-basico")).toBe("basico");
    expect(deriveNivel("producao-legado")).toBe("legado");
    expect(deriveNivel("luz")).toBe("avancado");
  });
});

describe("deriveTipo", () => {
  it("deriva tipo do basename", () => {
    expect(deriveTipo("yamaha-cl5-real")).toBe("real");
    expect(deriveTipo("dj-etica-lab")).toBe("lab");
    expect(deriveTipo("grandma3")).toBe("sim");
  });
});

describe("dedupe", () => {
  it("mantém a versão -real quando há par real/simples do mesmo equipamento", () => {
    const entries: Simulator[] = [
      { id: "som-yamaha-cl5", titulo: "CL5", segmento: "som", nivel: "avancado", tipo: "sim", arquivo: "/simuladores/som/yamaha-cl5.html" },
      { id: "som-yamaha-cl5-real", titulo: "CL5", segmento: "som", nivel: "avancado", tipo: "real", arquivo: "/simuladores/som/yamaha-cl5-real.html" },
    ];
    const out = dedupe(entries);
    expect(out).toHaveLength(1);
    expect(out[0].tipo).toBe("real");
  });
  it("preserva simuladores sem par", () => {
    const entries: Simulator[] = [
      { id: "luz-grandma3", titulo: "grandMA3", segmento: "luz", nivel: "avancado", tipo: "sim", arquivo: "/simuladores/luz/grandma3.html" },
    ];
    expect(dedupe(entries)).toHaveLength(1);
  });
});
