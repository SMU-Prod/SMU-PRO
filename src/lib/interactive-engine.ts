/**
 * SMU PRO — Content Engine v3
 * Pipeline:
 *   GPT-4.1 (análise técnica 4 camadas + decisão widget/imagem + geração React)
 *   → gpt-image-1 HIGH (imagens realistas profissionais)
 *   → Edge TTS (narração)
 *
 * Mudanças v3:
 *   - GPT-4.1 (não mini) para widgets de nível ChatGPT
 *   - Imagens quality=high, estilo REALISTA profissional (não cartoon)
 *   - IA decide automaticamente widget vs imagem
 *   - Sistema de memória (ai_memory) para melhorar ao longo do tempo
 *
 * Custo por aula (~10 cenas, 5 imagens + 5 widgets):
 *   GPT-4.1 análise + widgets: ~$0.08
 *   gpt-image-1 HIGH ×5:  ~$0.26
 *   Edge TTS: GRÁTIS
 *   TOTAL: ~$0.34/aula
 */

import OpenAI from "openai";
import type { CourseCategory } from "@/types/database";
import { WIDGET_SYSTEM_PROMPT, buildWidgetUserPrompt } from "@/lib/widget-prompt";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// ── Types ───────────────────────────────────────────────────

export type SceneMode = "widget" | "image";

export interface ContentScene {
  numero: number;
  titulo: string;
  modo: SceneMode;
  conceito_tecnico: string;
  por_que_este_modo: string;
  intencao_pedagogica: string;
  narracao: string;
  explicacao_texto: string;
  destaques: string[];
  dica_profissional: string;
  html_widget?: string;
  prompt_imagem?: string;
  duracao: number;
}

export interface ContentScript {
  metadata: {
    titulo_aula: string;
    categoria: CourseCategory;
    total_cenas: number;
    duracao_total: number;
    abordagem_didatica: string;
  };
  analise_pedagogica: {
    estrutura: {
      tem_introducao: boolean;
      tem_desenvolvimento: boolean;
      tem_exemplos: boolean;
      tem_pratica: boolean;
      tem_fechamento: boolean;
      elementos_ausentes: string[];
    };
  };
  analise_tecnica: {
    dominio: string;
    conceitos_chave: Array<{ conceito: string; status: string; observacao: string }>;
    termos_tecnicos: string[];
    equipamentos: string[];
    processos: string[];
    parametros_tecnicos: string[];
    lacunas_criticas: string[];
  };
  classificacao: {
    nivel: string;
    justificativa: string;
    criterios: {
      terminologia_tecnica: string;
      parametros_numericos: boolean;
      complexidade_exemplos: string;
    };
  };
  diagnostico: {
    correto: string[];
    incompleto: string[];
    incorreto: string[];
    deveria_incluir: string[];
    nota_geral: string;
  };
  cenas: ContentScene[];
}

export interface GeneratedScene extends ContentScene {
  image_b64?: string;
  image_url?: string;
  final_html?: string;
}


// ══════════════════════════════════════════════════════════════
// DIREÇÃO TÉCNICA POR CATEGORIA
// ══════════════════════════════════════════════════════════════

