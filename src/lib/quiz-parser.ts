/**
 * SMU PRO — Quiz Paste Parser
 *
 * Parses pasted quiz text into structured questions with options and answers.
 * Supports two formats:
 * 1. Answer key at the end (GABARITO section)
 * 2. Correct answer marked with * or ** in the option text
 */

export interface ParsedOption {
  texto: string;
  correta: boolean;
  ordem: number;
}

export interface ParsedQuestion {
  texto: string;
  tipo: "multiple_choice" | "true_false";
  opcoes: ParsedOption[];
  explicacao: string | null;
  ordem: number;
}

export interface ParseResult {
  titulo: string | null;
  questions: ParsedQuestion[];
  aprovacao_minima: number | null;
  errors: string[];
}

/**
 * Main parser: takes raw pasted text and returns structured quiz data
 */
export function parseQuizText(raw: string): ParseResult {
  const errors: string[] = [];
  const lines = raw.split(/\n/).map((l) => l.trim()).filter(Boolean);

  if (lines.length < 3) {
    return { titulo: null, questions: [], aprovacao_minima: null, errors: ["Texto muito curto para conter um quiz."] };
  }

  // ── 1. Extract title (first line if it looks like a title) ──
  let titulo: string | null = null;
  const firstLine = lines[0];
  if (/avalia[çc][ãa]o|prova|quiz|teste|question[áa]rio/i.test(firstLine)) {
    titulo = firstLine;
  }

  // ── 2. Extract minimum approval percentage ──
  let aprovacao_minima: number | null = null;
  const aprovaMatch = raw.match(/m[ií]nimo.*?(\d+)\s*%/i);
  if (aprovaMatch) aprovacao_minima = parseInt(aprovaMatch[1]);

  // ── 3. Find and parse GABARITO section ──
  const gabarito = new Map<number, string>();
  const gabaritoIdx = lines.findIndex((l) => /gabarito/i.test(l));

  if (gabaritoIdx !== -1) {
    const gabLines = lines.slice(gabaritoIdx + 1);
    const gabText = gabLines.join(" ");

    // Format: "1 C 6 C 11 B 16 B" or "1-C, 2-B" or "1. C  2. B"
    const matches = gabText.matchAll(/(\d+)\s*[-.):\s]\s*([A-Ea-e])/g);
    for (const m of matches) {
      gabarito.set(parseInt(m[1]), m[2].toUpperCase());
    }
  }

  // ── 4. Parse questions ──
  const questions: ParsedQuestion[] = [];
  let currentQuestion: { num: number; texto: string; options: { letter: string; texto: string; starred: boolean }[] } | null = null;

  // Determine end of questions section
  const endIdx = gabaritoIdx !== -1 ? gabaritoIdx : lines.length;
  const questionLines = lines.slice(0, endIdx);

  for (const line of questionLines) {
    // Match question: "1. Text" or "1) Text" or "1 Text" (number at start)
    const qMatch = line.match(/^(\d+)\s*[.):\-]\s*(.+)/);
    if (qMatch) {
      const num = parseInt(qMatch[1]);
      // Only treat as question if num is sequential or first
      if (num >= 1 && (!currentQuestion || num === currentQuestion.num + 1 || num > currentQuestion.num)) {
        // Save previous question
        if (currentQuestion) {
          questions.push(buildQuestion(currentQuestion, gabarito, questions.length));
        }
        currentQuestion = { num, texto: qMatch[2].trim(), options: [] };
        continue;
      }
    }

    // Match option: "a) Text" or "a. Text" or "A) Text" — also detect * or ** markers
    const optMatch = line.match(/^([a-eA-E])\s*[.):\-]\s*(.+)/);
    if (optMatch && currentQuestion) {
      let texto = optMatch[2].trim();
      let starred = false;

      // Check for star/asterisk markers: *text*, **text**, or text *
      if (/^\*\*?/.test(texto) || /\*\*?$/.test(texto)) {
        starred = true;
        texto = texto.replace(/^\*+\s*/, "").replace(/\s*\*+$/, "");
      }

      currentQuestion.options.push({
        letter: optMatch[1].toUpperCase(),
        texto,
        starred,
      });
      continue;
    }

    // If we have a current question and line doesn't match option pattern,
    // it might be continuation of question text
    if (currentQuestion && currentQuestion.options.length === 0 && !qMatch) {
      currentQuestion.texto += " " + line;
    }
  }

  // Save last question
  if (currentQuestion) {
    questions.push(buildQuestion(currentQuestion, gabarito, questions.length));
  }

  // ── 5. Validation ──
  if (questions.length === 0) {
    errors.push("Nenhuma questão encontrada. Verifique se as perguntas estão numeradas (1, 2, 3...) e as alternativas com letras (a, b, c, d).");
  }

  for (const q of questions) {
    if (q.opcoes.length < 2) {
      errors.push(`Questão ${q.ordem + 1}: menos de 2 alternativas encontradas.`);
    }
    if (!q.opcoes.some((o) => o.correta)) {
      errors.push(`Questão ${q.ordem + 1}: nenhuma resposta correta identificada. Verifique o gabarito.`);
    }
  }

  return { titulo, questions, aprovacao_minima, errors };
}

function buildQuestion(
  raw: { num: number; texto: string; options: { letter: string; texto: string; starred: boolean }[] },
  gabarito: Map<number, string>,
  idx: number
): ParsedQuestion {
  const correctLetter = gabarito.get(raw.num);
  const opcoes: ParsedOption[] = raw.options.map((opt, i) => ({
    texto: opt.texto,
    correta: opt.starred || (correctLetter ? opt.letter === correctLetter : false),
    ordem: i,
  }));

  // Detect V/F
  const isTrueFalse =
    opcoes.length === 2 &&
    opcoes.some((o) => /^(verdadeir|true|v$)/i.test(o.texto)) &&
    opcoes.some((o) => /^(fals|false|f$)/i.test(o.texto));

  return {
    texto: raw.texto,
    tipo: isTrueFalse ? "true_false" : "multiple_choice",
    opcoes,
    explicacao: null,
    ordem: idx,
  };
}
