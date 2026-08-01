"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 21</span>
          <h1>Introdução por Contextualização</h1>
          <p>
            Domine a técnica de contextualização — o modelo de abertura mais usado
            nas redações nota 1000 do ENEM — e aprenda a construir introduções que
            prendem o corretor desde a primeira linha.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O modelo mais usado nas redações nota 1000</h2>
        <p>
          Análises de redações nota 1000 do ENEM revelam um padrão: a grande
          maioria das melhores redações começa com alguma forma de contextualização.
          Contextualizar significa situar o tema dentro de um contexto mais amplo —
          histórico, social, filosófico ou contemporâneo — antes de apresentar a
          tese. Isso cumpre três funções simultâneas: demonstra conhecimento de
          mundo (C2), apresenta o problema de forma orgânica (C3) e prepara o leitor
          para o posicionamento do autor.
        </p>
        <div className="lesson-highlight">
          <h3>Por que a contextualização funciona</h3>
          <p>
            Ela não começa pelo problema em si, mas pelo contexto que o produziu.
            Isso cria profundidade: o corretor percebe que o autor entende as raízes
            da questão, não apenas sua superfície. Uma boa contextualização transforma
            a introdução em um mini-argumento, onde o problema emerge naturalmente do
            contexto apresentado.
          </p>
        </div>
        <p>
          A contextualização ideal ocupa de 3 a 4 linhas, é específica (evita
          generalismos como "desde os primórdios da humanidade") e termina com uma
          frase de transição que leva diretamente à tese. O bloco introdução completo
          deve ter entre 5 e 7 linhas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>2. Contextualização histórica: ancorar o tema em momento relevante</h2>
        <p>
          A contextualização histórica situa o problema em um momento específico
          do passado que ilumina a questão atual. Não se trata de contar toda a
          história, mas de escolher um ponto de inflexão — um evento, período ou
          transformação — que explique por que o problema existe hoje.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura da contextualização histórica</h3>
          <p>
            <strong>Período/evento histórico relevante</strong> → transformação
            ocorrida → desdobramento até o presente → problema atual → tese.
          </p>
        </div>
        <p>
          <strong>Exemplo para o tema "desigualdade racial":</strong> "O período
          escravocrata brasileiro, que se estendeu por mais de três séculos e deixou
          o país como um dos últimos a abolir a escravidão, em 1888, criou estruturas
          de exclusão racial que persistem até hoje. A ausência de políticas de
          reparação pós-abolição consolidou a desigualdade socioeconômica entre negros
          e brancos, evidenciada nos dados atuais sobre renda, educação e representação
          política. Nesse contexto, torna-se imperioso que o Estado brasileiro adote
          medidas efetivas de equidade racial."
        </p>
        <p>
          Perceba que o argumento histórico NÃO é decorativo: ele explica a CAUSA do
          problema atual, o que fortalece o argumento de desenvolvimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>3. Contextualização contemporânea: partir de fato recente</h2>
        <p>
          A contextualização contemporânea parte de uma realidade atual, recente ou
          em curso para introduzir o tema. É especialmente eficaz quando o tema do
          ENEM está diretamente relacionado a algo que está na agenda pública —
          pandemia, crise climática, avanço da IA, eleições, movimentos sociais.
        </p>
        <div className="lesson-highlight">
          <h3>Como usar sem citar data exata</h3>
          <p>
            Evite datas precisas que podem ser questionadas. Use expressões como
            "na última década", "em período recente", "com o avanço da tecnologia
            digital", "após a pandemia de Covid-19". Isso protege o autor de erros
            factuais enquanto mantém a contemporaneidade do argumento.
          </p>
        </div>
        <p>
          <strong>Exemplo para "saúde mental de jovens":</strong> "Com a intensificação
          do uso de redes sociais entre adolescentes e os impactos do isolamento social
          provocado pela pandemia de Covid-19, a saúde mental de jovens emergiu como
          uma crise silenciosa de dimensões nacionais. Dados do Ministério da Saúde
          apontam crescimento expressivo nos casos de depressão e ansiedade entre a
          população de 15 a 24 anos, evidenciando que o bem-estar psicológico dos
          jovens brasileiros está sendo negligenciado pelo poder público."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>4. Contextualização conceitual: definir o termo central do tema</h2>
        <p>
          A contextualização conceitual parte da definição ou da análise de um
          conceito-chave presente no tema. Em vez de definir friamente ("X é Y"),
          o autor apresenta o conceito de forma crítica, mostrando sua complexidade
          ou sua distância da realidade brasileira.
        </p>
        <div className="lesson-highlight">
          <h3>Diferença entre definição fria e contextualização conceitual</h3>
          <p>
            <strong>Definição fria (evitar):</strong> "Fake news é a divulgação
            de notícias falsas."<br />
            <strong>Contextualização conceitual (usar):</strong> "O fenômeno das
            fake news — informações deliberadamente falsas produzidas e disseminadas
            com fins políticos ou comerciais — ganhou proporções alarmantes no
            ambiente digital contemporâneo, comprometendo a qualidade do debate
            democrático e a capacidade da população de tomar decisões informadas."
          </p>
        </div>
        <p>
          Este tipo é poderoso para temas como inteligência artificial, sustentabilidade,
          inclusão digital e democracia, onde o próprio conceito é disputado ou
          mal-compreendido. O autor que consegue precisar o conceito mostra domínio
          intelectual do assunto.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>5. Contextualização por contraste: dois lados antes da tese</h2>
        <p>
          A contextualização por contraste apresenta duas realidades opostas — ou
          a distância entre o ideal e o real — para evidenciar o problema. Ela
          funciona especialmente bem quando o tema envolve uma contradição social
          explícita: lei vs. prática, discurso vs. realidade, progresso vs. exclusão.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura do contraste</h3>
          <p>
            "Se por um lado [realidade positiva/promessa/ideal], por outro [realidade
            negativa/exclusão/problema] — contradição que evidencia [tese]."
          </p>
        </div>
        <p>
          <strong>Exemplo para "acesso à internet":</strong> "Se por um lado o
          Brasil figura entre os países com maior número de usuários de redes sociais
          no mundo, com mais de 150 milhões de pessoas conectadas, por outro cerca
          de 40 milhões de brasileiros ainda vivem sem acesso à internet — realidade
          que revela a profunda desigualdade digital que segmenta o país entre
          conectados e excluídos."
        </p>
        <p>
          O contraste cria um efeito de surpresa produtivo: o leitor é apresentado
          a um dado positivo e imediatamente confrontado com sua contradição. Esse
          movimento retórico funciona como um gancho que mantém a atenção e
          prepara naturalmente para a tese.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Estrutura visual da introdução por contextualização</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama mostrando como a contextualização leva à tese na introdução">
            <rect x="10" y="10" width="460" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="240" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">CONTEXTUALIZAÇÃO (3–4 linhas)</text>
            <text x="240" y="52" textAnchor="middle" fontSize="11" fill="#1e3a8a">Fato histórico / Realidade atual / Conceito / Contraste</text>
            <text x="240" y="70" textAnchor="middle" fontSize="11" fill="#1e3a8a">→ situa o tema em contexto mais amplo</text>
            <text x="240" y="88" textAnchor="middle" fontSize="11" fill="#1e3a8a">→ evidencia o problema central</text>
            <line x1="240" y1="90" x2="240" y2="130" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow21)"/>
            <defs>
              <marker id="arrow21" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
              </marker>
            </defs>
            <text x="240" y="120" textAnchor="middle" fontSize="18" fill="#6b7280">↓</text>
            <rect x="10" y="135" width="460" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="240" y="157" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#15803d">TESE (1–2 linhas)</text>
            <text x="240" y="175" textAnchor="middle" fontSize="11" fill="#14532d">Posicionamento claro do autor sobre o tema</text>
            <text x="240" y="193" textAnchor="middle" fontSize="11" fill="#14532d">→ decorre naturalmente do contexto apresentado</text>
          </svg>
          <figcaption>A contextualização prepara o terreno para que a tese emerja de forma natural e convincente.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Templates</span>
        <h2>7. Frases de abertura modelo para cada tipo</h2>
        <p>
          Memorize estes templates e adapte-os ao tema da prova. Eles funcionam como
          "âncoras" que você completa com o conteúdo específico do tema.
        </p>
        <div className="lesson-highlight">
          <h3>5 templates completos de contextualização</h3>
          <p>
            <strong>1. Histórica:</strong> "O processo de [evento histórico], ocorrido
            ao longo do século [X], deixou marcas profundas na sociedade brasileira,
            especialmente no que tange a [tema]. Essa herança histórica se manifesta
            ainda hoje em [consequência atual], tornando urgente [tese]."
          </p>
          <p>
            <strong>2. Contemporânea:</strong> "Em um contexto marcado por [realidade
            atual], a questão de [tema] ganhou centralidade no debate público nacional.
            Dados recentes revelam que [estatística/problema], evidenciando que [tese]."
          </p>
          <p>
            <strong>3. Conceitual:</strong> "O conceito de [termo central], compreendido
            como [definição crítica], é fundamental para analisar [tema]. No Brasil,
            entretanto, [contradição/problema], o que demonstra que [tese]."
          </p>
          <p>
            <strong>4. Por contraste:</strong> "Se por um lado [dado positivo], por
            outro [dado negativo/exclusão] — contradição que expõe [problema central].
            Diante desse cenário, [tese]."
          </p>
          <p>
            <strong>5. Sociológica:</strong> "A socióloga/o filósofo [nome] afirmava
            que [ideia adaptada ao tema]. Tal perspectiva revela-se especialmente
            pertinente na análise da realidade brasileira, onde [problema], impondo
            a necessidade de [tese]."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coerência</span>
        <h2>8. Como a contextualização conecta ao argumento do Desenvolvimento 1</h2>
        <p>
          Um erro frequente é escrever uma boa contextualização e depois
          "esquecer" dela no desenvolvimento. O Desenvolvimento 1 deve retomar
          e aprofundar o que foi anunciado na introdução — não pode parecer um
          texto completamente diferente.
        </p>
        <div className="lesson-highlight">
          <h3>Regra de coerência introdução-desenvolvimento</h3>
          <p>
            Se a contextualização foi histórica (ex: período colonial), o primeiro
            parágrafo de desenvolvimento deve aprofundar essa causa histórica.
            Se a contextualização foi por dado (ex: 40 milhões sem internet), o
            desenvolvimento deve analisar a causa estrutural desse dado.
          </p>
        </div>
        <p>
          Na prática: releia sua frase tópico do Desenvolvimento 1 e pergunte
          "ela poderia ser a sequência direta da minha contextualização?" Se a
          resposta for não, revise um dos dois. A coerência entre parágrafos é
          avaliada pela Competência 3 (C3) e pode representar a diferença entre
          160 e 200 pontos nesse critério.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>9. Erros na contextualização: armadilhas a evitar</h2>
        <p>
          Mesmo candidatos bem preparados cometem erros típicos na contextualização.
          Conhecer esses erros com antecedência é fundamental para evitá-los na prova.
        </p>
        <div className="lesson-highlight">
          <h3>Os 5 erros mais comuns</h3>
          <p>
            <strong>1. Generalização excessiva:</strong> "Desde os primórdios da
            humanidade, o homem busca..." — essa frase não situa o problema em
            nenhum contexto específico e prejudica a C2.
          </p>
          <p>
            <strong>2. Repetir o enunciado:</strong> O enunciado diz "discuta a
            violência contra a mulher"; o candidato começa "A violência contra a
            mulher é um problema sério no Brasil." Isso não é contextualização,
            é paráfrase.
          </p>
          <p>
            <strong>3. Sair do tema:</strong> Contextualizar a Segunda Guerra Mundial
            para um tema sobre bullying digital é forçado e afasta o texto do foco.
          </p>
          <p>
            <strong>4. Contextualização sem transição para a tese:</strong> O
            candidato escreve 4 linhas de contexto histórico e depois apresenta
            a tese sem conectivo — parecendo dois textos separados.
          </p>
          <p>
            <strong>5. Informação incorreta:</strong> Datas erradas, dados imprecisos
            ou referências equivocadas prejudicam a credibilidade do texto inteiro.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>10. Introduções modelo para 3 temas ENEM reais</h2>
        <p>
          Analise estes exemplos completos e observe como cada tipo de contextualização
          funciona na prática com temas que já caíram no ENEM.
        </p>
        <div className="lesson-highlight">
          <h3>Tema 1: "Desafios para o enfrentamento da violência contra a mulher" (ENEM 2015)</h3>
          <p>
            <em>Contextualização histórica:</em> "A construção histórica de uma
            sociedade patriarcal no Brasil, herdada da colonização portuguesa e
            reforçada por séculos de cultura machista, relegou a mulher a um papel
            de subordinação e invisibilidade social. Embora o século XX tenha
            testemunhado conquistas expressivas — como o direito ao voto, em 1932,
            e a criação da Lei Maria da Penha, em 2006 —, a violência de gênero
            permanece como uma chaga que vitima milhares de mulheres anualmente no
            país. Portanto, é imprescindível que o Estado amplie as políticas de
            proteção e os mecanismos de responsabilização dos agressores."
          </p>
          <h3>Tema 2: "O papel do movimento estudantil para o fortalecimento da democracia" (ENEM 2017)</h3>
          <p>
            <em>Contextualização por contraste:</em> "Se por um lado a Constituição
            Federal de 1988 consagra a participação social como pilar da democracia
            brasileira, por outro a história recente do país demonstra que a juventude
            estudantil precisou ocupar as ruas para defender esse mesmo princípio.
            Movimentos como as 'Diretas Já', nos anos 1980, e as ocupações de escolas
            em 2016 evidenciam que o protagonismo estudantil é, historicamente,
            termômetro e motor da saúde democrática. Nesse sentido, reconhecer e
            fortalecer esse protagonismo é condição indispensável para uma democracia
            plena."
          </p>
          <h3>Tema 3: "Manipulação do comportamento do usuário pelo controle de dados" (ENEM 2022)</h3>
          <p>
            <em>Contextualização contemporânea:</em> "Com a consolidação das
            plataformas digitais como espaços centrais de interação social, consumo
            e informação, o volume de dados gerados por usuários tornou-se um ativo
            econômico de enorme valor. Empresas como Meta e Google constroem modelos
            de negócio baseados na coleta, análise e venda de dados comportamentais,
            criando mecanismos sofisticados de influência sobre escolhas individuais
            — desde o produto comprado até o candidato votado. Diante desse cenário,
            torna-se urgente a regulamentação estatal sobre o uso de dados pessoais."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. Tipos de contextualização: o que o corretor vê</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Frase de abertura modelo</th>
                <th>Exemplo de tema</th>
                <th>O que o corretor avalia positivamente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Histórica</td>
                <td>"O processo de [evento], ocorrido no século [X], criou estruturas que..."</td>
                <td>Desigualdade racial, educação, violência</td>
                <td>Perspectiva temporal, profundidade, C2 elevado</td>
              </tr>
              <tr>
                <td>Contemporânea</td>
                <td>"Em um contexto marcado por [realidade atual], a questão de..."</td>
                <td>Saúde mental, fake news, IA, trabalho</td>
                <td>Atualidade, consciência do presente, C2</td>
              </tr>
              <tr>
                <td>Conceitual</td>
                <td>"O conceito de [termo], compreendido como [definição crítica]..."</td>
                <td>Democracia, sustentabilidade, inclusão</td>
                <td>Precisão intelectual, rigor argumentativo</td>
              </tr>
              <tr>
                <td>Por contraste</td>
                <td>"Se por um lado [dado positivo], por outro [dado negativo]..."</td>
                <td>Desigualdade, acesso à educação, saúde</td>
                <td>Tensão produtiva, consciência crítica</td>
              </tr>
              <tr>
                <td>Sociológica/filosófica</td>
                <td>"O pensador [nome] defende que [ideia], perspectiva que ilumina..."</td>
                <td>Qualquer tema com repertório adequado</td>
                <td>C2 máximo, sofisticação cultural</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo da Aula</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📍</span>
            <h3>Histórica</h3>
            <p>Ancora o tema em evento histórico que explica a origem do problema atual.</p>
          </div>
          <div className="math-card">
            <span>📰</span>
            <h3>Contemporânea</h3>
            <p>Parte de realidade atual ou recente para evidenciar a urgência do tema.</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Conceitual</h3>
            <p>Define criticamente o termo central do tema, mostrando domínio intelectual.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Por contraste</h3>
            <p>Apresenta contradição entre ideal e real, criando tensão que leva à tese.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Coerência</h3>
            <p>O Desenvolvimento 1 deve retomar e aprofundar o que foi contextualizado na introdução.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Erros</h3>
            <p>Evite: generalismos, repetição do enunciado, dados incorretos, falta de transição para a tese.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Função da contextualização"
          statement={<p>Na introdução de uma redação dissertativo-argumentativa, a contextualização tem como principal função:</p>}
          options={[
            { letter: "a", text: "Apresentar a proposta de intervenção detalhada" },
            { letter: "b", text: "Situar o tema em contexto mais amplo antes de apresentar a tese", correct: true },
            { letter: "c", text: "Listar todos os argumentos que serão usados no desenvolvimento" },
            { letter: "d", text: "Repetir o enunciado com outras palavras para demonstrar compreensão" },
          ]}
          resolution={<p>A contextualização situa o tema em um contexto mais amplo — histórico, contemporâneo, conceitual ou por contraste — para que a tese emerja de forma natural e fundamentada. Não é repetição do enunciado nem apresentação de proposta.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Tipo de contextualização"
          statement={<p>Analise a abertura: "Se por um lado o Brasil possui uma das maiores biodiversidades do planeta, por outro registra taxas alarmantes de desmatamento — contradição que expõe a fragilidade da fiscalização ambiental." Esse tipo de contextualização é classificado como:</p>}
          options={[
            { letter: "a", text: "Contextualização histórica, pois remete ao passado colonial" },
            { letter: "b", text: "Contextualização conceitual, pois define o termo biodiversidade" },
            { letter: "c", text: "Contextualização por contraste, pois apresenta duas realidades opostas", correct: true },
            { letter: "d", text: "Contextualização filosófica, pois cita um pensador implícito" },
          ]}
          resolution={<p>A estrutura "se por um lado... por outro..." caracteriza a contextualização por contraste. Ela apresenta a contradição entre o potencial natural do Brasil e a realidade do desmatamento, criando a tensão que justifica a tese sobre fiscalização ambiental.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Coerência introdução-desenvolvimento"
          statement={<p>Um candidato escreve uma contextualização histórica sobre a escravidão para introduzir o tema "desigualdade racial". Qual deve ser a frase tópico do primeiro parágrafo de desenvolvimento para manter coerência temática (C3)?</p>}
          options={[
            { letter: "a", text: "A globalização trouxe novos desafios para a identidade cultural brasileira." },
            { letter: "b", text: "A herança do período escravocrata se manifesta na atual desigualdade de renda e acesso à educação entre negros e brancos.", correct: true },
            { letter: "c", text: "O avanço tecnológico criou oportunidades para todas as classes sociais." },
            { letter: "d", text: "A Constituição Federal de 1988 garantiu direitos iguais a todos os cidadãos." },
          ]}
          resolution={<p>Para manter coerência (C3), o desenvolvimento deve retomar e aprofundar o contexto da introdução. Se a contextualização foi sobre a escravidão, o desenvolvimento deve analisar como essa herança histórica gerou as desigualdades atuais — conectando passado e presente de forma argumentativa.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Erro na contextualização"
          statement={<p>Um candidato inicia sua redação sobre "fake news" com a frase: "Desde os primórdios da humanidade, o homem busca se comunicar e transmitir informações." Qual é o principal problema dessa contextualização?</p>}
          options={[
            { letter: "a", text: "A frase é muito curta para uma boa contextualização" },
            { letter: "b", text: "O candidato usou linguagem informal inadequada" },
            { letter: "c", text: "A generalização excessiva não situa o tema em contexto relevante e prejudica a C2", correct: true },
            { letter: "d", text: "O candidato não deve mencionar humanidade na redação" },
          ]}
          resolution={<p>Frases como "desde os primórdios da humanidade" são generalismos que o ENEM penaliza. Elas não situam o tema em nenhum contexto específico, demonstram conhecimento superficial (C2 baixo) e não criam conexão com o problema do tema. Uma contextualização eficaz seria ancorada no surgimento das redes sociais, na proliferação do WhatsApp no Brasil ou em dados sobre impacto eleitoral das fake news.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Aplicação prática"
          statement={<p>Para o tema "Caminhos para combater o racismo estrutural no Brasil", qual contextualização é mais adequada para uma redação nota 1000?</p>}
          options={[
            { letter: "a", text: "Definir o que é racismo como um fenômeno universal presente em todas as culturas" },
            { letter: "b", text: "Citar que o Brasil tem muita diversidade cultural e por isso o racismo é um problema complexo" },
            { letter: "c", text: "Ancorar o problema na herança colonial escravocrata e na ausência de políticas de reparação pós-abolição, conectando o passado à desigualdade racial atual", correct: true },
            { letter: "d", text: "Começar com a pergunta retórica: o que é ser negro no Brasil?" },
          ]}
          resolution={<p>A contextualização histórica conectando o período escravocrata à desigualdade atual é a mais eficaz porque: (1) situa o problema em contexto específico, (2) demonstra profundidade de análise (C2), (3) já apresenta a causa estrutural que o desenvolvimento vai aprofundar (C3). As demais opções são vagas, superficiais ou usam recursos retóricos sem aprofundamento.</p>}
        />
      </section>
    </article>
  );
}
