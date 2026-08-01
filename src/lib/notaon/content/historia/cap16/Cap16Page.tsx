"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      {/* ── HERO ── */}
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 16</span>
          <h1>Crise do Feudalismo e transição para a Idade Moderna</h1>
          <p>
            O feudalismo europeu, estável por séculos, entrou em colapso acelerado
            a partir do século XIV. A Peste Negra matou até um terço da população
            europeia, revoltas camponesas sacudiram a ordem social, a Guerra dos
            Cem Anos reconfigurou fronteiras e identidades, e a Igreja perdeu
            credibilidade diante de crises internas profundas. Desse caldo de
            contradições emergiu o mundo moderno — com seus Estados nacionais,
            burguesia, humanismo e o germe da Reforma Protestante.
          </p>
        </div>
      </section>

      {/* ── 1. PESTE NEGRA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>A Peste Negra (1347–1353): a maior catástrofe demográfica medieval</h2>
        <p>
          A <strong>Peste Negra</strong> — nome dado à combinação de peste
          bubônica, pneumônica e septicêmica causada pela bactéria
          <em> Yersinia pestis</em> — chegou à Europa em 1347 pelos barcos
          genoveses que atracaram em Messina, na Sicília, vindos da Crimeia.
          Em poucos anos, varreu o continente de oeste a leste, acompanhando
          as rotas comerciais.
        </p>
        <div className="lesson-highlight">
          <strong>Origem e disseminação:</strong>
          <ul>
            <li>
              Origem na Ásia Central (Mongólia/China, dec. de 1330); os mongóis
              sitiadores de Caffa (Crimeia) lançaram cadáveres contaminados
              sobre as muralhas (possível primeiro uso de arma biológica).
            </li>
            <li>
              Barcos genoveses transportaram a doença pelo Mediterrâneo;
              pulgas dos ratos negros (comuns nos porões dos navios) eram
              o vetor principal.
            </li>
            <li>
              Entre 1347 e 1353, estima-se que 25 a 50 milhões de europeus
              morreram — possivelmente 1/3 da população total do continente.
              Algumas cidades perderam mais da metade de seus habitantes.
            </li>
          </ul>
        </div>

        {/* SVG 1: Gráfico de impacto demográfico */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 300" width="100%" aria-label="Gráfico esquemático do impacto demográfico da Peste Negra na Europa">
            <rect x="0" y="0" width="700" height="300" fill="#fefefe" rx="8" stroke="#ddd" strokeWidth="1" />

            {/* Eixos */}
            <line x1="80" y1="250" x2="640" y2="250" stroke="#555" strokeWidth="2" />
            <line x1="80" y1="30" x2="80" y2="250" stroke="#555" strokeWidth="2" />

            {/* Rótulos eixo Y */}
            <text x="70" y="55" textAnchor="end" fill="#555" fontSize="11">80M</text>
            <text x="70" y="105" textAnchor="end" fill="#555" fontSize="11">60M</text>
            <text x="70" y="155" textAnchor="end" fill="#555" fontSize="11">40M</text>
            <text x="70" y="205" textAnchor="end" fill="#555" fontSize="11">20M</text>
            <text x="70" y="250" textAnchor="end" fill="#555" fontSize="11">0</text>

            {/* Linhas de referência */}
            {[55, 105, 155, 205].map((y, i) => (
              <line key={i} x1="80" y1={y} x2="640" y2={y} stroke="#eee" strokeWidth="1" />
            ))}

            {/* Rótulos eixo X */}
            {[
              { x: 150, label: "1300\n(antes)" },
              { x: 300, label: "1350\n(auge)" },
              { x: 450, label: "1380\n(depois)" },
              { x: 580, label: "1450\n(recuperação)" },
            ].map((pt, i) => (
              <g key={i}>
                <line x1={pt.x} y1="250" x2={pt.x} y2="258" stroke="#555" strokeWidth="1.5" />
                {pt.label.split("\n").map((ln, j) => (
                  <text key={j} x={pt.x} y={268 + j * 13} textAnchor="middle" fill="#555" fontSize="10">{ln}</text>
                ))}
              </g>
            ))}

            {/* Barras de população (escala: 80M = 220px altura, 0 = y250) */}
            {/* Antes (1300): ~75M = altura 206 → topo em y44 */}
            <rect x="110" y="44" width="80" height="206" fill="#4caf50" opacity="0.7" rx="4" />
            <text x="150" y="38" textAnchor="middle" fill="#2e7d32" fontSize="12" fontWeight="bold">~75 Mi</text>

            {/* Auge Peste (1350): ~50M = 137 → topo 113 */}
            <rect x="260" y="113" width="80" height="137" fill="#f44336" opacity="0.8" rx="4" />
            <text x="300" y="107" textAnchor="middle" fill="#c62828" fontSize="12" fontWeight="bold">~50 Mi</text>

            {/* Após (1380): ~38M = 104 → topo 146 */}
            <rect x="410" y="146" width="80" height="104" fill="#ff9800" opacity="0.75" rx="4" />
            <text x="450" y="140" textAnchor="middle" fill="#e65100" fontSize="12" fontWeight="bold">~38 Mi</text>

            {/* Recuperação (1450): ~55M = 151 → topo 99 */}
            <rect x="540" y="99" width="80" height="151" fill="#8bc34a" opacity="0.7" rx="4" />
            <text x="580" y="93" textAnchor="middle" fill="#33691e" fontSize="12" fontWeight="bold">~55 Mi</text>

            {/* Legenda */}
            <text x="350" y="295" textAnchor="middle" fill="#777" fontSize="10">
              População estimada da Europa Ocidental (em milhões) — impacto da Peste Negra
            </text>
          </svg>
          <figcaption>
            Impacto demográfico da Peste Negra: a Europa levou mais de um século
            para recuperar os níveis populacionais de 1300.
          </figcaption>
        </figure>

        <p>
          O impacto social foi profundo: a <strong>escassez de mão de obra</strong>
          aumentou o poder de barganha dos camponeses sobreviventes, que exigiram
          melhores condições e salários mais altos. Senhorios que dependiam do
          trabalho servil enfrentaram crise de rentabilidade. A Igreja também
          sofreu: o clero morria em alta proporção (viviam junto aos doentes),
          e muitos fiéis questionavam "onde estava Deus" diante de tamanho
          extermínio.
        </p>
      </section>

      {/* ── 2. MANIFESTAÇÕES ARTÍSTICAS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>A Morte na arte: Dança Macabra e o fim do otimismo medieval</h2>
        <p>
          A Peste transformou a sensibilidade cultural europeia. A morte, antes
          tratada como passagem solene para o além, tornou-se presença cotidiana
          e democrática. A <strong>Dança Macabra</strong> (<em>Danse Macabre</em>)
          foi uma forma artística — gravuras, afrescos, poemas — que representava
          esqueletos (a Morte personificada) arrastando para a dança papas, reis,
          burgueses, camponeses: todos igualmente vulneráveis diante da epidemia.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Decamerão de Boccaccio (1353):</strong> escrito durante e
            após a Peste em Florença, o livro apresenta dez jovens refugiados
            numa villa suburbana contando histórias para fugir do medo. É um
            dos primeiros textos da literatura ocidental a colocar seres humanos
            comuns, com suas paixões, astúcias e vícios, como protagonistas —
            prenúncio do Renascimento humanista.
          </p>
        </div>
      </section>

      {/* ── 3. REVOLTAS CAMPONESAS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>Revoltas camponesas: Jacquerie e Wat Tyler</h2>
        <p>
          A combinação de aumento de impostos (para financiar guerras), escassez
          pós-Peste e opressão senhorial gerou explosões sociais violentas em
          vários países europeus.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Revolta</th>
                <th>Local / Ano</th>
                <th>Causas principais</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Jacquerie</strong></td>
                <td>França, 1358</td>
                <td>Impostos para custear a Guerra dos Cem Anos; captura do rei João II; humilhação da cavalaria em Poitiers (1356)</td>
                <td>Reprimida violentamente pela nobreza; líderes executados; sem conquistas imediatas</td>
              </tr>
              <tr>
                <td><strong>Revolta de Wat Tyler</strong></td>
                <td>Inglaterra, 1381</td>
                <td>Poll Tax (imposto per capita) após epidemias; servitude persistente; desigualdade social</td>
                <td>Wat Tyler assassinado em negociação; revoltas espalhadas; algumas demandas (fim da servidão) foram prometidas e depois negadas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Embora derrotadas militarmente, essas revoltas aceleraram
          transformações estruturais: a servidão foi gradualmente abolida na
          Inglaterra e França ao longo dos séculos seguintes, e os camponeses
          conquistaram maior mobilidade e poder de negociação — efeitos a longo
          prazo que a repressão imediata não pôde impedir.
        </p>
      </section>

      {/* ── 4. GUERRA DOS CEM ANOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>Guerra dos Cem Anos (1337–1453): França, Inglaterra e Joana d'Arc</h2>
        <p>
          A <strong>Guerra dos Cem Anos</strong> foi na verdade uma série de
          conflitos intermitentes entre França e Inglaterra, com causas
          essencialmente dinásticas e territoriais: o rei inglês Eduardo III
          reivindicou o trono francês (avô materno era rei da França); a disputa
          pelo Ducado de Aquitânia (rico em vinhos) era de longa data.
        </p>

        {/* SVG 2: linha do tempo crise feudal */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 760 180" width="100%" aria-label="Linha do tempo da crise feudal europeia">
            <rect x="0" y="0" width="760" height="180" fill="#f9f5ee" rx="8" />
            <line x1="30" y1="90" x2="730" y2="90" stroke="#7b5e3a" strokeWidth="2.5" />
            <polygon points="730,83 746,90 730,97" fill="#7b5e3a" />

            {[
              { x: 30,  year: "1309", label: "Papado de\nAvignon\ncomeça" },
              { x: 130, year: "1337", label: "Início\nGuerra\n100 Anos" },
              { x: 220, year: "1347", label: "Peste\nNegra\nchega" },
              { x: 305, year: "1358", label: "Jacquerie\n(França)" },
              { x: 370, year: "1378", label: "Cisma do\nOcidente" },
              { x: 430, year: "1381", label: "Revolta\nWat Tyler" },
              { x: 505, year: "1415", label: "Jan Hus\nqueimado" },
              { x: 575, year: "1429", label: "Joana\nd'Arc" },
              { x: 635, year: "1437", label: "Fim do\nCisma" },
              { x: 700, year: "1453", label: "Fim da\nGuerra\n100 Anos" },
            ].map((ev, i) => (
              <g key={i}>
                <line x1={ev.x} y1="90" x2={ev.x} y2={i % 2 === 0 ? 52 : 128} stroke="#5d4037" strokeWidth="1.5" />
                <circle cx={ev.x} cy="90" r="5" fill={ev.year === "1453" ? "#c62828" : "#7b5e3a"} />
                {ev.label.split("\n").map((ln, j) => (
                  <text
                    key={j}
                    x={ev.x}
                    y={(i % 2 === 0 ? 47 : 148) + j * 12 - (ev.label.split("\n").length - 1) * 5}
                    textAnchor="middle"
                    fill="#3e2723"
                    fontSize="8.5"
                  >
                    {ln}
                  </text>
                ))}
                <text x={ev.x} y="105" textAnchor="middle" fill="#5d4037" fontSize="8" fontWeight="bold">{ev.year}</text>
              </g>
            ))}

            <text x="380" y="172" textAnchor="middle" fill="#888" fontSize="9">
              Linha do tempo: Crise feudal europeia (1309–1453)
            </text>
          </svg>
          <figcaption>
            Crise feudal: do Papado de Avignon ao fim da Guerra dos Cem Anos
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Joana d'Arc (1412–1431) — símbolo da identidade nacional francesa:</strong>
          <p>
            Camponesa de Domrémy que afirmava receber visões de santos ordenando-a
            a libertar a França dos ingleses. Liderou o exército francês no
            levantamento do cerco de Orléans (1429), virou a maré da guerra.
            Traída, foi vendida aos ingleses, julgada por heresia e queimada viva
            em Ruão (1431) aos 19 anos. Reabilitada em 1456, canonizada em 1920.
            Para o ENEM: símbolo da formação da identidade nacional e do papel
            das mulheres na história.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Período</th>
                <th>Vantagem</th>
                <th>Evento decisivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª fase</td>
                <td>1337–1360</td>
                <td>Inglaterra</td>
                <td>Crécy (1346): arco longo inglês massacra cavalaria francesa; Captura do rei João II em Poitiers (1356)</td>
              </tr>
              <tr>
                <td>2ª fase</td>
                <td>1369–1396</td>
                <td>França</td>
                <td>Recuperação francesa; Agincourt (1415) nova derrota francesa catastrófica</td>
              </tr>
              <tr>
                <td>3ª fase</td>
                <td>1415–1453</td>
                <td>França (final)</td>
                <td>Joana d'Arc reverte cerco de Orléans (1429); expulsão dos ingleses; fim com vitória francesa em Castillon (1453)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. RENASCIMENTO COMERCIAL ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>Renascimento comercial urbano (séculos XI–XIII): a burguesia emerge</h2>
        <p>
          Embora o colapso feudal seja mais dramático no século XIV, suas raízes
          estão no renascimento comercial dos séculos anteriores. As
          <strong> feiras de Champagne</strong> (nordeste da França) reuniam
          mercadores de toda a Europa; <strong>Veneza</strong> e
          <strong> Gênova</strong> dominavam o comércio mediterrâneo com
          o Oriente.
        </p>
        <p>
          O retorno da economia monetária — após séculos de escambo feudal —
          criou a <strong>burguesia</strong>: classe de comerciantes e artesãos
          que não pertencia nem à nobreza nem ao clero nem ao campesinato.
          Os burgueses viviam nos <em>burgos</em> (cidades amuralhadas) e
          acumulavam capital monetário, o que os tornava cada vez mais poderosos
          e independentes dos senhores feudais.
        </p>
      </section>

      {/* ── 6. ESTADOS NACIONAIS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>Formação dos Estados nacionais: do poder feudal disperso à centralização</h2>
        <p>
          Uma das consequências mais importantes da crise feudal foi a
          <strong> centralização monárquica</strong> e a formação dos primeiros
          Estados nacionais modernos. Os reis, apoiados pela burguesia (que
          preferia um rei a vários senhores), fortaleceram seu poder às custas
          da nobreza feudal.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Portugal</strong>
            <p>
              Considerado o primeiro Estado nacional da Europa (final do século XII).
              A Reconquista cristã do território ibérico dos mouros foi concluída
              relativamente cedo (1249, com Afonso III), permitindo centralização
              precoce. Lança as grandes navegações a partir do século XV.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Espanha</strong>
            <p>
              Unificada com o casamento de Fernando e Isabel (1469) e a conclusão
              da Reconquista (queda de Granada, 1492). No mesmo ano, patrocina a
              viagem de Colombo. A Inquisição espanhola serviu também como
              instrumento de homogeneização cultural.
            </p>
          </div>
          <div className="lesson-card">
            <strong>França e Inglaterra</strong>
            <p>
              A Guerra dos Cem Anos, paradoxalmente, fortaleceu a identidade
              nacional dos dois países: franceses e ingleses começaram a se
              perceber como nações distintas, não apenas como súditos de
              dinastias. A monarquia francesa saiu fortalecida em 1453.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Elementos do Estado nacional moderno:</strong> território
          definido com fronteiras, monarquia centralizada, exército permanente
          (não mais feudal), impostos cobrados diretamente pelo rei, língua
          comum (homogeneização linguística), identidade coletiva compartilhada.
        </div>
      </section>

      {/* ── 7. CRISE DA IGREJA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>Crise da Igreja Católica (séc. XIV–XV): Avignon, Cisma e heresias</h2>
        <p>
          Nenhuma instituição medieval sofreu tantos golpes simultâneos quanto a
          Igreja Católica nos séculos XIV e XV. A perda de credibilidade abriu
          espaço para as contestações que culminariam na Reforma Protestante do
          século XVI.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Crise</th>
                <th>Período</th>
                <th>Descrição</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Papado de Avignon</td>
                <td>1309–1377</td>
                <td>"Cativeiro babilônico": os papas se mudam para Avignon (França), sob influência do rei francês. Corrupção ostensiva.</td>
                <td>Perda de autoridade universal; papado visto como fantoche político</td>
              </tr>
              <tr>
                <td>Cisma do Ocidente</td>
                <td>1378–1417</td>
                <td>Dois papas simultâneos (Roma e Avignon) e depois três; reis europeus escolhiam qual obedecer</td>
                <td>Escândalo sem precedentes; enfraquecimento drástico da autoridade papal</td>
              </tr>
              <tr>
                <td>John Wycliffe (Inglaterra)</td>
                <td>1320–1384</td>
                <td>Defendeu a Bíblia como única autoridade; traduziu para o inglês; negou a transubstanciação</td>
                <td>Precursor direto da Reforma; seus seguidores (Lolardos) espalharam ideias reformistas</td>
              </tr>
              <tr>
                <td>Jan Hus (Boêmia)</td>
                <td>1369–1415</td>
                <td>Influenciado por Wycliffe; criticou simonia, indulgências, riqueza da Igreja; queimado no Concílio de Constança (1415)</td>
                <td>Mártir que inspira Lutero um século depois; desencadeia guerras hussitas na Boêmia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. HUMANISMO INCIPIENTE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>O humanismo incipiente: Petrarca, Dante, Boccaccio</h2>
        <p>
          No meio da crise, floresceu na Itália uma nova sensibilidade intelectual
          que valorizava o ser humano, a razão e a herança clássica greco-romana.
          Esses autores são <strong>pré-renascentistas</strong> — articularam
          novos valores antes que o Renascimento se instalasse plenamente.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Dante Alighieri (1265–1321)</strong>
            <p>
              A Divina Comédia (1320): primeira grande obra da literatura
              ocidental escrita em vernáculo (italiano), não em latim.
              Síntese da visão medieval (cosmos cristão com Inferno, Purgatório
              e Paraíso) com sensibilidade humanista (Virgílio, poeta pagão,
              como guia).
            </p>
          </div>
          <div className="lesson-card">
            <strong>Petrarca (1304–1374)</strong>
            <p>
              "Príncipe dos humanistas": redescobriu textos latinos clássicos,
              valorizou a Antiguidade como modelo de civilização, escreveu
              sonetos em italiano sobre sentimentos individuais — o "eu" como
              sujeito literário.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Boccaccio (1313–1375)</strong>
            <p>
              Decamerão: escrito durante a Peste Negra em Florença, com
              personagens comuns, bem-humorados, sensuais e críticos à Igreja
              — prefigura o realismo literário e a valorização das paixões
              humanas.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Pratique e Fixe</h2>

        <Exercise
          level="Básico"
          title="A Peste Negra"
          statement={
            <p>
              A Peste Negra, que devastou a Europa entre 1347 e 1353, chegou ao
              continente europeu principalmente por meio de:
            </p>
          }
          options={[
            { letter: "A", text: "Exércitos mongóis que invadiram a Europa Central" },
            { letter: "B", text: "Barcos genoveses vindos da Crimeia que atracaram na Sicília", correct: true },
            { letter: "C", text: "Cruzados que retornavam da Terra Santa com a doença" },
            { letter: "D", text: "Caravanas terrestres que atravessavam os Alpes" },
            { letter: "E", text: "Comerciantes árabes que negociavam no Porto de Marselha" },
          ]}
          resolution={
            <p>
              A Peste chegou à Europa em 1347 quando navios genoveses
              provenientes de Caffa (Crimeia) atracaram em Messina (Sicília)
              com marinheiros mortos ou agonizantes. As pulgas dos ratos nos
              porões eram o vetor da Yersinia pestis. A doença se espalhou
              pelas rotas comerciais marítimas e terrestres.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Joana d'Arc e a identidade nacional"
          statement={
            <p>
              A história de Joana d'Arc (1412–1431) é frequentemente citada
              como símbolo da formação das identidades nacionais europeias.
              Que relação existe entre sua trajetória e esse processo?
            </p>
          }
          options={[
            { letter: "A", text: "Joana d'Arc lutou para unificar França e Inglaterra sob um único rei" },
            { letter: "B", text: "Sua liderança militar baseou-se em alianças com a nobreza feudal para manter os privilégios senhoriais" },
            { letter: "C", text: "Representou a emergência de um sentimento patriótico popular que transcendia as lealdades feudais locais", correct: true },
            { letter: "D", text: "Defendeu a autoridade do papa contra os reis nacionais, fortalecendo o poder eclesiástico" },
            { letter: "E", text: "Foi um símbolo exclusivamente religioso, sem qualquer dimensão política ou nacional" },
          ]}
          resolution={
            <p>
              Joana d'Arc encarna a transição do feudalismo (lealdades pessoais
              ao senhor) para o Estado nacional (lealdade à França como nação).
              Uma camponesa que convocava um povo a lutar pela "França" —
              conceito coletivo e nacional — contra os ingleses, transcendendo
              laços feudais locais. A Guerra dos Cem Anos, no geral, fortaleceu
              identidades nacionais em ambos os países.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Causas estruturais da crise feudal"
          statement={
            <p>
              Analise o conjunto de fatores que desencadearam a crise do
              feudalismo no século XIV:
              <br /><br />
              I. A Peste Negra reduziu drasticamente a população, gerando escassez
              de mão de obra servil e aumentando o poder de negociação dos
              camponeses.
              <br />
              II. O renascimento comercial dos séculos XI–XIII criou uma burguesia
              que não cabia na estrutura tripartite feudal (clero, nobreza,
              campesinato).
              <br />
              III. A Guerra dos Cem Anos enfraqueceu a nobreza guerreira e
              fortaleceu as monarquias nacionais.
              <br />
              IV. A crise da Igreja Católica reduziu a legitimidade ideológica
              do sistema feudal, que dependia da sanção religiosa.
              <br /><br />
              Estão corretas:
            </p>
          }
          options={[
            { letter: "A", text: "Apenas I e II" },
            { letter: "B", text: "Apenas I, II e III" },
            { letter: "C", text: "Apenas II e IV" },
            { letter: "D", text: "I, II, III e IV", correct: true },
            { letter: "E", text: "Apenas III e IV" },
          ]}
          resolution={
            <p>
              Todas as quatro afirmativas estão corretas. A crise do feudalismo
              foi multidimensional: demográfica (Peste), econômica (burguesia e
              renascimento comercial), política (guerras e monarquias nacionais)
              e ideológica (crise da Igreja). Nenhum fator isolado explica a
              transição — foi a convergência de todos eles que desarticulou o
              sistema feudal e abriu caminho para a Modernidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Jan Hus e a Reforma Protestante"
          statement={
            <p>
              Jan Hus foi condenado à fogueira pelo Concílio de Constança em
              1415. Antes de morrer, teria dito: "Hoje vocês queimarão um ganso
              (hus em tcheco), mas daqui a cem anos virá uma águia que não
              conseguirão queimar." Cem anos depois, Martinho Lutero afixou suas
              95 Teses (1517).
              <br /><br />
              Que relação histórica essa frase simbólica expressa?
            </p>
          }
          options={[
            { letter: "A", text: "Que a Reforma Protestante foi diretamente planejada por Hus um século antes de Lutero" },
            { letter: "B", text: "Que Jan Hus e Martinho Lutero eram membros de uma mesma ordem religiosa secreta" },
            { letter: "C", text: "Que as críticas de Hus à Igreja (simonia, indulgências, autoridade bíblica) anteciparam os temas centrais da Reforma luterana, tornando-o seu precursor intelectual", correct: true },
            { letter: "D", text: "Que a queima de hereges foi a causa direta e exclusiva que motivou Lutero a publicar suas teses" },
            { letter: "E", text: "Que a frase demonstra que o movimento protestante surgiu na Boêmia, não na Alemanha" },
          ]}
          resolution={
            <p>
              Jan Hus antecipou os temas da Reforma: criticou a venda de
              indulgências, a autoridade da tradição sobre a Bíblia, a simonia
              e a corrupção clerical — os mesmos pontos de Lutero. A frase é
              uma construção histórica simbólica, mas capta a relação real de
              continuidade intelectual entre os dois reformadores, separados
              por um século.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Impacto social da Peste Negra"
          statement={
            <p>
              Um senhor feudal inglês reclamava em 1360: "Antes da maldita
              pestilência, meus servos trabalhavam sem reclamar. Agora pedem
              salários que não posso pagar, ameaçam fugir para as cidades
              se não atendidos. A ordem natural das coisas foi subvertida."
              <br /><br />
              O relato ilustra que a Peste Negra:
            </p>
          }
          options={[
            { letter: "A", text: "Fortaleceu o poder dos senhores feudais pela eliminação dos trabalhadores rebeldes" },
            { letter: "B", text: "Gerou escassez de mão de obra que aumentou o poder de barganha dos camponeses e trabalhadores", correct: true },
            { letter: "C", text: "Estimulou os camponeses a aceitar condições piores para sobreviver durante a epidemia" },
            { letter: "D", text: "Não teve impacto nas relações sociais, pois a Igreja manteve a ordem social" },
            { letter: "E", text: "Eliminou a burguesia urbana, que era o principal agente de transformação social medieval" },
          ]}
          resolution={
            <p>
              A lógica econômica pós-Peste foi simples: menos trabalhadores
              disponíveis → aumento do "preço" do trabalho. Camponeses que
              sobreviveram descobriram que podiam negociar. Muitos fugiram para
              as cidades em crescimento, onde a servidão era menos efetiva.
              O documento histórico ("reclamação do senhor") é fonte primária
              que o ENEM usa para testar interpretação de documentos.
            </p>
          }
        />
      </section>
    </article>
  );
}
