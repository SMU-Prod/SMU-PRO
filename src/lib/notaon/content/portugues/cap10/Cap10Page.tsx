"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 10</span>

          <h1>Coerência Textual</h1>

          <p>
            Entenda como um texto se torna inteligível, lógico e significativo —
            dominando os princípios que o ENEM cobra nas provas de linguagens e
            na avaliação da redação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>

        <h2>1. Coerência como Qualidade Semântico-Pragmática</h2>

        <p>
          A <strong>coerência textual</strong> é a propriedade que faz um texto ser
          percebido como uma unidade de sentido — não como um amontoado de frases
          soltas. Ela não existe nas palavras em si, mas é <em>construída na mente do
          leitor</em> a partir da interação entre o texto e o conhecimento de mundo que
          ele traz.
        </p>

        <p>
          Dizer que a coerência é <strong>semântica</strong> significa que ela envolve
          o sentido, as relações de significado entre as partes do texto. Dizer que é
          <strong> pragmática</strong> significa que depende do contexto de produção e
          recepção: quem fala, para quem, em que situação, com qual intenção.
        </p>

        <div className="lesson-highlight">
          <h3>Definição Precisa</h3>
          <p>
            Coerência é a qualidade pela qual um texto faz sentido para seus interlocutores,
            resultando da interação entre as informações textuais e o conhecimento prévio
            do leitor. Um texto incoerente não é necessariamente sem gramática — pode ter
            frases perfeitamente corretas que, juntas, não formam sentido algum.
          </p>
        </div>

        <div className="math-block">
          <h3>Exemplo Clássico</h3>
          <p>
            "A pedra está dormindo com raiva porque o céu é triangular."
          </p>
          <p>
            Cada palavra existe, a gramática está correta, mas o texto é incoerente:
            pedras não dormem, não sentem raiva, e o céu não tem forma geométrica
            definida. A sequência viola as relações de sentido que o leitor espera.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 600 200"
            width="600"
            height="200"
            aria-label="Diagrama mostrando que coerência nasce da interação entre texto e conhecimento de mundo"
          >
            <rect x="10" y="60" width="160" height="80" rx="12" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="90" y="95" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">Texto</text>
            <text x="90" y="115" textAnchor="middle" fontSize="12" fill="#4338ca">(palavras, frases)</text>

            <rect x="215" y="60" width="170" height="80" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="300" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">Conhecimento</text>
            <text x="300" y="108" textAnchor="middle" fontSize="12" fill="#b45309">de Mundo</text>
            <text x="300" y="126" textAnchor="middle" fontSize="12" fill="#b45309">do Leitor</text>

            <text x="400" y="105" fontSize="28" fill="#6366f1">&#8594;</text>

            <rect x="430" y="60" width="160" height="80" rx="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="510" y="95" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#14532d">Coerência</text>
            <text x="510" y="115" textAnchor="middle" fontSize="12" fill="#166534">(sentido global)</text>

            <text x="180" y="105" fontSize="28" fill="#f59e0b">+</text>
          </svg>
          <figcaption>A coerência emerge da interação entre texto e conhecimento de mundo</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Coerência</span>

        <h2>2. Coerência Global vs. Coerência Local</h2>

        <p>
          A coerência pode ser analisada em dois níveis que se complementam: o
          <strong> global</strong> e o <strong>local</strong>. Compreender essa distinção é
          fundamental para avaliar redações e interpretar textos no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Coerência Global</h3>
            <p>
              Refere-se à <strong>unidade temática do texto como um todo</strong>. O texto
              deve girar em torno de um tema central e todos os parágrafos devem contribuir
              para esse tema. Se um parágrafo fala de algo completamente alheio ao tema,
              a coerência global é quebrada.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Coerência Local</h3>
            <p>
              Refere-se à <strong>relação lógica entre partes adjacentes</strong> — entre
              frases consecutivas, entre orações de um mesmo parágrafo. Mesmo que o texto
              trate de um único tema, sentenças vizinhas podem ser contraditórias ou
              ilógicas entre si, quebrando a coerência local.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Como diferenciar na prática</h3>
          <p>
            <strong>Coerência global quebrada:</strong> Uma redação sobre desmatamento
            que, no terceiro parágrafo, discorre longamente sobre a culinária italiana
            sem qualquer relação com o tema ambiental.
          </p>
          <p>
            <strong>Coerência local quebrada:</strong> "A educação é fundamental para o
            desenvolvimento. Por isso, as escolas devem ser fechadas." — as frases são
            vizinhas, mas a conclusão é o oposto do que a premissa permite inferir.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípios Fundamentais</span>

        <h2>3. Princípio da Não Contradição</h2>

        <p>
          O <strong>princípio da não contradição</strong> determina que um texto não
          pode conter afirmações que se excluam mutuamente sem que haja um propósito
          retórico explícito para isso. Se o autor afirma X em um momento e não-X em
          outro, o texto perde sua credibilidade lógica.
        </p>

        <p>
          É importante distinguir a contradição indesejada da <em>antítese</em> ou do
          <em>paradoxo</em> intencional. Quando Camões escreve "amor é fogo que arde
          sem se ver", ele trabalha com aparente contradição de forma propositada para
          produzir sentido poético. A incoerência ocorre quando a contradição não serve
          a nenhum propósito comunicativo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>Exemplo</th>
                <th>Julgamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contradição indesejada</td>
                <td>"A violência urbana aumentou. Vivemos num país cada vez mais seguro."</td>
                <td>Incoerente — as afirmações se anulam sem propósito</td>
              </tr>
              <tr>
                <td>Paradoxo intencional</td>
                <td>"A morte me deu vida" (voz poética)</td>
                <td>Coerente — contradição é o recurso expressivo</td>
              </tr>
              <tr>
                <td>Contradição por descuido</td>
                <td>"O texto defende a liberdade. No entanto, conclui que ela deve ser abolida."</td>
                <td>Incoerente — viola a unidade argumentativa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípios Fundamentais</span>

        <h2>4. Princípio da Relevância e da Consistência</h2>

        <p>
          Dois outros princípios regem a coerência: a <strong>relevância</strong> e a
          <strong> consistência</strong>. Ambos garantem que o texto mantenha unidade
          não apenas temática, mas também estilística e formal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Princípio da Relevância</h3>
            <p>
              Toda informação inserida no texto deve ser <strong>pertinente ao tema</strong>
              e contribuir para o desenvolvimento do raciocínio. Informações irrelevantes
              desviam a atenção do leitor e enfraquecem a argumentação. Na redação ENEM,
              inserir dados ou exemplos sem relação direta com a tese compromete a nota de
              competência III (coerência argumentativa).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Princípio da Consistência</h3>
            <p>
              O texto deve manter <strong>ponto de vista, tempo verbal e pessoa gramatical</strong>
              coerentes ao longo de toda sua extensão. Mudar de "eu" para "você" sem motivo,
              misturar presente e passado sem critério, ou alternar entre perspectivas
              opostas (a favor / contra) sem transição adequada são violações de consistência.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Inconsistência de Tempo Verbal — Exemplo</h3>
          <p>
            Incorreto: "No século XIX, a industrialização avança rapidamente. As cidades cresceram
            e os trabalhadores enfrentam péssimas condições. O capitalismo se consolidou."
          </p>
          <p>
            O trecho mistura presente histórico e pretérito perfeito sem critério,
            gerando inconsistência temporal que prejudica a leitura.
          </p>
          <p>
            Correto: "No século XIX, a industrialização avançou rapidamente. As cidades cresceram
            e os trabalhadores enfrentaram péssimas condições. O capitalismo se consolidou."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Progressão</span>

        <h2>5. Progressão e Continuidade Temática</h2>

        <p>
          Um texto coerente não apenas mantém seu tema — ele <strong>avança</strong> sobre
          ele. A <em>progressão temática</em> é o mecanismo pelo qual cada nova informação
          acrescenta algo ao que foi dito anteriormente, fazendo o texto "caminhar" em
          direção ao seu objetivo comunicativo.
        </p>

        <p>
          A ausência de progressão gera dois problemas opostos: a <strong>repetição
          excessiva</strong> (o texto gira em círculos, repetem-se as mesmas ideias com
          palavras diferentes) e o <strong>salto temático</strong> (o texto pula etapas
          essenciais, deixando lacunas de compreensão).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 620 220"
            width="620"
            height="220"
            aria-label="Timeline de progressão temática ideal, com repetição e salto marcados como erros"
          >
            <text x="300" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Progressão Ideal</text>

            <circle cx="60" cy="80" r="24" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="60" y="85" textAnchor="middle" fontSize="11" fill="#3730a3">Tema</text>

            <line x1="86" y1="80" x2="164" y2="80" stroke="#6366f1" strokeWidth="2" />
            <polygon points="164,74 176,80 164,86" fill="#6366f1" />

            <circle cx="190" cy="80" r="24" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="190" y="85" textAnchor="middle" fontSize="11" fill="#1e40af">+ Info</text>

            <line x1="216" y1="80" x2="294" y2="80" stroke="#6366f1" strokeWidth="2" />
            <polygon points="294,74 306,80 294,86" fill="#6366f1" />

            <circle cx="320" cy="80" r="24" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
            <text x="320" y="85" textAnchor="middle" fontSize="11" fill="#5b21b6">+ Arg</text>

            <line x1="346" y1="80" x2="424" y2="80" stroke="#6366f1" strokeWidth="2" />
            <polygon points="424,74 436,80 424,86" fill="#6366f1" />

            <circle cx="450" cy="80" r="24" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="450" y="80" textAnchor="middle" fontSize="11" fill="#14532d">Con-</text>
            <text x="450" y="93" textAnchor="middle" fontSize="11" fill="#14532d">clusão</text>

            <text x="300" y="138" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ef4444">Erros Comuns</text>

            <rect x="30" y="150" width="110" height="40" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="85" y="167" textAnchor="middle" fontSize="11" fill="#991b1b">Repetição</text>
            <text x="85" y="182" textAnchor="middle" fontSize="10" fill="#b91c1c">(girar em círculos)</text>

            <rect x="230" y="150" width="140" height="40" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="300" y="167" textAnchor="middle" fontSize="11" fill="#991b1b">Salto Temático</text>
            <text x="300" y="182" textAnchor="middle" fontSize="10" fill="#b91c1c">(pular etapas essenciais)</text>

            <rect x="450" y="150" width="130" height="40" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="515" y="167" textAnchor="middle" fontSize="11" fill="#991b1b">Fuga de Tema</text>
            <text x="515" y="182" textAnchor="middle" fontSize="10" fill="#b91c1c">(mudar o assunto)</text>
          </svg>
          <figcaption>Progressão temática ideal e erros que a comprometem</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Na Redação ENEM</h3>
          <p>
            Cada parágrafo deve introduzir uma <strong>nova informação</strong> (progressão)
            enquanto mantém relação com o que veio antes (continuidade). A fórmula clássica:
            introdução — desenvolvimento I — desenvolvimento II — conclusão com proposta de
            intervenção respeita exatamente essa lógica de progressão controlada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intertextualidade</span>

        <h2>6. Intertextualidade como Recurso de Coerência</h2>

        <p>
          A <strong>intertextualidade</strong> é o fenômeno pelo qual um texto dialoga
          com outros textos, incorporando-os de forma explícita (citação, referência
          direta) ou implícita (alusão, pastiche, paródia). Longe de ser um desvio,
          é um poderoso <em>recurso de coerência</em> quando empregado adequadamente.
        </p>

        <p>
          Ao citar uma lei, um dado estatístico, uma passagem literária ou o pensamento
          de um filósofo, o autor <strong>ancora sua argumentação</strong> em um
          conhecimento compartilhado, tornando o texto mais coerente com a realidade
          extratextual e com as expectativas do leitor letrado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Intertextualidade</th>
                <th>Definição</th>
                <th>Efeito na Coerência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citação direta</td>
                <td>Reprodução literal de outro texto, com aspas e indicação da fonte</td>
                <td>Ancora o argumento em autoridade reconhecida</td>
              </tr>
              <tr>
                <td>Alusão</td>
                <td>Referência implícita a texto, evento ou personagem sem citação formal</td>
                <td>Cria cumplicidade com o leitor e amplia o sentido</td>
              </tr>
              <tr>
                <td>Paráfrase</td>
                <td>Reformulação com palavras próprias da ideia de outro texto</td>
                <td>Integra o conhecimento externo ao discurso próprio</td>
              </tr>
              <tr>
                <td>Paródia</td>
                <td>Reescrita que inverte ou critica o texto-fonte</td>
                <td>Gera coerência crítica — o sentido novo depende do original</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Intertextualidade que Sustenta a Coerência</h3>
          <p>
            "Como afirmou Nelson Mandela, a educação é a arma mais poderosa para mudar o mundo.
            Nesse sentido, investir em escolas públicas de qualidade não é gasto — é o mais
            estratégico dos investimentos sociais."
          </p>
          <p>
            A citação de Mandela não é enfeite: ela estabelece uma premissa amplamente aceita
            que torna a conclusão do parágrafo coerente e bem fundamentada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Implícitos</span>

        <h2>7. Pressupostos e Implícitos no Conhecimento Partilhado</h2>

        <p>
          Toda comunicação depende de informações que <strong>não precisam ser ditas</strong>
          porque são conhecidas por ambos os interlocutores. Esses conteúdos implícitos dividem-se
          em dois grupos principais: os <em>pressupostos</em> e os <em>subentendidos</em>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>Pressupostos</h3>
            <p>
              São informações que o enunciado pressupõe como verdadeiras, independente de o
              falante afirmar ou negar. Em "Paulo parou de fumar", pressupõe-se que Paulo fumava
              antes. Esses pressupostos precisam ser compartilhados para que o texto faça sentido.
            </p>
          </div>

          <div className="lesson-card">
            <span>💬</span>
            <h3>Subentendidos</h3>
            <p>
              São insinuações que o leitor infere mas o autor pode negar ter dito. "Seu novo
              carro é bem econômico" pode subentender que é feio ou pequeno. Dependem do
              contexto e do conhecimento partilhado para serem compreendidos corretamente.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌐</span>
            <h3>Conhecimento de Mundo</h3>
            <p>
              O acervo enciclopédico do leitor — fatos históricos, convenções sociais,
              referências culturais — é o que permite a ele "completar" as lacunas do
              texto e construir a coerência. Sem conhecimento partilhado, a comunicação falha.
            </p>
          </div>

          <div className="lesson-card">
            <span>📖</span>
            <h3>Inferências</h3>
            <p>
              O leitor realiza inferências para conectar informações que o texto não torna
              explícitas. "Ele entrou encharcado" leva o leitor a inferir que choveu ou que
              ele caiu na água. Essas inferências são parte essencial da construção da coerência.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Implicação para a Escrita</h3>
          <p>
            Quando o autor não compartilha o mesmo universo cultural do leitor, deve
            <strong> explicitar</strong> os pressupostos necessários. Uma redação que pressupõe
            dados desconhecidos sem apresentá-los cria lacunas de coerência — o leitor não
            consegue acompanhar o raciocínio porque falta base informacional.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pragmática</span>

        <h2>8. Coerência Pragmática: Adequação ao Gênero e à Situação</h2>

        <p>
          A <strong>coerência pragmática</strong> refere-se à adequação do texto à sua
          situação de comunicação: o gênero textual, o suporte, o interlocutor, os
          objetivos do discurso. Um texto pode ser tematicamente coerente e mesmo assim
          ser pragmaticamente incoerente se usa uma linguagem ou estrutura inadequada
          para a situação.
        </p>

        <p>
          Imagine um advogado que, numa petição judicial, usa linguagem coloquial e gírias.
          O conteúdo pode ser juridicamente correto, mas o texto é pragmaticamente incoerente:
          viola as convenções do gênero petição, comprometendo a comunicação com o juiz.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero</th>
                <th>Situação</th>
                <th>Expectativa de Coerência Pragmática</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Redação ENEM</td>
                <td>Avaliação formal de competências escritas</td>
                <td>Registro culto, estrutura dissertativa, impessoalidade</td>
              </tr>
              <tr>
                <td>Notícia jornalística</td>
                <td>Informar o público sobre fato recente</td>
                <td>Objetividade, resposta às perguntas básicas (quem, o quê, quando)</td>
              </tr>
              <tr>
                <td>Conto literário</td>
                <td>Entretenimento e reflexão estética</td>
                <td>Liberdade expressiva, coerência interna da ficção</td>
              </tr>
              <tr>
                <td>Receita culinária</td>
                <td>Instrução para preparar um prato</td>
                <td>Sequência lógica de passos, modo imperativo, precisão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>No ENEM — Gênero e Coerência Pragmática</h3>
          <p>
            A prova cobra a adequação ao gênero quando apresenta textos e pede ao candidato
            que identifique a finalidade, o público-alvo ou o efeito de sentido. Um texto
            de divulgação científica que usa jargão técnico inacessível é pragmaticamente
            incoerente para o público leigo ao qual se destina.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Distinção Essencial</span>

        <h2>9. Coesão vs. Coerência — Diferença Fundamental</h2>

        <p>
          Uma das confusões mais comuns em Língua Portuguesa é tratar coesão e coerência
          como sinônimos. Elas são conceitos distintos, embora complementares.
        </p>

        <p>
          A <strong>coesão</strong> é a <em>propriedade de superfície</em> do texto: os
          mecanismos linguísticos explícitos que ligam as partes — pronomes, conjunções,
          sinônimos, elipse. A <strong>coerência</strong> é a <em>propriedade de profundidade</em>:
          a continuidade de sentido que o texto transmite ao leitor.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 600 240"
            width="600"
            height="240"
            aria-label="Diagrama comparando coesão (superfície) e coerência (profundidade) do texto"
          >
            <rect x="20" y="20" width="560" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

            <rect x="40" y="40" width="240" height="160" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="160" y="68" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1d4ed8">COESÃO</text>
            <text x="160" y="90" textAnchor="middle" fontSize="12" fill="#1e40af">Superfície do texto</text>
            <text x="160" y="115" textAnchor="middle" fontSize="11" fill="#2563eb">Pronomes</text>
            <text x="160" y="133" textAnchor="middle" fontSize="11" fill="#2563eb">Conjunções</text>
            <text x="160" y="151" textAnchor="middle" fontSize="11" fill="#2563eb">Sinônimos / Elipse</text>
            <text x="160" y="169" textAnchor="middle" fontSize="11" fill="#2563eb">Conectivos</text>
            <text x="160" y="190" textAnchor="middle" fontSize="10" fill="#3b82f6">Visível — mecanismos</text>

            <rect x="320" y="40" width="240" height="160" rx="12" fill="#fdf4ff" stroke="#a855f7" strokeWidth="2" />
            <text x="440" y="68" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#7e22ce">COERÊNCIA</text>
            <text x="440" y="90" textAnchor="middle" fontSize="12" fill="#6b21a8">Profundidade do texto</text>
            <text x="440" y="115" textAnchor="middle" fontSize="11" fill="#9333ea">Unidade temática</text>
            <text x="440" y="133" textAnchor="middle" fontSize="11" fill="#9333ea">Não contradição</text>
            <text x="440" y="151" textAnchor="middle" fontSize="11" fill="#9333ea">Relevância</text>
            <text x="440" y="169" textAnchor="middle" fontSize="11" fill="#9333ea">Progressão lógica</text>
            <text x="440" y="190" textAnchor="middle" fontSize="10" fill="#a855f7">Invisível — sentido</text>
          </svg>
          <figcaption>Coesão (mecanismos visíveis) e coerência (unidade de sentido) são complementares</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Os Quatro Cenários Possíveis</h3>
          <p>
            <strong>1. Com coesão E coerência:</strong> texto ideal — bem conectado e com sentido.
          </p>
          <p>
            <strong>2. Com coerência SEM coesão:</strong> texto com sentido, mas mal conectado —
            parece fragmentado, embora se entenda o que quer dizer.
          </p>
          <p>
            <strong>3. Com coesão SEM coerência:</strong> texto bem conectado, mas sem sentido —
            os conectivos estão certos, mas as ideias não se encaixam.
          </p>
          <p>
            <strong>4. SEM coesão NEM coerência:</strong> caos total — frases desconexas e sem sentido.
          </p>
        </div>

        <div className="math-block">
          <h3>Exemplo: Coesão sem Coerência</h3>
          <p>
            "O sol nasceu. Portanto, os elefantes gostam de música clássica. No entanto,
            a lua é feita de queijo."
          </p>
          <p>
            Os conectivos "portanto" e "no entanto" garantem coesão formal — mas o
            texto é completamente incoerente, porque as ideias não têm relação lógica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagnóstico</span>

        <h2>10. Texto Incoerente vs. Texto Incompleto</h2>

        <p>
          Outra distinção importante para a análise textual é entre um texto
          <strong> incoerente</strong> e um texto <strong>incompleto</strong>. Confundi-los
          leva a diagnósticos equivocados e a correções ineficazes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❌</span>
            <h3>Texto Incoerente</h3>
            <p>
              Contém informações que se <strong>contradizem</strong>, são irrelevantes para
              o tema, violam a lógica interna ou ignoram o contexto pragmático. O problema
              não é ausência de informação — é a presença de informação conflitante ou
              sem sentido. Acrescentar mais texto não resolve; é preciso <em>reescrever</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Texto Incompleto</h3>
            <p>
              Tem uma lógica interna válida, mas faltam informações essenciais para que
              o leitor compreenda o raciocínio. As ideias que estão lá são coerentes entre
              si, mas <strong>lacunas</strong> impedem a compreensão plena. O remédio é
              acrescentar as informações ausentes, não reescrever tudo.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Incoerente</th>
                <th>Incompleto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Problema central</td>
                <td>Contradição, irrelevância ou absurdo</td>
                <td>Lacunas de informação necessária</td>
              </tr>
              <tr>
                <td>Solução</td>
                <td>Reescrever o trecho problemático</td>
                <td>Acrescentar a informação que falta</td>
              </tr>
              <tr>
                <td>Lógica interna</td>
                <td>Rompida</td>
                <td>Preservada</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>"A vacina cura doenças. Logo, nunca devemos nos vacinar."</td>
                <td>"O programa foi um sucesso." (Sucesso em quê? Para quem?)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Redação ENEM</span>

        <h2>11. Como Avaliar e Garantir Coerência na Redação ENEM</h2>

        <p>
          O ENEM avalia a coerência principalmente nas <strong>Competências II e III</strong>:
          compreensão da proposta de redação (II) e capacidade de selecionar, relacionar
          e organizar informações em defesa de um ponto de vista (III). Um texto incoerente
          perde pontos nessas duas dimensões.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Defina a Tese Claramente</h3>
            <p>
              A tese é o núcleo de toda a coerência global. Se ela é vaga ou contraditória,
              o texto inteiro perde unidade. Escreva-a em uma frase objetiva e mantenha
              todos os argumentos apontando para ela.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔍</span>
            <h3>Revise Cada Parágrafo</h3>
            <p>
              Ao terminar cada parágrafo, pergunte: <em>isso contribui para minha tese?</em>
              Se não contribui diretamente, ou é reescrito para ser relevante, ou é eliminado.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Verifique a Progressão</h3>
            <p>
              Cada parágrafo deve dizer algo <em>novo</em> em relação ao anterior. Se dois
              parágrafos dizem a mesma coisa com palavras diferentes, funde-os em um só e
              libere espaço para um argumento novo.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Cheque a Consistência</h3>
            <p>
              Leia o texto inteiro e verifique: o tempo verbal muda sem razão? A pessoa
              gramatical oscila? O ponto de vista muda sem marcação retórica? Corrija
              antes de entregar.
            </p>
          </div>

          <div className="lesson-card">
            <span>💡</span>
            <h3>Adeque ao Gênero</h3>
            <p>
              A redação ENEM exige registro formal, impessoalidade e estrutura dissertativa.
              Gírias, linguagem afetiva ou estrutura narrativa sem relação com a tese
              violam a coerência pragmática e reduzem a nota de competência I.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Proposta de Intervenção Coerente</h3>
            <p>
              A proposta de intervenção (parágrafo final) deve ser <em>coerente com a tese</em>
              defendida. Uma redação que argumenta contra a desigualdade e propõe soluções
              que a aprofundam é incoerente pragmaticamente e perde pontos na Competência V.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Checklist de Coerência para a Redação</h3>
          <p>1. A tese está clara desde o primeiro parágrafo?</p>
          <p>2. Todos os argumentos sustentam a mesma tese?</p>
          <p>3. Não há afirmações contraditórias entre os parágrafos?</p>
          <p>4. Cada parágrafo avança o raciocínio (progressão)?</p>
          <p>5. O tempo verbal é consistente ao longo do texto?</p>
          <p>6. A proposta de intervenção decorre logicamente da argumentação?</p>
          <p>7. O registro é adequado ao gênero dissertativo-argumentativo?</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>12. Pratique o que Aprendeu</h2>

        <Exercise
          title="Conceito de Coerência"
          level="Básico"
          statement={
            <p>
              Assinale a alternativa que apresenta a definição mais precisa de coerência textual,
              conforme os estudos linguísticos contemporâneos.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Coerência é o conjunto de mecanismos gramaticais que ligam as frases de um texto, como pronomes, conjunções e sinônimos.",
            },
            {
              letter: "b",
              text: "Coerência é a propriedade que faz um texto ser percebido como unidade de sentido, resultando da interação entre as informações textuais e o conhecimento de mundo do leitor.",
              correct: true,
            },
            {
              letter: "c",
              text: "Coerência é a ausência total de erros gramaticais em um texto, garantindo que todas as frases estejam na norma culta.",
            },
            {
              letter: "d",
              text: "Coerência é a repetição estratégica de palavras-chave ao longo do texto para garantir que o leitor não perca o tema central.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>B</strong>. Coerência não é um mecanismo linguístico
              de superfície (isso seria coesão, alternativa A), nem ausência de erros gramaticais
              (alternativa C), nem repetição de palavras (alternativa D). Ela é uma propriedade
              semântico-pragmática que emerge da interação entre o texto e o conhecimento prévio
              do leitor, fazendo o texto funcionar como uma unidade de sentido.
            </p>
          }
        />

        <Exercise
          title="Coerência Global vs. Local"
          level="Intermediário"
          statement={
            <p>
              Leia o trecho abaixo e identifique que tipo de incoerência ele apresenta:
              <br /><br />
              <em>"A violência escolar é um problema grave no Brasil. Pesquisas indicam que
              um em cada três alunos sofreu bullying. A culinária nordestina é riquíssima em
              temperos e tradições culturais. Por isso, o governo deve investir mais em
              psicólogos escolares."</em>
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Incoerência local, pois a segunda e a terceira frase se contradizem diretamente.",
            },
            {
              letter: "b",
              text: "Incoerência global, pois a frase sobre culinária nordestina rompe a unidade temática do texto sobre violência escolar.",
              correct: true,
            },
            {
              letter: "c",
              text: "Inconsistência verbal, pois o texto mistura presente e pretérito sem critério.",
            },
            {
              letter: "d",
              text: "O texto é coerente, pois todas as frases estão gramaticalmente corretas.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>B</strong>. O trecho viola a <strong>coerência global</strong>:
              o tema central é violência escolar, mas a frase sobre culinária nordestina é
              completamente irrelevante para esse tema, quebrando a unidade temática do texto
              como um todo. Não há contradição entre frases adjacentes (o que seria incoerência
              local), e o tempo verbal é consistente. A gramática correta não garante coerência.
            </p>
          }
        />

        <Exercise
          title="Princípio da Não Contradição"
          level="Avançado"
          statement={
            <p>
              Considere o seguinte fragmento de redação:
              <br /><br />
              <em>"A educação é o principal instrumento de transformação social e deve ser
              universalmente acessível. Contudo, diante dos altos custos do sistema educacional,
              o Estado deveria privatizar completamente o ensino, tornando-o exclusivo para quem
              pode pagar, a fim de elevar sua qualidade."</em>
              <br /><br />
              Do ponto de vista da coerência, qual problema o texto apresenta?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Incoerência local apenas: a conjunção 'contudo' está sendo usada de forma incorreta.",
            },
            {
              letter: "b",
              text: "Ausência de coesão: o texto não apresenta pronomes nem sinônimos suficientes.",
            },
            {
              letter: "c",
              text: "Violação do princípio da não contradição: a conclusão (privatização exclusiva) contradiz a premissa estabelecida (educação universal e acessível).",
              correct: true,
            },
            {
              letter: "d",
              text: "Incoerência pragmática: o texto usa linguagem informal inadequada ao gênero dissertativo.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>C</strong>. O texto viola o <strong>princípio da não
              contradição</strong>: a premissa afirma que a educação deve ser universalmente
              acessível, mas a solução proposta — privatização completa com acesso restrito a
              quem paga — é o oposto lógico dessa premissa. A conjunção "contudo" está sendo
              usada corretamente para marcar contraste (alternativa A errada). A coesão existe
              (alternativa B errada). A linguagem é formal (alternativa D errada). O problema
              é estritamente de coerência lógico-argumentativa.
            </p>
          }
        />

        <Exercise
          title="Coerência em Texto Literário"
          level="Contextualizado"
          statement={
            <p>
              Leia o poema de Manuel Bandeira:
              <br /><br />
              <em>"Vou-me embora pra Pasárgada / Lá sou amigo do rei / Lá tenho a mulher
              que eu quero / Na cama que escolherei / Vou-me embora pra Pasárgada."</em>
              <br /><br />
              Pasárgada é uma cidade persa que o poeta nunca visitou e que funciona como lugar
              imaginário de realização plena. Do ponto de vista da coerência textual, como se
              explica a construção de sentido do poema, que fala de ir a um lugar inexistente
              como se fosse real?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O poema é incoerente, pois Pasárgada não existe e o eu lírico não pode realmente ir até lá.",
            },
            {
              letter: "b",
              text: "O poema tem coerência interna dentro do pacto ficcional-lírico: a coerência é construída no mundo imaginário criado pelo texto, sustentada pelo conhecimento partilhado sobre o desejo de evasão da realidade.",
              correct: true,
            },
            {
              letter: "c",
              text: "O poema é coerente apenas porque usa um lugar histórico real — Pasárgada existiu na Pérsia Antiga.",
            },
            {
              letter: "d",
              text: "A coerência do poema depende exclusivamente dos conectivos e mecanismos de coesão entre os versos.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>B</strong>. A coerência textual não exige que o
              conteúdo seja factualmente verdadeiro — exige que faça sentido dentro do pacto
              comunicativo estabelecido. No caso do texto literário, o leitor aceita o pacto
              ficcional-lírico: o eu lírico expressa um desejo de evasão (conteúdo pragmático),
              e Pasárgada funciona como metáfora do lugar perfeito. O conhecimento partilhado
              sobre a condição humana de buscar um refúgio ideal é o que dá coerência ao poema.
              A coerência literária tem suas próprias regras — não é a factualidade que a garante.
            </p>
          }
        />

        <Exercise
          title="Coerência na Redação ENEM"
          level="Contextualizado"
          statement={
            <p>
              Um candidato escreveu a seguinte redação sobre o tema "Desafios para a inserção
              de pessoas com deficiência no mercado de trabalho":
              <br /><br />
              <em>Introdução: defende que as empresas devem cumprir a Lei de Cotas.
              Desenvolvimento I: apresenta dados sobre desemprego entre pessoas com deficiência.
              Desenvolvimento II: discorre sobre a importância do carnaval para a cultura brasileira.
              Conclusão: propõe que o governo fiscalize o cumprimento da Lei de Cotas.</em>
              <br /><br />
              Qual competência da redação ENEM é mais diretamente prejudicada e por quê?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Competência I (domínio da norma culta), pois o desvio temático indica desconhecimento gramatical.",
            },
            {
              letter: "b",
              text: "Competência II (compreensão da proposta) e Competência III (coerência argumentativa), pois o segundo parágrafo de desenvolvimento foge ao tema, quebrando a coerência global e a relevância argumentativa.",
              correct: true,
            },
            {
              letter: "c",
              text: "Competência IV (coesão textual), pois faltam conectivos entre o parágrafo sobre carnaval e os demais.",
            },
            {
              letter: "d",
              text: "Competência V (proposta de intervenção), pois a solução apresentada na conclusão não é detalhada o suficiente.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>B</strong>. O segundo parágrafo de desenvolvimento,
              sobre o carnaval, foge completamente ao tema da inserção de pessoas com deficiência
              no mercado de trabalho. Isso viola a <strong>coerência global</strong> do texto
              (unidade temática) e compromete a <strong>Competência II</strong> (o candidato
              demonstra não ter compreendido ou respeitado a proposta) e a <strong>Competência III</strong>
              (a seleção e organização de informações é inadequada — um parágrafo irrelevante
              não sustenta a tese). A coesão pode até estar presente no parágrafo; o problema
              é semântico-pragmático, não formal.
            </p>
          }
        />
      </section>
    </article>
  );
}
