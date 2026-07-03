"use client";

import { BookMarked, ExternalLink, FileText } from "lucide-react";
import { manualsForCategory } from "@/lib/equipment-manuals";
import { useT } from "@/lib/i18n/ui";

/**
 * Lista os manuais OFICIAIS dos equipamentos da categoria do curso.
 * Abre o manual oficial do fabricante (PDF ou página) numa nova aba.
 */
export function EquipmentManuals({ categoria }: { categoria?: string | null }) {
  const t = useT();
  const manuais = manualsForCategory(categoria);

  if (manuais.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 pt-1">
        <BookMarked size={15} className="text-amber-500" />
        <h4 className="text-sm font-semibold text-foreground">{t("Manuais dos equipamentos")}</h4>
      </div>
      <p className="text-xs text-muted-light">
        {t("Manuais oficiais do fabricante para consulta técnica.")}
      </p>

      <div className="grid gap-2 sm:grid-cols-2">
        {manuais.map((m) => (
          <a
            key={m.slug}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3 transition-colors hover:border-amber-500/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
              <FileText size={18} className="text-amber-500" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">
                {m.fabricante} {m.modelo}
              </p>
              <p className="truncate text-xs text-muted-light">
                {t(m.tipo)} · {m.formato === "pdf" ? "PDF" : t("Manual online")} · {m.idioma.toUpperCase()}
              </p>
            </div>
            <ExternalLink size={15} className="shrink-0 text-muted-light transition-colors group-hover:text-amber-500" />
          </a>
        ))}
      </div>
    </div>
  );
}
