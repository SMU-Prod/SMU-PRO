import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * ODIN — o dono. Controle máximo da plataforma: senhas, acesso e cadastros.
 *
 * DECISÃO DE SEGURANÇA: o Odin é definido por E-MAIL (não por cargo no banco).
 * Assim, nem que um funcionário consiga virar "admin" no banco de dados ele se
 * torna Odin. Só quem está nesta lista tem o poder máximo — à prova de adulteração.
 *
 * Dono (Odin): rick@smucontroller.com
 * Recuperação (destravar se algo der errado): atendimento.smu@gmail.com
 * NÃO incluir a conta de sistema atendimento@smucontroller.com (essa é só para
 * o sistema enviar/receber; ninguém loga com ela).
 *
 * O fallback abaixo é o padrão embutido. Em produção dá para sobrescrever pela
 * env OWNER_EMAILS (lista separada por vírgula) sem mexer no código.
 */
const FALLBACK_OWNER_EMAILS: string[] = [
  "rick@smucontroller.com",
  "atendimento.smu@gmail.com",
];

export function getOwnerEmails(): string[] {
  const fromEnv = (process.env.OWNER_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  const list = fromEnv.length > 0 ? fromEnv : FALLBACK_OWNER_EMAILS;
  return list.map((e) => e.toLowerCase());
}

/** true se o e-mail informado pertence ao dono (Odin). */
export function isOwnerEmail(email?: string | null): boolean {
  if (!email) return false;
  return getOwnerEmails().includes(email.toLowerCase());
}

/** E-mail do usuário logado (fonte de verdade = Clerk) ou null. */
export async function getCurrentEmail(): Promise<string | null> {
  const { userId } = await auth();
  if (!userId) return null;
  const u = await currentUser();
  return u?.emailAddresses?.[0]?.emailAddress?.toLowerCase() ?? null;
}

/** true se o usuário logado é o Odin (dono). */
export async function isCurrentUserOwner(): Promise<boolean> {
  return isOwnerEmail(await getCurrentEmail());
}

/** Garante que o chamador é o Odin. Lança erro caso contrário. */
export async function assertOwner(): Promise<void> {
  if (!(await isCurrentUserOwner())) {
    throw new Error("Ação exclusiva do dono (Odin).");
  }
}
