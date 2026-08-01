"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 3</span>
          <h1>Pré-História: Paleolítico, Neolítico e Idade dos Metais</h1>
          <p>
            A Pré-História abrange o período que vai do surgimento do Homo sapiens, há
            aproximadamente 200.000 anos, até a invenção da escrita, por volta de 3.500 a.C.
            Longe de ser um tempo de "selvagens sem história", a Pré-História é o período em
            que a espécie humana realizou algumas de suas maiores conquistas: dominou o fogo,
            inventou ferramentas, desenvolveu a linguagem, criou arte, domesticou plantas e
            animais, formou comunidades sedentárias e deu os primeiros passos em direção à
            vida urbana. Neste capítulo, exploraremos as três grandes fases do período:
            Paleolítico, Neolítico e Idade dos Metais, com especial atenção à Pré-História
            brasileira e aos sítios arqueológicos do território nacional.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Surgimento Humano</span>
        <h2>1. O Homo sapiens e as migrações pelo planeta</h2>
        <p>
          O <em>Homo sapiens</em> surgiu na África há aproximadamente 200.000 a 300.000 anos.
          As evidências mais antigas conhecidas foram encontradas em Jebel Irhoud, no Marrocos
          (315.000 anos), e na Etiópia (195.000 anos). Isso confirma a <strong>origem africana
          da humanidade</strong> — um dado científico fundamental que o ENEM frequentemente
          mobiliza em questões sobre diversidade humana e crítica ao racismo.
        </p>
        <p>
          A partir do continente africano, o <em>Homo sapiens</em> realizou migrações em ondas
          ao longo de dezenas de milhares de anos. Há aproximadamente 70.000 anos, grupos
          começaram a sair da África em direção à Ásia e à Europa. A chegada à Austrália ocorreu
          por volta de 50.000 a.P., e às Américas entre 25.000 e 12.000 a.P., cruzando pelo
          Estreito de Bering — que estava exposto durante a última era glacial, quando o nível
          do mar era muito mais baixo.
        </p>
        <p>
          Antes do <em>Homo sapiens</em>, outros hominídeos já habitavam o planeta: o
          <em> Homo erectus</em>, que surgiu na África há 1,9 milhões de anos e se espalhou
          pela Ásia e Europa, e o <em>Homo neanderthalensis</em>, que habitou a Europa e o
          Oriente Médio até cerca de 40.000 a.P. Evidências de DNA mostram que o <em>Homo
          sapiens</em> se cruzou com os neandertais — populações não africanas carregam
          1-4% de DNA neandertal. O encontro e eventual desaparecimento dos neandertais
          é um dos grandes debates da paleoantropologia contemporânea.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Mapa esquemático das migrações humanas pelo planeta">
            <rect x="0" y="0" width="720" height="200" fill="#e8f4f8" rx="8"/>
            <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Migrações do Homo sapiens (esquema simplificado)</text>

            {/* África */}
            <ellipse cx="320" cy="110" rx="55" ry="65" fill="#c8e6c9" stroke="#388e3c" strokeWidth="2"/>
            <text x="320" y="107" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b5e20">ÁFRICA</text>
            <text x="320" y="122" textAnchor="middle" fontSize="9" fill="#2e7d32">Origem</text>
            <text x="320" y="134" textAnchor="middle" fontSize="9" fill="#2e7d32">~200–315 ka</text>

            {/* Europa */}
            <ellipse cx="340" cy="42" rx="38" ry="25" fill="#bbdefb" stroke="#1565c0" strokeWidth="1.5"/>
            <text x="340" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0d47a1">EUROPA</text>
            <text x="340" y="53" textAnchor="middle" fontSize="8" fill="#1565c0">~45 ka</text>
            <line x1="340" y1="67" x2="335" y2="85" stroke="#1565c0" strokeWidth="1.5" strokeDasharray="4,2"/>

            {/* Ásia */}
            <ellipse cx="500" cy="75" rx="55" ry="40" fill="#ffe0b2" stroke="#e65100" strokeWidth="1.5"/>
            <text x="500" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#bf360c">ÁSIA</text>
            <text x="500" y="86" textAnchor="middle" fontSize="8" fill="#e65100">~70 ka</text>
            <line x1="440" y1="100" x2="470" y2="88" stroke="#e65100" strokeWidth="1.5" strokeDasharray="4,2"/>

            {/* Austrália */}
            <ellipse cx="600" cy="145" rx="45" ry="28" fill="#f3e5f5" stroke="#6a1b9a" strokeWidth="1.5"/>
            <text x="600" y="142" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4a148c">AUSTRÁLIA</text>
            <text x="600" y="156" textAnchor="middle" fontSize="8" fill="#6a1b9a">~50 ka</text>
            <line x1="548" y1="95" x2="578" y2="128" stroke="#6a1b9a" strokeWidth="1.5" strokeDasharray="4,2"/>

            {/* Américas */}
            <ellipse cx="130" cy="115" rx="48" ry="55" fill="#fff9c4" stroke="#f57f17" strokeWidth="1.5"/>
            <text x="130" y="108" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e65100">AMÉRICAS</text>
            <text x="130" y="122" textAnchor="middle" fontSize="8" fill="#f57f17">~25–12 ka</text>
            <text x="130" y="134" textAnchor="middle" fontSize="8" fill="#f57f17">(via Bering)</text>
            {/* Seta Ásia->Américas */}
            <path d="M445 65 Q360 20 178 80" stroke="#f57f17" strokeWidth="1.5" strokeDasharray="5,3" fill="none"/>
            <polygon points="178,80 172,72 184,72" fill="#f57f17"/>

            <text x="360" y="192" textAnchor="middle" fontSize="9" fill="#555">ka = milhares de anos atrás | Setas indicam rotas de migração (simplificadas)</text>
          </svg>
          <figcaption>Esquema simplificado das principais rotas de migração do Homo sapiens a partir da África ao longo de dezenas de milhares de anos.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Paleolítico</span>
        <h2>2. Paleolítico: a era das pedras lascadas e da vida nômade</h2>
        <p>
          O <strong>Paleolítico</strong> (do grego <em>palaios</em> = antigo + <em>lithos</em>
          = pedra) é o período mais longo da Pré-História, estendendo-se de aproximadamente
          2,5 milhões de anos atrás (surgimento das primeiras ferramentas de pedra lascada)
          até cerca de 12.000 a.P. (início da agricultura). É durante o Paleolítico que os
          hominídeos — e posteriormente o <em>Homo sapiens</em> — desenvolvem os fundamentos
          da vida humana.
        </p>
        <p>
          As sociedades paleolíticas eram fundamentalmente <strong>nômades</strong>: se deslocavam
          em busca de recursos — caça, pesca e coleta de frutos, raízes e outros alimentos
          vegetais. Viviam em pequenos grupos de 20 a 60 pessoas, geralmente organizados
          em torno de laços familiares. Essa escala pequena de vida social era adequada à
          disponibilidade de recursos: grupos maiores esgotariam rapidamente os alimentos
          de uma área.
        </p>
        <p>
          O <strong>domínio do fogo</strong> é uma das conquistas mais transformadoras do
          Paleolítico. O fogo permitiu: cozinhar alimentos (aumentando o valor nutricional
          e reduzindo doenças), iluminar e aquecer abrigos, afugentar predadores e criar
          um ponto de encontro social que favoreceu o desenvolvimento da linguagem e da
          vida comunitária. As evidências mais antigas de uso intencional do fogo pelos
          humanos datam de aproximadamente 1 milhão de anos atrás, no sítio de Wonderwerk,
          na África do Sul.
        </p>
        <p>
          As <strong>ferramentas de pedra lascada</strong> são o principal marcador arqueológico
          do Paleolítico. Ao longo do período, as técnicas de fabricação foram se sofisticando:
          do simples lascamento para criar bordas cortantes até o desenvolvimento de pontas
          de projétil cuidadosamente trabalhadas. As ferramentas revelam tanto a inteligência
          técnica dos hominídeos quanto as condições ambientais e os recursos disponíveis.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Paleolítico</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modo de vida</td>
                <td>Nomadismo</td>
                <td>Deslocamento constante em busca de alimentos</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td>Caça, pesca e coleta</td>
                <td>Dependência total do ambiente natural; sem cultivo</td>
              </tr>
              <tr>
                <td>Organização social</td>
                <td>Bandos familiares</td>
                <td>20–60 pessoas; relações baseadas em parentesco e cooperação</td>
              </tr>
              <tr>
                <td>Tecnologia</td>
                <td>Pedra lascada</td>
                <td>Facas, raspadores, pontas de projétil; osso e madeira</td>
              </tr>
              <tr>
                <td>Habitação</td>
                <td>Cavernas e tendas</td>
                <td>Uso de abrigos naturais; estruturas temporárias</td>
              </tr>
              <tr>
                <td>Expressão cultural</td>
                <td>Arte rupestre</td>
                <td>Pinturas em cavernas; estatuetas; instrumentos musicais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Arte Rupestre</span>
        <h2>3. Arte rupestre: as primeiras expressões simbólicas humanas</h2>
        <p>
          A arte rupestre paleolítica é uma das manifestações mais extraordinárias da
          inteligência humana: a capacidade de representar simbolicamente o mundo, de criar
          imagens que transcendem a realidade imediata. As pinturas nas cavernas não são
          decoração ingênua — são evidências de vida espiritual, ritual e comunicação
          simbólica sofisticada.
        </p>
        <p>
          As cavernas de <strong>Lascaux</strong>, na França (descobertas em 1940, datadas
          de aproximadamente 17.000 anos atrás), e de <strong>Altamira</strong>, na Espanha
          (30.000 anos), são os sítios mais famosos de arte rupestre europeia. Nelas, artistas
          paleolíticos representaram com surpreendente realismo bisões, cavalos, renas, auroque
          e outros animais da megafauna europeia do Pleistoceno. As pinturas utilizavam pigmentos
          minerais — ocre vermelho e amarelo, dióxido de manganês negro — e técnicas que
          aproveitavam as formas naturais das rochas para criar ilusão de volume e movimento.
        </p>
        <p>
          No Brasil, o sítio mais importante é o <strong>Parque Nacional Serra da Capivara</strong>,
          no Piauí — Patrimônio Mundial da Humanidade pela UNESCO desde 1991. O sítio contém
          mais de 1.000 sítios arqueológicos com pinturas rupestres datadas de até 25.000 anos
          atrás, tornando-o um dos mais antigos das Américas. As pinturas da Serra da Capivara
          representam humanos (em dança, caça, sexo, lutas), animais (veados, antas, emas,
          capivaras, felinos) e figuras geométricas e abstratas. Pesquisas da arqueóloga
          Niède Guidon sugeriram que o sítio teria sido habitado há até 100.000 anos — uma
          hipótese controversa que desafiaria o modelo de entrada humana pelas Américas apenas
          pelo Estreito de Bering.
        </p>

        <div className="lesson-highlight">
          <h3>A arte rupestre como fonte histórica</h3>
          <p>
            As pinturas rupestres são fontes históricas de tipo iconográfico-arqueológico.
            Elas revelam: a fauna do período (extinções), práticas de caça e sobrevivência,
            vida ritual e espiritual, organização social e comunicação simbólica. Para o ENEM,
            a arte rupestre é evidência de que as sociedades pré-históricas tinham vida
            cultural rica e complexa — contradizendo a visão simplista de "primitivos sem cultura".
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Neolítico</span>
        <h2>4. A Revolução Neolítica: agricultura, sedentarização e novas formas sociais</h2>
        <p>
          O <strong>Neolítico</strong> ("nova pedra") é marcado por uma transformação tão
          profunda que o historiador Gordon Childe a chamou de <strong>"Revolução Neolítica"</strong>:
          a invenção da agricultura e a consequente sedentarização das sociedades humanas.
          Esse processo ocorreu de forma independente em diversas regiões do globo entre
          12.000 e 5.000 a.P.: no Crescente Fértil (Oriente Médio), na China, no México
          e na Amazônia brasileira.
        </p>
        <p>
          A domesticação de plantas — que permitiu o cultivo intencional de cereais (trigo,
          cevada, arroz, milho), leguminosas e outros alimentos — e de animais (ovelhas,
          cabras, porcos, bovinos) transformou radicalmente a relação da humanidade com a
          natureza. Em vez de depender do que o ambiente oferecia espontaneamente, as
          comunidades passaram a <strong>produzir ativamente</strong> seu alimento.
        </p>
        <p>
          A sedentarização gerou consequências sociais de longo alcance: (1) crescimento
          populacional, pois a disponibilidade de alimento aumentou; (2) formação de
          <strong>aldeias permanentes</strong>, com estruturas habitacionais mais elaboradas;
          (3) <strong>divisão social do trabalho</strong> — nem todos precisavam mais caçar
          ou coletar, liberando alguns para cerâmica, tecelagem, comércio e funções rituais;
          (4) surgimento de <strong>desigualdades sociais</strong>, pois o acúmulo de excedente
          alimentar criou diferenças de riqueza e poder entre famílias e grupos.
        </p>
        <p>
          O <strong>pastoreio</strong> (criação de animais) se desenvolveu em paralelo com
          a agricultura. As sociedades pastorais nômades (que seguiam rebanhos em migrações
          sazonais) coexistiram com as sociedades agrícolas sedentárias, e a tensão entre
          elas é um tema recorrente nas fontes históricas antigas — como na narrativa bíblica
          de Caim (agricultor) e Abel (pastor).
        </p>
        <p>
          A <strong>cerâmica</strong> é uma das grandes inovações tecnológicas do Neolítico:
          permitiu armazenar alimentos e líquidos, cozinhar de forma mais eficiente e
          transportar mercadorias. A <strong>tecelagem</strong> permitiu a produção de
          tecidos para vestimenta e trocas comerciais. O surgimento do <strong>comércio</strong>
          e da <strong>troca</strong> entre comunidades com diferentes especializações
          produtivas é outro marco do Neolítico.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Antes (Paleolítico)</th>
                <th>Depois (Neolítico)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modo de vida</td>
                <td>Nomadismo</td>
                <td>Sedentarismo (aldeias permanentes)</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td>Caça, pesca, coleta</td>
                <td>Agricultura e pastoreio; produção intencional</td>
              </tr>
              <tr>
                <td>Organização social</td>
                <td>Grupos igualitários</td>
                <td>Hierarquias sociais; especialização do trabalho</td>
              </tr>
              <tr>
                <td>Tecnologia</td>
                <td>Pedra lascada</td>
                <td>Pedra polida, cerâmica, tecelagem</td>
              </tr>
              <tr>
                <td>Habitação</td>
                <td>Cavernas e tendas temporárias</td>
                <td>Casas de barro, madeira ou pedra em aldeias</td>
              </tr>
              <tr>
                <td>Excedente</td>
                <td>Inexistente</td>
                <td>Excedente alimentar → desigualdade → Estado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>5. Cronologia da Pré-História: das origens à escrita</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Linha do tempo da Pré-História">
            <rect x="0" y="0" width="720" height="220" fill="#f8f9fa" rx="8"/>
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Linha do Tempo da Pré-História</text>

            {/* Linha principal */}
            <line x1="40" y1="100" x2="680" y2="100" stroke="#333" strokeWidth="3"/>
            <polygon points="680,96 692,100 680,104" fill="#333"/>

            {/* Ponto 1: Surgimento Homo sapiens */}
            <circle cx="80" cy="100" r="10" fill="#4361ee"/>
            <line x1="80" y1="90" x2="80" y2="55" stroke="#4361ee" strokeWidth="1.5"/>
            <rect x="30" y="30" width="100" height="28" rx="4" fill="#4361ee" opacity="0.1" stroke="#4361ee"/>
            <text x="80" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4361ee">H. sapiens</text>
            <text x="80" y="55" textAnchor="middle" fontSize="8" fill="#333">~200.000 AP</text>
            <text x="80" y="120" textAnchor="middle" fontSize="8" fill="#555">África</text>

            {/* Ponto 2: Arte rupestre */}
            <circle cx="220" cy="100" r="10" fill="#7209b7"/>
            <line x1="220" y1="110" x2="220" y2="150" stroke="#7209b7" strokeWidth="1.5"/>
            <rect x="165" y="150" width="110" height="35" rx="4" fill="#7209b7" opacity="0.1" stroke="#7209b7"/>
            <text x="220" y="164" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7209b7">Arte rupestre</text>
            <text x="220" y="177" textAnchor="middle" fontSize="8" fill="#555">Lascaux ~17.000</text>
            <text x="220" y="85" textAnchor="middle" fontSize="8" fill="#7209b7">PALEOLÍTICO</text>

            {/* Ponto 3: Chegada às Américas */}
            <circle cx="330" cy="100" r="10" fill="#f72585"/>
            <line x1="330" y1="90" x2="330" y2="55" stroke="#f72585" strokeWidth="1.5"/>
            <rect x="272" y="30" width="116" height="28" rx="4" fill="#f72585" opacity="0.1" stroke="#f72585"/>
            <text x="330" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f72585">Chegada</text>
            <text x="330" y="55" textAnchor="middle" fontSize="8" fill="#333">Américas ~15.000</text>

            {/* Ponto 4: Início da agricultura */}
            <circle cx="460" cy="100" r="10" fill="#3a0ca3"/>
            <line x1="460" y1="110" x2="460" y2="150" stroke="#3a0ca3" strokeWidth="1.5"/>
            <rect x="402" y="150" width="116" height="35" rx="4" fill="#3a0ca3" opacity="0.1" stroke="#3a0ca3"/>
            <text x="460" y="164" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3a0ca3">Agricultura</text>
            <text x="460" y="177" textAnchor="middle" fontSize="8" fill="#555">~10.000 a.C.</text>
            <text x="460" y="85" textAnchor="middle" fontSize="8" fill="#3a0ca3">NEOLÍTICO</text>

            {/* Ponto 5: Idade dos Metais */}
            <circle cx="580" cy="100" r="10" fill="#b5179e"/>
            <line x1="580" y1="90" x2="580" y2="55" stroke="#b5179e" strokeWidth="1.5"/>
            <rect x="522" y="30" width="116" height="28" rx="4" fill="#b5179e" opacity="0.1" stroke="#b5179e"/>
            <text x="580" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b5179e">Metais</text>
            <text x="580" y="55" textAnchor="middle" fontSize="8" fill="#333">~4.000 a.C.</text>
            <text x="580" y="85" textAnchor="middle" fontSize="8" fill="#b5179e">ID.METAIS</text>

            {/* Ponto 6: Escrita */}
            <circle cx="670" cy="100" r="10" fill="#480ca8"/>
            <line x1="670" y1="110" x2="670" y2="150" stroke="#480ca8" strokeWidth="1.5"/>
            <rect x="612" y="150" width="100" height="35" rx="4" fill="#480ca8" opacity="0.1" stroke="#480ca8"/>
            <text x="662" y="164" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#480ca8">Escrita</text>
            <text x="662" y="177" textAnchor="middle" fontSize="8" fill="#555">~3.500 a.C.</text>

            <text x="360" y="210" textAnchor="middle" fontSize="9" fill="#777">AP = Anos atrás | a.C. = antes de Cristo | Escala não proporcional</text>
          </svg>
          <figcaption>Linha do tempo simplificada da Pré-História: do surgimento do Homo sapiens na África até a invenção da escrita na Mesopotâmia.</figcaption>
        </figure>

        <p>
          É fundamental notar que a divisão entre Paleolítico, Neolítico e Idade dos Metais
          é uma periodização <strong>ocidental e europeia</strong> que não se aplica de forma
          uniforme a todo o mundo. Diferentes regiões passaram por essas transformações em
          momentos distintos e de formas variadas. A China foi uma das primeiras a desenvolver
          a cerâmica (25.000 a.P.). A Amazônia brasileira desenvolveu práticas agrícolas
          sofisticadas (terra preta) sem necessariamente seguir o padrão europeu de
          periodização. Essa diversidade de percursos é fundamental para resistir a visões
          evolucionistas lineares que colocam a Europa como modelo e as demais regiões como
          "atrasadas".
        </p>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Idade dos Metais</span>
        <h2>6. A Idade dos Metais: cobre, bronze e ferro</h2>
        <p>
          A <strong>Idade dos Metais</strong> começa por volta de 4.000 a.C. com a metalurgia
          do cobre no Oriente Médio e na Europa. O trabalho com metais não substituiu imediatamente
          a pedra, mas abriu possibilidades tecnológicas radicalmente novas: ferramentas mais
          duráveis, mais afiadas e mais versáteis; armas mais eficientes; ornamentos de maior
          prestígio social.
        </p>
        <p>
          A <strong>Idade do Cobre</strong> (Calcolítico) marca o uso inicial do metal puro.
          A <strong>Idade do Bronze</strong> (3.000–1.200 a.C.) resulta da descoberta de
          que misturar cobre e estanho produz uma liga muito mais dura e útil — o bronze.
          O bronze permitiu a fabricação de arados mais eficientes (aumentando a produção
          agrícola), carros de guerra e armamentos superiores. A <strong>Idade do Ferro</strong>
          (1.200 a.C. em diante) introduziu um metal mais abundante e barato que o bronze,
          democratizando o acesso a ferramentas e armas. O ferro transformou a agricultura
          (arados de ferro), a guerra e a construção.
        </p>
        <p>
          As consequências sociais da metalurgia são profundas: (1) o controle das minas
          de cobre, estanho e ferro tornou-se uma fonte de poder político e econômico;
          (2) as rotas comerciais para obtenção de metais criaram redes de longa distância;
          (3) a eficiência das armas de bronze e ferro amplificou conflitos entre grupos e
          estimulou a formação de exércitos profissionais e Estados militarizados;
          (4) as sociedades que dominaram a metalurgia adquiriram vantagem militar sobre
          as que não dominavam, acelerando a hierarquização e a conquista.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Metal</th>
                <th>Data aproximada</th>
                <th>Principais usos</th>
                <th>Impacto social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calcolítico</td>
                <td>Cobre</td>
                <td>4.000–3.000 a.C.</td>
                <td>Ornamentos, ferramentas simples</td>
                <td>Início do prestígio social por objeto metálico</td>
              </tr>
              <tr>
                <td>Idade do Bronze</td>
                <td>Bronze (cobre+estanho)</td>
                <td>3.000–1.200 a.C.</td>
                <td>Armas, arados, esculturas</td>
                <td>Comércio de longa distância; guerras mais destrutivas</td>
              </tr>
              <tr>
                <td>Idade do Ferro</td>
                <td>Ferro</td>
                <td>1.200 a.C. em diante</td>
                <td>Arados, espadas, ferramentas agrícolas</td>
                <td>Democratização das armas; expansão da agricultura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Pré-História do Brasil</span>
        <h2>7. Pré-História brasileira: paleoíndios e sítios arqueológicos</h2>
        <p>
          O Brasil foi habitado muito antes do que os europeus imaginavam ao chegar em 1500.
          Os chamados <strong>paleoíndios</strong> — os primeiros habitantes das Américas —
          chegaram ao território brasileiro há pelo menos 12.000 a 15.000 anos. Esses grupos
          eram caçadores-coletores que se adaptaram a uma enorme diversidade de ambientes:
          cerrado, mata atlântica, amazônia, caatinga e planaltos do sul.
        </p>
        <p>
          O sítio arqueológico mais importante do Brasil — e um dos mais importantes das
          Américas — é o <strong>Parque Nacional Serra da Capivara</strong>, no Piauí.
          Com mais de 30.000 anos de ocupação humana e cerca de 40.000 pinturas rupestres,
          o sítio foi tombado pela UNESCO como Patrimônio da Humanidade. As pinturas mostram
          cenas de caça, rituais, sexo, conflito e vida cotidiana, além de representações
          de animais extintos como a preguiça-gigante (<em>Megatherium</em>) e o gliptodonte.
        </p>
        <p>
          Outro sítio crucial é a <strong>Lagoa Santa</strong>, em Minas Gerais, onde foram
          encontrados os restos humanos mais antigos das Américas: o crânio de "Luzia",
          datado de aproximadamente 11.500 anos. O crânio de Luzia apresenta características
          morfológicas que se assemelham mais a populações africanas e australianas do que
          aos povos mongoloides que teriam cruzado o Estreito de Bering — o que gerou intenso
          debate científico sobre as rotas e cronologia da ocupação das Américas.
        </p>
        <p>
          A <strong>Terra Preta do Índio</strong> na Amazônia é outra evidência extraordinária
          da pré-história brasileira: um solo escuro, extremamente fértil, criado
          artificialmente por populações indígenas amazônicas ao longo de séculos, misturando
          carvão, ossos e restos orgânicos. A existência de terra preta em escala regional
          sugere que a Amazônia pré-colombiana não era uma "floresta virgem" intocada, mas
          um ambiente profundamente transformado por sociedades humanas numerosas e sofisticadas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sítio Arqueológico</th>
                <th>Localização</th>
                <th>Idade aproximada</th>
                <th>Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Serra da Capivara</td>
                <td>Piauí</td>
                <td>25.000–30.000 anos</td>
                <td>Patrimônio da Humanidade; pinturas rupestres mais antigas das Américas</td>
              </tr>
              <tr>
                <td>Lagoa Santa (Luzia)</td>
                <td>Minas Gerais</td>
                <td>~11.500 anos</td>
                <td>Restos humanos mais antigos das Américas; debate sobre rotas migratórias</td>
              </tr>
              <tr>
                <td>Terra Preta do Índio</td>
                <td>Amazônia</td>
                <td>2.000–500 anos</td>
                <td>Evidência de populações amazônicas complexas e manejo ambiental</td>
              </tr>
              <tr>
                <td>Sambaquis</td>
                <td>Litoral (SP, SC, PR)</td>
                <td>5.000–1.000 anos</td>
                <td>Montes de conchas e restos de comunidades pescadoras-coletoras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Desigualdade e Pré-História</span>
        <h2>8. O surgimento das desigualdades sociais na Pré-História</h2>
        <p>
          Uma das perguntas mais importantes da Pré-História é: quando e por que surgiu a
          desigualdade social? As evidências arqueológicas sugerem que as sociedades
          paleolíticas eram relativamente <strong>igualitárias</strong>: como os grupos eram
          nômades e dependiam de cooperação para sobreviver, a acumulação individual de
          riqueza era inviável e indesejável. Líderes existiam, mas o prestígio era baseado
          em habilidades (caça, rituais) e não em propriedade hereditária.
        </p>
        <p>
          A Revolução Neolítica alterou essa dinâmica. O surgimento da <strong>propriedade
          privada da terra</strong> — quem cultivava uma parcela de terra passou a reivindicá-la
          como sua — criou as bases para a desigualdade econômica. O <strong>excedente
          alimentar</strong> (a produção de mais alimento do que o necessário para subsistência)
          permitiu que alguns grupos acumulassem riqueza enquanto outros não. A
          <strong> especialização do trabalho</strong> criou hierarquias: comerciantes,
          sacerdotes e guerreiros passaram a ter mais prestígio e poder do que os
          trabalhadores agrícolas comuns.
        </p>
        <p>
          A Idade dos Metais aprofundou essas desigualdades: o controle das minas e da
          produção de armas deu poder militar e econômico a grupos específicos. As evidências
          arqueológicas de enterramentos mostram claramente essa estratificação: no Paleolítico,
          os túmulos são simples; no Neolítico e na Idade dos Metais, aparecem sepultamentos
          ricos em armas, joias e objetos de bronze ou ouro, indicando hierarquia social
          e transmissão hereditária de status.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Povos Indígenas e Pré-História</span>
        <h2>9. Povos indígenas e a continuidade da Pré-História</h2>
        <p>
          É um equívoco comum tratar a Pré-História como algo completamente encerrado antes
          da história "oficial". Muitos povos indígenas no Brasil e no mundo viveram e ainda
          vivem formas de organização social, tecnologia e cultura que guardam continuidades
          com o período pré-histórico — sem que isso signifique que sejam "primitivos" ou
          "inferiores". O etnocentrismo que julga sociedades não-industriais como "atrasadas"
          é um dos preconceitos que o ENEM sistematicamente critica.
        </p>
        <p>
          Os povos indígenas da Amazônia, por exemplo, desenvolveram conhecimentos
          sofisticados sobre a floresta — medicinais, agronômicos, ecológicos — ao longo
          de milênios. A <strong>tecnologia indígena</strong> é altamente adaptada ao
          ambiente: armadilhas de pesca, agricultura itinerante (coivara), extrativismo
          sustentável, construção com materiais locais. Esses conhecimentos tradicionais
          são reconhecidos hoje pela ciência como valiosos e estão sendo pesquisados para
          aplicações em sustentabilidade, medicina e conservação ambiental.
        </p>
        <p>
          A <strong>Constituição Federal de 1988</strong> reconhece os direitos originários
          dos povos indígenas sobre suas terras e o direito à organização social, costumes,
          línguas, crenças e tradições próprias. Essa proteção constitucional é resultado
          de séculos de resistência indígena à colonização — uma continuidade histórica
          que conecta a Pré-História ao presente.
        </p>
      </section>

      {/* ===== SEÇÃO 10 — EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Características do Paleolítico"
          statement={
            <p>
              O Paleolítico foi o período mais longo da Pré-História, caracterizado por
              um modo de vida específico que persistiu por centenas de milhares de anos.
              Sobre as características das sociedades paleolíticas, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "As sociedades paleolíticas eram sedentárias e organizavam-se em aldeias permanentes próximas às rotas de caça." },
            { letter: "b", text: "O desenvolvimento da cerâmica e da tecelagem foi a principal inovação tecnológica do Paleolítico." },
            { letter: "c", text: "As sociedades paleolíticas eram nômades, dependiam da caça, pesca e coleta, e organizavam-se em pequenos grupos baseados em laços familiares.", correct: true },
            { letter: "d", text: "A agricultura de subsistência era a base alimentar das sociedades paleolíticas, que cultivavam trigo e cevada." },
            { letter: "e", text: "As sociedades paleolíticas já tinham desenvolvido hierarquias sociais rígidas baseadas na propriedade da terra." },
          ]}
          resolution={
            <p>
              As características fundamentais do Paleolítico são o nomadismo e a dependência
              da caça, pesca e coleta. As sociedades paleolíticas não tinham agricultura
              (que surge apenas no Neolítico), nem cerâmica ou tecelagem (também neolíticas),
              nem propriedade da terra. A sedentarização e as aldeias permanentes são
              consequências da Revolução Neolítica. A organização em pequenos grupos familiares
              (bandos de 20–60 pessoas) é a forma social mais adequada ao nomadismo e à
              dependência dos recursos naturais disponíveis.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Revolução Neolítica e suas consequências"
          statement={
            <div>
              <p>
                "A passagem do nomadismo para o sedentarismo, propiciada pela invenção da
                agricultura, não foi apenas uma mudança na forma de obter alimento. Foi uma
                transformação radical nas relações sociais, na organização do espaço e no
                modo como os seres humanos concebiam a propriedade, o tempo e o sagrado."
              </p>
              <p>Considerando o texto acima, qual das seguintes afirmações melhor descreve
              uma consequência social da Revolução Neolítica?</p>
            </div>
          }
          options={[
            { letter: "a", text: "A Revolução Neolítica não trouxe desigualdades sociais, pois todos os membros das comunidades participavam igualmente do cultivo da terra." },
            { letter: "b", text: "O excedente alimentar gerado pela agricultura criou as condições para a especialização do trabalho, o surgimento de hierarquias e, em última análise, do Estado.", correct: true },
            { letter: "c", text: "A agricultura eliminou imediatamente o nomadismo em todo o planeta, substituindo completamente as práticas de caça e coleta." },
            { letter: "d", text: "A Revolução Neolítica ocorreu simultaneamente em todas as regiões do globo, evidenciando a unidade da evolução humana." },
            { letter: "e", text: "O sedentarismo neolítico reduziu o contato entre grupos humanos diferentes, pois cada comunidade ficou presa ao seu território." },
          ]}
          resolution={
            <p>
              A alternativa B captura a consequência social mais importante da Revolução
              Neolítica: o excedente alimentar — a produção de mais alimento do que o
              necessário para a sobrevivência imediata — criou as condições para que nem
              todos precisassem trabalhar na terra. Isso liberou pessoas para funções
              especializadas (sacerdotes, guerreiros, artesãos, comerciantes) e criou
              diferenciações sociais que eventualmente levaram à formação do Estado.
              Sem excedente, não há especialização; sem especialização, não há hierarquia
              complexa; sem hierarquia complexa, não há Estado.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Serra da Capivara e o debate sobre a ocupação das Américas"
          statement={
            <div>
              <p>
                As pesquisas arqueológicas no Parque Nacional Serra da Capivara, no Piauí,
                lideradas pela arqueóloga Niède Guidon, identificaram evidências de ocupação
                humana datadas de até 50.000 anos atrás — contestando a hipótese convencional
                de que os humanos chegaram às Américas há apenas 12.000–15.000 anos pelo
                Estreito de Bering.
              </p>
              <p>
                A controvérsia científica em torno dessas datas ilustra principalmente:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Que a arqueologia brasileira é menos rigorosa do que a norte-americana e europeia, razão pela qual suas datações não são aceitas." },
            { letter: "b", text: "Que o conhecimento histórico e científico é provisório e sujeito a revisão à luz de novas evidências, e que debates entre pesquisadores são parte do método científico.", correct: true },
            { letter: "c", text: "Que toda hipótese que contradiz o consenso científico dominante é necessariamente falsa." },
            { letter: "d", text: "Que a Serra da Capivara não é um sítio arqueológico relevante, pois suas datações são controvertidas." },
            { letter: "e", text: "Que a história indígena das Américas é irrelevante para a compreensão da Pré-História global." },
          ]}
          resolution={
            <p>
              O caso da Serra da Capivara ilustra um princípio fundamental do método científico:
              o conhecimento é provisório e deve ser constantemente testado, questionado e,
              quando necessário, revisado. O debate sobre as datações não invalida o sítio —
              ao contrário, demonstra o vigor da comunidade científica em testar hipóteses.
              Se as datações de Guidon forem confirmadas, implicariam uma rota migratória
              diferente do Estreito de Bering (possivelmente via Oceano Pacífico ou Atlântico),
              o que revolucionaria nossa compreensão da ocupação das Américas. O debate é
              científico legítimo — não se trata de nacionalismo ou descaso.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Arte rupestre da Serra da Capivara e patrimônio cultural"
          statement={
            <div>
              <p>
                O Parque Nacional Serra da Capivara foi incluído na lista de Patrimônio da
                Humanidade da UNESCO em 1991. O parque enfrenta ameaças constantes: turismo
                desordenado, queimadas, vandalismo e pressão de fazendeiros sobre a área.
                Comunidades indígenas e quilombolas que vivem no entorno reivindicam direitos
                sobre o território, argumentando que são descendentes dos povos que criaram
                as pinturas.
              </p>
              <p>A situação descrita revela principalmente:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Que o patrimônio histórico-arqueológico deve ser preservado exclusivamente por técnicos especializados, excluindo as comunidades locais de qualquer participação." },
            { letter: "b", text: "A tensão entre diferentes concepções de patrimônio cultural: a concepção técnico-científica dos arqueólogos, os interesses econômicos dos fazendeiros e os direitos territoriais e culturais das comunidades tradicionais.", correct: true },
            { letter: "c", text: "Que a inclusão na lista da UNESCO garante automaticamente a proteção dos sítios arqueológicos contra qualquer ameaça." },
            { letter: "d", text: "Que os direitos de comunidades tradicionais sobre territórios ancestrais são incompatíveis com a preservação arqueológica." },
            { letter: "e", text: "Que apenas os estudos arqueológicos científicos podem determinar quem tem direito a habitar territórios com presença de patrimônio arqueológico." },
          ]}
          resolution={
            <p>
              A Serra da Capivara é um caso exemplar das tensões que envolvem o patrimônio
              histórico-arqueológico: a ciência arqueológica o valoriza como fonte de
              conhecimento sobre a Pré-História; os interesses econômicos ameaçam sua
              preservação; e as comunidades tradicionais reivindicam uma relação de
              pertencimento e direitos sobre o território que vai além da tutela técnica.
              O reconhecimento de direitos territoriais de comunidades tradicionais —
              garantido pela Constituição de 1988 — não é necessariamente incompatível
              com a preservação arqueológica: as comunidades podem ser parceiras
              fundamentais na proteção de um patrimônio que é, também, delas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title={'5. Pré-História e o mito do "primitivo"'}
          statement={
            <div>
              <p>
                "A denominação 'Pré-História' foi criada no século XIX por arqueólogos
                europeus para designar o período anterior à escrita. Implicitamente, o
                conceito pressupõe que a história 'de verdade' começa com a escrita — e,
                portanto, que povos sem escrita não têm história. Essa concepção eurocêntrica
                foi utilizada para justificar o colonialismo, argumentando que povos 'sem
                história' precisavam ser 'civilizados' pelos europeus."
              </p>
              <p>
                Com base no texto, a crítica ao conceito de "Pré-História" relaciona-se
                diretamente com:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A defesa de que a escrita não é uma forma de registro histórico válida e deveria ser substituída por fontes orais." },
            { letter: "b", text: "A afirmação de que todos os povos pré-históricos eram igualmente desenvolvidos e não havia diferenças entre eles." },
            { letter: "c", text: "O questionamento do eurocentrismo que associa história à escrita europeia e nega historicidade a povos com outras formas de registro e memória, como as tradições orais e a arte rupestre.", correct: true },
            { letter: "d", text: "A proposta de eliminar completamente o termo 'Pré-História' dos currículos escolares por ser politicamente incorreto." },
            { letter: "e", text: "A afirmação de que a colonização europeia foi benéfica para os povos sem escrita, pois os inseriu na história universal." },
          ]}
          resolution={
            <p>
              O texto critica o etnocentrismo implícito no conceito de "Pré-História": ao
              definir o início da "história" pela invenção da escrita (um critério europeu),
              o conceito nega historicidade a povos que usam outras formas de registro —
              tradições orais, arte rupestre, rituais, arquitetura. Povos indígenas, africanos
              e outros têm histórias riquíssimas que não dependem da escrita para existir.
              O uso político desse argumento para justificar o colonialismo ("povos sem
              história precisam ser civilizados") é precisamente o que o ENEM quer que
              o candidato reconheça e critique. A alternativa C identifica corretamente
              essa relação entre conceito historiográfico e ideologia colonial.
            </p>
          }
        />
      </section>
    </article>
  );
}
