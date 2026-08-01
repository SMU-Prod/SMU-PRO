"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 16</span>
          <h1>Reações Inorgânicas: Síntese, Análise, Simples e Dupla Troca</h1>
          <p>
            Aprenda a reconhecer os quatro tipos clássicos de reações químicas, a prever quando uma reação
            ocorre (fila de reatividade e formação de precipitados/gases/água) e a balancear equações pelo
            método das tentativas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é uma Reação Química?</h2>
        <p>
          É uma transformação em que substâncias (<strong>reagentes</strong>) se convertem em novas
          substâncias (<strong>produtos</strong>), com rearranjo dos átomos. Toda equação deve estar{" "}
          <strong>balanceada</strong> (Lei de Lavoisier — conservação dos átomos).
        </p>
        <div className="lesson-highlight">
          <p>
            Indícios de reação: liberação de gás, formação de precipitado (sólido), mudança de cor, variação
            de temperatura ou emissão de luz.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>2. Os Quatro Tipos Clássicos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Esquema geral</th></tr>
            </thead>
            <tbody>
              <tr><td>Síntese (adição)</td><td><M>{"A + B \\rightarrow AB"}</M></td></tr>
              <tr><td>Análise (decomposição)</td><td><M>{"AB \\rightarrow A + B"}</M></td></tr>
              <tr><td>Simples troca (deslocamento)</td><td><M>{"A + BC \\rightarrow AC + B"}</M></td></tr>
              <tr><td>Dupla troca (metátese)</td><td><M>{"AB + CD \\rightarrow AD + CB"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>3. Reações de Síntese (Adição)</h2>
        <p>Dois ou mais reagentes formam um único produto:</p>
        <div className="lesson-highlight">
          <p><M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M></p>
          <p><M>{"\\text{CaO} + \\text{CO}_2 \\rightarrow \\text{CaCO}_3"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>4. Reações de Análise (Decomposição)</h2>
        <p>Um único reagente se desdobra em dois ou mais produtos (por calor, luz ou eletricidade):</p>
        <div className="lesson-highlight">
          <p><M>{"2\\,\\text{H}_2\\text{O} \\xrightarrow{\\text{eletrólise}} 2\\,\\text{H}_2 + \\text{O}_2"}</M></p>
          <p><M>{"\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2"}</M> (produção de cal)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>5. Reações de Simples Troca (Deslocamento)</h2>
        <p>
          Uma substância simples desloca um elemento de um composto. Só ocorre se o elemento que entra for{" "}
          <strong>mais reativo</strong> que o que sai (fila de reatividade).
        </p>
        <div className="lesson-highlight">
          <h3>Fila de reatividade dos metais (decrescente)</h3>
          <p><M>{"\\text{K} > \\text{Ca} > \\text{Na} > \\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{H} > \\text{Cu} > \\text{Ag} > \\text{Au}"}</M></p>
          <p>
            Ex.: <M>{"\\text{Zn} + 2\\,\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2"}</M> ocorre (Zn {">"} H).
            Já <M>{"\\text{Cu} + \\text{HCl}"}</M> não reage (Cu fica depois do H).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>6. Reações de Dupla Troca (Metátese)</h2>
        <p>
          Dois compostos trocam seus íons. Ocorre quando há formação de um <strong>precipitado</strong>{" "}
          (insolúvel), um <strong>gás</strong>, ou um eletrólito fraco como a <strong>água</strong>.
        </p>
        <div className="lesson-highlight">
          <p>Precipitado: <M>{"\\text{NaCl} + \\text{AgNO}_3 \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3"}</M></p>
          <p>Água (neutralização): <M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Balanceamento</span>
        <h2>7. Balanceamento por Tentativas</h2>
        <div className="lesson-highlight">
          <h3>Roteiro</h3>
          <ol>
            <li>Comece pelo elemento que aparece em <strong>menos substâncias</strong> (geralmente metal, depois ametal, depois H e por último O).</li>
            <li>Ajuste os coeficientes para igualar o nº de átomos de cada elemento nos dois lados.</li>
            <li>Confira todos os átomos ao final.</li>
          </ol>
          <p>
            Ex.: <M>{"\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3"}</M> →
            balanceada: <M>{"4\\,\\text{Fe} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Fe}_2\\text{O}_3"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>8. Onde Encontramos Essas Reações?</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Combustão</h3>
            <p>Síntese: queima de combustíveis libera CO₂ e H₂O.</p>
          </div>
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Cal</h3>
            <p>Análise: <M>{"\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2"}</M>.</p>
          </div>
          <div className="lesson-card">
            <span>🔋</span>
            <h3>Corrosão</h3>
            <p>Simples troca: metais mais reativos deslocam menos reativos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>➕</span>
            <h3>Síntese</h3>
            <p><M>{"A + B \\rightarrow AB"}</M>.</p>
          </div>
          <div className="math-card">
            <span>➗</span>
            <h3>Análise</h3>
            <p><M>{"AB \\rightarrow A + B"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔁</span>
            <h3>Simples troca</h3>
            <p><M>{"A + BC \\rightarrow AC + B"}</M> (depende da reatividade).</p>
          </div>
          <div className="math-card">
            <span>🔀</span>
            <h3>Dupla troca</h3>
            <p>Ocorre com precipitado, gás ou água.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Fila de reatividade</h3>
            <p>Metal mais reativo desloca o menos reativo.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Balanceamento</h3>
            <p>Conservar átomos: metal → ametal → H → O.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa de Reações</span>
        <h2>Síntese Visual: Tipos de Reações Inorgânicas</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Tipos de reações: síntese, análise, simples e dupla troca">
          {[
            ["Síntese\n(Adição)", "A + B → AB", "Na + Cl₂ → NaCl₂\nCaO + H₂O → Ca(OH)₂", "#dbeafe", "#2563eb", 100],
            ["Análise\n(Decomposição)", "AB → A + B", "2H₂O → 2H₂ + O₂\nCaCO₃ → CaO + CO₂", "#dcfce7", "#16a34a", 280],
            ["Simples Troca\n(Deslocamento)", "A + BC → AC + B", "Zn + HCl → ZnCl₂ + H₂\nFe + CuSO₄→FeSO₄+Cu", "#fce7f3", "#db2777", 460],
            ["Dupla Troca\n(Metátese)", "AB + CD → AD + CB", "HCl + NaOH → NaCl + H₂O\nBaCl₂+Na₂SO₄→BaSO₄↓+NaCl", "#fef9c3", "#ca8a04", 640]
          ].map(([title, schema, ex, fill, stroke, cx]) => (
            <g key={cx as string}>
              <rect x={(cx as number)-90} y="20" width="160" height="175" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[0]}</text>
              <text x={cx as number} y="62" textAnchor="middle" fontSize="11" fill={stroke as string}>{(title as string).split("\n")[1]}</text>
              <text x={cx as number} y="90" textAnchor="middle" fontSize="13" fontWeight="bold" fill={stroke as string}>{schema as string}</text>
              {(ex as string).split("\n").map((line, i) => (
                <text key={i} x={cx as number} y={118+i*18} textAnchor="middle" fontSize="11" fill={stroke as string}>{line}</text>
              ))}
            </g>
          ))}
          <text x="350" y="205" textAnchor="middle" fontSize="12" fill="#475569">Identificar tipo de reação é o primeiro passo para balancear e prever produtos</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Balanceamento por tentativa: conservação de átomos e cargas">
          <rect x="40" y="25" width="620" height="140" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <text x="350" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Balanceamento: Lei da Conservação</text>
          <text x="350" y="75" textAnchor="middle" fontSize="14" fill="#1e293b">H₂ + O₂ → H₂O</text>
          <text x="350" y="100" textAnchor="middle" fontSize="13" fill="#dc2626">Não balanceada: 2H, 2O → 2H, 1O ✗</text>
          <text x="350" y="125" textAnchor="middle" fontSize="14" fill="#16a34a">2H₂ + O₂ → 2H₂O</text>
          <text x="350" y="150" textAnchor="middle" fontSize="13" fill="#16a34a">Balanceada: 4H, 2O → 4H, 2O ✓</text>
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#475569">Regra: n° de átomos de cada elemento DEVE ser igual nos dois lados</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Tipo</th><th>Esquema geral</th><th>Condição de ocorrência</th><th>Exemplo ENEM</th></tr>
          </thead>
          <tbody>
            <tr><td>Síntese</td><td>A + B → AB</td><td>Elementos ou compostos simples se unem</td><td>Formação de NH₃ (Haber-Bosch)</td></tr>
            <tr><td>Análise</td><td>AB → A + B</td><td>Calor, luz ou eletricidade decompõe</td><td>Eletrólise da água</td></tr>
            <tr><td>Simples troca</td><td>A + BC → AC + B</td><td>A mais reativo que B (série de reatividade)</td><td>Fe + CuSO₄ (ferro desloca cobre)</td></tr>
            <tr><td>Dupla troca</td><td>AB + CD → AD + CB</td><td>Forma precipitado, gás ou água</td><td>HCl + NaOH → NaCl + H₂O (neutralização)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tipo de reação"
          statement={<p>A reação <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M> é classificada como:</p>}
          options={[
            { letter: "a", text: "Síntese (adição)", correct: true },
            { letter: "b", text: "Análise (decomposição)" },
            { letter: "c", text: "Simples troca" },
            { letter: "d", text: "Dupla troca" },
          ]}
          resolution={<p>Dois reagentes (H₂ e O₂) se combinam para formar um único produto (H₂O) → reação de síntese ou adição.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Identificando decomposição"
          statement={<p>A reação <M>{"2\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O} + \\text{O}_2"}</M> (decomposição da água oxigenada) é do tipo:</p>}
          options={[
            { letter: "a", text: "Análise (decomposição)", correct: true },
            { letter: "b", text: "Síntese" },
            { letter: "c", text: "Simples troca" },
            { letter: "d", text: "Dupla troca" },
          ]}
          resolution={<p>Um único reagente (<M>{"\\text{H}_2\\text{O}_2"}</M>) origina dois produtos → reação de análise/decomposição.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Ocorre ou não? (reatividade)"
          statement={<p>Considerando a fila de reatividade, qual reação de simples troca ocorre espontaneamente?</p>}
          options={[
            { letter: "a", text: "Zn + 2 HCl → ZnCl₂ + H₂", correct: true },
            { letter: "b", text: "Cu + 2 HCl → CuCl₂ + H₂" },
            { letter: "c", text: "Ag + HCl → AgCl + H₂" },
            { letter: "d", text: "Au + HCl → AuCl + H₂" },
          ]}
          resolution={<p>Só ocorre se o metal for mais reativo que o hidrogênio. O zinco está antes do H na fila, então desloca o H do ácido. Cu, Ag e Au estão depois do H e não reagem com HCl comum.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Quando ocorre dupla troca?"
          statement={<p>Uma reação de dupla troca entre dois sais solúveis ocorre efetivamente quando:</p>}
          options={[
            { letter: "a", text: "Pelo menos um dos produtos é insolúvel (precipitado), gás ou água", correct: true },
            { letter: "b", text: "Os dois produtos são solúveis" },
            { letter: "c", text: "Não há mudança nenhuma" },
            { letter: "d", text: "Um metal mais reativo desloca outro" },
          ]}
          resolution={<p>A dupla troca só "acontece de fato" se um produto sair da solução: um precipitado insolúvel, um gás que escapa, ou um eletrólito fraco como a água. Caso contrário, os íons permanecem dissolvidos sem reação efetiva.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Balanceamento"
          statement={<p>Ao balancear a equação <M>{"\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}"}</M> (combustão do propano), os coeficientes corretos são:</p>}
          options={[
            { letter: "a", text: "1, 5, 3, 4", correct: true },
            { letter: "b", text: "1, 3, 3, 4" },
            { letter: "c", text: "2, 5, 6, 8" },
            { letter: "d", text: "1, 4, 3, 4" },
          ]}
          resolution={<p>Balanceando C (3 → 3 CO₂) e H (8 → 4 H₂O): <M>{"\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}"}</M>. Oxigênios à direita: <M>{"3\\times2 + 4 = 10"}</M> → 5 O₂. Coeficientes: 1, 5, 3, 4.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Bicarbonato e fermento"
          statement={<p>Ao preparar bolos, o fermento químico (bicarbonato de sódio) se decompõe com o calor, liberando gás carbônico que faz a massa crescer: <M>{"2\\,\\text{NaHCO}_3 \\rightarrow \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2"}</M>. Essa reação é um exemplo de:</p>}
          options={[
            { letter: "a", text: "Reação de análise (decomposição) provocada pelo calor.", correct: true },
            { letter: "b", text: "Reação de síntese." },
            { letter: "c", text: "Reação de simples troca." },
            { letter: "d", text: "Reação de combustão completa." },
          ]}
          resolution={<p>Um único reagente (<M>{"\\text{NaHCO}_3"}</M>) se desdobra em três produtos pelo aquecimento → reação de análise/decomposição. O <M>{"\\text{CO}_2"}</M> liberado cria as bolhas que dão leveza à massa.</p>}
        />
      </section>
    </article>
  );
}
