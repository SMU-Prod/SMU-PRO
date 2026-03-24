/**
 * SMU PRO — Image Engine v2
 * Pipeline: GPT-4o-mini (análise técnica + roteiro) → gpt-image-1-mini (imagens) → Edge TTS (narração)
 *
 * ⚠️  DALL-E 3 será descontinuado em 12/05/2026.
 *     Usando gpt-image-1-mini como substituto oficial (doc: developers.openai.com/api/docs/guides/image-generation)
 *
 * O motor funciona como um PROFESSOR TÉCNICO que:
 *   1. Analisa profundamente o conteúdo identificando conceitos, equipamentos, técnicas e processos
 *   2. Decide o tipo ideal de visualização para cada conceito (infográfico, diagrama, ilustração, etc.)
 *   3. Gera imagens didáticas que EXPLICAM visualmente o que o texto ensina
 *   4. Produz narração natural do conteúdo original
 *
 * Custo estimado por aula (10 cenas, qualidade medium):
 *   GPT-4o-mini (análise + roteiro): ~$0.002
 *   gpt-image-1-mini medium 1536×1024: $0.015/img × 10 = $0.15
 *   Edge TTS: GRÁTIS
 *   TOTAL: ~$0.15 por aula
 *
 * Comparativo de custo:
 *   Pipeline v5 (Gemini+Imagen+Veo):  ~$60.00/aula  ← caro demais
 *   Pipeline v6 (GPT+DALL-E 3):       ~$0.80/aula   ← DALL-E será descontinuado
 *   Pipeline v7 (GPT+gpt-image-mini): ~$0.15/aula   ← ATUAL ✓ (400x mais barato que v5)
 *
 * Referências:
 *   - Image API: https://developers.openai.com/api/docs/guides/image-generation
 *   - Pricing:   https://costgoat.com/pricing/openai-images
 *   - Models:    https://platform.openai.com/docs/models/gpt-image-1-mini
 */

import OpenAI from "openai";
import type { CourseCategory } from "@/types/database";

// ── Client ──────────────────────────────────────────────────
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// ── Types ───────────────────────────────────────────────────

/**
 * Qualidade da imagem (gpt-image-1-mini):
 *   low:    $0.006/img  — rascunho, testes
 *   medium: $0.015/img  — produção (recomendado ✓)
 *   high:   $0.052/img  — marketing, destaque
 */
export type ImageQuality = "low" | "medium" | "high";

/**
 * Tipos de visualização didática que o professor técnico pode escolher.
 * Cada tipo gera um prompt de imagem otimizado para o conceito.
 */
export type ImageType =
  | "diagrama_tecnico"     // Signal flow, circuitos, diagrama de blocos, conexões
  | "equipamento_detalhe"  // Close-up de equipamento específico com partes identificáveis
  | "cenario_pratico"      // Equipamento em contexto real (palco, estúdio, cabine)
  | "infografico_processo" // Fluxo de etapas, workflow, passo-a-passo visual
  | "comparativo_visual"   // Lado a lado: certo/errado, antes/depois, técnica A vs B
  | "mapa_conceitual"      // Relações entre conceitos, hierarquia, taxonomia
  | "esquema_funcional"    // Como algo funciona internamente (corte, vista explodida)
  | "panorama_contexto"    // Visão geral do ambiente/contexto onde a técnica se aplica
  | "alerta_seguranca"     // Situação de risco, zona de perigo, procedimento seguro
  | "resumo_visual";       // Síntese dos conceitos-chave da aula

export interface ImageScene {
  numero: number;
  tipo: ImageType;
  titulo: string;

  // ── Análise técnica do professor ──
  conceito_tecnico: string;        // O conceito ou tópico técnico identificado nesta cena
  por_que_visual: string;          // Por que este conceito precisa de visualização (1 frase)
  elementos_tecnicos: string[];    // Lista de elementos técnicos visíveis na imagem (3-6 itens)

  // ── Conteúdo para o aluno ──
  narracao: string;                // Texto extraído do conteúdo original para narração TTS
  explicacao_texto: string;        // Texto complementar exibido na tela (2-4 frases didáticas)
  destaques: string[];             // 2-4 pontos-chave como bullets (max 8 palavras cada)
  dica_profissional: string;       // Dica prática de quem trabalha na área (1 frase)

  // ── Geração de imagem ──
  prompt_imagem: string;           // Prompt em INGLÊS para gpt-image-1-mini
  duracao: number;                 // Duração estimada da narração em segundos
}

