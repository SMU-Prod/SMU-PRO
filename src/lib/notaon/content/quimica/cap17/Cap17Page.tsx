"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 17</span>
          <h1>Grandezas Químicas: Mol e Constante de Avogadro</h1>
          <p>
            Entenda a unidade de massa atômica, o conceito de mol, a massa molar e o volume molar dos gases.
            Domine o "triângulo das conversões" entre massa, mol e número de partículas — a base de toda a
            estequiometria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A unidade base</span>
        <h2>1. Unidade de Massa Atômica (u)</h2>
        <p>
          Átomos são leves demais para serem medidos em gramas no dia a dia. Por isso usamos a unidade de
          massa atômica: <M>{"1\\ \\text{u}"}</M> equivale a <M>{"1/12"}</M> da massa de um átomo de{" "}
          <M>{"{}^{12}\\text{C}"}</M> (<M>{"\\approx 1{,}66 \\times 10^{-24}\\ \\text{g}"}</M>).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Massas</span>
        <h2>2. Massa Atômica e Massa Molecular</h2>
        <p>
          A <strong>massa atômica</strong> de um elemento (em u) é a média ponderada de seus isótopos.
          A <strong>massa molecular (MM)</strong> é a soma das massas atômicas de todos os átomos da fórmula.
        </p>
        <div className="lesson-highlight">
          <p>
            Ex.: <M>{"\\text{H}_2\\text{SO}_4"}</M> = <M>{"2(1) + 32 + 4(16) = 2 + 32 + 64 = 98\\ \\text{u}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O conceito central</span>
        <h2>3. Mol — A Unidade dos Químicos</h2>
        <p>
          O <strong>mol</strong> é a quantidade de matéria que contém tantas entidades quantas há em 12 g de{" "}
          <M>{"{}^{12}\\text{C}"}</M>. Esse número é a <strong>constante de Avogadro</strong>:
        </p>
        <div className="math-block">
          <h3>Constante de Avogadro</h3>
          <p><M>{"N_A = 6{,}02 \\times 10^{23}\\ \\text{partículas/mol}"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            1 mol de qualquer coisa = <M>{"6{,}02 \\times 10^{23}"}</M> unidades (átomos, moléculas, íons…),
            assim como "1 dúzia" = 12 unidades.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A ponte</span>
        <h2>4. Massa Molar (M)</h2>
        <p>
          A <strong>massa molar</strong> é a massa de 1 mol da substância, em g/mol. Numericamente igual à
          massa molecular em u, mas com unidade g/mol — é a ponte entre o micro (u) e o macro (g).
        </p>
        <div className="math-block">
          <h3>Relação fundamental</h3>
          <p><M>{"n = \\dfrac{m}{M}"}</M></p>
          <p>onde <M>{"n"}</M> = nº de mols, <M>{"m"}</M> = massa (g), <M>{"M"}</M> = massa molar (g/mol).</p>
        </div>
        <div className="lesson-highlight">
          <p>
            Ex.: a água tem <M>{"M = 18\\ \\text{g/mol}"}</M>. Logo, 36 g de água correspondem a{" "}
            <M>{"n = 36/18 = 2\\ \\text{mol}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gases</span>
        <h2>5. Volume Molar dos Gases (CNTP)</h2>
        <p>
          Nas Condições Normais de Temperatura e Pressão (CNTP: 0 °C e 1 atm), <strong>1 mol de qualquer
          gás</strong> ocupa o mesmo volume:
        </p>
        <div className="math-block">
          <h3>Volume molar</h3>
          <p><M>{"V_m = 22{,}4\\ \\text{L/mol (CNTP)}"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            Ex.: 2 mol de <M>{"\\text{CO}_2"}</M> na CNTP ocupam <M>{"2 \\times 22{,}4 = 44{,}8\\ \\text{L}"}</M>,
            independentemente de ser CO₂, O₂ ou H₂ (Lei de Avogadro).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conversões</span>
        <h2>6. Triângulo das Conversões</h2>
        <p>O mol é o ponto central que conecta as três grandezas mais usadas:</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>De / Para</th><th>Relação</th></tr>
            </thead>
            <tbody>
              <tr><td>Massa ↔ mol</td><td><M>{"n = m / M"}</M></td></tr>
              <tr><td>Mol ↔ nº de partículas</td><td><M>{"N = n \\cdot N_A"}</M></td></tr>
              <tr><td>Mol ↔ volume de gás (CNTP)</td><td><M>{"V = n \\cdot 22{,}4"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Estratégia:</strong> sempre passe primeiro pela quantidade em mols. Mol é a "moeda comum"
            que converte massa, partículas e volume.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por quê</span>
        <h2>7. Por Que o Mol Importa?</h2>
        <p>
          Reações ocorrem em proporções de <strong>números de partículas</strong>, não de massa direta. O mol
          permite "contar" átomos e moléculas pesando-os, tornando possível calcular quanto de reagente usar
          e quanto de produto esperar — a essência da estequiometria.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚖️</span>
            <h3>u</h3>
            <p>1/12 da massa do <M>{"{}^{12}\\text{C}"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Avogadro</h3>
            <p><M>{"N_A = 6{,}02 \\times 10^{23}"}</M> por mol.</p>
          </div>
          <div className="math-card">
            <span>🌉</span>
            <h3>Massa molar</h3>
            <p><M>{"n = m/M"}</M> (g/mol).</p>
          </div>
          <div className="math-card">
            <span>🎈</span>
            <h3>Volume molar</h3>
            <p>22,4 L/mol na CNTP.</p>
          </div>
          <div className="math-card">
            <span>🔺</span>
            <h3>Conversões</h3>
            <p><M>{"N = n N_A"}</M>; <M>{"V = 22{,}4\\,n"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Por quê</h3>
            <p>O mol conta partículas pesando — base da estequiometria.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama do Mol</span>
        <h2>Síntese Visual: Grandezas Químicas e o Mol</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Mapa das grandezas: mol conecta massa, volume e número de entidades">
          <defs>
            <marker id="arr17q" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* nó central: mol */}
          <ellipse cx="350" cy="105" rx="55" ry="28" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="350" y="110" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#713f12">mol (n)</text>
          {/* nó Massa */}
          <ellipse cx="130" cy="50" rx="90" ry="28" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="130" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Massa (m)</text>
          <text x="130" y="62" textAnchor="middle" fontSize="12" fill="#1d4ed8">m = n · M</text>
          <line x1="215" y1="70" x2="300" y2="95" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          <line x1="300" y1="100" x2="215" y2="75" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          {/* nó N° entidades */}
          <ellipse cx="130" cy="165" rx="90" ry="28" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="130" y="160" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">N° entidades (N)</text>
          <text x="130" y="178" textAnchor="middle" fontSize="12" fill="#166534">N = n · Nₐ</text>
          <line x1="215" y1="148" x2="300" y2="115" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          <line x1="300" y1="115" x2="215" y2="145" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          {/* nó Volume (gás) */}
          <ellipse cx="570" cy="105" rx="100" ry="28" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="570" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Volume gás (V)</text>
          <text x="570" y="118" textAnchor="middle" fontSize="12" fill="#9d174d">V = n · 22,4 L (CNTP)</text>
          <line x1="405" y1="105" x2="468" y2="105" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          <line x1="468" y1="112" x2="405" y2="112" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr17q)" />
          {/* Nₐ */}
          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">Nₐ = 6,02×10²³ mol⁻¹ | M = massa molar (g/mol) | CNTP: 0°C e 1 atm</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Exemplo de cálculo com mol: H2O">
          <rect x="40" y="20" width="620" height="140" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <text x="350" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Exemplo: 2 mol de H₂O</text>
          <text x="350" y="72" textAnchor="middle" fontSize="13" fill="#1e293b">M(H₂O) = 2×1 + 16 = 18 g/mol</text>
          <text x="200" y="100" textAnchor="middle" fontSize="13" fill="#2563eb">m = 2 × 18 = 36 g</text>
          <text x="500" y="100" textAnchor="middle" fontSize="13" fill="#16a34a">N = 2 × 6,02×10²³ = 1,2×10²⁴</text>
          <text x="350" y="128" textAnchor="middle" fontSize="13" fill="#dc2626">V (CNTP) = 2 × 22,4 = 44,8 L</text>
          <text x="350" y="152" textAnchor="middle" fontSize="13" fill="#475569">Cada grandeza se obtém multiplicando n pela constante correspondente</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Símbolo</th><th>Unidade</th><th>Relação com n</th><th>Constante</th></tr>
          </thead>
          <tbody>
            <tr><td>Quantidade de matéria</td><td>n</td><td>mol</td><td>—</td><td>—</td></tr>
            <tr><td>Massa</td><td>m</td><td>gramas (g)</td><td>m = n · M</td><td>M = massa molar (g/mol)</td></tr>
            <tr><td>N° de entidades</td><td>N</td><td>adimensional</td><td>N = n · Nₐ</td><td>Nₐ = 6,02×10²³ mol⁻¹</td></tr>
            <tr><td>Volume de gás (CNTP)</td><td>V</td><td>litros (L)</td><td>V = n · 22,4</td><td>22,4 L/mol em CNTP</td></tr>
            <tr><td>Volume de gás (CNTPN)</td><td>V</td><td>litros (L)</td><td>V = n · 22,7</td><td>22,7 L/mol em 25°C e 1 atm</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Massa molar"
          statement={<p>A massa molar do gás carbônico (<M>{"\\text{CO}_2"}</M>), dados C = 12 e O = 16 g/mol, é:</p>}
          options={[
            { letter: "a", text: "44 g/mol", correct: true },
            { letter: "b", text: "28 g/mol" },
            { letter: "c", text: "32 g/mol" },
            { letter: "d", text: "12 g/mol" },
          ]}
          resolution={<p><M>{"M = 12 + 2(16) = 12 + 32 = 44\\ \\text{g/mol}"}</M>.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Número de partículas"
          statement={<p>Quantas moléculas há em 2 mols de água? (Use <M>{"N_A = 6{,}02 \\times 10^{23}"}</M>)</p>}
          options={[
            { letter: "a", text: "1,204 × 10²⁴ moléculas", correct: true },
            { letter: "b", text: "6,02 × 10²³ moléculas" },
            { letter: "c", text: "3,01 × 10²³ moléculas" },
            { letter: "d", text: "2,0 × 10²³ moléculas" },
          ]}
          resolution={<p><M>{"N = n \\cdot N_A = 2 \\times 6{,}02 \\times 10^{23} = 12{,}04 \\times 10^{23} = 1{,}204 \\times 10^{24}"}</M> moléculas.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Massa em mol"
          statement={<p>Quantos mols correspondem a 90 g de glicose (<M>{"\\text{C}_6\\text{H}_{12}\\text{O}_6"}</M>, M = 180 g/mol)?</p>}
          options={[
            { letter: "a", text: "0,5 mol", correct: true },
            { letter: "b", text: "1 mol" },
            { letter: "c", text: "2 mol" },
            { letter: "d", text: "90 mol" },
          ]}
          resolution={<p><M>{"n = m/M = 90/180 = 0{,}5\\ \\text{mol}"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Volume de gás na CNTP"
          statement={<p>Qual o volume ocupado por 0,5 mol de gás oxigênio na CNTP?</p>}
          options={[
            { letter: "a", text: "11,2 L", correct: true },
            { letter: "b", text: "22,4 L" },
            { letter: "c", text: "44,8 L" },
            { letter: "d", text: "5,6 L" },
          ]}
          resolution={<p><M>{"V = n \\times 22{,}4 = 0{,}5 \\times 22{,}4 = 11{,}2\\ \\text{L}"}</M>. Vale para qualquer gás na CNTP.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Cadeia de conversões"
          statement={<p>Quantos átomos de oxigênio há em 88 g de <M>{"\\text{CO}_2"}</M> (M = 44 g/mol)?</p>}
          options={[
            { letter: "a", text: "2,408 × 10²⁴ átomos", correct: true },
            { letter: "b", text: "1,204 × 10²⁴ átomos" },
            { letter: "c", text: "6,02 × 10²³ átomos" },
            { letter: "d", text: "1,204 × 10²³ átomos" },
          ]}
          resolution={<p><M>{"n = 88/44 = 2\\ \\text{mol}"}</M> de CO₂ → <M>{"2 \\times 6{,}02 \\times 10^{23} = 1{,}204 \\times 10^{24}"}</M> moléculas. Cada CO₂ tem 2 oxigênios: <M>{"2 \\times 1{,}204 \\times 10^{24} = 2{,}408 \\times 10^{24}"}</M> átomos de O.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Pegada de carbono"
          statement={<p>A queima de combustíveis libera <M>{"\\text{CO}_2"}</M>. Se um motor emite 44 g de CO₂ (M = 44 g/mol), a quantidade de matéria e o volume desse gás na CNTP são, respectivamente:</p>}
          options={[
            { letter: "a", text: "1 mol e 22,4 L", correct: true },
            { letter: "b", text: "2 mol e 44,8 L" },
            { letter: "c", text: "0,5 mol e 11,2 L" },
            { letter: "d", text: "1 mol e 44 L" },
          ]}
          resolution={<p><M>{"n = 44/44 = 1\\ \\text{mol}"}</M>. Na CNTP: <M>{"V = 1 \\times 22{,}4 = 22{,}4\\ \\text{L}"}</M>. Esse tipo de cálculo permite estimar emissões de gases de efeito estufa.</p>}
        />
      </section>
    </article>
  );
}
