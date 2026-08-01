"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 20</span>
          <h1>Immanuel Kant: Razão, Moral e Autonomia</h1>
          <p>
            Immanuel Kant é considerado o maior filósofo moderno. Sua "revolução copernicana" na
            filosofia transformou a epistemologia, a ética e a estética. O imperativo categórico e
            a noção de autonomia moral são pilares do pensamento ético contemporâneo e frequentemente
            cobrados no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e Contexto</span>
        <h2>1. Kant e o "Sono Dogmático"</h2>
        <p>
          <strong>Immanuel Kant</strong> (1724–1804) nasceu em Königsberg (Prússia, atual Kaliningrado,
          Rússia) e passou toda sua vida nessa cidade. Professor universitário, levava vida regrada ao
          ponto de seus vizinhos, segundo se conta, acertarem os relógios pelo horário de seus passeios.
        </p>
        <p>
          Kant afirmou que a leitura de <strong>David Hume</strong> o despertou de seu "sono dogmático":
          Hume questionara a causalidade e a possibilidade de conhecimento certo, e Kant precisava
          responder. Sua resposta: nem o empirismo nem o racionalismo estavam completamente corretos.
          Era preciso uma <strong>síntese crítica</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>A "Revolução Copernicana" de Kant</h3>
          <p>
            Assim como Copérnico deslocou a Terra do centro do universo, Kant deslocou o objeto do
            centro do conhecimento: não é o sujeito que se conforma aos objetos, mas os objetos que
            se conformam às formas do sujeito. É a mente que organiza a experiência — não o contrário.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">As Três Críticas</span>
        <h2>2. As Três Críticas de Kant</h2>
        <p>
          A obra de Kant se organiza em torno de três grandes "Críticas":
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Obra</th><th>Pergunta Central</th><th>Tema</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Crítica da Razão Pura</em> (1781)</td>
                <td>"O que posso conhecer?"</td>
                <td>Epistemologia: limites e condições do conhecimento</td>
              </tr>
              <tr>
                <td><em>Crítica da Razão Prática</em> (1788)</td>
                <td>"O que devo fazer?"</td>
                <td>Ética: moral, dever e autonomia</td>
              </tr>
              <tr>
                <td><em>Crítica do Juízo</em> (1790)</td>
                <td>"O que me é permitido esperar?"</td>
                <td>Estética e teleologia: o belo e o sublime</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 200" width="500" height="200" aria-label="As três Críticas de Kant">
            <rect x="10" y="10" width="480" height="180" rx="10" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1.5"/>
            <text x="250" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0c4a6e">As Três Críticas de Kant</text>
            {/* Crítica 1 */}
            <rect x="30" y="50" width="130" height="110" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="95" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">Razão Pura</text>
            <text x="95" y="90" textAnchor="middle" fontSize="10" fill="#1e40af">(1781)</text>
            <text x="95" y="110" textAnchor="middle" fontSize="10" fill="#1d4ed8">O que posso</text>
            <text x="95" y="125" textAnchor="middle" fontSize="10" fill="#1d4ed8">conhecer?</text>
            <text x="95" y="148" textAnchor="middle" fontSize="9" fill="#2563eb">Epistemologia</text>
            {/* Crítica 2 */}
            <rect x="185" y="50" width="130" height="110" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="250" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Razão Prática</text>
            <text x="250" y="90" textAnchor="middle" fontSize="10" fill="#15803d">(1788)</text>
            <text x="250" y="110" textAnchor="middle" fontSize="10" fill="#166534">O que devo</text>
            <text x="250" y="125" textAnchor="middle" fontSize="10" fill="#166534">fazer?</text>
            <text x="250" y="148" textAnchor="middle" fontSize="9" fill="#16a34a">Ética</text>
            {/* Crítica 3 */}
            <rect x="340" y="50" width="130" height="110" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="405" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#713f12">Crítica do Juízo</text>
            <text x="405" y="90" textAnchor="middle" fontSize="10" fill="#92400e">(1790)</text>
            <text x="405" y="110" textAnchor="middle" fontSize="10" fill="#b45309">O que me é</text>
            <text x="405" y="125" textAnchor="middle" fontSize="10" fill="#b45309">permitido esperar?</text>
            <text x="405" y="148" textAnchor="middle" fontSize="9" fill="#d97706">Estética</text>
          </svg>
          <figcaption>As três perguntas fundamentais de Kant organizam toda sua filosofia crítica.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epistemologia</span>
        <h2>3. O que Podemos Conhecer? Fenômeno e Nômeno</h2>
        <p>
          Na <em>Crítica da Razão Pura</em>, Kant responde ao debate entre empirismo e racionalismo:
        </p>
        <ul>
          <li>
            <strong>Hume tinha razão:</strong> o conhecimento começa com a experiência sensorial
            (não há ideias inatas, como Descartes afirmava).
          </li>
          <li>
            <strong>Descartes tinha razão:</strong> a mente contribui ativamente com formas a priori
            (espaço, tempo, causalidade) que organizam a experiência. Essas formas não vêm dos sentidos.
          </li>
        </ul>
        <p>
          A distinção mais famosa de Kant:
        </p>
        <ul>
          <li>
            <strong>Fenômeno</strong> (<em>Erscheinung</em>): as coisas tais como as <em>experienciamos</em>,
            organizadas pelas formas da intuição (espaço e tempo) e pelas categorias do entendimento
            (causalidade, unidade, etc.). O fenômeno é o único objeto possível do conhecimento científico.
          </li>
          <li>
            <strong>Nômeno</strong> (coisa em si, <em>Ding an sich</em>): a coisa tal como é
            <em> independentemente</em> de ser percebida por nós. O nômeno é <em>incognoscível</em>
            — a razão não pode alcançá-lo. Deus, a alma imortal e a liberdade pertencem ao âmbito
            do nômeno.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Limite da razão</h3>
          <p>
            Kant mostrou que a razão humana tem <em>limites</em>: quando tenta ir além da experiência
            possível (para provar a existência de Deus, a imortalidade da alma ou a origem do universo),
            ela cai em contradições (antinomias). Esses são assuntos da fé, não do conhecimento científico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Imperativo Categórico</span>
        <h2>4. A Ética Kantiana: O Imperativo Categórico</h2>
        <p>
          Na <em>Crítica da Razão Prática</em> e na <em>Fundamentação da Metafísica dos Costumes</em>
          (1785), Kant propõe uma ética baseada na <strong>razão pura prática</strong>, e não em
          consequências, emoções ou tradições.
        </p>
        <p>
          Kant distingue dois tipos de imperativo:
        </p>
        <ul>
          <li>
            <strong>Imperativo hipotético:</strong> "Se você quer X, então faça Y." Condicional —
            depende de um objetivo. Ex.: "Se quer ser saudável, exercise-se." Não é moral em sentido
            pleno — é apenas instrumental.
          </li>
          <li>
            <strong>Imperativo categórico:</strong> incondicional — válido em si mesmo, independentemente
            de consequências ou desejos. É o único imperativo genuinamente moral.
          </li>
        </ul>
        <p>
          Kant formulou o imperativo categórico de várias maneiras. As duas mais famosas:
        </p>
        <ul>
          <li>
            <strong>Fórmula da lei universal:</strong> "Age apenas segundo aquela máxima pela qual
            possas ao mesmo tempo querer que ela se torne uma lei universal."
          </li>
          <li>
            <strong>Fórmula da humanidade:</strong> "Age de tal forma que uses a humanidade, tanto
            em tua pessoa como na de qualquer outro, sempre ao mesmo tempo como fim e nunca meramente
            como meio."
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>O Teste do Imperativo Categórico</h3>
          <p>
            Para saber se uma ação é moral, pergunte: "E se todo mundo fizesse isso?" Se a máxima
            se contradizir quando universalizada, a ação é imoral. Ex.: mentir. Se todo mundo
            mentisse sempre, a própria comunicação se tornaria impossível — contradição. Logo,
            mentir é imoral.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Autonomia</span>
        <h2>5. Autonomia: A Liberdade como Fundamento da Moral</h2>
        <p>
          O conceito mais original de Kant em ética é o de <strong>autonomia</strong> (auto = si
          mesmo; nomos = lei): o ser humano moral é aquele que <em>se dá sua própria lei</em> —
          não por imposição externa (heteronomia), mas pela razão.
        </p>
        <ul>
          <li>
            <strong>Heteronomia:</strong> agir por medo de punição, busca de recompensa, pressão
            social, ordens externas ou impulsos emocionais. Não é genuinamente moral.
          </li>
          <li>
            <strong>Autonomia:</strong> agir por dever, por respeito à lei moral que a razão mesma
            estabelece. Isso é liberdade genuína e a fonte de toda dignidade moral.
          </li>
        </ul>
        <p>
          A autonomia kantiana é o fundamento da concepção moderna de <strong>dignidade humana</strong>:
          cada ser humano, como ser racional e autônomo, tem valor em si mesmo — não como meio para
          os fins de outros. Esse princípio está na base dos direitos humanos modernos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estética</span>
        <h2>6. Crítica do Juízo: O Belo e o Sublime</h2>
        <p>
          Na <em>Crítica do Juízo</em>, Kant analisa o julgamento estético e a finalidade na natureza:
        </p>
        <ul>
          <li>
            <strong>O belo:</strong> o prazer estético diante do belo é desinteressado (não é
            utilidade nem satisfação de desejo), universal (queremos que todos concordem que algo
            é belo), sem conceito definido e com aparência de finalidade. Ex.: uma rosa é bela
            sem que eu queira usá-la para algo.
          </li>
          <li>
            <strong>O sublime:</strong> a experiência do que é imenso, grandioso ou poderoso demais
            para ser apreendido pelos sentidos. Diante do infinito ou do terrível (uma tempestade,
            o universo estrelado), a razão humana reconhece sua grandeza ao compreender o que
            supera os sentidos. Ex.: olhar o céu estrelado e sentir ao mesmo tempo pequenez e
            grandeza.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A frase mais famosa de Kant</h3>
          <p>
            "Duas coisas enchem o ânimo de admiração e veneração sempre nova e crescente, quanto
            mais frequente e persistentemente o pensamento se ocupa com elas: o céu estrelado sobre
            mim e a lei moral dentro de mim."<br/>
            — Immanuel Kant, <em>Crítica da Razão Prática</em>
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Razão Pura em Detalhe</span>
        <h2>7. A Crítica da Razão Pura: Espaço, Tempo e as Categorias</h2>
        <p>
          Na <em>Crítica da Razão Pura</em>, Kant apresenta a estrutura completa do conhecimento humano.
          Ele identifica duas fontes do conhecimento que trabalham juntas:
        </p>
        <ul>
          <li>
            <strong>Intuições puras (formas da sensibilidade):</strong> espaço e tempo não são
            propriedades do mundo externo, mas formas pelas quais a mente organiza as experiências.
            Toda experiência sensorial ocorre <em>no espaço e no tempo</em> — não porque o mundo
            "é" espacial e temporal, mas porque nossa mente só pode receber dados dessa forma.
          </li>
          <li>
            <strong>Categorias do entendimento:</strong> conceitos puros que o entendimento aplica
            sobre as intuições para produzir julgamentos. São 12 categorias organizadas em 4 grupos:
            quantidade (unidade, pluralidade, totalidade), qualidade (realidade, negação, limitação),
            relação (substância, causalidade, comunidade) e modalidade (possibilidade, existência,
            necessidade).
          </li>
        </ul>
        <p>
          O esquema geral: os dados sensoriais brutos (matéria) são organizados pelas formas do espaço
          e do tempo (intuição pura) e depois pensados pelas categorias (entendimento) — produzindo
          assim o <strong>conhecimento científico dos fenômenos</strong>. Sem experiência, as categorias
          são vazias; sem as categorias, a experiência é cega. Kant sintetizou empirismo e racionalismo.
        </p>
        <div className="lesson-highlight">
          <h3>Por que isso importa no ENEM</h3>
          <p>
            Quando o ENEM apresenta Kant e pede para identificar a "síntese" que ele fez entre
            racionalismo e empirismo, a resposta está aqui: a experiência (empirismo) fornece o
            conteúdo; as formas a priori (racionalismo) organizam esse conteúdo. O conhecimento
            é sempre a combinação de ambos — nem puro empirismo nem pura razão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Kant Político</span>
        <h2>8. Kant e a Paz Perpétua: Filosofia Política e Direito Cosmopolita</h2>
        <p>
          Kant não é apenas epistemólogo e ético — também é um importante filósofo político. Em
          <em> À Paz Perpétua</em> (1795), escrito no contexto das guerras napoleônicas, ele propôs
          um projeto de paz duradoura entre as nações baseado em três princípios:
        </p>
        <ul>
          <li>
            <strong>Repúblicas constitucionais:</strong> os Estados devem ser repúblicas com separação
            de poderes e direitos garantidos. Cidadãos que suportam os custos da guerra teriam
            incentivo para votarem contra ela.
          </li>
          <li>
            <strong>Federação de nações livres:</strong> uma liga internacional de Estados republicanos,
            que resolveria conflitos pela arbitragem e não pela guerra. Antecipou a Liga das Nações
            (1919) e a Organização das Nações Unidas (1945).
          </li>
          <li>
            <strong>Direito cosmopolita:</strong> os seres humanos, como cidadãos do mundo, têm o
            direito de serem recebidos com hospitalidade em qualquer Estado — antecipando o direito
            internacional dos refugiados e a ideia de cidadania global.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Kant e a ONU: herança filosófica</h3>
          <p>
            A ONU (1945) e a Declaração Universal dos Direitos Humanos (1948) são os descendentes
            diretos do projeto kantiano de paz perpétua. O princípio de dignidade humana (imperativo
            categórico) e a ideia de uma ordem internacional baseada no direito (não na força) ainda
            guiam o direito internacional contemporâneo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔭</span>
            <h3>Revolução Copernicana</h3>
            <p>A mente organiza a experiência — não é passiva. Formas a priori estruturam o conhecimento.</p>
          </div>
          <div className="math-card">
            <span>🌫️</span>
            <h3>Fenômeno e Nômeno</h3>
            <p>Conhecemos apenas fenômenos. A coisa em si (nômeno) é incognoscível pela razão.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Imperativo Categórico</h3>
            <p>Age só pela máxima universalizável. Trate a humanidade sempre como fim, nunca só como meio.</p>
          </div>
          <div className="math-card">
            <span>🗽</span>
            <h3>Autonomia</h3>
            <p>A lei moral que a razão se dá a si mesma. Base da dignidade humana e dos direitos.</p>
          </div>
          <div className="math-card">
            <span>🌸</span>
            <h3>O Belo</h3>
            <p>Prazer desinteressado, universal, sem conceito. O belo pede aprovação universal.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>O Sublime</h3>
            <p>Grandiosidade que supera os sentidos. Reconhecemos a superioridade da razão.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Imperativo Categórico"
          statement={<p>Kant formulou o imperativo categórico como: "Age apenas segundo aquela máxima pela qual possas ao mesmo tempo querer que ela se torne uma lei universal." Esse imperativo é classificado como "categórico" porque:</p>}
          options={[
            { letter: "a", text: "É incondicional — obriga moralmente independentemente das consequências ou desejos do agente.", correct: true },
            { letter: "b", text: "É uma categoria filosófica geral que abrange todas as normas morais de todas as culturas." },
            { letter: "c", text: "Depende de uma condição: se você quer ser feliz, então deve agir moralmente." },
            { letter: "d", text: "Foi categoricamente aprovado pela Igreja como compatible com a ética cristã." },
          ]}
          resolution={<p>O imperativo é "categórico" por oposição ao "hipotético": enquanto o hipotético diz "SE queres X, ENTÃO faça Y" (condicional), o categórico diz simplesmente "FAÇA Y" — sem condições, independentemente de desejos ou consequências. A moralidade kantiana não depende do que se quer obter, mas do que a razão ordena incondicionalmente.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Autonomia vs. Heteronomia"
          statement={<p>Kant afirmava que a verdadeira moralidade exige autonomia, não heteronomia. Uma ação é heterônoma quando:</p>}
          options={[
            { letter: "a", text: "É realizada por medo de punição, busca de recompensa, pressão social ou impulso emocional — não por puro dever moral.", correct: true },
            { letter: "b", text: "É realizada livremente, por convicção própria, sem influência de fatores externos." },
            { letter: "c", text: "É determinada pela lei moral que a razão estabelece de forma autônoma." },
            { letter: "d", text: "É praticada pela maioria das pessoas na sociedade, tornando-se norma social." },
          ]}
          resolution={<p>Para Kant, <strong>heteronomia</strong> é quando a vontade é determinada por fatores externos à razão: medo de punição, desejo de recompensa, pressão social, emoções, tradições. Agir por medo do inferno ou esperança do paraíso, por exemplo, é heteronomia — não moralidade genuína. A <strong>autonomia</strong> moral existe quando a razão estabelece sua própria lei e age por puro respeito a ela.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Fenômeno, Nômeno e os Limites da Razão"
          statement={<p>Kant distinguiu "fenômeno" (a coisa como aparece ao sujeito) de "nômeno" (a coisa em si mesma). Qual é a consequência dessa distinção para questões como a existência de Deus?</p>}
          options={[
            { letter: "a", text: "A existência de Deus não pode ser provada nem refutada pela razão teórica, pois Deus pertence ao âmbito do nômeno, inacessível ao conhecimento científico.", correct: true },
            { letter: "b", text: "Kant provou definitivamente a existência de Deus por meio do conceito de nômeno como realidade suprema." },
            { letter: "c", text: "Deus seria um fenômeno — logo, sua existência pode ser provada pela experiência sensorial." },
            { letter: "d", text: "A distinção fenômeno/nômeno é irrelevante para a questão de Deus, que pertence exclusivamente à teologia." },
          ]}
          resolution={<p>Para Kant, Deus, a alma imortal e a liberdade são <em>ideias da razão pura</em> — pertencem ao âmbito do nômeno, que é incognoscível teoricamente. A razão, quando tenta provar a existência de Deus ou do infinito, cai em <em>antinomias</em> (contradições). Portanto, a existência de Deus não pode ser provada nem refutada pela ciência ou pela filosofia teórica. Kant "reservou espaço para a fé" ao limitar o conhecimento aos fenômenos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Kant e os Direitos Humanos"
          statement={<p>A segunda fórmula do imperativo categórico kantiano afirma: "Age de tal forma que uses a humanidade, tanto em tua pessoa como na de qualquer outro, sempre ao mesmo tempo como fim e nunca meramente como meio." Como esse princípio fundamenta os direitos humanos modernos?</p>}
          options={[
            { letter: "a", text: "Todo ser humano possui dignidade intrínseca e não pode ser reduzido a instrumento dos fins de outros — o que proíbe a escravidão, a tortura e qualquer forma de desumanização.", correct: true },
            { letter: "b", text: "Os direitos humanos dependem da utilidade social de cada indivíduo, podendo ser revogados quando a pessoa deixa de ser produtiva." },
            { letter: "c", text: "Apenas seres racionais adultos possuem dignidade kantiana — crianças e pessoas com deficiência cognitiva seriam excluídas." },
            { letter: "d", text: "O princípio kantiano implica que o Estado pode usar o indivíduo como meio para atingir o bem comum, como nas ditaduras." },
          ]}
          resolution={<p>A segunda fórmula do imperativo categórico é o fundamento filosófico da <strong>dignidade humana</strong>: cada pessoa tem valor intrínseco (é um fim em si mesma) e nunca pode ser tratada apenas como meio — instrumento — para os fins de outros. Isso proíbe a escravidão (tratar humanos como propriedade), a tortura (tratar como meio para extrair informações) e qualquer forma de desumanização. Está na base da Declaração Universal dos Direitos Humanos (1948).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) A Fórmula da Lei Universal"
          statement={<p>João está pensando em mentir para conseguir um emprego. Aplicando o teste do imperativo categórico kantiano (fórmula da lei universal), como ele deve raciocinar?</p>}
          options={[
            { letter: "a", text: "Se todo mundo mentisse para conseguir empregos, a própria comunicação e a confiança social se tornariam impossíveis. A máxima se autodestrói quando universalizada — logo, mentir é imoral.", correct: true },
            { letter: "b", text: "Como as consequências da mentira nesse caso são boas (conseguir emprego e sustento), é moralmente permitida." },
            { letter: "c", text: "Mentir é permitido quando a sociedade, em geral, considera que a situação justifica a mentira." },
            { letter: "d", text: "Kant admitia exceções ao imperativo categórico em casos de necessidade comprovada, como o desemprego." },
          ]}
          resolution={<p>O teste do imperativo categórico: posso querer que "mentir para obter vantagem" seja lei universal? Se todos mentissem sempre que conveniente, ninguém mais acreditaria em ninguém — a própria comunicação e a confiança social desapareceriam. A máxima se contradiz quando universalizada. Portanto, mentir é imoral segundo Kant, independentemente das consequências no caso específico. Essa rigidez distingue Kant do consequencialismo (que considera as consequências).</p>}
        />
      </section>
    </article>
  );
}
