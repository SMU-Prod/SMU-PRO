"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 8</span>
          <h1>Equações do 1º e 2º Grau</h1>
          <p>
            Domine a resolução de equações lineares e quadráticas, compreenda
            o discriminante, a relação de Girard e as aplicações em situações
            reais — desde problemas de velocidade até projéteis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1º Grau</span>
        <h2>1. Equação do 1º Grau — Definição e Resolução</h2>
        <p>
          Uma equação do 1º grau em x tem a forma <M>{"ax + b = 0"}</M>, com <M>{"a \\neq 0"}</M>.
          A solução (raiz) é:
        </p>
        <M block={true}>{"ax + b = 0 \\Rightarrow x = -\\frac{b}{a}"}</M>

        <div className="lesson-highlight">
          <h3>Regras de transposição</h3>
          <ul>
            <li>Somar/subtrair o mesmo dos dois lados → mantém a igualdade.</li>
            <li>Multiplicar/dividir por um mesmo número (≠0) → mantém a igualdade.</li>
            <li>Ao trocar um termo de lado → muda o sinal.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Exemplo resolvido</h3>
          <M block={true}>{"\\frac{3x - 5}{2} = 7 \\Rightarrow 3x - 5 = 14 \\Rightarrow 3x = 19 \\Rightarrow x = \\frac{19}{3}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2º Grau</span>
        <h2>2. Equação do 2º Grau — Forma Geral</h2>
        <p>
          A forma geral é <M>{"ax^2 + bx + c = 0"}</M> com <M>{"a \\neq 0"}</M>.
          Os três coeficientes determinam o comportamento da equação.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Parábola y = ax² + bx + c com vértice, raízes e eixo de simetria">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="2"/>
            {/* Eixo x */}
            <line x1="30" y1="155" x2="530" y2="155" stroke="#374151" strokeWidth="2"/>
            <polygon points="528,151 538,155 528,159" fill="#374151"/>
            <text x="542" y="159" fontSize="13" fill="#374151">x</text>
            {/* Eixo y */}
            <line x1="280" y1="210" x2="280" y2="20" stroke="#374151" strokeWidth="2"/>
            <polygon points="276,22 280,12 284,22" fill="#374151"/>
            <text x="285" y="16" fontSize="13" fill="#374151">y</text>
            {/* Parábola — curva de y = (x-3)²/8 - 1.5 escalada, a > 0, concavidade para cima */}
            {/* Calculado: vértice em x=280+3*40=280 (pixel), mapeando x∈[-3,9] para pixels [100,580] */}
            {/* vértice em pixel (360, 155-20=135), raízes em x=1 e x=5 → px 200 e 520... vamos usar escala menor */}
            {/* escala: 1 unidade = 50px, origem x em px=130, origem y em px=155 */}
            {/* parábola: y = (x-3)^2 - 4, raízes em x=1 (px=130+50=180) e x=5 (px=130+250=380), vértice (3,-4)→px(280,155+4*10=195) */}
            {/* reescalonando y: 1 y-unit = 10px, vértice px(280, 155+40=195), raízes y=0 px(180,155) e (380,155) */}
            <path
              d="M 80,95 Q 280,215 480,95"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            {/* Eixo de simetria pontilhado */}
            <line x1="280" y1="28" x2="280" y2="215" stroke="#6366f1" strokeWidth="2" strokeDasharray="6,4"/>
            <text x="285" y="42" fontSize="11" fill="#6366f1" fontWeight="700">eixo de simetria</text>
            <text x="285" y="55" fontSize="11" fill="#6366f1">x = −b/(2a)</text>
            {/* Vértice */}
            <circle cx="280" cy="210" r="6" fill="#facc15" stroke="#ca8a04" strokeWidth="2"/>
            <text x="290" y="210" fontSize="12" fill="#1e3a8a" fontWeight="700">V (vértice)</text>
            {/* Raiz x1 */}
            <circle cx="125" cy="155" r="6" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2"/>
            <text x="108" y="143" fontSize="12" fill="#1e40af" fontWeight="700">x₁</text>
            {/* Raiz x2 */}
            <circle cx="435" cy="155" r="6" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2"/>
            <text x="440" y="143" fontSize="12" fill="#1e40af" fontWeight="700">x₂</text>
            {/* Label da curva */}
            <text x="470" y="90" fontSize="13" fill="#3b82f6" fontWeight="700">y = ax²+bx+c</text>
            <text x="470" y="108" fontSize="11" fill="#374151">(a &gt; 0)</text>
            {/* Painel explicativo */}
            <rect x="545" y="30" width="145" height="145" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="617" y="52" textAnchor="middle" fontSize="11" fill="#1e3a8a" fontWeight="700">Elementos</text>
            <circle cx="562" cy="70" r="4" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="572" y="74" fontSize="11" fill="#1e3a8a">Vértice (h, k)</text>
            <circle cx="562" cy="90" r="4" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="1.5"/>
            <text x="572" y="94" fontSize="11" fill="#1e3a8a">Raízes x₁, x₂</text>
            <line x1="558" y1="106" x2="574" y2="106" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,3"/>
            <text x="578" y="110" fontSize="11" fill="#1e3a8a">Simetria</text>
            <text x="617" y="132" textAnchor="middle" fontSize="10" fill="#1e40af">Δ = b²−4ac</text>
            <text x="617" y="148" textAnchor="middle" fontSize="10" fill="#1e40af">x₁+x₂ = −b/a</text>
            <text x="617" y="164" textAnchor="middle" fontSize="10" fill="#1e40af">x₁·x₂ = c/a</text>
          </svg>
          <figcaption>Gráfico da função quadrática: parábola com vértice V, raízes x₁ e x₂ no eixo x, e eixo de simetria vertical pontilhado em x = −b/(2a)</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Coeficiente</th><th>Papel</th><th>Efeito no gráfico</th></tr>
            </thead>
            <tbody>
              <tr><td>a</td><td>Coef. do termo quadrático</td><td>Concavidade: a&gt;0 ↑, a&lt;0 ↓</td></tr>
              <tr><td>b</td><td>Coef. do termo linear</td><td>Posição do vértice em x</td></tr>
              <tr><td>c</td><td>Termo independente</td><td>Intersecção com eixo y</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fórmula de Bhaskara</span>
        <h2>3. Fórmula de Bhaskara e Discriminante</h2>
        <M block={true}>{"x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}, \\quad \\Delta = b^2 - 4ac"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 160" width="380" height="160" aria-label="Análise do discriminante">
            <rect x="10" y="10" width="360" height="140" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
            <rect x="25" y="30" width="100" height="100" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1"/>
            <text x="75" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#166534">{"Δ > 0"}</text>
            <text x="75" y="80" textAnchor="middle" fontSize="11" fill="#166534">2 raízes reais</text>
            <text x="75" y="97" textAnchor="middle" fontSize="11" fill="#166534">distintas</text>
            <text x="75" y="114" textAnchor="middle" fontSize="20" fill="#16a34a">✓✓</text>
            <rect x="140" y="30" width="100" height="100" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1"/>
            <text x="190" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">{"Δ = 0"}</text>
            <text x="190" y="80" textAnchor="middle" fontSize="11" fill="#92400e">1 raiz real</text>
            <text x="190" y="97" textAnchor="middle" fontSize="11" fill="#92400e">dupla</text>
            <text x="190" y="114" textAnchor="middle" fontSize="20" fill="#ca8a04">✓</text>
            <rect x="255" y="30" width="100" height="100" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1"/>
            <text x="305" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#991b1b">{"Δ < 0"}</text>
            <text x="305" y="80" textAnchor="middle" fontSize="11" fill="#991b1b">Sem raízes</text>
            <text x="305" y="97" textAnchor="middle" fontSize="11" fill="#991b1b">reais (ℂ)</text>
            <text x="305" y="114" textAnchor="middle" fontSize="20" fill="#dc2626">∅</text>
          </svg>
          <figcaption>O sinal de Δ determina o número de raízes reais da equação</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais</span>
        <h2>4. Casos Particulares de Equações do 2º Grau</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>b=0</span>
            <h3>Equação pura</h3>
            <M block={true}>{"ax^2 + c = 0 \\Rightarrow x = \\pm\\sqrt{-\\frac{c}{a}}"}</M>
            <p>Exemplo: <M>{"x^2 = 9 \\Rightarrow x = \\pm 3"}</M></p>
          </div>
          <div className="lesson-card">
            <span>c=0</span>
            <h3>Sem termo independente</h3>
            <M block={true}>{"ax^2 + bx = 0 \\Rightarrow x(ax+b)=0"}</M>
            <p><M>{"x=0"}</M> ou <M>{"x=-b/a"}</M></p>
          </div>
          <div className="lesson-card">
            <span>Δ=0</span>
            <h3>Raiz dupla</h3>
            <M block={true}>{"x = -\\frac{b}{2a}"}</M>
            <p>Polinômio é quadrado perfeito: <M>{"a(x-r)^2"}</M></p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações de Girard</span>
        <h2>5. Relações de Girard (Soma e Produto das Raízes)</h2>
        <p>
          Se <M>{"x_1"}</M> e <M>{"x_2"}</M> são raízes de <M>{"ax^2+bx+c=0"}</M>:
        </p>
        <M block={true}>{"x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}"}</M>

        <div className="lesson-highlight">
          <h3>Por que isso é útil?</h3>
          <p>Dado que as raízes somam 5 e multiplicam 6, a equação é:</p>
          <M block={true}>{"x^2 - (x_1+x_2)x + x_1 x_2 = 0 \\Rightarrow x^2 - 5x + 6 = 0"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Forma Fatorada</span>
        <h2>6. Forma Fatorada da Equação do 2º Grau</h2>
        <M block={true}>{"ax^2 + bx + c = a(x - x_1)(x - x_2)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Equação <M>{"2x^2 - 6x + 4 = 0"}</M> → raízes <M>{"x_1=1, x_2=2"}</M>:</p>
          <M block={true}>{"2x^2 - 6x + 4 = 2(x-1)(x-2)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Problemas com Equações do 2º Grau</h2>
        <div className="lesson-highlight">
          <h3>Problema clássico — dimensões de um retângulo</h3>
          <p>
            Um retângulo tem perímetro 26 m e área 40 m². Quais são suas dimensões?
          </p>
          <M block={true}>{"l + c = 13 \\quad l \\cdot c = 40"}</M>
          <M block={true}>{"x^2 - 13x + 40 = 0 \\Rightarrow \\Delta = 169 - 160 = 9"}</M>
          <M block={true}>{"x = \\frac{13 \\pm 3}{2} \\Rightarrow x_1 = 8,\\quad x_2 = 5"}</M>
          <p>Dimensões: 8 m × 5 m.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Completar Quadrado</span>
        <h2>8. Método de Completar o Quadrado</h2>
        <p>
          Transforma a equação na forma <M>{"(x - h)^2 = k"}</M>, revelando o vértice da parábola.
        </p>
        <div className="math-block">
          <M block={true}>{"x^2 + 6x + 5 = 0"}</M>
          <M block={true}>{"(x^2 + 6x + 9) - 9 + 5 = 0"}</M>
          <M block={true}>{"(x + 3)^2 = 4 \\Rightarrow x + 3 = \\pm 2"}</M>
          <M block={true}>{"x = -1 \\text{ ou } x = -5"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações Biquadradas</span>
        <h2>9. Equações Biquadradas</h2>
        <p>
          Uma equação biquadrada tem a forma <M>{"ax^4 + bx^2 + c = 0"}</M>.
          Resolve-se com a substituição <M>{"y = x^2"}</M>:
        </p>
        <M block={true}>{"ay^2 + by + c = 0 \\Rightarrow \\text{resolve em } y \\Rightarrow x = \\pm\\sqrt{y}"}</M>
        <div className="lesson-highlight warning">
          <h3>Atenção</h3>
          <p>Só se aceita <M>{"y \\geq 0"}</M> para que <M>{"x \\in \\mathbb{R}"}</M>.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Equações e Discriminante</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Ação</th><th>Resultado</th></tr>
            </thead>
            <tbody>
              <tr><td>1º grau</td><td>Isola x</td><td><M>{"x = -b/a"}</M></td></tr>
              <tr><td>2º grau — pura (b=0)</td><td>Isola x²</td><td><M>{"x = \\pm\\sqrt{-c/a}"}</M></td></tr>
              <tr><td>2º grau — sem c</td><td>Fator comum x</td><td><M>{"x=0 \\text{ ou } x=-b/a"}</M></td></tr>
              <tr><td>Δ &gt; 0</td><td>Bhaskara</td><td>2 raízes reais distintas</td></tr>
              <tr><td>Δ = 0</td><td>Bhaskara</td><td>1 raiz real dupla</td></tr>
              <tr><td>Δ &lt; 0</td><td>Complexos</td><td>Sem raiz real</td></tr>
              <tr><td>Biquadrada</td><td>y=x²</td><td>Até 4 raízes reais</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Fórmula de Bhaskara"
          statement={
            <p>Resolva: <M>{"x^2 - 5x + 6 = 0"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x=1 \\text{ e } x=6"}</M> },
            { letter: "b", text: <M>{"x=2 \\text{ e } x=3"}</M>, correct: true },
            { letter: "c", text: <M>{"x=-2 \\text{ e } x=-3"}</M> },
            { letter: "d", text: <M>{"x=0 \\text{ e } x=5"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta = 25 - 24 = 1 \\Rightarrow x = \\frac{5 \\pm 1}{2}"}</M>
              <M block={true}>{"x_1 = 3, \\quad x_2 = 2"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Relações de Girard"
          statement={
            <p>
              As raízes de <M>{"3x^2 - kx + 12 = 0"}</M> somam 4. Qual é o valor de k?
            </p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "12", correct: true },
            { letter: "c", text: "4" },
            { letter: "d", text: "3" },
          ]}
          resolution={
            <>
              <M block={true}>{"x_1 + x_2 = \\frac{k}{3} = 4 \\Rightarrow k = 12"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Equação biquadrada"
          statement={
            <p>Determine as raízes reais de <M>{"x^4 - 13x^2 + 36 = 0"}</M>.</p>
          }
          options={[
            { letter: "a", text: <M>{"x = \\pm 2 \\text{ e } x = \\pm 3"}</M>, correct: true },
            { letter: "b", text: <M>{"x = \\pm 4 \\text{ e } x = \\pm 9"}</M> },
            { letter: "c", text: <M>{"x = \\pm 6 \\text{ e } x = \\pm 1"}</M> },
            { letter: "d", text: <M>{"x = \\pm 3 \\text{ apenas}"}</M> },
          ]}
          resolution={
            <>
              <p>Fazendo <M>{"y = x^2"}</M>: <M>{"y^2 - 13y + 36 = 0"}</M></p>
              <M block={true}>{"y = \\frac{13 \\pm \\sqrt{169-144}}{2} = \\frac{13 \\pm 5}{2} \\Rightarrow y=9 \\text{ ou } y=4"}</M>
              <M block={true}>{"x^2=9 \\Rightarrow x=\\pm3 \\quad x^2=4 \\Rightarrow x=\\pm2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Projétil — equação quadrática"
          statement={
            <p>
              A altura de um projétil é dada por <M>{"h(t) = -5t^2 + 20t"}</M> (metros, t em segundos).
              Em que instante o projétil atinge o solo novamente?
            </p>
          }
          options={[
            { letter: "a", text: "t = 2 s" },
            { letter: "b", text: "t = 4 s", correct: true },
            { letter: "c", text: "t = 5 s" },
            { letter: "d", text: "t = 20 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"h(t) = 0 \\Rightarrow -5t^2 + 20t = 0 \\Rightarrow 5t(-t+4) = 0"}</M>
              <p><M>{"t=0"}</M> (lançamento) ou <M>{"t=4"}</M> s (chegada ao solo).</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Dimensões de terreno"
          statement={
            <p>
              Um terreno retangular tem área de 120 m² e perímetro de 44 m.
              Quais são as dimensões do terreno?
            </p>
          }
          options={[
            { letter: "a", text: "10 m × 12 m", correct: true },
            { letter: "b", text: "8 m × 15 m" },
            { letter: "c", text: "6 m × 20 m" },
            { letter: "d", text: "11 m × 11 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"l + c = 22 \\quad l \\cdot c = 120"}</M>
              <M block={true}>{"x^2 - 22x + 120 = 0 \\Rightarrow \\Delta = 484-480 = 4"}</M>
              <M block={true}>{"x = \\frac{22\\pm2}{2} \\Rightarrow x=12 \\text{ ou } x=10"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
