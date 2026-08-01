"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 6</span>
          <h1>Potenciação e Radiciação</h1>
          <p>
            Domine as propriedades das potências e raízes, a racionalização de
            denominadores e a simplificação de expressões com radicais — habilidades
            essenciais para álgebra e trigonometria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Potências</span>
        <h2>1. Definição de Potência</h2>
        <p>
          A potência <M>{"a^n"}</M> representa o produto de <M>{"n"}</M> fatores iguais a <M>{"a"}</M>:
        </p>
        <M block={true}>{"a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ fatores}}, \\quad a \\in \\mathbb{R},\\; n \\in \\mathbb{N}"}</M>
        <p>
          <M>{"a"}</M> é a <strong>base</strong>; <M>{"n"}</M> é o <strong>expoente</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Escada de potências de 2: 2¹=2, 2²=4, 2³=8, 2⁴=16">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="2"/>
            {/* Degrau 1 */}
            <rect x="60" y="160" width="120" height="40" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5"/>
            <text x="120" y="185" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">2¹ = 2</text>
            {/* Degrau 2 */}
            <rect x="60" y="120" width="120" height="40" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5"/>
            <text x="120" y="145" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">2² = 4</text>
            {/* Degrau 3 */}
            <rect x="60" y="80" width="120" height="40" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="1.5"/>
            <text x="120" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">2³ = 8</text>
            {/* Degrau 4 */}
            <rect x="60" y="40" width="120" height="40" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1.5"/>
            <text x="120" y="65" textAnchor="middle" fontSize="14" fontWeight="700" fill="#facc15">2⁴ = 16</text>
            {/* Linha base */}
            <line x1="40" y1="200" x2="210" y2="200" stroke="#1e3a8a" strokeWidth="2"/>
            {/* Seta subindo */}
            <line x1="220" y1="195" x2="220" y2="45" stroke="#3b82f6" strokeWidth="2"/>
            <polygon points="215,50 220,38 225,50" fill="#3b82f6"/>
            <text x="232" y="120" textAnchor="start" fontSize="12" fill="#1e40af" fontWeight="700">× 2</text>
            {/* Explicações laterais */}
            <text x="360" y="65" textAnchor="start" fontSize="13" fill="#1e3a8a">Cada degrau multiplica por 2.</text>
            <text x="360" y="90" textAnchor="start" fontSize="13" fill="#1e3a8a">O expoente conta quantas</text>
            <text x="360" y="110" textAnchor="start" fontSize="13" fill="#1e3a8a">vezes a base se multiplica.</text>
            <rect x="350" y="130" width="300" height="60" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="500" y="155" textAnchor="middle" fontSize="13" fill="#1e3a8a">2¹ → 2² → 2³ → 2⁴</text>
            <text x="500" y="178" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">2 → 4 → 8 → 16</text>
          </svg>
          <figcaption>Escada das potências de 2: cada degrau representa um expoente a mais, dobrando o valor anterior</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Expressão</th><th>Resultado</th><th>Observação</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"a^0"}</M></td><td><M>{"1"}</M></td><td>Qualquer base (≠0) elevada a 0 é 1</td></tr>
              <tr><td><M>{"a^1"}</M></td><td><M>{"a"}</M></td><td>Expoente 1: resultado igual à base</td></tr>
              <tr><td><M>{"a^{-n}"}</M></td><td><M>{"\\dfrac{1}{a^n}"}</M></td><td>Expoente negativo → inverso</td></tr>
              <tr><td><M>{"0^n"}</M></td><td><M>{"0"}</M></td><td>Para <M>{"n > 0"}</M></td></tr>
              <tr><td><M>{"(-a)^n"}</M></td><td>+ se n par, − se n ímpar</td><td>Sinal depende do expoente</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>2. Propriedades das Potências</h2>

        <div className="math-grid">
          <div className="math-card">
            <span>P1</span>
            <h3>Produto de mesma base</h3>
            <M block={true}>{"a^m \\cdot a^n = a^{m+n}"}</M>
          </div>
          <div className="math-card">
            <span>P2</span>
            <h3>Quociente de mesma base</h3>
            <M block={true}>{"\\frac{a^m}{a^n} = a^{m-n}"}</M>
          </div>
          <div className="math-card">
            <span>P3</span>
            <h3>Potência de potência</h3>
            <M block={true}>{"(a^m)^n = a^{m \\cdot n}"}</M>
          </div>
          <div className="math-card">
            <span>P4</span>
            <h3>Produto de bases — mesmo expoente</h3>
            <M block={true}>{"(ab)^n = a^n \\cdot b^n"}</M>
          </div>
          <div className="math-card">
            <span>P5</span>
            <h3>Fração — mesmo expoente</h3>
            <M block={true}>{"\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>3. Aplicação das Propriedades — Exemplos Resolvidos</h2>
        <div className="lesson-highlight">
          <h3>Simplificações</h3>
          <M block={true}>{"\\frac{2^5 \\cdot 4^3}{8^2} = \\frac{2^5 \\cdot 2^6}{2^6} = 2^5 = 32"}</M>
          <M block={true}>{"\\left(\\frac{3^2}{3^{-1}}\\right)^2 = (3^{2-(-1)})^2 = (3^3)^2 = 3^6 = 729"}</M>
          <M block={true}>{"\\frac{6^4 \\cdot 9^2}{3^6 \\cdot 4^2} = \\frac{2^4 \\cdot 3^4 \\cdot 3^4}{3^6 \\cdot 2^4} = 3^{4+4-6} = 3^2 = 9"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raízes</span>
        <h2>4. Definição de Raiz n-ésima</h2>
        <p>
          <M>{"\\sqrt[n]{a}"}</M> é o número <M>{"b"}</M> tal que <M>{"b^n = a"}</M>.
          O símbolo <M>{"\\sqrt{\\phantom{a}}"}</M> é o <strong>radical</strong>;
          <M>{"n"}</M> é o <strong>índice</strong>; <M>{"a"}</M> é o <strong>radicando</strong>.
        </p>
        <M block={true}>{"\\sqrt[n]{a} = a^{\\frac{1}{n}}"}</M>
        <M block={true}>{"\\sqrt[n]{a^m} = a^{\\frac{m}{n}}"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Triângulo mostrando relação inversa entre raiz e potência">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="2"/>
            {/* Triângulo principal */}
            <polygon points="350,30 160,185 540,185" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Vértice topo — a */}
            <circle cx="350" cy="30" r="22" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2"/>
            <text x="350" y="36" textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">a</text>
            {/* Vértice esq — √a² */}
            <circle cx="160" cy="185" r="28" fill="#facc15" stroke="#ca8a04" strokeWidth="2"/>
            <text x="160" y="181" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a8a">√a²</text>
            <text x="160" y="197" textAnchor="middle" fontSize="11" fill="#1e3a8a">= a</text>
            {/* Vértice dir — a² */}
            <circle cx="540" cy="185" r="28" fill="#facc15" stroke="#ca8a04" strokeWidth="2"/>
            <text x="540" y="181" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a8a">a²</text>
            <text x="540" y="197" textAnchor="middle" fontSize="11" fill="#1e3a8a">= a·a</text>
            {/* Seta lado esq: potência */}
            <text x="228" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af" transform="rotate(-50,228,95)">elevar ao quadrado →</text>
            {/* Seta lado dir: raiz */}
            <text x="472" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af" transform="rotate(50,472,95)">← extrair raiz √</text>
            {/* Legenda base */}
            <text x="350" y="210" textAnchor="middle" fontSize="13" fill="#1e3a8a" fontWeight="700">√a² = a  (operações inversas)</text>
          </svg>
          <figcaption>Relação inversa entre potência e raiz: elevar ao quadrado e extrair raiz quadrada são operações que se desfazem mutuamente</figcaption>
        </figure>

        <div className="lesson-highlight warning">
          <h3>Raiz com índice par — restrição de sinal</h3>
          <p>
            Para índice par, o radicando deve ser <M>{"\\geq 0"}</M> em ℝ.
            <M>{" \\sqrt{-4}"}</M> não é real (pertence a ℂ).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades de Raízes</span>
        <h2>5. Propriedades dos Radicais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Produto de radicais (mesmo índice)</td>
                <td><M>{"\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}"}</M></td>
              </tr>
              <tr>
                <td>Quociente de radicais (mesmo índice)</td>
                <td><M>{"\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\dfrac{a}{b}}"}</M></td>
              </tr>
              <tr>
                <td>Potência de radical</td>
                <td><M>{"(\\sqrt[n]{a})^m = \\sqrt[n]{a^m} = a^{m/n}"}</M></td>
              </tr>
              <tr>
                <td>Radical de radical</td>
                <td><M>{"\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{\\frac{1}{mn}}"}</M></td>
              </tr>
              <tr>
                <td>Simplificação do índice</td>
                <td><M>{"\\sqrt[nm]{a^{nk}} = \\sqrt[m]{a^k}"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Simplificação</span>
        <h2>6. Simplificação de Radicais</h2>
        <div className="math-block">
          <h3>Retirando fatores do radical</h3>
          <M block={true}>{"\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}"}</M>
          <M block={true}>{"\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}"}</M>
          <M block={true}>{"\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = 3\\sqrt[3]{2}"}</M>
        </div>

        <div className="math-block">
          <h3>Somando e subtraindo radicais semelhantes</h3>
          <M block={true}>{"3\\sqrt{2} + 5\\sqrt{2} - \\sqrt{2} = 7\\sqrt{2}"}</M>
          <M block={true}>{"\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Racionalização</span>
        <h2>7. Racionalização de Denominadores</h2>
        <p>
          Racionalizar significa eliminar radicais do denominador multiplicando por um
          fator conveniente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Caso 1</span>
            <h3>Denominador monomial</h3>
            <M block={true}>{"\\frac{1}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}"}</M>
            <M block={true}>{"\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}"}</M>
          </div>
          <div className="lesson-card">
            <span>Caso 2</span>
            <h3>Denominador binomial com √</h3>
            <p>Multiplique pelo conjugado:</p>
            <M block={true}>{"\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a - b}"}</M>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo — denominador binomial</h3>
          <M block={true}>{"\\frac{4}{\\sqrt{5}-1} = \\frac{4(\\sqrt{5}+1)}{(\\sqrt{5})^2 - 1^2} = \\frac{4(\\sqrt{5}+1)}{4} = \\sqrt{5}+1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Expoentes Fracionários</span>
        <h2>8. Notação de Potência com Expoente Racional</h2>
        <M block={true}>{"a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Radical</th><th>Potência</th><th>Valor (a=8)</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\sqrt{a}"}</M></td><td><M>{"a^{1/2}"}</M></td><td><M>{"8^{1/2} = 2\\sqrt{2}"}</M></td></tr>
              <tr><td><M>{"\\sqrt[3]{a}"}</M></td><td><M>{"a^{1/3}"}</M></td><td><M>{"8^{1/3} = 2"}</M></td></tr>
              <tr><td><M>{"\\sqrt[3]{a^2}"}</M></td><td><M>{"a^{2/3}"}</M></td><td><M>{"8^{2/3} = 4"}</M></td></tr>
              <tr><td><M>{"\\sqrt[4]{a^3}"}</M></td><td><M>{"a^{3/4}"}</M></td><td><M>{"16^{3/4} = 8"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros Comuns</span>
        <h2>9. Erros Frequentes e Como Evitá-los</h2>
        <div className="lesson-highlight warning">
          <h3>Não some bases — some expoentes (mesma base)</h3>
          <M block={true}>{"2^3 + 2^3 \\neq 2^6 \\quad (\\text{correto: } 2 \\times 2^3 = 2^4)"}</M>
        </div>
        <div className="lesson-highlight warning">
          <h3>Raiz não distribui sobre soma</h3>
          <M block={true}>{"\\sqrt{a^2 + b^2} \\neq a + b"}</M>
        </div>
        <div className="lesson-highlight warning">
          <h3>Base negativa com expoente par</h3>
          <M block={true}>{"(-3)^2 = 9 \\neq -9 \\quad \\text{mas} \\quad -3^2 = -9"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Tabela Resumo — Potências e Raízes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conceito</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Produto mesma base</td><td><M>{"a^m \\cdot a^n = a^{m+n}"}</M></td></tr>
              <tr><td>Quociente mesma base</td><td><M>{"a^m / a^n = a^{m-n}"}</M></td></tr>
              <tr><td>Potência de potência</td><td><M>{"(a^m)^n = a^{mn}"}</M></td></tr>
              <tr><td>Expoente negativo</td><td><M>{"a^{-n} = 1/a^n"}</M></td></tr>
              <tr><td>Radical como potência</td><td><M>{"\\sqrt[n]{a^m} = a^{m/n}"}</M></td></tr>
              <tr><td>Produto de radicais</td><td><M>{"\\sqrt[n]{a}\\cdot\\sqrt[n]{b}=\\sqrt[n]{ab}"}</M></td></tr>
              <tr><td>Racionalização</td><td><M>{"1/\\sqrt{a} = \\sqrt{a}/a"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Propriedade de potências"
          statement={
            <p>Simplifique: <M>{"\\dfrac{3^7 \\cdot 9^2}{27^3}"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"3^4 = 81"}</M> },
            { letter: "b", text: <M>{"3^2 = 9"}</M>, correct: true },
            { letter: "c", text: <M>{"3^3 = 27"}</M> },
            { letter: "d", text: <M>{"3^5 = 243"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{3^7 \\cdot 3^4}{3^9} = \\frac{3^{11}}{3^9} = 3^2 = 9"}</M>
              <p>(<M>{"9^2 = 3^4"}</M> e <M>{"27^3 = 3^9"}</M>)</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Simplificação de radical"
          statement={
            <p>Simplifique: <M>{"\\sqrt{75} + \\sqrt{48} - \\sqrt{27}"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"5\\sqrt{3}"}</M> },
            { letter: "b", text: <M>{"6\\sqrt{3}"}</M>, correct: true },
            { letter: "c", text: <M>{"8\\sqrt{3}"}</M> },
            { letter: "d", text: <M>{"4\\sqrt{3}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sqrt{75}=5\\sqrt{3},\\quad \\sqrt{48}=4\\sqrt{3},\\quad \\sqrt{27}=3\\sqrt{3}"}</M>
              <M block={true}>{"5\\sqrt{3}+4\\sqrt{3}-3\\sqrt{3}=6\\sqrt{3}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Racionalização binomial"
          statement={
            <p>Racionalize e simplifique: <M>{"\\dfrac{6}{\\sqrt{3}+\\sqrt{2}}"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"6(\\sqrt{3}-\\sqrt{2})"}</M>, correct: true },
            { letter: "b", text: <M>{"3(\\sqrt{3}-\\sqrt{2})"}</M> },
            { letter: "c", text: <M>{"6\\sqrt{5}"}</M> },
            { letter: "d", text: <M>{"2(\\sqrt{3}+\\sqrt{2})"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{6}{\\sqrt{3}+\\sqrt{2}} \\cdot \\frac{\\sqrt{3}-\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}} = \\frac{6(\\sqrt{3}-\\sqrt{2})}{3-2} = 6(\\sqrt{3}-\\sqrt{2})"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Potência em escala científica"
          statement={
            <p>
              O Sol está a aproximadamente <M>{"1{,}5 \\times 10^{11}"}</M> m da Terra.
              A luz viaja a <M>{"3 \\times 10^8"}</M> m/s. Em quantos segundos a luz do Sol
              chega à Terra?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"5 \\times 10^2 \\text{ s}"}</M>, correct: true },
            { letter: "b", text: <M>{"5 \\times 10^3 \\text{ s}"}</M> },
            { letter: "c", text: <M>{"4{,}5 \\times 10^{19} \\text{ s}"}</M> },
            { letter: "d", text: <M>{"0{,}5 \\times 10^2 \\text{ s}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"t = \\frac{1{,}5 \\times 10^{11}}{3 \\times 10^8} = 0{,}5 \\times 10^3 = 5 \\times 10^2 \\approx 500 \\text{ s} \\approx 8{,}3 \\text{ min}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Raiz no cálculo de área"
          statement={
            <p>
              Um terreno quadrado tem área de 1.800 m². Qual é o comprimento do lado
              em forma simplificada?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"30\\sqrt{2} \\text{ m}"}</M>, correct: true },
            { letter: "b", text: <M>{"42 \\text{ m}"}</M> },
            { letter: "c", text: <M>{"60 \\text{ m}"}</M> },
            { letter: "d", text: <M>{"15\\sqrt{8} \\text{ m}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"l = \\sqrt{1800} = \\sqrt{900 \\cdot 2} = 30\\sqrt{2} \\approx 42{,}4 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
