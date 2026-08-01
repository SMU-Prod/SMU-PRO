"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 15</span>

          <h1>Discurso Direto e Indireto — Reported Speech</h1>

          <p>
            Quando reproduzimos o que alguém disse, temos duas opções: citar as palavras
            exatas entre aspas — <strong>Direct Speech</strong> — ou reformular o discurso
            adaptando verbos, pronomes e expressões de tempo —{" "}
            <strong>Indirect Speech</strong> (Reported Speech). Dominar essa estrutura é
            fundamental para ler textos jornalísticos, acadêmicos e literários cobrados
            pelo ENEM com segurança e precisão.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>

        <h2>1. O que é Reported Speech?</h2>

        <p>
          O <strong>Reported Speech</strong> (também chamado de <em>Indirect Speech</em>
          ou <em>discurso indireto</em>) é a forma que usamos para relatar o que alguém
          disse sem repetir as palavras originais entre aspas. Em vez de reproduzir a fala
          diretamente, o falante a integra à sua própria sentença, geralmente introduzida
          por um <strong>reporting verb</strong> como <em>say</em>, <em>tell</em>,{" "}
          <em>report</em>, <em>claim</em> etc.
        </p>

        <div className="lesson-highlight">
          <h3>Comparação direta</h3>
          <p>
            <strong>Direct Speech:</strong> She said, <em>"I am very tired."</em>
            <br />
            <strong>Indirect Speech:</strong> She said (that) she <em>was</em> very tired.
          </p>
          <p>
            Observe: as aspas desapareceram, o pronome <em>I</em> mudou para <em>she</em>,
            e o verbo <em>am</em> recuou um tempo no passado, tornando-se <em>was</em>.
            Esse recuo é chamado de <strong>backshift</strong>.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💬</span>
            <h3>Direct Speech</h3>
            <p>
              As palavras originais do falante aparecem entre aspas, exatamente como foram
              ditas. Ex: He said, <em>"I will call you."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Indirect Speech</h3>
            <p>
              O discurso é reformulado e integrado à frase. Ex: He said (that) he{" "}
              <em>would</em> call me. Aspas e vírgula desaparecem.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Backshift</h3>
            <p>
              Quando o verbo introdutório (say, tell, report…) está no passado, os verbos
              da fala relatada "recuam" um tempo verbal para o passado.
            </p>
          </div>
        </div>

        <p>
          O conector <strong>that</strong> (que) é opcional em inglês, mas frequentemente
          presente: <em>She said <strong>that</strong> she was tired.</em> Sua omissão não
          muda o sentido. Em textos formais e jornalísticos, o <em>that</em> costuma
          aparecer para deixar o limite entre o verbo introdutório e o discurso relatado
          mais claro.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Backshift</span>

        <h2>2. Backshift: A Mudança dos Tempos Verbais</h2>

        <p>
          A regra mais importante do Reported Speech é o <strong>backshift</strong>: quando
          o verbo introdutório está no <em>passado</em>, os verbos da fala original
          "recuam" um grau no passado. Pense nisso como uma linha do tempo — cada tempo
          verbal dá um passo atrás.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama de backshift mostrando a transformação dos tempos verbais no Reported Speech"
          >
            <defs>
              <marker id="arr15" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>

            {/* Coluna esquerda — Direct Speech */}
            <rect x={10} y={10} width={290} height={30} rx={6} fill="#e0e7ff" />
            <text x={155} y={30} textAnchor="middle" fontSize={13} fontWeight={800} fill="#3730a3">
              DIRECT SPEECH
            </text>

            {[
              { y: 55,  label: "Simple Present",    ex: '"I work here."',        fill: "#eff6ff", stroke: "#3b82f6" },
              { y: 90,  label: "Simple Past",        ex: '"She left early."',     fill: "#f0fdf4", stroke: "#22c55e" },
              { y: 125, label: "Present Perfect",    ex: '"They have arrived."',  fill: "#faf5ff", stroke: "#a855f7" },
              { y: 160, label: "will / can / may",   ex: '"It will rain."',       fill: "#fff7ed", stroke: "#f97316" },
              { y: 195, label: "must / have to",     ex: '"You must go."',        fill: "#fef2f2", stroke: "#ef4444" },
            ].map((item) => (
              <g key={item.y}>
                <rect x={10} y={item.y} width={290} height={26} rx={5} fill={item.fill} stroke={item.stroke} strokeWidth={1.5} />
                <text x={20} y={item.y + 11} fontSize={11} fontWeight={700} fill="#1e293b">{item.label}</text>
                <text x={20} y={item.y + 22} fontSize={10} fill="#475569" fontStyle="italic">{item.ex}</text>
              </g>
            ))}

            {/* Setas */}
            {[55, 90, 125, 160, 195].map((y) => (
              <line
                key={y}
                x1={302}
                y1={y + 13}
                x2={388}
                y2={y + 13}
                stroke="#6366f1"
                strokeWidth={2}
                markerEnd="url(#arr15)"
              />
            ))}

            {/* Coluna direita — Indirect Speech */}
            <rect x={400} y={10} width={290} height={30} rx={6} fill="#e0e7ff" />
            <text x={545} y={30} textAnchor="middle" fontSize={13} fontWeight={800} fill="#3730a3">
              INDIRECT SPEECH
            </text>

            {[
              { y: 55,  label: "Simple Past",        ex: "…said he worked there.",       fill: "#eff6ff", stroke: "#3b82f6" },
              { y: 90,  label: "Past Perfect",        ex: "…said she had left early.",    fill: "#f0fdf4", stroke: "#22c55e" },
              { y: 125, label: "Past Perfect",        ex: "…said they had arrived.",      fill: "#faf5ff", stroke: "#a855f7" },
              { y: 160, label: "would / could / might", ex: "…said it would rain.",       fill: "#fff7ed", stroke: "#f97316" },
              { y: 195, label: "had to",              ex: "…said I had to go.",           fill: "#fef2f2", stroke: "#ef4444" },
            ].map((item) => (
              <g key={item.y}>
                <rect x={400} y={item.y} width={290} height={26} rx={5} fill={item.fill} stroke={item.stroke} strokeWidth={1.5} />
                <text x={410} y={item.y + 11} fontSize={11} fontWeight={700} fill="#1e293b">{item.label}</text>
                <text x={410} y={item.y + 22} fontSize={10} fill="#475569" fontStyle="italic">{item.ex}</text>
              </g>
            ))}
          </svg>
          <figcaption>
            Diagrama de backshift: cada tempo verbal do Direct Speech recua um grau no
            Indirect Speech quando o verbo introdutório está no passado.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo original (Direct)</th>
                <th>Após backshift (Indirect)</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Simple Present</strong><br /><em>am / is / are</em></td>
                <td>Simple Past<br /><em>was / were</em></td>
                <td>"I <em>am</em> hungry." → He said he <em>was</em> hungry.</td>
              </tr>
              <tr>
                <td><strong>Simple Past</strong><br /><em>worked / ate</em></td>
                <td>Past Perfect<br /><em>had worked / had eaten</em></td>
                <td>"She <em>left</em>." → He said she <em>had left</em>.</td>
              </tr>
              <tr>
                <td><strong>Present Continuous</strong><br /><em>is working</em></td>
                <td>Past Continuous<br /><em>was working</em></td>
                <td>"They <em>are playing</em>." → He said they <em>were playing</em>.</td>
              </tr>
              <tr>
                <td><strong>Present Perfect</strong><br /><em>have/has done</em></td>
                <td>Past Perfect<br /><em>had done</em></td>
                <td>"I <em>have finished</em>." → She said she <em>had finished</em>.</td>
              </tr>
              <tr>
                <td><strong>will</strong></td>
                <td><strong>would</strong></td>
                <td>"It <em>will</em> rain." → He said it <em>would</em> rain.</td>
              </tr>
              <tr>
                <td><strong>can</strong></td>
                <td><strong>could</strong></td>
                <td>"I <em>can</em> help." → She said she <em>could</em> help.</td>
              </tr>
              <tr>
                <td><strong>may</strong></td>
                <td><strong>might</strong></td>
                <td>"It <em>may</em> snow." → He said it <em>might</em> snow.</td>
              </tr>
              <tr>
                <td><strong>must</strong></td>
                <td><strong>had to</strong></td>
                <td>"You <em>must</em> leave." → She said I <em>had to</em> leave.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Quando NÃO ocorre backshift</h3>
          <p>
            Se o verbo introdutório estiver no <strong>presente</strong> (<em>says, tells,
            reports</em>), ou se o fato relatado ainda é <strong>verdadeiro ou atual</strong>,
            o backshift é opcional. Exemplos:
          </p>
          <p>
            <em>"The Earth orbits the Sun."</em> → He says (that) the Earth{" "}
            <strong>orbits</strong> the Sun. (verdade permanente — sem backshift)
          </p>
          <p>
            Verbos modais como <em>would, could, might, should</em> e{" "}
            <em>ought to</em> já estão em sua forma "de passado" — eles{" "}
            <strong>não mudam</strong> no Reported Speech.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 3 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes</span>

        <h2>3. Mudanças de Pronomes</h2>

        <p>
          Além dos tempos verbais, os <strong>pronomes pessoais, possessivos e reflexivos</strong>{" "}
          também mudam no Reported Speech para refletir o ponto de vista de quem relata a
          fala, e não de quem a proferiu originalmente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direct Speech</th>
                <th>Pronome original</th>
                <th>Pronome no Indirect</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"<strong>I</strong> love music."</td>
                <td>I (sujeito)</td>
                <td>he / she / they…</td>
                <td>She said <strong>she</strong> loved music.</td>
              </tr>
              <tr>
                <td>"<strong>My</strong> car is new."</td>
                <td>my (possessivo)</td>
                <td>his / her / their…</td>
                <td>He said <strong>his</strong> car was new.</td>
              </tr>
              <tr>
                <td>"I did it <strong>myself</strong>."</td>
                <td>myself (reflexivo)</td>
                <td>himself / herself…</td>
                <td>She said she had done it <strong>herself</strong>.</td>
              </tr>
              <tr>
                <td>"<strong>We</strong> are ready."</td>
                <td>we</td>
                <td>they</td>
                <td>They said <strong>they</strong> were ready.</td>
              </tr>
              <tr>
                <td>"Can <strong>you</strong> help <strong>me</strong>?"</td>
                <td>you / me</td>
                <td>I (ou nome) / him/her</td>
                <td>She asked if <strong>I</strong> could help <strong>her</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica prática</h3>
          <p>
            Sempre identifique <strong>quem falou</strong> e <strong>quem está
            relatando</strong> antes de trocar os pronomes. Pergunte-se: "De quem
            está falando agora?" O pronome do Indirect Speech deve corresponder à
            pessoa correta do ponto de vista do narrador.
          </p>
          <p>
            Exemplo: <em>"I forgot <strong>your</strong> name,"</em> she told me.
            → She told me (that) she had forgotten <strong>my</strong> name.
            (<em>your</em> → <em>my</em> porque agora é o ponto de vista de quem
            relata)
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 4 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Expressões de Tempo e Lugar</span>

        <h2>4. Mudanças nas Expressões de Tempo e Lugar</h2>

        <p>
          Palavras que indicam <strong>tempo</strong> e <strong>lugar</strong> também
          precisam ser ajustadas no Reported Speech, pois o contexto de tempo e espaço
          muda entre o momento da fala original e o momento em que ela é relatada.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Diagrama visual das mudanças de expressões de tempo e lugar no Reported Speech"
          >
            <defs>
              <marker id="arr15b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#0891b2" />
              </marker>
            </defs>

            {/* Cabeçalho */}
            <rect x={10} y={8} width={310} height={28} rx={6} fill="#cffafe" stroke="#0891b2" strokeWidth={1.5} />
            <text x={165} y={27} textAnchor="middle" fontSize={13} fontWeight={800} fill="#164e63">
              DIRECT SPEECH
            </text>
            <rect x={380} y={8} width={310} height={28} rx={6} fill="#cffafe" stroke="#0891b2" strokeWidth={1.5} />
            <text x={535} y={27} textAnchor="middle" fontSize={13} fontWeight={800} fill="#164e63">
              INDIRECT SPEECH
            </text>

            {[
              { dir: "now",          ind: "then / at that moment",    cat: "tempo",  col: "#0e7490" },
              { dir: "today",        ind: "that day",                  cat: "tempo",  col: "#0e7490" },
              { dir: "tomorrow",     ind: "the next day / the following day", cat: "tempo", col: "#0e7490" },
              { dir: "yesterday",    ind: "the day before / the previous day", cat: "tempo", col: "#0e7490" },
              { dir: "this week",    ind: "that week",                 cat: "tempo",  col: "#0e7490" },
              { dir: "last year",    ind: "the year before",           cat: "tempo",  col: "#0e7490" },
              { dir: "here",         ind: "there",                     cat: "lugar",  col: "#7c3aed" },
              { dir: "this / these", ind: "that / those",              cat: "demo",   col: "#b45309" },
            ].map((item, i) => {
              const y = 48 + i * 26;
              const fillDir = item.cat === "lugar" ? "#ede9fe" : item.cat === "demo" ? "#fef3c7" : "#ecfeff";
              const fillInd = item.cat === "lugar" ? "#ede9fe" : item.cat === "demo" ? "#fef3c7" : "#ecfeff";
              return (
                <g key={item.dir}>
                  <rect x={10} y={y} width={310} height={22} rx={4} fill={fillDir} stroke={item.col} strokeWidth={1} />
                  <text x={20} y={y + 15} fontSize={11} fontWeight={700} fill={item.col}>{item.dir}</text>

                  <line x1={322} y1={y + 11} x2={377} y2={y + 11} stroke="#0891b2" strokeWidth={1.5} markerEnd="url(#arr15b)" />

                  <rect x={380} y={y} width={310} height={22} rx={4} fill={fillInd} stroke={item.col} strokeWidth={1} />
                  <text x={390} y={y + 15} fontSize={11} fill="#1e293b">{item.ind}</text>
                </g>
              );
            })}
          </svg>
          <figcaption>
            Correspondência entre expressões de tempo e lugar no Direct Speech e suas
            equivalentes no Indirect Speech.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Exemplos em contexto</h3>
          <p>
            "I will call you <strong>tomorrow</strong>," he said.
            → He said he would call me <strong>the next day</strong>.
          </p>
          <p>
            "We arrived <strong>yesterday</strong>," they told us.
            → They told us they had arrived <strong>the day before</strong>.
          </p>
          <p>
            "Come <strong>here</strong> now!" she said.
            → She told me to go <strong>there</strong> immediately.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>now → then</h3>
            <p>
              <em>"I need help <strong>now</strong>."</em> → She said she needed help{" "}
              <strong>then</strong> / <strong>at that moment</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📆</span>
            <h3>today → that day</h3>
            <p>
              <em>"The exam is <strong>today</strong>."</em> → He said the exam was{" "}
              <strong>that day</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>here → there</h3>
            <p>
              <em>"Wait <strong>here</strong>."</em> → She told me to wait{" "}
              <strong>there</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ======================== SEÇÃO 5 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Reporting Verbs</span>

        <h2>5. Reporting Verbs: muito além de "say" e "tell"</h2>

        <p>
          Em vez de apenas <em>say</em> ou <em>tell</em>, a língua inglesa — especialmente
          em contextos jornalísticos e acadêmicos — usa uma vasta gama de{" "}
          <strong>reporting verbs</strong> (verbos de relato) que já carregam uma nuance
          de significado, eliminando a necessidade de explicações adicionais. Identificá-los
          é essencial para compreender textos do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Reporting Verb</th>
                <th>Tradução / nuance</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>say</strong></td>
                <td>dizer</td>
                <td>say (that) + clause</td>
                <td>She <em>said</em> (that) she was tired.</td>
              </tr>
              <tr>
                <td><strong>tell</strong></td>
                <td>contar, informar</td>
                <td>tell + object + (that) + clause</td>
                <td>He <em>told</em> me (that) he was late.</td>
              </tr>
              <tr>
                <td><strong>ask</strong></td>
                <td>perguntar / pedir</td>
                <td>ask (+ object) + if/wh / to-inf</td>
                <td>She <em>asked</em> if I was ready.</td>
              </tr>
              <tr>
                <td><strong>report</strong></td>
                <td>relatar, noticiar</td>
                <td>report (that) + clause</td>
                <td>The paper <em>reported</em> that prices had risen.</td>
              </tr>
              <tr>
                <td><strong>claim</strong></td>
                <td>afirmar (com ceticismo)</td>
                <td>claim (that) + clause</td>
                <td>He <em>claimed</em> (that) he had never been there.</td>
              </tr>
              <tr>
                <td><strong>argue</strong></td>
                <td>argumentar, defender</td>
                <td>argue (that) + clause</td>
                <td>Scientists <em>argue</em> that the planet is warming.</td>
              </tr>
              <tr>
                <td><strong>explain</strong></td>
                <td>explicar</td>
                <td>explain (that) + clause</td>
                <td>She <em>explained</em> that the process was complex.</td>
              </tr>
              <tr>
                <td><strong>announce</strong></td>
                <td>anunciar</td>
                <td>announce (that) + clause</td>
                <td>The CEO <em>announced</em> that the company would merge.</td>
              </tr>
              <tr>
                <td><strong>admit</strong></td>
                <td>admitir, confessar</td>
                <td>admit (that) + clause / -ing</td>
                <td>He <em>admitted</em> (that) he had made a mistake.</td>
              </tr>
              <tr>
                <td><strong>deny</strong></td>
                <td>negar</td>
                <td>deny + -ing</td>
                <td>She <em>denied</em> stealing the documents.</td>
              </tr>
              <tr>
                <td><strong>suggest</strong></td>
                <td>sugerir</td>
                <td>suggest + -ing / (that) + clause</td>
                <td>He <em>suggested</em> taking a break.</td>
              </tr>
              <tr>
                <td><strong>warn</strong></td>
                <td>avisar, alertar</td>
                <td>warn + object + (not) to-inf</td>
                <td>She <em>warned</em> us not to open the door.</td>
              </tr>
              <tr>
                <td><strong>promise</strong></td>
                <td>prometer</td>
                <td>promise (that) / to-inf</td>
                <td>He <em>promised</em> (that) he would return.</td>
              </tr>
              <tr>
                <td><strong>refuse</strong></td>
                <td>recusar-se</td>
                <td>refuse + to-inf</td>
                <td>She <em>refused</em> to answer the question.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que isso importa no ENEM?</h3>
          <p>
            Textos jornalísticos em inglês usam{" "}
            <em>claim, argue, report, announce</em> e outros verbos para transmitir
            nuances importantes: um <em>claim</em> sinaliza que o autor duvida da
            afirmação; um <em>argue</em> indica um ponto de vista defendido; um{" "}
            <em>deny</em> já embute a negativa. Reconhecer essas nuances é crucial para
            responder questões de compreensão textual e inferência.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 6 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Questions in Indirect Speech</span>

        <h2>6. Perguntas em Indirect Speech</h2>

        <p>
          Relatar perguntas no Indirect Speech exige atenção especial: a{" "}
          <strong>estrutura interrogativa é desfeita</strong> (sem inversão verbo-sujeito)
          e o ponto de interrogação desaparece. As perguntas se dividem em dois grupos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Yes/No Questions</h3>
            <p>
              Perguntas respondidas com <em>yes</em> ou <em>no</em>. No Indirect Speech,
              usamos <strong>if</strong> ou <strong>whether</strong> como conector.
            </p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Wh- Questions</h3>
            <p>
              Perguntas com <em>who, what, where, when, why, how</em>. No Indirect Speech,
              a palavra interrogativa vira o conector — sem inversão e sem auxiliar.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Yes/No Questions — exemplos</h3>
          <p>
            Direct: <em>"Are you coming to the party?"</em> she asked.
            <br />
            Indirect: She asked <strong>if / whether</strong> I was coming to the party.
          </p>
          <p>
            Direct: <em>"Did he finish the report?"</em> the boss asked.
            <br />
            Indirect: The boss asked <strong>whether</strong> he had finished the report.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Wh- Questions — exemplos</h3>
          <p>
            Direct: <em>"Where do you live?"</em> he asked.
            <br />
            Indirect: He asked <strong>where</strong> I lived.
            <br />
            <em>(Sem inversão: NOT "where did I live" — o auxiliar "did" some)</em>
          </p>
          <p>
            Direct: <em>"Why has she left?"</em> they asked.
            <br />
            Indirect: They asked <strong>why</strong> she had left.
          </p>
          <p>
            Direct: <em>"What time does the train arrive?"</em> she asked.
            <br />
            Indirect: She asked <strong>what time</strong> the train arrived.
          </p>
        </div>

        <div className="math-block">
          <p>
            <strong>Armadilha frequente:</strong> Nunca use ponto de interrogação em
            perguntas relatadas. <em>"She asked where was he?"</em> está{" "}
            <strong>errado</strong>. O correto é: <em>She asked where <strong>he
            was</strong>.</em> — ordem direta (sujeito + verbo), sem inversão.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 7 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Orders &amp; Requests</span>

        <h2>7. Ordens e Pedidos em Indirect Speech</h2>

        <p>
          Quando relatamos ordens (<em>imperatives</em>), pedidos (<em>requests</em>) e
          conselhos (<em>advice</em>) no Indirect Speech, a estrutura do imperativo original
          é substituída pelo padrão:
        </p>

        <div className="lesson-highlight">
          <h3>Fórmula geral</h3>
          <p>
            <strong>Verbo de relato + objeto + (not) + to + infinitivo</strong>
          </p>
          <p>
            Tell / Ask / Warn / Order / Advise / Beg + [pessoa] + (not) to + [verbo base]
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direct Speech (imperativo)</th>
                <th>Tipo</th>
                <th>Indirect Speech</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>"Close the door."</em></td>
                <td>Ordem</td>
                <td>She <strong>told</strong> me <strong>to close</strong> the door.</td>
              </tr>
              <tr>
                <td><em>"Please sit down."</em></td>
                <td>Pedido</td>
                <td>He <strong>asked</strong> me <strong>to sit down</strong>.</td>
              </tr>
              <tr>
                <td><em>"Don't touch that!"</em></td>
                <td>Proibição</td>
                <td>She <strong>warned</strong> me <strong>not to touch</strong> that.</td>
              </tr>
              <tr>
                <td><em>"Don't be late."</em></td>
                <td>Ordem negativa</td>
                <td>He <strong>told</strong> me <strong>not to be</strong> late.</td>
              </tr>
              <tr>
                <td><em>"You should rest."</em></td>
                <td>Conselho</td>
                <td>The doctor <strong>advised</strong> me <strong>to rest</strong>.</td>
              </tr>
              <tr>
                <td><em>"Please help me!"</em></td>
                <td>Súplica</td>
                <td>She <strong>begged</strong> me <strong>to help</strong> her.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Negativa: not to + infinitivo</h3>
          <p>
            Em ordens negativas, o <em>not</em> vem <strong>antes</strong> do infinitivo,
            nunca antes do verbo de relato:
          </p>
          <p>
            <em>"Don't run in the hallway."</em> the teacher said.
            <br />
            → The teacher told the students <strong>not to run</strong> in the hallway.
            <br />
            <em>(Errado: The teacher told the students to not run.)</em>
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 8 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">SAY vs. TELL</span>

        <h2>8. Diferença entre SAY e TELL</h2>

        <p>
          A confusão entre <strong>say</strong> e <strong>tell</strong> é uma das mais
          comuns entre estudantes brasileiros. A diferença é simples mas rigorosa:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>SAY</h3>
            <p>
              Não precisa de objeto pessoal. Foca no <em>conteúdo</em> do que foi dito.
              <br /><br />
              ✅ She <strong>said</strong> (that) she was tired.
              <br />
              ✅ He <strong>said</strong> goodbye.
              <br />
              ❌ She <strong>said me</strong> she was tired. (ERRADO)
            </p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>TELL</h3>
            <p>
              Sempre exige objeto pessoal. Foca em <em>quem</em> recebeu a informação.
              <br /><br />
              ✅ He <strong>told me</strong> (that) he was late.
              <br />
              ✅ She <strong>told the class</strong> to be quiet.
              <br />
              ❌ He <strong>told</strong> (that) he was late. (ERRADO)
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Exceções e expressões fixas com TELL</h3>
          <p>
            <em>Tell</em> também aparece em expressões que não envolvem discurso relatado,
            como: <strong>tell the truth</strong> (dizer a verdade), <strong>tell a
            lie</strong> (contar uma mentira), <strong>tell a story</strong> (contar uma
            história), <strong>tell the time</strong> (dizer as horas), <strong>tell the
            difference</strong> (perceber a diferença).
          </p>
        </div>

        <div className="math-block">
          <p>
            <strong>Regra de ouro:</strong> Se você pode inserir um pronome objeto
            (<em>me, him, her, us, them</em>) imediatamente após o verbo, use{" "}
            <strong>tell</strong>. Se não fizer sentido, use <strong>say</strong>.
            <br />
            He <em>said</em> it. ✅ | He <em>told me</em> it. ✅ | He <em>told</em> it.
            ❌ | He <em>said me</em> it. ❌
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 9 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Jornalístico</span>

        <h2>9. Reported Speech em Textos Jornalísticos</h2>

        <p>
          O jornalismo é o terreno por excelência do Reported Speech. Repórteres raramente
          transcrevem falas inteiras — eles as resumem, reformulam e contextualizam usando
          reporting verbs variados. O ENEM apresenta com frequência textos de revistas e
          jornais internacionais que empregam esse recurso.
        </p>

        <div className="lesson-highlight">
          <h3>Trecho jornalístico típico</h3>
          <p>
            <em>
              "The Minister of Finance <strong>announced</strong> on Tuesday that the
              government <strong>would</strong> cut taxes by 5% next year. Economists,
              however, <strong>argued</strong> that the measure <strong>might</strong>{" "}
              increase the deficit. The opposition <strong>claimed</strong> that the
              decision <strong>had been</strong> made without proper analysis."
            </em>
          </p>
          <p>
            Nesse trecho, <strong>announced</strong> relata um fato oficial;{" "}
            <strong>argued</strong> sinaliza contraponto técnico; <strong>claimed</strong>{" "}
            indica ceticismo político. Os verbos no passado (<em>would, might, had been</em>)
            são resultado do backshift a partir das falas originais.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Reporting Verb</th>
                <th>Posição no discurso</th>
                <th>Nuance transmitida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>announced</strong></td>
                <td>Início — fato central</td>
                <td>Declaração oficial e formal</td>
              </tr>
              <tr>
                <td><strong>argued</strong></td>
                <td>Contraponto de especialistas</td>
                <td>Ponto de vista embasado, não necessariamente verdadeiro</td>
              </tr>
              <tr>
                <td><strong>claimed</strong></td>
                <td>Voz da oposição</td>
                <td>Afirmação duvidosa ou politicamente motivada</td>
              </tr>
              <tr>
                <td><strong>confirmed</strong></td>
                <td>Verificação posterior</td>
                <td>Fato verificado e comprovado</td>
              </tr>
              <tr>
                <td><strong>denied</strong></td>
                <td>Resposta a acusações</td>
                <td>Negação direta — o falante recusa a afirmação</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Ao ler um texto jornalístico em inglês, sempre identifique o{" "}
          <strong>reporting verb</strong> e pergunte-se: o autor do texto <em>concorda</em>{" "}
          com o que está sendo relatado, ou está sendo <em>neutro</em> ou até{" "}
          <em>cético</em>? Essa leitura crítica é exatamente o que o ENEM avalia nas
          questões de interpretação.
        </p>
      </section>

      {/* ======================== SEÇÃO 10 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Dicas ENEM</span>

        <h2>10. Dicas ENEM e Armadilhas</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Foco em leitura</h3>
            <p>
              O ENEM <strong>não pede transformações</strong> de sentenças — ele testa se
              você entende o significado de um texto que usa Reported Speech. Foque em
              compreender quem disse o quê, não em conjugar verbos.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Reporting verb = chave de leitura</h3>
            <p>
              O verbo <em>claim</em> sinaliza que o narrador <strong>duvida</strong> da
              informação. O verbo <em>confirmed</em> indica certeza. Essas nuances mudam
              completamente a interpretação da questão.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Backshift revela contexto</h3>
            <p>
              Se você ver <em>would, could, might, had + particípio</em> numa frase sem
              aspas, provavelmente é Indirect Speech. Reconstrua mentalmente o que foi
              dito originalmente para entender o sentido.
            </p>
          </div>
        </div>

        <div className="math-block">
          <p>
            <strong>Dica de Prova ENEM:</strong> Em questões que trazem um trecho de
            notícia ou artigo em inglês, sublinhe os reporting verbs. Pergunte-se:
            <br />
            1. Quem está sendo citado? (fonte)
            <br />
            2. O verbo introdutório é neutro (<em>said, stated</em>), positivo (
            <em>confirmed, proved</em>) ou cético (<em>claimed, alleged</em>)?
            <br />
            3. Qual a posição implícita do jornalista sobre o que está sendo relatado?
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Armadilhas mais comuns</h3>
          <p>
            <strong>1.</strong> Usar ponto de interrogação em perguntas relatadas:
            <br />
            ❌ She asked where <em>was he?</em> → ✅ She asked where <em>he was</em>.
          </p>
          <p>
            <strong>2.</strong> Esquecer a inversão de pronomes:
            <br />
            ❌ He said <em>I</em> was tired. (parece que <em>eu</em> disse)
            → ✅ He said <em>he</em> was tired.
          </p>
          <p>
            <strong>3.</strong> Não fazer backshift quando necessário:
            <br />
            ❌ She said she <em>is</em> happy. → ✅ She said she <em>was</em> happy.
          </p>
          <p>
            <strong>4.</strong> Usar <em>say me</em> em vez de <em>tell me</em>:
            <br />
            ❌ He said me the answer. → ✅ He told me the answer.
          </p>
          <p>
            <strong>5.</strong> Manter aspas e vírgula introdutória no Indirect Speech:
            <br />
            ❌ She told me, "that she was leaving." → ✅ She told me (that) she was
            leaving.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 11 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>11. Exercícios Comentados</h2>

        <Exercise
          level="Básico"
          title="1. Transformação de Direct para Indirect Speech"
          statement={
            <p>
              Leia a seguinte frase em <strong>Direct Speech</strong> e identifique sua
              forma correta em <strong>Indirect Speech</strong>:
              <br />
              <br />
              <em>John said, "I am studying for the exam."</em>
            </p>
          }
          options={[
            { letter: "a", text: 'John said that I am studying for the exam.' },
            { letter: "b", text: 'John said that he was studying for the exam.', correct: true },
            { letter: "c", text: 'John said that he is studying for the exam.' },
            { letter: "d", text: 'John told that he was studying for the exam.' },
          ]}
          resolution={
            <p>
              A resposta correta é a <strong>(b)</strong>. Ao transformar para Indirect
              Speech, três mudanças são necessárias: (1) o pronome <em>I</em> muda para{" "}
              <em>he</em> (ponto de vista de quem relata); (2) o verbo <em>am studying</em>{" "}
              (Present Continuous) sofre backshift para <em>was studying</em> (Past
              Continuous); (3) as aspas e a vírgula desaparecem, substituídas pelo conector
              opcional <em>that</em>. A alternativa (d) está errada porque <em>tell</em>{" "}
              exige objeto pessoal: <em>told me, told us</em> etc. — nunca <em>told
              that</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificar o Reported Speech correto"
          statement={
            <p>
              A professora disse originalmente:{" "}
              <em>"The students must hand in their assignments by Friday."</em>
              <br />
              <br />
              Qual alternativa representa o <strong>Indirect Speech</strong> correto da
              frase acima?
            </p>
          }
          options={[
            { letter: "a", text: 'The teacher said the students must hand in their assignments by Friday.' },
            { letter: "b", text: 'The teacher told that the students had to hand in their assignments by the following Friday.', },
            { letter: "c", text: 'The teacher said that the students had to hand in their assignments by the following Friday.', correct: true },
            { letter: "d", text: 'The teacher said that the students had to hand in our assignments by Friday.' },
          ]}
          resolution={
            <p>
              A resposta correta é a <strong>(c)</strong>. O modal <em>must</em> muda para{" "}
              <em>had to</em> no backshift. A expressão <em>by Friday</em> muda para{" "}
              <em>by the following Friday</em> para indicar que a sexta-feira mencionada
              era futura em relação ao momento da fala original. A alternativa (a) não faz
              backshift de <em>must</em>. A alternativa (b) usa <em>told that</em> sem
              objeto — erro clássico com <em>tell</em>. A alternativa (d) troca{" "}
              <em>their</em> por <em>our</em> incorretamente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Backshift com tempos no passado"
          statement={
            <p>
              Observe o seguinte diálogo:
              <br />
              <br />
              <em>
                "I had already finished my thesis when the professor called," Maria said.
              </em>
              <br />
              <br />
              Em qual alternativa o <strong>Indirect Speech</strong> está{" "}
              <strong>correto</strong>?
            </p>
          }
          options={[
            { letter: "a", text: 'Maria said that she had already finished her thesis when the professor had called.' },
            { letter: "b", text: 'Maria said that she already finished her thesis when the professor called.' },
            { letter: "c", text: 'Maria said that she had already finished her thesis when the professor called.', correct: true },
            { letter: "d", text: 'Maria said that she has already finished her thesis when the professor called.' },
          ]}
          resolution={
            <p>
              A resposta correta é a <strong>(c)</strong>. O trecho original contém dois
              tempos: <em>had finished</em> (Past Perfect) e <em>called</em> (Simple
              Past). O Past Perfect já está no "nível mais recuado" do passado — ele{" "}
              <strong>não muda</strong> com o backshift, pois não existe um tempo
              "mais passado" que o Past Perfect simples. O Simple Past (<em>called</em>){" "}
              teóricamente deveria virar Past Perfect, mas quando a relação temporal já
              está clara pelo Past Perfect anterior, é comum e aceito mantê-lo como Simple
              Past. A alternativa (a) aplica backshift duplamente e de forma incorreta ao{" "}
              <em>called</em>. As alternativas (b) e (d) erram o tempo do verbo principal.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Reporting Verbs em texto jornalístico"
          statement={
            <div>
              <p>Leia o trecho de uma reportagem:</p>
              <br />
              <p>
                <em>
                  "The government <strong>announced</strong> that it would invest
                  $2 billion in renewable energy. Environmental groups, however,{" "}
                  <strong>argued</strong> that the amount was insufficient to meet
                  climate goals. The opposition <strong>claimed</strong> that the funds
                  had already been allocated elsewhere."
                </em>
              </p>
              <br />
              <p>
                Com base nos reporting verbs sublinhados, qual das alternativas descreve
                corretamente as <strong>posições implícitas</strong> expressas no texto?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: 'Todos os três verbos expressam neutralidade jornalística, sem indicar credibilidade diferente para cada fonte.' },
            { letter: "b", text: 'O verbo "argued" indica certeza absoluta dos grupos ambientais, enquanto "claimed" expressa dúvida sobre a oposição.', correct: true },
            { letter: "c", text: '"Announced" é o único verbo neutro; "argued" e "claimed" expressam, respectivamente, posicionamento técnico e afirmação de credibilidade duvidosa.' },
            { letter: "d", text: '"Claimed" indica que a oposição confirmou oficialmente a informação sobre os fundos.' },
          ]}
          resolution={
            <p>
              A resposta correta é a <strong>(c)</strong>. <em>Announced</em> transmite
              uma declaração oficial e neutra. <em>Argued</em> indica uma posição
              embasada tecnicamente (grupos ambientais apresentam argumentos), mas não
              é certeza absoluta — é uma perspectiva. <em>Claimed</em> é o verbo com
              maior carga de ceticismo: o jornalista usa esse termo para indicar que a
              afirmação da oposição é questionável ou não verificada. A alternativa (b)
              inverte as nuances de <em>argued</em> e <em>claimed</em>, o que a torna
              incorreta. A alternativa (d) confunde <em>claimed</em> com <em>confirmed</em>.
              No ENEM, a distinção entre esses verbos é frequentemente testada em questões
              de inferência e posição do autor.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Questão estilo ENEM — Reported Speech em notícia"
          statement={
            <div>
              <p>Leia o trecho abaixo, retirado de um artigo de revista internacional:</p>
              <br />
              <p>
                <em>
                  "Dr. Amara Nwosu, lead researcher at the Global Health Institute,{" "}
                  <strong>stated</strong> that the new vaccine <strong>had shown</strong>{" "}
                  a 94% efficacy rate in clinical trials. She <strong>added</strong> that
                  the results <strong>were</strong> still being reviewed by international
                  health authorities. Critics, however, <strong>warned</strong> that it
                  was too early to draw conclusions, as the sample size{" "}
                  <strong>had been</strong> relatively small."
                </em>
              </p>
              <br />
              <p>
                De acordo com o texto, a pesquisadora principal <strong>não</strong>{" "}
                afirmou que:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: 'A vacina demonstrou 94% de eficácia em testes clínicos.' },
            { letter: "b", text: 'Os resultados ainda estavam sendo revisados por autoridades internacionais de saúde.' },
            { letter: "c", text: 'A amostra utilizada nos ensaios clínicos foi relativamente pequena.', correct: true },
            { letter: "d", text: 'As autoridades de saúde internacionais ainda não haviam concluído sua análise.' },
          ]}
          resolution={
            <p>
              A resposta correta é a <strong>(c)</strong>. A informação sobre o tamanho
              reduzido da amostra (<em>"the sample size had been relatively small"</em>)
              foi atribuída aos <strong>críticos</strong> (<em>Critics warned…</em>), não
              à pesquisadora Dr. Nwosu. A pesquisadora afirmou: (a) eficácia de 94%
              — <em>stated that the new vaccine had shown</em>; (b) resultados em revisão
              — <em>added that results were still being reviewed</em>; (d) é uma
              paráfrase válida do que ela disse sobre a revisão em andamento. Essa questão
              testa a habilidade de identificar <strong>quem disse o quê</strong> num
              texto com múltiplas vozes relatadas — competência central no ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
