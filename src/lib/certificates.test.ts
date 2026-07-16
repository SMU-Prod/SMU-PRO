import { describe, it, expect } from "vitest";
import { computeCertificateEligibility } from "./certificates";

describe("computeCertificateEligibility", () => {
  it("curso sem quiz → elegível, nota 100", () => {
    expect(computeCertificateEligibility([], [])).toEqual({ eligible: true, notaMedia: 100 });
  });

  it("BUG A2: quiz exigido sem tentativa aprovada → NÃO elegível", () => {
    // Cenário da auditoria: aula ganhou quiz depois de concluída, aluno nunca fez.
    expect(computeCertificateEligibility(["q1"], [])).toEqual({ eligible: false, notaMedia: 0 });
  });

  it("aprovado em todos os quizzes → elegível com média", () => {
    const r = computeCertificateEligibility(
      ["q1", "q2"],
      [{ quiz_id: "q1", nota: 80 }, { quiz_id: "q2", nota: 100 }],
    );
    expect(r).toEqual({ eligible: true, notaMedia: 90 });
  });

  it("aprovado em só um de dois quizzes → NÃO elegível", () => {
    const r = computeCertificateEligibility(
      ["q1", "q2"],
      [{ quiz_id: "q1", nota: 100 }],
    );
    expect(r.eligible).toBe(false);
  });

  it("usa a melhor nota aprovada por quiz", () => {
    const r = computeCertificateEligibility(
      ["q1"],
      [{ quiz_id: "q1", nota: 70 }, { quiz_id: "q1", nota: 90 }],
    );
    expect(r).toEqual({ eligible: true, notaMedia: 90 });
  });
});
