"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 9</span>
          <h1>Aristóteles: lógica, ética e organização da sociedade</h1>
          <p>
            Aristóteles (384–322 a.C.) foi o maior polímata da Antiguidade e um dos pensadores mais
            influentes de toda a história. Discípulo de Platão, discordou do mestre em pontos fundamentais
            e criou um sistema filosófico enciclopédico que dominou o pensamento ocidental por mais
            de dois mil anos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e Obra</span>
        <h2>1. Aristóteles: o Estagirita e o Liceu</h2>
        <p>
          <strong>Aristóteles</strong> nasceu em Estagira (Macedônia) em 384 a.C. — daí o apelido
          "o Estagirita". Aos 17 anos foi estudar na Academia de Platão em Atenas, onde permaneceu
          por 20 anos — primeiro como aluno, depois como professor. Após a morte de Platão, tornou-se
          tutor do jovem Alexandre da Macedônia (o futuro Alexandre, o Grande).
        </p>
        <p>
          De volta a Atenas, fundou o <strong>Liceu</strong> (335 a.C.) — uma escola de filosofia
          com vastos jardins onde Aristóteles ensinava caminhando (daí o apelido de sua escola:
          "peripatética", de <em>peripatetikoi</em> — "os que caminham").
        </p>
        <p>
          Escreveu sobre praticamente todos os campos do saber: lógica, física, biologia, psicologia,
          ética, política, poética, retórica e metafísica. Suas obras mais importantes:
          <em> Organon</em> (lógica), <em>Física, Metafísica, Ética a Nicômaco, Política, Poética</em>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Platão vs. Aristóteles</span>
        <h2>2. A ruptura com Platão: "Amigo de Platão, mas mais amigo da verdade"</h2>
        <p>
          A famosa frase atribuída a Aristóteles resume sua posição: embora admirasse profundamente
          Platão, discordou de suas principais teses. As diferenças fundamentais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Platão</th>
                <th>Aristóteles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Realidade</td>
                <td>Dois mundos: sensível e inteligível (Formas)</td>
                <td>Um único mundo: as Formas existem nas próprias coisas</td>
              </tr>
              <tr>
                <td>Conhecimento</td>
                <td>Memória do mundo das Formas; razão pura</td>
                <td>Começa pelos sentidos; abstração racional</td>
              </tr>
              <tr>
                <td>Método</td>
                <td>Dialético (debate de ideias)</td>
                <td>Empírico + lógico (observação + dedução)</td>
              </tr>
              <tr>
                <td>Ética</td>
                <td>Virtude como conhecimento</td>
                <td>Virtude como hábito e justo meio</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>Governo dos filósofos-reis</td>
                <td>Politeía (governo moderado, lei como base)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Imanência vs. Transcendência</h3>
          <p>
            Para Platão, as Formas são <em>transcendentes</em> — existem num mundo separado.
            Para Aristóteles, as Formas são <em>imanentes</em> — existem dentro das próprias
            coisas como sua essência. Não há cavalos que "participam" da Forma do Cavalo —
            a forma do cavalo está em cada cavalo concreto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lógica</span>
        <h2>3. A lógica aristotélica: o Organon</h2>
        <p>
          Aristóteles inventou a <strong>lógica formal</strong> como disciplina científica. Seu conjunto
          de tratados sobre lógica, o <em>Organon</em> ("instrumento"), estabeleceu as regras do
          pensamento correto que dominariam o pensamento ocidental até o século XIX.
        </p>
        <p>
          As contribuições centrais:
        </p>
        <ul>
          <li><strong>Silogismo:</strong> forma básica de dedução (premissa maior + premissa menor → conclusão).</li>
          <li><strong>Categorias:</strong> os predicados fundamentais que podem ser atribuídos a qualquer coisa (substância, quantidade, qualidade, relação, lugar, tempo, posição, estado, ação, paixão).</li>
          <li><strong>Princípios lógicos:</strong> identidade (A = A), não-contradição (A ≠ não-A) e terceiro excluído (A ou não-A).</li>
          <li><strong>Demonstração científica:</strong> o conhecimento científico é demonstrado por silogismo a partir de premissas verdadeiras.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Metafísica</span>
        <h2>4. Substância, forma e matéria: a metafísica aristotélica</h2>
        <p>
          Aristóteles propõe que toda substância (coisa individual concreta) é composta de:
        </p>
        <ul>
          <li><strong>Matéria (hylé):</strong> o substrato potencial — o que a coisa é feita.</li>
          <li><strong>Forma (morphé):</strong> a estrutura e essência atual — o que faz a coisa ser o que é.</li>
        </ul>
        <p>
          Toda mudança envolve a passagem de <strong>potência</strong> (dynamis) para <strong>ato</strong> (enérgeia):
          uma semente é uma árvore em potência; quando cresce, torna-se árvore em ato.
        </p>
        <p>
          Esse princípio explicava o movimento e a mudança no mundo natural sem recorrer a um
          mundo separado de Formas platônicas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética a Nicômaco</span>
        <h2>5. Ética: eudaimonia, virtude e o justo meio</h2>
        <p>
          A ética de Aristóteles é teleológica — tudo tem um <strong>telos</strong> (fim, propósito).
          O telos do ser humano é a <strong>eudaimonia</strong> (εὐδαιμονία) — frequentemente
          traduzida como "felicidade", mas mais precisamente "florescimento humano" ou "vida boa".
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 220" width="460" height="220" aria-label="Pirâmide dos bens aristotélicos">
            {/* Pirâmide */}
            <polygon points="230,20 50,200 410,200" fill="#1d4ed8" opacity="0.1" stroke="#1d4ed8" strokeWidth="2"/>

            {/* Eudaimonia - topo */}
            <ellipse cx="230" cy="42" rx="70" ry="22" fill="#1d4ed8"/>
            <text x="230" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">EUDAIMONIA</text>
            <text x="230" y="54" textAnchor="middle" fontSize="9" fill="#bfdbfe">florescimento humano</text>

            {/* Virtude */}
            <text x="230" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Virtude (areté)</text>
            <text x="230" y="116" textAnchor="middle" fontSize="10" fill="#374151">hábito do justo meio</text>

            {/* Bens do corpo e externos */}
            <text x="140" y="160" textAnchor="middle" fontSize="10" fill="#374151">Bens externos</text>
            <text x="140" y="174" textAnchor="middle" fontSize="9" fill="#6b7280">(riqueza, amizade)</text>
            <text x="320" y="160" textAnchor="middle" fontSize="10" fill="#374151">Bens do corpo</text>
            <text x="320" y="174" textAnchor="middle" fontSize="9" fill="#6b7280">(saúde, prazer)</text>

            <text x="230" y="210" textAnchor="middle" fontSize="9" fill="#9ca3af">Base: os bens instrumentais — necessários mas não suficientes para a eudaimonia</text>
          </svg>
          <figcaption>Hierarquia dos bens aristotélicos: a eudaimonia é o bem supremo, alcançado pela virtude.</figcaption>
        </figure>
        <p>
          A virtude (<em>areté</em>) é um hábito — uma disposição estável de agir corretamente,
          adquirida pela prática. O <strong>justo meio</strong> (mesotes): a virtude é sempre um
          meio entre dois extremos viciosos. Exemplos:
        </p>
        <ul>
          <li>Coragem = meio entre covardia (déficit) e temeridade (excesso).</li>
          <li>Generosidade = meio entre avareza (déficit) e prodigalidade (excesso).</li>
          <li>Orgulho adequado = meio entre humildade (déficit) e vaidade (excesso).</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Política</span>
        <h2>6. O ser humano como "animal político" (zôon politikón)</h2>
        <p>
          Para Aristóteles, o ser humano é por natureza um <strong>animal político</strong>
          (<em>zôon politikón</em>): só pode realizar plenamente sua natureza vivendo em comunidade
          política (a polis). Quem vive fora da polis é "ou um deus ou uma besta".
        </p>
        <p>
          Aristóteles classificou as formas de governo segundo dois critérios:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Número de governantes</th>
                <th>Governo justo (bem comum)</th>
                <th>Governo degenerado (interesse próprio)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Um</td>
                <td><strong>Monarquia</strong></td>
                <td><strong>Tirania</strong></td>
              </tr>
              <tr>
                <td>Poucos</td>
                <td><strong>Aristocracia</strong></td>
                <td><strong>Oligarquia</strong></td>
              </tr>
              <tr>
                <td>Muitos</td>
                <td><strong>Politeía</strong> (república)</td>
                <td><strong>Democracia</strong> (demagógica)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O melhor governo para Aristóteles é a <strong>politeía</strong> — um governo misto que
          evita os extremos e é baseado na lei. A classe média é o seu fundamento: evita a
          tirania dos ricos e o populismo dos pobres.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">As Quatro Causas</span>
        <h2>7. As quatro causas aristotélicas: por que as coisas são como são</h2>
        <p>
          Uma das contribuições mais originais de Aristóteles à filosofia é a teoria das
          <strong> quatro causas</strong> — quatro tipos de explicação necessários para compreender
          completamente qualquer coisa ou processo. Aristóteles criticava os pré-socráticos por
          fornecerem apenas explicações parciais; as quatro causas oferecem uma explicação completa.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Causa</th>
                <th>Pergunta respondida</th>
                <th>Exemplo: estátua de mármore</th>
                <th>Exemplo: ser humano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Causa Material</strong></td>
                <td>De que é feito?</td>
                <td>Mármore</td>
                <td>Carne, ossos, matéria biológica</td>
              </tr>
              <tr>
                <td><strong>Causa Formal</strong></td>
                <td>Qual é sua forma/essência?</td>
                <td>A forma do Apolo ou de Atena</td>
                <td>A forma racional do ser humano</td>
              </tr>
              <tr>
                <td><strong>Causa Eficiente</strong></td>
                <td>O que a causou? Quem a fez?</td>
                <td>O escultor com o cinzel</td>
                <td>Os pais (causa geradora)</td>
              </tr>
              <tr>
                <td><strong>Causa Final</strong></td>
                <td>Para quê? Qual seu propósito?</td>
                <td>Decorar o templo, homenagear os deuses</td>
                <td>Alcançar a eudaimonia — o florescimento humano</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>causa final</strong> (o telos) é a mais importante para Aristóteles — toda
          mudança na natureza é orientada por um propósito. Isso é o <em>teleologismo</em>
          aristotélico: a natureza não é mecânica (como em Demócrito), mas finalística — cada ser
          tende ao seu fim natural. A glande de carvalho tende a se tornar carvalho; o bebê humano
          tende a se tornar um ser racional e político.
        </p>
        <div className="lesson-highlight">
          <h3>As quatro causas e a ciência moderna</h3>
          <p>
            A ciência moderna (Galileu, Descartes, Newton) rejeitou as causas formal e final,
            ficando apenas com as causas material e eficiente. A biologia evolucionária de Darwin,
            porém, reintroduziu algo parecido com a causa final — não como propósito consciente,
            mas como seleção natural que produz adaptações funcionais. O debate sobre teleologia
            na biologia continua até hoje.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Philia e Amizade</span>
        <h2>8. A philia: a amizade como fundamento ético e político</h2>
        <p>
          Nos Livros VIII e IX da <em>Ética a Nicômaco</em>, Aristóteles dedica uma análise
          extensa e surpreendente a um tema raramente abordado nas filosofias modernas:
          a <strong>amizade</strong> (<em>philia</em>). Para Aristóteles, a amizade não é um luxo
          sentimental — é uma necessidade ética e política fundamental.
        </p>
        <p>
          Aristóteles distingue três tipos de amizade:
        </p>
        <ul>
          <li>
            <strong>Amizade por utilidade:</strong> baseada no que cada um pode oferecer ao outro.
            É transitória — quando a utilidade cessa, a amizade termina. Ex: sócios de negócio,
            colegas de trabalho.
          </li>
          <li>
            <strong>Amizade por prazer:</strong> baseada no prazer mútuo da companhia. Comum
            entre jovens — intensa mas volátil, pois os gostos mudam. Ex: amizades de juventude
            baseadas em diversão compartilhada.
          </li>
          <li>
            <strong>Amizade perfeita (virtude):</strong> baseada na admiração pelo caráter virtuoso
            do outro. É rara, exige tempo e convívio, mas é duradoura. Ex: amizade entre pessoas
            que se admiram mutuamente como seres humanos.
          </li>
        </ul>
        <p>
          A amizade perfeita é, para Aristóteles, condição para a eudaimonia: "Sem amigos, ninguém
          escolheria viver, mesmo tendo todos os outros bens." A <em>philia</em> também é o
          fundamento da comunidade política — a cidade justa é aquela em que os cidadãos têm
          algo análogo à amizade entre eles: um cuidado genuíno pelo bem comum.
        </p>
        <div className="lesson-highlight">
          <h3>Philia e democracia</h3>
          <p>
            Aristóteles liga explicitamente a amizade à democracia: quanto mais igualitária é
            uma sociedade, mais philia é possível entre os cidadãos — pois a amizade verdadeira
            requer uma forma de reciprocidade e igualdade. A extrema desigualdade social destrói
            as condições para a philia cívica e, com ela, o fundamento afetivo da democracia.
            Esse argumento tem ecos surpreendentemente contemporâneos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔬</span>
            <h3>Empirismo</h3>
            <p>Conhecimento começa pelos sentidos. As Formas existem nas coisas, não num mundo separado.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Lógica</h3>
            <p>Inventor do silogismo formal. Princípios de identidade, não-contradição e terceiro excluído.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Eudaimonia</h3>
            <p>O fim (telos) do ser humano é o florescimento — alcançado pelo exercício da virtude.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Justo Meio</h3>
            <p>A virtude é o hábito do equilíbrio entre dois vícios extremos (déficit e excesso).</p>
          </div>
          <div className="math-card">
            <span>🏙️</span>
            <h3>Animal Político</h3>
            <p>O ser humano só se realiza na polis. A vida política é natural, não um mal necessário.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Governo</h3>
            <p>6 formas: monarquia/tirania, aristocracia/oligarquia, politeía/democracia demagógica.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Eudaimonia"
          statement={<p>Para Aristóteles, o fim último (telos) da vida humana é a eudaimonia. Essa palavra é melhor traduzida como:</p>}
          options={[
            { letter: "a", text: "Prazer imediato e satisfação dos desejos corporais." },
            { letter: "b", text: "Riqueza material e reconhecimento social." },
            { letter: "c", text: "Florescimento humano — a vida boa e virtuosa que realiza plenamente a natureza humana.", correct: true },
            { letter: "d", text: "Ausência de sofrimento e perturbação da alma, como pregavam os epicuristas." },
          ]}
          resolution={<p>A <strong>eudaimonia</strong> aristotélica não é simplesmente "felicidade" no sentido de prazer ou alegria subjetiva — é o <em>florescimento humano</em>, a realização plena da natureza do ser humano como animal racional e social. É alcançada pela prática contínua das virtudes, pelo exercício da razão, e pela vida em comunidade política. Aristóteles distingue a eudaimonia dos prazeres corporais (Epicuro) e da ausência de perturbação (Estoicismo) como fins inferiores — necessários mas insuficientes.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Justo Meio"
          statement={<p>Segundo a teoria aristotélica do justo meio (mesotes), a virtude da coragem está para a covardia e para a temeridade assim como:</p>}
          options={[
            { letter: "a", text: "A virtude é o extremo oposto ao vício — portanto, a coragem é a ausência total de medo." },
            { letter: "b", text: "A coragem é o equilíbrio entre o déficit (covardia) e o excesso (temeridade) — o meio entre dois vícios.", correct: true },
            { letter: "c", text: "A coragem deve ser praticada apenas pelos guerreiros; os cidadãos comuns não precisam dela." },
            { letter: "d", text: "A virtude é determinada por normas sociais — o que a sociedade chama de corajoso é corajoso." },
          ]}
          resolution={<p>O <strong>justo meio</strong> aristotélico não é uma média matemática, mas o ponto de equilíbrio correto para cada situação — que varia de pessoa para pessoa e de contexto para contexto. A <em>covardia</em> é o déficit de coragem (medo excessivo); a <em>temeridade</em> é o excesso (audácia sem discernimento). A <em>coragem</em> é a virtude que media entre esses dois extremos. O mesmo princípio vale para todas as virtudes: generosidade (entre avareza e prodigalidade), orgulho adequado (entre humildade excessiva e vaidade), etc.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Aristóteles e a Política"
          statement={<p>Aristóteles afirmou que o ser humano é por natureza um "animal político" (zôon politikón). O que essa afirmação implica politicamente?</p>}
          options={[
            { letter: "a", text: "Que os seres humanos são naturalmente agressivos e dominadores, necessitando de governo forte." },
            { letter: "b", text: "Que a vida política e a participação na polis são artificiais e contrárias à natureza humana." },
            { letter: "c", text: "Que a vida em comunidade política é condição natural para a realização plena da natureza humana racional.", correct: true },
            { letter: "d", text: "Que apenas os seres humanos que participam de eleições são verdadeiramente políticos." },
          ]}
          resolution={<p>Para Aristóteles, a política não é um mal necessário (como para alguns contratualistas modernos) — é a <em>condição natural</em> para a realização do ser humano. Somos racionais e linguísticos por natureza, e a linguagem (logos) não faz sentido isolada: ela é para comunicar e deliberar em comunidade. Só na polis o ser humano pode exercer plenamente a razão, a justiça e a amizade (philia) — os fundamentos do florescimento humano. Quem não precisa da polis "é ou uma besta ou um deus" — está fora da ordem natural humana.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Formas de Governo"
          statement={<p>Aristóteles classificou os sistemas políticos em seis formas, divididas entre governos que buscam o bem comum e governos que buscam o interesse dos governantes. Com base nessa classificação, uma oligarquia pode ser descrita como:</p>}
          options={[
            { letter: "a", text: "O governo de poucos sábios em benefício de toda a comunidade." },
            { letter: "b", text: "A degeneração da aristocracia — governo de poucos em proveito próprio, não do bem comum.", correct: true },
            { letter: "c", text: "A forma mais justa de governo porque os mais qualificados assumem o poder." },
            { letter: "d", text: "O governo da maioria que visa ao interesse particular dos pobres em detrimento dos ricos." },
          ]}
          resolution={<p>Na classificação aristotélica, cada forma justa de governo tem uma degeneração correspondente: Monarquia (governo de um, bem comum) → Tirania (governo de um, interesse próprio); Aristocracia (governo de poucos sábios, bem comum) → <strong>Oligarquia</strong> (governo de poucos ricos, interesse próprio); Politeía (governo de muitos, bem comum) → Demogocracia/Democracia demagógica (governo de muitos pobres, interesse de classe). A oligarquia é portanto a corrupção da aristocracia — o poder dos poucos em benefício deles mesmos, não da cidade.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Ética Aristotélica e Atualidade"
          statement={<p>"A virtude é uma disposição de caráter relacionada com a escolha e consistindo numa mediania, isto é, a mediania relativamente a nós, determinada por um princípio racional." (Aristóteles, Ética a Nicômaco). O trecho acima defende que a virtude moral:</p>}
          options={[
            { letter: "a", text: "É uma lei universal que deve ser seguida independentemente das circunstâncias ou do indivíduo." },
            { letter: "b", text: "É determinada por instintos naturais e não exige esforço ou deliberação racional." },
            { letter: "c", text: "É um hábito adquirido pelo exercício racional do equilíbrio entre extremos, adequado ao contexto do agente.", correct: true },
            { letter: "d", text: "É uma questão de convenção social — o que a maioria considera virtuoso é virtude." },
          ]}
          resolution={<p>Aristóteles define a virtude como uma <em>disposição de caráter</em> — não um instinto, não uma lei universal abstrata (como o imperativo categórico de Kant), mas um <strong>hábito</strong> desenvolvido pela prática e pela deliberação racional. O "princípio racional" é a phronesis (sabedoria prática) — a capacidade de discernir o justo meio adequado para cada situação específica. Isso torna a ética aristotélica contextual e prática: não há uma regra única para todos os casos; o agente virtuoso é aquele que desenvolveu o bom juízo para saber como agir bem em cada situação concreta.</p>}
        />
      </section>
    </article>
  );
}
