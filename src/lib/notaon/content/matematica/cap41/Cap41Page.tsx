"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 41</span>
          <h1>Cônicas: Elipse, Hipérbole e Parábola</h1>
          <p>
            Estude as seções cônicas — elipse, hipérbole e parábola — suas equações,
            focos, excentricidade e propriedades. Aplique em astronomia, engenharia
            e óptica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Introdução</span>
        <h2>1. Seções Cônicas</h2>
        <p>
          As cônicas são curvas geradas pela interseção de um cone com um plano.
          Dependendo da inclinação do plano, obtém-se uma elipse, parábola ou hipérbole.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Cônica</th><th>Excentricidade e</th><th>Característica</th></tr>
            </thead>
            <tbody>
              <tr><td>Circunferência</td><td>e = 0</td><td>Caso particular de elipse</td></tr>
              <tr><td>Elipse</td><td>0 &lt; e &lt; 1</td><td>Dois focos; soma das distâncias constante</td></tr>
              <tr><td>Parábola</td><td>e = 1</td><td>Um foco; eixo de simetria</td></tr>
              <tr><td>Hipérbole</td><td>e &gt; 1</td><td>Dois focos; diferença das distâncias constante</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Elipse</span>
        <h2>2. Elipse — Equação e Elementos</h2>
        <M block={true}>{"\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b > 0, \\text{ eixo maior em } x)"}</M>
        <M block={true}>{"c^2 = a^2 - b^2 \\qquad e = \\frac{c}{a} \\quad (0 < e < 1)"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Valor</th></tr>
            </thead>
            <tbody>
              <tr><td>Semieixo maior</td><td>a</td></tr>
              <tr><td>Semieixo menor</td><td>b</td></tr>
              <tr><td>Distância focal</td><td>c = √(a²−b²)</td></tr>
              <tr><td>Focos</td><td>F₁(−c, 0) e F₂(c, 0)</td></tr>
              <tr><td>Excentricidade</td><td>e = c/a</td></tr>
              <tr><td>Propriedade focal</td><td>PF₁ + PF₂ = 2a para todo P da elipse</td></tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 300 180" width="300" height="180" aria-label="Elipse">
            {/* Elipse */}
            <ellipse cx="150" cy="90" rx="120" ry="60" fill="#eff6ff" stroke="#2563eb" strokeWidth="2"/>
            {/* Eixos */}
            <line x1="20" y1="90" x2="280" y2="90" stroke="#374151" strokeWidth="1" strokeDasharray="4,3"/>
            <line x1="150" y1="20" x2="150" y2="165" stroke="#374151" strokeWidth="1" strokeDasharray="4,3"/>
            {/* Focos */}
            <circle cx="80" cy="90" r="5" fill="#dc2626"/>
            <circle cx="220" cy="90" r="5" fill="#dc2626"/>
            <text x="80" y="105" textAnchor="middle" fontSize="11" fill="#dc2626">F₁</text>
            <text x="220" y="105" textAnchor="middle" fontSize="11" fill="#dc2626">F₂</text>
            {/* Vértices */}
            <text x="30" y="86" fontSize="11" fill="#1e40af">(−a,0)</text>
            <text x="250" y="86" fontSize="11" fill="#1e40af">(a,0)</text>
            <text x="155" y="32" fontSize="11" fill="#1e40af">(0,b)</text>
            {/* a e b */}
            <line x1="150" y1="90" x2="270" y2="90" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="210" y="80" fontSize="10" fill="#2563eb">a</text>
            <line x1="150" y1="90" x2="150" y2="30" stroke="#059669" strokeWidth="1.5"/>
            <text x="155" y="62" fontSize="10" fill="#059669">b</text>
          </svg>
          <figcaption>Elipse: PF₁ + PF₂ = 2a para qualquer ponto P na elipse</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hipérbole</span>
        <h2>3. Hipérbole — Equação e Elementos</h2>
        <M block={true}>{"\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\quad (\\text{eixo real em } x)"}</M>
        <M block={true}>{"c^2 = a^2 + b^2 \\qquad e = \\frac{c}{a} > 1"}</M>
        <div className="lesson-highlight">
          <h3>Propriedade focal</h3>
          <M block={true}>{"|PF_1 - PF_2| = 2a \\quad (\\text{para todo P da hipérbole})"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Assíntotas</h3>
          <M block={true}>{"y = \\pm \\frac{b}{a} x"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hipérbole Equilátera</span>
        <h2>4. Hipérbole Equilátera e Função Inversa</h2>
        <p>
          Quando a = b, a hipérbole é <strong>equilátera</strong>.
          A função <M>{"y = k/x"}</M> é um caso especial com assíntotas nos eixos coordenados.
        </p>
        <M block={true}>{"xy = k \\Leftrightarrow y = \\frac{k}{x} \\quad (\\text{hipérbole nos eixos})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parábola</span>
        <h2>5. Parábola — Equação e Elementos</h2>
        <M block={true}>{"y^2 = 4px \\quad (\\text{eixo de simetria horizontal})"}</M>
        <M block={true}>{"x^2 = 4py \\quad (\\text{eixo de simetria vertical})"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Equação y² = 4px</th></tr>
            </thead>
            <tbody>
              <tr><td>Vértice</td><td>(0, 0)</td></tr>
              <tr><td>Foco</td><td>(p, 0)</td></tr>
              <tr><td>Diretriz</td><td>x = −p</td></tr>
              <tr><td>Eixo</td><td>Eixo x</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Propriedade focal</h3>
          <M block={true}>{"d(P, F) = d(P, \\text{diretriz})"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parábola Deslocada</span>
        <h2>6. Parábola com Vértice em (h, k)</h2>
        <M block={true}>{"(y-k)^2 = 4p(x-h) \\qquad (x-h)^2 = 4p(y-k)"}</M>
        <div className="lesson-highlight">
          <h3>Relação com função quadrática</h3>
          <p>A parábola y = ax² + bx + c tem vértice em:</p>
          <M block={true}>{"V = \\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Excentricidade</span>
        <h2>7. Excentricidade e Classificação</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 320 100" width="320" height="100" aria-label="Excentricidade das cônicas">
            {/* Linha de excentricidade */}
            <line x1="20" y1="50" x2="300" y2="50" stroke="#374151" strokeWidth="2"/>
            {/* Marcas */}
            <line x1="20" y1="44" x2="20" y2="56" stroke="#374151" strokeWidth="2"/>
            <line x1="160" y1="44" x2="160" y2="56" stroke="#374151" strokeWidth="2"/>
            <line x1="300" y1="44" x2="300" y2="56" stroke="#374151" strokeWidth="2"/>
            {/* Rótulos */}
            <text x="20" y="70" textAnchor="middle" fontSize="11" fill="#374151">e=0</text>
            <text x="160" y="70" textAnchor="middle" fontSize="11" fill="#374151">e=1</text>
            <text x="300" y="70" textAnchor="middle" fontSize="11" fill="#374151">e→∞</text>
            {/* Regiões */}
            <text x="68" y="35" textAnchor="middle" fontSize="11" fill="#2563eb">Elipse</text>
            <text x="160" y="35" textAnchor="middle" fontSize="11" fill="#16a34a">Parábola</text>
            <text x="240" y="35" textAnchor="middle" fontSize="11" fill="#dc2626">Hipérbole</text>
            {/* Círculo */}
            <text x="20" y="35" textAnchor="middle" fontSize="10" fill="#7c3aed">Circ.</text>
          </svg>
          <figcaption>Excentricidade determina o tipo de cônica</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>8. Aplicações das Cônicas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Cônica</th><th>Aplicação</th></tr>
            </thead>
            <tbody>
              <tr><td>Elipse</td><td>Órbitas planetárias (Lei de Kepler), espelhos elípticos, salas acústicas</td></tr>
              <tr><td>Parábola</td><td>Antenas parabólicas, faróis de carro, projéteis balísticos</td></tr>
              <tr><td>Hipérbole</td><td>Localização por radar, algumas câmaras estelares, resfriamento em torres</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Elipse — Reflexão</span>
        <h2>9. Propriedade Reflexiva da Elipse e Parábola</h2>
        <div className="lesson-highlight">
          <h3>Elipse</h3>
          <p>
            Um raio de luz emitido de um foco é refletido para o outro foco.
            Isso cria "salas sussurrantes": um sussurro em F₁ é ouvido em F₂.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Parábola</h3>
          <p>
            Raios paralelos ao eixo convergem ao foco após reflexão.
            Princípio das antenas parabólicas e headlights de automóveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Cônicas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Elipse</span>
            <h3>Equação</h3>
            <M block={true}>{"\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1"}</M>
          </div>
          <div className="math-card">
            <span>Hip.</span>
            <h3>Equação</h3>
            <M block={true}>{"\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1"}</M>
          </div>
          <div className="math-card">
            <span>Parábola</span>
            <h3>Equação</h3>
            <M block={true}>{"y^2=4px"}</M>
          </div>
          <div className="math-card">
            <span>e</span>
            <h3>Excentricidade</h3>
            <M block={true}>{"e=c/a"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Elementos da elipse"
          statement={
            <p>
              Dada a elipse <M>{"\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1"}</M>,
              qual é o valor de c (distância focal)?
            </p>
          }
          options={[
            { letter: "a", text: "4", correct: true },
            { letter: "b", text: "5" },
            { letter: "c", text: "3" },
            { letter: "d", text: "√34" },
          ]}
          resolution={
            <>
              <M block={true}>{"c = \\sqrt{a^2-b^2} = \\sqrt{25-9} = \\sqrt{16} = 4"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Excentricidade"
          statement={
            <p>
              Uma elipse tem a = 10 e c = 6. Qual é sua excentricidade?
            </p>
          }
          options={[
            { letter: "a", text: "0,6", correct: true },
            { letter: "b", text: "0,8" },
            { letter: "c", text: "1,2" },
            { letter: "d", text: "0,5" },
          ]}
          resolution={
            <>
              <M block={true}>{"e = \\frac{c}{a} = \\frac{6}{10} = 0{,}6"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Hipérbole — assíntotas"
          statement={
            <p>
              A hipérbole <M>{"\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1"}</M>
              tem assíntotas y = ±mx. Qual é m?
            </p>
          }
          options={[
            { letter: "a", text: "3/4", correct: true },
            { letter: "b", text: "4/3" },
            { letter: "c", text: "3/5" },
            { letter: "d", text: "1" },
          ]}
          resolution={
            <>
              <M block={true}>{"m = \\frac{b}{a} = \\frac{3}{4}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Órbita de cometa"
          statement={
            <p>
              A órbita de um cometa é uma elipse com semieixos a = 50 UA e b = 10 UA
              (1 UA = distância Terra-Sol). Qual é a excentricidade?
              (Excentricidade da Terra ≈ 0,017)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 0,98", correct: true },
            { letter: "b", text: "≈ 0,20" },
            { letter: "c", text: "≈ 0,50" },
            { letter: "d", text: "≈ 0,80" },
          ]}
          resolution={
            <>
              <M block={true}>{"c = \\sqrt{50^2-10^2} = \\sqrt{2400} \\approx 49 \\Rightarrow e = \\frac{49}{50} \\approx 0{,}98"}</M>
              <p>Alta excentricidade: órbita muito alongada, característica de cometas.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Antena parabólica"
          statement={
            <p>
              Uma antena parabólica tem equação x² = 8y. O receptor deve ser
              posicionado no foco. A que altura y ele deve estar?
            </p>
          }
          options={[
            { letter: "a", text: "y = 2", correct: true },
            { letter: "b", text: "y = 4" },
            { letter: "c", text: "y = 8" },
            { letter: "d", text: "y = 1" },
          ]}
          resolution={
            <>
              <M block={true}>{"x^2 = 4py = 8y \\Rightarrow 4p = 8 \\Rightarrow p = 2 \\Rightarrow \\text{Foco em } (0,2)"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
