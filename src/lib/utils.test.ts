import { describe, it, expect } from "vitest";
import { formatMinutes, formatCurrency, slugify, getLevelLabel, getCategoryLabel, stripHtml } from "./utils";

describe("stripHtml", () => {
  it("remove tags mas mantém o texto", () => {
    expect(stripHtml("<b>oi</b> mundo")).toBe("oi mundo");
    expect(stripHtml("texto puro")).toBe("texto puro");
  });

  it("remove script/style com o conteúdo (não deixa payload solto)", () => {
    expect(stripHtml('<script>alert(1)</script>ola')).toBe("ola");
    expect(stripHtml('<style>.x{}</style>oi')).toBe("oi");
  });

  it("neutraliza vetor de XSS comum", () => {
    expect(stripHtml('<img src=x onerror=alert(1)>')).toBe("");
    expect(stripHtml('<a href="javascript:alert(1)">clica</a>')).toBe("clica");
  });

  it("não engole '<' de texto normal (não é tag)", () => {
    expect(stripHtml("2 < 3 e 3 > 2")).toBe("2 < 3 e 3 > 2");
  });

  it("faz trim", () => {
    expect(stripHtml("  <p>x</p>  ")).toBe("x");
  });
});

describe("formatMinutes", () => {
  it("formats minutes under 60", () => {
    expect(formatMinutes(30)).toBe("30min");
    expect(formatMinutes(0)).toBe("0min");
    expect(formatMinutes(59)).toBe("59min");
  });

  it("formats exact hours", () => {
    expect(formatMinutes(60)).toBe("1h");
    expect(formatMinutes(120)).toBe("2h");
  });

  it("formats hours and minutes", () => {
    expect(formatMinutes(90)).toBe("1h 30min");
    expect(formatMinutes(150)).toBe("2h 30min");
  });
});

describe("formatCurrency", () => {
  it("formats BRL currency", () => {
    expect(formatCurrency(99.9)).toContain("99,90");
    expect(formatCurrency(0)).toContain("0,00");
    expect(formatCurrency(1500)).toContain("1.500,00");
  });
});

describe("slugify", () => {
  it("converts text to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("Sonorização Básica")).toBe("sonorizacao-basica");
    expect(slugify("  Multiple   Spaces  ")).toBe("multiple-spaces");
  });

  it("removes special characters", () => {
    expect(slugify("DJ & Produção!")).toBe("dj-producao");
    expect(slugify("Módulo #1: Introdução")).toBe("modulo-1-introducao");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });
});

describe("getLevelLabel", () => {
  it("returns correct labels", () => {
    expect(getLevelLabel("trainee")).toBe("Trainee");
    expect(getLevelLabel("junior")).toBe("Junior");
    expect(getLevelLabel("pleno")).toBe("Pleno");
    expect(getLevelLabel("projeto_cultural")).toBe("MIT");
    expect(getLevelLabel("admin")).toBe("Admin");
  });

  it("returns raw value for unknown levels", () => {
    expect(getLevelLabel("unknown")).toBe("unknown");
  });
});

describe("getCategoryLabel", () => {
  it("returns correct labels", () => {
    expect(getCategoryLabel("som")).toBe("Sonorização");
    expect(getCategoryLabel("luz")).toBe("Iluminação");
    expect(getCategoryLabel("dj")).toBe("DJ");
  });

  it("returns raw value for unknown categories", () => {
    expect(getCategoryLabel("xyz")).toBe("xyz");
  });
});

