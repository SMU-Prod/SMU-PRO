/**
 * SMU PRO — Animation Engine v5
 * Pipeline: Gemini 2.5 Flash → Imagen 4 → Veo 3 → Edge TTS
 *
 * Gera VIDEOAULAS ANIMADAS de alta qualidade a partir do conteúdo das aulas.
 *
 * Fundamentação: Os 12 Princípios de Animação (Frank Thomas & Ollie Johnston)
 * aplicados a motion graphics educativos para garantir animações com
 * personalidade, clareza e apelo visual profissional.
 *
 * Pipeline:
 *   1. Gemini 2.5 Flash analisa o conteúdo e cria roteiro + VISUAL BIBLE
 *   2. Imagen 4 gera key-frames (cartoon 2D) com estilo consistente
 *   3. Veo 3 anima cada key-frame (image-to-video, 1080p)
 *   4. Edge TTS gera narração natural em PT-BR
 */

import { GoogleGenAI } from "@google/genai";
import type { CourseCategory } from "@/types/database";

// ── Client ──────────────────────────────────────────────────
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY! });

// ── Types ───────────────────────────────────────────────────
export type AnimationQuality = "standard" | "premium";

export interface AnimationScene {
  numero: number;
  tipo: "abertura" | "conceito" | "detalhe" | "exemplo_pratico" | "alerta" | "comparacao" | "ferramenta" | "processo" | "resumo" | "encerramento";
  titulo: string;
  narracao: string;
  intencao_pedagogica: string;
  metafora_visual: string;
  prompt_imagen: string;
  prompt_veo: string;
  duracao: number;
  elementos_texto: {
    titulo_overlay?: string;
    subtitulo_overlay?: string;
    dados_overlay?: string[];
    dica_pratica?: string;
  };
}

export interface VisualBible {
  estilo: string;          // ex: "2D cartoon with thick outlines, cel-shaded"
  cenario_base: string;    // ex: "Warm-lit cartoon audio studio with wooden panels and colorful equipment"
  paleta: string;          // ex: "Deep blue #1a3a5c, cyan #00d4ff, amber #ff9500, warm white #fff5e6"
  iluminacao: string;      // ex: "Warm key light from upper left, soft blue fill, orange rim highlights"
  estilo_objetos: string;  // ex: "Rounded friendly shapes, slight exaggeration, subtle glow on active elements"
  atmosfera: string;       // ex: "Cozy, inviting, professional but approachable"
}

export interface AnimationScript {
  metadata: {
    titulo_aula: string;
    categoria: CourseCategory;
    total_cenas: number;
    duracao_total: number;
    abordagem_didatica: string;
    conceitos_identificados: string[];
    nivel_tecnico: string;
  };
  visual_bible: VisualBible;
  cenas: AnimationScene[];
}

export interface GeneratedScene extends AnimationScene {
  image_bytes?: string;
  image_url?: string;
  video_bytes?: Buffer;
  video_url?: string;
  narration_url?: string;
}

// ══════════════════════════════════════════════════════════════
// DIREÇÃO VISUAL POR CATEGORIA
// ══════════════════════════════════════════════════════════════

