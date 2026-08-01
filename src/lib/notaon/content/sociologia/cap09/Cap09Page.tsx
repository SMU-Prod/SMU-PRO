"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 9</span>
          <h1>Max Weber: ação social, burocracia, racionalização e poder</h1>
          <p>
            Weber construiu uma Sociologia centrada no indivíduo e no sentido que ele atribui às suas ações —
            uma virada metodológica que permitiu compreender fenômenos como o surgimento do capitalismo moderno,
            a dominação burocrática, o "desencantamento do mundo" e as formas de poder legítimo que estruturam
            os Estados e organizações contemporâneas. Sua obra é indispensável para o ENEM e para a análise
            crítica da política e das instituições.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método e contexto</span>
        <h2>1. Weber e o método compreensivo (Verstehen)</h2>
        <p>
          Max Weber (1864–1920) viveu numa Alemanha em plena industrialização e unificação nacional. Ao contrário
          de Durkheim, que tratava os fatos sociais como coisas externas ao indivíduo, Weber defendia que a
          Sociologia deve <strong>compreender</strong> (<em>verstehen</em>) o <strong>sentido subjetivo</strong>{" "}
          que os atores atribuem às suas ações. Não basta descrever o comportamento — é preciso entender o
          significado que ele tem para quem o realiza.
        </p>
        <p>
          Para Weber, o objeto central da Sociologia é a <strong>ação social</strong>: qualquer comportamento
          humano ao qual o agente atribui sentido <em>e</em> que leva em conta o comportamento de outros. Uma
          ação que não considera os outros não é social — alguém que tropeça não age socialmente; alguém que
          cumprimenta o vizinho, sim. Essa definição coloca o indivíduo e o sentido subjetivo no centro da
          análise, em contraste com o holismo durkheimiano e o determinismo econômico marxista.
        </p>
        <div className="lesson-highlight">
          <h3>Tipo ideal: ferramenta analítica de Weber</h3>
          <p>
            Weber utilizou o conceito de <strong>tipo ideal</strong>: uma construção mental que exagera e
            sistematiza traços de um fenômeno real para torná-lo comparável e analisável. Não é um modelo
            perfeito nem uma média estatística — é uma ferramenta analítica deliberadamente distorcida.
            A "burocracia ideal" nunca existe pura na realidade, mas serve para medir o quanto as burocracias
            reais se afastam ou aproximam desse padrão. Os tipos ideais de ação social e de dominação são
            os exemplos mais famosos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de ação social</span>
        <h2>2. Os quatro tipos de ação social</h2>
        <p>
          Weber classificou as ações sociais em quatro tipos segundo o critério de racionalidade e motivação.
          Esses tipos não são mutuamente exclusivos — uma mesma ação pode combinar elementos de mais de um tipo.
          São <em>tipos ideais</em>: instrumentos analíticos que raramente aparecem puros na realidade social.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de ação</th>
                <th>Motivação central</th>
                <th>Racionalidade</th>
                <th>Exemplo concreto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Racional com relação a fins</strong> (zweckrational)</td>
                <td>Cálculo de meios e fins para maximizar resultados</td>
                <td>Alta — instrumental</td>
                <td>Negociação empresarial; escolha de universidade pelo retorno financeiro</td>
              </tr>
              <tr>
                <td><strong>Racional com relação a valores</strong> (wertrational)</td>
                <td>Fidelidade a um princípio ético, estético ou religioso</td>
                <td>Racional dentro do sistema de valores, mas sem cálculo de consequências</td>
                <td>Médico que recusa procedimento antiético mesmo perdendo cliente; greve por justiça</td>
              </tr>
              <tr>
                <td><strong>Afetiva</strong></td>
                <td>Estados emocionais — amor, raiva, medo, entusiasmo</td>
                <td>Baixa — impulso emocional</td>
                <td>Choro numa cerimônia; ato impulsivo de generosidade ou agressão</td>
              </tr>
              <tr>
                <td><strong>Tradicional</strong></td>
                <td>Hábito e costume estabelecido — "sempre foi assim"</td>
                <td>Baixa — seguir a tradição sem reflexão</td>
                <td>Rezar antes de dormir; cumprimentar vizinhos por costume</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para Weber, a modernidade é caracterizada pela crescente predominância da ação racional com relação
          a fins (zweckrational) sobre os demais tipos — especialmente sobre a ação tradicional e afetiva.
          Esse processo é o que ele chama de <strong>racionalização</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Poder e dominação</span>
        <h2>3. Poder, dominação e legitimidade</h2>
        <p>
          Para Weber, <strong>poder</strong> (<em>Macht</em>) é a probabilidade de impor a própria vontade numa
          relação social, mesmo contra resistências. Mas o poder baseado apenas na coerção é instável e
          custoso. O poder duradouro transforma-se em <strong>dominação</strong> (<em>Herrschaft</em>):
          a probabilidade de que um comando seja obedecido. E a dominação duradoura requer
          <strong> legitimidade</strong> — a crença dos dominados de que a dominação é justa e válida.
        </p>
        <p>
          Weber identificou três fontes de legitimidade, correspondendo a três tipos de dominação:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👴</span>
            <h3>Dominação tradicional</h3>
            <p>
              Legitimidade baseada nos costumes e na sacralidade da tradição. "Sempre foi assim."
              O líder (patriarca, rei) obedece e faz obedecer em nome da tradição. Ex.: monarquias
              hereditárias, autoridade patriarcal na família tradicional.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Dominação carismática</h3>
            <p>
              Legitimidade baseada nas qualidades extraordinárias (dom, heroísmo, santidade) atribuídas
              ao líder pelos seguidores. Ex.: profetas religiosos, líderes populistas, guerreiros heroicos,
              fundadores de movimentos revolucionários.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Dominação racional-legal</h3>
            <p>
              Legitimidade baseada em normas impessoais e na legalidade dos procedimentos. Obedece-se
              à norma, não à pessoa. Ex.: democracias constitucionais, burocracia estatal, cargos
              eletivos, hierarquias empresariais formais.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Rotinização do carisma</h3>
          <p>
            Weber observou que a dominação carismática é intrinsecamente instável — depende da manutenção
            do "dom" percebido. Quando o líder morre ou perde prestígio, o grupo enfrenta uma crise de
            sucessão que geralmente resulta em <strong>rotinização do carisma</strong>: a mensagem carismática
            é institucionalizada em tradição (dominação tradicional) ou em regras burocráticas (dominação
            racional-legal). É o que aconteceu com o cristianismo após a morte de Jesus Cristo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Burocracia</span>
        <h2>4. A burocracia como tipo ideal de organização</h2>
        <p>
          A <strong>burocracia</strong> é o tipo organizacional que corresponde à dominação racional-legal.
          Weber desenvolveu o tipo ideal burocrático para descrever a forma mais racional e eficiente de
          organização que a modernidade produz. Suas características constitutivas são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hierarquia definida</strong></td>
                <td>Cada cargo tem autoridade claramente delimitada e responde a um cargo superior</td>
              </tr>
              <tr>
                <td><strong>Competências fixas</strong></td>
                <td>As atribuições de cada cargo são definidas por normas escritas, não pela vontade do ocupante</td>
              </tr>
              <tr>
                <td><strong>Funcionários técnicos</strong></td>
                <td>Seleção por mérito e qualificação técnica (concurso, diploma), não por hereditariedade ou favoritismo</td>
              </tr>
              <tr>
                <td><strong>Separação público/privado</strong></td>
                <td>O funcionário não é dono do cargo — sua vida privada é separada de suas funções públicas</td>
              </tr>
              <tr>
                <td><strong>Normas escritas</strong></td>
                <td>Tudo é regulado por documentos formais — processos, regulamentos, atas, contratos</td>
              </tr>
              <tr>
                <td><strong>Impessoalidade</strong></td>
                <td>As decisões são tomadas com base em regras gerais, não em relações pessoais ou afetos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para Weber, a burocracia é tecnicamente superior a qualquer outra forma de organização — assim como
          a máquina é superior ao trabalho manual. Mas ela também produz o que ele chamou de "jaula de ferro"
          (<em>stahlhartes Gehäuse</em>): uma ordem racional fria, desumanizante, que aprisiona o indivíduo
          em regras e procedimentos sem espaço para criatividade ou valores.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Racionalização</span>
        <h2>5. Racionalização e desencantamento do mundo</h2>
        <p>
          O grande processo que define a modernidade ocidental para Weber é a <strong>racionalização</strong>:
          a substituição progressiva da tradição, da magia e dos valores pela lógica do cálculo, da eficiência
          e da norma impessoal. Ciência, burocracia, mercado e direito formal são expressões desse processo
          avassalador que transformou a Europa Ocidental e se expandiu globalmente.
        </p>
        <p>
          Isso leva ao <strong>"desencantamento do mundo"</strong> (<em>Entzauberung der Welt</em>): o mundo
          perde seu caráter mágico e misterioso, pois tudo pode (em princípio) ser explicado e controlado pela
          razão técnica e científica. A religião perde centralidade na orientação da vida cotidiana. A ciência
          substitui o mito. Os deuses e os espíritos são expulsos da natureza, do Estado e da economia.
        </p>
        <div className="lesson-highlight">
          <h3>Racionalização e seus paradoxos</h3>
          <p>
            Weber via a racionalização com ambiguidade: é um avanço (maior eficiência, liberdade das superstições,
            direitos formais) mas também uma perda (sentido, comunidade, magia). A modernidade resolve muitos
            problemas da tradição, mas cria novos: a "jaula de ferro" da burocracia, o conflito entre esferas
            de valor (ciência, arte, religião, política que se autonomizam e entram em tensão permanente), e a
            "guerra dos deuses" — a impossibilidade de fundamentar racionalmente uma escolha de valores últimos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética protestante</span>
        <h2>6. A ética protestante e o espírito do capitalismo</h2>
        <p>
          Em <em>A Ética Protestante e o Espírito do Capitalismo</em> (1905), Weber fez uma das análises
          mais influentes das ciências sociais: argumentou que o capitalismo moderno tem raízes culturais
          e religiosas específicas. A ética calvinista — com sua doutrina da <strong>predestinação</strong>
          (Deus já elegeu os salvos e os condenados antes do nascimento) — gerou uma angústia existencial
          intensa nos fiéis.
        </p>
        <p>
          Como os calvinistas não podiam saber se eram predestinados à salvação, buscavam <em>sinais</em>
          do favor divino no sucesso mundano. O trabalho disciplinado, a poupança, o ascetismo e o
          reinvestimento dos lucros — antes virtudes religiosas — tornaram-se o <strong>ethos do capitalismo
          moderno</strong>. Weber não estava dizendo que o protestantismo <em>causou</em> o capitalismo,
          mas que criou uma <em>afinidade eletiva</em>: uma relação de reforço mútuo entre ética religiosa
          e espírito econômico.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✝️</span>
            <h3>Calvinismo e predestinação</h3>
            <p>A crença de que Deus predestinou cada alma à salvação ou condenação criou angústia — e a necessidade de buscar sinais do favor divino no sucesso terreno.</p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Ascetismo intramundano</h3>
            <p>Trabalho duro, poupança, rejeição do luxo e reinvestimento dos ganhos — virtudes religiosas que coincidiram com as necessidades do acúmulo capitalista.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Secularização do ethos</h3>
            <p>Com a secularização, os valores religiosos persistiram como hábitos culturais mesmo quando a fé desapareceu — o "espírito do capitalismo" sobreviveu à ética protestante.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratificação social</span>
        <h2>7. Classe, status e partido: a estratificação tridimensional</h2>
        <p>
          Ao contrário de Marx, que centrava toda a desigualdade social na posição econômica (posse ou não
          dos meios de produção), Weber propôs uma análise <strong>tridimensional da estratificação social</strong>.
          Para ele, a posição de um indivíduo na hierarquia social é determinada por três ordens distintas,
          que podem variar independentemente:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💵</span>
            <h3>Classe (ordem econômica)</h3>
            <p>Determinada pela posição no mercado — posse de propriedade, nível de renda, capacidade de consumo e oportunidades de vida. Próxima mas não idêntica à classe marxista.</p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Status (ordem social)</h3>
            <p>Determinado pelo prestígio, pela honra e pelo estilo de vida reconhecido pelo grupo. Um nobre empobrecido pode ter alto status com baixa classe. Um "novo rico" pode ter alta classe com baixo status.</p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Partido (ordem política)</h3>
            <p>Determinado pela capacidade de exercer poder e influenciar decisões coletivas. Grupos organizados que buscam impor sua vontade, independentemente de classe ou status.</p>
          </div>
        </div>
        <p>
          Essa análise tridimensional é mais flexível que a marxista e permite explicar fenômenos como o de
          grupos com alta classe econômica mas baixo status social (parvenu), ou de grupos com alto status
          (intelectuais, artistas) mas sem correspondente poder econômico ou político.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado e política</span>
        <h2>8. O Estado, a política e o monopólio da violência</h2>
        <p>
          Weber formulou uma das definições mais influentes do <strong>Estado moderno</strong>: "uma comunidade
          humana que, dentro dos limites de um determinado território, reivindica para si (com êxito) o
          monopólio do uso legítimo da força física." O Estado não é o único que usa violência, mas é o único
          que pode fazê-lo <em>legitimamente</em> — a partir de normas jurídicas reconhecidas.
        </p>
        <p>
          Para Weber, a <strong>política</strong> é a luta pelo poder de influenciar a distribuição de poder
          dentro do Estado ou entre Estados. O político profissional deve ter três qualidades fundamentais:
          <strong> paixão</strong> (compromisso com uma causa), <strong>senso de responsabilidade</strong>
          (consciência das consequências de suas ações) e <strong>senso de proporção</strong> (capacidade
          de relacionar causas e efeitos realisticamente).
        </p>
        <div className="lesson-highlight">
          <h3>Ética da convicção vs. ética da responsabilidade</h3>
          <p>
            Em "A Política como Vocação" (1919), Weber distinguiu duas éticas políticas. A <strong>ética da
            convicção</strong> age conforme seus princípios, independentemente das consequências ("faço o bem
            e que venha o que vier"). A <strong>ética da responsabilidade</strong> leva em conta as consequências
            previsíveis das ações ("sou responsável pelos resultados do que faço"). Weber valorizava a tensão
            produtiva entre as duas — o político maduro precisa de ambas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociologia da religião</span>
        <h2>9. A sociologia da religião de Weber</h2>
        <p>
          Weber dedicou grande parte de sua vida a um projeto comparativo monumental: analisar como as grandes
          religiões mundiais (protestantismo, catolicismo, judaísmo, confucionismo, hinduísmo, budismo,
          islamismo) afetavam as atitudes econômicas e o desenvolvimento do capitalismo em diferentes
          civilizações. A conclusão: o capitalismo moderno, com seu ethos específico, só emergiu no
          Ocidente — e isso não é acidental, mas resultado de uma constelação específica de fatores
          culturais, religiosos e institucionais.
        </p>
        <p>
          Em contraste com Marx (religião como ideologia que distorce a realidade) e Durkheim (religião como
          cimento social), Weber via a religião como <strong>força cultural ativa</strong> capaz de moldar
          o comportamento econômico, político e social de formas imprevisíveis e irredutíveis às condições
          materiais. As ideias — inclusive as ideias religiosas — têm poder causal independente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Religião</th>
                <th>Traço central</th>
                <th>Efeito sobre o capitalismo (segundo Weber)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Calvinismo</strong></td>
                <td>Predestinação, ascetismo, trabalho como vocação</td>
                <td>Criou o "espírito do capitalismo" — ethos de trabalho duro e acúmulo</td>
              </tr>
              <tr>
                <td><strong>Confucionismo</strong></td>
                <td>Adaptação ao mundo, hierarquia, harmonia social</td>
                <td>Favoreceu estabilidade mas não o dinamismo criativo do capitalismo moderno</td>
              </tr>
              <tr>
                <td><strong>Hinduísmo</strong></td>
                <td>Castas, karma, fuga do mundo material</td>
                <td>O sistema de castas inibia a mobilidade e o espírito empreendedor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado weberiano</span>
        <h2>10. Legado de Weber: neutralidade axiológica e ciência social</h2>
        <p>
          Um dos conceitos metodológicos mais importantes de Weber é a <strong>neutralidade axiológica</strong>
          (<em>Wertfreiheit</em>): a ciência social deve ser rigorosa na distinção entre o que <em>é</em>
          (juízos de fato) e o que <em>deve ser</em> (juízos de valor). O cientista social pode e deve
          analisar os valores de diferentes grupos sem impor seus próprios valores pessoais à análise
          científica. Isso não significa que os valores não importam — eles são o ponto de partida que
          orienta as perguntas de pesquisa.
        </p>
        <p>
          O legado weberiano foi imenso. Na Sociologia política, seu estudo dos tipos de dominação é
          referência obrigatória. Na Sociologia das organizações, o tipo ideal burocrático fundamenta
          toda a teoria organizacional moderna. Na Sociologia da religião e da cultura, sua defesa da
          autonomia das ideias como força histórica abriu caminhos que vão de Talcott Parsons à
          Sociologia cultural contemporânea.
        </p>
        <div className="lesson-highlight">
          <h3>Weber e a democracia no Brasil</h3>
          <p>
            Os conceitos weberianos são ferramentas valiosas para analisar a política brasileira. O
            patrimonialismo — a confusão entre o público e o privado, tratando cargos e recursos
            estatais como propriedade pessoal — é uma herança da dominação tradicional que o sociólogo
            Sérgio Buarque de Holanda diagnosticou em "Raízes do Brasil" (1936). O populismo brasileiro
            pode ser lido como forma de dominação carismática. As democracias representativas são formas
            de dominação racional-legal — sempre tensionadas pelos demais tipos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Ação social"
          statement={
            <p>
              Segundo Max Weber, ação social é aquela que:
            </p>
          }
          options={[
            { letter: "A", text: "É realizada coletivamente por um grupo organizado com objetivos comuns." },
            { letter: "B", text: "O indivíduo atribui sentido subjetivo e que leva em conta o comportamento de outros.", correct: true },
            { letter: "C", text: "Resulta exclusivamente de normas impostas pela sociedade ao indivíduo." },
            { letter: "D", text: "É motivada pela busca racional de lucro no mercado capitalista." },
            { letter: "E", text: "Contribui para a coesão social e a manutenção da solidariedade orgânica." },
          ]}
          resolution={
            <p>
              Para Weber, ação social é toda conduta humana orientada subjetivamente pelo agente e que considera
              o comportamento de outros. Isso exclui comportamentos puramente reflexivos (tossir) ou solitários
              sem referência a outrem.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Tipos de ação social"
          statement={
            <p>
              Uma médica recusa um procedimento lucrativo por considerar antiético, mesmo sabendo que seus
              concorrentes o realizam. Segundo Weber, sua ação é classificada como:
            </p>
          }
          options={[
            { letter: "A", text: "Racional com relação a fins, pois busca manter sua reputação profissional no longo prazo." },
            { letter: "B", text: "Tradicional, pois segue os costumes da profissão médica transmitidos por gerações." },
            { letter: "C", text: "Afetiva, pois é movida pela compaixão pelos pacientes vulneráveis." },
            { letter: "D", text: "Racional com relação a valores, pois age conforme um princípio ético independentemente das consequências.", correct: true },
            { letter: "E", text: "Carismática, pois inspira outros médicos a seguirem seu exemplo de liderança moral." },
          ]}
          resolution={
            <p>
              A ação racional com relação a valores (wertrational) é orientada pela crença num valor — ético,
              estético ou religioso — independentemente das consequências práticas. A médica age por princípio,
              não por cálculo de ganhos e perdas.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Tipos de dominação"
          statement={
            <p>
              Um líder religioso ganha milhares de seguidores por pregar com eloquência, realizar curas e
              apresentar-se como portador de uma missão divina. Sua autoridade enquadra-se no tipo weberiano de:
            </p>
          }
          options={[
            { letter: "A", text: "Dominação racional-legal, baseada em normas constitucionais democráticas." },
            { letter: "B", text: "Dominação tradicional, fundamentada nos costumes e na sacralidade do passado." },
            { letter: "C", text: "Dominação carismática, baseada nas qualidades extraordinárias atribuídas ao líder.", correct: true },
            { letter: "D", text: "Dominação burocrática, pautada em regras formais e hierarquias impessoais." },
            { letter: "E", text: "Dominação afetiva, gerada pelo laço emocional entre o líder e seus fiéis." },
          ]}
          resolution={
            <p>
              A dominação carismática repousa na crença nas qualidades extraordinárias (dom, heroísmo, santidade)
              do líder. Profetas, guerreiros heroicos e líderes populistas são exemplos clássicos. Essa forma de
              dominação é instável e tende a se "rotinizar" em dominação tradicional ou racional-legal.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Burocracia e jaula de ferro"
          statement={
            <p>
              Weber descrevia a burocracia como tecnicamente superior a outras formas de organização, mas também
              alertava para o risco de uma "jaula de ferro" (<em>stahlhartes Gehäuse</em>). Qual é o sentido
              dessa metáfora no pensamento weberiano?
            </p>
          }
          options={[
            { letter: "A", text: "A burocracia aprisionaria os trabalhadores fisicamente nas fábricas para maximizar a produtividade." },
            { letter: "B", text: "A racionalização formal tornaria a vida social cada vez mais previsível, desumanizante e privada de sentido, aprisionando o indivíduo em regras impessoais.", correct: true },
            { letter: "C", text: "O Estado burocrático criaria prisões para punir qualquer desvio das normas racionais estabelecidas." },
            { letter: "D", text: "A divisão do trabalho industrial reduziria o operário a uma peça substituível, conceito semelhante ao de alienação em Marx." },
            { letter: "E", text: "O capitalismo financeiro aprisionaria os países pobres por meio da dívida externa e das regras do mercado global." },
          ]}
          resolution={
            <p>
              A "jaula de ferro" expressa o temor weberiano de que a racionalização — motor do progresso moderno
              — produza uma ordem social fria, calculista e desprovida de valores e sentido existencial. O
              indivíduo fica preso em regras formais e eficiência técnica, sem espaço para criatividade, emoção
              ou transcendência espiritual.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Ética protestante e empreendedorismo"
          statement={
            <p>
              Discursos de empreendedorismo contemporâneos frequentemente pregam que o sucesso é fruto de
              disciplina, trabalho duro, ascetismo (abrir mão de prazeres imediatos) e reinvestimento dos ganhos.
              Um sociólogo weberiano diria que esses valores:
            </p>
          }
          options={[
            { letter: "A", text: "São uma forma de ideologia burguesa para ocultar a mais-valia, na linha do marxismo." },
            { letter: "B", text: "Expressam a sobrevivência secularizada do ethos protestante-calvinista que moldou o espírito do capitalismo moderno.", correct: true },
            { letter: "C", text: "Representam a dominação tradicional da aristocracia que transmite valores de geração em geração." },
            { letter: "D", text: "São um fato social externo e coercitivo que força os indivíduos ao trabalho, nos termos de Durkheim." },
            { letter: "E", text: "Resultam da anomia gerada pela fragmentação moral da sociedade industrial moderna." },
          ]}
          resolution={
            <p>
              Weber mostrou em "A Ética Protestante e o Espírito do Capitalismo" que disciplina, poupança e
              reinvestimento eram originalmente virtudes religiosas calvinistas. Secularizadas, tornaram-se o
              "espírito" do capitalismo. Os discursos de empreendedorismo atual são, nessa leitura, herdeiros
              dessa tradição cultural — mesmo que seus adeptos não tenham consciência disso.
            </p>
          }
        />
      </section>
    </article>
  );
}
