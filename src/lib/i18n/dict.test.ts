import { describe, it, expect } from "vitest";
import { tr } from "./dict";
import { DICT_AUTO } from "./dict.generated";

describe("i18n tr()", () => {
  it("PT devolve a própria string", () => {
    expect(tr("Salvar", "pt")).toBe("Salvar");
  });

  it("traduz via DICT curado (EN/ES)", () => {
    expect(tr("Entrar", "en")).toBe("Sign in");
    expect(tr("Todos os cursos", "es")).toBe("Todos los cursos");
  });

  it("traduz via DICT_AUTO (tradutor interno)", () => {
    expect(tr("Adicionar Aula", "en")).toBe("Add Lesson");
    expect(tr("Adicionar Aula", "es")).toBe("Añadir Clase");
    expect(tr("Gerar com IA", "en")).toBe("Generate with AI");
  });

  it("fallback: string desconhecida volta em PT", () => {
    expect(tr("xyz-string-inexistente-123", "en")).toBe("xyz-string-inexistente-123");
  });

  it("DICT_AUTO tem as 400 entradas preenchidas e todas com en/es não-vazios", () => {
    const keys = Object.keys(DICT_AUTO);
    expect(keys.length).toBeGreaterThanOrEqual(400);
    for (const k of keys) {
      expect(DICT_AUTO[k].en.trim().length).toBeGreaterThan(0);
      expect(DICT_AUTO[k].es.trim().length).toBeGreaterThan(0);
    }
  });
});
