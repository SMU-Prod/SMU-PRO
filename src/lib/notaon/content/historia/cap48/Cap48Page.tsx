"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap48Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 48</span>
          <h1>Revisão Geral de História para o ENEM</h1>
          <p>
            Este capítulo é diferente de todos os outros: não acrescenta conteúdo novo, mas
            organiza estrategicamente o que foi estudado nos 12 módulos do curso. O ENEM cobra
            História através de eixos temáticos transversais que atravessam períodos e culturas,
            não por uma sequência cronológica linear. Aqui você encontrará uma síntese de cada
            eixo temático, as armadilhas mais comuns nas questões, dicas de interpretação de
            fontes históricas e estratégias de prova comprovadas — tudo consolidado em 10
            exercícios que cobrem pelo menos 5 módulos distintos do curso, do Brasil colonial
            às questões contemporâneas. Use este capítulo como revisão final estratégica.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura da Prova</span>
        <h2>1. Como o ENEM cobra História: competências, habilidades e tipos de questão</h2>
        <p>
          O ENEM organiza a área de Ciências Humanas em seis competências e 30 habilidades.
          História concentra-se principalmente nas competências <strong>C2</strong> (tempo
          histórico — processos de mudança e permanência), <strong>C4</strong> (diversidade
          cultural — África, indígenas, alteridade) e <strong>C5</strong> (cidadania e direitos
          humanos). Cada questão é associada a uma habilidade específica (H1 a H30), o que
          permite identificar padrões de cobrança ao longo dos anos.
        </p>
        <p>
          O ENEM raramente pede a memorização isolada de datas ou nomes: ele quer que o
          candidato <strong>interprete fontes</strong>, <strong>relacione causas e
          consequências</strong>, <strong>reconheça continuidades e rupturas</strong> e
          <strong> articule passado e presente</strong>. Uma questão típica apresenta um texto,
          charge ou tabela histórica e pede que o candidato identifique o argumento central da
          fonte, o contexto que a torna inteligível ou a herança histórica que ela revela.
        </p>
        <p>
          Os quatro tipos mais frequentes de questão são: (1) <strong>análise documental</strong>
          — interpretar o que uma fonte diz, implica ou omite; (2) <strong>contextualização
          histórica</strong> — situar a fonte em seu período e relacioná-la ao contexto;
          (3) <strong>relação passado-presente</strong> — identificar a herança histórica em
          situações contemporâneas; e (4) <strong>comparação entre processos</strong> — encontrar
          semelhanças e diferenças entre eventos, períodos ou sociedades distintas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 320" width="760" height="320" aria-label="Mapa mental dos 12 módulos do curso de História">
            <rect x="0" y="0" width="760" height="320" fill="#f0f4ff" rx="10"/>
            <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1a2e">Mapa Mental — 12 Módulos do Curso de História</text>

            {/* Centro */}
            <circle cx="380" cy="165" r="48" fill="#1a1a2e"/>
            <text x="380" y="158" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">HISTÓRIA</text>
            <text x="380" y="175" textAnchor="middle" fontSize="10" fill="#aaa">ENEM</text>

            {/* Módulo 1 — Metodologia */}
            <circle cx="195" cy="62" r="34" fill="#4361ee"/>
            <text x="195" y="57" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 1</text>
            <text x="195" y="70" textAnchor="middle" fontSize="7" fill="#d0d8ff">Metodologia</text>
            <line x1="228" y1="79" x2="337" y2="129" stroke="#4361ee" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 2 — Antiguidade */}
            <circle cx="80" cy="142" r="34" fill="#3a0ca3"/>
            <text x="80" y="137" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 2</text>
            <text x="80" y="150" textAnchor="middle" fontSize="7" fill="#c8c0ff">Antiguidade</text>
            <line x1="114" y1="149" x2="334" y2="158" stroke="#3a0ca3" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 3 — Medievo */}
            <circle cx="105" cy="240" r="34" fill="#7209b7"/>
            <text x="105" y="235" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 3</text>
            <text x="105" y="248" textAnchor="middle" fontSize="7" fill="#e0b0ff">Medievo</text>
            <line x1="137" y1="233" x2="346" y2="190" stroke="#7209b7" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 4 — Brasil Colonial */}
            <circle cx="235" cy="290" r="34" fill="#f72585"/>
            <text x="235" y="285" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 4</text>
            <text x="235" y="298" textAnchor="middle" fontSize="7" fill="#ffe0f0">Brasil Colonial</text>
            <line x1="255" y1="258" x2="358" y2="204" stroke="#f72585" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 5 — Revoluções */}
            <circle cx="380" cy="300" r="34" fill="#b5179e"/>
            <text x="380" y="295" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 5</text>
            <text x="380" y="308" textAnchor="middle" fontSize="7" fill="#f0c0f0">Revoluções</text>
            <line x1="380" y1="266" x2="380" y2="213" stroke="#b5179e" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 6 — Imperialismo */}
            <circle cx="525" cy="290" r="34" fill="#480ca8"/>
            <text x="525" y="285" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 6</text>
            <text x="525" y="298" textAnchor="middle" fontSize="7" fill="#d0c0ff">Imperialismo</text>
            <line x1="505" y1="258" x2="402" y2="204" stroke="#480ca8" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 7 — Guerras Mundiais */}
            <circle cx="655" cy="240" r="34" fill="#023e8a"/>
            <text x="655" y="235" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 7</text>
            <text x="655" y="248" textAnchor="middle" fontSize="7" fill="#b0c8ff">Guerras Mundiais</text>
            <line x1="623" y1="233" x2="414" y2="190" stroke="#023e8a" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 8 — Guerra Fria */}
            <circle cx="680" cy="142" r="34" fill="#e63946"/>
            <text x="680" y="137" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 8</text>
            <text x="680" y="150" textAnchor="middle" fontSize="7" fill="#ffe0e0">Guerra Fria</text>
            <line x1="646" y1="149" x2="426" y2="158" stroke="#e63946" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 9 — Era Vargas */}
            <circle cx="565" cy="62" r="34" fill="#457b9d"/>
            <text x="565" y="57" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 9</text>
            <text x="565" y="70" textAnchor="middle" fontSize="7" fill="#d0e8f8">Brasil República</text>
            <line x1="532" y1="79" x2="423" y2="129" stroke="#457b9d" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 10 — Ditadura */}
            <circle cx="318" cy="38" r="34" fill="#2d6a4f"/>
            <text x="318" y="33" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 10</text>
            <text x="318" y="46" textAnchor="middle" fontSize="7" fill="#d0ffe0">Ditadura/Redemocr.</text>
            <line x1="338" y1="71" x2="362" y2="118" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 11 — DH */}
            <circle cx="455" cy="38" r="34" fill="#6a994e"/>
            <text x="455" y="33" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">Módulo 11</text>
            <text x="455" y="46" textAnchor="middle" fontSize="7" fill="#e0f0d0">Direitos Humanos</text>
            <line x1="435" y1="70" x2="398" y2="118" stroke="#6a994e" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Módulo 12 — Globalização */}
            <text x="380" y="296" textAnchor="middle" fontSize="8" fill="#999" fontStyle="italic">Módulo 12: Globalização e Brasil Contemporâneo</text>
          </svg>
          <figcaption>Mapa mental dos 12 módulos do curso de História — cada módulo conecta-se ao núcleo central das competências do ENEM em Ciências Humanas.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 1 — Formação do Brasil</span>
        <h2>2. Eixo 1: Formação histórica do Brasil — colônia, império e república</h2>
        <p>
          A formação histórica do Brasil é o eixo mais cobrado no ENEM. Começa com a chegada
          dos portugueses em 1500, mas o que importa não é a data — é o processo: a colonização
          como projeto sistemático de exploração que assentou no escravismo africano, na
          destruição das culturas indígenas e na exportação de riquezas para a metrópole.
          O ciclo do açúcar (Nordeste, séculos XVI–XVII), o ciclo do ouro (Minas Gerais,
          século XVIII) e o ciclo do café (São Paulo, séculos XIX–XX) estruturaram economias
          regionais distintas com base no trabalho compulsório.
        </p>
        <p>
          O <strong>Império (1822–1889)</strong> manteve a escravidão e o latifúndio: a
          Independência foi uma ruptura política que preservou a estrutura social colonial.
          A <strong>República Velha (1889–1930)</strong> foi dominada pelos grandes
          cafeicultores paulistas e mineiros (política do café com leite), excluindo a maioria
          da população da participação política. A <strong>Era Vargas (1930–1945 e 1950–1954)</strong>
          industrializou o Brasil e criou a legislação trabalhista (CLT), mas num contexto
          autoritário. O período democrático (1945–1964) foi interrompido pelo golpe militar
          que instaurou uma ditadura de 21 anos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Anos</th>
                <th>Característica central</th>
                <th>Herança para o presente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Colonial</td>
                <td>1500–1822</td>
                <td>Escravidão africana, exploração, genocídio indígena</td>
                <td>Racismo estrutural, desigualdade fundiária</td>
              </tr>
              <tr>
                <td>Império</td>
                <td>1822–1889</td>
                <td>Monarquia constitucional; escravidão mantida até 1888</td>
                <td>Abolição sem integração; concentração de terra</td>
              </tr>
              <tr>
                <td>República Velha</td>
                <td>1889–1930</td>
                <td>Oligarquias cafeeiras; voto de cabresto; exclusão política</td>
                <td>Clientelismo; cultura de desconfiança nas instituições</td>
              </tr>
              <tr>
                <td>Era Vargas</td>
                <td>1930–1945 / 1950–54</td>
                <td>Industrialização; CLT; populismo; autoritarismo</td>
                <td>Legislação trabalhista; identidade nacional; Estado industrial</td>
              </tr>
              <tr>
                <td>Ditadura Militar</td>
                <td>1964–1985</td>
                <td>Supressão de direitos, tortura, censura, "milagre" econômico</td>
                <td>Dívida externa; memória traumática; impunidade (anistia)</td>
              </tr>
              <tr>
                <td>Nova República</td>
                <td>1985–presente</td>
                <td>CF/88; democracia; desigualdade persistente</td>
                <td>Desafios da consolidação democrática e redução da desigualdade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 2 — Escravidão e Raça</span>
        <h2>3. Eixo 2: Escravidão, resistência e relações étnico-raciais</h2>
        <p>
          A escravidão no Brasil durou mais de 350 anos e foi a maior das Américas em volume:
          mais de 4 milhões de africanos foram trazidos forçosamente ao Brasil. O ENEM cobra
          esse tema com frequência sempre a partir de uma perspectiva crítica que inclui:
          (1) a resistência dos escravizados — quilombos, revoltas, manumissão, sincretismo
          religioso como forma de preservação cultural; (2) o processo gradual de abolição
          (Lei do Ventre Livre 1871, Lei dos Sexagenários 1885, Lei Áurea 1888) como resultado
          da pressão interna dos escravizados e das transformações do capitalismo internacional;
          e (3) a persistência do racismo estrutural como herança histórica da escravidão que
          não foi superada pela abolição formal.
        </p>
        <p>
          Quilombo dos Palmares, Revolta dos Malês (1835), Cabanagem, Balaiada, Sabinada —
          o ENEM frequentemente apresenta fontes sobre essas revoltas e pede que o candidato
          identifique os atores históricos envolvidos, suas demandas e o contexto que as
          tornou possíveis. A perspectiva dos escravizados e libertos como sujeitos históricos
          ativos — não apenas vítimas passivas — é a chave interpretativa exigida pelo ENEM.
        </p>

        <div className="lesson-highlight">
          <h3>O que o ENEM mais cobra sobre escravidão e raça</h3>
          <p>
            <strong>1.</strong> Resistência escrava — quilombos, revoltas, alforrias, culturas de resistência.<br/>
            <strong>2.</strong> Herança da escravidão no Brasil contemporâneo — dados de desigualdade racial.<br/>
            <strong>3.</strong> Lei 10.639/2003 — obrigatoriedade do ensino de história e cultura africana e afro-brasileira.<br/>
            <strong>4.</strong> Políticas afirmativas — cotas raciais, Estatuto da Igualdade Racial, debate sobre mérito e reparação histórica.<br/>
            <strong>5.</strong> Civilizações africanas pré-coloniais — reinos Mali, Songai, Congo, Zimbábue.<br/>
            <strong>6.</strong> Diáspora africana no Brasil — culturas afro-brasileiras como formas de resistência criativa.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 3 — Povos Indígenas</span>
        <h2>4. Eixo 3: Povos indígenas — do período pré-colonial ao presente</h2>
        <p>
          O ENEM cobra povos indígenas em duas perspectivas articuladas: (1) as civilizações
          pré-colombianas — Maias, Astecas e Incas nas Américas; povos dos troncos Tupi-Guarani,
          Jê e Arawak no Brasil — em toda sua complexidade e sofisticação, desconstruindo a
          ideia colonial de "selvagens sem história"; e (2) os direitos indígenas contemporâneos
          no Brasil — Constituição de 1988 (art. 231), FUNAI, demarcação de terras, protagonismo
          de lideranças como Sônia Guajajara, Ailton Krenak e Davi Kopenawa.
        </p>
        <p>
          A perspectiva crítica exigida pelo ENEM implica: reconhecer que a colonização foi
          um genocídio de proporções imensas; compreender as formas de resistência indígena
          ao longo dos séculos; valorizar a diversidade de culturas, línguas e cosmovisões dos
          mais de 300 povos indígenas brasileiros; e entender os conflitos contemporâneos —
          garimpo ilegal, grilagem, pressão legislativa (Marco Temporal) — como continuidade
          histórica da violência colonial, não como novidade isolada ou "questão de segurança".
        </p>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 4 — Revoluções</span>
        <h2>5. Eixo 4: Revoluções e transformações políticas da modernidade</h2>
        <p>
          O ENEM cobra as grandes revoluções da modernidade como processos complexos — não
          apenas como datas ou sequências de eventos. A <strong>Revolução Francesa</strong>
          (1789) é a mais cobrada: liberdade, igualdade e fraternidade como ideais que
          inspiraram movimentos no mundo todo, mas também como processo contraditório —
          a Revolução que proclamou os direitos do homem manteve a escravidão nas colônias
          e excluiu as mulheres. A <strong>Revolução Americana</strong> (1776) articulou
          independência e liberalismo sem ruptura social. A <strong>Revolução Haitiana</strong>
          (1791–1804) foi a única revolução escrava bem-sucedida da história — e o terror que
          ela provocou nas elites escravistas das Américas, incluindo o Brasil, explica muito
          do conservadorismo político da época.
        </p>
        <p>
          A <strong>Revolução Russa</strong> (1917) criou o primeiro Estado socialista da
          história, inaugurando a polaridade capitalismo-socialismo que estruturou o século XX.
          O ENEM frequentemente pede a comparação entre revoluções — as diferenças entre a
          Francesa (burguesa) e a Russa (socialista), entre a Americana (sem ruptura social)
          e a Haitiana (antiescravista e anticolonial), entre o processo moderado de
          independência do Brasil (1822) e as guerras de independência hispano-americanas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Revolução</th>
                <th>Ano</th>
                <th>Caráter histórico</th>
                <th>Herança principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revolução Inglesa (Gloriosa)</td>
                <td>1688</td>
                <td>Burguesa-parlamentar</td>
                <td>Parlamento soberano; liberalismo; Locke</td>
              </tr>
              <tr>
                <td>Independência dos EUA</td>
                <td>1776</td>
                <td>Colonial-liberal</td>
                <td>Democracia republicana; sem ruptura social; escravidão mantida</td>
              </tr>
              <tr>
                <td>Revolução Francesa</td>
                <td>1789</td>
                <td>Burguesa-radical</td>
                <td>Direitos humanos; nação; laicidade; "universalismo seletivo"</td>
              </tr>
              <tr>
                <td>Revolução Haitiana</td>
                <td>1791–1804</td>
                <td>Anticolonial e antiescravista</td>
                <td>1ª república negra; "medo do Haiti" nas elites escravistas</td>
              </tr>
              <tr>
                <td>Revolução Industrial</td>
                <td>1760–1850</td>
                <td>Tecnológico-econômica</td>
                <td>Capitalismo industrial; proletariado; movimento operário</td>
              </tr>
              <tr>
                <td>Revolução Russa</td>
                <td>1917</td>
                <td>Socialista</td>
                <td>URSS; Guerra Fria; socialismo real; inspiração para movimentos globais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 5 — Guerras e Conflitos</span>
        <h2>6. Eixo 5: Guerras, totalitarismos e conflitos do século XX</h2>
        <p>
          A Primeira Guerra Mundial (1914–1918) encerrou a belle époque europeia e reconfigurou
          o mapa político do mundo: a derrota da Alemanha e o humilhante Tratado de Versalhes
          criaram as condições políticas e econômicas para o surgimento do nazismo. A Segunda
          Guerra Mundial (1939–1945) foi o conflito mais mortífero da história humana — entre
          70 e 85 milhões de mortos — e revelou os limites extremos da barbárie humana: o
          Holocausto, o genocídio sistemático de 6 milhões de judeus e outros 5 milhões de
          vítimas (ciganos, homossexuais, pessoas com deficiência, eslavos), realizado
          industrialmente pelo aparato burocrático do Estado nazista.
        </p>
        <p>
          O ENEM cobra os <strong>totalitarismos</strong> — nazismo, fascismo e stalinismo —
          com frequência, sempre no contexto da análise das causas (crise econômica de 1929,
          humilhação nacional, propaganda, medo do comunismo) e das consequências (guerra,
          genocídio, destruição das instituições democráticas). A <strong>Guerra Fria</strong>
          (1947–1991) organizou a geopolítica mundial em torno da disputa entre EUA e URSS,
          moldando conflitos locais em todo o mundo — incluindo as ditaduras militares na
          América Latina apoiadas pelos EUA em nome do combate ao comunismo.
        </p>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 6 — Brasil República</span>
        <h2>7. Eixo 6: Brasil República — da proclamação à redemocratização</h2>
        <p>
          Para o ENEM, os momentos mais cobrados da história republicana brasileira são a
          <strong> Era Vargas</strong> e a <strong>Ditadura Militar</strong>. A Era Vargas
          articulou industrialização, trabalhismo, populismo e autoritarismo: a CLT de 1943
          concedeu direitos trabalhistas históricos num contexto de Estado autoritário, criando
          uma relação de dependência entre as massas trabalhadoras e o "pai dos pobres" — o
          "trabalhismo outorgado" que diferencia o Brasil da tradição europeia de conquistas
          laborais autônomas.
        </p>
        <p>
          A <strong>Ditadura Militar (1964–1985)</strong> é o período mais cobrado. O golpe
          de 1964 contou com apoio civil — classe média, Igreja Católica conservadora, grande
          imprensa — e dos EUA, no contexto da Guerra Fria. O AI-5 (1968) radicalizou a
          repressão: cassação de mandatos, tortura sistemática, censura da imprensa, exílio.
          A tortura não foi um excesso isolado — foi uma política de Estado, implementada em
          centros clandestinos como o DOPS e o DOI-CODI, que a Comissão Nacional da Verdade
          (2014) documentou em 434 casos de mortos e desaparecidos. O ENEM frequentemente
          usa documentos da ditadura — decretos, notícias censuradas, depoimentos de vítimas
          — e pede que o candidato identifique elementos de autoritarismo, resistência e
          impacto sobre direitos humanos.
        </p>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Eixo 7 — Direitos Humanos</span>
        <h2>8. Eixo 7: Direitos humanos, cidadania e democracia no ENEM</h2>
        <p>
          Direitos humanos e democracia são temas transversais que o ENEM trata em quase todos
          os períodos históricos. As questões frequentemente articulam passado e presente:
          do Holocausto à DUDH de 1948, das ditaduras militares latino-americanas às Comissões
          da Verdade, do racismo histórico às políticas de cotas contemporâneas. O fio condutor
          é sempre a pergunta: quais são os sujeitos históricos envolvidos? Quem tem direitos e
          quem é excluído deles em cada contexto histórico específico?
        </p>
        <p>
          Para o ENEM, os temas mais importantes desse eixo são: gerações de direitos humanos
          (1ª, 2ª e 3ª geração), a DUDH de 1948 e o sistema ONU/interamericano de proteção,
          a Constituição de 1988 e o SUS, a Lei Maria da Penha, o STF e os direitos LGBTQIA+,
          a questão climática como direito difuso (art. 225 CF/88) e os direitos indígenas
          (art. 231 CF/88). O candidato deve ser capaz de identificar a qual geração pertence
          cada direito e qual é a obrigação correspondente do Estado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema de DH</th>
                <th>Geração</th>
                <th>Dispositivo legal no Brasil</th>
                <th>Frequência no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Habeas corpus, vedação à tortura</td>
                <td>1ª geração</td>
                <td>CF/88 art. 5º, LXVIII e III</td>
                <td>Alta — articulado com ditadura militar</td>
              </tr>
              <tr>
                <td>Saúde universal (SUS)</td>
                <td>2ª geração</td>
                <td>CF/88 art. 196</td>
                <td>Muito alta — comparação com sistema pré-CF/88</td>
              </tr>
              <tr>
                <td>Educação pública gratuita</td>
                <td>2ª geração</td>
                <td>CF/88 art. 205–206</td>
                <td>Alta — cotas, ProUni, FIES</td>
              </tr>
              <tr>
                <td>Direitos indígenas às terras</td>
                <td>3ª geração (coletivo)</td>
                <td>CF/88 art. 231</td>
                <td>Crescente — Marco Temporal, demarcações</td>
              </tr>
              <tr>
                <td>Meio ambiente equilibrado</td>
                <td>3ª geração (difuso)</td>
                <td>CF/88 art. 225</td>
                <td>Crescente — crise climática, Amazônia</td>
              </tr>
              <tr>
                <td>Combate ao racismo (crime)</td>
                <td>1ª geração + ação afirmativa</td>
                <td>CF/88 art. 5º XLII; Lei 12.711/2012</td>
                <td>Muito alta — cotas, dados de desigualdade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas e Estratégias</span>
        <h2>9. Armadilhas comuns e estratégias de prova</h2>
        <p>
          O ENEM é sofisticado na construção de alternativas: frequentemente inclui afirmações
          verdadeiras que, no entanto, não respondem à pergunta formulada no enunciado.
          Reconhecer as armadilhas mais comuns é fundamental para não desperdiçar questões
          que o candidato sabe responder.
        </p>
        <p>
          <strong>Armadilha 1 — A alternativa verdadeira fora do contexto:</strong> O candidato
          reconhece uma afirmação historicamente correta e a escolhe — mas ela não responde ao
          que o enunciado perguntou. Leia sempre o enunciado antes da fonte e certifique-se de
          que a alternativa escolhida responde exatamente à pergunta formulada.
        </p>
        <p>
          <strong>Armadilha 2 — Confundir causa com consequência:</strong> "O que levou a X"
          e "o que resultou de X" são perguntas radicalmente diferentes. O ENEM explora essa
          confusão com frequência, especialmente em questões sobre guerras, crises econômicas
          e revoluções políticas.
        </p>
        <p>
          <strong>Armadilha 3 — Generalizar além do que a fonte afirma:</strong> Uma fonte
          específica fala de um grupo, uma região ou um momento. Alternativas que generalizam
          ("toda a população", "sempre", "em todos os casos") são quase sempre incorretas
          quando a fonte tem escopo mais limitado e específico.
        </p>
        <p>
          <strong>Armadilha 4 — Anacronismo:</strong> Avaliar o passado com valores do
          presente, ou aplicar conceitos contemporâneos a períodos históricos em que não
          existiam. O ENEM pede que o candidato entenda os eventos em seu contexto histórico.
        </p>
        <p>
          <strong>Armadilha 5 — Confundir historiografia com fato histórico:</strong> Uma análise
          historiográfica é a interpretação de um historiador sobre eventos passados — não o
          próprio evento. O ENEM frequentemente apresenta dois historiadores com interpretações
          diferentes e pede que o candidato identifique em que concordam ou divergem.
        </p>
        <p>
          <strong>Estratégia de gestão do tempo:</strong> A área de Ciências Humanas tem 45
          questões. O tempo médio disponível é de cerca de 3 minutos e 20 segundos por questão.
          Não trave em uma questão difícil — marque provisoriamente e avance, retornando depois.
          Sempre há pelo menos duas alternativas claramente incorretas — eliminá-las aumenta
          sua probabilidade de acerto. Nunca deixe uma questão em branco por falta de tempo:
          marque a alternativa que parece mais provável e siga em frente.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 200" width="760" height="200" aria-label="Linha do tempo geral da História do Brasil de 1500 ao presente">
            <rect x="0" y="0" width="760" height="200" fill="#f8f9fa" rx="10"/>
            <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">História do Brasil — Linha do Tempo Síntese (1500–presente)</text>

            {/* Linha central */}
            <line x1="25" y1="78" x2="735" y2="78" stroke="#1a1a2e" strokeWidth="2"/>

            {/* Marcos acima da linha */}
            <circle cx="50" cy="78" r="7" fill="#4361ee"/>
            <line x1="50" y1="71" x2="50" y2="50" stroke="#4361ee" strokeWidth="1.5"/>
            <text x="50" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1500</text>
            <text x="50" y="97" textAnchor="middle" fontSize="7" fill="#555">Chegada</text>
            <text x="50" y="108" textAnchor="middle" fontSize="7" fill="#555">portuguesa</text>

            <circle cx="185" cy="78" r="7" fill="#3a0ca3"/>
            <line x1="185" y1="71" x2="185" y2="50" stroke="#3a0ca3" strokeWidth="1.5"/>
            <text x="185" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1822</text>
            <text x="185" y="97" textAnchor="middle" fontSize="7" fill="#555">Independência</text>
            <text x="185" y="108" textAnchor="middle" fontSize="7" fill="#555">do Brasil</text>

            <circle cx="305" cy="78" r="7" fill="#7209b7"/>
            <line x1="305" y1="71" x2="305" y2="50" stroke="#7209b7" strokeWidth="1.5"/>
            <text x="305" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1888–89</text>
            <text x="305" y="97" textAnchor="middle" fontSize="7" fill="#555">Abolição e</text>
            <text x="305" y="108" textAnchor="middle" fontSize="7" fill="#555">República</text>

            <circle cx="400" cy="78" r="7" fill="#f72585"/>
            <line x1="400" y1="85" x2="400" y2="110" stroke="#f72585" strokeWidth="1.5"/>
            <text x="400" y="122" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1930</text>
            <text x="400" y="134" textAnchor="middle" fontSize="7" fill="#555">Era Vargas</text>

            <circle cx="480" cy="78" r="7" fill="#e63946"/>
            <line x1="480" y1="71" x2="480" y2="50" stroke="#e63946" strokeWidth="1.5"/>
            <text x="480" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1964</text>
            <text x="480" y="97" textAnchor="middle" fontSize="7" fill="#555">Golpe</text>
            <text x="480" y="108" textAnchor="middle" fontSize="7" fill="#555">militar</text>

            <circle cx="575" cy="78" r="7" fill="#2d6a4f"/>
            <line x1="575" y1="85" x2="575" y2="110" stroke="#2d6a4f" strokeWidth="1.5"/>
            <text x="575" y="122" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">1988</text>
            <text x="575" y="134" textAnchor="middle" fontSize="7" fill="#555">Constituição</text>
            <text x="575" y="145" textAnchor="middle" fontSize="7" fill="#555">Cidadã</text>

            <circle cx="700" cy="78" r="7" fill="#457b9d"/>
            <line x1="700" y1="71" x2="700" y2="50" stroke="#457b9d" strokeWidth="1.5"/>
            <text x="700" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">2023</text>
            <text x="700" y="97" textAnchor="middle" fontSize="7" fill="#555">Brasil</text>
            <text x="700" y="108" textAnchor="middle" fontSize="7" fill="#555">atual</text>

            <text x="380" y="185" textAnchor="middle" fontSize="9" fill="#888" fontStyle="italic">O ENEM articula esses períodos tematicamente — não de forma linear. Identifique os eixos transversais que os conectam.</text>
          </svg>
          <figcaption>Linha do tempo síntese da História do Brasil: dos principais marcos históricos de 1500 ao presente — base para as questões do ENEM.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 10 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação de Fontes</span>
        <h2>10. Dicas de interpretação de fontes históricas no ENEM</h2>
        <p>
          A interpretação de fontes históricas é a habilidade central do ENEM em História.
          Cada tipo de fonte exige uma abordagem específica. Para <strong>textos escritos</strong>
          (cartas, decretos, discursos, manifestos, relatos), identifique: quem escreveu,
          para quem, quando, com qual intenção e qual é o contexto de produção. Um decreto
          imperial não é neutro — é um instrumento de poder. Um relato de viajante colonial
          reflete o olhar etnocêntrico do observador sobre povos que descreve como "outros".
          Para <strong>imagens e charges</strong>, leia os elementos visuais: quem são os
          personagens, qual é a hierarquia (quem está em posição de poder), quais símbolos são
          utilizados e qual é o tom satírico ou celebratório. Para <strong>tabelas e gráficos</strong>,
          contextualize historicamente: os números nunca falam por si, e o ENEM pede que você
          relacione o dado quantitativo ao processo histórico que o explica.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de fonte</th>
                <th>O que observar prioritariamente</th>
                <th>Armadilha típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fonte primária (carta, decreto, lei)</td>
                <td>Autoria, destinatário, intenção, contexto de produção</td>
                <td>Tomar o texto como verdade objetiva sem questionar perspectiva</td>
              </tr>
              <tr>
                <td>Charge histórica</td>
                <td>Personagens, simbolismo, hierarquia visual, alvo da sátira</td>
                <td>Não identificar o alvo da crítica ou confundir símbolo com literal</td>
              </tr>
              <tr>
                <td>Texto historiográfico</td>
                <td>Qual tese o historiador defende; quais fontes usa; qual escola</td>
                <td>Confundir a análise do historiador com o próprio fato histórico</td>
              </tr>
              <tr>
                <td>Tabela ou gráfico</td>
                <td>Tendências, comparações, período representado, o que o dado implica</td>
                <td>Ler o número sem relacioná-lo ao processo histórico que o explica</td>
              </tr>
              <tr>
                <td>Mapa histórico</td>
                <td>O que mudou em relação a outro período; fronteiras, fluxos, domínios</td>
                <td>Aplicar limites políticos atuais a períodos em que não existiam</td>
              </tr>
              <tr>
                <td>Relato de viajante colonial</td>
                <td>O olhar do "outro" e o etnocentrismo implícito no texto</td>
                <td>Aceitar a descrição como objetiva sem identificar o preconceito cultural</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 11 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Temas Transversais</span>
        <h2>11. Temas transversais que o ENEM mais cobra em História</h2>
        <p>
          O ENEM não cobra História por período isolado: os temas transversais que mais aparecem
          são aqueles que conectam passado e presente, que revelam continuidades históricas e
          que articulam diferentes dimensões — social, econômica, cultural, política. Conhecer
          esses eixos transversais é mais eficiente do que memorizar cronologias isoladas.
        </p>
        <p>
          <strong>Trabalho e exploração:</strong> Do trabalho escravo colonial ao proletariado
          industrial, da servidão feudal à precarização contemporânea — o ENEM frequentemente
          pede a comparação entre formas históricas de exploração do trabalho em diferentes
          contextos. <strong>Democracia e autoritarismo:</strong> Da democracia limitada de
          Atenas às revoluções liberais, dos totalitarismos do século XX às ditaduras
          militares latino-americanas e à redemocratização brasileira — o ENEM questiona
          sempre: quem participa? Quem é excluído? <strong>Identidade e diversidade
          cultural:</strong> Colonialismo e apagamento de culturas, resistência indígena e
          quilombola, globalização e glocalização — o ENEM usa fontes de grupos subalternos
          (indígenas, negros, mulheres) e pede interpretação de seu ponto de vista.
          <strong> Meio ambiente e desenvolvimento:</strong> Do colonialismo extrativista
          à Revolução Industrial e à crise climática contemporânea — o ENEM cruza história
          com geopolítica e ciência nesse tema.
        </p>
      </section>

      {/* ===== SEÇÃO 12 — 10 EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Simulado Final</span>
        <h2>10 Questões de Revisão Geral — cobrindo múltiplos módulos</h2>

        <Exercise
          level="Básico"
          title="1. Brasil Colonial — Escravidão e resistência (Módulo 4)"
          statement={
            <p>
              O Quilombo dos Palmares, que existiu por cerca de um século no interior de
              Alagoas e foi destruído em 1694, é considerado um dos maiores símbolos de
              resistência negra nas Américas. Sobre sua importância histórica, é correto afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "Palmares foi um fenômeno isolado e único no Brasil colonial, sem precedentes ou relações com outras formas de resistência à escravidão." },
            { letter: "b", text: "O quilombo de Palmares representa a capacidade de organização política, cultural e militar dos africanos escravizados, constituindo forma de resistência ativa que desafiou a ordem escravocrata por quase um século.", correct: true },
            { letter: "c", text: "Palmares foi um movimento exclusivamente militar, sem qualquer dimensão cultural, religiosa ou de organização social própria." },
            { letter: "d", text: "A destruição de Palmares em 1694 representou o fim definitivo da resistência negra no Brasil colonial, resultando em total pacificação." },
            { letter: "e", text: "O Quilombo dos Palmares foi fundado por portugueses que discordavam moralmente da escravidão e acolheram africanos fugitivos." },
          ]}
          resolution={
            <p>
              Palmares não foi apenas uma comunidade de refugiados: era um Estado organizado
              com divisão social, produção agrícola, religiosidade própria e capacidade militar
              que resistiu às tropas coloniais por quase um século. Zumbi dos Palmares, seu
              último grande líder, tornou-se símbolo nacional da resistência negra — sua data
              de morte (20 de novembro de 1695) é o Dia da Consciência Negra. Existiram
              centenas de quilombos em todo o Brasil durante o período escravocrata, de
              diferentes tamanhos e formas de organização — Palmares não foi isolado.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Revolução Francesa — Ideais e contradições (Módulo 5)"
          statement={
            <div>
              <p>
                "Art. 1º. Os homens nascem e são livres e iguais em direitos. As distinções
                sociais só podem ser fundadas na utilidade comum."
              </p>
              <p><em>(Declaração dos Direitos do Homem e do Cidadão, 1789)</em></p>
              <p>
                Uma historiadora feminista, ao analisar este documento no contexto da Revolução
                Francesa, identificaria como sua principal contradição histórica:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O fato de que o documento foi redigido em francês, excluindo os cidadãos que não falavam esse idioma das promessas universais." },
            { letter: "b", text: "A afirmação de que as distinções sociais se fundam na utilidade, o que poderia justificar qualquer hierarquia conveniente à classe dominante." },
            { letter: "c", text: "A proclamação universal dos direitos de 'todos os homens' que, na prática, excluía as mulheres da cidadania, mantinha a escravidão nas colônias e reservava direitos políticos aos proprietários — revelando os limites de classe e gênero da universalidade burguesa.", correct: true },
            { letter: "d", text: "O fato de que o documento foi elaborado sem a participação do rei Luís XVI, tornando-o juridicamente inválido no plano do direito internacional." },
            { letter: "e", text: "A ausência de qualquer menção à liberdade de imprensa, que seria garantida apenas na Constituição subsequente de 1791." },
          ]}
          resolution={
            <p>
              A Declaração de 1789 proclamou os direitos "do homem", mas sua aplicação foi
              restrita: as mulheres foram excluídas da cidadania ativa (Olympe de Gouges
              redigiu uma Declaração dos Direitos da Mulher em 1791 e foi guilhotinada); a
              escravidão foi mantida nas colônias francesas (abolida temporariamente em 1794,
              restaurada por Napoleão em 1802); os direitos políticos eram restritos a
              proprietários. Essa contradição entre o universalismo dos princípios e a exclusão
              prática — o "universalismo seletivo" — é uma das questões mais frequentemente
              cobradas pelo ENEM sobre a Revolução Francesa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Era Vargas — Populismo e trabalhismo (Módulo 9)"
          statement={
            <div>
              <p>
                "Trabalhadores do Brasil! [...] Há um ano, os vossos salários eram os mais
                baixos do mundo. O governo resolveu por isso alterar radicalmente esse estado
                de coisas. [...] Hoje o Brasil é dono de seu destino econômico."
              </p>
              <p><em>(Getúlio Vargas, discurso de 1º de maio, anos 1940 — adaptado)</em></p>
              <p>Esse discurso exemplifica qual característica central do populismo varguista?</p>
            </div>
          }
          options={[
            { letter: "a", text: "O apelo ao internacionalismo socialista, que Vargas usava para angariar apoio dos partidos de esquerda durante o Estado Novo." },
            { letter: "b", text: "A construção de uma relação direta e paternalista entre o líder e as massas trabalhadoras, articulando concessão de direitos trabalhistas com discurso nacionalista e apelo emocional.", correct: true },
            { letter: "c", text: "A defesa da democracia liberal como único sistema capaz de garantir direitos dos trabalhadores no contexto do pós-guerra mundial." },
            { letter: "d", text: "A proposta de distribuição de terras para trabalhadores rurais como base de uma reforma agrária transformadora da estrutura fundiária brasileira." },
            { letter: "e", text: "O reconhecimento explícito do papel dos sindicatos independentes como intermediários autônomos entre o Estado e os trabalhadores brasileiros." },
          ]}
          resolution={
            <p>
              O populismo varguista articulava três elementos centrais: (1) uma relação direta
              entre líder e povo, sem mediação de partidos ou sindicatos independentes — os
              sindicatos foram "atrelados" ao Estado pelo Ministério do Trabalho; (2) a concessão
              de direitos trabalhistas como um "presente" do líder aos trabalhadores — Vargas era
              chamado de "pai dos pobres" —, criando lealdade pessoal; (3) o nacionalismo
              econômico como identidade coletiva mobilizadora. O ENEM frequentemente usa
              discursos de Vargas para identificar esses elementos do populismo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Segunda Guerra Mundial — Holocausto e modernidade (Módulo 7)"
          statement={
            <div>
              <p>
                "O Holocausto foi perpetrado por um Estado moderno com aparato burocrático
                sofisticado, tecnologia industrial avançada e cidadãos comuns que cumpriram
                ordens. Não foi resultado de irracionalidade primitiva — foi produto da
                racionalidade instrumental moderna aplicada à destruição humana em escala industrial."
              </p>
              <p><em>(Baseado em Zygmunt Bauman, "Modernidade e Holocausto", 1989 — adaptado)</em></p>
              <p>A principal contribuição historiográfica desse argumento é:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Demonstrar que o Holocausto foi resultado exclusivo do caráter excepcional dos líderes nazistas, sem relação com estruturas sociais mais amplas ou com o Estado moderno." },
            { letter: "b", text: "Argumentar que as sociedades modernas e tecnologicamente avançadas são imunes à barbárie, ao contrário de sociedades tradicionais pré-modernas." },
            { letter: "c", text: "Mostrar que o genocídio não foi uma aberração irracional, mas pode ser produto das estruturas burocráticas e tecnológicas modernas colocadas a serviço de uma ideologia exterminacionista — o que implica vigilância permanente em qualquer sociedade.", correct: true },
            { letter: "d", text: "Defender que o Holocausto foi inevitável dado o contexto histórico da Alemanha, tornando os perpetradores individuais moralmente inocentes por seguirem ordens." },
            { letter: "e", text: "Argumentar que a análise histórica do Holocausto é impossível, pois a magnitude da tragédia escapa a qualquer categoria intelectual disponível." },
          ]}
          resolution={
            <p>
              Bauman argumentou que o Holocausto não foi uma recaída na barbárie pré-moderna:
              foi realizado com toda a eficiência da modernidade — trens, burocracia, divisão
              do trabalho, racionalidade instrumental. Cada agente cumpria sua função específica
              sem precisar encarar a totalidade do processo (a "banalidade do mal" de Hannah
              Arendt). Isso significa que qualquer sociedade, não apenas a Alemanha nazista,
              tem o potencial para a barbárie quando estruturas burocráticas são colocadas a
              serviço de ideologias desumanas. O ENEM usa esse argumento para articular história
              com reflexão sobre democracia e vigilância das instituições no presente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Ditadura Militar Brasileira — Memória e justiça de transição (Módulo 10)"
          statement={
            <div>
              <p>
                A Comissão Nacional da Verdade (2011–2014) documentou 434 mortos e desaparecidos
                políticos durante a ditadura militar (1964–1985), além de casos de tortura
                sistemática. O relatório identificou 377 agentes do Estado envolvidos nas
                violações, mas nenhum foi processado criminalmente, pois a Lei da Anistia de
                1979 foi interpretada como abrangendo também os agentes do Estado.
              </p>
              <p>
                Esse cenário revela qual dilema central nas transições democráticas?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A impossibilidade histórica de estabelecer qualquer forma de justiça após regimes autoritários, pois o tempo decorrido sempre impede a responsabilização jurídica dos culpados." },
            { letter: "b", text: "A tensão entre memória histórica e reconciliação política: a anistia foi necessária para viabilizar a transição democrática, mas criou simultaneamente impunidade para graves violações de direitos humanos — dilema sem solução perfeita.", correct: true },
            { letter: "c", text: "O fato de que comissões da verdade são instrumentos suficientes para substituir integralmente a justiça criminal, tornando desnecessários processos judiciais." },
            { letter: "d", text: "A demonstração de que a ditadura militar brasileira cometeu apenas excessos individuais de agentes isolados, sem política sistemática de violação de direitos." },
            { letter: "e", text: "A conclusão de que o processo de redemocratização brasileiro foi idêntico ao de Argentina e Chile, países que também optaram pela anistia ampla sem processos judiciais." },
          ]}
          resolution={
            <p>
              O Brasil é a exceção no Cone Sul: Argentina e Chile julgaram seus torturadores.
              O Brasil não o fez, amparando-se na interpretação extensiva da Lei da Anistia de
              1979. A CNV documentou os fatos, nomeou responsáveis e propôs reparações — mas
              sem consequências penais. O dilema "verdade sem justiça" é central na teoria da
              justiça de transição e frequentemente cobrado pelo ENEM em questões que comparam
              as transições democráticas do Cone Sul e suas diferentes abordagens sobre
              responsabilização por violações de direitos humanos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="6. Imperialismo e África colonial (Módulo 6)"
          statement={
            <div>
              <p>
                "A Conferência de Berlim (1884–1885) reuniu potências europeias para
                'regulamentar' a partilha da África entre si, sem a presença de nenhum
                representante africano. As fronteiras traçadas ignoraram completamente as
                divisões étnicas, linguísticas e culturais dos povos africanos, criando
                unidades territoriais artificiais que herdariam conflitos permanentes."
              </p>
              <p>Essa análise histórica demonstra que a colonização africana:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Foi um processo benéfico que unificou povos africanos antes dispersos, criando identidades nacionais que fortaleceram os países após a independência." },
            { letter: "b", text: "Teve efeitos limitados ao século XIX, sendo superada sem maiores consequências pelo processo de independência dos anos 1960." },
            { letter: "c", text: "Impôs fronteiras artificiais e violentas sobre realidades étnicas e culturais complexas, criando Estados cujos conflitos contemporâneos — guerras civis, genocídios — têm raízes diretas nessa divisão colonial arbitrária.", correct: true },
            { letter: "d", text: "Foi conduzida de forma negociada com os líderes africanos, que receberam compensações e conservaram alguma autonomia sobre seus territórios." },
            { letter: "e", text: "Afetou apenas as regiões costeiras da África, sem penetrar no interior do continente, onde os reinos africanos mantiveram plena soberania." },
          ]}
          resolution={
            <p>
              A Conferência de Berlim é o símbolo maior do imperialismo europeu na África:
              as fronteiras traçadas dividiam povos com identidade e língua comuns, e uniam
              em um mesmo Estado grupos historicamente em conflito. Os resultados práticos
              continuam visíveis: o genocídio em Ruanda (1994) entre Hutus e Tutsis, os
              conflitos no Congo, as guerras civis na Somália e no Sudão — todos têm raízes
              na partilha colonial. Os processos de descolonização (anos 1950–70) herdaram
              essas fronteiras artificiais, criando Estados frágeis e conflituosos. O ENEM
              frequentemente cobra esse nexo causal entre passado colonial e presente africano.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="7. Guerra Fria e ditaduras na América Latina (Módulo 8)"
          statement={
            <div>
              <p>
                Em 1964, o governo João Goulart (Jango) foi derrubado por um golpe militar que
                contou com apoio dos EUA — os americanos reconheceram o novo governo em menos
                de 24 horas. Jango havia anunciado as "Reformas de Base" — reforma agrária,
                nacionalização de refinarias, reforma tributária — e defendia uma política
                externa independente.
              </p>
              <p>
                Considerando o contexto da Guerra Fria, o apoio americano ao golpe de 1964 se
                insere em qual lógica histórica?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Os EUA tinham interesse genuíno em promover a democracia na América Latina e intervieram porque Jango havia violado a Constituição brasileira." },
            { letter: "b", text: "O apoio americano ao golpe seguia a lógica da contenção do comunismo: qualquer governo latino-americano com políticas reformistas era percebido como ameaça à influência americana, independentemente de sua base democrática.", correct: true },
            { letter: "c", text: "Os EUA apoiaram o golpe exclusivamente por razões econômicas — proteger empresas americanas que seriam atingidas pelas nacionalizações propostas por Jango." },
            { letter: "d", text: "O apoio americano foi um erro diplomático isolado, sem qualquer relação com uma política sistemática dos EUA na América Latina no período." },
            { letter: "e", text: "Os EUA ignoraram completamente os eventos de 1964 no Brasil, reconhecendo o novo governo apenas por pressão das demais potências ocidentais." },
          ]}
          resolution={
            <p>
              O golpe de 1964 no Brasil foi parte de um padrão sistemático: no contexto da
              Guerra Fria, os EUA apoiaram ou financiaram golpes e ditaduras em toda a América
              Latina para impedir que governos reformistas ou de esquerda se aproximassem da
              URSS (Guatemala 1954, Chile 1973, entre outros). A Doutrina de Segurança Nacional,
              ensinada na Escola das Américas, treinou militares latino-americanos para combater
              o "inimigo interno". Para os EUA da Guerra Fria, qualquer reforma agrária ou
              política externa independente era "comunismo" — mesmo quando praticada por governos
              eleitos democraticamente como o de Jango.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="8. Constituição de 1988 e SUS — direito à saúde (Módulo 11)"
          statement={
            <div>
              <p>
                Antes de 1988, o atendimento médico público no Brasil era restrito aos
                trabalhadores com carteira assinada, vinculados ao INAMPS. Trabalhadores
                informais, desempregados e os mais pobres recorriam à caridade das Santas
                Casas ou simplesmente não tinham acesso a cuidados médicos. A Constituição
                de 1988 criou o SUS — Sistema Único de Saúde.
              </p>
              <p>
                Em termos de gerações de direitos humanos, essa mudança representou:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A transição de um direito de 3ª geração (difuso) para um direito de 1ª geração (individual), pois o SUS individualizou o acesso à saúde que antes era coletivo." },
            { letter: "b", text: "A universalização de um direito social de 2ª geração: de benefício assistencial restrito a trabalhadores formais para direito de todos os cidadãos, independentemente de vínculo empregatício — abrangendo mais de 150 milhões de brasileiros.", correct: true },
            { letter: "c", text: "A transformação de um sistema público eficiente em um sistema burocrático ineficiente, representando retrocesso na qualidade do atendimento médico." },
            { letter: "d", text: "A privatização da saúde, com o Estado repassando para organizações privadas a responsabilidade pelo atendimento universal da população brasileira." },
            { letter: "e", text: "A criação de um direito de 4ª geração, pois envolvia novas tecnologias médicas que não existiam no período anterior à Constituição." },
          ]}
          resolution={
            <p>
              O SUS é um dos maiores sistemas públicos de saúde universal do mundo e representa
              concretamente a segunda geração dos direitos humanos: o Estado deve prestar
              ativamente o serviço de saúde a todos os cidadãos, independentemente de condição
              socioeconômica ou vínculos de trabalho. A expansão da cobertura foi histórica:
              milhões de brasileiros que antes recorriam à caridade passaram a ter direito
              formal e efetivo ao atendimento médico. O ENEM frequentemente articula o SUS
              com as gerações dos direitos humanos e com a história do sistema de saúde
              pré-Constituição de 1988.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="9. Globalização e crise climática — injustiça ambiental (Módulo 12)"
          statement={
            <div>
              <p>
                "Os países industrializados do Norte Global acumularam mais de 80% das emissões
                históricas de carbono desde a Revolução Industrial. Os países do Sul Global,
                responsáveis por uma fração dessas emissões, estão entre os mais vulneráveis
                a seus efeitos: secas prolongadas na África, inundações em Bangladesh, furacões
                no Caribe, crise dos Yanomami no Brasil."
              </p>
              <p>Esse dado articula a crise climática com qual conceito histórico e sociológico?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Com o mercantilismo do século XVII, que criou as bases do capitalismo global e da desigualdade entre nações pela via do comércio de especiarias." },
            { letter: "b", text: "Com a ideia de progresso do Iluminismo do século XVIII, que prometia um futuro melhor para toda a humanidade através do desenvolvimento tecnológico irrestrito." },
            { letter: "c", text: "Com o conceito de injustiça climática ou racismo ambiental: a desigualdade na distribuição de responsabilidades históricas pelas emissões e de vulnerabilidade aos impactos tem dimensão racial e colonial que reproduz assimetrias de poder históricas.", correct: true },
            { letter: "d", text: "Com o liberalismo econômico do século XIX, que defendia o livre mercado como mecanismo automático de solução de todos os problemas sociais e ambientais da humanidade." },
            { letter: "e", text: "Com o socialismo real do século XX, que priorizou o desenvolvimento industrial sobre a proteção ambiental, criando os maiores desastres ecológicos da história humana." },
          ]}
          resolution={
            <p>
              A injustiça climática é uma das dimensões mais importantes da crise ambiental para
              o ENEM: as nações que mais emitiram carbono historicamente são as industrializadas
              do Norte Global — Europa, EUA, Japão — mas os impactos mais severos recaem sobre
              países e comunidades que pouco contribuíram para o problema. Isso reproduz uma
              assimetria de poder com raízes coloniais: as mesmas nações que enriqueceram
              explorando recursos e trabalho das colônias agora exportam os custos da crise
              climática para os mais vulneráveis. O Acordo de Paris reconhece esse desequilíbrio
              no princípio das "responsabilidades comuns, porém diferenciadas" (CBDR).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="10. Revolução Haitiana e Independência do Brasil — comparação (Módulos 4 e 5)"
          statement={
            <div>
              <p>
                A Revolução Haitiana (1791–1804) foi a única revolução escrava bem-sucedida
                da história: escravizados africanos e seus descendentes derrotaram o exército
                de Napoleão e criaram a primeira república negra do mundo. As elites escravistas
                do Brasil acompanharam com terror o desenrolar dos eventos no Haiti.
              </p>
              <p>
                O impacto da Revolução Haitiana sobre as elites brasileiras do início do século
                XIX explica principalmente por que:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "As elites brasileiras apoiaram entusiasticamente movimentos abolicionistas nos anos seguintes à independência haitiana, reconhecendo o direito moral dos escravizados à liberdade." },
            { letter: "b", text: "A independência do Brasil (1822) foi conduzida pelas elites de forma a evitar qualquer ruptura radical — preservando a escravidão e a ordem social — pois temiam que um processo revolucionário pudesse resultar em revolução escrava como a haitiana.", correct: true },
            { letter: "c", text: "O Brasil aboliu a escravidão imediatamente em 1822, junto com a independência, para evitar o risco de uma revolução escrava semelhante à do Haiti." },
            { letter: "d", text: "As elites brasileiras ignoraram completamente a Revolução Haitiana, considerando-a irrelevante para o contexto político específico do Brasil colonial." },
            { letter: "e", text: "A Revolução Haitiana incentivou as elites a apressar a abolição da escravidão, o que levou à Lei do Ventre Livre de 1822, décadas antes da Lei Áurea." },
          ]}
          resolution={
            <p>
              A Revolução Haitiana assombrou as elites escravistas das Américas durante décadas:
              provou que escravizados podiam vencer militarmente seus senhores e criar um Estado
              soberano. No Brasil — onde a população escravizada era majoritária em muitas regiões
              — esse "medo do Haiti" foi um poderoso fator de conservadorismo político: explicou
              a opção pela independência "pelo alto" (sem mobilização popular de massa), a
              manutenção da escravidão por mais seis décadas após 1822, e a preferência da elite
              por reformas controladas (leis graduais de abolição) sobre qualquer processo que
              pudesse dar protagonismo às massas escravizadas. O ENEM usa esse nexo para articular
              história americana e brasileira em perspectiva comparada.
            </p>
          }
        />
      </section>
    </article>
  );
}
