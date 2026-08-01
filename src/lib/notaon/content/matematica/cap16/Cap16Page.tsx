"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 16</span>
          <h1>Progressões Geométricas (PG)</h1>
          <p>
            Domine as progressões geométricas: razão, termo geral, soma de termos
            finitos e infinitos. Conecte com juros compostos, crescimento populacional
            e séries geométricas convergentes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição e Razão da PG</h2>
        <p>
          Uma <strong>Progressão Geométrica (PG)</strong> é uma sequência em que
          o quociente entre termos consecutivos é sempre constante, chamado <strong>razão</strong> (q).
        </p>
        <M block={true}>{"\\frac{a_{n+1}}{a_n} = q \\quad \\text{(constante, } q \\neq 0)"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sequência</th><th>q</th><th>Tipo</th></tr>
            </thead>
            <tbody>
              <tr><td>(2, 6, 18, 54, …)</td><td>3</td><td>PG crescente (q&gt;1, a₁&gt;0)</td></tr>
              <tr><td>(100, 50, 25, …)</td><td>1/2</td><td>PG decrescente (0&lt;q&lt;1)</td></tr>
              <tr><td>(3, −6, 12, −24, …)</td><td>−2</td><td>PG oscilante (q&lt;0)</td></tr>
              <tr><td>(5, 5, 5, …)</td><td>1</td><td>PG constante</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Termo Geral</span>
        <h2>2. Fórmula do Termo Geral</h2>
        <M block={true}>{"a_n = a_1 \\cdot q^{n-1}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"\\text{PG: }(3, 6, 12, 24, \\ldots) \\Rightarrow a_1=3,\\; q=2 \\Rightarrow a_n = 3 \\cdot 2^{n-1}"}</M>
          <M block={true}>{"a_8 = 3 \\cdot 2^7 = 3 \\times 128 = 384"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="PG (1 2 4 8 16) como quadrados de áreas dobradas com razão q=2">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* 5 quadrados cujos lados representam os termos: lado proporcional à raiz do valor
                Usamos lados: 20, 28, 40, 56, 80 (prop a sqrt(1),sqrt(2),sqrt(4),sqrt(8),sqrt(16)=1,1.41,2,2.83,4)
                escalonados por 20: 20, 28, 40, 57, 80
                Posicionamos da esquerda para a direita, com base em y=190 */}
            {[
              { val: 1,  side: 20,  x: 40,   label: "1" },
              { val: 2,  side: 29,  x: 110,  label: "2" },
              { val: 4,  side: 40,  x: 195,  label: "4" },
              { val: 8,  side: 57,  x: 305,  label: "8" },
              { val: 16, side: 80,  x: 445,  label: "16" },
            ].map(({ val, side, x, label }) => (
              <g key={val}>
                <rect
                  x={x}
                  y={190 - side}
                  width={side}
                  height={side}
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="3"
                />
                {/* Rótulo do termo dentro do quadrado */}
                <text
                  x={x + side / 2}
                  y={190 - side / 2 + 5}
                  textAnchor="middle"
                  fontSize={side > 40 ? 14 : 11}
                  fill="#1e40af"
                  fontWeight="bold"
                >
                  {label}
                </text>
                {/* Índice abaixo */}
                <text
                  x={x + side / 2}
                  y={205}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#374151"
                >
                  a{val === 1 ? "₁" : val === 2 ? "₂" : val === 4 ? "₃" : val === 8 ? "₄" : "₅"}
                </text>
              </g>
            ))}
            {/* Setas entre quadrados indicando ×2 (razão q=2) */}
            {[
              { x1: 65,  y1: 168, x2: 105,  label: "×2" },
              { x1: 144, y1: 163, x2: 190,  label: "×2" },
              { x1: 240, y1: 158, x2: 300,  label: "×2" },
              { x1: 367, y1: 153, x2: 440,  label: "×2" },
            ].map(({ x1, y1, x2, label }, i) => (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y1} stroke="#facc15" strokeWidth="2.5"/>
                <polygon points={`${x2},${y1} ${x2-8},${y1-4} ${x2-8},${y1+4}`} fill="#facc15"/>
                <text x={(x1 + x2) / 2} y={y1 - 6} textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">{label}</text>
              </g>
            ))}
            {/* Rótulo PG e razão */}
            <text x="580" y="90" fontSize="15" fill="#1e3a8a" fontWeight="bold">PG: 1, 2, 4, 8, 16</text>
            <text x="580" y="112" fontSize="13" fill="#3b82f6">razão q = 2</text>
            <text x="580" y="132" fontSize="11" fill="#374151">Área dobra a cada</text>
            <text x="580" y="147" fontSize="11" fill="#374151">termo da sequência</text>
          </svg>
          <figcaption>PG (1, 2, 4, 8, 16) com q = 2 — quadrados de área proporcional ao termo; setas amarelas indicam a multiplicação pela razão</figcaption>
        </figure>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 160" width="380" height="160" aria-label="PG crescimento exponencial">
            <line x1="30" y1="20" x2="30" y2="140" stroke="#374151" strokeWidth="1.5"/>
            <line x1="20" y1="130" x2="370" y2="130" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="133" fontSize="11" fill="#374151">n</text>
            <text x="25" y="17" fontSize="11" fill="#374151">aₙ</text>
            {[1,2,3,4,5,6].map((n) => {
              const x = 30 + n * 50;
              const val = 3 * Math.pow(2, n - 1);
              const y = 130 - Math.min(val * 0.7, 110);
              return (
                <g key={n}>
                  <circle cx={x} cy={y} r="5" fill="#dc2626"/>
                  <text x={x} y={135 + 10} textAnchor="middle" fontSize="10" fill="#6b7280">{n}</text>
                  <text x={x} y={y - 8} textAnchor="middle" fontSize="9" fill="#dc2626">{val}</text>
                </g>
              );
            })}
            <path d="M 80 123 Q 130 115 180 98 Q 230 75 280 35" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeDasharray="4,3"/>
            <text x="290" y="32" fontSize="11" fill="#dc2626">3·2ⁿ⁻¹</text>
          </svg>
          <figcaption>Crescimento exponencial: o termo geral da PG é uma exponencial</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma Finita</span>
        <h2>3. Soma dos n Primeiros Termos (q ≠ 1)</h2>
        <M block={true}>{"S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1}"}</M>

        <div className="lesson-highlight">
          <h3>Derivação</h3>
          <p>
            Multiplicando <M>{"S_n = a_1 + a_1 q + \\ldots + a_1 q^{n-1}"}</M>
            por q e subtraindo:
          </p>
          <M block={true}>{"qS_n - S_n = a_1 q^n - a_1 \\Rightarrow S_n(q-1) = a_1(q^n-1)"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"S_5 \\text{ de } (2, 6, 18, 54, 162): \\quad S_5 = 2 \\cdot \\frac{3^5-1}{3-1} = 2 \\cdot \\frac{242}{2} = 242"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma Infinita</span>
        <h2>4. Soma de PG Infinita (Série Geométrica)</h2>
        <p>
          Quando <M>{"0 < |q| < 1"}</M>, a soma infinita da PG converge:
        </p>
        <M block={true}>{"S_\\infty = \\frac{a_1}{1 - q}, \\quad |q| < 1"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo clássico — dízima periódica</h3>
          <M block={true}>{"0{,}\\overline{3} = 0{,}3 + 0{,}03 + 0{,}003 + \\ldots = \\frac{0{,}3}{1 - 0{,}1} = \\frac{0{,}3}{0{,}9} = \\frac{1}{3}"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo — somas geométricas</h3>
          <M block={true}>{"\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1-1/2} = 2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>5. Propriedades das PGs</h2>
        <div className="lesson-highlight">
          <h3>Termo central</h3>
          <M block={true}>{"a_m^2 = a_k \\cdot a_j \\quad \\text{se } m = \\frac{k+j}{2}"}</M>
          <p>Exemplo: em (2, 6, 18): <M>{"6^2 = 2 \\times 18 = 36 \\checkmark"}</M></p>
        </div>
        <div className="lesson-highlight">
          <h3>Produto de termos equidistantes</h3>
          <M block={true}>{"a_k \\cdot a_{n+1-k} = a_1 \\cdot a_n \\quad \\text{(constante)}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">PG e Exponencial</span>
        <h2>6. Relação com Juros Compostos</h2>
        <p>
          Os montantes em juros compostos formam uma PG com razão <M>{"q = (1+i)"}</M>:
        </p>
        <M block={true}>{"M_1, M_2, \\ldots, M_n \\text{ formam PG com } q = 1+i"}</M>
        <M block={true}>{"M_n = M_1 \\cdot (1+i)^{n-1} = C \\cdot (1+i)^n"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interpolação</span>
        <h2>7. Interpolação Geométrica</h2>
        <p>
          Inserir <M>{"k"}</M> meios geométricos entre <M>{"a"}</M> e <M>{"b"}</M>:
        </p>
        <M block={true}>{"q = \\left(\\frac{b}{a}\\right)^{\\frac{1}{k+1}}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Inserir 2 meios geométricos entre 4 e 32:</p>
          <M block={true}>{"q = \\left(\\frac{32}{4}\\right)^{1/3} = 8^{1/3} = 2 \\Rightarrow \\text{PG: }(4, 8, 16, 32)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação PA x PG</span>
        <h2>8. PA vs PG — Tabela Comparativa</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aspecto</th><th>PA</th><th>PG</th></tr>
            </thead>
            <tbody>
              <tr><td>Operação constante</td><td>Diferença (r)</td><td>Quociente (q)</td></tr>
              <tr><td>Crescimento</td><td>Linear</td><td>Exponencial</td></tr>
              <tr><td>Termo geral</td><td><M>{"a_1+(n-1)r"}</M></td><td><M>{"a_1 \\cdot q^{n-1}"}</M></td></tr>
              <tr><td>Soma</td><td><M>{"n(a_1+a_n)/2"}</M></td><td><M>{"a_1(q^n-1)/(q-1)"}</M></td></tr>
              <tr><td>Termo central</td><td>Média aritmética</td><td>Média geométrica</td></tr>
              <tr><td>Aplicação</td><td>Juros simples</td><td>Juros compostos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dízimas</span>
        <h2>9. Dízimas Periódicas como PG Infinita</h2>
        <p>
          Qualquer dízima periódica pode ser convertida em fração usando a fórmula
          da soma infinita de uma PG:
        </p>
        <div className="lesson-highlight">
          <h3>Dízima simples</h3>
          <M block={true}>{"0{,}\\overline{ab} = \\frac{ab}{99}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Dízima composta</h3>
          <M block={true}>{"0{,}p\\overline{q} = \\frac{pq - p}{90}"}</M>
          <p>Exemplo: <M>{"0{,}1\\overline{6} = \\frac{16-1}{90} = \\frac{15}{90} = \\frac{1}{6}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Progressão Geométrica</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>aₙ</span>
            <h3>Termo geral</h3>
            <M block={true}>{"a_n = a_1 \\cdot q^{n-1}"}</M>
          </div>
          <div className="math-card">
            <span>Sₙ</span>
            <h3>Soma finita</h3>
            <M block={true}>{"S_n = a_1 \\frac{q^n-1}{q-1}"}</M>
          </div>
          <div className="math-card">
            <span>S∞</span>
            <h3>Soma infinita</h3>
            <M block={true}>{"S_\\infty = \\frac{a_1}{1-q}"}</M>
          </div>
          <div className="math-card">
            <span>Prop.</span>
            <h3>Termo central</h3>
            <M block={true}>{"a_m^2 = a_k \\cdot a_j"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Termo geral da PG"
          statement={
            <p>Na PG (5, 10, 20, 40, …), qual é o 7º termo?</p>
          }
          options={[
            { letter: "a", text: "160" },
            { letter: "b", text: "320", correct: true },
            { letter: "c", text: "640" },
            { letter: "d", text: "80" },
          ]}
          resolution={
            <>
              <M block={true}>{"a_7 = 5 \\cdot 2^{7-1} = 5 \\cdot 64 = 320"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Soma de termos"
          statement={
            <p>Calcule a soma dos 6 primeiros termos da PG (1, 3, 9, 27, …).</p>
          }
          options={[
            { letter: "a", text: "243" },
            { letter: "b", text: "364", correct: true },
            { letter: "c", text: "729" },
            { letter: "d", text: "512" },
          ]}
          resolution={
            <>
              <M block={true}>{"S_6 = 1 \\cdot \\frac{3^6-1}{3-1} = \\frac{729-1}{2} = \\frac{728}{2} = 364"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Soma infinita"
          statement={
            <p>
              Converta a dízima <M>{"0{,}\\overline{27}"}</M> em fração usando
              a soma de PG infinita.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{3}{11}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{27}{100}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{27}{90}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{9}{33}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"0{,}\\overline{27} = \\frac{0{,}27}{1 - 0{,}01} = \\frac{27/100}{99/100} = \\frac{27}{99} = \\frac{3}{11}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Crescimento de investimento"
          statement={
            <p>
              Um investimento rende 10% ao ano em juros compostos. Iniciando com
              R$1.000, qual será o montante após 5 anos? (Use <M>{"1{,}1^5 = 1{,}6105"}</M>.)
            </p>
          }
          options={[
            { letter: "a", text: "R$ 1.500,00" },
            { letter: "b", text: "R$ 1.610,51", correct: true },
            { letter: "c", text: "R$ 1.500,00" },
            { letter: "d", text: "R$ 2.000,00" },
          ]}
          resolution={
            <>
              <M block={true}>{"M = 1000 \\times 1{,}1^5 = 1000 \\times 1{,}6105 = 1610{,}50"}</M>
              <p>Os montantes anuais formam PG com q = 1,1.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Partículas de poluente"
          statement={
            <p>
              Um filtro remove 40% das partículas a cada passagem. Começando com
              80.000 partículas, quantas restam após 4 passagens?
            </p>
          }
          options={[
            { letter: "a", text: "10.368" },
            { letter: "b", text: "10.368", correct: true },
            { letter: "c", text: "4.800" },
            { letter: "d", text: "20.000" },
          ]}
          resolution={
            <>
              <p>Cada passagem deixa 60%: <M>{"q = 0{,}6"}</M>.</p>
              <M block={true}>{"a_5 = 80000 \\times 0{,}6^4 = 80000 \\times 0{,}1296 = 10368"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
