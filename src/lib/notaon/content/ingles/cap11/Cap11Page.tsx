"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 11</span>
          <h1>Present Perfect e Present Perfect Continuous</h1>
          <p>
            O <strong>Present Perfect</strong> é um dos tempos verbais que mais confunde
            estudantes brasileiros — e justamente por isso aparece com tanta frequência nas
            provas do ENEM. Ele conecta o passado ao presente de maneira única, enfatizando
            a <em>relevância atual</em> de uma ação passada. Junto com o{" "}
            <strong>Present Perfect Continuous</strong>, forma uma dupla poderosa para expressar
            experiências, resultados e durações que transformam a leitura de textos autênticos
            em inglês.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Present Perfect — Estrutura e Formação</h2>

        <p>
          O <strong>Present Perfect</strong> é formado com o auxiliar <strong>have</strong> ou{" "}
          <strong>has</strong> (para he/she/it) + o <strong>particípio passado</strong> do
          verbo principal. O particípio passado de verbos regulares é igual ao passado simples
          (-ed); para irregulares, é a terceira coluna da tabela de verbos.
        </p>

        <div className="math-block">
          <strong>Estrutura:</strong> Sujeito + have/has + particípio passado
          <br />
          <em>I <strong>have visited</strong> Paris twice.</em> — Visitei Paris duas vezes. (experiência)
          <br />
          <em>She <strong>has finished</strong> the report.</em> — Ela terminou o relatório. (resultado presente)
          <br />
          <em>They <strong>have lived</strong> here for ten years.</em> — Eles moram aqui há dez anos.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Afirmativa</strong></td>
                <td>Sujeito + have/has + particípio</td>
                <td><em>We have seen this film.</em></td>
                <td>Nós vimos / já vimos este filme.</td>
              </tr>
              <tr>
                <td><strong>Negativa</strong></td>
                <td>Sujeito + haven't/hasn't + particípio</td>
                <td><em>He hasn't called yet.</em></td>
                <td>Ele ainda não ligou.</td>
              </tr>
              <tr>
                <td><strong>Interrogativa</strong></td>
                <td>Have/Has + sujeito + particípio?</td>
                <td><em>Have you ever been to Japan?</em></td>
                <td>Você já esteve no Japão alguma vez?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Usos</span>
        <h2>2. Quatro Usos Essenciais do Present Perfect</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌍</span>
            <h3>1. Experiências de Vida</h3>
            <p>
              Ações que aconteceram (ou não) em algum momento da vida, sem especificar quando.
              O "quando" não importa — o que importa é se a experiência existiu.
              <br />
              <em>"She has traveled to 30 countries."</em>
              <br />
              <em>"I have never tried sushi."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>2. Resultado Presente</h3>
            <p>
              Ação passada cujo resultado ainda é relevante ou visível no presente.
              O efeito da ação é o foco.
              <br />
              <em>"He has broken his leg."</em> → está de muleta agora.
              <br />
              <em>"I've lost my keys."</em> → não consigo entrar em casa.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>3. Ação Recente (com just)</h3>
            <p>
              Algo que acabou de acontecer, muito recentemente.
              <br />
              <em>"The president has just announced new measures."</em>
              <br />
              <em>"I've just received your email."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>4. Ação que Continua até o Presente</h3>
            <p>
              Começou no passado e ainda continua agora (com <em>for</em> e <em>since</em>).
              <br />
              <em>"She has worked here for five years."</em>
              <br />
              <em>"We have known each other since 2015."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores Temporais</span>
        <h2>3. Already, Yet, Just, Ever e Never — Os Cinco Aliados</h2>

        <p>
          Esses advérbios são os <strong>marcadores mais característicos do Present Perfect</strong>.
          Reconhecê-los é uma estratégia poderosa para identificar o tempo verbal em textos.
          Cada um tem uma posição específica na frase e um significado distinto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Advérbio</th>
                <th>Significado</th>
                <th>Posição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>already</strong></td>
                <td>já (ação concluída antes do esperado)</td>
                <td>Entre have e o particípio / final</td>
                <td><em>"I have already eaten."</em></td>
              </tr>
              <tr>
                <td><strong>yet</strong></td>
                <td>ainda (negativa) / já (interrogativa)</td>
                <td>Final da frase</td>
                <td><em>"She hasn't arrived yet."</em> / <em>"Have you paid yet?"</em></td>
              </tr>
              <tr>
                <td><strong>just</strong></td>
                <td>acabou de / há pouco</td>
                <td>Entre have e o particípio</td>
                <td><em>"He has just left."</em></td>
              </tr>
              <tr>
                <td><strong>ever</strong></td>
                <td>alguma vez (em interrogativas)</td>
                <td>Entre have e o particípio</td>
                <td><em>"Have you ever seen a whale?"</em></td>
              </tr>
              <tr>
                <td><strong>never</strong></td>
                <td>nunca (forma enfática negativa)</td>
                <td>Entre have e o particípio</td>
                <td><em>"I have never been to Africa."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica prática:</strong> Se você encontrar <em>yet, already, just, ever</em> ou
          <em> never</em> em uma frase com have/has, é quase certeza que está diante de um
          Present Perfect. Esses marcadores raramente aparecem com Simple Past ou outros
          tempos verbais.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">For e Since</span>
        <h2>4. For e Since — Duração e Ponto de Início</h2>

        <p>
          As preposições <strong>for</strong> e <strong>since</strong> são essenciais para
          indicar duração no Present Perfect e são frequentemente confundidas. A distinção
          é simples: <em>for</em> indica <strong>duração</strong> (por quanto tempo), enquanto
          <em>since</em> indica o <strong>ponto de início</strong> (desde quando).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Preposição</th>
                <th>Uso</th>
                <th>Seguida de</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>for</strong></td>
                <td>Período de duração</td>
                <td>Quantidade de tempo (two years, three months, a week, ages)</td>
                <td><em>"I have studied English for six months."</em></td>
              </tr>
              <tr>
                <td><strong>since</strong></td>
                <td>Ponto de início no passado</td>
                <td>Data, ano, evento específico (2010, Monday, the accident)</td>
                <td><em>"She has lived here since 2018."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Como distinguir:</strong>
          <br />
          Pergunte: posso substituir por "há quanto tempo"? → use <em>for</em>
          <br />
          Posso substituir por "desde quando"? → use <em>since</em>
          <br /><br />
          <em>"She has worked here <strong>for</strong> three years."</em> — por três anos (duração)
          <br />
          <em>"She has worked here <strong>since</strong> 2021."</em> — desde 2021 (ponto de início)
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg" aria-label="Linha do tempo mostrando a diferença entre for e since com Present Perfect">
            <defs>
              <marker id="arrow11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4f46e5" />
              </marker>
            </defs>
            {/* Linha do tempo */}
            <line x1="50" y1="95" x2="660" y2="95" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow11)" />
            {/* AGORA */}
            <circle cx="600" cy="95" r="8" fill="#4f46e5" />
            <text x="600" y="120" textAnchor="middle" fontSize="12" fill="#4f46e5" fontWeight="bold">AGORA</text>
            {/* Ponto de início */}
            <circle cx="200" cy="95" r="6" fill="#ef4444" />
            <line x1="200" y1="89" x2="200" y2="55" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="200" y="48" textAnchor="middle" fontSize="11" fill="#ef4444" fontWeight="bold">Ponto de início</text>
            <text x="200" y="38" textAnchor="middle" fontSize="10" fill="#ef4444">(since 2021 / since Monday)</text>
            {/* Seta FOR */}
            <line x1="200" y1="140" x2="600" y2="140" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow11)" />
            <text x="400" y="158" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10b981">for (duração: 3 years, 6 months...)</text>
            {/* SINCE label */}
            <text x="200" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">since</text>
            {/* Linha tracejada desde o início até agora */}
            <line x1="200" y1="95" x2="600" y2="95" stroke="#10b981" strokeWidth="2" strokeDasharray="6,3" />
            <text x="55" y="115" fontSize="11" fill="#6b7280">Passado</text>
          </svg>
          <figcaption>SINCE marca o ponto de início (vermelho). FOR indica a duração total do período (verde). Ambos são usados com Present Perfect para ações que continuam até o presente.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Present Perfect vs. Simple Past</span>
        <h2>5. A Distinção Mais Cobrada no ENEM</h2>

        <p>
          A diferença entre Present Perfect e Simple Past é o ponto mais testado sobre tempos
          verbais nas provas de inglês do ENEM. A regra central é:{" "}
          <strong>Simple Past → quando o tempo está definido; Present Perfect → quando
          a relevância atual importa mais que o momento exato</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Simple Past</th>
                <th>Present Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tempo especificado</strong></td>
                <td>✅ Sim (yesterday, in 2010, last week)</td>
                <td>❌ Não especificado</td>
              </tr>
              <tr>
                <td><strong>Conexão com o presente</strong></td>
                <td>❌ Evento encerrado</td>
                <td>✅ Resultado relevante no presente</td>
              </tr>
              <tr>
                <td><strong>Foco</strong></td>
                <td>O evento em si, no passado</td>
                <td>A relevância atual do evento</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td><em>"She graduated in 2020."</em></td>
                <td><em>"She has graduated."</em> (já é formada)</td>
              </tr>
              <tr>
                <td><strong>Marcadores</strong></td>
                <td>yesterday, ago, last, in [ano], then</td>
                <td>already, yet, just, ever, never, for, since</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Teste rápido:</strong> Se a frase tem <em>yesterday, ago, last year</em> ou
          qualquer data específica → Simple Past. Se tem <em>already, yet, just, ever, never,
          for, since</em> → Present Perfect. Se não tem marcadores, pergunte: "o foco é no
          evento passado (SP) ou no resultado presente (PP)?"
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Present Perfect Continuous</span>
        <h2>6. Present Perfect Continuous — Ênfase na Duração</h2>

        <p>
          O <strong>Present Perfect Continuous</strong> (have/has been + -ing) combina o
          aspecto do "passado com relevância presente" com a ideia de <em>continuidade</em>.
          Ele enfatiza a <strong>duração</strong> de uma ação que começou no passado e ainda
          está em andamento (ou acabou muito recentemente, com resultados visíveis).
        </p>

        <div className="math-block">
          <strong>Estrutura:</strong> Sujeito + have/has been + verbo-ing
          <br />
          <em>I <strong>have been studying</strong> for three hours.</em> — Estou estudando há três horas (e talvez ainda esteja).
          <br />
          <em>She <strong>has been working</strong> on this project since January.</em> — Ela trabalha neste projeto desde janeiro.
          <br />
          <em>Why are your eyes red? — I <strong>have been crying</strong>.</em> — resultado visível de uma ação recente contínua.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Present Perfect Simples</th>
                <th>Present Perfect Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Estrutura</strong></td>
                <td>have/has + particípio</td>
                <td>have/has been + -ing</td>
              </tr>
              <tr>
                <td><strong>Foco</strong></td>
                <td>Resultado / conclusão</td>
                <td>Duração / processo em andamento</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td><em>"I have written three emails."</em> (conclusão: 3 emails prontos)</td>
                <td><em>"I have been writing emails."</em> (processo: ocupado com emails)</td>
              </tr>
              <tr>
                <td><strong>Com stative verbs</strong></td>
                <td>✅ Compatível: <em>"I've known her for years."</em></td>
                <td>❌ Não compatível: <em>"I've been knowing her."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>7. Linha do Tempo dos Três Tempos Verbais</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" aria-label="Linha do tempo comparando Simple Past, Present Perfect e Present Perfect Continuous">
            <defs>
              <marker id="arr11b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            <line x1="50" y1="115" x2="670" y2="115" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr11b)" />
            <text x="55" y="132" fontSize="11" fill="#6b7280">Passado</text>
            <text x="590" y="132" fontSize="11" fill="#6b7280">→ Agora</text>
            {/* AGORA */}
            <circle cx="580" cy="115" r="7" fill="#4f46e5" />
            <text x="580" y="105" textAnchor="middle" fontSize="11" fill="#4f46e5" fontWeight="bold">AGORA</text>
            {/* Simple Past — ponto isolado no passado */}
            <circle cx="180" cy="115" r="7" fill="#ef4444" />
            <text x="180" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">Simple Past</text>
            <text x="180" y="90" textAnchor="middle" fontSize="10" fill="#ef4444">(evento concluído,</text>
            <text x="180" y="103" textAnchor="middle" fontSize="10" fill="#ef4444">desconectado do presente)</text>
            {/* Present Perfect — conexão entre passado e presente */}
            <line x1="310" y1="115" x2="575" y2="115" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="310" cy="115" r="6" fill="#10b981" />
            <line x1="575" y1="115" x2="580" y2="115" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arr11b)" />
            <text x="440" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#10b981">Present Perfect</text>
            <text x="440" y="170" textAnchor="middle" fontSize="10" fill="#10b981">(liga passado ao presente)</text>
            {/* Present Perfect Continuous — seta contínua até o presente */}
            <rect x="310" y="185" width="270" height="16" fill="#f59e0b" rx="4" opacity="0.8" />
            <text x="445" y="197" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">Present Perfect Continuous</text>
            <text x="445" y="215" textAnchor="middle" fontSize="10" fill="#78350f">(ênfase na duração — em andamento)</text>
          </svg>
          <figcaption>Simple Past: evento isolado no passado. Present Perfect: passado com resultado no presente. Present Perfect Continuous: ação em andamento com ênfase na duração.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>8. Present Perfect em Textos Autênticos do ENEM</h2>

        <p>
          O Present Perfect aparece frequentemente em textos do ENEM em contextos específicos.
          Saber reconhecê-lo e interpretá-lo é fundamental para entender o tom e o propósito
          do texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Jornalismo Atual</h3>
            <p>
              Para relatar fatos recentes de relevância presente.
              <em>"Scientists have discovered a new type of coral reef."</em>
              (→ a descoberta é nova e relevante agora)
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Campanhas Ambientais</h3>
            <p>
              Para mostrar o acúmulo de danos e consequências.
              <em>"Temperatures have risen 1.5°C since pre-industrial times."</em>
              <em>"Hundreds of species have gone extinct."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Biografie e Perfis</h3>
            <p>
              Para listar conquistas e experiências de vida.
              <em>"She has written 12 novels, won three prizes and spoken in 40 countries."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Comunicados Oficiais</h3>
            <p>
              Para anunciar resultados ou mudanças já efetivadas.
              <em>"The government has approved the new education bill."</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos de divulgação científica, o Present Perfect
          com <em>have found, have shown, have discovered</em> é muito comum para apresentar
          resultados de pesquisas recentes. Quando você vê esse padrão, o texto está
          comunicando uma descoberta com impacto atual — essa intenção pode ser cobrada
          em questões sobre objetivo do texto ou tema central.
        </div>
      </section>

      {/* ── SEÇÃO 9 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificando o Present Perfect"
          statement={
            <p>
              Qual das frases está corretamente no Present Perfect?
            </p>
          }
          options={[
            { letter: "A", text: <><em>"She has went to the market."</em></> },
            { letter: "B", text: <><em>"They have been working here since 2019."</em></>, correct: true },
            { letter: "C", text: <><em>"He have finished the project."</em></> },
            { letter: "D", text: <><em>"I has seen that movie."</em></> },
            { letter: "E", text: <><em>"We have went abroad last year."</em></> },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B — "They have been working here since 2019."</strong>{" "}
              Essa é uma frase de Present Perfect Continuous corretamente formada (have been +
              -ing) com o marcador <em>since</em>. A: <em>went</em> é Simple Past; o particípio
              de <em>go</em> é <em>gone</em>. C: com <em>he</em>, o auxiliar é <em>has</em>,
              não <em>have</em>. D: o auxiliar para <em>I</em> é <em>have</em>, não <em>has</em>.
              E: além do erro com <em>went</em>, a expressão <em>last year</em> pede Simple Past.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Already, Yet e Just"
          statement={
            <p>
              Escolha a alternativa que preenche corretamente as três lacunas:
              <br /><br />
              <em>"Have you eaten ______? I've ______ made lunch, but she hasn't arrived ______."</em>
            </p>
          }
          options={[
            { letter: "A", text: "yet / just / already" },
            { letter: "B", text: "already / just / yet", correct: true },
            { letter: "C", text: "just / already / yet" },
            { letter: "D", text: "yet / already / just" },
            { letter: "E", text: "ever / just / never" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B — already / just / yet</strong>. Primeira lacuna:
              em pergunta sobre experiência/conclusão, usa-se <em>yet</em> OU <em>already</em>
              — aqui <em>already</em> expressa "você já comeu?" com ligeira surpresa pelo
              horário. Segunda lacuna: <em>just</em> indica que o almoço foi feito há pouco
              tempo (ação muito recente). Terceira lacuna: na negativa, <em>yet</em> significa
              "ainda não" (ela ainda não chegou). A opção A colocaria <em>yet</em> na primeira
              posição e <em>already</em> no final da negativa — ambos gramaticalmente possíveis,
              mas B é a combinação mais natural e idiomática.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Present Perfect vs. Simple Past"
          statement={
            <p>
              Leia o trecho de uma entrevista com um pesquisador:
              <br /><br />
              <em>"In 2018, our team <strong>identified</strong> the compound. Since then, we
              <strong>have conducted</strong> over 200 experiments and <strong>have published</strong>
              three papers. Last month, we <strong>submitted</strong> our findings to the
              WHO."</em>
              <br /><br />
              O uso alternado de Simple Past e Present Perfect indica que:
            </p>
          }
          options={[
            { letter: "A", text: "O texto mistura tempos verbais incorretamente." },
            { letter: "B", text: "Simple Past é usado para o fato mais importante; Present Perfect, para os menos relevantes." },
            { letter: "C", text: "Simple Past narra eventos com data ou período específico; Present Perfect expressa o acúmulo de resultados relevantes até o presente.", correct: true },
            { letter: "D", text: "Ambos os tempos são intercambiáveis em contextos científicos." },
            { letter: "E", text: "O Simple Past indica mais certeza que o Present Perfect." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O texto alterna os dois tempos com
              precisão: <em>"identified"</em> (Simple Past) marca o evento com data específica
              (2018). <em>"have conducted"</em> e <em>"have published"</em> (Present Perfect)
              usam <em>since then</em> para expressar o acúmulo de trabalho desde aquele marco
              até o presente. <em>"submitted"</em> (Simple Past) volta ao passado específico
              (<em>last month</em>). Esse é o padrão clássico em textos científicos: datas
              específicas → Simple Past; acumulação até o presente → Present Perfect. A opção
              A está errada — a alternância é intencional e gramaticalmente correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Present Perfect em Texto Ambiental"
          statement={
            <p>
              Leia o trecho de uma campanha ambiental:
              <br /><br />
              <em>"In the past 50 years, humans <strong>have destroyed</strong> more than half
              of the world's forests. Species <strong>have disappeared</strong> at an
              unprecedented rate. The ocean <strong>has absorbed</strong> 93% of the excess
              heat generated by global warming."</em>
              <br /><br />
              O uso do Present Perfect no texto tem como função principal:
            </p>
          }
          options={[
            { letter: "A", text: "Relatar eventos históricos específicos ocorridos em datas determinadas." },
            { letter: "B", text: "Apresentar previsões científicas sobre o futuro do planeta." },
            { letter: "C", text: "Enfatizar o acúmulo de danos ambientais com impacto direto e urgente no presente.", correct: true },
            { letter: "D", text: "Descrever ações que estão acontecendo no exato momento." },
            { letter: "E", text: "Narrar a sequência cronológica de eventos passados já encerrados." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O Present Perfect é escolhido
              deliberadamente nesse texto para criar um senso de acúmulo e urgência: as ações
              (<em>destroyed, disappeared, absorbed</em>) aconteceram ao longo do tempo e seus
              efeitos são <strong>relevantes e urgentes agora</strong>. Esse é um recurso
              retórico típico de campanhas e manifestos ambientais — o Present Perfect transforma
              fatos passados em alertas presentes. Se fosse Simple Past, os eventos pareceriam
              encerrados e distantes. A opção A está errada: não há datas específicas (o período
              "50 years" é duração, não data). D descreve Present Continuous. E descreve Simple Past.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="For e Since em Contexto"
          statement={
            <p>
              Leia o perfil profissional:
              <br /><br />
              <em>"Dr. Santos has been a researcher at USP ______ 2005. She has published
              more than 60 articles ______ the past two decades and has been collaborating
              with international universities ______ several years."</em>
              <br /><br />
              A sequência correta de preposições é:
            </p>
          }
          options={[
            { letter: "A", text: "for / for / since" },
            { letter: "B", text: "since / in / for" },
            { letter: "C", text: "since / for / for", correct: true },
            { letter: "D", text: "for / since / for" },
            { letter: "E", text: "since / since / since" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C — since / for / for</strong>. Primeira lacuna:
              <em>2005</em> é um ponto específico no passado (ano) → usa-se <em>since</em>.
              Segunda lacuna: <em>the past two decades</em> é uma duração (vinte anos) →
              usa-se <em>for</em>. Terceira lacuna: <em>several years</em> é também uma
              duração (alguns anos, quantidade) → usa-se <em>for</em>. A regra prática
              é: se o que se segue é um número ou quantidade de tempo → <em>for</em>; se
              é um ponto de referência (data, evento, dia) → <em>since</em>.
            </p>
          }
        />
      </section>
    </article>
  );
}
