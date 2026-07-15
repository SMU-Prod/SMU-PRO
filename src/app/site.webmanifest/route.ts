import { getPortal } from "@/lib/portal";

/**
 * /site.webmanifest — resolvido POR REQUISIÇÃO, porque cada domínio é uma escola
 * independente (www = Backstage/eventos · aula.smuproducoes.com = cursos avulsos).
 * Antes era um arquivo estático em public/, servido igual nos dois: o atalho salvo
 * na tela de início do aula nascia com o nome da escola de eventos.
 *
 * O tema padrão do app é escuro nos dois portais (theme-provider), por isso
 * background_color/theme_color não mudam entre eles.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const isAula = (await getPortal()) === "aula";

  const manifest = {
    name: isAula
      ? "SMU PRO — Escola Profissionalizante"
      : "SMU PRO — Escola Profissional de Eventos",
    // Fica sob o ícone na tela de início. Precisa distinguir as duas escolas para
    // quem salvar as duas não ficar com dois atalhos de nome idêntico.
    short_name: isAula ? "SMU Aula" : "SMU PRO",
    description: isAula
      ? "Cursos técnicos e de renda em casa, do básico ao avançado, com certificado."
      : "Cursos de sonorização, iluminação, DJ e VJ para eventos ao vivo.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#F59E0B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      // Curto: o manifest agora varia por host e não pode ficar preso em cache de CDN.
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
