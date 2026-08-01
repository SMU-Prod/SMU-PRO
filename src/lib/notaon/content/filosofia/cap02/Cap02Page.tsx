"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 2</span>
          <h1>O que é Filosofia? Origem, conceitos e importância do pensamento filosófico</h1>
          <p>
            A Filosofia nasceu na Grécia Antiga como um modo radicalmente novo de questionar o mundo —
            substituindo mitos por argumentos racionais. Neste capítulo, você conhecerá a etimologia
            da palavra, as principais divisões da disciplina e por que o pensamento filosófico é
            indispensável para a formação do cidadão crítico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Etimologia</span>
        <h2>1. O que significa "Filosofia"?</h2>
        <p>
          A palavra <strong>Filosofia</strong> vem do grego antigo: <em>philos</em> (φίλος) significa
          "amor" ou "amigo", e <em>sophia</em> (σοφία) significa "sabedoria". Portanto, Filosofia
          é literalmente o <strong>"amor à sabedoria"</strong>.
        </p>
        <p>
          A tradição atribui ao filósofo <strong>Pitágoras</strong> (séc. VI–V a.C.) a criação do
          termo. Segundo o relato de Diógenes Laércio, quando perguntado se era sábio, Pitágoras
          teria respondido: "Não sou sábio (sophos), apenas um amante da sabedoria (philosophos)."
          Essa humildade intelectual marca o espírito filosófico desde o início.
        </p>
        <div className="lesson-highlight">
          <h3>Sophia vs. Episteme</h3>
          <p>
            Os gregos distinguiam entre <em>sophia</em> (sabedoria prática e especulativa) e
            <em> episteme</em> (conhecimento científico rigoroso). A Filosofia aspira a ambas:
            compreender o mundo <em>e</em> saber como viver bem.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem Histórica</span>
        <h2>2. O nascimento da Filosofia na Grécia Antiga</h2>
        <p>
          A Filosofia surge no século <strong>VI a.C.</strong> na região da Jônia (atual costa da Turquia),
          especialmente na cidade de <strong>Mileto</strong>. Esse contexto histórico é fundamental:
        </p>
        <ul>
          <li><strong>Contato cultural:</strong> As cidades gregas comerciavam com Egito, Babilônia e Pérsia, absolvendo conhecimentos matemáticos e astronômicos.</li>
          <li><strong>Democracia incipiente:</strong> O debate público nas ágoras gregas criou espaço para o questionamento argumentativo.</li>
          <li><strong>Crise do mito:</strong> As explicações míticas sobre a natureza começavam a não satisfazer as exigências racionais.</li>
          <li><strong>Escrita alfabética:</strong> A difusão da escrita permitiu registrar e criticar ideias de forma sistemática.</li>
        </ul>
        <p>
          O historiador da filosofia <strong>Werner Jaeger</strong> chamou esse processo de
          <em> Paideia</em> — a formação do ser humano pela cultura e pelo pensamento racional.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Espanto Filosófico</span>
        <h2>3. Thaumazein — o espanto como origem do filosofar</h2>
        <p>
          Para Aristóteles, a Filosofia nasce do <strong>espanto</strong> (<em>thaumazein</em> — θαυμάζειν):
          a capacidade humana de se maravilhar diante do mundo e de perguntar "por quê?". Ao contrário
          dos animais, que reagem instintivamente ao ambiente, os seres humanos podem distanciar-se
          da realidade imediata e questioná-la.
        </p>
        <p>
          Platão, no diálogo <em>Teeteto</em>, também reconhece o espanto como origem da filosofia.
          Essa ideia revela que a filosofia não começa com respostas prontas, mas com <strong>perguntas
          abertas</strong> diante do desconhecido.
        </p>
        <div className="lesson-highlight">
          <h3>A pergunta filosófica</h3>
          <p>
            Uma pergunta filosófica não tem resposta simples ou empírica. "Qual a temperatura da água?"
            é uma pergunta científica. "O que é a justiça?" ou "Por que existe algo em vez de nada?"
            são perguntas filosóficas — exigem reflexão, argumentação e humildade intelectual.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definições Clássicas</span>
        <h2>4. Como os grandes filósofos definiram a Filosofia</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Período</th>
                <th>Definição de Filosofia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sócrates</strong></td>
                <td>Séc. V a.C.</td>
                <td>Autoconhecimento: "Conhece-te a ti mesmo." A filosofia como prática de exame da própria vida.</td>
              </tr>
              <tr>
                <td><strong>Platão</strong></td>
                <td>Séc. IV a.C.</td>
                <td>Busca da verdade e do bem — ascensão do mundo sensível ao mundo das ideias eternas.</td>
              </tr>
              <tr>
                <td><strong>Aristóteles</strong></td>
                <td>Séc. IV a.C.</td>
                <td>Ciência das causas primeiras e dos princípios — a "filosofia primeira" ou metafísica.</td>
              </tr>
              <tr>
                <td><strong>Kant</strong></td>
                <td>Séc. XVIII</td>
                <td>Crítica da razão: investigar os limites e possibilidades do conhecimento humano.</td>
              </tr>
              <tr>
                <td><strong>Hegel</strong></td>
                <td>Séc. XIX</td>
                <td>Apreensão do Espírito Absoluto pelo pensamento — a realidade como processo dialético.</td>
              </tr>
              <tr>
                <td><strong>Wittgenstein</strong></td>
                <td>Séc. XX</td>
                <td>Atividade de clarificação da linguagem — dissolução de pseudoproblemas filosóficos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Árvore da Filosofia</span>
        <h2>5. As grandes áreas da Filosofia</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 340" width="500" height="340" aria-label="Árvore das áreas da Filosofia">
            {/* Tronco */}
            <rect x="232" y="260" width="36" height="60" rx="4" fill="#78350f"/>
            {/* Copa */}
            <ellipse cx="250" cy="200" rx="120" ry="80" fill="#15803d" opacity="0.2"/>
            {/* Ramos e nós */}
            {/* Centro */}
            <ellipse cx="250" cy="200" rx="45" ry="24" fill="#166534"/>
            <text x="250" y="196" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">FILOSOFIA</text>
            <text x="250" y="212" textAnchor="middle" fontSize="10" fill="#bbf7d0">amor à sabedoria</text>

            {/* Metafísica */}
            <ellipse cx="110" cy="130" rx="52" ry="24" fill="#1d4ed8"/>
            <text x="110" y="126" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Metafísica</text>
            <text x="110" y="141" textAnchor="middle" fontSize="9" fill="#bfdbfe">Ser, existência</text>
            <line x1="160" y1="150" x2="205" y2="190" stroke="#6b7280" strokeWidth="1.5"/>

            {/* Epistemologia */}
            <ellipse cx="250" cy="90" rx="58" ry="24" fill="#7c3aed"/>
            <text x="250" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Epistemologia</text>
            <text x="250" y="101" textAnchor="middle" fontSize="9" fill="#ddd6fe">Conhecimento, verdade</text>
            <line x1="250" y1="114" x2="250" y2="176" stroke="#6b7280" strokeWidth="1.5"/>

            {/* Ética */}
            <ellipse cx="390" cy="130" rx="52" ry="24" fill="#b91c1c"/>
            <text x="390" y="126" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Ética</text>
            <text x="390" y="141" textAnchor="middle" fontSize="9" fill="#fecaca">Moral, bem, dever</text>
            <line x1="338" y1="150" x2="295" y2="190" stroke="#6b7280" strokeWidth="1.5"/>

            {/* Estética */}
            <ellipse cx="110" cy="270" rx="52" ry="24" fill="#d97706"/>
            <text x="110" y="266" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Estética</text>
            <text x="110" y="281" textAnchor="middle" fontSize="9" fill="#fef3c7">Beleza, arte</text>
            <line x1="162" y1="260" x2="205" y2="215" stroke="#6b7280" strokeWidth="1.5"/>

            {/* Lógica */}
            <ellipse cx="250" cy="310" rx="52" ry="24" fill="#065f46"/>
            <text x="250" y="306" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Lógica</text>
            <text x="250" y="321" textAnchor="middle" fontSize="9" fill="#a7f3d0">Argumento, razão</text>
            <line x1="250" y1="286" x2="250" y2="224" stroke="#6b7280" strokeWidth="1.5"/>

            {/* Filosofia Política */}
            <ellipse cx="390" cy="270" rx="58" ry="24" fill="#0369a1"/>
            <text x="390" y="266" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Fil. Política</text>
            <text x="390" y="281" textAnchor="middle" fontSize="9" fill="#bae6fd">Estado, poder, justiça</text>
            <line x1="338" y1="260" x2="295" y2="215" stroke="#6b7280" strokeWidth="1.5"/>
          </svg>
          <figcaption>As seis grandes áreas da Filosofia e seus objetos de estudo.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisões da Filosofia</span>
        <h2>6. As principais áreas filosóficas explicadas</h2>
        <ul>
          <li>
            <strong>Metafísica (ou Ontologia):</strong> estuda o ser enquanto ser. Perguntas: "O que existe?",
            "O que é a realidade?", "Há algo imaterial?". Principais filósofos: Platão, Aristóteles, Leibniz.
          </li>
          <li>
            <strong>Epistemologia (Teoria do Conhecimento):</strong> investiga a natureza, origem e limites do
            conhecimento humano. Perguntas: "Como conhecemos?", "O que é verdade?". Filósofos: Descartes, Locke, Kant.
          </li>
          <li>
            <strong>Ética (Filosofia Moral):</strong> estuda os princípios que guiam a ação humana. Perguntas:
            "O que é o bem?", "Como devemos agir?". Filósofos: Aristóteles, Kant, Mill.
          </li>
          <li>
            <strong>Estética (Filosofia da Arte):</strong> reflexão sobre a beleza, o sublime e a experiência
            artística. Perguntas: "O que é arte?", "O que é o belo?". Filósofos: Platão, Kant, Hegel.
          </li>
          <li>
            <strong>Lógica:</strong> estudo das regras do pensamento correto e da argumentação válida. Base de
            toda argumentação filosófica. Principal fundador: Aristóteles.
          </li>
          <li>
            <strong>Filosofia Política:</strong> reflete sobre o poder, o Estado, a justiça e a organização
            da sociedade. Perguntas: "O que legitima o poder?", "O que é justo?". Filósofos: Platão, Hobbes, Locke, Rousseau, Marx.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filosofia e Ciência</span>
        <h2>7. Filosofia e Ciência: diferenças e complementaridades</h2>
        <p>
          Durante séculos, Filosofia e Ciência eram inseparáveis — o que chamamos de ciência natural
          era chamado de "filosofia natural". Isaac Newton intitulou sua obra maior de
          <em> Philosophiae Naturalis Principia Mathematica</em>.
        </p>
        <p>
          A separação progressiva ocorreu a partir do século XVII, com a revolução científica. Hoje,
          a distinção é importante:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Filosofia</th>
                <th>Ciência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Método</td>
                <td>Reflexão, argumentação, análise conceitual</td>
                <td>Observação, experimentação, verificação empírica</td>
              </tr>
              <tr>
                <td>Objeto</td>
                <td>Questões sobre sentido, valor, fundamentos</td>
                <td>Fenômenos naturais e sociais observáveis</td>
              </tr>
              <tr>
                <td>Respostas</td>
                <td>Múltiplas perspectivas, debate contínuo</td>
                <td>Consenso provisório baseado em evidências</td>
              </tr>
              <tr>
                <td>Relação</td>
                <td>Questiona os fundamentos da ciência</td>
                <td>Fornece dados que a filosofia interpreta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Importância Atual</span>
        <h2>8. Por que a Filosofia importa hoje?</h2>
        <p>
          Em um mundo marcado pela sobrecarga de informações, pelas redes sociais e pela polarização
          política, a Filosofia oferece ferramentas essenciais:
        </p>
        <ul>
          <li><strong>Pensamento crítico:</strong> questionar informações, identificar falácias e manipulações.</li>
          <li><strong>Autonomia moral:</strong> tomar decisões éticas baseadas em princípios, não em pressão social.</li>
          <li><strong>Diálogo democrático:</strong> argumentar com respeito, ouvir o outro e buscar consensos.</li>
          <li><strong>Compreensão da ciência:</strong> entender seus limites, métodos e implicações sociais.</li>
          <li><strong>Reflexão sobre tecnologia:</strong> pensar as consequências éticas da IA, das redes e da biotecnologia.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>A "vida não examinada"</h3>
          <p>
            Sócrates afirmou: <em>"Uma vida não examinada não vale a pena ser vivida."</em>
            Essa frase resume o espírito filosófico: a reflexão sobre a própria existência é uma
            necessidade humana fundamental, não um luxo intelectual.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📚</span>
            <h3>Etimologia</h3>
            <p>Philos + Sophia = amor à sabedoria. Termo atribuído a Pitágoras, séc. VI a.C.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Origem</h3>
            <p>Nasce em Mileto, Grécia, séc. VI a.C., com a ruptura com o pensamento mítico.</p>
          </div>
          <div className="math-card">
            <span>🌟</span>
            <h3>Thaumazein</h3>
            <p>O espanto diante do mundo é a origem do filosofar — para Platão e Aristóteles.</p>
          </div>
          <div className="math-card">
            <span>🌳</span>
            <h3>Áreas</h3>
            <p>Metafísica, Epistemologia, Ética, Estética, Lógica e Filosofia Política.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Fil. e Ciência</h3>
            <p>Complementares: a ciência fornece dados, a filosofia questiona fundamentos e valores.</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Relevância</h3>
            <p>Pensamento crítico, autonomia moral e diálogo democrático — essenciais na era digital.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Etimologia"
          statement={<p>A palavra "Filosofia" tem origem no grego e significa:</p>}
          options={[
            { letter: "a", text: "Ciência da natureza" },
            { letter: "b", text: "Amor à sabedoria", correct: true },
            { letter: "c", text: "Conhecimento do ser" },
            { letter: "d", text: "Estudo da moral" },
          ]}
          resolution={<p><strong>Filosofia</strong> vem de <em>philos</em> (amor, amizade) + <em>sophia</em> (sabedoria). A tradição atribui a Pitágoras a criação do termo: ao se recusar o título de "sábio", ele se autodeclara apenas um "amante da sabedoria". Esse gesto de humildade intelectual é constitutivo do espírito filosófico.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Origem da Filosofia"
          statement={<p>A Filosofia surgiu na Grécia Antiga no século VI a.C. como uma ruptura com o pensamento mítico. Dentre os fatores que favoreceram esse surgimento, NÃO está:</p>}
          options={[
            { letter: "a", text: "O contato cultural das cidades gregas com Egito e Babilônia." },
            { letter: "b", text: "O desenvolvimento da escrita alfabética que permitia registrar e criticar ideias." },
            { letter: "c", text: "A proibição das práticas religiosas nas cidades-estado gregas.", correct: true },
            { letter: "d", text: "O debate público nas ágoras, que favorecia a argumentação racional." },
          ]}
          resolution={<p>A Filosofia grega não surgiu de uma proibição das práticas religiosas — ao contrário, conviveu com elas por séculos. Os fatores históricos reais foram: o contato com culturas do Mediterrâneo Oriental (Egito, Pérsia, Babilônia), a difusão da escrita alfabética, o florescimento do comércio e das cidades, e o espaço democrático da ágora grega, onde o debate público era valorizado.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Áreas da Filosofia"
          statement={<p>Um estudante afirma: "A questão 'Como posso saber que este objeto existe independentemente da minha percepção?' é um exemplo de problema metafísico." Um professor de Filosofia corrige afirmando que se trata de um problema epistemológico. Por quê?</p>}
          options={[
            { letter: "a", text: "Porque metafísica estuda apenas os seres divinos e a questão envolve objetos físicos." },
            { letter: "b", text: "Porque a questão envolve os limites e a natureza do conhecimento humano, não apenas o que existe.", correct: true },
            { letter: "c", text: "Porque epistemologia estuda a percepção sensorial e a questão envolve os sentidos." },
            { letter: "d", text: "Porque metafísica é uma disciplina obsoleta, substituída pela epistemologia moderna." },
          ]}
          resolution={<p>A distinção é sutil mas importante. A <strong>Metafísica</strong> pergunta "o que existe?" — trata da natureza do ser. A <strong>Epistemologia</strong> pergunta "como podemos conhecer o que existe?" — trata da natureza, origem e limites do conhecimento. A questão "como posso saber que este objeto existe independentemente da minha percepção?" foca nos <em>limites do conhecimento humano</em>, não na existência em si — logo, é epistemológica. Esse debate remonta a Descartes, Berkeley e Kant.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Filosofia e Pensamento Crítico"
          statement={<p>Em uma rede social, um usuário posta: "Se você não concorda com minha opinião, é porque você é burro ou mal-intencionado." Um filósofo identificaria nessa afirmação uma falácia e a incapacidade de exercer o diálogo filosófico genuíno. Qual característica fundamental do pensamento filosófico está sendo violada nessa postura?</p>}
          options={[
            { letter: "a", text: "A busca pela beleza estética na argumentação." },
            { letter: "b", text: "A disposição para examinar criticamente as próprias ideias e considerar argumentos contrários.", correct: true },
            { letter: "c", text: "A memorização de textos clássicos da tradição filosófica ocidental." },
            { letter: "d", text: "A aceitação incondicional das verdades estabelecidas pela autoridade filosófica." },
          ]}
          resolution={<p>A Filosofia, desde Sócrates, exige a disposição para o <strong>exame racional das próprias crenças</strong> e para ouvir argumentos contrários. A postura do usuário — que ataca quem discorda em vez de responder aos argumentos — comete uma <strong>falácia ad hominem</strong> e viola o princípio socrático do diálogo aberto. O filósofo genuíno não busca "vencer" debates, mas chegar mais perto da verdade através da troca racional de argumentos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) O Espanto Filosófico"
          statement={<p>"É pelo thaumazein que os homens, tanto hoje quanto no passado, começaram a filosofar: surpreenderam-se primeiro com as coisas óbvias e, depois, avançando pouco a pouco, levantaram problemas sobre as maiores questões, como a geração do universo." (Aristóteles, Metafísica). Com base no texto, o thaumazein pode ser compreendido como:</p>}
          options={[
            { letter: "a", text: "A angústia existencial diante da morte, que impulsiona a busca por respostas religiosas." },
            { letter: "b", text: "O espanto e a admiração diante do mundo, que motivam a investigação racional da realidade.", correct: true },
            { letter: "c", text: "O método experimental de observação e verificação dos fenômenos naturais." },
            { letter: "d", text: "A tradição oral dos mitos que transmitem a sabedoria dos ancestrais." },
          ]}
          resolution={<p>Para Aristóteles, o <strong>thaumazein</strong> (θαυμάζειν) — o espanto ou admiração diante da realidade — é a origem do filosofar. Não é angústia, nem método experimental, nem tradição oral. É a capacidade humana de se maravilhar com o ordinário e o extraordinário, e de transformar esse espanto em <em>pergunta racional</em>. O texto de Aristóteles mostra uma progressão: do espanto com coisas simples ao questionamento das "maiores questões" — como a origem do universo — que movem a filosofia ao longo dos séculos.</p>}
        />
      </section>
    </article>
  );
}
