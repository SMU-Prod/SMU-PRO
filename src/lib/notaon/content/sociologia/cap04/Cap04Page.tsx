"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 4</span>
          <h1>Instituições sociais: família, escola, religião, Estado e mídia</h1>
          <p>
            As instituições são os pilares invisíveis que sustentam a ordem social. Família, escola,
            religião, Estado e mídia não apenas organizam a vida coletiva — elas transmitem valores,
            reproduzem desigualdades e, ao mesmo tempo, abrem espaço para a transformação social quando
            contestadas por movimentos que reivindicam novos direitos e reconhecimentos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição e funções</span>
        <h2>1. Instituições sociais: definição, características e funções</h2>
        <p>
          Uma <strong>instituição social</strong> é um conjunto relativamente estável de normas,
          valores, papéis e práticas que organiza aspectos fundamentais da vida coletiva. As
          instituições existem antes dos indivíduos, moldam seu comportamento e persistem após sua
          morte — o que as diferencia de grupos sociais temporários e de organizações informais.
        </p>
        <p>
          As instituições são ao mesmo tempo <strong>coercitivas</strong> (impõem padrões de
          comportamento) e <strong>habilitadoras</strong> (fornecem recursos e orientações que
          permitem a ação). A família, por exemplo, impõe papéis de gênero e geração, mas também
          oferece afeto, recursos e redes de apoio. Essa dupla face é o que torna as instituições
          tão resistentes à mudança: elas são valorizadas por quem delas se beneficia.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Função manifesta</h3>
            <p>O propósito declarado, explícito e reconhecido da instituição. Ex.: a escola tem como função manifesta ensinar conteúdos e transmitir conhecimento científico e humanístico.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Função latente</h3>
            <p>Consequências não declaradas, muitas vezes não percebidas pelos próprios participantes. Ex.: a escola também tem função latente de socializar valores da classe dominante e reproduzir hierarquias sociais.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Instituição</th>
                <th>Função manifesta</th>
                <th>Função latente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Família</strong></td>
                <td>Reprodução biológica, cuidado dos filhos, socialização básica, afeto</td>
                <td>Transmissão de posição de classe, valores de gênero, capital cultural desigual</td>
              </tr>
              <tr>
                <td><strong>Escola</strong></td>
                <td>Transmitir conhecimento, formar cidadãos, preparar para o trabalho</td>
                <td>Reproduzir desigualdades, selecionar elites, impor cultura hegemônica (Bourdieu)</td>
              </tr>
              <tr>
                <td><strong>Religião</strong></td>
                <td>Oferecer sentido existencial, comunidade e consolo</td>
                <td>Legitimar a ordem social, controlar comportamentos, criar solidariedade de grupo</td>
              </tr>
              <tr>
                <td><strong>Estado</strong></td>
                <td>Organizar a sociedade, garantir direitos, manter a ordem pública</td>
                <td>Proteger interesses das classes dominantes, exercer controle social seletivo</td>
              </tr>
              <tr>
                <td><strong>Mídia</strong></td>
                <td>Informar, entreter e conectar a população</td>
                <td>Definir agenda pública, formar opinião, veicular ideologia dominante</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A família</span>
        <h2>2. A família: transformações históricas e modelos contemporâneos</h2>
        <p>
          A família é a instituição mais universal — presente em todas as sociedades conhecidas —
          mas sua forma concreta varia enormemente no tempo e no espaço. A ideia de que existe um
          modelo "natural" ou eterno de família é um equívoco histórico: o que chamamos de "família
          nuclear" (pai, mãe e filhos vivendo juntos, com o homem provedor e a mulher cuidadora)
          é um produto histórico específico do capitalismo industrial do século XX e hoje é minoria
          nos dados do IBGE.
        </p>
        <p>
          As transformações da família brasileira refletem mudanças econômicas, culturais e políticas:
          a inserção massiva das mulheres no mercado de trabalho, a queda da taxa de natalidade, o
          aumento dos divórcios após a lei do divórcio de 1977, e o reconhecimento legal de novas
          formas de arranjo familiar pela Constituição de 1988 e pela jurisprudência do STF.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Família nuclear</h3>
            <p>Pai, mãe e filhos. Modelo hegemônico no capitalismo industrial do século XX. Em declínio relativo nos dados estatísticos brasileiros contemporâneos.</p>
          </div>
          <div className="lesson-card">
            <span>👴</span>
            <h3>Família extensa</h3>
            <p>Inclui avós, tios, primos vivendo juntos ou em estreita proximidade. Predominante nas sociedades agrárias e ainda comum em comunidades rurais e periferias urbanas.</p>
          </div>
          <div className="lesson-card">
            <span>👩</span>
            <h3>Família monoparental</h3>
            <p>Um dos pais responsável pelos filhos. No Brasil, 85% dos lares monoparentais são chefiados por mulheres — reflexo direto da desigualdade de gênero estrutural.</p>
          </div>
          <div className="lesson-card">
            <span>🏳️‍🌈</span>
            <h3>Família homoafetiva</h3>
            <p>Reconhecida pelo STF em 2011. Exercício dos mesmos direitos que a família heteroafetiva, ampliando o conceito jurídico de família para além do modelo heteronormativo.</p>
          </div>
          <div className="lesson-card">
            <span>👫</span>
            <h3>União estável</h3>
            <p>Reconhecida constitucionalmente em 1988. Casal sem casamento formal com direitos equiparados ao casamento civil, incluindo herança e previdência social.</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Família reconstituída</h3>
            <p>Formada por pessoas que se unem após separações anteriores, trazendo filhos de relações anteriores. Também chamada de "família mosaico" — crescente no Brasil contemporâneo.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Família e violência doméstica</h3>
          <p>
            A idealização da família como espaço exclusivo de amor e proteção pode ocultar sua face
            de dominação e violência. A <strong>Lei Maria da Penha (Lei 11.340/2006)</strong> reconheceu
            a violência doméstica como crime de gênero e criou medidas protetivas, rompendo com a visão
            de que o que ocorre "dentro de casa" é assunto privado — um passo fundamental na luta
            pelo reconhecimento dos direitos das mulheres e pela responsabilização do Estado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A escola e Bourdieu</span>
        <h2>3. A escola e a reprodução social</h2>
        <p>
          Para o sociólogo francês <strong>Pierre Bourdieu</strong> (1930–2002), a escola não é um
          espaço neutro de transmissão de conhecimento. Ela é um campo onde opera a
          <strong> violência simbólica</strong>: a imposição de uma cultura particular (a das classes
          dominantes) como se fosse universal e natural — e onde todos são avaliados pelo mesmo
          padrão, mas chegam com capitais culturais profundamente desiguais.
        </p>
        <p>
          Bourdieu introduziu o conceito de <strong>capital cultural</strong> — o conjunto de
          conhecimentos, habilidades, disposições e bens culturais que os indivíduos adquirem ao
          longo da vida, principalmente na socialização familiar. Esse capital existe em três estados:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Estado incorporado</h3>
            <p>Disposições duráveis do habitus: capacidade de leitura crítica, gosto estético, modo de falar e argumentar. Adquirido pela vivência familiar prolongada, não comprável no mercado.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Estado objetivado</h3>
            <p>Bens culturais materiais: livros, obras de arte, instrumentos musicais. Sua posse não garante o domínio do capital incorporado — é possível ter o livro sem ter o habitus leitor.</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Estado institucionalizado</h3>
            <p>Títulos e diplomas escolares que conferem reconhecimento oficial. O capital que a escola certifica — mas que depende dos dois anteriores para ser alcançado com vantagem.</p>
          </div>
        </div>
        <p>
          A conclusão de Bourdieu é que a escola tende a <strong>reproduzir</strong> as desigualdades
          sociais, pois avalia todos pelo mesmo padrão cultural, mas os alunos chegam a ela com
          capitais culturais muito desiguais, adquiridos nas famílias de origem. O "mérito" escolar
          é, em larga medida, capital cultural herdado disfarçado de talento individual.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escola e Paulo Freire</span>
        <h2>4. Paulo Freire e a educação como prática de liberdade</h2>
        <p>
          <strong>Paulo Freire</strong> (1921–1997), pernambucano e um dos maiores educadores do
          século XX, propôs uma crítica radical à educação tradicional em <em>Pedagogia do Oprimido</em>
          (1968). Para ele, a educação dominante é uma "<strong>educação bancária</strong>": o professor
          "deposita" conhecimento em alunos passivos, como se eles fossem recipientes vazios. Esse
          modelo reproduz a dominação ao tratar os educandos como objetos, não sujeitos.
        </p>
        <p>
          Em oposição, Freire propôs a <strong>educação problematizadora</strong>: um processo
          dialógico em que educador e educando aprendem juntos a partir da reflexão sobre a própria
          realidade. A <em>conscientização</em> — a tomada de consciência crítica da situação de
          opressão — é o objetivo central. Freire foi exilado pelo regime militar em 1964 exatamente
          por considerar sua pedagogia subversiva.
        </p>
        <div className="lesson-highlight">
          <h3>Freire e as cotas raciais</h3>
          <p>
            A perspectiva freireana fundamenta políticas de ação afirmativa como as cotas raciais
            nas universidades públicas (Lei 12.711/2012): se a desigualdade educacional é estrutural,
            medidas compensatórias são necessárias para garantir o acesso de grupos historicamente
            excluídos. O STF confirmou a constitucionalidade das cotas em 2012.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A religião</span>
        <h2>5. Religião: Durkheim, Marx, Weber e o Brasil</h2>
        <p>
          A religião é uma das instituições mais antigas e universais. Os três clássicos da Sociologia
          a analisaram de perspectivas profundamente distintas, e o ENEM frequentemente testa a
          capacidade de distinguir essas três visões:
        </p>
        <p>
          Para <strong>Durkheim</strong>, a religião é o "cimento da sociedade": ela distingue o
          <em> sagrado</em> (o que é separado e protegido) do <em>profano</em> (o mundo cotidiano)
          e cria <strong>solidariedade</strong> — as pessoas que compartilham rituais sagrados formam
          uma comunidade moral. Para <strong>Marx</strong>, a religião é "ópio do povo": consolo que
          atenua o sofrimento dos explorados, mas os impede de perceber e combater as causas materiais
          da sua miséria. Para <strong>Weber</strong>, a ética religiosa pode transformar a sociedade:
          em <em>A Ética Protestante e o Espírito do Capitalismo</em> (1905), ele mostrou como os
          valores do calvinismo impulsionaram o desenvolvimento do capitalismo moderno.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pensador</th>
                <th>Visão da religião</th>
                <th>Conceito central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Durkheim</strong></td>
                <td>Fator de coesão social; sagrado vs. profano</td>
                <td>Solidariedade social, totemismo, ritual coletivo</td>
              </tr>
              <tr>
                <td><strong>Marx</strong></td>
                <td>"Ópio do povo"; ilusão que perpetua a exploração</td>
                <td>Alienação religiosa, superestrutura ideológica</td>
              </tr>
              <tr>
                <td><strong>Weber</strong></td>
                <td>Fator de mudança social; ética religiosa impulsiona o capitalismo</td>
                <td>Ética protestante, ascetismo intramundano, vocação</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Crescimento evangélico no Brasil</h3>
          <p>
            O Brasil viveu nas últimas décadas uma profunda transformação religiosa: em 1980, 89%
            se declaravam católicos; em 2023, os evangélicos já representam cerca de 31% da população
            e os "sem religião" cresceram para 10%. Esse câmbio tem impacto político eleitoral direto,
            tema recorrente em análises sociológicas contemporâneas e nas questões do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Estado</span>
        <h2>6. O Estado moderno: Weber, Marx e Gramsci</h2>
        <p>
          O <strong>Estado</strong> é a instituição que detém o que Weber chamou de
          <strong> "monopólio legítimo da violência física"</strong> em um determinado território.
          Isso significa que o Estado é a única instituição autorizada a usar a força de forma
          legítima — pelo consentimento dos cidadãos, fundamentado em normas jurídicas racionais-legais.
        </p>
        <p>
          Para <strong>Marx</strong>, o Estado não é neutro: é um instrumento das classes dominantes
          para garantir a reprodução do capitalismo e suprimir os movimentos de resistência. Para
          <strong> Gramsci</strong>, o Estado opera em duas frentes: a <em>sociedade política</em>
          (coerção — polícia, exército, prisões) e a <em>sociedade civil</em> (hegemonia cultural —
          escola, Igreja, mídia). A dominação eficaz combina coerção e consentimento.
          Para <strong>Weber</strong>, o Estado moderno tem como traço definidor a burocracia racional:
          regras impessoais, cargos hierárquicos e documentação escrita substituem o arbítrio pessoal
          do senhor feudal ou do monarca absoluto.
        </p>
        <div className="lesson-highlight">
          <h3>Estado democrático de direito</h3>
          <p>
            A Constituição Federal de 1988 define o Brasil como um <strong>Estado Democrático de
            Direito</strong>: o poder do Estado é limitado pelos direitos fundamentais, exercido
            segundo as leis, e submetido ao controle popular via eleições. Esse modelo supera tanto
            o Estado autoritário (que não reconhece direitos) quanto o Estado Liberal puro (que
            garante apenas direitos formais sem atenção às desigualdades materiais).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A mídia</span>
        <h2>7. A mídia como instituição social: poder e agenda</h2>
        <p>
          A <strong>mídia</strong> — rádio, televisão, jornais, revistas e, hoje, plataformas digitais
          — é uma das instituições com maior poder de influência sobre a formação de opiniões e
          identidades na sociedade contemporânea. Ela não apenas informa: ela <em>enquadra</em>
          a realidade, selecionando o que é relevante, como é apresentado e em que perspectiva.
        </p>
        <p>
          O conceito de <strong>agenda-setting</strong> (Maxwell McCombs e Donald Shaw, 1972) descreve
          como a mídia define quais temas entram na agenda pública — o que as pessoas pensam
          <em> sobre</em>. O <strong>framing</strong> (enquadramento) vai além: a mídia não apenas
          escolhe os temas, mas também como eles são interpretados — se a criminalidade é apresentada
          como problema de segurança pública ou como consequência da desigualdade social, por exemplo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📺</span>
            <h3>Televisão</h3>
            <p>Ainda o veículo de maior alcance no Brasil. As Organizações Globo têm enorme influência sobre a formação da opinião pública e o comportamento eleitoral.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Redes sociais</h3>
            <p>Facebook, Instagram, TikTok e WhatsApp tornaram-se os principais meios de informação para jovens. Os algoritmos criam "câmaras de eco" que reforçam crenças preexistentes.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Jornalismo digital</h3>
            <p>A migração do impresso para o digital fragmentou o mercado informativo e dificultou o controle editorial — criando espaço tanto para jornalismo independente quanto para desinformação.</p>
          </div>
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Desinformação e deepfakes</h3>
            <p>A proliferação de notícias falsas (fake news) e imagens manipuladas por IA representa um novo desafio para a esfera pública democrática e para a formação de cidadãos críticos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aparelhos ideológicos</span>
        <h2>8. Aparelhos ideológicos e aparelhos repressivos do Estado (Althusser)</h2>
        <p>
          O filósofo marxista francês <strong>Louis Althusser</strong> (1918–1990) desenvolveu um
          conceito que ajuda a compreender como as instituições reproduzem a ideologia dominante.
          Para ele, o Estado opera por meio de dois tipos de aparelhos:
        </p>
        <p>
          Os <strong>Aparelhos Repressivos do Estado (ARE)</strong> funcionam pela violência física:
          polícia, exército, tribunais, prisões. Já os <strong>Aparelhos Ideológicos do Estado (AIE)</strong>
          funcionam pela ideologia — de forma "suave" e quase invisível: escola, Igreja, família,
          partido político, sindicato, mídia, cultura. Para Althusser, a escola é o AIE mais eficaz
          no capitalismo contemporâneo, pois transmite a ideologia dominante de forma maciça e
          obrigatória durante os anos de formação mais intensiva dos indivíduos.
        </p>
        <div className="lesson-highlight">
          <h3>Crítica a Althusser</h3>
          <p>
            A teoria de Althusser foi criticada por ser excessivamente determinista: os indivíduos
            aparecem como meros receptores passivos da ideologia, sem capacidade de resistência ou
            transformação. Gramsci e Bourdieu oferecem visões mais nuançadas, que contemplam tanto
            a reprodução ideológica quanto os espaços de resistência e transformação social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instituições e mudança social</span>
        <h2>9. Como as instituições mudam: crise, reforma e transformação</h2>
        <p>
          As instituições são por natureza conservadoras — tendem a reproduzir as estruturas existentes.
          Mas elas também mudam, às vezes de forma lenta e gradual (reformas), outras de forma abrupta
          (crises e revoluções). Entender os mecanismos de mudança institucional é fundamental para
          compreender a história social.
        </p>
        <p>
          No caso brasileiro, a Constituição de 1988 representou uma ruptura institucional profunda:
          ela criou novos direitos (saúde universal via SUS, educação básica gratuita, direitos
          indígenas), novas instituições (Ministério Público independente, Defensoria Pública) e
          ampliou o acesso à cidadania. Ao mesmo tempo, muitas transformações previstas na Constituição
          permanecem não implementadas — o que evidencia que a mudança legal não é suficiente para
          transformar estruturas sociais profundamente arraigadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Mecanismo de mudança</th>
                <th>Descrição</th>
                <th>Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Reforma legal</strong></td>
                <td>Mudança nas leis e normas formais que regem a instituição</td>
                <td>Lei do Divórcio (1977), Constituição de 1988, Lei Maria da Penha (2006)</td>
              </tr>
              <tr>
                <td><strong>Pressão de movimentos sociais</strong></td>
                <td>Mobilização coletiva que força mudanças nas práticas institucionais</td>
                <td>Movimento negro e cotas; feminismo e criminalização do feminicídio</td>
              </tr>
              <tr>
                <td><strong>Decisão judicial</strong></td>
                <td>Tribunais interpretam normas e criam novas obrigações institucionais</td>
                <td>STF reconhece união homoafetiva (2011); cotas raciais constitucionais (2012)</td>
              </tr>
              <tr>
                <td><strong>Mudança cultural gradual</strong></td>
                <td>Transformação lenta nos valores que sustentam as normas institucionais</td>
                <td>Mudanças na percepção social sobre divórcio, LGBTQIA+, racismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interação entre instituições</span>
        <h2>10. A articulação entre as instituições: complementaridades e tensões</h2>
        <p>
          As instituições sociais não operam de forma isolada — elas interagem, se reforçam e
          às vezes entram em conflito. A família transmite uma visão de mundo que pode ser
          reforçada ou contestada pela escola. A religião pode apoiar ou desafiar o Estado.
          A mídia pode tanto legitimar quanto criticar o poder institucional estabelecido.
          Compreender essas interações é fundamental para a análise sociológica complexa.
        </p>
        <p>
          Um exemplo dessas tensões no Brasil contemporâneo: o crescimento das igrejas evangélicas
          mudou a relação entre religião e política, com pastores eleitos para o Congresso e pautas
          religiosas entrando na legislação. Ao mesmo tempo, movimentos feministas e LGBTQIA+
          contestam tanto as normas religiosas quanto as legislações que as incorporam. A mídia
          — tanto a tradicional quanto as redes sociais — amplifica e medeia esses conflitos,
          criando um campo de disputa permanente pelo poder de definir os valores coletivos.
        </p>
        <div className="lesson-highlight">
          <h3>Síntese: instituições e o ENEM</h3>
          <p>
            Para o ENEM, o fundamental é compreender que as instituições têm <strong>funções
            manifestas e latentes</strong> (Merton), que reproduzem desigualdades por meio de
            mecanismos simbólicos (Bourdieu), que operam por coerção e hegemonia (Gramsci) e
            que podem ser transformadas pela pressão social e pela ação coletiva. Questões
            sobre família, escola, religião, Estado e mídia sempre mobilizam esses conceitos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Função das instituições sociais"
          statement={
            <p>
              Segundo a Sociologia, o que distingue uma instituição social de um simples grupo de pessoas?
            </p>
          }
          options={[
            { letter: "A", text: "O número de membros: instituições têm sempre mais de cem pessoas." },
            { letter: "B", text: "A presença de um líder formal reconhecido pelo Estado." },
            { letter: "C", text: "A estabilidade de normas, papéis e práticas que existem independentemente dos indivíduos.", correct: true },
            { letter: "D", text: "O fato de serem criadas por lei e registradas em cartório." },
            { letter: "E", text: "A localização física definida, como um prédio ou sede." },
          ]}
          resolution={
            <p>
              Instituições sociais são padrões estáveis de organização que precedem os indivíduos
              e persistem além deles. A escola existia antes de qualquer professor ou aluno específico,
              e continuará existindo após eles — o que a distingue de um grupo de estudo informal.
              Essa permanência estrutural é a característica definidora.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Funções manifesta e latente (Merton)"
          statement={
            <p>
              Robert K. Merton distinguiu as funções manifestas (declaradas) das funções latentes
              (não declaradas) das instituições. Qual alternativa identifica CORRETAMENTE uma função
              latente da escola?
            </p>
          }
          options={[
            { letter: "A", text: "Transmitir conhecimentos científicos e humanísticos aos alunos." },
            { letter: "B", text: "Preparar os estudantes para o mercado de trabalho." },
            { letter: "C", text: "Reproduzir as desigualdades sociais ao valorizar a cultura das classes dominantes.", correct: true },
            { letter: "D", text: "Formar cidadãos críticos e participativos na democracia." },
            { letter: "E", text: "Certificar competências por meio de diplomas e títulos acadêmicos." },
          ]}
          resolution={
            <p>
              As alternativas A, B, D e E descrevem funções <em>manifestas</em> — o que a escola
              declara querer fazer. A função <em>latente</em> identificada por Bourdieu e Merton é a
              <strong> reprodução das desigualdades sociais</strong>: ao avaliar todos pelo mesmo
              padrão cultural dominante, a escola favorece quem já possui o capital cultural das
              classes privilegiadas, transformando herança em mérito.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Capital cultural de Bourdieu"
          statement={
            <p>
              Uma criança cresce em uma família de profissionais liberais, com acesso a livros,
              viagens culturais, teatro e conversas sobre política. Outra criança cresce em uma
              família trabalhadora, sem esses recursos. Ao chegarem à escola, ambas são avaliadas
              pelos mesmos critérios. Qual conceito de Bourdieu explica por que isso não é uma
              situação de igualdade real?
            </p>
          }
          options={[
            { letter: "A", text: "Anomia, pois a falta de normas claras prejudica as crianças de menor renda." },
            { letter: "B", text: "Solidariedade orgânica, pois a divisão do trabalho separa as crianças por funções." },
            { letter: "C", text: "Capital cultural desigual, pois a escola avalia a todos pelo mesmo padrão, mas eles chegam com recursos muito diferentes.", correct: true },
            { letter: "D", text: "Fato social, pois a diferença entre as crianças é exterior e coercitiva." },
            { letter: "E", text: "Ação racional com relação a valores, pois cada família tem valores distintos sobre educação." },
          ]}
          resolution={
            <p>
              Para Bourdieu, a desigualdade escolar não se explica apenas por talento ou esforço
              individual. O <strong>capital cultural</strong> — acumulado no ambiente familiar —
              confere vantagens sistemáticas aos filhos de classes dominantes. A escola transforma
              essa vantagem cultural em mérito escolar, naturalizando a desigualdade estrutural.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Religião em Marx, Durkheim e Weber"
          statement={
            <p>
              Três dos principais clássicos da Sociologia analisaram a religião de perspectivas
              distintas. Qual das alternativas resume CORRETAMENTE as três visões?
            </p>
          }
          options={[
            { letter: "A", text: "Marx: coesão social; Durkheim: ópio do povo; Weber: ética capitalista." },
            { letter: "B", text: "Marx: ópio do povo e alienação; Durkheim: coesão social e solidariedade; Weber: racionalização e ética protestante.", correct: true },
            { letter: "C", text: "Marx: ética protestante; Durkheim: alienação; Weber: coesão social." },
            { letter: "D", text: "Todos os três consideravam a religião irrelevante para o desenvolvimento econômico." },
            { letter: "E", text: "Marx: sagrado vs. profano; Durkheim: superestrutura ideológica; Weber: controle social." },
          ]}
          resolution={
            <p>
              <strong>Marx</strong>: religião como "ópio do povo" — consolo que aliena os trabalhadores
              e os impede de perceber e combater a exploração. <strong>Durkheim</strong>: religião como
              força de coesão social — o sagrado une a comunidade e reforça normas coletivas.
              <strong> Weber</strong>: a ética protestante (calvinista) impulsionou o capitalismo ao
              valorizar o trabalho como vocação e a acumulação como sinal de graça divina.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Mídia e socialização contemporânea"
          statement={
            <p>
              <em>"Pesquisa de 2023 mostrou que crianças entre 5 e 12 anos passam em média 4 horas
              por dia consumindo conteúdo digital (YouTube, TikTok, jogos). Esse tempo supera o
              dedicado à convivência familiar em dias de semana."</em> Do ponto de vista sociológico,
              esse dado aponta para:
            </p>
          }
          options={[
            { letter: "A", text: "O enfraquecimento das instituições em geral, pois crianças aprendem mais sozinhas." },
            { letter: "B", text: "A emergência de um novo agente de socialização — a mídia digital — que disputa espaço com a família e a escola.", correct: true },
            { letter: "C", text: "A solidariedade mecânica, pois as crianças criam laços virtuais com pessoas semelhantes." },
            { letter: "D", text: "O fim da socialização primária, substituída pela socialização virtual." },
            { letter: "E", text: "Um fenômeno de anomia, pois as crianças perdem referências normativas com o uso excessivo de telas." },
          ]}
          resolution={
            <p>
              O dado ilustra a ascensão da <strong>mídia digital como agente de socialização</strong>:
              ela transmite valores, modelos de comportamento, ideais de consumo e representações
              sociais — funções que antes cabiam quase exclusivamente à família e à escola. Isso não
              elimina as outras instituições, mas cria uma disputa de influência sem precedente histórico.
            </p>
          }
        />
      </section>
    </article>
  );
}
