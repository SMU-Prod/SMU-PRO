"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 09</span>
          <h1>Passado Simples e Passado Contínuo</h1>
          <p>
            Textos narrativos — cartas, relatos, biografias, contos e notícias históricas —
            são gêneros recorrentes no ENEM e dependem fundamentalmente do domínio dos tempos
            verbais do passado em inglês. O <strong>Simple Past</strong> narra eventos concluídos,
            enquanto o <strong>Past Continuous</strong> descreve o pano de fundo e as ações em
            progresso quando algo aconteceu. Dominar a distinção entre eles transforma a
            interpretação de qualquer narrativa em inglês.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Simple Past — Estrutura e Formação</h2>

        <p>
          O <strong>Simple Past</strong> (Passado Simples) é usado para narrar ações e eventos
          completos no passado. A grande divisão é entre verbos <strong>regulares</strong> —
          que seguem uma regra previsível — e <strong>irregulares</strong>, que precisam ser
          memorizados. Para perguntas e negativas, o auxiliar <strong>did</strong> é usado com
          o verbo na forma base (infinitivo sem to).
        </p>

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
                <td><strong>Afirmativa (regular)</strong></td>
                <td>Sujeito + verbo + -ed</td>
                <td><em>She worked all day.</em></td>
                <td>Ela trabalhou o dia inteiro.</td>
              </tr>
              <tr>
                <td><strong>Afirmativa (irregular)</strong></td>
                <td>Sujeito + forma irregular</td>
                <td><em>He wrote a letter.</em></td>
                <td>Ele escreveu uma carta.</td>
              </tr>
              <tr>
                <td><strong>Negativa</strong></td>
                <td>Sujeito + did not (didn't) + verbo base</td>
                <td><em>They didn't arrive on time.</em></td>
                <td>Eles não chegaram a tempo.</td>
              </tr>
              <tr>
                <td><strong>Interrogativa</strong></td>
                <td>Did + sujeito + verbo base?</td>
                <td><em>Did you see the movie?</em></td>
                <td>Você viu o filme?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Ponto crítico:</strong> Na negativa e interrogativa, o verbo principal volta
          para a <em>forma base</em> (infinitivo), pois o auxiliar <em>did</em> já carrega a
          marcação de passado. Nunca: <em>"Did she worked?"</em> — sempre: <em>"Did she work?"</em>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfologia</span>
        <h2>2. Regras de Ortografia para -ed</h2>

        <p>
          Os verbos regulares seguem padrões ortográficos ao receber a terminação <strong>-ed</strong>.
          Conhecer essas regras ajuda a identificar formas de passado mesmo em vocabulário desconhecido.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Terminação do verbo</th>
                <th>Regra</th>
                <th>Infinitivo</th>
                <th>Passado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maioria dos verbos</td>
                <td>Adiciona <strong>-ed</strong></td>
                <td>walk, clean, open</td>
                <td>walked, cleaned, opened</td>
              </tr>
              <tr>
                <td>Termina em -e</td>
                <td>Adiciona apenas <strong>-d</strong></td>
                <td>love, dance, arrive</td>
                <td>loved, danced, arrived</td>
              </tr>
              <tr>
                <td>Consoante + -y</td>
                <td>Troca -y por <strong>-ied</strong></td>
                <td>study, try, carry</td>
                <td>studied, tried, carried</td>
              </tr>
              <tr>
                <td>CVC monossílabo (com vogal tônica)</td>
                <td>Dobra consoante + <strong>-ed</strong></td>
                <td>stop, plan, drop</td>
                <td>stopped, planned, dropped</td>
              </tr>
              <tr>
                <td>Termina em -l (inglês britânico)</td>
                <td>Dobra -l + <strong>-ed</strong></td>
                <td>travel, cancel</td>
                <td>travelled, cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Essencial</span>
        <h2>3. Os 50 Verbos Irregulares Mais Cobrados no ENEM</h2>

        <p>
          Os verbos irregulares são aqueles cujo passado <strong>não segue a regra -ed</strong>.
          É fundamental memorizar os mais frequentes, pois eles aparecem em praticamente todos
          os textos em inglês. Abaixo, os 50 mais importantes, organizados por padrão de mudança.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Infinitivo</th>
                <th>Simple Past</th>
                <th>Particípio</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>be</td><td>was/were</td><td>been</td><td>ser/estar</td></tr>
              <tr><td>have</td><td>had</td><td>had</td><td>ter</td></tr>
              <tr><td>do</td><td>did</td><td>done</td><td>fazer</td></tr>
              <tr><td>say</td><td>said</td><td>said</td><td>dizer</td></tr>
              <tr><td>go</td><td>went</td><td>gone</td><td>ir</td></tr>
              <tr><td>get</td><td>got</td><td>gotten/got</td><td>conseguir/obter</td></tr>
              <tr><td>make</td><td>made</td><td>made</td><td>fazer/criar</td></tr>
              <tr><td>know</td><td>knew</td><td>known</td><td>saber/conhecer</td></tr>
              <tr><td>think</td><td>thought</td><td>thought</td><td>pensar</td></tr>
              <tr><td>take</td><td>took</td><td>taken</td><td>pegar/levar</td></tr>
              <tr><td>see</td><td>saw</td><td>seen</td><td>ver</td></tr>
              <tr><td>come</td><td>came</td><td>come</td><td>vir</td></tr>
              <tr><td>give</td><td>gave</td><td>given</td><td>dar</td></tr>
              <tr><td>find</td><td>found</td><td>found</td><td>encontrar</td></tr>
              <tr><td>tell</td><td>told</td><td>told</td><td>contar/dizer</td></tr>
              <tr><td>become</td><td>became</td><td>become</td><td>tornar-se</td></tr>
              <tr><td>leave</td><td>left</td><td>left</td><td>partir/deixar</td></tr>
              <tr><td>feel</td><td>felt</td><td>felt</td><td>sentir</td></tr>
              <tr><td>put</td><td>put</td><td>put</td><td>colocar</td></tr>
              <tr><td>bring</td><td>brought</td><td>brought</td><td>trazer</td></tr>
              <tr><td>begin</td><td>began</td><td>begun</td><td>começar</td></tr>
              <tr><td>keep</td><td>kept</td><td>kept</td><td>manter/guardar</td></tr>
              <tr><td>hold</td><td>held</td><td>held</td><td>segurar/realizar</td></tr>
              <tr><td>write</td><td>wrote</td><td>written</td><td>escrever</td></tr>
              <tr><td>stand</td><td>stood</td><td>stood</td><td>ficar de pé/suportar</td></tr>
              <tr><td>hear</td><td>heard</td><td>heard</td><td>ouvir</td></tr>
              <tr><td>let</td><td>let</td><td>let</td><td>deixar/permitir</td></tr>
              <tr><td>mean</td><td>meant</td><td>meant</td><td>significar</td></tr>
              <tr><td>set</td><td>set</td><td>set</td><td>definir/estabelecer</td></tr>
              <tr><td>meet</td><td>met</td><td>met</td><td>conhecer/encontrar</td></tr>
              <tr><td>run</td><td>ran</td><td>run</td><td>correr</td></tr>
              <tr><td>pay</td><td>paid</td><td>paid</td><td>pagar</td></tr>
              <tr><td>sit</td><td>sat</td><td>sat</td><td>sentar</td></tr>
              <tr><td>speak</td><td>spoke</td><td>spoken</td><td>falar</td></tr>
              <tr><td>lie</td><td>lay</td><td>lain</td><td>deitar</td></tr>
              <tr><td>lose</td><td>lost</td><td>lost</td><td>perder</td></tr>
              <tr><td>send</td><td>sent</td><td>sent</td><td>enviar</td></tr>
              <tr><td>build</td><td>built</td><td>built</td><td>construir</td></tr>
              <tr><td>read</td><td>read</td><td>read</td><td>ler (pronúncia muda: /rɛd/)</td></tr>
              <tr><td>spend</td><td>spent</td><td>spent</td><td>gastar/passar (tempo)</td></tr>
              <tr><td>grow</td><td>grew</td><td>grown</td><td>crescer</td></tr>
              <tr><td>win</td><td>won</td><td>won</td><td>ganhar/vencer</td></tr>
              <tr><td>buy</td><td>bought</td><td>bought</td><td>comprar</td></tr>
              <tr><td>fall</td><td>fell</td><td>fallen</td><td>cair</td></tr>
              <tr><td>show</td><td>showed</td><td>shown</td><td>mostrar</td></tr>
              <tr><td>cut</td><td>cut</td><td>cut</td><td>cortar</td></tr>
              <tr><td>rise</td><td>rose</td><td>risen</td><td>subir/aumentar</td></tr>
              <tr><td>drive</td><td>drove</td><td>driven</td><td>dirigir</td></tr>
              <tr><td>break</td><td>broke</td><td>broken</td><td>quebrar</td></tr>
              <tr><td>choose</td><td>chose</td><td>chosen</td><td>escolher</td></tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> O verbo <em>read</em> tem a <em>mesma grafia</em> no
          infinitivo e no passado, mas pronúncias diferentes: <em>/riːd/</em> (presente) vs.
          <em>/rɛd/</em> (passado). Em questões escritas, o contexto determina o tempo verbal.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores</span>
        <h2>4. Expressões de Tempo no Simple Past</h2>

        <p>
          Certas expressões temporais são "pistas linguísticas" que sinalizam o uso do Simple
          Past em textos. Reconhecê-las é uma estratégia eficiente para identificar o tempo
          verbal mesmo sem conhecer todos os verbos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>Datas e Períodos Específicos</h3>
            <p>
              <em>yesterday, last week, last year, last night, in 1990, in the 20th century,
              three days ago, two years ago, in the past</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⏱️</span>
            <h3>Marcadores de Sequência</h3>
            <p>
              <em>first, then, after that, next, finally, suddenly, immediately, soon after,
              later, eventually</em>
              <br />
              Muito usados em narrativas sequenciais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Conectores de Tempo</h3>
            <p>
              <em>when, after, before, as soon as, once, until</em> + Simple Past narram
              a sequência de eventos em relações de causa e tempo.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Past Continuous</span>
        <h2>5. Past Continuous — Estrutura e Usos</h2>

        <p>
          O <strong>Past Continuous</strong> (Passado Contínuo) é formado com <strong>was/were</strong>{" "}
          + o verbo na forma <strong>-ing</strong>. Indica que uma ação estava em <em>progresso</em>{" "}
          em um determinado momento do passado. É o "pano de fundo" da narração em inglês.
        </p>

        <div className="math-block">
          <strong>Estrutura:</strong> Sujeito + was/were + verbo-ing
          <br />
          <em>I <strong>was sleeping</strong> when the phone rang.</em> — Eu estava dormindo quando o telefone tocou.
          <br />
          <em>They <strong>were discussing</strong> the proposal at midnight.</em> — Eles estavam discutindo a proposta à meia-noite.
        </div>

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
                <td><strong>Afirmativa</strong></td>
                <td>Sujeito + was/were + -ing</td>
                <td><em>She was reading a book.</em></td>
              </tr>
              <tr>
                <td><strong>Negativa</strong></td>
                <td>Sujeito + wasn't/weren't + -ing</td>
                <td><em>He wasn't paying attention.</em></td>
              </tr>
              <tr>
                <td><strong>Interrogativa</strong></td>
                <td>Was/Were + sujeito + -ing?</td>
                <td><em>Were they working late?</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Pano de Fundo (Background)</h3>
            <p>
              Descreve o cenário ou atividade em andamento quando um evento ocorreu.
              <br />
              <em>"It was raining when we arrived."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Ação Interrompida</h3>
            <p>
              Uma ação contínua é interrompida por um evento no Simple Past.
              <br />
              <em>"She was studying when the power went out."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ações Paralelas</h3>
            <p>
              Duas ações que aconteciam simultaneamente no passado.
              <br />
              <em>"While he was cooking, she was setting the table."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🕐</span>
            <h3>Momento Específico</h3>
            <p>
              O que estava acontecendo em um determinado instante.
              <br />
              <em>"At 8 p.m., I was driving home."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conectores Essenciais</span>
        <h2>6. When e While — A Chave da Narrativa</h2>

        <p>
          As conjunções <strong>when</strong> e <strong>while</strong> são fundamentais para
          combinar Simple Past e Past Continuous em narrativas. Elas criam relações temporais
          precisas entre eventos, e confundi-las é um erro comum.
        </p>

        <div className="lesson-highlight">
          <strong>Regra geral:</strong>
          <br />
          <strong>WHEN</strong> + Simple Past (evento pontual) → Past Continuous (ação em progresso)
          <br />
          <strong>WHILE</strong> + Past Continuous (ação em progresso) → Simple Past ou Past Continuous
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conector</th>
                <th>Indica</th>
                <th>Estrutura típica</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>when</strong></td>
                <td>Momento em que algo acontece</td>
                <td>...was/were -ing <em>when</em> + Simple Past</td>
                <td><em>"I was sleeping when the alarm rang."</em></td>
              </tr>
              <tr>
                <td><strong>while</strong></td>
                <td>Período durante o qual algo ocorre</td>
                <td>While + -ing, Simple Past / -ing</td>
                <td><em>"While I was reading, she called."</em></td>
              </tr>
              <tr>
                <td><strong>as</strong></td>
                <td>Ação simultânea e paralela</td>
                <td>As + -ing, -ing</td>
                <td><em>"As he was leaving, she arrived."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama mostrando a relação entre Past Continuous e Simple Past com when e while">
            <defs>
              <marker id="arrow9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4f46e5" />
              </marker>
            </defs>
            {/* Linha do tempo */}
            <line x1="50" y1="100" x2="660" y2="100" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow9)" />
            {/* Past Continuous — seta longa */}
            <rect x="80" y="70" width="350" height="20" fill="#fde68a" rx="4" />
            <text x="255" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Past Continuous (ação em progresso)</text>
            {/* Simple Past — ponto */}
            <circle cx="310" cy="100" r="7" fill="#ef4444" />
            <line x1="310" y1="107" x2="310" y2="145" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="310" y="160" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">Simple Past (evento pontual)</text>
            <text x="310" y="175" textAnchor="middle" fontSize="11" fill="#ef4444">(WHEN)</text>
            {/* Labels */}
            <text x="100" y="60" fontSize="11" fill="#92400e">início da ação contínua</text>
            <text x="430" y="60" fontSize="11" fill="#92400e">fim (interrompida?)</text>
            <text x="55" y="120" fontSize="11" fill="#6b7280">Passado</text>
            <text x="600" y="120" fontSize="11" fill="#6b7280">→ Presente</text>
          </svg>
          <figcaption>O Past Continuous (amarelo) cria o pano de fundo. O Simple Past (vermelho) representa o evento pontual que ocorre durante — marcado por WHEN.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>7. Simple Past vs. Past Continuous — Resumo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Simple Past</th>
                <th>Past Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Função principal</strong></td>
                <td>Narrar eventos completos e sequenciais</td>
                <td>Descrever ações em andamento em um momento do passado</td>
              </tr>
              <tr>
                <td><strong>Natureza</strong></td>
                <td>Pontual / concluída</td>
                <td>Durativa / em progresso</td>
              </tr>
              <tr>
                <td><strong>Marcadores</strong></td>
                <td>yesterday, ago, last, in [ano], then, finally</td>
                <td>while, when, at that moment, at 8 p.m.</td>
              </tr>
              <tr>
                <td><strong>Em narrativas</strong></td>
                <td>Avança a história (foreground)</td>
                <td>Descreve o cenário (background)</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td><em>The fire started at midnight.</em></td>
                <td><em>Everyone was sleeping when the fire started.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>8. Narrativas Históricas e Biográficas no ENEM</h2>

        <p>
          O ENEM frequentemente apresenta textos biográficos, históricos e literários que
          combinam os dois tempos de passado. Saber ler esses textos com atenção ao tempo
          verbal é determinante para responder questões de interpretação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Biografias</h3>
            <p>
              Narram eventos da vida de uma pessoa usando majoritariamente Simple Past.
              Past Continuous aparece para contextualizar: <em>"While she was working as a
              teacher, she began writing her first novel."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Textos Históricos</h3>
            <p>
              Apresentam sequências de eventos com marcadores temporais. Combine os verbos
              ao contexto: <em>"The movement grew (SP) while the government was struggling
              (PC) to maintain control."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Trechos Literários</h3>
            <p>
              Em contos e romances, o Past Continuous cria ambientação: <em>"The rain was
              falling softly when the stranger knocked on the door."</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Em questões de vocabulário no passado, lembre-se que
          verbos irregulares não têm -ed. Se você vê <em>wrote, ran, gave, knew</em> em um
          texto, são formas de Simple Past dos verbos write, run, give, know. O contexto
          (marcadores de passado, narrativa) confirma o tempo verbal.
        </div>
      </section>

      {/* ── SEÇÃO 9 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Verbo Irregular no Simple Past"
          statement={
            <p>
              Qual é a forma correta do Simple Past do verbo <em>go</em> na frase:{" "}
              <em>"Last summer, she ______ to Canada for three weeks."</em>
            </p>
          }
          options={[
            { letter: "A", text: "goed" },
            { letter: "B", text: "gone" },
            { letter: "C", text: "going" },
            { letter: "D", text: "went", correct: true },
            { letter: "E", text: "goes" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>D — went</strong>. O verbo <em>go</em> é irregular:
              seu passado simples é <em>went</em>, e não segue a regra -ed. <em>Gone</em> é o
              particípio passado (usado com Present Perfect: <em>has gone</em>). <em>Goed</em>
              não existe. <em>Going</em> é a forma -ing. <em>Goes</em> é a terceira pessoa do
              Simple Present. O marcador <em>"Last summer"</em> confirma que a frase está no
              passado.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Negativa e Interrogativa com Did"
          statement={
            <p>
              Identifique a alternativa gramaticalmente <strong>correta</strong>:
            </p>
          }
          options={[
            { letter: "A", text: <><em>"She didn't went to the party."</em></> },
            { letter: "B", text: <><em>"Did he saw the accident?"</em></> },
            { letter: "C", text: <><em>"They didn't understand the question."</em></>, correct: true },
            { letter: "D", text: <><em>"Did you spoke to her?"</em></> },
            { letter: "E", text: <><em>"We didn't knew the answer."</em></> },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C — "They didn't understand the question."</strong>{" "}
              Na negativa e interrogativa do Simple Past, o auxiliar <em>did</em> já carrega a
              marcação de passado, por isso o verbo principal <strong>deve ficar na forma base
              (infinitivo)</strong>. Opção A: <em>went</em> deveria ser <em>go</em>. Opção B:
              <em>saw</em> deveria ser <em>see</em>. Opção D: <em>spoke</em> deveria ser
              <em>speak</em>. Opção E: <em>knew</em> deveria ser <em>know</em>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Past Continuous e Ação Interrompida"
          statement={
            <p>
              Leia o trecho de uma narrativa:
              <br /><br />
              <em>"Maria ______ her final report when the company announced the merger. She
              immediately stopped and ______ to her manager's office."</em>
              <br /><br />
              Qual alternativa preenche corretamente as lacunas, em ordem?
            </p>
          }
          options={[
            { letter: "A", text: "was writing / went", correct: true },
            { letter: "B", text: "wrote / was going" },
            { letter: "C", text: "was writing / was going" },
            { letter: "D", text: "wrote / went" },
            { letter: "E", text: "is writing / went" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>A — was writing / went</strong>. A primeira lacuna
              descreve uma ação em progresso que foi <em>interrompida</em> pelo anúncio da fusão
              — portanto, Past Continuous (<em>was writing</em>). A segunda lacuna narra o que
              aconteceu <em>depois</em>, uma ação completa e sequencial — portanto, Simple Past
              (<em>went</em>). A opção C usa Past Continuous nas duas lacunas, o que não é
              adequado para a ação "went" (evento pontual e sequencial). A opção D usa Simple
              Past nas duas lacunas, mas a primeira deveria ser contínua para expressar o pano
              de fundo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Interpretação de Narrativa com When"
          statement={
            <p>
              Leia o trecho biográfico:
              <br /><br />
              <em>"Marie Curie <strong>was working</strong> in her laboratory when she
              <strong>discovered</strong> radioactivity. She <strong>had</strong> already won one
              Nobel Prize, but this discovery <strong>led</strong> to a second historic award."</em>
              <br /><br />
              O uso do Past Continuous em <em>"was working"</em> indica que:
            </p>
          }
          options={[
            { letter: "A", text: "Marie Curie fez muitos experimentos repetidamente no passado." },
            { letter: "B", text: "A descoberta foi planejada com antecedência enquanto ela trabalhava." },
            { letter: "C", text: "O trabalho no laboratório era o contexto em andamento quando a descoberta (evento pontual) ocorreu.", correct: true },
            { letter: "D", text: "Marie Curie ainda estava trabalhando no laboratório no momento da escrita do texto." },
            { letter: "E", text: "O Past Continuous foi usado para indicar hábito no passado." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O Past Continuous <em>"was working"</em>
              cria o <strong>pano de fundo</strong> da narrativa — o que estava acontecendo
              (trabalho contínuo no laboratório) no momento em que ocorreu o evento pontual
              (descoberta da radioatividade, marcada pelo Simple Past <em>discovered</em>).
              A conjunção <em>when</em> introduz o evento pontual que interrompeu ou ocorreu
              durante a ação contínua. A opção A descreve hábito — que seria expresso com
              <em>used to</em> ou <em>would</em>. D confunde passado e presente. E está errada
              porque o Past Continuous não é um marcador de hábito.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="While + Ações Simultâneas"
          statement={
            <p>
              Considere o trecho de um texto jornalístico sobre uma manifestação:
              <br /><br />
              <em>"<strong>While</strong> thousands of protesters were marching in the streets,
              negotiators were trying to reach an agreement behind closed doors. The situation
              changed dramatically when the president announced his resignation."</em>
              <br /><br />
              O padrão <em>while + Past Continuous / Past Continuous</em> no início do parágrafo tem
              a função de:
            </p>
          }
          options={[
            { letter: "A", text: "Narrar dois eventos passados em sequência cronológica." },
            { letter: "B", text: "Indicar que ambas as ações foram interrompidas pelo anúncio do presidente." },
            { letter: "C", text: "Mostrar que as duas ações aconteciam simultaneamente, criando o contexto para o evento seguinte.", correct: true },
            { letter: "D", text: "Expressar um contraste entre eventos que aconteceram em datas diferentes." },
            { letter: "E", text: "Sugerir que os negociadores tinham mais importância que os manifestantes." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O padrão <em>while + Past Continuous /
              Past Continuous</em> (<em>"were marching"</em> e <em>"were trying"</em>) mostra
              duas ações que ocorriam <strong>simultaneamente</strong> e criavam o cenário da
              situação. Esse padrão é diferente de sequência (A) — não há antes/depois entre
              as duas ações do <em>while</em>. O evento pontual que muda o quadro é o anúncio
              do presidente (<em>announced</em>, Simple Past), que rompe com o contexto
              estabelecido. Isso é uma estrutura narrativa clássica: <em>while + background
              contínuo</em>, depois <em>when + evento pontual</em> que altera tudo.
            </p>
          }
        />
      </section>
    </article>
  );
}
