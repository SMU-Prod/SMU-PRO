import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import { LOGO_BASE64 } from "@/lib/logo-base64";
import QRCode from "qrcode";

// ── NR metadata for known certificates ──
const NR_DATA: Record<string, {
  numero: string;
  titulo: string;
  conteudo_programatico: string;
  validade: string;
  carga_detalhada: string;
}> = {
  "NR-01": {
    numero: "NR-01",
    titulo: "DISPOSICOES GERAIS E GERENCIAMENTO DE RISCOS OCUPACIONAIS",
    conteudo_programatico:
      "Disposicoes gerais e campo de aplicacao das Normas Regulamentadoras; " +
      "Direitos e deveres do empregador e do trabalhador; " +
      "Gerenciamento de Riscos Ocupacionais (GRO) e elaboracao do Programa de Gerenciamento de Riscos (PGR); " +
      "Identificacao de perigos, avaliacao e controle de riscos ocupacionais; " +
      "Inventario de riscos e plano de acao com medidas de prevencao; " +
      "Ordem de prioridade das medidas de prevencao: eliminacao, minimizacao, controle e EPIs; " +
      "Capacitacao e treinamento em seguranca do trabalho; " +
      "Direito de recusa do trabalhador em situacoes de risco grave e iminente; " +
      "Prestacao de informacoes digitais de seguranca e saude no trabalho; " +
      "Tratamento diferenciado para MEI, microempresas e empresas de pequeno porte; " +
      "Praticas especificas aplicadas ao setor de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-04": {
    numero: "NR-04",
    titulo: "SERVICOS ESPECIALIZADOS EM ENGENHARIA DE SEGURANCA E EM MEDICINA DO TRABALHO (SESMT)",
    conteudo_programatico:
      "Objetivo, finalidade e base legal do SESMT; " +
      "Dimensionamento do SESMT conforme grau de risco e numero de empregados; " +
      "Composicao da equipe: Engenheiro de Seguranca, Medico do Trabalho, Enfermeiro, Tecnico de Seguranca e Auxiliar de Enfermagem; " +
      "Competencias e atribuicoes de cada profissional do SESMT; " +
      "Registro e funcionamento junto ao Ministerio do Trabalho; " +
      "Modalidades de servicos especializados (proprio, comum e individual); " +
      "Vinculacao do SESMT ao Programa de Gerenciamento de Riscos (PGR); " +
      "Responsabilidades do empregador na manutencao e funcionamento do SESMT; " +
      "Aplicacao pratica do SESMT no setor de eventos e producao.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-05": {
    numero: "NR-05",
    titulo: "COMISSAO INTERNA DE PREVENCAO DE ACIDENTES (CIPA)",
    conteudo_programatico:
      "Objetivo, constituicao e funcionamento da CIPA conforme legislacao vigente; " +
      "Organizacao da CIPA: composicao, mandato e estabilidade dos membros; " +
      "Atribuicoes da CIPA: identificacao de riscos, elaboracao do mapa de riscos e plano de trabalho; " +
      "Processo eleitoral: convocacao, inscricao, votacao e posse; " +
      "Treinamento obrigatorio dos membros da CIPA; " +
      "Investigacao e analise de acidentes e doencas do trabalho; " +
      "Nocoes de legislacao trabalhista e previdenciaria relativas a seguranca e saude; " +
      "Nocoes de doencas ocupacionais, AIDS e medidas de prevencao; " +
      "Metodologia de investigacao e analise de acidentes; " +
      "Principios gerais de higiene do trabalho e medidas de controle dos riscos; " +
      "Aplicacao da CIPA em empresas do setor de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "20 horas (10h teoricas + 10h praticas)",
  },
  "NR-06": {
    numero: "NR-06",
    titulo: "EQUIPAMENTOS DE PROTECAO INDIVIDUAL (EPI)",
    conteudo_programatico:
      "Definicao, classificacao e tipos de Equipamentos de Protecao Individual; " +
      "Responsabilidades do empregador: fornecimento gratuito, orientacao, substituicao e higienizacao; " +
      "Responsabilidades do trabalhador: uso adequado, guarda, conservacao e comunicacao de danos; " +
      "Certificado de Aprovacao (CA): exigencia, validade e verificacao; " +
      "Selecao do EPI adequado ao risco de cada atividade; " +
      "EPIs para protecao da cabeca, olhos, face, auditiva, respiratoria, tronco, membros superiores e inferiores; " +
      "EPIs para trabalho em altura: cinturao de seguranca, talabarte e trava-quedas; " +
      "Registro de fornecimento e controle de EPIs por trabalhador; " +
      "Higienizacao, manutencao, guarda e descarte correto de EPIs; " +
      "Praticas especificas para EPIs utilizados em montagem e producao de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-10": {
    numero: "NR-10",
    titulo: "SEGURANCA EM INSTALACOES E SERVICOS EM ELETRICIDADE",
    conteudo_programatico:
      "Introducao a seguranca com eletricidade e riscos em instalacoes e servicos com eletricidade; " +
      "Choque eletrico: mecanismos, efeitos no corpo humano e medidas de prevencao; " +
      "Arcos eletricos e queimaduras: riscos e protecao; " +
      "Campos eletromagneticos: efeitos e medidas de controle; " +
      "Tecnicas de Analise de Risco aplicadas a servicos com eletricidade; " +
      "Medidas de Controle do Risco Eletrico: desenergizacao, aterramento e bloqueio de religamento; " +
      "Normas Tecnicas Brasileiras (NBR 5410, NBR 14039 e NBR 5419 da ABNT); " +
      "Equipamentos de protecao coletiva (EPC) e individual (EPI) para eletricidade; " +
      "Rotinas de trabalho e procedimentos operacionais de seguranca; " +
      "Documentacao de instalacoes eletricas e autorizacao dos trabalhadores; " +
      "Protecao e combate a incendios em instalacoes eletricas; " +
      "Acidentes de origem eletrica: causas, estatisticas e investigacao; " +
      "Primeiros socorros em acidentes com eletricidade; " +
      "Praticas especificas para montagem eletrica em eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "40 horas (20h teoricas + 20h praticas)",
  },
  "NR-11": {
    numero: "NR-11",
    titulo: "TRANSPORTE, MOVIMENTACAO, ARMAZENAGEM E MANUSEIO DE MATERIAIS",
    conteudo_programatico:
      "Normas de seguranca para operacao de elevadores, guindastes, empilhadeiras e transportadores industriais; " +
      "Tipos de equipamentos de transporte e movimentacao de materiais; " +
      "Operacao segura de equipamentos de transporte com forca motriz propria; " +
      "Capacidade de carga: calculo, sinalizacao e respeito aos limites; " +
      "Inspecao pre-uso de equipamentos de movimentacao; " +
      "Armazenamento seguro de materiais: empilhamento maximo, distancias e estabilidade; " +
      "Movimentacao manual de cargas: tecnicas seguras de levantamento e transporte; " +
      "Sinalizacao e isolamento de areas de movimentacao de cargas; " +
      "Manutencao preventiva e corretiva dos equipamentos; " +
      "Praticas especificas para logistica e movimentacao de cargas em eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "16 horas (8h teoricas + 8h praticas)",
  },
  "NR-12": {
    numero: "NR-12",
    titulo: "SEGURANCA NO TRABALHO EM MAQUINAS E EQUIPAMENTOS",
    conteudo_programatico:
      "Descricao e identificacao dos riscos associados a maquinas e equipamentos; " +
      "Fases de utilizacao: fabricacao, transporte, montagem, instalacao, operacao e manutencao; " +
      "Protecoes fixas, moveis e dispositivos de seguranca (intertravamento, cortinas de luz, sensores); " +
      "Dispositivos de parada de emergencia: tipos, localizacao e acionamento; " +
      "Sinalizacao de seguranca em maquinas: cores, simbolos e avisos; " +
      "Procedimentos seguros de operacao, partida e desligamento; " +
      "Permissao de trabalho para intervencao em maquinas; " +
      "Sistema de bloqueio e etiquetagem de fontes de energia (Lockout/Tagout); " +
      "Meios de acesso permanentes: escadas, passarelas e plataformas; " +
      "Aspectos ergonomicos na operacao de maquinas; " +
      "Manutencao preventiva e corretiva: procedimentos e registro; " +
      "Praticas especificas para equipamentos utilizados em producao de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "16 horas (8h teoricas + 8h praticas)",
  },
  "NR-17": {
    numero: "NR-17",
    titulo: "ERGONOMIA",
    conteudo_programatico:
      "Conceitos fundamentais de ergonomia e sua aplicacao no ambiente de trabalho; " +
      "Avaliacao Ergonomica Preliminar (AEP) e Analise Ergonomica do Trabalho (AET); " +
      "Organizacao do trabalho: ritmo, pausas, jornada e metas de producao; " +
      "Levantamento, transporte e descarga individual de materiais: pesos maximos e tecnicas; " +
      "Mobiliario dos postos de trabalho: dimensoes, ajustes e acessorios; " +
      "Equipamentos dos postos de trabalho: monitores, teclados e ferramentas; " +
      "Condicoes ambientais: temperatura, umidade, iluminacao, ruido e ventilacao; " +
      "Trabalho com maquinas, equipamentos e ferramentas manuais; " +
      "Disturbios osteomusculares relacionados ao trabalho (DORT/LER): prevencao e identificacao; " +
      "Praticas especificas de ergonomia para montagem, desmontagem e operacao de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-18": {
    numero: "NR-18",
    titulo: "SEGURANCA E SAUDE NO TRABALHO NA INDUSTRIA DA CONSTRUCAO",
    conteudo_programatico:
      "Programa de Condicoes e Meio Ambiente de Trabalho na Industria da Construcao (PCMAT); " +
      "Areas de vivencia: instalacoes sanitarias, vestiarios, refeitorio e area de lazer; " +
      "Ordem e limpeza no canteiro de obras e areas de montagem; " +
      "Escavacoes, fundacoes e desmonte de rochas: procedimentos seguros; " +
      "Carpintaria, armacoes de aco e estruturas de concreto; " +
      "Estruturas metalicas: montagem, soldagem e corte a quente; " +
      "Andaimes: tipos (suspensos, fachadeiros, tubulares), montagem e inspecao; " +
      "Plataformas de trabalho elevadas e protecao contra quedas de altura; " +
      "Protecao contra queda de materiais e isolamento de areas; " +
      "Maquinas, equipamentos e ferramentas diversas na construcao; " +
      "Instalacoes eletricas temporarias e seguranca em eletricidade; " +
      "Praticas especificas para montagem de estruturas temporarias em eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "16 horas (8h teoricas + 8h praticas)",
  },
  "NR-20": {
    numero: "NR-20",
    titulo: "SEGURANCA E SAUDE NO TRABALHO COM INFLAMAVEIS E COMBUSTIVEIS",
    conteudo_programatico:
      "Inflamaveis e combustiveis: definicoes, caracteristicas e propriedades fisico-quimicas; " +
      "Classificacao dos liquidos inflamaveis e gases conforme ponto de fulgor e ebulicao; " +
      "Controles coletivos: ventilacao, deteccao de vazamentos e sistemas de contencao; " +
      "Controles individuais: EPIs especificos para trabalho com inflamaveis; " +
      "Fontes de ignicao: eletricidade estatica, chamas, faiscas e superficies quentes; " +
      "Medidas preventivas para controle de fontes de ignicao; " +
      "Armazenamento e manuseio seguro de produtos inflamaveis e combustiveis; " +
      "Procedimentos basicos em situacoes de emergencia com inflamaveis; " +
      "Plano de resposta a emergencias: comunicacao, evacuacao e combate inicial; " +
      "Nocoes basicas de protecao contra incendio e explosao; " +
      "Praticas especificas para manuseio de inflamaveis no setor de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-23": {
    numero: "NR-23",
    titulo: "PROTECAO CONTRA INCENDIOS",
    conteudo_programatico:
      "Principios basicos de prevencao e combate a incendios; " +
      "Triangulo e tetraedro do fogo: combustivel, comburente, calor e reacao em cadeia; " +
      "Classes de incendio (A, B, C, D e K) e agentes extintores adequados; " +
      "Equipamentos de combate ao fogo: extintores portateis, hidrantes e mangueiras; " +
      "Inspecao, localizacao e sinalizacao de equipamentos de combate a incendio; " +
      "Sistemas de deteccao e alarme de incendio; " +
      "Saidas de emergencia: dimensionamento, sinalizacao e iluminacao; " +
      "Plano de emergencia e evacuacao: elaboracao, treinamento e simulados; " +
      "Formacao de brigada de incendio: atribuicoes e procedimentos; " +
      "Primeiros socorros em caso de queimaduras e intoxicacao por fumaca; " +
      "Praticas especificas de prevencao de incendio em espacos de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
  "NR-26": {
    numero: "NR-26",
    titulo: "SINALIZACAO DE SEGURANCA",
    conteudo_programatico:
      "Uso de cores na seguranca do trabalho conforme normas brasileiras; " +
      "Cores de sinalizacao: vermelho (combate a incendio), amarelo (atencao), verde (seguranca), azul (obrigatoriedade); " +
      "Tipos de sinalizacao: advertencia, proibicao, obrigacao, emergencia e indicacao; " +
      "Dimensionamento, localizacao e manutencao de placas e sinais de seguranca; " +
      "Rotulagem preventiva de produtos quimicos conforme GHS/SGA; " +
      "Ficha de Informacoes de Seguranca de Produtos Quimicos (FISPQ/FDS); " +
      "Sinalizacao de tubulacoes: identificacao por cores dos fluidos transportados; " +
      "Sinalizacao de areas de risco, rotas de fuga e pontos de encontro; " +
      "Praticas especificas de sinalizacao para espacos e estruturas de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "4 horas (2h teoricas + 2h praticas)",
  },
  "NR-33": {
    numero: "NR-33",
    titulo: "SEGURANCA E SAUDE NOS TRABALHOS EM ESPACOS CONFINADOS",
    conteudo_programatico:
      "Definicao legal e identificacao de espacos confinados; " +
      "Reconhecimento, avaliacao e controle de riscos em espacos confinados; " +
      "Riscos atmosfericos: deficiencia de oxigenio, atmosferas inflamaveis e toxicas; " +
      "Monitoramento e controle atmosferico: equipamentos de medicao e limites de exposicao; " +
      "Ventilacao de espacos confinados: natural e mecanica (insuflamento e exaustao); " +
      "Capacitacao de trabalhadores autorizados, vigias e supervisores de entrada; " +
      "Permissao de Entrada e Trabalho (PET): elaboracao, aprovacao e cancelamento; " +
      "Procedimentos de entrada, permanencia e saida de espacos confinados; " +
      "Equipamentos de protecao individual e coletiva para espacos confinados; " +
      "Nocoes de resgate e primeiros socorros em espacos confinados; " +
      "Simulacao pratica de entrada em espaco confinado; " +
      "Praticas especificas para espacos confinados em montagem de eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "16 horas (8h teoricas + 8h praticas)",
  },
  "NR-35": {
    numero: "NR-35",
    titulo: "TRABALHO EM ALTURA",
    conteudo_programatico:
      "Normas e regulamentos aplicaveis ao trabalho em altura; " +
      "Analise de risco e condicoes impeditivas; " +
      "Riscos potenciais inerentes ao trabalho em altura e medidas de prevencao e controle; " +
      "Sistemas de protecao coletiva: guarda-corpo, redes de protecao e plataformas; " +
      "Equipamentos de Protecao Individual para trabalho em altura: cinturao tipo paraquedista, talabarte, trava-quedas e capacete; " +
      "Sistemas de ancoragem: tipos, resistencia e pontos de fixacao; " +
      "Conducao e uso seguro de escadas portateis e extensiveis; " +
      "Acesso por cordas e tecnicas de posicionamento; " +
      "Acidentes tipicos em trabalho em altura: causas e medidas preventivas; " +
      "Emergencia, resgate e primeiros socorros em trabalhos em altura; " +
      "Praticas especificas para montagem de estruturas, trelicas e rigging em eventos.",
    validade: "2 (dois) anos a partir da data de realizacao",
    carga_detalhada: "8 horas (4h teoricas + 4h praticas)",
  },
};

/**
 * Format a user name for display on the certificate.
 * Handles cases like "rickberberian" → "Rick Berberian" (camelCase or single-word names)
 * and ensures proper capitalization: "JOAO SILVA" → "João Silva", "joao silva" → "Joao Silva"
 */
function formatCertName(raw: string | null | undefined): string {
  if (!raw || !raw.trim()) return "Nome do Aluno";
  let name = raw.trim();

  // If name has no spaces and has mixed case patterns (camelCase), split on uppercase
  // e.g. "rickBerberian" → "rick Berberian"
  if (!name.includes(" ") && name.length > 2) {
    // Try splitting on camelCase boundaries
    const split = name.replace(/([a-z])([A-Z])/g, "$1 $2");
    if (split.includes(" ")) {
      name = split;
    }
  }

  // Title case each word
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Detect NR number from certificate metadata or course/lesson title.
 * Priority: cert.metadata.lesson_titulo > course titulo
 */
function detectNR(cert: any, courseTitulo: string): { key: string; data: typeof NR_DATA[string] } | null {
  // First try lesson title from metadata (most specific - e.g. "NR-10 Segurança...")
  const lessonTitulo = cert?.metadata?.lesson_titulo ?? "";
  const sources = [lessonTitulo, courseTitulo];

  for (const src of sources) {
    const match = src.match(/NR[- ]?(\d+)/i);
    if (match) {
      const num = match[1].padStart(2, "0");
      const key = `NR-${num}`;
      if (NR_DATA[key]) {
        return { key, data: NR_DATA[key] };
      }
      // Generic fallback for NR numbers not in our database
      return {
        key,
        data: {
          numero: key,
          titulo: src.replace(/NR[- ]?\d+[- ]*/i, "").trim().toUpperCase() || `NORMA REGULAMENTADORA ${key}`,
          conteudo_programatico:
            "Conteudo conforme programa de treinamento da norma regulamentadora " + key +
            " aplicada ao setor de eventos, incluindo teoria e pratica.",
          validade: "2 (dois) anos a partir da data de realizacao",
          carga_detalhada: `${cert?.carga_horaria ?? 8} horas`,
        },
      };
    }
  }

  // Check if the course is an NR course (title contains "NR" or "norma regulament")
  const isNRCourse = /\bNR\b/i.test(courseTitulo) || /norma.{0,5}regulament/i.test(courseTitulo);
  if (isNRCourse && cert?.metadata?.tipo === "nr_aula") {
    // It's an NR per-lesson cert but we can't extract the number
    return {
      key: "NR",
      data: {
        numero: "NR",
        titulo: (lessonTitulo || courseTitulo).toUpperCase(),
        conteudo_programatico: "Conteudo conforme programa de treinamento de Normas Regulamentadoras aplicadas ao setor de eventos.",
        validade: "2 (dois) anos a partir da data de realizacao",
        carga_detalhada: `${cert?.carga_horaria ?? 8} horas`,
      },
    };
  }

  return null;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ codigo: string }> }
) {
  const { codigo } = await params;
  const supabase = createAdminClient();

  const { data: cert } = await supabase
    .from("certificates")
    .select(`*, users(nome, email), courses(titulo, slug, nivel, categoria, carga_horaria, descricao)`)
    .eq("codigo_verificacao", codigo)
    .single();

  if (!cert) {
    return NextResponse.json({ error: "Certificado nao encontrado" }, { status: 404 });
  }

  // Load digital signatures for this certificate
  const { data: signatures } = await (supabase as any)
    .from("certificate_signatures")
    .select("tipo, assinatura_img, nome_assinante")
    .eq("certificate_id", cert.id);

  const sigMap: Record<string, { img: string; nome: string }> = {};
  for (const s of signatures ?? []) {
    sigMap[s.tipo] = { img: s.assinatura_img, nome: s.nome_assinante ?? "" };
  }

  // If no instructor/resp signatures saved on cert, try to load from course_instructors
  if (!sigMap["instrutor"] || !sigMap["responsavel_tecnico"]) {
    const lessonId = cert.metadata?.lesson_id;
    const { data: courseInstructors } = await (supabase as any)
      .from("course_instructors")
      .select("tipo, lesson_id, instructors(nome, qualificacao, formacao, registro, assinatura_img)")
      .eq("course_id", cert.course_id);

    for (const ci of courseInstructors ?? []) {
      const inst = ci.instructors as any;
      if (!inst?.assinatura_img) continue;
      // Prefer lesson-specific, fallback to course-level
      const isLessonMatch = ci.lesson_id === lessonId;
      const isCourseLevel = !ci.lesson_id;
      if ((isLessonMatch || isCourseLevel) && !sigMap[ci.tipo]) {
        sigMap[ci.tipo] = { img: inst.assinatura_img, nome: inst.nome };
      }
    }
  }

  const user = cert.users as any;
  const course = cert.courses as any;
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificado/${codigo}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

  const emitidoEm = new Date(cert.emitido_em).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const emitidoShort = new Date(cert.emitido_em).toLocaleDateString("pt-BR");

  const cargaHoraria = formatMinutes(cert.carga_horaria ?? course?.carga_horaria ?? 0);
  const nivel = getLevelLabel(course?.nivel ?? "");

  const nrResult = detectNR(cert, course?.titulo ?? "");
  const isNR = !!nrResult;

  const html = isNR
    ? generateNRCertificate({ cert, user, course, nrData: nrResult!.data, qrDataUrl, codigo, emitidoEm, emitidoShort, cargaHoraria, sigMap })
    : generateGeneralCertificate({ cert, user, course, qrDataUrl, codigo, emitidoEm, cargaHoraria, nivel, sigMap });

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `inline; filename="certificado-${codigo.substring(0, 8)}.html"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

// ══════════════════════════════════════════════════
// CERTIFICADO GERAL (cursos normais)
// ══════════════════════════════════════════════════
function generateGeneralCertificate({ cert, user, course, qrDataUrl, codigo, emitidoEm, cargaHoraria, nivel, sigMap }: any) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado — ${course?.titulo ?? "Curso"}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4 landscape; margin: 0; }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background: #f5f5f0;
      width: 297mm; height: 210mm;
      display: flex; align-items: center; justify-content: center;
    }
    .cert {
      width: 277mm; height: 190mm;
      background: #ffffff;
      border: 3px solid #1a365d;
      border-radius: 4px;
      padding: 0;
      position: relative;
      overflow: hidden;
    }
    .inner-border {
      position: absolute;
      top: 6px; left: 6px; right: 6px; bottom: 6px;
      border: 1px solid #c8a84e;
      border-radius: 2px;
    }
    .content {
      position: relative; z-index: 1;
      height: 100%;
      display: flex; flex-direction: column;
      padding: 24px 36px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 6px;
    }
    .brand {
      font-size: 20px; font-weight: 900;
      color: #1a365d; letter-spacing: 2px;
      text-transform: uppercase;
    }
    .brand-sub {
      font-size: 9px; color: #6b7280;
      letter-spacing: 3px; text-transform: uppercase;
      margin-top: 2px;
    }
    .divider {
      width: 80px; height: 2px;
      background: linear-gradient(90deg, transparent, #c8a84e, transparent);
      margin: 10px auto;
    }
    .cert-type {
      font-size: 26px; font-weight: 300;
      color: #c8a84e; letter-spacing: 6px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 16px;
    }
    .body { flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .certify-text { font-size: 11px; color: #6b7280; margin-bottom: 8px; }
    .student-name {
      font-size: 34px; font-weight: 700;
      color: #1a365d; margin-bottom: 10px;
      border-bottom: 2px solid #c8a84e;
      padding-bottom: 6px;
      display: inline-block;
    }
    .concluded-text { font-size: 11px; color: #6b7280; margin-bottom: 6px; }
    .course-title { font-size: 20px; font-weight: 700; color: #1a365d; margin-bottom: 4px; }
    .course-meta { font-size: 11px; color: #6b7280; }
    .stats-row {
      display: flex; gap: 24px; margin-top: 18px;
      justify-content: center;
    }
    .stat {
      text-align: center;
      padding: 8px 18px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: #fafaf8;
    }
    .stat-label { font-size: 8px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat-value { font-size: 12px; font-weight: 600; color: #1a365d; margin-top: 2px; }
    .footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      border-top: 1px solid #e5e7eb;
      padding-top: 14px;
      margin-top: 12px;
    }
    .sig-block { text-align: center; }
    .sig-line { width: 150px; height: 1px; background: #1a365d; margin-bottom: 4px; }
    .sig-name { font-size: 10px; font-weight: 600; color: #1a365d; }
    .sig-role { font-size: 8px; color: #6b7280; }
    .sig-img-general { height: 32px; object-fit: contain; display: block; margin: 0 auto 4px; }
    .qr-block { display: flex; flex-direction: column; align-items: center; gap: 3px; }
    .qr-block img { width: 64px; height: 64px; border-radius: 4px; }
    .qr-text { font-size: 7px; color: #9ca3af; }
    .code-block { text-align: right; }
    .code-label { font-size: 8px; color: #9ca3af; }
    .code-value { font-size: 8px; font-family: 'Courier New', monospace; color: #1a365d; max-width: 120px; word-break: break-all; margin-top: 2px; }
    .mit-badge {
      display: inline-block;
      background: #fef3c7; border: 1px solid #f59e0b;
      color: #92400e; font-size: 9px; font-weight: 700;
      padding: 3px 10px; border-radius: 12px;
      margin-top: 8px;
    }
    .corner-tl, .corner-tr, .corner-bl, .corner-br {
      position: absolute; width: 30px; height: 30px;
      border-color: #c8a84e; border-style: solid;
    }
    .corner-tl { top: 14px; left: 14px; border-width: 2px 0 0 2px; }
    .corner-tr { top: 14px; right: 14px; border-width: 2px 2px 0 0; }
    .corner-bl { bottom: 14px; left: 14px; border-width: 0 0 2px 2px; }
    .corner-br { bottom: 14px; right: 14px; border-width: 0 2px 2px 0; }
  </style>
</head>
<body>
  <div class="cert">
    <div class="inner-border"></div>
    <div class="corner-tl"></div>
    <div class="corner-tr"></div>
    <div class="corner-bl"></div>
    <div class="corner-br"></div>

    <div class="content">
      <div class="header">
        <img src="${LOGO_BASE64}" alt="SMU Producoes" style="height: 50px; border-radius: 6px; display: block; margin: 0 auto 6px;" />
        <div class="brand-sub">Escola Profissional de Eventos</div>
        <div class="divider"></div>
        <div class="cert-type">Certificado de Conclusao</div>
      </div>

      <div class="body">
        <div class="certify-text">Certificamos que</div>
        <div class="student-name">${formatCertName(user?.nome)}</div>
        <div class="concluded-text">concluiu com exito o curso</div>
        <div class="course-title">${course?.titulo ?? "Curso"}</div>
        <div class="course-meta">Nivel ${nivel}${cert.nota_final ? ` &middot; Nota Final: ${cert.nota_final}/100` : ""}</div>
        ${cert.projeto_cultural ? `<div class="mit-badge">&#9733; Projeto Cultural MIT</div>` : ""}

        <div class="stats-row">
          <div class="stat">
            <div class="stat-label">Data de Emissao</div>
            <div class="stat-value">${emitidoEm}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Carga Horaria</div>
            <div class="stat-value">${cargaHoraria}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Nivel</div>
            <div class="stat-value">${nivel}</div>
          </div>
          ${cert.nota_final ? `
          <div class="stat">
            <div class="stat-label">Nota Final</div>
            <div class="stat-value">${cert.nota_final}/100</div>
          </div>` : ""}
        </div>
      </div>

      <div class="footer">
        <div class="sig-block">
          ${sigMap?.instrutor?.img
            ? `<img src="${sigMap.instrutor.img}" class="sig-img-general" alt="Instrutor" />`
            : `<img src="${LOGO_BASE64}" alt="SMU" style="height: 32px; border-radius: 4px; margin-bottom: 6px;" />`
          }
          <div class="sig-line"></div>
          <div class="sig-name">${sigMap?.instrutor?.nome || "SMU Producoes"}</div>
          <div class="sig-role">${sigMap?.instrutor?.nome ? "Instrutor" : "Escola Profissional de Eventos"}</div>
        </div>
        ${sigMap?.trabalhador?.img ? `
        <div class="sig-block">
          <img src="${sigMap.trabalhador.img}" class="sig-img-general" alt="Aluno" />
          <div class="sig-line"></div>
          <div class="sig-name">${formatCertName(user?.nome)}</div>
          <div class="sig-role">Aluno</div>
        </div>` : ""}
        <div class="qr-block">
          <img src="${qrDataUrl}" alt="QR Code" />
          <div class="qr-text">Verificar autenticidade</div>
        </div>
        <div class="code-block">
          <div class="code-label">Codigo de verificacao</div>
          <div class="code-value">${codigo.substring(0, 16)}</div>
        </div>
      </div>
    </div>
  </div>
  <script>window.onload = function() { window.print(); }</script>
</body>
</html>`;
}

// ══════════════════════════════════════════════════
// CERTIFICADO NR (Normas Regulamentadoras)
// Layout fiel ao modelo oficial de capacitacao
// ══════════════════════════════════════════════════
function generateNRCertificate({ cert, user, course, nrData, qrDataUrl, codigo, emitidoEm, emitidoShort, cargaHoraria, sigMap }: any) {
  const nr = nrData;

  // Calculate validade end date (2 years from issuance)
  const emitidoDate = new Date(cert.emitido_em);
  const validadeDate = new Date(emitidoDate);
  validadeDate.setFullYear(validadeDate.getFullYear() + 2);
  const validadeStr = validadeDate.toLocaleDateString("pt-BR");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado ${nr.numero} &mdash; ${nr.titulo}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4 portrait; margin: 0; }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background: #f5f5f0;
      width: 210mm; height: 297mm;
      display: flex; align-items: center; justify-content: center;
    }
    .cert {
      width: 194mm; height: 281mm;
      background: #ffffff;
      border: 2.5px solid #c8a84e;
      position: relative;
      overflow: hidden;
    }
    .content {
      height: 100%;
      display: flex; flex-direction: column;
      padding: 22px 30px 18px;
    }

    /* ── Header ── */
    .header { text-align: center; margin-bottom: 6px; }
    .brand-line {
      font-size: 13px; font-weight: 900; color: #1a365d;
      letter-spacing: 0.5px; text-transform: uppercase;
    }
    .brand-line span { color: #c8a84e; }
    .cert-title {
      font-size: 26px; font-weight: 700; color: #c8a84e;
      letter-spacing: 2px; text-transform: uppercase;
      margin-top: 6px;
    }

    /* ── Body top ── */
    .certify-text {
      font-size: 11px; color: #555; text-align: center;
      margin: 10px 0 4px;
    }
    .student-name {
      font-size: 22px; font-weight: 800; color: #1a365d;
      text-align: center; text-transform: uppercase;
      margin-bottom: 8px;
    }
    .concluded-text {
      font-size: 11px; color: #555; text-align: center;
      margin-bottom: 6px;
    }
    .nr-title {
      font-size: 17px; font-weight: 800; color: #1a365d;
      text-align: center; margin-bottom: 2px;
    }
    .nr-subtitle {
      font-size: 10px; color: #666; text-align: center;
      font-style: italic; margin-bottom: 14px;
    }

    /* ── Fields ── */
    .fields { flex: 1; }
    .field { margin-bottom: 7px; }
    .field-label {
      font-size: 9.5px; font-weight: 700; color: #1a365d;
      display: inline;
    }
    .field-value {
      font-size: 9.5px; color: #333;
      display: inline;
      line-height: 1.55;
      text-align: justify;
    }
    .field-block .field-value {
      display: block;
      margin-top: 2px;
    }

    /* Single-line field with underline */
    .field-inline {
      margin-bottom: 6px;
      border-bottom: 1px solid #bbb;
      padding-bottom: 3px;
    }
    .field-inline .field-label { font-size: 9.5px; }
    .field-inline .field-value { font-size: 9.5px; margin-left: 4px; }

    /* ── Signatures ── */
    .sig-section { margin-top: 12px; }
    .sig-row-top {
      display: flex; justify-content: space-between; align-items: flex-end;
      margin-bottom: 16px;
    }
    .sig-instructor { flex: 1; }
    .sig-instructor-line {
      display: flex; align-items: flex-end; gap: 8px;
    }
    .sig-instructor-label { font-size: 9.5px; font-weight: 700; color: #1a365d; white-space: nowrap; }
    .sig-underline { flex: 1; border-bottom: 1px solid #333; min-width: 80px; }
    .sig-qual-label { font-size: 9.5px; font-weight: 700; color: #1a365d; white-space: nowrap; margin-left: 12px; }

    .sig-responsavel {
      text-align: center;
      margin-bottom: 14px;
      padding-top: 6px;
      border-top: 1px solid #ccc;
    }
    .sig-responsavel-title {
      font-size: 9px; font-weight: 700; color: #1a365d;
      margin-bottom: 2px;
    }
    .sig-responsavel-fields {
      font-size: 8px; color: #666; font-style: italic;
    }

    .sig-trabalhador {
      text-align: center;
      border-top: 1px solid #333;
      padding-top: 4px;
      margin: 0 auto;
      width: 70%;
    }
    .sig-trabalhador-label {
      font-size: 9.5px; font-weight: 700; color: #1a365d;
    }
    .sig-img {
      height: 40px; object-fit: contain; display: block;
      margin: 0 auto 2px;
    }

    /* ── Bottom bar ── */
    .bottom-bar {
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 10px; padding-top: 8px;
      border-top: 1px solid #ddd;
    }
    .qr-block { display: flex; align-items: center; gap: 6px; }
    .qr-block img { width: 46px; height: 46px; }
    .qr-text { font-size: 7px; color: #999; max-width: 80px; line-height: 1.3; }
    .code-block { text-align: right; }
    .code-label { font-size: 7px; color: #999; }
    .code-value { font-size: 7px; font-family: 'Courier New', monospace; color: #1a365d; word-break: break-all; max-width: 110px; margin-top: 1px; }
  </style>
</head>
<body>
  <div class="cert">
    <div class="content">

      <!-- Header -->
      <div class="header">
        <div class="brand-line">SMU PRO <span>&mdash;</span> ESCOLA PROFISSIONAL DE EVENTOS</div>
        <div class="cert-title">CERTIFICADO DE CAPACITA&Ccedil;&Atilde;O</div>
      </div>

      <!-- Student -->
      <div class="certify-text">Certificamos que</div>
      <div class="student-name">${formatCertName(user?.nome).toUpperCase()}</div>
      <div class="concluded-text">concluiu com &ecirc;xito o treinamento de</div>
      <div class="nr-title">${nr.numero} &mdash; ${nr.titulo}</div>
      <div class="nr-subtitle">Aplicado ao Setor de Eventos</div>

      <!-- Fields -->
      <div class="fields">
        <div class="field field-block">
          <span class="field-label">Conte&uacute;do Program&aacute;tico:</span>
          <span class="field-value">${nr.conteudo_programatico}</span>
        </div>

        <div class="field-inline">
          <span class="field-label">Carga Hor&aacute;ria:</span>
          <span class="field-value">${nr.carga_detalhada}</span>
        </div>

        <div class="field-inline">
          <span class="field-label">Data de Realiza&ccedil;&atilde;o:</span>
          <span class="field-value">${emitidoShort}</span>
        </div>

        <div class="field-inline">
          <span class="field-label">Local:</span>
          <span class="field-value">SMU PRO &mdash; Plataforma EAD / Aulas Pr&aacute;ticas Presenciais</span>
        </div>

        <div class="field-inline">
          <span class="field-label">Validade:</span>
          <span class="field-value">${nr.validade} (v&aacute;lido at&eacute; ${validadeStr})</span>
        </div>
      </div>

      <!-- Signatures -->
      <div class="sig-section">
        <!-- Instrutor -->
        <div class="sig-row-top">
          <div class="sig-instructor-line" style="flex:1;">
            <span class="sig-instructor-label">Instrutor:</span>
            ${sigMap?.instrutor?.img
              ? `<img src="${sigMap.instrutor.img}" class="sig-img" alt="Assinatura Instrutor" style="height:36px; margin:0 8px;" />`
              : `<span class="sig-underline"></span>`
            }
          </div>
          <div style="display:flex; align-items:flex-end; margin-left:16px;">
            <span class="sig-qual-label">Qualifica&ccedil;&atilde;o:</span>
            ${sigMap?.instrutor?.nome
              ? `<span style="font-size:9px; color:#333; margin-left:6px;">${sigMap.instrutor.nome}</span>`
              : `<span class="sig-underline" style="width:100px; border-bottom:1px solid #333; margin-left:6px;"></span>`
            }
          </div>
        </div>

        <!-- Responsavel Tecnico -->
        <div class="sig-responsavel">
          ${sigMap?.responsavel_tecnico?.img
            ? `<img src="${sigMap.responsavel_tecnico.img}" class="sig-img" alt="Assinatura RT" />`
            : ""
          }
          <div class="sig-responsavel-title">Respons&aacute;vel T&eacute;cnico pelo Treinamento</div>
          <div class="sig-responsavel-fields">${
            sigMap?.responsavel_tecnico?.nome
              ? sigMap.responsavel_tecnico.nome
              : "[Nome] &mdash; [Forma&ccedil;&atilde;o] &mdash; [Registro Profissional]"
          }</div>
        </div>

        <!-- Assinatura do Trabalhador -->
        <div class="sig-trabalhador">
          ${sigMap?.trabalhador?.img
            ? `<img src="${sigMap.trabalhador.img}" class="sig-img" alt="Assinatura Trabalhador" />`
            : ""
          }
          <div class="sig-trabalhador-label">Assinatura do Trabalhador</div>
        </div>
      </div>

      <!-- Bottom verification -->
      <div class="bottom-bar">
        <div class="qr-block">
          <img src="${qrDataUrl}" alt="QR Code" />
          <div class="qr-text">Escaneie para verificar a autenticidade deste certificado</div>
        </div>
        <div class="code-block">
          <div class="code-label">C&oacute;digo de verifica&ccedil;&atilde;o</div>
          <div class="code-value">${codigo}</div>
        </div>
      </div>

    </div>
  </div>
  <script>window.onload = function() { window.print(); }</script>
</body>
</html>`;
}
