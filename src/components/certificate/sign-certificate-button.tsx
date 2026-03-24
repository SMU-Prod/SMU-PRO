"use client";

import { useState, useTransition } from "react";
import { PenTool, Check } from "lucide-react";
import { SignaturePad } from "./signature-pad";
import { signCertificate } from "@/lib/actions/signatures";
import { useRouter } from "next/navigation";

interface Props {
  certificateId: string;
  alreadySigned: boolean;
}

export function SignCertificateButton({ certificateId, alreadySigned }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [done, setDone] = useState(alreadySigned);
  const router = useRouter();

  if (done) {
    return (
      <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-400">
        <Check size={12} /> Assinado
      </span>
    );
  }

  const handleSave = async (dataUrl: string) => {
    startTransition(async () => {
      await signCertificate(certificateId, dataUrl);
      setDone(true);
      setOpen(false);
      router.refresh();
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        disabled={isPending}
        className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 hover:bg-blue-500/20 transition-colors disabled:opacity-40"
      >
        <PenTool size={12} /> Assinar
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-xl">
            <SignaturePad
              label="Assine seu certificado"
              onSave={handleSave}
              onCancel={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
