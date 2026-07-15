import Link from "next/link";
import { listLivesForAdmin } from "@/lib/actions/lives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LiveStatusButton } from "@/components/admin/live-status-button";

export default async function AdminLivesPage() {
  const lives = await listLivesForAdmin();

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-bold text-foreground">Lives</h1>
        <Link href="/admin/lives/nova"><Button size="sm">Nova live</Button></Link>
      </div>

      {lives.length === 0 ? (
        <p className="text-sm text-muted">Nenhuma live nesta escola ainda.</p>
      ) : (
        <ul className="space-y-2">
          {lives.map((l) => (
            <li
              key={l.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3 hover:border-amber-500 transition-colors"
            >
              <Link href={`/admin/lives/${l.id}`} className="min-w-0 flex-1">
                <p className="font-medium text-foreground truncate">{l.titulo}</p>
                <p className="text-xs text-muted">
                  {new Date(l.inicio_previsto).toLocaleString("pt-BR")} · {l.tipo} · {l.portal}
                </p>
              </Link>
              <Badge variant={l.status === "ao_vivo" ? "default" : "secondary"} className="shrink-0">
                {l.status}
              </Badge>
              <LiveStatusButton id={l.id} status={l.status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
