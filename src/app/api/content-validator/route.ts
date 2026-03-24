"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

/**
 * SMU PRO — Content Validator API
 *
 * Analyzes lesson content against official sources and best practices.
 * Returns structured suggestions for improvement.
 *
 * POST /api/content-validator
 * Body: { lessonId: string, courseCategoria?: string }
 */

interface ValidationResult {
  score: number; // 0-100
  issues: ValidationIssue[];
  suggestions: string[];
  sources: string[];
  lastChecked: string;
}

interface ValidationIssue {
  tipo: "desatualizado" | "incompleto" | "impreciso" | "formatacao" | "acessibilidade";
  severidade: "alta" | "media" | "baixa";
  descricao: string;
  sugestao: string;
  trecho?: string;
}

// Official sources by category
const OFFICIAL_SOURCES: Record<string, string[]> = {
  som: [
    "AES (Audio Engineering Society) standards",
    "NBR 10152 - Níveis de ruído",
    "NR-15 - Atividades e operações insalubres (ruído)",
    "Yamaha Sound Reinforcement Handbook",
    "JBL Professional Technical Notes",
  ],
  luz: [
    "ABNT NBR 5413 - Iluminância de interiores",
    "NBR IEC 60598 - Luminárias",
    "ANSI E1.11 (DMX512)",
    "NR-10 - Segurança em instalações elétricas",
    "PLASA Technical Standards",
  ],
  producao: [
    "ABNT NBR 16880 - Sistemas temporários de estruturas",
    "NR-01 - Gerenciamento de Riscos Ocupacionais",
    "Event Safety Guide (Purple Guide)",
    "ABRAFESTA - Normas do setor de eventos",
  ],
  nr: [
    "Portarias do MTE/SEPRT vigentes",
    "ABNT NBRs correlatas",
    "NR-01 (GRO/PGR)",
    "Fundacentro - Publicações técnicas",
    "OIT - Convenções ratificadas pelo Brasil",
  ],
  dj: [
    "AES Standards para áudio digital",
    "Abracam - Associação Brasileira de Casas de Festas",
    "Direitos autorais - ECAD/Lei 9.610",
    "NR-15 Anexo 1 - Limites de tolerância para ruído",
  ],
  efeitos: [
    "NR-19 - Explosivos",
    "NR-20 - Inflamáveis e combustíveis",
    "R-105 (Regulamento de Produtos Controlados - Exército)",
    "ABNT NBR 16901 - Fogos de artifício",
    "NFPA 1126 - Use of Pyrotechnics Before a Proximate Audience",
  ],
};

