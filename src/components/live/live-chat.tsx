"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";
import { Send } from "lucide-react";
import { sendLiveMessage } from "@/lib/actions/live-chat";
import { useT } from "@/lib/i18n/ui";
import type { LiveMessage, UserRole } from "@/types/database";

// Paleta estável de cores por autor — mesmo nome sempre cai na mesma cor,
// como o chat do YouTube. Tons 400 escolhidos por funcionarem tanto no
// tema escuro quanto no claro.
const CORES_AUTOR = [
  "text-sky-400",
  "text-emerald-400",
  "text-violet-400",
  "text-rose-400",
  "text-cyan-400",
  "text-orange-400",
] as const;

function corDoAutor(nome: string): string {
  let hash = 0;
  for (let i = 0; i < nome.length; i++) {
    hash = (hash * 31 + nome.charCodeAt(i)) | 0;
  }
  return CORES_AUTOR[Math.abs(hash) % CORES_AUTOR.length];
}

const ROLES_EQUIPE = new Set<UserRole>(["admin", "instrutor", "content_manager"]);

function rotuloRole(role: UserRole | null, t: (s: string) => string): string | null {
  if (role === "instrutor") return t("Instrutor");
  if (role === "admin") return t("Admin");
  if (role === "content_manager") return t("Equipe");
  return null;
}

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
        {msgs.map((m) => {
          const destaque = m.autor_role != null && ROLES_EQUIPE.has(m.autor_role);
          const rotulo = destaque ? rotuloRole(m.autor_role, t) : null;
          return (
            <div key={m.id} className="text-sm py-0.5 break-words">
              <span className={destaque ? "font-semibold text-amber-400" : `font-semibold ${corDoAutor(m.autor_nome)}`}>
                {m.autor_nome}
              </span>
              {rotulo && (
                <span className="mx-1 rounded bg-amber-400/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-400 align-middle">
                  {rotulo}
                </span>
              )}
              <span className="text-foreground">: {m.texto}</span>
            </div>
          );
        })}
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
