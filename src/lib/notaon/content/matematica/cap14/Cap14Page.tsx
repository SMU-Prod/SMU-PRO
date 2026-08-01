"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 14</span>
          <h1>Função Logarítmica</h1>
          <p>
            Entenda o logaritmo como inverso da exponencial, domine suas propriedades
            e aplique em equações logarítmicas, escala pH, decibéis e magnitude
            de terremotos — fenômenos medidos em escala logarítmica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição de Logaritmo</h2>
        <p>
          O logaritmo de b na base a é o expoente x tal que <M>{"a^x = b"}</M>:
        </p>
        <M block={true}>{"\\log_a b = x \\iff a^x = b, \\quad a > 0,\\; a \\neq 1,\\; b > 0"}</M>

        <div className="lesson-highlight">
          <h3>Leitura e notação</h3>
          <ul>
            <li><M>{"\\log_2 8 = 3"}</M> pois <M>{"2^3 = 8"}</M></li>
            <li><M>{"\\log_{10} 1000 = 3"}</M> pois <M>{"10^3 = 1000"}</M></li>
            <li><M>{"\\log_5 1 = 0"}</M> pois <M>{"5^0 = 1"}</M></li>
            <li><M>{"\\log_a a = 1"}</M> pois <M>{"a^1 = a"}</M></li>
            <li><M>{"\\log_{10} x = \\log x"}</M> (log sem base = log decimal)</li>
            <li><M>{"\\log_e x = \\ln x"}</M> (logaritmo natural)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>2. Propriedades Operatórias dos Logaritmos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th><th>Mnemônico</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Log do produto</td>
                <td><M>{"\\log_a(M \\cdot N) = \\log_a M + \\log_a N"}</M></td>
                <td>Multiplicação → soma de logs</td>
              </tr>
              <tr>
                <td>Log do quociente</td>
                <td><M>{"\\log_a\\dfrac{M}{N} = \\log_a M - \\log_a N"}</M></td>
                <td>Divisão → diferença de logs</td>
              </tr>
              <tr>
                <td>Log da potência</td>
                <td><M>{"\\log_a M^n = n \\cdot \\log_a M"}</M></td>
                <td>Expoente desce como fator</td>
              </tr>
              <tr>
                <td>Mudança de base</td>
                <td><M>{"\\log_a b = \\dfrac{\\log_c b}{\\log_c a}"}</M></td>
                <td>Converte para qualquer base c</td>
              </tr>
              <tr>
                <td>Log de 1</td>
                <td><M>{"\\log_a 1 = 0"}</M></td>
                <td>Sempre zero</td>
              </tr>
              <tr>
                <td>Log da base</td>
                <td><M>{"\\log_a a = 1"}</M></td>
                <td>Sempre um</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>3. Gráfico da Função Logarítmica</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 200" width="380" height="200" aria-label="Gráfico logarítmico">
            <line x1="40" y1="10" x2="40" y2="190" stroke="#374151" strokeWidth="1.5"/>
            <line x1="10" y1="100" x2="370" y2="100" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="103" fontSize="11" fill="#374151">x</text>
            <text x="35" y="8" fontSize="11" fill="#374151">y</text>
            <text x="40" y="112" textAnchor="middle" fontSize="10" fill="#6b7280">0</text>
            {/* log₂ x (a > 1, crescente) */}
            <path d="M 50 155 Q 80 100 130 70 Q 200 40 370 10" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <text x="355" y="8" fontSize="11" fill="#2563eb">log₂x (a&gt;1)</text>
            {/* log_(1/2) x (0 < a < 1, decrescente) */}
            <path d="M 50 45 Q 80 100 130 130 Q 200 160 370 190" stroke="#dc2626" strokeWidth="2.5" fill="none"/>
            <text x="345" y="188" fontSize="11" fill="#dc2626">log½x (0&lt;a&lt;1)</text>
            {/* Ponto (1, 0) */}
            <circle cx="50" cy="100" r="5" fill="#16a34a"/>
            <text x="60" y="97" fontSize="11" fill="#16a34a">(1, 0)</text>
            {/* Assíntota vertical */}
            <line x1="40" y1="10" x2="40" y2="190" stroke="#999" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="42" y="185" fontSize="9" fill="#999">x=0</text>
          </svg>
          <figcaption>Logarítmica: sempre passa por (1,0); assíntota vertical em x=0</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Propriedades do gráfico</h3>
          <ul>
            <li>Domínio: <M>{"(0, +\\infty)"}</M> (x &gt; 0 obrigatório).</li>
            <li>Imagem: <M>{"\\mathbb{R}"}</M>.</li>
            <li>Assíntota vertical: <M>{"x = 0"}</M>.</li>
            <li>Sempre passa por <M>{"(1, 0)"}</M>.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inversa</span>
        <h2>4. Logarítmica como Inversa da Exponencial</h2>
        <M block={true}>{"f(x) = a^x \\iff f^{-1}(x) = \\log_a x"}</M>
        <p>
          Os gráficos de <M>{"a^x"}</M> e <M>{"\\log_a x"}</M> são simétricos
          em relação à reta <M>{"y = x"}</M>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 280 200" width="280" height="200" aria-label="Simetria log e exp">
            <line x1="30" y1="10" x2="30" y2="190" stroke="#374151" strokeWidth="1"/>
            <line x1="10" y1="170" x2="270" y2="170" stroke="#374151" strokeWidth="1"/>
            {/* y = x (bissetriz) */}
            <line x1="30" y1="170" x2="270" y2="10" stroke="#aaa" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="255" y="12" fontSize="10" fill="#aaa">y=x</text>
            {/* Exponencial 2^x */}
            <path d="M 30 168 Q 100 165 140 145 Q 180 120 230 60" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <text x="235" y="56" fontSize="10" fill="#2563eb">2ˣ</text>
            {/* Logarítmica log₂ x (reflexão) */}
            <path d="M 32 170 Q 65 115 115 80 Q 155 55 230 30" stroke="#dc2626" strokeWidth="2.5" fill="none"/>
            <text x="235" y="28" fontSize="10" fill="#dc2626">log₂x</text>
          </svg>
          <figcaption>Simetria entre exponencial e logarítmica em relação a y = x</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>5. Equações Logarítmicas</h2>
        <div className="math-block">
          <h3>Estratégias</h3>
          <ul>
            <li><strong>Mesma base:</strong> <M>{"\\log_a f = \\log_a g \\iff f = g"}</M></li>
            <li><strong>Converter para exponencial:</strong> <M>{"\\log_a b = x \\iff a^x = b"}</M></li>
            <li><strong>Usar propriedades:</strong> simplificar e reduzir a um dos casos acima.</li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplos resolvidos</h3>
          <M block={true}>{"\\log_2 x = 5 \\Rightarrow x = 2^5 = 32"}</M>
          <M block={true}>{"\\log(x-1) + \\log(x+1) = 1 \\Rightarrow \\log(x^2-1) = 1 \\Rightarrow x^2-1 = 10 \\Rightarrow x^2 = 11"}</M>
          <M block={true}>{"x = \\sqrt{11} \\text{ (apenas positivo, pois } x > 1)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mudança de Base</span>
        <h2>6. Mudança de Base — Aplicação Prática</h2>
        <M block={true}>{"\\log_a b = \\frac{\\log b}{\\log a} = \\frac{\\ln b}{\\ln a}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\log_8 32 = \\frac{\\log_2 32}{\\log_2 8} = \\frac{5}{3}"}</M>
          <p>Verificação: <M>{"8^{5/3} = (2^3)^{5/3} = 2^5 = 32 \\checkmark"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Escalas Logarítmicas no Cotidiano</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aplicação</th><th>Fórmula</th><th>Unidade</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>pH (acidez)</td>
                <td><M>{"\\text{pH} = -\\log[H^+]"}</M></td>
                <td>Adimensional (0–14)</td>
              </tr>
              <tr>
                <td>Decibéis (som)</td>
                <td><M>{"\\beta = 10 \\log\\dfrac{I}{I_0}"}</M></td>
                <td>dB (<M>{"I_0 = 10^{-12}"}</M> W/m²)</td>
              </tr>
              <tr>
                <td>Richter (terremoto)</td>
                <td><M>{"M = \\log\\dfrac{A}{A_0}"}</M></td>
                <td>Adimensional</td>
              </tr>
              <tr>
                <td>Magnitude estelar</td>
                <td><M>{"m_1 - m_2 = -2{,}5\\log\\dfrac{F_1}{F_2}"}</M></td>
                <td>Magnitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações</span>
        <h2>8. Inequações Logarítmicas</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>a &gt; 1</span>
            <h3>Base maior que 1 (crescente)</h3>
            <M block={true}>{"\\log_a f > \\log_a g \\iff f > g"}</M>
          </div>
          <div className="lesson-card">
            <span>0&lt;a&lt;1</span>
            <h3>Base menor que 1 (decrescente)</h3>
            <M block={true}>{"\\log_a f > \\log_a g \\iff f < g"}</M>
          </div>
        </div>
        <div className="lesson-highlight warning">
          <h3>Restrição de domínio</h3>
          <p>
            Em toda inequação logarítmica, deve-se garantir que o argumento seja
            positivo: <M>{"f(x) > 0"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Log Decimal</span>
        <h2>9. Logaritmos Decimais — Tabela de Referência</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>x</th><th>log x</th><th>x</th><th>log x</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>0</td><td>10</td><td>1</td></tr>
              <tr><td>2</td><td>0,3010</td><td>20</td><td>1,3010</td></tr>
              <tr><td>3</td><td>0,4771</td><td>50</td><td>1,6990</td></tr>
              <tr><td>4</td><td>0,6021</td><td>100</td><td>2</td></tr>
              <tr><td>5</td><td>0,6990</td><td>1000</td><td>3</td></tr>
              <tr><td>8</td><td>0,9031</td><td><M>{"10^n"}</M></td><td>n</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Função Logarítmica</h2>
        <div className="lesson-highlight">
          <ul>
            <li><M>{"\\log_a b = x \\iff a^x = b"}</M> (definição)</li>
            <li>Log do produto = soma; log do quociente = diferença; log da potência = produto.</li>
            <li>Domínio: <M>{"x > 0"}</M>; Imagem: ℝ; assíntota: <M>{"x=0"}</M>.</li>
            <li>Inversa de <M>{"a^x"}</M>: gráficos simétricos em <M>{"y=x"}</M>.</li>
            <li>Mudança de base: <M>{"\\log_a b = \\log b / \\log a"}</M>.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Cálculo de logaritmo"
          statement={
            <p>Calcule: <M>{"\\log_3 243"}</M></p>
          }
          options={[
            { letter: "a", text: "3" },
            { letter: "b", text: "4" },
            { letter: "c", text: "5", correct: true },
            { letter: "d", text: "6" },
          ]}
          resolution={
            <>
              <M block={true}>{"3^5 = 243 \\Rightarrow \\log_3 243 = 5"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Propriedades de logaritmos"
          statement={
            <p>
              Sabendo que <M>{"\\log 2 = 0{,}301"}</M> e <M>{"\\log 3 = 0{,}477"}</M>,
              calcule <M>{"\\log 12"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "0,778" },
            { letter: "b", text: "1,079", correct: true },
            { letter: "c", text: "1,204" },
            { letter: "d", text: "0,954" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\log 12 = \\log(4 \\times 3) = \\log 4 + \\log 3 = 2\\log 2 + \\log 3"}</M>
              <M block={true}>{"= 2(0{,}301) + 0{,}477 = 0{,}602 + 0{,}477 = 1{,}079"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Equação logarítmica"
          statement={
            <p>Resolva: <M>{"\\log_2(x+3) + \\log_2(x-1) = 3"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x = 1"}</M> },
            { letter: "b", text: <M>{"x = 5"}</M>, correct: true },
            { letter: "c", text: <M>{"x = 3"}</M> },
            { letter: "d", text: <M>{"x = -5"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\log_2[(x+3)(x-1)] = 3 \\Rightarrow (x+3)(x-1) = 8"}</M>
              <M block={true}>{"x^2 + 2x - 3 = 8 \\Rightarrow x^2 + 2x - 11 = 0"}</M>
              <M block={true}>{"x = \\frac{-2 \\pm \\sqrt{4+44}}{2} = \\frac{-2 \\pm \\sqrt{48}}{2}"}</M>
              <p>Apenas x = 5 satisfaz x &gt; 1 (condição de domínio).</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. pH de uma solução"
          statement={
            <p>
              Uma solução tem concentração de íons H⁺ igual a <M>{"10^{-4}"}</M> mol/L.
              Qual é o pH da solução e ela é ácida ou básica?
            </p>
          }
          options={[
            { letter: "a", text: "pH = 4 — ácida", correct: true },
            { letter: "b", text: "pH = 4 — básica" },
            { letter: "c", text: "pH = −4 — ácida" },
            { letter: "d", text: "pH = 10 — neutra" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{pH} = -\\log[H^+] = -\\log(10^{-4}) = 4"}</M>
              <p>pH &lt; 7 → solução ácida.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Intensidade sonora em decibéis"
          statement={
            <p>
              Um show tem intensidade <M>{"I = 10^{-2}"}</M> W/m². Sabendo que
              <M>{" I_0 = 10^{-12}"}</M> W/m², qual é o nível sonoro em dB?
            </p>
          }
          options={[
            { letter: "a", text: "80 dB" },
            { letter: "b", text: "100 dB", correct: true },
            { letter: "c", text: "120 dB" },
            { letter: "d", text: "10 dB" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\beta = 10 \\log \\frac{10^{-2}}{10^{-12}} = 10 \\log 10^{10} = 10 \\times 10 = 100 \\text{ dB}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
