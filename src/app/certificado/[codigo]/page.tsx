import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { Award, CheckCircle2, Calendar, Clock, User, Trophy, ShieldCheck, BookOpen, MapPin } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/certificate/share-button";
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

  // Detect if this is an NR per-lesson certificate
  const isNR = cert.metadata?.tipo === "nr_aula";
  const lessonTitulo = cert.metadata?.lesson_titulo ?? "";
  const nrMatch = lessonTitulo.match(/NR[- ]?(\d+)/i);
  const nrNumber = nrMatch ? `NR-${nrMatch[1].padStart(2, "0")}` : null;

  // Calculate validade for NR certs
  const emitidoDate = new Date(cert.emitido_em);
  const validadeDate = new Date(emitidoDate);
  validadeDate.setFullYear(validadeDate.getFullYear() + 2);
  const validadeStr = validadeDate.toLocaleDateString("pt-BR");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="SMU PRO" className="h-9 w-9 rounded-lg" />
          <span className="font-bold text-foreground">SMU PRO</span>
        </Link>
        <div className="flex items-center gap-2 justify-center text-emerald-400 text-sm">
          <CheckCircle2 size={16} />
          <span>Certificado Válido e Verificado</span>
        </div>
      </div>

      {/* Certificate Card */}
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8">
          {/* Background decoration */}
          {isNR ? (
            <>
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
            </>
          ) : (
            <>
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#FBBF24]/5 blur-3xl pointer-events-none" />
            </>
          )}

          {/* Top row — centered */}
          <div className="text-center mb-8">
            <p className="text-xs text-muted-light uppercase tracking-widest mb-2">
              {isNR ? "Certificado de Capacitação" : "Certificado de Conclusão"}
            </p>
            <p className="text-xs text-muted-light">Escola Profissional de Eventos</p>
            {isNR && nrNumber ? (
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-blue-400" />
                </div>
                <span className="text-lg text-blue-400 font-bold">{nrNumber}</span>
              </div>
            ) : cert.projeto_cultural ? (
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center"><Trophy size={20} className="text-amber-400" /></div>
                <span className="text-sm text-amber-400 font-semibold">Projeto Cultural MIT</span>
              </div>
            ) : (
              <div className="mt-3">
                <Award size={36} className="mx-auto text-amber-400 opacity-60" />
              </div>
            )}
          </div>

          {/* This certifies */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-light mb-3">Certificamos que</p>
            <h1 className="text-3xl font-bold text-foreground mb-3">{user.nome}</h1>
            {isNR ? (
              <>
                <p className="text-sm text-muted-light mb-2">concluiu com êxito o treinamento de</p>
                {nrNumber && (
                  <h2 className="text-2xl font-bold text-blue-400 mb-1">{nrNumber}</h2>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-1">{lessonTitulo}</h3>
                <p className="text-xs text-muted-light italic">Aplicado ao Setor de Eventos</p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-light mb-2">concluiu com êxito o curso</p>
                <h2 className="text-xl font-semibold text-[#FBBF24] mb-1">{course.titulo}</h2>
              </>
            )}
            <div className="flex items-center justify-center gap-2 mt-2">
              <CategoryIcon category={course.categoria} size={16} />
              <span className="text-sm text-muted-light">{getLevelLabel(course.nivel)}</span>
              {cert.nota_final && (
                <>
                  <span className="text-border">·</span>
                  <span className="text-sm text-muted-light">Nota: {cert.nota_final}%</span>
                </>
              )}
            </div>
          </div>

          {/* NR: detailed info fields */}
          {isNR ? (
            <div className="space-y-4 mb-8">
              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl bg-surface p-3 text-center">
                  <Calendar size={16} className="mx-auto mb-1 text-blue-400" />
                  <p className="text-xs text-muted-light">Data de Realização</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(cert.emitido_em).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="rounded-xl bg-surface p-3 text-center">
                  <Clock size={16} className="mx-auto mb-1 text-blue-400" />
                  <p className="text-xs text-muted-light">Carga Horária</p>
                  <p className="text-sm font-medium text-foreground">
                    {formatMinutes(cert.carga_horaria ?? course.carga_horaria ?? 0)}
                  </p>
                </div>
                <div className="rounded-xl bg-surface p-3 text-center">
                  <ShieldCheck size={16} className="mx-auto mb-1 text-blue-400" />
                  <p className="text-xs text-muted-light">Validade</p>
                  <p className="text-sm font-medium text-foreground">Até {validadeStr}</p>
                </div>
                <div className="rounded-xl bg-surface p-3 text-center">
                  <MapPin size={16} className="mx-auto mb-1 text-blue-400" />
                  <p className="text-xs text-muted-light">Local</p>
                  <p className="text-sm font-medium text-foreground">SMU PRO — EAD</p>
                </div>
              </div>

              {/* NR badge */}
              <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-blue-400">
                  Norma Regulamentadora {nrNumber ?? ""} — Capacitação Profissional
                </span>
              </div>
            </div>
          ) : (
            /* Regular: simple stats row */
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl bg-surface p-3 text-center">
                <Calendar size={16} className="mx-auto mb-1 text-amber-400" />
                <p className="text-xs text-muted-light">Emitido em</p>
                <p className="text-sm font-medium text-foreground">
                  {new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
                    day: "2-digit", month: "long", year: "numeric"
                  })}
                </p>
              </div>
              <div className="rounded-xl bg-surface p-3 text-center">
                <Clock size={16} className="mx-auto mb-1 text-amber-400" />
                <p className="text-xs text-muted-light">Carga Horária</p>
                <p className="text-sm font-medium text-foreground">
                  {formatMinutes(cert.carga_horaria ?? course.carga_horaria ?? 0)}
                </p>
              </div>
              <div className="rounded-xl bg-surface p-3 text-center">
                <User size={16} className="mx-auto mb-1 text-amber-400" />
                <p className="text-xs text-muted-light">Nível</p>
                <p className="text-sm font-medium text-foreground">{getLevelLabel(course.nivel)}</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-end justify-between border-t border-border pt-6">
            <div>
              <div className="h-px w-40 bg-border mb-2" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="SMU" className="h-8 rounded mb-1" />
              <p className="text-xs text-muted-light">SMU Produções</p>
              <p className="text-xs text-muted-light">Escola Profissional de Eventos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrDataUrl} alt="QR Code de verificação" className="h-[80px] w-[80px] rounded-lg" />
              <p className="text-[10px] text-muted-light">Verificar autenticidade</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-muted-light">Código de verificação</p>
              <p className={`text-[10px] font-mono break-all max-w-[140px] ${isNR ? "text-blue-400" : "text-amber-400"}`}>
                {codigo.substring(0, 8)}...
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a
            href={`/api/certificates/pdf/${codigo}`}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors ${
              isNR ? "bg-blue-500 hover:bg-blue-600" : "bg-amber-500 hover:bg-amber-600"
            }`}
          >
            <Award size={16} /> Baixar PDF
          </a>
          <ShareButton url={verifyUrl} title={`Certificado ${nrNumber ?? ""} - ${isNR ? lessonTitulo : course.titulo}`} />
        </div>
      </div>
    </div>
  );
}
