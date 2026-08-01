"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 18</span>
          <h1>Trigonometria no Ciclo Trigonométrico</h1>
          <p>
            Estude as funções trigonométricas definidas para qualquer ângulo real
            usando o círculo unitário. Domine os quadrantes, sinais, arcos notáveis
            e reduções ao 1º quadrante.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ciclo Trigonométrico</span>
        <h2>1. O Círculo Unitário</h2>
        <p>
          O <strong>ciclo trigonométrico</strong> é a circunferência de raio 1 centrada
          na origem. O ponto <M>{"P(\\cos\\theta, \\sin\\theta)"}</M> é a interseção
          do raio com o ciclo para o ângulo <M>{"\\theta"}</M>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 280 280" width="280" height="280" aria-label="Ciclo trigonométrico">
            {/* Círculo */}
            <circle cx="140" cy="140" r="100" fill="#f8fafc" stroke="#374151" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="30" y1="140" x2="250" y2="140" stroke="#374151" strokeWidth="1.5"/>
            <line x1="140" y1="30" x2="140" y2="250" stroke="#374151" strokeWidth="1.5"/>
            <polygon points="250,140 240,136 240,144" fill="#374151"/>
            <polygon points="140,30 136,40 144,40" fill="#374151"/>
            <text x="255" y="143" fontSize="11" fill="#374151">x</text>
            <text x="137" y="27" fontSize="11" fill="#374151">y</text>
            <text x="148" y="153" fontSize="11" fill="#374151">O</text>
            {/* Quadrantes */}
            <text x="90" y="100" fontSize="12" fill="#2563eb" fontWeight="700">Q2</text>
            <text x="175" y="100" fontSize="12" fill="#16a34a" fontWeight="700">Q1</text>
            <text x="90" y="185" fontSize="12" fill="#dc2626" fontWeight="700">Q3</text>
            <text x="175" y="185" fontSize="12" fill="#7c3aed" fontWeight="700">Q4</text>
            {/* Ponto P para θ=50° */}
            <circle cx="204" cy="63" r="5" fill="#dc2626"/>
            <line x1="140" y1="140" x2="204" y2="63" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="210" y="60" fontSize="11" fill="#dc2626">P(cosθ, sinθ)</text>
            {/* Projeções */}
            <line x1="204" y1="63" x2="204" y2="140" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="210" y="105" fontSize="10" fill="#7c3aed">sinθ</text>
            <line x1="140" y1="140" x2="204" y2="140" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="168" y="153" fontSize="10" fill="#16a34a">cosθ</text>
            {/* Marcação 1 */}
            <text x="243" y="143" fontSize="10" fill="#374151">1</text>
            <text x="137" y="40" fontSize="10" fill="#374151">1</text>
          </svg>
          <figcaption>Ciclo unitário: P = (cos θ, sin θ) — projeções no eixo x e y</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sinal por Quadrante</span>
        <h2>2. Sinal das Funções Trigonométricas por Quadrante</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Quadrante</th><th>Ângulo</th><th>sen</th><th>cos</th><th>tan</th></tr>
            </thead>
            <tbody>
              <tr><td>1º (Q1)</td><td>0° a 90°</td><td>+</td><td>+</td><td>+</td></tr>
              <tr><td>2º (Q2)</td><td>90° a 180°</td><td>+</td><td>−</td><td>−</td></tr>
              <tr><td>3º (Q3)</td><td>180° a 270°</td><td>−</td><td>−</td><td>+</td></tr>
              <tr><td>4º (Q4)</td><td>270° a 360°</td><td>−</td><td>+</td><td>−</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Mnemônico — "Todos Sorriem Com Tato"</h3>
          <p>Q1: Tudo positivo | Q2: Seno positivo | Q3: Coseno positivo | Q4: Tangente positiva</p>
          <p>(ou simplesmente: Q1 todos +; Q2 sen +; Q3 tan +; Q4 cos +)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arcos Notáveis</span>
        <h2>3. Arcos Notáveis no Ciclo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Graus</th><th>Radianos</th><th>cos</th><th>sen</th><th>tan</th></tr>
            </thead>
            <tbody>
              <tr><td>0°</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
              <tr><td>30°</td><td><M>{"\\pi/6"}</M></td><td><M>{"\\sqrt{3}/2"}</M></td><td><M>{"1/2"}</M></td><td><M>{"\\sqrt{3}/3"}</M></td></tr>
              <tr><td>45°</td><td><M>{"\\pi/4"}</M></td><td><M>{"\\sqrt{2}/2"}</M></td><td><M>{"\\sqrt{2}/2"}</M></td><td>1</td></tr>
              <tr><td>60°</td><td><M>{"\\pi/3"}</M></td><td><M>{"1/2"}</M></td><td><M>{"\\sqrt{3}/2"}</M></td><td><M>{"\\sqrt{3}"}</M></td></tr>
              <tr><td>90°</td><td><M>{"\\pi/2"}</M></td><td>0</td><td>1</td><td>—</td></tr>
              <tr><td>120°</td><td><M>{"2\\pi/3"}</M></td><td><M>{"-1/2"}</M></td><td><M>{"\\sqrt{3}/2"}</M></td><td><M>{"-\\sqrt{3}"}</M></td></tr>
              <tr><td>150°</td><td><M>{"5\\pi/6"}</M></td><td><M>{"-\\sqrt{3}/2"}</M></td><td><M>{"1/2"}</M></td><td><M>{"-\\sqrt{3}/3"}</M></td></tr>
              <tr><td>180°</td><td><M>{"\\pi"}</M></td><td>−1</td><td>0</td><td>0</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Radianos</span>
        <h2>4. Conversão entre Graus e Radianos</h2>
        <M block={true}>{"\\text{rad} = \\text{graus} \\times \\frac{\\pi}{180°} \\qquad \\text{graus} = \\text{rad} \\times \\frac{180°}{\\pi}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Graus</th><th>Radianos</th><th>Graus</th><th>Radianos</th></tr>
            </thead>
            <tbody>
              <tr><td>30°</td><td><M>{"\\pi/6"}</M></td><td>210°</td><td><M>{"7\\pi/6"}</M></td></tr>
              <tr><td>45°</td><td><M>{"\\pi/4"}</M></td><td>270°</td><td><M>{"3\\pi/2"}</M></td></tr>
              <tr><td>60°</td><td><M>{"\\pi/3"}</M></td><td>300°</td><td><M>{"5\\pi/3"}</M></td></tr>
              <tr><td>90°</td><td><M>{"\\pi/2"}</M></td><td>315°</td><td><M>{"7\\pi/4"}</M></td></tr>
              <tr><td>180°</td><td><M>{"\\pi"}</M></td><td>360°</td><td><M>{"2\\pi"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reduções</span>
        <h2>5. Redução ao 1º Quadrante</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Arco</th><th>sen</th><th>cos</th><th>tan</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\pi - \\alpha"}</M> (2º Q)</td><td><M>{"\\sin\\alpha"}</M></td><td><M>{"-\\cos\\alpha"}</M></td><td><M>{"-\\tan\\alpha"}</M></td></tr>
              <tr><td><M>{"\\pi + \\alpha"}</M> (3º Q)</td><td><M>{"-\\sin\\alpha"}</M></td><td><M>{"-\\cos\\alpha"}</M></td><td><M>{"\\tan\\alpha"}</M></td></tr>
              <tr><td><M>{"2\\pi - \\alpha"}</M> (4º Q)</td><td><M>{"-\\sin\\alpha"}</M></td><td><M>{"\\cos\\alpha"}</M></td><td><M>{"-\\tan\\alpha"}</M></td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"\\sin 150° = \\sin(180°-30°) = \\sin 30° = \\frac{1}{2}"}</M>
          <M block={true}>{"\\cos 210° = \\cos(180°+30°) = -\\cos 30° = -\\frac{\\sqrt{3}}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Periodicidade</span>
        <h2>6. Periodicidade das Funções Trigonométricas</h2>
        <M block={true}>{"\\sin(\\theta + 2\\pi k) = \\sin\\theta \\quad \\cos(\\theta + 2\\pi k) = \\cos\\theta \\quad (k \\in \\mathbb{Z})"}</M>
        <M block={true}>{"\\tan(\\theta + \\pi k) = \\tan\\theta \\quad (k \\in \\mathbb{Z})"}</M>
        <p>
          Seno e cosseno têm período <M>{"2\\pi = 360°"}</M>;
          tangente tem período <M>{"\\pi = 180°"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidades</span>
        <h2>7. Identidades de Ângulos Opostos e Complementares</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Relação</th><th>sen</th><th>cos</th><th>tan</th></tr>
            </thead>
            <tbody>
              <tr><td>Ângulo oposto: <M>{"-\\alpha"}</M></td><td><M>{"-\\sin\\alpha"}</M></td><td><M>{"\\cos\\alpha"}</M></td><td><M>{"-\\tan\\alpha"}</M></td></tr>
              <tr><td>Complementar: <M>{"90°-\\alpha"}</M></td><td><M>{"\\cos\\alpha"}</M></td><td><M>{"\\sin\\alpha"}</M></td><td><M>{"\\cot\\alpha"}</M></td></tr>
              <tr><td>Suplementar: <M>{"180°-\\alpha"}</M></td><td><M>{"\\sin\\alpha"}</M></td><td><M>{"-\\cos\\alpha"}</M></td><td><M>{"-\\tan\\alpha"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>8. Equações Trigonométricas Simples</h2>
        <div className="math-block">
          <h3><M>{"\\sin\\theta = k"}</M> → <M>{"|k| \\leq 1"}</M></h3>
          <M block={true}>{"\\theta = \\arcsin k + 2k\\pi \\quad \\text{ou} \\quad \\theta = \\pi - \\arcsin k + 2k\\pi"}</M>
        </div>
        <div className="math-block">
          <h3><M>{"\\cos\\theta = k"}</M></h3>
          <M block={true}>{"\\theta = \\pm \\arccos k + 2k\\pi"}</M>
        </div>
        <div className="math-block">
          <h3><M>{"\\tan\\theta = k"}</M></h3>
          <M block={true}>{"\\theta = \\arctan k + k\\pi"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>9. Gráficos das Funções Seno e Cosseno</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 160" width="380" height="160" aria-label="Gráfico de seno e cosseno">
            <line x1="20" y1="80" x2="360" y2="80" stroke="#374151" strokeWidth="1.5"/>
            <line x1="30" y1="15" x2="30" y2="145" stroke="#374151" strokeWidth="1.5"/>
            <text x="365" y="83" fontSize="11" fill="#374151">θ</text>
            <text x="25" y="12" fontSize="11" fill="#374151">1</text>
            <text x="18" y="82" fontSize="11" fill="#374151">0</text>
            <text x="15" y="148" fontSize="11" fill="#374151">-1</text>
            {/* Seno */}
            <path d="M 30 80 Q 60 15 90 80 Q 120 145 150 80 Q 180 15 210 80 Q 240 145 270 80 Q 300 15 330 80" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <text x="340" y="40" fontSize="11" fill="#2563eb">sen θ</text>
            {/* Cosseno */}
            <path d="M 30 15 Q 60 15 90 80 Q 120 145 150 80 Q 180 15 210 80 Q 240 145 270 80 Q 300 15 330 80" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="6,3"/>
            <text x="340" y="60" fontSize="11" fill="#dc2626">cos θ</text>
            {/* Marcas no eixo */}
            {[0, 1, 2, 3].map((k) => (
              <text key={k} x={30 + k * 100} y={92} textAnchor="middle" fontSize="9" fill="#6b7280">
                {k === 0 ? "0" : k === 1 ? "π/2" : k === 2 ? "π" : "3π/2"}
              </text>
            ))}
          </svg>
          <figcaption>Seno (azul) e cosseno (vermelho tracejado) — o cosseno é o seno deslocado de π/2</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Ciclo Trigonométrico</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Ciclo unitário: P = (cos θ, sin θ) para qualquer θ ∈ ℝ.</li>
            <li>Q1: todos +; Q2: sen +; Q3: tan +; Q4: cos +.</li>
            <li>Período: sen e cos têm 2π; tan tem π.</li>
            <li>Redução: use as fórmulas de π−α, π+α, 2π−α.</li>
            <li>Radianos: multiplicar graus por π/180.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Sinal por quadrante"
          statement={
            <p>
              Em qual quadrante temos <M>{"\\sin\\theta < 0"}</M> e <M>{"\\cos\\theta > 0"}</M>?
            </p>
          }
          options={[
            { letter: "a", text: "1º quadrante" },
            { letter: "b", text: "2º quadrante" },
            { letter: "c", text: "3º quadrante" },
            { letter: "d", text: "4º quadrante", correct: true },
          ]}
          resolution={
            <>
              <p>No 4º quadrante: sen &lt; 0 e cos &gt; 0 (ponto abaixo do eixo x, à direita do eixo y).</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Redução ao 1º quadrante"
          statement={
            <p>Calcule: <M>{"\\cos 225°"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{\\sqrt{2}}{2}"}</M> },
            { letter: "b", text: <M>{"-\\dfrac{\\sqrt{2}}{2}"}</M>, correct: true },
            { letter: "c", text: <M>{"\\dfrac{1}{2}"}</M> },
            { letter: "d", text: <M>{"-\\dfrac{1}{2}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos 225° = \\cos(180°+45°) = -\\cos 45° = -\\frac{\\sqrt{2}}{2}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Equação trigonométrica"
          statement={
            <p>Resolva para <M>{"0° \\leq \\theta < 360°"}</M>: <M>{"2\\sin^2\\theta - 1 = 0"}</M></p>
          }
          options={[
            { letter: "a", text: "45° e 135°" },
            { letter: "b", text: "45°, 135°, 225° e 315°", correct: true },
            { letter: "c", text: "30° e 150°" },
            { letter: "d", text: "60° e 300°" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sin^2\\theta = \\frac{1}{2} \\Rightarrow \\sin\\theta = \\pm\\frac{\\sqrt{2}}{2}"}</M>
              <p>Soluções: 45°, 135°, 225°, 315°.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Posição de ponteiros de relógio"
          statement={
            <p>
              Às 15h00 o ponteiro das horas aponta para as 3 (90° no plano cartesiano = 0° no ciclo trig).
              Em radianos, qual é o ângulo percorrido em 2 horas, se o ponteiro gira 360° em 12h?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\pi/3 \\text{ rad}"}</M> },
            { letter: "b", text: <M>{"\\pi/6 \\text{ rad}"}</M> },
            { letter: "c", text: <M>{"\\pi/4 \\text{ rad}"}</M> },
            { letter: "d", text: <M>{"\\pi/3 \\text{ rad}"}</M>, correct: true },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Ângulo por hora} = \\frac{2\\pi}{12} = \\frac{\\pi}{6} \\text{ rad/h}"}</M>
              <M block={true}>{"2 \\text{ h} \\times \\frac{\\pi}{6} = \\frac{\\pi}{3} \\text{ rad}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Maré — modelo senoidal"
          statement={
            <p>
              A altura da maré é dada por <M>{"h(t) = 3\\sin\\left(\\dfrac{\\pi}{6}t\\right) + 5"}</M>
              (metros, t em horas). Qual é a altura máxima e quando ocorre?
            </p>
          }
          options={[
            { letter: "a", text: "h = 8 m em t = 3 h", correct: true },
            { letter: "b", text: "h = 5 m em t = 0 h" },
            { letter: "c", text: "h = 6 m em t = 6 h" },
            { letter: "d", text: "h = 3 m em t = 6 h" },
          ]}
          resolution={
            <>
              <p>Máximo do seno: 1. Logo <M>{"h_{\\max} = 3(1) + 5 = 8"}</M> m.</p>
              <M block={true}>{"\\frac{\\pi}{6}t = \\frac{\\pi}{2} \\Rightarrow t = 3 \\text{ h}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
