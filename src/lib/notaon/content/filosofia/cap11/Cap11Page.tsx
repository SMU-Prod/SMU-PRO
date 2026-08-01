"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 11</span>
          <h1>Patrística: Santo Agostinho e a relação entre fé e razão</h1>
          <p>
            Com o declínio do Império Romano e a expansão do Cristianismo, a Filosofia enfrentou
            um novo desafio: como conciliar a herança intelectual grega com a revelação cristã?
            Os chamados Padres da Igreja — especialmente Santo Agostinho — construíram uma das
            mais importantes sínteses entre fé e razão na história do pensamento ocidental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transição Histórica</span>
        <h2>1. A transição do mundo antigo ao medieval</h2>
        <p>
          O período de transição entre a Antiguidade e a Idade Média (sécs. II–VI d.C.) é marcado
          por três grandes processos históricos simultâneos:
        </p>
        <ul>
          <li><strong>Declínio do Império Romano:</strong> invasões bárbaras, crise econômica, fragmentação política.</li>
          <li><strong>Expansão do Cristianismo:</strong> de seita perseguida a religião oficial do Império (313 d.C., Édito de Milão; 380 d.C., Édito de Tessalônica).</li>
          <li><strong>Transformação da Filosofia:</strong> as escolas filosóficas pagãs foram progressivamente fechadas (a Academia platônica foi encerrada em 529 d.C. por ordem de Justiniano).</li>
        </ul>
        <p>
          Nesse contexto, os primeiros intelectuais cristãos precisavam responder: a Filosofia grega
          (especialmente Platão e Aristóteles) era útil para a fé cristã ou era contrária a ela?
        </p>
        <div className="lesson-highlight">
          <h3>Tertuliano vs. Justino Mártir</h3>
          <p>
            As duas posições extremas: <strong>Tertuliano</strong> (c. 160–220) afirmou que
            "Atenas nada tem a ver com Jerusalém" — a filosofia pagã é incompatível com a fé.
            <strong> Justino Mártir</strong> (c. 100–165) defendeu que a filosofia grega era
            uma "preparação para o Evangelho" — a razão e a fé convergem para a verdade. A
            Patrística majoritariamente seguiu Justino.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Patrística</span>
        <h2>2. O que é a Patrística?</h2>
        <p>
          A <strong>Patrística</strong> designa o período filosófico-teológico dos <em>Padres da Igreja</em>
          (Patres Ecclesiae) — pensadores cristãos dos primeiros séculos que elaboraram a doutrina cristã
          em diálogo com a filosofia grega e em polêmica com as heresias.
        </p>
        <p>
          O período vai aproximadamente do século II ao VIII d.C. Seus representantes mais
          importantes são:
        </p>
        <ul>
          <li><strong>Clemente de Alexandria</strong> (c. 150–215): defendeu o uso da filosofia grega como propedêutica (preparação) para a fé.</li>
          <li><strong>Orígenes</strong> (c. 185–254): grande sistematizador da teologia cristã, influenciado pelo neoplatonismo.</li>
          <li><strong>Basílio de Cesareia</strong> (330–379): organizou a vida monástica e contribuiu para a teologia trinitária.</li>
          <li><strong>Santo Ambrósio</strong> (340–397): bispo de Milão, mentor de Agostinho.</li>
          <li><strong>Santo Agostinho</strong> (354–430): o maior dos Padres latinos, síntese entre platonismo e cristianismo.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>3. A Patrística na história</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Linha do tempo da Patrística">
            {/* Linha principal */}
            <line x1="30" y1="100" x2="490" y2="100" stroke="#374151" strokeWidth="2"/>
            <polygon points="490,95 500,100 490,105" fill="#374151"/>

            {/* Marcos */}
            <circle cx="80" cy="100" r="5" fill="#1d4ed8"/>
            <line x1="80" y1="95" x2="80" y2="55" stroke="#1d4ed8" strokeWidth="1.5"/>
            <text x="80" y="44" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">Justino M.</text>
            <text x="80" y="57" textAnchor="middle" fontSize="9" fill="#6b7280">~100-165</text>
            <text x="80" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">Fé+Razão</text>

            <circle cx="155" cy="100" r="5" fill="#7c3aed"/>
            <line x1="155" y1="105" x2="155" y2="155" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="155" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">Tertuliano</text>
            <text x="155" y="177" textAnchor="middle" fontSize="9" fill="#6b7280">~160-220</text>
            <text x="155" y="88" textAnchor="middle" fontSize="9" fill="#6b7280">Fé só</text>

            <circle cx="230" cy="100" r="5" fill="#d97706"/>
            <line x1="230" y1="95" x2="230" y2="55" stroke="#d97706" strokeWidth="1.5"/>
            <text x="230" y="44" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#d97706">Orígenes</text>
            <text x="230" y="57" textAnchor="middle" fontSize="9" fill="#6b7280">185-254</text>
            <text x="230" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">Sistematiz.</text>

            {/* Édito Milão */}
            <circle cx="295" cy="100" r="5" fill="#059669"/>
            <line x1="295" y1="105" x2="295" y2="155" stroke="#059669" strokeWidth="1.5"/>
            <text x="295" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">Édito Milão</text>
            <text x="295" y="177" textAnchor="middle" fontSize="9" fill="#6b7280">313 d.C.</text>

            {/* Agostinho */}
            <circle cx="380" cy="100" r="7" fill="#b91c1c"/>
            <line x1="380" y1="93" x2="380" y2="55" stroke="#b91c1c" strokeWidth="2"/>
            <text x="380" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">Agostinho</text>
            <text x="380" y="57" textAnchor="middle" fontSize="9" fill="#6b7280">354-430</text>
            <text x="380" y="117" textAnchor="middle" fontSize="9" fill="#b91c1c">Ápice</text>

            {/* Fim Patrística */}
            <circle cx="460" cy="100" r="5" fill="#374151"/>
            <line x1="460" y1="105" x2="460" y2="155" stroke="#374151" strokeWidth="1.5"/>
            <text x="460" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Isidoro Sevilha</text>
            <text x="460" y="177" textAnchor="middle" fontSize="9" fill="#6b7280">†636 d.C.</text>

            <text x="260" y="195" textAnchor="middle" fontSize="9" fill="#9ca3af">→ séculos II–VII d.C.</text>
          </svg>
          <figcaption>Linha do tempo dos principais Padres da Igreja e marcos históricos da Patrística.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Santo Agostinho</span>
        <h2>4. Santo Agostinho: vida e conversão</h2>
        <p>
          <strong>Aurélio Agostinho</strong> nasceu em Tagaste (atual Argélia) em 354 d.C., filho
          de Patrício (pagão) e Mônica (cristã fervorosa). Foi uma das mentes mais brilhantes
          e inquietas da Antiguidade tardia.
        </p>
        <p>
          Sua trajetória intelectual e espiritual é narrada nas <em>Confissões</em> (397 d.C.),
          uma autobiografia filosófica sem precedentes. Agostinho passou pelo maniqueísmo
          (dualismo bem/mal), pelo ceticismo da Nova Academia e pelo neoplatonismo de Plotino
          antes de se converter ao Cristianismo em 387 d.C., sob influência de Ambrósio de Milão.
        </p>
        <p>
          Tornou-se bispo de Hipona em 396 d.C. e passou o resto da vida escrevendo e debatendo.
          Suas obras principais: <em>Confissões, A Cidade de Deus, De Trinitate, Sobre o Livre-Arbítrio</em>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fé e Razão</span>
        <h2>5. "Crê para entender": a relação entre fé e razão</h2>
        <p>
          Agostinho desenvolveu uma das reflexões mais sofisticadas sobre a relação entre
          fé e razão na história da filosofia. Sua posição clássica:
          <strong> "Crede ut intelligas"</strong> — "Crê para que possas entender."
        </p>
        <p>
          Isso não significa que a razão seja inútil — mas que a fé é o ponto de partida
          necessário para uma compreensão mais profunda da realidade. Fé e razão se
          complementam e se iluminam mutuamente:
        </p>
        <ul>
          <li><strong>A fé precede a razão</strong> em questões sobre Deus e a salvação — a razão sozinha não chega lá.</li>
          <li><strong>A razão aprofunda a fé</strong> — compreender os mistérios da fé com auxílio da razão é um ato de amor intelectual a Deus.</li>
          <li><strong>A razão iluminada</strong> — a mente humana só pode conhecer a verdade pela <em>iluminação divina</em>. Assim como os objetos só são visíveis pela luz do sol, as verdades só são acessíveis pela luz de Deus (adaptação do platonismo).</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Agostinho e Platão</h3>
          <p>
            Agostinho cristianizou o platonismo: as Formas platônicas eternas e perfeitas tornam-se
            as <em>Ideias na mente de Deus</em> — os modelos eternos segundo os quais Deus criou o mundo.
            O "mundo das Formas" não é um reino separado e autônomo, mas o pensamento do Criador.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Cidade de Deus</span>
        <h2>6. A Cidade de Deus vs. Cidade dos Homens</h2>
        <p>
          Após o saque de Roma pelos visigodos em 410 d.C., Agostinho escreveu <em>A Cidade de Deus</em>
          (413–426 d.C.) — uma monumental reflexão sobre história, política e teologia. Nela propõe
          a existência de duas "cidades" (communitas) que coexistem ao longo da história:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Cidade de Deus</th>
                <th>Cidade dos Homens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fundamento</strong></td>
                <td>Amor a Deus até o desprezo de si</td>
                <td>Amor próprio até o desprezo de Deus</td>
              </tr>
              <tr>
                <td><strong>Membros</strong></td>
                <td>Os que amam a Deus e vivem por Ele</td>
                <td>Os que vivem pelos prazeres terrenos</td>
              </tr>
              <tr>
                <td><strong>Destino</strong></td>
                <td>A beatitude eterna</td>
                <td>A condenação eterna</td>
              </tr>
              <tr>
                <td><strong>Relação com Roma</strong></td>
                <td>Peregrina na terra, busca a paz celestial</td>
                <td>Identificada com os impérios terrenos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Essa visão dualista da história influenciou profundamente a política medieval:
          a tensão entre Igreja e Estado, entre poder espiritual e poder temporal, é a
          expressão histórica do conflito entre as duas cidades.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Livre-Arbítrio e Tempo</span>
        <h2>7. Livre-arbítrio, mal e teoria do tempo</h2>
        <p>
          Agostinho enfrentou o problema do <strong>mal</strong>: se Deus é bom e onipotente, por
          que existe o mal? Sua resposta: o mal não é uma substância criada por Deus — é uma
          <em> privação do bem</em> (<em>privatio boni</em>). O mal é ausência de bem, assim como
          a sombra é ausência de luz. Sua origem está no <strong>livre-arbítrio</strong> das
          criaturas racionais (anjos e humanos), que podem desviar-se do Bem.
        </p>
        <p>
          Nas <em>Confissões</em>, Agostinho desenvolveu uma teoria original do <strong>tempo</strong>:
          o tempo não existe objetivamente no mundo — existe na <em>alma humana</em>. O passado é
          memória (praesens de praeteritis), o presente é atenção (praesens de praesentibus) e o
          futuro é expectativa (praesens de futuris). Uma das análises mais sofisticadas da
          temporalidade antes de Husserl e Heidegger.
        </p>
        <div className="lesson-highlight">
          <h3>A conversão e o coração inquieto</h3>
          <p>
            Abertura das <em>Confissões</em>: "Tu nos fizeste para Ti, e nosso coração está inquieto
            até que repouse em Ti." Para Agostinho, o ser humano tem um desejo insaciável de infinito
            que só Deus pode satisfazer — a busca filosófica culmina na busca religiosa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Influência e ENEM</span>
        <h2>8. A influência de Agostinho na filosofia ocidental e no ENEM</h2>
        <p>
          Santo Agostinho é o filósofo medieval mais cobrado no ENEM. Sua influência atravessa
          séculos e pode ser rastreada em múltiplas tradições filosóficas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo/Corrente posterior</th>
                <th>Herança agostiniana</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Anselmo de Cantuária (séc. XI)</strong></td>
                <td>"Fé em busca de inteligência" — retoma a relação fé/razão de Agostinho</td>
              </tr>
              <tr>
                <td><strong>São Tomás de Aquino (séc. XIII)</strong></td>
                <td>Dialoga e discorda de Agostinho: razão tem esfera própria além da fé (via Aristóteles)</td>
              </tr>
              <tr>
                <td><strong>Reforma Protestante (séc. XVI)</strong></td>
                <td>Lutero e Calvino buscam Agostinho contra o escolasticismo; predestinação, graça</td>
              </tr>
              <tr>
                <td><strong>Descartes (séc. XVII)</strong></td>
                <td>"Cogito ergo sum" tem antecedente em Agostinho: "Si fallor, sum" (Se me engano, existo)</td>
              </tr>
              <tr>
                <td><strong>Hannah Arendt (séc. XX)</strong></td>
                <td>Tese doutoral sobre Agostinho; conceito de amor e comunidade política derivados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No ENEM, Agostinho aparece tipicamente em questões sobre: relação entre fé e razão na
          Idade Média; o problema do mal; a teoria das duas cidades; e a reflexão filosófica sobre
          o tempo e a memória. Palavras-chave que indicam Agostinho: <em>privatio boni, iluminação
          divina, duas cidades, livre-arbítrio, Confissões, Cidade de Deus</em>.
        </p>
        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            Quando o ENEM apresentar um texto sobre fé e razão na Idade Média, identifique se o
            foco é em <strong>Agostinho</strong> (Patrística, séc. V, síntese com platonismo) ou em
            <strong> Tomás de Aquino</strong> (Escolástica, séc. XIII, síntese com aristotelismo).
            São dois momentos distintos: a Patrística estabelece a relação fé-razão; a Escolástica
            a sistematiza racionalmente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agostinho no ENEM</span>
        <h2>9. Santo Agostinho no ENEM: Fé, Razão e Temas Recorrentes</h2>
        <p>
          Santo Agostinho é o filósofo medieval mais cobrado no ENEM. Suas ideias aparecem
          em questões sobre a relação entre fé e razão, a origem do mal, a teoria do tempo
          e a distinção entre as duas cidades. Conhecer os padrões de questão é essencial:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema agostiniano</th>
                <th>Como aparece no ENEM</th>
                <th>Armadilha clássica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fé e razão</td>
                <td>Texto sobre a relação entre conhecimento filosófico e crença religiosa</td>
                <td>Dizer que Agostinho rejeita a razão — na verdade ele a subordina à fé ("crê para entender"), não a elimina</td>
              </tr>
              <tr>
                <td>O mal como privação</td>
                <td>Texto sobre a origem do mal no mundo criado por Deus bom</td>
                <td>Dizer que o mal é uma substância ou força positiva — para Agostinho o mal é privação de bem (ausência), não entidade</td>
              </tr>
              <tr>
                <td>Duas cidades</td>
                <td>Texto sobre relação entre Igreja e Estado, religioso e secular</td>
                <td>Confundir a Cidade de Deus com a Igreja institucional — é a comunidade dos que amam a Deus, não necessariamente a Igreja visível</td>
              </tr>
              <tr>
                <td>Teoria do tempo</td>
                <td>Texto sobre memória, presente e eternidade divina</td>
                <td>Confundir passado/presente/futuro com estados reais — para Agostinho são estados da mente: memória, intuição, expectativa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A frase mais cobrada de Agostinho</h3>
          <p>
            "Crê para entender; entende para melhor crer" (<em>crede ut intelligas</em>) é a
            síntese da relação agostiniana entre fé e razão. Ela aparece frequentemente em
            questões sobre epistemologia medieval: a fé não anula a razão — ela a orienta e
            a potencializa. Sem fé, a razão não alcança as verdades mais profundas; com fé,
            ela pode compreendê-las mais plenamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✝️</span>
            <h3>Patrística</h3>
            <p>Padres da Igreja (sécs. II–VIII) sintetizaram filosofia grega e revelação cristã.</p>
          </div>
          <div className="math-card">
            <span>🙏</span>
            <h3>Agostinho</h3>
            <p>354-430. Trajetória: maniqueísmo → ceticismo → neoplatonismo → Cristianismo.</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Fé e Razão</h3>
            <p>"Crê para entender." Fé precede, razão aprofunda. Iluminação divina do intelecto.</p>
          </div>
          <div className="math-card">
            <span>🏙️</span>
            <h3>Duas Cidades</h3>
            <p>Cidade de Deus (amor a Deus) vs. Cidade dos Homens (amor próprio). Tensão histórica.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Mal e Liberdade</h3>
            <p>Mal = privatio boni (ausência de bem). Origem: livre-arbítrio das criaturas racionais.</p>
          </div>
          <div className="math-card">
            <span>⏳</span>
            <h3>Teoria do Tempo</h3>
            <p>O tempo existe na alma: passado=memória, presente=atenção, futuro=expectativa.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Patrística"
          statement={<p>A Patrística designa o período filosófico dos primeiros séculos do Cristianismo em que os Padres da Igreja buscaram:</p>}
          options={[
            { letter: "a", text: "Eliminar toda a influência da filosofia grega para purificar o pensamento cristão." },
            { letter: "b", text: "Elaborar a doutrina cristã em diálogo com a filosofia grega, especialmente o platonismo.", correct: true },
            { letter: "c", text: "Desenvolver um sistema filosófico completamente independente da tradição religiosa." },
            { letter: "d", text: "Recuperar exclusivamente o pensamento de Aristóteles para fundamentar a teologia cristã." },
          ]}
          resolution={<p>A <strong>Patrística</strong> é caracterizada pelo esforço de <em>síntese</em> entre a herança filosófica greco-romana e a revelação cristã. Os Padres da Igreja majoritariamente adotaram a posição de Justino Mártir: a filosofia, especialmente o platonismo, é uma "preparação para o Evangelho" e pode ser usada para compreender e defender a fé. Agostinho, o maior dos Padres latinos, é o exemplo mais eloquente dessa síntese: cristalizou o platonismo dentro do pensamento cristão.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Fé e Razão em Agostinho"
          statement={<p>Santo Agostinho afirmou "Crede ut intelligas" (Crê para que possas entender). Essa máxima expressa a visão de que:</p>}
          options={[
            { letter: "a", text: "A razão é superior à fé e deve preceder e fundamentar qualquer ato de crença religiosa." },
            { letter: "b", text: "A fé e a razão são completamente incompatíveis e não podem coexistir no mesmo sistema filosófico." },
            { letter: "c", text: "A fé é o ponto de partida necessário que torna possível a compreensão mais profunda das verdades reveladas.", correct: true },
            { letter: "d", text: "A crença religiosa dispensa completamente o uso da razão filosófica na vida cristã." },
          ]}
          resolution={<p>A máxima agostiniana não despreza a razão — afirma que a fé é o <em>ponto de partida</em> que permite à razão avançar em direção à compreensão. Sem o comprometimento da fé, certas verdades permanecem inacessíveis à razão. Com a fé, a razão iluminada pode compreendê-las mais profundamente. Agostinho também afirma o contrário: "Intellige ut credas" (Entende para que possas crer) — fé e razão são mutuamente reforçadoras. Essa posição será retomada e desenvolvida por Anselmo de Cantuária (séc. XI) e Tomás de Aquino (séc. XIII).</p>}
        />

        <Exercise
          level="Avançado"
          title="3. O Problema do Mal"
          statement={<p>Agostinho respondeu ao problema do mal afirmando que ele é uma "privatio boni" (privação do bem). Esse conceito implica que:</p>}
          options={[
            { letter: "a", text: "O mal é uma substância criada por um princípio negativo oposto a Deus — posição que Agostinho havia aprendido no maniqueísmo." },
            { letter: "b", text: "O mal não existe realmente — é apenas uma ilusão criada pelos sentidos humanos imperfeitos." },
            { letter: "c", text: "O mal não tem existência própria — é a ausência ou corrupção do bem, assim como a sombra é ausência de luz.", correct: true },
            { letter: "d", text: "O mal é criado por Deus como instrumento de punição para as criaturas que pecam contra Ele." },
          ]}
          resolution={<p>A teoria da <em>privatio boni</em> é central na teodiceia agostiniana. Ao contrário do maniqueísmo (que havia seduzido Agostinho por anos), que afirma dois princípios co-eternos (bem e mal), Agostinho argumenta que o mal <em>não é uma substância</em> — é a ausência de bem onde deveria existir bem. Assim como a sombra não existe por si mesma (é ausência de luz), o mal não existe por si mesmo. Sua origem não está em Deus (que é puro bem), mas no <strong>livre-arbítrio</strong> das criaturas que se afastam do Bem Supremo.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) As Duas Cidades e a Política"
          statement={<p>"Dois amores fundaram duas cidades: o amor próprio até o desprezo de Deus fundou a cidade terrena; o amor a Deus até o desprezo de si fundou a cidade celeste." (Agostinho, A Cidade de Deus). Com base nesse texto, a "cidade dos homens" para Agostinho se caracteriza por:</p>}
          options={[
            { letter: "a", text: "Ser idêntica à Igreja Católica, que governa os homens segundo os princípios divinos." },
            { letter: "b", text: "Basear-se no amor próprio e na busca dos bens terrenos — poder, glória e prazer — em detrimento do Bem divino.", correct: true },
            { letter: "c", text: "Representar a sociedade perfeita que os cristãos devem construir na terra segundo os princípios do Evangelho." },
            { letter: "d", text: "Ser a comunidade dos fiéis que aguardam a segunda vinda de Cristo para estabelecer o reino de Deus." },
          ]}
          resolution={<p>Para Agostinho, as <em>duas cidades</em> não são geograficamente localizáveis — são duas <em>orientações de amor</em> que perpassam toda a história humana. A "cidade dos homens" (civitas terrena) não é necessariamente má — é a organização política dos seres humanos quando guiada pelo amor próprio e pelos bens terrenos (poder, glória, prazer). O Império Romano é seu maior exemplar histórico. A "Cidade de Deus" (civitas Dei) é a comunidade dos que amam a Deus acima de tudo — ela está "em peregrinação" na terra. Essa distinção influenciou profundamente a relação entre Igreja e Estado ao longo da Idade Média.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Agostinho e o Tempo"
          statement={<p>"O que é, pois, o tempo? Se ninguém mo perguntar, eu sei; se o quiser explicar a quem me fizer a pergunta, já não sei." (Agostinho, Confissões). Nessa passagem, Agostinho toca num tema filosófico central: a natureza do tempo. Sua conclusão mais importante sobre o tempo foi que:</p>}
          options={[
            { letter: "a", text: "O tempo é uma ilusão — apenas o eterno presente de Deus é real, e o passado e o futuro não existem." },
            { letter: "b", text: "O tempo é uma dimensão objetiva do universo físico, independente da consciência humana." },
            { letter: "c", text: "O tempo existe primariamente na alma humana: como memória (passado), atenção (presente) e expectativa (futuro).", correct: true },
            { letter: "d", text: "O tempo foi criado por Deus como punição para os seres humanos após o pecado original." },
          ]}
          resolution={<p>A teoria do tempo de Agostinho é de uma modernidade impressionante. Contra as concepções físicas do tempo (como a de Aristóteles, que ligava o tempo ao movimento), Agostinho interioriza o tempo: ele existe como <em>experiência da consciência</em>. O "passado" não existe mais — só existe como <em>memória</em> na alma; o "futuro" ainda não existe — só existe como <em>expectativa</em>; o "presente" é apenas um instante fugidio — existe como <em>atenção</em>. Essa análise antecipa o fenomenólogo Husserl (séc. XX) e influencia Heidegger na análise da temporalidade humana.</p>}
        />
      </section>
    </article>
  );
}
