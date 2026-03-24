import type { MetadataRoute } from "next";

/**
 * robots.txt dinâmico
 * - Permite crawl de todas as páginas públicas
 * - Bloqueia /admin, /dashboard, /api, /pagamento (privado)
 * - Aponta para o sitemap gerado dinamicamente
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://smuproducoes.com";

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
