"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 8</span>
          <h1>Legados Culturais das Civilizações Orientais</h1>
          <p>
            As civilizações do Oriente Próximo e do Nordeste Africano — Egito, Mesopotâmia,
            Hebreus, Fenícios e Persas — não foram apenas potências políticas e militares de
            seu tempo. Foram, sobretudo, grandes laboratórios culturais cujas invenções e
            ideias chegaram ao Ocidente por meio da Grécia e de Roma, moldando profundamente
            a ciência, o direito, a religião, a filosofia, a arte e a linguagem das
            civilizações europeias e, por extensão, das Américas, da África e da Ásia
            colonizadas. Compreender esses legados é entender as raízes do mundo em que vivemos.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Egito</span>
        <h2>1. O Legado do Egito Antigo</h2>
        <p>
          O Egito Antigo foi uma das civilizações mais longevas da história humana: durou mais
          de três mil anos de história contínua, de c. 3100 a.C. até a conquista romana em
          30 a.C. Nesse período, os egípcios desenvolveram contribuições extraordinárias em
          múltiplas áreas do conhecimento humano que chegaram ao mundo ocidental principalmente
          por meio dos gregos, que frequentavam o Egito como estudantes e viajantes.
        </p>
        <p>
          Na arquitetura, os egípcios criaram monumentos que desafiam o tempo: as pirâmides de
          Gizé (c. 2560 a.C.) são a única das Sete Maravilhas do Mundo Antigo ainda de pé.
          O domínio egípcio da pedra, do uso da rampa e do aplanamento de terrenos influenciou
          diretamente a arquitetura grega e romana. O arco e a coluna colunar, que gregos e
          romanos aperfeiçoaram, têm antecedentes egípcios. Os obeliscos egípcios foram
          transportados para Roma pelos imperadores e, posteriormente, para a Europa moderna
          como símbolos de prestígio — existem hoje mais obeliscos egípcios em Roma do que no
          próprio Egito.
        </p>
        <p>
          Na medicina, os egípcios desenvolveram conhecimentos cirúrgicos sofisticados, como
          demonstra o Papiro Cirúrgico de Edwin Smith (c. 1600 a.C.), que descreve 48 casos
          clínicos com abordagem empírica. Identificaram o coração como centro do sistema
          circulatório (embora atribuíssem ao cérebro uma função menos importante), conheciam
          técnicas de sutura e de tratamento de fraturas, e utilizavam mais de 700 substâncias
          medicinais. A deusa Ísis, associada à cura, e o deus Thoth, associado à sabedoria
          médica, foram assimilados pela medicina greco-romana.
        </p>
        <p>
          Na astronomia e no calendário, os egípcios foram pioneiros: criaram um calendário
          solar de 365 dias (dividido em 12 meses de 30 dias mais 5 dias epagômenos) que foi
          a base do calendário juliano de Júlio César e, por extensão, do calendário gregoriano
          que usamos hoje. Observavam o céu com precisão para prever as cheias do Nilo e
          orientar a construção de templos e pirâmides em alinhamento com estrelas específicas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Contribuição egípcia</th>
                <th>Como chegou ao Ocidente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arquitetura</td>
                <td>Pirâmides, obeliscos, colunas, arcos de pedra</td>
                <td>Via arquitetura grega e romana</td>
              </tr>
              <tr>
                <td>Medicina</td>
                <td>Cirurgia, farmacologia, anatomia básica</td>
                <td>Via escola médica de Alexandria (greco-egípcia)</td>
              </tr>
              <tr>
                <td>Astronomia</td>
                <td>Calendário solar de 365 dias, constelações</td>
                <td>Via calendário juliano (46 a.C.) → gregoriano</td>
              </tr>
              <tr>
                <td>Matemática</td>
                <td>Geometria prática, sistema decimal, frações</td>
                <td>Via matematicos gregos (Tales, Pitágoras estudaram no Egito)</td>
              </tr>
              <tr>
                <td>Escrita</td>
                <td>Hieróglifos → escrita hierática → demótica</td>
                <td>Influência no desenvolvimento de alfabetos semitas</td>
              </tr>
              <tr>
                <td>Religião</td>
                <td>Culto de Ísis e Osíris; imortalidade da alma</td>
                <td>Cultos egípcios difundidos por todo o Império Romano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Mesopotâmia</span>
        <h2>2. O Legado da Mesopotâmia</h2>
        <p>
          A Mesopotâmia, "terra entre rios" (Tigre e Eufrates), foi o berço de várias das
          invenções mais fundamentais da civilização humana. Os sumérios, povo que habitava o
          sul da Mesopotâmia desde c. 3500 a.C., inventaram a escrita cuneiforme — o primeiro
          sistema de escrita da história, inicialmente pictográfico e depois evoluindo para
          sinais abstratos impressos em tabletes de argila com uma estilete de junco. A escrita
          surgiu de necessidades administrativas (registrar estoques e transações de templos)
          e rapidamente se expandiu para usos literários, como o poema de Gilgamesh (c. 2100
          a.C.), a obra literária mais antiga conhecida, que conta histórias de dilúvio e busca
          pela imortalidade com paralelos notáveis com o Gênesis bíblico.
        </p>
        <p>
          No campo do direito, o Código de Hamurabi (c. 1750 a.C.), gravado em um monólito
          de diorito atualmente no Louvre, é um dos primeiros conjuntos de leis escritas da
          história. Com 282 artigos, regulava desde contratos comerciais e relações de trabalho
          até crimes e punições, baseado no princípio de talião ("olho por olho, dente por
          dente"). A ideia revolucionária de que a lei deveria ser escrita, pública e aplicável
          a todos (mesmo que de forma desigual segundo a classe social) influenciou diretamente
          o direito romano e, por extensão, todos os sistemas jurídicos ocidentais.
        </p>
        <p>
          Na matemática, os babilônios (sucessores dos sumérios) criaram um sistema numeral
          de base sexagesimal (60) cujos traços ainda vemos hoje: 60 segundos em um minuto,
          60 minutos em uma hora, 360 graus em um círculo. Também desenvolveram álgebra
          rudimentar, tabelas de multiplicação e raízes quadradas. Na astronomia, foram os
          primeiros a registrar sistematicamente posições de planetas e a prever eclipses
          com base em ciclos observados, criando a base da astrologia que influenciaria os
          gregos.
        </p>

        <div className="lesson-highlight">
          <h3>O Épico de Gilgamesh e os Paralelos Bíblicos</h3>
          <p>
            O Épico de Gilgamesh, escrito na Suméria por volta de 2100 a.C., é a obra literária
            mais antiga conhecida. Nele, o herói Utnapishtim sobrevive a um grande dilúvio
            enviado pelos deuses, construindo uma grande embarcação e salvando animais e
            familiares — narrativa com paralelos impressionantes com o dilúvio de Noé no Gênesis
            bíblico. Isso sugere que a cultura hebraica absorveu elementos mesopotâmios durante
            o Cativeiro Babilônico (587–539 a.C.), ilustrando como os legados culturais
            migram e se transformam entre civilizações.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>3. Como os Legados Chegaram ao Ocidente</h2>
        <p>
          A transmissão dos legados orientais para o Ocidente foi um processo complexo, com
          múltiplos caminhos e intermediários. O mais importante foi a Grécia Antiga: filósofos
          como Tales de Mileto, Pitágoras e Platão viajaram ao Egito e à Mesopotâmia para
          estudar. Tales aprendeu geometria com os sacerdotes egípcios; Pitágoras teria passado
          22 anos no Egito antes de visitar a Babilônia. Heródoto, o "pai da História", visitou
          o Egito e documentou extensamente sua cultura. Os gregos não copiaram passivamente
          esses conhecimentos — eles os transformaram, sistematizaram e acrescentaram camadas
          de reflexão teórica que os elevaram a outro patamar.
        </p>
        <p>
          Alexandre Magno (336–323 a.C.) e o período helenístico foram o segundo grande
          momento de transmissão: a conquista do Oriente Próximo por Alexandre criou um espaço
          multicultural em que a ciência e a filosofia gregas se fundiram com os conhecimentos
          egípcios (especialmente em Alexandria, com sua famosa Biblioteca). A Roma republicana
          e imperial herdou essa síntese greco-helenística e a transmitiu à Europa medieval
          via língua latina, direito romano e Igreja Cristã (que incorporou elementos do
          pensamento grego e hebraico).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 240" width="720" height="240" aria-label="Diagrama mostrando o fluxo de conhecimentos das civilizações orientais para o Ocidente">
            <rect x="0" y="0" width="720" height="240" fill="#f0f4f8" />

            {/* Civilizações de origem */}
            <rect x="20" y="20" width="120" height="44" rx="6" fill="#2980b9" />
            <text x="80" y="38" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">EGITO</text>
            <text x="80" y="55" fontSize="9" textAnchor="middle" fill="#d0e8ff">Arquitetura, Medicina</text>
            <text x="80" y="66" fontSize="9" textAnchor="middle" fill="#d0e8ff">Calendário, Escrita</text>

            <rect x="20" y="80" width="120" height="44" rx="6" fill="#8e44ad" />
            <text x="80" y="98" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">MESOPOTÂMIA</text>
            <text x="80" y="113" fontSize="9" textAnchor="middle" fill="#e8d0ff">Escrita, Direito</text>
            <text x="80" y="124" fontSize="9" textAnchor="middle" fill="#e8d0ff">Matemática, Astronomia</text>

            <rect x="20" y="140" width="120" height="44" rx="6" fill="#c0392b" />
            <text x="80" y="158" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">HEBREUS</text>
            <text x="80" y="173" fontSize="9" textAnchor="middle" fill="#ffd0d0">Monoteísmo, Ética</text>
            <text x="80" y="184" fontSize="9" textAnchor="middle" fill="#ffd0d0">Torá, Direitos humanos</text>

            <rect x="20" y="200" width="120" height="32" rx="6" fill="#e67e22" />
            <text x="80" y="214" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">FENÍCIOS</text>
            <text x="80" y="227" fontSize="9" textAnchor="middle" fill="#fff0d0">Alfabeto, Comércio</text>

            {/* Setas para Grécia */}
            <line x1="140" y1="42" x2="270" y2="100" stroke="#2980b9" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="140" y1="102" x2="270" y2="108" stroke="#8e44ad" strokeWidth="1.5" />
            <line x1="140" y1="162" x2="270" y2="116" stroke="#c0392b" strokeWidth="1.5" />
            <line x1="140" y1="216" x2="270" y2="122" stroke="#e67e22" strokeWidth="1.5" />
            {/* Setas simples */}
            <polygon points="268,97 275,100 268,103" fill="#2980b9" />
            <polygon points="268,105 275,108 268,111" fill="#8e44ad" />
            <polygon points="268,113 275,116 268,119" fill="#c0392b" />
            <polygon points="268,119 275,122 268,125" fill="#e67e22" />

            {/* Grécia / Alexandria */}
            <rect x="280" y="80" width="130" height="64" rx="6" fill="#27ae60" />
            <text x="345" y="100" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">GRÉCIA</text>
            <text x="345" y="116" fontSize="9" textAnchor="middle" fill="#d0ffe0">Filosofia, Democracia</text>
            <text x="345" y="128" fontSize="9" textAnchor="middle" fill="#d0ffe0">Ciência, Arte</text>
            <text x="345" y="140" fontSize="9" textAnchor="middle" fill="#d0ffe0">(síntese greco-oriental)</text>

            {/* Seta Grécia → Roma */}
            <line x1="410" y1="112" x2="470" y2="112" stroke="#27ae60" strokeWidth="2" />
            <polygon points="468,108 478,112 468,116" fill="#27ae60" />

            {/* Roma */}
            <rect x="480" y="80" width="110" height="64" rx="6" fill="#d35400" />
            <text x="535" y="100" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">ROMA</text>
            <text x="535" y="116" fontSize="9" textAnchor="middle" fill="#ffe0cc">Direito Romano</text>
            <text x="535" y="128" fontSize="9" textAnchor="middle" fill="#ffe0cc">Latim, Arquitetura</text>
            <text x="535" y="140" fontSize="9" textAnchor="middle" fill="#ffe0cc">Cristianismo</text>

            {/* Seta Roma → Ocidente */}
            <line x1="590" y1="112" x2="650" y2="112" stroke="#d35400" strokeWidth="2" />
            <polygon points="648,108 658,112 648,116" fill="#d35400" />

            {/* Ocidente */}
            <rect x="660" y="75" width="50" height="74" rx="6" fill="#2c3e50" />
            <text x="685" y="95" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">OCI</text>
            <text x="685" y="108" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">DEN</text>
            <text x="685" y="121" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">TE</text>
            <text x="685" y="135" fontSize="8" textAnchor="middle" fill="#aac">Europa</text>
            <text x="685" y="145" fontSize="8" textAnchor="middle" fill="#aac">Américas</text>

            {/* Legenda */}
            <text x="360" y="200" fontSize="11" textAnchor="middle" fill="#555" fontStyle="italic">Fluxo de conhecimentos: Oriente Próximo → Grécia → Roma → Ocidente</text>
            <text x="360" y="218" fontSize="10" textAnchor="middle" fill="#777">Cada civilização transformou e acrescentou ao legado anterior</text>
          </svg>
          <figcaption>
            Diagrama simplificado do fluxo de legados culturais das civilizações orientais para
            o Ocidente, passando pela síntese grega e pela Roma imperial.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Hebreus e Fenícios</span>
        <h2>4. Legados Hebraicos e Fenícios</h2>
        <p>
          O legado hebraico para o Ocidente é, principalmente, religioso e ético. O monoteísmo
          hebraico tornou-se o fundamento teológico do cristianismo e do islã, as duas religiões
          com maior número de seguidores no mundo atual. A Bíblia Hebraica (o Antigo Testamento
          cristão) influenciou profundamente a literatura, a arte, a música e a filosofia
          ocidentais durante dois milênios. Obras de Dante, Milton, Michelangelo, Bach, Rembrandt
          e incontáveis outros gênios ocidentais seriam incompreensíveis sem o conhecimento da
          tradição bíblica hebraica.
        </p>
        <p>
          A ética hebraica — a ideia de que há uma lei moral que obriga até os reis, e que os
          fracos (viúvas, órfãos, estrangeiros) têm direito à proteção — foi revolucionária no
          contexto das monarquias absolutas do Oriente Próximo. Esse princípio ético,
          transmitido ao Ocidente pelo Antigo Testamento cristão, contribuiu para o desenvolvimento
          dos conceitos modernos de dignidade humana e direitos fundamentais.
        </p>
        <p>
          O legado fenício, como visto no capítulo anterior, é principalmente linguístico: o
          alfabeto fonético que criaram está na base de todos os sistemas de escrita do mundo
          ocidental e do Oriente Médio. Além disso, as rotas comerciais fenícias estabeleceram
          padrões de intercâmbio mediterrâneo que Roma depois herdaria e institucionalizaria.
          A cidade de Cartago, fundação fenícia, foi a grande rival de Roma no Mediterrâneo
          Ocidental, e a memória das Guerras Púnicas moldou profundamente a identidade romana.
        </p>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Persas</span>
        <h2>5. Legado Persa: Tolerância, Administração e Zoroastrismo</h2>
        <p>
          O legado político-administrativo persa foi significativo para os impérios que vieram
          depois: o sistema de satrapias (províncias administradas por governadores locais sob
          supervisão central) foi adotado com adaptações por Alexandre Magno, pelos ptolomaicos
          no Egito e pelos selêucidas na Ásia. A organização de um território vasto através de
          subdivisões administrativas com autonomia relativa é um modelo que reaparece no
          sistema provincial romano, no feudalismo medieval e nos estados federados modernos.
        </p>
        <p>
          O zoroastrismo persa introduziu no mundo próximo-oriental conceitos que influenciariam
          profundamente o judaísmo tardio, o cristianismo e o islã: a visão dualista do cosmos
          (bem vs. mal), a existência de anjos e demônios, a noção de julgamento final, paraíso
          e inferno, e a expectativa de um "salvador" (Saoshyant no zoroastrismo, Messias no
          judaísmo, Cristo no cristianismo, Mahdi no islã). Esse intercâmbio se deu principalmente
          durante e após o Cativeiro Babilônico, quando os judeus conviveram com a cultura persa.
        </p>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Tabela-Resumo</span>
        <h2>6. Resumo dos Legados por Civilização</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Civilização</th>
                <th>Período de apogeu</th>
                <th>Legados principais</th>
                <th>Via de transmissão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egito</td>
                <td>3100–30 a.C.</td>
                <td>Arquitetura monumental, medicina, calendário solar, geometria, escrita hieroglífica</td>
                <td>Gregos (Tales, Pitágoras, Heródoto) → Alexandria → Roma</td>
              </tr>
              <tr>
                <td>Mesopotâmia (Suméria/Babilônia)</td>
                <td>3500–539 a.C.</td>
                <td>Escrita cuneiforme, código de leis (Hamurabi), matemática sexagesimal, astronomia, literatura (Gilgamesh)</td>
                <td>Hebreus (cativeiro) → gregos (astronomia) → Roma (direito)</td>
              </tr>
              <tr>
                <td>Hebreus</td>
                <td>c. 2000–70 d.C. (início)</td>
                <td>Monoteísmo, Torá/Bíblia, ética religiosa, conceito de dignidade humana</td>
                <td>Diretamente via judaísmo → Cristianismo → Islã → Ocidente</td>
              </tr>
              <tr>
                <td>Fenícios</td>
                <td>c. 1200–146 a.C.</td>
                <td>Alfabeto fonético, rotas marítimas mediterrâneas, técnicas de vidro e tingimento</td>
                <td>Gregos (alfabeto) → latinos → línguas europeias</td>
              </tr>
              <tr>
                <td>Persas (Aquemênidas)</td>
                <td>550–330 a.C.</td>
                <td>Tolerância religiosa, sistema de satrapias, zoroastrismo, Estrada Real</td>
                <td>Alexandre Magno (modelo administrativo) → Pártos/Sassânidas → Islã</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Linha do tempo com os períodos de apogeu das civilizações orientais">
            <rect x="0" y="0" width="720" height="200" fill="#f5f0e8" />
            {/* Eixo */}
            <line x1="40" y1="100" x2="690" y2="100" stroke="#555" strokeWidth="2" />
            <polygon points="688,96 698,100 688,104" fill="#555" />

            {/* Escala de tempo: 3500 a.C. a 500 d.C. */}
            {/* Total: 4000 anos, mapeando 40 → 690 = 650px / 4000 = 0.1625px por ano */}
            {/* x = 40 + (3500 - anos_atrás) * 0.1625  ... usando anos positivos a partir de 3500 a.C. */}
            {/* 3500 a.C. → x=40; 0 → x=40+(3500*0.1625)=40+568=608; 500 d.C. → x=690 */}

            {/* Marcas */}
            {[
              { yr: "3500\na.C.", x: 40 },
              { yr: "3000\na.C.", x: 122 },
              { yr: "2000\na.C.", x: 284 },
              { yr: "1000\na.C.", x: 446 },
              { yr: "0", x: 608 },
              { yr: "500\nd.C.", x: 690 },
            ].map((m) => (
              <g key={m.x}>
                <line x1={m.x} y1="95" x2={m.x} y2="105" stroke="#666" strokeWidth="1.5" />
                <text x={m.x} y="118" fontSize="8" textAnchor="middle" fill="#555">{m.yr}</text>
              </g>
            ))}

            {/* Faixas das civilizações */}
            {/* Egito: 3100 a.C. → 30 a.C. | x1=40+(400*0.1625)=105; x2=40+(3470*0.1625)=604; width=499 */}
            <rect x="105" y="30" width="499" height="14" rx="3" fill="#f39c12" fillOpacity="0.8" />
            <text x="354" y="42" fontSize="9" textAnchor="middle" fill="#7a4a00" fontWeight="bold">EGITO (3100–30 a.C.)</text>

            {/* Mesopotâmia: 3500 → 539 a.C. | x1=40; x2=40+(2961*0.1625)=521 */}
            <rect x="40" y="48" width="481" height="14" rx="3" fill="#9b59b6" fillOpacity="0.8" />
            <text x="280" y="60" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">MESOPOTÂMIA (3500–539 a.C.)</text>

            {/* Hebreus: 2000 a.C. → 70 d.C. | x1=284; x2=608+(70*0.1625)=619; width=335 */}
            <rect x="284" y="66" width="335" height="14" rx="3" fill="#2980b9" fillOpacity="0.8" />
            <text x="451" y="78" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">HEBREUS (2000 a.C.–70 d.C.)</text>

            {/* Fenícios: 1200 a.C. → 146 a.C. | x1=40+(2300*0.1625)=414; x2=40+(3354*0.1625)=585 */}
            <rect x="414" y="84" width="171" height="14" rx="3" fill="#e67e22" fillOpacity="0.9" />
            <text x="500" y="96" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">FENÍCIOS (1200–146 a.C.)</text>

            {/* Persas: 550 → 330 a.C. | x1=40+(2950*0.1625)=519; x2=40+(3170*0.1625)=555 */}
            <rect x="519" y="84" width="36" height="14" rx="3" fill="#27ae60" fillOpacity="0.9" />
            <text x="537" y="96" fontSize="7" textAnchor="middle" fill="white" fontWeight="bold">PERSAS</text>

            <text x="360" y="150" fontSize="10" textAnchor="middle" fill="#555" fontStyle="italic">
              Períodos de apogeu das civilizações orientais (escala aproximada)
            </text>
            <text x="360" y="168" fontSize="9" textAnchor="middle" fill="#888">
              Cada civilização influenciou as seguintes através de contatos comerciais, militares e culturais
            </text>
          </svg>
          <figcaption>
            Linha do tempo aproximada com os períodos de apogeu das principais civilizações
            orientais estudadas neste módulo, mostrando suas sobreposições temporais.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Grécia como intermediária</span>
        <h2>7. A Grécia como Grande Sintetizadora</h2>
        <p>
          A Grécia Antiga não criou seus conhecimentos do zero: foi uma grande sintetizadora dos
          legados orientais, transformando-os através da reflexão filosófica, da racionalidade
          e da sistematização teórica. Tales de Mileto, considerado o primeiro filósofo ocidental
          (c. 624–546 a.C.), aplicou à geometria egípcia o rigor da demonstração lógica,
          transformando um conjunto de técnicas práticas em uma ciência abstrata. Pitágoras
          (c. 570–495 a.C.) fundiu matemática babilônica com misticismo e criou uma escola
          filosófica que influenciaria Platão.
        </p>
        <p>
          Heródoto (c. 484–425 a.C.) viajou extensamente pelo Egito e pelo Oriente Próximo,
          documentando costumes e histórias dos povos que visitou — estabelecendo o método
          de investigação histórica baseado em fontes e observação direta. Tucídides
          (c. 460–400 a.C.) aprofundou esse método com análise de causas políticas e militares,
          criando a historiografia analítica. A Biblioteca de Alexandria (fundada c. 300 a.C.
          pelos ptolomaicos), que reuniu obras gregas e orientais, foi o maior centro de síntese
          cultural da Antiguidade.
        </p>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Roma como transmissora</span>
        <h2>8. Roma como Grande Transmissora</h2>
        <p>
          Se os gregos foram os grandes sintetizadores dos legados orientais, os romanos foram
          os grandes transmissores desses legados para a Europa medieval e moderna. Roma
          transmitiu ao Ocidente: o latim, do qual derivam o português, o espanhol, o francês,
          o italiano, o romeno e outras línguas romanas; o direito romano, que é a base dos
          sistemas jurídicos da Europa Continental e da América Latina; a arquitetura (arcos,
          abóbadas, aquedutos, estradas — muitas derivadas de técnicas egípcias e gregas);
          e o cristianismo, que incorporou elementos da teologia hebraica e da filosofia
          grega num novo sistema religioso que se tornou a religião dominante da Europa.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Legado Oriental</th>
                <th>Forma Grega</th>
                <th>Forma Romana</th>
                <th>Forma Ocidental Moderna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escrita cuneiforme</td>
                <td>Alfabeto grego</td>
                <td>Alfabeto latino</td>
                <td>Português, inglês, francês…</td>
              </tr>
              <tr>
                <td>Código de Hamurabi</td>
                <td>Leis de Sólon/Drácon</td>
                <td>Direito Romano (XII Tábuas)</td>
                <td>Códigos civis modernos</td>
              </tr>
              <tr>
                <td>Geometria egípcia</td>
                <td>Geometria de Euclides</td>
                <td>Engenharia romana</td>
                <td>Geometria escolar</td>
              </tr>
              <tr>
                <td>Monoteísmo hebraico</td>
                <td>Filosofia platônica (Uno)</td>
                <td>Cristianismo oficial (313 d.C.)</td>
                <td>Tradições cristãs ocidentais</td>
              </tr>
              <tr>
                <td>Astronomia babilônica</td>
                <td>Astronomia de Hiparco/Ptolomeu</td>
                <td>Calendário Juliano (46 a.C.)</td>
                <td>Calendário Gregoriano (1582)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 9 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Patrimônio da Humanidade</span>
        <h2>9. Patrimônio Cultural e Memória Histórica</h2>
        <p>
          A UNESCO (Organização das Nações Unidas para Educação, Ciência e Cultura) reconhece
          sítios arqueológicos e manifestações culturais das civilizações orientais como
          Patrimônio da Humanidade — um conceito que reconhece que certos bens culturais
          pertencem não a um único povo ou nação, mas a toda a humanidade. As pirâmides de
          Gizé e a Esfinge (Egito), os sítios arqueológicos de Babilônia (Iraque), a antiga
          cidade de Petra (Jordânia), a cidade de Persépolis (Irã) e as antigas cidades da
          Fenícia (Biblos, Baalbek, Tiro — no atual Líbano) são exemplos de sítios inscritos
          na Lista do Patrimônio Mundial.
        </p>
        <p>
          A preservação desses sítios enfrenta ameaças graves: conflitos armados (como a
          destruição de Palmira pelo Estado Islâmico em 2015), tráfico ilícito de antiguidades,
          desenvolvimento urbano desordenado e turismo de massa sem controle. Essas ameaças
          colocam questões éticas sobre responsabilidade internacional, soberania nacional e
          direito à memória cultural — temas que o ENEM frequentemente aborda em questões
          interdisciplinares envolvendo História, Filosofia e Atualidades.
        </p>

        <div className="lesson-highlight">
          <h3>A Decolonização dos Museus e o Retorno de Acervos</h3>
          <p>
            Grande parte dos objetos arqueológicos das civilizações orientais encontra-se
            hoje em museus europeus — o Louvre (Código de Hamurabi, Estela dos Abutres),
            o Museu Britânico (Cilindro de Ciro, Pedra de Roseta, Frisos do Partenon),
            o Museu Egípcio de Berlim (busto de Nefertiti). A questão do retorno desses
            acervos aos países de origem é um debate atual que envolve direito internacional,
            ética cultural e as heranças do colonialismo. Países como Grécia, Egito, Etiópia
            e Iraque têm reivindicado o retorno de seus patrimônios históricos.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 10 — EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. O papel da Grécia na transmissão dos legados orientais"
          statement={
            <p>
              Filósofos e sábios gregos como Tales de Mileto e Pitágoras viajaram ao Egito e
              à Mesopotâmia para estudar. Sobre o papel da Grécia na transmissão dos legados
              orientais para o Ocidente, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A Grécia copiou passivamente os conhecimentos orientais sem nenhuma contribuição própria, retransmitindo-os ao Ocidente na mesma forma em que os recebeu." },
            { letter: "b", text: "A Grécia rejeitou os conhecimentos orientais por considerá-los bárbaros, desenvolvendo sua filosofia e ciência de forma totalmente autônoma." },
            { letter: "c", text: "A Grécia absorveu e transformou os legados orientais — acrescentando reflexão filosófica, rigor lógico e sistematização teórica — tornando-se a grande sintetizadora que transmitiu esses conhecimentos ao Ocidente via Roma.", correct: true },
            { letter: "d", text: "Os gregos aprenderam apenas matemática com os egípcios, ignorando todos os demais legados das civilizações orientais." },
            { letter: "e", text: "A transmissão dos legados orientais para o Ocidente ocorreu diretamente, sem a intermediação da Grécia ou de Roma." },
          ]}
          resolution={
            <p>
              A alternativa C descreve corretamente o processo histórico. A Grécia não foi
              mera cópia das civilizações orientais: ela transformou o que absorveu. A geometria
              prática egípcia tornou-se ciência abstrata nas mãos de Tales e Euclides; a
              astronomia babilônica tornou-se cosmologia filosófica em Pitágoras e Platão;
              o monoteísmo hebraico fundiu-se com a filosofia grega no pensamento de Fílon de
              Alexandria e depois nos Padres da Igreja. Roma herdou essa síntese greco-oriental
              e a difundiu pelo mundo através do latim, do direito e do cristianismo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. O Código de Hamurabi e as origens do direito ocidental"
          statement={
            <p>
              O Código de Hamurabi (c. 1750 a.C.), gravado em um monólito de diorito, é um
              dos primeiros conjuntos de leis escritas da história. Considerando sua importância
              histórica e seu legado para o Ocidente, analise as afirmações abaixo:
            </p>
          }
          options={[
            { letter: "a", text: "O Código de Hamurabi era uma lei igualitária que tratava todos os cidadãos da mesma forma, independentemente de sua classe social." },
            { letter: "b", text: "O princípio de que a lei deve ser escrita e pública — mesmo aplicada de forma desigual segundo a classe social — influenciou o desenvolvimento do direito romano e dos sistemas jurídicos ocidentais.", correct: true },
            { letter: "c", text: "O Código de Hamurabi foi o único conjunto de leis escritas da Mesopotâmia, não havendo outros registros jurídicos anteriores nessa região." },
            { letter: "d", text: "O Código de Hamurabi foi diretamente copiado pelos romanos nas XII Tábuas, sem nenhuma modificação ou adaptação cultural." },
            { letter: "e", text: "O sistema de punições do Código de Hamurabi era exclusivamente baseado em multas financeiras, sem punições físicas." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. O Código de Hamurabi não era igualitário: as penas
              variavam conforme a classe social do infrator e da vítima (um nobre que feria
              outro nobre pagava multa; se feria um escravo, a multa era menor; se o escravo
              feria um nobre, perdia a mão). Mas o princípio revolucionário era a ideia de que
              a lei deveria ser escrita e acessível a todos — não um arbítrio secreto dos reis
              e sacerdotes. Essa ideia, transmitida via gregos e romanos, é a base de todo o
              constitucionalismo moderno: a lei pública, escrita e previsível como garantia
              contra o arbítrio do poder.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O legado hebraico e o desenvolvimento dos direitos humanos"
          statement={
            <p>
              A ética hebraica — a ideia de que há uma lei moral que transcende os interesses
              de reis e impérios, e que os vulneráveis têm direito à proteção — é frequentemente
              apontada como um dos fundamentos históricos do conceito moderno de direitos humanos.
              Avalie essa afirmação à luz da trajetória histórica e assinale a alternativa mais
              adequada:
            </p>
          }
          options={[
            { letter: "a", text: "A afirmação é totalmente equivocada: os direitos humanos são uma invenção exclusivamente iluminista do século XVIII, sem nenhuma relação com tradições religiosas antigas." },
            { letter: "b", text: "O legado hebraico contribuiu para a formação de uma ética ocidental de proteção aos vulneráveis, que se desenvolveu ao longo de séculos através do judaísmo, do cristianismo e das tradições filosóficas gregas, criando o substrato cultural sobre o qual os direitos humanos modernos foram construídos.", correct: true },
            { letter: "c", text: "A Bíblia Hebraica defende explicitamente os direitos humanos modernos, como a igualdade de gênero e a democracia universal, sem necessidade de interpretações posteriores." },
            { letter: "d", text: "O conceito de direitos humanos foi inventado por Moisés no Sinai e transmitido inalterado à Declaração Universal de 1948." },
            { letter: "e", text: "A ética hebraica é irrelevante para a história dos direitos humanos, que tem origem exclusiva no iluminismo francês do século XVIII." },
          ]}
          resolution={
            <p>
              A alternativa B apresenta a análise historicamente mais equilibrada. Os direitos
              humanos modernos são uma construção histórica complexa que não pode ser atribuída
              a uma única fonte, mas emerge de um longo processo que inclui: a ética hebraica
              de proteção aos vulneráveis; a filosofia grega de dignidade humana (especialmente
              o estoicismo); o direito romano de cidadania; o humanismo cristão; e o iluminismo
              do século XVII-XVIII. Ignorar as raízes religiosas e filosóficas antigas empobrece
              a compreensão histórica do conceito. Mas também seria anacronismo afirmar que a
              Bíblia Hebraica contém os direitos humanos modernos em sua forma atual.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Patrimônio cultural e decolonização de museus"
          statement={
            <div>
              <p>
                "A questão não é apenas de propriedade legal, mas de identidade cultural.
                Esses objetos não são apenas belos artefatos: são partes do DNA cultural de
                nosso povo, arrancadas durante séculos de colonialismo."
              </p>
              <p><em>(Paráfrase de declarações de ministros da cultura de países africanos e mediterrâneos)</em></p>
              <p>
                Considerando o debate contemporâneo sobre o retorno de acervos arqueológicos
                das civilizações orientais e africanas aos seus países de origem, assinale a
                alternativa que apresenta a análise mais completa:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Os objetos em museus europeus devem permanecer onde estão, pois foram legalmente adquiridos durante as expedições do século XIX e pertencem ao patrimônio científico universal." },
            { letter: "b", text: "O debate sobre o retorno de acervos arqueológicos articula questões de direito internacional, ética cultural, memória histórica e heranças do colonialismo, não admitindo resposta simples, mas exigindo negociações que considerem o contexto histórico de cada aquisição.", correct: true },
            { letter: "c", text: "Todos os objetos arqueológicos devem ser devolvidos imediatamente aos países de origem, sem nenhuma negociação ou consideração sobre capacidade de conservação." },
            { letter: "d", text: "A questão do retorno de acervos é puramente técnica, sobre qual museu tem melhores condições de conservação, sem dimensão política ou ética." },
            { letter: "e", text: "Como os países de origem não existiam no período de criação dos objetos, eles não têm direito a reivindicar esses patrimônios." },
          ]}
          resolution={
            <p>
              A alternativa B apresenta a posição mais sóbria e historicamente informada.
              O debate sobre repatriação de acervos é genuinamente complexo: envolve questões
              de direito internacional (muitas aquisições coloniais foram ilegais pela ética
              contemporânea mas legais na época); de ética cultural (o patrimônio pertence à
              humanidade ou ao povo que o criou?); de capacidade técnica de conservação
              (alguns países de origem têm museus excelentes, outros enfrentam instabilidade);
              e de memória histórica (a presença de objetos egípcios no Louvre e no Museu
              Britânico é resultado do colonialismo europeu do século XIX). A Grécia reivindica
              os frisos do Partenon; a Etiópia, o obelisco de Axum (devolvido pela Itália em
              2005); o Egito, inúmeros objetos de museus europeus.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Destruição do patrimônio histórico em conflitos armados"
          statement={
            <div>
              <p>
                Em 2015, o grupo Estado Islâmico destruiu parte da antiga cidade de Palmira,
                na Síria, sítio arqueológico do século I d.C. com influências greco-romanas e
                orientais, inscrito na Lista do Patrimônio Mundial da UNESCO. Em 2001, o Talibã
                destruiu os Budas de Bamiyan, no Afeganistão, estátuas do século VI d.C.
              </p>
              <p>
                Considerando esses eventos e o significado do patrimônio histórico para a
                humanidade, assinale a alternativa que melhor articula os aspectos histórico,
                ético e político da questão:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A destruição de patrimônio histórico em conflitos é aceitável quando motivada por razões religiosas ou ideológicas legítimas." },
            { letter: "b", text: "A destruição de patrimônio histórico é apenas um problema estético, sem repercussões políticas ou simbólicas significativas." },
            { letter: "c", text: "A destruição deliberada do patrimônio histórico é reconhecida pelo direito internacional como crime de guerra e representa uma forma de apagamento cultural — destruir a memória de um povo para destruir sua identidade — com dimensões históricas, éticas e políticas que transcendem a perda material dos artefatos.", correct: true },
            { letter: "d", text: "A UNESCO não tem papel relevante na proteção do patrimônio histórico mundial durante conflitos armados, pois é um organismo sem poderes reais." },
            { letter: "e", text: "A destruição de patrimônio histórico por grupos extremistas é um fenômeno novo, sem precedentes históricos anteriores ao século XXI." },
          ]}
          resolution={
            <p>
              A alternativa C está correta e articula adequadamente as múltiplas dimensões
              do problema. O direito internacional humanitário (Convenção de Haia de 1954)
              e o Estatuto de Roma do Tribunal Penal Internacional reconhecem a destruição
              deliberada de patrimônio cultural como crime de guerra. A destruição de Palmira
              e dos Budas de Bamiyan não foi casual: foi uma estratégia deliberada de
              eliminação da memória histórica, que sempre representa uma forma de violência
              contra a identidade coletiva dos povos. O julgamento no TPI de Ahmad al-Faqi
              al-Mahdi (2016) pelo ataque a mausoléus em Timbuctu (Mali) foi o primeiro
              julgamento internacional exclusivamente por crimes contra o patrimônio cultural.
              Longe de ser novo, esse tipo de destruição ocorreu ao longo de toda a história
              — desde a queima da Biblioteca de Alexandria até a destruição de Tenochtitlan.
            </p>
          }
        />
      </section>
    </article>
  );
}
