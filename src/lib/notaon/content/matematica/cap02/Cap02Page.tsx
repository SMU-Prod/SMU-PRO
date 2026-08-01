"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 2</span>
          <h1>Conjuntos Numéricos</h1>
          <p>
            Conheça a hierarquia dos conjuntos numéricos — de ℕ até ℂ — e
            compreenda como cada conjunto amplia o anterior para resolver
            equações que antes não tinham solução.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. A Hierarquia dos Conjuntos Numéricos</h2>
        <p>
          Os conjuntos numéricos foram construídos historicamente para responder
          à pergunta: "que número satisfaz esta equação?" Cada conjunto novo resolve
          equações que o anterior não conseguia.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 220" width="380" height="220" aria-label="Hierarquia dos conjuntos numéricos">
            {/* ℂ */}
            <ellipse cx="190" cy="110" rx="175" ry="100" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5"/>
            <text x="26" y="130" fontSize="13" fill="#9333ea" fontWeight="700">ℂ</text>
            {/* ℝ */}
            <ellipse cx="190" cy="115" rx="148" ry="82" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="50" y="130" fontSize="13" fill="#2563eb" fontWeight="700">ℝ</text>
            {/* ℚ */}
            <ellipse cx="190" cy="118" rx="118" ry="65" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="78" y="130" fontSize="13" fill="#0284c7" fontWeight="700">ℚ</text>
            {/* ℤ */}
            <ellipse cx="190" cy="122" rx="88" ry="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="107" y="130" fontSize="13" fill="#16a34a" fontWeight="700">ℤ</text>
            {/* ℕ */}
            <ellipse cx="190" cy="126" rx="58" ry="34" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="161" y="132" fontSize="13" fill="#92400e" fontWeight="700">ℕ</text>
          </svg>
          <figcaption>Diagrama de inclusão: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ</figcaption>
        </figure>
        <M block={true}>{"\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Naturais</span>
        <h2>2. Números Naturais (ℕ)</h2>
        <p>
          Os números naturais são os usados para contar: 0, 1, 2, 3, … São
          infinitos e não têm números negativos nem fracionários.
        </p>
        <M block={true}>{"\\mathbb{N} = \\{0, 1, 2, 3, 4, 5, \\ldots\\}"}</M>
        <M block={true}>{"\\mathbb{N}^* = \\{1, 2, 3, 4, 5, \\ldots\\} \\text{ (sem o zero)}"}</M>

        <div className="lesson-highlight warning">
          <h3>Equação sem solução em ℕ</h3>
          <M block={true}>{"x + 5 = 3 \\Rightarrow x = -2 \\notin \\mathbb{N}"}</M>
          <p>Para resolver isso, precisamos ampliar para os inteiros.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inteiros</span>
        <h2>3. Números Inteiros (ℤ)</h2>
        <p>
          Os inteiros incluem os naturais e seus opostos (negativos).
          A letra ℤ vem do alemão <em>Zahlen</em> (números).
        </p>
        <M block={true}>{"\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}"}</M>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>ℤ⁺</span>
            <h3>Inteiros positivos</h3>
            <M block={true}>{"\\mathbb{Z}^+ = \\{1, 2, 3, \\ldots\\} = \\mathbb{N}^*"}</M>
          </div>
          <div className="lesson-card">
            <span>ℤ⁻</span>
            <h3>Inteiros negativos</h3>
            <M block={true}>{"\\mathbb{Z}^- = \\{\\ldots, -3, -2, -1\\}"}</M>
          </div>
          <div className="lesson-card">
            <span>ℤ*</span>
            <h3>Inteiros não nulos</h3>
            <M block={true}>{"\\mathbb{Z}^* = \\mathbb{Z} \\setminus \\{0\\}"}</M>
          </div>
        </div>

        <div className="lesson-highlight warning">
          <h3>Equação sem solução em ℤ</h3>
          <M block={true}>{"2x = 1 \\Rightarrow x = \\frac{1}{2} \\notin \\mathbb{Z}"}</M>
          <p>Precisamos ampliar para os racionais.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Racionais</span>
        <h2>4. Números Racionais (ℚ)</h2>
        <p>
          Um número racional é qualquer número que pode ser escrito como
          <strong> fração</strong> <M>{"\\dfrac{p}{q}"}</M> com <M>{"p, q \\in \\mathbb{Z}"}</M>{" "}
          e <M>{"q \\neq 0"}</M>. A letra ℚ vem de <em>quociente</em>.
        </p>
        <M block={true}>{"\\mathbb{Q} = \\left\\{ \\frac{p}{q} \\;\\ \\bigg| \\;\\ p, q \\in \\mathbb{Z},\\; q \\neq 0 \\right\\}"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Exemplos</th>
                <th>Dízima</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fração exata</td>
                <td><M>{"\\frac{1}{4} = 0{,}25"}</M></td>
                <td>Decimal finito</td>
              </tr>
              <tr>
                <td>Dízima periódica simples</td>
                <td><M>{"\\frac{1}{3} = 0{,}333\\ldots"}</M></td>
                <td>Período: 3</td>
              </tr>
              <tr>
                <td>Dízima periódica composta</td>
                <td><M>{"\\frac{1}{6} = 0{,}1666\\ldots"}</M></td>
                <td>Pré-período 1, período 6</td>
              </tr>
              <tr>
                <td>Inteiro como fração</td>
                <td><M>{"5 = \\frac{5}{1}"}</M></td>
                <td>Decimal finito</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Todo inteiro é racional</h3>
          <M block={true}>{"\\mathbb{Z} \\subset \\mathbb{Q} \\text{ pois } n = \\frac{n}{1} \\in \\mathbb{Q}"}</M>
        </div>

        <div className="lesson-highlight warning">
          <h3>Equação sem solução em ℚ</h3>
          <M block={true}>{"x^2 = 2 \\Rightarrow x = \\sqrt{2} \\notin \\mathbb{Q}"}</M>
          <p>Isso motiva os irracionais.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Irracionais</span>
        <h2>5. Números Irracionais (𝕀)</h2>
        <p>
          Números irracionais são reais que <em>não</em> podem ser escritos como
          fração — sua expansão decimal é infinita e não periódica.
        </p>

        <div className="math-grid">
          <div className="math-card">
            <span>√2</span>
            <h3>Raízes não exatas</h3>
            <p><M>{"\\sqrt{2} \\approx 1{,}41421356\\ldots"}</M></p>
          </div>
          <div className="math-card">
            <span>π</span>
            <h3>Pi</h3>
            <p><M>{"\\pi \\approx 3{,}14159265\\ldots"}</M></p>
          </div>
          <div className="math-card">
            <span>e</span>
            <h3>Número de Euler</h3>
            <p><M>{"e \\approx 2{,}71828182\\ldots"}</M></p>
          </div>
          <div className="math-card">
            <span>φ</span>
            <h3>Razão Áurea</h3>
            <p><M>{"\\varphi = \\frac{1+\\sqrt{5}}{2} \\approx 1{,}618\\ldots"}</M></p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Prova de que √2 é irracional</h3>
          <p>
            Suponha que <M>{"\\sqrt{2} = \\frac{p}{q}"}</M> com <M>{"\\text{mdc}(p,q)=1"}</M>.
            Então <M>{"2 = \\frac{p^2}{q^2}"}</M>, logo <M>{"p^2 = 2q^2"}</M>, portanto p é par.
            Escrevendo <M>{"p = 2k"}</M>: <M>{"4k^2 = 2q^2 \\Rightarrow q^2 = 2k^2"}</M>, logo q também é par —
            contradição! Então <M>{"\\sqrt{2} \\notin \\mathbb{Q}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reais</span>
        <h2>6. Números Reais (ℝ)</h2>
        <p>
          Os reais são a <strong>reunião</strong> de racionais e irracionais.
          Correspondem a todos os pontos de uma reta (a "reta real").
        </p>
        <M block={true}>{"\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}"}</M>
        <M block={true}>{"\\mathbb{Q} \\cap \\mathbb{I} = \\emptyset"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 80" width="380" height="80" aria-label="Reta real">
            <line x1="20" y1="40" x2="360" y2="40" stroke="#374151" strokeWidth="2"/>
            <polygon points="360,40 350,35 350,45" fill="#374151"/>
            {/* Marcações */}
            {[[-3,-100],[0,0],[1,50],[2,100],[3,150]].map(([label,xo]) => {
              const x = 190 + xo;
              return (
                <g key={label}>
                  <line x1={x} y1="35" x2={x} y2="45" stroke="#374151" strokeWidth="1.5"/>
                  <text x={x} y="58" textAnchor="middle" fontSize="12" fill="#374151">{label}</text>
                </g>
              );
            })}
            {/* π */}
            <text x="247" y="30" textAnchor="middle" fontSize="11" fill="#7c3aed">π</text>
            <line x1="247" y1="32" x2="247" y2="38" stroke="#7c3aed" strokeWidth="1.5"/>
            {/* √2 */}
            <text x="211" y="30" textAnchor="middle" fontSize="11" fill="#0369a1">√2</text>
            <line x1="211" y1="32" x2="211" y2="38" stroke="#0369a1" strokeWidth="1.5"/>
          </svg>
          <figcaption>Reta real: cada ponto corresponde a exatamente um número real</figcaption>
        </figure>

        <div className="lesson-highlight warning">
          <h3>Equação sem solução em ℝ</h3>
          <M block={true}>{"x^2 = -1 \\Rightarrow x = \\sqrt{-1} \\notin \\mathbb{R}"}</M>
          <p>Isso motiva a criação dos números complexos.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Complexos</span>
        <h2>7. Números Complexos (ℂ)</h2>
        <p>
          Os números complexos incluem todos os reais e ampliam para a
          forma <M>{"z = a + bi"}</M>, onde <M>{"i = \\sqrt{-1}"}</M>{" "}
          é a unidade imaginária.
        </p>
        <M block={true}>{"\\mathbb{C} = \\{a + bi \\mid a, b \\in \\mathbb{R},\\; i^2 = -1\\}"}</M>
        <p>
          Todo real é complexo (com <M>{"b=0"}</M>):
          <M>{" 3 = 3 + 0i"}</M>. O conjunto dos complexos "fecha" a Álgebra —
          pelo <em>Teorema Fundamental da Álgebra</em>, qualquer polinômio de grau n
          tem exatamente n raízes em ℂ.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reta Real</span>
        <h2>8. Intervalos na Reta Real</h2>
        <p>
          Subconjuntos contínuos de ℝ são chamados <strong>intervalos</strong>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nome</th><th>Notação</th><th>Definição</th><th>Extremos</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Fechado</td>
                <td><M>{"[a, b]"}</M></td>
                <td><M>{"a \\leq x \\leq b"}</M></td>
                <td>Incluídos</td>
              </tr>
              <tr>
                <td>Aberto</td>
                <td><M>{"(a, b)"}</M></td>
                <td><M>{"a < x < b"}</M></td>
                <td>Excluídos</td>
              </tr>
              <tr>
                <td>Semiaberto (dir.)</td>
                <td><M>{"[a, b)"}</M></td>
                <td><M>{"a \\leq x < b"}</M></td>
                <td>a incluso, b excluído</td>
              </tr>
              <tr>
                <td>Semiaberto (esq.)</td>
                <td><M>{"(a, b]"}</M></td>
                <td><M>{"a < x \\leq b"}</M></td>
                <td>a excluído, b incluso</td>
              </tr>
              <tr>
                <td>Semirreta</td>
                <td><M>{"[a, +\\infty)"}</M></td>
                <td><M>{"x \\geq a"}</M></td>
                <td>a incluso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>9. Valor Absoluto (Módulo)</h2>
        <p>
          O módulo (valor absoluto) de um real x, denotado <M>{"|x|"}</M>,
          é sua distância à origem na reta real:
        </p>
        <M block={true}>{"| x | = \\begin{cases} x & \\text{se } x \\geq 0 \\\\ -x & \\text{se } x < 0 \\end{cases}"}</M>

        <div className="lesson-highlight">
          <h3>Propriedades do módulo</h3>
          <ul>
            <li><M>{"| x | \\geq 0"}</M> para todo <M>{"x \\in \\mathbb{R}"}</M></li>
            <li><M>{"| x | = 0 \\iff x = 0"}</M></li>
            <li><M>{"| xy | = |x| \\cdot |y|"}</M></li>
            <li><M>{"\\left| \\dfrac{x}{y} \\right| = \\dfrac{|x|}{|y|}"}</M></li>
            <li>Desigualdade triangular: <M>{"| x + y | \\leq |x| + |y|"}</M></li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Tabela-Resumo dos Conjuntos Numéricos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conjunto</th>
                <th>Símbolo</th>
                <th>Exemplos</th>
                <th>Equação que motivou</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Naturais</td><td>ℕ</td><td>0, 1, 2, 3…</td><td>x + 1 = 2</td></tr>
              <tr><td>Inteiros</td><td>ℤ</td><td>…, −2, −1, 0, 1, 2…</td><td>x + 5 = 3</td></tr>
              <tr><td>Racionais</td><td>ℚ</td><td>1/2, 0,333…, −3</td><td>2x = 1</td></tr>
              <tr><td>Irracionais</td><td>𝕀</td><td>√2, π, e, φ</td><td>x² = 2</td></tr>
              <tr><td>Reais</td><td>ℝ</td><td>ℚ ∪ 𝕀</td><td>qualquer algébrica</td></tr>
              <tr><td>Complexos</td><td>ℂ</td><td>3+2i, −i, 5</td><td>x² = −1</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Classificação de números"
          statement={
            <p>
              Qual dos seguintes números é irracional?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\frac{22}{7}"}</M> },
            { letter: "b", text: <M>{"0{,}121212\\ldots"}</M> },
            { letter: "c", text: <M>{"\\sqrt{3}"}</M>, correct: true },
            { letter: "d", text: <M>{"\\sqrt{4}"}</M> },
          ]}
          resolution={
            <>
              <p><M>{"\\sqrt{3} \\approx 1{,}7320508\\ldots"}</M> — decimal infinito não periódico → irracional.</p>
              <p><M>{"\\sqrt{4} = 2 \\in \\mathbb{Z}"}</M>; <M>{"22/7"}</M> e <M>{"0{,}\\overline{12}"}</M> são racionais.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pertinência a múltiplos conjuntos"
          statement={
            <p>
              Quantos dos seguintes números pertencem a ℤ?
              <M block={true}>{"-3,\\quad \\frac{7}{1},\\quad 0{,}5,\\quad \\sqrt{9},\\quad \\pi"}</M>
            </p>
          }
          options={[
            { letter: "a", text: "2" },
            { letter: "b", text: "3", correct: true },
            { letter: "c", text: "4" },
            { letter: "d", text: "5" },
          ]}
          resolution={
            <>
              <p><M>{"-3 \\in \\mathbb{Z}"}</M>, <M>{"7/1 = 7 \\in \\mathbb{Z}"}</M>, <M>{"\\sqrt{9}=3 \\in \\mathbb{Z}"}</M>.</p>
              <p><M>{"0{,}5 = 1/2 \\in \\mathbb{Q}"}</M> mas <M>{"\\notin \\mathbb{Z}"}</M>; <M>{"\\pi \\in \\mathbb{I}"}</M>.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Módulo e inequação"
          statement={
            <p>Resolva a inequação <M>{"|x - 3| \\leq 4"}</M> e indique o intervalo solução.</p>
          }
          options={[
            { letter: "a", text: <M>{"x \\in [-1, 7]"}</M>, correct: true },
            { letter: "b", text: <M>{"x \\in (-\\infty, -1] \\cup [7, +\\infty)"}</M> },
            { letter: "c", text: <M>{"x \\in [-7, 1]"}</M> },
            { letter: "d", text: <M>{"x \\in (1, 7)"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"| x - 3 | \\leq 4 \\iff -4 \\leq x - 3 \\leq 4 \\iff -1 \\leq x \\leq 7"}</M>
              <p>Solução: <M>{"x \\in [-1, 7]"}</M>.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Temperatura e conjuntos numéricos"
          statement={
            <p>
              A temperatura de uma cidade, em graus Celsius, variou entre −8°C e 35°C
              durante um ano. Essa variação pertence a qual conjunto numérico mínimo
              que representa todos os valores possíveis?
            </p>
          }
          options={[
            { letter: "a", text: "ℕ — naturais" },
            { letter: "b", text: "ℤ — inteiros", correct: true },
            { letter: "c", text: "ℚ — racionais" },
            { letter: "d", text: "𝕀 — irracionais" },
          ]}
          resolution={
            <>
              <p>
                Os valores inteiros de temperatura (incluindo negativos como −8°C) pertencem a ℤ.
                Como há valores negativos, ℕ não basta. Como os valores são inteiros, ℤ é suficiente —
                não precisamos de ℚ ou ℝ para este contexto.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Comprimento de uma diagonal"
          statement={
            <p>
              Um pedreiro precisa calcular a diagonal de um quadrado de lado 1 m para cortar
              um azulejo. A diagonal mede <M>{"\\sqrt{2}"}</M> metros. Essa medida pertence a qual conjunto?
            </p>
          }
          options={[
            { letter: "a", text: "ℕ" },
            { letter: "b", text: "ℤ" },
            { letter: "c", text: "ℚ" },
            { letter: "d", text: "ℝ ∖ ℚ (irracionais)", correct: true },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sqrt{2} \\approx 1{,}41421356\\ldots \\in \\mathbb{I} \\subset \\mathbb{R}"}</M>
              <p>
                Como a expansão decimal é infinita e não periódica, <M>{"\\sqrt{2}"}</M> é irracional —
                pertence a ℝ mas não a ℚ.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
