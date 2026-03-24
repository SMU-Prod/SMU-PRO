import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import { LOGO_BASE64 } from "@/lib/logo-base64";
import QRCode from "qrcode";

// ── NR metadata for complete certificates ──
const NR_DATA: Record<string, {
  numero: string;
  titulo: string;
  conteudo_programatico: string;
  validade: string;
  carga_detalhada: string;
}> = {
  "NR-10": {
    numero: "NR-10",
    titulo: "SEGURANCA EM INSTALACOES E SERVICOS EM ELETRICIDADE",
    conteudo_programatico:
      "Introducao a seguranca com eletricidade; Riscos em instalacoes e servicos com eletricidade; " +
      "Tecnicas de Analise de Risco; Medidas de Controle do Risco Eletrico; Normas Tecnicas Brasileiras (NBR da ABNT); " +
      "Regulamentacoes do MTE; Equipamentos de protecao coletiva e individual (EPC/EPI); " +
      "Rotinas de trabalho e procedimentos; Documentacao de instalacoes eletricas; " +
      "Protecao e combate a incendios; Acidentes de origem eletrica; Primeiros socorros; " +
      "Praticas especificas para montagem de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "40 horas (20h teoricas + 20h praticas)",
  },
  "NR-12": {
    numero: "NR-12",
    titulo: "SEGURANCA NO TRABALHO EM MAQUINAS E EQUIPAMENTOS",
    conteudo_programatico:
      "Descricao e identificacao dos riscos associados com maquinas e equipamentos; " +
      "Conceito de protecao e seguranca; Medidas de protecao coletiva e individual; " +
      "Sinalizacao de seguranca; Procedimentos seguros de operacao; " +
      "Permissao de trabalho; Sistema de bloqueio de fontes de energia (Lockout/Tagout); " +
      "Meios de acesso permanentes; Aspectos ergonomicos; " +
      "Manutencao preventiva e corretiva; Praticas especificas para equipamentos de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "16 horas (8h teoricas + 8h praticas)",
  },
  "NR-35": {
    numero: "NR-35",
    titulo: "TRABALHO EM ALTURA",
    conteudo_programatico:
      "Normas e regulamentos aplicaveis ao trabalho em altura; Analise de risco e condicoes impeditivas; " +
      "Riscos potenciais inerentes ao trabalho em altura e medidas de prevencao e controle; " +
      "Sistemas de protecao coletiva; Equipamentos de Protecao Individual (EPIs) para trabalho em altura; " +
      "Sistemas de ancoragem; Conducao e uso de escadas; " +
      "Emergencia, resgate e primeiros socorros; " +
      "Praticas especificas para montagem de estruturas em eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
};

function detectNR(titulo: string): string | null {
  const match = titulo.match(/NR[- ]?(\d+)/i);
  if (!match) return null;
  const nr = `NR-${match[1]}`;
  return NR_DATA[nr] ? nr : null;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ codigo: string }> }
) {
  const { codigo } = await params;
  const supabase = createAdminClient();

  const { data: cert } = await supabase
    .from("certificates")
    .select(`*, users(nome, email), courses(titulo, slug, nivel, categoria, carga_horaria, descricao)`)
    .eq("codigo_verificacao", codigo)
    .single();

  if (!cert) {
    return NextResponse.json({ error: "Certificado nao encontrado" }, { status: 404 });
  }

  const user = cert.users as any;
  const course = cert.courses as any;
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificado/${codigo}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

  const emitidoEm = new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const emitidoShort = new Date(cert.emitido_em).toLocaleDateString("pt-BR");

  const cargaHoraria = formatMinutes(cert.carga_horaria ?? course?.carga_horaria ?? 0);
  const nivel = getLevelLabel(course?.nivel ?? "");

  const nrKey = detectNR(course?.titulo ?? "");
  const isNR = !!nrKey;

  const html = isNR
    ? generateNRCertificate({ cert, user, course, nrKey: nrKey!, qrDataUrl, codigo, emitidoEm, emitidoShort, cargaHoraria })
    : generateGeneralCertificate({ cert, user, course, qrDataUrl, codigo, emitidoEm, cargaHoraria, nivel });

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `inline; filename="certificado-${codigo.substring(0, 8)}.html"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

// ══════════════════════════════════════════════════
// CERTIFICADO GERAL (cursos normais)
// ══════════════════════════════════════════════════
function generateGeneralCertificate({ cert, user, course, qrDataUrl, codigo, emitidoEm, cargaHoraria, nivel }: any) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado — ${course?.titulo ?? "Curso"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4 landscape; margin: 0; }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background: #f5f5f0;
      width: 297mm; height: 210mm;
      display: flex; align-items: center; justify-content: center;
    }
    .cert {
      width: 277mm; height: 190mm;
      background: #ffffff;
      border: 3px solid #1a365d;
      border-radius: 4px;
      padding: 0;
      position: relative;
      overflow: hidden;
    }
    .inner-border {
      position: absolute;
      top: 6px; left: 6px; right: 6px; bottom: 6px;
      border: 1px solid #c8a84e;
      border-radius: 2px;
    }
    .content {
      position: relative; z-index: 1;
      height: 100%;
      display: flex; flex-direction: column;
      padding: 24px 36px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 6px;
    }
    .brand {
      font-size: 20px; font-weight: 900;
      color: #1a365d; letter-spacing: 2px;
      text-transform: uppercase;
    }
    .brand-sub {
      font-size: 9px; color: #6b7280;
      letter-spacing: 3px; text-transform: uppercase;
      margin-top: 2px;
    }
    .divider {
      width: 80px; height: 2px;
      background: linear-gradient(90deg, transparent, #c8a84e, transparent);
      margin: 10px auto;
    }
    .cert-type {
      font-size: 26px; font-weight: 300;
      color: #c8a84e; letter-spacing: 6px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 16px;
    }
    .body { flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .certify-text { font-size: 11px; color: #6b7280; margin-bottom: 8px; }
    .student-name {
      font-size: 34px; font-weight: 700;
      color: #1a365d; margin-bottom: 10px;
      border-bottom: 2px solid #c8a84e;
      padding-bottom: 6px;
      display: inline-block;
    }
    .concluded-text { font-size: 11px; color: #6b7280; margin-bottom: 6px; }
    .course-title { font-size: 20px; font-weight: 700; color: #1a365d; margin-bottom: 4px; }
    .course-meta { font-size: 11px; color: #6b7280; }
    .stats-row {
      display: flex; gap: 24px; margin-top: 18px;
      justify-content: center;
    }
    .stat {
      text-align: center;
      padding: 8px 18px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: #fafaf8;
    }
    .stat-label { font-size: 8px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat-value { font-size: 12px; font-weight: 600; color: #1a365d; margin-top: 2px; }
    .footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      border-top: 1px solid #e5e7eb;
      padding-top: 14px;
      margin-top: 12px;
    }
    .sig-block { text-align: center; }
    .sig-line { width: 150px; height: 1px; background: #1a365d; margin-bottom: 4px; }
    .sig-name { font-size: 10px; font-weight: 600; color: #1a365d; }
    .sig-role { font-size: 8px; color: #6b7280; }
    .qr-block { display: flex; flex-direction: column; align-items: center; gap: 3px; }
    .qr-block img { width: 64px; height: 64px; border-radius: 4px; }
    .qr-text { font-size: 7px; color: #9ca3af; }
    .code-block { text-align: right; }
    .code-label { font-size: 8px; color: #9ca3af; }
    .code-value { font-size: 8px; font-family: 'Courier New', monospace; color: #1a365d; max-width: 120px; word-break: break-all; margin-top: 2px; }
    .mit-badge {
      display: inline-block;
      background: #fef3c7; border: 1px solid #f59e0b;
      color: #92400e; font-size: 9px; font-weight: 700;
      padding: 3px 10px; border-radius: 12px;
      margin-top: 8px;
    }
    .corner-tl, .corner-tr, .corner-bl, .corner-br {
      position: absolute; width: 30px; height: 30px;
      border-color: #c8a84e; border-style: solid;
    }
    .corner-tl { top: 14px; left: 14px; border-width: 2px 0 0 2px; }
    .corner-tr { top: 14px; right: 14px; border-width: 2px 2px 0 0; }
    .corner-bl { bottom: 14px; left: 14px; border-width: 0 0 2px 2px; }
    .corner-br { bottom: 14px; right: 14px; border-width: 0 2px 2px 0; }
  </style>
</head>
<body>
  <div class="cert">
    <div class="inner-border"></div>
    <div class="corner-tl"></div>
    <div class="corner-tr"></div>
    <div class="corner-bl"></div>
    <div class="corner-br"></div>

    <div class="content">
      <div class="header">
        <img src="${LOGO_BASE64}" alt="SMU Producoes" style="height: 54px; border-radius: 6px;" />
        <div style="text-align: center; flex: 1;">
          <div class="brand-sub">Escola Profissional de Eventos</div>
          <div class="divider"></div>
          <div class="cert-type">Certificado de Conclusao</div>
        </div>
        <div style="width: 54px;"></div>
      </div>

      <div class="body">
        <div class="certify-text">Certificamos que</div>
        <div class="student-name">${user?.nome ?? "Aluno"}</div>
        <div class="concluded-text">concluiu com exito o curso</div>
        <div class="course-title">${course?.titulo ?? "Curso"}</div>
        <div class="course-meta">Nivel ${nivel}${cert.nota_final ? ` &middot; Nota Final: ${cert.nota_final}/100` : ""}</div>
        ${cert.projeto_cultural ? `<div class="mit-badge">&#9733; Projeto Cultural MIT</div>` : ""}

        <div class="stats-row">
          <div class="stat">
            <div class="stat-label">Data de Emissao</div>
            <div class="stat-value">${emitidoEm}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Carga Horaria</div>
            <div class="stat-value">${cargaHoraria}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Nivel</div>
            <div class="stat-value">${nivel}</div>
          </div>
          ${cert.nota_final ? `
          <div class="stat">
            <div class="stat-label">Nota Final</div>
            <div class="stat-value">${cert.nota_final}/100</div>
          </div>` : ""}
        </div>
      </div>

      <div class="footer">
        <div class="sig-block">
          <img src="${LOGO_BASE64}" alt="SMU" style="height: 32px; border-radius: 4px; margin-bottom: 6px;" />
          <div class="sig-line"></div>
          <div class="sig-name">SMU Producoes</div>
          <div class="sig-role">Escola Profissional de Eventos</div>
        </div>
        <div class="qr-block">
          <img src="${qrDataUrl}" alt="QR Code" />
          <div class="qr-text">Verificar autenticidade</div>
        </div>
        <div class="code-block">
          <div class="code-label">Codigo de verificacao</div>
          <div class="code-value">${codigo.substring(0, 16)}</div>
        </div>
      </div>
    </div>
  </div>
  <script>window.onload = function() { window.print(); }</script>
</body>
</html>`;
}

// ══════════════════════════════════════════════════
// CERTIFICADO NR (Normas Regulamentadoras)
// Baseado no modelo oficial de capacitacao
// ══════════════════════════════════════════════════
function generateNRCertificate({ cert, user, course, nrKey, qrDataUrl, codigo, emitidoEm, emitidoShort, cargaHoraria }: any) {
  const nr = NR_DATA[nrKey];

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado ${nr.numero} — ${course?.titulo ?? "Curso"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4 portrait; margin: 0; }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background: #f5f5f0;
      width: 210mm; height: 297mm;
      display: flex; align-items: center; justify-content: center;
    }
    .cert {
      width: 190mm; height: 277mm;
      background: #ffffff;
      border: 3px solid #1a365d;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }
    .inner-border {
      position: absolute;
      top: 5px; left: 5px; right: 5px; bottom: 5px;
      border: 1px solid #c8a84e;
    }
    .content {
      position: relative; z-index: 1;
      height: 100%;
      display: flex; flex-direction: column;
      padding: 20px 28px 16px;
    }

    /* Header */
    .header { text-align: center; margin-bottom: 10px; }
    .brand { font-size: 16px; font-weight: 900; color: #1a365d; letter-spacing: 1px; }
    .brand-sub { font-size: 8px; color: #6b7280; letter-spacing: 2px; text-transform: uppercase; margin-top: 1px; }
    .divider { width: 60px; height: 2px; background: linear-gradient(90deg, transparent, #c8a84e, transparent); margin: 8px auto; }
    .cert-type {
      font-size: 22px; font-weight: 300; color: #c8a84e;
      letter-spacing: 4px; text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* Body */
    .certify-row { font-size: 11px; color: #6b7280; text-align: center; margin-bottom: 6px; }
    .student-name {
      font-size: 24px; font-weight: 700; color: #1a365d;
      text-align: center; margin-bottom: 6px;
      border-bottom: 2px solid #c8a84e;
      padding-bottom: 4px; display: inline-block;
    }
    .student-name-wrap { text-align: center; margin-bottom: 8px; }
    .concluded-text { font-size: 11px; color: #6b7280; text-align: center; margin-bottom: 4px; }
    .nr-title {
      font-size: 18px; font-weight: 800; color: #1a365d;
      text-align: center; margin-bottom: 2px;
    }
    .nr-subtitle { font-size: 11px; color: #c8a84e; text-align: center; font-style: italic; margin-bottom: 12px; }

    /* Detail fields */
    .fields { flex: 1; }
    .field { margin-bottom: 8px; }
    .field-label {
      font-size: 9px; font-weight: 700; color: #1a365d;
      text-transform: uppercase; letter-spacing: 0.5px;
      margin-bottom: 2px;
    }
    .field-value { font-size: 10px; color: #374151; line-height: 1.5; }
    .field-line {
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 2px;
      min-height: 16px;
    }

    /* Two columns */
    .row-2 { display: flex; gap: 16px; }
    .row-2 .field { flex: 1; }

    /* Signatures */
    .signatures {
      display: flex; gap: 16px; margin-top: 10px;
      padding-top: 10px; border-top: 1px solid #e5e7eb;
    }
    .sig { flex: 1; text-align: center; }
    .sig-line { height: 1px; background: #1a365d; margin-bottom: 4px; margin-top: 20px; }
    .sig-name { font-size: 9px; font-weight: 600; color: #1a365d; }
    .sig-role { font-size: 7px; color: #6b7280; }

    /* Bottom bar */
    .bottom-bar {
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 8px; padding-top: 8px;
      border-top: 1px solid #e5e7eb;
    }
    .qr-block { display: flex; align-items: center; gap: 6px; }
    .qr-block img { width: 48px; height: 48px; border-radius: 3px; }
    .qr-text { font-size: 7px; color: #9ca3af; max-width: 70px; }
    .code-block { text-align: right; }
    .code-label { font-size: 7px; color: #9ca3af; }
    .code-value { font-size: 7px; font-family: 'Courier New', monospace; color: #1a365d; word-break: break-all; max-width: 100px; margin-top: 1px; }
    .mit-badge {
      display: inline-block;
      background: #fef3c7; border: 1px solid #f59e0b;
      color: #92400e; font-size: 8px; font-weight: 700;
      padding: 2px 8px; border-radius: 10px;
    }
  </style>
</head>
<body>
  <div class="cert">
    <div class="inner-border"></div>

    <div class="content">
      <div class="header">
        <img src="${LOGO_BASE64}" alt="SMU Producoes" style="height: 48px; border-radius: 4px; margin-bottom: 4px;" />
        <div class="brand-sub">Escola Profissional de Eventos</div>
        <div class="divider"></div>
        <div class="cert-type">Certificado de Capacitacao</div>
      </div>

      <div class="certify-row">Certificamos que</div>
      <div class="student-name-wrap">
        <span class="student-name">${user?.nome ?? "Nome Completo do Trabalhador"}</span>
      </div>
      <div class="concluded-text">concluiu com exito o treinamento de</div>
      <div class="nr-title">${nr.numero} &mdash; ${nr.titulo}</div>
      <div class="nr-subtitle">Aplicado ao Setor de Eventos</div>

      <div class="fields">
        <div class="field">
          <div class="field-label">Conteudo Programatico</div>
          <div class="field-value">${nr.conteudo_programatico}</div>
        </div>

        <div class="row-2">
          <div class="field">
            <div class="field-label">Carga Horaria</div>
            <div class="field-value">${nr.carga_detalhada}</div>
          </div>
          <div class="field">
            <div class="field-label">Nota Final</div>
            <div class="field-value">${cert.nota_final ? `${cert.nota_final}/100` : "Aprovado"}</div>
          </div>
        </div>

        <div class="row-2">
          <div class="field">
            <div class="field-label">Data de Realizacao</div>
            <div class="field-value">${emitidoShort}</div>
          </div>
          <div class="field">
            <div class="field-label">Validade</div>
            <div class="field-value">${nr.validade}</div>
          </div>
        </div>

        <div class="field">
          <div class="field-label">Local</div>
          <div class="field-value field-line">SMU PRO &mdash; Plataforma EAD / Aulas Praticas Presenciais</div>
        </div>
      </div>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sig">
          <div class="sig-line"></div>
          <div class="sig-name">Instrutor</div>
          <div class="sig-role">SMU Producoes</div>
        </div>
        <div class="sig">
          <div class="sig-line"></div>
          <div class="sig-name">Responsavel Tecnico</div>
          <div class="sig-role">Pelo Treinamento</div>
        </div>
        <div class="sig">
          <div class="sig-line"></div>
          <div class="sig-name">Assinatura do Trabalhador</div>
          <div class="sig-role">${user?.nome ?? ""}</div>
        </div>
      </div>

      <!-- Bottom verification bar -->
      <div class="bottom-bar">
        <div class="qr-block">
          <img src="${qrDataUrl}" alt="QR Code" />
          <div class="qr-text">Escaneie para verificar a autenticidade deste certificado</div>
        </div>
        ${cert.projeto_cultural ? `<div class="mit-badge">&#9733; Projeto Cultural MIT</div>` : ""}
        <div class="code-block">
          <div class="code-label">Codigo de verificacao</div>
          <div class="code-value">${codigo.substring(0, 20)}</div>
        </div>
      </div>
    </div>
  </div>
  <script>window.onload = function() { window.print(); }</script>
</body>
</html>`;
}
