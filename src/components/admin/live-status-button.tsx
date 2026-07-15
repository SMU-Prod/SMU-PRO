"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setLiveStatus } from "@/lib/actions/lives";
import { Button } from "@/components/ui/button";
import type { LiveStatus } from "@/types/database";

/**
 * Botao de transicao de status na lista admin. Segue o padrao de live-form.tsx
 * (useState + try/catch + router.refresh). "Encerrar" muda o estado de uma
 * live que pode estar ao vivo agora — exige um segundo clique de confirmacao
 * em vez de window.confirm, que bloqueia a pagina.
 */
export function LiveStatusButton({ id, status }: { id: string; status: LiveStatus }) {
  const router = useRouter();
  const [pendente, setPendente] = useState(false);
  const [confirmando, setConfirmando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  if (status !== "agendado" && status !== "ao_vivo") return null;

  async function aplicar(novo: LiveStatus) {
    if (pendente) return; // guarda contra duplo clique
    setPendente(true);
    setErro(null);
    try {
      await setLiveStatus(id, novo);
      router.refresh();
    } catch (err: any) {
      setErro(err?.message ?? "Erro ao atualizar status.");
    } finally {
      setPendente(false);
      setConfirmando(false);
    }
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (status === "agendado") {
      aplicar("ao_vivo");
      return;
    }
    // status === "ao_vivo": exige confirmacao antes de encerrar
    if (confirmando) {
      aplicar("encerrado");
    } else {
      setConfirmando(true);
    }
  }

  return (
    <div className="shrink-0 flex flex-col items-end gap-1">
      <Button
        type="button"
        size="sm"
        variant={status === "ao_vivo" ? "destructive" : "default"}
        disabled={pendente}
        onClick={onClick}
      >
        {pendente
          ? "Aguarde…"
          : status === "agendado"
            ? "Iniciar"
            : confirmando
              ? "Confirmar?"
              : "Encerrar"}
      </Button>
      {erro && <span className="text-xs text-red-500">{erro}</span>}
    </div>
  );
}
