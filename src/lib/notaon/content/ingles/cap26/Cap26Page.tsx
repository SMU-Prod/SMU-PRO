"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 26</span>
          <h1>Notícias, reportagens e artigos jornalísticos</h1>
          <p>
            Textos jornalísticos em inglês estão entre os mais frequentes nas
            provas de língua estrangeira do ENEM. Entender a estrutura de uma
            notícia, reconhecer a diferença entre fato e opinião, e identificar
            o vocabulário jornalístico recorrente são habilidades que transformam
            esses textos de obstáculos em fontes seguras de pontos.
          </p>
          <p>
            Neste capítulo você vai aprender a estrutura da pirâmide invertida,
            os gêneros do jornalismo em inglês, as marcas linguísticas que
            distinguem fato de opinião, e o vocabulário mais cobrado pelo ENEM
            em textos jornalísticos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>1. A Pirâmide Invertida — Estrutura da Notícia em Inglês</h2>
        <p>
          A notícia jornalística em inglês segue a lógica da{" "}
          <strong>pirâmide invertida</strong>: a informação mais importante vem
          primeiro e os detalhes menos essenciais vêm ao final. Isso é o oposto
          de uma narrativa cronológica — em vez de guardar o climax para o fim,
          o jornalismo coloca o essencial logo no início.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Headline</h3>
            <p>Título da notícia. Resume o fato principal em poucas palavras. O ENEM frequentemente pergunta sobre o tema a partir da manchete.</p>
          </div>
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Lead</h3>
            <p>Primeiro parágrafo. Responde quem, o quê, quando, onde e por quê — as 5 perguntas essenciais do jornalismo.</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Body</h3>
            <p>Desenvolvimento com detalhes, citações, contexto e informações secundárias, em ordem decrescente de importância.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Quotes</h3>
            <p>Citações de fontes (especialistas, testemunhas, autoridades) usadas para dar credibilidade à notícia.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Estratégia ENEM:</strong> Leia o headline e o lead. Eles já
          respondem a maior parte das perguntas sobre tema, ideia principal e objetivo
          comunicativo — sem precisar ler o texto inteiro.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros jornalísticos</span>
        <h2>2. Diferença Entre os Gêneros do Jornalismo em Inglês</h2>
        <p>
          O ENEM usa diferentes gêneros jornalísticos, e cada um tem uma
          <strong> função comunicativa</strong> distinta. Confundir esses gêneros
          é uma das pegadinhas mais comuns — a pergunta "Qual é a função do texto?"
          depende de identificar corretamente o gênero.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero (inglês)</th>
                <th>Nome em português</th>
                <th>Função principal</th>
                <th>Marca linguística</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>News article</td>
                <td>Notícia</td>
                <td>Informar sobre fato recente</td>
                <td>Verbos no passado simples, linguagem objetiva</td>
              </tr>
              <tr>
                <td>Feature / Report</td>
                <td>Reportagem</td>
                <td>Aprofundar um tema com contexto e análise</td>
                <td>Mais longa, múltiplas fontes, narrativa mais elaborada</td>
              </tr>
              <tr>
                <td>Opinion / Column</td>
                <td>Artigo de opinião / Coluna</td>
                <td>Argumentar e defender ponto de vista</td>
                <td>Primeira pessoa possível, verbos de opinião (believe, argue)</td>
              </tr>
              <tr>
                <td>Editorial</td>
                <td>Editorial</td>
                <td>Expressar posição oficial do veículo</td>
                <td>Sem autor identificado, "we believe", "this newspaper argues"</td>
              </tr>
              <tr>
                <td>Letter to the editor</td>
                <td>Carta do leitor</td>
                <td>Manifestar opinião do leitor sobre pauta publicada</td>
                <td>Primeira pessoa, referência a matéria anterior</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem jornalística</span>
        <h2>3. Tempos Verbais no Jornalismo em Inglês</h2>
        <p>
          O uso dos tempos verbais no jornalismo em inglês segue convenções
          específicas que ajudam o leitor a entender se o fato aconteceu,
          está acontecendo ou é uma declaração de fonte.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo verbal</th>
                <th>Uso no jornalismo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simple Past</td>
                <td>Narrar eventos já ocorridos (o mais comum em notícias)</td>
                <td><em>Scientists discovered a new species.</em></td>
              </tr>
              <tr>
                <td>Present Perfect</td>
                <td>Fato recente com relevância atual</td>
                <td><em>The government has announced new measures.</em></td>
              </tr>
              <tr>
                <td>Simple Present</td>
                <td>Headlines (manchetes) e fatos gerais permanentes</td>
                <td><em>Amazon fires threaten biodiversity.</em></td>
              </tr>
              <tr>
                <td>Present Continuous</td>
                <td>Situação em andamento no momento da publicação</td>
                <td><em>Negotiations are taking place in Geneva.</em></td>
              </tr>
              <tr>
                <td>Passive Voice</td>
                <td>Omitir o agente quando não se sabe ou não importa</td>
                <td><em>The decision was made by the committee.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Manchetes (headlines) em inglês frequentemente
          omitem artigos e auxiliares para economizar espaço:{" "}
          <em>"Government Signs Climate Deal"</em> em vez de{" "}
          <em>"The Government Has Signed a Climate Deal."</em> — ambas
          significam a mesma coisa.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fato x opinião</span>
        <h2>4. Como Identificar Fato, Opinião e Citação Indireta</h2>
        <p>
          Uma das habilidades mais cobradas pelo ENEM em textos jornalísticos é
          distinguir o que é <strong>fato verificável</strong>, o que é{" "}
          <strong>opinião</strong> (do autor ou de uma fonte) e o que é uma
          <strong> citação indireta</strong> (alguém disse algo, mas não é
          necessariamente verdade).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Fato</h3>
            <p>Informação verificável, objetiva. Verbos: <em>happened, occurred, increased, fell, discovered.</em></p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Opinião</h3>
            <p>Julgamento subjetivo. Verbos: <em>believe, think, argue, suggest, seem, appear.</em></p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Citação indireta</h3>
            <p>O texto relata o que alguém disse, sem confirmar. Marcadores: <em>said, claimed, according to, stated.</em></p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Hedging</h3>
            <p>Linguagem cautelosa, incerteza. Palavras: <em>allegedly, reportedly, apparently, may, might.</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>5. Vocabulário Jornalístico Recorrente no ENEM</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            aria-label="Mapa de vocabulário jornalístico em inglês mais cobrado no ENEM"
            role="img"
          >
            {/* Título */}
            <rect x="200" y="10" width="300" height="38" rx="18" fill="#1e40af" />
            <text x="350" y="34" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">VOCABULÁRIO JORNALÍSTICO ENEM</text>

            {/* Categoria: Atribuição */}
            <rect x="20" y="70" width="190" height="180" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="115" y="92" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">ATRIBUIÇÃO</text>
            <text x="115" y="112" textAnchor="middle" fill="#1e40af" fontSize="11">according to</text>
            <text x="115" y="130" textAnchor="middle" fill="#1e40af" fontSize="11">report / reported</text>
            <text x="115" y="148" textAnchor="middle" fill="#1e40af" fontSize="11">claim / claimed</text>
            <text x="115" y="166" textAnchor="middle" fill="#1e40af" fontSize="11">stated / said</text>
            <text x="115" y="184" textAnchor="middle" fill="#1e40af" fontSize="11">sources say</text>
            <text x="115" y="202" textAnchor="middle" fill="#1e40af" fontSize="11">officials confirm</text>
            <text x="115" y="220" textAnchor="middle" fill="#1e40af" fontSize="11">experts suggest</text>

            {/* Categoria: Contraste/Ressalva */}
            <rect x="225" y="70" width="190" height="180" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="320" y="92" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">CONTRASTE/RESSALVA</text>
            <text x="320" y="112" textAnchor="middle" fill="#15803d" fontSize="11">however</text>
            <text x="320" y="130" textAnchor="middle" fill="#15803d" fontSize="11">despite</text>
            <text x="320" y="148" textAnchor="middle" fill="#15803d" fontSize="11">although / though</text>
            <text x="320" y="166" textAnchor="middle" fill="#15803d" fontSize="11">nevertheless</text>
            <text x="320" y="184" textAnchor="middle" fill="#15803d" fontSize="11">yet</text>
            <text x="320" y="202" textAnchor="middle" fill="#15803d" fontSize="11">on the other hand</text>
            <text x="320" y="220" textAnchor="middle" fill="#15803d" fontSize="11">in contrast</text>

            {/* Categoria: Incerteza */}
            <rect x="430" y="70" width="250" height="180" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="555" y="92" textAnchor="middle" fill="#713f12" fontSize="12" fontWeight="bold">INCERTEZA/HEDGING</text>
            <text x="555" y="112" textAnchor="middle" fill="#713f12" fontSize="11">allegedly</text>
            <text x="555" y="130" textAnchor="middle" fill="#713f12" fontSize="11">reportedly</text>
            <text x="555" y="148" textAnchor="middle" fill="#713f12" fontSize="11">apparently</text>
            <text x="555" y="166" textAnchor="middle" fill="#713f12" fontSize="11">may / might / could</text>
            <text x="555" y="184" textAnchor="middle" fill="#713f12" fontSize="11">is expected to</text>
            <text x="555" y="202" textAnchor="middle" fill="#713f12" fontSize="11">is believed to</text>
            <text x="555" y="220" textAnchor="middle" fill="#713f12" fontSize="11">it is unclear whether</text>

            {/* Linha do título para categorias */}
            <line x1="350" y1="48" x2="115" y2="70" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="350" y1="48" x2="320" y2="70" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="350" y1="48" x2="555" y2="70" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4" />
          </svg>
          <figcaption>Vocabulário jornalístico em inglês mais frequente nas provas do ENEM, organizado por função: atribuição de declarações, marcadores de contraste e linguagem de incerteza (hedging).</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica de leitura</span>
        <h2>6. Skimming em Notícias — Leitura Eficiente para o ENEM</h2>
        <p>
          No ENEM, o candidato não tem tempo para ler textos jornalísticos do
          início ao fim. A técnica de <em>skimming</em> — leitura rápida para
          captar a essência — é a abordagem correta para notícias.
        </p>
        <ol>
          <li>
            <strong>Leia o headline.</strong> A manchete resume o fato principal.
            Em notícias do ENEM, o headline frequentemente já responde à pergunta
            "Qual é o tema do texto?".
          </li>
          <li>
            <strong>Leia o lead (primeiro parágrafo).</strong> Ele responde às
            5 perguntas essenciais: quem (<em>who</em>), o quê (<em>what</em>),
            quando (<em>when</em>), onde (<em>where</em>), por quê (<em>why</em>).
          </li>
          <li>
            <strong>Identifique palavras-chave no corpo.</strong> Nomes próprios,
            números, cognatos e conectores indicam onde estão as informações importantes.
          </li>
          <li>
            <strong>Leia o último parágrafo.</strong> Em reportagens, o fechamento
            frequentemente retoma a tese principal ou traz uma perspectiva final.
          </li>
        </ol>
        <div className="lesson-highlight">
          <strong>Tempo médio no ENEM:</strong> Dedique no máximo 2 minutos para
          ler um texto jornalístico antes de responder. Se o enunciado pede
          a ideia principal, o headline e o lead já são suficientes.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">As 5 perguntas</span>
        <h2>7. O Lead e as 5 Perguntas Essenciais</h2>
        <p>
          O <em>lead</em> de uma notícia é o parágrafo mais importante. Jornalistas
          treinados para escrever em inglês respondem, no lead, às 5 perguntas
          básicas da cobertura jornalística. Saber identificá-las permite
          responder perguntas do ENEM sobre o assunto do texto com grande precisão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pergunta (inglês)</th>
                <th>O que responde</th>
                <th>Exemplo em uma notícia sobre ciência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Who?</strong></td>
                <td>O sujeito principal da notícia</td>
                <td><em>Scientists at Harvard University…</em></td>
              </tr>
              <tr>
                <td><strong>What?</strong></td>
                <td>O fato que aconteceu</td>
                <td><em>…discovered a potential vaccine…</em></td>
              </tr>
              <tr>
                <td><strong>When?</strong></td>
                <td>Quando aconteceu</td>
                <td><em>…on Tuesday…</em></td>
              </tr>
              <tr>
                <td><strong>Where?</strong></td>
                <td>Onde aconteceu</td>
                <td><em>…in Cambridge, Massachusetts.</em></td>
              </tr>
              <tr>
                <td><strong>Why?</strong> / <strong>How?</strong></td>
                <td>A causa ou o modo</td>
                <td><em>The breakthrough came after 10 years of research.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pegadinhas</span>
        <h2>8. O Que o ENEM Mais Cobra em Textos Jornalísticos</h2>
        <p>
          Com base nas provas anteriores, os textos jornalísticos no ENEM em
          inglês costumam gerar perguntas sobre:
        </p>
        <ul>
          <li>
            <strong>Tema/assunto principal</strong> — frequentemente respondido
            pelo headline e lead.
          </li>
          <li>
            <strong>Objetivo comunicativo</strong> — informar, criticar, alertar?
            Textos jornalísticos são predominantemente informativos, mas editoriais
            e colunas são opinativos.
          </li>
          <li>
            <strong>Posição do autor ou da fonte</strong> — o que o autor
            defende? O que a fonte citada afirma?
          </li>
          <li>
            <strong>Inferência sobre fato específico</strong> — com base em
            informação do texto, o que se pode concluir sobre X?
          </li>
          <li>
            <strong>Vocabulário em contexto</strong> — o que a palavra/expressão
            destacada significa neste contexto?
          </li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando o enunciado perguntar sobre a
          "posição do autor", verifique se o texto é uma notícia (objetiva —
          o autor não tem posição pessoal explícita) ou um artigo de opinião
          (subjetivo — o autor defende um ponto de vista). Essa distinção
          elimina alternativas erradas com facilidade.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Estrutura da notícia"
          statement={
            <p>
              Em uma notícia em inglês publicada no ENEM, o primeiro parágrafo
              afirma: <em>"Brazilian scientists announced Monday the discovery of
              a new antibiotic compound in the Amazon rainforest that could help
              fight drug-resistant bacteria."</em> Esse parágrafo é o{" "}
              <em>lead</em> da notícia. Qual das seguintes informações NÃO está
              presente nesse lead?
            </p>
          }
          options={[
            { letter: "A", text: "Quem fez a descoberta (Brazilian scientists)." },
            { letter: "B", text: "O que foi descoberto (a new antibiotic compound)." },
            { letter: "C", text: "Quando foi anunciado (Monday)." },
            { letter: "D", text: "Onde foi encontrado (in the Amazon rainforest)." },
            { letter: "E", text: "Quanto custa o novo composto antibiótico.", correct: true },
          ]}
          resolution={
            <p>
              O lead responde às 5 perguntas básicas do jornalismo: quem
              (cientistas brasileiros), o quê (novo composto antibiótico), quando
              (segunda-feira), onde (Amazônia) e por quê/como (pode combater
              bactérias resistentes). O preço do composto — alternativa E — não
              é mencionado em nenhum momento. Esse tipo de pergunta testa se
              o candidato distingue o que está no texto do que não está.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Vocabulário de atribuição"
          statement={
            <p>
              Em uma notícia em inglês, o jornalista escreve:{" "}
              <em>"The new policy will reduce pollution levels, according to
              government officials. However, environmental groups claim the
              measures are insufficient."</em> Qual das interpretações abaixo
              é a mais adequada para essa passagem?
            </p>
          }
          options={[
            { letter: "A", text: "O texto afirma como fato verificado que a política vai reduzir a poluição." },
            { letter: "B", text: "O texto apresenta a posição do governo como fato e a dos grupos ambientais como falsa." },
            { letter: "C", text: "O texto atribui a afirmação sobre redução de poluição ao governo e a contestação a grupos ambientais, sem confirmar qual das duas está correta.", correct: true },
            { letter: "D", text: "O autor do texto concorda com os grupos ambientais que as medidas são insuficientes." },
            { letter: "E", text: "O texto conclui que a política ambiental será bem-sucedida." },
          ]}
          resolution={
            <p>
              As palavras-chave são <em>according to</em> (atribuição ao governo)
              e <em>claim</em> (atribuição aos grupos ambientais — com tom mais
              cético que <em>say</em>). O conector <em>however</em> indica contraste
              entre as duas posições. O autor não confirma nem nega nenhuma das
              afirmações — ele apenas as relata atribuídas às respectivas fontes.
              Isso é linguagem jornalística objetiva. A alternativa C é a única
              que reflete corretamente essa neutralidade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Fato x opinião em texto jornalístico"
          statement={
            <p>
              Leia o seguinte trecho de um artigo de opinião publicado em um
              jornal americano:{" "}
              <em>"The government's decision to cut education funding is not only
              shortsighted but also deeply irresponsible. Data shows a 15%
              reduction in the budget. We believe this will have devastating
              consequences for the next generation."</em> Qual parte do trecho
              é um <strong>fato verificável</strong>?
            </p>
          }
          options={[
            { letter: "A", text: "A afirmação de que a decisão é 'shortsighted' (imprudente)." },
            { letter: "B", text: "A afirmação de que a decisão é 'deeply irresponsible' (profundamente irresponsável)." },
            { letter: "C", text: "A afirmação de que haverá consequências devastadoras para a próxima geração." },
            { letter: "D", text: "A informação de que houve redução de 15% no orçamento.", correct: true },
            { letter: "E", text: "A crença de que as consequências serão devastadoras." },
          ]}
          resolution={
            <p>
              O único fato verificável é a <strong>redução de 15% no orçamento</strong>
              — uma informação objetiva baseada em dados (<em>Data shows</em>).
              Todas as outras afirmações são opiniões ou julgamentos: <em>shortsighted</em>,
              <em>irresponsible</em> e <em>devastating consequences</em> são
              avaliações subjetivas. O marcador <em>We believe</em> sinaliza
              explicitamente que o que vem a seguir é opinião, não fato.
              A distinção fato/opinião é central em textos de artigo de opinião
              e editorial.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Manchete e tema"
          statement={
            <div>
              <p>
                <em>(Situação típica do ENEM)</em>
              </p>
              <p>
                A manchete de um artigo jornalístico em inglês diz:{" "}
                <strong>"Rising Sea Levels Threaten Coastal Cities Worldwide"</strong>
                (O aumento do nível do mar ameaça cidades costeiras ao redor do mundo).
                Com base apenas na manchete, qual é o tema principal do texto?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "A solução tecnológica para o problema do nível do mar." },
            { letter: "B", text: "Os impactos do aumento do nível do mar sobre populações costeiras urbanas.", correct: true },
            { letter: "C", text: "A história das cidades costeiras ao longo dos séculos." },
            { letter: "D", text: "A disputa política entre países sobre acordos climáticos." },
            { letter: "E", text: "As causas científicas detalhadas do aquecimento global." },
          ]}
          resolution={
            <p>
              A manchete contém três elementos-chave: <em>rising sea levels</em>
              (aumento do nível do mar), <em>threaten</em> (ameaçar — verbo de
              impacto negativo) e <em>coastal cities worldwide</em> (cidades
              costeiras ao redor do mundo). Juntos, esses elementos indicam que
              o texto trata dos <strong>impactos</strong> do fenômeno sobre
              populações urbanas costeiras. As demais alternativas introduzem
              elementos (soluções, história, política, causas detalhadas) que
              não estão presentes na manchete.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Objetivo comunicativo"
          statement={
            <div>
              <p>
                <em>(Texto adaptado de notícia jornalística)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "A new study published in the journal <em>Nature</em> suggests
                that regular physical exercise can reduce the risk of developing
                Alzheimer's disease by up to 40%. Researchers from three
                universities analyzed data from over 50,000 participants over
                a 20-year period. 'These findings reinforce the importance of
                an active lifestyle,' said lead researcher Dr. Maria Santos."
              </p>
              <p>O objetivo comunicativo principal desse texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Persuadir o leitor a praticar exercícios físicos todos os dias." },
            { letter: "B", text: "Criticar a falta de investimento em pesquisas sobre o Alzheimer." },
            { letter: "C", text: "Informar sobre os resultados de um estudo científico relacionando exercício e risco de Alzheimer.", correct: true },
            { letter: "D", text: "Explicar detalhadamente o funcionamento biológico do Alzheimer." },
            { letter: "E", text: "Narrar a trajetória de vida da pesquisadora Dr. Maria Santos." },
          ]}
          resolution={
            <p>
              O texto apresenta os elementos clássicos de uma{" "}
              <strong>notícia de divulgação de pesquisa</strong>: fonte (<em>Nature</em>),
              dado estatístico (40% de redução de risco), metodologia (50.000
              participantes, 20 anos), e citação do pesquisador-chefe. A função
              é <strong>informar</strong> sobre os resultados do estudo — não
              persuadir, criticar, explicar bioquímica ou narrar trajetórias.
              A citação da pesquisadora reforça os dados, não transforma o
              texto em artigo de opinião. Alternativa C.
            </p>
          }
        />
      </section>
    </article>
  );
}