const CONTENT_QUALITY_CHECKS = [
  { check: "has_headings", desc: "Conteúdo possui títulos/seções organizadas", weight: 10 },
  { check: "min_length", desc: "Conteúdo possui tamanho mínimo adequado (>500 palavras)", weight: 15 },
  { check: "has_lists", desc: "Uso de listas para facilitar compreensão", weight: 5 },
  { check: "has_examples", desc: "Inclui exemplos práticos do setor de eventos", weight: 15 },
  { check: "has_safety", desc: "Aborda questões de segurança relevantes", weight: 10 },
  { check: "has_tables", desc: "Uso de tabelas para dados comparativos", weight: 5 },
  { check: "has_callouts", desc: "Usa destaques/alertas para informações importantes", weight: 5 },
  { check: "no_outdated_refs", desc: "Não contém referências desatualizadas", weight: 15 },
  { check: "has_practical_context", desc: "Contextualiza para o mercado de eventos", weight: 10 },
  { check: "has_legislation_refs", desc: "Referencia normas/legislação quando aplicável", weight: 10 },
];

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { success } = await rateLimit(`validator:${userId}`, 10, 60000);
  if (!success) return NextResponse.json({ error: "Muitas requisições" }, { status: 429 });

  const supabase = createAdminClient();

  // Check admin role
  const { data: user } = await supabase.from("users").select("role").eq("clerk_id", userId).single();
  if (!user || !["admin", "content_manager"].includes(user.role)) {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 });
  }

  const { lessonId, courseCategoria } = await req.json();
  if (!lessonId) return NextResponse.json({ error: "lessonId obrigatório" }, { status: 400 });

  // Fetch lesson with course info
  const { data: lesson } = await (supabase as any)
    .from("lessons")
    .select("id, titulo, conteudo_rico, tipo, duracao_min, module_id, modules!inner(course_id, courses!inner(titulo, categoria))")
    .eq("id", lessonId)
    .single();

  if (!lesson) return NextResponse.json({ error: "Aula não encontrada" }, { status: 404 });

  const content = lesson.conteudo_rico ?? "";
  const categoria = courseCategoria || lesson.modules?.courses?.categoria || "outros";
  const courseTitulo = lesson.modules?.courses?.titulo || "";
  const isNR = /NR[- ]?\d+/i.test(courseTitulo);

  // Run validation checks
  const issues: ValidationIssue[] = [];
  const suggestions: string[] = [];
  let score = 0;
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const plainText = content.replace(/<[^>]*>/g, "").toLowerCase();

  // 1. Check headings
  const hasHeadings = /<h[1-6]/i.test(content) || /^#{1,6}\s/m.test(content);
  if (hasHeadings) score += 10;
  else issues.push({ tipo: "formatacao", severidade: "media", descricao: "Conteúdo sem títulos ou seções", sugestao: "Organize o conteúdo em seções com títulos (H2, H3) para facilitar a navegação" });

  // 2. Minimum length
  if (wordCount >= 500) score += 15;
  else if (wordCount >= 200) { score += 7; issues.push({ tipo: "incompleto", severidade: "media", descricao: `Conteúdo com apenas ${wordCount} palavras`, sugestao: "Recomenda-se mínimo de 500 palavras para uma aula completa" }); }
  else issues.push({ tipo: "incompleto", severidade: "alta", descricao: `Conteúdo muito curto (${wordCount} palavras)`, sugestao: "Aulas devem ter no mínimo 500 palavras para cobrir o tema adequadamente" });

  // 3. Lists
  if (/<[uo]l/i.test(content) || /<li/i.test(content)) score += 5;
  else suggestions.push("Adicione listas (bullet points) para listar equipamentos, passos ou características");

  // 4. Practical examples
  const eventKeywords = ["evento", "show", "palco", "casa de show", "arena", "festival", "montagem", "rider", "passagem de som", "soundcheck", "house mix"];
  const hasEventContext = eventKeywords.some((kw) => plainText.includes(kw));
  if (hasEventContext) score += 15;
  else issues.push({ tipo: "incompleto", severidade: "alta", descricao: "Conteúdo não contextualiza para o setor de eventos", sugestao: "Adicione exemplos práticos do dia-a-dia em eventos ao vivo (shows, festivais, corporativos)" });

  // 5. Safety references
  const safetyKeywords = ["segurança", "epi", "nr-", "risco", "proteção", "emergência", "cuidado", "perigo", "atenção"];
  const hasSafety = safetyKeywords.some((kw) => plainText.includes(kw));
  if (hasSafety || !isNR) score += 10;
  else issues.push({ tipo: "incompleto", severidade: "alta", descricao: "Aula NR sem referências a segurança", sugestao: "Inclua os riscos específicos, EPIs necessários e procedimentos de emergência" });

  // 6. Tables
  if (/<table/i.test(content)) score += 5;
  else suggestions.push("Use tabelas para comparar equipamentos, especificações técnicas ou normas");

  // 7. Callouts/alerts
  const hasCallouts = /⚠|⛔|ℹ|💡|importante|atenção|dica|perigo|alerta/i.test(content);
  if (hasCallouts) score += 5;
  else suggestions.push("Adicione caixas de destaque (⚠ IMPORTANTE, 💡 DICA) para informações críticas");

  // 8. Outdated references
  const outdatedPatterns = [
    { pattern: /NR-33.*2006|portaria.*202.*2006/i, msg: "Referência à NR-33 de 2006 — versão vigente é Portaria SEPRT 1.690/2022" },
    { pattern: /CLT.*art.*\d+.*antigo/i, msg: "Possível referência a artigo da CLT desatualizado" },
    { pattern: /OHSAS\s*18001/i, msg: "OHSAS 18001 foi substituída pela ISO 45001:2018" },
    { pattern: /NR-01.*antes.*2020|PPRA(?!.*PGR)/i, msg: "PPRA foi substituído pelo PGR (NR-01 nova)" },
  ];
  let hasOutdated = false;
  for (const { pattern, msg } of outdatedPatterns) {
    if (pattern.test(plainText) || pattern.test(content)) {
      hasOutdated = true;
      issues.push({ tipo: "desatualizado", severidade: "alta", descricao: msg, sugestao: "Atualize para a versão vigente da norma/referência" });
    }
  }
  if (!hasOutdated) score += 15;

  // 9. Event context
  if (hasEventContext) score += 10;

  // 10. Legislation references
  const hasLegislation = /NR-|NBR|portaria|lei\s+\d|decreto|regulament/i.test(content);
  if (hasLegislation || !isNR) score += 10;
  else issues.push({ tipo: "incompleto", severidade: "media", descricao: "Sem referências a normas ou legislação", sugestao: "Inclua as NRs, NBRs e portarias aplicáveis ao tema da aula" });

  // Cap score at 100
  score = Math.min(score, 100);

  // Get relevant official sources
  const sourceCategory = isNR ? "nr" : categoria;
  const sources = OFFICIAL_SOURCES[sourceCategory] ?? OFFICIAL_SOURCES["producao"] ?? [];

  // General suggestions based on category
  if (categoria === "som" && !plainText.includes("db") && !plainText.includes("decib")) {
    suggestions.push("Em aulas de som, inclua referências a níveis de pressão sonora (dB SPL) e limites da NR-15");
  }
  if (categoria === "luz" && !plainText.includes("dmx") && !plainText.includes("lux")) {
    suggestions.push("Em aulas de iluminação, inclua referências ao protocolo DMX512 e níveis de iluminância");
  }
  if (isNR && !plainText.includes("multa") && !plainText.includes("penalidade")) {
    suggestions.push("Em aulas de NR, mencione as penalidades por descumprimento (NR-28 - Fiscalização e Penalidades)");
  }

  const result: ValidationResult = {
    score,
    issues,
    suggestions,
    sources,
    lastChecked: new Date().toISOString(),
  };

  return NextResponse.json(result);
}