export interface VisualStyle {
  estilo: string;
  paleta: string;
  atmosfera: string;
  estilo_tecnico: string;          // Direção específica para elementos técnicos
}

export interface AnaliseConteudo {
  tipo_conteudo: string;           // "teorico" | "pratico" | "misto"
  complexidade: string;            // "basico" | "intermediario" | "avancado"
  equipamentos_mencionados: string[];
  tecnicas_mencionadas: string[];
  processos_mencionados: string[];
  termos_tecnicos: string[];
  contexto_aplicacao: string;      // Onde esse conhecimento é aplicado no mundo real
}

export interface ImageScript {
  metadata: {
    titulo_aula: string;
    categoria: CourseCategory;
    total_cenas: number;
    duracao_total: number;
    abordagem_didatica: string;
    conceitos_identificados: string[];
    nivel_tecnico: string;
  };
  analise: AnaliseConteudo;
  visual_style: VisualStyle;
  cenas: ImageScene[];
}

export interface GeneratedImageScene extends ImageScene {
  image_url?: string;
  image_b64?: string;
  narration_url?: string;
}


// ══════════════════════════════════════════════════════════════
// DIREÇÃO VISUAL TÉCNICA POR CATEGORIA
// ══════════════════════════════════════════════════════════════

const VISUAL_DIRECTION: Record<CourseCategory, string> = {
  som: `ÁREA TÉCNICA: Engenharia de som e áudio profissional para eventos ao vivo.

EQUIPAMENTOS-CHAVE para identificar no texto:
  Mesas de som (analógicas/digitais), microfones (dinâmicos, condensadores, ribbon), processadores (compressores, gates, EQ, reverb), amplificadores, caixas de som (PA, monitores, subwoofers), DI boxes, snakes/multicabos, crossovers, analisadores de espectro.

CONCEITOS TÉCNICOS para visualizar:
  Signal flow (caminho do sinal), gain staging, frequências e espectro, polar patterns de microfones, impedância, phantom power, feedback, delay de alinhamento, SPL, routing, bus/aux/group.

COMO REPRESENTAR VISUALMENTE:
  - Signal flow → diagrama de blocos com setas mostrando o caminho do sinal
  - Frequências → espectro colorido (graves=vermelho, médios=amarelo, agudos=azul)
  - Equipamentos → ilustração detalhada mostrando controles e conexões
  - Polar patterns → diagrama circular com área de captação
  - Gain staging → medidores VU/LED com zonas verde/amarelo/vermelho

PALETA: azul profundo #1a3a5c, cyan #00d4ff, âmbar #ff9500, branco quente #fff5e6.
ESTILO: Técnico mas acessível, como um manual ilustrado premium.`,

  luz: `ÁREA TÉCNICA: Lighting design e iluminação profissional para shows e eventos.

EQUIPAMENTOS-CHAVE para identificar:
  Moving heads (spot, wash, beam, hybrid), PARs LED, fresnels, elipsoidais, followspots, strobes, mesas de luz (MA, grandMA, Avolites, ChamSys), dimmer packs, splitters DMX, fog/haze machines.

CONCEITOS TÉCNICOS para visualizar:
  DMX 512 (universos, canais, endereçamento), temperatura de cor (Kelvin), CRI/TLCI, beam angle vs field angle, gobo, prism, pan/tilt, RGB vs CMY, artnet/sACN, timing de efeitos, plot de iluminação.

COMO REPRESENTAR VISUALMENTE:
  - DMX → diagrama de daisy-chain com universos e canais
  - Temperatura de cor → gradiente de kelvin (2700K quente → 6500K frio)
  - Beam angles → cones de luz com ângulos demarcados
  - Plot de iluminação → vista aérea do palco com posições de refletores
  - Efeitos → sequência temporal de estados de luz

PALETA: âmbar #ff9500, magenta #ff00aa, azul #0066ff, roxo #7700ff, dourado #ffd700.
ESTILO: Dramático com feixes de luz vibrantes, técnico e impactante.`,

  producao: `ÁREA TÉCNICA: Produção e planejamento de eventos ao vivo.

CONCEITOS para identificar:
  Pré-produção, produção, pós-produção, rider técnico, mapa de palco (stage plot), cronograma, checklist, budget, planilha de fornecedores, contrato, briefing, debriefing.

COMO REPRESENTAR VISUALMENTE:
  - Timeline → linha do tempo com marcos e fases
  - Organograma → hierarquia da equipe técnica
  - Checklist → lista visual com ícones de status
  - Budget → gráfico de distribuição de recursos
  - Stage plot → planta baixa ilustrada do palco

PALETA: verde esmeralda #00a86b, dourado #c9a96e, azul corporativo #2c5282.
ESTILO: Organizado, profissional, como material de gestão de projetos.`,

  dj: `ÁREA TÉCNICA: DJing, mixagem e performance musical.

EQUIPAMENTOS para identificar:
  CDJs, controllers, toca-discos, mixer DJ, fones de monitoração, software (Rekordbox, Serato, Traktor).

CONCEITOS TÉCNICOS:
  BPM, beatmatching, phrase matching, harmonic mixing (Camelot wheel), EQ mixing (low/mid/high), crossfader, cue points, loops, estrutura musical (intro-build-drop-breakdown).

COMO REPRESENTAR:
  - Beatgrid → waveform com batidas alinhadas
  - Camelot wheel → círculo cromático de tonalidades
  - EQ mixing → 3 faixas de frequência com controles

PALETA: roxo #7c3aed, neon pink #ff0080, azul elétrico #0099ff, violeta #8b00ff.
ESTILO: Vibrante, energético, como visual de festival.`,

  vj: `ÁREA TÉCNICA: VJing, arte visual e projeção mapeada.

CONCEITOS: layers de composição, mapeamento de superfícies, resolução, aspect ratio, blend modes, feeds de vídeo, media servers.

COMO REPRESENTAR:
  - Layers → camadas empilhadas com transparência
  - Mapeamento → projeção em superfícies 3D
  - Blend modes → exemplos visuais de mistura

PALETA: multicolorido, gradientes vibrantes, neon.
ESTILO: Artístico, psicodélico, high-tech.`,

  roadie: `ÁREA TÉCNICA: Técnicas de palco, montagem e roadie profissional.

EQUIPAMENTOS: treliças (truss), motores de elevação, cases, multicabos, stage boxes, ferramentas.

CONCEITOS: rigging (pontos de carga, WLL, ângulos), stage plot, patch panel, cable management, segurança de palco, ground support vs fly system.

COMO REPRESENTAR:
  - Rigging → diagrama de forças e pontos de ancoragem
  - Stage plot → planta baixa com posições de equipamentos
  - Cable management → organização de cabos com cores e rotas

PALETA: cinza aço #708090, laranja segurança #ff6600, amarelo #ffd700.
ESTILO: Industrial, técnico, segurança em primeiro plano.`,

  marketing: `ÁREA TÉCNICA: Marketing digital para indústria de eventos.

CONCEITOS: funil de conversão, métricas (CTR, CAC, LTV), automação, segmentação, conteúdo, SEO, redes sociais.

COMO REPRESENTAR:
  - Funil → stages de conversão com percentuais visuais
  - Dashboard → layout de métricas com gráficos
  - Jornada do cliente → mapa visual com touchpoints

PALETA: coral #ff6f61, branco, azul moderno #4a90d9.
ESTILO: Clean, contemporâneo, data-driven.`,

  efeitos: `ÁREA TÉCNICA: Efeitos especiais para eventos ao vivo.

EQUIPAMENTOS: máquinas de CO2, confete, gerbers, sparklers (máquinas de faísca fria), laser, fog, haze, pyro controllers.

CONCEITOS: timing de disparo, zonas de segurança, sincronização com música, sequências DMX, distâncias mínimas.

COMO REPRESENTAR:
  - Zonas de segurança → área demarcada com raios de distância
  - Timing → timeline sincronizada com música
  - Sequência → ordem de disparo visual

PALETA: vermelho fogo #ff3300, laranja #ff8800, dourado #ffd700.
ESTILO: Dramático, impactante, com ênfase em segurança.`,

  outros: `ÁREA: Tópico multidisciplinar da indústria de eventos.
Adapte a análise técnica ao conteúdo específico da aula.
Identifique os equipamentos, conceitos e processos presentes no texto.
PALETA: azul aço #4682b4, teal #008080, branco #ffffff.
ESTILO: Profissional e versátil.`,
};


