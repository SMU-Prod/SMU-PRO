"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import {
  GraduationCap, Users, DollarSign, Award, Wallet, TrendingUp,
  ArrowRight, BookOpen,
} from "lucide-react";

interface InstructorDashboardProps {
  stats: {
    totalCursos: number;
    totalAlunos: number;
    receitaBruta: number;
    totalCertificados: number;
    comissaoTotal: number;
    comissaoPendente: number;
    cursos: { id: string; titulo: string; preco: number | null; tipo: string }[];
  };
}

export function InstructorDashboard({ stats }: InstructorDashboardProps) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="border-b border-border bg-surface px-4 sm:px-6 py-5 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <GraduationCap size={22} className="text-amber-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Painel do Instrutor</h1>
            <p className="text-sm text-muted-light">Acompanhe seus cursos, alunos e comissões</p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <KpiCard
            icon={<BookOpen size={20} className="text-amber-400" />}
            label="Meus Cursos"
            value={stats.totalCursos}
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<Users size={20} className="text-blue-400" />}
            label="Total de Alunos"
            value={stats.totalAlunos}
            bg="bg-blue-500/10"
          />
          <KpiCard
            icon={<DollarSign size={20} className="text-emerald-400" />}
            label="Receita Bruta"
            value={formatCurrency(stats.receitaBruta)}
            bg="bg-emerald-500/10"
          />
          <KpiCard
            icon={<Award size={20} className="text-purple-400" />}
            label="Certificados Emitidos"
            value={stats.totalCertificados}
            bg="bg-purple-500/10"
          />
          <KpiCard
            icon={<Wallet size={20} className="text-green-400" />}
            label="Comissão Total"
            value={formatCurrency(stats.comissaoTotal)}
            bg="bg-green-500/10"
          />
          <KpiCard
            icon={<TrendingUp size={20} className="text-orange-400" />}
            label="Comissão Pendente"
            value={formatCurrency(stats.comissaoPendente)}
            bg="bg-orange-500/10"
          />
        </div>

        {/* Meus Cursos */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Meus Cursos</h2>
            <Link href="/admin/cursos" className="text-sm text-amber-400 hover:underline flex items-center gap-1">
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>

          {stats.cursos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <GraduationCap size={40} className="mx-auto text-muted-light mb-3" />
                <p className="text-muted-light">Você ainda não tem cursos atribuídos.</p>
                <p className="text-xs text-muted-light mt-1">O administrador precisa criar um curso vinculado a você.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.cursos.map((curso) => (
                <Link key={curso.id} href={`/admin/cursos/${curso.id}/editar`} className="group">
                  <Card className="hover:border-amber-500/30 transition-all hover:-translate-y-0.5">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors mb-2 line-clamp-1">
                        {curso.titulo}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={curso.tipo === "free" ? "free" : "default"}>
                          {curso.tipo === "free" ? "Grátis" : formatCurrency(curso.preco ?? 0)}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/admin/meus-alunos">
            <Card className="hover:border-blue-500/30 transition-all cursor-pointer">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Users size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Meus Alunos</p>
                  <p className="text-sm text-muted-light">Ver alunos matriculados nos seus cursos</p>
                </div>
                <ArrowRight size={18} className="text-muted-light ml-auto shrink-0" />
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/minhas-comissoes">
            <Card className="hover:border-green-500/30 transition-all cursor-pointer">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <Wallet size={24} className="text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Minhas Comissões</p>
                  <p className="text-sm text-muted-light">Acompanhe seus ganhos e pagamentos</p>
                </div>
                <ArrowRight size={18} className="text-muted-light ml-auto shrink-0" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ icon, label, value, bg }: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  bg: string;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-light">{label}</p>
            <p className="text-lg font-bold text-foreground truncate">
              {typeof value === "number" ? value.toLocaleString("pt-BR") : value}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
