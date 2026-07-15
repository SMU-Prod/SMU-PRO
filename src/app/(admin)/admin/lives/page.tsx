import Link from "next/link";
import { ExternalLink, Radio, Users, MessageSquare, ClipboardList } from "lucide-react";
import { listLivesForAdmin, listCoursesForPortalSelect, getLiveEngagementCounts } from "@/lib/actions/lives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LiveStatusButton } from "@/components/admin/live-status-button";
import { NewLiveModal } from "@/components/admin/new-live-modal";
import type { LiveEvent, LiveStatus } from "@/types/database";

interface Props {
  searchParams: Promise<{ status?: string }>;
}

/** ao_vivo nunca pode ficar enterrada na lista — vem sempre primeiro. */
const STATUS_ORDER: Record<LiveStatus, number> = { ao_vivo: 0, agendado: 1, encerrado: 2, cancelado: 3 };

const STATUS_LABEL: Record<LiveStatus, string> = {
  agendado: "Agendada",
  ao_vivo: "Ao vivo",
  encerrado: "Encerrada",
  cancelado: "Cancelada",
};

/**
 * ao_vivo primeiro sempre; dentro de agendado, a mais próxima primeiro (é a
 * próxima ação do admin); dentro de encerrado, a mais recente primeiro (é o
 * histórico que ele acabou de viver). cancelado cai no fim, sem lógica extra —
 * é o balde de "não vai acontecer".
 */
function sortLives(lives: LiveEvent[]): LiveEvent[] {
  return [...lives].sort((a, b) => {
    const oa = STATUS_ORDER[a.status];
    const ob = STATUS_ORDER[b.status];
    if (oa !== ob) return oa - ob;
    if (a.status === "agendado") {
      return new Date(a.inicio_previsto).getTime() - new Date(b.inicio_previsto).getTime();
    }
    if (a.status === "encerrado") {
      const at = new Date(a.fim_real ?? a.inicio_previsto).getTime();
      const bt = new Date(b.fim_real ?? b.inicio_previsto).getTime();
      return bt - at;
    }
    return new Date(b.inicio_previsto).getTime() - new Date(a.inicio_previsto).getTime();
  });
}

export default async function AdminLivesPage({ searchParams }: Props) {
  const { status = "" } = await searchParams;
  const [allLives, courses] = await Promise.all([listLivesForAdmin(), listCoursesForPortalSelect()]);
  const courseTituloById = new Map(courses.map((c) => [c.id, c.titulo]));

  const counts = {
    ao_vivo: allLives.filter((l) => l.status === "ao_vivo").length,
    agendado: allLives.filter((l) => l.status === "agendado").length,
    encerrado: allLives.filter((l) => l.status === "encerrado").length,
    todas: allLives.length,
  };

  const filtered =
    status === "ao_vivo" || status === "agendado" || status === "encerrado"
      ? allLives.filter((l) => l.status === status)
      : allLives;
  const lives = sortLives(filtered);

  // Contagem em lote (2 queries pro lote inteiro) — nunca uma query por linha.
  const engagement = await getLiveEngagementCounts(lives.map((l) => l.id));

  const tabs: { value: string; label: string; count: number }[] = [
    { value: "ao_vivo", label: "Ao vivo", count: counts.ao_vivo },
    { value: "agendado", label: "Agendadas", count: counts.agendado },
    { value: "encerrado", label: "Encerradas", count: counts.encerrado },
    { value: "", label: "Todas", count: counts.todas },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-foreground">Lives</h1>
        <NewLiveModal courses={courses} />
      </div>

      {/* Abas de status com contagem — searchParam, sem estado client, links compartilháveis. */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.value || "todas"}
            href={tab.value ? `/admin/lives?status=${tab.value}` : "/admin/lives"}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              status === tab.value
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-surface text-muted border-border hover:border-amber-500/30"
            }`}
          >
            {tab.label} ({tab.count})
          </Link>
        ))}
      </div>

      {lives.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl bg-surface border border-border">
          <Radio size={40} className="text-muted-light mb-3" />
          <p className="text-foreground font-medium mb-1">
            {status ? "Nenhuma live encontrada neste filtro." : "Nenhuma live nesta escola ainda."}
          </p>
          <p className="text-sm text-muted-light mb-5">
            {status
              ? "Tente outro filtro ou veja todas as lives."
              : "Crie a primeira live — aula, palestra ou podcast — para começar a transmitir."}
          </p>
          {status ? (
            <Link href="/admin/lives">
              <Button variant="outline">Ver todas</Button>
            </Link>
          ) : (
            <NewLiveModal courses={courses} />
          )}
        </div>
      ) : (
        <ul className="space-y-2">
          {lives.map((l) => {
            const stats = engagement[l.id] ?? { participantes: 0, mensagens: 0 };
            const cursoTitulo = l.course_id ? courseTituloById.get(l.course_id) : null;
            return (
              <li
                key={l.id}
                className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 hover:border-amber-500 transition-colors"
              >
                <Link href={`/admin/lives/${l.id}`} className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-foreground truncate">{l.titulo}</p>
                    {l.status === "ao_vivo" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-semibold text-red-500 shrink-0">
                        <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                        AO VIVO
                      </span>
                    ) : (
                      <Badge
                        variant={
                          l.status === "encerrado" ? "secondary" : l.status === "cancelado" ? "danger" : "default"
                        }
                        className="shrink-0"
                      >
                        {STATUS_LABEL[l.status]}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted mt-0.5">
                    {new Date(l.inicio_previsto).toLocaleString("pt-BR")} · {l.tipo} · {l.portal}
                    {cursoTitulo ? <> · {cursoTitulo}</> : null}
                  </p>
                  <p className="text-xs text-muted-light mt-1 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Users size={12} /> {stats.participantes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageSquare size={12} /> {stats.mensagens}
                    </span>
                  </p>
                </Link>

                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/lives/${l.id}/presenca`}>
                      <ClipboardList size={14} />
                      Presença
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/ao-vivo/${l.slug}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      Ver sala
                    </Link>
                  </Button>
                  <LiveStatusButton id={l.id} status={l.status} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
