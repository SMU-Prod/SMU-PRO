"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 24</span>
          <h1>Sistemas Lineares</h1>
          <p>
            Resolva sistemas de equações lineares pelos métodos de substituição,
            adição/eliminação, matrizes escalonadas (Gauss) e Regra de Cramer.
            Classifique sistemas e interprete geometricamente as soluções.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Sistema Linear — Definição</h2>
        <p>
          Um <strong>sistema linear</strong> de m equações e n incógnitas é um conjunto
          de equações da forma:
        </p>
        <M block={true}>{"\\begin{cases} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2 \\\\ \\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m \\end{cases}"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Classificação</th><th>Soluções</th><th>Condição</th></tr>
            </thead>
            <tbody>
              <tr><td>SPD (possível e determinado)</td><td>Solução única</td><td><M>{"\\det A \\neq 0"}</M></td></tr>
              <tr><td>SPI (possível e indeterminado)</td><td>Infinitas soluções</td><td><M>{"\\det A = 0"}</M>, sistema compatível</td></tr>
              <tr><td>SI (impossível)</td><td>Nenhuma</td><td><M>{"\\det A = 0"}</M>, sistema incompatível</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano Cartesiano</span>
        <h2>2. Visualização no Plano Cartesiano</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Plano cartesiano com sistema linear: retas se intersectando e retas paralelas">
            <rect width="700" height="220" fill="#f0f4ff" rx="8" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* ---- painel esquerdo: SPD (reta 1 e reta 2 se intersectam) ---- */}
            {/* título */}
            <text x="175" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e40af">SPD — solução única</text>
            {/* eixos */}
            <line x1="60" y1="190" x2="290" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="175" y1="30" x2="175" y2="200" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* setas dos eixos */}
            <polygon points="290,187 298,190 290,193" fill="#94a3b8"/>
            <polygon points="172,30 175,22 178,30" fill="#94a3b8"/>
            {/* labels eixos */}
            <text x="300" y="193" fontSize="11" fill="#64748b">x</text>
            <text x="178" y="20" fontSize="11" fill="#64748b">y</text>
            {/* Reta 1: y = x − 1   →   passes through (100,190+90=needs offset) */}
            {/* no SVG y cresce pra baixo, escala: 1 unidade = 30px; origem em (175,130) */}
            {/* Reta 1: y = x-1  →  SVG: ySVG = 130 - 30*(xUnit-1) = 160 - 30*xUnit */}
            {/* x=-3→(85,250clip), x=4→(295,10) — draw (85,160+90)=(85,250)→clip at y=190: x=(190-160)/30+0≈... easier: just pick two nice points */}
            {/* two points for y=x-1: (1,0)→SVG(205,130) and (-2,-3)→SVG(115,220→clip), (4,3)→SVG(295,40) */}
            <line x1="90" y1="200" x2="280" y2="10" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x="283" y="12" fontSize="11" fill="#1e40af" fontWeight="600">r₁</text>
            {/* Reta 2: y = -x+3  →  two points: (0,3)→SVG(175,40) and (4,-1)→SVG(295,160) */}
            <line x1="80" y1="60" x2="285" y2="185" stroke="#f97316" strokeWidth="2.5"/>
            <text x="287" y="185" fontSize="11" fill="#ea580c" fontWeight="600">r₂</text>
            {/* interseção: x-1=-x+3 → 2x=4 → x=2,y=1 → SVG(175+2*30, 130-1*30)=(235,100) */}
            <circle cx="235" cy="100" r="6" fill="#16a34a" stroke="white" strokeWidth="2"/>
            <text x="242" y="96" fontSize="11" fill="#15803d" fontWeight="700">S=(2,1)</text>
            {/* ---- divisória ---- */}
            <line x1="350" y1="15" x2="350" y2="205" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6,3"/>
            {/* ---- painel direito: SI (paralelas, sem solução) ---- */}
            <text x="525" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e40af">SI — sem solução</text>
            {/* eixos */}
            <line x1="410" y1="190" x2="640" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="525" y1="30" x2="525" y2="200" stroke="#94a3b8" strokeWidth="1.5"/>
            <polygon points="640,187 648,190 640,193" fill="#94a3b8"/>
            <polygon points="522,30 525,22 528,30" fill="#94a3b8"/>
            <text x="650" y="193" fontSize="11" fill="#64748b">x</text>
            <text x="528" y="20" fontSize="11" fill="#64748b">y</text>
            {/* Reta 3: y = x + 1  →  two points: (-3,-2)→SVG(435,190) and (3,4)→SVG(615,10) */}
            <line x1="435" y1="190" x2="615" y2="10" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x="618" y="12" fontSize="11" fill="#1e40af" fontWeight="600">r₃</text>
            {/* Reta 4: y = x − 2  →  dois pontos: (-1,-3)→SVG(495,220clip→use y=190: x=-1+2+0= needs recalc */}
            {/* y=x-2: pt1=(0,-2)→SVG(525,190) and pt2=(4,2)→SVG(645,70); outro: (-2,-4)→SVG(465,250clip) */}
            <line x1="465" y1="200" x2="650" y2="15" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="8,4"/>
            <text x="652" y="17" fontSize="11" fill="#dc2626" fontWeight="600">r₄</text>
            {/* nota paralelas */}
            <text x="525" y="175" textAnchor="middle" fontSize="11" fill="#dc2626">sem interseção</text>
            <text x="525" y="190" textAnchor="middle" fontSize="10" fill="#94a3b8">(retas paralelas)</text>
          </svg>
          <figcaption>Esquerda: sistema SPD — retas r₁ e r₂ se intersectam no ponto S=(2,1). Direita: sistema SI — retas r₃ e r₄ são paralelas, sem ponto em comum.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interpretação Geométrica</span>
        <h2>3. Classificação Geométrica Resumida (2×2)</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Interpretações geométricas de sistemas 2x2">
            {/* SPD - interseção única */}
            <g>
              <line x1="20" y1="40" x2="100" y2="140" stroke="#2563eb" strokeWidth="2"/>
              <line x1="20" y1="130" x2="110" y2="30" stroke="#dc2626" strokeWidth="2"/>
              <circle cx="62" cy="84" r="5" fill="#16a34a"/>
              <text x="60" y="155" textAnchor="middle" fontSize="11" fill="#374151">SPD</text>
              <text x="60" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">1 solução</text>
            </g>
            {/* SPI - retas coincidentes */}
            <g>
              <line x1="135" y1="50" x2="235" y2="130" stroke="#2563eb" strokeWidth="3"/>
              <line x1="138" y1="53" x2="238" y2="133" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"/>
              <text x="185" y="155" textAnchor="middle" fontSize="11" fill="#374151">SPI</text>
              <text x="185" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">∞ soluções</text>
            </g>
            {/* SI - paralelas */}
            <g>
              <line x1="270" y1="50" x2="330" y2="140" stroke="#2563eb" strokeWidth="2"/>
              <line x1="295" y1="50" x2="355" y2="140" stroke="#dc2626" strokeWidth="2"/>
              <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#374151">SI</text>
              <text x="310" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">sem solução</text>
            </g>
          </svg>
          <figcaption>Interpretação geométrica: SPD, SPI e SI — retas que se cruzam, coincidem ou são paralelas</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método de Substituição</span>
        <h2>4. Método da Substituição</h2>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases}2x+y=7\\\\x-y=2\\end{cases}"}</M>
          <p>Da segunda equação: <M>{"x = y+2"}</M>. Substituindo:</p>
          <M block={true}>{"2(y+2)+y=7 \\Rightarrow 3y=3 \\Rightarrow y=1 \\Rightarrow x=3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método de Adição</span>
        <h2>5. Método da Adição (Eliminação)</h2>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases}3x+2y=11\\\\x-2y=1\\end{cases}"}</M>
          <p>Somando as equações:</p>
          <M block={true}>{"4x = 12 \\Rightarrow x = 3 \\Rightarrow 2y = 11-9 = 2 \\Rightarrow y = 1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalonamento de Gauss</span>
        <h2>6. Método de Gauss — Escalonamento</h2>
        <p>
          Transforma o sistema em forma triangular usando operações elementares
          nas linhas da matriz aumentada <M>{"[A|b]"}</M>:
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo 3×3</h3>
          <M block={true}>{"\\begin{cases}x+y+z=6\\\\2x-y+z=3\\\\x+2y-z=2\\end{cases}"}</M>
          <p>Matriz aumentada e escalonamento:</p>
          <M block={true}>{"\\begin{pmatrix}1&1&1&|&6\\\\2&-1&1&|&3\\\\1&2&-1&|&2\\end{pmatrix} \\xrightarrow{\\text{L2-2L1, L3-L1}} \\begin{pmatrix}1&1&1&|&6\\\\0&-3&-1&|&-9\\\\0&1&-2&|&-4\\end{pmatrix}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cramer</span>
        <h2>7. Regra de Cramer</h2>
        <M block={true}>{"x_i = \\frac{\\det A_i}{\\det A}"}</M>
        <p>
          Onde <M>{"A_i"}</M> substitui a coluna i pelos termos independentes.
          Só funciona quando <M>{"\\det A \\neq 0"}</M> (sistema SPD).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Discussão</span>
        <h2>8. Discussão do Sistema com Parâmetros</h2>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"\\begin{cases}kx+2y=3\\\\2x+ky=6\\end{cases}: \\det A = k^2-4"}</M>
          <ul>
            <li><M>{"k \\neq \\pm 2"}</M>: SPD (solução única)</li>
            <li><M>{"k = 2"}</M>: SPI (L1 = L2/2 → infinitas soluções)</li>
            <li><M>{"k = -2"}</M>: SI (paralelas, sem solução)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistemas Homogêneos</span>
        <h2>9. Sistemas Homogêneos</h2>
        <M block={true}>{"Ax = 0"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Soluções</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\det A \\neq 0"}</M></td><td>Solução trivial: x = 0</td></tr>
              <tr><td><M>{"\\det A = 0"}</M></td><td>Infinitas soluções (não triviais)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>10. Aplicações de Sistemas Lineares</h2>
        <div className="lesson-highlight">
          <h3>Mistura de substâncias</h3>
          <p>
            Quanto de solução a 20% e de 50% deve ser misturado para obter
            300 mL de solução a 30%?
          </p>
          <M block={true}>{"\\begin{cases}x+y=300\\\\0{,}2x+0{,}5y=90\\end{cases} \\Rightarrow x=200 \\text{ mL}, \\; y=100 \\text{ mL}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Problema de custo e receita</h3>
          <p>Dois produtos A e B têm receitas dadas por um sistema 2×2.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Sistemas Lineares</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Método</th><th>Melhor para</th><th>Limitação</th></tr>
            </thead>
            <tbody>
              <tr><td>Substituição</td><td>Sistemas 2×2 simples</td><td>Pode gerar frações</td></tr>
              <tr><td>Adição</td><td>Eliminar incógnita rapidamente</td><td>Funciona bem em 2×2</td></tr>
              <tr><td>Gauss</td><td>Sistemas maiores (n×n)</td><td>Mais trabalhoso</td></tr>
              <tr><td>Cramer</td><td>SPD, n pequeno</td><td>Só quando det ≠ 0</td></tr>
              <tr><td>Inversa</td><td>SPD: x = A⁻¹b</td><td>Requer cálculo da inversa</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Sistema 2×2 por substituição"
          statement={
            <p>
              Resolva: <M>{"\\begin{cases}x+2y=8\\\\x-y=2\\end{cases}"}</M>
            </p>
          }
          options={[
            { letter: "a", text: "(4, 2)", correct: true },
            { letter: "b", text: "(2, 4)" },
            { letter: "c", text: "(6, 1)" },
            { letter: "d", text: "(3, 3)" },
          ]}
          resolution={
            <>
              <M block={true}>{"x = y+2 \\Rightarrow (y+2)+2y=8 \\Rightarrow y=2, x=4"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Classificação do sistema"
          statement={
            <p>
              O sistema <M>{"\\begin{cases}2x-4y=6\\\\x-2y=3\\end{cases}"}</M> é:
            </p>
          }
          options={[
            { letter: "a", text: "SPD" },
            { letter: "b", text: "SPI", correct: true },
            { letter: "c", text: "SI" },
            { letter: "d", text: "Impossível determinar" },
          ]}
          resolution={
            <>
              <p>A primeira equação é 2 vezes a segunda: as retas são coincidentes.</p>
              <M block={true}>{"\\det A = -4+4 = 0 \\Rightarrow \\text{SPI}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Sistema 3×3"
          statement={
            <p>
              Resolva o sistema: <M>{"\\begin{cases}x+y+z=6\\\\2x+y=5\\\\y+z=5\\end{cases}"}</M>
            </p>
          }
          options={[
            { letter: "a", text: "x=1, y=3, z=2", correct: true },
            { letter: "b", text: "x=2, y=1, z=3" },
            { letter: "c", text: "x=3, y=2, z=1" },
            { letter: "d", text: "x=1, y=2, z=3" },
          ]}
          resolution={
            <>
              <p>De (2): y = 5−2x. De (3): z = 5−y = 5−(5−2x) = 2x. Em (1):</p>
              <M block={true}>{"x+(5-2x)+2x = 6 \\Rightarrow x+5=6 \\Rightarrow x=1, y=3, z=2"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Mistura de soluções"
          statement={
            <p>
              Uma química precisa preparar 200 mL de solução a 35% misturando
              soluções a 20% e 50%. Quantos mL de cada solução deve usar?
            </p>
          }
          options={[
            { letter: "a", text: "100 mL de 20% e 100 mL de 50%" },
            { letter: "b", text: "100 mL de 20% e 100 mL de 50%" },
            { letter: "c", text: "100 mL de cada", correct: true },
            { letter: "d", text: "80 mL de 20% e 120 mL de 50%" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\begin{cases}x+y=200\\\\0{,}2x+0{,}5y=70\\end{cases}"}</M>
              <M block={true}>{"0{,}3x=60-40=30\\cdot\\tfrac{1}{1} \\Rightarrow x=100, y=100"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Custo de produção"
          statement={
            <p>
              Uma fábrica produz dois tipos de produto. O custo total é
              <M>{"3x+5y=95"}</M> e a quantidade segue <M>{"x+y=25"}</M>.
              Quantas unidades de cada tipo são produzidas?
            </p>
          }
          options={[
            { letter: "a", text: "x = 15, y = 10", correct: true },
            { letter: "b", text: "x = 10, y = 15" },
            { letter: "c", text: "x = 20, y = 5" },
            { letter: "d", text: "x = 5, y = 20" },
          ]}
          resolution={
            <>
              <M block={true}>{"3x+5(25-x)=95 \\Rightarrow -2x=-30 \\Rightarrow x=15, y=10"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
