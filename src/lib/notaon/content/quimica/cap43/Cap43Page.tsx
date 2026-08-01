"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 43</span>
          <h1>Reações Orgânicas: Substituição, Adição, Eliminação e Oxidação</h1>
          <p>
            Conheça os principais tipos de reações orgânicas — substituição, adição, eliminação e oxidação —
            e quando cada uma ocorre, com destaque para a regra de Markovnikov e os tipos de oxidação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>
        <h2>1. Classificação das Reações Orgânicas</h2>
        <p>
          As reações orgânicas envolvem a quebra e formação de ligações na cadeia carbônica. Os quatro
          grandes tipos são <strong>substituição, adição, eliminação e oxidação</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>2. Reações de Substituição</h2>
        <p>
          Um átomo ou grupo é <strong>trocado</strong> por outro. Típicas de compostos{" "}
          <strong>saturados</strong> (alcanos) e aromáticos.
        </p>
        <div className="lesson-highlight">
          <p>
            Ex.: halogenação do metano:{" "}
            <M>{"\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{luz}} \\text{CH}_3\\text{Cl} + \\text{HCl}"}</M>.
            No benzeno: nitração, sulfonação, halogenação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>3. Reações de Adição</h2>
        <p>
          Típicas de compostos <strong>insaturados</strong> (alcenos, alcinos): a dupla/tripla se rompe e
          novos átomos se <strong>adicionam</strong>. Ex.: hidrogenação, halogenação, hidratação.
        </p>
        <div className="lesson-highlight">
          <h3>Regra de Markovnikov</h3>
          <p>
            Na adição de HX a um alceno assimétrico, o <strong>hidrogênio liga-se ao carbono mais
            hidrogenado</strong> ("rico fica mais rico"). O X vai ao carbono menos hidrogenado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>4. Reações de Eliminação</h2>
        <p>
          O inverso da adição: <strong>retira-se</strong> átomos da molécula, geralmente formando uma{" "}
          <strong>insaturação</strong>. Ex.: desidratação de álcool (forma alceno + água) e
          desidro-halogenação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>5. Reações de Oxidação</h2>
        <p>
          Envolvem a ação de <strong>agentes oxidantes</strong> (como <M>{"\\text{KMnO}_4"}</M>). A combustão
          é a oxidação total (forma <M>{"\\text{CO}_2"}</M> e <M>{"\\text{H}_2\\text{O}"}</M>).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de oxidação</span>
        <h2>6. Oxidação Branda × Enérgica × Ozonólise</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Agente / condição</th><th>Resultado em alcenos</th></tr>
            </thead>
            <tbody>
              <tr><td>Branda</td><td>KMnO₄ diluído a frio</td><td>Forma diol (glicol)</td></tr>
              <tr><td>Enérgica</td><td>KMnO₄ concentrado a quente</td><td>Rompe a dupla → ácidos/cetonas</td></tr>
              <tr><td>Ozonólise</td><td>O₃ seguido de hidrólise</td><td>Quebra a dupla → aldeídos/cetonas</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Resumo das Reações</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔁</span>
            <h3>Substituição</h3>
            <p>Troca de átomo/grupo. Saturados e aromáticos.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Adição</h3>
            <p>Quebra de insaturação. Markovnikov.</p>
          </div>
          <div className="math-card">
            <span>➖</span>
            <h3>Eliminação</h3>
            <p>Forma insaturação (desidratação).</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Oxidação</h3>
            <p>Agente oxidante; combustão = total.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Branda/Enérgica</h3>
            <p>Diol (frio) × ruptura da dupla (quente).</p>
          </div>
          <div className="math-card">
            <span>✂️</span>
            <h3>Ozonólise</h3>
            <p>O₃ quebra a dupla em aldeídos/cetonas.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa de Reações</span>
        <h2>Principais Reações Orgânicas — Resumo Visual</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Mapa dos tipos de reações orgânicas">
          {[
            ["Adição", "A=B + XY\n→ A(X)—B(Y)", "Quebra de dupla\nou tripla ligação", "H₂ + CH₂=CH₂\n→ CH₃—CH₃", 100, "#dbeafe","#1d4ed8"],
            ["Substituição", "R—H + X₂\n→ R—X + HX", "H trocado por\nhaleto ou NO₂", "CH₄ + Cl₂\n→ CH₃Cl + HCl", 300, "#f0fdf4","#15803d"],
            ["Eliminação", "R—CH₂—CH₂X\n→ R—CH=CH₂", "Perde HX ou H₂O\nforma insaturação", "Álcool → alceno\n(desidratação)", 490, "#fef9c3","#854d0e"],
            ["Oxidação", "Álcool → Aldeído\n→ Ácido", "Ganho de O\nou perda de H", "CH₃OH → HCHO\n→ HCOOH", 645, "#fce7f3","#9d174d"]
          ].map(([name, eq, rule, ex, cx, fill, stroke]) => (
            <g key={cx as number}>
              <rect x={(cx as number)-88} y="10" width="172" height="190" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill={stroke as string}>{name as string}</text>
              {(eq as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={54+i*16} textAnchor="middle" fontSize="11" fill={stroke as string}>{l}</text>
              ))}
              {(rule as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={96+i*16} textAnchor="middle" fontSize="11" fill={stroke as string}>{l}</text>
              ))}
              {(ex as string).split("\n").map((l,i) => (
                <text key={i} x={cx as number} y={136+i*16} textAnchor="middle" fontSize="11" fill="#64748b">{l}</text>
              ))}
            </g>
          ))}
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Reações de polimerização e condensação">
          <rect x="30" y="10" width="300" height="165" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="180" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Polimerização por Adição</text>
          <text x="180" y="58" textAnchor="middle" fontSize="12" fill="#1d4ed8">n CH₂=CH₂ → —(CH₂—CH₂)ₙ—</text>
          <text x="180" y="80" textAnchor="middle" fontSize="11" fill="#1d4ed8">Monômero (alceno) → polímero</text>
          <text x="180" y="102" textAnchor="middle" fontSize="11" fill="#1d4ed8">Sem subproduto liberado</text>
          <text x="180" y="124" textAnchor="middle" fontSize="11" fill="#64748b">Exemplos: polietileno (PE)</text>
          <text x="180" y="142" textAnchor="middle" fontSize="11" fill="#64748b">polipropileno (PP), PVC</text>

          <rect x="370" y="10" width="300" height="165" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="520" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Polimerização por Condensação</text>
          <text x="520" y="58" textAnchor="middle" fontSize="12" fill="#166534">Ácido + Álcool → Éster + H₂O</text>
          <text x="520" y="80" textAnchor="middle" fontSize="11" fill="#166534">Monômeros bifuncionais</text>
          <text x="520" y="102" textAnchor="middle" fontSize="11" fill="#166534">Subproduto liberado (H₂O ou HCl)</text>
          <text x="520" y="124" textAnchor="middle" fontSize="11" fill="#64748b">Exemplos: nylon (poliamida)</text>
          <text x="520" y="142" textAnchor="middle" fontSize="11" fill="#64748b">poliéster (PET), baquelite</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Tipo de reação</th><th>Reagentes típicos</th><th>Produto principal</th><th>Mecanismo</th><th>Exemplo ENEM</th></tr>
          </thead>
          <tbody>
            <tr><td>Adição eletrofílica</td><td>Alceno + HX</td><td>Haloalcano</td><td>Regra de Markovnikov</td><td>Propeno + HBr → 2-bromopropano</td></tr>
            <tr><td>Substituição radicalar</td><td>Alcano + Cl₂ (hν)</td><td>Haloalcano + HCl</td><td>Radical livre</td><td>Metano clorado → clorofórmio</td></tr>
            <tr><td>Eliminação (E2)</td><td>Haloalcano + base forte</td><td>Alceno + HX</td><td>Zaitsev (mais substituído)</td><td>2-bromobutano → but-2-eno</td></tr>
            <tr><td>Oxidação de álcool</td><td>Álcool + oxidante</td><td>Aldeído/cetona/ácido</td><td>Grau do álcool define produto</td><td>Etanol → etanal → ácido etanoico</td></tr>
            <tr><td>Esterificação</td><td>Ácido + álcool (H⁺)</td><td>Éster + H₂O</td><td>Condensação reversível</td><td>Aspirina (ácido acetilsalicílico)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Reação típica de alcanos"
          statement={<p>Por serem saturados e pouco reativos, os alcanos sofrem principalmente reações de:</p>}
          options={[
            { letter: "a", text: "Substituição", correct: true },
            { letter: "b", text: "Adição" },
            { letter: "c", text: "Eliminação" },
            { letter: "d", text: "Polimerização por adição" },
          ]}
          resolution={<p>Sem insaturações para "abrir", os alcanos reagem por substituição (ex.: halogenação sob luz), trocando um H por outro átomo.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Reação típica de alcenos"
          statement={<p>Os alcenos, por possuírem ligação dupla, sofrem facilmente reações de:</p>}
          options={[
            { letter: "a", text: "Adição", correct: true },
            { letter: "b", text: "Substituição" },
            { letter: "c", text: "Eliminação" },
            { letter: "d", text: "Nenhuma" },
          ]}
          resolution={<p>A dupla ligação é reativa: ela se rompe e novos átomos se adicionam (hidrogenação, halogenação, hidratação) → reação de adição.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Regra de Markovnikov"
          statement={<p>Na adição de HCl a um alceno assimétrico, segundo Markovnikov, o hidrogênio liga-se ao carbono:</p>}
          options={[
            { letter: "a", text: "Mais hidrogenado (que já tem mais H)", correct: true },
            { letter: "b", text: "Menos hidrogenado" },
            { letter: "c", text: "Quaternário" },
            { letter: "d", text: "Do anel aromático" },
          ]}
          resolution={<p>Regra de Markovnikov: "o rico fica mais rico" — o H vai ao carbono que já tem mais hidrogênios, e o halogênio (Cl) ao carbono menos hidrogenado.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Desidratação de álcool"
          statement={<p>A desidratação intramolecular de um álcool, formando um alceno e liberando água, é uma reação de:</p>}
          options={[
            { letter: "a", text: "Eliminação", correct: true },
            { letter: "b", text: "Adição" },
            { letter: "c", text: "Substituição" },
            { letter: "d", text: "Combustão" },
          ]}
          resolution={<p>Ao retirar uma molécula de água do álcool, forma-se uma dupla ligação (insaturação) → reação de eliminação (o inverso da adição/hidratação).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Oxidação branda"
          statement={<p>A oxidação branda de um alceno (KMnO₄ diluído a frio) produz:</p>}
          options={[
            { letter: "a", text: "Um diol (álcool com dois grupos –OH)", correct: true },
            { letter: "b", text: "Apenas CO₂ e água" },
            { letter: "c", text: "Um alcano" },
            { letter: "d", text: "Um éter" },
          ]}
          resolution={<p>Na oxidação branda, a dupla não é rompida; adicionam-se dois grupos –OH aos carbonos da dupla, formando um diol (glicol). Na oxidação enérgica, a dupla é rompida.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Margarina a partir de óleos"
          statement={<p>A margarina é produzida pela hidrogenação de óleos vegetais (ricos em ligações duplas), tornando-os sólidos. Essa transformação é uma reação de:</p>}
          options={[
            { letter: "a", text: "Adição de hidrogênio às duplas ligações (hidrogenação).", correct: true },
            { letter: "b", text: "Substituição." },
            { letter: "c", text: "Eliminação." },
            { letter: "d", text: "Combustão." },
          ]}
          resolution={<p>A hidrogenação adiciona H₂ às duplas ligações dos óleos insaturados, transformando-os em gorduras mais saturadas e sólidas (margarina). É uma reação de adição. (O processo pode gerar gorduras trans, indesejáveis à saúde.)</p>}
        />
      </section>
    </article>
  );
}
