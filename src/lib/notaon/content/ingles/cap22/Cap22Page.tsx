"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 22</span>
          <h1>Identificação da Ideia Principal e Informações Implícitas</h1>
          <p>
            Saber separar o que é central do que é periférico em um texto é a habilidade mais
            cobrada nas questões de inglês do ENEM. Neste capítulo você aprenderá a localizar
            a ideia principal com precisão, distinguir detalhes de apoio, e — o passo mais
            sofisticado — interpretar o que o texto implica mas não afirma diretamente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Ideia Principal vs. Detalhes de Apoio</h2>
        <p>
          Todo texto bem construído possui uma <strong>ideia principal</strong> (main idea) e
          várias <strong>ideias de suporte</strong> (supporting details). A ideia principal é
          a mensagem central que o autor quer transmitir; os detalhes de apoio a explicam,
          exemplificam ou comprovam.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Ideia Principal (Main Idea)</h3>
            <p>
              Responde à pergunta "O que o texto quer dizer, no geral?". É mais ampla e pode
              ser um julgamento, uma tese ou uma conclusão. Pode estar explícita (na topic
              sentence) ou implícita (inferida pelo leitor).
            </p>
          </div>
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Detalhes de Apoio (Supporting Details)</h3>
            <p>
              São fatos, estatísticas, exemplos, anedotas, definições e citações que sustentam
              a ideia principal. Respondem a perguntas como "Por quê?", "Como?", "Quando?" ou
              "Por exemplo?". Individualmente, não sintetizam o texto.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Tópico (Topic)</h3>
            <p>
              Não confunda tópico com ideia principal. O tópico é o assunto geral ("climate
              change"), enquanto a ideia principal é o que o texto afirma sobre esse assunto
              ("Climate change is accelerating faster than scientists predicted").
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Tema vs. Tese</h3>
            <p>
              O tema é o campo temático; a tese é a posição defendida. Em textos argumentativos,
              a tese equivale à ideia principal. Em textos informativos, a ideia principal
              é a informação central, não necessariamente uma tomada de posição.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Pergunta-chave para identificar a ideia principal</h3>
          <p>
            Sempre se pergunte: <em>"Se eu tivesse que resumir este texto em uma frase, qual
            seria?"</em> A resposta deve incluir o tópico + o que o autor afirma sobre ele.
            Se a sua frase for muito específica (um exemplo), você identificou um detalhe.
            Se for muito vaga (só o tópico), você ainda não chegou à ideia principal.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Topic Sentence</span>
        <h2>2. A Topic Sentence: Onde Encontrar a Ideia Principal</h2>
        <p>
          Em textos em inglês, especialmente os de origem anglo-saxônica, a <strong>topic
          sentence</strong> (frase tópica) anuncia explicitamente a ideia principal do
          parágrafo — ou do texto inteiro, quando está no primeiro parágrafo. Ela é geralmente
          a <strong>primeira frase</strong> do parágrafo, mas pode aparecer no final como
          conclusão, ou até no meio, entre exemplos introdutórios.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama mostrando as posições possíveis da topic sentence num parágrafo">
            <defs>
              <marker id="arrowTC" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#4f46e5" />
              </marker>
            </defs>
            {/* Paragraph box */}
            <rect x="40" y="20" width="620" height="200" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            <text x="330" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Posições possíveis da Topic Sentence</text>
            {/* Position 1 */}
            <rect x="70" y="65" width="170" height="130" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <rect x="80" y="80" width="150" height="22" rx="4" fill="#7c3aed"/>
            <text x="155" y="95" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TOPIC SENTENCE</text>
            <rect x="80" y="108" width="150" height="12" rx="3" fill="#ddd6fe"/>
            <rect x="80" y="126" width="150" height="12" rx="3" fill="#ddd6fe"/>
            <rect x="80" y="144" width="150" height="12" rx="3" fill="#ddd6fe"/>
            <rect x="80" y="162" width="150" height="12" rx="3" fill="#ddd6fe"/>
            <text x="155" y="207" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="600">① Início (mais comum)</text>
            {/* Position 2 */}
            <rect x="265" y="65" width="170" height="130" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <rect x="275" y="80" width="150" height="12" rx="3" fill="#bbf7d0"/>
            <rect x="275" y="98" width="150" height="12" rx="3" fill="#bbf7d0"/>
            <rect x="275" y="116" width="150" height="22" rx="4" fill="#16a34a"/>
            <text x="350" y="131" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TOPIC SENTENCE</text>
            <rect x="275" y="144" width="150" height="12" rx="3" fill="#bbf7d0"/>
            <rect x="275" y="162" width="150" height="12" rx="3" fill="#bbf7d0"/>
            <text x="350" y="207" textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="600">② Meio (menos comum)</text>
            {/* Position 3 */}
            <rect x="460" y="65" width="170" height="130" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <rect x="470" y="80" width="150" height="12" rx="3" fill="#fef08a"/>
            <rect x="470" y="98" width="150" height="12" rx="3" fill="#fef08a"/>
            <rect x="470" y="116" width="150" height="12" rx="3" fill="#fef08a"/>
            <rect x="470" y="134" width="150" height="12" rx="3" fill="#fef08a"/>
            <rect x="470" y="152" width="150" height="22" rx="4" fill="#ca8a04"/>
            <text x="545" y="167" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TOPIC SENTENCE</text>
            <text x="545" y="207" textAnchor="middle" fontSize="11" fill="#ca8a04" fontWeight="600">③ Final (conclusão)</text>
          </svg>
          <figcaption>Posições da topic sentence no parágrafo: início (dedutivo), meio e final (indutivo)</figcaption>
        </figure>

        <p>Veja um exemplo concreto de parágrafo com topic sentence no início:</p>
        <blockquote style={{borderLeft: "4px solid #4f46e5", paddingLeft: "1rem", fontStyle: "italic", color: "#374151", margin: "1rem 0"}}>
          <p>
            <strong style={{color: "#4f46e5"}}>Social media has fundamentally changed the way people consume news.</strong>{" "}
            Instead of relying on traditional newspapers or television broadcasts,
            millions of users now receive breaking news through their social feeds.
            Platforms like X (formerly Twitter) and Instagram have become primary news
            sources for younger generations. This shift has accelerated the spread of
            information — and, unfortunately, misinformation as well.
          </p>
          <p style={{fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem"}}>
            Tradução: As redes sociais mudaram fundamentalmente a forma como as pessoas
            consomem notícias. Em vez de depender de jornais tradicionais ou transmissões
            de televisão, milhões de usuários agora recebem notícias em tempo real por
            meio de seus feeds sociais...
          </p>
        </blockquote>
        <p>
          A topic sentence (em negrito) está na primeira frase. As demais frases são detalhes
          que a sustentam: exemplos de plataformas, dados sobre jovens, e a conclusão sobre
          desinformação.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>
        <h2>3. Tese, Argumentos e Conclusão em Textos Argumentativos</h2>
        <p>
          Textos argumentativos em inglês (essays, op-eds, editorials) têm uma estrutura
          bem definida. Reconhecê-la ajuda a localizar rapidamente a ideia principal.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parte</th>
                <th>Função</th>
                <th>Onde aparece</th>
                <th>Palavras-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Introduction + Thesis</strong></td>
                <td>Apresenta o tema e a posição do autor</td>
                <td>1º parágrafo</td>
                <td><em>This essay argues, I believe, It is clear that</em></td>
              </tr>
              <tr>
                <td><strong>Body Paragraph 1</strong></td>
                <td>1º argumento + evidências</td>
                <td>2º parágrafo</td>
                <td><em>First, To begin with, One reason</em></td>
              </tr>
              <tr>
                <td><strong>Body Paragraph 2</strong></td>
                <td>2º argumento + evidências</td>
                <td>3º parágrafo</td>
                <td><em>Furthermore, In addition, Moreover</em></td>
              </tr>
              <tr>
                <td><strong>Body Paragraph 3</strong></td>
                <td>Contraargumento + refutação</td>
                <td>4º parágrafo</td>
                <td><em>Although, While, Despite the fact that</em></td>
              </tr>
              <tr>
                <td><strong>Conclusion</strong></td>
                <td>Retoma a tese + resumo dos argumentos</td>
                <td>Último parágrafo</td>
                <td><em>In conclusion, To sum up, Therefore</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica ENEM: a pergunta sobre ideia principal</h3>
          <p>
            Quando a questão do ENEM pergunta "O texto tem como ideia central..." ou "De acordo
            com o texto, o autor defende que...", você está sendo avaliado(a) na habilidade de
            identificar a tese ou a ideia principal. Leia o primeiro e o último parágrafo
            antes de ler o texto inteiro — eles costumam conter a tese e a conclusão.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Explícito vs. Implícito</span>
        <h2>4. Informação Explícita vs. Informação Implícita</h2>
        <p>
          Uma das distinções mais importantes na interpretação de textos é entre o que está
          <strong> explicitamente afirmado</strong> e o que está <strong>implicitamente
          sugerido</strong>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Informação Explícita</h3>
            <p>
              Está no texto com palavras claras. Pode ser localizada diretamente. O leitor
              apenas localiza, não precisa raciocinar além do que está escrito. Exemplo: "The
              study included 500 participants" — o número está lá.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Informação Implícita</h3>
            <p>
              Não está escrita diretamente, mas pode ser deduzida a partir do que está escrito,
              do contexto ou do conhecimento de mundo. Requer inferência. Exemplo: se o texto
              diz "She rushed out of the meeting without saying goodbye", pode-se inferir
              que ela estava chateada ou com pressa.
            </p>
          </div>
        </div>
        <p>Veja a diferença em ação com um trecho autêntico:</p>
        <blockquote style={{borderLeft: "4px solid #059669", paddingLeft: "1rem", fontStyle: "italic", color: "#374151", margin: "1rem 0"}}>
          <p>
            "The restaurant had been open for only three months, yet it already had a
            six-month waiting list. The chef, a young woman in her late twenties, had
            never attended culinary school."
          </p>
        </blockquote>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pergunta</th>
                <th>Tipo de informação</th>
                <th>Resposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Há quanto tempo o restaurante está aberto?</td>
                <td><strong>Explícita</strong></td>
                <td>Três meses ("three months")</td>
              </tr>
              <tr>
                <td>Qual é a fila de espera?</td>
                <td><strong>Explícita</strong></td>
                <td>Seis meses ("six-month waiting list")</td>
              </tr>
              <tr>
                <td>O restaurante é muito popular?</td>
                <td><strong>Implícita</strong></td>
                <td>Sim — inferida pela fila de espera longa</td>
              </tr>
              <tr>
                <td>A chef é autodidata?</td>
                <td><strong>Implícita</strong></td>
                <td>Sim — inferida por "never attended culinary school"</td>
              </tr>
              <tr>
                <td>O sucesso dela é surpreendente?</td>
                <td><strong>Implícita</strong></td>
                <td>Sim — o "yet" cria contraste entre a novidade e o sucesso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Subtexto</span>
        <h2>5. Subtexto e Intenção Comunicativa</h2>
        <p>
          O <strong>subtexto</strong> é a camada de significado que existe "por baixo" das
          palavras literais. Está ligado à intenção real do autor, ao tom do texto e ao contexto
          de produção. Para entender o subtexto, é preciso perguntar:
        </p>
        <ul>
          <li>Por que o autor escolheu essas palavras específicas e não outras?</li>
          <li>Qual é o tom do texto: neutro, crítico, irônico, entusiasmado, alarmista?</li>
          <li>O que o autor parece querer que o leitor pense ou sinta?</li>
          <li>Há palavras com conotação positiva ou negativa que revelam uma posição?</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Exemplo de subtexto em manchete</h3>
          <p>
            Compare as duas manchetes sobre o mesmo fato:
          </p>
          <ul>
            <li><em>"Government launches ambitious plan to reform education"</em> — tom positivo; "ambitious" sugere aprovação.</li>
            <li><em>"Government unveils controversial plan to overhaul education"</em> — tom crítico; "controversial" e "overhaul" sugerem ceticismo ou preocupação.</li>
          </ul>
          <p>O fato reportado é o mesmo; o subtexto revela posições diferentes dos autores.</p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inferência no ENEM</span>
        <h2>6. Como o ENEM Cobra Inferência</h2>
        <p>
          O ENEM avalia a habilidade de inferência com questões que pedem ao candidato para
          identificar o que pode ser <strong>concluído</strong>, <strong>deduzido</strong> ou
          <strong>inferido</strong> a partir do texto. Os enunciados típicos são:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❓</span>
            <h3>Enunciados típicos</h3>
            <p>
              "De acordo com o texto, pode-se concluir que..." / "O texto permite inferir que..."
              / "Com base no texto, é correto afirmar que..." / "A partir do texto, entende-se
              que..."
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilhas comuns</h3>
            <p>
              Alternativas que vão além do texto (extrapolam), que contradizem o texto, ou que
              são verdadeiras no mundo real mas não estão fundamentadas no texto. A inferência
              correta deve ser sustentada pelo texto — não pelo senso comum.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>O que é uma boa inferência</h3>
            <p>
              Uma inferência válida é aquela que pode ser logicamente deduzida a partir de
              informações contidas no texto, mesmo sem estar escrita explicitamente. Deve ser
              necessária, não apenas possível.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Passos para inferir</h3>
            <p>
              1) Leia o enunciado. 2) Identifique o trecho relevante. 3) Para cada alternativa,
              pergunte: "O texto me permite concluir isso?" Se a resposta depender de informação
              externa, a alternativa provavelmente é incorreta.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise Prática</span>
        <h2>7. O Que o Texto DIZ vs. O Que o Texto IMPLICA</h2>
        <p>
          Esta é a distinção que define o nível de dificuldade das questões. Veja o quadro
          completo com exemplos de diferentes gêneros textuais:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama comparando o que o texto diz e o que implica em diferentes gêneros">
            <rect x="0" y="0" width="700" height="260" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            {/* Header */}
            <rect x="0" y="0" width="700" height="40" rx="12" fill="#1e293b"/>
            <rect x="0" y="28" width="700" height="12" fill="#1e293b"/>
            <text x="350" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">O Que o Texto DIZ vs. O Que o Texto IMPLICA</text>
            {/* Column headers */}
            <rect x="10" y="48" width="200" height="28" rx="4" fill="#e2e8f0"/>
            <rect x="220" y="48" width="220" height="28" rx="4" fill="#dbeafe"/>
            <rect x="450" y="48" width="240" height="28" rx="4" fill="#dcfce7"/>
            <text x="110" y="67" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#374151">GÊNERO / TRECHO</text>
            <text x="330" y="67" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">O QUE DIZ (explícito)</text>
            <text x="570" y="67" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">O QUE IMPLICA (implícito)</text>
            {/* Row 1 */}
            <rect x="10" y="82" width="200" height="40" rx="4" fill="#f1f5f9"/>
            <text x="110" y="98" textAnchor="middle" fontSize="10" fill="#374151">Notícia: "The city cut</text>
            <text x="110" y="112" textAnchor="middle" fontSize="10" fill="#374151">its education budget by 20%"</text>
            <rect x="220" y="82" width="220" height="40" rx="4" fill="#eff6ff"/>
            <text x="330" y="98" textAnchor="middle" fontSize="10" fill="#1e3a8a">O orçamento de educação</text>
            <text x="330" y="112" textAnchor="middle" fontSize="10" fill="#1e3a8a">foi reduzido em 20%</text>
            <rect x="450" y="82" width="240" height="40" rx="4" fill="#f0fdf4"/>
            <text x="570" y="98" textAnchor="middle" fontSize="10" fill="#14532d">Escolas terão menos recursos;</text>
            <text x="570" y="112" textAnchor="middle" fontSize="10" fill="#14532d">decisão pode ser impopular</text>
            {/* Row 2 */}
            <rect x="10" y="128" width="200" height="40" rx="4" fill="#f1f5f9"/>
            <text x="110" y="144" textAnchor="middle" fontSize="10" fill="#374151">Tirinha: personagem olha</text>
            <text x="110" y="158" textAnchor="middle" fontSize="10" fill="#374151">o celular às 3h da manhã</text>
            <rect x="220" y="128" width="220" height="40" rx="4" fill="#eff6ff"/>
            <text x="330" y="144" textAnchor="middle" fontSize="10" fill="#1e3a8a">Personagem acorda de noite</text>
            <text x="330" y="158" textAnchor="middle" fontSize="10" fill="#1e3a8a">e usa o smartphone</text>
            <rect x="450" y="128" width="240" height="40" rx="4" fill="#f0fdf4"/>
            <text x="570" y="144" textAnchor="middle" fontSize="10" fill="#14532d">Dependência digital; insônia</text>
            <text x="570" y="158" textAnchor="middle" fontSize="10" fill="#14532d">causada pelo uso do celular</text>
            {/* Row 3 */}
            <rect x="10" y="174" width="200" height="40" rx="4" fill="#f1f5f9"/>
            <text x="110" y="190" textAnchor="middle" fontSize="10" fill="#374151">Anúncio: "Our soap leaves</text>
            <text x="110" y="204" textAnchor="middle" fontSize="10" fill="#374151">your skin feeling brand new"</text>
            <rect x="220" y="174" width="220" height="40" rx="4" fill="#eff6ff"/>
            <text x="330" y="190" textAnchor="middle" fontSize="10" fill="#1e3a8a">O sabonete deixa a pele</text>
            <text x="330" y="204" textAnchor="middle" fontSize="10" fill="#1e3a8a">com sensação de renovada</text>
            <rect x="450" y="174" width="240" height="40" rx="4" fill="#f0fdf4"/>
            <text x="570" y="190" textAnchor="middle" fontSize="10" fill="#14532d">Promessa de rejuvenescimento;</text>
            <text x="570" y="204" textAnchor="middle" fontSize="10" fill="#14532d">apelo ao desejo de juventude</text>
            {/* Row 4 */}
            <rect x="10" y="220" width="200" height="30" rx="4" fill="#f1f5f9"/>
            <text x="110" y="239" textAnchor="middle" fontSize="10" fill="#374151">Poema: metáfora de inverno</text>
            <rect x="220" y="220" width="220" height="30" rx="4" fill="#eff6ff"/>
            <text x="330" y="239" textAnchor="middle" fontSize="10" fill="#1e3a8a">Descrição de uma estação fria</text>
            <rect x="450" y="220" width="240" height="30" rx="4" fill="#f0fdf4"/>
            <text x="570" y="239" textAnchor="middle" fontSize="10" fill="#14532d">Solidão, tristeza, passagem do tempo</text>
          </svg>
          <figcaption>Comparação entre informação explícita e implícita em diferentes gêneros textuais</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias</span>
        <h2>8. Estratégias Práticas para Localizar a Ideia Principal</h2>
        <p>
          Use estas estratégias em sequência ao se deparar com um texto no ENEM:
        </p>
        <ol>
          <li>
            <strong>Leia o título e o subtítulo</strong> — geralmente anunciam o tópico e,
            às vezes, a ideia principal.
          </li>
          <li>
            <strong>Leia o primeiro e o último parágrafo</strong> — em textos argumentativos,
            a tese está no começo e é retomada no final.
          </li>
          <li>
            <strong>Leia a primeira frase de cada parágrafo</strong> — são as prováveis
            topic sentences.
          </li>
          <li>
            <strong>Identifique palavras-chave repetidas</strong> — termos que se repetem
            em todo o texto geralmente apontam o tema central.
          </li>
          <li>
            <strong>Atenção a conectores de conclusão</strong>: <em>therefore, thus, hence,
            consequently, in conclusion, as a result</em> — o que vem depois deles costuma
            ser a ideia mais importante.
          </li>
          <li>
            <strong>Descarte os detalhes</strong>: exemplos introduzidos por <em>for instance,
            for example, such as</em>, dados estatísticos isolados, anedotas — são suporte,
            não ideia central.
          </li>
        </ol>
        <div className="lesson-highlight">
          <h3>Cuidado com o "detail trap"</h3>
          <p>
            O ENEM frequentemente inclui alternativas que são verdadeiras e estão no texto,
            mas correspondem a um detalhe — não à ideia central. A resposta correta deve
            sintetizar o texto, não apenas mencionar um fato específico nele contido.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>9. Vocabulário Essencial para Questões de Ideia Principal</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo em inglês</th>
                <th>Tradução</th>
                <th>Uso em questões do ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>main idea</em></td><td>ideia principal</td><td>O que o texto trata centralmente</td></tr>
              <tr><td><em>topic</em></td><td>tópico / assunto</td><td>O campo geral do texto</td></tr>
              <tr><td><em>thesis / argument</em></td><td>tese / argumento</td><td>Posição defendida pelo autor</td></tr>
              <tr><td><em>imply / suggest</em></td><td>implicar / sugerir</td><td>Informação implícita no texto</td></tr>
              <tr><td><em>infer / conclude</em></td><td>inferir / concluir</td><td>Deduzir a partir do texto</td></tr>
              <tr><td><em>explicitly states</em></td><td>afirma explicitamente</td><td>Informação direta no texto</td></tr>
              <tr><td><em>according to the text</em></td><td>de acordo com o texto</td><td>Base textual da resposta</td></tr>
              <tr><td><em>it can be inferred that</em></td><td>pode-se inferir que</td><td>Questão de inferência</td></tr>
              <tr><td><em>the author's purpose</em></td><td>o propósito do autor</td><td>Intenção comunicativa</td></tr>
              <tr><td><em>overall message</em></td><td>mensagem geral</td><td>Síntese do texto</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 — DICA ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>10. Resumo e Mapa Mental</h2>
        <div className="math-block">
          <strong>FÓRMULA PARA IDENTIFICAR A IDEIA PRINCIPAL:</strong>
          <br /><br />
          Ideia Principal = TÓPICO + O QUE O AUTOR AFIRMA SOBRE ELE
          <br /><br />
          Não confunda:
          <br />• Tópico: "the environment" → apenas o assunto
          <br />• Detalhe: "CO₂ levels rose 2% last year" → dado específico
          <br />• Ideia Principal: "Human activity is the main driver of environmental degradation" → afirmação central
          <br /><br />
          Teste rápido: se a alternativa puder ser descartada por ser "muito específica" → é detalhe.
          Se for "muito vaga" → é só o tópico. A correta SINTETIZA o texto.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificar a ideia principal"
          statement={
            <div>
              <p>Leia o trecho e responda à questão:</p>
              <blockquote style={{borderLeft: "3px solid #4f46e5", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "Exercise is one of the most important things you can do for your health.
                  Regular physical activity reduces the risk of chronic diseases such as heart
                  disease, diabetes, and obesity. It also improves mental health by reducing
                  stress and anxiety. Even 30 minutes of moderate exercise a day can make a
                  significant difference."
                </p>
              </blockquote>
              <p>Qual é a ideia principal desse parágrafo?</p>
            </div>
          }
          options={[
            { letter: "A", text: "O exercício dura 30 minutos por dia." },
            { letter: "B", text: "O estresse e a ansiedade são problemas de saúde mental." },
            { letter: "C", text: "O exercício é fundamental para a saúde física e mental.", correct: true },
            { letter: "D", text: "A obesidade é causada pela falta de atividade física." },
            { letter: "E", text: "Doenças crônicas afetam muitas pessoas ao redor do mundo." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> A topic sentence do parágrafo é a primeira frase:
                "Exercise is one of the most important things you can do for your health." As
                demais frases são detalhes de suporte: exemplos de doenças evitadas, benefícios
                mentais e a quantidade mínima de exercício. A alternativa C sintetiza essa
                mensagem central. As demais são detalhes específicos mencionados no texto, mas
                não a ideia principal.
              </p>
            </div>
          }
        />

        <Exercise
          level="Intermediário"
          title="Informação implícita"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <blockquote style={{borderLeft: "3px solid #059669", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "The small bakery on Oak Street had been open for thirty years. When a large
                  supermarket chain moved in across the street, the bakery began losing
                  customers. Within two years, the owner had to lay off her three employees
                  and reduce opening hours from seven days a week to just three."
                </p>
              </blockquote>
              <p>Com base no texto, o que se pode inferir sobre a padaria?</p>
            </div>
          }
          options={[
            { letter: "A", text: "A padaria fechou as portas após dois anos." },
            { letter: "B", text: "A proprietária preferiu trabalhar menos dias por semana." },
            { letter: "C", text: "A chegada do supermercado prejudicou financeiramente a padaria.", correct: true },
            { letter: "D", text: "Os três funcionários foram para trabalhar no supermercado." },
            { letter: "E", text: "A padaria era a única da rua antes do supermercado chegar." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> O texto não diz explicitamente que a padaria teve
                problemas financeiros, mas isso pode ser claramente inferido: ela perdeu clientes,
                demitiu funcionários e reduziu horários — todos sinais de dificuldade econômica.
                A alternativa A extrapola (a padaria não fechou, apenas reduziu horários). B
                distorce o sentido (não foi por preferência). D e E não têm base textual.
              </p>
            </div>
          }
        />

        <Exercise
          level="Avançado"
          title="Subtexto e intenção do autor"
          statement={
            <div>
              <p>Leia o trecho de uma crítica de cinema:</p>
              <blockquote style={{borderLeft: "3px solid #dc2626", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "The director's latest film offers audiences two hours of breathtaking
                  visuals and absolutely nothing else. The plot, if one can call it that,
                  meanders aimlessly from one stunning set piece to another, with characters
                  so thinly written they make cardboard cutouts look three-dimensional."
                </p>
              </blockquote>
              <p>Qual é a intenção do autor do texto?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Elogiar os efeitos visuais do filme." },
            { letter: "B", text: "Recomendar o filme para o público geral." },
            { letter: "C", text: "Criticar o filme por ter boa estética mas enredo e personagens fracos.", correct: true },
            { letter: "D", text: "Comparar o diretor com outros cineastas mais talentosos." },
            { letter: "E", text: "Informar sobre a duração e o enredo do filme de forma neutra." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> O subtexto revela uma crítica: "absolutely nothing
                else" nega qualquer mérito além do visual; "if one can call it that" é irônico
                (desqualifica o enredo); "meanders aimlessly" indica falta de direção narrativa;
                e a comparação com "cardboard cutouts" é uma metáfora depreciativa para os
                personagens. Embora mencione "breathtaking visuals" (positivo), o tom geral é
                nitidamente crítico. A alternativa A está incompleta; B contradiz o tom; D e E
                não têm base textual.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Ideia principal em texto jornalístico (ENEM)"
          statement={
            <div>
              <p>Leia o texto adaptado de uma revista de ciências:</p>
              <blockquote style={{borderLeft: "3px solid #7c3aed", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "Scientists have long debated whether urban green spaces actually improve
                  residents' mental health, or whether healthier people simply choose to live
                  near parks. A new study from the University of Edinburgh suggests the
                  relationship is causal: people who moved to areas with more green space
                  showed measurable improvements in well-being within three years, even after
                  controlling for income and lifestyle factors."
                </p>
              </blockquote>
              <p>
                De acordo com o texto, o que o estudo da Universidade de Edimburgo demonstrou?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Pessoas mais saudáveis tendem a escolher morar perto de parques." },
            { letter: "B", text: "O bem-estar melhora em três anos independentemente do local de moradia." },
            { letter: "C", text: "Áreas verdes urbanas causam melhoras mensuráveis no bem-estar mental das pessoas.", correct: true },
            { letter: "D", text: "Cientistas já sabiam que espaços verdes melhoravam a saúde mental." },
            { letter: "E", text: "Renda e estilo de vida são os principais fatores de bem-estar urbano." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> O texto distingue duas hipóteses (causalidade vs.
                seleção) e apresenta o estudo como evidência da <em>relação causal</em>: pessoas
                que se mudaram para áreas verdes melhoraram seu bem-estar. A alternativa A é
                justamente a hipótese que o estudo contraria ("healthier people simply choose to
                live near parks"). B distorce a informação (não é independente do local). D
                contradiz o texto ("scientists have long <em>debated</em>"). E inverte a conclusão
                do estudo, que controlou para esses fatores justamente para isolá-los.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Distinção explícito vs. implícito em anúncio"
          statement={
            <div>
              <p>Leia este texto de um anúncio publicitário em inglês:</p>
              <blockquote style={{borderLeft: "3px solid #ea580c", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "NOVA running shoes: engineered for those who refuse to stop. Built with
                  aerospace-grade materials and tested by Olympic athletes. Because the road
                  doesn't care how tired you are."
                </p>
              </blockquote>
              <p>
                Qual das alternativas representa uma informação <strong>implícita</strong> no
                anúncio?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O tênis foi testado por atletas olímpicos." },
            { letter: "B", text: "O produto é chamado de NOVA." },
            { letter: "C", text: "Os materiais do tênis são de grau aeroespacial." },
            { letter: "D", text: "O tênis é destinado a corredores determinados e resilientes.", correct: true },
            { letter: "E", text: "A frase final menciona o cansaço do corredor." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: D.</strong> As alternativas A, B, C e E referem-se a
                informações explicitamente presentes no texto do anúncio. A alternativa D, porém,
                é uma inferência: a frase "engineered for those who refuse to stop" e o slogan
                "the road doesn't care how tired you are" implicam que o público-alvo é composto
                por pessoas determinadas, que não desistem facilmente — mas o anúncio não usa
                as palavras "determinados" ou "resilientes" diretamente. Essa é a informação
                implícita, deduzida a partir da linguagem simbólica utilizada.
              </p>
            </div>
          }
        />
      </section>
    </article>
  );
}
