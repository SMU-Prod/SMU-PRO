"use client";

import { useClerk } from "@clerk/nextjs";
import { ShieldX } from "lucide-react";

export default function ContaDesativadaPage() {
  const { signOut } = useClerk();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full rounded-2xl border border-red-500/20 bg-surface p-8 text-center space-y-4">
        <div className="mx-auto h-14 w-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <ShieldX size={28} className="text-red-400" />
        </div>
        <h1 className="text-xl font-bold text-foreground">Acesso desativado</h1>
        <p className="text-sm text-muted-light">
          Sua conta foi desativada e o acesso à plataforma está bloqueado. Se você
          acredita que isso é um engano, entre em contato com a administração.
        </p>
        <button
          onClick={() => signOut({ redirectUrl: "/login" })}
          className="w-full h-10 rounded-lg bg-amber-500 text-white text-sm font-semibold hover:bg-amber-400 transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