const VISUAL_DIRECTION: Record<CourseCategory, string> = {
  som: `ÁREA: Engenharia de som e áudio profissional para eventos.
REFERÊNCIAS VISUAIS: ondas sonoras, espectros de frequência, signal flow, equalização, caixas de som, microfones, mesas de som.
METÁFORAS ÚTEIS: "som como água fluindo por canos" (signal flow), "EQ como esculpir argila" (moldar frequências), "compressor como controle de volume automático".
CENÁRIO: estúdio de áudio estilizado com mesa de som, cabos, caixas. Cores: azul profundo, cyan, índigo, com destaques amarelo/branco. Cenário COLORIDO e VIVO como cartoon.`,

  luz: `ÁREA: Lighting design e iluminação para shows e eventos.
REFERÊNCIAS VISUAIS: feixes de luz, espectro de cores, DMX universos, moving heads, gobos, temperatura de cor, plots de iluminação.
METÁFORAS ÚTEIS: "DMX como linguagem entre mesa e refletores", "temperatura de cor como humor da cena", "layers de luz como camadas de pintura".
CENÁRIO: palco de show estilizado com treliças, refletores, feixes de luz. Cores: âmbar, magenta, dourado, roxo. Cenário COLORIDO e VIVO como cartoon.`,

  producao: `ÁREA: Produção e planejamento de eventos.
REFERÊNCIAS VISUAIS: timelines, organogramas, plantas baixas, checklists, fluxogramas de logística, budgets.
METÁFORAS ÚTEIS: "produção como maestro de orquestra", "timeline como trilhos de trem", "checklist como rede de segurança".
CENÁRIO: escritório de produção estilizado com quadros, timeline na parede, maquetes. Cores: verde esmeralda, dourado, azul corporativo. Cenário COLORIDO como cartoon.`,

  dj: `ÁREA: DJing, mixagem e performance musical.
REFERÊNCIAS VISUAIS: waveforms, beatgrids, Camelot wheel, EQ de mixer, crossfader, BPM, estrutura musical (intro-build-drop).
METÁFORAS ÚTEIS: "beatmatching como sincronizar relógios", "harmonic mixing como combinar cores", "EQ do mixer como abrir/fechar portas".
CENÁRIO: cabine de DJ estilizada com CDJs, mixer, fones, luzes coloridas. Cores: roxo, neon pink, violeta, azul elétrico. Cenário VIBRANTE como cartoon.`,

  vj: `ÁREA: VJing, arte visual e projeção mapeada.
REFERÊNCIAS VISUAIS: layers de composição, mapeamento de superfícies, resolução e aspect ratio, blend modes, feeds de vídeo.
METÁFORAS ÚTEIS: "layers como folhas de acetato empilhadas", "mapeamento como vestir uma roupa sob medida no prédio", "blend modes como misturar tintas".
CENÁRIO: setup de VJ estilizado com telas, projetores, laptops com visuais. Cores: multicolorido vibrante, gradientes, neon. Cenário PSICODÉLICO como cartoon.`,

  roadie: `ÁREA: Técnicas de palco, montagem e roadie profissional.
REFERÊNCIAS VISUAIS: stage plots, rigging (pontos de carga, truss), cabeamento organizado, cases de transporte, ferramentas.
METÁFORAS ÚTEIS: "rigging como engenharia de pontes em miniatura", "stage plot como mapa do tesouro", "cabeamento como sistema circulatório do show".
CENÁRIO: bastidores de palco estilizados com treliças, cases, cabos, ferramentas. Cores: cinza aço, laranja segurança, amarelo. Cenário INDUSTRIAL estilizado como cartoon.`,

  marketing: `ÁREA: Marketing digital para indústria de eventos.
REFERÊNCIAS VISUAIS: funis de conversão, dashboards de métricas, redes sociais, fluxos de automação, calendários de conteúdo.
METÁFORAS ÚTEIS: "funil como peneira progressiva", "engajamento como conversa numa festa", "conversão como pedir alguém em namoro".
CENÁRIO: escritório de marketing moderno estilizado com telas, gráficos, redes sociais. Cores: coral, branco, azul moderno. Cenário CLEAN como cartoon.`,

  efeitos: `ÁREA: Efeitos especiais para eventos ao vivo (pirotecnia, CO2, confete, laser, fogo).
REFERÊNCIAS VISUAIS: timing de disparo, zonas de segurança, sincronização com música, sequências de efeitos.
METÁFORAS ÚTEIS: "timing como ritmo de bateria", "zona de segurança como área de respeito", "sequência como coreografia".
CENÁRIO: área de efeitos especiais estilizada com máquinas de CO2, pirotecnia, lasers. Cores: vermelho fogo, laranja, dourado. Cenário DRAMÁTICO como cartoon.`,

  outros: `ÁREA: Tópico multidisciplinar da indústria de eventos.
Adapte a direção visual ao conteúdo específico da aula. Use metáforas relevantes ao tema.
CENÁRIO: ambiente de evento genérico estilizado. Cores: azul aço, teal, branco. Cenário COLORIDO como cartoon.`,
};


// ══════════════════════════════════════════════════════════════
// OS 12 PRINCÍPIOS DE ANIMAÇÃO — REFERÊNCIA PARA PROMPT VEO
// ══════════════════════════════════════════════════════════════

