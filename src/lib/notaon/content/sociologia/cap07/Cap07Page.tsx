"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 7</span>
          <h1>Émile Durkheim: fatos sociais, solidariedade e divisão do trabalho</h1>
          <p>
            Se a Sociologia se tornou uma ciência autônoma, isso se deve em grande parte a Émile Durkheim.
            Ele demonstrou que a sociedade não é a simples soma dos indivíduos — ela é uma realidade própria,
            com suas próprias leis e métodos de investigação. Seus conceitos de fato social, solidariedade,
            anomia e suicídio como fenômeno social são pilares indispensáveis para o ENEM e para compreender
            a vida coletiva moderna.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e obra</span>
        <h2>1. Durkheim e a autonomia da Sociologia</h2>
        <p>
          <strong>Émile Durkheim</strong> nasceu em Épinal, França, em 1858, numa família de rabinos. Estudou
          em Paris e tornou-se o primeiro professor universitário de Sociologia da França, na Universidade de
          Bordeaux em 1887, e depois na Sorbonne em 1902. Morreu em 1917, durante a Primeira Guerra Mundial —
          um evento que o abalou profundamente, pois acreditava que a modernidade estava criando laços de
          solidariedade mais frágeis.
        </p>
        <p>
          Durkheim viveu numa época de profundas transformações: industrialização acelerada, urbanização,
          crise do poder da Igreja, emergência dos movimentos operários e questionamentos sobre o papel do
          Estado. Seu projeto intelectual era estabelecer a Sociologia como ciência rigorosa, capaz de
          diagnosticar as doenças sociais e propor remédios racionais para elas, superando a filosofia social
          e o jornalismo de sua época.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📗</span>
            <h3>A Divisão do Trabalho Social (1893)</h3>
            <p>Analisa as formas de solidariedade nas sociedades pré-industriais (mecânica) e industriais (orgânica) e introduz o conceito de anomia.</p>
          </div>
          <div className="lesson-card">
            <span>📘</span>
            <h3>As Regras do Método Sociológico (1895)</h3>
            <p>Define os fatos sociais e estabelece as bases metodológicas da Sociologia como ciência empírica e objetiva.</p>
          </div>
          <div className="lesson-card">
            <span>📙</span>
            <h3>O Suicídio (1897)</h3>
            <p>Primeiro grande estudo estatístico em Sociologia: demonstra que até um ato aparentemente individual é determinado por fatores sociais coletivos.</p>
          </div>
          <div className="lesson-card">
            <span>📕</span>
            <h3>As Formas Elementares da Vida Religiosa (1912)</h3>
            <p>Analisa a religião como fato social e base da solidariedade coletiva — o sagrado como representação simbólica da própria sociedade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fato social</span>
        <h2>2. Fatos sociais: a sociedade acima do indivíduo</h2>
        <p>
          O conceito mais fundamental de Durkheim é o de <strong>fato social</strong>. Em
          <em> As Regras do Método Sociológico</em>, ele afirma que os fatos sociais são
          "maneiras de agir, pensar e sentir, exteriores ao indivíduo, dotadas de um poder de
          coerção em virtude do qual se lhe impõem". Sua máxima metodológica: <em>"tratar os
          fatos sociais como coisas"</em>. Isso significava que a Sociologia deveria estudar
          os fenômenos sociais de forma objetiva, como as ciências naturais estudam os fenômenos
          físicos — sem recorrer à introspecção ou à psicologia individual.
        </p>
        <p>
          Os fatos sociais têm três características fundamentais que os distinguem de opiniões
          ou comportamentos puramente individuais:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Exterioridade</h3>
            <p>
              O fato social existe fora do indivíduo, independentemente de sua vontade. A língua
              portuguesa existia antes de você nascer e continuará após sua morte. O indivíduo
              encontra o fato social <em>pronto</em>, não o cria livremente.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Coercitividade</h3>
            <p>
              O fato social impõe-se ao indivíduo com uma força constrangedora. Quem viola uma
              norma social (não cumprimenta ao entrar numa sala, fala alto em velório) percebe
              imediatamente a pressão social — às vezes sem que haja sanção formal.
            </p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Generalidade</h3>
            <p>
              O fato social é coletivo: está difundido por toda a sociedade (ou por um grupo).
              Se apenas uma pessoa acha normal chegar 2 horas atrasada, é um capricho individual.
              Se toda uma cultura aceita isso como norma, é um fato social.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplos de fatos sociais</h3>
          <p>
            A língua falada, as leis, a moralidade, os costumes religiosos, as modas, as correntes
            de opinião — todos são fatos sociais. Note que não se trata apenas de regras formais:
            o fato de que se usa roupas em público, ou de que se come com talheres em certos contextos,
            são fatos sociais igualmente coercitivos, embora nunca escritos em lei. Durkheim era
            especialmente interessado em como esses fatos constrangem o comportamento sem que o
            indivíduo perceba a coerção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Solidariedade</span>
        <h2>3. Solidariedade mecânica e orgânica</h2>
        <p>
          Em <em>A Divisão do Trabalho Social</em>, Durkheim distinguiu dois tipos de coesão social,
          que correspondem a dois tipos históricos de sociedade. A questão central que ele queria
          responder era: como é possível que indivíduos cada vez mais diferentes entre si (nas sociedades
          modernas, onde há muita especialização) continuem unidos numa mesma sociedade?
        </p>
        <p>
          A resposta foi distinguir a coesão baseada na semelhança (solidariedade mecânica) da coesão
          baseada na interdependência funcional (solidariedade orgânica):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th></th>
                <th>Solidariedade Mecânica</th>
                <th>Solidariedade Orgânica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tipo de sociedade</strong></td>
                <td>Simples, pré-industrial, tradicional</td>
                <td>Complexa, industrial, moderna</td>
              </tr>
              <tr>
                <td><strong>Base da coesão</strong></td>
                <td>Semelhança: todos pensam, creem e agem de forma parecida</td>
                <td>Diferença: interdependência de funções especializadas</td>
              </tr>
              <tr>
                <td><strong>Divisão do trabalho</strong></td>
                <td>Mínima: todos fazem quase tudo</td>
                <td>Intensa: cada um faz uma função específica</td>
              </tr>
              <tr>
                <td><strong>Consciência coletiva</strong></td>
                <td>Forte, absorve o indivíduo</td>
                <td>Mais fraca; maior espaço para a individualidade</td>
              </tr>
              <tr>
                <td><strong>Direito predominante</strong></td>
                <td>Direito repressivo/penal: punição dos que divergem</td>
                <td>Direito restitutivo/civil: reparação, contratos, regulamentação</td>
              </tr>
              <tr>
                <td><strong>Analogia</strong></td>
                <td>Células iguais de um organismo primitivo</td>
                <td>Órgãos diferentes de um organismo complexo — interdependentes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A passagem da solidariedade mecânica para a orgânica é o processo central da
          modernização para Durkheim. Mas ela traz um risco: a <strong>anomia</strong> — o estado
          em que as normas sociais se enfraquecem ou desaparecem, deixando os indivíduos sem
          referências coletivas claras.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Anomia</span>
        <h2>4. Anomia: o diagnóstico da crise moderna</h2>
        <p>
          O conceito de <strong>anomia</strong> (do grego <em>a</em> = sem + <em>nomos</em> = norma)
          é um dos mais importantes legados de Durkheim. Descreve o estado em que as normas sociais
          não regulam mais adequadamente o comportamento dos indivíduos — seja porque desapareceram,
          seja porque se tornaram contraditórias ou insuficientes para lidar com novas situações.
        </p>
        <p>
          Durkheim identificou dois contextos principais de anomia: o da <strong>anomia crônica</strong>,
          que afeta as sociedades industriais de forma permanente porque a divisão do trabalho cria
          conflitos entre grupos sem que surjam normas reguladoras eficazes; e a <strong>anomia
          aguda</strong>, que ocorre em momentos de crise brusca — falência econômica, divórcio,
          revolução — quando as normas estabelecidas entram em colapso.
        </p>
        <div className="lesson-highlight">
          <h3>Anomia no Brasil contemporâneo</h3>
          <p>
            Durkheim aplicou a anomia ao suicídio, mas o conceito é usado hoje para analisar fenômenos
            como a violência urbana, a corrupção institucional e a crise de autoridade das famílias.
            Quando as normas que regulam a convivência se tornam frouxas ou são desrespeitadas sem
            consequências, o laço social se enfraquece. No Brasil, a impunidade sistemática pode ser
            lida como fonte de anomia: quando as normas existem no papel mas não são cumpridas, perdem
            sua força coercitiva e orientadora.
          </p>
        </div>
        <p>
          É fundamental distinguir anomia (ausência ou fragilidade de normas) de <strong>desvio
          social</strong> (violação de normas que ainda existem). Na anomia, o problema é que as
          próprias normas deixaram de funcionar como guias efetivos de comportamento — um estado
          que Durkheim via como profundamente patológico para o organismo social.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O suicídio</span>
        <h2>5. O suicídio como fato social: tipos e causas</h2>
        <p>
          Em sua obra <em>O Suicídio</em> (1897), Durkheim realizou uma análise pioneira: usando
          estatísticas de diferentes países europeus, demonstrou que a taxa de suicídio não era
          aleatória — variava sistematicamente com fatores sociais (religião, estado civil,
          integração ao grupo). O suicídio, um ato aparentemente íntimo, era um <strong>fato
          social</strong>. A Sociologia podia explicar o que parecia ser o ato mais individual
          e pessoal da existência humana.
        </p>
        <p>
          Durkheim identificou três tipos de suicídio, cada um correspondendo a uma configuração
          específica das relações entre o indivíduo e o grupo social:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏝️</span>
            <h3>Suicídio egoísta</h3>
            <p>
              Causado pelo <strong>excesso de individualismo</strong> — o indivíduo está pouco
              integrado ao grupo social. Ex.: protestantes tinham taxa maior que católicos, pois
              o catolicismo promovia mais integração comunitária e rituais coletivos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪖</span>
            <h3>Suicídio altruísta</h3>
            <p>
              Causado pelo <strong>excesso de integração</strong> — o indivíduo se sacrifica pelo
              grupo. Ex.: soldados japoneses kamikaze, guerreiros tribais que se matam ao perder
              o chefe, idosos em comunidades tradicionais que se sacrificam para não ser fardo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Suicídio anômico</h3>
            <p>
              Causado pela <strong>falta de regulação social</strong> — anomia. As normas
              desaparecem em momentos de crise (econômica, divórcio) e o indivíduo perde
              referências. Ex.: taxas sobem em crises econômicas agudas e após divórcios.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>A contribuição metodológica de O Suicídio</h3>
          <p>
            Durkheim usou dados estatísticos comparados entre países, religiões, estados civis e profissões
            para demonstrar que causas sociais — e não psicológicas individuais — explicavam as variações
            nas taxas de suicídio. Essa obra fundou o uso de métodos quantitativos na Sociologia e demonstrou
            que fenômenos aparentemente individuais têm determinantes coletivos objetivos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Consciência coletiva</span>
        <h2>6. Consciência coletiva e representações coletivas</h2>
        <p>
          Durkheim usou o conceito de <strong>consciência coletiva</strong> para designar o conjunto
          de crenças, sentimentos e valores compartilhados pelos membros de uma sociedade. Ela é
          irredutível às consciências individuais — é como se a sociedade tivesse uma mente própria,
          acima das mentes individuais. Na solidariedade mecânica, a consciência coletiva é forte e
          densa, absorvendo quase completamente o indivíduo. Na solidariedade orgânica, ela é mais
          fraca, deixando maior espaço para a personalidade individual.
        </p>
        <p>
          Em suas obras posteriores, Durkheim desenvolveu o conceito de <strong>representações
          coletivas</strong>: as ideias, crenças, mitos e símbolos que uma sociedade constrói e
          compartilha. As representações coletivas são o substrato simbólico da vida social — como
          a ideia de "nação", de "sagrado", de "justiça". Elas são socialmente produzidas e têm
          força própria, independente dos indivíduos que as carregam.
        </p>
        <div className="lesson-highlight">
          <h3>Herança de Durkheim nas ciências sociais</h3>
          <p>
            O conceito de representações coletivas influenciou profundamente a Antropologia (Marcel Mauss,
            Claude Lévi-Strauss), a Psicologia Social (Serge Moscovici) e a Sociologia do Conhecimento
            (Karl Mannheim). A ideia de que o pensamento humano é moldado pela vida social coletiva —
            e não apenas pela razão individual — é uma das contribuições mais duradouras de Durkheim
            às ciências humanas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Religião</span>
        <h2>7. Religião como fato social: o sagrado e o profano</h2>
        <p>
          Em <em>As Formas Elementares da Vida Religiosa</em> (1912), Durkheim estudou o totemismo
          dos aborígenes australianos e chegou a uma conclusão ousada: a religião não trata de Deus —
          trata da sociedade. O objeto da veneração religiosa é a própria coletividade, que se
          representa a si mesma sob forma simbólica (o totem, o sagrado). Quando os fiéis adoram
          Deus, adoram — sem saber — a força superior que é a própria sociedade.
        </p>
        <p>
          Durkheim distinguiu duas esferas fundamentais da vida religiosa: o <strong>sagrado</strong>
          (aquilo que é separado, proibido, venerado e que une a comunidade em rituais coletivos) e
          o <strong>profano</strong> (o domínio do cotidiano ordinário, sem caráter especial). Essa
          distinção organiza não apenas a vida religiosa, mas toda a experiência simbólica humana.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🙏</span>
            <h3>Função integradora</h3>
            <p>Os rituais religiosos reforçam laços sociais, renovam o sentimento de pertença e transmitem valores morais coletivos de geração em geração.</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Função normativa</h3>
            <p>A religião estabelece proibições e prescrições que regulam o comportamento individual. A moral religiosa antecede e fundamenta a moral laica nas sociedades tradicionais.</p>
          </div>
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Rituais coletivos</h3>
            <p>Os rituais produzem "efervescência coletiva" — estados de excitação intensa que renovam a consciência coletiva e reforçam a identidade do grupo. Ex.: festas religiosas brasileiras.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Educação</span>
        <h2>8. Durkheim e a educação como fato social</h2>
        <p>
          Para Durkheim, a <strong>educação</strong> é o mecanismo fundamental pelo qual a sociedade
          reproduz a si mesma ao longo do tempo. Em <em>Educação e Sociologia</em> (1922), ele definiu
          educação como "a ação exercida pelas gerações adultas sobre aquelas que ainda não estão
          maduras para a vida social". O objetivo da educação não é desenvolver o indivíduo para si
          mesmo, mas prepará-lo para a vida coletiva — transmitindo a consciência coletiva.
        </p>
        <p>
          Essa visão é <strong>funcionalista</strong>: a escola tem a função social de selecionar
          talentos, distribuir pessoas em posições sociais adequadas e transmitir os valores e normas
          da sociedade. O professor é o intermediário entre a geração adulta e a criança, representando
          a autoridade da sociedade sobre o indivíduo em formação.
        </p>
        <div className="lesson-highlight">
          <h3>Crítica à visão durkheimiana da educação</h3>
          <p>
            Pierre Bourdieu e Jean-Claude Passeron, em "A Reprodução" (1970), criticaram a visão
            funcionalista: a escola não transmite apenas valores neutros da "sociedade" — transmite
            os valores e o capital cultural das classes dominantes, reproduzindo desigualdades sociais
            sob o disfarce da meritocracia. Essa crítica marxista-estruturalista é uma das principais
            revisões do legado durkheimiano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisão anômica do trabalho</span>
        <h2>9. Formas patológicas da divisão do trabalho</h2>
        <p>
          Durkheim não idealizava a divisão do trabalho moderna. Em sua obra de 1893, ele identificou
          formas <strong>patológicas</strong> da divisão do trabalho que impediam a solidariedade orgânica
          de funcionar adequadamente. A principal é a <strong>divisão do trabalho anômica</strong>:
          quando a especialização avança sem que normas e regras adequadas sejam desenvolvidas para
          regular as relações entre os grupos especializados.
        </p>
        <p>
          Uma segunda forma patológica é a <strong>divisão do trabalho forçada</strong>: quando os
          indivíduos são alocados em funções sociais não de acordo com suas habilidades naturais e
          esforço, mas por herança, origem social ou discriminação. Nesse caso, a divisão gera conflito
          em vez de solidariedade, pois os indivíduos sentem sua posição como injusta. Durkheim via
          a meritocracia como condição para a solidariedade orgânica funcionar bem.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma patológica</th>
                <th>Causa</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Divisão anômica</strong></td>
                <td>Especialização sem normas reguladoras das relações entre grupos</td>
                <td>Conflito, desorientação, crise de solidariedade</td>
              </tr>
              <tr>
                <td><strong>Divisão forçada</strong></td>
                <td>Alocação por herança ou discriminação, não por mérito/habilidade</td>
                <td>Ressentimento, conflito de classes, ruptura social</td>
              </tr>
              <tr>
                <td><strong>Função mal coordenada</strong></td>
                <td>Superprodução de atividade sem utilidade social adequada</td>
                <td>Desperdício de talentos, ineficiência orgânica do sistema social</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado e atualidade</span>
        <h2>10. Durkheim e o funcionalismo: herança e atualidade</h2>
        <p>
          Durkheim é o pai do <strong>funcionalismo sociológico</strong> — a perspectiva teórica que
          analisa a sociedade como um sistema em que cada parte cumpre uma função para a manutenção do
          todo. Assim como os órgãos do corpo têm funções biológicas, as instituições sociais têm
          funções sociais: a religião integra, a educação socializa, o crime (paradoxalmente) reforça
          os limites das normas ao ser punido.
        </p>
        <p>
          Seu legado se expandiu pelo mundo anglófono graças a Talcott Parsons (EUA) e Robert Merton,
          que distinguiu entre <strong>funções manifestas</strong> (declaradas e intencionais) e{" "}
          <strong>funções latentes</strong> (não declaradas e não intencionais) das instituições. No
          Brasil, o funcionalismo influenciou a Sociologia da educação e os estudos sobre integração
          e exclusão social.
        </p>
        <div className="lesson-highlight">
          <h3>Críticas ao funcionalismo durkheimiano</h3>
          <p>
            Os críticos apontam que o funcionalismo tende a naturalizar a ordem existente — ao descrever
            tudo como tendo uma "função", justifica o status quo. Marx criticaria que o funcionalismo
            ignora os conflitos de classe e as relações de exploração. Weber criticaria o excesso de
            holismo e a negligência com o sentido subjetivo das ações. Apesar das críticas, os conceitos
            durkheimianos de anomia, consciência coletiva e solidariedade continuam sendo ferramentas
            analíticas valiosas no século XXI.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Características dos fatos sociais"
          statement={
            <p>
              Segundo Durkheim, os fatos sociais possuem três características fundamentais.
              Qual das alternativas lista CORRETAMENTE essas características?
            </p>
          }
          options={[
            { letter: "A", text: "Subjetividade, voluntariedade e particularidade." },
            { letter: "B", text: "Exterioridade, coercitividade e generalidade.", correct: true },
            { letter: "C", text: "Individualidade, racionalidade e utilidade." },
            { letter: "D", text: "Historicidade, materialidade e objetividade econômica." },
            { letter: "E", text: "Liberdade, igualdade e solidariedade." },
          ]}
          resolution={
            <p>
              As três características dos fatos sociais são: <strong>exterioridade</strong> (existem
              fora do indivíduo), <strong>coercitividade</strong> (impõem-se com pressão social) e
              <strong> generalidade</strong> (são coletivos, difundidos por toda a sociedade ou grupo).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Solidariedade mecânica vs. orgânica"
          statement={
            <p>
              Em uma aldeia indígena amazônica, todos os adultos caçam, pescam, cultivam e preparam
              os alimentos de modo semelhante. A coesão social é garantida por crenças, rituais e
              valores compartilhados. Segundo Durkheim, essa forma de coesão social é chamada de:
            </p>
          }
          options={[
            { letter: "A", text: "Solidariedade orgânica, pois todos desempenham funções diferentes dentro do grupo." },
            { letter: "B", text: "Anomia, pois a falta de divisão do trabalho gera desorientação social." },
            { letter: "C", text: "Solidariedade mecânica, pois a coesão se baseia na semelhança e na consciência coletiva forte.", correct: true },
            { letter: "D", text: "Fato social de tipo altruísta, pois os indivíduos se sacrificam pelo bem coletivo." },
            { letter: "E", text: "Direito restitutivo, pois a comunidade regula os conflitos por meio de contratos." },
          ]}
          resolution={
            <p>
              A <strong>solidariedade mecânica</strong> é típica das sociedades simples, onde todos
              fazem atividades semelhantes e a coesão vem da <em>semelhança</em> entre os membros.
              A consciência coletiva (valores e crenças compartilhados) absorve a individualidade.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Anomia e crise social"
          statement={
            <p>
              Durante a crise econômica de 2008, as taxas de suicídio e depressão aumentaram
              significativamente em países afetados pelo desemprego em massa. À luz da teoria
              de Durkheim, esse fenômeno pode ser explicado como:
            </p>
          }
          options={[
            { letter: "A", text: "Suicídio altruísta, pois as pessoas se sacrificam pelo bem da economia nacional." },
            { letter: "B", text: "Solidariedade mecânica em colapso, pois as semelhanças entre os trabalhadores desapareceram." },
            { letter: "C", text: "Suicídio anômico, pois a crise econômica destrói as referências normativas que regulam os desejos e expectativas dos indivíduos.", correct: true },
            { letter: "D", text: "Fato social de exterioridade, pois a crise é um fenômeno externo à vontade individual." },
            { letter: "E", text: "Solidariedade orgânica, pois a divisão do trabalho se intensifica em períodos de crise." },
          ]}
          resolution={
            <p>
              Para Durkheim, o <strong>suicídio anômico</strong> ocorre quando as regulações sociais
              que orientam desejos e expectativas entram em colapso — tipicamente em crises econômicas
              que destroem empregos, status e projetos de vida. A anomia não é individual: é um
              estado de desregulação coletiva da sociedade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Divisão do trabalho forçada"
          statement={
            <p>
              Durkheim distinguiu a divisão do trabalho normal (que gera solidariedade orgânica) da
              "divisão do trabalho forçada", que gera conflito. Qual situação ilustra melhor essa forma
              patológica identificada por Durkheim?
            </p>
          }
          options={[
            { letter: "A", text: "Um médico que escolhe a especialidade de cardiologia motivado por salários mais altos." },
            { letter: "B", text: "Uma trabalhadora negra qualificada que é preterida em promoções por discriminação racial, sendo alocada em funções aquém de suas competências.", correct: true },
            { letter: "C", text: "Um engenheiro que muda de carreira para se tornar professor por vocação pedagógica." },
            { letter: "D", text: "Um jovem que herda a empresa da família e se especializa na área de gestão para dirigi-la." },
            { letter: "E", text: "Um agricultor que adota novas tecnologias e especializa sua produção em culturas de exportação." },
          ]}
          resolution={
            <p>
              A <strong>divisão do trabalho forçada</strong> ocorre quando os indivíduos são alocados
              em funções sociais não por suas habilidades e mérito, mas por fatores externos — discriminação
              racial, herança de classe, gênero. Para Durkheim, isso gera ressentimento e conflito, pois
              viola o princípio de que a posição social deve corresponder ao talento e esforço de cada um.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Durkheim e a educação"
          statement={
            <p>
              <em>"A educação é a ação exercida pelas gerações adultas sobre aquelas que ainda não
              estão maduras para a vida social. Ela tem por objeto suscitar e desenvolver na criança
              certo número de estados físicos, intelectuais e morais que dela reclamam a sociedade
              política e o meio social ao qual é destinada." (Durkheim, Educação e Sociologia, 1922)</em>{" "}
              De acordo com esse trecho, qual visão Durkheim tem sobre a função da educação?
            </p>
          }
          options={[
            { letter: "A", text: "A educação deve desenvolver a criatividade e a autonomia individual acima de tudo." },
            { letter: "B", text: "A educação é um instrumento de luta de classes que reproduz a ideologia dominante." },
            { letter: "C", text: "A educação é um fato social que transmite os valores e normas coletivos, integrando o indivíduo à sociedade.", correct: true },
            { letter: "D", text: "A educação deve ser organizada pelo mercado de trabalho, de acordo com a demanda econômica." },
            { letter: "E", text: "A educação é uma ação racional do indivíduo para aumentar seu capital humano e produtividade." },
          ]}
          resolution={
            <p>
              Para Durkheim, a educação é, fundamentalmente, um mecanismo de <strong>socialização</strong>
              e de transmissão da <strong>consciência coletiva</strong>: ela não deve formar o
              indivíduo para si mesmo, mas para a sociedade. A escola é o agente do fato social
              educativo — exterior ao indivíduo, coercitivo e geral. Essa visão funcionalista contrasta
              com a visão crítica de Bourdieu e com o individualismo liberal.
            </p>
          }
        />
      </section>
    </article>
  );
}
