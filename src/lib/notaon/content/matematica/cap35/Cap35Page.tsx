"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 35</span>
          <h1>Áreas de Figuras Planas</h1>
          <p>
            Calcule áreas de triângulos, quadriláteros, polígonos regulares e círculos.
            Aplique fórmulas de área em problemas de construção, jardinagem, engenharia
            e design. Domine área de figuras compostas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulo</span>
        <h2>1. Área do Triângulo</h2>
        <M block={true}>{"A = \\frac{b \\times h}{2} \\qquad A = \\frac{ab\\sin C}{2}"}</M>
        <div className="lesson-highlight">
          <h3>Fórmula de Heron</h3>
          <M block={true}>{"A = \\sqrt{s(s-a)(s-b)(s-c)} \\quad s = \\frac{a+b+c}{2}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Triângulo equilátero de lado l</h3>
          <M block={true}>{"A = \\frac{l^2\\sqrt{3}}{4}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadriláteros</span>
        <h2>2. Áreas dos Quadriláteros</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Figura</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Quadrado</td><td><M>{"A = l^2"}</M></td></tr>
              <tr><td>Retângulo</td><td><M>{"A = b \\times h"}</M></td></tr>
              <tr><td>Paralelogramo</td><td><M>{"A = b \\times h"}</M></td></tr>
              <tr><td>Losango</td><td><M>{"A = \\dfrac{D \\times d}{2}"}</M></td></tr>
              <tr><td>Trapézio</td><td><M>{"A = \\dfrac{(B+b) \\times h}{2}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polígonos Regulares</span>
        <h2>3. Área de Polígono Regular</h2>
        <M block={true}>{"A = \\frac{P \\times a}{2} = \\frac{n \\times l \\times a}{2}"}</M>
        <p>Onde P = perímetro, a = apótema, n = número de lados, l = lado.</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Polígono</th><th>Área (lado l)</th></tr>
            </thead>
            <tbody>
              <tr><td>Triângulo equilátero</td><td><M>{"\\frac{l^2\\sqrt{3}}{4}"}</M></td></tr>
              <tr><td>Quadrado</td><td><M>{"l^2"}</M></td></tr>
              <tr><td>Hexágono</td><td><M>{"\\frac{3\\sqrt{3}}{2}l^2"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Círculo</span>
        <h2>4. Área do Círculo e Setor</h2>
        <M block={true}>{"A_{\\text{círculo}} = \\pi r^2 \\qquad A_{\\text{setor}} = \\frac{\\alpha}{360°}\\pi r^2"}</M>
        <M block={true}>{"A_{\\text{corona}} = \\pi(R^2 - r^2)"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Figuras Compostas</span>
        <h2>5. Área de Figuras Compostas</h2>
        <p>
          Divide-se a figura em partes conhecidas; soma-se (ou subtrai-se)
          as áreas de cada parte.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo — semicírculo sobre retângulo</h3>
          <p>Retângulo 8×6 com semicírculo de raio 4 sobre o lado maior:</p>
          <M block={true}>{"A = 8\\times6 + \\frac{\\pi\\times4^2}{2} = 48 + 8\\pi \\approx 73{,}1 \\text{ cm}^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Semelhança e Área</span>
        <h2>6. Razão entre Áreas de Figuras Semelhantes</h2>
        <M block={true}>{"\\frac{A_1}{A_2} = k^2 \\quad (k = \\text{razão de semelhança})"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Dois triângulos semelhantes de razão 3:5. Razão das áreas:</p>
          <M block={true}>{"\\frac{A_1}{A_2} = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coordenadas</span>
        <h2>7. Área pelo Método da Garrafa (Shoelace)</h2>
        <M block={true}>{"A = \\frac{1}{2}|x_1(y_2-y_n)+x_2(y_3-y_1)+\\cdots+x_n(y_1-y_{n-1})|"}</M>
        <div className="lesson-highlight">
          <h3>Triângulo com vértices (0,0), (4,0), (2,3)</h3>
          <M block={true}>{"A = \\frac{1}{2}|0(0-3)+4(3-0)+2(0-0)| = \\frac{1}{2}\\times12 = 6"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>8. Exemplos Visuais</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Áreas de figuras">
            {/* Triângulo */}
            <polygon points="40,130 120,130 80,40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            <text x="80" y="148" textAnchor="middle" fontSize="11" fill="#374151">Triângulo</text>
            <text x="80" y="88" textAnchor="middle" fontSize="10" fill="#1e40af">bh/2</text>
            {/* Trapézio */}
            <polygon points="150,130 260,130 240,50 170,50" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="205" y="148" textAnchor="middle" fontSize="11" fill="#374151">Trapézio</text>
            <text x="205" y="95" textAnchor="middle" fontSize="10" fill="#065f46">(B+b)h/2</text>
            {/* Losango */}
            <polygon points="300,130 340,90 300,50 260,90" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="300" y="148" textAnchor="middle" fontSize="11" fill="#374151">Losango</text>
            <text x="300" y="93" textAnchor="middle" fontSize="10" fill="#92400e">Dd/2</text>
          </svg>
          <figcaption>Triângulo (bh/2), Trapézio ((B+b)h/2), Losango (Dd/2)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Figuras e Fórmulas</span>
        <h2>8b. Quatro Figuras Planas — Dimensões e Fórmulas</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Quadrado, triângulo, trapézio e círculo com dimensões e fórmulas de área">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>

            {/* --- QUADRADO (x 30-130) --- */}
            <rect x="30" y="40" width="100" height="100" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            {/* cota lado */}
            <line x1="30" y1="155" x2="130" y2="155" stroke="#1e40af" strokeWidth="1.2"/>
            <line x1="30" y1="150" x2="30" y2="160" stroke="#1e40af" strokeWidth="1.2"/>
            <line x1="130" y1="150" x2="130" y2="160" stroke="#1e40af" strokeWidth="1.2"/>
            <text x="80" y="170" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="700">l</text>
            {/* cota altura */}
            <line x1="138" y1="40" x2="138" y2="140" stroke="#1e40af" strokeWidth="1.2"/>
            <line x1="133" y1="40" x2="143" y2="40" stroke="#1e40af" strokeWidth="1.2"/>
            <line x1="133" y1="140" x2="143" y2="140" stroke="#1e40af" strokeWidth="1.2"/>
            <text x="148" y="95" textAnchor="start" fontSize="12" fill="#1e40af" fontWeight="700">l</text>
            <text x="80" y="98" textAnchor="middle" fontSize="11" fill="#1e40af">A = l²</text>
            <text x="80" y="205" textAnchor="middle" fontSize="11" fill="#374151">Quadrado</text>

            {/* --- TRIÂNGULO (x 190-340) --- */}
            <polygon points="265,40 190,155 340,155" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            {/* base */}
            <line x1="190" y1="168" x2="340" y2="168" stroke="#065f46" strokeWidth="1.2"/>
            <line x1="190" y1="163" x2="190" y2="173" stroke="#065f46" strokeWidth="1.2"/>
            <line x1="340" y1="163" x2="340" y2="173" stroke="#065f46" strokeWidth="1.2"/>
            <text x="265" y="183" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="700">b</text>
            {/* altura tracejada */}
            <line x1="265" y1="40" x2="265" y2="155" stroke="#065f46" strokeWidth="1.2" strokeDasharray="4,3"/>
            <text x="272" y="100" fontSize="12" fill="#065f46" fontWeight="700">h</text>
            <text x="265" y="120" textAnchor="middle" fontSize="11" fill="#065f46">A = bh/2</text>
            <text x="265" y="205" textAnchor="middle" fontSize="11" fill="#374151">Triângulo</text>

            {/* --- TRAPÉZIO (x 380-530) --- */}
            <polygon points="420,40 490,40 530,155 380,155" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            {/* base menor (B) */}
            <line x1="420" y1="28" x2="490" y2="28" stroke="#92400e" strokeWidth="1.2"/>
            <line x1="420" y1="23" x2="420" y2="33" stroke="#92400e" strokeWidth="1.2"/>
            <line x1="490" y1="23" x2="490" y2="33" stroke="#92400e" strokeWidth="1.2"/>
            <text x="455" y="22" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="700">b</text>
            {/* base maior (b) */}
            <line x1="380" y1="168" x2="530" y2="168" stroke="#92400e" strokeWidth="1.2"/>
            <line x1="380" y1="163" x2="380" y2="173" stroke="#92400e" strokeWidth="1.2"/>
            <line x1="530" y1="163" x2="530" y2="173" stroke="#92400e" strokeWidth="1.2"/>
            <text x="455" y="183" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="700">B</text>
            {/* altura tracejada */}
            <line x1="455" y1="40" x2="455" y2="155" stroke="#92400e" strokeWidth="1.2" strokeDasharray="4,3"/>
            <text x="462" y="100" fontSize="12" fill="#92400e" fontWeight="700">h</text>
            <text x="455" y="115" textAnchor="middle" fontSize="10" fill="#92400e">A=(B+b)h/2</text>
            <text x="455" y="205" textAnchor="middle" fontSize="11" fill="#374151">Trapézio</text>

            {/* --- CÍRCULO (x 580-680) --- */}
            <circle cx="630" cy="97" r="57" fill="#fae8ff" stroke="#a855f7" strokeWidth="2"/>
            {/* raio */}
            <line x1="630" y1="97" x2="687" y2="97" stroke="#7e22ce" strokeWidth="2"/>
            <text x="660" y="90" textAnchor="middle" fontSize="12" fill="#7e22ce" fontWeight="700">r</text>
            <circle cx="630" cy="97" r="4" fill="#7e22ce"/>
            <text x="630" y="102" textAnchor="middle" fontSize="11" fill="#7e22ce">A = πr²</text>
            <text x="630" y="205" textAnchor="middle" fontSize="11" fill="#374151">Círculo</text>
          </svg>
          <figcaption>Quadrado (l²), Triângulo (bh/2), Trapézio ((B+b)h/2), Círculo (πr²)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Unidades</span>
        <h2>9. Conversão de Unidades de Área</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conversão</th><th>Valor</th></tr>
            </thead>
            <tbody>
              <tr><td>1 m²</td><td>10.000 cm² = 1.000.000 mm²</td></tr>
              <tr><td>1 km²</td><td>1.000.000 m²</td></tr>
              <tr><td>1 hectare (ha)</td><td>10.000 m²</td></tr>
              <tr><td>1 alqueire (SP)</td><td>≈ 24.200 m²</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Áreas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>△</span>
            <h3>Triângulo</h3>
            <M block={true}>{"A = \\frac{bh}{2}"}</M>
          </div>
          <div className="math-card">
            <span>⬜</span>
            <h3>Retângulo</h3>
            <M block={true}>{"A = b \\times h"}</M>
          </div>
          <div className="math-card">
            <span>◈</span>
            <h3>Losango</h3>
            <M block={true}>{"A = \\frac{Dd}{2}"}</M>
          </div>
          <div className="math-card">
            <span>●</span>
            <h3>Círculo</h3>
            <M block={true}>{"A = \\pi r^2"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Área do triângulo"
          statement={<p>Um triângulo tem base 10 cm e altura 6 cm. Qual é sua área?</p>}
          options={[
            { letter: "a", text: "60 cm²" },
            { letter: "b", text: "30 cm²", correct: true },
            { letter: "c", text: "15 cm²" },
            { letter: "d", text: "40 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\frac{10\\times6}{2} = 30 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Área do trapézio"
          statement={
            <p>
              Um trapézio tem bases 12 cm e 8 cm e altura 5 cm. Qual é sua área?
            </p>
          }
          options={[
            { letter: "a", text: "40 cm²" },
            { letter: "b", text: "50 cm²", correct: true },
            { letter: "c", text: "60 cm²" },
            { letter: "d", text: "25 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\frac{(12+8)\\times5}{2} = \\frac{100}{2} = 50 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fórmula de Heron"
          statement={
            <p>
              Calcule a área do triângulo de lados 5, 12 e 13 cm.
            </p>
          }
          options={[
            { letter: "a", text: "30 cm²", correct: true },
            { letter: "b", text: "60 cm²" },
            { letter: "c", text: "25 cm²" },
            { letter: "d", text: "15 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"s = \\frac{5+12+13}{2} = 15 \\Rightarrow A = \\sqrt{15\\times10\\times3\\times2} = \\sqrt{900} = 30 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Gramado circular"
          statement={
            <p>
              Um jardim circular de raio 7 m será gramado. O custo é R$ 15/m².
              Qual é o custo total? (π ≈ 22/7)
            </p>
          }
          options={[
            { letter: "a", text: "R$ 2.310,00", correct: true },
            { letter: "b", text: "R$ 1.540,00" },
            { letter: "c", text: "R$ 3.080,00" },
            { letter: "d", text: "R$ 660,00" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\pi\\times7^2 = \\frac{22}{7}\\times49 = 154 \\text{ m}^2 \\Rightarrow \\text{Custo} = 154\\times15 = R\\$\\;2310"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Azulejo em parede composta"
          statement={
            <p>
              Uma parede retangular de 4 m × 3 m possui uma janela circular de raio
              0,5 m e uma porta retangular de 0,8 m × 2 m. Qual é a área a ser
              azulejada? (π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 9,82 m²", correct: true },
            { letter: "b", text: "≈ 10,4 m²" },
            { letter: "c", text: "≈ 8,6 m²" },
            { letter: "d", text: "≈ 11,6 m²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = 4\\times3 - 3{,}14\\times0{,}25 - 0{,}8\\times2 = 12 - 0{,}785 - 1{,}6 \\approx 9{,}62 \\text{ m}^2"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
