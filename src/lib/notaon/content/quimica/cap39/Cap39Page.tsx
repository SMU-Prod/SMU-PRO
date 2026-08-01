"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 39</span>
          <h1>Funções Orgânicas III: Nitrogenadas e Haletos</h1>
          <p>
            Conheça as funções que contêm nitrogênio — aminas, amidas, nitrocompostos e nitrilas — e os
            haletos orgânicos, identificando seus grupos funcionais e suas aplicações industriais e
            biológicas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>1. Funções Nitrogenadas e Haletos</h2>
        <p>
          As funções nitrogenadas têm <strong>nitrogênio</strong> no grupo funcional; os haletos têm um{" "}
          <strong>halogênio</strong> (F, Cl, Br, I). São essenciais em medicamentos, corantes, explosivos e
          plásticos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aminas</span>
        <h2>2. Aminas</h2>
        <p>
          Derivam da amônia (<M>{"\\text{NH}_3"}</M>) pela troca de hidrogênios por grupos carbônicos. Têm
          caráter <strong>básico</strong>. Sufixo <strong>‑amina</strong>. Ex.: metilamina; a putrescina e
          cadaverina (odor de decomposição). Muitos medicamentos e neurotransmissores são aminas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Amidas</span>
        <h2>3. Amidas</h2>
        <p>
          Possuem o grupo <strong>carbonila ligada a nitrogênio</strong>{" "}
          (<M>{"\\text{C}(=\\text{O})-\\text{N}"}</M>). Sufixo <strong>‑amida</strong>. Ex.: a ureia
          (<M>{"\\text{CO(NH}_2)_2"}</M>); a ligação peptídica das proteínas é uma amida.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Outros nitrogenados</span>
        <h2>4. Nitrocompostos e Nitrilas</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💥</span>
            <h3>Nitrocomposto</h3>
            <p>Grupo <M>{"-\\text{NO}_2"}</M>. Ex.: TNT (trinitrotolueno), nitroglicerina (explosivos).</p>
          </div>
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Nitrila</h3>
            <p>Grupo <M>{"-\\text{C}\\equiv\\text{N}"}</M> (ciano). Ex.: acrilonitrila (fibras).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Haletos</span>
        <h2>5. Haletos Orgânicos</h2>
        <p>
          Têm um ou mais <strong>halogênios</strong> ligados à cadeia carbônica. Ex.: clorofórmio
          (<M>{"\\text{CHCl}_3"}</M>), CFCs (clorofluorcarbonos, antigos gases de geladeira que destroem a
          camada de ozônio), e o PVC (policloreto de vinila).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identificação</span>
        <h2>6. Como Identificar a Função?</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grupo característico</th><th>Função</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"-\\text{NH}_2"}</M> (N sem carbonila)</td><td>Amina</td></tr>
              <tr><td><M>{"-\\text{C}(=\\text{O})-\\text{N}"}</M></td><td>Amida</td></tr>
              <tr><td><M>{"-\\text{NO}_2"}</M></td><td>Nitrocomposto</td></tr>
              <tr><td><M>{"-\\text{C}\\equiv\\text{N}"}</M></td><td>Nitrila</td></tr>
              <tr><td><M>{"-\\text{X}"}</M> (F, Cl, Br, I)</td><td>Haleto orgânico</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Importância Industrial e Biológica</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💊</span>
            <h3>Medicamentos</h3>
            <p>Aminas e amidas em fármacos (anestésicos, analgésicos).</p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Proteínas</h3>
            <p>Ligações peptídicas (amidas) unem aminoácidos.</p>
          </div>
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Materiais</h3>
            <p>PVC, nylon e fibras sintéticas usam haletos e nitrogenados.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧴</span>
            <h3>Amina</h3>
            <p>Deriva da amônia; básica; ‑amina.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Amida</h3>
            <p>Carbonila + N; ‑amida; ligação peptídica.</p>
          </div>
          <div className="math-card">
            <span>💥</span>
            <h3>Nitrocomposto</h3>
            <p>Grupo –NO₂; explosivos.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Nitrila</h3>
            <p>Grupo –C≡N (ciano).</p>
          </div>
          <div className="math-card">
            <span>🧂</span>
            <h3>Haleto</h3>
            <p>Halogênio na cadeia (CFC, PVC).</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Identificar</h3>
            <p>Pelo grupo funcional característico.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grupos Funcionais Nitrogenados</span>
        <h2>Aminas, Amidas, Nitrilas e Haletos de Alquila</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Funções nitrogenadas: amina, amida, nitrila e nitrocomposto">
          {[
            ["Amina", "R—NH₂", "N com H livres", "Primária: 1R\nSecundária: 2R\nTerciária: 3R", 90, "#dbeafe","#1d4ed8"],
            ["Amida", "R—CO—NH₂", "C=O + N", "Ligação peptídica\nna proteína", 270, "#f0fdf4","#15803d"],
            ["Nitrila", "R—C≡N", "Tripla C≡N", "Solventes\ne fármacos", 450, "#fef9c3","#854d0e"],
            ["Nitro", "R—NO₂", "—NO₂ ligado\nao carbono", "TNT, explosivos\ncorantes", 620, "#fce7f3","#db2777"]
          ].map(([name, formula, desc1, desc2, cx, fill, stroke]) => (
            <g key={cx as number}>
              <rect x={(cx as number)-80} y="15" width="155" height="165" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill={stroke as string}>{name as string}</text>
              <text x={cx as number} y="62" textAnchor="middle" fontSize="13" fill={stroke as string}>{formula as string}</text>
              <text x={cx as number} y="86" textAnchor="middle" fontSize="11" fill={stroke as string}>{desc1 as string}</text>
              {(desc2 as string).split("\n").map((l, i) => (
                <text key={i} x={cx as number} y={115+i*18} textAnchor="middle" fontSize="11" fill={stroke as string}>{l}</text>
              ))}
            </g>
          ))}
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Haletos de alquila e suas propriedades">
          <rect x="30" y="10" width="640" height="50" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <text x="350" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Haletos de Alquila — R—X (X = F, Cl, Br, I)</text>
          <text x="350" y="52" textAnchor="middle" fontSize="12" fill="#475569">Halogênio substitui H do hidrocarboneto — reação de halogenação</text>

          {[
            ["Fluoreto\nR—F", "Mais eletronegativo\nLigação mais forte", "Teflon®\nFluorocarb.", 115, "#dbeafe","#1d4ed8"],
            ["Cloreto\nR—Cl", "Mais comum\nna indústria", "PVC, clorofórmio\nDDT (banido)", 295, "#f0fdf4","#15803d"],
            ["Brometo\nR—Br", "Reativo em\nSN2 e E2", "Sedativos\nfotografia", 480, "#fef9c3","#854d0e"],
            ["Iodeto\nR—I", "Melhor grupo\nsainte (SN2)", "Assepsia\ncontraste", 635, "#fce7f3","#db2777"]
          ].map(([name, prop, use, cx, fill, stroke]) => (
            <g key={cx as number}>
              <rect x={(cx as number)-85} y="75" width="160" height="95" rx="5" fill={fill as string} stroke={stroke as string} strokeWidth="1.5" />
              {(name as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={96+i*16} textAnchor="middle" fontSize="13" fontWeight="bold" fill={stroke as string}>{l}</text>
              ))}
              {(prop as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={132+i*14} textAnchor="middle" fontSize="11" fill={stroke as string}>{l}</text>
              ))}
              {(use as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={156+i*14} textAnchor="middle" fontSize="10" fill="#64748b">{l}</text>
              ))}
            </g>
          ))}
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Função</th><th>Grupo funcional</th><th>Sufixo IUPAC</th><th>Exemplo</th><th>Aplicação</th></tr>
          </thead>
          <tbody>
            <tr><td>Amina primária</td><td>—NH₂</td><td>-amina</td><td>Metilamina (CH₃NH₂)</td><td>Síntese de fármacos</td></tr>
            <tr><td>Amida</td><td>—CO—NH₂</td><td>-amida</td><td>Acetamida</td><td>Ligação peptídica em proteínas</td></tr>
            <tr><td>Nitrila</td><td>—C≡N</td><td>-nitrila</td><td>Acetonitrila</td><td>Solvente industrial</td></tr>
            <tr><td>Nitrocomposto</td><td>—NO₂</td><td>nitro-</td><td>Nitrobenzeno</td><td>Corantes e explosivos</td></tr>
            <tr><td>Haleto de alquila</td><td>—X (F,Cl,Br,I)</td><td>fluoro/cloro/bromo/iodo-</td><td>Cloroetano</td><td>PVC, refrigerantes</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Função da amina"
          statement={<p>As aminas derivam de qual substância e têm qual caráter?</p>}
          options={[
            { letter: "a", text: "Da amônia (NH₃); caráter básico", correct: true },
            { letter: "b", text: "Da água; caráter ácido" },
            { letter: "c", text: "Do metano; caráter neutro" },
            { letter: "d", text: "Do benzeno; caráter aromático" },
          ]}
          resolution={<p>As aminas resultam da substituição de H da amônia (<M>{"\\text{NH}_3"}</M>) por grupos carbônicos, mantendo o caráter básico do nitrogênio.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Grupo do haleto"
          statement={<p>Um haleto orgânico é caracterizado pela presença de:</p>}
          options={[
            { letter: "a", text: "Um halogênio (F, Cl, Br ou I) ligado à cadeia", correct: true },
            { letter: "b", text: "Um grupo –OH" },
            { letter: "c", text: "Um grupo –NH₂" },
            { letter: "d", text: "Um anel aromático" },
          ]}
          resolution={<p>Haletos orgânicos têm halogênio(s) ligado(s) ao carbono. Ex.: clorofórmio (<M>{"\\text{CHCl}_3"}</M>) e CFCs.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. A ureia"
          statement={<p>A ureia <M>{"\\text{CO(NH}_2)_2"}</M>, presente na urina e usada como fertilizante, pertence à função:</p>}
          options={[
            { letter: "a", text: "Amida (carbonila ligada a nitrogênio)", correct: true },
            { letter: "b", text: "Amina" },
            { letter: "c", text: "Nitrila" },
            { letter: "d", text: "Éter" },
          ]}
          resolution={<p>A ureia tem o grupo carbonila (C=O) ligado a nitrogênio → amida. Foi o primeiro composto orgânico sintetizado (Wöhler).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Explosivos"
          statement={<p>O TNT (trinitrotolueno) e a nitroglicerina, usados como explosivos, contêm o grupo <M>{"-\\text{NO}_2"}</M>, sendo classificados como:</p>}
          options={[
            { letter: "a", text: "Nitrocompostos", correct: true },
            { letter: "b", text: "Nitrilas" },
            { letter: "c", text: "Aminas" },
            { letter: "d", text: "Amidas" },
          ]}
          resolution={<p>Compostos com o grupo nitro (<M>{"-\\text{NO}_2"}</M>) são nitrocompostos. A liberação rápida de gases na sua decomposição explica o poder explosivo.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Amina x amida"
          statement={<p>A diferença essencial entre uma amina e uma amida está em que a amida possui:</p>}
          options={[
            { letter: "a", text: "Uma carbonila (C=O) ligada ao nitrogênio", correct: true },
            { letter: "b", text: "Um halogênio" },
            { letter: "c", text: "Um anel aromático obrigatório" },
            { letter: "d", text: "Apenas ligações simples C–C" },
          ]}
          resolution={<p>Na amina, o nitrogênio liga-se apenas a carbonos/hidrogênios. Na amida, o nitrogênio está ligado a uma carbonila (C=O), o que muda suas propriedades (a amida não é básica como a amina).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Ligação peptídica"
          statement={<p>As proteínas são formadas pela união de aminoácidos por meio de ligações peptídicas, que resultam da reação entre o grupo –COOH de um aminoácido e o grupo –NH₂ de outro. Essa ligação corresponde à função orgânica:</p>}
          options={[
            { letter: "a", text: "Amida, pois forma o grupo carbonila ligado ao nitrogênio.", correct: true },
            { letter: "b", text: "Éster." },
            { letter: "c", text: "Éter." },
            { letter: "d", text: "Amina." },
          ]}
          resolution={<p>A ligação peptídica une o carbono do –COOH ao nitrogênio do –NH₂, formando o grupo amida (–CO–NH–). É a base da estrutura das proteínas.</p>}
        />
      </section>
    </article>
  );
}
