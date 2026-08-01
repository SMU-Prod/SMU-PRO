"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 1</span>
          <h1>Fundamentos da Física, Vetores e Álgebra Vetorial</h1>
          <p>
            A Física descreve o universo por meio de grandezas, unidades e leis matemáticas.
            Neste capítulo você dominará o Sistema Internacional de Unidades, a notação científica,
            os algarismos significativos e toda a álgebra vetorial que sustenta a Mecânica Clássica.
          </p>
        </div>
      </section>

      {/* ── 1. O que é Física ── */}
      <section className="lesson-section">
        <span className="section-kicker">Introdução</span>
        <h2>1. O Que é Física e o Método Científico</h2>
        <p>
          A Física é a ciência natural que investiga os fenômenos do universo — desde partículas
          subatômicas até galáxias — descrevendo matéria, energia, espaço e tempo por meio de
          modelos matemáticos precisos. Seu método é iterativo: observação → hipótese → experimento
          → teoria → previsão → nova observação.
        </p>
        <div className="lesson-highlight">
          <h3>Método Científico — Etapas</h3>
          <p>
            <strong>1. Observação:</strong> identificar o fenômeno.<br />
            <strong>2. Hipótese:</strong> propor uma explicação testável.<br />
            <strong>3. Experimento:</strong> coletar dados controlados.<br />
            <strong>4. Análise:</strong> comparar dados com a hipótese.<br />
            <strong>5. Teoria:</strong> modelo generalizado validado por múltiplos experimentos.<br />
            <strong>6. Lei:</strong> descrição quantitativa comprovada — ex. Lei de Newton.
          </p>
        </div>
        <p>
          Uma <em>lei física</em> não é uma "regra imposta", mas uma regularidade observada com
          altíssima reprodutibilidade. Leis podem ser revisadas — como a Mecânica Newtoniana foi
          complementada pela Relatividade de Einstein para velocidades próximas à da luz.
        </p>
      </section>

      {/* ── 2. Grandezas físicas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Grandezas</span>
        <h2>2. Grandezas Físicas: Escalares vs. Vetoriais</h2>
        <p>
          Uma <strong>grandeza física</strong> é tudo aquilo que pode ser medido e expresso por
          um número e uma unidade. Elas se dividem em dois grandes grupos:
        </p>
        <div className="lesson-highlight">
          <h3>Grandezas Escalares</h3>
          <p>
            Completamente definidas por um <em>número</em> (módulo) e uma <em>unidade</em>.
            Exemplos: temperatura (25 °C), massa (70 kg), volume (2 L), energia (500 J),
            velocidade escalar (90 km/h sem indicar direção).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Grandezas Vetoriais</h3>
          <p>
            Exigem <em>módulo</em>, <em>direção</em> e <em>sentido</em> para serem completamente
            descritas. Representadas por setas (vetores). Exemplos: força, velocidade, aceleração,
            campo elétrico, momento linear.
          </p>
        </div>
        <p>
          Grandezas vetoriais não obedecem à aritmética comum: duas forças de 3 N e 4 N podem
          resultar em qualquer valor entre 1 N e 7 N, dependendo do ângulo entre elas.
        </p>
      </section>

      {/* ── 3. Sistema Internacional ── */}
      <section className="lesson-section">
        <span className="section-kicker">Unidades</span>
        <h2>3. Sistema Internacional de Unidades — As 7 Grandezas Base</h2>
        <p>
          O <strong>SI (Système International d'Unités)</strong>, adotado em 1960 e revisado em
          2019, define 7 grandezas fundamentais das quais todas as demais são derivadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grandeza Base</th>
                <th>Símbolo</th>
                <th>Unidade SI</th>
                <th>Símbolo da Unidade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Comprimento</td><td>L</td><td>metro</td><td>m</td></tr>
              <tr><td>Massa</td><td>m</td><td>quilograma</td><td>kg</td></tr>
              <tr><td>Tempo</td><td>t</td><td>segundo</td><td>s</td></tr>
              <tr><td>Corrente elétrica</td><td>I</td><td>ampere</td><td>A</td></tr>
              <tr><td>Temperatura termodinâmica</td><td>T</td><td>kelvin</td><td>K</td></tr>
              <tr><td>Quantidade de matéria</td><td>n</td><td>mol</td><td>mol</td></tr>
              <tr><td>Intensidade luminosa</td><td>Iv</td><td>candela</td><td>cd</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Todas as demais unidades são derivadas. Por exemplo: velocidade (m/s), força (kg·m/s² = N),
          energia (kg·m²/s² = J), pressão (kg/(m·s²) = Pa).
        </p>
      </section>

      {/* ── 4. Prefixos SI ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prefixos</span>
        <h2>4. Prefixos SI: Tabela Completa</h2>
        <p>
          Para evitar potências de 10 explícitas, o SI define prefixos padronizados. Os mais
          usados no vestibular são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Símbolo</th>
                <th>Fator</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>giga</td><td>G</td><td><M>{"10^9"}</M></td><td>1 GHz = 10⁹ Hz</td></tr>
              <tr><td>mega</td><td>M</td><td><M>{"10^6"}</M></td><td>1 MW = 10⁶ W</td></tr>
              <tr><td>kilo</td><td>k</td><td><M>{"10^3"}</M></td><td>1 km = 10³ m</td></tr>
              <tr><td>hecto</td><td>h</td><td><M>{"10^2"}</M></td><td>1 hPa = 100 Pa</td></tr>
              <tr><td>deca</td><td>da</td><td><M>{"10^1"}</M></td><td>1 dam = 10 m</td></tr>
              <tr><td>deci</td><td>d</td><td><M>{"10^{-1}"}</M></td><td>1 dL = 0,1 L</td></tr>
              <tr><td>centi</td><td>c</td><td><M>{"10^{-2}"}</M></td><td>1 cm = 0,01 m</td></tr>
              <tr><td>mili</td><td>m</td><td><M>{"10^{-3}"}</M></td><td>1 mm = 0,001 m</td></tr>
              <tr><td>micro</td><td>μ</td><td><M>{"10^{-6}"}</M></td><td>1 μm = 10⁻⁶ m</td></tr>
              <tr><td>nano</td><td>n</td><td><M>{"10^{-9}"}</M></td><td>1 nm = 10⁻⁹ m</td></tr>
              <tr><td>pico</td><td>p</td><td><M>{"10^{-12}"}</M></td><td>1 pF = 10⁻¹² F</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. Notação científica ── */}
      <section className="lesson-section">
        <span className="section-kicker">Matemática</span>
        <h2>5. Notação Científica e Ordem de Grandeza</h2>
        <p>
          A <strong>notação científica</strong> expressa qualquer número na forma:
        </p>
        <M block={true}>{"a \\times 10^n, \\quad 1 \\le a < 10, \\quad n \\in \\mathbb{Z}"}</M>
        <p>
          Exemplos: velocidade da luz <M>{"c = 3{,}0 \\times 10^8 \\text{ m/s}"}</M>;
          massa do elétron <M>{"m_e = 9{,}11 \\times 10^{-31} \\text{ kg}"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Ordem de Grandeza</h3>
          <p>
            A ordem de grandeza é a potência de 10 mais próxima do número. Para determiná-la,
            escreva o número em notação científica: se <M>{"a < \\sqrt{10} \\approx 3{,}16"}</M>,
            a ordem de grandeza é <M>{"10^n"}</M>; caso contrário, é <M>{"10^{n+1}"}</M>.
          </p>
          <p>
            Exemplo: 5 000 m = 5 × 10³ m → como 5 {'>'}  3,16, a ordem de grandeza é 10⁴ m.
          </p>
        </div>
        <p>
          Operações com notação científica: multiplicar as mantissas e somar os expoentes;
          dividir as mantissas e subtrair os expoentes. Para somar/subtrair, é preciso igualar
          os expoentes primeiro.
        </p>
      </section>

      {/* ── 6. Algarismos significativos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Medidas</span>
        <h2>6. Erros e Algarismos Significativos</h2>
        <p>
          Toda medida experimental tem incerteza. Os <strong>algarismos significativos (AS)</strong>
          indicam a precisão de uma medida — todos os dígitos confiáveis mais o primeiro duvidoso.
        </p>
        <div className="lesson-highlight">
          <h3>Regras para Contagem de AS</h3>
          <p>
            • Zeros à esquerda <em>não</em> são significativos: 0,0034 → 2 AS.<br />
            • Zeros entre dígitos <em>são</em> significativos: 1 005 → 4 AS.<br />
            • Zeros à direita após o ponto decimal <em>são</em> significativos: 3,40 → 3 AS.<br />
            • Zeros à direita sem ponto decimal são ambíguos: use notação científica.
          </p>
        </div>
        <p>
          Em <strong>multiplicação/divisão</strong>, o resultado tem tantos AS quanto o fator com
          menos AS. Em <strong>adição/subtração</strong>, o resultado é arredondado para a última
          casa decimal do termo menos preciso.
        </p>
        <p>
          O <strong>erro relativo</strong> é <M>{"\\varepsilon_r = \\dfrac{\\Delta x}{x}"}</M> e o
          <strong> erro percentual</strong> é <M>{"\\varepsilon_\\% = \\varepsilon_r \\times 100\\%"}</M>.
        </p>
      </section>

      {/* ── 7. Representação de vetores ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vetores</span>
        <h2>7. Representação Geométrica de Vetores</h2>
        <p>
          Um vetor é representado por uma seta com três características:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
          <li><strong>Módulo (intensidade):</strong> comprimento da seta.</li>
          <li><strong>Direção:</strong> reta sobre a qual o vetor está apoiado (ex.: horizontal, vertical, a 45°).</li>
          <li><strong>Sentido:</strong> para qual dos dois lados a seta aponta.</li>
        </ul>
        <p>
          Dois vetores são iguais se têm mesmo módulo, direção e sentido (vetores livres podem ser
          transladados). O <strong>vetor oposto</strong> de <M>{"\\vec{v}"}</M> é <M>{"-\\vec{v}"}</M>
          (mesmo módulo e direção, sentido invertido).
        </p>
        <div className="lesson-highlight">
          <h3>Notação</h3>
          <p>
            Vetores: <M>{"\\vec{F}"}</M>, <M>{"\\vec{v}"}</M>, <M>{"\\vec{a}"}</M>.<br />
            Módulo: <M>{"|\\vec{F}| = F"}</M> (escalar positivo).<br />
            Vetor unitário: <M>{"\\hat{u} = \\dfrac{\\vec{v}}{|\\vec{v}|}"}</M>.
          </p>
        </div>
      </section>

      {/* ── 8. Adição de vetores ── */}
      <section className="lesson-section">
        <span className="section-kicker">Operações</span>
        <h2>8. Adição de Vetores: Lei dos Cossenos</h2>
        <p>
          Para somar dois vetores <M>{"\\vec{A}"}</M> e <M>{"\\vec{B}"}</M> com ângulo <M>{"\\alpha"}</M>
          entre eles, a resultante <M>{"\\vec{R} = \\vec{A} + \\vec{B}"}</M> tem módulo dado pela
          <strong> lei dos cossenos</strong>:
        </p>
        <M block={true}>{"R = \\sqrt{A^2 + B^2 + 2AB\\cos\\alpha}"}</M>
        <p>
          Caso especial: vetores perpendiculares (<M>{"\\alpha = 90°"}</M>):
        </p>
        <M block={true}>{"R = \\sqrt{A^2 + B^2}"}</M>
        <p>
          Caso especial: vetores paralelos e no mesmo sentido (<M>{"\\alpha = 0°"}</M>):
          <M>{" R = A + B"}</M>. Vetores antiparalelos (<M>{"\\alpha = 180°"}</M>):
          <M>{" R = |A - B|"}</M>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 240" width="420" height="240" aria-label="Triângulo da adição vetorial">
            {/* Grid de fundo */}
            <defs>
              <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
              <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
              <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
              </marker>
            </defs>
            {/* Vetor A */}
            <line x1="40" y1="180" x2="200" y2="180" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowA)" />
            <text x="115" y="170" fill="#2563eb" fontSize="14" fontWeight="bold" textAnchor="middle">A⃗</text>
            {/* Vetor B (a partir da ponta de A) */}
            <line x1="200" y1="180" x2="340" y2="80" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrowB)" />
            <text x="285" y="140" fill="#16a34a" fontSize="14" fontWeight="bold">B⃗</text>
            {/* Resultante R */}
            <line x1="40" y1="180" x2="334" y2="84" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" markerEnd="url(#arrowR)" />
            <text x="160" y="120" fill="#dc2626" fontSize="14" fontWeight="bold">R⃗</text>
            {/* Ângulo α */}
            <path d="M 200 180 A 30 30 0 0 1 224 162" fill="none" stroke="#6b7280" strokeWidth="1.5" />
            <text x="215" y="175" fill="#6b7280" fontSize="13">α</text>
            {/* Fórmula */}
            <text x="210" y="220" fill="#374151" fontSize="12" textAnchor="middle">R² = A² + B² + 2AB·cos α</text>
          </svg>
          <figcaption>Regra do triângulo para a adição de dois vetores — a resultante R⃗ fecha o triângulo.</figcaption>
        </figure>
        <p>
          O ângulo <M>{"\\beta"}</M> que a resultante faz com o vetor <M>{"\\vec{A}"}</M> pode ser
          determinado pela <strong>lei dos senos</strong>:
        </p>
        <M block={true}>{"\\frac{R}{\\sin(180°-\\alpha)} = \\frac{B}{\\sin\\beta}"}</M>
      </section>

      {/* ── 9. Decomposição de vetores ── */}
      <section className="lesson-section">
        <span className="section-kicker">Componentes</span>
        <h2>9. Decomposição de Vetores em Componentes</h2>
        <p>
          Qualquer vetor pode ser decomposto em componentes ortogonais ao longo dos eixos
          <M>{" x"}</M> e <M>{"y"}</M>. Para um vetor <M>{"\\vec{v}"}</M> com módulo <M>{"v"}</M>
          e ângulo <M>{"\\theta"}</M> com o eixo <M>{"x"}</M>:
        </p>
        <M block={true}>{"v_x = v\\cos\\theta \\qquad v_y = v\\sin\\theta"}</M>
        <p>
          A reconstrução é feita pelo teorema de Pitágoras e pela trigonometria inversa:
        </p>
        <M block={true}>{"v = \\sqrt{v_x^2 + v_y^2} \\qquad \\theta = \\arctan\\!\\left(\\frac{v_y}{v_x}\\right)"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 260" width="380" height="260" aria-label="Decomposição de vetor em eixos x e y">
            <defs>
              <marker id="arrowV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
              </marker>
              <marker id="arrowX" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
              <marker id="arrowY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
              <marker id="arrowAx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="210" x2="340" y2="210" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowAx)" />
            <text x="345" y="214" fill="#374151" fontSize="14" fontWeight="bold">x</text>
            <line x1="50" y1="210" x2="50" y2="30" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowAx)" />
            <text x="42" y="25" fill="#374151" fontSize="14" fontWeight="bold">y</text>
            {/* Vetor v */}
            <line x1="50" y1="210" x2="268" y2="76" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#arrowV)" />
            <text x="140" y="120" fill="#7c3aed" fontSize="15" fontWeight="bold">v⃗</text>
            {/* Componente vx */}
            <line x1="50" y1="210" x2="268" y2="210" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrowX)" />
            <text x="155" y="228" fill="#2563eb" fontSize="13" textAnchor="middle">vₓ = v·cosθ</text>
            {/* Componente vy */}
            <line x1="268" y1="210" x2="268" y2="76" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrowY)" />
            <text x="305" y="150" fill="#16a34a" fontSize="13">vy = v·senθ</text>
            {/* Ângulo θ */}
            <path d="M 90 210 A 40 40 0 0 1 110 183" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="100" y="200" fill="#f59e0b" fontSize="13">θ</text>
            {/* Linhas pontilhadas de projeção */}
            <line x1="268" y1="76" x2="268" y2="210" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
          <figcaption>Decomposição do vetor v⃗ nas componentes vₓ (horizontal) e vy (vertical).</figcaption>
        </figure>
        <p>
          Para somar múltiplos vetores, some as componentes <M>{"x"}</M> separadamente e as
          componentes <M>{"y"}</M> separadamente:
        </p>
        <M block={true}>{"R_x = \\sum v_{ix} \\qquad R_y = \\sum v_{iy} \\qquad R = \\sqrt{R_x^2 + R_y^2}"}</M>
      </section>

      {/* ── 10. Produto escalar e vetorial ── */}
      <section className="lesson-section">
        <span className="section-kicker">Produtos</span>
        <h2>10. Produto Escalar e Produto Vetorial</h2>
        <p>
          Existem duas operações fundamentais entre vetores que geram resultados muito diferentes:
        </p>
        <div className="lesson-highlight">
          <h3>Produto Escalar (Ponto) — resultado é um escalar</h3>
          <M block={true}>{"\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta"}</M>
          <p>
            Onde <M>{"\\theta"}</M> é o ângulo entre os vetores. O produto escalar é máximo
            quando <M>{"\\theta=0°"}</M> (vetores paralelos) e zero quando <M>{"\\theta=90°"}</M>
            (vetores perpendiculares). Aplicação: trabalho mecânico <M>{"W = \\vec{F}\\cdot\\vec{d}"}</M>.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Produto Vetorial (Cruz) — resultado é um vetor</h3>
          <M block={true}>{"\\vec{A} \\times \\vec{B} = AB\\sin\\theta\\,\\hat{n}"}</M>
          <p>
            O módulo é <M>{"AB\\sin\\theta"}</M> e a direção é perpendicular ao plano formado
            por <M>{"\\vec{A}"}</M> e <M>{"\\vec{B}"}</M> (regra da mão direita). Máximo quando
            <M>{" \\theta=90°"}</M>, nulo quando paralelos. Aplicação: torque <M>{"\\vec{\\tau} = \\vec{r}\\times\\vec{F}"}</M>.
          </p>
        </div>
        <p>
          Em componentes cartesianas: <M>{"\\vec{A}\\cdot\\vec{B} = A_xB_x + A_yB_y + A_zB_z"}</M>.
        </p>
      </section>

      {/* ── 11. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>11. Resumo Geral — Fórmulas Principais</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Notação científica</span>
            <h3>Formato padrão</h3>
            <M block={true}>{"a \\times 10^n"}</M>
          </div>
          <div className="math-card">
            <span>Componentes</span>
            <h3>Decomposição</h3>
            <M block={true}>{"v_x = v\\cos\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Componentes</span>
            <h3>Decomposição</h3>
            <M block={true}>{"v_y = v\\sin\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Módulo</span>
            <h3>Reconstrução</h3>
            <M block={true}>{"v = \\sqrt{v_x^2+v_y^2}"}</M>
          </div>
          <div className="math-card">
            <span>Resultante</span>
            <h3>Lei dos Cossenos</h3>
            <M block={true}>{"R=\\sqrt{A^2+B^2+2AB\\cos\\alpha}"}</M>
          </div>
          <div className="math-card">
            <span>Produto Escalar</span>
            <h3>Ponto</h3>
            <M block={true}>{"\\vec{A}\\cdot\\vec{B}=AB\\cos\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Produto Vetorial</span>
            <h3>Cruz (módulo)</h3>
            <M block={true}>{"|\\vec{A}\\times\\vec{B}|=AB\\sin\\theta"}</M>
          </div>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Escalar ou Vetorial?"
          statement={
            <p>
              Identifique qual das alternativas contém <strong>apenas grandezas vetoriais</strong>:
            </p>
          }
          options={[
            { letter: "a", text: "massa, temperatura, volume" },
            { letter: "b", text: "força, velocidade, aceleração", correct: true },
            { letter: "c", text: "energia, potência, pressão" },
            { letter: "d", text: "tempo, comprimento, corrente elétrica" },
          ]}
          resolution={
            <>
              <p>
                Grandezas vetoriais exigem módulo, direção e sentido. Força, velocidade e
                aceleração são os exemplos clássicos. Massa, temperatura, energia etc. são
                escalares — basta um número e uma unidade para descrevê-las.
              </p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Resultante de Vetores Perpendiculares"
          statement={
            <p>
              Duas forças perpendiculares entre si, de <strong>6 N</strong> e <strong>8 N</strong>,
              atuam simultaneamente sobre um objeto. Qual é o módulo da força resultante?
            </p>
          }
          options={[
            { letter: "a", text: "7 N" },
            { letter: "b", text: "14 N" },
            { letter: "c", text: "10 N", correct: true },
            { letter: "d", text: "12 N" },
          ]}
          resolution={
            <>
              <p>Como os vetores são perpendiculares (<M>{"\\alpha = 90°"}</M>):</p>
              <M block={true}>{"R = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}"}</M>
              <p>Este é o clássico triângulo 3-4-5 multiplicado por 2.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Decomposição de Força em 30°"
          statement={
            <p>
              Uma força de <strong>40 N</strong> atua num ângulo de <strong>30°</strong> acima da
              horizontal. Calcule suas componentes horizontal (<M>{"F_x"}</M>) e vertical (<M>{"F_y"}</M>).
              Dados: <M>{"\\cos 30° = \\frac{\\sqrt{3}}{2} \\approx 0{,}87"}</M> e <M>{"\\sin 30° = 0{,}5"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "Fx = 34,6 N e Fy = 20 N", correct: true },
            { letter: "b", text: "Fx = 20 N e Fy = 34,6 N" },
            { letter: "c", text: "Fx = 20 N e Fy = 20 N" },
            { letter: "d", text: "Fx = 40 N e Fy = 40 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"F_x = F\\cos\\theta = 40 \\times \\cos 30° = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3} \\approx 34{,}6\\text{ N}"}</M>
              <M block={true}>{"F_y = F\\sin\\theta = 40 \\times \\sin 30° = 40 \\times 0{,}5 = 20\\text{ N}"}</M>
              <p>Verificação: <M>{"\\sqrt{34{,}6^2 + 20^2} \\approx \\sqrt{1197 + 400} \\approx 40\\text{ N}"}</M> ✓</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. GPS e Deslocamento Real (ENEM)"
          statement={
            <p>
              Um avião voa <strong>300 km</strong> para o Norte e depois <strong>400 km</strong> para
              o Leste. O GPS indica o deslocamento total em linha reta do ponto de partida ao ponto
              de chegada. Qual é esse deslocamento?
            </p>
          }
          options={[
            { letter: "a", text: "700 km" },
            { letter: "b", text: "350 km" },
            { letter: "c", text: "500 km", correct: true },
            { letter: "d", text: "600 km" },
          ]}
          resolution={
            <>
              <p>
                Norte e Leste são perpendiculares. O deslocamento em linha reta é a hipotenusa:
              </p>
              <M block={true}>{"d = \\sqrt{300^2 + 400^2} = \\sqrt{90000 + 160000} = \\sqrt{250000} = 500\\text{ km}"}</M>
              <p>
                O GPS mede o vetor deslocamento (500 km, diagonal), não a distância percorrida
                (700 km). Essa distinção entre distância e deslocamento é central na Física.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Conversão de Unidades e Notação Científica"
          statement={
            <p>
              (a) Converta 108 km/h para m/s. (b) A massa do próton é{" "}
              <M>{"1{,}67 \\times 10^{-27}"}</M> kg. Qual é a massa de 1 000 prótons em kg na
              notação científica correta?
            </p>
          }
          options={[
            { letter: "a", text: "30 m/s e 1,67×10⁻²⁴ kg", correct: true },
            { letter: "b", text: "30 m/s e 1,67×10⁻²⁷ kg" },
            { letter: "c", text: "108 m/s e 1,67×10⁻²⁴ kg" },
            { letter: "d", text: "3 m/s e 1,67×10⁻³⁰ kg" },
          ]}
          resolution={
            <>
              <p><strong>(a)</strong> Para converter km/h → m/s, divida por 3,6:</p>
              <M block={true}>{"108 \\div 3{,}6 = 30\\text{ m/s}"}</M>
              <p><strong>(b)</strong> Massa de 1 000 = 10³ prótons:</p>
              <M block={true}>{"10^3 \\times 1{,}67 \\times 10^{-27} = 1{,}67 \\times 10^{3+(-27)} = 1{,}67 \\times 10^{-24}\\text{ kg}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
