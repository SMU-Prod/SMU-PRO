import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { getLevelLabel, getCategoryIcon, formatMinutes } from "@/lib/utils";
import { Award, CheckCircle2, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import QRCode from "qrcode";
import type { Metadata } from "next";

export const revalidate = 86400; // ISR: certificados são imutáveis, revalida 1x/dia

interface Props {
  params: Promise<{ codigo: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { codigo } = await params;
  const supabase = createAdminClient();
  const { data: cert } = await supabase
    .from("certificates")
    .select("users(nome), courses(titulo)")
    .eq("codigo_verificacao", codigo)
    .single();

  if (!cert) return { title: "Certificado não encontrado" };
  const user = cert.users as any;
  const course = cert.courses as any;
  return {
    title: `Certificado — ${user?.nome}`,
    description: `Certificado de conclusão do curso ${course?.titulo} na SMU PRO`,
  };
}

export default async function CertificatePage({ params }: Props) {
  const { codigo } = await params;
  const supabase = createAdminClient();

  const { data: cert } = await supabase
    .from("certificates")
    .select(`
      *,
      users(nome, email, avatar_url),
      courses(titulo, nivel, categoria, carga_horaria, descricao_curta)
    `)
    .eq("codigo_verificacao", codigo)
    .single();

  if (!cert) notFound();

  const user = cert.users as any;
  const course = cert.courses as any;
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificado/${codigo}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
    width: 120,
    margin: 1,
    color: { dark: "#E8E8F0", light: "#111118" },
  });

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-300">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-[#E8E8F0]">SMU PRO</span>
        </Link>
        <div className="flex items-center gap-2 justify-center text-emerald-400 text-sm">
          <CheckCircle2 size={16} />
          <span>Certificado Válido e Verificado</span>
        </div>
      </div>

      {/* Certificate Card */}
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#2A2A38] bg-[#111118] p-8">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#FBBF24]/5 blur-3xl pointer-events-none" />

          {/* Top row */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-xs text-[#8888A8] uppercase tracking-widest mb-1">Certificado de Conclusão</p>
              <p className="text-2xl font-bold gradient-text">SMU PRO</p>
              <p className="text-xs text-[#8888A8] mt-1">Escola de Música e Eventos</p>
            </div>
            {cert.projeto_cultural ? (
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-2xl">🏆</div>
                <span className="text-xs text-amber-400 font-semibold">MIT</span>
              </div>
            ) : (
              <Award size={48} className="text-amber-400 opacity-60" />
            )}
          </div>

          {/* This certifies */}
          <div className="text-center mb-8">
            <p className="text-sm text-[#8888A8] mb-3">Certificamos que</p>
            <h1 className="text-3xl font-bold text-[#E8E8F0] mb-3">{user.nome}</h1>
            <p className="text-sm text-[#8888A8] mb-2">concluiu com êxito o curso</p>
            <h2 className="text-xl font-semibold text-[#FBBF24] mb-1">{course.titulo}</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-base">{getCategoryIcon(course.categoria)}</span>
              <span className="text-sm text-[#8888A8]">{getLevelLabel(course.nivel)}</span>
              {cert.nota_final && (
                <>
                  <span className="text-[#2A2A38]">·</span>
                  <span className="text-sm text-[#8888A8]">Nota: {cert.nota_final}%</span>
                </>
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl bg-[#16161F] p-3 text-center">
              <Calendar size={16} className="mx-auto mb-1 text-amber-400" />
              <p className="text-xs text-[#8888A8]">Emitido em</p>
              <p className="text-sm font-medium text-[#E8E8F0]">
                {new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
                  day: "2-digit", month: "long", year: "numeric"
                })}
              </p>
            </div>
            <div className="rounded-xl bg-[#16161F] p-3 text-center">
              <Clock size={16} className="mx-auto mb-1 text-amber-400" />
              <p className="text-xs text-[#8888A8]">Carga Horária</p>
              <p className="text-sm font-medium text-[#E8E8F0]">
                {formatMinutes(cert.carga_horaria ?? course.carga_horaria ?? 0)}
              </p>
            </div>
            <div className="rounded-xl bg-[#16161F] p-3 text-center">
              <User size={16} className="mx-auto mb-1 text-amber-400" />
              <p className="text-xs text-[#8888A8]">Nível</p>
              <p className="text-sm font-medium text-[#E8E8F0]">{getLevelLabel(course.nivel)}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-end justify-between border-t border-[#2A2A38] pt-6">
            <div>
              <div className="h-px w-40 bg-[#2A2A38] mb-2" />
              <p className="text-xs text-[#8888A8]">Assinatura SMU</p>
              <p className="text-xs text-[#8888A8]">Escola de Música e Eventos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrDataUrl} alt="QR Code de verificação" className="h-[80px] w-[80px] rounded-lg" />
              <p className="text-[10px] text-[#8888A8]">Verificar autenticidade</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#8888A8]">Código de verificação</p>
              <p className="text-[10px] font-mono text-amber-400 break-all max-w-[140px]">
                {codigo.substring(0, 8)}...
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3 mt-6">
          <a
            href={`/api/certificates/pdf/${codigo}`}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            <Award size={16} /> Baixar PDF
          </a>
          <button
            onClick={() => navigator.share?.({ url: verifyUrl, title: `Certificado - ${course.titulo}` })}
            className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A38] bg-[#111118] px-5 py-2.5 text-sm font-semibold text-[#E8E8F0] hover:border-amber-500/40 transition-colors"
          >
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  );
}
