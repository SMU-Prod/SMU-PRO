"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 19</span>
          <h1>Funções Trigonométricas</h1>
          <p>
            Estude em profundidade as funções seno, cosseno e tangente: domínio,
            imagem, período, amplitude, gráficos, transformações e aplicações em
            fenômenos periódicos como ondas, marés e movimentos oscilatórios.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função Seno</span>
        <h2>1. A Função Seno — y = sen x</h2>
        <M block={true}>{"f: \\mathbb{R} \\to [-1, 1] \\quad f(x) = \\sin x"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>y = sen x</th></tr>
            </thead>
            <tbody>
              <tr><td>Domínio</td><td><M>{"\\mathbb{R}"}</M></td></tr>
              <tr><td>Imagem</td><td>[−1, 1]</td></tr>
              <tr><td>Período</td><td><M>{"2\\pi"}</M></td></tr>
              <tr><td>Paridade</td><td>Ímpar: sen(−x) = −sen x</td></tr>
              <tr><td>Zeros</td><td><M>{"x = k\\pi, \\; k \\in \\mathbb{Z}"}</M></td></tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Curvas de seno e cosseno em [0, 2pi] com amplitude 1, marcas em pi e 2pi">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="60" y1="18" x2="60" y2="202" stroke="#374151" strokeWidth="1.8"/>
            <line x1="30" y1="110" x2="680" y2="110" stroke="#374151" strokeWidth="1.8"/>
            <polygon points="60,12 55,24 65,24" fill="#374151"/>
            <polygon points="686,110 674,105 674,115" fill="#374151"/>
            <text x="690" y="114" fontSize="13" fill="#1e40af" fontWeight="bold">x</text>
            <text x="65" y="10" fontSize="13" fill="#1e40af" fontWeight="bold">y</text>
            {/* Amplitude marks */}
            <line x1="56" y1="30" x2="64" y2="30" stroke="#374151" strokeWidth="1.2"/>
            <text x="48" y="34" textAnchor="end" fontSize="12" fill="#1e3a8a" fontWeight="bold">1</text>
            <line x1="56" y1="190" x2="64" y2="190" stroke="#374151" strokeWidth="1.2"/>
            <text x="48" y="194" textAnchor="end" fontSize="12" fill="#1e3a8a" fontWeight="bold">−1</text>
            {/* Amplitude label (double arrow) */}
            <line x1="28" y1="30" x2="28" y2="190" stroke="#facc15" strokeWidth="2"/>
            <polygon points="28,24 23,36 33,36" fill="#facc15"/>
            <polygon points="28,196 23,184 33,184" fill="#facc15"/>
            <text x="16" y="115" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold" transform="rotate(-90,16,115)">amp=1</text>
            {/* X-axis labels: π/2, π, 3π/2, 2π
                Escala: x svg = 60 + xRad*(620/(2π)) onde xRad varia de 0 a 2π
                2π → 620 pixels → escala = 620/(2π) ≈ 98.7
                π/2 → 60+49*2=~157  π → 60+98*2=~256  3π/2→60+147*2=~354  2π→60+620=~680 */}
            {[
              { label: "π/2",  xr: Math.PI / 2 },
              { label: "π",    xr: Math.PI },
              { label: "3π/2", xr: 3 * Math.PI / 2 },
              { label: "2π",   xr: 2 * Math.PI },
            ].map(({ label, xr }) => {
              const cx = 60 + xr * (620 / (2 * Math.PI));
              return (
                <g key={label}>
                  <line x1={cx} y1="106" x2={cx} y2="114" stroke="#374151" strokeWidth="1.2"/>
                  <text x={cx} y="126" textAnchor="middle" fontSize="12" fill="#374151">{label}</text>
                </g>
              );
            })}
            <text x="57" y="124" textAnchor="end" fontSize="11" fill="#374151">0</text>
            {/* Curva sen x: amostras de 0 a 2π
                y_svg = 110 - sin(x)*80   (amplitude 80px, centro y=110) */}
            <path
              d={(() => {
                const scale = 620 / (2 * Math.PI);
                const pts = Array.from({ length: 121 }, (_, i) => {
                  const xr = (i / 120) * 2 * Math.PI;
                  const xs = 60 + xr * scale;
                  const ys = 110 - Math.sin(xr) * 80;
                  return `${i === 0 ? "M" : "L"} ${xs.toFixed(1)} ${ys.toFixed(1)}`;
                });
                return pts.join(" ");
              })()}
              stroke="#3b82f6" strokeWidth="2.8" fill="none"/>
            <text x="670" y="32" fontSize="13" fill="#1e40af" fontWeight="bold">sen x</text>
            <line x1="620" y1="28" x2="660" y2="28" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Curva cos x */}
            <path
              d={(() => {
                const scale = 620 / (2 * Math.PI);
                const pts = Array.from({ length: 121 }, (_, i) => {
                  const xr = (i / 120) * 2 * Math.PI;
                  const xs = 60 + xr * scale;
                  const ys = 110 - Math.cos(xr) * 80;
                  return `${i === 0 ? "M" : "L"} ${xs.toFixed(1)} ${ys.toFixed(1)}`;
                });
                return pts.join(" ");
              })()}
              stroke="#dc2626" strokeWidth="2.8" fill="none" strokeDasharray="8,4"/>
            <text x="670" y="50" fontSize="13" fill="#dc2626" fontWeight="bold">cos x</text>
            <line x1="620" y1="46" x2="660" y2="46" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="8,4"/>
            {/* Desfasamento: texto */}
            <text x="360" y="18" textAnchor="middle" fontSize="11" fill="#374151">Deslocamento de π/2 entre sen e cos</text>
          </svg>
          <figcaption>y = sen x (azul) e y = cos x (vermelho tracejado) em [0, 2π]: amplitude 1, período 2π, deslocamento de π/2</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função Cosseno</span>
        <h2>2. A Função Cosseno — y = cos x</h2>
        <M block={true}>{"g: \\mathbb{R} \\to [-1, 1] \\quad g(x) = \\cos x"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>y = cos x</th></tr>
            </thead>
            <tbody>
              <tr><td>Domínio</td><td><M>{"\\mathbb{R}"}</M></td></tr>
              <tr><td>Imagem</td><td>[−1, 1]</td></tr>
              <tr><td>Período</td><td><M>{"2\\pi"}</M></td></tr>
              <tr><td>Paridade</td><td>Par: cos(−x) = cos x</td></tr>
              <tr><td>Zeros</td><td><M>{"x = \\tfrac{\\pi}{2} + k\\pi, \\; k \\in \\mathbb{Z}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função Tangente</span>
        <h2>3. A Função Tangente — y = tan x</h2>
        <M block={true}>{"h(x) = \\tan x = \\frac{\\sin x}{\\cos x}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>y = tan x</th></tr>
            </thead>
            <tbody>
              <tr><td>Domínio</td><td><M>{"x \\neq \\frac{\\pi}{2}+k\\pi"}</M></td></tr>
              <tr><td>Imagem</td><td><M>{"\\mathbb{R}"}</M></td></tr>
              <tr><td>Período</td><td><M>{"\\pi"}</M></td></tr>
              <tr><td>Paridade</td><td>Ímpar: tan(−x) = −tan x</td></tr>
              <tr><td>Assíntotas</td><td><M>{"x = \\frac{\\pi}{2}+k\\pi"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>4. Gráficos das Funções Trigonométricas</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 200" width="380" height="200" aria-label="Gráficos seno cosseno e tangente">
            {/* Eixos */}
            <line x1="20" y1="100" x2="360" y2="100" stroke="#374151" strokeWidth="1.5"/>
            <line x1="35" y1="15" x2="35" y2="185" stroke="#374151" strokeWidth="1.5"/>
            {/* Seno */}
            <path d="M 35 100 Q 65 30 95 100 Q 125 170 155 100 Q 185 30 215 100 Q 245 170 275 100 Q 305 30 335 100" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            {/* Cosseno */}
            <path d="M 35 30 Q 65 30 95 100 Q 125 170 155 100 Q 185 30 215 100 Q 245 170 275 100 Q 305 30 335 100" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="6,3"/>
            {/* Rótulos */}
            <text x="345" y="50" fontSize="11" fill="#2563eb">sen</text>
            <text x="345" y="65" fontSize="11" fill="#dc2626">cos</text>
            <text x="25" y="30" fontSize="10" fill="#374151">1</text>
            <text x="15" y="170" fontSize="10" fill="#374151">-1</text>
            {/* Marcas eixo x */}
            <text x="95" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">π/2</text>
            <text x="155" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">π</text>
            <text x="215" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">3π/2</text>
            <text x="275" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">2π</text>
          </svg>
          <figcaption>y = sen x (azul) e y = cos x (vermelho tracejado): mesma forma, deslocamento de π/2</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transformações</span>
        <h2>5. Transformações — Amplitude, Período e Fase</h2>
        <M block={true}>{"y = A\\sin(Bx + C) + D"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parâmetro</th><th>Efeito</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>A</td><td>Amplitude</td><td><M>{"|A|"}</M> (altura máxima de 0)</td></tr>
              <tr><td>B</td><td>Frequência/Período</td><td>Período = <M>{"\\dfrac{2\\pi}{|B|}"}</M></td></tr>
              <tr><td>C</td><td>Deslocamento horizontal (fase)</td><td>Fase = <M>{"-C/B"}</M></td></tr>
              <tr><td>D</td><td>Deslocamento vertical</td><td>Valor médio</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"y = 3\\sin(2x - \\pi/4) + 1"}</M>
          <ul>
            <li>Amplitude: 3; Período: <M>{"\\pi"}</M>; Fase: <M>{"\\pi/8"}</M>; Valor médio: 1.</li>
            <li>Máximo: 4; Mínimo: −2.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>6. Comparação Sen, Cos e Tan</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Função</th><th>Período</th><th>Imagem</th><th>Paridade</th><th>Assíntotas</th></tr>
            </thead>
            <tbody>
              <tr><td>sen x</td><td><M>{"2\\pi"}</M></td><td>[−1, 1]</td><td>Ímpar</td><td>Nenhuma</td></tr>
              <tr><td>cos x</td><td><M>{"2\\pi"}</M></td><td>[−1, 1]</td><td>Par</td><td>Nenhuma</td></tr>
              <tr><td>tan x</td><td><M>{"\\pi"}</M></td><td><M>{"\\mathbb{R}"}</M></td><td>Ímpar</td><td><M>{"x = \\pi/2 + k\\pi"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inversa</span>
        <h2>7. Funções Trigonométricas Inversas</h2>
        <M block={true}>{"\\arcsin: [-1,1] \\to [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}] \\qquad \\arccos: [-1,1] \\to [0, \\pi] \\qquad \\arctan: \\mathbb{R} \\to (-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})"}</M>
        <div className="lesson-highlight">
          <h3>Uso das inversas</h3>
          <p>
            Para encontrar o ângulo dado uma razão:
            <M>{"\\sin\\theta = 0{,}5 \\Rightarrow \\theta = \\arcsin(0{,}5) = 30°"}</M>
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>8. Equações Trigonométricas</h2>
        <div className="lesson-highlight">
          <h3>Exemplo: <M>{"2\\cos x - 1 = 0"}</M></h3>
          <M block={true}>{"\\cos x = \\frac{1}{2} \\Rightarrow x = 60° + 360°k \\text{ ou } x = -60° + 360°k"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Forma quadrática: <M>{"\\sin^2 x - \\sin x - 2 = 0"}</M></h3>
          <M block={true}>{"(\\sin x - 2)(\\sin x + 1) = 0 \\Rightarrow \\sin x = -1 \\Rightarrow x = 270° + 360°k"}</M>
          <p>(O caso sen x = 2 é impossível pois <M>{"|\\sin x| \\leq 1"}</M>)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ondas</span>
        <h2>9. Aplicação — Modelagem de Ondas</h2>
        <p>
          Muitos fenômenos periódicos são modelados por <M>{"y = A\\sin(2\\pi ft + \\phi)"}</M>:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fenômeno</th><th>Modelo típico</th></tr>
            </thead>
            <tbody>
              <tr><td>Corrente alternada (CA)</td><td><M>{"V = 220\\sin(120\\pi t)"}</M></td></tr>
              <tr><td>Onda sonora</td><td><M>{"p = A\\sin(2\\pi ft)"}</M></td></tr>
              <tr><td>Maré</td><td><M>{"h = A\\sin\\left(\\frac{2\\pi}{T}t\\right) + D"}</M></td></tr>
              <tr><td>Pêndulo</td><td><M>{"\\theta = \\theta_0 \\cos(\\omega t)"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Funções Trigonométricas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>sen</span>
            <h3>Função seno</h3>
            <M>{"[-1,1], T=2\\pi, \\text{ímpar}"}</M>
          </div>
          <div className="math-card">
            <span>cos</span>
            <h3>Função cosseno</h3>
            <M>{"[-1,1], T=2\\pi, \\text{par}"}</M>
          </div>
          <div className="math-card">
            <span>tan</span>
            <h3>Função tangente</h3>
            <M>{"\\mathbb{R}, T=\\pi, \\text{ímpar}"}</M>
          </div>
          <div className="math-card">
            <span>A·sen</span>
            <h3>Transformada</h3>
            <M>{"y=A\\sin(Bx+C)+D"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Período de uma função"
          statement={
            <p>Qual é o período da função <M>{"y = \\sin(3x)"}</M>?</p>
          }
          options={[
            { letter: "a", text: <M>{"\\pi"}</M> },
            { letter: "b", text: <M>{"2\\pi/3"}</M>, correct: true },
            { letter: "c", text: <M>{"3\\pi"}</M> },
            { letter: "d", text: <M>{"6\\pi"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{3}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Amplitude e período"
          statement={
            <p>Para <M>{"y = 4\\cos(2x) - 1"}</M>, qual é a amplitude e o valor máximo?</p>
          }
          options={[
            { letter: "a", text: "Amplitude 4; máximo = 3", correct: true },
            { letter: "b", text: "Amplitude 4; máximo = 4" },
            { letter: "c", text: "Amplitude 3; máximo = 3" },
            { letter: "d", text: "Amplitude 2; máximo = 1" },
          ]}
          resolution={
            <>
              <p>Amplitude = |A| = 4. Valor máximo = A + D = 4 + (−1) = 3.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Equação trigonométrica"
          statement={
            <p>Resolva para <M>{"0 \\leq x < 2\\pi"}</M>: <M>{"2\\sin^2 x + \\sin x - 1 = 0"}</M></p>
          }
          options={[
            { letter: "a", text: <M>{"x = \\pi/2"}</M> },
            { letter: "b", text: <M>{"x = \\pi/6, \\; 5\\pi/6, \\; 7\\pi/6"}</M> },
            { letter: "c", text: <M>{"x = \\pi/6, \\; 5\\pi/6, \\; 3\\pi/2"}</M>, correct: true },
            { letter: "d", text: <M>{"x = \\pi/2, \\; 7\\pi/6, \\; 11\\pi/6"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"(2\\sin x - 1)(\\sin x + 1) = 0"}</M>
              <p><M>{"\\sin x = 1/2 \\Rightarrow x = \\pi/6, 5\\pi/6"}</M></p>
              <p><M>{"\\sin x = -1 \\Rightarrow x = 3\\pi/2"}</M></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Corrente alternada"
          statement={
            <p>
              A tensão de uma tomada é <M>{"V(t) = 311\\sin(120\\pi t)"}</M> volts.
              Qual é a amplitude e o período dessa função?
            </p>
          }
          options={[
            { letter: "a", text: "Amplitude = 311 V; Período = 1/60 s", correct: true },
            { letter: "b", text: "Amplitude = 220 V; Período = 1/60 s" },
            { letter: "c", text: "Amplitude = 311 V; Período = 60 s" },
            { letter: "d", text: "Amplitude = 120 V; Período = 1/120 s" },
          ]}
          resolution={
            <>
              <p>Amplitude = 311 V (valor de pico).</p>
              <M block={true}>{"T = \\frac{2\\pi}{120\\pi} = \\frac{1}{60} \\text{ s} \\quad (\\text{frequência de } 60 \\text{ Hz})"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Temperatura ao longo do ano"
          statement={
            <p>
              A temperatura média mensal de uma cidade é modelada por
              <M>{"T(m) = 5\\sin\\left(\\dfrac{\\pi m}{6} - \\dfrac{\\pi}{2}\\right) + 20"}</M>
              (°C, m = mês). Qual é a temperatura máxima e mínima?
            </p>
          }
          options={[
            { letter: "a", text: "Máx = 25°C; Mín = 15°C", correct: true },
            { letter: "b", text: "Máx = 20°C; Mín = 5°C" },
            { letter: "c", text: "Máx = 30°C; Mín = 10°C" },
            { letter: "d", text: "Máx = 25°C; Mín = 0°C" },
          ]}
          resolution={
            <>
              <p>Amplitude A = 5; valor médio D = 20.</p>
              <M block={true}>{"T_{\\max} = 20 + 5 = 25°C \\qquad T_{\\min} = 20 - 5 = 15°C"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
