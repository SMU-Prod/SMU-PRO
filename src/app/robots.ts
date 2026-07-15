import type { MetadataRoute } from "next";
import { getPortal } from "@/lib/portal";

/**
 * robots.txt dinâmico, resolvido POR DOMÍNIO.
 * - Permite crawl de todas as páginas públicas
 * - Bloqueia /admin, /dashboard, /api, /pagamento (privado)
 * - Aponta para o sitemap DESTA escola
 *
 * O baseUrl era fixo em smuproducoes.com: o robots do aula mandava o Google no
 * sitemap do www, ou seja, na escola errada. Cada domínio é uma escola.
 */
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = (await getPortal()) === "aula"
    ? "https://aula.smuproducoes.com"
    : "https://smuproducoes.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/cursos", "/cursos/", "/blog", "/blog/", "/certificado"],
        disallow: [
          "/admin",
          "/admin/",
          "/dashboard",
          "/dashboard/",
          "/api/",
          "/pagamento/",
          "/login",
          "/cadastro",
        ],
      },
      {
        // Googlebot pode indexar tudo que é público
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/dashboard/", "/api/", "/pagamento/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
