"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 42</span>
          <h1>Revolução Russa e União Soviética</h1>
          <p>
            A Revolução Russa de 1917 foi o evento político mais radical do
            século XX: a primeira tomada de poder por um partido comunista que
            pretendia construir uma sociedade sem classes. Da queda do czar ao
            colapso da URSS em 1991, passando pelo terror stalinista e a
            industrialização forçada, a história soviética é um laboratório
            de utopias e tragédias que moldou a geopolítica global por mais
            de sete décadas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Antecedentes</span>
        <h2>1. A Rússia Czarista: Atraso, Opressão e as Primeiras Crises</h2>
        <p>
          No início do século XX, o Império Russo era uma das maiores
          contradições do mundo moderno: um território continental de 22 milhões
          de km² com industrialização concentrada em Moscou e Petrogrado, e
          um imenso interior agrário onde 80% da população vivia como
          camponeses — a servidão havia sido abolida apenas em 1861, mas sem
          distribuição de terra.
        </p>
        <p>
          O czar <strong>Nicolau II</strong> governava com poderes absolutos,
          apoiado pela nobreza (aristocracia), pela Igreja Ortodoxa e pela
          <em> Okhrana</em> (polícia política secreta). A industrialização,
          financiada por capital estrangeiro, gerou um proletariado urbano
          miserável concentrado em poucas cidades, criando as condições para
          a organização política.
        </p>

        <div className="lesson-highlight">
          <strong>A Revolução de 1905 — um ensaio geral:</strong> após a
          derrota humilhante na Guerra Russo-Japonesa (1904–05), operários
          marcharam pacificamente ao Palácio de Inverno no "Domingo Sangrento"
          (22 de janeiro de 1905). A guarda czarista atirou na multidão,
          matando centenas. A revolta se espalhou, surgindo os primeiros
          <em> sovietes</em> (conselhos de operários) — incluindo o de
          Petrogrado, liderado pelo jovem Leon Trotsky. O czar respondeu com
          o Manifesto de Outubro: prometeu uma Duma (parlamento), mas logo
          esvaziou seu poder.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Problema</th>
                <th>Situação</th>
                <th>Consequência Política</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Questão agrária</td>
                <td>80% da população era camponesa sem terra própria</td>
                <td>Apoio camponês às promessas bolcheviques de "Terra"</td>
              </tr>
              <tr>
                <td>Condições de trabalho</td>
                <td>Jornadas de 12–16h, sem direitos, salários de subsistência</td>
                <td>Formação de um proletariado revolucionário</td>
              </tr>
              <tr>
                <td>Autocracia</td>
                <td>Czar com poderes absolutos; Duma sem poder real</td>
                <td>Ausência de canais legítimos de participação política</td>
              </tr>
              <tr>
                <td>Guerra (1914–17)</td>
                <td>2 milhões de mortos, derrota iminente, desabastecimento</td>
                <td>Colapso da legitimidade do czar e do governo provisório</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fevereiro 1917</span>
        <h2>2. A Revolução de Fevereiro: A Queda do Czar</h2>
        <p>
          Em fevereiro de 1917 (março pelo calendário ocidental), uma onda de
          greves e protestos por pão e contra a guerra tomou Petrogrado. O
          decisivo foi quando os soldados se recusaram a atirar nos
          manifestantes e aderiram à revolução. O czar Nicolau II abdicou em
          15 de março de 1917 — encerrando 300 anos da dinastia Romanov.
        </p>
        <p>
          Instalou-se um <strong>governo provisório burguês</strong> (liderado
          por Alexander Kerensky) que cometeu um erro fatal: manteve a Rússia
          na Primeira Guerra. Ao mesmo tempo, ressurgiu o poder dos{" "}
          <strong>sovietes</strong> — conselhos de operários, soldados e
          camponeses que representavam as massas. O "duplo poder" (governo
          provisório + sovietes) era instável por definição.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Bolcheviques</span>
        <h2>3. Lenin, Trotsky e os Bolcheviques</h2>
        <p>
          <strong>Vladímir Lênin</strong> liderava os bolcheviques desde o
          início do século — um partido de revolucionários profissionais,
          disciplinados, organizado segundo o princípio do "centralismo
          democrático". Em abril de 1917, a Alemanha — interessada em tirar a
          Rússia da guerra — permitiu que Lenin viajasse da Suíça para
          Petrogrado num "trem lacrado".
        </p>
        <p>
          Lenin chegou com as <strong>"Teses de Abril"</strong>: o governo
          provisório não merecia apoio; os sovietes deveriam tomar o poder;
          a paz era imediata e necessária; a terra seria distribuída aos
          camponeses. O slogan era simples e poderoso: <em>"Paz, Terra,
          Pão"</em>.
        </p>
        <p>
          <strong>Leon Trotsky</strong> — brilhante orador, organizador
          genial — tornou-se líder do Soviete de Petrogrado e o principal
          arquiteto da tomada do poder.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Teses de Abril (Lenin)</h3>
            <p>
              Recusa do apoio ao governo provisório; proposta de "todo o poder
              aos sovietes"; saída da guerra; distribuição de terras.
            </p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>"Paz, Terra, Pão"</h3>
            <p>
              O slogan bolchevique respondia às três demandas fundamentais
              da população: fim da guerra (soldados), terra (camponeses) e
              comida (trabalhadores urbanos).
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Sovietes como Poder</h3>
            <p>
              Os sovietes (conselhos) representavam trabalhadores, soldados
              e camponeses — foram a forma organizacional da democracia
              direta que os bolcheviques pretendiam usar como base do
              novo Estado.
            </p>
          </div>
        </div>
      </section>

      {/* ── SVG 1: Linha do Tempo da Rev. Russa ao Colapso ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>4. Da Revolução ao Colapso — Linha do Tempo (1905–1991)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 840 400"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 840, height: "auto" }}
            aria-label="Linha do tempo da Revolução Russa ao colapso da URSS 1905 a 1991"
          >
            <rect width="840" height="400" fill="#0f172a" rx="12" />

            <text x="420" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Da Revolução ao Colapso da URSS (1905–1991)
            </text>

            {/* Linha */}
            <line x1="30" y1="180" x2="810" y2="180" stroke="#334155" strokeWidth="3" />

            {/* Pontos e anos */}
            {[
              { x: 50, year: "1905" },
              { x: 140, year: "1917" },
              { x: 210, year: "1921" },
              { x: 280, year: "1924" },
              { x: 360, year: "1928" },
              { x: 460, year: "1941" },
              { x: 560, year: "1953" },
              { x: 650, year: "1964" },
              { x: 730, year: "1985" },
              { x: 800, year: "1991" },
            ].map(({ x, year }) => (
              <g key={year}>
                <circle cx={x} cy={180} r={5} fill="#475569" />
                <text x={x} y={200} textAnchor="middle" fill="#64748b" fontSize={year.length > 4 ? "7" : "9"}>{year}</text>
              </g>
            ))}

            {/* Eventos acima */}
            <line x1="50" y1="172" x2="50" y2="135" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="5" y="108" width="90" height="30" rx="4" fill="#1a0808" stroke="#ef4444" strokeWidth="1" />
            <text x="50" y="121" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Rev. 1905</text>
            <text x="50" y="132" textAnchor="middle" fill="#64748b" fontSize="7">Dom. Sangrento</text>

            <line x1="140" y1="172" x2="140" y2="120" stroke="#f59e0b" strokeWidth="2" />
            <rect x="95" y="93" width="90" height="30" rx="4" fill="#1c1200" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="140" y="106" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">Rev. Outubro</text>
            <text x="140" y="117" textAnchor="middle" fill="#64748b" fontSize="7">Bolcheviques tomam poder</text>

            <line x1="210" y1="172" x2="210" y2="135" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="165" y="108" width="90" height="30" rx="4" fill="#0c1929" stroke="#3b82f6" strokeWidth="1" />
            <text x="210" y="121" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">NEP</text>
            <text x="210" y="132" textAnchor="middle" fill="#64748b" fontSize="7">Lenin recua ao mercado</text>

            <line x1="280" y1="172" x2="280" y2="135" stroke="#64748b" strokeWidth="1.5" />
            <rect x="235" y="108" width="90" height="30" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="280" y="121" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Morte de Lenin</text>
            <text x="280" y="132" textAnchor="middle" fill="#64748b" fontSize="7">Stalin vs Trotsky</text>

            <line x1="360" y1="172" x2="360" y2="120" stroke="#dc2626" strokeWidth="2" />
            <rect x="310" y="93" width="100" height="30" rx="4" fill="#1a0808" stroke="#dc2626" strokeWidth="1.5" />
            <text x="360" y="106" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Stalinismo</text>
            <text x="360" y="117" textAnchor="middle" fill="#64748b" fontSize="7">Planos Quinquenais</text>

            <line x1="460" y1="172" x2="460" y2="135" stroke="#f97316" strokeWidth="1.5" />
            <rect x="415" y="108" width="90" height="30" rx="4" fill="#1c0a00" stroke="#f97316" strokeWidth="1" />
            <text x="460" y="121" textAnchor="middle" fill="#fdba74" fontSize="8" fontWeight="bold">2ª Guerra</text>
            <text x="460" y="132" textAnchor="middle" fill="#64748b" fontSize="7">URSS vs Alemanha</text>

            <line x1="560" y1="172" x2="560" y2="135" stroke="#64748b" strokeWidth="1.5" />
            <rect x="515" y="108" width="90" height="30" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="560" y="121" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Morte de Stalin</text>
            <text x="560" y="132" textAnchor="middle" fill="#64748b" fontSize="7">Kruschev (desstalinização)</text>

            <line x1="730" y1="172" x2="730" y2="135" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="685" y="108" width="90" height="30" rx="4" fill="#0d2010" stroke="#22c55e" strokeWidth="1" />
            <text x="730" y="121" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold">Gorbachev</text>
            <text x="730" y="132" textAnchor="middle" fill="#64748b" fontSize="7">Glasnost / Perestroika</text>

            <line x1="800" y1="172" x2="800" y2="120" stroke="#ef4444" strokeWidth="2" />
            <rect x="753" y="93" width="80" height="30" rx="4" fill="#1a0808" stroke="#ef4444" strokeWidth="1.5" />
            <text x="793" y="106" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Colapso</text>
            <text x="793" y="117" textAnchor="middle" fill="#64748b" fontSize="7">25/12/1991</text>

            {/* Eventos abaixo */}
            <line x1="140" y1="188" x2="140" y2="225" stroke="#64748b" strokeWidth="1.5" />
            <rect x="95" y="223" width="90" height="30" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="140" y="236" textAnchor="middle" fill="#94a3b8" fontSize="8">Guerra Civil</text>
            <text x="140" y="247" textAnchor="middle" fill="#64748b" fontSize="7">1918–1921</text>

            <line x1="360" y1="188" x2="360" y2="225" stroke="#dc2626" strokeWidth="1.5" />
            <rect x="305" y="223" width="110" height="30" rx="4" fill="#1a0808" stroke="#dc2626" strokeWidth="1" />
            <text x="360" y="236" textAnchor="middle" fill="#fca5a5" fontSize="8">Gulag / Holodomor</text>
            <text x="360" y="247" textAnchor="middle" fill="#64748b" fontSize="7">Grandes Expurgos (1936–38)</text>

            <line x1="460" y1="188" x2="460" y2="225" stroke="#a78bfa" strokeWidth="1.5" />
            <rect x="415" y="223" width="90" height="30" rx="4" fill="#1c1c2e" stroke="#a78bfa" strokeWidth="1" />
            <text x="460" y="236" textAnchor="middle" fill="#c4b5fd" fontSize="8">27 mi mortos</text>
            <text x="460" y="247" textAnchor="middle" fill="#64748b" fontSize="7">Maior perda humana</text>

            <line x1="650" y1="188" x2="650" y2="225" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="605" y="223" width="90" height="30" rx="4" fill="#0c1929" stroke="#3b82f6" strokeWidth="1" />
            <text x="650" y="236" textAnchor="middle" fill="#93c5fd" fontSize="8">Corrida Espacial</text>
            <text x="650" y="247" textAnchor="middle" fill="#64748b" fontSize="7">Sputnik 1957</text>

            {/* Nota */}
            <text x="420" y="310" textAnchor="middle" fill="#64748b" fontSize="9">
              Da Revolução de 1905 (ensaio) ao colapso de 1991: 86 anos de história soviética
            </text>
            <text x="420" y="325" textAnchor="middle" fill="#64748b" fontSize="9">
              A URSS chegou a 15 repúblicas e 300 milhões de habitantes no auge
            </text>
          </svg>
          <figcaption>
            Cronologia da Revolução Russa ao colapso da União Soviética (1905–1991).
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outubro 1917</span>
        <h2>5. A Revolução de Outubro e as Primeiras Medidas</h2>
        <p>
          Na noite de <strong>24 para 25 de outubro de 1917</strong> (pelo
          calendário juliano russo), as Guardas Vermelhas bolcheviques tomaram
          os pontos estratégicos de Petrogrado — estações, pontes, prédios de
          governo. O cruzador <em>Aurora</em>, ancorado no rio Neva, disparou
          um tiro de aviso sinalando o início do ataque ao Palácio de Inverno,
          sede do governo provisório.
        </p>
        <p>
          O II Congresso dos Sovietes proclamou o poder dos sovietes e aprovou
          os primeiros decretos bolcheviques: o Decreto da Paz (proposta de
          armistício imediato) e o Decreto da Terra (abolição da propriedade
          privada das terras senhoriais, distribuídas aos camponeses).
        </p>
        <div className="lesson-highlight">
          <strong>Tratado de Brest-Litovsk (março de 1918):</strong> para
          cumprir a promessa de paz, Lenin negociou com a Alemanha cedendo
          imensas porções do território imperial — Ucrânia, Belarus, Estados
          Bálticos, Finlândia, parte da Polônia. Uma paz humilhante, mas
          necessária para consolidar o poder bolchevique internamente.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Guerra Civil</span>
        <h2>6. A Guerra Civil (1918–1921) e o Comunismo de Guerra</h2>
        <p>
          A Revolução não foi aceita pacificamente. Entre 1918 e 1921, o
          <strong> Exército Vermelho</strong> (criado e liderado por Trotsky)
          enfrentou o <strong>Exército Branco</strong> — uma coalização de
          generais czaristas, liberais, socialistas anti-bolcheviques e,
          crucialmente, forças de <strong>14 países estrangeiros</strong> que
          intervieram militarmente: EUA, Grã-Bretanha, França e Japão,
          entre outros.
        </p>
        <p>
          Para financiar a guerra, os bolcheviques adotaram o{" "}
          <strong>Comunismo de Guerra</strong>: requisições forçadas de
          alimentos dos camponeses, estatização radical da indústria,
          mobilização total da sociedade. Em julho de 1918, a família imperial
          — o czar Nicolau II, a czarina Alexandra e seus cinco filhos — foi
          executada em Ecaterimburgo.
        </p>
        <p>
          O Exército Vermelho venceu a guerra civil em 1921, mas o país estava
          destruído. A fome de 1921–22 matou cerca de 5 milhões de pessoas.
          O regime bolchevique sobreviveu — mas precisou fazer concessões.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">NEP e Lenin</span>
        <h2>7. A NEP e a Morte de Lenin</h2>
        <p>
          Em 1921, Lenin reconheceu que o Comunismo de Guerra havia esgotado
          a sociedade e gerado a fome. Lançou a{" "}
          <strong>Nova Política Econômica (NEP)</strong>: um recuo tático que
          permitia o funcionamento do mercado livre em pequena escala —
          camponeses podiam vender o excedente, pequenos comerciantes operavam,
          empresas estrangeiras podiam investir. O Estado mantinha o controle das
          "alturas de comando" (grandes indústrias, bancos, comércio exterior).
        </p>
        <p>
          A NEP gerou recuperação econômica real entre 1921 e 1928. Lenin a
          defendia como medida necessária e temporária. Mas Lenin morreu em
          21 de janeiro de 1924 — e a luta pela sucessão entre{" "}
          <strong>Stalin</strong> e <strong>Trotsky</strong> redesenharia
          completamente a trajetória soviética.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Trotsky</th>
                <th>Stalin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estratégia internacional</td>
                <td>"Revolução Permanente" — exportar a revolução ao mundo</td>
                <td>"Socialismo num só país" — fortalecer a URSS primeiro</td>
              </tr>
              <tr>
                <td>Base de apoio</td>
                <td>Intelectuais, veteranos revolucionários</td>
                <td>Burocracia do partido (aparatchiki)</td>
              </tr>
              <tr>
                <td>Destino</td>
                <td>Exilado em 1929; assassinado no México (1940)</td>
                <td>Consolidou o poder total; governou até 1953</td>
              </tr>
              <tr>
                <td>Visão da NEP</td>
                <td>Medida temporária; acelerar industrialização</td>
                <td>Acabou com ela em 1928 — Planos Quinquenais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 2: Lenin x Stalin — Diagrama Comparativo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>8. NEP (Lenin) vs Planos Quinquenais (Stalin)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 380"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 760, height: "auto" }}
            aria-label="Diagrama comparativo entre Lenin (NEP) e Stalin (Planos Quinquenais)"
          >
            <rect width="760" height="380" fill="#0f172a" rx="12" />

            <text x="380" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Projetos em Disputa: Lenin (NEP) vs Stalin
            </text>

            {/* Coluna Lenin */}
            <rect x="20" y="50" width="330" height="300" rx="8" fill="#0c1929" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="185" y="75" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold">LENIN — NEP (1921–1928)</text>

            <rect x="35" y="90" width="300" height="35" rx="4" fill="#1e3a5f" />
            <text x="185" y="107" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Economia</text>
            <text x="185" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">Mercado livre limitado; camponeses vendem excedente</text>

            <rect x="35" y="135" width="300" height="35" rx="4" fill="#1e3a5f" />
            <text x="185" y="152" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Internacionalismo</text>
            <text x="185" y="165" textAnchor="middle" fill="#94a3b8" fontSize="9">Apoio à Revolução Mundial via Internacional Comunista</text>

            <rect x="35" y="180" width="300" height="35" rx="4" fill="#1e3a5f" />
            <text x="185" y="197" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Método Político</text>
            <text x="185" y="210" textAnchor="middle" fill="#94a3b8" fontSize="9">Debate interno no partido; pluralismo bolchevique</text>

            <rect x="35" y="225" width="300" height="35" rx="4" fill="#1e3a5f" />
            <text x="185" y="242" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Campesinato</text>
            <text x="185" y="255" textAnchor="middle" fill="#94a3b8" fontSize="9">Aliança operário-camponesa (smychka)</text>

            <rect x="35" y="270" width="300" height="35" rx="4" fill="#1e3a5f" />
            <text x="185" y="287" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Resultado</text>
            <text x="185" y="300" textAnchor="middle" fill="#86efac" fontSize="9">Recuperação econômica; morte em 1924</text>

            {/* VS */}
            <text x="380" y="205" textAnchor="middle" fill="#f59e0b" fontSize="22" fontWeight="bold">VS</text>

            {/* Coluna Stalin */}
            <rect x="410" y="50" width="330" height="300" rx="8" fill="#1a0a0a" stroke="#ef4444" strokeWidth="1.5" />
            <text x="575" y="75" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="bold">STALIN — Planos Quinquenais</text>

            <rect x="425" y="90" width="300" height="35" rx="4" fill="#3b1f1f" />
            <text x="575" y="107" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Economia</text>
            <text x="575" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">Industrialização forçada; estatização total</text>

            <rect x="425" y="135" width="300" height="35" rx="4" fill="#3b1f1f" />
            <text x="575" y="152" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Geopolítica</text>
            <text x="575" y="165" textAnchor="middle" fill="#94a3b8" fontSize="9">"Socialismo num só país" — fortalecer a URSS</text>

            <rect x="425" y="180" width="300" height="35" rx="4" fill="#3b1f1f" />
            <text x="575" y="197" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Método Político</text>
            <text x="575" y="210" textAnchor="middle" fill="#94a3b8" fontSize="9">Terror; Gulag; Grandes Expurgos; culto à personalidade</text>

            <rect x="425" y="225" width="300" height="35" rx="4" fill="#3b1f1f" />
            <text x="575" y="242" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Campesinato</text>
            <text x="575" y="255" textAnchor="middle" fill="#94a3b8" fontSize="9">Coletivização forçada; kulaks eliminados; Holodomor</text>

            <rect x="425" y="270" width="300" height="35" rx="4" fill="#3b1f1f" />
            <text x="575" y="287" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Resultado</text>
            <text x="575" y="300" textAnchor="middle" fill="#fca5a5" fontSize="9">2ª potência industrial; milhões de mortos</text>

            {/* Nota */}
            <text x="380" y="365" textAnchor="middle" fill="#64748b" fontSize="9">
              Os Planos Quinquenais (1928–32 e 1932–37) transformaram a URSS de país agrário em 2ª potência industrial em 10 anos
            </text>
          </svg>
          <figcaption>
            Comparação entre o projeto da NEP (Lenin) e o stalinismo dos Planos Quinquenais.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Stalinismo</span>
        <h2>9. O Stalinismo: Industrialização, Terror e Gulag</h2>
        <p>
          Com Trotsky derrotado e exilado em 1929 (assassinado no México em
          1940), Stalin lançou uma revolução de cima para baixo. Os{" "}
          <strong>Planos Quinquenais</strong> (1928–1932 e 1932–1937)
          transformaram a URSS de país agrário na segunda potência industrial
          do mundo em menos de uma década: siderúrgicas, hidrelétricas,
          indústria pesada.
        </p>
        <p>
          O preço foi devastador. A <strong>coletivização da agricultura</strong>
          {" "}forçou os camponeses para os kolkhozes (fazendas coletivas) e
          sovchozes (estatais). Os kulaks (camponeses prósperos) foram
          "deskulacizados" — deportados, presos ou mortos. A resistência
          camponesa e o colapso da produção geraram o{" "}
          <strong>Holodomor</strong> na Ucrânia (1932–33): uma fome artificial
          que matou entre 3 e 7 milhões de pessoas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Instrumento do Terror</th>
                <th>Descrição</th>
                <th>Vítimas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gulag</td>
                <td>Campo de trabalho forçado; rede de prisões siberianas</td>
                <td>18 milhões de pessoas passaram; ~1,5 mi mortos</td>
              </tr>
              <tr>
                <td>Grandes Expurgos (1936–38)</td>
                <td>Julgamentos de Moscou; Stalin elimina rivais e geração revolucionária</td>
                <td>~750.000 executados; milhões presos</td>
              </tr>
              <tr>
                <td>Holodomor</td>
                <td>Fome artificial na Ucrânia por coletivização forçada</td>
                <td>3–7 milhões de mortos (debatido entre historiadores)</td>
              </tr>
              <tr>
                <td>Deskulacização</td>
                <td>Eliminação dos camponeses "ricos" (kulaks)</td>
                <td>1,8 mi deportados; centenas de milhares mortos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os <strong>Grandes Expurgos</strong> (1936–1938) foram os mais
          aterrorizantes: Stalin colocou no banco dos réus os próprios
          companheiros de Lênin (Zinoviev, Kamenev, Bukharin, Tukhachevsky),
          que "confessaram" crimes impossíveis em julgamentos encenados. A
          geração que havia feito a Revolução foi exterminada pelo próprio
          regime que criara.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Colapso</span>
        <h2>10. O Fim da URSS: Gorbachev e a Dissolução (1985–1991)</h2>
        <p>
          Quando Mikhail <strong>Gorbachev</strong> chegou ao poder em 1985, a
          URSS enfrentava estagnação econômica, derrota no Afeganistão (1979–89),
          tecnologia atrasada e uma sociedade sufocada pelo sistema burocrático.
          Gorbachev lançou duas reformas históricas:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗞️</span>
            <h3>Glasnost (Transparência)</h3>
            <p>
              Abertura política, liberdade de imprensa, possibilidade de
              criticar o governo. Revelou os crimes de Stalin e as
              ineficiências do sistema — criando demandas por mais mudanças.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Perestroika (Reestruturação)</h3>
            <p>
              Reforma econômica que introduzia elementos de mercado na
              economia planejada. Gerou caos econômico sem trazer os
              benefícios prometidos — a situação piorou antes de melhorar.
            </p>
          </div>
        </div>
        <p>
          As reformas desencadearam forças que Gorbachev não conseguia
          controlar. Em 1989, o <strong>Muro de Berlim caiu</strong> (9 de
          novembro) — símbolo do fim da Guerra Fria. Os países do Leste
          Europeu se libertaram do controle soviético. Em agosto de 1991,
          um golpe conservador contra Gorbachev fracassou, acelerando a
          desintegração. Em <strong>25 de dezembro de 1991</strong>, Gorbachev
          renunciou e a URSS foi formalmente dissolvida em 15 repúblicas
          independentes.
        </p>
        <div className="lesson-highlight">
          <strong>Por que a URSS colapsou?</strong> Não há consenso
          historiográfico. Algumas interpretações: (1) as contradições
          econômicas internas do socialismo de Estado; (2) o peso da
          corrida armamentista e da Guerra Fria; (3) as reformas de
          Gorbachev que abriram a caixa de Pandora das nacionalidades e
          liberdades; (4) a derrota no Afeganistão como "Vietnã soviético".
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A Revolução de Outubro de 1917 foi liderada pelos bolcheviques. Qual era o slogan central que explica o apoio popular ao movimento bolchevique?</p>}
          options={[
            { letter: "a", text: "'Liberdade, Igualdade, Fraternidade' — os ideais iluministas adaptados ao contexto russo." },
            { letter: "b", text: "'Paz, Terra, Pão' — atendendo às três demandas fundamentais dos soldados (paz), camponeses (terra) e trabalhadores urbanos (comida).", correct: true },
            { letter: "c", text: "'Todo o poder ao czar' — um apelo conservador à restauração da monarquia constitucional." },
            { letter: "d", text: "'Democracia, Eleições, Constituição' — proposta de implantação de um regime liberal-democrático." },
          ]}
          resolution={<p>'Paz, Terra, Pão' era o slogan bolchevique que respondia diretamente às três demandas mais urgentes da população russa em 1917: os soldados queriam sair da Primeira Guerra (Paz), os camponeses queriam a terra dos grandes proprietários (Terra) e os trabalhadores urbanos sofriam com a escassez de alimentos (Pão). Era uma plataforma política que traduzia reivindicações concretas em palavras de ordem simples — bem diferente das propostas abstratas do governo provisório de Kerensky, que insistia em continuar a guerra.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>A Nova Política Econômica (NEP), lançada por Lenin em 1921, foi descrita pelo próprio como um 'recuo tático'. O que isso significa e por que foi adotada?</p>}
          options={[
            { letter: "a", text: "Lenin reconheceu que o comunismo era inviável e decidiu restaurar o capitalismo permanentemente na URSS." },
            { letter: "b", text: "A NEP foi um recuo do comunismo de guerra para um sistema misto, permitindo mercado livre limitado, porque o comunismo de guerra havia devastado a economia e gerado fome — era necessário estabilizar a situação antes de avançar ao socialismo pleno.", correct: true },
            { letter: "c", text: "A NEP foi uma concessão ao movimento camponês que exigia o retorno do capitalismo como condição para aceitar a Revolução." },
            { letter: "d", text: "Lenin lançou a NEP para atrair capital estrangeiro americano e britânico, transformando a URSS numa economia aberta." },
          ]}
          resolution={<p>O 'Comunismo de Guerra' (1918–1921) havia requisitado forçadamente o alimento dos camponeses para alimentar as cidades e o Exército Vermelho durante a guerra civil. Com o fim do conflito, a economia estava destruída e a fome de 1921–22 ameaçava a estabilidade do regime. A NEP permitiu que camponeses vendessem o excedente no mercado, que pequenos comerciantes operassem e que empresas estrangeiras investissem — mantendo, porém, o controle estatal das 'alturas de comando' (grandes indústrias, bancos, comércio exterior). Lenin a chamou de 'recuo tático' porque pretendia retomar a marcha ao socialismo quando as condições permitissem.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>O historiador Robert Conquest estimou que o Gulag e os Grandes Expurgos (1936–38) mataram milhões de pessoas. Analise: qual função política cumpria o terror stalinista, além da punição dos oponentes reais?</p>}
          options={[
            { letter: "a", text: "O terror era puramente irracional, resultado da paranoia pessoal de Stalin, sem função política sistemática." },
            { letter: "b", text: "O terror funcionava como mecanismo de mobilização econômica: presos do Gulag forneciam mão de obra forçada e gratuita para a industrialização, ao mesmo tempo que eliminava potenciais concorrentes ao poder de Stalin, criava um clima de medo que disciplinava a sociedade e justificava o regime pela narrativa de inimigos internos constantes.", correct: true },
            { letter: "c", text: "O terror servia apenas para eliminar os traidores reais que haviam colaborado com a Alemanha nazista." },
            { letter: "d", text: "O terror foi uma resposta defensiva ao cerco capitalista externo, sem impacto interno significativo." },
          ]}
          resolution={<p>O terror stalinista era multifuncional: (1) Econômica — o Gulag fornecia mão de obra forçada para projetos como canais, ferrovias e mineração na Sibéria; (2) Política — eliminava qualquer opositor real ou potencial, incluindo a própria geração revolucionária que poderia desafiar Stalin; (3) Social — o clima de medo e delação generalizados paralisava qualquer resistência; (4) Ideológica — a narrativa de 'inimigos internos' constantes (kulaks, trotskistas, sabotadores) justificava as dificuldades econômicas e mantinha a população num estado de mobilização permanente. Os Julgamentos de Moscou, onde veteranos revolucionários 'confessaram' crimes impossíveis, eram teatros políticos para legitimar as purgas.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) 'Anuncio que a URSS deixa de existir.' (Gorbachev, 25 de dezembro de 1991). O colapso da União Soviética foi um processo de vários anos, não um evento único. Qual fator melhor explica a IMPOSSIBILIDADE de Gorbachev salvar a URSS com suas reformas?</p>}
          options={[
            { letter: "a", text: "Gorbachev foi traído pelos países ocidentais, que financiaram movimentos separatistas para destruir a URSS." },
            { letter: "b", text: "A glasnost (transparência) revelou os crimes e ineficiências do sistema soviético, criando demandas por liberdade que o sistema político não conseguia acomodar sem se dissolver; ao mesmo tempo, a perestroika desorganizou a economia sem criar alternativas eficientes, gerando caos.", correct: true },
            { letter: "c", text: "A URSS colapsou exclusivamente por causa da corrida armamentista, que esgotou seus recursos militares e econômicos." },
            { letter: "d", text: "Gorbachev deliberadamente planejou o fim da URSS para ingressar na economia de mercado ocidental." },
          ]}
          resolution={<p>O paradoxo de Gorbachev foi que suas próprias reformas aceleraram o colapso que tentavam evitar. A glasnost expôs os crimes de Stalin, as mentiras do regime soviético (incluindo Chernobyl, 1986) e as ineficiências do sistema — criando pressões por mais democracia e, nos países do Leste Europeu e nas repúblicas soviéticas, por independência. A perestroika desorganizou a economia planejada sem criar uma alternativa de mercado funcional — a situação econômica piorou. Quando o Muro de Berlim caiu (novembro 1989) e as repúblicas soviéticas começaram a declarar soberania, Gorbachev perdeu o controle do processo que havia iniciado. O golpe conservador de agosto 1991 foi a sentença final.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Vestibular FUVEST adaptado) A Revolução Russa de 1917 influenciou movimentos políticos no mundo inteiro ao longo do século XX. Qual das alternativas melhor descreve seu impacto global?</p>}
          options={[
            { letter: "a", text: "A Revolução inspirou apenas movimentos na Europa Oriental, sem repercussões significativas na Ásia, África ou América Latina." },
            { letter: "b", text: "A Revolução Russa demonstrou a viabilidade de uma alternativa ao capitalismo, inspirando partidos comunistas e movimentos de libertação nacional no mundo inteiro, moldando a Guerra Fria e influenciando diretamente processos como a Revolução Chinesa (1949), Cubana (1959) e os movimentos de descolonização africana.", correct: true },
            { letter: "c", text: "A Revolução foi rapidamente desacreditada mundialmente por causa dos crimes de Stalin, perdendo toda influência internacional já na década de 1930." },
            { letter: "d", text: "O impacto da Revolução se limitou ao campo econômico: os Planos Quinquenais foram adotados como modelo de desenvolvimento por países democráticos no Ocidente." },
          ]}
          resolution={<p>A Revolução Russa de 1917 foi o evento político mais influente do século XX em termos de impacto global. Criou a Internacional Comunista (Comintern, 1919) para exportar a revolução; inspirou os partidos comunistas que surgiram em dezenas de países nas décadas de 1920–30; influenciou diretamente Mao Tsé-Tung e a Revolução Chinesa (1949), Fidel Castro e a Revolução Cubana (1959), Ho Chi Minh no Vietnã, e os movimentos de libertação nacional na África. A existência de uma alternativa soviética ao capitalismo moldou toda a política ocidental do século XX — o Estado de bem-estar social europeu foi, em parte, uma resposta ao desafio comunista. A Guerra Fria inteira foi estruturada em torno do antagonismo EUA-URSS.</p>}
        />
      </section>
    </article>
  );
}
