"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 11</span>
          <h1>Roma: Monarquia, República e Império</h1>
          <p>
            Da lendária aldeia nas sete colinas do Lácio à maior estrutura política do mundo
            antigo ocidental, Roma percorreu em doze séculos um caminho que nenhuma outra
            civilização da Antiguidade conseguiu repetir. A República romana forjou conceitos
            jurídicos e políticos que ainda estruturam os Estados modernos — o direito escrito,
            a separação de poderes, a representação popular, o veto. O Império criou a Pax
            Romana, uma rede de estradas e uma cidadania que integraram populações do Oriente
            Médio à Bretanha. E a crise do Baixo Império, com suas causas econômicas, militares
            e religiosas, é um dos grandes estudos de caso sobre o colapso de civilizações.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Origens</span>
        <h2>1. As Origens de Roma: Mito, Etruria e Lácio</h2>
        <p>
          A tradição romana data a fundação de Roma em <strong>753 a.C.</strong>, atribuindo-a
          a <strong>Rômulo</strong>, descendente do herói troiano Eneias. O mito fundador —
          narrado por Virgílio na <em>Eneida</em> e por Tito Lívio em <em>Ab Urbe Condita</em> —
          conta que Rômulo e seu irmão gêmeo Remo, filhos do deus Marte e da sacerdotisa
          Reia Sílvia, foram abandonados no Tibre e amamentados por uma loba. Adultos,
          disputaram o local de fundação da nova cidade: Rômulo matou Remo e fundou Roma
          na colina Palatina. A data 753 a.C. foi calculada pelo erudito Varrão no século I a.C.
          e tornou-se referência oficial — os romanos contavam os anos "ab Urbe condita"
          (desde a fundação da cidade).
        </p>
        <p>
          A arqueologia confirma a existência de assentamentos nas sete colinas (Palatina,
          Capitolina, Aventina, Quirinal, Viminal, Esquilino e Célio) desde o século X–IX a.C.,
          mas a formação de uma cidade propriamente dita data do século VIII a.C. A influência
          <strong> etrusca</strong> foi determinante para o desenvolvimento de Roma: os etruscos,
          povo misterioso da Toscana, transmitiram aos romanos técnicas de urbanismo (rede de
          esgoto, o Cloaca Maxima), arquitetura em arco, metalurgia avançada, escrita (o alfabeto
          etrusco é a base do alfabeto latino), práticas religiosas (augúrios, haruspicina) e o
          próprio cargo de rei (<em>rex</em>). A localização de Roma era estrategicamente notável:
          à margem do Tibre, cruzada por rotas comerciais norte-sul e leste-oeste, com acesso
          ao mar e proteção das colinas.
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Monarquia</span>
        <h2>2. A Monarquia Romana (753–509 a.C.)</h2>
        <p>
          A tradição listou sete reis de Roma, alternando lendário e histórico: Rômulo, Numa
          Pompílio, Túlio Hostílio, Anco Márcio, Tarquínio Prisco, Sérvio Túlio e Tarquínio,
          o Soberbo. Os últimos três eram etruscos — reflexo da dominação etrusca sobre Roma
          no século VI a.C. A figura do rei (<em>rex</em>) era escolhida pelos <em>patres</em>
          (pais fundadores, origem dos patrícios) e confirmada pelos augúrios. O rei concentrava
          os poderes executivo (comando do exército), legislativo (proposta de leis) e sacerdotal
          (relacionamento com os deuses), assistido pelo Senado — conselho de anciões que ele mesmo
          convocava e que funcionava como órgão consultivo.
        </p>
        <p>
          O período monárquico terminou em <strong>509 a.C.</strong> com a expulsão de Tarquínio,
          o Soberbo — cujo filho Sesto Tarquínio teria estuprado Lucrécia, matrona romana que
          se suicidou após contar o ocorrido ao marido. O episódio, narrado por Tito Lívio com
          intenção exemplar, resultou numa revolta da aristocracia liderada por Lúcio Júnio
          Bruto, que fundou a República. O ódio romano ao título de <em>rex</em> (rei) persistiu
          por séculos — foi precisamente a suspeita de que Júlio César desejava ser rei que
          motivou sua conspiração e assassinato.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">República</span>
        <h2>3. A República Romana (509–27 a.C.): Instituições e Estrutura</h2>
        <p>
          A República romana substituiu o poder concentrado do rei por um sistema de magistraturas
          colegiadas, temporárias e com poder de veto mútuo — concebidas precisamente para evitar
          a concentração de poder. No topo da hierarquia republicana estavam os <strong>cônsules</strong>:
          dois magistrados eleitos anualmente pelas assembleias com o poder máximo do Estado
          (<em>imperium</em>). A colegialidade (dois cônsules que podiam vetar um ao outro) e a
          anualidade (mandato de apenas um ano) eram salvaguardas institucionais contra a tirania.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Magistratura</th>
                <th>Número</th>
                <th>Duração</th>
                <th>Função Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cônsules</td>
                <td>2</td>
                <td>1 ano</td>
                <td>Chefia do Estado, comando militar, convocação do Senado</td>
              </tr>
              <tr>
                <td>Pretores</td>
                <td>2 → 8</td>
                <td>1 ano</td>
                <td>Administração da justiça civil</td>
              </tr>
              <tr>
                <td>Censores</td>
                <td>2</td>
                <td>18 meses (a cada 5 anos)</td>
                <td>Censo da população, administração do ager publicus, controle moral</td>
              </tr>
              <tr>
                <td>Questores</td>
                <td>2 → 20</td>
                <td>1 ano</td>
                <td>Finanças públicas e tesouraria</td>
              </tr>
              <tr>
                <td>Edis Curuis</td>
                <td>2</td>
                <td>1 ano</td>
                <td>Obras públicas, mercados, jogos</td>
              </tr>
              <tr>
                <td>Tribunos da Plebe</td>
                <td>2 → 10</td>
                <td>1 ano</td>
                <td>Proteção dos plebeus; poder de veto (intercessio)</td>
              </tr>
              <tr>
                <td>Ditador</td>
                <td>1</td>
                <td>Máx. 6 meses</td>
                <td>Poder total em emergência; indica o Mestre da Cavalaria</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>Senado</strong> era o órgão central da República: composto inicialmente por
          300 senadores (depois 600, depois 900) provenientes das famílias patrícias, detinha
          poder sobre finanças, política externa, nomeação de províncias e ratificação de leis.
          As principais assembleias populares eram os <em>Comícios Centuriatos</em> (eleição de
          cônsules e pretores, declaração de guerra) e os <em>Comícios Tributos</em> (eleição de
          magistraturas menores, votação de leis).
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conflito Social</span>
        <h2>4. Patrícios versus Plebeus: a Luta pela Igualdade</h2>
        <p>
          A estrutura social romana inicial era rigidamente dividida entre <strong>patrícios</strong>
          — famílias aristocráticas descendentes dos fundadores originais, com acesso exclusivo
          ao Senado, às magistraturas e ao sacerdócio — e <strong>plebeus</strong> — todos os
          demais cidadãos livres, que constituíam a grande maioria da população. Os plebeus
          podiam votar nas assembleias, servir no exército e pagar impostos, mas eram excluídos
          dos cargos mais importantes e proibidos de se casar com patrícios.
        </p>
        <p>
          A luta entre os dois grupos — a "<strong>luta das ordens</strong>" — durou quase
          dois séculos e foi o motor das principais reformas políticas da República. Em
          <strong> 494 a.C.</strong>, os plebeus realizaram a primeira <em>secessio plebis</em>
          (retirada para o Monte Sagrado), ameaçando abandonar Roma e fundar outra cidade,
          forçando os patrícios a criar o <strong>Tribunato da Plebe</strong> — magistratura
          reservada aos plebeus cujos titulares tinham sacrossantidade pessoal (não podiam
          ser tocados ou presos) e poder de <em>intercessio</em> (veto a qualquer ato de
          magistrado ou Senado que prejudicasse um plebeu).
        </p>
        <p>
          A <strong>Lei das XII Tábuas</strong> (450 a.C.) foi a primeira codificação escrita
          do direito romano — garantia fundamental: tornava o direito acessível e público,
          impedindo que os patrícios o manipulassem arbitrariamente. Outras conquistas plebéias:
          a Lei Licínia-Séxtia (367 a.C.), que abriu o consulado aos plebeus; a Lei Ogúlnia
          (300 a.C.), que abriu os principais sacerdócios; e, finalmente, a <strong>Lei
          Hortênsia</strong> (287 a.C.), que tornou os <em>plebiscita</em> (deliberações da
          Assembleia da Plebe) vinculantes para todos os cidadãos, incluindo patrícios.
          A 287 a.C. é considerada a data da conclusão formal da luta das ordens.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Expansão</span>
        <h2>5. As Guerras Púnicas e o Domínio do Mediterrâneo</h2>
        <p>
          Após consolidar seu domínio sobre a Itália (séculos V–III a.C., incluindo a derrota
          dos samnitas e o enfrentamento de Pirro do Épiro), Roma voltou-se para o Mediterrâneo
          e encontrou seu grande rival: <strong>Cartago</strong>, a cidade-Estado fenícia do
          norte da África (atual Tunísia), que controlava o Mediterrâneo Ocidental, a Sicília
          e partes da Ibéria.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>1.ª Guerra Púnica (264–241 a.C.)</h4>
            <p>
              Travada principalmente na Sicília e no mar. Roma, potência terrestre, construiu
              sua primeira frota de guerra em tempo recorde (usando um navio cartaginês naufragado
              como modelo) e derrotou Cartago. A Sicília tornou-se a primeira província romana
              fora da Itália.
            </p>
          </div>
          <div className="lesson-card">
            <h4>2.ª Guerra Púnica (218–201 a.C.)</h4>
            <p>
              A mais famosa: o general cartaginês <strong>Aníbal Barca</strong> cruzou os Alpes
              com elefantes e derrotou Roma em Trébia, Trasimeno e Canas. Mas Roma resistiu,
              Cipião Africano levou a guerra a Cartago e venceu a Batalha de Zama (202 a.C.).
              Cartago perdeu suas províncias ibéricas.
            </p>
          </div>
          <div className="lesson-card">
            <h4>3.ª Guerra Púnica (149–146 a.C.)</h4>
            <p>
              Motivada pela pressão de Catão, o Censor — que encerrava todos os seus discursos
              com "Delenda est Carthago" (Cartago deve ser destruída) —, Roma sitiou e destruiu
              completamente Cartago, salgando simbolicamente seu território. A África tornou-se
              província romana.
            </p>
          </div>
        </div>
        <p>
          A expansão mediterrânea trouxe enormes riquezas a Roma, mas também criou enormes
          tensões sociais: o afluxo de escravos de guerra barateou o trabalho livre, latifúndios
          (<em>latifundia</em>) de proprietários ricos (que podiam explorar o <em>ager publicus</em>,
          terra pública conquistada) cresceram às custas dos pequenos proprietários, que empobreceram
          e migraram para Roma, formando o proletariado urbano (<em>proletarii</em>) — base
          explosiva das crises políticas que se seguiriam.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crise e Guerra Civil</span>
        <h2>6. A Crise da República: dos Gracos a César</h2>
        <p>
          A segunda metade do século II a.C. marcou o início da longa crise da República romana.
          Os <strong>Irmãos Gracos</strong> — <strong>Tibério Graco</strong> (tribuno em 133 a.C.)
          e <strong>Caio Graco</strong> (tribuno em 123–122 a.C.) — tentaram redistribuir o
          <em> ager publicus</em> ocupado ilegalmente pelos grandes latifundiários para os
          camponeses empobrecidos. Ambos foram assassinados pela oligarquia senatorial, mas
          suas ações inauguraram um século de conflitos violentos pela reforma agrária e
          criaram um padrão perigoso: o uso da violência política para resolver disputas
          institucionais.
        </p>
        <p>
          O general <strong>Mário</strong> (cônsul sete vezes entre 107–86 a.C.) reformou o
          exército romano: eliminou o requisito de propriedade, tornando o serviço militar
          acessível aos pobres, que passaram a receber terra do general — não do Estado —
          ao final do serviço. Resultado: exércitos pessoalmente leais ao general, não à
          República. Seu rival <strong>Sila</strong>, usando essa lógica, marchou sobre Roma
          com suas legiões em 88 e 83 a.C. — algo impensável na tradição republicana — e
          ditou o poder pela força. A República sobrevivia formalmente, mas estava corroída.
        </p>
        <p>
          O <strong>Primeiro Triunvirato</strong> (60 a.C.) — aliança informal entre
          <strong> Júlio César</strong>, <strong>Pompeu</strong> e <strong>Crasso</strong> —
          dominou a política romana durante a década seguinte. César usou o consulado de 59 a.C.
          para legalizar o que os triúnviros desejavam e, a seguir, passou uma década conquistando
          a Gália (58–50 a.C.) — base de sua riqueza, de sua lealdade legionária e de sua
          glória pessoal. Quando o Senado, alarmado, ordenou que César licenciasse seu exército
          antes de retornar a Roma, ele desobedeceu: em janeiro de 49 a.C. cruzou o Rubicão
          (fronteira legal da Itália) com suas legiões — declaração de guerra civil. "Alea
          iacta est" ("O dado está lançado"), teria dito.
        </p>
        <p>
          César derrotou Pompeu (morto no Egito em 48 a.C.), tornou-se ditador perpétuo e
          iniciou reformas amplas. Mas em <strong>15 de março de 44 a.C.</strong> (os
          "<strong>Idos de Março</strong>"), foi apunhalado 23 vezes no Senado por uma
          conspiração de mais de 60 senadores liderada por Cássio e Bruto. Os conspiradores
          esperavam restaurar a República; desencadearam mais 14 anos de guerras civis.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Principado</span>
        <h2>7. Augusto e o Principado (27 a.C.–14 d.C.)</h2>
        <p>
          Do <strong>Segundo Triunvirato</strong> (43 a.C.) — Marco Antônio, Otávio (sobrinho-neto
          e filho adotivo de César) e Lépido —, Otávio emergiu vitorioso. Após derrotar Marco
          Antônio e Cleópatra na Batalha de Ácio (31 a.C.) e assumir o Egito como província
          pessoal, Otávio apresentou ao Senado, em 27 a.C., uma encenação política magistral:
          "devolveu" a República ao Senado, que, agradecido e atemorizado, conferiu-lhe uma
          série de poderes extraordinários e o título honorífico de <strong>Augustus</strong>
          ("o venerável"). Nascia o Principado — monarquia disfarçada de República.
        </p>
        <p>
          Augusto acumulou o poder tribunício (sacrossantidade, veto, iniciativa legislativa),
          o proconsulado (comando das províncias com legiões), o consulado (por vários anos)
          e o título de <em>Pontifex Maximus</em> (chefe da religião). Manteve o Senado e as
          magistraturas — mas esvaziados de poder real. A eficiência desse sistema foi notável:
          a <strong>Pax Romana</strong> (27 a.C.–180 d.C., sob a chamada "Época de Ouro" dos
          Antoninos) foi um período de extraordinária estabilidade, prosperidade e crescimento
          demográfico no mundo mediterrâneo.
        </p>
        <div className="lesson-highlight">
          <h3>A Pax Romana em Números</h3>
          <p>
            Durante a Pax Romana, o Império Romano tinha: 65–70 milhões de habitantes;
            85.000 km de estradas pavimentadas (a Via Appia, inaugurada em 312 a.C., é a mais
            famosa); um sistema de aquedutos que fornecia água corrente a cidades como Roma
            (com mais de 1 milhão de habitantes); e uma moeda única (o denário) que facilitava
            o comércio de Lisboa ao Eufrates.
          </p>
        </div>

        {/* SVG 1 — Pirâmide social romana */}
        <div className="lesson-figure">
          <svg viewBox="0 0 480 330" width="480" height="330" aria-label="Pirâmide social romana">
            <rect x="0" y="0" width="480" height="330" fill="#fdf6e3" rx="8" />
            {/* Patrícios */}
            <polygon points="240,10 200,55 280,55" fill="#c0392b" stroke="#922b21" strokeWidth="1.5" />
            <text x="240" y="43" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Patrícios</text>
            {/* Equestres */}
            <polygon points="240,55 170,105 310,105" fill="#e74c3c" stroke="#c0392b" strokeWidth="1.5" />
            <text x="240" y="87" textAnchor="middle" fontSize="11" fill="#fff">Cavaleiros (Equestres)</text>
            {/* Plebeus */}
            <polygon points="240,105 130,165 350,165" fill="#e67e22" stroke="#a04000" strokeWidth="1.5" />
            <text x="240" y="143" textAnchor="middle" fontSize="11" fill="#fff">Plebeus Livres</text>
            {/* Clientes */}
            <polygon points="240,165 90,225 390,225" fill="#f39c12" stroke="#b7770d" strokeWidth="1.5" />
            <text x="240" y="203" textAnchor="middle" fontSize="11" fill="#fff">Clientes e Libertos</text>
            {/* Escravizados */}
            <polygon points="240,225 40,295 440,295" fill="#7f8c8d" stroke="#566573" strokeWidth="1.5" />
            <text x="240" y="268" textAnchor="middle" fontSize="11" fill="#fff">Escravizados</text>
            <rect x="40" y="295" width="400" height="8" fill="#566573" rx="2" />
            {/* Setas com descrição */}
            <text x="295" y="35" fontSize="10" fill="#7b241c">Elite aristocrática hereditária</text>
            <text x="315" y="83" fontSize="10" fill="#922b21">Elite econômica não nobre</text>
            <text x="355" y="140" fontSize="10" fill="#a04000">Cidadãos sem privilégios</text>
            <text x="393" y="200" fontSize="10" fill="#7d6608">Dependentes/ex-escravos</text>
            <text x="443" y="262" fontSize="9" fill="#424949">1/3 da pop. italiana</text>
            <text x="240" y="318" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Hierarquia Social Romana</text>
          </svg>
          <p className="lesson-figure-caption">Pirâmide social romana: da elite patricia à base escravizada.</p>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alto Império</span>
        <h2>8. Alto Império: o Apogeu Romano</h2>
        <p>
          O Alto Império (27 a.C.–284 d.C.) foi o período de maior esplendor de Roma. As
          principais dinastias:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dinastia</th>
                <th>Período</th>
                <th>Imperadores / Eventos Notáveis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Júlio-Claudiana</td>
                <td>27 a.C.–68 d.C.</td>
                <td>Augusto, Tibério, Calígula, Cláudio (conquista da Bretanha), Nero (incêndio de Roma, perseguição a cristãos)</td>
              </tr>
              <tr>
                <td>Flaviana</td>
                <td>69–96 d.C.</td>
                <td>Vespasiano (Coliseu), Tito (destruição do Templo de Jerusalém — 70 d.C.), Domiciano</td>
              </tr>
              <tr>
                <td>Antonina</td>
                <td>96–192 d.C.</td>
                <td>Nerva, Trajano (maior extensão territorial), Adriano (Muro de Adriano), Marco Aurélio (<em>Meditações</em>) — Apogeu da Pax Romana</td>
              </tr>
              <tr>
                <td>Severa</td>
                <td>193–235 d.C.</td>
                <td>Septímio Severo, Caracala (Édito de 212 — cidadania a todos os homens livres do Império)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os <strong>Antoninos</strong> (96–192 d.C.) são frequentemente chamados de "os Cinco
          Bons Imperadores" por Gibbon: Nerva, Trajano, Adriano, Antonino Pio e Marco Aurélio.
          O Édito de Caracala de <strong>212 d.C.</strong> estendeu a cidadania romana a todos
          os homens livres do Império — medida de enorme impacto: a cidadania, que antes era
          instrumento de controle e distinção, tornou-se universal (mas ao custo de perder
          seu valor simbólico).
        </p>
        <p>
          Em <strong>70 d.C.</strong>, o general Tito destruiu Jerusalém e incendiou o Segundo
          Templo judaico — evento traumático que dispersou definitivamente a população judaica
          pela diáspora e marcou o fim do judaísmo do Templo. O Arco de Tito, em Roma, ainda
          representa a menorá (candelabro do Templo) entre os despojos levados a Roma.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sociedade</span>
        <h2>9. Sociedade Romana: Cidadania, Clientelismo e Escravidão</h2>
        <p>
          A sociedade romana era complexamente estratificada e o estatuto jurídico determinava
          todos os direitos de uma pessoa. No topo estavam os <strong>patrícios</strong> —
          famílias hereditariamente aristocráticas que monopolizaram o poder até a luta das ordens.
          Os <strong>equestres</strong> (cavaleiros) eram uma elite econômica que podia acumular
          enorme riqueza no comércio e nas finanças (atividades que os senadores teoricamente
          evitavam), constituindo uma segunda elite poderosa. Os <strong>plebeus</strong> livres
          eram a maioria da cidadania — desde ricos mercadeiros até artesãos e camponeses pobres.
        </p>
        <p>
          O <strong>clientelismo</strong> era o cimento social da República e do Império: o
          <em> patronus</em> (patrono) oferecia proteção jurídica, favores e apoio material;
          o <em>cliens</em> (cliente) retribuía com lealdade política, votos nas assembleias,
          presença nos cortejos matinais (<em>salutatio</em>) e apoio militar. A rede de
          clientes era a base do poder político romano e podia atravessar várias gerações.
        </p>
        <p>
          Os <strong>libertos</strong> eram ex-escravos que receberam a alforria: tornavam-se
          cidadãos romanos (com algumas restrições), mas permaneciam clientes de seus ex-donos.
          No Império, libertos podiam alcançar posições administrativas importantes — o que
          incomodava a aristocracia senatorial. Finalmente, os <strong>escravizados</strong>
          constituíam cerca de um terço da população da Itália no século I a.C.: trabalhavam
          em latifúndios, minas, oficinas artesanais, como gladiadores e como escravos
          domésticos — alguns com alta educação e confiança de seus senhores. A Revolta de
          Espártaco (73–71 a.C.), liderada pelo gladiador trácio Espártaco, mobilizou até
          120.000 escravizados e aterrorizou Roma antes de ser brutalmente suprimida por Crasso.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Baixo Império</span>
        <h2>10. O Baixo Império: Crise, Diocleciano e Constantino</h2>
        <p>
          O século III d.C. foi uma era de crise quase terminal para o Império Romano: em apenas
          50 anos (235–284 d.C.), mais de 50 imperadores reclamaram o título (a maioria morrendo
          violentamente), invasões bárbaras devastaram as fronteiras, epidemias mataram milhões,
          o comércio colapsou e a moeda desvalorizou catastroficamente. Esse período é chamado
          de "<strong>Crise do Século III</strong>" ou "Anarquia Militar".
        </p>
        <p>
          <strong>Diocleciano</strong> (r. 284–305 d.C.) estabilizou o Império através de reformas
          radicais: criou a <strong>Tetrarquia</strong> (quatro governantes dividindo o Império em
          dois Augustos e dois Césares), reformou o exército, reorganizou as províncias, emitiu o
          Édito de Preços Máximos (tentativa frustrada de controlar a inflação) e perseguiu
          severamente os cristãos na "Grande Perseguição" (303–311 d.C.).
        </p>
        <p>
          <strong>Constantino I</strong> (r. 306–337 d.C.) reunificou o Império após nova guerra
          civil. Sua conversão ao cristianismo (ou, ao menos, seu patrocínio da religião) mudou
          a história ocidental: o <strong>Édito de Milão</strong> (313 d.C.) concedeu tolerância
          religiosa a todos, incluindo cristãos; o <strong>Concílio de Niceia</strong> (325 d.C.)
          foi convocado pelo próprio Constantino para unificar a doutrina cristã (definindo o
          credo niceno); e a capital foi transferida para <strong>Constantinopla</strong> (atual
          Istambul), fundada em 330 d.C. no local de Bizâncio.
        </p>
        <p>
          O imperador <strong>Teodósio I</strong> decretou o <strong>Edito de Tessalônica</strong>
          (380 d.C.), tornando o cristianismo niceno a religião oficial do Império — fim da
          tolerância religiosa romana. Em <strong>395 d.C.</strong>, Teodósio dividiu o Império
          entre seus filhos: <strong>Arcádio</strong> (Oriente, capital Constantinopla) e
          <strong> Honório</strong> (Ocidente, capital Milão, depois Ravena). O Ocidente entrou
          em colapso final: em <strong>476 d.C.</strong>, o chefe bárbaro Odoacro depôs o último
          imperador ocidental, o menino <strong>Rômulo Augústulo</strong> — fim convencional da
          Antiguidade e do Império Romano do Ocidente.
        </p>

        {/* SVG 2 — Linha do tempo das fases de Roma */}
        <div className="lesson-figure">
          <svg viewBox="0 0 640 220" width="640" height="220" aria-label="Linha do tempo das fases de Roma">
            <rect x="0" y="0" width="640" height="220" fill="#fdf6e3" rx="6" />
            {/* Linha principal */}
            <line x1="20" y1="110" x2="615" y2="110" stroke="#888" strokeWidth="2" />
            <polygon points="615,105 630,110 615,115" fill="#888" />
            {/* Monarquia */}
            <rect x="20" y="70" width="80" height="35" rx="5" fill="#8e44ad" />
            <text x="60" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Monarquia</text>
            <text x="60" y="130" textAnchor="middle" fontSize="9" fill="#555">753–509 a.C.</text>
            <line x1="60" y1="105" x2="60" y2="110" stroke="#8e44ad" strokeWidth="2" />
            {/* República */}
            <rect x="110" y="70" width="140" height="35" rx="5" fill="#c0392b" />
            <text x="180" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">República</text>
            <text x="180" y="130" textAnchor="middle" fontSize="9" fill="#555">509–27 a.C.</text>
            <line x1="180" y1="105" x2="180" y2="110" stroke="#c0392b" strokeWidth="2" />
            {/* Principado */}
            <rect x="260" y="70" width="150" height="35" rx="5" fill="#2980b9" />
            <text x="335" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Principado/Alto Imp.</text>
            <text x="335" y="130" textAnchor="middle" fontSize="9" fill="#555">27 a.C.–284 d.C.</text>
            <line x1="335" y1="105" x2="335" y2="110" stroke="#2980b9" strokeWidth="2" />
            {/* Baixo Império */}
            <rect x="420" y="70" width="120" height="35" rx="5" fill="#27ae60" />
            <text x="480" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Baixo Império</text>
            <text x="480" y="98" textAnchor="middle" fontSize="10" fill="#fff">(Dominato)</text>
            <text x="480" y="130" textAnchor="middle" fontSize="9" fill="#555">284–476 d.C.</text>
            <line x1="480" y1="105" x2="480" y2="110" stroke="#27ae60" strokeWidth="2" />
            {/* Fim */}
            <circle cx="600" cy="110" r="8" fill="#e74c3c" />
            <text x="600" y="130" textAnchor="middle" fontSize="9" fill="#c0392b">476 d.C.</text>
            <text x="600" y="142" textAnchor="middle" fontSize="9" fill="#555">Queda do</text>
            <text x="600" y="154" textAnchor="middle" fontSize="9" fill="#555">Imp. Ocidente</text>
            {/* Marcos importantes */}
            <text x="60" y="55" textAnchor="middle" fontSize="9" fill="#6c3483">7 Reis</text>
            <text x="180" y="55" textAnchor="middle" fontSize="9" fill="#922b21">XII Tábuas • Gracos • César</text>
            <text x="335" y="55" textAnchor="middle" fontSize="9" fill="#1a5276">Pax Romana • Trajano • Caracala</text>
            <text x="480" y="55" textAnchor="middle" fontSize="9" fill="#1e8449">Diocleciano • Constantino</text>
            <text x="320" y="195" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Fases Históricas de Roma</text>
          </svg>
          <p className="lesson-figure-caption">Linha do tempo das grandes fases da história romana: da Monarquia ao colapso do Ocidente.</p>
        </div>
      </section>

      {/* ── Seção 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>11. O Legado Romano: Direito, Língua e Instituições</h2>
        <p>
          O legado de Roma para a civilização ocidental é tão profundo e difuso que frequentemente
          passa despercebido. O <strong>direito romano</strong> é o fundamento de praticamente
          todos os sistemas jurídicos da Europa continental, da América Latina e de muitas outras
          regiões: conceitos como propriedade privada, contrato, pessoa jurídica, presunção de
          inocência e divisão entre direito público e privado são invenções romanas. O Corpus
          Juris Civilis de Justiniano (534 d.C.), a grande codificação do direito romano, foi
          redescoberto no século XI nas universidades medievais italianas e tornou-se a base
          da tradição jurídica romanística.
        </p>
        <p>
          A <strong>língua latina</strong> deu origem às línguas românicas — português, espanhol,
          francês, italiano, romeno — faladas hoje por mais de 800 milhões de pessoas. O
          <strong> alfabeto latino</strong>, herdado dos etruscos (que o receberam dos gregos),
          é o mais difundido do mundo. O <strong>calendário</strong> que usamos (gregoriano)
          é uma reforma do calendário juliano de Júlio César (46 a.C.), que por sua vez adaptou
          o calendário solar egípcio. As <strong>instituições políticas</strong> ocidentais —
          Senado, veto, república, constituição, mandato, magistratura — derivam do vocabulário
          e das práticas romanas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Contribuição Romana</th>
                <th>Herança Atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direito</td>
                <td>Direito Romano (XII Tábuas, Corpus Juris)</td>
                <td>Direito civil de quase toda a América Latina e Europa</td>
              </tr>
              <tr>
                <td>Língua</td>
                <td>Latim</td>
                <td>Português, espanhol, francês, italiano, romeno</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>República, Senado, veto, magistratura</td>
                <td>Vocabulário e conceitos políticos modernos</td>
              </tr>
              <tr>
                <td>Engenharia</td>
                <td>Arco, aqueduto, estradas, concreto (opus caementicium)</td>
                <td>Técnicas de construção; estradas ainda em uso</td>
              </tr>
              <tr>
                <td>Calendário</td>
                <td>Calendário Juliano (46 a.C.)</td>
                <td>Base do Calendário Gregoriano (1582)</td>
              </tr>
              <tr>
                <td>Religião</td>
                <td>Difusão do Cristianismo via Império Romano</td>
                <td>Catolicismo romano como instituição herdeira</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 12 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese ENEM</span>
        <h2>12. Como o ENEM Cobra Roma</h2>
        <p>
          Roma é um dos temas mais recorrentes nas questões de Ciências Humanas do ENEM,
          abordada principalmente sob quatro ângulos: (1) a análise das instituições políticas
          romanas como precursoras de conceitos modernos (República, Senado, direito escrito,
          divisão de poderes, cidadania); (2) a questão da escravidão na Antiguidade e seus
          limites e resistências (Revolta de Espártaco); (3) o papel do Império Romano na
          difusão do Cristianismo e suas implicações para a religião ocidental; (4) a crise
          do Império e as causas da queda de Roma — debate clássico sobre colapso de civilizações.
        </p>
        <p>
          Questões sobre Roma frequentemente usam fontes primárias (trechos de Tito Lívio,
          Cícero, Tácito, Suetônio ou inscrições em latim) como ponto de partida para análise
          histórica. O candidato deve ser capaz de identificar a perspectiva do autor (um
          senador aristocrata difere de um plebeu), o contexto de produção e a função
          propagandística ou literária do texto.
        </p>
        <div className="lesson-highlight">
          <h3>Palavras-chave ENEM</h3>
          <p>
            República — Senado — Cônsules — Patrícios × Plebeus — Lei das XII Tábuas —
            Luta das Ordens — Guerras Púnicas — Aníbal — Gracos — Primeiro Triunvirato —
            Ides de Março — Augusto — Pax Romana — Tito (Jerusalém) — Édito de Milão —
            Constantino — Queda de Roma (476 d.C.) — Veto — Ager Publicus
          </p>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <Exercise
        level="Básico"
        title="Luta das Ordens"
        statement={
          <p>
            A "Lei das XII Tábuas" (450 a.C.) é considerada uma conquista fundamental dos
            plebeus na luta das ordens da República Romana. Por que a escrita e publicação
            das leis foi uma vitória plebeia?
          </p>
        }
        options={[
          { letter: "A", text: "Porque tornou o latim obrigatório como língua oficial de Roma, eliminando os dialetos regionais dos plebeus." },
          { letter: "B", text: "Porque garantiu aos plebeus o direito de votar nas assembleias centuriatas, anteriormente reservada aos patrícios." },
          { letter: "C", text: "Porque tornou o direito público e acessível, impedindo que os magistrados patrícios o interpretassem arbitrariamente em seu próprio favor.", correct: true },
          { letter: "D", text: "Porque distribuiu terras públicas (ager publicus) a camponeses pobres, resolvendo a questão agrária." },
          { letter: "E", text: "Porque criou o cargo de tribuno da plebe, com poder de veto sobre os cônsules patrícios." },
        ]}
        resolution={
          <p>
            Antes das XII Tábuas, o direito romano era oral e interpretado exclusivamente pelos
            pontifíces patrícios — os únicos que conheciam os dias propícios para ajuizar causas,
            as fórmulas legais e os procedimentos. Ao ser escrito e exposto em praça pública,
            o direito tornou-se acessível a todos: qualquer cidadão podia saber antecipadamente
            quais eram as regras. Isso limitou o poder discricionário dos magistrados patrícios
            e foi uma vitória fundamental da luta plebeia pela igualdade jurídica.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Crise da República"
        statement={
          <p>
            Caio Mário (cônsul sete vezes, 107–86 a.C.) reformou o exército romano eliminando
            o requisito de propriedade para o serviço militar. Analise as consequências políticas
            dessa reforma:<br />
            I. Os soldados passaram a depender do general (não do Estado) para receber terra
            ao final do serviço, tornando-se pessoalmente leais a ele.<br />
            II. A reforma fortaleceu as instituições republicanas ao democratizar o acesso às
            armas para todos os cidadãos.<br />
            III. A reforma contribuiu para as guerras civis do século I a.C., pois os generais
            passaram a ter exércitos dispostos a lutar em seu nome.<br />
            Está(ão) correta(s) apenas:
          </p>
        }
        options={[
          { letter: "A", text: "I." },
          { letter: "B", text: "II." },
          { letter: "C", text: "I e III.", correct: true },
          { letter: "D", text: "II e III." },
          { letter: "E", text: "I, II e III." },
        ]}
        resolution={
          <p>
            I está correta: a dependência dos soldados em relação ao general para a distribuição
            de terra criou lealdade pessoal, não institucional. III está correta: foi exatamente
            isso que permitiu a Sila, Mário, César e outros marcharem sobre Roma com suas legiões.
            II está incorreta: ao contrário, a reforma enfraqueceu as instituições republicanas
            ao criar exércitos pessoais que podiam ser voltados contra a própria República.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Édito de Milão e Tolerância Religiosa"
        statement={
          <p>
            "Consideramos conveniente que a Constantino Augusto e a mim, Licínio Augusto, quando
            tínhamos felizmente nos encontrado em Milão [...] nos parecia conveniente expedir
            ordenanças que garantissem o respeito e a veneração devidos à Divindade." (Édito
            de Milão, 313 d.C.)<br /><br />
            O Édito de Milão (313 d.C.) representou uma ruptura com a política religiosa romana
            anterior. Qual a mudança mais significativa que ele introduziu?
          </p>
        }
        options={[
          { letter: "A", text: "Tornou o Cristianismo a única religião permitida no Império, proibindo todos os cultos pagãos imediatamente." },
          { letter: "B", text: "Estabeleceu a tolerância religiosa universal no Império Romano, encerrando as perseguições e devolvendo bens confiscados aos cristãos.", correct: true },
          { letter: "C", text: "Criou a Igreja Católica como instituição oficial do Estado Romano, nomeando o papa como autoridade suprema." },
          { letter: "D", text: "Proibiu a prática de todos os cultos orientais no Ocidente do Império, inclusive o judaísmo e o mitraísmo." },
          { letter: "E", text: "Transferiu a capital do Império de Roma para Jerusalém, tornando a cidade cristã o centro do mundo romano." },
        ]}
        resolution={
          <p>
            O Édito de Milão (313 d.C.) não tornou o Cristianismo religião obrigatória —
            isso só aconteceu com o Édito de Tessalônica de Teodósio em 380 d.C. O Édito de
            Milão estabeleceu tolerância religiosa universal: tanto cristãos quanto pagãos e
            outras religiões podiam praticar seus cultos livremente. Também ordenou a devolução
            dos bens confiscados durante as perseguições de Diocleciano. Foi um passo fundamental
            para a ascensão do Cristianismo, mas não sua imposição como religião de Estado.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Guerras Púnicas e Imperialismo"
        statement={
          <p>
            O senador romano Catão, o Censor, encerrava todos os seus discursos no Senado com
            a frase "Ceterum censeo Carthaginem esse delendam" ("Além disso, considero que
            Cartago deve ser destruída"), independentemente do tema debatido. Cartago foi
            destruída na 3.ª Guerra Púnica (149–146 a.C.).<br /><br />
            Essa postura de Catão revela qual aspecto do imperialismo romano republicano?
          </p>
        }
        options={[
          { letter: "A", text: "O respeito romano pela autonomia dos povos vencidos, que eram incorporados como aliados e não como províncias sujeitas." },
          { letter: "B", text: "A obsessão romana com a segurança, que levava à eliminação sistemática de qualquer potência que pudesse ameaçar Roma no futuro, mesmo após a derrota.", correct: true },
          { letter: "C", text: "A política romana de tolerância religiosa, que levava Catão a defender a preservação dos templos cartagineses como patrimônio cultural." },
          { letter: "D", text: "O interesse dos senadores romanos em manter Cartago como rival comercial, o que justificava investimentos militares constantes na África." },
          { letter: "E", text: "A visão geopolítica romana de que Cartago devia ser preservada como estado-tampão contra as tribos berberes do interior africano." },
        ]}
        resolution={
          <p>
            A obsessão de Catão com a destruição de Cartago — mesmo após a 2.ª Guerra Púnica,
            quando Cartago havia sido drasticamente enfraquecida — revela um aspecto central do
            imperialismo romano tardio da República: a tendência à eliminação definitiva dos
            rivais, não à sua incorporação como aliados subordinados. A 3.ª Guerra Púnica foi,
            por isso, uma guerra de extermínio — a cidade foi arrasada, a população vendida como
            escrava e o território salgado (simbolicamente). Esse padrão se repetiria com Corinto
            (também destruída em 146 a.C.) e Jerusalém (70 d.C.).
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Crise do Século III e Tetrarquia"
        statement={
          <p>
            Entre 235 e 284 d.C., o Império Romano viveu a "Crise do Século III": mais de 50
            imperadores se sucederam em 50 anos, a maioria assassinada; invasões bárbaras
            penetravam as fronteiras; a moeda foi desvalorizada; e o comércio entrou em colapso.
            O imperador Diocleciano (284–305 d.C.) respondeu criando a Tetrarquia (quatro
            governantes).<br /><br />
            Qual lógica política explica a criação da Tetrarquia como resposta à crise?
          </p>
        }
        options={[
          { letter: "A", text: "A intenção de democratizar o poder imperial, criando um sistema de eleições para escolher os quatro imperadores periodicamente." },
          { letter: "B", text: "A necessidade de dividir a administração de um território vastíssimo e responder simultaneamente a ameaças em múltiplas fronteiras, com governantes capazes de agir localmente.", correct: true },
          { letter: "C", text: "O desejo de Diocleciano de criar uma sucessão dinástica hereditária, garantindo que seus filhos governassem as quatro partes do Império." },
          { letter: "D", text: "A pressão dos bárbaros, que exigiram ser incluídos no governo imperial como condição para não invadir as fronteiras romanas." },
          { letter: "E", text: "A reforma religiosa de Diocleciano, que dividiu o Império segundo as quatro religiões principais: paganismo, Judaísmo, Mitraísmo e Cristianismo." },
        ]}
        resolution={
          <p>
            A Tetrarquia (dois Augustos + dois Césares) respondia a problemas concretos: um único
            imperador em Roma não conseguia defender ao mesmo tempo fronteiras no Reno, no Danúbio,
            no Eufrates e na Bretanha. Com quatro governantes distribuídos estrategicamente (Roma,
            Trier, Antioquia, Nicomédia), a resposta militar podia ser rápida e local. A lógica
            era administrativa e militar, não democrática ou dinástica — Diocleciano esperava
            que os Césares substituíssem os Augustos por mérito, não por herança, embora na
            prática a successão logo retornasse a conflitos sangrentos.
          </p>
        }
      />
    </article>
  );
}
