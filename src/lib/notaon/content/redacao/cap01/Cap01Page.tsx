"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 1</span>
          <h1>Introdução à Redação ENEM</h1>
          <p>
            Entenda como funciona a redação do ENEM, quais competências são avaliadas e como
            ela pode transformar sua nota final. Conheça a estrutura obrigatória, os critérios
            de correção e construa uma preparação estratégica rumo à nota 1000.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. O que é a Redação do ENEM?</h2>
        <p>
          A redação do ENEM é um <strong>texto dissertativo-argumentativo em prosa</strong> que exige do
          participante a defesa de um ponto de vista sobre um problema social, sempre respeitando
          os direitos humanos. Ela é elaborada a partir de uma proposta temática acompanhada de
          textos motivadores — trechos de artigos, notícias, dados estatísticos, charges ou
          poemas — que servem como base de reflexão, mas <em>não devem ser copiados</em>.
        </p>
        <p>
          O texto deve ter entre <strong>7 e 30 linhas</strong> manuscritas (o ideal é de 25 a 30
          linhas) e ser redigido em língua portuguesa formal, sem marcas de oralidade. Não é
          permitido escrever em forma de verso, carta, bilhete, diário ou qualquer outro gênero
          diferente da dissertação argumentativa. Textos narrativos ou descritivos também
          configuram fuga ao tipo textual, zerando a Competência 2.
        </p>
        <div className="lesson-highlight">
          <h3>Tipo textual obrigatório</h3>
          <p>
            Dissertativo-argumentativo significa: você <strong>defende uma tese</strong> (posicionamento)
            com <strong>argumentos fundamentados</strong> (desenvolvimento) e apresenta uma
            <strong> proposta de intervenção</strong> ao final (conclusão). Narrar histórias ou
            descrever cenas sem argumentar equivale a fuga ao tipo textual — nota zero na C2.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Peso na Nota</span>
        <h2>2. Por que a Redação Vale até 1000 Pontos?</h2>
        <p>
          A redação corresponde a <strong>1/5 da nota final do ENEM</strong>. O exame é composto
          por quatro cadernos de questões objetivas (Linguagens, Ciências Humanas, Ciências da
          Natureza e Matemática) mais a redação. Cada caderno gera uma nota em escala de 0 a
          1000 e a redação é somada a essas notas para fins de ingresso em universidades pelo
          SISU, ProUni e FIES.
        </p>
        <p>
          Na prática, uma redação nota 1000 pode compensar uma queda em outras áreas. Por
          exemplo: se você tirar 650 em cada caderno de questões, sua média geral sem a redação
          seria 650. Com uma redação nota 1000, sua média sobe para <strong>720 pontos</strong>
          — uma diferença que pode ser decisiva para o curso e a universidade almejados. Além
          disso, muitas universidades e cursos de medicina exigem nota mínima na redação (geralmente
          500 a 700 pontos) para que o candidato não seja eliminado.
        </p>
        <div className="lesson-highlight">
          <h3>Impacto estratégico</h3>
          <p>
            A redação é a única prova do ENEM que você pode treinar com técnica e feedback
            iterativo. Questões objetivas dependem de décadas de estudo acumulado; a redação
            pode ser dominada em semanas com método correto. Invista tempo proporcional ao
            impacto: mínimo 30% do seu tempo de preparação deve ser dedicado à escrita.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Critérios de Correção</span>
        <h2>3. As 5 Competências: Tabela Detalhada</h2>
        <p>
          Cada redação é corrigida por dois corretores independentes que atribuem de 0 a 200
          pontos em cada uma das cinco competências. As notas são somadas para chegar ao total
          de 0 a 1000. Se a diferença entre os dois corretores for superior a 100 pontos em
          qualquer competência, um terceiro corretor é chamado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>O que avalia</th>
                <th>Pontos-chave</th>
                <th>Nota máxima</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C1 — Língua Portuguesa</strong></td>
                <td>Domínio da norma culta escrita</td>
                <td>Ortografia, acentuação, concordância verbal/nominal, regência, pontuação, crase</td>
                <td>200</td>
              </tr>
              <tr>
                <td><strong>C2 — Compreensão do Tema</strong></td>
                <td>Adequação ao tipo textual e ao tema proposto</td>
                <td>Fuga ao tema, tangenciamento, cópia de textos motivadores, repertório sociocultural</td>
                <td>200</td>
              </tr>
              <tr>
                <td><strong>C3 — Organização de Ideias</strong></td>
                <td>Coerência, seleção e organização de argumentos</td>
                <td>Tese clara, argumentos pertinentes, relação lógica entre tese e argumentos, conclusão coesa</td>
                <td>200</td>
              </tr>
              <tr>
                <td><strong>C4 — Mecanismos de Coesão</strong></td>
                <td>Articulação entre frases e parágrafos</td>
                <td>Conectivos adequados, referenciação (pronomes, sinônimos), sequenciação lógica</td>
                <td>200</td>
              </tr>
              <tr>
                <td><strong>C5 — Proposta de Intervenção</strong></td>
                <td>Qualidade e completude da proposta de solução</td>
                <td>Ação + Agente + Modo + Finalidade + Efeito, respeito aos direitos humanos</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura Obrigatória</span>
        <h2>4. Estrutura: Introdução + 2 Desenvolvimentos + Conclusão</h2>
        <p>
          A estrutura clássica da redação ENEM é dividida em <strong>4 parágrafos</strong>,
          cada um com função específica e obrigatória. Textos com apenas 2 ou 3 parágrafos,
          ou com parágrafos sem distinção de função, perdem pontos significativos nas
          competências C3, C4 e C5.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 220" width="520" height="220" aria-label="Estrutura da redação ENEM em quatro blocos conectados">
            <defs>
              <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>
            {/* Bloco 1 - Introdução */}
            <rect x="10" y="60" width="110" height="70" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="65" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3730a3">Introdução</text>
            <text x="65" y="102" textAnchor="middle" fontSize="10" fill="#4338ca">Contextualização</text>
            <text x="65" y="117" textAnchor="middle" fontSize="10" fill="#4338ca">+ Tese</text>
            {/* Seta 1→2 */}
            <line x1="120" y1="95" x2="148" y2="95" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow1)" />
            {/* Bloco 2 - Desenvolvimento 1 */}
            <rect x="150" y="60" width="110" height="70" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="205" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Dev. 1</text>
            <text x="205" y="102" textAnchor="middle" fontSize="10" fill="#047857">Argumento</text>
            <text x="205" y="117" textAnchor="middle" fontSize="10" fill="#047857">+ Exemplo</text>
            {/* Seta 2→3 */}
            <line x1="260" y1="95" x2="288" y2="95" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow1)" />
            {/* Bloco 3 - Desenvolvimento 2 */}
            <rect x="290" y="60" width="110" height="70" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="345" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Dev. 2</text>
            <text x="345" y="102" textAnchor="middle" fontSize="10" fill="#b45309">Argumento</text>
            <text x="345" y="117" textAnchor="middle" fontSize="10" fill="#b45309">+ Análise</text>
            {/* Seta 3→4 */}
            <line x1="400" y1="95" x2="428" y2="95" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrow1)" />
            {/* Bloco 4 - Conclusão */}
            <rect x="430" y="60" width="80" height="70" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="470" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Conclusão</text>
            <text x="470" y="102" textAnchor="middle" fontSize="10" fill="#be185d">Retomada</text>
            <text x="470" y="117" textAnchor="middle" fontSize="10" fill="#be185d">+ PI</text>
            {/* Legenda */}
            <text x="10" y="170" fontSize="11" fill="#6b7280">PI = Proposta de Intervenção</text>
            <text x="10" y="188" fontSize="11" fill="#6b7280">Dev. = Parágrafo de Desenvolvimento (argumento + evidência + análise)</text>
            <text x="10" y="206" fontSize="11" fill="#6b7280">Cada parágrafo: mínimo 5–7 linhas</text>
          </svg>
          <figcaption>Estrutura obrigatória da redação ENEM: quatro parágrafos com função definida</figcaption>
        </figure>
        <p>
          O <strong>primeiro parágrafo (Introdução)</strong> contextualiza o tema e termina com
          a tese — seu posicionamento sobre o problema. O <strong>segundo parágrafo (Desenvolvimento 1)</strong>
          apresenta o argumento principal com evidência e análise. O <strong>terceiro parágrafo
          (Desenvolvimento 2)</strong> traz um argumento complementar, geralmente uma causa, consequência
          ou perspectiva diferente. O <strong>quarto parágrafo (Conclusão)</strong> retoma a tese
          com outras palavras e apresenta a proposta de intervenção completa.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linhas e Espaço</span>
        <h2>5. Número de Linhas Ideal: 25 a 30 Linhas Manuscritas</h2>
        <p>
          A folha de redação do ENEM oferece 30 linhas para o texto e uma área de rascunho
          separada. O texto mínimo para não ser anulado é de <strong>7 linhas</strong>, mas
          textos muito curtos (abaixo de 15 linhas) raramente conseguem desenvolver argumentos
          suficientes e tendem a perder pontos em C3 e C5. O intervalo <strong>ideal é de
          25 a 30 linhas</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Distribuição recomendada por parágrafo</h3>
          <p>
            <strong>Introdução:</strong> 5–7 linhas (contextualização + tese)<br />
            <strong>Desenvolvimento 1:</strong> 7–9 linhas (tópico + evidência + análise)<br />
            <strong>Desenvolvimento 2:</strong> 7–9 linhas (tópico + evidência + análise)<br />
            <strong>Conclusão:</strong> 5–7 linhas (retomada + PI completa)<br />
            <strong>Total:</strong> 24–32 linhas — ideal 28 linhas
          </p>
        </div>
        <p>
          Evite ultrapassar 30 linhas: você não terá mais espaço e a letra pode ficar ilegível
          nas últimas linhas. Escrever mais não significa escrever melhor. Qualidade e precisão
          valem mais que quantidade. Use o rascunho para planejar a estrutura antes de começar
          a versão definitiva.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>6. Tema vs Proposta de Intervenção: Diferença Fundamental</h2>
        <p>
          Confundir <strong>tema</strong> com <strong>proposta de intervenção</strong> é um dos
          erros mais frequentes entre candidatos iniciantes. O tema é o <em>problema social</em>
          que o ENEM pede que você discuta e analise; a proposta de intervenção é a
          <em> solução concreta</em> que você apresenta ao final para enfrentar esse problema.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aspecto</th><th>Tema</th><th>Proposta de Intervenção</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Definição</td>
                <td>O problema social a ser discutido</td>
                <td>A solução que você propõe para o problema</td>
              </tr>
              <tr>
                <td>Onde aparece</td>
                <td>Em toda a redação (contexto geral)</td>
                <td>Apenas na conclusão</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>"Desigualdade de acesso à educação"</td>
                <td>"Que o MEC amplie o PROUNI para EaD, com o objetivo de incluir trabalhadores que não podem estudar presencialmente, reduzindo a evasão escolar"</td>
              </tr>
              <tr>
                <td>Avaliada em</td>
                <td>C2 e C3</td>
                <td>C5 (exclusivamente)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erro Grave</span>
        <h2>7. Fuga ao Tema: O que É e Como Evitar</h2>
        <p>
          A <strong>fuga ao tema</strong> ocorre quando o candidato aborda assunto diferente
          do proposto, seja por não ter lido com atenção a proposta, seja por querer escrever
          sobre um tema que conhece melhor. É o erro mais grave da redação ENEM: zera
          automaticamente a <strong>Competência 2</strong> e, em consequência, zera o texto
          inteiro — pois sem C2 não há coerência global.
        </p>
        <div className="lesson-highlight">
          <h3>Tipos de desvio temático</h3>
          <p>
            <strong>Fuga total:</strong> O texto aborda tema completamente diferente. Nota 0 na C2.<br />
            <strong>Tangenciamento:</strong> O texto toca tangencialmente no tema, mas não o discute de forma central. Nota 40–80 na C2.<br />
            <strong>Parcialidade:</strong> O candidato aborda apenas um aspecto do recorte, ignorando o núcleo do tema. Nota 80–120 na C2.<br />
            <strong>Cópia dos motivadores:</strong> Transcrever frases inteiras dos textos motivadores. Desconsiderado pelo corretor — como se não tivesse sido escrito.
          </p>
        </div>
        <p>
          Para evitar a fuga ao tema: <strong>sublinhe as palavras-chave</strong> da proposta
          antes de começar a escrever. Pergunte-se a cada parágrafo: "Estou falando diretamente
          sobre o problema pedido?" Se a resposta for não, reescreva aquela parte. O tema é o
          fio condutor do texto — todo argumento, exemplo e proposta devem se conectar a ele.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Abertura</span>
        <h2>8. Tipos de Introdução: Estratégias de Contextualização</h2>
        <p>
          A introdução deve contextualizar o tema para o leitor, mostrando relevância social
          e histórica do problema antes de apresentar sua tese. Existem cinco estratégias
          principais, todas aceitas pelo ENEM:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Como fazer</th><th>Exemplo de abertura</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Contextualização histórica</strong></td>
                <td>Ancoragem temporal: situar o problema no tempo</td>
                <td>"Ao longo do século XX, a industrialização transformou as relações de trabalho, gerando novos tipos de exclusão social..."</td>
              </tr>
              <tr>
                <td><strong>Citação ou dado estatístico</strong></td>
                <td>Trazer voz de autoridade ou número para dar credibilidade</td>
                <td>"Segundo dados do IBGE de 2022, cerca de 33 milhões de brasileiros vivem em situação de insegurança alimentar grave..."</td>
              </tr>
              <tr>
                <td><strong>Situação hipotética</strong></td>
                <td>Convidar o leitor a imaginar um cenário</td>
                <td>"Imagine uma jovem de 17 anos que, ao acordar, não tem acesso à internet para assistir às aulas do ensino médio..."</td>
              </tr>
              <tr>
                <td><strong>Definição conceitual</strong></td>
                <td>Definir termos-chave do tema</td>
                <td>"Entende-se por racismo estrutural a forma como preconceitos raciais são reproduzidos pelas instituições, independentemente da intenção individual..."</td>
              </tr>
              <tr>
                <td><strong>Comparação ou contraste</strong></td>
                <td>Evidenciar contradição ou paradoxo</td>
                <td>"Se por um lado o Brasil possui legislação robusta de proteção ambiental, por outro os índices de desmatamento cresceram nos últimos anos..."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Evite os clichês que desgastam a introdução: <em>"Desde os primórdios da
          humanidade..."</em>, <em>"Nos tempos atuais..."</em>, <em>"Com o advento da
          globalização..."</em>. Esses começos são tão repetitivos que reduzem a originalidade
          percebida pelo corretor e podem prejudicar a nota em C2.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Critérios Objetivos</span>
        <h2>9. Como o Corretor Avalia: Escala de Notas por Competência</h2>
        <p>
          Cada competência é avaliada em uma escala de <strong>0 a 200 pontos</strong>, com
          intervalos fixos de 40 pontos: 0, 40, 80, 120, 160 ou 200. Não existem notas
          intermediárias (por exemplo, 170 ou 90). O corretor escolhe o nível que melhor
          descreve o desempenho do candidato naquela dimensão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Nota</th>
                <th>O que significa (geral)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nível 0</td><td>0</td><td>Inexistente, ilegível, ou condição de anulação (ex.: fuga ao tema em C2; texto sem PI em C5)</td></tr>
              <tr><td>Nível 1</td><td>40</td><td>Presença muito precária do que é esperado; muitos desvios graves</td></tr>
              <tr><td>Nível 2</td><td>80</td><td>Domínio insuficiente; mais erros do que acertos</td></tr>
              <tr><td>Nível 3</td><td>120</td><td>Domínio mediano; alguns problemas, mas estrutura reconhecível</td></tr>
              <tr><td>Nível 4</td><td>160</td><td>Bom domínio; poucos desvios pontuais</td></tr>
              <tr><td>Nível 5</td><td>200</td><td>Excelente domínio; poucos ou nenhum desvio — mostra competência plena</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Estratégia: meta realista por competência</h3>
          <p>
            Para nota 800: obter 160 em cada competência (4 acertos por 5).<br />
            Para nota 1000: obter 200 em todas as competências.<br />
            Identifique sua competência mais fraca e invista nela primeiro — é onde o ganho marginal é maior.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planejamento</span>
        <h2>10. Plano de Estudos para Nota 1000: Cronograma Mensal</h2>
        <p>
          Nota 1000 na redação não é acidente — é resultado de prática sistemática com
          feedback de qualidade. O método mais eficaz combina <strong>leitura de repertório</strong>,
          <strong>escrita regular de redações completas</strong> e <strong>análise detalhada de erros</strong>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Mês</th><th>Foco</th><th>Meta semanal</th><th>Atividade prática</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Mês 1</td>
                <td>Estrutura e gramática</td>
                <td>1 redação completa</td>
                <td>Estudar estrutura (aulas 1–5), identificar erros de C1</td>
              </tr>
              <tr>
                <td>Mês 2</td>
                <td>Argumentação e repertório</td>
                <td>1–2 redações completas</td>
                <td>Estudar tipos de argumento, criar banco de repertório</td>
              </tr>
              <tr>
                <td>Mês 3</td>
                <td>Coesão e PI</td>
                <td>2 redações completas</td>
                <td>Praticar conectivos, aperfeiçoar proposta de intervenção</td>
              </tr>
              <tr>
                <td>Mês 4</td>
                <td>Simulados com tempo</td>
                <td>2–3 redações cronometradas</td>
                <td>Escrever em 60 minutos, revisar, submeter para correção</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Leia pelo menos um artigo de opinião por semana de fontes como Nexo Jornal, Le Monde
          Diplomatique Brasil, Agência Pública, BBC Brasil e Folha de S.Paulo. Acompanhe temas
          recorrentes no ENEM: meio ambiente, educação, saúde, desigualdade social, tecnologia,
          cultura, direitos humanos, trabalho e democracia.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condições de Anulação</span>
        <h2>11. Quando a Redação é Anulada ou Zerada?</h2>
        <p>
          Além da fuga ao tema (C2 = 0), existem outras condições que zeram ou anulam totalmente
          a redação. É fundamental conhecê-las para evitar erros irreparáveis durante a prova.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>Competência afetada</th><th>Efeito na nota</th></tr>
            </thead>
            <tbody>
              <tr><td>Fuga ao tipo textual (narrativo/carta etc.)</td><td>C2</td><td>Nota 0 na C2 = nota zero geral</td></tr>
              <tr><td>Texto em branco ou ilegível</td><td>Todas</td><td>Anulação total</td></tr>
              <tr><td>Menos de 7 linhas</td><td>Todas</td><td>Anulação total</td></tr>
              <tr><td>Proposta de intervenção que viola direitos humanos</td><td>C5</td><td>Nota 0 na C5</td></tr>
              <tr><td>Cópia integral dos textos motivadores</td><td>C2</td><td>Partes copiadas desconsideradas</td></tr>
              <tr><td>Identificação (nome, assinatura, número de inscrição)</td><td>Todas</td><td>Anulação total</td></tr>
              <tr><td>Texto deliberadamente com erros ou sem sentido</td><td>Todas</td><td>Anulação total</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo Geral</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✍️</span>
            <h3>Tipo textual</h3>
            <p>Dissertativo-argumentativo em prosa, com tese, argumentos e PI</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>1000 pontos</h3>
            <p>5 competências × 200 pontos cada — avaliadas por dois corretores</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Estrutura</h3>
            <p>Introdução + Dev. 1 + Dev. 2 + Conclusão com PI (4 parágrafos)</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>25–30 linhas</h3>
            <p>Tamanho ideal; mínimo 7 linhas para não ser anulado</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Fuga ao tema</h3>
            <p>Zera C2 e equivale a nota zero geral — o erro mais grave</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Meta: 160 por C</h3>
            <p>Nível 4 em todas as competências = 800 pontos sólidos</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tipo textual da Redação ENEM"
          statement={
            <p>
              A redação do ENEM exige a produção de um texto do tipo:
            </p>
          }
          options={[
            { letter: "a", text: "Narrativo em primeira pessoa, relatando uma experiência pessoal com reflexão final." },
            { letter: "b", text: "Dissertativo-argumentativo, com defesa de ponto de vista e proposta de intervenção.", correct: true },
            { letter: "c", text: "Descritivo, apresentando as características do tema com linguagem objetiva e impessoal." },
            { letter: "d", text: "Epistolar, no formato de carta aberta ao Ministro da Educação." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. O ENEM exige especificamente o texto
              dissertativo-argumentativo, no qual o candidato defende uma tese com argumentos
              e apresenta proposta de intervenção respeitando os direitos humanos. Os tipos
              narrativo, descritivo e epistolar configuram fuga ao tipo textual, zerando a
              Competência 2 e, consequentemente, toda a redação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. O que zera a Competência 5?"
          statement={
            <p>
              Um candidato escreveu uma redação com ótima gramática, argumentos coerentes e
              boa coesão textual, mas finalizou o texto assim: "Portanto, o governo deve
              expulsar todos os imigrantes para reduzir a criminalidade no Brasil."
              Com base nos critérios do ENEM, o que acontece com a nota da Competência 5?
            </p>
          }
          options={[
            { letter: "a", text: "Recebe 160 pontos, pois a proposta é específica e tem agente definido." },
            { letter: "b", text: "Recebe 120 pontos, pois faltam os elementos modo e finalidade na proposta." },
            { letter: "c", text: "Recebe 0 ponto, pois a proposta viola os direitos humanos ao discriminar imigrantes.", correct: true },
            { letter: "d", text: "Recebe 80 pontos, pois a proposta existe mas é vaga e incompleta." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. A Competência 5 zera automaticamente
              quando a proposta de intervenção viola os direitos humanos. Sugerir a expulsão
              de imigrantes é inconstitucional e discriminatório, configurando violação expressa
              dos direitos humanos. O ENEM é explícito: mesmo que a proposta seja estruturalmente
              completa (com ação, agente, modo etc.), se ela ferir a dignidade humana, a nota
              de C5 é 0. Isso pode reduzir a nota total em até 200 pontos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Erro lógico e competência afetada"
          statement={
            <p>
              Uma candidata escreveu a seguinte tese em sua introdução: "A violência urbana
              é causada pela pobreza." No Desenvolvimento 1, argumentou que "a violência
              aumentou nas últimas décadas, mostrando que o governo falhou." No Desenvolvimento 2,
              discutiu a "importância da família na educação dos filhos."
              Qual competência é mais prejudicada pela falta de coerência lógica entre
              tese e argumentos?
            </p>
          }
          options={[
            { letter: "a", text: "Competência 1 — pois os desvios gramaticais comprometem a lógica da argumentação." },
            { letter: "b", text: "Competência 4 — pois a ausência de conectivos prejudica a articulação das ideias." },
            { letter: "c", text: "Competência 3 — pois os argumentos não demonstram coerência com a tese apresentada.", correct: true },
            { letter: "d", text: "Competência 2 — pois o desvio temático é o problema central identificado." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. A Competência 3 avalia a
              "organização e defesa de um ponto de vista". A tese afirma que a violência
              é causada pela pobreza, mas o Dev. 1 fala de falha do governo (sem relacionar
              à pobreza) e o Dev. 2 fala de família (mudança de eixo). Essa incoerência lógica
              entre tese e argumentos compromete diretamente a C3, que avalia se os argumentos
              são pertinentes à tese e se há progressão temática consistente. O texto pode
              receber no máximo 80 pontos em C3 nessa situação.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM 2023 — tipo de introdução mais eficaz"
          statement={
            <p>
              O tema do ENEM 2023 foi <em>"Desafios para o enfrentamento da invisibilidade
              do trabalho de cuidado realizado pela mulher no Brasil"</em>. Considerando
              que os textos motivadores incluíam dados do IBGE sobre tempo médio de trabalho
              doméstico não remunerado (26h/semana para mulheres vs. 11h para homens), qual
              tipo de introdução seria mais eficaz para esse tema e por quê?
            </p>
          }
          options={[
            { letter: "a", text: "Situação hipotética — convidar o leitor a imaginar um dia na vida de uma trabalhadora doméstica não remunerada.", correct: true },
            { letter: "b", text: "Definição conceitual — definir 'trabalho de cuidado' logo de início para orientar o leitor." },
            { letter: "c", text: "Contextualização histórica — retomar a escravidão como origem da desigualdade de gênero no trabalho." },
            { letter: "d", text: "Comparação — contrastar o Brasil com países desenvolvidos que remunerem o cuidado." },
          ]}
          resolution={
            <p>
              Embora todas as alternativas sejam viáveis, a <strong>(a)</strong> é considerada
              mais eficaz porque a situação hipotética humaniza o problema abstrato ("invisibilidade")
              ao colocar o leitor na perspectiva da mulher afetada. Começar com "Imagine uma
              mulher que acorda às 5h, prepara café, cuida dos filhos, dos idosos, limpa a casa
              — e ao final do dia recebe o valor de R$0,00 pelo seu trabalho..." cria impacto
              emocional imediato e justifica a relevância do tema. A definição conceitual (b)
              tende a ser fria; a histórica (c) e a comparação (d) são válidas mas exigem
              mais repertório específico para ser executadas bem.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Texto sem proposta — competências afetadas"
          statement={
            <p>
              Um estudante entregou uma redação com 3 parágrafos: introdução com tese,
              um desenvolvimento com dois argumentos, e uma conclusão que apenas retomava
              a tese sem apresentar nenhuma proposta de intervenção. Quais competências são
              diretamente afetadas e qual seria o impacto estimado na nota total?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas C5 é afetada, com nota 0. As demais competências não são influenciadas por essa ausência." },
            { letter: "b", text: "C5 recebe 0 (ausência de PI) e C3 é prejudicada, pois a conclusão sem proposta não encerra o argumento adequadamente.", correct: true },
            { letter: "c", text: "C3, C4 e C5 recebem 0, pois a ausência de proposta indica fuga ao tipo textual." },
            { letter: "d", text: "Apenas C3 é afetada, pois a estrutura do texto está incompleta sem a proposta." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A ausência de proposta de intervenção
              zera automaticamente a <strong>C5</strong>, representando uma perda de 200 pontos.
              Além disso, a <strong>C3</strong> é prejudicada porque a conclusão sem PI é
              considerada uma conclusão truncada — o ponto de vista não é plenamente encerrado
              sem a proposta de solução, que é parte integral do tipo textual dissertativo-argumentativo
              segundo os critérios do ENEM. A nota de C3 pode cair para 80–120. No total, o
              estudante pode perder entre 280 e 320 pontos apenas por esse erro evitável.
            </p>
          }
        />
      </section>
    </article>
  );
}
