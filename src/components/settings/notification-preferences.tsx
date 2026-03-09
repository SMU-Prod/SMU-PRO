"use client";

import { useState, useEffect } from "react";
import {
  getNotificationPreferences,
  updateNotificationPreferences,
} from "@/lib/actions/notifications";
import type { NotificationPreferences } from "@/types/database";

type PrefKey = keyof Omit<NotificationPreferences, "id" | "user_id" | "created_at" | "updated_at">;

const PREF_ITEMS: { key: PrefKey; label: string; description: string }[] = [
  { key: "email_course_updates", label: "E-mails de atualizações de cursos", description: "Receba alertas quando novos conteúdos forem adicionados" },
  { key: "email_certificates", label: "E-mails de certificados", description: "Aviso por e-mail quando um certificado for emitido" },
  { key: "email_payments", label: "E-mails de pagamentos", description: "Confirmações e recibos de pagamento" },
  { key: "email_promotions", label: "Promoções e novidades", description: "Ofertas especiais e novos cursos" },
  { key: "inapp_course_updates", label: "Notificações de cursos", description: "Atualizações de cursos no sino de notificações" },
  { key: "inapp_certificates", label: "Notificações de certificados", description: "Alertas quando certificados ficarem disponíveis" },
  { key: "inapp_quiz_results", label: "Resultados de quizzes", description: "Notificação ao completar quizzes" },
  { key: "inapp_payments", label: "Notificações de pagamentos", description: "Alertas de pagamento no sino de notificações" },
  { key: "inapp_system", label: "Avisos do sistema", description: "Manutenções, novidades e alertas gerais" },
  { key: "study_reminders", label: "Lembretes de estudo", description: "Notificações semanais para manter seu progresso" },
];

export function NotificationPreferencesForm() {
  const [prefs, setPrefs] = useState<Record<PrefKey, boolean> | null>(null);
  const [saving, setSaving] = useState<PrefKey | null>(null);

  useEffect(() => {
    getNotificationPreferences().then((data) => {
      if (data) {
        const mapped: Record<string, boolean> = {};
        for (const item of PREF_ITEMS) {
          mapped[item.key] = (data as any)[item.key] ?? true;
        }
        setPrefs(mapped as Record<PrefKey, boolean>);
      }
    });
  }, []);

  async function handleToggle(key: PrefKey) {
    if (!prefs) return;
    const newValue = !prefs[key];
    setPrefs({ ...prefs, [key]: newValue });
    setSaving(key);
    try {
      await updateNotificationPreferences({ [key]: newValue });
    } catch {
      // Revert on error
      setPrefs({ ...prefs, [key]: !newValue });
    } finally {
      setSaving(null);
    }
  }

  if (!prefs) {
    return (
      <div className="px-5 py-6 flex justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <>
      {PREF_ITEMS.map((item) => (
        <div key={item.key} className="flex items-center gap-4 px-5 py-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            <p className="text-xs text-muted-light mt-0.5">{item.description}</p>
          </div>
          <button
            onClick={() => handleToggle(item.key)}
            disabled={saving === item.key}
            className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors cursor-pointer ${
              prefs[item.key]
                ? "bg-amber-500 border-amber-500"
                : "bg-surface-3 border-border-strong"
            } ${saving === item.key ? "opacity-50" : ""}`}
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                prefs[item.key] ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      ))}
    </>
  );
}
