"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 14</span>
          <h1>Funções Inorgânicas I: Ácidos e Bases</h1>
          <p>
            Conheça as três grandes teorias ácido-base (Arrhenius, Brønsted-Lowry e Lewis), aprenda a
            classificar e nomear ácidos e bases e entenda o papel dos indicadores no dia a dia e nos
            vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>1. O que são Funções Inorgânicas?</h2>
        <p>
          São grupos de compostos com propriedades químicas semelhantes. As quatro principais são{" "}
          <strong>ácidos, bases, sais e óxidos</strong>. Neste capítulo estudamos ácidos e bases — os dois
          "opostos" que se neutralizam mutuamente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teoria 1</span>
        <h2>2. Teoria de Arrhenius (1887)</h2>
        <p>É a teoria clássica, válida em meio aquoso:</p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍋</span>
            <h3>Ácido</h3>
            <p>Libera <M>{"\\text{H}^{+}"}</M> (próton) em água. Ex.: <M>{"\\text{HCl} \\rightarrow \\text{H}^{+} + \\text{Cl}^{-}"}</M>.</p>
          </div>
          <div className="lesson-card">
            <span>🧼</span>
            <h3>Base (álcali)</h3>
            <p>Libera <M>{"\\text{OH}^{-}"}</M> (hidroxila) em água. Ex.: <M>{"\\text{NaOH} \\rightarrow \\text{Na}^{+} + \\text{OH}^{-}"}</M>.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Neutralização</h3>
          <p><M>{"\\text{ácido} + \\text{base} \\rightarrow \\text{sal} + \\text{água}"}</M></p>
          <p>Ex.: <M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teoria 2</span>
        <h2>3. Teoria de Brønsted-Lowry (1923)</h2>
        <p>
          Mais ampla, não exige água. Define: <strong>ácido</strong> = doador de prótons (<M>{"\\text{H}^{+}"}</M>);{" "}
          <strong>base</strong> = receptor de prótons. Surge o conceito de <strong>pares conjugados</strong>.
        </p>
        <div className="lesson-highlight">
          <p>
            Em <M>{"\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^{+} + \\text{OH}^{-}"}</M>:
            a água doa próton (ácido) e a amônia recebe (base). Aqui a água age como ácido — por isso ela é{" "}
            <strong>anfótera</strong> (pode agir como ácido ou base).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teoria 3</span>
        <h2>4. Teoria de Lewis (1923)</h2>
        <p>
          A mais abrangente, baseada em elétrons: <strong>ácido</strong> = receptor de par de elétrons;{" "}
          <strong>base</strong> = doador de par de elétrons. Explica reações sem hidrogênio, como{" "}
          <M>{"\\text{BF}_3"}</M> (ácido de Lewis) reagindo com <M>{"\\text{NH}_3"}</M> (base de Lewis).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ácidos</span>
        <h2>5. Classificação e Nomenclatura dos Ácidos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Tipos</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Presença de oxigênio</td><td>Hidrácidos (sem O) / Oxiácidos (com O)</td><td>HCl / H₂SO₄</td></tr>
              <tr><td>Nº de H ionizáveis</td><td>Mono, di, triácidos</td><td>HCl, H₂SO₄, H₃PO₄</td></tr>
              <tr><td>Força (hidrácidos)</td><td>Fortes: HCl, HBr, HI</td><td>HF é moderado; demais fracos</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Nomenclatura</h3>
          <p>
            <strong>Hidrácidos:</strong> ácido + nome + <em>ídrico</em> → <M>{"\\text{HCl}"}</M> = ácido clorídrico.
          </p>
          <p>
            <strong>Oxiácidos</strong> (do elemento padrão): sufixo <em>ico</em> → <M>{"\\text{H}_2\\text{SO}_4"}</M> =
            ácido sulfúrico; <M>{"\\text{HNO}_3"}</M> = ácido nítrico. Com menos oxigênio, sufixo <em>oso</em>{" "}
            (<M>{"\\text{H}_2\\text{SO}_3"}</M> = ácido sulfuroso).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bases</span>
        <h2>6. Classificação e Nomenclatura das Bases</h2>
        <p>
          Bases são, em geral, formadas por um metal + <M>{"\\text{OH}^{-}"}</M>. A nomenclatura é:
          <strong> hidróxido de</strong> + nome do cátion.
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><M>{"\\text{NaOH}"}</M> = hidróxido de sódio (soda cáustica);</li>
            <li><M>{"\\text{Ca(OH)}_2"}</M> = hidróxido de cálcio (cal hidratada);</li>
            <li><M>{"\\text{Mg(OH)}_2"}</M> = hidróxido de magnésio (leite de magnésia).</li>
          </ul>
          <p>
            <strong>Força:</strong> bases de metais alcalinos (1A) e alcalino-terrosos (2A) são fortes; as
            demais, fracas. <M>{"\\text{NH}_4\\text{OH}"}</M> (amônia em água) é uma base fraca.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cotidiano</span>
        <h2>7. Indicadores e Aplicações</h2>
        <p>
          <strong>Indicadores ácido-base</strong> mudam de cor conforme o meio:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Indicador</th><th>Meio ácido</th><th>Meio básico</th></tr>
            </thead>
            <tbody>
              <tr><td>Fenolftaleína</td><td>Incolor</td><td>Rosa/vermelho</td></tr>
              <tr><td>Tornassol</td><td>Vermelho</td><td>Azul</td></tr>
              <tr><td>Repolho roxo</td><td>Avermelhado</td><td>Esverdeado/amarelo</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Exemplos do dia a dia: vinagre (ácido acético), suco gástrico (HCl), limão (ácido cítrico),
            sabão e produtos de limpeza (bases), antiácidos (neutralizam o HCl do estômago).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🍋</span>
            <h3>Arrhenius</h3>
            <p>Ácido libera H⁺; base libera OH⁻ (em água).</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Brønsted-Lowry</h3>
            <p>Ácido doa próton; base recebe. Pares conjugados.</p>
          </div>
          <div className="math-card">
            <span>⚛️</span>
            <h3>Lewis</h3>
            <p>Ácido recebe par de e⁻; base doa par de e⁻.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Nomenclatura</h3>
            <p>Hidrácido: ídrico. Oxiácido: ico/oso. Base: hidróxido de.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Neutralização</h3>
            <p>Ácido + base → sal + água.</p>
          </div>
          <div className="math-card">
            <span>🎨</span>
            <h3>Indicadores</h3>
            <p>Fenolftaleína: incolor (ácido) / rosa (base).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Ácido-Base</span>
        <h2>Síntese Visual: Teorias e Classificação</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Teorias ácido-base: Arrhenius, Brønsted-Lowry e Lewis">
          <rect x="40" y="20" width="185" height="165" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Arrhenius</text>
          <text x="132" y="65" textAnchor="middle" fontSize="11" fill="#1d4ed8">Ácido: libera H⁺ em</text>
          <text x="132" y="82" textAnchor="middle" fontSize="11" fill="#1d4ed8">solução aquosa</text>
          <text x="132" y="99" textAnchor="middle" fontSize="11" fill="#1d4ed8">Base: libera OH⁻</text>
          <text x="132" y="125" textAnchor="middle" fontSize="11" fill="#1d4ed8">HCl → H⁺ + Cl⁻</text>
          <text x="132" y="143" textAnchor="middle" fontSize="11" fill="#1d4ed8">NaOH→Na⁺+OH⁻</text>
          <text x="132" y="168" textAnchor="middle" fontSize="11" fill="#1e40af">Limitação: só em água</text>

          <rect x="257" y="20" width="185" height="165" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="349" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Brønsted-Lowry</text>
          <text x="349" y="65" textAnchor="middle" fontSize="11" fill="#166534">Ácido: doa H⁺</text>
          <text x="349" y="82" textAnchor="middle" fontSize="11" fill="#166534">(próton)</text>
          <text x="349" y="99" textAnchor="middle" fontSize="11" fill="#166534">Base: aceita H⁺</text>
          <text x="349" y="125" textAnchor="middle" fontSize="11" fill="#166534">NH₄⁺ ⇌ NH₃ + H⁺</text>
          <text x="349" y="143" textAnchor="middle" fontSize="11" fill="#166534">par conjugado</text>
          <text x="349" y="168" textAnchor="middle" fontSize="11" fill="#14532d">Amplia além da água</text>

          <rect x="474" y="20" width="185" height="165" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="566" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713f12">Lewis</text>
          <text x="566" y="65" textAnchor="middle" fontSize="11" fill="#713f12">Ácido: aceita par</text>
          <text x="566" y="82" textAnchor="middle" fontSize="11" fill="#713f12">de e⁻ (eletrófilo)</text>
          <text x="566" y="99" textAnchor="middle" fontSize="11" fill="#713f12">Base: doa par de</text>
          <text x="566" y="116" textAnchor="middle" fontSize="11" fill="#713f12">e⁻ (nucleófilo)</text>
          <text x="566" y="137" textAnchor="middle" fontSize="11" fill="#713f12">BF₃ + NH₃ → coord.</text>
          <text x="566" y="168" textAnchor="middle" fontSize="11" fill="#92400e">Mais abrangente</text>

          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#0f172a">Arrhenius ⊂ Brønsted-Lowry ⊂ Lewis (mais geral)</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Força de ácidos e bases: forte vs fraco">
          {/* ácidos fortes */}
          <rect x="40" y="20" width="285" height="145" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="182" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Ácidos Fortes (α ≈ 100%)</text>
          <text x="182" y="68" textAnchor="middle" fontSize="12" fill="#9d174d">Ionização completa em água</text>
          <text x="182" y="88" textAnchor="middle" fontSize="12" fill="#9d174d">HCl, HBr, HI</text>
          <text x="182" y="108" textAnchor="middle" fontSize="12" fill="#9d174d">HNO₃, H₂SO₄, HClO₄</text>
          <text x="182" y="130" textAnchor="middle" fontSize="12" fill="#9d174d">HClO₃</text>
          <text x="182" y="150" textAnchor="middle" fontSize="11" fill="#be185d">pH muito baixo (pH {"<"} 3 tipicamente)</text>

          {/* bases fortes */}
          <rect x="375" y="20" width="285" height="145" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="517" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Bases Fortes (ioniz. total)</text>
          <text x="517" y="68" textAnchor="middle" fontSize="12" fill="#1d4ed8">Dissociação completa</text>
          <text x="517" y="88" textAnchor="middle" fontSize="12" fill="#1d4ed8">NaOH, KOH, LiOH</text>
          <text x="517" y="108" textAnchor="middle" fontSize="12" fill="#1d4ed8">Ca(OH)₂, Ba(OH)₂</text>
          <text x="517" y="128" textAnchor="middle" fontSize="12" fill="#1d4ed8">Sr(OH)₂</text>
          <text x="517" y="150" textAnchor="middle" fontSize="11" fill="#1e40af">pH muito alto (pH {">"} 11 tipicamente)</text>

          <text x="350" y="182" textAnchor="middle" fontSize="13" fill="#0f172a">Força: grau de ionização α | Ácido forte: α {">"} 50% | Fraco: α {"<"} 5%</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Definição de Arrhenius"
          statement={<p>Segundo Arrhenius, uma substância que, em água, libera como único cátion o <M>{"\\text{H}^{+}"}</M> é classificada como:</p>}
          options={[
            { letter: "a", text: "Ácido", correct: true },
            { letter: "b", text: "Base" },
            { letter: "c", text: "Sal" },
            { letter: "d", text: "Óxido" },
          ]}
          resolution={<p>Para Arrhenius, ácido libera <M>{"\\text{H}^{+}"}</M> em água. Base libera <M>{"\\text{OH}^{-}"}</M>.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Nomenclatura de base"
          statement={<p>O nome do composto <M>{"\\text{Ca(OH)}_2"}</M> é:</p>}
          options={[
            { letter: "a", text: "Hidróxido de cálcio", correct: true },
            { letter: "b", text: "Óxido de cálcio" },
            { letter: "c", text: "Ácido cálcico" },
            { letter: "d", text: "Cloreto de cálcio" },
          ]}
          resolution={<p>Bases são nomeadas como "hidróxido de" + cátion. <M>{"\\text{Ca(OH)}_2"}</M> = hidróxido de cálcio, a cal hidratada usada na construção civil.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Reação de neutralização"
          statement={<p>Na reação <M>{"\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow X + 2\\,\\text{H}_2\\text{O}"}</M>, o produto X é:</p>}
          options={[
            { letter: "a", text: "Na₂SO₄ (sulfato de sódio)", correct: true },
            { letter: "b", text: "NaSO₄" },
            { letter: "c", text: "Na₂SO₃" },
            { letter: "d", text: "NaHSO₄" },
          ]}
          resolution={<p>Ácido + base → sal + água. O cátion <M>{"\\text{Na}^{+}"}</M> combina com o ânion <M>{"\\text{SO}_4^{2-}"}</M>, formando <M>{"\\text{Na}_2\\text{SO}_4"}</M> (cargas cruzadas). A água completa o balanço.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Caráter anfótero da água"
          statement={<p>Na reação <M>{"\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^{+} + \\text{OH}^{-}"}</M>, segundo Brønsted-Lowry, a água atua como:</p>}
          options={[
            { letter: "a", text: "Ácido, pois doa um próton à amônia", correct: true },
            { letter: "b", text: "Base, pois recebe um próton" },
            { letter: "c", text: "Sal" },
            { letter: "d", text: "Indicador" },
          ]}
          resolution={<p>A água doa <M>{"\\text{H}^{+}"}</M> para a amônia, agindo como ácido de Brønsted-Lowry. A amônia recebe o próton (base). Como a água pode atuar dos dois modos, ela é anfótera.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Nomenclatura de oxiácidos"
          statement={<p>Os ácidos <M>{"\\text{HNO}_3"}</M> e <M>{"\\text{HNO}_2"}</M> são chamados, respectivamente:</p>}
          options={[
            { letter: "a", text: "Ácido nítrico e ácido nitroso", correct: true },
            { letter: "b", text: "Ácido nitroso e ácido nítrico" },
            { letter: "c", text: "Ácido nítrico e ácido hiponitroso" },
            { letter: "d", text: "Ácido nitrídrico e ácido nítrico" },
          ]}
          resolution={<p>No oxiácido padrão usa-se o sufixo <em>ico</em> (<M>{"\\text{HNO}_3"}</M> = nítrico). Com um oxigênio a menos, usa-se <em>oso</em> (<M>{"\\text{HNO}_2"}</M> = nitroso).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Antiácidos estomacais"
          statement={<p>O suco gástrico contém ácido clorídrico (HCl). Em casos de azia, usam-se antiácidos como o hidróxido de magnésio, <M>{"\\text{Mg(OH)}_2"}</M> (leite de magnésia). A ação do antiácido consiste em:</p>}
          options={[
            { letter: "a", text: "Neutralizar o excesso de HCl, formando sal e água e reduzindo a acidez.", correct: true },
            { letter: "b", text: "Aumentar a concentração de H⁺ no estômago." },
            { letter: "c", text: "Transformar o HCl em outro ácido mais forte." },
            { letter: "d", text: "Dissolver o revestimento do estômago." },
          ]}
          resolution={<p>O hidróxido de magnésio é uma base que reage com o HCl: <M>{"\\text{Mg(OH)}_2 + 2\\,\\text{HCl} \\rightarrow \\text{MgCl}_2 + 2\\,\\text{H}_2\\text{O}"}</M>. Essa neutralização reduz a acidez, aliviando a azia.</p>}
        />
      </section>
    </article>
  );
}
