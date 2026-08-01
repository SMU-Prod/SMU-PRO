"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 26</span>
          <h1>Gases Perfeitos: Leis Gasosas e Equação de Clapeyron</h1>
          <p>
            Estude o modelo do gás ideal, as variáveis de estado P, V e T, as
            três transformações particulares (Boyle, Charles-Gay-Lussac e
            Gay-Lussac isocórica), a equação geral dos gases e a equação de
            Clapeyron PV = nRT. Interprete os processos em diagramas P×V.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelo Teórico</span>
        <h2>1. Modelo do Gás Perfeito</h2>
        <p>
          O gás perfeito (ideal) é uma idealização matemática com as seguintes
          hipóteses: (a) as moléculas são partículas puntiformes (sem volume
          próprio); (b) não há forças de atração ou repulsão entre elas fora
          das colisões; (c) todas as colisões são perfeitamente elásticas; (d)
          o movimento é caótico e aleatório. Gases reais se aproximam desse
          comportamento em condições de baixa pressão e alta temperatura.
        </p>
        <div className="lesson-highlight">
          <h3>Variáveis de estado do gás</h3>
          <p>
            <strong>Pressão P</strong> (Pa ou atm) — <strong>Volume V</strong>
            (m³ ou L) — <strong>Temperatura T</strong> (sempre em Kelvin nas
            equações) — <strong>Quantidade n</strong> (mol)
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Boyle-Mariotte</span>
        <h2>2. Processo Isotérmico: PV = constante</h2>
        <p>
          A Lei de Boyle-Mariotte descreve a transformação a temperatura
          constante (isotérmica) de uma massa fixa de gás ideal. Ao comprimir
          o gás (V↓), a pressão aumenta proporcionalmente (P↑), pois as
          moléculas colidem mais frequentemente com as paredes em volume menor.
        </p>
        <M block={true}>{"P_1 V_1 = P_2 V_2 \\qquad (T = \\text{constante})"}</M>
        <p>
          No diagrama P×V, a transformação isotérmica é representada por uma
          hipérbole equilátera. Cada temperatura define uma hipérbole diferente
          (isoterma).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Charles-Gay-Lussac</span>
        <h2>3. Processo Isobárico: V/T = constante</h2>
        <p>
          Mantendo a pressão constante (processo isobárico), o volume de um gás
          ideal é diretamente proporcional à temperatura absoluta. Aquecendo o
          gás, as moléculas colidem com mais energia nas paredes; para manter P
          constante, o volume aumenta.
        </p>
        <M block={true}>{"\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\qquad (P = \\text{constante})"}</M>
        <p>
          No gráfico V×T, a transformação isobárica é uma reta que, se
          extrapolada, passa pela origem (T = 0&nbsp;K, V = 0).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Gay-Lussac</span>
        <h2>4. Processo Isocórico: P/T = constante</h2>
        <p>
          Mantendo o volume constante (processo isocórico ou isovolumétrico),
          a pressão é diretamente proporcional à temperatura absoluta. É o que
          ocorre em recipientes rígidos como cilindros selados e pneus (em
          primeira aproximação).
        </p>
        <M block={true}>{"\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\qquad (V = \\text{constante})"}</M>
        <div className="lesson-highlight">
          <h3>Cuidado com as unidades</h3>
          <p>
            A temperatura DEVE estar em Kelvin. Use sempre T(K) = θ(°C) + 273.
            Pressão e volume podem ser em qualquer unidade coerente, desde que
            sejam iguais nos dois estados comparados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação Geral</span>
        <h2>5. Equação Geral dos Gases</h2>
        <p>
          Combinando as três leis particulares para uma massa fixa de gás ideal,
          obtemos a equação geral que relaciona dois estados quaisquer:
        </p>
        <M block={true}>{"\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}"}</M>
        <p>
          Quando uma das variáveis é mantida constante, recuperamos as leis
          particulares: fixar T → Boyle; fixar P → Charles; fixar V →
          Gay-Lussac.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas P×V</span>
        <h2>6. Representação Gráfica dos Três Processos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Diagrama P×V com os três processos gasosos">
            {/* Axes */}
            <line x1="50" y1="200" x2="370" y2="200" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="200" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
            <text x="375" y="204" fontSize="11" fill="#333">V</text>
            <text x="35" y="28" fontSize="11" fill="#333">P</text>

            {/* Isothermal hyperbola (Boyle) */}
            <path d="M70,40 Q110,60 150,90 Q200,130 260,170 Q300,185 350,195"
              stroke="#ef5350" strokeWidth="2.5" fill="none"/>
            <text x="260" y="158" fontSize="11" fill="#c62828" fontWeight="bold">Isotérmica</text>
            <text x="260" y="170" fontSize="9" fill="#c62828">(T = cte, Boyle)</text>

            {/* Isobaric: horizontal line */}
            <line x1="70" y1="120" x2="340" y2="120" stroke="#1565c0" strokeWidth="2.5"/>
            <text x="200" y="113" fontSize="11" fill="#1565c0" fontWeight="bold">Isobárica</text>
            <text x="200" y="102" fontSize="9" fill="#1565c0">(P = cte)</text>

            {/* Isochoric: vertical line */}
            <line x1="180" y1="50" x2="180" y2="200" stroke="#2e7d32" strokeWidth="2.5"/>
            <text x="185" y="60" fontSize="11" fill="#2e7d32" fontWeight="bold">Isocórica</text>
            <text x="185" y="72" fontSize="9" fill="#2e7d32">(V = cte)</text>

            {/* Axis labels */}
            <text x="50" y="218" fontSize="9" fill="#555">0</text>
            <text x="350" y="218" fontSize="9" fill="#555">V →</text>
            <text x="20" y="50" fontSize="9" fill="#555">P</text>
            <text x="20" y="62" fontSize="9" fill="#555">↑</text>
          </svg>
          <figcaption>
            Diagrama P×V: isotérmica (hipérbole vermelha), isobárica (reta
            horizontal azul), isocórica (reta vertical verde). A área sob a
            curva representa o trabalho realizado pelo gás.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação de Clapeyron</span>
        <h2>7. Equação de Clapeyron: PV = nRT</h2>
        <p>
          A equação de estado do gás ideal relaciona todas as variáveis de estado
          de uma amostra com quantidade n de mols:
        </p>
        <M block={true}>{"PV = nRT"}</M>
        <p>
          onde R é a constante universal dos gases:
        </p>
        <M block={true}>{"R = 8{,}314\\,{\\rm J/(mol\\cdot K)} = 0{,}082\\,{\\rm atm\\cdot L/(mol\\cdot K)}"}</M>
        <div className="lesson-highlight">
          <h3>Condições normais (CNTP)</h3>
          <p>
            T = 273&nbsp;K e P = 1&nbsp;atm → 1 mol de qualquer gás ideal
            ocupa 22,4&nbsp;L. Esse é o volume molar na CNTP.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>8. Tabela dos Processos Gasosos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Grandeza constante</th>
                <th>Lei</th>
                <th>Gráfico característico</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Isotérmico</td><td>T</td><td>P₁V₁ = P₂V₂</td><td>P×V: hipérbole</td></tr>
              <tr><td>Isobárico</td><td>P</td><td>V₁/T₁ = V₂/T₂</td><td>V×T: reta pela origem</td></tr>
              <tr><td>Isocórico</td><td>V</td><td>P₁/T₁ = P₂/T₂</td><td>P×T: reta pela origem</td></tr>
              <tr><td>Adiabático</td><td>Q = 0</td><td>PVᵞ = cte (γ &gt; 1)</td><td>P×V: hipérbole mais inclinada</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Avogadro e Mol</span>
        <h2>9. Número de Avogadro e Relação Mol-Moléculas</h2>
        <p>
          O número de Avogadro N_A é o número de entidades (átomos, moléculas,
          íons) em 1 mol de substância:
        </p>
        <M block={true}>{"N_A = 6{,}022\\times10^{23}\\,{\\rm mol}^{-1}"}</M>
        <p>
          O número total de moléculas N em uma amostra com n mols é:
          <M>{"N = n \\times N_A"}</M>.
          A constante de Boltzmann k_B relaciona energia cinética e temperatura:
        </p>
        <M block={true}>{"k_B = \\frac{R}{N_A} = 1{,}38\\times10^{-23}\\,{\\rm J/K}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos dos Processos</span>
        <h2>10. Diagramas V×T e P×T dos Processos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 200" width="400" height="200" aria-label="Três gráficos: P×V isotérmico, V×T isobárico, P×T isocórico">
            {/* Graph 1: P×V isothermal */}
            <rect x="10" y="10" width="115" height="100" rx="4" fill="#fff3e0" stroke="#ff9800" strokeWidth="1"/>
            <text x="67" y="25" textAnchor="middle" fontSize="9" fill="#e65100" fontWeight="bold">P×V isotérmico</text>
            <line x1="20" y1="100" x2="120" y2="100" stroke="#555" strokeWidth="1"/>
            <line x1="20" y1="100" x2="20" y2="20" stroke="#555" strokeWidth="1"/>
            <path d="M25,30 Q45,40 60,55 Q80,75 115,95" stroke="#ef5350" strokeWidth="2" fill="none"/>
            <text x="67" y="115" textAnchor="middle" fontSize="8" fill="#888">V →</text>

            {/* Graph 2: V×T isobaric */}
            <rect x="143" y="10" width="115" height="100" rx="4" fill="#e3f2fd" stroke="#1565c0" strokeWidth="1"/>
            <text x="200" y="25" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">V×T isobárico</text>
            <line x1="153" y1="100" x2="253" y2="100" stroke="#555" strokeWidth="1"/>
            <line x1="153" y1="100" x2="153" y2="20" stroke="#555" strokeWidth="1"/>
            <line x1="153" y1="100" x2="248" y2="30" stroke="#1565c0" strokeWidth="2"/>
            <text x="200" y="115" textAnchor="middle" fontSize="8" fill="#888">T (K) →</text>

            {/* Graph 3: P×T isochoric */}
            <rect x="276" y="10" width="115" height="100" rx="4" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1"/>
            <text x="333" y="25" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="bold">P×T isocórico</text>
            <line x1="286" y1="100" x2="386" y2="100" stroke="#555" strokeWidth="1"/>
            <line x1="286" y1="100" x2="286" y2="20" stroke="#555" strokeWidth="1"/>
            <line x1="286" y1="100" x2="381" y2="30" stroke="#2e7d32" strokeWidth="2"/>
            <text x="333" y="115" textAnchor="middle" fontSize="8" fill="#888">T (K) →</text>

            {/* Labels */}
            <text x="67" y="145" textAnchor="middle" fontSize="9" fill="#c62828">PV = cte</text>
            <text x="200" y="145" textAnchor="middle" fontSize="9" fill="#1565c0">V/T = cte</text>
            <text x="333" y="145" textAnchor="middle" fontSize="9" fill="#2e7d32">P/T = cte</text>
          </svg>
          <figcaption>
            Os três processos gasosos e seus gráficos característicos: hipérbole
            (P×V isotérmico), reta (V×T isobárico) e reta (P×T isocórico).
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Equações</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Boyle</span>
            <h3>Isotérmico</h3>
            <M block={true}>{"P_1 V_1 = P_2 V_2"}</M>
          </div>
          <div className="math-card">
            <span>Charles</span>
            <h3>Isobárico</h3>
            <M block={true}>{"V_1/T_1 = V_2/T_2"}</M>
          </div>
          <div className="math-card">
            <span>Gay-L.</span>
            <h3>Isocórico</h3>
            <M block={true}>{"P_1/T_1 = P_2/T_2"}</M>
          </div>
          <div className="math-card">
            <span>Geral</span>
            <h3>Dois estados</h3>
            <M block={true}>{"\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}"}</M>
          </div>
          <div className="math-card">
            <span>Clapeyron</span>
            <h3>Equação de estado</h3>
            <M block={true}>{"PV = nRT"}</M>
          </div>
          <div className="math-card">
            <span>R</span>
            <h3>Constante dos gases</h3>
            <M block={true}>{"8{,}314\\,{\\rm J/mol\\cdot K}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Gases</span>
        <h2>Síntese Visual: Transformações Gasosas</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Gráficos P×V para as três transformações gasosas">
          <defs>
            <marker id="arr26a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* Isotérmica (PV = constante → hipérbole) */}
          <line x1="60" y1="180" x2="200" y2="180" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <line x1="60" y1="180" x2="60" y2="30" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <path d="M 70 40 Q 90 70 130 120 Q 155 150 185 170" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="130" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Isotérmica</text>
          <text x="130" y="185" textAnchor="middle" fontSize="11" fill="#2563eb">T=cte, PV=cte</text>

          {/* Isobárica (P = cte → reta horizontal) */}
          <line x1="260" y1="180" x2="400" y2="180" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <line x1="260" y1="180" x2="260" y2="30" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <line x1="270" y1="100" x2="390" y2="100" stroke="#dc2626" strokeWidth="2.5" />
          <text x="330" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">Isobárica</text>
          <text x="330" y="115" textAnchor="middle" fontSize="11" fill="#dc2626">P=cte, V/T=cte</text>
          <text x="330" y="185" textAnchor="middle" fontSize="11" fill="#dc2626">P=cte</text>

          {/* Isocórica (V = cte → reta vertical) */}
          <line x1="460" y1="180" x2="600" y2="180" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <line x1="460" y1="180" x2="460" y2="30" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#arr26a)" />
          <line x1="530" y1="50" x2="530" y2="170" stroke="#16a34a" strokeWidth="2.5" />
          <text x="530" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">Isocórica</text>
          <text x="560" y="110" textAnchor="start" fontSize="11" fill="#16a34a">V=cte</text>
          <text x="530" y="185" textAnchor="middle" fontSize="11" fill="#16a34a">P/T=cte</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Equação de Clapeyron: P·V = n·R·T">
          <rect x="60" y="30" width="580" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <text x="350" y="60" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0f172a">P · V = n · R · T</text>
          <text x="200" y="100" textAnchor="middle" fontSize="14" fill="#2563eb">P = pressão (Pa)</text>
          <text x="200" y="118" textAnchor="middle" fontSize="14" fill="#2563eb">V = volume (m³)</text>
          <text x="200" y="136" textAnchor="middle" fontSize="14" fill="#2563eb">n = mol de gás</text>
          <text x="500" y="100" textAnchor="middle" fontSize="14" fill="#dc2626">R = 8,31 J/(mol·K)</text>
          <text x="500" y="118" textAnchor="middle" fontSize="14" fill="#dc2626">T = temperatura (K)</text>
          <text x="500" y="136" textAnchor="middle" fontSize="14" fill="#dc2626">T(K) = T(°C) + 273</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">Gás ideal: sem interação entre moléculas; P₁V₁/T₁ = P₂V₂/T₂ = nR</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Transformação</th><th>Variável constante</th><th>Lei</th><th>Gráfico P×V</th></tr>
          </thead>
          <tbody>
            <tr><td>Isotérmica</td><td>T (temperatura)</td><td>Boyle: PV = cte</td><td>Hipérbole equilátera</td></tr>
            <tr><td>Isobárica</td><td>P (pressão)</td><td>Charles: V/T = cte</td><td>Reta horizontal</td></tr>
            <tr><td>Isocórica</td><td>V (volume)</td><td>Gay-Lussac: P/T = cte</td><td>Reta vertical</td></tr>
            <tr><td>Geral (Clapeyron)</td><td>—</td><td>PV = nRT</td><td>Combina todas</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Lei de Boyle-Mariotte"
          statement={
            <p>
              Um gás ideal ocupa 2&nbsp;L a 3&nbsp;atm em temperatura constante.
              Se for comprimido até 1&nbsp;L, qual será a nova pressão?
            </p>
          }
          options={[
            { letter: "a", text: "1,5 atm" },
            { letter: "b", text: "3 atm" },
            { letter: "c", text: "6 atm", correct: true },
            { letter: "d", text: "9 atm" },
          ]}
          resolution={
            <>
              <M block={true}>{"P_1 V_1 = P_2 V_2"}</M>
              <M block={true}>{"3 \\times 2 = P_2 \\times 1 \\Rightarrow P_2 = 6\\,{\\rm atm}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Processo Isobárico — Dilatação"
          statement={
            <p>
              5&nbsp;L de gás a 27&nbsp;°C são aquecidos a pressão constante
              até 127&nbsp;°C. Qual é o novo volume?
            </p>
          }
          options={[
            { letter: "a", text: "7,5 L" },
            { letter: "b", text: "6,67 L", correct: true },
            { letter: "c", text: "10 L" },
            { letter: "d", text: "5 L" },
          ]}
          resolution={
            <>
              <M block={true}>{"T_1 = 300\\,{\\rm K},\\quad T_2 = 400\\,{\\rm K}"}</M>
              <M block={true}>{"\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow V_2 = \\frac{5 \\times 400}{300} \\approx 6{,}67\\,{\\rm L}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Equação de Clapeyron"
          statement={
            <p>
              Calcule o volume ocupado por n = 2&nbsp;mol de gás ideal a
              T = 300&nbsp;K e P = 101&nbsp;325&nbsp;Pa.
              (R = 8,314&nbsp;J/mol·K)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 22,4 L" },
            { letter: "b", text: "≈ 49,1 L", correct: true },
            { letter: "c", text: "≈ 24,5 L" },
            { letter: "d", text: "≈ 100 L" },
          ]}
          resolution={
            <>
              <M block={true}>{"PV = nRT \\Rightarrow V = \\frac{nRT}{P}"}</M>
              <M block={true}>{"V = \\frac{2 \\times 8{,}314 \\times 300}{101\\,325} = \\frac{4988{,}4}{101\\,325} \\approx 0{,}0492\\,{\\rm m^3} = 49{,}2\\,{\\rm L}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Pneu de Carro no Verão"
          statement={
            <p>
              Um pneu é calibrado a 20&nbsp;°C com pressão de 2,2&nbsp;atm
              (volume aproximadamente constante). Após viagem longa, a
              temperatura do pneu sobe para 60&nbsp;°C. Qual a nova pressão?
            </p>
          }
          options={[
            { letter: "a", text: "≈ 2,49 atm", correct: true },
            { letter: "b", text: "≈ 2,20 atm" },
            { letter: "c", text: "≈ 3,00 atm" },
            { letter: "d", text: "≈ 2,64 atm" },
          ]}
          resolution={
            <>
              <M block={true}>{"T_1 = 293\\,{\\rm K},\\quad T_2 = 333\\,{\\rm K}"}</M>
              <M block={true}>{"\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\Rightarrow P_2 = \\frac{2{,}2 \\times 333}{293} \\approx 2{,}49\\,{\\rm atm}"}</M>
              <p>
                Por isso recomenda-se calibrar pneus frios: a pressão sobe
                durante o uso e um valor inicial mais alto causaria risco de
                estouro.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cilindro de Mergulho"
          statement={
            <p>
              Um cilindro de mergulho contém 12&nbsp;L de ar a 200&nbsp;atm e
              25&nbsp;°C. Quantos respirações de 2&nbsp;L a 1&nbsp;atm e
              37&nbsp;°C ele fornece?
            </p>
          }
          options={[
            { letter: "a", text: "≈ 1 250 respirações" },
            { letter: "b", text: "≈ 1 236 respirações", correct: true },
            { letter: "c", text: "≈ 600 respirações" },
            { letter: "d", text: "≈ 2 400 respirações" },
          ]}
          resolution={
            <>
              <p>Use a equação geral para encontrar o volume equivalente à pressão de respiração:</p>
              <M block={true}>{"\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}"}</M>
              <M block={true}>{"\\frac{200 \\times 12}{298} = \\frac{1 \\times V_2}{310}"}</M>
              <M block={true}>{"V_2 = \\frac{200 \\times 12 \\times 310}{298} \\approx 2\\,483\\,{\\rm L}"}</M>
              <M block={true}>{"n_{\\rm resp} = \\frac{2483}{2} \\approx 1\\,241 \\approx 1\\,236\\,{\\rm respirações}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
