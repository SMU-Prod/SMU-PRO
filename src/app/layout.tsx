import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { HighlightInit } from "@highlight-run/next/client";
import { ThemeProvider } from "@/components/theme-provider";
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

export const metadata: Metadata = {
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
    images: [{ url: "https://smuproducoes.com/og-image.jpg", width: 1200, height: 630, alt: "SMU PRO — Escola Profissional de Eventos ao Vivo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos Técnicos para Eventos ao Vivo | SMU PRO",
    description: "Sonorização, iluminação, DJ e VJ com certificado verificável.",
    images: ["https://smuproducoes.com/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HighlightInit
        projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID!}
        serviceName="smu-pro-frontend"
        tracingOrigins
        networkRecording={{ enabled: true, recordHeadersAndBody: true }}
      />
      <ClerkProvider localization={ptBR}>
        <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
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
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
