"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 41</span>
          <h1>Isomeria Plana</h1>
          <p>
            Entenda como compostos com a mesma fórmula molecular podem ser diferentes. Estude os tipos de
            isomeria plana: de cadeia, de posição, de função, metameria e tautomeria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Isomeria?</h2>
        <p>
          <strong>Isômeros</strong> são compostos diferentes que têm a <strong>mesma fórmula molecular</strong>,
          mas estruturas (e propriedades) distintas. Na <strong>isomeria plana</strong>, a diferença é
          identificável na fórmula estrutural plana (a "conectividade" dos átomos).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>2. Isomeria de Cadeia</h2>
        <p>
          Mesma fórmula e mesma função, mas <strong>tipos de cadeia diferentes</strong> (ex.: normal vs
          ramificada). Ex.: butano (cadeia reta) e metilpropano/isobutano (ramificada), ambos{" "}
          <M>{"\\text{C}_4\\text{H}_{10}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>3. Isomeria de Posição</h2>
        <p>
          Mesma fórmula, mesma função e mesma cadeia, mas com o <strong>grupo funcional ou a insaturação em
          posições diferentes</strong>. Ex.: 1-propanol e 2-propanol (–OH em carbonos diferentes); 1-buteno e
          2-buteno (dupla em posições diferentes).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>4. Isomeria de Função</h2>
        <p>
          Mesma fórmula molecular, mas <strong>funções químicas diferentes</strong>. Ex.: etanol (álcool) e
          éter dimetílico (éter), ambos <M>{"\\text{C}_2\\text{H}_6\\text{O}"}</M>; ou ácido carboxílico e
          éster (<M>{"\\text{C}_n\\text{H}_{2n}\\text{O}_2"}</M>).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>5. Metameria (Isomeria de Compensação)</h2>
        <p>
          Mesma fórmula e mesma função, mas com <strong>posição diferente do heteroátomo</strong> na cadeia
          (em éteres, ésteres, aminas). Ex.: dois éteres com o oxigênio em posições distintas da cadeia.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 5</span>
        <h2>6. Tautomeria</h2>
        <p>
          Caso especial de isomeria de função em <strong>equilíbrio dinâmico</strong>: os isômeros se
          interconvertem. O clássico é o equilíbrio <strong>aldeído/cetona ⇌ enol</strong>. Ex.:{" "}
          <M>{"\\text{aldeído} \\rightleftharpoons \\text{enol}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagnóstico</span>
        <h2>7. Como Identificar Cada Tipo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>O que muda</th><th>Tipo de isomeria</th></tr>
            </thead>
            <tbody>
              <tr><td>Tipo de cadeia</td><td>De cadeia</td></tr>
              <tr><td>Posição do grupo/insaturação</td><td>De posição</td></tr>
              <tr><td>Função química</td><td>De função</td></tr>
              <tr><td>Posição do heteroátomo</td><td>Metameria</td></tr>
              <tr><td>Função, em equilíbrio dinâmico</td><td>Tautomeria</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧩</span>
            <h3>Isômeros</h3>
            <p>Mesma fórmula molecular, estruturas diferentes.</p>
          </div>
          <div className="math-card">
            <span>🪢</span>
            <h3>Cadeia</h3>
            <p>Tipo de cadeia muda (reta × ramificada).</p>
          </div>
          <div className="math-card">
            <span>📍</span>
            <h3>Posição</h3>
            <p>Posição do grupo/insaturação muda.</p>
          </div>
          <div className="math-card">
            <span>🔀</span>
            <h3>Função</h3>
            <p>Funções diferentes (álcool × éter).</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Metameria</h3>
            <p>Posição do heteroátomo muda.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Tautomeria</h3>
            <p>Função em equilíbrio dinâmico (aldeído ⇌ enol).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa de Isomeria</span>
        <h2>Tipos de Isomeria Plana — Visão Geral</h2>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Mapa dos 5 tipos de isomeria plana">
          <rect x="270" y="10" width="160" height="44" rx="8" fill="#1d4ed8" />
          <text x="350" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">ISOMERIA PLANA</text>
          <text x="350" y="48" textAnchor="middle" fontSize="11" fill="#bfdbfe">mesma fórmula molecular</text>
          <line x1="350" y1="54" x2="350" y2="78" stroke="#94a3b8" strokeWidth="1.5" />
          {[
            ["De cadeia", "Cadeia carbônica\ndiferente", 80, "#dbeafe","#1e40af"],
            ["De posição", "Grupo funcional\nem posição diferente", 230, "#f0fdf4","#166534"],
            ["De função", "Grupos funcionais\ndiferentes", 350, "#fef9c3","#92400e"],
            ["De compensação\n(tautomeria)", "Equilíbrio dinâmico\nentre isômeros", 490, "#fce7f3","#9d174d"],
            ["Metameria", "Átomo diff.\nno heterogrupo", 630, "#fff7ed","#c2410c"]
          ].map(([name, desc, cx, fill, stroke]) => {
            const hasNewline = (name as string).includes("\n");
            return (
              <g key={cx as number}>
                <line x1="350" y1="78" x2={cx as number} y2="100" stroke="#94a3b8" strokeWidth="1" />
                <rect x={(cx as number)-72} y="100" width="140" height="105" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
                {hasNewline
                  ? (name as string).split("\n").map((l,i) => <text key={i} x={cx as number} y={122+i*16} textAnchor="middle" fontSize="11" fontWeight="bold" fill={stroke as string}>{l}</text>)
                  : <text x={cx as number} y={130} textAnchor="middle" fontSize="12" fontWeight="bold" fill={stroke as string}>{name as string}</text>
                }
                {(desc as string).split("\n").map((l,i) => (
                  <text key={i} x={cx as number} y={(hasNewline?155:158)+i*16} textAnchor="middle" fontSize="11" fill={stroke as string}>{l}</text>
                ))}
              </g>
            );
          })}
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Exemplos de isomeria de cadeia e de posição com fórmula C5H12">
          <text x="350" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Exemplo — Isômeros de C₅H₁₂ (isomeria de cadeia)</text>

          <rect x="20" y="35" width="200" height="130" rx="6" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
          <text x="120" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">n-pentano</text>
          <text x="120" y="80" textAnchor="middle" fontSize="12" fill="#1d4ed8">C—C—C—C—C</text>
          <text x="120" y="100" textAnchor="middle" fontSize="11" fill="#1d4ed8">cadeia normal (reta)</text>
          <text x="120" y="120" textAnchor="middle" fontSize="11" fill="#1d4ed8">Tb = 36°C</text>

          <rect x="250" y="35" width="200" height="130" rx="6" fill="#f0fdf4" stroke="#15803d" strokeWidth="2" />
          <text x="350" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803d">isopentano</text>
          <text x="350" y="80" textAnchor="middle" fontSize="12" fill="#15803d">C—C—C—C (com CH₃)</text>
          <text x="350" y="100" textAnchor="middle" fontSize="11" fill="#15803d">cadeia ramificada</text>
          <text x="350" y="120" textAnchor="middle" fontSize="11" fill="#15803d">Tb = 28°C</text>

          <rect x="480" y="35" width="200" height="130" rx="6" fill="#fef9c3" stroke="#854d0e" strokeWidth="2" />
          <text x="580" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854d0e">neopentano</text>
          <text x="580" y="80" textAnchor="middle" fontSize="12" fill="#854d0e">C no centro + 4 CH₃</text>
          <text x="580" y="100" textAnchor="middle" fontSize="11" fill="#854d0e">cadeia neopentílica</text>
          <text x="580" y="120" textAnchor="middle" fontSize="11" fill="#854d0e">Tb = 9°C</text>

          <text x="350" y="175" textAnchor="middle" fontSize="12" fill="#475569">Todos têm C₅H₁₂ — mesma fórmula, propriedades físicas diferentes</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Tipo de isomeria</th><th>O que difere</th><th>Fórmula molecular</th><th>Exemplo clássico</th></tr>
          </thead>
          <tbody>
            <tr><td>De cadeia</td><td>Esqueleto carbônico (normal, ramificado, cíclico)</td><td>C₅H₁₂</td><td>n-pentano × isopentano</td></tr>
            <tr><td>De posição</td><td>Posição do grupo funcional ou insaturação</td><td>C₄H₈O</td><td>But-1-anol × But-2-anol</td></tr>
            <tr><td>De função</td><td>Tipo de grupo funcional</td><td>C₂H₆O</td><td>Etanol × éter dimetílico</td></tr>
            <tr><td>Tautomeria</td><td>Equilíbrio dinâmico cetona ⇌ enol</td><td>C₃H₆O</td><td>Acetona ⇌ propenol</td></tr>
            <tr><td>Metameria</td><td>Diferente divisão do heterogrupo</td><td>C₄H₁₀O</td><td>Éter metil-propílico × etil-etílico</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Definição de isômeros"
          statement={<p>Dois compostos são isômeros quando possuem:</p>}
          options={[
            { letter: "a", text: "A mesma fórmula molecular, mas estruturas diferentes", correct: true },
            { letter: "b", text: "Fórmulas moleculares diferentes" },
            { letter: "c", text: "A mesma estrutura" },
            { letter: "d", text: "O mesmo número de carbonos apenas" },
          ]}
          resolution={<p>Isômeros têm idêntica fórmula molecular, mas se diferenciam na estrutura (e, portanto, nas propriedades).</p>}
        />

        <Exercise
          level="Básico"
          title="2. Etanol e éter dimetílico"
          statement={<p>O etanol (álcool) e o éter dimetílico (éter) têm a mesma fórmula C₂H₆O. Eles são isômeros de:</p>}
          options={[
            { letter: "a", text: "Função", correct: true },
            { letter: "b", text: "Posição" },
            { letter: "c", text: "Cadeia" },
            { letter: "d", text: "Tautomeria" },
          ]}
          resolution={<p>Mesma fórmula molecular, mas funções químicas diferentes (álcool e éter) → isomeria de função.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. 1-propanol e 2-propanol"
          statement={<p>O 1-propanol e o 2-propanol diferem apenas pela posição do grupo –OH. São isômeros de:</p>}
          options={[
            { letter: "a", text: "Posição", correct: true },
            { letter: "b", text: "Função" },
            { letter: "c", text: "Cadeia" },
            { letter: "d", text: "Metameria" },
          ]}
          resolution={<p>Mesma função (álcool), mesma cadeia, mas o –OH muda de posição (C1 ou C2) → isomeria de posição.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Butano e isobutano"
          statement={<p>O butano (cadeia reta) e o metilpropano (ramificada), ambos C₄H₁₀, são isômeros de:</p>}
          options={[
            { letter: "a", text: "Cadeia", correct: true },
            { letter: "b", text: "Posição" },
            { letter: "c", text: "Função" },
            { letter: "d", text: "Tautomeria" },
          ]}
          resolution={<p>Mesma fórmula e função, mas tipos de cadeia diferentes (normal × ramificada) → isomeria de cadeia.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Tautomeria"
          statement={<p>O equilíbrio dinâmico entre uma cetona e seu enol correspondente é um exemplo de:</p>}
          options={[
            { letter: "a", text: "Tautomeria", correct: true },
            { letter: "b", text: "Isomeria de cadeia" },
            { letter: "c", text: "Metameria" },
            { letter: "d", text: "Isomeria de posição" },
          ]}
          resolution={<p>A tautomeria é um caso especial de isomeria de função em que os isômeros (ex.: cetona e enol) coexistem em equilíbrio dinâmico, interconvertendo-se.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Mesma fórmula, efeitos diferentes"
          statement={<p>Dois medicamentos podem ter a mesma fórmula molecular, mas estruturas diferentes, resultando em ações distintas no organismo. Esse fenômeno, em que a mesma fórmula gera compostos diferentes, é a base da:</p>}
          options={[
            { letter: "a", text: "Isomeria, em que mesma fórmula molecular leva a estruturas e propriedades diferentes.", correct: true },
            { letter: "b", text: "Radioatividade." },
            { letter: "c", text: "Combustão." },
            { letter: "d", text: "Neutralização." },
          ]}
          resolution={<p>A isomeria explica por que compostos com idêntica fórmula molecular podem ter propriedades — inclusive farmacológicas — muito diferentes, devido às distintas arranjos estruturais dos átomos.</p>}
        />
      </section>
    </article>
  );
}
