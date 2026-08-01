"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 31</span>
          <h1>Ética: Conceitos Fundamentais e Dilemas Contemporâneos</h1>
          <p>
            A ética é o ramo da filosofia que investiga como devemos agir e viver. Este capítulo
            apresenta as principais teorias éticas — das virtudes, deontológica, utilitarista e
            do cuidado — e aplica-as a dilemas contemporâneos recorrentes no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definições</span>
        <h2>1. Ética versus Moral</h2>
        <p>
          Embora usados como sinônimos no cotidiano, filosoficamente <strong>ética</strong> e
          <strong> moral</strong> têm sentidos distintos:
        </p>
        <ul>
          <li>
            <strong>Moral</strong> (do latim <em>mores</em> = costumes): conjunto de normas,
            valores e regras de conduta efetivamente praticadas por uma comunidade em determinado
            tempo e lugar. A moral é descritiva e histórica — varia de cultura para cultura.
          </li>
          <li>
            <strong>Ética</strong> (do grego <em>ethos</em> = caráter/costumes): reflexão filosófica
            sobre as normas morais — questiona seus fundamentos, sua validade, sua universalidade.
            A ética é normativa e crítica: analisa o que a moral diz e pergunta se está correto.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Ética como metacognição moral</h3>
          <p>
            A ética não diz "você deve agir assim" diretamente — ela pergunta "por que você deve
            agir assim?", "o que torna uma ação certa ou errada?", "há valores universais ou tudo
            é relativo?". Por isso dizemos que a ética é a <strong>filosofia da moral</strong>:
            ela reflete sobre os fundamentos e a validade dos sistemas morais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorias</span>
        <h2>2. Mapa das Principais Teorias Éticas</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 260" width="500" height="260" aria-label="Mapa das teorias éticas">
            {/* Centro */}
            <ellipse cx="250" cy="130" rx="55" ry="30" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
            <text x="250" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">ÉTICA</text>
            <text x="250" y="143" textAnchor="middle" fontSize="10" fill="#374151">Como agir?</text>

            {/* Virtudes */}
            <rect x="10" y="20" width="140" height="60" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="80" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">Ética das Virtudes</text>
            <text x="80" y="58" textAnchor="middle" fontSize="9" fill="#065f46">Aristóteles</text>
            <text x="80" y="70" textAnchor="middle" fontSize="9" fill="#065f46">"Que tipo de pessoa devo ser?"</text>
            <line x1="150" y1="55" x2="196" y2="115" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Deontologia */}
            <rect x="350" y="20" width="140" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="420" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Deontológica</text>
            <text x="420" y="58" textAnchor="middle" fontSize="9" fill="#1e40af">Kant</text>
            <text x="420" y="70" textAnchor="middle" fontSize="9" fill="#1e40af">"Qual é meu dever?"</text>
            <line x1="350" y1="55" x2="302" y2="115" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Utilitarismo */}
            <rect x="10" y="185" width="140" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="80" y="207" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Utilitarismo</text>
            <text x="80" y="223" textAnchor="middle" fontSize="9" fill="#92400e">Bentham, Mill</text>
            <text x="80" y="235" textAnchor="middle" fontSize="9" fill="#92400e">"Quais as consequências?"</text>
            <line x1="150" y1="205" x2="196" y2="155" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Ética do cuidado */}
            <rect x="350" y="185" width="140" height="60" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="420" y="207" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">Ética do Cuidado</text>
            <text x="420" y="223" textAnchor="middle" fontSize="9" fill="#9d174d">Gilligan, Noddings</text>
            <text x="420" y="235" textAnchor="middle" fontSize="9" fill="#9d174d">"Como cuido do outro?"</text>
            <line x1="350" y1="205" x2="302" y2="155" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>
          </svg>
          <figcaption>As quatro principais teorias éticas e suas questões centrais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aristóteles</span>
        <h2>3. Ética das Virtudes: Aristóteles</h2>
        <p>
          Para Aristóteles, a ética não se concentra em regras ou consequências, mas no
          <strong> caráter</strong>: que tipo de pessoa você é? A virtude (<em>areté</em>) é uma
          excelência do caráter adquirida pelo hábito — não se nasce virtuoso, torna-se virtuoso
          pela prática repetida de ações virtuosas.
        </p>
        <p>
          O objetivo da vida humana é a <strong>eudaimonia</strong> (felicidade/florescimento):
          viver bem e agir bem, realizando plenamente as capacidades humanas. Cada virtude é um
          ponto médio (a <strong>doutrina do meio-termo</strong>) entre dois vícios: a coragem
          é o meio entre a covardia e a temeridade; a generosidade entre a avareza e a prodigalidade.
        </p>
        <div className="lesson-highlight">
          <h3>Virtudes cardeais e filosóficas</h3>
          <p>
            Aristóteles distingue <strong>virtudes éticas</strong> (coragem, temperança, justiça,
            generosidade) das <strong>virtudes dianoéticas</strong> (intelectuais: prudência
            <em> — phronesis</em>, sabedoria). A <em>phronesis</em> (prudência/sabedoria prática)
            é a virtude central: a capacidade de deliberar corretamente sobre o que é bom no
            contexto concreto de vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Kant</span>
        <h2>4. Ética Deontológica: Immanuel Kant</h2>
        <p>
          Kant sustenta que a moralidade baseia-se no <strong>dever</strong> (<em>Pflicht</em>),
          não nas consequências ou na busca da felicidade. Uma ação é moralmente boa não porque
          produz bons resultados, mas porque é motivada pelo dever e segue a lei moral racional.
        </p>
        <p>
          O <strong>imperativo categórico</strong> é a lei moral universal de Kant, com três
          formulações principais:
        </p>
        <ul>
          <li>
            <strong>1ª formulação (universalidade):</strong> "Age apenas segundo aquela máxima
            pela qual podes ao mesmo tempo querer que ela se torne uma lei universal." Se você
            mente, pode querer que todos mintam sempre? Não — logo, mentir é imoral.
          </li>
          <li>
            <strong>2ª formulação (humanidade):</strong> "Age de tal forma que uses a humanidade,
            tanto na tua pessoa como na pessoa de qualquer outro, sempre como fim e nunca
            meramente como meio."
          </li>
          <li>
            <strong>3ª formulação (autonomia):</strong> Age como se fosses legislador e súdito de
            um reino dos fins — uma comunidade de seres racionais que se respeitam mutuamente.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Utilitarismo</span>
        <h2>5. Utilitarismo: Bentham e Mill</h2>
        <p>
          Jeremy Bentham (1748–1832) e John Stuart Mill (1806–1873) propõem que a moralidade de
          uma ação deve ser julgada por suas <strong>consequências</strong>: uma ação é boa se
          produz o <strong>máximo de bem-estar (utilidade) para o maior número de pessoas</strong>.
        </p>
        <p>
          Bentham criou o <strong>cálculo hedonístico</strong>: a utilidade pode ser mensurada pela
          quantidade de prazer menos a quantidade de dor produzida. Mill refinou essa visão:
          há prazeres de qualidade superior (intelectuais e morais) que não podem ser comparados
          quantitativamente aos prazeres inferiores (físicos): "é melhor ser Sócrates insatisfeito
          do que um tolo satisfeito."
        </p>
        <div className="lesson-highlight">
          <h3>Crítica ao utilitarismo: o dilema do bonde</h3>
          <p>
            O "dilema do bonde" (Philippa Foot) é o teste clássico do utilitarismo: um bonde
            descontrolado vai matar cinco pessoas na frente. Você pode desviar a alavanca para uma
            via secundária, mas matará uma pessoa. O utilitarismo diz: desvie (1 morte é melhor
            que 5). Mas e se você precisasse empurrar uma pessoa de uma ponte para salvar cinco?
            As intuições morais se revoltam — e isso expõe os limites do cálculo utilitarista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dilemas</span>
        <h2>6. Dilemas Éticos Contemporâneos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dilema</th>
                <th>Posição deontológica (Kant)</th>
                <th>Posição utilitarista</th>
                <th>Posição das virtudes (Aristóteles)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aborto</strong></td>
                <td>Proteger a vida como fim em si mesma (posição mais conservadora); autonomia da mulher como fim (posição liberal)</td>
                <td>Calcular sofrimento × bem-estar para mãe e feto</td>
                <td>O que uma pessoa virtualmente prudente faria no contexto concreto?</td>
              </tr>
              <tr>
                <td><strong>Eutanásia</strong></td>
                <td>Respeito à autonomia do paciente vs. proibição de "usar" o médico como meio</td>
                <td>Reduzir sofrimento maximiza utilidade — pode justificar a eutanásia</td>
                <td>Compaixão e cuidado como virtudes centrais</td>
              </tr>
              <tr>
                <td><strong>Pena de morte</strong></td>
                <td>Kant: retribuição justa pelo crime; mas o ser humano é fim em si — controvérsia</td>
                <td>Só justificável se reduz crimes (efeito dissuasório empírico)</td>
                <td>Que tipo de sociedade queremos ser? Quais virtudes a pena de morte cultiva?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">MacIntyre</span>
        <h2>7. Ética das Virtudes Contemporânea: MacIntyre e o Comunitarismo</h2>
        <p>
          Alasdair MacIntyre (n. 1929), em <em>Depois da Virtude</em> (1981), propõe um retorno
          à ética aristotélica das virtudes como alternativa ao que considera o fracasso do projeto
          moral iluminista. Para MacIntyre, as teorias éticas modernas (kantismo, utilitarismo) são
          fragmentos desconexos de uma tradição que perdeu sua coerência narrativa.
        </p>
        <p>
          A tese central: o ser humano é um <strong>animal narrativo</strong> — só pode compreender
          suas ações e desenvolver virtudes no interior de uma <strong>prática social</strong> e de
          uma <strong>tradição</strong> que fornece os padrões de excelência e os fins que dão sentido
          à vida. A virtude não pode ser definida abstratamente, mas somente em relação aos bens
          internos de práticas concretas (medicina, arte, política, amizade).
        </p>
        <ul>
          <li><strong>Comunitarismo:</strong> corrente filosófica (MacIntyre, Sandel, Taylor, Walzer) que critica o individualismo liberal por abstrair o sujeito de sua comunidade, tradição e identidade concreta. O "eu" liberal é uma ficção: somos constituídos pelas comunidades e práticas em que vivemos.</li>
          <li><strong>Bens internos vs. externos:</strong> bens internos de uma prática (a excelência do médico, a beleza da obra de arte) são intrínsecos à prática; bens externos (dinheiro, fama) são contingentes e podem ser obtidos por outros meios.</li>
          <li><strong>Virtude e narrativa:</strong> a vida humana tem a estrutura de uma narrativa — uma história com começo, meio e fim. As virtudes são as qualidades que nos permitem ser heróis de nossas próprias histórias.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>MacIntyre e o ENEM</h3>
          <p>
            Questões do ENEM sobre ética frequentemente exploram a tensão entre valores universais
            (Kant) e valores culturalmente situados (MacIntyre). Quando um texto apresenta a ideia
            de que a moral depende da comunidade e da tradição — sem cair no relativismo absoluto —
            é provável que o enquadramento seja comunitarista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética do Cuidado</span>
        <h2>8. Ética do Cuidado: Carol Gilligan e Nel Noddings</h2>
        <p>
          A <strong>ética do cuidado</strong> surgiu como crítica feminista às teorias éticas
          dominantes (kantismo e utilitarismo), que priorizam princípios abstratos e universais.
          Carol Gilligan, em <em>Uma Voz Diferente</em> (1982), argumentou que há duas orientações
          morais distintas: a orientação da <strong>justiça</strong> (regras imparciais, direitos
          universais — mais associada ao desenvolvimento moral masculino na teoria de Kohlberg) e
          a orientação do <strong>cuidado</strong> (relações concretas, responsabilidade, empatia —
          mais presente no desenvolvimento moral feminino).
        </p>
        <p>
          Gilligan não afirmava superioridade de nenhuma das duas — mas que a segunda foi
          sistematicamente invisibilizada pela filosofia moral ocidental. Nel Noddings desenvolveu
          uma teoria ética completa baseada no cuidado: a relação ética fundamental não é entre
          sujeitos autônomos e iguais (Kant), mas entre quem cuida e quem é cuidado — uma relação
          assimétrica e particular que caracteriza a vida moral concreta.
        </p>
        <div className="lesson-highlight">
          <h3>Ética do cuidado e políticas públicas</h3>
          <p>
            A ética do cuidado tem implicações políticas concretas: defende que políticas de saúde,
            educação e assistência social devem reconhecer e valorizar o trabalho do cuidado
            (tradicionalmente feminino e desvalorizado). Politicamente, articula-se com o feminismo
            e com críticas ao individualismo liberal que ignora a interdependência humana.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔍</span>
            <h3>Ética vs. Moral</h3>
            <p>Moral = normas praticadas por uma comunidade. Ética = reflexão filosófica sobre a moral.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Virtudes (Aristóteles)</h3>
            <p>Eudaimonia + meio-termo + hábito. Que tipo de pessoa devo ser?</p>
          </div>
          <div className="math-card">
            <span>📜</span>
            <h3>Dever (Kant)</h3>
            <p>Imperativo categórico: aja só por máximas universalizáveis. Seres racionais são fins em si.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Utilitarismo</h3>
            <p>Bentham/Mill: máximo bem para o maior número. Julgamento pelas consequências.</p>
          </div>
          <div className="math-card">
            <span>💗</span>
            <h3>Ética do Cuidado</h3>
            <p>Gilligan/Noddings: relações concretas de cuidado e responsabilidade com o outro.</p>
          </div>
          <div className="math-card">
            <span>❓</span>
            <h3>Dilemas Éticos</h3>
            <p>Aborto, eutanásia, pena de morte — diferentes teorias chegam a respostas diferentes.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Ética das Virtudes"
          statement={<p>Segundo Aristóteles, a virtude moral é adquirida:</p>}
          options={[
            { letter: "a", text: "Por revelação divina, sendo um dom concedido a poucos indivíduos privilegiados." },
            { letter: "b", text: "Pelo hábito: repetindo ações virtuosas, o indivíduo molda seu caráter ao longo do tempo.", correct: true },
            { letter: "c", text: "Pelo estudo e pela contemplação teórica das formas perfeitas de justiça e bondade." },
            { letter: "d", text: "Pelo cálculo racional das consequências de nossas ações para o bem-estar coletivo." },
          ]}
          resolution={<p>Para Aristóteles, ninguém nasce virtuoso: a virtude é adquirida pela <strong>prática habitual</strong>. Agindo corajosamente, tornamo-nos corajosos; agindo honestamente, tornamo-nos honestos. A virtude é um "estado estável do caráter" (<em>hexis</em>) adquirido pelo exercício repetido. Por isso a educação moral na infância é fundamental: o hábito forma o caráter, e o caráter é a base da vida ética.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Imperativo Categórico de Kant"
          statement={<p>Pelo imperativo categórico kantiano, mentir seria sempre imoral porque:</p>}
          options={[
            { letter: "a", text: "Mentir geralmente produz mais dano do que benefício para o bem-estar coletivo." },
            { letter: "b", text: "A máxima 'minta sempre que conveniente' não pode ser universalizada sem contradição.", correct: true },
            { letter: "c", text: "Mentir vai contra a natureza humana, que é essencialmente honesta e transparente." },
            { letter: "d", text: "A mentira é condenada pelas principais religiões e tradições culturais da humanidade." },
          ]}
          resolution={<p>Pela primeira formulação do imperativo categórico (universalidade), uma ação é moral se a máxima que a orienta pode ser universalizada sem contradição. "Mente quando for conveniente" — se fosse lei universal, a própria prática de mentir se tornaria impossível, pois ninguém acreditaria em ninguém. A máxima se auto-aniquila ao ser universalizada. Logo, é imoral. Kant aplicou esse princípio radicalmente: nem para salvar uma vida a mentira seria justificada.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Utilitarismo e seus Limites"
          statement={<p>Uma crítica filosófica comum ao utilitarismo é que ele pode justificar ações intuitivamente erradas, como:</p>}
          options={[
            { letter: "a", text: "Recusar-se a mentir mesmo quando mentir produziria melhores consequências para todos." },
            { letter: "b", text: "Tratar cada ser humano como um fim em si mesmo, independentemente das consequências." },
            { letter: "c", text: "Sacrificar os direitos de um indivíduo inocente se isso produzir benefícios para a maioria.", correct: true },
            { letter: "d", text: "Cultivar virtudes morais mesmo quando elas não produzem os melhores resultados práticos." },
          ]}
          resolution={<p>A principal objeção ao utilitarismo é que, ao calcular apenas o saldo de bem-estar, pode justificar violar direitos individuais (torturar um suspeito inocente para salvar vidas, punir um inocente para satisfazer a maioria, etc.). Para Kant e para os defensores dos direitos individuais, isso é inaceitável: seres humanos têm dignidade e direitos que não podem ser sacrificados em nome de cálculos de utilidade. Isso motivou a reformulação do utilitarismo em versões mais sofisticadas (utilitarismo de regras, preferências, etc.).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Ética e Dilemas Contemporâneos"
          statement={
            <p>
              Um médico cuida de um paciente terminal que sofre intensamente e solicita, com plena lucidez, que a vida seja encerrada (eutanásia ativa). A família do paciente concorda. A lei do país proíbe a eutanásia ativa.<br/><br/>
              Do ponto de vista da ética kantiana, qual consideração seria central neste dilema?
            </p>
          }
          options={[
            { letter: "a", text: "Calcular se a morte do paciente reduzirá o sofrimento total de todos os envolvidos." },
            { letter: "b", text: "Verificar se a maioria da sociedade aprovaria a prática da eutanásia ativa em casos similares." },
            { letter: "c", text: "Respeitar a autonomia racional do paciente como ser que é fim em si mesmo, ponderando o dever de preservar a vida.", correct: true },
            { letter: "d", text: "Seguir as virtudes tradicionais do bom médico, que incluem sempre prolongar a vida do paciente." },
          ]}
          resolution={<p>A ética kantiana coloca em tensão dois princípios: o respeito à <strong>autonomia</strong> do paciente (segunda formulação do imperativo: trate cada pessoa como fim em si mesma, o que inclui respeitar suas decisões racionais sobre si mesma) e o possível dever de preservar a vida. O debate deontológico sobre a eutanásia gira em torno dessas tensões — o que é central para Kant é que a decisão seja guiada pelo dever racional, não por emoções ou cálculos de conveniência.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Relativismo Moral"
          statement={
            <p>
              "Quando em Roma, faça como os romanos." Este ditado popular expressa uma forma de relativismo moral: a ideia de que o certo e o errado variam conforme a cultura ou o contexto. A ética filosófica geralmente se opõe ao relativismo porque:
            </p>
          }
          options={[
            { letter: "a", text: "Toda cultura possui os mesmos valores morais, o que torna o relativismo empiricamente falso." },
            { letter: "b", text: "O relativismo impede qualquer crítica a práticas culturais injustas, como o racismo e a tortura, por considerá-las 'válidas em seu contexto'.", correct: true },
            { letter: "c", text: "As tradições culturais são sempre superiores aos princípios filosóficos abstratos." },
            { letter: "d", text: "O relativismo moral conduz necessariamente ao ateísmo e à rejeição dos valores religiosos." },
          ]}
          resolution={<p>O <strong>relativismo moral</strong> afirma que não há valores morais universalmente válidos — cada cultura tem os seus, e nenhum é objetivamente melhor. O problema é que isso inviabiliza a crítica a práticas culturalmente legitimadas mas moralmente repugnantes: genocídio, escravidão, tortura, subjugação de mulheres. Teorias como a de Kant (dignidade universal), o utilitarismo (bem-estar humano universal) e a ética das capacidades de Nussbaum buscam fundamentos que permitam essa crítica transcultural.</p>}
        />
      </section>
    </article>
  );
}
