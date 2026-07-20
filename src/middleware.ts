import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Rotas que não precisam de autenticação
const isPublicRoute = createRouteMatcher([
  "/",
  "/cursos(.*)",
  "/ao-vivo(.*)",
  "/blog(.*)",
  "/login(.*)",
  "/cadastro(.*)",
  "/certificado(.*)",
  "/pagamento/sucesso",
  "/api/webhooks/(.*)",
  // SEO: sem estes dois, o middleware manda 307 para /login e o Google recebe a
  // página de login em vez do sitemap — sem erro visível em lugar nenhum. O
  // matcher abaixo não isenta .xml/.txt, então a exceção precisa ser aqui.
  "/sitemap.xml",
  "/robots.txt",
]);

// Rotas exclusivas de admin
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const url = req.nextUrl.clone();

  // Rotas públicas: sem restrição
  if (isPublicRoute(req)) return NextResponse.next();

  // Não autenticado: redireciona para login
  if (!userId) {
    url.pathname = "/login";
    url.searchParams.set("redirect_url", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

// A lista de extensões abaixo é o que o middleware NÃO intercepta. Faltar uma
// extensão aqui não dá erro visível: o arquivo leva 307 para /login e o <video>
// (ou <img>) simplesmente fica vazio, mostrando o poster para sempre. Foi o que
// aconteceu com mp4 — o vídeo da landing nunca tocou, e o componente estava certo.
// Ao adicionar mídia nova em public/, confira se a extensão está aqui.
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|avif|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|mov|m4v|mp3|wav|ogg)).*)",
    "/(api|trpc)(.*)",
  ],
};
