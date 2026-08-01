"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 26</span>

          <h1>Humanismo</h1>

          <p>
            Do teocentrismo medieval ao antropocentrismo renascentista: compreenda
            o período de transição que transformou a cultura portuguesa no século
            XV, o surgimento do teatro com Gil Vicente, a entrada do soneto italiano
            por Sá de Miranda e a crítica social que ecoa até hoje no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto histórico</span>

        <h2>1. A Crise da Idade Média e o Nascimento do Humanismo</h2>

        <p>
          O Humanismo português se desenvolveu principalmente ao longo do século
          XV e início do XVI, período de profundas transformações na Europa
          ocidental. A Idade Média não "terminou" abruptamente: ela entrou em
          colapso lento, pressionada por crises que abalaram suas estruturas
          fundamentais. A <strong>Peste Negra</strong> (séc. XIV) matou cerca de
          um terço da população europeia e gerou questionamentos existenciais que
          a Igreja não conseguia responder satisfatoriamente. O{" "}
          <strong>sistema feudal</strong> entrou em declínio com o fortalecimento
          das cidades, do comércio e das monarquias nacionais. A autoridade
          eclesiástica se fragmentou com o <em>Cisma do Ocidente</em> (1378–1417),
          quando dois — e por vezes três — papas disputavam a legitimidade
          simultaneamente.
        </p>

        <p>
          Em Portugal, esse contexto se soma a um elemento único:{" "}
          <strong>as grandes navegações</strong>. A expansão marítima portuguesa,
          iniciada com a conquista de Ceuta em 1415 e acelerada ao longo do
          século XV, trouxe contato com outros povos, outras culturas, outras
          formas de organizar o mundo. O encontro com o diferente forçou os
          portugueses a relativizar certezas medievais. Se Deus é único e
          onipresente, por que existem tantos povos que nunca ouviram falar d'Ele?
          A pergunta não tinha resposta simples no arcabouço teocêntrico.
        </p>

        <div className="lesson-highlight">
          <h3>O que é Humanismo?</h3>
          <p>
            Humanismo é o movimento cultural, filosófico e literário que colocou
            o <strong>ser humano</strong> — sua razão, sua dignidade, sua
            experiência — no centro da reflexão intelectual, deslocando
            progressivamente a perspectiva medieval centrada em Deus (teocentrismo)
            para uma perspectiva centrada no homem (antropocentrismo). Em
            Portugal, o período abrange de meados do século XV até o início do
            Quinhentismo clássico (c. 1527).
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 180"
            width="700"
            height="180"
            aria-label="Linha do tempo do Humanismo português: da crise medieval às navegações e ao Renascimento"
          >
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <line x1="40" y1="90" x2="660" y2="90" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="80" cy="90" r="8" fill="#6366f1" />
            <text x="80" y="75" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1348</text>
            <text x="80" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Peste Negra</text>
            <circle cx="200" cy="90" r="8" fill="#6366f1" />
            <text x="200" y="75" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1415</text>
            <text x="200" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Conquista</text>
            <text x="200" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">de Ceuta</text>
            <circle cx="340" cy="90" r="8" fill="#8b5cf6" />
            <text x="340" y="75" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1516</text>
            <text x="340" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Cancioneiro</text>
            <text x="340" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">Geral</text>
            <circle cx="460" cy="90" r="8" fill="#8b5cf6" />
            <text x="460" y="75" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1517</text>
            <text x="460" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Auto da Barca</text>
            <text x="460" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">do Inferno</text>
            <circle cx="590" cy="90" r="8" fill="#ec4899" />
            <text x="590" y="75" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1527</text>
            <text x="590" y="115" textAnchor="middle" fontSize="10" fill="#4b5563">Sá de Miranda</text>
            <text x="590" y="128" textAnchor="middle" fontSize="10" fill="#4b5563">chega à Itália</text>
            <text x="350" y="165" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">Humanismo Português (séc. XV – início séc. XVI)</text>
          </svg>
          <figcaption>Linha do tempo dos principais marcos do Humanismo em Portugal.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mentalidade</span>

        <h2>2. Teocentrismo Medieval versus Antropocentrismo Emergente</h2>

        <p>
          Compreender o Humanismo exige entender o contraste entre duas visões
          de mundo que coexistiram e se tensionaram durante o período. Não houve
          uma ruptura instantânea: o teocentrismo medieval residual persistiu —
          especialmente em Portugal, país de forte vocação religiosa — enquanto
          o antropocentrismo emergente ganhava espaço. Gil Vicente, por exemplo,
          é humanista mas jamais abandona a moral cristã; sua crítica social é
          feita <em>dentro</em> do horizonte religioso, não contra ele.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Teocentrismo Medieval</th>
                <th>Antropocentrismo Humanista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centro do universo</td>
                <td>Deus</td>
                <td>O ser humano</td>
              </tr>
              <tr>
                <td>Autoridade do conhecimento</td>
                <td>Escrituras e Igreja</td>
                <td>Razão e experiência</td>
              </tr>
              <tr>
                <td>Finalidade da vida</td>
                <td>Salvação da alma</td>
                <td>Realização terrena + salvação</td>
              </tr>
              <tr>
                <td>Arte e literatura</td>
                <td>Glorificação de Deus</td>
                <td>Retrato crítico da sociedade</td>
              </tr>
              <tr>
                <td>Referência cultural</td>
                <td>Bíblia, santos, doutores da Igreja</td>
                <td>Greco-romana + cristã</td>
              </tr>
              <tr>
                <td>Postura diante do corpo</td>
                <td>Negação, ascetismo</td>
                <td>Valorização, beleza clássica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção para o ENEM</h3>
          <p>
            O ENEM frequentemente apresenta textos humanistas e pede que o
            candidato identifique traços de transição — ou seja, momentos em que
            o texto <strong>mistura</strong> valores medievais (fé, moralidade
            cristã) com valores humanistas (crítica social, valorização do
            indivíduo). Reconhecer essa coexistência é a chave da interpretação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Europa e Portugal</span>

        <h2>3. Quattrocento, Influência Italiana e as Academias Humanistas</h2>

        <p>
          O termo <strong>Quattrocento</strong> (século XV em italiano) designa
          o período em que o Humanismo floresceu primeiro na Itália, antes de se
          irradiar pela Europa. Três gigantes italianos são fundamentais para
          entender essa difusão:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌹</span>
            <h3>Petrarca (1304–1374)</h3>
            <p>
              Considerado o "pai do Humanismo". Seus <em>Sonetos para Laura</em>{" "}
              estabeleceram o modelo do soneto petrarquiano: amor idealizado,
              sofrimento amoroso, forma fixa (14 versos, decassílabos). Influenciou
              diretamente Sá de Miranda e Camões.
            </p>
          </div>

          <div className="lesson-card">
            <span>📜</span>
            <h3>Boccaccio (1313–1375)</h3>
            <p>
              Autor do <em>Decamerão</em>, obra que narra histórias mundanas com
              humor, sensualidade e crítica ao clero — espírito próximo ao das
              farsas vicentinas. Sua prosa realista influenciou a narrativa
              europeia por séculos.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Dante (1265–1321)</h3>
            <p>
              Autor da <em>Divina Comédia</em>, obra de transição entre o mundo
              medieval e o humanista. Escreveu em italiano vulgar (não em latim),
              reivindicando dignidade literária para a língua popular — gesto que
              Gil Vicente repetiria em português.
            </p>
          </div>
        </div>

        <p>
          Em Portugal, o Humanismo se consolidou nas <strong>academias humanistas</strong>{" "}
          da corte — ambientes de debate intelectual patrocinados pelos reis e
          nobres. D. João II e D. Manuel I foram patronos das artes e das letras.
          A corte portuguesa atraiu sábios, artistas e exploradores; era um
          ambiente cosmopolita onde o latim clássico conviveu com o português
          renascentista e o castelhano. Nesse contexto, o próprio{" "}
          <strong>Garcia de Resende</strong> organizou o{" "}
          <em>Cancioneiro Geral</em> (1516), antologia que reuniu poemas de mais
          de 280 autores, documentando a produção lírica da corte manuelina —
          ainda marcada pela <em>medida velha</em> (redondilhas de 5 ou 7
          sílabas) que logo seria contestada pela <em>medida nova</em> italiana.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teatro</span>

        <h2>4. Gil Vicente: Pai do Teatro Português e Brasileiro</h2>

        <p>
          <strong>Gil Vicente</strong> (c. 1465–1536) é o dramaturgo mais
          importante do Humanismo português e é considerado o fundador do teatro
          em língua portuguesa — e, por extensão, do teatro brasileiro, já que
          Portugal levou sua tradição teatral para o Brasil colonial. Funcionário
          e artista da corte, Vicente produziu cerca de{" "}
          <strong>44 peças</strong> ao longo de quase quarenta anos de atividade
          (1502–1536), escrevendo em <strong>português</strong>,{" "}
          <strong>castelhano</strong> e misturando as duas línguas (obras
          bilingues).
        </p>

        <div className="math-block">
          <h3>Dados biográficos essenciais</h3>
          <ul>
            <li>Nascimento: c. 1465 (data incerta) — provável origem em Guimarães ou Lisboa</li>
            <li>Atuação: dramaturgo, ator, diretor e músico da corte de D. Manuel I e D. João III</li>
            <li>Estreia: <em>Monólogo do Vaqueiro</em> (1502), apresentado para a rainha D. Maria de Castela</li>
            <li>Produção: 44 peças catalogadas — autos, farsas e tragicomédias</li>
            <li>Morte: c. 1536</li>
          </ul>
        </div>

        <p>
          Sua obra é marcada pela <strong>mistura de registros</strong>: Gil
          Vicente transita entre o culto e o popular, entre o sagrado e o
          profano, entre a língua refinada da nobreza e o linguajar rústico dos
          camponeses. Essa polifonia social é um dos elementos mais valorizados
          pelos estudos literários e pelo ENEM.
        </p>

        <div className="lesson-highlight">
          <h3>As três categorias da obra vicentina</h3>
          <p>
            A produção de Gil Vicente é tradicionalmente dividida em três grandes
            categorias, cada uma com características e propósitos distintos:
          </p>
          <ul>
            <li>
              <strong>Autos de moralidade</strong> — alegorias morais e religiosas
              com finalidade didática e crítica
            </li>
            <li>
              <strong>Farsas</strong> — peças cômicas e satíricas sobre costumes,
              o casamento e a hipocrisia social
            </li>
            <li>
              <strong>Tragicomédias</strong> — peças que mesclam elementos trágicos
              e cômicos, frequentemente de temática cavaleiresca ou pastoril
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Auto da Barca do Inferno</span>

        <h2>5. Autos de Moralidade: Alegoria, Morte e Crítica Social</h2>

        <p>
          O <strong>Auto da Barca do Inferno</strong> (1517) é a obra mais
          estudada de Gil Vicente e a mais cobrada no ENEM. Trata-se de um{" "}
          <strong>auto de moralidade</strong> — um gênero dramático de origem
          medieval que usa personagens alegóricos para transmitir lições morais.
          A peça integra a <em>Trilogia das Barcas</em>, ao lado de{" "}
          <em>Auto da Barca do Purgatório</em> e <em>Auto da Barca da Glória</em>.
        </p>

        <p>
          O enredo é simples e poderoso: almas de mortos chegam a um rio (o{" "}
          <strong>rio da morte</strong>, inspirado no Estige da mitologia grega e
          na figura de Caronte, o barqueiro dos mortos) e são interpeladas por
          dois barqueiros — o <strong>Diabo</strong> (que convida para a barca
          do Inferno) e o <strong>Anjo</strong> (que guarda a barca da Glória).
          Cada alma revela sua conduta em vida ao interagir com os barqueiros,
          e a sentença fica implícita na trajetória de cada personagem.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Personagem-tipo</th>
                <th>Representação social</th>
                <th>Destino</th>
                <th>Crítica implícita</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fidalgo</td>
                <td>Nobreza arrogante</td>
                <td>Inferno</td>
                <td>Vaidade e ociosidade</td>
              </tr>
              <tr>
                <td>Onzeneiro</td>
                <td>Usurário (cobra juros)</td>
                <td>Inferno</td>
                <td>Ganância e desonestidade</td>
              </tr>
              <tr>
                <td>Parvo (Joaninho)</td>
                <td>Louco/inocente</td>
                <td>Glória (implícita)</td>
                <td>Inocência que salva</td>
              </tr>
              <tr>
                <td>Sapateiro</td>
                <td>Artesão desonesto</td>
                <td>Inferno</td>
                <td>Fraude no comércio</td>
              </tr>
              <tr>
                <td>Frade</td>
                <td>Clérigo hipócrita</td>
                <td>Inferno</td>
                <td>Corrupção do clero</td>
              </tr>
              <tr>
                <td>Corregedor/Juiz</td>
                <td>Funcionário corrupto</td>
                <td>Inferno</td>
                <td>Corrupção da justiça</td>
              </tr>
              <tr>
                <td>Cavaleiros (Quatro)</td>
                <td>Soldados cruzados</td>
                <td>Glória</td>
                <td>Honra do serviço a Deus</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Conceito de personagem-tipo</h3>
          <p>
            Os personagens vicentinos não são indivíduos com psicologia
            complexa: são <strong>tipos sociais</strong>, ou seja, representações
            de categorias inteiras — "o frade corrupto", "o nobre ocioso", "o
            comerciante desonesto". Essa técnica, herdada do teatro medieval,
            permite que a crítica atinja não uma pessoa específica, mas uma
            classe inteira. É a essência da sátira social vicentina.
          </p>
        </div>

        <div className="math-block">
          <h3>Alegoria: definição técnica</h3>
          <p>
            <strong>Alegoria</strong> é a representação de conceitos abstratos
            (virtude, vício, morte, salvação) por meio de personagens, objetos
            ou situações concretas. No Auto da Barca, a travessia do rio
            representa a passagem da vida para a morte; as duas barcas representam
            os dois destinos da alma; os barqueiros representam forças morais
            opostas. Identificar a alegoria é habilidade fundamental para o ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Farsas</span>

        <h2>6. Farsas Vicentinas: Sátira, Casamento e Vida Cotidiana</h2>

        <p>
          As <strong>farsas</strong> de Gil Vicente são peças cômicas e satíricas
          focadas no cotidiano, nos costumes e nas relações humanas — especialmente
          o casamento e a hipocrisia social. Enquanto os autos de moralidade têm
          tom mais solene e didático, as farsas exploram o humor, o equívoco e a
          ironia para criticar comportamentos.
        </p>

        <p>
          A obra mais representativa é a{" "}
          <strong>Farsa de Inês Pereira</strong> (1523). Inês é uma jovem que
          sonha casar com um homem culto e refinado, mas acaba se desencantando
          com o pretendente letrado (Pero Marques, obtuso) e com o marido que
          escolhe depois (um escudeiro controlador). A sátira recai sobre a
          idealização ingênua do casamento e sobre os jogos de interesse que
          regem as relações conjugais na sociedade da época.
        </p>

        <div className="lesson-highlight">
          <h3>Frase célebre da Farsa de Inês Pereira</h3>
          <p>
            <em>"Mais quero asno que me carregue que cavalo que me derrube."</em>
          </p>
          <p>
            O provérbio popular, dito por Inês, resume sua lição amarga: prefere
            um marido simples e submisso a um homem nobre e controlador. A frase
            concentra a crítica vicentina ao ideal romanticizado do casamento e
            ilustra a sabedoria popular que permeia toda a farsa — um traço
            típico da <strong>mistura de registros culto e popular</strong> em Gil
            Vicente.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💍</span>
            <h3>Casamento satirizado</h3>
            <p>
              As farsas expõem os interesses materiais, as ilusões e as
              frustrações do casamento na sociedade portuguesa quinhentista.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎭</span>
            <h3>Linguagem popular</h3>
            <p>
              Provérbios, ditos populares e gírias convivem com o português
              culto, criando o efeito cômico e a crítica social simultânea.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪞</span>
            <h3>Espelho da sociedade</h3>
            <p>
              As farsas funcionam como um espelho deformante que expõe vícios
              e contradições do cotidiano — função que o teatro mantém até hoje.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tragicomédias</span>

        <h2>7. Tragicomédias e a Dimensão Cavaleiresca</h2>

        <p>
          As <strong>tragicomédias</strong> de Gil Vicente mesclam elementos
          trágicos e cômicos, frequentemente recorrendo a temas da literatura
          cavaleiresca e pastoril. O <em>Amadis de Gaula</em> é um exemplo
          representativo: trata da aventura de um cavaleiro cortês, com suas
          provações, amores e combates — mas com toques de humor e crítica.
        </p>

        <p>
          Outras tragicomédias notáveis incluem <em>Dom Duardos</em> (escrita
          em castelhano) e <em>Floresta de Enganos</em>. O gênero misto
          corresponde ao próprio espírito do Humanismo: uma época que não é nem
          puramente medieval nem puramente renascentista, mas carrega traços de
          ambas as épocas numa síntese tensa e criativa.
        </p>

        <div className="lesson-highlight">
          <h3>Recursos estilísticos de Gil Vicente</h3>
          <ul>
            <li>
              <strong>Alegoria:</strong> personagens e situações que representam
              conceitos morais abstratos
            </li>
            <li>
              <strong>Personagem-tipo:</strong> figuras que representam categorias
              sociais, não indivíduos únicos
            </li>
            <li>
              <strong>Mistura de registros:</strong> linguagem culta da nobreza +
              linguagem popular dos camponeses e artesãos
            </li>
            <li>
              <strong>Crítica aos poderosos:</strong> clero, nobreza, funcionários
              régios são alvos da sátira
            </li>
            <li>
              <strong>Humor e ironia:</strong> instrumentos da crítica social
            </li>
            <li>
              <strong>Bilinguismo:</strong> peças em português, castelhano ou ambos
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Medida nova vs. velha</span>

        <h2>8. Sá de Miranda e a Revolução Formal: Medida Nova e Medida Velha</h2>

        <p>
          Enquanto Gil Vicente domina o teatro humanista, <strong>Sá de Miranda</strong>{" "}
          (1487–1558) opera uma revolução silenciosa na poesia lírica. Após
          viajar à Itália (1521–1526), ele retornou a Portugal com uma bagagem
          literária transformadora: o modelo petrarquiano do <strong>soneto</strong>{" "}
          e o verso <strong>decassílabo</strong> (10 sílabas poéticas), que
          batizou de <em>medida nova</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Medida Velha</th>
                <th>Medida Nova</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem</td>
                <td>Tradição trovadoresca ibérica</td>
                <td>Itália (Petrarca)</td>
              </tr>
              <tr>
                <td>Verso predominante</td>
                <td>Redondilha maior (7 síl.) ou menor (5 síl.)</td>
                <td>Decassílabo (10 síl.)</td>
              </tr>
              <tr>
                <td>Forma principal</td>
                <td>Cantigas, vilancetes, trovas</td>
                <td>Soneto (14 versos: 2 quartetos + 2 tercetos)</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Popular, musical, oral</td>
                <td>Erudito, reflexivo, escrito</td>
              </tr>
              <tr>
                <td>Principais autores</td>
                <td>Trovadores, Garcia de Resende, Gil Vicente</td>
                <td>Sá de Miranda, Camões (Quinhentismo)</td>
              </tr>
              <tr>
                <td>Recepção inicial</td>
                <td>Consolidada, tradicional</td>
                <td>Resistência dos conservadores</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A introdução da medida nova foi controversa: poetas conservadores
          defendiam a tradição ibérica das redondilhas. Mas a medida nova
          venceu: o soneto decassílabo se tornou a forma dominante da poesia
          lírica portuguesa e foi levada ao ápice por Camões no{" "}
          <em>Quinhentismo</em>. Sá de Miranda é, portanto, a ponte entre o
          Humanismo e o Classicismo português.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cancioneiro Geral</span>

        <h2>9. Garcia de Resende e o Cancioneiro Geral (1516)</h2>

        <p>
          <strong>Garcia de Resende</strong> (c. 1470–1536) foi poeta, cronista
          e secretário de D. João II. Sua maior contribuição para a literatura
          portuguesa foi a organização do <strong>Cancioneiro Geral</strong>,
          publicado em 1516 — a maior antologia poética da época, reunindo cerca
          de <strong>900 poemas</strong> de mais de 280 autores, entre nobres,
          clérigos e funcionários régios.
        </p>

        <p>
          O Cancioneiro Geral é um documento histórico-literário precioso: revela
          o gosto poético da corte manuelina, ainda dominado pela{" "}
          <em>medida velha</em> (redondilhas), mas já com alguns sinais de
          mudança. É a fotografia da poesia humanista portuguesa no seu pico
          antes da revolução formal trazida por Sá de Miranda.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>900 poemas</h3>
            <p>
              A maior coleção de poesia cortesã portuguesa do período humanista,
              reunida por Garcia de Resende.
            </p>
          </div>

          <div className="lesson-card">
            <span>👑</span>
            <h3>Corte manuelina</h3>
            <p>
              Reflete o ambiente intelectual da corte de D. Manuel I, período
              de apogeu das navegações e do poder português.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎵</span>
            <h3>Medida velha</h3>
            <p>
              Predominam as redondilhas e vilancetes — o canto ainda era
              inseparável da poesia nesse momento.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌉</span>
            <h3>Ponte histórica</h3>
            <p>
              Publicado um ano antes do Auto da Barca do Inferno, documenta o
              momento de transição antes da medida nova.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese visual</span>

        <h2>10. Mapa do Humanismo Português: Autores e Obras</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 320"
            width="720"
            height="320"
            aria-label="Mapa esquemático do Humanismo português com autores, obras e características principais"
          >
            <rect x="270" y="20" width="180" height="50" rx="10" fill="#6366f1" />
            <text x="360" y="42" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">HUMANISMO</text>
            <text x="360" y="58" textAnchor="middle" fontSize="11" fill="#e0e7ff">Séc. XV – início Séc. XVI</text>

            <line x1="180" y1="70" x2="360" y2="70" stroke="#6366f1" strokeWidth="2" />
            <line x1="360" y1="70" x2="540" y2="70" stroke="#6366f1" strokeWidth="2" />
            <line x1="180" y1="70" x2="180" y2="120" stroke="#6366f1" strokeWidth="2" />
            <line x1="360" y1="70" x2="360" y2="120" stroke="#6366f1" strokeWidth="2" />
            <line x1="540" y1="70" x2="540" y2="120" stroke="#6366f1" strokeWidth="2" />

            <rect x="80" y="120" width="200" height="60" rx="8" fill="#8b5cf6" />
            <text x="180" y="142" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Gil Vicente</text>
            <text x="180" y="158" textAnchor="middle" fontSize="10" fill="#ede9fe">Teatro (autos, farsas,</text>
            <text x="180" y="172" textAnchor="middle" fontSize="10" fill="#ede9fe">tragicomédias)</text>

            <rect x="260" y="120" width="200" height="60" rx="8" fill="#0891b2" />
            <text x="360" y="142" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Sá de Miranda</text>
            <text x="360" y="158" textAnchor="middle" fontSize="10" fill="#cffafe">Medida nova (soneto,</text>
            <text x="360" y="172" textAnchor="middle" fontSize="10" fill="#cffafe">decassílabo)</text>

            <rect x="440" y="120" width="200" height="60" rx="8" fill="#059669" />
            <text x="540" y="142" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Garcia de Resende</text>
            <text x="540" y="158" textAnchor="middle" fontSize="10" fill="#d1fae5">Cancioneiro Geral (1516)</text>
            <text x="540" y="172" textAnchor="middle" fontSize="10" fill="#d1fae5">Medida velha</text>

            <line x1="130" y1="180" x2="130" y2="220" stroke="#8b5cf6" strokeWidth="2" />
            <line x1="230" y1="180" x2="230" y2="220" stroke="#8b5cf6" strokeWidth="2" />

            <rect x="40" y="220" width="170" height="50" rx="6" fill="#c4b5fd" />
            <text x="125" y="240" textAnchor="middle" fontSize="10" fill="#3b0764" fontWeight="bold">Auto da Barca</text>
            <text x="125" y="254" textAnchor="middle" fontSize="10" fill="#3b0764">do Inferno (1517)</text>
            <text x="125" y="265" textAnchor="middle" fontSize="9" fill="#3b0764">Alegoria + personagem-tipo</text>

            <rect x="220" y="220" width="170" height="50" rx="6" fill="#c4b5fd" />
            <text x="305" y="240" textAnchor="middle" fontSize="10" fill="#3b0764" fontWeight="bold">Farsa de Inês Pereira</text>
            <text x="305" y="254" textAnchor="middle" fontSize="10" fill="#3b0764">(1523)</text>
            <text x="305" y="265" textAnchor="middle" fontSize="9" fill="#3b0764">Sátira ao casamento</text>

            <text x="360" y="305" textAnchor="middle" fontSize="11" fill="#6366f1" fontWeight="bold">Contexto: crise feudal · expansão marítima · Quattrocento italiano</text>
          </svg>
          <figcaption>Mapa esquemático dos principais autores e obras do Humanismo português.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Resumo dos pontos fundamentais para o ENEM</h3>
          <ul>
            <li>
              Humanismo = transição Idade Média → Renascimento (séc. XV – início séc. XVI em Portugal)
            </li>
            <li>
              Causas: crise do feudalismo, Peste Negra, expansão marítima, influência italiana (Quattrocento)
            </li>
            <li>
              Teocentrismo medieval coexistindo com antropocentrismo emergente
            </li>
            <li>
              <strong>Gil Vicente</strong> = pai do teatro português; autos (alegoria + personagem-tipo), farsas (sátira social), tragicomédias
            </li>
            <li>
              <em>Auto da Barca do Inferno</em> (1517): crítica moral ao clero, nobreza e corruptos
            </li>
            <li>
              <em>Farsa de Inês Pereira</em> (1523): sátira ao casamento; "mais quero asno que me carregue…"
            </li>
            <li>
              <strong>Sá de Miranda</strong>: introduz medida nova (soneto + decassílabo) vs. medida velha (redondilha)
            </li>
            <li>
              <strong>Garcia de Resende</strong>: <em>Cancioneiro Geral</em> (1516) — antologia poética da corte manuelina
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Período do Humanismo"
          statement={
            <p>
              O Humanismo português desenvolveu-se principalmente no século XV e
              início do XVI. Assinale a alternativa que melhor define esse
              período histórico-literário:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ruptura total e imediata com a mentalidade medieval, instaurando o pensamento laico.",
            },
            {
              letter: "b",
              text: "Período de transição entre a mentalidade teocêntrica medieval e o antropocentrismo renascentista, marcado por tensões e coexistência de valores.",
              correct: true,
            },
            {
              letter: "c",
              text: "Retorno nostálgico aos valores da Antiguidade Clássica, com abandono do cristianismo.",
            },
            {
              letter: "d",
              text: "Movimento exclusivamente poético, sem manifestações teatrais ou em prosa.",
            },
          ]}
          resolution={
            <p>
              O Humanismo não foi uma ruptura abrupta, mas uma transição: valores
              medievais (fé cristã, moralidade religiosa) coexistiram com valores
              emergentes (razão, crítica social, valorização humana). A alternativa
              B captura essa dualidade essencial. As demais distorcem o período:
              não houve abandono do cristianismo (A e C são incorretas), e o
              Humanismo abrange teatro, poesia e prosa (D é incorreta).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Personagem-tipo no Auto da Barca do Inferno"
          statement={
            <p>
              No <em>Auto da Barca do Inferno</em>, Gil Vicente faz o Frade
              chegar ao rio da morte carregando uma religiosa (freira) e uma
              viola, sendo enviado para a barca do Diabo. Que recurso literário
              e que objetivo crítico essa cena exemplifica?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Uso da hipérbole para exaltar a vida religiosa, mostrando que os frades eram os mais devotos da sociedade.",
            },
            {
              letter: "b",
              text: "Uso do personagem-tipo para criticar a hipocrisia e a corrupção moral do clero, representando um grupo social inteiro, não um indivíduo.",
              correct: true,
            },
            {
              letter: "c",
              text: "Uso da metonímia para indicar que toda a Igreja estava salva, sendo a viola símbolo de devoção.",
            },
            {
              letter: "d",
              text: "Uso do monólogo interior para revelar os conflitos psicológicos individuais de um frade específico.",
            },
          ]}
          resolution={
            <p>
              O Frade vicentino não é um personagem com psicologia individual:
              ele é um <strong>tipo social</strong> — representa o clero hipócrita
              que prega virtude mas vive em luxúria e corrupção. A viola (símbolo
              de prazer mundano) e a religiosa (relação imprópria) são atributos
              do "frade corrupto" como categoria. Esse é o núcleo da técnica do
              personagem-tipo: a crítica atinge uma classe inteira, não um padre
              específico. Monólogo interior (D) é técnica da narrativa moderna;
              hipérbole (A) e metonímia (C) não descrevem o recurso central.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Medida nova versus medida velha"
          statement={
            <p>
              Sá de Miranda, ao retornar da Itália, introduziu em Portugal a
              chamada <em>medida nova</em>. Compare as duas tradições métricas
              e assinale a afirmativa correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A medida velha era composta por decassílabos e havia sido adotada pelos trovadores medievais; a medida nova usava redondilhas de influência árabe.",
            },
            {
              letter: "b",
              text: "A medida nova (soneto petrarquiano, decassílabo) conviveu tensionalmente com a medida velha (redondilhas), sendo o conflito entre ambas uma das marcas do Humanismo tardio português.",
              correct: true,
            },
            {
              letter: "c",
              text: "A medida nova foi universalmente aceita de imediato, substituindo em poucos anos toda a produção poética em redondilhas.",
            },
            {
              letter: "d",
              text: "O Cancioneiro Geral de Garcia de Resende já adotava predominantemente a medida nova, antecipando Sá de Miranda.",
            },
          ]}
          resolution={
            <p>
              A introdução da medida nova por Sá de Miranda gerou resistência dos
              poetas conservadores que defendiam a tradição ibérica das
              redondilhas. Houve um período de coexistência tensa entre as duas
              tradições — traço típico do Humanismo tardio. O Cancioneiro Geral
              (1516) ainda era dominado pela medida velha (D é falsa). A
              aceitação não foi imediata nem universal (C é falsa). A descrição
              das métricas em A está invertida.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Alegoria e crítica social"
          statement={
            <p>
              Leia o trecho adaptado do <em>Auto da Barca do Inferno</em>:
              <br />
              <br />
              <em>
                "DIABO — Ó Parvo, entra ca dentro! / JOANINHO — Não posso, que
                sou muito leve. / DIABO — Entra, entra! / JOANINHO — Não sei
                donde venho nem donde vou."
              </em>
              <br />
              <br />
              O personagem do Parvo (Joaninho), ao ser rejeitado pelo Diabo e
              aceito na barca dos inocentes, cumpre que função alegórica na obra?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Representa a estupidez humana que, por ignorância, acaba condenada — reforçando a visão pessimista de Gil Vicente sobre o povo.",
            },
            {
              letter: "b",
              text: "Representa a inocência que, por não ter consciência do pecado, escapa da condenação — uma crítica implícita aos 'sábios' hipócritas que se condenam apesar do saber.",
              correct: true,
            },
            {
              letter: "c",
              text: "Representa o clero ignorante que, por não saber ler, acaba salvo por acidente, sem mérito moral.",
            },
            {
              letter: "d",
              text: "Não tem função alegórica; é apenas um personagem cômico inserido para aliviar a tensão da peça.",
            },
          ]}
          resolution={
            <p>
              O Parvo é uma das alegorias mais sofisticadas de Gil Vicente: sua
              <strong> inocência</strong> — expressa na frase "não sei donde venho
              nem donde vou" — é justamente o que o salva. Enquanto o Fidalgo,
              o Frade e o Onzeneiro, que sabem distinguir o bem do mal, escolhem
              o vício e se condenam, o Parvo, sem essa consciência, não peca
              intencionalmente. A alegoria inverte a lógica: os ignorantes-inocentes
              superam os "sábios"-hipócritas. Isso é uma crítica aguda à nobreza,
              ao clero e à burguesia letrada que usa o conhecimento para justificar
              a corrupção.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Humanismo, expansão marítima e visão de mundo"
          statement={
            <p>
              Um historiador afirma: <em>"As grandes navegações portuguesas do
              século XV não foram apenas uma façanha econômica e geográfica;
              foram também um abalo epistemológico que contribuiu para minar as
              certezas do pensamento medieval."</em>
              <br />
              <br />
              Com base no contexto do Humanismo português, qual relação essa
              afirmação estabelece entre as navegações e a transformação cultural
              do período?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As navegações reforçaram o teocentrismo medieval, pois confirmaram que Deus criou um mundo maior e mais glorioso do que se pensava.",
            },
            {
              letter: "b",
              text: "As navegações foram irrelevantes para a literatura humanista, pois Gil Vicente e Sá de Miranda ignoraram completamente o tema das descobertas.",
            },
            {
              letter: "c",
              text: "O contato com povos desconhecidos e novas geografias desafiou a visão de mundo medieval centrada na Europa cristã, estimulando o questionamento racional e o interesse pela experiência humana concreta — traços centrais do Humanismo.",
              correct: true,
            },
            {
              letter: "d",
              text: "As navegações apenas enriqueceram Portugal materialmente, sem qualquer impacto na mentalidade ou na produção literária do período.",
            },
          ]}
          resolution={
            <p>
              O enriquecimento material das navegações é óbvio, mas o impacto
              intelectual foi igualmente profundo. O encontro com culturas que
              nunca haviam ouvido falar do Deus cristão, a experiência de oceanos
              desconhecidos e de povos com formas de vida radicalmente diferentes
              forçou os portugueses a relativizar certezas medievais. A questão
              "como explicar a existência desses povos dentro de uma visão
              teocêntrica?" não tinha resposta fácil. Esse abalo epistemológico
              alimentou o interesse pela razão e pela experiência como fontes de
              conhecimento — essência do antropocentrismo humanista. As demais
              alternativas ou simplificam (A) ou negam (B e D) essa relação.
            </p>
          }
        />
      </section>
    </article>
  );
}
