"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 15</span>
          <h1>Igreja Católica, Cruzadas e Cultura Medieval</h1>
          <p>
            A Igreja Católica Romana foi a instituição mais poderosa, pervasiva e duradoura da
            Idade Média ocidental. Ela governava corpos por meio dos sacramentos e almas por meio
            da ameaça do inferno; cobrava impostos (dízimo) e administrava propriedades que chegaram
            a constituir um terço das terras da Europa; educava clérigos e reis; julgava crimes de
            fé pela Inquisição e legitimava guerras por meio das Cruzadas. Mas a Igreja medieval
            foi também o principal veículo de preservação cultural, de arte monumental (catedrais
            góticas), de filosofia (Escolástica) e de ensino superior (universidades). Compreender
            o papel da Igreja medieval é compreender o coração da civilização ocidental entre os
            séculos V e XV.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Poder Papal</span>
        <h2>1. A Igreja como Poder Temporal e Espiritual</h2>
        <p>
          Na Idade Média, a distinção moderna entre Estado e religião simplesmente não existia. A
          Igreja controlava simultaneamente dois domínios: o espiritual (salvação das almas, administração
          dos sacramentos, pregação, ensino) e o temporal (propriedades, exércitos de bispos,
          jurisdição eclesiástica sobre casamentos e testamentos, diplomacia entre reinos). O papa
          era, ao mesmo tempo, chefe espiritual da cristandade e soberano político de um Estado
          (os Territórios Pontifícios, no centro da Itália) com exército próprio.
        </p>
        <p>
          Os sacramentos — batismo, eucaristia, confirmação, penitência, ordem, matrimônio e unção
          dos enfermos — eram as chaves de entrada e permanência na comunidade cristã. Ser
          excomungado (excluído dos sacramentos) significava a exclusão social e a morte civil:
          ninguém podia negociar, contratar ou casar-se com um excomungado. O interdito — suspensão
          coletiva dos sacramentos em um reino — era uma arma política poderosa: em 1208, o papa
          Inocêncio III lançou interdito sobre a Inglaterra, paralisando a vida religiosa do reino
          para forçar o rei João Sem-Terra a ceder.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Diagrama do poder da Igreja medieval nos domínios espiritual e temporal">
            <rect x="0" y="0" width="720" height="200" fill="#f4f0f8" />

            {/* Papa no centro */}
            <circle cx="360" cy="100" r="55" fill="#f4c84a" stroke="#8a6a00" strokeWidth="2" />
            <text x="360" y="94" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3a2800">PAPA</text>
            <text x="360" y="112" textAnchor="middle" fontSize="10" fill="#3a2800">Roma / Vaticano</text>

            {/* Poder Espiritual - esquerda */}
            <rect x="20" y="30" width="200" height="140" rx="10" fill="#a8c8f8" stroke="#2060a0" strokeWidth="1.5" opacity="0.9" />
            <text x="120" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#001a5a">PODER ESPIRITUAL</text>
            <text x="120" y="78" textAnchor="middle" fontSize="10" fill="#001a5a">• Sacramentos</text>
            <text x="120" y="95" textAnchor="middle" fontSize="10" fill="#001a5a">• Excomunhão / Interdito</text>
            <text x="120" y="112" textAnchor="middle" fontSize="10" fill="#001a5a">• Pregação / Ensino</text>
            <text x="120" y="129" textAnchor="middle" fontSize="10" fill="#001a5a">• Cânon e Teologia</text>
            <text x="120" y="146" textAnchor="middle" fontSize="10" fill="#001a5a">• Cruzadas</text>
            <line x1="220" y1="100" x2="305" y2="100" stroke="#2060a0" strokeWidth="1.5" strokeDasharray="5,3" />

            {/* Poder Temporal - direita */}
            <rect x="500" y="30" width="200" height="140" rx="10" fill="#a8e8a8" stroke="#1a6a1a" strokeWidth="1.5" opacity="0.9" />
            <text x="600" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#003a00">PODER TEMPORAL</text>
            <text x="600" y="78" textAnchor="middle" fontSize="10" fill="#003a00">• Propriedades (1/3 Europa)</text>
            <text x="600" y="95" textAnchor="middle" fontSize="10" fill="#003a00">• Dízimo (10% produção)</text>
            <text x="600" y="112" textAnchor="middle" fontSize="10" fill="#003a00">• Exércitos episcopais</text>
            <text x="600" y="129" textAnchor="middle" fontSize="10" fill="#003a00">• Jurisdição matrimonial</text>
            <text x="600" y="146" textAnchor="middle" fontSize="10" fill="#003a00">• Estado Papal</text>
            <line x1="415" y1="100" x2="500" y2="100" stroke="#1a6a1a" strokeWidth="1.5" strokeDasharray="5,3" />

            <text x="360" y="192" textAnchor="middle" fontSize="10" fill="#555" fontStyle="italic">Igreja Medieval — dupla dimensão de poder</text>
          </svg>
          <figcaption>A Igreja Católica medieval exercia simultaneamente poder espiritual (sacramentos, excomunhão, doutrina) e poder temporal (propriedades, dízimo, jurisdição, exércitos), fundindo as duas esferas que a modernidade separa.</figcaption>
        </figure>
      </section>

      {/* SEÇÃO 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Cisma</span>
        <h2>2. O Cisma do Oriente (1054): Catolicismo versus Ortodoxia</h2>
        <p>
          Em 1054, ocorreu o Grande Cisma que dividiu definitivamente o Cristianismo em dois ramos:
          a Igreja Católica Romana, sob o papa de Roma, e a Igreja Ortodoxa Oriental, sob o
          patriarca de Constantinopla. As causas foram simultaneamente teológicas e políticas.
          Teologicamente, o ponto de maior atrito era a questão do <em>Filioque</em>: o Credo
          Niceno-Constantinopolitano afirmava que o Espírito Santo procede do Pai; Roma acrescentou
          "e do Filho" (<em>Filioque</em>), alteração que Constantinopla considerava herética e
          arrogante, pois fora feita sem concílio universal. Politicamente, o conflito girava em
          torno da primazia do bispo de Roma (pretensão papal) versus a igualdade colegial dos
          patriarcas do Oriente (Alexandria, Antioquia, Jerusalém, Constantinopla).
        </p>
        <p>
          O cisma teve consequências duradouras: os eslavos orientais (Rússia, Sérvia, Bulgária,
          Romênia) ficaram na órbita da Ortodoxia, enquanto os eslavos ocidentais (Polônia, Boêmia,
          Eslováquia, Croácia) permaneceram católicos — divisão que ainda hoje marca a identidade
          cultural e geopolítica da Europa Oriental. A IV Cruzada (1204), que saqueou Constantinopla
          em vez de lutar contra os muçulmanos, aprofundou irreversivelmente o fosso entre as duas
          Igrejas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Igreja Católica Romana</th>
                <th>Igreja Ortodoxa Oriental</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centro</td>
                <td>Roma (papa)</td>
                <td>Constantinopla (patriarca ecumênico)</td>
              </tr>
              <tr>
                <td>Língua litúrgica</td>
                <td>Latim</td>
                <td>Grego (e línguas nacionais)</td>
              </tr>
              <tr>
                <td>Filioque</td>
                <td>Aceita ("e do Filho")</td>
                <td>Rejeita (heresia)</td>
              </tr>
              <tr>
                <td>Autoridade máxima</td>
                <td>Papa (infalível em ex cathedra)</td>
                <td>Colegiado de patriarcas</td>
              </tr>
              <tr>
                <td>Influência cultural</td>
                <td>Europa Ocidental, América Latina</td>
                <td>Europa Oriental, Rússia, Grécia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Cruzadas</span>
        <h2>3. As Cruzadas (1095–1291): Causas, Desenvolvimento e Impacto</h2>
        <p>
          As Cruzadas foram expedições militares organizadas pelo papado entre os séculos XI e XIII
          com o objetivo declarado de recuperar os Lugares Santos (Jerusalém e a Terra Santa) das
          mãos dos muçulmanos. Em 1095, o papa Urbano II convocou a Primeira Cruzada no Concílio de
          Clermont, prometendo indulgência plenária (remissão de todos os pecados) aos que
          participassem. A causa imediata foi o pedido de auxílio do imperador bizantino Aleixo I
          contra os turcos seljúcidas, que haviam conquistado a Anatólia e ameaçavam Constantinopla.
          Mas as causas mais profundas incluíam: o crescimento demográfico europeu que pressionava
          os filhos menores da nobreza sem herança, o desejo de rotas comerciais com o Oriente
          (especiarias, sedas, perfumes), a expansão papal e o ideal de guerra justa.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Mapa esquemático das rotas das Cruzadas do Ocidente europeu ao Oriente Médio">
            <rect x="0" y="0" width="720" height="180" fill="#e8f4f8" />
            {/* Mar Mediterrâneo */}
            <ellipse cx="380" cy="120" rx="310" ry="45" fill="#a8d4f0" opacity="0.7" />
            <text x="380" y="128" textAnchor="middle" fontSize="11" fill="#1a6a8a">Mar Mediterrâneo</text>

            {/* Europa Ocidental */}
            <rect x="30" y="20" width="160" height="80" rx="8" fill="#f4d89a" stroke="#8a6a00" strokeWidth="1.5" />
            <text x="110" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3a2800">Europa</text>
            <text x="110" y="72" textAnchor="middle" fontSize="10" fill="#3a2800">Ocidental</text>
            <text x="110" y="88" textAnchor="middle" fontSize="9" fill="#3a2800">(França, Alemanha, Itália)</text>

            {/* Constantinopla */}
            <circle cx="430" cy="60" r="22" fill="#c8b8f8" stroke="#4a2080" strokeWidth="2" />
            <text x="430" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2a0060">Constanti-</text>
            <text x="430" y="71" textAnchor="middle" fontSize="10" fill="#2a0060">nopla</text>

            {/* Jerusalém */}
            <circle cx="590" cy="110" r="22" fill="#f4a8a8" stroke="#8a0000" strokeWidth="2" />
            <text x="590" y="107" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5a0000">Jerusalém</text>
            <text x="590" y="122" textAnchor="middle" fontSize="9" fill="#5a0000">(objetivo)</text>

            {/* Rota terrestre */}
            <path d="M190,60 Q310,40 408,60" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeDasharray="7,4" />
            <polygon points="408,55 420,60 408,65" fill="#c0392b" />
            <text x="305" y="38" textAnchor="middle" fontSize="9" fill="#c0392b">Rota terrestre</text>

            {/* Rota marítima */}
            <path d="M190,80 Q300,150 450,130 Q530,118 568,110" stroke="#2980b9" strokeWidth="2.5" fill="none" strokeDasharray="7,4" />
            <polygon points="568,105 580,110 568,115" fill="#2980b9" />
            <text x="370" y="155" textAnchor="middle" fontSize="9" fill="#2980b9">Rota marítima (via Mediterrâneo)</text>

            <text x="360" y="14" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Rotas esquemáticas das Cruzadas (séc. XI–XIII)</text>
          </svg>
          <figcaption>Rotas esquemáticas das Cruzadas: a rota terrestre (passando por Constantinopla) e a rota marítima pelo Mediterrâneo, ambas em direção a Jerusalém e à Terra Santa.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cruzada</th>
                <th>Período</th>
                <th>Principal Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª Cruzada</td>
                <td>1096–1099</td>
                <td>Conquista de Jerusalém; criação dos Estados Latinos do Oriente</td>
              </tr>
              <tr>
                <td>2ª Cruzada</td>
                <td>1147–1149</td>
                <td>Fracasso; liderada por Luís VII e Conrado III</td>
              </tr>
              <tr>
                <td>3ª Cruzada</td>
                <td>1189–1192</td>
                <td>Após Saladino reconquistar Jerusalém (1187); Ricardo Coração-de-Leão; acordo parcial</td>
              </tr>
              <tr>
                <td>4ª Cruzada</td>
                <td>1202–1204</td>
                <td>Saque de Constantinopla cristã; agravamento do Cisma; Império Latino de Constantinopla</td>
              </tr>
              <tr>
                <td>Cruzada das Crianças</td>
                <td>1212</td>
                <td>Fracasso trágico; crianças vendidas como escravos no norte da África</td>
              </tr>
              <tr>
                <td>Última Cruzada significativa</td>
                <td>1270</td>
                <td>8ª Cruzada; morte de Luís IX na Tunísia; fim das tentativas maiores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Impacto das Cruzadas</span>
        <h2>4. Consequências das Cruzadas: Cultura, Comércio e Contato</h2>
        <p>
          As Cruzadas tiveram consequências muito além do campo de batalha. O contato com o mundo
          islâmico — que na época era culturalmente mais avançado que a Europa Ocidental nas áreas
          de medicina, filosofia, matemática e astronomia — provocou uma transferência de conhecimento
          que contribuiu diretamente para o Renascimento europeu. Especiarias como pimenta, cravo e
          canela tornaram-se artigos de luxo que impulsionaram o comércio mediterrâneo, enriquecendo
          cidades como Veneza e Gênova que forneciam transporte marítimo aos cruzados. O uso de
          papel, a numeração arábica e o conceito de zero chegaram ao Ocidente por essa via.
        </p>
        <p>
          Do ponto de vista dos direitos humanos, as Cruzadas envolveram massacres de populações
          civis muçulmanas (Jerusalém, 1099), perseguições a judeus ao longo do caminho (pogroms no
          Reno, 1096), e episódios como a Cruzada das Crianças (1212), em que crianças foram
          recrutadas, muitas morrendo no caminho ou sendo vendidas como escravas. A Cruzada Albigense
          (1209–1229) voltou-se contra cristãos cátaros no sul da França — precedente sinistro do uso
          da violência religiosa contra populações internas à cristandade.
        </p>

        <div className="lesson-highlight">
          <h3>As Cruzadas e o mundo islâmico: perspectiva árabe</h3>
          <p>
            O historiador árabe Usama ibn Munqidh (1095–1188), em seus memórias, descreveu os
            cruzados como bárbaros fascínados pela violência mas curiosamente abertos ao comércio.
            Na perspectiva árabe, as Cruzadas foram chamadas de "guerras dos francos" — invasões
            externas que a diplomacia muçulmana soube explorar, dividindo os reinos cruzados entre
            si. Saladino (Salah ad-Din), curdo, reconquistou Jerusalém em 1187 com notável clemência
            — em contraste com o massacre cristão de 1099 —, fato que o ENEM frequentemente utiliza
            para discutir perspectivas múltiplas da história.
          </p>
        </div>
      </section>

      {/* SEÇÃO 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Inquisição</span>
        <h2>5. A Inquisição Medieval</h2>
        <p>
          A Inquisição foi o tribunal eclesiástico criado para investigar e punir heresias —
          desvios da doutrina ortodoxa da Igreja. A Inquisição Medieval foi criada por Gregório IX
          em 1231, inicialmente para combater os cátaros (ou albigenses) no sul da França e os
          valdenses. Os inquisidores, geralmente dominicanos ou franciscanos, conduziam interrogatórios,
          buscavam confissão (muitas vezes por tortura — autorizada por Inocêncio IV em 1252) e
          encaminhavam os condenados ao poder secular para execução. A pena máxima era a fogueira;
          penas menores incluíam peregrinações forçadas, confisco de bens, prisão e uso obrigatório
          de uma cruz amarela nas roupas.
        </p>
        <p>
          A Inquisição Espanhola (1478–1834), distinta da medieval, foi criada pelos Reis Católicos
          Fernando e Isabel para investigar conversos judeus e mouros suspeitos de praticar
          secretamente suas antigas religiões. Dirigida por Tomás de Torquemada, tornou-se sinônimo
          de perseguição religiosa na memória histórica ocidental. Sua atuação no Brasil, por meio
          dos tentáculos do Santo Ofício de Lisboa, afetou judeus sefarditas que se refugiaram na
          colônia — incluindo os que ajudaram a financiar expedições ao Nordeste.
        </p>
      </section>

      {/* SEÇÃO 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Pensamento</span>
        <h2>6. Escolástica e Tomás de Aquino</h2>
        <p>
          A Escolástica foi o método filosófico-teológico desenvolvido nas escolas catedralícias e
          universidades medievais, que buscava conciliar a fé cristã com a razão filosófica,
          especialmente o pensamento de Aristóteles. O termo vem de <em>schola</em> (escola) e
          caracteriza-se pelo método da <em>quaestio disputata</em>: apresentação de uma questão,
          exposição das opiniões contrárias, resposta do mestre e réplica às objeções.
        </p>
        <p>
          Tomás de Aquino (1225–1274), dominicano italiano, foi o maior expoente da Escolástica.
          Em sua obra monumental <em>Summa Theologiae</em>, Tomás harmonizou Aristóteles com o
          Evangelhos, argumentando que fé e razão não se contradizem, mas são vias complementares
          de conhecimento — a razão conduz até onde a fé a supera. Sua síntese, o tomismo, tornou-se
          a filosofia oficial da Igreja Católica. Pedro Abelardo, Anselmo de Cantuária e o próprio
          Alberto Magno (mestre de Tomás) foram outros escolásticos importantes.
        </p>
      </section>

      {/* SEÇÃO 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Arte</span>
        <h2>7. Arte Medieval: Românico e Gótico</h2>
        <p>
          A arquitetura medieval produziu dois grandes estilos: o románico (séculos X–XII) e o
          gótico (séculos XII–XV). A arquitetura románica caracteriza-se por paredes espessas,
          arcos de volta redonda, torres maciças, naves escuras e decoração escultórica simples —
          a catedral de Santiago de Compostela e a Abadia de Cluny são exemplos. O estilo reflete
          uma concepção da Igreja como fortaleza da fé num mundo hostil.
        </p>
        <p>
          O gótico, surgido na Île-de-France no século XII (Abadia de Saint-Denis, c.1140), introduziu
          inovações estruturais que permitiram construções mais altas e leves: o arco ogival, a
          abóbada de cruzaria e o arcobotante (contraforte externo que transfere o peso das paredes).
          Com paredes mais finas, as catedrais góticas podiam ter enormes vitrais coloridos que
          banhavam o interior de luz — a Sainte-Chapelle em Paris, a Catedral de Chartres, a Notre-Dame
          de Paris. O gótico transformou a luz num símbolo teológico: a catedral era a imagem da
          Cidade de Deus em pedra e luz.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Arte Românica (X–XII)</th>
                <th>Arte Gótica (XII–XV)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arco</td>
                <td>Redondo (semicircular)</td>
                <td>Ogival (apontado)</td>
              </tr>
              <tr>
                <td>Paredes</td>
                <td>Espessas, sem grandes janelas</td>
                <td>Finas, com grandes vitrais</td>
              </tr>
              <tr>
                <td>Altura</td>
                <td>Baixa a média</td>
                <td>Muito alta (verticalidade)</td>
              </tr>
              <tr>
                <td>Iluminação</td>
                <td>Escura, mística</td>
                <td>Abundante luz colorida</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Santiago de Compostela, Cluny</td>
                <td>Notre-Dame de Paris, Chartres, Colônia</td>
              </tr>
              <tr>
                <td>Simbolismo</td>
                <td>Igreja como fortaleza da fé</td>
                <td>Luz como revelação divina; ascensão ao céu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Universidades</span>
        <h2>8. Universidades Medievais e a Preservação do Saber</h2>
        <p>
          As universidades medievais emergiram das escolas catedralícias nos séculos XI e XII, sendo
          Bolonha (1088, direito), Paris (c.1150, teologia e artes) e Oxford (c.1167, filosofia e
          ciências naturais) as mais antigas. A palavra <em>universitas</em> referia-se à corporação
          de mestres e alunos (<em>universitas magistrorum et scholarium</em>) — uma associação com
          estatutos próprios, direitos corporativos e autonomia relativa em relação ao poder
          episcopal local. Essa autonomia corporativa é a raiz da liberdade acadêmica moderna.
        </p>
        <p>
          O currículo medieval baseava-se nas <em>artes liberais</em>: o trivium (gramática, retórica,
          dialética) e o quadrivium (aritmética, geometria, música, astronomia). Após o bacharelado
          em artes, o estudante podia avançar para as faculdades superiores de teologia, direito ou
          medicina. A preservação e transmissão de textos gregos — especialmente Aristóteles, Galeno
          e Euclides — mediada pelos árabes (via Al-Ândalus) foi fundamental para o desenvolvimento
          intelectual medieval e, posteriormente, renascentista.
        </p>
      </section>

      {/* SEÇÃO 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Cotidiano</span>
        <h2>9. Vida Cotidiana na Idade Média: Camponeses, Cavaleiros e Clero</h2>
        <p>
          A Idade Média não era apenas um mundo de guerras e teologia abstrata: era também um mundo
          de aldeia, de festas, de mercados, de histórias e de uma rica cultura oral. Os camponeses
          — a maioria absoluta da população — organizavam sua vida em torno das estações agrícolas,
          dos festivais religiosos (Natal, Páscoa, festas de santos padroeiros) e das obrigações
          com o senhor. A dieta era simples: pão de centeio, leguminosas, vegetais do horto, e carne
          raramente (porco no outono, após a matança). A mortalidade infantil era altíssima; a
          expectativa de vida, baixa — mas quem sobrevivia à infância podia chegar aos 50 ou 60 anos.
        </p>
        <p>
          Os cavaleiros obedeciam ao código da cavalaria (<em>chevalerie</em>): lealdade ao senhor,
          proteção dos fracos, defesa da fé cristã e cortesia às damas. Esse ideal, celebrado nas
          chansons de geste (como a Canção de Rolando) e nos romans arturianos, era amplamente
          romantizado — a realidade da guerra medieval era brutal. O clero, dividido entre o clero
          regular (monges, que viviam em mosteiros sob uma regra) e o secular (padres e bispos que
          viviam "no século", em paróquias e catedrais), era a camada mais letrada da sociedade.
        </p>
      </section>

      {/* SEÇÃO 10 */}
      <section className="lesson-section">
        <span className="section-kicker">África e Cruzadas</span>
        <h2>10. Dimensão Africana e Islâmica nas Cruzadas</h2>
        <p>
          O norte da África foi diretamente afetado pelas Cruzadas: a 8ª Cruzada (1270) dirigiu-se
          à Tunísia (antiga Cartago); as rotas comerciais mediterrâneas que as Cruzadas buscavam
          controlar passavam por cidades norte-africanas como Alexandria e Trípoli. A Cruzada das
          Crianças (1212) terminou tragicamente com muitos meninos vendidos como escravos no norte
          da África — episódio que o ENEM pode utilizar para discutir violência, vulnerabilidade
          infantil e exploração no mundo medieval.
        </p>
        <p>
          O Islã, durante as Cruzadas, produziu figuras notáveis como Saladino (Salah ad-Din al-Ayyubi,
          1137–1193), um curdo que unificou o Egito e a Síria sob o Sultanato Aiúbida e reconquistou
          Jerusalém em 1187. Sua reputação de cavaleirismo e clemência — que contrastava com a
          crueldade de alguns cruzados — foi celebrada até mesmo por cronistas europeus. A complexidade
          desse personagem desafia visões simplistas de conflito entre "civilizações".
        </p>
      </section>

      {/* SEÇÃO 11 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. O Cisma do Oriente (1054)"
          statement={
            <p>
              O Cisma do Oriente de 1054 dividiu o Cristianismo em dois ramos principais. Assinale
              a alternativa que indica corretamente as causas e consequências desse evento:
            </p>
          }
          options={[
            { letter: "a", text: "O Cisma foi causado pela Reforma Protestante e dividiu a Europa entre católicos e evangélicos." },
            { letter: "b", text: "O Cisma resultou de um conflito militar entre papa e imperador bizantino sobre a posse de Jerusalém." },
            {
              letter: "c",
              text: "O Cisma resultou de disputas teológicas (a questão do Filioque) e políticas (primazia do papa versus igualdade dos patriarcas), separando a Igreja Católica Romana da Igreja Ortodoxa Oriental.",
              correct: true,
            },
            { letter: "d", text: "O Cisma foi causado pela invasão árabe de Roma em 1054, que forçou o papa a fugir para o Oriente." },
            { letter: "e", text: "O Cisma resultou exclusivamente da disputa sobre o celibato clerical entre Roma e Constantinopla." },
          ]}
          resolution={
            <p>
              O Cisma de 1054 teve causas teológicas (Filioque — acréscimo ao Credo feito por Roma
              sem concílio universal) e políticas (a reivindicação papal de primazia sobre todos os
              patriarcas vs. o princípio de colegialidade dos patriarcas orientais). Suas consequências
              foram duradouras: moldou as identidades religiosas e culturais da Europa Oriental e
              Ocidental até hoje. A alternativa C é a correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. As Cruzadas: causas e motivações"
          statement={
            <p>
              O papa Urbano II, ao convocar a Primeira Cruzada em Clermont (1095), prometeu
              indulgência plenária aos participantes. Além do motivo religioso, quais outros fatores
              impulsionaram a participação massiva nas Cruzadas?
            </p>
          }
          options={[
            { letter: "a", text: "A única motivação cruzadista foi religiosa: os cavaleiros desejavam exclusivamente a salvação da alma." },
            {
              letter: "b",
              text: "As Cruzadas foram motivadas por fatores econômicos (controle de rotas comerciais, especiarias), sociais (nobres sem herança buscando terras) e políticos (expansão do poder papal), além do ideal religioso.",
              correct: true,
            },
            { letter: "c", text: "As Cruzadas foram convocadas exclusivamente para defender Constantinopla dos vikings." },
            { letter: "d", text: "A motivação principal era econômica: a Igreja buscava cobrar impostos dos muçulmanos sobre o comércio mediterrâneo." },
            { letter: "e", text: "As Cruzadas foram convocadas pelo imperador bizantino, não pelo papa, e tinham objetivos puramente militares." },
          ]}
          resolution={
            <p>
              A historiografia moderna (Jonathan Riley-Smith, Thomas Asbridge) mostra que as
              Cruzadas tinham motivações múltiplas e interligadas: fé genuína (a indulgência plenária
              era atrativa em uma cultura obcecada com pecado e punição), mas também pressões sociais
              (segundogênitos sem herança territorial), interesse econômico (mercadores de Veneza e
              Gênova queriam rotas e portos) e política papal (aumentar a autoridade do papado sobre
              a nobreza guerreira). A alternativa B é a mais completa e correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escolástica e a relação entre fé e razão"
          statement={
            <p>
              Tomás de Aquino, na <em>Summa Theologiae</em>, argumentou que "a fé e a razão são dois
              caminhos para a verdade que não podem se contradizer, pois ambos têm Deus como autor".
              Essa posição representa:
            </p>
          }
          options={[
            { letter: "a", text: "A rejeição completa da filosofia grega por parte da Igreja medieval." },
            { letter: "b", text: "O argumento de que a razão é superior à fé e deve substituí-la." },
            {
              letter: "c",
              text: "A síntese escolástica que conciliou o pensamento aristotélico com a teologia cristã, defendendo que razão e fé são complementares — a razão vai até onde a fé começa, sem contradição.",
              correct: true,
            },
            { letter: "d", text: "A posição de que apenas a fé, sem razão, leva à verdade — posição fideísta oposta à Escolástica." },
            { letter: "e", text: "A ruptura com Aristóteles e o retorno exclusivo aos Padres da Igreja como fonte de verdade." },
          ]}
          resolution={
            <p>
              O tomismo, síntese de Tomás de Aquino, é a resposta mais sofisticada da Igreja medieval
              ao desafio intelectual de Aristóteles (redescoberto via tradições islâmicas). Tomás não
              rejeitou nem subordinou completamente a razão à fé: argumentou que razão natural e
              revelação divina são vias complementares ao conhecimento de Deus. Isso distingue o
              tomismo do fideísmo (fé sem razão) e do racionalismo puro. A alternativa C é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Cruzadas e perspectiva islâmica"
          statement={
            <div>
              <p>
                <em>
                  "Salah ad-Din entrou em Jerusalém e ordenou que nenhum cristão fosse ferido.
                  Os habitantes da cidade puderam resgatar-se por um preço moderado; os pobres que
                  não podiam pagar foram libertados sem condição. Comparai isso com o que os francos
                  fizeram quando tomaram a cidade em 1099."
                </em>
              </p>
              <p><em>(Crônica árabe do século XII, adaptada)</em></p>
              <p>Com base no documento, identifique a perspectiva histórica expressa:</p>
            </div>
          }
          options={[
            { letter: "a", text: "O documento prova que as Cruzadas foram totalmente pacíficas e sem violência contra civis." },
            {
              letter: "b",
              text: "O documento reflete a perspectiva árabe/muçulmana sobre as Cruzadas, destacando o contraste entre a clemência de Saladino em 1187 e o massacre cristão de 1099, questionando a narrativa europeia que apresenta as Cruzadas como guerra justa.",
              correct: true,
            },
            { letter: "c", text: "O documento confirma que as Cruzadas foram exclusivamente motivadas por razões humanitárias." },
            { letter: "d", text: "O documento foi escrito por um cruzado cristão arrependido de sua participação nos massacres." },
            { letter: "e", text: "A crônica árabe é fonte pouco confiável, pois os muçulmanos não registravam eventos históricos com precisão." },
          ]}
          resolution={
            <p>
              O ENEM frequentemente apresenta fontes históricas de perspectivas não eurocêntricas e
              pede análise crítica. Este documento árabe (baseado em crônicas reais como as de Ibn
              al-Athir) contrasta duas visões de conquista: a tomada cristã de Jerusalém em 1099
              (com massacre de muçulmanos e judeus, documentado por cronistas cristãos e muçulmanos)
              e a reconquista de Saladino em 1187 (com acordo e libertação parcial dos habitantes).
              A alternativa B é a que melhor identifica a perspectiva histórica expressa no documento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. A arte gótica como linguagem teológica"
          statement={
            <p>
              As catedrais góticas medievais, com seus enormes vitrais coloridos e elevadas abóbadas
              ogivas, não eram apenas obras de engenharia: eram instrumentos pedagógicos e teológicos
              numa época de analfabetismo generalizado. Com base nessa perspectiva, analise a função
              social da arte gótica:
            </p>
          }
          options={[
            { letter: "a", text: "A arte gótica serviu exclusivamente para demonstrar o poder econômico das cidades medievais, sem função religiosa." },
            {
              letter: "b",
              text: "As catedrais góticas funcionavam como a 'Bíblia dos iletrados': suas esculturas, vitrais e pinturas narravam histórias bíblicas e ensinamentos morais a uma população que não sabia ler, transformando o espaço arquitetônico em texto visual sagrado.",
              correct: true,
            },
            { letter: "c", text: "O objetivo principal da arquitetura gótica era militar: as torres serviam como pontos de vigia contra invasores." },
            { letter: "d", text: "A arte gótica foi introduzida pelos muçulmanos durante as Cruzadas e não tem raízes na tradição cristã." },
            { letter: "e", text: "As catedrais góticas eram construídas pelos servos da gleba sob coerção feudal, sem qualquer dimensão cultural ou religiosa." },
          ]}
          resolution={
            <p>
              O conceito de "Bíblia dos pobres" (<em>biblia pauperum</em>) é central para entender
              a arte medieval. Em uma sociedade com taxas de analfabetismo próximas a 90%, as imagens
              esculpidas nos tímpanos das catedrais, as cenas nos vitrais e os mosaicos eram o
              principal meio de transmissão do ensinamento cristão. O Abade Suger de Saint-Denis
              (c.1081–1151), pai do gótico, escreveu explicitamente sobre o poder da luz e das
              imagens para elevar o espírito ao divino. A alternativa B é a correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
