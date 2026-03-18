"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { updateUserProfile } from "@/lib/actions/users";
import { CheckCircle, Loader2 } from "lucide-react";
import type { User } from "@/types/database";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  cpf: z.string().optional().refine(
    (val) => !val || cpfRegex.test(val) || /^\d{11}$/.test(val),
    { message: "CPF inválido (use 000.000.000-00)" }
  ),
  bio: z.string().max(500, "Bio deve ter no máximo 500 caracteres").optional(),
  telefone: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().max(2, "Use a sigla do estado (ex: SP)").optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  user: User;
}

const inputClass = "w-full rounded-xl bg-surface-2 border border-border-strong px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors";

export function ProfileForm({ user }: Props) {
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      nome: user.nome ?? "",
      cpf: user.cpf ?? "",
      bio: user.bio ?? "",
      telefone: user.telefone ?? "",
      cidade: user.cidade ?? "",
      estado: user.estado ?? "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      await updateUserProfile(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar. Tente novamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-muted mb-1.5">Nome completo</label>
          <input {...register("nome")} className={inputClass} placeholder="Seu nome" />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-1.5">CPF</label>
          <input {...register("cpf")} className={inputClass} placeholder="000.000.000-00" maxLength={14} />
          {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
          <p className="text-xs text-muted-light mt-1">Necessário para pagamentos via PIX/Boleto</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-muted mb-1.5">Telefone</label>
          <input {...register("telefone")} className={inputClass} placeholder="(11) 99999-9999" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-muted mb-1.5">Cidade</label>
          <input {...register("cidade")} className={inputClass} placeholder="São Paulo" />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-1.5">Estado (sigla)</label>
          <input
            {...register("estado")}
            maxLength={2}
            className={inputClass + " uppercase"}
            placeholder="SP"
          />
          {errors.estado && <p className="text-red-500 text-xs mt-1">{errors.estado.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted mb-1.5">Bio</label>
        <textarea
          {...register("bio")}
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Conte um pouco sobre você e sua experiência no mercado de eventos..."
        />
        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button type="submit" disabled={isSubmitting} className="gap-2">
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : saved ? (
            <CheckCircle size={16} />
          ) : null}
          {isSubmitting ? "Salvando..." : saved ? "Salvo!" : "Salvar alterações"}
        </Button>
        {saved && (
          <span className="text-sm text-emerald-600">Perfil atualizado com sucesso</span>
        )}
      </div>
    </form>
  );
}
