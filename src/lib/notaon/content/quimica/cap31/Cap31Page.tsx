"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 31</span>
          <h1>Equilíbrio da Água: Kw, pH e pOH</h1>
          <p>
            Entenda a autoionização da água, o produto iônico Kw e a escala de pH e pOH — a forma prática de
            medir e comparar a acidez e a basicidade das soluções.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Base de tudo</span>
        <h2>1. Autoionização da Água</h2>
        <p>
          Mesmo pura, a água se ioniza levemente: <M>{"\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^{+} + \\text{OH}^{-}"}</M>.
          Por isso a água conduz uma corrente elétrica mínima.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante</span>
        <h2>2. Produto Iônico da Água (Kw)</h2>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M>{"K_w = [\\text{H}^{+}]\\,[\\text{OH}^{-}] = 1{,}0 \\times 10^{-14} \\ (\\text{a }25\\,°\\text{C})"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            Na água pura, <M>{"[\\text{H}^{+}] = [\\text{OH}^{-}] = 1{,}0 \\times 10^{-7}\\ \\text{mol/L}"}</M>.
            O produto é sempre <M>{"10^{-14}"}</M>: se um aumenta, o outro diminui.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>3. Soluções Ácidas, Básicas e Neutras</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Meio</th><th>Relação de íons</th><th>pH (25 °C)</th></tr>
            </thead>
            <tbody>
              <tr><td>Ácido</td><td><M>{"[\\text{H}^{+}] > [\\text{OH}^{-}]"}</M></td><td>{"<"} 7</td></tr>
              <tr><td>Neutro</td><td><M>{"[\\text{H}^{+}] = [\\text{OH}^{-}]"}</M></td><td>= 7</td></tr>
              <tr><td>Básico</td><td><M>{"[\\text{H}^{+}] < [\\text{OH}^{-}]"}</M></td><td>{">"} 7</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escala</span>
        <h2>4. pH e pOH</h2>
        <div className="math-block">
          <h3>Definições</h3>
          <p><M>{"\\text{pH} = -\\log[\\text{H}^{+}] \\qquad \\text{pOH} = -\\log[\\text{OH}^{-}]"}</M></p>
          <p>Relação fundamental (25 °C): <M>{"\\text{pH} + \\text{pOH} = 14"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interpretando</span>
        <h2>5. Interpretação da Escala</h2>
        <p>
          A escala vai de 0 a 14. Por ser <strong>logarítmica</strong>, cada unidade de pH representa uma
          variação de <strong>10 vezes</strong> na concentração de H⁺.
        </p>
        <div className="lesson-highlight">
          <p>
            Uma solução de pH 3 é <M>{"10\\times"}</M> mais ácida que uma de pH 4 e <M>{"100\\times"}</M> mais
            ácida que uma de pH 5. Quanto menor o pH, mais ácida; quanto maior, mais básica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculos</span>
        <h2>6. Cálculos com pH e pOH</h2>
        <div className="lesson-highlight">
          <p>
            Ex.: solução com <M>{"[\\text{H}^{+}] = 10^{-3}\\ \\text{mol/L}"}</M> →{" "}
            <M>{"\\text{pH} = -\\log 10^{-3} = 3"}</M> (ácida) e <M>{"\\text{pOH} = 14 - 3 = 11"}</M>.
          </p>
          <p>
            Inverso: se <M>{"\\text{pH} = 5"}</M>, então{" "}
            <M>{"[\\text{H}^{+}] = 10^{-5}\\ \\text{mol/L}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Detecção</span>
        <h2>7. Indicadores Ácido-Base</h2>
        <p>
          Indicadores mudam de cor conforme o pH. O <strong>papel indicador universal</strong> e o
          <strong> pHmetro</strong> permitem medir o pH. Exemplos do cotidiano: limão (pH ≈ 2), café (≈ 5),
          água pura (7), sangue (≈ 7,4), sabão (≈ 9-10), soda cáustica (≈ 14).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💧</span>
            <h3>Autoionização</h3>
            <p><M>{"\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^{+} + \\text{OH}^{-}"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Kw</h3>
            <p><M>{"[\\text{H}^{+}][\\text{OH}^{-}] = 10^{-14}"}</M>.</p>
          </div>
          <div className="math-card">
            <span>📉</span>
            <h3>pH</h3>
            <p><M>{"\\text{pH} = -\\log[\\text{H}^{+}]"}</M>.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>pH + pOH</h3>
            <p>= 14 (a 25 °C).</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Escala</h3>
            <p>0-14, logarítmica (cada unidade = 10×).</p>
          </div>
          <div className="math-card">
            <span>🎨</span>
            <h3>Medida</h3>
            <p>Indicadores, papel universal, pHmetro.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de pH</span>
        <h2>Síntese Visual: Escala de pH e Equilíbrio da Água</h2>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Escala de pH de 0 a 14 com exemplos">
          {/* barra de pH */}
          <defs>
            <linearGradient id="phGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect x="40" y="70" width="620" height="40" rx="4" fill="url(#phGrad)" />
          {/* marcas */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => (
            <g key={n}>
              <line x1={40+n*620/14} y1="70" x2={40+n*620/14} y2="115" stroke="#ffffff" strokeWidth="1" />
              <text x={40+n*620/14} y="125" textAnchor="middle" fontSize="11" fill="#1e293b">{n}</text>
            </g>
          ))}
          <text x="40" y="60" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">Ácido</text>
          <text x="350" y="60" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#16a34a">Neutro</text>
          <text x="660" y="60" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">Básico</text>
          {/* exemplos */}
          <text x="40" y="145" textAnchor="middle" fontSize="10" fill="#dc2626">HCl</text>
          <text x="130" y="145" textAnchor="middle" fontSize="10" fill="#dc2626">limão</text>
          <text x="218" y="145" textAnchor="middle" fontSize="10" fill="#dc2626">café</text>
          <text x="350" y="145" textAnchor="middle" fontSize="10" fill="#16a34a">H₂O pura</text>
          <text x="484" y="145" textAnchor="middle" fontSize="10" fill="#2563eb">sabão</text>
          <text x="572" y="145" textAnchor="middle" fontSize="10" fill="#2563eb">NaOH</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">pH + pOH = 14 | pH = −log[H⁺] | pOH = −log[OH⁻] | Kw = [H⁺][OH⁻] = 10⁻¹⁴</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Autoionização da água: Kw e produto iônico">
          <rect x="40" y="25" width="620" height="130" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="52" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">Autoionização da Água</text>
          <text x="350" y="78" textAnchor="middle" fontSize="16" fill="#0f172a">H₂O + H₂O ⇌ H₃O⁺ + OH⁻</text>
          <text x="350" y="108" textAnchor="middle" fontSize="14" fill="#0f172a">Kw = [H₃O⁺][OH⁻] = 1,0×10⁻¹⁴ (25°C)</text>
          <text x="230" y="138" textAnchor="middle" fontSize="13" fill="#dc2626">[H⁺] {">"} [OH⁻] → ácido</text>
          <text x="470" y="138" textAnchor="middle" fontSize="13" fill="#2563eb">[OH⁻] {">"} [H⁺] → básico</text>
          <text x="350" y="155" textAnchor="middle" fontSize="13" fill="#16a34a">H₂O pura: [H⁺] = [OH⁻] = 10⁻⁷ → pH = 7</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Fórmula</th><th>Relação</th><th>pH=7: [H⁺]?</th></tr>
          </thead>
          <tbody>
            <tr><td>pH</td><td>pH = −log[H⁺]</td><td>[H⁺] = 10⁻ᵖᴴ</td><td>[H⁺] = 10⁻⁷ mol/L</td></tr>
            <tr><td>pOH</td><td>pOH = −log[OH⁻]</td><td>[OH⁻] = 10⁻ᵖᴼᴴ</td><td>[OH⁻] = 10⁻⁷ mol/L</td></tr>
            <tr><td>Kw</td><td>Kw = [H⁺][OH⁻]</td><td>= 10⁻¹⁴ (25°C)</td><td>10⁻⁷ × 10⁻⁷ = 10⁻¹⁴ ✓</td></tr>
            <tr><td>pH + pOH</td><td>pH + pOH = 14</td><td>pH = 3 → pOH = 11</td><td>—</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. pH neutro"
          statement={<p>A 25 °C, uma solução neutra apresenta pH igual a:</p>}
          options={[
            { letter: "a", text: "7", correct: true },
            { letter: "b", text: "0" },
            { letter: "c", text: "14" },
            { letter: "d", text: "1" },
          ]}
          resolution={<p>Na água pura/solução neutra, <M>{"[\\text{H}^{+}] = 10^{-7}"}</M> → <M>{"\\text{pH} = 7"}</M>.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Classificação por pH"
          statement={<p>Uma solução com pH = 3 é:</p>}
          options={[
            { letter: "a", text: "Ácida", correct: true },
            { letter: "b", text: "Básica" },
            { letter: "c", text: "Neutra" },
            { letter: "d", text: "Impossível" },
          ]}
          resolution={<p>pH menor que 7 indica meio ácido (maior concentração de H⁺ que de OH⁻).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Cálculo de pH"
          statement={<p>Qual o pH de uma solução com <M>{"[\\text{H}^{+}] = 10^{-4}\\ \\text{mol/L}"}</M>?</p>}
          options={[
            { letter: "a", text: "4", correct: true },
            { letter: "b", text: "10" },
            { letter: "c", text: "−4" },
            { letter: "d", text: "14" },
          ]}
          resolution={<p><M>{"\\text{pH} = -\\log(10^{-4}) = 4"}</M>. Solução ácida.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Relação pH e pOH"
          statement={<p>Se uma solução tem pOH = 11, seu pH é:</p>}
          options={[
            { letter: "a", text: "3", correct: true },
            { letter: "b", text: "11" },
            { letter: "c", text: "7" },
            { letter: "d", text: "25" },
          ]}
          resolution={<p><M>{"\\text{pH} = 14 - \\text{pOH} = 14 - 11 = 3"}</M>. Solução ácida.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Escala logarítmica"
          statement={<p>Quantas vezes uma solução de pH 2 é mais ácida que uma de pH 5?</p>}
          options={[
            { letter: "a", text: "1000 vezes", correct: true },
            { letter: "b", text: "3 vezes" },
            { letter: "c", text: "10 vezes" },
            { letter: "d", text: "100 vezes" },
          ]}
          resolution={<p>A diferença é de 3 unidades de pH. Como a escala é logarítmica, cada unidade representa 10×: <M>{"10^{3} = 1000"}</M> vezes mais ácida.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) pH do solo e agricultura"
          statement={<p>Solos muito ácidos prejudicam algumas culturas. Para corrigir, aplica-se calcário (uma base), elevando o pH de 5 para 6. Essa correção significa que a concentração de H⁺ no solo foi:</p>}
          options={[
            { letter: "a", text: "Reduzida a um décimo (10 vezes menor).", correct: true },
            { letter: "b", text: "Aumentada 10 vezes." },
            { letter: "c", text: "Mantida igual." },
            { letter: "d", text: "Reduzida pela metade." },
          ]}
          resolution={<p>Subir o pH de 5 para 6 (uma unidade) significa, pela escala logarítmica, que <M>{"[\\text{H}^{+}]"}</M> passou de <M>{"10^{-5}"}</M> para <M>{"10^{-6}"}</M> — uma redução de 10 vezes na acidez, tornando o solo mais favorável ao cultivo.</p>}
        />
      </section>
    </article>
  );
}