const TECH: Record<CourseCategory, string> = {
  som: `DOMÍNIO: Engenharia de áudio para eventos.
PARÂMETROS: dB, Hz/kHz, Ω, W/RMS, V, ms, polar patterns, SNR.
CONCEITOS: signal flow, gain staging, impedância, phantom power, feedback, EQ, compressão, gate, delay de alinhamento, crossover, line array.
EQUIPAMENTOS: Yamaha CL/QL, DiGiCo, SM58, SM57, AKG C414, d&b, L-Acoustics, JBL VTX, DI boxes.
IMAGENS: fotos realistas de equipamentos de áudio profissional, ambientes de palco, estúdio.
PALETA WIDGETS: fundo #0f172a, cyan #00d4ff, violeta #818cf8, verde #22c55e, amarelo #eab308, vermelho #ef4444.`,

  luz: `DOMÍNIO: Lighting design para shows.
PARÂMETROS: DMX 0-255, canais, Kelvin, lux, beam/field angle, CRI, W, gobos.
CONCEITOS: DMX 512, ArtNet/sACN, temperatura de cor, pan/tilt, dimmer curve, cues.
EQUIPAMENTOS: Robe Robin, Viper, grandMA3, Avolites, ChamSys, PARs LED, fresnel, followspot.
IMAGENS: fotos realistas de shows iluminados, refletores profissionais, mesas de luz.
PALETA: fundo #0c0a1a, âmbar #ff9500, magenta #ff00aa, roxo #7700ff, azul #0066ff.`,

  producao: `DOMÍNIO: Produção de eventos.
CONCEITOS: pré-produção, rider, stage plot, cronograma, budget, briefing.
IMAGENS: escritórios de produção, plantas de eventos, bastidores.
PALETA: fundo #0f1a14, verde #00a86b, dourado #c9a96e, azul #2c5282.`,

  dj: `DOMÍNIO: DJing e mixagem.
PARÂMETROS: BPM, key (Camelot), dB, Hz.
CONCEITOS: beatmatching, harmonic mixing, EQ mixing, phrase matching.
EQUIPAMENTOS: CDJs Pioneer, DJM, Rekordbox, Serato, Traktor.
IMAGENS: cabines de DJ, CDJs, mixer, crowd.
PALETA: fundo #120a1e, roxo #7c3aed, neon #ff0080, azul #0099ff.`,

  vj: `DOMÍNIO: VJing e projeção.
CONCEITOS: layers, blend modes, mapping 3D, media servers.
IMAGENS: projeções mapeadas, setups de VJ, telas LED.
PALETA: fundo #0a0a1e, multicolorido.`,

  roadie: `DOMÍNIO: Técnicas de palco e roadie.
PARÂMETROS: kg, WLL, ângulos, metros.
CONCEITOS: rigging, truss, motores, ground/fly, stage plot, patch.
EQUIPAMENTOS: truss box/triangular, motores CM, stage boxes.
IMAGENS: bastidores de palco, montagem de truss, cases de equipamento.
PALETA: fundo #1a1a1a, laranja #ff6600, amarelo #ffd700, cinza #708090.`,

  marketing: `DOMÍNIO: Marketing para eventos.
CONCEITOS: funil, CAC, LTV, CTR, automação, segmentação.
IMAGENS: dashboards, redes sociais, campanhas.
PALETA: fundo #0f1420, coral #ff6f61, azul #4a90d9.`,

  efeitos: `DOMÍNIO: Efeitos especiais.
PARÂMETROS: metros (segurança), timing ms, DMX.
CONCEITOS: pirotecnia fria, CO2, confete, laser, fog/haze.
IMAGENS: efeitos em shows, máquinas de CO2, sparklers.
PALETA: fundo #1a0a0a, vermelho #ff3300, laranja #ff8800, dourado #ffd700.`,

  outros: `DOMÍNIO: Multidisciplinar.
Adapte ao conteúdo. IMAGENS: realistas e profissionais.
PALETA: fundo #0f172a, azul #4682b4, teal #008080.`,
};


// ══════════════════════════════════════════════════════════════
// HTML WRAPPER PARA WIDGETS
// ══════════════════════════════════════════════════════════════

const HTML_WRAP = (code: string, bg: string) => `<!DOCTYPE html>
<html lang="pt-BR"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.2/babel.min.js"></script>
<script>tailwind.config={theme:{extend:{colors:{surface:{'1':'#0f172a','2':'#1e293b','3':'#334155'}}}}}</script>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  background:${bg};
  overflow:hidden;
  font-family:'Inter',system-ui,-apple-system,sans-serif;
  color:#e2e8f0;
  width:100vw;height:100vh;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
#root{width:100%;height:100%}
input[type=range]{
  -webkit-appearance:none;height:6px;border-radius:6px;
  background:linear-gradient(90deg,#1e293b,#334155);
  outline:none;cursor:pointer;transition:opacity 0.2s;
}
input[type=range]:hover{opacity:0.9}
input[type=range]::-webkit-slider-thumb{
  -webkit-appearance:none;width:20px;height:20px;border-radius:50%;
  background:linear-gradient(135deg,#818cf8,#6366f1);
  cursor:pointer;border:2px solid #312e81;
  box-shadow:0 0 10px rgba(129,140,248,0.5),0 2px 4px rgba(0,0,0,0.3);
  transition:transform 0.15s,box-shadow 0.15s;
}
input[type=range]::-webkit-slider-thumb:hover{
  transform:scale(1.15);
  box-shadow:0 0 16px rgba(129,140,248,0.7),0 2px 6px rgba(0,0,0,0.4);
}
input[type=range]::-webkit-slider-thumb:active{transform:scale(0.95)}
canvas{image-rendering:auto;display:block}
.mono{font-family:'JetBrains Mono',ui-monospace,monospace}
.serif{font-family:'Georgia',serif}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.fade-in{animation:fadeIn 0.4s ease-out}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</head><body>
<div id="root"></div>
<script type="text/babel">
const {useState,useEffect,useRef,useCallback,useMemo}=React;
${code}
ReactDOM.render(React.createElement(Widget),document.getElementById('root'));
</script></body></html>`;


