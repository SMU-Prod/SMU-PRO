"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 12</span>
          <h1>Função do 2º Grau (Quadrática)</h1>
          <p>
            Estude a parábola, vértice, eixo de simetria, concavidade e discriminante.
            Aprenda a extrair informações do gráfico e resolver problemas de máximo,
            mínimo e otimização — temas centrais no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Função Quadrática — Definição e Forma Geral</h2>
        <M block={true}>{"f(x) = ax^2 + bx + c, \\quad a \\neq 0,\\; a,b,c \\in \\mathbb{R}"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parâmetro</th><th>Efeito no gráfico</th></tr>
            </thead>
            <tbody>
              <tr><td>a &gt; 0</td><td>Parábola com concavidade para cima (∪) — ponto de mínimo</td></tr>
              <tr><td>a &lt; 0</td><td>Parábola com concavidade para baixo (∩) — ponto de máximo</td></tr>
              <tr><td>|a| grande</td><td>Parábola mais "fechada" (estreita)</td></tr>
              <tr><td>|a| pequeno</td><td>Parábola mais "aberta" (larga)</td></tr>
              <tr><td>c</td><td>Intercepto y: ponto (0, c)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vértice</span>
        <h2>2. Vértice da Parábola</h2>
        <p>
          O vértice <M>{"V(x_V, y_V)"}</M> é o ponto de mínimo (a&gt;0) ou máximo (a&lt;0) da parábola:
        </p>
        <M block={true}>{"x_V = -\\frac{b}{2a} \\qquad y_V = -\\frac{\\Delta}{4a} = f(x_V)"}</M>
        <p>onde <M>{"\\Delta = b^2 - 4ac"}</M>.</p>

        <div className="lesson-highlight">
          <h3>Forma canônica (vértice)</h3>
          <M block={true}>{"f(x) = a(x - x_V)^2 + y_V"}</M>
          <p>
            Essa forma deixa visível de imediato o vértice e facilita estudar
            deslocamentos do gráfico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>3. O Gráfico da Parábola</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 220" width="380" height="220" aria-label="Parábola com anotações">
            {/* Eixos */}
            <line x1="40" y1="10" x2="40" y2="205" stroke="#374151" strokeWidth="1.5"/>
            <line x1="10" y1="170" x2="370" y2="170" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="173" fontSize="11" fill="#374151">x</text>
            <text x="35" y="8" fontSize="11" fill="#374151">y</text>
            {/* Parábola y = 0.08(x-190)²-80 (vértice em (190,90)) → mapeado para SVG */}
            <path d="M 60 170 Q 190 20 320 170" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            {/* Vértice */}
            <circle cx="190" cy="20" r="5" fill="#dc2626"/>
            <text x="200" y="18" fontSize="11" fill="#dc2626">V(xᵥ, yᵥ) mínimo</text>
            {/* Eixo de simetria */}
            <line x1="190" y1="10" x2="190" y2="195" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,4"/>
            <text x="193" y="200" fontSize="10" fill="#dc2626">x = xᵥ (eixo de sim.)</text>
            {/* Zeros */}
            <circle cx="60" cy="170" r="4" fill="#16a34a"/>
            <text x="55" y="184" textAnchor="middle" fontSize="10" fill="#16a34a">x₁</text>
            <circle cx="320" cy="170" r="4" fill="#16a34a"/>
            <text x="320" y="184" textAnchor="middle" fontSize="10" fill="#16a34a">x₂</text>
            {/* Intercepto y */}
            <text x="44" y="80" fontSize="10" fill="#7c3aed">(0,c)</text>
            <circle cx="40" cy="75" r="4" fill="#7c3aed"/>
          </svg>
          <figcaption>Parábola com concavidade ↑: vértice = mínimo, dois zeros (Δ &gt; 0)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Zeros e Δ</span>
        <h2>4. Zeros da Função e o Discriminante</h2>
        <p>
          Os zeros são as raízes de <M>{"ax^2+bx+c=0"}</M>, calculadas por Bhaskara.
          O número de zeros depende do sinal de <M>{"\\Delta"}</M>:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Δ</th><th>Zeros</th><th>Posição da parábola (a&gt;0)</th></tr>
            </thead>
            <tbody>
              <tr><td>Δ &gt; 0</td><td>2 zeros reais distintos</td><td>Corta o eixo x em 2 pontos</td></tr>
              <tr><td>Δ = 0</td><td>1 zero real (duplo)</td><td>Tangencia o eixo x no vértice</td></tr>
              <tr><td>Δ &lt; 0</td><td>Nenhum zero real</td><td>Não toca o eixo x (toda acima)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Imagem</span>
        <h2>5. Conjunto Imagem da Função Quadrática</h2>
        <M block={true}>{"\\text{Im}(f) = \\begin{cases} [y_V, +\\infty) & \\text{se } a > 0 \\\\ (-\\infty, y_V] & \\text{se } a < 0 \\end{cases}"}</M>
        <p>
          O valor de máximo ou mínimo da função é sempre <M>{"y_V = -\\dfrac{\\Delta}{4a}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sinal da Função</span>
        <h2>6. Sinal da Função Quadrática</h2>
        <div className="lesson-highlight">
          <h3>Para a &gt; 0 e Δ &gt; 0 (raízes x₁ &lt; x₂)</h3>
          <ul>
            <li><M>{"f(x) > 0"}</M> para <M>{"x < x_1"}</M> ou <M>{"x > x_2"}</M></li>
            <li><M>{"f(x) < 0"}</M> para <M>{"x_1 < x < x_2"}</M></li>
            <li><M>{"f(x) = 0"}</M> para <M>{"x = x_1"}</M> ou <M>{"x = x_2"}</M></li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Otimização</span>
        <h2>7. Problemas de Máximo e Mínimo</h2>
        <p>
          Em problemas de otimização, o vértice fornece o valor extremo (máximo ou mínimo)
          da grandeza modelada.
        </p>
        <div className="lesson-highlight">
          <h3>Problema clássico — área máxima</h3>
          <p>
            Um fazendeiro tem 60 m de cerca para cercar um terreno retangular usando
            uma parede como um dos lados. Dimensões para área máxima?
          </p>
          <p>Seja x o lado perpendicular à parede: <M>{"A = x(60 - 2x) = -2x^2 + 60x"}</M>.</p>
          <M block={true}>{"x_V = -\\frac{60}{2 \\cdot (-2)} = 15 \\text{ m}"}</M>
          <M block={true}>{"A_{\\max} = -2(15)^2 + 60(15) = -450 + 900 = 450 \\text{ m}^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Translações</span>
        <h2>8. Deslocamentos do Gráfico da Parábola</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Transformação</th><th>Efeito</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"f(x)+k"}</M></td><td>Translação vertical de k unidades (↑ se k&gt;0)</td></tr>
              <tr><td><M>{"f(x-h)"}</M></td><td>Translação horizontal de h unidades (→ se h&gt;0)</td></tr>
              <tr><td><M>{"-f(x)"}</M></td><td>Reflexão em relação ao eixo x (inverte concavidade)</td></tr>
              <tr><td><M>{"f(-x)"}</M></td><td>Reflexão em relação ao eixo y</td></tr>
              <tr><td><M>{"k \\cdot f(x)"}</M></td><td>Escala vertical (k&gt;1 estreita; 0&lt;k&lt;1 alarga)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parâmetros</span>
        <h2>9. Como os Parâmetros Mudam o Gráfico</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 200" width="380" height="200" aria-label="Variação de parâmetros">
            <line x1="40" y1="10" x2="40" y2="195" stroke="#374151" strokeWidth="1.5"/>
            <line x1="10" y1="100" x2="370" y2="100" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="103" fontSize="11" fill="#374151">x</text>
            <text x="35" y="8" fontSize="11" fill="#374151">y</text>
            {/* a=1 */}
            <path d="M 40 180 Q 190 20 340 180" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <text x="345" y="178" fontSize="10" fill="#2563eb">a=1</text>
            {/* a=0.3 (mais aberta) */}
            <path d="M 40 130 Q 190 80 340 130" stroke="#16a34a" strokeWidth="2" fill="none" strokeDasharray="6,3"/>
            <text x="345" y="128" fontSize="10" fill="#16a34a">a=0.3</text>
            {/* a=3 (mais fechada) */}
            <path d="M 120 180 Q 190 40 260 180" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
            <text x="265" y="178" fontSize="10" fill="#dc2626">a=3</text>
          </svg>
          <figcaption>Parábolas com mesmo vértice e diferentes coeficientes a</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Mapa Mental — Função Quadrática</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>a</span>
            <h3>Concavidade</h3>
            <p>a&gt;0: ↑ (mínimo) | a&lt;0: ↓ (máximo)</p>
          </div>
          <div className="math-card">
            <span>V</span>
            <h3>Vértice</h3>
            <M block={true}>{"x_V = -\\frac{b}{2a}"}</M>
          </div>
          <div className="math-card">
            <span>Δ</span>
            <h3>Zeros</h3>
            <p>Δ&gt;0: 2 | Δ=0: 1 | Δ&lt;0: 0</p>
          </div>
          <div className="math-card">
            <span>Im</span>
            <h3>Imagem</h3>
            <p>a&gt;0: [yᵥ, +∞) | a&lt;0: (−∞, yᵥ]</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Vértice da parábola"
          statement={
            <p>Encontre o vértice de <M>{"f(x) = x^2 - 4x + 3"}</M>.</p>
          }
          options={[
            { letter: "a", text: <M>{"V(2, -1)"}</M>, correct: true },
            { letter: "b", text: <M>{"V(-2, 15)"}</M> },
            { letter: "c", text: <M>{"V(1, 0)"}</M> },
            { letter: "d", text: <M>{"V(2, 3)"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"x_V = -\\frac{-4}{2 \\cdot 1} = 2"}</M>
              <M block={true}>{"y_V = f(2) = 4 - 8 + 3 = -1 \\Rightarrow V(2, -1)"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Imagem e valor máximo"
          statement={
            <p>
              Para a função <M>{"f(x) = -2x^2 + 8x - 3"}</M>, qual é o valor máximo?
            </p>
          }
          options={[
            { letter: "a", text: "5" },
            { letter: "b", text: "8" },
            { letter: "c", text: "3" },
            { letter: "d", text: "5", correct: true },
          ]}
          resolution={
            <>
              <M block={true}>{"x_V = -\\frac{8}{2(-2)} = 2"}</M>
              <M block={true}>{"y_V = -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5"}</M>
              <p>Máximo = 5 (a &lt; 0).</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Parâmetro desconhecido"
          statement={
            <p>
              A parábola <M>{"f(x) = ax^2 + bx + 5"}</M> tem vértice em <M>{"x_V = 3"}</M>
              e um zero em <M>{"x = 5"}</M>. Determine a e b.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"a=-1{,}25,\\; b=7{,}5"}</M>, correct: true },
            { letter: "b", text: <M>{"a=1{,}25,\\; b=-7{,}5"}</M> },
            { letter: "c", text: <M>{"a=-5,\\; b=30"}</M> },
            { letter: "d", text: <M>{"a=-1,\\; b=6"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"x_V = -\\frac{b}{2a} = 3 \\Rightarrow b = -6a"}</M>
              <M block={true}>{"f(5) = 0 \\Rightarrow 25a + 5b + 5 = 0 \\Rightarrow 25a + 5(-6a) + 5 = 0"}</M>
              <M block={true}>{"-5a = -5 \\Rightarrow a = -1{,}25? \\text{ verificar}"}</M>
              <p>Com a = −1,25 e b = −6×(−1,25) = 7,5.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Lucro máximo de uma empresa"
          statement={
            <p>
              O lucro (em mil reais) de uma empresa ao vender x unidades é dado por
              <M>{" L(x) = -x^2 + 10x - 16"}</M>. Quantas unidades maximizam o lucro e qual é o lucro máximo?
            </p>
          }
          options={[
            { letter: "a", text: "5 unidades — lucro R$ 9.000", correct: true },
            { letter: "b", text: "10 unidades — lucro R$ 84.000" },
            { letter: "c", text: "5 unidades — lucro R$ 25.000" },
            { letter: "d", text: "8 unidades — lucro R$ 0" },
          ]}
          resolution={
            <>
              <M block={true}>{"x_V = -\\frac{10}{2(-1)} = 5 \\text{ unidades}"}</M>
              <M block={true}>{"L(5) = -25 + 50 - 16 = 9 \\text{ (mil reais)}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Altura máxima de um projétil"
          statement={
            <p>
              Um foguete de brinquedo é lançado com trajetória <M>{"h(t) = -4t^2 + 24t"}</M> (metros).
              Qual é a altura máxima atingida e em que instante?
            </p>
          }
          options={[
            { letter: "a", text: "h = 24 m em t = 6 s" },
            { letter: "b", text: "h = 36 m em t = 3 s", correct: true },
            { letter: "c", text: "h = 48 m em t = 3 s" },
            { letter: "d", text: "h = 144 m em t = 6 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"t_V = -\\frac{24}{2(-4)} = 3 \\text{ s}"}</M>
              <M block={true}>{"h(3) = -4(9) + 24(3) = -36 + 72 = 36 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
