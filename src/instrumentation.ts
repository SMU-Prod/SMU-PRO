export async function register() {
  // Validação de variáveis de ambiente no startup
  const { validateEnv } = await import("@/lib/env");
  validateEnv();

  const { HIGHLIGHT_PROJECT_ID } = process.env;
  if (!HIGHLIGHT_PROJECT_ID) return;

  const { registerHighlight } = await import("@highlight-run/next/server");
  await registerHighlight({
    projectID: HIGHLIGHT_PROJECT_ID,
    serviceName: "smu-pro-backend",
  });
}

