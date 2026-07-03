"use client";

import { useState, useTransition } from "react";
import { adminUpdatePlan, adminCreatePlan } from "@/lib/actions/subscriptions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard, Users, Check, X, Edit2, Plus, Save,
  Sparkles, TrendingUp, Crown, AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/lib/utils";

interface Props {
  plans: any[];
  subscriptions: any[];
  total: number;
}

export function SubscriptionManager({ plans, subscriptions, total }: Props) {
  const router = useRouter();
  const [editingPlan, setEditingPlan] = useState<string | null>(null);
  const [showNewPlan, setShowNewPlan] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Planos */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-foreground flex items-center gap-2">
            <Crown size={16} className="text-amber-400" />
            Planos de Assinatura
          </h2>
          <Button size="sm" variant="outline" onClick={() => setShowNewPlan(true)}>
            <Plus size={14} /> Novo Plano
          </Button>
        </div>

        <div className="grid gap-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              editing={editingPlan === plan.id}
              onEdit={() => setEditingPlan(plan.id)}
              onCancel={() => setEditingPlan(null)}
              onSave={async (updates) => {
                startTransition(async () => {
                  await adminUpdatePlan(plan.id, updates);
                  setEditingPlan(null);
                  router.refresh();
                });
              }}
              isPending={isPending}
            />
          ))}

          {showNewPlan && (
            <NewPlanForm
              onCancel={() => setShowNewPlan(false)}
              onSave={async (input) => {
                startTransition(async () => {
                  await adminCreatePlan(input);
                  setShowNewPlan(false);
                  router.refresh();
                });
              }}
              isPending={isPending}
            />
          )}
        </div>
      </section>

      {/* Assinantes */}
      <section>
        <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
          <Users size={16} className="text-amber-400" />
          Assinantes ({total})
        </h2>

        {subscriptions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <CreditCard size={32} className="text-muted-light mx-auto mb-3" />
              <p className="text-sm text-muted-light">
                Nenhum assinante ainda. Os assinantes aparecerão aqui quando os alunos aderirem a um plano.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <div className="divide-y divide-border">
              {subscriptions.map((sub: any) => {
                const user = sub.users as any;
                const plan = sub.subscription_plans as any;
                return (
                  <div key={sub.id} className="flex items-center gap-4 px-5 py-4">
                    <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center">
                      <Users size={16} className="text-muted-light" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {user?.nome ?? "Aluno"}
                      </p>
                      <p className="text-xs text-muted-light">{user?.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-light">{plan?.nome}</p>
                      <p className="text-sm font-medium text-foreground">
                        {formatCurrency(plan?.preco_mensal ?? 0)}/mês
                      </p>
                    </div>
                    <StatusBadge status={sub.status} />
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </section>
    </div>
  );
}

function PlanCard({ plan, editing, onEdit, onCancel, onSave, isPending }: {
  plan: any;
  editing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: (updates: any) => void;
  isPending: boolean;
}) {
  const [nome, setNome] = useState(plan.nome);
  const [preco, setPreco] = useState(String(plan.preco_mensal));
  const [precoAnual, setPrecoAnual] = useState(String(plan.preco_anual ?? ""));
  const [descricao, setDescricao] = useState(plan.descricao ?? "");
  const [featuresText, setFeaturesText] = useState(
    (plan.features ?? []).join("\n")
  );

  if (editing) {
    return (
      <Card className="border-amber-500/30">
        <CardContent className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-light mb-1 block">Nome do Plano</label>
              <Input value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-light mb-1 block">Descrição</label>
              <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-light mb-1 block">Preço Mensal (R$)</label>
              <Input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-light mb-1 block">Preço Anual (R$) — opcional</label>
              <Input type="number" step="0.01" value={precoAnual} onChange={(e) => setPrecoAnual(e.target.value)} placeholder="Desconto anual" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-light mb-1 block">Features (uma por linha)</label>
            <textarea
              value={featuresText}
              onChange={(e) => setFeaturesText(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={onCancel} disabled={isPending}>
              <X size={14} /> Cancelar
            </Button>
            <Button
              size="sm"
              disabled={isPending}
              onClick={() => onSave({
                nome,
                descricao: descricao || null,
                preco_mensal: Number(preco),
                preco_anual: precoAnual ? Number(precoAnual) : null,
                features: featuresText.split("\n").map((f: string) => f.trim()).filter(Boolean),
              })}
            >
              <Save size={14} /> Salvar
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:border-amber-500/20 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground">{plan.nome}</h3>
              <Badge variant={plan.ativo ? "success" : "secondary"}>
                {plan.ativo ? "Ativo" : "Inativo"}
              </Badge>
            </div>
            {plan.descricao && (
              <p className="text-sm text-muted-light mb-3">{plan.descricao}</p>
            )}

            <div className="flex items-baseline gap-4 mb-3">
              <div>
                <span className="text-2xl font-bold text-foreground">
                  {formatCurrency(plan.preco_mensal)}
                </span>
                <span className="text-sm text-muted-light">/mês</span>
              </div>
              {plan.preco_anual && (
                <div className="text-sm text-muted-light">
                  ou {formatCurrency(plan.preco_anual)}/ano
                  <span className="ml-1 text-emerald-400 font-medium">
                    ({Math.round((1 - plan.preco_anual / (plan.preco_mensal * 12)) * 100)}% off)
                  </span>
                </div>
              )}
            </div>

            {plan.features?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {plan.features.map((f: string, i: number) => (
                  <span key={i} className="inline-flex items-center gap-1 text-xs text-muted-light bg-surface-2 rounded-full px-2.5 py-1">
                    <Check size={10} className="text-emerald-400" /> {f}
                  </span>
                ))}
              </div>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onEdit}>
            <Edit2 size={14} /> Editar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function NewPlanForm({ onCancel, onSave, isPending }: {
  onCancel: () => void;
  onSave: (input: any) => void;
  isPending: boolean;
}) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <Card className="border-amber-500/30 border-dashed">
      <CardContent className="p-5 space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Plus size={16} className="text-amber-400" />
          Novo Plano de Assinatura
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-muted-light mb-1 block">Nome *</label>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="SMU PRO Premium" />
          </div>
          <div>
            <label className="text-xs text-muted-light mb-1 block">Preço Mensal (R$) *</label>
            <Input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="49.90" />
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-light mb-1 block">Descrição</label>
          <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Acesso a todos os cursos da plataforma" />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onCancel} disabled={isPending}>Cancelar</Button>
          <Button
            size="sm"
            disabled={isPending || !nome || !preco}
            onClick={() => onSave({ nome, preco_mensal: Number(preco), descricao: descricao || undefined })}
          >
            <Sparkles size={14} /> Criar Plano
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; variant: string }> = {
    ativo: { label: "Ativo", variant: "success" },
    pendente: { label: "Pendente", variant: "warning" },
    cancelado: { label: "Cancelado", variant: "secondary" },
    expirado: { label: "Expirado", variant: "secondary" },
    inadimplente: { label: "Inadimplente", variant: "danger" },
  };
  const { label, variant } = map[status] ?? { label: status, variant: "secondary" };
  return <Badge variant={variant as any}>{label}</Badge>;
}
