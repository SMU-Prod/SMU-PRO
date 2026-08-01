"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 21</span>
          <h1>Estratégias Avançadas de Leitura: Skimming e Scanning</h1>
          <p>
            Ler bem em inglês no ENEM não é uma questão de vocabulário perfeito — é uma questão
            de <strong>estratégia</strong>. Dois candidatos com o mesmo nível de inglês podem ter
            desempenhos completamente diferentes dependendo de como abordam os textos. As técnicas
            de <strong>skimming</strong> (leitura global) e <strong>scanning</strong> (busca de
            informação específica) são as ferramentas mais poderosas para ler com eficiência,
            velocidade e precisão — exatamente o que a prova exige.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Ler para o ENEM é uma Habilidade Técnica</h2>

        <p>
          Existe uma diferença fundamental entre <strong>ler para aprender</strong> (leitura lenta,
          palavra por palavra, com dicionário à mão) e <strong>ler para responder questões</strong>{" "}
          (leitura estratégica, orientada pelo objetivo, com tempo limitado). O ENEM exige o segundo
          tipo. Cada questão de inglês tem um propósito específico — e saber qual técnica aplicar em
          cada momento faz toda a diferença.
        </p>

        <div className="lesson-highlight">
          <strong>Princípio fundamental:</strong> Você não precisa entender cada palavra de um texto
          em inglês para responder corretamente às questões do ENEM. A grande maioria das questões
          testa compreensão global, identificação de tema, intenção comunicativa e localização de
          informação — não tradução literal.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Leitura Orientada por Objetivo</h3>
            <p>
              Antes de ler qualquer texto, pergunte-se: <em>"O que a questão está pedindo?"</em>.
              A resposta define qual técnica usar — skimming para entender o todo, scanning para
              encontrar um detalhe específico.
            </p>
          </div>
          <div className="lesson-card">
            <span>⏱️</span>
            <h3>Tempo é um Recurso</h3>
            <p>
              Com cerca de 3 a 4 minutos por texto na prova de inglês do ENEM, não há tempo
              para leitura integral. Técnicas estratégicas multiplicam sua capacidade de
              processamento sem sacrificar a precisão.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧭</span>
            <h3>Contexto antes de Conteúdo</h3>
            <p>
              Ler o contexto (título, fonte, data, autor) antes do corpo do texto é como
              ter um mapa antes de entrar numa floresta. Você sabe onde está, para onde ir
              e o que esperar.
            </p>
          </div>
        </div>

        <p>
          Nas próximas seções, você vai aprender cada técnica em profundidade, quando usá-las e
          como combiná-las para extrair o máximo de informação no menor tempo possível.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 1</span>
        <h2>2. O que é Skimming? Leitura Global</h2>

        <p>
          <strong>Skimming</strong> é a técnica de ler um texto <em>de forma superficial e rápida</em>{" "}
          para captar a <strong>ideia geral</strong> — o tema, o propósito, o tom e a estrutura
          básica — sem se prender a cada palavra. O nome vem do inglês <em>to skim</em>, que
          significa "deslizar pela superfície". Imagine uma pedra quicando sobre a água: ela toca
          vários pontos sem afundar em nenhum.
        </p>

        <div className="math-block">
          <strong>Definição:</strong> Skimming = ler para entender <em>do que se trata</em> o texto.
          <br />
          Objetivo: capturar a ideia central em 20–30 segundos de leitura.
          <br />
          Pergunta-guia: <em>"What is this text about?"</em> (Do que trata este texto?)
        </div>

        <p>
          Durante o skimming, seus olhos percorrem o texto de forma não-linear, focando nos pontos
          que carregam mais informação com menos palavras:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Título e Subtítulo</h3>
            <p>
              São o resumo mais comprimido do texto. O título anuncia o tema; o subtítulo
              complementa ou especifica. Leia-os primeiro e sempre.
              <br />
              <em>Ex: "Climate Change: The Last Chance to Act"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Primeiro e Último Parágrafos</h3>
            <p>
              O primeiro parágrafo apresenta o tema e a tese. O último traz a conclusão ou
              recapitulação. Juntos, eles contêm a espinha dorsal do argumento.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Primeira Frase de Cada Parágrafo</h3>
            <p>
              A <em>topic sentence</em> — geralmente a primeira frase do parágrafo — anuncia
              a ideia principal daquele bloco. Ler só essas frases já dá uma visão estruturada
              do texto inteiro.
            </p>
          </div>
          <div className="lesson-card">
            <span>✏️</span>
            <h3>Palavras em Destaque</h3>
            <p>
              Palavras em <strong>negrito</strong>, <em>itálico</em>, CAIXA ALTA ou entre
              aspas recebem ênfase do autor. São pistas sobre os conceitos centrais e o
              vocabulário-chave.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Números, Datas e Nomes Próprios</h3>
            <p>
              Mesmo no skimming, esses elementos se destacam visualmente. Eles fornecem
              âncoras temporais, geográficas e estatísticas que contextualizam o tema.
            </p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Imagens e Legendas</h3>
            <p>
              Uma imagem e sua legenda frequentemente resumem o argumento central. No ENEM,
              textos multimodais dependem desses elementos para transmitir sentido.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Quando usar skimming no ENEM:</strong> Sempre que a questão perguntar sobre o{" "}
          <em>tema central</em>, a <em>intenção do autor</em>, o <em>título adequado</em> para o
          texto, o <em>público-alvo</em> ou o <em>gênero textual</em>. Todas essas perguntas
          se respondem com uma visão global do texto — não com a leitura de um detalhe específico.
        </div>

        <p>
          Exemplo prático: se a questão pergunta <em>"O texto tem como principal objetivo..."</em>,
          você precisa entender a função comunicativa geral do texto — informar, persuadir, entreter,
          instruir? O skimming do título, primeiro e último parágrafo já é suficiente para responder.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 2</span>
        <h2>3. O que é Scanning? Busca de Informação</h2>

        <p>
          <strong>Scanning</strong> é a técnica oposta ao skimming: em vez de passar os olhos pelo
          texto inteiro de forma panorâmica, você <em>mergulha em busca de um elemento específico</em>.
          O nome vem de <em>to scan</em> — varrer, como um scanner faz ao detectar um padrão.
          Você não lê o texto; você <strong>caça</strong> uma informação dentro dele.
        </p>

        <div className="math-block">
          <strong>Definição:</strong> Scanning = ler para <em>encontrar</em> uma informação pontual.
          <br />
          Objetivo: localizar um dado específico sem ler o texto todo.
          <br />
          Pergunta-guia: <em>"Where exactly does the text say X?"</em> (Onde o texto menciona X?)
        </div>

        <p>
          O scanning é eficaz porque o cérebro é excelente em reconhecer padrões visuais sem
          processar o texto linearmente. Você define <em>o que está procurando</em> antes de
          começar e seus olhos "pulam" diretamente para o padrão correspondente:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de informação</th>
                <th>Pista visual que você procura</th>
                <th>Exemplo no texto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Data ou ano</strong></td>
                <td>Números de 4 dígitos, formato DD/MM/YYYY</td>
                <td><em>"In 2019, researchers found..."</em></td>
              </tr>
              <tr>
                <td><strong>Nome de pessoa</strong></td>
                <td>Letra maiúscula em meio a texto minúsculo</td>
                <td><em>"According to Dr. Smith..."</em></td>
              </tr>
              <tr>
                <td><strong>Lugar geográfico</strong></td>
                <td>Nomes próprios com maiúscula</td>
                <td><em>"...conducted in São Paulo..."</em></td>
              </tr>
              <tr>
                <td><strong>Percentual ou estatística</strong></td>
                <td>Símbolo %, números com decimais</td>
                <td><em>"...a 37% increase in..."</em></td>
              </tr>
              <tr>
                <td><strong>Palavra-chave da questão</strong></td>
                <td>A mesma palavra (ou sinônimo) da pergunta</td>
                <td><em>Questão: "benefit" → busca "advantage", "benefit"</em></td>
              </tr>
              <tr>
                <td><strong>Citação direta</strong></td>
                <td>Aspas no texto</td>
                <td><em>"The author states: 'We must act now.'"</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Quando usar scanning no ENEM:</strong> Sempre que a questão pedir um{" "}
          <em>dado específico</em>: uma data, um nome, um número, o significado de uma palavra
          no contexto, uma afirmação do autor, ou a localização de uma informação ("De acordo com
          o texto...", "Segundo o autor...", "O texto menciona que...").
        </div>

        <p>
          Técnica de scanning eficiente: antes de mover os olhos pelo texto, <strong>repita
          mentalmente</strong> o que você está procurando. Isso "programa" seu sistema visual
          para detectar o padrão. Ao encontrar a área, <em>aí sim</em> você lê as frases ao
          redor com atenção para confirmar a resposta.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Decisão Estratégica</span>
        <h2>4. Quando Usar Cada Técnica no ENEM</h2>

        <p>
          A decisão entre skimming e scanning começa <strong>antes de ler o texto</strong> — ela
          começa com a leitura da questão. Esse é o protocolo mais importante desta aula: leia a
          pergunta primeiro, identifique o tipo de resposta que ela pede, e só então decida como
          abordar o texto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>A questão pede...</th>
                <th>Técnica indicada</th>
                <th>Por quê?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tema central / assunto principal</td>
                <td><strong>Skimming</strong></td>
                <td>Requer visão geral do texto inteiro</td>
              </tr>
              <tr>
                <td>Intenção / objetivo do autor</td>
                <td><strong>Skimming</strong></td>
                <td>Só se percebe com compreensão do todo</td>
              </tr>
              <tr>
                <td>Título mais adequado para o texto</td>
                <td><strong>Skimming</strong></td>
                <td>Precisão do tema requer visão panorâmica</td>
              </tr>
              <tr>
                <td>Um dado, data ou nome específico</td>
                <td><strong>Scanning</strong></td>
                <td>Informação localizada, não precisa ler tudo</td>
              </tr>
              <tr>
                <td>Significado de uma palavra no contexto</td>
                <td><strong>Scanning</strong></td>
                <td>Localiza a palavra e lê o entorno imediato</td>
              </tr>
              <tr>
                <td>O que o autor afirma sobre X</td>
                <td><strong>Scanning</strong></td>
                <td>Procura a menção específica de X no texto</td>
              </tr>
              <tr>
                <td>Gênero textual ou suporte do texto</td>
                <td><strong>Skimming</strong></td>
                <td>Depende de formato, fonte e estrutura geral</td>
              </tr>
              <tr>
                <td>Inferência / conclusão implícita</td>
                <td><strong>Skimming + Leitura Cuidadosa</strong></td>
                <td>Exige compreensão do contexto amplo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Protocolo ENEM em 4 passos:</strong>
          <br />
          1. Leia o <strong>enunciado da questão</strong> e identifique o que está sendo pedido.
          <br />
          2. Leia os <strong>elementos paratextuais</strong> do texto (título, fonte, data).
          <br />
          3. Aplique <strong>skimming ou scanning</strong> conforme o tipo de resposta necessária.
          <br />
          4. Leia com atenção <strong>apenas o trecho relevante</strong> para confirmar a resposta.
        </div>

        <div className="lesson-highlight">
          <strong>Armadilha comum:</strong> Muitos candidatos leem o texto inteiro antes de olhar
          a questão. Isso desperdiça tempo e faz com que você leia sem foco. Inverta a ordem —
          questão primeiro, texto depois — e sua eficiência aumenta drasticamente.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Anatomia do Texto</span>
        <h2>5. Elementos Paratextuais: O Texto antes do Texto</h2>

        <p>
          <strong>Elementos paratextuais</strong> são tudo que envolve o texto principal — e que
          comunica informação mesmo antes da primeira palavra do corpo do texto ser lida. O prefixo
          "para" vem do grego e significa "ao lado de". Esses elementos são como a embalagem de
          um produto: antes de abrir, você já sabe muito sobre o conteúdo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama da anatomia de um texto jornalístico com elementos paratextuais identificados">
            {/* Fundo */}
            <rect width="680" height="480" fill="#f8fafc" rx="12" />

            {/* Título do diagrama */}
            <text x="340" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Anatomia de um Texto Jornalístico</text>

            {/* Área do artigo */}
            <rect x="60" y="44" width="400" height="410" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="6" />

            {/* Bloco: Título */}
            <rect x="70" y="54" width="380" height="36" fill="#dbeafe" rx="4" />
            <text x="260" y="77" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">TÍTULO DO ARTIGO</text>

            {/* Bloco: Subtítulo */}
            <rect x="70" y="96" width="380" height="22" fill="#e0e7ff" rx="4" />
            <text x="260" y="112" textAnchor="middle" fontSize="11" fill="#3730a3">Subtítulo complementar com mais detalhes do tema</text>

            {/* Bloco: Autor + Data */}
            <rect x="70" y="124" width="185" height="18" fill="#f0fdf4" rx="4" />
            <text x="162" y="137" textAnchor="middle" fontSize="10" fill="#166534">Autor: Nome do Jornalista</text>
            <rect x="265" y="124" width="185" height="18" fill="#fef9c3" rx="4" />
            <text x="357" y="137" textAnchor="middle" fontSize="10" fill="#854d0e">Data: 15 de julho de 2026</text>

            {/* Bloco: Lead */}
            <rect x="70" y="148" width="380" height="48" fill="#fce7f3" rx="4" />
            <text x="260" y="166" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">LEAD (parágrafo de abertura)</text>
            <text x="260" y="182" textAnchor="middle" fontSize="10" fill="#9d174d">Responde: Quem? O quê? Quando? Onde? Por quê?</text>

            {/* Bloco: Imagem */}
            <rect x="70" y="202" width="165" height="80" fill="#f3f4f6" rx="4" stroke="#9ca3af" strokeWidth="1" />
            <text x="152" y="238" textAnchor="middle" fontSize="11" fill="#6b7280">🖼️ IMAGEM</text>
            <text x="152" y="256" textAnchor="middle" fontSize="10" fill="#6b7280">Ilustração do tema</text>

            {/* Legenda da imagem */}
            <rect x="70" y="286" width="165" height="18" fill="#e5e7eb" rx="4" />
            <text x="152" y="299" textAnchor="middle" fontSize="10" fill="#374151">Legenda da imagem</text>

            {/* Corpo do texto — parágrafos */}
            <rect x="245" y="202" width="205" height="18" fill="#f1f5f9" rx="4" />
            <text x="347" y="215" textAnchor="middle" fontSize="10" fill="#475569">Parágrafo 1 — ideia 1</text>
            <rect x="245" y="226" width="205" height="18" fill="#f1f5f9" rx="4" />
            <text x="347" y="239" textAnchor="middle" fontSize="10" fill="#475569">Parágrafo 2 — ideia 2</text>
            <rect x="245" y="250" width="205" height="18" fill="#f1f5f9" rx="4" />
            <text x="347" y="263" textAnchor="middle" fontSize="10" fill="#475569">Parágrafo 3 — ideia 3</text>
            <rect x="70" y="310" width="380" height="18" fill="#f1f5f9" rx="4" />
            <text x="260" y="323" textAnchor="middle" fontSize="10" fill="#475569">Parágrafo 4 — desenvolvimento</text>
            <rect x="70" y="334" width="380" height="18" fill="#f1f5f9" rx="4" />
            <text x="260" y="347" textAnchor="middle" fontSize="10" fill="#475569">Parágrafo 5 — argumento adicional</text>

            {/* Conclusão */}
            <rect x="70" y="358" width="380" height="36" fill="#dcfce7" rx="4" />
            <text x="260" y="372" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">Parágrafo final — Conclusão</text>
            <text x="260" y="387" textAnchor="middle" fontSize="10" fill="#166534">Retoma a tese ou apresenta encaminhamento</text>

            {/* Fonte */}
            <rect x="70" y="400" width="380" height="18" fill="#ede9fe" rx="4" />
            <text x="260" y="413" textAnchor="middle" fontSize="10" fill="#5b21b6">Fonte: Nome da Publicação, Ano. ISSN/URL</text>

            {/* Setas e labels do lado direito */}
            <line x1="460" y1="72" x2="530" y2="72" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="68" fontSize="11" fill="#1e40af" fontWeight="bold">Título</text>
            <text x="535" y="81" fontSize="10" fill="#1e40af">Tema principal</text>

            <line x1="460" y1="107" x2="530" y2="107" stroke="#3730a3" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="103" fontSize="11" fill="#3730a3" fontWeight="bold">Subtítulo</text>
            <text x="535" y="116" fontSize="10" fill="#3730a3">Especificação</text>

            <line x1="460" y1="133" x2="530" y2="133" stroke="#854d0e" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="129" fontSize="11" fill="#854d0e" fontWeight="bold">Data/Autor</text>
            <text x="535" y="142" fontSize="10" fill="#854d0e">Contexto</text>

            <line x1="460" y1="172" x2="530" y2="172" stroke="#9d174d" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="168" fontSize="11" fill="#9d174d" fontWeight="bold">Lead</text>
            <text x="535" y="181" fontSize="10" fill="#9d174d">Núcleo informativo</text>

            <line x1="460" y1="242" x2="530" y2="242" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="238" fontSize="11" fill="#6b7280" fontWeight="bold">Imagem</text>
            <text x="535" y="251" fontSize="10" fill="#6b7280">Ilustra o tema</text>

            <line x1="460" y1="369" x2="530" y2="369" stroke="#166534" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="365" fontSize="11" fill="#166534" fontWeight="bold">Conclusão</text>
            <text x="535" y="378" fontSize="10" fill="#166534">Síntese final</text>

            <line x1="460" y1="409" x2="530" y2="409" stroke="#5b21b6" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="535" y="405" fontSize="11" fill="#5b21b6" fontWeight="bold">Fonte</text>
            <text x="535" y="418" fontSize="10" fill="#5b21b6">Credibilidade</text>
          </svg>
          <figcaption>
            Anatomia de um texto jornalístico: cada elemento paratextual carrega informação que
            pode ser explorada antes da leitura integral do corpo do texto.
          </figcaption>
        </figure>

        <p>
          Aprender a "ler" os elementos paratextuais é uma habilidade própria. Antes de ler o
          primeiro parágrafo, você já pode saber:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>Título (Title)</h3>
            <p>
              Anuncia o tema e frequentemente o ponto de vista. Um título interrogativo sugere
              debate; um título afirmativo, declaração. Tudo está aqui.
              <br />
              <em>"Are social media platforms making us lonelier?"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Subtítulo (Subtitle / Deck)</h3>
            <p>
              Especifica, contextualiza ou complementa o título. Em textos jornalísticos,
              é o segundo elemento mais informativo após o título.
              <br />
              <em>"New study analyzes usage patterns in 12 countries"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Autor e Fonte</h3>
            <p>
              Revela o perfil da publicação (científica, jornalística, publicitária) e
              orienta a leitura. Um texto da <em>Nature</em> vs. de uma ONG têm intenções
              diferentes.
            </p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Data de Publicação</h3>
            <p>
              Contextualiza historicamente. Um texto de 2020 sobre pandemia tem contexto
              diferente de um texto de 2015 sobre o mesmo vírus.
            </p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Imagem e Legenda</h3>
            <p>
              A imagem reforça ou contrasta com o texto. A legenda quase sempre contém
              informação que aparece também no corpo do texto — lê-la é ganhar tempo.
            </p>
          </div>
          <div className="lesson-card">
            <span>📦</span>
            <h3>Suporte e Formato</h3>
            <p>
              Uma charge, um anúncio, um artigo científico e uma tira cômica pedem
              leituras completamente diferentes. O suporte indica o gênero e o propósito.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica de prova:</strong> Muitas questões do ENEM sobre texto em inglês podem ser
          respondidas <em>apenas com o título e a fonte</em>, sem ler o corpo do texto. Antes de
          mergulhar no conteúdo, sempre pergunte: <em>"Já consigo responder isso com o que vejo
          aqui fora?"</em>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Textual</span>
        <h2>6. Identificando a Estrutura do Texto</h2>

        <p>
          Textos não são escritos aleatoriamente — eles seguem <strong>padrões de organização</strong>{" "}
          que o autor escolhe conforme seu propósito comunicativo. Reconhecer o padrão estrutural
          de um texto durante o skimming é uma forma poderosa de prever onde as informações
          importantes estão localizadas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Descrição</th>
                <th>Marcadores típicos em inglês</th>
                <th>Tipos de texto comuns no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Introdução–Desenvolvimento–Conclusão</strong></td>
                <td>Estrutura clássica: apresenta, desenvolve e conclui</td>
                <td><em>First... Furthermore... In conclusion...</em></td>
                <td>Artigos de opinião, redações, ensaios</td>
              </tr>
              <tr>
                <td><strong>Problema–Solução</strong></td>
                <td>Descreve um problema e propõe saídas</td>
                <td><em>The problem is... One solution... To address this...</em></td>
                <td>Textos de divulgação científica, campanhas</td>
              </tr>
              <tr>
                <td><strong>Causa–Efeito</strong></td>
                <td>Explica por que algo acontece e suas consequências</td>
                <td><em>Because... As a result... This leads to... Therefore...</em></td>
                <td>Textos científicos, notícias sobre fenômenos</td>
              </tr>
              <tr>
                <td><strong>Comparação–Contraste</strong></td>
                <td>Analisa semelhanças e diferenças entre dois elementos</td>
                <td><em>While... On the other hand... Similarly... Unlike...</em></td>
                <td>Artigos analíticos, resenhas, textos de avaliação</td>
              </tr>
              <tr>
                <td><strong>Cronológica / Narrativa</strong></td>
                <td>Organiza eventos em ordem temporal</td>
                <td><em>First... Then... Later... Finally... In 1990...</em></td>
                <td>Biografias, reportagens históricas, contos</td>
              </tr>
              <tr>
                <td><strong>Lista / Enumeração</strong></td>
                <td>Apresenta itens em sequência ou por importância</td>
                <td><em>First, second, third... Also... Another...</em></td>
                <td>Instruções, guias, listas de dicas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Como usar isso na prova:</strong> Se você identifica que o texto tem estrutura
          de <em>Problema–Solução</em>, você sabe que a "solução" está na segunda metade do texto.
          Se é <em>Causa–Efeito</em>, as "causas" vêm antes dos conectores como <em>therefore</em>{" "}
          e <em>as a result</em>. Esse mapeamento orienta seu scanning com precisão cirúrgica.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Método Central</span>
        <h2>7. Leitura em Camadas: Global → Geral → Específico</h2>

        <p>
          A técnica mais poderosa desta aula integra skimming, scanning e leitura cuidadosa em
          um único protocolo chamado <strong>leitura em camadas</strong> (ou leitura em funil).
          Em vez de ler o texto de uma forma só, você o aborda em três profundidades progressivas,
          parando assim que tiver informação suficiente para responder a questão.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama de funil mostrando as três camadas de leitura: Global, Geral e Específico">
            <defs>
              <linearGradient id="gradGlobal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradGeral" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="gradEspecifico" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Camada 1 — Global (topo, mais largo) */}
            <polygon points="60,30 580,30 500,140 140,140" fill="url(#gradGlobal)" rx="4" />
            <text x="320" y="70" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">CAMADA 1 — GLOBAL</text>
            <text x="320" y="92" textAnchor="middle" fontSize="12" fill="white">Skimming: título, subtítulo, primeiro e último parágrafo</text>
            <text x="320" y="110" textAnchor="middle" fontSize="12" fill="white">Pergunta: "Do que trata este texto?"</text>
            <text x="320" y="128" textAnchor="middle" fontSize="11" fill="#dbeafe">⏱ 15–25 segundos</text>

            {/* Camada 2 — Geral (meio) */}
            <polygon points="140,150 500,150 420,255 220,255" fill="url(#gradGeral)" />
            <text x="320" y="186" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">CAMADA 2 — GERAL</text>
            <text x="320" y="206" textAnchor="middle" fontSize="12" fill="white">Primeira frase de cada parágrafo (topic sentences)</text>
            <text x="320" y="224" textAnchor="middle" fontSize="12" fill="white">Pergunta: "Quais são as ideias principais?"</text>
            <text x="320" y="242" textAnchor="middle" fontSize="11" fill="#ede9fe">⏱ 30–45 segundos</text>

            {/* Camada 3 — Específico (fundo, mais estreito) */}
            <polygon points="220,265 420,265 360,355 280,355" fill="url(#gradEspecifico)" />
            <text x="320" y="298" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">CAMADA 3 — ESPECÍFICO</text>
            <text x="320" y="316" textAnchor="middle" fontSize="11" fill="white">Scanning: localiza o trecho exato da resposta</text>
            <text x="320" y="334" textAnchor="middle" fontSize="11" fill="white">Pergunta: "Onde está a resposta?"</text>
            <text x="320" y="350" textAnchor="middle" fontSize="10" fill="#fce7f3">⏱ 20–40 segundos</text>

            {/* Seta lateral */}
            <line x1="600" y1="30" x2="600" y2="355" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowDown)" />
            <text x="614" y="195" fontSize="12" fill="#64748b" transform="rotate(90, 614, 195)">PROFUNDIDADE DE LEITURA</text>

            <defs>
              <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
                <path d="M0,0 L8,0 L4,8 z" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Funil da leitura em camadas: você só desce para a próxima camada se a questão exigir.
            Muitas perguntas do ENEM são respondidas já na Camada 1 ou 2.
          </figcaption>
        </figure>

        <p>
          A beleza deste método é que você <strong>para assim que tiver a resposta</strong>. Se
          a questão pergunta apenas o tema central do texto, a Camada 1 é suficiente — não há
          razão para continuar. Se precisa de um detalhe específico, você vai até a Camada 3.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Camada 1 — Global (Skimming rápido)</h3>
            <p>
              Leia: título, subtítulo, primeiro parágrafo, último parágrafo, imagem e legenda.
              Responde: qual é o tema? Qual é o gênero? Qual é o tom (formal, informal, crítico,
              laudatório)?
            </p>
          </div>
          <div className="lesson-card">
            <span>📄</span>
            <h3>Camada 2 — Geral (Skimming estruturado)</h3>
            <p>
              Leia: a primeira (e às vezes a última) frase de cada parágrafo. Responde: qual é
              a ideia principal de cada bloco? Há algum parágrafo especialmente relevante para
              a questão?
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Camada 3 — Específico (Scanning + leitura cuidadosa)</h3>
            <p>
              Use scanning para localizar o trecho exato. Depois, leia com atenção as 2–3 frases
              ao redor. Responde: qual é o dado exato que a questão pede? O que o autor diz
              especificamente sobre isso?
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Exemplo prático (Camada 1 já resolve):</strong>
          <br />
          Questão: <em>"O texto foi publicado com o objetivo de..."</em>
          <br />
          Após ler título (<em>"Stop Plastic Pollution Now"</em>) e a fonte (<em>"Greenpeace
          Campaign, 2023"</em>), a resposta já é clara: persuadir o leitor a agir contra a
          poluição plástica. Não é necessário ler o texto inteiro.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gestão de Prova</span>
        <h2>8. Gerenciamento de Tempo na Prova</h2>

        <p>
          A prova do ENEM tem 45 questões de Linguagens e Códigos, sendo que as questões de
          inglês (ou espanhol) correspondem a aproximadamente <strong>5 questões</strong>, baseadas
          em 3 a 4 textos diferentes. Com um tempo total de aproximadamente 5 horas e 30 minutos
          para 90 questões, você dispõe de algo em torno de <strong>3 a 4 minutos por questão</strong>,
          o que inclui a leitura do texto correspondente.
        </p>

        <div className="math-block">
          <strong>Distribuição de tempo sugerida por texto em inglês:</strong>
          <br />
          • Elementos paratextuais: <strong>15–20 segundos</strong>
          <br />
          • Skimming (Camada 1): <strong>20–30 segundos</strong>
          <br />
          • Leitura da questão: <strong>15–20 segundos</strong>
          <br />
          • Scanning / leitura do trecho relevante: <strong>30–60 segundos</strong>
          <br />
          • Avaliação das alternativas: <strong>30–45 segundos</strong>
          <br />
          <strong>Total por questão: aprox. 2–3 minutos</strong>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏃</span>
            <h3>Textos Curtos — Prioridade Alta</h3>
            <p>
              Anúncios, tiras, charges, poemas e textos com menos de 5 linhas devem ser
              resolvidos primeiro. A relação esforço/retorno é excelente — pouco tempo
              de leitura, questão respondida.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Textos Médios — Ritmo Normal</h3>
            <p>
              Artigos de 1 a 2 parágrafos e notícias curtas. Aplique o protocolo das 3
              camadas. Se após 2 minutos não conseguiu responder, marque a melhor opção
              e volte se sobrar tempo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐢</span>
            <h3>Textos Longos — Seja Seletivo</h3>
            <p>
              Artigos com 4+ parágrafos. Nunca leia tudo. Use a Camada 1 para entender
              o tema, identifique a estrutura e aplique scanning direcionado para cada
              questão específica.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Quando Pular e Voltar</h3>
            <p>
              Se um texto parece muito difícil, não trave nele. Pule, resolva as questões
              mais acessíveis e volte no final. Um texto difícil não deve consumir o tempo
              de três questões mais fáceis.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> Na prova de inglês do ENEM, você raramente precisa
          entender mais de 60–70% do vocabulário de um texto para responder todas as suas questões.
          O que determina o sucesso é a <em>estratégia de leitura</em>, não o dicionário mental.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Textos Difíceis</span>
        <h2>9. Estratégias para Textos Longos e Desconhecidos</h2>

        <p>
          Mesmo aplicando skimming e scanning, alguns textos parecem impenetráveis. O vocabulário
          é técnico, as frases são longas, as referências culturais são desconhecidas. Para esses
          casos, existem estratégias complementares que permitem extrair significado mesmo com
          baixo domínio linguístico.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌉</span>
            <h3>Cognatos — Pontes entre Idiomas</h3>
            <p>
              Cognatos são palavras que têm forma semelhante em inglês e português e o mesmo
              significado: <em>democracy, economy, information, culture, university, hospital,
              electric, natural, important, possible</em>. São centenas de palavras que você
              já conhece sem estudar.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Palavras Repetidas = Tema Central</h3>
            <p>
              O autor repete as palavras mais importantes. Se <em>"climate"</em> e{" "}
              <em>"temperature"</em> aparecem 6 vezes em um texto, o tema é claramente relacionado
              ao clima — mesmo que você não entenda 40% do restante.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Conectivos como Guias de Sentido</h3>
            <p>
              Conectivos revelam a relação lógica entre ideias: <em>however, but, yet</em>
              = contraste; <em>because, since, as</em> = causa; <em>therefore, thus, so</em>
              = consequência; <em>although, even though</em> = concessão. Localizá-los
              orienta a interpretação sem ler tudo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Topic Sentence de Cada Parágrafo</h3>
            <p>
              Em textos acadêmicos e jornalísticos anglófonos, a primeira frase do parágrafo
              quase sempre resume o ponto central daquele bloco. Leia só essas e você tem
              um resumo executivo do texto em poucos segundos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Tom e Modalidade Verbal</h3>
            <p>
              Palavras como <em>must, should, need to, have to</em> indicam obrigação ou
              recomendação — tom prescritivo. <em>May, might, could</em> indicam possibilidade
              — tom especulativo. Isso ajuda a identificar a posição do autor sem entender
              cada palavra.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Contexto das Alternativas</h3>
            <p>
              As próprias alternativas da questão são pistas. Se quatro delas tratam de
              "meio ambiente" e uma de "economia", o texto provavelmente é sobre questões
              ambientais — o que já orienta seu skimming.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Exemplo de estratégia com cognatos:</strong>
          <br />
          Trecho: <em>"The democratization of information through digital platforms has created
          unprecedented opportunities for cultural exchange, but also significant challenges
          for privacy and individual security."</em>
          <br /><br />
          Cognatos identificáveis: <em>democratization → democratização; information → informação;
          digital → digital; cultural → cultural; exchange → (menos óbvio); privacy → privacidade;
          individual → individual; security → segurança</em>.
          <br />
          Com apenas os cognatos, já é possível compreender o sentido geral do trecho.
        </div>

        <div className="lesson-highlight">
          <strong>Atenção aos falsos cognatos:</strong> Algumas palavras parecem ter o mesmo
          significado em português, mas têm sentido diferente em inglês. Os mais comuns no ENEM:
          <em> "actually"</em> = na verdade (não "atualmente"); <em>"pretend"</em> = fingir (não
          "pretender"); <em>"realize"</em> = perceber (não "realizar"); <em>"library"</em> = biblioteca
          (não "livraria"); <em>"sensible"</em> = sensato (não "sensível").
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Atenção</span>
        <h2>10. Dicas ENEM e Armadilhas Clássicas</h2>

        <p>
          O ENEM é uma prova sofisticada que testa interpretação — não memorização. As questões
          de inglês frequentemente incluem "pegadinhas" que eliminam candidatos que leram o texto
          de forma superficial ou que se deixaram levar por palavras isoladas. Conheça as armadilhas
          mais comuns para evitá-las.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Armadilha</th>
                <th>Como funciona</th>
                <th>Como evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Alternativa com palavra do texto</strong></td>
                <td>A alternativa incorreta copia palavras do texto, mas distorce o sentido</td>
                <td>Verifique o sentido, não apenas a presença da palavra</td>
              </tr>
              <tr>
                <td><strong>Informação verdadeira mas irrelevante</strong></td>
                <td>A alternativa é correta em geral, mas não responde à questão específica</td>
                <td>Volte sempre ao enunciado: o que exatamente está sendo perguntado?</td>
              </tr>
              <tr>
                <td><strong>Generalização excessiva</strong></td>
                <td>A alternativa vai além do que o texto afirma (usa "sempre", "nunca", "todos")</td>
                <td>Desconfie de absolutos — o texto provavelmente é mais matizado</td>
              </tr>
              <tr>
                <td><strong>Falso cognato</strong></td>
                <td>Uma palavra que parece ser cognato leva a uma tradução errada</td>
                <td>Teste o sentido no contexto; não traduza mecanicamente</td>
              </tr>
              <tr>
                <td><strong>Negação oculta</strong></td>
                <td>A questão pede o que o texto <em>NÃO</em> afirma — candidato responde o que afirma</td>
                <td>Leia o enunciado com cuidado, destacando termos como "exceto" e "não"</td>
              </tr>
              <tr>
                <td><strong>Confusão de parágrafo</strong></td>
                <td>A resposta está em outro parágrafo que não o mais óbvio</td>
                <td>Use scanning em todo o texto antes de confirmar a resposta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Checklist antes de marcar a resposta</h3>
            <p>
              1. A alternativa responde à pergunta do enunciado?
              <br />
              2. Está apoiada no texto (não na sua opinião)?
              <br />
              3. Não contradiz nenhuma parte do texto?
              <br />
              4. É a mais completa entre as corretas aparentes?
            </p>
          </div>
          <div className="lesson-card">
            <span>🚩</span>
            <h3>Sinais de Alerta nas Alternativas</h3>
            <p>
              Palavras absolutas nas alternativas frequentemente indicam resposta errada:
              <em> "always" (sempre), "never" (nunca), "all" (todos), "impossible" (impossível),
              "only" (somente)</em>. Textos reais raramente fazem afirmações absolutas.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica final de ouro:</strong> Quando duas alternativas parecem igualmente corretas,
          volte ao texto e pergunte: <em>"Qual delas o texto explicitamente suporta?"</em> A resposta
          correta do ENEM sempre tem ancoragem textual — você deve ser capaz de apontar o trecho que
          a justifica. Se não consegue apontar o trecho, a alternativa provavelmente está errada.
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>11. Exercícios Comentados</h2>

        <Exercise
          level="Básico"
          title="Identificação da Técnica Adequada"
          statement={
            <p>
              Você está lendo o seguinte enunciado de questão do ENEM:
              <br /><br />
              <em>"O texto foi escrito com o objetivo principal de..."</em>
              <br /><br />
              Qual técnica de leitura é mais adequada para responder essa questão?
            </p>
          }
          options={[
            { letter: "A", text: "Scanning, pois é necessário localizar uma informação específica no texto." },
            { letter: "B", text: "Leitura integral e detalhada, palavra por palavra, do texto inteiro." },
            { letter: "C", text: "Skimming, pois a questão pede compreensão do propósito geral do texto.", correct: true },
            { letter: "D", text: "Nenhuma técnica é necessária; a resposta está apenas nas alternativas." },
            { letter: "E", text: "Scanning da última frase do texto, que sempre contém o objetivo do autor." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C — Skimming</strong>. A questão pergunta sobre o
              "objetivo principal" do texto, o que requer uma compreensão da função comunicativa
              global — informar, persuadir, entreter, instruir etc. Isso é exatamente o que o
              skimming revela: o propósito e o tema geral. O scanning (A) seria usado para
              localizar um dado pontual, não para captar a intenção geral. A leitura integral (B)
              é desnecessariamente lenta para esse tipo de questão. A opção D está errada porque
              as alternativas precisam ser verificadas no texto. E está errada: a última frase pode
              ou não conter o objetivo — é uma generalização inválida.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Uso do Scanning com Pistas Visuais"
          statement={
            <p>
              Leia o trecho de um artigo:
              <br /><br />
              <em>"The global average temperature has risen by <strong>1.1°C</strong> since
              pre-industrial times. In <strong>2023</strong>, scientists at the{" "}
              <strong>University of Oxford</strong> confirmed that extreme weather events
              are becoming more frequent. According to <strong>Dr. Elena Vasquez</strong>,
              'We have approximately <strong>10 years</strong> to make the necessary changes
              before the effects become irreversible.'"</em>
              <br /><br />
              A questão pede: <em>"Segundo o texto, quem afirma que as mudanças necessárias devem
              ocorrer nos próximos 10 anos?"</em>
              <br /><br />
              Qual elemento visual você usaria para localizar a resposta via scanning?
            </p>
          }
          options={[
            { letter: "A", text: "O número '1.1°C', pois indica a informação mais relevante do texto." },
            { letter: "B", text: "O nome próprio em negrito 'Dr. Elena Vasquez', pois a questão pergunta sobre quem fez a afirmação.", correct: true },
            { letter: "C", text: "O ano '2023', pois indica quando o evento ocorreu." },
            { letter: "D", text: "A palavra 'irreversible', pois é o conceito mais importante da citação." },
            { letter: "E", text: "A expressão 'University of Oxford', pois é a fonte das informações do texto." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B — Dr. Elena Vasquez</strong>. A questão pergunta
              especificamente <em>quem</em> faz a afirmação sobre os 10 anos. A pista de scanning
              mais eficiente é um <strong>nome próprio</strong> — visualmente destacado por letra
              maiúscula e negrito no texto. Ao vasculhar o texto em busca de um nome de pessoa,
              seus olhos chegam imediatamente a "Dr. Elena Vasquez", confirmando que ela é a fonte
              da afirmação. As outras opções são elementos igualmente visíveis, mas nenhum responde
              à pergunta "quem". Esta questão demonstra como o scanning eficiente começa por
              definir <em>o que procurar</em> antes de varrer o texto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Elementos Paratextuais e Intenção Comunicativa"
          statement={
            <p>
              Observe os seguintes elementos de um texto (sem ler o corpo):
              <br /><br />
              <strong>Título:</strong> <em>"Why Your Smartphone Is Ruining Your Sleep"</em>
              <br />
              <strong>Subtítulo:</strong> <em>"Research shows blue light exposure at night disrupts
              melatonin production"</em>
              <br />
              <strong>Fonte:</strong> <em>Harvard Health Publishing, 2024</em>
              <br />
              <strong>Imagem:</strong> Pessoa na cama usando celular no escuro
              <br />
              <strong>Legenda:</strong> <em>"Late-night screen use is linked to poor sleep quality
              and next-day fatigue"</em>
              <br /><br />
              Com base apenas nesses elementos paratextuais, qual é a afirmação mais precisa
              sobre o texto?
            </p>
          }
          options={[
            { letter: "A", text: "O texto é um anúncio publicitário de aplicativos para melhorar o sono." },
            { letter: "B", text: "O texto é um artigo de divulgação científica que informa sobre os efeitos negativos do uso de smartphones à noite no sono.", correct: true },
            { letter: "C", text: "O texto defende que smartphones devem ser proibidos nos quartos de dormir." },
            { letter: "D", text: "O texto é uma reportagem sobre a indústria de smartphones e seus problemas de design." },
            { letter: "E", text: "O texto apresenta dicas práticas para usar o celular sem prejudicar o sono." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. Os elementos paratextuais revelam tudo:
              (1) o <strong>título</strong> usa linguagem direta e assertiva — "is ruining" — com
              tom informativo-alarmante, típico de divulgação científica; (2) o <strong>subtítulo</strong>{" "}
              menciona "research shows" e dados científicos (melatonina, luz azul), confirmando
              base empírica; (3) a <strong>fonte</strong> é Harvard Health Publishing — publicação
              científica de saúde respeitada, não uma empresa de tecnologia nem uma revista de
              lifestyle; (4) a <strong>imagem e legenda</strong> reforçam o argumento central.
              Nenhuma alternativa incorreta é suportada por esses elementos: não há menção a
              proibição (C), à indústria (D) ou a dicas práticas (E), e a fonte afasta qualquer
              leitura publicitária (A). Este exercício demonstra que os paratextos frequentemente
              bastam para responder questões sobre gênero e propósito.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Leitura em Camadas na Prática"
          statement={
            <p>
              Leia o texto abaixo e responda à questão usando a técnica mais eficiente:
              <br /><br />
              <em>
                <strong>Urban Farming: Growing Food in the City</strong>
                <br />
                <em>How rooftop gardens and vertical farms are transforming food security in
                megacities</em>
                <br /><br />
                Cities around the world are facing unprecedented pressure on food systems. As
                urban populations grow, the demand for fresh produce increases, while agricultural
                land shrinks. In response, a new movement is taking root — literally.
                <br /><br />
                Urban farming encompasses a range of practices: rooftop gardens, vertical farms,
                community plots, and hydroponic systems. These initiatives produce fresh vegetables
                and herbs within city limits, reducing transportation costs and carbon emissions.
                <br /><br />
                In Singapore, vertical farms already supply 10% of the city's leafy vegetables.
                In New York, over 800 rooftop gardens have been registered since 2015. Advocates
                argue that urban farming not only provides food but also strengthens community
                bonds and improves mental health.
                <br /><br />
                Critics, however, point out that urban farming cannot replace conventional
                agriculture at scale. The cost of setting up hydroponic systems remains high, and
                the energy consumption of indoor vertical farms can be significant.
              </em>
              <br /><br />
              A questão: <em>"De acordo com o texto, qual é uma <strong>desvantagem</strong>
              apontada pelos críticos da agricultura urbana?"</em>
            </p>
          }
          options={[
            { letter: "A", text: "A agricultura urbana prejudica os laços comunitários nas cidades." },
            { letter: "B", text: "Os sistemas hidropônicos têm baixo custo, mas alta complexidade técnica." },
            { letter: "C", text: "A agricultura urbana não pode substituir a agricultura convencional em escala e tem custos e consumo energético elevados.", correct: true },
            { letter: "D", text: "Singapura e Nova York são os únicos lugares onde a agricultura urbana funciona." },
            { letter: "E", text: "A agricultura urbana aumenta os custos de transporte de alimentos." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. A palavra-chave da questão é{" "}
              <strong>"desvantagem"</strong> — isso indica scanning no texto em busca de linguagem
              crítica. A pista de scanning é o conectivo <strong>"however"</strong> (no entanto),
              que sinaliza contraste e introduz a perspectiva dos críticos. O último parágrafo
              começa com <em>"Critics, however, point out..."</em> — exatamente onde estão as
              desvantagens. Lendo aquele parágrafo: (1) não pode substituir a agricultura
              convencional em escala; (2) custo elevado dos sistemas hidropônicos; (3) alto
              consumo energético dos fazendas verticais internas. A alternativa C captura todas
              essas desvantagens. As demais alternativas contradizem o texto (A inverte o que
              foi dito; B erra ao dizer "baixo custo"; D é uma generalização não sustentada; E
              é o oposto do que o texto afirma — a agricultura urbana <em>reduz</em> custos de
              transporte).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Falsos Cognatos e Contexto"
          statement={
            <p>
              Leia o trecho:
              <br /><br />
              <em>"The scientist decided to <strong>pretend</strong> she had not seen the data
              inconsistency, hoping the peer reviewers would not notice. Later, her supervisor
              asked her to be more <strong>sensible</strong> in her approach to data
              interpretation."</em>
              <br /><br />
              Assinale a alternativa que apresenta a tradução <strong>correta</strong> das
              palavras destacadas:
            </p>
          }
          options={[
            { letter: "A", text: "'Pretend' = pretender; 'sensible' = sensível" },
            { letter: "B", text: "'Pretend' = fingir; 'sensible' = sensível" },
            { letter: "C", text: "'Pretend' = pretender; 'sensible' = sensato" },
            { letter: "D", text: "'Pretend' = fingir; 'sensible' = sensato", correct: true },
            { letter: "E", text: "'Pretend' = tentar; 'sensible' = razoável" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>D</strong>. Ambas as palavras são <strong>falsos
              cognatos</strong> clássicos. <em>"Pretend"</em> em inglês significa "fingir, fazer
              de conta" — e o contexto confirma isso: a cientista fingia não ter visto a
              inconsistência nos dados. O verbo em português "pretender" (= ter intenção) seria
              traduzido em inglês como <em>to intend</em>. <em>"Sensible"</em> em inglês
              significa "sensato, prudente, racional" — e o contexto confirma: o supervisor pede
              uma abordagem mais racional e cuidadosa. A palavra em português "sensível"
              (= emotivo, delicado) seria traduzida como <em>sensitive</em> em inglês. Esse
              exercício ilustra por que é fundamental verificar o significado no contexto, não
              apenas pela semelhança visual com palavras portuguesas. O ENEM frequentemente
              usa falsos cognatos para testar exatamente essa habilidade de leitura crítica.
            </p>
          }
        />
      </section>
    </article>
  );
}
