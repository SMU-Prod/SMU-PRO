"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 29</span>
          <h1>Barroco</h1>
          <p>
            O século XVII foi uma era de contradições absolutas: a razão científica de Galileu colidia com a fé inabalável da Inquisição; o luxo das cortes europeias contrastava com a miséria das guerras religiosas; o ser humano se descobria capaz de medir os céus mas incapaz de escapar da morte. Dessa tensão irredutível nasceu o Barroco — a estética do excesso, do conflito, do claro-escuro. No Brasil, Gregório de Matos escrevia poesia ao mesmo tempo sagrada e obscena; em Portugal, o Padre Antônio Vieira construía sermões com a lógica de um geômetra e a paixão de um profeta. Entender o Barroco é entender como a arte pode nascer do sofrimento de não conseguir conciliar mundos opostos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Século XVII: Crise, Fé e Razão em Conflito</h2>

        <p>
          O Barroco surge no contexto da <strong>Contra-Reforma</strong> — o movimento da Igreja Católica para reagir à expansão do protestantismo iniciado por Lutero em 1517. A Igreja precisava afirmar sua autoridade e sua grandiosidade de forma visível e impactante: encomendou igrejas monumentais, pinturas de santos em êxtase, músicas dramáticas e sermões inflamados. A arte barroca é, em sua origem, uma <strong>arma política e religiosa</strong> — projetada para impressionar, comover e converter.
        </p>
        <p>
          Ao mesmo tempo, o século XVII assistia ao nascimento da ciência moderna: Galileu Galilei confirmava que a Terra girava em torno do Sol (heliocentrismo), Descartes fundava o racionalismo moderno, Newton descobria as leis da gravidade. A razão científica minava as certezas religiosas medievais. O ser humano barroco vive essa contradição sem resolução: quer acreditar, mas duvida; quer a salvação, mas sente o apelo do pecado; exalta a vida, mas é obcecado pela morte.
        </p>

        <div className="lesson-highlight">
          <h3>O que é o Barroco?</h3>
          <p>
            Barroco é o movimento cultural e artístico que se desenvolveu principalmente no século XVII, caracterizado pela tensão entre valores opostos — fé e razão, corpo e alma, pecado e salvação, vida e morte. Na literatura, manifesta-se pelo <strong>cultismo</strong> (ou gongorismo) — linguagem rebuscada, jogos de palavras, metáforas complexas — e pelo <strong>conceptismo</strong> (ou quevedismo) — raciocínio engenhoso, argumentação sofisticada, paradoxos filosóficos. Em Portugal e no Brasil, os principais representantes são o Padre Antônio Vieira (conceptismo) e Gregório de Matos (cultismo e conceptismo).
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Linha do tempo do Barroco com seus principais marcos históricos e literários"
          >
            <defs>
              <marker id="arrowB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#b45309" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="12" fill="#fffbeb" />
            <line x1="40" y1="100" x2="660" y2="100" stroke="#b45309" strokeWidth="3" markerEnd="url(#arrowB)" />

            <circle cx="80" cy="100" r="9" fill="#b45309" />
            <text x="80" y="82" textAnchor="middle" fontSize="11" fill="#78350f" fontWeight="bold">1580</text>
            <text x="80" y="120" textAnchor="middle" fontSize="10" fill="#92400e">União Ibérica;</text>
            <text x="80" y="133" textAnchor="middle" fontSize="10" fill="#92400e">início Barroco</text>

            <circle cx="210" cy="100" r="9" fill="#b45309" />
            <text x="210" y="82" textAnchor="middle" fontSize="11" fill="#78350f" fontWeight="bold">1601</text>
            <text x="210" y="120" textAnchor="middle" fontSize="10" fill="#92400e">Prosopopeia</text>
            <text x="210" y="133" textAnchor="middle" fontSize="10" fill="#92400e">(1º poema BR)</text>

            <circle cx="350" cy="100" r="9" fill="#7c3aed" />
            <text x="350" y="82" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1633</text>
            <text x="350" y="120" textAnchor="middle" fontSize="10" fill="#3b0764">Nascimento de</text>
            <text x="350" y="133" textAnchor="middle" fontSize="10" fill="#3b0764">Gregório de Matos</text>

            <circle cx="490" cy="100" r="9" fill="#7c3aed" />
            <text x="490" y="82" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1608</text>
            <text x="490" y="120" textAnchor="middle" fontSize="10" fill="#3b0764">Nascimento de</text>
            <text x="490" y="133" textAnchor="middle" fontSize="10" fill="#3b0764">Pe. Antônio Vieira</text>

            <circle cx="620" cy="100" r="9" fill="#dc2626" />
            <text x="620" y="82" textAnchor="middle" fontSize="11" fill="#7f1d1d" fontWeight="bold">1697</text>
            <text x="620" y="120" textAnchor="middle" fontSize="10" fill="#7f1d1d">Morte de</text>
            <text x="620" y="133" textAnchor="middle" fontSize="10" fill="#7f1d1d">Gregório de Matos</text>

            <text x="350" y="175" textAnchor="middle" fontSize="12" fill="#b45309" fontWeight="bold">Barroco Luso-Brasileiro — Séculos XVII–XVIII</text>
          </svg>
          <figcaption>Linha do tempo dos principais marcos do Barroco em Portugal e no Brasil.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>
        <h2>2. As Marcas Estéticas do Barroco</h2>

        <p>
          O Barroco reage ao equilíbrio e à harmonia do Classicismo renascentista. Se o Classicismo buscava clareza, medida e proporção, o Barroco celebra o excesso, a contradição e a complexidade. Não é uma negação da razão — é uma razão em crise, que usa todo o seu poder argumentativo para discutir o que não pode resolver: a finitude humana, o pecado, a morte, o amor e o divino.
        </p>
        <p>
          A palavra <strong>Barroco</strong> tem origem discutida: pode vir do português <em>barroco</em> (pedra irregular, de forma imperfeita) ou do italiano <em>baroco</em> (um silogismo sofístico da lógica medieval). Em ambas as etimologias, há o sentido de <strong>irregularidade</strong> e <strong>complexidade</strong> — o oposto da forma clássica perfeita e regular. O uso do termo como designação de um período artístico é relativamente recente: os próprios artistas e escritores do século XVII não se chamavam de "barrocos". O termo foi aplicado posteriormente — e inicialmente com conotação pejorativa, de "excesso" ou "mau gosto" — pela crítica neoclassicista do século XVIII que julgava os excessos ornamentais do período anterior.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Classicismo (séc. XVI)</th>
                <th>Barroco (séc. XVII)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estética geral</td>
                <td>Equilíbrio, harmonia, proporção</td>
                <td>Excesso, dinamismo, contrastes</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Clara, elegante, controlada</td>
                <td>Rebuscada, metafórica, paradoxal</td>
              </tr>
              <tr>
                <td>Relação fé × razão</td>
                <td>Equilibrada (antropocentrismo)</td>
                <td>Em conflito (teocentrismo vs. razão)</td>
              </tr>
              <tr>
                <td>Tema central</td>
                <td>Glória, amor idealizado, pátria</td>
                <td>Morte, pecado, efemeridade, Deus</td>
              </tr>
              <tr>
                <td>Tom geral</td>
                <td>Sereno, racional</td>
                <td>Dramático, angustiado, paradoxal</td>
              </tr>
              <tr>
                <td>Técnica principal</td>
                <td>Imitação dos clássicos gregos e latinos</td>
                <td>Cultismo (gongorismo) e conceptismo (quevedismo)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💀</span>
            <h3>Carpe Diem e Memento Mori</h3>
            <p>O Barroco oscila entre aproveitar a vida (<em>carpe diem</em>) e lembrar que a morte é inevitável (<em>memento mori</em>). Essa tensão irresolúvel gera a angústia estética barroca.</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Antíteses e Paradoxos</h3>
            <p>O Barroco ama opor contrários: vida/morte, luz/sombra, belo/feio, amor/dor. A antítese é o recurso estilístico mais frequente.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Efemeridade (Vanitas)</h3>
            <p><em>Vanitas vanitatum</em> — tudo é vaidade, tudo passa. As flores murcham, a beleza envelhece, o poder cai. O Barroco é obcecado pela transitoriedade de tudo.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Theatrum Mundi</h3>
            <p>O mundo é um teatro; a vida humana, uma representação efêmera. Cada indivíduo é um ator cumprindo um papel que Deus escolheu — e a morte encerra a peça.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cultismo e Conceptismo</span>
        <h2>3. As Duas Estéticas do Barroco Literário</h2>

        <p>
          Dentro do Barroco, há duas tendências principais que não são excludentes — muitos autores as combinam na mesma obra — mas têm ênfases diferentes. O ENEM as cobra com frequência, pedindo que o candidato identifique a qual tendência pertence determinado trecho ou autor.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Cultismo (Gongorismo)</th>
                <th>Conceptismo (Quevedismo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem do nome</td>
                <td>Luís de Góngora (poeta espanhol)</td>
                <td>Francisco de Quevedo (escritor espanhol)</td>
              </tr>
              <tr>
                <td>Foco</td>
                <td>Forma — na beleza e complexidade da linguagem</td>
                <td>Conteúdo — na agudeza do argumento e do pensamento</td>
              </tr>
              <tr>
                <td>Recursos principais</td>
                <td>Metáforas inusitadas, hipérbatos, latinismos, sinestesia</td>
                <td>Silogismos, paradoxos, jogos de palavras, raciocínio engenhoso</td>
              </tr>
              <tr>
                <td>Efeito buscado</td>
                <td>Impressionar pela beleza formal e pela raridade da imagem</td>
                <td>Surpreender pela inteligência do argumento e pelo engenho</td>
              </tr>
              <tr>
                <td>No Brasil</td>
                <td>Gregório de Matos (na lírica amorosa)</td>
                <td>Pe. Antônio Vieira (nos sermões); Gregório de Matos (na sátira)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Exemplo de cultismo:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Nasce o Sol, e não dura mais que um dia,<br/>
            Depois da Luz se segue a noite escura,<br/>
            Em tristes sombras morre a formosura,<br/>
            Em contínuas tristezas a alegria."
          </p>
          <p>
            (Gregório de Matos) — Antíteses (sol/noite, luz/sombra, alegria/tristeza), paralelismo sintático e vocabulário elevado: marcas do cultismo.
          </p>
        </div>

        <div className="math-block">
          <strong>Exemplo de conceptismo:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Vede que amor, e que arte: Deus faz-se homem para amar os homens como Deus, e os homens fazem-se Deus para poder amar a Deus como homens."
          </p>
          <p>
            (Pe. Antônio Vieira — Sermão da Sexagésima) — Raciocínio em quiasmo, paradoxo teológico, argumento em espiral: marcas do conceptismo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gregório de Matos</span>
        <h2>4. Gregório de Matos: A Boca do Inferno</h2>

        <p>
          <strong>Gregório de Matos e Guerra</strong> (1636–1696) é o primeiro grande poeta do Brasil — e um dos mais controversos. Nasceu em Salvador, estudou em Coimbra, exerceu advocacia e cargos administrativos na Bahia colonial, e foi chamado de <em>Boca do Inferno</em> pela virulência de sua poesia satírica. Sua obra, que circulou manuscrita em vida e só foi publicada no século XX, abrange quatro grandes vertentes: <strong>poesia sacra</strong>, <strong>poesia lírica amorosa</strong>, <strong>poesia satírica</strong> e <strong>poesia erótica</strong>.
        </p>
        <p>
          A grandeza de Gregório está justamente na sua capacidade de transitar entre registros completamente opostos: o mesmo poeta que escreve sonetos de contrição profunda diante de Deus, explorando a tensão entre o pecado e o arrependimento com intensidade mística, também escreve sátiras demolidoras contra governadores, bispos, comerciantes e mulheres — com linguagem às vezes grosseira e francamente obscena. Essa amplitude extrema é, em si, um traço barroco: a coexistência dos opostos num único sujeito.
        </p>

        <div className="lesson-highlight">
          <h3>As quatro faces da obra de Gregório de Matos</h3>
          <ul>
            <li><strong>Poesia sacra:</strong> meditação sobre o pecado, o arrependimento e a misericórdia divina. Sonetos como <em>"A Jesus Cristo Nosso Senhor"</em> revelam profunda angústia espiritual e elevado cultismo.</li>
            <li><strong>Poesia lírica amorosa:</strong> elogios a mulheres reais ou imaginárias, com o vocabulário clássico do amor petrarquiano adaptado ao ambiente tropical da Bahia colonial.</li>
            <li><strong>Poesia satírica:</strong> crítica feroze à corrupção dos governantes, ao clero hipócrita, aos comerciantes desonestos e à decadência moral da Bahia. Linguagem mordaz e às vezes escatológica.</li>
            <li><strong>Poesia erótica:</strong> celebração direta da sexualidade, com vocabulário explícito — o que valeu ao poeta perseguição e exílio.</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Soneto de arrependimento — Gregório de Matos:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "A vós correndo vou, braços sagrados,<br/>
            Nessa Cruz sacrossanta descobertos,<br/>
            Que para receber-me estais abertos,<br/>
            E por não castigar-me estais cravados."
          </p>
          <p>
            O pecador que corre para os braços abertos de Cristo — mas Cristo está cravado na cruz, então os braços não podem fechar para abraçar e nem para punir. O paradoxo teológico é perfeito: a cruz é simultaneamente abertura (perdão) e imobilidade (incapacidade de punir). Cultismo na imagem; conceptismo no argumento.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sátira Social Barroca</span>
        <h2>5. Gregório de Matos e a Crítica à Bahia Colonial</h2>

        <p>
          A versatilidade de Gregório de Matos é extraordinária: ele é ao mesmo tempo o místico que escreve com profundidade teológica sobre o arrependimento e a graça divina, o lírico que canta a beleza feminina com vocabulário clássico (e às vezes com vocabulário francamente carnal), o satírico que demolê com palavrões e escárnio os poderosos da Bahia colonial, e o cronista social que registra com precisão o cotidiano de uma cidade colonial no século XVII. Essa multiplicidade não é incoerência: é o Barroco em sua forma mais plena — a coexistência de opostos irreconciliáveis num único sujeito.
        </p>
        <p>
          Do ponto de vista biográfico, Gregório teve uma vida marcada por conflitos: estudou em Coimbra, exerceu advocacia e cargos administrativos na Bahia, teve múltiplos filhos, sofreu processos inquisitoriais por causa de sua poesia erótica e de comportamentos considerados escandalosos, e foi exilado para Angola por causa de suas sátiras. Morreu em Recife em 1696. Sua obra sobreviveu em manuscritos copiados e recopiados — não foi publicada em vida, o que permitiu uma circulação relativamente livre mas também gerou dúvidas de autoria para alguns textos.
        </p>

        <p>
          A poesia satírica de Gregório de Matos é um documento histórico e literário de primeira ordem. Seus textos atacam com nomes e sobrenomes (o que lhe valeu muitos inimigos) a podridão moral e política da Bahia colonial: governadores que fazem vista grossa ao contrabando, bispos que não cumprem suas obrigações pastorais, comerciantes que lucram com a miséria alheia, fidalgos que ostenam títulos sem honra.
        </p>

        <div className="lesson-highlight">
          <strong>Trecho de sátira social — Gregório de Matos:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "A cada canto um grande conselheiro,<br/>
            Que nos quer governar cabana e vinha;<br/>
            Não sabem governar sua cozinha<br/>
            E podem governar o mundo inteiro."
          </p>
          <p>
            A ironia feroz: os que querem mandar no mundo não sabem cuidar nem da própria casa. A sátira usa a hipérbole ("governar o mundo inteiro") para amplificar a incompetência dos alvos. O tom é conceptista: o argumento é mais importante que a imagem.
          </p>
        </div>

        <p>
          A sátira de Gregório também tinha um componente racial e social complexo: ele criticava a mestiçagem e os novos-ricos da colônia, mas ao mesmo tempo sofria o preconceito da sociedade colonial contra sua própria origem (ele era misto). O ENEM às vezes apresenta esses textos para discutir as contradições do discurso colonial e as tensões raciais do Brasil seiscentista.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Padre Antônio Vieira</span>
        <h2>6. Pe. Antônio Vieira: O Imperador da Língua Portuguesa</h2>

        <p>
          <strong>Padre Antônio Vieira</strong> (1608–1697) é o maior prosador do Barroco luso-brasileiro e um dos maiores oradores da história da humanidade. Nasceu em Lisboa mas viveu grande parte de sua vida no Brasil, onde exerceu intensa atividade missionária e política. Fernando Pessoa o chamou de <em>"imperador da língua portuguesa"</em> — e a alcunha é justa: sua prosa tem uma densidade argumentativa, uma riqueza metafórica e uma habilidade retórica sem paralelo na literatura de língua portuguesa.
        </p>
        <p>
          Vieira foi um figura complexíssima: jesuíta fervoroso que defendeu os indígenas e os negros escravizados, mas também serviu à Coroa portuguesa em missões diplomáticas; denunciou os abusos da Inquisição, mas foi ele próprio preso por ela (1663–1667); acreditava que Portugal tinha um destino providencial — ser o instrumento de Deus para a criação de um império universal cristão (o Quinto Império). Essa visão messianica e profética permeia toda a sua obra.
        </p>

        <p>
          Vieira nasceu em Lisboa em 1608 e ainda criança veio para o Brasil, onde recebeu sua educação no Colégio dos Jesuítas da Bahia. Entrou para a Companhia de Jesus em 1623 e logo se destacou como pregador. Sua vida dividiu-se entre o Brasil e Portugal, onde atuou como conselheiro e embaixador do rei D. João IV durante a Restauração portuguesa (1640). Foi perseguido pela Inquisição por suas ideias sobre os cristãos-novos (judeus convertidos) e preso entre 1663 e 1667. Após a libertação, viveu em Roma por vários anos, antes de retornar definitivamente ao Brasil, onde morreu em Salvador em 1697, com 89 anos. Sua vida longa e aventurosa é, ela mesma, um drama barroco: o conflito entre servir a Deus e servir ao rei, entre a fé e a razão, entre a utopia do Quinto Império e a realidade da colonização.
        </p>
        <p>
          A importância de Vieira para o ENEM não está apenas nos sermões específicos, mas na sua representação do <strong>conceptismo barroco</strong>. Quando o exame apresenta um trecho de prosa do século XVII com raciocínio lógico elaborado, paradoxos teológicos, metáforas desenvolvidas em longa cadeia argumentativa e uso de versículos bíblicos como ponto de partida para reflexões filosóficas — é Vieira que está sendo evocado, mesmo que o nome não apareça. O candidato que conhece o estilo vierino reconhece imediatamente qualquer texto que o imite.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎤</span>
            <h3>Sermão da Sexagésima (1655)</h3>
            <p>Discussão sobre o que faz um sermão eficaz. Vieira defende que a palavra do pregador deve ser como semente — não como flor. Crítica velada aos pregadores rebuscados que impressionam mas não convertem.</p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Sermão de Santo Antônio aos Peixes (1654)</h3>
            <p>Pregado em São Luís do Maranhão, em protesto contra a escravização dos indígenas. Os peixes servem de alegorias para criticar os colonos e as autoridades que toleravam o trabalho escravo.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Sermão pelo Bom Sucesso das Armas de Portugal (1640)</h3>
            <p>Pregado durante a dominação holandesa de Portugal. Vieira "negocia" com Deus: se não restaurar Portugal, ele perderá sua reputação. Argumento audacioso e conceptista.</p>
          </div>
          <div className="lesson-card">
            <span>👑</span>
            <h3>História do Futuro e Clavis Prophetarum</h3>
            <p>Obras proféticas em que Vieira desenvolve o conceito do <strong>Quinto Império</strong>: Portugal seria o instrumento de Deus para unir toda a humanidade num império cristão universal.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Sermões de Vieira</span>
        <h2>7. A Arte do Sermão: Estrutura e Análise</h2>

        <p>
          O sermão barroco é um gênero literário e retórico de altíssima complexidade. Vieira seguia a estrutura clássica da homilética cristã — <em>propositio</em> (enunciação do tema), <em>divisio</em> (divisão do argumento), <em>confirmatio</em> (desenvolvimento com exemplos), <em>refutatio</em> (refutação de objeções) e <em>conclusio</em> (síntese) —, mas a essa estrutura rigorosa aplicava um gênio argumentativo que não tinha precedentes na língua portuguesa.
        </p>
        <p>
          O <strong>Sermão de Santo Antônio aos Peixes</strong> é o texto de Vieira mais cobrado no ENEM. Em 1654, enquanto o Maranhão sofria com os abusos dos colonos que escravizavam os indígenas, Vieira pregou na Igreja de Nossa Senhora da Graça um sermão dirigido formalmente aos peixes — porque, explicou, os homens não queriam ouvir a palavra de Deus. A alegoria é brilhante e politicamente segura: ao elogiar as virtudes dos peixes, Vieira na verdade critica os vícios dos homens — especialmente dos colonos escravagistas.
        </p>

        <div className="lesson-highlight">
          <strong>Trecho do Sermão de Santo Antônio aos Peixes:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Vós, diz ele, sois do mundo: eu não sou do mundo. E se por uma parte tínheis mais obrigação de o ouvir, por outra tinham os peixes menos resistência a ouvi-lo. Os homens, quando lhes pregam, fecham as orelhas; os peixes abriam a boca."
          </p>
          <p>
            A ironia é dupla e precisamente calculada: os homens fecham as orelhas (não ouvem a pregação), enquanto os peixes abrem a boca (mostram mais abertura). O argumento inverte a hierarquia: os animais são mais receptivos à palavra divina do que os homens cristãos. É conceptismo puro.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            width="700"
            height="240"
            aria-label="Esquema da estrutura argumentativa dos sermões de Vieira"
          >
            <rect x="0" y="0" width="700" height="240" rx="12" fill="#fffbeb" />
            <text x="350" y="30" textAnchor="middle" fontSize="14" fill="#b45309" fontWeight="bold">Estrutura do Sermão Barroco (Vieira)</text>

            <rect x="270" y="45" width="160" height="40" rx="8" fill="#b45309" />
            <text x="350" y="62" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">TEMA (Propositio)</text>
            <text x="350" y="77" textAnchor="middle" fontSize="10" fill="#fef3c7">Versículo bíblico + tese</text>

            <line x1="350" y1="85" x2="350" y2="105" stroke="#b45309" strokeWidth="2" />

            <rect x="120" y="105" width="160" height="40" rx="8" fill="#d97706" />
            <text x="200" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Divisio</text>
            <text x="200" y="137" textAnchor="middle" fontSize="10" fill="#fef3c7">Divisão do argumento</text>

            <rect x="420" y="105" width="160" height="40" rx="8" fill="#d97706" />
            <text x="500" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Confirmatio</text>
            <text x="500" y="137" textAnchor="middle" fontSize="10" fill="#fef3c7">Exemplos e analogias</text>

            <line x1="280" y1="125" x2="200" y2="125" stroke="#d97706" strokeWidth="1.5" />
            <line x1="350" y1="85" x2="200" y2="105" stroke="#d97706" strokeWidth="1.5" />
            <line x1="350" y1="85" x2="500" y2="105" stroke="#d97706" strokeWidth="1.5" />
            <line x1="420" y1="125" x2="500" y2="125" stroke="#d97706" strokeWidth="1.5" />

            <line x1="200" y1="145" x2="200" y2="165" stroke="#d97706" strokeWidth="1.5" />
            <line x1="500" y1="145" x2="500" y2="165" stroke="#d97706" strokeWidth="1.5" />
            <line x1="200" y1="165" x2="500" y2="165" stroke="#d97706" strokeWidth="1.5" />
            <line x1="350" y1="165" x2="350" y2="185" stroke="#b45309" strokeWidth="2" />

            <rect x="240" y="185" width="220" height="40" rx="8" fill="#92400e" />
            <text x="350" y="202" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Conclusio</text>
            <text x="350" y="217" textAnchor="middle" fontSize="10" fill="#fef3c7">Síntese + apelo emocional</text>

            <text x="60" y="165" textAnchor="middle" fontSize="10" fill="#b45309" fontStyle="italic">Refutatio</text>
            <text x="60" y="178" textAnchor="middle" fontSize="10" fill="#b45309" fontStyle="italic">(objeções)</text>
          </svg>
          <figcaption>Estrutura argumentativa típica dos sermões de Pe. Antônio Vieira, modelo do conceptismo barroco.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Defesa dos Indígenas e Africanos</span>
        <h2>8. Vieira e as Causas Sociais: Indígenas e Escravizados</h2>

        <p>
          O estilo de Vieira nos sermões é inconfundível: ele parte sempre de um <strong>versículo bíblico</strong> que serve de epígrafe, depois o desenvolve numa <em>propositio</em> (tese), divide o argumento em partes que explora sistematicamente, usa exemplos retirados da natureza, da história e da mitologia para ilustrar cada ponto, e conclui com um apelo emocional ao auditório. Esse esquema escolástico é preenchido com um gênio argumentativo que transforma a lógica medieval em poesia em prosa. Um exemplo famoso: no <em>Sermão da Sexagésima</em>, Vieira compara o pregador a um agricultor. Que tipo de semente ele planta? Semente de flor (bonita mas estéril) ou semente de trigo (feia mas nutritiva)? Os pregadores que impressionam pela eloquência mas não convertem ninguém plantam flores. O bom pregador planta trigo — palavras simples que germinem na alma. A metáfora é conceptista: um raciocínio analógico de grande engenhosidade que esconde uma autocrítica do próprio ofício de pregar.
        </p>

        <p>
          Uma das dimensões mais complexas e debatidas da obra de Vieira é sua relação com as questões sociais do Brasil colonial. O padre foi um defensor feroz dos indígenas: seu <em>Sermão de Santo Antônio aos Peixes</em> foi pregado em protesto direto contra a escravização dos índios no Maranhão, e Vieira chegou a ser expulso do Maranhão pelos colonos que se sentiam ameaçados por sua atuação.
        </p>
        <p>
          Mas sua posição em relação aos escravizados africanos é mais ambígua. O <strong>Sermão XIV do Rosário</strong> (pregado para a irmandade de escravizados negros) apresenta uma teologia da escravidão que modernamente nos causa desconforto: Vieira consola os escravizados dizendo que seu sofrimento é semelhante ao de Cristo, que suas correntes são como a coroa de espinhos, que sua escravidão terrena leva à liberdade eterna. Trata-se de uma legitimação teológica da escravidão — ainda que involuntária. Esse sermão é frequentemente cobrado no ENEM para discutir a relação entre religião, poder e escravidão no Brasil colonial.
        </p>

        <div className="lesson-highlight">
          <h3>Trecho do Sermão XIV (Rosário) — Vieira:</h3>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Oh! Se a vista da fé alcançasse o que passa no céu quando um escravo morre! Que de anjos desciam para acompanhar aquela alma! Que de espíritos bem-aventurados se chegavam para a receber!"</p>
          <p>
            Vieira consola os escravizados com a promessa da glória celestial — mas não questiona a estrutura social que os mantém escravizados. O ENEM usa esse tipo de trecho para discutir a ambiguidade do discurso colonial: ao mesmo tempo consolador e legitimador do sistema.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Barroco no Brasil</span>
        <h2>9. O Barroco Brasileiro: Contexto e Especificidades</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 210"
            width="700"
            height="210"
            aria-label="Diagrama comparativo entre cultismo e conceptismo no Barroco"
          >
            <rect x="0" y="0" width="700" height="210" rx="12" fill="#fffbeb" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fill="#b45309" fontWeight="bold">Cultismo vs. Conceptismo no Barroco</text>

            <rect x="30" y="45" width="295" height="140" rx="10" fill="#b45309" />
            <text x="177" y="70" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">CULTISMO (Gongorismo)</text>
            <text x="177" y="90" textAnchor="middle" fontSize="10" fill="#fef3c7">Ênfase na FORMA</text>
            <text x="177" y="108" textAnchor="middle" fontSize="10" fill="#fef3c7">Metáforas inusitadas e raras</text>
            <text x="177" y="124" textAnchor="middle" fontSize="10" fill="#fef3c7">Hipérbatos, latinismos, sinestesia</text>
            <text x="177" y="140" textAnchor="middle" fontSize="10" fill="#fef3c7">Impressiona pela beleza da imagem</text>
            <text x="177" y="157" textAnchor="middle" fontSize="10" fill="#fef3c7" fontStyle="italic">Gregório de Matos (lírica)</text>
            <text x="177" y="173" textAnchor="middle" fontSize="9" fill="#fde68a">Ex.: antíteses visuais Sol/noite</text>

            <rect x="375" y="45" width="295" height="140" rx="10" fill="#92400e" />
            <text x="522" y="70" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">CONCEPTISMO (Quevedismo)</text>
            <text x="522" y="90" textAnchor="middle" fontSize="10" fill="#fef3c7">Ênfase no ARGUMENTO</text>
            <text x="522" y="108" textAnchor="middle" fontSize="10" fill="#fef3c7">Raciocínio paradoxal e engenhoso</text>
            <text x="522" y="124" textAnchor="middle" fontSize="10" fill="#fef3c7">Silogismos, quiasmos, trocadilhos</text>
            <text x="522" y="140" textAnchor="middle" fontSize="10" fill="#fef3c7">Surpreende pela agudeza da ideia</text>
            <text x="522" y="157" textAnchor="middle" fontSize="10" fill="#fef3c7" fontStyle="italic">Pe. Antônio Vieira (sermões)</text>
            <text x="522" y="173" textAnchor="middle" fontSize="9" fill="#fde68a">Ex.: paradoxo Deus-homem / homem-Deus</text>

            <text x="350" y="197" textAnchor="middle" fontSize="10" fill="#78350f" fontWeight="bold">Muitos autores combinam as duas tendências na mesma obra</text>
          </svg>
          <figcaption>Quadro comparativo entre as duas tendências do Barroco literário: cultismo e conceptismo.</figcaption>
        </figure>

        <p>
          A recepção crítica de Gregório de Matos passou por várias fases. Por muito tempo, foi valorizado principalmente pela sátira — a imagem do <em>Boca do Inferno</em> que atacava os poderosos da Bahia era romanticamente sedutora. Mas a crítica moderna reconhece que o melhor Gregório está na <strong>poesia sacra</strong>: os sonetos de meditação religiosa têm uma profundidade filosófica e uma maestria técnica que os colocam ao nível dos melhores sonetistas europeus do período. O paradoxo de um poeta que escreve com igual talento sobre Cristo e sobre sexo, sobre o arrependimento e sobre a sátira política, não é uma contradição: é a <em>coincidentia oppositorum</em> barroca — a fusão de contrários que define o período.
        </p>
        <p>
          Um aspecto menos discutido mas fundamental do Barroco brasileiro é a questão da <strong>circulação dos textos</strong>. Gregório de Matos não publicou seus poemas em vida: eles circulavam em manuscritos copiados de mão em mão, nas casas dos letrados baianos, nas tavernas e nos conventos. Essa circulação manuscrita era ao mesmo tempo um risco (os papéis podiam cair nas mãos da Inquisição ou do governador satirizado) e uma proteção (sem publicação formal, era mais difícil responsabilizar o autor). Os sermões de Vieira, ao contrário, eram publicados — mas também circulavam em cópias manuscritas entre os fiéis. A cultura literária do Barroco colonial era uma cultura de manuscritos, não de impressos.
        </p>

        <p>
          O Barroco chegou ao Brasil como estética dominante da metrópole portuguesa e aqui se adaptou ao contexto colonial. A produção barroca brasileira tem duas características que a distinguem do Barroco europeu: a <strong>presença da cultura colonial</strong> (a realidade da escravidão, da miscigenação, do poder colonial) como tema ou subtexto em muitos textos; e a <strong>ausência de uma tradição literária anterior</strong> que o Barroco pudesse contradizer — no Brasil, o Barroco não reage ao Classicismo como na Europa, pois não houve Classicismo brasileiro.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obra / Produção</th>
                <th>Característica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gregório de Matos (1636–1696)</td>
                <td>Poesia sacra, satírica, lírica, erótica</td>
                <td>Cultismo + conceptismo; 1º grande poeta do Brasil</td>
              </tr>
              <tr>
                <td>Pe. Antônio Vieira (1608–1697)</td>
                <td>Sermões (mais de 200), cartas, profecias</td>
                <td>Conceptismo; maior prosador da língua portuguesa</td>
              </tr>
              <tr>
                <td>Bento Teixeira (1561?–1600?)</td>
                <td><em>Prosopopeia</em> (1601)</td>
                <td>1º poema épico publicado no Brasil; imitação d'Os Lusíadas</td>
              </tr>
              <tr>
                <td>Manuel Botelho de Oliveira (1636–1711)</td>
                <td><em>Música do Parnaso</em> (1705)</td>
                <td>1º livro de poesia publicado por autor nascido no Brasil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>A Prosopopeia de Bento Teixeira (1601):</strong>
          <p>
            Considerada o <strong>marco inicial do Barroco brasileiro</strong>, a <em>Prosopopeia</em> é um poema épico em oitava rima — imitação clara d'<em>Os Lusíadas</em> — que exalta Jorge de Albuquerque Coelho, donatário de Pernambuco. Embora artisticamente inferior a Gregório, é historicamente fundamental: é o primeiro poema épico publicado em solo americano por um autor que viveu no Brasil. O título ("prosopopeia") refere-se à figura de linguagem que consiste em atribuir fala ou ação a seres inanimados — mas aqui é usado no sentido mais amplo de discurso laudatório.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e ENEM</span>
        <h2>10. Barroco no ENEM: Temas e Estratégias</h2>

        <div className="lesson-highlight">
          <h3>Como o ENEM cobra o Barroco</h3>
          <ul>
            <li><strong>Antíteses e paradoxos:</strong> apresenta um texto barroco e pede que o candidato identifique o recurso estilístico central.</li>
            <li><strong>Cultismo vs. conceptismo:</strong> pede distinção entre as duas tendências a partir de trechos concretos.</li>
            <li><strong>Gregório de Matos:</strong> fragmentos de poesia sacra ou satírica para análise de tema e estilo.</li>
            <li><strong>Sermões de Vieira:</strong> trechos do Sermão de Santo Antônio ou do Sermão XIV para análise de argumento, alegoria e contexto colonial.</li>
            <li><strong>Efemeridade/Vanitas:</strong> textos que desenvolvem o tema da transitoriedade da vida para identificar a concepção de mundo barroca.</li>
            <li><strong>Contexto histórico:</strong> relação entre Barroco, Contra-Reforma, colonialismo e escravidão.</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Dica de ouro para o ENEM:</strong>
          <p>
            Quando encontrar antíteses ("vida/morte", "luz/sombra", "amor/dor") combinadas com linguagem rebuscada e tema religioso ou de efemeridade — é Barroco. Se o argumento for baseado em raciocínio lógico paradoxal (como os sermões de Vieira) — é conceptismo. Se for baseado em imagens raras e vocabulário elevado — é cultismo. Gregório de Matos usa os dois; Vieira é principalmente conceptista.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Barroco nas Artes</span>
        <h2>11. O Barroco além da Literatura: Arquitetura, Música e Pintura</h2>

        <p>
          O Barroco não foi apenas um movimento literário: foi uma estética total que abrangeu arquitetura, escultura, pintura e música. Compreender suas manifestações em outras artes ajuda a entender o clima cultural do século XVII e ilumina as escolhas estilísticas dos escritores barrocos. O ENEM frequentemente apresenta imagens ou descrições de obras de arte barrocas e pede que o candidato identifique características compatíveis com o período.
        </p>
        <p>
          Na <strong>arquitetura</strong>, o Barroco produziu as grandes igrejas jesuíticas que ainda pontuam as cidades históricas brasileiras: o Aleijadinho (Antônio Francisco Lisboa) é o maior expoente do Barroco brasileiro, com suas igrejas em Ouro Preto e os profetas do Santuário do Bom Jesus de Matosinhos em Congonhas. As fachadas ricas em detalhes, as torres sinuosas, os interiores dourados e dramáticos são a arquitetura do excesso que corresponde ao cultismo literário.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Arquitetura Barroca</h3>
            <p>Fachadas ornamentadas, curvas dinâmicas, contrastes entre luz e sombra. No Brasil: Igreja de São Francisco de Assis (Ouro Preto), obras do Aleijadinho.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Pintura Barroca</h3>
            <p>Caravaggio e Rembrandt: claro-escuro (chiaroscuro) extremo. Figuras em êxtase, cenas religiosas dramáticas, personagens comuns elevados ao sagrado.</p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Música Barroca</h3>
            <p>Bach, Vivaldi, Haendel: contraponto complexo, ornamentos, drama sonoro. A música barroca corresponde ao cultismo literário: riqueza formal ao máximo.</p>
          </div>
          <div className="lesson-card">
            <span>🗿</span>
            <h3>Escultura Barroca</h3>
            <p>Bernini: figuras em movimento, expressões emocionais extremas, capacidade de representar tecidos e pele em mármore. O Aleijadinho no Brasil.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>O Aleijadinho e o Barroco Brasileiro nas artes visuais</h3>
          <p>
            <strong>Antônio Francisco Lisboa</strong>, o Aleijadinho (1738–1814), é o maior artista barroco brasileiro. Escultor e arquiteto mineiro, criou as famosas estátuas dos doze profetas no Santuário de Bom Jesus de Matosinhos (Congonhas, MG) e projetou e decorou várias igrejas em Ouro Preto. Embora sua produção seja cronologicamente posterior ao período barroco europeu, inserindo-se tecnicamente no Rococó tardio, o Barroco é sua raiz estilística. O ENEM frequentemente apresenta imagens de suas obras para discutir o contexto cultural do século XVIII mineiro — o mesmo ambiente que produziu os poetas árcades da Inconfidência.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica barroca</th>
                <th>Na literatura</th>
                <th>Nas artes visuais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Claro-escuro</td>
                <td>Antíteses luz/sombra, vida/morte nos poemas</td>
                <td>Chiaroscuro na pintura de Caravaggio e Rembrandt</td>
              </tr>
              <tr>
                <td>Excesso e ornamentação</td>
                <td>Cultismo: linguagem excessivamente ornada</td>
                <td>Fachadas de igrejas com detalhes multiplicados</td>
              </tr>
              <tr>
                <td>Dinamismo e movimento</td>
                <td>Sintaxe complexa, hipérbatos, ritmo agitado</td>
                <td>Figuras em torção, tecidos ondulantes na escultura</td>
              </tr>
              <tr>
                <td>Dramatismo emocional</td>
                <td>Angústia do pecador; êxtase místico nos sermões</td>
                <td>Expressões de êxtase ou sofrimento nas esculturas</td>
              </tr>
              <tr>
                <td>Dualidade sagrado/profano</td>
                <td>Gregório: poesia sacra e poesia erótica no mesmo autor</td>
                <td>Igrejas suntuosas ao lado de cenas mundanas na pintura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 12 — A HERANÇA DO BARROCO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>A Herança do Barroco</h2>
        <p>
          O Barroco não é apenas um período literário: é uma <strong>forma de sensibilidade</strong> que reaparece em diferentes épocas quando a cultura sente o chão tremer sob os pés. A tensão entre opostos que define o Barroco — fé e razão, corpo e alma, efemeridade e eternidade — ressurge no Simbolismo decadente do século XIX, no Expressionismo do início do século XX e, na literatura brasileira, nos labirintos metafísicos de Guimarães Rosa e na densidade imagética de João Cabral de Melo Neto. A crítica social de Gregório de Matos, dirigida à hipocrisia da sociedade colonial soteropolitana, encontra descendência direta nas sátiras de Gregório de Mattos ressignificadas pela tropicália e pelo teatro de arena dos anos 1960-1970.
        </p>
        <p>
          No plano da cultura material, o Barroco colonial deixou no Brasil um patrimônio arquitetônico e escultórico de valor universal. As igrejas de <strong>Ouro Preto, Mariana, Congonhas do Campo</strong> e <strong>São João del-Rei</strong> são hoje patrimônio histórico nacional e UNESCO. O <strong>Aleijadinho</strong> (Antônio Francisco Lisboa, c. 1738–1814), filho de um arquiteto português com uma escrava africana, criou as mais altas expressões do Barroco americano em suas esculturas para a Igreja de Bom Jesus de Matosinhos em Congonhas — os doze profetas do Antigo Testamento esculpidos em pedra-sabão e as cenas da Paixão de Cristo. O Barroco no Brasil é, portanto, um fenômeno que transcende a literatura e constitui a identidade cultural de toda uma região.
        </p>
        <p>
          Na música, o Barroco produziu Manuel Dias de Oliveira (c. 1734–1813) e Lobo de Mesquita (c. 1746–1805), compositores mineiros que criaram obras sacras de grande beleza que mesclavam o estilo europeu com sensibilidade colonial. Na pintura, Ataíde (Manuel da Costa Ataíde, 1762–1830) decorou o teto da Igreja de São Francisco de Assis em Ouro Preto com um painel que mostra a Virgem Maria e os anjos com feições mestiças — uma transgressão estética que humaniza o sagrado ao lhe dar a face do povo brasileiro. Esse gesto de Ataíde antecipa a temática da identidade nacional que vai explodir no Romantismo e dominar a arte brasileira até o Modernismo. O Barroco, assim, não é apenas um estilo de época: é o primeiro momento em que a colônia começa a criar uma expressão cultural própria, diferente e mais rica do que uma simples cópia da metrópole.
        </p>
        <p>
          A <strong>leitura contemporânea do Barroco</strong> — especialmente do Barroco colonial — reconhece nele um espaço de contradição produtiva: ao mesmo tempo que servia ao projeto colonial (igreja, sermão, catequese), o Barroco também criava espaços de subversão. A sátira de Gregório de Matos — que atacava bispos, governadores e comerciantes — era subversiva dentro de um regime que não tolerava crítica. Os sermões de Vieira em defesa dos indígenas e dos africanos eram politicamente ousados numa época em que a Coroa dependia da mão de obra escravizada. O Barroco colonial não é apenas a arte do colonizador: é também, surpreendentemente, uma das primeiras vozes críticas da colonização dentro da própria colônia.
        </p>
        <p>
          Por isso o ENEM frequentemente contextualiza textos barrocos com questões sobre <strong>poder e resistência</strong>: quando apresenta um trecho do Sermão de Vieira, o candidato precisa perceber que o discurso religioso é simultaneamente um ato político. Quando apresenta a sátira de Gregório de Matos, precisa entender que o riso é uma arma de crítica social. O Barroco nunca é apenas estético — é sempre também histórico e político, reflexo de uma colônia em tensão, de um século que questionava tudo sem poder questionar tudo abertamente. Reconhecer essa dupla natureza — a beleza ornamentada que encobre a crítica velada — é a chave para decifrar o Barroco no ENEM. Num contexto em que a Inquisição ainda queimava livros e pessoas, escrever com metáforas barrocas era frequentemente a única forma de dizer o que não podia ser dito diretamente. A linguagem cifrada do Barroco não era mero ornamento: era, muitas vezes, uma forma de sobrevivência.
        </p>
      </section>

      {/* ── SEÇÃO 13 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <div className="lesson-highlight">
          <h3>Como o ENEM cobra o Barroco</h3>
          <p>
            O ENEM apresenta o Barroco de diversas formas: (1) fragmentos de poemas de Gregório de Matos para identificar antíteses, paradoxos e cultismo; (2) trechos de sermões de Vieira para identificar o raciocínio conceptista e o contexto colonial; (3) questões contextualizadas que relacionam o Barroco à Contra-Reforma e ao colonialismo; (4) comparações entre o Barroco e o Classicismo (séc. XVI) ou o Arcadismo (séc. XVIII). Em todos os casos, o candidato precisa reconhecer a <strong>tensão entre opostos</strong> como marca fundamental do período e distinguir cultismo (imagens rebuscadas) de conceptismo (argumento engenhoso). Uma dica prática: se o texto tem muitas antíteses visuais e metáforas complexas — é cultismo. Se tem paradoxos lógicos e raciocínio em espiral — é conceptismo. Se tem os dois — é provavelmente Gregório de Matos.
          </p>
        </div>

        <Exercise
          level="Básico"
          title="1. Características do Barroco"
          statement={
            <p>
              O Barroco é o movimento literário do século XVII que se caracteriza, principalmente, por:
            </p>
          }
          options={[
            { letter: "a", text: "Equilíbrio formal, clareza de linguagem e harmonia entre razão e emoção, em reação aos excessos medievais." },
            { letter: "b", text: "Bucolismo, idealização da vida campestre e retomada dos lemas latinos como carpe diem e fugere urbem." },
            { letter: "c", text: "Tensão entre opostos (fé × razão, vida × morte, pecado × salvação), linguagem rebuscada e uso de antíteses e paradoxos.", correct: true },
            { letter: "d", text: "Valorização da experiência individual, da liberdade formal e da ruptura com todas as tradições anteriores." },
          ]}
          resolution={
            <p>
              O Barroco é definido pela <strong>tensão entre contrários</strong>: fé e razão, corpo e alma, vida e morte, amor e dor. Essa tensão se manifesta na linguagem rebuscada (cultismo) e no argumento engenhoso (conceptismo), com uso frequente de antíteses, paradoxos e metáforas complexas. O equilíbrio formal é do Classicismo (A). O bucolismo e o carpe diem são do Arcadismo (B). A liberdade formal e a ruptura radical são do Modernismo (D). A alternativa C é a única que capta a essência barroca.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Cultismo versus Conceptismo"
          statement={
            <p>
              Compare os dois fragmentos barrocos abaixo:<br /><br />
              I. <em>"Nasce o Sol, e não dura mais que um dia, / Depois da Luz se segue a noite escura"</em> (Gregório de Matos)<br /><br />
              II. <em>"Deus faz-se homem para amar os homens como Deus, e os homens fazem-se Deus para poder amar a Deus como homens."</em> (Pe. Antônio Vieira)<br /><br />
              Quanto à tendência estética predominante em cada fragmento, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Ambos representam o cultismo, pois os dois usam linguagem elevada e figuras de linguagem elaboradas." },
            { letter: "b", text: "O fragmento I predomina o cultismo (imagens sensoriais, antíteses visuais), enquanto o fragmento II predomina o conceptismo (paradoxo lógico e argumento em espiral).", correct: true },
            { letter: "c", text: "O fragmento I é conceptista e o fragmento II é cultista, pois Vieira era conhecido pelo uso de metáforas visuais elaboradas." },
            { letter: "d", text: "Nenhum dos dois é barroco: o fragmento I é classicista e o fragmento II é iluminista." },
          ]}
          resolution={
            <p>
              No fragmento I (Gregório), a técnica central são as <strong>antíteses visuais e sensoriais</strong>: sol/noite, luz/escura — imagens que impressionam pela beleza e pelo contraste. Isso é <strong>cultismo</strong>: ênfase na forma e nas imagens. No fragmento II (Vieira), a técnica central é um <strong>paradoxo lógico em quiasmo</strong>: Deus vira homem para amar como Deus; homens viram Deus para amar como homens — um argumento em espiral que surpreende pela inteligência. Isso é <strong>conceptismo</strong>: ênfase no raciocínio e no engenho argumentativo. A alternativa B é a única que faz essa distinção corretamente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O Sermão de Santo Antônio aos Peixes"
          statement={
            <p>
              No <em>Sermão de Santo Antônio aos Peixes</em> (1654), Pe. Antônio Vieira prega formalmente para os peixes porque, diz ele, os homens não queriam ouvir. O recurso central do sermão — falar para os peixes para, na verdade, criticar os homens — é um exemplo de:
            </p>
          }
          options={[
            { letter: "a", text: "Eufemismo: Vieira suaviza sua crítica ao usar os peixes como substituto dos homens, evitando confronto direto." },
            { letter: "b", text: "Alegoria: os peixes representam tipos humanos, e suas virtudes e vícios servem de espelho para criticar os comportamentos dos homens — especialmente os colonos que escravizavam os indígenas.", correct: true },
            { letter: "c", text: "Ironia direta: Vieira não usa nenhum recurso intermediário; apenas critica diretamente os colonos usando linguagem irônica." },
            { letter: "d", text: "Hipérbole: a ideia de pregar para peixes é um exagero cômico usado para aliviar a tensão da crítica política." },
          ]}
          resolution={
            <p>
              O recurso central é a <strong>alegoria</strong>: os peixes não são os destinatários reais do sermão, mas representantes alegóricos de categorias humanas. Vieira elogia peixes que "ouvem" a palavra de Deus, que são silenciosos, que não falam mal dos outros — e implicitamente critica os homens que fazem o oposto. Os peixes como alegoria são especialmente eficazes politicamente: ao falar "para os peixes", Vieira critica os colonos escravagistas sem citá-los diretamente, o que lhe dá uma proteção retórica. O ENEM frequentemente cobra a distinção entre alegoria (representação sistemática por figuras concretas) e eufemismo (substituição por termo mais suave), ironia direta e hipérbole.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Gregório de Matos e o Barroco Sacro"
          statement={
            <p>
              Leia o soneto de Gregório de Matos:<br /><br />
              <em>"A vós correndo vou, braços sagrados,<br />
              Nessa Cruz sacrossanta descobertos,<br />
              Que para receber-me estais abertos,<br />
              E por não castigar-me estais cravados.<br /><br />
              Benigno me olhais, mas tão turbados,<br />
              Por tantos meus pecados sem cobertos;<br />
              Mais há que não estais para mimertos,<br />
              Que estais para sofrer-me aparelhados."</em><br /><br />
              O paradoxo central do poema é que os braços de Cristo, pregados na cruz:
            </p>
          }
          options={[
            { letter: "a", text: "Estão fechados, indicando que Cristo rejeita o pecador arrependido que corre a ele." },
            { letter: "b", text: "Estão abertos para receber o pecador, mas imóveis pela cravação — não podem abraçá-lo nem castigá-lo, simbolizando ao mesmo tempo o perdão e a impotência divina.", correct: true },
            { letter: "c", text: "Representam a punição iminente: o pecador corre para os braços de Cristo sabendo que será castigado." },
            { letter: "d", text: "São uma metáfora do amor romântico: o eu lírico corre para os braços do amado que o aguarda com os braços abertos." },
          ]}
          resolution={
            <p>
              O paradoxo é preciso e barroco: os braços de Cristo estão <strong>abertos</strong> (postura de acolhimento, de perdão) — mas estão <strong>cravados</strong> na cruz. A cravação tem dois efeitos simultâneos: por um lado, impede que os braços se fechem para punir o pecador (portanto, o punindo com misericórdia); por outro, impede que os braços se fechem para abraçá-lo de fato. O pecador recebe o perdão mas não o abraço. Esse duplo movimento — acolhimento sem plenitude, perdão sem completude — é a tensão barroca por excelência: tudo está em aberto, nada se resolve completamente. O soneto usa a imagem concreta da Cruz para construir um argumento teológico sofisticado sobre o perdão e a misericórdia divina.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Barroco, Colonialismo e Discurso Religioso"
          statement={
            <p>
              No <em>Sermão XIV do Rosário</em>, Vieira prega para escravizados africanos e afirma que sua condição é semelhante à de Cristo na paixão: as correntes são como a coroa de espinhos, o tronco é como a cruz, o sofrimento é redentor. Um crítico literário contemporâneo afirma que esse sermão, ao mesmo tempo que revela a compaixão de Vieira pelos escravizados, também <em>"funciona como instrumento de resignação e manutenção da ordem escravocrata"</em>. Avalie essa interpretação:
            </p>
          }
          options={[
            { letter: "a", text: "A interpretação é incorreta: Vieira era um aberto abolicionista, e o sermão deve ser lido como uma denúncia direta e explícita da escravidão." },
            { letter: "b", text: "A interpretação é pertinente: ao consolar os escravizados com a promessa da recompensa celestial, o sermão desvia a atenção do sofrimento presente e da injustiça estrutural, contribuindo para a resignação — ainda que essa não fosse a intenção explícita de Vieira.", correct: true },
            { letter: "c", text: "A interpretação é anacrônica: aplicar conceitos do século XXI a um texto do século XVII é metodologicamente incorreto e deve ser evitado." },
            { letter: "d", text: "A interpretação é incorreta porque o sermão foi tão eficaz que levou à abolição da escravidão no Maranhão logo após sua pregação." },
          ]}
          resolution={
            <p>
              A interpretação do crítico é pertinente e metodologicamente válida. Vieira genuinamente se compreendia como alguém que consolava e defendia os escravizados — e em outros textos (especialmente em relação aos indígenas) chegou a se opor frontalmente à escravidão. Mas o efeito prático do <em>Sermão XIV</em> é paradoxal: ao oferecer uma estrutura de sentido que torna o sofrimento suportável (comparando-o ao de Cristo), o sermão retira do escravizado a urgência da revolta e da resistência terrenas. Isso não é uma crítica à intenção de Vieira, mas à <strong>função ideológica</strong> objetiva do texto — que pode ser diferente da intenção do autor. O ENEM frequentemente cobra essa distinção entre intenção e efeito em textos históricos. A alternativa A erra ao qualificar Vieira como abolicionista (ele defendia o fim da escravidão dos indígenas, não dos africanos). A alternativa C está errada: ler criticamente textos históricos é prática legítima e necessária. A alternativa D é factualmente incorreta.
            </p>
          }
        />
      </section>

      {/* ── NOTA FINAL ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>Síntese do Barroco</h2>
        <p>
          O Barroco é o movimento da contradição: entre fé e razão, entre corpo e alma, entre ornamento e argumento, entre obediência e resistência. Na literatura brasileira, ele encontrou condições ideais de florescimento na colônia colonial setecentista — uma sociedade mestiça, hierárquica, religiosa e já capaz de olhar para si mesma com alguma ironia. Gregório de Matos e Pe. Antônio Vieira são os dois polos desse movimento: o primeiro, demolidor e carnavalesco; o segundo, solene e conceptista. Juntos, cobrem todo o espectro do Barroco brasileiro.
        </p>
        <p>
          Para o ENEM, o domínio do Barroco exige reconhecer: as antíteses e paradoxos nos poemas de Gregório (especialmente os sacros e os líricos); o raciocínio conceptista dos sermões de Vieira (a estratégia argumentativa por analogia e quiasmo); o contexto histórico da Contra-Reforma e da colonização; e a distinção entre cultismo (imagens) e conceptismo (argumentos). Com essas ferramentas, qualquer texto barroco — mesmo desconhecido — pode ser analisado com segurança.
        </p>
      </section>
    </article>
  );
}
