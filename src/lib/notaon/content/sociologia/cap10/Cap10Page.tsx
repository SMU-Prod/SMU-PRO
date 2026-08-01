"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 10</span>
          <h1>Comparando Marx, Durkheim e Weber: diferentes interpretações da sociedade</h1>
          <p>
            Os três pensadores viveram no mesmo período turbulento da modernidade industrial, mas cada um
            construiu uma lente diferente para enxergar a sociedade — e dominar essas perspectivas é a chave
            para resolver as questões de Sociologia do ENEM com segurança e profundidade. Este capítulo
            aprofunda a comparação sistemática entre os três clássicos em temas essenciais: método, desigualdade,
            religião, trabalho, Estado, indivíduo e mudança social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Metodologia</span>
        <h2>1. Como cada um estuda a sociedade</h2>
        <p>
          A primeira diferença entre os três clássicos está no <strong>método</strong> — a forma como acreditam
          que a Sociologia deve produzir conhecimento científico válido. Essa diferença metodológica não é
          técnica apenas: reflete visões de mundo distintas sobre o que é a realidade social.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Durkheim — Objetivismo</h3>
            <p>
              Os fatos sociais devem ser estudados como coisas externas ao indivíduo, de forma objetiva e
              comparativa, como nas ciências naturais. A sociedade é maior que a soma dos indivíduos e exerce
              coerção sobre eles. Método empírico-comparativo com uso de estatísticas.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Marx — Materialismo histórico</h3>
            <p>
              A história é explicada pelas condições materiais de produção. Análise das contradições econômicas
              e das lutas de classe por meio da dialética. O conhecimento é inseparável da crítica e da
              transformação social — a Sociologia deve servir à emancipação.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Weber — Compreensão (Verstehen)</h3>
            <p>
              A Sociologia deve compreender o sentido subjetivo que os atores atribuem às suas ações. Usa tipos
              ideais como instrumentos analíticos. A ciência deve ser neutra em relação a valores (Wertfreiheit),
              embora os valores orientem as perguntas de pesquisa.
            </p>
          </div>
        </div>
        <p>
          Uma forma simples de lembrar: Durkheim estuda a sociedade <em>de fora</em> (como coisa), Marx
          estuda a sociedade <em>por baixo</em> (pelas relações de produção), Weber estuda a sociedade
          <em> por dentro</em> (pelo sentido que os atores atribuem às ações).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grande tabela comparativa</span>
        <h2>2. Os três clássicos frente a frente</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Durkheim</th>
                <th>Marx</th>
                <th>Weber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Objeto central</strong></td>
                <td>Fatos sociais, coesão e solidariedade</td>
                <td>Modo de produção, classes sociais</td>
                <td>Ação social com sentido</td>
              </tr>
              <tr>
                <td><strong>Método</strong></td>
                <td>Objetivismo, comparação estatística</td>
                <td>Dialética materialista, crítica</td>
                <td>Verstehen, tipos ideais</td>
              </tr>
              <tr>
                <td><strong>Desigualdade</strong></td>
                <td>Divisão do trabalho social; anomia quando a divisão é forçada ou anômica</td>
                <td>Luta de classes; exploração do proletariado pela burguesia</td>
                <td>Três dimensões: classe (econômica), status (prestígio) e partido (poder político)</td>
              </tr>
              <tr>
                <td><strong>Religião</strong></td>
                <td>Cimento social — cria coesão, integra a comunidade (Formas Elementares)</td>
                <td>"Ópio do povo" — aliena e anestesia os oprimidos, mascarando a exploração</td>
                <td>Força cultural com impacto causal real (ética protestante e espírito do capitalismo)</td>
              </tr>
              <tr>
                <td><strong>Divisão do trabalho</strong></td>
                <td>Solidariedade orgânica — integra pela interdependência; patológica quando forçada</td>
                <td>Alienação — fragmenta o trabalhador e separa-o do produto e de si mesmo</td>
                <td>Racionalização — especialização técnica como parte da modernidade burocrática</td>
              </tr>
              <tr>
                <td><strong>Estado</strong></td>
                <td>Órgão de elaboração moral coletiva que sintetiza a consciência social</td>
                <td>Instrumento de dominação da classe burguesa sobre o proletariado</td>
                <td>Monopólio legítimo da violência física; dominação racional-legal nas democracias</td>
              </tr>
              <tr>
                <td><strong>Mudança social</strong></td>
                <td>Evolução gradual da solidariedade mecânica à orgânica; reformas para reintegração</td>
                <td>Revolução proletária como ruptura com o capitalismo rumo ao socialismo/comunismo</td>
                <td>Racionalização crescente e "desencantamento do mundo"; mudança sem telos revolucionário</td>
              </tr>
              <tr>
                <td><strong>Indivíduo × Sociedade</strong></td>
                <td>Sociedade é externa e coercitiva; molda o indivíduo</td>
                <td>Indivíduo é produto das relações de produção; consciência determinada pelo ser social</td>
                <td>Ponto de partida é o indivíduo e o sentido que ele atribui à ação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Religião</span>
        <h2>3. Visões sobre religião: do ópio ao cimento social</h2>
        <p>
          A religião é um dos temas em que as diferenças entre os três pensadores ficam mais nítidas — e que
          o ENEM adora explorar. Cada um a analisa por uma lente radicalmente diferente:
        </p>
        <div className="lesson-highlight">
          <h3>Durkheim: religião como integração coletiva</h3>
          <p>
            Em <em>As Formas Elementares da Vida Religiosa</em> (1912), Durkheim estudou o totemismo aborigene
            australiano e concluiu que o sagrado é a própria sociedade adorando a si mesma. A religião cria
            rituais coletivos que reforçam a solidariedade, renovam o sentimento de pertença e transmitem
            valores morais. Sem religião (ou equivalente funcional), a sociedade perderia coesão.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Marx: religião como ideologia e alienação</h3>
          <p>
            "A religião é o suspiro da criatura oprimida, o coração de um mundo sem coração, o espírito de uma
            época sem espírito. É o ópio do povo." A religião seria uma forma de <em>consolo ilusório</em> que
            desvia os oprimidos da luta real contra a exploração capitalista, prometendo recompensas num além
            que justifica o sofrimento presente. Faz parte da superestrutura ideológica.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Weber: religião como força cultural ativa</h3>
          <p>
            Weber não reduzia a religião nem a coesão (Durkheim) nem a alienação (Marx). Para ele, as ideias
            religiosas têm um <em>poder causal independente</em>: a ética calvinista foi decisiva para moldar
            o comportamento econômico que tornou possível o capitalismo moderno na Europa Ocidental. As
            religiões não apenas refletem a sociedade — elas a transformam.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade</span>
        <h2>4. Desigualdade social: classe, status ou anomia?</h2>
        <p>
          A desigualdade social é analisada pelos três pensadores por ângulos completamente distintos, o que
          reflete suas diferenças metodológicas e políticas fundamentais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pensador</th>
                <th>Origem da desigualdade</th>
                <th>Natureza do problema</th>
                <th>Solução proposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Durkheim</strong></td>
                <td>Divisão do trabalho anômica ou forçada</td>
                <td>Patologia social — disfunção do organismo</td>
                <td>Reforma: criar corporações profissionais e normas reguladoras</td>
              </tr>
              <tr>
                <td><strong>Marx</strong></td>
                <td>Propriedade privada dos meios de produção e extração de mais-valia</td>
                <td>Exploração estrutural — constitutiva do capitalismo</td>
                <td>Revolução: abolição da propriedade privada, socialismo</td>
              </tr>
              <tr>
                <td><strong>Weber</strong></td>
                <td>Mercado, prestígio e poder político — três ordens independentes</td>
                <td>Pluralidade de hierarquias irredutíveis uma à outra</td>
                <td>Não propõe solução única; analisa tensões e compromissos democráticos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A diferença política é marcante: Marx propõe revolução, Durkheim propõe reforma e Weber não propõe
          nenhum projeto político específico — por respeito à separação entre ciência e valores. Para Marx,
          desigualdade é necessariamente má. Para Durkheim, ela é natural desde que reflita méritos reais.
          Para Weber, é um fenômeno pluridimensional sem solução única.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conflito vs. consenso</span>
        <h2>5. Conflito ou consenso: como cada um vê a ordem social</h2>
        <p>
          Uma das mais importantes clivagens na Sociologia é entre as teorias que enfatizam o
          <strong> conflito</strong> e as que enfatizam o <strong>consenso</strong> como base da ordem social.
          Essa distinção organiza boa parte do pensamento sociológico e ajuda a entender as diferenças
          entre os três clássicos:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Durkheim: ênfase no consenso</h3>
            <p>
              A sociedade se mantém unida pela consciência coletiva, pelos valores compartilhados e pela
              interdependência funcional. O conflito é patológico — sinal de disfunção. A harmonia social é
              o estado normal e desejável.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Marx: ênfase no conflito</h3>
            <p>
              A ordem social é fundamentalmente baseada no conflito de classes — a classe dominante usa a
              coerção e a ideologia para manter sua posição. A harmonia aparente é resultado da dominação,
              não do consenso genuíno. O conflito é o motor da história.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Weber: entre conflito e consenso</h3>
            <p>
              Weber analisa poder e dominação sem reduzi-los ao conflito de classes. A legitimidade (crença
              na validade da dominação) cria um consenso que não é mera ilusão ideológica — é uma realidade
              social com efeitos próprios. Há tensão permanente entre diferentes valores e interesses.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Capitalismo</span>
        <h2>6. O capitalismo por três lentes</h2>
        <p>
          O capitalismo industrial foi o pano de fundo comum dos três pensadores. Cada um o analisou de
          forma distinta, chegando a conclusões políticas radicalmente diferentes:
        </p>
        <div className="lesson-highlight">
          <h3>Marx: o capitalismo como sistema de exploração</h3>
          <p>
            O capitalismo é fundamentalmente um sistema de exploração: a burguesia extrai mais-valia do
            proletariado. Sua contradição central (forças produtivas crescentes × relações de produção
            capitalistas) levará inevitavelmente à crise e à revolução socialista. O capitalismo não pode
            ser reformado — precisa ser superado.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Durkheim: o capitalismo como sociedade em formação</h3>
          <p>
            O capitalismo industrial é um estágio de transição dolorosa da solidariedade mecânica para a
            orgânica. Os problemas (anomia, suicídio, conflito de classes) não são constitutivos do
            capitalismo — são disfunções que podem ser corrigidas por reformas institucionais. Durkheim
            via com esperança a criação de corporações profissionais (algo entre sindicatos e ordens
            profissionais) como forma de reintegração.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Weber: o capitalismo como racionalização irresistível</h3>
          <p>
            O capitalismo moderno é o resultado da racionalização de todas as esferas da vida — não apenas
            a econômica, mas também a política (Estado burocrático), jurídica (direito formal) e cultural
            (ciência secular). Uma vez instalado, é virtualmente irreversível. Weber não propõe sua superação,
            mas analisa suas consequências com ambiguidade: avanço e jaula de ferro ao mesmo tempo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Educação e Estado</span>
        <h2>7. Educação, Estado e controle social</h2>
        <p>
          Outro campo onde as diferenças entre os três pensadores são marcantes é a análise da educação e
          do Estado:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Instituição</th>
                <th>Durkheim</th>
                <th>Marx</th>
                <th>Weber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Educação</strong></td>
                <td>Mecanismo de socialização: transmite a consciência coletiva e prepara para a vida social</td>
                <td>Aparelho ideológico: reproduz os valores da classe dominante e legitima a desigualdade</td>
                <td>Produz competências técnicas para a burocracia; transmite valores racionais da modernidade</td>
              </tr>
              <tr>
                <td><strong>Estado</strong></td>
                <td>Órgão de elaboração moral da sociedade; sintetiza a consciência coletiva em leis</td>
                <td>Instrumento da burguesia para manter sua dominação sobre o proletariado</td>
                <td>Monopólio legítimo da violência; organização burocrática por excelência</td>
              </tr>
              <tr>
                <td><strong>Direito</strong></td>
                <td>Expressão da solidariedade — repressivo (mecânico) ou restitutivo (orgânico)</td>
                <td>Superestrutura que protege a propriedade privada e os interesses burgueses</td>
                <td>Sistema de normas impessoais que fundamenta a dominação racional-legal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modernidade</span>
        <h2>8. Diagnóstico da modernidade: cada um com sua ênfase</h2>
        <p>
          Cada um dos três clássicos tinha um diagnóstico específico do problema central da modernidade —
          e cada diagnóstico apontava para um remédio diferente:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Durkheim: anomia</h3>
            <p>
              O grande mal da modernidade é a <strong>anomia</strong>: o enfraquecimento das normas coletivas
              que orientam o comportamento individual. A solução é reconstruir o laço social por meio de novas
              instituições de regulação (corporações profissionais, educação moral laica).
            </p>
          </div>
          <div className="lesson-card">
            <span>⛓️</span>
            <h3>Marx: alienação e exploração</h3>
            <p>
              O grande mal da modernidade capitalista é a <strong>alienação</strong> do trabalhador e a
              <strong> exploração</strong> estrutural pela mais-valia. A solução é a revolução proletária
              que elimine a propriedade privada e restabeleça a apropriação coletiva da produção.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Weber: jaula de ferro</h3>
            <p>
              O grande paradoxo da modernidade é que a <strong>racionalização</strong> que libertou os humanos
              da superstição e da tirania também cria uma "jaula de ferro" burocrática que priva a vida de
              sentido. Não há solução fácil — apenas tensão permanente.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Herança teórica</span>
        <h2>9. Herdeiros e críticos dos três clássicos</h2>
        <p>
          Os três clássicos geraram tradições teóricas que se desenvolveram ao longo do século XX e continuam
          influentes no século XXI:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tradição</th>
                <th>Herdeiros principais</th>
                <th>Contribuições</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Funcionalismo (Durkheim)</strong></td>
                <td>Talcott Parsons, Robert Merton, Pierre Bourdieu (crítico-herdeiro)</td>
                <td>Sociologia das instituições, teoria do sistema social, funções manifestas e latentes</td>
              </tr>
              <tr>
                <td><strong>Marxismo</strong></td>
                <td>Antonio Gramsci, Escola de Frankfurt, Louis Althusser, Florestan Fernandes</td>
                <td>Hegemonia, indústria cultural, aparelhos ideológicos do Estado, capitalismo periférico</td>
              </tr>
              <tr>
                <td><strong>Weberianismo</strong></td>
                <td>Talcott Parsons, C. Wright Mills, Norbert Elias, Zygmunt Bauman</td>
                <td>Teoria do poder, civilização dos costumes, modernidade líquida, imaginação sociológica</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Pierre Bourdieu ocupa uma posição singular: herdou elementos de todas as três tradições. De Durkheim,
          tomou o objetivismo metodológico e a análise das instituições. De Marx, tomou a atenção às
          desigualdades e à reprodução social. De Weber, tomou o conceito de status e a análise do poder
          simbólico. O resultado foi uma síntese original nos conceitos de <strong>habitus</strong>,
          <strong> campo</strong> e <strong>capital</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atualidade</span>
        <h2>10. Por que esses três pensadores ainda importam</h2>
        <p>
          Os três clássicos não são apenas patrimônio histórico da Sociologia — são ferramentas vivas para
          analisar o mundo contemporâneo. Nenhum dos três é suficiente sozinho. A Sociologia contemporânea
          frequentemente articula as três perspectivas:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Durkheim e a coesão</h3>
            <p>Análise de crises de integração social, violência urbana, suicídio, anomia em contextos de desemprego e individualismo exacerbado.</p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Marx e o capitalismo</h3>
            <p>Compreensão das desigualdades globais, precarização do trabalho, plataformas digitais, crise financeira e concentração de riqueza.</p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Weber e o poder</h3>
            <p>Análise da burocracia estatal, populismo, democracia, liderança carismática na política e o papel dos valores culturais na economia.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Como usar os três no ENEM</h3>
          <p>
            Uma dica prática: ao encontrar uma questão de Sociologia no ENEM, identifique qual(is) dos três
            clássicos está(ão) sendo acionados pelo enunciado. Palavras-chave: <strong>anomia, solidariedade,
            fato social</strong> → Durkheim; <strong>mais-valia, alienação, luta de classes, ideologia</strong>
            → Marx; <strong>ação social, burocracia, dominação, racionalização</strong> → Weber. Muitas
            questões pedem justamente distinguir ou comparar as perspectivas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Religião como 'ópio do povo'"
          statement={
            <p>
              A expressão "a religião é o ópio do povo" é atribuída a Marx e expressa a ideia de que a religião:
            </p>
          }
          options={[
            { letter: "A", text: "Funciona como cimento social, integrando os indivíduos em torno de valores e rituais coletivos." },
            { letter: "B", text: "É uma força cultural capaz de moldar a ética econômica e impulsionar o capitalismo." },
            { letter: "C", text: "Aliena os oprimidos, oferecendo consolo ilusório que os desvia da luta contra a exploração.", correct: true },
            { letter: "D", text: "É um fato social externo que exerce coerção sobre os indivíduos independentemente de sua vontade." },
            { letter: "E", text: "Representa a dominação carismática de líderes religiosos sobre comunidades tradicionais." },
          ]}
          resolution={
            <p>
              Para Marx, a religião é uma ideologia que mascara a exploração capitalista, oferecendo ao oprimido
              a promessa de recompensa futura e consolando-o no sofrimento presente, impedindo-o de reconhecer
              e combater as causas reais de sua condição.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Conceito de anomia"
          statement={
            <p>
              Para Durkheim, o conceito de anomia refere-se a:
            </p>
          }
          options={[
            { letter: "A", text: "A ausência de consciência de classe por parte do proletariado submetido à ideologia burguesa." },
            { letter: "B", text: "A situação em que as normas sociais se enfraquecem ou se tornam contraditórias, gerando desorientação e comportamentos desviantes.", correct: true },
            { letter: "C", text: "O processo de racionalização que elimina valores tradicionais e religiosos da vida social moderna." },
            { letter: "D", text: "A competição excessiva entre indivíduos no mercado capitalista que destrói os laços comunitários." },
            { letter: "E", text: "A dominação burocrática que aprisiona o indivíduo em regras formais e impessoais." },
          ]}
          resolution={
            <p>
              Anomia (do grego "a-nomos", sem lei) é o estado em que as normas reguladoras do comportamento
              social se tornam insuficientes ou contraditórias. Durkheim usou o conceito para explicar o aumento
              do suicídio em períodos de crise econômica ou de rápida transformação social.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Estratificação multidimensional"
          statement={
            <p>
              Ao contrário de Marx, que centrava a estratificação social na posição econômica (classe), Weber
              propôs uma análise tridimensional. Assinale a alternativa que apresenta corretamente as três
              dimensões weberianas:
            </p>
          }
          options={[
            { letter: "A", text: "Raça, gênero e geração — as três clivagens fundamentais das sociedades modernas." },
            { letter: "B", text: "Consciência de classe, alienação e ideologia — dimensões subjetivas da exploração capitalista." },
            { letter: "C", text: "Classe (econômica), status (prestígio social) e partido (poder político).", correct: true },
            { letter: "D", text: "Solidariedade mecânica, solidariedade orgânica e anomia — estágios evolutivos da coesão social." },
            { letter: "E", text: "Infraestrutura, superestrutura e ideologia — os três níveis do materialismo histórico." },
          ]}
          resolution={
            <p>
              Weber propôs que a posição social resulta de três ordens independentes: classe (relação com o
              mercado e posse de bens), status (prestígio e estilo de vida reconhecido pelo grupo) e partido
              (capacidade de influenciar decisões políticas). Um indivíduo pode ter alta classe econômica mas
              baixo status (novo rico), ou vice-versa.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Solidariedade orgânica vs. luta de classes"
          statement={
            <p>
              Durkheim e Marx analisaram a divisão do trabalho industrial, mas chegaram a conclusões opostas.
              Identifique a diferença central entre as duas interpretações:
            </p>
          }
          options={[
            { letter: "A", text: "Durkheim via a divisão do trabalho como fonte de alienação; Marx a via como fundamento da solidariedade orgânica." },
            { letter: "B", text: "Para ambos, a divisão do trabalho era um problema social que precisava ser eliminado pela ação coletiva." },
            { letter: "C", text: "Durkheim entendia a divisão do trabalho como criadora de interdependência e solidariedade orgânica; Marx a via como fonte de alienação e exploração do proletariado.", correct: true },
            { letter: "D", text: "Marx via a divisão do trabalho como racionalização técnica positiva; Durkheim a analisava como desencantamento do mundo." },
            { letter: "E", text: "As duas perspectivas são complementares e não apresentam diferenças significativas sobre o papel da divisão do trabalho." },
          ]}
          resolution={
            <p>
              Para Durkheim, a divisão do trabalho cria solidariedade orgânica ao tornar os indivíduos
              mutuamente dependentes. O problema social (anomia) surge quando ela é imposta de forma forçada,
              não quando existe em si. Para Marx, a divisão do trabalho é constitutivamente alienante no
              capitalismo, pois fragmenta o trabalhador e separa-o do produto e do processo produtivo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Diagnóstico sociológico do teletrabalho"
          statement={
            <p>
              (Adaptada ENEM) "O desenvolvimento tecnológico das últimas décadas criou uma nova classe de
              trabalhadores: aqueles que, apesar de formalmente empregados, não têm onde se sentar no
              escritório, trabalham em casa sem horário fixo e perdem o senso de pertencimento ao grupo."
              Identifique o conceito sociológico mais adequado a essa situação e o autor a que melhor
              se relaciona:
            </p>
          }
          options={[
            { letter: "A", text: "Alienação (Marx) — o trabalhador perde o controle sobre o processo de trabalho e sobre si mesmo." },
            { letter: "B", text: "Anomia (Durkheim) — a ausência de normas claras de vínculo e pertença gera desorientação social.", correct: true },
            { letter: "C", text: "Desencantamento do mundo (Weber) — a racionalização tecnológica elimina o sentido espiritual do trabalho." },
            { letter: "D", text: "Solidariedade mecânica (Durkheim) — retorno a formas tradicionais de vínculo em contextos digitais." },
            { letter: "E", text: "Consciência de classe (Marx) — o trabalhador digital reconhece sua situação de exploração." },
          ]}
          resolution={
            <p>
              Embora Marx (alienação) e Weber (racionalização/desencantamento) também ofereçam lentes válidas,
              o foco na falta de pertencimento, desorientação normativa e ruptura dos laços coletivos aponta
              para a anomia durkheimiana. Durkheim estudou como a ausência de normas integradoras gera
              sofrimento social — condição muito presente no teletrabalho desregulado.
            </p>
          }
        />
      </section>
    </article>
  );
}
