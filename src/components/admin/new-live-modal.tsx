"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveForm } from "@/components/admin/live-form";
import { useT } from "@/lib/i18n/ui";

/**
 * Modal "Nova live" — segue o mesmo padrão do command-palette (único Dialog
 * do projeto): Overlay + Content do Radix, sem reinventar animação.
 *
 * O form tem 8 campos — no celular (uso principal) isso não cabe na tela,
 * então o corpo rola (`overflow-y-auto`) dentro de um Content com altura
 * máxima em `dvh` (não `vh` — no Safari do iOS o 100vh inclui a barra de
 * endereço e empurraria o botão "Salvar" pra fora da tela).
 */
export function NewLiveModal({ courses }: { courses: { id: string; titulo: string }[] }) {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button size="sm" className="gap-1.5">
          <Plus size={15} />
          {t("Nova live")}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-surface shadow-2xl ring-1 ring-border overflow-hidden animate-in fade-in-0 zoom-in-95 flex flex-col max-h-[90dvh]"
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-border shrink-0">
            <Dialog.Title className="text-base font-bold text-foreground">{t("Nova live")}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
                aria-label={t("Fechar")}
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-5">
            <LiveForm
              courses={courses}
              onSuccess={() => setOpen(false)}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
