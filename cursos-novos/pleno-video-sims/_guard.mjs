// ============================================================================
//  TRAVAS compartilhadas dos applies do PLENO — VÍDEO.
//  Alinhado com cursos-novos/_REGISTRO-IDS.mjs (o cartório) e com a trava de
//  progresso que a sessão da arrumação pôs no video-basico-pro/apply-rest.mjs.
//
//  POR QUE (dois acidentes reais, ambos documentados no cartório):
//   1) FAIXA: o apply do pleno-produtor cravou 72d00000-…-08 — que era o Módulo 8
//      do Pleno — Vídeo — e o PATCH TRANSFERIU o módulo (com NovaStar/ATEM/Resolume)
//      para o outro curso. `conferirFaixa()` aborta antes disso acontecer.
//   2) PROGRESSO: estes applies fazem DELETE /lessons?id=eq.<id> e recriam. O DELETE
//      cascateia para quizzes, ai_animations e `progress` — apaga o histórico do
//      aluno, sem volta. `travaProgresso()` aborta se houver aluno na aula.
//
//  Os ids do pleno-video usam sufixo com LETRA (…b01/c01/d01/e01) por razões
//  históricas. `daFaixa()` valida só o PREFIXO, então eles passam sem renumerar —
//  e é assim que tem que ser: mexer em id de aula com progresso apaga o aluno.
// ============================================================================
import { faixa, conferirFaixa } from "../_REGISTRO-IDS.mjs";

// ── QUIZ/QUESTÃO: o cartório NÃO modela (só tem `mod` e `aula`) ──────────────
// Por isso `conferirFaixa()` REJEITARIA um id de quiz — nunca passe id de quiz
// para `conferir()`. A pendência de modelar quiz no cartório é da sessão dona
// dele; aqui cobrimos só os NOSSOS prefixos, de forma local e auto-contida.
// Auditado em 15/07 no banco: nenhum prefixo de quiz cruza dois cursos, e estes
// 8 são exclusivos do vídeo (71200000→video-basico, 72/73/74/75→pleno-video).
const QUIZ_PREFIXOS = {
  "video-basico":    { quiz: "71200000", questao: "71300000" },
  "pleno-video":     { quiz: "72200000", questao: "72300000" },
  "pleno-video-m9":  { quiz: "73200000", questao: "73300000" },
  "pleno-video-m10": { quiz: "74200000", questao: "74300000" },
  "pleno-video-m11": { quiz: "75200000", questao: "75300000" },
};

/**
 * Confere os ids de QUIZ e QUESTÃO contra os prefixos do curso.
 * Separado de `conferir()` de propósito: são espaços que o cartório não modela.
 */
export function conferirQuiz(slug, quizIds = [], questaoIds = []) {
  const p = QUIZ_PREFIXOS[slug];
  if (!p) throw new Error(`Sem prefixo de quiz registrado para "${slug}" (ver _guard.mjs).`);
  const fora = [
    ...quizIds.filter((id) => !String(id).startsWith(p.quiz + "-")),
    ...questaoIds.filter((id) => !String(id).startsWith(p.questao + "-")),
  ];
  if (fora.length) throw new Error(
    `IDs de quiz/questão fora do espaço de "${slug}" (quiz ${p.quiz}-* / questão ${p.questao}-*):\n` +
    fora.map((x) => "   " + x).join("\n"));
  return true;
}

/**
 * Confere que todo id que o script vai criar está DENTRO da faixa registrada.
 * @param slug   chave no _REGISTRO-IDS.mjs (ex.: "pleno-video", "pleno-video-m9")
 * @param criados ids que este script cria/recria (módulo + aulas)
 * @param nativos ids pré-existentes (uuid aleatório da criação original do curso)
 *                que o script apenas faz PATCH — passam sem checagem de faixa.
 */
export function conferir(slug, criados, nativos = []) {
  const F = faixa(slug);
  conferirFaixa(F, criados, nativos);
  return F;
}

/**
 * Aborta se alguma das aulas tem progresso de aluno — o DELETE levaria junto.
 * Para reformular mesmo assim (ciente da perda): FORCAR=1 node apply-*.mjs
 * @param req função de request do script (method, path) => json
 */
export async function travaProgresso(req, lessonIds) {
  const ids = (lessonIds || []).filter(Boolean);
  if (!ids.length) return;
  const prog = await req("GET", `/progress?lesson_id=in.(${ids.join(",")})&select=id&limit=1`);
  if (prog?.length && process.env.FORCAR !== "1") {
    throw new Error(
      "ABORTADO: há progresso de aluno nas aulas que este script recria.\n" +
      "O DELETE apagaria esse histórico em cascata, sem volta.\n" +
      "Se a mudança for mesmo para valer, rode com FORCAR=1.");
  }
}
