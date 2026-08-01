"use client";
// src/content/redacao/cap33/Cap33Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 33</span>

          <h1>Como Fazer uma Redação Nota 1000</h1>

          <p>
            Aprenda as estratégias mais importantes para construir uma redação
            organizada, crítica e compatível com o nível das notas máximas do
            ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>

        <h2>1. O que caracteriza uma redação nota 1000?</h2>

        <p>
          Uma redação nota 1000 apresenta domínio da escrita formal,
          argumentação consistente, repertório produtivo e proposta de
          intervenção completa. Cada uma das cinco competências avaliadas
          pelo ENEM precisa atingir a pontuação máxima de 200 pontos,
          resultando no total de 1000 pontos.
        </p>

        <svg
          viewBox="0 0 700 300"
          className="lesson-svg"
          aria-label="As 5 Competências ENEM distribuídas em pentagon"
        >
          {/* Fundo */}
          <rect x="0" y="0" width="700" height="300" fill="#f5f3ff" rx="12" />
          {/* Título */}
          <text x="350" y="28" textAnchor="middle" fill="#3730a3" fontSize="14" fontWeight="bold">5 Competências da Redação ENEM — 200 pts cada</text>
          {/* Pentagon pontos aprox: top, lower-right, bottom-right, bottom-left, lower-left */}
          {/* C1 top */}
          <ellipse cx="350" cy="70" rx="72" ry="32" fill="#6366f1" />
          <text x="350" y="63" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C1 — Domínio da Escrita</text>
          <text x="350" y="78" textAnchor="middle" fill="#e0e7ff" fontSize="10">gramática e norma culta</text>
          {/* C2 right */}
          <ellipse cx="565" cy="150" rx="72" ry="32" fill="#4f46e5" />
          <text x="565" y="143" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C2 — Compreensão</text>
          <text x="565" y="158" textAnchor="middle" fill="#e0e7ff" fontSize="10">interpretação do tema</text>
          {/* C3 lower-right */}
          <ellipse cx="488" cy="248" rx="72" ry="32" fill="#7c3aed" />
          <text x="488" y="241" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C3 — Argumentação</text>
          <text x="488" y="256" textAnchor="middle" fill="#e0e7ff" fontSize="10">seleção de argumentos</text>
          {/* C4 lower-left */}
          <ellipse cx="212" cy="248" rx="72" ry="32" fill="#a21caf" />
          <text x="212" y="241" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C4 — Coesão</text>
          <text x="212" y="256" textAnchor="middle" fill="#e0e7ff" fontSize="10">conectivos e referências</text>
          {/* C5 left */}
          <ellipse cx="135" cy="150" rx="72" ry="32" fill="#9333ea" />
          <text x="135" y="143" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C5 — Intervenção</text>
          <text x="135" y="158" textAnchor="middle" fill="#e0e7ff" fontSize="10">proposta detalhada</text>
          {/* Linhas do pentagon */}
          <line x1="350" y1="102" x2="493" y2="118" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
          <line x1="493" y1="118" x2="549" y2="216" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
          <line x1="549" y1="216" x2="416" y2="216" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
          <line x1="416" y1="216" x2="151" y2="216" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
          <line x1="151" y1="216" x2="207" y2="118" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
          <line x1="207" y1="118" x2="350" y2="102" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,3" />
        </svg>

        <div className="lesson-highlight">
          <h3>Características principais</h3>

          <ul>
            <li>Boa interpretação do tema;</li>
            <li>Argumentação aprofundada;</li>
            <li>Coesão eficiente;</li>
            <li>Repertório sociocultural produtivo;</li>
            <li>Proposta de intervenção detalhada.</li>
          </ul>
        </div>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Competência</th>
              <th>O que avalia</th>
              <th>Critérios principais</th>
              <th>Nota máxima</th>
              <th>Dica prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C1 — Domínio da escrita</td>
              <td>Gramática, ortografia, regência, concordância</td>
              <td>Respeito às normas da língua culta padrão</td>
              <td>200 pts</td>
              <td>Revise pontuação e não use gírias</td>
            </tr>
            <tr>
              <td>C2 — Compreensão</td>
              <td>Interpretação do tema e do tipo textual</td>
              <td>Não fugir ao tema; desenvolver dissertação-argumentativa</td>
              <td>200 pts</td>
              <td>Leia todos os textos motivadores antes de escrever</td>
            </tr>
            <tr>
              <td>C3 — Argumentação</td>
              <td>Seleção, organização e profundidade dos argumentos</td>
              <td>Repertório produtivo; análise de causas e consequências</td>
              <td>200 pts</td>
              <td>Use dado concreto + análise + repertório cultural</td>
            </tr>
            <tr>
              <td>C4 — Coesão</td>
              <td>Articulação entre partes do texto</td>
              <td>Conectivos, referências, progressão temática</td>
              <td>200 pts</td>
              <td>Varie os conectivos; revise a retomada de ideias</td>
            </tr>
            <tr>
              <td>C5 — Intervenção</td>
              <td>Proposta de solução para o problema</td>
              <td>5 elementos: agente, ação, meio, finalidade, detalhamento</td>
              <td>200 pts</td>
              <td>Complete todos os 5 elementos; respeite direitos humanos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>

        <h2>2. Estrutura eficiente da redação nota 1000</h2>

        <p>
          A organização estrutural facilita clareza, argumentação e progressão
          lógica das ideias. A redação nota 1000 divide-se em quatro partes
          claramente delimitadas, cada uma com função específica na construção
          do argumento dissertativo.
        </p>

        <svg
          viewBox="0 0 700 230"
          className="lesson-svg"
          aria-label="Estrutura da redação nota 1000 — 4 blocos empilhados"
        >
          {/* Bloco Introdução */}
          <rect x="80" y="10" width="540" height="48" rx="8" fill="#6366f1" />
          <text x="200" y="30" fill="white" fontSize="13" fontWeight="bold">Introdução</text>
          <text x="200" y="48" fill="#e0e7ff" fontSize="11">Contexto histórico/social + Tese clara + Mapeamento dos argumentos</text>
          {/* Seta 1→2 */}
          <line x1="350" y1="58" x2="350" y2="72" stroke="#6366f1" strokeWidth="2" />
          <polygon points="344,72 356,72 350,82" fill="#6366f1" />
          {/* Bloco Dev 1 */}
          <rect x="80" y="82" width="540" height="48" rx="8" fill="#4f46e5" />
          <text x="200" y="102" fill="white" fontSize="13" fontWeight="bold">Desenvolvimento 1</text>
          <text x="200" y="120" fill="#e0e7ff" fontSize="11">Argumento principal + Dado concreto + Repertório sociocultural + Análise</text>
          {/* Seta 2→3 */}
          <line x1="350" y1="130" x2="350" y2="144" stroke="#6366f1" strokeWidth="2" />
          <polygon points="344,144 356,144 350,154" fill="#6366f1" />
          {/* Bloco Dev 2 */}
          <rect x="80" y="154" width="540" height="48" rx="8" fill="#7c3aed" />
          <text x="200" y="174" fill="white" fontSize="13" fontWeight="bold">Desenvolvimento 2</text>
          <text x="200" y="192" fill="#e0e7ff" fontSize="11">Argumento secundário + Aprofundamento de causa-efeito + Análise crítica</text>
          {/* Seta 3→4 */}
          <line x1="350" y1="202" x2="350" y2="215" stroke="#6366f1" strokeWidth="2" />
          <polygon points="344,215 356,215 350,225" fill="#6366f1" />
          {/* Rótulo da estrutura */}
          <text x="40" y="38" fill="#3730a3" fontSize="11" fontWeight="bold">Intro</text>
          <text x="40" y="114" fill="#3730a3" fontSize="11" fontWeight="bold">Dev1</text>
          <text x="40" y="186" fill="#3730a3" fontSize="11" fontWeight="bold">Dev2</text>
        </svg>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>

            <h3>Introdução</h3>

            <p>Apresenta tema, tese e contextualização.</p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>

            <h3>Desenvolvimento</h3>

            <p>Defende argumentos com aprofundamento.</p>
          </div>

          <div className="lesson-card">
            <span>🚀</span>

            <h3>Conclusão</h3>

            <p>Propõe solução detalhada e ética.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica estratégica</h3>

          <p>
            Estruturas simples e organizadas funcionam melhor do que textos
            excessivamente complexos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tese</span>

        <h2>3. A importância da tese</h2>

        <p>
          A tese orienta toda a argumentação da redação e precisa estar clara já
          na introdução.
        </p>

        <div className="lesson-highlight">
          <h3>Boa tese</h3>

          <ul>
            <li>Relacionada diretamente ao tema;</li>
            <li>Objetiva;</li>
            <li>Crítica;</li>
            <li>Defensável por argumentos;</li>
            <li>Coerente com a conclusão.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Importante</h3>

          <p>
            Toda argumentação precisa reforçar a tese apresentada inicialmente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>

        <h2>4. Como aprofundar argumentos</h2>

        <p>
          Redações nota 1000 apresentam argumentos desenvolvidos e bem
          explicados.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔎</span>

            <h3>Análise</h3>

            <p>Explicar causas e consequências.</p>
          </div>

          <div className="lesson-card">
            <span>📚</span>

            <h3>Repertório</h3>

            <p>Usar referências produtivas.</p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Coerência</h3>

            <p>Manter lógica argumentativa.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Evite superficialidade</h3>

          <p>
            Frases genéricas e pouco desenvolvidas enfraquecem a Competência 3.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Repertório</span>

        <h2>5. Uso inteligente do repertório</h2>

        <p>
          O repertório sociocultural deve contribuir diretamente para a defesa
          da tese.
        </p>

        <div className="lesson-highlight">
          <h3>Fontes produtivas</h3>

          <ul>
            <li>Filosofia;</li>
            <li>Sociologia;</li>
            <li>Atualidades;</li>
            <li>Literatura;</li>
            <li>Filmes e documentários.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Atenção</h3>

          <p>
            O repertório deve ser explicado e relacionado ao tema, não apenas
            citado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coesão</span>

        <h2>6. Coesão e fluidez textual</h2>

        <p>
          Conectivos e progressão lógica tornam o texto mais organizado e fácil
          de compreender.
        </p>

        <div className="lesson-highlight">
          <h3>Conectivos importantes</h3>

          <ul>
            <li>Além disso;</li>
            <li>Portanto;</li>
            <li>Entretanto;</li>
            <li>Desse modo;</li>
            <li>Consequentemente.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica prática</h3>

          <p>
            A coesão deve criar continuidade entre frases, períodos e parágrafos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intervenção</span>

        <h2>7. Proposta de intervenção completa</h2>

        <p>
          A conclusão precisa apresentar solução viável, ética e detalhada para
          o problema discutido.
        </p>

        <div className="lesson-highlight">
          <h3>Elementos essenciais</h3>

          <ul>
            <li>Agente;</li>
            <li>Ação;</li>
            <li>Meio;</li>
            <li>Finalidade;</li>
            <li>Detalhamento.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Competência 5</h3>

          <p>
            Quanto mais completa e coerente a proposta, maior a chance de nota
            máxima.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>

        <h2>8. Principais erros que impedem nota 1000</h2>

        <p>
          Pequenos problemas estruturais ou argumentativos podem reduzir a nota
          final consideravelmente.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Erro comum</th>
              <th>Competência prejudicada</th>
              <th>Como evitar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fuga ao tema</td>
              <td>C2 — Compreensão</td>
              <td>Leia o tema com atenção e identifique a palavra-chave central</td>
            </tr>
            <tr>
              <td>Argumentos superficiais</td>
              <td>C3 — Argumentação</td>
              <td>Use dados, repertório e análise de causas e efeitos</td>
            </tr>
            <tr>
              <td>Repertório decorativo</td>
              <td>C3 — Argumentação</td>
              <td>Relacione a referência ao argumento e explique sua pertinência</td>
            </tr>
            <tr>
              <td>Conectivos repetidos</td>
              <td>C4 — Coesão</td>
              <td>Varie os conectivos e estude progressão temática</td>
            </tr>
            <tr>
              <td>Intervenção incompleta</td>
              <td>C5 — Intervenção</td>
              <td>Inclua os 5 elementos: agente, ação, meio, finalidade, detalhe</td>
            </tr>
            <tr>
              <td>Erros gramaticais recorrentes</td>
              <td>C1 — Domínio da escrita</td>
              <td>Revise concordância verbal e nominal; pontuação de orações</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-highlight">
          <h3>Evite:</h3>

          <ul>
            <li>Fuga ao tema;</li>
            <li>Argumentos superficiais;</li>
            <li>Repertório decorativo;</li>
            <li>Problemas gramaticais;</li>
            <li>Intervenção incompleta.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica estratégica</h3>

          <p>
            Clareza, coerência e profundidade costumam valer mais que excesso de
            complexidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Checklist</span>

        <h2>9. Checklist de revisão pré-entrega</h2>

        <p>
          Antes de entregar a redação, faça uma revisão sistemática seguindo este
          checklist para garantir que todas as competências foram atendidas.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Dimensão</th>
              <th>Item de verificação</th>
              <th>OK?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5}>Estrutura</td>
              <td>A introdução apresenta contextualização + tese</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>Há dois parágrafos de desenvolvimento distintos</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>A conclusão retoma a tese</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>A proposta de intervenção tem 5 elementos</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>Cada parágrafo tem pelo menos 4 linhas</td>
              <td>☐</td>
            </tr>
            <tr>
              <td rowSpan={5}>Conteúdo</td>
              <td>Os argumentos são desenvolvidos com análise de causa-efeito</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>O repertório sociocultural está explicado e ligado ao tema</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>Há dado concreto (estatística, lei, pesquisa) em ao menos 1 dev.</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>A proposta respeita os direitos humanos</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>O texto não foge ao tema proposto</td>
              <td>☐</td>
            </tr>
            <tr>
              <td rowSpan={5}>Forma</td>
              <td>Os conectivos são variados e adequados</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>Não há erros de concordância verbal ou nominal</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>Não há erros de ortografia (ç, ss, x, etc.)</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>A pontuação está correta (vírgulas, ponto final, dois-pontos)</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>O texto está na norma culta (sem gírias ou coloquialismos)</td>
              <td>☐</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>10. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>Redações nota 1000 equilibram todas as competências;</li>
            <li>A estrutura precisa ser organizada;</li>
            <li>A tese orienta toda a argumentação;</li>
            <li>Repertório precisa ser produtivo;</li>
            <li>A proposta de intervenção deve ser completa;</li>
            <li>Clareza e profundidade são fundamentais.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Estrutura"
          statement={<p>Uma redação nota 1000 normalmente possui:</p>}
          options={[
            { letter: "a", text: "estrutura desorganizada" },
            {
              letter: "b",
              text: "introdução, desenvolvimento e conclusão",
              correct: true,
            },
            { letter: "c", text: "somente desenvolvimento" },
            { letter: "d", text: "ausência de tese" },
          ]}
          resolution={
            <p>
              A estrutura clássica facilita clareza e progressão argumentativa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Repertório produtivo"
          statement={<p>Um repertório produtivo é aquele que:</p>}
          options={[
            { letter: "a", text: "aparece sem explicação" },
            {
              letter: "b",
              text: "fortalece o argumento e a tese",
              correct: true,
            },
            { letter: "c", text: "substitui a conclusão" },
            { letter: "d", text: "não possui relação com o tema" },
          ]}
          resolution={
            <p>
              O repertório deve contribuir diretamente para a argumentação do
              texto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Competência 5"
          statement={<p>Uma proposta de intervenção completa precisa ter:</p>}
          options={[
            { letter: "a", text: "somente agente e ação" },
            {
              letter: "b",
              text: "agente, ação, meio, finalidade e detalhamento",
              correct: true,
            },
            { letter: "c", text: "apenas conclusão curta" },
            { letter: "d", text: "frases genéricas" },
          ]}
          resolution={
            <p>
              A Competência 5 valoriza propostas detalhadas, viáveis e éticas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Análise de redação real"
          statement={
            <p>
              Uma candidata recebeu 800 pontos na redação: 200 em C1, C2 e C4,
              mas 100 em C3 e 100 em C5. Com base nas competências do ENEM, qual
              é o diagnóstico mais preciso?
            </p>
          }
          options={[
            { letter: "a", text: "A candidata domina a escrita, mas foge ao tema proposto" },
            { letter: "b", text: "A candidata argumenta com profundidade, mas tem erros gramaticais" },
            { letter: "c", text: "A candidata tem bom domínio formal, mas a argumentação é superficial e a proposta de intervenção é incompleta", correct: true },
            { letter: "d", text: "A candidata demonstra coesão deficiente e compreensão parcial do tema" },
            { letter: "e", text: "A candidata apresentou redação perfeita em todas as dimensões avaliadas" },
          ]}
          resolution={
            <p>
              C3 (argumentação) e C5 (intervenção) são as competências mais
              difíceis de atingir 200 pontos. Quando uma candidata tira 100 nas
              duas, indica argumentos rasos ou genéricos (C3) e proposta de
              intervenção incompleta — faltando elementos como meio, finalidade
              ou detalhamento (C5).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Planejamento estratégico"
          statement={
            <p>
              Considerando os critérios do ENEM para a redação nota 1000, assinale
              a sequência de ações mais eficaz durante a prova:
            </p>
          }
          options={[
            { letter: "a", text: "Escrever imediatamente sem planejar para ganhar tempo" },
            { letter: "b", text: "Ler apenas o tema e ignorar os textos motivadores para economizar tempo" },
            { letter: "c", text: "Ler os textos motivadores, identificar tese, planejar argumentos e proposta antes de escrever", correct: true },
            { letter: "d", text: "Começar pela conclusão para garantir a proposta de intervenção" },
            { letter: "e", text: "Escrever apenas um parágrafo de desenvolvimento para ter mais tempo de revisão" },
          ]}
          resolution={
            <p>
              O planejamento prévio (10 minutos) é fundamental para garantir que
              todos os elementos das 5 competências sejam contemplados. Ler os
              textos motivadores evita fuga ao tema (C2) e oferece dados e
              argumentos (C3). Planejar antes de escrever melhora a coesão (C4)
              e a qualidade da intervenção (C5).
            </p>
          }
        />
      </section>
    </article>
  );
}
