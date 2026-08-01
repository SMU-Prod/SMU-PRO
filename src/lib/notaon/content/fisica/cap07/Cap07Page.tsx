"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 7</span>
          <h1>Cinemática Angular e Movimento Circular Uniforme (MCU)</h1>
          <p>
            Do giro de um ventilador ao movimento de satélites e planetas, o movimento circular
            é onipresente na natureza e na tecnologia. Neste capítulo você dominará as grandezas
            angulares, a relação com as lineares, a aceleração centrípeta e as aplicações práticas
            do MCU em vestibulares e no ENEM.
          </p>
        </div>
      </section>

      {/* ── 1. Grandezas angulares ── */}
      <section className="lesson-section">
        <span className="section-kicker">Grandezas</span>
        <h2>1. Grandezas Angulares: Ângulo θ, Velocidade Angular ω, Aceleração Angular α</h2>
        <p>
          Para descrever o movimento circular, usamos grandezas angulares análogas às lineares:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grandeza Angular</th>
                <th>Símbolo</th>
                <th>Unidade SI</th>
                <th>Analogia Linear</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Posição angular</td><td>θ</td><td>rad (radiano)</td><td>x (posição)</td></tr>
              <tr><td>Deslocamento angular</td><td>Δθ</td><td>rad</td><td>Δx</td></tr>
              <tr><td>Velocidade angular</td><td>ω (ômega)</td><td>rad/s</td><td>v (m/s)</td></tr>
              <tr><td>Aceleração angular</td><td>α (alfa)</td><td>rad/s²</td><td>a (m/s²)</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O Radiano</h3>
          <p>
            O radiano é a unidade natural para ângulos: <M>{"\\theta = \\frac{s}{R}"}</M>,
            onde s é o comprimento de arco e R é o raio. Uma volta completa corresponde a
            <M>{" 2\\pi"}</M> rad = 360°. Portanto <M>{"1\\text{ rad} \\approx 57{,}3°"}</M>.
          </p>
        </div>
      </section>

      {/* ── 2. Relação linear-angular ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações</span>
        <h2>2. Relação entre Grandezas Lineares e Angulares</h2>
        <p>
          Para um ponto a distância R do eixo de rotação, as grandezas lineares e angulares
          se relacionam por:
        </p>
        <M block={true}>{"s = \\theta \\cdot R \\qquad v = \\omega \\cdot R \\qquad a_{tang} = \\alpha \\cdot R"}</M>
        <p>
          Onde <M>{"s"}</M> é o arco percorrido, <M>{"v"}</M> é a velocidade tangencial e
          <M>{" a_{tang}"}</M> é a aceleração tangencial (responsável por mudar o módulo de v).
        </p>
        <div className="lesson-highlight">
          <h3>Importante</h3>
          <p>
            Quanto maior o raio, maior a velocidade linear para uma mesma velocidade angular.
            Exemplo: numa roda girando a ω = 10 rad/s, um ponto a R = 0,1 m tem v = 1 m/s,
            enquanto um ponto a R = 0,5 m tem v = 5 m/s.
          </p>
        </div>
      </section>

      {/* ── 3. Período e frequência ── */}
      <section className="lesson-section">
        <span className="section-kicker">Período</span>
        <h2>3. Período T e Frequência f: <M>{"T = 1/f"}</M>, <M>{"\\omega = 2\\pi f"}</M></h2>
        <p>
          O <strong>período</strong> T é o tempo para completar uma volta (em segundos).
          A <strong>frequência</strong> f é o número de voltas por segundo (em Hz = 1/s).
        </p>
        <M block={true}>{"T = \\frac{1}{f} \\qquad f = \\frac{1}{T}"}</M>
        <p>
          A velocidade angular em termos de T e f:
        </p>
        <M block={true}>{"\\omega = \\frac{2\\pi}{T} = 2\\pi f"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sistema</th><th>T (período)</th><th>f</th><th>ω (rad/s)</th></tr>
            </thead>
            <tbody>
              <tr><td>Terra (rotação)</td><td>24 h = 86400 s</td><td>1,16×10⁻⁵ Hz</td><td>7,27×10⁻⁵ rad/s</td></tr>
              <tr><td>Terra (translação)</td><td>365,25 dias</td><td>3,17×10⁻⁸ Hz</td><td>1,99×10⁻⁷ rad/s</td></tr>
              <tr><td>Motor elétrico (60 Hz)</td><td>16,7 ms</td><td>60 Hz</td><td>376,9 rad/s</td></tr>
              <tr><td>CD (máxima)</td><td>~5 ms</td><td>~200 Hz</td><td>~1257 rad/s</td></tr>
              <tr><td>Turbina de jato</td><td>~8 ms</td><td>~125 Hz</td><td>~785 rad/s</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 4. Definição do MCU ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>4. Definição do MCU: ω Constante, v Constante, |a| ≠ 0</h2>
        <p>
          O <strong>Movimento Circular Uniforme (MCU)</strong> ocorre quando um corpo percorre
          uma trajetória circular com velocidade <em>escalar</em> (módulo) constante:
        </p>
        <M block={true}>{"\\omega = \\text{constante} \\Rightarrow v = \\omega R = \\text{constante} \\Rightarrow |\\vec{a}| \\neq 0"}</M>
        <div className="lesson-highlight">
          <h3>Paradoxo do MCU</h3>
          <p>
            No MCU, o <em>módulo</em> da velocidade é constante, mas a <em>direção</em> muda
            continuamente. Portanto, há aceleração! Essa aceleração não muda o módulo de v,
            apenas sua direção — é a <strong>aceleração centrípeta</strong>, sempre apontando
            para o centro da trajetória.
          </p>
        </div>
      </section>

      {/* ── 5. Aceleração centrípeta ── */}
      <section className="lesson-section">
        <span className="section-kicker">Centrípeta</span>
        <h2>5. Aceleração Centrípeta: <M>{"a_c = v^2/R = \\omega^2 R"}</M></h2>
        <p>
          A <strong>aceleração centrípeta</strong> é responsável por manter o corpo em trajetória
          circular, mudando continuamente a direção da velocidade:
        </p>
        <M block={true}>{"a_c = \\frac{v^2}{R} = \\omega^2 R = \\frac{4\\pi^2 R}{T^2}"}</M>
        <p>
          A aceleração centrípeta sempre aponta para o centro da trajetória circular — daí o
          nome "centrípeta" (do latim: "que busca o centro"). Ela é perpendicular à velocidade
          tangencial em todos os instantes.
        </p>
        <div className="lesson-highlight">
          <h3>Derivação (intuitiva)</h3>
          <p>
            Em um intervalo Δt, a velocidade gira de um ângulo Δθ = ω·Δt.
            A variação de velocidade Δv ≈ v·Δθ (para Δθ pequeno), portanto:
            <M block={true}>{"a_c = \\frac{|\\Delta \\vec{v}|}{\\Delta t} \\approx \\frac{v \\cdot \\Delta\\theta}{\\Delta t} = v\\omega = \\frac{v^2}{R}"}</M>
          </p>
        </div>
      </section>

      {/* ── 6. SVG do círculo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Diagrama do MCU: Velocidade Tangencial e Aceleração Centrípeta</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 340" width="380" height="340" aria-label="Diagrama do MCU com velocidade tangencial e aceleração centrípeta">
            <defs>
              <marker id="arrTan" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
              <marker id="arrCen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
              </marker>
              <marker id="arrAng" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Círculo */}
            <circle cx="190" cy="170" r="110" fill="none" stroke="#d1d5db" strokeWidth="2" />
            {/* Centro */}
            <circle cx="190" cy="170" r="5" fill="#374151" />
            <text x="196" y="175" fill="#374151" fontSize="13" fontWeight="bold">O (centro)</text>
            {/* Raio */}
            <line x1="190" y1="170" x2="300" y2="170" stroke="#374151" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="242" y="185" fill="#374151" fontSize="12">R</text>
            {/* Ponto P na trajetória (direita) */}
            <circle cx="300" cy="170" r="7" fill="#374151" />
            <text x="308" y="168" fill="#374151" fontSize="12">P</text>
            {/* Velocidade tangencial (para cima, tangente ao círculo) */}
            <line x1="300" y1="170" x2="300" y2="80" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrTan)" />
            <text x="307" y="120" fill="#2563eb" fontSize="12" fontWeight="bold">v⃗ (tang.)</text>
            {/* Aceleração centrípeta (para o centro, para a esquerda) */}
            <line x1="300" y1="170" x2="218" y2="170" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrCen)" />
            <text x="235" y="160" fill="#dc2626" fontSize="12" fontWeight="bold">a⃗c</text>
            {/* Ponto Q no topo */}
            <circle cx="190" cy="60" r="7" fill="#6b7280" />
            <text x="197" y="58" fill="#6b7280" fontSize="12">Q</text>
            {/* Velocidade de Q (tangente, para direita) */}
            <line x1="190" y1="60" x2="280" y2="60" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrTan)" />
            {/* Aceleração centrípeta de Q (para baixo, em direção ao centro) */}
            <line x1="190" y1="60" x2="190" y2="142" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrCen)" />
            {/* Ângulo θ */}
            <path d="M 230 170 A 40 40 0 0 1 222 133" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="237" y="155" fill="#f59e0b" fontSize="13">θ</text>
            {/* Seta de rotação */}
            <path d="M 190 135 A 35 35 0 0 1 225 155" fill="none" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrAng)" />
            <text x="215" y="130" fill="#16a34a" fontSize="12">ω</text>
            {/* Legenda */}
            <rect x="10" y="300" width="12" height="3" fill="#2563eb" />
            <text x="26" y="308" fill="#2563eb" fontSize="11">velocidade tangencial v⃗</text>
            <rect x="10" y="318" width="12" height="3" fill="#dc2626" />
            <text x="26" y="326" fill="#dc2626" fontSize="11">aceleração centrípeta a⃗c (→ centro)</text>
          </svg>
          <figcaption>
            MCU: o ponto P se move com velocidade tangencial v⃗ (tangente ao círculo, perpendicular ao raio)
            e aceleração centrípeta a⃗c (sempre em direção ao centro O). A velocidade angular ω indica o
            sentido de rotação.
          </figcaption>
        </figure>
      </section>

      {/* ── 7. Gráfico θ-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>7. Gráfico θ-t do MCU: Reta Linear</h2>
        <p>
          Como ω é constante no MCU, o ângulo varia linearmente com o tempo:
        </p>
        <M block={true}>{"\\theta(t) = \\theta_0 + \\omega \\cdot t"}</M>
        <p>
          O gráfico θ-t é uma reta com coeficiente angular igual a ω. Isso é perfeitamente
          análogo ao gráfico x-t do MRU linear (onde a inclinação é v).
        </p>
      </section>

      {/* ── 8. Força centrípeta ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dinâmica</span>
        <h2>8. Força Centrípeta: Resultante das Forças no MCU</h2>
        <p>
          A <strong>força centrípeta</strong> não é um novo tipo de força — é o nome dado à
          resultante das forças reais que produz a aceleração centrípeta. Pela 2ª Lei de Newton:
        </p>
        <M block={true}>{"F_c = m \\cdot a_c = \\frac{mv^2}{R} = m\\omega^2 R"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Força centrípeta é...</th></tr>
            </thead>
            <tbody>
              <tr><td>Planeta em órbita circular</td><td>Força gravitacional</td></tr>
              <tr><td>Carro em curva</td><td>Atrito entre pneus e asfalto</td></tr>
              <tr><td>Bola presa a um cordão</td><td>Tensão no cordão</td></tr>
              <tr><td>Elétron em órbita (modelo de Bohr)</td><td>Força elétrica (Coulomb)</td></tr>
              <tr><td>Passageiro em brinquedo de parque</td><td>Normal + peso (resultante)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 9. Período: Terra e satélites ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Período de Rotação: Exemplos Práticos (Terra, Satélites)</h2>
        <p>
          Para um satélite em órbita circular, a força gravitacional fornece a força centrípeta:
        </p>
        <M block={true}>{"\\frac{GMm}{R^2} = \\frac{mv^2}{R} \\Rightarrow v = \\sqrt{\\frac{GM}{R}}"}</M>
        <M block={true}>{"T = \\frac{2\\pi R}{v} = 2\\pi R \\sqrt{\\frac{R}{GM}} = 2\\pi \\sqrt{\\frac{R^3}{GM}}"}</M>
        <p>
          (Lei de Kepler) — o período aumenta com o raio orbital elevado à potência 3/2.
          A ISS orbita a ~400 km de altitude com T ≈ 92 min; a Lua orbita com T = 27,3 dias.
        </p>
      </section>

      {/* ── 10. Tabela linear vs angular ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>10. Comparação: Grandezas Lineares vs. Angulares</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grandeza Linear</th>
                <th>Fórmula</th>
                <th>Grandeza Angular</th>
                <th>Fórmula</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Posição x</td><td>m</td><td>Ângulo θ</td><td>rad</td></tr>
              <tr><td>Velocidade v</td><td>m/s</td><td>Vel. angular ω</td><td>rad/s</td></tr>
              <tr><td>Aceleração a</td><td>m/s²</td><td>Acel. angular α</td><td>rad/s²</td></tr>
              <tr><td>v = Δx/Δt</td><td>MRU</td><td>ω = Δθ/Δt</td><td>MCU</td></tr>
              <tr><td>v = v₀ + at</td><td>MRUV</td><td>ω = ω₀ + αt</td><td>MCUV</td></tr>
              <tr><td>s = vt</td><td>MRU</td><td>θ = ωt</td><td>MCU</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 11. RPM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conversão</span>
        <h2>11. Rotações por Minuto (rpm): Conversão para rad/s</h2>
        <p>
          Em engenharia e na vida cotidiana, a velocidade de rotação é frequentemente expressa
          em <strong>rpm (rotações por minuto)</strong>. A conversão para rad/s é:
        </p>
        <M block={true}>{"\\omega = n_{rpm} \\times \\frac{2\\pi}{60} = \\frac{n_{rpm} \\cdot \\pi}{30}\\text{ rad/s}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <p>
            Motor de carro a 3000 rpm: <M>{"\\omega = 3000 \\times \\frac{\\pi}{30} = 100\\pi \\approx 314"}</M> rad/s.<br />
            HD de computador a 7200 rpm: <M>{"\\omega = 7200 \\times \\frac{\\pi}{30} = 240\\pi \\approx 754"}</M> rad/s.<br />
            Ventilador doméstico a 1200 rpm: <M>{"\\omega = 40\\pi \\approx 126"}</M> rad/s.
          </p>
        </div>
      </section>

      {/* ── 12. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>12. Resumo — Fórmulas do MCU</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Velocidade Tangencial</span>
            <h3>Linear ↔ Angular</h3>
            <M block={true}>{"v = \\omega R"}</M>
          </div>
          <div className="math-card">
            <span>Período e ω</span>
            <h3>Relação fundamental</h3>
            <M block={true}>{"\\omega = \\frac{2\\pi}{T} = 2\\pi f"}</M>
          </div>
          <div className="math-card">
            <span>Aceleração</span>
            <h3>Centrípeta</h3>
            <M block={true}>{"a_c = \\frac{v^2}{R} = \\omega^2 R"}</M>
          </div>
          <div className="math-card">
            <span>Força</span>
            <h3>Centrípeta</h3>
            <M block={true}>{"F_c = \\frac{mv^2}{R} = m\\omega^2 R"}</M>
          </div>
          <div className="math-card">
            <span>Conversão</span>
            <h3>rpm → rad/s</h3>
            <M block={true}>{"\\omega = \\frac{n_{rpm}\\cdot\\pi}{30}"}</M>
          </div>
          <div className="math-card">
            <span>Arco</span>
            <h3>s = θR</h3>
            <M block={true}>{"s = \\theta \\cdot R"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama MCU</span>
        <h2>Síntese Visual: Grandezas Angulares e Lineares</h2>
        <p>
          No MCU, a velocidade angular ω é constante — mas a velocidade linear v
          é tangente à trajetória e muda de direção a cada instante.
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Disco em MCU: ω constante, v tangencial variando de direção">
          <defs>
            <marker id="arr07a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr07b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* disco */}
          <circle cx="280" cy="115" r="90" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
          {/* raio */}
          <line x1="280" y1="115" x2="350" y2="40" stroke="#2563eb" strokeWidth="2" />
          <text x="325" y="78" textAnchor="middle" fontSize="13" fill="#2563eb">R</text>
          {/* ponto na borda */}
          <circle cx="350" cy="40" r="7" fill="#2563eb" />
          {/* vetor v tangencial */}
          <line x1="350" y1="40" x2="430" y2="60" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr07b)" />
          <text x="455" y="50" textAnchor="start" fontSize="13" fill="#dc2626">v = R·ω</text>
          {/* arco ω */}
          <path d="M 310 85 A 30 30 0 0 1 280 55" fill="none" stroke="#16a34a" strokeWidth="2" />
          <text x="320" y="65" textAnchor="start" fontSize="13" fill="#16a34a">ω</text>
          {/* ângulo θ */}
          <line x1="280" y1="115" x2="280" y2="25" stroke="#64748b" strokeWidth="1" strokeDasharray="5 3" />
          <text x="258" y="60" textAnchor="end" fontSize="12" fill="#64748b">θ</text>
          {/* relações */}
          <text x="520" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">v = R·ω</text>
          <text x="520" y="120" textAnchor="middle" fontSize="13" fill="#0f172a">at = R·α</text>
          <text x="520" y="140" textAnchor="middle" fontSize="13" fill="#0f172a">arc = R·θ</text>
          <text x="520" y="160" textAnchor="middle" fontSize="13" fill="#0f172a">T = 2π/ω = 1/f</text>
          <text x="350" y="215" textAnchor="middle" fontSize="13" fill="#475569">v é sempre tangente ao círculo — direção muda a cada instante</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Transmissão de movimento: polias e engrenagens">
          <defs>
            <marker id="arr07c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#7c3aed" />
            </marker>
          </defs>
          {/* polia grande */}
          <circle cx="200" cy="100" r="70" fill="#f3f4f6" stroke="#4b5563" strokeWidth="2" />
          <text x="200" y="97" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">R₁ = 70</text>
          <text x="200" y="112" textAnchor="middle" fontSize="12" fill="#4b5563">ω₁, f₁</text>
          {/* correia */}
          <line x1="200" y1="30" x2="490" y2="30" stroke="#1e293b" strokeWidth="3" />
          <line x1="200" y1="170" x2="490" y2="170" stroke="#1e293b" strokeWidth="3" />
          {/* polia pequena */}
          <circle cx="530" cy="100" r="40" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="530" y="97" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">R₂ = 40</text>
          <text x="530" y="112" textAnchor="middle" fontSize="12" fill="#2563eb">ω₂, f₂</text>
          {/* velocidade tangencial igual */}
          <text x="350" y="20" textAnchor="middle" fontSize="13" fill="#7c3aed">v₁ = v₂ (correia)</text>
          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">R₁·ω₁ = R₂·ω₂ → f₁/f₂ = R₂/R₁ → polia menor gira mais rápido</text>
        </svg>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Velocidade Tangencial de uma Roda"
          statement={
            <p>
              Uma roda de raio <strong>R = 0,5 m</strong> gira com velocidade angular
              <strong> ω = 10 rad/s</strong>. Qual é a velocidade tangencial de um ponto
              na borda da roda?
            </p>
          }
          options={[
            { letter: "a", text: "5 m/s", correct: true },
            { letter: "b", text: "10 m/s" },
            { letter: "c", text: "20 m/s" },
            { letter: "d", text: "0,05 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"v = \\omega \\cdot R = 10 \\times 0{,}5 = 5\\text{ m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Aceleração Centrípeta em Curva"
          statement={
            <p>
              Um carro percorre uma curva circular de raio <strong>R = 100 m</strong> com
              velocidade constante de <strong>v = 20 m/s</strong>. Calcule a aceleração
              centrípeta.
            </p>
          }
          options={[
            { letter: "a", text: "2 m/s²" },
            { letter: "b", text: "4 m/s²", correct: true },
            { letter: "c", text: "10 m/s²" },
            { letter: "d", text: "0,2 m/s²" },
          ]}
          resolution={
            <>
              <M block={true}>{"a_c = \\frac{v^2}{R} = \\frac{20^2}{100} = \\frac{400}{100} = 4\\text{ m/s}^2"}</M>
              <p>A força centrípeta (atrito dos pneus) para um carro de 1000 kg seria:
                <M>{" F_c = 1000 \\times 4 = 4000\\text{ N}"}</M>.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Motor a 3000 rpm — Velocidade na Borda"
          statement={
            <p>
              Um motor opera a <strong>3000 rpm</strong>. Calcule a velocidade angular ω em
              rad/s e a velocidade tangencial na borda de um disco de raio
              <strong> r = 0,2 m</strong>.
            </p>
          }
          options={[
            { letter: "a", text: "ω ≈ 314 rad/s e v ≈ 62,8 m/s", correct: true },
            { letter: "b", text: "ω ≈ 3000 rad/s e v ≈ 600 m/s" },
            { letter: "c", text: "ω ≈ 50 rad/s e v ≈ 10 m/s" },
            { letter: "d", text: "ω ≈ 100 rad/s e v ≈ 20 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\omega = \\frac{3000 \\times \\pi}{30} = 100\\pi \\approx 314\\text{ rad/s}"}</M>
              <M block={true}>{"v = \\omega R = 314 \\times 0{,}2 \\approx 62{,}8\\text{ m/s} = 226\\text{ km/h}"}</M>
              <p>Impressionante: a borda do disco se move a 226 km/h mesmo com o motor estacionário!</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Brinquedo de Parque — Centrípeta (ENEM)"
          statement={
            <p>
              Um brinquedo de parque coloca os passageiros em movimento circular horizontal
              com raio <strong>R = 5 m</strong> e período <strong>T = 2 s</strong>. Calcule
              a velocidade linear e a aceleração centrípeta dos passageiros.
            </p>
          }
          options={[
            { letter: "a", text: "v ≈ 15,7 m/s e ac ≈ 49,3 m/s²", correct: true },
            { letter: "b", text: "v ≈ 10 m/s e ac ≈ 20 m/s²" },
            { letter: "c", text: "v ≈ 5 m/s e ac ≈ 5 m/s²" },
            { letter: "d", text: "v ≈ 31,4 m/s e ac ≈ 197 m/s²" },
          ]}
          resolution={
            <>
              <M block={true}>{"v = \\frac{2\\pi R}{T} = \\frac{2\\pi \\times 5}{2} = 5\\pi \\approx 15{,}7\\text{ m/s}"}</M>
              <M block={true}>{"a_c = \\frac{v^2}{R} = \\frac{(5\\pi)^2}{5} = \\frac{25\\pi^2}{5} = 5\\pi^2 \\approx 49{,}3\\text{ m/s}^2"}</M>
              <p>
                Isso é aproximadamente <M>{"49{,}3/10 \\approx 5g"}</M>! Os passageiros sentem uma
                força centrípeta cerca de 5 vezes seu peso — daí a sensação intensa no brinquedo.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Satélite em Órbita Circular (ENEM)"
          statement={
            <p>
              Um satélite de comunicações orbita a Terra em trajetória circular com raio
              <strong> R = 6800 km</strong> e período <strong>T = 90 min</strong>. Calcule a
              velocidade orbital em km/s.
            </p>
          }
          options={[
            { letter: "a", text: "v ≈ 5,0 km/s" },
            { letter: "b", text: "v ≈ 7,9 km/s", correct: true },
            { letter: "c", text: "v ≈ 3,0 km/s" },
            { letter: "d", text: "v ≈ 11,2 km/s" },
          ]}
          resolution={
            <>
              <p>
                Convertendo: <M>{"R = 6800\\text{ km} = 6{,}8 \\times 10^6\\text{ m}"}</M>;
                <M>{" T = 90\\text{ min} = 5400\\text{ s}"}</M>.
              </p>
              <M block={true}>{"v = \\frac{2\\pi R}{T} = \\frac{2\\pi \\times 6{,}8 \\times 10^6}{5400} \\approx \\frac{4{,}27 \\times 10^7}{5400} \\approx 7{,}9 \\times 10^3\\text{ m/s}"}</M>
              <M block={true}>{"v \\approx 7{,}9\\text{ km/s} = 28440\\text{ km/h}"}</M>
              <p>
                A ISS orbita a cerca de 7,66 km/s — consistente com este valor. Essa velocidade é
                necessária para que a queda gravitacional do satélite corresponda exatamente à
                curvatura da Terra.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
