import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { getPublicCoursesCached, getLandingStatsCached } from "@/lib/cache/public-data";
import { filterCoursesByPortal } from "@/lib/portal";
import { Button } from "@/components/ui/button";
import { formatMinutes } from "@/lib/utils";
import { getServerT, getServerLocale } from "@/lib/i18n/server";
import { translateEntities } from "@/lib/i18n/content";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { BookOpen, Zap, Award, Headphones, Wrench, Sparkles, ChevronRight } from "lucide-react";

/**
 * Home do aula.smuproducoes.com — Escola Profissionalizante (cursos técnicos + renda em casa).
 * Restaura a home própria do portal (hero branco aprovado pelo dono) que a nova landing de
 * eventos (41179b6) tinha atropelado. O www NÃO usa este componente: a landing de eventos
 * segue exclusiva do smuproducoes.com (regra do dono: www = eventos, não mexer).
 */

const LOGO = "/logo-smu.png";

const FEATURES = [
  {
    icon: <BookOpen size={24} className="text-amber-500" />,
    title: "Aulas ilustradas passo a passo",
    desc: "Conteúdo técnico com ilustrações profissionais em cada aula, do básico ao avançado.",
  },
  {
    icon: <Headphones size={24} className="text-blue-400" />,
    title: "Narração em áudio",
    desc: "Toda aula pode ser ouvida narrada, como um podcast — aprenda até no trajeto.",
  },
  {
    icon: <Wrench size={24} className="text-emerald-400" />,
    title: "Simuladores práticos",
    desc: "Pratique na tela antes de encostar na ferramenta real: aprenda fazendo.",
  },
  {
    icon: <Zap size={24} className="text-amber-400" />,
    title: "Quizzes por módulo",
    desc: "Avaliações que testam o conhecimento real e emitem nota no certificado.",
  },
  {
    icon: <Award size={24} className="text-purple-400" />,
    title: "Certificado verificável",
    desc: "QR Code único em cada certificado — verificável por qualquer contratante.",
  },
  {
    icon: <Sparkles size={24} className="text-orange-400" />,
    title: "No seu ritmo, para sempre",
    desc: "Acesso vitalício, 100% online. Estude quando e onde quiser.",
  },
];

/** Selo da área do curso no card (técnico / renda em casa). */
function areaLabel(categorias?: string[] | null): string {
  return Array.isArray(categorias) && categorias.includes("renda-em-casa") ? "Renda em casa" : "Técnico";
}

