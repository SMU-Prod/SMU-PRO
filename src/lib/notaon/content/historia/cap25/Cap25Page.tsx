"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 25</span>
          <h1>União Ibérica, Invasões Holandesas e Bandeirismo</h1>
          <p>
            Entre 1580 e 1654, o Brasil passou pelas experiências mais dramáticas
            de sua fase colonial: a subordinação à Coroa espanhola durante a União
            Ibérica, a ocupação holandesa no Nordeste — com seu breve mas
            sofisticado experimento ilustrado sob Maurício de Nassau — e a
            resistência que culminou na Insurreição Pernambucana. Em paralelo, os
            bandeirantes desbravavam o interior do continente, destruindo aldeias
            indígenas, aprisionando nativos e empurrando as fronteiras muito além
            dos limites fixados por Tordesilhas, redesenhando o mapa do Brasil que
            conhecemos hoje.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto europeu</span>
        <h2>1. A Crise Dinástica Portuguesa e a União Ibérica (1580–1640)</h2>
        <p>
          Em agosto de 1578, o rei D. Sebastião de Portugal morreu sem herdeiros
          na Batalha de Alcácer Quibir, no norte da África, onde conduziu uma
          cruzada fracassada contra os mouros do Marrocos. Esse desastre militar,
          que ficou conhecido como a "morte do Desejado", inaugurou uma crise
          dinástica que culminaria na perda da independência portuguesa por
          sessenta anos.
        </p>
        <p>
          Após um brevíssimo reinado do cardeal D. Henrique (1578–1580), a
          Coroa passou a ser disputada por três pretendentes: D. Antônio, prior do
          Crato (com base popular e apoio de parte da nobreza), D. Catarina,
          duquesa de Bragança, e Filipe II da Espanha, neto de D. Manuel I. Com
          recursos militares superiores, Filipe II fez o duque de Alba invadir
          Portugal. A derrota de D. Antônio na batalha de Alcântara (1580)
          consolidou a União das Coroas, formalizada nas Cortes de Tomar (1581),
          nas quais o novo monarca jurou respeitar as leis e instituições
          portuguesas.
        </p>
        <p>
          As Cortes de Tomar estabeleceram garantias importantes: Portugal manteria
          sua administração própria (Conselho de Portugal), suas conquistas
          ultramarinas seriam geridas separadamente, os cargos públicos ficariam
          reservados a portugueses e o comércio com as colônias permaneceria como
          monopólio lusitano. Na prática, porém, essas garantias foram sendo
          erodidas à medida que os interesses espanhóis prevaleciam.
        </p>
      </section>

      {/* ── SVG 1: Linha do Tempo da União Ibérica ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 760 180" xmlns="http://www.w3.org/2000/svg" aria-label="Linha do tempo da União Ibérica">
          {/* Linha principal */}
          <line x1="40" y1="90" x2="720" y2="90" stroke="#6b7280" strokeWidth="3"/>
          {/* Setas */}
          <polygon points="720,85 735,90 720,95" fill="#6b7280"/>

          {/* Pontos e labels */}
          <circle cx="80" cy="90" r="7" fill="#dc2626"/>
          <text x="80" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1578</text>
          <text x="80" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Batalha de</text>
          <text x="80" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">Alcácer Quibir</text>

          <circle cx="200" cy="90" r="7" fill="#dc2626"/>
          <text x="200" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1580</text>
          <text x="200" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Filipe II assume</text>
          <text x="200" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">Portugal</text>

          <circle cx="340" cy="90" r="7" fill="#b45309"/>
          <text x="340" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1630</text>
          <text x="340" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Holandeses tomam</text>
          <text x="340" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">Pernambuco</text>

          <circle cx="460" cy="90" r="7" fill="#15803d"/>
          <text x="460" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1640</text>
          <text x="460" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Restauração</text>
          <text x="460" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">portuguesa</text>

          <circle cx="580" cy="90" r="7" fill="#15803d"/>
          <text x="580" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1645</text>
          <text x="580" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Insurreição</text>
          <text x="580" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">Pernambucana</text>

          <circle cx="700" cy="90" r="7" fill="#15803d"/>
          <text x="700" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">1654</text>
          <text x="700" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Expulsão</text>
          <text x="700" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">holandesa</text>

          <text x="380" y="18" textAnchor="middle" fontSize="13" fill="#111827" fontWeight="bold">Linha do Tempo: União Ibérica e Invasões Holandesas</text>
        </svg>
        <figcaption>Principais marcos do período 1578–1654 no Brasil colonial.</figcaption>
      </figure>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Consequências para o Brasil</span>
        <h2>2. Impactos da União Ibérica no Brasil</h2>
        <p>
          A União Ibérica teve consequências profundas para a colônia americana
          portuguesa. O mais imediato foi o fim prático do Tratado de Tordesilhas:
          como Portugal e Espanha estavam sob a mesma coroa, a divisão meridiana do
          mundo entre as duas potências perdeu sentido. Os bandeirantes aproveitaram
          essa brecha para avançar muito além da linha, consolidando domínios que
          seriam legitimados posteriormente pelo Tratado de Madri (1750).
        </p>
        <p>
          Um segundo impacto decisivo foi a transferência de inimizades: os adversários
          da Espanha — especialmente holandeses e ingleses — passaram automaticamente
          a atacar os domínios portugueses. A Holanda, em guerra de independência
          contra a Espanha desde 1568, via no açúcar nordestino um prêmio estratégico
          e econômico de enorme valor. As primeiras tentativas holandesas de conquistar
          a Bahia (1624–25) fracassaram, mas serviram de aprendizado para a invasão
          definitiva de Pernambuco.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Consequências da União Ibérica (1580–1640) para o Brasil</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Impacto</th>
                <th>Desdobramento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tordesilhas</td>
                <td>Linha perde vigência prática</td>
                <td>Expansão bandeirante para o oeste e sul</td>
              </tr>
              <tr>
                <td>Inimigos externos</td>
                <td>Holandeses e ingleses atacam colônia</td>
                <td>Invasões holandesas no Nordeste (1624, 1630)</td>
              </tr>
              <tr>
                <td>Administração</td>
                <td>Governadores-gerais nomeados por Madri</td>
                <td>Interesses espanhóis sobrepõem-se aos lusitanos</td>
              </tr>
              <tr>
                <td>Comércio</td>
                <td>Contrabando e pirataria aumentam</td>
                <td>Enfraquecimento do monopólio comercial português</td>
              </tr>
              <tr>
                <td>Escravidão indígena</td>
                <td>Leis espanholas proibiam, mas eram ignoradas</td>
                <td>Intensificação do bandeirismo de apresamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ocupação holandesa</span>
        <h2>3. A Companhia das Índias Ocidentais e a Conquista do Nordeste</h2>
        <p>
          A Companhia das Índias Ocidentais (WIC — <em>West-Indische Compagnie</em>),
          fundada em 1621, era um instrumento de guerra econômica da República das
          Províncias Unidas contra a Espanha. Com capital privado e poderes quase
          soberanos — podendo declarar guerra, fazer tratados, colonizar e administrar
          territórios —, a WIC tinha como alvo principal o lucrativo comércio do
          açúcar nordestino.
        </p>
        <p>
          Em 1624, uma frota holandesa tomou Salvador, mas foi expulsa no ano
          seguinte por uma potente esquadra luso-espanhola. A segunda tentativa,
          em 1630, foi mais cuidadosa: uma armada de 67 navios e 7.000 homens
          atacou Recife e Olinda. Após resistência inicial, os holandeses
          consolidaram o domínio sobre toda a faixa que ia do Maranhão ao Rio
          Grande do Norte, controlando a maior parte da produção açucareira mundial.
        </p>
        <p>
          Os senhores de engenho locais — muitos deles cristãos-novos perseguidos
          pela Inquisição em Portugal — a princípio colaboraram com os invasores,
          que prometiam liberdade religiosa e manutenção das propriedades. No
          entanto, as dívidas acumuladas com a WIC e a opressão fiscal crescente
          gerariam o terreno para a posterior resistência.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Governo Nassau</span>
        <h2>4. Maurício de Nassau e o Brasil Holandês (1637–1644)</h2>
        <p>
          João Maurício de Nassau-Siegen chegou ao Recife em 1637 como
          governador-geral do Brasil Holandês. Seu governo representou um experimento
          notável de colonialismo ilustrado: Nassau trouxe cientistas, artistas e
          naturalistas, mandou construir pontes, jardins botânicos, observatórios
          astronômicos e o primeiro zoológico das Américas. A cidade de Mauritsstad
          (atual Recife) foi planejada em moldes europeus modernos.
        </p>
        <p>
          Entre os intelectuais que Nassau trouxe destacam-se o pintor Frans Post,
          que registrou paisagens brasileiras em quadros que circularam por toda a
          Europa, e Albert Eckhout, cujos retratos de indígenas, africanos
          escravizados e mestiços constituem documentos etnográficos únicos. O
          naturalista Georg Marcgraf realizou observações astronômicas e descreveu
          centenas de espécies da fauna e flora brasileiras na obra
          <em> Historia Naturalis Brasiliae</em> (1648).
        </p>
        <p>
          Nassau praticou tolerância religiosa — judeus, católicos e protestantes
          conviviam relativamente em paz em Recife — e buscou conquistar a adesão
          dos senhores de engenho locais por meio de concessões financeiras e
          respeito às hierarquias sociais existentes. Mas a WIC, insatisfeita com
          os custos, exigiu maior extração fiscal. Nassau renunciou em 1644, e
          sem sua liderança moderada, a situação degradou-se rapidamente.
        </p>

        <div className="lesson-highlight">
          <strong>Povos africanos no Brasil holandês:</strong> os registros de
          Eckhout mostram africanos escravizados em trajes elaborados, revelando
          a complexidade das identidades diaspóricas no século XVII. A escravidão
          continuou plena sob o domínio holandês — a WIC era, ela própria, uma
          das maiores traficantes de africanos do Atlântico.
        </div>
      </section>

      {/* ── SVG 2: Mapa da invasão holandesa ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa esquemático do domínio holandês no Nordeste">
          {/* Contorno esquemático do Brasil */}
          <path d="M 120,30 L 380,30 L 420,150 L 400,280 L 320,370 L 200,370 L 100,300 L 80,180 Z"
                fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
          {/* Região holandesa */}
          <path d="M 260,30 L 380,30 L 420,150 L 380,200 L 310,180 L 280,120 L 260,60 Z"
                fill="#fbbf24" stroke="#d97706" strokeWidth="2" opacity="0.7"/>
          {/* Marcadores de cidades */}
          <circle cx="340" cy="120" r="6" fill="#dc2626"/>
          <text x="350" y="118" fontSize="11" fill="#1f2937" fontWeight="bold">Recife / Olinda</text>
          <circle cx="310" cy="60" r="5" fill="#dc2626"/>
          <text x="320" y="58" fontSize="10" fill="#1f2937">Fortaleza</text>
          <circle cx="260" cy="80" r="5" fill="#dc2626"/>
          <text x="200" y="78" fontSize="10" fill="#1f2937">São Luís</text>
          <circle cx="280" cy="155" r="5" fill="#1d4ed8"/>
          <text x="222" y="153" fontSize="10" fill="#1d4ed8">Salvador (resistiu)</text>
          {/* Legenda */}
          <rect x="40" y="300" width="18" height="14" fill="#fbbf24" stroke="#d97706"/>
          <text x="63" y="312" fontSize="11" fill="#1f2937">Domínio WIC (1630–1654)</text>
          <rect x="40" y="320" width="18" height="14" fill="#e5e7eb" stroke="#9ca3af"/>
          <text x="63" y="332" fontSize="11" fill="#1f2937">Território lusitano</text>
          <text x="250" y="395" textAnchor="middle" fontSize="12" fill="#111827" fontWeight="bold">Nordeste Holandês — séc. XVII (esquemático)</text>
        </svg>
        <figcaption>Extensão aproximada do domínio da WIC no Nordeste brasileiro entre 1630 e 1654.</figcaption>
      </figure>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fim da ocupação</span>
        <h2>5. A Insurreição Pernambucana e a Expulsão Holandesa (1645–1654)</h2>
        <p>
          Após a partida de Nassau, a WIC aumentou os impostos e exigiu o pagamento
          imediato de dívidas dos senhores de engenho. A resposta foi a Insurreição
          Pernambucana, que começou em 1645 como um levante local e cresceu até
          tornar-se uma guerra de reconquista. A resistência foi notável pela sua
          composição multiétnica: senhores de engenho luso-brasileiros, índios
          aliados — especialmente os Tabajara e os Potiguar — e africanos
          escravizados que lutavam na esperança de liberdade ou simplesmente por
          lealdade a seus senhores.
        </p>
        <p>
          As batalhas dos Montes Guararapes (1648 e 1649) foram decisivas. Sob o
          comando de Francisco Barreto e com a liderança guerrilheira de Henrique
          Dias (africano liberto) e Filipe Camarão (indígena tupinambá batizado),
          as forças luso-brasileiras derrotaram os holandeses em campo aberto.
          Recife capitulou em 1654 após bloqueio naval. Os historiadores
          nacionalistas do século XIX transformaram Guararapes no berço da
          identidade brasileira — a nação nascendo da fusão das três raças —,
          uma narrativa que, embora ideologizada, revela o caráter multiétnico
          real do conflito.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Líderes da Insurreição Pernambucana (1645–1654)</caption>
            <thead>
              <tr>
                <th>Líder</th>
                <th>Origem</th>
                <th>Papel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Francisco Barreto</td>
                <td>Luso-brasileiro, nobre</td>
                <td>Comandante-geral das forças</td>
              </tr>
              <tr>
                <td>André Vidal de Negreiros</td>
                <td>Colonizador nordestino</td>
                <td>Estratégia militar e diplomacia</td>
              </tr>
              <tr>
                <td>Henrique Dias</td>
                <td>Africano liberto</td>
                <td>Comandante dos terços de homens negros</td>
              </tr>
              <tr>
                <td>Filipe Camarão (Poti)</td>
                <td>Indígena Potiguar</td>
                <td>Liderança guerrilheira indígena</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Expansão territorial</span>
        <h2>6. O Bandeirismo: Definição e Contexto</h2>
        <p>
          Bandeirismo é o nome dado às expedições organizadas a partir de São Paulo
          de Piratininga para o interior do território sul-americano entre os séculos
          XVI e XVIII. Os bandeirantes eram, em sua maioria, mamelucos — filhos de
          colonizadores portugueses com mulheres indígenas —, dotados de habilidades
          de sobrevivência na mata, conhecedores das línguas tupis e inseridos em
          redes de parentesco com diferentes etnias. Sua mobilidade e resistência
          às condições inóspitas do sertão os distinguia dos colonizadores do litoral.
        </p>
        <p>
          O bandeirismo surgiu de uma necessidade econômica: São Paulo estava à
          margem do ciclo açucareiro e não tinha acesso fácil ao tráfico atlântico
          de africanos escravizados. A solução paulista foi capturar indígenas no
          interior — a chamada escravidão indígena —, violando sistematicamente as
          leis da Coroa e as reduções jesuíticas. As expedições ficaram conhecidas
          como <em>entradas</em> (quando oficiais, financiadas pela Coroa) e
          <em> bandeiras</em> (quando particulares).
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de expedição</span>
        <h2>7. Os Três Tipos de Bandeirismo</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <h3>Bandeiras de Apresamento</h3>
            <p>
              Objetivo central era capturar indígenas para vender como mão de obra
              escrava aos engenhos paulistas e fluminenses. Destruíam aldeias e missões
              jesuíticas espanholas (reduções) no sul do continente — ataques como os
              ao Guairá (1628–1629) e ao Tape (1636–1637) resultaram na escravização
              ou morte de dezenas de milhares de indígenas guaranis.
            </p>
          </div>
          <div className="lesson-card">
            <h3>Bandeiras de Prospecção</h3>
            <p>
              Buscavam ouro, prata e pedras preciosas. Foram essas expedições que
              descobriram as jazidas de ouro de Minas Gerais na década de 1690,
              inaugurando o ciclo minerador. Figuras como Fernão Dias Pais Leme,
              o "caçador de esmeraldas", percorreram o interior por anos em busca
              de riquezas minerais.
            </p>
          </div>
          <div className="lesson-card">
            <h3>Bandeiras de Sertanismo de Contrato</h3>
            <p>
              Contratadas pela Coroa ou por capitanias para destruir quilombos
              e subjugar tribos consideradas hostis. O exemplo mais célebre é
              a destruição do Quilombo dos Palmares (1694) por Domingos Jorge
              Velho — símbolo da violência colonial contra a resistência negra.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais Bandeirantes e suas Expedições</caption>
            <thead>
              <tr>
                <th>Bandeirante</th>
                <th>Tipo</th>
                <th>Feito / Região</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raposo Tavares</td>
                <td>Apresamento / Exploração</td>
                <td>Destruiu reduções jesuíticas; circunavegou a América do Sul</td>
                <td>1628–1651</td>
              </tr>
              <tr>
                <td>Fernão Dias Pais Leme</td>
                <td>Prospecção</td>
                <td>Expedição às esmeraldas — Minas Gerais</td>
                <td>1674–1681</td>
              </tr>
              <tr>
                <td>Borba Gato</td>
                <td>Prospecção</td>
                <td>Descoberta do ouro em Sabará/Rio das Velhas</td>
                <td>1690s</td>
              </tr>
              <tr>
                <td>Bartolomeu Bueno da Silva (Anhanguera)</td>
                <td>Prospecção</td>
                <td>Ouro e pedras em Goiás</td>
                <td>1722–1725</td>
              </tr>
              <tr>
                <td>Domingos Jorge Velho</td>
                <td>Sertanismo de contrato</td>
                <td>Destruição do Quilombo dos Palmares</td>
                <td>1694</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impacto indígena</span>
        <h2>8. O Bandeirismo e os Povos Indígenas</h2>
        <p>
          Para os povos indígenas, o bandeirismo foi catastrófico. As estimativas
          sugerem que dezenas de milhares de guaranis foram escravizados ou mortos
          nas incursões ao Guairá e ao Tape. As reduções jesuíticas espanholas —
          que organizavam populações indígenas em aldeias produtivas sob regime
          missionário — foram destruídas sistematicamente entre 1628 e 1641. Os
          padres e seus protegidos refugiaram-se mais ao sul, recomeçando as
          missões na região do atual Rio Grande do Sul e Paraguai.
        </p>
        <p>
          O bandeirismo também acelerou processos de deslocamento étnico: tribos
          fugiam para regiões mais inacessíveis, modificando padrões de ocupação
          territorial que existiam há milênios. Grupos antes estabelecidos no
          planalto paulista foram empurrados para o interior ou extintos. A memória
          dos jesuítas registrou essas violências, mas os colonizadores paulistas
          construíram um discurso heroico do desbravamento que ainda influencia
          parte da historiografia e do imaginário nacional.
        </p>
        <div className="lesson-highlight">
          <strong>Escravidão indígena vs. africana:</strong> a legislação colonial
          portuguesa oscilou entre permitir e proibir a escravidão indígena. As
          leis de 1570, 1587, 1609, 1611 e 1680 alternavam entre liberalizar
          e restringir — revelando o conflito entre interesses dos colonos (que
          queriam mão de obra gratuita), dos jesuítas (que queriam proteger os
          índios) e da Coroa (que queria manter o controle). A escravidão africana
          era mais estável juridicamente e mais lucrativa para o tráfico atlântico.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado territorial</span>
        <h2>9. O Bandeirismo e a Formação do Território Brasileiro</h2>
        <p>
          O legado mais duradouro do bandeirismo foi a expansão territorial que
          tornou o Brasil o maior país da América Latina. Ao avançarem para o
          oeste, o sul e o norte bem além de Tordesilhas, os bandeirantes criaram
          <em> fatos consumados</em> que seriam legalizados pelo Tratado de Madri
          (1750), baseado no princípio do <em>uti possidetis</em> (quem ocupa,
          possui). As cidades fundadas ao longo das rotas bandeirantes —
          Itu, Sorocaba, Cuiabá, Goiânia, entre outras — tornaram-se núcleos
          de colonização permanente.
        </p>
        <p>
          O bandeirismo também levou à descoberta das minas de ouro e diamante,
          desencadeando o ciclo minerador do século XVIII — o período de maior
          complexidade social da colônia. Sem os bandeirantes, é improvável que o
          Brasil tivesse hoje os contornos que tem. Mas esse legado foi construído
          sobre a destruição sistemática de povos indígenas e o tráfico de seres
          humanos — africanos e ameríndios —, fato que o discurso épico tradicional
          sobre os "heróis do sertão" tendia a apagar.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Impacto Territorial do Bandeirismo</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>Expansão</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sul</td>
                <td>Destruição das Missões Jesuíticas</td>
                <td>Domínio luso sobre o atual RS e PR</td>
              </tr>
              <tr>
                <td>Centro-Oeste</td>
                <td>Expedições de Anhanguera</td>
                <td>Fundação de Goiás; mineração aurífera</td>
              </tr>
              <tr>
                <td>Norte/Amazônia</td>
                <td>Expedições de Raposo Tavares</td>
                <td>Mapeamento do interior amazônico</td>
              </tr>
              <tr>
                <td>Minas Gerais</td>
                <td>Descoberta do ouro (1690s)</td>
                <td>Início do ciclo minerador; deslocamento do eixo econômico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Conexões Temáticas para o ENEM</h2>
        <p>
          O ENEM frequentemente articula os temas deste capítulo com questões
          sobre identidade nacional, diversidade étnica e relações de poder.
          A Insurreição Pernambucana aparece em questões sobre resistência colonial
          e formação da identidade brasileira — especialmente o papel de africanos
          e indígenas na defesa do território. O bandeirismo é acionado em temas
          de expansão territorial, escravidão indígena e conflito entre colonos e
          jesuítas. A União Ibérica conecta-se a questões sobre geopolítica ibérica
          e tratados coloniais. Nassau aparece em perguntas sobre diversidade cultural,
          ciência no período colonial e tolerância religiosa.
        </p>
        <p>
          Um eixo transversal essencial: a escravidão africana e a violência contra
          os povos indígenas não são "episódios" isolados — são estruturais ao
          projeto colonial. Todo período estudado neste capítulo é atravessado por
          esse eixo. Reconhecer esse fio condutor é fundamental para responder
          questões de interpretação de texto no ENEM, que frequentemente mobilizam
          documentos do período colonial para perguntar sobre continuidades e rupturas.
        </p>
      </section>

      {/* ── EXERCISES ── */}
      <Exercise
        level="Básico"
        title="União Ibérica: causa"
        statement={
          <p>
            A União Ibérica (1580–1640) resultou diretamente de qual evento
            ocorrido na segunda metade do século XVI?
          </p>
        }
        options={[
          { letter: "A", text: "A assinatura do Tratado de Tordesilhas, que unificou as duas coroas ibéricas sob mediação papal." },
          { letter: "B", text: "A morte de D. Sebastião sem herdeiros na Batalha de Alcácer Quibir (1578), abrindo crise dinástica em Portugal.", correct: true },
          { letter: "C", text: "A expulsão dos mouros da Península Ibérica em 1492, que fortaleceu a aliança entre Portugal e Espanha." },
          { letter: "D", text: "A descoberta do Brasil em 1500, cujas riquezas atraíram a atenção do rei espanhol Filipe II." },
          { letter: "E", text: "A Reforma Protestante, que levou as coroas católicas ibéricas a se unirem contra os hereges do norte." },
        ]}
        resolution={
          <p>
            A morte de D. Sebastião em 1578, sem herdeiros, desencadeou uma
            disputa dinástica que Filipe II da Espanha venceu militarmente,
            consolidando a União das Coroas nas Cortes de Tomar (1581).
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Nassau e o Brasil holandês"
        statement={
          <p>
            O governo de Maurício de Nassau no Brasil holandês (1637–1644) ficou
            marcado por uma administração considerada avançada para os padrões
            coloniais da época. Qual característica melhor define esse governo?
          </p>
        }
        options={[
          { letter: "A", text: "Abolição imediata da escravidão e integração dos africanos libertos ao funcionalismo público." },
          { letter: "B", text: "Expulsão dos jesuítas e proibição do catolicismo em todo o território dominado pela WIC." },
          { letter: "C", text: "Tolerância religiosa, fomento à ciência e às artes, e administração racional da colônia sem romper com a estrutura escravista.", correct: true },
          { letter: "D", text: "Devolução das terras aos indígenas e criação de reservas protegidas no interior do Nordeste." },
          { letter: "E", text: "Imposição do calvinismo como religião oficial e perseguição aos cristãos-novos instalados em Pernambuco." },
        ]}
        resolution={
          <p>
            Nassau promoveu tolerância religiosa, trouxe cientistas como Marcgraf
            e artistas como Post e Eckhout, mas manteve integralmente a escravidão.
            Sua administração era pragmática — protegia a estrutura econômica
            açucareira enquanto modernizava a gestão urbana.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Bandeirismo e escravidão indígena"
        statement={
          <div>
            <p>
              Analise a afirmativa: "O bandeirismo de apresamento, ao destruir as
              reduções jesuíticas espanholas e escravizar povos indígenas, revela
              um conflito estrutural entre diferentes projetos coloniais para a
              América: o projeto mercantil-escravista dos colonos paulistas e o
              projeto missionário-tutelar da Igreja."
            </p>
            <p>Essa afirmativa está:</p>
          </div>
        }
        options={[
          { letter: "A", text: "Incorreta, pois os jesuítas também praticavam trabalho compulsório nas reduções, sem diferença essencial com os colonos." },
          { letter: "B", text: "Incorreta, pois o bandeirismo de apresamento foi proibido pela Coroa e nunca chegou a ameaçar as missões jesuíticas." },
          { letter: "C", text: "Correta, pois evidencia o conflito entre interesses colonizadores que usavam o corpo indígena como recurso de formas distintas.", correct: true },
          { letter: "D", text: "Parcialmente correta apenas no que se refere ao século XVII, pois no XVIII os colonos e jesuítas já eram aliados." },
          { letter: "E", text: "Incorreta, pois os bandeirantes destruíam apenas as missões por razões religiosas, sem interesse na mão de obra indígena." },
        ]}
        resolution={
          <p>
            O conflito entre bandeirantes e jesuítas era estrutural: os colonos
            queriam mão de obra indígena escravizada; os jesuítas queriam proteger
            e tutelar os índios. Ambos os projetos instrumentalizavam os povos
            originários, mas de formas distintas. A Coroa oscilava entre os dois,
            dependendo de interesses fiscais e diplomáticos.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="ENEM 2019 — Identidade e resistência"
        statement={
          <>
            <p>
              "Henrique Dias, homem negro forro, e Filipe Camarão, índio
              Potiguar batizado, tornaram-se símbolos da luta pela expulsão dos
              holandeses do Nordeste. No século XIX, o romantismo brasileiro
              transformou Guararapes no berço da nação, unindo brancos, negros e
              índios em torno de um mesmo destino."
            </p>
            <p>
              Com base no texto e nos conhecimentos sobre a Insurreição
              Pernambucana, qual análise crítica é mais adequada?
            </p>
          </>
        }
        options={[
          { letter: "A", text: "A participação de africanos e indígenas demonstra que a sociedade colonial já havia superado as hierarquias raciais no século XVII." },
          { letter: "B", text: "A narrativa romântica do século XIX idealizou a aliança multirracial para construir um mito fundador da nação, obscurecendo as relações de dominação vigentes.", correct: true },
          { letter: "C", text: "Guararapes foi efetivamente o momento em que negros e índios conquistaram direitos iguais aos dos colonizadores portugueses." },
          { letter: "D", text: "O romantismo brasileiro reproduziu fielmente a realidade colonial sem distorções ou omissões significativas." },
          { letter: "E", text: "Henrique Dias e Filipe Camarão lutaram contra os holandeses por convicção republicana e antiescravista." },
        ]}
        resolution={
          <p>
            A narrativa romântica do século XIX usou Guararapes para construir
            o mito das "três raças" fundadoras, apagando que Henrique Dias e
            Filipe Camarão lutavam em um contexto de profunda desigualdade racial
            e que a escravidão africana continuou plena após a expulsão holandesa.
            O ENEM frequentemente pede essa leitura crítica das narrativas históricas.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Tratado de Madri e o uti possidetis"
        statement={
          <p>
            O Tratado de Madri (1750) substituiu o Tratado de Tordesilhas como
            referência para os limites entre os domínios espanhol e português na
            América do Sul. O princípio adotado foi o <em>uti possidetis</em>
            ("quem possui, detém"). Como o bandeirismo se relaciona com esse
            princípio?
          </p>
        }
        options={[
          { letter: "A", text: "O bandeirismo impediu a aplicação do uti possidetis porque os bandeirantes não fundavam cidades, apenas percorriam o sertão." },
          { letter: "B", text: "As expedições bandeirantes criaram ocupações efetivas de territórios além de Tordesilhas, que o uti possidetis legitimou como posse portuguesa.", correct: true },
          { letter: "C", text: "O Tratado de Madri ignorou o uti possidetis e se baseou exclusivamente nas linhas geográficas definidas por astrónomos europeus." },
          { letter: "D", text: "O bandeirismo foi contrário ao Tratado de Madri porque os paulistas queriam manter a divisão de Tordesilhas." },
          { letter: "E", text: "O uti possidetis beneficiou a Espanha, pois os bandeirantes haviam ocupado mais territórios no hemisfério espanhol." },
        ]}
        resolution={
          <p>
            O bandeirismo criou fatos consumados de ocupação territorial que
            serviram de base jurídica para o princípio do uti possidetis no
            Tratado de Madri. Alexandre de Gusmão, negociador português, usou
            esses fatos para garantir ao Brasil fronteiras que incluíam muito
            mais do que Tordesilhas permitia.
          </p>
        }
      />
    </article>
  );
}
