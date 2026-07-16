import { describe, it, expect } from "vitest";
import { parseProfileUpdate } from "./validations";

describe("parseProfileUpdate — allowlist contra mass-assignment", () => {
  it("descarta campos de escalada de privilégio", () => {
    const malicioso = {
      nome: "Atacante",
      role: "admin",
      ativo: true,
      projeto_cultural: true,
      clerk_id: "outro",
    };
    const out = parseProfileUpdate(malicioso);
    expect(out).toEqual({ nome: "Atacante" });
    expect("role" in out).toBe(false);
    expect("projeto_cultural" in out).toBe(false);
  });

  it("mantém os campos de perfil válidos", () => {
    const out = parseProfileUpdate({
      nome: "Maria", bio: "olá", telefone: "11999999999",
      cidade: "São Paulo", estado: "SP", cpf: "12345678901",
    });
    expect(out).toEqual({
      nome: "Maria", bio: "olá", telefone: "11999999999",
      cidade: "São Paulo", estado: "SP", cpf: "12345678901",
    });
  });

  it("só retorna as chaves presentes (update parcial não zera colunas)", () => {
    const out = parseProfileUpdate({ cidade: "Rio" });
    expect(out).toEqual({ cidade: "Rio" });
    expect(Object.keys(out)).toEqual(["cidade"]);
  });

  it("rejeita CPF em formato inválido", () => {
    expect(() => parseProfileUpdate({ cpf: "123" })).toThrow();
    expect(() => parseProfileUpdate({ cpf: "abc.def.ghi-jk" })).toThrow();
  });

  it("rejeita nome curto demais", () => {
    expect(() => parseProfileUpdate({ nome: "x" })).toThrow();
  });
});
