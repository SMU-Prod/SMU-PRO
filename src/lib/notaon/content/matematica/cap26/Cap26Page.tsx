"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 26</span>
          <h1>Permutações, Arranjos e Combinações</h1>
          <p>
            Domine os três instrumentos fundamentais da Análise Combinatória:
            permutações simples e com repetição, arranjos e combinações.
            Resolva problemas de seleção e ordenação com eficiência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Permutações</span>
        <h2>1. Permutações Simples</h2>
        <p>
          Número de formas de ordenar n elementos distintos:
        </p>
        <M block={true}>{"P_n = n!"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Anagramas de "ROSA": <M>{"P_4 = 4! = 24"}</M></p>
          <p>Anagramas de "AMOR": <M>{"P_4 = 4! = 24"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualização das 6 Permutações</span>
        <h2>2. As 6 Permutações de {"{A, B, C}"}</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Seis permutações dos objetos A, B e C representadas com círculos e setas">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Conjunto original no centro-esquerdo */}
            <text x="60" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a8a">Conjunto</text>
            <circle cx="30" cy="55" r="18" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
            <text x="30" y="60" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">A</text>
            <circle cx="60" cy="55" r="18" fill="#7c3aed" stroke="#4c1d95" strokeWidth="2"/>
            <text x="60" y="60" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">B</text>
            <circle cx="90" cy="55" r="18" fill="#16a34a" stroke="#14532d" strokeWidth="2"/>
            <text x="90" y="60" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">C</text>
            <text x="60" y="90" textAnchor="middle" fontSize="11" fill="#1e40af">P₃ = 3! = 6</text>
            {/* seta para as permutações */}
            <polygon points="125,55 140,51 140,59" fill="#64748b"/>
            <line x1="108" y1="55" x2="140" y2="55" stroke="#64748b" strokeWidth="1.5"/>
            {/* 6 permutações em 2 colunas × 3 linhas */}
            {[
              ["A","B","C"], ["A","C","B"],
              ["B","A","C"], ["B","C","A"],
              ["C","A","B"], ["C","B","A"],
            ].map((perm, idx) => {
              const col = idx % 2;
              const row = Math.floor(idx / 2);
              const baseX = 165 + col * 270;
              const baseY = 38 + row * 62;
              const colors: Record<string, string> = { A: "#3b82f6", B: "#7c3aed", C: "#16a34a" };
              return (
                <g key={idx}>
                  {/* caixa de fundo */}
                  <rect x={baseX - 5} y={baseY - 18} width="210" height="36" rx="6"
                    fill="white" stroke="#93c5fd" strokeWidth="1"/>
                  <text x={baseX + 5} y={baseY} fontSize="10" fill="#64748b">#{idx + 1}</text>
                  {perm.map((letter, li) => {
                    const cx = baseX + 40 + li * 52;
                    return (
                      <g key={li}>
                        {li > 0 && (
                          <text x={cx - 26} y={baseY} fontSize="12" fill="#94a3b8" textAnchor="middle">→</text>
                        )}
                        <circle cx={cx} cy={baseY - 3} r="14" fill={colors[letter]} stroke="white" strokeWidth="1.5"/>
                        <text x={cx} y={baseY + 2} textAnchor="middle" fontSize="13" fontWeight="700" fill="white">{letter}</text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
            <text x="350" y="212" textAnchor="middle" fontSize="11" fill="#1e3a8a" fontWeight="600">
              3 objetos distintos geram P₃ = 3! = 6 ordenações diferentes
            </text>
          </svg>
          <figcaption>As 6 permutações do conjunto {"{A, B, C}"}: cada ordenação diferente representa uma permutação simples.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Permutação com Repetição</span>
        <h2>3. Permutações com Elementos Repetidos</h2>
        <M block={true}>{"P_n^{(a,b,c,\\ldots)} = \\frac{n!}{a! \\cdot b! \\cdot c! \\cdots}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo — anagramas de "BANANA"</h3>
          <M block={true}>{"P_6^{(3,2,1)} = \\frac{6!}{3! \\cdot 2! \\cdot 1!} = \\frac{720}{6 \\times 2 \\times 1} = 60"}</M>
          <p>(3 A's, 2 N's, 1 B)</p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo — "MATEMÁTICA"</h3>
          <M block={true}>{"\\frac{9!}{3! \\cdot 2! \\cdot 1! \\cdot 1! \\cdot 1! \\cdot 1!} = \\frac{362880}{12} = 30240"}</M>
          <p>(M-2, A-3, T-2, E-1, I-1, C-1)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arranjos</span>
        <h2>4. Arranjos Simples</h2>
        <p>
          Número de formas de escolher e ordenar p elementos de um conjunto de n:
        </p>
        <M block={true}>{"A_n^p = \\frac{n!}{(n-p)!} = n(n-1)(n-2)\\cdots(n-p+1)"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>n</th><th>p</th><th><M>{"A_n^p"}</M></th></tr>
            </thead>
            <tbody>
              <tr><td>5</td><td>2</td><td>20</td></tr>
              <tr><td>6</td><td>3</td><td>120</td></tr>
              <tr><td>10</td><td>3</td><td>720</td></tr>
              <tr><td>n</td><td>1</td><td>n</td></tr>
              <tr><td>n</td><td>n</td><td>n!</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo — pódio de 3 em 8 atletas</h3>
          <M block={true}>{"A_8^3 = 8 \\times 7 \\times 6 = 336"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Combinações</span>
        <h2>5. Combinações Simples</h2>
        <p>
          Número de formas de escolher p elementos de n, sem importar a ordem:
        </p>
        <M block={true}>{"C_n^p = \\binom{n}{p} = \\frac{n!}{p!(n-p)!}"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th><M>{"C_n^p"}</M></th><th>p = 0</th><th>p = 1</th><th>p = 2</th><th>p = 3</th></tr>
            </thead>
            <tbody>
              <tr><td>n = 3</td><td>1</td><td>3</td><td>3</td><td>1</td></tr>
              <tr><td>n = 4</td><td>1</td><td>4</td><td>6</td><td>4</td></tr>
              <tr><td>n = 5</td><td>1</td><td>5</td><td>10</td><td>10</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo — comissão de 3 pessoas em grupo de 10</h3>
          <M block={true}>{"C_{10}^3 = \\frac{10!}{3!7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>6. Quadro Comparativo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Ordem importa?</th><th>Repetição?</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Permutação simples</td><td>Sim</td><td>Não</td><td><M>{"n!"}</M></td></tr>
              <tr><td>Permutação com rep.</td><td>Sim</td><td>Sim</td><td><M>{"\\frac{n!}{a!b!\\cdots}"}</M></td></tr>
              <tr><td>Arranjo simples</td><td>Sim</td><td>Não</td><td><M>{"\\frac{n!}{(n-p)!}"}</M></td></tr>
              <tr><td>Combinação simples</td><td>Não</td><td>Não</td><td><M>{"\\frac{n!}{p!(n-p)!}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades de C(n,p)</span>
        <h2>7. Propriedades das Combinações</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Complementar</td><td><M>{"C_n^p = C_n^{n-p}"}</M></td></tr>
              <tr><td>Casos extremos</td><td><M>{"C_n^0 = C_n^n = 1"}</M></td></tr>
              <tr><td>Relação de Pascal</td><td><M>{"C_n^p = C_{n-1}^{p-1} + C_{n-1}^p"}</M></td></tr>
              <tr><td>Somatório</td><td><M>{"\\sum_{p=0}^n C_n^p = 2^n"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulo de Pascal</span>
        <h2>8. Triângulo de Pascal</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 320 160" width="320" height="160" aria-label="Triângulo de Pascal">
            {[
              [1],
              [1,1],
              [1,2,1],
              [1,3,3,1],
              [1,4,6,4,1],
              [1,5,10,10,5,1],
            ].map((row, i) => (
              row.map((val, j) => {
                const x = 160 + (j - (row.length-1)/2) * 45;
                const y = 20 + i * 24;
                return (
                  <g key={`${i}-${j}`}>
                    <circle cx={x} cy={y} r="14" fill={i === 0 ? "#2563eb" : i < 3 ? "#3b82f6" : "#93c5fd"}/>
                    <text x={x} y={y+4} textAnchor="middle" fontSize={val > 9 ? "9" : "11"} fill="white" fontWeight="700">{val}</text>
                  </g>
                );
              })
            ))}
            <text x="160" y="155" textAnchor="middle" fontSize="11" fill="#374151">Linha n contém C(n,0), C(n,1), …, C(n,n)</text>
          </svg>
          <figcaption>Triângulo de Pascal: cada número é a soma dos dois acima</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Aplicações em Problemas de Seleção</h2>
        <div className="lesson-highlight">
          <h3>Grupo com condição</h3>
          <p>
            Uma equipe de 4 pessoas é formada de um grupo de 6 homens e 4 mulheres.
            Quantas equipes com pelo menos 2 mulheres são possíveis?
          </p>
          <M block={true}>{"\\text{2M e 2H: }C_4^2 \\times C_6^2 = 6 \\times 15 = 90"}</M>
          <M block={true}>{"\\text{3M e 1H: }C_4^3 \\times C_6^1 = 4 \\times 6 = 24"}</M>
          <M block={true}>{"\\text{4M e 0H: }C_4^4 \\times C_6^0 = 1 \\quad \\text{Total: }115"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Caminhos e Redes</span>
        <h2>10. Contagem de Caminhos em Grade</h2>
        <p>
          Para ir do ponto A(0,0) ao ponto B(m,n) em uma grade, sempre
          se movendo para direita ou para cima, o número de caminhos é:
        </p>
        <M block={true}>{"N = C_{m+n}^m = C_{m+n}^n = \\frac{(m+n)!}{m!\\,n!}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>De (0,0) a (3,2):</p>
          <M block={true}>{"N = C_5^3 = \\frac{5!}{3!2!} = 10"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Quando Usar Cada Fórmula</h2>
        <div className="lesson-highlight">
          <p>
            <strong>Permutação:</strong> Ordenar <em>todos</em> os elementos (anagramas, filas, podiums).<br/>
            <strong>Arranjo:</strong> Escolher e ordenar p de n (senhas, classificações).<br/>
            <strong>Combinação:</strong> Escolher p de n sem se preocupar com ordem (grupos, comitês, mãos de cartas).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Anagramas"
          statement={
            <p>Quantos anagramas tem a palavra "PROVA"?</p>
          }
          options={[
            { letter: "a", text: "24" },
            { letter: "b", text: "120", correct: true },
            { letter: "c", text: "60" },
            { letter: "d", text: "720" },
          ]}
          resolution={
            <>
              <M block={true}>{"P_5 = 5! = 120"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Combinação"
          statement={
            <p>
              Uma banca examinadora de 5 pessoas será formada de um grupo de 9.
              De quantas maneiras é possível?
            </p>
          }
          options={[
            { letter: "a", text: "126", correct: true },
            { letter: "b", text: "362880" },
            { letter: "c", text: "15120" },
            { letter: "d", text: "252" },
          ]}
          resolution={
            <>
              <M block={true}>{"C_9^5 = \\frac{9!}{5!4!} = \\frac{9\\times8\\times7\\times6}{4\\times3\\times2\\times1} = 126"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Permutação com repetição"
          statement={
            <p>Quantos anagramas tem a palavra "ESTATÍSTICA"?</p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{11!}{3!\\cdot2!\\cdot3!}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{11!}{3!\\cdot2!}"}</M> },
            { letter: "c", text: <M>{"11!"}</M> },
            { letter: "d", text: <M>{"\\dfrac{11!}{5!}"}</M> },
          ]}
          resolution={
            <>
              <p>E-3, T-3, A-2, S-1, Í-1, C-1 → 11 letras com repetições:</p>
              <M block={true}>{"P_{11}^{(3,3,2,1,1,1)} = \\frac{11!}{3!\\cdot3!\\cdot2!}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Mão de cartas"
          statement={
            <p>
              Em um baralho de 52 cartas, quantas mãos distintas de 5 cartas
              são possíveis?
            </p>
          }
          options={[
            { letter: "a", text: "2.598.960", correct: true },
            { letter: "b", text: "311.875.200" },
            { letter: "c", text: "52.000" },
            { letter: "d", text: "100.000" },
          ]}
          resolution={
            <>
              <M block={true}>{"C_{52}^5 = \\frac{52!}{5!\\,47!} = \\frac{52\\times51\\times50\\times49\\times48}{120} = 2{.}598{.}960"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Caminhos na cidade"
          statement={
            <p>
              Um entregador precisa ir do ponto A ao ponto B em uma grade de
              4 quadras para leste e 3 quadras para norte, sempre avançando
              na direção correta. Quantos caminhos distintos existem?
            </p>
          }
          options={[
            { letter: "a", text: "35", correct: true },
            { letter: "b", text: "12" },
            { letter: "c", text: "24" },
            { letter: "d", text: "70" },
          ]}
          resolution={
            <>
              <M block={true}>{"N = C_{4+3}^4 = C_7^4 = \\frac{7!}{4!3!} = 35"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
