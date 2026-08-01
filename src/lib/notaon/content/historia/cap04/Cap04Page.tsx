"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 4</span>
          <h1>O surgimento da agricultura, das cidades e das primeiras civilizações</h1>
          <p>
            Entre 10.000 e 3.000 a.C., a humanidade passou por uma das mais profundas
            transformações de toda a sua história: a invenção da agricultura, a domesticação
            de animais, a formação das primeiras cidades e, finalmente, o surgimento das
            primeiras civilizações. Esse conjunto de transformações — que os historiadores
            chamam de Revolução Agrícola e Revolução Urbana — não foi um processo simples
            nem linear: ocorreu de forma independente em diversas regiões do globo, com
            ritmos e características específicas em cada uma delas. Neste capítulo, vamos
            compreender as condições que tornaram possível esse salto histórico, as primeiras
            cidades da humanidade, as civilizações fluviais e o surgimento do Estado.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">A Revolução Agrícola</span>
        <h2>1. A invenção da agricultura: causas e regiões</h2>
        <p>
          A <strong>Revolução Agrícola</strong> ocorreu entre 10.000 e 8.000 a.C. em diversas
          regiões do globo de forma independente. O ponto de partida mais estudado é o
          <strong> Crescente Fértil</strong> — uma região em arco que abrange os vales dos
          rios Tigre e Eufrates (atual Iraque), o litoral do Mediterrâneo (atual Israel,
          Líbano e Síria) e parte do sudeste da Turquia. Essa região concentrava cereais
          silvestres domesticáveis (trigo e cevada), animais domesticáveis (ovelhas, cabras,
          bovinos, porcos) e condições climáticas favoráveis.
        </p>
        <p>
          Por que a agricultura surgiu? Essa é uma das perguntas mais debatidas da
          paleoantropologia. O historiador Yuval Noah Harari argumenta que, paradoxalmente,
          a agricultura foi uma escolha que reduziu a qualidade de vida individual na curta
          duração: caçadores-coletores tinham dieta mais variada, trabalhavam menos horas
          por dia e sofriam menos doenças infecciosas (que se proliferam em comunidades
          sedentárias densas). A vantagem da agricultura foi coletiva e de longo prazo:
          alimentar populações maiores, criar excedente e possibilitar a divisão do trabalho.
        </p>
        <p>
          As hipóteses sobre as causas da Revolução Agrícola incluem: (1) <strong>mudança
          climática</strong> — o fim da última era glacial (10.000 a.P.) levou ao recuo de
          megafauna e obrigou adaptações alimentares; (2) <strong>crescimento populacional</strong>
          — mais gente exigiu mais comida, forçando a intensificação da produção;
          (3) <strong>acúmulo de conhecimento</strong> — milênios de observação das plantas
          pelos coletores levaram ao cultivo intencional; (4) <strong>pressão social</strong>
          — comunidades mais sedentárias passaram a defender territórios e controlar recursos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Região</th>
                <th>Período aproximado</th>
                <th>Plantas domesticadas</th>
                <th>Animais domesticados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crescente Fértil (Oriente Médio)</td>
                <td>10.000–8.000 a.C.</td>
                <td>Trigo, cevada, ervilha, lentilha</td>
                <td>Ovelha, cabra, bovino, porco</td>
              </tr>
              <tr>
                <td>China (rio Yangtzé e rio Amarelo)</td>
                <td>8.000–7.000 a.C.</td>
                <td>Arroz, painço, soja</td>
                <td>Porco, galinha</td>
              </tr>
              <tr>
                <td>Nova Guiné</td>
                <td>8.000–6.000 a.C.</td>
                <td>Taro, cana-de-açúcar, banana</td>
                <td>Porco</td>
              </tr>
              <tr>
                <td>México e América Central</td>
                <td>7.000–5.000 a.C.</td>
                <td>Milho, feijão, abóbora, tomate</td>
                <td>Peru (ave), cachorros</td>
              </tr>
              <tr>
                <td>Andes (América do Sul)</td>
                <td>5.000–3.000 a.C.</td>
                <td>Batata, quinoa, mandioca</td>
                <td>Lhama, alpaca, porquinho-da-índia</td>
              </tr>
              <tr>
                <td>Amazônia brasileira</td>
                <td>6.000–4.000 a.C.</td>
                <td>Mandioca, cacau, abacaxi, amendoim</td>
                <td>Poucos animais de grande porte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Primeiras Cidades</span>
        <h2>2. As primeiras cidades: Jericó e Çatalhöyük</h2>
        <p>
          A sedentarização proporcionada pela agricultura criou as condições para o surgimento
          das primeiras cidades. <strong>Jericó</strong> (na atual Cisjordânia, Palestina) é
          considerada uma das mais antigas ocupações urbanas contínuas do mundo, com evidências
          de habitação permanente datando de aproximadamente 10.000 a.C. — embora o assentamento
          só adquira características verdadeiramente urbanas por volta de 8.000 a.C., quando
          foram construídas muralhas de pedra imponentes.
        </p>
        <p>
          <strong>Çatalhöyük</strong> (na atual Turquia central), ocupada entre 7.500 e 5.700 a.C.,
          é outro exemplo fascinante de cidade pré-histórica. Com uma população estimada entre
          5.000 e 10.000 habitantes em seu apogeu, Çatalhöyük apresenta características
          surpreendentes: as casas eram construídas umas sobre as outras, acessadas por
          orifícios no teto (sem ruas ao nível do solo); os mortos eram enterrados sob o
          chão das habitações; as paredes eram decoradas com afrescos elaborados de animais e
          rituais de caça. Notavelmente, as evidências arqueológicas sugerem uma sociedade
          relativamente igualitária, sem clara hierarquia de classe ou gênero — algo que
          se tornaria raro nas civilizações posteriores.
        </p>
        <p>
          O que distingue uma cidade de uma aldeia? Os historiadores identificam alguns
          critérios: <strong>densidade populacional</strong> (muitas pessoas em pouco espaço);
          <strong> especialização do trabalho</strong> (nem todos produzem alimento);
          <strong> monumentalidade</strong> (construções de grande porte que exigem organização
          coletiva); <strong>centralidade</strong> (a cidade atrai e distribui recursos da
          região circundante); e <strong>hierarquia social e política</strong> (estruturas
          de poder que organizam a vida coletiva).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Esquema das condições que geraram as primeiras civilizações">
            <rect x="0" y="0" width="720" height="200" fill="#f8f9fa" rx="8"/>
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Condições para o Surgimento das Primeiras Civilizações</text>

            {/* Agricultura no centro esquerdo */}
            <rect x="20" y="60" width="110" height="45" rx="8" fill="#4caf50"/>
            <text x="75" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Agricultura</text>
            <text x="75" y="95" textAnchor="middle" fontSize="9" fill="#e8f5e9">e Pastoreio</text>
            <line x1="130" y1="82" x2="175" y2="82" stroke="#333" strokeWidth="2"/>

            {/* Excedente alimentar */}
            <rect x="175" y="60" width="110" height="45" rx="8" fill="#ff9800"/>
            <text x="230" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Excedente</text>
            <text x="230" y="92" textAnchor="middle" fontSize="9" fill="#fff3e0">Alimentar</text>
            <line x1="285" y1="82" x2="320" y2="82" stroke="#333" strokeWidth="2"/>

            {/* Especialização */}
            <rect x="320" y="60" width="110" height="45" rx="8" fill="#9c27b0"/>
            <text x="375" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Especialização</text>
            <text x="375" y="92" textAnchor="middle" fontSize="9" fill="#f3e5f5">do Trabalho</text>
            <line x1="430" y1="82" x2="465" y2="82" stroke="#333" strokeWidth="2"/>

            {/* Hierarquia */}
            <rect x="465" y="60" width="110" height="45" rx="8" fill="#f44336"/>
            <text x="520" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Hierarquia</text>
            <text x="520" y="92" textAnchor="middle" fontSize="9" fill="#ffebee">Social</text>
            <line x1="575" y1="82" x2="610" y2="82" stroke="#333" strokeWidth="2"/>

            {/* Estado e Cidade */}
            <rect x="610" y="55" width="100" height="55" rx="8" fill="#1a1a2e"/>
            <text x="660" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Estado</text>
            <text x="660" y="90" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4361ee">+</text>
            <text x="660" y="103" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Cidade</text>

            {/* Elementos adicionais */}
            <rect x="175" y="130" width="110" height="40" rx="8" fill="#2196f3" opacity="0.8"/>
            <text x="230" y="148" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Escrita</text>
            <text x="230" y="162" textAnchor="middle" fontSize="9" fill="#e3f2fd">(registro)</text>
            <line x1="230" y1="130" x2="230" y2="105" stroke="#2196f3" strokeWidth="1.5" strokeDasharray="4,2"/>

            <rect x="320" y="130" width="110" height="40" rx="8" fill="#009688" opacity="0.8"/>
            <text x="375" y="148" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Comércio</text>
            <text x="375" y="162" textAnchor="middle" fontSize="9" fill="#e0f2f1">(trocas)</text>
            <line x1="375" y1="130" x2="375" y2="105" stroke="#009688" strokeWidth="1.5" strokeDasharray="4,2"/>

            <rect x="465" y="130" width="110" height="40" rx="8" fill="#607d8b" opacity="0.8"/>
            <text x="520" y="148" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Religião</text>
            <text x="520" y="162" textAnchor="middle" fontSize="9" fill="#eceff1">(legitimação)</text>
            <line x1="520" y1="130" x2="520" y2="105" stroke="#607d8b" strokeWidth="1.5" strokeDasharray="4,2"/>
          </svg>
          <figcaption>Esquema das condições que, encadeadas, levaram ao surgimento das primeiras civilizações: da agricultura ao Estado e às cidades.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Civilizações Fluviais</span>
        <h2>3. Por que as primeiras civilizações surgiram em vales de rios?</h2>
        <p>
          As quatro primeiras grandes civilizações da história surgiram em vales de grandes
          rios: o <strong>Egito</strong> no vale do Nilo; a <strong>Mesopotâmia</strong> entre
          o Tigre e o Eufrates; o <strong>Vale do Indo</strong> (Harappá e Mohenjo-daro) no
          atual Paquistão; e a <strong>China</strong> nos rios Amarelo e Yangtzé. Essa
          coincidência não é acidental: os grandes rios proporcionavam um conjunto único
          de condições para o florescimento civilizacional.
        </p>
        <p>
          Os rios tropicais e subtropicais tinham cheias regulares que depositavam sedimentos
          férteis nas planícies adjacentes, criando solos <strong>excepcionalmente produtivos</strong>
          sem necessidade de fertilizantes. A <strong>irrigação</strong> — canalização da
          água dos rios para os campos — permitiu agricultura em regiões áridas, ampliando
          enormemente a produtividade. A <strong>água para consumo</strong> humano e animal
          era abundante. As <strong>rotas de comércio fluvial</strong> facilitavam a circulação
          de pessoas, mercadorias e ideias.
        </p>
        <p>
          A irrigação, no entanto, exigia <strong>organização coletiva</strong>: a construção
          e manutenção de canais, diques e reservatórios demandava trabalho de muitas pessoas
          coordenadas. Esse requisito técnico-social pode ter sido um dos motores do surgimento
          do Estado: era necessária uma autoridade central para organizar o trabalho coletivo
          de irrigação. O historiador Karl Wittfogel desenvolveu essa hipótese no conceito
          de "despotismo oriental" — a ideia de que o controle da água gerou Estados
          autoritários nas civilizações fluviais. Embora criticado, esse conceito aponta para
          a relação fundamental entre gestão hídrica e poder político.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Civilização</th>
                <th>Rio(s)</th>
                <th>Região Atual</th>
                <th>Período de Florescimento</th>
                <th>Contribuição Maior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egito Antigo</td>
                <td>Nilo</td>
                <td>Egito e Sudão</td>
                <td>3.100–30 a.C.</td>
                <td>Pirâmides, escrita hieroglífica, papiro</td>
              </tr>
              <tr>
                <td>Mesopotâmia</td>
                <td>Tigre e Eufrates</td>
                <td>Iraque e Síria</td>
                <td>3.500–539 a.C.</td>
                <td>Escrita cuneiforme, roda, código de leis, matemática</td>
              </tr>
              <tr>
                <td>Vale do Indo</td>
                <td>Indo e Gângares</td>
                <td>Paquistão e Índia</td>
                <td>2.600–1.900 a.C.</td>
                <td>Planejamento urbano, sistema de drenagem, comércio</td>
              </tr>
              <tr>
                <td>China Antiga</td>
                <td>Amarelo e Yangtzé</td>
                <td>China</td>
                <td>2.100 a.C. em diante</td>
                <td>Escrita, seda, porcelana, papel, bússola</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">O Surgimento do Estado</span>
        <h2>4. O Estado: a grande inovação política da Antiguidade</h2>
        <p>
          O <strong>Estado</strong> é a forma de organização política que surgiu com as primeiras
          civilizações e que, em suas várias formas, permanece até hoje como estrutura fundamental
          da vida política. Em sua forma mais básica, o Estado é uma instituição que detém
          o <strong>monopólio legítimo da violência</strong> sobre um território — na formulação
          clássica do sociólogo Max Weber —, ou seja, apenas o Estado tem o direito de usar
          a força coercitiva para impor regras sobre todos.
        </p>
        <p>
          Nas primeiras civilizações, o Estado surgiu em estreita associação com a
          <strong> religião</strong>: os primeiros governantes eram frequentemente figuras
          divinas ou intermediários entre os deuses e os humanos. No Egito, o faraó era
          considerado um deus vivo. Na Mesopotâmia, os reis governavam em nome dos deuses
          e os grandes templos (zigurates) eram também centros administrativos e econômicos.
          Essa fusão entre poder político e poder religioso — o <strong>teocracia</strong> —
          foi a forma dominante de Estado nas primeiras civilizações.
        </p>
        <p>
          O Estado exercia funções fundamentais para a vida das primeiras civilizações:
          (1) <strong>organizar o trabalho coletivo</strong> (irrigação, monumentos, defesa);
          (2) <strong>redistribuir recursos</strong> (armazenar excedente e distribuir em
          períodos de escassez); (3) <strong>regular o comércio</strong> e os pesos e medidas;
          (4) <strong>defender o território</strong> de invasores; (5) <strong>estabelecer
          leis</strong> e resolver conflitos entre pessoas; (6) <strong>cobrar impostos</strong>
          para sustentar a burocracia, o exército e as obras públicas.
        </p>

        <div className="lesson-highlight">
          <h3>O Código de Hamurabi: a primeira lei escrita</h3>
          <p>
            O Código de Hamurabi (c. 1.750 a.C.), rei da Babilônia, é o conjunto de leis
            mais antigo do mundo. Gravado em uma estela de basalto negra de 2,25 metros,
            contém 282 leis regulando desde o comércio e o casamento até crimes e propriedade.
            O princípio de "olho por olho, dente por dente" (lei de talião) é uma de suas
            formulações. Embora o código consagre desigualdades de classe e gênero, representa
            um avanço histórico: substituir a vingança arbitrária por punições reguladas
            e previsíveis por uma autoridade pública.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Escrita e Sociedade</span>
        <h2>5. A invenção da escrita e suas consequências</h2>
        <p>
          A <strong>escrita</strong> é uma das invenções mais transformadoras da história
          humana. Surgiu de forma independente em pelo menos três regiões: na Mesopotâmia
          (escrita cuneiforme suméria, por volta de 3.500 a.C.), no Egito (hieroglífos,
          c. 3.100 a.C.) e na China (c. 1.200 a.C.). A escrita maia e asteca nas Américas
          também foi desenvolvida de forma independente.
        </p>
        <p>
          A escrita surgiu primariamente como <strong>ferramenta administrativa</strong>:
          para registrar estoques de alimentos, transações comerciais e tributos.
          As primeiras tabuletas cuneiformes sumérias são listas de mercadorias —
          "tantos potes de cevada", "tantas ovelhas" — não poesia épica. A capacidade
          de registrar e transmitir informações de forma confiável ao longo do tempo e
          do espaço permitiu a administração de territórios muito maiores e mais complexos.
        </p>
        <p>
          Com o tempo, a escrita expandiu-se para usos religiosos (mitos, orações, rituais),
          jurídicos (leis, contratos), literários (o <em>Épico de Gilgamesh</em>, de
          c. 2.100 a.C., é a narrativa literária mais antiga do mundo) e científicos
          (astronomia, matemática, medicina). A escrita criou a possibilidade da
          <strong> acumulação cultural</strong>: cada geração podia registrar e transmitir
          o conhecimento para as próximas, sem depender exclusivamente da memória oral.
        </p>
        <p>
          É crucial, contudo, não confundir a ausência de escrita com a ausência de história
          ou de sofisticação cultural. Povos sem escrita — como os incas, que usavam o
          <em> quipu</em> (nós em cordas) como sistema de registro, ou os povos africanos
          com tradições orais preservadas pelos griots — tinham formas alternativas
          igualmente sofisticadas de registro e transmissão cultural.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema de Escrita</th>
                <th>Civilização</th>
                <th>Período</th>
                <th>Suporte material</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cuneiforme</td>
                <td>Sumérios (Mesopotâmia)</td>
                <td>c. 3.500 a.C.</td>
                <td>Tabuletas de argila</td>
              </tr>
              <tr>
                <td>Hieroglífico</td>
                <td>Egito Antigo</td>
                <td>c. 3.100 a.C.</td>
                <td>Papiro, pedra, paredes de templos</td>
              </tr>
              <tr>
                <td>Proto-sinaítico (origem do alfabeto)</td>
                <td>Fenícios</td>
                <td>c. 1.500 a.C.</td>
                <td>Pedra e materiais variados</td>
              </tr>
              <tr>
                <td>Escrita chinesa</td>
                <td>China (Shang)</td>
                <td>c. 1.200 a.C.</td>
                <td>Ossos de oráculo, bronze</td>
              </tr>
              <tr>
                <td>Glifos maias</td>
                <td>Civilização Maia</td>
                <td>c. 300 a.C.</td>
                <td>Estelas de pedra, codices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Estratificação Social</span>
        <h2>6. A estratificação social nas primeiras civilizações</h2>
        <p>
          Uma das características definidoras das primeiras civilizações foi a
          <strong> estratificação social</strong> — a divisão da sociedade em grupos
          com diferentes níveis de riqueza, poder e prestígio. Embora embrionária nas
          sociedades neolíticas, a estratificação se aprofundou e formalizou nas civilizações
          urbanas, criando verdadeiras hierarquias de classes.
        </p>
        <p>
          No topo da pirâmide social estavam os governantes (faraós, reis, imperadores) e,
          frequentemente, os sacerdotes — que controlavam os templos e, com eles, vastos
          recursos econômicos e o poder de intermediar entre os deuses e os humanos.
          Em seguida vinham os guerreiros e militares, que protegiam a ordem e expandiam
          o território. Os comerciantes e artesãos especializados ocupavam uma posição
          intermediária. A grande maioria da população eram <strong>camponeses</strong>
          — agricultores que pagavam tributos ao Estado e às classes dominantes em troca
          de proteção e direitos de uso da terra.
        </p>
        <p>
          Na base da pirâmide estavam os <strong>escravizados</strong> — prisioneiros de
          guerra, devedores insolventes, pessoas punidas por crimes — que realizavam o
          trabalho mais pesado sem qualquer remuneração ou direitos. A escravidão nas
          civilizações antigas diferia em importantes aspectos da escravidão colonial
          moderna: era menos racializada, tinha mais mobilidade (um escravo podia ser
          liberto, tornar-se comerciante ou artesão) e era mais difusa nas várias
          camadas sociais. Contudo, representava igualmente uma forma brutal de
          exploração e desumanização.
        </p>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Civilizações Americanas</span>
        <h2>7. As primeiras civilizações nas Américas: diversidade e sofisticação</h2>
        <p>
          As primeiras civilizações não foram monopólio do Oriente Médio e da Ásia. Nas
          Américas, civilizações igualmente sofisticadas surgiram de forma independente,
          sem qualquer contato com o "mundo antigo" até 1492. A <strong>civilização
          olmeca</strong> no México (1.500–400 a.C.) criou esculturas monumentais (as
          famosas "cabeças olmecas"), sistemas de escrita embrionários e padrões
          urbanísticos. A <strong>civilização de Caral</strong>, no Peru, é contemporânea
          das pirâmides egípcias (c. 2.600 a.C.) e é considerada a civilização mais
          antiga das Américas.
        </p>
        <p>
          Essas civilizações demonstram um princípio fundamental da história humana:
          a capacidade de criar organizações sociais complexas, monumentos, escrita
          e Estado é uma característica universal do <em>Homo sapiens</em>, não um
          privilégio de uma civilização ou região específica. O desenvolvimento
          independente de civilizações em múltiplos pontos do globo contradiz qualquer
          teoria de que a complexidade cultural foi "inventada" por um único povo
          e depois "difundida" aos demais.
        </p>
        <p>
          Para o ENEM, reconhecer a sofisticação das civilizações pré-colombianas é
          fundamental: os astecas, maias e incas eram civilizações com cidades imponentes,
          astronomia precisa, matemática avançada, medicina sofisticada e formas complexas
          de organização política — não "selvagens" que precisavam ser "civilizados"
          pelos europeus. Esse é um dos pontos mais recorrentes na agenda crítica
          do ENEM em relação ao colonialismo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Civilização</th>
                <th>Região</th>
                <th>Período</th>
                <th>Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Olmeca</td>
                <td>México (litoral do Golfo)</td>
                <td>1.500–400 a.C.</td>
                <td>Esculturas monumentais, influência sobre povos posteriores</td>
              </tr>
              <tr>
                <td>Caral</td>
                <td>Peru (vale de Supe)</td>
                <td>2.600–2.000 a.C.</td>
                <td>Cidade mais antiga das Américas; pirâmides, praças</td>
              </tr>
              <tr>
                <td>Maia</td>
                <td>México, Guatemala, Honduras</td>
                <td>2.000 a.C.–1.500 d.C.</td>
                <td>Astronomia, calendário, escrita, cidades-estado</td>
              </tr>
              <tr>
                <td>Azteca/Mexica</td>
                <td>México central</td>
                <td>1.300–1.521 d.C.</td>
                <td>Tenochtitlan (cidade flutuante), engenharia hidráulica</td>
              </tr>
              <tr>
                <td>Inca</td>
                <td>Andes (do Equador à Argentina)</td>
                <td>1.438–1.533 d.C.</td>
                <td>Maior império pré-colombiano, quipu, Machu Picchu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Comércio e Expansão</span>
        <h2>8. Comércio e redes de intercâmbio nas primeiras civilizações</h2>
        <p>
          As primeiras civilizações não existiam como entidades isoladas — estavam conectadas
          por extensas redes de comércio que circulavam matérias-primas, manufaturados,
          tecnologias e ideias ao longo de vastas distâncias. O comércio foi um motor
          fundamental do desenvolvimento civilizacional: forçou o desenvolvimento de sistemas
          de medidas e escrita (para registrar transações), estimulou inovações tecnológicas
          e criou interdependências entre regiões.
        </p>
        <p>
          A <strong>Rota da Seda</strong> — embora seu apogeu seja posterior, na era imperial
          romana e Han — tem raízes em redes comerciais que datam do segundo milênio a.C.
          No Mediterrâneo, os fenícios (c. 1.500–300 a.C.) foram os grandes comerciantes
          e colonizadores da Antiguidade, espalhando mercadorias, tecnologias (incluindo
          o alfabeto) e culturas por todo o Mediterrâneo. O comércio mesopotâmico conectava
          o Oriente Médio ao Indo e à Anatólia já em 3.000 a.C.
        </p>
        <p>
          Para o ENEM, o tema do comércio na Antiguidade conecta-se com questões mais amplas
          sobre globalização, interdependência econômica e transferência cultural — e permite
          traçar paralelos entre as redes comerciais antigas e a globalização contemporânea.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade Antiga</span>
        <h2>9. Colapso civilizacional e limites ecológicos</h2>
        <p>
          Um tema fascinante e relevante para o presente é o colapso de várias civilizações
          antigas. A civilização do Vale do Indo desapareceu por volta de 1.900 a.C.;
          as cidades maias do período Clássico foram abandonadas entre os séculos IX e X d.C.;
          o chamado "Colapso da Idade do Bronze" (c. 1.200 a.C.) destruiu simultaneamente
          vários impérios do Mediterrâneo Oriental. Esses colapsos tiveram múltiplas causas:
          mudanças climáticas, esgotamento dos solos, conflitos internos, invasões externas.
        </p>
        <p>
          O colapso maia é particularmente estudado: evidências arqueológicas e dendrocronológicas
          (estudo de anéis de árvores) mostram secas prolongadas coincidindo com o abandono
          das cidades. Mas a seca não atingiu todas as regiões da mesma forma — o colapso
          foi mais severo nas regiões onde o desmatamento para agricultura e construção de
          templos havia degradado o solo. Essa articulação entre decisões humanas e limites
          ecológicos é uma lição histórica diretamente relevante para os debates contemporâneos
          sobre sustentabilidade e mudança climática.
        </p>
      </section>

      {/* ===== SEÇÃO 10 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. A Revolução Agrícola e suas consequências"
          statement={
            <p>
              A Revolução Agrícola, iniciada por volta de 10.000 a.C. no Crescente Fértil,
              transformou profundamente as formas de vida das comunidades humanas. Sobre
              as consequências dessa revolução, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A agricultura manteve o nomadismo como forma de vida dominante, pois os agricultores precisavam seguir as chuvas para cultivar a terra." },
            { letter: "b", text: "O surgimento da agricultura eliminou imediatamente as desigualdades sociais, pois todos tinham acesso igualitário à produção de alimentos." },
            { letter: "c", text: "A produção de excedente alimentar possibilitou a especialização do trabalho, o crescimento populacional e as bases para a formação de hierarquias sociais e do Estado.", correct: true },
            { letter: "d", text: "A agricultura surgiu simultaneamente em todo o planeta, como consequência de uma mutação cultural global ocorrida ao final da última era glacial." },
            { letter: "e", text: "A Revolução Agrícola foi um processo exclusivo do Oriente Médio, de onde se difundiu para todas as outras regiões do globo." },
          ]}
          resolution={
            <p>
              A cadeia de consequências da agricultura é fundamental: excedente alimentar →
              nem todos precisam cultivar → especialização do trabalho → sacerdotes, guerreiros,
              artesãos, comerciantes → hierarquias sociais → acumulação de riqueza → Estado.
              Sem excedente, não há especialização; sem especialização, não há hierarquia
              complexa. A alternativa A está errada porque a agricultura promoveu a sedentarização.
              B está errada porque gerou desigualdades. D está errada porque ocorreu em
              diferentes momentos em cada região. E está errada porque foi um processo
              policêntrico (México, China, Amazônia também desenvolveram agricultura
              independentemente).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Por que as civilizações surgiram em vales de rios"
          statement={
            <div>
              <p>
                "Todas as primeiras grandes civilizações — egípcia, mesopotâmica, do Vale do
                Indo e chinesa — surgiram em planícies aluviais de grandes rios. Essa coincidência
                geográfica não pode ser casualidade: os rios proporcionavam condições únicas
                para o florescimento de sociedades complexas."
              </p>
              <p>
                Além da fertilidade natural dos solos das planícies aluviais, qual outra
                característica dos grandes rios foi fundamental para o surgimento do Estado
                nas primeiras civilizações?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A pesca abundante nos rios garantia alimento suficiente sem necessidade de agricultura, dispensando o Estado como organizador da produção." },
            { letter: "b", text: "A necessidade de organização coletiva para construção e manutenção de sistemas de irrigação exigiu formas de coordenação e autoridade central que favoreceram o surgimento do Estado.", correct: true },
            { letter: "c", text: "Os rios funcionavam como fronteiras naturais que impediam as guerras entre comunidades, permitindo o desenvolvimento pacífico das civilizações." },
            { letter: "d", text: "Os rios proporcionavam transporte rápido que permitia o nomadismo das populações sem necessidade de se fixarem nas margens." },
            { letter: "e", text: "A regularidade das cheias dos rios eliminava a necessidade de especialização do trabalho, pois o alimento estava sempre disponível para todos igualmente." },
          ]}
          resolution={
            <p>
              A hipótese do "despotismo hidráulico" (Wittfogel) aponta para um nexo
              fundamental: a irrigação em grande escala exigia trabalho coletivo organizado,
              o que favorecia o surgimento de autoridades centrais com poder de mobilizar
              e coordenar a população. Um pequeno grupo de famílias podia construir um canal
              pequeno, mas canais que irrigavam milhares de hectares exigiam o trabalho de
              muitos durante anos, e alguém precisava coordenar, decidir prioridades e
              garantir a manutenção. Essa necessidade funcional de organização centralizada
              é uma das razões pelas quais as primeiras civilizações fluviais desenvolveram
              formas sofisticadas de Estado.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Civilizações americanas e o mito do atraso"
          statement={
            <div>
              <p>
                Tenochtitlan, capital do Império Azteca, tinha uma população estimada entre
                200.000 e 300.000 habitantes em 1519 — o que a tornava uma das maiores cidades
                do mundo à época, comparável a Pequim e maior do que qualquer cidade da Europa
                Ocidental. Possuía mercados organizados, aquedutos de água potável, sistema de
                saneamento, jardins flutuantes (chinampas) e uma corte sofisticada.
              </p>
              <p>
                Considerando esses dados históricos, a narrativa colonial que apresentava os
                povos americanos como "selvagens sem civilização" que precisavam ser "pacificados"
                pelos europeus pode ser caracterizada como:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Uma afirmação historicamente precisa, pois os aztecas praticavam sacrifícios humanos, o que os caracteriza como 'bárbaros' independentemente de outras realizações." },
            { letter: "b", text: "Uma avaliação neutra e objetiva feita pelos colonizadores com base em diferenças culturais observáveis." },
            { letter: "c", text: "Uma ideologia etnocêntrica que distorcia a realidade das civilizações americanas para justificar politicamente a conquista e a escravização de povos que possuíam organizações sociais e culturais altamente sofisticadas.", correct: true },
            { letter: "d", text: "Uma interpretação válida para os astecas, mas não para os maias, que eram claramente mais avançados do ponto de vista cultural." },
            { letter: "e", text: "Uma generalização que, embora injusta para os aztecas, era adequada para descrever a maioria dos outros povos indígenas das Américas." },
          ]}
          resolution={
            <p>
              O exemplo de Tenochtitlan demonstra empiricamente que a narrativa colonial
              de "civilizar os selvagens" era uma ideologia — não uma descrição da realidade.
              Uma cidade de 300.000 habitantes com infraestrutura hidráulica, mercados
              organizados e alta cultura não pode ser classificada como "sem civilização"
              por nenhum critério objetivo. A narrativa colonial foi construída para legitimar
              a conquista e o genocídio: se os povos americanos eram "bárbaros sem lei",
              a conquista tornava-se uma missão civilizatória benéfica, ocultando sua
              dimensão de violência, pilhagem e escravização. Reconhecer essa distorção
              ideológica é uma das habilidades centrais cobradas pelo ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Colapso maia e sustentabilidade"
          statement={
            <div>
              <p>
                Pesquisadores estimam que as grandes cidades maias do período Clássico
                (250–900 d.C.) foram progressivamente abandonadas entre os séculos IX e X.
                Estudos de sedimentos de lagos mostram que esse colapso coincidiu com
                secas prolongadas, agravadas pelo desmatamento massivo para expansão
                agrícola e extração de madeira para construção de templos e aquecimento
                do calcário usado nas construções.
              </p>
              <p>
                Considerando as informações acima, qual conclusão histórica é mais
                adequada sobre o colapso maia?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O colapso maia prova que civilizações indígenas americanas eram estruturalmente frágeis e dependiam de intervenção externa para sobreviver." },
            { letter: "b", text: "A seca foi a única causa do colapso maia, demonstrando que civilizações são sempre vulneráveis a fatores climáticos incontroláveis." },
            { letter: "c", text: "O colapso maia resultou da interação entre fatores climáticos (secas) e decisões humanas (desmatamento), ilustrando como a degradação ambiental pode ampliar vulnerabilidades e contribuir para o colapso de civilizações complexas.", correct: true },
            { letter: "d", text: "O colapso maia demonstra que a agricultura não era sustentável nas Américas, ao contrário da agricultura desenvolvida no Oriente Médio." },
            { letter: "e", text: "O desmatamento maia foi positivo, pois permitiu a expansão da agricultura necessária para alimentar uma população crescente." },
          ]}
          resolution={
            <p>
              O colapso maia é um caso histórico fascinante de interação entre fatores
              naturais e humanos: a seca teria sido suportável com florestas intactas
              (que regulam o ciclo hidrológico e protegem o solo), mas o desmatamento
              massivo para construção e agricultura amplificou drasticamente seus efeitos.
              Isso não é uma crítica anacrônica aos maias — é uma análise de como a
              pressão sobre os recursos naturais pode criar vulnerabilidades cumulativas.
              A relevância contemporânea é óbvia: as crises climáticas do século XXI têm
              uma dinâmica similar, com atividades humanas amplificando variabilidades
              naturais. O ENEM frequentemente conecta colapsos históricos com debates
              contemporâneos sobre sustentabilidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Escrita, poder e acesso ao conhecimento"
          statement={
            <div>
              <p>
                Nas primeiras civilizações mesopotâmicas e egípcias, a escrita era dominada
                por uma classe especializada de <em>escribas</em> — profissionais treinados
                durante anos para dominar sistemas de escrita complexos. O analfabetismo
                era norma entre a população em geral, incluindo muitos governantes, que
                dependiam de escribas para ler e escrever documentos.
              </p>
              <p>
                Essa estrutura do acesso à escrita nas primeiras civilizações revela que:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A escrita foi inventada para democratizar o acesso ao conhecimento e permitir que todos os cidadãos participassem da administração pública." },
            { letter: "b", text: "O controle da escrita era uma forma de poder social e político: quem dominava a escrita controlava o registro das leis, dos contratos, das propriedades e das narrativas históricas, constituindo-se numa elite do conhecimento.", correct: true },
            { letter: "c", text: "O analfabetismo generalizado nas primeiras civilizações indica que a escrita não era relevante para a vida cotidiana da maioria das pessoas." },
            { letter: "d", text: "A complexidade dos sistemas de escrita antigos demonstra que eram superiores aos sistemas alfabéticos modernos em termos de expressividade." },
            { letter: "e", text: "A classe dos escribas era essencialmente democrática, pois qualquer pessoa poderia se tornar escriba mediante esforço e dedicação, independentemente de sua origem social." },
          ]}
          resolution={
            <p>
              O controle da escrita foi historicamente uma forma de poder. Quem sabia ler
              e escrever controlava o registro das leis (e, portanto, sua interpretação),
              os contratos (e as obrigações deles decorrentes), as narrativas históricas
              e religiosas (e, portanto, a legitimação do poder). A classe dos escribas
              era uma elite do conhecimento que servia ao poder e, ao mesmo tempo, era
              indispensável para ele. Esse tema tem alta relevância para o ENEM porque
              conecta o passado com debates contemporâneos sobre analfabetismo, acesso
              ao conhecimento, poder e democracia: mesmo hoje, quem domina certas
              linguagens (jurídica, econômica, tecnológica) tem vantagens enormes
              nos sistemas de poder.
            </p>
          }
        />
      </section>
    </article>
  );
}
