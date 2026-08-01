"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 33</span>
          <h1>Quadriláteros e Polígonos</h1>
          <p>
            Estude as propriedades dos quadriláteros (paralelogramos, trapézios,
            losangos, retângulos e quadrados) e dos polígonos em geral.
            Calcule diagonais, perímetros e ângulos internos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polígonos</span>
        <h2>1. Polígonos — Definição e Elementos</h2>
        <p>
          Um <strong>polígono</strong> é uma figura plana fechada formada por segmentos de reta.
          Um polígono de n lados tem n vértices, n lados e <M>{"\\dfrac{n(n-3)}{2}"}</M> diagonais.
        </p>
        <M block={true}>{"\\text{Diagonais} = \\frac{n(n-3)}{2} \\qquad S_i = (n-2)\\times180°"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Polígono</th><th>n</th><th>Diagonais</th><th>S. interna</th></tr>
            </thead>
            <tbody>
              <tr><td>Quadrilátero</td><td>4</td><td>2</td><td>360°</td></tr>
              <tr><td>Pentágono</td><td>5</td><td>5</td><td>540°</td></tr>
              <tr><td>Hexágono</td><td>6</td><td>9</td><td>720°</td></tr>
              <tr><td>Octógono</td><td>8</td><td>20</td><td>1080°</td></tr>
              <tr><td>Decágono</td><td>10</td><td>35</td><td>1440°</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadriláteros</span>
        <h2>2. Tipos de Quadriláteros</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Propriedades</th></tr>
            </thead>
            <tbody>
              <tr><td>Paralelogramo</td><td>Lados opostos paralelos e iguais; ângulos opostos iguais; diagonais bissetoras</td></tr>
              <tr><td>Retângulo</td><td>Paralelogramo com 4 ângulos retos; diagonais iguais</td></tr>
              <tr><td>Losango</td><td>Paralelogramo com 4 lados iguais; diagonais perpendiculares</td></tr>
              <tr><td>Quadrado</td><td>Retângulo + Losango; diagonal = l√2</td></tr>
              <tr><td>Trapézio</td><td>1 par de lados paralelos (bases)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Paralelogramo</span>
        <h2>3. Paralelogramo — Propriedades</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 300 160" width="300" height="160" aria-label="Paralelogramo">
            {/* Paralelogramo */}
            <polygon points="60,130 240,130 280,40 100,40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            {/* Diagonais */}
            <line x1="60" y1="130" x2="280" y2="40" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1="240" y1="130" x2="100" y2="40" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            {/* Rótulos */}
            <text x="55" y="145" fontSize="12" fill="#374151">A</text>
            <text x="238" y="145" fontSize="12" fill="#374151">B</text>
            <text x="278" y="35" fontSize="12" fill="#374151">C</text>
            <text x="95" y="35" fontSize="12" fill="#374151">D</text>
            <text x="150" y="160" textAnchor="middle" fontSize="11" fill="#374151">AB ∥ DC; AD ∥ BC</text>
          </svg>
          <figcaption>Paralelogramo: lados opostos paralelos; diagonais se bissetam</figcaption>
        </figure>
        <M block={true}>{"d_1^2 + d_2^2 = 2(a^2 + b^2) \\quad (\\text{lei do paralelogramo})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trapézio</span>
        <h2>4. Trapézio — Propriedades e Base Média</h2>
        <M block={true}>{"\\text{Base média} = \\frac{B + b}{2}"}</M>
        <div className="lesson-highlight">
          <h3>Trapézio isósceles</h3>
          <p>Lados não paralelos iguais; ângulos da base iguais; diagonais iguais.</p>
        </div>
        <div className="lesson-highlight">
          <h3>Trapézio retângulo</h3>
          <p>Um lado perpendicular às bases.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadrado e Losango</span>
        <h2>5. Diagonal do Quadrado e do Losango</h2>
        <M block={true}>{"\\text{Quadrado: } d = l\\sqrt{2} \\qquad \\text{Losango: } A = \\frac{D \\times d}{2}"}</M>
        <div className="lesson-highlight">
          <h3>Quadrado de lado 5 cm</h3>
          <M block={true}>{"d = 5\\sqrt{2} \\approx 7{,}07 \\text{ cm}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polígono Regular</span>
        <h2>6. Polígonos Regulares</h2>
        <M block={true}>{"\\text{Ângulo interno} = \\frac{(n-2)\\times180°}{n} \\qquad \\text{Ângulo externo} = \\frac{360°}{n}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Polígono</th><th>Ângulo interno</th><th>Ângulo externo</th></tr>
            </thead>
            <tbody>
              <tr><td>Triângulo equilátero</td><td>60°</td><td>120°</td></tr>
              <tr><td>Quadrado</td><td>90°</td><td>90°</td></tr>
              <tr><td>Pentágono</td><td>108°</td><td>72°</td></tr>
              <tr><td>Hexágono</td><td>120°</td><td>60°</td></tr>
              <tr><td>Octógono</td><td>135°</td><td>45°</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hexágono Regular</span>
        <h2>7. Hexágono Regular</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 200 200" width="200" height="200" aria-label="Hexágono regular">
            <polygon
              points="100,20 172,60 172,140 100,180 28,140 28,60"
              fill="#d1fae5" stroke="#059669" strokeWidth="2"
            />
            {/* Raio */}
            <line x1="100" y1="100" x2="172" y2="60" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            <circle cx="100" cy="100" r="3" fill="#dc2626"/>
            <text x="140" y="72" fontSize="11" fill="#dc2626">r = l</text>
            <text x="100" y="195" textAnchor="middle" fontSize="11" fill="#374151">Hexágono regular: r = lado</text>
          </svg>
          <figcaption>No hexágono regular, o raio do circuncírculo é igual ao lado</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Apótema</span>
        <h2>8. Apótema de Polígono Regular</h2>
        <M block={true}>{"\\text{apótema} = a = r\\cos\\left(\\frac{\\pi}{n}\\right) = \\frac{l}{2\\tan(\\pi/n)}"}</M>
        <div className="lesson-highlight">
          <h3>Hexágono regular de lado 6</h3>
          <M block={true}>{"a = \\frac{6}{2\\tan(30°)} = \\frac{6}{2\\times\\frac{1}{\\sqrt{3}}} = 3\\sqrt{3} \\approx 5{,}2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perímetro</span>
        <h2>9. Perímetros de Quadriláteros</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Figura</th><th>Perímetro</th></tr>
            </thead>
            <tbody>
              <tr><td>Quadrado</td><td><M>{"P = 4l"}</M></td></tr>
              <tr><td>Retângulo</td><td><M>{"P = 2(a+b)"}</M></td></tr>
              <tr><td>Paralelogramo</td><td><M>{"P = 2(a+b)"}</M></td></tr>
              <tr><td>Losango</td><td><M>{"P = 4l"}</M></td></tr>
              <tr><td>Trapézio</td><td><M>{"P = B + b + c + d"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Quadriláteros</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Paralelogramo: lados opostos iguais; diagonais bissetoras.</li>
            <li>Retângulo: diagonais iguais; todos os ângulos 90°.</li>
            <li>Losango: diagonais perpendiculares; <M>{"A = Dd/2"}</M>.</li>
            <li>Quadrado: <M>{"d = l\\sqrt{2}"}</M>.</li>
            <li>Trapézio: base média = (B+b)/2.</li>
            <li>Polígono regular: ângulo interno = (n-2)·180°/n.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Diagonal do quadrado"
          statement={<p>Um quadrado tem lado 8 cm. Qual é a medida de sua diagonal?</p>}
          options={[
            { letter: "a", text: <M>{"8\\sqrt{3}"}</M> },
            { letter: "b", text: <M>{"8\\sqrt{2}"}</M>, correct: true },
            { letter: "c", text: "16 cm" },
            { letter: "d", text: "4 cm" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = 8\\sqrt{2} \\approx 11{,}31 \\text{ cm}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ângulo interno de polígono"
          statement={
            <p>Qual é o ângulo interno de um polígono regular de 12 lados?</p>
          }
          options={[
            { letter: "a", text: "135°" },
            { letter: "b", text: "150°", correct: true },
            { letter: "c", text: "160°" },
            { letter: "d", text: "144°" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{(12-2)\\times180°}{12} = \\frac{1800°}{12} = 150°"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Diagonais de polígono"
          statement={
            <p>Quantas diagonais tem um polígono de 10 lados?</p>
          }
          options={[
            { letter: "a", text: "35", correct: true },
            { letter: "b", text: "45" },
            { letter: "c", text: "25" },
            { letter: "d", text: "30" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = \\frac{10(10-3)}{2} = \\frac{70}{2} = 35"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Piso hexagonal"
          statement={
            <p>
              Um piso é revestido com azulejos hexagonais regulares de lado 10 cm.
              Qual é a área de cada azulejo? (<M>{"A = \\frac{3\\sqrt{3}}{2}l^2"}</M>)
            </p>
          }
          options={[
            { letter: "a", text: <M>{"150\\sqrt{3} \\approx 259{,}8 \\text{ cm}^2"}</M>, correct: true },
            { letter: "b", text: "200 cm²" },
            { letter: "c", text: "100√3 cm²" },
            { letter: "d", text: "300 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\frac{3\\sqrt{3}}{2}\\times10^2 = 150\\sqrt{3} \\approx 259{,}8 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cerca em terreno trapezoidal"
          statement={
            <p>
              Um terreno tem forma de trapézio com bases 40 m e 60 m e lados não
              paralelos de 25 m cada. Qual é o custo total para cercar o terreno
              a R$ 50/m?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 7.500", correct: true },
            { letter: "b", text: "R$ 5.000" },
            { letter: "c", text: "R$ 6.000" },
            { letter: "d", text: "R$ 8.000" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = 40+60+25+25 = 150 \\text{ m} \\Rightarrow \\text{Custo} = 150 \\times 50 = R\\$\\; 7500"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
