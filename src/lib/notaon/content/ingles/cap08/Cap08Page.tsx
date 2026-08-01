"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 08</span>
          <h1>Presente Simples e Presente Contínuo</h1>
          <p>
            Os dois tempos do presente em inglês — <strong>Simple Present</strong> e{" "}
            <strong>Present Continuous</strong> — são pilares da gramática inglesa e aparecem com
            frequência nas questões do ENEM, seja em anúncios, artigos de divulgação científica ou
            textos cotidianos. Entender quando usar cada um e como reconhecê-los na leitura é
            fundamental para interpretar qualquer texto em inglês com segurança e precisão.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Simple Present — Estrutura Básica</h2>

        <p>
          O <strong>Simple Present</strong> (Presente Simples) é formado diretamente pelo verbo em
          sua forma base, sem auxiliar, nas formas afirmativas. A grande diferença em relação ao
          português é que o inglês utiliza <strong>do</strong> e <strong>does</strong> como
          auxiliares nas formas negativa e interrogativa. Dominar essa estrutura é o primeiro passo.
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
                <td><strong>Afirmativa</strong></td>
                <td>Sujeito + verbo (base)</td>
                <td><em>She reads every day.</em></td>
                <td>Ela lê todo dia.</td>
              </tr>
              <tr>
                <td><strong>Negativa</strong></td>
                <td>Sujeito + do/does + not + verbo</td>
                <td><em>He does not read novels.</em></td>
                <td>Ele não lê romances.</td>
              </tr>
              <tr>
                <td><strong>Interrogativa</strong></td>
                <td>Do/Does + sujeito + verbo?</td>
                <td><em>Do you read newspapers?</em></td>
                <td>Você lê jornais?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção:</strong> Na forma afirmativa, <em>NÃO</em> se usa do/does. O auxiliar
          aparece apenas nas formas negativa e interrogativa. Na negativa, a contração mais comum
          é <strong>don't</strong> e <strong>doesn't</strong>.
        </div>

        <p>
          Memorize as duas formas contraídas, pois são as mais frequentes em textos autênticos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❌</span>
            <h3>Negativa Contraída</h3>
            <p>
              <strong>don't</strong> = do not (I, you, we, they)
              <br />
              <strong>doesn't</strong> = does not (he, she, it)
              <br />
              <em>"I don't like coffee."</em>
              <br />
              <em>"She doesn't work here."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Interrogativa Direta</h3>
            <p>
              Inverte-se o auxiliar com o sujeito.
              <br />
              <em>"Do you live nearby?"</em> — Você mora perto?
              <br />
              <em>"Does he speak Spanish?"</em> — Ele fala espanhol?
            </p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Respostas Curtas</h3>
            <p>
              <em>"Yes, I do."</em> / <em>"No, I don't."</em>
              <br />
              <em>"Yes, she does."</em> / <em>"No, she doesn't."</em>
              <br />
              O verbo principal não se repete nas short answers.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfologia</span>
        <h2>2. Terceira Pessoa do Singular — Regras de -s, -es e -ies</h2>

        <p>
          Uma das características mais marcantes do Simple Present é a adição de <strong>-s</strong>,{" "}
          <strong>-es</strong> ou <strong>-ies</strong> ao verbo quando o sujeito é{" "}
          <strong>he, she</strong> ou <strong>it</strong> (terceira pessoa do singular). Esse
          detalhe é frequentemente cobrado em questões de vocabulário e identificação de tempo
          verbal no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Terminação do verbo</th>
                <th>Regra</th>
                <th>Exemplo</th>
                <th>3ª pessoa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maioria dos verbos</td>
                <td>Adiciona <strong>-s</strong></td>
                <td>work, play, run</td>
                <td>works, plays, runs</td>
              </tr>
              <tr>
                <td>-sh, -ch, -x, -o, -ss</td>
                <td>Adiciona <strong>-es</strong></td>
                <td>wash, watch, fix, go, miss</td>
                <td>washes, watches, fixes, goes, misses</td>
              </tr>
              <tr>
                <td>Consoante + -y</td>
                <td>Troca -y por <strong>-ies</strong></td>
                <td>study, try, fly, carry</td>
                <td>studies, tries, flies, carries</td>
              </tr>
              <tr>
                <td>Vogal + -y</td>
                <td>Adiciona apenas <strong>-s</strong></td>
                <td>play, enjoy, stay</td>
                <td>plays, enjoys, stays</td>
              </tr>
              <tr>
                <td>Verbos irregulares</td>
                <td>Formas especiais</td>
                <td>be → is; have → has</td>
                <td>is, has</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos de divulgação científica, é comum o uso de "it"
          como sujeito referindo-se a um fenômeno ou descoberta: <em>"The study shows that..."</em>,{" "}
          <em>"The virus spreads through..."</em>. Identificar o -s na terceira pessoa ajuda a
          confirmar que o texto usa Simple Present para descrever fatos gerais.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Uso 1</span>
        <h2>3. Quando Usar o Simple Present</h2>

        <p>
          O Simple Present tem usos bem definidos em inglês. Entender cada situação de uso é
          essencial para interpretar textos e responder questões que pedem o significado de um
          trecho ou a função de um tempo verbal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Hábitos e Rotinas</h3>
            <p>
              Ações que se repetem regularmente. Marcadores: <em>always, usually, often,
              sometimes, rarely, never, every day, on Mondays</em>.
              <br />
              <em>"She jogs every morning."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Fatos e Verdades Gerais</h3>
            <p>
              Afirmações que são sempre verdadeiras, incluindo fatos científicos.
              <br />
              <em>"Water boils at 100°C."</em>
              <br />
              <em>"The Earth revolves around the Sun."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Situações Permanentes</h3>
            <p>
              Estados que duram por um longo período ou são considerados definitivos.
              <br />
              <em>"He lives in São Paulo."</em>
              <br />
              <em>"She works at a hospital."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🚂</span>
            <h3>Horários e Programações Fixas</h3>
            <p>
              Para transportes, eventos e agendas estabelecidas.
              <br />
              <em>"The train leaves at 9 a.m."</em>
              <br />
              <em>"The conference starts on Monday."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Manchetes e Comentários</h3>
            <p>
              Manchetes de jornal frequentemente usam Simple Present para dar dinamismo.
              <br />
              <em>"Scientists discover new species."</em>
              <br />
              <em>"Government launches new policy."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🎬</span>
            <h3>Narração de Eventos</h3>
            <p>
              Em sinopses, resumos de filmes/livros e narração esportiva ao vivo.
              <br />
              <em>"The hero enters the cave and finds a map."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>4. Present Continuous — Estrutura e Formação</h2>

        <p>
          O <strong>Present Continuous</strong> (também chamado de Present Progressive) é formado
          com o verbo <strong>to be</strong> conjugado no presente (<em>am, is, are</em>) +
          o verbo principal na forma <strong>-ing</strong>. Essa estrutura indica que algo está
          acontecendo no momento da fala ou ao redor do momento presente.
        </p>

        <div className="math-block">
          <strong>Estrutura:</strong> Sujeito + am/is/are + verbo-ing
          <br />
          <em>I <strong>am studying</strong> right now.</em> — Eu estou estudando agora.
          <br />
          <em>She <strong>is working</strong> from home today.</em> — Ela está trabalhando de casa hoje.
          <br />
          <em>They <strong>are building</strong> a new school.</em> — Eles estão construindo uma nova escola.
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
                <td>Sujeito + am/is/are + -ing</td>
                <td><em>We are watching a movie.</em></td>
                <td>Nós estamos assistindo a um filme.</td>
              </tr>
              <tr>
                <td><strong>Negativa</strong></td>
                <td>Sujeito + am/is/are + not + -ing</td>
                <td><em>He isn't sleeping.</em></td>
                <td>Ele não está dormindo.</td>
              </tr>
              <tr>
                <td><strong>Interrogativa</strong></td>
                <td>Am/Is/Are + sujeito + -ing?</td>
                <td><em>Are you coming?</em></td>
                <td>Você está vindo?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          As regras de ortografia para adicionar <strong>-ing</strong> ao verbo:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Regra</th>
                <th>Verbo original</th>
                <th>Forma -ing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maioria dos verbos: adiciona -ing diretamente</td>
                <td>read, play, work</td>
                <td>reading, playing, working</td>
              </tr>
              <tr>
                <td>Termina em -e silencioso: remove o -e e adiciona -ing</td>
                <td>make, write, come</td>
                <td>making, writing, coming</td>
              </tr>
              <tr>
                <td>CVC (consoante-vogal-consoante) monossílabo: dobra a consoante final</td>
                <td>run, sit, swim, get</td>
                <td>running, sitting, swimming, getting</td>
              </tr>
              <tr>
                <td>Termina em -ie: troca por -y antes de -ing</td>
                <td>lie, die, tie</td>
                <td>lying, dying, tying</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Uso 2</span>
        <h2>5. Quando Usar o Present Continuous</h2>

        <p>
          O Present Continuous não é apenas para ações no exato momento da fala. Seus usos
          são mais amplos e frequentemente aparecem em textos do ENEM relacionados a campanhas,
          tendências e notícias.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>▶️</span>
            <h3>Ação em Progresso Agora</h3>
            <p>
              O uso mais claro: algo acontece no momento em que se fala.
              <br />
              Marcadores: <em>now, right now, at this moment, at the moment, currently</em>.
              <br />
              <em>"Look! It's raining."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3>Planos Futuros Pessoais</h3>
            <p>
              Compromissos já planejados e confirmados, geralmente com expressão de tempo futuro.
              <br />
              <em>"I'm meeting my boss tomorrow morning."</em>
              <br />
              <em>"They're getting married next month."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Tendências e Mudanças em Curso</h3>
            <p>
              Mudanças que estão acontecendo ao longo de um período, mesmo que não neste instante.
              <br />
              <em>"The climate is changing rapidly."</em>
              <br />
              <em>"More people are working remotely."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>😤</span>
            <h3>Comportamento Irritante (com always)</h3>
            <p>
              Com <em>always</em>, expressa irritação ou crítica a um comportamento repetitivo.
              <br />
              <em>"He is always interrupting me!"</em>
              <br />
              <em>"She's always complaining."</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>No ENEM:</strong> Textos de campanhas ambientais e sociais frequentemente usam
          o Present Continuous para expressar tendências preocupantes: <em>"The ice caps are
          melting. Forests are disappearing. Species are becoming extinct."</em> Reconhecer esse
          padrão ajuda a identificar a intenção argumentativa do texto.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exceção Importante</span>
        <h2>6. Stative Verbs — Verbos que Não Usam o Continuous</h2>

        <p>
          Em inglês, alguns verbos expressam <strong>estados mentais, emocionais ou físicos</strong>{" "}
          que, por sua natureza, não têm "progresso". Esses verbos são chamados de{" "}
          <em>stative verbs</em> (verbos de estado) e, na maioria dos contextos, <strong>não
          aparecem na forma contínua</strong>. Esse é um ponto frequentemente testado no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Processos Mentais e Cognitivos</h3>
            <p>
              <em>know, believe, think (= ter opinião), understand, remember, forget,
              recognize, realize, mean, doubt</em>
              <br />
              ✅ <em>"I know the answer."</em>
              <br />
              ❌ <em>"I am knowing the answer."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Emoções e Sentimentos</h3>
            <p>
              <em>love, hate, like, dislike, prefer, want, need, wish, adore, fear</em>
              <br />
              ✅ <em>"She loves music."</em>
              <br />
              ❌ <em>"She is loving music."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>👀</span>
            <h3>Percepção</h3>
            <p>
              <em>see, hear, smell, taste, feel (= perceber)</em>
              <br />
              ✅ <em>"I hear a noise."</em>
              <br />
              ❌ <em>"I am hearing a noise."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Posse e Existência</h3>
            <p>
              <em>have (= possuir), own, belong, contain, consist, include</em>
              <br />
              ✅ <em>"He has two cars."</em>
              <br />
              ❌ <em>"He is having two cars."</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Atenção aos verbos duais:</strong> Alguns verbos podem ser <em>stative</em> ou
          de ação dependendo do contexto. <em>"I think you're right"</em> (= acredito, stative)
          vs. <em>"I'm thinking about the problem"</em> (= estou refletindo, ação). O mesmo ocorre
          com <em>see</em> (= enxergar vs. encontrar alguém), <em>have</em> (= possuir vs.
          tomar/comer) e <em>taste</em> (= ter sabor vs. provar).
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>7. Simple Present vs. Present Continuous — Quadro Comparativo</h2>

        <p>
          Saber distinguir os dois tempos é fundamental para a interpretação de texto no ENEM.
          A diferença principal está entre o que é <em>permanente ou habitual</em> (Simple Present)
          e o que é <em>temporário ou em progresso</em> (Present Continuous).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Simple Present</th>
                <th>Present Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Quando usar</strong></td>
                <td>Hábitos, fatos, verdades gerais, programações fixas</td>
                <td>Ações em progresso, temporárias, planos futuros</td>
              </tr>
              <tr>
                <td><strong>Natureza</strong></td>
                <td>Permanente / recorrente</td>
                <td>Temporário / em andamento</td>
              </tr>
              <tr>
                <td><strong>Marcadores típicos</strong></td>
                <td>always, usually, often, every day, never</td>
                <td>now, right now, at the moment, today, this week</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td><em>She works at a school.</em></td>
                <td><em>She is working at a hospital this month.</em></td>
              </tr>
              <tr>
                <td><strong>Tradução</strong></td>
                <td>Ela trabalha em uma escola.</td>
                <td>Ela está trabalhando em um hospital este mês.</td>
              </tr>
              <tr>
                <td><strong>Stative verbs</strong></td>
                <td>✅ Compatível: <em>"I know her."</em></td>
                <td>❌ Incompatível: <em>"I am knowing her."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Observe a diferença em pares de frases com o mesmo verbo:
        </p>

        <div className="math-block">
          <em>"He <strong>lives</strong> in Rio."</em> → mora em Rio (permanente) — Simple Present
          <br />
          <em>"He <strong>is living</strong> in Rio for now."</em> → está morando em Rio temporariamente — Present Continuous
          <br /><br />
          <em>"I <strong>read</strong> every night."</em> → hábito — Simple Present
          <br />
          <em>"I <strong>am reading</strong> a great book."</em> → ação em andamento — Present Continuous
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>8. Linha do Tempo Verbal</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama comparando Simple Present e Present Continuous em uma linha do tempo">
            <defs>
              <marker id="arrow8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4f46e5" />
              </marker>
            </defs>
            {/* Linha do tempo */}
            <line x1="50" y1="110" x2="650" y2="110" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow8)" />
            {/* Passado */}
            <text x="55" y="130" fontSize="12" fill="#6b7280">Passado</text>
            {/* Agora */}
            <circle cx="350" cy="110" r="8" fill="#4f46e5" />
            <text x="335" y="140" fontSize="12" fill="#4f46e5" fontWeight="bold">AGORA</text>
            {/* Futuro */}
            <text x="590" y="130" fontSize="12" fill="#6b7280">Futuro</text>
            {/* Simple Present - linha tracejada horizontal representando hábito */}
            <line x1="100" y1="75" x2="620" y2="75" stroke="#10b981" strokeWidth="2" strokeDasharray="8,4" />
            <text x="200" y="65" fontSize="13" fill="#10b981" fontWeight="bold">Simple Present</text>
            <text x="180" y="52" fontSize="11" fill="#10b981">(hábito / fato permanente)</text>
            {/* Present Continuous - seta curta ao redor do agora */}
            <line x1="270" y1="160" x2="430" y2="160" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow8)" />
            <circle cx="350" cy="160" r="5" fill="#f59e0b" />
            <text x="265" y="185" fontSize="13" fill="#f59e0b" fontWeight="bold">Present Continuous</text>
            <text x="270" y="198" fontSize="11" fill="#f59e0b">(ação em progresso / temporária)</text>
          </svg>
          <figcaption>Simple Present (verde): ação recorrente que se estende no tempo. Present Continuous (amarelo): ação em curso ao redor do momento presente.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>9. Como Esses Tempos Aparecem no ENEM</h2>

        <p>
          O ENEM não testa gramática de forma isolada — ele testa a <strong>habilidade de
          interpretar textos autênticos</strong>. Os dois tempos do presente aparecem em contextos
          variados, e saber reconhecê-los ajuda a compreender o significado e a intenção do texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Textos Científicos</h3>
            <p>
              Usam Simple Present para descrever fatos, processos e descobertas como verdades gerais.
              <em>"The virus <strong>enters</strong> the cell and <strong>replicates</strong>
              its genetic material."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Campanhas e Manifestos</h3>
            <p>
              Usam Present Continuous para mostrar tendências preocupantes e urgência.
              <em>"The ocean <strong>is warming</strong>. Species <strong>are disappearing</strong>."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Manchetes de Jornal</h3>
            <p>
              Usam Simple Present para dar dinamismo a eventos recentes ou em andamento.
              <em>"Brazil <strong>signs</strong> new trade agreement."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🛒</span>
            <h3>Anúncios e Publicidade</h3>
            <p>
              Combinam os dois tempos: fatos sobre o produto (Simple Present) e o que está
              acontecendo com a promoção (Present Continuous).
              <em>"Our coffee <strong>tastes</strong> amazing. We <strong>are offering</strong>
              a free trial."</em>
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Tabela visual mostrando tipos de texto e o tempo verbal predominante">
            <rect width="700" height="200" fill="#f8fafc" rx="10" />
            <rect x="20" y="20" width="200" height="60" fill="#dbeafe" rx="8" />
            <text x="120" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Texto Científico</text>
            <text x="120" y="65" textAnchor="middle" fontSize="12" fill="#1e40af">Simple Present</text>
            <rect x="250" y="20" width="200" height="60" fill="#dcfce7" rx="8" />
            <text x="350" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Campanhas</text>
            <text x="350" y="65" textAnchor="middle" fontSize="12" fill="#166534">Present Continuous</text>
            <rect x="480" y="20" width="200" height="60" fill="#fef9c3" rx="8" />
            <text x="580" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#854d0e">Manchetes</text>
            <text x="580" y="65" textAnchor="middle" fontSize="12" fill="#854d0e">Simple Present</text>
            <rect x="130" y="110" width="200" height="60" fill="#fce7f3" rx="8" />
            <text x="230" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Publicidade</text>
            <text x="230" y="155" textAnchor="middle" fontSize="12" fill="#9d174d">Ambos os tempos</text>
            <rect x="370" y="110" width="200" height="60" fill="#ede9fe" rx="8" />
            <text x="470" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#5b21b6">Sinopse / Narração</text>
            <text x="470" y="155" textAnchor="middle" fontSize="12" fill="#5b21b6">Simple Present</text>
          </svg>
          <figcaption>Mapa de uso dos tempos verbais do presente nos gêneros textuais mais cobrados no ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Formação do Simple Present"
          statement={
            <p>
              Qual das alternativas preenche corretamente a lacuna na frase:{" "}
              <em>"My sister ______ English at a language school."</em>
            </p>
          }
          options={[
            { letter: "A", text: "teach" },
            { letter: "B", text: "teaches", correct: true },
            { letter: "C", text: "is teach" },
            { letter: "D", text: "teached" },
            { letter: "E", text: "is teaches" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B — teaches</strong>. O sujeito é <em>"My sister"</em>{" "}
              (terceira pessoa do singular — she). No Simple Present, a terceira pessoa do singular
              exige a adição de <strong>-es</strong> ao verbo <em>teach</em> (que termina em -ch).
              A opção A está errada porque <em>teach</em> sem -es seria usada com I/you/we/they.
              C e E misturam estruturas incorretamente. D usa a terminação de passado regular, que
              não se aplica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Stative Verbs e Present Continuous"
          statement={
            <p>
              Leia o diálogo e identifique a alternativa <strong>gramaticalmente correta</strong>:
              <br />
              <em>— What are you thinking about the new proposal?</em>
              <br />
              <em>— I think it's a great idea.</em>
            </p>
          }
          options={[
            { letter: "A", text: "Ambas as frases estão corretas." },
            { letter: "B", text: "A primeira frase está errada; deveria ser 'What do you think about the new proposal?'", correct: true },
            { letter: "C", text: "A segunda frase está errada; deveria ser 'I'm thinking it's a great idea.'" },
            { letter: "D", text: "As duas frases estão erradas." },
            { letter: "E", text: "A primeira está correta porque expressa ação em progresso." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. O verbo <em>think</em> quando significa
              "ter uma opinião" é um <strong>stative verb</strong> e não pode ser usado na forma
              contínua. A pergunta correta seria <em>"What do you think about..."</em> usando
              Simple Present. A segunda frase — <em>"I think it's a great idea"</em> — está
              correta, pois usa o Simple Present adequadamente para expressar uma opinião. A
              opção C está errada pelo mesmo motivo: <em>"I'm thinking"</em> estaria errado no
              contexto de expressar opinião.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Interpretação de Texto com Tempos do Presente"
          statement={
            <p>
              Leia o trecho de um artigo ambiental:
              <br /><br />
              <em>"Sea levels <strong>are rising</strong> at an unprecedented rate. Experts warn
              that coastal cities <strong>face</strong> increasing flood risks. The evidence
              <strong>shows</strong> that human activity <strong>is accelerating</strong> this
              process beyond natural cycles."</em>
              <br /><br />
              Sobre o uso dos tempos verbais no trecho, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: "Todos os verbos estão no Simple Present, indicando fatos permanentes." },
            { letter: "B", text: "O Present Continuous expressa tendências em curso, enquanto o Simple Present apresenta fatos estabelecidos.", correct: true },
            { letter: "C", text: "O uso do Present Continuous é um erro gramatical, pois 'sea levels' é um estado." },
            { letter: "D", text: "O Simple Present 'face' deveria ser substituído por Present Continuous para indicar urgência." },
            { letter: "E", text: "Os tempos verbais não têm relação com a intenção argumentativa do texto." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. O texto combina deliberadamente os dois
              tempos: <em>"are rising"</em> e <em>"is accelerating"</em> (Present Continuous)
              expressam tendências em andamento e preocupantes — estratégia retórica para criar
              urgência. Já <em>"face"</em> e <em>"shows"</em> (Simple Present) apresentam fatos
              estabelecidos e evidências científicas. Essa combinação é típica de textos de
              divulgação científica com apelo argumentativo no ENEM. A opção A está errada
              porque há formas contínuas no texto. C está errada: <em>rise</em> é um verbo de
              ação, não stative. D está errada: <em>face</em> no Simple Present está correto
              para expressar um fato sobre as cidades costeiras.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Simple Present em Manchete de Jornal"
          statement={
            <p>
              Considere a manchete de jornal:
              <br /><br />
              <em>"Government <strong>launches</strong> emergency program to fight hunger"</em>
              <br /><br />
              O uso do Simple Present nessa manchete tem como principal função:
            </p>
          }
          options={[
            { letter: "A", text: "Indicar que o lançamento do programa é um hábito recorrente do governo." },
            { letter: "B", text: "Expressar uma verdade científica sobre combate à fome." },
            { letter: "C", text: "Dar dinamismo e imediatismo a um evento recente, aproximando-o do leitor.", correct: true },
            { letter: "D", text: "Mostrar que o programa está sendo lançado neste exato momento." },
            { letter: "E", text: "Indicar um evento futuro planejado para ocorrer em breve." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. Em manchetes jornalísticas, o Simple
              Present é usado como um recurso estilístico chamado de <em>historic present</em>
              ou <em>journalistic present</em>. Embora o evento já tenha ocorrido (ou esteja
              ocorrendo), o presente simples é escolhido para criar um efeito de imediatismo e
              aproximação com o leitor, tornando a notícia mais vívida e dinâmica. Esse é um uso
              muito específico e frequente em manchetes inglesas — bem diferente de indicar hábito
              (A) ou verdade científica (B). D seria o Present Continuous; E seria <em>going to</em>
              ou Present Continuous para futuro.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Distinção entre Temporário e Permanente"
          statement={
            <p>
              Leia as duas frases de um anúncio de emprego:
              <br /><br />
              <em>(1) "Our company <strong>operates</strong> in over 40 countries."</em>
              <br />
              <em>(2) "We <strong>are expanding</strong> our operations in Latin America."</em>
              <br /><br />
              A diferença de significado entre as duas frases é:
            </p>
          }
          options={[
            { letter: "A", text: "A frase 1 é passada; a frase 2 é presente." },
            { letter: "B", text: "A frase 1 descreve uma situação permanente e estabelecida; a frase 2 indica um processo em curso e temporário.", correct: true },
            { letter: "C", text: "A frase 1 é mais urgente; a frase 2 é mais estática." },
            { letter: "D", text: "Ambas têm o mesmo significado, apenas com formas gramaticais diferentes." },
            { letter: "E", text: "A frase 2 refere-se a um plano futuro confirmado, não a algo em andamento." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. A frase 1 usa Simple Present{" "}
              (<em>operates</em>) para descrever uma característica permanente e estabelecida
              da empresa — ela opera nesses países de forma contínua e duradoura. A frase 2
              usa Present Continuous (<em>are expanding</em>) para indicar um processo que está
              em andamento agora, mas que tem natureza temporária ou evolutiva. Essa distinção
              é central no uso dos dois tempos e é exatamente o tipo de nuance que o ENEM
              avalia em questões de interpretação. A opção E teria alguma validade se houvesse
              uma expressão de tempo futuro, mas a frase indica processo em curso, não plano futuro.
            </p>
          }
        />
      </section>
    </article>
  );
}
