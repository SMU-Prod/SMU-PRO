"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 01</span>
          <h1>O que o ENEM cobra em Inglês</h1>
          <p>
            A prova de inglês do ENEM não avalia fluência nem conversação — ela
            avalia sua capacidade de <strong>ler e interpretar textos</strong> em
            língua inglesa, mobilizando estratégias de leitura, conhecimento de
            mundo e raciocínio crítico. Entender o que exatamente é cobrado é o
            primeiro passo para transformar o inglês de um obstáculo em uma fonte
            segura de pontos.
          </p>
          <p>
            Neste capítulo você vai conhecer a matriz de referência oficial do
            ENEM, os gêneros textuais mais recorrentes, as habilidades avaliadas
            e as estratégias gerais que vão guiar todo o restante do curso.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama geral</span>
        <h2>1. Inglês no ENEM: o que muda em relação ao ensino tradicional</h2>
        <p>
          A maioria dos estudantes associa inglês a decorar gramática,
          conjugações verbais e listas de vocabulário. O ENEM segue uma lógica
          completamente diferente: ele exige <strong>leitura crítica</strong>,
          não decoreba. As 5 questões de inglês (ou espanhol, à escolha do
          candidato) avaliam se você consegue extrair informação e sentido de
          textos autênticos, mesmo sem entender cada palavra individualmente.
        </p>
        <div className="lesson-highlight">
          <strong>Dado importante:</strong> O ENEM aplica 5 questões de língua
          estrangeira (inglês ou espanhol) na área de Linguagens, Códigos e suas
          Tecnologias. O candidato escolhe UM idioma no início da prova e responde
          todas as 5 questões naquele idioma. Não há penalidade por escolher o
          idioma com o qual se sente mais confortável.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Leitura</h3>
            <p>Toda questão parte de um texto. Nunca há questão de gramática isolada.</p>
          </div>
          <div className="lesson-card">
            <span>🌎</span>
            <h3>Conhecimento de mundo</h3>
            <p>O contexto cultural e social do texto é fundamental para a interpretação.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Inferência</h3>
            <p>Você precisa deduzir sentidos, não apenas localizar informações literais.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Estratégia</h3>
            <p>Saber por onde começar a ler e como eliminar alternativas erradas é decisivo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Matriz de referência</span>
        <h2>2. A Matriz de Referência do ENEM para Língua Inglesa</h2>
        <p>
          A matriz de referência organiza as habilidades avaliadas em
          <strong> competências</strong>. Para língua estrangeira, as habilidades
          mais diretamente cobradas estão dentro da Competência 7 (compreender e
          usar a língua inglesa/espanhola como veículo de acesso a informações) e
          da Competência 8 (compreender fenômenos da comunicação humana). Veja
          as habilidades centrais:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Habilidade</th>
                <th>O que significa na prática</th>
                <th>Frequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H25</td>
                <td>Identificar o tema/assunto central do texto</td>
                <td>Muito alta</td>
              </tr>
              <tr>
                <td>H26</td>
                <td>Reconhecer o objetivo comunicativo (informar, persuadir, criticar…)</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>H27</td>
                <td>Inferir o sentido de palavras/expressões pelo contexto</td>
                <td>Muito alta</td>
              </tr>
              <tr>
                <td>H28</td>
                <td>Reconhecer o gênero textual e suas características</td>
                <td>Média-alta</td>
              </tr>
              <tr>
                <td>H29</td>
                <td>Interpretar elementos não-verbais (imagens, gráficos) integrados ao texto</td>
                <td>Média</td>
              </tr>
              <tr>
                <td>H30</td>
                <td>Reconhecer posicionamentos, opiniões e argumentos do autor</td>
                <td>Alta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> A habilidade H27 (inferência de vocabulário
          pelo contexto) é cobrada em praticamente todas as edições. Desenvolver
          essa habilidade isoladamente já garante pontos.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros textuais</span>
        <h2>3. Gêneros Textuais mais Cobrados no ENEM</h2>
        <p>
          O ENEM seleciona textos de <strong>circulação social real</strong> —
          textos que existem no mundo e têm uma função comunicativa definida.
          Isso significa que você pode encontrar desde uma tirinha de jornal até
          um artigo científico adaptado. Conhecer os gêneros ajuda a antecipar
          a estrutura do texto antes mesmo de ler a primeira palavra.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero textual</th>
                <th>Características</th>
                <th>O que o ENEM costuma perguntar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tirinha / HQ</td>
                <td>Linguagem visual + verbal; humor ou crítica social</td>
                <td>Intenção humorística, crítica implícita, ironia</td>
              </tr>
              <tr>
                <td>Artigo jornalístico</td>
                <td>Informativo, estrutura objetiva, linguagem formal</td>
                <td>Ideia principal, posicionamento do autor</td>
              </tr>
              <tr>
                <td>Propaganda / anúncio</td>
                <td>Persuasivo, slogan, apelos visuais e textuais</td>
                <td>Objetivo comunicativo, público-alvo, efeito de sentido</td>
              </tr>
              <tr>
                <td>Poema / letra de música</td>
                <td>Linguagem conotativa, recursos estilísticos</td>
                <td>Tema, sentido figurado, emoção transmitida</td>
              </tr>
              <tr>
                <td>Texto de divulgação científica</td>
                <td>Adaptação de pesquisa para leigo; explicativo</td>
                <td>Ideia central, vocabulário técnico em contexto</td>
              </tr>
              <tr>
                <td>Post em redes sociais / blog</td>
                <td>Linguagem informal, marcas de interação</td>
                <td>Intenção comunicativa, marcas de oralidade</td>
              </tr>
              <tr>
                <td>Gráfico / infográfico</td>
                <td>Dados visuais com legenda em inglês</td>
                <td>Interpretação de dados, comparação, tendência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 (SVG 1) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>4. Diagrama: Habilidades x Tipos de Questão</h2>
        <p>
          O diagrama abaixo mostra como as habilidades da matriz se distribuem
          pelos diferentes tipos de tarefa que o ENEM propõe:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            aria-label="Diagrama mostrando a relação entre habilidades do ENEM e tipos de tarefa de inglês"
            role="img"
          >
            <defs>
              <marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#4f46e5" />
              </marker>
            </defs>
            {/* Coluna esquerda — Habilidades */}
            <rect x="20" y="20" width="200" height="40" rx="8" fill="#4f46e5" />
            <text x="120" y="45" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">HABILIDADES ENEM</text>

            <rect x="20" y="80" width="180" height="32" rx="6" fill="#e0e7ff" />
            <text x="110" y="101" textAnchor="middle" fill="#3730a3" fontSize="12">Identificar tema (H25)</text>

            <rect x="20" y="122" width="180" height="32" rx="6" fill="#e0e7ff" />
            <text x="110" y="143" textAnchor="middle" fill="#3730a3" fontSize="12">Objetivo comunicativo (H26)</text>

            <rect x="20" y="164" width="180" height="32" rx="6" fill="#e0e7ff" />
            <text x="110" y="185" textAnchor="middle" fill="#3730a3" fontSize="12">Inferir vocabulário (H27)</text>

            <rect x="20" y="206" width="180" height="32" rx="6" fill="#e0e7ff" />
            <text x="110" y="227" textAnchor="middle" fill="#3730a3" fontSize="12">Reconhecer gênero (H28)</text>

            {/* Setas */}
            <line x1="200" y1="96" x2="290" y2="96" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow1)" />
            <line x1="200" y1="138" x2="290" y2="138" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow1)" />
            <line x1="200" y1="180" x2="290" y2="180" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow1)" />
            <line x1="200" y1="222" x2="290" y2="222" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow1)" />

            {/* Coluna direita — Tipos de questão */}
            <rect x="290" y="20" width="200" height="40" rx="8" fill="#059669" />
            <text x="390" y="45" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">TIPOS DE QUESTÃO</text>

            <rect x="290" y="80" width="180" height="32" rx="6" fill="#d1fae5" />
            <text x="380" y="101" textAnchor="middle" fill="#065f46" fontSize="12">Assunto do texto</text>

            <rect x="290" y="122" width="180" height="32" rx="6" fill="#d1fae5" />
            <text x="380" y="143" textAnchor="middle" fill="#065f46" fontSize="12">Intenção do autor</text>

            <rect x="290" y="164" width="180" height="32" rx="6" fill="#d1fae5" />
            <text x="380" y="185" textAnchor="middle" fill="#065f46" fontSize="12">Sentido de palavra/expressão</text>

            <rect x="290" y="206" width="180" height="32" rx="6" fill="#d1fae5" />
            <text x="380" y="227" textAnchor="middle" fill="#065f46" fontSize="12">Gênero e suporte textual</text>

            {/* Legenda */}
            <rect x="510" y="80" width="170" height="80" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="595" y="102" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Cada questão ativa</text>
            <text x="595" y="120" textAnchor="middle" fill="#92400e" fontSize="11">múltiplas habilidades</text>
            <text x="595" y="138" textAnchor="middle" fill="#92400e" fontSize="11">simultaneamente</text>
            <text x="595" y="156" textAnchor="middle" fill="#92400e" fontSize="11">→ leitura integrada</text>
          </svg>
          <figcaption>Relação entre habilidades da matriz de referência e os tipos de tarefa exigidos nas questões de inglês do ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>5. ENEM vs. Vestibulares Tradicionais: diferenças cruciais</h2>
        <p>
          Entender as diferenças entre o ENEM e vestibulares como FUVEST, UNICAMP
          e UERJ é essencial para não estudar de forma equivocada. Enquanto
          vestibulares tradicionais cobram regras gramaticais explícitas e
          tradução literal, o ENEM foca exclusivamente em competências leitoras.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>ENEM</th>
                <th>Vestibulares tradicionais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foco principal</td>
                <td>Leitura e interpretação</td>
                <td>Gramática + leitura</td>
              </tr>
              <tr>
                <td>Gramática explícita</td>
                <td>Não cobrada isoladamente</td>
                <td>Pode ser cobrada em itens separados</td>
              </tr>
              <tr>
                <td>Tradução</td>
                <td>Não exigida</td>
                <td>Pode ser exigida</td>
              </tr>
              <tr>
                <td>Vocabulário</td>
                <td>Inferência pelo contexto</td>
                <td>Conhecimento direto pode ser cobrado</td>
              </tr>
              <tr>
                <td>Textos</td>
                <td>Sempre autênticos (jornais, redes sociais, arte)</td>
                <td>Podem ser elaborados para a prova</td>
              </tr>
              <tr>
                <td>Elementos visuais</td>
                <td>Frequentes (tirinhas, infográficos)</td>
                <td>Menos frequentes</td>
              </tr>
              <tr>
                <td>Quantidade de questões</td>
                <td>5 questões</td>
                <td>Varia (8 a 15 em geral)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>6. Como Abordar as Questões de Inglês no ENEM</h2>
        <p>
          Independentemente do seu nível atual de inglês, existe uma sequência
          estratégica de abordagem que maximiza seus pontos. Siga este roteiro
          em todas as questões:
        </p>
        <ol>
          <li>
            <strong>Leia o enunciado primeiro (em português).</strong> O enunciado
            já diz o que a questão pede — "O texto tem como objetivo…",
            "A expressão destacada significa…", "De acordo com o texto…". Isso
            define o foco da sua leitura.
          </li>
          <li>
            <strong>Observe o suporte do texto.</strong> É uma tirinha? Uma
            propaganda? Um artigo? O suporte indica o gênero e a intenção
            comunicativa antes de você ler uma única palavra.
          </li>
          <li>
            <strong>Faça uma leitura global (skimming).</strong> Passe os olhos
            pelo texto para captar o tema geral, sem se prender em palavras
            desconhecidas.
          </li>
          <li>
            <strong>Identifique palavras-chave e cognatos.</strong> Palavras
            parecidas com o português (nation, culture, economic) fornecem
            âncoras de compreensão.
          </li>
          <li>
            <strong>Leia as alternativas com atenção.</strong> Alternativas erradas
            costumam conter informações do texto, mas com distorção de sentido ou
            generalização indevida.
          </li>
          <li>
            <strong>Elimine as absurdas primeiro.</strong> Geralmente 2 a 3
            alternativas podem ser descartadas por contradizerem o texto.
          </li>
        </ol>
        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> A resposta correta no ENEM sempre tem
          base no texto. Nunca marque uma alternativa com base em conhecimento
          externo que contradiga o que está escrito no texto da prova.
        </div>
      </section>

      {/* ── SEÇÃO 7 (SVG 2) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fluxograma</span>
        <h2>7. Fluxo de Resolução de uma Questão de Inglês</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            aria-label="Fluxograma de resolução de questão de inglês no ENEM"
            role="img"
          >
            <defs>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#374151" />
              </marker>
            </defs>
            {/* Passo 1 */}
            <rect x="270" y="10" width="160" height="40" rx="20" fill="#4f46e5" />
            <text x="350" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1. Leia o enunciado</text>

            <line x1="350" y1="50" x2="350" y2="75" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />

            {/* Passo 2 */}
            <rect x="230" y="75" width="240" height="40" rx="8" fill="#6366f1" />
            <text x="350" y="100" textAnchor="middle" fill="white" fontSize="12">2. Identifique o gênero/suporte</text>

            <line x1="350" y1="115" x2="350" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />

            {/* Passo 3 */}
            <rect x="220" y="140" width="260" height="40" rx="8" fill="#818cf8" />
            <text x="350" y="165" textAnchor="middle" fill="white" fontSize="12">3. Skimming — visão geral do texto</text>

            <line x1="350" y1="180" x2="350" y2="205" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />

            {/* Passo 4 */}
            <rect x="200" y="205" width="300" height="40" rx="8" fill="#a5b4fc" />
            <text x="350" y="225" textAnchor="middle" fill="#1e1b4b" fontSize="12">4. Scanning — localiza info específica</text>

            <line x1="350" y1="245" x2="350" y2="268" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />

            {/* Passo 5 */}
            <rect x="230" y="268" width="240" height="30" rx="15" fill="#059669" />
            <text x="350" y="288" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">5. Elimine e marque a resposta</text>

            {/* Dica lateral */}
            <rect x="530" y="75" width="155" height="120" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="607" y="97" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="bold">Tempo ideal</text>
            <text x="607" y="115" textAnchor="middle" fill="#713f12" fontSize="11">2 a 3 min por questão</text>
            <text x="607" y="133" textAnchor="middle" fill="#713f12" fontSize="11">Se travar, chute</text>
            <text x="607" y="151" textAnchor="middle" fill="#713f12" fontSize="11">e siga em frente</text>
            <text x="607" y="169" textAnchor="middle" fill="#713f12" fontSize="11">Não deixe em branco</text>

            {/* Dica lateral 2 */}
            <rect x="15" y="75" width="155" height="120" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="92" y="97" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Evite</text>
            <text x="92" y="115" textAnchor="middle" fill="#991b1b" fontSize="11">Traduzir palavra</text>
            <text x="92" y="133" textAnchor="middle" fill="#991b1b" fontSize="11">por palavra</text>
            <text x="92" y="151" textAnchor="middle" fill="#991b1b" fontSize="11">Pânico com palavras</text>
            <text x="92" y="169" textAnchor="middle" fill="#991b1b" fontSize="11">desconhecidas</text>
          </svg>
          <figcaption>Fluxo estratégico de resolução de questões de inglês no ENEM. Seguir essa ordem reduz erros e economiza tempo de prova.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distribuição histórica</span>
        <h2>8. O que as Provas Anteriores Mostram</h2>
        <p>
          Analisando as provas de inglês do ENEM das últimas décadas, é possível
          identificar padrões claros de recorrência:
        </p>
        <ul>
          <li>
            <strong>Tirinhas e charges</strong> aparecem em quase todas as edições,
            geralmente exigindo identificação de humor, crítica ou ironia.
          </li>
          <li>
            <strong>Propagandas e anúncios</strong> são frequentes, com foco no
            objetivo persuasivo e no público-alvo.
          </li>
          <li>
            <strong>Textos jornalísticos e de divulgação científica</strong>
            costumam pedir a identificação do tema central ou a posição do autor.
          </li>
          <li>
            <strong>Letras de música</strong> aparecem periodicamente, exigindo
            interpretação de linguagem figurada.
          </li>
          <li>
            <strong>Textos digitais</strong> (posts, tweets, blogs) cresceram em
            frequência nas últimas edições, refletindo a realidade contemporânea
            da comunicação.
          </li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Pratique com textos reais em inglês — leia
          manchetes do <em>BBC News</em>, <em>The Guardian</em> ou do
          <em> New York Times</em> por 10 minutos por dia. A exposição regular
          ao inglês autêntico é o treino mais eficaz para o ENEM.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>9. As Pegadinhas mais Comuns nas Questões de Inglês</h2>
        <p>
          O ENEM constrói alternativas erradas de forma muito específica. Conhecer
          os tipos de "pegadinha" ajuda a não cair nelas:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Informação verdadeira, mas não responde</h3>
            <p>A alternativa contém algo que está no texto, mas não responde ao que o enunciado perguntou.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Sentido invertido</h3>
            <p>A alternativa pega uma ideia do texto e inverte a lógica, criando uma afirmação contrária.</p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Generalização indevida</h3>
            <p>O texto fala de um caso específico, mas a alternativa generaliza para "sempre" ou "todos".</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Confusão de referente</h3>
            <p>A alternativa usa pronomes (it, they, this) mas atribui a referência errada no texto.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Planejamento de estudo</span>
        <h2>10. Como Organizar seu Estudo de Inglês para o ENEM</h2>
        <p>
          Com base em tudo que vimos, aqui está um plano de estudos eficiente
          para quem tem pouco tempo e quer maximizar pontos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Prioridade</th>
                <th>Conteúdo</th>
                <th>Impacto nos pontos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª (alta)</td>
                <td>Estratégias de leitura e interpretação</td>
                <td>Muito alto</td>
              </tr>
              <tr>
                <td>2ª (alta)</td>
                <td>Cognatos e vocabulário de alta frequência</td>
                <td>Alto</td>
              </tr>
              <tr>
                <td>3ª (média)</td>
                <td>Prefixos e sufixos (formação de palavras)</td>
                <td>Médio-alto</td>
              </tr>
              <tr>
                <td>4ª (média)</td>
                <td>Conectores e marcadores discursivos</td>
                <td>Médio</td>
              </tr>
              <tr>
                <td>5ª (complementar)</td>
                <td>Tempos verbais básicos (reconhecimento)</td>
                <td>Médio</td>
              </tr>
              <tr>
                <td>6ª (complementar)</td>
                <td>Gêneros textuais específicos</td>
                <td>Médio</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Ponto-chave:</strong> Não desperdice horas estudando gramática
          isolada para o ENEM. Cada hora investida em leitura de textos reais
          em inglês vale mais do que horas decorando conjugações verbais.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Foco do ENEM em Inglês"
          statement={
            <p>
              A prova de inglês do ENEM se diferencia de vestibulares tradicionais
              principalmente porque:
            </p>
          }
          options={[
            { letter: "A", text: "Cobra gramática de forma isolada e explícita, exigindo conhecimento de regras." },
            { letter: "B", text: "Exige tradução de textos completos para o português." },
            { letter: "C", text: "Avalia a leitura e interpretação de textos autênticos, sem cobrar gramática isolada.", correct: true },
            { letter: "D", text: "Avalia conversação e produção oral em inglês." },
            { letter: "E", text: "Foca exclusivamente em textos literários clássicos da língua inglesa." },
          ]}
          resolution={
            <p>
              O ENEM avalia <strong>competências leitoras</strong>, não gramática
              isolada. Toda questão parte de um texto autêntico (notícia, propaganda,
              tirinha, etc.), e o candidato deve interpretar, inferir e identificar
              intenções comunicativas — nunca conjugar verbos ou traduzir frases.
              As alternativas A, B, D e E descrevem características de outros tipos
              de avaliação, não do ENEM.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Habilidades da Matriz de Referência"
          statement={
            <p>
              Um estudante encontra na prova do ENEM a seguinte instrução:{" "}
              <em>"De acordo com o texto, a expressão <strong>sustainable development</strong>{" "}
              refere-se a:"</em>. Essa questão avalia principalmente qual habilidade
              da matriz de referência?
            </p>
          }
          options={[
            { letter: "A", text: "H25 — Identificar o tema central do texto." },
            { letter: "B", text: "H26 — Reconhecer o objetivo comunicativo do texto." },
            { letter: "C", text: "H27 — Inferir o sentido de palavras ou expressões pelo contexto.", correct: true },
            { letter: "D", text: "H28 — Reconhecer o gênero textual e suas características." },
            { letter: "E", text: "H30 — Reconhecer o posicionamento do autor." },
          ]}
          resolution={
            <p>
              A questão pede o significado de uma <strong>expressão específica</strong>{" "}
              (<em>sustainable development</em>) dentro do texto, o que corresponde
              à habilidade <strong>H27</strong>: inferir o sentido de palavras e
              expressões pelo contexto. Essa é uma das habilidades mais cobradas
              no ENEM e pode ser desenvolvida sem conhecer a tradução direta da
              palavra — basta analisar o contexto ao redor da expressão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Estratégia de abordagem"
          statement={
            <p>
              Considere a seguinte situação: um candidato, ao deparar-se com um
              texto em inglês no ENEM, adota a seguinte estratégia — primeiro lê
              todas as alternativas de todas as questões, depois lê o texto do
              início ao fim tentando traduzir cada palavra, e por fim tenta
              responder. Qual é o principal problema dessa abordagem?
            </p>
          }
          options={[
            { letter: "A", text: "Ler as alternativas primeiro é sempre prejudicial e não deve ser feito." },
            { letter: "B", text: "A tentativa de traduzir palavra por palavra é ineficiente e consome tempo excessivo, contrariando a estratégia de leitura global recomendada.", correct: true },
            { letter: "C", text: "O candidato deveria responder as questões sem nunca ler o texto completo." },
            { letter: "D", text: "A estratégia é correta, mas deveria ser aplicada em ordem inversa." },
            { letter: "E", text: "Ler o texto do início ao fim é desnecessário; basta ler os parágrafos indicados nas questões." },
          ]}
          resolution={
            <p>
              O principal problema é a <strong>tradução palavra por palavra</strong>,
              que é ao mesmo tempo ineficiente (consome muito tempo) e desnecessária
              para o ENEM. A estratégia recomendada é: 1) ler o enunciado da questão;
              2) fazer uma leitura global (skimming) para captar o tema; 3) fazer
              scanning para localizar informações específicas. Ler o enunciado antes
              do texto é válido — orienta o foco da leitura. A alternativa E também
              é parcialmente correta, mas a B captura o problema central mais
              precisamente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Gênero textual e intenção comunicativa"
          statement={
            <div>
              <p>
                <em>(Questão baseada em situação típica do ENEM)</em>
              </p>
              <p>
                Um texto apresentado na prova traz um slogan em inglês:{" "}
                <strong>"Think green. Act now. Save tomorrow."</strong>, acompanhado
                de uma imagem de planeta Terra com folhas verdes ao redor. Com base
                no gênero textual e na intenção comunicativa, esse texto tem como
                objetivo principal:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Informar sobre dados científicos relacionados ao desmatamento global." },
            { letter: "B", text: "Narrar a história do movimento ambientalista no mundo." },
            { letter: "C", text: "Persuadir o leitor a adotar atitudes sustentáveis em favor do meio ambiente.", correct: true },
            { letter: "D", text: "Explicar o conceito científico de sustentabilidade de forma didática." },
            { letter: "E", text: "Criticar governos que não cumprem metas de redução de emissões de carbono." },
          ]}
          resolution={
            <p>
              O texto é uma <strong>campanha/propaganda</strong> — identificável pelo
              slogan curto, imperativo (<em>Think, Act, Save</em>) e pela imagem
              simbólica. Campanhas têm função <strong>persuasiva</strong>: convencer
              o leitor a mudar comportamento. Os verbos no imperativo reforçam essa
              intenção. As demais alternativas descrevem funções informativa,
              narrativa, explicativa e crítica — características de outros gêneros.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Armadilhas nas alternativas"
          statement={
            <div>
              <p>
                <em>Texto (adaptado de artigo jornalístico):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Scientists in Brazil have discovered a new species of orchid in the
                Amazon rainforest. The flower, which blooms only at night, was found
                in a region that had never been explored before. Researchers say the
                discovery highlights the importance of protecting the remaining areas
                of native forest."
              </p>
              <p>
                A questão pergunta: "O texto afirma que a orquídea descoberta:".
                Analise as alternativas e identifique a correta:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Foi encontrada em uma área já amplamente estudada por pesquisadores." },
            { letter: "B", text: "Floresce apenas durante o dia, o que a torna rara." },
            { letter: "C", text: "Foi descoberta em uma região que nunca havia sido explorada anteriormente.", correct: true },
            { letter: "D", text: "Pertence a uma espécie já conhecida da Amazônia." },
            { letter: "E", text: "Demonstra que a floresta amazônica está totalmente protegida." },
          ]}
          resolution={
            <p>
              O texto afirma claramente: <em>"found in a region that had never been
              explored before"</em> — encontrada em uma região nunca explorada antes.
              A alternativa C corresponde diretamente a essa informação.
              A alternativa A inverte o sentido (<em>never explored</em> ≠ amplamente
              estudada). A B inverte o horário (<em>blooms only at night</em> = à
              noite, não de dia). A D contradiz <em>"new species"</em>. A E
              exagera o escopo — o texto diz que a descoberta ressalta a
              <em> importância</em> de proteger, não que já está protegida.
            </p>
          }
        />
      </section>
    </article>
  );
}
