"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 38</span>
          <h1>Cilindros e Esferas</h1>
          <p>
            Calcule volume, área lateral e total de cilindros e esferas. Aplique
            em problemas de embalagens, tanques, bolas e esferas na natureza.
            Entenda as relações entre cilindro, cone e esfera inscritos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cilindro</span>
        <h2>1. Cilindro — Definição e Elementos</h2>
        <p>
          O <strong>cilindro</strong> reto tem duas bases circulares paralelas e congruentes
          e uma superfície lateral curva. A <strong>geratriz</strong> é paralela ao eixo.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 200 200" width="200" height="200" aria-label="Cilindro">
            {/* Elipse inferior */}
            <ellipse cx="100" cy="160" rx="60" ry="20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            {/* Retângulo lateral */}
            <rect x="40" y="60" width="120" height="100" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            {/* Elipse superior */}
            <ellipse cx="100" cy="60" rx="60" ry="20" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
            {/* Raio */}
            <line x1="100" y1="60" x2="160" y2="60" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="133" y="50" fontSize="11" fill="#dc2626">r</text>
            {/* Altura */}
            <line x1="168" y1="60" x2="168" y2="160" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="172" y="113" fontSize="11" fill="#16a34a">h</text>
            <text x="100" y="195" textAnchor="middle" fontSize="11" fill="#374151">V = πr²h</text>
          </svg>
          <figcaption>Cilindro reto: base circular, geratriz perpendicular à base</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Volume e Área do Cilindro</span>
        <h2>2. Volume e Áreas do Cilindro</h2>
        <M block={true}>{"V = \\pi r^2 h"}</M>
        <M block={true}>{"A_L = 2\\pi r h \\qquad A_T = 2\\pi r(r+h)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Cilindro com r = 5 cm, h = 10 cm:</p>
          <M block={true}>{"V = \\pi\\times25\\times10 = 250\\pi \\approx 785{,}4 \\text{ cm}^3"}</M>
          <M block={true}>{"A_T = 2\\pi\\times5\\times15 = 150\\pi \\approx 471{,}2 \\text{ cm}^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Esfera</span>
        <h2>3. Esfera — Definição e Fórmulas</h2>
        <p>
          A <strong>esfera</strong> é o conjunto de todos os pontos equidistantes
          de um ponto central, no espaço. O raio r é a distância do centro à superfície.
        </p>
        <M block={true}>{"V_{\\text{esfera}} = \\frac{4}{3}\\pi r^3"}</M>
        <M block={true}>{"A_{\\text{esfera}} = 4\\pi r^2"}</M>
        <div className="lesson-highlight">
          <h3>Curioso</h3>
          <p>A área da esfera = 4 vezes a área do maior círculo que a corta (círculo máximo).</p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Cilindro e esfera lado a lado com dimensões rotuladas">
            <rect width="700" height="220" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5" rx="8"/>
            {/* --- CILINDRO (centro ~175) --- */}
            {/* Retângulo lateral */}
            <rect x="105" y="50" width="140" height="120" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            {/* Elipse inferior (base) */}
            <ellipse cx="175" cy="170" rx="70" ry="20" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2"/>
            {/* Elipse superior (topo) */}
            <ellipse cx="175" cy="50" rx="70" ry="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            {/* Raio r no topo */}
            <line x1="175" y1="50" x2="245" y2="50" stroke="#1e40af" strokeWidth="1.8"/>
            <text x="210" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">r</text>
            {/* Altura h à direita */}
            <line x1="258" y1="50" x2="258" y2="170" stroke="#1e40af" strokeWidth="1.8" strokeDasharray="5,3"/>
            <line x1="252" y1="50" x2="264" y2="50" stroke="#1e40af" strokeWidth="1.5"/>
            <line x1="252" y1="170" x2="264" y2="170" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="272" y="115" textAnchor="start" fontSize="14" fontWeight="bold" fill="#1e40af">h</text>
            {/* Rótulo */}
            <text x="175" y="205" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">Cilindro</text>

            {/* --- ESFERA (centro ~525) --- */}
            <circle cx="525" cy="110" r="90" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            {/* Elipse "equador" para dar sensação 3D */}
            <ellipse cx="525" cy="110" rx="90" ry="22" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6,4"/>
            {/* Raio r */}
            <line x1="525" y1="110" x2="591" y2="47" stroke="#1e40af" strokeWidth="1.8"/>
            <text x="566" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">r</text>
            {/* Ponto no centro */}
            <circle cx="525" cy="110" r="4" fill="#3b82f6"/>
            {/* Rótulo */}
            <text x="525" y="205" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">Esfera</text>
          </svg>
          <figcaption>Cilindro reto (com raio r e altura h) e esfera (com raio r) — vistas frontais</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Zonas e Calota</span>
        <h2>4. Calota e Zona Esférica</h2>
        <M block={true}>{"A_{\\text{calota}} = 2\\pi r h \\quad (h = \\text{altura da calota})"}</M>
        <M block={true}>{"V_{\\text{calota}} = \\frac{\\pi h^2}{3}(3r - h)"}</M>
        <div className="lesson-highlight">
          <h3>Zona esférica</h3>
          <M block={true}>{"A_{\\text{zona}} = 2\\pi r h"}</M>
          <p>A área da zona esférica depende apenas do raio e da altura, não do arco.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sólidos Inscritos</span>
        <h2>5. Relações entre Cilindro, Cone e Esfera Inscritos</h2>
        <M block={true}>{"V_\\text{cone} : V_\\text{esfera} : V_\\text{cilindro} = 1 : 2 : 3"}</M>
        <p>
          Quando um cone, uma esfera e um cilindro têm a mesma base e altura igual ao
          diâmetro, seus volumes estão na razão 1 : 2 : 3 (Arquimedes).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fórmula</th><th>Cilindro</th><th>Esfera</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Área lateral / superfície</td>
                <td><M>{"A_L = 2\\pi r h"}</M></td>
                <td><M>{"A = 4\\pi r^2"}</M></td>
              </tr>
              <tr>
                <td>Área total</td>
                <td><M>{"A_T = 2\\pi r(r+h)"}</M></td>
                <td><M>{"A = 4\\pi r^2"}</M> (sem bases)</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td><M>{"V = \\pi r^2 h"}</M></td>
                <td><M>{"V = \\dfrac{4}{3}\\pi r^3"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conversão de Volume</span>
        <h2>6. Conversão de Unidades de Volume</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Unidade</th><th>Equivalente</th></tr>
            </thead>
            <tbody>
              <tr><td>1 cm³</td><td>1 mL</td></tr>
              <tr><td>1 dm³</td><td>1 L = 1000 cm³</td></tr>
              <tr><td>1 m³</td><td>1000 L = 1.000.000 cm³</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tronco de Cilindro</span>
        <h2>7. Cilindro Oblíquo e Tronco</h2>
        <M block={true}>{"V_\\text{oblíquo} = \\pi r^2 \\bar h \\quad (\\bar h = \\text{altura média})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planificação</span>
        <h2>8. Planificação do Cilindro</h2>
        <p>
          Ao "abrir" um cilindro, obtemos um retângulo com largura = <M>{"2\\pi r"}</M>
          e altura = <M>{"h"}</M>, mais dois círculos de raio r.
        </p>
        <M block={true}>{"A_L = 2\\pi r \\times h \\quad (\\text{retângulo})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo Real</span>
        <h2>9. Planeta Terra — Volume e Superfície</h2>
        <div className="lesson-highlight">
          <p>Raio médio da Terra ≈ 6371 km</p>
          <M block={true}>{"A = 4\\pi\\times6371^2 \\approx 5{,}10 \\times 10^8 \\text{ km}^2"}</M>
          <M block={true}>{"V = \\frac{4}{3}\\pi\\times6371^3 \\approx 1{,}08 \\times 10^{12} \\text{ km}^3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Cilindro e Esfera</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>V⬤</span>
            <h3>Cilindro</h3>
            <M block={true}>{"V = \\pi r^2 h"}</M>
          </div>
          <div className="math-card">
            <span>A_L⬤</span>
            <h3>Lateral cilindro</h3>
            <M block={true}>{"A_L = 2\\pi rh"}</M>
          </div>
          <div className="math-card">
            <span>V🌐</span>
            <h3>Esfera</h3>
            <M block={true}>{"V = \\frac{4}{3}\\pi r^3"}</M>
          </div>
          <div className="math-card">
            <span>A🌐</span>
            <h3>Sup. esférica</h3>
            <M block={true}>{"A = 4\\pi r^2"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Volume do cilindro"
          statement={
            <p>
              Um cilindro tem raio 3 cm e altura 7 cm. Qual é o volume?
              (use π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 197,82 cm³", correct: true },
            { letter: "b", text: "≈ 65,94 cm³" },
            { letter: "c", text: "≈ 131,88 cm³" },
            { letter: "d", text: "≈ 395,64 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = 3{,}14\\times9\\times7 = 197{,}82 \\text{ cm}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Superfície da esfera"
          statement={
            <p>
              Uma esfera tem raio 6 cm. Qual é a área de sua superfície? (π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 452,16 cm²", correct: true },
            { letter: "b", text: "≈ 113,04 cm²" },
            { letter: "c", text: "≈ 904,32 cm²" },
            { letter: "d", text: "≈ 226,08 cm²" },
          ]}
          resolution={
            <>
              <M block={true}>{"A = 4\\pi r^2 = 4\\times3{,}14\\times36 = 452{,}16 \\text{ cm}^2"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Volume da esfera"
          statement={<p>Calcule o volume de uma esfera de raio 3 cm. (π ≈ 3,14)</p>}
          options={[
            { letter: "a", text: "≈ 113,04 cm³", correct: true },
            { letter: "b", text: "≈ 226,08 cm³" },
            { letter: "c", text: "≈ 56,52 cm³" },
            { letter: "d", text: "≈ 339,12 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = \\frac{4}{3}\\times3{,}14\\times27 = \\frac{339{,}12}{3} = 113{,}04 \\text{ cm}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Tanque cilíndrico"
          statement={
            <p>
              Um tanque cilíndrico com diâmetro 2 m e altura 3 m está cheio de água.
              Quantos litros de água ele contém? (π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 9.420 litros", correct: true },
            { letter: "b", text: "≈ 18.840 litros" },
            { letter: "c", text: "≈ 4.710 litros" },
            { letter: "d", text: "≈ 3.140 litros" },
          ]}
          resolution={
            <>
              <M block={true}>{"V = 3{,}14\\times1^2\\times3 = 9{,}42 \\text{ m}^3 = 9420 \\text{ litros}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Bola de futebol"
          statement={
            <p>
              Uma bola de futebol tem circunferência de 68 cm.
              Qual é o volume aproximado? (π ≈ 3,14)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 5.575 cm³", correct: true },
            { letter: "b", text: "≈ 2.786 cm³" },
            { letter: "c", text: "≈ 11.150 cm³" },
            { letter: "d", text: "≈ 1.462 cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"C = 2\\pi r \\Rightarrow r = \\frac{68}{2\\times3{,}14} \\approx 10{,}83 \\text{ cm}"}</M>
              <M block={true}>{"V = \\frac{4}{3}\\times3{,}14\\times10{,}83^3 \\approx \\frac{4}{3}\\times3{,}14\\times1270 \\approx 5322 \\text{ cm}^3"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
