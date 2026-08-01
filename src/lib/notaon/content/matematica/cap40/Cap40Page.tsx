"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 40</span>
          <h1>Geometria Analítica: Circunferência</h1>
          <p>
            Determine equações de circunferências, identifique centro e raio,
            analise posições relativas de ponto e circunferência, reta e
            circunferência, e duas circunferências.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação Canônica</span>
        <h2>1. Equação Reduzida (Canônica) da Circunferência</h2>
        <M block={true}>{"(x - a)^2 + (y - b)^2 = r^2"}</M>
        <p>Centro C(a, b) e raio r.</p>
        <div className="lesson-highlight">
          <h3>Caso especial: centro na origem</h3>
          <M block={true}>{"x^2 + y^2 = r^2"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Circunferência de centro (2, -3) e raio 5:</p>
          <M block={true}>{"(x-2)^2 + (y+3)^2 = 25"}</M>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Circunferência de centro C(a,b) no plano cartesiano com raio r até ponto P">
            <rect width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>
            {/* Eixos */}
            <line x1="60" y1="20" x2="60" y2="200" stroke="#374151" strokeWidth="2"/>
            <line x1="30" y1="175" x2="660" y2="175" stroke="#374151" strokeWidth="2"/>
            {/* Setas */}
            <polygon points="60,15 55,28 65,28" fill="#374151"/>
            <polygon points="665,175 652,170 652,180" fill="#374151"/>
            {/* Rótulos eixos */}
            <text x="662" y="172" fontSize="13" fill="#374151" fontWeight="bold">x</text>
            <text x="65" y="16" fontSize="13" fill="#374151" fontWeight="bold">y</text>
            {/* Circunferência centrada em C(280, 115) — raio 85 */}
            <circle cx="280" cy="110" r="85" fill="#dbeafe" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="2.2"/>
            {/* Centro C(a,b) */}
            <circle cx="280" cy="110" r="5" fill="#3b82f6"/>
            <text x="287" y="107" fontSize="13" fontWeight="bold" fill="#1e40af">C(a, b)</text>
            {/* Ponto P na borda (superior-direito, ≈45°) */}
            <circle cx="340" cy="50" r="6" fill="#facc15" stroke="#b45309" strokeWidth="1.5"/>
            <text x="345" y="46" fontSize="13" fontWeight="bold" fill="#b45309">P(x, y)</text>
            {/* Raio r tracejado C→P */}
            <line x1="280" y1="110" x2="340" y2="50" stroke="#1e40af" strokeWidth="2" strokeDasharray="7,4"/>
            <text x="296" y="75" fontSize="13" fontWeight="bold" fill="#1e40af">r</text>
            {/* Equação anotada */}
            <text x="430" y="105" fontSize="14" fontWeight="bold" fill="#1e40af">(x−a)²+(y−b)²=r²</text>
          </svg>
          <figcaption>Circunferência de centro C(a, b) e raio r: ponto P está na curva quando sua distância ao centro é exatamente r</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação Geral</span>
        <h2>2. Equação Geral da Circunferência</h2>
        <M block={true}>{"x^2 + y^2 + Dx + Ey + F = 0"}</M>
        <div className="lesson-highlight">
          <h3>Identificação</h3>
          <M block={true}>{"a = -\\frac{D}{2} \\qquad b = -\\frac{E}{2} \\qquad r = \\sqrt{a^2+b^2-F}"}</M>
          <p>É circunferência real se <M>{"a^2+b^2-F > 0"}</M>.</p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>x² + y² − 4x + 6y − 3 = 0</p>
          <M block={true}>{"(x-2)^2 + (y+3)^2 = 4+9+3 = 16 \\Rightarrow \\text{centro }(2,-3),\\; r=4"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posição Ponto</span>
        <h2>3. Posição de um Ponto em Relação à Circunferência</h2>
        <M block={true}>{"d = \\sqrt{(x_0-a)^2+(y_0-b)^2}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Posição</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"d < r"}</M></td><td>Interior</td></tr>
              <tr><td><M>{"d = r"}</M></td><td>Na circunferência</td></tr>
              <tr><td><M>{"d > r"}</M></td><td>Exterior</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posição Reta-Circunferência</span>
        <h2>4. Posição Relativa de Reta e Circunferência</h2>
        <p>
          Para reta ax + by + c = 0 e circunferência de centro C(a₀, b₀) e raio r,
          calcula-se a distância d do centro à reta:
        </p>
        <M block={true}>{"d = \\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Posição</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"d < r"}</M></td><td>Secante (2 pontos)</td></tr>
              <tr><td><M>{"d = r"}</M></td><td>Tangente (1 ponto)</td></tr>
              <tr><td><M>{"d > r"}</M></td><td>Exterior (sem interseção)</td></tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Três casos de posição relativa entre reta e circunferência: secante, tangente e externa">
            <rect width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>

            {/* === CASO 1: SECANTE (d < r) — centro x=175 === */}
            <circle cx="175" cy="105" r="60" fill="#dbeafe" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2"/>
            {/* Reta secante (inclinada, cruza a circunferência) */}
            <line x1="105" y1="145" x2="245" y2="65" stroke="#dc2626" strokeWidth="2.2"/>
            {/* Dois pontos de interseção */}
            <circle cx="126" cy="132" r="5" fill="#dc2626"/>
            <circle cx="230" cy="75" r="5" fill="#dc2626"/>
            <text x="175" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Secante</text>
            <text x="175" y="205" textAnchor="middle" fontSize="11" fill="#374151">(d {"<"} r, 2 pontos)</text>

            {/* === CASO 2: TANGENTE (d = r) — centro x=350 === */}
            <circle cx="350" cy="105" r="60" fill="#dbeafe" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2"/>
            {/* Reta tangente (vertical à direita) */}
            <line x1="410" y1="35" x2="410" y2="180" stroke="#16a34a" strokeWidth="2.2"/>
            {/* Um ponto de tangência */}
            <circle cx="410" cy="105" r="5" fill="#16a34a"/>
            {/* Raio até o ponto de tangência */}
            <line x1="350" y1="105" x2="410" y2="105" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="350" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Tangente</text>
            <text x="350" y="205" textAnchor="middle" fontSize="11" fill="#374151">(d = r, 1 ponto)</text>

            {/* === CASO 3: EXTERNA (d > r) — centro x=545 === */}
            <circle cx="545" cy="105" r="60" fill="#dbeafe" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2"/>
            {/* Reta externa (passa longe) */}
            <line x1="630" y1="35" x2="660" y2="180" stroke="#f97316" strokeWidth="2.2"/>
            <text x="545" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Externa</text>
            <text x="545" y="205" textAnchor="middle" fontSize="11" fill="#374151">(d {">"} r, 0 pontos)</text>
          </svg>
          <figcaption>Posição relativa reta-circunferência: secante (cruza em 2 pontos), tangente (toca em 1 ponto) e externa (sem interseção)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tangente</span>
        <h2>5. Equação da Tangente à Circunferência</h2>
        <p>
          A reta tangente em um ponto P(x₀, y₀) da circunferência x² + y² = r²:
        </p>
        <M block={true}>{"x_0 x + y_0 y = r^2"}</M>
        <div className="lesson-highlight">
          <h3>Para circunferência geral</h3>
          <p>Tangente em P(x₀, y₀) de (x−a)² + (y−b)² = r²:</p>
          <M block={true}>{"(x_0-a)(x-a) + (y_0-b)(y-b) = r^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Duas Circunferências</span>
        <h2>6. Posição Relativa de Duas Circunferências</h2>
        <M block={true}>{"d_{C_1C_2} = \\sqrt{(a_2-a_1)^2+(b_2-b_1)^2}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Posição</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"d > r_1+r_2"}</M></td><td>Externas</td></tr>
              <tr><td><M>{"d = r_1+r_2"}</M></td><td>Tangentes externas</td></tr>
              <tr><td><M>{"|r_1-r_2| < d < r_1+r_2"}</M></td><td>Secantes</td></tr>
              <tr><td><M>{"d = |r_1-r_2|"}</M></td><td>Tangentes internas</td></tr>
              <tr><td><M>{"d < |r_1-r_2|"}</M></td><td>Uma interna à outra</td></tr>
              <tr><td><M>{"d = 0, r_1 = r_2"}</M></td><td>Concêntricas coincidentes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Determinação</span>
        <h2>7. Determinação da Equação por 3 Pontos</h2>
        <p>
          Três pontos não colineares determinam uma única circunferência.
          Substitui-se cada ponto em x² + y² + Dx + Ey + F = 0 e resolve-se o sistema 3×3.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Pontos: (1,0), (0,1), (−1,0)</p>
          <p>Substituindo: 1+D+F = 0; 1+E+F = 0; 1−D+F = 0</p>
          <M block={true}>{"D = 0, E = 0, F = -1 \\Rightarrow x^2+y^2 = 1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Completar Quadrado</span>
        <h2>8. Técnica de Completar Quadrado</h2>
        <M block={true}>{"x^2 + Dx = \\left(x + \\frac{D}{2}\\right)^2 - \\frac{D^2}{4}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Transformar x² + y² − 6x + 8y = 0 em forma canônica:</p>
          <M block={true}>{"(x^2-6x+9)+(y^2+8y+16) = 0+9+16"}</M>
          <M block={true}>{"(x-3)^2+(y+4)^2 = 25 \\Rightarrow \\text{centro }(3,-4),\\; r=5"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interseção Reta-Circ.</span>
        <h2>9. Pontos de Interseção Reta-Circunferência</h2>
        <p>Substitui-se a equação da reta na da circunferência e resolve-se a equação do 2° grau resultante.</p>
        <M block={true}>{"\\Delta > 0 \\Rightarrow \\text{2 pontos} \\quad \\Delta = 0 \\Rightarrow \\text{tangente} \\quad \\Delta < 0 \\Rightarrow \\text{exterior}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Circunferência Analítica</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Eq.</span>
            <h3>Canônica</h3>
            <M block={true}>{"(x-a)^2+(y-b)^2=r^2"}</M>
          </div>
          <div className="math-card">
            <span>Geral</span>
            <h3>Geral</h3>
            <M block={true}>{"x^2+y^2+Dx+Ey+F=0"}</M>
          </div>
          <div className="math-card">
            <span>Tang.</span>
            <h3>Tangente em P</h3>
            <M block={true}>{"x_0x+y_0y=r^2"}</M>
          </div>
          <div className="math-card">
            <span>d(C,r)</span>
            <h3>Dist. centro-reta</h3>
            <M block={true}>{"\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Equação da circunferência"
          statement={
            <p>Qual é a equação da circunferência de centro (3, -1) e raio 4?</p>
          }
          options={[
            { letter: "a", text: <M>{"(x-3)^2+(y+1)^2=16"}</M>, correct: true },
            { letter: "b", text: <M>{"(x+3)^2+(y-1)^2=16"}</M> },
            { letter: "c", text: <M>{"(x-3)^2+(y+1)^2=4"}</M> },
            { letter: "d", text: <M>{"x^2+y^2=16"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"(x-3)^2+(y-(-1))^2=4^2 \\Rightarrow (x-3)^2+(y+1)^2=16"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Centro e raio da circunferência"
          statement={
            <p>
              Identifique centro e raio da circunferência:<br/>
              x² + y² − 6x + 8y = 0
            </p>
          }
          options={[
            { letter: "a", text: "Centro (3, −4), r = 5", correct: true },
            { letter: "b", text: "Centro (−3, 4), r = 5" },
            { letter: "c", text: "Centro (3, 4), r = 7" },
            { letter: "d", text: "Centro (6, 8), r = 25" },
          ]}
          resolution={
            <>
              <M block={true}>{"(x-3)^2+(y+4)^2=9+16=25 \\Rightarrow C(3,-4),\\; r=5"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tangente à circunferência"
          statement={
            <p>
              Escreva a equação da tangente à circunferência x² + y² = 25
              no ponto P(3, 4).
            </p>
          }
          options={[
            { letter: "a", text: "3x + 4y = 25", correct: true },
            { letter: "b", text: "4x + 3y = 25" },
            { letter: "c", text: "3x − 4y = 25" },
            { letter: "d", text: "x + y = 25" },
          ]}
          resolution={
            <>
              <M block={true}>{"x_0 x + y_0 y = r^2 \\Rightarrow 3x + 4y = 25"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Antena de rádio"
          statement={
            <p>
              Uma antena de rádio em (0,0) cobre um raio de 50 km.
              Um bairro está em (40, 30) km. Ele está na área de cobertura?
            </p>
          }
          options={[
            { letter: "a", text: "Sim, está no limite exato da cobertura", correct: true },
            { letter: "b", text: "Não, está fora" },
            { letter: "c", text: "Está no interior" },
            { letter: "d", text: "Impossível determinar" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = \\sqrt{40^2+30^2} = \\sqrt{1600+900} = \\sqrt{2500} = 50 = r"}</M>
              <p>O bairro está exatamente na fronteira da cobertura.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Duas cidades e área de cobertura"
          statement={
            <p>
              Duas antenas estão em C₁(0,0) com raio 30 km e C₂(50,0) com raio 25 km.
              Qual é a posição relativa das áreas de cobertura?
            </p>
          }
          options={[
            { letter: "a", text: "Externas (sem sobreposição)", correct: true },
            { letter: "b", text: "Tangentes externas" },
            { letter: "c", text: "Secantes (área em comum)" },
            { letter: "d", text: "Uma dentro da outra" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = 50 \\quad r_1+r_2 = 55 \\quad |r_1-r_2| = 5"}</M>
              <M block={true}>{"5 < 50 < 55 \\Rightarrow \\text{Secantes}"}</M>
              <p>Há uma pequena área de sobreposição de cobertura.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
