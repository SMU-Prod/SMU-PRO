"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 37</span>
          <h1>Tecnologia, Inteligência Artificial e Impactos Sociais</h1>
          <p>
            A 4ª Revolução Industrial — marcada por inteligência artificial, big data, automação e
            conectividade ubíqua — está reconfigurando o trabalho, a privacidade, a política e as
            relações humanas em escala global. Entender seus impactos sociais é fundamental para
            questões do ENEM sobre desigualdade digital, vigilância, desinformação e o futuro do trabalho.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">4ª Revolução Industrial</span>
        <h2>1. A Quarta Revolução Industrial</h2>
        <p>
          O termo <strong>4ª Revolução Industrial</strong> foi cunhado por Klaus Schwab, fundador
          do Fórum Econômico Mundial, em seu livro homônimo de 2016. Diferente das revoluções
          anteriores — a 1ª baseada na máquina a vapor e mecanização têxtil (séculos XVIII-XIX),
          a 2ª na eletricidade e produção em massa (final do século XIX), e a 3ª na eletrônica e
          computação (segunda metade do século XX) — a atual se caracteriza por velocidade
          exponencial, abrangência sistêmica e impacto simultâneo sobre todos os setores.
        </p>
        <p>
          A fusão entre os mundos físico, digital e biológico é a marca central dessa revolução.
          Dispositivos conectados ao corpo, impressoras 3D que fabricam órgãos, neurochips implantáveis
          e edição genética via CRISPR são exemplos dessa convergência. Essa característica difere
          qualitativamente das revoluções anteriores: não se trata apenas de novas máquinas, mas de
          uma reconfiguração da própria experiência humana.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Inteligência Artificial</h3>
            <p>Sistemas que aprendem com dados para realizar tarefas cognitivas: diagnósticos médicos, julgamentos de crédito, recrutamento, reconhecimento facial e geração de textos e imagens.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Big Data</h3>
            <p>Imensos volumes de dados gerados por usuários e sensores, processados para identificar padrões de comportamento, prever decisões e personalizar conteúdos e preços.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Internet das Coisas (IoT)</h3>
            <p>Objetos cotidianos conectados à internet — geladeiras, carros, relógios, medidores elétricos — gerando dados contínuos sobre hábitos de vida e consumo.</p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Automação e Robótica</h3>
            <p>Substituição de trabalho humano — manual e cognitivo — por sistemas automatizados. Estima-se que 47% dos empregos americanos têm alto risco de automação (Frey e Osborne, Oxford, 2013).</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Blockchain</h3>
            <p>Registros distribuídos e imutáveis que descentralizam transações financeiras, contratos e identidades digitais, desafiando intermediários como bancos e cartórios.</p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Biotecnologia</h3>
            <p>Edição genética (CRISPR-Cas9), bioinformática e medicina personalizada que combinam ciência da vida com computação avançada, gerando questões éticas sobre "design humano".</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Impacto no trabalho: polarização do mercado</h3>
          <p>
            A automação não elimina todos os empregos uniformemente: ela polariza o mercado de
            trabalho. Empregos de <strong>rotina média</strong> — caixas de banco, operadores de
            dados, contadores de nível básico — são os mais ameaçados. Empregos de alta qualificação
            (criatividade, gestão, pesquisa) e de baixa qualificação mas alta presença física
            (cuidado de idosos, encanamento, serviços de proximidade) resistem mais à automação.
            O resultado tende a ser aumento das desigualdades salariais e diminuição dos empregos
            de classe média.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exclusão Digital</span>
        <h2>2. Desigualdade Digital no Brasil e no Mundo</h2>
        <p>
          A <strong>exclusão digital</strong> é a desigualdade no acesso a tecnologias de informação
          e comunicação (TICs). No Brasil, ela é marcada por recortes de renda, raça, geração e
          região — e reproduz desigualdades estruturais já existentes na sociedade, formando o que
          pesquisadores chamam de "fosso digital" (digital divide).
        </p>
        <p>
          A pandemia de COVID-19 (2020-2022) tornou dramaticamente visível essa desigualdade:
          estudantes sem internet ficaram excluídos do ensino remoto; trabalhadores informais
          não puderam receber benefícios digitais; idosos sem letramento tecnológico perderam
          acesso a serviços básicos de saúde e banco. A exclusão digital não é apenas técnica
          — é um problema de direitos humanos e cidadania.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo / Região</th>
                <th>Acesso à internet (%)</th>
                <th>Principal barreira</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renda até 1 SM (Brasil)</td>
                <td>~68%</td>
                <td>Custo de dispositivos e planos</td>
              </tr>
              <tr>
                <td>Renda acima de 5 SM (Brasil)</td>
                <td>~97%</td>
                <td>Sem barreira significativa</td>
              </tr>
              <tr>
                <td>Região Norte (Brasil)</td>
                <td>~75%</td>
                <td>Infraestrutura e cobertura de sinal</td>
              </tr>
              <tr>
                <td>Região Sudeste (Brasil)</td>
                <td>~90%</td>
                <td>Sem barreira significativa</td>
              </tr>
              <tr>
                <td>Zona rural (Brasil)</td>
                <td>~67%</td>
                <td>Ausência de infraestrutura de fibra</td>
              </tr>
              <tr>
                <td>População negra (Brasil)</td>
                <td>~78%</td>
                <td>Intersecção com desigualdade de renda</td>
              </tr>
              <tr>
                <td>Pessoas com 60+ anos (Brasil)</td>
                <td>~57%</td>
                <td>Letramento digital insuficiente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Fonte: PNAD Contínua / CETIC.br — dados aproximados de 2022-2023. Importante: ter acesso
          à internet não resolve a exclusão digital. Pesquisadores distinguem exclusão de <em>primeiro
          grau</em> (sem acesso físico) e <em>segundo grau</em> (acesso sem competências para uso
          crítico e produtivo). A exclusão de segundo grau é mais sutil e igualmente danosa.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Privacidade e Dados</span>
        <h2>3. Capitalismo de Vigilância e LGPD</h2>
        <p>
          A pesquisadora Shoshana Zuboff (2019) cunhou o conceito de <strong>capitalismo de vigilância</strong>:
          um modelo econômico em que o comportamento humano é matéria-prima extraída, processada e
          vendida como produto para anunciantes e atores políticos. Cada clique, cada pesquisa, cada
          localização registrada se torna dado comercializável.
        </p>
        <p>
          O modelo de negócio das grandes plataformas digitais (Google, Meta, Amazon) não cobra
          diretamente o usuário — o produto é o próprio usuário. Mais precisamente, é a capacidade
          de prever e influenciar o comportamento do usuário que se vende aos anunciantes. Zuboff
          chama isso de "excedente comportamental": os dados coletados são muito mais do que o
          necessário para melhorar o serviço — o excesso é monetizado.
        </p>
        <div className="lesson-highlight">
          <h3>LGPD — Lei Geral de Proteção de Dados (Lei 13.709/2018)</h3>
          <p>
            Inspirada na GDPR europeia, a LGPD estabelece regras para coleta, armazenamento e uso
            de dados pessoais no Brasil. Princípios centrais: finalidade (dados coletados para fins
            específicos), necessidade (apenas o mínimo necessário), transparência e consentimento
            informado. A <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados) é o órgão
            fiscalizador. Dados sensíveis — origem racial, convicção religiosa, saúde, vida sexual,
            dados genéticos — têm proteção reforçada e exigem consentimento específico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desinformação</span>
        <h2>4. Algoritmos, Câmaras de Eco e Desinformação</h2>
        <p>
          Os algoritmos de recomendação das plataformas digitais são projetados para maximizar o
          engajamento — e conteúdos que provocam emoções fortes (raiva, medo, indignação) tendem
          a receber mais cliques, compartilhamentos e tempo de tela. O resultado é a criação de
          <strong> câmaras de eco</strong>: ambientes digitais em que o usuário só encontra
          conteúdos que reforçam suas crenças prévias, impedindo o contato com perspectivas
          divergentes.
        </p>
        <p>
          O ativista Eli Pariser cunhou em 2011 o conceito de <strong>filter bubble</strong> (bolha
          dos filtros): os algoritmos personalizam tanto o feed que cada usuário vive em uma realidade
          informacional distinta, comprometendo a esfera pública e a democracia deliberativa no
          sentido habermasiano. Experimentos do MIT demonstraram que notícias falsas se espalham
          até 6 vezes mais rápido do que notícias verdadeiras no Twitter/X.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Fake news</h3>
            <p>Informações falsas ou enganosas difundidas deliberadamente. Influencia eleições (EUA 2016, Brexit), crises de saúde (hesitação vacinal) e conflitos armados (Rwanda, 1994 via rádio).</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Deepfakes</h3>
            <p>Vídeos e áudios manipulados por IA para criar conteúdos falsos convincentes de pessoas reais. Ameaça à democracia: políticos podem ter palavras e imagens fabricadas.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Radicalização online</h3>
            <p>Pesquisas mostram que algoritmos do YouTube podem conduzir usuários progressivamente a conteúdos mais extremos ao maximizar o tempo de visualização via recomendações de alto engajamento.</p>
          </div>
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Bots e astroturfing</h3>
            <p>Contas automatizadas (bots) simulam apoio popular a posições políticas, criando a ilusão de movimentos de base espontâneos (astroturfing) para manipular percepções de consenso.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho e IA</span>
        <h2>5. IA, Automação e o Futuro do Trabalho</h2>
        <p>
          O debate sobre o impacto da IA no trabalho divide economistas e sociólogos. Pessimistas
          (como Frey e Osborne) apontam que até 47% dos empregos nos EUA são altamente suscetíveis
          à automação. Otimistas (como David Autor) argumentam que a automação sempre criou novos
          tipos de trabalho ao longo da história — o que muda são as tarefas, não a quantidade
          total de emprego.
        </p>
        <p>
          No Brasil, o impacto é desigual e se cruza com desigualdades existentes. Trabalhos
          informais e de baixa qualificação são os mais vulneráveis. A "uberização do trabalho"
          (Ricardo Antunes) é uma manifestação atual: plataformas digitais recrutam trabalhadores
          como "autônomos", eliminando vínculos trabalhistas formais, benefícios e proteções
          previdenciárias — mas mantendo controle algorítmico sobre a jornada e o desempenho.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Setor</th>
                <th>Risco de automação</th>
                <th>Empregos mais ameaçados</th>
                <th>Empregos mais resistentes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indústria</td>
                <td>Alto</td>
                <td>Operadores de linha de montagem</td>
                <td>Engenheiros de manutenção, supervisores</td>
              </tr>
              <tr>
                <td>Comércio</td>
                <td>Alto</td>
                <td>Caixas, operadores de telemarketing</td>
                <td>Gerentes, designers de experiência</td>
              </tr>
              <tr>
                <td>Finanças</td>
                <td>Médio-alto</td>
                <td>Analistas júnior, auditores básicos</td>
                <td>Gestores de relacionamento, estrategistas</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>Médio-baixo</td>
                <td>Radiologistas básicos (diagnóstico por imagem)</td>
                <td>Médicos, enfermeiros, cuidadores</td>
              </tr>
              <tr>
                <td>Educação</td>
                <td>Baixo</td>
                <td>Correção de provas, tutoria básica</td>
                <td>Professores, orientadores pedagógicos</td>
              </tr>
              <tr>
                <td>Criativo</td>
                <td>Médio (emergente)</td>
                <td>Criação de conteúdo básico, design repetitivo</td>
                <td>Arte conceitual, direção criativa de alto nível</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Renda Básica Universal (RBU) como resposta</h3>
          <p>
            Diante da ameaça de desemprego estrutural por automação, economistas e filósofos como
            Philippe Van Parijs debatem a <strong>Renda Básica Universal</strong>: transferência
            incondicional de renda a todos os cidadãos, independentemente de trabalho. Experiências
            piloto foram realizadas na Finlândia (2017-2018), Quênia e Stockton (EUA). No Brasil,
            a Lei 10.835/2004 institui a renda básica como objetivo da política pública, ainda não
            implementada plenamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Viés Algorítmico</span>
        <h2>6. Discriminação Algorítmica e Viés nos Sistemas de IA</h2>
        <p>
          A inteligência artificial aprende com dados históricos — e se esses dados refletem
          décadas de discriminação, o algoritmo aprende a discriminar. Isso é chamado de
          <strong> viés algorítmico</strong> ou discriminação algorítmica: sistemas de IA que
          reproduzem e até ampliam preconceitos de raça, gênero e classe presentes nos dados
          de treinamento.
        </p>
        <p>
          O caso mais célebre é o de um sistema de recrutamento da Amazon (2018) que foi
          descontinuado após aprender a penalizar currículos com palavras relacionadas ao
          feminino, pois foi treinado com dados históricos de uma empresa majoritariamente
          masculina. Outros exemplos: algoritmos de crédito que negam empréstimos a moradores
          de bairros negros; sistemas de reconhecimento facial com taxas de erro muito maiores
          para rostos negros (Joy Buolamwini, MIT Media Lab, 2018).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Viés no sistema de Justiça</h3>
            <p>O COMPAS (EUA) usava IA para prever reincidência criminal em sentenças — e foi documentado como sistematicamente mais severo com réus negros. Algoritmo como reprodutor de racismo estrutural.</p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Redlining digital</h3>
            <p>Algoritmos de precificação de seguros, crédito e moradia podem reproduzir o "redlining" histórico (exclusão de bairros negros do crédito) de forma invisível e automatizada.</p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Reconhecimento facial</h3>
            <p>Sistemas de reconhecimento facial têm taxas de erro de 34,7% para mulheres negras vs. 0,8% para homens brancos (Buolamwini, 2018). Uso pela polícia gera falsas acusações documentadas.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>IA explicável (XAI)</h3>
            <p>Movimento técnico-político para tornar as decisões de IA transparentes e auditáveis — exigência crescente de regulações como o AI Act europeu (2024) para sistemas de alto risco.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Digital</span>
        <h2>7. Democracia, Redes Sociais e Ciberpolitica</h2>
        <p>
          A internet foi inicialmente saudada como ferramenta democrática por excelência: acesso
          universal à informação, capacidade de organização horizontal e participação direta dos
          cidadãos. As Primaveras Árabes (2010-2012) e o Occupy Wall Street (2011) foram vistos
          como evidências desse potencial emancipatório. Castells chamou isso de <strong>redes
          de indignação e esperança</strong>.
        </p>
        <p>
          Mas a mesma tecnologia revelou seu potencial autoritário: Cambridge Analytica (2018)
          usou dados de 87 milhões de usuários do Facebook para microssegmentação eleitoral
          manipuladora; o genocídio de Rohingya em Myanmar foi facilitado por disseminação
          de ódio no Facebook; o assalto ao Capitólio americano (2021) foi organizado em redes
          sociais. Pesquisadores falam em "democracia administrada por algoritmos" — onde o
          debate público é mediado por interesses comerciais das plataformas.
        </p>
        <div className="lesson-highlight">
          <h3>Regulação das plataformas digitais no Brasil</h3>
          <p>
            O PL 2630/2020 ("PL das Fake News") e o Marco Civil da Internet (Lei 12.965/2014)
            são as principais iniciativas legislativas brasileiras para regular plataformas
            digitais. O Marco Civil garante a neutralidade da rede e a responsabilidade subsidiária
            de plataformas — só respondem por conteúdo de terceiros se desobedecerem ordem
            judicial de remoção. O STF e o TSE têm sido protagonistas no debate sobre
            desinformação eleitoral.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociedade em Rede</span>
        <h2>8. Manuel Castells e a Sociedade em Rede</h2>
        <p>
          O sociólogo espanhol Manuel Castells desenvolveu o conceito de <strong>sociedade em
          rede</strong> em sua trilogia "A Era da Informação" (1996-1998). Para Castells, a
          revolução das TICs criou uma nova morfologia social: redes substituem hierarquias como
          forma dominante de organização. Essa mudança afeta o capitalismo (financeirizado e global),
          o Estado (enfraquecido por fluxos transnacionais) e a identidade (fragmentada e múltipla).
        </p>
        <p>
          Na sociedade em rede, o poder está nos <strong>switchers</strong> (atores que conectam
          ou desconectam redes) e nos <strong>programmers</strong> (aqueles que definem os objetivos
          e protocolos das redes). Google, Meta e Amazon são exemplos de programmers que definem
          as regras do jogo digital global. Castells também analisa o <strong>contrapoder</strong>:
          movimentos sociais que utilizam as mesmas redes para desafiar o poder estabelecido —
          como o feminismo online, o movimento #BlackLivesMatter ou as manifestações de junho de
          2013 no Brasil.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Autor</th>
                <th>Definição-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sociedade em rede</td>
                <td>Castells</td>
                <td>Organização social baseada em fluxos de informação, capital e poder em tempo real</td>
              </tr>
              <tr>
                <td>Capitalismo de vigilância</td>
                <td>Zuboff</td>
                <td>Modelo econômico que extrai comportamento humano como matéria-prima e o monetiza</td>
              </tr>
              <tr>
                <td>Bolha de filtro</td>
                <td>Pariser</td>
                <td>Personalização algorítmica que isola usuários em universos informacionais distintos</td>
              </tr>
              <tr>
                <td>Viés algorítmico</td>
                <td>O'Neil / Buolamwini</td>
                <td>Discriminação reproduzida e amplificada por sistemas de IA treinados com dados históricos desiguais</td>
              </tr>
              <tr>
                <td>Uberização</td>
                <td>Antunes / Slee</td>
                <td>Modelo de trabalho mediado por plataformas que elimina vínculos formais mantendo controle algorítmico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética e Tecnologia</span>
        <h2>9. Ética na Inteligência Artificial e Governança Digital</h2>
        <p>
          À medida que os sistemas de IA tomam decisões que afetam vidas — concessão de crédito,
          diagnósticos médicos, sentenças judiciais, contratação de emprego — emergem questões
          éticas fundamentais: <strong>quem é responsável</strong> quando um algoritmo erra?
          <strong> Como garantir transparência</strong> em sistemas opacos ("caixas-pretas")?
          <strong> Como assegurar que IA beneficia a todos</strong> e não apenas quem a controla?
        </p>
        <p>
          Em 2021, a UNESCO adotou a primeira recomendação global sobre ética em IA, estabelecendo
          princípios como: respeito à dignidade humana, diversidade e pluralismo, meio ambiente
          sustentável, privacidade, transparência e supervisão humana. A União Europeia aprovou
          em 2024 o <strong>AI Act</strong>, a primeira lei abrangente de regulação de IA no mundo,
          que classifica sistemas por nível de risco e proíbe aplicações de alto risco inaceitável
          (como sistemas de crédito social estilo chinês e reconhecimento facial em espaços
          públicos em tempo real).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Soberania digital</h3>
            <p>Debate sobre o controle de países sobre seus dados e infraestrutura digital. Brasil, como outros países do Sul Global, é dependente de plataformas e infraestruturas estrangeiras.</p>
          </div>
          <div className="lesson-card">
            <span>🔒</span>
            <h3>Direito ao esquecimento</h3>
            <p>Reconhecido pelo STJ no Brasil e pelo TJUE na Europa: direito de ter dados pessoais removidos de resultados de busca após determinado tempo, preservando a reputação e privacidade.</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>IA e meio ambiente</h3>
            <p>Treinamento de grandes modelos de IA (como GPT-4) consome energia equivalente à de centenas de residências por ano. A "pegada de carbono" da IA é um debate emergente de justiça ambiental.</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>IA e saúde mental</h3>
            <p>Pesquisas associam uso intensivo de redes sociais a aumento de ansiedade, depressão e distúrbios de imagem corporal, especialmente entre adolescentes — debate sobre responsabilidade das plataformas.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil Digital</span>
        <h2>10. Tecnologia, Desigualdade e Perspectivas para o Brasil</h2>
        <p>
          O Brasil ocupa uma posição paradoxal na era digital: é o 3º país do mundo em tempo
          médio de uso de redes sociais (acima de EUA e China), mas ainda tem dezenas de milhões
          de excluídos digitais. Essa contradição reflete a desigualdade estrutural brasileira:
          elite hiperconectada e periferia com acesso precário via celular pré-pago, sem
          computador ou banda larga fixa.
        </p>
        <p>
          O mercado de trabalho digital brasileiro também reflete desigualdades: plataformas de
          entrega e transporte empregam majoritariamente trabalhadores negros e pardos em condições
          de precarização. Segundo o IBGE, em 2023 havia cerca de 1,5 milhão de trabalhadores de
          entrega por aplicativo no Brasil — 78% homens, maioria parda ou negra, sem proteção
          trabalhista formal. A discussão sobre regulação do trabalho de plataformas é um dos
          principais temas de política pública contemporânea no país.
        </p>
        <div className="lesson-highlight">
          <h3>Perspectivas para a inclusão digital no Brasil</h3>
          <p>
            Iniciativas como o Programa Conecta Brasil, o Plano Nacional de Banda Larga e o
            Programa Computadores para Inclusão (PC conectado) buscam ampliar o acesso. Mas
            especialistas alertam: inclusão digital sem letramento digital reproduz a exclusão
            de segundo grau. Programas de formação em competências digitais — como o Aprendiz
            Virtual do SENAI e os Telecentros comunitários — são tão importantes quanto a
            infraestrutura técnica de conexão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="4ª Revolução Industrial"
          statement={<p>A 4ª Revolução Industrial se distingue das anteriores principalmente por:</p>}
          options={[
            { letter: "A", text: "Ser limitada ao setor industrial manufatureiro, sem afetar serviços ou agricultura." },
            { letter: "B", text: "Operar em velocidade exponencial, fundindo os mundos físico, digital e biológico com impacto sistêmico simultâneo.", correct: true },
            { letter: "C", text: "Basear-se exclusivamente na energia a vapor e na mecanização da produção têxtil." },
            { letter: "D", text: "Ser um processo que beneficia igualmente todos os países e classes sociais, reduzindo desigualdades." },
            { letter: "E", text: "Estar restrita a países desenvolvidos, sem impacto nos países em desenvolvimento." },
          ]}
          resolution={<p>Schwab destaca que a 4ª Revolução Industrial não é apenas mais rápida: ela funde dimensões antes separadas (físico, digital, biológico) e afeta todos os setores e países simultaneamente, diferindo qualitativamente das revoluções anteriores. As demais alternativas descrevem características de revoluções passadas ou distorcem o conceito.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Exclusão digital no Brasil"
          statement={<p>Os dados sobre acesso à internet no Brasil revelam que a exclusão digital está fortemente associada a:</p>}
          options={[
            { letter: "A", text: "A falta de interesse da população de baixa renda em utilizar tecnologia." },
            { letter: "B", text: "Desigualdades estruturais de renda, raça e região que condicionam o acesso a dispositivos e infraestrutura.", correct: true },
            { letter: "C", text: "A limitação natural de expansão das redes de telecomunicações em países tropicais." },
            { letter: "D", text: "A ausência de legislação específica sobre internet no Brasil." },
            { letter: "E", text: "A preferência cultural por meios de comunicação tradicionais, como rádio e televisão." },
          ]}
          resolution={<p>A exclusão digital reproduz e aprofunda desigualdades preexistentes: populações de baixa renda, negras e das regiões Norte e rural têm acesso significativamente menor. A pandemia tornou isso dramaticamente visível ao excluir estudantes sem internet do ensino remoto. A alternativa B é a única que aponta para as causas estruturais documentadas pelos dados do CETIC.br e PNAD.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Capitalismo de vigilância"
          statement={<p>O conceito de "capitalismo de vigilância" (Shoshana Zuboff) descreve um modelo econômico em que:</p>}
          options={[
            { letter: "A", text: "O Estado utiliza câmeras de segurança para monitorar cidadãos e prevenir crimes nas cidades." },
            { letter: "B", text: "Empresas de tecnologia transformam o comportamento humano em dado comercializável, vendido para anunciantes e atores políticos.", correct: true },
            { letter: "C", text: "O capital industrial vigia os trabalhadores para aumentar a produtividade nas fábricas, conforme descrito por Marx." },
            { letter: "D", text: "Governos autoritários utilizam tecnologia de reconhecimento facial para suprimir a oposição política." },
            { letter: "E", text: "Consumidores utilizam redes sociais para vigiar e avaliar publicamente as práticas das empresas." },
          ]}
          resolution={<p>O capitalismo de vigilância é distinto da vigilância estatal: são empresas privadas (Google, Meta) que extraem dados comportamentais dos usuários como matéria-prima, processam em perfis preditivos e vendem a capacidade de influenciar comportamentos. O "excedente comportamental" — dados além do necessário para o serviço — é a nova forma de acumulação. A LGPD tenta regular essa prática no Brasil.</p>}
        />

        <Exercise
          level="Avançado"
          title="Viés algorítmico e discriminação"
          statement={<p>Um sistema de seleção de currículos baseado em inteligência artificial aprendeu com contratações históricas e passou a penalizar sistematicamente currículos de candidatas negras. Esse caso ilustra qual problema sociológico?</p>}
          options={[
            { letter: "A", text: "A superioridade técnica dos sistemas de IA em relação aos recrutadores humanos, que cometem mais erros de julgamento." },
            { letter: "B", text: "A neutralidade dos algoritmos em relação a questões de raça e gênero, que elimina o preconceito humano dos processos seletivos." },
            { letter: "C", text: "A reprodução e amplificação de preconceitos históricos por sistemas de IA treinados em dados que refletem desigualdades estruturais.", correct: true },
            { letter: "D", text: "A incapacidade técnica da IA de processar informações qualitativas como currículos." },
            { letter: "E", text: "O uso irresponsável de IA por pequenas empresas sem acesso a tecnologia de qualidade." },
          ]}
          resolution={<p>A IA aprende com dados históricos — e se esses dados refletem décadas de discriminação (poucas mulheres negras em cargos de liderança), o algoritmo aprende a discriminar. Isso é o viés algorítmico, documentado por pesquisadoras como Joy Buolamwini e Cathy O'Neil. Longe de ser neutro, o algoritmo pode institucionalizar e escalar preconceitos, tornando-os mais opacos e difíceis de contestar do que o preconceito humano explícito.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Uberização e trabalho"
          statement={
            <p>
              "Segundo dados da PNAD, em 2023 mais de 1,5 milhão de trabalhadores no Brasil atuavam
              como entregadores ou motoristas por aplicativo. Esses trabalhadores são classificados
              pelas plataformas como 'autônomos', sem carteira assinada, sem férias remuneradas,
              sem licença médica e sem contribuição previdenciária garantida pelo empregador. Ao
              mesmo tempo, têm sua jornada controlada por algoritmos que determinam como, quando
              e quanto trabalham."
              <br /><br />
              Sob a perspectiva da Sociologia do Trabalho, esse fenômeno é mais adequadamente
              descrito como:
            </p>
          }
          options={[
            { letter: "A", text: "Empreendedorismo digital: trabalhadores que escolheram livremente a flexibilidade em detrimento da segurança, exercendo plena autonomia." },
            { letter: "B", text: "Fordismo digital: aplicação das técnicas de linha de montagem de Ford ao ambiente digital das plataformas." },
            { letter: "C", text: "Uberização do trabalho: precarização das relações trabalhistas mediada por plataformas que eliminam vínculos formais mas mantêm controle algorítmico sobre o trabalhador.", correct: true },
            { letter: "D", text: "Toyotismo puro: aplicação do modelo de produção flexível japonês ao setor de serviços digitais brasileiros." },
            { letter: "E", text: "Solidariedade orgânica: trabalhadores especializados em funções distintas que se tornam interdependentes pela mediação tecnológica." },
          ]}
          resolution={<p>Ricardo Antunes e outros sociólogos do trabalho descrevem a "uberização" como uma nova forma de precarização: as plataformas digitalizam e intensificam a exploração ao deslocar riscos (acidentes, manutenção de veículos, flutuação de demanda) ao trabalhador, eliminar proteções trabalhistas históricas, mas manter controle algorítmico total sobre tempo, rota e avaliação. Não é autonomia real — é heteronomia encoberta por discurso de empreendedorismo.</p>}
        />
      </section>
    </article>
  );
}
