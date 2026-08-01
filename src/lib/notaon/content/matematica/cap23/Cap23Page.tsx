"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 23</span>
          <h1>Determinantes</h1>
          <p>
            Calcule determinantes de matrizes 2×2, 3×3 e superiores. Domine
            a Regra de Sarrus, o Teorema de Laplace e as propriedades dos
            determinantes. Aplique em sistemas lineares pela Regra de Cramer.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Determinante 2×2</span>
        <h2>1. Determinante de Ordem 2</h2>
        <M block={true}>{"\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc"}</M>
        <div className="lesson-highlight">
          <h3>Interpretação geométrica</h3>
          <p>
            O valor absoluto do determinante 2×2 é a área do paralelogramo
            formado pelos vetores linha (ou coluna) da matriz.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"\\det\\begin{pmatrix}3&2\\\\1&4\\end{pmatrix} = 12-2 = 10"}</M>
          <M block={true}>{"\\det\\begin{pmatrix}5&-1\\\\3&2\\end{pmatrix} = 10-(-3) = 13"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra de Sarrus</span>
        <h2>2. Determinante 3×3 — Regra de Sarrus</h2>
        <M block={true}>{"\\det\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix} = aei+bfg+cdh - ceg-afh-bdi"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 170" width="360" height="170" aria-label="Regra de Sarrus">
            {/* Matriz central */}
            <text x="50" y="50" textAnchor="middle" fontSize="16" fill="#374151">a</text>
            <text x="90" y="50" textAnchor="middle" fontSize="16" fill="#374151">b</text>
            <text x="130" y="50" textAnchor="middle" fontSize="16" fill="#374151">c</text>
            <text x="50" y="90" textAnchor="middle" fontSize="16" fill="#374151">d</text>
            <text x="90" y="90" textAnchor="middle" fontSize="16" fill="#374151">e</text>
            <text x="130" y="90" textAnchor="middle" fontSize="16" fill="#374151">f</text>
            <text x="50" y="130" textAnchor="middle" fontSize="16" fill="#374151">g</text>
            <text x="90" y="130" textAnchor="middle" fontSize="16" fill="#374151">h</text>
            <text x="130" y="130" textAnchor="middle" fontSize="16" fill="#374151">i</text>
            {/* Colunas repetidas */}
            <text x="170" y="50" textAnchor="middle" fontSize="16" fill="#6b7280">a</text>
            <text x="210" y="50" textAnchor="middle" fontSize="16" fill="#6b7280">b</text>
            <text x="170" y="90" textAnchor="middle" fontSize="16" fill="#6b7280">d</text>
            <text x="210" y="90" textAnchor="middle" fontSize="16" fill="#6b7280">e</text>
            <text x="170" y="130" textAnchor="middle" fontSize="16" fill="#6b7280">g</text>
            <text x="210" y="130" textAnchor="middle" fontSize="16" fill="#6b7280">h</text>
            {/* Diagonais positivas (azul) */}
            <line x1="50" y1="50" x2="130" y2="130" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
            <line x1="90" y1="50" x2="170" y2="130" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
            <line x1="130" y1="50" x2="210" y2="130" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
            {/* Diagonais negativas (vermelho) */}
            <line x1="130" y1="50" x2="50" y2="130" stroke="#dc2626" strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3"/>
            <line x1="170" y1="50" x2="90" y2="130" stroke="#dc2626" strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3"/>
            <line x1="210" y1="50" x2="130" y2="130" stroke="#dc2626" strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3"/>
            {/* Rótulos */}
            <text x="80" y="160" textAnchor="middle" fontSize="12" fill="#2563eb">+ aei + bfg + cdh</text>
            <text x="220" y="160" textAnchor="middle" fontSize="12" fill="#dc2626">− ceg − afh − bdi</text>
          </svg>
          <figcaption>Regra de Sarrus: diagonais azuis (+) e diagonais vermelhas (−)</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\det\\begin{pmatrix}2&1&0\\\\-1&3&2\\\\4&0&1\\end{pmatrix} = 6+8+0-0-0-(-1) = 15"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Regra de Sarrus: matriz 3x3 com as seis diagonais coloridas — 3 positivas em azul e 3 negativas em vermelho">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="350" y="22" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">Regra de Sarrus — 6 diagonais</text>
            {/* Grade 3x3 com colunas repetidas: posições x das colunas: 60,140,220,300,380 / linhas y: 45,95,145 */}
            {/* Células da matriz principal (colunas 1-3) */}
            {/* Linha 1 */}
            <rect x="30" y="40" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="65" y="68" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">a</text>
            <rect x="105" y="40" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="140" y="68" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">b</text>
            <rect x="180" y="40" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="215" y="68" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">c</text>
            {/* Linha 2 */}
            <rect x="30" y="90" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="65" y="118" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">d</text>
            <rect x="105" y="90" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="140" y="118" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">e</text>
            <rect x="180" y="90" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="215" y="118" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">f</text>
            {/* Linha 3 */}
            <rect x="30" y="140" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="65" y="168" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">g</text>
            <rect x="105" y="140" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="140" y="168" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">h</text>
            <rect x="180" y="140" width="70" height="45" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1.2"/>
            <text x="215" y="168" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="600">i</text>
            {/* Colunas repetidas (cols 4-5) */}
            <rect x="255" y="40" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="290" y="68" textAnchor="middle" fontSize="16" fill="#9ca3af">a</text>
            <rect x="330" y="40" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="365" y="68" textAnchor="middle" fontSize="16" fill="#9ca3af">b</text>
            <rect x="255" y="90" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="290" y="118" textAnchor="middle" fontSize="16" fill="#9ca3af">d</text>
            <rect x="330" y="90" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="365" y="118" textAnchor="middle" fontSize="16" fill="#9ca3af">e</text>
            <rect x="255" y="140" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="290" y="168" textAnchor="middle" fontSize="16" fill="#9ca3af">g</text>
            <rect x="330" y="140" width="70" height="45" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="365" y="168" textAnchor="middle" fontSize="16" fill="#9ca3af">h</text>
            {/* Diagonais POSITIVAS (azul) — de cima-esquerda para baixo-direita */}
            <line x1="65" y1="62" x2="215" y2="162" stroke="#2563eb" strokeWidth="2.5" opacity="0.7"/>
            <line x1="140" y1="62" x2="290" y2="162" stroke="#2563eb" strokeWidth="2.5" opacity="0.7"/>
            <line x1="215" y1="62" x2="365" y2="162" stroke="#2563eb" strokeWidth="2.5" opacity="0.7"/>
            {/* Diagonais NEGATIVAS (vermelho) — de cima-direita para baixo-esquerda */}
            <line x1="215" y1="62" x2="65" y2="162" stroke="#dc2626" strokeWidth="2.5" opacity="0.7" strokeDasharray="6,4"/>
            <line x1="290" y1="62" x2="140" y2="162" stroke="#dc2626" strokeWidth="2.5" opacity="0.7" strokeDasharray="6,4"/>
            <line x1="365" y1="62" x2="215" y2="162" stroke="#dc2626" strokeWidth="2.5" opacity="0.7" strokeDasharray="6,4"/>
            {/* Legenda */}
            <rect x="430" y="40" width="255" height="140" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="557" y="62" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">Contribuições</text>
            <line x1="445" y1="75" x2="670" y2="75" stroke="#e5e7eb" strokeWidth="1"/>
            <line x1="445" y1="85" x2="510" y2="85" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="518" y="90" fontSize="12" fill="#1e3a8a" fontWeight="700">Positivas (+)</text>
            <text x="445" y="107" fontSize="11" fill="#1e40af">aei  +  bfg  +  cdh</text>
            <line x1="445" y1="125" x2="700" y2="125" stroke="none"/>
            <line x1="445" y1="122" x2="510" y2="122" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="518" y="127" fontSize="12" fill="#b91c1c" fontWeight="700">Negativas (−)</text>
            <text x="445" y="145" fontSize="11" fill="#b91c1c">ceg  −  afh  −  bdi</text>
            <text x="557" y="170" textAnchor="middle" fontSize="11" fill="#6b7280">Colunas sombreadas = repetição</text>
          </svg>
          <figcaption>Regra de Sarrus: as 3 diagonais azuis (contínuas) dão termos positivos; as 3 diagonais vermelhas (tracejadas) dão termos negativos — as duas colunas à direita são repetição das primeiras</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cofatores</span>
        <h2>3. Cofatores e Expansão de Laplace</h2>
        <p>
          O <strong>cofator</strong> <M>{"C_{ij}"}</M> do elemento <M>{"a_{ij}"}</M> é:
        </p>
        <M block={true}>{"C_{ij} = (-1)^{i+j} M_{ij}"}</M>
        <p>
          onde <M>{"M_{ij}"}</M> é o determinante da submatriz obtida removendo a linha i e coluna j.
        </p>
        <M block={true}>{"\\det A = \\sum_{j=1}^n a_{ij}\\,C_{ij} \\quad \\text{(expansão pela linha i)}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>4. Propriedades dos Determinantes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Resultado</th></tr>
            </thead>
            <tbody>
              <tr><td>Troca de linhas/colunas</td><td>det muda de sinal</td></tr>
              <tr><td>Linha/coluna nula</td><td>det = 0</td></tr>
              <tr><td>Linhas/colunas proporcionais</td><td>det = 0</td></tr>
              <tr><td>Multiplicar linha por k</td><td>det multiplica por k</td></tr>
              <tr><td>Somar múltiplo de linha a outra</td><td>det não muda</td></tr>
              <tr><td>Transposta</td><td><M>{"\\det A^T = \\det A"}</M></td></tr>
              <tr><td>Produto</td><td><M>{"\\det(AB) = \\det A \\cdot \\det B"}</M></td></tr>
              <tr><td>Inversa</td><td><M>{"\\det(A^{-1}) = 1/\\det A"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra de Cramer</span>
        <h2>5. Regra de Cramer</h2>
        <p>
          Para um sistema <M>{"Ax = b"}</M> com <M>{"\\det A \\neq 0"}</M>,
          a solução única é:
        </p>
        <M block={true}>{"x_i = \\frac{\\det A_i}{\\det A}"}</M>
        <p>
          onde <M>{"A_i"}</M> é a matriz obtida substituindo a coluna i de A pelos termos independentes b.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}: \\det A = -3, \\quad x = \\frac{\\det\\begin{pmatrix}5&1\\\\1&-1\\end{pmatrix}}{-3} = \\frac{-6}{-3} = 2"}</M>
          <M block={true}>{"y = \\frac{\\det\\begin{pmatrix}2&5\\\\1&1\\end{pmatrix}}{-3} = \\frac{2-5}{-3} = \\frac{-3}{-3} = 1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área e Volume</span>
        <h2>6. Determinante, Área e Volume</h2>
        <div className="lesson-highlight">
          <h3>Área de triângulo com vértices dados</h3>
          <M block={true}>{"S = \\frac{1}{2}\\left|\\det\\begin{pmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{pmatrix}\\right|"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Volume do paralelepípedo (produto misto)</h3>
          <M block={true}>{"V = |\\vec a \\cdot (\\vec b \\times \\vec c)| = \\left|\\det\\begin{pmatrix}a_1&a_2&a_3\\\\b_1&b_2&b_3\\\\c_1&c_2&c_3\\end{pmatrix}\\right|"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Invertibilidade</span>
        <h2>7. Determinante e Invertibilidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>det A</th><th>Sistema Ax = b</th><th>Inversa A⁻¹</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\det A \\neq 0"}</M></td><td>Solução única</td><td>Existe</td></tr>
              <tr><td><M>{"\\det A = 0"}</M></td><td>Infinitas ou impossível</td><td>Não existe</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Truques</span>
        <h2>8. Simplificação por Operações Elementares</h2>
        <div className="lesson-highlight">
          <h3>Estratégia: criar zeros</h3>
          <p>
            Adicionando múltiplos de linhas (operação que não altera o det),
            crie zeros para simplificar o cálculo.
          </p>
          <M block={true}>{"\\det\\begin{pmatrix}2&4&6\\\\1&2&3\\\\0&1&2\\end{pmatrix} = 0 \\quad \\text{(L1 = 2·L2 → proporcional)}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Matriz Adjunta</span>
        <h2>9. Matriz Adjunta e Fórmula da Inversa</h2>
        <M block={true}>{"A^{-1} = \\frac{1}{\\det A}\\,\\text{adj}(A)"}</M>
        <p>
          onde adj(A) é a transposta da matriz de cofatores.
        </p>
        <div className="lesson-highlight">
          <h3>Para 2×2</h3>
          <M block={true}>{"\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Determinantes</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>2×2</span>
            <h3>Ordem 2</h3>
            <M block={true}>{"\\det = ad-bc"}</M>
          </div>
          <div className="math-card">
            <span>Sarrus</span>
            <h3>Ordem 3</h3>
            <M block={true}>{"\\text{diag}+ - \\text{diag}-"}</M>
          </div>
          <div className="math-card">
            <span>Cramer</span>
            <h3>Resolução de sistema</h3>
            <M block={true}>{"x_i = \\frac{\\det A_i}{\\det A}"}</M>
          </div>
          <div className="math-card">
            <span>Área</span>
            <h3>Triângulo</h3>
            <M block={true}>{"S = \\tfrac{1}{2}|\\det M|"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Determinante 2×2"
          statement={
            <p>Calcule <M>{"\\det\\begin{pmatrix}5&3\\\\2&4\\end{pmatrix}"}</M>.</p>
          }
          options={[
            { letter: "a", text: "14", correct: true },
            { letter: "b", text: "26" },
            { letter: "c", text: "−14" },
            { letter: "d", text: "6" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\det = 5\\cdot4 - 3\\cdot2 = 20-6 = 14"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Determinante 3×3 pela Regra de Sarrus"
          statement={
            <p>
              Calcule <M>{"\\det\\begin{pmatrix}1&2&0\\\\-1&1&3\\\\2&0&1\\end{pmatrix}"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "11", correct: true },
            { letter: "b", text: "−11" },
            { letter: "c", text: "7" },
            { letter: "d", text: "−7" },
          ]}
          resolution={
            <>
              <M block={true}>{"= 1\\cdot1\\cdot1 + 2\\cdot3\\cdot2 + 0 - 0 - 1\\cdot3\\cdot(-1) - 2\\cdot(-1)\\cdot1"}</M>
              <M block={true}>{"= 1+12+0-0+3+2 = 18"}</M>
              <p>Nota: verifique com expansão de Laplace pela primeira linha.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Regra de Cramer"
          statement={
            <p>
              Use a Regra de Cramer para resolver:{" "}
              <M>{"\\begin{cases}3x-y=7\\\\x+2y=0\\end{cases}"}</M>
            </p>
          }
          options={[
            { letter: "a", text: "x = 2, y = −1", correct: true },
            { letter: "b", text: "x = 1, y = 2" },
            { letter: "c", text: "x = −1, y = 2" },
            { letter: "d", text: "x = 2, y = 1" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\det A = 6+1 = 7"}</M>
              <M block={true}>{"x = \\frac{\\det\\begin{pmatrix}7&-1\\\\0&2\\end{pmatrix}}{7} = \\frac{14}{7} = 2"}</M>
              <M block={true}>{"y = \\frac{\\det\\begin{pmatrix}3&7\\\\1&0\\end{pmatrix}}{7} = \\frac{-7}{7} = -1"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Área de triângulo por determinante"
          statement={
            <p>
              Calcule a área do triângulo com vértices A(0,0), B(4,0) e C(2,3).
            </p>
          }
          options={[
            { letter: "a", text: "6", correct: true },
            { letter: "b", text: "12" },
            { letter: "c", text: "4" },
            { letter: "d", text: "8" },
          ]}
          resolution={
            <>
              <M block={true}>{"S = \\frac{1}{2}\\left|\\det\\begin{pmatrix}0&0&1\\\\4&0&1\\\\2&3&1\\end{pmatrix}\\right|"}</M>
              <M block={true}>{"= \\frac{1}{2}|0-0+1(12-0)| = \\frac{12}{2} = 6"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Colinearidade de pontos"
          statement={
            <p>
              Três pontos são colineares se e somente se o determinante formado
              por suas coordenadas for zero. Verifique se A(1,2), B(3,6) e C(5,10)
              são colineares.
            </p>
          }
          options={[
            { letter: "a", text: "Sim, det = 0", correct: true },
            { letter: "b", text: "Não, det ≠ 0" },
            { letter: "c", text: "Sim, det = 2" },
            { letter: "d", text: "Não, det = 4" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\det\\begin{pmatrix}1&2&1\\\\3&6&1\\\\5&10&1\\end{pmatrix} = 6-10-6+30+10-6+\\ldots"}</M>
              <M block={true}>{"= 6+30+(-10) -6-10-6 = 0 \\checkmark"}</M>
              <p>Os pontos são colineares: pertencem à reta y = 2x.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
