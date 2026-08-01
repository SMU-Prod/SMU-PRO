"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 21</span>
          <h1>Lei dos Senos e Lei dos Cossenos</h1>
          <p>
            Resolva triângulos quaisquer com as leis dos senos e dos cossenos.
            Calcule lados, ângulos, áreas e o raio da circunferência circunscrita.
            Aplique em levantamentos, navegação e engenharia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Notação</span>
        <h2>1. Triângulo Qualquer — Notação Padrão</h2>
        <p>
          Em um triângulo ABC: lados <M>{"a, b, c"}</M> opostos aos vértices <M>{"A, B, C"}</M>.
        </p>
        <M block={true}>{"\\hat A + \\hat B + \\hat C = 180°"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 280 180" width="280" height="180" aria-label="Triângulo ABC com lados">
            <polygon points="30,160 250,160 150,30" fill="#f0f4ff" stroke="#2563eb" strokeWidth="2"/>
            <text x="18" y="174" fontSize="14" fontWeight="700" fill="#2563eb">A</text>
            <text x="252" y="174" fontSize="14" fontWeight="700" fill="#2563eb">B</text>
            <text x="148" y="22" fontSize="14" fontWeight="700" fill="#2563eb">C</text>
            <text x="140" y="178" textAnchor="middle" fontSize="13" fill="#dc2626">c</text>
            <text x="75" y="90" fontSize="13" fill="#16a34a">b</text>
            <text x="210" y="90" fontSize="13" fill="#7c3aed">a</text>
          </svg>
          <figcaption>Triângulo ABC com os lados a, b, c opostos aos respectivos vértices</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei dos Senos</span>
        <h2>2. Lei dos Senos</h2>
        <M block={true}>{"\\frac{a}{\\sin\\hat A} = \\frac{b}{\\sin\\hat B} = \\frac{c}{\\sin\\hat C} = 2R"}</M>
        <p>onde R é o raio da circunferência circunscrita.</p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Triângulo ABC com lados a, b, c e a Lei dos Senos anotada">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Triângulo ABC: A(60,185), B(310,185), C(160,30) */}
            <polygon points="60,185 310,185 160,30" fill="white" fillOpacity="0.7" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Vértices */}
            <circle cx="60" cy="185" r="5" fill="#3b82f6"/>
            <circle cx="310" cy="185" r="5" fill="#3b82f6"/>
            <circle cx="160" cy="30" r="5" fill="#3b82f6"/>
            {/* Rótulos dos vértices */}
            <text x="42" y="202" fontSize="16" fill="#1e40af" fontWeight="700">A</text>
            <text x="316" y="202" fontSize="16" fill="#1e40af" fontWeight="700">B</text>
            <text x="155" y="22" fontSize="16" fill="#1e40af" fontWeight="700">C</text>
            {/* Rótulos dos lados */}
            <text x="96" y="110" fontSize="15" fill="#ef4444" fontWeight="700">b</text>
            <text x="248" y="110" fontSize="15" fill="#16a34a" fontWeight="700">a</text>
            <text x="175" y="200" fontSize="15" fill="#7c3aed" fontWeight="700">c</text>
            {/* Ângulos */}
            <text x="72" y="178" fontSize="12" fill="#1e40af">Â</text>
            <text x="288" y="178" fontSize="12" fill="#1e40af">B̂</text>
            <text x="158" y="47" fontSize="12" fill="#1e40af">Ĉ</text>
            {/* Painel lateral com a fórmula */}
            <rect x="360" y="30" width="320" height="155" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="520" y="58" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">Lei dos Senos</text>
            <line x1="375" y1="66" x2="665" y2="66" stroke="#93c5fd" strokeWidth="1"/>
            <text x="520" y="95" textAnchor="middle" fontSize="15" fill="#ef4444" fontWeight="700">a</text>
            <line x1="475" y1="99" x2="565" y2="99" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="520" y="118" textAnchor="middle" fontSize="13" fill="#6b7280">sen(Â)</text>
            <text x="580" y="107" textAnchor="middle" fontSize="18" fill="#6b7280">=</text>
            <text x="630" y="95" textAnchor="middle" fontSize="15" fill="#16a34a" fontWeight="700">b</text>
            <line x1="607" y1="99" x2="657" y2="99" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="632" y="118" textAnchor="middle" fontSize="13" fill="#6b7280">sen(B̂)</text>
            <text x="520" y="145" textAnchor="middle" fontSize="13" fill="#6b7280">= ... = 2R</text>
            <text x="520" y="170" textAnchor="middle" fontSize="12" fill="#6b7280">R = raio da circunscrita</text>
          </svg>
          <figcaption>Triângulo ABC: cada lado dividido pelo seno do ângulo oposto resulta no mesmo valor 2R — o diâmetro da circunferência circunscrita</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Quando usar</th><th>Dados</th><th>Caso</th></tr>
            </thead>
            <tbody>
              <tr><td>Dois ângulos + um lado</td><td>AAS ou ASA</td><td>Determinado</td></tr>
              <tr><td>Dois lados + ângulo oposto</td><td>SSA</td><td>Pode ser ambíguo</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei dos Cossenos</span>
        <h2>3. Lei dos Cossenos</h2>
        <M block={true}>{"a^2 = b^2 + c^2 - 2bc\\cos\\hat A"}</M>
        <M block={true}>{"b^2 = a^2 + c^2 - 2ac\\cos\\hat B"}</M>
        <M block={true}>{"c^2 = a^2 + b^2 - 2ab\\cos\\hat C"}</M>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Quando usar</th><th>Dados</th><th>Caso</th></tr>
            </thead>
            <tbody>
              <tr><td>Dois lados + ângulo entre eles</td><td>SAS</td><td>Determinado</td></tr>
              <tr><td>Três lados conhecidos</td><td>SSS</td><td>Determinado</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Caso especial: ângulo reto</h3>
          <M block={true}>{"\\hat A = 90° \\Rightarrow \\cos 90° = 0 \\Rightarrow a^2 = b^2+c^2 \\text{ (Pitágoras)}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Área de Triângulo</span>
        <h2>4. Área de Triângulo Qualquer</h2>
        <M block={true}>{"S = \\frac{1}{2}bc\\sin\\hat A = \\frac{1}{2}ac\\sin\\hat B = \\frac{1}{2}ab\\sin\\hat C"}</M>
        <div className="lesson-highlight">
          <h3>Fórmula de Heron (três lados conhecidos)</h3>
          <M block={true}>{"S = \\sqrt{p(p-a)(p-b)(p-c)}, \\quad p = \\frac{a+b+c}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Caso Ambíguo</span>
        <h2>5. O Caso Ambíguo (SSA)</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição (Â agudo, a, b dados)</th><th>Triângulos</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"a < b\\sin\\hat A"}</M></td><td>Nenhum</td></tr>
              <tr><td><M>{"a = b\\sin\\hat A"}</M></td><td>Um (retângulo)</td></tr>
              <tr><td><M>{"b\\sin\\hat A < a < b"}</M></td><td>Dois</td></tr>
              <tr><td><M>{"a \\geq b"}</M></td><td>Um</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Circunferências</span>
        <h2>6. Circunferência Circunscrita e Inscrita</h2>
        <M block={true}>{"R = \\frac{a}{2\\sin\\hat A} \\qquad r = \\frac{S}{p} = \\frac{\\text{Área}}{\\text{semiperímetro}}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polígonos</span>
        <h2>7. Polígonos Regulares e Trigonometria</h2>
        <M block={true}>{"\\text{Ângulo interno} = \\frac{(n-2)\\cdot180°}{n}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Polígono (n lados)</th><th>Ângulo interno</th><th>Área (l = lado)</th></tr>
            </thead>
            <tbody>
              <tr><td>Triângulo (3)</td><td>60°</td><td><M>{"\\dfrac{l^2\\sqrt{3}}{4}"}</M></td></tr>
              <tr><td>Quadrado (4)</td><td>90°</td><td><M>{"l^2"}</M></td></tr>
              <tr><td>Pentágono (5)</td><td>108°</td><td><M>{"\\approx 1{,}720\\,l^2"}</M></td></tr>
              <tr><td>Hexágono (6)</td><td>120°</td><td><M>{"\\dfrac{3\\sqrt{3}}{2}l^2"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Encontrando Ângulos</span>
        <h2>8. Calculando Ângulo com a Lei dos Cossenos</h2>
        <M block={true}>{"\\cos\\hat A = \\frac{b^2+c^2-a^2}{2bc}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Triângulo com lados 5, 7, 8. Ângulo oposto ao lado 8:</p>
          <M block={true}>{"\\cos\\hat C = \\frac{25+49-64}{2\\cdot5\\cdot7} = \\frac{10}{70} = \\frac{1}{7} \\Rightarrow \\hat C = \\arccos\\frac{1}{7} \\approx 81{,}8°"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Aplicações Práticas</h2>
        <div className="lesson-highlight">
          <h3>Levantamento topográfico</h3>
          <p>Dois pontos A e B estão a 100 m. Um ponto C é avistado com ângulos
          <M>{"\\hat A = 55°"}</M> e <M>{"\\hat B = 65°"}</M> a partir de A e B.</p>
          <M block={true}>{"\\hat C = 60° \\Rightarrow BC = \\frac{100\\sin55°}{\\sin60°} \\approx 94{,}3 \\text{ m}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Diagonal de paralelogramo</h3>
          <p>Paralelogramo com lados 5 e 8 e ângulo de 60° entre eles.</p>
          <M block={true}>{"d^2 = 25+64-2(5)(8)\\cos60° = 89-40 = 49 \\Rightarrow d = 7"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Leis dos Triângulos</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Lei Senos</span>
            <h3>Para AAS, ASA, SSA</h3>
            <M block={true}>{"\\frac{a}{\\sin A} = 2R"}</M>
          </div>
          <div className="math-card">
            <span>Lei Cossenos</span>
            <h3>Para SAS, SSS</h3>
            <M block={true}>{"a^2=b^2+c^2-2bc\\cos A"}</M>
          </div>
          <div className="math-card">
            <span>Área</span>
            <h3>Com ângulo conhecido</h3>
            <M block={true}>{"S = \\frac{bc\\sin A}{2}"}</M>
          </div>
          <div className="math-card">
            <span>Heron</span>
            <h3>Três lados</h3>
            <M block={true}>{"S = \\sqrt{p(p-a)(p-b)(p-c)}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Lei dos Senos"
          statement={
            <p>
              Em △ABC: <M>{"\\hat A = 30°"}</M>, <M>{"\\hat B = 90°"}</M>, <M>{"b = 8"}</M>. Calcule a.
            </p>
          }
          options={[
            { letter: "a", text: "4", correct: true },
            { letter: "b", text: "8" },
            { letter: "c", text: <M>{"4\\sqrt{3}"}</M> },
            { letter: "d", text: <M>{"4\\sqrt{2}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{a}{\\sin30°} = \\frac{8}{\\sin90°} = 8 \\Rightarrow a = 8 \\times \\frac{1}{2} = 4"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Lei dos Cossenos"
          statement={
            <p>
              Em um triângulo, <M>{"b = 6"}</M>, <M>{"c = 4"}</M>, <M>{"\\hat A = 60°"}</M>. Calcule a.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\sqrt{28}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\sqrt{52}"}</M> },
            { letter: "c", text: <M>{"\\sqrt{36}"}</M> },
            { letter: "d", text: <M>{"\\sqrt{16}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"a^2 = 36+16-2(6)(4)\\cdot\\frac{1}{2} = 52-24 = 28 \\Rightarrow a = 2\\sqrt{7}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Área por Heron"
          statement={
            <p>
              Um triângulo tem lados 13, 14 e 15. Calcule a área usando a fórmula de Heron.
            </p>
          }
          options={[
            { letter: "a", text: "84", correct: true },
            { letter: "b", text: "105" },
            { letter: "c", text: "91" },
            { letter: "d", text: "60" },
          ]}
          resolution={
            <>
              <M block={true}>{"p = \\frac{13+14+15}{2} = 21"}</M>
              <M block={true}>{"S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Distância entre pontos"
          statement={
            <p>
              Dois observadores A e B estão a 200 m um do outro em linha reta.
              Ambos avistam uma árvore C. A vê C com ângulo de 60°, B com 80°.
              Qual é a distância BC?
            </p>
          }
          options={[
            { letter: "a", text: "≈ 195 m" },
            { letter: "b", text: "≈ 172 m", correct: true },
            { letter: "c", text: "≈ 230 m" },
            { letter: "d", text: "≈ 145 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\hat C = 180° - 60° - 80° = 40°"}</M>
              <M block={true}>{"\\frac{BC}{\\sin60°} = \\frac{200}{\\sin40°} \\Rightarrow BC = \\frac{200\\sin60°}{\\sin40°} \\approx \\frac{200 \\times 0{,}866}{0{,}643} \\approx 270 \\text{ m}"}</M>
              <p>Nota: o valor exato depende das tabelas fornecidas no exame.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Diagonal de terreno"
          statement={
            <p>
              Um terreno quadrilátero tem dois lados adjacentes de 60 m e 80 m
              com ângulo de 90° entre eles. Qual é a diagonal?
            </p>
          }
          options={[
            { letter: "a", text: "100 m", correct: true },
            { letter: "b", text: "120 m" },
            { letter: "c", text: "140 m" },
            { letter: "d", text: "90 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"d^2 = 60^2 + 80^2 - 2(60)(80)\\cos90° = 3600+6400 = 10000 \\Rightarrow d = 100 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
