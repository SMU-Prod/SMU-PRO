"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 12</span>
          <h1>Dinâmica do Movimento Circular: Força Centrípeta</h1>
          <p>
            Todo corpo em trajetória circular experimenta uma aceleração em direção ao centro — e, portanto, uma força resultante nessa direção.
            Neste capítulo você aprenderá a identificar qual força faz o papel centrípeto em diferentes situações: tensão em fios, força normal em loopings, atrito em curvas e gravidade em satélites.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>1. Revisão da Aceleração Centrípeta</h2>
        <p>
          No movimento circular uniforme (MCU), o módulo da velocidade é constante, mas sua direção muda continuamente. Isso implica uma aceleração — a <strong>aceleração centrípeta</strong> — sempre apontando para o centro da trajetória circular:
        </p>
        <M block={true}>{"a_c = \\frac{v^2}{R} = \\omega^2 R"}</M>
        <p>
          onde <M>{"v"}</M> é a velocidade tangencial (m/s), <M>{"R"}</M> é o raio da trajetória (m) e <M>{"\\omega"}</M> é a velocidade angular (rad/s). A relação entre elas é <M>{"v = \\omega R"}</M>. A aceleração centrípeta aponta radialmente para dentro — nunca tem componente tangencial no MCU.
        </p>
        <div className="lesson-highlight">
          <h3>Direção da Aceleração Centrípeta</h3>
          <p>
            A aceleração centrípeta é sempre perpendicular à velocidade e aponta para o centro do círculo. No MCU ela não muda o módulo da velocidade — apenas sua direção. É por isso que o corpo "curva" em vez de seguir em linha reta.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Força Centrípeta</span>
        <h2>2. Força Centrípeta: F_cp = mv²/R</h2>
        <p>
          Pela 2ª Lei de Newton, se há aceleração centrípeta, deve haver uma força resultante na mesma direção. Chamamos essa força resultante de <strong>força centrípeta</strong>:
        </p>
        <M block={true}>{"F_{cp} = m \\cdot a_c = \\frac{mv^2}{R} = m\\omega^2 R"}</M>
        <p>
          A força centrípeta está sempre <strong>apontando para o centro</strong> da trajetória circular. Seu módulo é constante no MCU, mas a direção gira continuamente acompanhando o movimento do corpo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Não é Nova Força</span>
        <h2>3. A Força Centrípeta NÃO é uma Nova Força</h2>
        <p>
          Este é um dos pontos mais importantes e mais mal-entendidos da física: <strong>força centrípeta não é um tipo de força</strong> — é o nome dado à <em>resultante das forças reais</em> que aponta para o centro.
        </p>
        <p>
          Exemplos: em uma roda de parque de diversões, a normal faz o papel centrípeto. Em uma curva de estrada, o atrito é a força centrípeta. Para um satélite, a gravidade é a força centrípeta. Para um pêndulo cônico, é a componente horizontal da tensão.
        </p>
        <p>
          A força "centrífuga" que sentimos não existe em referenciais inerciais — é uma força fictícia que aparece apenas em referenciais acelerados (rotativos).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>4. Exemplos de Força Centrípeta</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Força que faz papel centrípeto</th><th>Equação</th></tr>
            </thead>
            <tbody>
              <tr><td>Bola no fio (plano horizontal)</td><td>Tensão no fio T</td><td>T = mv²/R</td></tr>
              <tr><td>Carro em curva (plano)</td><td>Atrito estático</td><td>f = mv²/R</td></tr>
              <tr><td>Looping (ponto mais alto)</td><td>N + mg (ambos para baixo)</td><td>N + mg = mv²/R</td></tr>
              <tr><td>Looping (ponto mais baixo)</td><td>N - mg (N para cima)</td><td>N - mg = mv²/R</td></tr>
              <tr><td>Satélite em órbita</td><td>Força gravitacional</td><td>GMm/r² = mv²/r</td></tr>
              <tr><td>Pêndulo cônico</td><td>Componente horizontal da tensão</td><td>T·senθ = mv²/R</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pêndulo Cônico</span>
        <h2>5. Pêndulo Cônico: Fórmulas de T, ω e R</h2>
        <p>
          No pêndulo cônico, uma massa prende-se a um fio de comprimento <M>{"L"}</M> e descreve um círculo horizontal. O fio faz ângulo <M>{"\\theta"}</M> com a vertical.
        </p>
        <M block={true}>{"\\text{Vertical: } T\\cos\\theta = mg \\Rightarrow T = \\frac{mg}{\\cos\\theta}"}</M>
        <M block={true}>{"\\text{Horizontal (centrípeta): } T\\,\\text{sen}\\,\\theta = m\\omega^2 R"}</M>
        <M block={true}>{"\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}} \\quad R = L\\,\\text{sen}\\,\\theta"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Pêndulo cônico com ângulo theta e decomposição da tensão">
            {/* Ceiling */}
            <rect x="160" y="10" width="80" height="10" fill="#9ca3af" />
            {/* String */}
            <line x1="200" y1="20" x2="310" y2="140" stroke="#374151" strokeWidth="2.5" />
            {/* Mass */}
            <circle cx="310" cy="143" r="12" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="318" y="147" fontSize="11" fill="#1d4ed8" fontWeight="bold">m</text>
            {/* Vertical reference */}
            <line x1="200" y1="20" x2="200" y2="180" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5 4" />
            {/* Angle arc */}
            <path d="M 200,55 A 35,35 0 0,1 224,72" fill="none" stroke="#374151" strokeWidth="1.5" />
            <text x="210" y="72" fontSize="13" fill="#374151" fontWeight="bold">θ</text>
            {/* T vector along string */}
            <line x1="310" y1="143" x2="255" y2="81" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="252,77 258,90 265,82" fill="#dc2626" />
            <text x="250" y="68" fontSize="13" fill="#dc2626" fontWeight="bold">T</text>
            {/* T·cosθ vertical */}
            <line x1="310" y1="143" x2="310" y2="90" stroke="#16a34a" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="310,85 305,98 315,98" fill="#16a34a" />
            <text x="318" y="115" fontSize="11" fill="#16a34a">T·cosθ</text>
            {/* T·sinθ horizontal */}
            <line x1="310" y1="143" x2="258" y2="143" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="253,143 266,138 266,148" fill="#7c3aed" />
            <text x="260" y="158" fontSize="11" fill="#7c3aed">T·senθ</text>
            {/* Radius R */}
            <line x1="200" y1="175" x2="310" y2="175" stroke="#d97706" strokeWidth="2" />
            <text x="248" y="190" fontSize="12" fill="#d97706" fontWeight="bold">R = L·senθ</text>
            {/* Weight */}
            <line x1="310" y1="155" x2="310" y2="195" stroke="#dc2626" strokeWidth="2" />
            <polygon points="310,200 305,187 315,187" fill="#dc2626" />
            <text x="318" y="195" fontSize="12" fill="#dc2626">mg</text>
          </svg>
          <figcaption>Pêndulo cônico: a tensão T se decompõe em T·cosθ (equilibra mg) e T·senθ (força centrípeta). O raio do círculo é R = L·senθ.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Curva Bancada</span>
        <h2>6. Curva Bancada (Peralte): Ângulo de Banqueamento</h2>
        <p>
          Em pistas de corrida e rodovias, as curvas são inclinadas (peralte) para que a componente horizontal da força normal forneça a força centrípeta necessária, dispensando o atrito:
        </p>
        <M block={true}>{"N\\,\\text{sen}\\,\\theta = \\frac{mv^2}{R} \\quad N\\cos\\theta = mg"}</M>
        <M block={true}>{"\\tan\\theta = \\frac{v^2}{gR}"}</M>
        <p>
          Para a velocidade de projeto <M>{"v"}</M>, o ângulo ideal é <M>{"\\theta = \\arctan(v^2/gR)"}</M>. Nessa condição, não há força de atrito lateral — o carro pode trafegar mesmo sem atrito (ex.: gelo). Isso é importante no projeto de pistas de Fórmula 1 e de curvas de rodovias de alta velocidade.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Looping</span>
        <h2>7. Looping: Normal no Topo (mínima) e na Base (máxima)</h2>
        <p>
          Em um looping de raio <M>{"R"}</M>, analisamos o corpo nos dois pontos críticos:
        </p>
        <p>
          <strong>No ponto mais alto</strong> (topo do loop): tanto N quanto mg apontam para o centro (para baixo). A resultante centrípeta é:
        </p>
        <M block={true}>{"N_{\\text{topo}} + mg = \\frac{mv^2}{R} \\Rightarrow N_{\\text{topo}} = \\frac{mv^2}{R} - mg"}</M>
        <p>
          Para manter contato, <M>{"N \\geq 0"}</M>, o que exige <M>{"v \\geq \\sqrt{gR}"}</M> (velocidade mínima no topo).
        </p>
        <p>
          <strong>No ponto mais baixo</strong> (base do loop): N aponta para cima (centro) e mg aponta para baixo:
        </p>
        <M block={true}>{"N_{\\text{base}} - mg = \\frac{mv^2}{R} \\Rightarrow N_{\\text{base}} = \\frac{mv^2}{R} + mg"}</M>
        <p>
          Na base, N é maior que mg — é a sensação de "peso extra" nas montanhas-russas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Looping — Forças</span>
        <h2>8. Diagrama do Looping: Forças nos Pontos Críticos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 230" width="400" height="230" aria-label="Looping mostrando forças no topo e na base">
            {/* Loop circle */}
            <circle cx="200" cy="115" r="80" fill="none" stroke="#374151" strokeWidth="2.5" />
            {/* Center dot */}
            <circle cx="200" cy="115" r="4" fill="#374151" />
            <text x="208" y="119" fontSize="11" fill="#374151">Centro</text>

            {/* TOP point */}
            <circle cx="200" cy="35" r="10" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            {/* N at top (down, toward center) */}
            <line x1="200" y1="45" x2="200" y2="75" stroke="#16a34a" strokeWidth="2.5" />
            <polygon points="200,80 195,67 205,67" fill="#16a34a" />
            <text x="207" y="65" fontSize="11" fill="#16a34a" fontWeight="bold">N_topo</text>
            {/* mg at top (down) */}
            <line x1="192" y1="45" x2="192" y2="75" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
            <polygon points="192,80 187,67 197,67" fill="#dc2626" />
            <text x="158" y="55" fontSize="11" fill="#dc2626">mg</text>
            <text x="165" y="30" fontSize="12" fill="#1d4ed8" fontWeight="bold">TOPO</text>
            <text x="140" y="18" fontSize="10" fill="#374151">N+mg = mv²/R</text>

            {/* BOTTOM point */}
            <circle cx="200" cy="195" r="10" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            {/* N at bottom (up, toward center) */}
            <line x1="200" y1="185" x2="200" y2="150" stroke="#16a34a" strokeWidth="2.5" />
            <polygon points="200,145 195,158 205,158" fill="#16a34a" />
            <text x="207" y="165" fontSize="11" fill="#16a34a" fontWeight="bold">N_base</text>
            {/* mg at bottom (down) */}
            <line x1="208" y1="205" x2="208" y2="225" stroke="#dc2626" strokeWidth="2" />
            <polygon points="208,230 203,217 213,217" fill="#dc2626" />
            <text x="215" y="225" fontSize="11" fill="#dc2626">mg</text>
            <text x="160" y="215" fontSize="12" fill="#d97706" fontWeight="bold">BASE</text>
            <text x="130" y="228" fontSize="10" fill="#374151">N-mg = mv²/R → N_base {">"} mg</text>

            {/* LEFT point label */}
            <circle cx="120" cy="115" r="8" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" />
            {/* RIGHT point velocity */}
            <circle cx="280" cy="115" r="8" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" />
            <line x1="280" y1="115" x2="280" y2="75" stroke="#8b5cf6" strokeWidth="2" />
            <polygon points="280,70 275,83 285,83" fill="#8b5cf6" />
            <text x="287" y="88" fontSize="11" fill="#8b5cf6">v</text>
          </svg>
          <figcaption>Looping: no topo, N e mg apontam para o centro (equação: N + mg = mv²/R). Na base, N aponta para o centro e mg para baixo (equação: N − mg = mv²/R). A normal é máxima na base e mínima no topo.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Órbita</span>
        <h2>9. Satélite em Órbita Circular</h2>
        <p>
          Para um satélite de massa <M>{"m"}</M> em órbita circular a distância <M>{"r"}</M> do centro da Terra (massa <M>{"M"}</M>), a força gravitacional fornece a força centrípeta:
        </p>
        <M block={true}>{"\\frac{GMm}{r^2} = \\frac{mv^2}{r} \\Rightarrow v_{\\text{orb}} = \\sqrt{\\frac{GM}{r}}"}</M>
        <p>
          O período orbital é:
        </p>
        <M block={true}>{"T = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{r^3}{GM}}"}</M>
        <p>
          Satélites mais próximos orbitam mais rápido (Lei de Kepler). A Estação Espacial Internacional (ISS) está a ~400 km de altitude e orbita a ~7,7 km/s com período de ~92 minutos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Velocidade de Escape</span>
        <h2>10. Velocidade de Escape da Órbita</h2>
        <p>
          A <strong>velocidade de escape</strong> é a velocidade mínima necessária para um corpo sair permanentemente da influência gravitacional de um planeta. Pela conservação de energia (Ec + Ep = 0 na infinidade):
        </p>
        <M block={true}>{"\\frac{1}{2}mv_{esc}^2 = \\frac{GMm}{R} \\Rightarrow v_{esc} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} \\cdot v_{\\text{orb}}"}</M>
        <p>
          Para a Terra: <M>{"v_{esc} \\approx 11{,}2 \\text{ km/s}"}</M>. A velocidade de escape é <M>{"\\sqrt{2}"}</M> vezes a velocidade orbital rasante. Para a Lua (<M>{"g_{Lua} \\approx 1{,}6 \\text{ m/s}^2, R_{Lua} \\approx 1740 \\text{ km}"}</M>): <M>{"v_{esc} \\approx 2{,}4 \\text{ km/s}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo: Dinâmica Circular</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>F_cp</span>
            <h3>Força Centrípeta</h3>
            <M block={true}>{"F_{cp} = \\frac{mv^2}{R}"}</M>
          </div>
          <div className="math-card">
            <span>Looping</span>
            <h3>Normal no Topo</h3>
            <M block={true}>{"N_{\\text{topo}} = \\frac{mv^2}{R} - mg"}</M>
          </div>
          <div className="math-card">
            <span>Peralte</span>
            <h3>Ângulo Ideal</h3>
            <M block={true}>{"\\tan\\theta = \\frac{v^2}{gR}"}</M>
          </div>
          <div className="math-card">
            <span>Satélite</span>
            <h3>Velocidade Orbital</h3>
            <M block={true}>{"v = \\sqrt{\\frac{GM}{r}}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Centrípeto</span>
        <h2>Síntese Visual: Força Centrípeta</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Força centrípeta: sempre aponta para o centro">
          <defs>
            <marker id="arr12a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr12b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* trajetória circular */}
          <circle cx="350" cy="105" r="80" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 4" />
          {/* corpo em movimento */}
          <circle cx="430" cy="105" r="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          {/* força centrípeta (em direção ao centro) */}
          <line x1="428" y1="105" x2="362" y2="105" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr12a)" />
          <text x="395" y="95" textAnchor="middle" fontSize="13" fill="#dc2626">Fc (→ centro)</text>
          {/* velocidade tangencial */}
          <line x1="430" y1="93" x2="430" y2="30" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr12b)" />
          <text x="450" y="55" textAnchor="start" fontSize="13" fill="#2563eb">v (tangente)</text>
          {/* centro */}
          <circle cx="350" cy="105" r="5" fill="#475569" />
          <text x="350" y="120" textAnchor="middle" fontSize="12" fill="#475569">Centro</text>
          {/* raio */}
          <line x1="350" y1="105" x2="430" y2="105" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="390" y="120" textAnchor="middle" fontSize="12" fill="#64748b">R</text>
          <text x="350" y="190" textAnchor="middle" fontSize="13" fill="#0f172a">Fc = m·v²/R = m·ω²·R = m·(4π²/T²)·R</text>
          <text x="350" y="208" textAnchor="middle" fontSize="13" fill="#475569">Fc não realiza trabalho — perpendicular ao deslocamento</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Exemplos de força centrípeta: curva, looping, satélite">
          <rect x="40" y="20" width="185" height="150" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Curva na estrada</text>
          <text x="132" y="68" textAnchor="middle" fontSize="12" fill="#1d4ed8">Fc = atrito lateral</text>
          <text x="132" y="88" textAnchor="middle" fontSize="12" fill="#1d4ed8">entre pneu e pista</text>
          <text x="132" y="108" textAnchor="middle" fontSize="12" fill="#1d4ed8">fat = m·v²/R</text>
          <text x="132" y="130" textAnchor="middle" fontSize="12" fill="#1d4ed8">↑ velocidade →</text>
          <text x="132" y="148" textAnchor="middle" fontSize="12" fill="#1d4ed8">derrapagem</text>

          <rect x="257" y="20" width="185" height="150" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="349" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Looping</text>
          <text x="349" y="68" textAnchor="middle" fontSize="12" fill="#166534">No topo: Fc = N + mg</text>
          <text x="349" y="88" textAnchor="middle" fontSize="12" fill="#166534">Condição mínima:</text>
          <text x="349" y="108" textAnchor="middle" fontSize="12" fill="#166534">N = 0 → v = √(gR)</text>
          <text x="349" y="128" textAnchor="middle" fontSize="12" fill="#166534">Na base: N − mg = Fc</text>
          <text x="349" y="148" textAnchor="middle" fontSize="12" fill="#166534">N = mg + mv²/R</text>

          <rect x="474" y="20" width="185" height="150" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="566" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Satélite</text>
          <text x="566" y="68" textAnchor="middle" fontSize="12" fill="#713f12">Fc = gravidade</text>
          <text x="566" y="88" textAnchor="middle" fontSize="12" fill="#713f12">G·M·m/R² = m·v²/R</text>
          <text x="566" y="108" textAnchor="middle" fontSize="12" fill="#713f12">v = √(GM/R)</text>
          <text x="566" y="128" textAnchor="middle" fontSize="12" fill="#713f12">3ª Lei de Kepler:</text>
          <text x="566" y="148" textAnchor="middle" fontSize="12" fill="#713f12">T² ∝ R³</text>

          <text x="350" y="185" textAnchor="middle" fontSize="13" fill="#0f172a">A Fc sempre aponta para o centro — sua origem muda conforme o contexto</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Situação</th><th>Força centrípeta (Fc)</th><th>Fórmula</th></tr>
          </thead>
          <tbody>
            <tr><td>Curva horizontal (pista plana)</td><td>Atrito estático</td><td>fat = m·v²/R</td></tr>
            <tr><td>Topo do looping</td><td>N + mg</td><td>N + mg = m·v²/R</td></tr>
            <tr><td>Base do looping</td><td>N − mg</td><td>N − mg = m·v²/R</td></tr>
            <tr><td>Satélite em órbita</td><td>Gravitação</td><td>G·M·m/R² = m·v²/R</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Carro em Pista Circular"
          statement={<p>Um carro de 1000 kg percorre uma pista circular de raio R = 50 m com velocidade constante de 20 m/s. Qual é a força centrípeta necessária?</p>}
          options={[
            { letter: "a", text: "400 N" },
            { letter: "b", text: "4000 N" },
            { letter: "c", text: "8000 N", correct: true },
            { letter: "d", text: "40.000 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"F_{cp} = \\frac{mv^2}{R} = \\frac{1000 \\times 20^2}{50} = \\frac{1000 \\times 400}{50} = 8000 \\text{ N}"}</M>
              <p>Essa força é fornecida pelo atrito dos pneus com o asfalto. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Bola no Fio em Círculo Horizontal"
          statement={<p>Uma bola de 0,5 kg está presa a um fio de 1 m e descreve um círculo horizontal com velocidade de 4 m/s. Qual é a tensão no fio? (Desconsidere o peso para simplificação.)</p>}
          options={[
            { letter: "a", text: "2 N" },
            { letter: "b", text: "4 N" },
            { letter: "c", text: "8 N", correct: true },
            { letter: "d", text: "16 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"T = \\frac{mv^2}{R} = \\frac{0{,}5 \\times 16}{1} = 8 \\text{ N}"}</M>
              <p>A tensão no fio fornece a força centrípeta. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Looping: Velocidade Mínima no Topo"
          statement={<p>Uma montanha-russa tem um looping de raio R = 10 m. Qual é a velocidade mínima no ponto mais alto do looping para que o carrinho mantenha contato com o trilho? Use g = 10 m/s².</p>}
          options={[
            { letter: "a", text: "5 m/s" },
            { letter: "b", text: "10 m/s", correct: true },
            { letter: "c", text: "14 m/s" },
            { letter: "d", text: "20 m/s" },
          ]}
          resolution={
            <>
              <p>No topo, para N = 0 (contato mínimo):</p>
              <M block={true}>{"N + mg = \\frac{mv^2}{R} \\Rightarrow 0 + mg = \\frac{mv_{\\text{mín}}^2}{R}"}</M>
              <M block={true}>{"v_{\\text{mín}} = \\sqrt{gR} = \\sqrt{10 \\times 10} = \\sqrt{100} = 10 \\text{ m/s}"}</M>
              <p>Alternativa b. Com velocidade menor que 10 m/s, o carrinho perderia contato com o trilho no topo.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Carro em Curva: Atrito Suficiente?"
          statement={<p>Um carro percorre uma curva de raio R = 150 m a 90 km/h. O coeficiente de atrito estático entre os pneus e o asfalto é μ_e = 0,6. O carro consegue fazer a curva sem deslizar? Use g = 10 m/s² e 90 km/h = 25 m/s.</p>}
          options={[
            { letter: "a", text: "Não, pois a força centrípeta necessária supera a força de atrito máxima" },
            { letter: "b", text: "Sim, pois a força de atrito máxima supera a força centrípeta necessária", correct: true },
            { letter: "c", text: "Exatamente no limite (forças iguais)" },
            { letter: "d", text: "Não é possível determinar sem a massa do carro" },
          ]}
          resolution={
            <>
              <p><strong>Força centrípeta necessária</strong> (por kg de massa):</p>
              <M block={true}>{"\\frac{v^2}{R} = \\frac{25^2}{150} = \\frac{625}{150} \\approx 4{,}17 \\text{ m/s}^2"}</M>
              <p><strong>Aceleração de atrito máxima</strong>:</p>
              <M block={true}>{"a_{\\text{atrito}} = \\mu_e \\cdot g = 0{,}6 \\times 10 = 6 \\text{ m/s}^2"}</M>
              <p>Como 4,17 m/s² {"<"} 6 m/s², o atrito é suficiente. O carro completa a curva com segurança. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Satélite da ISS a h = 400 km"
          statement={<p>A ISS orbita a h = 400 km acima da superfície terrestre. Dados: R_T = 6400 km, g = 9,8 m/s² na superfície. Calcule a velocidade orbital da ISS. (Dica: use g_h = g·(R_T/(R_T+h))²)</p>}
          options={[
            { letter: "a", text: "≈ 5,6 km/s" },
            { letter: "b", text: "≈ 7,7 km/s", correct: true },
            { letter: "c", text: "≈ 9,5 km/s" },
            { letter: "d", text: "≈ 11,2 km/s" },
          ]}
          resolution={
            <>
              <p><strong>Raio orbital:</strong> r = 6400 + 400 = 6800 km = 6,8 × 10⁶ m</p>
              <p><strong>g na altitude h:</strong></p>
              <M block={true}>{"g_h = 9{,}8 \\times \\left(\\frac{6400}{6800}\\right)^2 \\approx 9{,}8 \\times 0{,}886 \\approx 8{,}68 \\text{ m/s}^2"}</M>
              <p><strong>Velocidade orbital</strong> (gravidade = centrípeta):</p>
              <M block={true}>{"g_h = \\frac{v^2}{r} \\Rightarrow v = \\sqrt{g_h \\cdot r} = \\sqrt{8{,}68 \\times 6{,}8 \\times 10^6}"}</M>
              <M block={true}>{"v = \\sqrt{59{,}0 \\times 10^6} \\approx 7680 \\text{ m/s} \\approx 7{,}7 \\text{ km/s}"}</M>
              <p>Alternativa b. A ISS completa uma órbita em ~92 minutos.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