// ══════════════════════════════════════════════════════════════
// PROMPT MASTER v2 — PROFESSOR TÉCNICO ANALÍTICO
// ══════════════════════════════════════════════════════════════

function buildImageScriptPrompt(titulo: string, conteudo: string, categoria: CourseCategory): string {
  const visual = VISUAL_DIRECTION[categoria];

  return `Você é um PROFESSOR TÉCNICO SÊNIOR com 20+ anos de experiência na área de eventos ao vivo.

Sua especialidade é ANALISAR conteúdo técnico e criar MATERIAIS VISUAIS DIDÁTICOS que ajudam alunos a entender conceitos complexos através de imagens.

Você age em 3 etapas:
  1. ANALISA o texto como um especialista — identificando equipamentos, técnicas, processos e termos técnicos
  2. DECIDE o tipo ideal de visualização para cada conceito
  3. CRIA prompts de imagem que representam TECNICAMENTE o que o texto ensina

${visual}

═══════════════════════════════════════════════════════════
ETAPA 1 — ANÁLISE TÉCNICA DO CONTEÚDO
═══════════════════════════════════════════════════════════

Antes de criar as cenas, faça uma análise profunda:

No campo "analise", identifique:
- "tipo_conteudo": "teorico" (conceitos, definições) | "pratico" (procedimentos, como fazer) | "misto"
- "complexidade": "basico" | "intermediario" | "avancado"
- "equipamentos_mencionados": TODOS os equipamentos/ferramentas citados no texto
- "tecnicas_mencionadas": TODAS as técnicas ou métodos mencionados
- "processos_mencionados": TODOS os fluxos ou procedimentos descritos
- "termos_tecnicos": TODOS os jargões e termos técnicos que um iniciante não entenderia
- "contexto_aplicacao": Onde na vida real este conhecimento é aplicado (1-2 frases)

Esta análise GUIA as decisões sobre quais visualizações criar.

═══════════════════════════════════════════════════════════
ETAPA 2 — TIPOS DE VISUALIZAÇÃO
═══════════════════════════════════════════════════════════

Para cada conceito identificado, escolha o TIPO DE IMAGEM mais eficaz:

"diagrama_tecnico" → QUANDO: signal flow, circuito, conexões entre equipamentos
  Exemplo: "como o sinal vai do microfone até a caixa de som" → diagrama de blocos com setas

"equipamento_detalhe" → QUANDO: o texto descreve um equipamento específico e suas funções
  Exemplo: "a mesa de som tem canais, faders, EQ..." → close-up ilustrado da mesa com destaques

"cenario_pratico" → QUANDO: o texto descreve uma situação real de trabalho
  Exemplo: "na montagem do palco, primeiro posicione..." → ilustração do cenário completo

"infografico_processo" → QUANDO: há uma sequência de etapas ou workflow
  Exemplo: "primeiro conecte o mic, depois ajuste o gain..." → fluxo visual etapa por etapa

"comparativo_visual" → QUANDO: o texto compara técnicas, equipamentos ou abordagens
  Exemplo: "microfone dinâmico vs condensador" → split visual lado a lado

"mapa_conceitual" → QUANDO: há relações entre múltiplos conceitos
  Exemplo: "frequências se dividem em graves, médios e agudos..." → mapa hierárquico

"esquema_funcional" → QUANDO: o texto explica COMO algo funciona internamente
  Exemplo: "o compressor monitora o nível e reduz o volume quando..." → diagrama funcional

"panorama_contexto" → QUANDO: é importante entender o ambiente onde a técnica se aplica
  Exemplo: "em um show ao ar livre, a acústica..." → vista panorâmica do ambiente

"alerta_seguranca" → QUANDO: o texto menciona riscos, precauções ou segurança
  Exemplo: "nunca exceda a carga máxima do truss..." → cenário com zona de perigo demarcada

"resumo_visual" → QUANDO: na última cena, para sintetizar os conceitos-chave
  Exemplo: composição com os elementos principais da aula reunidos

═══════════════════════════════════════════════════════════
ETAPA 3 — CONSTRUÇÃO DAS CENAS
═══════════════════════════════════════════════════════════

Para CADA cena:

1. "conceito_tecnico": Qual conceito/tópico técnico esta cena explica (1 frase precisa)

2. "por_que_visual": Por que uma IMAGEM ajuda a entender este conceito (1 frase)
   Exemplo: "O signal flow é abstrato — um diagrama visual mostra o caminho do sinal de forma concreta"

3. "elementos_tecnicos": Lista de 3-6 elementos técnicos VISÍVEIS na imagem
   Exemplo: ["mesa de som 32 canais", "faders de canal", "knobs de EQ", "medidores VU", "aux sends"]
   SEJA ESPECÍFICO — não use termos genéricos como "equipamento" ou "itens"

4. "narracao": EXTRAIA do conteúdo ORIGINAL da aula.
   ★ REGRA CRÍTICA: NÃO invente narração nova.
   - Pegue o trecho do conteúdo que corresponde ao conceito desta cena
   - Adapte minimamente para fluir como fala natural em PT-BR
   - O CONTEÚDO e INFORMAÇÕES devem ser 100% do texto original
   - Cada cena narra um trecho diferente — juntas, cobrem TODO o conteúdo
   - NÃO resuma nem simplifique

5. "explicacao_texto": 2-4 frases complementares exibidas na tela.
   - Como um CARD DE ESTUDO que o aluno pode ler rapidamente
   - Linguagem acessível, direta, em PT-BR
   - Foque no "por quê" e "para quê" do conceito

6. "destaques": 2-4 pontos-chave como bullets (máximo 8 palavras cada)
   Exemplo: ["EQ corta frequências problemáticas", "Gain antes do fader", "PFL para escuta solo"]

7. "dica_profissional": Uma dica PRÁTICA de quem trabalha na área (1 frase)
   Exemplo: "No mercado, técnicos experientes sempre fazem sound check com a música mais complexa do set list"

8. "prompt_imagem": Prompt em INGLÊS para gpt-image-1-mini.

   ★ ESTRUTURA DO PROMPT (seguir nesta ordem):

   a) ESTILO BASE (sempre começar com):
      "Technical educational illustration, modern flat design, clean vector style, professional color palette"

   b) TIPO DE VISUALIZAÇÃO:
      - Para diagramas: "technical block diagram showing [flow/connections], with clear directional arrows"
      - Para equipamento: "detailed illustration of [equipment], showing [specific parts and controls]"
      - Para cenário: "wide scene illustration of [environment] with [specific elements in context]"
      - Para infográfico: "step-by-step infographic showing [process], numbered stages with visual flow"
      - Para comparativo: "split comparison illustration, left side showing [A], right side showing [B]"
      - Para mapa conceitual: "concept map illustration with [central concept] branching to [sub-concepts]"

   c) ELEMENTOS ESPECÍFICOS (seja cirurgicamente preciso):
      - NOMEIE cada objeto: "a large 32-channel mixing console" (não "some equipment")
      - ESPECIFIQUE cores: "cyan waveform on dark blue background"
      - POSICIONE: "in the center", "top-left corner", "flowing left to right"
      - QUANTIFIQUE: "three microphones", "five stages", "two speakers"

   d) PALETA E ATMOSFERA:
      "Color palette: [cores da categoria]. [Atmosfera: professional/energetic/dramatic]"

   e) RESTRIÇÕES (sempre terminar com):
      "No text, no letters, no numbers, no labels, no writing, no words, no human figures, no photorealism. Clean educational illustration with clear visual hierarchy."

9. "duracao": Baseado na narração (~150 palavras/minuto)
   duracao = (palavras na narracao / 150) * 60 + 2
   Mínimo 8, máximo 45 segundos

═══════════════════════════════════════════════════════════
REGRAS DE COBERTURA
═══════════════════════════════════════════════════════════

- Crie QUANTAS CENAS forem necessárias para cobrir TODO o conteúdo
- Se o texto menciona 6 equipamentos, crie 6+ cenas (uma por equipamento)
- Mínimo 5 cenas, sem máximo fixo
- A PRIMEIRA cena deve ser tipo "panorama_contexto" ou "cenario_pratico" (contextualização)
- A ÚLTIMA cena deve ser tipo "resumo_visual" (síntese)
- O meio deve ter o tipo IDEAL para cada conceito (baseado na análise técnica)

═══════════════════════════════════════════════════════════
CONTEÚDO DA AULA
═══════════════════════════════════════════════════════════

Categoria: ${categoria}
Título: ${titulo}

Conteúdo:
${conteudo}

═══════════════════════════════════════════════════════════
RESPOSTA — JSON puro, sem markdown
═══════════════════════════════════════════════════════════

{
  "metadata": {
    "titulo_aula": "...",
    "categoria": "${categoria}",
    "total_cenas": N,
    "duracao_total": N,
    "abordagem_didatica": "Descrição de como o professor técnico decidiu apresentar o conteúdo",
    "conceitos_identificados": ["conceito1", "conceito2", ...],
    "nivel_tecnico": "basico|intermediario|avancado"
  },
  "analise": {
    "tipo_conteudo": "teorico|pratico|misto",
    "complexidade": "basico|intermediario|avancado",
    "equipamentos_mencionados": ["..."],
    "tecnicas_mencionadas": ["..."],
    "processos_mencionados": ["..."],
    "termos_tecnicos": ["..."],
    "contexto_aplicacao": "..."
  },
  "visual_style": {
    "estilo": "...",
    "paleta": "4-5 cores HEX",
    "atmosfera": "...",
    "estilo_tecnico": "Direção específica para elementos técnicos nas imagens"
  },
  "cenas": [...]
}`;
}


