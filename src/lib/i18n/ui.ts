"use client";

import { useLocale } from "./locale";
import { tr } from "./dict";

export type TFn = (s: string) => string;

/**
 * Hook (CLIENT): função de tradução da interface conforme o idioma escolhido.
 * Uso: `const t = useT();` e envolver textos → `{t("Meus Cursos")}`.
 * Para telas SERVER use getServerT() de "./server".
 */
export function useT(): TFn {
  const locale = useLocale();
  return (s: string) => tr(s, locale);
}
