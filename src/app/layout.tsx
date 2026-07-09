import type { Metadata } from "next";
import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { HighlightInit } from "@highlight-run/next/client";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n/locale";
import { getServerLocale } from "@/lib/i18n/server";
import { getPortal } from "@/lib/portal";
import { PageZoom } from "@/components/ui/page-zoom";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

// Metadata por portal: aula.smuproducoes.com (escola profissionalizante) × www (eventos).
export async function generateMetadata(): Promise<Metadata> {
  const isAula = (await getPortal()) === "aula";

  // Comum aos dois portais (ícones/manifest/robots/PWA).
  const shared: Metadata = {
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
    robots: { index: true, follow: true },
    other: {
      "theme-color": "#F59E0B",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
  };

  if (isAula) {
    const url = "https://aula.smuproducoes.com";
    return {
      ...shared,
      title: {
        default: "Cursos Profissionalizantes e de Renda em Casa | SMU PRO",
        template: "%s | SMU PRO",
      },
      description:
        "Escola profissionalizante online: cursos técnicos e de renda em casa (elétrica, marcenaria, confeitaria, informática e mais), do básico ao avançado, com certificado. Comece grátis.",
      keywords: ["curso profissionalizante", "curso técnico online", "curso de renda em casa", "aprender uma profissão", "curso com certificado", "SMU PRO"],
      authors: [{ name: "SMU PRO — Escola Profissionalizante" }],
      metadataBase: new URL(url),
      alternates: { languages: { "pt-BR": url } },
      openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "SMU PRO",
        title: "Cursos Profissionalizantes e de Renda em Casa | SMU PRO",
        description: "Aprenda uma profissão no seu ritmo, do básico ao avançado, com certificado. Comece grátis.",
        url,
        images: [{ url: "https://smuproducoes.com/og-image.png", width: 1200, height: 630, alt: "SMU PRO — Escola Profissionalizante" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Cursos Profissionalizantes e de Renda em Casa | SMU PRO",
        description: "Aprenda uma profissão com certificado. Comece grátis.",
        images: ["https://smuproducoes.com/og-image.png"],
      },
    };
  }

  // www (eventos) — inalterado.
  return {
    ...shared,
    title: {
      default: "Cursos de Sonorização e Iluminação para Eventos | SMU PRO",
      template: "%s | SMU PRO",
    },
    description:
      "Aprenda sonorização, iluminação, DJ e VJ com profissionais de shows ao vivo. Cursos online com certificado verificável. Comece grátis no nível Trainee.",
    keywords: ["curso sonorização", "curso iluminação eventos", "escola de eventos ao vivo", "curso DJ profissional", "técnico de som curso", "certificado técnico eventos", "SMU PRO"],
    authors: [{ name: "SMU PRO — Escola Profissional de Eventos" }],
    metadataBase: new URL("https://smuproducoes.com"),
    alternates: { languages: { "pt-BR": "https://smuproducoes.com" } },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "SMU PRO",
      title: "Cursos Técnicos para Eventos ao Vivo | SMU PRO",
      description: "Sonorização, iluminação, DJ e VJ com certificado. Comece grátis.",
      url: "https://smuproducoes.com",
      images: [{ url: "https://smuproducoes.com/og-image.png", width: 1200, height: 630, alt: "SMU PRO — Escola Profissional de Eventos ao Vivo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cursos Técnicos para Eventos ao Vivo | SMU PRO",
      description: "Sonorização, iluminação, DJ e VJ com certificado verificável.",
      images: ["https://smuproducoes.com/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getServerLocale();
  return (
    <>
      <HighlightInit
        projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID!}
        serviceName="smu-pro-frontend"
        tracingOrigins
        networkRecording={{ enabled: true, recordHeadersAndBody: true }}
      />
      <ClerkProvider localization={ptBR}>
        <html lang={locale === "pt" ? "pt-BR" : locale} className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
          <head>
            <script dangerouslySetInnerHTML={{ __html: `
              try {
                if (localStorage.getItem('smu-theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch(e) {}
            ` }} />
          </head>
          <body className="antialiased bg-background text-foreground">
            <ThemeProvider>
              <LocaleProvider initial={locale}>
                <div id="smu-zoom-root">{children}</div>
                <PageZoom />
              </LocaleProvider>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
