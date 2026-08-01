"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 25</span>
          <h1>Análise Combinatória: Princípio Fundamental da Contagem</h1>
          <p>
            Aprenda a contar possibilidades usando o Princípio Fundamental da Contagem
            (PFC), fatoriais e suas propriedades. Resolva problemas de contagem
            sistemática presentes em vestibulares e concursos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">PFC</span>
        <h2>1. Princípio Fundamental da Contagem</h2>
        <p>
          Se uma tarefa pode ser realizada em <M>{"n_1"}</M> maneiras e, em seguida,
          em <M>{"n_2"}</M> maneiras, …, e em <M>{"n_k"}</M> maneiras, o número total
          de formas de realizar todas as tarefas é:
        </p>
        <M block={true}>{"N = n_1 \\times n_2 \\times \\cdots \\times n_k"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo simples</h3>
          <p>
            Um restaurante oferece 3 opções de entrada, 5 pratos principais e
            4 sobremesas. Quantas refeições distintas são possíveis?
          </p>
          <M block={true}>{"N = 3 \\times 5 \\times 4 = 60 \\text{ refeições}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Árvore de Possibilidades</span>
        <h2>2. Diagrama de Árvore — 2 Camisas × 3 Calças</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Diagrama de árvore: 2 camisas e 3 calças formam 6 combinações">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Nó raiz */}
            <circle cx="80" cy="110" r="28" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
            <text x="80" y="107" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Roupa</text>
            <text x="80" y="121" textAnchor="middle" fontSize="10" fill="white">2×3=6</text>
            {/* Nós Camisa 1 e Camisa 2 — nível 1 */}
            {[
              { label: "Camisa 1", cy: 65, color: "#2563eb" },
              { label: "Camisa 2", cy: 155, color: "#7c3aed" },
            ].map(({ label, cy, color }, ci) => (
              <g key={ci}>
                {/* linha raiz→camisa */}
                <line x1="108" y1="110" x2="242" y2={cy} stroke="#64748b" strokeWidth="1.5"/>
                <circle cx="265" cy={cy} r="22" fill={color} stroke="white" strokeWidth="2"/>
                <text x="265" y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="white">{label}</text>
                {/* 3 calças para cada camisa */}
                {["Calça A", "Calça B", "Calça C"].map((calca, ki) => {
                  const leafY = cy - 44 + ki * 44;
                  const leafX = 480;
                  const combX = 630;
                  return (
                    <g key={ki}>
                      <line x1="287" y1={cy} x2={leafX - 22} y2={leafY} stroke="#94a3b8" strokeWidth="1.2"/>
                      <circle cx={leafX} cy={leafY} r="20" fill="#16a34a" stroke="white" strokeWidth="1.5"/>
                      <text x={leafX} y={leafY + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="white">{calca}</text>
                      {/* resultado */}
                      <line x1={leafX + 20} y1={leafY} x2={combX - 20} y2={leafY} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2"/>
                      <rect x={combX - 18} y={leafY - 12} width="55" height="24" rx="5" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                      <text x={combX + 9} y={leafY + 4} textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="700">C{ci + 1}+{calca.slice(-1)}</text>
                    </g>
                  );
                })}
              </g>
            ))}
            {/* legenda */}
            <text x="350" y="212" textAnchor="middle" fontSize="11" fill="#1e3a8a" fontWeight="600">2 camisas × 3 calças = 6 combinações (PFC)</text>
          </svg>
          <figcaption>Diagrama de árvore: cada camisa se ramifica em 3 calças, totalizando 2 × 3 = 6 combinações distintas.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">PFC com Restrições</span>
        <h2>3. PFC com Restrições</h2>
        <div className="lesson-highlight">
          <h3>Placas de veículos</h3>
          <p>
            Uma placa tem 3 letras (26 opções cada) e 4 algarismos (10 opções cada).
          </p>
          <M block={true}>{"N = 26^3 \\times 10^4 = 17576 \\times 10000 = 175.760.000"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Com restrição de repetição</h3>
          <p>Senha de 4 dígitos diferentes:</p>
          <M block={true}>{"N = 10 \\times 9 \\times 8 \\times 7 = 5040"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fatorial</span>
        <h2>4. Fatorial — Definição e Propriedades</h2>
        <M block={true}>{"n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1 \\qquad 0! = 1"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>n</th><th>n!</th></tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>1</td></tr>
              <tr><td>1</td><td>1</td></tr>
              <tr><td>2</td><td>2</td></tr>
              <tr><td>3</td><td>6</td></tr>
              <tr><td>4</td><td>24</td></tr>
              <tr><td>5</td><td>120</td></tr>
              <tr><td>6</td><td>720</td></tr>
              <tr><td>10</td><td>3.628.800</td></tr>
            </tbody>
          </table>
        </div>
        <M block={true}>{"n! = n \\times (n-1)! \\qquad \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação do PFC</span>
        <h2>5. Aplicação do PFC em Problemas Variados</h2>
        <div className="lesson-highlight">
          <h3>Números de m algarismos</h3>
          <p>Quantos números de 3 algarismos distintos existem?</p>
          <M block={true}>{"\\text{1º dígito (sem 0)}: 9 \\times \\text{2º}: 9 \\times \\text{3º}: 8 = 648"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Anagramas</h3>
          <p>Anagramas da palavra "AMOR" (4 letras distintas):</p>
          <M block={true}>{"N = 4! = 24"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Eventos Disjuntos</span>
        <h2>6. Princípio Aditivo — Eventos Disjuntos</h2>
        <p>
          Se uma tarefa pode ser realizada de A maneiras <strong>ou</strong> de B maneiras
          (exclusivamente), o total é A + B.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Quantos números de 2 ou 3 algarismos existem formados pelos dígitos
            1, 2, 3 sem repetição?
          </p>
          <M block={true}>{"\\text{2 algarismos: } 3 \\times 2 = 6 \\quad \\text{3 algarismos: } 3! = 6 \\quad \\text{Total: } 12"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contagem com Restrições Específicas</span>
        <h2>7. Contagem com Condições Obrigatórias</h2>
        <div className="lesson-highlight">
          <h3>Elemento fixo</h3>
          <p>
            Senhas de 4 dígitos que começam com 7 e terminam com 5:
          </p>
          <M block={true}>{"N = 1 \\times 10 \\times 10 \\times 1 = 100"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Pelo menos um</h3>
          <p>
            Use complementar: "pelo menos 1" = total − "nenhum".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Complementar</span>
        <h2>8. Contagem por Complementar</h2>
        <M block={true}>{"N(\\text{favorável}) = N(\\text{total}) - N(\\text{contrário})"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Quantos números de 3 dígitos distintos com pelo menos um dígito par?
          </p>
          <M block={true}>{"\\text{Total:} 9\\times9\\times8=648 \\quad \\text{Nenhum par (só 1,3,5,7,9):} 5\\times4\\times3=60"}</M>
          <M block={true}>{"\\text{Resp: } 648-60=588"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Circular</span>
        <h2>9. Contagem Circular</h2>
        <p>
          Em arranjos circulares, fixamos um elemento para eliminar rotações equivalentes:
        </p>
        <M block={true}>{"\\text{Arranjos circulares de n elementos} = (n-1)!"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>6 pessoas sentadas em volta de uma mesa circular:</p>
          <M block={true}>{"N = (6-1)! = 5! = 120"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Árvore</span>
        <h2>10. Diagrama de Árvore — Visualizando o PFC</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 300 200" width="300" height="200" aria-label="Diagrama de árvore">
            {/* Raiz */}
            <circle cx="150" cy="20" r="8" fill="#2563eb"/>
            <text x="150" y="24" textAnchor="middle" fontSize="9" fill="white">Início</text>
            {/* Nível 1 - opção A e B */}
            {['A','B','C'].map((label, i) => {
              const x = 60 + i * 90;
              return (
                <g key={label}>
                  <line x1="150" y1="28" x2={x} y2="80" stroke="#374151" strokeWidth="1.5"/>
                  <circle cx={x} cy="85" r="16" fill="#16a34a"/>
                  <text x={x} y="89" textAnchor="middle" fontSize="11" fill="white">{label}</text>
                  {/* Nível 2 */}
                  {['1','2'].map((n, j) => {
                    const x2 = x - 20 + j * 40;
                    return (
                      <g key={n}>
                        <line x1={x} y1="101" x2={x2} y2="145" stroke="#374151" strokeWidth="1"/>
                        <circle cx={x2} cy="150" r="14" fill="#7c3aed"/>
                        <text x={x2} y="154" textAnchor="middle" fontSize="10" fill="white">{label}{n}</text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
            <text x="150" y="195" textAnchor="middle" fontSize="11" fill="#374151">3 × 2 = 6 ramos</text>
          </svg>
          <figcaption>Diagrama de árvore para 3 opções × 2 opções = 6 resultados</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Contagem</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Tarefas independentes</td><td><M>{"n_1 \\times n_2 \\times \\cdots \\times n_k"}</M></td></tr>
              <tr><td>Tarefas alternativas</td><td><M>{"n_1 + n_2 + \\cdots + n_k"}</M></td></tr>
              <tr><td>n! (fatorial)</td><td><M>{"n(n-1)\\cdots2\\cdot1"}</M></td></tr>
              <tr><td>Circular de n</td><td><M>{"(n-1)!"}</M></td></tr>
              <tr><td>Complementar</td><td><M>{"N_{\\text{total}} - N_{\\text{contrário}}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. PFC simples"
          statement={
            <p>
              Uma loja de camisetas oferece 5 cores e 3 tamanhos.
              Quantas combinações diferentes de camiseta são possíveis?
            </p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "15", correct: true },
            { letter: "c", text: "25" },
            { letter: "d", text: "30" },
          ]}
          resolution={
            <>
              <M block={true}>{"N = 5 \\times 3 = 15"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Senhas sem repetição"
          statement={
            <p>
              Quantas senhas de 4 dígitos distintos são possíveis usando os
              algarismos de 1 a 9?
            </p>
          }
          options={[
            { letter: "a", text: "3024", correct: true },
            { letter: "b", text: "6561" },
            { letter: "c", text: "9999" },
            { letter: "d", text: "720" },
          ]}
          resolution={
            <>
              <M block={true}>{"N = 9 \\times 8 \\times 7 \\times 6 = 3024"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Contagem com restrição"
          statement={
            <p>
              Quantos números de 3 algarismos distintos e pares podem ser formados
              com os algarismos {"{1, 2, 3, 4, 5}"}?
            </p>
          }
          options={[
            { letter: "a", text: "24", correct: true },
            { letter: "b", text: "12" },
            { letter: "c", text: "48" },
            { letter: "d", text: "60" },
          ]}
          resolution={
            <>
              <p>O número é par, então o 3º dígito é 2 ou 4 (2 opções).</p>
              <M block={true}>{"N = 4 \\times 3 \\times 2 = 24"}</M>
              <p>(1º dígito: 4 opções restantes, 2º: 3 opções restantes, 3º: 2 pares)</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Senha de e-mail"
          statement={
            <p>
              Uma senha tem 3 letras (maiúsculas, 26 opções) seguidas de 2 dígitos
              (0–9). Não há restrição de repetição. Quantas senhas são possíveis?
            </p>
          }
          options={[
            { letter: "a", text: "1.757.600", correct: true },
            { letter: "b", text: "175.760" },
            { letter: "c", text: "17.576" },
            { letter: "d", text: "26.000" },
          ]}
          resolution={
            <>
              <M block={true}>{"N = 26^3 \\times 10^2 = 17576 \\times 100 = 1{.}757{.}600"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Mesa redonda"
          statement={
            <p>
              5 pessoas devem sentar em volta de uma mesa circular. De quantas
              maneiras distintas elas podem se sentar?
            </p>
          }
          options={[
            { letter: "a", text: "24", correct: true },
            { letter: "b", text: "120" },
            { letter: "c", text: "60" },
            { letter: "d", text: "12" },
          ]}
          resolution={
            <>
              <M block={true}>{"N = (5-1)! = 4! = 24"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
