import Link from "next/link";
import { listLivesForPortal } from "@/lib/actions/lives";
import { getServerT } from "@/lib/i18n/server";
import { Badge } from "@/components/ui/badge";

export default async function AgendaAoVivoPage() {
  const t = await getServerT();
  const lives = await listLivesForPortal();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav simples — mesma pegada do /cursos: esta página é pública, alguém
          pode cair aqui direto (link compartilhado, busca) sem passar pelo dashboard. */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-muted text-sm font-normal ml-1">PRO</span>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t("Ao vivo")}</h1>
        <p className="mt-2 text-sm text-muted">{t("Aulas, palestras e podcasts transmitidos ao vivo.")}</p>

        {lives.length === 0 ? (
          <p className="mt-10 text-sm text-muted">{t("Nenhuma transmissão agendada no momento.")}</p>
        ) : (
          <ul className="mt-8 space-y-3">
            {lives.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/ao-vivo/${l.slug}`}
                  className="block rounded-xl border border-border bg-surface p-4 hover:border-amber-500 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {l.status === "ao_vivo" && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-semibold text-red-500">
                            <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                            {t("AO VIVO")}
                          </span>
                        )}
                        <h2 className="font-semibold text-foreground truncate">{l.titulo}</h2>
                      </div>
                      {l.descricao && <p className="mt-1 text-sm text-muted line-clamp-2">{l.descricao}</p>}
                    </div>
                    <Badge variant="secondary" className="shrink-0 capitalize">{l.tipo}</Badge>
                  </div>
                  <p className="mt-3 text-xs text-muted">
                    {new Date(l.inicio_previsto).toLocaleString("pt-BR", {
                      day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
                    })}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
