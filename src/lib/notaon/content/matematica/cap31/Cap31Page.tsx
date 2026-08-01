"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 31</span>
          <h1>Geometria Plana: Ângulos e Triângulos</h1>
          <p>
            Estude os conceitos fundamentais de ângulos, suas relações e classificação
            de triângulos. Domine os principais teoremas: soma dos ângulos internos,
            teorema exterior e critérios de congruência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos Básicos</span>
        <h2>1. Ângulos — Conceitos e Classificação</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Medida</th></tr>
            </thead>
            <tbody>
              <tr><td>Nulo</td><td>0°</td></tr>
              <tr><td>Agudo</td><td>0° &lt; α &lt; 90°</td></tr>
              <tr><td>Reto</td><td>90°</td></tr>
              <tr><td>Obtuso</td><td>90° &lt; α &lt; 180°</td></tr>
              <tr><td>Raso</td><td>180°</td></tr>
              <tr><td>Reflexo</td><td>180° &lt; α &lt; 360°</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações entre Ângulos</span>
        <h2>2. Pares de Ângulos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Par</th><th>Definição</th><th>Soma</th></tr>
            </thead>
            <tbody>
              <tr><td>Complementares</td><td>Somam 90°</td><td><M>{"\\alpha + \\beta = 90°"}</M></td></tr>
              <tr><td>Suplementares</td><td>Somam 180°</td><td><M>{"\\alpha + \\beta = 180°"}</M></td></tr>
              <tr><td>Replementares</td><td>Somam 360°</td><td><M>{"\\alpha + \\beta = 360°"}</M></td></tr>
              <tr><td>Opostos pelo vértice</td><td>Verticalmente opostos</td><td>São iguais</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Paralelas</span>
        <h2>3. Retas Paralelas Cortadas por Transversal</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 300 180" width="300" height="180" aria-label="Paralelas e transversal">
            {/* Paralelas */}
            <line x1="20" y1="60" x2="280" y2="60" stroke="#2563eb" strokeWidth="2"/>
            <line x1="20" y1="130" x2="280" y2="130" stroke="#2563eb" strokeWidth="2"/>
            {/* Transversal */}
            <line x1="80" y1="20" x2="200" y2="170" stroke="#dc2626" strokeWidth="2"/>
            {/* Ângulos */}
            <text x="110" y="55" fontSize="12" fill="#16a34a">α (alt. int.)</text>
            <text x="130" y="140" fontSize="12" fill="#16a34a">α (alt. int.)</text>
            <text x="90" y="75" fontSize="11" fill="#7c3aed">β (coresp.)</text>
            <text x="155" y="148" fontSize="11" fill="#7c3aed">β (coresp.)</text>
          </svg>
          <figcaption>Ângulos alternos internos são iguais; correspondentes são iguais</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ângulos</th><th>Relação</th></tr>
            </thead>
            <tbody>
              <tr><td>Alternos internos</td><td>Iguais</td></tr>
              <tr><td>Alternos externos</td><td>Iguais</td></tr>
              <tr><td>Correspondentes</td><td>Iguais</td></tr>
              <tr><td>Colaterais (somam 180°)</td><td>Suplementares</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulos</span>
        <h2>4. Classificação de Triângulos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Tipo</th><th>Característica</th></tr>
            </thead>
            <tbody>
              <tr><td rowSpan={3}>Lados</td><td>Equilátero</td><td>3 lados iguais</td></tr>
              <tr><td>Isósceles</td><td>2 lados iguais</td></tr>
              <tr><td>Escaleno</td><td>3 lados diferentes</td></tr>
              <tr><td rowSpan={3}>Ângulos</td><td>Acutângulo</td><td>3 ângulos agudos</td></tr>
              <tr><td>Retângulo</td><td>1 ângulo de 90°</td></tr>
              <tr><td>Obtusângulo</td><td>1 ângulo obtuso</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulos por Ângulo</span>
        <h2>5. Os Três Tipos de Triângulo (por ângulo)</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Três tipos de triângulo: acutângulo, retângulo e obtusângulo">
            <rect x="10" y="10" width="680" height="200" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5"/>

            {/* === Acutângulo === */}
            <polygon points="120,170 60,70 180,70" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2"/>
            {/* ângulo no topo ~60° */}
            <path d="M108,82 A14,14 0 0,1 132,82" fill="none" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="120" y="79" textAnchor="middle" fontSize="10" fill="#1e40af">60°</text>
            {/* ângulo base esquerda */}
            <path d="M73,158 A14,14 0 0,1 68,144" fill="none" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="58" y="165" textAnchor="middle" fontSize="10" fill="#1e40af">60°</text>
            {/* ângulo base direita */}
            <path d="M167,158 A14,14 0 0,0 172,144" fill="none" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="182" y="165" textAnchor="middle" fontSize="10" fill="#1e40af">60°</text>
            <text x="120" y="195" textAnchor="middle" fontSize="13" fill="#1e3a8a" fontWeight="700">Acutângulo</text>
            <text x="120" y="208" textAnchor="middle" fontSize="10" fill="#374151">3 ângulos agudos</text>

            {/* === Retângulo === */}
            <polygon points="350,170 280,170 350,70" fill="#facc15" fillOpacity="0.3" stroke="#ca8a04" strokeWidth="2"/>
            {/* marcador 90° */}
            <rect x="280" y="154" width="16" height="16" fill="none" stroke="#92400e" strokeWidth="2"/>
            <text x="340" y="160" textAnchor="middle" fontSize="10" fill="#92400e">90°</text>
            <path d="M296,80 A14,14 0 0,1 308,90" fill="none" stroke="#92400e" strokeWidth="1.5"/>
            <text x="318" y="88" textAnchor="middle" fontSize="10" fill="#92400e">~37°</text>
            <path d="M338,158 A14,14 0 0,0 328,150" fill="none" stroke="#92400e" strokeWidth="1.5"/>
            <text x="362" y="150" textAnchor="middle" fontSize="10" fill="#92400e">~53°</text>
            <text x="315" y="195" textAnchor="middle" fontSize="13" fill="#92400e" fontWeight="700">Retângulo</text>
            <text x="315" y="208" textAnchor="middle" fontSize="10" fill="#374151">1 ângulo de 90°</text>

            {/* === Obtusângulo === */}
            <polygon points="560,170 460,170 620,80" fill="#f87171" fillOpacity="0.2" stroke="#dc2626" strokeWidth="2"/>
            {/* ângulo obtuso na base esquerda */}
            <path d="M476,158 A18,18 0 0,1 472,140" fill="none" stroke="#b91c1c" strokeWidth="1.5"/>
            <text x="450" y="158" textAnchor="middle" fontSize="10" fill="#b91c1c">120°</text>
            {/* ângulo no topo */}
            <path d="M610,92 A12,12 0 0,0 600,100" fill="none" stroke="#b91c1c" strokeWidth="1.5"/>
            <text x="635" y="95" textAnchor="middle" fontSize="10" fill="#b91c1c">30°</text>
            {/* ângulo base direita */}
            <path d="M548,158 A12,12 0 0,0 554,148" fill="none" stroke="#b91c1c" strokeWidth="1.5"/>
            <text x="548" y="170" textAnchor="middle" fontSize="10" fill="#b91c1c">30°</text>
            <text x="540" y="195" textAnchor="middle" fontSize="13" fill="#b91c1c" fontWeight="700">Obtusângulo</text>
            <text x="540" y="208" textAnchor="middle" fontSize="10" fill="#374151">1 ângulo obtuso (&gt; 90°)</text>
          </svg>
          <figcaption>Os três tipos de triângulo classificados pelos ângulos internos</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma dos Ângulos</span>
        <h2>6. Soma dos Ângulos Internos e Externos</h2>
        <M block={true}>{"\\hat A + \\hat B + \\hat C = 180° \\quad (\\text{ângulos internos do triângulo})"}</M>
        <M block={true}>{"\\text{Ângulo externo} = \\hat A + \\hat B \\quad (\\text{soma dos não adjacentes})"}</M>
        <div className="lesson-highlight">
          <h3>Para polígono de n lados</h3>
          <M block={true}>{"S_i = (n-2) \\times 180° \\qquad S_e = 360°"}</M>
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr><th>Polígono</th><th>n</th><th>Soma int.</th><th>Ângulo int. regular</th></tr>
              </thead>
              <tbody>
                <tr><td>Triângulo</td><td>3</td><td>180°</td><td>60°</td></tr>
                <tr><td>Quadrado</td><td>4</td><td>360°</td><td>90°</td></tr>
                <tr><td>Pentágono</td><td>5</td><td>540°</td><td>108°</td></tr>
                <tr><td>Hexágono</td><td>6</td><td>720°</td><td>120°</td></tr>
                <tr><td>Octógono</td><td>8</td><td>1080°</td><td>135°</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Congruência</span>
        <h2>7. Critérios de Congruência de Triângulos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Dados</th></tr>
            </thead>
            <tbody>
              <tr><td>LLL</td><td>3 lados correspondentes iguais</td></tr>
              <tr><td>LAL</td><td>2 lados e o ângulo entre eles</td></tr>
              <tr><td>ALA</td><td>2 ângulos e o lado entre eles</td></tr>
              <tr><td>LAAo</td><td>1 lado e 2 ângulos (inclui ângulo oposto ao lado)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Triangular</span>
        <h2>8. Condição de Existência do Triângulo</h2>
        <M block={true}>{"|a - b| < c < a + b \\quad \\text{(para qualquer lado c)}"}</M>
        <div className="lesson-highlight">
          <h3>Equivalente</h3>
          <p>Cada lado deve ser menor que a soma dos outros dois e maior que a diferença.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Retas Notáveis</span>
        <h2>9. Retas Notáveis do Triângulo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Reta</th><th>Definição</th><th>Ponto de interseção</th></tr>
            </thead>
            <tbody>
              <tr><td>Mediana</td><td>Vértice ao ponto médio do lado oposto</td><td>Baricentro (G)</td></tr>
              <tr><td>Bissetriz</td><td>Divide o ângulo em dois iguais</td><td>Incentro (I)</td></tr>
              <tr><td>Altura</td><td>Perpendicular ao lado oposto</td><td>Ortocentro (H)</td></tr>
              <tr><td>Mediatriz</td><td>Perpendicular ao meio do lado</td><td>Circuncentro (O)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Baricentro</span>
        <h2>10. Propriedades do Baricentro</h2>
        <M block={true}>{"G = \\left(\\frac{x_A+x_B+x_C}{3}, \\frac{y_A+y_B+y_C}{3}\\right)"}</M>
        <M block={true}>{"\\text{O baricentro divide cada mediana em } 2:1 \\text{ a partir do vértice}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Geometria de Triângulos</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Soma dos ângulos internos = 180°.</li>
            <li>Ângulo externo = soma dos dois ângulos internos não adjacentes.</li>
            <li>Condição de existência: <M>{"a+b > c"}</M> para qualquer lado.</li>
            <li>Critérios de congruência: LLL, LAL, ALA, LAAo.</li>
            <li>Retas notáveis: mediana (baricentro), bissetriz (incentro), altura (ortocentro), mediatriz (circuncentro).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Ângulo de triângulo"
          statement={
            <p>
              Em um triângulo, dois ângulos medem 50° e 70°. Qual é o terceiro?
            </p>
          }
          options={[
            { letter: "a", text: "50°" },
            { letter: "b", text: "60°", correct: true },
            { letter: "c", text: "70°" },
            { letter: "d", text: "80°" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\hat C = 180° - 50° - 70° = 60°"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ângulo externo"
          statement={
            <p>
              Em um triângulo, um ângulo externo mede 130°. Os dois ângulos internos
              não adjacentes medem x e 2x. Qual é o valor de x?
            </p>
          }
          options={[
            { letter: "a", text: "30°" },
            { letter: "b", text: "43,3°", correct: true },
            { letter: "c", text: "65°" },
            { letter: "d", text: "50°" },
          ]}
          resolution={
            <>
              <M block={true}>{"x + 2x = 130° \\Rightarrow 3x = 130° \\Rightarrow x \\approx 43{,}3°"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Soma dos ângulos internos de polígono"
          statement={
            <p>
              Um polígono convexo tem a soma dos ângulos internos igual a 1440°.
              Quantos lados possui?
            </p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "10", correct: true },
            { letter: "c", text: "12" },
            { letter: "d", text: "9" },
          ]}
          resolution={
            <>
              <M block={true}>{"(n-2)\\times180° = 1440° \\Rightarrow n-2=8 \\Rightarrow n=10"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Ângulos em construção"
          statement={
            <p>
              Em uma treliça, duas vigas formam ângulos de 35° e 75° com a viga
              horizontal. Um reforço perpendicular à viga vertical cria um ângulo
              externo ao triângulo formado. Qual é esse ângulo externo?
            </p>
          }
          options={[
            { letter: "a", text: "110°", correct: true },
            { letter: "b", text: "70°" },
            { letter: "c", text: "70°" },
            { letter: "d", text: "35°" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\hat C = 180°-35°-75° = 70° \\Rightarrow \\text{ext}=180°-70°=110°"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Existência de triângulo"
          statement={
            <p>
              Quais dos seguintes conjuntos de medidas pode formar um triângulo?
            </p>
          }
          options={[
            { letter: "a", text: "(2, 3, 6)" },
            { letter: "b", text: "(5, 12, 13)", correct: true },
            { letter: "c", text: "(1, 1, 3)" },
            { letter: "d", text: "(4, 4, 9)" },
          ]}
          resolution={
            <>
              <p>Para (5, 12, 13): 5+12 = 17 &gt; 13 ✓; 5+13 = 18 &gt; 12 ✓; 12+13 = 25 &gt; 5 ✓</p>
              <p>Além disso, é terna pitagórica: 5² + 12² = 169 = 13²</p>
            </>
          }
        />
      </section>
    </article>
  );
}
