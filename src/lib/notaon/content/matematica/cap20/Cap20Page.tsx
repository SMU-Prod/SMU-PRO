"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 20</span>
          <h1>Identidades e Equações Trigonométricas</h1>
          <p>
            Domine as principais identidades trigonométricas — soma e diferença de
            arcos, ângulo duplo, ângulo metade — e resolva equações trigonométricas
            de forma sistemática. Aplique em simplificações e problemas de vestibular.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade Fundamental</span>
        <h2>1. Identidade Fundamental e Derivadas</h2>
        <M block={true}>{"\\sin^2\\theta + \\cos^2\\theta = 1"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Círculo unitário com ângulo θ, seno e cosseno marcados">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="80" y1="110" x2="290" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
            <line x1="185" y1="15" x2="185" y2="205" stroke="#6b7280" strokeWidth="1.5"/>
            {/* Setas dos eixos */}
            <polygon points="290,110 282,106 282,114" fill="#6b7280"/>
            <polygon points="185,15 181,23 189,23" fill="#6b7280"/>
            {/* Círculo unitário */}
            <circle cx="185" cy="110" r="85" fill="none" stroke="#3b82f6" strokeWidth="2"/>
            {/* Ponto P no círculo (θ ≈ 40°) */}
            <circle cx="250" cy="55" r="5" fill="#3b82f6"/>
            {/* Raio OP */}
            <line x1="185" y1="110" x2="250" y2="55" stroke="#1e40af" strokeWidth="2"/>
            {/* Cateto vertical (seno) */}
            <line x1="250" y1="55" x2="250" y2="110" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,4"/>
            {/* Cateto horizontal (cosseno) */}
            <line x1="185" y1="110" x2="250" y2="110" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,4"/>
            {/* Arco do ângulo θ */}
            <path d="M 215 110 A 30 30 0 0 0 207 84" fill="none" stroke="#f59e0b" strokeWidth="2"/>
            {/* Rótulos */}
            <text x="263" y="85" fontSize="14" fill="#ef4444" fontWeight="700">sen(θ)</text>
            <text x="205" y="126" fontSize="14" fill="#16a34a" fontWeight="700">cos(θ)</text>
            <text x="220" y="103" fontSize="13" fill="#f59e0b" fontWeight="700">θ</text>
            <text x="253" y="50" fontSize="13" fill="#1e40af" fontWeight="700">P</text>
            <text x="280" y="108" fontSize="13" fill="#6b7280">x</text>
            <text x="188" y="14" fontSize="13" fill="#6b7280">y</text>
            <text x="165" y="126" fontSize="12" fill="#6b7280">O</text>
            {/* Identidade anotada */}
            <rect x="340" y="60" width="320" height="90" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="500" y="90" textAnchor="middle" fontSize="15" fill="#1e40af" fontWeight="700">Identidade Fundamental</text>
            <text x="500" y="118" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">sen²(θ) + cos²(θ) = 1</text>
            <text x="500" y="140" textAnchor="middle" fontSize="12" fill="#6b7280">(Teorema de Pitágoras no círculo unitário)</text>
          </svg>
          <figcaption>Círculo unitário de raio 1: o cateto vertical é sen(θ) e o horizontal é cos(θ), confirmando a identidade fundamental</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Identidade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Relação fundamental</td><td><M>{"\\sin^2\\theta + \\cos^2\\theta = 1"}</M></td></tr>
              <tr><td>Tangente e secante</td><td><M>{"1 + \\tan^2\\theta = \\sec^2\\theta"}</M></td></tr>
              <tr><td>Cotangente e cossecante</td><td><M>{"1 + \\cot^2\\theta = \\csc^2\\theta"}</M></td></tr>
              <tr><td>Tangente</td><td><M>{"\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Adição</span>
        <h2>2. Fórmulas de Adição e Subtração</h2>
        <M block={true}>{"\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B"}</M>
        <M block={true}>{"\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B"}</M>
        <M block={true}>{"\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}"}</M>

        <div className="lesson-highlight">
          <h3>Verificação com ângulos notáveis</h3>
          <M block={true}>{"\\sin 75° = \\sin(45°+30°) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulo Duplo</span>
        <h2>3. Fórmulas do Ângulo Duplo</h2>
        <M block={true}>{"\\sin 2\\theta = 2\\sin\\theta\\cos\\theta"}</M>
        <M block={true}>{"\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta"}</M>
        <M block={true}>{"\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}"}</M>

        <div className="lesson-highlight">
          <h3>Uso prático</h3>
          <M block={true}>{"\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2} \\qquad \\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulo Metade</span>
        <h2>4. Fórmulas do Ângulo Metade</h2>
        <M block={true}>{"\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}"}</M>
        <M block={true}>{"\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}"}</M>
        <M block={true}>{"\\tan\\frac{\\theta}{2} = \\frac{\\sin\\theta}{1+\\cos\\theta} = \\frac{1-\\cos\\theta}{\\sin\\theta}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo: sen 15°</h3>
          <M block={true}>{"\\sin 15° = \\sin\\frac{30°}{2} = \\sqrt{\\frac{1-\\cos 30°}{2}} = \\sqrt{\\frac{1-\\frac{\\sqrt{3}}{2}}{2}} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soma em Produto</span>
        <h2>5. Transformação de Soma em Produto</h2>
        <M block={true}>{"\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}"}</M>
        <M block={true}>{"\\sin A - \\sin B = 2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}"}</M>
        <M block={true}>{"\\cos A + \\cos B = 2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}"}</M>
        <M block={true}>{"\\cos A - \\cos B = -2\\sin\\frac{A+B}{2}\\sin\\frac{A-B}{2}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Produto em Soma</span>
        <h2>6. Transformação de Produto em Soma</h2>
        <M block={true}>{"\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]"}</M>
        <M block={true}>{"\\cos A \\cos B = \\frac{1}{2}[\\cos(A-B) + \\cos(A+B)]"}</M>
        <M block={true}>{"\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>7. Equações Trigonométricas — Método Geral</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Solução geral</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><M>{"\\sin x = a"}</M></td>
                <td><M>{"x = \\arcsin a + 2k\\pi"}</M> ou <M>{"x = \\pi - \\arcsin a + 2k\\pi"}</M></td>
              </tr>
              <tr>
                <td><M>{"\\cos x = a"}</M></td>
                <td><M>{"x = \\pm\\arccos a + 2k\\pi"}</M></td>
              </tr>
              <tr>
                <td><M>{"\\tan x = a"}</M></td>
                <td><M>{"x = \\arctan a + k\\pi"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Simplificação</span>
        <h2>8. Simplificação de Expressões Trigonométricas</h2>
        <div className="lesson-highlight">
          <h3>Exemplo 1</h3>
          <M block={true}>{"\\frac{\\sin^2 x + \\cos^2 x}{\\cos x} = \\frac{1}{\\cos x} = \\sec x"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo 2</h3>
          <M block={true}>{"\\frac{1 - \\cos 2x}{2} = \\frac{1 - (1-2\\sin^2 x)}{2} = \\sin^2 x"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo 3</h3>
          <M block={true}>{"(\\sin x + \\cos x)^2 = 1 + 2\\sin x\\cos x = 1 + \\sin 2x"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Provando Identidades</span>
        <h2>9. Como Provar Identidades Trigonométricas</h2>
        <div className="lesson-highlight">
          <h3>Estratégia</h3>
          <ol>
            <li>Trabalhe em um lado de cada vez (geralmente o mais complexo).</li>
            <li>Converta tudo em senos e cossenos.</li>
            <li>Use a identidade fundamental <M>{"\\sin^2+\\cos^2=1"}</M>.</li>
            <li>Aplique as fórmulas de duplo ângulo, adição, etc.</li>
          </ol>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo: provar que <M>{"\\tan x + \\cot x = \\sec x \\csc x"}</M></h3>
          <M block={true}>{"\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x\\cos x} = \\frac{1}{\\sin x\\cos x} = \\csc x\\sec x \\checkmark"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Tabela Síntese — Identidades Trigonométricas</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Tabela visual dos ângulos notáveis com seno, cosseno e tangente">
            {/* Fundo */}
            <rect width="700" height="220" fill="#f0f4ff" rx="10" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Cabeçalho */}
            <rect x="10" y="10" width="680" height="36" rx="6" fill="#3b82f6"/>
            <text x="80" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">Ângulo</text>
            <text x="220" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">0°</text>
            <text x="330" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">30°</text>
            <text x="440" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">45°</text>
            <text x="550" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">60°</text>
            <text x="660" y="33" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">90°</text>
            {/* Linha sen */}
            <rect x="10" y="56" width="130" height="44" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="75" y="82" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">sen</text>
            <rect x="150" y="56" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="215" y="82" textAnchor="middle" fontSize="13" fill="#1e3a8a">0</text>
            <rect x="290" y="56" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="355" y="82" textAnchor="middle" fontSize="13" fill="#1e3a8a">1/2</text>
            <rect x="430" y="56" width="110" height="44" rx="4" fill="#facc15" stroke="#93c5fd" strokeWidth="1"/>
            <text x="485" y="82" textAnchor="middle" fontSize="13" fill="#1e3a8a">√2/2</text>
            <rect x="550" y="56" width="90" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="595" y="82" textAnchor="middle" fontSize="13" fill="#1e3a8a">√3/2</text>
            <rect x="650" y="56" width="40" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="670" y="82" textAnchor="middle" fontSize="13" fill="#1e3a8a">1</text>
            {/* Linha cos */}
            <rect x="10" y="110" width="130" height="44" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="75" y="136" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">cos</text>
            <rect x="150" y="110" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="215" y="136" textAnchor="middle" fontSize="13" fill="#1e3a8a">1</text>
            <rect x="290" y="110" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="355" y="136" textAnchor="middle" fontSize="13" fill="#1e3a8a">√3/2</text>
            <rect x="430" y="110" width="110" height="44" rx="4" fill="#facc15" stroke="#93c5fd" strokeWidth="1"/>
            <text x="485" y="136" textAnchor="middle" fontSize="13" fill="#1e3a8a">√2/2</text>
            <rect x="550" y="110" width="90" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="595" y="136" textAnchor="middle" fontSize="13" fill="#1e3a8a">1/2</text>
            <rect x="650" y="110" width="40" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="670" y="136" textAnchor="middle" fontSize="13" fill="#1e3a8a">0</text>
            {/* Linha tan */}
            <rect x="10" y="164" width="130" height="44" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="75" y="190" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">tg</text>
            <rect x="150" y="164" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="215" y="190" textAnchor="middle" fontSize="13" fill="#1e3a8a">0</text>
            <rect x="290" y="164" width="130" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="355" y="190" textAnchor="middle" fontSize="13" fill="#1e3a8a">√3/3</text>
            <rect x="430" y="164" width="110" height="44" rx="4" fill="#facc15" stroke="#93c5fd" strokeWidth="1"/>
            <text x="485" y="190" textAnchor="middle" fontSize="13" fill="#1e3a8a">1</text>
            <rect x="550" y="164" width="90" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="595" y="190" textAnchor="middle" fontSize="13" fill="#1e3a8a">√3</text>
            <rect x="650" y="164" width="40" height="44" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1"/>
            <text x="670" y="190" textAnchor="middle" fontSize="13" fill="#1e3a8a">—</text>
          </svg>
          <figcaption>Tabela dos ângulos notáveis (0°, 30°, 45°, 60°, 90°) — células amarelas destacam os valores de 45°, onde sen = cos = √2/2 e tg = 1</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grupo</th><th>Identidade</th></tr>
            </thead>
            <tbody>
              <tr><td>Fundamental</td><td><M>{"\\sin^2\\theta + \\cos^2\\theta = 1"}</M></td></tr>
              <tr><td>Adição</td><td><M>{"\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B"}</M></td></tr>
              <tr><td>Subtração</td><td><M>{"\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B"}</M></td></tr>
              <tr><td>Duplo ângulo</td><td><M>{"\\sin 2\\theta = 2\\sin\\theta\\cos\\theta"}</M></td></tr>
              <tr><td>Duplo ângulo</td><td><M>{"\\cos 2\\theta = 1 - 2\\sin^2\\theta"}</M></td></tr>
              <tr><td>Metade</td><td><M>{"\\sin^2\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{2}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identidade fundamental"
          statement={
            <p>
              Se <M>{"\\sin\\theta = \\dfrac{4}{5}"}</M> e θ está no 1º quadrante, calcule <M>{"\\cos\\theta"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{3}{5}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{4}{5}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{5}{4}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{1}{5}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos\\theta = \\sqrt{1 - \\sin^2\\theta} = \\sqrt{1-\\frac{16}{25}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Fórmula da adição"
          statement={
            <p>Usando a fórmula de adição, calcule <M>{"\\cos 75°"}</M>.</p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{\\sqrt{3}-1}{4}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{1}{2}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos 75° = \\cos(45°+30°) = \\cos45°\\cos30° - \\sin45°\\sin30°"}</M>
              <M block={true}>{"= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ângulo duplo"
          statement={
            <p>
              Se <M>{"\\sin\\theta = \\dfrac{3}{5}"}</M> e θ está no 1º quadrante,
              calcule <M>{"\\sin 2\\theta"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{24}{25}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{12}{25}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{9}{25}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{6}{5}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos\\theta = \\frac{4}{5}"}</M>
              <M block={true}>{"\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Potência de onda"
          statement={
            <p>
              A potência de uma onda eletromagnética é proporcional a <M>{"\\cos^2(\\omega t)"}</M>.
              Usando a identidade <M>{"\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}"}</M>,
              qual é o valor médio de <M>{"\\cos^2(\\omega t)"}</M> ao longo de um período completo?
            </p>
          }
          options={[
            { letter: "a", text: "0" },
            { letter: "b", text: "1/2", correct: true },
            { letter: "c", text: "1" },
            { letter: "d", text: "2" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\cos^2(\\omega t) = \\frac{1+\\cos(2\\omega t)}{2}"}</M>
              <p>O valor médio de cos em um período completo é 0, então:</p>
              <M block={true}>{"\\langle\\cos^2\\rangle = \\frac{1+0}{2} = \\frac{1}{2}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Alcance de projétil"
          statement={
            <p>
              O alcance máximo de um projétil é <M>{"R = \\dfrac{v_0^2}{g}\\sin 2\\theta"}</M>.
              Para <M>{"v_0 = 20"}</M> m/s, <M>{"g = 10"}</M> m/s², com qual ângulo θ o alcance é máximo,
              e qual é esse alcance?
            </p>
          }
          options={[
            { letter: "a", text: "θ = 30°; R = 20 m" },
            { letter: "b", text: "θ = 45°; R = 40 m", correct: true },
            { letter: "c", text: "θ = 60°; R = 40 m" },
            { letter: "d", text: "θ = 45°; R = 20 m" },
          ]}
          resolution={
            <>
              <p>Máximo de sen 2θ quando 2θ = 90°, ou seja θ = 45°.</p>
              <M block={true}>{"R_{\\max} = \\frac{20^2}{10} \\times 1 = 40 \\text{ m}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
