"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 32</span>
          <h1>Movimentos Sociais do Século XIX</h1>
          <p>
            A Revolução Industrial não produziu apenas riqueza e locomotivas: gerou também um proletariado
            urbano que, diante da exploração sistemática, desenvolveu formas radicalmente novas de
            pensamento político e organização coletiva. O socialismo, o anarquismo, o marxismo e o
            sindicalismo são respostas históricas às contradições do capitalismo industrial — e
            continuam moldando os debates políticos do século XXI.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── SURGIMENTO DO MOVIMENTO OPERÁRIO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>O surgimento do movimento operário</h2>
        <p>
          O movimento operário moderno emergiu como resposta direta às condições impostas pela Revolução
          Industrial: jornadas exaustivas, salários de subsistência, trabalho infantil, acidentes sem
          indenização e completa ausência de direitos políticos para a classe trabalhadora. Antes da
          industrialização, as formas de resistência dos pobres eram fragmentadas e localistas — motins
          por alimentos, rebeliões camponesas, fugas individuais.
        </p>
        <p>
          A fábrica alterou essa equação ao concentrar centenas ou milhares de trabalhadores num mesmo
          espaço físico, submetidos à mesma disciplina, ao mesmo patrão e ao mesmo salário. Essa
          concentração era, paradoxalmente, a condição de possibilidade da organização coletiva. Os
          trabalhadores podiam comunicar-se, deliberar coletivamente, perceber interesses comuns e agir
          de forma coordenada — o que artesãos dispersos nos ateliês domiciliares não podiam fazer com
          a mesma eficácia.
        </p>
        <p>
          O movimento operário desenvolveu-se em ondas sucessivas: das primeiras trade unions britânicas
          (1820s–1830s) às internacionais socialistas do final do século; do ludismo artesanal ao
          sindicalismo industrial organizado; das utopias cooperativistas ao marxismo científico. Cada
          fase respondeu às condições históricas específicas do capitalismo em seu momento.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── SOCIALISMO UTÓPICO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>Socialismo utópico: Saint-Simon, Fourier e Owen</h2>
        <p>
          O termo "socialismo utópico" foi cunhado por Marx e Engels para designar, de modo crítico, as
          correntes de pensamento reformista que antecederam o materialismo histórico. O adjetivo
          "utópico" não significava necessariamente irrealista — significava que tais projetos derivavam
          de princípios morais abstratos (fraternidade, harmonia, bem comum) em vez de uma análise
          científica das contradições do modo de produção capitalista.
        </p>
        <p>
          <strong>Claude-Henri de Saint-Simon (1760–1825)</strong> foi o mais influente dos três. Para
          ele, a sociedade industrial requeria uma nova organização racional baseada na ciência e na
          técnica. Propunha que cientistas, engenheiros e industriais substituíssem a aristocracia ociosa
          no governo da sociedade. A ideia central era que a produção deveria ser planejada para o
          benefício coletivo, não para o lucro privado. Saint-Simon influenciou o positivismo de Auguste
          Comte e, indiretamente, a tradição da tecnocracia iluminada.
        </p>
        <p>
          <strong>Charles Fourier (1772–1837)</strong> propôs a organização da sociedade em falanstérios
          — comunidades autossuficientes de cerca de 1.500 pessoas que viveriam e trabalhariam
          coletivamente, rotacionando tarefas de acordo com as inclinações naturais de cada um. Fourier
          antecipou ideias sobre a divisão do trabalho e a alienação que Marx desenvolveria mais tarde,
          além de esboçar uma crítica pioneira do papel da família burguesa na subordinação das mulheres.
        </p>
        <p>
          <strong>Robert Owen (1771–1858)</strong> foi o único dos três que transformou suas ideias em
          experiências práticas. Como proprietário das fábricas de New Lanark (Escócia), Owen demonstrou
          que era possível reduzir a jornada de trabalho, proibir o trabalho infantil, construir moradias
          dignas para os operários e ainda obter lucro. Sua experiência atraiu visitantes de toda a Europa.
          Mais tarde, fundou a comunidade de New Harmony nos EUA (1825), que fracassou, e participou
          ativamente da organização dos primeiros sindicatos ingleses. Owen cunhou o próprio termo
          "socialismo" em sua acepção moderna.
        </p>
      </section>

      {/* ── SVG 1: DIAGRAMA COMPARANDO AS CORRENTES */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 760 320" width="100%" aria-label="Comparação entre socialismo utópico, científico e anarquismo">
          <rect width="760" height="320" fill="#f8f9fa" rx="10" />
          <text x="380" y="28" textAnchor="middle" fill="#212529" fontSize="14" fontWeight="bold">
            Correntes do Pensamento Socialista do Século XIX
          </text>

          {/* caixas principais */}
          {/* Socialismo Utópico */}
          <rect x="30" y="50" width="205" height="230" fill="#1971c2" rx="8" opacity="0.15" />
          <rect x="30" y="50" width="205" height="40" fill="#1971c2" rx="8" />
          <text x="133" y="66" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Socialismo Utópico</text>
          <text x="133" y="80" textAnchor="middle" fill="#d0ebff" fontSize="10">Saint-Simon, Fourier, Owen</text>
          <text x="45" y="108" fill="#1c3a5e" fontSize="10">• Reforma moral da sociedade</text>
          <text x="45" y="125" fill="#1c3a5e" fontSize="10">• Falanstérios e cooperativas</text>
          <text x="45" y="142" fill="#1c3a5e" fontSize="10">• Harmonia entre classes</text>
          <text x="45" y="159" fill="#1c3a5e" fontSize="10">• Sem análise das contradições</text>
          <text x="45" y="176" fill="#1c3a5e" fontSize="10">  do capital</text>
          <text x="45" y="200" fill="#1c3a5e" fontSize="10" fontStyle="italic">Método: exemplos práticos</text>
          <text x="45" y="216" fill="#1c3a5e" fontSize="10" fontStyle="italic">e apelos à razão</text>
          <text x="45" y="260" fill="#1c3a5e" fontSize="10">Estado: reforma gradual</text>

          {/* Socialismo Científico */}
          <rect x="277" y="50" width="205" height="230" fill="#2f9e44" rx="8" opacity="0.15" />
          <rect x="277" y="50" width="205" height="40" fill="#2f9e44" rx="8" />
          <text x="380" y="66" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Socialismo Científico</text>
          <text x="380" y="80" textAnchor="middle" fill="#b2f2bb" fontSize="10">Marx e Engels</text>
          <text x="292" y="108" fill="#1b4332" fontSize="10">• Materialismo histórico</text>
          <text x="292" y="125" fill="#1b4332" fontSize="10">• Luta de classes como motor</text>
          <text x="292" y="142" fill="#1b4332" fontSize="10">• Mais-valia e exploração</text>
          <text x="292" y="159" fill="#1b4332" fontSize="10">• Ditadura do proletariado</text>
          <text x="292" y="176" fill="#1b4332" fontSize="10">  como fase de transição</text>
          <text x="292" y="200" fill="#1b4332" fontSize="10" fontStyle="italic">Método: análise científica</text>
          <text x="292" y="216" fill="#1b4332" fontSize="10" fontStyle="italic">das estruturas econômicas</text>
          <text x="292" y="260" fill="#1b4332" fontSize="10">Estado: extingue-se no comunismo</text>

          {/* Anarquismo */}
          <rect x="524" y="50" width="205" height="230" fill="#c92a2a" rx="8" opacity="0.15" />
          <rect x="524" y="50" width="205" height="40" fill="#c92a2a" rx="8" />
          <text x="627" y="66" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Anarquismo</text>
          <text x="627" y="80" textAnchor="middle" fill="#ffc9c9" fontSize="10">Proudhon, Bakunin, Kropotkin</text>
          <text x="539" y="108" fill="#5c0a0a" fontSize="10">• Extinção imediata do Estado</text>
          <text x="539" y="125" fill="#5c0a0a" fontSize="10">• Federações voluntárias</text>
          <text x="539" y="142" fill="#5c0a0a" fontSize="10">• Anti-autoritarismo radical</text>
          <text x="539" y="159" fill="#5c0a0a" fontSize="10">• Recusa de partidos políticos</text>
          <text x="539" y="176" fill="#5c0a0a" fontSize="10">  e eleições</text>
          <text x="539" y="200" fill="#5c0a0a" fontSize="10" fontStyle="italic">Método: ação direta,</text>
          <text x="539" y="216" fill="#5c0a0a" fontSize="10" fontStyle="italic">greve geral, propaganda</text>
          <text x="539" y="260" fill="#5c0a0a" fontSize="10">Estado: deve ser abolido já</text>

          {/* ponto em comum */}
          <text x="380" y="305" textAnchor="middle" fill="#495057" fontSize="10">
            Todas as correntes criticam a propriedade privada dos meios de produção e a exploração capitalista
          </text>
        </svg>
        <figcaption>Síntese comparativa das três principais correntes do pensamento socialista oitocentista.</figcaption>
      </figure>

      {/* ── SEÇÃO 3 ── MARXISMO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>Socialismo científico: Marx, Engels e o materialismo histórico</h2>
        <p>
          Karl Marx (1818–1883) e Friedrich Engels (1820–1895) empreenderam a crítica mais sistemática e
          influente do capitalismo industrial. Sua obra combina filosofia (a dialética hegeliana
          materializada), economia política (a crítica de Ricardo e Smith) e teoria histórica (o
          materialismo histórico) em uma síntese que o próprio Marx chamou de "socialismo científico".
        </p>
        <p>
          <strong>Materialismo histórico.</strong> Para Marx, não são as ideias que determinam a história,
          mas as condições materiais de produção. A estrutura econômica de uma sociedade (as forças
          produtivas e as relações de produção) forma a base (infraestrutura) sobre a qual se erguem as
          instituições políticas, jurídicas, religiosas e culturais (superestrutura). As mudanças
          históricas ocorrem quando as forças produtivas em expansão entram em contradição com as relações
          de produção existentes, gerando revoluções sociais.
        </p>
        <p>
          <strong>Luta de classes.</strong> O <em>Manifesto Comunista</em> (1848) abre com a célebre
          afirmação: "A história de todas as sociedades até hoje existentes é a história da luta de
          classes." Na sociedade capitalista, essa luta opõe a burguesia (proprietária dos meios de
          produção) ao proletariado (que possui apenas sua força de trabalho). Marx via nessa contradição
          o motor da transformação histórica que levaria ao comunismo.
        </p>
        <p>
          <strong>Mais-valia.</strong> O conceito de mais-valia (Mehrwert) é o núcleo da teoria econômica
          marxista. O trabalhador recebe como salário apenas o valor necessário para reproduzir sua força
          de trabalho (valor de uso). Mas trabalha durante um tempo maior, gerando um excedente que o
          capitalista se apropria gratuitamente — a mais-valia. A acumulação de capital é, portanto, a
          acumulação de trabalho não pago. A exploração não é um abuso individual: é uma característica
          estrutural do modo de produção capitalista.
        </p>
        <p>
          <strong>Comunismo como fim da história.</strong> Para Marx, o capitalismo seria destruído por
          suas próprias contradições internas — crises periódicas de superprodução, concentração crescente
          da riqueza, pauperização do proletariado. O proletariado, como classe universal, tomaria o poder
          por meio da revolução, estabeleceria a ditadura do proletariado como fase de transição e, após
          a extinção das classes sociais, chegaria ao comunismo — sociedade sem Estado, sem classes e sem
          exploração, regida pelo princípio "de cada um segundo suas capacidades, a cada um segundo suas
          necessidades".
        </p>
      </section>

      {/* ── TABELA 1: CONCEITOS MARXISTAS */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>Conceitos fundamentais do marxismo</caption>
          <thead>
            <tr>
              <th>Conceito</th>
              <th>Definição sintética</th>
              <th>Aplicação histórica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Materialismo histórico</td>
              <td>As condições materiais de produção determinam a história</td>
              <td>A indústria gera o capitalismo e o proletariado</td>
            </tr>
            <tr>
              <td>Luta de classes</td>
              <td>Conflito entre proprietários dos meios de produção e trabalhadores</td>
              <td>Burguesia vs. proletariado no capitalismo industrial</td>
            </tr>
            <tr>
              <td>Mais-valia</td>
              <td>Trabalho excedente apropriado gratuitamente pelo capitalista</td>
              <td>Fundamento da exploração e da acumulação capitalista</td>
            </tr>
            <tr>
              <td>Infraestrutura</td>
              <td>Base econômica (forças + relações de produção)</td>
              <td>Modo de produção capitalista industrial</td>
            </tr>
            <tr>
              <td>Superestrutura</td>
              <td>Política, direito, religião, cultura — determinados pela base</td>
              <td>Estado burguês defende os interesses do capital</td>
            </tr>
            <tr>
              <td>Ditadura do proletariado</td>
              <td>Fase de transição entre capitalismo e comunismo</td>
              <td>Revolução Russa (1917) como tentativa histórica</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 4 ── ANARQUISMO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>Anarquismo: Proudhon e Bakunin</h2>
        <p>
          O anarquismo partilha com o marxismo a crítica à propriedade privada capitalista e à exploração
          do trabalho, mas diverge radicalmente na questão do Estado e da estratégia revolucionária.
          Enquanto Marx aceita o Estado como instrumento transitório da revolução proletária, os
          anarquistas veem no Estado — qualquer Estado — um instrumento de dominação a ser abolido
          imediatamente.
        </p>
        <p>
          <strong>Pierre-Joseph Proudhon (1809–1865)</strong> foi o primeiro a se autodeclarar
          "anarquista". Sua afirmação "a propriedade é um roubo" sintetizou a crítica à apropriação
          privada de bens produzidos coletivamente. Proudhon defendia o mutualismos: associações
          voluntárias de trabalhadores que trocavam produtos e serviços a preço de custo, sem lucro e
          sem intermediários capitalistas. Era um reformista — acreditava que a transformação social
          poderia ocorrer sem revolução violenta, por meio do crédito mútuo e da organização cooperativa.
        </p>
        <p>
          <strong>Mikhail Bakunin (1814–1876)</strong> representou a tendência coletivista e
          revolucionária do anarquismo. Russo de origem aristocrática convertido ao revolucionarismo
          radical, Bakunin acreditava que a revolução deveria ser imediata, total e violenta. Sua
          oposição a Marx na I Internacional (AIT) foi épica: enquanto Marx defendia a organização de
          um partido político operário para tomar o poder estatal, Bakunin insistia que qualquer partido
          que tomasse o Estado seria corrompido por ele e reproduziria a dominação. A ruptura entre
          marxistas e bakuninistas na I Internacional (1872) foi irreversível.
        </p>
        <p>
          <strong>Piotr Kropotkin (1842–1921)</strong> elaborou o anarco-comunismo: após a revolução,
          a sociedade seria organizada em federações voluntárias de comunas autogestionadas, sem
          propriedade privada nem Estado central. Kropotkin baseou-se na biologia evolutiva para
          argumentar que a cooperação (e não a competição darwiniana) era o princípio dominante na
          natureza — e deveria sê-lo na sociedade humana.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── I INTERNACIONAL E COMUNA DE PARIS */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>A I Internacional e a Comuna de Paris</h2>
        <p>
          A Associação Internacional dos Trabalhadores (AIT), fundada em Londres em 1864, foi a primeira
          tentativa de organizar politicamente o proletariado em escala internacional. Reuniu marxistas,
          proudhonistas, bakuninistas, blanquistas e sindicalistas em uma federação que, a despeito de
          suas contradições internas, representou um marco na história do movimento operário.
        </p>
        <p>
          A I Internacional foi dissolvida de facto após a derrota da Comuna de Paris (1871) e as
          dissensões entre Marx e Bakunin. Marx transferiu sua sede para Nova York em 1872 — medida
          deliberada para evitar que os bakuninistas se apoderassem dela — e ela se dissolveu
          formalmente em 1876.
        </p>
        <p>
          <strong>A Comuna de Paris (18 de março a 28 de maio de 1871)</strong> foi o episódio mais
          radical e dramático da história operária do século XIX. Após a derrota da França na Guerra
          Franco-Prussiana e a humilhante rendição de Napoleão III, os parisienses — operários,
          artesãos, guardas nacionais — recusaram-se a aceitar a entrega das armas exigida pelo governo
          provisional de Versalhes e proclamaram a autogestão da cidade. Durante 72 dias, a Comuna
          implantou medidas avançadíssimas: separação entre Igreja e Estado, educação laica e gratuita,
          condonação dos aluguéis atrasados, autogestão operária das fábricas abandonadas pelos
          proprietários, abolição do trabalho noturno nas padarias, eleição de todos os funcionários
          públicos com mandato revogável e salário de operário.
        </p>
        <p>
          A repressão ("Semana Sangrenta", 21–28 de maio de 1871) foi brutal: tropas de Versalhes
          mataram entre 10.000 e 30.000 comunardos e deportaram outros 7.500 para a Nova Caledônia.
          Marx viu na Comuna o primeiro exemplo histórico da "ditadura do proletariado". Bakunin
          a enxergou como confirmação da viabilidade da autogestão federalista anarquista. A repressão
          da Comuna adiou por décadas a possibilidade de um governo operário na Europa Ocidental.
        </p>
      </section>

      {/* ── SVG 2: LINHA DO TEMPO DOS MOVIMENTOS DE 1848 */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 760 240" width="100%" aria-label="Linha do tempo das revoluções de 1848 e movimentos do século XIX">
          <rect width="760" height="240" fill="#f8f9fa" rx="10" />
          <text x="380" y="25" textAnchor="middle" fill="#212529" fontSize="13" fontWeight="bold">
            Movimentos Sociais e Políticos do Século XIX — Linha do Tempo
          </text>

          {/* linha central */}
          <line x1="40" y1="120" x2="720" y2="120" stroke="#495057" strokeWidth="3" />
          <polygon points="720,115 732,120 720,125" fill="#495057" />

          {/* eventos */}
          {/* Manifesto Comunista 1848 */}
          <circle cx="130" cy="120" r="7" fill="#1971c2" />
          <line x1="130" y1="113" x2="130" y2="60" stroke="#1971c2" strokeWidth="1.5" strokeDasharray="4,2" />
          <rect x="60" y="38" width="145" height="24" fill="#1971c2" rx="4" />
          <text x="133" y="50" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Manifesto Comunista</text>
          <text x="133" y="62" textAnchor="middle" fill="white" fontSize="8">1848</text>
          <text x="130" y="138" textAnchor="middle" fill="#495057" fontSize="8">Primavera dos Povos</text>

          {/* I Internacional 1864 */}
          <circle cx="270" cy="120" r="7" fill="#2f9e44" />
          <line x1="270" y1="127" x2="270" y2="180" stroke="#2f9e44" strokeWidth="1.5" strokeDasharray="4,2" />
          <rect x="200" y="180" width="140" height="24" fill="#2f9e44" rx="4" />
          <text x="270" y="192" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">I Internacional (AIT)</text>
          <text x="270" y="204" textAnchor="middle" fill="white" fontSize="8">1864</text>

          {/* Comuna de Paris 1871 */}
          <circle cx="400" cy="120" r="7" fill="#c92a2a" />
          <line x1="400" y1="113" x2="400" y2="55" stroke="#c92a2a" strokeWidth="1.5" strokeDasharray="4,2" />
          <rect x="330" y="33" width="140" height="24" fill="#c92a2a" rx="4" />
          <text x="400" y="45" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Comuna de Paris</text>
          <text x="400" y="57" textAnchor="middle" fill="white" fontSize="8">1871 (72 dias)</text>
          <text x="400" y="138" textAnchor="middle" fill="#495057" fontSize="8">Repressão sangrenta</text>

          {/* Ruptura AIT 1872 */}
          <circle cx="450" cy="120" r="5" fill="#e67700" />
          <line x1="450" y1="127" x2="450" y2="175" stroke="#e67700" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="450" y="188" textAnchor="middle" fill="#e67700" fontSize="8">Ruptura Marx/Bakunin 1872</text>

          {/* II Internacional 1889 */}
          <circle cx="560" cy="120" r="7" fill="#7048e8" />
          <line x1="560" y1="113" x2="560" y2="58" stroke="#7048e8" strokeWidth="1.5" strokeDasharray="4,2" />
          <rect x="490" y="36" width="145" height="24" fill="#7048e8" rx="4" />
          <text x="563" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">II Internacional</text>
          <text x="563" y="60" textAnchor="middle" fill="white" fontSize="8">1889 / 1º de Maio</text>

          {/* Bernstein revisionismo 1899 */}
          <circle cx="670" cy="120" r="6" fill="#495057" />
          <line x1="670" y1="127" x2="670" y2="175" stroke="#495057" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="670" y="188" textAnchor="middle" fill="#495057" fontSize="8">Revisionismo Bernstein</text>
          <text x="670" y="198" textAnchor="middle" fill="#495057" fontSize="8">1899</text>

          {/* rótulos de datas */}
          <text x="130" y="215" textAnchor="middle" fill="#868e96" fontSize="9">1848</text>
          <text x="270" y="215" textAnchor="middle" fill="#868e96" fontSize="9">1864</text>
          <text x="400" y="215" textAnchor="middle" fill="#868e96" fontSize="9">1871</text>
          <text x="560" y="215" textAnchor="middle" fill="#868e96" fontSize="9">1889</text>
          <text x="670" y="215" textAnchor="middle" fill="#868e96" fontSize="9">1899</text>
        </svg>
        <figcaption>Cronologia dos principais marcos do movimento operário e socialista do século XIX.</figcaption>
      </figure>

      {/* ── SEÇÃO 6 ── AS INSURREIÇÕES DE 1848 */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>As insurreições de 1848: a Primavera dos Povos</h2>
        <p>
          O ano de 1848 foi o mais revolucionário da história europeia do século XIX. Entre fevereiro e
          dezembro daquele ano, insurreições simultâneas sacudiram França, Prússia, Áustria, Hungria,
          Itália, Polônia e dezenas de outros territórios. O fenômeno, denominado retrospectivamente
          "Primavera dos Povos", articulou de forma inédita três agendas distintas: o liberalismo
          político (constituições e parlamentos), o nacionalismo (unificação de alemães e italianos,
          independência de húngaros e poloneses) e o radicalismo social (demandas operárias por melhores
          condições de trabalho).
        </p>
        <p>
          <strong>França.</strong> A Revolução de Fevereiro derrubou a monarquia de Luís Filipe e
          proclamou a Segunda República. O governo provisório, pressionado pelos operários parisienses,
          estabeleceu as Oficinas Nacionais (ateliers nationaux) para absorver o desemprego — uma espécie
          de programa de emprego público radical para a época. As eleições de abril, nas quais o
          sufrágio universal masculino foi aplicado pela primeira vez, resultaram em uma maioria
          conservadora rural que fechou as Oficinas em junho. A reação operária (as Jornadas de Junho)
          foi sangrenta: o general Cavaignac massacrou milhares de trabalhadores nas ruas de Paris. Em
          dezembro, Luís Napoleão Bonaparte foi eleito presidente — e em 1851 deu um golpe de Estado.
        </p>
        <p>
          <strong>A lição de 1848.</strong> Para Marx, a derrota das revoluções de 1848 demonstrou a
          incapacidade da burguesia liberal de liderar uma transformação democrática genuína: diante da
          ameaça operária, a burguesia preferia o bonapartismo autoritário à democracia. Isso reforçou
          sua convicção de que o proletariado precisava de um partido próprio, independente das alianças
          com a burguesia.
        </p>
      </section>

      {/* ── TABELA 2: INSURREIÇÕES DE 1848 */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>As principais revoluções de 1848 na Europa</caption>
          <thead>
            <tr>
              <th>País / Região</th>
              <th>Principal demanda</th>
              <th>Resultado imediato</th>
              <th>Desfecho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>França</td>
              <td>República e direitos sociais</td>
              <td>Proclamação da 2ª República</td>
              <td>Golpe de Napoleão III (1851)</td>
            </tr>
            <tr>
              <td>Prússia / Alemanha</td>
              <td>Unificação nacional e constituição</td>
              <td>Parlamento de Frankfurt</td>
              <td>Dissolução; unificação só em 1871</td>
            </tr>
            <tr>
              <td>Áustria / Hungria</td>
              <td>Autonomia nacional húngara</td>
              <td>Revolução de Março em Viena</td>
              <td>Repressão com apoio russo</td>
            </tr>
            <tr>
              <td>Itália</td>
              <td>Expulsão dos austríacos e unificação</td>
              <td>Revoltas em Milão e Veneza</td>
              <td>Derrota; unificação em 1861</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 7 ── SINDICALISMO E II INTERNACIONAL */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>Sindicalismo, II Internacional e revisionismo</h2>
        <p>
          A derrota das revoluções de 1848 e da Comuna de Paris não extinguiu o movimento operário:
          canalizou suas energias para formas de organização mais duráveis e institucionalizadas. O
          sindicalismo moderno emergiu como a forma dominante de organização dos trabalhadores na segunda
          metade do século XIX, especialmente na Inglaterra e nos EUA.
        </p>
        <p>
          <strong>A II Internacional (1889–1916)</strong> foi fundada em Paris, no centenário da
          Revolução Francesa. Reuniu partidos socialistas de dezenas de países sob uma plataforma comum:
          jornada de oito horas, sufrágio universal, paz e internacionalismo proletário. O 1º de Maio
          como Dia Internacional do Trabalho foi instituído pela II Internacional em 1889, em memória
          dos mártires de Chicago (Haymarket, 1886).
        </p>
        <p>
          <strong>Eduard Bernstein e o revisionismo.</strong> O teórico alemão Eduard Bernstein
          (1850–1932) publicou em 1899 <em>Premissas do Socialismo e as Tarefas da Social-Democracia</em>,
          obra que sacudiu o mundo socialista. Bernstein argumentava que as previsões marxistas de
          colapso inevitável do capitalismo estavam erradas: o capitalismo havia se demonstrado mais
          resiliente do que Marx previra, os salários estavam subindo, a classe média crescia e os
          parlamentos podiam ser usados para reformas sociais graduais. Propôs, portanto, a via
          reformista e parlamentar ao socialismo — a social-democracia. A frase-síntese: "o movimento
          é tudo, o objetivo final nada".
        </p>
        <p>
          O revisionismo de Bernstein abriu uma cisão duradoura entre social-democratas reformistas e
          socialistas revolucionários — cisão que se tornaria traumática com a Revolução Russa de 1917
          e que ainda estrutura o debate político entre esquerda reformista e esquerda revolucionária.
        </p>
      </section>

      {/* ── TABELA 3: INTERNACIONAIS OPERÁRIAS */}
      <div className="lesson-table-wrap">
        <table className="lesson-table">
          <caption>As Internacionais Operárias do século XIX e início do XX</caption>
          <thead>
            <tr>
              <th>Internacional</th>
              <th>Fundação</th>
              <th>Correntes</th>
              <th>Fim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I Internacional (AIT)</td>
              <td>Londres, 1864</td>
              <td>Marxistas, bakuninistas, proudhonistas</td>
              <td>Dissolvida em 1876 (cisão Marx/Bakunin)</td>
            </tr>
            <tr>
              <td>II Internacional</td>
              <td>Paris, 1889</td>
              <td>Partidos socialistas e social-democratas</td>
              <td>Crise com a I Guerra Mundial (1914)</td>
            </tr>
            <tr>
              <td>III Internacional (Komintern)</td>
              <td>Moscou, 1919</td>
              <td>Partidos comunistas (pós-Revolução Russa)</td>
              <td>Dissolvida por Stálin em 1943</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── SEÇÃO 8 ── LEGADO */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>Legado dos movimentos sociais do século XIX</h2>
        <p>
          Os movimentos sociais do século XIX produziram conquistas concretas que ainda estruturam as
          sociedades contemporâneas: a jornada de oito horas (conquistada em muitos países no início do
          século XX), o sufrágio universal, a legislação trabalhista protetora, os sistemas de saúde e
          previdência social, o direito à greve e à organização sindical. Sem as lutas do século XIX,
          o capitalismo do século XX teria uma face muito mais brutal.
        </p>
        <p>
          Ao mesmo tempo, os limites e tragédias desses movimentos são igualmente instrutivos. A
          Revolução Russa de 1917, que pretendia realizar o programa marxista, gerou o stalinismo. As
          social-democracias europeias, ao integrarem-se ao sistema capitalista, perderam progressivamente
          seu impulso transformador. O anarquismo, nunca conseguindo superar o Estado, permaneceu como
          crítica filosófica mais do que como projeto político realizável.
        </p>
        <p>
          Para o ENEM, o fundamental é compreender as diferenças entre as correntes (socialismo utópico
          x científico, marxismo x anarquismo, reformismo x revolução), os eventos históricos que as
          materializaram (1848, Comuna de Paris, II Internacional) e as conexões com o presente
          (movimentos sindicais, partidos de esquerda, Estado de bem-estar social).
        </p>
      </section>

      {/* ── SEÇÃO 9 ── DICA ENEM */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 9</span>
        <h2>Pontos críticos para o ENEM</h2>
        <div className="lesson-highlight">
          <p>
            O ENEM frequentemente apresenta excertos do <em>Manifesto Comunista</em>, de relatos sobre
            a Comuna de Paris ou de documentos sindicais do século XIX, pedindo que o estudante
            identifique a corrente ideológica, o contexto histórico ou as contradições internas do
            movimento operário.
          </p>
          <p>
            Atenção especial para: (1) a distinção entre socialismo utópico e científico — não é uma
            questão de "ingenuidade" vs. "inteligência", mas de método (moral x análise estrutural);
            (2) o antagonismo Marx/Bakunin sobre o papel do Estado; (3) a Comuna de Paris como primeiro
            governo operário e seus avanços democráticos; (4) o revisionismo como origem da social-
            democracia contemporânea; (5) a II Internacional e o 1º de Maio.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <Exercise
        level="Básico"
        title="Socialismo utópico e científico"
        statement="Marx e Engels denominaram 'utópico' o socialismo de Saint-Simon, Fourier e Owen em oposição ao seu próprio 'socialismo científico'. A principal distinção entre essas correntes reside em:"
        options={[
          { letter: "A", text: "O socialismo utópico propunha a revolução violenta, enquanto o científico defendia a reforma gradual por meio de eleições." },
          { letter: "B", text: "O socialismo utópico derivava suas propostas de princípios morais abstratos (harmonia, justiça), enquanto o científico baseava-se na análise das contradições estruturais do modo de produção capitalista.", correct: true },
          { letter: "C", text: "O socialismo utópico era de origem francesa, enquanto o científico era exclusivamente alemão e não tinha seguidores em outros países." },
          { letter: "D", text: "O socialismo utópico defendia a propriedade privada dos meios de produção, enquanto o científico propunha a coletivização imediata." },
          { letter: "E", text: "O socialismo utópico surgiu antes da Revolução Industrial, enquanto o científico só foi possível após a consolidação do capitalismo industrial." },
        ]}
        resolution="A distinção fundamental não é cronológica nem geográfica, mas metodológica: os utópicos partiam de princípios morais (o que 'deveria' ser a sociedade ideal) e propunham reformas baseadas no exemplo ou na persuasão. Marx e Engels, ao contrário, pretendiam partir da análise científica das leis do desenvolvimento histórico e econômico — o materialismo histórico — para demonstrar que o comunismo era uma necessidade histórica objetiva, não apenas um ideal desejável."
      />

      <Exercise
        level="Intermediário"
        title="O antagonismo Marx e Bakunin"
        statement="A cisão entre Karl Marx e Mikhail Bakunin na I Internacional (AIT) em 1872 representou a separação definitiva entre marxismo e anarquismo. O ponto central do conflito era:"
        options={[
          { letter: "A", text: "A questão do trabalho infantil: Marx aceitava-o como fase transitória necessária, enquanto Bakunin o proibia absolutamente." },
          { letter: "B", text: "O papel do Estado na transição para o socialismo: Marx defendia a conquista do poder estatal pelo proletariado como fase necessária, enquanto Bakunin exigia a abolição imediata do Estado.", correct: true },
          { letter: "C", text: "A origem social dos revolucionários: Marx defendia que apenas operários podiam liderar a revolução, enquanto Bakunin incluía camponeses e intelectuais." },
          { letter: "D", text: "A questão nacional: Marx era internacionalista, enquanto Bakunin defendia que cada nação deveria construir seu próprio socialismo de forma isolada." },
          { letter: "E", text: "A propriedade dos meios de produção: Marx propunha a estatização total, enquanto Bakunin defendia a propriedade privada individual dos trabalhadores." },
        ]}
        resolution="O ponto central era a questão do Estado. Marx argumentava que o proletariado precisava conquistar o poder estatal e usá-lo como instrumento de transição (ditadura do proletariado) antes de o Estado se extinguir. Bakunin contra-argumentava que o poder corrompe inevitavelmente — qualquer grupo que controlasse o Estado o usaria para dominar os demais, mesmo que fossem operários. Por isso exigia a abolição imediata do Estado, sem fase de transição. Essa divergência estratégica permanece estruturante no pensamento político de esquerda."
      />

      <Exercise
        level="Avançado"
        title="A Comuna de Paris: diferentes interpretações"
        statement="A Comuna de Paris (1871) foi interpretada de maneiras distintas por Marx e por Bakunin, apesar de ambos a apoiarem. Qual afirmação melhor representa essa diferença interpretativa?"
        options={[
          { letter: "A", text: "Marx via a Comuna como um fracasso que confirmava a impossibilidade da revolução operária na Europa, enquanto Bakunin a celebrava como vitória definitiva do anarquismo." },
          { letter: "B", text: "Marx interpretou a Comuna como exemplo de 'ditadura do proletariado' — um Estado operário transitório —, enquanto Bakunin a via como confirmação da viabilidade da federação anarquista autogestionada, sem Estado central.", correct: true },
          { letter: "C", text: "Marx e Bakunin concordavam que a Comuna foi um erro tático, pois deveria ter esperado o momento histórico mais favorável para a revolução." },
          { letter: "D", text: "Bakunin acusou Marx de ter organizado a Comuna de Paris para destruí-la por dentro e enfraquecer o movimento anarquista europeu." },
          { letter: "E", text: "Marx via a Comuna como uma experiência socialista-utópica que confirmava a inadequação do falanstério proudhoniano, enquanto Bakunin a defendia como modelo marxista bem-sucedido." },
        ]}
        resolution="A Comuna de Paris foi suficientemente ambígua para ser reivindicada por correntes opostas. Marx — analisando-a em 'A Guerra Civil na França' (1871) — a interpretou como o primeiro exemplo histórico de ditadura do proletariado: o Estado burguês fora 'quebrado' e substituído por formas de poder operário (mandatos revogáveis, salário de operário para funcionários eleitos). Bakunin, ao contrário, via na ausência de um poder central forte e na organização descentralizada e autogestionada da Comuna a confirmação do modelo federalista anarquista. Ambos usaram a mesma experiência para validar visões opostas."
      />

      <Exercise
        level="Contextualizado"
        title="Revisionismo e social-democracia contemporânea"
        statement='(ENEM adaptado) "O movimento operário não deveria prender-se a um objetivo final fixo e catastrófico, mas sim reformar progressivamente o capitalismo por meio de legislações sociais, extensão do sufrágio e conquistas sindicais. O caminho é o que conta." Esse trecho sintetiza o pensamento de Eduard Bernstein. Qual das afirmativas abaixo relaciona corretamente o revisionismo bernsteiniano com a história política do século XX?'
        options={[
          { letter: "A", text: "O revisionismo de Bernstein inspirou diretamente a Revolução Bolchevique de 1917, que optou pela via gradual e parlamentar ao socialismo." },
          { letter: "B", text: "O pensamento de Bernstein deu origem à tradição social-democrata, que no século XX construiu os Estados de bem-estar social (welfare state) na Europa Ocidental sem romper com o capitalismo.", correct: true },
          { letter: "C", text: "O revisionismo foi adotado pelos partidos comunistas da III Internacional como alternativa ao leninismo após a morte de Stálin." },
          { letter: "D", text: "Bernstein influenciou o pensamento anarquista, levando-o a abandonar a proposta de extinção do Estado em favor da reforma parlamentar gradual." },
          { letter: "E", text: "A social-democracia bernsteiniana é incompatível com o capitalismo e propõe a socialização dos meios de produção como objetivo imediato." },
        ]}
        resolution="O revisionismo de Bernstein é a matriz ideológica da social-democracia europeia do século XX. Partidos como o SPD alemão, o Labour britânico e os socialistas escandinavos adotaram a via parlamentar e reformista, construindo — especialmente após a Segunda Guerra Mundial — os Estados de bem-estar social: sistemas universais de saúde, educação pública, previdência social e legislação trabalhista protetora. Isso foi feito dentro do capitalismo, sem expropriar os meios de produção. A Revolução Russa (alternativa A) seguiu o caminho oposto — o leninismo revolucionário."
      />

      <Exercise
        level="Contextualizado"
        title="O 1º de Maio e a memória operária"
        statement='O Dia Internacional do Trabalho, celebrado em 1º de maio, foi instituído pela II Internacional Socialista em 1889 em homenagem a trabalhadores executados em Chicago em 1886, após o episódio conhecido como "Caso Haymarket". Qual aspecto desse processo histórico é mais relevante para compreender a memória e a identidade do movimento operário global?'
        options={[
          { letter: "A", text: "O fato de que os mártires de Chicago eram imigrantes anarquistas demonstra que o movimento operário norte-americano era dominado por estrangeiros anti-americanos." },
          { letter: "B", text: "A instituição de um dia comemorativo internacional ilustra como os movimentos sociais constroem identidade coletiva transnacional por meio da memória compartilhada de sacrifícios e lutas comuns.", correct: true },
          { letter: "C", text: "A homenagem da II Internacional aos mártires de Chicago prova que o socialismo europeu era controlado pelo anarquismo norte-americano." },
          { letter: "D", text: "O Caso Haymarket demonstrou a impossibilidade de qualquer forma de organização operária nos países capitalistas avançados, forçando os trabalhadores a emigrar." },
          { letter: "E", text: "A II Internacional escolheu o 1º de maio exclusivamente por razões astronômicas — o início do verão no hemisfério norte — sem relação com eventos históricos específicos." },
        ]}
        resolution="A instituição do 1º de Maio como data comemorativa internacional é um exemplo paradigmático da construção de identidade coletiva por meio da memória histórica. Ao vincular a data ao sacrifício dos trabalhadores de Chicago, a II Internacional criou um símbolo de solidariedade transnacional que transcende fronteiras nacionais e linguísticas. A memória coletiva de lutas e mártires é um dos principais mecanismos pelos quais os movimentos sociais constroem coesão identitária e transmitem valores entre gerações."
      />
    </article>
  );
}
