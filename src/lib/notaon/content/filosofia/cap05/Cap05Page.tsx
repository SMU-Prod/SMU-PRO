"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 5</span>
          <h1>Conhecimento, verdade e diferentes formas de compreender a realidade</h1>
          <p>
            Como sabemos que sabemos algo? O que é a verdade? Essas perguntas, centrais para a
            Epistemologia, ocuparam filósofos de Platão a Kant. Neste capítulo, você explorará
            as principais teorias do conhecimento e os debates sobre a verdade — temas recorrentes
            no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epistemologia</span>
        <h2>1. O que é Epistemologia?</h2>
        <p>
          A <strong>Epistemologia</strong> (do grego <em>episteme</em> = conhecimento + <em>logos</em> = estudo)
          é o ramo da Filosofia que investiga a <em>natureza</em>, a <em>origem</em> e os <em>limites</em>
          do conhecimento humano. Suas perguntas centrais são:
        </p>
        <ul>
          <li>O que é o conhecimento? (Como distinguir saber de opinar?)</li>
          <li>Como adquirimos conhecimento? (Pela razão, pelos sentidos, pela experiência?)</li>
          <li>O conhecimento é possível? (Ou somos radicalmente limitados?)</li>
          <li>O que é a verdade? (Como sabemos que algo é verdadeiro?)</li>
        </ul>
        <p>
          Platão já diferenciava <strong>doxa</strong> (opinião) de <strong>episteme</strong>
          (conhecimento genuíno): saber verdadeiramente algo é mais do que apenas ter uma crença
          verdadeira — é ter uma justificativa racional para essa crença.
        </p>
        <div className="lesson-highlight">
          <h3>A definição clássica de conhecimento</h3>
          <p>
            Desde Platão, o conhecimento é definido como <em>crença verdadeira justificada</em> (JTB — Justified True Belief):
            para saber algo, preciso (1) acreditar nisso, (2) ser verdadeiro, e (3) ter justificativa racional.
            Em 1963, Edmund Gettier mostrou que essa definição tem problemas, abrindo debate que dura até hoje.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fontes do Conhecimento</span>
        <h2>2. Diagrama das fontes do conhecimento</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Fontes do conhecimento humano">
            {/* Centro: Conhecimento */}
            <ellipse cx="250" cy="150" rx="55" ry="32" fill="#1d4ed8"/>
            <text x="250" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">CONHECIMENTO</text>
            <text x="250" y="162" textAnchor="middle" fontSize="10" fill="#bfdbfe">episteme</text>

            {/* Razão */}
            <ellipse cx="100" cy="70" rx="65" ry="28" fill="#7c3aed"/>
            <text x="100" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Razão</text>
            <text x="100" y="82" textAnchor="middle" fontSize="9" fill="#ddd6fe">Racionalismo (Descartes)</text>
            <line x1="155" y1="88" x2="200" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>

            {/* Sentidos */}
            <ellipse cx="100" cy="230" rx="65" ry="28" fill="#d97706"/>
            <text x="100" y="226" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Sentidos</text>
            <text x="100" y="242" textAnchor="middle" fontSize="9" fill="#fef3c7">Empirismo (Locke, Hume)</text>
            <line x1="155" y1="212" x2="200" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>

            {/* Intuição */}
            <ellipse cx="400" cy="70" rx="65" ry="28" fill="#065f46"/>
            <text x="400" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Intuição</text>
            <text x="400" y="82" textAnchor="middle" fontSize="9" fill="#a7f3d0">Bergson, Husserl</text>
            <line x1="345" y1="88" x2="300" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>

            {/* Revelação */}
            <ellipse cx="400" cy="230" rx="65" ry="28" fill="#b91c1c"/>
            <text x="400" y="226" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Revelação</text>
            <text x="400" y="242" textAnchor="middle" fontSize="9" fill="#fecaca">Teologia, fé</text>
            <line x1="345" y1="212" x2="300" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>
          </svg>
          <figcaption>As principais fontes do conhecimento humano segundo as tradições filosóficas.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Racionalismo vs. Empirismo</span>
        <h2>3. O grande debate: Racionalismo vs. Empirismo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Racionalismo</th>
                <th>Empirismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fonte do conhecimento</strong></td>
                <td>A razão (intellectus)</td>
                <td>Os sentidos (experiência)</td>
              </tr>
              <tr>
                <td><strong>Ideias inatas</strong></td>
                <td>Existem — a mente possui conceitos a priori</td>
                <td>Não existem — a mente é uma "tábula rasa" (Locke)</td>
              </tr>
              <tr>
                <td><strong>Principais filósofos</strong></td>
                <td>Descartes, Spinoza, Leibniz</td>
                <td>Locke, Berkeley, Hume</td>
              </tr>
              <tr>
                <td><strong>Método</strong></td>
                <td>Dedução matemática</td>
                <td>Observação e experimento</td>
              </tr>
              <tr>
                <td><strong>Exemplo de conhecimento certo</strong></td>
                <td>"Penso, logo existo" (Descartes)</td>
                <td>O calor do fogo queima (experiência direta)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Kant: a síntese crítica</h3>
          <p>
            Immanuel Kant tentou superar o debate afirmando que o conhecimento exige <em>ambos</em>:
            os dados dos sentidos (conteúdo) <em>e</em> as estruturas a priori da razão (forma).
            "Intuições sem conceitos são cegas; conceitos sem intuições são vazios."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorias da Verdade</span>
        <h2>4. O que é a verdade? Três teorias principais</h2>
        <p>
          A questão "o que torna uma afirmação verdadeira?" gerou três grandes respostas filosóficas:
        </p>
        <ul>
          <li>
            <strong>Teoria da Correspondência:</strong> uma afirmação é verdadeira quando corresponde
            à realidade. "A neve é branca" é verdadeiro porque a neve é, de fato, branca. (Aristóteles,
            Wittgenstein do Tractatus, realismo científico.)
          </li>
          <li>
            <strong>Teoria da Coerência:</strong> uma afirmação é verdadeira quando coerente com um
            sistema de crenças. O idealismo alemão (Hegel) e algumas correntes do racionalismo
            adotam essa visão — a verdade não é correspondência com o mundo externo, mas harmonia
            interna do sistema.
          </li>
          <li>
            <strong>Teoria Pragmática:</strong> uma afirmação é verdadeira se funciona, se produz
            resultados práticos úteis. (William James, John Dewey.) "O que funciona é verdadeiro."
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ceticismo</span>
        <h2>5. O ceticismo e seus graus</h2>
        <p>
          O <strong>ceticismo</strong> questiona a possibilidade ou a extensão do conhecimento humano.
          Há diferentes graus:
        </p>
        <ul>
          <li>
            <strong>Ceticismo radical (Pirrônico):</strong> nada pode ser conhecido com certeza —
            a postura correta é a <em>epoché</em> (suspensão do juízo). Pirro de Élis (séc. IV a.C.).
          </li>
          <li>
            <strong>Ceticismo moderado:</strong> alguns conhecimentos são possíveis, mas a certeza
            absoluta é inatingível. Descartes usou o ceticismo como <em>método</em> para encontrar
            certezas — a dúvida metódica.
          </li>
          <li>
            <strong>Ceticismo científico:</strong> exige evidências e permite revisar crenças. Não
            é niilismo epistêmico, mas rigor intelectual. Base do método científico moderno.
          </li>
        </ul>
        <p>
          A <strong>dúvida cartesiana</strong> de Descartes é estratégica: ele duvida de tudo que
          pode ser duvidado para encontrar uma base indubitável — o famoso <em>"Cogito ergo sum"</em>
          ("Penso, logo existo").
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relativismo</span>
        <h2>6. Relativismo e absolutismo epistêmico</h2>
        <p>
          O <strong>relativismo epistêmico</strong> afirma que o conhecimento é sempre relativo a
          um sujeito, uma cultura ou um contexto histórico — não há verdade universal objetiva.
          O sofista Protágoras expressou isso: "O homem é a medida de todas as coisas."
        </p>
        <p>
          O <strong>absolutismo epistêmico</strong> (ou objetivismo) defende que existem verdades
          independentes de qualquer perspectiva subjetiva ou cultural. A matemática e a lógica são
          exemplos frequentemente citados: 2+2=4 independentemente de quem calcula ou onde.
        </p>
        <p>
          No ENEM, o debate sobre relativismo aparece frequentemente em questões sobre diversidade
          cultural, direitos humanos e multiculturalismo: é possível criticar práticas culturais
          de outras sociedades com base em valores universais?
        </p>
        <div className="lesson-highlight">
          <h3>Relativismo e tolerância cultural</h3>
          <p>
            O relativismo cultural (antropológico) defende respeito às diferentes culturas. Porém,
            carregado ao extremo, impediria críticas a práticas como escravidão ou mutilação.
            Hannah Arendt e filósofos dos direitos humanos defendem que certos valores
            (dignidade, liberdade) são universais e justificam a crítica intercultural.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conhecimento e Poder</span>
        <h2>7. Conhecimento como poder: Foucault</h2>
        <p>
          O filósofo francês <strong>Michel Foucault</strong> introduziu uma perspectiva crítica
          sobre o conhecimento: ele não é neutro — está sempre entrelaçado com relações de poder.
          Quem define o que é "verdade" em uma sociedade? Quem tem autoridade para falar?
        </p>
        <p>
          Foucault analisou como instituições (escolas, prisões, hospitais, manicômios) produzem
          "regimes de verdade" — conjunto de discursos aceitos como verdadeiros em uma época.
          O que hoje chamamos de doença mental foi em outros séculos chamado de possessão demoníaca.
        </p>
        <p>
          Isso não significa que "tudo é relativo" para Foucault, mas que o conhecimento tem uma
          <strong> história</strong> e que essa história é inseparável das relações de poder.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filosofia da Ciência</span>
        <h2>8. Ciência, paradigmas e epistemologia contemporânea</h2>
        <p>
          No século XX, a filosofia do conhecimento voltou seu olhar para a ciência — o modelo
          mais bem-sucedido de produção de conhecimento que a humanidade desenvolveu. Dois
          pensadores moldam esse debate:
        </p>
        <p>
          <strong>Karl Popper</strong> (1902–1994) propôs o <em>falsificacionismo</em>: o critério
          que distingue ciência de não-ciência não é a verificação (você nunca pode provar que uma
          teoria é definitivamente verdadeira), mas a <strong>refutabilidade</strong>. Uma teoria é
          científica se for possível imaginar um experimento que a refute. A psicanálise e a
          astrologia, para Popper, não são ciências — não podem ser falsificadas.
        </p>
        <p>
          <strong>Thomas Kuhn</strong> (1922–1996) respondeu com a ideia de <strong>paradigmas</strong>
          e <strong>revoluções científicas</strong>: a ciência não avança por acumulação linear de
          conhecimento, mas por rupturas. A maioria do tempo, os cientistas trabalham dentro de um
          paradigma (conjunto de crenças, métodos e problemas aceitos) em "ciência normal". Quando
          as anomalias se acumulam e o paradigma não as resolve, ocorre uma <em>revolução científica</em>
          — o paradigma antigo é substituído (Copérnico substituindo Ptolomeu; Einstein substituindo Newton).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Popper (Falsificacionismo)</th>
                <th>Kuhn (Paradigmas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Critério de ciência</strong></td>
                <td>Falsificabilidade</td>
                <td>Pertencer a um paradigma dominante</td>
              </tr>
              <tr>
                <td><strong>Progresso científico</strong></td>
                <td>Linear — falsificações progressivas</td>
                <td>Descontínuo — revoluções de paradigma</td>
              </tr>
              <tr>
                <td><strong>Modelo de cientista</strong></td>
                <td>Refuta hipóteses corajosamente</td>
                <td>Resolve quebra-cabeças dentro do paradigma</td>
              </tr>
              <tr>
                <td><strong>Exemplo no ENEM</strong></td>
                <td>Experimentos que testam hipóteses</td>
                <td>Revolução copernicana, teoria da evolução</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Epistemologia e ENEM</h3>
          <p>
            O ENEM frequentemente apresenta textos de Popper ou Kuhn para discutir a natureza
            do conhecimento científico. Saiba distinguir: Popper enfatiza a <em>racionalidade
            crítica</em> (questionar sempre); Kuhn enfatiza o papel da <em>comunidade científica
            e da história</em> na produção do conhecimento. Ambos se opõem ao indutivismo ingênuo
            (a ideia de que a ciência acumula fatos até chegar à verdade).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epistemologia Aplicada</span>
        <h2>9. Epistemologia no ENEM: Conhecimento, Ciência e Poder</h2>
        <p>
          As questões de epistemologia no ENEM raramente pedem definições isoladas — elas aplicam
          teorias do conhecimento a situações concretas: políticas científicas, educação, tecnologia,
          saúde pública. Entender os padrões de questão é fundamental:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema epistemológico</th>
                <th>Situação típica no ENEM</th>
                <th>Conceito aplicado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ciência vs. pseudociência</td>
                <td>Texto sobre negacionismo científico (vacinas, clima)</td>
                <td>Falsificabilidade de Popper: o que distingue ciência de pseudociência</td>
              </tr>
              <tr>
                <td>Mudança de paradigma</td>
                <td>Texto sobre revolução científica (Copérnico, Einstein)</td>
                <td>Kuhn: paradigma → anomalias → revolução científica → novo paradigma</td>
              </tr>
              <tr>
                <td>Conhecimento e poder</td>
                <td>Texto sobre currículo escolar, saber oficial vs. marginalizado</td>
                <td>Foucault: saber/poder; quem define o que conta como conhecimento</td>
              </tr>
              <tr>
                <td>Limites do conhecimento</td>
                <td>Texto sobre bioética, incerteza científica</td>
                <td>Ceticismo moderado; princípio de precaução (Jonas)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Epistemologias plurais</h3>
          <p>
            Uma tendência crescente no ENEM é apresentar textos que questionam a exclusividade
            da ciência moderna como única forma de conhecimento — apresentando saberes indígenas,
            africanos ou populares como formas legítimas de conhecer. Isso conecta epistemologia
            com decolonialidade: quem decide o que conta como "conhecimento válido"?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔍</span>
            <h3>Epistemologia</h3>
            <p>Estuda a natureza, origem e limites do conhecimento. Distingue saber de opinar.</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Racionalismo</h3>
            <p>A razão é a fonte primária do conhecimento. Descartes: "Penso, logo existo."</p>
          </div>
          <div className="math-card">
            <span>👁️</span>
            <h3>Empirismo</h3>
            <p>Os sentidos são a fonte do conhecimento. Locke: a mente é uma tábula rasa.</p>
          </div>
          <div className="math-card">
            <span>✅</span>
            <h3>Teorias da Verdade</h3>
            <p>Correspondência (realismo), Coerência (idealismo), Pragmática (funcionalismo).</p>
          </div>
          <div className="math-card">
            <span>❓</span>
            <h3>Ceticismo</h3>
            <p>Questiona a certeza do conhecimento. Pirro (radical) vs. Descartes (metódico).</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Relativismo</h3>
            <p>Conhecimento relativo ao sujeito/cultura. Debate com o absolutismo dos DH.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Fontes do Conhecimento"
          statement={<p>Para os empiristas, o conhecimento genuíno tem como fonte principal:</p>}
          options={[
            { letter: "a", text: "As ideias inatas presentes na razão desde o nascimento." },
            { letter: "b", text: "A revelação divina transmitida pelas Escrituras." },
            { letter: "c", text: "A experiência sensorial e a observação do mundo.", correct: true },
            { letter: "d", text: "Os princípios matemáticos deduzidos pela razão pura." },
          ]}
          resolution={<p>O <strong>empirismo</strong> defende que todo conhecimento tem origem na <em>experiência sensorial</em>. John Locke afirmou que a mente humana ao nascer é uma "tábula rasa" (quadro em branco) — todo o conteúdo do pensamento vem das impressões dos sentidos. David Hume levou essa ideia ao extremo: qualquer ideia que não possa ser rastreada a uma impressão sensorial deve ser descartada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Ceticismo Cartesiano"
          statement={<p>Descartes, ao usar a dúvida metódica como ponto de partida filosófico, pretendia:</p>}
          options={[
            { letter: "a", text: "Demonstrar que o conhecimento é impossível e que devemos viver sem certezas." },
            { letter: "b", text: "Eliminar todas as crenças religiosas e substituí-las por conhecimento científico." },
            { letter: "c", text: "Encontrar uma base indubitável de conhecimento ao questionar tudo que pode ser duvidado.", correct: true },
            { letter: "d", text: "Provar que os sentidos são as únicas fontes confiáveis de conhecimento." },
          ]}
          resolution={<p>Descartes não era um cético — usou o ceticismo como <em>ferramenta</em> (dúvida metódica) para encontrar certezas absolutas. Ao duvidar de tudo — dos sentidos, do mundo externo, até da matemática (e se um gênio maligno me engana?) — encontrou algo que não pode ser duvidado: o próprio ato de duvidar implica que existe um ser pensante. Daí surge o <em>Cogito ergo sum</em> ("Penso, logo existo") — a primeira certeza indubitável e base de todo o seu sistema filosófico.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Teorias da Verdade"
          statement={<p>Um filósofo pragmatista, ao ser questionado sobre a teoria da correspondência, diria que ela é inadequada porque:</p>}
          options={[
            { letter: "a", text: "A realidade não existe independentemente da mente humana." },
            { letter: "b", text: "A verdade não deve ser medida pela adequação à realidade, mas pelos efeitos práticos das crenças.", correct: true },
            { letter: "c", text: "O critério de verdade deve ser a coerência interna do sistema de crenças." },
            { letter: "d", text: "É impossível conhecer qualquer verdade, seja por correspondência, coerência ou pragmática." },
          ]}
          resolution={<p>O <strong>pragmatismo</strong> (William James, John Dewey) define a verdade em termos de <em>consequências práticas</em>: uma crença é verdadeira na medida em que "funciona", produz resultados satisfatórios e permite agir no mundo. Isso se opõe à teoria da correspondência (verdade como adequação ao mundo) e à teoria da coerência (verdade como harmonia interna). O critério pragmático é: "Que diferença prática faz se essa crença é verdadeira ou falsa?"</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Relativismo e Direitos Humanos"
          statement={<p>Uma corrente filosófica defende que os valores morais são relativos a cada cultura e que não existem valores universais que permitam julgar práticas de outras sociedades. Um crítico dessa posição poderia argumentar que tal relativismo:</p>}
          options={[
            { letter: "a", text: "É a única postura filosófica compatível com o respeito à diversidade cultural." },
            { letter: "b", text: "Impede a crítica a práticas como escravidão e tortura, comprometendo a ideia de direitos humanos universais.", correct: true },
            { letter: "c", text: "Coincide perfeitamente com a visão kantiana de universalidade moral." },
            { letter: "d", text: "É defendido por Hannah Arendt como base para o pensamento político democrático." },
          ]}
          resolution={<p>O <strong>relativismo moral radical</strong> enfrenta um dilema: ao afirmar que cada cultura define seus próprios valores, torna impossível a crítica intercultural — o que implicaria que a escravidão era "certa" nas sociedades que a praticavam, que torturas são aceitáveis em culturas que as legitimam, etc. Hannah Arendt, Kant e os defensores dos Direitos Humanos argumentam que certas violações à dignidade humana são universalmente condenáveis, independentemente do contexto cultural. Esse debate está no coração das Declarações Universais de Direitos Humanos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Conhecimento e Poder"
          statement={<p>"Não há relação de poder sem constituição correlativa de um campo de saber, nem saber que não suponha e não constitua ao mesmo tempo relações de poder." (Michel Foucault, Vigiar e Punir). Com base nesse trecho, Foucault defende que:</p>}
          options={[
            { letter: "a", text: "O conhecimento científico é puro e isento de influências políticas ou sociais." },
            { letter: "b", text: "O poder é exercido exclusivamente pela força física, sem recurso ao saber." },
            { letter: "c", text: "O conhecimento e o poder estão indissoluvelmente ligados — saber e poder se co-produzem.", correct: true },
            { letter: "d", text: "A única forma legítima de conhecimento é a produzida pelas instituições democráticas." },
          ]}
          resolution={<p>Foucault elaborou o conceito de <em>poder-saber</em>: o conhecimento não é neutro — ele é produzido dentro de relações de poder e, por sua vez, produz e reproduz essas relações. Um médico tem poder sobre o paciente porque possui um saber reconhecido; as prisões produzem conhecimento sobre os criminosos ao mesmo tempo em que exercem poder sobre eles. Isso não significa que "todo conhecimento é falso", mas que devemos questionar <em>quem</em> produz o conhecimento, <em>para quê</em> e em benefício de <em>quem</em>.</p>}
        />
      </section>
    </article>
  );
}
