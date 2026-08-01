"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 20</span>
          <h1>Grandes Navegações e Expansão Marítima</h1>
          <p>
            Entre os séculos XV e XVI, Portugal e Espanha lançaram-se ao oceano em uma das maiores
            aventuras da história humana: as Grandes Navegações. Impulsionados pelo esgotamento das
            rotas terrestres às especiarias asiáticas, pelo espírito da Reconquista cristã e pela
            sede de ouro e metais preciosos, os navegadores ibéricos circunavegaram a África,
            cruzaram o Atlântico e chegaram às Índias e à América. O encontro de mundos que daí
            resultou transformou radicalmente a economia europeia, devastou populações indígenas
            e africanas, e criou os alicerces do sistema capitalista mundial moderno.
          </p>
        </div>
      </section>

      {/* ── SVG 1: Mapa esquemático das rotas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>As Principais Rotas de Navegação</h2>
        <p>
          As navegações ibéricas desenharam novas rotas que conectaram pela primeira vez todos os
          continentes. Portugal explorou a costa africana e chegou ao Oriente pelo sul, enquanto a
          Espanha buscou o Ocidente e encontrou a América.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 720 450" width="100%" style={{ maxWidth: 720, display: "block", margin: "0 auto" }}>
            <rect width="720" height="450" fill="#0a1628" rx="12" />

            {/* Oceanos */}
            <rect x="0" y="0" width="720" height="450" fill="#0a1628" rx="12" />

            {/* Continentes simplificados */}
            {/* Europa */}
            <polygon points="310,60 340,50 360,70 350,100 330,110 310,90" fill="#3d6b35" />
            <text x="330" y="85" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">EUROPA</text>

            {/* África */}
            <polygon points="310,130 360,120 380,180 370,280 340,310 310,290 290,240 295,160" fill="#8b6914" />
            <text x="335" y="220" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">ÁFRICA</text>

            {/* América do Norte */}
            <polygon points="60,80 130,70 160,130 140,200 100,230 60,200 40,140" fill="#2d6a2d" />
            <text x="100" y="155" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">AM. DO</text>
            <text x="100" y="168" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">NORTE</text>

            {/* América do Sul */}
            <polygon points="100,250 160,240 185,310 170,380 130,400 95,380 80,310" fill="#2d6a2d" />
            <text x="132" y="325" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">AM. DO</text>
            <text x="132" y="338" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">SUL</text>

            {/* Índia / Ásia */}
            <polygon points="510,140 570,130 600,170 590,220 560,240 520,220 500,180" fill="#5a3e1b" />
            <text x="550" y="185" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">ÍNDIA/ÁSIA</text>

            {/* Rota portuguesa: Lisboa → Cabo Boa Esperança → Índia */}
            <path d="M 330,80 Q 320,200 360,310 Q 400,380 440,350 Q 490,300 540,200 Q 560,170 540,155"
              stroke="#f5a623" strokeWidth="2.5" fill="none" strokeDasharray="6,3" />
            <polygon points="540,155 532,167 548,167" fill="#f5a623" />

            {/* Rota espanhola: Espanha → América */}
            <path d="M 325,75 Q 260,100 200,130 Q 160,185 155,250"
              stroke="#e74c3c" strokeWidth="2.5" fill="none" strokeDasharray="6,3" />
            <polygon points="155,250 148,237 162,237" fill="#e74c3c" />

            {/* Rota Cabral: Portugal → Brasil */}
            <path d="M 330,82 Q 280,150 200,280 Q 175,330 160,350"
              stroke="#2ecc71" strokeWidth="2" fill="none" strokeDasharray="5,3" />
            <polygon points="160,350 153,337 167,337" fill="#2ecc71" />

            {/* Marcadores */}
            <circle cx="330" cy="80" r="5" fill="#f5a623" />
            <text x="330" y="50" textAnchor="middle" fill="#f5a623" fontSize="9">Lisboa</text>

            <circle cx="370" cy="310" r="5" fill="#f5a623" />
            <text x="410" y="318" fill="#f5a623" fontSize="8">Cabo da Boa</text>
            <text x="410" y="330" fill="#f5a623" fontSize="8">Esperança (1488)</text>

            <circle cx="540" cy="155" r="5" fill="#f5a623" />
            <text x="600" y="150" fill="#f5a623" fontSize="8">Índia (1498)</text>

            <circle cx="155" cy="250" r="5" fill="#e74c3c" />
            <text x="40" y="248" fill="#e74c3c" fontSize="8">América</text>
            <text x="40" y="260" fill="#e74c3c" fontSize="8">(1492)</text>

            <circle cx="158" cy="348" r="5" fill="#2ecc71" />
            <text x="60" y="358" fill="#2ecc71" fontSize="8">Brasil (1500)</text>

            {/* Legenda */}
            <line x1="430" y1="380" x2="470" y2="380" stroke="#f5a623" strokeWidth="2" strokeDasharray="6,3" />
            <text x="478" y="384" fill="#f5a623" fontSize="9">Rota portuguesa</text>
            <line x1="430" y1="398" x2="470" y2="398" stroke="#e74c3c" strokeWidth="2" strokeDasharray="6,3" />
            <text x="478" y="402" fill="#e74c3c" fontSize="9">Rota espanhola</text>
            <line x1="430" y1="416" x2="470" y2="416" stroke="#2ecc71" strokeWidth="2" strokeDasharray="5,3" />
            <text x="478" y="420" fill="#2ecc71" fontSize="9">Rota de Cabral</text>
          </svg>
          <figcaption>Mapa esquemático das principais rotas das Grandes Navegações ibéricas (séculos XV–XVI).</figcaption>
        </figure>
      </section>

      {/* ── Seção 1: Contexto e causas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas e Motivações</span>
        <h2>O Contexto das Grandes Navegações</h2>
        <p>
          As Grandes Navegações não ocorreram por acaso: resultaram de um conjunto de transformações
          estruturais que tornaram as expedições marítimas tanto necessárias quanto possíveis. Do
          ponto de vista econômico, o controle das rotas terrestres para o Oriente pelas potências
          muçulmanas — especialmente após a queda de Constantinopla em 1453 — encarecia enormemente
          as especiarias (pimenta, cravo, noz-moscada, canela) que a Europa consumia avidamente.
          Esses produtos chegavam à Europa após passarem por inúmeros intermediários árabes e
          venezianos, tornando-se artigos de luxo reservados à nobreza e ao alto clero.
        </p>
        <p>
          Do ponto de vista técnico, os séculos XIV e XV assistiram a uma revolução náutica decisiva:
          o aperfeiçoamento da caravela (navio ágil, de proa afilada e velas latinas que permitia
          navegar contra o vento), o desenvolvimento da bússola e do astrolábio para orientação no
          alto mar, os progressos na cartografia e a difusão do conhecimento geográfico árabe e
          clássico. A <strong>Escola de Sagres</strong>, criada pelo Infante Dom Henrique (1394–1460),
          foi o centro de compilação desse conhecimento e de formação de pilotos e cartógrafos.
        </p>
        <p>
          Do ponto de vista ideológico e político, o espírito da <strong>Reconquista</strong>
          — a cruzada cristã contra os mouros na Península Ibérica, concluída com a tomada de
          Granada em 1492 — insuflou nas coroas ibéricas um ardor missionário que se estendeu
          às novas terras. Converter os "infiéis", expandir o domínio cristão e, ao mesmo tempo,
          enriquecer o Estado com ouro e especiarias constituíam objetivos indissociáveis.
        </p>
      </section>

      {/* ── Seção 2: Portugal – expansão africana ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Pioneirismo Português</span>
        <h2>Portugal e a Exploração da Costa Africana</h2>
        <p>
          Portugal foi o pioneiro das grandes navegações, processo que se deu de forma gradual e
          sistemática ao longo do século XV. O Infante Dom Henrique, filho do rei D. João I,
          organizou as primeiras expedições e reuniu em Lagos (Algarve) pilotos, cartógrafos e
          geógrafos que mapearam progressivamente a costa africana. Em 1415, Portugal tomou Ceuta,
          cidade muçulmana no norte da África — marco inicial da expansão portuguesa.
        </p>
        <p>
          A costa africana foi explorada em etapas: o Cabo Bojador (1434, por Gil Eanes) superou
          o limite psicológico que aterrorizava os marinheiros medievais; a Serra Leoa (1460)
          foi atingida ainda sob Dom Henrique. Após sua morte, as expedições prosseguiram sob
          a coroa portuguesa: o Golfo da Guiné, o equador e, finalmente, em 1488,
          <strong> Bartolomeu Dias</strong> dobrou o <strong>Cabo da Boa Esperança</strong>,
          demonstrando que era possível chegar ao Oceano Índico pelo sul da África.
        </p>
        <p>
          Em 1498, <strong>Vasco da Gama</strong> completou o percurso: partindo de Lisboa em
          julho de 1497, com quatro navios e 170 homens, contornou a África, cruzou o Índico
          com ajuda de um piloto árabe e chegou a Calicute (Índia) em maio de 1498. A viagem
          revolucionou o comércio mundial: Portugal podia agora comprar especiarias diretamente
          nas fontes, eliminando os intermediários e vendendo-as na Europa por um décimo do
          preço anterior. A rota do Cabo se tornaria o eixo do primeiro império comercial moderno.
        </p>

        <div className="lesson-highlight">
          <strong>A África nas navegações:</strong> a exploração da costa africana não foi apenas
          geográfica. Desde a metade do século XV, Portugal iniciou o tráfico sistemático de
          pessoas africanas escravizadas. A ilha de São Tomé tornou-se o primeiro centro de
          produção açucareira com trabalho escravizado africano — modelo que seria transplantado
          para o Brasil. As navegações e a escravidão atlântica são inseparáveis.
        </div>
      </section>

      {/* ── Seção 3: Espanha e Colombo ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Rota do Ocidente</span>
        <h2>Cristóvão Colombo e a Chegada à América</h2>
        <p>
          Enquanto Portugal avançava pelo sul da África, o navegador genovês <strong>Cristóvão
          Colombo</strong> propunha uma rota alternativa para as Índias pelo ocidente: cruzar
          o Atlântico em direção ao poente, baseando-se em cálculos que subestimavam a
          circunferência da Terra. Portugal recusou o projeto; Colombo recorreu à coroa espanhola,
          cujos soberanos — Fernando de Aragão e Isabel de Castela, os "Reis Católicos" —
          financiaram a expedição em 1492.
        </p>
        <p>
          Em 12 de outubro de 1492, após 33 dias de travessia, Colombo avistou terra: a ilha
          de Guanahaní (Bahamas), que ele batizou de San Salvador. Colombo morreu convicto de
          ter chegado à Ásia — chamou os habitantes de "índios", nome que permaneceu. Foram
          necessárias quatro viagens para que a grandiosidade do que realmente encontrara fosse
          dimensionada. O continente não levou seu nome: foi batizado em homenagem ao florentino
          <strong> Américo Vespúcio</strong>, que em 1503 publicou a hipótese de que as terras
          descobertas eram um "Novo Mundo", e não a Ásia.
        </p>
        <p>
          O <strong>Tratado de Tordesilhas</strong> (1494), mediado pelo papa Alexandre VI,
          dividiu o mundo a descobrir entre Portugal e Espanha por uma linha imaginária a 370
          léguas a oeste das ilhas de Cabo Verde: a leste ficava Portugal; a oeste, a Espanha.
          O tratado garantiu a Portugal o caminho para as Índias pelo sul da África e,
          casualmente, as terras que seriam o Brasil — pois o litoral oriental da América do Sul
          estava a leste da linha de Tordesilhas.
        </p>
      </section>

      {/* ── SVG 2: Linha do tempo das navegações ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>Linha do Tempo das Grandes Navegações</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 360" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
            <rect width="700" height="360" fill="#0d1b2a" rx="12" />

            {/* Linha do tempo */}
            <line x1="60" y1="180" x2="650" y2="180" stroke="#c9a84c" strokeWidth="3" />

            {/* Pontos e eventos */}
            {/* 1415 */}
            <circle cx="80" cy="180" r="8" fill="#f5a623" />
            <line x1="80" y1="172" x2="80" y2="100" stroke="#f5a623" strokeWidth="1.5" />
            <text x="80" y="90" textAnchor="middle" fill="#f5a623" fontSize="10" fontWeight="bold">1415</text>
            <text x="80" y="76" textAnchor="middle" fill="#ccc" fontSize="8">Tomada de</text>
            <text x="80" y="65" textAnchor="middle" fill="#ccc" fontSize="8">Ceuta</text>

            {/* 1434 */}
            <circle cx="160" cy="180" r="8" fill="#f5a623" />
            <line x1="160" y1="188" x2="160" y2="260" stroke="#f5a623" strokeWidth="1.5" />
            <text x="160" y="272" textAnchor="middle" fill="#f5a623" fontSize="10" fontWeight="bold">1434</text>
            <text x="160" y="286" textAnchor="middle" fill="#ccc" fontSize="8">Cabo Bojador</text>
            <text x="160" y="298" textAnchor="middle" fill="#ccc" fontSize="8">(Gil Eanes)</text>

            {/* 1488 */}
            <circle cx="270" cy="180" r="8" fill="#e74c3c" />
            <line x1="270" y1="172" x2="270" y2="100" stroke="#e74c3c" strokeWidth="1.5" />
            <text x="270" y="90" textAnchor="middle" fill="#e74c3c" fontSize="10" fontWeight="bold">1488</text>
            <text x="270" y="76" textAnchor="middle" fill="#ccc" fontSize="8">Cabo Boa</text>
            <text x="270" y="65" textAnchor="middle" fill="#ccc" fontSize="8">Esperança</text>

            {/* 1492 */}
            <circle cx="360" cy="180" r="10" fill="#2ecc71" />
            <line x1="360" y1="190" x2="360" y2="260" stroke="#2ecc71" strokeWidth="1.5" />
            <text x="360" y="272" textAnchor="middle" fill="#2ecc71" fontSize="10" fontWeight="bold">1492</text>
            <text x="360" y="286" textAnchor="middle" fill="#ccc" fontSize="8">Colombo</text>
            <text x="360" y="298" textAnchor="middle" fill="#ccc" fontSize="8">América</text>

            {/* 1494 */}
            <circle cx="420" cy="180" r="8" fill="#9b59b6" />
            <line x1="420" y1="172" x2="420" y2="100" stroke="#9b59b6" strokeWidth="1.5" />
            <text x="420" y="90" textAnchor="middle" fill="#9b59b6" fontSize="10" fontWeight="bold">1494</text>
            <text x="420" y="76" textAnchor="middle" fill="#ccc" fontSize="8">Tordesilhas</text>

            {/* 1498 */}
            <circle cx="490" cy="180" r="8" fill="#f5a623" />
            <line x1="490" y1="188" x2="490" y2="260" stroke="#f5a623" strokeWidth="1.5" />
            <text x="490" y="272" textAnchor="middle" fill="#f5a623" fontSize="10" fontWeight="bold">1498</text>
            <text x="490" y="286" textAnchor="middle" fill="#ccc" fontSize="8">Vasco da Gama</text>
            <text x="490" y="298" textAnchor="middle" fill="#ccc" fontSize="8">Índia</text>

            {/* 1500 */}
            <circle cx="560" cy="180" r="8" fill="#2ecc71" />
            <line x1="560" y1="172" x2="560" y2="100" stroke="#2ecc71" strokeWidth="1.5" />
            <text x="560" y="90" textAnchor="middle" fill="#2ecc71" fontSize="10" fontWeight="bold">1500</text>
            <text x="560" y="76" textAnchor="middle" fill="#ccc" fontSize="8">Cabral</text>
            <text x="560" y="65" textAnchor="middle" fill="#ccc" fontSize="8">Brasil</text>

            {/* 1519-22 */}
            <circle cx="630" cy="180" r="8" fill="#e74c3c" />
            <line x1="630" y1="188" x2="630" y2="260" stroke="#e74c3c" strokeWidth="1.5" />
            <text x="630" y="272" textAnchor="middle" fill="#e74c3c" fontSize="9" fontWeight="bold">1519–22</text>
            <text x="630" y="286" textAnchor="middle" fill="#ccc" fontSize="8">Magalhães:</text>
            <text x="630" y="298" textAnchor="middle" fill="#ccc" fontSize="8">1ª volta ao</text>
            <text x="630" y="310" textAnchor="middle" fill="#ccc" fontSize="8">mundo</text>

            <text x="350" y="340" textAnchor="middle" fill="#c9a84c" fontSize="11" fontStyle="italic">
              Linha do tempo das Grandes Navegações (1415–1522)
            </text>
          </svg>
          <figcaption>Cronologia das principais explorações marítimas ibéricas, do século XV ao XVI.</figcaption>
        </figure>
      </section>

      {/* ── Seção 4: Cabral e Brasil ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Brasil na Expansão</span>
        <h2>Pedro Álvares Cabral e a Chegada ao Brasil (1500)</h2>
        <p>
          Em março de 1500, <strong>Pedro Álvares Cabral</strong> partiu de Lisboa com uma armada
          de 13 navios e cerca de 1.500 homens, com destino à Índia. Afastando-se excessivamente
          da costa africana para evitar as calmarias do Golfo da Guiné — manobra que seguia as
          instruções de Vasco da Gama —, Cabral avistou terra em 22 de abril de 1500: o atual
          estado do Espírito Santo, no litoral do Brasil. Batizou o local de "Ilha de Vera Cruz",
          depois "Terra de Santa Cruz", e finalmente o nome "Brasil" prevaleceu, derivado do
          pau-brasil (<em>Caesalpinia echinata</em>), árvore abundante na costa atlântica cujo
          cerne avermelhado era muito valorizado como corante na indústria têxtil europeia.
        </p>
        <p>
          O encontro com os povos Tupiniquim, Tupinambá e outros grupos indígenas foi registrado
          pelo escrivão <strong>Pero Vaz de Caminha</strong> em sua famosa carta ao rei D. Manuel I,
          considerada o "certidão de nascimento" do Brasil. Caminha descreveu com admiração os
          corpos pintados, os adornos, a nudez, a ingenuidade e a disposição dos indígenas —
          uma visão inevitavelmente filtrada pelo olhar europeu do início do século XVI. A carta
          menciona que "a terra em si é de muito bons ares" e que os habitantes "não lavram nem
          criam", descrevendo uma sociedade que nada entendia da propriedade privada e da acumulação.
        </p>
        <p>
          A chegada de Cabral não foi um "achamento" acidental para os cerca de dois a cinco milhões
          de indígenas que habitavam o que seria o Brasil — para eles, foi o início de um processo
          devastador de conquista, escravização e genocídio. Em menos de um século, as populações
          indígenas costeiras seriam reduzidas a uma fração de seu tamanho original pela violência,
          pelas doenças e pela escravidão.
        </p>
      </section>

      {/* ── Seção 5: Magalhães e a circunavegação ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Primeira Volta ao Mundo</span>
        <h2>Fernão de Magalhães e a Circunavegação (1519–1522)</h2>
        <p>
          <strong>Fernão de Magalhães</strong>, navegador português a serviço da Espanha, partiu
          de Sevilha em setembro de 1519 com cinco navios e 265 homens com o objetivo de chegar
          às Ilhas Molucas (as "Ilhas das Especiarias") pelo ocidente. Em novembro de 1520,
          descobriu o estreito que leva seu nome — Estreito de Magalhães — no extremo sul da
          América do Sul, e entrou no que chamou de "Oceano Pacífico" por sua aparente calma.
          A travessia do Pacífico durou 98 dias, durante os quais a tripulação sofreu escorbuto,
          fome e sede extremos.
        </p>
        <p>
          Magalhães morreu nas Filipinas em 1521, em conflito com nativos locais. Sua expedição
          foi concluída pelo capitão espanhol <strong>Juan Sebastián Elcano</strong>, que retornou
          a Sevilha em setembro de 1522 com apenas 18 sobreviventes e um único navio — a Victoria.
          Era a primeira circunavegação da Terra. A viagem demonstrou definitivamente que a Terra
          era esférica, que os oceanos estavam conectados e que as Américas eram continentes
          distintos da Ásia.
        </p>
      </section>

      {/* ── Seção 6: Consequências ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos Globais</span>
        <h2>Consequências das Grandes Navegações</h2>
        <p>
          As navegações deflagraram transformações estruturais que redefiniram a história mundial:
        </p>
        <p>
          A <strong>Revolução dos Preços</strong> foi um dos efeitos mais dramáticos: a chegada
          massiva de ouro e prata americanos à Europa — principalmente pela Espanha, de Potosí
          e México — gerou uma inflação severa que durou todo o século XVI. Os preços dobraram
          e triplicaram em toda a Europa, desestabilizando economias tradicionais e enriquecendo
          os comerciantes às custas dos trabalhadores assalariados e da nobreza feudal.
        </p>
        <p>
          A <strong>Troca Colombiana</strong> foi o intercâmbio biológico mais significativo da
          história: da América, chegaram à Europa, África e Ásia produtos como batata, tomate,
          milho, cacau, tabaco, feijão, amendoim, mandioca e abacaxi — que transformaram as
          dietas e as agriculturas de todos os continentes. Da Europa para as Américas foram o
          trigo, a cana-de-açúcar, o café, cavalos, gado, porcos, ovelhas — e, tragicamente,
          doenças como varíola, sarampo, gripe e tifo, para as quais as populações indígenas
          não tinham imunidade, resultando na morte de 50 a 90% da população original americana.
        </p>
        <p>
          A <strong>crise das cidades italianas</strong> foi outra consequência: com as novas
          rotas marítimas, o comércio do Mediterrâneo perdeu importância relativa, e cidades
          como Veneza, Gênova e Florença — que enriqueceram como intermediárias do comércio
          oriental — viram seu poder econômico declinar gradualmente.
        </p>
        <p>
          O <strong>tráfico atlântico de escravizados</strong> foi a consequência mais sombria e
          duradoura: para suprir a demanda de trabalho nas plantations americanas, após o colapso
          demográfico das populações indígenas, os europeus organizaram o maior deslocamento
          forçado de seres humanos da história — estimado em mais de 12 milhões de africanos
          transportados entre 1501 e 1900, dos quais cerca de 4,9 milhões foram trazidos para o Brasil.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais consequências das Grandes Navegações</caption>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Consequência</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Econômica</td>
                <td>Revolução dos Preços</td>
                <td>Inflação severa na Europa; enriquecimento dos comerciantes</td>
              </tr>
              <tr>
                <td>Biológica</td>
                <td>Troca Colombiana</td>
                <td>Intercâmbio de plantas, animais e doenças; colapso demográfico indígena</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Tráfico atlântico de escravizados</td>
                <td>Mais de 12 milhões de africanos traficados; base do sistema colonial</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>Formação dos impérios coloniais</td>
                <td>Portugal e Espanha como primeiras potências mundiais</td>
              </tr>
              <tr>
                <td>Científica</td>
                <td>Revolução cartográfica e náutica</td>
                <td>Mapa do mundo completo; nova cosmologia</td>
              </tr>
              <tr>
                <td>Cultural</td>
                <td>Encontro e choque de civilizações</td>
                <td>Destruição de culturas indígenas; sincretismos culturais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: África e tráfico ── */}
      <section className="lesson-section">
        <span className="section-kicker">África e Escravidão</span>
        <h2>A África nas Navegações e o Início do Tráfico</h2>
        <p>
          As navegações portuguesas ao longo da costa africana tinham motivações múltiplas: buscar
          ouro (o "ouro de Guiné" já era conhecido pelos mouros do Mediterrâneo), encontrar um aliado
          cristão mítico (o "Preste João das Índias"), converter populações ao catolicismo e estabelecer
          feitorias comerciais. Mas rapidamente o tráfico de pessoas escravizadas tornou-se o negócio
          mais lucrativo.
        </p>
        <p>
          O primeiro carregamento de africanos escravizados chegou a Portugal em 1441, trazido por
          Antão Gonçalves e Nuno Tristão. Em 1444, realiza-se em Lagos, Portugal, o primeiro leilão
          público de africanos escravizados na Europa. A partir de então, a escravidão africana
          substituiu progressivamente a escravidão de mouros e de eslavos que havia dominado o
          Mediterrâneo medieval.
        </p>
        <p>
          É fundamental compreender que o tráfico atlântico não foi apenas uma imposição europeia:
          diversos reinos africanos — como o Daomé, o Congo, Angola e os Iorubás — participaram
          ativamente do comércio, vendendo prisioneiros de guerra e rivais aos europeus em troca
          de armas, tecidos e manufaturados. Isso não diminui a responsabilidade europeia pelo
          sistema, mas evidencia a complexidade do fenômeno e a existência de hierarquias e conflitos
          internos na África que os europeus exploraram deliberadamente.
        </p>
      </section>

      {/* ── Seção 8: Comparativo Portugal vs Espanha ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>Portugal e Espanha: estratégias e resultados</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre as expansões portuguesa e espanhola</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Portugal</th>
                <th>Espanha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rota principal</td>
                <td>Leste — contorno da África para Índia</td>
                <td>Oeste — travessia do Atlântico</td>
              </tr>
              <tr>
                <td>Principal motivação</td>
                <td>Comércio de especiarias asiáticas</td>
                <td>Busca de rota alternativa para Ásia; ouro</td>
              </tr>
              <tr>
                <td>Maior conquista</td>
                <td>Rota para a Índia e Império do Oriente</td>
                <td>Conquista da América e impérios asteca e inca</td>
              </tr>
              <tr>
                <td>Principal produto colonial</td>
                <td>Especiarias (pimenta, cravo, noz-moscada), depois açúcar</td>
                <td>Prata (Potosí) e ouro; açúcar nas ilhas caribenhas</td>
              </tr>
              <tr>
                <td>Figura central</td>
                <td>Vasco da Gama, Bartolomeu Dias, Cabral</td>
                <td>Cristóvão Colombo, Cortés, Pizarro, Magalhães</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9: Impacto nos povos indígenas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Indígena</span>
        <h2>O Impacto sobre os Povos Indígenas</h2>
        <p>
          A perspectiva dos povos que já habitavam as Américas é fundamental para uma compreensão
          plena das Grandes Navegações. Para os Tupinambá, os Astecas, os Incas e centenas de outros
          povos, o "descobrimento" foi o início de uma catástrofe sem precedentes. Estima-se que
          a população indígena das Américas no momento do contato variava entre 50 e 100 milhões de
          pessoas. Em um século, esse número havia sido reduzido a menos de 10 milhões — o maior
          genocídio da história humana.
        </p>
        <p>
          As doenças foram o principal vetor de morte: varíola, sarampo, gripe, tifo e outras
          enfermidades europeias varreram populações que nunca haviam sido expostas a esses agentes
          infecciosos e não possuíam imunidade. A violência da conquista, a escravidão e a
          desorganização social completaram a devastação. Aldeias inteiras foram extintas antes
          mesmo de verem um europeu, pois as doenças se espalhavam mais rápido que os colonizadores.
        </p>
        <p>
          Para o ENEM, é essencial não tratar as navegações apenas do ponto de vista dos navegadores
          europeus, mas também reconhecer a agência e a resistência dos povos indígenas, a riqueza
          das civilizações que foram destruídas e o caráter estruturalmente violento da colonização.
        </p>

        <div className="lesson-highlight">
          <strong>Dado para o ENEM:</strong> a estimativa mais aceita atualmente é de que cerca de
          90% da população indígena das Américas morreu nos primeiros cem anos após o contato europeu,
          principalmente em decorrência de doenças para as quais não tinham imunidade.
        </div>
      </section>

      {/* ── Exercises ── */}
      <Exercise
        level="Básico"
        title="Motivações das Grandes Navegações"
        statement={
          <p>
            Entre os principais fatores que impulsionaram Portugal e Espanha a lançar-se às
            Grandes Navegações no século XV, destaca-se:
          </p>
        }
        options={[
          { letter: "A", text: "O desejo de explorar as riquezas do extremo norte da Europa e da Sibéria." },
          { letter: "B", text: "A necessidade de encontrar novas rotas para as especiarias do Oriente, diante do encarecimento das rotas terrestres controladas pelos muçulmanos.", correct: true },
          { letter: "C", text: "A busca de aliados militares na China para combater o Império Otomano." },
          { letter: "D", text: "O interesse em colonizar a Gronelândia e a Islândia, já exploradas pelos vikings." },
          { letter: "E", text: "A competição com o Império Romano do Oriente pelo controle do comércio mediterrâneo." },
        ]}
        resolution={
          <p>
            O bloqueio das rotas terrestres pelas potências muçulmanas — especialmente após a
            queda de Constantinopla em 1453 — encarecia enormemente as especiarias que chegavam
            à Europa. Portugal e Espanha buscaram rotas marítimas alternativas para o Oriente,
            motivados também pelo espírito da Reconquista e pela sede de ouro e novas terras.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Tratado de Tordesilhas"
        statement={
          <p>
            O Tratado de Tordesilhas (1494) teve como principal consequência para a história do Brasil:
          </p>
        }
        options={[
          { letter: "A", text: "Garantir à Espanha o direito exclusivo de colonizar toda a América do Sul, inclusive o Brasil." },
          { letter: "B", text: "Dividir o mundo a descobrir entre Portugal e Espanha por uma linha a 370 léguas de Cabo Verde, colocando o litoral do Brasil no lado português, o que fundamentou a posterior colonização lusitana.", correct: true },
          { letter: "C", text: "Conceder à França o direito de colonizar o Rio de Janeiro e a Amazônia, excluindo Portugal da América." },
          { letter: "D", text: "Proibir qualquer nação europeia de colonizar a América por cinquenta anos após o tratado." },
          { letter: "E", text: "Estabelecer que toda a América do Norte caberia à Inglaterra e toda a América do Sul à Espanha." },
        ]}
        resolution={
          <p>
            O Tratado de Tordesilhas estabeleceu uma linha meridiana a 370 léguas a oeste das
            ilhas de Cabo Verde. A leste dessa linha, as terras pertenceriam a Portugal; a oeste,
            à Espanha. Como o litoral oriental do Brasil — incluindo toda a costa atlântica —
            ficava a leste dessa linha, Portugal tinha fundamento jurídico para reclamar o
            território, o que determinou a colonização portuguesa.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Troca Colombiana e colapso demográfico"
        statement={
          <p>
            A "Troca Colombiana" refere-se ao intercâmbio biológico entre os continentes após
            1492. Sobre esse processo, é correto afirmar que:
          </p>
        }
        options={[
          { letter: "A", text: "Beneficiou igualmente todas as populações envolvidas, distribuindo de forma equilibrada plantas úteis e conhecimentos agrícolas." },
          { letter: "B", text: "Teve impacto principalmente positivo para as populações americanas, que receberam tecnologias agrícolas superiores da Europa." },
          { letter: "C", text: "Incluiu o intercâmbio de plantas alimentícias que enriqueceram as dietas europeias, mas também a transferência de doenças que devastaram as populações indígenas, sem imunidade prévia, causando o maior colapso demográfico da história.", correct: true },
          { letter: "D", text: "Restringiu-se ao intercâmbio de animais domésticos e não teve impacto significativo sobre as populações humanas." },
          { letter: "E", text: "Foi um processo exclusivamente cultural, sem impacto biológico ou demográfico." },
        ]}
        resolution={
          <p>
            A Troca Colombiana foi profundamente assimétrica: enquanto a Europa se beneficiou
            enormemente de plantas como batata, milho e tomate (que aumentaram sua população),
            as Américas receberam doenças — varíola, sarampo, gripe — para as quais as
            populações indígenas não tinham imunidade. O resultado foi o colapso demográfico
            mais rápido e devastador da história humana: entre 50 e 90% da população indígena
            americana morreu no século seguinte ao contato.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Carta de Pero Vaz de Caminha"
        statement={
          <p>
            "Eles não lavram nem criam. Não há aqui boi nem vaca, nem cabra, nem ovelha, nem
            galinha, nem qualquer outra alimária, que costumada seja ao viver dos homens.
            Nem comem senão deste inhame que aqui há muito, e dessa semente e frutos que a
            terra e as árvores de si lançam."
            (Pero Vaz de Caminha, <em>Carta ao rei D. Manuel</em>, 1500)
          </p>
        }
        options={[
          { letter: "A", text: "Revela que os indígenas eram completamente incapazes de qualquer atividade produtiva, confirmando a visão europeia de sua inferioridade." },
          { letter: "B", text: "Demonstra que os indígenas praticavam uma economia de subsistência sem produção excedente, o que, segundo a visão europeia, justificava sua exploração pelo colonizador.", correct: true },
          { letter: "C", text: "Prova que os indígenas eram nômades sem qualquer organização social ou econômica." },
          { letter: "D", text: "Descreve objetivamente a agricultura indígena, sem qualquer filtro cultural ou ideológico." },
          { letter: "E", text: "Mostra que os indígenas possuíam uma economia agrária avançada, semelhante à europeia." },
        ]}
        resolution={
          <p>
            A carta de Caminha revela uma visão etnocêntrica que interpreta a ausência de
            animais domésticos europeus e de agricultura nos moldes europeus como sinal de
            "primitividade". Na realidade, os Tupiniquim tinham sua própria economia —
            agricultura itinerante, caça, pesca, coleta — bem adaptada ao ambiente. A
            percepção de que "não lavravam nem criavam" foi usada ideologicamente para
            justificar a colonização e a escravização, pois "terra sem uso" poderia ser
            apropriada pelos europeus.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Navegações e tráfico negreiro"
        statement={
          <p>
            A ligação entre as Grandes Navegações e o tráfico atlântico de africanos escravizados
            pode ser caracterizada como:
          </p>
        }
        options={[
          { letter: "A", text: "Acidental e tardia: o tráfico só teve início dois séculos após as navegações, sem relação direta com elas." },
          { letter: "B", text: "Estrutural e imediata: a exploração da costa africana por Portugal, ainda no século XV, deu origem ao tráfico de escravizados, que se tornou a base do sistema colonial americano após o colapso demográfico indígena.", correct: true },
          { letter: "C", text: "Marginal: o tráfico negreiro foi uma prática de pequena escala, sem impacto econômico significativo no sistema colonial." },
          { letter: "D", text: "Exclusivamente africana: o tráfico foi organizado e executado pelos próprios reinos africanos, sem participação europeia direta." },
          { letter: "E", text: "Proibida desde o início pelas leis ibéricas, que puniam severamente os envolvidos no comércio de pessoas." },
        ]}
        resolution={
          <p>
            O tráfico atlântico de africanos escravizados nasceu das próprias navegações
            portuguesas: já em 1441 os primeiros africanos chegavam a Portugal como escravizados.
            Com o colapso demográfico indígena nas Américas e a expansão das plantations,
            o tráfico se tornou o maior e mais lucrativo negócio do sistema colonial, com mais
            de 12 milhões de africanos forçados a cruzar o Atlântico. Era uma consequência
            estrutural, não acidental, das navegações.
          </p>
        }
      />
    </article>
  );
}
