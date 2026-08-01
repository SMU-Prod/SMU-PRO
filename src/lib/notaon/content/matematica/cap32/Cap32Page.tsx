"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 32</span>
          <h1>Semelhança e Teorema de Tales</h1>
          <p>
            Estude triângulos semelhantes, critérios de semelhança (AA, LAL, LLL),
            o Teorema de Tales e suas aplicações em cálculo de medidas indiretas,
            sombras, mapas e escalas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Semelhança</span>
        <h2>1. Figuras Semelhantes</h2>
        <p>
          Duas figuras são <strong>semelhantes</strong> quando têm os mesmos ângulos
          e lados proporcionais (mesma forma, tamanhos diferentes).
        </p>
        <M block={true}>{"\\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c} = k \\quad (k = \\text{razão de semelhança})"}</M>
        <div className="lesson-highlight">
          <h3>Áreas e volumes de figuras semelhantes</h3>
          <M block={true}>{"\\frac{A'}{A} = k^2 \\qquad \\frac{V'}{V} = k^3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Critérios de Semelhança</span>
        <h2>2. Critérios de Semelhança de Triângulos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Dados</th></tr>
            </thead>
            <tbody>
              <tr><td>AA (ou AAA)</td><td>2 ângulos correspondentes iguais</td></tr>
              <tr><td>LAL</td><td>2 lados proporcionais com ângulo entre eles igual</td></tr>
              <tr><td>LLL</td><td>3 lados proporcionais</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Critério mais usado: AA</h3>
          <p>
            Como a soma dos ângulos é 180°, basta saber que 2 ângulos são iguais
            para garantir que o terceiro também é.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema de Tales</span>
        <h2>3. Teorema de Tales</h2>
        <M block={true}>{"\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'}"}</M>
        <p>
          Se um feixe de retas paralelas é cortado por duas transversais,
          os segmentos correspondentes nas transversais são proporcionais.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 300 180" width="300" height="180" aria-label="Teorema de Tales">
            {/* Transversais */}
            <line x1="60" y1="20" x2="100" y2="170" stroke="#374151" strokeWidth="2"/>
            <line x1="160" y1="20" x2="240" y2="170" stroke="#374151" strokeWidth="2"/>
            {/* Paralelas */}
            <line x1="50" y1="40" x2="250" y2="40" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1="50" y1="90" x2="250" y2="90" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1="50" y1="140" x2="250" y2="140" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,3"/>
            {/* Pontos */}
            <circle cx="63" cy="40" r="4" fill="#dc2626"/>
            <circle cx="73" cy="90" r="4" fill="#dc2626"/>
            <circle cx="83" cy="140" r="4" fill="#dc2626"/>
            <circle cx="173" cy="40" r="4" fill="#16a34a"/>
            <circle cx="195" cy="90" r="4" fill="#16a34a"/>
            <circle cx="217" cy="140" r="4" fill="#16a34a"/>
            {/* Rótulos */}
            <text x="55" y="37" fontSize="11" fill="#dc2626">A</text>
            <text x="62" y="87" fontSize="11" fill="#dc2626">B</text>
            <text x="72" y="137" fontSize="11" fill="#dc2626">C</text>
            <text x="176" y="37" fontSize="11" fill="#16a34a">A'</text>
            <text x="198" y="87" fontSize="11" fill="#16a34a">B'</text>
            <text x="220" y="137" fontSize="11" fill="#16a34a">C'</text>
            <text x="150" y="175" textAnchor="middle" fontSize="11" fill="#374151">AB/BC = A'B'/B'C'</text>
          </svg>
          <figcaption>Teorema de Tales: retas paralelas criam segmentos proporcionais nas transversais</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tales — Proporção Geométrica</span>
        <h2>4. Segmentos Proporcionais — Visualização a/b = c/d</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Teorema de Tales com segmentos proporcionais rotulados a, b, c, d">
            <rect x="10" y="10" width="680" height="200" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Retas paralelas */}
            <line x1="60" y1="50"  x2="640" y2="50"  stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="8,4"/>
            <line x1="60" y1="110" x2="640" y2="110" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="8,4"/>
            <line x1="60" y1="170" x2="640" y2="170" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="8,4"/>
            {/* Etiquetas paralelas */}
            <text x="48" y="54"  textAnchor="end" fontSize="12" fill="#1e40af">r₁</text>
            <text x="48" y="114" textAnchor="end" fontSize="12" fill="#1e40af">r₂</text>
            <text x="48" y="174" textAnchor="end" fontSize="12" fill="#1e40af">r₃</text>
            {/* Transversal 1 */}
            <line x1="200" y1="30" x2="160" y2="190" stroke="#3b82f6" strokeWidth="2.5"/>
            <circle cx="194" cy="50"  r="5" fill="#3b82f6"/>
            <circle cx="178" cy="110" r="5" fill="#3b82f6"/>
            <circle cx="163" cy="170" r="5" fill="#3b82f6"/>
            {/* Segmentos a e b — transversal 1 */}
            <text x="205" y="84"  fontSize="15" fill="#1e40af" fontWeight="700">a</text>
            <text x="205" y="144" fontSize="15" fill="#1e40af" fontWeight="700">b</text>
            {/* Transversal 2 */}
            <line x1="480" y1="30" x2="520" y2="190" stroke="#facc15" strokeWidth="2.5"/>
            <circle cx="484" cy="50"  r="5" fill="#ca8a04"/>
            <circle cx="498" cy="110" r="5" fill="#ca8a04"/>
            <circle cx="513" cy="170" r="5" fill="#ca8a04"/>
            {/* Segmentos c e d — transversal 2 */}
            <text x="525" y="84"  fontSize="15" fill="#92400e" fontWeight="700">c</text>
            <text x="525" y="144" fontSize="15" fill="#92400e" fontWeight="700">d</text>
            {/* Proporção central */}
            <rect x="270" y="85" width="160" height="50" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="350" y="116" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">a / b = c / d</text>
            <text x="350" y="200" textAnchor="middle" fontSize="12" fill="#1e40af">Segmentos determinados pelas paralelas nas duas transversais são proporcionais</text>
          </svg>
          <figcaption>Teorema de Tales: a razão entre os segmentos de uma transversal iguala a da outra (a/b = c/d)</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>a</th><th>b</th><th>c</th><th>d</th><th>Verificação (a/b = c/d)</th></tr>
            </thead>
            <tbody>
              <tr><td>4</td><td>6</td><td>6</td><td>9</td><td>4/6 = 2/3 = 6/9 ✓</td></tr>
              <tr><td>3</td><td>5</td><td>6</td><td>10</td><td>3/5 = 6/10 ✓</td></tr>
              <tr><td>8</td><td>12</td><td>10</td><td>15</td><td>8/12 = 2/3 = 10/15 ✓</td></tr>
              <tr><td>5</td><td>7</td><td>15</td><td>21</td><td>5/7 = 15/21 ✓</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tales e Triângulo</span>
        <h2>5. Teorema de Tales no Triângulo</h2>
        <p>
          Uma reta paralela a um lado do triângulo, que corta os outros dois lados,
          os divide em partes proporcionais:
        </p>
        <M block={true}>{"\\frac{AE}{EB} = \\frac{AF}{FC} \\quad \\Rightarrow \\quad \\frac{AE}{AB} = \\frac{AF}{AC} = \\frac{EF}{BC}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Altura no Triângulo Retângulo</span>
        <h2>6. Relações Métricas no Triângulo Retângulo</h2>
        <M block={true}>{"h^2 = m \\cdot n \\quad (h = \\text{altura rel. hipotenusa, } m \\text{ e } n \\text{ projeções dos catetos})"}</M>
        <M block={true}>{"a^2 = m \\cdot c \\qquad b^2 = n \\cdot c"}</M>
        <div className="lesson-highlight">
          <h3>Legenda</h3>
          <ul>
            <li>c = hipotenusa; a, b = catetos</li>
            <li>m = projeção de a sobre c; n = projeção de b sobre c</li>
            <li>h = altura relativa à hipotenusa</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escala e Mapa</span>
        <h2>7. Escalas em Mapas e Plantas</h2>
        <M block={true}>{"\\text{Escala} = \\frac{d_{\\text{mapa}}}{d_{\\text{real}}} = \\frac{1}{n}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Mapa com escala 1:50.000. Uma distância de 6 cm no mapa corresponde a:</p>
          <M block={true}>{"d_{\\text{real}} = 6 \\times 50000 = 300000 \\text{ cm} = 3 \\text{ km}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sombra</span>
        <h2>8. Semelhança em Medidas de Sombra</h2>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Uma estaca de 1,5 m projeta sombra de 2 m. Uma árvore próxima projeta
            sombra de 14 m. Qual é a altura da árvore?
          </p>
          <M block={true}>{"\\frac{h}{1{,}5} = \\frac{14}{2} \\Rightarrow h = 1{,}5 \\times 7 = 10{,}5 \\text{ m}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisão Proporcional</span>
        <h2>9. Divisão de Segmento em Partes Proporcionais</h2>
        <M block={true}>{"\\text{Dividir AB em m+n partes: } AP = \\frac{m}{m+n} \\cdot AB"}</M>
        <div className="lesson-highlight">
          <h3>Divisão interna e externa</h3>
          <M block={true}>{"\\frac{AP}{PB} = \\frac{m}{n}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bissetriz</span>
        <h2>10. Teorema da Bissetriz</h2>
        <M block={true}>{"\\frac{AC}{AB} = \\frac{CD}{BD} \\quad (\\text{bissetriz interna de }\\hat A \\text{ divide o lado oposto})"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Em △ABC com AB = 6, AC = 4. A bissetriz interna de A toca BC em D.
          </p>
          <M block={true}>{"\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{6}{4} = \\frac{3}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Semelhança e Tales</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Semelhança</span>
            <h3>Razão k</h3>
            <M block={true}>{"\\frac{a'}{a}=\\frac{b'}{b}=k"}</M>
          </div>
          <div className="math-card">
            <span>Áreas</span>
            <h3>Proporcional a k²</h3>
            <M block={true}>{"A'/A = k^2"}</M>
          </div>
          <div className="math-card">
            <span>Tales</span>
            <h3>Paralelas e proporção</h3>
            <M block={true}>{"AB/BC = A'B'/B'C'"}</M>
          </div>
          <div className="math-card">
            <span>h²</span>
            <h3>Altura no ret.</h3>
            <M block={true}>{"h^2 = m \\cdot n"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Razão de semelhança"
          statement={
            <p>
              Dois triângulos semelhantes têm lados correspondentes 6 e 9.
              Qual é a razão de semelhança e a razão entre as áreas?
            </p>
          }
          options={[
            { letter: "a", text: "k = 2/3; áreas na razão 4/9", correct: true },
            { letter: "b", text: "k = 2/3; áreas na razão 2/3" },
            { letter: "c", text: "k = 3/2; áreas na razão 9/4" },
            { letter: "d", text: "k = 1/3; áreas na razão 1/9" },
          ]}
          resolution={
            <>
              <M block={true}>{"k = \\frac{6}{9} = \\frac{2}{3} \\Rightarrow \\frac{A_1}{A_2} = k^2 = \\frac{4}{9}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Teorema de Tales"
          statement={
            <p>
              Na figura, retas paralelas dividem uma transversal em segmentos 4 e 6.
              Na outra transversal, o primeiro segmento mede 5. Qual é o segundo?
            </p>
          }
          options={[
            { letter: "a", text: "6,5" },
            { letter: "b", text: "7,5", correct: true },
            { letter: "c", text: "8" },
            { letter: "d", text: "9" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{4}{6} = \\frac{5}{x} \\Rightarrow x = \\frac{5 \\times 6}{4} = 7{,}5"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Relação métrica"
          statement={
            <p>
              No triângulo retângulo, a hipotenusa tem 25 cm e as projeções dos
              catetos sobre ela são 9 e 16 cm. Qual é a altura relativa à hipotenusa?
            </p>
          }
          options={[
            { letter: "a", text: "10 cm" },
            { letter: "b", text: "12 cm", correct: true },
            { letter: "c", text: "15 cm" },
            { letter: "d", text: "8 cm" },
          ]}
          resolution={
            <>
              <M block={true}>{"h^2 = m \\times n = 9 \\times 16 = 144 \\Rightarrow h = 12 \\text{ cm}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Mapa de cidade"
          statement={
            <p>
              Em um mapa de escala 1:25.000, a distância entre dois bairros é de
              8 cm. Qual é a distância real em quilômetros?
            </p>
          }
          options={[
            { letter: "a", text: "2 km", correct: true },
            { letter: "b", text: "200 km" },
            { letter: "c", text: "25 km" },
            { letter: "d", text: "0,2 km" },
          ]}
          resolution={
            <>
              <M block={true}>{"d = 8 \\times 25000 = 200000 \\text{ cm} = 2 \\text{ km}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Altura de árvore por sombra"
          statement={
            <p>
              Uma estaca de 2 m projeta sombra de 3 m. Simultaneamente, uma
              palmeira projeta sombra de 18 m. Qual é a altura da palmeira?
            </p>
          }
          options={[
            { letter: "a", text: "12 m", correct: true },
            { letter: "b", text: "9 m" },
            { letter: "c", text: "27 m" },
            { letter: "d", text: "6 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{h}{2} = \\frac{18}{3} \\Rightarrow h = 2 \\times 6 = 12 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
