import sanitizeHtml from "sanitize-html";

/**
 * Sanitiza HTML rico de post de blog para render server-side (SEO).
 *
 * Roda no servidor sem DOM (sanitize-html usa htmlparser2, não jsdom — que
 * quebrava o runtime da Vercel). Defense-in-depth: a escrita anônima já foi
 * fechada por RLS + guards, mas o conteúdo ainda passa por aqui antes de
 * `dangerouslySetInnerHTML`, removendo <script>, handlers on* e javascript:.
 *
 * A allowlist de tags espelha o que a página de blog estiliza (h1-h3, listas,
 * blockquote, code, img, tabelas).
 */
export function sanitizeBlogHtml(dirty: string | null | undefined): string {
  if (!dirty) return "";
  return sanitizeHtml(dirty, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "p", "a", "strong", "em", "b", "i", "u", "s",
      "mark", "sup", "sub", "ul", "ol", "li", "blockquote", "code", "pre",
      "br", "hr", "span", "img", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "td", "th", "colgroup", "col",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    // Links externos não podem sequestrar a aba de origem nem passar SEO.
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer nofollow" }),
    },
  });
}
