import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { getCourses } from "@/lib/actions/courses";
import { getLandingPageStats } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryLabel, getLevelLabel, formatMinutes, formatCurrency } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { Zap, Award, Users, PlayCircle, ChevronRight, Star, Shield, Mic, Lightbulb, Music, Film } from "lucide-react";

export const revalidate = 3600; // revalidate stats every hour

const CATEGORIES = [
  { key: "som", icon: <Mic size={28} />, label: "Sonorização", desc: "PA, monitor, mixing ao vivo" },
  { key: "luz", icon: <Lightbulb size={28} />, label: "Iluminação", desc: "Consoles, moving heads, show design" },
  { key: "dj", icon: <Music size={28} />, label: "DJ & Produção", desc: "Técnica, sets, performance" },
  { key: "vj", icon: <Film size={28} />, label: "VJ & Vídeo", desc: "Mapeamento, switching ao vivo" },
];

const FEATURES = [
  {
    icon: <PlayCircle size={24} className="text-amber-500" />,
    title: "Aulas em vídeo HD",
    desc: "Conteúdo gravado por profissionais em atividade no mercado de eventos.",
  },
  {
    icon: <Zap size={24} className="text-amber-400" />,
    title: "Quizzes por módulo",
    desc: "Avaliações que testam o conhecimento real e emitem nota no certificado.",
  },
  {
    icon: <Award size={24} className="text-emerald-400" />,
    title: "Certificado verificável",
    desc: "QR Code único em cada certificado — verificável por qualquer contratante.",
  },
  {
    icon: <Users size={24} className="text-blue-400" />,
    title: "Programa MIT",
    desc: "Alunos do Projeto Cultural têm acesso gratuito a todo o catálogo.",
  },
  {
    icon: <Shield size={24} className="text-purple-400" />,
    title: "Trilha de carreira",
    desc: "Trainee → Junior → Pleno: progressão estruturada para o mercado.",
  },
  {
    icon: <Star size={24} className="text-orange-400" />,
    title: "Anotações pessoais",
    desc: "Salve insights diretamente no player, vinculados ao timestamp do vídeo.",
  },
];

