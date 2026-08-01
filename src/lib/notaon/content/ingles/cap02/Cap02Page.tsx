"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 02</span>
          <h1>Como interpretar textos em inglês mesmo sem ser fluente</h1>
          <p>
            Você não precisa entender cada palavra de um texto em inglês para
            responder corretamente às questões do ENEM. Leitores proficientes
            usam uma série de <strong>estratégias cognitivas</strong> que permitem
            extrair sentido de textos em qualquer idioma — e você vai dominar
            essas estratégias neste capítulo.
          </p>
          <p>
            Técnicas como <em>skimming</em>, <em>scanning</em>, uso de conhecimento
            prévio e identificação de estrutura textual transformam o inglês de um
            obstáculo em uma fonte segura de pontos na prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Princípio fundamental</span>
        <h2>1. A Diferença entre "Ler" e "Traduzir"</h2>
        <p>
          O maior erro dos estudantes ao enfrentar um texto em inglês é tentar{" "}
          <strong>traduzir mentalmente palavra por palavra</strong>. Essa estratégia
          é lenta, consome energia cognitiva e frequentemente gera confusão —
          porque nem toda palavra tem tradução direta, e o sentido de uma frase
          depende do conjunto, não de cada elemento isolado.
        </p>
        <p>
          Leitores eficientes (mesmo em seu próprio idioma) não processam cada
          palavra individualmente. Eles usam o <strong>contexto</strong>, a{" "}
          <strong>estrutura frasal</strong>, o <strong>conhecimento de mundo</strong>{" "}
          e pistas visuais para construir o sentido do texto de forma global.
        </p>
        <div className="lesson-highlight">
          <strong>Experimento mental:</strong> Leia esta frase em inglês e veja
          se consegue entender o sentido sem traduzir:{" "}
          <em>"Scientists warn that climate change is accelerating faster than
          predicted, threatening coastal cities worldwide."</em> — Provavelmente
          você captou o sentido: cientistas alertam sobre mudanças climáticas
          ameaçando cidades costeiras. Você usou cognatos (scientists, climate,
          cities, coastal) e conhecimento de mundo, não tradução.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 1</span>
        <h2>2. Skimming — Leitura Global para Captar o Tema</h2>
        <p>
          <strong>Skimming</strong> é a técnica de passar os olhos rapidamente
          pelo texto para captar a <strong>ideia geral</strong> sem ler cada
          palavra. É o que você faz quando folheia um jornal procurando uma
          notícia interessante.
        </p>
        <p>Como aplicar o skimming em uma questão do ENEM:</p>
        <ul>
          <li>Leia o <strong>título</strong> (quando houver) — geralmente resume o tema.</li>
          <li>Leia a <strong>primeira frase de cada parágrafo</strong> — costuma conter a ideia principal do parágrafo.</li>
          <li>Observe <strong>palavras em negrito, itálico ou aspas</strong> — estão destacadas por um motivo.</li>
          <li>Observe <strong>números, datas e nomes próprios</strong> — são informações concretas que ajudam a situar o texto.</li>
          <li>Leia a <strong>última frase do texto</strong> — frequentemente contém a conclusão ou o ponto de vista do autor.</li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento do texto</th>
                <th>O que revela</th>
                <th>Exemplo (em inglês)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td>Tema central</td>
                <td><em>"Why plastic pollution is killing our oceans"</em></td>
              </tr>
              <tr>
                <td>1ª frase do 1º parágrafo</td>
                <td>Contexto e introdução</td>
                <td><em>"Every year, millions of tons of plastic enter the ocean."</em></td>
              </tr>
              <tr>
                <td>1ª frase dos parágrafos seguintes</td>
                <td>Desenvolvimento dos argumentos</td>
                <td><em>"Marine animals are the most affected by this pollution."</em></td>
              </tr>
              <tr>
                <td>Última frase</td>
                <td>Conclusão/posicionamento</td>
                <td><em>"Governments must act now before it is too late."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> No skimming, você deve conseguir responder
          a pergunta "Do que trata esse texto?" em menos de 30 segundos. Se não
          conseguir, leia os títulos e primeiras frases novamente antes de ir
          às alternativas.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 2</span>
        <h2>3. Scanning — Localização de Informação Específica</h2>
        <p>
          <strong>Scanning</strong> é a técnica de varrer o texto em busca de
          uma <strong>informação específica</strong>, sem ler tudo. É o que você
          faz quando procura um número de telefone em uma lista.
        </p>
        <p>
          No ENEM, use scanning depois de ler o enunciado da questão. Se a
          pergunta é sobre a origem de um problema, escaneie o texto procurando
          palavras como <em>cause, origin, because, due to, result of</em>. Se
          a pergunta é sobre consequências, procure <em>therefore, as a result,
          consequently, thus, so</em>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Palavras de causa</h3>
            <p><em>because, since, due to, caused by, as a result of, owing to</em></p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Palavras de consequência</h3>
            <p><em>therefore, thus, consequently, as a result, so, hence</em></p>
          </div>
          <div className="lesson-card">
            <span>🆚</span>
            <h3>Palavras de contraste</h3>
            <p><em>however, but, although, despite, on the other hand, yet</em></p>
          </div>
          <div className="lesson-card">
            <span>➕</span>
            <h3>Palavras de adição</h3>
            <p><em>also, furthermore, moreover, in addition, besides, additionally</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 (SVG 1) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>4. Skimming vs. Scanning: quando usar cada técnica</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            aria-label="Comparativo entre técnicas de skimming e scanning com indicação de quando usar cada uma"
            role="img"
          >
            {/* Skimming */}
            <rect x="20" y="20" width="310" height="200" rx="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
            <rect x="20" y="20" width="310" height="44" rx="12" fill="#7c3aed" />
            <text x="175" y="38" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">SKIMMING</text>
            <text x="175" y="56" textAnchor="middle" fill="white" fontSize="12">Leitura global / varredura</text>
            <text x="40" y="90" fill="#4c1d95" fontSize="12">✓ Captar o tema geral</text>
            <text x="40" y="112" fill="#4c1d95" fontSize="12">✓ Identificar o gênero textual</text>
            <text x="40" y="134" fill="#4c1d95" fontSize="12">✓ Reconhecer a estrutura</text>
            <text x="40" y="156" fill="#4c1d95" fontSize="12">✓ Primeira leitura, rápida</text>
            <text x="40" y="178" fill="#4c1d95" fontSize="12">⏱ 20 a 40 segundos</text>
            <text x="40" y="200" fill="#4c1d95" fontSize="11" fontStyle="italic">Quando? SEMPRE primeiro</text>

            {/* Scanning */}
            <rect x="370" y="20" width="310" height="200" rx="12" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <rect x="370" y="20" width="310" height="44" rx="12" fill="#059669" />
            <text x="525" y="38" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">SCANNING</text>
            <text x="525" y="56" textAnchor="middle" fill="white" fontSize="12">Busca de informação específica</text>
            <text x="390" y="90" fill="#065f46" fontSize="12">✓ Localizar dado específico</text>
            <text x="390" y="112" fill="#065f46" fontSize="12">✓ Encontrar palavra/expressão</text>
            <text x="390" y="134" fill="#065f46" fontSize="12">✓ Verificar detalhe cobrado</text>
            <text x="390" y="156" fill="#065f46" fontSize="12">✓ Após ler o enunciado</text>
            <text x="390" y="178" fill="#065f46" fontSize="12">⏱ 30 a 60 segundos</text>
            <text x="390" y="200" fill="#065f46" fontSize="11" fontStyle="italic">Quando? Após o skimming</text>

            {/* VS no centro */}
            <circle cx="350" cy="120" r="20" fill="#f59e0b" />
            <text x="350" y="126" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">VS</text>
          </svg>
          <figcaption>Skimming e scanning são técnicas complementares: use sempre o skimming primeiro para ter uma visão geral, depois o scanning para localizar a informação específica pedida pela questão.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 3</span>
        <h2>5. Conhecimento de Mundo como Âncora de Compreensão</h2>
        <p>
          Seu <strong>conhecimento prévio</strong> sobre um assunto é uma poderosa
          ferramenta de compreensão. Quando você lê um texto sobre aquecimento
          global em inglês, seu cérebro já tem um "mapa" do tema — sabe que se
          trata de aumento de temperatura, emissão de gases, derretimento de
          geleiras, etc. Esse mapa ativa automaticamente a compreensão de palavras
          e expressões relacionadas.
        </p>
        <p>
          Exemplos de como o conhecimento de mundo ajuda na leitura:
        </p>
        <ul>
          <li>
            Você não conhece a palavra <em>deforestation</em>, mas o texto fala
            de Amazônia, árvores e carbono — você infere que se trata de
            desmatamento.
          </li>
          <li>
            Você não conhece <em>incumbent</em>, mas o texto é sobre eleições e
            fala de alguém que "está no poder atualmente" — você infere que é o
            candidato atual.
          </li>
          <li>
            Você não conhece <em>malnourished</em>, mas o contexto fala de crianças
            em países pobres sem acesso a alimentos — você infere desnutrição.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Estratégia:</strong> Antes de ler o texto, passe 5 segundos
          observando imagens, legendas, título e suporte. Esses elementos ativam
          seu conhecimento de mundo e preparam seu cérebro para a leitura.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 4</span>
        <h2>6. Identificação de Palavras-Chave</h2>
        <p>
          Em qualquer texto, existe um conjunto de{" "}
          <strong>palavras-chave</strong> que carregam o peso semântico principal.
          Essas palavras (geralmente substantivos e verbos) são repetidas ou
          retomadas por sinônimos ao longo do texto. Identificá-las é suficiente
          para compreender o essencial.
        </p>
        <p>
          Veja um exemplo de como as palavras-chave se distribuem em um parágrafo:
        </p>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
          <p style={{ fontStyle: "italic", marginBottom: "8px" }}>
            "The <strong>Amazon rainforest</strong> plays a crucial role in
            regulating the <strong>global climate</strong>. Its vast canopy
            absorbs <strong>carbon dioxide</strong> and releases{" "}
            <strong>oxygen</strong>, making it essential for life on{" "}
            <strong>Earth</strong>. However, <strong>deforestation</strong> is
            rapidly destroying this vital ecosystem."
          </p>
          <p style={{ fontSize: "0.9em", color: "#4a5568" }}>
            Palavras-chave (em negrito): Amazon rainforest, global climate,
            carbon dioxide, oxygen, Earth, deforestation. Só essas 6 palavras
            já permitem entender o texto inteiro.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de palavra-chave</th>
                <th>Função</th>
                <th>Dica de identificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Substantivos concretos</td>
                <td>Indicam o "objeto" do texto</td>
                <td>Aparecem repetidos ou com pronomes (it, they, this)</td>
              </tr>
              <tr>
                <td>Substantivos abstratos</td>
                <td>Indicam conceitos centrais</td>
                <td>Frequentemente no título ou na tese do texto</td>
              </tr>
              <tr>
                <td>Verbos de ação principal</td>
                <td>Indicam o que acontece</td>
                <td>Geralmente no início das sentenças-tópico</td>
              </tr>
              <tr>
                <td>Adjetivos avaliativos</td>
                <td>Revelam o posicionamento do autor</td>
                <td>Palavras como <em>crucial, alarming, effective, harmful</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 5</span>
        <h2>7. Estrutura Textual como Guia de Leitura</h2>
        <p>
          Textos são organizados de forma <strong>previsível</strong> segundo seu
          gênero. Conhecer essa organização ajuda a antecipar onde encontrar cada
          tipo de informação:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Artigo jornalístico</h3>
            <p><strong>Pirâmide invertida:</strong> informação mais importante no início. Quem, o quê, quando, onde, por quê na 1ª frase.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Texto argumentativo</h3>
            <p><strong>Tese → argumentos → conclusão.</strong> A opinião do autor está na introdução e na conclusão.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Propaganda</h3>
            <p><strong>Slogan + apelo emocional + call to action.</strong> O verbo no imperativo indica o que o texto quer que você faça.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Tirinha/HQ</h3>
            <p><strong>Setup → punch line.</strong> A piada ou crítica está sempre no último quadrinho.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 (SVG 2) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa mental</span>
        <h2>8. As 5 Estratégias de Leitura para o ENEM</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            aria-label="Mapa mental das 5 estratégias de leitura para o ENEM de inglês"
            role="img"
          >
            {/* Centro */}
            <ellipse cx="350" cy="140" rx="80" ry="40" fill="#4f46e5" />
            <text x="350" y="134" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">LEITURA</text>
            <text x="350" y="150" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">EFICIENTE</text>

            {/* Skimming */}
            <rect x="30" y="20" width="140" height="50" rx="8" fill="#7c3aed" />
            <text x="100" y="42" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1. Skimming</text>
            <text x="100" y="60" textAnchor="middle" fill="white" fontSize="10">Visão geral</text>
            <line x1="170" y1="45" x2="272" y2="118" stroke="#7c3aed" strokeWidth="2" />

            {/* Scanning */}
            <rect x="530" y="20" width="140" height="50" rx="8" fill="#059669" />
            <text x="600" y="42" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2. Scanning</text>
            <text x="600" y="60" textAnchor="middle" fill="white" fontSize="10">Busca específica</text>
            <line x1="530" y1="45" x2="428" y2="118" stroke="#059669" strokeWidth="2" />

            {/* Conhecimento de mundo */}
            <rect x="20" y="200" width="160" height="50" rx="8" fill="#d97706" />
            <text x="100" y="222" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3. Conhec. de mundo</text>
            <text x="100" y="240" textAnchor="middle" fill="white" fontSize="10">Contexto cultural</text>
            <line x1="180" y1="225" x2="272" y2="162" stroke="#d97706" strokeWidth="2" />

            {/* Palavras-chave */}
            <rect x="520" y="200" width="155" height="50" rx="8" fill="#dc2626" />
            <text x="597" y="222" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">4. Palavras-chave</text>
            <text x="597" y="240" textAnchor="middle" fill="white" fontSize="10">Âncoras semânticas</text>
            <line x1="520" y1="225" x2="428" y2="162" stroke="#dc2626" strokeWidth="2" />

            {/* Estrutura textual */}
            <rect x="270" y="240" width="160" height="40" rx="8" fill="#0891b2" />
            <text x="350" y="258" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">5. Estrutura textual</text>
            <text x="350" y="274" textAnchor="middle" fill="white" fontSize="10">Gênero e organização</text>
            <line x1="350" y1="240" x2="350" y2="180" stroke="#0891b2" strokeWidth="2" />
          </svg>
          <figcaption>As 5 estratégias de leitura eficiente para o ENEM. Usadas em conjunto, elas permitem compreender textos em inglês sem necessidade de fluência plena.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inferência</span>
        <h2>9. Como Inferir o Sentido sem Conhecer a Palavra</h2>
        <p>
          Inferir é deduzir o sentido de algo a partir de pistas disponíveis.
          No ENEM, essa habilidade (H27) é constantemente avaliada. Veja as
          principais estratégias de inferência:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estratégia</th>
                <th>Como funciona</th>
                <th>Exemplo em inglês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contexto imediato</td>
                <td>A frase ao redor da palavra dá o sentido</td>
                <td><em>"The <strong>drought</strong> left no water in the rivers"</em> → seca</td>
              </tr>
              <tr>
                <td>Contraste</td>
                <td>O oposto da palavra é dado no mesmo trecho</td>
                <td><em>"Unlike the wealthy, the <strong>destitute</strong> had nothing"</em> → miserável</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>Exemplos após a palavra revelam o sentido</td>
                <td><em>"Fruits, such as <strong>mango</strong> and papaya"</em> → manga</td>
              </tr>
              <tr>
                <td>Estrutura morfológica</td>
                <td>Prefixo/sufixo revela o significado</td>
                <td><em>"<strong>Unacceptable</strong>"</em> = un + accept + able = não aceitável</td>
              </tr>
              <tr>
                <td>Cognato</td>
                <td>Palavra parecida com o português</td>
                <td><em>"<strong>Technology</strong>"</em> = tecnologia</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Exercício mental:</strong> Quando você encontrar uma palavra
          desconhecida em inglês, não abandone a frase. Pergunte-se: "O que
          faz sentido aqui com base no contexto?" Na maioria dos casos, você
          vai acertar a família semântica da palavra, o que é suficiente para
          responder a questão.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática guiada</span>
        <h2>10. Exemplo Prático: Aplicando as Estratégias</h2>
        <p>
          Veja como aplicar todas as estratégias a um texto real:
        </p>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Texto (adaptado):</p>
          <p style={{ fontStyle: "italic" }}>
            "Social media platforms have become powerful tools for spreading both
            information and misinformation. While they allow people to connect
            across borders, experts warn that algorithms designed to maximize
            engagement often amplify sensational and misleading content. Several
            countries are now debating legislation to regulate these platforms
            and hold them accountable for harmful content."
          </p>
        </div>
        <p>Aplicando as estratégias:</p>
        <ul>
          <li>
            <strong>Skimming:</strong> Tema = redes sociais, desinformação,
            regulação governamental.
          </li>
          <li>
            <strong>Palavras-chave:</strong> social media, misinformation,
            algorithms, engagement, legislation.
          </li>
          <li>
            <strong>Conhecimento de mundo:</strong> Você sabe que há debate
            global sobre regulação de redes sociais — isso confirma o tema.
          </li>
          <li>
            <strong>Inferência:</strong> <em>Misinformation</em> = "mis" (errado)
            + "information" = informação errada = desinformação.
          </li>
          <li>
            <strong>Estrutura:</strong> Argumento inicial (poder das redes) +
            contraponto (perigos) + solução proposta (legislação).
          </li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Pratique esse método com textos de jornais
          em inglês. BBC, CNN e The Guardian têm textos de nível perfeito para
          o ENEM. Leia 2 textos por semana aplicando essas 5 estratégias.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Skimming — identificação do tema"
          statement={
            <div>
              <p>Leia o título e a primeira frase do texto abaixo e identifique o tema central:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                <strong>Urban Farming: Growing Food in the City</strong><br />
                "As cities grow larger and farmland becomes scarcer, urban farming
                has emerged as a creative solution to food security challenges."
              </p>
              <p>Com base no skimming, o tema central do texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "O crescimento desordenado das cidades modernas e seus problemas urbanísticos." },
            { letter: "B", text: "A agricultura urbana como alternativa para garantir a segurança alimentar.", correct: true },
            { letter: "C", text: "A redução das áreas rurais e o êxodo da população do campo para a cidade." },
            { letter: "D", text: "Técnicas tradicionais de cultivo em fazendas do interior." },
            { letter: "E", text: "A escassez de alimentos causada pelo crescimento populacional global." },
          ]}
          resolution={
            <p>
              O título <em>"Urban Farming: Growing Food in the City"</em> já
              entrega o tema: <strong>agricultura urbana</strong>. A primeira frase
              confirma: surge como solução para segurança alimentar. Aplicando
              skimming — leitura do título + primeira frase — o tema fica
              imediatamente claro. As demais alternativas capturam elementos
              secundários (crescimento das cidades, escassez de terras), mas não
              o tema central.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Inferência de vocabulário pelo contexto"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The new policy was <strong>controversial</strong>: while supporters
                praised it as a historic breakthrough, opponents strongly criticized
                it as an attack on personal freedoms."
              </p>
              <p>
                Com base no contexto, a palavra <strong>controversial</strong> significa:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Unanimemente aceita e elogiada por todos os grupos." },
            { letter: "B", text: "Que gera debate e opiniões divergentes; polêmica.", correct: true },
            { letter: "C", text: "Relacionada a questões econômicas e financeiras." },
            { letter: "D", text: "Proibida por lei e sujeita a punições legais." },
            { letter: "E", text: "Esquecida rapidamente após a publicação." },
          ]}
          resolution={
            <p>
              A estratégia de <strong>contraste</strong> funciona aqui: a frase
              apresenta dois grupos opostos — apoiadores (<em>praised</em>) e
              opositores (<em>strongly criticized</em>). Quando algo divide opiniões
              dessa forma, é <strong>polêmico/controverso</strong>. A alternativa
              A é o oposto (unanimidade). As demais não têm base no texto.
              <em> Controversial</em> é um cognato do português "controverso" —
              reforço adicional da resposta B.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Scanning — localização de informação específica"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Researchers at the University of São Paulo have developed a
                biodegradable plastic made from sugarcane. The material decomposes
                in just 18 months, compared to the 400 years required for
                conventional plastic. The team hopes to begin commercial production
                by 2027. However, critics point out that the production cost is
                still three times higher than that of regular plastic."
              </p>
              <p>
                De acordo com o texto, qual é a principal desvantagem do plástico
                biodegradável desenvolvido pelos pesquisadores?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O material leva 400 anos para se decompor no meio ambiente." },
            { letter: "B", text: "A produção comercial só começa em 2027, o que atrasa sua disponibilidade." },
            { letter: "C", text: "O custo de produção é três vezes maior do que o do plástico convencional.", correct: true },
            { letter: "D", text: "O plástico é feito de cana-de-açúcar, um recurso que pode escassear." },
            { letter: "E", text: "A Universidade de São Paulo não tem parceiros industriais para a produção." },
          ]}
          resolution={
            <p>
              Usando scanning, procure a palavra <em>critic</em> ou termos de
              contraponto como <em>however</em>. A frase{" "}
              <em>"However, critics point out that the production cost is still
              three times higher"</em> indica claramente a desvantagem: custo
              3x maior. A alternativa A descreve o plástico <em>convencional</em>
              (400 anos), não o biodegradável. B é uma informação do texto, mas
              não é apresentada como desvantagem. D e E não têm base no texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Conhecimento de mundo + estrutura textual"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Save water. Save life."<br />
                <span style={{ fontSize: "0.9em" }}>[Imagem: torneira com poucas gotas d'água e planeta Terra ao fundo]</span>
              </p>
              <p>
                O texto acima, considerando seu suporte e estrutura, pertence ao
                gênero e tem como principal objetivo:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Artigo científico — informar sobre a escassez hídrica no mundo." },
            { letter: "B", text: "Notícia jornalística — relatar um evento relacionado à falta d'água." },
            { letter: "C", text: "Campanha de conscientização — persuadir o leitor a economizar água.", correct: true },
            { letter: "D", text: "Poema — expressar emoções sobre a beleza da natureza." },
            { letter: "E", text: "Manual de instruções — orientar o uso correto de torneiras." },
          ]}
          resolution={
            <p>
              O texto usa um <strong>slogan</strong> (frase curta, paralela,
              imperativa: <em>Save water. Save life.</em>) e uma imagem simbólica.
              Essas características são típicas de <strong>campanhas de
              conscientização / propaganda</strong>. O verbo no imperativo
              (<em>Save</em>) indica intenção persuasiva: convencer o leitor a
              mudar de comportamento. Conhecimento de mundo: campanhas de
              preservação de recursos naturais são muito comuns nesse formato.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Aplicação integrada das estratégias"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Despite being one of the richest countries in natural resources,
                Brazil still faces significant challenges in translating this wealth
                into quality education, healthcare, and infrastructure for all its
                citizens. Experts argue that corruption and poor management of public
                funds are the main obstacles to development."
              </p>
              <p>
                O texto argumenta que o principal obstáculo ao desenvolvimento
                do Brasil é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "A falta de recursos naturais no território brasileiro." },
            { letter: "B", text: "A ausência de especialistas qualificados em gestão pública." },
            { letter: "C", text: "A corrupção e a má gestão dos recursos públicos.", correct: true },
            { letter: "D", text: "O baixo nível de riqueza natural do país em comparação com outras nações." },
            { letter: "E", text: "A falta de acesso dos cidadãos às informações sobre o governo." },
          ]}
          resolution={
            <p>
              Usando scanning, localize <em>"main obstacles"</em> — os
              principais obstáculos. O texto diz: <em>"corruption and poor
              management of public funds are the main obstacles"</em> =
              corrupção e má gestão dos fundos públicos. A alternativa C
              corresponde diretamente. A A contradiz a primeira frase (Brazil
              IS rich in resources). D inverte a lógica. B e E não aparecem
              no texto. Cognatos úteis: <em>corruption</em> = corrupção;{" "}
              <em>management</em> = gestão; <em>obstacles</em> = obstáculos.
            </p>
          }
        />
      </section>
    </article>
  );
}