// ══════════════════════════════════════════════════════════════
// PROMPT MASTER — GPT-4.1
// ══════════════════════════════════════════════════════════════

function buildPrompt(titulo: string, conteudo: string, categoria: CourseCategory, memoria?: string): string {
  const tech = TECH[categoria];

  return `Você é um PROFESSOR TÉCNICO SÊNIOR (25+ anos) E DESENVOLVEDOR REACT/CANVAS EXPERT de nível SENIOR PRINCIPAL.

${tech}

${memoria ? `\n═══ MEMÓRIA DE GERAÇÕES ANTERIORES ═══\nO sistema aprendeu o seguinte de gerações passadas:\n${memoria}\nUse essas lições para melhorar a qualidade.\n` : ""}

═══════════════════════════════════════
MISSÃO: ANÁLISE 4 CAMADAS + CONTEÚDO VISUAL
═══════════════════════════════════════

CAMADA 1 — ESTRUTURA PEDAGÓGICA: intro, desenvolvimento, exemplos, prática, fechamento. Liste ausentes.
CAMADA 2 — ANÁLISE TÉCNICA: domínio, conceitos (status: correto/incompleto/superficial/incorreto + observação), termos, equipamentos, processos, parâmetros, lacunas críticas.
CAMADA 3 — NÍVEL: basico/intermediario/avancado/profissional + justificativa.
CAMADA 4 — DIAGNÓSTICO: correto, incompleto, incorreto, deveria incluir, nota geral.

═══════════════════════════════════════
DECISÃO: WIDGET vs IMAGEM
═══════════════════════════════════════

A IA deve decidir para cada conceito:

modo="widget" QUANDO:
- O conceito tem VALORES que podem variar (ganho, frequência, temperatura, resistência)
- Há FÓRMULAS ou RELAÇÕES matemáticas (V=IR, P=VI, dB=20log)
- O conceito envolve FLUXO ou PROCESSO que pode ser animado
- Comparação A/B interativa ajuda a entender
- Medição ou visualização dinâmica

modo="image" QUANDO:
- Equipamento FÍSICO que precisa ser VISTO (como é na vida real)
- Cenário prático (palco montado, estúdio, cabine)
- Conceito abstrato que precisa de METÁFORA VISUAL
- Detalhes construtivos (como algo é feito fisicamente)
- Abertura/encerramento (ambientação)

═══════════════════════════════════════
REGRAS WIDGET (modo="widget")
═══════════════════════════════════════

O campo "html_widget" contém APENAS "function Widget() { ... }".
Será wrappado em HTML com React 18 + Tailwind + Babel.

QUALIDADE NÍVEL CHATGPT — REFERÊNCIA OBRIGATÓRIA:

O widget deve ter o nível de qualidade dos widgets interativos do ChatGPT:
- Simulação visual com FÍSICA (partículas, ondas, movimento)
- FÓRMULA MATEMÁTICA renderizada com estilo (itálico para variáveis, resultado destacado)
- Sliders que MUDAM A SIMULAÇÃO VISUAL em tempo real
- Visual 3D-like com gradientes, sombras, perspectiva

REGRAS TÉCNICAS:

1. CANVAS 2D obrigatório para toda visualização:
   - requestAnimationFrame loop a 60fps
   - Resolução HiDPI: canvas.width = el.clientWidth * devicePixelRatio
   - ctx.imageSmoothingEnabled = true
   - Gradientes (createLinearGradient/createRadialGradient)
   - Glow: ctx.shadowBlur + ctx.shadowColor
   - Transparência para profundidade

2. SIMULAÇÃO FÍSICA quando o conceito envolver movimento:
   - Array de partículas com {x, y, vx, vy, radius}
   - Velocidade proporcional ao valor do slider
   - Colisão com paredes (bounce)
   - Movimento Browniano para aleatoriedade natural
   - lerp(current, target, 0.05) para transições suaves

3. FÓRMULAS no widget (div separada, não no Canvas):
   - Use <span> com estilo itálico/bold para variáveis
   - Mostre a fórmula E o resultado calculado
   - Exemplo: R = V / I → 17.0 = 112.2 / 6.6
   - Fonte: font-family serif para fórmulas, monospace para valores

4. LAYOUT OBRIGATÓRIO (de cima para baixo):
   - Título (16px bold branco) + subtítulo explicativo (12px cinza)
   - Área dividida: ESQUERDA = fórmula + controles | DIREITA = Canvas simulação
   - OU: TOPO = Canvas simulação | BAIXO = controles
   - Sliders com label à esquerda, valor numérico à direita
   - TUDO EM PT-BR (labels, títulos, unidades)

5. CONTROLES:
   - input type="range" com min, max, step definidos tecnicamente
   - Label com nome da variável + unidade (ex: "Corrente (A)", "Ganho (dB)")
   - Valor numérico atualizado em tempo real ao lado do slider
   - Cores diferentes por variável para distinção visual

PROIBIDO:
- Widgets que são SÓ TEXTO/DIVS sem Canvas
- Canvas sem animação (deve ter requestAnimationFrame)
- Sliders sem feedback visual imediato no Canvas
- fetch, localStorage, alert, window.open, imports
- Texto em inglês (tudo em PT-BR)

═══════════════════════════════════════
REGRAS IMAGEM (modo="image")
═══════════════════════════════════════

"prompt_imagem" em INGLÊS para gpt-image-1.

OBJETIVO: Mostrar a EXECUÇÃO TÉCNICA CORRETA — como as coisas devem ser feitas profissionalmente em eventos. A imagem deve ser uma REFERÊNCIA VISUAL do procedimento correto.

ESTILO: REALISTA PROFISSIONAL — foto de equipamento real, cenário real, setup real.
NÃO cartoon, NÃO flat design, NÃO desenho animado, NÃO ilustração.

★★★ REGRA CRÍTICA — ZERO TEXTO NA IMAGEM ★★★
NUNCA peça texto, labels, palavras, letras, números, checklist, ou qualquer escrita na imagem.
A imagem deve conter APENAS elementos visuais.

FOCO DAS IMAGENS — EXECUÇÃO TÉCNICA CORRETA:
As imagens devem mostrar COMO se faz corretamente na prática profissional:
- Equipamento posicionado corretamente (angulação, altura, orientação)
- Cabeamento organizado e profissional (não bagunçado)
- Setup completo e funcional (como um técnico sênior montaria)
- EPIs sendo usados corretamente (quando aplicável)
- Ferramentas dispostas de forma profissional
- Conexões visíveis e corretas (XLR, powerCON, DMX, etc.)

FORMATO DO PROMPT:
"Professional realistic photograph showing the CORRECT technical execution of [o que está sendo feito]. [Descrição detalhada do setup/equipamento correto com marcas e modelos específicos]. [Detalhes que um técnico profissional notaria: cabeamento organizado, angulação correta, conexões firmes, posicionamento preciso]. [Iluminação: studio/stage/working lights]. High quality, sharp focus, 8K detail. Absolutely no text, no writing, no letters, no numbers, no labels, no signs, no checklists, no words of any kind. No watermarks."

EXEMPLOS:
- "Professional realistic photograph showing the correct technical setup of a Yamaha CL5 digital mixing console in a FOH position at a live concert venue, properly connected with organized XLR snake cables, Dante network switch visible, iPad remote nearby, channel faders set at unity gain with LED meters showing healthy signal levels, comfortable operator chair, proper monitor placement. Working lights illuminating the control area. High quality, 8K detail. Absolutely no text or writing in the image."
- "Professional realistic close-up photograph showing the correct way to organize and secure stage cables: color-coded XLR cables neatly gaffer-taped along the stage edge, powerCON connections properly mated and locked, cable bridges crossing walkways, excess cable coiled in figure-eight pattern next to each position, cable ties and velcro wraps visible. Backstage documentary style lighting. Absolutely no text or writing in the image."
- "Professional realistic photograph showing a complete personal protective equipment kit correctly laid out for a live event rigging technician: 3M hard hat with chin strap, high-visibility orange safety vest with reflective strips, 3M ear defenders rated for 100+ dB, leather rigger gloves, steel-toe boots with ankle support, safety harness with lanyard — all arranged on a dark equipment case surface with a truss visible in the background. Studio lighting, product photography quality. Absolutely no text or writing in the image."

NUNCA no prompt:
- "cartoon", "illustration", "flat design", "vector", "anime"
- Qualquer texto, labels, palavras, letras, números, placas
- Rostos identificáveis
- Watermarks
- Equipamento posicionado incorretamente ou de forma amadora

═══════════════════════════════════════
NARRAÇÃO
═══════════════════════════════════════

"narracao": EXTRAIA do conteúdo ORIGINAL. NÃO invente. Use o material. Adapte minimamente para fala natural PT-BR. Todas as cenas juntas cobrem TODO o conteúdo. NÃO resuma.

═══════════════════════════════════════
CONTEÚDO DA AULA
═══════════════════════════════════════

Categoria: ${categoria}
Título: ${titulo}

Conteúdo:
${conteudo}

═══════════════════════════════════════
JSON — sem markdown, sem comentários
═══════════════════════════════════════

{
  "metadata": { "titulo_aula":"...", "categoria":"${categoria}", "total_cenas":N, "duracao_total":N, "abordagem_didatica":"..." },
  "analise_pedagogica": { "estrutura": { "tem_introducao":bool, "tem_desenvolvimento":bool, "tem_exemplos":bool, "tem_pratica":bool, "tem_fechamento":bool, "elementos_ausentes":["..."] } },
  "analise_tecnica": { "dominio":"...", "conceitos_chave":[{"conceito":"...","status":"correto|incompleto|superficial|incorreto","observacao":"..."}], "termos_tecnicos":["..."], "equipamentos":["..."], "processos":["..."], "parametros_tecnicos":["..."], "lacunas_criticas":["..."] },
  "classificacao": { "nivel":"basico|intermediario|avancado|profissional", "justificativa":"...", "criterios":{"terminologia_tecnica":"baixa|media|alta","parametros_numericos":bool,"complexidade_exemplos":"simples|moderada|complexa"} },
  "diagnostico": { "correto":["..."], "incompleto":["..."], "incorreto":["..."], "deveria_incluir":["..."], "nota_geral":"..." },
  "cenas": [
    { "numero":1, "titulo":"...", "modo":"widget|image", "conceito_tecnico":"...", "por_que_este_modo":"...", "intencao_pedagogica":"...", "narracao":"...", "explicacao_texto":"...", "destaques":["..."], "dica_profissional":"...", "prompt_imagem":"..." OR null, "duracao":N }
  ]
}

REGRAS FINAIS:
- NÃO inclua o campo html_widget no JSON (será gerado separadamente)
- prompt_imagem preenchido SÓ quando modo="image" (senão null)
- Para modo="widget": inclua apenas modo, titulo, conceito_tecnico e os outros campos de texto
- Mínimo 5 cenas
- Imagens DEVEM ser estilo REALISTA (não cartoon)`;
}