export default async function HomePage() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  let featuredCourses: any[] = [];
  let stats = { totalUsers: 0, totalCourses: 0, totalHours: 0, completionRate: 0 };
  try {
    const [courses, realStats] = await Promise.all([getCourses(), getLandingPageStats()]);
    featuredCourses = (courses ?? []).filter((c: any) => c.destaque).slice(0, 3);
    if (featuredCourses.length === 0) {
      featuredCourses = (courses ?? []).slice(0, 3);
    }
    stats = realStats;
  } catch {
    // server not configured yet, show page without courses
  }

  const STATS = [
    { label: "Alunos ativos", value: stats.totalUsers > 0 ? stats.totalUsers.toLocaleString("pt-BR") : "—" },
    { label: "Horas de conteúdo", value: stats.totalHours > 0 ? `${stats.totalHours}+` : "—" },
    { label: "Cursos ativos", value: stats.totalCourses > 0 ? String(stats.totalCourses) : "—" },
    { label: "Taxa de conclusão", value: stats.completionRate > 0 ? `${stats.completionRate}%` : "—" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-2xl leading-none gradient-text" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>SMU</p>
              <p className="text-[5.5px] font-medium tracking-[0.15em] text-muted-light leading-none mt-0.5" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>PRODUÇÕES</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">MIT</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <Link href="/cursos" className="hover:text-amber-400 transition-colors">Cursos</Link>
            <Link href="/#categorias" className="hover:text-amber-400 transition-colors">Categorias</Link>
            <Link href="/#sobre" className="hover:text-amber-400 transition-colors">Sobre</Link>
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
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-16 text-center overflow-hidden">
        {/* Background grid + amber glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/[0.08] blur-[150px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Escola Profissional de Eventos ao Vivo
          </span>
        </div>

        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-foreground">
          Sua carreira no{" "}
          <span className="text-amber-400">backstage</span>
          <br />
          começa aqui
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
          Cursos técnicos de sonorização, iluminação, DJ e VJ com profissionais em atividade.
          Certificados verificáveis. Trilha de carreira estruturada.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/cadastro">
            <Button size="xl" className="shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              Criar conta grátis <ChevronRight size={18} />
            </Button>
          </Link>
          <Link href="/cursos">
            <Button size="xl" variant="outline">
              Ver cursos
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 w-full max-w-4xl border border-border rounded-2xl overflow-hidden divide-x divide-border">
          {STATS.map((s) => (
            <div key={s.label} className="p-6 text-center hover:bg-surface-2/50 transition-colors">
              <div className="text-3xl font-black text-amber-400 tabular-nums">{s.value}</div>
              <div className="text-xs text-muted-light mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos em destaque */}
      {featuredCourses.length > 0 && (
        <section className="py-24 px-6 border-t border-border/50">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Em destaque</p>
                <h2 className="text-4xl font-black text-foreground">Cursos populares</h2>
              </div>
              <Link href="/cursos" className="text-sm text-muted-light hover:text-amber-400 transition-colors flex items-center gap-1">
                Ver todos <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCourses.map((course: any) => (
                <Link key={course.id} href={`/cursos/${course.slug}`} className="group">
                  <div className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all hover:-translate-y-1">
                    <div className="h-44 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-5xl relative overflow-hidden">
                      {course.thumbnail_url ? (
                        <Image src={course.thumbnail_url} alt={course.titulo} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <span className="opacity-50"><CategoryIcon category={course.categoria} size={40} /></span>
                      )}
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
                        {course.tipo === "free" && <Badge variant="free">Grátis</Badge>}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-foreground leading-tight mb-2 group-hover:text-amber-400 transition-colors">
                        {course.titulo}
                      </h3>
                      <p className="text-muted-light text-sm line-clamp-2 mb-4">{course.descricao_curta}</p>
                      <div className="flex items-center justify-between text-xs text-muted-light pt-3 border-t border-border">
                        <span>{course.total_aulas} aulas · {formatMinutes(course.carga_horaria ?? 0)}</span>
                        {course.preco && course.preco > 0 ? (
                          <span className="text-amber-400 font-semibold">{formatCurrency(course.preco)}</span>
                        ) : (
                          <span className="text-emerald-400 font-semibold">Grátis</span>
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
      <section id="categorias" className="py-24 px-6 border-t border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Áreas de formação</p>
            <h2 className="text-4xl font-black text-foreground">O que você quer dominar?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link key={cat.key} href={`/cursos?categoria=${cat.key}`} className="group">
                <div className="rounded-2xl p-6 bg-surface border border-border hover:border-amber-500/30 transition-all text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{cat.label}</h3>
                  <p className="text-sm text-muted-light">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="sobre" className="py-24 px-6 border-t border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Plataforma</p>
            <h2 className="text-4xl font-black text-foreground">Feita para profissionais</h2>
            <p className="mt-4 text-muted-light max-w-xl mx-auto">
              Cada detalhe foi pensado para quem trabalha em palco e precisa de formação séria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 bg-surface border border-border hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.03)] transition-all">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-3 border border-border-strong">
                  {f.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 px-6 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-amber-500/5 blur-[120px]" />

        <div className="mx-auto max-w-3xl text-center relative">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Pronto para subir<br />
            <span className="text-amber-400">de nível</span>?
          </h2>
          <p className="text-muted mb-10 text-lg max-w-xl mx-auto">
            Crie sua conta agora e acesse os cursos gratuitos do nível Trainee. Sem cartão de crédito.
          </p>
          <Link href="/cadastro">
            <Button size="xl" className="shadow-[0_0_40px_rgba(245,158,11,0.3)] text-lg px-10">
              Começar agora — é grátis <ChevronRight size={18} />
            </Button>
          </Link>
          {stats.totalUsers > 0 && (
            <p className="text-xs text-muted-light mt-4">
              +{stats.totalUsers.toLocaleString("pt-BR")} profissionais já estudam na SMU PRO
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-light">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-lg leading-none gradient-text" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>SMU</p>
              <p className="text-[4.5px] font-medium tracking-[0.12em] text-muted-light leading-none mt-0.5" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>PRODUÇÕES</p>
            </div>
            <span className="text-muted-light">—</span>
            <span>Escola Profissional de Eventos</span>
          </div>
          <div className="flex gap-6">
            <Link href="/cursos" className="hover:text-amber-400 transition-colors">Cursos</Link>
            <Link href="/certificado" className="hover:text-amber-400 transition-colors">Verificar certificado</Link>
          </div>
          <span className="text-muted-light">© {new Date().getFullYear()} SMU PRO</span>
        </div>
      </footer>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "SMU PRO",
        "description": "Escola profissional de cursos técnicos para eventos ao vivo",
        "url": "https://smuproducoes.com",
        "address": { "@type": "PostalAddress", "addressCountry": "BR" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Os cursos da SMU PRO têm certificado?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, todos os cursos emitem certificado digital com QR Code verificável por qualquer contratante." }},
          { "@type": "Question", "name": "Preciso ter experiência para começar?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O nível Trainee é ideal para iniciantes. A trilha de carreira vai do básico ao avançado." }},
          { "@type": "Question", "name": "O que é o Projeto Cultural MIT?", "acceptedAnswer": { "@type": "Answer", "text": "É um programa de inclusão que oferece acesso gratuito a todo o catálogo de cursos para alunos selecionados." }},
          { "@type": "Question", "name": "Quanto tempo tenho acesso aos cursos?", "acceptedAnswer": { "@type": "Answer", "text": "O acesso é vitalício. Uma vez matriculado, você pode assistir quantas vezes quiser." }},
          { "@type": "Question", "name": "Os cursos são online ou presenciais?", "acceptedAnswer": { "@type": "Answer", "text": "100% online. Assista de qualquer lugar, no seu ritmo, com aulas em vídeo HD." }},
        ]
      }) }} />
    </div>
  );
}
