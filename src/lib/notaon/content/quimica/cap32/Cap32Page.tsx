"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 32</span>
          <h1>Hidrólise Salina e Solução Tampão</h1>
          <p>
            Descubra por que algumas soluções salinas não são neutras (hidrólise) e como as soluções-tampão
            mantêm o pH praticamente constante — mecanismo essencial para o sangue e para muitos processos
            industriais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Hidrólise Salina?</h2>
        <p>
          É a reação dos íons de um <strong>sal</strong> com a água, alterando o pH da solução. Apesar de
          serem "sais", muitos não formam soluções neutras — depende da força do ácido e da base que os
          originaram.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra de ouro</span>
        <h2>2. Tipos de Sais e seu Caráter</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sal de…</th><th>Caráter da solução</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>Ácido forte + base forte</td><td>Neutro (não hidrolisa)</td><td>NaCl</td></tr>
              <tr><td>Ácido forte + base fraca</td><td>Ácido</td><td>NH₄Cl</td></tr>
              <tr><td>Ácido fraco + base forte</td><td>Básico</td><td>CH₃COONa</td></tr>
              <tr><td>Ácido fraco + base fraca</td><td>Depende dos Ka/Kb</td><td>CH₃COONH₄</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p><strong>Macete:</strong> "o mais forte manda". Quem vence (o ácido ou a base mais forte) define o caráter da solução.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>3. Exemplos de Hidrólise</h2>
        <div className="lesson-highlight">
          <p>
            <strong>Sal básico</strong> (acetato de sódio): o ânion acetato reage com a água:{" "}
            <M>{"\\text{CH}_3\\text{COO}^{-} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^{-}"}</M> → libera OH⁻ → básico.
          </p>
          <p>
            <strong>Sal ácido</strong> (cloreto de amônio): o cátion amônio reage:{" "}
            <M>{"\\text{NH}_4^{+} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4\\text{OH} + \\text{H}^{+}"}</M> → libera H⁺ → ácido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante</span>
        <h2>4. Constante de Hidrólise (Kh)</h2>
        <p>
          Relaciona-se com Kw e a constante do ácido/base fraco envolvido:{" "}
          <M>{"K_h = \\dfrac{K_w}{K_a}"}</M> (para sal de ácido fraco) ou <M>{"K_h = \\dfrac{K_w}{K_b}"}</M>{" "}
          (para sal de base fraca). Quanto mais fraco o ácido/base de origem, maior a hidrólise.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tampão</span>
        <h2>5. O que é uma Solução Tampão?</h2>
        <p>
          É uma solução que <strong>resiste a variações de pH</strong> ao receber pequenas quantidades de
          ácido ou base. É formada por um <strong>ácido fraco + seu sal</strong> (ex.: ácido acético +
          acetato de sódio) ou uma <strong>base fraca + seu sal</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mecanismo</span>
        <h2>6. Como o Tampão Funciona?</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Se adicionarmos <strong>ácido</strong> (H⁺), o ânion do sal o neutraliza:{" "}
              <M>{"\\text{CH}_3\\text{COO}^{-} + \\text{H}^{+} \\rightarrow \\text{CH}_3\\text{COOH}"}</M>.</li>
            <li>Se adicionarmos <strong>base</strong> (OH⁻), o ácido fraco a neutraliza:{" "}
              <M>{"\\text{CH}_3\\text{COOH} + \\text{OH}^{-} \\rightarrow \\text{CH}_3\\text{COO}^{-} + \\text{H}_2\\text{O}"}</M>.</li>
          </ul>
          <p>Assim, o pH varia muito pouco — o tampão "absorve" o impacto.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Importância</span>
        <h2>7. Importância Biológica e Prática</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩸</span>
            <h3>Sangue</h3>
            <p>Tampão bicarbonato mantém o pH ≈ 7,4; desvios pequenos são fatais.</p>
          </div>
          <div className="lesson-card">
            <span>💊</span>
            <h3>Medicamentos</h3>
            <p>Soros e injetáveis são tamponados para não agredir os tecidos.</p>
          </div>
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Laboratório</h3>
            <p>Reações enzimáticas exigem pH controlado por tampões.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💧</span>
            <h3>Hidrólise</h3>
            <p>Íons do sal reagem com a água, mudando o pH.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Regra</h3>
            <p>"O mais forte manda" define o caráter.</p>
          </div>
          <div className="math-card">
            <span>🧂</span>
            <h3>Neutro</h3>
            <p>Sal de ácido forte + base forte (NaCl).</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Kh</h3>
            <p><M>{"K_h = K_w/K_a"}</M> (ou <M>{"K_w/K_b"}</M>).</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Tampão</h3>
            <p>Ácido/base fraco + seu sal. Resiste a mudanças de pH.</p>
          </div>
          <div className="math-card">
            <span>🩸</span>
            <h3>Biologia</h3>
            <p>Sangue tamponado em pH ≈ 7,4.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Hidrólise</span>
        <h2>Síntese Visual: Hidrólise Salina e Tampões</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="pH de soluções salinas: ácido, básico ou neutro">
          {[
            ["Sal de\nÁcido Forte\n+ Base Fraca", "pH < 7\n(ácido)", "NH₄Cl\nFe₂(SO₄)₃", "#fce7f3","#db2777",120],
            ["Sal de\nÁcido Fraco\n+ Base Forte", "pH > 7\n(básico)", "CH₃COONa\nNa₂CO₃", "#dbeafe","#2563eb",350],
            ["Sal de\nÁcido Forte\n+ Base Forte", "pH = 7\n(neutro)", "NaCl\nKNO₃", "#dcfce7","#16a34a",580]
          ].map(([title,ph,ex,fill,stroke,cx]) => (
            <g key={cx as string}>
              <rect x={(cx as number)-110} y="20" width="200" height="160" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[0]}</text>
              <text x={cx as number} y="63" textAnchor="middle" fontSize="12" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[1]}</text>
              <text x={cx as number} y="81" textAnchor="middle" fontSize="12" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[2]}</text>
              <text x={cx as number} y="112" textAnchor="middle" fontSize="16" fontWeight="bold" fill={stroke as string}>{(ph as string).split("\n")[0]}</text>
              <text x={cx as number} y="130" textAnchor="middle" fontSize="14" fill={stroke as string}>{(ph as string).split("\n")[1]}</text>
              {(ex as string).split("\n").map((line, i) => (
                <text key={i} x={cx as number} y={155+i*18} textAnchor="middle" fontSize="12" fill={stroke as string}>{line}</text>
              ))}
            </g>
          ))}
          <text x="350" y="196" textAnchor="middle" fontSize="12" fill="#475569">Sal de ácido e base fracos: comparar Ka e Kb</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Solução tampão: resistência à variação de pH">
          <rect x="40" y="20" width="620" height="145" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="350" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#713f12">Solução Tampão</text>
          <text x="350" y="72" textAnchor="middle" fontSize="13" fill="#713f12">Composição: ácido fraco + sal do mesmo ácido</text>
          <text x="350" y="92" textAnchor="middle" fontSize="13" fill="#713f12">ex: CH₃COOH / CH₃COONa (tampão acetato)</text>
          <text x="350" y="115" textAnchor="middle" fontSize="13" fill="#713f12">Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])</text>
          <text x="200" y="142" textAnchor="middle" fontSize="12" fill="#92400e">Adicionar H⁺ → A⁻ consome o H⁺</text>
          <text x="520" y="142" textAnchor="middle" fontSize="12" fill="#92400e">Adicionar OH⁻ → HA neutraliza OH⁻</text>
          <text x="350" y="158" textAnchor="middle" fontSize="13" fill="#713f12">Aplicação: sangue (H₂CO₃/HCO₃⁻), pH 7,35–7,45</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Origem do sal</th><th>pH da solução</th><th>Qual íon hidrolisa</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td>Ácido forte + base forte</td><td>= 7 (neutro)</td><td>Nenhum</td><td>NaCl, KNO₃, BaCl₂</td></tr>
            <tr><td>Ácido forte + base fraca</td><td>{"<"} 7 (ácido)</td><td>Cátion (hidrólise catiônica)</td><td>NH₄Cl, AlCl₃, FeCl₃</td></tr>
            <tr><td>Ácido fraco + base forte</td><td>{">"} 7 (básico)</td><td>Ânion (hidrólise aniônica)</td><td>CH₃COONa, Na₂CO₃</td></tr>
            <tr><td>Ácido fraco + base fraca</td><td>Depende de Ka e Kb</td><td>Ambos</td><td>CH₃COONH₄ (Ka=Kb → pH=7)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Sal neutro"
          statement={<p>O sal NaCl, proveniente de ácido forte (HCl) e base forte (NaOH), forma solução de caráter:</p>}
          options={[
            { letter: "a", text: "Neutro (não sofre hidrólise)", correct: true },
            { letter: "b", text: "Ácido" },
            { letter: "c", text: "Básico" },
            { letter: "d", text: "Anfótero" },
          ]}
          resolution={<p>Sal de ácido forte + base forte não hidrolisa: seus íons não reagem com a água, mantendo a solução neutra (pH ≈ 7).</p>}
        />

        <Exercise
          level="Básico"
          title="2. Composição de um tampão"
          statement={<p>Uma solução tampão é tipicamente formada por:</p>}
          options={[
            { letter: "a", text: "Um ácido fraco e seu sal (ou base fraca e seu sal)", correct: true },
            { letter: "b", text: "Um ácido forte e uma base forte" },
            { letter: "c", text: "Apenas água destilada" },
            { letter: "d", text: "Dois ácidos fortes" },
          ]}
          resolution={<p>O tampão combina um ácido fraco com sua base conjugada (seu sal), o que lhe permite neutralizar tanto H⁺ quanto OH⁻ adicionados.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Caráter de sal por hidrólise"
          statement={<p>O cloreto de amônio (NH₄Cl), de ácido forte (HCl) e base fraca (NH₄OH), forma solução:</p>}
          options={[
            { letter: "a", text: "Ácida", correct: true },
            { letter: "b", text: "Básica" },
            { letter: "c", text: "Neutra" },
            { letter: "d", text: "Sem hidrólise" },
          ]}
          resolution={<p>Pela regra "o mais forte manda": o ácido (HCl) é forte e a base (NH₄OH) é fraca → solução ácida. O <M>{"\\text{NH}_4^{+}"}</M> hidrolisa liberando H⁺.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Função do tampão"
          statement={<p>A principal característica de uma solução tampão é:</p>}
          options={[
            { letter: "a", text: "Manter o pH praticamente constante ao receber pequenas quantidades de ácido ou base", correct: true },
            { letter: "b", text: "Aumentar continuamente o pH" },
            { letter: "c", text: "Eliminar toda a água" },
            { letter: "d", text: "Tornar a solução sempre ácida" },
          ]}
          resolution={<p>O tampão resiste a variações de pH: seus componentes neutralizam o H⁺ ou OH⁻ adicionados, mantendo o pH quase inalterado.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Reação de tamponamento"
          statement={<p>Em um tampão de ácido acético / acetato, ao adicionar uma pequena quantidade de NaOH, quem neutraliza o OH⁻ é:</p>}
          options={[
            { letter: "a", text: "O ácido acético (CH₃COOH)", correct: true },
            { letter: "b", text: "O íon acetato (CH₃COO⁻)" },
            { letter: "c", text: "A água" },
            { letter: "d", text: "O íon sódio (Na⁺)" },
          ]}
          resolution={<p>O componente ácido reage com a base adicionada: <M>{"\\text{CH}_3\\text{COOH} + \\text{OH}^{-} \\rightarrow \\text{CH}_3\\text{COO}^{-} + \\text{H}_2\\text{O}"}</M>, consumindo o OH⁻ e evitando o aumento do pH.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Tampão sanguíneo"
          statement={<p>O sangue humano mantém o pH em torno de 7,4 graças ao sistema tampão bicarbonato/ácido carbônico. A importância desse tampão é:</p>}
          options={[
            { letter: "a", text: "Neutralizar ácidos e bases produzidos no metabolismo, evitando variações perigosas de pH.", correct: true },
            { letter: "b", text: "Deixar o sangue cada vez mais ácido." },
            { letter: "c", text: "Eliminar o gás carbônico do corpo." },
            { letter: "d", text: "Aumentar a temperatura corporal." },
          ]}
          resolution={<p>O metabolismo gera continuamente ácidos (como o ácido lático). O tampão bicarbonato neutraliza esses ácidos (e eventuais bases), mantendo o pH sanguíneo estável em ~7,4 — variações além de ±0,4 podem ser fatais.</p>}
        />
      </section>
    </article>
  );
}
