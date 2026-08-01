"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 27</span>
          <h1>Friedrich Nietzsche: Crítica à Moral e ao Pensamento Tradicional</h1>
          <p>
            Nietzsche é um dos filósofos mais provocadores e originais do século XIX. Sua crítica
            radical à moral, à religião e ao racionalismo ocidental abalou os fundamentos da
            filosofia e permanece intensamente presente nas questões do ENEM sobre ética e cultura.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e Contexto</span>
        <h2>1. Nietzsche: Quem Foi?</h2>
        <p>
          Friedrich Wilhelm Nietzsche (1844–1900) nasceu na Prússia, filho de pastor luterano. Foi
          professor de filologia clássica em Basileia (Suíça) antes de se dedicar exclusivamente à
          filosofia. Amizade e ruptura com Richard Wagner marcaram sua trajetória. Em 1889, sofreu
          colapso mental do qual nunca se recuperou, morrendo em 1900.
        </p>
        <p>
          Suas obras principais incluem: <em>O Nascimento da Tragédia</em> (1872),
          <em> Assim Falava Zaratustra</em> (1883–85), <em>Além do Bem e do Mal</em> (1886),
          <em> Genealogia da Moral</em> (1887) e <em>O Crepúsculo dos Ídolos</em> (1889). Nietzsche
          não foi filósofo sistemático — escreveu em aforismos, metáforas e parábolas.
        </p>
        <div className="lesson-highlight">
          <h3>Nietzsche e o nazismo: uma distorção</h3>
          <p>
            Após a morte de Nietzsche, sua irmã Elisabeth Förster-Nietzsche (antissemita e
            simpatizante do nazismo) manipulou seus textos e cartas, tentando associá-lo ao
            nacionalismo alemão. O próprio Nietzsche, em vida, combateu vigorosamente o
            antissemitismo e o nacionalismo alemão. As ideias de Nietzsche foram distorcidas
            pelos nazistas — algo que o filósofo teria repudiado com veemência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Niilismo</span>
        <h2>2. "Deus Está Morto" — O Niilismo e a Crise dos Valores</h2>
        <p>
          A frase mais famosa de Nietzsche aparece em <em>A Gaia Ciência</em> (1882): "Deus está
          morto. Deus permanece morto. E nós o matamos." Isso não é um enunciado ateu simplório,
          mas um diagnóstico cultural profundo: o mundo moderno, com o avanço da ciência e da razão,
          tornou impossível a crença ingênua em Deus — e com ela desmoronou toda a estrutura de
          valores morais que dependia desse fundamento.
        </p>
        <p>
          O <strong>niilismo</strong> é, para Nietzsche, a consequência de "Deus está morto": sem
          fundamento transcendente, os valores tradicionais (bem e mal, verdade absoluta, progresso)
          perdem sua base. O ser humano moderno vaga sem bússola moral. Nietzsche não celebra isso
          — diagnostica e convoca à superação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Moral</span>
        <h2>3. Moral dos Escravos versus Moral dos Senhores</h2>
        <p>
          Em <em>Genealogia da Moral</em> (1887), Nietzsche analisa a origem histórica e psicológica
          dos valores morais. Identifica dois tipos fundamentais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Moral dos Senhores (nobre)</th>
                <th>Moral dos Escravos (rebanho)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Origem</strong></td>
                <td>Classe guerreira aristocrática</td>
                <td>Classe dominada, fraca, oprimida</td>
              </tr>
              <tr>
                <td><strong>Ponto de partida</strong></td>
                <td>"Eu sou bom" (afirmação de si)</td>
                <td>"O outro é mau" (negação do outro)</td>
              </tr>
              <tr>
                <td><strong>Valores centrais</strong></td>
                <td>Força, nobreza, criatividade, saúde</td>
                <td>Humildade, resignação, compaixão, igualdade</td>
              </tr>
              <tr>
                <td><strong>Psicologia</strong></td>
                <td>Exuberância, afirmação vital</td>
                <td>Ressentimento (<em>ressentiment</em>)</td>
              </tr>
              <tr>
                <td><strong>Exemplo histórico</strong></td>
                <td>Aristocracia grega homérica</td>
                <td>Judaísmo e Cristianismo (para Nietzsche)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para Nietzsche, o Cristianismo promoveu a "revolução dos escravos na moral": os fracos,
          incapazes de se vingar dos poderosos diretamente, criaram uma moral em que fraqueza é
          virtude (humildade, mansidão, pobreza de espírito) e força é pecado (soberba, vaidade).
          Isso é, para ele, uma forma de <strong>ressentimento</strong> — vingança imaginária.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Além-Homem</span>
        <h2>4. O Além-Homem (Übermensch) e a Vontade de Potência</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama dos conceitos centrais de Nietzsche">
            {/* Centro: Nietzsche */}
            <ellipse cx="240" cy="110" rx="65" ry="35" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="240" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">NIETZSCHE</text>
            <text x="240" y="122" textAnchor="middle" fontSize="10" fill="#92400e">filosofia da vida</text>

            {/* Deus está morto */}
            <rect x="10" y="20" width="110" height="45" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="65" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">"Deus está morto"</text>
            <text x="65" y="54" textAnchor="middle" fontSize="9" fill="#9d174d">niilismo moderno</text>
            <line x1="120" y1="48" x2="178" y2="95" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Vontade de potência */}
            <rect x="360" y="20" width="110" height="45" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="415" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">Vontade de</text>
            <text x="415" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">Potência</text>
            <line x1="360" y1="48" x2="302" y2="95" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Além-Homem */}
            <rect x="360" y="160" width="110" height="45" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="415" y="178" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Übermensch</text>
            <text x="415" y="193" textAnchor="middle" fontSize="9" fill="#1e40af">além-homem</text>
            <line x1="360" y1="172" x2="302" y2="135" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Eterno Retorno */}
            <rect x="10" y="160" width="110" height="45" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="65" y="178" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#5b21b6">Eterno Retorno</text>
            <text x="65" y="193" textAnchor="middle" fontSize="9" fill="#5b21b6">amor fati</text>
            <line x1="120" y1="172" x2="178" y2="138" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Moral dos Senhores */}
            <rect x="175" y="10" width="130" height="35" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="240" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">Moral dos Senhores</text>
            <line x1="240" y1="45" x2="240" y2="75" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3"/>
          </svg>
          <figcaption>Conceitos centrais do pensamento de Nietzsche e suas relações.</figcaption>
        </figure>
        <p>
          Em <em>Assim Falava Zaratustra</em>, Nietzsche apresenta o <strong>Além-Homem</strong>{" "}
          (Übermensch): não uma raça superior biológica (distorção nazista!), mas o tipo humano que,
          tendo superado o niilismo e a moral do rebanho, cria seus próprios valores a partir da
          afirmação da vida. O Além-Homem não foge do sofrimento — o abraça como parte da existência.
        </p>
        <p>
          A <strong>vontade de potência</strong> (Wille zur Macht) é o impulso fundamental da vida:
          não apenas vontade de sobreviver, mas de crescer, criar, superar-se. Não é desejo de
          dominar os outros, mas de se autodominar e se autossuperar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Eterno Retorno</span>
        <h2>5. O Eterno Retorno e o Amor Fati</h2>
        <p>
          O <strong>eterno retorno</strong> é o pensamento mais abissal de Nietzsche: e se tudo
          que aconteceu, acontece e acontecerá se repetisse eternamente, exatamente da mesma forma,
          infinitas vezes? Você conseguiria viver de tal modo que desejasse que tudo se repetisse
          eternamente?
        </p>
        <p>
          Não é uma tese cosmológica, mas um imperativo ético: viva de tal forma que possas querer
          a repetição eterna de tua vida. Isso exige o <strong>amor fati</strong> (amor ao destino):
          amar tudo que acontece, inclusive o sofrimento e o fracasso, sem desejar que tivesse sido
          diferente. O contrário do ressentimento — a afirmação total da vida.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Críticas</span>
        <h2>6. Nietzsche e o ENEM: O que Cai na Prova</h2>
        <p>
          No ENEM, Nietzsche aparece principalmente em questões sobre:
        </p>
        <ul>
          <li>Crítica à moral: distinção entre moral dos senhores e moral dos escravos.</li>
          <li>O niilismo e a "morte de Deus" como diagnóstico cultural moderno.</li>
          <li>Perspectivismo: não há fatos, apenas interpretações.</li>
          <li>Crítica ao platonismo: a filosofia de Platão criou o "mundo verdadeiro" (das ideias) em detrimento do mundo sensível — Nietzsche inverte isso: o único mundo real é o da vida, do devir, dos sentidos.</li>
          <li>Crítica ao Iluminismo: a razão não garante progresso nem felicidade.</li>
          <li>O dionisíaco versus o apolíneo: em <em>O Nascimento da Tragédia</em>, Nietzsche opõe a racionalidade ordenada (Apolo) ao impulso vital caótico (Dionísio), criticando o excesso de racionalismo socrático que "matou" a tragédia grega.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Apolíneo e Dionisíaco</span>
        <h2>7. O Apolíneo e o Dionisíaco: A Crítica ao Racionalismo</h2>
        <p>
          Em sua primeira grande obra, <em>O Nascimento da Tragédia</em> (1872), Nietzsche propõe
          uma divisão entre dois impulsos fundamentais da cultura grega — e, por extensão, da
          cultura humana em geral:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Apolíneo</th>
                <th>Dionisíaco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Divindade</strong></td>
                <td>Apolo (sol, luz, beleza, forma)</td>
                <td>Dionísio (vinho, êxtase, caos, excesso)</td>
              </tr>
              <tr>
                <td><strong>Característica</strong></td>
                <td>Ordem, racionalidade, individualidade, medida</td>
                <td>Excesso, instinto, dissolução do "eu", êxtase coletivo</td>
              </tr>
              <tr>
                <td><strong>Arte associada</strong></td>
                <td>Escultura, épica homérica</td>
                <td>Música, dança, tragédia grega</td>
              </tr>
              <tr>
                <td><strong>Relação com a vida</strong></td>
                <td>Beleza que cobre o horror da existência</td>
                <td>Afirmação direta do sofrimento e da contradição da vida</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para Nietzsche, a grande tragédia grega (Ésquilo, Sófocles) era a síntese perfeita dos
          dois impulsos. Mas Sócrates e o racionalismo por ele inaugurado destruíram o dionisíaco:
          ao exigir que tudo fosse racional, consciente e otimista, o socratismo matou a tragédia.
          Nietzsche via Sócrates como o responsável pela "degenerescência" da cultura grega —
          irônico, dado que a filosofia posterior idolatrou Sócrates.
        </p>
        <div className="lesson-highlight">
          <h3>O dionisíaco e a vida</h3>
          <p>
            A recuperação do dionisíaco, para Nietzsche, não é um convite à barbárie, mas ao
            reconhecimento do caráter trágico da existência: a vida inclui sofrimento, contradição
            e caos, e a grande arte — e a grande filosofia — deve afirmar isso, não esconder atrás
            de falsas harmonias racionais. Essa ideia ressoa com o existencialismo e com a crítica
            nietzschiana ao positivismo e ao cientificismo ingênuos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nietzsche Hoje</span>
        <h2>8. Nietzsche e a Contemporaneidade: Perspectivismo e Pós-Modernidade</h2>
        <p>
          A influência de Nietzsche sobre o pensamento do século XX e XXI é imensa e paradoxal.
          Pensadores tão diferentes como Heidegger, Foucault, Deleuze, Derrida e os pós-modernos
          em geral reivindicaram sua herança — às vezes de formas contraditórias entre si.
        </p>
        <p>
          O <strong>perspectivismo</strong> nietzschiano — a ideia de que "não há fatos, apenas
          interpretações", e que todo conhecimento é condicionado por um ponto de vista — alimentou
          o pensamento pós-moderno de desconfiança das grandes narrativas (Lyotard) e a crítica
          foucaultiana à neutralidade do saber. Mas também foi distorcido pelo relativismo mais
          radical: Nietzsche não dizia que todas as perspectivas são iguais — algumas são mais
          ricas, mais vitais e mais honestas que outras.
        </p>
        <ul>
          <li><strong>Na arte:</strong> o expressionismo, o surrealismo e a música de vanguarda exploraram o dionisíaco.</li>
          <li><strong>Na política:</strong> tanto a esquerda (crítica ao moralismo burguês) quanto a direita (distorção nazista) reivindicaram Nietzsche — ambos de forma problemática.</li>
          <li><strong>Na filosofia:</strong> a crítica à metafísica e ao sujeito racional, central em Nietzsche, tornou-se o ponto de partida de toda a filosofia continental do século XX.</li>
          <li><strong>No ENEM:</strong> questões sobre Nietzsche frequentemente pedem que o estudante aplique o perspectivismo ou a crítica à moral a situações contemporâneas — mídia, valores, cultura digital.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Armadilha clássica no ENEM</h3>
          <p>
            O ENEM nunca associa Nietzsche ao nazismo — essa é a distorção que o próprio Nietzsche
            repudiaria. Quando uma questão cita Nietzsche sobre o "além-homem" ou a "vontade de
            potência", nunca interprete como dominação racial ou política de poder sobre outros.
            Sempre leia no sentido de <em>superação de si mesmo</em> e <em>criação de valores</em>{" "}
            a partir da afirmação da vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💀</span>
            <h3>"Deus está morto"</h3>
            <p>Diagnóstico do niilismo moderno: colapso dos valores tradicionais com o fim da fé.</p>
          </div>
          <div className="math-card">
            <span>⚔️</span>
            <h3>Moral dos Senhores</h3>
            <p>Afirmação de si. Força, criatividade, nobreza. Contrária ao ressentimento.</p>
          </div>
          <div className="math-card">
            <span>😤</span>
            <h3>Ressentimento</h3>
            <p>Psicologia da moral dos escravos: vingança imaginária dos fracos contra os fortes.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Vontade de Potência</h3>
            <p>Impulso de crescer, criar e se superar — essência da vida para Nietzsche.</p>
          </div>
          <div className="math-card">
            <span>♾️</span>
            <h3>Eterno Retorno</h3>
            <p>Viva de modo que queiras repetir sua vida eternamente. Amor fati.</p>
          </div>
          <div className="math-card">
            <span>🦅</span>
            <h3>Além-Homem</h3>
            <p>Tipo humano que supera o niilismo e cria novos valores — afirma a vida.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Moral dos Escravos e Ressentimento"
          statement={<p>Segundo Nietzsche, a "moral dos escravos" tem como característica central:</p>}
          options={[
            { letter: "a", text: "A afirmação da força, da saúde e da exuberância vital como valores supremos." },
            { letter: "b", text: "O ressentimento e a negação do outro como forma de criar valores morais.", correct: true },
            { letter: "c", text: "A aceitação alegre do destino, sem recorrer a valores metafísicos ou religiosos." },
            { letter: "d", text: "A vontade de dominar politicamente os outros grupos sociais pela força física." },
          ]}
          resolution={<p>Na <em>Genealogia da Moral</em>, Nietzsche mostra que a moral dos escravos começa com o "não" — a negação do outro ("o poderoso é mau") antes de afirmar o próprio valor. Isso nasce do <strong>ressentimento</strong>: a incapacidade de se vingar diretamente dos opressores leva os dominados a criar uma moral em que a fraqueza é virtude. Para Nietzsche, o Cristianismo seria o exemplo histórico mais poderoso desse processo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Niilismo e a 'Morte de Deus'"
          statement={<p>Ao proclamar que "Deus está morto", Nietzsche pretendia expressar que:</p>}
          options={[
            { letter: "a", text: "Deus nunca existiu e a religião sempre foi uma ilusão das classes dominantes." },
            { letter: "b", text: "A modernidade dissolveu os fundamentos transcendentes da moral, gerando uma crise de valores.", correct: true },
            { letter: "c", text: "A ciência provou definitivamente a inexistência de qualquer ser divino ou sobrenatural." },
            { letter: "d", text: "O ateísmo deve ser a base do Estado moderno, substituindo a religião." },
          ]}
          resolution={<p>A frase "Deus está morto" não é uma afirmação teológica, mas um diagnóstico cultural: a modernidade, com o avanço da ciência e do racionalismo, tornou impossível a crença ingênua em fundamentos absolutos e transcendentes. Isso gera o <strong>niilismo</strong> — a ausência de sentido e valores. Nietzsche não celebra isso, mas convoca à criação de novos valores a partir da afirmação da vida, sem apoiar-se em fundamentos metafísicos.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Eterno Retorno e Amor Fati"
          statement={<p>O conceito nietzschiano de "eterno retorno" funciona principalmente como:</p>}
          options={[
            { letter: "a", text: "Uma teoria cosmológica que afirma a repetição cíclica do universo com base em evidências científicas." },
            { letter: "b", text: "Um imperativo ético que convida a viver de modo que se possa querer a repetição eterna da própria vida.", correct: true },
            { letter: "c", text: "Uma crítica ao progresso linear da história defendido por Hegel e Marx." },
            { letter: "d", text: "Uma versão secularizada da crença cristã na vida após a morte e na ressurreição." },
          ]}
          resolution={<p>O eterno retorno não é uma afirmação científica sobre a estrutura do cosmos, mas um <strong>teste ético</strong>: "Se tudo se repetisse infinitamente, você aprovaria sua vida?" Isso exige o <em>amor fati</em> (amor ao destino): amar cada instante da vida, inclusive o sofrimento, sem escapatórias metafísicas. É a afirmação máxima da vida — o oposto do niilismo e do ressentimento.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Perspectivismo de Nietzsche"
          statement={
            <p>
              "Não há fatos, só interpretações." (Nietzsche, <em>Fragmentos Póstumos</em>)<br/><br/>
              Esta afirmação de Nietzsche expressa o que se chama de perspectivismo. De acordo com essa ideia:
            </p>
          }
          options={[
            { letter: "a", text: "Todo conhecimento é impossível, pois não há realidade objetiva a ser conhecida." },
            { letter: "b", text: "O conhecimento científico é a única forma válida de acesso à realidade." },
            { letter: "c", text: "Todo conhecimento é condicionado por uma perspectiva, interesse ou ponto de vista, sem acesso a uma verdade absoluta.", correct: true },
            { letter: "d", text: "As interpretações científicas são superiores às filosóficas por serem mais objetivas." },
          ]}
          resolution={<p>O <strong>perspectivismo</strong> de Nietzsche afirma que não existe um "olhar de lugar nenhum" — todo conhecimento é condicionado por quem conhece: sua cultura, seus instintos, sua posição social, seus valores. Isso não é relativismo absoluto (para Nietzsche, algumas perspectivas são mais ricas e vitais que outras), mas uma crítica ao dogmatismo filosófico que acredita em verdades absolutas e eternas, independentes de qualquer perspectiva humana.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Além-Homem e Criação de Valores"
          statement={
            <p>
              "Eu vos ensino o além-homem. O homem é algo que deve ser superado. Que fizestes para superá-lo? [...] O além-homem é o sentido da terra. Que vossa vontade diga: o além-homem seja o sentido da terra!" (Nietzsche, <em>Assim Falava Zaratustra</em>)<br/><br/>
              Com base no texto, o "além-homem" de Nietzsche representa:
            </p>
          }
          options={[
            { letter: "a", text: "Uma raça biologicamente superior que deve dominar as demais, como defendia o nazismo." },
            { letter: "b", text: "O tipo humano que, superando os velhos valores, cria novos valores a partir da afirmação da vida.", correct: true },
            { letter: "c", text: "O ser humano que alcança a perfeição moral por meio da obediência às leis divinas." },
            { letter: "d", text: "O intelectual iluminista que usa a razão para superar a superstição religiosa." },
          ]}
          resolution={<p>O <strong>Übermensch</strong> (além-homem) é frequentemente distorcido como uma raça superior — interpretação nazista que Nietzsche repudiaria. Na verdade, refere-se a um tipo <em>existencial</em>: o ser humano que superou o niilismo e a moral do rebanho, e que, em vez de buscar fundamentos transcendentes (Deus, razão abstrata, progresso), <strong>cria seus próprios valores</strong> a partir do amor à vida e da vontade de potência. É o "sentido da terra" — voltado para este mundo, não para o além.</p>}
        />
      </section>
    </article>
  );
}
