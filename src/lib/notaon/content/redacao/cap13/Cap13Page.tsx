"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 13</span>
          <h1>Argumentação Histórica</h1>
          <p>
            Domine o uso de eventos históricos como repertório de causa e consequência —
            a estratégia que demonstra visão de mundo ampla e argumentação profunda,
            elevando sua nota nas Competências 2 e 3 do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que História é Excelente Repertório</h2>
        <p>
          O repertório histórico tem uma vantagem única sobre outros tipos: ele demonstra ao
          corretor que o candidato compreende que os problemas do presente têm raízes no
          passado. Isso é exatamente o que a Competência 2 valoriza — a capacidade de usar
          conceitos de diferentes áreas do conhecimento para analisar o tema. Além disso,
          o argumento histórico é naturalmente <strong>causal</strong>: um evento do passado
          causou uma condição do presente, o que fortalece diretamente a Competência 3.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura do argumento histórico</h3>
          <p>
            <strong>Problema atual → "Esse problema tem raízes históricas em..." → Evento
            histórico → Consequência histórica que persiste → Conexão com o tema atual</strong>.
            Essa cadeia causal é o que transforma um simples dado histórico em argumento
            poderoso.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 140" width="480" height="140" aria-label="Linha do tempo de eventos históricos relevantes para o ENEM">
            <rect width="480" height="140" fill="#f8fafc" rx="10" />
            {/* Timeline line */}
            <line x1="20" y1="70" x2="460" y2="70" stroke="#94a3b8" strokeWidth="3" />
            {/* Arrows at end */}
            <polygon points="460,66 470,70 460,74" fill="#94a3b8" />
            {/* Events */}
            {/* 1888 */}
            <line x1="55" y1="50" x2="55" y2="70" stroke="#ef4444" strokeWidth="2" />
            <circle cx="55" cy="70" r="5" fill="#ef4444" />
            <text x="55" y="40" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">1888</text>
            <text x="55" y="28" textAnchor="middle" fill="#64748b" fontSize="8">Abolição</text>
            {/* 1917 */}
            <line x1="108" y1="50" x2="108" y2="70" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="108" cy="70" r="5" fill="#f59e0b" />
            <text x="108" y="40" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">1930</text>
            <text x="108" y="28" textAnchor="middle" fill="#64748b" fontSize="8">Era Vargas</text>
            {/* 1948 */}
            <line x1="175" y1="90" x2="175" y2="70" stroke="#10b981" strokeWidth="2" />
            <circle cx="175" cy="70" r="5" fill="#10b981" />
            <text x="175" y="104" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">1948</text>
            <text x="175" y="116" textAnchor="middle" fill="#64748b" fontSize="8">Decl. DH</text>
            <text x="175" y="128" textAnchor="middle" fill="#64748b" fontSize="7">Universal</text>
            {/* 1964 */}
            <line x1="250" y1="50" x2="250" y2="70" stroke="#ef4444" strokeWidth="2" />
            <circle cx="250" cy="70" r="5" fill="#ef4444" />
            <text x="250" y="40" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">1964</text>
            <text x="250" y="28" textAnchor="middle" fill="#64748b" fontSize="8">Ditadura</text>
            {/* 1988 */}
            <line x1="340" y1="90" x2="340" y2="70" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="340" cy="70" r="5" fill="#3b82f6" />
            <text x="340" y="104" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">1988</text>
            <text x="340" y="116" textAnchor="middle" fill="#64748b" fontSize="8">Const.</text>
            <text x="340" y="128" textAnchor="middle" fill="#64748b" fontSize="7">Federal</text>
            {/* 2006 */}
            <line x1="415" y1="50" x2="415" y2="70" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="415" cy="70" r="5" fill="#8b5cf6" />
            <text x="415" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="bold">2006</text>
            <text x="415" y="28" textAnchor="middle" fill="#64748b" fontSize="8">Lei Maria</text>
            <text x="415" y="16" textAnchor="middle" fill="#64748b" fontSize="7">da Penha</text>
          </svg>
          <figcaption>Linha do tempo dos principais eventos históricos para repertório no ENEM — vermelho: ruptura/conflito; verde: direitos; azul: constituição; roxo: legislação.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Industrial</span>
        <h2>2. Revolução Industrial: Origem das Desigualdades Modernas</h2>
        <p>
          A Revolução Industrial (séculos XVIII–XIX, iniciada na Inglaterra) transformou
          radicalmente o mundo do trabalho: o artesão independente foi substituído pelo
          operário assalariado, submetido a jornadas de até 16 horas diárias em condições
          insalubres, sem direitos trabalhistas. Crianças de cinco anos trabalhavam nas
          fábricas. Essa transformação gerou a concentração urbana, a formação do
          proletariado e a desigualdade de classes que persiste até hoje.
        </p>
        <div className="lesson-highlight">
          <h3>Conexão com temas do ENEM</h3>
          <p>
            "A precariedade das relações trabalhistas no Brasil contemporâneo não é um
            fenômeno recente: suas raízes remontam à Revolução Industrial do século XVIII,
            quando a lógica de maximização do lucro em detrimento dos direitos do trabalhador
            foi institucionalizada como norma do capitalismo industrial."
          </p>
        </div>
        <p>
          Temas compatíveis: trabalho precário, uberização, trabalho infantil, direitos
          trabalhistas, desigualdade social, capitalismo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Iluminismo</span>
        <h2>3. Iluminismo: A Origem dos Direitos Universais</h2>
        <p>
          O Iluminismo (século XVIII) foi o movimento intelectual que fundamentou a ideia de
          que todo ser humano possui <strong>direitos universais</strong> independentes de sua
          origem, religião ou posição social. Os pensadores iluministas (Locke, Rousseau,
          Voltaire, Montesquieu) argumentaram pela separação entre Estado e Igreja, pela
          liberdade de expressão e pela igualdade perante a lei. Esses princípios embasaram
          a Declaração dos Direitos do Homem e do Cidadão (França, 1789) e a Declaração de
          Independência dos EUA (1776).
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação na redação</h3>
          <p>
            "O Iluminismo do século XVIII estabeleceu o fundamento teórico dos direitos
            universais ao defender que a razão, e não o nascimento ou a fé, deve ser a base
            da organização social. Desconsiderar esse legado — ao negar educação de qualidade
            a populações vulneráveis — é retroceder aos tempos em que o direito ao
            conhecimento era privilégio de poucos."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escravidão</span>
        <h2>4. Abolição da Escravatura no Brasil (1888)</h2>
        <p>
          O Brasil foi o último país do mundo ocidental a abolir oficialmente a escravidão,
          em 13 de maio de 1888. Mas a abolição formal não foi acompanhada de nenhuma política
          de integração ou reparação: os ex-escravizados foram libertados sem terra, sem
          educação, sem moradia e sem acesso ao mercado de trabalho formal. Isso explica
          diretamente por que, mais de um século depois, a população negra ainda representa
          a parcela mais vulnerável em todos os indicadores socioeconômicos brasileiros.
        </p>
        <div className="lesson-highlight">
          <h3>Argumento histórico poderoso</h3>
          <p>
            "A desigualdade racial no Brasil não é fruto do acaso ou da meritocracia
            individual: é consequência direta de uma abolição que libertou os corpos, mas
            não garantiu as condições para que a liberdade se tornasse concreta. Sem terra,
            trabalho ou educação, os ex-escravizados foram empurrados para as margens das
            cidades, dando origem às favelas e à exclusão estrutural que persiste até hoje."
          </p>
        </div>
        <p>
          Temas compatíveis: racismo, desigualdade racial, inclusão, ações afirmativas,
          educação, moradia, violência policial.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vargas</span>
        <h2>5. Era Vargas e Estado Novo: Populismo e Trabalhismo</h2>
        <p>
          O governo de Getúlio Vargas (1930–1945 e 1951–1954) é fundamental para compreender
          a política e o trabalhismo brasileiros. O Estado Novo (1937–1945) foi uma ditadura
          que consolidou direitos trabalhistas (CLT, 1943) ao mesmo tempo em que censurava a
          imprensa e perseguia opositores — o que Vargas usava como base de sua legitimidade
          populista. Essa contradição entre concessão de direitos e supressão de liberdades
          ainda reverbera nos debates sobre democracia e populismo no Brasil.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação em temas de política e mídia</h3>
          <p>
            "A história do populismo brasileiro, inaugurada pela era Vargas, demonstra como
            discursos que prometem proteção aos trabalhadores podem coexistir com práticas
            de censura e concentração de poder — padrão que exige vigilância constante nas
            democracias contemporâneas."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ditadura</span>
        <h2>6. Ditadura Militar (1964–1985): Censura e Direitos Humanos</h2>
        <p>
          O regime militar brasileiro (1964–1985) suspendeu direitos políticos, censurou
          a imprensa, perseguiu e torturou opositores e suprimiu liberdades civis.
          O AI-5 (1968) foi o instrumento mais draconiano: fechou o Congresso, suspendeu
          o habeas corpus e autorizou torturas. A abertura gradual só culminou com as
          Diretas Já (1984) e a Constituição de 1988.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação em temas de democracia e liberdade</h3>
          <p>
            "O período da ditadura militar brasileira (1964–1985) é uma referência
            histórica inescapável para qualquer debate sobre liberdade de expressão: durante
            duas décadas, jornalistas foram presos, livros queimados e cidadãos torturados
            por expressar opiniões divergentes. Esse passado não é distante — é a fundação
            sobre a qual o Estado democrático de direito foi construído em 1988."
          </p>
        </div>
        <p>
          Temas compatíveis: liberdade de imprensa, censura, direitos humanos, democracia,
          violência estatal, memória e verdade.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constituição</span>
        <h2>7. Redemocratização e Constituição de 1988</h2>
        <p>
          A Constituição Federal de 1988, chamada de "Constituição Cidadã", representou
          a ruptura definitiva com o autoritarismo e a fundação do Estado democrático
          de direito no Brasil. Ela garantiu direitos fundamentais como saúde, educação,
          moradia, trabalho, liberdade e igualdade para todos os cidadãos, além de criar
          mecanismos de proteção contra o arbítrio estatal (habeas corpus, mandado de
          segurança, ação popular).
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação como repertório</h3>
          <p>
            "A Constituição Federal de 1988, promulgada após décadas de autoritarismo,
            consagrou em seu Artigo 6º o direito à educação, saúde, moradia, trabalho
            e lazer como direitos sociais fundamentais. O descompasso entre esse
            compromisso constitucional e a realidade de milhões de brasileiros sem
            acesso a serviços básicos evidencia uma crise de efetivação dos direitos
            formalmente garantidos."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Como usar com segurança</span>
        <h2>8. Como Usar História sem Datar Errado</h2>
        <p>
          Datas erradas são um risco real e devem ser evitadas. O corretor do ENEM é
          especialista e reconhece imprecisões históricas. Algumas estratégias de segurança:
        </p>
        <div className="lesson-highlight">
          <h3>Fórmulas seguras</h3>
          <p>
            Prefira: "No século XIX..." em vez de um ano específico duvidoso. |
            "Nas décadas de 1960 e 1970..." em vez de "Em 1967..." se não tiver certeza. |
            "Após a Segunda Guerra Mundial..." em vez de "Em 1945..." |
            "Na redemocratização brasileira, com a promulgação da Constituição de 1988..." (data segura). |
            "Durante a era Vargas, nas décadas de 1930 e 1940..." (período amplo, mais seguro).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Datas que você deve memorizar com segurança</h3>
          <p>
            1888 — Abolição da Escravatura | 1964 — Início da Ditadura Militar |
            1988 — Constituição Federal | 2006 — Lei Maria da Penha |
            1948 — Declaração Universal dos Direitos Humanos |
            1945 — Fim da Segunda Guerra Mundial.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>9. Erros Comuns com Repertório Histórico</h2>
        <p>
          Três erros frequentes que comprometem a credibilidade do argumento histórico:
        </p>
        <div className="lesson-highlight">
          <h3>1. Datas erradas</h3>
          <p>
            Dizer que a Abolição foi em 1889 ou que a Ditadura terminou em 1984 (não
            terminou — terminou formalmente em 1985). Se não tiver certeza, use o século
            ou a década, nunca o ano exato.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>2. Anacronismo</h3>
          <p>
            Atribuir motivações modernas a personagens históricos. Não diga que os
            escravocratas "tinham preconceito racial no sentido contemporâneo" — o conceito
            de racismo estrutural é uma elaboração recente.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>3. Fatos fictícios</h3>
          <p>
            Inventar eventos históricos é gravíssimo. "Na Revolução de 1930, Vargas aboliu
            a escravidão" é obviamente falso e destrói a credibilidade do texto inteiro.
            Se não tiver certeza sobre um fato, não o use.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela estratégica</span>
        <h2>10. Eventos Históricos × Temas ENEM Compatíveis</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento histórico</th>
                <th>Período</th>
                <th>Descrição resumida</th>
                <th>Temas ENEM compatíveis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revolução Industrial</td>
                <td>Séc. XVIII–XIX</td>
                <td>Surgimento do trabalho assalariado e das desigualdades urbanas modernas</td>
                <td>Trabalho, desigualdade, capitalismo, meio ambiente</td>
              </tr>
              <tr>
                <td>Iluminismo</td>
                <td>Séc. XVIII</td>
                <td>Fundação teórica dos direitos universais e da separação Estado-Igreja</td>
                <td>Educação, democracia, liberdade, laicidade</td>
              </tr>
              <tr>
                <td>Abolição da Escravatura no Brasil</td>
                <td>1888</td>
                <td>Liberdade formal sem políticas de integração — raiz da desigualdade racial</td>
                <td>Racismo, desigualdade racial, inclusão, reparação histórica</td>
              </tr>
              <tr>
                <td>Era Vargas / Estado Novo</td>
                <td>1930–1945</td>
                <td>Populismo, criação da CLT, censura e autoritarismo simultâneos</td>
                <td>Trabalho, democracia, populismo, mídia</td>
              </tr>
              <tr>
                <td>Declaração Universal dos DH</td>
                <td>1948</td>
                <td>30 artigos que garantem dignidade, liberdade e igualdade a todos</td>
                <td>Direitos humanos, cidadania, dignidade, inclusão</td>
              </tr>
              <tr>
                <td>Ditadura Militar Brasileira</td>
                <td>1964–1985</td>
                <td>Censura, tortura e supressão de direitos — com abertura gradual</td>
                <td>Liberdade de expressão, democracia, DH, violência estatal</td>
              </tr>
              <tr>
                <td>Constituição Federal de 1988</td>
                <td>1988</td>
                <td>Marco dos direitos fundamentais e do Estado democrático de direito no Brasil</td>
                <td>Cidadania, educação, saúde, igualdade, direitos sociais</td>
              </tr>
              <tr>
                <td>Convenção ONU sobre Deficiência</td>
                <td>2006</td>
                <td>Obriga Estados a garantirem inclusão plena de pessoas com deficiência</td>
                <td>Inclusão, acessibilidade, pessoa com deficiência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Argumentação Histórica</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✍️</span>
            <h3>Causa e consequência</h3>
            <p>O argumento histórico é mais forte quando mostra que o problema atual tem raízes em eventos passados.</p>
          </div>
          <div className="math-card">
            <span>📅</span>
            <h3>Datas seguras</h3>
            <p>Memorize poucas datas com certeza. Na dúvida, use "século XIX" ou "décadas de 1960 e 1970".</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Seis eventos-chave</h3>
            <p>Revolução Industrial, Iluminismo, Abolição, Ditadura, Constituição de 1988 e Declaração de DH de 1948.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Conecte ao presente</h3>
            <p>Sempre feche o argumento histórico mostrando como ele explica ou agrava o problema atual.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Nunca invente fatos</h3>
            <p>Fato histórico inventado é pior que ausência de repertório — destrói a credibilidade do texto.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>1988 é seu melhor aliado</h3>
            <p>A Constituição Federal é o repertório histórico mais versátil — serve para quase todo tema social.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Abolição e desigualdade racial"
          statement={
            <p>
              Em uma redação sobre <strong>racismo estrutural no Brasil</strong>, por que a
              Abolição da Escravatura de 1888 é um repertório histórico relevante?
            </p>
          }
          options={[
            { letter: "a", text: "Porque a abolição eliminou completamente a desigualdade racial no Brasil." },
            { letter: "b", text: "Porque a liberdade formal sem políticas de integração criou as bases estruturais da desigualdade racial que persiste até hoje.", correct: true },
            { letter: "c", text: "Porque a abolição foi o último ato de um governo que prezava pelos direitos humanos." },
            { letter: "d", text: "Porque a data de 1889 marca o início da desigualdade racial no Brasil." },
          ]}
          resolution={
            <p>
              A abolição de 1888 é poderosa como repertório porque explica a persistência
              da desigualdade racial: ex-escravizados foram libertados sem terra, educação
              ou trabalho — o que os empurrou para as margens das cidades e criou a exclusão
              estrutural que o IBGE documenta até hoje. Atenção: a data correta é 1888, não
              1889 (que foi a Proclamação da República).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ditadura e liberdade de imprensa"
          statement={
            <p>
              Um candidato quer usar repertório histórico em uma redação sobre
              <strong> censura nas redes sociais e liberdade de expressão</strong>. Qual das
              opções apresenta o uso mais adequado?
            </p>
          }
          options={[
            { letter: "a", text: "A Revolução Francesa, pois inaugurou o debate sobre liberdade de imprensa na modernidade." },
            { letter: "b", text: "A ditadura militar brasileira (1964–1985), pois demonstra historicamente como a censura viola direitos fundamentais e que a liberdade de expressão é conquista que deve ser protegida.", correct: true },
            { letter: "c", text: "A Revolução Industrial, pois gerou a imprensa de massa no século XIX." },
            { letter: "d", text: "O Estado Novo de 1937, desde que o candidato afirme que foi nesse período que a Constituição de 1988 foi promulgada." },
          ]}
          resolution={
            <p>
              A ditadura militar (1964–1985) é o repertório histórico mais direto para
              temas de liberdade de expressão no Brasil: demonstra que a censura já foi
              uma realidade no país, que ela viola direitos humanos fundamentais, e que a
              Constituição de 1988 nasceu justamente como resposta a esse período. Isso cria
              uma cadeia histórica poderosa: passado de censura → conquista constitucional
              → necessidade de defender essa conquista no presente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Anacronismo histórico"
          statement={
            <p>
              Em uma redação sobre <strong>trabalho infantil</strong>, um candidato escreveu:
              "Desde a Revolução Industrial do século XVIII, quando crianças de 5 anos foram
              empurradas às fábricas insalubres pela lógica capitalista de lucro máximo,
              a exploração do trabalho infantil revelou-se uma das faces mais cruéis do
              sistema produtivo." Esse uso de repertório histórico é:
            </p>
          }
          options={[
            { letter: "a", text: "Inadequado, pois a Revolução Industrial ocorreu no século XIX, não no XVIII." },
            { letter: "b", text: "Produtivo: estabelece a raiz histórica do problema, usa causa-consequência e conecta ao tema atual.", correct: true },
            { letter: "c", text: "Fraco, pois a Revolução Industrial não tem relação com trabalho infantil." },
            { letter: "d", text: "Inadequado, pois o candidato deveria usar apenas repertório brasileiro, não europeu." },
          ]}
          resolution={
            <p>
              O uso é produtivo: o candidato usa a Revolução Industrial para mostrar a raiz
              histórica do trabalho infantil, explica o mecanismo (lógica capitalista) e
              implicitamente conecta ao presente. A Revolução Industrial começou na segunda
              metade do século XVIII (1760s) na Inglaterra, portanto "século XVIII" está
              tecnicamente correto — embora o pico tenha sido no século XIX. O repertório
              histórico estrangeiro é completamente válido no ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Constituição Federal como repertório"
          statement={
            <p>
              (Estilo ENEM) Uma candidata escreveu: "A Constituição Federal de 1988, promulgada
              após mais de duas décadas de autoritarismo, consagrou em seu artigo 196 a saúde
              como direito de todos e dever do Estado. A persistente falência do sistema de
              saúde público, entretanto, revela que o compromisso constitucional ainda não se
              traduziu em realidade para milhões de brasileiros." Esse trecho usa repertório
              histórico de forma eficaz porque:
            </p>
          }
          options={[
            { letter: "a", text: "Cita um artigo específico da Constituição, demonstrando memória excepcional." },
            { letter: "b", text: "Contextualiza a Constituição historicamente (pós-autoritarismo), cita o dispositivo constitucional e conecta ao problema real discutido.", correct: true },
            { letter: "c", text: "Usa a Constituição apenas como repertório filosófico, sem conexão histórica." },
            { letter: "d", text: "O trecho está incorreto porque a Constituição de 1988 não inclui artigos sobre saúde." },
          ]}
          resolution={
            <p>
              O trecho é exemplar: (1) contextualiza historicamente a Constituição
              (promulgada após duas décadas de autoritarismo), (2) cita um dispositivo
              específico com precisão (art. 196 sobre saúde), (3) conecta ao problema atual
              (falência do sistema de saúde). Esse encadeamento histórico-constitucional
              demonstra exatamente a profundidade que a Competência 2 exige.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Iluminismo e educação"
          statement={
            <p>
              (Estilo ENEM) Em uma redação sobre o <strong>direito à educação de qualidade
              para populações vulneráveis</strong>, um candidato quer usar o Iluminismo como
              repertório histórico. Qual das formulações abaixo é mais adequada?
            </p>
          }
          options={[
            { letter: "a", text: "'O Iluminismo do século XVIII provou que a educação é desnecessária para o desenvolvimento humano.'" },
            { letter: "b", text: "'O Iluminismo do século XVIII foi um movimento europeu sem impacto no Brasil.'", correct: false },
            { letter: "c", text: "'O Iluminismo do século XVIII consagrou a educação como direito universal — princípio que, dois séculos depois, ainda é negado a populações vulneráveis no Brasil, revelando a distância entre o ideal iluminista e a realidade.'", correct: true },
            { letter: "d", text: "'O Iluminismo criou o sistema educacional brasileiro atual em 1788.'" },
          ]}
          resolution={
            <p>
              A alternativa C é a mais adequada porque: (1) situa o Iluminismo
              historicamente ("século XVIII"), (2) extrai o princípio relevante (educação
              como direito universal), (3) cria um contraste temporal poderoso ("dois
              séculos depois, ainda é negado"), e (4) conecta explicitamente ao tema
              da redação (populações vulneráveis no Brasil). Esse movimento histórico →
              princípio → contraste com presente → conexão ao tema é a estrutura ideal
              do argumento histórico.
            </p>
          }
        />
      </section>
    </article>
  );
}
