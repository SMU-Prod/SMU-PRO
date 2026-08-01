"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 23</span>
          <h1>Calorimetria I: Calor Sensível, Latente e Mudanças de Estado</h1>
          <p>
            Estude o calor como energia em trânsito, a equação fundamental do
            calor sensível Q = m·c·ΔT, o conceito de calor latente nas mudanças
            de fase e a curva de aquecimento completa de uma substância pura.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Calor: Energia em Trânsito</h2>
        <p>
          Calor não é uma propriedade que um corpo possui, mas sim a energia
          que flui entre dois sistemas em contato térmico por causa de uma
          diferença de temperatura. O fluxo ocorre sempre do corpo mais quente
          para o mais frio, cessando no equilíbrio térmico. Calor se mede em
          joules (SI) ou calorias (1&nbsp;cal = 4,18&nbsp;J).
        </p>
        <div className="lesson-highlight">
          <h3>Tipos de calor</h3>
          <p>
            <strong>Calor sensível:</strong> altera a temperatura sem mudar o
            estado físico. <strong>Calor latente:</strong> muda o estado físico
            sem alterar a temperatura.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Calor Sensível</span>
        <h2>2. Calor Sensível: Q = m · c · ΔT</h2>
        <p>
          O calor sensível é calculado pela equação fundamental da calorimetria.
          Cada substância possui um calor específico próprio que indica a
          quantidade de calor necessária para elevar 1&nbsp;g (ou 1&nbsp;kg) em
          1&nbsp;°C (ou 1&nbsp;K).
        </p>
        <M block={true}>{"Q = m \\cdot c \\cdot \\Delta T"}</M>
        <p>
          onde <M>{"m"}</M> é a massa (g ou kg), <M>{"c"}</M> é o calor
          específico (cal/g·°C ou J/kg·K) e <M>{"\\Delta T = T_f - T_i"}</M>
          é a variação de temperatura. O sinal de Q indica a direção: Q &gt; 0
          (corpo recebe calor e aquece), Q &lt; 0 (corpo cede calor e esfria).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades das Substâncias</span>
        <h2>3. Capacidade Térmica C = m · c</h2>
        <p>
          A capacidade térmica C de um corpo é a quantidade de calor necessária
          para variar sua temperatura em 1&nbsp;°C. Depende tanto do material
          quanto da massa do corpo — é uma propriedade extensiva.
        </p>
        <M block={true}>{"C = m \\cdot c \\qquad Q = C \\cdot \\Delta T"}</M>
        <div className="lesson-highlight">
          <h3>Distinção importante</h3>
          <p>
            O calor específico c é uma propriedade intensiva do material
            (independe da massa). A capacidade térmica C é extensiva: duas
            peças iguais do mesmo material têm o dobro da capacidade térmica de
            uma peça só.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela de Materiais</span>
        <h2>4. Calor Específico c das Substâncias</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Substância</th>
                <th>c (cal/g·°C)</th>
                <th>c (J/kg·K)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Água líquida</td><td>1,00</td><td>4 180</td></tr>
              <tr><td>Gelo</td><td>0,50</td><td>2 090</td></tr>
              <tr><td>Vapor d'água</td><td>0,48</td><td>2 010</td></tr>
              <tr><td>Alumínio</td><td>0,22</td><td>920</td></tr>
              <tr><td>Ferro</td><td>0,11</td><td>460</td></tr>
              <tr><td>Cobre</td><td>0,093</td><td>390</td></tr>
              <tr><td>Chumbo</td><td>0,031</td><td>130</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A água tem o maior calor específico entre os líquidos comuns, o que
          explica sua importância como regulador térmico em organismos vivos e
          no clima da Terra.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mudanças de Estado</span>
        <h2>5. Calor Latente: Q = m · L</h2>
        <p>
          Durante uma mudança de estado físico, a temperatura permanece
          constante enquanto o calor recebido (ou cedido) é usado para
          reorganizar as ligações moleculares. Esse calor é o calor latente L,
          característico de cada substância e de cada transição.
        </p>
        <M block={true}>{"Q = m \\cdot L"}</M>
        <p>
          O sinal é positivo quando a substância recebe calor (fusão,
          vaporização, sublimação) e negativo quando cede (solidificação,
          condensação).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fusão e Solidificação</span>
        <h2>6. Fusão e Solidificação da Água</h2>
        <p>
          A fusão do gelo ocorre a 0&nbsp;°C e exige o calor latente de fusão
          L_f. A solidificação libera exatamente a mesma quantidade de calor
          ao ambiente.
        </p>
        <M block={true}>{"L_f(\\text{gelo}) = 80\\,{\\rm cal/g} = 336\\,{\\rm kJ/kg}"}</M>
        <div className="lesson-highlight">
          <h3>Energia para fundir 1 kg de gelo</h3>
          <M block={true}>{"Q = 1000\\,{\\rm g} \\times 80\\,{\\rm cal/g} = 80\\,000\\,{\\rm cal} = 80\\,{\\rm kcal}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vaporização e Condensação</span>
        <h2>7. Vaporização e Condensação da Água</h2>
        <p>
          A vaporização da água a 100&nbsp;°C (ebulição à pressão atmosférica)
          exige um calor latente muito maior que a fusão, pois as moléculas
          precisam se separar completamente para formar o estado gasoso.
        </p>
        <M block={true}>{"L_v(\\text{água}) = 540\\,{\\rm cal/g} = 2260\\,{\\rm kJ/kg}"}</M>
        <p>
          O vapor ao condensar libera 540&nbsp;cal/g — por isso queimaduras por
          vapor são muito mais graves que por água a 100&nbsp;°C: o vapor
          entrega calor latente adicional ao entrar em contato com a pele.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Curva de Aquecimento</span>
        <h2>8. Diagrama T × Q: Curva de Aquecimento da Água</h2>
        <p>
          O gráfico abaixo mostra a temperatura em função do calor total
          fornecido a 1&nbsp;g de água, partindo de −20&nbsp;°C (gelo) até
          120&nbsp;°C (vapor superaquecido). Os segmentos inclinados
          correspondem ao calor sensível; os patamares horizontais, ao calor
          latente.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 260" width="400" height="260" aria-label="Curva de aquecimento da água — T versus Q">
            {/* Axes */}
            <line x1="50" y1="220" x2="380" y2="220" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="220" x2="50" y2="20" stroke="#333" strokeWidth="2"/>
            <text x="390" y="224" fontSize="11" fill="#333">Q</text>
            <text x="30" y="20" fontSize="11" fill="#333">T(°C)</text>

            {/* Y axis labels */}
            <text x="35" y="214" fontSize="10" fill="#555" textAnchor="end">−20</text>
            <text x="35" y="178" fontSize="10" fill="#555" textAnchor="end">0</text>
            <text x="35" y="100" fontSize="10" fill="#555" textAnchor="end">100</text>
            <text x="35" y="60" fontSize="10" fill="#555" textAnchor="end">120</text>

            {/* Horizontal guide lines */}
            <line x1="47" y1="178" x2="370" y2="178" stroke="#90caf9" strokeWidth="1" strokeDasharray="4,3"/>
            <line x1="47" y1="100" x2="370" y2="100" stroke="#ef9a9a" strokeWidth="1" strokeDasharray="4,3"/>

            {/* Segment 1: Aquecimento do gelo (−20→0°C) */}
            <line x1="55" y1="214" x2="100" y2="178" stroke="#5c6bc0" strokeWidth="2.5"/>
            <text x="62" y="200" fontSize="9" fill="#5c6bc0">gelo</text>

            {/* Segment 2: Fusão (plateau at 0°C) */}
            <line x1="100" y1="178" x2="160" y2="178" stroke="#42a5f5" strokeWidth="2.5"/>
            <text x="120" y="172" fontSize="9" fill="#1565c0">fusão</text>

            {/* Segment 3: Aquecimento da água (0→100°C) */}
            <line x1="160" y1="178" x2="230" y2="100" stroke="#26a69a" strokeWidth="2.5"/>
            <text x="180" y="148" fontSize="9" fill="#00695c">água</text>

            {/* Segment 4: Vaporização (plateau at 100°C) */}
            <line x1="230" y1="100" x2="340" y2="100" stroke="#ef5350" strokeWidth="2.5"/>
            <text x="270" y="94" fontSize="9" fill="#c62828">vaporização</text>

            {/* Segment 5: Aquecimento do vapor */}
            <line x1="340" y1="100" x2="370" y2="60" stroke="#ab47bc" strokeWidth="2.5"/>
            <text x="348" y="85" fontSize="9" fill="#6a1b9a">vapor</text>

            {/* X axis ticks & labels */}
            <line x1="100" y1="220" x2="100" y2="225" stroke="#333" strokeWidth="1"/>
            <line x1="160" y1="220" x2="160" y2="225" stroke="#333" strokeWidth="1"/>
            <line x1="230" y1="220" x2="230" y2="225" stroke="#333" strokeWidth="1"/>
            <line x1="340" y1="220" x2="340" y2="225" stroke="#333" strokeWidth="1"/>
            <text x="100" y="234" fontSize="9" textAnchor="middle" fill="#555">Q₁</text>
            <text x="160" y="234" fontSize="9" textAnchor="middle" fill="#555">Q₂</text>
            <text x="230" y="234" fontSize="9" textAnchor="middle" fill="#555">Q₃</text>
            <text x="340" y="234" fontSize="9" textAnchor="middle" fill="#555">Q₄</text>
          </svg>
          <figcaption>
            Curva de aquecimento da água (T × Q): segmentos inclinados = calor
            sensível; patamares horizontais = calor latente (fusão a 0&nbsp;°C
            e vaporização a 100&nbsp;°C).
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transições de Fase</span>
        <h2>9. Tabela Completa: Estados e Transições</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Transição</th>
                <th>De</th>
                <th>Para</th>
                <th>Calor</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Fusão</td><td>Sólido</td><td>Líquido</td><td>Recebe (+L)</td></tr>
              <tr><td>Solidificação</td><td>Líquido</td><td>Sólido</td><td>Cede (−L)</td></tr>
              <tr><td>Vaporização</td><td>Líquido</td><td>Gasoso</td><td>Recebe (+L)</td></tr>
              <tr><td>Condensação</td><td>Gasoso</td><td>Líquido</td><td>Cede (−L)</td></tr>
              <tr><td>Sublimação</td><td>Sólido</td><td>Gasoso</td><td>Recebe (+L)</td></tr>
              <tr><td>Ressublimação</td><td>Gasoso</td><td>Sólido</td><td>Cede (−L)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenômeno Especial</span>
        <h2>10. Sublimação: Sólido Direto para Vapor</h2>
        <p>
          A sublimação ocorre quando uma substância passa diretamente do estado
          sólido para o gasoso, sem passar pelo líquido. Isso acontece quando
          a pressão é inferior à do ponto triplo da substância.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos de sublimação</h3>
          <p>
            Gelo seco (CO₂ sólido): sublima a −78,5&nbsp;°C à pressão
            atmosférica. Naftalina: odor intenso pois sublima lentamente à
            temperatura ambiente. Gelo comum pode sublimar em dias secos e frios
            (roupa gelada que seca ao ar livre abaixo de 0&nbsp;°C).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Q_s</span>
            <h3>Calor sensível</h3>
            <M block={true}>{"Q = m \\cdot c \\cdot \\Delta T"}</M>
          </div>
          <div className="math-card">
            <span>C</span>
            <h3>Capacidade térmica</h3>
            <M block={true}>{"C = m \\cdot c"}</M>
          </div>
          <div className="math-card">
            <span>Q_L</span>
            <h3>Calor latente</h3>
            <M block={true}>{"Q = m \\cdot L"}</M>
          </div>
          <div className="math-card">
            <span>L_f</span>
            <h3>Fusão do gelo</h3>
            <M block={true}>{"80\\,{\\rm cal/g}"}</M>
          </div>
          <div className="math-card">
            <span>L_v</span>
            <h3>Vaporização da água</h3>
            <M block={true}>{"540\\,{\\rm cal/g}"}</M>
          </div>
          <div className="math-card">
            <span>Q_T</span>
            <h3>Calor total</h3>
            <M block={true}>{"\\Sigma Q_s + \\Sigma Q_L"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Calorimetria</span>
        <h2>Síntese Visual: Calor Sensível, Latente e Mudanças de Estado</h2>
        <p>
          O gráfico temperatura × calor fornecido é a representação mais cobrada
          em calorimetria no ENEM — cada trecho revela um processo diferente.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Gráfico T × Q: calor sensível (subida) e latente (platô)">
          <defs>
            <marker id="arr23a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixos */}
          <line x1="60" y1="190" x2="650" y2="190" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr23a)" />
          <line x1="60" y1="190" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr23a)" />
          <text x="660" y="194" textAnchor="start" fontSize="13" fill="#1e293b">Q</text>
          <text x="48" y="18" textAnchor="end" fontSize="13" fill="#1e293b">T</text>
          {/* trecho sólido aquecendo */}
          <line x1="60" y1="170" x2="160" y2="130" stroke="#2563eb" strokeWidth="2.5" />
          <text x="110" y="143" textAnchor="middle" fontSize="12" fill="#2563eb">sensível (sólido)</text>
          {/* platô fusão */}
          <line x1="160" y1="130" x2="300" y2="130" stroke="#dc2626" strokeWidth="2.5" />
          <text x="230" y="120" textAnchor="middle" fontSize="12" fill="#dc2626">latente fusão (platô)</text>
          <text x="230" y="108" textAnchor="middle" fontSize="11" fill="#dc2626">ΔT = 0</text>
          {/* trecho líquido aquecendo */}
          <line x1="300" y1="130" x2="420" y2="80" stroke="#2563eb" strokeWidth="2.5" />
          <text x="365" y="95" textAnchor="middle" fontSize="12" fill="#2563eb">sensível (líquido)</text>
          {/* platô vaporização */}
          <line x1="420" y1="80" x2="600" y2="80" stroke="#dc2626" strokeWidth="2.5" />
          <text x="510" y="70" textAnchor="middle" fontSize="12" fill="#dc2626">latente vaporização</text>
          {/* marcas T */}
          <line x1="55" y1="130" x2="65" y2="130" stroke="#1e293b" strokeWidth="1" />
          <text x="50" y="134" textAnchor="end" fontSize="11" fill="#1e293b">T<tspan baselineShift="sub" fontSize="9">fus</tspan></text>
          <line x1="55" y1="80" x2="65" y2="80" stroke="#1e293b" strokeWidth="1" />
          <text x="50" y="84" textAnchor="end" fontSize="11" fill="#1e293b">T<tspan baselineShift="sub" fontSize="9">vap</tspan></text>
          <text x="350" y="210" textAnchor="middle" fontSize="13" fill="#0f172a">Q sensível = m·c·ΔT | Q latente = m·L</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Mudanças de estado: nomes dos processos">
          {/* diagrama circular dos estados */}
          {/* sólido */}
          <ellipse cx="180" cy="90" rx="100" ry="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="180" y="94" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">Sólido</text>
          {/* líquido */}
          <ellipse cx="520" cy="90" rx="100" ry="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="520" y="94" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">Líquido</text>
          {/* gasoso */}
          <ellipse cx="350" cy="150" rx="100" ry="30" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="350" y="154" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">Gasoso</text>
          {/* fusão / solidificação */}
          <text x="350" y="72" textAnchor="middle" fontSize="12" fill="#dc2626">fusão →</text>
          <text x="350" y="84" textAnchor="middle" fontSize="12" fill="#2563eb">← solidificação</text>
          {/* evaporação / condensação */}
          <text x="460" y="128" textAnchor="middle" fontSize="11" fill="#dc2626">evaporação→</text>
          <text x="460" y="142" textAnchor="middle" fontSize="11" fill="#16a34a">←condensação</text>
          {/* sublimação */}
          <text x="240" y="128" textAnchor="middle" fontSize="11" fill="#7c3aed">sublimação→</text>
          <text x="240" y="142" textAnchor="middle" fontSize="11" fill="#7c3aed">←ressublimação</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Calor Sensível da Água"
          statement={
            <p>
              Quantas calorias são necessárias para elevar a temperatura de
              200&nbsp;g de água de 20&nbsp;°C a 80&nbsp;°C?
              (c<sub>água</sub> = 1&nbsp;cal/g·°C)
            </p>
          }
          options={[
            { letter: "a", text: "6 000 cal" },
            { letter: "b", text: "12 000 cal", correct: true },
            { letter: "c", text: "16 000 cal" },
            { letter: "d", text: "4 000 cal" },
          ]}
          resolution={
            <>
              <M block={true}>{"Q = m \\cdot c \\cdot \\Delta T = 200 \\times 1 \\times (80-20)"}</M>
              <M block={true}>{"Q = 200 \\times 60 = 12\\,000\\,{\\rm cal}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Gelo até Água a 0°C"
          statement={
            <p>
              Calcule o calor necessário para transformar 500&nbsp;g de gelo a
              −20&nbsp;°C em água líquida a 0&nbsp;°C.
              (c<sub>gelo</sub> = 0,5&nbsp;cal/g·°C; L_f = 80&nbsp;cal/g)
            </p>
          }
          options={[
            { letter: "a", text: "45 000 cal", correct: true },
            { letter: "b", text: "40 000 cal" },
            { letter: "c", text: "55 000 cal" },
            { letter: "d", text: "5 000 cal" },
          ]}
          resolution={
            <>
              <p>Etapa 1 — aquecer o gelo de −20&nbsp;°C a 0&nbsp;°C:</p>
              <M block={true}>{"Q_1 = 500 \\times 0{,}5 \\times 20 = 5\\,000\\,{\\rm cal}"}</M>
              <p>Etapa 2 — fundir o gelo a 0&nbsp;°C:</p>
              <M block={true}>{"Q_2 = 500 \\times 80 = 40\\,000\\,{\\rm cal}"}</M>
              <M block={true}>{"Q_{\\rm total} = 5\\,000 + 40\\,000 = 45\\,000\\,{\\rm cal}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Calor de Vaporização e Queimaduras"
          statement={
            <p>
              Explique por que 1&nbsp;g de vapor a 100&nbsp;°C causa queimadura
              mais grave que 1&nbsp;g de água a 100&nbsp;°C. Calcule a
              diferença de calor liberado ao resfriar ambos até 37&nbsp;°C
              (temperatura da pele). Use c<sub>água</sub> = 1&nbsp;cal/g·°C e
              L_v = 540&nbsp;cal/g.
            </p>
          }
          options={[
            { letter: "a", text: "O vapor libera 540 cal/g a mais que a água", correct: true },
            { letter: "b", text: "Ambos liberam a mesma quantidade de calor" },
            { letter: "c", text: "A água libera mais calor que o vapor" },
            { letter: "d", text: "O vapor resfria mais rápido, por isso queima menos" },
          ]}
          resolution={
            <>
              <p>Vapor (condensação + resfriamento):</p>
              <M block={true}>{"Q_{\\rm vapor} = 540 + 1\\times(100-37) = 540 + 63 = 603\\,{\\rm cal/g}"}</M>
              <p>Água líquida (apenas resfriamento):</p>
              <M block={true}>{"Q_{\\rm água} = 1\\times(100-37) = 63\\,{\\rm cal/g}"}</M>
              <p>Diferença: 603 − 63 = <strong>540&nbsp;cal/g</strong> a mais, todo proveniente do calor latente de condensação.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Suor e Termorregulação"
          statement={
            <p>
              Durante exercício intenso, o corpo humano evapora cerca de
              1&nbsp;L (1&nbsp;kg) de suor por hora. Sabendo que
              L_v = 2&nbsp;260&nbsp;kJ/kg, qual é a potência de resfriamento
              proporcionada pela sudorese?
            </p>
          }
          options={[
            { letter: "a", text: "628 W", correct: true },
            { letter: "b", text: "228 W" },
            { letter: "c", text: "1 130 W" },
            { letter: "d", text: "2 260 W" },
          ]}
          resolution={
            <>
              <M block={true}>{"Q = 1\\,{\\rm kg} \\times 2\\,260\\,{\\rm kJ/kg} = 2\\,260\\,{\\rm kJ}"}</M>
              <M block={true}>{"P = \\frac{Q}{t} = \\frac{2\\,260\\,000\\,{\\rm J}}{3\\,600\\,{\\rm s}} \\approx 628\\,{\\rm W}"}</M>
              <p>
                Essa potência equivale a um aquecedor doméstico operando em
                sentido inverso — mostra como a evaporação do suor é
                extremamente eficiente na termorregulação.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ciclo de Refrigeração Industrial"
          statement={
            <p>
              Um evaporador de câmara frigorífica utiliza um fluido refrigerante
              com L_v = 180&nbsp;kJ/kg. A vazão mássica é 0,05&nbsp;kg/s.
              Qual é a potência de refrigeração do evaporador (em kW)?
            </p>
          }
          options={[
            { letter: "a", text: "9,0 kW", correct: true },
            { letter: "b", text: "3,6 kW" },
            { letter: "c", text: "18,0 kW" },
            { letter: "d", text: "0,9 kW" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = \\dot{m} \\times L_v = 0{,}05\\,{\\rm kg/s} \\times 180\\,{\\rm kJ/kg}"}</M>
              <M block={true}>{"P = 9{,}0\\,{\\rm kJ/s} = 9{,}0\\,{\\rm kW}"}</M>
              <p>
                O evaporador absorve 9&nbsp;kW do ambiente refrigerado ao
                vaporizar o fluido — essa é a potência de resfriamento útil do
                sistema.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
