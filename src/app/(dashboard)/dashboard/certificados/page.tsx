import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { formatMinutes } from "@/lib/utils";
import { Award, ExternalLink, Download, QrCode, Calendar } from "lucide-react";

export default async function CertificadosPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  const { data: certs } = userUuid
    ? await (supabase as any)
        .from("certificates")
        .select(`*, courses(titulo, categoria, nivel)`)
        .eq("user_id", userUuid)
        .order("emitido_em", { ascending: false })
    : { data: [] };

  const certificates = certs ?? [];

  return (
    <div className="animate-fade-in">
      <Header
        title="Meus Certificados"
        subtitle={`${certificates.length} certificado${certificates.length !== 1 ? "s" : ""} emitido${certificates.length !== 1 ? "s" : ""}`}
      />

      <div className="p-4 sm:p-6">
        {certificates.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center rounded-2xl bg-surface border border-border">
            <Award size={56} className="text-muted-light mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">Nenhum certificado ainda</h2>
            <p className="text-muted-light mb-6 max-w-sm">
              Conclua 100% das aulas de um curso para desbloquear seu certificado verificável.
            </p>
            <Link href="/dashboard/cursos">
              <Button className="gap-2">Ver meus cursos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert: any) => {
              const course = cert.courses;
              const emitidoEm = new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

              return (
                <div
                  key={cert.id}
                  className="rounded-2xl bg-surface border border-border hover:border-amber-500/30 hover:shadow-md p-6 flex flex-col gap-4 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <Award size={24} className="text-amber-400" />
                    </div>
                    {cert.projeto_cultural && (
                      <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">
                        MIT
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-bold text-foreground leading-tight mb-1">{course?.titulo ?? "Curso"}</h3>
                    <div className="flex flex-col gap-1 text-sm text-muted-light">
                      {cert.nota_final != null && (
                        <span>Nota final: <strong className="text-foreground">{cert.nota_final}/100</strong></span>
                      )}
                      {cert.carga_horaria && (
                        <span>Carga horária: <strong className="text-foreground">{formatMinutes(cert.carga_horaria)}</strong></span>
                      )}
                      <span className="flex items-center gap-1.5 mt-1">
                        <Calendar size={12} />
                        {emitidoEm}
                      </span>
                    </div>
                  </div>

                  {/* Código */}
                  <div className="rounded-lg bg-background border border-border px-3 py-2 font-mono text-xs text-muted-light flex items-center justify-between">
                    <span className="truncate">{cert.codigo_verificacao}</span>
                    <QrCode size={14} className="shrink-0 ml-2 text-muted-light" />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Link href={`/certificado/${cert.codigo_verificacao}`} target="_blank" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-1.5">
                        <ExternalLink size={13} />
                        Ver
                      </Button>
                    </Link>
                    <Link href={`/api/certificates/pdf/${cert.codigo_verificacao}`} className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full gap-1.5">
                        <Download size={13} />
                        PDF
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
