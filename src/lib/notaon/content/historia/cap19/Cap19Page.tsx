"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 19</span>
          <h1>Absolutismo e Mercantilismo</h1>
          <p>
            O absolutismo monárquico representou a forma política dominante na Europa entre os séculos XV e XVIII,
            caracterizando-se pela concentração de todos os poderes na figura do rei, legitimado pelo direito divino
            e pela teoria da soberania absoluta. Em paralelo, o mercantilismo constituiu a doutrina econômica que
            orientou as políticas dos Estados nacionais em formação, fundamentando-se no acúmulo de metais preciosos,
            na balança comercial favorável e na exploração colonial como instrumentos de enriquecimento nacional.
            A compreensão dessas estruturas é indispensável para entender a formação do mundo moderno e as relações
            que moldaram a colonização do Brasil.
          </p>
        </div>
      </section>

      {/* ── SVG 1: Diagrama do Absolutismo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura do Poder</span>
        <h2>O Diagrama do Absolutismo</h2>
        <p>
          O absolutismo pode ser visualizado como um sistema irradiante: o monarca ocupa o centro e de sua figura
          emanam todos os poderes — legislativo, executivo, judiciário e militar —, eliminando os corpos intermediários
          que limitavam o poder real na Idade Média, como a nobreza feudal e os Parlamentos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 600 500" width="100%" style={{ maxWidth: 600, display: "block", margin: "0 auto" }}>
            {/* Fundo */}
            <rect width="600" height="500" fill="#1a1a2e" rx="12" />

            {/* Círculo central - Rei */}
            <circle cx="300" cy="240" r="60" fill="#c9a84c" />
            <text x="300" y="234" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="bold">REI</text>
            <text x="300" y="252" textAnchor="middle" fill="#1a1a2e" fontSize="11">(Direito Divino)</text>

            {/* Raios de poder */}
            <line x1="300" y1="180" x2="300" y2="110" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="240" y1="200" x2="150" y2="150" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="360" y1="200" x2="450" y2="150" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="240" y1="275" x2="150" y2="340" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="360" y1="275" x2="450" y2="340" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="300" y1="300" x2="300" y2="380" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4,2" />

            {/* Nódulos de poder */}
            <rect x="240" y="65" width="120" height="45" rx="8" fill="#2d2d5e" />
            <text x="300" y="84" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="300" y="100" textAnchor="middle" fill="#e0e0ff" fontSize="11">LEGISLATIVO</text>

            <rect x="60" y="118" width="105" height="45" rx="8" fill="#2d2d5e" />
            <text x="112" y="137" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="112" y="153" textAnchor="middle" fill="#e0e0ff" fontSize="11">EXECUTIVO</text>

            <rect x="432" y="118" width="105" height="45" rx="8" fill="#2d2d5e" />
            <text x="484" y="137" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="484" y="153" textAnchor="middle" fill="#e0e0ff" fontSize="11">JUDICIÁRIO</text>

            <rect x="60" y="318" width="105" height="45" rx="8" fill="#2d2d5e" />
            <text x="112" y="337" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="112" y="353" textAnchor="middle" fill="#e0e0ff" fontSize="11">MILITAR</text>

            <rect x="432" y="318" width="105" height="45" rx="8" fill="#2d2d5e" />
            <text x="484" y="337" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="484" y="353" textAnchor="middle" fill="#e0e0ff" fontSize="11">RELIGIOSO</text>

            <rect x="240" y="385" width="120" height="45" rx="8" fill="#2d2d5e" />
            <text x="300" y="404" textAnchor="middle" fill="#e0e0ff" fontSize="11" fontWeight="bold">PODER</text>
            <text x="300" y="420" textAnchor="middle" fill="#e0e0ff" fontSize="11">FISCAL</text>

            {/* Título */}
            <text x="300" y="478" textAnchor="middle" fill="#c9a84c" fontSize="12" fontStyle="italic">
              O rei: origem de todo poder no Estado absolutista
            </text>
          </svg>
          <figcaption>Diagrama do absolutismo: o rei como centro irradiador de todos os poderes do Estado.</figcaption>
        </figure>
      </section>

      {/* ── Seção 1: Origens do Absolutismo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>Origens e Fundamentos do Absolutismo</h2>
        <p>
          O absolutismo emergiu no contexto da transição do feudalismo para o capitalismo comercial, entre os séculos
          XIV e XVI. Com o enfraquecimento da nobreza feudal — decorrente das pestes, das guerras e das transformações
          econômicas —, os reis aproveitaram a aliança com a burguesia comercial nascente para centralizar o poder.
          A burguesia precisava de unidade política, moeda estável, sistema de pesos e medidas uniformes e proteção
          militar para seus negócios; o rei precisava de recursos financeiros e apoio para subjugar a nobreza.
          Essa aliança tática resultou no fortalecimento das monarquias nacionais.
        </p>
        <p>
          Do ponto de vista teórico, o absolutismo foi legitimado por pensadores como Jean Bodin (1530–1596),
          que em <em>Os Seis Livros da República</em> (1576) formulou a teoria da soberania como poder perpétuo,
          absoluto e indivisível do monarca. Jacques-Bénigne Bossuet (1627–1704), bispo francês, fundamentou
          o absolutismo na teoria do direito divino: o rei era o representante de Deus na Terra, e desobedecer
          ao soberano equivalia a desobedecer ao próprio Criador. Thomas Hobbes, em <em>Leviatã</em> (1651),
          defendeu o poder absoluto por razões laicas: sem um soberano forte, a vida humana seria "solitária,
          pobre, sórdida, brutish e curta", num estado de guerra de todos contra todos.
        </p>

        <div className="lesson-highlight">
          <strong>Características essenciais do absolutismo:</strong> concentração de poderes na figura do rei;
          exercício do poder sem limites constitucionais; exércitos permanentes financiados pelo Estado;
          burocracia centralizada; direito divino como legitimação; eliminação dos corpos intermediários
          (parlamentos medievais, nobreza feudal autônoma).
        </div>
      </section>

      {/* ── Seção 2: Luís XIV ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Modelo Francês</span>
        <h2>Luís XIV e o Auge do Absolutismo Francês</h2>
        <p>
          Luís XIV (1638–1715), o "Rei Sol", governa a França de 1661 a 1715, após a morte do cardeal Mazarino,
          e representa o ápice do absolutismo europeu. A frase que lhe é atribuída — <em>"L'État c'est moi"</em>
          ("O Estado sou eu") — sintetiza com precisão cirúrgica a filosofia política do regime. Luís não delegava
          poderes: presidia pessoalmente os conselhos, nomeava e destituía ministros a seu critério, controlava
          o orçamento e a política externa sem qualquer consulta ao Parlamento ou aos Estados Gerais, que não
          foram convocados entre 1614 e 1789.
        </p>
        <p>
          O Palácio de Versalhes, construído a partir de 1661 e transformado em sede do governo em 1682, foi
          o instrumento político mais sofisticado de Luís XIV. Ao transferir a corte de Paris para Versalhes,
          o rei obrigou a nobreza a residir junto ao palácio, afastando-a de suas bases de poder regional
          e tornando-a dependente das graças reais para sobrevivência social e econômica. A corte de Versalhes
          — com seus rituais meticulosos, hierarquias rigorosas e etiqueta elaborada — foi o teatro em que Luís
          XIV encenou diariamente sua superioridade. A construção do palácio custou estima-se entre 2 e 3 bilhões
          de libras em moeda da época, empobrecendo gravemente o erário francês.
        </p>
        <p>
          Internamente, Luís XIV revogou o Édito de Nantes (1685), que garantia liberdade religiosa aos
          huguenotes (protestantes franceses), desencadeando a emigração de cerca de 200 mil artesãos e
          comerciantes habilidosos — um golpe severo à economia francesa. Em política externa, travou
          guerras quase contínuas que, embora tenham expandido as fronteiras francesas, deixaram o país
          financeiramente exausto. O reinado de Luís XIV pavimentou, paradoxalmente, o caminho para a
          Revolução Francesa de 1789.
        </p>
      </section>

      {/* ── Seção 3: Absolutismo Inglês ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Caso Inglês</span>
        <h2>Absolutismo na Inglaterra: da Petição de Direitos à Revolução Gloriosa</h2>
        <p>
          A Inglaterra oferece o estudo de caso mais rico sobre os limites do absolutismo, pois foi o único
          grande país europeu onde a nobreza e a burguesia conseguiram impor restrições formais ao poder real
          ainda no século XVII. A dinastia Tudor — Henrique VIII, Maria I, Elizabeth I — exerceu um poder
          forte e centralizado, mas sem romper com o Parlamento. Foi com os Stuart — Jaime I e Carlos I —
          que a contradição entre a pretensão absolutista e as tradições constitucionais inglesas se tornou
          irreconciliável.
        </p>
        <p>
          Em 1628, o Parlamento forçou Carlos I a assinar a <strong>Petição de Direitos</strong>, que proibia
          a cobrança de impostos sem aprovação parlamentar, o aprisionamento arbitrário e o aquartelamento
          de soldados em casas privadas. Carlos I ignorou sistematicamente a Petição, governou sem o
          Parlamento por onze anos (1629–1640) e tentou impor o anglicanismo à Escócia — o que desencadeou
          a Guerra Civil inglesa (1642–1649). O conflito opôs os "Cavaleiros" (realistas) às forças do
          Parlamento, lideradas por Oliver Cromwell e seu "Novo Modelo de Exército". Carlos I foi capturado,
          julgado e decapitado em 30 de janeiro de 1649 — evento sem precedentes na Europa moderna.
        </p>
        <p>
          Após o interregno republicano de Cromwell (Commonwealth, 1649–1660) e a Restauração dos Stuart
          (Carlos II e Jaime II), a tensão voltou à superfície. Jaime II, católico, tentou alargar os
          direitos dos católicos e expandir o poder real, provocando a <strong>Revolução Gloriosa de 1688</strong>:
          o Parlamento convidou Guilherme de Orange (protestante holandês) e sua esposa Maria Stuart a assumirem
          o trono inglês. Jaime II fugiu sem resistência, e Guilherme III assinou o <strong>Bill of Rights</strong>
          (1689), que estabeleceu definitivamente a supremacia parlamentar: o rei não poderia cobrar impostos,
          manter exércitos ou suspender leis sem aprovação do Parlamento. A Revolução Gloriosa marcou o
          nascimento da monarquia constitucional moderna.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Cronologia do conflito entre Coroa e Parlamento na Inglaterra</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Evento</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1215</td>
                <td>Magna Carta</td>
                <td>Primeiros limites formais ao poder real na Inglaterra</td>
              </tr>
              <tr>
                <td>1628</td>
                <td>Petição de Direitos</td>
                <td>Proíbe impostos sem aprovação parlamentar e prisões arbitrárias</td>
              </tr>
              <tr>
                <td>1642–1649</td>
                <td>Guerra Civil Inglesa</td>
                <td>Parlamento versus Coroa; vitória parlamentar; decapitação de Carlos I</td>
              </tr>
              <tr>
                <td>1649–1660</td>
                <td>Commonwealth / Protetorado</td>
                <td>República sob Cromwell; experiência republicana frustrada</td>
              </tr>
              <tr>
                <td>1688</td>
                <td>Revolução Gloriosa</td>
                <td>Deposição de Jaime II sem derramamento de sangue</td>
              </tr>
              <tr>
                <td>1689</td>
                <td>Bill of Rights</td>
                <td>Supremacia do Parlamento estabelecida formalmente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4: Despotismo Esclarecido ── */}
      <section className="lesson-section">
        <span className="section-kicker">Século XVIII</span>
        <h2>O Despotismo Esclarecido</h2>
        <p>
          Na segunda metade do século XVIII, alguns monarcas europeus incorporaram superficialmente os ideais
          iluministas ao poder absoluto, originando o chamado <em>despotismo esclarecido</em> ou <em>absolutismo
          ilustrado</em>. Esses soberanos promoveram reformas administrativas, educacionais e religiosas
          inspiradas nas ideias de Voltaire, Montesquieu e os enciclopedistas, mas sem jamais abrir mão do
          poder absoluto. A fórmula era: "tudo pelo povo, nada com o povo."
        </p>
        <p>
          <strong>Frederico II da Prússia (1740–1786)</strong> modernizou a administração prussiana, patrocinou
          as artes e ciências, manteve correspondência intensa com Voltaire, aboliu a tortura judicial —
          mas manteve a servidão, expandiu militarmente a Prússia e governou com mão de ferro. <strong>Catarina
          II da Rússia (1762–1796)</strong> promoveu a educação de mulheres, criou academias de ciências,
          importou filósofos iluministas para São Petersburgo — mas reprimiu brutalmente a Revolta de Pugachev
          (1773–1775), reforçou a servidão e expandiu o território russo. <strong>José II da Áustria
          (1780–1790)</strong> foi o mais radical: aboliu a servidão, decretou a tolerância religiosa
          (Édito de Tolerância, 1781), secularizou mosteiros e reformou o sistema jurídico — mas suas reformas
          foram tão bruscas que provocaram revoltas e muitas foram revertidas após sua morte.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Os principais déspotas esclarecidos europeus</caption>
            <thead>
              <tr>
                <th>Soberano</th>
                <th>País</th>
                <th>Reinado</th>
                <th>Principais reformas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frederico II ("O Grande")</td>
                <td>Prússia</td>
                <td>1740–1786</td>
                <td>Racionalização administrativa, abolição da tortura, tolerância religiosa limitada</td>
              </tr>
              <tr>
                <td>Catarina II ("A Grande")</td>
                <td>Rússia</td>
                <td>1762–1796</td>
                <td>Academias de ciências, educação feminina, expansão territorial</td>
              </tr>
              <tr>
                <td>José II</td>
                <td>Áustria</td>
                <td>1780–1790</td>
                <td>Abolição da servidão, Édito de Tolerância, secularização dos mosteiros</td>
              </tr>
              <tr>
                <td>Pombal (ministro)</td>
                <td>Portugal</td>
                <td>1755–1777</td>
                <td>Expulsão dos jesuítas, reconstrução de Lisboa, reformas educacionais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5: Mercantilismo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Política Econômica</span>
        <h2>Mercantilismo: a Doutrina Econômica do Absolutismo</h2>
        <p>
          O mercantilismo não foi um sistema teórico coeso, mas um conjunto de práticas e orientações econômicas
          adotadas pelos Estados europeus entre os séculos XV e XVIII para maximizar a riqueza nacional e o
          poder do monarca. Suas características essenciais variavam de país para país, mas convergiam em
          torno de alguns pilares fundamentais:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
          <li>
            <strong>Bullionismo/Metalismo:</strong> a riqueza de uma nação era medida pela quantidade de
            metais preciosos (ouro e prata) em seu território. O objetivo era acumular o máximo possível
            de metais, importando-os das colônias ou obtendo-os via balança comercial favorável.
          </li>
          <li>
            <strong>Balança comercial favorável:</strong> exportar mais do que importar, de modo que o
            saldo positivo resultasse em entrada de metais preciosos. Daí o protecionismo: tarifas alfandegárias
            elevadas sobre importações e incentivos às exportações.
          </li>
          <li>
            <strong>Monopólios coloniais:</strong> as colônias existiam para enriquecer a metrópole.
            Deveriam fornecer matérias-primas baratas e consumir exclusivamente produtos manufaturados
            da metrópole, sem comércio com outras nações — o chamado Pacto Colonial ou exclusivo metropolitano.
          </li>
          <li>
            <strong>Intervenção estatal:</strong> o Estado regulava ativamente a produção, o comércio
            e os preços, concedendo privilégios a companhias comerciais (como a Companhia das Índias Orientais)
            e regulamentando o trabalho e as manufaturas.
          </li>
          <li>
            <strong>Promoção da manufatura nacional:</strong> incentivar a produção interna para reduzir
            a dependência de importações (Colbertismo na França: Jean-Baptiste Colbert, ministro de Luís XIV).
          </li>
        </ul>
      </section>

      {/* ── SVG 2: Mercantilismo e Pacto Colonial ── */}
      <section className="lesson-section">
        <span className="section-kicker">Esquema Visual</span>
        <h2>O Mercantilismo e o Pacto Colonial</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 420" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
            <rect width="700" height="420" fill="#0d1b2a" rx="12" />

            {/* Metrópole */}
            <rect x="250" y="30" width="200" height="70" rx="10" fill="#1b4f72" />
            <text x="350" y="60" textAnchor="middle" fill="#aed6f1" fontSize="14" fontWeight="bold">METRÓPOLE</text>
            <text x="350" y="80" textAnchor="middle" fill="#aed6f1" fontSize="11">(Portugal / Espanha / Inglaterra)</text>

            {/* Colônia */}
            <rect x="250" y="320" width="200" height="70" rx="10" fill="#1e8449" />
            <text x="350" y="350" textAnchor="middle" fill="#d5f5e3" fontSize="14" fontWeight="bold">COLÔNIA</text>
            <text x="350" y="370" textAnchor="middle" fill="#d5f5e3" fontSize="11">(Brasil / América / África)</text>

            {/* Seta para baixo: manufaturados */}
            <line x1="310" y1="100" x2="310" y2="320" stroke="#aed6f1" strokeWidth="2" />
            <polygon points="310,320 304,308 316,308" fill="#aed6f1" />
            <rect x="160" y="190" width="130" height="40" rx="6" fill="#154360" />
            <text x="225" y="207" textAnchor="middle" fill="#aed6f1" fontSize="10" fontWeight="bold">MANUFATURADOS</text>
            <text x="225" y="222" textAnchor="middle" fill="#aed6f1" fontSize="10">Produtos industriais</text>

            {/* Seta para cima: matérias-primas */}
            <line x1="390" y1="320" x2="390" y2="100" stroke="#d5f5e3" strokeWidth="2" />
            <polygon points="390,100 384,112 396,112" fill="#d5f5e3" />
            <rect x="410" y="190" width="130" height="40" rx="6" fill="#145a32" />
            <text x="475" y="207" textAnchor="middle" fill="#d5f5e3" fontSize="10" fontWeight="bold">MATÉRIAS-PRIMAS</text>
            <text x="475" y="222" textAnchor="middle" fill="#d5f5e3" fontSize="10">Açúcar, ouro, prata</text>

            {/* Lucro retido na metrópole */}
            <rect x="50" y="45" width="160" height="40" rx="6" fill="#7d6608" />
            <text x="130" y="60" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">LUCRO RETIDO</text>
            <text x="130" y="75" textAnchor="middle" fill="#fff" fontSize="10">Acúmulo de metais</text>
            <line x1="250" y1="65" x2="210" y2="65" stroke="#f9e79f" strokeWidth="2" />
            <polygon points="212,65 224,59 224,71" fill="#f9e79f" />

            {/* Proibição de comércio direto */}
            <rect x="490" y="45" width="170" height="40" rx="6" fill="#922b21" />
            <text x="575" y="60" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">EXCLUSIVIDADE</text>
            <text x="575" y="75" textAnchor="middle" fill="#fff" fontSize="10">Proibido comércio c/ outros</text>
            <line x1="450" y1="65" x2="490" y2="65" stroke="#f1948a" strokeWidth="2" />
            <polygon points="488,65 476,59 476,71" fill="#f1948a" />

            {/* Rótulo geral */}
            <text x="350" y="400" textAnchor="middle" fill="#f0b27a" fontSize="12" fontStyle="italic">
              Pacto Colonial: a colônia existe para enriquecer a metrópole
            </text>
          </svg>
          <figcaption>Esquema do Pacto Colonial (exclusivo metropolitano): fluxos de mercadorias e acúmulo de riqueza.</figcaption>
        </figure>
      </section>

      {/* ── Seção 6: Variantes do Mercantilismo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Variações Nacionais</span>
        <h2>Variantes do Mercantilismo por País</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Formas nacionais do mercantilismo europeu</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Denominação</th>
                <th>Ênfase</th>
                <th>Principal representante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inglaterra</td>
                <td>Mercantilismo comercial</td>
                <td>Balança comercial favorável, navegação mercante, Atos de Navegação</td>
                <td>Thomas Mun</td>
              </tr>
              <tr>
                <td>França</td>
                <td>Colbertismo</td>
                <td>Desenvolvimento das manufaturas nacionais, protecionismo industrial</td>
                <td>Jean-Baptiste Colbert</td>
              </tr>
              <tr>
                <td>Espanha / Portugal</td>
                <td>Bullionismo / Metalismo</td>
                <td>Extração e acúmulo de metais preciosos das colônias americanas</td>
                <td>Casa de Contratación (Espanha)</td>
              </tr>
              <tr>
                <td>Alemanha (Prússia)</td>
                <td>Cameralismo</td>
                <td>Eficiência administrativa e tributação para fortalecer o Estado</td>
                <td>Johann Joachim Becher</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: Pacto Colonial e Brasil ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impacto Colonial</span>
        <h2>O Pacto Colonial e o Brasil</h2>
        <p>
          No caso português, o mercantilismo se traduziu no chamado <strong>Pacto Colonial</strong> ou
          "exclusivo metropolitano": o Brasil deveria produzir apenas o que Portugal precisava (principalmente
          açúcar, ouro e algodão) e comprar exclusivamente de Portugal os produtos manufaturados. O comércio
          direto do Brasil com outras nações era proibido, e os lucros deviam fluir exclusivamente para
          Lisboa. Na prática, porém, o contrabando era endêmico, e a Holanda — durante e após a ocupação
          do nordeste (1630–1654) — desafiou sistematicamente o monopólio português.
        </p>
        <p>
          As <strong>Companhias de Comércio</strong> foram o instrumento privilegiado do mercantilismo
          colonial: a Companhia Geral do Comércio do Brasil (1649), criada por Portugal com apoio de
          capitais conversos, visava proteger a navegação do açúcar contra a pirataria holandesa e
          monopolizar o comércio colonial. Essas companhias recebiam do Estado o monopólio de certas
          rotas e mercadorias em troca de serviços militares e comerciais.
        </p>
        <p>
          O Pacto Colonial gerou crescente ressentimento nas elites coloniais brasileiras, que eram obrigadas
          a pagar preços inflados pelos manufaturados portugueses e recebiam preços deprimidos por suas
          exportações. Essa contradição foi um dos motores das revoltas coloniais do século XVIII — como
          a Inconfidência Mineira (1789) — e, em última instância, da Independência do Brasil em 1822.
        </p>
      </section>

      {/* ── Seção 8: Crítica ao Mercantilismo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Superação do Modelo</span>
        <h2>Crítica ao Mercantilismo: Fisiocratas e Adam Smith</h2>
        <p>
          No século XVIII, o mercantilismo começou a ser questionado por novas correntes econômicas. Os
          <strong> fisiocratas</strong> franceses — François Quesnay e Anne Robert Jacques Turgot —
          argumentavam que a verdadeira fonte de riqueza não era o comércio nem a indústria, mas a
          <em>terra</em> e a agricultura. Criticavam os monopólios e regulações mercantilistas e defendiam
          o <em>laissez-faire</em> ("deixai fazer"), ou seja, a liberdade de comércio e produção sem
          intervenção estatal.
        </p>
        <p>
          O golpe decisivo veio com <strong>Adam Smith</strong> (1723–1790), filósofo escocês que publicou
          <em> A Riqueza das Nações</em> em 1776 — o mesmo ano da independência americana. Smith demonstrou
          que a riqueza nacional não vinha do acúmulo de ouro, mas da produção e da divisão do trabalho.
          A busca individual pelo lucro, regulada pela "mão invisível" do mercado, produzia mais riqueza
          do que qualquer intervenção estatal. Smith atacou os monopólios coloniais como fontes de ineficiência
          e corrupção, e defendeu o livre-comércio. Suas ideias fundamentaram o liberalismo econômico que
          dominaria o século XIX.
        </p>
      </section>

      {/* ── Seção 9: Comparação ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Comparativa</span>
        <h2>Absolutismo e Mercantilismo: síntese e conexões</h2>
        <p>
          O absolutismo e o mercantilismo formaram um sistema integrado e mutuamente reforçante. O poder
          centralizado do Estado absolutista era a condição necessária para implementar as políticas
          mercantilistas — proteger as rotas comerciais, financiar os exércitos que defendiam as colônias,
          regular as manufaturas e garantir os monopólios. Por sua vez, os recursos gerados pelo comércio
          colonial financiavam o aparato burocrático e militar do Estado absolutista.
        </p>
        <p>
          Para o ENEM, é fundamental perceber que essas estruturas não são apenas abstrações teóricas:
          elas moldaram concretamente a história do Brasil. O tráfico negreiro que escravizou mais de
          4 milhões de africanos para trabalhar nos canaviais e minas brasileiras foi uma das mais
          lucrativas operações mercantis da era moderna, financiada pelos Estados absolutistas ibéricos
          e pelas companhias de comércio que eles protegiam. A resistência dos povos indígenas à
          escravidão e à espoliação colonial foi sistematicamente sufocada pelo aparato militar do
          Estado absolutista português.
        </p>

        <div className="lesson-highlight">
          <strong>Conexão ENEM:</strong> o ENEM frequentemente apresenta textos de época sobre o
          mercantilismo, trechos de Jean Bodin, Bossuet ou Adam Smith, e questiona as relações entre
          política e economia no período. Preste atenção especial ao Pacto Colonial e suas consequências
          para o Brasil.
        </div>
      </section>

      {/* ── Seção 10: Tabela Absolutismo Europeu ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama Europeu</span>
        <h2>O Absolutismo nos Principais Países Europeus</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparativo do absolutismo nos principais reinos europeus</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Monarca símbolo</th>
                <th>Período</th>
                <th>Característica específica</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>França</td>
                <td>Luís XIV</td>
                <td>1661–1715</td>
                <td>Versalhes; "L'État c'est moi"; Colbertismo</td>
                <td>Revolução Francesa (1789)</td>
              </tr>
              <tr>
                <td>Inglaterra</td>
                <td>Carlos I / Stuart</td>
                <td>Séc. XVII</td>
                <td>Conflito com Parlamento; Revolução Gloriosa (1688)</td>
                <td>Monarquia constitucional (Bill of Rights)</td>
              </tr>
              <tr>
                <td>Espanha</td>
                <td>Filipe II</td>
                <td>1556–1598</td>
                <td>Império colonial; Inquisição; Armada Invencível</td>
                <td>Declínio gradual no séc. XVII</td>
              </tr>
              <tr>
                <td>Portugal</td>
                <td>D. João IV / Marquês de Pombal</td>
                <td>Séc. XVII–XVIII</td>
                <td>Império colonial; mercantilismo colonial; Pacto Colonial</td>
                <td>Liberalismo (séc. XIX)</td>
              </tr>
              <tr>
                <td>Prússia</td>
                <td>Frederico II</td>
                <td>1740–1786</td>
                <td>Militarismo; despotismo esclarecido</td>
                <td>Unificação alemã (1871)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Exercises ── */}
      <Exercise
        level="Básico"
        title="Absolutismo: definição"
        statement={
          <p>
            O absolutismo monárquico, forma política predominante na Europa entre os séculos XV e XVIII,
            caracterizava-se fundamentalmente por:
          </p>
        }
        options={[
          { letter: "A", text: "Divisão do poder entre rei, nobreza e Igreja, garantindo equilíbrio político." },
          { letter: "B", text: "Concentração de todos os poderes na figura do monarca, legitimado pelo direito divino.", correct: true },
          { letter: "C", text: "Supremacia do Parlamento sobre o rei, com eleições regulares para os ministérios." },
          { letter: "D", text: "Governo republicano exercido por uma assembleia de nobres e burgueses." },
          { letter: "E", text: "Partilha do poder entre o rei e os Estados Gerais, convocados anualmente." },
        ]}
        resolution={
          <p>
            O absolutismo monárquico se define exatamente pela concentração de todos os poderes —
            legislativo, executivo, judiciário, militar e religioso — na figura do rei, que governava
            sem partilhar o poder com corpos representativos. O direito divino era a principal
            legitimação ideológica desse sistema, segundo a qual o monarca representava Deus na Terra.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Mercantilismo e Pacto Colonial"
        statement={
          <p>
            O Pacto Colonial (ou exclusivo metropolitano), princípio central do mercantilismo aplicado
            às colônias ibéricas, estabelecia que:
          </p>
        }
        options={[
          { letter: "A", text: "As colônias podiam comerciar livremente com qualquer nação europeia, desde que pagassem impostos à metrópole." },
          { letter: "B", text: "A metrópole deveria comprar produtos coloniais a preços de mercado internacional para maximizar a concorrência." },
          { letter: "C", text: "As colônias existiam para servir à metrópole: fornecer matérias-primas e consumir exclusivamente seus manufaturados, sem comércio com outros países.", correct: true },
          { letter: "D", text: "As companhias de comércio tinham liberdade total para negociar com qualquer parceiro internacional." },
          { letter: "E", text: "A colonização visava ao desenvolvimento autônomo das regiões colonizadas, sem transferência de riqueza para a Europa." },
        ]}
        resolution={
          <p>
            O Pacto Colonial era o mecanismo econômico pelo qual a metrópole garantia que a
            colônia existia exclusivamente para seu enriquecimento. A colônia não podia comerciar
            com outras nações, devia comprar apenas produtos metropolitanos (a preços inflados) e
            vender apenas à metrópole (a preços deprimidos). Esse sistema gerou imensas desigualdades
            e foi um dos motores das independências coloniais.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Revolução Gloriosa e suas implicações"
        statement={
          <p>
            A Revolução Gloriosa inglesa de 1688 e o subsequente Bill of Rights (1689) representaram
            um marco histórico porque:
          </p>
        }
        options={[
          { letter: "A", text: "Eliminaram completamente a monarquia e instauraram uma república parlamentar na Inglaterra." },
          { letter: "B", text: "Estabeleceram a supremacia do Parlamento sobre o rei, criando os fundamentos da monarquia constitucional moderna e influenciando as revoluções liberais do século XVIII.", correct: true },
          { letter: "C", text: "Restauraram o poder absoluto da Igreja Católica na Inglaterra, revertendo as reformas de Henrique VIII." },
          { letter: "D", text: "Concederam ao rei poderes ainda maiores, incluindo o direito de cobrar impostos sem aprovação do Parlamento." },
          { letter: "E", text: "Transformaram a Inglaterra em uma república federativa sob Oliver Cromwell." },
        ]}
        resolution={
          <p>
            A Revolução Gloriosa foi singular porque depôs um rei sem derramar sangue e estabeleceu
            por escrito (Bill of Rights) os limites do poder real. O rei não podia mais cobrar impostos,
            manter exércitos permanentes ou suspender leis sem aprovação parlamentar. Esse modelo de
            monarquia constitucional inspirou pensadores como Locke e influenciou as revoluções
            americana (1776) e francesa (1789).
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Absolutismo e critica iluminista"
        statement={
          <p>
            "O soberano é apenas o primeiro servidor do Estado. [...] O príncipe deve estar
            constantemente vigilante, trabalhando para o bem do Estado, zelando pela justiça e
            nunca perdendo de vista o objetivo que o povo lhe confiou."
            (Frederico II da Prússia, <em>Anti-Maquiavel</em>, 1740)
          </p>
        }
        options={[
          { letter: "A", text: "Reflete o absolutismo clássico de Bossuet, segundo o qual o rei age apenas em nome de Deus, sem obrigações para com o povo." },
          { letter: "B", text: "Expressa os princípios do despotismo esclarecido: o monarca absoluto que incorpora retoricamente ideais iluministas de serviço público, sem abrir mão do poder.", correct: true },
          { letter: "C", text: "Demonstra que Frederico II era um monarca constitucional, submetido ao controle de um parlamento eleito." },
          { letter: "D", text: "Reflete as ideias de Jean-Baptiste Colbert sobre o papel do Estado na promoção das manufaturas nacionais." },
          { letter: "E", text: "Exprime o pensamento de Adam Smith sobre a mão invisível do mercado e o papel mínimo do Estado." },
        ]}
        resolution={
          <p>
            O trecho é um exemplo paradigmático do despotismo esclarecido: Frederico II adota a
            linguagem iluminista ("servidor do Estado", "bem do povo") sem abrir mão do poder
            absoluto. O paradoxo do despotismo esclarecido era exatamente esse: usar o vocabulário
            iluminista para legitimar o absolutismo, fazendo "tudo pelo povo, mas nada com o povo."
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Mercantilismo, escravidão e Brasil"
        statement={
          <p>
            Considerando que o mercantilismo preconizava o máximo lucro nas trocas coloniais e que
            o Brasil colonial dependia da força de trabalho africana escravizada, é correto afirmar
            que o tráfico negreiro:
          </p>
        }
        options={[
          { letter: "A", text: "Era uma prática marginal e proibida pelos Estados europeus, que buscavam colonizar com trabalho livre." },
          { letter: "B", text: "Constituía uma atividade economicamente secundária, já que o principal lucro vinha da mineração de ouro sem uso de escravos." },
          { letter: "C", text: "Era incompatível com os princípios mercantilistas, pois desviava recursos metálicos para a compra de escravizados africanos." },
          { letter: "D", text: "Integrava-se perfeitamente à lógica mercantilista: era um negócio altamente lucrativo, respaldado pelos Estados absolutistas, que gerava riqueza às metrópoles através da exploração do trabalho africano nas colônias.", correct: true },
          { letter: "E", text: "Decorreu exclusivamente da iniciativa privada de comerciantes, sem qualquer respaldo ou interesse dos Estados absolutistas europeus." },
        ]}
        resolution={
          <p>
            O tráfico negreiro era plenamente coerente com a lógica mercantilista: gerava lucros
            em três pontos da triangulação atlântica (venda de mercadorias europeias na África,
            venda de africanos escravizados no Brasil, venda de açúcar/ouro europeu). Os Estados
            absolutistas ibéricos, holandeses, ingleses e franceses regularam, taxaram e se
            beneficiaram ativamente do tráfico. A escravização de mais de 4 milhões de africanos
            para o Brasil foi a base material sobre a qual o mercantilismo colonial português se sustentou.
          </p>
        }
      />
    </article>
  );
}