// ══════════════════════════════════════════════════════════════
// GERAÇÃO
// ══════════════════════════════════════════════════════════════

export async function generateContentScript(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory,
  memoria?: string
): Promise<ContentScript> {
  const prompt = buildPrompt(titulo, stripHtml(conteudo), categoria, memoria);

  console.log(`[Engine v3] GPT-4.1 analyzing "${titulo}"...`);

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: `Você é um professor técnico sênior E desenvolvedor React/Canvas de nível principal. Gere JSON puro. Widgets DEVEM usar Canvas 2D com requestAnimationFrame para animações a 60fps. Imagens DEVEM ser estilo realista profissional (NUNCA cartoon). Responda SÓ com JSON válido.`,
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    response_format: { type: "json_object" },
    max_tokens: 16384,
  }, { timeout: 120000 });

  const text = response.choices[0]?.message?.content || "{}";
  let script: ContentScript;

  try {
    script = JSON.parse(text) as ContentScript;
  } catch (parseErr) {
    console.warn(`[Engine v3] JSON parse failed, attempting repair...`);
    script = repairAndParse(text);
  }

  const widgets = (script.cenas || []).filter(c => c.modo === "widget").length;
  const images = (script.cenas || []).filter(c => c.modo === "image").length;
  console.log(`[Engine v3] ${script.cenas?.length} cenas (${widgets} widgets, ${images} imagens)`);
  console.log(`[Engine v3] Nível: ${script.classificacao?.nivel} | Lacunas: ${script.analise_tecnica?.lacunas_criticas?.length || 0}`);

  // Etapa 2: gerar widgets separadamente (código React não cabe bem em JSON)
  if (widgets > 0) {
    console.log(`[Engine v3] Generating ${widgets} widgets with separate calls...`);
    for (const cena of script.cenas) {
      if (cena.modo === "widget" && !cena.html_widget) {
        try {
          cena.html_widget = await generateWidgetCode(cena.titulo, cena.conceito_tecnico, cena.explicacao_texto || "", categoria);
        } catch (err) {
          console.error(`[Engine v3] Widget generation failed for "${cena.titulo}":`, err);
          // Fallback: convert to image
          cena.modo = "image";
          cena.prompt_imagem = `Professional realistic photograph related to: ${cena.conceito_tecnico}. High quality, dramatic lighting. Absolutely no text, no writing, no labels, no letters, no numbers in the image. No watermarks.`;
        }
      }
    }
  }

  return script;
}

