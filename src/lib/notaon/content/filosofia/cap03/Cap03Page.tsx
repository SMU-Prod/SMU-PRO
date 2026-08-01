"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 3</span>
          <h1>Mito, religião, senso comum e conhecimento filosófico</h1>
          <p>
            Antes da Filosofia, a humanidade já tentava explicar o mundo — por meio de mitos,
            rituais religiosos e da experiência cotidiana. Compreender as diferenças entre essas
            formas de conhecimento é fundamental para entender o que torna o pensamento filosófico
            único e indispensável para o ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pensamento Mítico</span>
        <h2>1. O que é o mito?</h2>
        <p>
          O <strong>mito</strong> é uma narrativa sagrada que explica a origem do mundo, dos deuses,
          dos seres humanos e dos fenômenos naturais. Os mitos não pretendem ser verificados
          empiricamente — sua autoridade vem da tradição e da fé coletiva.
        </p>
        <p>
          Nas culturas gregas pré-filosóficas, por exemplo, o trovão era explicado como a expressão
          da ira de Zeus; as tempestades no mar, como a fúria de Poseidon. Os mitos são narrativos,
          simbólicos e personificados: forças da natureza ganham rosto, nome e vontade.
        </p>
        <p>
          O filósofo alemão <strong>Ernst Cassirer</strong> estudou o mito como uma das formas
          simbólicas que o ser humano usa para dar sentido ao mundo. Não se trata de ignorância
          pura, mas de uma forma legítima de elaborar a experiência humana.
        </p>
        <div className="lesson-highlight">
          <h3>Características do pensamento mítico</h3>
          <p>
            <strong>Narrativo:</strong> explica por meio de histórias com personagens.<br/>
            <strong>Personificado:</strong> atribui vontade e intenção a forças naturais.<br/>
            <strong>Não verificável:</strong> não exige prova — exige fé e adesão tradicional.<br/>
            <strong>Totalizante:</strong> oferece uma visão completa e integrada do cosmos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cosmogonia</span>
        <h2>2. Mitos cosmogônicos e teogônicos</h2>
        <p>
          Os <strong>mitos cosmogônicos</strong> narram a criação do cosmos (universo), enquanto os
          <strong> mitos teogônicos</strong> descrevem a origem dos deuses.
        </p>
        <p>
          Exemplos famosos:
        </p>
        <ul>
          <li><strong>Gênesis (tradição judaico-cristã):</strong> Deus cria o mundo em seis dias do nada (criatio ex nihilo).</li>
          <li><strong>Teogonia de Hesíodo (Grécia):</strong> No início existia o Caos; de sua abertura surgiram Gaia (Terra), Érebo (escuridão) e Eros (amor).</li>
          <li><strong>Enuma Elish (Babilônia):</strong> O deus Marduk cria o mundo a partir do corpo da deusa Tiamat.</li>
          <li><strong>Mitos tupinambás (Brasil):</strong> Monan, criador do mundo, que depois destruiu por fogo.</li>
        </ul>
        <p>
          O que todos têm em comum: <em>uma força sobrenatural</em> que ordena o caos inicial e
          estabelece o cosmos habitável pelos seres humanos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Religião</span>
        <h2>3. A religião como forma de explicar o mundo</h2>
        <p>
          A <strong>religião</strong> vai além do mito: além de narrar origens, organiza práticas,
          rituais, instituições e valores morais em torno de uma crença em forças sagradas ou divinas.
        </p>
        <p>
          As grandes religiões mundiais (Judaísmo, Cristianismo, Islã, Hinduísmo, Budismo) oferecem
          respostas para perguntas filosóficas fundamentais: o sentido da vida, a origem do mal,
          a natureza da morte e o fundamento da moralidade.
        </p>
        <p>
          A relação entre Filosofia e Religião é histórica e complexa: na Idade Média, muitos
          filósofos buscaram harmonizar a fé cristã com a razão grega — projeto central de
          Santo Agostinho e São Tomás de Aquino.
        </p>
        <div className="lesson-highlight">
          <h3>Fé vs. Razão</h3>
          <p>
            Para Santo Agostinho: <em>"Crê para entender"</em> — a fé precede a razão.<br/>
            Para São Tomás de Aquino: fé e razão são complementares, cada uma tem seu domínio.<br/>
            Para o Iluminismo: a razão deve ser autônoma e não depender da fé religiosa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Senso Comum</span>
        <h2>4. O senso comum: conhecimento prático e cotidiano</h2>
        <p>
          O <strong>senso comum</strong> é o conjunto de crenças, opiniões e saberes acumulados pela
          experiência cotidiana, transmitidos culturalmente e aceitos sem questionamento crítico.
          É o tipo de conhecimento mais imediato e universal.
        </p>
        <p>
          Exemplos de senso comum:
        </p>
        <ul>
          <li>"O Sol nasce no leste e se põe no oeste."</li>
          <li>"Água fria cura febre."</li>
          <li>"Trabalho duro leva ao sucesso."</li>
          <li>"É perigoso andar na chuva sem guarda-chuva."</li>
        </ul>
        <p>
          O senso comum é útil e necessário para a vida prática, mas apresenta limitações:
          pode ser contraditório, preconceituoso, resistente à mudança e incapaz de explicar
          fenômenos complexos.
        </p>
        <p>
          O sociólogo <strong>Antônio Gramsci</strong> observou que o senso comum é atravessado
          por elementos ideológicos — reflete as relações de poder da sociedade em que é produzido.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Espiral do Conhecimento</span>
        <h2>5. A evolução das formas de conhecimento</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Espiral das formas de conhecimento">
            {/* Espiral simplificada como círculos concêntricos com rótulos */}
            <circle cx="240" cy="140" r="120" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
            <circle cx="240" cy="140" r="90" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
            <circle cx="240" cy="140" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
            <circle cx="240" cy="140" r="30" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Camadas com etiquetas */}
            <ellipse cx="240" cy="140" rx="22" ry="22" fill="#7c3aed"/>
            <text x="240" y="136" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Mito</text>
            <text x="240" y="148" textAnchor="middle" fontSize="8" fill="#ddd6fe">narrativo</text>

            <text x="240" y="104" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">Religião</text>
            <text x="240" y="118" textAnchor="middle" fontSize="8" fill="#6b7280">fé + ritual</text>

            <text x="240" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#d97706">Senso Comum</text>
            <text x="240" y="83" textAnchor="middle" fontSize="8" fill="#6b7280">prática cotidiana</text>

            <text x="240" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">Filosofia</text>
            <text x="240" y="51" textAnchor="middle" fontSize="8" fill="#6b7280">crítica + sistemática</text>

            <text x="240" y="10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">Ciência</text>
            <text x="240" y="23" textAnchor="middle" fontSize="8" fill="#6b7280">experimental</text>

            {/* Seta espiral */}
            <path d="M240,118 Q280,100 260,75 Q245,55 235,35" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrowK)"/>
            <defs>
              <marker id="arrowK" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#6b7280"/>
              </marker>
            </defs>
            <text x="295" y="80" fontSize="9" fill="#6b7280">evolução</text>
            <text x="295" y="92" fontSize="9" fill="#6b7280">histórica</text>
          </svg>
          <figcaption>Evolução histórica das formas de conhecimento: do mito à ciência.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conhecimento Filosófico</span>
        <h2>6. O que torna o conhecimento filosófico único?</h2>
        <p>
          O <strong>conhecimento filosófico</strong> se distingue das outras formas por ser:
        </p>
        <ul>
          <li><strong>Crítico:</strong> questiona suas próprias premissas e não aceita dogmas sem exame.</li>
          <li><strong>Sistemático:</strong> busca organizar as ideias de forma coerente e consistente.</li>
          <li><strong>Radical:</strong> vai à raiz dos problemas, questionando os fundamentos.</li>
          <li><strong>Reflexivo:</strong> o pensamento volta-se sobre si mesmo — a Filosofia pensa o próprio ato de pensar.</li>
          <li><strong>Universal:</strong> aspira a responder questões que valem para todos os seres humanos, não apenas para uma cultura particular.</li>
        </ul>
        <p>
          O filósofo brasileiro <strong>Marilena Chaui</strong> define a Filosofia como o <em>pensamento que
          interroga a si mesmo</em> — uma reflexão de segunda ordem sobre as condições de possibilidade de
          todo conhecimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>7. Comparação entre as formas de conhecimento</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Mito</th>
                <th>Religião</th>
                <th>Senso Comum</th>
                <th>Filosofia</th>
                <th>Ciência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base</td>
                <td>Tradição sagrada</td>
                <td>Fé e revelação</td>
                <td>Experiência prática</td>
                <td>Razão e argumento</td>
                <td>Experimento e dados</td>
              </tr>
              <tr>
                <td>Método</td>
                <td>Narrativa</td>
                <td>Ritual, dogma</td>
                <td>Observação espontânea</td>
                <td>Análise crítica</td>
                <td>Método hipotético-dedutivo</td>
              </tr>
              <tr>
                <td>Verificação</td>
                <td>Não exige</td>
                <td>Não exige</td>
                <td>Parcial</td>
                <td>Argumentativa</td>
                <td>Empírica</td>
              </tr>
              <tr>
                <td>Sistematização</td>
                <td>Baixa</td>
                <td>Alta (teologia)</td>
                <td>Baixa</td>
                <td>Alta</td>
                <td>Muito alta</td>
              </tr>
              <tr>
                <td>Papel do questionamento</td>
                <td>Nenhum</td>
                <td>Limitado</td>
                <td>Raro</td>
                <td>Central</td>
                <td>Central</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Passagem do Mito ao Logos</span>
        <h2>8. A passagem do mythos ao logos</h2>
        <p>
          Os historiadores da filosofia descrevem o surgimento da Filosofia como a passagem do
          <strong> mythos</strong> (narrativa mítica) ao <strong>logos</strong> (razão, palavra, argumento).
          Essa transição não foi abrupta nem total — elementos míticos persistiram no pensamento filosófico
          grego, como nos diálogos de Platão.
        </p>
        <p>
          A transição significa que os gregos passaram a buscar explicações para os fenômenos naturais
          não em termos de vontade divina, mas de <em>princípios naturais racionalmente identificáveis</em>.
          Tales de Mileto, ao propor a água como princípio de tudo, inaugura esse projeto.
        </p>
        <div className="lesson-highlight">
          <h3>Mito e Filosofia não são opostos absolutos</h3>
          <p>
            Platão usou mitos (como o da caverna, o de Er) dentro de seus diálogos filosóficos para
            ilustrar conceitos difíceis de articular apenas racionalmente. O mito pode ser uma
            ferramenta filosófica — desde que usado reflexivamente e não como autoridade dogmática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🌀</span>
            <h3>Mito</h3>
            <p>Narrativa sagrada, personificada e não verificável. Explica origens por ação divina.</p>
          </div>
          <div className="math-card">
            <span>⛪</span>
            <h3>Religião</h3>
            <p>Organiza fé, rituais e valores morais. Pode coexistir e dialogar com a filosofia.</p>
          </div>
          <div className="math-card">
            <span>🧑‍🌾</span>
            <h3>Senso Comum</h3>
            <p>Conhecimento prático e cotidiano. Útil, mas não sistemático nem crítico.</p>
          </div>
          <div className="math-card">
            <span>🤔</span>
            <h3>Filosofia</h3>
            <p>Crítica, sistemática, radical e reflexiva. Questiona premissas e fundamentos.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Ciência</h3>
            <p>Baseia-se em observação, experimento e verificação empírica. Método rigoroso.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Mythos → Logos</h3>
            <p>A filosofia nasce da substituição do mito pela razão como modo de explicar o mundo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Senso Comum"
          statement={<p>O senso comum se caracteriza por ser um tipo de conhecimento:</p>}
          options={[
            { letter: "a", text: "Sistemático, crítico e verificável experimentalmente." },
            { letter: "b", text: "Baseado em revelação divina e praticado em rituais coletivos." },
            { letter: "c", text: "Acumulado pela experiência cotidiana, transmitido culturalmente e não sistematizado.", correct: true },
            { letter: "d", text: "Produzido exclusivamente por especialistas em laboratórios científicos." },
          ]}
          resolution={<p>O <strong>senso comum</strong> é o saber prático acumulado pela experiência do dia a dia, transmitido de geração em geração sem questionamento crítico sistemático. Ao contrário da ciência, não exige método rigoroso. Ao contrário da religião, não se baseia em revelação. É o conhecimento que "todo mundo sabe" — útil na prática, mas limitado na profundidade explicativa.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Pensamento Mítico"
          statement={<p>A explicação mítica dos fenômenos naturais se distingue da explicação filosófica ou científica porque:</p>}
          options={[
            { letter: "a", text: "O mito utiliza linguagem matemática para descrever os fenômenos." },
            { letter: "b", text: "O mito personifica as forças da natureza e não busca verificação racional ou empírica.", correct: true },
            { letter: "c", text: "O mito é uma forma primitiva de ciência que usa experimentos rudimentares." },
            { letter: "d", text: "O mito é idêntico à filosofia, apenas usa linguagem metafórica em vez de técnica." },
          ]}
          resolution={<p>O pensamento mítico <strong>personifica</strong> as forças naturais (o trovão é Zeus, o mar é Poseidon) e apresenta suas explicações como narrativas sagradas que não precisam de verificação — apenas de adesão pela fé e pela tradição. A Filosofia, ao contrário, busca explicações racionais que possam ser argumentadas e criticadas. A Ciência vai além, exigindo verificação empírica. O mito não é uma "ciência primitiva" — é uma forma qualitativamente diferente de dar sentido ao mundo.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. A Transição Mythos-Logos"
          statement={<p>Ao propor que "a água é o princípio de todas as coisas", Tales de Mileto realiza uma mudança fundamental no pensamento humano. Essa mudança consiste em:</p>}
          options={[
            { letter: "a", text: "Substituir a narrativa sagrada por uma explicação racional e natural do cosmos.", correct: true },
            { letter: "b", text: "Provar experimentalmente que a água é o elemento mais abundante na Terra." },
            { letter: "c", text: "Defender que os deuses do Olimpo são compostos de água." },
            { letter: "d", text: "Introduzir o método científico de observação e verificação na Grécia Antiga." },
          ]}
          resolution={<p>Tales de Mileto é considerado o primeiro filósofo ocidental precisamente porque substitui a explicação mítica (deuses criam e controlam o mundo) por uma explicação natural e racional: existe um <em>princípio</em> (arché) que constitui todas as coisas, e esse princípio é a água. Não se trata de verificação experimental (ciência ainda não existia) nem de deuses, mas de uma <strong>explicação racional e natural</strong> — a passagem do mythos ao logos. Isso inaugura a tradição filosófica ocidental.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Senso Comum e Preconceito"
          statement={<p>Um jovem cresceu ouvindo que "lugar de mulher é em casa". Ao estudar sociologia e filosofia, ele passou a questionar essa afirmação. Do ponto de vista filosófico, esse processo de questionamento representa:</p>}
          options={[
            { letter: "a", text: "A substituição do conhecimento filosófico pelo científico, mais objetivo." },
            { letter: "b", text: "A passagem da religião para o ateísmo como forma de libertar o pensamento." },
            { letter: "c", text: "A ruptura crítica com o senso comum, que pode carregar preconceitos naturalizados pela cultura.", correct: true },
            { letter: "d", text: "A confirmação de que o senso comum é sempre mais confiável que a ciência." },
          ]}
          resolution={<p>O senso comum, como mostrou Gramsci, carrega elementos <strong>ideológicos</strong> que naturalizam relações de poder e desigualdade. A frase "lugar de mulher é em casa" não é uma verdade natural — é uma construção cultural que reflete e reproduz desigualdades de gênero. O processo filosófico e sociológico de questionar essa crença representa exatamente a função crítica da Filosofia: <em>problematizar o que parece óbvio</em> e revelar seus fundamentos históricos e ideológicos. Esse é o tipo de questão que o ENEM cobra com frequência.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Conhecimento Filosófico"
          statement={<p>"A filosofia começa quando alguém faz a pergunta certa sobre a coisa certa, no momento certo." Essa afirmação destaca como característica essencial do conhecimento filosófico:</p>}
          options={[
            { letter: "a", text: "A capacidade de responder todas as questões humanas com precisão matemática." },
            { letter: "b", text: "A disposição para questionar o que parece evidente e problematizar a realidade.", correct: true },
            { letter: "c", text: "A memorização das respostas dadas pelos grandes filósofos da tradição ocidental." },
            { letter: "d", text: "A aceitação das verdades estabelecidas pela autoridade religiosa e cultural." },
          ]}
          resolution={<p>O que distingue o conhecimento filosófico é precisamente a <strong>disposição para questionar</strong> o que parece evidente, natural ou óbvio. A filosofia não começa com respostas prontas — começa com a pergunta bem formulada. Como disse Sócrates, a maioria das pessoas não sabe que não sabe (dupla ignorância). A filosofia rompe essa prisão ao problematizar o que tomamos como certo. Essa habilidade — questionar premissas — é exatamente o que o ENEM avalia nas questões filosóficas.</p>}
        />
      </section>
    </article>
  );
}
