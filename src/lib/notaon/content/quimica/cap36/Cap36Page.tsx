"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 36</span>
          <h1>Introdução à Química Orgânica: Kekulé e Hibridização</h1>
          <p>
            Conheça a origem da química orgânica, os postulados de Kekulé, a tetravalência e as
            propriedades únicas do carbono — hibridização sp³, sp² e sp, ligações sigma e pi, e a
            classificação dos carbonos e das cadeias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>1. Surgimento da Química Orgânica</h2>
        <p>
          Originalmente, "orgânico" referia-se a compostos de seres vivos, regidos por uma suposta "força
          vital". Em 1828, <strong>Wöhler</strong> sintetizou ureia (composto orgânico) a partir de cianato
          de amônio (inorgânico), derrubando essa teoria. Hoje, química orgânica é a{" "}
          <strong>química dos compostos do carbono</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>2. Postulados de Kekulé (1858)</h2>
        <div className="lesson-highlight">
          <ul>
            <li>O carbono é <strong>tetravalente</strong>: faz sempre <strong>4 ligações</strong>.</li>
            <li>As 4 valências do carbono são <strong>iguais</strong> entre si.</li>
            <li>Os átomos de carbono <strong>ligam-se entre si</strong>, formando cadeias.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O elemento-chave</span>
        <h2>3. Por que o Carbono é Especial?</h2>
        <p>
          O carbono (<M>{"Z = 6"}</M>, <M>{"1s^2\\,2s^2\\,2p^2"}</M>) forma 4 ligações covalentes estáveis e
          se liga a si mesmo em cadeias longas (encadeamento), gerando uma diversidade gigantesca de
          moléculas — daí existirem milhões de compostos orgânicos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Geometria</span>
        <h2>4. Hibridização do Carbono</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Hibridização</th><th>Ligações</th><th>Geometria</th><th>Ângulo</th></tr>
            </thead>
            <tbody>
              <tr><td>sp³</td><td>4 simples</td><td>Tetraédrica</td><td>109°28′</td></tr>
              <tr><td>sp²</td><td>1 dupla + 2 simples</td><td>Trigonal plana</td><td>120°</td></tr>
              <tr><td>sp</td><td>1 tripla (ou 2 duplas)</td><td>Linear</td><td>180°</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Regra prática: conte as ligações do carbono. Só simples → sp³; uma dupla → sp²; uma tripla (ou
            duas duplas) → sp.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de ligação</span>
        <h2>5. Ligações Sigma (σ) e Pi (π)</h2>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Ligação simples:</strong> 1 sigma (σ).</li>
            <li><strong>Ligação dupla:</strong> 1 sigma + 1 pi (π).</li>
            <li><strong>Ligação tripla:</strong> 1 sigma + 2 pi.</li>
          </ul>
          <p>A ligação σ é mais forte (frontal); as π são mais fracas e mais reativas (laterais).</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posição</span>
        <h2>6. Classificação dos Carbonos na Cadeia</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Primário</h3>
            <p>Ligado a <strong>1</strong> outro carbono (ou nenhum).</p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Secundário</h3>
            <p>Ligado a <strong>2</strong> carbonos.</p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Terciário</h3>
            <p>Ligado a <strong>3</strong> carbonos.</p>
          </div>
          <div className="lesson-card">
            <span>4️⃣</span>
            <h3>Quaternário</h3>
            <p>Ligado a <strong>4</strong> carbonos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cadeias</span>
        <h2>7. Classificação de Cadeias Carbônicas</h2>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Aberta (acíclica)</strong> × <strong>fechada (cíclica)</strong>.</li>
            <li><strong>Normal</strong> (sem ramificações) × <strong>ramificada</strong>.</li>
            <li><strong>Saturada</strong> (só ligações simples) × <strong>insaturada</strong> (com dupla/tripla).</li>
            <li><strong>Homogênea</strong> (só C e H na cadeia) × <strong>heterogênea</strong> (com heteroátomo: O, N, S entre carbonos).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧬</span>
            <h3>Orgânica</h3>
            <p>Química dos compostos do carbono (após Wöhler).</p>
          </div>
          <div className="math-card">
            <span>4️⃣</span>
            <h3>Kekulé</h3>
            <p>Carbono tetravalente; valências iguais; encadeamento.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Hibridização</h3>
            <p>sp³ (109°), sp² (120°), sp (180°).</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>σ e π</h3>
            <p>Simples = 1σ; dupla = 1σ+1π; tripla = 1σ+2π.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Carbonos</h3>
            <p>Primário a quaternário (nº de C vizinhos).</p>
          </div>
          <div className="math-card">
            <span>🪢</span>
            <h3>Cadeias</h3>
            <p>Aberta/fechada, saturada/insaturada, homo/heterogênea.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Hibridização</span>
        <h2>Síntese Visual: Hibridização do Carbono e Ligações</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Hibridização sp3, sp2 e sp do carbono">
          {[
            ["sp³", "Tetraédrica\n109,5°", "4 ligações σ\n0 ligações π", "Alcano\nCH₄, C₂H₆", 110, "#dbeafe","#2563eb"],
            ["sp²", "Trigonal\n120°", "3 σ + 1 π\n(dupla ligação)", "Alceno\nC₂H₄, benzeno", 350, "#dcfce7","#16a34a"],
            ["sp", "Linear\n180°", "2 σ + 2 π\n(tripla ligação)", "Alcino\nC₂H₂, CO₂", 590, "#fce7f3","#db2777"]
          ].map(([hybrid, geo, bond, ex, cx, fill, stroke]) => (
            <g key={cx as string}>
              <rect x={(cx as number)-100} y="20" width="185" height="175" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="46" textAnchor="middle" fontSize="16" fontWeight="bold" fill={stroke as string}>{hybrid as string}</text>
              {(geo as string).split("\n").map((l,i)=>(
                <text key={i} x={cx as number} y={70+i*18} textAnchor="middle" fontSize="13" fill={stroke as string}>{l}</text>
              ))}
              {(bond as string).split("\n").map((l,i)=>(
                <text key={i} x={cx as number} y={112+i*18} textAnchor="middle" fontSize="12" fill={stroke as string}>{l}</text>
              ))}
              {(ex as string).split("\n").map((l,i)=>(
                <text key={i} x={cx as number} y={155+i*18} textAnchor="middle" fontSize="12" fill={stroke as string}>{l}</text>
              ))}
            </g>
          ))}
          <text x="350" y="205" textAnchor="middle" fontSize="12" fill="#475569">σ (sigma): qualquer ligação simples | π (pi): 2ª ou 3ª ligação (lateral)</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Fórmulas de representação: molecular, estrutural plana, bastão e espaço preenchido">
          <rect x="40" y="20" width="140" height="140" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="110" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Molecular</text>
          <text x="110" y="80" textAnchor="middle" fontSize="22" fill="#1d4ed8">C₂H₆</text>
          <text x="110" y="115" textAnchor="middle" fontSize="11" fill="#1d4ed8">n° de cada</text>
          <text x="110" y="132" textAnchor="middle" fontSize="11" fill="#1d4ed8">átomo</text>

          <rect x="200" y="20" width="140" height="140" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="270" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Estrutural</text>
          <text x="270" y="68" textAnchor="middle" fontSize="12" fill="#166534">H H</text>
          <text x="270" y="86" textAnchor="middle" fontSize="12" fill="#166534">| |</text>
          <text x="270" y="104" textAnchor="middle" fontSize="12" fill="#166534">H—C—C—H</text>
          <text x="270" y="122" textAnchor="middle" fontSize="12" fill="#166534">| |</text>
          <text x="270" y="140" textAnchor="middle" fontSize="12" fill="#166534">H H</text>

          <rect x="360" y="20" width="140" height="140" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="430" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713f12">Simplificada</text>
          <text x="430" y="90" textAnchor="middle" fontSize="18" fill="#713f12">CH₃—CH₃</text>
          <text x="430" y="120" textAnchor="middle" fontSize="11" fill="#713f12">carbonos ligados</text>
          <text x="430" y="138" textAnchor="middle" fontSize="11" fill="#713f12">explicitamente</text>

          <rect x="520" y="20" width="140" height="140" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="590" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Bastão (linha)</text>
          <text x="590" y="90" textAnchor="middle" fontSize="12" fill="#9d174d">Cada vértice e</text>
          <text x="590" y="108" textAnchor="middle" fontSize="12" fill="#9d174d">extremidade = C</text>
          <text x="590" y="126" textAnchor="middle" fontSize="12" fill="#9d174d">H implícitos</text>
          <text x="350" y="182" textAnchor="middle" fontSize="13" fill="#0f172a">Orgânica: carbono é tetravalente — faz 4 ligações covalentes sempre</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Hibridização</th><th>Tipo de ligação C</th><th>Ângulo</th><th>Geometria</th><th>Série homóloga</th></tr>
          </thead>
          <tbody>
            <tr><td>sp³</td><td>Simples (C—C)</td><td>109,5°</td><td>Tetraédrica</td><td>Alcanos (CₙH₂ₙ₊₂)</td></tr>
            <tr><td>sp²</td><td>Dupla (C=C)</td><td>120°</td><td>Trigonal planar</td><td>Alcenos (CₙH₂ₙ)</td></tr>
            <tr><td>sp</td><td>Tripla (C≡C)</td><td>180°</td><td>Linear</td><td>Alcinos (CₙH₂ₙ₋₂)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Valência do carbono"
          statement={<p>Segundo Kekulé, o número de ligações que o carbono sempre realiza é:</p>}
          options={[
            { letter: "a", text: "4 (tetravalente)", correct: true },
            { letter: "b", text: "2" },
            { letter: "c", text: "6" },
            { letter: "d", text: "Variável" },
          ]}
          resolution={<p>O carbono é tetravalente: faz sempre 4 ligações covalentes, com valências equivalentes entre si.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Marco histórico"
          statement={<p>A síntese que derrubou a "teoria da força vital", mostrando que compostos orgânicos podem ser produzidos a partir de inorgânicos, foi a da:</p>}
          options={[
            { letter: "a", text: "Ureia, por Wöhler (1828)", correct: true },
            { letter: "b", text: "Água, por Lavoisier" },
            { letter: "c", text: "Amônia, por Haber" },
            { letter: "d", text: "Glicose, por Kekulé" },
          ]}
          resolution={<p>Wöhler sintetizou a ureia (orgânica) a partir do cianato de amônio (inorgânico) em 1828, refutando a ideia de que compostos orgânicos só viriam de seres vivos.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Hibridização"
          statement={<p>Um carbono que faz uma ligação dupla e duas simples apresenta hibridização:</p>}
          options={[
            { letter: "a", text: "sp² (geometria trigonal plana, 120°)", correct: true },
            { letter: "b", text: "sp³ (tetraédrica)" },
            { letter: "c", text: "sp (linear)" },
            { letter: "d", text: "sp⁴" },
          ]}
          resolution={<p>Uma dupla + duas simples → hibridização sp², com geometria trigonal plana e ângulos de 120° (ex.: carbonos do eteno).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Sigma e pi"
          statement={<p>Uma ligação tripla entre dois carbonos é composta por:</p>}
          options={[
            { letter: "a", text: "1 ligação sigma e 2 ligações pi", correct: true },
            { letter: "b", text: "3 ligações sigma" },
            { letter: "c", text: "2 sigma e 1 pi" },
            { letter: "d", text: "3 ligações pi" },
          ]}
          resolution={<p>Toda ligação múltipla tem sempre 1 sigma; as demais são pi. Tripla = 1σ + 2π.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Classificação de carbono"
          statement={<p>No 2-metilpropano (isobutano), o carbono central, ligado a três outros carbonos, é classificado como:</p>}
          options={[
            { letter: "a", text: "Terciário", correct: true },
            { letter: "b", text: "Primário" },
            { letter: "c", text: "Secundário" },
            { letter: "d", text: "Quaternário" },
          ]}
          resolution={<p>Um carbono ligado diretamente a 3 outros carbonos é terciário. (Os três CH₃ das pontas são primários.)</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Diversidade dos compostos orgânicos"
          statement={<p>Existem milhões de compostos orgânicos, muito mais que de qualquer outro elemento. A principal razão para essa enorme variedade é a capacidade do carbono de:</p>}
          options={[
            { letter: "a", text: "Formar quatro ligações estáveis e encadear-se a si mesmo em cadeias longas e variadas.", correct: true },
            { letter: "b", text: "Ganhar muitos elétrons formando ânions." },
            { letter: "c", text: "Ser radioativo." },
            { letter: "d", text: "Ter massa atômica muito alta." },
          ]}
          resolution={<p>A tetravalência somada à capacidade de encadeamento (ligar-se a outros carbonos em cadeias abertas, fechadas, ramificadas, com insaturações) gera uma variedade praticamente ilimitada de estruturas — base da diversidade da química orgânica e da vida.</p>}
        />
      </section>
    </article>
  );
}
