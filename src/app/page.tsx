import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { getPublicCoursesCached, getLandingStatsCached } from "@/lib/cache/public-data";
import { getPortal, filterCoursesByPortal } from "@/lib/portal";
import { Button } from "@/components/ui/button";
import { getLevelLabel } from "@/lib/utils";
import { getServerT, getServerLocale } from "@/lib/i18n/server";
import { translateEntities } from "@/lib/i18n/content";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { ConsoleSimulator } from "@/components/landing/console-simulator";
import { LiveDemo } from "@/components/landing/live-demo";
import { AiTutor } from "@/components/landing/ai-tutor";
import { CourseExplorer, type ExplorerCourse } from "@/components/landing/course-explorer";
import { CertCard } from "@/components/landing/cert-card";
import { AulaHome } from "@/components/landing/aula-home";

export const dynamic = "force-dynamic"; // renderiza por requisição p/ ler o cookie de idioma

const LOGO = "/logo-smu.png";

export default async function HomePage() {
  const { userId } = await auth();
  const isSignedIn = !!userId;
  const t = await getServerT();
  const portal = await getPortal();
  const isAula = portal === "aula";

  // aula.smuproducoes.com tem home PRÓPRIA (escola profissionalizante);
  // a landing de eventos abaixo é exclusiva do www (regra do dono: www = eventos).
  if (isAula) return <AulaHome />;

  let scoped: any[] = [];
  let stats = { totalUsers: 0, totalCourses: 0, totalHours: 0, completionRate: 0 };
  try {
    const [courses, realStats] = await Promise.all([getPublicCoursesCached(), getLandingStatsCached()]);
    scoped = filterCoursesByPortal(courses ?? [], portal);
    stats = realStats;
  } catch {
    // servidor ainda não configurado — renderiza a página sem cursos
  }

  // Cursos do explorador (até 12) — destaques primeiro.
  let explorer: any[] = [...scoped].sort((a, b) => Number(b.destaque) - Number(a.destaque)).slice(0, 12);

  // Traduz nome/descrição (conteúdo do banco). Fail-safe: PT.
  const lang = await getServerLocale();
  if (lang !== "pt" && explorer.length > 0) {
    const tr = await translateEntities(
      explorer.map((c) => ({ type: "course" as const, id: c.id, titulo: c.titulo, descricao: c.descricao, descricao_curta: c.descricao_curta })),
      lang,
    );
    if (tr.size > 0) {
      explorer = explorer.map((c) => {
        const f = tr.get(c.id);
        return f ? { ...c, titulo: f.titulo ?? c.titulo, descricao_curta: f.descricao_curta ?? c.descricao_curta } : c;
      });
    }
  }

  const explorerCourses: ExplorerCourse[] = explorer.map((c) => ({
    id: c.id,
    slug: c.slug,
    titulo: c.titulo,
    categoria: c.categoria,
    nivel: c.nivel,
    tipo: c.tipo,
    preco: c.preco,
    thumbnail_url: c.thumbnail_url,
    total_aulas: c.total_aulas,
    carga_horaria: c.carga_horaria,
    descricao_curta: c.descricao_curta,
  }));

  const explorerDict = {
    filters: {
      all: t("Todos"),
      som: t("Sonorização"),
      luz: t("Iluminação"),
      dj: t("DJ & Produção"),
      vj: t("VJ & Vídeo"),
    },
    free: t("Grátis"),
    aulas: t("aulas"),
    levels: {
      trainee: t("Trainee"),
      junior: t("Junior"),
      pleno: t("Pleno"),
      projeto_cultural: t(getLevelLabel("projeto_cultural")),
    },
  };

  // Cards do herói = fotos reais de eventos (som / luz / DJ), não as thumbnails de curso.
  const heroA = "/lives/Lighting_technician_at_console_202607150429.jpeg";
  const heroB = "/lives/DJ_at_CDJ_mixer_setup_202607150429.jpeg";
  const heroC = "/lives/Sound_engineer_mixing_console_202607150429.jpeg";
  const livePoster = "/lives/Sound_engineer_mixing_console_202607150429.jpeg";

  const STATS = [
    { value: stats.totalUsers > 0 ? stats.totalUsers.toLocaleString("pt-BR") : "—", label: t("alunos ativos") },
    { value: stats.totalCourses > 0 ? String(stats.totalCourses) : "—", label: t("cursos ativos") },
    { value: stats.totalHours > 0 ? `${stats.totalHours}+` : "—", label: t("horas de conteúdo") },
    { value: "100%", label: t("online · vitalício") },
  ];

  const serif = { fontFamily: "var(--font-instrument-serif), serif" } as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SMU Produções" className="nav-logo h-11 w-auto" />
          </div>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <Link href="#ao-vivo" className="transition-colors hover:text-amber-400">{t("Ao vivo")}</Link>
            <Link href="#simulador" className="transition-colors hover:text-amber-400">{t("Simulador")}</Link>
            <Link href="#trilha" className="transition-colors hover:text-amber-400">{t("Trilha")}</Link>
            <Link href="#cursos" className="transition-colors hover:text-amber-400">{t("Cursos")}</Link>
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

      {/* HERO */}
      <header className="relative px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-400" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              {isAula ? t("Escola Profissionalizante") : t("Escola profissional de eventos ao vivo")}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.03] tracking-tight sm:text-6xl">
              {t("Aprenda com quem")}<br />
              {t("está no")} <span style={serif} className="italic text-amber-400">{t("palco")}</span> —<br />
              {t("e viva do")} <span style={serif} className="italic text-amber-400">{t("backstage")}</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              {t("Sonorização, iluminação, DJ, vídeo e produção. Aulas ao vivo, tutor com IA, narração em áudio e simuladores práticos. Certificado verificável e trilha do Trainee ao Pleno.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/cadastro"><Button size="xl">{t("Criar conta grátis")} →</Button></Link>
              <Link href="/cursos"><Button size="xl" variant="outline">{t("Ver os cursos")}</Button></Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <span className="hidden h-9 w-px bg-border sm:block" />}
                  <div className="flex flex-col">
                    <b className="text-2xl font-bold tabular-nums">{s.value}</b>
                    <span className="text-xs text-muted-light">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Composição com thumbnails reais */}
          <div className="relative mx-auto h-[440px] w-full max-w-[440px] lg:h-[520px]">
            {/* O vídeo já traz selo AO VIVO, contador e chat embutidos (é a captura
                da sala inteira), então este card NÃO põe overlay — senão duplica o selo. */}
            <div className="absolute right-5 top-0 z-20 h-[300px] w-[240px] overflow-hidden rounded-2xl border border-border-strong shadow-2xl sm:right-10 sm:h-[338px] sm:w-[268px]">
              <video
                className="h-full w-full object-cover"
                src="/videos/live-demo.mp4"
                poster={heroA || undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={t("Prévia de uma aula ao vivo na SMU PRO")}
              />
            </div>
            <div className="absolute bottom-4 left-0 z-30 h-[200px] w-[160px] overflow-hidden rounded-2xl border border-border-strong shadow-2xl sm:h-[238px] sm:w-[188px]">
              {heroB ? (
                <Image src={heroB} alt="" fill sizes="190px" className="object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-surface-2 to-surface-3" />
              )}
            </div>
            <div className="absolute right-0 top-[150px] z-10 hidden h-[148px] w-[148px] overflow-hidden rounded-2xl border border-border-strong opacity-90 shadow-2xl sm:block">
              {heroC ? (
                <Image src={heroC} alt="" fill sizes="150px" className="object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-surface-2 to-surface-3" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* SIMULADOR */}
      <Section id="simulador" n="01" eyebrow={t("Prática · interativo")}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div><ConsoleSimulator /></div>
          <div>
            <SectionHeading>
              {t("Simuladores e")} <em style={serif} className="not-italic text-amber-400" >{t("animações")}</em> {t("que ensinam fazendo")}
            </SectionHeading>
            <p className="mb-5 text-base text-muted">
              {t("Ao lado, é de verdade: opere uma mesa de som digital (estilo CL5 / DiGiCo) ou uma mesa de luz — arraste os faders, use mute e solo, toque o mix ou acenda o palco. É assim que a plataforma ensina: praticando antes de encostar no equipamento real.")}
            </p>
            <Bullets items={[
              [t("Mesa de som digital"), t("canais, faders, meters, mute e solo como numa CL5 / DiGiCo.")],
              [t("Mesa de luz e animações"), t("feixes, cor e show em movimento.")],
              [t("Quizzes por módulo"), t("a nota entra no seu certificado.")],
            ]} />
          </div>
        </div>
      </Section>

      {/* AO VIVO */}
      <Section id="ao-vivo" n="02" eyebrow={t("Novidade")} badge={t("NOVO")}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <SectionHeading>
              {t("Aulas e palestras")} <em style={serif} className="not-italic text-amber-400">{t("ao vivo")}</em>
            </SectionHeading>
            <p className="mb-5 text-base text-muted">
              {t("Aulas, workshops e podcasts transmitidos ao vivo, com chat em tempo real direto com quem trabalha no mercado. Não pôde assistir? Fica gravado na sua trilha.")}
            </p>
            <Bullets items={[
              [t("Chat ao vivo"), t("tire dúvidas durante a transmissão.")],
              [t("Agenda de eventos"), t("saiba quando entra cada aula.")],
              [t("Replay"), t("reveja tudo depois, no seu ritmo.")],
            ]} />
          </div>
          <div className="lg:order-1"><LiveDemo src="/videos/live-demo.mp4" poster={livePoster} /></div>
        </div>
      </Section>

      {/* Próximas lives */}
      <section className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-400" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              {t("Agenda ao vivo")}
            </span>
            <h2 className="mt-3 text-[29px] font-bold tracking-tight sm:text-4xl">
              {t("Próximas")} <em style={serif} className="not-italic text-amber-400">{t("lives")}</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: "/lives/Sound_engineer_mixing_console_202607150429.jpeg", area: t("Sonorização"), title: t("Ganho de estrutura e gate"), when: t("Qui · 20h") },
              { img: "/lives/Lighting_technician_at_console_202607150429.jpeg", area: t("Iluminação"), title: t("Programando moving heads"), when: t("Sáb · 15h") },
              { img: "/lives/DJ_at_CDJ_mixer_setup_202607150429.jpeg", area: t("DJ & Produção"), title: t("Transições e leitura de pista"), when: t("Dom · 19h") },
            ].map((l) => (
              <div key={l.title} className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-amber-500/30">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={l.img} alt={l.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> {t("AO VIVO")}
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[11px] text-foreground backdrop-blur">{l.when}</span>
                </div>
                <div className="p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-amber-400">{l.area}</p>
                  <h3 className="text-[15px] font-semibold leading-tight text-foreground">{l.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA + narração */}
      <Section id="plataforma" n="03" eyebrow={t("Plataforma · interativo")}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div><AiTutor /></div>
          <div>
            <SectionHeading>
              {t("Um")} <em style={serif} className="not-italic text-amber-400">{t("tutor com IA")}</em> {t("e narração em áudio")}
            </SectionHeading>
            <p className="mb-5 text-base text-muted">
              {t("Ficou com dúvida numa aula? O tutor explica no contexto do vídeo — clique numa pergunta e veja. E toda aula pode ser ouvida narrada: é só dar play.")}
            </p>
            <Bullets items={[
              [t("Explicador com IA"), t("respostas ligadas ao timestamp.")],
              [t("Narração em áudio"), t("cada aula vira podcast para ouvir.")],
              [t("Anotações no player"), t("no momento exato do vídeo.")],
            ]} />
          </div>
        </div>
      </Section>

      {/* TRILHA */}
      <section id="trilha" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-11 text-center">
            <Eyebrow n="04">{t("Carreira")}</Eyebrow>
            <h2 className="mt-3.5 text-[29px] font-bold leading-tight tracking-tight sm:text-4xl">
              {t("Uma")} <em style={serif} className="not-italic text-amber-400">{t("trilha")}</em>, {t("do primeiro cabo ao palco grande")}
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-muted">{t("Progressão por níveis. Comece grátis no Trainee e evolua até dominar a função como Pleno.")}</p>
          </div>
          <div className="relative grid gap-9 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-[34px] z-0 hidden h-0.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 opacity-50 md:block" />
            {[
              ["1", t("Trainee"), t("Fundamentos e segurança. Para quem começa do zero."), t("Introdução · NR's · Panorama")],
              ["2", t("Junior"), t("Técnica por área: som, luz, DJ, vídeo e efeitos."), t("DJ · Luz · Som · Vídeo · Eletrônica")],
              ["3", t("Pleno"), t("Domínio avançado e atuação profissional."), t("Pleno Som · Luz · Vídeo · Efeito · Rigging")],
            ].map(([num, title, desc, cnt]) => (
              <div key={num} className="group relative z-10 px-4 text-center">
                <div className="mx-auto mb-[18px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-amber-500 bg-surface text-[22px] font-bold text-amber-400 shadow-[0_0_0_6px_rgba(245,158,11,0.06)] transition-all group-hover:bg-amber-500 group-hover:text-black">{num}</div>
                <h4 className="mb-1.5 text-lg font-bold">{title}</h4>
                <p className="mx-auto mb-2 max-w-[230px] text-sm text-muted">{desc}</p>
                <div className="text-xs font-semibold text-amber-300">{cnt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section id="cursos" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow n="05">{t("Catálogo")}</Eyebrow>
              <h2 className="mt-3.5 text-[29px] font-bold tracking-tight sm:text-4xl">
                {t("Comece por um curso")} <em style={serif} className="not-italic text-amber-400">{t("gratuito")}</em>
              </h2>
            </div>
            <Link href="/cursos"><Button variant="outline">{t("Ver todos os cursos")} →</Button></Link>
          </div>
          {explorerCourses.length > 0 ? (
            <CourseExplorer courses={explorerCourses} dict={explorerDict} />
          ) : (
            <p className="text-muted">{t("Em breve novos cursos por aqui.")}</p>
          )}
        </div>
      </section>

      {/* CERTIFICADO */}
      <Section n="06" eyebrow={t("Reconhecimento · interativo")}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <SectionHeading>
              {t("Certificado com")} <em style={serif} className="not-italic text-amber-400">{t("QR verificável")}</em>
            </SectionHeading>
            <p className="mb-5 text-base text-muted">
              {t("Cada certificado tem um QR único. Qualquer contratante confere a autenticidade em segundos. Clique em verificar para ver como funciona.")}
            </p>
            <Bullets items={[
              [t("QR único por certificado"), t("impossível de falsificar.")],
              [t("Nota do quiz no documento"), t("mostra domínio real.")],
              [t("Programa MIT"), t("acesso gratuito para alunos do Projeto Cultural.")],
            ]} />
          </div>
          <div className="lg:order-1"><CertCard logoSrc={LOGO} /></div>
        </div>
      </Section>

      {/* CTA FINAL */}
      {/* overflow-hidden: o brilho tem 600px fixos e fica centrado por translate.
          Num iPhone de 390px ele transborda ~105px de cada lado e, sem contenção,
          isso vira scroll horizontal na PÁGINA inteira — um enfeite decorativo
          arrastando o site todo. */}
      <section className="relative overflow-hidden border-t border-border/50 px-6 py-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[340px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t("Sua próxima função")}<br />{t("começa")} <em style={serif} className="not-italic text-amber-400">{t("hoje")}</em>.
          </h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-muted">{t("Crie sua conta e acesse agora os cursos gratuitos do nível Trainee. Sem cartão de crédito.")}</p>
          <Link href="/cadastro"><Button size="xl">{t("Começar agora — é grátis")} →</Button></Link>
          {stats.totalUsers > 0 && (
            <p className="mt-4 text-xs text-muted-light">+{stats.totalUsers.toLocaleString("pt-BR")} {t("profissionais já estudam na SMU PRO")}</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-light">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SMU" className="h-8 w-auto" />
            <span>— {isAula ? t("Escola Profissionalizante") : t("Escola Profissional de Eventos")}</span>
          </div>
          <div className="flex gap-6">
            <Link href="/cursos" className="hover:text-amber-400">{t("Cursos")}</Link>
            <Link href="#ao-vivo" className="hover:text-amber-400">{t("Ao vivo")}</Link>
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
        "description": isAula ? "Escola profissionalizante de cursos técnicos e de renda em casa" : "Escola profissional de cursos técnicos para eventos ao vivo",
        "url": isAula ? "https://aula.smuproducoes.com" : "https://smuproducoes.com",
        "address": { "@type": "PostalAddress", "addressCountry": "BR" },
      }) }} />
    </div>
  );
}

/* ------------------------------------------------------ helpers (server) */
function Eyebrow({ n, children }: { n: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-400" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
      <span className="font-bold text-muted-light">{n}</span> — {children}
    </span>
  );
}

function Section({
  id,
  n,
  eyebrow,
  badge,
  children,
}: {
  id?: string;
  n: string;
  eyebrow: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9">
          <Eyebrow n={n}>
            {eyebrow}
            {badge && <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">{badge}</span>}
          </Eyebrow>
        </div>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-4 mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{children}</h3>;
}

function Bullets({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map(([head, tail]) => (
        <div key={head} className="flex items-start gap-3 text-[14.5px]">
          <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-md bg-amber-500/10 text-[13px] text-amber-400">✓</span>
          <span className="text-muted"><b className="text-foreground">{head}</b> — {tail}</span>
        </div>
      ))}
    </div>
  );
}
