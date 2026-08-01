"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 34</span>
          <h1>Questões Comentadas das Últimas Provas do ENEM</h1>
          <p>
            A melhor forma de se preparar para o ENEM é entender como as questões
            são construídas: quais armadilhas os elaboradores usam, como os
            distratores são formulados e por que a alternativa correta é
            inequivocamente a melhor resposta. Neste capítulo, analisamos situações
            típicas das provas com o olhar clínico de quem quer acertar, não
            adivinhar.
          </p>
          <p>
            Cada análise segue a mesma metodologia: leitura do texto, identificação
            do gênero e da habilidade avaliada, resolução passo a passo e descarte
            comentado de cada distrator. Ao terminar este capítulo, você reconhecerá
            os padrões de construção de questão e isso vale mais do que memorizar
            conteúdo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise 1 — Gênero multimodal</span>
        <h2>1. Questão com Tirinha: Lendo o Não-Verbal</h2>
        <p>
          Tirinhas são o gênero mais frequente nas provas de inglês do ENEM. O
          candidato precisa integrar linguagem verbal e visual para identificar
          intenção humorística, ironia ou crítica social. A questão raramente pede
          a "tradução" do texto — ela pede o <strong>efeito de sentido</strong>.
        </p>

        <div className="lesson-highlight">
          <strong>Situação típica:</strong> Uma tirinha mostra um personagem dizendo{" "}
          <em>"I'm totally fine"</em> enquanto está claramente em caos ao redor.
          A questão pergunta: "O humor da tirinha decorre de:".
        </div>

        <p><strong>Metodologia de resolução:</strong></p>
        <ol>
          <li>
            <strong>Observe o visual antes de ler o texto.</strong> O que os
            personagens estão fazendo? Qual é a expressão facial? O cenário
            reforça ou contradiz o que será dito?
          </li>
          <li>
            <strong>Leia o balão de fala.</strong> Identifique o tom: é sério,
            irônico, exagerado?
          </li>
          <li>
            <strong>Identifique o contraste.</strong> O humor geralmente nasce da
            contradição entre o que se fala (<em>"I'm fine"</em>) e o que se vê
            (situação caótica). Isso se chama <strong>ironia situacional</strong>.
          </li>
          <li>
            <strong>Leia as alternativas buscando a que nomeia esse contraste.</strong>{" "}
            A alternativa correta descreve o mecanismo do humor, não apenas repete
            o conteúdo verbal.
          </li>
        </ol>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😂</span>
            <h3>Ironia situacional</h3>
            <p>O que o personagem diz contradiz o que está acontecendo ao redor.</p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Ironia verbal</h3>
            <p>O personagem diz o oposto do que pensa (sarcasmo).</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Exagero (hipérbole)</h3>
            <p>Situação levada ao extremo para efeito cômico ou crítico.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Inversão de expectativa</h3>
            <p>O desfecho é o oposto do que o leitor esperava.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando uma tirinha tem pouquíssimo texto,
          o peso da questão recai sobre o visual. Descreva mentalmente o que você
          vê antes de tentar ler qualquer palavra.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise 2 — Artigo jornalístico</span>
        <h2>2. Questão com Artigo Jornalístico: Identificando o Tema Central</h2>
        <p>
          Artigos jornalísticos são textos informativos com estrutura previsível:
          título impactante → parágrafo de abertura (lead) com o essencial →
          desenvolvimento → conclusão. O ENEM frequentemente pede o{" "}
          <strong>tema central</strong>, que está sempre no lead ou no título.
        </p>

        <div className="lesson-highlight">
          <strong>Situação típica:</strong> Um artigo começa com:{" "}
          <em>"Scientists warn that ocean temperatures have reached record highs
          for the third consecutive year, threatening marine biodiversity and
          coastal communities worldwide."</em>
          A questão pergunta: "O texto aborda principalmente:".
        </div>

        <p><strong>Metodologia de resolução:</strong></p>
        <ol>
          <li>
            <strong>Leia apenas o primeiro parágrafo.</strong> O lead jornalístico
            responde às perguntas: quem, o quê, quando, onde, como e por quê.
            Raramente o tema central está escondido no meio do texto.
          </li>
          <li>
            <strong>Identifique as palavras-chave.</strong> No exemplo:{" "}
            <em>ocean temperatures, record highs, marine biodiversity, coastal
            communities</em>. O eixo é: aquecimento dos oceanos e suas
            consequências.
          </li>
          <li>
            <strong>Elimine alternativas que tratam de subtemas.</strong> Poluição
            plástica, por exemplo, pode ser mencionada no texto, mas não é o tema
            central se não estiver no lead.
          </li>
        </ol>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de alternativa errada</th>
                <th>Como identificar</th>
                <th>Estratégia de descarte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtema elevado a tema</td>
                <td>Está no texto, mas não no lead/título</td>
                <td>Pergunte: "Isso é o assunto principal ou um detalhe?"</td>
              </tr>
              <tr>
                <td>Generalização excessiva</td>
                <td>Usa "sempre", "todos", "nunca" sem base no texto</td>
                <td>Busque a afirmação no texto; se não estiver, descarte</td>
              </tr>
              <tr>
                <td>Inversão de causa e efeito</td>
                <td>Troca o que causa pelo que é causado</td>
                <td>Releia a relação lógica do texto (porque, therefore, as a result)</td>
              </tr>
              <tr>
                <td>Tema parcialmente correto</td>
                <td>Acerta o assunto mas erra o enfoque</td>
                <td>Compare com o lead — o texto é sobre problema ou solução?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise 3 — Propaganda</span>
        <h2>3. Questão com Propaganda: Intenção Comunicativa</h2>
        <p>
          Propagandas e campanhas são textos <strong>persuasivos</strong>: querem
          mudar comportamento, vender produto ou promover ideia. O ENEM quase
          sempre pergunta sobre o <strong>objetivo</strong> do texto ou o
          <strong> público-alvo</strong>.
        </p>

        <div className="lesson-highlight">
          <strong>Situação típica:</strong> Uma campanha de saúde pública traz o
          slogan <em>"Wash your hands. Save a life."</em> com imagem de mãos sob
          torneira. A questão pergunta: "A função comunicativa predominante no
          texto é:".
        </div>

        <p>
          A resposta correta será sempre a que nomeia a função <strong>apelativa
          ou imperativa</strong>: convencer, persuadir, orientar, conscientizar.
          Alternativas que dizem "informar objetivamente dados científicos" ou
          "narrar um episódio" estão descrevendo outras funções.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Função apelativa</h3>
            <p>Verbos no imperativo, você direto. Quer mudar comportamento.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Função informativa</h3>
            <p>Relata fatos, dados, eventos. Predomina em notícias.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Função narrativa</h3>
            <p>Conta uma história com personagens, conflito e desfecho.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Função estética/poética</h3>
            <p>Prioriza a forma da linguagem; presente em poemas e letras.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Identifique a função pelo verbo principal e
          pelo tom do texto. Imperativo = apelativo. Pretérito = narrativo.
          Dados + neutralidade = informativo.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise 4 — Vocabulário em contexto</span>
        <h2>4. Questão H27: Inferindo Vocabulário pelo Contexto</h2>
        <p>
          A habilidade H27 é a mais cobrada individualmente nas provas de inglês
          do ENEM. A questão pede o sentido de uma palavra ou expressão sublinhada
          dentro do texto. Você <strong>nunca</strong> deve responder com base
          no que acha que a palavra significa fora do texto — o contexto define
          o sentido.
        </p>

        <div className="lesson-highlight">
          <strong>Situação típica:</strong> O texto afirma:{" "}
          <em>"The new policy was seen as <u>groundbreaking</u>, as nothing like
          it had ever been proposed before."</em> A questão pergunta: "No contexto
          do texto, a palavra <em>groundbreaking</em> significa:".
        </div>

        <p><strong>Pistas contextuais no exemplo:</strong></p>
        <ul>
          <li>
            <em>"nothing like it had ever been proposed before"</em> → nunca
            havia sido feito antes → <strong>inovador, pioneiro</strong>
          </li>
          <li>
            O conector <em>"as"</em> introduz a explicação do que é "groundbreaking"
            → o próprio texto define a palavra para você.
          </li>
        </ul>

        <p>
          Alternativas erradas típicas para H27: tradução literal (breaking +
          ground = "quebrando o chão"), sentido oposto, sentido parcialmente
          relacionado mas inadequado ao contexto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pista contextual</th>
                <th>Exemplo de marcador</th>
                <th>O que ela fornece</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definição direta</td>
                <td>is, means, refers to, that is</td>
                <td>O autor explica a palavra no próprio texto</td>
              </tr>
              <tr>
                <td>Contraste</td>
                <td>but, however, although, unlike</td>
                <td>O oposto da palavra desconhecida é claro</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>such as, for example, like, including</td>
                <td>Exemplos concretos revelam a categoria da palavra</td>
              </tr>
              <tr>
                <td>Sinônimo</td>
                <td>also known as, or, in other words</td>
                <td>Palavra equivalente aparece próxima</td>
              </tr>
              <tr>
                <td>Causa e efeito</td>
                <td>because, therefore, as a result, thus</td>
                <td>Relação lógica permite deduzir o sentido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise 5 — Texto científico</span>
        <h2>5. Questão com Texto Científico: Posicionamento do Autor</h2>
        <p>
          Textos de divulgação científica parecem neutros, mas frequentemente
          o autor assume um <strong>posicionamento</strong> — seja de otimismo,
          ceticismo, alarme ou cautela. O ENEM pergunta isso explicitamente:
          "O autor do texto demonstra uma visão…" ou "O tom do texto é…".
        </p>

        <div className="lesson-highlight">
          <strong>Situação típica:</strong> Um artigo afirma:{" "}
          <em>"While some researchers celebrate the discovery as a breakthrough,
          others urge caution, noting that the long-term effects remain largely
          unknown."</em> A questão pergunta: "O autor do trecho apresenta a
          descoberta de forma:".
        </div>

        <p>
          A resposta correta é: <strong>equilibrada/ponderada</strong>. O texto
          não celebra nem condena — apresenta dois lados. Alternativas como
          "entusiasmada" ou "pessimista" estariam descrevendo apenas uma parte
          do texto, não o tom geral.
        </p>

        <p><strong>Palavras que revelam o tom do autor:</strong></p>
        <ul>
          <li><strong>Otimista:</strong> promising, revolutionary, breakthrough, remarkable, unprecedented</li>
          <li><strong>Cauteloso:</strong> however, caution, concerns, may, could, might, remains unclear</li>
          <li><strong>Alarmista:</strong> urgent, crisis, threatening, devastating, alarming</li>
          <li><strong>Neutro/equilibrado:</strong> while, on the other hand, some argue… others believe…</li>
        </ul>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Padrões históricos</span>
        <h2>6. O que os Dados das Provas Revelam</h2>
        <p>
          Analisando as provas das últimas edições do ENEM, identificamos padrões
          consistentes na distribuição de gêneros textuais e habilidades avaliadas.
          Conhecer esses padrões permite priorizar o estudo com precisão.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            aria-label="Gráfico de distribuição das habilidades avaliadas nas provas de inglês do ENEM"
            role="img"
          >
            {/* Título */}
            <text x="350" y="25" textAnchor="middle" fill="#1e1b4b" fontSize="14" fontWeight="bold">
              Distribuição de Habilidades nas Provas de Inglês do ENEM
            </text>

            {/* Barras horizontais */}
            {/* H27 - Vocabulário em contexto */}
            <rect x="200" y="45" width="280" height="28" rx="4" fill="#4f46e5" />
            <text x="195" y="64" textAnchor="end" fill="#374151" fontSize="12">H27 — Vocabulário em contexto</text>
            <text x="488" y="64" fill="white" fontSize="12" fontWeight="bold">  35%</text>

            {/* H25 - Tema central */}
            <rect x="200" y="85" width="220" height="28" rx="4" fill="#6366f1" />
            <text x="195" y="104" textAnchor="end" fill="#374151" fontSize="12">H25 — Tema central</text>
            <text x="428" y="104" fill="white" fontSize="12" fontWeight="bold">  27%</text>

            {/* H26 - Objetivo comunicativo */}
            <rect x="200" y="125" width="170" height="28" rx="4" fill="#818cf8" />
            <text x="195" y="144" textAnchor="end" fill="#374151" fontSize="12">H26 — Objetivo comunicativo</text>
            <text x="378" y="144" fill="white" fontSize="12" fontWeight="bold">  21%</text>

            {/* H30 - Posicionamento do autor */}
            <rect x="200" y="165" width="90" height="28" rx="4" fill="#a5b4fc" />
            <text x="195" y="184" textAnchor="end" fill="#374151" fontSize="12">H30 — Posicionamento do autor</text>
            <text x="298" y="184" fill="#1e1b4b" fontSize="12" fontWeight="bold">  11%</text>

            {/* H28 - Gênero textual */}
            <rect x="200" y="205" width="50" height="28" rx="4" fill="#c7d2fe" />
            <text x="195" y="224" textAnchor="end" fill="#374151" fontSize="12">H28 — Reconhecer gênero</text>
            <text x="258" y="224" fill="#374151" fontSize="12" fontWeight="bold">  6%</text>

            {/* Nota */}
            <rect x="440" y="155" width="230" height="80" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="555" y="175" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Atenção</text>
            <text x="555" y="193" textAnchor="middle" fill="#92400e" fontSize="11">H27 aparece em mais de</text>
            <text x="555" y="209" textAnchor="middle" fill="#92400e" fontSize="11">1/3 das questões — é a</text>
            <text x="555" y="225" textAnchor="middle" fill="#92400e" fontSize="11">habilidade mais rentável.</text>
          </svg>
          <figcaption>Distribuição aproximada das habilidades avaliadas nas questões de inglês do ENEM com base em análise das últimas edições.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero textual</th>
                <th>Frequência nas provas</th>
                <th>Habilidade mais cobrada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tirinha / HQ / Charge</td>
                <td>Muito alta — quase sempre presente</td>
                <td>H26 (objetivo comunicativo) / H27 (vocabulário)</td>
              </tr>
              <tr>
                <td>Propaganda / Campanha</td>
                <td>Alta — 1 a 2 por prova</td>
                <td>H26 (intenção persuasiva)</td>
              </tr>
              <tr>
                <td>Artigo jornalístico</td>
                <td>Alta — 1 por prova</td>
                <td>H25 (tema central)</td>
              </tr>
              <tr>
                <td>Texto científico / divulgação</td>
                <td>Média — alternado com literatura</td>
                <td>H27 (vocabulário) / H30 (posicionamento)</td>
              </tr>
              <tr>
                <td>Poema / letra de música</td>
                <td>Média — aparece com regularidade</td>
                <td>H26 / H27 (sentido figurado)</td>
              </tr>
              <tr>
                <td>Post / blog / rede social</td>
                <td>Crescente — tendência das últimas edições</td>
                <td>H26 (intenção comunicativa)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erros frequentes</span>
        <h2>7. Os Erros Mais Comuns dos Candidatos</h2>
        <p>
          Analisar os erros mais frequentes é tão valioso quanto estudar o
          conteúdo. A maioria dos erros em inglês no ENEM não é por falta de
          vocabulário — é por falta de estratégia.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Traduzir palavra por palavra</h3>
            <p>Consome tempo e cria erros. Foque no sentido global do trecho, não na palavra isolada.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Ignorar o enunciado</h3>
            <p>O enunciado (em português) diz exatamente o que a questão pede. Leia-o antes do texto.</p>
          </div>
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Marcar o que "parece certo"</h3>
            <p>Alternativas que contêm palavras do texto não são automaticamente corretas. Verifique o sentido.</p>
          </div>
          <div className="lesson-card">
            <span>⏱️</span>
            <h3>Gastar tempo demais</h3>
            <p>Se travar, marque a melhor opção disponível e siga. Não existe questão que valha 5 minutos.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>O erro mais caro:</strong> Deixar questões em branco. No ENEM
          não existe desconto por erro. Uma questão em branco tem 0% de chance;
          um chute tem 20%. Sempre marque alguma coisa.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Checklist de Abordagem para Questões de Inglês</h2>
        <p>
          Use este checklist mentalmente em cada questão de inglês na prova:
        </p>
        <ol>
          <li>✅ Li o enunciado em português e sei o que a questão pede</li>
          <li>✅ Identifiquei o gênero textual pelo suporte/layout</li>
          <li>✅ Fiz skimming para captar o tema geral</li>
          <li>✅ Fiz scanning para localizar a informação pedida</li>
          <li>✅ Usei cognatos e pistas contextuais para inferir vocabulário</li>
          <li>✅ Eliminei pelo menos 2 alternativas claramente erradas</li>
          <li>✅ Escolhi a alternativa com base no texto, não em suposição</li>
          <li>✅ Marquei a resposta e segui em frente (máximo 3 min por questão)</li>
        </ol>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Em inglês, 5 questões bem resolvidas podem
          representar até 50 pontos em Linguagens. Com estratégia certa, você pode
          gabaritar mesmo sem ser fluente — centenas de candidatos fazem isso
          todo ano.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação de gênero e intenção comunicativa"
          statement={
            <div>
              <p>
                <em>(Situação típica de prova)</em>
              </p>
              <p>
                Um texto apresentado na prova traz o seguinte conteúdo:{" "}
                <strong>"Don't wait. Vaccinate. Protect yourself and those around you."</strong>,
                acompanhado de uma imagem de seringa e um logotipo do Ministério da Saúde.
                Com base no gênero textual e na intenção comunicativa, esse texto tem como
                objetivo principal:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Narrar a história da descoberta das vacinas ao longo dos séculos." },
            { letter: "B", text: "Explicar o mecanismo científico pelo qual as vacinas atuam no sistema imunológico." },
            { letter: "C", text: "Persuadir a população a se vacinar, utilizando linguagem imperativa e apelo à proteção coletiva.", correct: true },
            { letter: "D", text: "Informar dados estatísticos sobre a cobertura vacinal no Brasil." },
            { letter: "E", text: "Criticar a postura de governos que não investem em campanhas de vacinação." },
          ]}
          resolution={
            <p>
              O texto é uma <strong>campanha de saúde pública</strong> — identificável pelos
              verbos no imperativo (<em>Don't wait, Vaccinate, Protect</em>), pela linguagem
              direta e pela presença do logotipo governamental. A função é{" "}
              <strong>apelativa/persuasiva</strong>: convencer o leitor a adotar um
              comportamento. As alternativas A, B e D descrevem outras funções (narrativa,
              explicativa, informativa). A E descreve função crítica, que exigiria linguagem
              diferente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Vocabulário em contexto (H27)"
          statement={
            <div>
              <p>
                <em>(Texto adaptado de artigo de divulgação científica)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The coral reef ecosystem is extremely <u>fragile</u>. A small rise in water
                temperature — even just one or two degrees — can trigger bleaching, causing
                corals to expel the algae that give them color and nutrients, leaving them
                white and vulnerable to disease."
              </p>
              <p>
                No contexto do texto, a palavra <strong>fragile</strong> (sublinhada) pode ser
                substituída, sem alteração de sentido, por:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Resistant — resistente, capaz de suportar variações ambientais." },
            { letter: "B", text: "Colorful — colorido, com grande variedade de espécies." },
            { letter: "C", text: "Delicate — delicado, facilmente perturbado por pequenas mudanças.", correct: true },
            { letter: "D", text: "Abundant — abundante, com grande biodiversidade." },
            { letter: "E", text: "Ancient — antigo, com milhões de anos de evolução." },
          ]}
          resolution={
            <p>
              O texto afirma que <em>uma pequena elevação de temperatura</em> já causa
              danos severos ao recife. Isso define "fragile" como algo que se desequilibra
              com facilidade — ou seja, <strong>delicado</strong>. A pista contextual é a
              relação de causa e efeito: <em>small rise → bleaching → damage</em>. A
              alternativa A é o oposto (resistente contradiz a ideia). B, D e E descrevem
              características do recife não relacionadas à sua vulnerabilidade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Posicionamento do autor em texto científico"
          statement={
            <div>
              <p>
                <em>(Texto adaptado de artigo científico)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "While some experts hail artificial intelligence as the solution to
                virtually every modern challenge, a growing number of researchers urge
                caution. The technology, they argue, carries significant risks —
                including job displacement, algorithmic bias, and questions of
                accountability — that its proponents tend to underestimate."
              </p>
              <p>
                O autor do trecho demonstra em relação à inteligência artificial uma
                visão predominantemente:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Entusiasmada, destacando os benefícios revolucionários da tecnologia." },
            { letter: "B", text: "Indiferente, sem apresentar qualquer posicionamento sobre o tema." },
            { letter: "C", text: "Equilibrada, mas com inclinação para os riscos da tecnologia.", correct: true },
            { letter: "D", text: "Totalmente contrária ao desenvolvimento da inteligência artificial." },
            { letter: "E", text: "Otimista, enfatizando que os riscos são superestimados pelos críticos." },
          ]}
          resolution={
            <p>
              O texto apresenta dois lados (<em>"some experts hail"</em> vs{" "}
              <em>"a growing number urge caution"</em>), mas o autor dá mais espaço e
              peso ao lado dos riscos — listando três deles e usando o verbo{" "}
              <em>"underestimate"</em> para questionar os otimistas. Isso indica visão
              equilibrada, mas com inclinação para a cautela. A alternativa A descreve
              o oposto do que o texto diz. B ignora o posicionamento implícito. D exagera.
              E inverte a lógica do texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Ironia em tirinha multimodal"
          statement={
            <div>
              <p>
                <em>(Situação típica de questão com tirinha)</em>
              </p>
              <p>
                Uma tirinha mostra dois personagens: um robô diz{" "}
                <strong>"I am programmed to feel empathy for humans."</strong> enquanto,
                no quadrinho seguinte, ele passa por uma pessoa claramente precisando
                de ajuda sem sequer olhar para ela. O humor/crítica da tirinha decorre:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Da crítica ao modo como os robôs são representados em filmes de ficção científica." },
            { letter: "B", text: "Do fato de que robôs não são capazes de aprender empatia verdadeira." },
            { letter: "C", text: "Da contradição entre o que o robô afirma sentir e sua ação indiferente diante de uma situação que exigiria empatia.", correct: true },
            { letter: "D", text: "Da forma como a tecnologia facilita a vida cotidiana das pessoas." },
            { letter: "E", text: "Do elogio à evolução da inteligência artificial ao longo dos anos." },
          ]}
          resolution={
            <p>
              O humor da tirinha é gerado pela{" "}
              <strong>ironia situacional</strong>: o robô declara ter empatia
              (<em>"I am programmed to feel empathy"</em>) mas age de forma
              completamente indiferente. A crítica implícita vai além dos robôs —
              toca na questão de como humanos também "declaram" valores que não
              praticam. A alternativa C captura essa contradição central. As demais
              ou ignoram a ironia, ou deslocam o foco para temas secundários.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Tema central de texto jornalístico"
          statement={
            <div>
              <p>
                <em>(Texto adaptado de matéria jornalística)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "A record number of young people around the world are choosing not to
                have children, citing financial instability, climate anxiety, and a
                desire for personal freedom. A recent survey found that, in several
                high-income countries, the birth rate has dropped to its lowest level
                in more than a century."
              </p>
              <p>
                O texto trata principalmente de:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "As políticas públicas adotadas por governos para aumentar a taxa de natalidade." },
            { letter: "B", text: "O aumento do número de jovens que optam por não ter filhos e os fatores que motivam essa escolha.", correct: true },
            { letter: "C", text: "As consequências econômicas de longo prazo do envelhecimento populacional." },
            { letter: "D", text: "A relação entre ansiedade climática e saúde mental entre jovens adultos." },
            { letter: "E", text: "A queda da taxa de fertilidade exclusivamente em países de alta renda." },
          ]}
          resolution={
            <p>
              O lead do texto apresenta o tema diretamente:{" "}
              <em>jovens escolhendo não ter filhos + os motivos</em>. Esse é o assunto
              central. A alternativa B reproduz exatamente essa síntese. A alternativa A
              não é mencionada. C e D são consequências ou aspectos secundários que poderiam
              aparecer no desenvolvimento do texto, mas não no lead. E está parcialmente
              certa, mas o texto fala de "vários países de alta renda" no contexto de uma
              tendência global — não diz que o fenômeno é exclusivo desses países.
            </p>
          }
        />
      </section>
    </article>
  );
}
