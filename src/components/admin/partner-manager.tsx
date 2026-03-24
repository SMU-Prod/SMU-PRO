"use client";

import { useState } from "react";
import {
  createPartner,
  updatePartner,
  deletePartner,
  assignPartnerToCourse,
  removePartnerFromCourse,
} from "@/lib/actions/partners";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Trash2,
  Link2,
  DollarSign,
  Percent,
  Save,
  X,
  ChevronDown,
  ChevronUp,
  Wallet,
  Mail,
  TrendingUp,
} from "lucide-react";

interface Props {
  partners: any[];
  courses: any[];
  commissions: any[];
}

export function PartnerManager({ partners: initialPartners, courses, commissions }: Props) {
  const [partners, setPartners] = useState(initialPartners);
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // New partner form
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [comissao, setComissao] = useState(40);
  const [walletId, setWalletId] = useState("");

  // Assign course form
  const [assignCourseId, setAssignCourseId] = useState("");
  const [assignComissao, setAssignComissao] = useState<number | "">("");
  const [assignIndicacao, setAssignIndicacao] = useState(60);

  const resetForm = () => {
    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
    setComissao(40);
    setWalletId("");
    setShowForm(false);
  };

  const handleCreate = async () => {
    if (!nome || !email) return;
    setLoading(true);
    try {
      const partner = await createPartner({
        nome,
        email,
        cpf: cpf || undefined,
        telefone: telefone || undefined,
        comissao_padrao: comissao,
        asaas_wallet_id: walletId || undefined,
      });
      setPartners((prev) => [{ ...partner, partner_courses: [] }, ...prev]);
      resetForm();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Desativar este parceiro?")) return;
    setLoading(true);
    try {
      await deletePartner(id);
      setPartners((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAssign = async (partnerId: string) => {
    if (!assignCourseId) return;
    setLoading(true);
    try {
      await assignPartnerToCourse({
        partnerId,
        courseId: assignCourseId,
        comissaoPercentual: assignComissao === "" ? undefined : assignComissao,
        comissaoIndicacao: assignIndicacao,
      });
      // Refresh — simples: recarregar
      window.location.reload();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveCourse = async (partnerId: string, courseId: string) => {
    setLoading(true);
    try {
      await removePartnerFromCourse(partnerId, courseId);
      setPartners((prev) =>
        prev.map((p) =>
          p.id === partnerId
            ? { ...p, partner_courses: p.partner_courses?.filter((pc: any) => pc.course_id !== courseId) }
            : p
        )
      );
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleWalletUpdate = async (partnerId: string, newWalletId: string) => {
    setLoading(true);
    try {
      await updatePartner(partnerId, { asaas_wallet_id: newWalletId });
      setPartners((prev) =>
        prev.map((p) => (p.id === partnerId ? { ...p, asaas_wallet_id: newWalletId } : p))
      );
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalComissoes = commissions.reduce((s: number, c: any) => s + (Number(c.valor_comissao) || 0), 0);

  const inputClass =
    "w-full rounded-lg bg-surface-2 border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors";

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-xl bg-surface border border-border px-4 py-3">
          <p className="text-xl font-bold text-foreground">{partners.length}</p>
          <p className="text-xs text-muted-light">Parceiros</p>
        </div>
        <div className="rounded-xl bg-surface border border-border px-4 py-3">
          <p className="text-xl font-bold text-amber-500">{commissions.length}</p>
          <p className="text-xs text-muted-light">Comissões</p>
        </div>
        <div className="rounded-xl bg-surface border border-border px-4 py-3">
          <p className="text-xl font-bold text-emerald-500">
            R$ {totalComissoes.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-muted-light">Total pago</p>
        </div>
        <div className="rounded-xl bg-surface border border-border px-4 py-3">
          <p className="text-xl font-bold text-blue-500">
            {partners.filter((p: any) => p.asaas_wallet_id).length}
          </p>
          <p className="text-xs text-muted-light">Com Wallet Asaas</p>
        </div>
      </div>

      {/* Add partner button */}
      <Button onClick={() => setShowForm((v) => !v)} className="gap-2">
        <UserPlus size={16} />
        {showForm ? "Cancelar" : "Adicionar Parceiro"}
      </Button>

      {/* New partner form */}
      {showForm && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Novo Parceiro</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputClass} placeholder="Nome completo *" value={nome} onChange={(e) => setNome(e.target.value)} />
              <input className={inputClass} placeholder="Email *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className={inputClass} placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
              <input className={inputClass} placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              <div className="flex items-center gap-2">
                <Percent size={14} className="text-muted-light shrink-0" />
                <input
                  className={inputClass}
                  type="number"
                  min={0}
                  max={80}
                  placeholder="Comissão padrão %"
                  value={comissao}
                  onChange={(e) => setComissao(Number(e.target.value))}
                />
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={14} className="text-muted-light shrink-0" />
                <input className={inputClass} placeholder="Wallet ID Asaas" value={walletId} onChange={(e) => setWalletId(e.target.value)} />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button onClick={handleCreate} disabled={loading || !nome || !email} className="gap-2">
                <Save size={14} />
                Salvar Parceiro
              </Button>
              <Button variant="ghost" onClick={resetForm}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Partner list */}
      <div className="space-y-3">
        {partners.map((partner: any) => {
          const isExpanded = expandedId === partner.id;
          const partnerCommissions = commissions.filter((c: any) => c.partner_id === partner.id);
          const partnerTotal = partnerCommissions.reduce((s: number, c: any) => s + (Number(c.valor_comissao) || 0), 0);

          return (
            <Card key={partner.id}>
              <CardContent className="p-0">
                {/* Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : partner.id)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-hover transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {partner.nome?.[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium text-foreground">{partner.nome}</p>
                      <Badge variant={partner.asaas_wallet_id ? "success" : "danger"} className="text-[10px]">
                        {partner.asaas_wallet_id ? "Wallet OK" : "Sem Wallet"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-light mt-0.5">
                      <span className="flex items-center gap-1"><Mail size={10} />{partner.email}</span>
                      <span className="flex items-center gap-1"><Percent size={10} />{partner.comissao_padrao}%</span>
                      <span className="flex items-center gap-1"><TrendingUp size={10} />R$ {partnerTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-light">{partner.partner_courses?.length ?? 0} cursos</span>
                    {isExpanded ? <ChevronUp size={16} className="text-muted-light" /> : <ChevronDown size={16} className="text-muted-light" />}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="border-t border-border/50 p-4 space-y-4">
                    {/* Wallet ID edit */}
                    <div className="flex items-center gap-2">
                      <Wallet size={14} className="text-muted-light shrink-0" />
                      <input
                        className={`${inputClass} max-w-xs`}
                        placeholder="Wallet ID Asaas"
                        defaultValue={partner.asaas_wallet_id ?? ""}
                        onBlur={(e) => {
                          if (e.target.value !== (partner.asaas_wallet_id ?? "")) {
                            handleWalletUpdate(partner.id, e.target.value);
                          }
                        }}
                      />
                      <span className="text-[10px] text-muted-light">Necessário para split automático</span>
                    </div>

                    {/* Current courses */}
                    <div>
                      <p className="text-xs font-semibold text-muted mb-2">Cursos vinculados:</p>
                      {partner.partner_courses?.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {partner.partner_courses.map((pc: any) => (
                            <span
                              key={pc.id}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs border border-amber-500/20"
                            >
                              {pc.courses?.titulo ?? "Curso"}
                              <span className="text-amber-300">({pc.comissao_percentual ?? partner.comissao_padrao}%)</span>
                              <button
                                onClick={() => handleRemoveCourse(partner.id, pc.course_id)}
                                className="hover:text-red-400 transition-colors ml-0.5"
                              >
                                <X size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-muted-light">Nenhum curso vinculado</p>
                      )}
                    </div>

                    {/* Assign course */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
                      <div className="flex-1 min-w-0">
                        <label className="text-[10px] text-muted-light uppercase tracking-wider font-semibold mb-1 block">Vincular curso</label>
                        <select
                          className={inputClass}
                          value={assignCourseId}
                          onChange={(e) => setAssignCourseId(e.target.value)}
                        >
                          <option value="">Selecione um curso</option>
                          {courses.map((c: any) => (
                            <option key={c.id} value={c.id}>
                              {c.titulo}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-24">
                        <label className="text-[10px] text-muted-light uppercase tracking-wider font-semibold mb-1 block">Comissão %</label>
                        <input
                          className={inputClass}
                          type="number"
                          min={0}
                          max={80}
                          placeholder={`${partner.comissao_padrao}%`}
                          value={assignComissao}
                          onChange={(e) => setAssignComissao(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                      </div>
                      <div className="w-24">
                        <label className="text-[10px] text-muted-light uppercase tracking-wider font-semibold mb-1 block">Indicação %</label>
                        <input
                          className={inputClass}
                          type="number"
                          min={0}
                          max={80}
                          value={assignIndicacao}
                          onChange={(e) => setAssignIndicacao(Number(e.target.value))}
                        />
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleAssign(partner.id)}
                        disabled={loading || !assignCourseId}
                        className="gap-1"
                      >
                        <Link2 size={12} />
                        Vincular
                      </Button>
                    </div>

                    {/* Recent commissions */}
                    {partnerCommissions.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-muted mb-2">Últimas comissões:</p>
                        <div className="space-y-1">
                          {partnerCommissions.slice(0, 5).map((c: any) => (
                            <div key={c.id} className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg bg-surface-2">
                              <span className="text-muted">{c.courses?.titulo ?? "Curso"}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-muted-light">
                                  R$ {Number(c.valor_venda).toFixed(2)} × {c.comissao_percentual}%
                                </span>
                                <span className="font-medium text-emerald-500">
                                  R$ {Number(c.valor_comissao).toFixed(2)}
                                </span>
                                <Badge
                                  variant={c.status === "pago" ? "success" : c.status === "cancelado" ? "danger" : "warning"}
                                  className="text-[9px]"
                                >
                                  {c.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2 border-t border-border/50">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 gap-1"
                        onClick={() => handleDelete(partner.id)}
                        disabled={loading}
                      >
                        <Trash2 size={12} />
                        Desativar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}

        {partners.length === 0 && (
          <div className="text-center py-12">
            <DollarSign size={40} className="mx-auto text-muted-light mb-3" />
            <p className="text-foreground font-medium">Nenhum parceiro cadastrado</p>
            <p className="text-sm text-muted-light mt-1">
              Adicione instrutores parceiros que receberão comissão por cada venda dos cursos deles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