const ANIMATION_PRINCIPLES = `
OS 12 PRINCÍPIOS DE ANIMAÇÃO (Frank Thomas & Ollie Johnston) aplicados ao prompt de vídeo:

1. SQUASH & STRETCH: Elementos devem ter peso e elasticidade. Ao aparecer ou transformar, o objeto "espreme e estica" levemente, dando vida.
2. ANTICIPATION: Antes de um movimento principal, há um pequeno movimento preparatório na direção oposta.
3. STAGING: A composição deve guiar o olhar do espectador para O ELEMENTO MAIS IMPORTANTE da cena.
4. FOLLOW THROUGH: Quando um objeto para, partes dele continuam em movimento brevemente (inércia).
5. SLOW IN / SLOW OUT (EASE): Movimentos começam devagar, aceleram, e desaceleram ao parar. Nunca movimento linear robótico.
6. ARCS: Movimentos naturais seguem arcos, não linhas retas.
7. SECONDARY ACTION: Enquanto a ação principal acontece, elementos secundários reagem sutilmente (partículas, brilhos, ondulações).
8. TIMING: O número de frames define a sensação. Poucos frames = rápido/energético. Muitos = lento/suave/elegante.
9. EXAGGERATION: Exagere levemente os movimentos para torná-los mais claros e expressivos (sem distorcer a realidade).
10. APPEAL: Os visuais devem ser atraentes, com formas agradáveis e harmoniosas.

USE estes princípios ao descrever o movimento no prompt_veo. Não cite os nomes dos princípios no prompt — apenas APLIQUE-OS na descrição do movimento.
`;


// ══════════════════════════════════════════════════════════════
// PROMPT MASTER v5 — ANIMAÇÃO DIDÁTICA DE EXCELÊNCIA
// ══════════════════════════════════════════════════════════════

