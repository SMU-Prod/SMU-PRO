"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 10</span>
          <h1>Funções — Conceito e Tipos</h1>
          <p>
            Compreenda o conceito formal de função, domínio, contradomínio e imagem.
            Estude funções injetora, sobrejetora e bijetora, função composta e inversa —
            fundamentos de toda a análise matemática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. O que é uma Função?</h2>
        <p>
          Uma <strong>função</strong> f de A em B (<M>{"f: A \\to B"}</M>) é uma relação
          que associa a cada elemento de A <em>exatamente um</em> elemento de B.
        </p>
        <M block={true}>{"f: A \\to B,\\quad \\forall\\, a \\in A,\\; \\exists!\\, b \\in B: f(a) = b"}</M>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>A</span>
            <h3>Domínio</h3>
            <p>Conjunto dos valores de entrada (valores de x para os quais f é definida).</p>
          </div>
          <div className="lesson-card">
            <span>B</span>
            <h3>Contradomínio</h3>
            <p>Conjunto de chegada — onde os valores de f devem "cair".</p>
          </div>
          <div className="lesson-card">
            <span>Im</span>
            <h3>Imagem</h3>
            <p>Conjunto dos valores <em>realmente assumidos</em> por f. Im(f) ⊆ B.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 320 160" width="320" height="160" aria-label="Diagrama de função">
            <ellipse cx="80" cy="80" rx="60" ry="65" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="80" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e40af">A (domínio)</text>
            <ellipse cx="240" cy="80" rx="60" ry="65" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="240" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="#166534">B (CD)</text>
            <circle cx="80" cy="55" r="4" fill="#1e40af"/>
            <text x="68" y="58" textAnchor="end" fontSize="12" fill="#1e40af">a₁</text>
            <circle cx="80" cy="85" r="4" fill="#1e40af"/>
            <text x="68" y="88" textAnchor="end" fontSize="12" fill="#1e40af">a₂</text>
            <circle cx="80" cy="115" r="4" fill="#1e40af"/>
            <text x="68" y="118" textAnchor="end" fontSize="12" fill="#1e40af">a₃</text>
            <circle cx="240" cy="55" r="4" fill="#166534"/>
            <text x="248" y="58" fontSize="12" fill="#166534">b₁</text>
            <circle cx="240" cy="85" r="4" fill="#166534"/>
            <text x="248" y="88" fontSize="12" fill="#166534">b₂</text>
            <circle cx="240" cy="115" r="4" fill="#888"/>
            <text x="248" y="118" fontSize="12" fill="#888">b₃</text>
            <line x1="84" y1="55" x2="232" y2="55" stroke="#2563eb" strokeWidth="1.5"/>
            <polygon points="232,55 220,50 220,60" fill="#2563eb"/>
            <line x1="84" y1="85" x2="232" y2="85" stroke="#2563eb" strokeWidth="1.5"/>
            <polygon points="232,85 220,80 220,90" fill="#2563eb"/>
            <line x1="84" y1="115" x2="232" y2="57" stroke="#2563eb" strokeWidth="1.5"/>
            <polygon points="232,57 220,52 220,62" fill="#2563eb"/>
            <rect x="212" y="42" width="56" height="53" rx="5" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,2"/>
            <text x="240" y="108" textAnchor="middle" fontSize="10" fill="#dc2626">Im(f)</text>
          </svg>
          <figcaption>Diagrama de flechas: b₃ não é atingido (não está na imagem)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condições</span>
        <h2>2. Quando uma Relação NÃO é Função?</h2>
        <div className="lesson-highlight warning">
          <h3>Violação da unicidade</h3>
          <p>
            Se algum elemento de A aponta para <em>mais de um</em> elemento de B,
            a relação não é função.
          </p>
        </div>
        <div className="lesson-highlight warning">
          <h3>Elemento sem imagem</h3>
          <p>
            Se algum elemento de A não tem nenhuma imagem em B, a relação também não
            é função (falta o "para todo a em A").
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>
        <h2>3. Funções Injetora, Sobrejetora e Bijetora</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Definição</th><th>Implicação</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Injetora (1-1)</td>
                <td>Elementos distintos têm imagens distintas: <M>{"a_1 \\neq a_2 \\Rightarrow f(a_1) \\neq f(a_2)"}</M></td>
                <td>Im(f) pode ser subconjunto próprio de B</td>
              </tr>
              <tr>
                <td>Sobrejetora (onto)</td>
                <td>Todo elemento de B é imagem de algum elemento de A: <M>{"\\text{Im}(f) = B"}</M></td>
                <td>Nenhum elemento de B é "deixado de fora"</td>
              </tr>
              <tr>
                <td>Bijetora</td>
                <td>Injetora E sobrejetora</td>
                <td>Existe inversa <M>{"f^{-1}: B \\to A"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Domínio</span>
        <h2>4. Determinação do Domínio Natural</h2>
        <p>
          O domínio natural é o maior subconjunto de ℝ para o qual a expressão faz sentido.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Expressão</th><th>Restrição</th><th>Domínio</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><M>{"\\dfrac{1}{x-2}"}</M></td>
                <td><M>{"x \\neq 2"}</M></td>
                <td><M>{"\\mathbb{R} \\setminus \\{2\\}"}</M></td>
              </tr>
              <tr>
                <td><M>{"\\sqrt{x-3}"}</M></td>
                <td><M>{"x \\geq 3"}</M></td>
                <td><M>{"[3, +\\infty)"}</M></td>
              </tr>
              <tr>
                <td><M>{"\\ln(x)"}</M></td>
                <td><M>{"x > 0"}</M></td>
                <td><M>{"(0, +\\infty)"}</M></td>
              </tr>
              <tr>
                <td><M>{"\\sqrt{\\dfrac{x+1}{x-1}}"}</M></td>
                <td>Radicando <M>{"\\geq 0"}</M>, den. <M>{"\\neq 0"}</M></td>
                <td><M>{"(-\\infty,-1] \\cup (1,+\\infty)"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Composição</span>
        <h2>5. Função Composta</h2>
        <p>
          A <strong>composição</strong> <M>{"(g \\circ f)(x) = g(f(x))"}</M>
          significa: primeiro aplica f, depois aplica g ao resultado.
        </p>
        <M block={true}>{"(g \\circ f)(x) = g(f(x))"}</M>

        <div className="lesson-highlight warning">
          <h3>Composição NÃO é comutativa em geral</h3>
          <M block={true}>{"g \\circ f \\neq f \\circ g \\text{ (em geral)}"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"f(x) = 2x+1,\\quad g(x) = x^2"}</M>
          <M block={true}>{"(g \\circ f)(x) = g(2x+1) = (2x+1)^2 = 4x^2+4x+1"}</M>
          <M block={true}>{"(f \\circ g)(x) = f(x^2) = 2x^2+1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função Inversa</span>
        <h2>6. Função Inversa</h2>
        <p>
          Se f é bijetora, existe a função inversa <M>{"f^{-1}: B \\to A"}</M>
          tal que <M>{"f^{-1}(f(x)) = x"}</M>.
        </p>
        <div className="math-block">
          <h3>Como encontrar a inversa</h3>
          <ol>
            <li>Escreva <M>{"y = f(x)"}</M>.</li>
            <li>Isole x em função de y.</li>
            <li>Troque x e y → obtenha <M>{"f^{-1}(x)"}</M>.</li>
          </ol>
          <M block={true}>{"f(x) = 3x - 6 \\Rightarrow y = 3x-6 \\Rightarrow x = \\frac{y+6}{3} \\Rightarrow f^{-1}(x) = \\frac{x+6}{3}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>7. Gráfico de Funções e Teste da Reta Vertical</h2>
        <p>
          Um gráfico representa uma função se e somente se toda reta vertical intersecta
          o gráfico em <strong>no máximo um ponto</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 160" width="380" height="160" aria-label="Teste da reta vertical">
            <text x="80" y="14" textAnchor="middle" fontSize="12" fill="#16a34a" fontWeight="700">✓ É função</text>
            <line x1="20" y1="80" x2="155" y2="80" stroke="#374151" strokeWidth="1"/>
            <line x1="80" y1="20" x2="80" y2="140" stroke="#374151" strokeWidth="1"/>
            <path d="M 25 130 Q 70 30 150 75" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <circle cx="100" cy="65" r="4" fill="#16a34a"/>
            <text x="115" y="50" fontSize="10" fill="#16a34a">1 ponto</text>
            <text x="280" y="14" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="700">✗ Não é função</text>
            <line x1="215" y1="80" x2="355" y2="80" stroke="#374151" strokeWidth="1"/>
            <line x1="280" y1="20" x2="280" y2="140" stroke="#374151" strokeWidth="1"/>
            <ellipse cx="280" cy="80" rx="50" ry="45" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
            <line x1="310" y1="20" x2="310" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            <circle cx="310" cy="52" r="4" fill="#dc2626"/>
            <circle cx="310" cy="108" r="4" fill="#dc2626"/>
            <text x="325" y="50" fontSize="10" fill="#dc2626">2 pontos</text>
          </svg>
          <figcaption>Teste da reta vertical: à esquerda é função; à direita (circunferência) não é</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Funções Especiais</span>
        <h2>8. Funções Notáveis — Tabela Rápida</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Função</th><th>Lei</th><th>Domínio</th><th>Imagem</th><th>Gráfico</th></tr>
            </thead>
            <tbody>
              <tr><td>Constante</td><td><M>{"f(x)=k"}</M></td><td>ℝ</td><td><M>{"\\{k\\}"}</M></td><td>Reta horizontal</td></tr>
              <tr><td>Identidade</td><td><M>{"f(x)=x"}</M></td><td>ℝ</td><td>ℝ</td><td>Bissetriz y=x</td></tr>
              <tr><td>Linear</td><td><M>{"f(x)=ax+b"}</M></td><td>ℝ</td><td>ℝ</td><td>Reta oblíqua</td></tr>
              <tr><td>Quadrática</td><td><M>{"f(x)=ax^2+bx+c"}</M></td><td>ℝ</td><td>Depende de a</td><td>Parábola</td></tr>
              <tr><td>Módulo</td><td><M>{"f(x)=|x|"}</M></td><td>ℝ</td><td><M>{"[0,+\\infty)"}</M></td><td>V</td></tr>
              <tr><td>Raiz quadrada</td><td><M>{"f(x)=\\sqrt{x}"}</M></td><td><M>{"[0,+\\infty)"}</M></td><td><M>{"[0,+\\infty)"}</M></td><td>Meia parábola</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Paridade</span>
        <h2>9. Funções Pares e Ímpares</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Par</span>
            <h3>Função par</h3>
            <M block={true}>{"f(-x) = f(x)"}</M>
            <p>Simétrica em relação ao eixo y.</p>
            <p>Exemplo: <M>{"f(x) = x^2"}</M></p>
          </div>
          <div className="lesson-card">
            <span>Ímpar</span>
            <h3>Função ímpar</h3>
            <M block={true}>{"f(-x) = -f(x)"}</M>
            <p>Simétrica em relação à origem.</p>
            <p>Exemplo: <M>{"f(x) = x^3"}</M></p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Conceito de Função</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Função = associação com unicidade: um x → exatamente um y.</li>
            <li>Domínio: conjunto de partida; Imagem ⊆ Contradomínio.</li>
            <li>Injetora: imagens distintas; Sobrejetora: Im=B; Bijetora: admite inversa.</li>
            <li>Composta: <M>{"(g\\circ f)(x)=g(f(x))"}</M> — atenção à ordem.</li>
            <li>Inversa: existe se e só se f é bijetora.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Domínio de função"
          statement={
            <p>Qual é o domínio de <M>{"f(x) = \\dfrac{1}{x^2 - 9}"}</M>?</p>
          }
          options={[
            { letter: "a", text: <M>{"\\mathbb{R}"}</M> },
            { letter: "b", text: <M>{"\\mathbb{R} \\setminus \\{-3, 3\\}"}</M>, correct: true },
            { letter: "c", text: <M>{"(-3, 3)"}</M> },
            { letter: "d", text: <M>{"\\mathbb{R} \\setminus \\{9\\}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"x^2 - 9 \\neq 0 \\Rightarrow x \\neq \\pm 3"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Função composta"
          statement={
            <p>
              Dadas <M>{"f(x) = x + 2"}</M> e <M>{"g(x) = x^2 - 1"}</M>,
              calcule <M>{"(f \\circ g)(3)"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "10", correct: true },
            { letter: "c", text: "24" },
            { letter: "d", text: "11" },
          ]}
          resolution={
            <>
              <M block={true}>{"g(3) = 9 - 1 = 8 \\Rightarrow f(g(3)) = f(8) = 8 + 2 = 10"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Função inversa"
          statement={
            <p>Encontre a inversa de <M>{"f(x) = \\dfrac{2x+1}{x-3}"}</M> (para <M>{"x\\neq3"}</M>).</p>
          }
          options={[
            { letter: "a", text: <M>{"f^{-1}(x) = \\dfrac{3x+1}{x-2}"}</M>, correct: true },
            { letter: "b", text: <M>{"f^{-1}(x) = \\dfrac{x-3}{2x+1}"}</M> },
            { letter: "c", text: <M>{"f^{-1}(x) = \\dfrac{x+3}{2x-1}"}</M> },
            { letter: "d", text: <M>{"f^{-1}(x) = \\dfrac{2x-1}{x+3}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"y = \\frac{2x+1}{x-3} \\Rightarrow y(x-3) = 2x+1 \\Rightarrow x(y-2) = 3y+1"}</M>
              <M block={true}>{"x = \\frac{3y+1}{y-2} \\Rightarrow f^{-1}(x) = \\frac{3x+1}{x-2}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Conversão de temperatura"
          statement={
            <p>
              A função <M>{"F(C) = \\dfrac{9}{5}C + 32"}</M> converte Celsius para Fahrenheit.
              Qual é a temperatura em Celsius de 98,6°F?
            </p>
          }
          options={[
            { letter: "a", text: "72°C" },
            { letter: "b", text: "37°C", correct: true },
            { letter: "c", text: "145°C" },
            { letter: "d", text: "119°C" },
          ]}
          resolution={
            <>
              <M block={true}>{"C(F) = \\frac{5(F-32)}{9}"}</M>
              <M block={true}>{"C(98{,}6) = \\frac{5 \\times 66{,}6}{9} = \\frac{333}{9} = 37^\\circ C"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Função composta em custo de produção"
          statement={
            <p>
              O custo de x unidades é <M>{"C(x) = 10x + 500"}</M>.
              Em t horas produz-se <M>{"x(t) = 5t"}</M> unidades.
              Qual é o custo em função do tempo?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"C(t) = 50t + 5"}</M> },
            { letter: "b", text: <M>{"C(t) = 50t + 500"}</M>, correct: true },
            { letter: "c", text: <M>{"C(t) = 15t + 500"}</M> },
            { letter: "d", text: <M>{"C(t) = 10t + 500"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"C(x(t)) = C(5t) = 10 \\cdot 5t + 500 = 50t + 500"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
