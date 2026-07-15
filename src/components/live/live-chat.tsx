"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";
import { Send } from "lucide-react";
import { sendLiveMessage } from "@/lib/actions/live-chat";
import { useT } from "@/lib/i18n/ui";
import type { LiveMessage } from "@/types/database";

export function LiveChat({
  liveEventId,
  mensagensIniciais,
}: {
  liveEventId: string;
  mensagensIniciais: LiveMessage[];
}) {
  const t = useT();
  const { isSignedIn } = useUser();
  const [msgs, setMsgs] = useState<LiveMessage[]>(mensagensIniciais);
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const fimRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const grudadoRef = useRef(true);

  useEffect(() => {
    const supabase = createClient();
    const canal = supabase
      .channel(`live:${liveEventId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "live_messages", filter: `live_event_id=eq.${liveEventId}` },
        (payload) => setMsgs((atual) => [...atual, payload.new as LiveMessage].slice(-200)),
      )
      .subscribe();
    return () => { supabase.removeChannel(canal); };
  }, [liveEventId]);

  // Auto-scroll SÓ se o usuário já estava no fim — senão puxaria a leitura dele à força.
  useEffect(() => {
    if (grudadoRef.current) fimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  function aoRolar() {
    const el = scrollRef.current;
    if (!el) return;
    grudadoRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!texto.trim() || enviando) return;
    setEnviando(true);
    setErro(null);
    try {
      await sendLiveMessage(liveEventId, texto);
      setTexto("");
      grudadoRef.current = true;
    } catch (err: any) {
      setErro(err?.message ?? t("Não foi possível enviar."));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="shrink-0 px-4 py-2.5 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground">{t("Chat ao vivo")}</h2>
      </div>

      <div ref={scrollRef} onScroll={aoRolar} className="flex-1 min-h-0 overflow-y-auto px-4 py-3 space-y-2">
        {msgs.length === 0 && <p className="text-xs text-muted">{t("Seja o primeiro a comentar.")}</p>}
        {msgs.map((m) => (
          <div key={m.id} className="text-sm">
            <span className="text-foreground break-words">{m.texto}</span>
          </div>
        ))}
        <div ref={fimRef} />
      </div>

      {/* pb com safe-area: sem isso o input fica atras da barra de gestos do iPhone. */}
      <form
        onSubmit={enviar}
        className="shrink-0 border-t border-border p-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        {erro && <p className="mb-2 text-xs text-red-500">{erro}</p>}
        {isSignedIn ? (
          <div className="flex items-center gap-2">
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              maxLength={500}
              placeholder={t("Escreva uma mensagem…")}
              className="flex-1 min-w-0 rounded-lg bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={enviando || !texto.trim()}
              aria-label={t("Enviar")}
              className="shrink-0 size-11 grid place-items-center rounded-lg bg-amber-500 text-black disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>
        ) : (
          <p className="text-xs text-muted">{t("Entre na sua conta para participar do chat.")}</p>
        )}
      </form>
    </div>
  );
}
