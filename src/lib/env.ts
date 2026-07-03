/**
 * Validação de variáveis de ambiente no startup.
 *
 * Importado pelo instrumentation.ts para falhar rápido se alguma
 * variável crítica estiver ausente.
 *
 * Durante o build, apenas avisa (NODE_ENV='development' ou não definido).
 * Em runtime (NODE_ENV='production'), lança erro se alguma env obrigatória faltar.
 */

const required = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "CLERK_WEBHOOK_SECRET",
  "ASAAS_API_KEY",
  "ASAAS_WEBHOOK_TOKEN",
  "RESEND_API_KEY",
  "NEXT_PUBLIC_APP_URL",
] as const;

export function validateEnv(strict?: boolean) {
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    const message = `[ENV] Variáveis de ambiente obrigatórias ausentes:\n${missing.map((k) => `  - ${k}`).join("\n")}`;
    console.error(message);

    // strict=true: lança erro (runtime/production)
    // strict=false ou undefined: apenas avisa (build ou development)
    const shouldThrow = strict ?? process.env.NODE_ENV === "production";
    if (shouldThrow) {
      throw new Error(message);
    }
  }
}
