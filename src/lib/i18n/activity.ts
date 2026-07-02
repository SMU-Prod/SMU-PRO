/**
 * Traduz, na hora de EXIBIR, as descrições de atividade que ficam GRAVADAS
 * no banco em português (activity_log.descricao — geradas por webhooks/rotas).
 * Não altera o banco; só a apresentação. Partes dinâmicas (nome do curso,
 * forma de pagamento) são preservadas. Fallback: retorna o texto original.
 */
export function trActivity(descricao: string | null | undefined, t: (s: string) => string): string {
  if (!descricao) return descricao ?? "";
  let m: RegExpMatchArray | null;

  if (descricao === "Novo usuário criado via Clerk") return t("Novo usuário criado via Clerk");

  if ((m = descricao.match(/^Inscrito em (.+) \(gratuito\)$/)))
    return `${t("Inscrito em")} ${m[1]} (${t("gratuito")})`;
  if ((m = descricao.match(/^Inscrito em (.+)$/)))
    return `${t("Inscrito em")} ${m[1]}`;

  if ((m = descricao.match(/^Certificado emitido automaticamente para (.+)$/)))
    return `${t("Certificado emitido automaticamente para")} ${m[1]}`;
  if ((m = descricao.match(/^Certificado emitido para (.+)$/)))
    return `${t("Certificado emitido para")} ${m[1]}`;
  if ((m = descricao.match(/^Certificado NR emitido: (.+)$/)))
    return `${t("Certificado NR emitido:")} ${m[1]}`;

  if ((m = descricao.match(/^Pagamento recebido via (.+)$/)))
    return `${t("Pagamento recebido via")} ${m[1]}`;
  if ((m = descricao.match(/^Pagamento confirmado via (.+)$/)))
    return `${t("Pagamento confirmado via")} ${m[1]}`;

  return descricao;
}