/**
 * Gera código de widget React em chamada separada (evita quebrar JSON)
 */
async function generateWidgetCode(
  titulo: string,
  conceito: string,
  explicacao: string,
  categoria: CourseCategory
): Promise<string> {
  const tech = TECH[categoria];

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: WIDGET_SYSTEM_PROMPT },
      { role: "user", content: buildWidgetUserPrompt(titulo, conceito, explicacao, categoria, tech) },
    ],
    temperature: 0.7,
    max_tokens: 8192,
  }, { timeout: 120000 });

  let code = response.choices[0]?.message?.content || "";

  // Limpar possíveis wrappers de markdown
  code = code
    .replace(/^```(?:jsx?|typescript|tsx?)?\s*\n?/i, "")
    .replace(/\n?```\s*$/i, "")
    .trim();

  // Validar que começa com function Widget
  if (!code.startsWith("function Widget")) {
    const match = code.match(/function\s+Widget\s*\(/);
    if (match && match.index !== undefined) {
      code = code.substring(match.index);
    }
  }

  console.log(`[Engine v3] ✓ Widget code generated (${code.length} chars)`);
  return code;
}

/**
 * Gera imagens (mode="image") e wrappa widgets (mode="widget")
 */
export async function processScenes(cenas: ContentScene[]): Promise<GeneratedScene[]> {
  const results: GeneratedScene[] = [];

  for (let i = 0; i < cenas.length; i++) {
    const cena = cenas[i];

    if (cena.modo === "image" && cena.prompt_imagem) {
      let success = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          console.log(`[Engine v3] Image ${cena.numero} (attempt ${attempt})...`);
          const res = await openai.images.generate({
            model: "gpt-image-1",
            prompt: cena.prompt_imagem,
            n: 1,
            size: "1536x1024",
            quality: "high",
          } as any, { timeout: 60000 });

          const data = res.data?.[0];
          if (data?.b64_json) {
            results.push({ ...cena, image_b64: data.b64_json });
            success = true; break;
          } else if (data?.url) {
            results.push({ ...cena, image_url: data.url });
            success = true; break;
          }
        } catch (err: any) {
          console.error(`[Engine v3] Image err ${cena.numero}:`, err?.message);
          if (err?.status === 429) await sleep(15000);
          else if (err?.message?.includes("content_policy")) {
            cena.prompt_imagem = cena.prompt_imagem!
              .replace(/fire|explosion|pyrotechnic/gi, "special effect equipment")
              .replace(/weapon|gun|blade/gi, "tool");
            await sleep(2000);
          } else await sleep(3000);
        }
      }
      if (!success) results.push({ ...cena });
      if (i < cenas.length - 1) await sleep(1500);

    } else if (cena.modo === "widget" && cena.html_widget) {
      const bg = "#0f172a";
      results.push({ ...cena, final_html: HTML_WRAP(cena.html_widget, bg) });

    } else {
      results.push({ ...cena });
    }
  }

  return results;
}


