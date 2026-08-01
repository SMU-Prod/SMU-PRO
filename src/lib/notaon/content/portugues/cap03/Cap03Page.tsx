"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 3</span>
          <h1>Interpretação Textual</h1>
          <p>
            Dominar a interpretação de textos é a habilidade mais cobrada no ENEM. Neste
            capítulo você aprenderá a distinguir o que o texto <strong>diz</strong> do que
            ele <strong>implica</strong>, identificar tese, argumento e intenção do autor,
            detectar ironia, analisar textos mistos e aplicar estratégias precisas para
            nunca mais errar por falta de leitura atenta.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Leitura Literal vs. Leitura Inferencial</h2>
        <p>
          Todo processo de compreensão textual começa pela distinção fundamental entre dois
          níveis de leitura: o <strong>literal</strong> e o <strong>inferencial</strong>.
          Confundi-los é a origem da maioria dos erros em questões de interpretação.
        </p>
        <p>
          A <strong>leitura literal</strong> (ou decodificação) consiste em recuperar o que
          o texto afirma de forma explícita, sem acrescentar qualquer informação externa. É o
          nível mais básico: você apenas "encontra" no texto a informação pedida. Questões que
          pedem "de acordo com o texto" ou "segundo o autor" operam nesse nível.
        </p>
        <p>
          A <strong>leitura inferencial</strong> exige que o leitor vá além do escrito. Ela
          mobiliza conhecimento de mundo, lógica e sensibilidade ao contexto para construir
          sentidos que o texto <em>sugere mas não afirma</em>. Questões como "o texto permite
          concluir que" ou "a charge critica" operam nesse nível.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Leitura Literal</h3>
            <p>
              Recupera informações explícitas. O leitor localiza e transcreve — não
              interpreta. Exemplo: "Quantos personagens aparecem no texto?"
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Leitura Inferencial</h3>
            <p>
              Constrói sentidos implícitos. O leitor relaciona pistas, deduz e conclui.
              Exemplo: "Qual é a crítica subjacente ao texto?"
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            Fique atento ao <strong>verbo do enunciado</strong>: "afirma", "declara" e
            "informa" pedem leitura literal; "implica", "pressupõe", "critica" e "sugere"
            pedem leitura inferencial. Identificar isso antes de ler as alternativas
            economiza tempo e evita erros.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo no enunciado</th>
                <th>Tipo de leitura exigida</th>
                <th>O que fazer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>afirma / informa / declara</td>
                <td>Literal</td>
                <td>Localizar no texto</td>
              </tr>
              <tr>
                <td>implica / pressupõe / sugere</td>
                <td>Inferencial</td>
                <td>Deduzir a partir de pistas</td>
              </tr>
              <tr>
                <td>critica / ironiza / satiriza</td>
                <td>Inferencial + análise de intenção</td>
                <td>Identificar o alvo e o tom</td>
              </tr>
              <tr>
                <td>é uma paráfrase / retoma</td>
                <td>Inferencial + paráfrase</td>
                <td>Verificar equivalência de sentido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Conteúdo Implícito</span>
        <h2>2. Pressupostos e Subentendidos</h2>
        <p>
          Dentro do campo do implícito, a linguística distingue dois mecanismos
          fundamentais: os <strong>pressupostos</strong> e os <strong>subentendidos</strong>.
          Ambos estão "escondidos" no texto, mas funcionam de maneiras diferentes.
        </p>
        <p>
          O <strong>pressuposto</strong> (ou implicatura convencional) é uma informação
          considerada verdadeira e necessária para que o enunciado faça sentido. Ele é
          ativado pela estrutura gramatical ou por certas palavras-gatilho e não depende do
          contexto para existir. Se você negar o enunciado, o pressuposto continua valendo.
        </p>
        <div className="math-block">
          <h3>Exemplo de Pressuposto</h3>
          <p>
            Enunciado: <em>"Ana parou de fumar."</em>
          </p>
          <p>
            Pressuposto: Ana fumava antes. (A informação está embutida no verbo
            "parar de".)
          </p>
          <p>
            Teste: mesmo que digamos "Ana não parou de fumar", continuamos pressupondo
            que ela fumava.
          </p>
        </div>
        <p>
          O <strong>subentendido</strong> (ou implicatura conversacional, conceito do
          filósofo Paul Grice) é uma mensagem sugerida de forma intencional pelo falante,
          mas que depende do contexto e da cooperação interpretativa do interlocutor. Ao
          contrário do pressuposto, o subentendido pode ser cancelado sem contradição.
        </p>
        <div className="math-block">
          <h3>Exemplo de Subentendido</h3>
          <p>
            Contexto: você pergunta se seu colega quer carona e ele responde:
            <em>"Meu carro está na oficina."</em>
          </p>
          <p>
            Subentendido: sim, ele quer carona. (Mas a frase, literalmente, apenas informa
            sobre o carro. Se ele disser "mas não preciso de carona", não há contradição
            gramatical.)
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔒</span>
            <h3>Pressuposto</h3>
            <p>
              Informação embutida na estrutura do enunciado. Palavras-gatilho: "ainda",
              "também", "parar de", "voltar a", "o mesmo", artigos definidos.
            </p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Subentendido</h3>
            <p>
              Mensagem sugerida que depende do contexto. É cancelável sem contradição
              gramatical. Frequente em ironias, publicidade e charges.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Palavras-Gatilho de Pressuposto</h3>
          <p>
            <strong>ainda</strong> → pressupõe que algo continuava; <strong>também</strong>
            → pressupõe que outro elemento se enquadra; <strong>o / a / os / as</strong>
            (artigo definido) → pressupõe que o referente é conhecido; <strong>até</strong>
            → pressupõe um grau anterior; <strong>novamente / de novo</strong> → pressupõe
            repetição de estado anterior.
          </p>
        </div>

        {/* SVG 1 — Mapa conceitual Pressuposto vs Subentendido */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 320"
            width="700"
            height="320"
            aria-label="Diagrama comparativo entre pressuposto e subentendido"
          >
            {/* Fundo */}
            <rect width="700" height="320" rx="12" fill="#f8fafc" />

            {/* Caixa central — IMPLÍCITO */}
            <rect x="265" y="130" width="170" height="56" rx="10" fill="#6366f1" />
            <text x="350" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">IMPLÍCITO</text>
            <text x="350" y="174" textAnchor="middle" fill="#e0e7ff" fontSize="12">no texto</text>

            {/* Caixa esquerda — PRESSUPOSTO */}
            <rect x="40" y="110" width="180" height="90" rx="10" fill="#3b82f6" />
            <text x="130" y="138" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">PRESSUPOSTO</text>
            <text x="130" y="157" textAnchor="middle" fill="#dbeafe" fontSize="11">Estrutura gramatical</text>
            <text x="130" y="174" textAnchor="middle" fill="#dbeafe" fontSize="11">Não cancelável</text>
            <text x="130" y="191" textAnchor="middle" fill="#dbeafe" fontSize="11">Ex: "parou de fumar"</text>

            {/* Caixa direita — SUBENTENDIDO */}
            <rect x="480" y="110" width="180" height="90" rx="10" fill="#10b981" />
            <text x="570" y="138" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">SUBENTENDIDO</text>
            <text x="570" y="157" textAnchor="middle" fill="#d1fae5" fontSize="11">Contexto / intenção</text>
            <text x="570" y="174" textAnchor="middle" fill="#d1fae5" fontSize="11">Cancelável</text>
            <text x="570" y="191" textAnchor="middle" fill="#d1fae5" fontSize="11">Ex: ironia, insinuação</text>

            {/* Linhas de conexão */}
            <line x1="265" y1="158" x2="220" y2="158" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="435" y1="158" x2="480" y2="158" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Definição de seta */}
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Título */}
            <text x="350" y="40" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold">Tipos de Conteúdo Implícito</text>
            <text x="350" y="62" textAnchor="middle" fill="#64748b" fontSize="12">O que o texto não diz, mas comunica</text>

            {/* Rodapé */}
            <text x="350" y="300" textAnchor="middle" fill="#94a3b8" fontSize="11">Ambos são alvos frequentes nas questões de interpretação do ENEM</text>
          </svg>
          <figcaption>Diagrama comparativo: pressupostos vs. subentendidos</figcaption>
        </figure>
      </section>

      {/* SEÇÃO 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Macroestrutura</span>
        <h2>3. Sentido Global do Texto</h2>
        <p>
          Compreender o <strong>sentido global</strong> de um texto significa apreender sua
          mensagem central como um todo coerente, não apenas fragmentos isolados. É a
          capacidade de responder: "sobre o quê, no fundo, este texto fala e o que ele
          defende?"
        </p>
        <p>
          Para capturar o sentido global é preciso perceber como as partes se articulam —
          título, subtítulos, parágrafo de abertura, desenvolvimento e conclusão formam uma
          arquitetura argumentativa ou narrativa. Um leitor que lê apenas um parágrafo pode
          chegar a conclusões equivocadas porque tira o trecho de seu contexto.
        </p>
        <div className="lesson-highlight">
          <h3>Estratégia Prática</h3>
          <p>
            Leia o primeiro e o último parágrafo antes de qualquer outra coisa. Em textos
            argumentativos, o primeiro parágrafo costuma introduzir o tema e anunciar a
            tese; o último parágrafo recapitula e reforça a conclusão. Esse atalho dá uma
            visão do sentido global em segundos.
          </p>
        </div>
      </section>

      {/* SEÇÃO 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Conteúdo vs. Tema</span>
        <h2>4. Distinção entre Tema e Assunto</h2>
        <p>
          Muitos estudantes confundem <strong>tema</strong> e <strong>assunto</strong>, mas
          a distinção é fundamental tanto para interpretar quanto para redigir. Dominar essa
          diferença resolve questões que pedem "o texto trata de" ou "a ideia central é".
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Assunto</h3>
            <p>
              É o campo geral sobre o qual o texto versa. Pode ser resumido em uma palavra
              ou expressão nominal simples. Exemplo: "redes sociais", "meio ambiente".
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Tema</h3>
            <p>
              É o recorte específico que o texto faz sobre o assunto, geralmente
              expressando um ponto de vista ou problema. Exemplo: "O impacto das redes
              sociais na saúde mental de adolescentes".
            </p>
          </div>
        </div>
        <div className="math-block">
          <h3>Como diferenciar na prática</h3>
          <p>
            Assunto: "violência urbana" (campo geral)
          </p>
          <p>
            Tema: "A relação entre desigualdade econômica e aumento da violência urbana
            nas metrópoles brasileiras" (recorte preciso com posicionamento)
          </p>
          <p>
            O tema sempre pode ser formulado como uma <em>frase</em>; o assunto geralmente
            como um <em>substantivo</em>.
          </p>
        </div>
      </section>

      {/* SEÇÃO 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>
        <h2>5. Identificação de Tese e Argumento Central</h2>
        <p>
          Em textos argumentativos — artigos de opinião, editoriais, crônicas de crítica
          social — o autor sustenta uma <strong>tese</strong>, que é a posição defendida, e
          a apoia com <strong>argumentos</strong>. Identificar esses elementos é essencial
          para responder questões que perguntam "qual é a ideia central" ou "como o autor
          defende seu ponto de vista".
        </p>
        <p>
          A <strong>tese</strong> é a afirmação principal que o autor quer provar ou
          convencer o leitor a aceitar. Ela costuma aparecer no primeiro ou no último
          parágrafo e pode ser reconhecida como uma afirmação polêmica, sujeita a
          contestação.
        </p>
        <p>
          Os <strong>argumentos</strong> são os fundamentos usados para sustentar a tese.
          Podem ser: dados estatísticos, exemplos concretos, citações de autoridade,
          comparações, causa e efeito, argumentos por analogia etc.
        </p>
        <div className="lesson-highlight">
          <h3>Como identificar a tese</h3>
          <p>
            Procure a afirmação que responde à pergunta implícita: "O que o autor
            defende?" ou "Com o quê o autor concorda/discorda?". A tese nunca é um
            fato neutro — ela é uma <em>tomada de posição</em>.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Definição</th>
                <th>Onde costuma aparecer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tese</td>
                <td>Posição defendida pelo autor</td>
                <td>1.º ou último parágrafo</td>
              </tr>
              <tr>
                <td>Argumento</td>
                <td>Razão ou evidência que sustenta a tese</td>
                <td>Parágrafos de desenvolvimento</td>
              </tr>
              <tr>
                <td>Contra-argumento</td>
                <td>Objeção que o autor menciona para refutar</td>
                <td>Antes da refutação</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td>Retomada da tese com base nos argumentos</td>
                <td>Parágrafo final</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Intenção</span>
        <h2>6. Intenção Comunicativa do Autor</h2>
        <p>
          Todo texto é produzido com uma <strong>intenção comunicativa</strong> — um
          propósito que orienta as escolhas do autor. Identificar essa intenção é
          fundamental para entender o <em>tom</em> e o <em>efeito de sentido</em>
          pretendido.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Informar</h3>
            <p>
              Transmitir dados ou fatos de forma objetiva. Típico de notícias e
              textos científicos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Persuadir</h3>
            <p>
              Convencer o leitor a adotar um ponto de vista ou tomar uma atitude.
              Típico de editoriais e propagandas.
            </p>
          </div>
          <div className="lesson-card">
            <span>😂</span>
            <h3>Entreter</h3>
            <p>
              Divertir, emocionar ou provocar reflexão estética. Típico de contos,
              crônicas e poemas.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Alertar / Denunciar</h3>
            <p>
              Chamar atenção para um problema social ou injustiça. Típico de
              charges, artigos de opinião e campanhas.
            </p>
          </div>
        </div>
        <p>
          A intenção comunicativa é revelada por marcas textuais: o <strong>léxico</strong>
          (palavras neutras vs. carregadas de valoração), a <strong>modalidade verbal</strong>
          (indicativo afirmativo para afirmar; imperativo para ordenar ou persuadir), o
          <strong> gênero discursivo</strong> e o <strong>suporte</strong> (onde o texto é
          publicado). Um artigo em jornal de grande circulação e um panfleto político têm
          intenções e públicos distintos que influenciam toda a interpretação.
        </p>
      </section>

      {/* SEÇÃO 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Efeito de Sentido</span>
        <h2>7. Ironia: Detecção e Funcionamento</h2>
        <p>
          A <strong>ironia</strong> é um recurso expressivo em que o falante diz algo
          querendo comunicar o oposto ou algo muito diferente do sentido literal. É
          frequentíssima em charges, crônicas, títulos de notícia e propagandas. No ENEM,
          questões sobre ironia pedem que o candidato identifique o <em>alvo</em> da crítica
          e o <em>efeito de sentido</em> produzido.
        </p>
        <p>
          A ironia funciona porque existe uma <strong>incongruência</strong> entre o que é
          dito e o contexto. O leitor percebe essa incongruência e recalibra o sentido.
          Pistas típicas de ironia incluem: elogios em situações claramente negativas,
          linguagem formal exagerada em contexto informal, aspas em palavras-chave e
          exclamações contrastantes com fatos negativos.
        </p>
        <div className="lesson-highlight">
          <h3>Como detectar ironia</h3>
          <p>
            Pergunte: <em>"Faz sentido afirmar isso literalmente neste contexto?"</em>
            Se a resposta for "não" e a afirmação for positiva enquanto o contexto é
            negativo (ou vice-versa), há ironia. O contraste entre o que se diz e o que
            se sabe ser verdade é a assinatura da ironia.
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😏</span>
            <h3>Ironia Verbal</h3>
            <p>
              Dizer o contrário do que se pensa. "Que delícia estar preso num
              engarrafamento de três horas!"
            </p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Ironia Visual (charges)</h3>
            <p>
              A imagem contradiz ou exagera a realidade para criticar. Um político
              discursando sobre honestidade com as mãos nos bolsos alheios.
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Ironia de Situação</h3>
            <p>
              O que acontece é o oposto do esperado. Um bombeiro cuja casa pega fogo.
            </p>
          </div>
        </div>
        <div className="math-block">
          <h3>Exemplo Clássico de Ironia Verbal</h3>
          <p>
            <em>"O governo demonstrou toda sua competência: em apenas dez anos, conseguiu
            não concluir uma única obra de infraestrutura."</em>
          </p>
          <p>
            O enunciado usa a palavra "competência" com sentido positivo, mas o fato
            descrito (não concluir obras) revela que a intenção é criticar a incompetência.
            O efeito irônico amplifica a crítica.
          </p>
        </div>
      </section>

      {/* SEÇÃO 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Compreensão</span>
        <h2>8. Paráfrase como Teste de Compreensão</h2>
        <p>
          A <strong>paráfrase</strong> consiste em reescrever um enunciado com palavras
          diferentes, preservando o sentido original. No ENEM, questões que pedem "qual
          alternativa melhor expressa a ideia do texto" ou "qual é uma paráfrase adequada"
          testam essa competência diretamente.
        </p>
        <p>
          Uma boa paráfrase <em>mantém a informação central</em> e <em>altera a forma</em>.
          Uma paráfrase ruim muda tanto a forma quanto o sentido — e aí deixa de ser
          paráfrase para se tornar distorção. Uma alternativa que acrescenta informação
          não presente no texto também está errada, mesmo que o acréscimo seja verdadeiro.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>O que faz</th>
                <th>É válida?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paráfrase adequada</td>
                <td>Altera forma, preserva sentido</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Distorção</td>
                <td>Altera forma E sentido</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Acréscimo indevido</td>
                <td>Adiciona informação ausente no texto</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Cópia</td>
                <td>Reproduz o texto sem alteração</td>
                <td>Não (não é paráfrase)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <h3>Exercício Mental de Paráfrase</h3>
          <p>
            Original: <em>"O consumismo exacerbado compromete a sustentabilidade
            ambiental."</em>
          </p>
          <p>
            Paráfrase válida: <em>"O consumo excessivo prejudica a preservação do meio
            ambiente."</em>
          </p>
          <p>
            Distorção: <em>"O consumismo é causado pela degradação ambiental."</em>
            (inverteu a relação de causalidade — isso é errado.)
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Teste rápido para paráfrases no ENEM</h3>
          <p>
            Ao avaliar se uma alternativa é paráfrase válida, faça três perguntas:
            (1) A ideia central foi mantida? (2) Alguma informação foi acrescentada ou
            suprimida sem respaldo no texto? (3) A relação lógica (causa-efeito, contraste,
            adição) foi preservada? Se as respostas forem sim, não, sim — é uma paráfrase
            válida.
          </p>
        </div>
      </section>

      {/* SEÇÃO 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias ENEM</span>
        <h2>9. Estratégias para Questões de Interpretação no ENEM</h2>
        <p>
          O ENEM não testa memorização — testa competência leitora. Por isso, uma
          abordagem sistemática de resolução de questões faz toda a diferença. A seguir,
          as estratégias mais eficazes organizadas por tipo de questão.
        </p>

        {/* SVG 2 — Fluxograma de estratégia */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 420"
            width="720"
            height="420"
            aria-label="Fluxograma de estratégia para questões de interpretação no ENEM"
          >
            <rect width="720" height="420" rx="12" fill="#f8fafc" />

            {/* Título */}
            <text x="360" y="34" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold">Fluxograma: Como Resolver Questões de Interpretação</text>

            {/* Passo 1 */}
            <rect x="260" y="54" width="200" height="46" rx="8" fill="#6366f1" />
            <text x="360" y="74" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PASSO 1</text>
            <text x="360" y="91" textAnchor="middle" fill="#e0e7ff" fontSize="11">Leia o enunciado da questão</text>

            {/* Seta 1→2 */}
            <line x1="360" y1="100" x2="360" y2="122" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* Passo 2 */}
            <rect x="220" y="122" width="280" height="46" rx="8" fill="#3b82f6" />
            <text x="360" y="142" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PASSO 2</text>
            <text x="360" y="159" textAnchor="middle" fill="#dbeafe" fontSize="11">Identifique o tipo (literal / inferencial / paráfrase)</text>

            {/* Seta 2→3 */}
            <line x1="360" y1="168" x2="360" y2="190" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* Passo 3 */}
            <rect x="210" y="190" width="300" height="46" rx="8" fill="#0ea5e9" />
            <text x="360" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PASSO 3</text>
            <text x="360" y="227" textAnchor="middle" fill="#e0f2fe" fontSize="11">Leia o texto com a pergunta em mente</text>

            {/* Seta 3→4 */}
            <line x1="360" y1="236" x2="360" y2="258" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* Passo 4 */}
            <rect x="200" y="258" width="320" height="46" rx="8" fill="#10b981" />
            <text x="360" y="278" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PASSO 4</text>
            <text x="360" y="295" textAnchor="middle" fill="#d1fae5" fontSize="11">Elimine alternativas com informações ausentes no texto</text>

            {/* Seta 4→5 */}
            <line x1="360" y1="304" x2="360" y2="326" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />

            {/* Passo 5 */}
            <rect x="220" y="326" width="280" height="46" rx="8" fill="#f59e0b" />
            <text x="360" y="346" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PASSO 5</text>
            <text x="360" y="363" textAnchor="middle" fill="#fef3c7" fontSize="11">Confirme: a resposta está sustentada no texto?</text>

            {/* Definição de seta */}
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Rodapé */}
            <text x="360" y="402" textAnchor="middle" fill="#94a3b8" fontSize="11">Nunca responda com base em achismo — ancore-se sempre no texto</text>
          </svg>
          <figcaption>Fluxograma de 5 passos para resolução de questões de interpretação no ENEM</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔎</span>
            <h3>O que o texto diz?</h3>
            <p>
              Questão de localização. Volte ao texto, encontre o trecho exato e
              compare com as alternativas palavra por palavra.
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>O que o texto implica?</h3>
            <p>
              Questão inferencial. Identifique pressupostos, subentendidos ou
              conclusões lógicas que decorrem necessariamente do texto.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Qual é a ideia central?</h3>
            <p>
              Questão de síntese. Formule mentalmente a tese do texto e compare
              com as alternativas — a correta é a mais ampla e fiel.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Qual é a paráfrase válida?</h3>
            <p>
              Questão de equivalência. Verifique se a alternativa preserva o
              sentido sem acrescentar nem distorcer.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Os 3 erros mais comuns — e como evitá-los</h3>
          <p>
            <strong>1. Responder com conhecimento externo:</strong> a alternativa pode ser
            verdadeira no mundo real mas não estar no texto — e por isso está errada.
            Sempre âncora no texto.
          </p>
          <p>
            <strong>2. Generalizar além do texto:</strong> se o texto fala de "alguns"
            jovens, a alternativa que diz "todos os jovens" está errada.
          </p>
          <p>
            <strong>3. Confundir o oposto:</strong> alternativas que invertem a relação
            de causa e efeito ou o polo positivo/negativo são pego-ratos clássicos.
          </p>
        </div>
      </section>

      {/* SEÇÃO 10 */}
      <section className="lesson-section">
        <span className="section-kicker">Multimodalidade</span>
        <h2>10. Análise de Texto Misto: Verbal + Não Verbal</h2>
        <p>
          O ENEM é um dos exames que mais cobra a leitura de <strong>textos
          multimodais</strong> — aqueles que combinam linguagem verbal (palavras) com
          linguagem não verbal (imagens, cores, formas, disposição gráfica). Charges,
          tirinhas, propagandas, infográficos e memes são exemplos.
        </p>
        <p>
          A chave para interpretar textos mistos é entender que as linguagens se
          <strong> complementam</strong> ou <strong>contrastam</strong> para produzir
          sentido. Em uma charge, a imagem pode mostrar o que a legenda ironiza; em uma
          propaganda, a imagem reforça ou contradiz o slogan.
        </p>
        <div className="lesson-highlight">
          <h3>Roteiro de Análise de Charge</h3>
          <p>
            <strong>1. Identifique os elementos visuais:</strong> quem são os personagens?
            O que fazem? Qual é o cenário?
          </p>
          <p>
            <strong>2. Identifique os elementos verbais:</strong> há legenda, balão de fala
            ou título? O que dizem?
          </p>
          <p>
            <strong>3. Relacione os dois:</strong> a imagem e o texto se reforçam ou se
            contradizem? O contraste cria ironia?
          </p>
          <p>
            <strong>4. Identifique o alvo da crítica:</strong> a charge critica quem ou o
            quê? Qual fenômeno social, político ou cultural está sendo satirizado?
          </p>
          <p>
            <strong>5. Contextualize:</strong> qual evento ou realidade histórica a charge
            pressupõe que o leitor conheça?
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🖊️</span>
            <h3>Charge</h3>
            <p>
              Crítica social ou política em linguagem visual caricatural. Exige
              conhecimento de contexto histórico e leitura inferencial.
            </p>
          </div>
          <div className="lesson-card">
            <span>📟</span>
            <h3>Tirinha</h3>
            <p>
              Sequência narrativa em quadrinhos. O humor geralmente está no último
              quadro. Exige leitura da progressão temporal.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Infográfico</h3>
            <p>
              Combina dados numéricos, imagens e textos explicativos. Exige leitura
              integrada de tabela, gráfico e legenda.
            </p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Propaganda / Anúncio</h3>
            <p>
              Linguagem persuasiva com imagens sedutoras. Exige identificar a
              intenção, o público-alvo e os recursos de convencimento.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão Integrada</span>
        <h2>11. Mapa Geral da Interpretação Textual</h2>
        <p>
          A interpretação textual é um processo <strong>em camadas</strong>. Cada camada
          adiciona profundidade à compreensão. O leitor habilidoso transita entre elas com
          naturalidade, mobilizando a camada certa para responder cada tipo de questão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Camada</th>
                <th>O que envolve</th>
                <th>Questões típicas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decodificação</td>
                <td>Ler palavras e frases</td>
                <td>"O texto afirma que..."</td>
              </tr>
              <tr>
                <td>Compreensão literal</td>
                <td>Localizar informações explícitas</td>
                <td>"Segundo o texto..."</td>
              </tr>
              <tr>
                <td>Inferência</td>
                <td>Derivar sentidos implícitos (pressupostos, subentendidos)</td>
                <td>"O texto permite concluir que..."</td>
              </tr>
              <tr>
                <td>Interpretação</td>
                <td>Identificar tese, tema, intenção e efeitos de sentido</td>
                <td>"A ideia central do texto é..."</td>
              </tr>
              <tr>
                <td>Leitura crítica</td>
                <td>Avaliar recursos, posicionamento e contexto</td>
                <td>"A ironia produz o efeito de..."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Checklist Final para qualquer questão de interpretação</h3>
          <p>
            Antes de marcar a resposta, confirme: (1) Minha resposta está no texto? (2) Não
            estou acrescentando informação externa? (3) Não estou generalizando além do que
            o texto diz? (4) Não confundi o polo (positivo/negativo, causa/efeito)? Se as
            quatro respostas forem "sim, não, não, não" — pode marcar com segurança.
          </p>
        </div>
      </section>

      {/* SEÇÃO DE EXERCÍCIOS */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Leitura Literal vs. Inferencial"
          statement={
            <p>
              Leia o trecho: <em>"De acordo com o relatório divulgado pelo IBGE, o Brasil
              registrou crescimento de 2,9% no PIB no último trimestre."</em>
              <br /><br />
              Uma questão que pede "o que o texto afirma" exige qual tipo de leitura?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Leitura inferencial, pois é preciso deduzir o crescimento.",
            },
            {
              letter: "b",
              text: "Leitura literal, pois a informação está explicitamente declarada no texto.",
              correct: true,
            },
            {
              letter: "c",
              text: "Leitura crítica, pois envolve avaliar a veracidade do dado.",
            },
            {
              letter: "d",
              text: "Leitura subjetiva, pois depende do conhecimento prévio do leitor.",
            },
          ]}
          resolution={
            <p>
              O enunciado pede o que o texto <strong>afirma</strong> — verbo que indica
              leitura literal. A informação sobre o crescimento do PIB está explicitamente
              declarada, sem necessidade de inferência. Questões com "afirma", "declara"
              ou "segundo o texto" operam sempre no nível da leitura literal.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pressupostos e Subentendidos"
          statement={
            <p>
              Analise o enunciado: <em>"O prefeito voltou a prometer obras de
              saneamento para o bairro."</em>
              <br /><br />
              Qual informação está <strong>pressuposta</strong> nesse enunciado?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As obras de saneamento serão concluídas em breve.",
            },
            {
              letter: "b",
              text: "O bairro não possui infraestrutura alguma.",
            },
            {
              letter: "c",
              text: "O prefeito já havia prometido obras de saneamento antes.",
              correct: true,
            },
            {
              letter: "d",
              text: "Os moradores do bairro estão insatisfeitos com o prefeito.",
            },
          ]}
          resolution={
            <p>
              O verbo <strong>"voltou a"</strong> é uma palavra-gatilho de pressuposto: ele
              pressupõe que a ação ocorreu anteriormente. Assim, "voltou a prometer"
              necessariamente implica que o prefeito já havia feito essa promessa antes —
              informação embutida na estrutura do enunciado, independentemente do contexto.
              As demais alternativas são subentendidos possíveis, mas não pressupostos
              garantidos pela gramática.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tese, Argumento e Intenção"
          statement={
            <p>
              Leia o trecho de um artigo de opinião:
              <br /><br />
              <em>"A redução da maioridade penal não diminui a criminalidade — os dados
              internacionais são categóricos nesse sentido. O que precisa mudar não é a
              punição, mas a estrutura social que empurra jovens para o crime: educação
              de qualidade, oportunidades de emprego e políticas de saúde mental efetivas.
              Prender mais não resolve; investir mais, sim."</em>
              <br /><br />
              Qual é a <strong>tese</strong> central defendida pelo autor?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A maioridade penal deve ser reduzida para coibir o crime juvenil.",
            },
            {
              letter: "b",
              text: "Os dados internacionais são a única fonte confiável sobre criminalidade.",
            },
            {
              letter: "c",
              text: "A redução da maioridade penal é ineficaz e o combate ao crime requer mudanças estruturais.",
              correct: true,
            },
            {
              letter: "d",
              text: "O emprego é o principal fator de redução da criminalidade juvenil.",
            },
          ]}
          resolution={
            <p>
              A tese é a <em>posição central</em> que o autor defende. No texto, o autor
              argumenta contra a redução da maioridade penal (afirmando sua ineficácia com
              dados) e defende que a solução está em transformações estruturais (educação,
              emprego, saúde mental). A alternativa C sintetiza fielmente essa dupla tomada
              de posição — o "não" (maioridade ineficaz) e o "sim" (mudanças estruturais).
              A alternativa D é um argumento parcial, não a tese completa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Ironia em Charge"
          statement={
            <p>
              Uma charge mostra um político com uma enorme pasta de documentos etiquetada
              como "Projetos de Lei" entregando-a a um funcionário. A legenda diz:
              <em>"Não se preocupe, vamos arquivar com todo o cuidado."</em>
              <br /><br />
              Qual é o principal efeito de sentido produzido pela charge?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Elogiar a organização do sistema legislativo brasileiro.",
            },
            {
              letter: "b",
              text: "Criticar a demora ou o descaso com projetos de lei que não avançam.",
              correct: true,
            },
            {
              letter: "c",
              text: "Informar sobre o volume de projetos tramitando no Congresso.",
            },
            {
              letter: "d",
              text: "Defender a necessidade de arquivamento eficiente dos documentos legislativos.",
            },
          ]}
          resolution={
            <p>
              A charge usa a ironia para criticar o parlamento. A expressão "arquivar com
              todo o cuidado" soa como elogio superficial, mas no contexto — enorme pasta
              de projetos sendo entregue para arquivo — o subentendido é que os projetos
              serão simplesmente esquecidos ou descartados. O efeito irônico surge do
              contraste entre o tom elogioso da fala e a realidade negativa representada
              visualmente. O alvo da crítica é a inércia ou o descaso legislativo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Paráfrase Válida"
          statement={
            <p>
              O texto afirma: <em>"O acesso à internet ainda é desigual no Brasil: enquanto
              nas capitais a conectividade supera 90%, em municípios rurais esse índice
              mal ultrapassa 40%."</em>
              <br /><br />
              Qual das alternativas abaixo é uma <strong>paráfrase válida</strong> do
              trecho?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O Brasil possui uma das melhores infraestruturas digitais da América Latina, especialmente nas capitais.",
            },
            {
              letter: "b",
              text: "No Brasil, a internet é universalmente acessível, embora com velocidades diferentes por região.",
            },
            {
              letter: "c",
              text: "A distribuição do acesso à internet no Brasil é desigual, sendo muito maior nas capitais do que nas áreas rurais.",
              correct: true,
            },
            {
              letter: "d",
              text: "A falta de acesso à internet nas áreas rurais é causada pelo baixo investimento do governo federal.",
            },
          ]}
          resolution={
            <p>
              A alternativa C preserva o sentido central do texto — desigualdade no acesso
              à internet entre capitais e áreas rurais — com palavras diferentes, sem
              acrescentar nem distorcer informações. As demais falham: A acrescenta
              comparação com a América Latina (ausente no texto); B distorce ao afirmar
              "universalmente acessível" (contradiz o texto); D acrescenta uma causa
              (investimento do governo) que não está no texto — pode ser verdadeira no
              mundo real, mas não é uma paráfrase, pois extrapola o que o texto afirma.
            </p>
          }
        />
      </section>
    </article>
  );
}
