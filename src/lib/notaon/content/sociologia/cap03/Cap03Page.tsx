"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 3</span>
          <h1>Indivíduo, sociedade, cultura e socialização</h1>
          <p>
            Somos moldados pela sociedade ou a moldamos? Essa tensão entre o indivíduo e o coletivo
            é o coração da Sociologia. Entender como nos tornamos quem somos — pelo processo de
            socialização, pela cultura e pelos grupos sociais — é essencial para interpretar questões
            do ENEM sobre identidade, família, escola e diversidade cultural.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Indivíduo e sociedade</span>
        <h2>1. A tensão entre indivíduo e sociedade: agência e estrutura</h2>
        <p>
          Uma das questões mais fundamentais da Sociologia é: o indivíduo determina a sociedade ou
          é a sociedade que determina o indivíduo? Essa é a chamada <strong>questão agência-estrutura</strong>.
          Ela está no centro do debate entre as grandes correntes teóricas e tem implicações diretas
          para como compreendemos desigualdades, comportamentos e mudança social.
        </p>
        <p>
          O debate é antigo, mas permanece atual. Quando um jovem da periferia não acessa o ensino
          superior, isso é resultado de uma escolha individual (agência) ou de barreiras estruturais
          que determinam sua trajetória (estrutura)? A resposta sociológica não é "um ou outro" —
          é entender como estrutura e agência interagem em condições históricas específicas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Perspectiva</th>
                <th>Ênfase</th>
                <th>Representantes</th>
                <th>Argumento central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Determinismo social</strong></td>
                <td>Estrutura → Indivíduo</td>
                <td>Durkheim, Marx</td>
                <td>A sociedade molda o indivíduo; fatos sociais têm existência própria e coercitiva</td>
              </tr>
              <tr>
                <td><strong>Individualismo metodológico</strong></td>
                <td>Indivíduo → Estrutura</td>
                <td>Weber, Simmel</td>
                <td>A sociedade é o resultado das ações e interações dos indivíduos que lhe atribuem sentido</td>
              </tr>
              <tr>
                <td><strong>Teoria da prática</strong></td>
                <td>Dialética</td>
                <td>Bourdieu, Giddens</td>
                <td>Estrutura e agência se constituem mutuamente; o habitus media essa relação contínua</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O conceito de habitus (Bourdieu)</h3>
          <p>
            Para Pierre Bourdieu, o <strong>habitus</strong> é o sistema de disposições duráveis que
            interiorizamos ao longo da vida — maneiras de agir, pensar e sentir que aprendemos em
            nosso meio social, e que passamos a usar "naturalmente" sem perceber que são construções
            sociais. O habitus explica por que filhos de camadas populares tendem a fazer escolhas
            diferentes de filhos da elite, mesmo sem coerção explícita.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Socialização primária</span>
        <h2>2. Socialização: como nos tornamos sociais</h2>
        <p>
          <strong>Socialização</strong> é o processo pelo qual o indivíduo aprende e internaliza os
          valores, normas e comportamentos do grupo social em que está inserido. Sem socialização,
          não haveria linguagem, identidade ou capacidade de convivência — como mostram os raros
          casos históricos de crianças criadas sem contato humano (<em>crianças-selvagens</em>),
          que nunca desenvolveram fala ou comportamentos sociais normais mesmo após integração posterior.
        </p>
        <p>
          Os sociólogos <strong>Peter Berger</strong> e <strong>Thomas Luckmann</strong> distinguem
          dois tipos fundamentais de socialização em <em>A Construção Social da Realidade</em> (1966),
          obra que se tornou referência para a compreensão de como a realidade social é produzida e
          mantida por meio da interação cotidiana e da transmissão de sentidos entre gerações.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th></th>
                <th>Socialização Primária</th>
                <th>Socialização Secundária</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Quando ocorre</strong></td>
                <td>Na infância, primeiros anos de vida</td>
                <td>Ao longo de toda a vida, especialmente na adolescência e vida adulta</td>
              </tr>
              <tr>
                <td><strong>Principais agentes</strong></td>
                <td>Família, parentes próximos</td>
                <td>Escola, grupos de pares, trabalho, religião, mídia digital</td>
              </tr>
              <tr>
                <td><strong>O que transmite</strong></td>
                <td>Linguagem, valores morais básicos, identidade de gênero, noção de realidade</td>
                <td>Conhecimentos especializados, papéis sociais, normas institucionais específicas</td>
              </tr>
              <tr>
                <td><strong>Vínculo afetivo</strong></td>
                <td>Muito intenso — a criança internaliza como "natural" e "óbvio"</td>
                <td>Menos intenso — o indivíduo mantém alguma distância crítica</td>
              </tr>
              <tr>
                <td><strong>Resultado</strong></td>
                <td>Identidade básica, "mundo tomado como dado", base da personalidade</td>
                <td>Submundos institucionais: ser estudante, profissional, religioso, militante</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A socialização não é um processo passivo: o indivíduo também resiste, reinterpreta e
          transforma os conteúdos que recebe. É por isso que irmãos criados na mesma família podem
          ter valores muito diferentes na vida adulta, e por que culturas mudam ao longo do tempo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O que é cultura</span>
        <h2>3. Cultura como sistema simbólico</h2>
        <p>
          <strong>Cultura</strong>, na perspectiva sociológica, não se refere apenas às "belas artes"
          ou ao conhecimento erudito. Ela engloba o conjunto de <strong>valores, crenças, normas,
          símbolos, linguagens e práticas</strong> compartilhados por um grupo social e transmitidos
          de geração em geração. A cultura é o que nos diferencia dos outros animais: enquanto eles
          se adaptam biologicamente ao ambiente, os seres humanos constroem <em>ambientes simbólicos</em>
          — cidades, religiões, leis, arte, ciência — que transformam a natureza e regulam a convivência.
        </p>
        <p>
          A cultura é simultaneamente <strong>coletiva</strong> (compartilhada por um grupo) e
          <strong> dinâmica</strong> (muda ao longo do tempo por meio de contatos, conflitos e
          inovações). Ela é transmitida por meio da socialização, mas também contestada e transformada
          por grupos que reivindicam novas formas de expressar sua identidade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Língua e linguagem</h3>
            <p>O sistema mais fundamental de símbolos; estrutura o pensamento e a comunicação social. A linguagem não apenas descreve a realidade — ela a constitui.</p>
          </div>
          <div className="lesson-card">
            <span>🙏</span>
            <h3>Crenças e valores</h3>
            <p>O que um grupo considera verdadeiro, sagrado, bom ou desejável — base da moral coletiva e fundamento das normas que regulam o comportamento.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Arte e expressão</h3>
            <p>Formas de representar, criticar e celebrar a vida em sociedade — do grafite ao samba, da literatura de cordel ao cinema periférico.</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Normas e costumes</h3>
            <p>Regras tácitas ou explícitas de comportamento que organizam a interação social, desde etiqueta até leis formais.</p>
          </div>
          <div className="lesson-card">
            <span>🍲</span>
            <h3>Cultura material</h3>
            <p>Objetos produzidos pelo grupo: ferramentas, alimentos, vestimentas, arquitetura — cada um carregando significados sociais.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Rituais e festas</h3>
            <p>Práticas coletivas que reforçam identidade, coesão e memória do grupo social — o Carnaval, a festa junina, os rituais religiosos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Etnocentrismo e relativismo</span>
        <h2>4. Etnocentrismo e relativismo cultural</h2>
        <p>
          <strong>Etnocentrismo</strong> é a tendência de julgar outras culturas usando os padrões
          e valores da própria cultura como referência. O etnocentrismo leva à hierarquização das
          culturas — onde a própria é vista como superior — e está na base de preconceitos,
          discriminações e até genocídios. O colonialismo europeu foi, em grande parte, uma
          prática etnocêntrica que justificava a dominação de povos africanos e indígenas como
          "civilização" de "bárbaros" ou "primitivos".
        </p>
        <p>
          O <strong>relativismo cultural</strong>, desenvolvido pelo antropólogo Franz Boas e depois
          por Bronisław Malinowski, propõe o oposto: cada cultura deve ser compreendida em seus
          próprios termos, a partir de seus próprios valores e contextos, sem hierarquizações.
          É importante notar que o relativismo cultural como <em>método analítico</em> não significa
          aceitar qualquer prática como legítima — ele é uma ferramenta para compreender, não
          para justificar violações de direitos humanos.
        </p>
        <div className="lesson-highlight">
          <h3>Etnocentrismo às avessas</h3>
          <p>
            Existe também o chamado <strong>etnocentrismo às avessas</strong>: a idealização
            acrítica de culturas estrangeiras ou "exóticas", que também impede a compreensão real.
            O ENEM frequentemente testa a capacidade de distinguir entre análise relativista
            legítima e relativismo ingênuo que ignora desigualdades de poder entre culturas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alta e baixa cultura</span>
        <h2>5. Alta cultura, cultura popular e indústria cultural</h2>
        <p>
          A distinção entre "alta cultura" (erudita, legitimada pelas elites) e "cultura popular"
          (das classes trabalhadoras e comunidades periféricas) é ela mesma um produto social —
          uma hierarquização que reflete relações de poder, não qualidades intrínsecas das produções
          culturais. Pierre Bourdieu demonstrou que o gosto cultural não é natural nem neutro:
          ele é formado pelo <strong>capital cultural</strong> adquirido na família e na escola,
          e serve para distinguir grupos sociais e reproduzir hierarquias.
        </p>
        <p>
          O conceito de <strong>indústria cultural</strong>, desenvolvido por <strong>Theodor Adorno</strong>
          e <strong>Max Horkheimer</strong> da Escola de Frankfurt em <em>Dialética do Esclarecimento</em>
          (1947), descreve a padronização e mercantilização da produção cultural sob o capitalismo.
          Para eles, a cultura de massa — cinema, rádio, música popular comercial — não liberta,
          mas condiciona: homogeneíza gostos, estimula o consumo e dificulta o pensamento crítico.
        </p>
        <div className="lesson-highlight">
          <h3>Cultura de massas no Brasil contemporâneo</h3>
          <p>
            O debate sobre indústria cultural é atual: algoritmos das plataformas digitais (Spotify,
            Netflix, TikTok) criam "bolhas culturais", padronizam preferências e monetizam a atenção.
            Ao mesmo tempo, plataformas digitais permitiram que artistas periféricos — como rappers
            e funkeiros — alcancem audiências globais sem passar pelos filtros das grandes gravadoras.
            Essa tensão entre homogeneização e diversificação é tema recorrente no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grupos sociais</span>
        <h2>6. Grupos sociais: primários, secundários e de referência</h2>
        <p>
          O sociólogo americano <strong>Charles H. Cooley</strong> (1864–1929) distinguiu dois tipos
          fundamentais de grupos sociais segundo o tipo de laço que une seus membros. Essa distinção
          permanece essencial para compreender como diferentes contextos de interação produzem
          diferentes formas de solidariedade e controle social.
        </p>
        <p>
          Além da distinção de Cooley, Robert K. Merton introduziu os conceitos de
          <strong> grupo de pertencimento</strong> (aquele ao qual o indivíduo realmente faz parte)
          e <strong>grupo de referência</strong> (aquele cujos valores e estilos de vida o indivíduo
          adota como modelo, mesmo sem pertencer a ele). O grupo de referência pode ter influência
          maior que o grupo de pertencimento na formação de aspirações, gostos e comportamentos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👨‍👩‍👧</span>
            <h3>Grupos primários</h3>
            <p>
              Relações <strong>face a face</strong>, íntimas e duradouras. Baseadas em laços afetivos
              e não em interesses instrumentais. Ex.: família, grupo de amigos íntimos, comunidade
              de vizinhos. São a base da identidade pessoal e da socialização primária.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏢</span>
            <h3>Grupos secundários</h3>
            <p>
              Relações <strong>formais, impessoais</strong> e baseadas em objetivos específicos. Os
              membros interagem por funções, não por vínculos afetivos. Ex.: empresa, partido político,
              sindicato, associação profissional, escola.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Grupos de referência e consumo</h3>
          <p>
            A distinção entre grupo de pertencimento e grupo de referência explica fenômenos como
            o consumo de luxo por pessoas de renda média, que adotam como referência grupos de
            status mais alto. Bourdieu chamaria isso de estratégia de distinção social — o consumo
            como sinalização de pertencimento a uma classe desejada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade social</span>
        <h2>7. Identidade social: como nos reconhecemos e somos reconhecidos</h2>
        <p>
          <strong>Identidade social</strong> é o conjunto de características que definem quem somos
          em relação aos outros — incluindo pertencimentos de classe, raça, gênero, geração, religião
          e nacionalidade. A identidade é simultaneamente atribuída (pelos outros) e assumida (por nós
          mesmos), e é sempre relacional: nos definimos em contraste com o "outro".
        </p>
        <p>
          O sociólogo jamaicano-britânico <strong>Stuart Hall</strong> (1932–2014) argumentou que as
          identidades na modernidade tardia são <strong>descentradas</strong>: não há mais um núcleo
          estável e coerente de identidade, mas múltiplas identificações que se cruzam, às vezes de
          forma contraditória. Um jovem brasileiro pode se identificar simultaneamente como negro,
          periférico, evangélico e militante ambiental — identidades que em certos contextos entram
          em tensão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão da identidade</th>
                <th>Exemplos no Brasil</th>
                <th>Relevância para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Racial/étnica</strong></td>
                <td>Identidade negra, indígena, parda, quilombola</td>
                <td>Racismo, ações afirmativas, Lei 10.639/2003</td>
              </tr>
              <tr>
                <td><strong>Gênero</strong></td>
                <td>Mulher, homem, não-binário, trans</td>
                <td>Patriarcado, feminismo, violência de gênero</td>
              </tr>
              <tr>
                <td><strong>Classe social</strong></td>
                <td>Trabalhador, classe média, burguesia, sem-terra</td>
                <td>Desigualdade, mobilidade social, trabalho</td>
              </tr>
              <tr>
                <td><strong>Regional/nacional</strong></td>
                <td>Nordestino, sulista, amazônico, brasileiro</td>
                <td>Regionalismo, desigualdades regionais, migração</td>
              </tr>
              <tr>
                <td><strong>Religiosa</strong></td>
                <td>Católico, evangélico, candomblecista, sem religião</td>
                <td>Pluralismo, laicidade, intolerância religiosa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diversidade cultural</span>
        <h2>8. Diversidade cultural e multiculturalismo</h2>
        <p>
          O Brasil é um dos países mais <strong>culturalmente diversos</strong> do planeta: são mais de
          300 povos indígenas com línguas e culturas distintas, a maior população afro-descendente fora
          da África, comunidades de imigrantes europeus, asiáticos e latino-americanos, além de culturas
          regionais profundamente distintas entre si. Essa diversidade é ao mesmo tempo uma riqueza e
          um campo de tensões, disputas por reconhecimento e conflitos.
        </p>
        <p>
          O <strong>multiculturalismo</strong> é a política e a perspectiva que reconhece e celebra
          essa diversidade, defendendo a coexistência de culturas diferentes em uma mesma sociedade
          com igualdade de direitos. No Brasil, o multiculturalismo está consagrado na Constituição
          de 1988, que reconhece os direitos culturais dos povos indígenas e das comunidades
          quilombolas. Mas o debate entre multiculturalismo e integração permanece vivo e tenso.
        </p>
        <div className="lesson-highlight">
          <h3>Aculturação e sincretismo</h3>
          <p>
            <strong>Aculturação</strong> é o processo de modificação cultural que ocorre quando grupos
            de culturas distintas entram em contato prolongado. Pode ser voluntária ou forçada (como
            no caso da colonização). O <strong>sincretismo</strong> — a fusão de elementos de culturas
            diferentes — é um produto típico da aculturação: o candomblé, o catolicismo popular
            brasileiro e a capoeira são exemplos de sínteses culturais afro-brasileiras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura e poder</span>
        <h2>9. Cultura e relações de poder: hegemonia e resistência</h2>
        <p>
          O filósofo marxista italiano <strong>Antonio Gramsci</strong> (1891–1937) desenvolveu o
          conceito de <strong>hegemonia cultural</strong>: a dominação de uma classe não se dá apenas
          pela força (coerção), mas também pelo <em>consentimento</em> — pela capacidade de fazer
          com que a visão de mundo da classe dominante seja aceita como natural e universal por todos.
          A escola, a mídia, a religião e a arte funcionam como instrumentos de hegemonia quando
          reproduzem valores que beneficiam os grupos dominantes.
        </p>
        <p>
          Mas onde há hegemonia, há também <strong>resistência</strong>. As classes subalternas
          desenvolvem <em>contrahegemonia</em> — formas alternativas de cultura, valores e
          organização que contestam a ordem vigente. No Brasil, exemplos incluem o movimento
          hip-hop periférico, o feminismo negro, os movimentos indígenas e as manifestações
          culturais quilombolas — todas formas de resistência cultural que afirmam identidades
          silenciadas pela cultura dominante.
        </p>
        <div className="lesson-highlight">
          <h3>Violência simbólica (Bourdieu)</h3>
          <p>
            Para Bourdieu, a <strong>violência simbólica</strong> é a violência exercida pelo
            reconhecimento: quando os dominados aceitam como legítimas as categorias que os
            dominam, interiorizando a própria inferioridade. Um estudante pobre que acredita
            que "não tem jeito pra estudar" sofre violência simbólica — sua exclusão é apresentada
            como resultado de méritos individuais, não de desigualdades estruturais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade brasileira</span>
        <h2>10. A formação da identidade cultural brasileira</h2>
        <p>
          A questão da identidade nacional brasileira é um dos grandes temas do pensamento social
          do país. <strong>Gilberto Freyre</strong> em <em>Casa-Grande &amp; Senzala</em> (1933)
          propôs que a miscigenação entre portugueses, africanos e indígenas teria criado uma
          "democracia racial" — uma identidade nacional baseada na mistura e na convivência
          harmoniosa. Essa visão foi central na construção da identidade nacional oficial durante
          o século XX.
        </p>
        <p>
          Entretanto, pensadores como <strong>Florestan Fernandes</strong> e, mais recentemente,
          Silvio Almeida (<em>Racismo Estrutural</em>, 2018) mostraram que a "democracia racial"
          é um mito ideológico que obscurece as desigualdades raciais persistentes. A identidade
          brasileira é, na realidade, um campo de disputas: ao mesmo tempo que celebra a
          mestiçagem, perpetua hierarquias raciais que colocam negros e indígenas em posição
          sistematicamente desvantajosa. Entender essa contradição é fundamental para a análise
          sociológica das questões do ENEM sobre raça, cultura e desigualdade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obra principal</th>
                <th>Visão da identidade brasileira</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gilberto Freyre</strong></td>
                <td>Casa-Grande &amp; Senzala (1933)</td>
                <td>Miscigenação harmoniosa; democracia racial; valorização da herança africana e indígena</td>
              </tr>
              <tr>
                <td><strong>Sérgio Buarque de Holanda</strong></td>
                <td>Raízes do Brasil (1936)</td>
                <td>O "homem cordial" — relações pessoais antes das instituições; herança ibérica patrimonialista</td>
              </tr>
              <tr>
                <td><strong>Caio Prado Jr.</strong></td>
                <td>Formação do Brasil Contemporâneo (1942)</td>
                <td>Brasil formado pelo sentido de empresa colonial; desigualdades derivam da exploração econômica</td>
              </tr>
              <tr>
                <td><strong>Florestan Fernandes</strong></td>
                <td>A Integração do Negro (1964)</td>
                <td>Mito da democracia racial; racismo estrutural; exclusão pós-abolição</td>
              </tr>
              <tr>
                <td><strong>Darcy Ribeiro</strong></td>
                <td>O Povo Brasileiro (1995)</td>
                <td>Povo novo formado pela transfiguração étnica; potencial emancipatório da mistura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Conceito de socialização"
          statement={
            <p>
              Uma criança que cresce em uma família aprende a língua, os costumes, os valores e
              as regras de comportamento do seu grupo. Esse processo é denominado:
            </p>
          }
          options={[
            { letter: "A", text: "Estratificação social." },
            { letter: "B", text: "Mobilidade social." },
            { letter: "C", text: "Socialização primária.", correct: true },
            { letter: "D", text: "Controle social formal." },
            { letter: "E", text: "Socialização secundária." },
          ]}
          resolution={
            <p>
              A aprendizagem dos valores, normas e comportamentos na infância, dentro da família,
              é chamada de <strong>socialização primária</strong>. É o processo mais profundo, pois
              ocorre quando a criança ainda não tem a capacidade crítica de questionar o que aprende,
              interiorizando como "natural" o que é socialmente construído.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Socialização primária vs. secundária"
          statement={
            <p>
              Um jovem que ingressa no mercado de trabalho aprende as normas da empresa, os
              protocolos da profissão e os comportamentos esperados no ambiente corporativo.
              Segundo Berger e Luckmann, esse processo corresponde a:
            </p>
          }
          options={[
            { letter: "A", text: "Socialização primária, pois é a primeira experiência de trabalho do jovem." },
            { letter: "B", text: "Anomia, pois o jovem enfrenta falta de referências normativas." },
            { letter: "C", text: "Socialização secundária, pois ocorre fora da família e em contexto institucional específico.", correct: true },
            { letter: "D", text: "Habitus, pois o jovem simplesmente reproduz disposições adquiridas na infância." },
            { letter: "E", text: "Controle social, pois a empresa impõe sanções a quem viola suas normas." },
          ]}
          resolution={
            <p>
              A <strong>socialização secundária</strong> ocorre quando o indivíduo, já formado na
              socialização primária, incorpora saberes, normas e papéis de instituições específicas
              (escola, trabalho, religião). Ela é menos afetiva e mais instrumental do que a
              socialização primária, e continua ao longo de toda a vida.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Habitus de Bourdieu"
          statement={
            <p>
              Pierre Bourdieu observou que jovens de origem popular, mesmo com capacidade intelectual,
              tendiam a se autocensurar e não se candidatar a empregos ou cursos universitários
              considerados "para ricos". Qual conceito de Bourdieu melhor explica esse fenômeno?
            </p>
          }
          options={[
            { letter: "A", text: "Fato social, pois as normas externas impedem a ascensão dos jovens." },
            { letter: "B", text: "Habitus, pois as disposições internalizadas levam à reprodução das posições sociais.", correct: true },
            { letter: "C", text: "Solidariedade mecânica, pois os jovens populares preferem ficar em seus grupos." },
            { letter: "D", text: "Anomia, pois a falta de normas claras gera insegurança nos jovens." },
            { letter: "E", text: "Ação racional com relação a fins, pois os jovens calculam que não terão sucesso." },
          ]}
          resolution={
            <p>
              O <strong>habitus</strong> (Bourdieu) é o sistema de disposições incorporadas que
              orienta o que o indivíduo considera possível ou improvável para si. Jovens de origem
              popular interiorizam, via socialização, que certos campos sociais "não são para eles",
              gerando uma forma de violência simbólica que reproduz as desigualdades sem coerção direta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Tensão indivíduo-sociedade nos clássicos"
          statement={
            <p>
              Para Émile Durkheim, os "fatos sociais" são fenômenos que existem fora e acima dos
              indivíduos, exercendo sobre eles uma força coercitiva. Já para Max Weber, a Sociologia
              deve partir da compreensão da ação individual e seu sentido. Qual alternativa sintetiza
              corretamente essa diferença?
            </p>
          }
          options={[
            { letter: "A", text: "Durkheim é individualista; Weber é determinista social." },
            { letter: "B", text: "Ambos concordam que a sociedade é um produto exclusivo das ações individuais." },
            { letter: "C", text: "Durkheim é determinista social (estrutura molda o indivíduo); Weber é compreensivista (indivíduo dá sentido à ação).", correct: true },
            { letter: "D", text: "Weber defende que a estrutura econômica determina toda ação social; Durkheim discorda." },
            { letter: "E", text: "Ambos concordam que a cultura é o único fator determinante do comportamento social." },
          ]}
          resolution={
            <p>
              Essa é uma das distinções mais cobradas no ENEM: <strong>Durkheim</strong> enfatiza a
              <em> exterioridade</em> e a <em>coercitividade</em> dos fatos sociais — a sociedade
              precede e constrange o indivíduo. <strong>Weber</strong> propõe a <em>Sociologia
              Compreensiva</em>: para entender a sociedade, é necessário interpretar o sentido
              subjetivo que os atores atribuem às suas ações.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Cultura e identidade no Brasil contemporâneo"
          statement={
            <p>
              <em>"O funk carioca, nascido nas favelas do Rio de Janeiro nas décadas de 1980 e 1990,
              tornou-se, no século XXI, um dos gêneros musicais mais consumidos no Brasil e no mundo,
              sendo tema de análises acadêmicas, festivais internacionais e disputas sobre seu
              reconhecimento como patrimônio cultural."</em> Esse processo pode ser analisado
              sociologicamente como:
            </p>
          }
          options={[
            { letter: "A", text: "Uma manifestação de anomia, pois transgride as normas culturais estabelecidas." },
            { letter: "B", text: "Um exemplo de solidariedade mecânica, pois une pessoas de origens semelhantes." },
            { letter: "C", text: "A dinâmica de uma cultura subalterna que disputa legitimidade com a cultura hegemônica e se globaliza.", correct: true },
            { letter: "D", text: "Um caso de socialização secundária, pois a escola passou a ensinar funk no currículo." },
            { letter: "E", text: "O resultado da socialização primária das comunidades periféricas do Rio de Janeiro." },
          ]}
          resolution={
            <p>
              O funk ilustra a dinâmica de <strong>disputa de legitimidade cultural</strong> entre
              grupos sociais (Bourdieu). Inicialmente marginalizado pela cultura dominante, ele foi sendo
              reconhecido à medida que seu alcance cresceu, evidenciando como a cultura é um campo de
              poder onde grupos subordinados reivindicam visibilidade e reconhecimento contra a hegemonia cultural.
            </p>
          }
        />
      </section>
    </article>
  );
}
