"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 9</span>
          <h1>Inequações e Equações Modulares</h1>
          <p>
            Aprenda a resolver inequações do 1º e 2º grau, inequações produto e quociente,
            e equações e inequações com módulo — temas recorrentes no ENEM e vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações 1º Grau</span>
        <h2>1. Inequações do 1º Grau</h2>
        <p>
          Uma <strong>inequação</strong> é uma sentença com sinal de
          desigualdade (<M>{"<, >, \\leq, \\geq"}</M>). Resolve-se como equação,
          com a <strong>regra crítica</strong>: ao multiplicar ou dividir por
          número negativo, o sinal inverte.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Operação</th><th>Efeito no sinal</th></tr>
            </thead>
            <tbody>
              <tr><td>Multiplicar/dividir por positivo</td><td>Sinal permanece</td></tr>
              <tr><td>Multiplicar/dividir por negativo</td><td>Sinal inverte</td></tr>
              <tr><td>Adicionar/subtrair qualquer valor</td><td>Sinal permanece</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"3 - 2x > 7 \\Rightarrow -2x > 4 \\Rightarrow x < -2"}</M>
          <p>Solução: <M>{"x \\in (-\\infty, -2)"}</M></p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 60" width="360" height="60" aria-label="Representação na reta">
            <line x1="20" y1="30" x2="340" y2="30" stroke="#374151" strokeWidth="1.5"/>
            <polygon points="340,30 330,25 330,35" fill="#374151"/>
            <circle cx="180" cy="30" r="6" fill="white" stroke="#dc2626" strokeWidth="2"/>
            <text x="180" y="50" textAnchor="middle" fontSize="11" fill="#374151">−2</text>
            <line x1="20" y1="30" x2="174" y2="30" stroke="#dc2626" strokeWidth="3"/>
            <polygon points="20,30 30,25 30,35" fill="#dc2626"/>
          </svg>
          <figcaption>Solução <M>{"x < -2"}</M> na reta real (círculo vazio = ponto excluído)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações 2º Grau</span>
        <h2>2. Inequações do 2º Grau</h2>
        <p>
          Para resolver <M>{"ax^2 + bx + c > 0"}</M> (ou <M>{"< 0"}</M>):
        </p>
        <ol>
          <li>Encontre as raízes <M>{"x_1 \\leq x_2"}</M> da equação correspondente.</li>
          <li>Analise o sinal da parábola fora e entre as raízes.</li>
        </ol>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sinal de a</th><th>Parábola &gt; 0 (acima do eixo)</th><th>Parábola &lt; 0</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>a &gt; 0 (concavidade ↑)</td>
                <td><M>{"x < x_1"}</M> ou <M>{"x > x_2"}</M></td>
                <td><M>{"x_1 < x < x_2"}</M></td>
              </tr>
              <tr>
                <td>a &lt; 0 (concavidade ↓)</td>
                <td><M>{"x_1 < x < x_2"}</M></td>
                <td><M>{"x < x_1"}</M> ou <M>{"x > x_2"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"x^2 - 5x + 6 < 0 \\Rightarrow (x-2)(x-3) < 0"}</M>
          <p>Raízes: 2 e 3. Parábola abre pra cima → negativa entre as raízes.</p>
          <M block={true}>{"\\text{Solução: } x \\in (2, 3)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações Produto</span>
        <h2>3. Inequações-Produto e Inequações-Quociente</h2>
        <p>
          O sinal do produto (ou quociente) de dois fatores depende do sinal de cada um.
          Use a <strong>tabela de sinais</strong>.
        </p>
        <div className="math-block">
          <h3>Exemplo — produto</h3>
          <M block={true}>{"(x-1)(x+3) > 0"}</M>
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr><th>Intervalo</th><th>(x−1)</th><th>(x+3)</th><th>Produto</th></tr>
              </thead>
              <tbody>
                <tr><td><M>{"x < -3"}</M></td><td>−</td><td>−</td><td>+</td></tr>
                <tr><td><M>{"-3 < x < 1"}</M></td><td>−</td><td>+</td><td>−</td></tr>
                <tr><td><M>{"x > 1"}</M></td><td>+</td><td>+</td><td>+</td></tr>
              </tbody>
            </table>
          </div>
          <M block={true}>{"\\text{Solução: } x \\in (-\\infty, -3) \\cup (1, +\\infty)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Módulo</span>
        <h2>4. Equações com Módulo</h2>
        <M block={true}>{"| f(x) | = k \\iff f(x) = k \\text{ ou } f(x) = -k \\quad (k \\geq 0)"}</M>
        <M block={true}>{"| f(x) | = | g(x) | \\iff f(x) = g(x) \\text{ ou } f(x) = -g(x)"}</M>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"| 2x - 1 | = 5 \\Rightarrow 2x-1=5 \\text{ ou } 2x-1=-5"}</M>
          <M block={true}>{"\\Rightarrow x = 3 \\text{ ou } x = -2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações Modulares</span>
        <h2>5. Inequações com Módulo</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>{"| | < k"}</span>
            <h3>Módulo menor</h3>
            <M block={true}>{"| f(x) | < k \\iff -k < f(x) < k"}</M>
            <p>Intervalo aberto centrado em 0.</p>
          </div>
          <div className="lesson-card">
            <span>{"| | > k"}</span>
            <h3>Módulo maior</h3>
            <M block={true}>{"| f(x) | > k \\iff f(x) < -k \\text{ ou } f(x) > k"}</M>
            <p>Dois intervalos (cauda esquerda e direita).</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"| x - 3 | < 4 \\iff -4 < x-3 < 4 \\iff -1 < x < 7"}</M>
          <M block={true}>{"| 2x + 1 | \\geq 5 \\iff 2x+1 \\leq -5 \\text{ ou } 2x+1 \\geq 5"}</M>
          <M block={true}>{"\\iff x \\leq -3 \\text{ ou } x \\geq 2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistemas</span>
        <h2>6. Sistemas de Inequações</h2>
        <p>
          A solução de um sistema de inequações é a <strong>interseção</strong>
          das soluções de cada inequação.
        </p>
        <div className="math-block">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases} x + 2 > 0 \\\\ 3 - x \\geq 0 \\end{cases} \\Rightarrow \\begin{cases} x > -2 \\\\ x \\leq 3 \\end{cases}"}</M>
          <M block={true}>{"\\text{Solução: } x \\in (-2, 3]"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequação Racional</span>
        <h2>7. Inequação Racional (Quociente)</h2>
        <p>
          Para <M>{"\\dfrac{f(x)}{g(x)} > 0"}</M>: monte a tabela de sinais,
          excluindo os zeros de <M>{"g(x)"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\frac{x-2}{x+1} > 0"}</M>
          <p>Zeros: x=2 e x=−1 (excluído do domínio).</p>
          <M block={true}>{"\\text{Solução: } x \\in (-\\infty,-1) \\cup (2,+\\infty)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interpretação Geométrica</span>
        <h2>8. Interpretação Geométrica das Inequações</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 180" width="380" height="180" aria-label="Parábola e regiões de sinal">
            <line x1="40" y1="90" x2="360" y2="90" stroke="#374151" strokeWidth="1.5"/>
            <line x1="200" y1="20" x2="200" y2="165" stroke="#374151" strokeWidth="1.5"/>
            <path d="M 62 20 Q 120 160 155 172 Q 190 180 200 180 Q 210 180 225 172 Q 262 160 338 20"
              stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <circle cx="126" cy="90" r="5" fill="#dc2626"/>
            <circle cx="181" cy="90" r="5" fill="#dc2626"/>
            <text x="126" y="105" textAnchor="middle" fontSize="11" fill="#dc2626">x₁=2</text>
            <text x="181" y="105" textAnchor="middle" fontSize="11" fill="#dc2626">x₂=3</text>
            <text x="154" y="80" textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="700">f&lt;0</text>
            <text x="80" y="60" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="700">f&gt;0</text>
            <text x="270" y="60" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="700">f&gt;0</text>
          </svg>
          <figcaption>Parábola <M>{"f(x) = x^2 - 5x + 6"}</M>: negativa entre as raízes 2 e 3</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Aplicações Práticas de Inequações</h2>
        <div className="lesson-highlight">
          <h3>Lucro mínimo — inequação do 1º grau</h3>
          <p>
            Custo fixo R$1.200, custo variável R$8/unidade, preço de venda R$20.
            Para lucro positivo:
          </p>
          <M block={true}>{"20x - (1200 + 8x) > 0 \\Rightarrow 12x > 1200 \\Rightarrow x > 100"}</M>
          <p>Deve produzir mais de 100 unidades.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Quadro-Resumo — Inequações e Módulo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Método</th><th>Solução</th></tr>
            </thead>
            <tbody>
              <tr><td>1º grau</td><td>Isola x; inverte com ÷(−)</td><td>Semirreta ou intervalo</td></tr>
              <tr><td>2º grau</td><td>Raízes + concavidade</td><td>Intervalo ou união</td></tr>
              <tr><td>Produto/quociente</td><td>Tabela de sinais</td><td>União de intervalos</td></tr>
              <tr><td>|f(x)| = k</td><td>Dois casos</td><td>Dois valores</td></tr>
              <tr><td>|f(x)| &lt; k</td><td>Intervalo duplo</td><td><M>{"-k < f < k"}</M></td></tr>
              <tr><td>|f(x)| &gt; k</td><td>Dois casos</td><td><M>{"f < -k"}</M> ou <M>{"f > k"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Inequação do 1º grau"
          statement={
            <p>Resolva: <M>{"2x - 3 \\leq 7"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x \\leq 2"}</M> },
            { letter: "b", text: <M>{"x \\leq 5"}</M>, correct: true },
            { letter: "c", text: <M>{"x \\geq 5"}</M> },
            { letter: "d", text: <M>{"x \\leq 10"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"2x \\leq 10 \\Rightarrow x \\leq 5"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Inequação do 2º grau"
          statement={
            <p>Para quais valores de x é verdade que <M>{"x^2 - 4 > 0"}</M>?</p>
          }
          options={[
            { letter: "a", text: <M>{"x \\in (-2, 2)"}</M> },
            { letter: "b", text: <M>{"x \\in (-\\infty,-2) \\cup (2,+\\infty)"}</M>, correct: true },
            { letter: "c", text: <M>{"x \\in (-4, 4)"}</M> },
            { letter: "d", text: <M>{"x > 0"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"x^2 - 4 > 0 \\Rightarrow (x-2)(x+2) > 0"}</M>
              <p>Parábola com concavidade ↑, raízes ±2 → positiva fora das raízes.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inequação modular"
          statement={
            <p>Determine o conjunto solução de <M>{"| 3x - 6 | > 9"}</M>.</p>
          }
          options={[
            { letter: "a", text: <M>{"x \\in (-1, 5)"}</M> },
            { letter: "b", text: <M>{"x \\in (-\\infty,-1) \\cup (5,+\\infty)"}</M>, correct: true },
            { letter: "c", text: <M>{"x \\in (-3, 5)"}</M> },
            { letter: "d", text: <M>{"x \\in (-\\infty, -3)"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"3x - 6 > 9 \\Rightarrow x > 5"}</M>
              <M block={true}>{"3x - 6 < -9 \\Rightarrow x < -1"}</M>
              <M block={true}>{"\\text{Solução: } x \\in (-\\infty,-1) \\cup (5,+\\infty)"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Receita × custo"
          statement={
            <p>
              Uma empresa tem custo total <M>{"C(x) = 500 + 15x"}</M> e receita <M>{"R(x) = 35x"}</M>.
              Para quantas unidades (x) a empresa tem lucro?
            </p>
          }
          options={[
            { letter: "a", text: "x > 15" },
            { letter: "b", text: "x > 25", correct: true },
            { letter: "c", text: "x > 50" },
            { letter: "d", text: "x > 35" },
          ]}
          resolution={
            <>
              <M block={true}>{"R(x) > C(x) \\Rightarrow 35x > 500 + 15x \\Rightarrow 20x > 500 \\Rightarrow x > 25"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Tolerância de fabricação"
          statement={
            <p>
              Uma peça deve ter comprimento de 50 mm com tolerância de ±0,5 mm.
              Expresse a condição de aceitação com módulo e resolva.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"49 < x < 51"}</M> },
            { letter: "b", text: <M>{"49{,}5 \\leq x \\leq 50{,}5"}</M>, correct: true },
            { letter: "c", text: <M>{"48 \\leq x \\leq 52"}</M> },
            { letter: "d", text: "x = 50 apenas" },
          ]}
          resolution={
            <>
              <M block={true}>{"| x - 50 | \\leq 0{,}5 \\iff -0{,}5 \\leq x-50 \\leq 0{,}5"}</M>
              <M block={true}>{"\\iff 49{,}5 \\leq x \\leq 50{,}5"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
