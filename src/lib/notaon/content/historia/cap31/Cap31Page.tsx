"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 31</span>
          <h1>Revolução Industrial</h1>
          <p>
            Da manufatura à grande indústria, da roca ao tear mecânico, do cavalo à locomotiva a vapor: a
            Revolução Industrial transformou radicalmente as relações de produção, a estrutura social e a
            paisagem urbana da humanidade a partir do século XVIII. Compreender suas causas, fases e
            consequências é indispensável para interpretar os textos do ENEM sobre mundo contemporâneo,
            capitalismo e questão social.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── CONTEXTO INGLÊS */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>Por que a Inglaterra primeiro?</h2>
        <p>
          Nenhuma revolução nasce do acaso. A Inglaterra do século XVIII reunia condições únicas que
          tornaram inevitável a explosão produtiva que sacudiria o mundo. Cinco fatores se entrelaçam de
          modo indissociável.
        </p>
        <p>
          <strong>Capital acumulado.</strong> A burguesia inglesa havia enriquecido com o comércio colonial,
          a pirataria sancionada pelo Estado (corsários como Francis Drake), o comércio de escravizados e,
          sobretudo, o desenvolvimento do crédito bancário. O Banco da Inglaterra (fundado em 1694) e a
          Bolsa de Londres tornaram possível canalizar poupança privada para empreendimentos industriais,
          fenômeno inédito em escala e sofisticação.
        </p>
        <p>
          <strong>Recursos naturais.</strong> As ilhas britânicas possuem vultosas jazidas de carvão e ferro
          em estreita proximidade geográfica — as bacias de Midlands, Yorkshire e País de Gales. O carvão
          era o combustível da máquina a vapor; o ferro, a matéria-prima de máquinas, trilhos e pontes. Sem
          essa combinação geológica, o vapor não teria motor e o motor não teria corpo.
        </p>
        <p>
          <strong>Império colonial e mercado.</strong> A Inglaterra controlava vastos territórios na América
          do Norte, Índias Ocidentais, Índia e África. As colônias forneciam algodão bruto (especialmente
          da Índia e, depois, dos EUA), tabaco, açúcar e metais preciosos. Mais importante: constituíam
          mercados cativos para os tecidos de algodão ingleses, impedindo que a superprodução industrial
          afundasse os preços domésticos.
        </p>
        <p>
          <strong>Liberalismo econômico.</strong> A Revolução Gloriosa de 1688 havia consolidado a
          supremacia parlamentar burguesa. As políticas mercantilistas cederam progressivamente ao ideário
          de Adam Smith, cuja obra <em>A Riqueza das Nações</em> (1776) pregava a livre concorrência, a
          divisão do trabalho e o laissez-faire. O Estado inglês intervinha menos nas atividades econômicas
          do que seus concorrentes europeus.
        </p>
        <p>
          <strong>Enclosures e mão de obra.</strong> O movimento de cercamento das terras comunais
          (enclosures) ao longo dos séculos XVII e XVIII expulsou camponeses de seus roçados tradicionais,
          criando um enorme exército de trabalhadores sem propriedade e sem alternativa senão vender sua
          força de trabalho nas fábricas. Esse processo — a chamada acumulação primitiva descrita por Marx
          — foi pré-requisito social da industrialização.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── PRIMEIRA REVOLUÇÃO INDUSTRIAL */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>Primeira Revolução Industrial (1760–1850)</h2>
        <p>
          A primeira fase da industrialização girou em torno de dois eixos complementares: a mecanização
          da indústria têxtil e a difusão da máquina a vapor como fonte de energia universal.
        </p>
        <p>
          <strong>A máquina a vapor e James Watt.</strong> Thomas Newcomen havia construído, em 1712, uma
          bomba a vapor rudimentar usada para drenar minas de carvão. Foi James Watt quem, em 1769,
          patenteou o condensador separado, elevando a eficiência termodinâmica da máquina e tornando-a
          economicamente viável para movimentar teares, moinhos e, mais tarde, locomotivas. A associação de
          Watt com o industrial Matthew Boulton exemplifica a parceria entre ciência aplicada e capital
          privado que marcaria toda a industrialização.
        </p>
        <p>
          <strong>Têxtil de algodão.</strong> A jenny de Hargreaves (1764), o water frame de Arkwright
          (1769) e a mule de Crompton (1779) multiplicaram a produtividade do fio de algodão por centenas de
          vezes. As fábricas (factories) concentraram trabalhadores em espaços controlados pelo capitalista,
          substituindo o putting-out system doméstico. Manchester, o "Cottonopolis", tornou-se o símbolo
          urbano da era industrial, crescendo de 25 mil habitantes em 1772 para 300 mil em 1850.
        </p>
        <p>
          <strong>Ferrovia.</strong> A locomotiva de George Stephenson inaugurou a linha Liverpool–Manchester
          em 1830. As ferrovias revolucionaram não só o transporte de mercadorias e pessoas, mas também
          induziram demandas gigantescas por carvão, aço, madeira e trabalho, gerando um efeito
          multiplicador sobre toda a economia. Em 1850, a Inglaterra possuía mais de 10.000 km de trilhos.
        </p>
        <p>
          <strong>Carvão e metalurgia.</strong> O coque (carvão purificado) substituiu o carvão vegetal na
          fundição do ferro, liberando as florestas e multiplicando a produção metálica. Abraham Darby
          pioneirizou o processo em Coalbrookdale (1709). A produção inglesa de ferro-gusa saltou de 68 mil
          toneladas em 1788 para 1,3 milhão de toneladas em 1839.
        </p>
      </section>

      {/* ── SVG 1: LINHA DO TEMPO DAS REVOLUÇÕES INDUSTRIAIS */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 780 220" width="100%" aria-label="Linha do tempo das Revoluções Industriais">
          {/* fundo */}
          <rect width="780" height="220" fill="#f8f9fa" rx="10" />
          {/* linha central */}
          <line x1="40" y1="110" x2="740" y2="110" stroke="#495057" strokeWidth="3" />
          {/* seta direita */}
          <polygon points="740,105 752,110 740,115" fill="#495057" />

          {/* 1a Revolução */}
          <rect x="50" y="55" width="200" height="50" fill="#1971c2" rx="6" />
          <text x="150" y="76" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1ª Revolução Industrial</text>
          <text x="150" y="92" textAnchor="middle" fill="#d0ebff" fontSize="10">1760 – 1850</text>
          <line x1="150" y1="105" x2="150" y2="110" stroke="#1971c2" strokeWidth="2" />
          <text x="150" y="128" textAnchor="middle" fill="#495057" fontSize="9">Vapor • Têxtil • Ferro</text>

          {/* marco Watt */}
          <circle cx="220" cy="110" r="5" fill="#e67700" />
          <text x="220" y="148" textAnchor="middle" fill="#e67700" fontSize="8">Watt 1769</text>

          {/* marco ferrovia */}
          <circle cx="340" cy="110" r="5" fill="#e67700" />
          <text x="340" y="148" textAnchor="middle" fill="#e67700" fontSize="8">Ferrovia 1830</text>

          {/* 2a Revolução */}
          <rect x="370" y="55" width="220" height="50" fill="#2f9e44" rx="6" />
          <text x="480" y="76" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2ª Revolução Industrial</text>
          <text x="480" y="92" textAnchor="middle" fill="#b2f2bb" fontSize="10">1870 – 1914</text>
          <line x1="480" y1="105" x2="480" y2="110" stroke="#2f9e44" strokeWidth="2" />
          <text x="480" y="128" textAnchor="middle" fill="#495057" fontSize="9">Eletric. • Petróleo • Aço</text>

          {/* 3a Revolução */}
          <rect x="610" y="55" width="140" height="50" fill="#7048e8" rx="6" />
          <text x="680" y="73" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3ª Revolução</text>
          <text x="680" y="87" textAnchor="middle" fill="white" fontSize="9">Tecnológica</text>
          <text x="680" y="101" textAnchor="middle" fill="#d0bfff" fontSize="9">1970 – atual</text>
          <line x1="680" y1="105" x2="680" y2="110" stroke="#7048e8" strokeWidth="2" />
          <text x="680" y="128" textAnchor="middle" fill="#495057" fontSize="9">TI • Automação • IA</text>

          {/* rótulos de datas */}
          <text x="50" y="175" textAnchor="middle" fill="#868e96" fontSize="9">1760</text>
          <text x="255" y="175" textAnchor="middle" fill="#868e96" fontSize="9">1850</text>
          <text x="370" y="175" textAnchor="middle" fill="#868e96" fontSize="9">1870</text>
          <text x="595" y="175" textAnchor="middle" fill="#868e96" fontSize="9">1914</text>
          <text x="610" y="175" textAnchor="middle" fill="#868e96" fontSize="9">1970</text>
          <text x="750" y="175" textAnchor="middle" fill="#868e96" fontSize="9">hoje</text>

          <text x="390" y="205" textAnchor="middle" fill="#868e96" fontSize="9">
            Linha do tempo das Revoluções Industriais
          </text>
        </svg>
        <figcaption>As três fases da industrialização e suas principais características tecnológicas.</figcaption>
      </figure>

      {/* ── SEÇÃO 3 ── SEGUNDA REVOLUÇÃO INDUSTRIAL */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>Segunda Revolução Industrial (1870–1914)</h2>
        <p>
          A segunda fase da industrialização distingue-se da primeira pela diversificação das fontes de
          energia, pela emergência de novos países industriais e pela organização científica do trabalho.
          Enquanto a primeira revolução havia sido predominantemente britânica e movida a carvão, a segunda
          era alemã, americana e elétrica.
        </p>
        <p>
          <strong>Novas fontes de energia.</strong> A eletricidade transformou-se em energia de uso geral
          após as invenções de Thomas Edison (lâmpada incandescente, 1879; central elétrica, 1882) e Nikola
          Tesla (corrente alternada). O petróleo, refinado em querosene desde a década de 1850 e depois em
          gasolina, alimentou o motor de combustão interna patenteado por Otto (1876) e aperfeiçoado por
          Daimler e Benz — precursores do automóvel.
        </p>
        <p>
          <strong>Aço e química.</strong> O processo Bessemer (1856) e o forno Siemens-Martin (1864)
          baratearam radicalmente a produção de aço, material muito superior ao ferro para trilhos,
          estruturas e máquinas. A indústria química alemã sintetizou corantes, fertilizantes nitrogenados
          (processo Haber-Bosch) e explosivos, criando cadeias produtivas inteiramente novas.
        </p>
        <p>
          <strong>Fordismo e taylorismo.</strong> Frederick Winslow Taylor sistematizou, na virada do século
          XIX para o XX, a gerência científica do trabalho: cronometragem de tarefas, separação radical
          entre concepção (gerência) e execução (operário), especialização de funções. Henry Ford aplicou
          esses princípios à linha de montagem contínua em Highland Park (1913): cada operário executava
          uma tarefa mínima e repetitiva, o chassi do Model T avançava pela esteira e o tempo de montagem
          caiu de 12 horas e 30 minutos para 1 hora e 33 minutos. O automóvel, antes artigo de luxo,
          tornou-se um produto de massa.
        </p>
        <p>
          <strong>Novos países industriais.</strong> Alemanha e Estados Unidos superaram a Inglaterra em
          produção industrial nas últimas décadas do século XIX. O Japão, após a Restauração Meiji (1868),
          empreendeu industrialização acelerada conduzida pelo Estado. Esse reequilíbrio de forças é
          fundamental para compreender as rivalidades que desembocariam na Primeira Guerra Mundial.
        </p>
      </section>

      {/* ── TABELA 1: COMPARAÇÃO 1ª x 2ª REVOLUÇÃO */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>Comparação entre as duas primeiras Revoluções Industriais</caption>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>1ª Revolução (1760–1850)</th>
              <th>2ª Revolução (1870–1914)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>País líder</td>
              <td>Inglaterra</td>
              <td>Alemanha e EUA</td>
            </tr>
            <tr>
              <td>Fonte de energia</td>
              <td>Carvão / vapor</td>
              <td>Eletricidade / petróleo</td>
            </tr>
            <tr>
              <td>Setor principal</td>
              <td>Têxtil e ferro</td>
              <td>Aço, química e eletricidade</td>
            </tr>
            <tr>
              <td>Organização do trabalho</td>
              <td>Fábrica concentrada</td>
              <td>Taylorismo / fordismo</td>
            </tr>
            <tr>
              <td>Transporte</td>
              <td>Ferrovia a vapor</td>
              <td>Automóvel / avião</td>
            </tr>
            <tr>
              <td>Comunicação</td>
              <td>Telégrafo elétrico</td>
              <td>Telefone / rádio</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 4 ── CONDIÇÕES DE VIDA OPERÁRIA */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>Condições de vida do proletariado urbano</h2>
        <p>
          A industrialização criou riqueza sem precedentes — e, simultaneamente, miséria concentrada. Os
          trabalhadores das primeiras fábricas não eram cidadãos livres usufruindo de prosperidade: eram
          homens, mulheres e crianças submetidos a condições que hoje caracterizariam trabalho análogo à
          escravidão.
        </p>
        <p>
          <strong>Jornadas e trabalho infantil.</strong> Jornadas de 14 a 16 horas diárias, seis dias por
          semana, eram comuns nas décadas iniciais da industrialização inglesa. Crianças a partir de cinco
          ou seis anos trabalhavam em minas de carvão (como trappers, abrindo e fechando portas de
          ventilação no escuro) e em fábricas têxteis (como scavengers, recolhendo retalhos sob teares em
          movimento). O Factory Act de 1833 foi a primeira lei efetiva a limitar o trabalho infantil na
          Inglaterra, proibindo menores de nove anos nas fábricas têxteis e impondo inspeção governamental.
        </p>
        <p>
          <strong>Cortiços e condições sanitárias.</strong> A migração campo-cidade foi tão veloz que as
          cidades industriais não tinham infraestrutura para acomodar os recém-chegados. Os cortiços de
          Manchester e Liverpool eram aglomerações úmidas, sem ventilação, sem esgoto, onde uma família
          inteira habitava um único cômodo. As epidemias de cólera de 1832 e 1848 mataram dezenas de
          milhares: os pobres, cujas habitações eram irrigadas por água contaminada pelos mesmos rios que
          recebiam os dejetos industriais e humanos, morriam em proporções muito maiores do que os ricos.
          Friedrich Engels descreveu com precisão sociológica essa realidade em <em>A Situação da Classe
          Trabalhadora na Inglaterra</em> (1845).
        </p>
        <p>
          <strong>Salários e insegurança.</strong> Os salários eram determinados exclusivamente pela oferta
          e demanda, sem nenhuma proteção legal. A superpopulação relativa (reserva de trabalhadores
          desempregados ou subempregados) pressionava os salários para baixo. Doenças, acidentes de
          trabalho ou períodos de recessão podiam condenar famílias inteiras à mendicância. As workhouses
          (casas de trabalho forçado) eram a única rede de proteção estatal — e funcionavam deliberadamente
          de modo degradante para desestimular a "preguiça".
        </p>
      </section>

      {/* ── SEÇÃO 5 ── LUDISMO E PRIMEIRAS RESISTÊNCIAS */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>Ludismo e primeiras formas de resistência operária</h2>
        <p>
          Diante da exploração, os trabalhadores não permaneceram passivos. As formas de resistência,
          contudo, evoluíram ao longo do tempo, refletindo o grau de consciência política e de organização
          coletiva disponível.
        </p>
        <p>
          <strong>Ludismo (1811–1816).</strong> Os ludditas eram artesãos especializados — principalmente
          tecelões e sapateiros — que viam nas máquinas a causa direta da destruição de seu modo de vida e
          de seu ofício. Liderados pelo mítico "General Ned Ludd", organizaram ataques noturnos a fábricas
          nas regiões de Nottingham, Yorkshire e Lancashire, destruindo sistematicamente os teares mecânicos.
          O governo britânico reagiu com mão de ferro: em 1812, a destruição de máquinas tornou-se crime
          punível com morte. O ludismo não era irracional: era uma resposta política à introdução de
          tecnologia que destruía empregos sem qualquer compensação social.
        </p>
        <p>
          <strong>Cartismo (1838–1857).</strong> O movimento cartista foi a primeira mobilização de massas
          explicitamente política da classe trabalhadora inglesa. A Carta do Povo exigia sufrágio universal
          masculino, voto secreto, salário para os parlamentares (para que trabalhadores pudessem se
          candidatar), abolição do censo eleitoral de propriedade e eleições anuais. Embora o Parlamento
          tenha rejeitado três petições cartistas com milhões de assinaturas, o cartismo demonstrou a
          capacidade de organização política autônoma do proletariado.
        </p>
        <p>
          <strong>Primeiros sindicatos (trade unions).</strong> As Combination Acts de 1799–1800 haviam
          proibido as associações de trabalhadores. Sua revogação em 1824–1825 permitiu o surgimento
          gradual de uniões de ofício. Os sindicatos (trade unions) negociavam salários, jornadas e
          condições de trabalho com os empregadores — uma prática radicalmente nova que prefigurava as
          conquistas trabalhistas do século XX.
        </p>
      </section>

      {/* ── TABELA 2: FORMAS DE RESISTÊNCIA OPERÁRIA */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>Principais formas de resistência operária na Inglaterra Industrial</caption>
          <thead>
            <tr>
              <th>Movimento</th>
              <th>Período</th>
              <th>Método</th>
              <th>Demandas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ludismo</td>
              <td>1811–1816</td>
              <td>Destruição de máquinas</td>
              <td>Preservação dos ofícios tradicionais</td>
            </tr>
            <tr>
              <td>Cartismo</td>
              <td>1838–1857</td>
              <td>Petições e manifestações</td>
              <td>Sufrágio universal masculino e direitos políticos</td>
            </tr>
            <tr>
              <td>Trade Unions</td>
              <td>A partir de 1824</td>
              <td>Negociação coletiva e greve</td>
              <td>Salários, jornada, condições de trabalho</td>
            </tr>
            <tr>
              <td>Socialismo Owenista</td>
              <td>1820–1840</td>
              <td>Cooperativas e falanstérios</td>
              <td>Reforma social pacífica e cooperação</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 6 ── IMPACTO AMBIENTAL */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>Impacto ambiental da industrialização</h2>
        <p>
          A Revolução Industrial inaugurou a era da degradação ambiental em escala sistêmica. O consumo
          massivo de carvão mineral lançou toneladas de dióxido de enxofre, fuligem e particulados na
          atmosfera das cidades industriais. O "nevoeiro" característico de Londres (o famoso smog
          vitoriano) não era névoa: era fumaça industrial misturada à neblina natural do Tâmisa, suficiente
          para causar doenças pulmonares crônicas em populações inteiras.
        </p>
        <p>
          Os rios industriais ingleses tornaram-se esgotos a céu aberto. O Tâmisa na década de 1850
          estava tão poluído que o Parlamento precisou ser temporariamente fechado durante o "Grande Fedor"
          de 1858. A desflorestação acelerou-se com a demanda por madeira para construção, carvão vegetal
          e dormentes de ferrovia. A extração minerária abriu feridas na paisagem que permaneceram por
          gerações.
        </p>
        <p>
          Do ponto de vista das mudanças climáticas de longo prazo, é na era industrial que se inicia o
          aumento acelerado da concentração atmosférica de CO₂, processo que a ciência climática
          contemporânea identifica como causa primária do aquecimento global. A Revolução Industrial é,
          portanto, não apenas uma revolução econômica: é o ponto de inflexão de uma crise ambiental cujas
          consequências a humanidade ainda enfrenta no século XXI.
        </p>
      </section>

      {/* ── SVG 2: GRÁFICO DE CRESCIMENTO URBANO */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 280" width="100%" aria-label="Crescimento urbano da Inglaterra industrial">
          <rect width="620" height="280" fill="#f8f9fa" rx="10" />
          <text x="310" y="25" textAnchor="middle" fill="#212529" fontSize="13" fontWeight="bold">
            Crescimento Urbano na Inglaterra (1750–1900)
          </text>

          {/* eixos */}
          <line x1="70" y1="230" x2="580" y2="230" stroke="#495057" strokeWidth="2" />
          <line x1="70" y1="40" x2="70" y2="230" stroke="#495057" strokeWidth="2" />

          {/* rótulos eixo X */}
          <text x="100" y="248" textAnchor="middle" fill="#495057" fontSize="10">1750</text>
          <text x="228" y="248" textAnchor="middle" fill="#495057" fontSize="10">1800</text>
          <text x="356" y="248" textAnchor="middle" fill="#495057" fontSize="10">1850</text>
          <text x="484" y="248" textAnchor="middle" fill="#495057" fontSize="10">1900</text>

          {/* rótulos eixo Y */}
          <text x="60" y="232" textAnchor="end" fill="#495057" fontSize="9">0</text>
          <text x="60" y="185" textAnchor="end" fill="#495057" fontSize="9">20%</text>
          <text x="60" y="138" textAnchor="end" fill="#495057" fontSize="9">40%</text>
          <text x="60" y="91" textAnchor="end" fill="#495057" fontSize="9">60%</text>
          <text x="60" y="44" textAnchor="end" fill="#495057" fontSize="9">80%</text>

          {/* linhas de grade */}
          <line x1="70" y1="185" x2="580" y2="185" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="70" y1="138" x2="580" y2="138" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="70" y1="91" x2="580" y2="91" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="70" y1="44" x2="580" y2="44" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4,4" />

          {/* barras: população urbana (% total) */}
          {/* 1750: ~15% → altura = 15*1.9 = 28.5, topo = 230-28=202 */}
          <rect x="85" y="202" width="55" height="28" fill="#1971c2" rx="3" />
          <text x="112" y="198" textAnchor="middle" fill="#1971c2" fontSize="9">15%</text>

          {/* 1800: ~25% → 47.5 */}
          <rect x="213" y="182" width="55" height="48" fill="#1971c2" rx="3" />
          <text x="240" y="178" textAnchor="middle" fill="#1971c2" fontSize="9">25%</text>

          {/* 1850: ~50% → 95 */}
          <rect x="341" y="135" width="55" height="95" fill="#1971c2" rx="3" />
          <text x="368" y="131" textAnchor="middle" fill="#1971c2" fontSize="9">50%</text>

          {/* 1900: ~77% → 146 */}
          <rect x="469" y="84" width="55" height="146" fill="#1971c2" rx="3" />
          <text x="496" y="80" textAnchor="middle" fill="#1971c2" fontSize="9">77%</text>

          <text x="310" y="268" textAnchor="middle" fill="#868e96" fontSize="9">
            % da população inglesa vivendo em cidades
          </text>
        </svg>
        <figcaption>O processo de urbanização acelerada acompanhou a industrialização britânica.</figcaption>
      </figure>

      {/* ── SEÇÃO 7 ── REVOLUÇÃO INDUSTRIAL E IMPERIALISMO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>A Revolução Industrial e o Imperialismo</h2>
        <p>
          A industrialização criou uma necessidade dupla que o imperialismo do final do século XIX viria
          satisfazer: a busca por matérias-primas baratas e a conquista de novos mercados consumidores para
          os produtos industrializados. Essa equação econômica está na raiz da corrida imperialista que
          partilhou a África (Conferência de Berlim, 1884–85) e consolidou o controle colonial sobre a
          Ásia e a Oceania.
        </p>
        <p>
          Os países industrializados precisavam de borracha (para pneus e isolamento elétrico), algodão
          (para as fábricas têxteis), petróleo (para os novos motores), metais como estanho, cobre e
          manganês (para ligas metálicas e fios elétricos), além de marfim, madeira tropical e produtos
          agrícolas tropicais. A África, a Ásia e a América Latina tornaram-se, assim, fornecedoras
          compulsórias de insumos industriais.
        </p>
        <p>
          Ao mesmo tempo, os mercados europeus eram insuficientes para absorver a crescente produção
          industrial. A superprodução ameaçava desencadear crises periódicas de sobreacumulação. As
          colônias e semicolônias funcionavam como válvulas de escape: compravam tecidos, máquinas e
          ferrovias fabricados na metrópole. O imperialismo não foi, portanto, apenas uma expressão de
          ambição política ou racismo cultural — foi também uma necessidade estrutural do capitalismo
          industrial em sua fase monopolista.
        </p>
        <p>
          Os teóricos do imperialismo — John A. Hobson (<em>Imperialism</em>, 1902), Rudolf Hilferding
          (<em>O Capital Financeiro</em>, 1910) e Lênin (<em>O Imperialismo, Fase Superior do
          Capitalismo</em>, 1917) — analisaram precisamente essa conexão entre industrialização,
          exportação de capitais e dominação colonial.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── TERCEIRA REVOLUÇÃO INDUSTRIAL */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>A Terceira Revolução Industrial (Tecnológica)</h2>
        <p>
          A partir dos anos 1970, a economia mundial assistiu à emergência de uma terceira fase
          revolucionária, denominada Revolução Técnico-Científico-Informacional ou simplesmente Revolução
          Tecnológica. Seu núcleo não é mais a energia mecânica ou elétrica, mas a informação processada
          por computadores e transmitida por redes digitais.
        </p>
        <p>
          <strong>Características centrais.</strong> A microeletrônica (transistores, circuitos integrados,
          microprocessadores) tornou possível computadores pessoais, smartphones e sistemas de controle
          industrial. A internet transformou radicalmente a comunicação, o comércio e o trabalho. A
          biotecnologia abriu fronteiras na medicina, na agricultura (transgênicos) e na farmacologia.
          A robótica e a automação eliminaram postos de trabalho industrial em países desenvolvidos e
          transferiram a produção manufatureira para países de mão de obra barata.
        </p>
        <p>
          <strong>Impactos sociais.</strong> A Terceira Revolução Industrial aprofundou as desigualdades
          globais: países com capital humano e infraestrutura digital avançados acumularam as rendas da
          inovação, enquanto países periféricos continuaram exportando commodities. No mercado de trabalho,
          criou uma polarização entre empregos altamente qualificados e bem remunerados (programadores,
          engenheiros, financistas) e empregos precários e mal pagos (delivery, call centers, serviços).
          A chamada "gig economy" (economia de bicos) representa a face mais recente dessa precarização.
        </p>
        <p>
          <strong>Desindustrialização.</strong> Nos países desenvolvidos, a Revolução Tecnológica
          combinou-se com a globalização para produzir a desindustrialização: a participação da indústria
          no PIB e no emprego caiu sistematicamente, enquanto o setor de serviços expandia. As antigas
          cidades industriais do cinturão do aço americano (Pittsburgh, Detroit) tornaram-se símbolos de
          decadência econômica — o chamado Rust Belt (cinturão enferrujado).
        </p>
      </section>

      {/* ── TABELA 3: REVOLUÇÕES INDUSTRIAIS EM SÍNTESE */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>As três Revoluções Industriais — síntese comparativa</caption>
          <thead>
            <tr>
              <th>Revolução</th>
              <th>Período</th>
              <th>Energia motriz</th>
              <th>Setores-chave</th>
              <th>País líder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ª</td>
              <td>1760–1850</td>
              <td>Carvão / vapor</td>
              <td>Têxtil, ferro, ferrovia</td>
              <td>Inglaterra</td>
            </tr>
            <tr>
              <td>2ª</td>
              <td>1870–1914</td>
              <td>Eletricidade / petróleo</td>
              <td>Aço, química, automóvel</td>
              <td>Alemanha / EUA</td>
            </tr>
            <tr>
              <td>3ª</td>
              <td>1970–atual</td>
              <td>Digital / nuclear</td>
              <td>TI, biotecnologia, robótica</td>
              <td>EUA / Ásia</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 9 ── FORMAÇÃO DO PROLETARIADO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 9</span>
        <h2>Formação do proletariado urbano e consciência de classe</h2>
        <p>
          A grande fábrica não apenas concentrou trabalhadores fisicamente — ela criou as condições
          objetivas para o surgimento de uma identidade coletiva de classe. Homens, mulheres e crianças
          que compartilhavam as mesmas condições de trabalho, os mesmos bairros miseráveis e a mesma
          dependência do salário para sobreviver gradualmente desenvolveram o que Edward P. Thompson, em
          sua obra seminal <em>A Formação da Classe Operária Inglesa</em> (1963), chamou de consciência
          de classe — a percepção de interesses comuns antagônicos aos dos proprietários dos meios de
          produção.
        </p>
        <p>
          Esse processo não foi linear nem automático. Antes de se organizarem politicamente, os
          trabalhadores passaram por décadas de atomização, competição mútua e repressão estatal. As leis
          que criminalizavam as associações operárias (Combination Acts), a repressão sangrenta do
          Massacre de Peterloo (1819) e a deportação de sindicalistas exemplificam a violência com que a
          classe dominante defendeu sua hegemonia sobre a produção e sobre a política.
        </p>
        <p>
          A formação do proletariado industrial é, portanto, tanto um processo econômico (a
          proletarização da força de trabalho) quanto cultural e político (o desenvolvimento de formas
          próprias de organização, solidariedade e contestação). Essa dialética entre estrutura econômica
          e agência histórica dos trabalhadores é uma das questões centrais da historiografia marxista e
          também uma fonte recorrente de questões no ENEM.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── DICA ENEM */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 10</span>
        <h2>O que o ENEM cobra sobre a Revolução Industrial</h2>
        <div className="lesson-highlight">
          <p>
            As questões do ENEM sobre Revolução Industrial raramente pedem datas ou nomes isolados.
            Privilegiam interpretação de fontes primárias (trechos de Engels, relatórios parlamentares,
            charges do século XIX) e conexões temáticas com outros conteúdos: o imperialismo, o
            surgimento do socialismo, a questão ambiental, as relações de trabalho contemporâneas.
          </p>
          <p>
            Pontos de atenção frequentes: (1) a distinção entre as fases da industrialização; (2) as
            condições de vida operária como contexto para o surgimento dos movimentos sociais; (3) a
            relação entre industrialização e imperialismo; (4) o fordismo-taylorismo e suas críticas
            (Chaplin em <em>Tempos Modernos</em>); (5) a Revolução Industrial como ponto de partida
            da crise ambiental contemporânea.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <Exercise
        level="Básico"
        title="Condições da Revolução Industrial na Inglaterra"
        statement="Qual das alternativas abaixo apresenta uma condição que favoreceu o surgimento da Revolução Industrial na Inglaterra e não em outros países europeus da mesma época?"
        options={[
          { letter: "A", text: "A existência de uma monarquia absolutista que financiou as primeiras fábricas diretamente." },
          { letter: "B", text: "A abundância simultânea de reservas de carvão e ferro em proximidade geográfica, aliada ao capital acumulado com o comércio colonial e ao liberalismo econômico.", correct: true },
          { letter: "C", text: "A ausência de uma classe operária rural, o que eliminou resistências à mecanização do campo." },
          { letter: "D", text: "O isolamento geográfico das ilhas britânicas, que protegeu a indústria nascente da concorrência estrangeira." },
          { letter: "E", text: "A abundância de mão de obra qualificada proveniente das corporações de ofício medievais, que facilitou a transição para a fábrica." },
        ]}
        resolution="A alternativa B sintetiza os cinco fatores estruturais da Revolução Industrial inglesa: recursos naturais (carvão + ferro), capital acumulado (comércio colonial e crédito bancário), mercados coloniais, liberalismo econômico (Adam Smith, Revolução Gloriosa) e mão de obra livre criada pelos enclosures. As demais alternativas apresentam distorções factuais."
      />

      <Exercise
        level="Intermediário"
        title="Fordismo e taylorismo"
        statement='O sistema fordista de produção, implantado na fábrica de Henry Ford em Highland Park em 1913, representou uma inovação em relação ao sistema anterior de produção industrial. Assinale a alternativa que melhor descreve a principal inovação trazida pelo fordismo:'
        options={[
          { letter: "A", text: "A substituição da energia a vapor pela eletricidade como fonte de movimento das máquinas." },
          { letter: "B", text: "A introdução do trabalho em turnos noturnos, que ampliou o horário de funcionamento das fábricas." },
          { letter: "C", text: "A linha de montagem contínua combinada com a extrema especialização de tarefas, que reduziu o tempo de produção e barateou o produto final, tornando-o acessível às massas.", correct: true },
          { letter: "D", text: "A eliminação da supervisão gerencial, substituída pelo autocontrole dos operários organizados em células de trabalho." },
          { letter: "E", text: "O retorno à produção artesanal qualificada como resposta às críticas ludistas à mecanização desenfreada." },
        ]}
        resolution="O fordismo combinou a esteira de montagem contínua com a divisão extrema do trabalho proposta pelo taylorismo (cada operário realizava uma única operação repetitiva). O resultado foi a redução dramática do tempo de montagem do Model T e a queda de preço que o tornou um produto de massa. As demais alternativas descrevem características falsas ou de outros processos."
      />

      <Exercise
        level="Avançado"
        title="Ludismo: racionalidade e contexto"
        statement='Historiadores revisionistas como Eric Hobsbawm argumentaram que o ludismo — movimento de destruição de máquinas ocorrido na Inglaterra entre 1811 e 1816 — não era uma reação irracional ao progresso tecnológico, mas uma forma de negociação coletiva por ameaça. Qual interpretação sustenta melhor essa tese?'
        options={[
          { letter: "A", text: "Os ludditas agiam por impulso emocional, sem objetivos definidos, o que os distingue dos movimentos operários posteriores que possuíam pauta clara." },
          { letter: "B", text: "Os ludditas destruíam seletivamente as máquinas de empregadores que se recusavam a negociar salários e condições de trabalho, usando a ameaça de destruição como instrumento de pressão econômica.", correct: true },
          { letter: "C", text: "O ludismo surgiu de uma ideologia religiosa que via nas máquinas instrumentos do demônio, incompatível com a visão de mundo cristã dos artesãos tradicionais." },
          { letter: "D", text: "Os ludditas rejeitavam qualquer forma de capitalismo industrial e propunham o retorno ao sistema feudal de produção." },
          { letter: "E", text: "A destruição de máquinas era tática aprovada pelo Partido Trabalhista inglês como forma de pressão política sobre o Parlamento." },
        ]}
        resolution="Hobsbawm e outros historiadores demonstraram que os ataques ludditas eram frequentemente seletivos e direcionados a empregadores específicos que haviam recusado negociar. A 'destruição' era uma forma primitiva mas racional de barganha coletiva, análoga à greve posterior. Os ludditas não eram anti-progresso em abstrato — eram contra a introdução de máquinas sem compensação para os trabalhadores deslocados. O Partido Trabalhista britânico, por sua vez, foi fundado apenas em 1900."
      />

      <Exercise
        level="Contextualizado"
        title="Industrialização e imperialismo"
        statement='(ENEM adaptado) "A partilha da África, realizada na Conferência de Berlim (1884–85), dividiu o continente entre as potências europeias sem levar em conta as fronteiras étnicas e culturais africanas. Ao final do processo, apenas a Etiópia e a Libéria permaneciam formalmente independentes." Considerando o contexto da Segunda Revolução Industrial, qual relação econômica explica a urgência das potências europeias em colonizar a África naquele período?'
        options={[
          { letter: "A", text: "A necessidade de expandir o islamismo e o cristianismo para populações africanas consideradas sem religião pelas elites europeias." },
          { letter: "B", text: "O desejo filantrópico de eliminar o tráfico de escravizados africanos por meio da presença militar europeia permanente no continente." },
          { letter: "C", text: "A demanda crescente das indústrias europeias por matérias-primas (borracha, minerais, algodão) e a necessidade de mercados para absorver a superprodução industrial, tornando o domínio territorial uma necessidade estrutural do capitalismo industrial.", correct: true },
          { letter: "D", text: "A crise agrícola europeia que forçou a transferência de populações camponesas desempregadas para territórios africanos destinados à agricultura de subsistência." },
          { letter: "E", text: "A rivalidade entre monarquias europeias por prestígio dinástico, sem conexão direta com interesses econômicos ou industriais." },
        ]}
        resolution="A colonização africana no final do século XIX está diretamente vinculada à Segunda Revolução Industrial: as novas indústrias (aço, elétrica, automobilística) demandavam matérias-primas que a Europa não possuía em quantidade suficiente, e a superprodução industrial criava a necessidade de mercados externos. A Conferência de Berlim foi, essencialmente, o instrumento diplomático de uma partilha econômica."
      />

      <Exercise
        level="Contextualizado"
        title="Impacto ambiental da industrialização"
        statement='Um texto do geólogo Paul Crutzen, publicado em 2000, propôs o termo "Antropoceno" para designar uma nova época geológica iniciada pela atividade humana. Muitos cientistas situam o início do Antropoceno por volta de 1750–1800. Com base nos conteúdos estudados, qual processo histórico justifica essa datação?'
        options={[
          { letter: "A", text: "A Revolução Francesa (1789), que inaugurou a era dos direitos humanos e a mobilização política de massas urbanas." },
          { letter: "B", text: "O início da Revolução Industrial na Inglaterra, com a queima massiva de carvão mineral, elevando as concentrações atmosféricas de CO₂ e inaugurando a alteração antrópica dos ciclos geoquímicos planetários.", correct: true },
          { letter: "C", text: "A descoberta da América (1492), que gerou fluxos de metais preciosos e doenças que alteraram os ecossistemas americanos de forma irreversível." },
          { letter: "D", text: "A Revolução Verde dos anos 1960, que introduziu agrotóxicos e sementes modificadas nas lavouras de todo o mundo." },
          { letter: "E", text: "A invenção da bomba atômica (1945), cujos testes deixaram marcadores radioativos nos sedimentos geológicos de todo o planeta." },
        ]}
        resolution="A maioria dos geólogos que defende o Antropoceno como época geológica situa seu início na Revolução Industrial britânica (c. 1750–1800), quando o consumo em massa de combustíveis fósseis alterou de forma mensurável a composição da atmosfera. Os picos de CO₂ em registros de gelo polar e os marcadores de fuligem industrial nos sedimentos oceânicos são as evidências estratigráficas citadas. Outras propostas (bomba atômica, Revolução Verde) possuem defensores, mas a Revolução Industrial é a proposta mais amplamente aceita."
      />
    </article>
  );
}
