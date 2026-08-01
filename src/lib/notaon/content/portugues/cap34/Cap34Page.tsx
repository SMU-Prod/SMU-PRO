"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 34</span>
          <h1>Simbolismo</h1>
          <h2 style={{fontWeight: "normal", fontSize: "1.1rem", marginTop: "0.25rem", color: "#7c3aed"}}>A Poesia da Sugestão</h2>
          <p>
            No final do século XIX, enquanto os parnasianos poliam mármores e os realistas
            disseavam a burguesia, uma outra corrente artística proclamou que a poesia
            não deve explicar — deve sugerir.
            O Simbolismo mergulhou nas profundezas do inconsciente,
            misturou sons e perfumes e cores numa sinestesia delirante,
            e entregou ao mistério o que a razão não consegue capturar.
            Nascido na França com Baudelaire, Verlaine e Mallarmé,
            o movimento chegou ao Brasil na voz de Cruz e Sousa —
            o Cisne Negro que transformou a dor da exclusão racial em poesia sublime —
            e de Alphonsus de Guimaraens, que poetou a morte e a fé nas igrejas
            barrocas de Minas Gerais.
            Coexistindo com o Parnasianismo mas opondo-se a ele em quase tudo,
            o Simbolismo foi o movimento literário mais radicalmente interior da poesia brasileira —
            e sua influência ressoa até hoje em cada poema que prefere sugerir a descrever,
            em cada verso que vale mais pelo que soa do que pelo que diz.
            Conhecer o Simbolismo é compreender que a linguagem pode fazer
            mais do que descrever: pode criar estados de alma, evocar o inefável
            e transformar a experiência sensorial em janela para o transcendente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Surgimento do Simbolismo — Contexto Europeu e Chegada ao Brasil</h2>

        <p>
          O <strong>Simbolismo</strong> surgiu na França na segunda metade do século XIX como uma reação dupla: contra o Parnasianismo (com sua frieza técnica e seu distanciamento emocional) e contra o Realismo/Naturalismo (com sua obsessão pela matéria, pela ciência e pelo determinismo). Se os parnasianos queriam a perfeição formal e os realistas queriam a precisão social, os simbolistas queriam algo que nem a forma nem a razão podiam dar: o acesso ao <em>inefável</em> — o que não pode ser dito diretamente, apenas sugerido, evocado, sentido.
        </p>
        <p>
          Os precursores do Simbolismo europeu são três poetas franceses fundamentais. <strong>Charles Baudelaire</strong> (1821–1867) publicou <em>As Flores do Mal</em> (1857) e inventou a teoria das <em>Correspondências</em> — a ideia de que todos os elementos da natureza se correspondem entre si (sons, cores, perfumes, texturas) e que o poeta, como intermediário privilegiado, pode traduzir essas correspondências em linguagem. <strong>Paul Verlaine</strong> (1844–1896) proclamou que <em>"a música antes de tudo"</em> (<em>De la Musique avant toute chose</em>) — o poema deve soar antes de significar. <strong>Stéphane Mallarmé</strong> (1842–1898) levou a sugestão ao extremo, escrevendo poemas que são quase incompreensíveis na superfície mas ricos de significados latentes — a poesia como jogo de ausências e silêncios.
        </p>
        <p>
          No Brasil, o Simbolismo chegou ao final do século XIX e teve seu auge na passagem para o século XX. O marco inaugural é a publicação simultânea, em 1893, de <em>Missal</em> (prosa poética) e <em>Broquéis</em> (poesia) por <strong>Cruz e Sousa</strong>. O movimento coexistiu com o Parnasianismo — que era muito mais popular e bem recebido pelos editores e pelo público culto — e perdeu relevância após o Modernismo de 1922.
        </p>
        <p>
          O contexto da chegada do Simbolismo ao Brasil é marcado por uma ironia histórica. Em 1888 a escravidão foi abolida; em 1889, a República foi proclamada. Esses dois eventos que deveriam representar uma transformação profunda da sociedade brasileira — liberdade e republicanismo — não resultaram na inclusão dos negros ex-escravizados na cidadania plena. Cruz e Sousa, que chegou ao Rio de Janeiro em 1890 acreditando que a República seria diferente, enfrentou o mesmo racismo sistemático do Império. Nesse contexto, sua poesia simbolista — que busca a transcendência acima da realidade material — adquire um significado político que vai além da estética: é a resposta de um excluído que recusa a desumanização do racismo construindo uma arte de altíssima sofisticação intelectual.
        </p>

        <div className="lesson-highlight">
          <h3>O Simbolismo como revolução sensorial</h3>
          <p>
            O Simbolismo propõe uma revolução na forma de entender a poesia: ela não deve <em>descrever</em> (como o Parnasianismo) nem <em>expressar emoções claramente</em> (como o Romantismo) — deve <em>sugerir</em>, criando no leitor um estado de alma, uma vibração interior, que transcende o significado das palavras tomadas uma a uma. Para isso, os simbolistas usam: musicalidade intensa, sinestesia, vocabulário raro e evocativo, imagens nebulosas e misteriosas, referências espirituais e esotéricas.
          </p>
        </div>

        <p>
          O Simbolismo coexistiu com o Parnasianismo no Brasil de forma assimétrica: o Parnasianismo era o movimento dominante, com Olavo Bilac como figura pública celebrada, enquanto o Simbolismo era minoritário e marginalizado. Essa assimetria de poder cultural reflete as assimetrias da sociedade brasileira do período — um Brasil que preferia a elegância europeia afrancesada de Bilac ao mergulho perturbador no inconsciente de Cruz e Sousa. Mas o ENEM, ao incluir ambos os movimentos em suas questões, reconhece que a riqueza da literatura brasileira não está apenas nos movimentos dominantes, mas também nos que foram marginalizados e que, exatamente por isso, foram mais verdadeiros.
        </p>
      </section>

      {/* ── SEÇÃO 1B — Baudelaire e as Correspondências ── */}
      <section className="lesson-section">
        <span className="section-kicker">As Correspondências</span>
        <h2>1b. Baudelaire e a Teoria das Correspondências — A Filosofia do Simbolismo</h2>

        <p>
          A pedra filosófica do Simbolismo é o soneto <em>Correspondances</em> (Correspondências) de Charles Baudelaire, publicado em <em>Les Fleurs du Mal</em> (As Flores do Mal, 1857). O poema afirma que a natureza é um "templo de pilares vivos" onde "floresta de símbolos" observa o ser humano. Todos os elementos da natureza — sons, cores, perfumes, texturas — correspondem-se entre si em um sistema de analogias universais. O poeta, como sacerdote ou mago, é o único capaz de perceber e traduzir essas correspondências em linguagem.
        </p>
        <p>
          Essa teoria tem implicações profundas para a poética simbolista. Se todas as sensações se correspondem, então um poema pode e deve misturar as percepções de diferentes sentidos — é a legitimação filosófica da sinestesia. Se a natureza inteira é um sistema de símbolos, então a poesia deve trabalhar com símbolos, não com descrições diretas — é a base da sugestão simbolista. E se o poeta é um intermediário privilegiado entre o mundo sensorial e o espiritual, então a poesia é uma forma de conhecimento superior à ciência — é a rejeição simbolista do cientificismo positivista.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Precursor Europeu</th>
                <th>Contribuição ao Simbolismo</th>
                <th>Obra-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Charles Baudelaire (França)</td>
                <td>Teoria das Correspondências; sinestesia como princípio; o poeta como sacerdote</td>
                <td><em>As Flores do Mal</em> (1857)</td>
              </tr>
              <tr>
                <td>Paul Verlaine (França)</td>
                <td><em>"Música antes de tudo"</em>; musicalidade como essência da poesia</td>
                <td><em>Sagesse</em> (1881); <em>Art Poétique</em></td>
              </tr>
              <tr>
                <td>Stéphane Mallarmé (França)</td>
                <td>Sugestão radical; poema como jogo de ausências e silêncios</td>
                <td><em>Um Lance de Dados</em> (1897)</td>
              </tr>
              <tr>
                <td>Arthur Rimbaud (França)</td>
                <td>Poeta como "vidente"; desordem dos sentidos como método criativo</td>
                <td><em>Iluminações</em> (1886)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. As Marcas da Poesia Simbolista</h2>

        <p>
          O Simbolismo define-se por um conjunto de procedimentos estéticos que visam todos ao mesmo objetivo: transcender o significado literal e criar uma experiência poética que vai além da razão. Conhecer esses procedimentos é fundamental para identificar o movimento em fragmentos de poesia apresentados pelo ENEM.
        </p>
        <p>
          Um aspecto frequentemente subestimado do Simbolismo é seu caráter <strong>anti-positivista</strong>. O século XIX europeu foi dominado pela crença no progresso científico e na razão como ferramentas suficientes para compreender e transformar o mundo. O Simbolismo surgiu como uma reação a esse otimismo científico: para os simbolistas, há dimensões da experiência humana que a ciência não pode alcançar — a espiritualidade, o inconsciente, o amor, a morte, o sagrado. A arte — especialmente a poesia — é o único instrumento capaz de tocar essas dimensões, e faz isso não através da análise racional, mas através da evocação, da sugestão, do símbolo. Nesse sentido, o Simbolismo é também uma filosofia da arte: uma afirmação de que a experiência estética revela verdades que a ciência não pode formular.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Musicalidade</h3>
            <p>O poema simbolista soa como música: aliterações (repetição de consoantes), assonâncias (repetição de vogais), onomatopeias e ritmo hipnótico criam uma experiência auditiva que independe do significado literal.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Sinestesia</h3>
            <p>Mistura de sensações de diferentes sentidos: "som dourado", "perfume branco", "silêncio frio". A sinestesia evoca experiências sensoriais complexas que resistem à análise racional.</p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Sugestão e Indeterminação</h3>
            <p>O poema não afirma — sugere. Imagens vagas, metáforas obscuras e vocabulário evocativo criam significados latentes que o leitor sente mais do que compreende.</p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>Misticismo e Espiritualismo</h3>
            <p>Os simbolistas buscam o transcendente: referências ao oculto, ao esotérico, ao religioso e ao místico são frequentes. A poesia é um meio de acesso a realidades além do material.</p>
          </div>
          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Nebulosidade</h3>
            <p>Ao contrário da clareza parnasiana, os simbolistas cultivam a imprecisão: imagens nebulosas, metáforas ambíguas e estruturas sintáticas incomuns criam um efeito de misterioso estranhamento.</p>
          </div>
          <div className="lesson-card">
            <span>🌙</span>
            <h3>Subjetivismo Extremo</h3>
            <p>O eu lírico simbolista é profundamente interiorizado: a poesia é uma exploração das camadas mais profundas do inconsciente e da experiência espiritual — antecipa a psicanálise de Freud.</p>
          </div>
        </div>

        <p>
          O <strong>vocabulário simbolista</strong> merece atenção especial. Os simbolistas criavam neologismos, usavam arcaísmos, inventavam combinações de palavras incomuns — tudo para criar um efeito de estranhamento que afastasse a leitura racional e convocasse uma resposta mais emocional e intuitiva. Em Cruz e Sousa, isso se manifesta em expressões como "vozes veladas, veludosas vozes" (o V repetido cria uma textura sonora antes de um sentido preciso), "alvas lívidas" (brancas e pálidas ao mesmo tempo), "sanguinolenta e magoa" (inventando um substantivo a partir de um adjetivo). O ENEM frequentemente apresenta fragmentos com esse vocabulário incomum e pede ao candidato que identifique o efeito estético ou o movimento literário ao qual pertence.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sinestesia</span>
        <h2>3. Sinestesia — A Mistura dos Sentidos como Recurso Poético</h2>

        <p>
          A <strong>sinestesia</strong> é a figura de linguagem que combina, em uma única expressão, sensações pertencentes a sentidos diferentes. Em termos médicos e psicológicos, a sinestesia é um fenômeno neurológico em que a estimulação de um sentido provoca automaticamente a percepção em outro (há pessoas que "veem" sons como cores, por exemplo). Os simbolistas transformaram esse fenômeno em técnica literária deliberada: ao fundir percepções visuais, auditivas, olfativas, táteis e gustativas numa única imagem, criam experiências poéticas que resistem à análise racional e ativam respostas emocionais e sensoriais profundas.
        </p>
        <p>
          Para o ENEM, é importante distinguir sinestesia de outras figuras de linguagem próximas. A <strong>metáfora</strong> transfere sentido por semelhança, mas não mistura sentidos. A <strong>personificação</strong> atribui qualidades humanas a seres inanimados. A <strong>hipérbole</strong> exagera. Apenas a sinestesia especificamente combina dois ou mais sentidos diferentes numa mesma expressão — auditivo + visual ("som luminoso"), olfativo + visual ("perfume branco"), gustativo + auditivo ("doce melodia"), tátil + auditivo ("voz macia"). Questões do ENEM frequentemente listam expressões e pedem a identificação da sinestesia entre elas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão Sinestésica</th>
                <th>Sentidos Combinados</th>
                <th>Efeito Evocativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Som dourado"</td>
                <td>Auditivo + visual</td>
                <td>Um som rico, brilhante, de valor elevado</td>
              </tr>
              <tr>
                <td>"Perfume branco"</td>
                <td>Olfativo + visual</td>
                <td>Uma fragrância pura, etérea, imaculada</td>
              </tr>
              <tr>
                <td>"Silêncio frio"</td>
                <td>Auditivo + tátil</td>
                <td>Um silêncio desolado, que causa arrepios</td>
              </tr>
              <tr>
                <td>"Voz macia"</td>
                <td>Auditivo + tátil</td>
                <td>Uma voz que acaricia, suave como seda</td>
              </tr>
              <tr>
                <td>"Luz perfumada"</td>
                <td>Visual + olfativo</td>
                <td>Uma luminosidade envolvente, sensual</td>
              </tr>
              <tr>
                <td>"Cor melancólica"</td>
                <td>Visual + emocional</td>
                <td>Uma cor que evoca tristeza, pesada e escura</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A teoria das <strong>Correspondências</strong> de Baudelaire está na base da sinestesia simbolista: <em>"Os perfumes, as cores e os sons se correspondem."</em> Em seu soneto <em>Correspondances</em>, Baudelaire afirmava que a natureza inteira é um sistema de símbolos interligados que o poeta, como sacerdote ou mago, é capaz de traduzir. A sinestesia é, portanto, não apenas um recurso estilístico mas uma afirmação filosófica sobre a unidade oculta de toda a experiência sensorial.
        </p>
        <p>
          É fundamental distinguir a sinestesia do Simbolismo de duas figuras de linguagem com as quais é frequentemente confundida. A <strong>metáfora</strong> substitui uma palavra por outra com base em semelhança, mas não mistura sentidos: "o sol é uma laranja" é metáfora, não sinestesia. A <strong>personificação</strong> atribui características humanas a elementos inanimados: "o vento gemia" é personificação, não sinestesia. A sinestesia é especificamente a mistura de duas percepções sensoriais de sentidos diferentes: audição + visão ("som azul"), tato + visão ("textura branca"), olfato + audição ("perfume melodioso"). Quando essa mistura cria uma imagem que o leitor <em>sente</em> sem conseguir racionalizá-la completamente, está-se diante do efeito simbolista buscado.
        </p>

        <div className="math-block">
          <strong>Sinestesia em Cruz e Sousa — fragmento de <em>Violões que choram</em>:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Vozes veladas, veludosas vozes,<br/>
            Volúpias dos violões, vozes veladas,<br/>
            Vagam nos velhos vórtices, nas vozes<br/>
            Dos ventos, vivos, vácuos, meneadas..."
          </p>
          <p>
            A aliteração do V cria um efeito sonoro hipnótico — a musicalidade que Verlaine exigia. "Vozes veladas" combina o auditivo com o visual (veladas = cobertas, escondidas), criando sinestesia. "Voludades dos violões" mescla som e sensação física de prazer. O poema "soa" mais do que "significa" — é Simbolismo em estado puro.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cruz e Sousa</span>
        <h2>4. Cruz e Sousa — O Cisne Negro do Simbolismo Brasileiro</h2>

        <p>
          <strong>João da Cruz e Sousa</strong> (1861–1898) é o maior poeta simbolista brasileiro e um dos mais importantes da língua portuguesa. Sua vida foi tão marcada pelo sofrimento quanto sua obra pela busca da transcendência: nasceu escravo em Florianópolis (SC), filho de pais que foram libertados pelo casal que os escravizava e que lhes deu instrução. Autodidata brilhante, Cruz e Sousa tentou em vão construir uma carreira no Rio de Janeiro, cidade na qual chegou em 1890. Sofreu o racismo sistematicamente: foi impedido de assumir cargos públicos por ser negro, foi ignorado pelos círculos literários parnasianos, e viveu em extrema pobreza. Morreu de tuberculose aos 36 anos, no mesmo ano em que sua esposa enlouquecia e seus filhos morriam de doença.
        </p>
        <p>
          A obra de Cruz e Sousa gira em torno de dois eixos temáticos que se alimentam mutuamente: a <strong>busca da transcendência espiritual</strong> (a poesia como ascensão acima da matéria, do sofrimento e da condição humana) e a <strong>dor da existência negra</strong> numa sociedade racista (embora Cruz e Sousa não tematize o racismo diretamente como política, ele aparece cifrado em sua simbologia: o branco como pureza ideal sempre inacessível, o negro como estigma e sofrimento). Essa tensão faz de sua obra um dos casos mais complexos e comoventes da literatura brasileira.
        </p>
        <p>
          O próprio nome artístico do poeta — Cruz e Sousa — é revelador: abandonou o sobrenome da família que o alforriou (Germano) e adotou o nome de batismo da forma que lhe pertencia, sem marcas do senhor. É um ato de autonomia identitária que antecipa as lutas por reconhecimento do século XX. E sua poesia, que busca o Branco como ideal de pureza enquanto o corpo do poeta é Negro num mundo que vê a negritude como impedimento — essa contradição dolorosa está no coração de sua obra. Compreendê-la é compreender Cruz e Sousa como um dos escritores mais importantes não apenas da literatura brasileira, mas da literatura das Américas.
        </p>

        <div className="lesson-highlight">
          <h3>Obra de Cruz e Sousa</h3>
          <ul>
            <li><strong>Broquéis</strong> (1893) — estreia na poesia simbolista brasileira; o título evoca escudos medievais (broquéis) com os quais o poeta se defende do mundo.</li>
            <li><strong>Missal</strong> (1893) — prosa poética de alta elaboração verbal; publicado no mesmo dia que Broquéis.</li>
            <li><strong>Evocações</strong> (1898) — prosa poética publicada no ano de sua morte, com textos de grande densidade espiritual.</li>
            <li><strong>Faróis</strong> (1900), <strong>Últimos Sonetos</strong> (1905) — obras póstumas organizadas pelo crítico Nestor Vítor.</li>
          </ul>
        </div>

        <p>
          O poema <em>Acrobata da Dor</em> é frequentemente citado como a síntese perfeita da poética de Cruz e Sousa. Nele, o eu lírico se compara a um acrobata que executa piruetas de dor — transformando o sofrimento em performance, a angústia em arte. Há nessa imagem uma dimensão metaliterária: o próprio Cruz e Sousa transformou sua vida de dor (o racismo, a pobreza, a tuberculose, a loucura da esposa, a morte dos filhos) em uma das mais elaboradas obras da literatura brasileira. O sofrimento não anestesiou sua arte — a potencializou. Esse aspecto de sublimação da dor pessoal em poesia universal é um dos aspectos mais comoventes e teoricamente ricos de sua obra.
        </p>

        <p>
          O crítico Roger Bastide, em estudo seminal sobre Cruz e Sousa, cunhou a expressão <em>"Cisne Negro"</em> para descrever o poeta: um ser de rara beleza e sofisticação que, por ser negro em um mundo que só aceitava brancos, era constantemente excluído e humilhado. A metáfora é precisa: o cisne negro é tão majestoso quanto o branco, mas sua negritude o torna, aos olhos dos que não querem ver, invisível ou indesejável. Cruz e Sousa transformou essa exclusão em poesia que dura. E a ironia histórica é que, hoje, ele é reconhecido universalmente como o maior poeta simbolista em língua portuguesa — superior, para muitos críticos, aos próprios simbolistas franceses que o inspiraram.
        </p>

        <p>
          A simbologia de Cruz e Sousa é densa e recorrente: o <strong>branco</strong> aparece como símbolo de pureza, ideal, transcendência — mas também como representação da brancura inacessível ao negro; o <strong>negro</strong> aparece como noite, sofrimento, mas também como profundidade e mistério; o <strong>mármore</strong> é o ideal frio e eterno da beleza; a <strong>luz</strong> é a espiritualidade transcendente. O crítico Roger Bastide chamou Cruz e Sousa de <em>"o Cisne Negro"</em> — uma imagem que captura a contradição de sua posição: negro num mundo que só aceitava brancos, elegante numa sociedade que o excluía, poeta sublime que a elite literária recusava.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alphonsus de Guimaraens</span>
        <h2>5. Alphonsus de Guimaraens — O Poeta da Morte e da Fé</h2>

        <p>
          <strong>Alphonsus de Guimaraens</strong> (1870–1921) é o segundo grande nome do Simbolismo brasileiro, e o mais claramente marcado pela religiosidade e pela melancolia. Nascido em Ouro Preto (MG) e radicado em Mariana como juiz municipal por toda a vida, Alphonsus viveu num isolamento provinciano que imprimiu à sua obra um caráter contemplativo e interiorizado — quase claustrofóbico. Esse isolamento foi também biográfico: o poeta nunca superou a morte prematura de sua noiva Constança, que faleceu antes do casamento e tornou-se a figura feminina central de toda a sua poesia — uma presença fantasmática, associada à cor branca (imaculada), à virgindade e à morte.
        </p>
        <p>
          A obra de Alphonsus gira em torno de três eixos: o amor pela morta (Constança), a religiosidade católica profunda (devoção a Nossa Senhora, ao universo litúrgico das igrejas barrocas mineiras) e a meditação sobre a morte como passagem e redenção. Seus poemas são habitados por sinos, missas, velas, capelas, perfumes de incenso e a luz filtrada pelos vitrais — o universo sensorial das igrejas coloniais do interior mineiro. Entre suas obras: <em>Setenário das Dores de Nossa Senhora</em> (1899), <em>Dona Mística</em> (1899), <em>Câmara Ardente</em> (1899), <em>Kiriale</em> (1902) e <em>Pastoral aos Crentes do Amor e da Morte</em> (1923, póstumo).
        </p>
        <p>
          O título <em>Kiriale</em> é significativo: um <em>kyriale</em> é o livro litúrgico que contém o Kyrie, o Glória e o Credo da missa católica — os cantos mais sagrados da liturgia. Ao nomear seu livro de poemas com esse termo litúrgico, Alphonsus afirma a equivalência entre a missa e a poesia: ambas são rituais sagrados que elevam o espírito acima da matéria. Essa identificação entre arte e liturgia é o coração do Simbolismo de Alphonsus — e um dos motivos pelos quais sua obra tem uma qualidade meditativa, lenta e ritual que contrasta com a musicalidade mais intensa e dramática de Cruz e Sousa.
        </p>

        <p>
          O poema <em>Ismália</em> é habitualmente comparado, pela crítica, à lenda da <em>Ondina</em> das tradições folclóricas europeias — a criatura sobrenatural que vive na fronteira entre o mundo aquático e o terrestre, e que se perde ao tentar habitar completamente o mundo humano. A loucura de Ismália tem essa dimensão mítica: ela é uma criatura liminar, que pertence ao mesmo tempo ao céu e ao mar, ao sonho e à realidade, ao divino e ao abissal. A poesia simbolista frequentemente habitava essas fronteiras — entre a matéria e o espírito, entre a consciência e o inconsciente, entre a vida e a morte — e Alphonsus de Guimaraens era o seu habitante mais elegante.
        </p>

        <div className="math-block">
          <strong>Fragmento de <em>Ismália</em> (Alphonsus de Guimaraens):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Quando Ismália enlouqueceu,<br/>
            Pôs-se na torre a sonhar...<br/>
            Viu uma lua no céu,<br/>
            Viu outra lua no mar.<br/>
            <br/>
            No sonho em que se perdeu,<br/>
            Banhou-se toda em luar...<br/>
            Queria subir ao céu,<br/>
            Queria descer ao mar..."
          </p>
          <p>
            <em>Ismália</em> é o poema mais famoso de Alphonsus e um dos mais conhecidos do Simbolismo brasileiro. A loucura da protagonista (perceber a lua duplicada — no céu e no mar) representa a duplicidade da alma que deseja transcender o terreno (subir ao céu) e ao mesmo tempo submergir no inconsciente profundo (descer ao mar). A musicalidade é hipnótica; a repetição cria um efeito litânico. É um exemplo perfeito do Simbolismo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>6. Cruz e Sousa × Alphonsus de Guimaraens — Dois Simbolismos</h2>

        <p>
          O Simbolismo brasileiro é, em essência, dois movimentos dentro de um: a <strong>via de Cruz e Sousa</strong>, marcada pela angústia existencial e a busca de transcendência numa sociedade racista; e a <strong>via de Alphonsus de Guimaraens</strong>, marcada pela melancolia religiosa e a meditação contemplativa sobre morte e amor. Ambas as vias partilham os mesmos procedimentos estéticos — musicalidade, sinestesia, sugestão — mas os aplicam a experiências existenciais radicalmente diferentes.
        </p>

        <p>
          Além dos dois grandes simbolistas, o movimento brasileiro contou com outros representantes. <strong>Emiliano Perneta</strong> (1866–1921), paranaense, publicou <em>Ilusão</em> (1911) e é figura importante do Simbolismo no Sul do Brasil. <strong>Dario Vellozo</strong> (1869–1937), também paranaense, foi poeta, teosofista e educador — e sua obra simbolista tem forte caráter esotérico e filosófico. <strong>Pedro Kilkerry</strong> (1885–1917), baiano, é um dos simbolistas mais originais, com poemas de grande experimentação verbal. A diversidade geográfica e temática do Simbolismo brasileiro — do Rio de Janeiro de Cruz e Sousa ao interior mineiro de Alphonsus, passando pelo Sul do Brasil — mostra que o movimento teve alcance nacional, embora sua recepção tenha sido muito menor do que a do Parnasianismo contemporâneo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Cruz e Sousa</th>
                <th>Alphonsus de Guimaraens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom dominante</td>
                <td>Angústia existencial, busca mística, tensão racial</td>
                <td>Melancolia religiosa, meditação sobre a morte, lirismo sereno</td>
              </tr>
              <tr>
                <td>Religiosidade</td>
                <td>Espiritualismo difuso, transcendência mística</td>
                <td>Catolicismo fervoroso, Virgem Maria, liturgia barroca</td>
              </tr>
              <tr>
                <td>Principais símbolos</td>
                <td>Branco, mármore, luz, negro, noite</td>
                <td>Sino, vela, virgem, luar, morte, flor branca</td>
              </tr>
              <tr>
                <td>Estilo</td>
                <td>Musicalidade intensa, aliterações, vocabulário raro e neológico</td>
                <td>Ritmo litânico, repetições, vocabulário simples porém evocativo</td>
              </tr>
              <tr>
                <td>Contexto biográfico</td>
                <td>Rio de Janeiro; exclusão racial; pobreza extrema</td>
                <td>Interior de Minas Gerais; isolamento voluntário; perda da noiva</td>
              </tr>
              <tr>
                <td>Obra mais estudada</td>
                <td><em>Broquéis</em> (1893); <em>Violões que Choram</em></td>
                <td><em>Ismália</em>; <em>Setenário das Dores</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Parnasianismo vs. Simbolismo</span>
        <h2>7. Parnasianismo × Simbolismo — A Grande Oposição</h2>

        <p>
          Parnasianismo e Simbolismo são movimentos contemporâneos — ambos floresceram na segunda metade do século XIX e coexistiram nas décadas de 1880 a 1920. Mas são quase opostos em suas premissas estéticas fundamentais. Enquanto o Parnasianismo valoriza a forma perfeita e rigorosa como objetivo final, o Simbolismo usa a forma (especialmente a musicalidade) como meio para atingir o inefável. O poeta parnasiano trabalha como um escultor em mármore; o simbolista trabalha como um músico ou um mago.
        </p>
        <p>
          No Brasil, a coexistência de Parnasianismo e Simbolismo criou um curioso campo de tensão cultural. Os mesmos jornais e revistas que publicavam os sonetos impecáveis de Bilac às vezes publicavam também os poemas nebulosos de Cruz e Sousa — mas o público e os críticos claramente preferiam Bilac. O Parnasianismo era a estética da Belle Époque carioca: elegante, europeia, compreensível, compatível com os gostos da burguesia culta que queria literatura como decoração social. O Simbolismo era mais exigente, mais obscuro, mais perturbador — e além disso tinha Cruz e Sousa como seu principal representante, o que já bastava para afastar a elite literária racista. Essa dinâmica de prestígio e exclusão é em si um dado histórico e cultural relevante para a compreensão do período.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama comparativo entre Parnasianismo e Simbolismo"
          >
            <defs>
              <marker id="arrowSim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fill="#6366f1" fontWeight="bold">Parnasianismo × Simbolismo — Oposição Fundamental</text>

            {/* Parnasianismo */}
            <rect x="20" y="45" width="290" height="140" rx="10" fill="#dbeafe" />
            <text x="165" y="68" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">PARNASIANISMO</text>
            <text x="165" y="90" textAnchor="middle" fontSize="11" fill="#1e40af">Forma perfeita como objetivo</text>
            <text x="165" y="108" textAnchor="middle" fontSize="10" fill="#1e40af">Impessoalidade · Objetividade</text>
            <text x="165" y="124" textAnchor="middle" fontSize="10" fill="#1e40af">Descritivismo · Arte pela arte</text>
            <text x="165" y="140" textAnchor="middle" fontSize="10" fill="#1e40af">Greco-latinismo · Torre de marfim</text>
            <text x="165" y="158" textAnchor="middle" fontSize="9" fill="#3b82f6" fontStyle="italic">Bilac · Alberto de Oliveira · R. Correia</text>
            <text x="165" y="174" textAnchor="middle" fontSize="9" fill="#3b82f6" fontStyle="italic">Escultor de palavras</text>

            {/* vs. */}
            <text x="350" y="125" textAnchor="middle" fontSize="20" fill="#6366f1" fontWeight="bold">×</text>

            {/* Simbolismo */}
            <rect x="390" y="45" width="290" height="140" rx="10" fill="#ede9fe" />
            <text x="535" y="68" textAnchor="middle" fontSize="13" fill="#7c3aed" fontWeight="bold">SIMBOLISMO</text>
            <text x="535" y="90" textAnchor="middle" fontSize="11" fill="#7c3aed">Sugestão como objetivo</text>
            <text x="535" y="108" textAnchor="middle" fontSize="10" fill="#7c3aed">Subjetividade · Musicalidade</text>
            <text x="535" y="124" textAnchor="middle" fontSize="10" fill="#7c3aed">Sinestesia · Misticismo</text>
            <text x="535" y="140" textAnchor="middle" fontSize="10" fill="#7c3aed">Nebulosidade · Transcendência</text>
            <text x="535" y="158" textAnchor="middle" fontSize="9" fill="#7c3aed" fontStyle="italic">Cruz e Sousa · Alphonsus de Guimaraens</text>
            <text x="535" y="174" textAnchor="middle" fontSize="9" fill="#7c3aed" fontStyle="italic">Músico de palavras</text>

            <text x="350" y="204" textAnchor="middle" fontSize="11" fill="#64748b">Coexistiram de ~1880 a 1922 — reações opostas ao mesmo contexto</text>
          </svg>
          <figcaption>Comparação visual entre os programas estéticos do Parnasianismo e do Simbolismo.</figcaption>
        </figure>

        <p>
          Uma boa forma de fixar a diferença entre Parnasianismo e Simbolismo é imaginar dois músicos: o parnasiano é um pianista de concerto que executa Beethoven sem errar uma nota — a perfeição técnica é o espetáculo; o simbolista é um improvisador de jazz que dissolve a melodia em camadas de timbre e harmonia — o que importa é o estado de alma que a música cria. Ambos são músicos, ambos são extraordinários — mas o que cada um valoriza na música é radicalmente diferente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Parnasianismo</th>
                <th>Simbolismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetivo da poesia</td>
                <td>Beleza formal perfeita (arte pela arte)</td>
                <td>Sugestão do inefável, transcendência espiritual</td>
              </tr>
              <tr>
                <td>Clareza</td>
                <td>Alta; descreve com precisão</td>
                <td>Baixa; sugere com nebulosidade intencional</td>
              </tr>
              <tr>
                <td>Emoção do eu lírico</td>
                <td>Ausente (impessoalidade)</td>
                <td>Presente mas interiorizada (subjetivismo)</td>
              </tr>
              <tr>
                <td>Musicalidade</td>
                <td>Controlada; a serviço da métrica</td>
                <td>Central; mais importante que o significado</td>
              </tr>
              <tr>
                <td>Realidade representada</td>
                <td>Mundo externo (objetos, natureza, esculturas)</td>
                <td>Mundo interior (estados de alma, mistério, espírito)</td>
              </tr>
              <tr>
                <td>Relação com a ciência</td>
                <td>Afim; precisão, técnica, objetividade</td>
                <td>Adversa; rejeita o cientificismo racionalista</td>
              </tr>
              <tr>
                <td>Sintaxe</td>
                <td>Clara e lógica</td>
                <td>Frequentemente incomum, invertida, obscura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7B — Simbolismo e Contexto ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto do Simbolismo Brasileiro</span>
        <h2>7b. Por Que o Simbolismo Foi Marginal no Brasil?</h2>

        <p>
          Uma questão importante para o ENEM é compreender por que o Simbolismo, apesar de sua qualidade estética inegável, teve uma presença muito menor do que o Parnasianismo no Brasil das décadas de 1890 a 1910. Há várias razões:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Elitismo Duplamente Radical</h3>
            <p>O Simbolismo era mais hermético do que o Parnasianismo: enquanto um soneto parnasiano pode ser apreciado por sua beleza formal mesmo sem entender toda a mitologia, um poema simbolista exige do leitor uma disposição de abandonar a busca por significado claro — o que a maioria dos leitores burgueses do século XIX não estava disposta a fazer.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Racismo do Mercado Editorial</h3>
            <p>Cruz e Sousa encontrou dificuldades enormes para publicar sua obra — editoras recusavam seus manuscritos. Só foi publicado em 1893 graças ao apoio do poeta Araújo Figueiredo. O racismo sistemático da elite literária carioca marginaliza tanto o maior poeta simbolista brasileiro quanto sua estética.</p>
          </div>
          <div className="lesson-card">
            <span>🌆</span>
            <h3>Isolamento Geográfico</h3>
            <p>Alphonsus de Guimaraens viveu em Mariana (MG) como juiz de paz, distante dos centros culturais do Rio de Janeiro. Essa distância física — e a pobreza — limitaram sua projeção nacional enquanto vivia.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Publicações Póstumas</h3>
            <p>Parte significativa da obra de Cruz e Sousa foi publicada postumamente, organizada pelo crítico Nestor Vítor — que foi o grande divulgador e defensor do Simbolismo brasileiro após a morte dos principais poetas do movimento.</p>
          </div>
        </div>

        <p>
          A marginalidade do Simbolismo brasileiro é, em certo sentido, constitutiva de sua identidade: é um movimento de excluídos (Cruz e Sousa, negro; Alphonsus, provinciano isolado) que fizeram uma arte da interioridade e da transcendência como resposta à exclusão. O Simbolismo brasileiro é, assim, a mais íntima e a mais politicamente carregada das escolas literárias oitocentistas — mesmo que sua política seja cifrada em símbolos, não em manifestos.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Simbolismo e Modernismo</span>
        <h2>8. O Legado do Simbolismo — Influência no Modernismo e na Literatura Contemporânea</h2>

        <p>
          O Simbolismo foi o movimento literário que mais influenciou diretamente o Modernismo brasileiro de 1922. Enquanto o Parnasianismo foi o alvo principal das críticas modernistas, o Simbolismo foi, em muitos aspectos, reconhecido como precursor: sua abertura para o inconsciente, sua musicalidade experimental e sua recusa do realismo mimético anteciparam técnicas que os modernistas desenvolveriam. <strong>Manuel Bandeira</strong>, um dos maiores poetas do Modernismo, começou como simbolista tardio — seu primeiro livro, <em>A Cinza das Horas</em> (1917), é ainda muito simbolista.
        </p>
        <p>
          A influência do Simbolismo se estendeu também à música: o compositor <strong>Villa-Lobos</strong> dialogou com a estética simbolista em algumas composições; e vários poetas modernistas — como <strong>Cecília Meireles</strong>, frequentemente classificada como neossimbolista por sua musicalidade, espiritualidade e nebulosidade — mantiveram vínculos com o movimento. A noção de que o poema deve <em>sugerir</em> mais do que <em>dizer</em>, de que a musicalidade é inseparável do sentido, e de que o inconsciente é território privilegiado da poesia — todas essas conquistas simbolistas sobreviveram ao Modernismo e continuam vivas na poesia contemporânea.
        </p>

        <p>
          A psicanálise de Sigmund Freud — cujas teorias sobre o inconsciente começaram a ser publicadas nos anos 1890, exatamente quando o Simbolismo floresceu — guarda uma profunda afinidade com o movimento literário. Ambos exploravam o que está abaixo da superfície consciente: a psicanálise através do sonho e do lapso; o Simbolismo através da sugestão e da sinestesia. Não é coincidência que os surrealistas do século XX — que beberam diretamente do Simbolismo — também fossem entusiastas da psicanálise. O Simbolismo foi, em certo sentido, a psicanálise da poesia.
        </p>
        <p>
          O legado imediato mais importante do Simbolismo para a literatura brasileira é a <strong>conquista da interioridade poética</strong>. Antes do Simbolismo, a poesia brasileira tendia à exterioridade — à descrição da natureza e da sociedade (Parnasianismo e Condoreirismo), à narração das emoções (Romantismo). O Simbolismo mostrou que o poema pode ser um espaço de exploração do inconsciente, do espiritual e do indizível — e essa conquista tornou possível toda a poesia modernista e contemporânea que mergulha nas profundezas do sujeito. Manuel Bandeira, Cecília Meireles, Jorge de Lima, Murilo Mendes — todos eles são herdeiros do caminho aberto por Cruz e Sousa e Alphonsus de Guimaraens.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Poeta Posterior</th>
                <th>Herança Simbolista</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manuel Bandeira</td>
                <td>Primeiro livro simbolista; musicalidade; intimismo</td>
                <td><em>A Cinza das Horas</em> (1917) — tom melancólico e musical herdado do Simbolismo</td>
              </tr>
              <tr>
                <td>Cecília Meireles</td>
                <td>Neossimbolismo; espiritualidade; nebulosidade; musicalidade</td>
                <td><em>Romanceiro da Inconfidência</em> — síntese de musicalidade simbolista e temática brasileira</td>
              </tr>
              <tr>
                <td>Jorge de Lima</td>
                <td>Espiritualidade; imagens oníricas; Cruz e Sousa como influência declarada</td>
                <td><em>Invenção de Orfeu</em> — o maior poema do modernismo brasileiro, com raízes simbolistas</td>
              </tr>
              <tr>
                <td>Murilo Mendes</td>
                <td>Misticismo católico; surrealismo; imagens oníricas</td>
                <td><em>Poemas</em> (1930) — fusão de Simbolismo, Surrealismo e espiritualidade</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Cruz e Sousa e a questão racial</h3>
          <p>
            A obra de Cruz e Sousa tem sido cada vez mais lida à luz de sua condição de homem negro em uma sociedade recém-saída da escravidão (1888). A obsessão pelo branco em sua poesia — a brancura como ideal espiritual e estético — pode ser lida como a internalização de um padrão de beleza que o excluía. Simultaneamente, o negro aparece em sua obra como noite profunda, mistério, espiritualidade — uma reapropriação simbólica. Essa dimensão da obra de Cruz e Sousa, negligenciada durante décadas pela crítica tradicional, tem sido central nas releituras contemporâneas de sua poesia.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Como o ENEM Cobra</span>
        <h2>9. Síntese e Estratégia para o ENEM</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 195"
            width="700"
            height="195"
            aria-label="Mapa conceitual do Simbolismo brasileiro com autores, obras e características"
          >
            <rect x="0" y="0" width="700" height="195" rx="14" fill="#f8fafc" />

            {/* nó central */}
            <rect x="270" y="15" width="160" height="50" rx="10" fill="#7c3aed" />
            <text x="350" y="37" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">SIMBOLISMO</text>
            <text x="350" y="54" textAnchor="middle" fontSize="10" fill="#e9d5ff">Sugestão · Mistério · ~1893-1922</text>

            {/* linhas */}
            <line x1="350" y1="65" x2="180" y2="90" stroke="#7c3aed" strokeWidth="1.5" />
            <line x1="350" y1="65" x2="520" y2="90" stroke="#7c3aed" strokeWidth="1.5" />

            {/* Cruz e Sousa */}
            <rect x="40" y="90" width="280" height="70" rx="8" fill="#ede9fe" />
            <text x="180" y="112" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">Cruz e Sousa (1861-1898)</text>
            <text x="180" y="128" textAnchor="middle" fontSize="10" fill="#7c3aed">Broquéis (1893) · Missal (1893)</text>
            <text x="180" y="144" textAnchor="middle" fontSize="9" fill="#7c3aed" fontStyle="italic">Musicalidade · Branco · Transcendência racial</text>

            {/* Alphonsus */}
            <rect x="380" y="90" width="280" height="70" rx="8" fill="#f5f3ff" />
            <text x="520" y="112" textAnchor="middle" fontSize="11" fill="#6d28d9" fontWeight="bold">Alphonsus de Guimaraens</text>
            <text x="520" y="128" textAnchor="middle" fontSize="10" fill="#6d28d9">(1870-1921) · Ismália · Kiriale</text>
            <text x="520" y="144" textAnchor="middle" fontSize="9" fill="#6d28d9" fontStyle="italic">Religiosidade · Morte · Melancolia</text>

            <text x="350" y="178" textAnchor="middle" fontSize="11" fill="#6366f1" fontWeight="bold">Características: sinestesia · musicalidade · sugestão · misticismo · nebulosidade</text>
          </svg>
          <figcaption>Mapa conceitual do Simbolismo brasileiro — autores, obras e características principais.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Checklist para o ENEM</h3>
          <ul>
            <li>Simbolismo: reação ao Parnasianismo e ao Realismo; poesia da sugestão, não da descrição.</li>
            <li>Precursores europeus: Baudelaire (Correspondências), Verlaine (música), Mallarmé (sugestão).</li>
            <li>Cruz e Sousa: <em>Broquéis</em> e <em>Missal</em> (1893); musicalidade intensa; "Cisne Negro".</li>
            <li>Alphonsus de Guimaraens: <em>Ismália</em>; religiosidade católica; morte como tema central.</li>
            <li>Sinestesia: mistura de sensações de sentidos diferentes ("som dourado", "perfume branco").</li>
            <li>Musicalidade: aliterações, assonâncias, ritmo hipnótico — o poema "soa" mais do que "diz".</li>
            <li>Teoria das Correspondências (Baudelaire): todos os elementos da natureza se correspondem.</li>
            <li>Influência no Modernismo: Manuel Bandeira começou simbolista; Cecília Meireles é neossimbolista.</li>
            <li>Simbolismo brasileiro: Cruz e Sousa e Alphonsus são contemporâneos; floresceram entre 1893 e 1922.</li>
            <li>Simbolismo foi marginalizado em vida — reconhecimento veio depois de suas mortes, especialmente com Nestor Vítor.</li>
          </ul>
        </div>

        <p>
          Para o ENEM, a diferença entre Simbolismo e Romantismo também é importante de dominar, já que ambos valorizam a subjetividade e as emoções interiores. A diferença fundamental: o Romântico <em>expressa</em> suas emoções diretamente, com clareza e intensidade — ele conta que está sofrendo, que está apaixonado, que deseja a morte. O Simbolista <em>sugere</em> emoções através de imagens indiretas e musicalidade — ele cria um <em>estado de alma</em> no leitor sem nunca nomear explicitamente a emoção. No Romantismo, o eu lírico é protagonista confessional; no Simbolismo, o eu lírico é intermediário entre o mundo sensorial e o mundo espiritual.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Romantismo</th>
                <th>Simbolismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tratamento das emoções</td>
                <td>Direto, confessional, explícito</td>
                <td>Indireto, sugerido, velado</td>
              </tr>
              <tr>
                <td>Postura do eu lírico</td>
                <td>Protagonista que sofre e confessa</td>
                <td>Intermediário entre o sensorial e o espiritual</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Clara, emotiva, acessível</td>
                <td>Rara, evocativa, frequentemente obscura</td>
              </tr>
              <tr>
                <td>Musicaldade</td>
                <td>Presente mas a serviço do sentimento</td>
                <td>Central — mais importante que o sentido</td>
              </tr>
              <tr>
                <td>Objetivo</td>
                <td>Comunicar emoção, identificação do leitor</td>
                <td>Criar estado de alma, transcender a razão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Como identificar o Simbolismo em fragmentos desconhecidos:</strong>
          <p>Busque: (1) vocabulário raro e evocativo sem sentido claro; (2) aliterações e assonâncias intensas; (3) imagens vagas, nebulosas; (4) referências ao espiritual, ao místico, à morte; (5) sinestesia (sensações misturadas); (6) ausência de descrição objetiva — tudo é sugerido. Se o texto tem forma rígida e descreve com clareza → Parnasianismo. Se o texto sugere, soa musicalmente e dissolve sentidos → Simbolismo. Se o texto é claro e confessional → Romantismo. Se o texto é experimental e usa o vernáculo popular → Modernismo.</p>
        </div>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Características Fundamentais do Simbolismo"
          statement={
            <p>
              O Simbolismo distingue-se do Parnasianismo, seu contemporâneo, principalmente porque:
            </p>
          }
          options={[
            { letter: "a", text: "valoriza a perfeição formal do soneto e a impessoalidade, usando a técnica como objetivo central da poesia." },
            { letter: "b", text: "prioriza a sugestão sobre a descrição, a musicalidade sobre o significado, e o mistério sobre a clareza — buscando transmitir estados de alma, não retratar objetos.", correct: true },
            { letter: "c", text: "defende o engajamento social e político da poesia, como no condoreirismo de Castro Alves." },
            { letter: "d", text: "retoma o subjetivismo romântico com toda a sua emotividade e sentimentalismo, aproximando-se da segunda geração do Romantismo." },
          ]}
          resolution={
            <p>
              O Simbolismo se opõe fundamentalmente ao Parnasianismo: onde o parnasiano descreve com clareza e prioriza a forma, o simbolista sugere com nebulosidade e prioriza a experiência sensorial e espiritual. A diferença central está no objetivo: o Parnasianismo busca a beleza formal perfeita (arte pela arte); o Simbolismo busca a transmissão de estados de alma inefáveis — o que não pode ser dito diretamente, mas pode ser sugerido pela musicalidade, pela sinestesia e pelo vocabulário evocativo. A alternativa B captura essa distinção. O Simbolismo não é engajamento político (C) nem Romantismo sentimental revisitado (D): é um movimento novo, com premissas filosóficas próprias.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificação da Sinestesia"
          statement={
            <p>
              Identifique, nas alternativas abaixo, a expressão que constitui um exemplo de sinestesia:
            </p>
          }
          options={[
            { letter: "a", text: '"As ondas do mar batiam nas pedras com força" — descrição objetiva da natureza, sem figura de linguagem especial.' },
            { letter: "b", text: '"Ela era mais bela que as estrelas" — comparação (símile) entre a mulher e as estrelas.' },
            { letter: "c", text: '"Ouço com os olhos as falas do silêncio" — combinação do sentido auditivo (ouço) com o visual (olhos) e a paradoxal percepção do silêncio como linguagem.', correct: true },
            { letter: "d", text: '"O sol nasceu vermelho naquela manhã" — metáfora cromática sem mistura de sentidos.' },
          ]}
          resolution={
            <p>
              A sinestesia é especificamente a mistura de sensações pertencentes a sentidos diferentes em uma mesma expressão. Na alternativa C, <em>"ouço com os olhos"</em> combina audição e visão; e <em>"falas do silêncio"</em> transforma o silêncio (ausência de som) em linguagem audível — uma mistura de percepção auditiva e a negação dela mesma. Essa combinação incomum e paradoxal é exatamente o tipo de sinestesia que os simbolistas cultivavam. A alternativa A é descrição literal; B é símile (comparação); D é metáfora cromática simples (uma cor associada ao sol, sem mistura de sentidos).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Cruz e Sousa — A Dimensão Racial no Simbolismo"
          statement={
            <p>
              Um crítico literário contemporâneo afirma que a obsessão de Cruz e Sousa pelo branco em sua poesia — descrito como ideal de pureza, espiritualidade e beleza transcendente — pode ser lida como a internalização de um padrão estético racista que o excluía. Assinale a alternativa que melhor avalia essa interpretação:
            </p>
          }
          options={[
            { letter: "a", text: "A interpretação é anacrônica e incorreta: Cruz e Sousa era um simbolista puro, e o branco em sua poesia tem exclusivamente conotação espiritual europeia, sem qualquer relação com sua condição de negro." },
            { letter: "b", text: "A interpretação é válida e enriquece a leitura da obra: a biografia de Cruz e Sousa — negro excluído da elite literária, que sofreu racismo sistemático — informa a simbologia de sua poesia, tornando-a mais complexa do que a crítica tradicional reconheceu.", correct: true },
            { letter: "c", text: "A interpretação reduz a obra de Cruz e Sousa à sua dimensão biográfica e nega sua importância estética como simbolista, o que é uma forma de racismo ao não reconhecer sua genialidade literária autônoma." },
            { letter: "d", text: "A questão racial é irrelevante para a análise literária: a literatura deve ser analisada apenas por seus recursos formais, sem consideração da identidade do autor." },
          ]}
          resolution={
            <p>
              A interpretação referenciada na alternativa B é uma das mais produtivas da crítica literária contemporânea sobre Cruz e Sousa. O simbolismo do branco em sua obra tem múltiplas camadas: a espiritualidade simbolista europeia (herança de Baudelaire e Mallarmé) E a tensão entre o ideal de brancura que uma sociedade racista impunha e a negritude do poeta. Ambas as leituras coexistem e se enriquecem mutuamente — não se anulam. A alternativa A nega a dimensão histórica e biográfica (ingenuamente); C confunde crítica biográfica com negação do valor literário (erro de lógica); D adota uma postura de autonomia absoluta do texto que desconsidera décadas de teoria literária sobre a relação entre texto e contexto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Análise de Fragmento Simbolista — Ismália"
          statement={
            <p>
              Leia o fragmento de <em>Ismália</em>, de Alphonsus de Guimaraens:<br /><br />
              <em>"Quando Ismália enlouqueceu, / Pôs-se na torre a sonhar... / Viu uma lua no céu, / Viu outra lua no mar. / No sonho em que se perdeu, / Banhou-se toda em luar... / Queria subir ao céu, / Queria descer ao mar..."</em><br /><br />
              Qual é o sentido simbólico da imagem da lua duplicada (no céu e no mar) e do desejo de Ismália de subir e descer simultaneamente?
            </p>
          }
          options={[
            { letter: "a", text: "A lua duplicada representa o início da loucura de Ismália: ela vê duplo porque sofre de alucinações — o poema é uma descrição realista de doença mental." },
            { letter: "b", text: "A lua no céu e no mar representa a dualidade da alma humana: o anseio pela transcendência espiritual (céu) e o impulso de mergulhar no inconsciente e no profundo (mar). A loucura de Ismália é a expressão poética de uma consciência dilacerada entre o ideal e o abismo.", correct: true },
            { letter: "c", text: "A lua no céu é símbolo parnasiano de perfeição formal; a lua no mar é símbolo romântico de sentimentalismo. O poema é uma síntese dos dois movimentos, não um poema simbolista." },
            { letter: "d", text: "A duplicação da lua representa a indecisão entre dois pretendentes amorosos que Ismália não consegue escolher — é uma alegoria do dilema amoroso típico do Romantismo." },
          ]}
          resolution={
            <p>
              <em>Ismália</em> é um dos poemas mais ricos do Simbolismo brasileiro, e a lua duplicada é sua imagem central. No sistema simbólico do poema, o <strong>céu</strong> representa o ideal espiritual, a transcendência, a pureza — e o desejo de subir ao céu é o anseio místico. O <strong>mar</strong> representa as profundezas do inconsciente, o abismo e a morte — e o desejo de descer ao mar é a pulsão de dissolução do eu. Ismália enloquece porque deseja ambos simultaneamente, o que é impossível — ela está presa entre dois absolutos que se opõem. A loucura, no Simbolismo, não é doença médica (A) mas metáfora de um estado de alma que transcende a razão. Não há parnasianismo (C) nem dilema amoroso romântico (D) na leitura correta do poema.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Simbolismo e Musicalidade — Análise de Recurso Sonoro"
          statement={
            <p>
              Leia o fragmento de Cruz e Sousa:<br /><br />
              <em>"Vozes veladas, veludosas vozes, / Volúpias dos violões, vozes veladas, / Vagam nos velhos vórtices, nas vozes / Dos ventos, vivos, vácuos, meneadas..."</em><br /><br />
              O principal recurso sonoro e o efeito estético que ele produz são:
            </p>
          }
          options={[
            { letter: "a", text: "Rima entre versos alternados (ABAB), que cria um efeito de equilíbrio e simetria formal, característico do rigor parnasiano." },
            { letter: "b", text: "Aliteração intensa do fonema /v/, que cria um efeito de continuidade sonora, sugerindo o deslizar suave e envolvente das vozes dos violões — a musicalidade simbolista que Verlaine prescrevia.", correct: true },
            { letter: "c", text: "Onomatopeia do som do violão, que reproduz literalmente os acordes do instrumento, criando uma correspondência precisa entre som e sentido." },
            { letter: "d", text: "Hipérbole auditiva, que exagera o volume das vozes para criar um efeito de grandiosidade épica, típico do condoreirismo de Castro Alves." },
          ]}
          resolution={
            <p>
              O recurso dominante no fragmento é a <strong>aliteração do fonema /v/</strong>: vozes, veladas, veludosas, volúpias, violões, vagam, velhos, vórtices, ventos, vivos, vácuos. A repetição não é acidente — é programa estético simbolista. Verlaine, em seu <em>Art Poétique</em>, prescrevia: <em>"De la Musique avant toute chose"</em> (Música antes de tudo). A aliteração do V cria um fluxo sonoro contínuo que imita o deslizar de vozes veladas — o poema não descreve os violões, ele <em>soa</em> como violões. Esse é o simbolismo em ação: a forma sonora é inseparável do sentido. Não há rima ABAB dominante (A — a rima é ABAB mas não é o recurso central do efeito); onomatopeia seria imitar literalmente o som do instrumento (C — não é o que acontece); e não há grandiloqüência épica (D).
            </p>
          }
        />
      </section>
    </article>
  );
}
