"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 15</span>
          <h1>Movimentos Culturais e Patrimônio Histórico-Cultural</h1>
          <p>
            Cultura não é estática: ao longo da história, movimentos artísticos e sociais
            desafiaram o status quo, reinventaram linguagens e deixaram heranças que hoje
            chamamos de patrimônio. Compreender essa dinâmica — dos modernismos às contraculturas,
            do tombamento material ao registro imaterial — é essencial para a análise sociológica
            e para o ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. O Que São Movimentos Culturais?</h2>
        <p>
          Um <strong>movimento cultural</strong> é um conjunto organizado — ou difuso — de
          práticas, ideias e obras que partilham uma visão de mundo e propõem mudanças na
          forma de produzir e consumir arte, literatura, música ou comportamento. Podem
          surgir como <strong>vanguardas</strong> (que se antecipam ao seu tempo) ou como
          reações à cultura dominante (<strong>contraculturas</strong>). Para a Sociologia,
          movimentos culturais são também movimentos políticos: disputam simbolicamente a
          hegemonia cultural e os valores que organizam a vida social.
        </p>
        <p>
          A Sociologia da Cultura distingue dois eixos complementares que, na prática,
          frequentemente se entrelaçam. As vanguardas artísticas experimentam novas linguagens
          antes que a maioria as aceite (Dadaísmo, Cubismo, Tropicalismo), enquanto as
          contraculturas confrontam diretamente os valores hegemônicos da época (hippies, punk,
          feminismo de segunda onda). Em ambos os casos, há uma tensão produtiva entre inovação
          e tradição, entre ruptura e continuidade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Vanguardas artísticas</h3>
            <p>Experimentam novas linguagens antes que a maioria as aceite (Dadaísmo, Cubismo, Tropicalismo, Cinema Novo).</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Contraculturas</h3>
            <p>Confrontam diretamente os valores hegemônicos da época (hippies, punk, feminismo de segunda onda, Black Power).</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Modernismos</h3>
            <p>Rompem com tradições clássicas e propõem novas formas de expressão nacional (Semana de Arte Moderna de 1922).</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Movimentos identitários</h3>
            <p>Afirmam identidades marginalizadas: negritude, indigenismo, feminismo, LGBTQIA+, movimento de favelas.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modernismo Brasileiro</span>
        <h2>2. A Semana de Arte Moderna de 1922 e o Modernismo Brasileiro</h2>
        <p>
          Realizada entre 13 e 17 de fevereiro de 1922 no Teatro Municipal de São Paulo, a{" "}
          <strong>Semana de Arte Moderna</strong> foi o marco inaugural do Modernismo brasileiro.
          Em conferências, exposições e espetáculos musicais, artistas como <strong>Mário de Andrade</strong>,
          <strong>Oswald de Andrade</strong>, <strong>Tarsila do Amaral</strong> e{" "}
          <strong>Anita Malfatti</strong> propuseram uma arte nacional que dialogasse com as vanguardas
          europeias (cubismo, futurismo, dadaísmo) sem perder a identidade brasileira.
        </p>
        <p>
          O <strong>Manifesto Antropófago</strong> (1928), de Oswald de Andrade, sintetizou o espírito
          modernista brasileiro com a imagem da antropofagia cultural: "devorar" o estrangeiro e
          transformá-lo em algo novo e genuinamente nacional. A frase "Tupi or not Tupi — that is the
          question" subverte Shakespeare para afirmar a primazia da perspectiva indígena-brasileira.
          A metáfora antropofágica antecipou debates contemporâneos sobre hibridismo, glocalização e
          pós-colonialismo.
        </p>
        <div className="lesson-highlight">
          <h3>Fases do Modernismo brasileiro</h3>
          <p>
            O Modernismo brasileiro costuma ser dividido em três fases: <strong>1ª fase (1922–1930)</strong>
            — experimental e iconoclasta, ruptura com o passado;{" "}
            <strong>2ª fase (1930–1945)</strong> — consolidação, regionalismo crítico, engajamento
            político (Jorge Amado, Graciliano Ramos, Drummond); e{" "}
            <strong>3ª fase (1945–1960s)</strong> — experimentalismo radical na poesia concreta
            (Augusto e Haroldo de Campos) e no romance introspectivo (Guimarães Rosa, Clarice Lispector).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contracultura</span>
        <h2>3. A Contracultura dos Anos 1960–70</h2>
        <p>
          A segunda metade do século XX foi marcada por uma explosão de movimentos que
          questionaram radicalmente os valores da sociedade ocidental industrializada:
          o consumismo, a guerra, o patriarcado, a segregação racial e a autoridade
          institucional. A <strong>contracultura</strong> dos anos 1960–70 foi simultaneamente
          um fenômeno estético (novas formas musicais, visuais, literárias) e político
          (novos modos de viver, de se organizar e de resistir).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>País / Época</th>
                <th>Principais bandeiras</th>
                <th>Legado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Movimento Hippie</td>
                <td>EUA, 1960s</td>
                <td>Paz, amor livre, ecologia, misticismo</td>
                <td>Ambientalismo moderno, festivais de música</td>
              </tr>
              <tr>
                <td>Feminismo (2ª onda)</td>
                <td>EUA/Europa, 1960–80</td>
                <td>Igualdade no trabalho, reprodução, violência doméstica</td>
                <td>Leis de igualdade, conquistas reprodutivas</td>
              </tr>
              <tr>
                <td>Maio de 68</td>
                <td>França, 1968</td>
                <td>Revolução política, universitária e sexual</td>
                <td>Reforma educacional, liberalização de costumes</td>
              </tr>
              <tr>
                <td>Black Power</td>
                <td>EUA, 1960–70</td>
                <td>Orgulho negro, autonomia, fim da segregação</td>
                <td>Leis de direitos civis, consciência negra global</td>
              </tr>
              <tr>
                <td>Tropicalismo</td>
                <td>Brasil, 1967–68</td>
                <td>Fusão tropicalista, crítica à ditadura militar</td>
                <td>MPB contemporânea, pluralidade cultural brasileira</td>
              </tr>
              <tr>
                <td>Punk Rock</td>
                <td>Reino Unido, 1970s</td>
                <td>"Do it yourself", anticapitalismo, anarquismo</td>
                <td>Música independente, zines, cultura DIY</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No Brasil, a contracultura se desenvolveu sob a ditadura militar (1964–1985),
          o que conferiu a ela uma dimensão política ainda mais intensa. O{" "}
          <strong>Tropicalismo</strong>, liderado por Caetano Veloso e Gilberto Gil,
          mesclou Beatles, guitarras elétricas e ritmos brasileiros para desafiar tanto
          o conservadorismo da direita quanto o purismo folclórico da esquerda.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Maio de 1968</span>
        <h2>4. Maio de 68 e a Revolução Cultural Europeia</h2>
        <p>
          Em maio de 1968, estudantes parisienses ocuparam a Universidade de Sorbonne
          e saíram às ruas, aliando-se a trabalhadores em greve. O movimento não derrubou
          o governo De Gaulle, mas abalou profundamente a ordem simbólica da sociedade
          francesa — e ocidental. Sua influência alcançou o feminismo, o movimento gay,
          a pedagogia crítica de Paulo Freire, as lutas anticoloniais e o próprio pensamento
          sociológico (Michel Foucault, Pierre Bourdieu e Jacques Derrida foram diretamente
          marcados pelo contexto de 1968).
        </p>
        <p>
          Os pichamentos de maio de 68 tornaram-se famosos pelo teor poético e filosófico:
          "Sejam realistas, peçam o impossível"; "Proibido proibir"; "A imaginação no poder";
          "Sob as pedras, a praia". Esses slogans expressavam uma revolução cultural que ia
          além das reivindicações salariais: questionavam a autoridade nas suas formas mais
          cotidianas — na família, na escola, na sexualidade, no trabalho e na política.
        </p>
        <div className="lesson-highlight">
          <h3>Legado do Maio de 68</h3>
          <p>
            As transformações culturais de 1968 são duradouras: a liberalização sexual,
            o feminismo de segunda onda, a ecologia política, a pedagogia crítica e as
            políticas de identidade (racial, de gênero, LGBTQIA+) têm raízes no espírito
            contestador de 1968. No Brasil, o AI-5 (dezembro de 1968) foi a resposta
            autoritária da ditadura ao mesmo espírito contestador que explodiu na Europa —
            mostrando que os regimes militares latino-americanos monitoravam com atenção
            os movimentos culturais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Patrimônio Cultural</span>
        <h2>5. Patrimônio Cultural: Material e Imaterial</h2>
        <p>
          <strong>Patrimônio cultural</strong> é o conjunto de bens — tangíveis e intangíveis —
          que uma coletividade reconhece como expressão de sua identidade e memória,
          dignos de preservação para as gerações futuras. O conceito evoluiu muito ao longo
          do século XX: de uma visão restrita aos monumentos e obras de arte produzidos pelas
          elites, expandiu-se para incluir as práticas, saberes e formas de vida de grupos
          historicamente marginalizados.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Patrimônio material</h3>
            <p>Objetos físicos: monumentos, sítios arqueológicos, centros históricos, documentos, acervos museológicos, obras de arte.</p>
          </div>
          <div className="lesson-card">
            <span>🥁</span>
            <h3>Patrimônio imaterial</h3>
            <p>Saberes, ofícios, celebrações, formas de expressão e lugares de memória que não têm suporte físico fixo — existem na prática e na transmissão oral.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Patrimônio natural</h3>
            <p>Áreas naturais de valor universal excepcional — o Pantanal, a Amazônia e o Parque Nacional do Iguaçu são exemplos de patrimônio natural protegido pela UNESCO.</p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Paisagem cultural</h3>
            <p>Combinação de patrimônio natural e cultural: o Rio de Janeiro entre montanhas e mar foi reconhecido como Paisagem Cultural Urbana pela UNESCO em 2012.</p>
          </div>
        </div>
        <p>
          A <strong>Constituição Federal de 1988</strong> (arts. 215–216) foi pioneira ao
          reconhecer o patrimônio imaterial como parte integrante do patrimônio cultural
          brasileiro, incluindo "os modos de criar, fazer e viver" dos diferentes grupos
          formadores da sociedade nacional. Em 2003, a <strong>UNESCO</strong> adotou a
          "Convenção para a Salvaguarda do Patrimônio Cultural Imaterial", consolidando
          essa perspectiva internacionalmente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bens Imateriais</span>
        <h2>6. Patrimônio Imaterial Brasileiro: Casos e Registros</h2>
        <p>
          O registro do patrimônio imaterial no Brasil é realizado pelo <strong>IPHAN</strong>
          em quatro categorias: <em>Saberes</em> (conhecimentos e modos de fazer), <em>Celebrações</em>
          (rituais e festas), <em>Formas de Expressão</em> (manifestações literárias, musicais,
          plásticas, cênicas e lúdicas) e <em>Lugares</em> (mercados, feiras, santuários, praças).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Bem imaterial</th>
                <th>Categoria</th>
                <th>Registro / Reconhecimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capoeira</td>
                <td>Forma de expressão</td>
                <td>IPHAN 2008 + UNESCO 2014</td>
              </tr>
              <tr>
                <td>Frevo</td>
                <td>Celebração / música e dança</td>
                <td>UNESCO 2012</td>
              </tr>
              <tr>
                <td>Samba de Roda do Recôncavo Baiano</td>
                <td>Forma de expressão</td>
                <td>UNESCO 2005</td>
              </tr>
              <tr>
                <td>Ofício das Paneleiras de Goiabeiras</td>
                <td>Ofício e modo de fazer</td>
                <td>IPHAN 2002 (primeiro bem imaterial registrado)</td>
              </tr>
              <tr>
                <td>Carimbó</td>
                <td>Música e dança</td>
                <td>IPHAN 2014</td>
              </tr>
              <tr>
                <td>Sistema Agrícola Tradicional do Rio Negro</td>
                <td>Conhecimento ecológico</td>
                <td>IPHAN 2010</td>
              </tr>
              <tr>
                <td>Tacacá</td>
                <td>Culinária / ofício</td>
                <td>IPHAN 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Patrimônio imaterial e comunidades</h3>
          <p>
            Um dos princípios centrais da Convenção da UNESCO de 2003 é que o patrimônio imaterial
            só pode ser considerado tal se as próprias comunidades detentoras o reconhecerem como
            parte de sua identidade. Não basta que o Estado ou os especialistas decidam que algo
            é patrimônio: é preciso consulta e participação das comunidades. Isso diferencia o
            registro do patrimônio imaterial do tombamento do patrimônio material.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">IPHAN e Tombamento</span>
        <h2>7. Preservação do Patrimônio no Brasil: IPHAN e Tombamento</h2>
        <p>
          O <strong>IPHAN</strong> (Instituto do Patrimônio Histórico e Artístico Nacional),
          criado em 1937 durante o Estado Novo sob a liderança intelectual de <strong>Rodrigo Melo Franco
          de Andrade</strong> (com influência de Mário de Andrade), é o órgão federal responsável por
          identificar, documentar, proteger e promover o patrimônio cultural brasileiro. Sua criação
          foi parte de um projeto de construção da identidade nacional no período varguista.
        </p>
        <p>
          O principal instrumento de proteção do patrimônio material é o{" "}
          <strong>tombamento</strong>: ato administrativo que insere o bem em um dos quatro
          Livros do Tombo (Arqueológico e Paisagístico; Histórico; Belas Artes; Artes Aplicadas).
          O tombamento não significa que o bem não possa ser alterado — mas qualquer
          intervenção requer autorização do IPHAN. O tombamento vincula tanto o proprietário
          individual quanto o Poder Público.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Instrumento</th>
                <th>Tipo de bem</th>
                <th>Órgão responsável</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tombamento</td>
                <td>Material (edificações, acervos)</td>
                <td>IPHAN / órgãos estaduais e municipais</td>
                <td>Restrição de modificações; dever de conservação</td>
              </tr>
              <tr>
                <td>Registro</td>
                <td>Imaterial (saberes, festas, ofícios)</td>
                <td>IPHAN</td>
                <td>Documentação, salvaguarda, apoio às comunidades</td>
              </tr>
              <tr>
                <td>Lista do Patrimônio Mundial</td>
                <td>Material e natural</td>
                <td>UNESCO</td>
                <td>Reconhecimento internacional; acesso a fundos</td>
              </tr>
              <tr>
                <td>Lista do Patrimônio Imaterial da Humanidade</td>
                <td>Imaterial</td>
                <td>UNESCO</td>
                <td>Visibilidade e apoio internacional às práticas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ameaças ao Patrimônio</span>
        <h2>8. Ameaças ao Patrimônio: Especulação, Desastres e Apropriação Cultural</h2>
        <p>
          O patrimônio cultural enfrenta ameaças diversas e crescentes. A{" "}
          <strong>especulação imobiliária</strong> destrói centros históricos para construir
          empreendimentos mais rentáveis — o Rio de Janeiro e São Paulo perderam bairros históricos
          inteiros para a especulação. Os <strong>desastres ambientais</strong> representam ameaças
          catastróficas: o incêndio do Museu Nacional (Rio de Janeiro, 2018) destruiu 20 milhões
          de itens, incluindo o crânio de Luzia (o fóssil humano mais antigo das Américas).
        </p>
        <p>
          Outra ameaça é a <strong>apropriação cultural</strong>: processo pelo qual elementos
          de uma cultura (geralmente de grupos marginalizados) são adotados por outra cultura
          (geralmente hegemônica) sem reconhecimento, crédito ou compensação às comunidades de
          origem. A distinção entre apropriação e troca cultural é objeto de debate sociológico:
          a apropriação tende a ocorrer quando há assimetria de poder entre as culturas envolvidas
          e quando o elemento cultural é explorado comercialmente sem beneficiar a comunidade original.
        </p>
        <div className="lesson-highlight">
          <h3>O incêndio do Museu Nacional (2018)</h3>
          <p>
            Em setembro de 2018, o incêndio do Museu Nacional do Rio de Janeiro — o mais antigo museu
            do Brasil, fundado em 1818 por D. João VI — destruiu acervo de 20 milhões de itens,
            resultado de décadas de subfinanciamento crônico. Para a Sociologia, o museu é um "lugar
            de memória" (Pierre Nora) — espaço onde a memória coletiva se ancora materialmente. Sua
            destruição representou perda irreparável para a identidade nacional, para a ciência e para
            a memória dos povos indígenas, cujas coleções únicas foram queimadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Memória Coletiva</span>
        <h2>9. Memória Coletiva, Identidade e Patrimônio</h2>
        <p>
          O sociólogo <strong>Maurice Halbwachs</strong> demonstrou que a memória não é apenas
          individual — é fundamentalmente social. Lembramos a partir de quadros sociais (a família,
          o grupo religioso, a classe social) que nos fornecem as referências para organizar e
          interpretar o passado. A <strong>memória coletiva</strong> é um instrumento de coesão
          social — une os membros de um grupo em torno de um passado compartilhado.
        </p>
        <p>
          <strong>Pierre Nora</strong> desenvolveu o conceito de <strong>lugares de memória</strong>:
          espaços, práticas e objetos onde a memória coletiva se materializa e se ancora — monumentos,
          datas comemorativas, arquivos, museus, cemitérios. Os "lugares de memória" surgem justamente
          quando a memória viva, espontânea, se perde: quando não há mais comunidades que a guardem
          naturalmente, precisamos de instituições e objetos para preservá-la artificialmente.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗓️</span>
            <h3>Comemorações nacionais</h3>
            <p>
              Datas como o 7 de Setembro e o 13 de Maio (Abolição) são lugares de memória que constroem
              narrativas sobre a identidade nacional — sempre disputadas politicamente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Museus e arquivos</h3>
            <p>
              Guardam e selecionam o que será lembrado coletivamente — e o que será esquecido.
              Quem controla os museus controla parte da memória oficial de uma nação.
            </p>
          </div>
          <div className="lesson-card">
            <span>📿</span>
            <h3>Memória afro-brasileira</h3>
            <p>
              A invisibilidade histórica da contribuição africana nos museus brasileiros reflete e
              reproduz o racismo estrutural. Movimentos de consciência negra disputam a memória
              pública por outros marcos, como o 20 de novembro.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪶</span>
            <h3>Memória indígena</h3>
            <p>
              Povos indígenas têm formas próprias de preservação da memória — tradição oral, rituais,
              arte corporal. A ameaça aos seus territórios é também ameaça às suas memórias e
              identidades culturais.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Turismo e Cultura</span>
        <h2>10. Turismo Cultural, Mercantilização e Resistência</h2>
        <p>
          O <strong>turismo cultural</strong> pode ser tanto um instrumento de preservação do
          patrimônio quanto uma ameaça à sua autenticidade. O turismo gera recursos que podem
          financiar a conservação de sítios históricos e sustentar comunidades detentoras de
          patrimônio imaterial. Mas o <strong>turismo predatório</strong> degrada os espaços
          visitados, mercantiliza práticas culturais sagradas e expulsa comunidades originárias
          para dar lugar a infraestrutura turística.
        </p>
        <p>
          A tensão entre preservação e desenvolvimento é central nas políticas de patrimônio.
          Centros históricos tombados como <strong>Ouro Preto</strong>, <strong>Olinda</strong>
          e o <strong>Pelourinho</strong> (Salvador) enfrentam a contradição entre a necessidade
          de atrair turistas (para gerar renda) e a preservação da vida cotidiana e das
          comunidades que habitam esses espaços. A "gentrificação" de bairros históricos — onde
          o tombamento valoriza os imóveis e expulsa os moradores pobres — é uma forma perversa
          de mercantilização do patrimônio.
        </p>
        <div className="lesson-highlight">
          <h3>Patrimônio como direito cultural</h3>
          <p>
            A Constituição de 1988 estabelece que é dever do Estado e da sociedade preservar o
            patrimônio cultural — mas também que o acesso à cultura é um <strong>direito social</strong>.
            Isso significa que o patrimônio não pode ser preservado para o deleite de turistas e
            especialistas enquanto as comunidades que o criaram são excluídas. A preservação
            genuína passa pela participação e pelo benefício das comunidades detentoras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Patrimônio imaterial"
          statement={<p>Qual das alternativas a seguir é considerada patrimônio <strong>imaterial</strong> pelo IPHAN?</p>}
          options={[
            { letter: "A", text: "O Museu do Ipiranga, em São Paulo." },
            { letter: "B", text: "O Cristo Redentor, no Rio de Janeiro." },
            { letter: "C", text: "A Capoeira, como forma de expressão cultural afro-brasileira.", correct: true },
            { letter: "D", text: "O Palácio do Planalto, em Brasília." },
            { letter: "E", text: "O centro histórico de Ouro Preto." },
          ]}
          resolution={<p>A Capoeira foi registrada como patrimônio imaterial pelo IPHAN em 2008 e reconhecida pela UNESCO em 2014. Os demais itens são bens materiais (monumentos e edificações) protegidos pelo tombamento.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Constituição e patrimônio"
          statement={<p>A Constituição Federal de 1988 ampliou o conceito de patrimônio cultural ao reconhecer, além dos bens materiais, os bens imateriais. Assinale a alternativa que <strong>melhor</strong> descreve o que a Constituição inclui nessa categoria.</p>}
          options={[
            { letter: "A", text: "Apenas obras de arte tombadas pelo IPHAN." },
            { letter: "B", text: "Somente documentos históricos em arquivos públicos." },
            { letter: "C", text: "Os modos de criar, fazer e viver dos grupos formadores da sociedade brasileira.", correct: true },
            { letter: "D", text: "Exclusivamente manifestações religiosas católicas." },
            { letter: "E", text: "Apenas os bens reconhecidos pela UNESCO." },
          ]}
          resolution={<p>O Art. 216 da CF/88 define o patrimônio cultural como bens de natureza material e imaterial, incluindo "os modos de criar, fazer e viver" — reconhecendo saberes, celebrações, formas de expressão e lugares de memória das diferentes matrizes culturais formadoras da sociedade brasileira.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Tropicalismo"
          statement={<p>O Tropicalismo, movimento cultural brasileiro surgido no final dos anos 1960, caracterizou-se por:</p>}
          options={[
            { letter: "A", text: "Defender a pureza do folclore brasileiro, rejeitando influências estrangeiras." },
            { letter: "B", text: "Apoiar explicitamente a ditadura militar e seus valores conservadores." },
            { letter: "C", text: "Fundir elementos da cultura popular brasileira com vanguardas internacionais como o rock, produzindo uma crítica cultural e política.", correct: true },
            { letter: "D", text: "Restringir-se à literatura, sem repercussão na música ou nas artes visuais." },
            { letter: "E", text: "Reproduzir fielmente o Modernismo de 1922, sem inovações estéticas." },
          ]}
          resolution={<p>O Tropicalismo mesclou gêneros como samba, baião e rock, usando guitarras elétricas e alegorias carnavalescas para criticar tanto o militarismo quanto o purismo cultural de setores da esquerda. Caetano Veloso e Gilberto Gil foram seus maiores expoentes e sofreram exílio após o AI-5.</p>}
        />

        <Exercise
          level="Avançado"
          title="Contracultura e hegemonia"
          statement={
            <p>
              Para o sociólogo italiano Antonio Gramsci, a <strong>hegemonia cultural</strong> é a
              dominação exercida por uma classe social por meio do consenso, e não apenas pela
              força. Com base nesse conceito, os movimentos de contracultura dos anos 1960–70
              podem ser interpretados como:
            </p>
          }
          options={[
            { letter: "A", text: "Manifestações apolíticas que buscavam apenas inovação estética." },
            { letter: "B", text: "Disputas pelo campo cultural como espaço de resistência à hegemonia dominante, propondo novos valores e visões de mundo.", correct: true },
            { letter: "C", text: "Movimentos promovidos pelas elites para desviar a atenção das desigualdades econômicas." },
            { letter: "D", text: "Expressões do conservadorismo que defendiam a volta aos valores tradicionais." },
            { letter: "E", text: "Fenômenos exclusivamente norte-americanos sem impacto em países periféricos." },
          ]}
          resolution={<p>Usando Gramsci, a contracultura representa uma disputa pela hegemonia: ao propor novos valores (paz, liberdade sexual, antirracismo), esses movimentos desafiaram o bloco hegemônico que sustentava o capitalismo conservador do pós-guerra, abrindo fissuras no consenso dominante e preparando transformações culturais de longo prazo.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Incêndio do Museu Nacional"
          statement={
            <>
              <p>
                Em setembro de 2018, um incêndio destruiu o Museu Nacional do Rio de Janeiro,
                eliminando cerca de 20 milhões de itens do acervo, incluindo fósseis únicos,
                múmias egípcias e o crânio de "Luzia", o mais antigo fóssil humano encontrado
                nas Américas. O incidente desencadeou debate público sobre o financiamento
                e a preservação do patrimônio cultural brasileiro.
              </p>
              <p>Com base no texto e nos conhecimentos de Sociologia, assinale a afirmação correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "O episódio demonstra que o patrimônio cultural só tem valor quando pode gerar retorno econômico." },
            { letter: "B", text: "A destruição do acervo foi irrelevante, pois os bens materiais podem ser facilmente reproduzidos digitalmente." },
            { letter: "C", text: "O incêndio evidencia que a negligência com o patrimônio público é um problema exclusivo de países em desenvolvimento." },
            { letter: "D", text: "A perda do acervo representa uma ruptura na memória coletiva e na identidade nacional, evidenciando as consequências do subfinanciamento das políticas culturais.", correct: true },
            { letter: "E", text: "O evento demonstrou que apenas o patrimônio imaterial merece proteção, pois o material é substituível." },
          ]}
          resolution={<p>O incêndio do Museu Nacional expôs as consequências do abandono crônico das políticas de patrimônio. Para a Sociologia, o museu é um "lugar de memória" (Pierre Nora) — espaço onde a memória coletiva se ancora. Sua destruição representa perda irreparável para a identidade nacional, para a ciência e para a memória dos povos cujas coleções foram queimadas.</p>}
        />
      </section>
    </article>
  );
}
