"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 17</span>
          <h1>Trigonometria no Triângulo Retângulo</h1>
          <p>
            Domine as razões trigonométricas seno, cosseno e tangente, os ângulos
            notáveis, as relações inversas e as aplicações em cálculo de altura,
            distância e ângulo de elevação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Razões Trigonométricas no Triângulo Retângulo</h2>
        <p>
          Em um triângulo retângulo com ângulo agudo <M>{"\\theta"}</M>, os lados são:
          <strong> hipotenusa</strong> (lado oposto ao ângulo reto),
          <strong> cateto oposto</strong> e <strong>cateto adjacente</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 300 200" width="300" height="200" aria-label="Triângulo retângulo com razões trig">
            {/* Triângulo */}
            <polygon points="30,170 250,170 250,50" fill="#f0f4ff" stroke="#2563eb" strokeWidth="2"/>
            {/* Ângulo reto */}
            <polyline points="250,170 240,170 240,160 250,160" fill="none" stroke="#374151" strokeWidth="1.5"/>
            {/* Ângulo θ */}
            <path d="M 55 170 A 25 25 0 0 1 48 150" stroke="#dc2626" strokeWidth="1.5" fill="none"/>
            <text x="62" y="163" fontSize="13" fill="#dc2626">θ</text>
            {/* Rótulos lados */}
            <text x="135" y="185" textAnchor="middle" fontSize="12" fill="#16a34a">cateto adjacente</text>
            <text x="264" y="115" fontSize="12" fill="#7c3aed">cateto oposto</text>
            <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#dc2626">hipotenusa (h)</text>
          </svg>
          <figcaption>Triângulo retângulo: identificação dos lados em relação ao ângulo θ</figcaption>
        </figure>

        <M block={true}>{"\\sin\\theta = \\frac{\\text{cateto oposto}}{\\text{hipotenusa}} \\qquad \\cos\\theta = \\frac{\\text{cateto adjacente}}{\\text{hipotenusa}} \\qquad \\tan\\theta = \\frac{\\text{cateto oposto}}{\\text{cateto adjacente}}"}</M>

        <div className="lesson-highlight">
          <h3>Mnemônico — SOHCAHTOA</h3>
          <p>
            <strong>S</strong>OH = Seno: Oposto / Hipotenusa |
            <strong> C</strong>AH = Cosseno: Adjacente / Hipotenusa |
            <strong> T</strong>OA = Tangente: Oposto / Adjacente
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulos Notáveis</span>
        <h2>2. Ângulos Notáveis — 30°, 45° e 60°</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ângulo</th><th>sen</th><th>cos</th><th>tan</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>30°</td>
                <td><M>{"\\dfrac{1}{2}"}</M></td>
                <td><M>{"\\dfrac{\\sqrt{3}}{2}"}</M></td>
                <td><M>{"\\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}}"}</M></td>
              </tr>
              <tr>
                <td>45°</td>
                <td><M>{"\\dfrac{\\sqrt{2}}{2}"}</M></td>
                <td><M>{"\\dfrac{\\sqrt{2}}{2}"}</M></td>
                <td><M>{"1"}</M></td>
              </tr>
              <tr>
                <td>60°</td>
                <td><M>{"\\dfrac{\\sqrt{3}}{2}"}</M></td>
                <td><M>{"\\dfrac{1}{2}"}</M></td>
                <td><M>{"\\sqrt{3}"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Triângulos notáveis 45 e 30-60-90">
            {/* 45-45-90 */}
            <polygon points="40,140 140,140 140,40" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <polyline points="140,140 130,140 130,130 140,130" fill="none" stroke="#374151" strokeWidth="1.5"/>
            <text x="90" y="155" textAnchor="middle" fontSize="11" fill="#374151">1</text>
            <text x="148" y="95" fontSize="11" fill="#374151">1</text>
            <text x="80" y="83" textAnchor="middle" fontSize="12" fill="#dc2626">√2</text>
            <text x="52" y="135" fontSize="11" fill="#2563eb">45°</text>
            <text x="140" y="38" fontSize="11" fill="#2563eb">45°</text>
            <text x="90" y="15" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2563eb">Triângulo 45°</text>

            {/* 30-60-90 */}
            <polygon points="210,140 330,140 330,40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <polyline points="330,140 320,140 320,130 330,130" fill="none" stroke="#374151" strokeWidth="1.5"/>
            <text x="270" y="155" textAnchor="middle" fontSize="11" fill="#374151">√3</text>
            <text x="338" y="95" fontSize="11" fill="#374151">1</text>
            <text x="262" y="80" textAnchor="middle" fontSize="12" fill="#dc2626">2</text>
            <text x="220" y="135" fontSize="11" fill="#16a34a">30°</text>
            <text x="318" y="40" fontSize="11" fill="#16a34a">60°</text>
            <text x="270" y="15" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16a34a">Triângulo 30-60-90°</text>
          </svg>
          <figcaption>Triângulos notáveis com lados em relação unitária</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações Inversas</span>
        <h2>3. Secante, Cossecante e Cotangente</h2>
        <M block={true}>{"\\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta} \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação Fundamental</span>
        <h2>4. Relação Fundamental da Trigonometria</h2>
        <M block={true}>{"\\sin^2\\theta + \\cos^2\\theta = 1"}</M>
        <p>
          Decorre diretamente do teorema de Pitágoras:
          <M>{"\\; a^2 + b^2 = h^2 \\Rightarrow (a/h)^2 + (b/h)^2 = 1"}</M>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Identidade derivada</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Em função de sen</td><td><M>{"\\cos^2\\theta = 1 - \\sin^2\\theta"}</M></td></tr>
              <tr><td>Em função de cos</td><td><M>{"\\sin^2\\theta = 1 - \\cos^2\\theta"}</M></td></tr>
              <tr><td>Tangente e secante</td><td><M>{"\\tan^2\\theta + 1 = \\sec^2\\theta"}</M></td></tr>
              <tr><td>Cotangente e cossecante</td><td><M>{"\\cot^2\\theta + 1 = \\csc^2\\theta"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pitágoras</span>
        <h2>5. Teorema de Pitágoras — Revisão</h2>
        <M block={true}>{"h^2 = a^2 + b^2"}</M>
        <p>
          onde h é a hipotenusa e a, b os catetos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ternas pitagóricas famosas</th><th>a</th><th>b</th><th>h</th></tr>
            </thead>
            <tbody>
              <tr><td>Básica</td><td>3</td><td>4</td><td>5</td></tr>
              <tr><td>Múltipla</td><td>6</td><td>8</td><td>10</td></tr>
              <tr><td>Outra</td><td>5</td><td>12</td><td>13</td></tr>
              <tr><td>Outra</td><td>8</td><td>15</td><td>17</td></tr>
              <tr><td>Outra</td><td>7</td><td>24</td><td>25</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulo de Elevação</span>
        <h2>6. Ângulo de Elevação e Ângulo de Depressão</h2>
        <div className="lesson-highlight">
          <h3>Ângulo de elevação</h3>
          <p>
            Ângulo formado entre a direção horizontal e a linha de visada
            <strong> para cima</strong>. Se h é a altura e d a distância horizontal:
          </p>
          <M block={true}>{"\\tan(\\alpha) = \\frac{h}{d} \\Rightarrow h = d \\cdot \\tan(\\alpha)"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Ângulo de depressão</h3>
          <p>
            Ângulo formado entre a direção horizontal e a linha de visada
            <strong> para baixo</strong>. Usa-se a mesma razão trigonométrica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Problemas Clássicos de Trigonometria</h2>
        <div className="lesson-highlight">
          <h3>Altura de uma árvore</h3>
          <p>
            A sombra de uma árvore tem 12 m e o ângulo de elevação do sol é 30°.
          </p>
          <M block={true}>{"h = 12 \\cdot \\tan 30° = 12 \\cdot \\frac{\\sqrt{3}}{3} = 4\\sqrt{3} \\approx 6{,}93 \\text{ m}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Distância entre barcos</h3>
          <p>
            De um farol de 30 m, um barco é visto com ângulo de depressão de 45°.
            Distância horizontal ao barco:
          </p>
          <M block={true}>{"\\tan 45° = \\frac{30}{d} \\Rightarrow d = \\frac{30}{1} = 30 \\text{ m}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Calculando Ângulos</span>
        <h2>8. Determinação de Ângulos — Funções Inversas</h2>
        <M block={true}>{"\\theta = \\arcsin\\left(\\frac{\\text{op}}{h}\\right) = \\arccos\\left(\\frac{\\text{adj}}{h}\\right) = \\arctan\\left(\\frac{\\text{op}}{\\text{adj}}\\right)"}</M>
        <p>
          Nos exames, os ângulos são geralmente os notáveis (30°, 45°, 60°) ou
          são fornecidos em tabelas de valores.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Projeções</span>
        <h2>9. Componentes Vetoriais (Projeção)</h2>
        <p>
          Um vetor de magnitude <M>{"F"}</M> e direção <M>{"\\theta"}</M> com o eixo x tem componentes:
        </p>
        <M block={true}>{"F_x = F \\cos\\theta \\qquad F_y = F \\sin\\theta"}</M>
        <p>
          Muito usado em Física (força, velocidade, campo elétrico).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Tabela-Síntese de Trigonometria</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Razão</th><th>Definição</th><th>30°</th><th>45°</th><th>60°</th></tr>
            </thead>
            <tbody>
              <tr><td>sen θ</td><td>op/hip</td><td><M>{"1/2"}</M></td><td><M>{"\\sqrt{2}/2"}</M></td><td><M>{"\\sqrt{3}/2"}</M></td></tr>
              <tr><td>cos θ</td><td>adj/hip</td><td><M>{"\\sqrt{3}/2"}</M></td><td><M>{"\\sqrt{2}/2"}</M></td><td><M>{"1/2"}</M></td></tr>
              <tr><td>tan θ</td><td>op/adj</td><td><M>{"\\sqrt{3}/3"}</M></td><td><M>{"1"}</M></td><td><M>{"\\sqrt{3}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Razão trigonométrica"
          statement={
            <p>
              Em um triângulo retângulo, o cateto oposto a θ mede 6 cm e a hipotenusa
              mede 10 cm. Qual é o valor de cos θ?
            </p>
          }
          options={[
            { letter: "a", text: "0,6" },
            { letter: "b", text: "0,8", correct: true },
            { letter: "c", text: "0,75" },
            { letter: "d", text: "1,25" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{cateto adj} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8"}</M>
              <M block={true}>{"\\cos\\theta = \\frac{8}{10} = 0{,}8"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ângulos notáveis"
          statement={
            <p>
              Calcule: <M>{"\\sin 60° \\cdot \\cos 30° + \\cos 60° \\cdot \\sin 30°"}</M>
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{\\sqrt{3}}{2}"}</M> },
            { letter: "b", text: "1", correct: true },
            { letter: "c", text: <M>{"\\dfrac{1}{2}"}</M> },
            { letter: "d", text: <M>{"\\sqrt{3}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{3}{4} + \\frac{1}{4} = 1"}</M>
              <p>Esta é a fórmula do seno da soma: <M>{"\\sin(60°+30°) = \\sin 90° = 1"}</M></p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Relação fundamental"
          statement={
            <p>
              Se <M>{"\\sin\\theta = \\dfrac{3}{5}"}</M>, com <M>{"\\theta"}</M> no 1º quadrante,
              encontre <M>{"\\tan\\theta"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{3}{4}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{4}{3}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{5}{4}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{3}{5}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos\\theta = \\sqrt{1-\\sin^2\\theta} = \\sqrt{1-\\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}"}</M>
              <M block={true}>{"\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Altura de um prédio"
          statement={
            <p>
              Um observador a 40 m de um prédio vê o topo com ângulo de elevação de 60°.
              Qual é a altura do prédio? (<M>{"\\sqrt{3} \\approx 1{,}73"}</M>)
            </p>
          }
          options={[
            { letter: "a", text: "23 m" },
            { letter: "b", text: "40 m" },
            { letter: "c", text: "69,2 m", correct: true },
            { letter: "d", text: "46 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\tan 60° = \\frac{h}{40} \\Rightarrow h = 40\\sqrt{3} \\approx 40 \\times 1{,}73 = 69{,}2 \\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Rampa de acessibilidade"
          statement={
            <p>
              Uma rampa de acessibilidade deve ter inclinação de 5° com a horizontal.
              Para vencer um desnível de 0,5 m, qual deve ser o comprimento da rampa?
              (sen 5° ≈ 0,087)
            </p>
          }
          options={[
            { letter: "a", text: "0,5 m" },
            { letter: "b", text: "5,75 m", correct: true },
            { letter: "c", text: "10 m" },
            { letter: "d", text: "2,5 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sin 5° = \\frac{0{,}5}{L} \\Rightarrow L = \\frac{0{,}5}{0{,}087} \\approx 5{,}75 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
