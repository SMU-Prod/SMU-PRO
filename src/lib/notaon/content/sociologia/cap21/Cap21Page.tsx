"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 21</span>
          <h1>Transformações do Mundo do Trabalho</h1>
          <p>
            Do artesão medieval ao entregador de aplicativo, o trabalho humano passou por
            transformações radicais que reorganizaram a sociedade inteira. Compreender essa
            história — e as teorias que a interpretam — é entender como chegamos ao mundo em
            que vivemos e para onde ele pode ir.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos Teóricos</span>
        <h2>1. O Trabalho Como Categoria Central da Sociologia</h2>
        <p>
          Os três grandes clássicos da Sociologia analisaram o trabalho de perspectivas distintas,
          mas todos o reconheceram como categoria central da vida social. Compreender essas
          perspectivas é fundamental para interpretar qualquer questão sobre o trabalho no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚒️</span>
            <h3>Marx: trabalho e alienação</h3>
            <p>
              Para Marx, o trabalho é a atividade pela qual o ser humano se humaniza — transforma
              a natureza e a si mesmo. No capitalismo, porém, o trabalho torna-se <strong>alienado</strong>:
              o trabalhador não possui o produto, não controla o processo, não se reconhece no que
              produz e se isola dos outros trabalhadores.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Durkheim: divisão do trabalho</h3>
            <p>
              Para Durkheim, a divisão do trabalho é o principal mecanismo de integração social
              nas sociedades modernas. Ela gera <strong>solidariedade orgânica</strong>: todos
              dependem uns dos outros por desempenhar funções especializadas. A <em>anomia</em>
              ocorre quando a divisão do trabalho funciona mal.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Weber: racionalização</h3>
            <p>
              Weber estudou como o capitalismo moderno exige uma <strong>ética do trabalho</strong>
              (a ética protestante) e produz organizações cada vez mais racionais e burocráticas.
              A racionalização aumenta eficiência, mas aprisiona o ser humano na "jaula de ferro"
              da burocracia.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Trabalho como fundamento humano</h3>
          <p>
            Para Marx, o trabalho é o que distingue o ser humano dos animais: enquanto a abelha
            constrói sua colmeia instintivamente, o arquiteto constrói o edifício primeiro na
            mente (teleologia). O trabalho é transformação consciente da natureza — e é por isso
            que a alienação é tão devastadora: ela priva o ser humano de sua característica mais
            essencial.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>2. Das Corporações de Ofício ao Proletariado Industrial</h2>
        <p>
          A história do trabalho no capitalismo pode ser dividida em grandes fases, cada uma
          com uma forma específica de organizar a produção e a relação entre trabalhadores e
          empregadores. Antes do capitalismo industrial, dominavam as <strong>corporações de
          ofício</strong> medievais: organizações que regulavam a produção artesanal por meio
          da hierarquia mestre-aprendiz e controlavam o mercado.
        </p>
        <p>
          A <strong>manufatura</strong> (séc. XVI–XVIII) foi uma fase de transição: o capitalista
          reunia trabalhadores num mesmo espaço e os submetia à divisão do trabalho, mas sem
          maquinário. A maquinofatura (Revolução Industrial, séc. XVIII–XIX) deu o passo
          definitivo: as máquinas a vapor substituíram o trabalho humano nas tarefas que exigiam
          força, criando a fábrica moderna e o proletariado urbano.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Período</th>
                <th>Características principais</th>
                <th>Relação de trabalho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Artesanato</strong></td>
                <td>Até séc. XVIII</td>
                <td>Trabalhador domina todo o processo; produto é seu</td>
                <td>Mestre-aprendiz; corporações de ofício</td>
              </tr>
              <tr>
                <td><strong>Manufatura</strong></td>
                <td>Séc. XVI–XVIII</td>
                <td>Divisão do trabalho dentro das oficinas, sem mecanização</td>
                <td>Trabalhador livre, dependente do capital</td>
              </tr>
              <tr>
                <td><strong>Maquinofatura</strong></td>
                <td>Séc. XIX</td>
                <td>Máquinas a vapor; surgimento das fábricas; proletariado</td>
                <td>Longas jornadas (14–16h); trabalho infantil</td>
              </tr>
              <tr>
                <td><strong>Fordismo</strong></td>
                <td>1913–1970s</td>
                <td>Linha de montagem; produção em série; padronização</td>
                <td>Emprego formal estável; sindicatos fortes</td>
              </tr>
              <tr>
                <td><strong>Toyotismo</strong></td>
                <td>1970s–presente</td>
                <td>Produção enxuta; just in time; terceirização</td>
                <td>Emprego flexível; subcontratação; polivalência</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>A formação do proletariado</h3>
          <p>
            A Revolução Industrial (Inglaterra, séc. XVIII–XIX) criou o <strong>proletariado</strong>:
            trabalhadores que, expulsos do campo pelo cercamento das terras comuns (enclosures),
            migraram para as cidades e venderam sua força de trabalho nas fábricas em condições
            miseráveis. Friedrich Engels documentou esse processo em <em>A Situação da Classe
            Trabalhadora na Inglaterra</em> (1845): habitações insalubres, mortalidade infantil
            elevada, ausência de direitos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alienação</span>
        <h2>3. Alienação do Trabalho: Marx e suas Dimensões</h2>
        <p>
          O conceito de <strong>alienação</strong> (Entfremdung) é central na obra de Marx.
          No capitalismo, o trabalho que deveria ser fonte de realização humana torna-se
          uma atividade estranhada — o trabalhador não se reconhece no produto de seu trabalho,
          que pertence ao capitalista. Essa alienação tem quatro dimensões articuladas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📦</span>
            <h3>Alienação do produto</h3>
            <p>
              O produto do trabalho não pertence ao trabalhador — pertence ao capitalista.
              Quanto mais o trabalhador produz, mais riqueza cria para outro. O produto
              torna-se uma potência estranha que se volta contra quem o criou.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Alienação do processo</h3>
            <p>
              O trabalhador não controla o processo produtivo: o ritmo, os métodos, as
              ferramentas são decididos pelo capitalista ou pela máquina. O trabalho
              torna-se sofrimento, não realização.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Alienação do ser genérico</h3>
            <p>
              O trabalho alienado priva o ser humano de sua essência criativa e consciente.
              Em vez de atividade livre e criadora, o trabalho torna-se apenas meio de
              sobrevivência — o ser humano fica abaixo do animal.
            </p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Alienação do outro</h3>
            <p>
              A concorrência entre trabalhadores por empregos e salários os divide em vez
              de unir. A solidariedade de classe é destruída pela competição imposta
              pelo sistema capitalista.
            </p>
          </div>
        </div>

        <p>
          Harry Braverman (<em>Trabalho e Capital Monopolista</em>, 1974) atualizou a análise
          de Marx para o século XX: demonstrou como o taylorismo e o fordismo aprofundaram
          sistematicamente a alienação ao separar concepção de execução e fragmentar o trabalho
          ao máximo, degradando as qualificações dos trabalhadores — processo chamado de
          <strong> desqualificação</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisão do Trabalho</span>
        <h2>4. Divisão do Trabalho: Social, Sexual e Internacional</h2>
        <p>
          A <strong>divisão do trabalho</strong> é a especialização de indivíduos, grupos ou
          países em tarefas específicas. Durkheim a analisou como fonte de solidariedade
          orgânica nas sociedades modernas; Marx a analisou como fonte de alienação e exploração.
          Mas há diferentes tipos de divisão do trabalho que o ENEM testa frequentemente.
        </p>
        <p>
          A <strong>divisão sexual do trabalho</strong> refere-se à distribuição de tarefas
          entre homens e mulheres: historicamente, os homens foram destinados ao trabalho
          produtivo (remunerado, público) e as mulheres ao trabalho reprodutivo (doméstico,
          de cuidado, não remunerado). Essa divisão não é natural — é socialmente construída
          e mantida pelo patriarcado. Persiste mesmo quando as mulheres entram no mercado de
          trabalho, gerando a "dupla jornada".
        </p>
        <p>
          A <strong>divisão internacional do trabalho</strong> refere-se à especialização de
          países na economia global: países do Sul Global tendem a exportar matérias-primas e
          produtos com baixo valor agregado, enquanto países do Norte Global exportam produtos
          industrializados e serviços de alta tecnologia. Essa divisão reproduz e aprofunda
          as desigualdades entre nações — e é debatida pelas teorias da dependência (Raúl
          Prebisch, Celso Furtado, Ruy Mauro Marini).
        </p>

        <div className="lesson-highlight">
          <h3>Solidariedade mecânica vs. orgânica (Durkheim)</h3>
          <p>
            Durkheim distinguia dois tipos de solidariedade social. A <strong>solidariedade
            mecânica</strong>, das sociedades tradicionais, baseia-se na semelhança: todos
            fazem o mesmo, partilham os mesmos valores e a coesão vem da identidade coletiva.
            A <strong>solidariedade orgânica</strong>, das sociedades modernas, baseia-se na
            diferença: a especialização torna todos interdependentes — como órgãos de um
            organismo vivo. A anomia surge quando essa interdependência se rompe.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos Trabalhistas</span>
        <h2>5. Legislação Trabalhista no Brasil: CLT e Reforma de 2017</h2>
        <p>
          A <strong>Consolidação das Leis do Trabalho</strong> (CLT, 1943) foi criada no
          governo Vargas e unificou a legislação trabalhista brasileira, regulamentando: jornada
          de 8 horas diárias e 44 horas semanais, férias anuais de 30 dias, 13º salário,
          estabilidade no emprego e, posteriormente, o FGTS (1966). O modelo varguista era
          corporativista — os sindicatos eram atrelados ao Estado e financiados pelo imposto
          sindical obrigatório.
        </p>
        <p>
          A <strong>Reforma Trabalhista de 2017</strong> (Lei 13.467/2017), aprovada no governo
          Temer, alterou profundamente a CLT: o negociado passou a prevalecer sobre o legislado
          em vários aspectos; a terceirização irrestrita foi autorizada; o contrato intermitente
          (trabalho quando chamado, pagamento por hora) foi regulamentado; e o imposto sindical
          obrigatório foi extinto, enfraquecendo os sindicatos. Críticos denunciam que a reforma
          aprofundou a precarização; defensores argumentam que regularizou práticas já existentes
          e gerou empregos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direito / Garantia</th>
                <th>Previsão na CLT (1943)</th>
                <th>Impacto da Reforma (2017)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jornada de trabalho</td>
                <td>8h/dia, 44h/semana</td>
                <td>Possibilidade de banco de horas por acordo individual</td>
              </tr>
              <tr>
                <td>Férias</td>
                <td>30 dias contínuos</td>
                <td>Pode ser parcelada em até 3 períodos</td>
              </tr>
              <tr>
                <td>Terceirização</td>
                <td>Restrita à atividade-meio</td>
                <td>Irrestrita — inclui atividade-fim</td>
              </tr>
              <tr>
                <td>Contrato intermitente</td>
                <td>Não existia</td>
                <td>Criado — trabalho sob chamado, sem jornada mínima</td>
              </tr>
              <tr>
                <td>Negociação coletiva</td>
                <td>Legislado prevalecia sobre negociado</td>
                <td>Negociado prevalece sobre legislado em vários pontos</td>
              </tr>
              <tr>
                <td>Imposto sindical</td>
                <td>Obrigatório (1 dia de salário/ano)</td>
                <td>Extinto — contribuição voluntária</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sindicalismo</span>
        <h2>6. Sindicalismo: Origem, História e Crise Contemporânea</h2>
        <p>
          Os <strong>sindicatos</strong> são organizações coletivas de trabalhadores criadas
          para defender seus interesses nas relações com os empregadores e o Estado. Surgiram
          na Inglaterra do século XIX como reação às condições desumanas da industrialização —
          as primeiras formas foram os <em>trade unions</em>, inicialmente ilegais e perseguidos.
        </p>
        <p>
          No Brasil, a história do sindicalismo é marcada por quatro grandes períodos. O
          <strong> novo sindicalismo</strong> dos anos 1978–1989 foi um dos momentos mais
          significativos: as greves dos metalúrgicos do ABC paulista, lideradas por Lula (então
          presidente do Sindicato dos Metalúrgicos de São Bernardo), romperam com o modelo
          corporativista varguista e impulsionaram a redemocratização, levando à criação da
          CUT (1983) e do PT (1980).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Característica do sindicalismo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1930–1945</td>
                <td>Corporativismo varguista: sindicatos atrelados ao Estado, imposto sindical obrigatório</td>
              </tr>
              <tr>
                <td>1964–1985</td>
                <td>Ditadura militar: intervenção nos sindicatos, lideranças presas ou exiladas</td>
              </tr>
              <tr>
                <td>1978–1989</td>
                <td>"Novo sindicalismo": greves no ABC paulista, criação da CUT (1983) e do PT (1980)</td>
              </tr>
              <tr>
                <td>1990–2000</td>
                <td>Reestruturação produtiva e desemprego enfraquecem os sindicatos</td>
              </tr>
              <tr>
                <td>2017–presente</td>
                <td>Reforma Trabalhista elimina imposto sindical; crise e fragmentação do movimento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que os sindicatos enfraquecem?</h3>
          <p>
            O enfraquecimento do sindicalismo contemporâneo não é acidental: o toyotismo
            dispersou os trabalhadores (terceirização, subcontratação); a gig economy criou
            trabalhadores "autônomos" que não têm sindicato; o fim do imposto sindical retirou
            financiamento; e a precarização fragm entou a classe trabalhadora em grupos com
            interesses diversos, dificultando a ação coletiva.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Século XXI</span>
        <h2>7. Novas Formas de Trabalho: Uberização, Gig Economy e Teletrabalho</h2>
        <p>
          A revolução digital está produzindo novas formas de organização do trabalho que
          desafiam as categorias tradicionais de emprego e contrato. O sociólogo Ricardo
          Antunes, em <em>O Privilégio da Servidão</em> (2018), descreve a "nova morfologia
          do trabalho" — mais fragmentada, mais precária, mais difusa, mais difícil de organizar
          coletivamente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚗</span>
            <h3>Uberização</h3>
            <p>
              Plataformas digitais intermediam trabalhadores e clientes, classificando os
              primeiros como "parceiros autônomos" para evitar vínculos empregatícios.
              Transfere riscos e custos ao trabalhador. Ex.: Uber, iFood, Rappi.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Gig economy</h3>
            <p>
              Economia de "bicos": trabalhos temporários, por demanda e fragmentados.
              Trabalhadores acumulam múltiplas fontes de renda instáveis, sem férias,
              FGTS ou seguro-desemprego.
            </p>
          </div>
          <div className="lesson-card">
            <span>💻</span>
            <h3>Teletrabalho</h3>
            <p>
              Trabalho remoto mediado por tecnologia. Expandiu-se radicalmente na pandemia
              de Covid-19. Dissolve as fronteiras entre trabalho e vida pessoal; afeta
              desproporcionalmente mulheres com filhos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Automação e IA</h3>
            <p>
              Robôs e inteligência artificial substituem funções rotineiras. Frey e Osborne
              (Oxford) estimaram que 47% dos empregos nos EUA têm alto risco de automação.
              Requalificação é o desafio central.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho e Desigualdade</span>
        <h2>8. Desigualdade no Trabalho: Gênero, Raça e Classe</h2>
        <p>
          O mercado de trabalho não é uma arena neutra de competição meritocrática: ele
          reproduz e aprofunda as desigualdades de gênero, raça e classe que estruturam a
          sociedade. Dados do IBGE mostram que as desigualdades de acesso, remuneração e
          condições de trabalho são sistematicamente correlacionadas com essas características.
        </p>
        <p>
          As <strong>mulheres</strong> ganham, em média, 78% do salário dos homens no Brasil
          (IBGE, 2022), mesmo com maior escolaridade média. Além do gap salarial, enfrentam
          o "teto de vidro" (barreira invisível aos cargos de chefia) e a dupla jornada
          (acumulam trabalho remunerado e trabalho doméstico não remunerado).
        </p>
        <p>
          Os <strong>trabalhadores negros</strong> são sobre-representados nos empregos mais
          precários e sub-representados nos empregos mais qualificados e bem remunerados.
          A renda média de pretos e pardos é 56% da renda de brancos (IBGE, 2022). Isso não
          reflete diferença de mérito ou capacidade, mas o racismo estrutural que limita o
          acesso à educação de qualidade, às redes de contato e às oportunidades.
        </p>

        <div className="lesson-highlight">
          <h3>O trabalho informal no Brasil</h3>
          <p>
            Cerca de 40% dos trabalhadores brasileiros estão na informalidade (IBGE, 2023) —
            sem carteira assinada, sem contribuição previdenciária, sem proteção contra demissão
            arbitrária. A informalidade é mais concentrada entre negros, mulheres, jovens e
            residentes do Norte e Nordeste. Não é uma escolha livre: é resultado da exclusão
            do mercado formal e da falta de oportunidades.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Futuro do Trabalho</span>
        <h2>9. Automação, Inteligência Artificial e o Futuro do Trabalho</h2>
        <p>
          A chamada <strong>Quarta Revolução Industrial</strong> — termo popularizado por
          Klaus Schwab, fundador do Fórum Econômico Mundial — descreve a convergência de
          tecnologias digitais, biológicas e físicas: inteligência artificial, robótica,
          internet das coisas (IoT), impressão 3D, edição genética. Essa convergência tem
          potencial de transformar o trabalho mais radicalmente do que qualquer revolução
          anterior.
        </p>
        <p>
          Existem dois cenários opostos no debate: o <strong>otimista</strong> argumenta que
          a automação eliminará trabalhos degradantes e liberará seres humanos para atividades
          criativas e de cuidado — como ocorreu com as revoluções anteriores, que criaram mais
          empregos do que eliminaram. O <strong>pessimista</strong> argumenta que desta vez
          é diferente: a IA pode substituir não apenas trabalho físico repetitivo, mas também
          trabalho cognitivo de qualificação média — advogados, médicos, analistas financeiros
          — tornando o desemprego tecnológico estrutural.
        </p>
        <p>
          No Brasil, o impacto da automação é particularmente preocupante: a estrutura
          produtiva é fortemente dependente de setores com alto risco de automação
          (agronegócio, manufatura, serviços simples). O <strong>IPEA</strong> estimou que
          cerca de 54% das ocupações no Brasil têm médio ou alto risco de automação nos
          próximos anos, com impacto desproporcionalmente maior sobre trabalhadores de baixa
          escolaridade e renda.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Setor</th>
                <th>Risco de automação</th>
                <th>Exemplo de função ameaçada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agricultura</td>
                <td>Alto</td>
                <td>Colheita manual; plantio; irrigação manual</td>
              </tr>
              <tr>
                <td>Manufatura</td>
                <td>Alto</td>
                <td>Operadores de linha de montagem; soldadores</td>
              </tr>
              <tr>
                <td>Varejo</td>
                <td>Alto</td>
                <td>Caixas de supermercado; vendedores</td>
              </tr>
              <tr>
                <td>Transporte</td>
                <td>Médio-alto</td>
                <td>Motoristas de ônibus e caminhão (veículos autônomos)</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>Baixo-médio</td>
                <td>IA auxilia diagnósticos, mas médicos têm baixo risco global</td>
              </tr>
              <tr>
                <td>Educação</td>
                <td>Baixo</td>
                <td>Professores — interação humana e adaptação são difíceis de automatizar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho e Saúde</span>
        <h2>10. Saúde do Trabalhador: Doenças Ocupacionais e Adoecimento Mental</h2>
        <p>
          O trabalho pode ser fonte de saúde e realização — ou fonte de doença e sofrimento.
          As <strong>doenças ocupacionais</strong> são aquelas direta ou indiretamente causadas
          pelo trabalho: LER/DORT (lesões por esforço repetitivo), doenças respiratórias
          (exposição a pó e produtos químicos), perda auditiva induzida por ruído (PAIR),
          entre outras. No Brasil, são registradas cerca de 600 mil acidentes de trabalho
          por ano (INSS), mas estima-se que o número real é muito maior, dado o subregistro.
        </p>
        <p>
          O <strong>adoecimento mental</strong> relacionado ao trabalho cresceu dramaticamente
          nas últimas décadas. Síndrome de burnout, depressão, ansiedade e transtornos de
          estresse pós-traumático são reconhecidos como doenças relacionadas ao trabalho. Em
          2022, a OMS reconheceu formalmente o <strong>burnout</strong> como síndrome
          ocupacional — esgotamento físico e emocional causado por trabalho excessivo e
          crônico. No Brasil, a previdência social registra as doenças psiquiátricas entre as
          principais causas de afastamento do trabalho.
        </p>
        <p>
          O sociólogo Christophe Dejours, em <em>A Loucura do Trabalho</em> (1980), foi pioneiro
          na análise da psicodinâmica do trabalho — como as condições de trabalho afetam a
          saúde mental. Para Dejours, o sofrimento no trabalho pode ser "criativo" (mobiliza
          defesas e energia) ou "patogênico" (quando as defesas são insuficientes e o trabalhador
          adoece). A organização do trabalho taylorista-fordista é especialmente patogênica.
        </p>

        <div className="lesson-highlight">
          <h3>Trabalho escravo contemporâneo</h3>
          <p>
            O trabalho análogo à escravidão — situação de trabalho degradante, com restrição
            de liberdade e dívida por serviços — persiste no Brasil. O Ministério do Trabalho
            resgata cerca de 2 mil trabalhadores em condição análoga à escravidão por ano. Os
            setores mais afetados são agropecuária, construção civil e confecção. Trabalhadores
            migrantes internos e imigrantes são os mais vulneráveis — evidência de que a
            exploração extrema do trabalho não é relíquia histórica, mas realidade presente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Alienação do trabalho"
          statement={<p>Para Karl Marx, o trabalho <strong>alienado</strong> no capitalismo é aquele em que o trabalhador:</p>}
          options={[
            { letter: "A", text: "Recebe salário acima do valor de mercado, gerando dependência do empregador." },
            { letter: "B", text: "Tem pleno controle sobre o processo produtivo e o produto de seu trabalho." },
            { letter: "C", text: "Não se reconhece no produto de seu trabalho, não controla o processo produtivo e se torna estranho à sua própria atividade.", correct: true },
            { letter: "D", text: "Trabalha em sistema de cogestão, compartilhando decisões com o empregador." },
            { letter: "E", text: "Desempenha múltiplas funções, sem especialização, tornando-se mais criativo." },
          ]}
          resolution={<p>Para Marx, a alienação tem quatro dimensões no capitalismo: o trabalhador é alienado do produto (não é seu), do processo (é controlado), da sua essência como ser humano criativo e dos outros trabalhadores. A divisão do trabalho fragmenta a atividade humana e transforma o trabalho em meio de sobrevivência, não de realização.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Fordismo vs. toyotismo"
          statement={<p>O modelo <strong>toyotista</strong> de organização do trabalho, desenvolvido no Japão pós-Segunda Guerra Mundial, diferencia-se do fordismo principalmente por:</p>}
          options={[
            { letter: "A", text: "Aumentar a rigidez da linha de montagem e padronizar ainda mais os produtos." },
            { letter: "B", text: "Eliminar totalmente a divisão do trabalho, tornando os trabalhadores artesãos." },
            { letter: "C", text: "Introduzir produção flexível, just in time, polivalência dos trabalhadores e terceirização, reduzindo estoques e adaptando a produção à demanda.", correct: true },
            { letter: "D", text: "Garantir emprego vitalício a todos os trabalhadores e eliminar a precarização." },
            { letter: "E", text: "Basear-se exclusivamente em trabalho manual, sem uso de tecnologias." },
          ]}
          resolution={<p>O toyotismo surgiu na Toyota como resposta à rigidez do fordismo: produz o que é necessário, quando necessário (just in time), com estoques mínimos. Exige trabalhadores polivalentes (que fazem várias tarefas) e usa intensamente terceirização, o que transfere riscos para trabalhadores e empresas menores.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Uberização do trabalho"
          statement={<p>O fenômeno da "uberização" do trabalho refere-se a:</p>}
          options={[
            { letter: "A", text: "A conquista de maior autonomia pelos trabalhadores, que passam a definir seus horários e ganhos." },
            { letter: "B", text: "Um modelo em que plataformas digitais intermediam trabalhadores e clientes, classificando os primeiros como autônomos para evitar direitos trabalhistas e transferir os riscos da produção ao trabalhador.", correct: true },
            { letter: "C", text: "A sindicalização de motoristas de aplicativo, que criaram seus próprios sindicatos digitais." },
            { letter: "D", text: "A regulamentação do trabalho digital pelo Estado, garantindo benefícios previdenciários aos trabalhadores de plataforma." },
            { letter: "E", text: "Um fenômeno exclusivo do setor de transporte, sem impacto em outros setores da economia." },
          ]}
          resolution={<p>A uberização generaliza um modelo em que o trabalhador assume todos os custos (veículo, manutenção, celular, combustível) e riscos (falta de demanda, acidentes) sem os direitos do emprego formal. O debate jurídico sobre se esses trabalhadores são "autônomos" ou "empregados" ocorre em vários países — a Suprema Corte do Reino Unido reconheceu os motoristas da Uber como empregados em 2021.</p>}
        />

        <Exercise
          level="Avançado"
          title="CLT e corporativismo"
          statement={
            <p>
              A Consolidação das Leis do Trabalho (CLT, 1943) foi criada no governo Vargas em
              um modelo <strong>corporativista</strong>. Isso significa que, diferentemente do
              sindicalismo europeu, os sindicatos brasileiros originais:
            </p>
          }
          options={[
            { letter: "A", text: "Eram completamente autônomos e independentes do Estado, podendo fazer greves sem restrições." },
            { letter: "B", text: "Eram organizados diretamente pelos trabalhadores comunistas, em oposição ao Estado." },
            { letter: "C", text: "Eram atrelados ao Estado e financiados pelo imposto sindical obrigatório, limitando sua autonomia de contestação e integrando-os à estrutura estatal como instrumentos de controle e mediação.", correct: true },
            { letter: "D", text: "Só representavam trabalhadores rurais, excluindo o operariado urbano." },
            { letter: "E", text: "Funcionavam exclusivamente como cooperativas de produção, sem função de negociação coletiva." },
          ]}
          resolution={<p>O corporativismo varguista subordinou os sindicatos ao Ministério do Trabalho: eram reconhecidos pelo Estado, financiados pelo imposto sindical e tinham representação monopolista (um sindicato por categoria em cada território). Isso limitava a combatividade e a autonomia do movimento operário. O "novo sindicalismo" dos anos 1978–89 (Lula, CUT) rompeu com esse modelo.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Pandemia, teletrabalho e desigualdade de gênero"
          statement={
            <>
              <p>
                A pandemia de Covid-19 expandiu massivamente o teletrabalho no Brasil. Pesquisas
                mostraram que mulheres com filhos pequenos tiveram produtividade mais afetada que
                homens na mesma situação, pois acumularam trabalho doméstico e cuidado com crianças
                enquanto trabalhavam. O IBGE registra que mulheres dedicam, em média, 21,3 horas
                semanais a afazeres domésticos, contra 11 horas dos homens.
              </p>
              <p>Com base no texto e nos conceitos sociológicos, assinale a afirmação correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "O teletrabalho eliminou desigualdades de gênero ao permitir que mulheres conciliassem carreira e família com maior liberdade." },
            { letter: "B", text: "O teletrabalho afetou igualmente homens e mulheres, pois as responsabilidades domésticas são hoje divididas de forma equânime." },
            { letter: "C", text: "O impacto diferenciado do teletrabalho sobre mulheres revela que a divisão sexual do trabalho doméstico e de cuidado persiste e se torna ainda mais visível quando as esferas do trabalho produtivo e reprodutivo se sobrepõem no espaço doméstico.", correct: true },
            { letter: "D", text: "A menor produtividade das mulheres com filhos durante a pandemia confirma que elas são menos eficientes profissionalmente." },
            { letter: "E", text: "O teletrabalho é uma forma de trabalho alienado no sentido marxista, pois elimina o contato com colegas." },
          ]}
          resolution={<p>O dado revela a divisão sexual do trabalho: mesmo no teletrabalho, as mulheres continuaram sendo as principais responsáveis pelo trabalho doméstico e de cuidado. A pandemia não criou essa divisão — a tornou visível ao sobrepor as esferas produtiva e reprodutiva. Isso confirma que a desigualdade de gênero no trabalho não é um problema de "escolha" individual, mas de estrutura social patriarcal.</p>}
        />
      </section>
    </article>
  );
}
