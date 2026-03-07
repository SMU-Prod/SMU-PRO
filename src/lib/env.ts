/**
 * Validação de variáveis de ambiente no startup.
 *
 * Importado pelo instrumentation.ts para falhar rápido se alguma
 * variável crítica estiver ausente.
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

export function validateEnv() {
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      `[ENV] Variáveis de ambiente obrigatórias ausentes:\n${missing.map((k) => `  - ${k}`).join("\n")}`
    );
    // Não lança erro para não quebrar builds (onde nem todas as envs estão disponíveis)
    // Em runtime, cada serviço deve validar suas próprias envs
  }
}
