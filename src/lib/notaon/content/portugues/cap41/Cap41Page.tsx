"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 41</span>
          <h1>Redação ENEM: Estrutura e Argumentação</h1>
          <p>
            A redação do ENEM vale 1000 pontos e pode ser o diferencial que separa a
            aprovação da reprovação nos cursos mais concorridos do Brasil. Não é uma
            prova de criatividade — é uma prova de domínio técnico de um gênero
            específico: o texto dissertativo-argumentativo com proposta de intervenção
            social. Neste capítulo, você vai entender cada uma das cinco competências,
            aprender a estrutura exata que os corretores esperam e descobrir as
            estratégias que transformam uma redação mediana em nota 960 ou 1000.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Gênero</span>
        <h2>1. O Texto Dissertativo-Argumentativo — Definição e Especificidades</h2>

        <p>
          A redação do ENEM exige a produção de um <strong>texto dissertativo-argumentativo</strong>
          em <strong>prosa</strong>, com tema de natureza social, científica, cultural ou
          política. Não é um conto, uma crônica, um poema ou um texto expositivo neutro:
          é um texto que <em>defende um ponto de vista</em> sobre o tema proposto, usando
          argumentos para persuadir o leitor, e que <em>propõe uma solução</em> para o
          problema identificado.
        </p>
        <p>
          Três aspectos são absolutamente inegociáveis: (1) o texto deve ser em
          <strong> modalidade escrita formal</strong> da língua portuguesa — registro
          culto, sem marcas de oralidade; (2) o texto deve ser <strong>dissertativo</strong>
          — deve discutir, analisar, problematizar; (3) o texto deve ser
          <strong> argumentativo</strong> — deve defender um ponto de vista com argumentos
          organizados, não apenas descrever ou narrar.
        </p>

        <div className="lesson-highlight">
          <strong>O que a redação NÃO é:</strong>
          <ul>
            <li>Não é uma redação narrativa (conto, relato pessoal)</li>
            <li>Não é uma redação descritiva (pintura de cenas)</li>
            <li>Não é um texto poético ou lírico</li>
            <li>Não é um texto expositivo neutro (sem tese e defesa)</li>
            <li>Não é um manifesto panfletário (sem argumentação estruturada)</li>
            <li>Não pode ferir os Direitos Humanos em sua proposta de intervenção</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>A nota máxima na redação ENEM:</strong>
          <p>
            Obter nota 1000 exige 200 pontos em cada uma das cinco competências.
            É mais comum obter notas entre 600 e 800 do que entre 900 e 1000.
            A diferença entre 700 e 960 está, geralmente, na qualidade da
            argumentação (Competência 3), na coesão (Competência 4) e na
            proposta de intervenção (Competência 5) — as três competências
            que mais candidatos negligenciam.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">As 5 Competências</span>
        <h2>2. As Cinco Competências Avaliadas — Quadro Completo</h2>

        <p>
          A redação do ENEM é avaliada por uma grade de cinco competências, cada uma
          valendo de 0 a 200 pontos, totalizando 1000 pontos. Compreender o que cada
          competência avalia permite ao candidato saber exatamente onde pode melhorar
          sua nota.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>O que avalia</th>
                <th>Como maximizar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C1 — Norma Culta</strong></td>
                <td>Domínio da norma-padrão da língua portuguesa: ortografia, acentuação, pontuação, concordância, regência</td>
                <td>Revisar ortografia; usar pontuação correta; evitar concordância verbal/nominal errada</td>
              </tr>
              <tr>
                <td><strong>C2 — Leitura da Proposta</strong></td>
                <td>Compreensão do tema e dos textos motivadores; pertinência do repertório sociocultural</td>
                <td>Ler os textos motivadores com atenção; desenvolver o tema proposto, não outro; usar repertório produtivo (não decoreba)</td>
              </tr>
              <tr>
                <td><strong>C3 — Argumentação</strong></td>
                <td>Elaboração, seleção e organização dos argumentos; defesa do ponto de vista com coerência</td>
                <td>Apresentar tese clara; desenvolver argumentos consistentes; não contradizer a tese; usar repertório para embasar</td>
              </tr>
              <tr>
                <td><strong>C4 — Coesão</strong></td>
                <td>Mecanismos linguísticos de coesão entre parágrafos e dentro deles; progressão textual</td>
                <td>Usar conectivos variados e corretos; retomadas pronominais sem ambiguidade; paralelismo sintático</td>
              </tr>
              <tr>
                <td><strong>C5 — Intervenção</strong></td>
                <td>Proposta de intervenção detalhada, viável e respeitosa aos Direitos Humanos</td>
                <td>Incluir agente, ação, meio/modo, finalidade e detalhamento; ligar a proposta à argumentação</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✍️</span>
            <h3>C1 — Língua Portuguesa</h3>
            <p>Erros graves de ortografia, concordância e regência retiram até 40 pontos por ocorrência na nota máxima. Um texto com muitos erros gramaticais dificilmente passa de 120 pontos em C1.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>C2 — Repertório</h3>
            <p>Usar dados, citações, referências filosóficas, artísticas ou históricas <em>conectados ao tema</em> e ao argumento vale até 200 pontos. Repertório "solto", sem conexão com a tese, não pontua.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>C3 — Argumentação</h3>
            <p>A competência mais difícil de maximizar. Exige argumentos com desenvolvimento (não apenas lista de tópicos) e consistência interna. Contradições e superficialidade penalizam fortemente.</p>
          </div>
          <div className="lesson-card">
            <span>🌎</span>
            <h3>C5 — Intervenção</h3>
            <p>A proposta incompleta (sem agente + ação + meio + finalidade + detalhamento) não recebe pontuação máxima. É o erro mais comum: candidatos escrevem apenas "o governo deve fazer algo".</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>3. A Estrutura dos Quatro Parágrafos</h2>

        <p>
          A redação do ENEM segue uma estrutura de quatro parágrafos consagrada pelos
          corretores. Não é a única forma possível, mas é a mais segura e a que melhor
          atende aos critérios das cinco competências:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Estrutura dos quatro parágrafos da redação ENEM">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            <text x="350" y="26" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Estrutura da Redação ENEM — 4 Parágrafos</text>
            {/* P1 */}
            <rect x="30" y="45" width="640" height="38" rx="6" fill="#dbeafe" />
            <text x="350" y="63" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">§1 — INTRODUÇÃO (5–7 linhas)</text>
            <text x="350" y="77" textAnchor="middle" fill="#1e40af" fontSize="10">Contextualização (repertório) + Problema + Tese (ponto de vista defendido)</text>
            {/* P2 */}
            <rect x="30" y="95" width="640" height="38" rx="6" fill="#d1fae5" />
            <text x="350" y="113" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">§2 — DESENVOLVIMENTO 1 (7–10 linhas)</text>
            <text x="350" y="127" textAnchor="middle" fill="#065f46" fontSize="10">Tópico frasal (argumento 1) + Desenvolvimento + Repertório + Conexão com a tese</text>
            {/* P3 */}
            <rect x="30" y="145" width="640" height="38" rx="6" fill="#fde68a" />
            <text x="350" y="163" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">§3 — DESENVOLVIMENTO 2 (7–10 linhas)</text>
            <text x="350" y="177" textAnchor="middle" fill="#92400e" fontSize="10">Tópico frasal (argumento 2) + Desenvolvimento + Repertório + Conexão com a tese</text>
            {/* P4 */}
            <rect x="30" y="193" width="640" height="28" rx="6" fill="#ede9fe" />
            <text x="350" y="207" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">§4 — CONCLUSÃO (5–7 linhas): Retomada da tese + Proposta de Intervenção completa</text>
          </svg>
          <figcaption>Estrutura dos quatro parágrafos da redação dissertativo-argumentativa do ENEM.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Funções de cada parágrafo em detalhe:</strong>
          <ul>
            <li>
              <strong>Introdução:</strong> contextualizar o tema com repertório (dado estatístico,
              citação, referência histórica, filosófica ou literária), identificar o
              problema central e apresentar a tese — o ponto de vista que o texto vai
              defender. A tese deve ser a última frase da introdução.
            </li>
            <li>
              <strong>Desenvolvimento 1:</strong> começar com tópico frasal (a ideia central
              do parágrafo), desenvolver o argumento com explicações e exemplos concretos,
              usar repertório que o sustente e ligar ao final ao tema geral. Não pode
              ser uma lista de tópicos — precisa ter fluidez argumentativa.
            </li>
            <li>
              <strong>Desenvolvimento 2:</strong> mesma estrutura do Dev. 1, mas com argumento
              diferente e complementar. O segundo parágrafo de desenvolvimento não é
              repetição do primeiro com outras palavras — ele precisa trazer uma perspectiva
              nova (causa diferente, esfera de análise diferente, comparação).
            </li>
            <li>
              <strong>Conclusão:</strong> retomar a tese com refinamento (não apenas copiar
              a introdução), sintetizar os argumentos e apresentar a proposta de
              intervenção completa com os cinco elementos obrigatórios.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Introdução e Tese</span>
        <h2>4. Construindo uma Introdução Sólida e uma Tese Precisa</h2>

        <p>
          A introdução é o primeiro parágrafo e o ponto onde os corretores formam a
          primeira impressão. Uma introdução bem construída sinaliza que o candidato
          domina o gênero e tem argumentos sólidos. A estrutura interna ideal é:
          <strong> contextualização → problematização → tese</strong>.
        </p>
        <p>
          A <strong>tese</strong> é o elemento mais importante da introdução. Ela deve
          ser clara, específica e defensável — não pode ser uma verdade óbvia nem uma
          afirmação vaga. Compare:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema hipotético</th>
                <th>Tese fraca</th>
                <th>Tese forte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Desigualdade no Brasil</td>
                <td>"A desigualdade é um problema grave." (óbvio, não defensável)</td>
                <td>"A concentração de renda no Brasil perpetua-se pela insuficiência das políticas educacionais e pela regressividade do sistema tributário."</td>
              </tr>
              <tr>
                <td>Violência contra a mulher</td>
                <td>"A violência não é boa." (tautológico)</td>
                <td>"A violência doméstica no Brasil é estrutural e se perpetua pela normalização cultural do machismo e pela fragilidade das redes de proteção institucional."</td>
              </tr>
              <tr>
                <td>Uso de redes sociais</td>
                <td>"As redes sociais têm pontos positivos e negativos." (vago, sem posição)</td>
                <td>"O uso desenfreado de redes sociais compromete a saúde mental dos jovens brasileiros, sobretudo pela arquitetura de recompensa variável que promove o vício digital."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Estratégias para contextualizar:</strong>
          <p>
            1. <em>Dado estatístico:</em> "Segundo o IBGE, 40% dos domicílios brasileiros
            não têm acesso a saneamento básico." — cria credibilidade imediata.
            2. <em>Referência filosófica:</em> "Para o filósofo John Rawls, uma sociedade
            justa é aquela que garante as maiores liberdades possíveis para todos..." —
            eleva o repertório.
            3. <em>Referência histórica:</em> "Desde a Proclamação da República em 1889..."
            — contextualiza o problema no tempo.
            4. <em>Paradoxo ou contraste:</em> "Em um país que figura entre as dez maiores
            economias do mundo, mais de 20 milhões de pessoas ainda passam fome..." —
            cria tensão que justifica a tese.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento</span>
        <h2>5. Desenvolvendo Argumentos — Estratégias de Sustentação da Tese</h2>

        <p>
          O desenvolvimento é o coração da redação. É aqui que a tese se transforma de
          afirmação em argumento sustentado. Um desenvolvimento nota 200 em C3 precisa
          de: tópico frasal claro, desenvolvimento com pelo menos 3 movimentos argumentativos,
          repertório que não seja decoreba e conexão explícita com a tese.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Argumento por dados</h3>
            <p>Sustenta a tese com dados empíricos concretos: estatísticas, pesquisas, relatórios de órgãos oficiais (IBGE, OMS, ONU, IPEA). Ex.: "De acordo com o Relatório de Desenvolvimento Humano da ONU (2023)..."</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Argumento por autoridade</h3>
            <p>Usa a visão de um pensador, escritor ou especialista reconhecido. Ex.: "Para o sociólogo Zygmunt Bauman, na 'modernidade líquida', as relações humanas tornaram-se frágeis e descartáveis..."</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Argumento por analogia</h3>
            <p>Compara situações para ilustrar o argumento. Ex.: "Assim como a vacinação coletiva criou imunidade de rebanho contra doenças físicas, políticas de saúde mental coletiva podem criar resistência social ao sofrimento psíquico."</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Argumento por consequência</h3>
            <p>Mostra quais serão as consequências do problema se não houver intervenção — cria urgência argumentativa. Ex.: "Sem investimento em educação básica, o ciclo de pobreza perpetua-se por gerações."</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Estrutura interna de um parágrafo de desenvolvimento bem feito:</strong>
          <p>
            <em>[Tópico frasal]</em> — A fragilidade das redes de proteção à mulher é um
            dos pilares da perpetuação da violência doméstica no Brasil.
            <em> [Desenvolvimento]</em> — Segundo dados do Fórum Brasileiro de Segurança
            Pública (2023), apenas 3 a cada 10 mulheres vítimas de violência doméstica
            registram boletim de ocorrência — revelando que a subnotificação é endêmica.
            Esse quadro reflete não apenas o medo das vítimas, mas a insuficiência de
            Casas de Abrigo (o Brasil tem menos de 80 casas de abrigo para um universo
            de milhões de vítimas potenciais).
            <em> [Conexão com a tese]</em> — Portanto, sem infraestrutura de acolhimento,
            o ciclo de violência dificilmente se rompe.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Repertório Sociocultural</span>
        <h2>6. Repertório Sociocultural — Como Usar sem Parecer Decoreba</h2>

        <p>
          O <strong>repertório sociocultural produtivo</strong> avaliado na Competência 2
          é aquele que vai além de simplesmente mencionar um nome ou uma obra — é o que
          <em> dialoga com a argumentação</em>, ampliando ou fundamentando o ponto de vista
          do candidato. Repertório solto, mencionado sem conexão clara com o argumento,
          não pontua e pode até prejudicar a coesão.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área do Repertório</th>
                <th>Exemplos</th>
                <th>Como conectar ao argumento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Filosofia</td>
                <td>Platão, Aristóteles, Kant, Rousseau, Foucault, Hannah Arendt, Sartre</td>
                <td>"Para [filósofo], [conceito] — o que elucida [aspecto do problema]..."</td>
              </tr>
              <tr>
                <td>Sociologia</td>
                <td>Marx, Durkheim, Weber, Bourdieu, Bauman, Stuart Hall, Jessé Souza</td>
                <td>"O sociólogo [X] demonstrou que [conceito] explica [dinâmica social do tema]..."</td>
              </tr>
              <tr>
                <td>Literatura brasileira</td>
                <td>Machado de Assis, Graciliano Ramos, Carolina de Jesus, Clarice Lispector</td>
                <td>"Em [obra], [autor] já retratava [problema], evidenciando sua profundidade histórica..."</td>
              </tr>
              <tr>
                <td>História do Brasil</td>
                <td>Abolição, Ditadura Militar, Constituição de 1988, LDB, SUS, Bolsa Família</td>
                <td>"Desde [marco histórico], o problema de [X] permanece sem solução estrutural..."</td>
              </tr>
              <tr>
                <td>Dados e Organismos</td>
                <td>IBGE, IPEA, OMS, ONU, UNICEF, Fórum Bras. de Segurança Pública</td>
                <td>"Segundo [órgão], [dado] — o que demonstra a magnitude do problema..."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Repertório que valoriza vs. repertório que não funciona:</strong>
          <p>
            <em>Valoriza:</em> "O filósofo Immanuel Kant, ao postular que todo ser humano
            deve ser tratado como fim em si mesmo e nunca como meio, fundamenta a
            obrigatoriedade de políticas de inclusão digital que respeitem a dignidade
            de populações marginalizadas." (conectado ao argumento, explicado).
            <em> Não funciona:</em> "Como dizia Kant, o homem é um ser racional. A
            desigualdade digital é um problema grave no Brasil." (menção sem conexão,
            não explica o conceito, não conecta ao argumento).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Proposta de Intervenção</span>
        <h2>7. A Proposta de Intervenção — Os Cinco Elementos Obrigatórios</h2>

        <p>
          A proposta de intervenção é o que torna a redação do ENEM única no panorama
          dos vestibulares brasileiros. Ela ocupa a Competência 5 e está na conclusão.
          O INEP exige que a proposta seja <strong>concreta</strong>, <strong>detalhada</strong>,
          <strong>viável</strong> e <strong>respeitosa aos Direitos Humanos</strong>.
          Cinco elementos são obrigatórios para a pontuação máxima:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>1. Agente</h3>
            <p>Quem vai realizar a ação? Deve ser específico: "o Ministério da Educação", "os governos municipais", "as escolas públicas", "a mídia", "as empresas de tecnologia". Nunca apenas "o governo" ou "a sociedade".</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>2. Ação</h3>
            <p>O que vai ser feito? Deve ser um verbo de ação claro e específico: "criar", "ampliar", "regulamentar", "investir em", "implementar", "capacitar", "desenvolver". Nunca "fazer algo".</p>
          </div>
          <div className="lesson-card">
            <span>🛠️</span>
            <h3>3. Meio / Modo</h3>
            <p>Como a ação será realizada? "Por meio de campanhas nas redes sociais", "mediante legislação específica", "através de parcerias público-privadas", "via programas de formação continuada".</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>4. Finalidade</h3>
            <p>Para quê? Qual é o objetivo da ação? "A fim de reduzir a evasão escolar", "com o objetivo de empoderar vítimas", "para garantir o acesso igualitário", "visando à conscientização da população".</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>5. Detalhamento — o elemento que separa 160 de 200 em C5:</strong>
          <p>
            O detalhamento aprofunda um dos elementos anteriores — geralmente o meio ou
            a finalidade — com informações adicionais que tornam a proposta mais concreta
            e viável. Ex.: "...por meio de programas de formação continuada para professores
            de escolas públicas, incluindo módulos específicos sobre tecnologia educacional
            e saúde mental dos estudantes, com duração mínima de 40 horas anuais."
          </p>
        </div>

        <div className="math-block">
          <strong>Exemplo completo de proposta de intervenção nota 200 em C5:</strong>
          <p>
            <em>"Portanto, para que o ciclo de violência doméstica seja efetivamente rompido
            no Brasil, é fundamental que o Ministério da Justiça [agente] amplie a rede
            de Casas de Abrigo em todo o país [ação], mediante parcerias com os governos
            estaduais e municipais [meio], a fim de oferecer acolhimento imediato a
            mulheres em situação de risco [finalidade] — garantindo não apenas proteção
            física, mas também suporte psicológico, jurídico e de requalificação
            profissional, de modo que a vítima possa reconstruir sua autonomia [detalhamento],
            respeitando plenamente os preceitos da Lei Maria da Penha e da Constituição
            Federal de 1988."</em>
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erros Graves</span>
        <h2>8. Erros Que Zeram ou Destroem a Nota da Redação</h2>

        <p>
          Conhecer os erros que podem zerar a redação é tão importante quanto saber
          o que pontua. Esses são os erros que os candidatos cometem com mais frequência
          e que têm o maior impacto negativo:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Erro</th>
                <th>Impacto</th>
                <th>Como evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fuga total ao tema</td>
                <td>Nota zero em todas as competências</td>
                <td>Ler os textos motivadores com atenção; verificar o tema antes de escrever</td>
              </tr>
              <tr>
                <td>Proposta que fere Direitos Humanos</td>
                <td>Nota zero em todas as competências</td>
                <td>Nunca sugerir pena de morte, esterilização forçada, prisão por opinião, etc.</td>
              </tr>
              <tr>
                <td>Texto em branco ou incompleto</td>
                <td>Nota zero proporcional às partes ausentes</td>
                <td>Mesmo que incompleto, escrever o máximo possível; a proposta vale 200 pontos</td>
              </tr>
              <tr>
                <td>Cópia dos textos motivadores</td>
                <td>Zera C2 e C3</td>
                <td>Usar os textos como base, mas sempre reescrevendo com suas próprias palavras</td>
              </tr>
              <tr>
                <td>Ausência de proposta de intervenção</td>
                <td>Zero em C5 (200 pontos perdidos)</td>
                <td>Mesmo que incompleta, incluir sempre a proposta de intervenção na conclusão</td>
              </tr>
              <tr>
                <td>Contradição com a tese</td>
                <td>Destrói C3 (até zero)</td>
                <td>Reler a tese antes de cada parágrafo para garantir coerência argumentativa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conectivos da Redação</span>
        <h2>9. Conectivos Estratégicos para a Redação ENEM</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Mapa de conectivos mais usados na redação ENEM por função">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#fdf4ff" />
            <text x="350" y="25" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="bold">Conectivos por Função na Redação ENEM</text>
            {/* Iniciar argumento */}
            <rect x="20" y="42" width="155" height="80" rx="8" fill="#dbeafe" />
            <text x="97" y="62" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">Iniciar Arg.</text>
            <text x="97" y="80" textAnchor="middle" fill="#1e40af" fontSize="10">Em primeiro lugar</text>
            <text x="97" y="96" textAnchor="middle" fill="#1e40af" fontSize="10">Inicialmente</text>
            <text x="97" y="112" textAnchor="middle" fill="#1e40af" fontSize="10">Primeiramente</text>
            {/* Adicionar */}
            <rect x="186" y="42" width="155" height="80" rx="8" fill="#d1fae5" />
            <text x="263" y="62" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">Adicionar</text>
            <text x="263" y="80" textAnchor="middle" fill="#065f46" fontSize="10">Além disso</text>
            <text x="263" y="96" textAnchor="middle" fill="#065f46" fontSize="10">Outrossim</text>
            <text x="263" y="112" textAnchor="middle" fill="#065f46" fontSize="10">Ademais</text>
            {/* Contrastar */}
            <rect x="352" y="42" width="155" height="80" rx="8" fill="#fee2e2" />
            <text x="429" y="62" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Contrastar</text>
            <text x="429" y="80" textAnchor="middle" fill="#991b1b" fontSize="10">No entanto</text>
            <text x="429" y="96" textAnchor="middle" fill="#991b1b" fontSize="10">Todavia / Contudo</text>
            <text x="429" y="112" textAnchor="middle" fill="#991b1b" fontSize="10">Entretanto</text>
            {/* Concluir */}
            <rect x="518" y="42" width="162" height="80" rx="8" fill="#ede9fe" />
            <text x="599" y="62" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">Concluir</text>
            <text x="599" y="80" textAnchor="middle" fill="#7c3aed" fontSize="10">Portanto</text>
            <text x="599" y="96" textAnchor="middle" fill="#7c3aed" fontSize="10">Diante do exposto</text>
            <text x="599" y="112" textAnchor="middle" fill="#7c3aed" fontSize="10">Assim sendo</text>
            {/* Exemplificar */}
            <rect x="20" y="140" width="155" height="80" rx="8" fill="#fde68a" />
            <text x="97" y="160" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Exemplificar</text>
            <text x="97" y="178" textAnchor="middle" fill="#92400e" fontSize="10">Por exemplo</text>
            <text x="97" y="194" textAnchor="middle" fill="#92400e" fontSize="10">A título de ilustração</text>
            <text x="97" y="210" textAnchor="middle" fill="#92400e" fontSize="10">Tal como</text>
            {/* Causa */}
            <rect x="186" y="140" width="155" height="80" rx="8" fill="#fce7f3" />
            <text x="263" y="160" textAnchor="middle" fill="#9d174d" fontSize="11" fontWeight="bold">Causa/Explicação</text>
            <text x="263" y="178" textAnchor="middle" fill="#9d174d" fontSize="10">Pois / Porque</text>
            <text x="263" y="194" textAnchor="middle" fill="#9d174d" fontSize="10">Visto que</text>
            <text x="263" y="210" textAnchor="middle" fill="#9d174d" fontSize="10">Uma vez que</text>
            {/* Finalidade */}
            <rect x="352" y="140" width="155" height="80" rx="8" fill="#ecfdf5" />
            <text x="429" y="160" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">Finalidade</text>
            <text x="429" y="178" textAnchor="middle" fill="#065f46" fontSize="10">A fim de</text>
            <text x="429" y="194" textAnchor="middle" fill="#065f46" fontSize="10">Com o objetivo de</text>
            <text x="429" y="210" textAnchor="middle" fill="#065f46" fontSize="10">Visando a</text>
            {/* Concessão */}
            <rect x="518" y="140" width="162" height="80" rx="8" fill="#fff7ed" />
            <text x="599" y="160" textAnchor="middle" fill="#c2410c" fontSize="11" fontWeight="bold">Concessão</text>
            <text x="599" y="178" textAnchor="middle" fill="#c2410c" fontSize="10">Embora</text>
            <text x="599" y="194" textAnchor="middle" fill="#c2410c" fontSize="10">Apesar de</text>
            <text x="599" y="210" textAnchor="middle" fill="#c2410c" fontSize="10">Ainda que</text>
          </svg>
          <figcaption>Mapa de conectivos por função argumentativa na redação dissertativo-argumentativa do ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Checklist Final</span>
        <h2>10. Checklist da Redação — O que Revisar Antes de Entregar</h2>

        <p>
          Nos últimos minutos de prova, o candidato com boa preparação sabe o que
          revisar. Um checklist mental sistemático pode evitar erros que custam pontos
          preciosos. Reserve sempre de 5 a 8 minutos para essa revisão final.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Estrutura</h3>
            <p>O texto tem exatamente 4 parágrafos? Introdução, dois desenvolvimentos e conclusão estão claramente delimitados? Cada parágrafo tem tópico frasal identificável?</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Tese e Coerência</h3>
            <p>A tese está clara na introdução? Os argumentos dos dois parágrafos de desenvolvimento sustentam essa tese (e não a contradizem)? A conclusão retoma a tese com refinamento?</p>
          </div>
          <div className="lesson-card">
            <span>🌎</span>
            <h3>Proposta de Intervenção</h3>
            <p>A proposta tem agente específico, ação clara, meio/modo, finalidade e detalhamento? A proposta não fere os Direitos Humanos? Está ligada ao argumento do texto?</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Coesão</h3>
            <p>Os parágrafos estão conectados por conectivos adequados? Há pronomes ambíguos? Os conectivos usados são variados (não apenas "mas" e "portanto")? As enumerações são paralelas?</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Erros ortográficos mais comuns na redação ENEM (C1):</strong>
          <p>
            Atenção especial às palavras de grafia difícil: <em>suscitar</em> (não
            "surcitar"), <em>quaisquer</em> (plural de qualquer), <em>mediante</em>
            (não "mediant"), <em>beneficiar</em> (não "beneficisar"), <em>exceção</em>
            (não "ecceção"), <em>assessorar</em> (com dois "s"), <em>eminente</em>
            (importante — diferente de "iminente", que é urgente). A vírgula antes
            do "que" relativo explicativo e o uso correto da vírgula em orações
            subordinadas adverbiais antecipadas também são pontos de atenção em C1.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificando a Competência"
          statement={
            <p>
              Uma redação foi avaliada e o corretor anotou: <em>"Paragrafação correta,
              mas o texto usa 'mas' seis vezes em quatro parágrafos, o pronome 'ele'
              aparece sem antecedente claro no terceiro parágrafo e os parágrafos não
              estão articulados entre si."</em>
              <br /><br />
              Essa crítica refere-se principalmente a qual competência da redação ENEM?
            </p>
          }
          options={[
            { letter: "a", text: "Competência 1 — Norma culta da língua portuguesa." },
            { letter: "b", text: "Competência 2 — Compreensão da proposta e uso do repertório." },
            { letter: "c", text: "Competência 3 — Seleção e organização dos argumentos." },
            { letter: "d", text: "Competência 4 — Uso dos mecanismos linguísticos de coesão textual.", correct: true },
          ]}
          resolution={
            <p>
              Os problemas apontados pelo corretor são todos de coesão textual:
              repetição do mesmo conectivo (uso de "mas" seis vezes, quando deveria
              variar com "no entanto", "contudo", "todavia"), pronome com referente
              ambíguo (problema de coesão referencial) e falta de articulação entre
              parágrafos (falta de coesão sequencial). Todos esses são critérios da
              <strong> Competência 4</strong>, que avalia especificamente os mecanismos
              linguísticos de coesão. C1 avaliaria erros ortográficos e gramaticais;
              C3 avaliaria a qualidade dos argumentos; C2 avaliaria o repertório.
              Alternativa D é a correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Avaliando a Proposta de Intervenção"
          statement={
            <p>
              Leia a proposta de intervenção de um candidato sobre o tema "Desigualdade
              no acesso à educação de qualidade no Brasil":
              <br /><br />
              <em>"Portanto, é necessário que o governo faça algo para melhorar a
              educação no Brasil."</em>
              <br /><br />
              Por que essa proposta não alcançaria a pontuação máxima na Competência 5?
            </p>
          }
          options={[
            { letter: "a", text: "Porque a proposta fere os Direitos Humanos ao propor intervenção governamental na educação." },
            { letter: "b", text: "Porque a proposta está na conclusão, quando deveria estar no desenvolvimento." },
            { letter: "c", text: "Porque a proposta é genérica demais: não especifica o agente (\"o governo\" é vago), a ação (\"fazer algo\" é indefinida), o meio, a finalidade nem o detalhamento — faltam todos os elementos obrigatórios.", correct: true },
            { letter: "d", text: "Porque o conectivo \"portanto\" é inadequado para introduzir uma proposta de intervenção." },
          ]}
          resolution={
            <p>
              A proposta falha em todos os cinco elementos obrigatórios avaliados na
              Competência 5. (1) <em>Agente:</em> "o governo" é genérico — qual governo?
              Federal? Estadual? Municipal? Qual ministério? (2) <em>Ação:</em>
              "fazer algo" não especifica nenhuma ação concreta — criar, ampliar,
              regulamentar, investir em quê? (3) <em>Meio:</em> ausente. (4)
              <em> Finalidade:</em> "melhorar a educação" é tautológico e vago.
              (5) <em>Detalhamento:</em> ausente. Uma proposta que maximiza C5 seria,
              por exemplo: "O Ministério da Educação [agente] deve ampliar o programa
              de formação continuada de professores das redes municipais [ação], mediante
              parcerias com universidades federais [meio], a fim de garantir educação de
              qualidade nas regiões com índices mais baixos de IDEB [finalidade],
              priorizando municípios do semiárido nordestino [detalhamento]."
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Repertório Produtivo × Repertório Decoreba"
          statement={
            <p>
              Um candidato escreveu, em sua redação sobre saúde mental dos jovens:
              <br /><br />
              <em>"O filósofo René Descartes afirmou 'Penso, logo existo', demonstrando
              a importância do pensamento humano. Por isso, os jovens precisam cuidar
              da saúde mental."</em>
              <br /><br />
              Essa passagem seria bem avaliada na Competência 2? Justifique.
            </p>
          }
          options={[
            { letter: "a", text: "Sim, pois o uso de uma citação filosófica famosa demonstra repertório sociocultural amplo." },
            { letter: "b", text: "Sim, pois a citação de Descartes é correta e o argumento sobre saúde mental é coerente." },
            { letter: "c", text: "Não, pois o repertório não é produtivo: a citação de Descartes está fora de contexto e não estabelece relação argumentativa real com o tema da saúde mental dos jovens — é repertório decoreba.", correct: true },
            { letter: "d", text: "Não, pois citações filosóficas são proibidas na redação ENEM." },
          ]}
          resolution={
            <p>
              A passagem exemplifica exatamente o que os corretores chamam de
              <strong> repertório decoreba</strong>: o candidato inseriu uma citação
              famosa sem estabelecer conexão argumentativa real com o tema. "Penso,
              logo existo" é uma afirmação epistemológica de Descartes sobre a prova
              da existência do sujeito pensante — não tem relação direta ou produtiva
              com saúde mental dos jovens. A conexão feita ("demonstrando a importância
              do pensamento humano → cuidar da saúde mental") é forçada e superficial.
              Para que o repertório fosse produtivo, o candidato precisaria explicar
              o conceito filosófico e mostrar como ele ilumina o problema em questão.
              Por exemplo, Camus e o existencialismo, Freud e a psicanálise, ou dados
              da OMS sobre depressão em jovens seriam mais adequados e conectáveis ao
              tema. Alternativa C é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Analisando uma Tese"
          statement={
            <p>
              Considere o seguinte trecho de introdução de uma redação sobre o tema
              "Desafios para a implementação da educação ambiental nas escolas brasileiras":
              <br /><br />
              <em>"Desde os anos 1970, quando o movimento ambientalista ganhou força global
              com a Conferência de Estocolmo, o Brasil tem debatido a necessidade de
              integrar a questão ambiental à educação formal. No entanto, décadas depois,
              a ausência de infraestrutura pedagógica e a formação deficiente de
              professores ainda impedem que a educação ambiental se torne efetiva nas
              escolas públicas brasileiras."</em>
              <br /><br />
              Avalie a qualidade da tese apresentada:
            </p>
          }
          options={[
            { letter: "a", text: "A tese é fraca, pois não defende nenhum ponto de vista — apenas descreve um problema sem tomar partido." },
            { letter: "b", text: "A tese é forte e bem construída: contextualiza historicamente (Conferência de Estocolmo), identifica o problema (décadas de debate sem avanço) e apresenta dois argumentos que sustentarão o desenvolvimento (infraestrutura pedagógica e formação de professores).", correct: true },
            { letter: "c", text: "A tese é forte, mas o repertório histórico é inadequado para o tema da educação ambiental." },
            { letter: "d", text: "A tese é fraca porque usa linguagem formal excessiva, dificultando a compreensão do leitor." },
          ]}
          resolution={
            <p>
              A tese apresentada é um exemplo de introdução bem construída. Ela atende
              a todos os critérios: (1) <strong>Contextualização:</strong> a Conferência
              de Estocolmo (1972) é um repertório sociocultural preciso e produtivo —
              situa historicamente o debate ambiental e demonstra que o problema tem
              décadas de inação. (2) <strong>Problematização:</strong> "décadas depois"
              cria um contraste temporal que problematiza a persistência do problema.
              (3) <strong>Tese defensável:</strong> os dois obstáculos apontados
              (ausência de infraestrutura pedagógica + formação deficiente de professores)
              são específicos, verificáveis e defensáveis — e funcionam como "plano" do
              desenvolvimento: cada obstáculo pode ser desenvolvido em um parágrafo
              de desenvolvimento. A tese não é vaga ("a educação ambiental é importante")
              nem tautológica — ela identifica causas específicas. Alternativa B é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Proposta de Intervenção Completa"
          statement={
            <p>
              Avalie a seguinte proposta de intervenção sobre o tema da violência nas
              escolas:
              <br /><br />
              <em>"Diante do exposto, faz-se necessário que o Ministério da Educação
              [1], em parceria com as Secretarias Estaduais de Educação [2], implemente
              programas de mediação de conflitos nas escolas públicas [3], por meio
              de formação continuada de professores e coordenadores pedagógicos em
              comunicação não-violenta [4], com o objetivo de reduzir episódios de
              bullying e violência física [5], garantindo ambientes de aprendizagem
              mais seguros e inclusivos para todos os estudantes, especialmente nas
              regiões com maior índice de vulnerabilidade social [6]."</em>
              <br /><br />
              Os números entre colchetes representam elementos da proposta. Qual
              alternativa identifica corretamente os cinco elementos obrigatórios?
            </p>
          }
          options={[
            { letter: "a", text: "[1] = Agente; [3] = Ação; [2] = Meio; [5] = Finalidade; [6] = Detalhamento." },
            { letter: "b", text: "[1]+[2] = Agente; [3] = Ação; [4] = Meio; [5] = Finalidade; [6] = Detalhamento.", correct: true },
            { letter: "c", text: "[1] = Ação; [2] = Agente; [4] = Meio; [5] = Detalhamento; [6] = Finalidade." },
            { letter: "d", text: "A proposta não é válida pois possui agentes demais, comprometendo a clareza." },
          ]}
          resolution={
            <p>
              A proposta apresentada é um exemplo de intervenção nota 200 em C5.
              Os cinco elementos estão todos presentes: (1)+(2) formam o
              <strong> agente</strong> — o Ministério da Educação em parceria com
              as Secretarias Estaduais é específico e institucional. (3) é a
              <strong> ação</strong> — implementar programas de mediação de conflitos.
              (4) é o <strong>meio</strong> — formação continuada em comunicação
              não-violenta. (5) é a <strong>finalidade</strong> — reduzir bullying
              e violência física. (6) é o <strong>detalhamento</strong> — a
              especificação das regiões prioritárias (vulnerabilidade social) e do
              objetivo final (ambientes seguros e inclusivos) aprofunda a proposta e
              demonstra conhecimento da realidade escolar brasileira. A proposta é
              viável, não fere Direitos Humanos e está articulada com o tema.
              Alternativa B é a correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
