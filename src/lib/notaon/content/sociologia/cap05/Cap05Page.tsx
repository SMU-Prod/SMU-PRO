"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 5</span>
          <h1>Normas sociais, valores, controle social e cidadania</h1>
          <p>
            O que nos impede de agir de qualquer forma em sociedade? Normas e valores moldam
            silenciosamente nosso comportamento cotidiano. Entender como o controle social funciona —
            e o que cidadania realmente significa no Brasil —  é fundamental para a leitura crítica
            das questões do ENEM sobre direitos, democracia, desvio e convivência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Normas e valores</span>
        <h2>1. Normas sociais: formais e informais</h2>
        <p>
          <strong>Normas sociais</strong> são regras de conduta, explícitas ou implícitas, que
          definem o que é considerado aceitável ou inaceitável em uma determinada sociedade ou grupo.
          Elas garantem a previsibilidade das interações e a reprodução da ordem social. Sem normas,
          a convivência coletiva se tornaria caótica — mas as normas também podem ser instrumentos
          de dominação quando servem a interesses particulares disfarçados de universais.
        </p>
        <p>
          Os <strong>valores</strong> são as crenças mais profundas de uma sociedade sobre o que
          é bom, justo, belo ou desejável. Eles fundamentam as normas: o valor da "dignidade humana",
          por exemplo, sustenta normas formais como a proibição da tortura e informais como o
          respeito ao espaço pessoal. A distinção entre normas e valores é importante: os valores
          são mais abstratos e estáveis; as normas são mais específicas e sujeitas a variação contextual.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th></th>
                <th>Normas formais</th>
                <th>Normas informais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definição</strong></td>
                <td>Regras escritas, codificadas e sancionadas pelo poder público</td>
                <td>Regras não escritas, sustentadas pelo costume, tradição e moral coletiva</td>
              </tr>
              <tr>
                <td><strong>Exemplos</strong></td>
                <td>Leis, decretos, regulamentos, Constituição Federal</td>
                <td>Etiqueta à mesa, regras de fila, saudações, tabus culturais</td>
              </tr>
              <tr>
                <td><strong>Sanção por violação</strong></td>
                <td>Multa, prisão, advertência oficial, perda de direitos</td>
                <td>Reprovação social, exclusão do grupo, fofoca, ostracismo</td>
              </tr>
              <tr>
                <td><strong>Quem aplica</strong></td>
                <td>Estado, instituições jurídicas, órgãos de controle</td>
                <td>Comunidade, família, grupo de pares, opinião pública</td>
              </tr>
              <tr>
                <td><strong>Grau de formalização</strong></td>
                <td>Alto — documentadas, públicas e previsíveis</td>
                <td>Baixo — implícitas, aprendidas na socialização</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Controle social</span>
        <h2>2. Controle social: mecanismos formais e informais</h2>
        <p>
          <strong>Controle social</strong> é o conjunto de mecanismos pelos quais uma sociedade
          assegura a conformidade de seus membros às normas vigentes. Ele opera em dois níveis:
          o <strong>controle formal</strong>, exercido por agências especializadas com poder coercitivo
          legal, e o <strong>controle informal</strong>, exercido pela própria comunidade no cotidiano
          das interações sociais.
        </p>
        <p>
          O controle social não é necessariamente negativo: sem ele, a vida coletiva seria impossível.
          Mas ele pode se tornar opressor quando é exercido de forma seletiva e discriminatória —
          como ocorre quando a polícia aborda desproporcionalmente jovens negros da periferia
          (o chamado "perfilamento racial") ou quando comunidades excludentes silenciam dissidentes.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Controle social formal</h3>
            <p>
              Exercido por agências especializadas e com poder coercitivo legal: polícia, tribunais,
              prisões, exército. Atua principalmente sobre as normas formais (leis). Também inclui
              agências "brandas" como escolas públicas e serviços de assistência social.
            </p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Controle social informal</h3>
            <p>
              Exercido pela família, comunidade, vizinhos, amigos e grupos de pares. Opera por meio
              do elogio, da crítica, da fofoca, da aprovação ou reprovação coletiva. Frequentemente
              mais eficaz que o controle formal para regular normas cotidianas.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Sanções positivas e negativas</h3>
          <p>
            O controle social pode operar por meio de <strong>sanções positivas</strong> (recompensas
            por conformidade: prêmios, elogios, promoções, prestígio) ou <strong>sanções negativas</strong>
            (punições por desvio: multa, prisão, exclusão social, censura moral). A combinação de
            ambas molda continuamente o comportamento social — às vezes mais efetivamente pela sanção
            positiva (recompensa) do que pela negativa (punição).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Anomia</span>
        <h2>3. Anomia: quando as normas falham (Durkheim)</h2>
        <p>
          O conceito de <strong>anomia</strong> foi desenvolvido por <strong>Émile Durkheim</strong>
          para descrever uma condição social em que as normas que regulam o comportamento estão ausentes,
          enfraquecidas ou em conflito — gerando desorientação, instabilidade e sofrimento nos indivíduos.
          Para Durkheim, a anomia não é simplesmente "desordem", mas a ruptura dos vínculos normativos
          que dão sentido e limites à vida social.
        </p>
        <p>
          Em seu estudo clássico sobre o suicídio, Durkheim identificou o <strong>suicídio anômico</strong>:
          o que ocorre em períodos de mudança social rápida (crises econômicas, revoluções, guerras),
          quando as normas tradicionais se dissolvem antes que novas se consolidem. No Brasil,
          o crescimento acelerado das taxas de violência urbana nas décadas de 1980 e 1990 foi
          frequentemente interpretado com o conceito de anomia: a urbanização acelerada dissolveu
          redes comunitárias de controle informal sem que o Estado fornecesse estruturas formais eficazes.
        </p>
        <div className="lesson-highlight">
          <h3>Anomia e mercado (Merton)</h3>
          <p>
            Robert K. Merton reelaborou o conceito de anomia para a sociedade americana: anomia
            é a tensão entre <em>metas culturalmente definidas</em> (como o sucesso material) e a
            <em> falta de meios legítimos</em> para alcançá-las. Quando os meios legais são
            bloqueados (por pobreza, discriminação, exclusão), alguns indivíduos recorrem a meios
            ilegítimos — o que explica, por exemplo, o envolvimento com o tráfico de drogas em
            contextos de exclusão econômica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desvio e estigma</span>
        <h2>4. Desvio social e estigma (Goffman)</h2>
        <p>
          <strong>Desvio social</strong> é o comportamento que viola as normas de um grupo. É
          importante notar que o desvio não é uma qualidade inerente ao ato em si, mas uma
          <em> definição social</em>: o mesmo comportamento pode ser considerado desviante em uma
          sociedade e normal em outra. A homossexualidade foi classificada como doença mental pela
          Organização Mundial da Saúde até 1990 e ainda é criminalizada em vários países —
          mas é reconhecida como expressão normal da sexualidade humana na maioria das democracias.
        </p>
        <p>
          O sociólogo canadense <strong>Erving Goffman</strong> (1922–1982) desenvolveu o conceito
          de <strong>estigma</strong> em obra homônima de 1963: um atributo profundamente desacreditador
          que reduz o indivíduo a uma "identidade deteriorada". O estigma não é um atributo em si,
          mas uma relação social — algo é estigmatizante apenas porque a sociedade assim define.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩹</span>
            <h3>Estigmas corporais</h3>
            <p>Deformidades físicas ou deficiências que a sociedade usa para "marcar" o indivíduo: amputações, doenças visíveis, deficiência motora, obesidade extrema.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Desvios de caráter</h3>
            <p>Atributos relacionados ao comportamento moral: antecedente criminal, vício, homossexualidade (em sociedades preconceituosas), doença mental, pobreza.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Estigmas tribais</h3>
            <p>Pertencimento a raça, etnia, nação ou religião desacreditada socialmente. Transmitidos de geração em geração — racismo, antissemitismo, islamofobia.</p>
          </div>
        </div>
        <p>
          O estigma opera como uma forma de <strong>controle social informal</strong>: ao marcar
          certos grupos como inferiores ou perigosos, a sociedade justifica sua exclusão e legitima
          formas de discriminação que, de outra forma, seriam inaceitáveis.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Labeling theory</span>
        <h2>5. A teoria da rotulação (labeling theory) e o desvio secundário</h2>
        <p>
          A <strong>teoria da rotulação</strong> (<em>labeling theory</em>), desenvolvida por Howard
          Becker em <em>Outsiders</em> (1963), argumenta que o desvio não é uma propriedade dos atos,
          mas o resultado de como a sociedade <em>rotula</em> certos comportamentos e as pessoas que
          os praticam. O processo de rotulação tem consequências reais: uma vez rotulado como
          "criminoso" ou "louco", o indivíduo enfrenta barreiras que tornam difícil abandonar
          a identidade desviante — o que Becker chama de <strong>desvio secundário</strong>.
        </p>
        <p>
          No Brasil, a teoria da rotulação ajuda a compreender o fenômeno da <strong>seletividade
          penal</strong>: os grupos socialmente vulneráveis (jovens negros e pobres da periferia)
          são desproporcionalmente rotulados, abordados, presos e condenados pelo sistema de justiça
          criminal, independentemente da proporção real de crimes cometidos por esses grupos.
          Essa seletividade revela que o controle social formal não é neutro — ele reflete e
          reproduz as desigualdades estruturais da sociedade.
        </p>
        <div className="lesson-highlight">
          <h3>Encarceramento no Brasil</h3>
          <p>
            O Brasil tem a terceira maior população carcerária do mundo, com mais de 800 mil presos.
            Mais de 67% são negros, e a maioria foi condenada por crimes contra o patrimônio ou
            tráfico de drogas — crimes associados à pobreza e à marginalização. Esses dados
            evidenciam a seletividade do sistema penal e são frequentemente usados em questões do ENEM
            sobre desigualdade, raça e controle social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidadania</span>
        <h2>6. Cidadania: a tipologia clássica de T. H. Marshall</h2>
        <p>
          O sociólogo britânico <strong>Thomas Humphrey Marshall</strong> (1893–1981) propôs em
          1950 uma análise clássica da cidadania dividida em três dimensões que, historicamente,
          foram conquistadas em fases distintas na Inglaterra — e que orientam o debate sobre
          direitos até hoje em todo o mundo.
        </p>
        <p>
          A visão de Marshall tem sido complementada e criticada: ele negligenciou as desigualdades
          de raça e gênero, e descreveu um modelo histórico inglês que não se reproduziu da mesma
          forma em outros países. O caso brasileiro, estudado por José Murilo de Carvalho, é um
          exemplo de trajetória diferente da descrita por Marshall.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Direitos</th>
                <th>Período histórico</th>
                <th>Marco no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Civil</strong></td>
                <td>Liberdade individual, propriedade, igualdade perante a lei, acesso à justiça</td>
                <td>Séc. XVIII</td>
                <td>Abolição da escravidão (1888); habeas corpus; Constituição 1988</td>
              </tr>
              <tr>
                <td><strong>Política</strong></td>
                <td>Direito de votar, ser eleito, organizar partidos, participar do governo</td>
                <td>Séc. XIX</td>
                <td>Voto feminino (1932); voto de analfabetos (1988); voto aos 16 anos (1988)</td>
              </tr>
              <tr>
                <td><strong>Social</strong></td>
                <td>Saúde, educação, moradia, previdência social, segurança alimentar</td>
                <td>Séc. XX</td>
                <td>CLT (1943), SUS (1988), Bolsa Família (2003), BPC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Cidadania no Brasil: a trajetória invertida</h3>
          <p>
            O historiador José Murilo de Carvalho argumentou em <em>Cidadania no Brasil: o Longo
            Caminho</em> (2001) que a cidadania brasileira teve uma trajetória invertida em relação
            à inglesa: os direitos <strong>sociais vieram antes dos civis e políticos</strong> —
            o trabalhismo de Vargas nos anos 1930-40 garantiu direitos trabalhistas a uma população
            que ainda não tinha pleno direito ao voto nem proteção legal plena. Isso gerou uma
            cidadania "estadocêntrica" e paternalista, dependente do favor do Estado em vez de
            ser conquistada pela organização autônoma dos cidadãos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos humanos</span>
        <h2>7. Direitos humanos: universalidade e debates contemporâneos</h2>
        <p>
          Os <strong>direitos humanos</strong> são direitos inerentes a toda pessoa humana,
          independentemente de raça, gênero, nacionalidade, religião ou qualquer outra condição.
          Seu marco fundador moderno é a <strong>Declaração Universal dos Direitos Humanos</strong>
          (ONU, 1948), aprovada após os horrores do nazismo e da Segunda Guerra Mundial. No Brasil,
          eles estão consagrados no artigo 5º da Constituição de 1988 e em tratados internacionais
          incorporados ao ordenamento jurídico.
        </p>
        <p>
          O debate contemporâneo sobre direitos humanos envolve tensões importantes: entre
          universalidade (os direitos valem para todos, em qualquer contexto cultural) e relativismo
          cultural (algumas práticas locais deveriam ser respeitadas mesmo quando violam direitos
          individuais?). A Sociologia contribui para esse debate ao mostrar que os direitos não são
          dados naturais — eles são conquistas históricas de movimentos sociais, e sua implementação
          depende de estruturas políticas, econômicas e culturais específicas.
        </p>
        <div className="lesson-highlight">
          <h3>Gerações de direitos</h3>
          <p>
            Uma classificação alternativa à de Marshall, proposta por Karel Vasak, distingue três
            "gerações" de direitos: 1ª geração — direitos civis e políticos (liberdades individuais);
            2ª geração — direitos econômicos, sociais e culturais (bem-estar, educação, saúde);
            3ª geração — direitos de solidariedade (meio ambiente, paz, desenvolvimento, autodeterminação
            dos povos). O ENEM frequentemente usa essa classificação em questões sobre direitos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos sociais</span>
        <h2>8. Movimentos sociais e ampliação da cidadania</h2>
        <p>
          Os <strong>movimentos sociais</strong> são formas coletivas de ação organizada por grupos
          que buscam transformar aspectos da ordem social vigente. Eles são agentes fundamentais
          de ampliação da cidadania: quase todos os direitos formalmente reconhecidos foram
          conquistados pela pressão de movimentos sociais, não concedidos espontaneamente pelo Estado.
        </p>
        <p>
          Os sociólogos distinguem os <strong>velhos movimentos sociais</strong> (do século XIX e XX,
          centrados na classe operária e na questão econômica — o movimento sindical, os partidos
          operários) dos <strong>novos movimentos sociais</strong> (a partir dos anos 1960-70,
          centrados em identidades e direitos não-econômicos: feminismo, movimento negro, LGBTQIA+,
          ecologismo, pacifismo). No Brasil, os anos 1970-80 foram marcados pelo surgimento do
          novo sindicalismo (CUT), do MST e dos movimentos por direitos que desembocaram na
          Constituição de 1988.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento operário</h3>
            <p>Luta por direitos trabalhistas, salários, jornada de 8 horas. No Brasil: criação da CLT (1943), fundação da CUT (1983), greves do ABC paulista (1978-80).</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento negro</h3>
            <p>Combate ao racismo estrutural e luta por representação. Conquistas: Lei 10.639/2003, Estatuto da Igualdade Racial (2010), cotas nas universidades (Lei 12.711/2012).</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento feminista</h3>
            <p>Luta pela igualdade de gênero e contra a violência. Conquistas: Lei Maria da Penha (2006), criminalização do feminicídio (2015), PEC das Domésticas (2013).</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento sem-terra (MST)</h3>
            <p>Luta pela reforma agrária e pela democratização do acesso à terra. Um dos maiores movimentos camponeses do mundo, fundado em 1984 no Brasil.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidadania digital</span>
        <h2>9. Cidadania digital e novos desafios democráticos</h2>
        <p>
          A expansão da internet e das redes sociais criou novas formas de participação política e
          novos desafios para a cidadania. Por um lado, as plataformas digitais facilitaram a
          organização de movimentos sociais, ampliaram o acesso à informação e criaram novos espaços
          de debate público. Por outro, criaram novos riscos: vigilância digital, desinformação
          em massa, polarização política e exclusão digital de grupos sem acesso.
        </p>
        <p>
          O conceito de <strong>cidadania digital</strong> refere-se ao conjunto de direitos e
          responsabilidades que os indivíduos têm no ambiente digital: o direito à privacidade de
          dados (garantido pelo Marco Civil da Internet de 2014 e pela LGPD de 2018), o direito
          ao acesso à internet como bem essencial, e a responsabilidade de usar as plataformas de
          forma ética, crítica e respeitosa. No Brasil, com mais de 80% da população com acesso
          à internet, o debate sobre cidadania digital é cada vez mais urgente.
        </p>
        <div className="lesson-highlight">
          <h3>Desinformação e democracia</h3>
          <p>
            A proliferação de notícias falsas (<em>fake news</em>) nas redes sociais representa
            uma ameaça concreta à cidadania democrática: ela compromete a formação de uma opinião
            pública informada, alimenta o ódio e a intolerância, e pode influenciar eleições.
            O TSE e plataformas como WhatsApp adotaram medidas para limitar o compartilhamento
            viral de desinformação — um campo em aberto de disputa por regulação democrática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese normativa</span>
        <h2>10. A Constituição de 1988 como síntese dos direitos de cidadania no Brasil</h2>
        <p>
          A <strong>Constituição Federal de 1988</strong> — chamada de "Constituição Cidadã" por
          Ulysses Guimarães — representa o maior avanço na história da cidadania brasileira.
          Ela consolidou as três dimensões de Marshall em um único documento: os direitos civis
          (art. 5º), os direitos políticos (art. 14) e os direitos sociais (art. 6º). Também
          reconheceu direitos coletivos antes ausentes: direitos dos indígenas (art. 231), das
          comunidades quilombolas (art. 68 ADCT) e do meio ambiente (art. 225).
        </p>
        <p>
          Entretanto, o sociólogo <strong>Jessé Souza</strong> e outros analistas alertam para a
          distância entre a cidadania formal (garantida na Constituição) e a cidadania real (vivida
          no cotidiano). Milhões de brasileiros têm direitos formalmente garantidos que nunca foram
          efetivados: acesso a saúde de qualidade, educação plena, moradia digna e segurança. Essa
          distância entre o que a lei promete e o que a realidade entrega é o núcleo do debate sobre
          cidadania no Brasil contemporâneo — e um tema recorrente nas questões do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direito</th>
                <th>Garantia constitucional</th>
                <th>Desafio de efetivação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Saúde</strong></td>
                <td>Art. 6º e 196: saúde como direito de todos (SUS)</td>
                <td>Subfinanciamento, filas, desigualdade de acesso regional</td>
              </tr>
              <tr>
                <td><strong>Educação</strong></td>
                <td>Art. 205: educação como direito de todos e dever do Estado</td>
                <td>Analfabetismo funcional, desigualdade entre redes pública e privada</td>
              </tr>
              <tr>
                <td><strong>Moradia</strong></td>
                <td>Art. 6º: moradia como direito social</td>
                <td>Déficit habitacional de 8 milhões de moradias; favelas e sem-teto</td>
              </tr>
              <tr>
                <td><strong>Segurança</strong></td>
                <td>Art. 144: segurança pública como dever do Estado</td>
                <td>Violência policial seletiva; encarceramento massivo de negros e pobres</td>
              </tr>
              <tr>
                <td><strong>Igualdade racial</strong></td>
                <td>Art. 5º: igualdade sem distinção de raça; Estatuto da Igualdade Racial</td>
                <td>Desigualdade salarial, representação política, violência policial racial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Normas formais e informais"
          statement={
            <p>
              Ao entrar em um elevador, a maioria das pessoas se vira para a porta e evita contato
              visual com os outros passageiros. Essa conduta representa:
            </p>
          }
          options={[
            { letter: "A", text: "Uma norma formal, pois está prevista no regulamento dos condomínios." },
            { letter: "B", text: "Uma norma informal, baseada em convenções sociais de uso do espaço partilhado.", correct: true },
            { letter: "C", text: "Um estigma social aplicado a quem não cumpre as regras do elevador." },
            { letter: "D", text: "Uma sanção negativa imposta a quem descumpre as regras do condomínio." },
            { letter: "E", text: "Um exemplo de controle social formal exercido pela administração do prédio." },
          ]}
          resolution={
            <p>
              A conduta descrita é uma <strong>norma informal</strong> — não está escrita em lugar
              algum, mas a maioria das pessoas a segue para evitar constrangimentos. A violação
              (encarar os outros ou falar em voz alta) gera desconforto social, não penalidade legal.
              Essa é a diferença fundamental entre norma formal e informal.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Controle social: formal vs. informal"
          statement={
            <p>
              Em uma pequena comunidade rural, os moradores que não participam das festas religiosas
              locais passam a ser evitados pelos vizinhos e têm dificuldade de obter ajuda mútua.
              Esse mecanismo é um exemplo de:
            </p>
          }
          options={[
            { letter: "A", text: "Controle social formal, pois envolve sanções reconhecidas pela comunidade." },
            { letter: "B", text: "Estigma corporal, pois a exclusão é baseada em uma característica visível." },
            { letter: "C", text: "Controle social informal, pois é exercido pela própria comunidade sem aparato legal.", correct: true },
            { letter: "D", text: "Norma formal, pois a participação religiosa é obrigatória na comunidade." },
            { letter: "E", text: "Sanção positiva, pois os que participam são recompensados com prestígio." },
          ]}
          resolution={
            <p>
              O exemplo descreve <strong>controle social informal</strong>: a comunidade pressiona
              a conformidade por meio da aprovação e da exclusão social, sem recorrer a leis ou
              tribunais. Esse tipo de controle é frequentemente mais poderoso que o formal nas
              comunidades tradicionais de alta coesão.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Estigma de Goffman"
          statement={
            <p>
              Uma pessoa com HIV, embora saudável e sem sintomas visíveis, frequentemente oculta
              seu diagnóstico no ambiente de trabalho por medo de ser discriminada. Segundo o
              conceito de Goffman, essa situação exemplifica:
            </p>
          }
          options={[
            { letter: "A", text: "Estigma corporal, pois a doença afeta o corpo da pessoa." },
            { letter: "B", text: "Estigma tribal, pois o HIV é associado a grupos étnicos específicos." },
            { letter: "C", text: "Desvio de caráter estigmatizado, e a ocultação é uma estratégia de gestão da identidade deteriorada.", correct: true },
            { letter: "D", text: "Norma informal, pois a sociedade criou uma convenção de não revelar doenças no trabalho." },
            { letter: "E", text: "Controle social formal, pois a discriminação por doença é criminalizada." },
          ]}
          resolution={
            <p>
              Goffman identificou que pessoas com estigmas não visíveis frequentemente gerenciam a
              <strong> informação</strong> sobre si mesmas — ocultando o que poderia ser desacreditador.
              No caso do HIV, o estigma (classificado como desvio de caráter pela sociedade) leva
              à ocultação como estratégia de sobrevivência social, revelando o peso da
              <strong> identidade deteriorada</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Os três tipos de cidadania de Marshall"
          statement={
            <p>
              Em 1988, a Constituição Federal brasileira garantiu o direito ao voto para analfabetos
              e jovens a partir de 16 anos, o acesso universal à saúde pelo SUS e a liberdade de
              organização sindical e partidária. Relacionando esses direitos com a tipologia de
              T. H. Marshall, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: "Todos os direitos citados são de cidadania civil, pois foram garantidos pela Constituição." },
            { letter: "B", text: "O voto é direito político; o SUS é direito social; a organização sindical é direito civil — ampliando as três dimensões da cidadania.", correct: true },
            { letter: "C", text: "O SUS é um direito político porque depende de decisão governamental para funcionar." },
            { letter: "D", text: "A liberdade sindical é um direito social, pois protege o trabalhador economicamente." },
            { letter: "E", text: "O voto a analfabetos é um direito social, pois promove a inclusão de grupos vulneráveis." },
          ]}
          resolution={
            <p>
              Segundo Marshall: <strong>voto</strong> = cidadania <em>política</em> (participação
              no poder); <strong>SUS</strong> = cidadania <em>social</em> (direito à saúde);
              <strong> liberdade sindical</strong> = cidadania <em>civil</em> (direito de associação
              e contrato coletivo). A Constituição de 1988 consolidou as três dimensões
              simultaneamente, algo incomum na trajetória histórica descrita por Marshall.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Cidadania e exclusão social no Brasil"
          statement={
            <p>
              <em>"Em 2022, o Brasil tinha cerca de 33 milhões de pessoas em situação de insegurança
              alimentar grave. No mesmo ano, o país possuía eleições diretas, sistema judiciário
              funcionando e liberdades individuais formalmente garantidas."</em> Esse paradoxo
              pode ser explicado sociologicamente como:
            </p>
          }
          options={[
            { letter: "A", text: "A contradição entre cidadania política e civil formalmente plenas, mas com cidadania social gravemente incompleta para parte da população.", correct: true },
            { letter: "B", text: "A aplicação bem-sucedida do modelo de Marshall, que prevê que os direitos políticos precedem os sociais." },
            { letter: "C", text: "Um exemplo de anomia social, pois a falta de normas claras causa a fome no Brasil." },
            { letter: "D", text: "O resultado do controle social formal excessivo, que impede as pessoas de acessar alimentos." },
            { letter: "E", text: "A prova de que a cidadania civil é insuficiente para garantir a ordem social em países em desenvolvimento." },
          ]}
          resolution={
            <p>
              O dado evidencia a desigualdade entre as dimensões da cidadania: enquanto os direitos
              civis e políticos são formalmente universais no Brasil, os <strong>direitos sociais</strong>
              (alimentação, moradia, renda) permanecem inacessíveis a milhões. É exatamente essa
              contradição que José Murilo de Carvalho chamou de "cidadania incompleta" — e que o
              ENEM frequentemente aborda com dados sobre desigualdade social.
            </p>
          }
        />
      </section>
    </article>
  );
}
