"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 12</span>
          <h1>Past Perfect e Future Perfect</h1>
          <p>
            Dois tempos verbais que expressam relações de <strong>anterioridade</strong>:
            o Past Perfect situa uma ação antes de outra no passado; o Future Perfect
            projeta uma ação como concluída antes de um ponto no futuro. Reconhecê-los
            em textos é essencial para entender a ordem dos acontecimentos — e o ENEM
            cobra exatamente isso.
          </p>
          <p>
            Neste capítulo você vai aprender a formação, os marcadores temporais,
            as diferenças críticas em relação ao Simple Past e ao Simple Future,
            e como identificar esses tempos sem precisar analisar a gramática
            de forma explícita durante a prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>1. Past Perfect — Formação e Estrutura</h2>
        <p>
          O Past Perfect é formado por <strong>had + past participle</strong> (terceira
          coluna dos verbos irregulares, ou verbo regular com -ed). É invariável:
          não muda com o sujeito — I had, she had, they had.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afirmativa</td>
                <td>had + past participle</td>
                <td>She <strong>had left</strong> before I arrived.</td>
              </tr>
              <tr>
                <td>Negativa</td>
                <td>had not (hadn't) + past participle</td>
                <td>They <strong>hadn't finished</strong> the report.</td>
              </tr>
              <tr>
                <td>Interrogativa</td>
                <td>Had + sujeito + past participle?</td>
                <td><strong>Had</strong> he <strong>seen</strong> the news?</td>
              </tr>
              <tr>
                <td>Contínua</td>
                <td>had been + verbo -ing</td>
                <td>It <strong>had been raining</strong> all morning.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Ponto de atenção:</strong> O past participle de verbos irregulares
          precisa ser memorizado (go → gone, write → written, take → taken). Para
          verbos regulares, é simplesmente -ed (work → worked).
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Significado</span>
        <h2>2. Past Perfect — Quando e Por Que Usar</h2>
        <p>
          O Past Perfect expressa que uma ação ocorreu <strong>antes de outra
          ação no passado</strong>. É o "passado do passado". Sem ele, a ordem
          dos eventos pode se tornar ambígua.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏮️</span>
            <h3>Ação anterior</h3>
            <p>A ação em Past Perfect aconteceu primeiro; a outra (Simple Past) veio depois.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Referência temporal</h3>
            <p>Sempre há um ponto de referência no passado — seja explícito (when, before) ou implícito.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Causa e efeito</h3>
            <p>Frequentemente explica por que algo aconteceu: "He was tired because he had worked all night."</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Narrativas e jornalismo</h3>
            <p>Muito usado em textos narrativos e reportagens para recuar no tempo dentro de uma história.</p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos narrativos, quando o autor "recua
          no tempo" para explicar como um evento ocorreu, ele usa Past Perfect.
          Reconhecer esse recuo é a chave para entender a ordem cronológica do texto.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores</span>
        <h2>3. Palavras-gatilho do Past Perfect</h2>
        <p>
          Certos conectores e expressões temporais costumam acompanhar o Past
          Perfect e funcionam como sinais de que haverá uma relação de
          anterioridade no texto:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marcador</th>
                <th>Tradução</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>before</em></td>
                <td>antes</td>
                <td>She had called him <em>before</em> leaving.</td>
              </tr>
              <tr>
                <td><em>after</em></td>
                <td>depois</td>
                <td><em>After</em> he had finished, they left.</td>
              </tr>
              <tr>
                <td><em>already</em></td>
                <td>já</td>
                <td>They had <em>already</em> sold the house.</td>
              </tr>
              <tr>
                <td><em>when</em></td>
                <td>quando</td>
                <td><em>When</em> I arrived, he had gone.</td>
              </tr>
              <tr>
                <td><em>by the time</em></td>
                <td>quando / até o momento em que</td>
                <td><em>By the time</em> she arrived, we had eaten.</td>
              </tr>
              <tr>
                <td><em>never … before</em></td>
                <td>nunca … antes</td>
                <td>I had <em>never</em> seen such a storm <em>before</em>.</td>
              </tr>
              <tr>
                <td><em>just</em></td>
                <td>acabara de / recém</td>
                <td>He had <em>just</em> arrived when she called.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linha do tempo</span>
        <h2>4. Visualizando o Past Perfect</h2>
        <p>
          O diagrama abaixo mostra a relação temporal entre o Past Perfect e o
          Simple Past em uma frase como: <em>"By the time the ambulance arrived,
          the doctor had already treated the patient."</em>
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 180" aria-label="Linha do tempo do Past Perfect" role="img">
            {/* Linha do tempo */}
            <line x1="60" y1="90" x2="640" y2="90" stroke="#9ca3af" strokeWidth="2" />
            {/* Seta direita */}
            <polygon points="640,86 652,90 640,94" fill="#9ca3af" />
            {/* Label PASSADO / PRESENTE */}
            <text x="60" y="115" textAnchor="middle" fill="#6b7280" fontSize="11">← PASSADO</text>
            <text x="640" y="115" textAnchor="middle" fill="#6b7280" fontSize="11">PRESENTE →</text>

            {/* Evento 1 — Past Perfect */}
            <circle cx="200" cy="90" r="10" fill="#4f46e5" />
            <line x1="200" y1="80" x2="200" y2="40" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="4" />
            <rect x="100" y="15" width="200" height="30" rx="6" fill="#e0e7ff" />
            <text x="200" y="27" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Past Perfect</text>
            <text x="200" y="41" textAnchor="middle" fill="#3730a3" fontSize="10">The doctor had treated</text>

            {/* Evento 2 — Simple Past */}
            <circle cx="420" cy="90" r="10" fill="#059669" />
            <line x1="420" y1="80" x2="420" y2="40" stroke="#059669" strokeWidth="1.5" strokeDasharray="4" />
            <rect x="320" y="15" width="200" height="30" rx="6" fill="#d1fae5" />
            <text x="420" y="27" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">Simple Past</text>
            <text x="420" y="41" textAnchor="middle" fill="#065f46" fontSize="10">the ambulance arrived</text>

            {/* Seta entre eventos */}
            <line x1="210" y1="90" x2="408" y2="90" stroke="#374151" strokeWidth="1.5" strokeDasharray="6,3" />
            <polygon points="408,86 420,90 408,94" fill="#374151" />
            <text x="310" y="145" textAnchor="middle" fill="#374151" fontSize="11">1º aconteceu → 2º aconteceu</text>
          </svg>
          <figcaption>
            O evento em Past Perfect (azul) ocorre antes do evento em Simple Past (verde).
            "By the time" é o marcador que conecta os dois momentos.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diferença crucial</span>
        <h2>5. Simple Past vs. Past Perfect — A Diferença que o ENEM Cobra</h2>
        <p>
          A distinção entre Simple Past e Past Perfect é sutil mas decisiva para
          a interpretação de textos. Veja o contraste:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Frase</th>
                <th>Interpretação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>When she arrived, he <strong>left</strong>. (Simple Past)</td>
                <td>Ela chegou e então ele foi embora — ações sequenciais.</td>
              </tr>
              <tr>
                <td>When she arrived, he <strong>had left</strong>. (Past Perfect)</td>
                <td>Quando ela chegou, ele já havia ido — ela não o encontrou.</td>
              </tr>
              <tr>
                <td>I <strong>read</strong> the book you recommended. (Simple Past)</td>
                <td>Li o livro em algum ponto do passado, sem relação com outro evento.</td>
              </tr>
              <tr>
                <td>I <strong>had read</strong> the book when she asked. (Past Perfect)</td>
                <td>Já havia lido antes de ela perguntar — anterioridade explícita.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>6. Future Perfect — Formação e Estrutura</h2>
        <p>
          O Future Perfect é formado por <strong>will have + past participle</strong>.
          Ele afirma que uma ação estará concluída antes de um momento específico
          no futuro.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afirmativa</td>
                <td>will have + past participle</td>
                <td>By 2030, they <strong>will have built</strong> 500 schools.</td>
              </tr>
              <tr>
                <td>Negativa</td>
                <td>will not (won't) have + pp</td>
                <td>She <strong>won't have finished</strong> by then.</td>
              </tr>
              <tr>
                <td>Interrogativa</td>
                <td>Will + sujeito + have + pp?</td>
                <td><strong>Will</strong> you <strong>have arrived</strong> by noon?</td>
              </tr>
              <tr>
                <td>Contínua</td>
                <td>will have been + verbo -ing</td>
                <td>By May, I <strong>will have been working</strong> here for 10 years.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Marcadores típicos do Future Perfect:</strong> <em>by</em>,
          <em> by then</em>, <em>by the time</em>, <em>by next year</em>,
          <em> before</em> + data/evento futuro.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na prática</span>
        <h2>7. Como o ENEM Usa Esses Tempos</h2>
        <p>
          O ENEM não pede que você nomeie ou conjugue o Past Perfect ou Future
          Perfect. O que ele cobra é a <strong>interpretação do sentido temporal</strong>:
          entender que algo ocorreu antes de outra coisa, ou que estará concluído
          antes de um prazo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Reportagens</h3>
            <p>Usam Past Perfect para narrar o histórico de um evento antes de descrever o presente.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Textos científicos</h3>
            <p>Future Perfect aparece em projeções: "By 2050, scientists will have mapped…"</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Narrativas literárias</h3>
            <p>Past Perfect cria flashbacks e explica motivações de personagens.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Textos ambientais</h3>
            <p>Future Perfect em projeções climáticas e metas de sustentabilidade.</p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando o texto trocar de tempo verbal
          abruptamente — do Simple Past para "had + pp" — é sinal de que o autor
          está recuando no tempo para explicar uma causa ou contexto anterior.
          Preste atenção especial nesses momentos.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo visual</span>
        <h2>8. Mapa dos Tempos Perfeitos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" aria-label="Mapa comparativo Past Perfect e Future Perfect" role="img">
            {/* Caixa Past Perfect */}
            <rect x="30" y="20" width="290" height="180" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="175" y="48" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">PAST PERFECT</text>
            <text x="175" y="68" textAnchor="middle" fill="#1e40af" fontSize="11">had + past participle</text>
            <rect x="50" y="80" width="250" height="26" rx="5" fill="#dbeafe" />
            <text x="175" y="98" textAnchor="middle" fill="#1e40af" fontSize="11">Ação ANTERIOR a outra no passado</text>
            <rect x="50" y="115" width="250" height="26" rx="5" fill="#dbeafe" />
            <text x="175" y="133" textAnchor="middle" fill="#1e40af" fontSize="11">Marcadores: before, after, when, already</text>
            <rect x="50" y="150" width="250" height="34" rx="5" fill="#dbeafe" />
            <text x="175" y="164" textAnchor="middle" fill="#1e40af" fontSize="10">"By the time he arrived,</text>
            <text x="175" y="178" textAnchor="middle" fill="#1e40af" fontSize="10">she had already left."</text>

            {/* Caixa Future Perfect */}
            <rect x="380" y="20" width="290" height="180" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
            <text x="525" y="48" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold">FUTURE PERFECT</text>
            <text x="525" y="68" textAnchor="middle" fill="#166534" fontSize="11">will have + past participle</text>
            <rect x="400" y="80" width="250" height="26" rx="5" fill="#dcfce7" />
            <text x="525" y="98" textAnchor="middle" fill="#166534" fontSize="11">Ação concluída ANTES de ponto futuro</text>
            <rect x="400" y="115" width="250" height="26" rx="5" fill="#dcfce7" />
            <text x="525" y="133" textAnchor="middle" fill="#166534" fontSize="11">Marcadores: by, by then, by next year</text>
            <rect x="400" y="150" width="250" height="34" rx="5" fill="#dcfce7" />
            <text x="525" y="164" textAnchor="middle" fill="#166534" fontSize="10">"By 2030, they will have</text>
            <text x="525" y="178" textAnchor="middle" fill="#166534" fontSize="10">reduced emissions by 50%."</text>
          </svg>
          <figcaption>Comparativo visual entre Past Perfect e Future Perfect: estrutura, uso e marcadores.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>9. Erros Comuns na Interpretação</h2>
        <ul>
          <li>
            <strong>Confundir "had" auxiliar com "had" principal:</strong> "She had a car"
            usa had como verbo principal (tinha), não como auxiliar do Past Perfect.
          </li>
          <li>
            <strong>Ignorar "had" em leitura rápida:</strong> Ler "he had gone" como
            "he gone" muda completamente o sentido temporal.
          </li>
          <li>
            <strong>Assumir sequência = Simple Past:</strong> Quando o texto usa Past
            Perfect, a ordem de narração pode não corresponder à ordem cronológica.
          </li>
          <li>
            <strong>Future Perfect vs. Future Continuous:</strong> "will have finished"
            (concluído antes de um prazo) ≠ "will be finishing" (em andamento no futuro).
          </li>
        </ul>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação do Past Perfect"
          statement={
            <p>
              Na frase: <em>"When the investigators arrived at the scene, the suspect
              had already escaped through the back door."</em> — qual é o sentido
              expresso pelo Past Perfect <strong>had escaped</strong>?
            </p>
          }
          options={[
            { letter: "A", text: "O suspeito fugiu depois que os investigadores chegaram." },
            { letter: "B", text: "O suspeito fugiu ao mesmo tempo que os investigadores chegaram." },
            { letter: "C", text: "O suspeito já havia fugido antes da chegada dos investigadores.", correct: true },
            { letter: "D", text: "Os investigadores impediram a fuga do suspeito." },
            { letter: "E", text: "A fuga do suspeito está descrita em tempo presente." },
          ]}
          resolution={
            <p>
              O Past Perfect <em>had escaped</em> indica que a fuga ocorreu
              <strong> antes</strong> da chegada dos investigadores. O marcador
              <em> already</em> reforça essa anterioridade. A alternativa C
              captura exatamente esse sentido. As alternativas A e B invertem ou
              tornam simultâneas as ações, contradizendo a gramática e o marcador.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Simple Past vs. Past Perfect"
          statement={
            <p>
              Compare as duas frases e identifique a diferença de sentido:
              <br /><br />
              I — <em>"When Maria arrived, João <strong>left</strong>."</em>
              <br />
              II — <em>"When Maria arrived, João <strong>had left</strong>."</em>
            </p>
          }
          options={[
            { letter: "A", text: "Em ambas as frases, João saiu depois que Maria chegou." },
            { letter: "B", text: "Na frase I, João saiu depois de Maria chegar; na frase II, ele já havia saído antes.", correct: true },
            { letter: "C", text: "Na frase II, João e Maria saíram juntos." },
            { letter: "D", text: "A diferença é apenas estilística; o sentido é idêntico nas duas frases." },
            { letter: "E", text: "Na frase I, Maria chegou antes; na frase II, Maria nunca chegou." },
          ]}
          resolution={
            <p>
              Esta é a diferença fundamental: <em>left</em> (Simple Past) indica
              sequência — primeiro Maria chegou, depois João foi embora. Já
              <em> had left</em> (Past Perfect) indica que João já havia ido antes
              de Maria chegar — ela não o encontrou. Essa distinção é exatamente
              o que o ENEM avalia ao perguntar sobre a relação temporal entre
              eventos em textos narrativos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Future Perfect em texto científico"
          statement={
            <div>
              <p><em>(Trecho adaptado de texto sobre mudanças climáticas)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "According to current projections, by 2050, global average
                temperatures <strong>will have risen</strong> by at least 1.5°C
                above pre-industrial levels. Many coastal cities that currently
                house millions of people <strong>will have been partially submerged</strong>
                by that point."
              </p>
              <p>O uso do Future Perfect no trecho indica que:</p>
            </div>
          }
          options={[
            { letter: "A", text: "As temperaturas já subiram 1,5°C acima dos níveis pré-industriais." },
            { letter: "B", text: "O aumento de temperatura e a submersão das cidades são eventos do passado." },
            { letter: "C", text: "Esses fenômenos são apresentados como certamente concluídos antes de 2050, de acordo com projeções.", correct: true },
            { letter: "D", text: "O autor acredita que esses eventos não irão acontecer." },
            { letter: "E", text: "O Future Perfect indica incerteza — os eventos podem ou não ocorrer." },
          ]}
          resolution={
            <p>
              O Future Perfect <em>will have risen</em> e <em>will have been
              submerged</em> projetam eventos como <strong>concluídos antes de
              2050</strong>, um ponto no futuro. O contexto "according to current
              projections" mostra que se trata de uma projeção, não de certeza
              absoluta — mas o tempo verbal em si afirma que, se as projeções
              estiverem corretas, os eventos estarão concluídos. A alternativa C
              é a mais precisa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Past Perfect em reportagem"
          statement={
            <div>
              <p><em>(Trecho adaptado de reportagem jornalística)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The fire broke out at 3 a.m. last Saturday. Firefighters
                arrived forty minutes later, but by then the blaze <strong>had
                already destroyed</strong> two floors of the building. Fortunately,
                residents <strong>had been evacuated</strong> hours before the
                fire started, as authorities <strong>had received</strong> a tip
                about a gas leak."
              </p>
              <p>Com base no Past Perfect, a ordem cronológica correta dos eventos é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Incêndio → evacuação dos moradores → dica sobre o gás → chegada dos bombeiros." },
            { letter: "B", text: "Dica sobre o gás → evacuação dos moradores → incêndio → chegada dos bombeiros.", correct: true },
            { letter: "C", text: "Chegada dos bombeiros → incêndio → evacuação dos moradores." },
            { letter: "D", text: "Incêndio → dica sobre o gás → evacuação dos moradores → bombeiros." },
            { letter: "E", text: "Não é possível determinar a ordem cronológica pelo texto." },
          ]}
          resolution={
            <p>
              O Past Perfect revela a sequência real: as autoridades
              <em> had received</em> a dica → os moradores <em>had been evacuated</em>
              → o fogo <em>broke out</em> (Simple Past) → os bombeiros <em>arrived</em>
              (Simple Past). A narrativa começa pelo incêndio, mas os verbos no
              Past Perfect mostram o que veio antes. A alternativa B reproduz
              corretamente essa ordem cronológica.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Future Perfect — metas e projeções"
          statement={
            <div>
              <p><em>(Trecho adaptado de relatório de ONG ambiental)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The organization is confident that, by the end of this decade,
                it <strong>will have planted</strong> over one million trees across
                the Amazon region. Community volunteers play a crucial role:
                by next March, local teams <strong>will have completed</strong>
                training programs in 40 municipalities."
              </p>
              <p>O trecho usa o Future Perfect principalmente para:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Descrever ações que já foram concluídas no passado." },
            { letter: "B", text: "Expressar dúvida sobre se as metas serão atingidas." },
            { letter: "C", text: "Projetar ações que estarão concluídas antes de prazos futuros específicos.", correct: true },
            { letter: "D", text: "Narrar eventos que ocorreram simultaneamente no passado." },
            { letter: "E", text: "Indicar ações contínuas e ininterruptas no futuro." },
          ]}
          resolution={
            <p>
              O Future Perfect <em>will have planted</em> e <em>will have
              completed</em> são usados aqui para comunicar metas com prazo:
              "by the end of this decade" e "by next March" são os marcos
              futuros antes dos quais as ações estarão concluídas. Esse é o
              uso típico do Future Perfect em textos institucionais, relatórios
              e textos de divulgação — muito cobrado no ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
