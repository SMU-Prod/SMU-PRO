import { describe, it, expect } from "vitest";
import { countWords, readingMinutes } from "./reading-time";

describe("countWords", () => {
  it("conta palavras ignorando espaços extras", () => {
    expect(countWords("  um   dois três ")).toBe(3);
  });
  it("string vazia = 0", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });
  it("quebras de linha e tabs contam como separadores", () => {
    expect(countWords("um\ndois\ttrês\nquatro")).toBe(4);
  });
});

describe("readingMinutes", () => {
  it("arredonda pra cima", () => {
    expect(readingMinutes(201)).toBe(2);
    expect(readingMinutes(200)).toBe(1);
  });
  it("mínimo de 1 minuto mesmo com 0 palavras", () => {
    expect(readingMinutes(0)).toBe(1);
  });
  it("respeita wpm customizado", () => {
    expect(readingMinutes(100, 100)).toBe(1);
    expect(readingMinutes(150, 100)).toBe(2);
  });
});
