"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 15</span>
          <h1>Funções Inorgânicas II: Sais, Óxidos e Chuva Ácida</h1>
          <p>
            Aprenda a nomear e classificar sais e óxidos, a prever a solubilidade dos sais em água e a
            entender quimicamente a formação e os impactos da chuva ácida — um dos temas ambientais mais
            cobrados no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sais</span>
        <h2>1. O que são Sais?</h2>
        <p>
          Sais são compostos iônicos formados na <strong>neutralização</strong> entre um ácido e uma base.
          Possuem um cátion (diferente de <M>{"\\text{H}^{+}"}</M>) e um ânion (diferente de{" "}
          <M>{"\\text{OH}^{-}"}</M>).
        </p>
        <div className="lesson-highlight">
          <p><M>{"\\text{ácido} + \\text{base} \\rightarrow \\text{sal} + \\text{água}"}</M></p>
          <p>Ex.: <M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nomenclatura</span>
        <h2>2. Nomenclatura: do Ácido ao Sal</h2>
        <p>O nome do ânion do sal deriva do ácido de origem, trocando o sufixo:</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sufixo do ácido</th><th>Sufixo do ânion (sal)</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>‑ídrico</td><td>‑eto</td><td>HCl → cloreto (NaCl)</td></tr>
              <tr><td>‑ico</td><td>‑ato</td><td>H₂SO₄ → sulfato (Na₂SO₄)</td></tr>
              <tr><td>‑oso</td><td>‑ito</td><td>H₂SO₃ → sulfito (Na₂SO₃)</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>Formato: <strong>nome do ânion + "de" + nome do cátion</strong>. Ex.: <M>{"\\text{CaCO}_3"}</M> = carbonato de cálcio.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de sal</span>
        <h2>3. Classificação dos Sais</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧂</span>
            <h3>Sal normal</h3>
            <p>Sem H⁺ nem OH⁻. Ex.: <M>{"\\text{NaCl}"}</M>, <M>{"\\text{KNO}_3"}</M>.</p>
          </div>
          <div className="lesson-card">
            <span>➕</span>
            <h3>Hidrogenossal (ácido)</h3>
            <p>Contém H ionizável. Ex.: <M>{"\\text{NaHCO}_3"}</M> (bicarbonato).</p>
          </div>
          <div className="lesson-card">
            <span>➖</span>
            <h3>Hidroxissal (básico)</h3>
            <p>Contém OH⁻. Ex.: <M>{"\\text{Ca(OH)Cl}"}</M>.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Solubilidade</span>
        <h2>4. Solubilidade dos Sais em Água</h2>
        <div className="lesson-highlight">
          <h3>Regras práticas</h3>
          <ul>
            <li><strong>Solúveis:</strong> sais de metais alcalinos (Na, K) e de amônio (<M>{"\\text{NH}_4^{+}"}</M>); nitratos (<M>{"\\text{NO}_3^{-}"}</M>); a maioria dos cloretos.</li>
            <li><strong>Insolúveis:</strong> a maioria dos carbonatos (<M>{"\\text{CO}_3^{2-}"}</M>), fosfatos e sulfetos (exceto com alcalinos e amônio).</li>
          </ul>
        </div>
        <p>
          A solubilidade é essencial para prever reações de dupla troca: se um dos produtos é insolúvel,
          forma-se um <strong>precipitado</strong> e a reação ocorre.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Óxidos</span>
        <h2>5. O que são Óxidos?</h2>
        <p>
          Óxidos são compostos binários (dois elementos) em que o <strong>oxigênio é o mais eletronegativo</strong>.
          Fórmula geral <M>{"\\text{E}_x\\text{O}_y"}</M>. São abundantes: <M>{"\\text{CO}_2"}</M>,{" "}
          <M>{"\\text{H}_2\\text{O}"}</M>, <M>{"\\text{Fe}_2\\text{O}_3"}</M> (ferrugem),{" "}
          <M>{"\\text{CaO}"}</M> (cal virgem).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>6. Classificação dos Óxidos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Reage com</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Óxido ácido (anidrido)</td><td>Água → ácido; base → sal</td><td>CO₂, SO₃, NO₂ (ametais)</td></tr>
              <tr><td>Óxido básico</td><td>Água → base; ácido → sal</td><td>Na₂O, CaO (metais)</td></tr>
              <tr><td>Óxido anfótero</td><td>Tanto com ácido quanto com base</td><td>Al₂O₃, ZnO</td></tr>
              <tr><td>Óxido neutro</td><td>Não reage com água/ácido/base</td><td>CO, NO, N₂O</td></tr>
              <tr><td>Peróxido</td><td>Possui ligação O–O</td><td>H₂O₂, Na₂O₂</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Óxidos ácidos vêm de ametais e reagem com água formando ácidos:{" "}
            <M>{"\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3"}</M>. Óxidos
            básicos vêm de metais: <M>{"\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meio ambiente</span>
        <h2>7. Chuva Ácida: Causas e Consequências</h2>
        <p>
          A queima de combustíveis fósseis lança na atmosfera óxidos ácidos de enxofre e nitrogênio
          (<M>{"\\text{SO}_2"}</M>, <M>{"\\text{SO}_3"}</M>, <M>{"\\text{NO}_2"}</M>), que reagem com a água
          das nuvens formando ácidos fortes:
        </p>
        <div className="math-block">
          <h3>Reações de formação</h3>
          <p><M>{"\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4 \\ (\\text{ácido sulfúrico})"}</M></p>
          <p><M>{"3\\,\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\,\\text{HNO}_3 + \\text{NO} \\ (\\text{ácido nítrico})"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Consequências:</strong> acidificação de rios e lagos (morte de peixes), destruição de
            florestas, corrosão de monumentos de mármore (<M>{"\\text{CaCO}_3"}</M>) e estruturas metálicas.
            Mesmo a chuva "normal" é levemente ácida (pH ≈ 5,6) por causa do CO₂.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧂</span>
            <h3>Sais</h3>
            <p>Cátion (≠H⁺) + ânion (≠OH⁻), da neutralização.</p>
          </div>
          <div className="math-card">
            <span>🔤</span>
            <h3>Sufixos</h3>
            <p>ídrico→eto, ico→ato, oso→ito.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Solubilidade</h3>
            <p>Alcalinos, amônio e nitratos: solúveis.</p>
          </div>
          <div className="math-card">
            <span>🌫️</span>
            <h3>Óxidos</h3>
            <p>Ácidos (ametais), básicos (metais), anfóteros, neutros, peróxidos.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Reações</h3>
            <p>Óxido ácido + água → ácido; óxido básico + água → base.</p>
          </div>
          <div className="math-card">
            <span>🌧️</span>
            <h3>Chuva ácida</h3>
            <p>SO₂/NOₓ + água → H₂SO₄/HNO₃. Degrada ambiente e monumentos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa de Sais e Óxidos</span>
        <h2>Síntese Visual: Classificação e Propriedades</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Classificação de óxidos: ácidos, básicos, anfóteros e neutros">
          <text x="350" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Classificação dos Óxidos</text>
          {/* ácidos */}
          <rect x="40" y="35" width="145" height="150" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="112" y="57" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Ácidos</text>
          <text x="112" y="75" textAnchor="middle" fontSize="11" fill="#9d174d">Reagem c/ base</text>
          <text x="112" y="93" textAnchor="middle" fontSize="11" fill="#9d174d">→ sal + H₂O</text>
          <text x="112" y="115" textAnchor="middle" fontSize="11" fill="#9d174d">NM + O₂</text>
          <text x="112" y="133" textAnchor="middle" fontSize="11" fill="#9d174d">CO₂, SO₃</text>
          <text x="112" y="151" textAnchor="middle" fontSize="11" fill="#9d174d">NO₂, P₂O₅</text>
          <text x="112" y="175" textAnchor="middle" fontSize="10" fill="#be185d">anidridos</text>
          {/* básicos */}
          <rect x="200" y="35" width="145" height="150" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="272" y="57" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Básicos</text>
          <text x="272" y="75" textAnchor="middle" fontSize="11" fill="#1d4ed8">Reagem c/ ácido</text>
          <text x="272" y="93" textAnchor="middle" fontSize="11" fill="#1d4ed8">→ sal + H₂O</text>
          <text x="272" y="115" textAnchor="middle" fontSize="11" fill="#1d4ed8">Metal+O₂</text>
          <text x="272" y="133" textAnchor="middle" fontSize="11" fill="#1d4ed8">Na₂O, CaO</text>
          <text x="272" y="151" textAnchor="middle" fontSize="11" fill="#1d4ed8">MgO, FeO</text>
          <text x="272" y="175" textAnchor="middle" fontSize="10" fill="#1e40af">anidro de base</text>
          {/* anfóteros */}
          <rect x="360" y="35" width="145" height="150" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="432" y="57" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Anfóteros</text>
          <text x="432" y="75" textAnchor="middle" fontSize="11" fill="#166534">Reagem com</text>
          <text x="432" y="93" textAnchor="middle" fontSize="11" fill="#166534">ácido E base</text>
          <text x="432" y="115" textAnchor="middle" fontSize="11" fill="#166534">Al₂O₃, ZnO</text>
          <text x="432" y="133" textAnchor="middle" fontSize="11" fill="#166534">Cr₂O₃, SnO</text>
          <text x="432" y="175" textAnchor="middle" fontSize="10" fill="#14532d">comportamento dual</text>
          {/* neutros */}
          <rect x="520" y="35" width="145" height="150" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="592" y="57" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713f12">Neutros</text>
          <text x="592" y="75" textAnchor="middle" fontSize="11" fill="#713f12">Não reagem com</text>
          <text x="592" y="93" textAnchor="middle" fontSize="11" fill="#713f12">ácido nem base</text>
          <text x="592" y="115" textAnchor="middle" fontSize="11" fill="#713f12">CO, NO, N₂O</text>
          <text x="592" y="133" textAnchor="middle" fontSize="11" fill="#713f12">H₂O (óxido</text>
          <text x="592" y="151" textAnchor="middle" fontSize="11" fill="#713f12">neutro especial)</text>
          <text x="592" y="175" textAnchor="middle" fontSize="10" fill="#92400e">sem reação ác/base</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Ciclo de reações de neutralização e formação de sais">
          <defs>
            <marker id="arr15q" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* central */}
          <ellipse cx="350" cy="95" rx="60" ry="28" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <text x="350" y="99" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Sal</text>
          {/* Ácido + Base */}
          <ellipse cx="130" cy="50" rx="90" ry="25" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="130" y="55" textAnchor="middle" fontSize="12" fill="#9d174d">Ácido + Base</text>
          <line x1="210" y1="62" x2="296" y2="85" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr15q)" />
          <text x="250" y="68" textAnchor="middle" fontSize="11" fill="#475569">neutralização</text>
          {/* Metal + Ácido */}
          <ellipse cx="570" cy="50" rx="90" ry="25" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="570" y="55" textAnchor="middle" fontSize="12" fill="#1d4ed8">Metal + Ácido</text>
          <line x1="490" y1="62" x2="404" y2="85" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr15q)" />
          <text x="450" y="68" textAnchor="middle" fontSize="11" fill="#475569">+ H₂</text>
          {/* Óxido + Ácido */}
          <ellipse cx="130" cy="145" rx="90" ry="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="130" y="150" textAnchor="middle" fontSize="12" fill="#166534">Óxido + Ácido</text>
          <line x1="210" y1="132" x2="296" y2="103" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr15q)" />
          {/* Óxido + Base */}
          <ellipse cx="570" cy="145" rx="90" ry="25" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="570" y="150" textAnchor="middle" fontSize="12" fill="#713f12">Óxido bás.+Ácido bás.</text>
          <line x1="490" y1="132" x2="404" y2="103" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr15q)" />
          <text x="350" y="185" textAnchor="middle" fontSize="13" fill="#0f172a">Sal = cátion de base + ânion de ácido | NaCl = Na⁺(NaOH) + Cl⁻(HCl)</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Nome do sal"
          statement={<p>O sal <M>{"\\text{NaNO}_3"}</M>, formado a partir do ácido nítrico (<M>{"\\text{HNO}_3"}</M>), é chamado de:</p>}
          options={[
            { letter: "a", text: "Nitrato de sódio", correct: true },
            { letter: "b", text: "Nitrito de sódio" },
            { letter: "c", text: "Nitreto de sódio" },
            { letter: "d", text: "Nitrídrico de sódio" },
          ]}
          resolution={<p>O ácido nítrico (sufixo ‑ico) gera o ânion nitrato (sufixo ‑ato). Logo, <M>{"\\text{NaNO}_3"}</M> = nitrato de sódio.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Classificação de óxido"
          statement={<p>O óxido <M>{"\\text{CaO}"}</M> (cal virgem), formado por um metal, reage com água produzindo uma base. Ele é classificado como óxido:</p>}
          options={[
            { letter: "a", text: "Básico", correct: true },
            { letter: "b", text: "Ácido" },
            { letter: "c", text: "Neutro" },
            { letter: "d", text: "Peróxido" },
          ]}
          resolution={<p>Óxidos de metais que reagem com água formando bases são óxidos básicos: <M>{"\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Óxido ácido + água"
          statement={<p>Ao reagir com água, o gás <M>{"\\text{SO}_3"}</M> forma:</p>}
          options={[
            { letter: "a", text: "Ácido sulfúrico (H₂SO₄)", correct: true },
            { letter: "b", text: "Hidróxido de enxofre" },
            { letter: "c", text: "Ácido sulfuroso (H₂SO₃)" },
            { letter: "d", text: "Sulfato de hidrogênio" },
          ]}
          resolution={<p><M>{"\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4"}</M>. O <M>{"\\text{SO}_3"}</M> é o anidrido (óxido ácido) do ácido sulfúrico, principal componente da chuva ácida.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Precipitação por dupla troca"
          statement={<p>Misturando soluções de <M>{"\\text{AgNO}_3"}</M> e <M>{"\\text{NaCl}"}</M>, forma-se um precipitado branco. Sabendo que o AgCl é insolúvel, o precipitado é:</p>}
          options={[
            { letter: "a", text: "AgCl (cloreto de prata)", correct: true },
            { letter: "b", text: "NaNO₃ (nitrato de sódio)" },
            { letter: "c", text: "Ag (prata metálica)" },
            { letter: "d", text: "NaCl (cloreto de sódio)" },
          ]}
          resolution={<p>Na dupla troca <M>{"\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3"}</M>. O AgCl é insolúvel e precipita (sólido branco); o <M>{"\\text{NaNO}_3"}</M> permanece dissolvido.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Classificando óxidos por origem"
          statement={<p>Considere os óxidos <M>{"\\text{Na}_2\\text{O}"}</M>, <M>{"\\text{CO}_2"}</M> e <M>{"\\text{CO}"}</M>. A classificação correta, respectivamente, é:</p>}
          options={[
            { letter: "a", text: "Básico, ácido e neutro", correct: true },
            { letter: "b", text: "Ácido, básico e neutro" },
            { letter: "c", text: "Neutro, ácido e básico" },
            { letter: "d", text: "Básico, neutro e ácido" },
          ]}
          resolution={<p><M>{"\\text{Na}_2\\text{O}"}</M> (metal) → básico; <M>{"\\text{CO}_2"}</M> (ametal, reage com água) → ácido; <M>{"\\text{CO}"}</M> não reage com água/ácido/base → neutro.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Corrosão de monumentos pela chuva ácida"
          statement={<p>Estátuas e fachadas de mármore (carbonato de cálcio, <M>{"\\text{CaCO}_3"}</M>) sofrem desgaste em regiões com chuva ácida. Isso ocorre porque o ácido da chuva:</p>}
          options={[
            { letter: "a", text: "Reage com o carbonato de cálcio, formando sal solúvel, água e CO₂, dissolvendo o mármore.", correct: true },
            { letter: "b", text: "Deposita uma camada protetora sobre a pedra." },
            { letter: "c", text: "Transforma o mármore em metal." },
            { letter: "d", text: "Não tem nenhum efeito sobre o carbonato." },
          ]}
          resolution={<p>O ácido da chuva reage com o carbonato: <M>{"\\text{CaCO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CaSO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2"}</M>. O carbonato é consumido e liberado como gás/sal, corroendo gradualmente o monumento.</p>}
        />
      </section>
    </article>
  );
}
