"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 16</span>
          <h1>Impulso e Quantidade de Movimento</h1>
          <p>
            Por que um airbag salva vidas? Por que karatecas quebram tijolos sem se machucar? A resposta está
            no impulso e na quantidade de movimento — conceitos que conectam força, tempo e variação de
            velocidade de forma elegante e poderosa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Quantidade de Movimento (Momentum)</h2>
        <p>
          A <strong>quantidade de movimento</strong> (ou <em>momento linear</em>) de uma partícula é o
          produto de sua massa pela sua velocidade. É uma grandeza <strong>vetorial</strong>, com a mesma
          direção e sentido que a velocidade:
        </p>
        <M block={true}>{"\\vec{p} = m\\vec{v}"}</M>
        <p>
          A unidade no SI é <M>{"\\text{kg}\\cdot\\text{m/s}"}</M>, equivalente a <M>{"\\text{N}\\cdot\\text{s}"}</M>.
          Intuitivamente, uma locomotiva em marcha lenta tem muito mais momento que uma bola de golf em alta
          velocidade, devido à diferença de massa.
        </p>
        <div className="lesson-highlight">
          <h3>Caráter vetorial</h3>
          <p>
            Em problemas unidimensionais, adotamos convenção de sinais: movimento para a direita positivo,
            para a esquerda negativo. Uma bola que bate numa parede e volta tem variação de momento igual
            a <M>{"\\Delta p = p_f - p_i = m(-v) - mv = -2mv"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Segunda Lei</span>
        <h2>2. Segunda Lei de Newton na Forma de Momento</h2>
        <p>
          Newton formulou originalmente sua segunda lei em termos de quantidade de movimento, não de
          aceleração. A taxa de variação do momento de uma partícula é igual à força resultante que age
          sobre ela:
        </p>
        <M block={true}>{"\\vec{F}_{res} = \\frac{d\\vec{p}}{dt} = \\frac{\\Delta\\vec{p}}{\\Delta t}"}</M>
        <p>
          Quando a massa é constante, <M>{"\\frac{d(m\\vec{v})}{dt} = m\\frac{d\\vec{v}}{dt} = m\\vec{a}"}</M>,
          recuperando a forma clássica <M>{"\\vec{F} = m\\vec{a}"}</M>. Mas a forma vetorial é mais geral e
          se aplica mesmo quando a massa varia (como em foguetes).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Central</span>
        <h2>3. Impulso</h2>
        <p>
          O <strong>impulso</strong> de uma força é o produto dessa força pelo intervalo de tempo em que
          ela atua. O teorema impulso-variação do momento afirma que o impulso é igual à variação de
          quantidade de movimento:
        </p>
        <M block={true}>{"\\vec{J} = \\vec{F}\\,\\Delta t = \\Delta\\vec{p} = m\\vec{v}_f - m\\vec{v}_i"}</M>
        <p>
          A unidade do impulso é <M>{"\\text{N}\\cdot\\text{s}"}</M>, idêntica à do momento linear.
          Para força variável no tempo, o impulso é a área sob o gráfico <M>{"F \\times t"}</M>:
        </p>
        <M block={true}>{"\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}(t)\\,dt"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>4. Gráfico F×t — Área = Impulso</h2>
        <p>
          O gráfico a seguir mostra dois casos: uma força constante (retângulo) e uma força variável (curva).
          Em ambos os casos, a área sob a curva representa o impulso total.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 230" width="420" height="230" aria-label="Gráfico F×t mostrando impulso como área">
            <line x1="40" y1="200" x2="410" y2="200" stroke="#555" strokeWidth="1.5"/>
            <line x1="40" y1="10" x2="40" y2="205" stroke="#555" strokeWidth="1.5"/>
            <text x="412" y="204" fontSize="11" fill="#555">t</text>
            <text x="44" y="8" fontSize="11" fill="#555">F</text>
            <line x1="120" y1="197" x2="120" y2="203" stroke="#555" strokeWidth="1"/>
            <text x="113" y="214" fontSize="9" fill="#555">t₁</text>
            <line x1="220" y1="197" x2="220" y2="203" stroke="#555" strokeWidth="1"/>
            <text x="213" y="214" fontSize="9" fill="#555">t₂</text>
            <line x1="290" y1="197" x2="290" y2="203" stroke="#555" strokeWidth="1"/>
            <text x="283" y="214" fontSize="9" fill="#555">t₃</text>
            <line x1="390" y1="197" x2="390" y2="203" stroke="#555" strokeWidth="1"/>
            <text x="383" y="214" fontSize="9" fill="#555">t₄</text>
            <rect x="120" y="80" width="100" height="120" fill="#3b82f6" opacity="0.3"/>
            <line x1="120" y1="80" x2="220" y2="80" stroke="#3b82f6" strokeWidth="2.5"/>
            <line x1="120" y1="80" x2="120" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="220" y1="80" x2="220" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="148" y="148" fontSize="10" fill="#3b82f6" fontWeight="bold">J = F·Δt</text>
            <text x="152" y="160" fontSize="9" fill="#3b82f6">(retângulo)</text>
            <path d="M 290 200 C 310 200 315 60 340 50 C 360 42 370 80 390 200 Z" fill="#e07b39" opacity="0.25"/>
            <path d="M 290 200 C 310 200 315 60 340 50 C 360 42 370 80 390 200" fill="none" stroke="#e07b39" strokeWidth="2.5"/>
            <text x="315" y="130" fontSize="10" fill="#e07b39" fontWeight="bold">J = área</text>
            <text x="315" y="143" fontSize="9" fill="#e07b39">(sob a curva)</text>
            <text x="44" y="84" fontSize="9" fill="#555">F₀</text>
            <line x1="38" y1="80" x2="120" y2="80" stroke="#aaa" strokeWidth="1" strokeDasharray="3,2"/>
            <rect x="50" y="25" width="12" height="8" fill="#3b82f6" opacity="0.5"/>
            <text x="66" y="33" fontSize="10" fill="#555">Força constante</text>
            <rect x="50" y="40" width="12" height="8" fill="#e07b39" opacity="0.5"/>
            <text x="66" y="48" fontSize="10" fill="#555">Força variável</text>
          </svg>
          <figcaption>Gráfico F×t: a área sob cada curva representa o impulso total aplicado, independentemente do perfil temporal da força.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenômeno</span>
        <h2>5. Força Impulsiva</h2>
        <p>
          Uma <strong>força impulsiva</strong> é aquela que age em um intervalo de tempo muito pequeno
          (milissegundos), mas com intensidade muito grande. O impulso (área sob F×t) pode ser significativo
          mesmo com <M>{"\\Delta t \\approx 0"}</M>, desde que F seja enorme.
        </p>
        <p>
          Exemplos: impacto de bola de golfe com o taco (contato ≈ 0,5 ms, força ≈ 4000 N), explosão de
          airbag, colisão entre bola e raquete de tênis. Nestes casos, outras forças (peso, normal) são
          desprezíveis durante o impacto.
        </p>
        <div className="lesson-highlight">
          <h3>Força média de impacto</h3>
          <M block={true}>{"F_{m\\acute{e}dia} = \\frac{\\Delta p}{\\Delta t} = \\frac{m(v_f - v_i)}{\\Delta t}"}</M>
          <p>
            Quanto menor o Δt, maior a força média para o mesmo impulso. É por isso que colisões rígidas
            são mais destrutivas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema</span>
        <h2>6. Teorema Impulso-Variação do Momento (J = ΔQ)</h2>
        <p>
          O <strong>Teorema Impulso-Variação</strong> é uma das formulações mais poderosas da mecânica
          clássica. Ele relaciona diretamente causa (impulso = força × tempo) e efeito (variação de momento):
        </p>
        <M block={true}>{"\\vec{J} = \\Delta\\vec{p} \\quad \\Leftrightarrow \\quad \\vec{F}\\Delta t = m\\vec{v}_f - m\\vec{v}_i"}</M>
        <p>
          Na notação brasileira de vestibular, usa-se frequentemente <M>{"Q = p"}</M> para quantidade de
          movimento, e o teorema é escrito como <M>{"J = \\Delta Q"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípio</span>
        <h2>7. Sistema Isolado e Conservação do Momento</h2>
        <p>
          Um sistema é dito <strong>isolado</strong> quando a força externa resultante sobre ele é nula:
          <M>{"\\sum\\vec{F}_{ext} = 0"}</M>. Nesse caso, pela segunda lei de Newton na forma de momento:
        </p>
        <M block={true}>{"\\frac{d\\vec{p}_{total}}{dt} = \\sum\\vec{F}_{ext} = 0 \\Rightarrow \\vec{p}_{total} = \\text{constante}"}</M>
        <p>
          Isso é o <strong>Princípio de Conservação do Momento Linear</strong>: em um sistema isolado, o
          momento linear total permanece constante, independentemente das forças internas entre as partes
          do sistema.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conservação</span>
        <h2>8. Conservação do Momento Linear</h2>
        <p>
          Para um sistema de duas partículas que interagem entre si (mas sem forças externas resultantes):
        </p>
        <M block={true}>{"m_1\\vec{v}_{1i} + m_2\\vec{v}_{2i} = m_1\\vec{v}_{1f} + m_2\\vec{v}_{2f}"}</M>
        <p>
          Este princípio é válido em qualquer direção do espaço. Em problemas bidimensionais, aplica-se
          separadamente para as componentes x e y.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Centro de Massa</span>
        <h2>9. Centro de Massa de um Sistema</h2>
        <p>
          O <strong>centro de massa</strong> (CM) é o ponto que representa o movimento médio do sistema,
          ponderado pelas massas. Para um sistema de partículas:
        </p>
        <M block={true}>{"x_{CM} = \\frac{\\sum m_i x_i}{M_{total}}"}</M>
        <p>
          A velocidade do CM é diretamente relacionada ao momento total:
        </p>
        <M block={true}>{"\\vec{v}_{CM} = \\frac{\\vec{p}_{total}}{M_{total}}"}</M>
        <div className="lesson-highlight">
          <h3>Movimento do CM</h3>
          <p>
            Em um sistema isolado (<M>{"\\sum F_{ext} = 0"}</M>), o CM move-se com velocidade constante —
            ou permanece em repouso. As forças internas não afetam o CM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo</span>
        <h2>10. Movimento do Centro de Massa e Aplicações</h2>
        <p>
          A aceleração do CM depende apenas da força externa total:
        </p>
        <M block={true}>{"M_{total}\\vec{a}_{CM} = \\sum\\vec{F}_{ext}"}</M>
        <p>
          Isso significa que o CM de uma granada em parábola segue a mesma trajetória que uma partícula
          pontual — mesmo quando a granada explode, os fragmentos redistribuem suas posições mas o CM
          continua na mesma parábola original.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>11. Exemplos de Impulso no Cotidiano</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>Δt típico</th>
                <th>Δp (impulso)</th>
                <th>F média estimada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raquete de tênis</td>
                <td>~5 ms</td>
                <td>~5 N·s</td>
                <td>~1000 N</td>
              </tr>
              <tr>
                <td>Airbag (com bolsa)</td>
                <td>~150 ms</td>
                <td>~600 N·s</td>
                <td>~4000 N</td>
              </tr>
              <tr>
                <td>Sem airbag (batida rígida)</td>
                <td>~10 ms</td>
                <td>~600 N·s</td>
                <td>~60000 N</td>
              </tr>
              <tr>
                <td>Soco de karatê (tijolo)</td>
                <td>~2 ms</td>
                <td>~7 N·s</td>
                <td>~3500 N</td>
              </tr>
              <tr>
                <td>Salto (joelhos flexionados)</td>
                <td>~500 ms</td>
                <td>~700 N·s</td>
                <td>~1400 N</td>
              </tr>
              <tr>
                <td>Salto (pernas rígidas)</td>
                <td>~10 ms</td>
                <td>~700 N·s</td>
                <td>~70000 N</td>
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
            <span>p</span>
            <h3>Momento Linear</h3>
            <M block={true}>{"\\vec{p} = m\\vec{v}"}</M>
          </div>
          <div className="math-card">
            <span>J</span>
            <h3>Impulso</h3>
            <M block={true}>{"\\vec{J} = \\vec{F}\\Delta t"}</M>
          </div>
          <div className="math-card">
            <span>Teo.</span>
            <h3>Impulso = ΔQ</h3>
            <M block={true}>{"\\vec{J} = \\Delta\\vec{p}"}</M>
          </div>
          <div className="math-card">
            <span>2ª Lei</span>
            <h3>Newton (forma p)</h3>
            <M block={true}>{"\\vec{F} = \\frac{\\Delta\\vec{p}}{\\Delta t}"}</M>
          </div>
          <div className="math-card">
            <span>Cons.</span>
            <h3>Conservação</h3>
            <M block={true}>{"\\vec{p}_{antes} = \\vec{p}_{depois}"}</M>
          </div>
          <div className="math-card">
            <span>CM</span>
            <h3>Centro de Massa</h3>
            <M block={true}>{"x_{CM} = \\frac{\\sum m_i x_i}{M}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Colisão</span>
        <h2>Síntese Visual: Impulso e Quantidade de Movimento</h2>
        <p>
          Impulso é a variação da quantidade de movimento — e o Teorema
          Impulso-Momento conecta força, tempo e mudança de velocidade.
        </p>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Colisão entre dois blocos — conservação da quantidade de movimento">
          <defs>
            <marker id="arr16a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr16b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* antes */}
          <text x="170" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Antes da colisão</text>
          <rect x="60" y="40" width="100" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="110" y="74" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">m₁</text>
          <line x1="160" y1="70" x2="230" y2="70" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr16a)" />
          <text x="195" y="60" textAnchor="middle" fontSize="12" fill="#2563eb">v₁</text>
          <rect x="250" y="40" width="100" height="60" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="300" y="74" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">m₂</text>
          <line x1="250" y1="70" x2="180" y2="70" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr16b)" />
          <text x="215" y="88" textAnchor="middle" fontSize="12" fill="#dc2626">v₂</text>

          {/* seta de colisão */}
          <text x="350" y="75" textAnchor="middle" fontSize="22" fill="#475569">⟶</text>

          {/* depois */}
          <text x="530" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Depois (perfeitamente inelástica)</text>
          <rect x="420" y="40" width="180" height="60" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="510" y="74" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">m₁ + m₂</text>
          <line x1="600" y1="70" x2="660" y2="70" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr16a)" />
          <text x="635" y="60" textAnchor="middle" fontSize="12" fill="#16a34a">V</text>

          {/* lei */}
          <text x="350" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">m₁·v₁ + m₂·v₂ = (m₁+m₂)·V</text>
          <text x="350" y="155" textAnchor="middle" fontSize="13" fill="#475569">Quantidade de movimento total conservada (sem forças externas)</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#475569">Impulso J = F·Δt = Δp = m·Δv</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Gráfico F × t: área = impulso = variação de momento">
          <defs>
            <marker id="arr16c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixos */}
          <line x1="60" y1="160" x2="640" y2="160" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr16c)" />
          <line x1="60" y1="160" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr16c)" />
          <text x="655" y="164" textAnchor="start" fontSize="13" fill="#1e293b">t</text>
          <text x="50" y="18" textAnchor="end" fontSize="13" fill="#1e293b">F</text>
          {/* curva de força */}
          <path d="M 100 160 Q 200 40 350 40 Q 480 40 550 160" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          {/* área sombreada */}
          <text x="330" y="110" textAnchor="middle" fontSize="14" fill="#2563eb">Área = J = Δp</text>
          {/* rótulos eixos */}
          <text x="100" y="175" textAnchor="middle" fontSize="12" fill="#64748b">t₁</text>
          <text x="550" y="175" textAnchor="middle" fontSize="12" fill="#64748b">t₂</text>
          <text x="350" y="180" textAnchor="middle" fontSize="13" fill="#0f172a">Força maior por menos tempo = Força menor por mais tempo → mesmo Δp</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tipo de colisão</th>
              <th>e (coef. restituição)</th>
              <th>Energia cinética</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Perfeitamente elástica</td><td>e = 1</td><td>Conservada</td><td>Bolas de bilhar ideais</td></tr>
            <tr><td>Parcialmente inelástica</td><td>0 {"<"} e {"<"} 1</td><td>Parte dissipada</td><td>Colisão de carros</td></tr>
            <tr><td>Perfeitamente inelástica</td><td>e = 0</td><td>Máxima perda (ficam juntos)</td><td>Projétil que penetra bloco</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Bola Ricocheteando na Parede"
          statement={
            <p>
              Uma bola de massa <M>{"m = 0{,}4\\,\\text{kg}"}</M> se move com velocidade <M>{"v = 15\\,\\text{m/s}"}</M>
              e bate perpendicularmente em uma parede, retornando com a mesma velocidade. Qual é o módulo
              do impulso recebido pela bola?
            </p>
          }
          options={[
            { letter: "a", text: "6 N·s" },
            { letter: "b", text: "12 N·s", correct: true },
            { letter: "c", text: "0 N·s" },
            { letter: "d", text: "3 N·s" },
          ]}
          resolution={
            <>
              <p>Adotando a direção inicial como positiva:</p>
              <M block={true}>{"p_i = +mv = +0{,}4 \\times 15 = +6\\,\\text{N·s}"}</M>
              <M block={true}>{"p_f = -mv = -6\\,\\text{N·s}"}</M>
              <M block={true}>{"J = \\Delta p = p_f - p_i = -6 - 6 = -12\\,\\text{N·s} \\Rightarrow |J| = 12\\,\\text{N·s}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Força Impulsiva"
          statement={
            <p>
              Uma força média de <M>{"F = 500\\,\\text{N}"}</M> é aplicada durante <M>{"\\Delta t = 0{,}02\\,\\text{s}"}</M>
              sobre uma bola de <M>{"m = 0{,}1\\,\\text{kg}"}</M> inicialmente em repouso. Qual é a
              velocidade final da bola?
            </p>
          }
          options={[
            { letter: "a", text: "50 m/s" },
            { letter: "b", text: "100 m/s", correct: true },
            { letter: "c", text: "25 m/s" },
            { letter: "d", text: "10 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"J = F\\Delta t = 500 \\times 0{,}02 = 10\\,\\text{N·s}"}</M>
              <M block={true}>{"J = m\\,v_f \\Rightarrow v_f = \\frac{J}{m} = \\frac{10}{0{,}1} = 100\\,\\text{m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Empuxo de Foguete"
          statement={
            <p>
              Um foguete ejeta gases a uma taxa de <M>{"\\frac{dm}{dt} = 20\\,\\text{kg/s}"}</M> com
              velocidade de exaustão de <M>{"v_e = 3000\\,\\text{m/s}"}</M> em relação ao foguete.
              Qual é a força de empuxo gerada?
            </p>
          }
          options={[
            { letter: "a", text: "150 kN" },
            { letter: "b", text: "60 kN", correct: true },
            { letter: "c", text: "300 kN" },
            { letter: "d", text: "6 kN" },
          ]}
          resolution={
            <>
              <M block={true}>{"F = v_e \\cdot \\frac{dm}{dt} = 3000 \\times 20 = 60{.}000\\,\\text{N} = 60\\,\\text{kN}"}</M>
              <p>Este é o Teorema do Empuxo: força = taxa de variação do momento dos gases ejetados.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Airbag — Salvando Vidas"
          statement={
            <p>
              Durante uma colisão, a cabeça de um passageiro (<M>{"m = 5\\,\\text{kg}"}</M>) se move a
              <M>{"60\\,\\text{km/h}"}</M> e para completamente. Sem airbag: <M>{"\\Delta t_1 = 0{,}01\\,\\text{s}"}</M>.
              Com airbag: <M>{"\\Delta t_2 = 0{,}15\\,\\text{s}"}</M>. Compare as forças médias.
            </p>
          }
          options={[
            { letter: "a", text: "A força com airbag é 15 vezes menor", correct: true },
            { letter: "b", text: "A força com airbag é igual" },
            { letter: "c", text: "A força com airbag é 15 vezes maior" },
            { letter: "d", text: "O impulso é diferente nos dois casos" },
          ]}
          resolution={
            <>
              <p>Converter: <M>{"60\\,\\text{km/h} \\approx 16{,}7\\,\\text{m/s}"}</M></p>
              <M block={true}>{"\\Delta p = 5 \\times 16{,}7 = 83{,}3\\,\\text{N·s}"}</M>
              <M block={true}>{"F_1 = \\frac{83{,}3}{0{,}01} \\approx 8330\\,\\text{N} \\qquad F_2 = \\frac{83{,}3}{0{,}15} \\approx 555\\,\\text{N}"}</M>
              <p>Razão: <M>{"F_1/F_2 = 15"}</M>. O airbag reduz a força 15 vezes ao aumentar o tempo de contato.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Soco de Karatê"
          statement={
            <p>
              Um expert em karatê desfere um golpe com o punho (<M>{"m = 0{,}6\\,\\text{kg}"}</M>) a
              <M>{"v = 12\\,\\text{m/s}"}</M>. O punho para ao contato com a tábua em <M>{"\\Delta t = 0{,}002\\,\\text{s}"}</M>.
              Qual é a força média exercida sobre a tábua?
            </p>
          }
          options={[
            { letter: "a", text: "720 N" },
            { letter: "b", text: "1440 N" },
            { letter: "c", text: "3600 N", correct: true },
            { letter: "d", text: "7200 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta p = m\\,v = 0{,}6 \\times 12 = 7{,}2\\,\\text{N·s}"}</M>
              <M block={true}>{"F = \\frac{\\Delta p}{\\Delta t} = \\frac{7{,}2}{0{,}002} = 3600\\,\\text{N}"}</M>
              <p>Equivale a mais de 360 kgf — acima do limite de resistência da madeira.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
