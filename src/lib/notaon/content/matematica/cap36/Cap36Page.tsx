"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 36</span>
          <h1>Geometria Espacial: Prismas</h1>
          <p>
            Estude prismas retos e oblíquos, calcule volumes, áreas laterais e totais.
            Explore cubos, paralelepípedos e prismas regulares com aplicações em
            embalagens, construção civil e design.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Prisma — Conceito e Elementos</h2>
        <p>
          Um <strong>prisma</strong> é um sólido com duas bases congruentes e paralelas
          (polígonos) e faces laterais paralelas. É <strong>reto</strong> quando as faces
          laterais são perpendiculares às bases.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Base</td><td>Polígono superior e inferior</td></tr>
              <tr><td>Face lateral</td><td>Paralelogramo (ret: retângulo)</td></tr>
              <tr><td>Aresta lateral</td><td>Aresta entre faces laterais</td></tr>
              <tr><td>Altura (h)</td><td>Distância entre as bases</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Volume</span>
        <h2>2. Volume do Prisma</h2>
        <M block={true}>{"V = A_b \\times h"}</M>
        <p>Onde <M>{"A_b"}</M> é a área da base e <M>{"h"}</M> é a altura.</p>
        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr><th>Prisma</th><th>Base</th><th>Volume</th></tr>
              </thead>
              <tbody>
                <tr><td>Cubo (l)</td><td><M>{"l^2"}</M></td><td><M>{"V = l^3"}</M></td></tr>
                <tr><td>Paralelepípedo (a,b,c)</td><td><M>{"a \\times b"}</M></td><td><M>{"V = a \\times b \\times c"}</M></td></tr>
                <tr><td>Prisma triangular (b,h_b,h)</td><td><M>{"\\frac{bh_b}{2}"}</M></td><td><M>{"V = \\frac{bh_b h}{2}"}</M></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área Lateral</span>
        <h2>3. Área Lateral do Prisma Reto</h2>
        <M block={true}>{"A_L = P_b \\times h \\quad (P_b = \\text{perímetro da base})"}</M>
        <div className="lesson-highlight">
          <h3>Área total</h3>
          <M block={true}>{"A_T = A_L + 2 A_b"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cubo</span>
        <h2>4. Cubo — Propriedades</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Cubo">
            {/* Face frontal */}
            <rect x="40" y="80" width="100" height="100" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            {/* Face superior */}
            <polygon points="40,80 80,40 180,40 140,80" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
            {/* Face lateral direita */}
            <polygon points="140,80 180,40 180,140 140,180" fill="#60a5fa" stroke="#2563eb" strokeWidth="2"/>
            {/* Arestas internas */}
            <line x1="40" y1="80" x2="80" y2="40" stroke="#2563eb" strokeWidth="2"/>
            <line x1="140" y1="80" x2="180" y2="40" stroke="#2563eb" strokeWidth="2"/>
            <line x1="140" y1="180" x2="180" y2="140" stroke="#2563eb" strokeWidth="2"/>
            {/* Rótulo */}
            <text x="85" y="135" fontSize="14" fill="#1e40af" fontWeight="700">l</text>
            <text x="110" y="195" textAnchor="middle" fontSize="11" fill="#374151">V = l³ | A_T = 6l²</text>
          </svg>
          <figcaption>Cubo: todas as faces são quadrados congruentes</figcaption>
        </figure>
        <M block={true}>{"V_{\\text{cubo}} = l^3 \\qquad A_T = 6l^2 \\qquad d = l\\sqrt{3}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Isométrica</span>
        <h2>5. Prisma Retangular em Perspectiva 3D</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Prisma retangular em perspectiva isométrica com comprimento, largura, altura e fórmula V=B×h">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>

            {/* === Paralelepípedo isométrico (perspectiva cavaleira) ===
                 Vértices da face frontal: (160,80) (320,80) (320,180) (160,180)
                 Face superior: deslocada +60x -40y
                 (160,80) -> (220,40)  (320,80) -> (380,40)
                 Face lateral direita: (320,80)(380,40)(380,140)(320,180) */}

            {/* Face frontal */}
            <rect x="160" y="80" width="160" height="100" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>

            {/* Face superior */}
            <polygon points="160,80 220,40 380,40 320,80" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2"/>

            {/* Face lateral direita */}
            <polygon points="320,80 380,40 380,140 320,180" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2"/>

            {/* --- Cota COMPRIMENTO (base inferior da face frontal) --- */}
            <line x1="160" y1="195" x2="320" y2="195" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="160" y1="190" x2="160" y2="200" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="320" y1="190" x2="320" y2="200" stroke="#1e40af" strokeWidth="1.3"/>
            <text x="240" y="212" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">comprimento (c)</text>

            {/* --- Cota LARGURA (eixo profundidade, face superior) --- */}
            <line x1="320" y1="28" x2="380" y2="28" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="320" y1="23" x2="320" y2="33" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="380" y1="23" x2="380" y2="33" stroke="#1e40af" strokeWidth="1.3"/>
            <text x="350" y="20" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="700">largura (l)</text>

            {/* --- Cota ALTURA (lado esquerdo da face frontal) --- */}
            <line x1="145" y1="80" x2="145" y2="180" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="140" y1="80" x2="150" y2="80" stroke="#1e40af" strokeWidth="1.3"/>
            <line x1="140" y1="180" x2="150" y2="180" stroke="#1e40af" strokeWidth="1.3"/>
            <text x="108" y="134" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="700">altura (h)</text>

            {/* --- Fórmula anotada à direita --- */}
            <text x="430" y="80" textAnchor="start" fontSize="15" fill="#1e40af" fontWeight="700">V = B × h</text>
            <text x="430" y="100" textAnchor="start" fontSize="13" fill="#374151">B = c × l (área da base)</text>
            <text x="430" y="120" textAnchor="start" fontSize="13" fill="#374151">V = c × l × h</text>
            <text x="430" y="148" textAnchor="start" fontSize="12" fill="#374151">A_T = 2(cl + lh + ch)</text>
            <text x="430" y="168" textAnchor="start" fontSize="12" fill="#374151">d = √(c²+l²+h²)</text>
          </svg>
          <figcaption>Prisma retangular: comprimento, largura e altura com fórmula V = B × h</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Paralelepípedo</span>
        <h2>5. Paralelepípedo Retângulo</h2>
        <M block={true}>{"V = a \\times b \\times c \\qquad A_T = 2(ab+bc+ac)"}</M>
        <M block={true}>{"d = \\sqrt{a^2 + b^2 + c^2} \\quad (\\text{diagonal espacial})"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Caixa 5×4×3: V = 60; AT = 2(20+12+15) = 94; d = √(25+16+9) = √50 ≈ 7,07</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Prisma Triangular</span>
        <h2>6. Prisma de Base Triangular</h2>
        <M block={true}>{"V = \\frac{b \\times h_b}{2} \\times h \\qquad A_L = P_\\triangle \\times h"}</M>
        <div className="lesson-highlight">
          <h3>Prisma equilátero (lado a, altura h)</h3>
          <M block={true}>{"V = \\frac{a^2\\sqrt{3}}{4} \\times h"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Prisma Hexagonal</span>
        <h2>7. Prisma de Base Hexagonal Regular</h2>
        <M block={true}>{"A_{\\text{hex}} = \\frac{3\\sqrt{3}}{2}l^2 \\qquad V = \\frac{3\\sqrt{3}}{2}l^2 \\times h"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planificação</span>
        <h2>8. Planificação do Prisma</h2>
        <p>
          A planificação "abre" o sólido em uma figura plana. Para um prisma reto
          com base poligonal:
        </p>
        <ul>
          <li>2 bases (polígonos congruentes).</li>
          <li>Faces laterais = retângulos com largura = lado da base e altura = altura do prisma.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema de Cavalieri</span>
        <h2>9. Princípio de Cavalieri</h2>
        <M block={true}>{"\\text{Se dois sólidos têm igual área de seção em toda altura, } V_1 = V_2"}</M>
        <p>
          Isso justifica que <strong>todos os prismas</strong> com base igual e mesma
          altura têm o mesmo volume, independentemente de serem retos ou oblíquos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Prismas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>V</span>
            <h3>Volume</h3>
            <M block={true}>{"V = A_b \\times h"}</M>
          </div>
          <div className="math-card">
            <span>A_L</span>
            <h3>Área lateral</h3>
            <M block={true}>{"A_L = P_b \\times h"}</M>
          </div>
          <div className="math-card">
            <span>A_T</span>
            <h3>Área total</h3>
            <M block={true}>{"A_T = A_L + 2A_b"}</M>
          </div>
          <div className="math-card">
            <span>d</span>
            <h3>Diagonal cubo</h3>
            <M block={true}>{"d = l\\sqrt{3}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Volume do cubo"
          statement={<p>Qual é o volume de um cubo de aresta 4 cm?</p>}
          options={[
            { letter: "a", text: "48 cm³" },
            { letter: "b", text: "64 cm³", correct: true },
            { letter: "c", text: "16 cm³" },
            { letter: "d", text: "32 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = 4^3 = 64 \\text{ cm}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Área total do paralelepípedo"
          statement={
            <p>
              Um paralelepípedo tem dimensões 5 cm × 4 cm × 3 cm.
              Qual é a área total?
            </p>
          }
          options={[
            { letter: "a", text: "94 cm²", correct: true },
            { letter: "b", text: "60 cm²" },
            { letter: "c", text: "47 cm²" },
            { letter: "d", text: "120 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A_T = 2(5\\times4 + 4\\times3 + 5\\times3) = 2(20+12+15) = 2\\times47 = 94 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Diagonal do cubo"
          statement={<p>Qual é a diagonal espacial de um cubo de aresta 6 cm?</p>}
          options={[
            { letter: "a", text: <M>{"6\\sqrt{3}"}</M>, correct: true },
            { letter: "b", text: <M>{"6\\sqrt{2}"}</M> },
            { letter: "c", text: "18 cm" },
            { letter: "d", text: <M>{"12\\sqrt{2}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"d = 6\\sqrt{3} \\approx 10{,}39 \\text{ cm}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Embalagem de sabão"
          statement={
            <p>
              Uma caixa de sabão em pó tem formato de paralelepípedo com
              20 cm × 10 cm × 30 cm. Quantos litros de produto ela comporta?
            </p>
          }
          options={[
            { letter: "a", text: "6 litros", correct: true },
            { letter: "b", text: "3 litros" },
            { letter: "c", text: "60 litros" },
            { letter: "d", text: "1 litro" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = 20\\times10\\times30 = 6000 \\text{ cm}^3 = 6 \\text{ litros}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Piscina prismática"
          statement={
            <p>
              Uma piscina tem formato de prisma triangular isósceles com base
              4 m, altura triangular 3 m e comprimento 8 m. Qual é o volume?
            </p>
          }
          options={[
            { letter: "a", text: "48 m³", correct: true },
            { letter: "b", text: "96 m³" },
            { letter: "c", text: "24 m³" },
            { letter: "d", text: "32 m³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = \\frac{4\\times3}{2}\\times8 = 6\\times8 = 48 \\text{ m}^3"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
