"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 7</span>
          <h1>Sócrates: ética, diálogo e método socrático</h1>
          <p>
            Sócrates (470–399 a.C.) é uma das figuras mais enigmáticas e influentes da história
            do pensamento. Não deixou nada escrito, mas transformou a filosofia ao direcionar o
            olhar filosófico do cosmos para o ser humano — sua ética, sua alma e seu autoconhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. Atenas no século V a.C.: os sofistas e o debate público</h2>
        <p>
          Sócrates viveu na Atenas do século V a.C. — a mais democrática e culturalmente rica das
          cidades gregas. Era a época de Péricles, das grandes obras da Acrópole e do florescimento
          das artes e da política democrática.
        </p>
        <p>
          Nesse contexto, os <strong>sofistas</strong> eram professores itinerantes que ensinavam
          retórica, argumentação e eloquência — as habilidades necessárias para ter sucesso na
          vida pública ateniense. O mais famoso era <strong>Protágoras</strong>, que afirmou:
          "O homem é a medida de todas as coisas" — relativizando a verdade e a moral.
        </p>
        <p>
          Sócrates discordava profundamente dos sofistas: para ele, a verdade existe objetivamente
          e pode ser descoberta pela razão; a virtude não é uma técnica que se aprende por dinheiro,
          mas um modo de vida que se conquista pelo autoconhecimento.
        </p>
        <div className="lesson-highlight">
          <h3>Sócrates vs. Sofistas</h3>
          <p>
            <strong>Sofistas:</strong> cobravam pelo ensino, relativizavam a verdade, valorizavam
            a persuasão ("fazer o argumento mais fraco parecer mais forte").<br/>
            <strong>Sócrates:</strong> não cobrava nada, buscava a verdade objetiva, valorizava o
            diálogo honesto e o autoconhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Vida de Sócrates</span>
        <h2>2. Quem foi Sócrates?</h2>
        <p>
          <strong>Sócrates</strong> (c. 470–399 a.C.) nasceu em Atenas e passou toda a vida ali.
          Filho de Sofronisco (escultor) e Fenarete (parteira), escolheu uma vida de pobreza e
          discussão filosófica nas ruas e praças de Atenas.
        </p>
        <p>
          Sua aparência era descrita como pouco atraente — atribuída com humor a ele mesmo,
          comparando-se a um peixe-torpedo que entorpecia seus interlocutores com perguntas.
          Mas sua inteligência, coragem e virtude eram admirados por todos.
        </p>
        <p>
          Sócrates não escreveu nada. Conhecemos seu pensamento pelos diálogos de seu discípulo
          <strong> Platão</strong>, pelos escritos de <strong>Xenofonte</strong> e pelas comédias
          de Aristófanes (que o satirizou). Essa dependência de fontes secundárias cria o chamado
          "problema socrático": o que é histórico e o que é criação platônica?
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método Socrático</span>
        <h2>3. Ironia e Maiêutica: o método socrático</h2>
        <p>
          O método socrático tem duas fases:
        </p>
        <p>
          <strong>Fase 1 — Ironia socrática:</strong> Sócrates finge ignorância e faz perguntas
          simples ao interlocutor. Progressivamente, as perguntas revelam que o interlocutor não
          sabe realmente o que acredita saber. O objetivo é a destruição da falsa certeza —
          levar o outro à <em>aporia</em> (impasse, sem saída).
        </p>
        <p>
          <strong>Fase 2 — Maiêutica:</strong> do grego <em>maieutiké</em> (arte de partejar),
          referência à profissão de sua mãe. Assim como a parteira ajuda o bebê a vir ao mundo,
          Sócrates ajuda o interlocutor a "dar à luz" o conhecimento que já carrega em si mesmo.
          A verdade não é transferida de fora para dentro — ela é despertada de dentro para fora.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama da maiêutica socrática">
            {/* Fase 1 */}
            <rect x="20" y="30" width="190" height="80" rx="10" fill="#7c3aed" opacity="0.9"/>
            <text x="115" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">FASE 1: IRONIA</text>
            <text x="115" y="75" textAnchor="middle" fontSize="11" fill="#ddd6fe">Sócrates finge ignorância</text>
            <text x="115" y="92" textAnchor="middle" fontSize="11" fill="#ddd6fe">Perguntas revelam aporia</text>
            <text x="115" y="107" textAnchor="middle" fontSize="10" fill="#c4b5fd">"Só sei que nada sei"</text>

            {/* Seta */}
            <line x1="210" y1="70" x2="260" y2="70" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrM)"/>

            {/* Fase 2 */}
            <rect x="260" y="30" width="200" height="80" rx="10" fill="#059669" opacity="0.9"/>
            <text x="360" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">FASE 2: MAIÊUTICA</text>
            <text x="360" y="75" textAnchor="middle" fontSize="11" fill="#a7f3d0">Perguntas construtivas</text>
            <text x="360" y="92" textAnchor="middle" fontSize="11" fill="#a7f3d0">Conhecimento vem de dentro</text>
            <text x="360" y="107" textAnchor="middle" fontSize="10" fill="#6ee7b7">Arte de partejar ideias</text>

            {/* Resultado */}
            <rect x="150" y="150" width="180" height="50" rx="10" fill="#1d4ed8"/>
            <text x="240" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">RESULTADO</text>
            <text x="240" y="190" textAnchor="middle" fontSize="11" fill="#bfdbfe">Conhecimento genuíno + virtude</text>

            <line x1="360" y1="110" x2="300" y2="150" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrM)"/>
            <line x1="115" y1="110" x2="190" y2="150" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrM)"/>

            <defs>
              <marker id="arrM" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280"/>
              </marker>
            </defs>
          </svg>
          <figcaption>O método socrático: ironia (desconstrução da falsa certeza) seguida de maiêutica (construção do conhecimento genuíno).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética Socrática</span>
        <h2>4. A ética de Sócrates: virtude como conhecimento</h2>
        <p>
          A filosofia moral de Sócrates é de uma simplicidade radical: <strong>a virtude é
          conhecimento</strong>. Quem verdadeiramente conhece o bem, age bem — ninguém age
          mal voluntariamente. O mal moral é sempre fruto de ignorância.
        </p>
        <p>
          Principais elementos da ética socrática:
        </p>
        <ul>
          <li><strong>Areté (virtude):</strong> excelência moral, que para Sócrates é una — quem tem uma virtude tem todas.</li>
          <li><strong>Eudaimonia (felicidade):</strong> o bem-estar da alma virtuosa, não os prazeres corporais.</li>
          <li><strong>Autoconhecimento:</strong> "Conhece-te a ti mesmo" (gnōthi seautón) — inscrito no templo de Delfos e adotado por Sócrates como princípio central.</li>
          <li><strong>Cuidado da alma:</strong> a alma é o que há de mais valioso no ser humano — não o corpo, a riqueza ou a fama.</li>
        </ul>
        <p>
          A consequência radical: <em>nenhum mal pode ferir um homem bom</em>. Nem a pobreza,
          nem a prisão, nem a morte — pois o verdadeiro bem é a virtude da alma, que ninguém
          pode tirar de nós.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Julgamento</span>
        <h2>5. O julgamento e a morte de Sócrates</h2>
        <p>
          Em 399 a.C., Sócrates foi julgado em Atenas acusado de:
        </p>
        <ul>
          <li>Impiedade — não honrar os deuses da cidade e introduzir novos deuses.</li>
          <li>Corrupção da juventude — desviar os jovens atenienses do caminho correto.</li>
        </ul>
        <p>
          O julgamento foi realizado perante um júri de 501 cidadãos. Sócrates se defendeu com
          ironia e altivez — em vez de pedir clemência, afirmou que era um benefício para Atenas.
          Resultado: 280 votos a favor da condenação, 221 a favor da absolvição.
        </p>
        <p>
          Sócrates foi condenado a beber cicuta (veneno). Seus amigos ofereceram ajuda para
          a fuga — ele recusou, pois fugiria significaria desobedecer as leis de Atenas, o que
          contrariava seus princípios filosóficos. Morreu cercado por discípulos, discutindo
          filosofia até o fim.
        </p>
        <div className="lesson-highlight">
          <h3>A Apologia de Sócrates</h3>
          <p>
            Platão registrou o discurso de Sócrates em sua defesa no diálogo <em>Apologia</em>.
            Sócrates afirma: "Uma vida não examinada não vale a pena ser vivida." Prefere a
            morte à renúncia à filosofia — demonstrando coerência absoluta entre vida e pensamento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>6. O legado de Sócrates na Filosofia</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Contribuição socrática</th>
                <th>Influência posterior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ética</td>
                <td>Virtude como conhecimento; cuidado da alma</td>
                <td>Platão, Aristóteles, estoicismo, ética moderna</td>
              </tr>
              <tr>
                <td>Método</td>
                <td>Diálogo, maiêutica, ironia</td>
                <td>Dialética platônica, pedagogia crítica</td>
              </tr>
              <tr>
                <td>Epistemologia</td>
                <td>Distinção entre opinião e conhecimento genuíno</td>
                <td>Platão (doxa vs. episteme)</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>Obediência às leis; responsabilidade cívica</td>
                <td>Teoria do contrato social; desobediência civil</td>
              </tr>
              <tr>
                <td>Educação</td>
                <td>Aprendizagem como autoconhecimento</td>
                <td>Pedagogia construtivista; Paulo Freire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Daimon</span>
        <h2>7. O daimon socrático: a voz interior e a consciência moral</h2>
        <p>
          Um dos aspectos mais enigmáticos e fascinantes da figura de Sócrates é o seu <strong>daimon</strong>
          (δαίμων) — uma "voz interior" ou "sinal divino" que ele afirmava receber desde a infância.
          O daimon nunca lhe dizia o que fazer, apenas o que <em>não</em> fazer: agia como um freio
          moral, impedindo-o de certas ações.
        </p>
        <p>
          Sócrates descreveu o daimon em vários diálogos platônicos: no <em>Fedro</em>, no
          <em> Teeteto</em> e na <em>Apologia</em>. Não se tratava de uma alucinação ou de uma
          entidade sobrenatural no sentido religioso convencional — era uma forma de intuição moral
          imediata que guiava sua conduta.
        </p>
        <ul>
          <li><strong>Natureza do daimon:</strong> Sócrates nunca afirmou ser um deus ou ter poderes especiais. O daimon era pessoal, interior, e sua função era exclusivamente negativa — impedir, não comandar.</li>
          <li><strong>Relação com a ética:</strong> O daimon é coerente com a ética socrática: se virtude é conhecimento, o daimon seria uma forma de intuição moral que complementa o conhecimento racional.</li>
          <li><strong>Na acusação:</strong> A crença no daimon contribuiu para a acusação de "introduzir novos deuses" — pois Sócrates falava em uma divindade interior não reconhecida pela religião oficial ateniense.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>O daimon e a consciência moderna</h3>
          <p>
            Muitos filósofos interpretaram o daimon socrático como um precursor da ideia de
            <em> consciência moral</em> — a voz interior que nos orienta eticamente. Kant
            desenvolveria essa intuição de forma secular com o imperativo categórico; Freud
            a abordaria pela noção de superego. O daimon de Sócrates antecipa o interesse
            filosófico pela vida interior como instância moral autônoma.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM: Sócrates</span>
        <h2>8. Sócrates no ENEM: padrões de questão e armadilhas frequentes</h2>
        <p>
          Sócrates é um dos filósofos mais cobrados no ENEM. Conhecer o padrão das questões e as
          armadilhas comuns é tão importante quanto dominar o conteúdo. Veja o que o ENEM costuma
          explorar:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema cobrado</th>
                <th>Como o ENEM aborda</th>
                <th>Armadilha comum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Maiêutica</strong></td>
                <td>Apresenta situação pedagógica ou trecho do diálogo socrático</td>
                <td>Confundir com transmissão de conhecimento (ao contrário — é extração de dentro)</td>
              </tr>
              <tr>
                <td><strong>Ironia socrática</strong></td>
                <td>Trecho em que Sócrates finge não saber</td>
                <td>Interpretar a ironia literalmente — como se Sócrates realmente soubesse nada</td>
              </tr>
              <tr>
                <td><strong>Virtude = conhecimento</strong></td>
                <td>Questão sobre a relação entre saber e agir moralmente</td>
                <td>Confundir com Aristóteles — para Sócrates o mal é sempre ignorância; Aristóteles reconhece a akrasia</td>
              </tr>
              <tr>
                <td><strong>Morte de Sócrates</strong></td>
                <td>Questão sobre a relação entre lei, democracia e obediência civil</td>
                <td>Achar que Sócrates apoiava a democracia ateniense — ele a criticava, mas respeitava suas leis</td>
              </tr>
              <tr>
                <td><strong>Sócrates vs. Sofistas</strong></td>
                <td>Contraste entre busca da verdade e persuasão retórica</td>
                <td>Confundir retórica com filosofia — para Sócrates eram opostos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A frase mais cobrada: "Sei que nada sei"</h3>
          <p>
            Essa expressão (não encontrada literalmente em Platão, mas inspirada na <em>Apologia</em>)
            sintetiza a <strong>ignorância socrática</strong>: Sócrates é o mais sábio porque reconhece
            sua ignorância, enquanto os outros acreditam saber o que não sabem. No ENEM, a questão
            associa essa ideia à <em>humildade intelectual</em> como condição para a busca da verdade
            — oposta à arrogância dos sofistas e da opinião não examinada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🗣️</span>
            <h3>Diálogo</h3>
            <p>Sócrates fundou a filosofia do diálogo: a verdade emerge da conversa honesta entre iguais.</p>
          </div>
          <div className="math-card">
            <span>🤝</span>
            <h3>Ironia</h3>
            <p>Finge ignorância para revelar a ignorância do outro — destruição da falsa certeza.</p>
          </div>
          <div className="math-card">
            <span>🤱</span>
            <h3>Maiêutica</h3>
            <p>Arte de partejar: ajuda o interlocutor a "dar à luz" o conhecimento de dentro.</p>
          </div>
          <div className="math-card">
            <span>⭐</span>
            <h3>Virtude</h3>
            <p>Virtude = conhecimento. Ninguém age mal voluntariamente. O mal nasce da ignorância.</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Autoconhecimento</h3>
            <p>"Conhece-te a ti mesmo." A alma é o que há de mais valioso no ser humano.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Morte</h3>
            <p>Condenado por impiedade e corrupção da juventude. Recusou a fuga. Bebeu cicuta.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Método Socrático"
          statement={<p>A maiêutica socrática é comparada pelo próprio Sócrates à profissão de sua mãe (parteira) porque:</p>}
          options={[
            { letter: "a", text: "Sócrates, como a parteira, transferia o conhecimento de sua mente para a do aluno." },
            { letter: "b", text: "Sócrates, como a parteira, ajudava o interlocutor a 'dar à luz' o conhecimento que já estava em si mesmo.", correct: true },
            { letter: "c", text: "Sócrates cobrava pelo ensino, assim como a parteira cobrava pelo trabalho de parto." },
            { letter: "d", text: "O método socrático é doloroso, assim como o parto, porque exige memorização intensa." },
          ]}
          resolution={<p>A <strong>maiêutica</strong> (de <em>maieutiké techné</em> = arte de partejar) é a segunda fase do método socrático. Assim como a parteira não gera o bebê, mas ajuda a mãe a trazê-lo ao mundo, Sócrates não transfere o conhecimento para o interlocutor — ele ajuda o outro a <em>descobrir</em> o conhecimento que já está latente em si mesmo. Essa ideia pressupõe a teoria platônica da reminiscência: a alma já conhecia as verdades antes de encarnar e o aprendizado é um processo de recordação.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Ética Socrática"
          statement={<p>Segundo Sócrates, "ninguém age mal voluntariamente." Essa afirmação implica que:</p>}
          options={[
            { letter: "a", text: "Os seres humanos são naturalmente bons e não precisam de educação moral." },
            { letter: "b", text: "As ações imorais são sempre resultado de coerção externa — pressão social ou medo." },
            { letter: "c", text: "O mal moral tem origem na ignorância — quem verdadeiramente conhece o bem, age bem.", correct: true },
            { letter: "d", text: "A liberdade humana é uma ilusão, pois as ações são sempre determinadas por forças externas." },
          ]}
          resolution={<p>Para Sócrates, a ética e o conhecimento estão intrinsecamente ligados: <em>quem sabe o que é o bem, age bem</em>. Portanto, as ações más não são produto de maldade intencional, mas de <strong>ignorância</strong> — o agente moral não conhece verdadeiramente o bem. Isso levou Sócrates a uma conclusão paradoxal: o criminoso merece antes correção e educação do que punição pura. Essa posição foi depois criticada por Aristóteles, que reconheceu a akrasia (fraqueza de vontade) — a capacidade de saber o que é correto e agir de modo contrário.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Sócrates e a Democracia"
          statement={<p>Sócrates foi condenado à morte por um júri popular democrático ateniense. Paradoxalmente, ele recusou fugir e aceitou a sentença. Sua recusa em fugir demonstra que:</p>}
          options={[
            { letter: "a", text: "Sócrates acreditava que a democracia ateniense era perfeita e infalível." },
            { letter: "b", text: "Sócrates considerava que a desobediência às leis democráticas era sempre ilegítima." },
            { letter: "c", text: "Para Sócrates, o respeito às leis e ao contrato com a cidade era um dever moral, mesmo diante de uma sentença injusta.", correct: true },
            { letter: "d", text: "Sócrates temia a fuga por razões práticas, como a perda de sua reputação e de seus amigos." },
          ]}
          resolution={<p>No diálogo <em>Críton</em> de Platão, Sócrates explica sua recusa em fugir: ele "assinou um contrato" implícito com Atenas ao viver e se beneficiar de suas leis durante 70 anos. Fugir seria desobedecer às leis, o que destruiria a ordem civil. Curiosamente, esse argumento não implica que a democracia seja infalível — Sócrates criticou duramente a democracia em outros contextos, mas distinguia entre criticar legalmente as leis e desobedecê-las arbitrariamente. Esse debate ainda ressoa na filosofia política contemporânea (desobediência civil, Thoreau, King).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Sócrates e a Educação"
          statement={<p>Um professor adota em sala de aula o método de fazer perguntas aos alunos em vez de transmitir respostas prontas. Ao ser questionado sobre essa abordagem, ele responde: "Meu papel não é encher a cabeça deles de informação, mas ajudá-los a descobrir o que já sabem." Esse método é inspirado diretamente em:</p>}
          options={[
            { letter: "a", text: "O método dedutivo de René Descartes, que parte de princípios certos para conclusões necessárias." },
            { letter: "b", text: "O empirismo de John Locke, que vê a mente como tábula rasa a ser preenchida pela experiência." },
            { letter: "c", text: "A maiêutica socrática, que concebe o aprendizado como o processo de trazer à tona o conhecimento latente no aluno.", correct: true },
            { letter: "d", text: "O iluminismo kantiano, que defende a autonomia da razão como princípio educacional." },
          ]}
          resolution={<p>A abordagem descrita é a da <strong>maiêutica socrática</strong>: o professor, como a parteira, não "gera" o conhecimento no aluno, mas ajuda o aluno a "dar à luz" o que já está em potencial em si mesmo. Esse método influenciou profundamente a pedagogia moderna — o construtivismo de Vygotsky e Piaget, a "educação problematizadora" de Paulo Freire ("o educador não é o que enche vasilhas, mas o que acende fogo") compartilham esse espírito socrático de valorizar o processo de descoberta autônoma sobre a transmissão passiva.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Sócrates e Relativismo"
          statement={<p>"O homem é a medida de todas as coisas, das que são enquanto são, e das que não são enquanto não são." (Protágoras). Sócrates discordaria radicalmente dessa afirmação porque ela implica:</p>}
          options={[
            { letter: "a", text: "Que o homem deve ser o centro das investigações filosóficas — posição que Sócrates também adota." },
            { letter: "b", text: "Que a verdade e a moral são objetivas e universais, acessíveis a todos pela razão." },
            { letter: "c", text: "Que cada indivíduo determina sua própria verdade, tornando impossível um conhecimento moral objetivo.", correct: true },
            { letter: "d", text: "Que os deuses existem e são a medida última de todas as coisas para os seres humanos." },
          ]}
          resolution={<p>A frase de Protágoras é o manifesto do relativismo sofista: cada pessoa (ou cada cultura) define o que é verdadeiro e bom para si mesma — não há verdade ou moral objetiva. Sócrates se opôs radicalmente a isso: para ele, existe o Bem em si mesmo, a Justiça em si mesma, a Coragem em si mesma — essências universais que podem ser descobertas pela razão. Se não houvesse verdade objetiva, a própria filosofia seria impossível — apenas a retórica sofista, que não busca o verdadeiro, mas o convincente. Essa oposição entre relativismo e objetivismo moral está no coração da ética filosófica até hoje.</p>}
        />
      </section>
    </article>
  );
}
