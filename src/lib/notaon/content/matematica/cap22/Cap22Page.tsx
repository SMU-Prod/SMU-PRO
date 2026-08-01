"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 22</span>
          <h1>Matrizes</h1>
          <p>
            Estude as matrizes: definição, tipos especiais, operações (soma, produto
            por escalar, multiplicação), transposta, inversa e aplicações em sistemas
            lineares, transformações geométricas e computação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Conceito e Notação de Matriz</h2>
        <p>
          Uma <strong>matriz m×n</strong> é um arranjo retangular de números reais
          em m linhas e n colunas. O elemento da linha i, coluna j é <M>{"a_{ij}"}</M>.
        </p>
        <M block={true}>{"A_{m\\times n} = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Grade visual de uma matriz 3x3 mostrando o índice i,j de cada elemento">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Título */}
            <text x="185" y="28" textAnchor="middle" fontSize="15" fill="#1e40af" fontWeight="700">Matriz A (3×3)</text>
            {/* Grade 3x3 — célula 80x50, início x=50, y=40 */}
            {/* Linha 1 */}
            <rect x="50" y="40" width="90" height="50" rx="4" fill="#facc15" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="95" y="62" textAnchor="middle" fontSize="13" fill="#1e3a8a" fontWeight="700">a₁₁</text>
            <text x="95" y="80" textAnchor="middle" fontSize="11" fill="#1e40af">(i=1, j=1)</text>
            <rect x="150" y="40" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="195" y="62" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₁₂</text>
            <text x="195" y="80" textAnchor="middle" fontSize="11" fill="#6b7280">(i=1, j=2)</text>
            <rect x="250" y="40" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="295" y="62" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₁₃</text>
            <text x="295" y="80" textAnchor="middle" fontSize="11" fill="#6b7280">(i=1, j=3)</text>
            {/* Linha 2 */}
            <rect x="50" y="100" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="95" y="122" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₂₁</text>
            <text x="95" y="140" textAnchor="middle" fontSize="11" fill="#6b7280">(i=2, j=1)</text>
            <rect x="150" y="100" width="90" height="50" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="195" y="122" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₂₂</text>
            <text x="195" y="140" textAnchor="middle" fontSize="11" fill="#1e40af">(diag. princ.)</text>
            <rect x="250" y="100" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="295" y="122" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₂₃</text>
            <text x="295" y="140" textAnchor="middle" fontSize="11" fill="#6b7280">(i=2, j=3)</text>
            {/* Linha 3 */}
            <rect x="50" y="160" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="95" y="182" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₃₁</text>
            <text x="95" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">(i=3, j=1)</text>
            <rect x="150" y="160" width="90" height="50" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="195" y="182" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₃₂</text>
            <text x="195" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">(i=3, j=2)</text>
            <rect x="250" y="160" width="90" height="50" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="295" y="182" textAnchor="middle" fontSize="13" fill="#1e3a8a">a₃₃</text>
            <text x="295" y="200" textAnchor="middle" fontSize="11" fill="#1e40af">(diag. princ.)</text>
            {/* Legenda */}
            <rect x="380" y="50" width="290" height="130" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="525" y="74" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">Legenda</text>
            <rect x="395" y="85" width="20" height="16" rx="3" fill="#facc15"/>
            <text x="425" y="97" fontSize="13" fill="#1e3a8a">a₁₁ — elemento em destaque</text>
            <rect x="395" y="110" width="20" height="16" rx="3" fill="#dbeafe"/>
            <text x="425" y="122" fontSize="13" fill="#1e3a8a">diagonal principal (i = j)</text>
            <rect x="395" y="135" width="20" height="16" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="425" y="147" fontSize="13" fill="#1e3a8a">demais elementos</text>
            <text x="525" y="170" textAnchor="middle" fontSize="12" fill="#6b7280">aᵢⱼ: linha i, coluna j</text>
          </svg>
          <figcaption>Grade de uma matriz 3×3: elemento a₁₁ em destaque amarelo, diagonal principal (a₁₁, a₂₂, a₃₃) em azul claro</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"B_{2\\times3} = \\begin{pmatrix}1&-2&0\\\\4&3&-1\\end{pmatrix} \\Rightarrow b_{12}=-2, \\; b_{23}=-1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos Especiais</span>
        <h2>2. Tipos de Matrizes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Condição</th></tr>
            </thead>
            <tbody>
              <tr><td>Quadrada</td><td>m = n</td></tr>
              <tr><td>Nula</td><td>Todos <M>{"a_{ij}=0"}</M></td></tr>
              <tr><td>Identidade <M>{"I_n"}</M></td><td><M>{"a_{ij}=1"}</M> se i=j; 0 se i≠j</td></tr>
              <tr><td>Diagonal</td><td><M>{"a_{ij}=0"}</M> se i≠j (quadrada)</td></tr>
              <tr><td>Triangular superior</td><td><M>{"a_{ij}=0"}</M> se i&gt;j</td></tr>
              <tr><td>Triangular inferior</td><td><M>{"a_{ij}=0"}</M> se i&lt;j</td></tr>
              <tr><td>Simétrica</td><td><M>{"A=A^T"}</M></td></tr>
              <tr><td>Anti-simétrica</td><td><M>{"A=-A^T"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma</span>
        <h2>3. Adição de Matrizes</h2>
        <M block={true}>{"(A+B)_{ij} = a_{ij}+b_{ij} \\quad \\text{(mesma ordem)}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix} + \\begin{pmatrix}-1&0\\\\2&1\\end{pmatrix} = \\begin{pmatrix}0&2\\\\5&5\\end{pmatrix}"}</M>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade da adição</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Comutativa</td><td><M>{"A+B = B+A"}</M></td></tr>
              <tr><td>Associativa</td><td><M>{"(A+B)+C = A+(B+C)"}</M></td></tr>
              <tr><td>Elemento neutro</td><td><M>{"A+O = A"}</M></td></tr>
              <tr><td>Elemento oposto</td><td><M>{"A+(-A) = O"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalar</span>
        <h2>4. Multiplicação por Escalar</h2>
        <M block={true}>{"(kA)_{ij} = k \\cdot a_{ij}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"(-2)\\begin{pmatrix}3&-1\\\\0&4\\end{pmatrix} = \\begin{pmatrix}-6&2\\\\0&-8\\end{pmatrix}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Produto</span>
        <h2>5. Produto de Matrizes</h2>
        <p>
          <M>{"A_{m\\times p} \\cdot B_{p\\times n}"}</M> é definido quando as dimensões
          internas coincidem. O resultado é <M>{"C_{m\\times n}"}</M>:
        </p>
        <M block={true}>{"c_{ij} = \\sum_{k=1}^{p} a_{ik}\\,b_{kj}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo 2×2</h3>
          <M block={true}>{"\\begin{pmatrix}2&1\\\\-1&3\\end{pmatrix}\\begin{pmatrix}4&0\\\\2&-1\\end{pmatrix} = \\begin{pmatrix}10&-1\\\\2&-3\\end{pmatrix}"}</M>
          <p>Verificação c₁₁: 2·4 + 1·2 = 10 ✓</p>
        </div>

        <div className="lesson-highlight warning">
          <h3>Produto matricial NÃO é comutativo</h3>
          <M>{"AB \\neq BA"}</M> em geral.
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Operação de multiplicação de duas matrizes 2x2 com linha e coluna destacadas">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Título */}
            <text x="350" y="22" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">Multiplicação de Matrizes: C = A × B</text>
            {/* Matriz A (2x2): x=30, y=40, células 65x55 */}
            <text x="95" y="42" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">A</text>
            {/* Destaque da linha 1 de A */}
            <rect x="30" y="50" width="65" height="55" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="62" y="83" textAnchor="middle" fontSize="16" fill="#1e3a8a" fontWeight="700">2</text>
            <rect x="100" y="50" width="65" height="55" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="132" y="83" textAnchor="middle" fontSize="16" fill="#1e3a8a" fontWeight="700">1</text>
            <rect x="30" y="110" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="62" y="143" textAnchor="middle" fontSize="16" fill="#6b7280">-1</text>
            <rect x="100" y="110" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="132" y="143" textAnchor="middle" fontSize="16" fill="#6b7280">3</text>
            {/* Símbolo × */}
            <text x="212" y="100" textAnchor="middle" fontSize="28" fill="#1e40af" fontWeight="700">×</text>
            {/* Matriz B (2x2): x=232, y=40 */}
            <text x="297" y="42" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">B</text>
            {/* Destaque da coluna 1 de B */}
            <rect x="232" y="50" width="65" height="55" rx="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
            <text x="264" y="83" textAnchor="middle" fontSize="16" fill="#1e3a8a" fontWeight="700">4</text>
            <rect x="302" y="50" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="334" y="83" textAnchor="middle" fontSize="16" fill="#6b7280">0</text>
            <rect x="232" y="110" width="65" height="55" rx="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
            <text x="264" y="143" textAnchor="middle" fontSize="16" fill="#1e3a8a" fontWeight="700">2</text>
            <rect x="302" y="110" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="334" y="143" textAnchor="middle" fontSize="16" fill="#6b7280">-1</text>
            {/* Símbolo = */}
            <text x="390" y="100" textAnchor="middle" fontSize="28" fill="#1e40af" fontWeight="700">=</text>
            {/* Matriz C (resultado): x=415, y=40 */}
            <text x="480" y="42" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">C = A×B</text>
            {/* c₁₁ destacado (produto da linha 1 de A pela col 1 de B) */}
            <rect x="415" y="50" width="65" height="55" rx="4" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2.5"/>
            <text x="447" y="76" textAnchor="middle" fontSize="14" fill="#15803d" fontWeight="700">c₁₁</text>
            <text x="447" y="95" textAnchor="middle" fontSize="13" fill="#15803d">= 10</text>
            <rect x="485" y="50" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="517" y="83" textAnchor="middle" fontSize="16" fill="#6b7280">-1</text>
            <rect x="415" y="110" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="447" y="143" textAnchor="middle" fontSize="16" fill="#6b7280">2</text>
            <rect x="485" y="110" width="65" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="517" y="143" textAnchor="middle" fontSize="16" fill="#6b7280">-3</text>
            {/* Cálculo explicativo */}
            <text x="570" y="75" fontSize="12" fill="#1e40af" fontWeight="700">c₁₁ = linha 1(A) · col 1(B)</text>
            <text x="570" y="95" fontSize="12" fill="#1e40af">= 2×4 + 1×2 = 10</text>
            <text x="570" y="120" fontSize="12" fill="#6b7280">Linha (azul) × Coluna (amarelo)</text>
            <text x="570" y="140" fontSize="12" fill="#6b7280">→ resultado (verde)</text>
          </svg>
          <figcaption>Multiplicação de matrizes 2×2: c₁₁ (verde) é calculado pelo produto interno entre a linha 1 de A (azul) e a coluna 1 de B (amarelo)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transposta</span>
        <h2>6. Matriz Transposta</h2>
        <M block={true}>{"(A^T)_{ij} = a_{ji} \\quad \\text{(trocar linhas por colunas)}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"A = \\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}_{2\\times3} \\Rightarrow A^T = \\begin{pmatrix}1&4\\\\2&5\\\\3&6\\end{pmatrix}_{3\\times2}"}</M>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Dupla transposta</td><td><M>{"(A^T)^T = A"}</M></td></tr>
              <tr><td>Transposta da soma</td><td><M>{"(A+B)^T = A^T+B^T"}</M></td></tr>
              <tr><td>Transposta do produto</td><td><M>{"(AB)^T = B^TA^T"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Matriz Inversa</span>
        <h2>7. Matriz Inversa</h2>
        <M block={true}>{"A\\cdot A^{-1} = A^{-1}\\cdot A = I_n"}</M>
        <p>A inversa existe se e somente se <M>{"\\det A \\neq 0"}</M>.</p>
        <div className="lesson-highlight">
          <h3>Inversa de matriz 2×2</h3>
          <M block={true}>{"\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"A = \\begin{pmatrix}3&2\\\\1&1\\end{pmatrix}, \\; \\det A = 1 \\Rightarrow A^{-1} = \\begin{pmatrix}1&-2\\\\-1&3\\end{pmatrix}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>8. Propriedades do Produto Matricial</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Expressão</th><th>Válida?</th></tr>
            </thead>
            <tbody>
              <tr><td>Associativa</td><td><M>{"(AB)C = A(BC)"}</M></td><td>Sempre</td></tr>
              <tr><td>Distributiva</td><td><M>{"A(B+C) = AB+AC"}</M></td><td>Sempre</td></tr>
              <tr><td>Comutativa</td><td><M>{"AB = BA"}</M></td><td>Raramente</td></tr>
              <tr><td>Cancelamento</td><td><M>{"AB=AC \\Rightarrow B=C"}</M></td><td>Raramente</td></tr>
              <tr><td>Nulo</td><td><M>{"AB=O \\Rightarrow A=O \\text{ ou } B=O"}</M></td><td>Não!</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistemas</span>
        <h2>9. Matrizes e Sistemas Lineares</h2>
        <M block={true}>{"\\begin{cases} 2x+3y = 7 \\\\ x-y = 1 \\end{cases} \\Leftrightarrow \\underbrace{\\begin{pmatrix}2&3\\\\1&-1\\end{pmatrix}}_{A} \\underbrace{\\begin{pmatrix}x\\\\y\\end{pmatrix}}_{x} = \\underbrace{\\begin{pmatrix}7\\\\1\\end{pmatrix}}_{b}"}</M>
        <p>Se det A ≠ 0: solução única <M>{"\\mathbf{x} = A^{-1}\\mathbf{b}"}</M>.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Operações Matriciais</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>A+B</span>
            <h3>Adição (mesma ordem)</h3>
            <M>{"(A+B)_{ij}=a_{ij}+b_{ij}"}</M>
          </div>
          <div className="math-card">
            <span>kA</span>
            <h3>Multiplicação escalar</h3>
            <M>{"(kA)_{ij}=k\\cdot a_{ij}"}</M>
          </div>
          <div className="math-card">
            <span>AB</span>
            <h3>Produto (col=lin)</h3>
            <M>{"c_{ij}=\\sum_k a_{ik}b_{kj}"}</M>
          </div>
          <div className="math-card">
            <span>A⁻¹</span>
            <h3>Inversa (det≠0)</h3>
            <M>{"A\\cdot A^{-1}=I"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Elemento de produto"
          statement={
            <p>
              No produto <M>{"\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}"}</M>,
              qual é o elemento da linha 2?
            </p>
          }
          options={[
            { letter: "a", text: "17" },
            { letter: "b", text: "39", correct: true },
            { letter: "c", text: "24" },
            { letter: "d", text: "30" },
          ]}
          resolution={
            <>
              <M block={true}>{"c_{21} = 3\\cdot5 + 4\\cdot6 = 15+24 = 39"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Operações combinadas"
          statement={
            <p>
              Calcule <M>{"2A-B"}</M> onde <M>{"A=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}"}</M>
              e <M>{"B=\\begin{pmatrix}1&-1\\\\4&2\\end{pmatrix}"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\begin{pmatrix}5&3\\\\-4&2\\end{pmatrix}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\begin{pmatrix}5&-3\\\\4&2\\end{pmatrix}"}</M> },
            { letter: "c", text: <M>{"\\begin{pmatrix}7&3\\\\-4&2\\end{pmatrix}"}</M> },
            { letter: "d", text: <M>{"\\begin{pmatrix}5&2\\\\-4&4\\end{pmatrix}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"2A = \\begin{pmatrix}6&2\\\\0&4\\end{pmatrix} \\Rightarrow 2A-B = \\begin{pmatrix}5&3\\\\-4&2\\end{pmatrix}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inversa e sistema"
          statement={
            <p>
              Resolva o sistema <M>{"Ax=b"}</M> com <M>{"A=\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}"}</M>
              e <M>{"b=\\begin{pmatrix}4\\\\1\\end{pmatrix}"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"x=11, y=-18"}</M>, correct: true },
            { letter: "b", text: <M>{"x=2, y=1"}</M> },
            { letter: "c", text: <M>{"x=-1, y=5"}</M> },
            { letter: "d", text: <M>{"x=4, y=0"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\det A = 6-5=1 \\Rightarrow A^{-1}=\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}"}</M>
              <M block={true}>{"x=A^{-1}b=\\begin{pmatrix}3\\cdot4+(-1)\\cdot1\\\\-5\\cdot4+2\\cdot1\\end{pmatrix}=\\begin{pmatrix}11\\\\-18\\end{pmatrix}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Transformação de imagem"
          statement={
            <p>
              Uma transformação matricial de rotação de 90° é
              <M>{"R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}"}</M>.
              Qual é a imagem do ponto (3, 2)?
            </p>
          }
          options={[
            { letter: "a", text: "(−2, 3)", correct: true },
            { letter: "b", text: "(2, −3)" },
            { letter: "c", text: "(3, −2)" },
            { letter: "d", text: "(−3, 2)" },
          ]}
          resolution={
            <>
              <M block={true}>{"R\\begin{pmatrix}3\\\\2\\end{pmatrix} = \\begin{pmatrix}0\\cdot3+(-1)\\cdot2\\\\1\\cdot3+0\\cdot2\\end{pmatrix} = \\begin{pmatrix}-2\\\\3\\end{pmatrix}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Redes de distribuição"
          statement={
            <p>
              Uma empresa distribui 3 produtos para 2 regiões.
              As quantidades são dadas pela matriz
              <M>{"Q=\\begin{pmatrix}100&200&150\\\\80&120&90\\end{pmatrix}"}</M>
              e os preços unitários por <M>{"p=\\begin{pmatrix}5\\\\8\\\\10\\end{pmatrix}"}</M>.
              Qual é o faturamento da região 1?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 3.600" },
            { letter: "b", text: "R$ 3.600" },
            { letter: "c", text: "R$ 4.600" },
            { letter: "d", text: "R$ 4.600", correct: true },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Região 1} = 100\\cdot5 + 200\\cdot8 + 150\\cdot10 = 500+1600+1500 = 3600"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
