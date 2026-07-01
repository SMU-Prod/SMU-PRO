import { cookies } from "next/headers";
import { tr, type Lang } from "./dict";

/** Idioma escolhido, lido do cookie (definido pelo seletor). Server-side. */
export async function getServerLocale(): Promise<Lang> {
  const c = await cookies();
  const v = c.get("smu-locale")?.value;
  return v === "en" || v === "es" ? v : "pt";
}

/**
 * Função de tradução da interface para SERVER COMPONENTS.
 * Uso: `const t = await getServerT();` e envolver textos → `{t("Meus Cursos")}`.
 * Reage à troca de idioma quando o seletor chama router.refresh().
 */
export async function getServerT(): Promise<(s: string) => string> {
  const lang = await getServerLocale();
  return (s: string) => tr(s, lang);
}
