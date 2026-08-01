"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 37</span>
          <h1>Pirâmides e Cones</h1>
          <p>
            Calcule volume, área lateral e total de pirâmides regulares e cones.
            Entenda a relação entre pirâmide e prisma e aplique esses sólidos em
            arquitetura e engenharia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pirâmide</span>
        <h2>1. Pirâmide — Definição e Elementos</h2>
        <p>
          Uma <strong>pirâmide</strong> tem uma base poligonal e faces triangulares
          que convergem a um único ponto (ápice). É <strong>regular</strong> quando a
          base é um polígono regular e o ápice está sobre o centro da base.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Apótema da base (a)</td><td>Raio do círculo inscrito na base</td></tr>
              <tr><td>Apótema lateral (l)</td><td>Altura da face triangular lateral</td></tr>
              <tr><td>Aresta lateral (e)</td><td>Aresta que vai do vértice ao ápice</td></tr>
              <tr><td>Altura (h)</td><td>Distância do ápice ao centro da base</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Volume da Pirâmide</span>
        <h2>2. Volume da Pirâmide</h2>
        <M block={true}>{"V = \\frac{1}{3} A_b \\times h"}</M>
        <div className="lesson-highlight">
          <h3>Relação pirâmide-prisma</h3>
          <M block={true}>{"V_{\\text{pirâmide}} = \\frac{1}{3} V_{\\text{prisma}}"}</M>
          <p>Pirâmide é 1/3 do prisma de mesma base e mesma altura.</p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Pirâmide">
            {/* Base quadrada */}
            <polygon points="40,160 180,160 200,120 60,120" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            {/* Faces laterais */}
            <polygon points="60,120 110,30 200,120" fill="#fde68a" stroke="#d97706" strokeWidth="2"/>
            <polygon points="40,160 110,30 60,120" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
            <polygon points="180,160 110,30 200,120" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
            <polygon points="40,160 110,30 180,160" fill="#fcd34d" stroke="#d97706" strokeWidth="2"/>
            {/* Altura */}
            <line x1="110" y1="30" x2="120" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="125" y="90" fontSize="11" fill="#dc2626">h</text>
            {/* Ápice */}
            <circle cx="110" cy="30" r="4" fill="#374151"/>
            <text x="110" y="200" textAnchor="middle" fontSize="11" fill="#374151">V = Aᵦ × h / 3</text>
          </svg>
          <figcaption>Pirâmide: ápice converge; V = (1/3)Aᵦ·h</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área da Pirâmide</span>
        <h2>3. Área Lateral e Total da Pirâmide Regular</h2>
        <M block={true}>{"A_L = \\frac{P_b \\times l}{2} \\quad (l = \\text{apótema lateral})"}</M>
        <M block={true}>{"A_T = A_L + A_b"}</M>
        <div className="lesson-highlight">
          <h3>Pirâmide quadrangular regular (lado a, apótema lateral l)</h3>
          <M block={true}>{"A_L = \\frac{4a \\times l}{2} = 2al"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação Geométrica</span>
        <h2>4. Relação entre h, l e a</h2>
        <M block={true}>{"l^2 = h^2 + a^2 \\quad (\\text{apótema lateral}^2 = h^2 + \\text{apótema da base}^2)"}</M>
        <M block={true}>{"e^2 = h^2 + R^2 \\quad (R = \\text{raio do circuncírculo da base})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cone</span>
        <h2>5. Cone — Definição</h2>
        <p>
          O <strong>cone</strong> é o limite de pirâmides com base regular de infinitos lados.
          Tem base circular, ápice (vértice) e geratriz (g).
        </p>
        <M block={true}>{"g^2 = h^2 + r^2 \\quad (\\text{Pitágoras})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Volume e Área do Cone</span>
        <h2>6. Volume e Áreas do Cone</h2>
        <M block={true}>{"V = \\frac{1}{3}\\pi r^2 h"}</M>
        <M block={true}>{"A_L = \\pi r g \\qquad A_T = \\pi r(r+g) = \\pi r^2 + \\pi r g"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Cone com r = 3 cm, h = 4 cm → g = 5 cm:</p>
          <M block={true}>{"V = \\frac{1}{3}\\pi\\times9\\times4 = 12\\pi \\approx 37{,}7 \\text{ cm}^3"}</M>
          <M block={true}>{"A_T = \\pi\\times3\\times(3+5) = 24\\pi \\approx 75{,}4 \\text{ cm}^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo Visual</span>
        <h2>6b. Pirâmide de Base Quadrada e Cone — Lado a Lado</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Pirâmide de base quadrada e cone lado a lado com altura h e apótema rotulados">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>

            {/* ===== PIRÂMIDE (centro ~175) ===== */}
            {/* Base quadrada em perspectiva */}
            <polygon points="80,175 270,175 290,145 100,145" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            {/* Faces laterais */}
            <polygon points="100,145 175,30 290,145" fill="#fde68a" stroke="#d97706" strokeWidth="2"/>
            <polygon points="80,175 175,30 100,145" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
            <polygon points="270,175 175,30 290,145" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
            <polygon points="80,175 175,30 270,175" fill="#fcd34d" stroke="#d97706" strokeWidth="2"/>
            {/* Ápice */}
            <circle cx="175" cy="30" r="4" fill="#1e40af"/>
            {/* Altura tracejada */}
            <line x1="175" y1="30" x2="185" y2="160" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="192" y="100" fontSize="12" fill="#dc2626" fontWeight="700">h</text>
            {/* Apótema lateral (face frontal) */}
            <line x1="175" y1="30" x2="175" y2="175" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6"/>
            <line x1="175" y1="175" x2="270" y2="175" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="225" y="190" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="700">a (apótema base)</text>
            {/* Rótulo */}
            <text x="175" y="210" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="700">Pirâmide Quadrangular</text>

            {/* Separador */}
            <line x1="350" y1="20" x2="350" y2="200" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="6,4"/>

            {/* ===== CONE (centro ~525) ===== */}
            {/* Base elíptica */}
            <ellipse cx="525" cy="168" rx="130" ry="22" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            {/* Superfície lateral */}
            <polygon points="395,168 525,30 655,168" fill="#6ee7b7" stroke="#059669" strokeWidth="2"/>
            {/* Sobrepor a parte inferior da elipse (frente) */}
            <path d="M395,168 A130,22 0 0,0 655,168" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            {/* Ápice */}
            <circle cx="525" cy="30" r="4" fill="#1e40af"/>
            {/* Altura tracejada */}
            <line x1="525" y1="30" x2="525" y2="168" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="533" y="100" fontSize="12" fill="#dc2626" fontWeight="700">h</text>
            {/* Raio da base */}
            <line x1="525" y1="168" x2="655" y2="168" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="593" y="185" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="700">r</text>
            {/* Geratriz */}
            <line x1="525" y1="30" x2="655" y2="168" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="608" y="94" fontSize="11" fill="#7c3aed" fontWeight="700">g</text>
            {/* Rótulo */}
            <text x="525" y="210" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="700">Cone</text>
          </svg>
          <figcaption>Pirâmide quadrangular (h = altura, a = apótema) e Cone (h = altura, r = raio, g = geratriz)</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Pirâmide Quadrangular</th>
                <th>Cone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base</td>
                <td>Quadrado de lado <M>{"a"}</M></td>
                <td>Círculo de raio <M>{"r"}</M></td>
              </tr>
              <tr>
                <td>Área da base</td>
                <td><M>{"A_b = a^2"}</M></td>
                <td><M>{"A_b = \\pi r^2"}</M></td>
              </tr>
              <tr>
                <td>Volume</td>
                <td><M>{"V = \\dfrac{a^2 h}{3}"}</M></td>
                <td><M>{"V = \\dfrac{\\pi r^2 h}{3}"}</M></td>
              </tr>
              <tr>
                <td>Área lateral</td>
                <td><M>{"A_L = \\dfrac{4a \\cdot l}{2} = 2al"}</M></td>
                <td><M>{"A_L = \\pi r g"}</M></td>
              </tr>
              <tr>
                <td>Relação das arestas</td>
                <td><M>{"l^2 = h^2 + a_{\\text{ap}}^2"}</M></td>
                <td><M>{"g^2 = h^2 + r^2"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tronco</span>
        <h2>7. Tronco de Pirâmide e Tronco de Cone</h2>
        <M block={true}>{"V_{\\text{tronco}} = \\frac{h}{3}(A_1 + A_2 + \\sqrt{A_1 A_2})"}</M>
        <div className="lesson-highlight">
          <h3>Tronco de cone</h3>
          <M block={true}>{"V = \\frac{\\pi h}{3}(R^2 + Rr + r^2) \\qquad A_L = \\pi(R+r)g"}</M>
          <M block={true}>{"g = \\sqrt{h^2+(R-r)^2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planificação</span>
        <h2>8. Planificação do Cone</h2>
        <p>
          A planificação do cone produz um setor circular com raio = geratriz g
          e comprimento de arco = <M>{"2\\pi r"}</M>.
        </p>
        <M block={true}>{"\\text{Ângulo do setor: } \\alpha = \\frac{r}{g} \\times 360°"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pirâmides Famosas</span>
        <h2>9. Aplicação: Pirâmide de Gizé</h2>
        <div className="lesson-highlight">
          <h3>Dados aproximados</h3>
          <p>Base quadrada ≈ 230 m × 230 m; Altura original ≈ 146,5 m.</p>
          <M block={true}>{"V \\approx \\frac{1}{3}\\times230^2\\times146{,}5 \\approx 2{,}6 \\text{ milhões de m}^3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Pirâmides e Cones</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>V🔺</span>
            <h3>Pirâmide</h3>
            <M block={true}>{"V = \\frac{A_b h}{3}"}</M>
          </div>
          <div className="math-card">
            <span>A_L🔺</span>
            <h3>Lateral pirâm.</h3>
            <M block={true}>{"A_L = \\frac{P_b l}{2}"}</M>
          </div>
          <div className="math-card">
            <span>V🔻</span>
            <h3>Cone</h3>
            <M block={true}>{"V = \\frac{\\pi r^2 h}{3}"}</M>
          </div>
          <div className="math-card">
            <span>A_L🔻</span>
            <h3>Lateral cone</h3>
            <M block={true}>{"A_L = \\pi r g"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Volume de pirâmide"
          statement={
            <p>
              Uma pirâmide quadrangular tem base de 6 cm × 6 cm e altura 9 cm.
              Qual é o volume?
            </p>
          }
          options={[
            { letter: "a", text: "324 cm³" },
            { letter: "b", text: "108 cm³", correct: true },
            { letter: "c", text: "162 cm³" },
            { letter: "d", text: "54 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = \\frac{1}{3}\\times36\\times9 = \\frac{324}{3} = 108 \\text{ cm}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Volume do cone"
          statement={
            <p>
              Um cone tem raio da base 5 cm e altura 12 cm. Qual é o volume?
              (use π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 314 cm³", correct: true },
            { letter: "b", text: "≈ 628 cm³" },
            { letter: "c", text: "≈ 942 cm³" },
            { letter: "d", text: "≈ 157 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = \\frac{1}{3}\\times3{,}14\\times25\\times12 = \\frac{942}{3} = 314 \\text{ cm}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Área total do cone"
          statement={
            <p>
              Um cone tem r = 3 cm e h = 4 cm. Calcule a área total.
              (use π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 75,36 cm²", correct: true },
            { letter: "b", text: "≈ 47,1 cm²" },
            { letter: "c", text: "≈ 94,2 cm²" },
            { letter: "d", text: "≈ 28,26 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"g = \\sqrt{9+16} = 5 \\Rightarrow A_T = 3{,}14\\times3\\times(3+5) = 3{,}14\\times24 \\approx 75{,}36 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Chapéu de aniversário"
          statement={
            <p>
              Um chapéu de festa tem formato cônico com diâmetro da base 20 cm e
              geratriz 26 cm. Qual é a área da superfície lateral (papel necessário)?
              (π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 816,4 cm²", correct: true },
            { letter: "b", text: "≈ 1632,8 cm²" },
            { letter: "c", text: "≈ 408,2 cm²" },
            { letter: "d", text: "≈ 314 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A_L = \\pi r g = 3{,}14\\times10\\times26 = 816{,}4 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Telhado piramidal"
          statement={
            <p>
              Um telhado piramidal quadrangular regular tem base 8 m × 8 m e
              apótema lateral de 5 m. Calcule a área da cobertura (lateral).
            </p>
          }
          options={[
            { letter: "a", text: "80 m²", correct: true },
            { letter: "b", text: "160 m²" },
            { letter: "c", text: "40 m²" },
            { letter: "d", text: "64 m²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A_L = \\frac{P_b \\times l}{2} = \\frac{32 \\times 5}{2} = 80 \\text{ m}^2"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
