"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 27</span>
          <h1>Artigos científicos e textos de divulgação científica</h1>
          <p>
            Textos científicos em inglês aparecem com frequência crescente nas
            provas de inglês do ENEM. Eles parecem intimidantes à primeira vista,
            mas seguem uma estrutura previsível e utilizam um vocabulário
            recorrente que pode ser aprendido. Com a estratégia certa, esses
            textos se tornam uma das fontes mais acessíveis de pontos na prova.
          </p>
          <p>
            Neste capítulo você vai entender a diferença entre artigo científico
            original e texto de divulgação, aprender a linguagem de hedging
            (incerteza científica), dominar o vocabulário de alta frequência
            em ciência no ENEM e desenvolver estratégias de leitura específicas
            para textos científicos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de texto</span>
        <h2>1. Artigo Científico Original vs. Divulgação Científica</h2>
        <p>
          O ENEM utiliza quase sempre textos de <strong>divulgação científica</strong>
          — não artigos científicos originais. Entender essa diferença é fundamental
          para calibrar suas expectativas de vocabulário e complexidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Artigo científico original</th>
                <th>Divulgação científica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Público</td>
                <td>Especialistas na área</td>
                <td>Público geral, não especializado</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Altamente técnica, jargão específico</td>
                <td>Simplificada, com analogias e exemplos</td>
              </tr>
              <tr>
                <td>Estrutura</td>
                <td>Abstract, Introduction, Methods, Results, Discussion</td>
                <td>Intro narrativa → descoberta → implicação</td>
              </tr>
              <tr>
                <td>Exemplos no ENEM</td>
                <td>Raramente usado (muito técnico)</td>
                <td>BBC Science, Scientific American, National Geographic</td>
              </tr>
              <tr>
                <td>Objetivo</td>
                <td>Reportar pesquisa original para pares acadêmicos</td>
                <td>Tornar ciência acessível ao grande público</td>
              </tr>
              <tr>
                <td>Vocabulário técnico</td>
                <td>Denso, sem explicação</td>
                <td>Quando usado, vem acompanhado de explicação</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Implicação prática:</strong> No ENEM, termos técnicos em textos
          científicos quase sempre vêm acompanhados de uma explicação ou contexto
          que permite inferir o significado. Não entre em pânico com vocabulário
          desconhecido — o próprio texto fornece as pistas.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>2. Estrutura Típica da Divulgação Científica em Inglês</h2>
        <p>
          Textos de divulgação científica em inglês seguem uma estrutura
          narrativa bastante previsível. Reconhecer essa estrutura ajuda a
          antecipar onde estão as informações importantes.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Gancho inicial</h3>
            <p>Dado surpreendente, pergunta retórica ou situação do cotidiano que justifica a relevância da pesquisa.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Contexto da pesquisa</h3>
            <p>Quem fez, onde, quando, qual era o problema que motivou o estudo.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Descoberta / Resultados</h3>
            <p>O que foi encontrado — frequentemente com dados numéricos, porcentagens ou comparações.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Implicações</h3>
            <p>O que a descoberta significa para o mundo, a ciência ou a sociedade — parte mais aberta à interpretação.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem científica</span>
        <h2>3. Hedging — A Linguagem da Incerteza Científica</h2>
        <p>
          Uma das características mais importantes (e mais cobradas) da linguagem
          científica em inglês é o <strong><em>hedging</em></strong> — o uso de
          linguagem cautelosa para expressar que os resultados são provisórios,
          que a ciência não tem certeza absoluta ou que as conclusões precisam
          de mais evidências. Isso é honestidade científica, não fraqueza.
        </p>
        <p>
          O ENEM usa o hedging para testar se o candidato entende a diferença
          entre "a pesquisa provou definitivamente X" e "a pesquisa sugere que
          X pode ser o caso".
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de hedging</th>
                <th>Palavras/expressões</th>
                <th>Tradução aproximada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modais de incerteza</td>
                <td><em>may, might, could, should</em></td>
                <td>pode, poderia, deveria</td>
              </tr>
              <tr>
                <td>Verbos de sugestão</td>
                <td><em>suggest, indicate, appear, seem, imply</em></td>
                <td>sugere, indica, parece, implica</td>
              </tr>
              <tr>
                <td>Verbos de possibilidade</td>
                <td><em>tend to, are likely to, are expected to</em></td>
                <td>tendem a, provavelmente, são esperados que</td>
              </tr>
              <tr>
                <td>Advérbios de incerteza</td>
                <td><em>possibly, probably, perhaps, apparently</em></td>
                <td>possivelmente, provavelmente, talvez, aparentemente</td>
              </tr>
              <tr>
                <td>Aproximações</td>
                <td><em>about, approximately, around, nearly</em></td>
                <td>cerca de, aproximadamente, quase</td>
              </tr>
              <tr>
                <td>Atribuição a pesquisa</td>
                <td><em>the study suggests, researchers found, data indicate</em></td>
                <td>o estudo sugere, pesquisadores descobriram, dados indicam</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando uma questão perguntar sobre o que
          o texto afirma sobre determinada pesquisa, preste atenção ao hedging.
          Uma alternativa que diz "cientistas provaram definitivamente" é
          provavelmente errada se o texto usa <em>suggest</em> ou <em>may</em>.
        </div>
      </section>

      {/* ── SEÇÃO 4 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>4. Vocabulário Científico de Alta Frequência no ENEM</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            aria-label="Mapa de vocabulário científico em inglês mais cobrado no ENEM"
            role="img"
          >
            {/* Centro */}
            <ellipse cx="350" cy="150" rx="80" ry="45" fill="#1e40af" />
            <text x="350" y="143" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">VOCABULÁRIO</text>
            <text x="350" y="161" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CIENTÍFICO</text>

            {/* Pesquisa */}
            <rect x="20" y="20" width="160" height="110" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="100" y="42" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">PESQUISA</text>
            <text x="100" y="60" textAnchor="middle" fill="#1e40af" fontSize="11">research / study</text>
            <text x="100" y="76" textAnchor="middle" fill="#1e40af" fontSize="11">experiment / trial</text>
            <text x="100" y="92" textAnchor="middle" fill="#1e40af" fontSize="11">hypothesis / theory</text>
            <text x="100" y="108" textAnchor="middle" fill="#1e40af" fontSize="11">analysis / data</text>
            <line x1="180" y1="75" x2="270" y2="130" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4" />

            {/* Resultados */}
            <rect x="520" y="20" width="160" height="110" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="600" y="42" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">RESULTADOS</text>
            <text x="600" y="60" textAnchor="middle" fill="#065f46" fontSize="11">results / findings</text>
            <text x="600" y="76" textAnchor="middle" fill="#065f46" fontSize="11">evidence / proof</text>
            <text x="600" y="92" textAnchor="middle" fill="#065f46" fontSize="11">conclude / confirm</text>
            <text x="600" y="108" textAnchor="middle" fill="#065f46" fontSize="11">demonstrate / show</text>
            <line x1="520" y1="75" x2="430" y2="130" stroke="#059669" strokeWidth="1.5" strokeDasharray="4" />

            {/* Impacto */}
            <rect x="20" y="180" width="160" height="100" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="100" y="202" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">IMPACTO</text>
            <text x="100" y="220" textAnchor="middle" fill="#9d174d" fontSize="11">impact / effect</text>
            <text x="100" y="236" textAnchor="middle" fill="#9d174d" fontSize="11">significant / major</text>
            <text x="100" y="252" textAnchor="middle" fill="#9d174d" fontSize="11">breakthrough</text>
            <text x="100" y="268" textAnchor="middle" fill="#9d174d" fontSize="11">implication</text>
            <line x1="180" y1="230" x2="270" y2="175" stroke="#db2777" strokeWidth="1.5" strokeDasharray="4" />

            {/* Incerteza */}
            <rect x="520" y="180" width="160" height="100" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="600" y="202" textAnchor="middle" fill="#713f12" fontSize="12" fontWeight="bold">INCERTEZA</text>
            <text x="600" y="220" textAnchor="middle" fill="#713f12" fontSize="11">suggest / indicate</text>
            <text x="600" y="236" textAnchor="middle" fill="#713f12" fontSize="11">appear / seem</text>
            <text x="600" y="252" textAnchor="middle" fill="#713f12" fontSize="11">may / might / could</text>
            <text x="600" y="268" textAnchor="middle" fill="#713f12" fontSize="11">approximately</text>
            <line x1="520" y1="230" x2="430" y2="175" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4" />
          </svg>
          <figcaption>Mapa do vocabulário científico em inglês mais recorrente nas provas do ENEM, organizado por categoria semântica: pesquisa, resultados, impacto e linguagem de incerteza.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Citações e atribuição</span>
        <h2>5. Citações e Atribuição em Textos Científicos</h2>
        <p>
          Textos de divulgação científica em inglês frequentemente citam
          pesquisadores para dar autoridade às afirmações. O ENEM pode perguntar
          sobre <strong>quem afirma</strong> o quê, ou se uma afirmação é
          do texto como um todo ou de uma fonte específica.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Padrão de citação</th>
                <th>Exemplo</th>
                <th>O que indica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citação direta</td>
                <td><em>"This is a game-changer," said Dr. Smith.</em></td>
                <td>Palavras exatas do pesquisador, entre aspas</td>
              </tr>
              <tr>
                <td>Citação indireta</td>
                <td><em>The researcher said the results were promising.</em></td>
                <td>Sentido da fala do pesquisador, sem aspas</td>
              </tr>
              <tr>
                <td>Atribuição geral</td>
                <td><em>According to the study, sleep affects memory.</em></td>
                <td>A fonte é a pesquisa em si, não uma pessoa</td>
              </tr>
              <tr>
                <td>Voz passiva de atribuição</td>
                <td><em>It was found that exercise reduces stress.</em></td>
                <td>Pesquisadores não nomeados; foco nos resultados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> No ENEM, quando uma afirmação é atribuída a
          um pesquisador com verbos como <em>claim, suggest, argue</em>, isso não
          significa que o texto confirma essa afirmação como verdade absoluta.
          A atribuição é uma marca de jornalismo responsável.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos e dados</span>
        <h2>6. Interpretar Gráficos e Tabelas em Textos Científicos</h2>
        <p>
          Textos científicos no ENEM frequentemente vêm acompanhados de gráficos,
          tabelas ou infográficos com legendas em inglês. O candidato precisa
          relacionar os dados visuais com o texto verbal.
        </p>
        <ul>
          <li>
            <strong>Leia o título do gráfico primeiro.</strong> Ele define o
            que está sendo medido e em qual período.
          </li>
          <li>
            <strong>Identifique os eixos.</strong> Em inglês: <em>x-axis</em>
            (eixo horizontal, geralmente tempo ou categoria) e <em>y-axis</em>
            (eixo vertical, geralmente valor ou quantidade).
          </li>
          <li>
            <strong>Leia a legenda (<em>legend</em> ou <em>key</em>).</strong>
            Ela explica as cores, linhas ou símbolos usados.
          </li>
          <li>
            <strong>Identifique tendências.</strong> Aumentou (<em>increased,
            rose, grew</em>)? Diminuiu (<em>decreased, fell, dropped</em>)?
            Estabilizou (<em>remained stable, leveled off</em>)?
          </li>
          <li>
            <strong>Relacione com o texto.</strong> O gráfico confirma, ilustra
            ou contradiz o que o texto afirma?
          </li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Porcentagens em textos científicos em inglês
          são frequentemente cobradas. Preste atenção em: <em>doubled</em> (dobrou),
          <em>tripled</em> (triplicou), <em>by half</em> (pela metade),{" "}
          <em>tenfold</em> (dez vezes mais) — expressões que descrevem mudanças
          proporcionais sem usar o símbolo %.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de leitura</span>
        <h2>7. Como Abordar Textos Científicos no ENEM sem Entrar em Pânico</h2>
        <p>
          Muitos candidatos evitam questões com texto científico por acharem
          o vocabulário inacessível. Com a abordagem certa, esses textos
          se tornam relativamente previsíveis.
        </p>
        <ol>
          <li>
            <strong>Leia o enunciado da questão primeiro.</strong> Saber o
            que está sendo perguntado antes de ler o texto economiza tempo
            e direciona a leitura.
          </li>
          <li>
            <strong>Identifique cognatos imediatamente.</strong> Textos científicos
            têm alta densidade de cognatos com o português: <em>biological,
            chemical, environmental, cellular, molecular, genetic</em> — todos
            são transparentes.
          </li>
          <li>
            <strong>Não tente traduzir termos técnicos isolados.</strong>
            Use o contexto para inferir o sentido geral. O ENEM não cobra o
            significado preciso de jargão científico — cobra compreensão global.
          </li>
          <li>
            <strong>Identifique os verbos de hedging.</strong> Eles mostram o
            grau de certeza das afirmações — essencial para responder questões
            sobre o que o texto "afirma" ou "sugere".
          </li>
          <li>
            <strong>Procure a ideia central da pesquisa.</strong> Geralmente
            está no primeiro ou último parágrafo, ou na frase que segue os
            verbos <em>found, discovered, concluded, showed</em>.
          </li>
        </ol>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Por que o ENEM usa textos científicos</span>
        <h2>8. Textos Científicos no ENEM — Frequência e Relevância</h2>
        <p>
          O ENEM usa textos de divulgação científica em inglês por razões
          pedagógicas e práticas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Razão</th>
                <th>Explicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cidadania científica</td>
                <td>A BNCC valoriza a leitura crítica de informação científica como competência do século XXI</td>
              </tr>
              <tr>
                <td>Relevância global</td>
                <td>Grande parte da produção científica mundial é publicada em inglês — acesso a ela é competência real</td>
              </tr>
              <tr>
                <td>Previsibilidade de vocabulário</td>
                <td>Textos científicos têm vocabulário mais estável e menos coloquialismo — mais justo para avaliar leitura</td>
              </tr>
              <tr>
                <td>Cognatos</td>
                <td>Alta densidade de cognatos com o português reduz a barreira do vocabulário desconhecido</td>
              </tr>
              <tr>
                <td>Temas contemporâneos</td>
                <td>Meio ambiente, saúde, tecnologia — temas transversais alinhados à proposta interdisciplinar do ENEM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Vocabulário científico"
          statement={
            <p>
              Em um texto de divulgação científica publicado no ENEM, lê-se:{" "}
              <em>"The research, conducted over five years, found strong evidence
              linking air pollution to increased rates of respiratory disease."</em>
              Qual das afirmações abaixo está de acordo com o texto?
            </p>
          }
          options={[
            { letter: "A", text: "A pesquisa durou um ano e concluiu que doenças respiratórias causam poluição." },
            { letter: "B", text: "A pesquisa foi realizada durante cinco anos e encontrou evidências relacionando poluição do ar ao aumento de doenças respiratórias.", correct: true },
            { letter: "C", text: "O texto afirma que poluição do ar é a única causa de doenças respiratórias." },
            { letter: "D", text: "A pesquisa foi realizada em cinco países diferentes e não encontrou evidências conclusivas." },
            { letter: "E", text: "O texto sugere que doenças respiratórias podem causar poluição do ar em áreas urbanas." },
          ]}
          resolution={
            <p>
              A frase é direta: <em>conducted over five years</em> = conduzida
              durante cinco anos; <em>found strong evidence linking</em> = encontrou
              evidências fortes ligando; <em>air pollution to respiratory disease</em>
              = poluição do ar a doenças respiratórias. Não há menção a causação
              inversa, a cinco países ou a ausência de evidências. A alternativa B
              é a única fiel ao que o texto diz sem distorcer ou inverter.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Hedging científico"
          statement={
            <p>
              Um texto de divulgação científica afirma:{" "}
              <em>"Scientists suggest that a diet rich in omega-3 fatty acids
              may reduce the risk of depression. However, more research is
              needed to confirm these findings."</em> Com base nessa passagem,
              qual conclusão o texto permite tirar?
            </p>
          }
          options={[
            { letter: "A", text: "Está cientificamente provado que omega-3 elimina a depressão." },
            { letter: "B", text: "Cientistas rejeitam a ideia de que omega-3 tem algum efeito na depressão." },
            { letter: "C", text: "Os resultados são preliminares — há indícios de que omega-3 pode reduzir o risco de depressão, mas a conclusão ainda não é definitiva.", correct: true },
            { letter: "D", text: "O texto recomenda que todas as pessoas consumam omega-3 como tratamento para depressão." },
            { letter: "E", text: "Omega-3 é eficaz apenas para tipos específicos de depressão, segundo o texto." },
          ]}
          resolution={
            <p>
              Os marcadores de hedging são decisivos aqui: <em>suggest</em>
              (não afirma com certeza), <em>may reduce</em> (pode reduzir —
              não reduz definitivamente) e <em>more research is needed</em>
              (mais pesquisa é necessária — a conclusão não é definitiva).
              Esses três elementos juntos confirmam que estamos diante de
              resultados preliminares, não de prova científica estabelecida.
              A alternativa C captura exatamente esse nível de certeza.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Atribuição e citação"
          statement={
            <p>
              Em um texto científico, lê-se:{" "}
              <em>"The data clearly demonstrates a 30% increase in global
              temperatures over the last century. 'This is the most alarming
              finding of my career,' said Dr. Hansen. Critics, however, claim
              the methodology is flawed."</em> Com base nesse trecho, qual
              afirmação é correta?
            </p>
          }
          options={[
            { letter: "A", text: "O texto afirma como fato que a metodologia da pesquisa é falha." },
            { letter: "B", text: "Dr. Hansen afirma que os dados não são confiáveis." },
            { letter: "C", text: "O aumento de 30% em temperaturas globais é apresentado como dado verificável pela pesquisa, enquanto a opinião dos críticos sobre a metodologia é atribuída a eles, não confirmada pelo texto.", correct: true },
            { letter: "D", text: "O texto defende a posição dos críticos em detrimento da posição de Dr. Hansen." },
            { letter: "E", text: "Dr. Hansen e os críticos concordam sobre os resultados da pesquisa." },
          ]}
          resolution={
            <p>
              O trecho tem três camadas: (1) dado objetivo do texto —
              <em>data clearly demonstrates</em> — apresentado como fato verificado;
              (2) opinião de Dr. Hansen entre aspas diretas — é a visão
              <em>dele</em>, não do texto; (3) posição dos críticos introduzida
              por <em>claim</em> + <em>however</em> — contraste com os dados,
              atribuída aos críticos sem confirmação do texto. O texto não
              confirma nem a metodologia como falha nem como correta. A alternativa
              C é a única que respeita essas distinções.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Ideia central de texto científico"
          statement={
            <div>
              <p><em>(Texto adaptado de artigo de divulgação científica)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "A team of researchers from the University of São Paulo has
                discovered that a molecule found in açaí berries appears to
                slow the growth of cancer cells in laboratory conditions.
                The study, published in the journal <em>Cell Biology</em>,
                analyzed the effects of the compound on 12 types of cancer.
                While the results are promising, scientists caution that the
                findings are preliminary and that clinical trials in humans
                are still years away."
              </p>
              <p>A ideia central do texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "O açaí cura câncer e deve ser consumido diariamente como prevenção." },
            { letter: "B", text: "A Universidade de São Paulo é líder mundial em pesquisas sobre câncer." },
            { letter: "C", text: "Pesquisadores identificaram uma molécula no açaí que parece inibir células cancerígenas em laboratório, com resultados promissores mas ainda preliminares.", correct: true },
            { letter: "D", text: "Os ensaios clínicos em humanos já foram concluídos e os resultados são definitivos." },
            { letter: "E", text: "O açaí é eficaz apenas para um tipo específico de câncer." },
          ]}
          resolution={
            <p>
              A ideia central está nos verbos e nos hedges: <em>appears to slow</em>
              (parece desacelerar — não confirma), <em>in laboratory conditions</em>
              (em laboratório — não em humanos), <em>promising</em> (promissores),
              <em>preliminary</em> (preliminares) e <em>clinical trials... still
              years away</em> (testes clínicos ainda anos distantes). O texto
              relata uma descoberta real mas com cautela científica — é isso
              que a alternativa C expressa. A alternativa A é uma distorção grave:
              o texto não diz que açaí "cura câncer", e a A não menciona o caráter
              laboratorial e preliminar dos resultados.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Interpretação de dado científico"
          statement={
            <div>
              <p><em>(Situação típica do ENEM)</em></p>
              <p>
                Um texto afirma que o número de espécies de insetos extintos{" "}
                <em>"has nearly doubled in the past two decades"</em>. Essa
                expressão significa que:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O número de espécies extintas diminuiu pela metade nos últimos 20 anos." },
            { letter: "B", text: "O número de espécies extintas cresceu aproximadamente duas vezes em relação ao período de 20 anos atrás.", correct: true },
            { letter: "C", text: "O número de espécies extintas dobrou exatamente, sem variação." },
            { letter: "E", text: "O número de espécies extintas dobrou a cada dois anos." },
            { letter: "D", text: "O número de espécies extintas cresceu vinte vezes nos últimos dois anos." },
          ]}
          resolution={
            <p>
              A expressão tem três partes a decodificar: <em>nearly</em>
              (quase — não exatamente), <em>doubled</em> (dobrou — cresceu
              para o dobro) e <em>in the past two decades</em> (nas últimas
              duas décadas = últimos 20 anos). Portanto: o número cresceu
              aproximadamente o dobro ao longo de 20 anos. A alternativa B
              é a única que captura os três elementos corretamente — incluindo
              o <em>nearly</em> (aproximadamente). A alternativa C erra ao
              dizer "exatamente", ignorando o <em>nearly</em>.
            </p>
          }
        />
      </section>
    </article>
  );
}
