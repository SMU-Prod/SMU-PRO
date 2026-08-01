"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 6</span>
          <h1>Os filósofos pré-socráticos e a busca pela origem da natureza</h1>
          <p>
            No século VI a.C., na cidade de Mileto, um grupo de pensadores iniciou uma revolução
            intelectual: pela primeira vez, seres humanos buscaram explicar a origem e a
            constituição do mundo sem recorrer aos deuses — apenas pela razão. Esses são os
            pré-socráticos, os fundadores da tradição filosófica ocidental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O mundo de Mileto no século VI a.C.</h2>
        <p>
          <strong>Mileto</strong> era uma próspera cidade grega na costa da Jônia (atual Turquia),
          no século VI a.C. Seu florescimento comercial permitiu contato com a sabedoria matemática
          e astronômica egípcia e babilônica. Esse contexto criou condições para um novo tipo de
          investigação: racional, sistemática e natural.
        </p>
        <p>
          Os pensadores dessa época são chamados <strong>"pré-socráticos"</strong> porque viveram
          antes de Sócrates (470-399 a.C.) ou foram contemporâneos a ele sem a ele se filiarem.
          Seu projeto central era encontrar o <strong>arché</strong> (ἀρχή) — o princípio ou
          elemento primordial que constitui e governa toda a realidade.
        </p>
        <div className="lesson-highlight">
          <h3>O conceito de arché</h3>
          <p>
            <em>Arché</em> vem do grego e significa "origem", "princípio" ou "fundamento".
            Os pré-socráticos perguntavam: de que é feito tudo? O que há de permanente sob
            a multiplicidade das coisas? Essa questão é a primeira pergunta filosófica e
            científica da história ocidental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>2. Os principais pré-socráticos e suas filosofias</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 280" width="520" height="280" aria-label="Linha do tempo dos pré-socráticos">
            {/* Linha principal */}
            <line x1="30" y1="140" x2="490" y2="140" stroke="#374151" strokeWidth="2"/>
            <polygon points="490,135 500,140 490,145" fill="#374151"/>

            {/* Marcadores e nomes */}
            {/* Tales ~624-546 */}
            <circle cx="60" cy="140" r="6" fill="#1d4ed8"/>
            <line x1="60" y1="134" x2="60" y2="80" stroke="#1d4ed8" strokeWidth="1.5"/>
            <text x="60" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">Tales</text>
            <text x="60" y="84" textAnchor="middle" fontSize="9" fill="#6b7280">c.624-546</text>
            <text x="60" y="162" textAnchor="middle" fontSize="9" fill="#1d4ed8">Água</text>

            {/* Anaximandro ~611-547 */}
            <circle cx="110" cy="140" r="6" fill="#7c3aed"/>
            <line x1="110" y1="146" x2="110" y2="200" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="110" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">Anaximandro</text>
            <text x="110" y="224" textAnchor="middle" fontSize="9" fill="#6b7280">c.611-547</text>
            <text x="110" y="120" textAnchor="middle" fontSize="9" fill="#7c3aed">Ápeiron</text>

            {/* Anaxímenes ~585-528 */}
            <circle cx="160" cy="140" r="6" fill="#0369a1"/>
            <line x1="160" y1="134" x2="160" y2="80" stroke="#0369a1" strokeWidth="1.5"/>
            <text x="160" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0369a1">Anaxímenes</text>
            <text x="160" y="84" textAnchor="middle" fontSize="9" fill="#6b7280">c.585-528</text>
            <text x="160" y="162" textAnchor="middle" fontSize="9" fill="#0369a1">Ar</text>

            {/* Pitágoras ~570-495 */}
            <circle cx="220" cy="140" r="6" fill="#d97706"/>
            <line x1="220" y1="146" x2="220" y2="200" stroke="#d97706" strokeWidth="1.5"/>
            <text x="220" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#d97706">Pitágoras</text>
            <text x="220" y="224" textAnchor="middle" fontSize="9" fill="#6b7280">c.570-495</text>
            <text x="220" y="120" textAnchor="middle" fontSize="9" fill="#d97706">Número</text>

            {/* Heráclito ~535-475 */}
            <circle cx="290" cy="140" r="6" fill="#b91c1c"/>
            <line x1="290" y1="134" x2="290" y2="80" stroke="#b91c1c" strokeWidth="1.5"/>
            <text x="290" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">Heráclito</text>
            <text x="290" y="84" textAnchor="middle" fontSize="9" fill="#6b7280">c.535-475</text>
            <text x="290" y="162" textAnchor="middle" fontSize="9" fill="#b91c1c">Fogo/Logos</text>

            {/* Parmênides ~515-450 */}
            <circle cx="360" cy="140" r="6" fill="#059669"/>
            <line x1="360" y1="146" x2="360" y2="200" stroke="#059669" strokeWidth="1.5"/>
            <text x="360" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">Parmênides</text>
            <text x="360" y="224" textAnchor="middle" fontSize="9" fill="#6b7280">c.515-450</text>
            <text x="360" y="120" textAnchor="middle" fontSize="9" fill="#059669">Ser imóvel</text>

            {/* Demócrito ~460-370 */}
            <circle cx="440" cy="140" r="6" fill="#6b7280"/>
            <line x1="440" y1="134" x2="440" y2="80" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="440" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6b7280">Demócrito</text>
            <text x="440" y="84" textAnchor="middle" fontSize="9" fill="#6b7280">c.460-370</text>
            <text x="440" y="162" textAnchor="middle" fontSize="9" fill="#6b7280">Átomos</text>

            <text x="510" y="143" fontSize="10" fill="#374151">→ séc.</text>
          </svg>
          <figcaption>Linha do tempo dos principais filósofos pré-socráticos e suas propostas de arché.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escola de Mileto</span>
        <h2>3. A escola de Mileto: Tales, Anaximandro e Anaxímenes</h2>
        <p>
          <strong>Tales de Mileto</strong> (c. 624–546 a.C.) propôs que o princípio de tudo é a
          <strong> água</strong>. A razão: a água é o elemento mais onipresente na natureza, necessário
          para a vida, capaz de assumir três estados (sólido, líquido, gasoso) e presente nos mitos
          cosmogônicos. Tales foi também o primeiro a prever um eclipse solar (585 a.C.) e a aplicar
          geometria de forma sistemática.
        </p>
        <p>
          <strong>Anaximandro</strong> (c. 611–547 a.C.) foi mais ousado: o arché não pode ser
          nenhum elemento específico, mas o <strong>ápeiron</strong> (ἄπειρον) — o "indefinido" ou
          "ilimitado". O ápeiron é eterno, infinito e gerador de todos os opostos (quente/frio,
          úmido/seco) que constituem o cosmos. Anaximandro foi o primeiro a propor que a Terra
          flutua livremente no espaço.
        </p>
        <p>
          <strong>Anaxímenes</strong> (c. 585–528 a.C.) propôs o <strong>ar</strong> como arché.
          O ar se transforma em todas as substâncias por dois processos: <em>condensação</em>
          (ar → vento → nuvem → água → terra → pedra) e <em>rarefação</em> (ar → fogo). Foi o
          primeiro a desenvolver uma teoria física das transformações da matéria.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pitágoras</span>
        <h2>4. Pitágoras e o número como princípio</h2>
        <p>
          <strong>Pitágoras de Samos</strong> (c. 570–495 a.C.) e seus discípulos (os pitagóricos)
          propuseram que o arché não é uma substância material, mas o <strong>número</strong>.
          "Todas as coisas são número" — a harmonia do cosmos é de natureza matemática.
        </p>
        <p>
          Os pitagóricos descobriram que as consonâncias musicais correspondem a razões numéricas
          simples (a oitava é 2:1, a quinta é 3:2). Estenderam essa ideia ao cosmos: os planetas
          se movem segundo harmonias numéricas, produzindo a "música das esferas".
        </p>
        <p>
          A <strong>influência pitagórica</strong> é imensa: Platão (a estrutura matemática das
          Formas), Copérnico, Kepler e Einstein herdaram a ideia de que o universo tem uma
          estrutura matemática subjacente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Heráclito e Parmênides</span>
        <h2>5. O debate fundamental: devir vs. permanência</h2>
        <p>
          O debate mais importante da filosofia pré-socrática opôs <strong>Heráclito</strong> e
          <strong> Parmênides</strong> em torno da questão: a realidade é mudança ou permanência?
        </p>
        <p>
          <strong>Heráclito de Éfeso</strong> (c. 535–475 a.C.) ensinou que tudo está em constante
          movimento e transformação — <em>"panta rhei"</em> (tudo flui). O arché é o <strong>fogo</strong>,
          símbolo da transformação eterna. Mas há uma unidade nessa multiplicidade: o <strong>logos</strong>
          (λόγος) — a razão universal que governa o cosmos. "Não se pode entrar duas vezes no mesmo rio."
        </p>
        <p>
          <strong>Parmênides de Eleia</strong> (c. 515–450 a.C.) foi o oposto radical: o <strong>Ser</strong>
          (tò ón) é uno, imóvel, eterno e indivisível. A mudança é uma ilusão dos sentidos — apenas a
          razão pura pode apreender o verdadeiro Ser. "O Ser é; o não-Ser não é." Esse princípio
          (de não-contradição) fundamenta toda a lógica posterior.
        </p>
        <div className="lesson-highlight">
          <h3>Heráclito vs. Parmênides: legado</h3>
          <p>
            Platão tentará sintetizar os dois: o mundo sensível (Heráclito — fluxo) e o mundo das
            Ideias (Parmênides — permanência eternas). Esse debate entre mudança e permanência,
            multiplicidade e unidade, percorre toda a história da filosofia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atomismo</span>
        <h2>6. Leucipo e Demócrito: o atomismo antigo</h2>
        <p>
          <strong>Leucipo</strong> e seu discípulo <strong>Demócrito de Abdera</strong> (c. 460–370 a.C.)
          desenvolveram a teoria mais revolucionária da filosofia pré-socrática: o <strong>atomismo</strong>.
        </p>
        <p>
          A realidade é composta de partículas indivisíveis (<em>átomos</em> — ἄτομος, "o que não
          pode ser cortado") e do <strong>vazio</strong> em que se movem. Os átomos diferem em forma,
          tamanho e posição. Sua combinação e separação explicam todas as mudanças observadas no mundo.
        </p>
        <p>
          O atomismo antigo antecipou — de forma filosófica, não experimental — a teoria atômica
          moderna (Dalton, séc. XIX). É uma das ideias mais impressionantes da história intelectual
          humana: intuída pela razão especulativa milênios antes de sua confirmação experimental.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>7. Os pré-socráticos em perspectiva</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Local</th>
                <th>Arché</th>
                <th>Ideia central</th>
                <th>Legado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tales</td>
                <td>Mileto</td>
                <td>Água</td>
                <td>Tudo vem da água</td>
                <td>1ª explicação natural do cosmos</td>
              </tr>
              <tr>
                <td>Anaximandro</td>
                <td>Mileto</td>
                <td>Ápeiron</td>
                <td>Indefinido gera os opostos</td>
                <td>1ª cosmologia sem substância definida</td>
              </tr>
              <tr>
                <td>Anaxímenes</td>
                <td>Mileto</td>
                <td>Ar</td>
                <td>Condensação e rarefação</td>
                <td>Teoria física das transformações</td>
              </tr>
              <tr>
                <td>Pitágoras</td>
                <td>Crotona</td>
                <td>Número</td>
                <td>Cosmos é matemático</td>
                <td>Matematização da natureza</td>
              </tr>
              <tr>
                <td>Heráclito</td>
                <td>Éfeso</td>
                <td>Fogo/Logos</td>
                <td>Tudo flui, logos governa</td>
                <td>Dialética, filosofia do devir</td>
              </tr>
              <tr>
                <td>Parmênides</td>
                <td>Eleia</td>
                <td>Ser</td>
                <td>Ser é uno e imóvel</td>
                <td>Princípio da não-contradição</td>
              </tr>
              <tr>
                <td>Demócrito</td>
                <td>Abdera</td>
                <td>Átomos</td>
                <td>Realidade = átomos + vazio</td>
                <td>Teoria atômica materialista</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado Histórico</span>
        <h2>8. O legado dos pré-socráticos para a ciência e a filosofia modernas</h2>
        <p>
          À primeira vista, afirmar que "tudo é água" ou "tudo é fogo" parece ingênuo. Mas o que
          importa nos pré-socráticos não é a resposta — é a <strong>forma da pergunta</strong> e
          o <strong>tipo de explicação</strong> buscada. Eles foram os primeiros a exigir que as
          explicações sobre o cosmos fossem:
        </p>
        <ul>
          <li><strong>Naturais:</strong> sem recorrer a vontades divinas ou mitos.</li>
          <li><strong>Racionais:</strong> sustentadas por argumentos, não por autoridade.</li>
          <li><strong>Universais:</strong> válidas para todos, não apenas para iniciados.</li>
          <li><strong>Revisáveis:</strong> Anaxímenes criticou Tales; Demócrito foi além de Leucipo.</li>
        </ul>
        <p>
          Esses princípios são exatamente os que definem a ciência moderna. Copérnico, Galileu e
          Newton herdaram a busca pré-socrática por uma ordem racional e matemática no cosmos —
          embora com instrumentos e método experimental que os gregos antigos não possuíam.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ideia Pré-socrática</th>
                <th>Ressonância Científica Moderna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atomismo de Demócrito (átomos + vazio)</td>
                <td>Teoria atômica de Dalton (1803); física quântica (séc. XX)</td>
              </tr>
              <tr>
                <td>Pitágoras: cosmos como estrutura matemática</td>
                <td>Galileu: "O livro da natureza é escrito em linguagem matemática"</td>
              </tr>
              <tr>
                <td>Heráclito: logos como razão ordenadora</td>
                <td>Ideia de leis naturais universais (Newton, Einstein)</td>
              </tr>
              <tr>
                <td>Anaximandro: ápeiron ilimitado gera opostos</td>
                <td>Conceitos modernos de campo, energia e entropia</td>
              </tr>
              <tr>
                <td>Parmênides: o Ser é conservado</td>
                <td>Leis de conservação (energia, massa, momento)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Pré-socráticos no ENEM</h3>
          <p>
            O ENEM frequentemente usa os pré-socráticos para questionar sobre a <em>passagem do
            mito ao logos</em>, sobre o conceito de <em>arché</em>, e sobre a relação entre
            filosofia e ciência. A alternativa incorreta mais comum: confundir o atomismo de
            Demócrito com método experimental. Os átomos pré-socráticos foram fruto de especulação
            racional — a confirmação experimental só viria dois mil anos depois.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>9. Os Pré-Socráticos no ENEM: Como a Filosofia da Natureza Aparece nas Questões</h2>
        <p>
          Os pré-socráticos aparecem no ENEM principalmente em questões que pedem a identificação
          da passagem do pensamento mítico ao filosófico-racional, ou que relacionam as primeiras
          cosmologias filosóficas com o método científico moderno.
        </p>
        <p>
          Padrões de questão:
        </p>
        <ul>
          <li>
            <strong>Mito vs. logos:</strong> textos que descrevem a transição da cosmogonia
            mítica (Teogonia de Hesíodo, por exemplo) para a busca racional de um princípio
            natural (<em>arché</em>). A questão pede que se identifique o que caracteriza o
            pensamento filosófico nessa transição.
          </li>
          <li>
            <strong>A herança pré-socrática:</strong> questões que pedem a relação entre o
            atomismo de Demócrito e a física moderna (átomo como unidade indivisível da matéria)
            — mostrando como ideias filosóficas antigas anteciparam descobertas científicas.
          </li>
          <li>
            <strong>Devir vs. permanência:</strong> a oposição entre Heráclito (tudo flui) e
            Parmênides (o ser é uno e imóvel) aparece como base para debates filosóficos
            posteriores — Platão herda Parmênides; o movimento dialético hegeliano recupera Heráclito.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Vocabulário pré-socrático essencial</h3>
          <p>
            <strong>Arché:</strong> princípio fundamental do cosmos (água, apeiron, ar, fogo, número).<br/>
            <strong>Logos:</strong> razão, princípio ordenador do mundo (Heráclito).<br/>
            <strong>Apeiron:</strong> o ilimitado/indeterminado de Anaximandro.<br/>
            <strong>Átomo:</strong> partícula indivisível de Demócrito/Leucipo.<br/>
            <strong>Nous:</strong> mente/inteligência como princípio ordenador em Anaxágoras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🌊</span>
            <h3>Tales</h3>
            <p>Água como arché. Primeiro filósofo ocidental. Ruptura com o mito.</p>
          </div>
          <div className="math-card">
            <span>♾️</span>
            <h3>Anaximandro</h3>
            <p>Ápeiron — princípio indefinido e ilimitado. Mais abstrato que Tales.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Pitágoras</h3>
            <p>Número como estrutura do cosmos. Matemática como chave da realidade.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Heráclito</h3>
            <p>Panta rhei — tudo flui. Fogo e logos como princípios do devir.</p>
          </div>
          <div className="math-card">
            <span>🪨</span>
            <h3>Parmênides</h3>
            <p>Ser imóvel e eterno. Mudança é ilusão. Base do princípio de não-contradição.</p>
          </div>
          <div className="math-card">
            <span>⚛️</span>
            <h3>Demócrito</h3>
            <p>Átomos e vazio. Materialismo atomista. Antecipa a física moderna.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Arché de Tales"
          statement={<p>Tales de Mileto é considerado o primeiro filósofo ocidental por ter proposto que o princípio (arché) de todas as coisas é:</p>}
          options={[
            { letter: "a", text: "O fogo, símbolo da transformação eterna." },
            { letter: "b", text: "O número, estrutura matemática da realidade." },
            { letter: "c", text: "A água, elemento primordial de toda a natureza.", correct: true },
            { letter: "d", text: "O vazio, espaço onde os átomos se movem." },
          ]}
          resolution={<p><strong>Tales de Mileto</strong> propôs a <em>água</em> como arché — princípio e constituinte de toda a realidade. Sua importância histórica não está na resposta em si (que pode parecer ingênua), mas na <em>forma</em> da pergunta: pela primeira vez, um filósofo buscou explicar a natureza por meio de um princípio natural, não divino. Isso marca a passagem do mythos ao logos e o início da tradição filosófica e científica ocidental.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Heráclito e o Devir"
          statement={<p>Heráclito é famoso pela frase "Não se pode entrar duas vezes no mesmo rio." Essa afirmação expressa a ideia de que:</p>}
          options={[
            { letter: "a", text: "Os rios são perigosos e não devem ser atravessados mais de uma vez." },
            { letter: "b", text: "A realidade está em constante fluxo e transformação — nada permanece igual.", correct: true },
            { letter: "c", text: "O Ser é uno, imóvel e eterno, e os sentidos nos enganam com a aparência de mudança." },
            { letter: "d", text: "A água é o princípio de todas as coisas, como demonstrado pelo exemplo do rio." },
          ]}
          resolution={<p>Para Heráclito, a realidade fundamental é o <em>devir</em> — a mudança contínua e incessante. "Não se pode entrar duas vezes no mesmo rio" porque tanto o rio quanto a pessoa mudam constantemente. Porém, há uma unidade racional nessa mudança: o <em>logos</em> — a razão universal que governa o cosmos. Heráclito se opõe a Parmênides: para ele, a mudança é real, não ilusória.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Atomismo e Ciência Moderna"
          statement={<p>A teoria atomista de Demócrito afirmava que toda a realidade é composta de átomos e vazio. Em que sentido essa ideia representa uma ruptura significativa com outros pré-socráticos?</p>}
          options={[
            { letter: "a", text: "Demócrito foi o primeiro a propor um arché divino, superando o materialismo dos anteriores." },
            { letter: "b", text: "Demócrito propôs um princípio imaterial (o número) como fundamento da realidade." },
            { letter: "c", text: "Demócrito introduziu o vazio como elemento constitutivo da realidade, negando que o espaço vazio seja impossível — o que Parmênides rejeitava.", correct: true },
            { letter: "d", text: "Demócrito foi o primeiro a realizar experimentos para verificar sua teoria dos átomos." },
          ]}
          resolution={<p>A grande ruptura de Demócrito está em admitir o <strong>vazio</strong> como real. Parmênides havia argumentado que "o não-Ser não é" — logo, o vazio (ausência de ser) seria impossível. Demócrito quebra essa limitação: sem vazio, os átomos não poderiam se mover. Os átomos diferem em forma, tamanho e posição; suas combinações e separações no vazio explicam toda a diversidade do mundo. É uma teoria puramente materialista e mecanicista, sem teleologia ou alma. Sua influência na física moderna é enorme.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Pré-socráticos e Ciência"
          statement={<p>Um estudante afirma: "As ideias dos pré-socráticos são inúteis porque a ciência moderna já provou que estavam errados." Um professor de filosofia discorda. Qual seria o argumento mais adequado do professor?</p>}
          options={[
            { letter: "a", text: "Os pré-socráticos estavam corretos — a água, o ar e o fogo são os elementos fundamentais da matéria." },
            { letter: "b", text: "O valor histórico dos pré-socráticos está na inauguração de um modo racional e natural de questionar o cosmos, não na correção das respostas.", correct: true },
            { letter: "c", text: "A ciência moderna confirmou todas as teorias pré-socráticas, especialmente o atomismo de Demócrito." },
            { letter: "d", text: "Os pré-socráticos desenvolveram o método experimental, base da ciência contemporânea." },
          ]}
          resolution={<p>O valor histórico dos pré-socráticos não está na <em>precisão</em> de suas respostas, mas no <em>tipo de pergunta</em> que fizeram e no <em>método</em> que adotaram: buscar explicações racionais e naturais, sem recorrer ao sobrenatural. Isso inaugura a tradição intelectual ocidental de ciência e filosofia. Embora o atomismo de Demócrito guarde semelhanças com a física moderna, não foi desenvolvido experimentalmente — foi uma intuição especulativa genial. A importância dos pré-socráticos é metodológica e histórica: fundaram o projeto de compreensão racional do mundo.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Heráclito e a Contradição"
          statement={<p>"A guerra é o pai de todas as coisas." (Heráclito). No contexto do pensamento heraclitiano, essa afirmação deve ser interpretada como:</p>}
          options={[
            { letter: "a", text: "Uma defesa filosófica da guerra como instrumento de progresso social e político." },
            { letter: "b", text: "A ideia de que a tensão entre opostos (como luz e sombra, quente e frio) é o que gera e mantém a realidade.", correct: true },
            { letter: "c", text: "Uma crítica à paz, que para Heráclito representaria a morte e a estagnação do cosmos." },
            { letter: "d", text: "A afirmação de que o fogo (princípio de Heráclito) é causado pela fricção das armas na guerra." },
          ]}
          resolution={<p>Para Heráclito, a <em>guerra</em> (pólemos) é uma metáfora da <strong>tensão dos opostos</strong> que gera e mantém o cosmos. Assim como fogo e água, dia e noite, vida e morte se opõem e se complementam, a "guerra" entre contrários é o motor da realidade. Sem essa tensão, o cosmos colapsaria numa unidade indiferenciada. O logos governa justamente essa harmonia dos opostos. Heráclito não está defendendo a guerra literal — está descrevendo a estrutura dialética da realidade como unidade na multiplicidade de opostos em tensão.</p>}
        />
      </section>
    </article>
  );
}