// ══════════════════════════════════════════════════════════════
// FUNÇÕES DE GERAÇÃO
// ══════════════════════════════════════════════════════════════

/**
 * Passo 1: GPT-4o-mini analisa o conteúdo como professor técnico e gera o roteiro
 */
export async function generateImageScript(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory
): Promise<ImageScript> {
  const prompt = buildImageScriptPrompt(titulo, stripHtml(conteudo), categoria);

  console.log(`[ImageEngine v2] GPT-4o-mini analyzing content for "${titulo}"...`);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `Você é um professor técnico sênior especializado em criar materiais visuais didáticos para a área de eventos ao vivo. Você analisa conteúdo como um especialista e cria roteiros de imagens educativas.

Responda APENAS com JSON puro. Sem markdown, sem explicações, sem comentários.`,
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    response_format: { type: "json_object" },
    max_tokens: 16384,
  });

  const text = response.choices[0]?.message?.content || "{}";
  const script = JSON.parse(text) as ImageScript;

  // Log da análise técnica
  console.log(`[ImageEngine v2] ── Análise Técnica ──`);
  console.log(`  Tipo: ${script.analise?.tipo_conteudo} | Complexidade: ${script.analise?.complexidade}`);
  console.log(`  Equipamentos: ${script.analise?.equipamentos_mencionados?.join(", ") || "nenhum"}`);
  console.log(`  Técnicas: ${script.analise?.tecnicas_mencionadas?.join(", ") || "nenhuma"}`);
  console.log(`  Termos: ${script.analise?.termos_tecnicos?.join(", ") || "nenhum"}`);
  console.log(`[ImageEngine v2] ── ${script.cenas?.length || 0} cenas ──`);
  for (const c of script.cenas || []) {
    console.log(`  [${c.numero}] ${c.tipo} → ${c.conceito_tecnico || c.titulo}`);
  }

  return script;
}

