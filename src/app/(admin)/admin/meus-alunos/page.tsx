import { instructorGetMyStudents, instructorGetMyCourses } from "@/lib/actions/courses";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Mail } from "lucide-react";

export default async function InstructorStudentsPage({
  searchParams,
}: {
  searchParams: Promise<{ curso?: string }>;
}) {
  const params = await searchParams;
  const [students, courses] = await Promise.all([
    instructorGetMyStudents(params.curso),
    instructorGetMyCourses(),
  ]);

  return (
    <div className="animate-fade-in">
      <Header
        title="Meus Alunos"
        subtitle={`${students.length} aluno${students.length !== 1 ? "s" : ""} matriculado${students.length !== 1 ? "s" : ""}`}
        role="instrutor"
      />

      <div className="p-4 sm:p-6 space-y-6">
        {/* Filtro por curso */}
        <div className="flex flex-wrap gap-2">
          <a
            href="/admin/meus-alunos"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              !params.curso
                ? "bg-amber-500 text-black"
                : "bg-surface-2 text-muted hover:text-foreground border border-border"
            }`}
          >
            Todos
          </a>
          {(courses as any[]).map((c: any) => (
            <a
              key={c.course_id ?? c.id}
              href={`/admin/meus-alunos?curso=${c.course_id ?? c.id}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                params.curso === (c.course_id ?? c.id)
                  ? "bg-amber-500 text-black"
                  : "bg-surface-2 text-muted hover:text-foreground border border-border"
              }`}
            >
              {c.titulo}
            </a>
          ))}
        </div>

        {/* Lista de alunos */}
        {students.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <Users size={48} className="mx-auto text-muted-light mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum aluno encontrado</h3>
              <p className="text-muted-light text-sm">Os alunos aparecerão aqui quando se matricularem nos seus cursos.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {students.map((enrollment: any) => (
              <Card key={enrollment.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-surface-3 flex items-center justify-center shrink-0 overflow-hidden">
                    {enrollment.users?.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={enrollment.users.avatar_url} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-sm font-bold text-muted-light">
                        {(enrollment.users?.nome ?? "?")[0]?.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{enrollment.users?.nome ?? "—"}</p>
                    <p className="text-xs text-muted-light truncate flex items-center gap-1">
                      <Mail size={10} /> {enrollment.users?.email ?? "—"}
                    </p>
                  </div>

                  {/* Curso */}
                  <div className="hidden sm:block">
                    <Badge variant="secondary" className="text-xs">
                      <BookOpen size={10} className="mr-1" />
                      {enrollment.courses?.titulo ?? "—"}
                    </Badge>
                  </div>

                  {/* Tipo acesso */}
                  <Badge
                    variant={enrollment.tipo_acesso === "pago" ? "default" : "free"}
                    className="shrink-0 text-xs"
                  >
                    {enrollment.tipo_acesso === "pago" ? "Pago" : enrollment.tipo_acesso === "projeto_cultural" ? "MIT" : "Grátis"}
                  </Badge>

                  {/* Data */}
                  <span className="text-xs text-muted-light shrink-0 hidden md:block">
                    {new Date(enrollment.created_at).toLocaleDateString("pt-BR")}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
