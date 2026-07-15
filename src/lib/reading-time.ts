// Lógica pura de contagem de palavras e tempo de leitura (com teste unitário).

export function countWords(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

// Tempo de leitura em minutos: arredonda pra cima, mínimo 1. Padrão 200 palavras/min.
export function readingMinutes(words: number, wpm = 200): number {
  return Math.max(1, Math.ceil(words / wpm));
}