function buildScriptPrompt(titulo: string, conteudo: string, categoria: CourseCategory): string {
  const visual = VISUAL_DIRECTION[categoria];

  return `Você é um DIRETOR DE ANIMAÇÃO EDUCATIVA premiado que cria videoaulas no estilo de séries animadas como Tuttle Twins, Gravity Falls e The Magic School Bus.

${visual}

${ANIMATION_PRINCIPLES}

═══════════════════════════════════════════════════════════
TAREFA — 2 ETAPAS
═══════════════════════════════════════════════════════════

ETAPA 1: Crie um "VISUAL BIBLE" — uma bíblia visual que define o estilo ÚNICO e CONSISTENTE para TODA a videoaula. Todas as cenas DEVEM seguir este estilo à risca.

ETAPA 2: Crie QUANTAS CENAS forem necessárias para cobrir TODO o conteúdo da aula (mínimo 5, sem máximo fixo — depende do tamanho do conteúdo). Cada prompt_imagen COMEÇA com a descrição do visual_bible.

═══════════════════════════════════════════════════════════
ETAPA 1 — VISUAL BIBLE (consistência entre cenas)
═══════════════════════════════════════════════════════════

Defina no campo "visual_bible":

- "estilo": Estilo artístico EXATO (ex: "2D cartoon with thick dark outlines, cel-shaded coloring, soft gradients within shapes, style of Gravity Falls meets Kurzgesagt")
- "cenario_base": O cenário recorrente que aparece de fundo em TODAS as cenas (ex: "A warm cozy cartoon audio studio with wooden acoustic panels, colorful LED strips on the ceiling, a large mixing console in the center, shelves of gear in the background")
- "paleta": Exatamente 4-5 cores HEX que serão usadas em TODAS as cenas (ex: "Primary: #1a3a5c deep blue, Secondary: #00d4ff cyan, Accent: #ff9500 amber, Highlight: #fff5e6 warm white, Background: #2d1b4e deep purple")
- "iluminacao": Direção e tipo da luz (ex: "Warm golden key light from upper-left, soft cool blue fill from right, subtle orange rim light on foreground objects")
- "estilo_objetos": Como os objetos são desenhados (ex: "Rounded friendly shapes with slight exaggeration, thick 2px dark outlines, soft inner shadows, subtle specular highlights, objects feel alive with personality")
- "atmosfera": Sentimento geral (ex: "Professional but inviting, like a cartoon mentor's workshop — cozy and exciting at the same time")

★ REGRA CRÍTICA: O visual_bible garante que se você colocar as cenas lado a lado, PARECEM DO MESMO EPISÓDIO de uma série animada. Mesmas cores, mesmo estilo de traço, mesmo cenário de fundo, mesma iluminação.

═══════════════════════════════════════════════════════════
ETAPA 2 — CENAS
═══════════════════════════════════════════════════════════

Para CADA CENA, gere:

1. "tipo": abertura | conceito | detalhe | exemplo_pratico | alerta | comparacao | ferramenta | processo | resumo | encerramento

2. "intencao_pedagogica": QUAL CONCEITO esta cena ensina e POR QUÊ (1 frase)

3. "metafora_visual": QUAL REPRESENTAÇÃO VISUAL explica esse conceito (1 frase)

4. "narracao": Trecho do conteúdo ORIGINAL da aula que esta cena ilustra.
   ★ REGRA CRÍTICA: NÃO invente narração nova. EXTRAIA diretamente do texto da aula.
   - Pegue o trecho do conteúdo que corresponde ao conceito desta cena
   - Pode adaptar minimamente para fluir bem na fala (remover marcadores, ajustar pontuação)
   - Mas o CONTEÚDO e as INFORMAÇÕES devem ser 100% do texto original
   - Cada cena narra um trecho diferente — juntas, todas as cenas cobrem TODO o conteúdo da aula
   - NÃO resuma nem simplifique — use o texto completo dividido entre as cenas
   - PT-BR natural, como professor lendo o material

5. "prompt_imagen": Prompt em INGLÊS para gerar a KEY-FRAME (imagem estática).

   ★ ESTRUTURA OBRIGATÓRIA DO PROMPT (nesta ordem exata):

   PARTE 1 — ESTILO (copie do visual_bible):
   "[visual_bible.estilo], [visual_bible.iluminacao], color palette [visual_bible.paleta]"

   PARTE 2 — CENÁRIO (copie do visual_bible):
   "Scene set in [visual_bible.cenario_base]"

   PARTE 3 — COMPOSIÇÃO DA CENA (descreva com precisão cirúrgica):
   "In the foreground: [ELEMENTO PRINCIPAL — grande, nítido, centralizado, descrito com 10-15 palavras ESPECÍFICAS incluindo forma, cor, posição, tamanho]"
   "In the midground: [ELEMENTOS DE APOIO — 2-3 objetos com cores e posições definidas]"
   "In the background: [CENÁRIO DE FUNDO — consistente com cenario_base]"

   PARTE 4 — FECHAMENTO (sempre igual):
   "[visual_bible.estilo_objetos], [visual_bible.atmosfera], high quality digital illustration, clean composition, absolutely no text no letters no numbers no labels no annotations no writing no words"

   ★ REGRAS ANTI-ALUCINAÇÃO PARA IMAGENS:
   - SEJA EXTREMAMENTE ESPECÍFICO: descreva cor, forma, tamanho e posição de cada elemento
   - NÃO use termos vagos como "various items", "some objects", "equipment"
   - NOMEIE cada objeto: "a large cyan mixing console", "three orange cable coils"
   - Mantenha composição SIMPLES: 1 elemento principal + 2-3 de apoio. Menos é mais.
   - Cada cena deve ter UM PONTO FOCAL CLARO que o aluno identifica instantaneamente
   - TODOS os objetos devem pertencer ao MESMO UNIVERSO VISUAL do cenário

   A IMAGEM NUNCA DEVE TER:
   - Texto, letras, números, labels, writing (ZERO tolerância)
   - Pessoas, mãos, rostos, personagens humanos
   - Estilo fotorrealista, 3D render, ou hiper-detalhado
   - Fundo preto ou escuro sem cenário
   - Objetos desconexos do tema da aula

6. "prompt_veo": Prompt em INGLÊS para animar a key-frame em vídeo de 8 segundos.

   ★★★ REGRA #1 — FIDELIDADE À IMAGEM (ANTI-ALUCINAÇÃO) ★★★
   O vídeo DEVE ser uma ANIMAÇÃO SUAVE da imagem de referência.
   O prompt_veo DEVE começar com:
   "Animate this exact illustration with subtle motion. Maintain the exact same art style, colors, composition, and all visual elements from the reference image."

   O vídeo NÃO PODE:
   - Adicionar objetos que NÃO existem na imagem
   - Mudar cores, estilo ou composição
   - Transformar ou distorcer elementos existentes
   - Criar pessoas, rostos ou formas que não estavam na imagem

   ★ INSTRUÇÕES TÉCNICAS DE CÂMERA E MOVIMENTO ★

   Após o preâmbulo de fidelidade, especifique:

   A) TIPO DE CÂMERA (escolha 1 — todos são SUTIS):
      - "Very slow push-in" (câmera avança 5-10% em 8s)
      - "Very gentle pull-back" (câmera afasta 5-10% em 8s)
      - "Barely perceptible pan left-to-right" (movimento lateral mínimo)
      - "Subtle crane up" (sobe 5% em 8s)
      - "Static camera with micro-drift" (quase imperceptível)

   B) VELOCIDADE: "Extremely slow, gentle, smooth" — como um documentário elegante

   C) MOVIMENTO DO ASSUNTO (UM só, sutil):
      - Descreva UM ÚNICO movimento pequeno e natural
      - O movimento deve REFORÇAR o conceito pedagógico
      - Ex: "sound waves gently pulsing outward from the speaker cone"
      - Ex: "a single fader slowly sliding upward on the mixing console"
      - NUNCA movimentos dramáticos, rápidos ou transformativos

   D) SECONDARY ACTIONS (micro-detalhes):
      - "Subtle glow pulsing on active elements"
      - "Gentle light shimmer on surfaces"
      - "Soft shadow movement from the key light"
      - Máximo 2 secondary actions. Menos = melhor.

   E) FECHAMENTO (sempre):
      "Smooth continuous motion from start to end, no sudden changes, no morphing, no new elements appearing, maintain cartoon 2D illustration style throughout"

   FORMATO FINAL DO prompt_veo:
   "Animate this exact illustration with subtle motion. Maintain the exact same art style, colors, composition, and all visual elements from the reference image. [Tipo de câmera], [velocidade], [movimento do assunto], [secondary actions]. Smooth continuous motion from start to end, no sudden changes, no morphing, no new elements appearing, maintain cartoon 2D illustration style throughout."

   EXEMPLOS:
   - "Animate this exact illustration with subtle motion. Maintain the exact same art style, colors, composition, and all visual elements from the reference image. Very slow push-in toward the mixing console, extremely gentle pace, the channel fader lights pulse softly in sequence from left to right, subtle warm glow shifting on the wooden panels. Smooth continuous motion from start to end, no sudden changes, no morphing, no new elements appearing, maintain cartoon 2D illustration style throughout."
   - "Animate this exact illustration with subtle motion. Maintain the exact same art style, colors, composition, and all visual elements from the reference image. Static camera with micro-drift, barely perceptible movement, the spotlight beams slowly sweep in soft arcs across the stage floor, gentle dust particles floating in the beams. Smooth continuous motion from start to end, no sudden changes, no morphing, no new elements appearing, maintain cartoon 2D illustration style throughout."

7. "duracao": Calcule baseado no texto da narração. Regra: ~150 palavras por minuto (velocidade de fala natural).
   - Conte as palavras na narracao
   - duracao_segundos = (palavras / 150) * 60 + 2 (margem)
   - Arredonde para cima para o inteiro mais próximo
   - Mínimo 6, máximo 30 segundos

8. "elementos_texto": VAZIO { "titulo_overlay": "", "dados_overlay": [], "dica_pratica": "" }

─── FLUXO NARRATIVO ───
1. ABERTURA: Introdução contextual do tema
2. CONCEITOS: Cada conceito/equipamento/técnica com metáfora visual — UMA CENA POR CONCEITO
3. PRÁTICA: Aplicação real e exemplos
4. RESUMO: Conecta tudo

★ REGRA: Crie quantas cenas forem necessárias para cobrir TODO o conteúdo. Se a aula fala de 10 equipamentos, crie 10+ cenas. NÃO corte conteúdo. O número de cenas deve ser proporcional ao tamanho do conteúdo.

─── CONTEÚDO DA AULA ───

Categoria: ${categoria}
Título: ${titulo}

Conteúdo:
${conteudo}

─── RESPOSTA ───

JSON puro, sem markdown:
{
  "metadata": {
    "titulo_aula": "...",
    "categoria": "${categoria}",
    "total_cenas": N,
    "duracao_total": N,
    "abordagem_didatica": "...",
    "conceitos_identificados": ["..."],
    "nivel_tecnico": "iniciante|intermediario|avancado"
  },
  "visual_bible": {
    "estilo": "...",
    "cenario_base": "...",
    "paleta": "...",
    "iluminacao": "...",
    "estilo_objetos": "...",
    "atmosfera": "..."
  },
  "cenas": [...]
}`;
}