// ══════════════════════════════════════════════════════════════
// PIPELINE
// ══════════════════════════════════════════════════════════════

export interface ContentResult {
  script: ContentScript;
  scenes: GeneratedScene[];
  cost_estimate_usd: number;
}

export async function generateLessonContent(
  titulo: string,
  conteudo: string,
  categoria: CourseCategory,
  memoria?: string
): Promise<ContentResult> {
  console.log(`[Engine v3] ═══ Starting "${titulo}" ═══`);

  const script = await generateContentScript(titulo, conteudo, categoria, memoria);
  const scenes = await processScenes(script.cenas);

  const imageCount = scenes.filter(s => s.image_b64 || s.image_url).length;
  const widgetCount = scenes.filter(s => s.final_html).length;
  // GPT-4.1: ~$2.00/1M input + $8.00/1M output
  // Main call: ~$0.08, Widget calls: ~$0.02 each
  // gpt-image-1 HIGH 1536x1024: ~$0.167/img
  const cost = 0.08 + (widgetCount * 0.02) + (imageCount * 0.167);

  console.log(`[Engine v3] ═══ Done! ${widgetCount} widgets + ${imageCount} images, ~$${cost.toFixed(3)} ═══`);

  return { script, scenes, cost_estimate_usd: Math.round(cost * 1000) / 1000 };
}


