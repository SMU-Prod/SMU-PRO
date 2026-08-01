"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 2</span>
          <h1>O que é Sociologia? Origem, objeto de estudo e importância para a compreensão da sociedade</h1>
          <p>
            A Sociologia nasceu da necessidade de compreender as profundas transformações que abalaram
            a Europa no século XIX. Entender sua origem é entender o mundo moderno — e a chave para
            interpretar questões do ENEM sobre sociedade, poder, cultura e desigualdade com rigor científico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto histórico</span>
        <h2>1. O nascimento da Sociologia: um mundo em transformação</h2>
        <p>
          A Sociologia não surgiu do acaso. Ela é filha de dois grandes processos históricos que
          destruíram a ordem tradicional europeia: a <strong>Revolução Industrial</strong> (iniciada
          na Inglaterra em meados do século XVIII) e a <strong>Revolução Francesa</strong> (1789).
          Juntas, essas revoluções produziram uma crise social sem precedentes: o proletariado urbano
          vivia em condições degradantes nas fábricas, as cidades cresciam sem planejamento, e as
          antigas respostas religiosas e filosóficas pareciam insuficientes para explicar o caos social.
        </p>
        <p>
          Nesse cenário, pensadores passaram a buscar uma <strong>ciência da sociedade</strong> —
          uma disciplina que estudasse os fenômenos coletivos com o mesmo rigor com que a física
          estudava a natureza. Era preciso compreender por que a sociedade estava em crise e como
          restabelecer a ordem em bases racionais.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Industrialização</h3>
            <p>Êxodo rural massivo, formação do proletariado urbano, condições de trabalho degradantes e nova divisão do trabalho que fragmentou as comunidades tradicionais.</p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Urbanização acelerada</h3>
            <p>Cidades superlotadas, sem saneamento, com criminalidade e epidemias — questões sociais urgentes sem respostas nas tradições religiosas ou filosóficas anteriores.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Crise das instituições tradicionais</h3>
            <p>A Igreja e a monarquia absoluta perderam autoridade. Surgiu a necessidade de novas bases — racionais e científicas — para a ordem social e a legitimidade política.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Iluminismo e ciência</h3>
            <p>A crença na razão e no método científico como ferramentas para compreender e transformar o mundo social foi o solo cultural que tornou possível o surgimento da Sociologia.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição e autonomia</span>
        <h2>2. O que é Sociologia e como ela se diferencia de outras ciências</h2>
        <p>
          <strong>Sociologia</strong> é a ciência que estuda a vida social humana — as relações,
          estruturas, instituições e processos que organizam a convivência coletiva. Diferente da
          Psicologia (que foca no indivíduo isolado), a Sociologia se interessa pelo indivíduo
          <em> em relação</em>: como ele é formado pela sociedade e como, ao mesmo tempo, contribui
          para transformá-la.
        </p>
        <p>
          A Sociologia também se distingue do <strong>senso comum</strong> — o conjunto de crenças
          e explicações espontâneas que as pessoas têm sobre a sociedade. Enquanto o senso comum
          tende a naturalizar as desigualdades e a reproduzir preconceitos, a Sociologia questiona
          o que parece "óbvio" e busca explicações sistemáticas, baseadas em dados e em teorias testáveis.
        </p>
        <div className="lesson-highlight">
          <h3>Sociologia vs. Filosofia Social</h3>
          <p>
            Antes da Sociologia, filósofos como Platão, Maquiavel e Rousseau já refletiam sobre a
            sociedade — mas de forma especulativa. A Sociologia se diferencia por exigir
            <strong> dados, observação sistemática e verificação</strong> das afirmações. Durkheim
            foi quem mais insistiu nessa autonomia, ao afirmar que "os fatos sociais devem ser
            tratados como coisas" — ou seja, com o mesmo rigor com que o cientista trata fenômenos naturais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Auguste Comte</span>
        <h2>3. Auguste Comte: o criador do termo "Sociologia"</h2>
        <p>
          O filósofo francês <strong>Auguste Comte</strong> (1798–1857) cunhou o termo "Sociologia"
          e defendeu que a sociedade poderia ser estudada com o mesmo rigor das ciências naturais.
          Ele inicialmente chamou a disciplina de "Física Social" antes de adotar o neologismo
          "Sociologia" (do latim <em>socius</em> + grego <em>logos</em>: "estudo da sociedade").
        </p>
        <p>
          Comte criou o <strong>Positivismo</strong>: a ideia de que o único conhecimento verdadeiro
          é o conhecimento científico, verificável pela observação e pelo experimento. Para ele,
          a sociedade passava por três estágios evolutivos — teológico, metafísico e positivo —
          e a Sociologia seria a ciência que completaria essa trajetória rumo à ordem racional.
          Sua influência no Brasil foi enorme: as palavras "Ordem e Progresso" na bandeira
          nacional são uma síntese do pensamento positivista.
        </p>
        <div className="lesson-highlight">
          <h3>Comte e a hierarquia das ciências</h3>
          <p>
            Comte organizou as ciências em ordem crescente de complexidade: Matemática → Astronomia →
            Física → Química → Biologia → Sociologia. Para ele, a Sociologia era a "rainha das ciências"
            por estudar o fenômeno mais complexo e por depender de todas as outras como fundamento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Os fundadores clássicos</span>
        <h2>4. Marx, Durkheim e Weber: os três paradigmas fundadores</h2>
        <p>
          Embora Comte tenha criado o nome, foram três outros pensadores que estabeleceram os grandes
          paradigmas que ainda orientam a Sociologia até hoje. Conhecer a diferença entre eles é
          essencial para o ENEM, que frequentemente testa a capacidade de associar corretamente
          autores e conceitos.
        </p>
        <p>
          É importante lembrar que Marx, Durkheim e Weber não apenas descreviam a sociedade — cada
          um tinha uma concepção diferente do <em>que é</em> a sociedade e de <em>como estudá-la</em>.
          Essas diferenças metodológicas e teóricas têm consequências práticas para a análise de qualquer
          fenômeno social contemporâneo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pensador</th>
                <th>Período</th>
                <th>Conceito central</th>
                <th>Visão da sociedade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Auguste Comte</strong></td>
                <td>1798–1857</td>
                <td>Positivismo / Lei dos Três Estados</td>
                <td>A sociedade evolui em etapas rumo à ordem racional e científica</td>
              </tr>
              <tr>
                <td><strong>Karl Marx</strong></td>
                <td>1818–1883</td>
                <td>Materialismo histórico / Luta de classes</td>
                <td>A história é movida pelo conflito entre classes sociais antagônicas; economia determina tudo</td>
              </tr>
              <tr>
                <td><strong>Émile Durkheim</strong></td>
                <td>1858–1917</td>
                <td>Fato social / Solidariedade / Anomia</td>
                <td>A sociedade é uma realidade exterior e coercitiva sobre o indivíduo; foco na coesão</td>
              </tr>
              <tr>
                <td><strong>Max Weber</strong></td>
                <td>1864–1920</td>
                <td>Ação social / Racionalização / Dominação</td>
                <td>A sociedade se compreende pelo sentido que os indivíduos dão às suas ações</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Karl Marx</span>
        <h2>5. Karl Marx e o materialismo histórico</h2>
        <p>
          <strong>Karl Marx</strong> (1818–1883) desenvolveu uma teoria radical da sociedade capitalista.
          Para ele, a chave para entender qualquer sociedade está na sua <strong>base econômica</strong>:
          as relações de produção (quem possui os meios de produção, quem vende sua força de trabalho)
          determinam a <strong>superestrutura</strong> — as leis, a política, a religião, a arte e a
          cultura. Em outras palavras, "não é a consciência dos homens que determina o seu ser, mas,
          ao contrário, é o seu ser social que determina a sua consciência."
        </p>
        <p>
          Marx identificou que o capitalismo gera inevitavelmente a <strong>luta de classes</strong>:
          o conflito entre a <strong>burguesia</strong> (dona dos meios de produção) e o
          <strong> proletariado</strong> (que vende sua força de trabalho). Esse conflito é o motor
          da história. O conceito de <strong>alienação</strong> descreve a condição do trabalhador
          que, ao produzir mercadorias para o capitalista, torna-se estranho ao produto do seu próprio
          trabalho, ao processo de produção, à sua humanidade e aos outros trabalhadores.
        </p>
        <div className="lesson-highlight">
          <h3>Ideologia em Marx</h3>
          <p>
            Para Marx, a <strong>ideologia</strong> é o conjunto de ideias que a classe dominante
            apresenta como universais e naturais, mas que na verdade servem aos seus interesses de
            classe. A religião, o direito e a moral burguesa são exemplos de ideologia que perpetuam
            a dominação ao torná-la "natural" e "inevitável".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Émile Durkheim</span>
        <h2>6. Durkheim e os fatos sociais</h2>
        <p>
          <strong>Émile Durkheim</strong> (1858–1917) fundou a Sociologia como ciência autônoma ao
          exigir que ela tivesse um objeto próprio, distinto da Psicologia e da Filosofia. Esse objeto
          são os <strong>fatos sociais</strong>: maneiras de agir, pensar e sentir que são exteriores
          ao indivíduo e exercem sobre ele um poder coercitivo.
        </p>
        <p>
          Durkheim distinguiu dois tipos fundamentais de <strong>solidariedade social</strong>:
          a <strong>solidariedade mecânica</strong>, típica das sociedades tradicionais, onde a coesão
          vem da semelhança entre os membros (mesmos valores, crenças e modo de vida); e a
          <strong> solidariedade orgânica</strong>, típica das sociedades modernas e industriais, onde
          a coesão vem da <em>diferença</em> — a interdependência criada pela divisão do trabalho.
          Quando essa coesão se fragmenta, surge a <strong>anomia</strong>: a ausência de normas
          que regulem o comportamento, gerando desorientação e conflito social.
        </p>
        <div className="lesson-highlight">
          <h3>O suicídio como fato social</h3>
          <p>
            Em seu clássico estudo <em>O Suicídio</em> (1897), Durkheim demonstrou que até um ato
            aparentemente tão individual quanto o suicídio tem causas sociais. Ele identificou quatro
            tipos: egoísta (fraco laço social), altruísta (excesso de integração), anômico (ausência
            de normas) e fatalista (excesso de regulação). A obra fundou a metodologia estatística
            em Sociologia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Max Weber</span>
        <h2>7. Weber, a ação social e os tipos de dominação</h2>
        <p>
          <strong>Max Weber</strong> (1864–1920) propôs uma Sociologia <strong>compreensiva</strong>
          (<em>Verstehen</em>): para explicar a sociedade, é necessário <em>compreender</em> o sentido
          subjetivo que os indivíduos atribuem às suas ações. A <strong>ação social</strong> é toda
          ação orientada para o comportamento de outros. Weber identificou quatro tipos: racional com
          relação a fins (cálculo de meios e objetivos), racional com relação a valores (agir por
          princípios morais), afetiva (guiada por emoções) e tradicional (guiada pelo costume).
        </p>
        <p>
          Weber também desenvolveu uma teoria dos <strong>tipos de dominação legítima</strong>:
          a <strong>dominação tradicional</strong> (baseada no costume e na tradição, como nas monarquias
          hereditárias), a <strong>dominação carismática</strong> (baseada nas qualidades excepcionais
          de um líder) e a <strong>dominação racional-legal</strong> (baseada em normas e leis, típica
          do Estado moderno e da burocracia). Em <em>A Ética Protestante e o Espírito do Capitalismo</em>
          (1905), Weber mostrou como valores religiosos calvinistas contribuíram para o desenvolvimento
          do capitalismo moderno.
        </p>
        <div className="lesson-highlight">
          <h3>Burocracia em Weber</h3>
          <p>
            Para Weber, a <strong>burocracia</strong> é a forma mais eficiente de organização racional:
            cargos definidos, hierarquia clara, regras impessoais e documentação escrita. Ela é o
            tipo ideal de organização do Estado moderno e das grandes corporações. Mas Weber também
            alertou para a "gaiola de ferro da burocracia" — o risco de que a racionalidade formal
            sufoque a liberdade e o sentido humano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pensamento social brasileiro</span>
        <h2>8. A Sociologia no Brasil: de Gilberto Freyre a Florestan Fernandes</h2>
        <p>
          O pensamento social brasileiro começa a ganhar sistematicidade no século XX. <strong>Gilberto
          Freyre</strong> (<em>Casa-Grande &amp; Senzala</em>, 1933) interpretou a formação brasileira
          como fruto de uma mistura harmoniosa entre colonizadores portugueses, africanos escravizados
          e indígenas — teoria conhecida como <strong>"democracia racial"</strong>. Embora inovadora
          para a época por valorizar as contribuições africanas e indígenas, foi duramente criticada
          por romantizar a escravidão e obscurecer as hierarquias raciais persistentes.
        </p>
        <p>
          <strong>Florestan Fernandes</strong> (1920–1995), da USP, demoliu o mito da democracia racial
          com rigor empírico em <em>A Integração do Negro na Sociedade de Classes</em> (1964), mostrando
          que a abolição não havia integrado os negros à sociedade de classes e que o racismo era
          <strong> estrutural</strong>. <strong>Darcy Ribeiro</strong>, por sua vez, em <em>O Povo
          Brasileiro</em> (1995), interpretou a formação nacional como um processo de
          "transfiguração étnica" que gerou um povo singular, mas marcado por profundas desigualdades
          herdadas do colonialismo.
        </p>
        <div className="lesson-highlight">
          <h3>Sociologia volta ao currículo</h3>
          <p>
            Durante a ditadura militar (1964–1985), a Sociologia foi retirada do Ensino Médio por ser
            considerada subversiva. Somente em 2008 (Lei 11.684) ela voltou como disciplina obrigatória —
            reconhecimento de que a formação cidadã exige pensamento crítico sobre a sociedade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociologia contemporânea</span>
        <h2>9. A Sociologia contemporânea: novos autores e temas</h2>
        <p>
          A partir da segunda metade do século XX, a Sociologia se diversificou em novas correntes e
          temáticas. <strong>Pierre Bourdieu</strong> (1930–2002) desenvolveu os conceitos de
          <strong> habitus</strong>, <strong>campo</strong> e <strong>capital cultural</strong> para
          explicar como as desigualdades sociais se reproduzem por meio de mecanismos simbólicos.
          <strong> Anthony Giddens</strong> (1938–) propôs a teoria da estruturação, segundo a qual
          estrutura e agência se constituem mutuamente em uma dança contínua.
        </p>
        <p>
          <strong>Zygmunt Bauman</strong> (1925–2017) cunhou o conceito de <strong>modernidade
          líquida</strong> para descrever a sociedade contemporânea: as identidades, os vínculos
          e as instituições tornaram-se fluidos, instáveis e descartáveis. <strong>Manuel Castells</strong>
          analisou a <strong>sociedade em rede</strong> — a nova organização social produzida pela
          revolução digital, onde o poder se concentra no controle das redes de informação.
        </p>
        <div className="lesson-highlight">
          <h3>Sociologia pública e engajamento social</h3>
          <p>
            O sociólogo americano Michael Burawoy defendeu que a Sociologia tem uma responsabilidade
            pública: além de produzir conhecimento acadêmico, deve dialogar com a sociedade civil
            e contribuir para a superação das desigualdades. Essa perspectiva influencia o campo
            dos direitos humanos, dos movimentos sociais e da análise de políticas públicas no Brasil.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Importância e método</span>
        <h2>10. Por que estudar Sociologia? Método e imaginação sociológica</h2>
        <p>
          O sociólogo americano <strong>C. Wright Mills</strong> (1916–1962) cunhou a expressão
          <strong> "imaginação sociológica"</strong>: a capacidade de compreender as experiências
          pessoais dentro de seu contexto social mais amplo. Quando alguém perde o emprego, isso é
          um problema pessoal — mas quando milhões perdem o emprego ao mesmo tempo, isso é uma
          questão social que exige análise estrutural. A imaginação sociológica conecta a biografia
          individual com a história coletiva.
        </p>
        <p>
          A Sociologia é indispensável para o exercício da cidadania democrática. Ela fornece as
          ferramentas para questionar o que é apresentado como "natural", para identificar relações
          de poder ocultas e para imaginar alternativas à ordem social vigente. No Brasil,
          marcado por desigualdades históricas profundas, o pensamento sociológico é uma ferramenta
          de emancipação — o que explica por que foi perseguida durante a ditadura e por que importa
          que esteja no ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Método sociológico</th>
                <th>Descrição</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Survey (pesquisa quantitativa)</strong></td>
                <td>Coleta de dados por questionário, com análise estatística</td>
                <td>Pesquisa do IBGE sobre renda por raça e gênero</td>
              </tr>
              <tr>
                <td><strong>Etnografia</strong></td>
                <td>Observação participante do pesquisador no grupo estudado</td>
                <td>Estudo de comunidades indígenas ou periferias urbanas</td>
              </tr>
              <tr>
                <td><strong>Entrevistas em profundidade</strong></td>
                <td>Conversas longas para compreender trajetórias e sentidos</td>
                <td>Histórias de vida de trabalhadores rurais migrantes</td>
              </tr>
              <tr>
                <td><strong>Análise documental</strong></td>
                <td>Estudo de leis, textos históricos, dados oficiais</td>
                <td>Análise da evolução da legislação trabalhista no Brasil</td>
              </tr>
              <tr>
                <td><strong>Experimento social</strong></td>
                <td>Variação controlada de condições para testar hipóteses</td>
                <td>Envio de currículos com nomes "brancos" e "negros" para medir discriminação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Origem histórica da Sociologia"
          statement={
            <p>
              A Sociologia surgiu como disciplina científica no século XIX. Qual combinação de fatores
              é considerada a principal responsável pelo seu nascimento?
            </p>
          }
          options={[
            { letter: "A", text: "O Renascimento e a Reforma Protestante do século XVI." },
            { letter: "B", text: "A Revolução Industrial e a Revolução Francesa, que destruíram a ordem tradicional europeia.", correct: true },
            { letter: "C", text: "A colonização da América e o desenvolvimento do comércio transatlântico." },
            { letter: "D", text: "A unificação da Alemanha e da Itália e o surgimento dos Estados nacionais modernos." },
            { letter: "E", text: "A Primeira Guerra Mundial e a crise econômica de 1929." },
          ]}
          resolution={
            <p>
              A <strong>Revolução Industrial</strong> (novos problemas sociais urbanos) e a
              <strong> Revolução Francesa</strong> (crise das instituições tradicionais) criaram a
              urgência e as condições intelectuais para o surgimento da Sociologia como ciência
              da sociedade moderna — essa é a resposta esperada e mais recorrente no ENEM.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Quem criou o termo Sociologia?"
          statement={
            <p>
              O termo "Sociologia" foi criado por um filósofo que defendia que a sociedade poderia
              ser estudada com o mesmo rigor das ciências naturais e organizou as ciências em uma
              hierarquia com a Sociologia no topo. Esse pensador é:
            </p>
          }
          options={[
            { letter: "A", text: "Karl Marx." },
            { letter: "B", text: "Max Weber." },
            { letter: "C", text: "Émile Durkheim." },
            { letter: "D", text: "Auguste Comte.", correct: true },
            { letter: "E", text: "Florestan Fernandes." },
          ]}
          resolution={
            <p>
              <strong>Auguste Comte</strong> cunhou o termo "Sociologia" e fundou o
              <strong> positivismo</strong>. Para ele, a Sociologia era a "rainha das ciências", pois
              sintetizava todo o conhecimento acumulado. Sua Lei dos Três Estados afirma que toda
              sociedade passa pelos estágios teológico, metafísico e positivo (científico).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Associação correta: clássicos e conceitos"
          statement={
            <p>
              Qual das alternativas associa CORRETAMENTE o sociólogo clássico ao seu principal conceito?
            </p>
          }
          options={[
            { letter: "A", text: "Durkheim → luta de classes; Marx → fato social; Weber → positivismo." },
            { letter: "B", text: "Comte → ação social; Weber → fato social; Durkheim → materialismo histórico." },
            { letter: "C", text: "Marx → materialismo histórico e luta de classes; Durkheim → fato social; Weber → ação social.", correct: true },
            { letter: "D", text: "Weber → luta de classes; Marx → ação social; Durkheim → positivismo." },
            { letter: "E", text: "Durkheim → materialismo histórico; Comte → fato social; Marx → ação social." },
          ]}
          resolution={
            <p>
              A tríade clássica: <strong>Marx</strong> → materialismo histórico e luta de classes;
              <strong> Durkheim</strong> → fato social e solidariedade; <strong>Weber</strong> → ação
              social e racionalização. Essa associação é cobrada diretamente no ENEM e é uma das
              mais frequentes fontes de erro por inversão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Florestan Fernandes e a democracia racial"
          statement={
            <p>
              <em>"A democracia racial é um mito. No Brasil, o racismo opera de forma estrutural,
              perpetuando desigualdades com raízes no regime escravocrata."</em> Esse argumento,
              associado a Florestan Fernandes, representa uma ruptura com qual perspectiva anterior?
            </p>
          }
          options={[
            { letter: "A", text: "A perspectiva positivista de Comte, que via o Brasil como culturalmente atrasado." },
            { letter: "B", text: "A visão weberiana de que o protestantismo seria necessário para o desenvolvimento." },
            { letter: "C", text: "A interpretação de Gilberto Freyre, que suavizava conflitos raciais com a ideia de miscigenação harmônica.", correct: true },
            { letter: "D", text: "A teoria marxista de que as desigualdades seriam puramente de classe, sem componente racial." },
            { letter: "E", text: "O funcionalismo durkheimiano, que via as desigualdades como necessárias para a coesão social." },
          ]}
          resolution={
            <p>
              Florestan Fernandes rompeu com o <strong>mito da democracia racial</strong> de
              <strong> Gilberto Freyre</strong>. Enquanto Freyre valorizava a mestiçagem como traço
              positivo da identidade nacional, Fernandes demonstrou empiricamente que o racismo era
              estrutural e que a abolição não havia integrado os negros à sociedade de classes.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Sociologia e formação cidadã"
          statement={
            <p>
              Em 2008, a Lei 11.684 tornou a Sociologia obrigatória no Ensino Médio, após um período
              em que a disciplina havia sido retirada do currículo durante a ditadura militar (1964–1985).
              Esse retorno pode ser compreendido sociologicamente como:
            </p>
          }
          options={[
            { letter: "A", text: "Uma medida de padronização curricular para facilitar o ENEM, sem relação com a formação cidadã." },
            { letter: "B", text: "Um reconhecimento de que o pensamento crítico sobre a sociedade é fundamental para a cidadania democrática.", correct: true },
            { letter: "C", text: "Uma resposta ao positivismo comteano, que exigia ciências sociais nos currículos nacionais." },
            { letter: "D", text: "Uma decisão técnica para equilibrar a carga horária entre ciências exatas e humanas." },
            { letter: "E", text: "Uma influência direta do pensamento weberiano sobre racionalização das políticas educacionais." },
          ]}
          resolution={
            <p>
              A retirada da Sociologia durante a ditadura não foi acidental — o regime temia o
              pensamento crítico. A reintrodução em 2008 expressou o entendimento de que a
              <strong> formação cidadã democrática</strong> exige ferramentas para analisar, questionar
              e transformar a realidade social, que é exatamente o que a Sociologia proporciona.
            </p>
          }
        />
      </section>
    </article>
  );
}