// ══════════════════════════════════════════════════════════════
// FUNÇÕES DE GERAÇÃO
// ══════════════════════════════════════════════════════════════

/**
 * Passo 1: Gemini 2.5 Pro gera o storyboard pedagógico
 * Usa o modelo Pro para melhor raciocínio sobre metáforas e didática
 */
export async function generateAnimationScript(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory
): Promise<AnimationScript> {
  const prompt = buildScriptPrompt(titulo, stripHtml(conteudo), categoria);

  console.log(`[Animation] Gemini generating storyboard for "${titulo}"...`);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      temperature: 0.75,
      topP: 0.9,
      responseMimeType: "application/json",
    },
  });

  const text = typeof response.text === "string" ? response.text : "";
  const clean = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  const script = JSON.parse(clean) as AnimationScript;

  console.log(`[Animation] Storyboard: ${script.cenas.length} scenes, approach: ${script.metadata.abordagem_didatica}`);
  for (const c of script.cenas) {
    console.log(`  Scene ${c.numero} [${c.tipo}]: ${c.intencao_pedagogica || c.titulo}`);
  }
  return script;
}

/**
 * Passo 2: Imagen 4 gera key-frames de alta qualidade
 */
export async function generateSceneImages(
  cenas: AnimationScene[]
): Promise<GeneratedScene[]> {
  const results: GeneratedScene[] = [];
  const MAX_RETRIES = 3;
  const DELAY_MS = 2500;

  for (let i = 0; i < cenas.length; i++) {
    const cena = cenas[i];
    if (i > 0) await sleep(DELAY_MS);

    let success = false;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`[Animation] Imagen scene ${cena.numero}/${cenas.length} (attempt ${attempt})...`);

        const response = await ai.models.generateImages({
          model: "imagen-4.0-generate-001",
          prompt: cena.prompt_imagen,
          config: {
            numberOfImages: 1,
            aspectRatio: "16:9",
          },
        });

        const imageBytes = response.generatedImages?.[0]?.image?.imageBytes;

        if (imageBytes && imageBytes.length > 0) {
          console.log(`[Animation] ✓ Image ${cena.numero}: ${(imageBytes.length / 1024).toFixed(0)}KB`);
          results.push({ ...cena, image_bytes: imageBytes });
          success = true;
          break;
        } else {
          console.warn(`[Animation] Image ${cena.numero}: empty (attempt ${attempt})`);
        }
      } catch (error: any) {
        console.error(`[Animation] Imagen error ${cena.numero} (${attempt}):`, error?.message);
        if (error?.message?.includes("429") || error?.message?.includes("RESOURCE_EXHAUSTED")) {
          await sleep(15_000);
        } else if (attempt < MAX_RETRIES) {
          await sleep(3_000);
        }
      }
    }

    if (!success) {
      console.warn(`[Animation] ✗ Image ${cena.numero}: all attempts failed`);
      results.push({ ...cena });
    }
  }

  const ok = results.filter(r => r.image_bytes).length;
  console.log(`[Animation] Key-frames: ${ok}/${cenas.length} generated`);
  return results;
}

