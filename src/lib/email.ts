/**
 * SMU PRO — Sistema de Emails via Resend
 * Docs: https://resend.com/docs
 *
 * Instalar: npm install resend
 * Configurar: RESEND_API_KEY no .env.local
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.EMAIL_FROM ?? "SMU PRO <noreply@smu.pro>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

// ============================================================
// Templates HTML
// ============================================================

function baseLayout(content: string): string {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SMU PRO</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0F;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:0 0 32px 0;text-align:center;">
              <span style="font-size:24px;font-weight:900;color:#ffffff;letter-spacing:-1px;">
                <span style="background:linear-gradient(135deg,#F59E0B,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">SMU</span>
                <span style="color:rgba(255,255,255,0.4);font-size:14px;font-weight:400;margin-left:4px;">PRO</span>
              </span>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0 0;text-align:center;color:rgba(255,255,255,0.25);font-size:12px;">
              © ${new Date().getFullYear()} SMU PRO — Escola Profissional de Eventos<br/>
              <a href="${APP_URL}" style="color:rgba(255,255,255,0.25);">smu.pro</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function btn(text: string, url: string): string {
  return `
<a href="${url}" style="display:inline-block;background:#F59E0B;color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;text-decoration:none;margin:24px 0 8px 0;">
  ${text}
</a>`;
}

function h1(text: string): string {
  return `<h1 style="color:#ffffff;font-size:26px;font-weight:900;margin:0 0 8px 0;line-height:1.2;">${text}</h1>`;
}

function p(text: string): string {
  return `<p style="color:rgba(255,255,255,0.55);font-size:15px;line-height:1.7;margin:12px 0;">${text}</p>`;
}

function divider(): string {
  return `<hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;" />`;
}

function highlight(label: string, value: string): string {
  return `
<div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:12px 16px;margin:8px 0;display:flex;justify-content:space-between;">
  <span style="color:rgba(255,255,255,0.4);font-size:13px;">${label}</span>
  <span style="color:#ffffff;font-size:13px;font-weight:600;">${value}</span>
</div>`;
}

// ============================================================
// Email: Boas-vindas
// ============================================================

export async function sendWelcomeEmail(params: {
  to: string;
  nome: string;
}) {
  const html = baseLayout(`
    ${h1(`Bem-vindo ao SMU PRO, ${params.nome.split(" ")[0]}!`)}
    ${p("Sua conta profissional está ativa. Agora você tem acesso ao maior conteúdo técnico para profissionais de eventos do Brasil.")}
    ${divider()}
    ${p("Comece explorando nossos cursos gratuitos ou veja a trilha completa para sua carreira:")}
    ${btn("Explorar cursos", `${APP_URL}/cursos`)}
    ${divider()}
    ${p("Dúvidas? Responda este email — estamos aqui para ajudar.")}
  `);

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `Bem-vindo ao SMU PRO, ${params.nome.split(" ")[0]}!`,
    html,
  });
}

// ============================================================
// Email: Inscrição em curso
// ============================================================

export async function sendEnrollmentEmail(params: {
  to: string;
  nome: string;
  courseTitulo: string;
  courseSlug: string;
}) {
  const courseUrl = `${APP_URL}/dashboard/cursos/${params.courseSlug}`;

  const html = baseLayout(`
    ${h1("Inscrição confirmada!")}
    ${p(`Você está inscrito em <strong style="color:#ffffff;">${params.courseTitulo}</strong>. Bom estudo!`)}
    ${divider()}
    ${highlight("Curso", params.courseTitulo)}
    ${highlight("Status", "Acesso liberado")}
    ${divider()}
    ${btn("Começar a estudar", courseUrl)}
    ${p("Ao final do curso, você receberá um certificado verificável com QR Code — reconhecido em todo o mercado de eventos.")}
  `);

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `Acesso liberado: ${params.courseTitulo}`,
    html,
  });
}

// ============================================================
// Email: Conclusão de curso
// ============================================================

export async function sendCourseCompletionEmail(params: {
  to: string;
  nome: string;
  courseTitulo: string;
  courseSlug: string;
}) {
  const html = baseLayout(`
    ${h1("Parabéns! Você concluiu o curso!")}
    ${p(`<strong style="color:#ffffff;">${params.nome.split(" ")[0]}</strong>, você completou 100% do curso <strong style="color:#ffffff;">${params.courseTitulo}</strong>.`)}
    ${divider()}
    ${p("Seu certificado verificável está disponível no painel. Compartilhe com contratantes — cada certificado tem QR Code único.")}
    ${btn("Ver meu certificado", `${APP_URL}/dashboard/certificados`)}
    ${divider()}
    ${p("Continue evoluindo! Explore os próximos cursos da sua trilha de carreira.")}
    ${btn("Ver mais cursos", `${APP_URL}/cursos`)}
  `);

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `Certificado disponível: ${params.courseTitulo}`,
    html,
  });
}

// ============================================================
// Email: Certificado emitido
// ============================================================

export async function sendCertificateEmail(params: {
  to: string;
  nome: string;
  courseTitulo: string;
  notaFinal: number | null;
  cargaHoraria: number | null;
  codigoVerificacao: string;
}) {
  const verifyUrl = `${APP_URL}/certificado/${params.codigoVerificacao}`;

  const html = baseLayout(`
    ${h1("Seu certificado foi emitido!")}
    ${p(`Certificado de conclusão para <strong style="color:#ffffff;">${params.courseTitulo}</strong>.`)}
    ${divider()}
    ${params.notaFinal != null ? highlight("Nota final", `${params.notaFinal}/100`) : ""}
    ${params.cargaHoraria != null ? highlight("Carga horária", `${params.cargaHoraria}h`) : ""}
    ${highlight("Código de verificação", params.codigoVerificacao)}
    ${divider()}
    ${btn("Visualizar certificado", verifyUrl)}
    ${p("Qualquer pessoa pode verificar a autenticidade do seu certificado acessando o link acima ou escaneando o QR Code.")}
  `);

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `Certificado: ${params.courseTitulo} — SMU PRO`,
    html,
  });
}

// ============================================================
// Email: Pagamento confirmado
// ============================================================

export async function sendPaymentConfirmedEmail(params: {
  to: string;
  nome: string;
  courseTitulo: string;
  courseSlug: string;
  valor: number;
  billingType: string;
}) {
  const valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(params.valor);
  const metodo = params.billingType === "PIX" ? "PIX" : params.billingType === "BOLETO" ? "Boleto" : "Cartão";

  const html = baseLayout(`
    ${h1("Pagamento confirmado!")}
    ${p(`Recebemos seu pagamento e seu acesso ao curso foi liberado.`)}
    ${divider()}
    ${highlight("Curso", params.courseTitulo)}
    ${highlight("Valor pago", valor)}
    ${highlight("Método", metodo)}
    ${divider()}
    ${btn("Começar a estudar agora", `${APP_URL}/dashboard/cursos/${params.courseSlug}`)}
  `);

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `Pagamento confirmado — ${params.courseTitulo}`,
    html,
  });
}
