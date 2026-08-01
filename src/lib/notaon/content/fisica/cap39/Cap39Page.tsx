"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 39</span>
          <h1>Eletrostática II: Campo Elétrico e Potencial</h1>
          <p>
            O campo elétrico e o potencial elétrico são as ferramentas fundamentais para
            descrever o estado elétrico do espaço ao redor de cargas. Enquanto o campo é
            vetorial e determina a força sobre cargas de prova, o potencial é escalar e
            determina a energia potencial — juntos, formam a base da eletrostática avançada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Central</span>
        <h2>1. Campo Elétrico</h2>
        <p>
          O <strong>campo elétrico</strong> <M>{"\\vec{E}"}</M> em um ponto do espaço é
          definido como a força elétrica que atuaria sobre uma carga de prova positiva
          muito pequena <M>{"q_0"}</M>, dividida por essa carga:
        </p>
        <M block={true}>{"\\vec{E} = \\frac{\\vec{F}}{q_0} \\qquad \\Rightarrow \\qquad \\vec{F} = q_0 \\cdot \\vec{E}"}</M>
        <p>
          A unidade do campo elétrico é N/C = V/m. O campo é vetorial: tem magnitude,
          direção e sentido. Para cargas positivas o campo aponta para longe da carga;
          para negativas, aponta em direção à carga.
        </p>
        <div className="lesson-highlight">
          <h3>Campo vs Força</h3>
          <p>
            O campo elétrico existe independentemente da presença de carga de prova — é
            propriedade do espaço criada pelas cargas fonte. A força sobre uma carga q
            colocada no ponto é F = qE; o sinal de q determina se a força é paralela ou
            antiparalela ao campo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Carga Puntiforme</span>
        <h2>2. Campo de Carga Puntiforme</h2>
        <p>
          O campo elétrico criado por uma carga puntiforme Q a uma distância r é:
        </p>
        <M block={true}>{"E = k \\cdot \\frac{|Q|}{r^2} \\quad [\\text{N/C}]"}</M>
        <p>
          A magnitude diminui com o quadrado da distância (lei do inverso do quadrado).
          Para <M>{"Q > 0"}</M> o campo aponta radialmente para fora; para
          <M>{"Q < 0"}</M> aponta radialmente para dentro.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. Linhas de Campo Elétrico e Dipolo</h2>
        <p>
          As <strong>linhas de campo elétrico</strong> são curvas cujo vetor tangente em
          cada ponto coincide com a direção do campo. Elas partem de cargas positivas e
          terminam em negativas, nunca se cruzam, e sua densidade é proporcional à
          intensidade do campo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 440 190" width="440" height="190" aria-label="Linhas de campo elétrico">
            <defs>
              <marker id="aE" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#ef4444"/>
              </marker>
              <marker id="aN" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6"/>
              </marker>
              <marker id="aD" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#8b5cf6"/>
              </marker>
            </defs>
            {/* carga positiva */}
            <circle cx="65" cy="95" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="65" y="100" textAnchor="middle" fontSize="15" fill="#92400e">+</text>
            <text x="65" y="175" textAnchor="middle" fontSize="9" fill="#374151">carga +Q</text>
            <line x1="82" y1="95" x2="120" y2="95" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="78" y1="81" x2="112" y2="65" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="78" y1="109" x2="112" y2="125" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="65" y1="79" x2="65" y2="42" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="65" y1="111" x2="65" y2="148" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="52" y1="81" x2="18" y2="65" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="52" y1="109" x2="18" y2="125" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>
            <line x1="48" y1="95" x2="10" y2="95" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#aE)"/>

            {/* carga negativa */}
            <circle cx="220" cy="95" r="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="220" y="100" textAnchor="middle" fontSize="15" fill="#1e40af">−</text>
            <text x="220" y="175" textAnchor="middle" fontSize="9" fill="#374151">carga −Q</text>
            <line x1="258" y1="95" x2="238" y2="95" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="250" y1="68" x2="234" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="250" y1="122" x2="234" y2="110" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="220" y1="55" x2="220" y2="75" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="220" y1="135" x2="220" y2="115" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="190" y1="68" x2="206" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="190" y1="122" x2="206" y2="110" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>
            <line x1="182" y1="95" x2="202" y2="95" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#aN)"/>

            {/* dipolo */}
            <circle cx="360" cy="95" r="13" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="360" y="100" textAnchor="middle" fontSize="13" fill="#92400e">+</text>
            <circle cx="420" cy="95" r="13" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="420" y="100" textAnchor="middle" fontSize="13" fill="#1e40af">−</text>
            <path d="M 373 95 Q 390 65 407 95" fill="none" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#aD)"/>
            <path d="M 373 95 Q 390 125 407 95" fill="none" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#aD)"/>
            <line x1="373" y1="95" x2="407" y2="95" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#aD)"/>
            <text x="390" y="175" textAnchor="middle" fontSize="9" fill="#374151">dipolo elétrico</text>
          </svg>
          <figcaption>Linhas de campo: carga positiva (saindo), carga negativa (entrando) e dipolo elétrico</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Superposição</span>
        <h2>4. Princípio da Superposição de Campos</h2>
        <p>
          O campo elétrico total em um ponto devido a múltiplas cargas é a
          <strong> soma vetorial</strong> dos campos individuais de cada carga:
        </p>
        <M block={true}>{"\\vec{E}_{\\text{total}} = \\sum_i \\vec{E}_i = \\vec{E}_1 + \\vec{E}_2 + \\cdots + \\vec{E}_n"}</M>
        <p>
          Decompõe-se cada campo em componentes cartesianas
          (<M>{"E_x = E\\cos\\theta"}</M>, <M>{"E_y = E\\sin\\theta"}</M>),
          somam-se componente a componente, e recalcula-se o módulo e ângulo resultante.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Caso Especial</span>
        <h2>5. Campo Uniforme Entre Placas Paralelas</h2>
        <p>
          Entre as placas de um capacitor plano com separação d e tensão U, o campo
          elétrico é uniforme:
        </p>
        <M block={true}>{"E = \\frac{U}{d} \\quad [\\text{V/m}]"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 170" width="380" height="170" aria-label="Capacitor plano com campo uniforme">
            <defs>
              <marker id="arrowCap" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L0,7 L7,3.5 z" fill="#374151"/>
              </marker>
            </defs>
            <rect x="40" y="25" width="14" height="110" fill="#3b82f6" rx="3"/>
            <rect x="326" y="25" width="14" height="110" fill="#ef4444" rx="3"/>
            <text x="47" y="18" textAnchor="middle" fontSize="12" fill="#3b82f6" fontWeight="bold">−</text>
            <text x="333" y="18" textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="bold">+</text>
            <text x="47" y="155" textAnchor="middle" fontSize="9" fill="#3b82f6">placa (−)</text>
            <text x="333" y="155" textAnchor="middle" fontSize="9" fill="#ef4444">placa (+)</text>
            <line x1="326" y1="50" x2="57" y2="50" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowCap)"/>
            <line x1="326" y1="80" x2="57" y2="80" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowCap)"/>
            <line x1="326" y1="110" x2="57" y2="110" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowCap)"/>
            <text x="190" y="75" textAnchor="middle" fontSize="14" fill="#374151" fontWeight="bold">{"E = U/d"}</text>
            <line x1="54" y1="142" x2="326" y2="142" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
            <text x="190" y="158" textAnchor="middle" fontSize="10" fill="#6b7280">d</text>
          </svg>
          <figcaption>Capacitor plano: campo uniforme E = U/d entre as placas, perpendicular a elas</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalar</span>
        <h2>6. Potencial Elétrico</h2>
        <p>
          O <strong>potencial elétrico</strong> V em um ponto é a energia potencial
          elétrica por unidade de carga de prova positiva. Para uma carga puntiforme Q:
        </p>
        <M block={true}>{"V = k \\cdot \\frac{Q}{r} \\quad [\\text{Volt} = \\text{J/C}]"}</M>
        <p>
          O potencial é <strong>escalar</strong> — não tem direção. O potencial total de
          várias cargas é a soma algébrica dos potenciais individuais:
          <M block={true}>{"V_{\\text{total}} = V_1 + V_2 + \\cdots = \\sum_i k\\frac{Q_i}{r_i}"}</M>
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho e Energia</span>
        <h2>7. Diferença de Potencial (ddp)</h2>
        <p>
          A <strong>diferença de potencial</strong> (tensão) entre dois pontos A e B:
        </p>
        <M block={true}>{"U_{AB} = V_A - V_B = \\frac{\\tau_{A\\to B}}{q_0}"}</M>
        <p>
          O trabalho realizado pelo campo elétrico ao mover carga q de A até B:
        </p>
        <M block={true}>{"\\tau = q \\cdot (V_A - V_B) = q \\cdot U_{AB}"}</M>
        <div className="lesson-highlight">
          <h3>Elétron-volt (eV)</h3>
          <p>
            1 eV = energia adquirida por um elétron acelerado sob 1 V de ddp =
            1,6×10⁻¹⁹ J. É a unidade de energia mais usada em física atômica e nuclear.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação Fundamental</span>
        <h2>8. Relação Campo–Potencial</h2>
        <p>
          O campo elétrico é o gradiente negativo do potencial:
        </p>
        <M block={true}>{"E = -\\frac{\\Delta V}{\\Delta d} \\quad \\text{(campo aponta do maior para o menor potencial)}"}</M>
        <p>
          O campo aponta sempre na direção de maior decréscimo do potencial.
          Entre placas paralelas, <M>{"E = U/d"}</M> decorre diretamente desta relação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Geometria</span>
        <h2>9. Superfícies Equipotenciais</h2>
        <p>
          Uma <strong>superfície equipotencial</strong> é o conjunto de pontos com mesmo
          potencial. Propriedades:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "2rem" }}>
          <li>São sempre perpendiculares às linhas de campo elétrico.</li>
          <li>O trabalho para mover uma carga sobre uma equipotencial é nulo.</li>
          <li>Para carga puntiforme: esferas concêntricas.</li>
          <li>Para campo uniforme: planos paralelos às placas.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Armazenamento</span>
        <h2>10. Capacitor: Capacitância e Energia</h2>
        <p>
          A <strong>capacitância</strong> mede a capacidade de armazenar carga por volt:
        </p>
        <M block={true}>{"C = \\frac{Q}{U} \\quad [\\text{Farad = C/V}]"}</M>
        <p>A energia armazenada no campo elétrico do capacitor é:</p>
        <M block={true}>{"E_C = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C} = \\frac{QU}{2}"}</M>
        <p>
          Para capacitor plano com placas de área A separadas por d no vácuo:
          <M block={true}>{"C = \\frac{\\varepsilon_0 \\cdot A}{d} \\quad (\\varepsilon_0 = 8{,}85\\times10^{-12}\\;\\text{F/m})"}</M>
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia</span>
        <h2>11. Energia Potencial Elétrica</h2>
        <p>
          A energia potencial elétrica de uma carga q em ponto de potencial V:
        </p>
        <M block={true}>{"E_p = q \\cdot V"}</M>
        <p>Para um par de cargas puntiformes:</p>
        <M block={true}>{"E_p = k \\cdot \\frac{q_1 \\cdot q_2}{r}"}</M>
        <p>
          Quando carga positiva se move de maior para menor potencial, a energia potencial
          diminui e a cinética aumenta (princípio da conservação de energia).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>E</span>
            <h3>Campo Puntiforme</h3>
            <M block={true}>{"E = k\\frac{|Q|}{r^2}"}</M>
          </div>
          <div className="math-card">
            <span>V</span>
            <h3>Potencial</h3>
            <M block={true}>{"V = k\\frac{Q}{r}"}</M>
          </div>
          <div className="math-card">
            <span>U</span>
            <h3>Campo Uniforme</h3>
            <M block={true}>{"E = \\frac{U}{d}"}</M>
          </div>
          <div className="math-card">
            <span>C</span>
            <h3>Energia Capacitor</h3>
            <M block={true}>{"E_C = \\tfrac{1}{2}CU^2"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Campo Elétrico</span>
        <h2>Síntese Visual: Campo Elétrico e Potencial</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Linhas de campo elétrico de carga positiva e negativa">
          <defs>
            <marker id="arr39a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr39b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* carga positiva */}
          <circle cx="175" cy="105" r="20" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="175" y="110" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#92400e">+</text>
          <text x="175" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">Carga positiva</text>
          {/* linhas saindo */}
          {[[175,60,175,25],[225,80,260,55],[240,105,275,105],[225,130,260,155],[175,150,175,185],[125,130,90,155],[110,105,75,105],[125,80,90,55]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr39a)" />
          ))}
          <text x="175" y="200" textAnchor="middle" fontSize="12" fill="#dc2626">saem da carga +</text>

          {/* carga negativa */}
          <circle cx="525" cy="105" r="20" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="525" y="110" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9d174d">−</text>
          <text x="525" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">Carga negativa</text>
          {/* linhas entrando */}
          {[[525,60,525,83],[575,80,548,93],[590,105,547,105],[575,130,548,117],[525,150,525,127],[475,130,502,117],[460,105,503,105],[475,80,502,93]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arr39b)" />
          ))}
          <text x="525" y="200" textAnchor="middle" fontSize="12" fill="#2563eb">entram na carga −</text>

          <text x="350" y="208" textAnchor="middle" fontSize="12" fill="#475569">E = k·|q|/d² | direção: afasta de + / aproxima de −</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Capacitor de placas paralelas: campo uniforme e potencial">
          <defs>
            <marker id="arr39c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* placa positiva */}
          <rect x="60" y="40" width="20" height="130" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="70" y="180" textAnchor="middle" fontSize="12" fill="#d97706">+</text>
          {/* placa negativa */}
          <rect x="460" y="40" width="20" height="130" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="470" y="180" textAnchor="middle" fontSize="12" fill="#db2777">−</text>
          {/* linhas de campo horizontais uniformes */}
          {[60,90,120,150].map((y,i) => (
            <line key={i} x1="80" y1={y} x2="458" y2={y} stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr39c)" />
          ))}
          <text x="270" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#dc2626">E = U/d (campo uniforme)</text>
          {/* distância d */}
          <line x1="80" y1="170" x2="460" y2="170" stroke="#475569" strokeWidth="1.5" />
          <text x="270" y="185" textAnchor="middle" fontSize="13" fill="#475569">d</text>
          {/* fórmulas laterais */}
          <text x="570" y="80" textAnchor="middle" fontSize="13" fill="#0f172a">U = E·d</text>
          <text x="570" y="100" textAnchor="middle" fontSize="13" fill="#0f172a">C = Q/U</text>
          <text x="570" y="120" textAnchor="middle" fontSize="13" fill="#0f172a">C = ε·A/d</text>
          <text x="570" y="140" textAnchor="middle" fontSize="13" fill="#0f172a">Ec = ½C·U²</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Fórmula</th><th>Unidade</th><th>Interpretação</th></tr>
          </thead>
          <tbody>
            <tr><td>Campo elétrico</td><td>E = F/q = k·|Q|/d²</td><td>N/C = V/m</td><td>Intensidade e direção da força por unidade de carga</td></tr>
            <tr><td>Potencial elétrico</td><td>V = k·Q/d</td><td>Volt (V)</td><td>Energia por unidade de carga positiva</td></tr>
            <tr><td>Diferença de potencial (ddp)</td><td>U = V₁ − V₂ = E·d</td><td>Volt (V)</td><td>Tensão; trabalho por carga: W = q·U</td></tr>
            <tr><td>Capacitância</td><td>C = Q/U</td><td>Farad (F)</td><td>Carga armazenada por volt</td></tr>
            <tr><td>Energia do capacitor</td><td>Ec = ½C·U²</td><td>Joule (J)</td><td>Energia elétrica armazenada no campo</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr><th>Superfície de potencial</th><th>Campo E</th><th>Relação</th></tr>
          </thead>
          <tbody>
            <tr><td>Superfícies equipotenciais</td><td>Perpendicular a E</td><td>E = −ΔV/Δd</td></tr>
            <tr><td>Carga em movimento paralelo a E</td><td>Trabalho ≠ 0</td><td>W = q·ΔV</td></tr>
            <tr><td>Carga em movimento ⊥ a E</td><td>Trabalho = 0</td><td>Superfície equipotencial</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr><th>Situação</th><th>Campo E</th><th>Potencial V</th></tr>
          </thead>
          <tbody>
            <tr><td>Carga pontual Q</td><td>E = k|Q|/r²</td><td>V = kQ/r</td></tr>
            <tr><td>Capacitor de placas planas</td><td>E = U/d (uniforme)</td><td>V linear entre placas</td></tr>
            <tr><td>Dentro de condutor em equilíbrio</td><td>E = 0</td><td>V = constante</td></tr>
            <tr><td>Superfície de condutor</td><td>E perpendicular à superfície</td><td>V = constante na superfície</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Campo de Carga Puntiforme"
          statement={
            <p>
              Uma carga Q = 2 μC está na origem. Calcule a intensidade do campo elétrico
              no ponto P a r = 0,3 m. (k = 9×10⁹ N·m²/C²)
            </p>
          }
          options={[
            { letter: "a", text: "2×10⁵ N/C", correct: true },
            { letter: "b", text: "2×10⁴ N/C" },
            { letter: "c", text: "6×10⁵ N/C" },
            { letter: "d", text: "2×10⁶ N/C" },
          ]}
          resolution={
            <>
              <M block={true}>{"E = k\\frac{|Q|}{r^2} = 9\\times10^9 \\times \\frac{2\\times10^{-6}}{(0{,}3)^2} = \\frac{18\\times10^3}{0{,}09} = 2\\times10^5\\;\\text{N/C}"}</M>
              <p>Resposta: <strong>a) 2×10⁵ N/C</strong></p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Superposição de Campos"
          statement={
            <p>
              Duas cargas iguais +4 μC estão em x = −0,5 m e x = +0,5 m. Calcule o
              campo elétrico resultante na origem. (k = 9×10⁹ N·m²/C²)
            </p>
          }
          options={[
            { letter: "a", text: "E = 0 (campos se cancelam por simetria)", correct: true },
            { letter: "b", text: "E = 2,88×10⁵ N/C na direção +x" },
            { letter: "c", text: "E = 1,44×10⁵ N/C na direção −x" },
            { letter: "d", text: "E = 5,76×10⁵ N/C na direção +y" },
          ]}
          resolution={
            <>
              <p>Cada carga cria campo de mesma magnitude na origem (r = 0,5 m):</p>
              <M block={true}>{"E_1 = E_2 = 9\\times10^9 \\times \\frac{4\\times10^{-6}}{0{,}25} = 1{,}44\\times10^5\\;\\text{N/C}"}</M>
              <p>
                A carga em x = −0,5 m cria campo na direção +x; a carga em x = +0,5 m
                cria campo na direção −x. Iguais em módulo, opostos em sentido →
                <strong> E_resultante = 0</strong>.
              </p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Capacitor — Campo, Força e Trabalho"
          statement={
            <p>
              Placas separadas por d = 0,02 m, com U = 200 V. (a) Encontre E.
              (b) Carga q = 2 μC entre as placas: calcule a força. (c) Calcule o
              trabalho para mover q de uma placa à outra.
            </p>
          }
          options={[
            { letter: "a", text: "E = 10⁴ V/m; F = 0,02 N; W = 4×10⁻⁴ J", correct: true },
            { letter: "b", text: "E = 10³ V/m; F = 2×10⁻³ N; W = 4×10⁻⁵ J" },
            { letter: "c", text: "E = 10⁵ V/m; F = 0,2 N; W = 4×10⁻³ J" },
            { letter: "d", text: "E = 10⁴ V/m; F = 0,04 N; W = 8×10⁻⁴ J" },
          ]}
          resolution={
            <>
              <M block={true}>{"E = \\frac{U}{d} = \\frac{200}{0{,}02} = 10^4\\;\\text{V/m}"}</M>
              <M block={true}>{"F = qE = 2\\times10^{-6} \\times 10^4 = 0{,}02\\;\\text{N}"}</M>
              <M block={true}>{"W = q \\cdot U = 2\\times10^{-6} \\times 200 = 4\\times10^{-4}\\;\\text{J}"}</M>
              <p>Resposta: <strong>a)</strong></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Tubo de Raios Catódicos (CRT)"
          statement={
            <p>
              Em um CRT antigo, elétrons são acelerados por ddp = 5.000 V. Calcule
              a energia cinética adquirida em joules e eV, e estime a velocidade final.
              (m_e = 9,11×10⁻³¹ kg; e = 1,6×10⁻¹⁹ C)
            </p>
          }
          options={[
            { letter: "a", text: "Ec = 8×10⁻¹⁶ J = 5000 eV; v ≈ 4,2×10⁷ m/s", correct: true },
            { letter: "b", text: "Ec = 8×10⁻¹⁶ J = 5 eV; v ≈ 10⁶ m/s" },
            { letter: "c", text: "Ec = 5×10⁻¹⁹ J = 3,1 eV; v ≈ 10⁶ m/s" },
            { letter: "d", text: "Ec = 1,6×10⁻¹⁵ J = 10000 eV; v ≈ 6×10⁷ m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"E_c = e \\cdot U = 1{,}6\\times10^{-19} \\times 5000 = 8\\times10^{-16}\\;\\text{J} = 5000\\;\\text{eV}"}</M>
              <M block={true}>{"v = \\sqrt{\\frac{2E_c}{m_e}} = \\sqrt{\\frac{2 \\times 8\\times10^{-16}}{9{,}11\\times10^{-31}}} \\approx 4{,}2\\times10^7\\;\\text{m/s}"}</M>
              <p>Isso corresponde a cerca de 14% da velocidade da luz. Resposta: <strong>a)</strong></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Desfibrilador Cardíaco"
          statement={
            <p>
              Um desfibrilador usa capacitor C = 200 μF carregado a U = 2.500 V.
              Calcule: (a) carga Q armazenada; (b) energia E_C; (c) potência média
              se a descarga ocorre em Δt = 10 ms.
            </p>
          }
          options={[
            { letter: "a", text: "Q = 0,5 C; E_C = 625 J; P = 62.500 W", correct: true },
            { letter: "b", text: "Q = 0,05 C; E_C = 62,5 J; P = 6.250 W" },
            { letter: "c", text: "Q = 5 C; E_C = 6.250 J; P = 625.000 W" },
            { letter: "d", text: "Q = 0,5 C; E_C = 312,5 J; P = 31.250 W" },
          ]}
          resolution={
            <>
              <M block={true}>{"Q = C \\cdot U = 200\\times10^{-6} \\times 2500 = 0{,}5\\;\\text{C}"}</M>
              <M block={true}>{"E_C = \\tfrac{1}{2}CU^2 = \\tfrac{1}{2} \\times 200\\times10^{-6} \\times 2500^2 = 625\\;\\text{J}"}</M>
              <M block={true}>{"P = \\frac{E_C}{\\Delta t} = \\frac{625}{0{,}010} = 62{.}500\\;\\text{W}"}</M>
              <p>Energia suficiente para reiniciar o ritmo cardíaco em fibrilação. Resposta: <strong>a)</strong></p>
            </>
          }
        />
      </section>
    </article>
  );
}
