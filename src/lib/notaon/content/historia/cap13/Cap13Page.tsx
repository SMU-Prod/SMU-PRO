"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 13</span>
          <h1>Formação da Europa Medieval</h1>
          <p>
            A queda do Império Romano do Ocidente em 476 d.C. não foi um evento súbito, mas o
            desfecho de séculos de pressão interna e externa sobre a maior estrutura política que o
            mundo antigo havia produzido. O colapso romano abriu um longo período de reorganização
            política, cultural e econômica que historiadores convencionalmente denominam Idade Média
            — uma era marcada pela emergência dos reinos bárbaros, pela centralidade da Igreja
            Católica, pelo renascimento do poder imperial sob Carlos Magno e, posteriormente, pelas
            novas ondas de invasões que moldaram definitivamente o mapa da Europa ocidental entre os
            séculos V e X.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. O Declínio e a Queda do Império Romano do Ocidente</h2>
        <p>
          O Império Romano do Ocidente padeceu de uma convergência de crises ao longo dos séculos
          III e IV: crise econômica derivada da redução das conquistas e do afluxo de escravos,
          epidemias que diezmaram a população, crise política expressa na anarquia militar (235–284),
          pressão fiscal crescente sobre os colonos e artesãos, e a incapacidade de manter as
          fronteiras (limes) diante dos povos germânicos. A divisão definitiva do Império em 395 d.C.,
          após a morte de Teodósio I, consolidou a existência de duas entidades distintas: o Império
          do Oriente, com capital em Constantinopla, que sobreviveria até 1453; e o Império do
          Ocidente, sediado em Ravena após Milão e Roma, que se fragmentou rapidamente.
        </p>
        <p>
          Em 476, o chefe bárbaro Odoacro depôs Rômulo Augústulo, o último imperador romano do
          Ocidente, sem proclamar um sucessor romano — marco simbólico adotado pelos historiadores
          renascentistas para demarcar o fim da Antiguidade. Contudo, é fundamental compreender que
          populações e instituições romanas continuaram a existir sob os novos reinos germânicos, e
          que a própria Igreja preservou a língua latina e o direito romano ao longo dos séculos
          seguintes. A "queda" foi, portanto, uma longa transformação, não uma ruptura abrupta.
        </p>

        <div className="lesson-highlight">
          <h3>Conceito-chave: continuidade e ruptura</h3>
          <p>
            O ENEM frequentemente exige que o estudante diferencie as interpretações historiográficas
            sobre a queda de Roma. Edward Gibbon (século XVIII) enfatizou a decadência moral e a
            influência do Cristianismo. A historiografia do século XX, especialmente Peter Heather e
            Bryan Ward-Perkins, revalorizou as invasões bárbaras como fator determinante. Henri
            Pirenne argumentou que a ruptura decisiva só ocorreu com as invasões islâmicas do
            século VII, que cortaram o comércio mediterrâneo.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Invasões</span>
        <h2>2. Os Reinos Bárbaros: Povos Germânicos e a Reconfiguração do Ocidente</h2>
        <p>
          Os povos denominados "bárbaros" pelos romanos — termo que originalmente designava apenas
          aqueles que não falavam grego ou latim — eram, em sua maioria, grupos germânicos que há
          décadas viviam em contato com o Império, servindo como soldados federados ou comerciando
          nas fronteiras. Sua entrada massiva no território romano não foi uma conquista externa
          homogênea, mas um processo complexo de migração, negociação e conflito que resultou em
          reinos com características híbridas romano-germânicas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Povo Germânico</th>
                <th>Região de Assentamento</th>
                <th>Reino / Legado</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visigodos</td>
                <td>Hispânia e sul da Gália</td>
                <td>Reino Visigótico de Toledo</td>
                <td>418–711</td>
              </tr>
              <tr>
                <td>Ostrogodos</td>
                <td>Itália</td>
                <td>Reino Ostrogótico (Teodorico)</td>
                <td>493–553</td>
              </tr>
              <tr>
                <td>Francos</td>
                <td>Gália (atual França)</td>
                <td>Reino Franco → Império Carolíngio</td>
                <td>481–987</td>
              </tr>
              <tr>
                <td>Saxões</td>
                <td>Norte da Germânia e Britânia</td>
                <td>Reinos anglo-saxões</td>
                <td>Séc. V–XI</td>
              </tr>
              <tr>
                <td>Burgúndios</td>
                <td>Burgúndia (atual Suíça/SE França)</td>
                <td>Reino da Burgúndia</td>
                <td>443–534</td>
              </tr>
              <tr>
                <td>Lombardos</td>
                <td>Norte da Itália (Lombardia)</td>
                <td>Reino Lombardo</td>
                <td>568–774</td>
              </tr>
              <tr>
                <td>Vândalos</td>
                <td>Norte da África e Cartago</td>
                <td>Reino Vândalo</td>
                <td>429–534</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Mapa esquemático dos reinos bárbaros na Europa, século VI">
            {/* Contorno simplificado da Europa Ocidental */}
            <rect x="0" y="0" width="720" height="220" fill="#e8f4f8" />
            {/* Mar Mediterrâneo */}
            <rect x="60" y="150" width="600" height="60" fill="#aad4e8" rx="4" />
            <text x="360" y="175" textAnchor="middle" fontSize="11" fill="#1a6a8a">Mar Mediterrâneo</text>
            {/* Oceano Atlântico */}
            <rect x="0" y="0" width="60" height="210" fill="#aad4e8" rx="0" />
            <text x="30" y="100" textAnchor="middle" fontSize="9" fill="#1a6a8a" transform="rotate(-90,30,100)">Atlântico</text>

            {/* Reino Franco */}
            <rect x="130" y="40" width="160" height="100" fill="#f4c86a" rx="6" opacity="0.85" />
            <text x="210" y="88" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5a3800">Francos</text>
            <text x="210" y="104" textAnchor="middle" fontSize="10" fill="#5a3800">(Gália)</text>

            {/* Reino Visigótico */}
            <rect x="80" y="80" width="120" height="70" fill="#a8d8a8" rx="6" opacity="0.85" />
            <text x="140" y="113" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4a1a">Visigodos</text>
            <text x="140" y="128" textAnchor="middle" fontSize="9" fill="#1a4a1a">(Hispânia)</text>

            {/* Reino Ostrogótico */}
            <rect x="310" y="55" width="140" height="85" fill="#f4a8a8" rx="6" opacity="0.85" />
            <text x="380" y="93" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5a0000">Ostrogodos</text>
            <text x="380" y="109" textAnchor="middle" fontSize="9" fill="#5a0000">(Itália)</text>

            {/* Saxões */}
            <rect x="200" y="10" width="120" height="50" fill="#c8b8e8" rx="6" opacity="0.85" />
            <text x="260" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2a0060">Saxões</text>
            <text x="260" y="48" textAnchor="middle" fontSize="9" fill="#2a0060">(Norte)</text>

            {/* Lombardos */}
            <rect x="310" y="30" width="100" height="35" fill="#f4d4a8" rx="6" opacity="0.85" />
            <text x="360" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6a3000">Lombardos</text>

            {/* Vândalos - Norte da África */}
            <rect x="200" y="160" width="160" height="35" fill="#e8e8a8" rx="6" opacity="0.85" />
            <text x="280" y="182" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5a5a00">Vândalos (N. África)</text>

            {/* Império Bizantino */}
            <rect x="480" y="30" width="200" height="130" fill="#a8c8f8" rx="6" opacity="0.85" />
            <text x="580" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#001a5a">Império</text>
            <text x="580" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#001a5a">Bizantino</text>
            <text x="580" y="122" textAnchor="middle" fontSize="9" fill="#001a5a">(Constantinopla)</text>

            {/* Legenda */}
            <text x="10" y="12" fontSize="10" fill="#333" fontWeight="bold">Séc. VI d.C. — Reinos Bárbaros na Europa</text>
          </svg>
          <figcaption>Distribuição esquemática dos principais reinos bárbaros na Europa Ocidental no século VI d.C., após a queda do Império Romano do Ocidente.</figcaption>
        </figure>
      </section>

      {/* SEÇÃO 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Dinastia Carolíngia</span>
        <h2>3. O Reino Franco e a Ascensão dos Carolíngios</h2>
        <p>
          Entre todos os reinos germânicos, o dos francos foi o que atingiu maior extensão e
          durabilidade. Sob a dinastia merovíngia — fundada por Clóvis I (481–511), primeiro rei
          bárbaro a converter-se ao Catolicismo romano —, os francos dominaram a Gália e partes da
          Germânia. Clóvis percebeu o valor estratégico de se aliar ao bispo de Roma, ganhando
          legitimidade junto às populações galo-romanas e ao clero. Essa aliança entre o papado e o
          poder franco seria a espinha dorsal da política medieval ocidental por séculos.
        </p>
        <p>
          Com o enfraquecimento dos merovíngios (os chamados "reis indolentes"), o poder real passou
          na prática aos <em>majordomi</em> (prefeitos do palácio). Carlos Martel (714–741) consolidou
          o controle carolíngio ao derrotar os muçulmanos na Batalha de Poitiers em 732, contendo o
          avanço islâmico na Europa Ocidental — feito que lhe conferiu enorme prestígio entre o clero
          e a nobreza. Seu filho, Pepino o Breve (751–768), deu o passo decisivo: com a anuência do
          papa Zacarias, depôs o último merovíngio e se fez ungir rei pelo papa Estêvão II em 754,
          inaugurando a dinastia carolíngia e estabelecendo o princípio da legitimidade papal sobre a
          coroa real. Em troca, Pepino doou ao papa territórios do centro da Itália — origem do
          Estado Papal, que perdurou até 1870.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Governante</th>
                <th>Período</th>
                <th>Principal ação histórica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clóvis I (Merovíngio)</td>
                <td>481–511</td>
                <td>Unificação dos francos; conversão ao catolicismo</td>
              </tr>
              <tr>
                <td>Carlos Martel</td>
                <td>714–741</td>
                <td>Batalha de Poitiers (732); contenção islâmica</td>
              </tr>
              <tr>
                <td>Pepino o Breve</td>
                <td>751–768</td>
                <td>Deposição dos merovíngios; criação do Estado Papal</td>
              </tr>
              <tr>
                <td>Carlos Magno</td>
                <td>768–814</td>
                <td>Coroação imperial (800); Renascimento Carolíngio</td>
              </tr>
              <tr>
                <td>Luís, o Piedoso</td>
                <td>814–840</td>
                <td>Sucessão fraturada; conflitos internos</td>
              </tr>
              <tr>
                <td>Carlos, o Calvo / Luís, o Germânico / Lotário</td>
                <td>843</td>
                <td>Tratado de Verdun — divisão do Império Carolíngio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Carlos Magno</span>
        <h2>4. Carlos Magno e o Sacro Império Romano-Germânico</h2>
        <p>
          Carlos Magno (Carolus Magnus, 742–814) é a figura central da Europa medieval. Em quase
          quarenta anos de reinado, conduziu mais de cinquenta campanhas militares que expandiram o
          reino franco sobre a Saxônia (após longa guerra e conversão forçada dos saxões), a Bavária,
          a Lombardia italiana, a Espanha cristã e territórios eslavos. Em 25 de dezembro do ano 800,
          o papa Leão III coroou Carlos Magno imperador dos romanos na Basílica de São Pedro, em Roma
          — ato de enorme simbolismo que criava uma nova entidade política ocidental, em competição
          com o Império Bizantino do Oriente, e que sanciona o princípio de que o papa tinha
          autoridade para ungir (e, implicitamente, depor) imperadores.
        </p>
        <p>
          O governo de Carlos Magno foi marcado pelo chamado "Renascimento Carolíngio": esforço de
          reorganização administrativa, cultural e educacional. Carlos criou os condes e os
          <em>missi dominici</em> (enviados do senhor) para fiscalizar as províncias, padronizou pesos
          e medidas, fomentou escolas em mosteiros e catedrais para formar clérigos letrados, e atraiu
          intelectuais como Alcuíno de York para sua corte em Aquisgrão (Aachen). O latim foi
          preservado como língua de administração e culto, enquanto as línguas vernáculas (proto-francês,
          proto-alemão) emergiam no cotidiano.
        </p>

        <div className="lesson-highlight">
          <h3>O Tratado de Verdun (843) e suas consequências geopolíticas</h3>
          <p>
            Após a morte de Carlos Magno, seu filho Luís, o Piedoso, tentou manter o Império unido,
            mas as disputas entre seus herdeiros culminaram no Tratado de Verdun (843), que dividiu o
            Império em três partes: a Francia Ocidental (base da futura França, para Carlos, o Calvo),
            a Francia Oriental (base da futura Alemanha, para Luís, o Germânico) e a Lotaríngia
            (região central, para Lotário, que conservou o título imperial). Essa divisão tripartite
            é considerada o embrião das modernas nações europeias ocidentais e um dos documentos
            mais importantes para a compreensão do surgimento das identidades nacionais europeias.
          </p>
        </div>
      </section>

      {/* SEÇÃO 5 — SVG linha do tempo */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>5. Linha do Tempo da Formação Medieval</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Linha do tempo da formação da Europa Medieval, séculos V a X">
            <rect x="0" y="0" width="720" height="180" fill="#f8f6f0" />
            {/* Linha principal */}
            <line x1="40" y1="90" x2="680" y2="90" stroke="#8a6a20" strokeWidth="3" />
            {/* Seta */}
            <polygon points="680,84 695,90 680,96" fill="#8a6a20" />

            {/* Eventos — posições proporcionais entre 400 e 1000 */}
            {/* 476 - Queda Roma */}
            <line x1="117" y1="70" x2="117" y2="90" stroke="#c0392b" strokeWidth="2" />
            <circle cx="117" cy="90" r="5" fill="#c0392b" />
            <text x="117" y="62" textAnchor="middle" fontSize="9" fill="#c0392b" fontWeight="bold">476</text>
            <text x="117" y="52" textAnchor="middle" fontSize="8" fill="#c0392b">Queda Roma</text>

            {/* 481 - Clóvis */}
            <line x1="135" y1="110" x2="135" y2="90" stroke="#2980b9" strokeWidth="2" />
            <circle cx="135" cy="90" r="5" fill="#2980b9" />
            <text x="135" y="130" textAnchor="middle" fontSize="9" fill="#2980b9" fontWeight="bold">481</text>
            <text x="135" y="140" textAnchor="middle" fontSize="8" fill="#2980b9">Clóvis</text>

            {/* 568 - Lombardos */}
            <line x1="218" y1="70" x2="218" y2="90" stroke="#27ae60" strokeWidth="2" />
            <circle cx="218" cy="90" r="5" fill="#27ae60" />
            <text x="218" y="62" textAnchor="middle" fontSize="9" fill="#27ae60" fontWeight="bold">568</text>
            <text x="218" y="52" textAnchor="middle" fontSize="8" fill="#27ae60">Lombardos</text>

            {/* 732 - Poitiers */}
            <line x1="388" y1="110" x2="388" y2="90" stroke="#8e44ad" strokeWidth="2" />
            <circle cx="388" cy="90" r="5" fill="#8e44ad" />
            <text x="388" y="130" textAnchor="middle" fontSize="9" fill="#8e44ad" fontWeight="bold">732</text>
            <text x="388" y="140" textAnchor="middle" fontSize="8" fill="#8e44ad">Poitiers</text>

            {/* 800 - Coroação Carlos Magno */}
            <line x1="500" y1="70" x2="500" y2="90" stroke="#d35400" strokeWidth="2" />
            <circle cx="500" cy="90" r="7" fill="#d35400" />
            <text x="500" y="62" textAnchor="middle" fontSize="9" fill="#d35400" fontWeight="bold">800</text>
            <text x="500" y="52" textAnchor="middle" fontSize="8" fill="#d35400">Carlos Magno</text>

            {/* 843 - Verdun */}
            <line x1="562" y1="110" x2="562" y2="90" stroke="#16a085" strokeWidth="2" />
            <circle cx="562" cy="90" r="5" fill="#16a085" />
            <text x="562" y="130" textAnchor="middle" fontSize="9" fill="#16a085" fontWeight="bold">843</text>
            <text x="562" y="140" textAnchor="middle" fontSize="8" fill="#16a085">Verdun</text>

            {/* 900s - Novas invasões */}
            <line x1="637" y1="70" x2="637" y2="90" stroke="#c0392b" strokeWidth="2" />
            <circle cx="637" cy="90" r="5" fill="#c0392b" />
            <text x="637" y="62" textAnchor="middle" fontSize="9" fill="#c0392b" fontWeight="bold">Séc.IX-X</text>
            <text x="637" y="52" textAnchor="middle" fontSize="8" fill="#c0392b">Vikings/Magiares</text>

            {/* Datas dos eixos */}
            <text x="40" y="108" fontSize="9" fill="#888">400</text>
            <text x="672" y="108" fontSize="9" fill="#888">1000</text>
            <text x="360" y="170" textAnchor="middle" fontSize="10" fill="#555" fontStyle="italic">Séculos V–X d.C.</text>
          </svg>
          <figcaption>Linha do tempo dos principais eventos da formação da Europa Medieval (séculos V ao X).</figcaption>
        </figure>
      </section>

      {/* SEÇÃO 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Novas Ameaças</span>
        <h2>6. Vikings, Magiares e Sarracenos: as Segundas Invasões</h2>
        <p>
          Após a morte de Carlos Magno, a Europa Ocidental enfrentou uma nova rodada de invasões que
          acelerou o processo de fragmentação política e empurrou as populações para o interior, longe
          das costas e dos rios. Os vikings (nórdicos da Escandinávia) eram navegadores e guerreiros
          que entre os séculos IX e XI devastaram monastérios costeiros, remontaram rios como o Sena
          e o Reno, fundaram cidades (Dublin, Kiev) e colonizaram a Islândia, a Groenlândia e, por
          volta de 1000 d.C., chegaram à América do Norte (Vinland). Na França, os vikings se
          estabeleceram na Normandia (915), tornando-se normandos — e seus descendentes conquistariam
          a Inglaterra em 1066.
        </p>
        <p>
          Os magiares, povo das estepes da Ásia Central, invadiram a bacia do Danúbio no século IX e
          por décadas realizaram incursões até a França e a Itália, sendo finalmente derrotados por
          Oto I na Batalha do Lechfeld em 955. Os sarracenos (muçulmanos do norte da África e da
          Espanha) controlavam o Mediterrâneo ocidental, saquearam Roma em 846 e estabeleceram bases
          no sul da Itália e na Sicília. Essas três frentes de pressão explicitam por que o
          feudalismo — sistema de proteção local mediado por senhores — ganhou tal força precisamente
          nos séculos IX e X.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Invasores</th>
                <th>Origem</th>
                <th>Região Afetada</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vikings</td>
                <td>Escandinávia</td>
                <td>Costas atlânticas, rios europeus, Britânia</td>
                <td>Assimilação; Normandia (França); conquista da Inglaterra (1066)</td>
              </tr>
              <tr>
                <td>Magiares</td>
                <td>Estepes asiáticas</td>
                <td>Bacia do Danúbio, Alemanha, Itália</td>
                <td>Derrotados em Lechfeld (955); fundação da Hungria cristã</td>
              </tr>
              <tr>
                <td>Sarracenos</td>
                <td>Norte da África / Al-Ândalus</td>
                <td>Sul da Itália, Sicília, Mediterrâneo</td>
                <td>Expulsão gradual; Sicília normanda (séc. XI)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Oriente</span>
        <h2>7. O Império Bizantino: Continuidade Romana no Oriente</h2>
        <p>
          Enquanto o Ocidente se fragmentava, o Império Romano do Oriente — que os historiadores
          modernos denominam Império Bizantino — manteve sua capital, Constantinopla, como o maior
          centro urbano do mundo cristão durante toda a Alta Idade Média. Os bizantinos preservaram
          a língua grega, o direito romano (codificado por Justiniano I entre 529 e 534 no
          <em>Corpus Juris Civilis</em>), a arte imperial e a fé ortodoxa. Justiniano I (527–565)
          tentou reconquistar o Ocidente, recuperando brevemente a Itália, o norte da África e parte
          da Hispânia, mas essas conquistas não foram sustentáveis.
        </p>
        <p>
          O Império Bizantino serviu como barreira contra as expansões islâmicas e turcas por séculos,
          preservou manuscritos clássicos gregos que só chegariam ao Ocidente plenamente na
          Renascença e transmitiu o Cristianismo aos povos eslavos (búlgaros, sérvios, russos) por
          meio de missionários como Cirilo e Metódio, criadores do alfabeto cirílico. Sua queda em
          1453 para os turcos otomanos de Maomé II é um dos marcos do fim da Idade Média e do início
          da Modernidade.
        </p>
      </section>

      {/* SEÇÃO 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Igreja e Cultura</span>
        <h2>8. A Igreja Católica como Pilar da Nova Ordem</h2>
        <p>
          Na ausência de um poder político centralizado no Ocidente, a Igreja Católica Romana
          emergiu como a instituição de maior alcance e coesão. Os bispos administravam cidades; os
          mosteiros preservavam a cultura letrada, copiavam manuscritos e organizavam a economia
          agrária de vastas regiões. A Regra de São Bento (529) criou o modelo monástico ocidental,
          baseado na oração, no trabalho e na obediência — <em>ora et labora</em> — que se tornou o
          padrão para centenas de monastérios.
        </p>
        <p>
          O papado cresceu em autoridade ao longo do período: Leão I (440–461) já afirmara a
          primazia de Roma entre as sés cristãs; Gregório Magno (590–604) organizou a missão à
          Britânia (enviando Agostinho de Cantuária), administrou os territórios do centro da Itália
          e deixou uma produção teológica imensa. A aliança entre papado e poder carolíngio, que
          culminou na coroação de Carlos Magno, exemplifica como a legitimidade religiosa era
          indissociável da legitimidade política no mundo medieval.
        </p>
      </section>

      {/* SEÇÃO 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Impacto Africano e Diversidade Cultural na Formação Medieval</h2>
        <p>
          A visão eurocêntrica da Idade Média frequentemente negligencia o papel determinante do norte
          da África e do mundo islâmico na formação da Europa medieval. A conquista muçulmana do norte
          da África (séculos VII–VIII) encerrou a herança romano-cristã da região — que havia produzido
          figuras como Santo Agostinho (354–430), bispo de Hipona (atual Argélia), cuja teologia
          moldou o pensamento ocidental medieval. O Islã norte-africano preservou e transmitiu
          filosofia grega (Aristóteles), medicina (Avicena, Al-Kindi), astronomia e matemática que
          alimentariam a Escolástica e, mais tarde, o Renascimento europeu.
        </p>
        <p>
          Al-Ândalus (Espanha muçulmana, 711–1492) foi por séculos o espaço de maior convivência
          intercultural da Europa, reunindo muçulmanos, cristãos e judeus em centros urbanos como
          Córdoba — que no século X tinha talvez 500 mil habitantes, enquanto Paris tinha menos de
          30 mil. Essa dimensão é essencial para a compreensão das Cruzadas e da Reconquista como
          fenômenos de contato cultural além do conflito militar.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Região</th>
                <th>Contribuição à Europa Medieval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Norte da África (Cartago/Hipona)</td>
                <td>Teologia agostiniana; direito romano norte-africano</td>
              </tr>
              <tr>
                <td>Al-Ândalus (Espanha Muçulmana)</td>
                <td>Transmissão de Aristóteles; medicina; astronomia árabe; tolerância convivência</td>
              </tr>
              <tr>
                <td>Império Bizantino (via Oriente)</td>
                <td>Direito romano; manuscritos gregos; iconografia cristã; evangelização eslava</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 10 */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>10. Conceitos Fundamentais para o ENEM</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <h3>Sincretismo Cultural</h3>
            <p>Os reinos bárbaros não destruíram Roma: adotaram o latim, o direito romano e o catolicismo, criando uma cultura híbrida.</p>
          </div>
          <div className="lesson-card">
            <h3>Poder Papal</h3>
            <p>A coroação de Carlos Magno estabeleceu o princípio de que reis e imperadores precisavam da sanção divina mediada pelo papa.</p>
          </div>
          <div className="lesson-card">
            <h3>Feudalismo como resposta</h3>
            <p>As segundas invasões (vikings, magiares, sarracenos) aceleraram a feudalização ao tornar o poder local mais eficiente que o central.</p>
          </div>
          <div className="lesson-card">
            <h3>Tratado de Verdun</h3>
            <p>843 d.C. — divisão tripartite do Império Carolíngio que esboçou as fronteiras das futuras França, Alemanha e região da Lotaríngia.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. A queda do Império Romano do Ocidente"
          statement={
            <p>
              Em 476 d.C., o chefe bárbaro Odoacro depôs Rômulo Augústulo. A historiografia
              contemporânea analisa esse evento como:
            </p>
          }
          options={[
            { letter: "a", text: "Uma ruptura absoluta que eliminou toda herança romana no Ocidente." },
            { letter: "b", text: "O início imediato do feudalismo em toda a Europa." },
            {
              letter: "c",
              text: "O desfecho simbólico de um longo processo de transformação, em que instituições romanas persistiram sob os reinos germânicos.",
              correct: true,
            },
            { letter: "d", text: "A vitória definitiva do Islamismo sobre a cristandade ocidental." },
            { letter: "e", text: "A destruição completa das cidades e da cultura urbana romana." },
          ]}
          resolution={
            <p>
              A historiografia moderna (Heather, Ward-Perkins, Pirenne) reconhece que 476 é um marco
              simbólico, mas não uma ruptura total: a Igreja, o latim, o direito romano e estruturas
              administrativas romanas continuaram nos reinos germânicos. Os próprios reis bárbaros
              buscavam legitimidade adotando títulos e práticas romanas. A alternativa correta é a C.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Carlos Magno e a aliança entre trono e altar"
          statement={
            <p>
              A coroação de Carlos Magno pelo papa Leão III em 800 d.C. expressava uma relação
              política e religiosa fundamental na Idade Média. Assinale a afirmação CORRETA sobre
              esse evento:
            </p>
          }
          options={[
            { letter: "a", text: "A coroação foi exclusivamente um ato de agradecimento religioso sem implicações políticas." },
            { letter: "b", text: "Carlos Magno recusou o título imperial por considerá-lo desnecessário." },
            {
              letter: "c",
              text: "A coroação estabeleceu o princípio de que a legitimidade imperial dependia da sanção papal, inaugurando séculos de tensão entre papas e imperadores.",
              correct: true,
            },
            { letter: "d", text: "O ato coroou Carlos como patriarca de Constantinopla, unificando as Igrejas do Oriente e do Ocidente." },
            { letter: "e", text: "A coroação foi imediatamente reconhecida pelo Império Bizantino como legítima." },
          ]}
          resolution={
            <p>
              A coroação de 800 criou um precedente poderoso: imperadores precisavam de legitimação
              papal. Isso gerou a Querela das Investiduras (séc. XI–XII) e séculos de conflitos entre
              papas e imperadores. O Império Bizantino, por sua vez, considerou o ato uma usurpação do
              título imperial. A alternativa C captura corretamente a dimensão estrutural do evento.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O Tratado de Verdun e a formação das nações europeias"
          statement={
            <p>
              O Tratado de Verdun (843) é frequentemente citado como um dos documentos fundacionais
              da Europa moderna. Com base em seus conhecimentos, identifique a afirmação que MELHOR
              explica sua importância:
            </p>
          }
          options={[
            { letter: "a", text: "Criou a unidade europeia ao manter o Império Carolíngio sob um único governante." },
            { letter: "b", text: "Estabeleceu as fronteiras definitivas entre França e Alemanha, que não se alteraram até o século XXI." },
            {
              letter: "c",
              text: "Ao dividir o Império em três partes seguindo fronteiras linguísticas e culturais, esboçou o embrião das futuras nações francesa, alemã e italiana.",
              correct: true,
            },
            { letter: "d", text: "Eliminou o poder do papado sobre os reis francos e inaugurou a laicização do Estado medieval." },
            { letter: "e", text: "Resultou na reconquista do norte da África pelos herdeiros carolíngios." },
          ]}
          resolution={
            <p>
              O Tratado de Verdun dividiu o Império conforme as línguas locais emergentes: a Francia
              Ocidental (proto-francês) para Carlos, o Calvo; a Francia Oriental (proto-alemão) para
              Luís, o Germânico; e a Lotaríngia (zona de disputa entre os dois) para Lotário. Essa
              divisão antecipou, em linhas gerais, as futuras fronteiras da Europa Ocidental. As
              fronteiras definitivas, contudo, só se consolidariam séculos depois — a alternativa B
              é incorreta por esse motivo. A alternativa C é a mais precisa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Os vikings e a reorganização medieval"
          statement={
            <p>
              "Os ataques vikings ao mosteiro de Lindisfarne em 793 inauguraram uma era de terror
              costeiro que transformou as estratégias de defesa e organização política da Europa
              Ocidental." Com base nessa afirmação, analise o impacto das invasões vikings sobre a
              sociedade medieval:
            </p>
          }
          options={[
            { letter: "a", text: "As invasões vikings destruíram o sistema feudal ao eliminar a nobreza guerreira." },
            {
              letter: "b",
              text: "As invasões, ao demonstrar a incapacidade do poder central em proteger as populações, aceleraram a feudalização: os camponeses buscaram proteção junto a nobres locais em troca de serviços e fidelidade.",
              correct: true,
            },
            { letter: "c", text: "Os vikings foram imediatamente convertidos ao Catolicismo e assimilados sem deixar rastros culturais." },
            { letter: "d", text: "O papado liderou pessoalmente a resistência militar aos vikings, fortalecendo a autoridade clerical sobre a nobreza." },
            { letter: "e", text: "As invasões viking isolaram completamente a Europa do comércio mediterrâneo por dois séculos." },
          ]}
          resolution={
            <p>
              As invasões vikings (assim como as dos magiares e sarracenos) revelaram a fragilidade
              do poder central carolíngio fragmentado após Verdun. As populações buscaram proteção
              junto a senhores locais capazes de organizar defesa imediata — padrão que definiu o
              feudalismo clássico. Os vikings também fundaram cidades (Dublin, Kiev), colonizaram
              ilhas e se tornaram normandos na França, demonstrando sua complexidade cultural além
              do papel de "invasores". A alternativa B é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. África e Idade Média Europeia"
          statement={
            <p>
              Santo Agostinho (354–430), bispo de Hipona (norte da África), escreveu obras como
              "A Cidade de Deus" e "Confissões", que moldaram o pensamento teológico medieval.
              Posteriormente, Al-Ândalus (Espanha islâmica) preservou e transmitiu textos
              filosóficos gregos para a Europa cristã. Esses exemplos demonstram que:
            </p>
          }
          options={[
            { letter: "a", text: "O norte da África e o mundo islâmico foram irrelevantes para o desenvolvimento cultural europeu medieval." },
            { letter: "b", text: "A Europa medieval se desenvolveu em isolamento completo do mundo mediterrâneo e africano." },
            {
              letter: "c",
              text: "A África do Norte e o mundo islâmico desempenharam papel central na formação intelectual e cultural da Europa medieval, contribuindo com teologia, filosofia, medicina e ciência.",
              correct: true,
            },
            { letter: "d", text: "A influência africana na Europa medieval limitou-se ao campo militar, sem impacto cultural." },
            { letter: "e", text: "A Reconquista Ibérica eliminou toda herança cultural islâmica da Península Ibérica sem deixar rastros." },
          ]}
          resolution={
            <p>
              Esta questão exige reconhecer a dimensão intercultural da Idade Média, frequentemente
              cobrada no ENEM. Santo Agostinho, africano de nascimento, foi o maior teólogo do
              Ocidente medieval. Al-Ândalus transmitiu Aristóteles, Avicena, Al-Kindi e avanços em
              astronomia e medicina que alimentaram a Escolástica e o Renascimento. Córdoba do século
              X era a maior cidade da Europa Ocidental. Ignorar essas contribuições é reproduzir uma
              visão eurocêntrica que o ENEM critica. A alternativa C é a correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
