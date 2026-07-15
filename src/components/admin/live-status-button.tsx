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
 *
 * "Reabrir" existe porque sem ele uma live encerrada morre: encerrar por engano,
 * ou a transmissao cair e voltar, deixavam o evento sem nenhuma acao possivel
 * alem de editar. O setLiveStatus preserva o inicio_real original ao reabrir.
 */
export function LiveStatusButton({ id, status }: { id: string; status: LiveStatus }) {
  const router = useRouter();
  const [pendente, setPendente] = useState(false);
  const [confirmando, setConfirmando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Cancelada continua sem acao: e um evento que o admin desistiu de fazer.
  if (status !== "agendado" && status !== "ao_vivo" && status !== "encerrado") return null;

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
    // Iniciar e reabrir vao direto: sao acoes que colocam no ar, e o custo de
    // errar e clicar em Encerrar (que pede confirmacao).
    if (status === "agendado" || status === "encerrado") {
      aplicar("ao_vivo");
      return;
    }
    // status === "ao_vivo": exige confirmacao antes de tirar do ar
    if (confirmando) {
      aplicar("encerrado");
    } else {
      setConfirmando(true);
    }
  }

  const rotulo = pendente
    ? "Aguarde…"
    : status === "agendado"
      ? "Iniciar"
      : status === "encerrado"
        ? "Reabrir"
        : confirmando
          ? "Confirmar?"
          : "Encerrar";

  return (
    <div className="shrink-0 flex flex-col items-end gap-1">
      <Button
        type="button"
        size="sm"
        variant={status === "ao_vivo" ? "destructive" : status === "encerrado" ? "secondary" : "default"}
        disabled={pendente}
        onClick={onClick}
      >
        {rotulo}
      </Button>
      {erro && <span className="text-xs text-red-500">{erro}</span>}
    </div>
  );
}
