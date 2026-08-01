"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 7</span>
          <h1>Álgebra: Expressões e Produtos Notáveis</h1>
          <p>
            Aprenda a trabalhar com expressões algébricas, dominar os produtos notáveis
            e aplicar a fatoração — ferramentas que aceleram o cálculo e são
            indispensáveis para equações e funções.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Expressões</span>
        <h2>1. Expressões Algébricas — Conceitos Básicos</h2>
        <p>
          Uma <strong>expressão algébrica</strong> combina números (coeficientes),
          variáveis (letras) e operações. Um <strong>monômio</strong> é um produto
          de coeficiente e potências de variáveis; um <strong>polinômio</strong> é
          a soma de monômios.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Termo</th><th>Definição</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>Monômio</td><td>Um único termo</td><td><M>{"3x^2y"}</M></td></tr>
              <tr><td>Binômio</td><td>Soma de dois termos</td><td><M>{"a+b"}</M></td></tr>
              <tr><td>Trinômio</td><td>Soma de três termos</td><td><M>{"x^2+2x+1"}</M></td></tr>
              <tr><td>Polinômio</td><td>Soma de n termos</td><td><M>{"a_n x^n + \\ldots + a_0"}</M></td></tr>
              <tr><td>Grau</td><td>Maior expoente total</td><td><M>{"3x^2y"}</M> tem grau 3</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Termos semelhantes</h3>
          <p>Só se somam termos com as <em>mesmas variáveis e mesmos expoentes</em>.</p>
          <M block={true}>{"3x^2 + 5x - 2x^2 + 7 = x^2 + 5x + 7"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Operações</span>
        <h2>2. Operações com Polinômios</h2>

        <div className="lesson-highlight">
          <h3>Adição e subtração</h3>
          <M block={true}>{"(3x^2 - 2x + 1) + (x^2 + 5x - 3) = 4x^2 + 3x - 2"}</M>
          <M block={true}>{"(3x^2 - 2x + 1) - (x^2 + 5x - 3) = 2x^2 - 7x + 4"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Multiplicação — distributividade</h3>
          <M block={true}>{"2x \\cdot (3x^2 - x + 4) = 6x^3 - 2x^2 + 8x"}</M>
          <M block={true}>{"(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Produtos Notáveis</span>
        <h2>3. Quadrado da Soma</h2>
        <M block={true}>{"(a + b)^2 = a^2 + 2ab + b^2"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 280 280" width="280" height="280" aria-label="Quadrado da soma — demonstração geométrica">
            <rect x="30" y="30" width="220" height="220" fill="#f0f4ff" stroke="#374151" strokeWidth="2"/>
            <line x1="170" y1="30" x2="170" y2="250" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="30" y1="170" x2="250" y2="170" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3"/>
            <rect x="30" y="30" width="140" height="140" fill="#bfdbfe" stroke="none"/>
            <text x="100" y="105" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1e40af">a²</text>
            <rect x="170" y="30" width="80" height="140" fill="#bbf7d0" stroke="none"/>
            <text x="210" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill="#166534">ab</text>
            <rect x="30" y="170" width="140" height="80" fill="#bbf7d0" stroke="none"/>
            <text x="100" y="215" textAnchor="middle" fontSize="14" fontWeight="700" fill="#166534">ab</text>
            <rect x="170" y="170" width="80" height="80" fill="#fef08a" stroke="none"/>
            <text x="210" y="215" textAnchor="middle" fontSize="14" fontWeight="700" fill="#92400e">b²</text>
            <text x="100" y="22" textAnchor="middle" fontSize="14" fill="#374151">a</text>
            <text x="210" y="22" textAnchor="middle" fontSize="14" fill="#374151">b</text>
            <text x="18" y="105" textAnchor="middle" fontSize="14" fill="#374151">a</text>
            <text x="18" y="215" textAnchor="middle" fontSize="14" fill="#374151">b</text>
          </svg>
          <figcaption>Interpretação geométrica: <M>{"(a+b)^2 = a^2 + 2ab + b^2"}</M></figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Produtos Notáveis</span>
        <h2>4. Quadrado da Diferença e Produto da Soma pela Diferença</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Interpretação geométrica de (a+b)(a-b) = a² - b²">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="2"/>
            {/* Quadrado grande a² — lado a */}
            <rect x="40" y="30" width="160" height="160" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="120" y="118" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1e40af">a²</text>
            <text x="120" y="22" textAnchor="middle" fontSize="13" fill="#1e3a8a">a</text>
            <text x="25" y="115" textAnchor="middle" fontSize="13" fill="#1e3a8a">a</text>
            {/* Quadrado pequeno b² — canto inferior direito (será removido) */}
            <rect x="148" y="138" width="52" height="52" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="174" y="168" textAnchor="middle" fontSize="13" fontWeight="700" fill="#991b1b">b²</text>
            <text x="174" y="202" textAnchor="middle" fontSize="11" fill="#dc2626">(removido)</text>
            {/* Sinal de diferença */}
            <text x="230" y="115" textAnchor="middle" fontSize="28" fontWeight="700" fill="#3b82f6">−</text>
            {/* Quadrado b² separado */}
            <rect x="260" y="79" width="52" height="52" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
            <text x="286" y="110" textAnchor="middle" fontSize="14" fontWeight="700" fill="#991b1b">b²</text>
            <text x="286" y="72" textAnchor="middle" fontSize="13" fill="#1e3a8a">b</text>
            <text x="245" y="108" textAnchor="middle" fontSize="13" fill="#1e3a8a">b</text>
            {/* Sinal de igual */}
            <text x="340" y="115" textAnchor="middle" fontSize="28" fontWeight="700" fill="#3b82f6">=</text>
            {/* Resultado: L-shape representando a²-b² */}
            <rect x="365" y="30" width="160" height="160" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            <rect x="473" y="138" width="52" height="52" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="445" y="118" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1e40af">a²−b²</text>
            <text x="445" y="140" textAnchor="middle" fontSize="12" fill="#1e3a8a">= (a+b)(a−b)</text>
            {/* Label fórmula */}
            <rect x="555" y="60" width="130" height="100" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="620" y="88" textAnchor="middle" fontSize="13" fill="#1e3a8a" fontWeight="700">(a+b)(a−b)</text>
            <text x="620" y="110" textAnchor="middle" fontSize="13" fill="#1e3a8a">= a² − b²</text>
            <text x="620" y="132" textAnchor="middle" fontSize="11" fill="#1e40af">diferença de</text>
            <text x="620" y="148" textAnchor="middle" fontSize="11" fill="#1e40af">quadrados</text>
          </svg>
          <figcaption>Interpretação geométrica: retirar o quadrado b² do quadrado a² resulta na identidade <M>{"(a+b)(a-b) = a^2 - b^2"}</M></figcaption>
        </figure>

        <div className="math-block">
          <h3>Quadrado da diferença</h3>
          <M block={true}>{"(a - b)^2 = a^2 - 2ab + b^2"}</M>
          <p>Exemplo: <M>{"(3x - 2)^2 = 9x^2 - 12x + 4"}</M></p>
        </div>

        <div className="math-block">
          <h3>Produto da soma pela diferença (diferença de quadrados)</h3>
          <M block={true}>{"(a + b)(a - b) = a^2 - b^2"}</M>
          <p>Exemplo: <M>{"(x+5)(x-5) = x^2 - 25"}</M></p>
        </div>

        <div className="lesson-highlight">
          <h3>Cubo da soma e da diferença</h3>
          <M block={true}>{"(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3"}</M>
          <M block={true}>{"(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fatoração</span>
        <h2>5. Fatoração Algébrica — Visão Geral</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Técnica</th><th>Quando usar</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Fator comum</td>
                <td>Há fator que aparece em todos os termos</td>
                <td><M>{"6x^2+9x = 3x(2x+3)"}</M></td>
              </tr>
              <tr>
                <td>Agrupamento</td>
                <td>Pares de termos com fator comum diferente</td>
                <td><M>{"ax+ay+bx+by = (a+b)(x+y)"}</M></td>
              </tr>
              <tr>
                <td>Trinômio perfeito</td>
                <td>Reconhece <M>{"(a\\pm b)^2"}</M></td>
                <td><M>{"x^2+6x+9=(x+3)^2"}</M></td>
              </tr>
              <tr>
                <td>Diferença de quadrados</td>
                <td>Dois quadrados subtraídos</td>
                <td><M>{"x^2-16=(x+4)(x-4)"}</M></td>
              </tr>
              <tr>
                <td>Soma/diferença de cubos</td>
                <td>Cubos somados ou subtraídos</td>
                <td><M>{"x^3-8=(x-2)(x^2+2x+4)"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fatoração</span>
        <h2>6. Soma e Diferença de Cubos</h2>
        <M block={true}>{"a^3 + b^3 = (a+b)(a^2 - ab + b^2)"}</M>
        <M block={true}>{"a^3 - b^3 = (a-b)(a^2 + ab + b^2)"}</M>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"x^3 + 8 = (x+2)(x^2 - 2x + 4)"}</M>
          <M block={true}>{"27x^3 - 1 = (3x-1)(9x^2 + 3x + 1)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Aplicações dos Produtos Notáveis em Cálculo Mental</h2>
        <div className="lesson-highlight">
          <h3>Calcular 99² mentalmente</h3>
          <M block={true}>{"99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Calcular 43 × 57 mentalmente</h3>
          <M block={true}>{"43 \\times 57 = (50-7)(50+7) = 50^2 - 7^2 = 2500 - 49 = 2451"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Calcular 105²</h3>
          <M block={true}>{"105^2 = (100+5)^2 = 10000 + 1000 + 25 = 11025"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisão de Polinômios</span>
        <h2>8. Divisão de Polinômios e Regra de Briot-Ruffini</h2>
        <p>
          Para dividir um polinômio por <M>{"(x - a)"}</M>, usa-se a Regra de Briot-Ruffini,
          que trabalha apenas com os coeficientes.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo: dividir <M>{"x^3 - 6x^2 + 11x - 6"}</M> por <M>{"(x-1)"}</M></h3>
          <p>Coeficientes: 1, −6, 11, −6; divisor: x = 1.</p>
          <M block={true}>{"\\begin{array}{r|rrrr} 1 & 1 & -6 & 11 & -6 \\\\ & & 1 & -5 & 6 \\\\ \\hline & 1 & -5 & 6 & 0 \\end{array}"}</M>
          <p>Quociente: <M>{"x^2 - 5x + 6"}</M>; resto: 0.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidades</span>
        <h2>9. Identidades Polinomiais Importantes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Identidade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Quad. da soma</td><td><M>{"(a+b)^2 = a^2+2ab+b^2"}</M></td></tr>
              <tr><td>Quad. da diferença</td><td><M>{"(a-b)^2 = a^2-2ab+b^2"}</M></td></tr>
              <tr><td>Dif. de quadrados</td><td><M>{"(a+b)(a-b) = a^2-b^2"}</M></td></tr>
              <tr><td>Cubo da soma</td><td><M>{"(a+b)^3 = a^3+3a^2b+3ab^2+b^3"}</M></td></tr>
              <tr><td>Cubo da diferença</td><td><M>{"(a-b)^3 = a^3-3a^2b+3ab^2-b^3"}</M></td></tr>
              <tr><td>Soma de cubos</td><td><M>{"a^3+b^3=(a+b)(a^2-ab+b^2)"}</M></td></tr>
              <tr><td>Dif. de cubos</td><td><M>{"a^3-b^3=(a-b)(a^2+ab+b^2)"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Estratégias de Fatoração — Fluxograma</h2>
        <div className="lesson-highlight">
          <h3>Ordem de tentativas</h3>
          <ol>
            <li>Fator comum em todos os termos?</li>
            <li>Dois termos? → Diferença de quadrados ou soma/dif. de cubos.</li>
            <li>Três termos? → Trinômio quadrado perfeito ou fatoração por tentativa.</li>
            <li>Quatro ou mais termos? → Agrupamento.</li>
          </ol>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Produto notável"
          statement={
            <p>Expanda: <M>{"(2x - 3)^2"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"4x^2 - 9"}</M> },
            { letter: "b", text: <M>{"4x^2 - 12x + 9"}</M>, correct: true },
            { letter: "c", text: <M>{"4x^2 + 12x + 9"}</M> },
            { letter: "d", text: <M>{"4x^2 - 6x + 9"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"(2x-3)^2 = (2x)^2 - 2 \\cdot 2x \\cdot 3 + 3^2 = 4x^2 - 12x + 9"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Fatoração completa"
          statement={
            <p>Fatore completamente: <M>{"2x^3 - 8x"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"2x(x^2-4)"}</M> },
            { letter: "b", text: <M>{"2x(x+2)(x-2)"}</M>, correct: true },
            { letter: "c", text: <M>{"x(2x^2-8)"}</M> },
            { letter: "d", text: <M>{"2(x^3-4x)"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"2x^3 - 8x = 2x(x^2 - 4) = 2x(x+2)(x-2)"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Identidade com cubo"
          statement={
            <p>Expanda e simplifique: <M>{"(a+b)^3 - (a-b)^3"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"2a^3"}</M> },
            { letter: "b", text: <M>{"6a^2b + 2b^3"}</M>, correct: true },
            { letter: "c", text: <M>{"2b^3"}</M> },
            { letter: "d", text: <M>{"8a^2b"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"(a+b)^3 = a^3+3a^2b+3ab^2+b^3"}</M>
              <M block={true}>{"(a-b)^3 = a^3-3a^2b+3ab^2-b^3"}</M>
              <M block={true}>{"\\text{Diferença} = 6a^2b + 2b^3"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Área de quadro decorativo"
          statement={
            <p>
              Um quadro quadrado tem lado <M>{"(x+4)"}</M> cm. Uma moldura de 2 cm
              de largura reduz a área da imagem para <M>{"(x+4-4)^2"}</M> cm².
              Expanda a área da imagem.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"x^2 + 8x + 16"}</M> },
            { letter: "b", text: <M>{"x^2 - 16"}</M> },
            { letter: "c", text: <M>{"x^2"}</M>, correct: true },
            { letter: "d", text: <M>{"x^2 + 4x"}</M> },
          ]}
          resolution={
            <>
              <p>Lado da imagem: <M>{"(x+4) - 4 = x"}</M>.</p>
              <M block={true}>{"\\text{Área imagem} = x^2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cálculo mental com produto notável"
          statement={
            <p>
              Um engenheiro precisa calcular <M>{"202 \\times 198"}</M> sem calculadora
              para estimar a área de um painel. Qual é o resultado?
            </p>
          }
          options={[
            { letter: "a", text: "40.000" },
            { letter: "b", text: "39.996", correct: true },
            { letter: "c", text: "39.984" },
            { letter: "d", text: "40.404" },
          ]}
          resolution={
            <>
              <M block={true}>{"202 \\times 198 = (200+2)(200-2) = 200^2 - 2^2 = 40000 - 4 = 39996"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
