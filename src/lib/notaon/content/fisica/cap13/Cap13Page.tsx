"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 13</span>
          <h1>Trabalho de uma Força e Potência Mecânica</h1>
          <p>
            O trabalho e a potência são as grandezas que conectam as forças com a energia transferida e com o tempo.
            Neste capítulo você aprenderá a calcular o trabalho realizado por qualquer força — inclusive pelo peso e pelo atrito — a entender o gráfico F×d e a relacionar potência, velocidade e rendimento em situações reais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição de Trabalho: τ = F·d·cosθ</h2>
        <p>
          O <strong>trabalho</strong> de uma força constante é definido como o produto escalar entre a força e o deslocamento:
        </p>
        <M block={true}>{"\\tau = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos\\theta"}</M>
        <p>
          onde <M>{"F"}</M> é o módulo da força (N), <M>{"d"}</M> é o módulo do deslocamento (m) e <M>{"\\theta"}</M> é o ângulo entre os vetores força e deslocamento. O trabalho é uma grandeza <strong>escalar</strong> — pode ser positivo, negativo ou zero.
        </p>
        <div className="lesson-highlight">
          <h3>Três Casos Especiais</h3>
          <p>
            <strong>θ = 0°:</strong> força paralela ao deslocamento (motor) → τ = F·d (máximo positivo).
            <strong>θ = 90°:</strong> força perpendicular ao deslocamento → τ = 0 (normal, atrito centrípeto).
            <strong>θ = 180°:</strong> força oposta ao deslocamento (resistente) → τ = −F·d (negativo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Unidade</span>
        <h2>2. Unidade de Trabalho: Joule (J = N·m)</h2>
        <p>
          A unidade de trabalho no SI é o <strong>Joule</strong> (J), em homenagem ao físico inglês James Prescott Joule (1818–1889):
        </p>
        <M block={true}>{"1 \\text{ J} = 1 \\text{ N} \\cdot \\text{m} = 1 \\text{ kg} \\cdot \\frac{\\text{m}^2}{\\text{s}^2}"}</M>
        <p>
          Para referência: levantar uma maçã de 100 g em 1 m custa aproximadamente 1 J. Um atleta em alta intensidade pode gerar ~1000 J/s (1 kW). Uma caloria nutricional equivale a 4186 J. A energia cinética de um carro a 100 km/h é da ordem de 500 kJ.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Motor vs Resistente</span>
        <h2>3. Trabalho Motor vs Trabalho Resistente</h2>
        <p>
          O sinal do trabalho indica se a força contribui para o movimento ou o prejudica:
        </p>
        <p>
          <strong>Trabalho motor</strong> (τ {">"} 0): a força tem componente na mesma direção do deslocamento — <em>transfere</em> energia ao corpo (aumenta Ec). Exemplos: força do motor de um carro, tração de um guindaste, empuxo de um foguete.
        </p>
        <p>
          <strong>Trabalho resistente</strong> (τ {"<"} 0): a força tem componente oposta ao deslocamento — <em>retira</em> energia do corpo (diminui Ec). Exemplos: atrito, resistência do ar, força de frenagem.
        </p>
        <p>
          <strong>Trabalho nulo</strong> (τ = 0): força perpendicular ao deslocamento. Exemplos: força normal em superfície horizontal, força centrípeta em MCU, força magnética sobre carga em movimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atrito</span>
        <h2>4. Trabalho da Força de Atrito: Sempre Negativo</h2>
        <p>
          O atrito cinético sempre se opõe ao movimento (θ = 180°), portanto seu trabalho é sempre negativo:
        </p>
        <M block={true}>{"\\tau_{\\text{atrito}} = -f_d \\cdot d = -\\mu_d \\cdot N \\cdot d"}</M>
        <p>
          Esse trabalho negativo transforma energia cinética em calor — é por isso que objetos deslizando sobre superfícies aquecem. O trabalho total do atrito não depende do caminho seguido (ao contrário da gravidade), pois o atrito é uma força dissipativa e não conservativa.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Normal</span>
        <h2>5. Trabalho da Força Normal: Zero</h2>
        <p>
          A força normal é sempre perpendicular à superfície de contato e, portanto, perpendicular ao deslocamento do corpo sobre a superfície. Como θ = 90°, cos90° = 0:
        </p>
        <M block={true}>{"\\tau_N = N \\cdot d \\cdot \\cos 90° = 0"}</M>
        <p>
          Da mesma forma, a força centrípeta (sempre perpendicular à velocidade/deslocamento) tem trabalho nulo no MCU. Isso é consistente com o fato de que o MCU não altera a energia cinética do corpo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho do Peso</span>
        <h2>6. Trabalho do Peso: τ_P = m·g·Δh</h2>
        <p>
          O peso é uma força conservativa — seu trabalho depende apenas da variação de altura, não do caminho percorrido:
        </p>
        <M block={true}>{"\\tau_P = m \\cdot g \\cdot \\Delta h = m \\cdot g \\cdot (h_i - h_f)"}</M>
        <p>
          Se o corpo desce (h diminui, <M>{"\\Delta h > 0"}</M>): τ_P {">"} 0 (peso realiza trabalho motor). Se o corpo sobe (h aumenta, <M>{"\\Delta h < 0"}</M>): τ_P {"<"} 0 (trabalho resistente). Em qualquer caminho entre dois pontos de mesma altura, τ_P = 0.
        </p>
        <div className="lesson-highlight">
          <h3>Forças Conservativas</h3>
          <p>
            Uma força é conservativa quando seu trabalho depende apenas dos pontos inicial e final, independendo do caminho. O peso e a força elástica são conservativas. O atrito é dissipativo (não conservativo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Força Oblíqua</span>
        <h2>7. Força em Ângulo θ ao Deslocamento</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 200" width="420" height="200" aria-label="Vetor força F em ângulo theta com deslocamento d mostrando componente F·cosθ">
            {/* Floor */}
            <line x1="30" y1="150" x2="390" y2="150" stroke="#9ca3af" strokeWidth="2" />
            {/* Block */}
            <rect x="60" y="110" width="60" height="40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" rx="3" />
            <text x="80" y="135" fontSize="13" fill="#1e40af" fontWeight="bold">m</text>
            {/* Displacement arrow */}
            <line x1="120" y1="148" x2="360" y2="148" stroke="#374151" strokeWidth="2.5" />
            <polygon points="365,148 352,143 352,153" fill="#374151" />
            <text x="230" y="168" fontSize="13" fill="#374151" fontWeight="bold">d</text>
            {/* Force vector F at angle theta */}
            <line x1="90" y1="130" x2="200" y2="60" stroke="#dc2626" strokeWidth="3" />
            <polygon points="204,57 194,69 207,72" fill="#dc2626" />
            <text x="210" y="55" fontSize="14" fill="#dc2626" fontWeight="bold">F</text>
            {/* Angle arc */}
            <path d="M 110,130 A 25,25 0 0,1 127,118" fill="none" stroke="#374151" strokeWidth="1.5" />
            <text x="117" y="126" fontSize="12" fill="#374151" fontWeight="bold">θ</text>
            {/* F·cosθ horizontal projection */}
            <line x1="90" y1="130" x2="200" y2="130" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="6 4" />
            <polygon points="205,130 192,125 192,135" fill="#7c3aed" />
            <text x="130" y="120" fontSize="12" fill="#7c3aed" fontWeight="bold">F·cosθ</text>
            {/* F·sinθ vertical projection */}
            <line x1="200" y1="60" x2="200" y2="130" stroke="#16a34a" strokeWidth="2" strokeDasharray="5 3" />
            <text x="205" y="95" fontSize="11" fill="#16a34a">F·senθ</text>
            {/* Tau formula */}
            <text x="50" y="190" fontSize="13" fill="#374151">τ = F·d·cosθ = (F·cosθ)·d   →   componente paralela ao deslocamento</text>
          </svg>
          <figcaption>Força F aplicada em ângulo θ ao deslocamento d. Apenas a componente paralela F·cosθ realiza trabalho. A componente F·senθ (perpendicular) não contribui para o trabalho.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico F×d</span>
        <h2>8. Gráfico F × d: Área = Trabalho</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 210" width="400" height="210" aria-label="Gráfico F versus d com área sombreada representando trabalho">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="175" stroke="#374151" strokeWidth="2" />
            <line x1="50" y1="175" x2="370" y2="175" stroke="#374151" strokeWidth="2" />
            <polygon points="50,15 45,28 55,28" fill="#374151" />
            <polygon points="375,175 362,170 362,180" fill="#374151" />
            <text x="20" y="18" fontSize="12" fill="#374151">F (N)</text>
            <text x="372" y="180" fontSize="12" fill="#374151">d (m)</text>

            {/* Constant force region — rectangle */}
            <rect x="50" y="70" width="150" height="105" fill="#bfdbfe" fillOpacity="0.6" stroke="#2563eb" strokeWidth="2" />
            <text x="85" y="130" fontSize="12" fill="#2563eb" fontWeight="bold">τ = F·d</text>
            <text x="75" y="145" fontSize="11" fill="#2563eb">(área retangular)</text>
            {/* F label on y-axis */}
            <line x1="45" y1="70" x2="55" y2="70" stroke="#374151" strokeWidth="1.5" />
            <text x="18" y="75" fontSize="11" fill="#374151">F₁</text>
            {/* d label on x-axis */}
            <line x1="200" y1="170" x2="200" y2="180" stroke="#374151" strokeWidth="1.5" />
            <text x="194" y="193" fontSize="11" fill="#374151">d₁</text>

            {/* Trapezoid (varying force) */}
            <polygon points="220,60 360,110 360,175 220,175" fill="#fde68a" fillOpacity="0.6" stroke="#d97706" strokeWidth="2" />
            <text x="255" y="140" fontSize="12" fill="#d97706" fontWeight="bold">τ = área</text>
            <text x="245" y="155" fontSize="11" fill="#d97706">(trapézio)</text>
            {/* Labels */}
            <line x1="220" y1="170" x2="220" y2="180" stroke="#374151" strokeWidth="1.5" />
            <text x="214" y="193" fontSize="11" fill="#374151">d₂</text>
            <line x1="360" y1="170" x2="360" y2="180" stroke="#374151" strokeWidth="1.5" />
            <text x="354" y="193" fontSize="11" fill="#374151">d₃</text>

            <text x="50" y="200" fontSize="11" fill="#374151">Em ambos os casos: τ = área sob a curva F×d</text>
          </svg>
          <figcaption>Gráfico F × d: a área sob a curva representa o trabalho. Para força constante, a área é um retângulo (τ = F·d). Para força variável, calcula-se a área por integração ou geometria (triângulo, trapézio).</figcaption>
        </figure>
        <p>
          Esse princípio é fundamental para a <strong>Lei de Hooke</strong>: o trabalho realizado por uma mola ao comprimi-la de 0 a x é a área do triângulo abaixo da reta F = kx, resultando em <M>{"\\tau = \\frac{1}{2}kx^2"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Potência</span>
        <h2>9. Potência: P = τ/t = F·v</h2>
        <p>
          A <strong>potência</strong> é a taxa de realização de trabalho por unidade de tempo:
        </p>
        <M block={true}>{"P = \\frac{\\tau}{t} \\quad \\text{ou, para força constante:} \\quad P = F \\cdot v"}</M>
        <p>
          A unidade de potência no SI é o <strong>Watt</strong> (W = J/s). Um motor com potência de 1 kW pode realizar 1000 J de trabalho por segundo. A relação P = F·v é muito útil: para manter um carro a velocidade constante contra o atrito, a potência do motor deve ser exatamente <M>{"P = F_{\\text{atrito}} \\cdot v"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Potência e Velocidade de Cruzeiro</h3>
          <p>
            Em velocidade constante, a força do motor iguala a resistência total (atrito + arrasto aerodinâmico). Dobrar a velocidade de cruzeiro requer 8 vezes mais potência (pois F_arrasto ∝ v² e P = F·v).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Potência em Rotação</span>
        <h2>10. Potência e Torque em Sistemas Rotativos: P = T·ω</h2>
        <p>
          Em sistemas rotativos, a potência mecânica relaciona o torque <M>{"\\mathcal{T}"}</M> (N·m) com a velocidade angular <M>{"\\omega"}</M> (rad/s):
        </p>
        <M block={true}>{"P = \\mathcal{T} \\cdot \\omega"}</M>
        <p>
          Esta é a equação mais usada em motores elétricos e combustão. Um motor com alto torque e baixa rotação tem a mesma potência que um motor com baixo torque e alta rotação. A curva de potência de um motor de automóvel em função da rotação é fundamental para projetar a caixa de câmbio.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rendimento</span>
        <h2>11. Rendimento: η = P_útil / P_total × 100%</h2>
        <p>
          Nenhuma máquina real é 100% eficiente — parte da energia é sempre dissipada (calor por atrito, perdas sonoras, calor em resistências elétricas). O <strong>rendimento</strong> (eficiência) é:
        </p>
        <M block={true}>{"\\eta = \\frac{P_{\\text{útil}}}{P_{\\text{total}}} \\times 100\\% = \\frac{\\tau_{\\text{útil}}}{\\tau_{\\text{total}}} \\times 100\\%"}</M>
        <p>
          Exemplos de rendimento: motor elétrico ~90–95%; motor a combustão ~25–40%; caldeira a vapor ~80–90%; painel solar ~15–22%; músculo humano ~25%. Por isso, carros elétricos são mais eficientes que carros a gasolina — aproveitam melhor a energia armazenada.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conversões</span>
        <h2>12. Conversões de Unidade: HP, kW, kWh</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Unidade</th><th>Equivalência em Watts</th><th>Contexto de uso</th></tr>
            </thead>
            <tbody>
              <tr><td>1 HP (cavalo-vapor)</td><td>≈ 745,7 W</td><td>Motores automotivos (EUA)</td></tr>
              <tr><td>1 CV (cavalo-vapor métrico)</td><td>≈ 735,5 W</td><td>Motores no Brasil</td></tr>
              <tr><td>1 kW</td><td>1000 W</td><td>Motores elétricos</td></tr>
              <tr><td>1 kWh</td><td>3.600.000 J = 3,6 MJ</td><td>Energia elétrica (conta de luz)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Conversão útil: <M>{"1 \\text{ HP} \\approx 746 \\text{ W} \\approx 0{,}746 \\text{ kW}"}</M>. Um motor de 100 HP equivale a ~74,6 kW.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>13. Resumo: Trabalho e Potência</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>τ</span>
            <h3>Trabalho</h3>
            <M block={true}>{"\\tau = F \\cdot d \\cdot \\cos\\theta"}</M>
          </div>
          <div className="math-card">
            <span>P</span>
            <h3>Potência</h3>
            <M block={true}>{"P = \\frac{\\tau}{t} = F \\cdot v"}</M>
          </div>
          <div className="math-card">
            <span>τ_P</span>
            <h3>Trabalho do Peso</h3>
            <M block={true}>{"\\tau_P = mg \\cdot \\Delta h"}</M>
          </div>
          <div className="math-card">
            <span>η</span>
            <h3>Rendimento</h3>
            <M block={true}>{"\\eta = \\frac{P_{\\text{útil}}}{P_{\\text{total}}} \\times 100\\%"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Trabalho</span>
        <h2>Síntese Visual: Trabalho e Potência</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Trabalho de uma força: F·d·cosθ, área sob F(d)">
          <defs>
            <marker id="arr13a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr13b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* bloco */}
          <rect x="60" y="100" width="80" height="60" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="100" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">m</text>
          {/* vetor F */}
          <line x1="140" y1="130" x2="260" y2="100" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr13a)" />
          <text x="200" y="93" textAnchor="middle" fontSize="13" fill="#dc2626">F</text>
          {/* ângulo θ */}
          <line x1="140" y1="130" x2="240" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="5 3" />
          <text x="180" y="148" textAnchor="middle" fontSize="12" fill="#64748b">θ</text>
          {/* deslocamento d */}
          <line x1="60" y1="175" x2="560" y2="175" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr13b)" />
          <text x="310" y="188" textAnchor="middle" fontSize="13" fill="#16a34a">d (deslocamento)</text>
          {/* fórmula */}
          <text x="450" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">W = F·d·cos θ</text>
          <text x="450" y="132" textAnchor="middle" fontSize="13" fill="#475569">θ=0° → W = F·d (máx)</text>
          <text x="450" y="152" textAnchor="middle" fontSize="13" fill="#475569">θ=90° → W = 0</text>
          <text x="450" y="172" textAnchor="middle" fontSize="13" fill="#dc2626">θ=180° → W = −F·d</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Teorema trabalho-energia e potência">
          <defs>
            <marker id="arr13c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* gráfico P = W/t → W = área */}
          <line x1="60" y1="150" x2="440" y2="150" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr13c)" />
          <line x1="60" y1="150" x2="60" y2="30" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr13c)" />
          <text x="450" y="154" textAnchor="start" fontSize="13" fill="#1e293b">t</text>
          <text x="48" y="28" textAnchor="end" fontSize="13" fill="#1e293b">P</text>
          <line x1="60" y1="80" x2="380" y2="80" stroke="#2563eb" strokeWidth="2.5" />
          <rect x="60" y="80" width="320" height="70" fill="#bfdbfe" opacity="0.5" />
          <text x="220" y="120" textAnchor="middle" fontSize="13" fill="#2563eb">Área = W = P·t</text>
          <text x="220" y="68" textAnchor="middle" fontSize="13" fill="#2563eb">P constante</text>
          {/* TTE */}
          <rect x="480" y="30" width="195" height="130" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="577" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Teorema W-Energia</text>
          <text x="577" y="78" textAnchor="middle" fontSize="12" fill="#166534">Wresultante = ΔEc</text>
          <text x="577" y="98" textAnchor="middle" fontSize="12" fill="#166534">= ½mv² − ½mv₀²</text>
          <text x="577" y="120" textAnchor="middle" fontSize="12" fill="#166534">P = W/t = F·v</text>
          <text x="577" y="140" textAnchor="middle" fontSize="12" fill="#166534">unidade: Watt (W)</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Fórmula</th><th>Unidade</th><th>Observação</th></tr>
          </thead>
          <tbody>
            <tr><td>Trabalho</td><td>W = F·d·cos θ</td><td>Joule (J)</td><td>W {">"} 0: motor; W {"<"} 0: resistente</td></tr>
            <tr><td>Potência</td><td>P = W/t = F·v</td><td>Watt (W)</td><td>1 cv = 736 W; 1 kW = 1000 W</td></tr>
            <tr><td>Energia cinética</td><td>Ec = ½m·v²</td><td>Joule (J)</td><td>Sempre ≥ 0</td></tr>
            <tr><td>Teorema W-Energia</td><td>Wres = ΔEc</td><td>Joule (J)</td><td>Liga força, deslocamento e velocidade</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Força a 0° — Trabalho Simples"
          statement={<p>Uma força de 100 N é aplicada horizontalmente (θ = 0°) sobre um objeto que se desloca 5 m na direção da força. Qual é o trabalho realizado pela força?</p>}
          options={[
            { letter: "a", text: "20 J" },
            { letter: "b", text: "100 J" },
            { letter: "c", text: "500 J", correct: true },
            { letter: "d", text: "1000 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\tau = F \\cdot d \\cdot \\cos 0° = 100 \\times 5 \\times 1 = 500 \\text{ J}"}</M>
              <p>Com θ = 0°, cosθ = 1 e o trabalho é máximo. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Força Oblíqua a 60°"
          statement={<p>Uma força de 200 N é aplicada em um ângulo de 60° com a horizontal. O objeto se desloca 10 m horizontalmente. Calcule o trabalho realizado pela força. (cos60° = 0,5)</p>}
          options={[
            { letter: "a", text: "2000 J" },
            { letter: "b", text: "1732 J" },
            { letter: "c", text: "1000 J", correct: true },
            { letter: "d", text: "500 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\tau = F \\cdot d \\cdot \\cos 60° = 200 \\times 10 \\times 0{,}5 = 1000 \\text{ J}"}</M>
              <p>Apenas a componente horizontal (200·cos60° = 100 N) realiza trabalho no deslocamento horizontal. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Potência de Motor em HP e Watts"
          statement={<p>Um motor eleva uma carga de 500 kg a uma altura de 20 m em 25 segundos. Calcule a potência desenvolvida em Watts e em HP. Use g = 10 m/s² e 1 HP ≈ 746 W.</p>}
          options={[
            { letter: "a", text: "P = 2000 W ≈ 2,7 HP" },
            { letter: "b", text: "P = 4000 W ≈ 5,4 HP", correct: true },
            { letter: "c", text: "P = 10000 W ≈ 13,4 HP" },
            { letter: "d", text: "P = 1000 W ≈ 1,3 HP" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\tau_P = mgh = 500 \\times 10 \\times 20 = 100{.}000 \\text{ J}"}</M>
              <M block={true}>{"P = \\frac{\\tau}{t} = \\frac{100{.}000}{25} = 4000 \\text{ W}"}</M>
              <M block={true}>{"P_{HP} = \\frac{4000}{746} \\approx 5{,}4 \\text{ HP}"}</M>
              <p>Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Carro Elétrico vs Carro a Gasolina"
          statement={<p>Um carro elétrico tem motor de 150 kW. Um carro a gasolina tem motor de 100 HP. Qual é mais potente e por quanto? (1 HP ≈ 0,746 kW)</p>}
          options={[
            { letter: "a", text: "O a gasolina, por ~25,4 kW" },
            { letter: "b", text: "O elétrico, por ~74,6 kW" },
            { letter: "c", text: "O elétrico, por ~75,4 kW", correct: true },
            { letter: "d", text: "São iguais" },
          ]}
          resolution={
            <>
              <p><strong>Motor a gasolina em kW:</strong></p>
              <M block={true}>{"100 \\text{ HP} \\times 0{,}746 \\frac{\\text{kW}}{\\text{HP}} = 74{,}6 \\text{ kW}"}</M>
              <p><strong>Diferença:</strong></p>
              <M block={true}>{"150 - 74{,}6 = 75{,}4 \\text{ kW}"}</M>
              <p>O carro elétrico é cerca de 2 vezes mais potente. Alternativa c. Além disso, o motor elétrico tem maior rendimento (~90% vs ~30% do motor a combustão), aproveitando melhor a energia armazenada.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Potência do Elevador e Conta de Energia"
          statement={<p>Um elevador eleva uma carga de 800 kg a velocidade constante de 2 m/s. Use g = 10 m/s². Calcule: (a) a potência do motor; (b) o consumo de energia em kWh em 8 horas de operação; (c) o custo mensal (30 dias) a R$ 0,75/kWh.</p>}
          options={[
            { letter: "a", text: "P = 8 kW; 64 kWh/dia; R$ 1.440/mês" },
            { letter: "b", text: "P = 16 kW; 128 kWh/dia; R$ 2.880/mês", correct: true },
            { letter: "c", text: "P = 8 kW; 128 kWh/dia; R$ 2.880/mês" },
            { letter: "d", text: "P = 4 kW; 32 kWh/dia; R$ 720/mês" },
          ]}
          resolution={
            <>
              <p><strong>(a) Potência:</strong></p>
              <M block={true}>{"P = F \\cdot v = mg \\cdot v = 800 \\times 10 \\times 2 = 16{.}000 \\text{ W} = 16 \\text{ kW}"}</M>
              <p><strong>(b) Energia diária (8 horas):</strong></p>
              <M block={true}>{"E = P \\cdot t = 16 \\text{ kW} \\times 8 \\text{ h} = 128 \\text{ kWh/dia}"}</M>
              <p><strong>(c) Custo mensal:</strong></p>
              <M block={true}>{"\\text{Custo} = 128 \\times 30 \\times 0{,}75 = 3840 \\times 0{,}75 = \\text{R\\$}\\,2.880"}</M>
              <p>Alternativa b. Este cálculo evidencia a importância do rendimento em sistemas de elevadores: com motor de rendimento 80%, a conta seria ainda maior.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
