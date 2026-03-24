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
  vj: [
    "ANSI/AVIXA Standards para AV",
    "SMPTE - Society of Motion Picture and Television Engineers",
    "Manual técnico de painéis LED (Absen, ROE Visual)",
  ],
  roadie: [
    "ANSI E1.2 - Entertainment Technology Standards (Rigging)",
    "ABNT NBR 16880 - Estruturas temporárias",
    "NR-35 - Trabalho em Altura",
    "NR-11 - Transporte, movimentação e armazenagem de materiais",
    "PLASA Rigging Standards",
  ],
  marketing: [
    "Philip Kotler - Marketing de Eventos",
    "ABEOC - Associação Brasileira de Empresas de Eventos",
    "ABRAFESTA - Normas e Boas Práticas",
  ],
  outros: [
    "Event Safety Guide (Purple Guide)",
    "ABNT NBR 16880",
    "NR-01 - Gerenciamento de Riscos",
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

  // ── Professor MBA: Validações especializadas por área ──

  // SOM
  if (categoria === "som") {
    if (!plainText.includes("db") && !plainText.includes("decib")) suggestions.push("Inclua referências a níveis de pressão sonora (dB SPL) e limites da NR-15");
    if (!plainText.includes("impedância") && !plainText.includes("impedance") && !plainText.includes("ohm")) suggestions.push("Explique o conceito de impedância — essencial para técnicos de som");
    if (!plainText.includes("frequência") && !plainText.includes("hz") && !plainText.includes("hertz")) suggestions.push("Aborde a faixa de frequências audíveis (20Hz-20kHz) e sua aplicação prática");
    if (!plainText.includes("equaliz") && !plainText.includes("eq")) suggestions.push("Inclua conceitos de equalização — ferramenta fundamental do operador de som");
    if (!plainText.includes("microfone") && !plainText.includes("mic")) suggestions.push("Aborde tipos de microfones (dinâmico, condensador, ribbon) e seus usos em eventos");
    if (!plainText.includes("feedback") && !plainText.includes("microfonia")) suggestions.push("Explique prevenção de feedback/microfonia — problema mais comum em eventos ao vivo");
    if (!plainText.includes("delay") && !plainText.includes("atraso")) suggestions.push("Aborde conceitos de delay/alinhamento temporal — crucial para sistemas PA distribuídos");
    const somSources = ["Yamaha Sound Reinforcement Handbook", "Audio Engineering Society (AES)", "Bob McCarthy - Sound Systems: Design and Optimization"];
    sources.push(...somSources.filter(s => !sources.includes(s)));
  }

  // LUZ
  if (categoria === "luz") {
    if (!plainText.includes("dmx") && !plainText.includes("lux")) suggestions.push("Inclua referências ao protocolo DMX512 e níveis de iluminância (lux)");
    if (!plainText.includes("temperatura de cor") && !plainText.includes("kelvin")) suggestions.push("Aborde temperatura de cor (2700K-6500K) e seu impacto visual em eventos");
    if (!plainText.includes("moving") && !plainText.includes("refletor") && !plainText.includes("par")) suggestions.push("Descreva os tipos de refletores: PAR, moving head, wash, spot, beam");
    if (!plainText.includes("console") && !plainText.includes("mesa de luz")) suggestions.push("Inclua conceitos de programação em consoles de luz (cues, presets, timecodes)");
    if (!plainText.includes("gel") && !plainText.includes("filtro") && !plainText.includes("gobo")) suggestions.push("Aborde uso de filtros (gobos, gels) para efeitos visuais");
    const luzSources = ["PLASA Technical Standards", "ETC Source Four Technical Manual", "ANSI E1.11 DMX512"];
    sources.push(...luzSources.filter(s => !sources.includes(s)));
  }

  // DJ
  if (categoria === "dj") {
    if (!plainText.includes("bpm") && !plainText.includes("batida")) suggestions.push("Aborde conceitos de BPM e sincronização de batidas (beatmatching)");
    if (!plainText.includes("equalizador") && !plainText.includes("eq") && !plainText.includes("mixer")) suggestions.push("Explique uso do mixer e equalização durante a performance");
    if (!plainText.includes("ecad") && !plainText.includes("direito autoral")) suggestions.push("Inclua informações sobre ECAD e direitos autorais em eventos (Lei 9.610/98)");
    if (!plainText.includes("setlist") && !plainText.includes("playlist")) suggestions.push("Aborde técnicas de construção de setlist para diferentes tipos de eventos");
  }

  // VJ
  if (categoria === "vj") {
    if (!plainText.includes("resolução") && !plainText.includes("pixel")) suggestions.push("Aborde resoluções de vídeo (HD, FHD, 4K) e mapeamento de pixels");
    if (!plainText.includes("mapping") && !plainText.includes("mapeamento")) suggestions.push("Inclua conceitos de video mapping — técnica essencial para VJs em eventos");
    if (!plainText.includes("led") && !plainText.includes("painel")) suggestions.push("Descreva tipos de painéis LED e suas especificações (pitch, brilho, refresh rate)");
  }

  // PRODUÇÃO
  if (categoria === "producao") {
    if (!plainText.includes("rider") && !plainText.includes("ficha técnica")) suggestions.push("Aborde leitura e criação de riders técnicos — documento essencial para produtores");
    if (!plainText.includes("cronograma") && !plainText.includes("timeline")) suggestions.push("Inclua conceitos de cronograma de produção (load-in, montagem, passagem, evento, desmontagem)");
    if (!plainText.includes("orçamento") && !plainText.includes("custo")) suggestions.push("Aborde gestão financeira de eventos: orçamento, controle de custos, margem");
    if (!plainText.includes("alvará") && !plainText.includes("bombeiro") && !plainText.includes("AVCB")) suggestions.push("Inclua documentação obrigatória: alvarás, AVCB, ART, seguro");
  }

  // EFEITOS
  if (categoria === "efeitos") {
    if (!plainText.includes("pirotecnia") && !plainText.includes("fogos")) suggestions.push("Aborde tipos de pirotecnia: indoor (gerbs, flames) vs outdoor (morteiros)");
    if (!plainText.includes("CO₂") && !plainText.includes("co2") && !plainText.includes("cryo")) suggestions.push("Inclua efeitos de CO₂/cryo: riscos de asfixia, crioqueimadura e distâncias de segurança");
    if (!plainText.includes("blaster") && !plainText.includes("CR") && !plainText.includes("exército")) suggestions.push("Mencione exigência de blaster habilitado com CR do Exército para pirotecnia");
  }

  // ROADIE
  if (categoria === "roadie") {
    if (!plainText.includes("rigging") && !plainText.includes("içamento")) suggestions.push("Aborde técnicas de rigging e içamento de equipamentos");
    if (!plainText.includes("carga") && !plainText.includes("peso") && !plainText.includes("WLL")) suggestions.push("Inclua conceitos de Working Load Limit (WLL) e fator de segurança para estruturas");
    if (!plainText.includes("case") && !plainText.includes("transporte")) suggestions.push("Aborde logística de transporte e acondicionamento de equipamentos");
  }

  // NR (qualquer curso NR)
  if (isNR) {
    if (!plainText.includes("multa") && !plainText.includes("penalidade")) suggestions.push("Mencione as penalidades por descumprimento (NR-28 - Fiscalização e Penalidades)");
    if (!plainText.includes("PGR") && !plainText.includes("gerenciamento de risco")) suggestions.push("Conecte com o PGR (Programa de Gerenciamento de Riscos) — NR-01");
    if (!plainText.includes("EPI") && !plainText.includes("equipamento de proteção")) suggestions.push("Liste os EPIs obrigatórios para a atividade regulamentada");
    if (!plainText.includes("treinamento") && !plainText.includes("capacitação") && !plainText.includes("reciclagem")) suggestions.push("Aborde carga horária de capacitação e periodicidade de reciclagem");
    if (!plainText.includes("responsabilidade") && !plainText.includes("empregador") && !plainText.includes("trabalhador")) suggestions.push("Detalhe as responsabilidades: do empregador, do trabalhador e do responsável técnico");
  }

  // ── Verificações pedagógicas (aplicam a todos) ──
  if (!plainText.includes("exemplo") && !plainText.includes("na prática") && !plainText.includes("caso real")) {
    suggestions.push("Inclua pelo menos um exemplo prático ou estudo de caso real do mercado de eventos");
  }
  if (!plainText.includes("resumo") && !plainText.includes("conclusão") && !plainText.includes("pontos-chave") && wordCount > 500) {
    suggestions.push("Adicione um resumo/pontos-chave no final da aula para fixação do conteúdo");
  }
  if (!plainText.includes("referência") && !plainText.includes("bibliografia") && !plainText.includes("fonte") && !plainText.includes("leitura")) {
    suggestions.push("Inclua referências bibliográficas ou sugestões de leitura complementar");
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
