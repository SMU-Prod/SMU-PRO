"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 6</span>
          <h1>Lançamento Oblíquo e Lançamento Horizontal</h1>
          <p>
            O lançamento oblíquo combina um movimento horizontal uniforme com uma queda livre
            vertical, produzindo a trajetória parabólica onipresente em esportes, balística e
            engenharia. Dominar suas equações e a simetria do movimento abrirá portas para
            resolver qualquer problema de projéteis.
          </p>
        </div>
      </section>

      {/* ── 1. Lançamento horizontal ── */}
      <section className="lesson-section">
        <span className="section-kicker">Movimento Combinado</span>
        <h2>1. Lançamento Horizontal: v₀ Horizontal, Queda Livre Vertical</h2>
        <p>
          No <strong>lançamento horizontal</strong>, o projétil é lançado com velocidade
          puramente horizontal <M>{"v_0"}</M> a partir de uma altura <M>{"H"}</M>. A velocidade
          inicial vertical é zero. Os dois movimentos — horizontal e vertical — são
          <em> independentes</em> entre si:
        </p>
        <div className="lesson-highlight">
          <h3>Independência dos Movimentos</h3>
          <p>
            <strong>Horizontal:</strong> MRU — velocidade <M>{"v_x = v_0"}</M> constante,
            sem força horizontal.<br />
            <strong>Vertical:</strong> Queda livre — aceleração <M>{"g"}</M> para baixo,
            velocidade <M>{"v_y"}</M> que aumenta com o tempo.
          </p>
        </div>
        <p>
          Um famoso experimento mental: uma bala disparada horizontalmente e uma bala
          simplesmente solta ao mesmo tempo — ambas atingem o solo ao mesmo tempo, pois
          a queda vertical é idêntica para as duas.
        </p>
      </section>

      {/* ── 2. Equações do lançamento horizontal ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>2. Equações do Lançamento Horizontal</h2>
        <M block={true}>{"x = v_0 \\cdot t \\qquad y = \\frac{1}{2}g \\cdot t^2"}</M>
        <p>
          A velocidade em qualquer instante tem duas componentes:
        </p>
        <M block={true}>{"v_x = v_0 \\quad (\\text{constante}) \\qquad v_y = g \\cdot t \\quad (\\text{crescente})"}</M>
        <p>
          O módulo da velocidade e o ângulo com a horizontal:
        </p>
        <M block={true}>{"v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + g^2 t^2}"}</M>
        <M block={true}>{"\\tan\\theta = \\frac{v_y}{v_x} = \\frac{gt}{v_0}"}</M>
        <div className="lesson-highlight">
          <h3>Eliminando t para obter a trajetória</h3>
          <p>De <M>{"x = v_0 t"}</M> → <M>{"t = x/v_0"}</M>. Substituindo em y:</p>
          <M block={true}>{"y = \\frac{1}{2}g\\left(\\frac{x}{v_0}\\right)^2 = \\frac{g}{2v_0^2}x^2"}</M>
          <p>Esta é a equação da parábola — a trajetória do lançamento horizontal.</p>
        </div>
      </section>

      {/* ── 3. Alcance e tempo de voo (horizontal) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alcance</span>
        <h2>3. Alcance Horizontal e Tempo de Voo (Lançamento Horizontal)</h2>
        <p>
          O tempo de voo é determinado pela queda vertical até o solo (altura H):
        </p>
        <M block={true}>{"H = \\frac{1}{2}g t^2 \\Rightarrow t_{voo} = \\sqrt{\\frac{2H}{g}}"}</M>
        <p>
          O alcance horizontal é:
        </p>
        <M block={true}>{"R = v_0 \\cdot t_{voo} = v_0 \\sqrt{\\frac{2H}{g}}"}</M>
        <p>
          Note que aumentar a velocidade inicial aumenta o alcance proporcionalmente, mas
          aumentar a altura aumenta o alcance com a raiz quadrada da altura.
        </p>
      </section>

      {/* ── 4. Decomposição no oblíquo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lançamento Oblíquo</span>
        <h2>4. Lançamento Oblíquo: Decomposição da Velocidade Inicial</h2>
        <p>
          No lançamento oblíquo com ângulo <M>{"\\theta"}</M> em relação à horizontal e
          velocidade inicial <M>{"v_0"}</M>:
        </p>
        <M block={true}>{"v_{0x} = v_0 \\cos\\theta \\qquad v_{0y} = v_0 \\sin\\theta"}</M>
        <p>
          A componente horizontal é constante durante todo o voo (MRU). A componente vertical
          varia linearmente com o tempo (MRUV com aceleração −g).
        </p>
      </section>

      {/* ── 5. Componentes das velocidades ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>5. Componentes: <M>{"v_x = v_0\\cos\\theta"}</M> e <M>{"v_y = v_0\\sin\\theta - gt"}</M></h2>
        <M block={true}>{"v_x = v_0 \\cos\\theta = \\text{constante}"}</M>
        <M block={true}>{"v_y = v_0 \\sin\\theta - g \\cdot t"}</M>
        <p>
          No ponto mais alto: <M>{"v_y = 0"}</M>, mas <M>{"v_x \\neq 0"}</M> — o projétil
          ainda se move horizontalmente. A velocidade mínima no voo é exatamente
          <M>{" v_{0x} = v_0\\cos\\theta"}</M> (no topo).
        </p>
      </section>

      {/* ── 6. Equações x e y ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>6. Equações do Lançamento Oblíquo para x e y</h2>
        <M block={true}>{"x(t) = v_0 \\cos\\theta \\cdot t"}</M>
        <M block={true}>{"y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}g t^2"}</M>
        <p>
          Eliminando t (dividindo a 2ª pela 1ª após isolá-la), obtém-se a equação da trajetória:
        </p>
        <M block={true}>{"y = x \\tan\\theta - \\frac{g}{2v_0^2\\cos^2\\theta}x^2"}</M>
        <p>Esta é a equação de uma parábola com abertura para baixo.</p>
      </section>

      {/* ── 7. Altura máxima ── */}
      <section className="lesson-section">
        <span className="section-kicker">Altura Máxima</span>
        <h2>7. Altura Máxima: <M>{"H_{max} = \\dfrac{v_0^2\\sin^2\\theta}{2g}"}</M></h2>
        <p>
          No ponto mais alto, <M>{"v_y = 0"}</M>. Usando Torricelli na direção vertical:
        </p>
        <M block={true}>{"0 = v_{0y}^2 - 2gH_{max} \\Rightarrow H_{max} = \\frac{v_{0y}^2}{2g} = \\frac{(v_0\\sin\\theta)^2}{2g} = \\frac{v_0^2\\sin^2\\theta}{2g}"}</M>
        <p>
          O tempo para atingir a altura máxima: <M>{"t_{max} = \\frac{v_0\\sin\\theta}{g}"}</M>.
          Esse é também o ponto médio do voo (por simetria).
        </p>
      </section>

      {/* ── 8. Alcance máximo e ângulo ótimo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alcance</span>
        <h2>8. Alcance Máximo: <M>{"R = \\dfrac{v_0^2\\sin(2\\theta)}{g}"}</M> — Ângulo Ótimo 45°</h2>
        <p>
          O alcance horizontal (retornando ao nível de lançamento) é:
        </p>
        <M block={true}>{"R = \\frac{v_0^2 \\sin(2\\theta)}{g}"}</M>
        <p>
          O seno é máximo quando o argumento é 90°, ou seja, quando <M>{"2\\theta = 90° \\Rightarrow \\theta = 45°"}</M>.
          Portanto, o ângulo de lançamento que maximiza o alcance é <strong>45°</strong>:
        </p>
        <M block={true}>{"R_{max} = \\frac{v_0^2}{g} \\quad (\\theta = 45°)"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ângulo θ</th><th>sin(2θ)</th><th>Alcance R (em unidades de v₀²/g)</th></tr>
            </thead>
            <tbody>
              <tr><td>15°</td><td>0,50</td><td>0,50</td></tr>
              <tr><td>30°</td><td>0,87</td><td>0,87</td></tr>
              <tr><td>45°</td><td>1,00</td><td>1,00 (máximo)</td></tr>
              <tr><td>60°</td><td>0,87</td><td>0,87</td></tr>
              <tr><td>75°</td><td>0,50</td><td>0,50</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 9. Simetria ── */}
      <section className="lesson-section">
        <span className="section-kicker">Simetria</span>
        <h2>9. Simetria do Lançamento Oblíquo</h2>
        <p>
          O lançamento oblíquo possui simetria em relação ao ponto mais alto:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 2.2 }}>
          <li>O tempo de subida é igual ao tempo de descida.</li>
          <li>A velocidade em pontos simétricos tem o mesmo módulo (mas com componente vertical invertida).</li>
          <li>Ângulos complementares (<M>{"\\theta"}</M> e <M>{"90° - \\theta"}</M>) produzem o mesmo alcance R.</li>
          <li>A trajetória é perfeitamente simétrica em relação à vertical que passa pelo topo.</li>
        </ul>
      </section>

      {/* ── 10. SVG trajetória parabólica ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>10. Trajetória Parabólica com Vetores de Velocidade</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 260" width="460" height="260" aria-label="Trajetória parabólica do lançamento oblíquo com vetores de velocidade decompostos">
            <defs>
              <marker id="arrV" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#7c3aed" />
              </marker>
              <marker id="arrX" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#2563eb" />
              </marker>
              <marker id="arrY" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#dc2626" />
              </marker>
              <marker id="axGr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Solo */}
            <line x1="20" y1="230" x2="450" y2="230" stroke="#374151" strokeWidth="2" />
            {/* Eixos */}
            <line x1="30" y1="230" x2="450" y2="230" stroke="#9ca3af" strokeWidth="1" markerEnd="url(#axGr)" />
            <text x="454" y="234" fill="#9ca3af" fontSize="11">x</text>
            <line x1="30" y1="230" x2="30" y2="20" stroke="#9ca3af" strokeWidth="1" markerEnd="url(#axGr)" />
            <text x="22" y="18" fill="#9ca3af" fontSize="11">y</text>
            {/* Trajetória parabólica */}
            <path d="M 40 230 Q 230 20 420 230" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="5 3" />
            {/* ─── PONTO 1: Lançamento (40,230) ─── */}
            <circle cx="40" cy="230" r="4" fill="#374151" />
            {/* Velocidade total v0 */}
            <line x1="40" y1="230" x2="80" y2="190" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrV)" />
            <text x="82" y="192" fill="#7c3aed" fontSize="10">v₀</text>
            {/* vx */}
            <line x1="40" y1="230" x2="80" y2="230" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrX)" />
            <text x="55" y="245" fill="#2563eb" fontSize="10">v₀cosθ</text>
            {/* vy inicial */}
            <line x1="40" y1="230" x2="40" y2="190" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrY)" />
            <text x="6" y="215" fill="#dc2626" fontSize="10">v₀sinθ</text>
            {/* Ângulo θ */}
            <path d="M 62 230 A 22 22 0 0 1 54 208" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="66" y="222" fill="#f59e0b" fontSize="10">θ</text>
            {/* ─── PONTO 2: Topo (230, ~20+10=30) ─── */}
            <circle cx="230" cy="30" r="4" fill="#374151" />
            {/* Apenas vx no topo */}
            <line x1="230" y1="30" x2="278" y2="30" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrX)" />
            <text x="283" y="34" fill="#2563eb" fontSize="10">v₀cosθ</text>
            <text x="210" y="22" fill="#dc2626" fontSize="10">vy=0</text>
            {/* Hmax e R labels */}
            <line x1="230" y1="30" x2="230" y2="230" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="233" y="140" fill="#16a34a" fontSize="11">H_max</text>
            <line x1="40" y1="240" x2="420" y2="240" stroke="#f59e0b" strokeWidth="2" />
            <text x="225" y="255" fill="#f59e0b" fontSize="11" textAnchor="middle">R (alcance)</text>
            {/* ─── PONTO 3: Pouso (420,230) ─── */}
            <circle cx="420" cy="230" r="4" fill="#374151" />
            {/* vx no pouso */}
            <line x1="420" y1="230" x2="460" y2="230" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrX)" />
            {/* vy no pouso (para baixo) */}
            <line x1="420" y1="230" x2="420" y2="190" stroke="#dc2626" strokeWidth="2" />
            <line x1="420" y1="190" x2="420" y2="205" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrY)" />
            <text x="425" y="215" fill="#dc2626" fontSize="10">-v₀sinθ</text>
          </svg>
          <figcaption>
            Trajetória parabólica do lançamento oblíquo. No ponto de lançamento, a velocidade é decomposta
            em componentes horizontal (v₀cosθ, constante) e vertical (v₀sinθ, decresce). No topo, apenas
            a componente horizontal permanece. No pouso, a componente vertical é −v₀sinθ (simétrica ao lançamento).
          </figcaption>
        </figure>
      </section>

      {/* ── 11. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>11. Resumo — Fórmulas do Lançamento Oblíquo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Componentes</span>
            <h3>Velocidade inicial</h3>
            <M block={true}>{"v_{0x} = v_0\\cos\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Componentes</span>
            <h3>Velocidade inicial</h3>
            <M block={true}>{"v_{0y} = v_0\\sin\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Altura Máxima</span>
            <h3>Ponto mais alto</h3>
            <M block={true}>{"H_{max} = \\frac{v_0^2\\sin^2\\theta}{2g}"}</M>
          </div>
          <div className="math-card">
            <span>Alcance</span>
            <h3>Retornando ao nível</h3>
            <M block={true}>{"R = \\frac{v_0^2\\sin(2\\theta)}{g}"}</M>
          </div>
          <div className="math-card">
            <span>Tempo de Voo</span>
            <h3>Total</h3>
            <M block={true}>{"t_{voo} = \\frac{2v_0\\sin\\theta}{g}"}</M>
          </div>
          <div className="math-card">
            <span>Ângulo Ótimo</span>
            <h3>Máximo alcance</h3>
            <M block={true}>{"\\theta = 45°"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Lançamento</span>
        <h2>Síntese Visual: Oblíquo e Horizontal</h2>
        <p>
          No lançamento oblíquo, o movimento é composto: horizontal (MU) e
          vertical (MRUV). Separar as componentes é a chave para resolver as questões.
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Lançamento oblíquo: trajetória parabólica com v0x e v0y">
          <defs>
            <marker id="arr06a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr06b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* chão */}
          <line x1="40" y1="200" x2="660" y2="200" stroke="#1e293b" strokeWidth="2" />
          {/* trajetória parabólica */}
          <path d="M 80 200 Q 350 30 620 200" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* ponto de lançamento */}
          <circle cx="80" cy="200" r="6" fill="#7c3aed" />
          {/* componentes no lançamento */}
          <line x1="80" y1="200" x2="160" y2="200" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr06a)" />
          <text x="120" y="218" textAnchor="middle" fontSize="12" fill="#2563eb">v₀ₓ = v₀·cos θ</text>
          <line x1="80" y1="200" x2="80" y2="130" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr06b)" />
          <text x="55" y="165" textAnchor="end" fontSize="12" fill="#dc2626">v₀ᵧ = v₀·sen θ</text>
          {/* ângulo θ */}
          <path d="M 110 200 A 30 30 0 0 1 80 170" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="118" y="188" textAnchor="start" fontSize="12" fill="#7c3aed">θ</text>
          {/* ponto mais alto */}
          <circle cx="350" cy="30" r="5" fill="#16a34a" />
          <text x="350" y="22" textAnchor="middle" fontSize="12" fill="#16a34a">altura máx H</text>
          {/* alcance */}
          <line x1="80" y1="212" x2="620" y2="212" stroke="#475569" strokeWidth="1.5" />
          <text x="350" y="225" textAnchor="middle" fontSize="12" fill="#475569">alcance A</text>
          <text x="350" y="185" textAnchor="middle" fontSize="13" fill="#0f172a">H = v₀²·sen²θ / 2g | A = v₀²·sen 2θ / g</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Lançamento horizontal: queda livre combinada com MU">
          <defs>
            <marker id="arr06c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr06d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* penhasco */}
          <rect x="40" y="40" width="80" height="120" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="80" y="100" textAnchor="middle" fontSize="12" fill="#475569">altura H</text>
          {/* trajetória */}
          <path d="M 120 40 Q 300 40 620 180" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* vetores horizontais (constantes) */}
          <line x1="120" y1="40" x2="200" y2="40" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr06c)" />
          <text x="160" y="30" textAnchor="middle" fontSize="12" fill="#2563eb">v₀ (horizontal)</text>
          <line x1="320" y1="95" x2="400" y2="95" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr06c)" />
          {/* vetores verticais (crescem) */}
          <line x1="320" y1="95" x2="320" y2="145" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr06d)" />
          <text x="335" y="128" textAnchor="start" fontSize="12" fill="#dc2626">vy = g·t</text>
          {/* chão */}
          <line x1="40" y1="180" x2="660" y2="180" stroke="#1e293b" strokeWidth="2" />
          <text x="350" y="168" textAnchor="middle" fontSize="13" fill="#0f172a">H = ½g·t² | x = v₀·t | vy = g·t</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Grandeza</th>
              <th>Lançamento Oblíquo</th>
              <th>Lançamento Horizontal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Componente horizontal</td><td>vₓ = v₀·cos θ (constante)</td><td>vₓ = v₀ (constante)</td></tr>
            <tr><td>Componente vertical inicial</td><td>v₀ᵧ = v₀·sen θ</td><td>v₀ᵧ = 0</td></tr>
            <tr><td>Aceleração</td><td>aₓ = 0; aᵧ = −g</td><td>aₓ = 0; aᵧ = g ↓</td></tr>
            <tr><td>Altura máxima</td><td>H = v₀²·sen²θ / 2g</td><td>H = altura do penhasco</td></tr>
            <tr><td>Alcance horizontal</td><td>A = v₀²·sen 2θ / g</td><td>A = v₀·t (t do tempo de queda)</td></tr>
            <tr><td>Ângulo ótimo para alcance máx.</td><td>θ = 45°</td><td>Não se aplica</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Lançamento Horizontal de uma Mesa"
          statement={
            <p>
              Uma bolinha rola sobre uma mesa e é lançada horizontalmente com velocidade
              <strong> 15 m/s</strong> de uma altura de <strong>20 m</strong>. Qual é o alcance
              horizontal? Adote <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "30 m", correct: true },
            { letter: "b", text: "15 m" },
            { letter: "c", text: "60 m" },
            { letter: "d", text: "45 m" },
          ]}
          resolution={
            <>
              <p>Tempo de queda:</p>
              <M block={true}>{"t = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2 \\times 20}{10}} = \\sqrt{4} = 2\\text{ s}"}</M>
              <p>Alcance horizontal:</p>
              <M block={true}>{"R = v_0 \\cdot t = 15 \\times 2 = 30\\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Altura Máxima no Lançamento Oblíquo"
          statement={
            <p>
              Um projétil é lançado com velocidade inicial de <strong>30 m/s</strong> a um ângulo
              de <strong>30°</strong> acima da horizontal. Calcule a altura máxima atingida.
              Dados: <M>{"\\sin 30° = 0{,}5"}</M>, <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "22,5 m" },
            { letter: "b", text: "11,25 m", correct: true },
            { letter: "c", text: "45 m" },
            { letter: "d", text: "9 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"v_{0y} = 30 \\times \\sin 30° = 30 \\times 0{,}5 = 15\\text{ m/s}"}</M>
              <M block={true}>{"H_{max} = \\frac{v_{0y}^2}{2g} = \\frac{15^2}{2 \\times 10} = \\frac{225}{20} = 11{,}25\\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Chute de Bola de Futebol a 45°"
          statement={
            <p>
              Uma bola de futebol é chutada com velocidade inicial de <strong>20 m/s</strong>
              a <strong>45°</strong> de inclinação. Calcule o <strong>alcance</strong> R e o
              <strong> tempo de voo</strong>. Dados: <M>{"\\sin 90° = 1"}</M>,
              <M>{" \\sin 45° = \\sqrt{2}/2 \\approx 0{,}707"}</M>, <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "R = 40 m, t = 2,83 s", correct: true },
            { letter: "b", text: "R = 20 m, t = 1,41 s" },
            { letter: "c", text: "R = 80 m, t = 4 s" },
            { letter: "d", text: "R = 40 m, t = 4 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{20^2 \\times \\sin 90°}{10} = \\frac{400 \\times 1}{10} = 40\\text{ m}"}</M>
              <M block={true}>{"t_{voo} = \\frac{2v_0 \\sin\\theta}{g} = \\frac{2 \\times 20 \\times 0{,}707}{10} = \\frac{28{,}28}{10} \\approx 2{,}83\\text{ s}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Arremesso de Basquete a 45° (ENEM-style)"
          statement={
            <p>
              Um jogador de basquete arremessa a bola de um ponto no nível da cesta, a
              <strong> 6 m</strong> de distância horizontal. Para que a bola siga uma trajetória
              com ângulo de <strong>45°</strong> e alcance exatamente a cesta (à mesma altura),
              qual deve ser a velocidade inicial de lançamento? Use <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "v₀ ≈ 5,5 m/s" },
            { letter: "b", text: "v₀ ≈ 7,7 m/s", correct: true },
            { letter: "c", text: "v₀ ≈ 10 m/s" },
            { letter: "d", text: "v₀ ≈ 3,5 m/s" },
          ]}
          resolution={
            <>
              <p>Usando a fórmula do alcance com θ = 45° e sin(90°) = 1:</p>
              <M block={true}>{"R = \\frac{v_0^2}{g} \\Rightarrow 6 = \\frac{v_0^2}{10}"}</M>
              <M block={true}>{"v_0^2 = 60 \\Rightarrow v_0 = \\sqrt{60} = 2\\sqrt{15} \\approx 7{,}75\\text{ m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Artilharia: Simetria de Ângulos (60° vs 30°)"
          statement={
            <p>
              Uma peça de artilharia dispara projéteis com a mesma velocidade inicial
              <M>{"v_0"}</M>. Compare os lançamentos a <strong>60°</strong> e <strong>30°</strong>:
              qual é a relação entre os alcances e como diferem as alturas máximas?
            </p>
          }
          options={[
            { letter: "a", text: "Alcances diferentes; 60° tem altura máxima 3× maior que 30°", correct: true },
            { letter: "b", text: "Alcances iguais; alturas máximas iguais" },
            { letter: "c", text: "Alcance a 60° é maior; alturas iguais" },
            { letter: "d", text: "Alcances iguais; 30° tem altura máxima 3× maior que 60°" },
          ]}
          resolution={
            <>
              <p><strong>Alcances:</strong> sin(2×60°) = sin(120°) = sin(60°) ≈ 0,87 e sin(2×30°) = sin(60°) ≈ 0,87</p>
              <M block={true}>{"R_{60°} = R_{30°} = \\frac{v_0^2 \\sin 60°}{g}"}</M>
              <p>Os alcances são iguais! (Propriedade dos ângulos complementares: 30° + 60° = 90°)</p>
              <p><strong>Alturas máximas:</strong></p>
              <M block={true}>{"H_{60°} = \\frac{v_0^2 \\sin^2 60°}{2g} = \\frac{v_0^2 \\times 3/4}{2g} = \\frac{3v_0^2}{8g}"}</M>
              <M block={true}>{"H_{30°} = \\frac{v_0^2 \\sin^2 30°}{2g} = \\frac{v_0^2 \\times 1/4}{2g} = \\frac{v_0^2}{8g}"}</M>
              <M block={true}>{"\\frac{H_{60°}}{H_{30°}} = 3"}</M>
              <p>A 60°, a altura máxima é 3 vezes maior — muito mais "vertical" apesar do mesmo alcance.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
