"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 01</span>
          <h1>O que o ENEM cobra em Espanhol: competências, habilidades e estratégias de leitura</h1>
          <p>
            O ENEM oferece Espanhol como uma das duas opções de Língua Estrangeira (a outra é Inglês), e a prova é composta por 5 questões aplicadas na segunda fase do exame. Diferentemente de um exame de proficiência, o ENEM não avalia gramática isolada nem tradução literal: o foco está na <strong>leitura e interpretação de textos autênticos</strong> em língua espanhola. Isso significa que mesmo candidatos com pouco contato formal com o idioma podem obter boas notas se dominarem as estratégias certas. Neste capítulo, você vai entender o que o ENEM realmente exige, quais competências são avaliadas, como os textos se organizam e de que forma planejar seus estudos para maximizar seu desempenho nas questões de Espanhol.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura do Exame</span>
        <h2>1. Como o Espanhol aparece no ENEM</h2>
        <p>
          Na segunda fase do ENEM (Linguagens, Códigos e suas Tecnologias + Redação), o candidato escolhe entre Inglês e Espanhol como língua estrangeira. Essa escolha é feita no próprio caderno de provas e vale para as <strong>5 questões exclusivas de língua estrangeira</strong>. As demais questões da prova (português, literatura, artes, educação física, tecnologia) são respondidas por todos os candidatos independentemente da escolha de idioma. É crucial compreender que essas 5 questões representam aproximadamente 11% da nota de Linguagens, tornando-as estrategicamente relevantes — especialmente porque o Espanhol costuma ser considerado mais acessível para falantes do Português.
        </p>
        <div className="lesson-highlight">
          <strong>Dado importante:</strong> Segundo o INEP, entre 60% e 70% dos candidatos optam pelo Inglês, mas candidatos que escolhem Espanhol tendem a apresentar desempenho ligeiramente superior nessas questões, provavelmente por conta da proximidade linguística com o Português.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Inglês (LE I)</th>
                <th>Espanhol (LE II)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nº de questões</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Tipo de questão</td>
                <td>Múltipla escolha (A–E)</td>
                <td>Múltipla escolha (A–E)</td>
              </tr>
              <tr>
                <td>Foco principal</td>
                <td>Leitura e interpretação</td>
                <td>Leitura e interpretação</td>
              </tr>
              <tr>
                <td>Gramática isolada</td>
                <td>Não cobrada diretamente</td>
                <td>Não cobrada diretamente</td>
              </tr>
              <tr>
                <td>Proximidade com o Português</td>
                <td>Baixa</td>
                <td>Alta (ambas são românicas)</td>
              </tr>
              <tr>
                <td>Estratégia para "não falantes"</td>
                <td>Difícil sem estudo prévio</td>
                <td>Viável com estratégias de leitura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Competências Avaliadas</span>
        <h2>2. As competências e habilidades cobradas pelo ENEM</h2>
        <p>
          O ENEM organiza o currículo em competências amplas e habilidades específicas. Para Língua Estrangeira, a competência central é a <strong>Competência 7</strong>: confrontar opiniões e pontos de vista sobre as diferentes linguagens e suas manifestações específicas. Dentro dessa competência, as habilidades mais frequentes nas questões de Espanhol envolvem: reconhecer o efeito de sentido produzido por escolhas lexicais e gramaticais, identificar o gênero discursivo e seu propósito comunicativo, inferir informações implícitas, e reconhecer a variação linguística em textos de diferentes épocas e regiões.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Habilidade 1</h3>
            <p>Identificar o tema central e o propósito comunicativo do texto (informar, convencer, entreter, instruir).</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Habilidade 2</h3>
            <p>Inferir o significado de palavras e expressões a partir do contexto, sem necessidade de tradução direta.</p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Habilidade 3</h3>
            <p>Reconhecer o gênero textual e suas características formais: notícia, poema, anúncio, crônica, conto etc.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Habilidade 4</h3>
            <p>Identificar recursos argumentativos e de persuasão, como ironias, metáforas e figuras de linguagem em espanhol.</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Habilidade ENEM</th>
                <th>O que testa</th>
                <th>Exemplo de questão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H25</td>
                <td>Identificar variações linguísticas</td>
                <td>Palavras de variedades latino-americanas vs. espanhol peninsular</td>
              </tr>
              <tr>
                <td>H26</td>
                <td>Compreender o papel do interlocutor</td>
                <td>Para quem o texto foi escrito e com que finalidade</td>
              </tr>
              <tr>
                <td>H27</td>
                <td>Reconhecer o gênero textual</td>
                <td>Distinguir reportagem de artigo de opinião em espanhol</td>
              </tr>
              <tr>
                <td>H28</td>
                <td>Inferir sentidos implícitos</td>
                <td>O que o autor subentende mas não diz explicitamente</td>
              </tr>
              <tr>
                <td>H29</td>
                <td>Relacionar texto a contexto</td>
                <td>Identificar época, local ou cultura do texto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de Texto</span>
        <h2>3. Os gêneros textuais mais recorrentes nas provas</h2>
        <p>
          Ao longo das edições do ENEM, alguns gêneros textuais aparecem com muito mais frequência do que outros. Conhecer esses gêneros de antemão é uma vantagem enorme, pois você já sabe quais informações procurar (título, autor, data, tese, argumentos, desfecho, mensagem) antes mesmo de começar a ler o texto em detalhes. Os gêneros mais frequentes são: textos jornalísticos (notícias, reportagens, artigos de opinião), textos literários (contos, crônicas, poemas, fragmentos de romances), textos publicitários (anúncios, campanhas sociais, slogans) e textos de divulgação científica.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Distribuição dos gêneros textuais nas provas de Espanhol do ENEM">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            <text x="350" y="30" textAnchor="middle" fill="#1e40af" fontSize="15" fontWeight="bold">Gêneros Textuais nas Provas de Espanhol (ENEM)</text>
            {/* Jornalístico */}
            <rect x="40" y="50" width="140" height="130" rx="10" fill="#dbeafe" />
            <text x="110" y="85" textAnchor="middle" fill="#1e40af" fontSize="26" fontWeight="bold">35%</text>
            <text x="110" y="108" textAnchor="middle" fill="#1e40af" fontSize="12">Jornalístico</text>
            <text x="110" y="124" textAnchor="middle" fill="#1e40af" fontSize="11">(notícia, opinião,</text>
            <text x="110" y="140" textAnchor="middle" fill="#1e40af" fontSize="11">reportagem)</text>
            {/* Literário */}
            <rect x="200" y="50" width="140" height="130" rx="10" fill="#d1fae5" />
            <text x="270" y="85" textAnchor="middle" fill="#065f46" fontSize="26" fontWeight="bold">30%</text>
            <text x="270" y="108" textAnchor="middle" fill="#065f46" fontSize="12">Literário</text>
            <text x="270" y="124" textAnchor="middle" fill="#065f46" fontSize="11">(conto, poema,</text>
            <text x="270" y="140" textAnchor="middle" fill="#065f46" fontSize="11">crônica, romance)</text>
            {/* Publicitário */}
            <rect x="360" y="50" width="140" height="130" rx="10" fill="#fef3c7" />
            <text x="430" y="85" textAnchor="middle" fill="#92400e" fontSize="26" fontWeight="bold">20%</text>
            <text x="430" y="108" textAnchor="middle" fill="#92400e" fontSize="12">Publicitário</text>
            <text x="430" y="124" textAnchor="middle" fill="#92400e" fontSize="11">(anúncio, slogan,</text>
            <text x="430" y="140" textAnchor="middle" fill="#92400e" fontSize="11">campanha social)</text>
            {/* Científico */}
            <rect x="520" y="50" width="140" height="130" rx="10" fill="#e0e7ff" />
            <text x="590" y="85" textAnchor="middle" fill="#3730a3" fontSize="26" fontWeight="bold">15%</text>
            <text x="590" y="108" textAnchor="middle" fill="#3730a3" fontSize="12">Científico</text>
            <text x="590" y="124" textAnchor="middle" fill="#3730a3" fontSize="11">(divulgação,</text>
            <text x="590" y="140" textAnchor="middle" fill="#3730a3" fontSize="11">artigo acadêmico)</text>
            <text x="350" y="210" textAnchor="middle" fill="#6b7280" fontSize="12">* Estimativa baseada em análise das provas 2009–2023</text>
          </svg>
          <figcaption>Distribuição aproximada dos gêneros textuais nas questões de Espanhol do ENEM ao longo dos anos.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Dica de ouro:</strong> Antes de ler o texto, olhe para o título, a fonte, o ano de publicação e qualquer imagem ou subtítulo. Esses elementos já revelam o gênero, o tema e muitas vezes a resposta da questão. Um texto com "©La Nación, 2019" já indica jornal argentino → provável texto jornalístico.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo Linguístico</span>
        <h2>4. Espanhol × Inglês: por que o Espanhol é mais acessível</h2>
        <p>
          Português e Espanhol são línguas irmãs — ambas descendem diretamente do Latim vulgar e compartilham entre 89% e 93% do vocabulário básico, de acordo com estudos de linguística comparada. Isso significa que, mesmo sem ter estudado Espanhol formalmente, um falante de Português já reconhece intuitivamente uma grande parte das palavras de um texto em Espanhol. O Inglês, por sua vez, pertence ao ramo germânico das línguas indo-europeias e possui estrutura muito menos transparente para falantes do Português. Essa diferença é decisiva na hora de escolher a língua estrangeira no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Português → Espanhol</th>
                <th>Português → Inglês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Família linguística</td>
                <td>Ibero-romance (mesmo ramo)</td>
                <td>Germânico (ramo diferente)</td>
              </tr>
              <tr>
                <td>Vocabulário compartilhado</td>
                <td>~89–93%</td>
                <td>~30–40%</td>
              </tr>
              <tr>
                <td>Cognatos óbvios</td>
                <td>Muito frequentes</td>
                <td>Moderados (via latim/francês)</td>
              </tr>
              <tr>
                <td>Estrutura da frase</td>
                <td>Muito similar (SVO, mesmos casos)</td>
                <td>Diferente (auxiliares, preposições)</td>
              </tr>
              <tr>
                <td>Sistema verbal</td>
                <td>Paralelo (subjuntivo, modos parecidos)</td>
                <td>Muito diferente (phrasal verbs, modais)</td>
              </tr>
              <tr>
                <td>Leitura sem estudo formal</td>
                <td>Viável com estratégias básicas</td>
                <td>Difícil sem vocabulário prévio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Leitura</span>
        <h2>5. Como ler um texto em espanhol no dia da prova</h2>
        <p>
          A estratégia de leitura para o ENEM em Espanhol não é a mesma usada para textos em Português. Como o tempo é limitado e o vocabulário pode apresentar lacunas, é fundamental adotar uma abordagem em etapas que maximize a compreensão global antes de entrar nos detalhes. O processo pode ser dividido em: pré-leitura (análise dos elementos externos), leitura rápida (busca do tema e da tese), leitura focada nas questões (varredura por palavras-chave), e eliminação de alternativas por contradição ou incompatibilidade.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Fluxo da estratégia de leitura no ENEM de Espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f0fdf4" />
            <defs>
              <marker id="cap01arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#065f46" />
              </marker>
            </defs>
            {/* Passo 1 */}
            <rect x="20" y="70" width="120" height="60" rx="8" fill="#d1fae5" />
            <text x="80" y="97" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">1. Pré-leitura</text>
            <text x="80" y="115" textAnchor="middle" fill="#065f46" fontSize="10">título, fonte, imagens</text>
            {/* Seta 1→2 */}
            <line x1="142" y1="100" x2="173" y2="100" stroke="#065f46" strokeWidth="2" markerEnd="url(#cap01arr1)" />
            {/* Passo 2 */}
            <rect x="175" y="70" width="120" height="60" rx="8" fill="#dbeafe" />
            <text x="235" y="97" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">2. Leitura Global</text>
            <text x="235" y="115" textAnchor="middle" fill="#1e40af" fontSize="10">tema, tese geral</text>
            {/* Seta 2→3 */}
            <line x1="297" y1="100" x2="328" y2="100" stroke="#065f46" strokeWidth="2" markerEnd="url(#cap01arr1)" />
            {/* Passo 3 */}
            <rect x="330" y="70" width="120" height="60" rx="8" fill="#fef3c7" />
            <text x="390" y="97" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">3. Leitura Focada</text>
            <text x="390" y="115" textAnchor="middle" fill="#92400e" fontSize="10">palavras-chave</text>
            {/* Seta 3→4 */}
            <line x1="452" y1="100" x2="483" y2="100" stroke="#065f46" strokeWidth="2" markerEnd="url(#cap01arr1)" />
            {/* Passo 4 */}
            <rect x="485" y="70" width="140" height="60" rx="8" fill="#fce7f3" />
            <text x="555" y="90" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">4. Eliminação</text>
            <text x="555" y="108" textAnchor="middle" fill="#9d174d" fontSize="10">descartar alternativas</text>
            <text x="555" y="124" textAnchor="middle" fill="#9d174d" fontSize="10">contraditórias</text>
            <text x="350" y="175" textAnchor="middle" fill="#6b7280" fontSize="11">Fluxo de leitura estratégica para questões de espanhol no ENEM</text>
          </svg>
          <figcaption>As quatro etapas da leitura estratégica em Espanhol no ENEM: da pré-leitura à eliminação de alternativas.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Pré-leitura</h3>
            <p>Leia o título, a fonte, o ano e qualquer subtítulo. Identifique o gênero antes de ler o corpo do texto.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Leitura Global</h3>
            <p>Passe os olhos rapidamente pelo texto buscando o assunto geral. Não trave em palavras desconhecidas.</p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Leitura Focada</h3>
            <p>Leia as questões antes de reler o texto. Busque especificamente as informações pedidas na questão.</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Eliminação</h3>
            <p>Elimine alternativas que contradizem o texto, que são muito extremas ou que invertem o sentido da informação.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Para Não Estudantes de Espanhol</span>
        <h2>6. Estratégias especiais para quem nunca estudou Espanhol</h2>
        <p>
          Muitos candidatos escolhem Espanhol no ENEM sem nunca ter estudado o idioma formalmente, e isso é completamente viável. A chave é explorar ao máximo a proximidade com o Português e adotar estratégias de compreensão que compensem o vocabulário limitado. As técnicas mais eficazes incluem: buscar cognatos (palavras que se parecem com o Português e têm o mesmo significado), usar o contexto para deduzir o significado de palavras desconhecidas, focar nos elementos estruturais do texto (início, meio, fim, argumentos principais) e nunca deixar de responder (não há desconto por erros no ENEM).
        </p>
        <div className="lesson-highlight">
          <strong>Regra de ouro para iniciantes:</strong> Se você lê um trecho em Espanhol e entende pelo menos 60-70% das palavras, já tem informação suficiente para responder a maioria das questões do ENEM. O exame testa compreensão geral, não tradução técnica!
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>O que fazer</th>
                <th>O que evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Palavra completamente desconhecida</td>
                <td>Use o contexto; tente identificar se é substantivo/verbo/adjetivo pela posição na frase</td>
                <td>Não trave tentando traduzir palavra por palavra</td>
              </tr>
              <tr>
                <td>Frase muito longa e complexa</td>
                <td>Identifique o sujeito e o verbo principal; ignore cláusulas subordinadas se necessário</td>
                <td>Não desista do texto por causa de uma frase difícil</td>
              </tr>
              <tr>
                <td>Texto com gírias ou regionalismos</td>
                <td>Foque no contexto geral; regionalismos raramente são testados isoladamente</td>
                <td>Não tente "adivinhar" o significado de gírias específicas</td>
              </tr>
              <tr>
                <td>Alternativas parecidas</td>
                <td>Volte ao texto e localize a passagem exata que justifica a resposta</td>
                <td>Não confie apenas na "sensação" — a resposta está sempre no texto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Eliminação de Alternativas</span>
        <h2>7. Como eliminar alternativas erradas com segurança</h2>
        <p>
          Uma das habilidades mais importantes para o ENEM não é saber a resposta certa de imediato, mas sim identificar as respostas erradas. No Espanhol, as alternativas incorretas geralmente seguem padrões previsíveis: contradizem uma informação explícita do texto, são verdadeiras mas não respondem à pergunta feita, exageram ou generalizam além do que o texto afirma, ou fazem uma referência que não aparece no texto. Aprender a reconhecer esses padrões é uma estratégia poderosa que independe do nível de conhecimento do idioma.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Armadilha 1</h3>
            <p>Alternativa que usa as mesmas palavras do texto mas inverte o sentido: o candidato reconhece a palavra e marca sem verificar o contexto.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 2</h3>
            <p>Alternativa com informação verdadeira sobre o tema geral mas que não está no texto específico analisado.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Armadilha 3</h3>
            <p>Alternativa que generaliza ("sempre", "nunca", "todos", "jamais") quando o texto é mais moderado e específico.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Armadilha 4</h3>
            <p>Alternativa que mistura informações corretas de partes diferentes do texto criando uma afirmação falsa por combinação.</p>
          </div>
        </div>

        <div className="math-block">
          🎯 DICA ENEM: Sempre marque no texto a passagem que justifica sua resposta antes de marcá-la no gabarito. Se não encontrar a justificativa no texto, a alternativa provavelmente está errada — em questões de interpretação, a resposta SEMPRE pode ser localizada ou inferida diretamente do texto apresentado.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Planejamento de Estudos</span>
        <h2>8. Como organizar seus estudos de Espanhol para o ENEM</h2>
        <p>
          Dado que o ENEM cobra apenas 5 questões de Espanhol e o foco é leitura e interpretação (não gramática ou tradução), a estratégia de estudos deve ser proporcional. O ideal é distribuir o tempo de forma inteligente: priorizar vocabulário de alta frequência (as 500–1000 palavras mais usadas em textos escritos), praticar leitura de textos autênticos em espanhol (jornais, blogs, revistas hispânicas online) e resolver questões de provas anteriores para se familiarizar com o estilo das perguntas. Estudar 3 a 4 capítulos por semana deste curso é suficiente para uma preparação sólida.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Cronograma de estudos de Espanhol para o ENEM">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#e0e7ff" />
            <text x="350" y="28" textAnchor="middle" fill="#3730a3" fontSize="14" fontWeight="bold">Distribuição Ideal do Tempo de Estudo — Espanhol ENEM</text>
            {/* Vocabulário */}
            <rect x="30" y="50" width="155" height="100" rx="8" fill="white" />
            <text x="108" y="80" textAnchor="middle" fill="#1e40af" fontSize="22" fontWeight="bold">35%</text>
            <text x="108" y="100" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Vocabulário</text>
            <text x="108" y="116" textAnchor="middle" fill="#1e40af" fontSize="10">cognatos, falsos</text>
            <text x="108" y="130" textAnchor="middle" fill="#1e40af" fontSize="10">cognatos, frequentes</text>
            {/* Leitura */}
            <rect x="200" y="50" width="155" height="100" rx="8" fill="white" />
            <text x="278" y="80" textAnchor="middle" fill="#065f46" fontSize="22" fontWeight="bold">30%</text>
            <text x="278" y="100" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Leitura</text>
            <text x="278" y="116" textAnchor="middle" fill="#065f46" fontSize="10">textos autênticos</text>
            <text x="278" y="130" textAnchor="middle" fill="#065f46" fontSize="10">em espanhol</text>
            {/* Gramática */}
            <rect x="370" y="50" width="155" height="100" rx="8" fill="white" />
            <text x="448" y="80" textAnchor="middle" fill="#92400e" fontSize="22" fontWeight="bold">20%</text>
            <text x="448" y="100" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Gramática</text>
            <text x="448" y="116" textAnchor="middle" fill="#92400e" fontSize="10">estruturas básicas</text>
            <text x="448" y="130" textAnchor="middle" fill="#92400e" fontSize="10">para leitura</text>
            {/* Provas */}
            <rect x="540" y="50" width="130" height="100" rx="8" fill="white" />
            <text x="605" y="80" textAnchor="middle" fill="#9d174d" fontSize="22" fontWeight="bold">15%</text>
            <text x="605" y="100" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">Provas</text>
            <text x="605" y="116" textAnchor="middle" fill="#9d174d" fontSize="10">questões</text>
            <text x="605" y="130" textAnchor="middle" fill="#9d174d" fontSize="10">anteriores</text>
          </svg>
          <figcaption>Distribuição recomendada do tempo de estudo de Espanhol para maximizar o desempenho no ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Temas Recorrentes</span>
        <h2>9. Temáticas recorrentes nos textos de Espanhol do ENEM</h2>
        <p>
          Os textos selecionados para as questões de Espanhol do ENEM não são aleatórios: eles seguem as mesmas temáticas interdisciplinares que permeiam toda a prova. Isso é uma vantagem, pois você pode se familiarizar previamente com o vocabulário temático de cada área. As temáticas mais recorrentes incluem meio ambiente e sustentabilidade, direitos humanos e cidadania, tecnologia e sociedade, cultura e identidade latino-americana, saúde e qualidade de vida, e questões socioeconômicas da América Latina.
        </p>

        <div className="lesson-highlight">
          <strong>América Latina em foco:</strong> O ENEM frequentemente seleciona textos de autores ou publicações de países como Argentina, México, Chile, Colômbia e Espanha. Familiarizar-se com referências culturais dessas regiões — como escritores como García Márquez, Borges, Isabel Allende — pode ajudar na compreensão de textos literários.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Temática</th>
                <th>Vocabulário-chave em Espanhol</th>
                <th>Frequência no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meio ambiente</td>
                <td>medio ambiente, cambio climático, recursos naturales, contaminación, sostenibilidad</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Direitos humanos</td>
                <td>derechos humanos, igualdad, discriminación, justicia social, ciudadanía</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Tecnologia</td>
                <td>tecnología, redes sociales, internet, innovación, inteligencia artificial</td>
                <td>Média-Alta</td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td>identidad cultural, tradición, arte, literatura, patrimonio</td>
                <td>Média</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>salud, enfermedad, medicina, bienestar, alimentación</td>
                <td>Média</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Natureza do Espanhol no ENEM"
          statement={
            <p>
              O ENEM oferece ao candidato a possibilidade de escolher entre Inglês e Espanhol como língua estrangeira. Com base no que você aprendeu sobre a estrutura do exame, assinale a alternativa CORRETA sobre as questões de Espanhol no ENEM:
            </p>
          }
          options={[
            { letter: "a", text: "As questões de Espanhol avaliam gramática e tradução de textos do Português para o Espanhol." },
            { letter: "b", text: "São 5 questões de leitura e interpretação de textos autênticos em língua espanhola.", correct: true },
            { letter: "c", text: "O candidato deve responder tanto as questões de Inglês quanto de Espanhol obrigatoriamente." },
            { letter: "d", text: "As questões de Espanhol aparecem na primeira fase do ENEM, junto com Ciências da Natureza." },
            { letter: "e", text: "O Espanhol é menos vantajoso que o Inglês porque exige mais conhecimento gramatical." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. O ENEM oferece 5 questões de língua estrangeira (Inglês OU Espanhol, à escolha do candidato) que se concentram exclusivamente em leitura e interpretação de textos autênticos. Não há tradução nem avaliação gramatical isolada. As questões aparecem na segunda fase (Linguagens, Códigos e suas Tecnologias). A alternativa a) está errada pois não há tradução; c) está errada pois é uma escolha exclusiva; d) está errada quanto à fase; e) está errada pois o Espanhol é geralmente mais acessível por sua proximidade com o Português.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Estratégia de leitura em textos hispânicos"
          statement={
            <p>
              Leia o trecho a seguir de um texto jornalístico argentino: <em>"El cambio climático representa una amenaza sin precedentes para los ecosistemas del planeta. Según los científicos, si no se toman medidas urgentes, las consecuencias serán irreversibles para las próximas generaciones."</em> Com base nas estratégias de leitura para o ENEM, qual é o tema central desse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "A importância dos cientistas para o desenvolvimento tecnológico." },
            { letter: "b", text: "As gerações futuras e seus desafios econômicos." },
            { letter: "c", text: "A urgência de ações contra as mudanças climáticas e suas consequências.", correct: true },
            { letter: "d", text: "A irreversibilidade de todos os fenômenos naturais do planeta." },
            { letter: "e", text: "A falta de medidas governamentais em países hispânicos." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é a correta. O texto afirma que "el cambio climático representa una amenaza sin precedentes" (a mudança climática representa uma ameaça sem precedentes) e que "si no se toman medidas urgentes, las consecuencias serán irreversibles" (se não forem tomadas medidas urgentes, as consequências serão irreversíveis). O tema central, portanto, é a urgência de ações climáticas. A alternativa d) é parcialmente verdadeira mas exagera ("todos os fenômenos"), e a alternativa e) traz uma afirmação que não está no texto — clássica armadilha de "informação verdadeira mas externa ao texto".
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inferência a partir de elementos paratextuais"
          statement={
            <p>
              Um candidato do ENEM se depara com uma questão que apresenta um texto com as seguintes informações: título em espanhol <em>"¿Por qué los jóvenes abandonan el campo?"</em>, fonte <em>El País, Madrid, 2021</em>, e uma fotografia mostrando uma cidade moderna ao lado de um vilarejo rural. Antes mesmo de ler o corpo do texto, quais informações o candidato já pode inferir corretamente?
            </p>
          }
          options={[
            { letter: "a", text: "O texto é literário e aborda a saudade da vida rural em forma poética." },
            { letter: "b", text: "O texto é publicitário e promove turismo rural na Espanha." },
            { letter: "c", text: "O texto aborda o êxodo rural de jovens, provavelmente com enfoque jornalístico e opinativo.", correct: true },
            { letter: "d", text: "O texto é científico e apresenta dados geográficos sobre zonas rurais europeias." },
            { letter: "e", text: "O texto critica o crescimento desordenado das cidades espanholas no século XXI." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta. A estratégia de pré-leitura revela: (1) o título em forma de pergunta ("¿Por qué...?") indica texto argumentativo ou de análise social; (2) a fonte "El País, Madrid, 2021" indica jornal de grande circulação espanhol → texto jornalístico; (3) a fotografia contrastando cidade e campo sugere o tema do êxodo rural. Juntos, esses elementos já permitem inferir que o texto trata do abandono do campo por jovens com enfoque jornalístico. Essa habilidade de leitura paratextual é fundamental para ganhar tempo na prova.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Eliminação de alternativas por contradição textual"
          statement={
            <div>
              <p>Leia o fragmento: <em>"La tecnología no es buena ni mala en sí misma; depende del uso que le demos. Las redes sociales, por ejemplo, pueden ser herramientas poderosas de información y conexión, o instrumentos de desinformación y aislamiento."</em></p>
              <p>Uma questão do ENEM pergunta: "Segundo o texto, qual é a posição do autor em relação à tecnologia?" Analise as alternativas e identifique qual delas pode ser ELIMINADA por contradizer diretamente o texto:</p>
            </div>
          }
          options={[
            { letter: "a", text: "A tecnologia é neutra e seu impacto depende de como é utilizada." },
            { letter: "b", text: "As redes sociais podem ter tanto efeitos positivos quanto negativos." },
            { letter: "c", text: "A tecnologia é essencialmente prejudicial para as relações humanas.", correct: true },
            { letter: "d", text: "O uso responsável da tecnologia pode gerar benefícios para a sociedade." },
            { letter: "e", text: "O autor reconhece a ambiguidade da tecnologia e das redes sociais." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> deve ser eliminada pois contradiz diretamente o texto. O autor afirma explicitamente que "la tecnología no es buena ni mala en sí misma" (a tecnologia não é boa nem má em si mesma), o que é o oposto exato da alternativa c), que afirma ser "essencialmente prejudicial". Esta é a clássica armadilha de inversão de sentido — a banca usa palavras do texto mas inverte a ideia central. As demais alternativas são consistentes com o texto: a) parafraseia corretamente a ideia central; b) e e) refletem o exemplo das redes sociais; d) é uma inferência válida do texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Competências de leitura aplicadas a texto literário"
          statement={
            <div>
              <p>Leia o fragmento do escritor colombiano Gabriel García Márquez:</p>
              <p><em>"Fue como si Dios hubiera decidido poner a prueba toda capacidad de asombro y mantener a los habitantes de Macondo en un permanente vaivén entre el alborozo y el desencanto, la duda y la revelación, hasta el extremo de que ya nadie podía saber a ciencia cierta dónde estaban los límites de la realidad."</em></p>
              <p>Qual recurso literário é central nesse trecho e qual efeito de sentido ele produz?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Ironia — o autor critica a ingenuidade dos habitantes de Macondo de forma humorística." },
            { letter: "b", text: "Realismo — o trecho descreve de forma objetiva e científica a realidade da cidade." },
            { letter: "c", text: "Realismo mágico — a fronteira entre real e fantástico se dissolve, criando um estado de permanente maravilhamento e incerteza.", correct: true },
            { letter: "d", text: "Naturalismo — o texto foca nas condições sociais e econômicas que determinam o comportamento humano." },
            { letter: "e", text: "Simbolismo — cada elemento do texto representa um conceito abstrato de forma hermética e velada." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> está correta. O trecho é de "Cem Anos de Solidão" (Cien años de soledad), obra máxima de García Márquez e exemplo paradigmático do <strong>realismo mágico</strong> — corrente literária latino-americana que mistura elementos fantásticos com a realidade cotidiana de forma natural. A expressão "ya nadie podía saber a ciencia cierta dónde estaban los límites de la realidad" (já ninguém podia saber ao certo onde estavam os limites da realidade) evidencia essa dissolução da fronteira real/fantástico. No ENEM, questões sobre textos literários frequentemente pedem a identificação de recursos como este, testando a habilidade de reconhecer tradições literárias e seus efeitos de sentido.
            </p>
          }
        />
      </section>

    </article>
  );
}
