"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 6</span>
          <h1>Figuras de Linguagem</h1>
          <p>
            As figuras de linguagem são recursos expressivos que ampliam o
            poder comunicativo da língua, conferindo ao texto beleza, ênfase,
            ironia e profundidade. Dominá-las é essencial para interpretar
            textos literários e publicitários no ENEM, além de produzir uma
            redação com repertório linguístico sofisticado.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 1 — Visão Geral e Classificação */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">01 — Panorama Geral</span>
        <h2>O que são Figuras de Linguagem e como se classificam</h2>
        <p>
          <strong>Figuras de linguagem</strong> (ou figuras de estilo) são
          desvios intencionais da linguagem denotativa que produzem efeitos
          de sentido especiais. Enquanto a linguagem denotativa usa as palavras
          no seu significado literal e preciso, a linguagem <em>conotativa</em>{" "}
          explora sentidos figurados, emocionais e culturais. As figuras se
          dividem em quatro grandes grupos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Figuras de Palavras</h3>
            <p>
              Substituição do sentido original de uma palavra por outro,
              criando imagens e associações: metáfora, metonímia, comparação,
              sinestesia, catacrese, antonomásia.
            </p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Figuras de Pensamento</h3>
            <p>
              Jogos com ideias e conceitos que geram efeitos emocionais ou
              argumentativos: antítese, paradoxo, ironia, eufemismo, hipérbole,
              prosopopeia, apóstrofe, gradação.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Figuras de Construção</h3>
            <p>
              Alterações na estrutura sintática da frase, omitindo, repetindo
              ou deslocando termos: elipse, zeugma, pleonasmo, anacoluto,
              hipérbato, anáfora, assíndeto, polissíndeto.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Figuras de Som</h3>
            <p>
              Exploração dos sons das palavras para criar musicalidade,
              ritmo e efeitos expressivos: aliteração, assonância,
              paronomásia, onomatopeia.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O exame raramente pede que você nomeie a
          figura de linguagem diretamente. Em vez disso, pergunta qual
          <em> efeito de sentido</em> ela produz no texto. Foque sempre na
          função expressiva da figura, não apenas na sua nomenclatura.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 2 — Metáfora, Comparação e Catacrese */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">02 — Figuras de Palavras I</span>
        <h2>Metáfora, Comparação (Símile) e Catacrese</h2>
        <p>
          A <strong>metáfora</strong> é a rainha das figuras de linguagem. Ela
          estabelece uma <em>comparação implícita</em> entre dois elementos com
          base em uma semelhança percebida, sem o uso de conectivos
          comparativos. Ao contrário do que parece, a metáfora não é enfeite
          literário: ela estrutura nosso pensamento cotidiano. Quando dizemos
          "o tempo é dinheiro", estamos usando uma metáfora conceitual que
          orienta comportamentos.
        </p>

        <div className="math-block">
          <strong>Metáfora:</strong> "A vida é uma viagem sem mapa." (vida =
          viagem — comparação implícita, sem "como" ou "que nem")
          <br />
          <br />
          <strong>Comparação / Símile:</strong> "A vida é como uma viagem sem
          mapa." (conectivo comparativo "como" torna a relação explícita)
          <br />
          <br />
          <strong>Catacrese:</strong> "O pé da mesa quebrou." (originalmente
          metáfora, hoje cristalizada no uso — já não se percebe o sentido
          figurado)
        </div>

        <p>
          O <strong>símile</strong> (ou comparação) usa termos como{" "}
          <em>como, tal qual, feito, assim como, que nem</em> para aproximar
          dois elementos. É mais didático que a metáfora pois explicita a
          relação. A <strong>catacrese</strong> é uma metáfora "gasta" pelo uso
          repetido — o falante já não percebe que está usando linguagem
          figurada: "braço da poltrona", "dente de alho", "boca do rio".
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Figura</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metáfora</td>
                <td>Comparação implícita (sem conectivo)</td>
                <td>"Seus olhos são estrelas."</td>
                <td>Beleza, intensidade poética</td>
              </tr>
              <tr>
                <td>Comparação/Símile</td>
                <td>Comparação explícita (com conectivo)</td>
                <td>"Seus olhos brilham como estrelas."</td>
                <td>Clareza, ênfase descritiva</td>
              </tr>
              <tr>
                <td>Catacrese</td>
                <td>Metáfora lexicalizada</td>
                <td>"Pé da cadeira", "asa da xícara"</td>
                <td>Uso naturalizado, sem percepção figurada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 3 — Metonímia, Sinestesia e Antonomásia */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">03 — Figuras de Palavras II</span>
        <h2>Metonímia, Sinestesia e Antonomásia</h2>
        <p>
          A <strong>metonímia</strong> difere da metáfora porque não se baseia
          em semelhança, mas em <em>contiguidade</em> — uma relação real,
          lógica entre os elementos. Ela substitui um termo por outro com o
          qual mantém uma relação de proximidade, causa, posse ou sequência.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Autor pela Obra</h3>
            <p>"Lí todo o Machado." (Machado de Assis = obras de Machado)</p>
          </div>
          <div className="lesson-card">
            <span>🗓️</span>
            <h3>Causa pelo Efeito</h3>
            <p>"Vivo do meu suor." (suor = trabalho árduo que gera renda)</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Continente pelo Conteúdo</h3>
            <p>"Tomei dois copos." (copos = bebida contida nos copos)</p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Parte pelo Todo (Sinédoque)</h3>
            <p>"Não havia uma alma no lugar." (alma = pessoa)</p>
          </div>
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Produto pela Marca</h3>
            <p>"Preciso de um Band-Aid." (marca pela categoria de produto)</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Lugar pelo Produto</h3>
            <p>"Comprei um Porto." (vinho do Porto)</p>
          </div>
        </div>

        <p>
          A <strong>sinestesia</strong> é a fusão de sensações de campos
          sensoriais diferentes em uma única expressão: visão, audição, olfato,
          paladar e tato se entrelaçam. É muito frequente na poesia modernista.
          Já a <strong>antonomásia</strong> (ou perífrase) substitui um nome
          próprio por uma expressão que caracteriza o ser, ou vice-versa.
        </p>

        <div className="math-block">
          <strong>Sinestesia:</strong> "Ouvi um silêncio gritante." (silêncio =
          audição + gritante = audição/visão) | "Seu sorriso tinha um sabor
          amargo." (sorriso visual + sabor gustativo)
          <br />
          <br />
          <strong>Antonomásia:</strong> "O Rei do Futebol marcou mais um gol."
          (= Pelé) | "O poeta dos escravos denunciou a escravidão." (= Castro
          Alves)
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 4 — Figuras de Pensamento I */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">04 — Figuras de Pensamento I</span>
        <h2>Antítese, Paradoxo, Ironia e Eufemismo</h2>

        <p>
          As figuras de pensamento jogam com as <em>ideias</em> e a lógica
          dos conceitos, e não apenas com as palavras. A{" "}
          <strong>antítese</strong> aproxima termos ou ideias de sentido oposto
          para criar contraste expressivo. O <strong>paradoxo</strong> vai além:
          une ideias que parecem logicamente contraditórias, mas revelam uma
          verdade profunda quando bem interpretadas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Figura</th>
                <th>Definição</th>
                <th>Exemplo Clássico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Antítese</strong></td>
                <td>Oposição de ideias ou termos contrários</td>
                <td>"Amor é fogo que arde sem se ver" — Camões</td>
              </tr>
              <tr>
                <td><strong>Paradoxo</strong></td>
                <td>Contradição aparente que encerra verdade</td>
                <td>"Morro porque não morro" — Santa Teresa d'Ávila</td>
              </tr>
              <tr>
                <td><strong>Ironia</strong></td>
                <td>Dizer o contrário do que se pensa</td>
                <td>"Que governo honesto o nosso!" (= desonesto)</td>
              </tr>
              <tr>
                <td><strong>Eufemismo</strong></td>
                <td>Suavizar algo desagradável ou tabu</td>
                <td>"Ele passou desta para melhor." (= morreu)</td>
              </tr>
              <tr>
                <td><strong>Disfemismo</strong></td>
                <td>Agravar algo, usando expressão rude</td>
                <td>"Ele esticou as canelas." (= morreu, de forma vulgar)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>ironia</strong> é particularmente relevante no ENEM por
          aparecer em textos de humor, crítica social e publicidade. Ela pode
          ser detectada pela contradição entre o que é dito e o contexto
          situacional. O <strong>eufemismo</strong>, ao contrário, busca atenuar
          a carga negativa de uma expressão — é muito usado em discursos
          políticos e noticiários ("ajuste fiscal" em vez de "corte de gastos",
          "colaborador" em vez de "funcionário demitido").
        </p>

        <div className="lesson-highlight">
          <strong>Antítese vs. Paradoxo:</strong> Na antítese, os opostos
          convivem lado a lado sem se fundir ("O rico e o pobre, o bem e o
          mal"). No paradoxo, os opostos se <em>fundem</em> num mesmo ser ou
          situação, criando uma contradição que exige reflexão ("É ferida que
          dói e não se sente" — Camões).
        </div>

        {/* SVG 1 — Diagrama Antítese vs Paradoxo */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 200"
            width="520"
            height="200"
            aria-label="Diagrama comparativo entre antítese e paradoxo"
          >
            {/* Antítese */}
            <rect x="20" y="20" width="200" height="160" rx="12" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
            <text x="120" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#4338ca">ANTÍTESE</text>
            <circle cx="80" cy="110" r="32" fill="#6366f1" opacity="0.7" />
            <text x="80" y="115" textAnchor="middle" fontSize="11" fill="white">Luz</text>
            <circle cx="160" cy="110" r="32" fill="#f59e0b" opacity="0.7" />
            <text x="160" y="115" textAnchor="middle" fontSize="11" fill="white">Sombra</text>
            <text x="120" y="172" textAnchor="middle" fontSize="11" fill="#4338ca">Opostos separados</text>

            {/* Paradoxo */}
            <rect x="300" y="20" width="200" height="160" rx="12" fill="#fdf4ff" stroke="#a855f7" strokeWidth="2" />
            <text x="400" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7e22ce">PARADOXO</text>
            <circle cx="375" cy="110" r="36" fill="#6366f1" opacity="0.5" />
            <circle cx="425" cy="110" r="36" fill="#f59e0b" opacity="0.5" />
            <text x="400" y="115" textAnchor="middle" fontSize="11" fill="#3b0764">Luz+Sombra</text>
            <text x="400" y="172" textAnchor="middle" fontSize="11" fill="#7e22ce">Opostos fundidos</text>

            {/* Seta */}
            <line x1="220" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr)" />
          </svg>
          <figcaption>Antítese: opostos lado a lado. Paradoxo: opostos fundidos numa mesma realidade.</figcaption>
        </figure>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 5 — Figuras de Pensamento II */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">05 — Figuras de Pensamento II</span>
        <h2>Hipérbole, Litotes, Prosopopeia, Apóstrofe e Gradação</h2>

        <p>
          A <strong>hipérbole</strong> é um exagero deliberado para enfatizar
          uma ideia ou sentimento. Está presente tanto na linguagem cotidiana
          quanto na literária e publicitária. A <strong>litotes</strong> é o
          processo inverso: uma afirmação por meio de uma negação do contrário,
          ou uma atenuação da realidade com fins de modéstia ou ênfase
          indireta.
        </p>

        <div className="math-block">
          <strong>Hipérbole:</strong> "Já te falei um milhão de vezes!" | "Estou
          morrendo de fome." | "Chorei um rio de lágrimas."
          <br />
          <br />
          <strong>Litotes:</strong> "Ele não é lá muito inteligente." (=
          é pouco inteligente) | "O Brasil não é um país pobre." (= é um país
          rico) | "Não é nada mau esse vinho." (= é muito bom)
        </div>

        <p>
          A <strong>prosopopeia</strong> (ou personificação) atribui
          características humanas — sentimentos, ações, fala — a seres
          inanimados, animais ou entidades abstratas. É uma das figuras mais
          exploradas na literatura romântica e nos fabulistas. A{" "}
          <strong>apóstrofe</strong> consiste em interpelar diretamente um ser
          ausente, morto, abstrato ou inanimado.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Prosopopeia</h3>
            <p>
              "O mar chorava enquanto os navios partiam." "A saudade me abraça
              com mãos frias." Animais ou abstrações ganham vida humana.
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Apóstrofe</h3>
            <p>
              "Ó mar salgado, quanto do teu sal são lágrimas de Portugal!" —
              Fernando Pessoa. Convocação direta de um ser ausente ou abstrato.
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Gradação (Clímax)</h3>
            <p>
              Sequência de ideias em intensidade crescente (clímax) ou
              decrescente (anticlímax): "Vim, vi, venci." | "Um gemido,
              um soluço, um choro convulso."
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Reticência</h3>
            <p>
              Interrupção proposital do pensamento, criando efeito de
              suspense, constrangimento, subentendido ou emoção intensa:
              "Se eu te dissesse o que sinto..."
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 6 — Figuras de Construção I */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">06 — Figuras de Construção I</span>
        <h2>Elipse, Zeugma e Pleonasmo</h2>

        <p>
          As figuras de construção (ou sintáticas) alteram a estrutura
          gramatical da frase. A <strong>elipse</strong> é a omissão de um
          termo que pode ser facilmente subentendido pelo contexto, tornando a
          expressão mais concisa e dinâmica. O <strong>zeugma</strong> é um
          tipo específico de elipse: a omissão de um termo já mencionado
          anteriormente.
        </p>

        <div className="math-block">
          <strong>Elipse:</strong> "Na sala, silêncio." (omissão do verbo
          "havia") | "Comprei pão, [comprei] leite e [comprei] manteiga."
          <br />
          <br />
          <strong>Zeugma:</strong> "Ela prefere cinema; eu, teatro." (omissão
          de "prefiro" na segunda oração) | "Alguns usam óculos escuros; outros,
          chapéus." (omissão de "usam")
          <br />
          <br />
          <strong>Pleonasmo Expressivo:</strong> "Subir para cima" é vicioso,
          mas "Morreu ele, morreu sua esperança" é expressivo — reforça a ideia
          emotivamente.
        </div>

        <p>
          O <strong>pleonasmo</strong> merece atenção especial: nem sempre é
          erro! O <em>pleonasmo vicioso</em> é redundância desnecessária e
          revela falta de cuidado com a linguagem ("entrar para dentro",
          "subir para cima", "hemorragia de sangue"). Já o{" "}
          <em>pleonasmo expressivo</em> (ou literário) é recurso intencional de
          ênfase usado por grandes escritores, como em "Vou-me embora,
          vou-me embora" de Drummond.
        </p>

        <div className="lesson-highlight">
          <strong>Questão frequente no ENEM:</strong> Diferenciar pleonasmo
          vicioso (erro de linguagem) de pleonasmo expressivo (recurso
          estilístico). A chave está na intencionalidade e no contexto: em
          textos literários, a repetição quase sempre é proposital.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 7 — Figuras de Construção II */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">07 — Figuras de Construção II</span>
        <h2>Anacoluto, Hipérbato, Assíndeto e Polissíndeto</h2>

        <p>
          O <strong>anacoluto</strong> é a quebra da construção sintática
          regular, deixando um termo sem função gramatical clara na frase. É
          muito comum na linguagem oral e imita a fala natural, em que o falante
          começa uma frase e muda de direção. O <strong>hipérbato</strong>{" "}
          (ou inversão) altera a ordem direta dos termos da oração — sujeito,
          verbo, complemento — para fins estilísticos ou de ênfase.
        </p>

        <div className="math-block">
          <strong>Anacoluto:</strong> "Aquela menina, seus olhos brilhavam no
          escuro." ("Aquela menina" fica solto, sem função sintática clara —
          ela deveria ser sujeito, mas a frase muda de rumo)
          <br />
          <br />
          <strong>Hipérbato:</strong> "Minha terra tem palmeiras / Onde canta
          o sabiá." (Gonçalves Dias — a ordem direta seria "O sabiá canta onde
          minha terra tem palmeiras")
          <br />
          <br />
          <strong>Assíndeto:</strong> "Vim, vi, venci." (ausência de conectivos
          entre orações — ritmo ágil, cortante)
          <br />
          <br />
          <strong>Polissíndeto:</strong> "E a sereia e o tritão e o marinheiro /
          E a vaga e o temporal..." (repetição do mesmo conectivo — efeito de
          acúmulo, abundância)
        </div>

        <p>
          O contraste entre <strong>assíndeto</strong> e{" "}
          <strong>polissíndeto</strong> é muito explorado no ENEM. O assíndeto
          acelera o ritmo, cria tensão ou urgência. O polissíndeto desacelera,
          cria efeito de enumeração infinita, cansaço ou exuberância. Ambos
          podem funcionar como marca do estilo de um autor.
        </p>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 8 — Figuras de Construção III (Repetição) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">08 — Figuras de Construção III</span>
        <h2>Anáfora, Epístrofe e Quiasmo</h2>

        <p>
          As figuras de repetição criam ritmo, ênfase e coesão textual. A{" "}
          <strong>anáfora</strong> repete uma palavra ou expressão no{" "}
          <em>início</em> de versos ou orações consecutivas. A{" "}
          <strong>epístrofe</strong> repete no <em>fim</em>. O{" "}
          <strong>quiasmo</strong> inverte a ordem dos elementos em orações
          paralelas, criando uma estrutura cruzada (em forma de "X" — daí o
          nome, da letra grega chi, Χ).
        </p>

        {/* SVG 2 — Diagrama do Quiasmo */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 500 220"
            width="500"
            height="220"
            aria-label="Diagrama ilustrando a estrutura cruzada do quiasmo"
          >
            {/* Linha superior A-B */}
            <text x="60" y="60" fontSize="15" fontWeight="bold" fill="#6366f1">A</text>
            <text x="130" y="60" fontSize="13" fill="#334155">"Comer para viver"</text>
            <text x="380" y="60" fontSize="15" fontWeight="bold" fill="#f59e0b">B</text>

            {/* Linha inferior B-A */}
            <text x="60" y="160" fontSize="15" fontWeight="bold" fill="#f59e0b">B</text>
            <text x="130" y="160" fontSize="13" fill="#334155">"viver para comer"</text>
            <text x="380" y="160" fontSize="15" fontWeight="bold" fill="#6366f1">A</text>

            {/* Linhas cruzadas */}
            <line x1="80" y1="68" x2="390" y2="148" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5,4" />
            <line x1="390" y1="68" x2="80" y2="148" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,4" />

            {/* Legenda */}
            <rect x="140" y="100" width="220" height="28" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="250" y="119" textAnchor="middle" fontSize="12" fill="#64748b">Estrutura cruzada: A-B / B-A</text>

            {/* Título */}
            <text x="250" y="200" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7e22ce">QUIASMO</text>
          </svg>
          <figcaption>O quiasmo inverte a ordem dos elementos em orações paralelas, criando simetria cruzada.</figcaption>
        </figure>

        <div className="math-block">
          <strong>Anáfora:</strong> "Quero que minha vida seja assim, / Quero
          que minha alma seja assim, / Quero que meu amor seja assim."
          <br />
          <br />
          <strong>Epístrofe:</strong> "Com afeto ele falava, com paixão ele
          agia, com entrega ele amava." (repetição de "ele [verbo] no fim")
          <br />
          <br />
          <strong>Quiasmo:</strong> "Não vivo para comer; como para viver."
          (A-B / B-A) | "A arte imita a vida; a vida imita a arte."
        </div>

        <div className="lesson-highlight">
          <strong>Quiasmo no ENEM:</strong> Essa figura é muito usada em textos
          políticos e filosóficos para criar aforismos memoráveis. O efeito é
          de equilíbrio, reflexão e inversão irônica de perspectiva. Ex.:
          "Os homens fazem a história, mas a história também faz os homens."
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 9 — Figuras de Som */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">09 — Figuras de Som</span>
        <h2>Aliteração, Assonância, Paronomásia e Onomatopeia</h2>

        <p>
          As figuras de som exploram a dimensão sonora da linguagem, criando
          musicalidade, ritmo e efeitos expressivos por meio da repetição ou
          manipulação de sons. São essenciais na análise de textos poéticos e
          também aparecem em publicidade e jornalismo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🅰️</span>
            <h3>Aliteração</h3>
            <p>
              Repetição de sons consonantais semelhantes no início de palavras
              próximas: <em>"Vozes veladas, veludosas vozes..."</em> (Cruz e
              Sousa). O "v" cria suavidade e mistério.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔊</span>
            <h3>Assonância</h3>
            <p>
              Repetição de sons vocálicos semelhantes:{" "}
              <em>"Sou um mulato nato / no intervalo do gato..."</em> — sons em
              "a" e "o" criam melodia interna.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Paronomásia</h3>
            <p>
              Aproximação de palavras com sons parecidos mas sentidos
              diferentes (parônimos): <em>"Quem não lê, não vê."</em> |
              "É preciso ter calma para ter cama."
            </p>
          </div>
          <div className="lesson-card">
            <span>🔔</span>
            <h3>Onomatopeia</h3>
            <p>
              Palavra que imita o som que representa:{" "}
              <em>tic-tac, miau, zum-zum, splash, crack</em>. Muito usada em
              quadrinhos, poesia concreta e publicidade.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Análise de "O Corvo" (Poe / trad.):</strong>
          <br />
          "De repente ouvi um bater, / Um suave sussurar." — a aliteração em
          "s" imita o sussurro misterioso. | "Nevermore" — onomatopeia da
          negação sombria, reforçada pela aliteração do "n".
          <br />
          <br />
          <strong>Publicidade:</strong> "Red Bull te dá asas." — paronomásia
          latente em diversas traduções; aliterações em slogans: "Faz bem,
          faz Bom Bril."
        </div>

        <div className="lesson-highlight">
          <strong>Como identificar no ENEM:</strong> Em poemas, sempre leia em
          voz alta mentalmente. Pergunte: que sons se repetem? Que sensação
          esse padrão sonoro cria? Leveza, peso, velocidade, lentidão,
          alegria, melancolia?
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 10 — Figuras em Textos Multimodais e Publicidade */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">10 — Contexto ENEM</span>
        <h2>Figuras de Linguagem em Textos Publicitários e Midiáticos</h2>

        <p>
          O ENEM frequentemente usa textos publicitários, charges, letras de
          música e crônicas para cobrar figuras de linguagem em contexto real.
          Nesses gêneros, as figuras têm funções pragmáticas precisas: persuadir,
          criticar, divertir ou emocionar.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📣</span>
            <h3>Publicidade</h3>
            <p>
              Usa hipérbole ("O melhor da sua vida!"), metáfora ("Seu banco
              que cuida de você"), eufemismo e antítese para criar desejo e
              diferenciação de produto.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Letras de Música</h3>
            <p>
              Ricas em metáforas, prosopopeia e figuras de som. Chico Buarque,
              Caetano Veloso e Gilberto Gil são recorrentes no ENEM pela
              densidade figurativa.
            </p>
          </div>
          <div className="lesson-card">
            <span>✏️</span>
            <h3>Charges e Cartuns</h3>
            <p>
              A ironia é a figura central das charges. A interpretação exige
              reconhecer o contexto político-social e perceber a inversão
              entre o dito e o subentendido.
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Crônicas e Artigos</h3>
            <p>
              Eufemismo, antítese e gradação aparecem nos editoriais e crônicas.
              Autores como Luis Fernando Veríssimo usam ironia e hipérbole
              com maestria.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Figura</th>
                <th>Efeito Mais Comum</th>
                <th>Gênero Típico no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metáfora</td>
                <td>Criação de imagem poética / conceito abstrato</td>
                <td>Poema, publicidade, crônica</td>
              </tr>
              <tr>
                <td>Ironia</td>
                <td>Crítica social velada, humor</td>
                <td>Charge, crônica, artigo de opinião</td>
              </tr>
              <tr>
                <td>Hipérbole</td>
                <td>Ênfase, exagero emocional ou persuasivo</td>
                <td>Publicidade, texto oral, crônica</td>
              </tr>
              <tr>
                <td>Eufemismo</td>
                <td>Atenuação, polidez, manipulação</td>
                <td>Discurso político, nota oficial</td>
              </tr>
              <tr>
                <td>Prosopopeia</td>
                <td>Humanização, empatia com a natureza</td>
                <td>Poema, fábula, propaganda ambiental</td>
              </tr>
              <tr>
                <td>Aliteração</td>
                <td>Musicalidade, memória, ritmo</td>
                <td>Poema, slogan publicitário</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 11 — Mapa Mental Completo */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">11 — Síntese Visual</span>
        <h2>Mapa das Principais Figuras de Linguagem</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 600 400"
            width="600"
            height="400"
            aria-label="Mapa mental das figuras de linguagem organizadas por categoria"
          >
            {/* Centro */}
            <ellipse cx="300" cy="200" rx="70" ry="38" fill="#6366f1" />
            <text x="300" y="196" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Figuras de</text>
            <text x="300" y="212" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Linguagem</text>

            {/* Grupo: Palavras (esquerda) */}
            <ellipse cx="100" cy="90" rx="80" ry="32" fill="#818cf8" opacity="0.9" />
            <text x="100" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Figuras de</text>
            <text x="100" y="101" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Palavras</text>
            <line x1="172" y1="105" x2="233" y2="167" stroke="#818cf8" strokeWidth="2" />
            <text x="42" y="148" fontSize="10" fill="#334155">• Metáfora</text>
            <text x="42" y="163" fontSize="10" fill="#334155">• Metonímia</text>
            <text x="42" y="178" fontSize="10" fill="#334155">• Comparação</text>
            <text x="42" y="193" fontSize="10" fill="#334155">• Sinestesia</text>
            <text x="42" y="208" fontSize="10" fill="#334155">• Catacrese</text>

            {/* Grupo: Pensamento (cima) */}
            <ellipse cx="300" cy="50" rx="80" ry="32" fill="#f59e0b" opacity="0.9" />
            <text x="300" y="46" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Figuras de</text>
            <text x="300" y="61" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Pensamento</text>
            <line x1="300" y1="82" x2="300" y2="162" stroke="#f59e0b" strokeWidth="2" />
            <text x="220" y="118" fontSize="10" fill="#334155">• Antítese/Paradoxo</text>
            <text x="220" y="133" fontSize="10" fill="#334155">• Ironia/Eufemismo</text>
            <text x="220" y="148" fontSize="10" fill="#334155">• Hipérbole/Litotes</text>
            <text x="220" y="163" fontSize="10" fill="#334155">• Prosopopeia</text>

            {/* Grupo: Construção (direita) */}
            <ellipse cx="500" cy="90" rx="80" ry="32" fill="#10b981" opacity="0.9" />
            <text x="500" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Figuras de</text>
            <text x="500" y="101" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Construção</text>
            <line x1="428" y1="105" x2="367" y2="167" stroke="#10b981" strokeWidth="2" />
            <text x="390" y="148" fontSize="10" fill="#334155">• Elipse/Zeugma</text>
            <text x="390" y="163" fontSize="10" fill="#334155">• Pleonasmo</text>
            <text x="390" y="178" fontSize="10" fill="#334155">• Anáfora/Epístrofe</text>
            <text x="390" y="193" fontSize="10" fill="#334155">• Hipérbato</text>
            <text x="390" y="208" fontSize="10" fill="#334155">• Quiasmo</text>

            {/* Grupo: Som (baixo) */}
            <ellipse cx="300" cy="360" rx="80" ry="32" fill="#e11d48" opacity="0.9" />
            <text x="300" y="356" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Figuras de</text>
            <text x="300" y="371" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Som</text>
            <line x1="300" y1="238" x2="300" y2="328" stroke="#e11d48" strokeWidth="2" />
            <text x="195" y="268" fontSize="10" fill="#334155">• Aliteração</text>
            <text x="195" y="283" fontSize="10" fill="#334155">• Assonância</text>
            <text x="195" y="298" fontSize="10" fill="#334155">• Paronomásia</text>
            <text x="195" y="313" fontSize="10" fill="#334155">• Onomatopeia</text>
          </svg>
          <figcaption>Mapa das quatro categorias de figuras de linguagem e seus principais exemplares.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Roteiro de análise para o ENEM:</strong> (1) Identifique o
          gênero textual. (2) Localize expressões que fogem do sentido literal.
          (3) Classifique a figura (palavras, pensamento, construção ou som).
          (4) Defina o <em>efeito de sentido</em> que ela produz no contexto.
          (5) Relacione esse efeito com a intenção comunicativa do texto.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 12 — Exercícios */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">12 — Prática ENEM</span>
        <h2>Exercícios de Figuras de Linguagem</h2>

        <Exercise
          title="Exercício 1 — Metáfora e Metonímia"
          level="Básico"
          statement={
            <p>
              Analise as frases a seguir e identifique qual delas apresenta uma{" "}
              <strong>metonímia</strong> (e não uma metáfora):
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"A vida é uma peça de teatro sem ensaio.\" (Chaplin)",
            },
            {
              letter: "b",
              text: "\"Ela tem um coração de pedra.\"",
            },
            {
              letter: "c",
              text: "\"Li todo o Guimarães Rosa durante as férias.\"",
              correct: true,
            },
            {
              letter: "d",
              text: "\"O tempo é um rio que nunca para de correr.\"",
            },
          ]}
          resolution={
            <p>
              A alternativa C é metonímia do tipo <strong>autor pela obra</strong>:{" "}
              "Guimarães Rosa" (o autor) está sendo usado para indicar suas obras.
              Não há semelhança entre os elementos — há uma relação real de
              contiguidade (autor ↔ obra). As demais alternativas apresentam
              comparações implícitas (metáforas), em que os elementos são
              diferentes mas associados por semelhança percebida: vida ≈ peça de
              teatro; coração ≈ pedra; tempo ≈ rio.
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Antítese vs. Paradoxo"
          level="Intermediário"
          statement={
            <p>
              Leia o verso de Camões: <em>"É um não querer mais que bem querer"</em>.
              Qual figura de linguagem está presente e qual seu efeito de sentido?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Eufemismo — suaviza a dor do amor não correspondido.",
            },
            {
              letter: "b",
              text: "Antítese — contrasta o não querer com o bem querer de forma paralela.",
            },
            {
              letter: "c",
              text: "Paradoxo — une em um mesmo ser a negação e a afirmação do amor, revelando a natureza contraditória da paixão.",
              correct: true,
            },
            {
              letter: "d",
              text: "Hipérbole — exagera a intensidade do sentimento amoroso para criar comoção.",
            },
          ]}
          resolution={
            <p>
              Trata-se de <strong>paradoxo</strong>. O verso diz que amar é{" "}
              <em>não querer</em> e <em>bem querer</em> ao mesmo tempo — dois
              opostos fundidos em uma única experiência emocional. Isso não é
              mero contraste lado a lado (antítese), mas uma contradição real
              que existe dentro do sentimento amoroso: quem ama intensamente
              experimenta simultaneamente o desejo e a renúncia, a posse e a
              perda. O paradoxo é a figura que une opostos numa mesma realidade
              para revelar uma verdade mais profunda.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Figuras de Construção"
          level="Avançado"
          statement={
            <p>
              Em "Uns preferem o samba; outros, o axé; a juventude, o funk",
              identifique a figura de construção e explique por que ela é
              diferente da elipse simples.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Anacoluto — há quebra da sequência lógica da frase, deixando termos sem função.",
            },
            {
              letter: "b",
              text: "Zeugma — omissão de um verbo (\"preferem\") já enunciado, com base em termos que surgem posteriormente.",
              correct: true,
            },
            {
              letter: "c",
              text: "Hipérbato — os termos estão em ordem invertida em relação à ordem direta do português.",
            },
            {
              letter: "d",
              text: "Polissíndeto — repetição do conectivo entre os termos da enumeração.",
            },
          ]}
          resolution={
            <p>
              A figura é o <strong>zeugma</strong>, um subtipo de elipse. Na
              elipse simples, omite-se qualquer termo recuperável pelo contexto.
              No zeugma, especificamente, omite-se um termo (aqui, o verbo{" "}
              "preferem") que <em>já foi mencionado explicitamente</em> antes na
              frase. As locuções "outros, o axé" e "a juventude, o funk" só
              fazem sentido porque o leitor recupera o verbo da primeira oração.
              O efeito é de agilidade e paralelismo estilístico, muito comum
              em textos argumentativos e literários de alta densidade.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Ironia em Contexto"
          level="Contextualizado"
          statement={
            <p>
              Em uma crônica sobre o trânsito de São Paulo, o autor escreve:{" "}
              <em>
                "Que maravilhosa cidade esta, onde se passa apenas três horas
                para percorrer dez quilômetros. É um privilégio viver aqui."
              </em>{" "}
              Qual é o recurso expressivo predominante e qual seu efeito no texto?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Eufemismo — suaviza a crítica ao trânsito para não ofender os leitores paulistanos.",
            },
            {
              letter: "b",
              text: "Hipérbole — exagera o tempo de deslocamento para intensificar a crítica.",
            },
            {
              letter: "c",
              text: "Ironia — o autor diz o contrário do que pensa, usando termos positivos (\"maravilhosa\", \"privilégio\") para criticar uma situação negativa.",
              correct: true,
            },
            {
              letter: "d",
              text: "Antítese — contrasta a beleza da cidade com os problemas do trânsito de forma equilibrada.",
            },
          ]}
          resolution={
            <p>
              O recurso é a <strong>ironia</strong>. O cronista usa palavras
              positivas ("maravilhosa", "privilégio") para descrever uma
              situação objetivamente negativa (três horas para dez quilômetros).
              A contradição entre o discurso elogioso e a realidade absurda é o
              sinal da ironia. No ENEM, a ironia é detectada quando o tom
              laudatório não corresponde ao contexto real descrito — o leitor
              precisa mobilizar conhecimento de mundo para perceber o contraste
              e entender a crítica implícita. Note que, embora haja um possível
              exagero, o foco não é no exagero em si, mas na inversão intencional
              de avaliação (positivo para negativo).
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Figuras de Som em Poesia"
          level="Contextualizado"
          statement={
            <p>
              Cruz e Sousa escreveu: <em>"Vozes veladas, veludosas vozes, / Volúpias dos violões, / Vozes veladas..."</em>{" "}
              Que figura de som predomina e qual sensação ela constrói no leitor?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Assonância das vogais abertas \"a\" e \"e\", criando sensação de abertura e claridade.",
            },
            {
              letter: "b",
              text: "Onomatopeia — as palavras imitam diretamente os sons dos violões mencionados.",
            },
            {
              letter: "c",
              text: "Paronomásia — aproximação de palavras parônimas que criam duplo sentido.",
            },
            {
              letter: "d",
              text: "Aliteração do som \"v\", criando efeito de suavidade, velvosidade e mistério que se alinha à temática da volúpia.",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A figura é a <strong>aliteração</strong> — repetição do fonema
              consonantal /v/ em posição inicial: <em>vozes, veladas, veludosas,
              volúpias, violões</em>. O som labiodental fricativo /v/ é suave,
              quase um sussurro, e sua repetição cria uma musicalidade que imita
              a própria qualidade das vozes descritas — veladas, veludosas
              (aveludadas). Cruz e Sousa, poeta simbolista, explorava os sons
              das palavras para criar sinestesias e atmosferas sensoriais. Aqui,
              a aliteração em /v/ reforça visualmente e sonoramente a sensação
              de volúpia (prazer sensual), de algo que vibra suavemente, como
              as cordas de um violão. Este é o uso mais sofisticado da aliteração:
              não apenas ritmo, mas fusão entre forma sonora e conteúdo semântico.
            </p>
          }
        />
      </section>
    </article>
  );
}