export async function AulaHome() {
  const { userId } = await auth();
  const isSignedIn = !!userId;
  const t = await getServerT();

  let scoped: any[] = [];
  let totalUsers = 0;
  try {
    const [courses, stats] = await Promise.all([getPublicCoursesCached(), getLandingStatsCached()]);
    scoped = filterCoursesByPortal(courses ?? [], "aula");
    totalUsers = stats.totalUsers;
  } catch {
    // servidor ainda não configurado — renderiza a página sem cursos
  }

  // Destaques primeiro, depois alfabético; 6 cards na vitrine.
  let featured = [...scoped]
    .sort((a, b) => Number(b.destaque) - Number(a.destaque) || String(a.titulo).localeCompare(String(b.titulo), "pt-BR"))
    .slice(0, 6);

  // Traduz nome/descrição (conteúdo do banco). Fail-safe: PT.
  const lang = await getServerLocale();
  if (lang !== "pt" && featured.length > 0) {
    const tr = await translateEntities(
      featured.map((c) => ({ type: "course" as const, id: c.id, titulo: c.titulo, descricao: c.descricao, descricao_curta: c.descricao_curta })),
      lang,
    );
    if (tr.size > 0) {
      featured = featured.map((c) => {
        const f = tr.get(c.id);
        return f ? { ...c, titulo: f.titulo ?? c.titulo, descricao_curta: f.descricao_curta ?? c.descricao_curta } : c;
      });
    }
  }

  const totalMinutes = scoped.reduce((sum, c) => sum + (c.carga_horaria ?? 0), 0);
  const STATS = [
    { label: "Cursos", value: scoped.length > 0 ? String(scoped.length) : "—" },
    { label: "Horas de conteúdo", value: totalMinutes > 0 ? `${Math.round(totalMinutes / 60)}+` : "—" },
    { label: "Alunos ativos", value: totalUsers > 0 ? totalUsers.toLocaleString("pt-BR") : "—" },
    { label: "online · vitalício", value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SMU Produções" className="nav-logo h-11 w-auto" />
          </div>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <Link href="/cursos" className="transition-colors hover:text-amber-400">{t("Cursos")}</Link>
            <Link href="#sobre" className="transition-colors hover:text-amber-400">{t("Sobre")}</Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {isSignedIn ? (
              <Link href="/dashboard"><Button size="sm">{t("Meu painel")}</Button></Link>
            ) : (
              <>
                <Link href="/login" className="hidden sm:block"><Button variant="ghost" size="sm">{t("Entrar")}</Button></Link>
                <Link href="/cadastro"><Button size="sm">{t("Começar grátis")}</Button></Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero — escola profissionalizante (fundo branco, preto + amarelo) */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-16 text-center text-neutral-900">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-400/15 px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            {t("Escola Profissionalizante")}
          </span>
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
          {t("Aprenda uma")}{" "}
          <span className="text-amber-500">{t("profissão")}</span>
          <br />
          {t("e conquiste sua")}{" "}
          <span className="text-amber-500">{t("carreira")}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
          {t("Cursos técnicos e de renda em casa, do básico ao avançado — no seu ritmo e com certificado. Comece hoje, aprenda fazendo e transforme seu talento em trabalho.")}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/cadastro">
            <Button size="xl" className="shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              {t("Criar conta grátis")} <ChevronRight size={18} />
            </Button>
          </Link>
          <Link href="/cursos">
            <Button size="xl" variant="outline" className="border-neutral-300 text-neutral-900 hover:bg-neutral-100">
              {t("Ver cursos")}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-24 grid w-full max-w-4xl grid-cols-2 gap-0 divide-x divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="p-6 text-center transition-colors hover:bg-neutral-50">
              <div className="text-3xl font-black tabular-nums text-amber-500">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-neutral-500">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos em destaque */}
      {featured.length > 0 && (
        <section className="border-t border-border/50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-400">{t("Em destaque")}</p>
                <h2 className="text-4xl font-black text-foreground">{t("Cursos populares")}</h2>
              </div>
              <Link href="/cursos" className="flex items-center gap-1 text-sm text-muted-light transition-colors hover:text-amber-400">
                {t("Ver todos")} <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((course: any) => (
                <Link key={course.id} href={`/cursos/${course.slug}`} className="group">
                  <div className="overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 to-surface-3">
                      {course.thumbnail_url && (
                        <Image src={course.thumbnail_url} alt={course.titulo} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover opacity-80 transition-opacity group-hover:opacity-100" />
                      )}
                      <div className="absolute left-3 top-3 flex gap-1.5">
                        <span className="rounded-full bg-amber-500/90 px-2.5 py-1 text-[11px] font-bold text-black">{t(areaLabel(course.categorias))}</span>
                        {(!course.preco || course.preco === 0 || course.tipo === "free") && (
                          <span className="rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-black">{t("Grátis")}</span>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-amber-400">
                        {course.titulo}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-light">{course.descricao_curta || course.descricao || t("Curso completo de formação profissional.")}</p>
                      <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-light">
                        <span>{course.total_aulas} {t("aulas")} · {formatMinutes(course.carga_horaria ?? 0)}</span>
                        <span className="font-semibold text-emerald-400">{t("Grátis")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plataforma */}
      <section id="sobre" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-400">{t("Plataforma")}</p>
            <h2 className="text-4xl font-black text-foreground">{t("Feita para profissionais")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-light">
              {t("Cada detalhe foi pensado para quem quer aprender uma profissão e precisa de formação séria.")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.03)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface-3">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-bold text-foreground">{t(f.title)}</h3>
                <p className="text-sm leading-relaxed text-muted-light">{t(f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden border-t border-border/50 px-6 py-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[340px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="mb-6 text-4xl font-black text-foreground md:text-6xl">
            {t("Pronto para subir")}<br />
            <span className="text-amber-400">{t("de nível")}</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted">
            {t("Crie sua conta agora e comece um curso gratuito hoje mesmo. Sem cartão de crédito.")}
          </p>
          <Link href="/cadastro">
            <Button size="xl" className="px-10 text-lg shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              {t("Começar agora — é grátis")} <ChevronRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-light">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SMU" className="h-8 w-auto" />
            <span>— {t("Escola Profissionalizante")}</span>
          </div>
          <div className="flex gap-6">
            <Link href="/cursos" className="hover:text-amber-400">{t("Cursos")}</Link>
            <Link href="/certificado" className="hover:text-amber-400">{t("Verificar certificado")}</Link>
          </div>
          <span>© {new Date().getFullYear()} SMU PRO</span>
        </div>
      </footer>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "SMU PRO",
        "description": "Escola profissionalizante de cursos técnicos e de renda em casa",
        "url": "https://aula.smuproducoes.com",
        "address": { "@type": "PostalAddress", "addressCountry": "BR" },
      }) }} />
    </div>
  );
}
