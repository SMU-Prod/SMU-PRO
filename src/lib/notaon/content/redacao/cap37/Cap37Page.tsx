"use client";
// src/content/redacao/cap37/Cap37Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 37</span>

          <h1>Revisão Geral para o ENEM</h1>

          <p>
            Revise os principais pontos da redação ENEM e aprenda estratégias
            finais para alcançar alto desempenho no dia da prova.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revisão geral</span>

        <h2>1. Estrutura da redação ENEM</h2>

        <p>
          A redação dissertativo-argumentativa exige organização lógica,
          argumentação crítica e proposta de intervenção social. Conhecer
          profundamente as 5 competências e a estrutura do texto é o caminho
          mais seguro para obter nota alta na última fase da preparação.
        </p>

        <svg
          viewBox="0 0 700 190"
          className="lesson-svg"
          aria-label="Cronograma sugerido de tempo durante a redação ENEM"
        >
          {/* Linha do tempo base */}
          <line x1="30" y1="100" x2="670" y2="100" stroke="#6366f1" strokeWidth="3" />
          <polygon points="670,94 682,100 670,106" fill="#6366f1" />
          <text x="350" y="25" textAnchor="middle" fill="#3730a3" fontSize="13" fontWeight="bold">Gestão do Tempo — Redação ENEM (~90 min)</text>
          {/* Etapa 1 — Leitura */}
          <line x1="80" y1="100" x2="80" y2="60" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="30" y="38" width="100" height="32" rx="6" fill="#6366f1" />
          <text x="80" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Leitura</text>
          <text x="80" y="67" textAnchor="middle" fill="#e0e7ff" fontSize="9">10 min</text>
          <text x="80" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">0 min</text>
          {/* Etapa 2 — Planejamento */}
          <line x1="200" y1="100" x2="200" y2="60" stroke="#4f46e5" strokeWidth="1.5" />
          <rect x="150" y="38" width="100" height="32" rx="6" fill="#4f46e5" />
          <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Planejamento</text>
          <text x="200" y="67" textAnchor="middle" fill="#e0e7ff" fontSize="9">10 min</text>
          <text x="200" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">10 min</text>
          {/* Etapa 3 — Introdução */}
          <line x1="330" y1="100" x2="330" y2="60" stroke="#7c3aed" strokeWidth="1.5" />
          <rect x="280" y="38" width="100" height="32" rx="6" fill="#7c3aed" />
          <text x="330" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Introdução</text>
          <text x="330" y="67" textAnchor="middle" fill="#e0e7ff" fontSize="9">15 min</text>
          <text x="330" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">20 min</text>
          {/* Etapa 4 — Desenvolvimento */}
          <line x1="480" y1="100" x2="480" y2="60" stroke="#9333ea" strokeWidth="1.5" />
          <rect x="420" y="38" width="120" height="32" rx="6" fill="#9333ea" />
          <text x="480" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Desenvolvimento</text>
          <text x="480" y="67" textAnchor="middle" fill="#e0e7ff" fontSize="9">35 min</text>
          <text x="480" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">35 min</text>
          {/* Etapa 5 — Conclusão */}
          <line x1="590" y1="100" x2="590" y2="140" stroke="#a21caf" strokeWidth="1.5" />
          <rect x="540" y="140" width="100" height="32" rx="6" fill="#a21caf" />
          <text x="590" y="157" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Conclusão</text>
          <text x="590" y="169" textAnchor="middle" fill="#f5d0fe" fontSize="9">15 min</text>
          <text x="590" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">70 min</text>
          {/* Etapa 6 — Revisão */}
          <text x="660" y="120" textAnchor="middle" fill="#3730a3" fontSize="9">85 min</text>
          <text x="660" y="135" textAnchor="middle" fill="#6366f1" fontSize="9">Revisão</text>
        </svg>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>

            <h3>Introdução</h3>

            <p>Contextualização, tema e tese.</p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>

            <h3>Desenvolvimento</h3>

            <p>Argumentos aprofundados e repertórios.</p>
          </div>

          <div className="lesson-card">
            <span>🚀</span>

            <h3>Conclusão</h3>

            <p>Intervenção completa e ética.</p>
          </div>
        </div>

        <div className="math-block">
          <h3>Importante</h3>

          <p>
            Clareza, coerência e progressão lógica são fundamentais em todas as
            partes do texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências</span>

        <h2>2. Revisão das 5 competências</h2>

        <p>
          O ENEM avalia cinco competências fundamentais na produção textual.
          Cada uma vale até 200 pontos, totalizando 1000 pontos na nota máxima.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Competência</th>
              <th>O que avalia</th>
              <th>Critérios</th>
              <th>Nota máxima</th>
              <th>Dica prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C1 — Domínio da escrita</td>
              <td>Norma culta padrão escrita</td>
              <td>Gramática, ortografia, regência, concordância</td>
              <td>200 pts</td>
              <td>Revise pontuação; não use gírias; cuidado com regência verbal</td>
            </tr>
            <tr>
              <td>C2 — Compreensão</td>
              <td>Interpretação do tema</td>
              <td>Não fugir ao tema; tipo textual correto</td>
              <td>200 pts</td>
              <td>Leia todos os textos motivadores antes de começar</td>
            </tr>
            <tr>
              <td>C3 — Argumentação</td>
              <td>Seleção, profundidade e organização dos argumentos</td>
              <td>Repertório produtivo; análise causal</td>
              <td>200 pts</td>
              <td>Use dado concreto + análise + repertório cultural por argumento</td>
            </tr>
            <tr>
              <td>C4 — Coesão</td>
              <td>Articulação textual</td>
              <td>Conectivos, referências, progressão temática</td>
              <td>200 pts</td>
              <td>Varie conectivos; retome o tema a cada parágrafo</td>
            </tr>
            <tr>
              <td>C5 — Intervenção</td>
              <td>Proposta de solução</td>
              <td>Agente, ação, meio, finalidade, detalhamento</td>
              <td>200 pts</td>
              <td>Complete os 5 elementos; respeite sempre os direitos humanos</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-highlight">
          <h3>Competências avaliadas</h3>

          <ul>
            <li>Domínio da norma padrão;</li>
            <li>Compreensão da proposta;</li>
            <li>Seleção e organização de argumentos;</li>
            <li>Coesão textual;</li>
            <li>Proposta de intervenção.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica estratégica</h3>

          <p>
            Uma redação forte busca equilíbrio entre todas as competências.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>

        <h2>3. Estratégias argumentativas</h2>

        <p>
          Bons argumentos são claros, aprofundados e relacionados diretamente ao
          tema proposto.
        </p>

        <div className="lesson-highlight">
          <h3>Estratégias eficientes</h3>

          <ul>
            <li>Explicar causas e consequências;</li>
            <li>Usar repertórios produtivos;</li>
            <li>Evitar superficialidade;</li>
            <li>Relacionar argumentos à tese;</li>
            <li>Manter coerência entre parágrafos.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Atenção</h3>

          <p>
            Frases genéricas enfraquecem a profundidade argumentativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros mais comuns</span>

        <h2>4. Erros que impedem a nota máxima</h2>

        <p>
          Conhecer os erros mais frequentes é tão importante quanto dominar as
          estratégias de escrita. Esta tabela sintetiza os pontos de perda mais
          comuns nas redações do ENEM.
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
              <td>Fuga parcial ao tema</td>
              <td>C2 — Compreensão</td>
              <td>Releia o tema após escrever cada parágrafo para manter o foco</td>
            </tr>
            <tr>
              <td>Argumentos superficiais</td>
              <td>C3 — Argumentação</td>
              <td>Desenvolva cada argumento com dado + análise + repertório</td>
            </tr>
            <tr>
              <td>Repertório decorativo (citação sem conexão)</td>
              <td>C3 — Argumentação</td>
              <td>Explique o conceito e conecte-o ao argumento antes de citar</td>
            </tr>
            <tr>
              <td>Conectivos repetidos ("além disso" 5x)</td>
              <td>C4 — Coesão</td>
              <td>Use variação: "nesse viés", "sob essa perspectiva", "ademais"</td>
            </tr>
            <tr>
              <td>Proposta de intervenção incompleta</td>
              <td>C5 — Intervenção</td>
              <td>Verifique os 5 elementos: agente, ação, meio, finalidade, detalhe</td>
            </tr>
            <tr>
              <td>Erros gramaticais recorrentes</td>
              <td>C1 — Domínio da escrita</td>
              <td>Reserve 10 minutos para revisão de concordância e pontuação</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Repertório</span>

        <h2>5. Revisão dos repertórios socioculturais</h2>

        <p>
          Repertórios fortalecem a argumentação quando ajudam a explicar o
          problema discutido.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>

            <h3>Literatura</h3>

            <p>Obras e autores relacionados ao tema.</p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Filosofia e Sociologia</h3>

            <p>Conceitos sociais e políticos.</p>
          </div>

          <div className="lesson-card">
            <span>🌎</span>

            <h3>Atualidades</h3>

            <p>Debates contemporâneos relevantes.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica prática</h3>

          <p>
            Prefira poucos repertórios bem explicados em vez de várias citações
            superficiais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pentagon das competências</span>

        <h2>6. As 5 Competências em perspectiva visual</h2>

        <svg
          viewBox="0 0 700 280"
          className="lesson-svg"
          aria-label="5 Competências ENEM — visão geral"
        >
          <rect x="0" y="0" width="700" height="280" fill="#f5f3ff" rx="10" />
          <text x="350" y="24" textAnchor="middle" fill="#3730a3" fontSize="13" fontWeight="bold">Redação ENEM — Competências e Pesos</text>
          {/* C1 */}
          <rect x="20" y="40" width="308" height="92" rx="8" fill="#6366f1" />
          <text x="174" y="68" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">C1 — Domínio da Escrita (200 pts)</text>
          <text x="174" y="88" textAnchor="middle" fill="#e0e7ff" fontSize="11">Gramática · Ortografia · Pontuação · Regência</text>
          <text x="174" y="104" textAnchor="middle" fill="#e0e7ff" fontSize="11">Concord. verbal e nominal · Norma culta padrão</text>
          {/* C2 */}
          <rect x="372" y="40" width="308" height="92" rx="8" fill="#4f46e5" />
          <text x="526" y="68" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">C2 — Compreensão (200 pts)</text>
          <text x="526" y="88" textAnchor="middle" fill="#e0e7ff" fontSize="11">Interpretação correta do tema · Tipo textual</text>
          <text x="526" y="104" textAnchor="middle" fill="#e0e7ff" fontSize="11">Não fugir ao tema · Coerência temática</text>
          {/* C3 */}
          <rect x="196" y="148" width="308" height="92" rx="8" fill="#7c3aed" />
          <text x="350" y="176" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">C3 — Argumentação (200 pts)</text>
          <text x="350" y="196" textAnchor="middle" fill="#e0e7ff" fontSize="11">Repertório produtivo · Análise de causas</text>
          <text x="350" y="212" textAnchor="middle" fill="#e0e7ff" fontSize="11">Profundidade e organização dos argumentos</text>
          {/* C4 */}
          <rect x="20" y="148" width="160" height="92" rx="8" fill="#9333ea" />
          <text x="100" y="176" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C4 — Coesão</text>
          <text x="100" y="192" textAnchor="middle" fill="#f5d0fe" fontSize="10">(200 pts)</text>
          <text x="100" y="208" textAnchor="middle" fill="#f5d0fe" fontSize="10">Conectivos</text>
          <text x="100" y="222" textAnchor="middle" fill="#f5d0fe" fontSize="10">Progressão temática</text>
          {/* C5 */}
          <rect x="520" y="148" width="160" height="92" rx="8" fill="#a21caf" />
          <text x="600" y="176" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C5 — Intervenção</text>
          <text x="600" y="192" textAnchor="middle" fill="#f5d0fe" fontSize="10">(200 pts)</text>
          <text x="600" y="208" textAnchor="middle" fill="#f5d0fe" fontSize="10">5 elementos</text>
          <text x="600" y="222" textAnchor="middle" fill="#f5d0fe" fontSize="10">Direitos humanos</text>
          {/* Setas conectando */}
          <text x="350" y="260" textAnchor="middle" fill="#4c1d95" fontSize="11">Total máximo: 5 × 200 = 1000 pontos</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intervenção</span>

        <h2>7. Revisão da Competência 5</h2>

        <p>
          A proposta de intervenção deve apresentar solução viável, ética e
          detalhada.
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
          <h3>Atenção</h3>

          <p>
            A proposta precisa respeitar direitos humanos e dialogar com os
            argumentos do texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Checklist final</span>

        <h2>8. Checklist de revisão pré-entrega</h2>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Dimensão</th>
              <th>Item de verificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5}>Estrutura</td>
              <td>A introdução apresenta contexto + tese + mapeamento</td>
            </tr>
            <tr>
              <td>Há dois parágrafos de desenvolvimento com argumentos distintos</td>
            </tr>
            <tr>
              <td>A conclusão retoma a tese e apresenta proposta completa</td>
            </tr>
            <tr>
              <td>A proposta tem os 5 elementos (agente, ação, meio, finalidade, detalhe)</td>
            </tr>
            <tr>
              <td>Cada parágrafo tem pelo menos 4 linhas</td>
            </tr>
            <tr>
              <td rowSpan={5}>Conteúdo</td>
              <td>Os argumentos têm análise de causa-efeito (não apenas constatação)</td>
            </tr>
            <tr>
              <td>O repertório sociocultural está explicado e conectado ao argumento</td>
            </tr>
            <tr>
              <td>Há pelo menos um dado concreto (estatística, lei, pesquisa)</td>
            </tr>
            <tr>
              <td>A proposta respeita os direitos humanos</td>
            </tr>
            <tr>
              <td>O texto está dentro do tema proposto</td>
            </tr>
            <tr>
              <td rowSpan={5}>Forma</td>
              <td>Os conectivos são variados e adequados ao tipo de relação</td>
            </tr>
            <tr>
              <td>Não há erros de concordância verbal ou nominal</td>
            </tr>
            <tr>
              <td>A ortografia está correta em palavras complexas</td>
            </tr>
            <tr>
              <td>A pontuação está correta (vírgulas, ponto final, dois-pontos)</td>
            </tr>
            <tr>
              <td>O texto está na norma culta (sem gírias ou coloquialismos)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tempo de prova</span>

        <h2>9. Gestão de tempo e controle emocional</h2>

        <p>
          Organização do tempo é fundamental para desenvolver uma redação com
          calma e qualidade.
        </p>

        <div className="lesson-highlight">
          <h3>Sugestão estratégica</h3>

          <ul>
            <li>Interpretar o tema com atenção;</li>
            <li>Fazer breve planejamento;</li>
            <li>Escrever primeiro rascunho;</li>
            <li>Revisar gramática e coesão;</li>
            <li>Passar texto a limpo com cuidado.</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧘</span>

            <h3>Calma</h3>

            <p>Respiração e organização mental.</p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>

            <h3>Foco</h3>

            <p>Concentração no tema e argumentos.</p>
          </div>

          <div className="lesson-card">
            <span>💪</span>

            <h3>Confiança</h3>

            <p>Valorizar preparação construída.</p>
          </div>
        </div>

        <div className="math-block">
          <h3>Dica final</h3>

          <p>
            Planejamento reduz ansiedade e melhora a organização das ideias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Encerramento</span>

        <h2>10. Últimas orientações</h2>

        <p>
          A evolução na redação acontece por prática, leitura crítica e treino
          constante de argumentação.
        </p>

        <div className="lesson-highlight">
          <h3>Lembre-se</h3>

          <ul>
            <li>Leia propostas anteriores do ENEM;</li>
            <li>Treine redações frequentemente;</li>
            <li>Revise conectivos e repertórios;</li>
            <li>Planeje antes de escrever;</li>
            <li>Confie na preparação construída.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Mensagem final</h3>

          <p>
            Redação forte não depende de decorar textos prontos, mas de dominar
            análise crítica e estrutura argumentativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Estrutura da redação"
          statement={<p>A redação ENEM normalmente possui:</p>}
          options={[
            { letter: "a", text: "somente conclusão" },
            {
              letter: "b",
              text: "introdução, desenvolvimento e conclusão",
              correct: true,
            },
            { letter: "c", text: "apenas repertórios" },
            { letter: "d", text: "estrutura livre sem organização" },
          ]}
          resolution={
            <p>
              A estrutura clássica ajuda na organização lógica do texto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Competência 5"
          statement={<p>A Competência 5 avalia principalmente:</p>}
          options={[
            { letter: "a", text: "quantidade de repertórios" },
            {
              letter: "b",
              text: "proposta de intervenção",
              correct: true,
            },
            { letter: "c", text: "uso de figuras de linguagem" },
            { letter: "d", text: "métrica textual" },
          ]}
          resolution={
            <p>
              A Competência 5 está ligada à elaboração de soluções para o
              problema discutido.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Estratégia final"
          statement={<p>Uma boa estratégia para o dia da prova é:</p>}
          options={[
            { letter: "a", text: "escrever sem planejamento" },
            {
              letter: "b",
              text: "planejar, revisar e organizar o tempo",
              correct: true,
            },
            { letter: "c", text: "decorar textos prontos" },
            { letter: "d", text: "ignorar revisão gramatical" },
          ]}
          resolution={
            <p>
              Planejamento e revisão aumentam clareza, organização e segurança
              textual.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Análise integrada das competências"
          statement={
            <p>
              Um candidato escreveu uma redação que apresentava: ótimo domínio
              gramatical, boa interpretação do tema e argumentação aprofundada
              com repertório produtivo. Porém, na conclusão, escreveu: "Portanto,
              o governo precisa tomar providências." Qual foi sua principal perda
              de pontuação?
            </p>
          }
          options={[
            { letter: "a", text: "C1, pois houve erro de concordância nominal" },
            { letter: "b", text: "C2, pois a introdução foi superficial" },
            { letter: "c", text: "C5, pois a proposta de intervenção é genérica e não apresenta os 5 elementos exigidos", correct: true },
            { letter: "d", text: "C4, pois o conectivo 'portanto' foi usado incorretamente" },
            { letter: "e", text: "C3, pois a argumentação contradiz a tese" },
          ]}
          resolution={
            <p>
              A frase "o governo precisa tomar providências" não contém os cinco
              elementos da C5: falta especificar qual ação, qual mecanismo, para
              qual finalidade e como será detalhada. A perda na C5 pode reduzir
              em até 100–160 pontos a nota final, mesmo que o restante da redação
              seja excelente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Estratégia de repertório"
          statement={
            <p>
              Durante a preparação, uma candidata montou um repertório filosófico
              amplo: leu sobre Hobbes, Locke, Rousseau, Hegel e Marx. No dia da
              prova, com o tema sobre desigualdade de gênero, ela sentiu dificuldade
              de usar esses repertórios. Qual foi seu provável erro estratégico?
            </p>
          }
          options={[
            { letter: "a", text: "Estudar filosofia, pois o ENEM não valoriza esse tipo de repertório" },
            { letter: "b", text: "Não ter organizado os repertórios por eixo temático, dificultando a conexão com o tema proposto", correct: true },
            { letter: "c", text: "Ter estudado mais de três filósofos, o que gerou confusão na hora de escolher" },
            { letter: "d", text: "Não ter memorizado citações literais para inserir no texto" },
            { letter: "e", text: "Ter focado apenas em autores europeus, incompatíveis com temas brasileiros" },
          ]}
          resolution={
            <p>
              O erro estratégico foi não organizar os repertórios por temas. Ao
              estudar filósofos sem vinculá-los a eixos temáticos (gênero,
              desigualdade, tecnologia, etc.), fica difícil mobilizá-los sob
              pressão. A estratégia correta é mapear: "Rousseau → contrato social
              → pode ser usado em temas de desigualdade, cidadania, democracia".
              Simone de Beauvoir ou Bell Hooks seria mais direto para gênero.
            </p>
          }
        />
      </section>
    </article>
  );
}
