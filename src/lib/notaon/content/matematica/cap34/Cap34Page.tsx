"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 34</span>
          <h1>Circunferência e Círculo</h1>
          <p>
            Estude a circunferência, seus elementos (arco, corda, tangente, secante),
            relações métricas, inscrição/circunscrição de polígonos e comprimento de arco.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definições</span>
        <h2>1. Circunferência × Círculo</h2>
        <p>
          A <strong>circunferência</strong> é o conjunto de pontos equidistantes de um ponto
          central (apenas o contorno). O <strong>círculo</strong> inclui também a região interior.
        </p>
        <M block={true}>{"C = 2\\pi r \\qquad A_{\\text{círculo}} = \\pi r^2"}</M>
        <div className="lesson-highlight">
          <h3>Relação diâmetro / raio</h3>
          <M block={true}>{"d = 2r \\qquad C = \\pi d"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Elementos</span>
        <h2>2. Elementos da Circunferência</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 240 240" width="240" height="240" aria-label="Circunferência e elementos">
            <circle cx="120" cy="120" r="90" fill="#eff6ff" stroke="#2563eb" strokeWidth="2"/>
            {/* Raio */}
            <line x1="120" y1="120" x2="210" y2="120" stroke="#dc2626" strokeWidth="2"/>
            <text x="160" y="112" fontSize="11" fill="#dc2626">r</text>
            {/* Diâmetro */}
            <line x1="30" y1="120" x2="210" y2="120" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="60" y="112" fontSize="11" fill="#7c3aed">d</text>
            {/* Corda */}
            <line x1="55" y1="75" x2="195" y2="165" stroke="#16a34a" strokeWidth="2"/>
            <text x="60" y="68" fontSize="11" fill="#16a34a">corda</text>
            {/* Tangente */}
            <line x1="30" y1="30" x2="30" y2="210" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="32" y="28" fontSize="11" fill="#f59e0b">tangente</text>
            {/* Centro */}
            <circle cx="120" cy="120" r="4" fill="#374151"/>
            <text x="125" y="118" fontSize="11" fill="#374151">O</text>
          </svg>
          <figcaption>Elementos da circunferência: raio, diâmetro, corda e tangente</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Raio</td><td>Segmento do centro até a circunferência</td></tr>
              <tr><td>Diâmetro</td><td>Corda que passa pelo centro (d = 2r)</td></tr>
              <tr><td>Corda</td><td>Segmento ligando 2 pontos da circunferência</td></tr>
              <tr><td>Arco</td><td>Parte da circunferência</td></tr>
              <tr><td>Tangente</td><td>Reta que toca a circunferência em 1 ponto</td></tr>
              <tr><td>Secante</td><td>Reta que corta a circunferência em 2 pontos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Completo</span>
        <h2>2b. Circunferência — Elementos Externos e Internos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Circunferência com raio, diâmetro, corda, arco e tangente rotulados">
            <rect x="0" y="0" width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>
            {/* Circunferência principal */}
            <circle cx="350" cy="110" r="90" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Diâmetro (linha horizontal) */}
            <line x1="260" y1="110" x2="440" y2="110" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,3"/>
            <text x="348" y="105" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="700">d</text>
            {/* Raio */}
            <line x1="350" y1="110" x2="440" y2="110" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="400" y="128" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="700">r</text>
            {/* Centro */}
            <circle cx="350" cy="110" r="5" fill="#1e40af"/>
            <text x="357" y="107" fontSize="11" fill="#1e40af" fontWeight="700">O</text>
            {/* Corda */}
            <line x1="283" y1="60" x2="417" y2="60" stroke="#16a34a" strokeWidth="2.5"/>
            <text x="350" y="52" textAnchor="middle" fontSize="12" fill="#16a34a" fontWeight="700">corda</text>
            {/* Arco (caminho) — arco superior rotulado */}
            <path d="M 283,60 A 90,90 0 0,1 417,60" fill="none" stroke="#f59e0b" strokeWidth="3.5"/>
            <text x="350" y="28" textAnchor="middle" fontSize="12" fill="#d97706" fontWeight="700">arco</text>
            {/* Tangente — linha vertical à esquerda tocando a circunferência em x=260 */}
            <line x1="260" y1="20" x2="260" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="218" y="110" textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="700">tangente</text>
            {/* Secante — linha diagonal cortando a circunferência em 2 pontos */}
            <line x1="290" y1="195" x2="430" y2="55" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4,3"/>
            <text x="450" y="52" textAnchor="start" fontSize="12" fill="#0ea5e9" fontWeight="700">secante</text>
            {/* Ponto de tangência */}
            <circle cx="260" cy="110" r="4" fill="#ef4444"/>
            {/* Pontos de intersecção da corda */}
            <circle cx="283" cy="60" r="4" fill="#16a34a"/>
            <circle cx="417" cy="60" r="4" fill="#16a34a"/>
          </svg>
          <figcaption>Circunferência: raio (r), diâmetro (d), corda, arco, tangente e secante</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comprimento de Arco</span>
        <h2>3. Comprimento de Arco e Setor Circular</h2>
        <M block={true}>{"\\text{Arco} = \\frac{\\alpha}{360°} \\times 2\\pi r \\qquad \\text{Setor} = \\frac{\\alpha}{360°} \\times \\pi r^2"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Arco de 60° em circunferência de raio 6:</p>
          <M block={true}>{"\\text{Arco} = \\frac{60}{360} \\times 2\\pi \\times 6 = \\frac{1}{6} \\times 12\\pi = 2\\pi \\approx 6{,}28"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulos</span>
        <h2>4. Ângulos na Circunferência</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Central</td><td><M>{"\\theta = \\text{arco}"}</M></td></tr>
              <tr><td>Inscrito</td><td><M>{"\\theta = \\frac{1}{2}\\text{arco}"}</M></td></tr>
              <tr><td>Ângulo de tangente e corda</td><td><M>{"\\theta = \\frac{1}{2}\\text{arco interceptado}"}</M></td></tr>
              <tr><td>Ângulo interior (2 cordas)</td><td><M>{"\\theta = \\frac{\\text{arco}_1+\\text{arco}_2}{2}"}</M></td></tr>
              <tr><td>Ângulo exterior</td><td><M>{"\\theta = \\frac{|\\text{arco}_1-\\text{arco}_2|}{2}"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Teorema do ângulo inscrito</h3>
          <p>O ângulo inscrito é metade do ângulo central que interceta o mesmo arco.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações Métricas</span>
        <h2>5. Relações Métricas — Cordas e Tangentes</h2>
        <M block={true}>{"\\text{Potência do ponto P: } PA \\times PB = PC \\times PD"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Caso</th><th>Relação</th></tr>
            </thead>
            <tbody>
              <tr><td>2 cordas que se cruzam</td><td><M>{"PA \\cdot PB = PC \\cdot PD"}</M></td></tr>
              <tr><td>2 secantes externas</td><td><M>{"PA \\cdot PB = PC \\cdot PD"}</M></td></tr>
              <tr><td>Tangente e secante</td><td><M>{"PT^2 = PA \\cdot PB"}</M></td></tr>
              <tr><td>2 tangentes</td><td><M>{"PT_1 = PT_2"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inscrição e Circunscrição</span>
        <h2>6. Polígonos Inscritos e Circunscritos</h2>
        <div className="lesson-highlight">
          <h3>Triângulo inscrito</h3>
          <M block={true}>{"R = \\frac{abc}{4A} \\quad (R = \\text{circunraio}, A = \\text{área do triângulo})"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Triângulo circunscrito (inraio)</h3>
          <M block={true}>{"r = \\frac{A}{s} \\quad (s = \\text{semiperímetro})"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Corona Circular</span>
        <h2>7. Coroa Circular</h2>
        <M block={true}>{"A_{\\text{coroa}} = \\pi(R^2 - r^2) = \\pi(R+r)(R-r)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Coroa com R = 10 e r = 6:</p>
          <M block={true}>{"A = \\pi(100-36) = 64\\pi \\approx 201 \\text{ cm}^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posição Ponto-Circunferência</span>
        <h2>8. Posição de Ponto em Relação à Circunferência</h2>
        <M block={true}>{"d = \\sqrt{(x-a)^2+(y-b)^2}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Posição</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"d < r"}</M></td><td>Interior</td></tr>
              <tr><td><M>{"d = r"}</M></td><td>Na circunferência</td></tr>
              <tr><td><M>{"d > r"}</M></td><td>Exterior</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área do Segmento</span>
        <h2>9. Segmento Circular</h2>
        <M block={true}>{"A_{\\text{seg}} = A_{\\text{setor}} - A_{\\text{triângulo}} = \\frac{\\alpha}{360}\\pi r^2 - \\frac{r^2}{2}\\sin\\alpha"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Circunferência</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>C</span>
            <h3>Comprimento</h3>
            <M block={true}>{"C = 2\\pi r"}</M>
          </div>
          <div className="math-card">
            <span>A</span>
            <h3>Área do círculo</h3>
            <M block={true}>{"A = \\pi r^2"}</M>
          </div>
          <div className="math-card">
            <span>Arco</span>
            <h3>Comprimento</h3>
            <M block={true}>{"\\ell = \\frac{\\alpha}{360}2\\pi r"}</M>
          </div>
          <div className="math-card">
            <span>Potência</span>
            <h3>Relação métrica</h3>
            <M block={true}>{"PA\\cdot PB = PC\\cdot PD"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Comprimento da circunferência"
          statement={<p>Qual é o comprimento de uma circunferência de raio 7 cm? (use π ≈ 22/7)</p>}
          options={[
            { letter: "a", text: "44 cm", correct: true },
            { letter: "b", text: "22 cm" },
            { letter: "c", text: "154 cm" },
            { letter: "d", text: "49 cm" },
          ]}
          resolution={
            <>
              <M block={true}>{"C = 2\\pi r = 2\\times\\frac{22}{7}\\times7 = 44 \\text{ cm}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Comprimento de arco"
          statement={
            <p>
              Uma circunferência tem raio 12 cm. Qual é o comprimento do arco
              correspondente a um ângulo central de 120°?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"8\\pi"}</M>, correct: true },
            { letter: "b", text: <M>{"12\\pi"}</M> },
            { letter: "c", text: <M>{"4\\pi"}</M> },
            { letter: "d", text: <M>{"6\\pi"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\ell = \\frac{120}{360}\\times2\\pi\\times12 = \\frac{1}{3}\\times24\\pi = 8\\pi"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ângulo inscrito"
          statement={
            <p>
              Um ângulo inscrito em uma circunferência interceta um arco de 140°.
              Qual é a medida do ângulo inscrito?
            </p>
          }
          options={[
            { letter: "a", text: "70°", correct: true },
            { letter: "b", text: "140°" },
            { letter: "c", text: "35°" },
            { letter: "d", text: "280°" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\theta_{\\text{inscrito}} = \\frac{1}{2} \\times 140° = 70°"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Roda de bicicleta"
          statement={
            <p>
              Uma roda de bicicleta tem diâmetro 66 cm. Quantas voltas completas
              ela dará em uma distância de 1 km? (use π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 483 voltas", correct: true },
            { letter: "b", text: "≈ 241 voltas" },
            { letter: "c", text: "≈ 966 voltas" },
            { letter: "d", text: "≈ 1000 voltas" },
          ]}
          resolution={
            <>
              <M block={true}>{"C = \\pi \\times 0{,}66 \\approx 2{,}072 \\text{ m} \\Rightarrow n = \\frac{1000}{2{,}072} \\approx 483"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Área de coroa circular"
          statement={
            <p>
              Uma pista de corrida tem formato de coroa circular com raio externo
              100 m e raio interno 80 m. Qual é a área da pista?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"3600\\pi \\approx 11310 \\text{ m}^2"}</M>, correct: true },
            { letter: "b", text: <M>{"10000\\pi"}</M> },
            { letter: "c", text: <M>{"1800\\pi"}</M> },
            { letter: "d", text: <M>{"6400\\pi"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\pi(100^2-80^2) = \\pi(10000-6400) = 3600\\pi \\approx 11310 \\text{ m}^2"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
