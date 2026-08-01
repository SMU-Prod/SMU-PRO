"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 40</span>
          <h1>Interpretação de Texto</h1>
          <p>
            Ler é muito mais do que decodificar palavras: é um ato de construção ativa de sentido. A interpretação textual distingue leitores superficiais de leitores críticos, e é exatamente essa habilidade que o ENEM exige em praticamente todas as suas questões. Neste capítulo você aprenderá a diferenciar compreensão de interpretação, a captar pressupostos e subentendidos, a inferir sentidos não ditos, a identificar tema, tese e intertextualidade — e a dominar as estratégias de leitura que separam candidatos medianos de quem gabaritar a prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. Compreensão × Interpretação — Qual é a Diferença?</h2>

        <p>
          A confusão entre compreensão e interpretação é uma armadilha frequente nas provas. <strong>Compreender</strong> um texto significa apreender as informações que estão explicitamente ditas — o que o texto afirma de forma literal, direta, sem necessidade de raciocínio adicional. Já <strong>interpretar</strong> significa ir além do literal: relacionar o texto a contextos mais amplos, inferir sentidos implícitos, perceber ironias, identificar a intenção comunicativa do autor e construir uma leitura crítica e fundamentada.
        </p>
        <p>
          O linguista francês Roland Barthes dizia que o texto é uma "galáxia de significantes", não uma estrutura de sentido fixo. A interpretação, portanto, é sempre uma produção: o leitor não extrai passivamente um significado pronto do texto, mas o constrói ativamente em diálogo com suas experiências, com o contexto de produção e com os demais textos que já leu. Isso não significa, entretanto, que qualquer interpretação seja válida — ela precisa ser <em>sustentável pelo texto</em>, ou seja, deve haver pistas linguísticas e contextuais que a fundamentem.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplo prático — compreensão vs. interpretação:</strong>
          <p>Texto: <em>"O político prometeu melhorar a saúde pública durante a campanha. Três anos depois, os hospitais seguem sucateados."</em></p>
          <ul>
            <li><strong>Compreensão:</strong> O político fez uma promessa sobre a saúde; os hospitais ainda estão em más condições.</li>
            <li><strong>Interpretação:</strong> O texto critica implicitamente a prática da promessa vazia, revelando contradição entre discurso e ação política — possível ironia e crítica ao sistema eleitoral.</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Compreensão</h3>
            <p>Capta o que está explícito: fatos, datas, nomes, afirmações diretas. Responde à pergunta: "o que o texto diz?"</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Interpretação</h3>
            <p>Vai além do explícito: percebe intenções, ironias, implicaturas, relações contextuais. Responde: "o que o texto quer dizer?"</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Leitura Crítica</h3>
            <p>Avalia o texto: questiona suas premissas, identifica posicionamentos ideológicos, pondera argumentos. Responde: "como e por que o texto diz o que diz?"</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>No ENEM</h3>
            <p>A maioria das questões exige os três níveis de leitura: compreender o explícito, interpretar o implícito e avaliar criticamente a construção textual.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Informação Textual</span>
        <h2>2. Explícito, Implícito e Inferência</h2>

        <p>
          Todo texto comunica em duas camadas simultâneas: a camada do <strong>explícito</strong> — o que está literalmente escrito — e a camada do <strong>implícito</strong> — o que está sugerido, pressuposto ou subentendido sem ser dito diretamente. A habilidade de transitar entre essas duas camadas é fundamental para a leitura proficiente.
        </p>
        <p>
          A <strong>inferência</strong> é o processo cognitivo pelo qual o leitor chega a conclusões não expressas diretamente no texto, mas logicamente derivadas de suas informações. Inferir é diferente de especular: uma inferência legítima é apoiada por pistas concretas do texto, enquanto a especulação é uma interpretação sem base textual.
        </p>

        <div className="math-block">
          <strong>Como fazer inferências corretas:</strong>
          <ul>
            <li>Identifique o que o texto afirma diretamente (explícito).</li>
            <li>Busque pistas linguísticas: escolha de palavras, tom, relações entre orações.</li>
            <li>Relacione a informação ao contexto situacional e cultural.</li>
            <li>Formule uma conclusão que seja necessariamente verdadeira dadas as informações do texto.</li>
            <li>Verifique: existe base textual para a conclusão? Se sim, é inferência; se não, é especulação.</li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Explícito</td>
                <td>Informação diretamente expressa no texto</td>
                <td>"A temperatura atingiu 42°C na capital."</td>
              </tr>
              <tr>
                <td>Inferência lógica</td>
                <td>Conclusão que o leitor tira usando raciocínio</td>
                <td>Se a temperatura chegou a 42°C, o calor deve ter sido intenso.</td>
              </tr>
              <tr>
                <td>Pressuposto</td>
                <td>Informação que o enunciado pressupõe como verdadeira</td>
                <td>"Pedro parou de fumar" pressupõe que ele fumava.</td>
              </tr>
              <tr>
                <td>Subentendido</td>
                <td>Informação implícita que depende do contexto e da intenção</td>
                <td>"Sua casa é tão arrumada..." dito com ironia = casa desarrumada.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Diagrama das camadas da leitura: explícito, inferência e pressupostos">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1e40af" fontSize="15" fontWeight="bold">Camadas da Leitura Textual</text>

            {/* Camada 1 - Explícito */}
            <rect x="40" y="50" width="620" height="48" rx="8" fill="#dbeafe" />
            <text x="350" y="70" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">EXPLÍCITO — O que o texto diz literalmente</text>
            <text x="350" y="88" textAnchor="middle" fill="#1e40af" fontSize="11">Fatos, nomes, datas, afirmações diretas — compreensão básica</text>

            {/* Camada 2 - Inferências */}
            <rect x="40" y="110" width="620" height="48" rx="8" fill="#d1fae5" />
            <text x="350" y="130" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">INFERÊNCIAS — O que se conclui a partir do texto</text>
            <text x="350" y="148" textAnchor="middle" fill="#065f46" fontSize="11">Pressupostos, subentendidos, implicaturas, sentidos implícitos</text>

            {/* Camada 3 - Crítica */}
            <rect x="40" y="170" width="620" height="48" rx="8" fill="#ede9fe" />
            <text x="350" y="190" textAnchor="middle" fill="#6d28d9" fontSize="13" fontWeight="bold">LEITURA CRÍTICA — Avaliação contextual e ideológica</text>
            <text x="350" y="208" textAnchor="middle" fill="#6d28d9" fontSize="11">Intenção do autor, posicionamento, relações de poder no discurso</text>
          </svg>
          <figcaption>As três camadas da leitura proficiente: o ENEM exige que o candidato transite entre todas elas.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Semântica Pragmática</span>
        <h2>3. Pressupostos e Subentendidos</h2>

        <p>
          Dois conceitos da linguística pragmática são essenciais para a interpretação avançada: os <strong>pressupostos</strong> e os <strong>subentendidos</strong>. Ambos são formas de conteúdo implícito, mas funcionam de maneiras distintas.
        </p>
        <p>
          O <strong>pressuposto</strong> é uma informação que o enunciado toma como dada, como verdadeira, mesmo sem afirmá-la explicitamente. Ele está "embutido" na estrutura gramatical da frase e não pode ser negado sem que o enunciado perca sentido. A frase "Maria <em>continua</em> estudando medicina" pressupõe que Maria <em>já estudava</em> medicina antes — esse pressuposto não é afirmado, mas está necessariamente implicado pelo verbo "continuar".
        </p>
        <p>
          O <strong>subentendido</strong>, por sua vez, é uma informação implícita que depende do contexto, da entonação e da intenção comunicativa. Ele pode ser negado sem contradição, pois não está embutido na estrutura gramatical. Se alguém diz "está muito frio aqui..." o subentendido pode ser "feche a janela" — mas isso depende da situação e pode ser negado: "estava comentando apenas sobre o clima".
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Pressuposto</th>
                <th>Subentendido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem</td>
                <td>Estrutura gramatical do enunciado</td>
                <td>Contexto situacional e intenção</td>
              </tr>
              <tr>
                <td>Pode ser negado?</td>
                <td>Não sem tornar o enunciado incoerente</td>
                <td>Sim, sem contradição</td>
              </tr>
              <tr>
                <td>Exemplo de gatilho</td>
                <td>Verbos aspectuais: parar, continuar, voltar</td>
                <td>Ironia, insinuação, entonação</td>
              </tr>
              <tr>
                <td>Enunciado</td>
                <td>"Ela voltou a beber."</td>
                <td>"Que belo serviço você fez!"</td>
              </tr>
              <tr>
                <td>Conteúdo implícito</td>
                <td>Ela havia parado de beber antes</td>
                <td>O serviço foi ruim (ironia)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Gatilhos linguísticos de pressupostos:</strong>
          <ul>
            <li><strong>Verbos aspectuais:</strong> "parou de", "voltou a", "continua", "ainda" — pressupõem estados anteriores.</li>
            <li><strong>Orações subordinadas adverbiais:</strong> "antes que você chegasse" pressupõe que você chegou.</li>
            <li><strong>Artigos definidos:</strong> "o presidente do Brasil" pressupõe que há um presidente do Brasil.</li>
            <li><strong>Advérbios temporais:</strong> "novamente", "outra vez" — pressupõem evento anterior.</li>
            <li><strong>Verbos de mudança de estado:</strong> "emagreceu" pressupõe que estava gordo antes.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Organização Textual</span>
        <h2>4. Tema, Tese e Argumento</h2>

        <p>
          Identificar o <strong>tema</strong>, a <strong>tese</strong> e os <strong>argumentos</strong> de um texto é uma das habilidades mais cobradas no ENEM, especialmente nas questões sobre textos dissertativos-argumentativos. São conceitos relacionados mas distintos, e confundi-los é um erro frequente.
        </p>
        <p>
          O <strong>tema</strong> é o assunto geral do texto — o campo temático em que ele se insere. É amplo e neutro: "violência urbana", "impactos da tecnologia", "desigualdade social". O tema não pressupõe posicionamento.
        </p>
        <p>
          A <strong>tese</strong> é o posicionamento, a opinião ou a afirmação que o autor defende sobre o tema. É específica, direcional e discutível: "A violência urbana no Brasil é consequência direta da desigualdade social e não pode ser combatida apenas com policiamento." A tese define o ponto de vista do texto.
        </p>
        <p>
          Os <strong>argumentos</strong> são as razões, evidências, exemplos e dados que o autor utiliza para sustentar a tese. Podem ser argumentos de autoridade (citação de especialistas), argumentos por exemplificação, argumentos estatísticos, argumentos históricos ou argumentos lógico-causais.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Tema</h3>
            <p>Assunto geral do texto. Neutro, amplo. Ex.: "Desigualdade social no Brasil".</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Tese</h3>
            <p>Ponto de vista do autor sobre o tema. Específico e direcional. Ex.: "A desigualdade social é o principal fator da violência."</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Argumento</h3>
            <p>Razão que sustenta a tese. Pode ser dado, exemplo, citação, comparação ou causa-consequência.</p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Conclusão</h3>
            <p>Síntese da tese após os argumentos. Pode propor solução, retomar a ideia central ou abrir perspectivas.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Como identificar a tese no ENEM:</strong>
          <p>Procure a frase que expressa o posicionamento do autor — geralmente está na introdução ou na conclusão do texto. A tese quase sempre responde à pergunta: "o que o autor defende sobre esse tema?" Se o texto é narrativo ou poético, a "tese" se transforma na <em>ideia central</em> ou no <em>tema central</em> que o texto desenvolve ou questiona.</p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura Plural</span>
        <h2>5. Intertextualidade — Textos que Falam com Textos</h2>

        <p>
          A <strong>intertextualidade</strong> é a propriedade que todo texto tem de estabelecer relações — explícitas ou implícitas — com outros textos. O conceito foi desenvolvido pela teórica Julia Kristeva, com base nos escritos de Mikhail Bakhtin, e é fundamental para compreender como a linguagem e a cultura funcionam: nenhum texto nasce do nada; todos dialogam com a tradição, com outros gêneros e com outros discursos.
        </p>
        <p>
          No ENEM, a intertextualidade aparece com frequência quando uma questão apresenta dois textos ou quando um texto faz referência a outro, criando efeitos de sentido que só podem ser compreendidos se o leitor reconhece a relação entre eles. Pode se dar por <em>citação</em> (reprodução literal), <em>alusão</em> (referência indireta), <em>paródia</em> (imitação crítica) ou <em>pastiche</em> (imitação sem crítica).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citação</td>
                <td>Reprodução literal de trecho de outro texto</td>
                <td>Epígrafe de um poema usando verso de Drummond</td>
              </tr>
              <tr>
                <td>Alusão</td>
                <td>Referência indireta a outro texto ou elemento cultural</td>
                <td>Anúncio que evoca a imagem da Mona Lisa sem reproduzi-la</td>
              </tr>
              <tr>
                <td>Paródia</td>
                <td>Imitação que subverte o texto original com finalidade crítica ou humorística</td>
                <td>Versão irônica do hino nacional em contexto de protesto</td>
              </tr>
              <tr>
                <td>Pastiche</td>
                <td>Imitação do estilo de outro autor sem intenção crítica</td>
                <td>Conto escrito no estilo de Machado de Assis</td>
              </tr>
              <tr>
                <td>Epígrafe</td>
                <td>Citação no início do texto que orienta a leitura</td>
                <td>Verso de Fernando Pessoa abrindo um ensaio filosófico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Identificar intertextualidade exige repertório cultural: quanto mais textos o leitor conhece, mais relações ele consegue perceber. Por isso, o ENEM incentiva a leitura ampla e diversificada — jornais, clássicos literários, músicas, filmes, poesia, filosofia, ciências. A intertextualidade é sempre um efeito de sentido: ela enriquece o texto, desloca expectativas e cria camadas de significado que o texto sozinho não teria.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Discursivo</span>
        <h2>6. Contexto de Produção e Condições de Recepção</h2>

        <p>
          Todo texto é produzido em um contexto específico — histórico, social, cultural e comunicativo — que molda profundamente seus sentidos. Ignorar o contexto de produção é uma das principais causas de interpretação equivocada. Um texto de 1888 sobre "liberdade" tem significados completamente diferentes de um texto de 1964 sobre o mesmo tema — o contexto histórico muda tudo.
        </p>
        <p>
          O linguista Mikhail Bakhtin ensinou que todo enunciado é uma resposta a enunciados anteriores e antecipa enunciados futuros. Nenhuma fala existe no vácuo: ela dialoga com o que foi dito antes e com o que se espera dizer depois. Esse conceito — o <em>dialogismo</em> — explica por que um mesmo texto pode ser interpretado de formas distintas em épocas e contextos diferentes.
        </p>

        <div className="lesson-highlight">
          <strong>Elementos do contexto que influenciam a interpretação:</strong>
          <ul>
            <li><strong>Quem escreveu:</strong> a identidade, a profissão e o posicionamento do autor orientam o tom e os argumentos do texto.</li>
            <li><strong>Para quem foi escrito:</strong> o público-alvo determina o nível de linguagem, os pressupostos ativados e os argumentos usados.</li>
            <li><strong>Quando foi escrito:</strong> o contexto histórico e social da produção pode transformar completamente o sentido de um texto.</li>
            <li><strong>Onde foi publicado:</strong> um artigo num jornal conservador e o mesmo artigo num jornal progressista produzem efeitos de sentido distintos.</li>
            <li><strong>Com qual objetivo:</strong> informar, convencer, divertir, denunciar — a finalidade comunicativa organiza a estrutura e os recursos do texto.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem Visual</span>
        <h2>7. Textos Multimodais — Verbal e Não Verbal Juntos</h2>

        <p>
          O ENEM trabalha intensamente com <strong>textos multimodais</strong> — aqueles que combinam linguagem verbal (palavras) com linguagem não verbal (imagens, cores, formas, diagramas, fotografias, gráficos). Interpretar textos multimodais exige que o leitor perceba como os diferentes sistemas de signos interagem para produzir sentido.
        </p>
        <p>
          Em uma charge, por exemplo, o humor e a crítica social resultam da relação entre o texto escrito e o desenho — separados, nenhum dos dois teria o mesmo efeito. Em um infográfico, os dados estatísticos ganham sentido pelo modo como são organizados visualmente. Em um anúncio publicitário, as cores, a tipografia e as imagens constroem uma atmosfera que potencializa o apelo do texto escrito.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Esquema de texto multimodal mostrando integração entre linguagem verbal e não verbal">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#fdf4ff" />
            <text x="350" y="28" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="bold">Texto Multimodal — Integração de Linguagens</text>

            {/* Bloco Verbal */}
            <rect x="40" y="50" width="180" height="120" rx="10" fill="#dbeafe" />
            <text x="130" y="80" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">VERBAL</text>
            <text x="130" y="100" textAnchor="middle" fill="#1e40af" fontSize="11">Palavras, frases</text>
            <text x="130" y="116" textAnchor="middle" fill="#1e40af" fontSize="11">títulos, legendas</text>
            <text x="130" y="132" textAnchor="middle" fill="#1e40af" fontSize="11">argumentos escritos</text>
            <text x="130" y="148" textAnchor="middle" fill="#1e40af" fontSize="11">diálogos</text>

            {/* Seta bidirecional */}
            <line x1="230" y1="110" x2="290" y2="110" stroke="#7c3aed" strokeWidth="2.5" />
            <polygon points="285,104 295,110 285,116" fill="#7c3aed" />
            <polygon points="235,104 225,110 235,116" fill="#7c3aed" />
            <text x="260" y="100" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">interação</text>

            {/* Bloco Não Verbal */}
            <rect x="300" y="50" width="180" height="120" rx="10" fill="#d1fae5" />
            <text x="390" y="80" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">NÃO VERBAL</text>
            <text x="390" y="100" textAnchor="middle" fill="#065f46" fontSize="11">Imagens, fotos</text>
            <text x="390" y="116" textAnchor="middle" fill="#065f46" fontSize="11">gráficos, ícones</text>
            <text x="390" y="132" textAnchor="middle" fill="#065f46" fontSize="11">cores, formas</text>
            <text x="390" y="148" textAnchor="middle" fill="#065f46" fontSize="11">diagramas</text>

            {/* Resultado */}
            <rect x="510" y="70" width="160" height="80" rx="10" fill="#ede9fe" />
            <line x1="490" y1="110" x2="510" y2="110" stroke="#7c3aed" strokeWidth="2" />
            <polygon points="507,104 517,110 507,116" fill="#7c3aed" />
            <text x="590" y="100" textAnchor="middle" fill="#6d28d9" fontSize="12" fontWeight="bold">SENTIDO</text>
            <text x="590" y="118" textAnchor="middle" fill="#6d28d9" fontSize="11">PRODUZIDO</text>
            <text x="590" y="136" textAnchor="middle" fill="#6d28d9" fontSize="10">pela integração</text>
          </svg>
          <figcaption>No texto multimodal, o sentido emerge da interação entre linguagem verbal e não verbal — nunca de apenas uma delas isolada.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Charge</h3>
            <p>Texto visual com crítica política ou social. A ironia nasce da relação entre imagem e legenda. Exige conhecimento do contexto contemporâneo.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Infográfico</h3>
            <p>Combina dados quantitativos com representação visual. A interpretação exige relacionar as informações visuais com o texto que as comenta.</p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Publicidade</h3>
            <p>Explora cores, imagens e palavras para criar associações emocionais e simbólicas com o produto. O sentido persuasivo emerge da multimodalidade.</p>
          </div>
          <div className="lesson-card">
            <span>😄</span>
            <h3>Tirinha</h3>
            <p>Narrativa em quadrinhos. O humor resulta de expectativas criadas e frustradas, da relação entre fala e imagem, e da inversão de situações.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura Estratégica</span>
        <h2>8. Estratégias de Leitura para o ENEM</h2>

        <p>
          O ENEM exige leitura eficiente sob pressão de tempo. Dominar estratégias de leitura não é trapacear — é usar o conhecimento linguístico a seu favor. Um leitor estratégico sabe onde procurar informações, como eliminar alternativas erradas e como não se perder em detalhes secundários.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estratégia</th>
                <th>Quando usar</th>
                <th>Como aplicar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leitura do enunciado primeiro</td>
                <td>Sempre, antes de ler o texto</td>
                <td>O enunciado diz o que a questão pede — orienta o foco da leitura</td>
              </tr>
              <tr>
                <td>Skimming (leitura diagonal)</td>
                <td>Primeira abordagem ao texto</td>
                <td>Ler título, subtítulo, primeiro e último parágrafo para captar o tema e a tese</td>
              </tr>
              <tr>
                <td>Scanning (busca por palavras-chave)</td>
                <td>Questões de localização de informação</td>
                <td>Buscar no texto a palavra ou expressão citada no enunciado</td>
              </tr>
              <tr>
                <td>Identificação de conectivos</td>
                <td>Questões de relações lógicas</td>
                <td>Conectivos como "porém", "portanto", "pois", "embora" indicam relações de oposição, conclusão, causa e concessão</td>
              </tr>
              <tr>
                <td>Eliminação por contradição</td>
                <td>Questões de interpretação</td>
                <td>Eliminar alternativas que contradizem afirmações explícitas do texto</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Erros mais comuns na interpretação do ENEM:</strong>
          <ul>
            <li><strong>Opinião pessoal no lugar da interpretação textual:</strong> a resposta deve se basear no texto, não na sua opinião pessoal sobre o assunto.</li>
            <li><strong>Extrapolar o texto:</strong> inferências que vão além do que o texto permite são incorretas no ENEM.</li>
            <li><strong>Confundir tema com tese:</strong> o tema é o assunto; a tese é a posição do autor.</li>
            <li><strong>Ignorar o contexto do texto:</strong> quem escreveu, para quem e quando muda o sentido.</li>
            <li><strong>Marcar a alternativa "mais verdadeira":</strong> a alternativa correta é a que o texto sustenta, não a que você considera mais verdadeira sobre o mundo.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidades BNCC</span>
        <h2>9. Competências Leitoras Avaliadas no ENEM</h2>

        <p>
          O ENEM avalia a leitura a partir de competências definidas na Base Nacional Comum Curricular (BNCC). As questões de Linguagens testam principalmente duas competências: a <strong>Competência 1</strong> (conhecimento e valorização da diversidade cultural e das práticas de linguagem) e a <strong>Competência 2</strong> (compreensão dos mecanismos e recursos de construção e circulação de textos). No eixo de Leitura, as habilidades centrais são analisar efeitos de sentido, relacionar texto e contexto, e reconhecer recursos expressivos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Habilidade 15</h3>
            <p>Estabelecer relações entre o texto literário e o contexto histórico, social e cultural em que foi produzido.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Habilidade 17</h3>
            <p>Reconhecer a presença de valores sociais e humanos atualizáveis e intemporais como elementos de identificação com o texto literário.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Habilidade 25</h3>
            <p>Identificar, em textos de diferentes gêneros, as marcas linguísticas que singularizam as variedades linguísticas sociais, regionais e de registro.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Habilidade 27</h3>
            <p>Reconhecer os usos da norma padrão da língua portuguesa nas diferentes situações de comunicação.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Compreensão vs. Interpretação"
          statement={
            <p>
              Leia o excerto: <em>"O índice de desemprego no Brasil atingiu 14,7% em 2020, o maior da série histórica, segundo o IBGE."</em>
              <br /><br />
              Qual das alternativas representa uma <strong>interpretação</strong> do texto — e não apenas uma compreensão?
            </p>
          }
          options={[
            { letter: "a", text: "O índice de desemprego em 2020 foi de 14,7%." },
            { letter: "b", text: "A fonte dos dados é o IBGE." },
            { letter: "c", text: "O texto sugere que 2020 foi um ano de grave crise econômica no Brasil, com impacto direto no mercado de trabalho.", correct: true },
            { letter: "d", text: "A série histórica do IBGE registra índices de desemprego." },
          ]}
          resolution={
            <p>
              As alternativas A, B e D reproduzem informações explicitamente ditas no texto — são compreensão, não interpretação. A alternativa C vai além do literal: estabelece uma relação contextual (crise econômica) que o texto implica mas não afirma diretamente, caracterizando interpretação. O dado "maior da série histórica" implica gravidade e contexto de crise — essa inferência contextual é o que caracteriza a leitura interpretativa. As demais alternativas são paráfrases do explícito.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pressupostos Linguísticos"
          statement={
            <p>
              Analise o enunciado: <em>"O prefeito ainda não conseguiu resolver o problema do trânsito."</em>
              <br /><br />
              Quais pressupostos esse enunciado ativa necessariamente?
            </p>
          }
          options={[
            { letter: "a", text: "O prefeito nunca se preocupou com o trânsito." },
            { letter: "b", text: "O problema do trânsito foi criado pelo prefeito." },
            { letter: "c", text: "Existe um problema de trânsito; o prefeito tentou resolvê-lo; o problema persiste até o momento.", correct: true },
            { letter: "d", text: "O prefeito não tem competência para administrar a cidade." },
          ]}
          resolution={
            <p>
              O advérbio "ainda" pressupõe que a situação persiste até o momento do enunciado e que havia uma expectativa de mudança. O verbo "conseguiu" no negativo pressupõe que houve tentativas. E "resolver o problema do trânsito" pressupõe que esse problema existe. Portanto, a alternativa C captura os três pressupostos linguisticamente embutidos no enunciado. As demais alternativas (A, B, D) são inferências indevidas que extrapolam o que o enunciado necessariamente pressupõe — são subentendidos possíveis mas não obrigatórios.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Intertextualidade e Efeito de Sentido"
          statement={
            <p>
              Um anúncio de uma escola de idiomas usa como slogan: <em>"Em terra de surdo, quem fala uma língua a mais é rei."</em>
              <br /><br />
              O efeito de sentido produzido pela intertextualidade nesse slogan é:
            </p>
          }
          options={[
            { letter: "a", text: "Criticar pessoas com deficiência auditiva que não aprendem idiomas." },
            { letter: "b", text: "Retomar literalmente o provérbio popular para informar sobre a importância do silêncio." },
            { letter: "c", text: "Subverter o provérbio 'em terra de cego, quem tem um olho é rei' para sugerir que saber um idioma a mais é uma vantagem competitiva diferencial no mercado.", correct: true },
            { letter: "d", text: "Comparar o mercado de trabalho a um território de surdos sem nenhuma intenção persuasiva." },
          ]}
          resolution={
            <p>
              O slogan retoma o provérbio popular "Em terra de cego, quem tem um olho é rei" — intertextualidade por paródia ou alusão. A estrutura é mantida, mas os elementos são substituídos: "cego" vira "surdo" e "um olho" vira "uma língua a mais". O efeito é persuasivo: a escola sugere que, em um mercado competitivo onde a maioria não domina idiomas ("surdos" para outras culturas), quem aprende se destaca ("é rei"). A alternativa A é absurda e não corresponde ao contexto; B ignora a subversão do provérbio; D nega a intenção persuasiva evidente num texto publicitário. A resposta correta é C.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Interpretação de Texto com Ironia"
          statement={
            <p>
              Leia o fragmento de crônica de Luis Fernando Veríssimo:
              <br /><br />
              <em>"O brasileiro tem uma capacidade extraordinária de se adaptar. Adapta-se à corrupção, adapta-se à violência, adapta-se ao caos do trânsito, adapta-se a filas intermináveis. Somos um povo otimista, resiliente, que nunca desiste. Nunca desiste de se adaptar ao inaceitável."</em>
              <br /><br />
              A ironia central do texto consiste em:
            </p>
          }
          options={[
            { letter: "a", text: "Elogiar genuinamente a capacidade de adaptação do povo brasileiro como virtude nacional." },
            { letter: "b", text: "Criticar o excesso de pessimismo dos brasileiros que nunca veem o lado positivo das situações." },
            { letter: "c", text: "Denunciar que qualidades aparentemente positivas (otimismo, resiliência, adaptabilidade) encobrem, na verdade, uma acomodação passiva diante de problemas graves que deveriam ser combatidos.", correct: true },
            { letter: "d", text: "Informar, de forma neutra, que o brasileiro é um povo adaptável em comparação com outros povos." },
          ]}
          resolution={
            <p>
              A ironia do texto está na inversão conotativa: palavras positivas como "capacidade extraordinária", "otimista", "resiliente", "nunca desiste" são usadas para descrever comportamentos que, no contexto da lista apresentada (corrupção, violência, caos, filas), revelam <em>passividade</em> e <em>conformismo</em>, não virtudes. O golpe irônico vem na frase final: "nunca desiste de se adaptar ao inaceitável" — a palavra "inaceitável" desfaz toda a positividade aparente e revela a crítica. Veríssimo é mestre da crônica irônica brasileira e questões do ENEM sobre crônicas frequentemente exploram esse mecanismo de subversão das expectativas por meio de vocabulário aparentemente elogioso.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Tema, Tese e Argumento em Texto Dissertativo"
          statement={
            <p>
              Leia o fragmento:
              <br /><br />
              <em>"A leitura literária não é um luxo intelectual reservado às elites: é uma necessidade humana fundamental. Estudos como os realizados por Antônio Cândido demonstram que a literatura cumpre funções humanizadoras essenciais — ela desenvolve empatia, amplia a visão de mundo e fornece instrumentos para compreender a experiência humana em sua complexidade. Privar populações do acesso à literatura é, portanto, uma forma de exclusão cultural com consequências profundas para a cidadania."</em>
              <br /><br />
              Identifique corretamente o tema, a tese e o tipo de argumento predominante no texto:
            </p>
          }
          options={[
            { letter: "a", text: "Tema: elites culturais; Tese: leitura é luxo; Argumento: exemplificação." },
            { letter: "b", text: "Tema: literatura e exclusão; Tese: a literatura humaniza e seu acesso é direito; Argumento: autoridade (Antônio Cândido) e causa-consequência.", correct: true },
            { letter: "c", text: "Tema: estudos acadêmicos; Tese: a ciência comprova que ler é bom; Argumento: dado estatístico." },
            { letter: "d", text: "Tema: necessidades humanas; Tese: a cidadania depende da educação; Argumento: comparação entre classes sociais." },
          ]}
          resolution={
            <p>
              O <strong>tema</strong> do texto é a relação entre literatura e exclusão/cidadania — um campo temático amplo que inclui acesso cultural e humanização. A <strong>tese</strong> é que a literatura é uma necessidade humana fundamental (não luxo) e que privá-la das populações é exclusão cultural — é o posicionamento que o autor defende. Os <strong>argumentos</strong> são de dois tipos: argumento de autoridade (citação de Antônio Cândido, renomado crítico literário) e argumento causa-consequência ("privar... é, portanto, uma forma de exclusão... com consequências profundas"). As alternativas A, C e D distorcem um ou mais desses elementos — A inverte a tese, C reduz o argumento a dado estatístico inexistente, D substitui o tema real por outro mais vago.
            </p>
          }
        />
      </section>
    </article>
  );
}
