import { describe, it, expect } from "vitest";
import { liveBelongsToPortal } from "./portal";

describe("liveBelongsToPortal", () => {
  it("mostra a live do aula no portal aula", () => {
    expect(liveBelongsToPortal("aula", "aula")).toBe(true);
  });

  it("esconde a live do aula no portal main", () => {
    expect(liveBelongsToPortal("aula", "main")).toBe(false);
  });

  it("mostra a live do main no portal main", () => {
    expect(liveBelongsToPortal("main", "main")).toBe(true);
  });

  it("esconde a live do main no portal aula", () => {
    expect(liveBelongsToPortal("main", "aula")).toBe(false);
  });

  it("mostra a live 'ambos' no portal aula", () => {
    expect(liveBelongsToPortal("ambos", "aula")).toBe(true);
  });

  it("mostra a live 'ambos' no portal main", () => {
    expect(liveBelongsToPortal("ambos", "main")).toBe(true);
  });
});