/**
 * Passo 3: Veo 3 anima cada key-frame em vídeo (1080p)
 * Usa image-to-video para transformar a ilustração estática em
 * animação com movimento intencional baseado nos 12 princípios.
 * Veo 3 produz vídeos mais fiéis à imagem de referência (menos alucinação).
 * Vídeo sempre 8s (máximo). Player sincroniza com áudio via onended.
 */
export async function generateSceneVideos(
  scenes: GeneratedScene[]
): Promise<GeneratedScene[]> {
  const VEO_MODEL = "veo-3-generate-preview";
  const MAX_CONCURRENT = 2;
  const MAX_POLL_ATTEMPTS = 36; // 36 x 10s = 6 min max (Veo 3 pode ser mais lento)

  const scenesWithImages = scenes.filter(s => s.image_bytes);
  console.log(`[Animation] Veo 3: animating ${scenesWithImages.length} key-frames (1080p)...`);

  for (let i = 0; i < scenes.length; i += MAX_CONCURRENT) {
    const batch = scenes.slice(i, i + MAX_CONCURRENT).filter(s => s.image_bytes);
    if (batch.length === 0) continue;

    const operations: Array<{ scene: GeneratedScene; op: any }> = [];

    for (const scene of batch) {
      try {
        console.log(`[Animation] Veo 3 starting scene ${scene.numero}...`);

        const op = await ai.models.generateVideos({
          model: VEO_MODEL,
          prompt: scene.prompt_veo,
          image: {
            imageBytes: scene.image_bytes!,
            mimeType: "image/png",
          },
          config: {
            aspectRatio: "16:9",
            numberOfVideos: 1,
            durationSeconds: 8,
            resolution: "1080p",
          },
        });

        operations.push({ scene, op });
      } catch (error: any) {
        console.error(`[Animation] Veo 3 start error scene ${scene.numero}:`, error?.message);
      }
    }

    for (const item of operations) {
      try {
        let current = item.op;
        let attempts = 0;

        while (!current.done && attempts < MAX_POLL_ATTEMPTS) {
          await sleep(10_000);
          current = await ai.operations.getVideosOperation({ operation: current });
          attempts++;

          if (attempts % 3 === 0) {
            console.log(`[Animation] Veo 3 scene ${item.scene.numero}: polling ${attempts}/${MAX_POLL_ATTEMPTS}...`);
          }
        }

        if (current.done) {
          const video = current.response?.generatedVideos?.[0]?.video;
          if (video?.uri) {
            console.log(`[Animation] Veo 3 scene ${item.scene.numero}: downloading...`);

            try {
              const downloadUrl = video.uri.includes("?")
                ? `${video.uri}&key=${process.env.GOOGLE_GENAI_API_KEY}`
                : `${video.uri}?key=${process.env.GOOGLE_GENAI_API_KEY}`;

              const res = await fetch(downloadUrl);
              if (res.ok) {
                const arrayBuffer = await res.arrayBuffer();
                item.scene.video_bytes = Buffer.from(arrayBuffer);
                console.log(`[Animation] ✓ Video ${item.scene.numero}: ${(item.scene.video_bytes.length / 1024).toFixed(0)}KB`);
              } else {
                item.scene.video_url = video.uri;
                console.log(`[Animation] ✓ Video ${item.scene.numero}: URI fallback (${res.status})`);
              }
            } catch {
              item.scene.video_url = video.uri;
              console.log(`[Animation] ✓ Video ${item.scene.numero}: URI fallback`);
            }
          } else {
            console.warn(`[Animation] Veo 3 scene ${item.scene.numero}: completed but no video output`);
          }
        } else {
          console.warn(`[Animation] Veo 3 scene ${item.scene.numero}: timeout after ${attempts * 10}s`);
        }
      } catch (error: any) {
        console.error(`[Animation] Veo 3 poll error scene ${item.scene.numero}:`, error?.message);
      }
    }
  }

  const videoCount = scenes.filter(s => s.video_bytes || s.video_url).length;
  console.log(`[Animation] Videos: ${videoCount}/${scenes.length} animated`);

  return scenes;
}


