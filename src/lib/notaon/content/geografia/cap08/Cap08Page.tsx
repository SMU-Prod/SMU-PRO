"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 08</span>
          <h1>Relevo terrestre e agentes modeladores</h1>
          <p>
            O relevo terrestre é o resultado de um embate permanente entre forças internas da
            Terra — que constroem montanhas, abrem vales e elevam platôs — e forças externas,
            como a ação da água, do vento, do gelo e dos seres vivos, que desgastam e transportam
            os materiais rochosos. Compreender as formas de relevo e os processos que as originam
            é essencial para entender desde a localização de recursos naturais até os riscos de
            deslizamentos, enchentes e desertificação. No Brasil, essa compreensão é especialmente
            relevante dada a enorme diversidade de paisagens que vão da Amazônia ao planalto
            central, das serras da Mantiqueira ao Pantanal.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Forças internas e externas</span>
        <h2>1. Agentes internos e externos do relevo</h2>
        <p>
          O relevo resulta da ação combinada de dois grupos de agentes:
        </p>
        <p>
          <strong>Agentes internos (endógenos):</strong> originados no interior da Terra, são
          responsáveis pela criação de grandes formas de relevo. Incluem o tectonismo (movimentos
          das placas), o vulcanismo e o plutonismo (intrusões de magma). São agentes
          construtivos, pois elevam e diferenciam o relevo.
        </p>
        <p>
          <strong>Agentes externos (exógenos):</strong> atuam na superfície e são movidos pela
          energia solar e pela gravidade. Incluem o intemperismo (desagregação das rochas), a
          erosão (transporte de materiais), a sedimentação e a ação dos seres vivos. São agentes
          destrutivos-construtivos: destroem o relevo em um lugar e constroem formas novas em
          outro (deltas, dunas, planícies aluviais).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre agentes internos e externos</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Fonte de energia</th>
                <th>Processos</th>
                <th>Formas resultantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interno</td>
                <td>Calor interno da Terra</td>
                <td>Tectonismo, vulcanismo</td>
                <td>Montanhas, platôs, fossas oceânicas</td>
              </tr>
              <tr>
                <td>Externo</td>
                <td>Energia solar + gravidade</td>
                <td>Intemperismo, erosão, sedimentação</td>
                <td>Planícies, delta, cânions, dunas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação do relevo</span>
        <h2>2. Principais formas de relevo</h2>
        <p>
          As formas de relevo são classificadas de acordo com sua altitude, origem e morfologia:
        </p>
        <p>
          <strong>Montanhas:</strong> elevações com topos pontiagudos e encostas íngremes,
          geralmente de origem tectônica (dobramento ou falhamento). Exemplos: Andes, Himalaias,
          Alpes. No Brasil, a Serra da Mantiqueira e a Serra do Mar são os relevos mais elevados.
        </p>
        <p>
          <strong>Planaltos:</strong> áreas elevadas de superfície aplainada, resultado de
          processos erosivos que rebaixaram antigas montanhas ou da elevação de bacias sedimentares.
          A maior parte do Brasil está sobre planaltos (Planalto Central Brasileiro).
        </p>
        <p>
          <strong>Planícies:</strong> superfícies planas e baixas, geralmente formadas por
          sedimentação. Exemplos: Planície Amazônica, Planície do Pantanal, planícies litorâneas.
        </p>
        <p>
          <strong>Depressões:</strong> áreas rebaixadas em relação às terras vizinhas. Podem ser
          relativas (menores que o entorno) ou absolutas (abaixo do nível do mar). A Depressão
          do São Francisco é exemplo brasileiro.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relevo brasileiro</span>
        <h2>3. Classificação do relevo brasileiro</h2>
        <p>
          O relevo do Brasil é predominantemente antigo (Pré-Cambriano e Paleozoico) e foi
          intensamente erodido ao longo de centenas de milhões de anos, resultando em superfícies
          aplainadas. A classificação mais aceita atualmente é a proposta por Jurandyr Ross (1995),
          que divide o relevo em <strong>planaltos</strong> (áreas de erosão), <strong>planícies</strong>
          (áreas de sedimentação atual) e <strong>depressões</strong> (áreas rebaixadas por erosão
          diferencial).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais unidades do relevo brasileiro (classificação Ross)</caption>
            <thead>
              <tr>
                <th>Unidade</th>
                <th>Tipo</th>
                <th>Região</th>
                <th>Altitude média (m)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Planalto Central Brasileiro</td>
                <td>Planalto</td>
                <td>Centro-Oeste/Sudeste</td>
                <td>600 – 1.100</td>
              </tr>
              <tr>
                <td>Planalto Meridional</td>
                <td>Planalto</td>
                <td>Sul</td>
                <td>800 – 1.200</td>
              </tr>
              <tr>
                <td>Planalto da Borborema</td>
                <td>Planalto</td>
                <td>Nordeste</td>
                <td>500 – 900</td>
              </tr>
              <tr>
                <td>Planície Amazônica</td>
                <td>Planície</td>
                <td>Norte</td>
                <td>0 – 200</td>
              </tr>
              <tr>
                <td>Planície do Pantanal</td>
                <td>Planície</td>
                <td>Centro-Oeste</td>
                <td>80 – 200</td>
              </tr>
              <tr>
                <td>Depressão do São Francisco</td>
                <td>Depressão</td>
                <td>Nordeste/Sudeste</td>
                <td>300 – 600</td>
              </tr>
              <tr>
                <td>Serra da Mantiqueira</td>
                <td>Planalto serrano</td>
                <td>Sudeste</td>
                <td>1.500 – 2.891</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG — Perfil esquemático do relevo brasileiro */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="700" height="280" fill="#eaf7fb" />
          {/* Perfil de relevo simplificado Oeste-Leste */}
          <polyline
            points="10,200 80,195 120,170 160,120 210,100 250,105 290,110 330,120 370,150 410,160 460,80 520,90 560,155 600,170 650,200 690,200"
            fill="#8d6e47"
            stroke="#5d4037"
            strokeWidth="2"
          />
          {/* Preenchimento abaixo */}
          <polygon
            points="10,200 80,195 120,170 160,120 210,100 250,105 290,110 330,120 370,150 410,160 460,80 520,90 560,155 600,170 650,200 690,200 690,270 10,270"
            fill="#8d6e47"
          />
          {/* Nível do mar */}
          <line x1="10" y1="200" x2="690" y2="200" stroke="#2980b9" strokeWidth="1" strokeDasharray="6,3" />
          <text x="695" y="204" fontSize="10" fill="#2980b9">N.M.</text>
          {/* Labels */}
          <text x="60" y="185" textAnchor="middle" fontSize="10" fill="white">Planície</text>
          <text x="60" y="197" textAnchor="middle" fontSize="10" fill="white">Amaz.</text>
          <text x="185" y="108" textAnchor="middle" fontSize="10" fill="white">Planalto</text>
          <text x="185" y="120" textAnchor="middle" fontSize="10" fill="white">Central</text>
          <text x="330" y="105" textAnchor="middle" fontSize="10" fill="white">Dep. São</text>
          <text x="330" y="118" textAnchor="middle" fontSize="10" fill="white">Francisco</text>
          <text x="465" y="67" textAnchor="middle" fontSize="10" fill="white">Serra da</text>
          <text x="465" y="79" textAnchor="middle" fontSize="10" fill="white">Mantiqueira</text>
          <text x="600" y="155" textAnchor="middle" fontSize="10" fill="white">Serra</text>
          <text x="600" y="167" textAnchor="middle" fontSize="10" fill="white">do Mar</text>
          {/* Eixo */}
          <text x="10" y="258" fontSize="10" fill="#555">Oeste</text>
          <text x="650" y="258" fontSize="10" fill="#555">Leste (Atlântico)</text>
          <text x="350" y="275" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">Perfil esquemático do relevo brasileiro (corte L-O)</text>
        </svg>
        <figcaption>Figura 1 — Perfil esquemático simplificado do relevo brasileiro no eixo leste-oeste, destacando planaltos, depressões e planícies</figcaption>
      </figure>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Intemperismo</span>
        <h2>4. Intemperismo: desagregação das rochas</h2>
        <p>
          O intemperismo é o processo de desagregação e decomposição das rochas na superfície ou
          próximo a ela, sem envolver transporte. Divide-se em dois tipos principais:
        </p>
        <p>
          <strong>Intemperismo físico (mecânico):</strong> quebra a rocha em fragmentos menores
          sem alterar sua composição química. Causas: variação de temperatura (termoclastia),
          congelamento e degelo da água nas fissuras (crioclastia), ação das raízes das plantas
          (bioclastia) e descompressão pelo soerguimento da rocha (disjunção esferoidal).
        </p>
        <p>
          <strong>Intemperismo químico:</strong> altera a composição mineralógica das rochas
          pela ação da água, do oxigênio e do dióxido de carbono. Processos: hidrólise
          (dissolução de silicatos), oxidação (ferrugem dos minerais de ferro), carbonatação
          (dissolução de calcário pelo CO₂ da chuva ácida natural) e hidratação.
        </p>
        <p>
          Em climas tropicais úmidos (como grande parte do Brasil), o intemperismo químico é
          dominante e muito intenso, produzindo solos espessos e ricos em óxidos de ferro e
          alumínio (lateritas). Em climas áridos e frios, predomina o intemperismo físico.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erosão</span>
        <h2>5. Erosão e seus agentes</h2>
        <p>
          A erosão é o conjunto de processos que envolvem o desprendimento, transporte e
          deposição dos materiais do relevo. Os principais agentes erosivos são:
        </p>
        <ul style={{ paddingLeft: "1.4rem", lineHeight: "1.9" }}>
          <li>
            <strong>Água (erosão hídrica):</strong> a mais importante no Brasil. Chuvas
            provocam erosão em lençol (splash), formação de sulcos, ravinas e voçorocas.
            Os rios erodem suas margens e leito por abrasão, corrasão e corrosão.
          </li>
          <li>
            <strong>Vento (erosão eólica):</strong> significativa em regiões áridas e semiáridas.
            Forma dunas, yardangs e pavimentos de deflação.
          </li>
          <li>
            <strong>Gelo (erosão glacial):</strong> geleiras erodem o substrato rochoso formando
            vales em U, circos glaciais, morenas e fiordes. Importante no passado do sul do
            Brasil (glaciação do Permo-Carbonífero).
          </li>
          <li>
            <strong>Ondas (erosão marinha):</strong> esculpem falésias, plataformas de abrasão e
            grutas marinhas nas costas rochosas.
          </li>
          <li>
            <strong>Gravidade (movimentos de massa):</strong> deslizamentos, escorregamentos e
            fluxos de detritos, frequentes em encostas íngremes da Serra do Mar e da Mantiqueira.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de erosão hídrica e formas resultantes</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Processo</th>
                <th>Forma resultante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Erosão laminar</td>
                <td>Remoção da camada superficial do solo pela chuva</td>
                <td>Empobrecimento do solo</td>
              </tr>
              <tr>
                <td>Sulcos</td>
                <td>Concentração do fluxo em canais rasos</td>
                <td>Estrias no terreno</td>
              </tr>
              <tr>
                <td>Ravinas</td>
                <td>Aprofundamento dos sulcos</td>
                <td>Valetas de 0,5 a 5 m</td>
              </tr>
              <tr>
                <td>Voçorocas</td>
                <td>Aprofundamento até o lençol freático</td>
                <td>Ravinas profundas com lençol exposto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG — Sequência de erosão hídrica */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="680" height="260" fill="#fef9e7" />

          {/* EROSÃO LAMINAR */}
          <rect x="15" y="30" width="140" height="200" fill="#f0f0f0" rx="6" />
          <text x="85" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Laminar</text>
          <rect x="25" y="70" width="120" height="30" fill="#c8a26b" rx="3" />
          <rect x="25" y="105" width="120" height="100" fill="#8d6e47" rx="3" />
          <path d="M35 70 Q45 60 55 70 Q65 60 75 70 Q85 60 95 70 Q105 60 115 70 Q125 60 135 70" stroke="#2980b9" strokeWidth="2" fill="none" />
          <text x="85" y="195" textAnchor="middle" fontSize="10" fill="#555">Solo empobrecido</text>
          <text x="85" y="210" textAnchor="middle" fontSize="10" fill="#555">uniformemente</text>

          {/* SULCOS */}
          <rect x="175" y="30" width="140" height="200" fill="#f0f0f0" rx="6" />
          <text x="245" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Sulcos</text>
          <rect x="185" y="70" width="120" height="30" fill="#c8a26b" rx="3" />
          <rect x="185" y="105" width="120" height="100" fill="#8d6e47" rx="3" />
          <rect x="225" y="90" width="8" height="15" fill="#5d4037" />
          <rect x="265" y="90" width="8" height="15" fill="#5d4037" />
          <text x="245" y="210" textAnchor="middle" fontSize="10" fill="#555">Canais rasos</text>

          {/* RAVINAS */}
          <rect x="335" y="30" width="140" height="200" fill="#f0f0f0" rx="6" />
          <text x="405" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Ravinas</text>
          <rect x="345" y="100" width="120" height="100" fill="#8d6e47" rx="3" />
          <polygon points="395,60 375,160 415,160" fill="#5d4037" />
          <text x="405" y="210" textAnchor="middle" fontSize="10" fill="#555">Valetas profundas</text>

          {/* VOÇOROCAS */}
          <rect x="495" y="30" width="170" height="200" fill="#f0f0f0" rx="6" />
          <text x="580" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Voçorocas</text>
          <rect x="505" y="100" width="150" height="100" fill="#8d6e47" rx="3" />
          <polygon points="560,55 530,160 590,160" fill="#5d4037" />
          <ellipse cx="560" cy="162" rx="20" ry="6" fill="#2980b9" fillOpacity="0.6" />
          <text x="580" y="207" textAnchor="middle" fontSize="10" fill="#555">Lençol freático</text>
          <text x="580" y="220" textAnchor="middle" fontSize="10" fill="#555">exposto</text>
        </svg>
        <figcaption>Figura 2 — Sequência evolutiva da erosão hídrica: da erosão laminar às voçorocas</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sedimentação</span>
        <h2>6. Sedimentação e formas deposicionais</h2>
        <p>
          Quando a energia dos agentes transportadores diminui, o material erodido é depositado,
          formando <strong>sedimentos</strong>. Ao longo do tempo, sedimentos acumulados formam
          rochas sedimentares e novas formas de relevo deposicionais:
        </p>
        <ul style={{ paddingLeft: "1.4rem", lineHeight: "1.9" }}>
          <li>
            <strong>Planícies aluviais:</strong> formadas ao longo dos rios por deposição de
            sedimentos nas enchentes (várzeas). Solos extremamente férteis — as planícies
            aluviais do Rio Nilo sustentaram a civilização egípcia.
          </li>
          <li>
            <strong>Deltas:</strong> depósitos fluviais na foz, quando o rio chega ao mar ou
            lago sem correntes fortes. Exemplos: Delta do Mississippi, Delta do Nilo, Delta do
            Parnaíba (único delta em mar aberto das Américas).
          </li>
          <li>
            <strong>Dunas:</strong> acumulação eólica de areia, comuns em zonas áridas e
            litorâneas. Podem migrar dezenas de metros por ano.
          </li>
          <li>
            <strong>Morenas glaciais:</strong> depósitos de material carregado por geleiras.
            Comuns no sul do Brasil e no norte da Europa/América.
          </li>
          <li>
            <strong>Recifes e corais:</strong> construções biogênicas que formam relevo no fundo
            submarino, como a costa do Nordeste brasileiro.
          </li>
        </ul>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tectonismo</span>
        <h2>7. Tectonismo e suas formas</h2>
        <p>
          O tectonismo é o conjunto de movimentos da crosta terrestre causados pelas forças
          internas. Gera dois tipos principais de estruturas:
        </p>
        <p>
          <strong>Dobras (dobramentos):</strong> quando as camadas rochosas são comprimidas
          lentamente, dobram-se sem romper. Formam anticlinais (dobras convexas para cima) e
          sinclinais (dobras côncavas). As grandes cadeias dobradas incluem os Andes, Alpes,
          Himalaias e as antigas cadeias caledoniana e hercínica da Europa.
        </p>
        <p>
          <strong>Falhas:</strong> quando as forças superam a resistência da rocha, ela se rompe
          e os blocos se deslocam. Falhas normais (blocos afundam por distensão), falhas reversas
          (blocos sobem por compressão) e falhas transcorrentes (deslocamento horizontal) criam
          horsts (blocos soerguidos), grabens (blocos afundados) e escarpas de falha.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de estruturas tectônicas e exemplos</caption>
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Processo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dobras (anticlinais/sinclinais)</td>
                <td>Compressão plástica</td>
                <td>Andes, Himalaias, Alpes</td>
              </tr>
              <tr>
                <td>Horsts</td>
                <td>Bloco soerguido entre falhas</td>
                <td>Maciço Central Francês</td>
              </tr>
              <tr>
                <td>Grabens (rifts)</td>
                <td>Bloco rebaixado entre falhas</td>
                <td>Vale do Rift Africano</td>
              </tr>
              <tr>
                <td>Falhas transcorrentes</td>
                <td>Deslizamento lateral</td>
                <td>Falha de San Andreas (EUA)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relevo cárstico</span>
        <h2>8. Relevo cárstico (carste)</h2>
        <p>
          O relevo cárstico é formado em rochas solúveis, especialmente calcários e dolomitos,
          pela dissolução química promovida pela água levemente ácida (contendo CO₂ dissolvido).
          Esse processo é chamado de <strong>carstificação</strong> ou <strong>carbonatação</strong>.
        </p>
        <p>
          As formas cársticas mais características são: <strong>cavernas</strong> (grutas
          subterrâneas com estalactites e estalagmites), <strong>dolinas</strong> (depressões
          circulares na superfície), <strong>uvala</strong> (coalescência de dolinas),
          <strong> poljes</strong> (grandes depressões fechadas), <strong>surgências</strong>
          (rios que afloram do subsolo) e <strong>pônores</strong> (pontos onde rios mergulham
          no subsolo). No Brasil, o Grupo Bambuí (MG, GO, BA) e o Vale do Ribeira (SP/PR)
          concentram extensas regiões cársticas com cavernas mundialmente famosas (Lapa da Lagoa
          Santa, Caverna do Diabo).
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Riscos geomorfológicos</span>
        <h2>9. Riscos geomorfológicos e gestão do território</h2>
        <p>
          O conhecimento das formas de relevo e dos processos geomorfológicos é fundamental para
          a gestão segura do território. Regiões de encosta acentuada, com solos saturados de
          água, são propensas a <strong>deslizamentos de terra</strong> — um dos desastres
          naturais mais letais do Brasil. A tragédia da Serra Gaúcha (2024), da Serra Fluminense
          (Petrópolis, 2022) e do Vale do Itajaí (2008) são exemplos recentes.
        </p>
        <p>
          As ações preventivas incluem: mapeamento de áreas de risco, proibição de construções
          em encostas íngremes, reflorestamento (as raízes ajudam a fixar o solo), construção
          de obras de contenção e sistemas de monitoramento e alerta. O Brasil conta com o
          Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN), que
          monitora mais de 950 municípios em risco.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Síntese: relevo, clima e sociedade</h2>
        <p>
          O relevo terrestre não é apenas uma paisagem estática: é um sistema dinâmico que
          influencia e é influenciado pelo clima, pela vegetação, pelos solos e pela ação humana.
          Planaltos elevados captam mais chuva e alimentam os grandes rios; planícies inundáveis
          regulam cheias e concentram biodiversidade; encostas modeladas pela erosão determinam
          onde podem se instalar cidades, lavouras ou reservatórios.
        </p>
        <p>
          A atividade humana acelera processos geomorfológicos naturais: o desmatamento favorece
          a erosão; a impermeabilização urbana aumenta o escoamento superficial e os riscos de
          enchentes; a mineração a céu aberto cria cicatrizes profundas na paisagem. Compreender
          o relevo é, portanto, condição para um desenvolvimento territorial sustentável.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A classificação do relevo brasileiro proposta por Jurandyr Ross (1995) divide as
              formas de relevo em três categorias. Assinale a alternativa que apresenta
              corretamente essas categorias e um exemplo de cada:
            </p>
          }
          options={[
            { letter: "a", text: "Montanhas, planaltos e vales — Serra da Mantiqueira, Planalto Central, Vale do São Francisco" },
            { letter: "b", text: "Planaltos, planícies e depressões — Planalto Central, Planície Amazônica, Depressão do São Francisco", correct: true },
            { letter: "c", text: "Cadeias, bacias e depressões — Cadeias Costeiras, Bacia do Paraná, Depressão Periférica" },
            { letter: "d", text: "Serras, chapadas e baixadas — Serra do Mar, Chapada Diamantina, Baixada Fluminense" },
            { letter: "e", text: "Planaltos, serras e planícies — Planalto Central, Serra da Canastra, Planície do Pantanal" },
          ]}
          resolution={
            <p>
              A classificação de Jurandyr Ross divide o relevo brasileiro em três grandes
              categorias: planaltos (áreas elevadas onde a erosão predomina sobre a sedimentação),
              planícies (áreas baixas de sedimentação ativa) e depressões (áreas rebaixadas em
              relação ao entorno, mas onde a erosão diferencial foi o processo dominante). Essa
              classificação supera a antiga de Aroldo de Azevedo (que usava os termos "terras
              altas" e "terras baixas") e é o padrão adotado pelo IBGE desde 1995.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Em regiões de clima tropical úmido, como grande parte do Brasil, o intemperismo
              predominante é o químico. A principal razão para isso é:
            </p>
          }
          options={[
            { letter: "a", text: "A alta amplitude térmica diária, que fragmenta as rochas pelo aquecimento e resfriamento" },
            { letter: "b", text: "A presença de gelo nas fissuras rochosas, que expande e quebra as rochas" },
            { letter: "c", text: "A intensa precipitação e as altas temperaturas, que aceleram reações químicas como hidrólise e oxidação", correct: true },
            { letter: "d", text: "A ausência de vegetação, que expõe as rochas à ação direta do vento" },
            { letter: "e", text: "A presença de rochas cristalinas muito resistentes ao intemperismo físico" },
          ]}
          resolution={
            <p>
              O intemperismo químico é intensificado pela combinação de calor e umidade, pois as
              reações químicas são aceleradas em temperaturas mais altas (regra de Van't Hoff: cada
              10°C de aumento dobra a velocidade da reação) e dependem da presença de água. No
              clima tropical úmido, a elevada pluviosidade fornece água abundante para a hidrólise
              (decomposição de silicatos) e a oxidação dos minerais ferrosos, produzindo solos
              espessos e ricos em óxidos de ferro e alumínio. O intemperismo físico por crioclastia
              (gelo nas fissuras) é próprio de climas frios.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) As voçorocas são formas de erosão hídrica acelerada que representam
              sério problema ambiental em diversas regiões do Brasil, especialmente no Centro-Oeste
              e Sudeste. O processo que distingue a voçoroca de uma simples ravina é:
            </p>
          }
          options={[
            { letter: "a", text: "A voçoroca é formada exclusivamente pela ação do vento, enquanto a ravina resulta da água" },
            { letter: "b", text: "A voçoroca se aprofunda até atingir o lençol freático, tornando-se um processo autossustentado e de difícil recuperação", correct: true },
            { letter: "c", text: "As ravinas são mais profundas que as voçorocas, mas ocorrem em áreas menores" },
            { letter: "d", text: "A voçoroca é uma forma deposicional, enquanto a ravina é erosiva" },
            { letter: "e", text: "As voçorocas só se formam em solos arenosos, sendo raras em solos argilosos" },
          ]}
          resolution={
            <p>
              Ravinas são incisões erosivas com profundidades de 0,5 a 5 metros. Quando o processo
              erosivo se aprofunda até atingir o lençol freático, a erosão passa a ser alimentada
              também pela água subterrânea, tornando-a autossustentada e progressiva mesmo na
              ausência de chuvas. Nesse estágio, a feição é chamada de voçoroca. Ela tende a se
              expandir lateralmente e regressivamente (em direção à cabeceira) e é muito difícil de
              recuperar. O processo é agravado pelo desmatamento e pelo uso inadequado do solo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              As cavernas e grutas presentes na Região de Lagoa Santa (MG) e no Vale do Ribeira
              (SP/PR) são características do relevo cárstico. O processo responsável pela formação
              dessas cavidades é:
            </p>
          }
          options={[
            { letter: "a", text: "A dissolução de rochas cristalinas (granito) pela ação da água quente de fontes geotérmicas" },
            { letter: "b", text: "A erosão mecânica de arenitos por rios subterrâneos de grande energia" },
            { letter: "c", text: "A dissolução de rochas calcárias pela água levemente acidificada com dióxido de carbono, formando o ácido carbônico", correct: true },
            { letter: "d", text: "O colapso de câmaras magmáticas vazias no interior de áreas vulcânicas extintas" },
            { letter: "e", text: "A desagregação física de rochas metamórficas pela variação de temperatura" },
          ]}
          resolution={
            <p>
              O relevo cárstico forma-se em rochas solúveis, especialmente calcários (CaCO₃). A
              água da chuva absorve CO₂ da atmosfera e do solo, formando ácido carbônico (H₂CO₃),
              que dissolve o calcário ao infiltrar-se pelas fraturas. Com o tempo, esse processo
              amplia as fraturas e forma cavidades subterrâneas (cavernas). As estalactites e
              estalagmites formam-se pela precipitação do carbonato de cálcio quando a solução
              perde CO₂. Granitos e arenitos não são rochas solúveis e não formam relevo cárstico.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) Tragédias associadas a deslizamentos de terra em encostas urbanas
              tornam-se cada vez mais frequentes no Brasil. Analise os fatores que contribuem para
              esse quadro e identifique a alternativa que apresenta a combinação mais completa e
              correta de causas:
            </p>
          }
          options={[
            { letter: "a", text: "Aumento das chuvas globais pelo aquecimento climático + solo arenoso + ausência de vegetação" },
            { letter: "b", text: "Ocupação irregular de encostas íngremes + desmatamento + intensificação das chuvas extremas pelo aquecimento climático + ausência de sistemas de alerta e planejamento urbano adequado", correct: true },
            { letter: "c", text: "Aceleração dos movimentos tectônicos + impermeabilização do solo urbano + falta de chuvas que consolidem o solo" },
            { letter: "d", text: "Avanço da mineração em áreas urbanas + vibração de equipamentos pesados + infiltração de lençol freático" },
            { letter: "e", text: "Uso excessivo de fertilizantes agrícolas + compactação do solo + chuvas ácidas oriundas de vulcões ativos" },
          ]}
          resolution={
            <p>
              Deslizamentos em encostas urbanas resultam de múltiplos fatores interligados: (1) a
              ocupação irregular de áreas de risco (encostas com declividade superior a 30°) por
              populações de baixa renda sem alternativas habitacionais; (2) o desmatamento, que
              remove as raízes que fixam o solo e aumentam a infiltração; (3) a intensificação das
              chuvas extremas associada ao aquecimento global, que acelera a saturação dos solos;
              e (4) a ausência de planejamento urbano, mapeamento de risco e sistemas de alerta.
              Fatores tectônicos, mineração e fertilizantes não são determinantes nesse contexto.
              A tragédia de Petrópolis (2022), com 233 mortes, ilustra essa combinação de fatores
              físicos e socioeconômicos.
            </p>
          }
        />
      </section>
    </article>
  );
}
