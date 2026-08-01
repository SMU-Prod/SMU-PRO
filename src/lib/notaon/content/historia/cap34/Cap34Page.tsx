"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 34</span>
          <h1>Primeiro Reinado e Período Regencial</h1>
          <p>
            Entre 1822 e 1840, o Brasil viveu suas décadas mais turbulentas: um
            imperador autoritário que abdicou sob pressão popular, regências
            marcadas por instabilidade crônica e uma série de revoltas regionais
            que testaram os limites da unidade territorial brasileira. Compreender
            esse período é entender as contradições estruturais herdadas da
            Independência.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — Primeiro Reinado ── */}
      <section className="lesson-section">
        <span className="section-kicker">1822–1831</span>
        <h2>1. O Primeiro Reinado de Dom Pedro I</h2>
        <p>
          Dom Pedro I governou o Brasil entre 1822 e 1831 em permanente conflito
          com o Parlamento, a imprensa e setores crescentes da população. Seu
          estilo autoritário — sustentado pelo Poder Moderador da Constituição de
          1824 — gerou oposição de liberais brasileiros que exigiam maior
          participação política.
        </p>
        <p>
          A partir de 1826, um novo problema agravou sua impopularidade: com a
          morte de D. João VI (10/03/1826), Dom Pedro tornou-se herdeiro do
          trono português, levantando o temor de que ele tentasse reunificar os
          dois reinos. Embora tenha renunciado ao trono luso em favor de sua
          filha Maria, a desconfiança permaneceu.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Data</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dissolução da Assembleia Constituinte</td>
                <td>12/11/1823</td>
                <td>Outorga da Constituição de 1824 — mais conservadora que o projeto anterior</td>
              </tr>
              <tr>
                <td>Confederação do Equador</td>
                <td>1824</td>
                <td>Revolta nordestina reprimida; Frei Caneca executado</td>
              </tr>
              <tr>
                <td>Guerra Cisplatina</td>
                <td>1825–1828</td>
                <td>Conflito com Argentina; derrota e criação do Uruguai (1828)</td>
              </tr>
              <tr>
                <td>Morte de D. João VI</td>
                <td>1826</td>
                <td>Pedro I, herdeiro do trono português — suspeita de recolonização</td>
              </tr>
              <tr>
                <td>Noite das Garrafadas</td>
                <td>13/03/1831</td>
                <td>Conflitos entre brasileiros e portugueses no Rio; símbolo do antipedismo</td>
              </tr>
              <tr>
                <td>Abdicação de Dom Pedro I</td>
                <td>07/04/1831</td>
                <td>Pedro parte para a Europa; Dom Pedro II, 5 anos, é proclamado herdeiro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>Guerra Cisplatina</strong> (1825–1828) foi o golpe definitivo
          na popularidade de Dom Pedro I. O Brasil disputou com as Províncias
          Unidas do Rio da Prata (futura Argentina) o controle da Banda Oriental
          (atual Uruguai). A guerra foi cara, mal administrada e terminou em
          derrota: o Tratado do Rio de Janeiro (1828) criou o Uruguai como Estado
          tampão, sob garantia britânica. O custo financeiro e humano aumentou a
          insatisfação popular.
        </p>
      </section>

      {/* ── SEÇÃO 2 — Abdicação ── */}
      <section className="lesson-section">
        <span className="section-kicker">7 de Abril de 1831</span>
        <h2>2. A Abdicação e o Significado do 7 de Abril</h2>
        <p>
          Em março de 1831, a Noite das Garrafadas — confronto entre brasileiros
          que celebravam uma festa cívica e portugueses que manifestavam apoio a
          Dom Pedro — expôs a tensão social no Rio de Janeiro. Nos dias seguintes,
          militares e populares exigiram mudanças ministeriais que o Imperador
          inicialmente acenou mas depois cancelou.
        </p>
        <p>
          Na madrugada de 6 para 7 de abril, Dom Pedro I assinou o ato de
          abdicação em favor de seu filho Dom Pedro de Alcântara, com apenas
          cinco anos de idade, e partiu para a Europa. O <strong>7 de Abril</strong>
          tornou-se data celebrada pelos liberais brasileiros como triunfo do povo
          sobre o autoritarismo — um marco da construção da identidade política
          nacional.
        </p>

        <div className="lesson-highlight">
          <strong>Interpretação histórica:</strong> O 7 de Abril foi menos uma
          revolução popular do que uma pressão combinada de militares, políticos
          liberais e populares urbanos sobre um governante que havia perdido
          quase toda a base de apoio. Não representou mudança estrutural, mas
          abriu o Período Regencial, fase de grande instabilidade.
        </div>
      </section>

      {/* ── SEÇÃO 3 — Período Regencial ── */}
      <section className="lesson-section">
        <span className="section-kicker">1831–1840</span>
        <h2>3. O Período Regencial: Instabilidade e Descentralização</h2>
        <p>
          Com Dom Pedro II com apenas cinco anos, o Brasil foi governado por
          regentes escolhidos pela Assembleia Geral. O período foi marcado por
          intensa disputa entre <strong>federalistas</strong> (que queriam
          descentralizar o poder para as províncias) e{" "}
          <strong>conservadores centralizadores</strong> (que defendiam governo
          forte para manter a unidade nacional).
        </p>
        <p>
          Inicialmente, a Constituição de 1824 previa uma Regência Trina
          (três regentes eleitos). O <strong>Ato Adicional de 1834</strong>,
          aprovado pela Assembleia, reformou a Constituição: criou a Regência Una
          (um só regente, eleito diretamente pelo povo), instituiu as Assembleias
          Legislativas Provinciais (descentralização) e extinguiu o Conselho de
          Estado.
        </p>
        <p>
          A consequência não prevista foi o enfraquecimento do governo central:
          com menos poder para controlar as províncias, as tensões regionais
          explodiram em revoltas violentas por todo o país.
        </p>
      </section>

      {/* ── SVG 1 — Mapa das Revoltas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revoltas Regenciais</span>
        <h2>4. As Grandes Revoltas do Período Regencial</h2>

        <div className="lesson-figure">
          <svg viewBox="0 0 600 500" width="100%" aria-label="Mapa esquemático das revoltas regenciais no Brasil">
            {/* Contorno simplificado do Brasil */}
            <path
              d="M 180 30 L 320 20 L 420 60 L 480 120 L 500 200 L 480 310 L 420 390 L 350 440 L 270 460 L 200 430 L 150 370 L 110 290 L 100 200 L 120 110 Z"
              fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"
            />

            {/* Cabanagem — Norte (PA/AM) */}
            <circle cx="210" cy="130" r="28" fill="#dc2626" opacity="0.8" />
            <text x="210" y="126" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">CABANAGEM</text>
            <text x="210" y="140" textAnchor="middle" fontSize="8" fill="white">1835–40</text>
            <text x="210" y="152" textAnchor="middle" fontSize="8" fill="white">PA / AM</text>

            {/* Balaiada — Maranhão */}
            <circle cx="330" cy="115" r="25" fill="#d97706" opacity="0.85" />
            <text x="330" y="111" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">BALAIADA</text>
            <text x="330" y="124" textAnchor="middle" fontSize="8" fill="white">1838–41</text>
            <text x="330" y="136" textAnchor="middle" fontSize="8" fill="white">MA</text>

            {/* Sabinada — Bahia */}
            <circle cx="380" cy="240" r="24" fill="#7c3aed" opacity="0.85" />
            <text x="380" y="236" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">SABINADA</text>
            <text x="380" y="249" textAnchor="middle" fontSize="8" fill="white">1837–38</text>
            <text x="380" y="261" textAnchor="middle" fontSize="8" fill="white">BA</text>

            {/* Farroupilha — Sul */}
            <circle cx="240" cy="400" r="28" fill="#1d4ed8" opacity="0.85" />
            <text x="240" y="396" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">FARROUPILHA</text>
            <text x="240" y="409" textAnchor="middle" fontSize="8" fill="white">1835–45</text>
            <text x="240" y="421" textAnchor="middle" fontSize="8" fill="white">RS / SC</text>

            {/* Legenda */}
            <rect x="430" y="30" width="155" height="130" rx="6" fill="white" stroke="#d1d5db" />
            <text x="507" y="50" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#374151">Legenda</text>
            <circle cx="448" cy="68" r="8" fill="#dc2626" opacity="0.8" />
            <text x="462" y="72" fontSize="9" fill="#374151">Cabanagem (camponeses/índios)</text>
            <circle cx="448" cy="90" r="8" fill="#d97706" opacity="0.85" />
            <text x="462" y="94" fontSize="9" fill="#374151">Balaiada (escravos/sertanejos)</text>
            <circle cx="448" cy="112" r="8" fill="#7c3aed" opacity="0.85" />
            <text x="462" y="116" fontSize="9" fill="#374151">Sabinada (militares/elite BA)</text>
            <circle cx="448" cy="134" r="8" fill="#1d4ed8" opacity="0.85" />
            <text x="462" y="138" fontSize="9" fill="#374151">Farroupilha (elite gaúcha)</text>
          </svg>
          <p className="lesson-figure-caption">Localização aproximada das quatro grandes revoltas do Período Regencial.</p>
        </div>

        {/* Cabanagem */}
        <h3>4.1 Cabanagem (1835–1840) — Pará e Amazonas</h3>
        <p>
          A Cabanagem foi a revolta mais sangrenta da história do Brasil. Seus
          protagonistas eram os chamados <em>cabanos</em> — camponeses pobres,
          indígenas e mestiços que viviam em cabanas às margens dos rios
          amazônicos. Revoltados contra as elites brancas de Belém e contra a
          exclusão política e econômica, os cabanos tomaram a capital do Grão-Pará
          em janeiro de 1835 e chegaram a controlar a região por quase um ano.
        </p>
        <p>
          A repressão imperial foi brutal. Estima-se que{" "}
          <strong>30.000 a 40.000 pessoas morreram</strong> — algo entre 30% e
          40% da população do Grão-Pará, entre combatentes e civis mortos pela
          violência e por epidemias. A Cabanagem destruiu a estrutura demográfica
          da região amazônica por décadas.
        </p>

        {/* Balaiada */}
        <h3>4.2 Balaiada (1838–1841) — Maranhão</h3>
        <p>
          No Maranhão, o descontentamento de escravizados fugidos, indígenas e
          sertanejos pobres explodiu na Balaiada. O nome vem do apelido de Manuel
          Francisco dos Anjos Ferreira, chamado "Balaio" (fabricante de cestos).
          O movimento foi plural: o Negro Cosme liderou um quilombo com mais de
          3.000 escravizados fugidos; Raimundo Gomes liderou sertanejos.
        </p>
        <p>
          A repressão foi conduzida por <strong>Luís Alves de Lima e Silva</strong>,
          futuro Duque de Caxias, que pacificou o Maranhão em 1841 e construiu
          ali sua reputação militar. É uma ironia histórica que o principal herói
          da repressão às revoltas populares tenha se tornado o patrono do
          Exército Brasileiro.
        </p>

        {/* Farroupilha */}
        <h3>4.3 Farroupilha (1835–1845) — Rio Grande do Sul e Santa Catarina</h3>
        <p>
          Única das grandes revoltas liderada pela elite regional, a Farroupilha
          foi conduzida pelos <em>estancieiros</em> (grandes fazendeiros) gaúchos
          insatisfeitos com a taxação sobre o charque (carne salgada), que não
          conseguia competir com o charque platino — taxado a uma alíquota menor.
          Era, portanto, uma revolta fiscal com forte componente separatista.
        </p>
        <p>
          Os Farrapos proclamaram a <strong>República Rio-Grandense</strong>
          ("Piratinim", 1836) e depois a <strong>República Juliana</strong> em
          Santa Catarina (1839), com a participação do italiano{" "}
          <strong>Giuseppe Garibaldi</strong> — que aprendeu no sul do Brasil as
          táticas guerrilheiras que usaria na unificação da Itália. A única
          revolta a ter solução negociada: Caxias concedeu anistia geral em 1845,
          sem punições.
        </p>

        {/* Sabinada */}
        <h3>4.4 Sabinada (1837–1838) — Bahia</h3>
        <p>
          Golpe de oficiais militares liderado pelo médico e jornalista Francisco
          Sabino Álvares da Rocha Vieira, a Sabinada proclamou a separação
          temporária da Bahia do Império em novembro de 1837 — com a condição de
          que, quando Dom Pedro II atingisse a maioridade, a Bahia retornaria ao
          Império. A revolta foi rapidamente sufocada pelas forças imperiais em
          março de 1838, com centenas de mortos.
        </p>
      </section>

      {/* ── SEÇÃO 5 — Tabela Comparativa das Revoltas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise comparativa</span>
        <h2>5. Comparação entre as Revoltas Regenciais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Revolta</th>
                <th>Período</th>
                <th>Região</th>
                <th>Liderança</th>
                <th>Caráter</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cabanagem</td>
                <td>1835–1840</td>
                <td>PA, AM</td>
                <td>Camponeses, índios, mestiços</td>
                <td>Popular/social</td>
                <td>Repressão brutal; 30–40 mil mortos</td>
              </tr>
              <tr>
                <td>Balaiada</td>
                <td>1838–1841</td>
                <td>MA</td>
                <td>Escravizados, sertanejos (Balaio, Negro Cosme)</td>
                <td>Popular/social</td>
                <td>Reprimida por Caxias; Negro Cosme enforcado</td>
              </tr>
              <tr>
                <td>Farroupilha</td>
                <td>1835–1845</td>
                <td>RS, SC</td>
                <td>Elite estancieira (Bento Gonçalves, Garibaldi)</td>
                <td>Separatista/fiscal</td>
                <td>Negociação e anistia por Caxias (1845)</td>
              </tr>
              <tr>
                <td>Sabinada</td>
                <td>1837–1838</td>
                <td>BA</td>
                <td>Militares e profissionais liberais (Francisco Sabino)</td>
                <td>Separatismo temporário</td>
                <td>Reprimida rapidamente; centenas de mortos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 2 — Linha do tempo Regencial ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>6. Linha do Tempo do Período Regencial (1831–1840)</h2>
        <div className="lesson-figure">
          <svg viewBox="0 0 820 220" width="100%" aria-label="Linha do tempo do Período Regencial">
            {/* Linha base */}
            <line x1="40" y1="110" x2="780" y2="110" stroke="#1d4ed8" strokeWidth="3" />
            <polygon points="780,105 795,110 780,115" fill="#1d4ed8" />

            {[
              { x: 60,  ano: "1831", label: "7 de Abril\nAbdicação" },
              { x: 160, ano: "1833", label: "Regência\nTrina" },
              { x: 260, ano: "1834", label: "Ato\nAdicional" },
              { x: 360, ano: "1835", label: "Cabanagem\nFarroupilha" },
              { x: 460, ano: "1837", label: "Sabinada\nRegresso" },
              { x: 560, ano: "1838", label: "Balaiada\nConservadores" },
              { x: 660, ano: "1840", label: "Golpe da\nMaioridade" },
              { x: 750, ano: "1841", label: "Pedro II\nCoroado" },
            ].map(({ x, ano, label }) => (
              <g key={ano}>
                <circle cx={x} cy="110" r="7" fill="#1d4ed8" />
                <text x={x} y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">{ano}</text>
                {label.split("\n").map((line, i) => (
                  <text key={i} x={x} y={128 + i * 14} textAnchor="middle" fontSize="10" fill="#374151">{line}</text>
                ))}
              </g>
            ))}
          </svg>
          <p className="lesson-figure-caption">Linha do tempo do Período Regencial, da abdicação de Pedro I ao Golpe da Maioridade.</p>
        </div>
      </section>

      {/* ── SEÇÃO 6 — Regresso Conservador e Maioridade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fim da Regência</span>
        <h2>7. O Regresso Conservador e o Golpe da Maioridade (1840)</h2>
        <p>
          Diante do caos do federalismo regencial, a partir de 1837 um grupo de
          políticos liderado por <strong>Bernardo Pereira de Vasconcelos</strong>
          — o "Regresso" — passou a defender a centralização política e a
          organização de um Partido Conservador coeso. O Regresso consolidou as
          bases do conservadorismo imperial.
        </p>
        <p>
          Em 1840, os liberais propuseram uma saída elegante para a crise: antecipar
          a maioridade de Dom Pedro II, então com 14 anos e 2 meses. O projeto foi
          aprovado em votação relâmpago na Câmara e no Senado em 23 de julho de
          1840 — o <strong>Golpe da Maioridade</strong>. Dom Pedro II aceitou
          governar, encerrando o turbulento período regencial.
        </p>
        <div className="lesson-highlight">
          <strong>Motivação dos liberais:</strong> Os liberais sabiam que, ao
          antecipar a maioridade, teriam mais influência sobre o jovem imperador
          do que os conservadores que dominavam a Regência. O Golpe da Maioridade
          foi, portanto, um movimento político dos liberais para recuperar espaço
          no poder — não apenas um ato de benevolência com o país.
        </div>
      </section>

      {/* ── SEÇÃO EXTRA — Síntese do período ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e análise</span>
        <h2>7b. A Unidade do Brasil: Mérito do Período Regencial?</h2>
        <p>
          Uma questão central da historiografia sobre o Período Regencial é: por
          que o Brasil permaneceu unido, apesar de tantas revoltas simultâneas que
          ameaçavam a fragmentação territorial?
        </p>
        <p>
          Diferente da América Espanhola — onde o antigo Vice-Reino do Prata se
          dividiu em múltiplos países — o Brasil manteve sua unidade. Os
          historiadores apontam alguns fatores:
        </p>
        <ul>
          <li>
            <strong>A língua portuguesa</strong> como elemento unificador, ao
            contrário das línguas indígenas diversas que sobreviviam na América
            Espanhola.
          </li>
          <li>
            <strong>O comércio interno</strong> baseado no Rio de Janeiro como
            polo econômico, que criava laços de dependência entre as províncias.
          </li>
          <li>
            <strong>A repressão eficiente</strong> — personalizada em Luís Alves
            de Lima e Silva (Caxias) — que conteve as revoltas antes que pudessem
            se articular em movimento nacional.
          </li>
          <li>
            <strong>O medo da "anarquia"</strong> nas elites locais, que preferiam
            a ordem imperial ao caos de uma república fragmentada, evocando o
            exemplo haitiano.
          </li>
          <li>
            <strong>A escravidão como fator de coesão das elites:</strong> As
            elites de todas as províncias — fossem do Nordeste açucareiro ou do
            Sul gaúcho — tinham o interesse comum de manter a escravidão, o que
            criava uma solidariedade de classe que superava os conflitos regionais.
          </li>
        </ul>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Unidade mantida</h3>
            <p>
              Apesar das 4 grandes revoltas e inúmeras menores, o Brasil não se
              fragmentou. O projeto centralizador saiu vencedor, consolidado pelo
              Segundo Reinado a partir de 1840.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Preço social</h3>
            <p>
              A unidade foi paga com sangue — especialmente o da Cabanagem, que
              matou 30–40 mil pessoas. A "ordem" imperial foi construída sobre a
              violência contra as camadas mais pobres e marginalizadas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎖️</span>
            <h3>Legado de Caxias</h3>
            <p>
              Luís Alves de Lima e Silva construiu sua carreira reprimindo revoltas
              populares. Tornar-se "patrono do Exército" e símbolo da unidade
              nacional é a maior ironia da história militar brasileira.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO EXTRA — Partidos imperiais e imprensa ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto político</span>
        <h2>7. Partidos, Imprensa e Sociedade no Primeiro Reinado</h2>
        <p>
          O Primeiro Reinado foi marcado pelo surgimento de uma esfera pública
          política incipiente. A imprensa desempenhou papel central na oposição
          a Dom Pedro I: jornais como <em>O Tamoio</em> (fundado por José
          Bonifácio depois de seu afastamento do governo) e <em>Aurora
          Fluminense</em> (de Evaristo da Veiga) criticavam o autoritarismo
          imperial e defendiam maior participação parlamentar.
        </p>
        <p>
          Dois grupos políticos informais disputavam o espaço no Parlamento:
        </p>
        <ul>
          <li>
            <strong>Portugueses e "pedroistas":</strong> Apoiadores de Dom Pedro I,
            favoráveis ao governo centralizado e com laços com Portugal; muitos
            eram comerciantes de origem lusitana radicados no Rio de Janeiro.
          </li>
          <li>
            <strong>Liberais "brasileiros":</strong> Deputados e publicistas que
            defendiam mais autonomia parlamentar, liberdade de imprensa e redução
            do Poder Moderador. Identificavam-se com a causa da nação brasileira
            em contraposição ao "lusitanismo" de Dom Pedro.
          </li>
        </ul>
        <p>
          A tensão entre esses grupos culminou nos conflitos de março de 1831 — a
          Noite das Garrafadas — quando a rivalidade entre brasileiros e
          portugueses no Rio transbordou para as ruas, tornando insustentável a
          posição do Imperador.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Jornal / Figura</th>
                <th>Posição política</th>
                <th>Papel no Primeiro Reinado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gazeta do Rio de Janeiro</td>
                <td>Pró-governo</td>
                <td>Órgão oficial da Imprensa Régia; apoiava Dom Pedro</td>
              </tr>
              <tr>
                <td>O Tamoio</td>
                <td>Oposição liberal</td>
                <td>Fundado por José Bonifácio após demissão; criticava o Imperador</td>
              </tr>
              <tr>
                <td>Aurora Fluminense</td>
                <td>Oposição liberal moderada</td>
                <td>Evaristo da Veiga; influência na campanha pelo 7 de Abril</td>
              </tr>
              <tr>
                <td>José Bonifácio</td>
                <td>Liberal, depois oposição</td>
                <td>"Patriarca da Independência"; demitido em 1823, exilado</td>
              </tr>
              <tr>
                <td>Evaristo da Veiga</td>
                <td>Liberal</td>
                <td>Jornalista e deputado; ícone da oposição moderada ao Imperador</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>A importância da imprensa:</strong> A criação da Imprensa Régia
          (1808) e a subsequente proliferação de jornais criaram um espaço público
          de debate político inédito no Brasil. Ironicamente, Dom João VI, ao
          trazer a imprensa para o Brasil, plantou a semente da crítica que
          desgastaria seu filho. O jornalismo político do Primeiro Reinado foi a
          primeira forma de oposição organizada da história brasileira.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>8. Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>O Ato Adicional de 1834 reformou a Constituição de 1824 e criou as Assembleias Legislativas Provinciais. Qual foi a consequência não prevista dessa medida?</p>}
          options={[
            { letter: "a", text: "A centralização excessiva do poder no governo imperial" },
            { letter: "b", text: "O enfraquecimento do governo central, facilitando revoltas regionais", correct: true },
            { letter: "c", text: "A abolição imediata da escravidão nas províncias do Norte" },
            { letter: "d", text: "O fortalecimento do Poder Moderador do Imperador" },
            { letter: "e", text: "A criação de um sistema parlamentarista semelhante ao inglês" },
          ]}
          resolution={<p>O Ato Adicional descentralizou o poder ao criar assembleias provinciais autônomas e extinguir o Conselho de Estado. Sem mecanismos suficientes de controle central, as tensões regionais explodiram em revoltas — como a Cabanagem, Farroupilha, Balaiada e Sabinada — mostrando que a descentralização excessiva comprometia a unidade do país.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>A Farroupilha (1835–1845) é frequentemente distinguida das demais revoltas regenciais porque:</p>}
          options={[
            { letter: "a", text: "Foi a que causou maior número de mortos, superando a Cabanagem" },
            { letter: "b", text: "Foi liderada pela elite regional (estancieiros gaúchos) e teve solução negociada, sem punições", correct: true },
            { letter: "c", text: "Foi a única de caráter abertamente abolicionista, exigindo a libertação dos escravizados" },
            { letter: "d", text: "Contou com apoio oficial do governo argentino para proclamar a separação" },
            { letter: "e", text: "Foi reprimida diretamente por Dom Pedro I antes de sua abdicação" },
          ]}
          resolution={<p>Diferente das revoltas de caráter popular (Cabanagem, Balaiada), a Farroupilha foi conduzida pelos grandes estancieiros gaúchos, insatisfeitos com a taxação sobre o charque. Por ser uma revolta da elite e não das camadas populares, o governo imperial optou por uma solução negociada: Caxias concedeu anistia geral em 1845, sem condenações — algo impensável nas outras revoltas.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Cabanagem (1835–1840) no Grão-Pará é considerada a revolta mais mortal da história brasileira. Quais fatores explicam a magnitude da violência e da destruição demográfica?</p>}
          options={[
            { letter: "a", text: "Envolvimento de tropas estrangeiras que utilizaram armas avançadas contra a população civil" },
            { letter: "b", text: "Combinação de exclusão social extrema de índios e mestiços, conflito de classes com as elites brancas, brutalidade da repressão imperial e epidemias, causando 30–40 mil mortos (30–40% da população regional)", correct: true },
            { letter: "c", text: "Política deliberada do governo imperial de exterminar as populações indígenas da Amazônia" },
            { letter: "d", text: "A longa duração de 10 anos de combates contínuos em território densamente habitado" },
            { letter: "e", text: "Intervenção da Igreja Católica, que condenou os cabanos e legitimou a repressão" },
          ]}
          resolution={<p>A Cabanagem combinou fatores estruturais devastadores: os cabanos (camponeses pobres, índios e mestiços) viviam em condições de miséria extrema e exclusão total. O conflito contra as elites brancas de Belém foi intensamente violento de ambos os lados. A repressão imperial foi brutal, e as epidemias que se seguiram ao conflito completaram a destruição. O resultado foi a morte de 30–40 mil pessoas, eliminando entre 30% e 40% da população do Grão-Pará.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) "O 7 de Abril de 1831 foi saudado pelos liberais como a vitória do povo sobre o despotismo. Contudo, a abdicação de Dom Pedro I não alterou a estrutura escravista, latifundiária ou oligárquica do Brasil." Essa afirmação evidencia que o 7 de Abril:</p>}
          options={[
            { letter: "a", text: "Representou uma revolução social completa, comparável à Revolução Francesa" },
            { letter: "b", text: "Foi um evento de ruptura política sem transformação social — mudou quem governava, não como a sociedade estava organizada", correct: true },
            { letter: "c", text: "Marcou o início do processo de abolição da escravidão no Brasil" },
            { letter: "d", text: "Resultou na implantação de uma república federativa no Brasil" },
            { letter: "e", text: "Levou à elaboração de uma nova Constituição mais democrática em 1831" },
          ]}
          resolution={<p>O 7 de Abril foi uma mudança política — retirou Dom Pedro I do poder e abriu o Período Regencial — mas não produziu transformações sociais. A escravidão continuou, o latifúndio permaneceu, e as mesmas elites mantiveram o controle do Estado. É um exemplo claro de como mudanças políticas podem ocorrer sem ruptura social.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>O Golpe da Maioridade de 1840 antecipou a maioridade de Dom Pedro II para 14 anos. Qual era o interesse político dos liberais brasileiros ao propor essa medida?</p>}
          options={[
            { letter: "a", text: "Encerrar definitivamente a ameaça separatista da Farroupilha, que exigia um imperador adulto" },
            { letter: "b", text: "Recuperar influência política no Estado imperial, pois esperavam ter mais ascendência sobre o jovem imperador do que os conservadores que dominavam a Regência", correct: true },
            { letter: "c", text: "Cumprir a determinação testamentária de Dom Pedro I, que havia pedido a maioridade antecipada do filho" },
            { letter: "d", text: "Impedir que os militares proclamassem uma república antes que o herdeiro pudesse governar" },
            { letter: "e", text: "Atender à pressão britânica para estabilizar politicamente o Brasil e garantir o pagamento da dívida externa" },
          ]}
          resolution={<p>O Golpe da Maioridade foi uma jogada política dos liberais: durante a Regência, os conservadores dominavam o governo. Ao antecipar a maioridade de Pedro II, os liberais esperavam ganhar influência sobre um jovem imperador ainda inexperiente. O movimento mostra que a política imperial era marcada pela disputa entre os dois partidos pelo favor do monarca.</p>}
        />
      </section>
    </article>
  );
}
