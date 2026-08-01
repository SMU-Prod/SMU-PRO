"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 27</span>
          <h1>Binômio de Newton</h1>
          <p>
            Expanda potências de binômios usando o Teorema Binomial, os coeficientes
            do triângulo de Pascal e as propriedades dos termos. Domine fórmulas
            para encontrar termos específicos da expansão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema Binomial</span>
        <h2>1. Teorema do Binômio de Newton</h2>
        <M block={true}>{"(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k = \\sum_{k=0}^{n} C_n^k\\, a^{n-k}\\, b^k"}</M>
        <div className="lesson-highlight">
          <h3>Exemplos básicos</h3>
          <M block={true}>{"(a+b)^2 = a^2 + 2ab + b^2"}</M>
          <M block={true}>{"(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3"}</M>
          <M block={true}>{"(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Termo Geral</span>
        <h2>2. Termo Geral (Termo de Índice k)</h2>
        <M block={true}>{"T_{k+1} = \\binom{n}{k} a^{n-k} b^k \\qquad k = 0, 1, 2, \\ldots, n"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Encontre o 4º termo de <M>{"(x+2)^7"}</M>:</p>
          <M block={true}>{"T_4 = T_{3+1}: \\quad k=3 \\Rightarrow C_7^3 \\cdot x^4 \\cdot 2^3 = 35 \\cdot x^4 \\cdot 8 = 280x^4"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficientes Binomiais</span>
        <h2>3. Coeficientes Binomiais e Triângulo de Pascal</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 180" width="360" height="180" aria-label="Triângulo de Pascal com expansões">
            {[
              { n: 0, vals: [1], eq: "(a+b)⁰ = 1" },
              { n: 1, vals: [1,1], eq: "(a+b)¹ = a+b" },
              { n: 2, vals: [1,2,1], eq: "(a+b)² = a²+2ab+b²" },
              { n: 3, vals: [1,3,3,1], eq: "(a+b)³ = ..." },
              { n: 4, vals: [1,4,6,4,1], eq: "" },
              { n: 5, vals: [1,5,10,10,5,1], eq: "" },
            ].map(({ n, vals }) => (
              vals.map((val, j) => {
                const x = 180 + (j - (vals.length - 1) / 2) * 50;
                const y = 18 + n * 28;
                return (
                  <g key={`${n}-${j}`}>
                    <circle cx={x} cy={y} r="13" fill="#2563eb" opacity={1 - n * 0.1}/>
                    <text x={x} y={y + 4} textAnchor="middle" fontSize={val > 9 ? "8" : "11"} fill="white" fontWeight="700">{val}</text>
                  </g>
                );
              })
            ))}
            <text x="180" y="178" textAnchor="middle" fontSize="11" fill="#374151">Linha n → coeficientes de (a+b)ⁿ</text>
          </svg>
          <figcaption>Triângulo de Pascal: a linha n dá os coeficientes binomiais de (a+b)ⁿ</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulo de Pascal Colorido</span>
        <h2>4. Triângulo de Pascal — Coloração Progressiva</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Triângulo de Pascal com 6 linhas numeradas 0 a 5 com coloração progressiva">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* linhas de conexão */}
            {[
              [[1]],[[1,1]],[[1,2,1]],[[1,3,3,1]],[[1,4,6,4,1]],
            ].map((_unused, ri) => {
              const curLen = ri + 1;
              const nxtLen = ri + 2;
              const spacing = 52;
              const startY = 30;
              const rowHeight = 34;
              const curStart = 350 - (curLen - 1) * spacing / 2;
              const nxtStart = 350 - (nxtLen - 1) * spacing / 2;
              return Array.from({ length: curLen }, (_v, ci) => {
                const cx = curStart + ci * spacing;
                const cy = startY + ri * rowHeight;
                return [ci, ci + 1].map(fi => (
                  <line key={`l-${ri}-${ci}-${fi}`}
                    x1={cx} y1={cy + 15} x2={nxtStart + fi * spacing} y2={cy + rowHeight - 15}
                    stroke="#cbd5e1" strokeWidth="1" opacity="0.7"/>
                ));
              });
            })}
            {/* nós com valores */}
            {[
              [1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],
            ].map((row, ri) => {
              const rowColors = ["#1d4ed8","#2563eb","#3b82f6","#60a5fa","#93c5fd","#bfdbfe"];
              const rowTextColors = ["white","white","white","white","#1e3a8a","#1e3a8a"];
              const spacing = 52;
              const startY = 30;
              const rowHeight = 34;
              const startX = 350 - (row.length - 1) * spacing / 2;
              return (
                <g key={`row-${ri}`}>
                  {/* label n= à esquerda */}
                  <text x={startX - 42} y={startY + ri * rowHeight + 5}
                    textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="600">n={ri}</text>
                  {row.map((val, ci) => {
                    const cx = startX + ci * spacing;
                    const cy = startY + ri * rowHeight;
                    const r = val >= 10 ? 17 : 15;
                    return (
                      <g key={`n-${ri}-${ci}`}>
                        <circle cx={cx} cy={cy} r={r} fill={rowColors[ri]} stroke="white" strokeWidth="1.5"/>
                        <text x={cx} y={cy + 4} textAnchor="middle"
                          fontSize={val >= 10 ? "9" : "11"} fontWeight="700" fill={rowTextColors[ri]}>{val}</text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
            <text x="350" y="213" textAnchor="middle" fontSize="11" fill="#1e3a8a" fontWeight="600">
              Cada número = soma dos dois acima; linha n → coeficientes de (a+b)ⁿ
            </text>
          </svg>
          <figcaption>Triângulo de Pascal (linhas 0 a 5) com coloração progressiva: azul escuro no topo vai clareando. Cada valor é C(n,k).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela de Coeficientes</span>
        <h2>5. Tabela de C(n,k) para n = 0…4</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>n \ k</th>
                <th>k = 0</th>
                <th>k = 1</th>
                <th>k = 2</th>
                <th>k = 3</th>
                <th>k = 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>n = 0</strong></td>
                <td>1</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>n = 1</strong></td>
                <td>1</td>
                <td>1</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>n = 2</strong></td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>n = 3</strong></td>
                <td>1</td>
                <td>3</td>
                <td>3</td>
                <td>1</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>n = 4</strong></td>
                <td>1</td>
                <td>4</td>
                <td>6</td>
                <td>4</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Leia: <M>{"C(n,k)"}</M> é o coeficiente do termo <M>{"T_{k+1}"}</M> na expansão
          de <M>{"(a+b)^n"}</M>. Observe a simetria: <M>{"C(n,k)=C(n,n-k)"}</M> e que
          <M>{"C(n,0)=C(n,n)=1"}</M> sempre.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>6. Propriedades do Binômio</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Número de termos</td><td><M>{"n+1"}</M></td></tr>
              <tr><td>Primeiro termo</td><td><M>{"T_1 = a^n"}</M></td></tr>
              <tr><td>Último termo</td><td><M>{"T_{n+1} = b^n"}</M></td></tr>
              <tr><td>Soma dos coef.</td><td><M>{"\\sum C_n^k = 2^n"}</M></td></tr>
              <tr><td>Coef. médio (n par)</td><td><M>{"C_n^{n/2}"}</M> (maior coeficiente)</td></tr>
              <tr><td>Coeficientes simétricos</td><td><M>{"C_n^k = C_n^{n-k}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Binômio Geral</span>
        <h2>7. Expansão de Binômios com Radicais e Frações</h2>
        <div className="lesson-highlight">
          <h3>Exemplo: <M>{"\\left(\\sqrt{x} - \\frac{1}{x}\\right)^6"}</M></h3>
          <M block={true}>{"T_{k+1} = C_6^k (\\sqrt{x})^{6-k}\\left(-\\frac{1}{x}\\right)^k = C_6^k(-1)^k x^{(6-k)/2 - k}"}</M>
          <p>O expoente de x no k-ésimo termo: <M>{"\\frac{6-k}{2} - k = \\frac{6-3k}{2}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Encontrando Termos</span>
        <h2>8. Encontrar o Termo com Potência Específica</h2>
        <div className="lesson-highlight">
          <h3>Exemplo: termo independente de x em <M>{"\\left(x + \\frac{2}{x^2}\\right)^9"}</M></h3>
          <M block={true}>{"T_{k+1} = C_9^k \\, x^{9-k} \\, \\frac{2^k}{x^{2k}} = C_9^k \\cdot 2^k \\cdot x^{9-3k}"}</M>
          <M block={true}>{"9-3k = 0 \\Rightarrow k = 3 \\Rightarrow T_4 = C_9^3 \\cdot 2^3 = 84 \\times 8 = 672"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Somas Especiais</span>
        <h2>9. Somas Especiais com Binômio</h2>
        <M block={true}>{"(1+1)^n = 2^n \\Rightarrow \\sum_{k=0}^n C_n^k = 2^n"}</M>
        <M block={true}>{"(1-1)^n = 0 \\Rightarrow \\sum_{k=0}^n (-1)^k C_n^k = 0"}</M>
        <M block={true}>{"\\text{Soma dos índices pares} = \\text{Soma dos ímpares} = 2^{n-1}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>10. Aplicações em Cálculo Numérico</h2>
        <div className="lesson-highlight">
          <h3>Aproximação de <M>{"1{,}01^{10}"}</M></h3>
          <M block={true}>{"(1+0{,}01)^{10} \\approx 1 + 10(0{,}01) + 45(0{,}01)^2 = 1 + 0{,}10 + 0{,}0045 = 1{,}1045"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Probabilidades em distribuição binomial</h3>
          <M block={true}>{"P(X=k) = C_n^k p^k (1-p)^{n-k}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Binômio de Newton e Probabilidade</span>
        <h2>11. Ligação com Probabilidade Binomial</h2>
        <p>
          Se <M>{"p + q = 1"}</M>, o k-ésimo termo de <M>{"(p+q)^n"}</M> é a probabilidade
          de obter exatamente k sucessos em n tentativas independentes:
        </p>
        <M block={true}>{"P(X=k) = C_n^k p^k q^{n-k}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>P(exatamente 3 caras em 5 lançamentos de moeda):</p>
          <M block={true}>{"P = C_5^3 \\left(\\frac{1}{2}\\right)^3 \\left(\\frac{1}{2}\\right)^2 = 10 \\times \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo — Binômio de Newton</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Expansão</span>
            <h3>Teorema Binomial</h3>
            <M block={true}>{"(a+b)^n=\\sum_{k=0}^n C_n^k a^{n-k}b^k"}</M>
          </div>
          <div className="math-card">
            <span>Tₖ₊₁</span>
            <h3>Termo geral</h3>
            <M block={true}>{"T_{k+1}=C_n^k a^{n-k} b^k"}</M>
          </div>
          <div className="math-card">
            <span>2ⁿ</span>
            <h3>Soma dos coef.</h3>
            <M block={true}>{"\\sum_{k=0}^n C_n^k = 2^n"}</M>
          </div>
          <div className="math-card">
            <span>Pascal</span>
            <h3>Relação</h3>
            <M block={true}>{"C_n^k = C_{n-1}^{k-1}+C_{n-1}^k"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Expansão de (a+b)³"
          statement={
            <p>Expanda <M>{"(2x-1)^3"}</M>.</p>
          }
          options={[
            { letter: "a", text: <M>{"8x^3 - 12x^2 + 6x - 1"}</M>, correct: true },
            { letter: "b", text: <M>{"8x^3 + 12x^2 + 6x + 1"}</M> },
            { letter: "c", text: <M>{"6x^3 - 12x^2 + 6x - 1"}</M> },
            { letter: "d", text: <M>{"8x^3 - 6x^2 + 12x - 1"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"C_3^0(2x)^3(-1)^0 + C_3^1(2x)^2(-1)^1 + C_3^2(2x)^1(-1)^2 + C_3^3(-1)^3"}</M>
              <M block={true}>{"= 8x^3 - 12x^2 + 6x - 1"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Termo geral"
          statement={
            <p>Qual é o 5º termo de <M>{"(x+2)^8"}</M>?</p>
          }
          options={[
            { letter: "a", text: <M>{"1120x^4"}</M> },
            { letter: "b", text: <M>{"1120x^5"}</M> },
            { letter: "c", text: <M>{"1792x^4"}</M>, correct: true },
            { letter: "d", text: <M>{"56x^4"}</M> },
          ]}
          resolution={
            <>
              <p>k = 4 (5º termo): <M>{"T_5 = C_8^4 x^4 2^4 = 70 \\times 16 \\times x^4 = 1120x^4"}</M></p>
              <p>Nota: k=4 → <M>{"C_8^4 = 70"}</M>, <M>{"2^4=16"}</M>, resultado: 1120x⁴</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Termo independente de x"
          statement={
            <p>
              Qual é o termo independente de x em <M>{"\\left(x + \\frac{3}{x^2}\\right)^6"}</M>?
            </p>
          }
          options={[
            { letter: "a", text: "540" },
            { letter: "b", text: "729" },
            { letter: "c", text: "540", correct: true },
            { letter: "d", text: "243" },
          ]}
          resolution={
            <>
              <M block={true}>{"T_{k+1} = C_6^k x^{6-k} \\frac{3^k}{x^{2k}} = C_6^k 3^k x^{6-3k}"}</M>
              <M block={true}>{"6-3k=0 \\Rightarrow k=2 \\Rightarrow T_3 = C_6^2 \\cdot 3^2 = 15\\times9 = 135"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Soma de coeficientes"
          statement={
            <p>
              Qual é a soma de todos os coeficientes da expansão de <M>{"(3x-1)^{10}"}</M>?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"2^{10} = 1024"}</M> },
            { letter: "b", text: <M>{"2^{10}"}</M> },
            { letter: "c", text: <M>{"(3-1)^{10} = 2^{10} = 1024"}</M>, correct: true },
            { letter: "d", text: <M>{"3^{10}"}</M> },
          ]}
          resolution={
            <>
              <p>Substituindo x = 1: <M>{"(3-1)^{10} = 2^{10} = 1024"}</M></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Probabilidade binomial"
          statement={
            <p>
              Uma moeda honesta é lançada 6 vezes. Qual é a probabilidade de
              obter exatamente 4 caras?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{15}{64}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{1}{4}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{6}{64}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{5}{16}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"P(X=4) = C_6^4 \\left(\\frac{1}{2}\\right)^6 = 15 \\times \\frac{1}{64} = \\frac{15}{64}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
