import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Clock3, ShieldAlert } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, liveBelongsToPortal } from "@/lib/portal";
import { listAttendanceForLive } from "@/lib/actions/lives";
import { formatDuracaoSegundos } from "@/lib/utils";
import { AttendanceCsvExport } from "@/components/admin/attendance-csv-export";
import type { LiveEvent } from "@/types/database";

/**
 * Relatório de presença de uma live — a tela que faltava.
 *
 * NR-01 Anexo II 4.7.1 exige reter o log de acesso dos participantes por no
 * mínimo 2 anos. A tabela `live_attendance` já existia (heartbeat gravado por
 * registrarPresenca em live-attendance.ts) e nenhuma tela lia ela: o log
 * existia, a obrigação regulatória continuava sem uma superfície de auditoria.
 * Nenhum concorrente deste mercado (Hotmart, Kiwify, Eduzz, Skool, Teachable,
 * Kajabi, Circle) exporta duração assistida — é o gap que esta página fecha.
 */
export default async function LiveAttendancePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = createAdminClient();
  const { data } = await supabase.from("live_events").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();

  // Escolas independentes: esta leitura usa service_role (bypassa RLS) fora
  // das actions, então o guard de escola precisa estar aqui — mesmo guard de
  // admin/lives/[id]/page.tsx. Sem ele, o admin do aula veria presença
  // (com e-mail e IP de aluno) de uma live do Backstage.
  const live = data as LiveEvent;
  if (!liveBelongsToPortal(live.portal, await getPortal())) notFound();

  // listAttendanceForLive aplica assertAdmin + assertLiveInPortal +
  // assertLiveOwnership (instrutor só vê a própria live). Se lançar aqui, é
  // porque quem está olhando não devia — 404 em vez de vazar o erro cru.
  let attendance;
  try {
    attendance = await listAttendanceForLive(id);
  } catch {
    notFound();
  }

  const totalParticipantes = attendance.length;
  const duracaoMediaSegundos =
    totalParticipantes > 0
      ? Math.round(attendance.reduce((soma, a) => soma + a.duracao_segundos, 0) / totalParticipantes)
      : 0;

  return (
    <div className="p-4 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap">
        <Link
          href="/admin/lives"
          aria-label="Voltar para lives"
          className="flex size-11 shrink-0 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="text-base sm:text-lg font-bold text-foreground truncate">Presença — {live.titulo}</h1>
          <p className="text-xs text-muted">
            {new Date(live.inicio_previsto).toLocaleString("pt-BR")} · {live.tipo}
          </p>
        </div>
        <AttendanceCsvExport rows={attendance} liveTitle={live.titulo} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-surface border border-border px-4 py-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
            <Users size={16} className="text-blue-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">{totalParticipantes}</p>
            <p className="text-xs text-muted-light">participantes</p>
          </div>
        </div>
        <div className="rounded-xl bg-surface border border-border px-4 py-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
            <Clock3 size={16} className="text-amber-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">{formatDuracaoSegundos(duracaoMediaSegundos)}</p>
            <p className="text-xs text-muted-light">duração média</p>
          </div>
        </div>
      </div>

      {/* Base legal + limite conhecido do heartbeat */}
      <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-xs text-amber-400 flex gap-2">
        <ShieldAlert size={16} className="shrink-0 mt-0.5" />
        <p>
          Este log é retido pelo prazo mínimo de <strong>2 anos</strong>, conforme{" "}
          <strong>NR-01 Anexo II, item 4.7.1</strong>. Com o provedor YouTube o heartbeat de presença roda no
          navegador do aluno e é, portanto, falsificável — ele serve como métrica e log de acesso, <strong>não</strong>{" "}
          como prova de auditoria forte para certificação.
        </p>
      </div>

      {/* Tabela ou estado vazio */}
      {attendance.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl bg-surface border border-border">
          <Users size={36} className="text-muted-light mb-3" />
          <p className="text-foreground font-medium mb-1">Nenhum registro de presença ainda.</p>
          <p className="text-sm text-muted-light">
            O log é gravado automaticamente pelo heartbeat enquanto a live está ao vivo — volte aqui depois da
            transmissão.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-2 text-muted text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-2 font-medium">Aluno</th>
                <th className="text-left px-4 py-2 font-medium">E-mail</th>
                <th className="text-left px-4 py-2 font-medium">Entrou às</th>
                <th className="text-left px-4 py-2 font-medium">Última atividade</th>
                <th className="text-left px-4 py-2 font-medium">Duração assistida</th>
                <th className="text-left px-4 py-2 font-medium">IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {attendance.map((a) => (
                <tr key={a.id} className="hover:bg-hover transition-colors">
                  <td className="px-4 py-2.5 text-foreground whitespace-nowrap">{a.nome}</td>
                  <td className="px-4 py-2.5 text-muted whitespace-nowrap">{a.email}</td>
                  <td className="px-4 py-2.5 text-muted whitespace-nowrap">
                    {new Date(a.joined_at).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-2.5 text-muted whitespace-nowrap">
                    {new Date(a.last_seen_at).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-2.5 font-semibold text-foreground whitespace-nowrap">
                    {formatDuracaoSegundos(a.duracao_segundos)}
                  </td>
                  <td className="px-4 py-2.5 text-muted whitespace-nowrap">{a.ip ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
