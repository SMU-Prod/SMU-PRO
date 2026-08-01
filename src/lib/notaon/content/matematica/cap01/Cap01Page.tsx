"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 1</span>
          <h1>Teoria dos Conjuntos</h1>
          <p>
            Fundamento de toda a Matemática moderna: aprenda a representar,
            operar e interpretar conjuntos com diagramas de Venn, linguagem
            simbólica e leis de De Morgan — base para lógica, probabilidade
            e análise combinatória.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é um Conjunto?</h2>
        <p>
          Um <strong>conjunto</strong> é uma coleção bem definida de objetos
          distintos, chamados <em>elementos</em>. "Bem definida" significa que,
          dado qualquer objeto, é possível decidir, sem ambiguidade, se ele
          pertence ou não ao conjunto.
        </p>
        <ul>
          <li><strong>Conjunto bem definido:</strong> "notas musicais" — qualquer nota é ou não é uma nota musical.</li>
          <li><strong>Não é conjunto:</strong> "números grandes" — "grande" é subjetivo e varia de pessoa para pessoa.</li>
        </ul>
        <p>
          Conjuntos são representados por letras maiúsculas (<M>{"A, B, C, \\ldots"}</M>)
          e seus elementos por letras minúsculas (<M>{"a, b, c, \\ldots"}</M>).
        </p>
        <div className="lesson-highlight">
          <h3>Origem histórica</h3>
          <p>
            A Teoria dos Conjuntos foi formalizada pelo matemático alemão Georg Cantor (1845–1918).
            Ela tornou-se a linguagem universal da Matemática moderna e é base dos currículos
            do ENEM e vestibulares brasileiros.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Representação</span>
        <h2>2. Formas de Representar um Conjunto</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Extensão</span>
            <h3>Por Extensão (Listagem)</h3>
            <p>Lista todos os elementos entre chaves, separados por vírgula.</p>
            <M block={true}>{"A = \\{1, 2, 3, 4, 5\\}"}</M>
          </div>
          <div className="lesson-card">
            <span>Propriedade</span>
            <h3>Por Compreensão</h3>
            <p>Descreve a propriedade comum com notação de conjunto-construtor.</p>
            <M block={true}>{"A = \\{x \\in \\mathbb{N} \\mid x \\leq 5\\}"}</M>
          </div>
          <div className="lesson-card">
            <span>Venn</span>
            <h3>Diagrama de Venn</h3>
            <p>Representação gráfica com elipses ou círculos dentro de um retângulo (universo U).</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 340 180" width="340" height="180" aria-label="Diagrama de Venn — conjunto A">
            <rect x="10" y="10" width="320" height="160" rx="12" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="318" y="26" textAnchor="end" fontSize="13" fill="#6b7280" fontWeight="600">U</text>
            <ellipse cx="170" cy="95" rx="100" ry="62" fill="#3b82f6" fillOpacity="0.18" stroke="#3b82f6" strokeWidth="2"/>
            <text x="170" y="56" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e40af">A</text>
            <text x="140" y="92" textAnchor="middle" fontSize="14" fill="#1e3a8a">1</text>
            <text x="165" y="88" textAnchor="middle" fontSize="14" fill="#1e3a8a">2</text>
            <text x="190" y="92" textAnchor="middle" fontSize="14" fill="#1e3a8a">3</text>
            <text x="152" y="116" textAnchor="middle" fontSize="14" fill="#1e3a8a">4</text>
            <text x="180" y="116" textAnchor="middle" fontSize="14" fill="#1e3a8a">5</text>
            <text x="35" y="92" textAnchor="middle" fontSize="13" fill="#9ca3af">6</text>
            <text x="305" y="92" textAnchor="middle" fontSize="13" fill="#9ca3af">7</text>
          </svg>
          <figcaption>Diagrama de Venn: A = &#123;1, 2, 3, 4, 5&#125; dentro do universo U</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pertinência</span>
        <h2>3. Pertinência e Não-Pertinência</h2>
        <p>
          O símbolo <M>{"\\in"}</M> indica que um elemento <em>pertence</em> ao conjunto.
          O símbolo <M>{"\\notin"}</M> indica que <em>não pertence</em>.
        </p>
        <div className="math-block">
          <h3>Notação formal</h3>
          <M block={true}>{"\\text{Se } A = \\{1,2,3\\},\\text{ então } 2 \\in A \\text{ e } 5 \\notin A"}</M>
        </div>
        <div className="lesson-highlight warning">
          <h3>Pertinência vs. Inclusão — não confunda!</h3>
          <p>
            <M>{"2 \\in A"}</M> significa "2 é um <strong>elemento</strong> de A" (pertinência — relação entre elemento e conjunto).
          </p>
          <p>
            <M>{"\\{2\\} \\subset A"}</M> significa "&#123;2&#125; é um <strong>subconjunto</strong> de A" (inclusão — relação entre dois conjuntos).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vazio e Igualdade</span>
        <h2>4. Conjunto Vazio e Igualdade de Conjuntos</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>∅</span>
            <h3>Conjunto Vazio</h3>
            <p>
              Não contém nenhum elemento. Representado por <M>{"\\emptyset"}</M> ou <M>{"\\{\\}"}</M>.
            </p>
            <div className="lesson-highlight warning">
              <p><M>{"\\{\\emptyset\\}"}</M> <strong>não é vazio</strong> — contém um elemento (o próprio ∅).</p>
            </div>
          </div>
          <div className="lesson-card">
            <span>=</span>
            <h3>Igualdade de Conjuntos</h3>
            <p><M>{"A = B"}</M> se e somente se todo elemento de A está em B e vice-versa:</p>
            <M block={true}>{"A = B \\iff A \\subseteq B \\text{ e } B \\subseteq A"}</M>
            <p>A ordem e as repetições não importam:</p>
            <M block={true}>{"\\{1,2,3\\} = \\{3,1,2\\} = \\{1,1,2,3\\}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Subconjuntos</span>
        <h2>5. Subconjuntos e Conjunto das Partes</h2>
        <p>
          Dizemos que <M>{"A \\subseteq B"}</M> (A é subconjunto de B) quando
          todo elemento de A também pertence a B.
          Se <M>{"A \\subseteq B"}</M> e <M>{"A \\neq B"}</M>, escrevemos <M>{"A \\subsetneq B"}</M> (subconjunto próprio).
        </p>
        <div className="math-block">
          <h3>Número de subconjuntos — Conjunto das Partes</h3>
          <p>Um conjunto com <M>{"n"}</M> elementos possui exatamente <M>{"2^n"}</M> subconjuntos.</p>
          <M block={true}>{"\\mathcal{P}(\\{a,b,c\\}) = \\bigl\\{\\emptyset,\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{a,c\\},\\{b,c\\},\\{a,b,c\\}\\bigr\\}"}</M>
          <p>Como <M>{"n = 3"}</M>, temos <M>{"2^3 = 8"}</M> subconjuntos.</p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conjunto</th>
                <th>n (elementos)</th>
                <th>2ⁿ (subconjuntos)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\emptyset"}</M></td><td>0</td><td>1</td></tr>
              <tr><td><M>{"\\{a\\}"}</M></td><td>1</td><td>2</td></tr>
              <tr><td><M>{"\\{a,b\\}"}</M></td><td>2</td><td>4</td></tr>
              <tr><td><M>{"\\{a,b,c\\}"}</M></td><td>3</td><td>8</td></tr>
              <tr><td><M>{"\\{a,b,c,d\\}"}</M></td><td>4</td><td>16</td></tr>
              <tr><td><M>{"\\{a,b,c,d,e\\}"}</M></td><td>5</td><td>32</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">União</span>
        <h2>6. Operação de União (∪)</h2>
        <p>
          A <strong>união</strong> <M>{"A \\cup B"}</M> reúne <em>todos</em> os elementos
          que pertencem a A, a B ou a ambos.
        </p>
        <M block={true}>{"A \\cup B = \\{x \\mid x \\in A \\text{ ou } x \\in B\\}"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="União A∪B">
            <rect x="5" y="5" width="350" height="150" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1"/>
            <ellipse cx="135" cy="80" rx="100" ry="58" fill="#3b82f6" fillOpacity="0.5" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="225" cy="80" rx="100" ry="58" fill="#3b82f6" fillOpacity="0.5" stroke="#1d4ed8" strokeWidth="2"/>
            <text x="95" y="78" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a8a">A</text>
            <text x="265" y="78" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a8a">B</text>
            <text x="345" y="22" textAnchor="end" fontSize="12" fill="#6b7280" fontWeight="600">U</text>
          </svg>
          <figcaption>A ∪ B: toda a área sombreada representa a união — elementos de A ou de B</figcaption>
        </figure>

        <div className="math-block">
          <h3>Exemplo</h3>
          <M block={true}>{"A = \\{1,2,3,4\\},\\quad B = \\{3,4,5,6\\}"}</M>
          <M block={true}>{"A \\cup B = \\{1,2,3,4,5,6\\}"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Propriedades da União</h3>
          <ul>
            <li>Comutativa: <M>{"A \\cup B = B \\cup A"}</M></li>
            <li>Associativa: <M>{"(A \\cup B) \\cup C = A \\cup (B \\cup C)"}</M></li>
            <li>Elemento neutro: <M>{"A \\cup \\emptyset = A"}</M></li>
            <li>Idempotente: <M>{"A \\cup A = A"}</M></li>
            <li>Absorção: <M>{"A \\cup U = U"}</M></li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interseção</span>
        <h2>7. Operação de Interseção (∩)</h2>
        <p>
          A <strong>interseção</strong> <M>{"A \\cap B"}</M> contém somente os
          elementos <em>comuns</em> a A e B.
        </p>
        <M block={true}>{"A \\cap B = \\{x \\mid x \\in A \\text{ e } x \\in B\\}"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Interseção A∩B">
            <defs>
              <clipPath id="cap1-clipA">
                <ellipse cx="135" cy="80" rx="100" ry="58"/>
              </clipPath>
            </defs>
            <rect x="5" y="5" width="350" height="150" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1"/>
            <ellipse cx="135" cy="80" rx="100" ry="58" fill="#bfdbfe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="225" cy="80" rx="100" ry="58" fill="#bfdbfe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="225" cy="80" rx="100" ry="58" fill="#1d4ed8" fillOpacity="0.75" clipPath="url(#cap1-clipA)" stroke="none"/>
            <text x="95" y="78" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a8a">A</text>
            <text x="265" y="78" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a8a">B</text>
            <text x="180" y="84" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">A∩B</text>
            <text x="345" y="22" textAnchor="end" fontSize="12" fill="#6b7280" fontWeight="600">U</text>
          </svg>
          <figcaption>A ∩ B: apenas a região central (elementos comuns aos dois conjuntos) é destacada</figcaption>
        </figure>

        <div className="math-block">
          <h3>Exemplo e conjuntos disjuntos</h3>
          <M block={true}>{"A = \\{1,2,3,4\\},\\; B = \\{3,4,5,6\\} \\Rightarrow A \\cap B = \\{3,4\\}"}</M>
          <M block={true}>{"C = \\{1,2\\},\\; D = \\{3,4\\} \\Rightarrow C \\cap D = \\emptyset \\text{ (disjuntos)}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diferença e Complemento</span>
        <h2>8. Diferença e Complemento</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>A − B</span>
            <h3>Diferença</h3>
            <p>Elementos de A que <em>não</em> estão em B:</p>
            <M block={true}>{"A - B = \\{x \\mid x \\in A \\text{ e } x \\notin B\\}"}</M>
            <p><M>{"A{=}\\{1,2,3,4\\}, B{=}\\{3,4,5\\} \\Rightarrow A{-}B{=}\\{1,2\\}"}</M></p>
          </div>
          <div className="lesson-card">
            <span>Aᶜ</span>
            <h3>Complemento</h3>
            <p>Elementos do universo U que <em>não</em> pertencem a A:</p>
            <M block={true}>{"A^c = U - A"}</M>
            <p><M>{"U{=}\\{1{,}2{,}3{,}4{,}5\\}, A{=}\\{1{,}2\\} \\Rightarrow A^c{=}\\{3{,}4{,}5\\}"}</M></p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Diferença A−B">
            <defs>
              <clipPath id="cap1-clipB">
                <ellipse cx="225" cy="80" rx="100" ry="58"/>
              </clipPath>
            </defs>
            <rect x="5" y="5" width="350" height="150" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1"/>
            <ellipse cx="135" cy="80" rx="100" ry="58" fill="#3b82f6" fillOpacity="0.55" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="225" cy="80" rx="100" ry="58" fill="#e0e7ff" fillOpacity="0.7" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="135" cy="80" rx="100" ry="58" fill="white" fillOpacity="1" clipPath="url(#cap1-clipB)" stroke="none"/>
            <text x="95" y="78" textAnchor="middle" fontWeight="700" fontSize="13" fill="white">A−B</text>
            <text x="265" y="78" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a8a">B</text>
            <text x="345" y="22" textAnchor="end" fontSize="12" fill="#6b7280" fontWeight="600">U</text>
          </svg>
          <figcaption>A − B: parte de A que não pertence a B (azul escuro); região compartilhada é apagada</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">De Morgan</span>
        <h2>9. Leis de De Morgan</h2>
        <p>
          Formuladas pelo lógico britânico Augustus De Morgan (1806–1871), essas leis
          relacionam complemento, união e interseção — fundamentais em lógica e computação.
        </p>
        <div className="math-block">
          <h3>1ª Lei — Complemento da União</h3>
          <M block={true}>{"(A \\cup B)^c = A^c \\cap B^c"}</M>
          <p>O complemento da <em>união</em> é a <em>interseção</em> dos complementos.</p>
        </div>
        <div className="math-block">
          <h3>2ª Lei — Complemento da Interseção</h3>
          <M block={true}>{"(A \\cap B)^c = A^c \\cup B^c"}</M>
          <p>O complemento da <em>interseção</em> é a <em>união</em> dos complementos.</p>
        </div>
        <div className="lesson-highlight success">
          <h3>Verificação numérica</h3>
          <p><M>{"U = \\{1,2,3,4,5\\},\\; A = \\{1,2,3\\},\\; B = \\{2,3,4\\}"}</M></p>
          <M block={true}>{"(A \\cup B)^c = \\{1,2,3,4\\}^c = \\{5\\}"}</M>
          <M block={true}>{"A^c \\cap B^c = \\{4,5\\} \\cap \\{1,5\\} = \\{5\\} \\checkmark"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fórmula de Contagem</span>
        <h2>10. Fórmula de Contagem com Dois Conjuntos</h2>
        <p>
          Em problemas práticos (pesquisas, diagnósticos, estatísticas), usamos a
          fórmula que relaciona os cardinais (números de elementos):
        </p>
        <M block={true}>{"n(A \\cup B) = n(A) + n(B) - n(A \\cap B)"}</M>
        <p>
          Subtraímos a interseção porque, ao somar <M>{"n(A)+n(B)"}</M>,
          os elementos de <M>{"A \\cap B"}</M> seriam contados duas vezes.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 170" width="380" height="170" aria-label="Diagrama de contagem A∪B">
            <rect x="5" y="5" width="370" height="160" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1"/>
            <ellipse cx="145" cy="90" rx="110" ry="65" fill="#bfdbfe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="2"/>
            <ellipse cx="235" cy="90" rx="110" ry="65" fill="#bfdbfe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="2"/>
            <text x="90" y="86" textAnchor="middle" fontSize="13" fill="#1e40af">Só A</text>
            <text x="90" y="102" textAnchor="middle" fontSize="13" fill="#1e40af">n(A)−n(A∩B)</text>
            <text x="190" y="86" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="700">A∩B</text>
            <text x="190" y="102" textAnchor="middle" fontSize="12" fill="#1e40af">n(A∩B)</text>
            <text x="285" y="86" textAnchor="middle" fontSize="13" fill="#1e40af">Só B</text>
            <text x="285" y="102" textAnchor="middle" fontSize="13" fill="#1e40af">n(B)−n(A∩B)</text>
            <text x="360" y="22" textAnchor="end" fontSize="12" fill="#6b7280" fontWeight="600">U</text>
          </svg>
          <figcaption>As três regiões do diagrama somam n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</figcaption>
        </figure>

        <div className="math-block">
          <h3>Para três conjuntos</h3>
          <M block={true}>{"n(A\\cup B\\cup C) = n(A)+n(B)+n(C) - n(A{\\cap}B) - n(A{\\cap}C) - n(B{\\cap}C) + n(A{\\cap}B{\\cap}C)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>11. Tabela-Resumo das Operações</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Operação</th>
                <th>Símbolo</th>
                <th>Leitura</th>
                <th>Elemento neutro</th>
                <th>Comutativa?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>União</td>
                <td><M>{"A \\cup B"}</M></td>
                <td>x ∈ A <strong>ou</strong> x ∈ B</td>
                <td><M>{"\\emptyset"}</M></td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Interseção</td>
                <td><M>{"A \\cap B"}</M></td>
                <td>x ∈ A <strong>e</strong> x ∈ B</td>
                <td>U</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Diferença</td>
                <td><M>{"A - B"}</M></td>
                <td>x ∈ A <strong>e</strong> x ∉ B</td>
                <td>—</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Complemento</td>
                <td><M>{"A^c"}</M></td>
                <td>x ∈ U e x ∉ A</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Número de subconjuntos"
          statement={
            <p>Quantos subconjuntos tem o conjunto <M>{"A = \\{a, b, c, d\\}"}</M>?</p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "16", correct: true },
            { letter: "c", text: "12" },
            { letter: "d", text: "4" },
          ]}
          resolution={
            <>
              <p>O conjunto A tem <M>{"n = 4"}</M> elementos. O número de subconjuntos é:</p>
              <M block={true}>{"2^4 = 16"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Operações combinadas — De Morgan"
          statement={
            <>
              <p>
                Dados <M>{"A^c = \\{4,5,6\\}"}</M> e <M>{"B^c = \\{1,2,6\\}"}</M>{" "}
                com <M>{"U = \\{1,2,3,4,5,6\\}"}</M>, determine <M>{"(A \\cup B)^c"}</M>.
              </p>
            </>
          }
          options={[
            { letter: "a", text: "{ 6 }", correct: true },
            { letter: "b", text: "{ 1, 2, 4, 5, 6 }" },
            { letter: "c", text: "{ 3 }" },
            { letter: "d", text: "∅" },
          ]}
          resolution={
            <>
              <p>Pela 1ª Lei de De Morgan:</p>
              <M block={true}>{"(A \\cup B)^c = A^c \\cap B^c = \\{4,5,6\\} \\cap \\{1,2,6\\} = \\{6\\}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Conjunto das partes de conjunto das partes"
          statement={
            <p>
              Se <M>{"A = \\{1,2\\}"}</M>, quantos elementos tem <M>{"\\mathcal{P}(\\mathcal{P}(A))"}</M>
              (o conjunto das partes do conjunto das partes de A)?
            </p>
          }
          options={[
            { letter: "a", text: "4" },
            { letter: "b", text: "8" },
            { letter: "c", text: "16", correct: true },
            { letter: "d", text: "256" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\mathcal{P}(A) = \\bigl\\{\\emptyset,\\{1\\},\\{2\\},\\{1,2\\}\\bigr\\} \\Rightarrow n(\\mathcal{P}(A)) = 4"}</M>
              <M block={true}>{"n(\\mathcal{P}(\\mathcal{P}(A))) = 2^4 = 16"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Pesquisa de preferências musicais"
          statement={
            <p>
              Em uma pesquisa com 80 estudantes, 50 gostam de rock, 40 gostam de pop
              e 20 gostam dos dois estilos. Quantos estudantes não gostam de nenhum dos dois estilos?
            </p>
          }
          options={[
            { letter: "a", text: "10 estudantes", correct: true },
            { letter: "b", text: "30 estudantes" },
            { letter: "c", text: "20 estudantes" },
            { letter: "d", text: "0 estudantes" },
          ]}
          resolution={
            <>
              <M block={true}>{"n(R \\cup P) = 50 + 40 - 20 = 70"}</M>
              <p>Não gostam de nenhum: <M>{"80 - 70 = 10"}</M> estudantes.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Diagnóstico hospitalar"
          statement={
            <p>
              Em um hospital, 120 pacientes foram testados para dois vírus. Desses,
              75 testaram positivo para o vírus A, 60 para o vírus B e 40 para ambos.
              Quantos pacientes não apresentaram nenhum dos vírus?
            </p>
          }
          options={[
            { letter: "a", text: "15" },
            { letter: "b", text: "25", correct: true },
            { letter: "c", text: "35" },
            { letter: "d", text: "45" },
          ]}
          resolution={
            <>
              <M block={true}>{"n(A \\cup B) = 75 + 60 - 40 = 95"}</M>
              <p>Sem nenhum dos vírus: <M>{"120 - 95 = 25"}</M> pacientes.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
