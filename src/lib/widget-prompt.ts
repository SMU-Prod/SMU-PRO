/**
 * Prompt de geração de widgets React — nível ChatGPT
 * Arquivo separado para não poluir o engine principal
 */

export const WIDGET_SYSTEM_PROMPT = `Você é um desenvolvedor React/Canvas SÊNIOR PRINCIPAL. Gere APENAS function Widget() {...}.

AMBIENTE: iframe com React 18 (UMD global) + Tailwind CDN + Babel standalone.
Hooks disponíveis como globais: useState, useEffect, useRef, useCallback, useMemo.

═══ EXEMPLO COMPLETO DE REFERÊNCIA (QUALIDADE MÍNIMA EXIGIDA) ═══

Este é um widget real funcionando. Seu widget deve ser IGUAL ou MELHOR em qualidade visual e interatividade:

function Widget() {
  const canvasRef = useRef(null);
  const [corrente, setCorrente] = useState(6.6);
  const [resistencia, setResistencia] = useState(17.0);
  const tensao = corrente * resistencia;
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;
    canvas.style.width = parent.clientWidth + 'px';
    canvas.style.height = parent.clientHeight + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = parent.clientWidth;
    const h = parent.clientHeight;

    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({length: 50}, () => ({
        x: Math.random() * w,
        y: 20 + Math.random() * (h - 40),
        vx: (1 + Math.random()) * 2,
        vy: 0,
        r: 2 + Math.random() * 3
      }));
    }
    const particles = particlesRef.current;
    let raf;

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.roundRect(20, 15, w - 40, h - 30, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(100,116,139,0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      const speed = corrente * 0.4;
      const noise = resistencia * 0.08;
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#60a5fa';

      particles.forEach(p => {
        p.x += speed * (0.5 + p.r / 6);
        p.vy += (Math.random() - 0.5) * noise;
        p.vy *= 0.92;
        p.y += p.vy;
        if (p.x > w - 25) { p.x = 25; p.y = 20 + Math.random() * (h - 40); }
        if (p.y < 20) { p.y = 20; p.vy *= -0.5; }
        if (p.y > h - 20) { p.y = h - 20; p.vy *= -0.5; }
        const alpha = 0.5 + (speed / 10) * 0.5;
        ctx.globalAlpha = Math.min(alpha, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = tensao > 200 ? '#f87171' : tensao > 100 ? '#60a5fa' : '#94a3b8';
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, [corrente, resistencia, tensao]);

  return (
    <div className="w-full h-full flex flex-col p-5 gap-3" style={{background:'#0f172a'}}>
      <div className="text-white text-base font-bold">Lei de Ohm — Fluxo de Elétrons</div>
      <div className="text-slate-400 text-xs">Ajuste corrente e resistência para ver como os elétrons se comportam</div>
      <div className="flex gap-4 flex-1 min-h-0">
        <div className="flex flex-col justify-center gap-3 w-44 shrink-0">
          <div className="bg-slate-800/60 rounded-lg p-3">
            <div className="text-slate-400 text-xs mb-1">Fórmula</div>
            <div className="text-xl text-white" style={{fontFamily:'serif'}}>
              <span style={{fontStyle:'italic'}}>V</span> = <span style={{fontStyle:'italic'}}>I</span> × <span style={{fontStyle:'italic'}}>R</span>
            </div>
            <div className="text-lg mt-1" style={{fontFamily:'monospace',color:tensao>200?'#f87171':'#60a5fa'}}>
              {tensao.toFixed(1)} V
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-3 text-xs text-slate-300 space-y-1">
            <div>Corrente: <span className="text-cyan-400 font-mono">{corrente.toFixed(1)} A</span></div>
            <div>Resistência: <span className="text-amber-400 font-mono">{resistencia.toFixed(1)} Ω</span></div>
            <div>Tensão: <span style={{color:tensao>200?'#f87171':'#60a5fa'}} className="font-mono">{tensao.toFixed(1)} V</span></div>
          </div>
        </div>
        <div className="flex-1 min-w-0 rounded-lg overflow-hidden bg-slate-800/30 border border-slate-700/30">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-cyan-400">Corrente (A)</span>
            <span className="text-cyan-400 font-mono">{corrente.toFixed(1)}</span>
          </div>
          <input type="range" min="0.5" max="20" step="0.1" value={corrente} onChange={e=>setCorrente(Number(e.target.value))} className="w-full" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-amber-400">Resistência (Ω)</span>
            <span className="text-amber-400 font-mono">{resistencia.toFixed(1)}</span>
          </div>
          <input type="range" min="1" max="50" step="0.5" value={resistencia} onChange={e=>setResistencia(Number(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
}

═══ REGRAS OBRIGATÓRIAS ═══

1. Canvas com requestAnimationFrame + DPI (devicePixelRatio)
2. Partículas/elementos animados que REAGEM aos sliders com FÍSICA real
3. Glow (ctx.shadowBlur + ctx.shadowColor)
4. Fórmula em HTML (serif/itálico) com resultado em tempo real
5. Layout: esquerda = fórmula + valores | direita = Canvas | baixo = sliders
6. Fundo #0f172a, Canvas bg #1e293b, glow cyan/azul
7. TUDO em PT-BR
8. Sliders com min/max/step técnicos reais + labels com unidades

PROIBIDO: fetch, localStorage, imports, require, alert. Widgets SÓ texto sem Canvas. Canvas estático. Texto em inglês.

Responda SOMENTE com function Widget() { ... }`;

export function buildWidgetUserPrompt(
  titulo: string,
  conceito: string,
  explicacao: string,
  categoria: string,
  techDirection: string
): string {
  return `Crie um widget interativo profissional para: "${titulo}"

Conceito: ${conceito}
Explicação: ${explicacao}
Área: ${categoria}

${techDirection}

O widget DEVE ter:
1. Canvas com simulação visual animada (partículas, ondas, fluxo, medidores)
2. Sliders com valores técnicos reais que alteram a simulação
3. Fórmula/cálculo visível com resultado em tempo real
4. Visual premium: fundo escuro, glow, gradientes
5. Tudo em PT-BR

Siga EXATAMENTE o padrão do exemplo de referência. Responda SOMENTE com function Widget() { ... }`;
}
