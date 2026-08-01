"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 18</span>
          <h1>Estática do Ponto Material e do Corpo Extenso (Torque)</h1>
          <p>
            Como uma ponte suporta toneladas sem cair? Como a alavanca do mecânico multiplica a força?
            O equilíbrio de corpos extensos — através do torque — responde a essas perguntas com precisão
            matemática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Equilíbrio do Ponto Material</h2>
        <p>
          Um ponto material está em equilíbrio quando a resultante de todas as forças que atuam sobre ele
          é nula. Isso implica que o objeto está em repouso ou em movimento retilíneo uniforme:
        </p>
        <M block={true}>{"\\sum\\vec{F} = 0"}</M>
        <p>
          Para garantir o equilíbrio em todas as direções, as componentes de cada eixo devem se anular
          separadamente. Em problemas planos (2D):
        </p>
        <M block={true}>{"\\sum F_x = 0 \\qquad \\text{e} \\qquad \\sum F_y = 0"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Condição</span>
        <h2>2. Condição de Equilíbrio Estático de Translação</h2>
        <p>
          A <strong>primeira condição de equilíbrio</strong> (equilíbrio de translação) exige que a soma
          vetorial de todas as forças seja nula. Em problemas com plano inclinado, apoios e roldanas, é
          essencial decompor forças nos eixos convenientes:
        </p>
        <M block={true}>{"\\sum F_x = 0: \\quad T\\cos\\theta - f = 0"}</M>
        <M block={true}>{"\\sum F_y = 0: \\quad N + T\\sin\\theta - mg = 0"}</M>
        <div className="lesson-highlight">
          <h3>Estratégia</h3>
          <p>
            Desenhe o diagrama de corpo livre. Identifique todas as forças (peso, normal, tensão, atrito,
            reações de apoio). Decomponha nos eixos. Escreva as equações de equilíbrio.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Torque</span>
        <h2>3. Torque (Momento de Força)</h2>
        <p>
          O <strong>torque</strong> (ou momento de força) mede a capacidade de uma força de produzir
          rotação em torno de um ponto (pivô). É definido como o produto da força pelo seu
          <em> braço de alavanca</em> — a distância perpendicular entre a linha de ação da força e o pivô:
        </p>
        <M block={true}>{"\\tau = F \\cdot d_\\perp = F \\cdot d \\cdot \\sin\\theta"}</M>
        <p>
          A unidade do torque no SI é o <strong>Newton-metro (N·m)</strong>. O torque é uma grandeza
          vetorial (produto vetorial <M>{"\\vec{\\tau} = \\vec{r} \\times \\vec{F}"}</M>), mas em
          problemas planos trabalhamos com seu módulo e sinal (sentido).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sentido</span>
        <h2>4. Sentido do Torque</h2>
        <p>
          Por convenção, adotamos:
        </p>
        <ul>
          <li><strong>Torque anti-horário (+):</strong> tende a girar o corpo no sentido contrário ao relógio.</li>
          <li><strong>Torque horário (−):</strong> tende a girar o corpo no sentido do relógio.</li>
        </ul>
        <p>
          A convenção de sinais é arbitrária, desde que usada consistentemente em todo o problema. O torque
          nulo significa que a força passa pelo pivô (braço de alavanca zero) ou que a força é paralela
          ao vetor posição.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2ª Condição</span>
        <h2>5. Condição de Equilíbrio de Rotação</h2>
        <p>
          A <strong>segunda condição de equilíbrio</strong> exige que a soma algébrica de todos os torques
          em relação a qualquer ponto seja nula:
        </p>
        <M block={true}>{"\\sum \\tau = 0"}</M>
        <p>
          Esta condição garante que o corpo não está em rotação acelerada. Combinada com
          <M>{"\\sum F = 0"}</M>, garante o equilíbrio estático completo.
        </p>
        <div className="lesson-highlight">
          <h3>Escolha do pivô</h3>
          <p>
            Escolha o pivô num ponto onde passem o maior número de forças desconhecidas — seus torques
            serão zero (braço nulo), simplificando as equações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condições Gerais</span>
        <h2>6. As Duas Condições de Equilíbrio Estático</h2>
        <p>
          Para que um corpo extenso esteja em equilíbrio estático, é necessário e suficiente que:
        </p>
        <M block={true}>{"\\text{1ª condição: } \\sum\\vec{F} = 0 \\quad \\text{(equilíbrio de translação)}"}</M>
        <M block={true}>{"\\text{2ª condição: } \\sum\\tau_O = 0 \\quad \\text{(equilíbrio de rotação, para qualquer ponto O)}"}</M>
        <p>
          Para um sistema de forças coplanares, isso fornece no máximo 3 equações independentes:
          <M>{"\\sum F_x = 0"}</M>, <M>{"\\sum F_y = 0"}</M> e <M>{"\\sum \\tau = 0"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pivô</span>
        <h2>7. Escolha Estratégica do Pivô</h2>
        <p>
          Ao aplicar <M>{"\\sum\\tau = 0"}</M>, a escolha do pivô é livre — o resultado é o mesmo para
          qualquer pivô (desde que o corpo esteja em equilíbrio). A escolha estratégica deve eliminar
          incógnitas:
        </p>
        <ul>
          <li>Coloque o pivô onde age uma força desconhecida → seu torque é zero → desaparece da equação.</li>
          <li>Em vigas apoiadas em dois pontos, colocar o pivô num dos apoios elimina sua reação.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>8. Viga com Cargas e Suportes</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 200" width="420" height="200" aria-label="Viga horizontal com cargas W1 e W2 e reações R1 e R2">
            {/* Viga */}
            <rect x="40" y="90" width="340" height="12" fill="#8B7355" rx="2"/>

            {/* Apoio esquerdo (triângulo) */}
            <polygon points="60,102 80,130 40,130" fill="#555"/>
            <line x1="30" y1="130" x2="90" y2="130" stroke="#555" strokeWidth="2"/>
            {/* R1 seta para cima */}
            <line x1="60" y1="145" x2="60" y2="108" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue18)"/>
            <text x="42" y="160" fontSize="11" fill="#3b82f6" fontWeight="bold">R₁</text>

            {/* Apoio direito (triângulo) */}
            <polygon points="340,102 360,130 320,130" fill="#555"/>
            <line x1="310" y1="130" x2="370" y2="130" stroke="#555" strokeWidth="2"/>
            {/* R2 seta para cima */}
            <line x1="340" y1="145" x2="340" y2="108" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue18)"/>
            <text x="322" y="160" fontSize="11" fill="#3b82f6" fontWeight="bold">R₂</text>

            {/* Carga W1 (a 1/4 da viga) */}
            <line x1="130" y1="55" x2="130" y2="90" stroke="#e07b39" strokeWidth="2.5" markerEnd="url(#arrowOrange18)"/>
            <text x="114" y="48" fontSize="11" fill="#e07b39" fontWeight="bold">W₁</text>

            {/* Carga W2 (a 3/4 da viga) */}
            <line x1="280" y1="55" x2="280" y2="90" stroke="#e07b39" strokeWidth="2.5" markerEnd="url(#arrowOrange18)"/>
            <text x="264" y="48" fontSize="11" fill="#e07b39" fontWeight="bold">W₂</text>

            {/* Cotas */}
            <line x1="60" y1="170" x2="130" y2="170" stroke="#aaa" strokeWidth="1"/>
            <text x="85" y="184" fontSize="9" fill="#777">d₁</text>
            <line x1="130" y1="170" x2="280" y2="170" stroke="#aaa" strokeWidth="1"/>
            <text x="197" y="184" fontSize="9" fill="#777">d₂</text>
            <line x1="280" y1="170" x2="340" y2="170" stroke="#aaa" strokeWidth="1"/>
            <text x="302" y="184" fontSize="9" fill="#777">d₃</text>

            {/* Marcas de cota */}
            <line x1="60" y1="165" x2="60" y2="175" stroke="#aaa" strokeWidth="1"/>
            <line x1="130" y1="165" x2="130" y2="175" stroke="#aaa" strokeWidth="1"/>
            <line x1="280" y1="165" x2="280" y2="175" stroke="#aaa" strokeWidth="1"/>
            <line x1="340" y1="165" x2="340" y2="175" stroke="#aaa" strokeWidth="1"/>

            <defs>
              <marker id="arrowBlue18" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
                <path d="M0,6 L3,0 L6,6 z" fill="#3b82f6"/>
              </marker>
              <marker id="arrowOrange18" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
                <path d="M0,0 L3,6 L6,0 z" fill="#e07b39"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Viga horizontal em equilíbrio: reações R₁ e R₂ nos apoios, cargas W₁ e W₂ em posições intermediárias. As duas condições de equilíbrio determinam R₁ e R₂.</figcaption>
        </figure>
        <p>
          Aplicando as duas condições com pivô em R₁:
        </p>
        <M block={true}>{"\\sum\\tau_{R_1} = 0: \\quad W_1\\,d_1 + W_2\\,(d_1+d_2) - R_2\\,(d_1+d_2+d_3) = 0"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo Resolvido</span>
        <h2>9. Equilíbrio de Corpo Extenso — Viga em Dois Apoios</h2>
        <p>
          Uma viga uniforme de comprimento <M>{"L = 4\\,\\text{m}"}</M> e peso <M>{"P_{viga} = 200\\,\\text{N}"}</M>
          é apoiada nas extremidades. Uma carga de <M>{"600\\,\\text{N}"}</M> é aplicada a <M>{"1\\,\\text{m}"}</M>
          da extremidade esquerda. Encontre as reações dos apoios.
        </p>
        <p><strong>Pivô em R₁ (extremidade esquerda):</strong></p>
        <M block={true}>{"\\sum\\tau = 0: \\quad 600\\times1 + 200\\times2 - R_2\\times4 = 0"}</M>
        <M block={true}>{"R_2 = \\frac{600 + 400}{4} = 250\\,\\text{N}"}</M>
        <M block={true}>{"\\sum F_y = 0: \\quad R_1 + R_2 = 800 \\Rightarrow R_1 = 550\\,\\text{N}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Centro de Gravidade</span>
        <h2>10. Centro de Gravidade</h2>
        <p>
          O <strong>centro de gravidade</strong> (CG) é o ponto de aplicação da força-peso resultante de
          um corpo. Para corpos homogêneos em campo gravitacional uniforme, coincide com o centro de massa:
        </p>
        <M block={true}>{"x_{CG} = \\frac{\\sum m_i g x_i}{Mg} = \\frac{\\sum m_i x_i}{M} = x_{CM}"}</M>
        <p>
          O CG é fundamental para cálculos de torque: o peso total do corpo pode ser substituído por uma
          única força aplicada no CG. Para uma viga uniforme, o CG é no meio geométrico.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>11. Exemplos de Equilíbrio Estático</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Forças em jogo</th>
                <th>Condições aplicadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Balanço (simetria)</td>
                <td>Peso, tensão do fio</td>
                <td>ΣF = 0 e Στ = 0 em relação ao ponto central</td>
              </tr>
              <tr>
                <td>Grua de construção</td>
                <td>Peso da lança, carga, contrapeso, reação da torre</td>
                <td>Στ = 0 em relação à base da torre</td>
              </tr>
              <tr>
                <td>Ponte (treliça)</td>
                <td>Pesos próprios, cargas de tráfego, reações nos pilares</td>
                <td>ΣF = 0 e Στ = 0 em cada nó</td>
              </tr>
              <tr>
                <td>Braço humano</td>
                <td>Força do músculo bíceps, peso do antebraço, peso da carga</td>
                <td>Στ = 0 em relação ao cotovelo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>τ</span>
            <h3>Torque</h3>
            <M block={true}>{"\\tau = F \\cdot d_\\perp"}</M>
          </div>
          <div className="math-card">
            <span>1ª</span>
            <h3>Equilíbrio de F</h3>
            <M block={true}>{"\\sum F_x = 0,\\; \\sum F_y = 0"}</M>
          </div>
          <div className="math-card">
            <span>2ª</span>
            <h3>Equilíbrio de τ</h3>
            <M block={true}>{"\\sum \\tau_O = 0"}</M>
          </div>
          <div className="math-card">
            <span>CG</span>
            <h3>Centro de Gravidade</h3>
            <M block={true}>{"x_{CG} = \\frac{\\sum m_i x_i}{M}"}</M>
          </div>
          <div className="math-card">
            <span>d⊥</span>
            <h3>Braço de Alavanca</h3>
            <M block={true}>{"d_\\perp = d\\sin\\theta"}</M>
          </div>
          <div className="math-card">
            <span>R</span>
            <h3>Reação de Apoio</h3>
            <M block={true}>{"R_1 + R_2 = \\sum W"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Torque</span>
        <h2>Síntese Visual: Equilíbrio e Torque</h2>
        <p>
          Para o equilíbrio de um corpo extenso, além da resultante das forças
          ser nula, a soma dos torques em relação a qualquer ponto deve ser zero.
        </p>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Torque: força, braço e ponto de aplicação">
          <defs>
            <marker id="arr18a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr18b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* barra horizontal */}
          <line x1="60" y1="110" x2="640" y2="110" stroke="#1e293b" strokeWidth="4" />
          {/* ponto de apoio (fulcro) */}
          <polygon points="350,110 330,140 370,140" fill="#475569" />
          <text x="350" y="155" textAnchor="middle" fontSize="12" fill="#475569">Fulcro O</text>
          {/* força F1 (esquerda, para baixo) */}
          <line x1="160" y1="110" x2="160" y2="170" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr18a)" />
          <text x="145" y="150" textAnchor="end" fontSize="13" fill="#dc2626">F₁</text>
          {/* braço d1 */}
          <line x1="160" y1="90" x2="350" y2="90" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="255" y="82" textAnchor="middle" fontSize="12" fill="#dc2626">d₁</text>
          {/* força F2 (direita, para baixo) */}
          <line x1="520" y1="110" x2="520" y2="170" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr18b)" />
          <text x="535" y="150" textAnchor="start" fontSize="13" fill="#2563eb">F₂</text>
          {/* braço d2 */}
          <line x1="350" y1="90" x2="520" y2="90" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="435" y="82" textAnchor="middle" fontSize="12" fill="#2563eb">d₂</text>
          {/* equilíbrio */}
          <text x="350" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">τ₁ = τ₂ → F₁·d₁ = F₂·d₂</text>
          <text x="350" y="205" textAnchor="middle" fontSize="13" fill="#475569">Torque τ = F·d (N·m) | sentido horário vs. anti-horário</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Condições de equilíbrio estático: ΣF=0 e Στ=0">
          <defs>
            <marker id="arr18c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* bloco estático */}
          <rect x="270" y="80" width="160" height="80" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="125" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#166534">Bloco</text>
          {/* Normal (cima) */}
          <line x1="350" y1="80" x2="350" y2="30" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr18c)" />
          <text x="370" y="55" textAnchor="start" fontSize="13" fill="#16a34a">N</text>
          {/* Peso (baixo) */}
          <line x1="350" y1="160" x2="350" y2="195" stroke="#dc2626" strokeWidth="2" />
          <polygon points="350,195 343,180 357,180" fill="#dc2626" />
          <text x="370" y="182" textAnchor="start" fontSize="13" fill="#dc2626">P = mg</text>
          {/* condições */}
          <text x="130" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">1ª condição:</text>
          <text x="130" y="118" textAnchor="middle" fontSize="13" fill="#0f172a">ΣFₓ = 0</text>
          <text x="130" y="136" textAnchor="middle" fontSize="13" fill="#0f172a">ΣFᵧ = 0</text>
          <text x="570" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">2ª condição:</text>
          <text x="570" y="118" textAnchor="middle" fontSize="13" fill="#0f172a">Στ = 0</text>
          <text x="350" y="190" textAnchor="middle" fontSize="13" fill="#475569">Equilíbrio estático: as duas condições devem ser satisfeitas simultaneamente</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Conceito</th>
              <th>Definição</th>
              <th>Fórmula</th>
              <th>Unidade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Torque (momento de força)</td><td>Efeito de rotação de uma força em relação a um ponto</td><td>τ = F·d (d = braço de alavanca)</td><td>N·m</td></tr>
            <tr><td>Braço de alavanca</td><td>Distância perpendicular entre a reta de ação de F e o ponto O</td><td>d = r·sen θ</td><td>m</td></tr>
            <tr><td>Equilíbrio translação</td><td>Resultante das forças = zero</td><td>ΣF = 0</td><td>N</td></tr>
            <tr><td>Equilíbrio rotação</td><td>Soma dos torques = zero</td><td>Στ = 0</td><td>N·m</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Cálculo de Torque"
          statement={
            <p>
              Uma força de <M>{"F = 30\\,\\text{N}"}</M> é aplicada perpendicularmente a uma alavanca a
              uma distância de <M>{"d = 0{,}5\\,\\text{m}"}</M> do pivô. Qual é o torque produzido?
            </p>
          }
          options={[
            { letter: "a", text: "60 N·m" },
            { letter: "b", text: "15 N·m", correct: true },
            { letter: "c", text: "30 N·m" },
            { letter: "d", text: "0,6 N·m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\tau = F \\cdot d = 30 \\times 0{,}5 = 15\\,\\text{N·m}"}</M>
              <p>O torque é 15 N·m. Resposta: b).</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Viga Apoiada em Dois Pontos"
          statement={
            <p>
              Uma viga uniforme de <M>{"L = 4\\,\\text{m}"}</M> e peso <M>{"P = 200\\,\\text{N}"}</M>
              é apoiada nas extremidades. Uma carga de <M>{"600\\,\\text{N}"}</M> é aplicada a
              <M>{"1\\,\\text{m}"}</M> da extremidade esquerda. Determine as reações R₁ (esquerda) e
              R₂ (direita).
            </p>
          }
          options={[
            { letter: "a", text: "R₁ = 550 N; R₂ = 250 N", correct: true },
            { letter: "b", text: "R₁ = 400 N; R₂ = 400 N" },
            { letter: "c", text: "R₁ = 600 N; R₂ = 200 N" },
            { letter: "d", text: "R₁ = 300 N; R₂ = 500 N" },
          ]}
          resolution={
            <>
              <p>Pivô em R₁:</p>
              <M block={true}>{"600 \\times 1 + 200 \\times 2 - R_2 \\times 4 = 0 \\Rightarrow R_2 = \\frac{1000}{4} = 250\\,\\text{N}"}</M>
              <M block={true}>{"R_1 = 800 - 250 = 550\\,\\text{N}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Grua com Contrapeso"
          statement={
            <p>
              O braço horizontal de uma grua tem <M>{"L = 6\\,\\text{m}"}</M> e é articulado na parede.
              Uma carga de <M>{"5000\\,\\text{N}"}</M> é aplicada na extremidade livre. Um contrapeso de
              <M>{"3000\\,\\text{N}"}</M> é colocado a <M>{"2\\,\\text{m}"}</M> do pivô. Qual é o torque
              resultante líquido em relação ao pivô? O sistema está em equilíbrio?
            </p>
          }
          options={[
            { letter: "a", text: "τ = 0; equilíbrio perfeito" },
            { letter: "b", text: "τ = 24000 N·m no sentido horário; não equilibrado", correct: true },
            { letter: "c", text: "τ = 6000 N·m anti-horário; não equilibrado" },
            { letter: "d", text: "τ = 30000 N·m horário; equilíbrio com reação da parede" },
          ]}
          resolution={
            <>
              <p>Torques em relação ao pivô (carga → horário negativo; contrapeso → anti-horário positivo):</p>
              <M block={true}>{"\\tau_{carga} = -5000 \\times 6 = -30{.}000\\,\\text{N·m}"}</M>
              <M block={true}>{"\\tau_{contrapeso} = +3000 \\times 2 = +6{.}000\\,\\text{N·m}"}</M>
              <M block={true}>{"\\tau_{resultante} = -24{.}000\\,\\text{N·m (horário)}"}</M>
              <p>
                Não há equilíbrio de torque. A parede (articulação) fornece uma reação adicional para
                equilibrar o sistema. O projetista precisa ajustar o contrapeso (aumentar sua massa ou
                distância).
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Prateleira na Parede"
          statement={
            <p>
              Uma prateleira de <M>{"0{,}8\\,\\text{m}"}</M> de comprimento e massa total (prateleira +
              objetos) de <M>{"5\\,\\text{kg}"}</M>, distribuída uniformemente, é fixada na parede. Adote
              <M>{"g = 10\\,\\text{m/s}^2"}</M>. Calcule o torque em relação ao ponto de fixação na parede.
            </p>
          }
          options={[
            { letter: "a", text: "20 N·m" },
            { letter: "b", text: "40 N·m" },
            { letter: "c", text: "10 N·m" },
            { letter: "d", text: "200 N·m no ponto de fixação; τ = 20 N·m", correct: true },
          ]}
          resolution={
            <>
              <p>Peso total: <M>{"P = 5 \\times 10 = 50\\,\\text{N}"}</M>. O CG fica a <M>{"0{,}4\\,\\text{m}"}</M> da parede.</p>
              <M block={true}>{"\\tau = P \\times d_{CG} = 50 \\times 0{,}4 = 20\\,\\text{N·m}"}</M>
              <p>O torque que o suporte deve resistir é de 20 N·m.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Braço Humano — Biomecânica"
          statement={
            <p>
              O músculo bíceps se insere a <M>{"5\\,\\text{cm}"}</M> do cotovelo. Uma pessoa segura uma
              carga de <M>{"5\\,\\text{kg}"}</M> com a mão, a <M>{"35\\,\\text{cm}"}</M> do cotovelo. Adote
              <M>{"g = 10\\,\\text{m/s}^2"}</M>. Qual é a força que o bíceps deve exercer para manter o
              braço horizontal?
            </p>
          }
          options={[
            { letter: "a", text: "50 N" },
            { letter: "b", text: "175 N" },
            { letter: "c", text: "350 N", correct: true },
            { letter: "d", text: "700 N" },
          ]}
          resolution={
            <>
              <p>Pivô no cotovelo. Peso da carga: <M>{"P = 5 \\times 10 = 50\\,\\text{N}"}</M>.</p>
              <M block={true}>{"\\sum\\tau = 0: \\quad F_{b} \\times 0{,}05 = 50 \\times 0{,}35"}</M>
              <M block={true}>{"F_b = \\frac{50 \\times 0{,}35}{0{,}05} = \\frac{17{,}5}{0{,}05} = 350\\,\\text{N}"}</M>
              <p>
                O bíceps exerce 7 vezes o peso segurado! Isso mostra que alavancas do tipo 3ª classe (como o
                braço humano) ampliam o deslocamento mas requerem força muscular muito maior que a carga.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
