"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 35</span>
          <h1>Revisão Geral: Estratégias Finais e Simulado Comentado</h1>
          <p>
            Você chegou ao último capítulo do curso de inglês para o ENEM. Este é
            o momento de consolidar tudo que foi estudado, identificar lacunas,
            afinar a estratégia e entrar na prova com confiança. Inglês no ENEM
            não é sobre fluência — é sobre <strong>método</strong>. E você tem o
            método.
          </p>
          <p>
            Neste capítulo você vai percorrer um checklist completo de competências,
            fazer sua autoavaliação, planejar a revisão final, gerenciar o tempo na
            prova e executar um simulado comentado com 5 questões no padrão ENEM.
            Quando terminar, estará pronto.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão geral do curso</span>
        <h2>1. Mapa do Curso: 8 Módulos, 35 Capítulos, 1 Objetivo</h2>
        <p>
          Antes de revisar, veja onde você esteve. O curso foi construído em
          progressão deliberada: das estratégias gerais ao domínio dos gêneros
          textuais, passando por gramática funcional e temas contemporâneos.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 320"
            aria-label="Mapa visual do curso de inglês para o ENEM mostrando os 8 módulos e sua progressão"
            role="img"
          >
            {/* Título */}
            <text x="350" y="22" textAnchor="middle" fill="#1e1b4b" fontSize="14" fontWeight="bold">
              Jornada do Curso — Inglês para o ENEM
            </text>

            {/* Módulo 1 */}
            <rect x="20" y="40" width="140" height="52" rx="8" fill="#4f46e5" />
            <text x="90" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 1</text>
            <text x="90" y="78" textAnchor="middle" fill="#c7d2fe" fontSize="10">Introdução ao</text>
            <text x="90" y="90" textAnchor="middle" fill="#c7d2fe" fontSize="10">ENEM (caps 1–5)</text>

            {/* Seta */}
            <line x1="160" y1="66" x2="178" y2="66" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 2 */}
            <rect x="178" y="40" width="140" height="52" rx="8" fill="#6366f1" />
            <text x="248" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 2</text>
            <text x="248" y="78" textAnchor="middle" fill="#c7d2fe" fontSize="10">Gramática essencial</text>
            <text x="248" y="90" textAnchor="middle" fill="#c7d2fe" fontSize="10">(caps 6–10)</text>

            {/* Seta */}
            <line x1="318" y1="66" x2="336" y2="66" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 3 */}
            <rect x="336" y="40" width="140" height="52" rx="8" fill="#818cf8" />
            <text x="406" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 3</text>
            <text x="406" y="78" textAnchor="middle" fill="#e0e7ff" fontSize="10">Tempos verbais</text>
            <text x="406" y="90" textAnchor="middle" fill="#e0e7ff" fontSize="10">(caps 11–15)</text>

            {/* Seta */}
            <line x1="476" y1="66" x2="494" y2="66" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 4 */}
            <rect x="494" y="40" width="140" height="52" rx="8" fill="#059669" />
            <text x="564" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 4</text>
            <text x="564" y="78" textAnchor="middle" fill="#d1fae5" fontSize="10">Estruturas gramaticais</text>
            <text x="564" y="90" textAnchor="middle" fill="#d1fae5" fontSize="10">(caps 16–20)</text>

            {/* Segunda linha */}
            {/* Módulo 5 */}
            <rect x="20" y="145" width="140" height="52" rx="8" fill="#0891b2" />
            <text x="90" y="167" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 5</text>
            <text x="90" y="183" textAnchor="middle" fill="#cffafe" fontSize="10">Leitura e interpretação</text>
            <text x="90" y="195" textAnchor="middle" fill="#cffafe" fontSize="10">(caps 21–25)</text>

            {/* Seta */}
            <line x1="160" y1="171" x2="178" y2="171" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 6 */}
            <rect x="178" y="145" width="140" height="52" rx="8" fill="#d97706" />
            <text x="248" y="167" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 6</text>
            <text x="248" y="183" textAnchor="middle" fill="#fef3c7" fontSize="10">Gêneros textuais</text>
            <text x="248" y="195" textAnchor="middle" fill="#fef3c7" fontSize="10">(caps 26–30)</text>

            {/* Seta */}
            <line x1="318" y1="171" x2="336" y2="171" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 7 */}
            <rect x="336" y="145" width="140" height="52" rx="8" fill="#dc2626" />
            <text x="406" y="167" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 7</text>
            <text x="406" y="183" textAnchor="middle" fill="#fee2e2" fontSize="10">Temas contemporâneos</text>
            <text x="406" y="195" textAnchor="middle" fill="#fee2e2" fontSize="10">(caps 31–33)</text>

            {/* Seta */}
            <line x1="476" y1="171" x2="494" y2="171" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowMap)" />

            {/* Módulo 8 */}
            <rect x="494" y="145" width="140" height="52" rx="8" fill="#7c3aed" />
            <text x="564" y="167" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MÓDULO 8</text>
            <text x="564" y="183" textAnchor="middle" fill="#ede9fe" fontSize="10">Revisão ENEM</text>
            <text x="564" y="195" textAnchor="middle" fill="#ede9fe" fontSize="10">(caps 34–35)</text>

            {/* Resultado */}
            <rect x="240" y="245" width="220" height="50" rx="25" fill="#1e1b4b" />
            <text x="350" y="265" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">🎯 ENEM — Inglês</text>
            <text x="350" y="283" textAnchor="middle" fill="#a5b4fc" fontSize="11">Você está preparado.</text>

            {/* Setas para resultado */}
            <line x1="90" y1="197" x2="240" y2="255" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="564" y1="197" x2="460" y2="255" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3" />

            <defs>
              <marker id="arrowMap" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#9ca3af" />
              </marker>
            </defs>
          </svg>
          <figcaption>Os 8 módulos do curso de inglês para o ENEM, organizados em progressão de estratégias gerais a domínio específico de gêneros e temas.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Checklist de competências</span>
        <h2>2. O que Você Deve Dominar antes do ENEM</h2>
        <p>
          Revise mentalmente cada item abaixo. Este checklist cobre as competências
          essenciais do curso e da matriz de referência do ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>Capítulos relacionados</th>
                <th>Por que é essencial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificar o gênero textual pelo suporte</td>
                <td>1, 24, 25, 26–30</td>
                <td>Define a estratégia de leitura antes de ler uma palavra</td>
              </tr>
              <tr>
                <td>Fazer skimming (leitura global)</td>
                <td>2, 21</td>
                <td>Captar o tema geral sem perder tempo com palavras difíceis</td>
              </tr>
              <tr>
                <td>Fazer scanning (localizar info)</td>
                <td>2, 21</td>
                <td>Encontrar a informação pedida pelo enunciado com precisão</td>
              </tr>
              <tr>
                <td>Inferir vocabulário pelo contexto (H27)</td>
                <td>3, 4, 34</td>
                <td>Habilidade mais cobrada; permite resolver questões sem dicionário</td>
              </tr>
              <tr>
                <td>Usar cognatos e prefixos/sufixos</td>
                <td>3, 5</td>
                <td>Ampliar o vocabulário passivo com o inglês que você já conhece</td>
              </tr>
              <tr>
                <td>Reconhecer tempos verbais por marcadores</td>
                <td>8–12</td>
                <td>Entender se o texto fala de passado, presente ou futuro</td>
              </tr>
              <tr>
                <td>Identificar conectores e relações lógicas</td>
                <td>16</td>
                <td>However, therefore, although — revelam a lógica argumentativa</td>
              </tr>
              <tr>
                <td>Reconhecer voz passiva</td>
                <td>14</td>
                <td>Muito usada em textos científicos e jornalísticos</td>
              </tr>
              <tr>
                <td>Interpretar elementos visuais integrados</td>
                <td>24, 25</td>
                <td>Tirinhas, gráficos e infográficos são frequentes no ENEM</td>
              </tr>
              <tr>
                <td>Identificar a intenção comunicativa</td>
                <td>26, 27, 28, 29, 30</td>
                <td>Questões H26 pedem o objetivo do texto — persuadir, informar, narrar</td>
              </tr>
              <tr>
                <td>Reconhecer o posicionamento do autor</td>
                <td>22, 23, 34</td>
                <td>H30 avalia se você percebe o tom e a visão do autor</td>
              </tr>
              <tr>
                <td>Gerenciar o tempo na prova</td>
                <td>1, 35</td>
                <td>5 questões em ~15 minutos é o alvo ideal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Autoavaliação</span>
        <h2>3. Tabela de Autoavaliação</h2>
        <p>
          Use a tabela abaixo para marcar mentalmente (ou em papel) seu nível
          em cada habilidade antes da prova. Isso orienta onde concentrar a
          revisão nos últimos dias:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Habilidade</th>
                <th>✅ Domino bem</th>
                <th>⚠️ Em desenvolvimento</th>
                <th>❌ Preciso revisar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inferência de vocabulário (H27)</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Identificar tema central (H25)</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Objetivo comunicativo (H26)</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Posicionamento do autor (H30)</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Reconhecer gênero textual</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Interpretar tirinhas/multimodal</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Skimming e scanning</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Conectores e relações lógicas</td>
                <td></td><td></td><td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Como usar:</strong> Os itens na coluna "❌ Preciso revisar"
          são sua prioridade de estudo nos próximos dias. Foque neles. Os itens
          na coluna "✅ Domino bem" precisam apenas de manutenção — um exemplo
          por dia é suficiente.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Plano final</span>
        <h2>4. Plano de Revisão: Última Semana antes do ENEM</h2>
        <p>
          Com sete dias antes da prova, este é o cronograma ideal para inglês:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia 1–2</h3>
            <p>Revise gêneros textuais (caps 26–30). Pratique com 2 textos autênticos por dia: identifique gênero e objetivo antes de ler.</p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia 3–4</h3>
            <p>Foque em H27: pratique inferência de vocabulário. Leia trechos curtos e tente deduzir 3 palavras desconhecidas por contexto.</p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia 5</h3>
            <p>Revise conectores e marcadores textuais (cap 16). Faça exercícios de identifcar relações lógicas (contraste, causa, adição).</p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia 6</h3>
            <p>Simulado completo com 5 questões cronometradas (máx. 15 minutos). Analise os erros com calma, sem decorar respostas.</p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia 7 (véspera)</h3>
            <p>Descanse. Releia apenas o checklist de abordagem (cap 34). Nada de conteúdo novo. Sono e hidratação valem mais do que uma revisão de última hora.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Regra dos últimos dias:</strong> Não comece a estudar um tópico
          novo a menos de 72 horas da prova. Conteúdo mal fixado cria mais
          confusão do que ausência de conteúdo.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gestão de tempo</span>
        <h2>5. Gerenciamento de Tempo na Prova</h2>
        <p>
          Inglês faz parte da prova de Linguagens, Códigos e suas Tecnologias,
          que tem 45 questões no total. As 5 questões de língua estrangeira
          devem ser resolvidas estrategicamente dentro do tempo total.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Momento</th>
                <th>Ação</th>
                <th>Tempo ideal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Início da prova</td>
                <td>Escolha o idioma (inglês ou espanhol) — decida na hora, não improvise</td>
                <td>30 segundos</td>
              </tr>
              <tr>
                <td>Por questão</td>
                <td>Leia enunciado → gênero → skimming → scanning → responda</td>
                <td>2 a 3 minutos</td>
              </tr>
              <tr>
                <td>5 questões no total</td>
                <td>Complete todas as questões de inglês</td>
                <td>10 a 15 minutos</td>
              </tr>
              <tr>
                <td>Se travar numa questão</td>
                <td>Marque a melhor opção disponível e siga — volte se sobrar tempo</td>
                <td>Máx. 4 minutos</td>
              </tr>
              <tr>
                <td>Revisão final</td>
                <td>Verifique se não deixou questão em branco</td>
                <td>2 minutos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Estratégia de ordem:</strong> Você pode resolver as questões
          de inglês em qualquer momento da prova. Muitos candidatos preferem
          resolver língua estrangeira no início (enquanto a concentração é alta)
          ou no final (após resolver as 40 questões restantes). Escolha a ordem
          que funciona para você — o que não pode é deixar para não ter tempo.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Psicologia da prova</span>
        <h2>6. Como Lidar com o Nervosismo e os Momentos Difíceis</h2>
        <p>
          O inglês costuma ser a disciplina que mais gera ansiedade —
          especialmente para candidatos que não se consideram "bons em inglês".
          A boa notícia: a ansiedade diminui drasticamente quando você tem um
          método claro. Você tem.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧘</span>
            <h3>Diante de texto difícil</h3>
            <p>Respire fundo. Leia o enunciado (em português). Procure cognatos no texto. Foque no que você entende, não no que não entende.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Diante de palavra desconhecida</h3>
            <p>Não entre em pânico. Aplique H27: leia a frase antes e depois. Busque pistas de contraste, definição ou exemplo. O contexto quase sempre resolve.</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Diante de texto sem imagem</h3>
            <p>Texto puro é mais raro e costuma ser menor. Leia o título e o primeiro parágrafo — o tema central estará ali.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Diante de dúvida entre 2 alternativas</h3>
            <p>Releia o enunciado. A questão pede "tema central" ou "objetivo" ou "vocabulário"? Isso desempata: uma alternativa responde ao enunciado, a outra não.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Mindset certo:</strong> Você não precisa entender 100% do
          texto para acertar a questão. Você precisa de informação suficiente
          para eliminar as alternativas erradas. Geralmente, 60% de compreensão
          do texto é o suficiente.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário acumulado</span>
        <h2>7. Palavras-Chave do Curso que Mais Aparecem no ENEM</h2>
        <p>
          Ao longo dos 35 capítulos, você encontrou centenas de palavras em
          contexto. Abaixo estão as mais recorrentes nas provas de inglês do
          ENEM — não para decorar, mas para reconhecer:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra em inglês</th>
                <th>Significado</th>
                <th>Contexto frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>despite</td><td>apesar de</td><td>Contraste argumentativo</td></tr>
              <tr><td>however</td><td>entretanto / porém</td><td>Mudança de direção no argumento</td></tr>
              <tr><td>therefore</td><td>portanto / logo</td><td>Conclusão ou resultado</td></tr>
              <tr><td>although / even though</td><td>embora</td><td>Contraste, concessão</td></tr>
              <tr><td>according to</td><td>de acordo com</td><td>Atribuição de fonte</td></tr>
              <tr><td>highlight / emphasize</td><td>destacar / enfatizar</td><td>Posicionamento do autor</td></tr>
              <tr><td>concern / threat</td><td>preocupação / ameaça</td><td>Textos sobre meio ambiente, saúde</td></tr>
              <tr><td>sustainable / sustainability</td><td>sustentável / sustentabilidade</td><td>Temas contemporâneos</td></tr>
              <tr><td>awareness</td><td>consciência / percepção</td><td>Campanhas, textos educativos</td></tr>
              <tr><td>evidence / research</td><td>evidência / pesquisa</td><td>Textos científicos</td></tr>
              <tr><td>challenge</td><td>desafio</td><td>Textos argumentativos, jornalísticos</td></tr>
              <tr><td>diverse / diversity</td><td>diverso / diversidade</td><td>Temas culturais e sociais</td></tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica final:</strong> Não decore esta lista. Use-a como
          diagnóstico — palavras que você não reconhece são pistas de lacunas
          que vale revisar antes da prova. Palavras que você já conhece são
          confirmação de progresso.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mensagem final</span>
        <h2>8. Você Está Preparado — O que Vem a Seguir</h2>
        <p>
          Inglês no ENEM é uma das disciplinas mais igualitárias da prova.
          Diferente de Matemática ou Física — onde lacunas de conteúdo custam caro —
          inglês permite que um candidato estratégico e sem fluência supere um
          candidato fluente sem método. Você tem o método.
        </p>
        <p>
          Na prova, lembre-se: <strong>o texto é seu aliado</strong>. Tudo que
          você precisa está dentro dele. O ENEM nunca vai te pedir para acessar
          um conhecimento externo em inglês — apenas para ler, inferir e
          interpretar. Isso é exatamente o que você treinou.
        </p>

        <div className="lesson-highlight">
          <strong>Resumo em 5 palavras:</strong> Leia o enunciado. Identifique
          o gênero. Faça skimming. Aplique H27. Elimine distratores.
          Repita isso 5 vezes. Pronto.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📘</span>
            <h3>35 capítulos concluídos</h3>
            <p>Da estratégia geral ao simulado final. Você percorreu todo o caminho.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Método consolidado</h3>
            <p>Skimming, scanning, H27, gêneros — você tem ferramentas concretas.</p>
          </div>
          <div className="lesson-card">
            <span>💪</span>
            <h3>Confiança justificada</h3>
            <p>Não é otimismo — é preparação. Você estudou. Você sabe o que fazer.</p>
          </div>
          <div className="lesson-card">
            <span>🏁</span>
            <h3>Agora é executar</h3>
            <p>Na prova, não improvise. Siga o método. Confie no processo. Vá com tudo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS — Mini-simulado ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mini-simulado final</span>
        <h2>Simulado Comentado — 5 Questões no Padrão ENEM</h2>
        <p>
          Resolva as questões abaixo como se fosse a prova: sem pausas, sem
          consultar anotações. Depois leia as resoluções com atenção.
        </p>

        <Exercise
          level="Básico"
          title="Questão 1 — Gênero e objetivo comunicativo (tirinha)"
          statement={
            <div>
              <p>
                Uma tirinha mostra um personagem sentado em frente ao computador.
                No primeiro quadrinho ele pensa: <strong>"I should be more productive."</strong>
                No segundo quadrinho, ele está vendo vídeos online. No terceiro: ele
                pensa de novo <strong>"I should be more productive."</strong>
              </p>
              <p>O efeito cômico da tirinha é gerado principalmente por:</p>
            </div>
          }
          options={[
            { letter: "A", text: "A crítica ao uso excessivo de tecnologia nas escolas." },
            { letter: "B", text: "A repetição circular de uma intenção que nunca se transforma em ação, gerando identificação e humor.", correct: true },
            { letter: "C", text: "O contraste entre a produtividade dos adultos e a preguiça dos jovens." },
            { letter: "D", text: "A ironia sobre a qualidade do conteúdo disponível na internet." },
            { letter: "E", text: "O exagero na representação do tempo gasto em frente ao computador." },
          ]}
          resolution={
            <p>
              O humor vem da estrutura circular: a intenção de ser produtivo aparece
              no início e no fim, mas o personagem não age — assiste vídeos no meio.
              Isso é ironia situacional com efeito de <strong>identificação</strong>
              (o leitor se reconhece). A alternativa B é a única que descreve esse
              mecanismo com precisão. As demais introduzem elementos que não estão
              no texto (escolas, comparação adulto/jovem, crítica ao conteúdo).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Questão 2 — Vocabulário em contexto (H27)"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The documentary sparked a <u>fierce</u> debate among scientists and
                policymakers, with both sides presenting conflicting data and refusing
                to concede any ground."
              </p>
              <p>
                No contexto do trecho, a palavra <strong>fierce</strong> (sublinhada) expressa:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Um debate rápido e conciso, resolvido em pouco tempo." },
            { letter: "B", text: "Um debate amigável e colaborativo entre especialistas." },
            { letter: "C", text: "Um debate intenso e acirrado, com posições opostas e sem concessões.", correct: true },
            { letter: "D", text: "Um debate científico baseado em consenso e dados compartilhados." },
            { letter: "E", text: "Um debate informal conduzido nas redes sociais." },
          ]}
          resolution={
            <p>
              As pistas contextuais revelam a intensidade do debate:{" "}
              <em>"conflicting data"</em> (dados contraditórios) e{" "}
              <em>"refusing to concede any ground"</em> (sem ceder nenhum ponto).
              Isso define "fierce" como <strong>intenso, acirrado</strong>. As
              alternativas A, B, D e E contradizem essas pistas — "amigável",
              "rápido", "consenso" e "informal" são incompatíveis com o contexto
              descrito.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Questão 3 — Tema central de artigo científico"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Microplastics have been detected in human blood, lungs, and even
                placentas, raising urgent questions about the long-term health effects
                of plastic pollution. Researchers warn that exposure begins before birth
                and accumulates throughout life. The scientific community is calling for
                immediate regulation of single-use plastics."
              </p>
              <p>O texto aborda principalmente:</p>
            </div>
          }
          options={[
            { letter: "A", text: "A história da descoberta dos microplásticos na década de 1970." },
            { letter: "B", text: "As técnicas laboratoriais usadas para detectar microplásticos no sangue humano." },
            { letter: "C", text: "A presença de microplásticos no corpo humano e os riscos à saúde, com demanda por regulação.", correct: true },
            { letter: "D", text: "O impacto econômico da proibição de plásticos descartáveis para a indústria." },
            { letter: "E", text: "A comparação entre diferentes tipos de poluição ambiental e seus efeitos na saúde." },
          ]}
          resolution={
            <p>
              O texto apresenta três ideias interligadas: detecção de microplásticos
              no corpo humano → riscos à saúde → pedido de regulação. A alternativa C
              sintetiza exatamente essa tríade. A alternativa A trata de história
              que não aparece no texto. B foca em metodologia, que é detalhe, não
              tema central. D aborda impacto econômico, não mencionado. E introduz
              comparação que o texto não faz.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Questão 4 — Intenção comunicativa de campanha"
          statement={
            <div>
              <p>
                Uma campanha de uma ONG ambiental traz o seguinte texto em inglês:{" "}
                <strong>"Every bottle you refuse is a sea turtle you save."</strong>,
                acompanhado de imagem de oceano limpo e um botão "Join us".
              </p>
              <p>A função comunicativa predominante no texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Informar dados científicos sobre a mortalidade de tartarugas marinhas no Brasil." },
            { letter: "B", text: "Narrar a história de uma tartaruga que sobreviveu à poluição plástica." },
            { letter: "C", text: "Persuadir o leitor a recusar garrafas plásticas, associando essa ação ao bem-estar de animais marinhos.", correct: true },
            { letter: "D", text: "Explicar o processo pelo qual o plástico chega aos oceanos e afeta os animais." },
            { letter: "E", text: "Criticar empresas que produzem plásticos descartáveis em larga escala." },
          ]}
          resolution={
            <p>
              O texto usa estratégia persuasiva clássica: conecta uma ação simples
              do leitor (<em>recusar garrafas</em>) a uma consequência positiva
              emocional (<em>salvar tartarugas</em>). O botão "Join us" confirma a
              intenção de mobilizar. A função é <strong>apelativa/persuasiva</strong>.
              A alternativa A descreve função informativa com dados específicos que
              o texto não apresenta. B é narrativa. D é explicativa. E é crítica.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Questão 5 — Inferência e posicionamento do autor"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The rise of remote work has been celebrated as a revolution in
                work-life balance. Yet the evidence is more nuanced: while many
                workers report greater flexibility, others describe feeling isolated,
                overworked, and unable to disconnect. The home office, it turns out,
                is not a one-size-fits-all solution."
              </p>
              <p>
                O autor do texto demonstra, em relação ao trabalho remoto, uma
                perspectiva:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Totalmente favorável, destacando os benefícios do modelo para todos os trabalhadores." },
            { letter: "B", text: "Totalmente contrária, argumentando que o trabalho remoto prejudica a produtividade." },
            { letter: "C", text: "Crítica e unilateral, focando apenas nos problemas do home office." },
            { letter: "D", text: "Equilibrada e matizada, reconhecendo tanto benefícios quanto problemas do trabalho remoto.", correct: true },
            { letter: "E", text: "Neutra e indiferente, sem expressar qualquer ponto de vista sobre o tema." },
          ]}
          resolution={
            <p>
              O texto começa reconhecendo o entusiasmo sobre o trabalho remoto
              (<em>"celebrated as a revolution"</em>), mas usa o conector{" "}
              <em>"yet"</em> para introduzir a complexidade — apresenta dois lados:
              flexibilidade para alguns, isolamento para outros. A frase final
              (<em>"not a one-size-fits-all solution"</em>) sintetiza a visão do
              autor: o fenômeno não é simples. Isso é perspectiva{" "}
              <strong>equilibrada e matizada</strong>. As alternativas A, B, C e E
              contradizem a estrutura argumentativa "por um lado… por outro lado"
              do texto.
            </p>
          }
        />
      </section>
    </article>
  );
}