/**
 * Passo 2: gpt-image-1-mini gera as imagens didáticas
 *
 * Parâmetros (doc oficial):
 *   model: "gpt-image-1-mini"
 *   size: "1024x1024" | "1024x1536" | "1536x1024"
 *   quality: "low" | "medium" | "high"
 *   n: 1 (suporta n>1)
 *   response_format: "b64_json" | "url"
 *
 * Pricing (medium, landscape 1536×1024):
 *   $0.015 por imagem
 */
export async function generateSceneImages(
  cenas: ImageScene[],
  quality: ImageQuality = "medium"
): Promise<GeneratedImageScene[]> {
  const results: GeneratedImageScene[] = [];
  const MAX_RETRIES = 3;
  const DELAY_MS = 1000;

  for (let i = 0; i < cenas.length; i++) {
    const cena = cenas[i];
    if (i > 0) await sleep(DELAY_MS);

    const size = getImageSize(cena.tipo);

    let success = false;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`[ImageEngine v2] gpt-image-1-mini scene ${cena.numero}/${cenas.length} [${cena.tipo}] (attempt ${attempt})...`);

        const response = await openai.images.generate({
          model: "gpt-image-1-mini",
          prompt: cena.prompt_imagem,
          n: 1,
          size: size,
          quality: quality,
        } as any);

        // gpt-image-1-mini retorna b64_json por padrão
        const imageData = response.data?.[0];
        const b64 = imageData?.b64_json;
        const url = imageData?.url;

        if (b64 && b64.length > 0) {
          console.log(`[ImageEngine v2] ✓ Image ${cena.numero}: ${(b64.length / 1024).toFixed(0)}KB`);
          results.push({ ...cena, image_b64: b64 });
          success = true;
          break;
        } else if (url) {
          console.log(`[ImageEngine v2] ✓ Image ${cena.numero}: URL received`);
          results.push({ ...cena, image_url: url });
          success = true;
          break;
        } else {
          console.warn(`[ImageEngine v2] Image ${cena.numero}: empty (attempt ${attempt})`);
        }
      } catch (error: any) {
        console.error(`[ImageEngine v2] Error scene ${cena.numero} (${attempt}):`, error?.message);

        if (error?.status === 429 || error?.message?.includes("rate_limit")) {
          console.warn(`[ImageEngine v2] Rate limit — waiting 15s...`);
          await sleep(15_000);
        } else if (error?.message?.includes("content_policy") || error?.message?.includes("safety")) {
          console.warn(`[ImageEngine v2] Content policy — simplifying prompt`);
          cena.prompt_imagem = simplifyPrompt(cena.prompt_imagem);
          await sleep(2_000);
        } else if (attempt < MAX_RETRIES) {
          await sleep(3_000);
        }
      }
    }

    if (!success) {
      console.warn(`[ImageEngine v2] ✗ Image ${cena.numero}: all attempts failed`);
      results.push({ ...cena });
    }
  }

  const ok = results.filter(r => r.image_b64 || r.image_url).length;
  console.log(`[ImageEngine v2] Images: ${ok}/${cenas.length} generated`);
  return results;
}


