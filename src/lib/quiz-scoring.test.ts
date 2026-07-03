import { describe, it, expect } from "vitest";
import { computeQuizScore, type ScoringQuestion } from "./quiz-scoring";

const questions: ScoringQuestion[] = [
  {
    id: "q1",
    pontos: 1,
    quiz_options: [
      { id: "q1a", correta: false },
      { id: "q1b", correta: true },
      { id: "q1c", correta: false },
    ],
  },
  {
    id: "q2",
    pontos: 1,
    quiz_options: [
      { id: "q2a", correta: true },
      { id: "q2b", correta: false },
    ],
  },
];

describe("computeQuizScore", () => {
  it("dá 100% e aprovado quando todas as respostas estão corretas", () => {
    const r = computeQuizScore(questions, { q1: "q1b", q2: "q2a" }, 70);
    expect(r.nota).toBe(100);
    expect(r.aprovado).toBe(true);
  });

  it("dá 50% e reprovado (mínimo 70) com metade correta", () => {
    const r = computeQuizScore(questions, { q1: "q1b", q2: "q2b" }, 70);
    expect(r.nota).toBe(50);
    expect(r.aprovado).toBe(false);
  });

  it("ignora nota/aprovado que o cliente 'diria' — só conta o gabarito real", () => {
    // Aluno não acertou nada; não há como forjar nota aqui.
    const r = computeQuizScore(questions, { q1: "q1a", q2: "q2b" }, 70);
    expect(r.nota).toBe(0);
    expect(r.aprovado).toBe(false);
  });

  it("respostas ausentes contam como erradas", () => {
    const r = computeQuizScore(questions, {}, 1);
    expect(r.nota).toBe(0);
    expect(r.aprovado).toBe(false);
  });

  it("pondera pelos pontos de cada questão", () => {
    const weighted: ScoringQuestion[] = [
      { id: "q1", pontos: 3, quiz_options: [{ id: "a", correta: true }, { id: "b", correta: false }] },
      { id: "q2", pontos: 1, quiz_options: [{ id: "c", correta: true }, { id: "d", correta: false }] },
    ];
    // Acerta só a questão de 3 pontos → 3/4 = 75%
    const r = computeQuizScore(weighted, { q1: "a", q2: "d" }, 70);
    expect(r.nota).toBe(75);
    expect(r.aprovado).toBe(true);
  });

  it("expõe o gabarito (questão → opção correta) para exibição pós-envio", () => {
    const r = computeQuizScore(questions, { q1: "q1b", q2: "q2a" }, 70);
    expect(r.gabarito).toEqual({ q1: "q1b", q2: "q2a" });
  });

  it("não quebra com quiz sem questões (evita divisão por zero)", () => {
    const r = computeQuizScore([], {}, 70);
    expect(r.nota).toBe(0);
    expect(r.aprovado).toBe(false);
  });
});
