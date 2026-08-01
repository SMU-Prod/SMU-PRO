"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 18</span>
          <h1>Empirismo: Locke, Berkeley e Hume</h1>
          <p>
            O empirismo é a corrente filosófica que defende que todo conhecimento tem origem na
            experiência sensorial. Surgido principalmente na Inglaterra nos séculos XVII e XVIII,
            o empirismo — representado por Locke, Berkeley e Hume — opôs-se ao racionalismo
            cartesiano e lançou as bases para a ciência experimental e a filosofia crítica de Kant.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Tese Central</span>
        <h2>1. O que é o Empirismo?</h2>
        <p>
          O <strong>empirismo</strong> (do grego <em>empeiria</em>, experiência) afirma que:
        </p>
        <ul>
          <li>Todo conhecimento humano deriva, em última instância, da <strong>experiência sensorial</strong>.</li>
          <li>Não existem <strong>ideias inatas</strong> — a mente nasce como uma <em>tábula rasa</em> (lousa em branco).</li>
          <li>O conhecimento é construído progressivamente a partir da percepção, da memória, da imaginação e da reflexão sobre as experiências.</li>
          <li>Verdades necessárias e universais são difíceis de justificar empiricamente (problema apontado por Hume).</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Empirismo vs. Racionalismo</h3>
          <p>
            Enquanto Descartes afirmava que o conhecimento genuíno vem da razão e das ideias inatas,
            Locke e Hume afirmavam que ele vem da experiência. Essa oposição é o grande debate da
            filosofia moderna, que Kant tentou superar com sua "revolução copernicana" na filosofia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">John Locke</span>
        <h2>2. John Locke (1632–1704): Tábula Rasa e Ideias Simples</h2>
        <p>
          <strong>John Locke</strong> formulou o empirismo clássico no <em>Ensaio sobre o Entendimento
          Humano</em> (1689). Sua tese central: a mente humana nasce vazia — uma <em>tábula rasa</em>
          (lousa em branco) — e todo o seu conteúdo vem da experiência.
        </p>
        <p>
          Locke distinguia dois tipos de ideias:
        </p>
        <ul>
          <li>
            <strong>Ideias simples:</strong> chegam diretamente pela sensação (ex.: vermelho, quente,
            doce) ou pela reflexão (ex.: pensar, querer). São passivas — a mente as recebe sem criar.
          </li>
          <li>
            <strong>Ideias complexas:</strong> a mente combina, relaciona e abstrai ideias simples para
            criar ideias complexas (ex.: "maçã" = vermelha + redonda + doce + crocante...). Incluem
            substâncias, modos e relações.
          </li>
        </ul>
        <p>
          Locke também distinguia <strong>qualidades primárias</strong> (forma, extensão, movimento —
          existem no objeto independentemente do observador) e <strong>qualidades secundárias</strong>
          (cor, cheiro, sabor — dependem do observador). Essa distinção influenciou a física clássica.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 180" width="480" height="180" aria-label="A mente como tábula rasa segundo Locke">
            <rect x="10" y="10" width="460" height="160" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="240" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">A Mente como Tábula Rasa — Locke</text>
            {/* Nascimento */}
            <rect x="30" y="50" width="110" height="90" rx="8" fill="#fff" stroke="#d1d5db" strokeWidth="1.5"/>
            <text x="85" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6b7280">Nascimento</text>
            <text x="85" y="95" textAnchor="middle" fontSize="24" fill="#d1d5db">∅</text>
            <text x="85" y="130" textAnchor="middle" fontSize="9" fill="#9ca3af">Tábula rasa</text>

            <text x="173" y="98" textAnchor="middle" fontSize="22" fill="#ca8a04">+</text>

            {/* Experiência */}
            <rect x="195" y="50" width="110" height="90" rx="8" fill="#fef3c7" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="250" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Experiência</text>
            <text x="250" y="95" textAnchor="middle" fontSize="20" fill="#b45309">👁 👂 ✋</text>
            <text x="250" y="130" textAnchor="middle" fontSize="9" fill="#92400e">Sensações</text>

            <text x="338" y="98" textAnchor="middle" fontSize="22" fill="#ca8a04">=</text>

            {/* Conhecimento */}
            <rect x="355" y="50" width="110" height="90" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="410" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">Conhecimento</text>
            <text x="410" y="97" textAnchor="middle" fontSize="9" fill="#047857">Ideias simples</text>
            <text x="410" y="112" textAnchor="middle" fontSize="9" fill="#047857">→ Ideias complexas</text>
            <text x="410" y="130" textAnchor="middle" fontSize="9" fill="#047857">→ Saber</text>
          </svg>
          <figcaption>Para Locke, a mente nasce vazia; o conhecimento é construído pela experiência.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">George Berkeley</span>
        <h2>3. George Berkeley (1685–1753): "Existir é ser percebido"</h2>
        <p>
          <strong>George Berkeley</strong>, bispo irlandês, radicalizou o empirismo de Locke. Sua
          tese: as <em>qualidades primárias</em> de Locke também dependem do observador. Na verdade,
          <em> toda</em> qualidade é secundária — tudo que existe são ideias na mente.
        </p>
        <p>
          Sua fórmula célebre: <em>"Esse est percipi"</em> — "Existir é ser percebido". Os objetos
          físicos não existem independentemente da mente que os percebe; são apenas conjuntos de ideias.
          Uma maçã, por exemplo, é um conjunto de cores, formas e sabores — todos eles experiências
          mentais.
        </p>
        <p>
          Mas então, quando não olhamos para a maçã, ela deixa de existir? Berkeley resolveu isso com
          Deus: Deus percebe continuamente todas as coisas, garantindo sua existência permanente. Esse
          <strong> imaterialismo</strong> de Berkeley é uma das posições mais paradoxais da filosofia.
        </p>
        <div className="lesson-highlight">
          <h3>Berkeley e o idealismo</h3>
          <p>
            O imaterialismo de Berkeley é uma forma de <strong>idealismo</strong> — a doutrina de que
            a realidade é fundamentalmente mental. Kant e os idealistas alemães do século XIX (Fichte,
            Schelling, Hegel) desenvolveram formas mais sofisticadas dessa posição.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">David Hume</span>
        <h2>4. David Hume (1711–1776): Ceticismo, Causalidade e o Self</h2>
        <p>
          <strong>David Hume</strong>, filósofo escocês, levou o empirismo às suas conclusões mais
          radicais no <em>Tratado da Natureza Humana</em> (1739) e na <em>Investigação sobre o
          Entendimento Humano</em> (1748).
        </p>
        <p>
          Seus pontos centrais:
        </p>
        <ul>
          <li>
            <strong>Impressões e ideias:</strong> as percepções se dividem em <em>impressões</em>
            (percepções vívidas, diretas — sensações, emoções) e <em>ideias</em> (cópias mais
            apagadas das impressões, usadas no pensamento e na memória). Ideias sem impressões
            correspondentes são vazias.
          </li>
          <li>
            <strong>Crítica à causalidade:</strong> quando vejo bola A atingir bola B, não percebo
            nenhuma "força" ou "necessidade" entre as duas — apenas a sucessão regular. A causalidade
            não é observada; é um <em>hábito mental</em> que projeta no mundo a regularidade das
            nossas experiências passadas.
          </li>
          <li>
            <strong>Problema da indução:</strong> o fato de que o Sol nasceu todos os dias até hoje
            não prova logicamente que nascerá amanhã. A indução não garante certeza — apenas
            probabilidade. Esse é o famoso <strong>problema da indução</strong>.
          </li>
          <li>
            <strong>O "eu" como feixe de percepções:</strong> ao introspeccionar, não encontro um
            "eu" permanente — apenas um feixe de percepções em fluxo constante (<em>bundle theory
            of the self</em>). Não há substância mental permanente.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>5. Tabela Comparativa: Locke, Berkeley e Hume</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Locke</th>
                <th>Berkeley</th>
                <th>Hume</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem do conhecimento</td>
                <td>Experiência sensorial</td>
                <td>Percepção mental</td>
                <td>Impressões e ideias</td>
              </tr>
              <tr>
                <td>Tábula rasa?</td>
                <td>Sim</td>
                <td>Sim (radicalizado)</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Mundo externo</td>
                <td>Existe (qualidades primárias)</td>
                <td>Só existem ideias (imaterialismo)</td>
                <td>Não podemos provar</td>
              </tr>
              <tr>
                <td>Causalidade</td>
                <td>Relação real no mundo</td>
                <td>Ordem de Deus</td>
                <td>Hábito mental, não realidade objetiva</td>
              </tr>
              <tr>
                <td>Deus</td>
                <td>Existe; provado pela razão</td>
                <td>Central: garante existência das coisas</td>
                <td>Cético: não podemos provar</td>
              </tr>
              <tr>
                <td>Obra central</td>
                <td>Ensaio sobre o Entendimento Humano</td>
                <td>Tratado sobre os Princípios do Conhecimento Humano</td>
                <td>Tratado da Natureza Humana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Locke Político</span>
        <h2>6. Locke e a Filosofia Política: Tolerância, Propriedade e Direitos Naturais</h2>
        <p>
          Além da epistemologia, John Locke é uma das figuras mais importantes da filosofia política
          ocidental. Em seus <em>Dois Tratados sobre o Governo</em> (1689), ele desenvolveu a teoria
          dos <strong>direitos naturais</strong>: todo ser humano, no estado de natureza, possui direitos
          inalienáveis à <em>vida, à liberdade e à propriedade</em>.
        </p>
        <p>
          Para Locke, o governo legítimo é aquele que emerge de um <strong>contrato social</strong> em
          que os cidadãos cedem parte de seus direitos em troca de proteção — mas mantêm o direito de
          resistir ao governo tirânico. Essa ideia influenciou diretamente a Revolução Americana (1776)
          e a Declaração de Independência ("life, liberty and the pursuit of happiness").
        </p>
        <ul>
          <li><strong>Separação de poderes:</strong> Locke propôs separar o poder legislativo do executivo — base do constitucionalismo moderno.</li>
          <li><strong>Tolerância religiosa:</strong> na <em>Carta sobre a Tolerância</em> (1689), defende que o Estado não deve interferir na consciência religiosa individual.</li>
          <li><strong>Propriedade:</strong> nasce do trabalho — ao misturar seu trabalho com a natureza, o indivíduo adquire propriedade legítima.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Conexão ENEM: Empirismo e Democracia</h3>
          <p>
            O empirismo de Locke e sua filosofia política são inseparáveis: se o conhecimento vem
            da experiência, não há autoridade divina ou razão inata que justifique reis absolutos.
            O poder político deve se basear no <em>consentimento</em> dos governados — ideia que
            está na base de toda democracia liberal moderna.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Empirismo e Ciência</span>
        <h2>7. Empirismo Britânico e a Revolução Científica</h2>
        <p>
          O empirismo filosófico andou de mãos dadas com o desenvolvimento da ciência experimental nos
          séculos XVII e XVIII. <strong>Francis Bacon</strong> (1561–1626) já antecipara o espírito
          empirista com sua defesa do método indutivo no <em>Novum Organum</em> (1620): o conhecimento
          científico deve partir da observação de casos particulares, não de axiomas dedutivos.
        </p>
        <p>
          Isaac Newton, contemporâneo de Locke, exemplificou esse ideal: partiu de observações
          (maçã caindo, planetas girando) para formular leis universais. Mas foi Hume que explicitou
          o problema: Newton usou indução — e a indução não garante certeza lógica.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Pensador</th><th>Contribuição</th><th>Relação com Empirismo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Francis Bacon</strong></td>
                <td>Método indutivo; <em>Novum Organum</em></td>
                <td>Observação e experimentação como base do saber</td>
              </tr>
              <tr>
                <td><strong>Isaac Newton</strong></td>
                <td>Leis do movimento e gravitação</td>
                <td>Exemplifica o método empirista aplicado à física</td>
              </tr>
              <tr>
                <td><strong>John Locke</strong></td>
                <td>Tábula rasa; ideias simples e complexas</td>
                <td>Epistemologia empirista clássica</td>
              </tr>
              <tr>
                <td><strong>David Hume</strong></td>
                <td>Crítica à causalidade e à indução</td>
                <td>Ceticismo científico: ciência é probabilidade, não certeza</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>8. O Legado do Empirismo: Positivismo, Falsificacionismo e Ciência Contemporânea</h2>
        <p>
          O empirismo britânico legou à filosofia e à ciência uma agenda de problemas que ainda orienta
          os debates contemporâneos:
        </p>
        <ul>
          <li>
            <strong>Positivismo (Comte, séc. XIX):</strong> apenas o conhecimento baseado em fatos
            observáveis é legítimo. A ciência é o único modelo de saber válido. Influenciou a sociologia,
            a medicina e o direito.
          </li>
          <li>
            <strong>Empirismo lógico / Círculo de Viena (séc. XX):</strong> Schlick, Carnap e Ayer
            defenderam o princípio da verificação: um enunciado é significativo apenas se verificável
            pela experiência. Metafísica e teologia seriam "sem sentido".
          </li>
          <li>
            <strong>Falsificacionismo (Karl Popper):</strong> em resposta a Hume, Popper propôs que
            a ciência não verifica, mas <em>falsifica</em>: uma teoria é científica se pode ser
            refutada pela experiência. Isso distingue ciência de pseudociência.
          </li>
          <li>
            <strong>Naturalismo contemporâneo:</strong> Quine propôs substituir a epistemologia
            tradicional pela psicologia cognitiva — o empirismo leva ao estudo naturalista da mente.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Kant: a síntese do empirismo com o racionalismo</h3>
          <p>
            Hume, segundo Kant, "despertou-o de seu sono dogmático". A Crítica da Razão Pura (1781)
            é a resposta de Kant: o conhecimento exige tanto a experiência (empirismo) quanto estruturas
            a priori da mente — tempo, espaço, causalidade — que organizam a experiência (racionalismo).
            A síntese kantiana superou os dois extremos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📝</span>
            <h3>Empirismo</h3>
            <p>Todo conhecimento vem da experiência. Mente como tábula rasa. Sem ideias inatas.</p>
          </div>
          <div className="math-card">
            <span>🧩</span>
            <h3>Locke</h3>
            <p>Ideias simples (sensação) → ideias complexas (combinação). Qualidades primárias e secundárias.</p>
          </div>
          <div className="math-card">
            <span>👁️</span>
            <h3>Berkeley</h3>
            <p>"Esse est percipi": existir é ser percebido. Imaterialismo. Deus garante a permanência.</p>
          </div>
          <div className="math-card">
            <span>❓</span>
            <h3>Hume</h3>
            <p>Causalidade = hábito mental. Problema da indução. Self = feixe de percepções.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Ciência</h3>
            <p>Empirismo fundamenta a ciência experimental: observação, indução, verificação.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Debate</h3>
            <p>Empirismo vs. Racionalismo: o grande duelo epistêmico resolvido por Kant.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Tábula Rasa"
          statement={<p>O conceito de "tábula rasa", central no empirismo de John Locke, significa que:</p>}
          options={[
            { letter: "a", text: "A mente humana nasce vazia, sem ideias inatas, e todo o conhecimento é adquirido pela experiência.", correct: true },
            { letter: "b", text: "A mente humana possui ideias inatas que são apagadas pela experiência sensorial ao longo da vida." },
            { letter: "c", text: "O ser humano nasce sem memória, mas com a capacidade racional completamente desenvolvida." },
            { letter: "d", text: "A experiência sensorial é uma ilusão e apenas a razão pura pode produzir conhecimento verdadeiro." },
          ]}
          resolution={<p>A <em>tábula rasa</em> (lousa em branco) de Locke significa que a mente nasce sem qualquer conteúdo ou ideia inata. Todo o conhecimento — ideias, conceitos, crenças — é adquirido através da experiência, seja pela sensação (percepção do mundo externo) seja pela reflexão (percepção das próprias operações mentais).</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Hume e a Causalidade"
          statement={<p>David Hume afirmou que a causalidade — a ideia de que A causa B — não é observada diretamente na experiência. O que Hume queria dizer com isso?</p>}
          options={[
            { letter: "a", text: "Observamos apenas a sucessão regular de eventos (A antes de B), não uma 'força' ou 'conexão necessária'. A causalidade é um hábito mental projetado no mundo.", correct: true },
            { letter: "b", text: "A causalidade é uma ideia inata da mente, provada pela razão antes de qualquer experiência." },
            { letter: "c", text: "A causalidade não existe de fato; cada evento é completamente aleatório e imprevisível." },
            { letter: "d", text: "A causalidade pode ser observada diretamente nos sentidos, como qualquer outra qualidade dos objetos." },
          ]}
          resolution={<p>Hume notou que, ao observar bilhar A atingir bola B, não percebo nenhuma "conexão necessária" — percebo apenas que A se move, depois B se move. A ideia de que A <em>causou</em> B é uma inferência da mente, baseada no hábito de ver essa sequência repetida. Portanto, a causalidade não é uma característica objetiva do mundo, mas um <strong>hábito mental</strong> que projeta expectativa no futuro. Isso abalou os fundamentos da ciência newtoniana.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. O Problema da Indução"
          statement={<p>O "problema da indução" formulado por Hume é um dos problemas centrais da filosofia da ciência. Ele consiste em:</p>}
          options={[
            { letter: "a", text: "O fato de que nenhuma quantidade de observações passadas pode garantir logicamente uma lei universal futura — o Sol pode não nascer amanhã.", correct: true },
            { letter: "b", text: "A impossibilidade de fazer qualquer observação sem primeiro ter uma teoria que guie o olhar do cientista." },
            { letter: "c", text: "A dificuldade de induzir (convencer) outras pessoas a aceitarem os resultados científicos." },
            { letter: "d", text: "O problema de que a indução é um método apenas válido para matemática, não para ciências naturais." },
          ]}
          resolution={<p>O problema da indução: observamos que o Sol nasceu todos os dias da história registrada. Isso nos leva (por indução) à lei: "o Sol sempre nasce". Mas Hume mostrou que isso é logicamente inválido — por mais que o Sol tenha nascido até hoje, não há garantia lógica de que nascerá amanhã. A ciência funciona por indução, mas a indução não garante certeza — apenas probabilidade. Karl Popper respondeu a Hume com o <em>falsificacionismo</em>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Empirismo e Método Científico"
          statement={<p>O empirismo filosófico — a ideia de que o conhecimento vem da experiência — é frequentemente associado ao método científico experimental. De acordo com a epistemologia empirista, uma teoria científica deve ser:</p>}
          options={[
            { letter: "a", text: "Baseada em observações e experimentos, sendo testável pela experiência e revisável diante de novos dados.", correct: true },
            { letter: "b", text: "Derivada de princípios racionais a priori, sem necessidade de confirmação experimental." },
            { letter: "c", text: "Aceita por autoridade de especialistas, independentemente de experimentos ou observações." },
            { letter: "d", text: "Fundamentada em textos clássicos aprovados por instituições filosóficas e religiosas." },
          ]}
          resolution={<p>O empirismo fundamenta a ciência experimental: o conhecimento científico deve partir da <strong>observação</strong>, ser testado por <strong>experimentos</strong> e estar aberto à revisão diante de novos dados. Francis Bacon (indução), John Stuart Mill (métodos experimentais) e Karl Popper (falsificabilidade) desenvolveram essa perspectiva. A ciência moderna é empirista no sentido de que não aceita como base apenas a dedução racional — exige comprovação pela experiência.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Berkeley e a Realidade"
          statement={<p>George Berkeley afirmava: "Esse est percipi" (existir é ser percebido). Segundo essa posição filosófica, quando fechamos os olhos para uma maçã, ela:</p>}
          options={[
            { letter: "a", text: "Continua a existir porque é percebida por Deus, que percebe continuamente todas as coisas.", correct: true },
            { letter: "b", text: "Deixa de existir completamente até que alguém a perceba novamente." },
            { letter: "c", text: "Continua a existir como objeto material independente de qualquer percepção." },
            { letter: "d", text: "Transforma-se em outra coisa, pois a percepção é que define suas qualidades." },
          ]}
          resolution={<p>Berkeley reconhecia o paradoxo: se existir é ser percebido, os objetos deixariam de existir quando ninguém os observasse. Sua solução foi apelar a <strong>Deus</strong>: Deus percebe continuamente toda a criação, garantindo a permanência e consistência do mundo material. Assim, a maçã existe mesmo quando ninguém a olha — porque Deus sempre a percebe. Esse imaterialismo teísta é a síntese de Berkeley entre empirismo e religião.</p>}
        />
      </section>
    </article>
  );
}