// ══════════════════════════════════════════════════════════════
// PIPELINE COMPLETO
// ══════════════════════════════════════════════════════════════

export interface ImageResult {
  script: ImageScript;
  scenes: GeneratedImageScene[];
  quality: ImageQuality;
  cost_estimate_usd: number;
}

export async function generateLessonImages(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory,
  quality: ImageQuality = "medium"
): Promise<ImageResult> {
  console.log(`[ImageEngine v2] ═══ Starting pipeline for "${titulo}" (quality: ${quality}) ═══`);

  // Passo 1: GPT-4o-mini analisa e cria roteiro
  const script = await generateImageScript(titulo, conteudo, categoria);

  // Passo 2: gpt-image-1-mini gera imagens
  const withImages = await generateSceneImages(script.cenas, quality);

  // Custo estimado (pricing oficial, landscape 1536x1024):
  //   gpt-image-1-mini: low=$0.006 | medium=$0.015 | high=$0.052
  //   GPT-4o-mini: ~$0.002 por roteiro (input+output)
  const pricePerImage: Record<ImageQuality, number> = {
    low: 0.006,
    medium: 0.015,
    high: 0.052,
  };
  const imgCost = script.cenas.length * pricePerImage[quality];
  const gptCost = 0.002;
  const cost_estimate_usd = gptCost + imgCost;

  console.log(`[ImageEngine v2] ═══ Pipeline complete! ${script.cenas.length} scenes, ~$${cost_estimate_usd.toFixed(3)} ═══`);

  return {
    script,
    scenes: withImages,
    quality,
    cost_estimate_usd: Math.round(cost_estimate_usd * 1000) / 1000,
  };
}


