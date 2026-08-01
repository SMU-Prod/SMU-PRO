"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 15</span>
          <h1>Progressões Aritméticas (PA)</h1>
          <p>
            Domine as progressões aritméticas: definição, razão, termos, soma,
            fórmulas e aplicações em sequências de números, empilhamentos,
            juros simples e problemas do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição e Conceitos Básicos</h2>
        <p>
          Uma <strong>Progressão Aritmética (PA)</strong> é uma sequência em que
          a diferença entre termos consecutivos é sempre constante, chamada
          <strong> razão</strong> (r).
        </p>
        <M block={true}>{"a_{n+1} - a_n = r \\quad \\text{(constante para todo } n)"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sequência</th><th>r</th><th>Tipo</th></tr>
            </thead>
            <tbody>
              <tr><td>(2, 5, 8, 11, 14, …)</td><td>+3</td><td>PA crescente</td></tr>
              <tr><td>(10, 7, 4, 1, −2, …)</td><td>−3</td><td>PA decrescente</td></tr>
              <tr><td>(5, 5, 5, 5, …)</td><td>0</td><td>PA constante</td></tr>
              <tr><td>(1, 3, 6, 10, …)</td><td>variável</td><td>Não é PA</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Termo Geral</span>
        <h2>2. Fórmula do Termo Geral</h2>
        <M block={true}>{"a_n = a_1 + (n-1) \\cdot r"}</M>
        <p>
          onde <M>{"a_1"}</M> é o primeiro termo, <M>{"r"}</M> a razão e <M>{"n"}</M>
          a posição do termo.
        </p>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"\\text{PA: }(3, 7, 11, \\ldots) \\Rightarrow a_1=3,\\; r=4 \\Rightarrow a_n = 3 + (n-1)\\cdot 4 = 4n - 1"}</M>
          <M block={true}>{"a_{10} = 4(10)-1 = 39"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 120" width="380" height="120" aria-label="PA como função linear">
            <line x1="30" y1="20" x2="30" y2="100" stroke="#374151" strokeWidth="1.5"/>
            <line x1="20" y1="90" x2="360" y2="90" stroke="#374151" strokeWidth="1.5"/>
            <text x="365" y="93" fontSize="11" fill="#374151">n</text>
            <text x="25" y="17" fontSize="11" fill="#374151">aₙ</text>
            {/* Pontos da PA */}
            {[1,2,3,4,5,6].map((n) => {
              const x = 30 + n * 50;
              const y = 90 - (3 + (n-1)*4) * 3;
              return (
                <g key={n}>
                  <circle cx={x} cy={y} r="5" fill="#2563eb"/>
                  <text x={x} y={95 + 10} textAnchor="middle" fontSize="10" fill="#6b7280">{n}</text>
                  <text x={x} y={y - 8} textAnchor="middle" fontSize="10" fill="#2563eb">{3 + (n-1)*4}</text>
                </g>
              );
            })}
            {/* Reta de tendência */}
            <line x1="50" y1="81" x2="330" y2="9" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="240" y="25" fontSize="11" fill="#2563eb">aₙ = 4n − 1</text>
          </svg>
          <figcaption>O termo geral de uma PA é uma função linear de n</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma</span>
        <h2>3. Soma dos n Primeiros Termos</h2>
        <p>
          A soma dos n primeiros termos de uma PA é dada por duas fórmulas equivalentes:
        </p>
        <M block={true}>{"S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n(2a_1 + (n-1)r)}{2}"}</M>

        <div className="lesson-highlight">
          <h3>Como Gauss descobriu aos 10 anos</h3>
          <p>Somar 1 + 2 + 3 + … + 100:</p>
          <M block={true}>{"S_{100} = \\frac{100(1+100)}{2} = \\frac{100 \\times 101}{2} = 5050"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 100" width="380" height="100" aria-label="Truque da soma de Gauss">
            <text x="190" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">Truque: pares que somam o mesmo</text>
            {/* Sequência 1 a 6 */}
            {[1,2,3,4,5,6].map((v, i) => (
              <g key={v}>
                <rect x={20 + i*55} y="30" width="40" height="28" rx="6"
                  fill={i < 3 ? "#dbeafe" : "#dcfce7"} stroke={i < 3 ? "#2563eb" : "#16a34a"} strokeWidth="1"/>
                <text x={40 + i*55} y="50" textAnchor="middle" fontSize="14" fontWeight="700"
                  fill={i < 3 ? "#1e40af" : "#166534"}>{v}</text>
              </g>
            ))}
            {/* Arcos */}
            <path d="M 40 30 Q 190 -5 350 30" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeDasharray="4,3"/>
            <text x="190" y="5" textAnchor="middle" fontSize="10" fill="#dc2626">1+6=7 | 2+5=7 | 3+4=7</text>
            <text x="190" y="82" textAnchor="middle" fontSize="11" fill="#374151">S₆ = 3 × 7 = 21 = 6×7/2 ✓</text>
          </svg>
          <figcaption>Cada par extremo-centro soma o mesmo valor (a₁ + aₙ)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>4. Propriedades das PAs</h2>
        <div className="lesson-highlight">
          <h3>Termo central</h3>
          <p>Em uma PA com número ímpar de termos, o termo do meio é a média aritmética da PA.</p>
          <M block={true}>{"a_m = \\frac{a_1 + a_n}{2} \\quad \\text{(m = posição central)}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Soma de termos equidistantes</h3>
          <M block={true}>{"a_k + a_{n+1-k} = a_1 + a_n \\quad \\text{(constante)}"}</M>
          <p>Exemplo em (1,3,5,7,9): 1+9 = 3+7 = 5+5 = 10.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interpolação</span>
        <h2>5. Interpolação Aritmética</h2>
        <p>
          Inserir <M>{"k"}</M> meios aritméticos entre <M>{"a"}</M> e <M>{"b"}</M>
          cria uma PA com <M>{"k+2"}</M> termos:
        </p>
        <M block={true}>{"r = \\frac{b - a}{k+1}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Inserir 3 meios entre 2 e 18:</p>
          <M block={true}>{"r = \\frac{18-2}{3+1} = 4 \\Rightarrow \\text{PA: }(2, 6, 10, 14, 18)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Juros Simples</span>
        <h2>6. PA e Juros Simples</h2>
        <p>
          O saldo de uma conta em juros simples forma uma PA, pois os juros são
          fixos a cada período:
        </p>
        <M block={true}>{"M_n = C + n \\cdot C \\cdot i = C(1 + ni)"}</M>
        <p>
          Os montantes <M>{"M_1, M_2, M_3, \\ldots"}</M> formam uma PA com razão <M>{"Ci"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos Clássicos</span>
        <h2>7. Sequências Aritméticas Famosas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sequência</th><th>a₁</th><th>r</th><th>Termo geral</th></tr>
            </thead>
            <tbody>
              <tr><td>Naturais positivos</td><td>1</td><td>1</td><td><M>{"n"}</M></td></tr>
              <tr><td>Pares positivos</td><td>2</td><td>2</td><td><M>{"2n"}</M></td></tr>
              <tr><td>Ímpares positivos</td><td>1</td><td>2</td><td><M>{"2n-1"}</M></td></tr>
              <tr><td>Múltiplos de 5</td><td>5</td><td>5</td><td><M>{"5n"}</M></td></tr>
              <tr><td>Múltiplos de 3</td><td>3</td><td>3</td><td><M>{"3n"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Problemas</span>
        <h2>8. Estratégias para Resolver Problemas</h2>
        <div className="lesson-highlight">
          <h3>3 termos em PA</h3>
          <p>Represente como <M>{"(a-r, a, a+r)"}</M> — facilita equações.</p>
          <M block={true}>{"\\text{Soma} = 3a, \\quad \\text{Produto} = a(a^2-r^2)"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>4 termos em PA</h3>
          <p>Represente como <M>{"(a-3d, a-d, a+d, a+3d)"}</M>.</p>
          <M block={true}>{"\\text{Soma} = 4a, \\quad \\text{razão} = 2d"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Empilhamento</span>
        <h2>9. Aplicação — Empilhamento de Objetos</h2>
        <div className="lesson-highlight">
          <h3>Tijolos empilhados</h3>
          <p>
            Uma pilha de tijolos tem 20 na base, 18 na segunda fileira, 16 na terceira…
            Quantas fileiras há se a última tem 2 tijolos? Quantos tijolos no total?
          </p>
          <M block={true}>{"a_n = 2 = 20 + (n-1)(-2) \\Rightarrow 2 = 22 - 2n \\Rightarrow n = 10 \\text{ fileiras}"}</M>
          <M block={true}>{"S_{10} = \\frac{10(20+2)}{2} = \\frac{10 \\times 22}{2} = 110 \\text{ tijolos}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Progressão Aritmética</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>aₙ</span>
            <h3>Termo geral</h3>
            <M block={true}>{"a_n = a_1 + (n-1)r"}</M>
          </div>
          <div className="math-card">
            <span>Sₙ</span>
            <h3>Soma</h3>
            <M block={true}>{"S_n = \\frac{n(a_1+a_n)}{2}"}</M>
          </div>
          <div className="math-card">
            <span>r</span>
            <h3>Razão</h3>
            <M block={true}>{"r = a_{n+1} - a_n"}</M>
          </div>
          <div className="math-card">
            <span>Interp.</span>
            <h3>Interpolação</h3>
            <M block={true}>{"r = \\frac{b-a}{k+1}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Termo geral"
          statement={
            <p>Na PA (4, 7, 10, 13, …), qual é o 20º termo?</p>
          }
          options={[
            { letter: "a", text: "58" },
            { letter: "b", text: "61", correct: true },
            { letter: "c", text: "64" },
            { letter: "d", text: "67" },
          ]}
          resolution={
            <>
              <M block={true}>{"a_1=4,\\; r=3 \\Rightarrow a_{20} = 4 + 19 \\times 3 = 4 + 57 = 61"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Soma da PA"
          statement={
            <p>
              Calcule a soma dos números naturais ímpares de 1 a 99.
            </p>
          }
          options={[
            { letter: "a", text: "2.000" },
            { letter: "b", text: "2.500", correct: true },
            { letter: "c", text: "5.000" },
            { letter: "d", text: "4.950" },
          ]}
          resolution={
            <>
              <M block={true}>{"a_1=1,\\; a_n=99,\\; r=2 \\Rightarrow n = \\frac{99-1}{2}+1 = 50"}</M>
              <M block={true}>{"S_{50} = \\frac{50(1+99)}{2} = \\frac{50 \\times 100}{2} = 2500"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Três termos em PA"
          statement={
            <p>
              Três números formam uma PA. Sua soma é 21 e o produto é 315. Quais são eles?
            </p>
          }
          options={[
            { letter: "a", text: "3, 7, 11" },
            { letter: "b", text: "5, 7, 9", correct: true },
            { letter: "c", text: "4, 7, 10" },
            { letter: "d", text: "6, 7, 8" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Seja } (a-r, a, a+r): \\quad 3a = 21 \\Rightarrow a = 7"}</M>
              <M block={true}>{"7(7^2 - r^2) = 315 \\Rightarrow 49 - r^2 = 45 \\Rightarrow r^2 = 4 \\Rightarrow r = 2"}</M>
              <p>Termos: 5, 7, 9.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Assentos em teatro"
          statement={
            <p>
              Um teatro tem 25 fileiras de assentos. A primeira fileira tem 20 assentos
              e cada fileira seguinte tem 2 a mais. Qual é a capacidade total do teatro?
            </p>
          }
          options={[
            { letter: "a", text: "1.100" },
            { letter: "b", text: "1.200", correct: true },
            { letter: "c", text: "1.000" },
            { letter: "d", text: "900" },
          ]}
          resolution={
            <>
              <M block={true}>{"a_1 = 20,\\; r = 2,\\; n = 25"}</M>
              <M block={true}>{"a_{25} = 20 + 24 \\times 2 = 68"}</M>
              <M block={true}>{"S_{25} = \\frac{25(20+68)}{2} = \\frac{25 \\times 88}{2} = 1100"}</M>
              <p>Capacidade: 1.100 assentos.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Salário com reajuste fixo"
          statement={
            <p>
              Um funcionário tem salário inicial de R$2.000 e recebe reajuste fixo de R$150
              por ano. Após quantos anos o salário será R$3.500?
            </p>
          }
          options={[
            { letter: "a", text: "8 anos" },
            { letter: "b", text: "10 anos", correct: true },
            { letter: "c", text: "12 anos" },
            { letter: "d", text: "15 anos" },
          ]}
          resolution={
            <>
              <M block={true}>{"3500 = 2000 + (n-1) \\times 150 \\Rightarrow (n-1) = \\frac{1500}{150} = 10"}</M>
              <M block={true}>{"n = 11 \\Rightarrow \\text{após 10 anos (no 11º ano)}"}</M>
              <p>O salário atingirá R$3.500 após 10 anos de reajuste.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
