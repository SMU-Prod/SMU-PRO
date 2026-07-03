"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createUserSubscription, cancelUserSubscription } from "@/lib/actions/subscriptions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import {
  Crown, Check, CreditCard, Star, BookOpen, Clock,
  AlertTriangle, Sparkles, X,
} from "lucide-react";

interface Props {
  plan: any;
  subscription: any;
  courses: any[];
}

export function SubscriptionPageClient({ plan, subscription, courses }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const [selectedCiclo, setSelectedCiclo] = useState<"mensal" | "anual">("mensal");

  if (!plan) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <Crown size={48} className="text-muted-light mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">
          Nenhum plano disponível
        </h2>
        <p className="text-sm text-muted-light">
          No momento não há planos de assinatura ativos. Volte mais tarde.
        </p>
      </div>
    );
  }

  const isActive = subscription?.status === "ativo";
  const isPendingSub = subscription?.status === "pendente";

  // Assinatura ativa
  if (isActive || isPendingSub) {
    const subPlan = subscription.subscription_plans ?? plan;
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="border-amber-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-amber-500/15 flex items-center justify-center shrink-0">
                <Crown size={28} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold text-foreground">{subPlan.nome}</h2>
                  <Badge variant={isActive ? "success" : "warning"}>
                    {isActive ? "Ativo" : "Aguardando pagamento"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-light mb-4">
                  Ciclo {subscription.ciclo} · Próximo pagamento:{" "}
                  {subscription.data_proximo_pagamento
                    ? new Date(subscription.data_proximo_pagamento).toLocaleDateString("pt-BR")
                    : "—"}
                </p>

                <div className="text-2xl font-bold text-foreground">
                  {formatCurrency(subPlan.preco_mensal)}<span className="text-sm font-normal text-muted-light">/mês</span>
                </div>
              </div>
            </div>

            {/* Features */}
            {subPlan.features?.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-2">
                {subPlan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-light">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            )}

            {/* Cancel */}
            <div className="mt-6 pt-4 border-t border-border">
              {showCancel ? (
                <div className="flex items-center gap-3">
                  <AlertTriangle size={16} className="text-red-400 shrink-0" />
                  <p className="text-sm text-red-400 flex-1">
                    Tem certeza? Você perderá acesso aos cursos da assinatura.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCancel(false)}
                    disabled={isPending}
                  >
                    Não
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    disabled={isPending}
                    onClick={() => {
                      startTransition(async () => {
                        try {
                          await cancelUserSubscription();
                          router.refresh();
                        } catch (err: any) {
                          setError(err.message);
                        }
                      });
                    }}
                  >
                    Sim, cancelar
                  </Button>
                </div>
              ) : (
                <button
                  onClick={() => setShowCancel(true)}
                  className="text-sm text-muted-light hover:text-red-400 transition-colors"
                >
                  Cancelar assinatura
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Cursos inclusos */}
        {courses.length > 0 && (
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-amber-400" />
              Cursos inclusos na sua assinatura ({courses.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map((c: any) => (
                <Card key={c.id} className="hover:border-amber-500/20 transition-colors">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CategoryIcon category={c.categoria} size={24} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{c.titulo}</p>
                      <p className="text-xs text-muted-light">
                        {c.carga_horaria ? `${Math.round(c.carga_horaria / 60)}h` : ""} · {formatCurrency(c.preco ?? 0)}
                      </p>
                    </div>
                    <Check size={16} className="text-emerald-400 shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Sem assinatura — mostrar oferta
  const precoMensal = plan.preco_mensal;
  const precoAnual = plan.preco_anual;
  const economiaAnual = precoAnual
    ? Math.round((1 - precoAnual / (precoMensal * 12)) * 100)
    : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          <AlertTriangle size={15} /> {error}
        </div>
      )}

      {/* Hero do plano */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-amber-500/15 flex items-center justify-center mx-auto mb-4">
          <Crown size={32} className="text-amber-400" />
        </div>
        <h2 className="text-3xl font-black text-foreground mb-2">{plan.nome}</h2>
        {plan.descricao && (
          <p className="text-muted-light max-w-md mx-auto">{plan.descricao}</p>
        )}
      </div>

      {/* Seletor de ciclo */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setSelectedCiclo("mensal")}
          className={`rounded-xl border-2 px-6 py-3 text-center transition-all ${
            selectedCiclo === "mensal"
              ? "border-amber-500 bg-amber-500/10"
              : "border-border hover:border-border-strong"
          }`}
        >
          <p className="text-sm font-semibold text-foreground">Mensal</p>
          <p className="text-2xl font-black text-foreground mt-1">
            {formatCurrency(precoMensal)}<span className="text-sm font-normal text-muted-light">/mês</span>
          </p>
        </button>

        {precoAnual && (
          <button
            onClick={() => setSelectedCiclo("anual")}
            className={`relative rounded-xl border-2 px-6 py-3 text-center transition-all ${
              selectedCiclo === "anual"
                ? "border-amber-500 bg-amber-500/10"
                : "border-border hover:border-border-strong"
            }`}
          >
            {economiaAnual > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-emerald-500 text-white rounded-full px-2 py-0.5">
                -{economiaAnual}%
              </span>
            )}
            <p className="text-sm font-semibold text-foreground">Anual</p>
            <p className="text-2xl font-black text-foreground mt-1">
              {formatCurrency(precoAnual / 12)}<span className="text-sm font-normal text-muted-light">/mês</span>
            </p>
            <p className="text-xs text-muted-light">{formatCurrency(precoAnual)}/ano</p>
          </button>
        )}
      </div>

      {/* Features */}
      {plan.features?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {plan.features.map((f: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-light">
              <Check size={14} className="text-emerald-400 shrink-0" />
              {f}
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="gap-2 px-8"
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              try {
                setError("");
                await createUserSubscription({
                  planId: plan.id,
                  billingType: "PIX",
                  ciclo: selectedCiclo,
                });
                router.refresh();
              } catch (err: any) {
                setError(err.message);
              }
            });
          }}
        >
          <Sparkles size={18} />
          {isPending ? "Processando..." : `Assinar por ${formatCurrency(
            selectedCiclo === "anual" && precoAnual ? precoAnual / 12 : precoMensal
          )}/mês`}
        </Button>
      </div>

      {/* Cursos inclusos */}
      {courses.length > 0 && (
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-center">
            {courses.length} cursos inclusos na assinatura
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courses.map((c: any) => (
              <Card key={c.id} className="hover:border-amber-500/20 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <CategoryIcon category={c.categoria} size={24} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{c.titulo}</p>
                    <p className="text-xs text-muted-light">
                      Valor individual: {formatCurrency(c.preco ?? 0)}
                    </p>
                  </div>
                  <Star size={14} className="text-amber-400 fill-amber-400 shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