// ── Helpers ──────────────────────────────────────────────────

/**
 * Tamanhos suportados pelo gpt-image-1-mini:
 *   1024×1024  (quadrado)
 *   1024×1536  (retrato/vertical)
 *   1536×1024  (paisagem/horizontal) ← ideal para slideshow
 */
function getImageSize(tipo: ImageType): "1024x1024" | "1536x1024" | "1024x1536" {
  switch (tipo) {
    // Horizontal (paisagem) — ideal para slideshow 16:9
    case "diagrama_tecnico":
    case "infografico_processo":
    case "comparativo_visual":
    case "panorama_contexto":
    case "cenario_pratico":
      return "1536x1024";

    // Quadrado — bom para foco em um elemento
    case "equipamento_detalhe":
    case "esquema_funcional":
    case "alerta_seguranca":
    case "resumo_visual":
      return "1024x1024";

    // Horizontal — para mapas conceituais (mais largura)
    case "mapa_conceitual":
      return "1536x1024";

    default:
      return "1536x1024";
  }
}

function simplifyPrompt(prompt: string): string {
  return prompt
    .replace(/fire|explosion|pyrotechnic|weapon|gun|blade|knife|bomb/gi, "special effect")
    .replace(/blood|gore|violence|death|kill/gi, "")
    .replace(/naked|nude|sexy/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripHtml(html: string): string {
  return html
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<h[1-6][^>]*>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, ".\n\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
