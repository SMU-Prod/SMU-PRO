"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 41</span>
          <h1>Primeira Guerra Mundial</h1>
          <p>
            Entre 1914 e 1918, a Europa e boa parte do mundo foram consumidas
            pela maior guerra que a humanidade havia enfrentado até então.
            Originada nas tensões imperialistas, nas rivalidades nacionais e
            no sistema de alianças que transformou um assassinato em Sarajevo
            num conflito global, a Grande Guerra matou mais de 17 milhões de
            pessoas e redesenhou completamente o mapa político do planeta —
            plantando as sementes do próximo conflito.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas</span>
        <h2>1. As Causas Profundas — O Acrônimo MAIN</h2>
        <p>
          A historiografia usa o acrônimo <strong>MAIN</strong> para sintetizar
          as causas estruturais da Primeira Guerra Mundial. Nenhuma delas, por
          si só, teria gerado o conflito — foi a combinação de todas que tornou
          a guerra praticamente inevitável:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>M — Militarismo</h3>
            <p>
              Corrida armamentista: a Alemanha aumentou seu exército de 400.000
              para 800.000 homens entre 1870 e 1914. A corrida naval
              anglo-alemã (Dreadnoughts) intensificou a rivalidade. O
              Plano Schlieffen alemão previa guerra em dois fronts.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>A — Alianças</h3>
            <p>
              Dois blocos antagônicos: <em>Tríplice Aliança</em>
              (Alemanha + Áustria-Hungria + Itália) e{" "}
              <em>Tríplice Entente</em> (França + Rússia + Grã-Bretanha).
              O sistema significava que um conflito local arrastaria todos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>I — Imperialismo</h3>
            <p>
              Rivalidade por colônias na África e na Ásia. A crise de
              Marrocos (1905 e 1911) colocou França e Alemanha à beira da
              guerra. As Guerras dos Bálcãs (1912–13) criaram novos
              focos de tensão na Europa.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏴</span>
            <h3>N — Nacionalismo</h3>
            <p>
              Paneslavismo (Rússia como protetora dos eslavos dos Bálcãs),
              pangermanismo, irredentismo italiano, e a questão da
              Alsácia-Lorena (tomada pela Alemanha em 1871 — a França
              queria de volta). Povos sem Estado buscavam
              autodeterminação.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Estopim</span>
        <h2>2. O Assassinato em Sarajevo e a Cascata de Declarações de Guerra</h2>
        <p>
          Em <strong>28 de junho de 1914</strong>, o arquiduque
          <strong> Francisco Ferdinando</strong>, herdeiro do trono
          austro-húngaro, e sua esposa Sofia foram assassinados em Sarajevo
          (capital da Bósnia) pelo nacionalista sérvio{" "}
          <strong>Gavrilo Princip</strong>, membro da organização
          ultranacionalista "Mão Negra". O atirador estava ligado a grupos que
          sonhavam com a unificação dos povos eslavos dos Bálcãs sob a Sérvia.
        </p>
        <p>
          A Áustria-Hungria culpou a Sérvia e enviou um ultimato humilhante.
          A Sérvia aceitou quase todas as condições — mas não a participação
          austro-húngara nas investigações em território sérvio. A Áustria
          declarou guerra à Sérvia em 28 de julho de 1914. O sistema de
          alianças entrou em cascata:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>28/06/1914</td>
                <td>Assassinato de Francisco Ferdinando em Sarajevo</td>
              </tr>
              <tr>
                <td>28/07/1914</td>
                <td>Áustria-Hungria declara guerra à Sérvia</td>
              </tr>
              <tr>
                <td>01/08/1914</td>
                <td>Alemanha declara guerra à Rússia</td>
              </tr>
              <tr>
                <td>03/08/1914</td>
                <td>Alemanha declara guerra à França; invade a Bélgica neutra</td>
              </tr>
              <tr>
                <td>04/08/1914</td>
                <td>Grã-Bretanha declara guerra à Alemanha (defesa da Bélgica)</td>
              </tr>
              <tr>
                <td>23/08/1914</td>
                <td>Japão declara guerra à Alemanha (pelo lado dos Aliados)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1: Mapa Esquemático da Europa 1914 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. Alianças e Frentes de Batalha — Europa em 1914</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 420"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 760, height: "auto" }}
            aria-label="Mapa esquemático das alianças e frentes de batalha na Europa em 1914"
          >
            <rect width="760" height="420" fill="#0f172a" rx="12" />

            {/* Título */}
            <text x="380" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Europa em 1914 — As Alianças e Frentes de Batalha
            </text>

            {/* Legenda alianças */}
            <rect x="20" y="45" width="16" height="16" fill="#ef4444" rx="2" />
            <text x="42" y="57" fill="#fca5a5" fontSize="10">Tríplice Aliança (Potências Centrais)</text>
            <rect x="20" y="68" width="16" height="16" fill="#3b82f6" rx="2" />
            <text x="42" y="80" fill="#93c5fd" fontSize="10">Tríplice Entente (Aliados)</text>
            <rect x="20" y="91" width="16" height="16" fill="#475569" rx="2" />
            <text x="42" y="103" fill="#94a3b8" fontSize="10">Neutros / outros</text>

            {/* Blocos de países - Potências Centrais */}
            {/* Alemanha */}
            <rect x="340" y="140" width="110" height="70" rx="6" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <text x="395" y="170" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="bold">ALEMANHA</text>
            <text x="395" y="186" textAnchor="middle" fill="#94a3b8" fontSize="9">Berlim</text>
            <text x="395" y="200" textAnchor="middle" fill="#64748b" fontSize="8">Plano Schlieffen</text>

            {/* Áustria-Hungria */}
            <rect x="380" y="230" width="130" height="60" rx="6" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
            <text x="445" y="255" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">ÁUSTRIA-HUNGRIA</text>
            <text x="445" y="270" textAnchor="middle" fill="#94a3b8" fontSize="9">Viena / Budapeste</text>
            <text x="445" y="283" textAnchor="middle" fill="#64748b" fontSize="8">→ guerra à Sérvia</text>

            {/* Potências Entente */}
            {/* França */}
            <rect x="160" y="160" width="100" height="60" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
            <text x="210" y="185" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">FRANÇA</text>
            <text x="210" y="200" textAnchor="middle" fill="#94a3b8" fontSize="9">Paris</text>
            <text x="210" y="213" textAnchor="middle" fill="#64748b" fontSize="8">Verdun, Marne</text>

            {/* Grã-Bretanha */}
            <rect x="90" y="120" width="110" height="60" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
            <text x="145" y="145" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">GRÃ-BRETANHA</text>
            <text x="145" y="160" textAnchor="middle" fill="#94a3b8" fontSize="9">Londres</text>
            <text x="145" y="173" textAnchor="middle" fill="#64748b" fontSize="8">Somme, Gallipoli</text>

            {/* Rússia */}
            <rect x="550" y="120" width="120" height="60" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
            <text x="610" y="145" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">RÚSSIA</text>
            <text x="610" y="160" textAnchor="middle" fill="#94a3b8" fontSize="9">Petrogrado</text>
            <text x="610" y="173" textAnchor="middle" fill="#64748b" fontSize="8">Frente Oriental</text>

            {/* Sérvia */}
            <rect x="480" y="270" width="80" height="50" rx="6" fill="#1c2a1c" stroke="#22c55e" strokeWidth="1.5" />
            <text x="520" y="292" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">SÉRVIA</text>
            <text x="520" y="308" textAnchor="middle" fill="#64748b" fontSize="8">Estopim</text>

            {/* Império Otomano */}
            <rect x="570" y="270" width="130" height="50" rx="6" fill="#2c1a0a" stroke="#f97316" strokeWidth="1.5" />
            <text x="635" y="292" textAnchor="middle" fill="#fdba74" fontSize="10" fontWeight="bold">IMP. OTOMANO</text>
            <text x="635" y="308" textAnchor="middle" fill="#64748b" fontSize="8">Aliado das Potências Centrais</text>

            {/* Bélgica */}
            <rect x="220" y="120" width="80" height="50" rx="6" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="260" y="142" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">BÉLGICA</text>
            <text x="260" y="157" textAnchor="middle" fill="#64748b" fontSize="8">Invadida 1914</text>

            {/* Frente Ocidental (linha vermelha) */}
            <line x1="265" y1="150" x2="337" y2="160" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6,3" />
            <text x="300" y="145" textAnchor="middle" fill="#fbbf24" fontSize="9">Frente Oc.</text>

            {/* Frente Oriental (linha azul) */}
            <line x1="460" y1="160" x2="550" y2="155" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6,3" />
            <text x="505" y="148" textAnchor="middle" fill="#a78bfa" fontSize="9">Frente Or.</text>

            {/* Seta de ataque Alemanha sobre França */}
            <path d="M 340 170 Q 305 160 270 170" stroke="#ef4444" strokeWidth="1.5" fill="none" markerEnd="url(#arr2)" />
            <polygon points="272,165 272,177 264,171" fill="#ef4444" />

            {/* Seção inferior - legenda de batalhas */}
            <rect x="20" y="345" width="720" height="65" rx="6" fill="#0f1929" stroke="#334155" strokeWidth="1" />
            <text x="380" y="366" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">
              Grandes Batalhas da Frente Ocidental
            </text>
            <text x="130" y="385" textAnchor="middle" fill="#f59e0b" fontSize="9">Batalha do Marne (1914)</text>
            <text x="130" y="397" textAnchor="middle" fill="#94a3b8" fontSize="8">Freou avanço alemão</text>
            <text x="310" y="385" textAnchor="middle" fill="#ef4444" fontSize="9">Batalha de Verdun (1916)</text>
            <text x="310" y="397" textAnchor="middle" fill="#94a3b8" fontSize="8">~300.000 mortos</text>
            <text x="490" y="385" textAnchor="middle" fill="#dc2626" fontSize="9">Batalha do Somme (1916)</text>
            <text x="490" y="397" textAnchor="middle" fill="#94a3b8" fontSize="8">57.000 mortos no 1º dia</text>
            <text x="650" y="385" textAnchor="middle" fill="#a78bfa" fontSize="9">Gallipoli (1915)</text>
            <text x="650" y="397" textAnchor="middle" fill="#94a3b8" fontSize="8">Fracasso britânico</text>
          </svg>
          <figcaption>
            Posição dos principais países e frentes de batalha na Europa em 1914.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Guerra</span>
        <h2>4. A Guerra de Trincheiras e as Novas Tecnologias</h2>
        <p>
          A Frente Ocidental rapidamente se transformou numa guerra de posições.
          Após a Batalha do Marne (setembro de 1914), que impediu o avanço
          alemão sobre Paris, ambos os lados cavaram trincheiras que se
          estendiam por <strong>700 km</strong> do Canal da Mancha até a Suíça.
          As condições nas trincheiras eram inimagináveis: lama, ratos, piolhos,
          odor de cadáveres, mísseis constantes e o terror do gás.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Impacto na Guerra</th>
                <th>Primeira Utilização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metralhadora</td>
                <td>Tornava o ataque frontal suicida — centenas de mortos por minuto</td>
                <td>Amplamente usada desde o início</td>
              </tr>
              <tr>
                <td>Artilharia pesada</td>
                <td>Bombardeios de dias inteiros antes dos ataques; cratera lunar</td>
                <td>Amplamente usada desde o início</td>
              </tr>
              <tr>
                <td>Gás venenoso</td>
                <td>Cloro (1915) e gás mostarda (1917); cegueira, queimaduras, morte</td>
                <td>Alemanha, Ypres (abril 1915)</td>
              </tr>
              <tr>
                <td>Tanques</td>
                <td>Rompiam arame farpado; intimidavam a infantaria inimiga</td>
                <td>Grã-Bretanha, Somme (setembro 1916)</td>
              </tr>
              <tr>
                <td>Aviação</td>
                <td>Reconhecimento e combate aéreo ("ases" como Richthofen)</td>
                <td>Ambos os lados, a partir de 1914</td>
              </tr>
              <tr>
                <td>Submarinos (U-Boote)</td>
                <td>Bloqueio naval da Grã-Bretanha; afundamento do Lusitânia (1915)</td>
                <td>Alemanha, a partir de 1914</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>A Batalha do Somme</strong> (julho–novembro 1916): no primeiro
          dia de combate, os britânicos sofreram 57.470 baixas — a maior perda
          em um único dia na história militar britânica. Ao final de 4 meses,
          mais de um milhão de baixas de ambos os lados, por um avanço territorial
          de apenas 10 km.
        </div>
      </section>

      {/* ── SVG 2: Linha do Tempo 1914–1919 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>5. Linha do Tempo da Grande Guerra (1914–1919)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 800 360"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 800, height: "auto" }}
            aria-label="Linha do tempo da Primeira Guerra Mundial 1914 a 1919"
          >
            <rect width="800" height="360" fill="#0f172a" rx="12" />

            <text x="400" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Primeira Guerra Mundial — Cronologia (1914–1919)
            </text>

            {/* Linha central */}
            <line x1="30" y1="160" x2="770" y2="160" stroke="#334155" strokeWidth="3" />

            {/* Ticks e anos */}
            {[
              { x: 60, label: "1914" },
              { x: 180, label: "1915" },
              { x: 300, label: "1916" },
              { x: 420, label: "1917" },
              { x: 560, label: "1918" },
              { x: 700, label: "1919" },
            ].map(({ x, label }) => (
              <g key={label}>
                <line x1={x} y1="152" x2={x} y2="168" stroke="#64748b" strokeWidth="2" />
                <text x={x} y="182" textAnchor="middle" fill="#64748b" fontSize="10">{label}</text>
              </g>
            ))}

            {/* Eventos ACIMA da linha */}
            {/* 1914 - Assassinato */}
            <line x1="60" y1="155" x2="60" y2="120" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="10" y="95" width="100" height="27" rx="4" fill="#3b1f1f" stroke="#ef4444" strokeWidth="1" />
            <text x="60" y="108" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Sarajevo</text>
            <text x="60" y="118" textAnchor="middle" fill="#94a3b8" fontSize="7">28/06/1914</text>

            {/* 1915 - Lusitânia */}
            <line x1="180" y1="155" x2="180" y2="115" stroke="#f97316" strokeWidth="1.5" />
            <rect x="130" y="90" width="100" height="27" rx="4" fill="#2c1a0a" stroke="#f97316" strokeWidth="1" />
            <text x="180" y="103" textAnchor="middle" fill="#fdba74" fontSize="8" fontWeight="bold">Lusitânia</text>
            <text x="180" y="113" textAnchor="middle" fill="#94a3b8" fontSize="7">afundado mai/1915</text>

            {/* 1915 - Gallipoli */}
            <line x1="220" y1="155" x2="220" y2="130" stroke="#a78bfa" strokeWidth="1.5" />
            <rect x="170" y="105" width="100" height="27" rx="4" fill="#1c1c2e" stroke="#a78bfa" strokeWidth="1" />
            <text x="220" y="118" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold">Gallipoli</text>
            <text x="220" y="128" textAnchor="middle" fill="#94a3b8" fontSize="7">abr–dez 1915</text>

            {/* 1916 - Verdun */}
            <line x1="310" y1="155" x2="310" y2="120" stroke="#dc2626" strokeWidth="1.5" />
            <rect x="260" y="95" width="100" height="27" rx="4" fill="#1a0808" stroke="#dc2626" strokeWidth="1" />
            <text x="310" y="108" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Verdun</text>
            <text x="310" y="118" textAnchor="middle" fill="#94a3b8" fontSize="7">300.000 mortos</text>

            {/* 1916 - Somme */}
            <line x1="360" y1="155" x2="360" y2="105" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="310" y="80" width="100" height="27" rx="4" fill="#1a0808" stroke="#ef4444" strokeWidth="1" />
            <text x="360" y="93" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Somme</text>
            <text x="360" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">57k mortos 1º dia</text>

            {/* 1917 - EUA entram */}
            <line x1="430" y1="155" x2="430" y2="115" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="380" y="90" width="100" height="27" rx="4" fill="#0d2010" stroke="#22c55e" strokeWidth="1" />
            <text x="430" y="103" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold">EUA entram</text>
            <text x="430" y="113" textAnchor="middle" fill="#94a3b8" fontSize="7">06/04/1917</text>

            {/* 1917 - Rev. Russa */}
            <line x1="490" y1="155" x2="490" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="440" y="95" width="100" height="27" rx="4" fill="#1c1200" stroke="#f59e0b" strokeWidth="1" />
            <text x="490" y="108" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">Rev. Russa</text>
            <text x="490" y="118" textAnchor="middle" fill="#94a3b8" fontSize="7">out/1917</text>

            {/* Eventos ABAIXO da linha */}
            {/* 1914 - Plano Schlieffen */}
            <line x1="80" y1="165" x2="80" y2="200" stroke="#64748b" strokeWidth="1.5" />
            <rect x="30" y="198" width="100" height="27" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="80" y="211" textAnchor="middle" fill="#94a3b8" fontSize="8">Plano Schlieffen</text>
            <text x="80" y="221" textAnchor="middle" fill="#64748b" fontSize="7">invade Bélgica/França</text>

            {/* 1914 - Marne */}
            <line x1="140" y1="165" x2="140" y2="205" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="90" y="203" width="100" height="27" rx="4" fill="#0c1929" stroke="#3b82f6" strokeWidth="1" />
            <text x="140" y="216" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">Marne (set 1914)</text>
            <text x="140" y="226" textAnchor="middle" fill="#64748b" fontSize="7">Freou avanço alemão</text>

            {/* 1915 - Gás */}
            <line x1="200" y1="165" x2="200" y2="210" stroke="#a78bfa" strokeWidth="1.5" />
            <rect x="150" y="208" width="100" height="27" rx="4" fill="#1c1c2e" stroke="#a78bfa" strokeWidth="1" />
            <text x="200" y="221" textAnchor="middle" fill="#c4b5fd" fontSize="8">Gás venenoso</text>
            <text x="200" y="231" textAnchor="middle" fill="#64748b" fontSize="7">Ypres, abr/1915</text>

            {/* 1918 - Armistício */}
            <line x1="590" y1="165" x2="590" y2="210" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="538" y="208" width="105" height="27" rx="4" fill="#0d2010" stroke="#22c55e" strokeWidth="1" />
            <text x="590" y="221" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold">Armistício</text>
            <text x="590" y="231" textAnchor="middle" fill="#94a3b8" fontSize="7">11/11/1918 — 11h11</text>

            {/* 1919 - Versalhes */}
            <line x1="710" y1="165" x2="710" y2="210" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="660" y="208" width="100" height="27" rx="4" fill="#1c1200" stroke="#f59e0b" strokeWidth="1" />
            <text x="710" y="221" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">Versalhes</text>
            <text x="710" y="231" textAnchor="middle" fill="#94a3b8" fontSize="7">28/06/1919</text>

            {/* Nota */}
            <text x="400" y="300" textAnchor="middle" fill="#64748b" fontSize="9">
              Frente Ocidental: impasse de quatro anos em trincheiras entre o Canal da Mancha e a Suíça
            </text>
            <text x="400" y="315" textAnchor="middle" fill="#64748b" fontSize="9">
              Total de mortos: aprox. 17 milhões (militares e civis)
            </text>
          </svg>
          <figcaption>
            Cronologia dos principais eventos da Primeira Guerra Mundial, de 1914 a 1919.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Virada</span>
        <h2>6. A Virada de 1917: Rússia Sai, EUA Entram</h2>
        <p>
          O ano de 1917 foi decisivo. Em fevereiro, a{" "}
          <strong>Revolução Russa</strong> derrubou o czar e o governo
          provisório de Kerensky tentou manter a Rússia na guerra — sem sucesso.
          Em outubro de 1917, os bolcheviques tomaram o poder e negociaram o
          <strong> Tratado de Brest-Litovsk</strong> (março 1918) com a
          Alemanha, cedendo enormes territórios para sair da guerra.
        </p>
        <p>
          Mas no mesmo ano, os <strong>Estados Unidos</strong> entraram no
          conflito pelo lado dos Aliados (6 de abril de 1917). Os motivos:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚢</span>
            <h3>Afundamento do Lusitânia (1915)</h3>
            <p>
              O navio britânico foi torpedeado por um U-Boot alemão, matando
              1.198 pessoas — 128 americanas. A opinião pública americana
              se voltou contra a Alemanha.
            </p>
          </div>
          <div className="lesson-card">
            <span>📬</span>
            <h3>Telegrama Zimmermann (jan. 1917)</h3>
            <p>
              O ministro alemão das relações exteriores propôs ao México uma
              aliança contra os EUA, prometendo devolver o Texas, Novo México
              e Arizona. Interceptado pelos britânicos e publicado nos EUA,
              foi o fator decisivo para a entrada americana.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚓</span>
            <h3>Guerra Submarina Irrestrita</h3>
            <p>
              Em fevereiro de 1917, a Alemanha anunciou que afundaria qualquer
              navio neutro em zona de guerra — violando a neutralidade americana
              e afetando o comércio.
            </p>
          </div>
        </div>
        <p>
          Cerca de <strong>2 milhões de soldados americanos</strong> chegaram
          à Europa, revigorando os Aliados exaustos. A Alemanha, agora sem o
          alívio da Frente Oriental, não resistiu. Em 11 de novembro de 1918
          às 11h11, entrou em vigor o armistício.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Consequências</span>
        <h2>7. O Tratado de Versalhes e o Redecenho do Mundo</h2>
        <p>
          O Tratado de Versalhes (28 de junho de 1919) foi assinado no mesmo
          salão do palácio onde o Kaiser prussiano havia proclamado o Império
          Alemão em 1871 — uma humilhação simbólica deliberada. Seus principais
          termos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cláusula</th>
                <th>Conteúdo</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artigo 231 (Culpa de Guerra)</td>
                <td>Alemanha aceita responsabilidade total pela guerra</td>
                <td>Humilhação; base jurídica para reparações</td>
              </tr>
              <tr>
                <td>Reparações</td>
                <td>132 bilhões de marcos-ouro</td>
                <td>Destruição da economia alemã; hiperinflação 1923</td>
              </tr>
              <tr>
                <td>Perdas territoriais</td>
                <td>Alsácia-Lorena (França), Posen/West Prussia (Polônia)</td>
                <td>Perda de 13% do território e 10% da população</td>
              </tr>
              <tr>
                <td>Limitação militar</td>
                <td>Exército máximo de 100.000 homens; sem marinha de guerra</td>
                <td>Impotência militar alemã</td>
              </tr>
              <tr>
                <td>Liga das Nações</td>
                <td>Criada pela proposta de Wilson; EUA não aderem</td>
                <td>Organização internacional fragilizada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A dissolução dos impérios criou novos estados: Áustria, Hungria,
          Tchecoslováquia, Iugoslávia (fim do Império Austro-Húngaro); Finlândia,
          Estônia, Letônia, Lituânia, Polônia (territórios do Império Russo);
          Turquia moderna e mandatos britânicos/franceses no Oriente Médio
          (fim do Império Otomano).
        </p>
        <div className="lesson-highlight">
          <strong>O mito da "Punhalada pelas Costas" (Dolchstoß):</strong> após
          a derrota, líderes militares alemães espalharam a narrativa de que a
          Alemanha havia sido traída internamente por judeus e socialistas — não
          derrotada militarmente. Esse mito foi fundamental para a ascensão de
          Hitler e do nazismo nos anos seguintes.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">África e Ásia</span>
        <h2>8. A Guerra e o Mundo Colonial</h2>
        <p>
          A Primeira Guerra também teve impactos profundos nos povos colonizados.
          As colônias alemãs foram redistribuídas como "mandatos" da Liga das
          Nações entre os vencedores: Togo e Camarões (França/Grã-Bretanha),
          Tanganica (Grã-Bretanha), África do Sudoeste Alemã/Namíbia
          (África do Sul), e ilhas do Pacífico (Japão/Austrália).
        </p>
        <p>
          O princípio de <strong>autodeterminação dos povos</strong>, proclamado
          pelos Catorze Pontos de Wilson, foi aplicado apenas aos europeus.
          Na Conferência de Paz em Paris, Ho Chi Minh (então com 29 anos)
          tentou apresentar um memorando pedindo a independência do Vietnã
          do colonialismo francês — foi completamente ignorado. A decepção com
          o Ocidente o levaria ao comunismo.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>9. A "Der de Todas as Guerras" e as Sementes da Segunda</h2>
        <p>
          A Primeira Guerra foi chamada de "The War to End All Wars" — a guerra
          para acabar com todas as guerras. O saldo foi devastador:
          aproximadamente <strong>17 milhões de mortos</strong> (9 milhões
          de militares, 8 milhões de civis), 20 milhões de feridos e uma geração
          europeia inteira dizimada. A pandemia de gripe espanhola de 1918–1919,
          facilitada pelo deslocamento das tropas, matou mais 50–100 milhões
          de pessoas em todo o mundo.
        </p>
        <p>
          Mas longe de acabar com as guerras, Versalhes plantou as sementes
          da Segunda Guerra Mundial: a humilhação alemã, a crise econômica
          dos anos 1920–30, o mito da punhalada pelas costas e o resentimento
          nacional foram o caldo de cultura que permitiu a ascensão de Hitler
          em 1933.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>O acrônimo MAIN sintetiza as causas estruturais da Primeira Guerra Mundial. O que significa cada letra e qual a relação entre elas?</p>}
          options={[
            { letter: "a", text: "Militarismo, Aliança, Imperialismo, Nacionalismo — causas independentes, cada uma suficiente por si só para gerar a guerra." },
            { letter: "b", text: "Militarismo, Aliança, Imperialismo, Nacionalismo — causas interdependentes que, combinadas, criaram um ambiente tão tenso que um evento específico (o assassinato em Sarajevo) foi suficiente para deflagrar o conflito.", correct: true },
            { letter: "c", text: "Monarquia, Anarquismo, Industrialismo, Nazismo — as quatro ideologias que se enfrentaram na Primeira Guerra." },
            { letter: "d", text: "Marinha, Artilharia, Infantaria, Navegação — os quatro pilares da estratégia militar europeia antes de 1914." },
          ]}
          resolution={<p>MAIN representa Militarismo (corrida armamentista, plano Schlieffen, corrida naval), Alianças (Tríplice Aliança vs Tríplice Entente), Imperialismo (rivalidade colonial) e Nacionalismo (paneslavismo, pangermanismo, irredentismo). Nenhuma causa isolada gerou a guerra — foi a combinação de todas elas que criou um sistema em que o assassinato de um arquiduque em Sarajevo (28/06/1914) ativou o mecanismo de alianças e declarações de guerra em cascata. A guerra não foi 'inevitável', mas o sistema internacional de 1914 tornava um conflito de grande escala extremamente provável.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>A guerra de trincheiras na Frente Ocidental resultou num impasse de quase quatro anos. Qual combinação de fatores explica melhor por que os ataques repetidos resultavam em altíssimas baixas sem avanços territoriais significativos?</p>}
          options={[
            { letter: "a", text: "A falta de motivação dos soldados e a covardia dos generais, que preferiam permanecer nas trincheiras." },
            { letter: "b", text: "A superioridade numérica permanente dos defensores em relação aos atacantes." },
            { letter: "c", text: "A combinação de metralhadora e arame farpado tornava o ataque frontal suicida: os assaltantes cruzavam campo aberto enquanto os defensores operavam metralhadoras de posições fixas, e a artilharia pesada destruía o terreno sem destruir as posições defensivas subterrâneas.", correct: true },
            { letter: "d", text: "A ausência de tecnologia bélica avançada, pois aviões e tanques só foram inventados após a guerra." },
          ]}
          resolution={<p>A guerra de trincheiras criou um paradoxo tático: a defesa era muito mais eficiente que o ataque. A metralhadora era devastadora contra tropas que avançavam em campo aberto (na Batalha do Somme, 57.470 britânicos caíram no primeiro dia). Os bombardeios de artilharia precediam os ataques, mas alertavam os defensores e destruíam o terreno sem eliminar as posições subterrâneas. O arame farpado retardava o avanço da infantaria, expondo-a ainda mais. Resultado: anos de impasse, com avanços medidos em metros e baixas em centenas de milhares.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>O historiador John Maynard Keynes, participante da Conferência de Paris, afirmou em 1919 que o Tratado de Versalhes era 'uma paz cartaginesa' que destruiria a economia europeia. Como essa afirmação se relaciona com os eventos históricos posteriores?</p>}
          options={[
            { letter: "a", text: "Keynes estava errado: o Tratado foi brando e a Alemanha se recuperou rapidamente, não havendo relação entre Versalhes e o nazismo." },
            { letter: "b", text: "Keynes foi presciente: as reparações draconinas, a cláusula de culpa de guerra e as humilhações impostas à Alemanha criaram as condições econômicas e psicológicas que alimentaram o resentimento nacionalista, a ascensão de Hitler e, em última análise, a Segunda Guerra Mundial.", correct: true },
            { letter: "c", text: "Keynes se referia apenas à situação da França, que teria sido prejudicada pelo tratado tanto quanto a Alemanha." },
            { letter: "d", text: "A previsão de Keynes foi irrelevante, pois o Plano Marshall impediu qualquer consequência econômica do Tratado." },
          ]}
          resolution={<p>Keynes publicou 'As Consequências Econômicas da Paz' (1919) prevendo que as reparações impossíveis (132 bilhões de marcos-ouro) destruiriam a economia alemã e desestabilizariam toda a Europa. Sua previsão provou-se certeira: a hiperinflação de 1923 (quando um pão custava bilhões de marcos), a Grande Depressão de 1929 e o resentimento gerado pela 'cláusula de culpa de guerra' (Artigo 231) criaram o caldo de cultura perfeito para Hitler — que prometia desfazer Versalhes e restaurar a grandeza alemã. Winston Churchill chamou Versalhes de 'trégua de 20 anos', não paz.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) 'Pelas cláusulas do Tratado de Versalhes, a Alemanha reconhecia que ela e seus aliados eram os únicos responsáveis por todos os danos sofridos pelos governos aliados e associados e seus cidadãos em consequência da guerra.' (Artigo 231 do Tratado de Versalhes, 1919). Sobre o impacto histórico dessa cláusula, é correto afirmar:</p>}
          options={[
            { letter: "a", text: "O Artigo 231 foi aceito sem contestação pela população alemã, que reconhecia a responsabilidade pela guerra." },
            { letter: "b", text: "A cláusula foi apenas simbólica, sem implicações econômicas ou políticas para a Alemanha." },
            { letter: "c", text: "O Artigo 231 forneceu a base jurídica para as reparações econômicas e gerou profundo resentimento na Alemanha, contribuindo para o surgimento do nazismo e a narrativa de que os alemães haviam sido traídos e humilhados pelos vencedores.", correct: true },
            { letter: "d", text: "A cláusula foi posteriormente revogada pelo governo de Weimar, eliminating o problema das reparações." },
          ]}
          resolution={<p>O Artigo 231, conhecido como 'cláusula de culpa de guerra' (Kriegsschuldartikel), foi a base legal para impor reparações de 132 bilhões de marcos-ouro à Alemanha. Além do impacto econômico devastador (hiperinflação 1923, fragilidade financeira que agravou a Depressão de 1929), a cláusula gerou enorme resentimento político. Hitler explorou diretamente essa humilhação: prometeu rasgar Versalhes, recuperar os territórios perdidos e restaurar a honra alemã. O mito da 'punhalada pelas costas' (Dolchstoß) — de que a Alemanha não foi derrotada militarmente, mas traída por judeus e socialistas — também cresceu nesse contexto.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Vestibular UNICAMP adaptado) Em 1919, Ho Chi Minh foi a Paris para apresentar uma petição pedindo a independência do Vietnã do colonialismo francês, invocando os 'Catorze Pontos' de Wilson. Ele foi ignorado. Esse episódio ilustra qual contradição fundamental da Conferência de Paz?</p>}
          options={[
            { letter: "a", text: "A contradição entre o princípio de autodeterminação dos povos proclamado por Wilson e sua aplicação restrita aos povos europeus, excluindo as populações colonizadas da Ásia, África e Oriente Médio.", correct: true },
            { letter: "b", text: "A contradição entre o pacifismo dos Catorze Pontos e a militarização imposta à Alemanha pelo Tratado." },
            { letter: "c", text: "A contradição entre os interesses americanos de expandir seu império colonial e o discurso de paz." },
            { letter: "d", text: "A contradição entre a criação da Liga das Nações e a recusa dos EUA em assumir responsabilidades internacionais." },
          ]}
          resolution={<p>O episódio de Ho Chi Minh em Paris (1919) é emblemático da hipocrisia da ordem internacional criada em Versalhes. Wilson proclamou o direito à autodeterminação dos povos como um dos Catorze Pontos — mas esse princípio foi aplicado exclusivamente aos povos europeus dos impérios derrotados (austro-húngaro, alemão, otomano, russo). Os povos colonizados da Ásia, África e Oriente Médio foram ignorados ou, pior, tiveram suas terras redistribuídas como 'mandatos' entre as potências vencedoras. A decepção de Ho Chi Minh com o liberalismo ocidental o levou ao comunismo — e décadas depois ao liderança da resistência vietnamita contra França e EUA.</p>}
        />
      </section>
    </article>
  );
}
