"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 11</span>
          <h1>Função do 1º Grau (Linear)</h1>
          <p>
            Estude a função afim <M>{"f(x) = ax + b"}</M>, sua representação gráfica
            (reta), coeficiente angular, coeficiente linear, crescimento e decrescimento —
            e como ela aparece em problemas do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Função Afim — Definição e Nomenclatura</h2>
        <p>
          A <strong>função afim</strong> (ou função do 1º grau) tem a forma:
        </p>
        <M block={true}>{"f(x) = ax + b, \\quad a \\neq 0,\\; a, b \\in \\mathbb{R}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parâmetro</th><th>Nome</th><th>Papel</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><M>{"a"}</M></td>
                <td>Coeficiente angular (taxa de variação)</td>
                <td>Inclinação da reta; sinal determina crescimento</td>
              </tr>
              <tr>
                <td><M>{"b"}</M></td>
                <td>Coeficiente linear (termo independente)</td>
                <td>Ponto onde a reta corta o eixo y (<M>{"f(0)=b"}</M>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crescimento</span>
        <h2>2. Função Crescente e Decrescente</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>a &gt; 0</span>
            <h3>Crescente</h3>
            <p>Quando x aumenta, f(x) aumenta. Reta inclinada para cima (da esq. para dir.).</p>
            <M block={true}>{"x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)"}</M>
          </div>
          <div className="lesson-card">
            <span>a &lt; 0</span>
            <h3>Decrescente</h3>
            <p>Quando x aumenta, f(x) diminui. Reta inclinada para baixo.</p>
            <M block={true}>{"x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>3. Representação Gráfica — A Reta</h2>
        <p>
          O gráfico de qualquer função afim é uma <strong>reta</strong>.
          Dois pontos determinam unicamente uma reta.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 200" width="380" height="200" aria-label="Gráficos de funções afins">
            {/* Eixos */}
            <line x1="30" y1="10" x2="30" y2="185" stroke="#374151" strokeWidth="1.5"/>
            <line x1="10" y1="100" x2="370" y2="100" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="103" fontSize="11" fill="#374151">x</text>
            <text x="25" y="8" fontSize="11" fill="#374151">y</text>
            <text x="30" y="112" textAnchor="middle" fontSize="10" fill="#6b7280">0</text>
            {/* f(x) = 2x - 40 (crescente, b negativo) */}
            <line x1="30" y1="140" x2="180" y2="40" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="190" y="36" fontSize="11" fill="#2563eb">f(x)=2x−1 (a&gt;0)</text>
            {/* f(x) = -x + 80 (decrescente) */}
            <line x1="30" y1="60" x2="280" y2="160" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="250" y="170" fontSize="11" fill="#dc2626">g(x)=−x+2 (a&lt;0)</text>
            {/* f(x) = 3 (constante) */}
            <line x1="30" y1="80" x2="370" y2="80" stroke="#16a34a" strokeWidth="2" strokeDasharray="6,4"/>
            <text x="290" y="75" fontSize="11" fill="#16a34a">h(x)=3 (a=0)</text>
            {/* Ponto origem */}
            <circle cx="30" cy="100" r="3" fill="#374151"/>
          </svg>
          <figcaption>Retas com coeficiente angular positivo (azul), negativo (vermelho) e zero (verde)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficiente Angular</span>
        <h2>4. Cálculo do Coeficiente Angular</h2>
        <p>
          Dados dois pontos <M>{"P_1(x_1, y_1)"}</M> e <M>{"P_2(x_2, y_2)"}</M> da reta:
        </p>
        <M block={true}>{"a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan \\theta"}</M>
        <p>
          onde <M>{"\\theta"}</M> é o ângulo que a reta faz com o eixo x positivo.
        </p>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Reta que passa por A(1, 3) e B(4, 9):</p>
          <M block={true}>{"a = \\frac{9-3}{4-1} = \\frac{6}{3} = 2"}</M>
          <p>Usando o ponto A na equação <M>{"y = 2x + b"}</M>:</p>
          <M block={true}>{"3 = 2 \\cdot 1 + b \\Rightarrow b = 1 \\Rightarrow f(x) = 2x + 1"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Gráfico de f(x)=2x+1 com plano cartesiano">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="80" y1="20" x2="80" y2="200" stroke="#374151" strokeWidth="1.8"/>
            <line x1="20" y1="170" x2="660" y2="170" stroke="#374151" strokeWidth="1.8"/>
            {/* Setas dos eixos */}
            <polygon points="80,14 75,26 85,26" fill="#374151"/>
            <polygon points="666,170 654,165 654,175" fill="#374151"/>
            {/* Rótulos dos eixos */}
            <text x="668" y="174" fontSize="14" fill="#1e40af" fontWeight="bold">x</text>
            <text x="84" y="12" fontSize="14" fill="#1e40af" fontWeight="bold">y</text>
            {/* Marcas no eixo x */}
            {[-2,-1,1,2,3,4,5,6,7].map((v) => {
              const cx = 80 + v * 70;
              return (
                <g key={v}>
                  <line x1={cx} y1="166" x2={cx} y2="174" stroke="#374151" strokeWidth="1.2"/>
                  <text x={cx} y="186" textAnchor="middle" fontSize="11" fill="#374151">{v}</text>
                </g>
              );
            })}
            {/* Marcas no eixo y */}
            {[-1,1,2,3,4,5,6].map((v) => {
              const cy = 170 - v * 25;
              if (cy < 20 || cy > 195) return null;
              return (
                <g key={v}>
                  <line x1="76" y1={cy} x2="84" y2={cy} stroke="#374151" strokeWidth="1.2"/>
                  <text x="70" y={cy + 4} textAnchor="end" fontSize="11" fill="#374151">{v}</text>
                </g>
              );
            })}
            <text x="76" y="174" textAnchor="end" fontSize="11" fill="#374151">0</text>
            {/* Reta f(x)=2x+1: y=2x+1
                x=-1 → y=-1  →  cx=10, cy=195   (fora)
                x=0  → y=1   →  cx=80, cy=145
                x=3  → y=7   →  cx=290, cy=20 (aprox)
                Usando escala: cx=80+x*70, cy=170-y*25 */}
            <line
              x1={80 + (-1) * 70}
              y1={170 - (-1) * 25}
              x2={80 + 3.4 * 70}
              y2={170 - 7.8 * 25}
              stroke="#3b82f6" strokeWidth="2.8"/>
            <text x="320" y="35" fontSize="13" fill="#1e40af" fontWeight="bold">f(x) = 2x + 1</text>
            {/* Ponto (0,1) — intercepto y */}
            <circle cx="80" cy={170 - 1 * 25} r="6" fill="#facc15" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="90" y={170 - 1 * 25 + 4} fontSize="12" fill="#1e3a8a" fontWeight="bold">(0, 1)</text>
            {/* Ponto (1,3) */}
            <circle cx={80 + 70} cy={170 - 3 * 25} r="5" fill="#3b82f6"/>
            <text x={80 + 70 + 8} y={170 - 3 * 25 + 4} fontSize="11" fill="#1e40af">(1, 3)</text>
            {/* Indicação de inclinação: triângulo Δx=1, Δy=2 */}
            <line x1={80 + 70} y1={170 - 3 * 25} x2={80 + 140} y2={170 - 3 * 25} stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1={80 + 140} y1={170 - 3 * 25} x2={80 + 140} y2={170 - 5 * 25} stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x={80 + 105} y={170 - 3 * 25 + 16} textAnchor="middle" fontSize="11" fill="#dc2626">Δx=1</text>
            <text x={80 + 148} y={170 - 4 * 25} fontSize="11" fill="#dc2626">Δy=2</text>
            <text x={80 + 185} y={170 - 3.5 * 25} fontSize="12" fill="#dc2626" fontWeight="bold">a=2</text>
          </svg>
          <figcaption>Reta f(x) = 2x + 1: intercepto y em (0, 1) e inclinação a = Δy/Δx = 2/1 = 2</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Zero da Função</span>
        <h2>5. Zero (Raiz) da Função Afim</h2>
        <p>
          O zero de f é o valor de x tal que <M>{"f(x) = 0"}</M>:
        </p>
        <M block={true}>{"ax + b = 0 \\Rightarrow x = -\\frac{b}{a}"}</M>
        <p>
          Geometricamente, é o ponto onde a reta cruza o eixo x
          (a <strong>abscissa da raiz</strong>).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Reta</th><th>Coef. angular</th><th>Coef. linear</th><th>Zero</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"f(x) = 3x - 6"}</M></td><td>3</td><td>−6</td><td><M>{"x=2"}</M></td></tr>
              <tr><td><M>{"f(x) = -2x + 8"}</M></td><td>−2</td><td>8</td><td><M>{"x=4"}</M></td></tr>
              <tr><td><M>{"f(x) = 5x"}</M></td><td>5</td><td>0</td><td><M>{"x=0"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posição das Retas</span>
        <h2>6. Retas Paralelas, Perpendiculares e Concorrentes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Posição</th><th>Condição</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Paralelas</td>
                <td><M>{"a_1 = a_2"}</M> e <M>{"b_1 \\neq b_2"}</M></td>
                <td><M>{"y=2x+1"}</M> e <M>{"y=2x-3"}</M></td>
              </tr>
              <tr>
                <td>Coincidentes</td>
                <td><M>{"a_1 = a_2"}</M> e <M>{"b_1 = b_2"}</M></td>
                <td>Mesma equação</td>
              </tr>
              <tr>
                <td>Perpendiculares</td>
                <td><M>{"a_1 \\cdot a_2 = -1"}</M></td>
                <td><M>{"y=2x+1"}</M> e <M>{"y=-\\frac{1}{2}x+3"}</M></td>
              </tr>
              <tr>
                <td>Concorrentes (se cruzam)</td>
                <td><M>{"a_1 \\neq a_2"}</M></td>
                <td>Um ponto de interseção</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Taxa de Variação</span>
        <h2>7. Interpretação da Taxa de Variação</h2>
        <p>
          O coeficiente angular <M>{"a"}</M> representa a <strong>taxa de variação</strong>
          de f em relação a x: quanto f varia para cada unidade que x avança.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos práticos</h3>
          <ul>
            <li><M>{"a = 3{,}5"}</M> → "por cada km percorrido, o custo aumenta R$3,50".</li>
            <li><M>{"a = -15"}</M> → "por cada hora, a bateria perde 15%".</li>
            <li><M>{"a = 2"}</M> → "por cada produto vendido, o lucro cresce R$2".</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistema Linear</span>
        <h2>8. Interseção de Duas Retas — Sistema 2×2</h2>
        <p>
          O ponto de interseção de duas retas é a solução do sistema formado por suas equações.
        </p>
        <div className="math-block">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}"}</M>
          <M block={true}>{"2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2"}</M>
          <M block={true}>{"y = 2(2)+1 = 5 \\Rightarrow \\text{Ponto: } (2, 5)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Aplicações no ENEM — Modelos Lineares</h2>
        <div className="lesson-highlight">
          <h3>Tarifa de táxi</h3>
          <p>Bandeirada R$5,00 + R$2,50 por km:</p>
          <M block={true}>{"C(d) = 2{,}5d + 5"}</M>
          <p>
            Para d = 8 km: <M>{"C = 2{,}5 \\times 8 + 5 = 25"}</M>
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Resfriamento</h3>
          <p>Temperatura decresce de 80°C a 2°C/min:</p>
          <M block={true}>{"T(t) = 80 - 2t"}</M>
          <p>Atingirá 20°C quando: <M>{"80 - 2t = 20 \\Rightarrow t = 30"}</M> min.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Função Afim</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conceito</th><th>Fórmula / Condição</th></tr>
            </thead>
            <tbody>
              <tr><td>Lei da função</td><td><M>{"f(x) = ax + b"}</M>, <M>{"a \\neq 0"}</M></td></tr>
              <tr><td>Coef. angular</td><td><M>{"a = (y_2-y_1)/(x_2-x_1)"}</M></td></tr>
              <tr><td>Zero</td><td><M>{"x = -b/a"}</M></td></tr>
              <tr><td>Crescente</td><td><M>{"a > 0"}</M></td></tr>
              <tr><td>Decrescente</td><td><M>{"a < 0"}</M></td></tr>
              <tr><td>Retas paralelas</td><td>Mesmo coef. angular, coef. linear diferente</td></tr>
              <tr><td>Retas perpendiculares</td><td><M>{"a_1 \\cdot a_2 = -1"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Zero da função afim"
          statement={
            <p>Qual é o zero de <M>{"f(x) = 3x - 12"}</M>?</p>
          }
          options={[
            { letter: "a", text: "3" },
            { letter: "b", text: "4", correct: true },
            { letter: "c", text: "12" },
            { letter: "d", text: "−4" },
          ]}
          resolution={
            <>
              <M block={true}>{"3x - 12 = 0 \\Rightarrow x = \\frac{12}{3} = 4"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Equação da reta por dois pontos"
          statement={
            <p>
              Determine a lei da função afim que passa por <M>{"A(2, 5)"}</M> e <M>{"B(6, 13)"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"f(x) = 2x + 3"}</M> },
            { letter: "b", text: <M>{"f(x) = 2x + 1"}</M>, correct: true },
            { letter: "c", text: <M>{"f(x) = 3x - 1"}</M> },
            { letter: "d", text: <M>{"f(x) = 2x - 1"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"a = \\frac{13-5}{6-2} = \\frac{8}{4} = 2"}</M>
              <M block={true}>{"5 = 2(2) + b \\Rightarrow b = 1 \\Rightarrow f(x) = 2x+1"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Retas perpendiculares"
          statement={
            <p>
              A reta <M>{"r: y = 3x - 5"}</M> e a reta <M>{"s"}</M> são perpendiculares.
              Se <M>{"s"}</M> passa pela origem, qual é sua equação?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"y = 3x"}</M> },
            { letter: "b", text: <M>{"y = -\\dfrac{1}{3}x"}</M>, correct: true },
            { letter: "c", text: <M>{"y = -3x"}</M> },
            { letter: "d", text: <M>{"y = \\dfrac{1}{3}x"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"a_r \\cdot a_s = -1 \\Rightarrow 3 \\cdot a_s = -1 \\Rightarrow a_s = -\\frac{1}{3}"}</M>
              <M block={true}>{"\\text{Passa pela origem} \\Rightarrow b=0 \\Rightarrow s: y = -\\frac{1}{3}x"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Tarifa de energia elétrica"
          statement={
            <p>
              Uma concessionária cobra uma taxa fixa de R$30 por mês mais R$0,75
              por kWh consumido. Qual é a conta mensal para um consumo de 200 kWh?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 150,00" },
            { letter: "b", text: "R$ 180,00", correct: true },
            { letter: "c", text: "R$ 200,00" },
            { letter: "d", text: "R$ 225,00" },
          ]}
          resolution={
            <>
              <M block={true}>{"C(x) = 0{,}75x + 30"}</M>
              <M block={true}>{"C(200) = 0{,}75 \\times 200 + 30 = 150 + 30 = 180"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Comparação de planos de celular"
          statement={
            <p>
              Plano A: R$50/mês + R$0,10 por minuto. Plano B: R$20/mês + R$0,25 por minuto.
              A partir de quantos minutos o Plano A é mais barato?
            </p>
          }
          options={[
            { letter: "a", text: "100 min" },
            { letter: "b", text: "150 min" },
            { letter: "c", text: "200 min", correct: true },
            { letter: "d", text: "250 min" },
          ]}
          resolution={
            <>
              <M block={true}>{"50 + 0{,}1t < 20 + 0{,}25t \\Rightarrow 30 < 0{,}15t \\Rightarrow t > 200"}</M>
              <p>A partir de 201 minutos o Plano A é mais barato.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
