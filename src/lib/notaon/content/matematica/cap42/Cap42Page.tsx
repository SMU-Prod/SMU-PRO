"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 42</span>
          <h1>Números Complexos</h1>
          <p>
            Explore os números complexos, sua forma algébrica e trigonométrica,
            operações (soma, produto, conjugado, módulo, argumento), Fórmula de
            De Moivre e raízes de números complexos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Unidade Imaginária</span>
        <h2>1. Origem dos Números Complexos</h2>
        <p>
          Equações como x² + 1 = 0 não têm solução real. Para resolvê-las,
          define-se a <strong>unidade imaginária</strong>:
        </p>
        <M block={true}>{"i = \\sqrt{-1} \\Rightarrow i^2 = -1"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Potência</th><th>Valor</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"i^0"}</M></td><td>1</td></tr>
              <tr><td><M>{"i^1"}</M></td><td>i</td></tr>
              <tr><td><M>{"i^2"}</M></td><td>−1</td></tr>
              <tr><td><M>{"i^3"}</M></td><td>−i</td></tr>
              <tr><td><M>{"i^4"}</M></td><td>1 (ciclo se repete)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Forma Algébrica</span>
        <h2>2. Forma Algébrica z = a + bi</h2>
        <M block={true}>{"z = a + bi \\quad a, b \\in \\mathbb{R}"}</M>
        <p>a = parte real <M>{"\\text{Re}(z)"}</M>; b = parte imaginária <M>{"\\text{Im}(z)"}</M>.</p>
        <div className="lesson-highlight">
          <h3>Classificação</h3>
          <ul>
            <li>b = 0: número real.</li>
            <li>a = 0, b ≠ 0: imaginário puro.</li>
            <li>a ≠ 0, b ≠ 0: complexo próprio.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano de Argand</span>
        <h2>3. Plano Complexo (Argand-Gauss)</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 260 220" width="260" height="220" aria-label="Plano de Argand">
            {/* Eixos */}
            <line x1="20" y1="110" x2="240" y2="110" stroke="#374151" strokeWidth="2"/>
            <line x1="130" y1="20" x2="130" y2="200" stroke="#374151" strokeWidth="2"/>
            {/* Setas */}
            <polygon points="240,110 228,106 228,114" fill="#374151"/>
            <polygon points="130,20 126,32 134,32" fill="#374151"/>
            {/* Rótulos eixos */}
            <text x="244" y="113" fontSize="12" fill="#374151">Re</text>
            <text x="135" y="18" fontSize="12" fill="#374151">Im</text>
            {/* Ponto z = 3+2i */}
            <circle cx="190" cy="70" r="6" fill="#dc2626"/>
            <line x1="130" y1="70" x2="190" y2="70" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="190" y1="110" x2="190" y2="70" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            {/* Módulo */}
            <line x1="130" y1="110" x2="190" y2="70" stroke="#2563eb" strokeWidth="2"/>
            <text x="155" y="87" fontSize="11" fill="#2563eb">|z|</text>
            <text x="194" y="68" fontSize="12" fill="#dc2626">z=3+2i</text>
            <text x="190" y="125" textAnchor="middle" fontSize="11" fill="#374151">3 (Re)</text>
            <text x="105" y="70" fontSize="11" fill="#374151">2i (Im)</text>
          </svg>
          <figcaption>Plano de Argand: eixo real (horizontal) e eixo imaginário (vertical)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Módulo e Conjugado</span>
        <h2>4. Módulo e Conjugado</h2>
        <M block={true}>{"|z| = \\sqrt{a^2+b^2} \\qquad \\bar z = a - bi"}</M>
        <div className="lesson-highlight">
          <h3>Propriedades do conjugado</h3>
          <M block={true}>{"z \\cdot \\bar{z} = a^2 + b^2 = |z|^2"}</M>
          <M block={true}>{"\\overline{z_1+z_2} = \\bar{z_1}+\\bar{z_2} \\qquad \\overline{z_1 z_2} = \\bar{z_1}\\bar{z_2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Operações</span>
        <h2>5. Operações com Números Complexos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Operação</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Soma</td><td><M>{"(a+bi)+(c+di) = (a+c)+(b+d)i"}</M></td></tr>
              <tr><td>Produto</td><td><M>{"(a+bi)(c+di) = (ac-bd)+(ad+bc)i"}</M></td></tr>
              <tr><td>Divisão</td><td><M>{"\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\bar{z_2}}{|z_2|^2}"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo — divisão</h3>
          <M block={true}>{"\\frac{2+3i}{1-i} = \\frac{(2+3i)(1+i)}{(1)^2+(1)^2} = \\frac{2+2i+3i-3}{2} = \\frac{-1+5i}{2} = -\\frac{1}{2}+\\frac{5}{2}i"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Forma Trigonométrica</span>
        <h2>6. Forma Trigonométrica (Polar)</h2>
        <M block={true}>{"z = |z|(\\cos\\theta + i\\sin\\theta) = |z|\\,\\text{cis}\\,\\theta"}</M>
        <M block={true}>{"\\theta = \\arg(z) = \\text{arctan}\\left(\\frac{b}{a}\\right)"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Plano de Argand-Gauss mostrando z=a+bi com módulo e ângulo theta">
            <rect width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>
            {/* Eixos */}
            <line x1="80" y1="20" x2="80" y2="200" stroke="#374151" strokeWidth="2"/>
            <line x1="50" y1="160" x2="650" y2="160" stroke="#374151" strokeWidth="2"/>
            {/* Setas */}
            <polygon points="80,15 75,28 85,28" fill="#374151"/>
            <polygon points="655,160 642,155 642,165" fill="#374151"/>
            {/* Rótulos eixos */}
            <text x="657" y="157" fontSize="13" fill="#374151" fontWeight="bold">Re</text>
            <text x="86" y="16" fontSize="13" fill="#374151" fontWeight="bold">Im</text>
            {/* Origem */}
            <text x="66" y="175" fontSize="11" fill="#374151">O</text>
            {/* Ponto z = a+bi (a=4, b=3 na escala do gráfico) */}
            {/* Usando escala: 1 unidade = 60px; origem em (80,160) */}
            {/* a=4 → x=80+4*60=320; b=3 → y=160-3*60=−20 ... ajustar para caber */}
            {/* Melhor: a=3→x=80+3*55=245; b=2→y=160-2*55=50 */}
            {/* Ponto z em (325, 50) → a≈4.45, b≈2 na escala livre */}
            <circle cx="360" cy="55" r="7" fill="#3b82f6"/>
            <text x="368" y="50" fontSize="14" fontWeight="bold" fill="#1e40af">z = a + bi</text>
            {/* Módulo |z|: segmento da origem até z */}
            <line x1="80" y1="160" x2="360" y2="55" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x="195" y="95" fontSize="14" fontWeight="bold" fill="#3b82f6">|z|</text>
            {/* Projeção a no eixo real (cateto horizontal) */}
            <line x1="80" y1="160" x2="360" y2="160" stroke="#374151" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="220" y="177" textAnchor="middle" fontSize="12" fill="#374151">a</text>
            {/* Projeção b no eixo imaginário (cateto vertical) */}
            <line x1="360" y1="55" x2="360" y2="160" stroke="#374151" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="374" y="112" fontSize="12" fill="#374151">b</text>
            {/* Ângulo θ — arco pequeno na origem */}
            <path d="M 120,160 A 40,40 0 0,0 97,128" fill="none" stroke="#dc2626" strokeWidth="1.8"/>
            <text x="130" y="143" fontSize="14" fontWeight="bold" fill="#dc2626">θ</text>
            {/* Referência no eixo real */}
            <text x="360" y="177" textAnchor="middle" fontSize="11" fill="#374151">a</text>
            {/* Rótulo na origem do arco */}
            <circle cx="80" cy="160" r="3" fill="#374151"/>
          </svg>
          <figcaption>Plano de Argand-Gauss: o número z = a+bi é representado pelo ponto (a, b); |z| é a distância à origem e θ é o argumento (ângulo com o eixo real)</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Multiplicação em forma trigonométrica</h3>
          <M block={true}>{"z_1 z_2 = |z_1||z_2|\\,\\text{cis}(\\theta_1+\\theta_2)"}</M>
          <M block={true}>{"\\frac{z_1}{z_2} = \\frac{|z_1|}{|z_2|}\\,\\text{cis}(\\theta_1-\\theta_2)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">De Moivre</span>
        <h2>7. Fórmula de De Moivre</h2>
        <M block={true}>{"z^n = |z|^n(\\cos(n\\theta) + i\\sin(n\\theta))"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Calcular (1+i)⁸:</p>
          <M block={true}>{"1+i = \\sqrt{2}\\,\\text{cis}(45°) \\Rightarrow (1+i)^8 = (\\sqrt{2})^8\\,\\text{cis}(360°) = 16 \\cdot 1 = 16"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raízes</span>
        <h2>8. Raízes n-ésimas de Números Complexos</h2>
        <M block={true}>{"w_k = \\sqrt[n]{|z|}\\,\\text{cis}\\left(\\frac{\\theta + 360°k}{n}\\right), \\quad k = 0, 1, \\ldots, n-1"}</M>
        <div className="lesson-highlight">
          <h3>Raízes cúbicas da unidade</h3>
          <M block={true}>{"w_0 = 1 \\qquad w_1 = -\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i \\qquad w_2 = -\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i"}</M>
          <M block={true}>{"1 + w_1 + w_2 = 0 \\quad w_1 w_2 = 1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação do 2° Grau</span>
        <h2>9. Discriminante Negativo e Raízes Complexas</h2>
        <M block={true}>{"ax^2+bx+c=0, \\quad \\Delta = b^2-4ac < 0"}</M>
        <M block={true}>{"x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>x² − 2x + 5 = 0 → Δ = 4 − 20 = −16</p>
          <M block={true}>{"x = \\frac{2 \\pm \\sqrt{-16}}{2} = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Números Complexos</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>z</span>
            <h3>Forma algébrica</h3>
            <M block={true}>{"z = a+bi"}</M>
          </div>
          <div className="math-card">
            <span>|z|</span>
            <h3>Módulo</h3>
            <M block={true}>{"|z| = \\sqrt{a^2+b^2}"}</M>
          </div>
          <div className="math-card">
            <span>De M.</span>
            <h3>De Moivre</h3>
            <M block={true}>{"z^n=|z|^n\\,\\text{cis}(n\\theta)"}</M>
          </div>
          <div className="math-card">
            <span>z²=0</span>
            <h3>Raízes quadradas</h3>
            <M block={true}>{"x=\\frac{-b\\pm\\sqrt{\\Delta}}{2a}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Módulo de número complexo"
          statement={<p>Qual é o módulo de z = 3 + 4i?</p>}
          options={[
            { letter: "a", text: "5", correct: true },
            { letter: "b", text: "7" },
            { letter: "c", text: "25" },
            { letter: "d", text: "√7" },
          ]}
          resolution={
            <>
              <M block={true}>{"|z| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Produto de complexos"
          statement={<p>Calcule (2 + i)(3 − 2i).</p>}
          options={[
            { letter: "a", text: "8 − i", correct: true },
            { letter: "b", text: "6 − 4i" },
            { letter: "c", text: "4 + i" },
            { letter: "d", text: "8 + i" },
          ]}
          resolution={
            <>
              <M block={true}>{"(2+i)(3-2i) = 6-4i+3i-2i^2 = 6-i+2 = 8-i"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. De Moivre"
          statement={
            <p>
              Usando a fórmula de De Moivre, calcule (cos60° + isen60°)⁶.
            </p>
          }
          options={[
            { letter: "a", text: "1", correct: true },
            { letter: "b", text: "i" },
            { letter: "c", text: "−1" },
            { letter: "d", text: "−i" },
          ]}
          resolution={
            <>
              <M block={true}>{"(\\text{cis}\\,60°)^6 = \\text{cis}(360°) = \\cos360°+i\\sin360° = 1+0 = 1"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Circuito elétrico"
          statement={
            <p>
              Em circuitos AC, a impedância é representada por números complexos.
              Z₁ = 3 + 4j e Z₂ = 1 − 2j (j = unidade imaginária elétrica).
              Qual é |Z₁|?
            </p>
          }
          options={[
            { letter: "a", text: "5 Ω", correct: true },
            { letter: "b", text: "7 Ω" },
            { letter: "c", text: "√5 Ω" },
            { letter: "d", text: "25 Ω" },
          ]}
          resolution={
            <>
              <M block={true}>{"|Z_1| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5 \\;\\Omega"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Equação com raízes complexas"
          statement={
            <p>
              Um engenheiro encontra a equação x² + 4x + 13 = 0 no projeto de um filtro.
              Quais são as raízes?
            </p>
          }
          options={[
            { letter: "a", text: "x = −2 ± 3i", correct: true },
            { letter: "b", text: "x = 2 ± 3i" },
            { letter: "c", text: "x = −4 ± 3i" },
            { letter: "d", text: "x = −2 ± i√13" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta = 16-52 = -36 \\Rightarrow x = \\frac{-4 \\pm 6i}{2} = -2 \\pm 3i"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
