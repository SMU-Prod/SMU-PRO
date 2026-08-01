"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 38</span>
          <h1>Modernismo: Terceira Fase — Pós-45 e Geração de 45</h1>
          <p>
            Após a Segunda Guerra Mundial, o Brasil entrou numa nova fase literária marcada pelo
            rigor formal, pela profundidade psicológica e por uma linguagem que recusava tanto o
            experimentalismo inconsequente quanto a facilidade comunicativa. Guimarães Rosa criou
            um sertão filosófico em que cada frase é um neologismo e cada personagem carrega o peso
            do universo. Clarice Lispector mergulhou na consciência humana com precisão de cirurgiã.
            João Cabral de Melo Neto fez da pobreza nordestina matéria de rigor formal absoluto.
            A Terceira Fase é a fase da maturidade silenciosa — menos escandalosa, mais profunda.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Pós-45: Brasil e Mundo em Transformação</h2>

        <p>
          A Terceira Fase do Modernismo começa convencionalmente em <strong>1945</strong> e se
          estende até as transformações da Literatura Contemporânea nos anos 1960–1970. O marco
          histórico é duplo: o fim da Segunda Guerra Mundial (e o horror revelado pelo Holocausto
          e pelas bombas atômicas) e a queda do Estado Novo de Getúlio Vargas no Brasil. São
          eventos que geram uma crise profunda na crença na razão e no progresso — se o século XX
          produziu Auschwitz e Hiroshima, que otimismo histórico ainda é possível?
        </p>
        <p>
          No Brasil, o período é marcado pela redemocratização (efêmera — o golpe de 1964 viria
          em menos de 20 anos), pelo crescimento econômico do governo Juscelino Kubitschek
          (1956–1961, com a construção de Brasília), pela emergência da cultura de massa e do
          rádio, e pela urbanização acelerada que transformava o Brasil rural do século anterior
          numa sociedade majoritariamente urbana. Nesse contexto, a literatura reflete tanto a
          euforia desenvolvimentista quanto a angústia existencial de um mundo pós-apocalíptico.
        </p>

        <div className="lesson-highlight">
          <h3>A Geração de 45 e o nome da terceira fase</h3>
          <p>
            Stricto sensu, a <strong>Geração de 45</strong> designa um grupo de poetas que reage
            contra o modernismo mais coloquial e busca maior rigor formal — nomes como Ledo Ivo,
            Domingos Carvalho da Silva e João Cabral de Melo Neto. Mas quando falamos em
            <strong> Terceira Fase Modernista</strong> em sentido amplo, incluímos também os grandes
            prosadores do período — Guimarães Rosa e Clarice Lispector — que não são
            rigorosamente da Geração de 45 mas representam o aprofundamento do Modernismo
            na mesma época.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💣</span>
            <h3>Pós-guerra e angústia</h3>
            <p>O Holocausto e as bombas atômicas geram crise profunda na fé no progresso humano; a literatura absorve essa angústia existencial.</p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Urbanização acelerada</h3>
            <p>O Brasil torna-se majoritariamente urbano; as contradições da cidade moderna (solidão, violência, anonimato) entram na literatura.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Rigor formal</h3>
            <p>Reação ao experimentalismo fácil da primeira fase; a Geração de 45 valoriza a construção cuidadosa, o verso bem trabalhado, a prosa densa.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Introspecção psicológica</h3>
            <p>A influência de Freud, Kafka, Woolf e Joyce aprofunda a exploração da consciência humana — especialmente em Clarice Lispector.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. Características da Terceira Fase Modernista</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Segunda Fase (1930–1945)</th>
                <th>Terceira Fase (1945–1960s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prosa dominante</td>
                <td>Romance regionalista nordestino</td>
                <td>Prosa experimental, universalista</td>
              </tr>
              <tr>
                <td>Poesia dominante</td>
                <td>Existencial, engajada, musical</td>
                <td>Rigorosa, construtiva, racionalista</td>
              </tr>
              <tr>
                <td>Foco</td>
                <td>Estruturas sociais externas</td>
                <td>Vida interior, linguagem, existência</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Direta, regional, comprometida</td>
                <td>Experimental, neologística, introspectiva</td>
              </tr>
              <tr>
                <td>Influências</td>
                <td>Realismo social, marxismo</td>
                <td>Existencialismo, Psicanálise, Construtivismo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 210"
            width="700"
            height="210"
            aria-label="Linha do tempo do Modernismo Terceira Fase — Pós-45"
          >
            <defs>
              <marker id="arrowT3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#0891b2" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="210" rx="12" fill="#f0f9ff" />
            <line x1="40" y1="95" x2="660" y2="95" stroke="#0891b2" strokeWidth="3" markerEnd="url(#arrowT3)" />

            <circle cx="90" cy="95" r="9" fill="#0891b2" />
            <text x="90" y="77" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1945</text>
            <text x="90" y="113" textAnchor="middle" fontSize="10" fill="#475569">Fim da 2ª</text>
            <text x="90" y="126" textAnchor="middle" fontSize="10" fill="#475569">Guerra / Vargas</text>

            <circle cx="220" cy="95" r="9" fill="#0891b2" />
            <text x="220" y="77" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1946</text>
            <text x="220" y="113" textAnchor="middle" fontSize="10" fill="#475569">Sagarana</text>
            <text x="220" y="126" textAnchor="middle" fontSize="10" fill="#475569">(Guimarães Rosa)</text>

            <circle cx="350" cy="95" r="9" fill="#0891b2" />
            <text x="350" y="77" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1956</text>
            <text x="350" y="113" textAnchor="middle" fontSize="10" fill="#475569">Grande Sertão:</text>
            <text x="350" y="126" textAnchor="middle" fontSize="10" fill="#475569">Veredas</text>

            <circle cx="475" cy="95" r="9" fill="#0891b2" />
            <text x="475" y="77" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1955</text>
            <text x="475" y="113" textAnchor="middle" fontSize="10" fill="#475569">Morte e Vida</text>
            <text x="475" y="126" textAnchor="middle" fontSize="10" fill="#475569">Severina (Cabral)</text>

            <circle cx="600" cy="95" r="9" fill="#ec4899" />
            <text x="600" y="77" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1977</text>
            <text x="600" y="113" textAnchor="middle" fontSize="10" fill="#475569">A Hora da</text>
            <text x="600" y="126" textAnchor="middle" fontSize="10" fill="#475569">Estrela (Clarice)</text>

            <text x="350" y="178" textAnchor="middle" fontSize="12" fill="#0891b2" fontWeight="bold">Terceira Fase Modernista — Pós-45: rigor, introspecção, linguagem</text>
          </svg>
          <figcaption>Linha do tempo da Terceira Fase Modernista com as obras mais importantes.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Guimarães Rosa</span>
        <h2>3. João Guimarães Rosa: O Sertão como Universo Filosófico</h2>

        <p>
          <strong>João Guimarães Rosa</strong> (1908–1967) é o escritor mais original da literatura
          brasileira do século XX e um dos maiores da literatura ocidental. Médico e diplomata, Rosa
          conheceu o sertão mineiro profundamente — trabalhou no interior, acompanhou boiadeiros,
          registrou o vocabulário regional com a minúcia de um linguista. Mas sua literatura não é
          apenas regional: o sertão de Rosa é um universo filosófico em que questões sobre o bem,
          o mal, Deus, o diabo e a natureza humana são debatidas com a mesma profundidade que
          na melhor filosofia.
        </p>
        <p>
          Sua obra-prima, <strong>Grande Sertão: Veredas</strong> (1956), é considerada um dos
          maiores romances da língua portuguesa. É um monólogo de Riobaldo, ex-jagunço, que narra
          sua vida ao interlocutor silencioso durante um único dia. A questão central que perpassa
          toda a narrativa é: <em>"Existe o diabo?"</em> — e, por extensão: existe o mal como
          força independente, ou somos nós que fazemos o mal? Riobaldo afirma ter feito um pacto
          com o Diabo numa encruzilhada, mas nunca tem certeza se o Diabo realmente apareceu.
          Essa ambiguidade radical é o coração do livro.
        </p>

        <div className="math-block">
          <strong>Frase emblemática de Grande Sertão: Veredas:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "O diabo não há! É o que eu digo, se for... Existe é homem humano. Travessia."
          </p>
          <p>
            A frase-síntese do romance: o diabo não é uma entidade externa, mas a capacidade
            humana para o mal. "Travessia" — última palavra do livro — condensa tudo: a vida
            como travessia pelo sertão (real e simbólico), pelo bem e pelo mal.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>A linguagem rosiana: neologismo e recriação</h3>
          <p>
            A linguagem de Guimarães Rosa é a mais revolucionária da literatura brasileira. Ele
            não apenas usa vocabulário regional: ele <strong>inventa palavras</strong>, mistura
            o latim, o grego, o alemão e o árabe com o português sertanejo, cria derivações
            surpreendentes, usa o gerúndio com maestria, inverte a sintaxe. O resultado é uma língua
            que parece antiga e nova ao mesmo tempo — como se o português original tivesse sido
            redescoberto e reinventado.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Grande Sertão: Veredas (1956)</h3>
            <p>Romance-monólogo de Riobaldo; pacto com o diabo; amor por Diadorim; sertão como metáfora da existência humana.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Sagarana (1946)</h3>
            <p>Primeiro livro publicado; nove contos sobre o sertão mineiro; estreia de uma linguagem radicalmente nova na literatura brasileira.</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Primeiras Estórias (1962)</h3>
            <p>Contos curtos e densos; inclui <em>A Terceira Margem do Rio</em>, metáfora do ser humano que escolhe existir num espaço impossível entre as margens.</p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Corpo de Baile (1956)</h3>
            <p>Publicado no mesmo ano de Grande Sertão; sete novelas sobre o sertão, amor, morte e a condição humana.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Clarice Lispector</span>
        <h2>4. Clarice Lispector: A Consciência como Matéria Literária</h2>

        <p>
          <strong>Clarice Lispector</strong> (1920–1977) nasceu na Ucrânia e chegou ao Brasil com
          dois meses de vida. É a escritora brasileira mais traduzida e estudada internacionalmente.
          Sua obra inaugura no Brasil uma literatura de introspecção radical: não o mundo exterior,
          mas a consciência, o pensamento, a sensação, o epifânico — o momento em que a realidade
          cotidiana se rasga e revela algo insuportável por ser demasiado verdadeiro.
        </p>
        <p>
          O principal recurso técnico de Clarice é o <strong>fluxo de consciência</strong> (stream
          of consciousness): a narrativa abandona a linearidade cronológica e segue o fluxo dos
          pensamentos do personagem, com todas as suas associações, idas e vindas, contradições e
          revelações. Isso não é o mesmo que escrita automática surrealista — Clarice é altamente
          controlada; o aparente caos é uma construção precisa.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⭐</span>
            <h3>A Hora da Estrela (1977)</h3>
            <p>Último romance publicado em vida; narra Macabéa, nordestina pobre no Rio de Janeiro, pela voz do narrador Rodrigo; questão sobre quem tem direito a ser retratado pela literatura.</p>
          </div>
          <div className="lesson-card">
            <span>🍊</span>
            <h3>A Paixão Segundo G.H. (1964)</h3>
            <p>Protagonista devora uma barata num momento de epifania existencial; radical exploração dos limites entre nojo, êxtase e revelação.</p>
          </div>
          <div className="lesson-card">
            <span>🐂</span>
            <h3>A Maçã no Escuro (1961)</h3>
            <p>Romance sobre um homem que acredita ter matado sua esposa e foge; a fuga interior importa mais que a exterior.</p>
          </div>
          <div className="lesson-card">
            <span>💫</span>
            <h3>Laços de Família (1960)</h3>
            <p>Coletânea de contos; revelações cotidianas que expõem o horror e a beleza ocultos nas relações familiares e sociais aparentemente banais.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Clarice Lispector e a epifania:</strong>
          <p>
            O conceito de <strong>epifania</strong> — uma revelação súbita e intensa que transforma
            a percepção da realidade — é central para entender Clarice. Ela o herda de James Joyce,
            mas o transforma: em Clarice, a epifania não é necessariamente religiosa ou grandiosa —
            pode ser o cheiro de uma maçã, o olhar de um animal, a textura de um objeto. O cotidiano
            banal se rasga e revela algo intolerável de ver. O ENEM frequentemente apresenta trechos
            claricianos e pede que o candidato identifique esse momento de ruptura da percepção.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">João Cabral de Melo Neto</span>
        <h2>5. João Cabral de Melo Neto: O Antipoeta Rigoroso</h2>

        <p>
          <strong>João Cabral de Melo Neto</strong> (1920–1999) é o maior poeta da Geração de 45
          e um dos maiores de toda a literatura brasileira. Pernambucano, diplomata, Cabral
          desenvolveu uma poética baseada no <strong>rigor construtivo</strong>: a palavra como
          pedra, o poema como construção arquitetônica. Nada de inspiração fácil, nada de
          emoção derramada — a poesia de Cabral é seca, precisa, racional, quase matemática.
          Paradoxalmente, esse rigor extremo produz uma emoção muito mais forte do que o
          lirismo fácil.
        </p>
        <p>
          Sua obra mais importante e mais cobrada no ENEM é <strong>Morte e Vida Severina</strong>
          (1955), subtitulada "auto de natal pernambucano". O poema narra a viagem de Severino,
          retirante nordestino, do sertão pernambucano ao Recife, seguindo o Rio Capibaribe.
          Ao longo do caminho, Severino encontra apenas morte — morte por seca, por trabalho
          escravo, por violência. A chegada ao Recife não traz salvação: a cidade é tão miserável
          quanto o sertão. O final, paradoxalmente, é de afirmação da vida: o nascimento de um
          filho pobre é celebrado como resistência.
        </p>

        <div className="lesson-highlight">
          <h3>Por que Morte e Vida Severina é cobrado no ENEM?</h3>
          <ul>
            <li><strong>Rigor formal:</strong> o poema usa redondilhas maiores (versos de sete sílabas) com constância disciplinada — a forma popular sertaneja a serviço de conteúdo social sério.</li>
            <li><strong>Duplo sentido do título:</strong> "Severina" é nome próprio nordestino comum, mas também adjetivo que significa "severa, rígida" — vida/morte severa, vida/morte da severidade.</li>
            <li><strong>Crítica social:</strong> denúncia sistemática das condições de vida do nordestino pobre sem romantismo ou esperança fácil.</li>
            <li><strong>Intertextualidade:</strong> o auto de natal subverte a tradição cristã — o "nascimento" final não é do Messias, mas de um filho de operário pernambucano.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>6. Os Três Gigantes da Terceira Fase: Quadro Comparativo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Guimarães Rosa</th>
                <th>Clarice Lispector</th>
                <th>João Cabral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gênero principal</td>
                <td>Romance e conto</td>
                <td>Romance e conto</td>
                <td>Poesia</td>
              </tr>
              <tr>
                <td>Espaço literário</td>
                <td>Sertão mineiro (universal)</td>
                <td>Espaço interior da consciência</td>
                <td>Nordeste pernambucano e recifense</td>
              </tr>
              <tr>
                <td>Inovação central</td>
                <td>Neologismo, recriação da língua</td>
                <td>Fluxo de consciência, epifania</td>
                <td>Rigor construtivo, antipoesia</td>
              </tr>
              <tr>
                <td>Obra mais cobrada</td>
                <td><em>Grande Sertão: Veredas</em></td>
                <td><em>A Hora da Estrela</em></td>
                <td><em>Morte e Vida Severina</em></td>
              </tr>
              <tr>
                <td>Questão existencial</td>
                <td>O diabo existe? / O mal é humano?</td>
                <td>Quem sou eu? / A realidade suporta-se?</td>
                <td>Como se vive com a morte cotidiana?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geração de 45 Stricto Sensu</span>
        <h2>7. A Geração de 45 e o Neomodernismo Poético</h2>

        <p>
          Em sentido estrito, a <strong>Geração de 45</strong> designa um grupo de poetas que surge
          no final dos anos 1940 como reação à linguagem coloquial e ao descuido formal de parte
          da poesia modernista. Esses poetas valorizam o rigor formal, a voltam ao verso medido,
          à construção cuidadosa — sem abandonar os conquistas temáticas do Modernismo.
        </p>
        <p>
          Os principais nomes são <strong>Ledo Ivo</strong> (1924–2012), <strong>Domingos
          Carvalho da Silva</strong> (1915–2003), <strong>Geir Campos</strong> (1924–1999) e
          <strong> Darcy Damasceno</strong>. João Cabral de Melo Neto é frequentemente associado
          a esse grupo, mas sua obra o supera em muito — ele representa um caso singular de rigor
          levado a um extremo que transcende qualquer escola.
        </p>
        <p>
          A Geração de 45 stricto sensu é menos cobrada no ENEM do que os três grandes nomes
          acima, mas é importante compreender seu papel histórico: ela estabelece a ponte entre
          o Modernismo e a poesia concreta dos anos 1950–1960 (Noigandres, Haroldo e Augusto
          de Campos, Décio Pignatari), que levaria o rigor formal ao limite absoluto.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e Estratégia</span>
        <h2>8. Como o ENEM Cobra a Terceira Fase</h2>

        <p>
          A Terceira Fase Modernista é cobrada no ENEM com foco em <strong>interpretação de
          fragmentos literários</strong>. O exame quase nunca pede dados biográficos isolados —
          pede que o candidato analise como a linguagem constrói o sentido.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Guimarães Rosa no ENEM</h3>
            <p>Questões sobre neologismo, sertão simbólico, ambiguidade moral, linguagem que recria o português. Identifique: o que a palavra inventada sugere? Qual questão filosófica está em jogo?</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Clarice no ENEM</h3>
            <p>Questões sobre fluxo de consciência, epifania, perspectiva de personagens marginalizados (<em>A Hora da Estrela</em>). Identifique: quando a percepção da personagem se rompe e por quê?</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>João Cabral no ENEM</h3>
            <p>Questões sobre rigor formal, redondilha como forma popular, crítica social ao nordestino pobre. Identifique: como a forma austere expressa o sofrimento austero dos personagens?</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Comparação entre fases</h3>
            <p>O ENEM pode pedir que o candidato compare as três fases modernistas. Lembre: 1ª = ruptura; 2ª = compromisso social; 3ª = rigor + introspecção.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>A questão da linguagem na Terceira Fase:</strong>
          <p>
            Os três grandes escritores da Terceira Fase — Rosa, Clarice e Cabral — têm em comum
            a consciência de que a linguagem não é apenas um veículo para comunicar ideias: ela
            <em> é</em> a própria experiência literária. Em Rosa, a língua reinventada força o
            leitor a perceber o sertão de novo. Em Clarice, a prosa fragmentada replica a
            fragmentação da consciência. Em Cabral, a palavra precisa é a pedra com que o poeta
            constrói. Quando o ENEM apresentar textos desses autores, pergunte sempre: o que a
            <em>forma</em> da linguagem está dizendo além do conteúdo?
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outros Nomes do Pós-45</span>
        <h2>8b. Poesia Concreta e Outros Movimentos Paralelos</h2>

        <p>
          A Terceira Fase Modernista não se reduz a Guimarães Rosa, Clarice e João Cabral —
          embora esses três dominem o cânone e o ENEM. Em paralelo, desenvolvem-se outros
          movimentos e autores que expandem ainda mais o horizonte da literatura brasileira
          no período.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔲</span>
            <h3>Poesia Concreta (anos 1950–1960)</h3>
            <p>Haroldo de Campos, Augusto de Campos e Décio Pignatari; o poema como objeto visual — a disposição gráfica das palavras no papel cria sentido além do significado lexical.</p>
          </div>
          <div className="lesson-card">
            <span>🐉</span>
            <h3>Murilo Rubião (1916–1991)</h3>
            <p>Precursor do realismo fantástico no Brasil antes de García Márquez; contos como <em>O Pirotécnico Zacarias</em> inserem o fantástico na realidade cotidiana sem espanto.</p>
          </div>
          <div className="lesson-card">
            <span>🧵</span>
            <h3>Hilda Hilst (1930–2004)</h3>
            <p>Uma das escritoras mais radicais da literatura brasileira; obra que vai da poesia lírica à prosa erótica e à filosofia; redescoberta após a morte como gênio ignorado.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Adélia Prado (1935–)</h3>
            <p>Poetisa mineira que une o cotidiano doméstico, a religiosidade popular e o erotismo numa voz poética única; descendente direta da tradição lírica de Drummond e Bandeira.</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Obra</th>
                <th>Autor</th>
                <th>Elemento mais cobrado no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Grande Sertão: Veredas</em></td>
                <td>Guimarães Rosa</td>
                <td>Neologismo, sertão filosófico, diabo como questão humana</td>
              </tr>
              <tr>
                <td><em>A Terceira Margem do Rio</em></td>
                <td>Guimarães Rosa</td>
                <td>Metáfora da margem impossível; o pai que escolhe existir fora do mundo</td>
              </tr>
              <tr>
                <td><em>A Hora da Estrela</em></td>
                <td>Clarice Lispector</td>
                <td>Metalinguagem, representação do outro, voz narrativa dupla</td>
              </tr>
              <tr>
                <td><em>Morte e Vida Severina</em></td>
                <td>João Cabral</td>
                <td>Redondilha + denúncia social, duplo sentido do título, intertextualidade</td>
              </tr>
              <tr>
                <td><em>A Paixão Segundo G.H.</em></td>
                <td>Clarice Lispector</td>
                <td>Epifania, fluxo de consciência, existencialismo feminino</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O que une todos esses escritores, apesar de suas diferenças radicais, é a consciência
          de que a linguagem literária tem uma responsabilidade própria: não comunicar apenas
          informações ou contar histórias, mas criar experiências que mudam quem lê. Rosa muda
          a língua; Clarice muda a percepção; Cabral muda a sensibilidade para o sofrimento.
          Essa ambição é o legado mais profundo da Terceira Fase Modernista.
        </p>

        <div className="lesson-highlight">
          <h3>Guimarães Rosa — Conto A Terceira Margem do Rio</h3>
          <p>
            Publicado em <em>Primeiras Estórias</em> (1962), <em>A Terceira Margem do Rio</em> é
            talvez o conto mais estudado de Rosa. Um pai, sem motivo aparente, constrói uma canoa
            e passa a viver no meio do rio — entre as duas margens — sem nunca mais tocar em terra.
            A família tenta entender, depois aceita, depois abandona. O filho narra com culpa e saudade.
            A <strong>terceira margem</strong> não existe geograficamente — é uma metáfora da recusa
            de pertencer a qualquer lado, da escolha de existir no espaço impossível entre as
            certezas. O pai que vive na terceira margem é o ser humano que recusa a vida ordinária
            sem ter palavras para explicar por quê — e esse silêncio é o coração do conto.
          </p>
        </div>

        <p>
          O que distingue a Terceira Fase Modernista dos períodos anteriores é precisamente essa
          recusa de respostas fáceis. Guimarães Rosa não explica o pai da terceira margem. Clarice
          não explica G.H. depois que ela devora a barata. João Cabral não oferece esperança fácil
          a Severino. Os três escritores compartilham uma honestidade intelectual radical: o mundo
          é misterioso, o ser humano é contraditório, e a literatura não existe para resolver essas
          contradições, mas para habitá-las com precisão e beleza. É essa ambição que torna a
          Terceira Fase o momento mais alto da maturidade literária brasileira do século XX.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>A Terceira Margem (símbolo)</h3>
            <p>A margem impossível representa: a recusa de pertencer; o espaço da diferença radical; a escolha de existir fora do mundo ordinário.</p>
          </div>
          <div className="lesson-card">
            <span>🦗</span>
            <h3>G.H. devora a barata (símbolo)</h3>
            <p>O ato extremo representa: a epifania existencial; o encontro com o neutro, o impessoal, o abaixo-do-humano que é também o fundamento do humano.</p>
          </div>
          <div className="lesson-card">
            <span>⛵</span>
            <h3>A viagem de Severino (símbolo)</h3>
            <p>A travessia do sertão ao Recife representa: a impossibilidade de fuga da miséria; a morte que acompanha o nordestino em qualquer espaço; e, no final, a resistência da vida.</p>
          </div>
          <div className="lesson-card">
            <span>😈</span>
            <h3>O pacto de Riobaldo (símbolo)</h3>
            <p>O pacto com o diabo representa: o momento em que o ser humano assume a responsabilidade pelo próprio mal; o instante de escolha que define quem somos.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8c — Síntese Visual ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>8c. Mapa dos Três Grandes da Terceira Fase</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 250"
            width="700"
            height="250"
            aria-label="Mapa comparativo dos três grandes escritores da Terceira Fase Modernista brasileira"
          >
            <rect x="0" y="0" width="700" height="250" rx="12" fill="#f0f9ff" />

            <rect x="245" y="10" width="210" height="45" rx="9" fill="#0891b2" />
            <text x="350" y="30" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">TERCEIRA FASE — PÓS-45</text>
            <text x="350" y="46" textAnchor="middle" fontSize="11" fill="#cffafe">Rigor · Introspecção · Linguagem</text>

            <line x1="175" y1="55" x2="350" y2="55" stroke="#0891b2" strokeWidth="2" />
            <line x1="350" y1="55" x2="525" y2="55" stroke="#0891b2" strokeWidth="2" />
            <line x1="175" y1="55" x2="175" y2="95" stroke="#0891b2" strokeWidth="2" />
            <line x1="350" y1="55" x2="350" y2="95" stroke="#0891b2" strokeWidth="2" />
            <line x1="525" y1="55" x2="525" y2="95" stroke="#0891b2" strokeWidth="2" />

            <rect x="25" y="95" width="300" height="70" rx="8" fill="#dbeafe" />
            <text x="175" y="118" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">Guimarães Rosa</text>
            <text x="175" y="135" textAnchor="middle" fontSize="10" fill="#1e40af">Grande Sertão: Veredas (1956)</text>
            <text x="175" y="150" textAnchor="middle" fontSize="10" fill="#1e40af">Neologismo · sertão filosófico · diabo humano</text>
            <text x="175" y="162" textAnchor="middle" fontSize="9" fill="#1e40af" fontStyle="italic">"O diabo não há! Existe é homem humano."</text>

            <rect x="200" y="95" width="300" height="70" rx="8" fill="#fce7f3" />
            <text x="350" y="118" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Clarice Lispector</text>
            <text x="350" y="135" textAnchor="middle" fontSize="10" fill="#9d174d">A Hora da Estrela (1977)</text>
            <text x="350" y="150" textAnchor="middle" fontSize="10" fill="#9d174d">Fluxo consciência · epifania · metalinguagem</text>
            <text x="350" y="162" textAnchor="middle" fontSize="9" fill="#9d174d" fontStyle="italic">"Para escrever sobre ela é preciso transformar-me."</text>

            <rect x="375" y="95" width="300" height="70" rx="8" fill="#d1fae5" />
            <text x="525" y="118" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">João Cabral de Melo Neto</text>
            <text x="525" y="135" textAnchor="middle" fontSize="10" fill="#065f46">Morte e Vida Severina (1955)</text>
            <text x="525" y="150" textAnchor="middle" fontSize="10" fill="#065f46">Rigor formal · redondilha · crítica social</text>
            <text x="525" y="162" textAnchor="middle" fontSize="9" fill="#065f46" fontStyle="italic">"...e não há melhor resposta / que o espetáculo da vida"</text>

            <text x="350" y="218" textAnchor="middle" fontSize="11" fill="#0891b2" fontWeight="bold">Pós-Segunda Guerra · Getúlio cai · Redemocratização · JK · Brasília</text>
          </svg>
          <figcaption>Os três escritores fundamentais da Terceira Fase Modernista e suas marcas distintivas.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação da Terceira Fase"
          statement={
            <p>
              A Terceira Fase Modernista (Pós-45) distingue-se da Segunda Fase principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "Retorno ao Parnasianismo e às formas clássicas como soneto e odes, em reação ao experimentalismo modernista." },
            { letter: "b", text: "Intensificação da denúncia social regionalista nordestina, com novos romances sobre a seca e o coronelismo." },
            { letter: "c", text: "Ênfase no rigor formal, na introspecção psicológica e na inovação linguística, com menor foco no regionalismo e maior atenção à existência e à linguagem em si.", correct: true },
            { letter: "d", text: "Abandono da literatura em favor das artes plásticas e da música, como na Semana de Arte Moderna de 1922." },
          ]}
          resolution={
            <p>
              A Terceira Fase não é uma continuação direta da Segunda, mas um aprofundamento em
              direção diferente. Enquanto a Segunda Fase privilegiava o romance regionalista e a
              denúncia social externa (seca, latifúndio), a Terceira Fase volta-se para a linguagem
              como objeto de investigação e para a consciência humana como espaço literário.
              Guimarães Rosa reinventa a língua; Clarice explora o fluxo de consciência; Cabral
              impõe rigor formal absoluto. A alternativa C capta esses traços. A alternativa A
              seria o Parnasianismo; B é a Segunda Fase; D não corresponde a nenhuma fase literária.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Linguagem de Guimarães Rosa"
          statement={
            <p>
              Uma das marcas mais reconhecíveis de Guimarães Rosa é o uso sistemático de neologismos
              — palavras criadas ou reinventadas pelo autor. Por exemplo, em vez de "anoitecer",
              Rosa pode escrever "a noitecera"; em vez de "saudade", pode criar "saudosice" ou
              "saudosagem". Qual é o efeito literário dessa estratégia?
            </p>
          }
          options={[
            { letter: "a", text: "Demonstra a erudição do autor, que conhece diferentes línguas e vocabulários técnicos que ele insere no texto para impressionar o leitor." },
            { letter: "b", text: "Força o leitor a desautomatizar a leitura — a cada palavra nova, o leitor precisa parar e construir o sentido, tornando a leitura uma experiência ativa de descoberta da língua.", correct: true },
            { letter: "c", text: "Representa uma limitação editorial: Guimarães Rosa cometia erros gramaticais que os editores não corrigiam por respeito ao autor." },
            { letter: "d", text: "Cria um efeito regionalista realista, reproduzindo com fidelidade o vocabulário que os sertanejos mineiros usavam no início do século XX." },
          ]}
          resolution={
            <p>
              O neologismo rosiano não é erro, erudição ostensiva nem mero realismo regional —
              é um dispositivo poético preciso. Ao criar palavras novas (ou derivações inesperadas
              de palavras existentes), Rosa quebra o automatismo da leitura: o leitor comum que
              reconhece automaticamente "anoitecer" precisa se deter diante de "noitecera", perceber
              a sonoridade diferente, construir o sentido pela etimologia e pelo contexto. Esse
              processo de construção ativa do sentido é o que Rosa quer: ele não quer uma leitura
              passiva, mas uma experiência em que o leitor cocria a língua junto com o texto. A
              alternativa B captura esse mecanismo com precisão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Morte e Vida Severina — Rigor e Forma Popular"
          statement={
            <p>
              Em <em>Morte e Vida Severina</em>, João Cabral de Melo Neto usa sistematicamente
              a redondilha maior (verso de sete sílabas) — um metro da tradição popular nordestina,
              dos repentistas e das cantigas. Um crítico afirma: <em>"Cabral usa a forma popular
              não por celebração folclórica, mas como instrumento de denúncia."</em> Essa afirmação
              é:
            </p>
          }
          options={[
            { letter: "a", text: "Incorreta; Cabral usa a redondilha para homenagear a tradição popular nordestina e preservar uma forma cultural ameaçada de extinção." },
            { letter: "b", text: "Correta: ao usar a forma que o povo usa para celebrar (cantiga, folheto) para falar de morte e miséria, Cabral cria uma tensão entre a forma leve e o conteúdo pesado que intensifica a denúncia.", correct: true },
            { letter: "c", text: "Incorreta; Cabral usa a redondilha por limitação técnica — ele não dominava as formas mais complexas da tradição lírica erudita." },
            { letter: "d", text: "Parcialmente correta, mas o efeito é apenas estético; a escolha da redondilha não tem impacto no significado político ou social do poema." },
          ]}
          resolution={
            <p>
              O crítico tem razão, e a alternativa B desenvolve corretamente o argumento. A redondilha
              maior é o metro dos folhetos de cordel, das cantigas de roda, das músicas de festa —
              associada ao ritmo, à leveza, à celebração popular. Ao usar exatamente essa forma para
              descrever a jornada de Severino por um corredor de mortes, Cabral cria uma dissonância
              poderosa: a leveza formal contrasta com o peso do conteúdo, e essa tensão é
              politicamente eficaz. É como cantar um réquiem no ritmo de uma ciranda — o efeito
              é desolador exatamente porque a forma promete festa e entrega tragédia. Não é
              homenagem folclórica (A) nem limitação técnica (C); e o efeito é fundamentalmente
              político, não apenas estético (D).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Clarice Lispector — A Hora da Estrela"
          statement={
            <p>
              No romance <em>A Hora da Estrela</em> (1977), Clarice Lispector apresenta um narrador
              chamado Rodrigo S.M. que conta a história de Macabéa, nordestina pobre que trabalha
              como datilógrafa no Rio de Janeiro. Em determinado momento, Rodrigo afirma:
              <br /><br />
              <em>"Sim, mas não esquecer que para escrever sobre uma moça é preciso que eu me
              transforme em moça, que não sou."</em>
              <br /><br />
              O recurso literário utilizado nesse trecho e seu efeito são:
            </p>
          }
          options={[
            { letter: "a", text: "Narrador onisciente clássico; o trecho demonstra que o autor consegue se identificar com qualquer personagem sem dificuldade." },
            { letter: "b", text: "Metalinguagem — o narrador comenta o próprio ato de narrar, problematizando a relação entre quem escreve e o sujeito escrito, e questionando se um homem de elite pode falar por uma mulher pobre.", correct: true },
            { letter: "c", text: "Ironia romântica que indica que Rodrigo está apaixonado por Macabéa e deseja se aproximar dela pela escrita." },
            { letter: "d", text: "Fluxo de consciência que revela o conflito psicológico interno de Rodrigo sobre sua identidade de gênero." },
          ]}
          resolution={
            <p>
              O trecho é um exemplo preciso de <strong>metalinguagem</strong>: o narrador não apenas
              conta a história de Macabéa, mas comenta o próprio processo de construção dessa história.
              Ao afirmar que "para escrever sobre uma moça é preciso que eu me transforme em moça",
              Rodrigo expõe a dificuldade (e talvez a impossibilidade) de representar o outro quando
              existem diferenças profundas de gênero, classe e origem. Clarice usa esse recurso para
              questionar a própria representação literária: quem tem o direito de falar por quem?
              Essa pergunta é central para compreender <em>A Hora da Estrela</em> e é exatamente o
              tipo de questão que o ENEM cobra quando pede para identificar o efeito de um recurso
              narrativo sofisticado.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Grande Sertão: Veredas — Ambiguidade e Filosofia"
          statement={
            <p>
              Em <em>Grande Sertão: Veredas</em>, o narrador Riobaldo afirma em vários momentos
              que fez um pacto com o Diabo numa encruzilhada, mas também diz não ter certeza se
              o Diabo realmente apareceu. O romance termina com a afirmação:
              <em> "O diabo não há! [...] Existe é homem humano."</em>
              <br /><br />
              Qual é a interpretação mais adequada para essa ambiguidade fundamental do romance?
            </p>
          }
          options={[
            { letter: "a", text: "Riobaldo é um narrador não confiável por razão de loucura; a ambiguidade indica que ele não consegue distinguir realidade de delírio." },
            { letter: "b", text: "Guimarães Rosa questiona a existência literal do diabo segundo a doutrina cristã, propondo uma visão ateia do universo do sertão." },
            { letter: "c", text: "A ambiguidade é o ponto: ao manter em aberto se o diabo existe ou não, Rosa desloca a questão do sobrenatural para o humano — o mal não é uma entidade externa, mas uma potência que existe dentro de cada ser humano.", correct: true },
            { letter: "d", text: "A frase final resolve a ambiguidade: Riobaldo conclui que o diabo não existe, confirmando que todo o romance foi uma alucinação causada pelo calor do sertão." },
          ]}
          resolution={
            <p>
              A ambiguidade de <em>Grande Sertão: Veredas</em> é uma estratégia filosófica
              deliberada, não um defeito narrativo. Ao manter em suspenso a questão "o diabo existe?",
              Rosa transfere o peso da questão para onde realmente interessa: o mal não é um problema
              teológico sobre a existência de uma entidade sobrenatural, mas um problema antropológico
              sobre a capacidade humana de fazer o mal. A frase final — "O diabo não há! [...] Existe
              é homem humano" — não é uma conclusão ateia, mas uma afirmação sobre a responsabilidade
              humana: nós somos o diabo, nós fazemos o mal, não podemos atribuí-lo a uma entidade
              externa. Essa é a questão existencial mais profunda do romance — e o que o torna
              filosoficamente universal, além de regionalmente sertanejo.
            </p>
          }
        />
      </section>
    </article>
  );
}
