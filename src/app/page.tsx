import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { getCourses } from "@/lib/actions/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryIcon, getCategoryLabel, getLevelLabel, formatMinutes, formatCurrency } from "@/lib/utils";
import { Zap, Award, Users, PlayCircle, ChevronRight, Star, Shield, Mic, Lightbulb, Music, Film } from "lucide-react";

const STATS = [
  { label: "Alunos formados", value: "2.400+" },
  { label: "Horas de conteúdo", value: "380+" },
  { label: "Cursos ativos", value: "18" },
  { label: "Taxa de conclusão", value: "87%" },
];

const CATEGORIES = [
  { key: "som", icon: <Mic size={28} />, label: "Sonorização", desc: "PA, monitor, mixing ao vivo" },
  { key: "luz", icon: <Lightbulb size={28} />, label: "Iluminação", desc: "Consoles, moving heads, show design" },
  { key: "dj", icon: <Music size={28} />, label: "DJ & Produção", desc: "Técnica, sets, performance" },
  { key: "vj", icon: <Film size={28} />, label: "VJ & Vídeo", desc: "Mapeamento, switching ao vivo" },
];

const FEATURES = [
  {
    icon: <PlayCircle size={24} className="text-[#6C3CE1]" />,
    title: "Aulas em vídeo HD",
    desc: "Conteúdo gravado por profissionais em atividade no mercado de eventos.",
  },
  {
    icon: <Zap size={24} className="text-amber-500" />,
    title: "Quizzes por módulo",
    desc: "Avaliações que testam o conhecimento real e emitem nota no certificado.",
  },
  {
    icon: <Award size={24} className="text-emerald-600" />,
    title: "Certificado verificável",
    desc: "QR Code único em cada certificado — verificável por qualquer contratante.",
  },
  {
    icon: <Users size={24} className="text-blue-600" />,
    title: "Programa MIT",
    desc: "Alunos do Projeto Cultural têm acesso gratuito a todo o catálogo.",
  },
  {
    icon: <Shield size={24} className="text-purple-600" />,
    title: "Trilha de carreira",
    desc: "Trainee → Junior → Pleno: progressão estruturada para o mercado.",
  },
  {
    icon: <Star size={24} className="text-orange-500" />,
    title: "Anotações pessoais",
    desc: "Salve insights diretamente no player, vinculados ao timestamp do vídeo.",
  },
];

export default async function HomePage() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  let featuredCourses: any[] = [];
  try {
    const courses = await getCourses();
    featuredCourses = (courses ?? []).filter((c: any) => c.destaque).slice(0, 3);
    if (featuredCourses.length === 0) {
      featuredCourses = (courses ?? []).slice(0, 3);
    }
  } catch {
    // server not configured yet, show page without courses
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-gray-400 text-sm font-normal ml-1">PRO</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="/cursos" className="hover:text-gray-900 transition-colors">Cursos</Link>
            <Link href="/#categorias" className="hover:text-gray-900 transition-colors">Categorias</Link>
            <Link href="/#sobre" className="hover:text-gray-900 transition-colors">Sobre</Link>
          </div>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button size="sm">Meu painel</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">Entrar</Button>
                </Link>
                <Link href="/cadastro">
                  <Button size="sm">Começar grátis</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[100px]" />
        </div>

        <Badge variant="mit" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
          Escola Profissional de Eventos
        </Badge>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-black leading-none tracking-tight text-gray-900">
          Domine o{" "}
          <span className="gradient-text">backstage</span>
          {" "}dos maiores shows
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-500 leading-relaxed">
          Cursos técnicos para sonorização, iluminação, DJ, VJ e produção de eventos.
          Certificados reconhecidos. Trilha de carreira estruturada.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/cursos">
            <Button size="xl" className="gap-2">
              Ver todos os cursos <ChevronRight size={18} />
            </Button>
          </Link>
          <Link href="/cadastro">
            <Button size="xl" variant="outline" className="gap-2">
              Criar conta grátis
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos em destaque */}
      {featuredCourses.length > 0 && (
        <section className="py-24 px-6 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[#6C3CE1] text-sm font-semibold uppercase tracking-widest mb-2">Em destaque</p>
                <h2 className="text-4xl font-black text-gray-900">Cursos populares</h2>
              </div>
              <Link href="/cursos" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
                Ver todos <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCourses.map((course: any) => (
                <Link key={course.id} href={`/cursos/${course.slug}`} className="group">
                  <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="h-44 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-5xl">
                      {getCategoryIcon(course.categoria)}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
                        {course.tipo === "free" && <Badge variant="free">Grátis</Badge>}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 group-hover:text-[#6C3CE1] transition-colors">
                        {course.titulo}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">{course.descricao_curta}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                        <span>{course.total_aulas} aulas · {formatMinutes(course.carga_horaria ?? 0)}</span>
                        {course.preco && course.preco > 0 ? (
                          <span className="text-gray-900 font-semibold">{formatCurrency(course.preco)}</span>
                        ) : (
                          <span className="text-emerald-600 font-semibold">Grátis</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categorias */}
      <section id="categorias" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#6C3CE1] text-sm font-semibold uppercase tracking-widest mb-2">Áreas de formação</p>
            <h2 className="text-4xl font-black text-gray-900">O que você quer dominar?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link key={cat.key} href={`/cursos?categoria=${cat.key}`} className="group">
                <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-[#6C3CE1] group-hover:bg-[#6C3CE1] group-hover:text-white transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{cat.label}</h3>
                  <p className="text-sm text-gray-500">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="sobre" className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#6C3CE1] text-sm font-semibold uppercase tracking-widest mb-2">Plataforma</p>
            <h2 className="text-4xl font-black text-gray-900">Feita para profissionais</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Cada detalhe foi pensado para quem trabalha em palco e precisa de formação séria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 bg-white border border-gray-200 hover:border-purple-200 hover:shadow-sm transition-all">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl p-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Pronto para subir de nível?
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              Crie sua conta agora e acesse os cursos gratuitos imediatamente.
            </p>
            <Link href="/cadastro">
              <Button size="xl" className="gap-2 bg-white text-[#6C3CE1] hover:bg-gray-100 shadow-lg">
                Começar agora <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>
            <span className="font-bold text-gray-700">SMU PRO</span> — Escola Profissional de Eventos
          </span>
          <div className="flex gap-6">
            <Link href="/cursos" className="hover:text-gray-900 transition-colors">Cursos</Link>
            <Link href="/certificado" className="hover:text-gray-900 transition-colors">Verificar certificado</Link>
          </div>
          <span>© {new Date().getFullYear()} SMU PRO</span>
        </div>
      </footer>
    </div>
  );
}
