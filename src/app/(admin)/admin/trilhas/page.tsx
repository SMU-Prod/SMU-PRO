import { adminGetCollections } from "@/lib/actions/collections";
import { adminGetAllCourses } from "@/lib/actions/courses";
import { Header } from "@/components/layout/header";
import { CollectionsManager } from "@/components/admin/collections-manager";
import { TrendingUp } from "lucide-react";

export default async function AdminTrilhasPage() {
  let collections: any[] = [];
  let error = "";

  try {
    collections = await adminGetCollections();
  } catch (e: any) {
    // Table may not exist yet
    error = e?.message ?? "Erro ao carregar trilhas";
  }

  const { courses } = await adminGetAllCourses({ limit: 200 });

  if (error) {
    return (
      <div className="animate-fade-in">
        <Header title="Trilhas de Aprendizado" subtitle="Agrupe cursos em trilhas sequenciais" />
        <div className="p-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center max-w-lg mx-auto">
            <TrendingUp size={32} className="text-amber-400 mx-auto mb-3" />
            <p className="font-semibold text-amber-900 mb-2">Tabela não encontrada</p>
            <p className="text-sm text-amber-700 mb-4">
              Execute o SQL abaixo no Supabase para criar as tabelas de trilhas:
            </p>
            <pre className="text-left text-xs bg-white border border-amber-200 rounded-lg p-3 overflow-auto text-gray-800 whitespace-pre-wrap">
{`CREATE TABLE IF NOT EXISTS collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descricao TEXT,
  slug TEXT UNIQUE NOT NULL,
  thumbnail_url TEXT,
  ativo BOOLEAN DEFAULT false,
  ordem INT DEFAULT 0,
  criado_por UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS collection_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID REFERENCES collections(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  ordem INT DEFAULT 0,
  UNIQUE(collection_id, course_id)
);`}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Header
        title="Trilhas de Aprendizado"
        subtitle={`${collections.length} trilha${collections.length !== 1 ? "s" : ""} cadastrada${collections.length !== 1 ? "s" : ""}`}
      />
      <div className="p-6">
        <CollectionsManager collections={collections} allCourses={courses} />
      </div>
    </div>
  );
}