// ══════════════════════════════════════════════════════════════
// PIPELINE COMPLETO
// ══════════════════════════════════════════════════════════════

export interface AnimationResult {
  script: AnimationScript;
  scenes: GeneratedScene[];
  quality: AnimationQuality;
  cost_estimate_usd: number;
}

export async function generateAnimation(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory,
  quality: AnimationQuality = "standard"
): Promise<AnimationResult> {
  console.log(`[Animation] ═══ Starting v4 pipeline for "${titulo}" ═══`);

  // Passo 1: Gemini cria storyboard pedagógico com metáforas visuais
  const script = await generateAnimationScript(titulo, conteudo, categoria);

  // Passo 2: Imagen gera key-frames de alta qualidade
  const withImages = await generateSceneImages(script.cenas);

  // Passo 3: Veo 2 anima os key-frames com movimento intencional
  const withVideos = await generateSceneVideos(withImages);

  // Custo: Gemini ~$0.003 + Imagen ~$0.02/img + Veo 3 ~$6/vid (8s × $0.75/s)
  const imgCost = script.cenas.length * 0.02;
  const videoCost = script.cenas.length * 6.0;
  const cost_estimate_usd = 0.003 + imgCost + videoCost;

  console.log(`[Animation] ═══ Pipeline v4 complete! ${script.cenas.length} scenes, ~$${cost_estimate_usd.toFixed(2)} ═══`);

  return {
    script,
    scenes: withVideos,
    quality,
    cost_estimate_usd: Math.round(cost_estimate_usd * 100) / 100,
  };
}


// ── Helpers ──────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html
    .replace(/<li[^>]*>/gi, "\n• ")
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
