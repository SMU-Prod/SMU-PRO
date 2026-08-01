"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 36</span>
          <h1>Modernismo: Primeira Fase e a Semana de Arte Moderna de 1922</h1>
          <p>
            Em fevereiro de 1922, no Teatro Municipal de São Paulo, uma geração de artistas brasileiros
            declarou guerra ao academicismo. Vaias, escândalos e manifestos: a Semana de Arte Moderna
            foi o marco fundador de uma revolução cultural que transformou para sempre a maneira de
            escrever, pintar e pensar o Brasil. Mário de Andrade com <em>Macunaíma</em>, Oswald com
            a antropofagia, Manuel Bandeira com o cotidiano e a leveza — juntos, eles inventaram uma
            arte que era ao mesmo tempo brasileira e moderna, popular e erudita, séria e irreverente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Brasil de 1922: Por que a Revolução era Necessária?</h2>

        <p>
          O Brasil de 1922 era um país de contradições profundas. No plano político, a República Velha
          agonizava sob o domínio das oligarquias cafeeiras, enquanto tenentes militares começavam
          a se revoltar (a Revolta do Forte de Copacabana ocorreria no mesmo ano da Semana). No plano
          econômico, São Paulo crescia vertiginosamente, impulsionada pela industrialização e pela
          imigração europeia e asiática, criando uma nova classe urbana cosmopolita. No plano cultural,
          porém, a arte oficial ainda cultivava o Parnasianismo — poesia de formas fixas, temas
          greco-romanos, distância da realidade nacional.
        </p>
        <p>
          Os jovens artistas que organizaram a Semana de Arte Moderna tinham voltado da Europa com
          uma bagagem radicalmente diferente: Cubismo, Futurismo, Expressionismo, Dadaísmo. Eles
          viram que a Europa estava destruindo suas próprias tradições para criar arte nova — e
          decidiram fazer o mesmo no Brasil, mas com uma virada crucial: a arte nova não seria cópia
          das vanguardas europeias, mas uma síntese <strong>brasileira</strong>, fundada na mistura
          de tradições indígenas, africanas e europeias que constituíam a cultura nacional.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>São Paulo industrializada</h3>
            <p>A modernização econômica cria uma nova burguesia urbana que financia a arte de vanguarda — mecenas como Paulo Prado e Olívia Guedes Penteado apoiam a Semana.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Vanguardas europeias</h3>
            <p>Futurismo (Marinetti), Cubismo (Picasso), Dadaísmo (Duchamp): os modernistas brasileiros as conhecem e as transformam em matéria-prima nacional.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Centenário da Independência</h3>
            <p>1922 era o centenário da Independência do Brasil — um momento propício para a pergunta: "Que Brasil queremos para o próximo século?"</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Parnasianismo decadente</h3>
            <p>Bilac morrera em 1918; a Academia Brasileira de Letras ainda cultuava a métrica perfeita. Para os modernistas, era arte morta, mumificada.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Evento</span>
        <h2>2. A Semana de Arte Moderna de 1922 — O que Aconteceu</h2>

        <p>
          A <strong>Semana de Arte Moderna</strong> aconteceu entre os dias <strong>11 e 18 de
          fevereiro de 1922</strong> no Teatro Municipal de São Paulo. Foram três noites de
          conferências, leituras de poemas, concertos musicais e exposição de artes plásticas.
          O evento foi planejado por Mário de Andrade, Oswald de Andrade, Menotti del Picchia e
          Di Cavalcanti, com o apoio financeiro de mecenas da elite paulistana.
        </p>
        <p>
          A reação do público foi mista e, por vezes, violenta. Poemas em verso livre — sem rima
          e sem métrica regular — foram vaiados. A prosa fragmentada de Oswald foi ridicularizada.
          A escultura de Victor Brecheret e as pinturas de Anita Malfatti (que já havia sofrido
          críticas ferozes de Monteiro Lobato em 1917) foram alvo de escárnio. Mas os modernistas
          saíram satisfeitos com as vaias: para eles, a provocação era parte do projeto.
        </p>

        <div className="lesson-highlight">
          <h3>Os três pilares da Semana de Arte Moderna</h3>
          <ul>
            <li><strong>Literatura:</strong> poemas em verso livre, prosa fragmentada, colagem de linguagens — apresentados por Mário de Andrade, Oswald de Andrade, Menotti del Picchia e Manuel Bandeira (que não foi pessoalmente mas teve poemas lidos).</li>
            <li><strong>Artes plásticas:</strong> obras de Anita Malfatti, Di Cavalcanti, Vicente do Rego Monteiro e Victor Brecheret — influenciadas pelo Expressionismo e Cubismo europeus.</li>
            <li><strong>Música:</strong> Heitor Villa-Lobos apresentou composições que misturavam música erudita europeia com ritmos e melodias populares brasileiros.</li>
          </ul>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 210"
            width="700"
            height="210"
            aria-label="Linha do tempo do Modernismo Brasileiro — Primeira Fase (1922-1930)"
          >
            <defs>
              <marker id="arrowMod1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="210" rx="12" fill="#f8fafc" />
            <line x1="40" y1="95" x2="660" y2="95" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#arrowMod1)" />

            <circle cx="100" cy="95" r="9" fill="#7c3aed" />
            <text x="100" y="77" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">Fev. 1922</text>
            <text x="100" y="113" textAnchor="middle" fontSize="10" fill="#475569">Semana de</text>
            <text x="100" y="126" textAnchor="middle" fontSize="10" fill="#475569">Arte Moderna</text>

            <circle cx="230" cy="95" r="9" fill="#7c3aed" />
            <text x="230" y="77" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1924</text>
            <text x="230" y="113" textAnchor="middle" fontSize="10" fill="#475569">Manifesto</text>
            <text x="230" y="126" textAnchor="middle" fontSize="10" fill="#475569">Pau-Brasil</text>

            <circle cx="360" cy="95" r="9" fill="#7c3aed" />
            <text x="360" y="77" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1928</text>
            <text x="360" y="113" textAnchor="middle" fontSize="10" fill="#475569">Manifesto</text>
            <text x="360" y="126" textAnchor="middle" fontSize="10" fill="#475569">Antropófago</text>

            <circle cx="490" cy="95" r="9" fill="#7c3aed" />
            <text x="490" y="77" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1928</text>
            <text x="490" y="113" textAnchor="middle" fontSize="10" fill="#475569">Macunaíma</text>
            <text x="490" y="126" textAnchor="middle" fontSize="10" fill="#475569">(Mário de Andrade)</text>

            <circle cx="610" cy="95" r="9" fill="#ec4899" />
            <text x="610" y="77" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1930</text>
            <text x="610" y="113" textAnchor="middle" fontSize="10" fill="#475569">Revolução de</text>
            <text x="610" y="126" textAnchor="middle" fontSize="10" fill="#475569">30 / 2ª fase</text>

            <text x="350" y="180" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="bold">Modernismo — Primeira Fase (1922–1930): ruptura e afirmação</text>
          </svg>
          <figcaption>Linha do tempo da Primeira Fase do Modernismo brasileiro.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>3. Características da Primeira Fase Modernista</h2>

        <p>
          A primeira fase do Modernismo (1922–1930) é marcada pelo espírito de ruptura, pela
          experimentação e pela alegria destrutiva de demolir o Parnasianismo. É a fase mais
          <em> herói sem caráter</em>, no sentido de que os modernistas não tinham um programa
          único: Mário era mais sistemático e preocupado com o nacional, Oswald era mais irônico e
          anárquico, Bandeira era mais intimista e lírico. Mas todos compartilhavam alguns traços
          fundamentais.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💥</span>
            <h3>Verso livre</h3>
            <p>Abandono da rima obrigatória e da métrica regular — o poeta escreve seguindo o ritmo natural do pensamento e da fala, não as regras da versificação clássica.</p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Linguagem coloquial</h3>
            <p>A fala do povo brasileiro — com suas gírias, pronúncia e sintaxe — entra na literatura. O "a gente vai" substitui o "nós iremos" do Parnasianismo.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Nacionalismo crítico</h3>
            <p>Não a exaltação ufanista da pátria, mas a investigação crítica e bem-humorada da identidade brasileira — suas contradições, misturas e singularidades.</p>
          </div>
          <div className="lesson-card">
            <span>😄</span>
            <h3>Humor e paródia</h3>
            <p>Os modernistas usavam o humor como arma crítica: parodiar os clássicos, ironizar as convenções, usar o riso para demolir o academicismo.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Fragmentação</h3>
            <p>Influenciados pelo Cubismo e pelo cinema, os modernistas fragmentam a narrativa — justaposição de cenas, cortes abruptos, colagem de registros diferentes.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Primitivismo</h3>
            <p>Valorização das culturas indígena e africana como raízes autênticas do Brasil — em oposição ao eurocentrismo das elites literárias.</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Parnasianismo</th>
                <th>Modernismo — 1ª fase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Versificação</td>
                <td>Métrica rígida, soneto, decassílabo</td>
                <td>Verso livre, sem rima obrigatória</td>
              </tr>
              <tr>
                <td>Vocabulário</td>
                <td>Erudito, latinizante, raro</td>
                <td>Coloquial, popular, regionalizado</td>
              </tr>
              <tr>
                <td>Temas</td>
                <td>Mitologia, escultura, beleza clássica</td>
                <td>Brasil, cotidiano, cultura popular, humor</td>
              </tr>
              <tr>
                <td>Postura</td>
                <td>Distância da realidade ("arte pela arte")</td>
                <td>Engajamento nacional e identitário</td>
              </tr>
              <tr>
                <td>Modelo</td>
                <td>Antiguidade Greco-romana</td>
                <td>Vanguardas europeias + Brasil mestiço</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mário de Andrade</span>
        <h2>4. Mário de Andrade: O Intelectual Sistemático do Modernismo</h2>

        <p>
          <strong>Mário de Andrade</strong> (1893–1945) é o intelectual mais sistemático e prolífico
          da primeira fase modernista. Pesquisador incansável da cultura popular brasileira, folclorista,
          musicólogo, poeta e romancista, Mário dedicou toda sua obra à compreensão do que era e poderia
          ser a cultura nacional. Sua obra poética mais famosa é <em>Pauliceia Desvairada</em> (1922),
          publicada no mesmo ano da Semana, com prefácio teórico revolucionário — o <em>Prefácio
          Interessantíssimo</em> — em que explica sua poética modernista.
        </p>
        <p>
          Mas sua obra-prima é o <strong>romance-rapsódia</strong> <em>Macunaíma</em> (1928), escrita
          em apenas seis dias numa espécie de transe criativo. Macunaíma é "o herói sem nenhum caráter"
          — não no sentido moral, mas no sentido de que não tem um caráter fixo, definido: ele muda
          de cor, de forma, de personalidade, ora é preguiçoso, ora valente, ora esperto, ora ingênuo.
          Macunaíma representa a <strong>identidade brasileira como mistura, contradição e
          hibridismo</strong> — impossível de reduzir a uma essência única.
        </p>

        <div className="math-block">
          <strong>Macunaíma — Estrutura e Significado:</strong>
          <ul>
            <li><em>Protagonista:</em> Macunaíma, herói nascido nas selvas amazônicas, filho da tribo de Uraricoera, negro que se torna branco, trickster (enganador) e herói ao mesmo tempo.</li>
            <li><em>Tema central:</em> a busca pela muiraquitã (amuleto perdido) como metáfora da busca pela identidade nacional brasileira.</li>
            <li><em>Linguagem:</em> mistura mitos indígenas, lendas africanas, fala popular brasileira, neologismos e ironia — uma antologia da diversidade cultural do país.</li>
            <li><em>Frase emblemática:</em> <em style={{fontStyle: "italic"}}>"Ai, que preguiça!..."</em> — a preguiça de Macunaíma como traço nacional ambíguo, nem totalmente negativo nem positivo.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Oswald de Andrade</span>
        <h2>5. Oswald de Andrade e a Antropofagia Cultural</h2>

        <p>
          <strong>Oswald de Andrade</strong> (1890–1954) é o modernista mais radical, irônico e
          provocativo. Enquanto Mário era sistemático e pesquisador, Oswald era o agitador, o
          destruidor criativo, o provocador permanente. Seus poemas são brevíssimos, irônicos,
          fragmentados — alguns têm apenas dois ou três versos. Sua prosa, como em <em>Memórias
          Sentimentais de João Miramar</em> (1924), é telegráfica, cinematográfica, cortante.
        </p>
        <p>
          Mas sua contribuição mais duradoura foi teórica: os dois manifestos que redigiu definiram
          a posição do Modernismo brasileiro frente à cultura europeia. O <strong>Manifesto da
          Poesia Pau-Brasil</strong> (1924) defende uma arte exportável, feita da mistura brasileira
          de índio, português e negro, sem complexo de inferioridade diante da Europa. O
          <strong> Manifesto Antropófago</strong> (1928) vai mais longe: propõe que o Brasil deve
          "devorar" a cultura europeia — assim como os índios tupi devoravam ritualmente seus
          inimigos para absorver sua força — e transformá-la em algo radicalmente novo e brasileiro.
        </p>

        <div className="lesson-highlight">
          <h3>A metáfora da Antropofagia Cultural</h3>
          <p>
            A antropofagia cultural de Oswald inverte a lógica colonial: em vez de o Brasil ser
            dominado pela cultura europeia, ele a <em>devora</em> ativamente e a transforma.
            A frase-símbolo do Manifesto Antropófago — <em>"Tupi or not Tupi, that is the question"</em>
            — é uma paródia de Shakespeare que exemplifica perfeitamente a ideia: absorver o cânone
            ocidental e transformá-lo em produto brasileiro. Essa visão influenciaria décadas de
            arte e pensamento no Brasil, da Tropicália nos anos 1960 ao conceito de "canibalismo
            cultural" debatido hoje.
          </p>
        </div>

        <div className="math-block">
          <strong>Frase do Manifesto Antropófago (1928):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Só me interessa o que não é meu. Lei do homem. Lei do antropófago."
          </p>
          <p>
            O paradoxo é deliberado: ao afirmar que só lhe interessa o que "não é meu", Oswald
            justifica a absorção da cultura estrangeira — mas como matéria-prima para criar algo
            radicalmente original e próprio.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Manuel Bandeira</span>
        <h2>6. Manuel Bandeira: Cotidiano, Leveza e Liberdade</h2>

        <p>
          <strong>Manuel Bandeira</strong> (1886–1968) é o terceiro grande nome da primeira fase,
          mas ocupa uma posição singular: é mais intimista, menos programático, mais próximo da
          experiência pessoal. Tuberculoso desde a juventude, que o obrigou a passar anos em sanatório,
          Bandeira construiu uma poesia da pequenez — dos objetos simples, das ruas sem glamour,
          das pessoas comuns — transformada em beleza pela precisão e pela emoção.
        </p>
        <p>
          Seu poema mais famoso e mais cobrado no ENEM é <strong>Poética</strong> (1930), verdadeiro
          manifesto pessoal em que o poeta declara seu cansaço com as convenções: "Estou farto do
          lirismo comedido / Do lirismo bem comportado." O poema termina com a afirmação de uma
          poesia "bêbada, cambaléia" — livre, instintiva, liberada das regras formais. Outro poema
          central é <em>Vou-me embora pra Pasárgada</em>, sobre o desejo de fuga para um lugar
          imaginário de liberdade — uma das expressões mais líricas do escapismo como tema modernista.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Poética (1930)</h3>
            <p>Manifesto pessoal contra o lirismo "bem comportado"; defesa de uma poesia livre, cotidiana, que aceite inclusive a morte e o bêbado como matéria poética.</p>
          </div>
          <div className="lesson-card">
            <span>✈️</span>
            <h3>Vou-me embora pra Pasárgada</h3>
            <p>Pasárgada como utopia imaginária de liberdade total; o eu lírico foge de uma realidade difícil para um paraíso onde "tenho a mulher que eu quero".</p>
          </div>
          <div className="lesson-card">
            <span>🌆</span>
            <h3>O cotidiano como poesia</h3>
            <p>Ruas, casas populares, objetos simples, conversas banais — Bandeira eleva o miúdo e o ordinário à condição de matéria poética digna.</p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Musicalidade</h3>
            <p>Mesmo no verso livre, Bandeira mantém atenção à sonoridade, ao ritmo interno das frases — herança do Simbolismo que ele soube modernizar.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Manifestos</span>
        <h2>7. Os Manifestos Modernistas: Teoria e Programa</h2>

        <p>
          Uma das características que distingue o Modernismo de outros movimentos literários brasileiros
          é a produção de <strong>manifestos</strong> — textos teóricos que articulam e defendem
          programas estéticos. Os modernistas aprenderam com as vanguardas europeias (o Manifesto
          Futurista de Marinetti, 1909; o Manifesto Dadaísta, 1916) que a arte nova precisava se
          anunciar e se justificar publicamente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Manifesto</th>
                <th>Autor</th>
                <th>Ano</th>
                <th>Proposta central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Manifesto da Poesia Pau-Brasil</em></td>
                <td>Oswald de Andrade</td>
                <td>1924</td>
                <td>Arte brasileira exportável, feita da mistura nacional; sem complexo colonial</td>
              </tr>
              <tr>
                <td><em>Manifesto Antropófago</em></td>
                <td>Oswald de Andrade</td>
                <td>1928</td>
                <td>"Devorar" a cultura europeia e transformá-la em produto brasileiro original</td>
              </tr>
              <tr>
                <td><em>Prefácio Interessantíssimo</em></td>
                <td>Mário de Andrade</td>
                <td>1922</td>
                <td>Justificação teórica da nova poética: verso livre, dissonância, linguagem coloquial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>O que os manifestos têm em comum?</h3>
          <ul>
            <li>Recusa do modelo europeu como parâmetro único e superior de arte.</li>
            <li>Valorização da cultura brasileira (indígena, africana, popular) como material artístico.</li>
            <li>Defesa da liberdade formal — verso livre, prosa fragmentada, mistura de registros.</li>
            <li>Tom provocativo, bem-humorado, deliberadamente escandaloso.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>8. Mapa da Primeira Fase Modernista</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Mapa esquemático dos autores e obras da Primeira Fase do Modernismo Brasileiro"
          >
            <rect x="0" y="0" width="700" height="260" rx="12" fill="#fdf4ff" />

            <rect x="250" y="12" width="200" height="48" rx="10" fill="#7c3aed" />
            <text x="350" y="33" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">MODERNISMO — 1ª FASE</text>
            <text x="350" y="50" textAnchor="middle" fontSize="11" fill="#e9d5ff">1922 – 1930</text>

            <line x1="160" y1="60" x2="350" y2="60" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="60" x2="540" y2="60" stroke="#7c3aed" strokeWidth="2" />
            <line x1="160" y1="60" x2="160" y2="105" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="60" x2="350" y2="105" stroke="#7c3aed" strokeWidth="2" />
            <line x1="540" y1="60" x2="540" y2="105" stroke="#7c3aed" strokeWidth="2" />

            <rect x="55" y="105" width="210" height="65" rx="8" fill="#dbeafe" />
            <text x="160" y="127" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">Mário de Andrade</text>
            <text x="160" y="143" textAnchor="middle" fontSize="10" fill="#1e40af">Macunaíma (1928)</text>
            <text x="160" y="158" textAnchor="middle" fontSize="10" fill="#1e40af">Pauliceia Desvairada (1922)</text>

            <rect x="245" y="105" width="210" height="65" rx="8" fill="#d1fae5" />
            <text x="350" y="127" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">Oswald de Andrade</text>
            <text x="350" y="143" textAnchor="middle" fontSize="10" fill="#065f46">Manifesto Antropófago (1928)</text>
            <text x="350" y="158" textAnchor="middle" fontSize="10" fill="#065f46">Manifesto Pau-Brasil (1924)</text>

            <rect x="435" y="105" width="210" height="65" rx="8" fill="#fce7f3" />
            <text x="540" y="127" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Manuel Bandeira</text>
            <text x="540" y="143" textAnchor="middle" fontSize="10" fill="#9d174d">Poética (1930)</text>
            <text x="540" y="158" textAnchor="middle" fontSize="10" fill="#9d174d">Vou-me embora pra Pasárgada</text>

            <text x="350" y="210" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">Características: verso livre · linguagem coloquial · nacionalismo crítico · humor · primitivismo</text>
            <text x="350" y="230" textAnchor="middle" fontSize="10" fill="#6b7280">Semana de Arte Moderna (fev. 1922) — Teatro Municipal de São Paulo</text>
          </svg>
          <figcaption>Mapa dos principais autores, obras e características da Primeira Fase do Modernismo Brasileiro.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>9. Como o ENEM Cobra a Primeira Fase Modernista</h2>

        <p>
          O ENEM é um dos exames que mais cobra o Modernismo brasileiro, especialmente em questões de
          interpretação de texto. As perguntas raramente testam datas ou nomes isolados — em vez disso,
          apresentam <strong>fragmentos de poemas ou prosa</strong> e pedem que o candidato identifique
          características modernistas ou analise efeitos de sentido.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Verso livre e ruptura</h3>
            <p>Quando o ENEM apresenta um poema sem rima ou com métrica irregular, costuma perguntar sobre o efeito dessa opção — reconhecer isso como escolha estética modernista é fundamental.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Antropofagia cultural</h3>
            <p>O conceito de "devorar" a cultura estrangeira e transformá-la aparece em questões sobre identidade cultural brasileira — não só na literatura, mas nas questões de Ciências Humanas.</p>
          </div>
          <div className="lesson-card">
            <span>😄</span>
            <h3>Humor e ironia</h3>
            <p>Poemas de Oswald de Andrade (brevíssimos, irônicos) e de Manuel Bandeira (cotidianos, bem-humorados) são cobrados como exemplos de linguagem que une leveza e crítica.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Identidade nacional</h3>
            <p>Macunaíma como herói sem caráter fixo é um símbolo da complexidade da identidade brasileira — o ENEM frequentemente usa esse conceito em questões sobre cultura e identidade.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica crítica para o ENEM:</strong>
          <p>
            A primeira fase modernista é <em>destrutiva e construtiva ao mesmo tempo</em>. Quando
            identificar traços como verso livre, paródia, linguagem coloquial ou mistura de culturas,
            pense: o que está sendo destruído (academicismo, eurocentrismo, norma culta rígida) e
            o que está sendo construído (arte nacional, identidade híbrida, linguagem democrática)?
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo de Escolas</span>
        <h2>9b. Pré-Modernismo × Primeira Fase × Segunda Fase: Diferenças Essenciais</h2>

        <p>
          Para o ENEM, é fundamental não apenas conhecer cada fase isoladamente, mas saber
          <strong> distinguir</strong> entre elas quando um texto é apresentado sem identificação
          de autoria. O quadro abaixo consolida as diferenças mais importantes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Pré-Modernismo (1902–1922)</th>
                <th>Modernismo 1ª Fase (1922–1930)</th>
                <th>Modernismo 2ª Fase (1930–1945)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom</td>
                <td>Denúncia sóbria, científica</td>
                <td>Ruptura, humor, escândalo</td>
                <td>Seriedade, comprometimento social</td>
              </tr>
              <tr>
                <td>Forma</td>
                <td>Ensaio, romance realista</td>
                <td>Verso livre, fragmentação radical</td>
                <td>Romance regionalista, verso maduro</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Jornalística, científica, mais formal</td>
                <td>Coloquial, paródica, experimental</td>
                <td>Densa, psicológica, regional</td>
              </tr>
              <tr>
                <td>Tema central</td>
                <td>Brasil real ignorado pelas elites</td>
                <td>Identidade nacional, vanguarda, ruptura</td>
                <td>Miséria, seca, latifúndio, existência</td>
              </tr>
              <tr>
                <td>Autores chave</td>
                <td>Euclides, Lima, Lobato, Augusto</td>
                <td>Mário, Oswald, Bandeira, Villa-Lobos</td>
                <td>Graciliano, Drummond, Rachel, Amado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Como diferenciar no ENEM:</strong>
          <p>
            Se o texto tem <em>verso livre + humor + experimentalismo radical</em> — é 1ª Fase.
            Se tem <em>linguagem árida + sertão + denúncia social sem ironia</em> — é 2ª Fase.
            Se tem <em>linguagem científica/jornalística + denúncia sem programa modernista</em> — é Pré-Modernismo.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Anita Malfatti — Artes Plásticas</h3>
            <p>Pintora que exibiu obras expressionistas em 1917 e na Semana de 22; atacada por Lobato em 1917 como "paranoia" — o conflito entre vanguarda e academicismo em forma visual.</p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Heitor Villa-Lobos — Música</h3>
            <p>Compositor que misturou música erudita europeia com ritmos e melodias populares brasileiras; sintetizou na música o mesmo projeto antropofágico da literatura modernista.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Di Cavalcanti — Pintura</h3>
            <p>Artista plástico que criou a capa do catálogo da Semana de Arte Moderna de 1922; suas pinturas de mulheres mestiças e cenas populares definiram a estética modernista nas artes visuais.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Revista Klaxon (1922)</h3>
            <p>Primeira revista modernista brasileira, publicada em São Paulo logo após a Semana; o nome remete à buzina do automóvel — símbolo da modernidade urbana e industrial.</p>
          </div>
        </div>

        <p>
          É importante lembrar que a Semana de Arte Moderna não foi um fenômeno apenas literário —
          foi um evento de <strong>síntese cultural</strong> que reuniu literatura, artes visuais e
          música numa proposta comum de renovação da arte brasileira. O ENEM frequentemente explora
          essa dimensão interdisciplinar: questões sobre modernismo podem apresentar imagens de
          Anita Malfatti ou comentários sobre Villa-Lobos, pedindo que o candidato identifique as
          características modernistas que transcendem o âmbito literário. O princípio é sempre o
          mesmo: ruptura com os modelos acadêmicos europeus e busca de uma expressão autenticamente
          brasileira, nascida da nossa mistura cultural.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artista</th>
                <th>Arte</th>
                <th>Contribuição à Semana</th>
                <th>Elemento modernista central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anita Malfatti</td>
                <td>Pintura</td>
                <td>Exposição de obras expressionistas</td>
                <td>Distorção expressiva, cores vibrantes, rejeição do realismo</td>
              </tr>
              <tr>
                <td>Di Cavalcanti</td>
                <td>Pintura / Ilustração</td>
                <td>Capa do catálogo da Semana</td>
                <td>Mulheres mestiças como tema, mistura cultural brasileira</td>
              </tr>
              <tr>
                <td>Victor Brecheret</td>
                <td>Escultura</td>
                <td>Obras de estética modernista</td>
                <td>Formas simplificadas, influência cubista</td>
              </tr>
              <tr>
                <td>Heitor Villa-Lobos</td>
                <td>Música</td>
                <td>Concertos nas três noites</td>
                <td>Fusão de música erudita europeia com ritmos populares brasileiros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. A Semana de Arte Moderna"
          statement={
            <p>
              A Semana de Arte Moderna de 1922, realizada no Teatro Municipal de São Paulo, é
              considerada o marco fundador do Modernismo brasileiro. Qual das alternativas descreve
              corretamente o contexto e o objetivo desse evento?
            </p>
          }
          options={[
            { letter: "a", text: "Foi uma celebração do centenário da Literatura Brasileira que reuniu poetas parnasianos para homenagear Olavo Bilac e a tradição clássica." },
            { letter: "b", text: "Foi um evento político que marcou a adesão de intelectuais paulistanos à Revolução de 1930 e às ideias de Getúlio Vargas." },
            { letter: "c", text: "Foi um evento de ruptura cultural que apresentou ao público artes plásticas, música e literatura de vanguarda, provocando debate e vaias, com o objetivo de superar o Parnasianismo.", correct: true },
            { letter: "d", text: "Foi uma feira literária que reuniu escritores de todo o Brasil para discutir a modernização da língua portuguesa e a adoção de neologismos." },
          ]}
          resolution={
            <p>
              A Semana de Arte Moderna de 1922 foi um evento deliberadamente provocativo: apresentou
              obras de arte, poemas em verso livre e música de vanguarda (Villa-Lobos) ao público
              paulistano, que respondeu com vaias e escárnio — reação que os modernistas aproveitaram
              como prova do choque cultural que queriam provocar. O objetivo era superar o Parnasianismo
              (a estética dominante) e afirmar a necessidade de uma arte nova, brasileira e moderna.
              Não foi uma homenagem ao Parnasianismo (A), não teve relação direta com a política de
              Vargas (B) e não era uma feira literária (D).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Macunaíma e a Identidade Brasileira"
          statement={
            <p>
              Em <em>Macunaíma</em> (1928), Mário de Andrade descreve o protagonista como "o herói
              sem nenhum caráter". Essa expressão, no contexto da obra, significa que Macunaíma:
            </p>
          }
          options={[
            { letter: "a", text: "É um personagem moralmente depravado e sem virtudes, simbolizando a corrupção da sociedade brasileira." },
            { letter: "b", text: "Não possui uma identidade fixa e definida, sendo capaz de se transformar e de absorver múltiplas culturas — representando a identidade brasileira como mistura e contradição.", correct: true },
            { letter: "c", text: "É uma personagem sem profundidade psicológica, funcionando apenas como símbolo alegórico da preguiça nacional." },
            { letter: "d", text: "Representa o europeu colonizador que não consegue se adaptar ao Brasil tropical e por isso perde seus valores culturais." },
          ]}
          resolution={
            <p>
              "Herói sem nenhum caráter" é uma das expressões mais ricas da literatura brasileira.
              Mário de Andrade usa "caráter" no sentido de caracterização fixa, definida — Macunaíma
              não tem uma identidade estável: muda de cor (de negro a branco), de comportamento
              (preguiçoso a guerreiro), de posição (vítima a enganador). Essa instabilidade é uma
              metáfora da identidade brasileira, que o próprio Mário entendia como síntese plural de
              tradições indígenas, africanas e europeias — impossível de reduzir a uma essência única.
              O "caráter" ausente não é moral (A), não é superficialidade (C) e não representa o
              colonizador (D): é a pluralidade constitutiva do povo brasileiro.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. A Metáfora Antropofágica"
          statement={
            <p>
              O <em>Manifesto Antropófago</em> (1928), de Oswald de Andrade, propõe que o Brasil
              deve "devorar" a cultura europeia. Analise a afirmativa: <em>"A metáfora da
              antropofagia cultural não representa submissão à cultura europeia, mas uma forma de
              resistência e apropriação criativa que transforma o colonizador em matéria-prima."</em>
              <br /><br />
              Essa afirmativa é:
            </p>
          }
          options={[
            { letter: "a", text: "Incorreta, pois o Manifesto Antropófago defende a rejeição total e absoluta de qualquer influência europeia na cultura brasileira." },
            { letter: "b", text: "Incorreta, pois a metáfora da devoração indica que a cultura brasileira é inferior e precisa absorver a europeia para se desenvolver." },
            { letter: "c", text: "Correta: a antropofagia propõe não a imitação passiva nem a rejeição total, mas a deglutição ativa — absorver o que vem de fora e transformá-lo em algo radicalmente novo e próprio.", correct: true },
            { letter: "d", text: "Correta, mas apenas em relação à música e às artes plásticas; para a literatura, Oswald defendia a imitação dos clássicos portugueses." },
          ]}
          resolution={
            <p>
              A metáfora da antropofagia é sofisticada precisamente porque evita dois extremos:
              nem a submissão colonial (imitar servilmente a cultura europeia) nem o isolacionismo
              (rejeitar toda influência estrangeira). O ritual indígena de devorar o inimigo não
              era destruição — era absorção da força do outro para se tornar mais forte. Oswald
              transforma isso em programa cultural: o Brasil deve absorver Shakespeare, Freud, Marx,
              as vanguardas europeias — e transformá-los em algo que só pode existir aqui. A
              alternativa C capta essa dialética com precisão. A alternativa A erra ao dizer "rejeição
              total"; a B inverte o sentido da metáfora; a D é uma limitação inventada.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Manuel Bandeira e o Verso Livre"
          statement={
            <p>
              Leia o trecho do poema <em>Poética</em> (1930), de Manuel Bandeira:
              <br /><br />
              <em>"Estou farto do lirismo comedido<br/>
              Do lirismo bem comportado<br/>
              Do lirismo funcionário público com livro de ponto expediente protocolo e manifestações de apreço ao Sr. diretor."</em>
              <br /><br />
              O efeito produzido pela extensão crescente dos versos e pela enumeração de termos
              burocráticos nesse fragmento é:
            </p>
          }
          options={[
            { letter: "a", text: "Criar uma atmosfera solene e formal que valoriza o trabalho burocrático como tema poético digno de tratamento lírico." },
            { letter: "b", text: "Demonstrar a admiração do eu lírico pelo lirismo equilibrado e bem estruturado da poesia parnasiana, que ele deseja recuperar." },
            { letter: "c", text: "Produzir ironia e crítica ao lirismo convencional: ao encher o verso de termos burocráticos, o poeta demonstra — pela própria forma do poema — que essa poesia é engessada, burocrática e sem vida.", correct: true },
            { letter: "d", text: "Mostrar que a poesia modernista deve aproximar-se da linguagem administrativa para ser compreensível por todos os brasileiros." },
          ]}
          resolution={
            <p>
              O poema de Bandeira realiza um paradoxo formal engenhoso: ao criticar o "lirismo bem
              comportado", ele usa uma enumeração crescente e absurda de termos burocráticos
              ("livro de ponto, expediente, protocolo, manifestações de apreço ao Sr. diretor") para
              mostrar, pela própria forma, como esse tipo de poesia é mecânico, engessado e sem vida
              — como um funcionário público preso em procedimentos. A ironia é formal: o poema
              <em>encarna</em> o que critica, tornando a crítica visceral. Não há admiração pela
              poesia parnasiana (B), não é homenagem à burocracia (A) e não propõe aproximação
              administrativa da poesia (D): é destruição irônica de um modelo estético.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Verso Livre e Ruptura Estética"
          statement={
            <p>
              Um professor afirma: <em>"O verso livre modernista não significa ausência de arte —
              significa liberdade artística. Os modernistas não deixaram de ter cuidado com a
              linguagem; apenas trocaram as regras externas da versificação por regras internas
              de cada poema."</em>
              <br /><br />
              Com base nessa afirmação e no que você sabe sobre a Primeira Fase Modernista,
              avalie a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A afirmação é incorreta, pois os modernistas da primeira fase eram contrários a qualquer forma de rigor estético e defendiam que poesia poderia ser qualquer coisa, sem critério." },
            { letter: "b", text: "A afirmação é correta: o verso livre modernista substituiu a métrica rígida do Parnasianismo por uma organização interna a cada poema — ritmo do pensamento, repetição intencional, musicalidade própria.", correct: true },
            { letter: "c", text: "A afirmação é parcialmente correta apenas para Oswald de Andrade, pois Mário de Andrade e Manuel Bandeira mantiveram integralmente a métrica parnasiana." },
            { letter: "d", text: "A afirmação confunde modernismo com romantismo; foi o Romantismo que introduziu o verso livre na literatura brasileira, enquanto o Modernismo o abandonou." },
          ]}
          resolution={
            <p>
              O professor tem razão, e a alternativa B é a síntese correta. O verso livre não é
              ausência de forma — é liberdade de forma. Os modernistas rejeitavam a camisa de força
              da métrica e da rima obrigatórias (características parnasianas), mas isso não significava
              descuido: Mário de Andrade tinha uma teoria poética elaborada (o <em>Prefácio
              Interessantíssimo</em>), Manuel Bandeira era rigoroso com a musicalidade interna,
              Oswald de Andrade calculava cada justaposição. A alternativa A caricatura os modernistas
              como anárquicos sem critério; C é falsa (Mário e Bandeira também usavam verso livre);
              D confunde períodos históricos (o Romantismo usou alguns elementos de liberdade formal,
              mas o verso livre como programa estético é modernista).
            </p>
          }
        />
      </section>
    </article>
  );
}