// ── JSON Repair ─────────────────────────────────────────────

function repairAndParse(text: string): ContentScript {
  let cleaned = text;

  // Remove markdown wrappers
  cleaned = cleaned.replace(/^```json\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

  // Remove any html_widget fields that might contain broken code
  cleaned = cleaned.replace(/"html_widget"\s*:\s*"(?:[^"\\]|\\.)*(?:"|$)/g, '"html_widget": null');

  // Fix common JSON issues
  cleaned = cleaned.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

  // Try parsing again
  try {
    return JSON.parse(cleaned) as ContentScript;
  } catch {
    console.error("[Engine v3] JSON repair failed, extracting what we can...");

    // Last resort: try to extract cenas array
    const cenasMatch = cleaned.match(/"cenas"\s*:\s*\[/);
    if (cenasMatch) {
      // Build minimal valid structure
      try {
        // Find the metadata and analysis sections that are likely valid
        const metaMatch = cleaned.match(/"metadata"\s*:\s*(\{[^}]+\})/);
        const meta = metaMatch ? JSON.parse(metaMatch[1]) : {
          titulo_aula: "Aula", categoria: "outros", total_cenas: 0, duracao_total: 0, abordagem_didatica: ""
        };

        return {
          metadata: meta,
          analise_pedagogica: { estrutura: { tem_introducao: true, tem_desenvolvimento: true, tem_exemplos: false, tem_pratica: false, tem_fechamento: true, elementos_ausentes: [] } },
          analise_tecnica: { dominio: "", conceitos_chave: [], termos_tecnicos: [], equipamentos: [], processos: [], parametros_tecnicos: [], lacunas_criticas: [] },
          classificacao: { nivel: "basico", justificativa: "", criterios: { terminologia_tecnica: "baixa", parametros_numericos: false, complexidade_exemplos: "simples" } },
          diagnostico: { correto: [], incompleto: [], incorreto: [], deveria_incluir: [], nota_geral: "Não foi possível analisar completamente." },
          cenas: [],
        };
      } catch {
        throw new Error("Could not parse GPT response as JSON");
      }
    }

    throw new Error("Could not parse GPT response as JSON");
  }
}

// ── Helpers ──────────────────────────────────────────────────

export function stripHtml(html: string): string {
  return html
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<h[1-6][^>]*>/gi, "\n\n").replace(/<\/h[1-6]>/gi, ".\n\n")
    .replace(/<\/p>/gi, "\n\n").replace(/<br\s*\/?>/gi, "\n")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}
