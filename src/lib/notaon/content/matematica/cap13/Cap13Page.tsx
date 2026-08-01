"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 13</span>
          <h1>Função Exponencial</h1>
          <p>
            Estude o crescimento e decrescimento exponencial, as propriedades da
            função <M>{"f(x) = a^x"}</M>, aplicações em juros compostos, população,
            radioatividade e meia-vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição e Forma Geral</h2>
        <M block={true}>{"f(x) = a^x, \\quad a > 0,\\; a \\neq 1,\\; x \\in \\mathbb{R}"}</M>
        <p>
          A <strong>base</strong> <M>{"a"}</M> determina o comportamento:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Base a</th><th>Comportamento</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>a &gt; 1</td><td>Crescente (quanto maior a base, mais rápido)</td><td><M>{"2^x, 10^x, e^x"}</M></td></tr>
              <tr><td>0 &lt; a &lt; 1</td><td>Decrescente (quanto menor a base, mais rápido)</td><td><M>{"(1/2)^x, 0{,}1^x"}</M></td></tr>
              <tr><td>a = e ≈ 2,718</td><td>Base natural (mais usada em ciências)</td><td><M>{"e^x"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>2. Gráfico da Função Exponencial</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 200" width="380" height="200" aria-label="Gráfico exponencial">
            <line x1="40" y1="10" x2="40" y2="185" stroke="#374151" strokeWidth="1.5"/>
            <line x1="10" y1="160" x2="370" y2="160" stroke="#374151" strokeWidth="1.5"/>
            <text x="375" y="163" fontSize="11" fill="#374151">x</text>
            <text x="35" y="8" fontSize="11" fill="#374151">y</text>
            <text x="40" y="173" textAnchor="middle" fontSize="10" fill="#6b7280">0</text>
            {/* Crescente: 2^x */}
            <path d="M 40 158 Q 130 155 190 140 Q 250 120 310 60" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <text x="315" y="56" fontSize="11" fill="#2563eb">2ˣ (a&gt;1)</text>
            {/* Decrescente: (1/2)^x */}
            <path d="M 40 60 Q 100 120 190 140 Q 270 155 370 158" stroke="#dc2626" strokeWidth="2.5" fill="none"/>
            <text x="30" y="56" textAnchor="end" fontSize="11" fill="#dc2626">(½)ˣ (0&lt;a&lt;1)</text>
            {/* Ponto (0,1) */}
            <circle cx="40" cy="140" r="5" fill="#16a34a"/>
            <text x="50" y="136" fontSize="11" fill="#16a34a">(0,1)</text>
            {/* Assíntota */}
            <line x1="10" y1="160" x2="370" y2="160" stroke="#999" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="360" y="156" fontSize="9" fill="#999">y=0</text>
          </svg>
          <figcaption>A exponencial sempre passa por (0,1) e tem assíntota horizontal em y=0</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Propriedades do gráfico</h3>
          <ul>
            <li>Passa sempre pelo ponto <M>{"(0, 1)"}</M> pois <M>{"a^0 = 1"}</M>.</li>
            <li>Assíntota horizontal: <M>{"y = 0"}</M> (nunca toca o eixo x).</li>
            <li>Domínio: <M>{"\\mathbb{R}"}</M>; Imagem: <M>{"(0, +\\infty)"}</M>.</li>
            <li>Sempre positiva: <M>{"a^x > 0"}</M> para todo x.</li>
          </ul>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Curva exponencial crescente (base maior que 1) e decrescente (0 menor que base menor que 1)">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="280" y1="15" x2="280" y2="205" stroke="#374151" strokeWidth="1.8"/>
            <line x1="20" y1="190" x2="680" y2="190" stroke="#374151" strokeWidth="1.8"/>
            <polygon points="280,9 275,21 285,21" fill="#374151"/>
            <polygon points="686,190 674,185 674,195" fill="#374151"/>
            <text x="690" y="194" fontSize="13" fill="#1e40af" fontWeight="bold">x</text>
            <text x="285" y="8" fontSize="13" fill="#1e40af" fontWeight="bold">y</text>
            {/* Marca y=1 (ponto de interseção, pois a^0=1) */}
            <line x1="276" y1="150" x2="284" y2="150" stroke="#374151" strokeWidth="1.2"/>
            <text x="268" y="154" textAnchor="end" fontSize="11" fill="#374151">1</text>
            {/* Assíntota y=0 */}
            <line x1="20" y1="190" x2="680" y2="190" stroke="#9ca3af" strokeWidth="1" strokeDasharray="6,4"/>
            <text x="630" y="186" fontSize="10" fill="#9ca3af">y = 0 (assíntota)</text>
            {/* Curva crescente: 2^x
                Escala: x do SVG = 280 + xVal*60; y do SVG = 190 - yVal*40
                x=-4 → y=0.0625 → (40, 187.5)
                x=-2 → y=0.25  → (160, 180)
                x=0  → y=1     → (280, 150)
                x=1  → y=2     → (340, 110)
                x=2  → y=4     → (400, 30) — cuidado: 190-4*40=30 ok
            */}
            <path
              d="M 40 188 C 100 186, 200 178, 280 150 C 330 130, 360 95, 400 30"
              stroke="#3b82f6" strokeWidth="2.8" fill="none"/>
            <text x="408" y="28" fontSize="13" fill="#1e40af" fontWeight="bold">2ˣ (a &gt; 1)</text>
            <text x="408" y="44" fontSize="11" fill="#3b82f6">crescente</text>
            {/* Curva decrescente: (1/2)^x = 2^(-x)
                x=-2 → y=4  → (160, 30)
                x=0  → y=1  → (280, 150)
                x=2  → y=0.25→(400, 180)
                x=4  → y=0.0625→(520, 187.5)
            */}
            <path
              d="M 160 30 C 200 95, 240 130, 280 150 C 360 178, 460 186, 620 189"
              stroke="#dc2626" strokeWidth="2.8" fill="none" strokeDasharray="8,4"/>
            <text x="22" y="28" fontSize="13" fill="#dc2626" fontWeight="bold">(½)ˣ (0&lt;a&lt;1)</text>
            <text x="22" y="44" fontSize="11" fill="#dc2626">decrescente</text>
            {/* Ponto (0,1) compartilhado pelas duas curvas */}
            <circle cx="280" cy="150" r="7" fill="#facc15" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="290" y="146" fontSize="12" fill="#1e3a8a" fontWeight="bold">(0, 1)</text>
            {/* Marcas no eixo x */}
            {[-4,-3,-2,-1,1,2,3,4].map((v) => {
              const cx = 280 + v * 60;
              if (cx < 20 || cx > 680) return null;
              return (
                <g key={v}>
                  <line x1={cx} y1="186" x2={cx} y2="194" stroke="#374151" strokeWidth="1.2"/>
                  <text x={cx} y="205" textAnchor="middle" fontSize="11" fill="#374151">{v}</text>
                </g>
              );
            })}
            <text x="277" y="205" textAnchor="end" fontSize="11" fill="#374151">0</text>
          </svg>
          <figcaption>Curva exponencial crescente (2ˣ, base &gt; 1) e decrescente ((½)ˣ, 0 &lt; base &lt; 1) — ambas passam por (0, 1)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>3. Propriedades das Potências (Revisão)</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>P1</span>
            <M block={true}>{"a^m \\cdot a^n = a^{m+n}"}</M>
          </div>
          <div className="math-card">
            <span>P2</span>
            <M block={true}>{"\\frac{a^m}{a^n} = a^{m-n}"}</M>
          </div>
          <div className="math-card">
            <span>P3</span>
            <M block={true}>{"(a^m)^n = a^{mn}"}</M>
          </div>
          <div className="math-card">
            <span>P4</span>
            <M block={true}>{"a^{-n} = \\frac{1}{a^n}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>4. Equações Exponenciais</h2>
        <p>
          Duas potências com a mesma base são iguais se e somente se os expoentes
          são iguais (para <M>{"a > 0, a \\neq 1"}</M>):
        </p>
        <M block={true}>{"a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)"}</M>

        <div className="lesson-highlight">
          <h3>Exemplos</h3>
          <M block={true}>{"2^{x+1} = 8 \\Rightarrow 2^{x+1} = 2^3 \\Rightarrow x+1=3 \\Rightarrow x=2"}</M>
          <M block={true}>{"9^x = 27 \\Rightarrow 3^{2x} = 3^3 \\Rightarrow 2x=3 \\Rightarrow x = \\frac{3}{2}"}</M>
          <M block={true}>{"4^{x-1} = \\frac{1}{8} \\Rightarrow 2^{2(x-1)} = 2^{-3} \\Rightarrow 2x-2=-3 \\Rightarrow x = -\\frac{1}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inequações</span>
        <h2>5. Inequações Exponenciais</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>a &gt; 1</span>
            <h3>Base maior que 1 (crescente)</h3>
            <M block={true}>{"a^{f(x)} > a^{g(x)} \\iff f(x) > g(x)"}</M>
            <p>Mantém o sinal da desigualdade.</p>
          </div>
          <div className="lesson-card">
            <span>0&lt;a&lt;1</span>
            <h3>Base menor que 1 (decrescente)</h3>
            <M block={true}>{"a^{f(x)} > a^{g(x)} \\iff f(x) < g(x)"}</M>
            <p>Inverte o sinal da desigualdade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crescimento</span>
        <h2>6. Modelos de Crescimento Exponencial</h2>
        <M block={true}>{"Q(t) = Q_0 \\cdot a^t \\quad \\text{ou} \\quad Q(t) = Q_0 \\cdot e^{kt}"}</M>
        <div className="lesson-highlight">
          <h3>Parâmetros</h3>
          <ul>
            <li><M>{"Q_0"}</M>: valor inicial (em t = 0).</li>
            <li><M>{"a"}</M>: fator de multiplicação por período.</li>
            <li><M>{"k > 0"}</M>: crescimento exponencial.</li>
            <li><M>{"k < 0"}</M>: decaimento exponencial.</li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fenômeno</th><th>Modelo</th><th>Comportamento</th></tr>
            </thead>
            <tbody>
              <tr><td>Juros compostos</td><td><M>{"M = C(1+i)^t"}</M></td><td>Crescimento</td></tr>
              <tr><td>Crescimento populacional</td><td><M>{"P = P_0 e^{kt}"}</M></td><td>Crescimento</td></tr>
              <tr><td>Decaimento radioativo</td><td><M>{"N = N_0 e^{-\\lambda t}"}</M></td><td>Decaimento</td></tr>
              <tr><td>Resfriamento de Newton</td><td><M>{"T = T_{amb} + (T_0-T_{amb})e^{-kt}"}</M></td><td>Decaimento</td></tr>
              <tr><td>Dissipação de fármaco</td><td><M>{"C = C_0 \\cdot (1/2)^{t/t_{1/2}}"}</M></td><td>Decaimento</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meia-vida</span>
        <h2>7. Meia-vida e Decaimento Radioativo</h2>
        <p>
          A <strong>meia-vida</strong> <M>{"t_{1/2}"}</M> é o tempo para a quantidade
          cair à metade:
        </p>
        <M block={true}>{"Q(t_{1/2}) = \\frac{Q_0}{2} \\Rightarrow Q(t) = Q_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Carbono-14 tem meia-vida de 5.730 anos. De 100 g, quantos restam
            após 11.460 anos?
          </p>
          <M block={true}>{"Q = 100 \\cdot \\left(\\frac{1}{2}\\right)^{11460/5730} = 100 \\cdot \\left(\\frac{1}{2}\\right)^2 = 25 \\text{ g}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Número e</span>
        <h2>8. O Número de Euler (e)</h2>
        <M block={true}>{"e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2{,}71828\\ldots"}</M>
        <p>
          É a base da função exponencial natural <M>{"e^x"}</M>, cujo crescimento
          tem a propriedade única de ser sua própria derivada: <M>{"\\frac{d}{dx}e^x = e^x"}</M>.
          Muito usado em modelos contínuos de crescimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>9. Crescimento Exponencial vs. Linear vs. Polinomial</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>x</th><th>Linear 10x</th><th>Quadrático x²</th><th>Exponencial 2ˣ</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>10</td><td>1</td><td>2</td></tr>
              <tr><td>5</td><td>50</td><td>25</td><td>32</td></tr>
              <tr><td>10</td><td>100</td><td>100</td><td>1.024</td></tr>
              <tr><td>20</td><td>200</td><td>400</td><td>1.048.576</td></tr>
              <tr><td>30</td><td>300</td><td>900</td><td>≈ 10⁹</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O crescimento exponencial domina qualquer polinomial a longo prazo —
          este é o conceito por trás do poder dos juros compostos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Função Exponencial</h2>
        <div className="lesson-highlight">
          <ul>
            <li><M>{"f(x) = a^x"}</M> com <M>{"a > 0, a \\neq 1"}</M>.</li>
            <li>Domínio: ℝ; Imagem: <M>{"(0, +\\infty)"}</M>; assíntota: <M>{"y=0"}</M>.</li>
            <li>a &gt; 1: crescente; 0 &lt; a &lt; 1: decrescente.</li>
            <li>Equação exponencial: iguale bases, compare expoentes.</li>
            <li>Meia-vida: <M>{"Q = Q_0 (1/2)^{t/t_{1/2}}"}</M>.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Equação exponencial"
          statement={
            <p>Resolva: <M>{"3^{2x} = 81"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x = 1"}</M> },
            { letter: "b", text: <M>{"x = 2"}</M>, correct: true },
            { letter: "c", text: <M>{"x = 3"}</M> },
            { letter: "d", text: <M>{"x = 4"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"3^{2x} = 3^4 \\Rightarrow 2x = 4 \\Rightarrow x = 2"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Equação com bases diferentes"
          statement={
            <p>Resolva: <M>{"8^{x-1} = 4^x"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x = 2"}</M> },
            { letter: "b", text: <M>{"x = 3"}</M>, correct: true },
            { letter: "c", text: <M>{"x = 1"}</M> },
            { letter: "d", text: <M>{"x = 4"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"2^{3(x-1)} = 2^{2x} \\Rightarrow 3x-3 = 2x \\Rightarrow x = 3"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inequação exponencial"
          statement={
            <p>Resolva: <M>{"\\left(\\frac{1}{2}\\right)^{3x-1} < \\frac{1}{4}"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x < 1"}</M> },
            { letter: "b", text: <M>{"x > 1"}</M>, correct: true },
            { letter: "c", text: <M>{"x < \\frac{1}{3}"}</M> },
            { letter: "d", text: <M>{"x > \\frac{1}{3}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\left(\\frac{1}{2}\\right)^{3x-1} < \\left(\\frac{1}{2}\\right)^2"}</M>
              <p>Base 1/2 &lt; 1 → inverte: <M>{"3x-1 > 2 \\Rightarrow x > 1"}</M></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Crescimento bacteriano"
          statement={
            <p>
              Uma colônia de bactérias duplica a cada 3 horas. Começando com 500 bactérias,
              quantas haverá após 12 horas?
            </p>
          }
          options={[
            { letter: "a", text: "4.000" },
            { letter: "b", text: "8.000", correct: true },
            { letter: "c", text: "6.000" },
            { letter: "d", text: "16.000" },
          ]}
          resolution={
            <>
              <M block={true}>{"t_{1/2} = 3 \\text{ h (dobra)},\\quad n = \\frac{12}{3} = 4 \\text{ períodos}"}</M>
              <M block={true}>{"Q = 500 \\times 2^4 = 500 \\times 16 = 8000"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Decaimento de fármaco"
          statement={
            <p>
              Um medicamento tem meia-vida de 6 horas. Um paciente tomou 800 mg.
              Quantos mg restam no organismo após 18 horas?
            </p>
          }
          options={[
            { letter: "a", text: "200 mg" },
            { letter: "b", text: "100 mg", correct: true },
            { letter: "c", text: "400 mg" },
            { letter: "d", text: "50 mg" },
          ]}
          resolution={
            <>
              <M block={true}>{"n = \\frac{18}{6} = 3 \\text{ meias-vidas}"}</M>
              <M block={true}>{"Q = 800 \\times \\left(\\frac{1}{2}\\right)^3 = 800 \\times \\frac{1}{8} = 100 \\text{ mg}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
