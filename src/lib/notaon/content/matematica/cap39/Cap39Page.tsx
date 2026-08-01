"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 39</span>
          <h1>Geometria Analítica: Ponto e Reta</h1>
          <p>
            Estude coordenadas cartesianas, distância entre pontos, ponto médio,
            inclinação de retas, equações da reta e posições relativas. Aplique
            em problemas de localização, construção e análise de dados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistema de Coordenadas</span>
        <h2>1. Plano Cartesiano</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 280 240" width="280" height="240" aria-label="Plano cartesiano">
            {/* Eixos */}
            <line x1="140" y1="20" x2="140" y2="220" stroke="#374151" strokeWidth="2"/>
            <line x1="20" y1="120" x2="260" y2="120" stroke="#374151" strokeWidth="2"/>
            {/* Setas */}
            <polygon points="140,15 136,25 144,25" fill="#374151"/>
            <polygon points="265,120 255,116 255,124" fill="#374151"/>
            {/* Grade */}
            {[-3,-2,-1,1,2,3].map(n => (
              <g key={n}>
                <line x1={140+n*40} y1="116" x2={140+n*40} y2="124" stroke="#374151" strokeWidth="1.5"/>
                <text x={140+n*40} y="134" textAnchor="middle" fontSize="10" fill="#374151">{n}</text>
                <line x1="136" y1={120-n*40} x2="144" y2={120-n*40} stroke="#374151" strokeWidth="1.5"/>
                <text x="130" y={124-n*40} textAnchor="end" fontSize="10" fill="#374151">{n}</text>
              </g>
            ))}
            {/* Ponto */}
            <circle cx="220" cy="40" r="5" fill="#dc2626"/>
            <text x="225" y="38" fontSize="11" fill="#dc2626">P(2, 2)</text>
            {/* Linhas pontilhadas */}
            <line x1="220" y1="40" x2="220" y2="120" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3"/>
            <line x1="140" y1="40" x2="220" y2="40" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3"/>
            {/* Rótulos dos eixos */}
            <text x="262" y="116" fontSize="12" fill="#374151">x</text>
            <text x="144" y="18" fontSize="12" fill="#374151">y</text>
          </svg>
          <figcaption>Plano cartesiano: eixo x (abscissa), eixo y (ordenada)</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Quadrante</th><th>Sinais de (x, y)</th></tr>
            </thead>
            <tbody>
              <tr><td>I</td><td>(+, +)</td></tr>
              <tr><td>II</td><td>(−, +)</td></tr>
              <tr><td>III</td><td>(−, −)</td></tr>
              <tr><td>IV</td><td>(+, −)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Distância</span>
        <h2>2. Distância entre Dois Pontos</h2>
        <M block={true}>{"d(A,B) = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>A(1, 2) e B(4, 6):</p>
          <M block={true}>{"d = \\sqrt{(4-1)^2+(6-2)^2} = \\sqrt{9+16} = \\sqrt{25} = 5"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ponto Médio</span>
        <h2>3. Ponto Médio de um Segmento</h2>
        <M block={true}>{"M = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}\\right)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Ponto médio de A(2, 3) e B(8, 7):</p>
          <M block={true}>{"M = \\left(\\frac{2+8}{2}, \\frac{3+7}{2}\\right) = (5, 5)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inclinação</span>
        <h2>4. Coeficiente Angular (Inclinação)</h2>
        <M block={true}>{"m = \\tan\\theta = \\frac{y_B - y_A}{x_B - x_A}"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Plano cartesiano com dois pontos A e B, reta e triângulo do coeficiente angular">
            <rect width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>
            {/* Eixos */}
            <line x1="60" y1="20" x2="60" y2="195" stroke="#374151" strokeWidth="2"/>
            <line x1="40" y1="175" x2="670" y2="175" stroke="#374151" strokeWidth="2"/>
            {/* Setas dos eixos */}
            <polygon points="60,15 55,28 65,28" fill="#374151"/>
            <polygon points="675,175 662,170 662,180" fill="#374151"/>
            {/* Rótulos eixos */}
            <text x="672" y="172" fontSize="13" fill="#374151" fontWeight="bold">x</text>
            <text x="65" y="16" fontSize="13" fill="#374151" fontWeight="bold">y</text>
            {/* Grade leve */}
            {[1,2,3,4,5,6,7,8].map(n => (
              <line key={"gx"+n} x1={60+n*70} y1="170" x2={60+n*70} y2="180" stroke="#374151" strokeWidth="1"/>
            ))}
            {[1,2].map(n => (
              <line key={"gy"+n} x1="55" y1={175-n*60} x2="65" y2={175-n*60} stroke="#374151" strokeWidth="1"/>
            ))}
            {/* Ponto A(1,1) */}
            <circle cx="130" cy="115" r="6" fill="#3b82f6"/>
            <text x="110" y="108" fontSize="13" fontWeight="bold" fill="#3b82f6">A(x₁,y₁)</text>
            {/* Ponto B(5,3) */}
            <circle cx="410" cy="55" r="6" fill="#facc15" stroke="#b45309" strokeWidth="1.5"/>
            <text x="415" y="50" fontSize="13" fontWeight="bold" fill="#b45309">B(x₂,y₂)</text>
            {/* Reta AB prolongada */}
            <line x1="60" y1="145" x2="620" y2="25" stroke="#3b82f6" strokeWidth="2.2"/>
            {/* Triângulo Δy e Δx */}
            {/* vértices: A(130,115), pé Δx (410,115), B(410,55) */}
            <line x1="130" y1="115" x2="410" y2="115" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="6,3"/>
            <line x1="410" y1="55" x2="410" y2="115" stroke="#16a34a" strokeWidth="1.8" strokeDasharray="6,3"/>
            {/* Rótulos Δx e Δy */}
            <text x="270" y="132" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">Δx</text>
            <text x="428" y="88" textAnchor="start" fontSize="13" fontWeight="bold" fill="#16a34a">Δy</text>
            {/* m = Δy/Δx */}
            <text x="200" y="75" fontSize="14" fontWeight="bold" fill="#1e40af">m = Δy / Δx</text>
          </svg>
          <figcaption>Coeficiente angular m como razão Δy/Δx: triângulo formado pelos catetos horizontal e vertical entre A e B</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Valor de m</th><th>Comportamento</th></tr>
            </thead>
            <tbody>
              <tr><td>m &gt; 0</td><td>Crescente (sobe da esquerda para direita)</td></tr>
              <tr><td>m &lt; 0</td><td>Decrescente</td></tr>
              <tr><td>m = 0</td><td>Horizontal</td></tr>
              <tr><td>Indefinido</td><td>Vertical</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação da Reta</span>
        <h2>5. Formas da Equação da Reta</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Forma</th><th>Equação</th></tr>
            </thead>
            <tbody>
              <tr><td>Geral</td><td><M>{"ax + by + c = 0"}</M></td></tr>
              <tr><td>Reduzida</td><td><M>{"y = mx + n"}</M></td></tr>
              <tr><td>Segmentária</td><td><M>{"\\dfrac{x}{a} + \\dfrac{y}{b} = 1"}</M></td></tr>
              <tr><td>Ponto-inclinação</td><td><M>{"y - y_0 = m(x - x_0)"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Coeficiente linear (n)</h3>
          <p>O coeficiente linear n é o valor de y quando x = 0 (interseção com eixo y).</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posições Relativas</span>
        <h2>6. Posições Relativas entre Duas Retas</h2>
        <M block={true}>{"r_1: a_1x+b_1y+c_1=0 \\quad r_2: a_2x+b_2y+c_2=0"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Posição</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"m_1 = m_2, \\; n_1 \\neq n_2"}</M></td><td>Paralelas (sem interseção)</td></tr>
              <tr><td><M>{"m_1 = m_2, \\; n_1 = n_2"}</M></td><td>Coincidentes</td></tr>
              <tr><td><M>{"m_1 \\neq m_2"}</M></td><td>Concorrentes (1 ponto em comum)</td></tr>
              <tr><td><M>{"m_1 \\times m_2 = -1"}</M></td><td>Perpendiculares</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Distância Ponto-Reta</span>
        <h2>7. Distância de um Ponto a uma Reta</h2>
        <M block={true}>{"d(P, r) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2+b^2}}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>P(2,3), reta: 3x + 4y − 5 = 0</p>
          <M block={true}>{"d = \\frac{|3\\times2+4\\times3-5|}{\\sqrt{9+16}} = \\frac{|6+12-5|}{5} = \\frac{13}{5} = 2{,}6"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulo entre Retas</span>
        <h2>8. Ângulo entre Duas Retas</h2>
        <M block={true}>{"\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|"}</M>
        <div className="lesson-highlight">
          <h3>Caso perpendicular</h3>
          <p>Se <M>{"m_1 m_2 = -1"}</M>, o denominador é zero → θ = 90°.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área pelo Determinante</span>
        <h2>9. Área do Triângulo por Coordenadas</h2>
        <M block={true}>{"A = \\frac{1}{2}\\left|\\det\\begin{pmatrix}x_A & y_A & 1 \\\\ x_B & y_B & 1 \\\\ x_C & y_C & 1\\end{pmatrix}\\right|"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Triângulo A(0,0), B(4,0), C(2,3):</p>
          <M block={true}>{"A = \\frac{1}{2}|0(0-3)+4(3-0)+2(0-0)| = \\frac{12}{2} = 6"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Ponto e Reta</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>d</span>
            <h3>Distância</h3>
            <M block={true}>{"\\sqrt{\\Delta x^2+\\Delta y^2}"}</M>
          </div>
          <div className="math-card">
            <span>M</span>
            <h3>Ponto médio</h3>
            <M block={true}>{"\\left(\\frac{x_A+x_B}{2},\\frac{y_A+y_B}{2}\\right)"}</M>
          </div>
          <div className="math-card">
            <span>m</span>
            <h3>Inclinação</h3>
            <M block={true}>{"m = \\frac{\\Delta y}{\\Delta x}"}</M>
          </div>
          <div className="math-card">
            <span>⊥</span>
            <h3>Perpendicularidade</h3>
            <M block={true}>{"m_1 m_2 = -1"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Distância entre pontos"
          statement={
            <p>Qual é a distância entre os pontos A(1, 1) e B(4, 5)?</p>
          }
          options={[
            { letter: "a", text: "4" },
            { letter: "b", text: "5", correct: true },
            { letter: "c", text: "7" },
            { letter: "d", text: "3" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = \\sqrt{(4-1)^2+(5-1)^2} = \\sqrt{9+16} = \\sqrt{25} = 5"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Equação da reta"
          statement={
            <p>
              Qual é a equação da reta que passa pelos pontos (0, 3) e (2, 7)?
            </p>
          }
          options={[
            { letter: "a", text: "y = 2x + 3", correct: true },
            { letter: "b", text: "y = 3x + 2" },
            { letter: "c", text: "y = x + 3" },
            { letter: "d", text: "y = 2x − 3" },
          ]}
          resolution={
            <>
              <M block={true}>{"m = \\frac{7-3}{2-0} = 2 \\Rightarrow y = 2x + 3"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Distância ponto-reta"
          statement={
            <p>
              Calcule a distância do ponto P(1, 2) à reta 3x − 4y + 5 = 0.
            </p>
          }
          options={[
            { letter: "a", text: "0" },
            { letter: "b", text: "0" },
            { letter: "c", text: "2/5 = 0,4", correct: true },
            { letter: "d", text: "2" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = \\frac{|3\\times1-4\\times2+5|}{\\sqrt{9+16}} = \\frac{|3-8+5|}{5} = \\frac{0}{5} = 0"}</M>
              <p>P está na reta! Distância = 0.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. GPS e coordenadas"
          statement={
            <p>
              Numa planta, dois bairros estão nas coordenadas A(1, 2) e B(7, 10)
              (em km). Qual é a distância em linha reta?
            </p>
          }
          options={[
            { letter: "a", text: "10 km", correct: true },
            { letter: "b", text: "8 km" },
            { letter: "c", text: "14 km" },
            { letter: "d", text: "6 km" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = \\sqrt{(7-1)^2+(10-2)^2} = \\sqrt{36+64} = \\sqrt{100} = 10 \\text{ km}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Retas de produção"
          statement={
            <p>
              Uma empresa tem custo fixo de R$ 500 e custo variável de R$ 30 por
              unidade. A receita é R$ 50 por unidade. A partir de qual quantidade
              há lucro? (Encontre o ponto de equilíbrio.)
            </p>
          }
          options={[
            { letter: "a", text: "25 unidades", correct: true },
            { letter: "b", text: "20 unidades" },
            { letter: "c", text: "50 unidades" },
            { letter: "d", text: "10 unidades" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Receita} = 50q \\qquad \\text{Custo} = 30q + 500"}</M>
              <M block={true}>{"50q = 30q + 500 \\Rightarrow 20q = 500 \\Rightarrow q = 25"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
