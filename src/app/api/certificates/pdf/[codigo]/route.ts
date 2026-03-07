import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import QRCode from "qrcode";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ codigo: string }> }
) {
  const { codigo } = await params;
  const supabase = createAdminClient();

  const { data: cert } = await supabase
    .from("certificates")
    .select(`*, users(nome, email), courses(titulo, nivel, categoria, carga_horaria)`)
    .eq("codigo_verificacao", codigo)
    .single();

  if (!cert) {
    return NextResponse.json({ error: "Certificado não encontrado" }, { status: 404 });
  }

  const user = cert.users as any;
  const course = cert.courses as any;
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificado/${codigo}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 100, margin: 1 });

  const emitidoEm = new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const cargaHoraria = formatMinutes(cert.carga_horaria ?? course?.carga_horaria ?? 0);
  const nivel = getLevelLabel(course?.nivel ?? "");

  // Generate HTML certificate for print/PDF
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado — ${course?.titulo ?? "Curso"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4 landscape; margin: 0; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #0A0A0F;
      color: #E8E8F0;
      width: 297mm;
      height: 210mm;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16mm;
    }
    .certificate {
      width: 100%;
      height: 100%;
      background: #111118;
      border: 1px solid #2A2A38;
      border-radius: 16px;
      padding: 40px 48px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }
    .bg-glow-1 {
      position: absolute; top: -60px; right: -60px;
      width: 280px; height: 280px;
      background: radial-gradient(circle, rgba(108,60,225,0.15), transparent 70%);
      border-radius: 50%;
    }
    .bg-glow-2 {
      position: absolute; bottom: -60px; left: -60px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(192,132,252,0.10), transparent 70%);
      border-radius: 50%;
    }
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 28px;
    }
    .logo-area .brand { font-size: 22px; font-weight: 900; color: #6C3CE1; letter-spacing: -0.5px; }
    .logo-area .sub { font-size: 10px; color: #8888A8; margin-top: 2px; letter-spacing: 1px; text-transform: uppercase; }
    .logo-area .label { font-size: 10px; color: #8888A8; margin-top: 8px; }
    .mit-badge {
      background: rgba(245,158,11,0.15);
      border: 1px solid rgba(245,158,11,0.3);
      color: #F59E0B;
      font-size: 10px;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 20px;
    }
    .body {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .certifies-label { font-size: 11px; color: #8888A8; margin-bottom: 8px; }
    .student-name { font-size: 32px; font-weight: 800; color: #E8E8F0; margin-bottom: 8px; letter-spacing: -0.5px; }
    .concluded-label { font-size: 11px; color: #8888A8; margin-bottom: 6px; }
    .course-title { font-size: 20px; font-weight: 700; color: #C084FC; margin-bottom: 4px; }
    .course-meta { font-size: 11px; color: #8888A8; }
    .stats {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    .stat {
      background: #16161F;
      border: 1px solid #2A2A38;
      border-radius: 10px;
      padding: 10px 20px;
      text-align: center;
      min-width: 100px;
    }
    .stat-label { font-size: 9px; color: #8888A8; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat-value { font-size: 13px; font-weight: 600; color: #E8E8F0; margin-top: 3px; }
    .footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      border-top: 1px solid #2A2A38;
      padding-top: 16px;
      margin-top: 24px;
    }
    .signature-line { width: 130px; height: 1px; background: #2A2A38; margin-bottom: 6px; }
    .signature-text { font-size: 9px; color: #8888A8; }
    .qr-area { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .qr-area img { width: 70px; height: 70px; border-radius: 6px; }
    .qr-label { font-size: 8px; color: #8888A8; }
    .code-area { text-align: right; }
    .code-label { font-size: 9px; color: #8888A8; }
    .code-value { font-size: 9px; font-family: monospace; color: #6C3CE1; word-break: break-all; max-width: 130px; margin-top: 2px; }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="bg-glow-1"></div>
    <div class="bg-glow-2"></div>

    <div class="header">
      <div class="logo-area">
        <div class="brand">SMU PRO</div>
        <div class="sub">Escola de Música e Eventos</div>
        <div class="label">Certificado de Conclusão</div>
      </div>
      ${cert.projeto_cultural ? `<div class="mit-badge">🏆 MIT — Projeto Cultural</div>` : ""}
    </div>

    <div class="body">
      <div class="certifies-label">Certificamos que</div>
      <div class="student-name">${user?.nome ?? "Aluno"}</div>
      <div class="concluded-label">concluiu com êxito o curso</div>
      <div class="course-title">${course?.titulo ?? "Curso"}</div>
      <div class="course-meta">${nivel}${cert.nota_final ? ` · Nota: ${cert.nota_final}%` : ""}</div>
      <div class="stats">
        <div class="stat">
          <div class="stat-label">Emitido em</div>
          <div class="stat-value">${emitidoEm}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Carga Horária</div>
          <div class="stat-value">${cargaHoraria}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Nível</div>
          <div class="stat-value">${nivel}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>
        <div class="signature-line"></div>
        <div class="signature-text">Assinatura SMU</div>
        <div class="signature-text">Escola de Música e Eventos</div>
      </div>
      <div class="qr-area">
        <img src="${qrDataUrl}" alt="QR Code" />
        <div class="qr-label">Verificar autenticidade</div>
      </div>
      <div class="code-area">
        <div class="code-label">Código de verificação</div>
        <div class="code-value">${codigo.substring(0, 16)}...</div>
      </div>
    </div>
  </div>

  <script>
    window.onload = function() { window.print(); }
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `inline; filename="certificado-${codigo.substring(0, 8)}.html"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
