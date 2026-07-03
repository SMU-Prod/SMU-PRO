import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

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

  // Admin route protection: verify user has required role
  if (isAdminRoute(req)) {
    try {
      const supabase = createAdminClient();
      const { data: rows } = await supabase
        .from("users")
        .select("role")
        .eq("clerk_id", userId)
        .order("created_at", { ascending: false })
        .limit(1);

      const userRole = rows?.[0]?.role ?? null;
      const allowedRoles = ["admin", "content_manager", "instrutor"];

      if (!userRole || !allowedRoles.includes(userRole)) {
        // User lacks admin privileges — redirect to dashboard
        url.pathname = "/dashboard";
        url.searchParams.set("error", "unauthorized");
        return NextResponse.redirect(url);
      }
    } catch (error) {
      // If we can't verify role, deny access as a safety measure
      console.error("[Middleware] Error verifying admin role:", error);
      url.pathname = "/dashboard";
      url.searchParams.set("error", "auth_error");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
