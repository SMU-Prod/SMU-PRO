import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { HighlightInit } from "@highlight-run/next/client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SMU PRO — Plataforma de Cursos Profissionalizantes",
    template: "%s | SMU PRO",
  },
  description:
    "Formação profissional para o mercado de eventos ao vivo. Cursos de Som, Luz, DJ, VJ, Produção, Roadie e Marketing.",
  keywords: ["cursos", "eventos", "som", "luz", "DJ", "produção", "SMU", "profissional"],
  authors: [{ name: "SMU — Escola de Música e Eventos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SMU PRO",
    title: "SMU PRO — Plataforma de Cursos Profissionalizantes",
    description: "Formação profissional para o mercado de eventos ao vivo.",
  },
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
        <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
          <body className="antialiased bg-gray-50 text-gray-900">
            {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
