import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Rotas que não precisam de autenticação
const isPublicRoute = createRouteMatcher([
  "/",
  "/cursos(.*)",
  "/blog(.*)",
  "/login(.*)",
  "/cadastro(.*)",
  "/certificado(.*)",
  "/pagamento/sucesso",
  "/api/webhooks/(.*)",
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

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
