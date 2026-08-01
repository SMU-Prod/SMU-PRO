"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 21</span>
          <h1>Maquiavel e o Nascimento da Política Moderna</h1>
          <p>
            Nicolau Maquiavel (1469–1527) é considerado o fundador da Ciência Política moderna. Em "O
            Príncipe", ele separou a política da moral e da religião, analisando o poder como é na
            realidade — e não como deveria ser. Seu realismo político ainda provoca debate filosófico
            sobre ética e poder.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. Maquiavel e a Itália Renascentista</h2>
        <p>
          <strong>Nicolau Maquiavel</strong> nasceu em Florença em 1469, em uma época de profunda
          instabilidade política: a Itália era dividida em dezenas de Estados (Florença, Veneza, Milão,
          Nápoles, os Estados Pontifícios) que guerreavam constantemente entre si e sofriam invasões
          da França e da Espanha. A ausência de um Estado unificado tornava a Itália vulnerável.
        </p>
        <p>
          Maquiavel foi <strong>diplomata e secretário da República Florentina</strong> por 14 anos
          (1498–1512), servindo como embaixador junto a César Bórgia, ao rei da França e ao papa Júlio
          II. Quando os Médici retornaram ao poder em 1512, foi preso, torturado e exilado. Em seu
          exílio em San Casciano, escreveu suas obras mais importantes.
        </p>
        <div className="lesson-highlight">
          <h3>O método de Maquiavel</h3>
          <p>
            Maquiavel foi o primeiro a analisar a política de forma <em>empírica</em>: em vez de
            deduzir como o príncipe deveria ser a partir de princípios morais ou teológicos, ele
            estudou como os príncipes <em>realmente</em> agem — e o que os torna bem-sucedidos ou
            fracassados. Essa separação entre o que "é" e o que "deveria ser" é o traço moderno
            de seu pensamento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Príncipe</span>
        <h2>2. "O Príncipe" (1513): Realismo Político</h2>
        <p>
          <em>O Príncipe</em> (<em>Il Principe</em>) foi escrito em 1513 e dedicado a Lorenzo de Médici,
          na esperança de conseguir um cargo na nova administração. É um manual de governo para príncipes
          — como conquistar e manter o poder em um mundo dominado pela força, a fortuna e a necessidade.
        </p>
        <p>
          As teses centrais de <em>O Príncipe</em>:
        </p>
        <ul>
          <li>
            <strong>Realismo:</strong> é mais seguro para o príncipe ser temido do que amado, se não
            puder ser os dois ao mesmo tempo.
          </li>
          <li>
            <strong>Necessidade:</strong> o príncipe deve ser capaz de agir com crueldade quando
            necessário — não por vontade, mas por necessidade política.
          </li>
          <li>
            <strong>O leão e a raposa:</strong> o príncipe deve combinar a força do leão (para enfrentar
            os lobos) com a astúcia da raposa (para reconhecer armadilhas).
          </li>
          <li>
            <strong>Aparência vs. realidade:</strong> o príncipe deve parecer virtuoso (misericordioso,
            leal, humano, sincero, religioso), mesmo que na prática precise agir de outra forma quando
            a necessidade exigir.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Virtù e Fortuna</span>
        <h2>3. Virtù e Fortuna: Os Dois Pilares do Sucesso Político</h2>
        <p>
          Dois conceitos centrais estruturam o pensamento político de Maquiavel:
        </p>
        <ul>
          <li>
            <strong>Virtù:</strong> não é a virtude moral cristã, mas a capacidade e energia política
            do príncipe — coragem, decisão, inteligência, capacidade de adaptação. É tudo que depende
            do próprio agente. Um príncipe com muita virtù conquista e mantém o poder mesmo em condições
            adversas.
          </li>
          <li>
            <strong>Fortuna:</strong> o acaso, as circunstâncias, o destino — tudo que não depende
            do agente. Para Maquiavel, a Fortuna governa metade das ações humanas; a outra metade
            depende da virtù.
          </li>
        </ul>
        <p>
          Maquiavel compara a Fortuna a um rio impetuoso: um príncipe com virtù constrói diques e
          canais antes das cheias para controlá-la. A metáfora célebre: "A Fortuna é mulher e é
          preciso, para subjugá-la, espancá-la e maltratá-la."
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Diagrama virtù × fortuna × necessidade">
            <rect x="10" y="10" width="460" height="180" rx="10" fill="#fef9f0" stroke="#b45309" strokeWidth="1.5"/>
            <text x="240" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Virtù × Fortuna: O Sucesso Político em Maquiavel</text>
            {/* Virtù */}
            <ellipse cx="140" cy="115" rx="95" ry="55" fill="#fed7aa" stroke="#ea580c" strokeWidth="2"/>
            <text x="140" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c2410c">Virtù</text>
            <text x="140" y="122" textAnchor="middle" fontSize="10" fill="#7c2d12">Capacidade,</text>
            <text x="140" y="137" textAnchor="middle" fontSize="10" fill="#7c2d12">coragem, decisão</text>
            {/* Fortuna */}
            <ellipse cx="340" cy="115" rx="95" ry="55" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            <text x="340" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Fortuna</text>
            <text x="340" y="122" textAnchor="middle" fontSize="10" fill="#1e3a8a">Acaso,</text>
            <text x="340" y="137" textAnchor="middle" fontSize="10" fill="#1e3a8a">circunstâncias</text>
            {/* Interseção */}
            <text x="240" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4d7c0f">SUCESSO</text>
            <text x="240" y="124" textAnchor="middle" fontSize="10" fill="#365314">POLÍTICO</text>
          </svg>
          <figcaption>O sucesso político depende de virtù (capacidade do agente) aliada à fortuna (circunstâncias favoráveis).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética e Política</span>
        <h2>4. A Separação entre Ética e Política</h2>
        <p>
          A tese mais polêmica de Maquiavel — e a que lhe deu má fama — é a separação entre ética
          e política. Mas é preciso entendê-la corretamente:
        </p>
        <ul>
          <li>
            Maquiavel não diz que o príncipe deve ser cruel por crueldade. Diz que, em certas
            circunstâncias, a crueldade é <em>politicamente necessária</em> para garantir a ordem,
            a segurança e o bem do Estado.
          </li>
          <li>
            A famosa frase "os fins justificam os meios" não aparece literalmente em Maquiavel,
            mas resume sua lógica: se o fim é a estabilidade e a unidade do Estado, meios que
            seriam condenáveis moralmente podem ser justificados politicamente.
          </li>
          <li>
            Maquiavel distingue dois tipos de moralidade: a <em>moral cristã</em> (humildade,
            piedade, fuga do conflito) e a <em>moral pagã</em> (coragem, glória, grandeza cívica).
            Para ele, a moral cristã tornava os homens fracos para a vida política.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Maquiavelismo</h3>
          <p>
            O termo "maquiavelismo" tornou-se sinônimo de política sem escrúpulos, manipulação e
            hipocrisia. Mas filósofos como Gramsci e Berlin defendem que Maquiavel foi mal
            compreendido: ele não defendia a maldade, mas a <em>realidade</em> do poder. Um príncipe
            inteiramente virtuoso numa Itália de lobos políticos seria logo destruído.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Republicano</span>
        <h2>5. "Discursos sobre Tito Lívio": O Maquiavel Republicano</h2>
        <p>
          A imagem de Maquiavel como defensor do despotismo é incompleta. Em seus
          <em> Discursos sobre a Primeira Década de Tito Lívio</em>, escrito sobre a história de Roma,
          ele defende a <strong>república</strong> como a melhor forma de governo:
        </p>
        <ul>
          <li>
            A república é superior à monarquia porque o povo coletivo é mais prudente e constante
            do que qualquer príncipe individual.
          </li>
          <li>
            A diversidade de interesses e o conflito entre patrícios e plebeus em Roma foram
            fontes de vigor e liberdade, não de fraqueza.
          </li>
          <li>
            A participação cívica, a virtù dos cidadãos e as instituições sólidas são a base
            de um Estado duradouro.
          </li>
        </ul>
        <p>
          Maquiavel era, portanto, um <strong>republicano</strong> que escreveu <em>O Príncipe</em>
          para um momento de crise em que um príncipe forte era necessário para unificar a Itália.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Modelo do Príncipe</span>
        <h2>6. César Bórgia: O Modelo do Príncipe Eficaz</h2>
        <p>
          Em <em>O Príncipe</em>, Maquiavel analisa casos históricos concretos para ilustrar seus
          princípios. O exemplo mais celebrado é <strong>César Bórgia</strong> (Duque Valentino),
          filho do papa Alexandre VI, que entre 1499 e 1503 conquistou a Romanha e construiu um
          pequeno Império na Itália central.
        </p>
        <p>
          O que Maquiavel admirava em Bórgia:
        </p>
        <ul>
          <li>
            <strong>Uso calculado da crueldade:</strong> Bórgia nomeou Ramiro de Orco para impor
            a ordem na Romagna com crueldade. Quando a tarefa foi cumprida, mandou executar
            Ramiro — e expôs o corpo na praça para demonstrar que a crueldade não era sua, mas
            do instrumento. Maquiavel aprova: usou a crueldade com inteligência e a eliminou
            quando deixou de ser necessária.
          </li>
          <li>
            <strong>Eliminação de rivais:</strong> Bórgia convocou seus inimigos para uma reunião
            em Sinigaglia (1502) e os mandou matar. Para Maquiavel, foi golpe de virtù — rapidez
            e decisão que eliminaram uma ameaça antes que ela agisse.
          </li>
          <li>
            <strong>A queda por má fortuna:</strong> Bórgia falhou não por falta de virtù, mas
            porque o acidente adoeceu seu pai ao mesmo tempo que ele próprio estava enfermo —
            a fortuna lhe virou as costas no momento decisivo.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Por que Bórgia e não um monarca cristão?</h3>
          <p>
            Maquiavel escolheu Bórgia — e não Luís XII da França ou Fernando de Aragão, reis
            "virtuosos" — como modelo porque Bórgia agiu com racionalidade política pura, sem
            hipocrisias morais. Para Maquiavel, esse realismo sem véus era mais honesto e mais
            eficaz do que a simulada virtude cristã dos grandes reis europeus.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>7. Legado de Maquiavel: Da Ciência Política à Filosofia Contemporânea</h2>
        <p>
          O impacto de Maquiavel na história do pensamento político é imenso e controverso:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Pensador / Corrente</th><th>Relação com Maquiavel</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Thomas Hobbes</strong></td>
                <td>Desenvolveu o realismo político e a ideia de Estado forte para garantir a ordem</td>
              </tr>
              <tr>
                <td><strong>Jean Bodin</strong></td>
                <td>Elaborou a teoria da soberania absoluta, diálogo com Maquiavel</td>
              </tr>
              <tr>
                <td><strong>Spinoza</strong></td>
                <td>Apreciou Maquiavel como analista realista do poder, não como cínico</td>
              </tr>
              <tr>
                <td><strong>Rousseau e Kant</strong></td>
                <td>Críticos do realismo maquiaveliano; defenderam a ética como base da política</td>
              </tr>
              <tr>
                <td><strong>Antonio Gramsci</strong></td>
                <td>Reabilitou Maquiavel como teórico do Estado e da hegemonia; "O Moderno Príncipe" seria o partido político</td>
              </tr>
              <tr>
                <td><strong>Isaiah Berlin</strong></td>
                <td>Interpretou Maquiavel como o descobridor do pluralismo de valores — não como cínico</td>
              </tr>
              <tr>
                <td><strong>Ciência Política moderna</strong></td>
                <td>Realismo de Morgenthau e Waltz nas Relações Internacionais tem raízes em Maquiavel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM em foco</span>
        <h2>8. Maquiavel no ENEM: Abordagens Típicas e Armadilhas</h2>
        <p>
          O ENEM costuma abordar Maquiavel de três maneiras principais:
        </p>
        <ul>
          <li>
            <strong>Separação entre ética e política:</strong> questões que pedem para identificar
            a posição de Maquiavel sobre a moral no contexto político. Cuidado: ele não defende
            que "tudo é permitido" — defende que a necessidade política pode exigir ações que
            a moral cristã proibiria.
          </li>
          <li>
            <strong>Virtù e fortuna:</strong> questões que pedem para identificar esses dois
            conceitos e como eles se relacionam ao sucesso político.
          </li>
          <li>
            <strong>Método empírico:</strong> questões que pedem para identificar o que há de
            "moderno" em Maquiavel — a análise empírica do poder, em oposição ao moralismo
            medieval.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Armadilhas frequentes sobre Maquiavel no ENEM</h3>
          <p>
            1. <strong>Não confundir virtù com virtude moral</strong> — são conceitos diferentes.<br/>
            2. <strong>Não atribuir a frase "os fins justificam os meios" literalmente a Maquiavel</strong>
            — ele nunca a escreveu nessa forma.<br/>
            3. <strong>Não esquecer o Maquiavel republicano</strong> dos Discursos — ele não era apenas
            defensor do príncipe absoluto.<br/>
            4. <strong>Contextualizar historicamente</strong>: Maquiavel escrevia para a Itália
            fragmentada do séc. XVI, não para qualquer situação política.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>👑</span>
            <h3>O Príncipe</h3>
            <p>Manual de governo: como conquistar e manter o poder. Realismo político sobre moralismo.</p>
          </div>
          <div className="math-card">
            <span>🦁</span>
            <h3>Virtù</h3>
            <p>Capacidade política do agente: coragem, decisão, adaptabilidade. Metade do sucesso.</p>
          </div>
          <div className="math-card">
            <span>🎲</span>
            <h3>Fortuna</h3>
            <p>O acaso e as circunstâncias. A virtù constrói diques para controlar a fortuna.</p>
          </div>
          <div className="math-card">
            <span>⚔️</span>
            <h3>Separação Ética/Política</h3>
            <p>A política tem sua própria lógica. A necessidade pode exigir o que a moral proíbe.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Republicanismo</h3>
            <p>Nos Discursos, defende a república como forma superior de governo, com virtù cívica.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Ciência Política</h3>
            <p>Método empírico: analisa o poder como é, não como deveria ser. Fundador da Ciência Política.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Virtù e Fortuna"
          statement={<p>No pensamento de Maquiavel, o conceito de "virtù" se refere a:</p>}
          options={[
            { letter: "a", text: "A capacidade política do príncipe — coragem, decisão, astúcia e adaptabilidade — que lhe permite conquistar e manter o poder.", correct: true },
            { letter: "b", text: "As virtudes morais cristãs como a humildade, a piedade e a misericórdia, que Maquiavel considerava essenciais ao bom governante." },
            { letter: "c", text: "O acaso e as circunstâncias externas que determinam o sucesso ou fracasso do príncipe." },
            { letter: "d", text: "A virtude intelectual filosófica definida por Aristóteles como contemplação da verdade." },
          ]}
          resolution={<p>A <em>virtù</em> de Maquiavel não é a virtude moral cristã. É a capacidade política — energia, decisão, inteligência e força — que o príncipe usa para conquistar e manter o poder. É tudo que depende do próprio agente, em oposição à <em>fortuna</em> (o acaso). Um príncipe com muita virtù consegue se adaptar às circunstâncias e superar a adversidade.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. A Separação Ética-Política"
          statement={<p>Maquiavel afirma que o príncipe deve saber quando agir de forma que a moral consideraria repreensível. Qual é a justificativa dessa posição?</p>}
          options={[
            { letter: "a", text: "A política tem sua própria lógica de necessidade: em certas circunstâncias, a crueldade calculada pode ser preferível à bondade que gera desordem e ruína do Estado.", correct: true },
            { letter: "b", text: "Maquiavel defende que a moralidade não existe — tudo é permitido ao governante que tem poder suficiente." },
            { letter: "c", text: "O príncipe deve seguir sempre a moral cristã, apenas adaptando-a às realidades políticas de cada situação." },
            { letter: "d", text: "A crueldade é sempre a melhor política, independentemente das circunstâncias, pois garante o medo dos súditos." },
          ]}
          resolution={<p>Maquiavel não nega a moral — reconhece que o príncipe virtuoso (moralmente) seria admirável. Mas afirma que um príncipe que só segue a moral em um mundo de príncipes sem escrúpulos será destruído. Quando a necessidade exige, o príncipe deve agir com "crueldade bem usada" — calculada, temporária e visando ao bem do Estado. A crueldade usada uma vez para estabelecer a ordem é preferível à bondade que gera desordem prolongada.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Maquiavel Republicano"
          statement={<p>Embora famoso por "O Príncipe", Maquiavel também escreveu os "Discursos sobre Tito Lívio", onde defende a república. Que argumento ele usa para defender a superioridade da república?</p>}
          options={[
            { letter: "a", text: "O povo coletivo é mais prudente e constante do que qualquer príncipe individual; o conflito entre grupos é fonte de vigor e liberdade, não de fraqueza.", correct: true },
            { letter: "b", text: "A república é mais fácil de governar porque não há resistência popular às decisões coletivas." },
            { letter: "c", text: "A república permite ao príncipe escapar de responsabilidades, atribuindo-as a órgãos coletivos." },
            { letter: "d", text: "A república é superior porque elimina os conflitos políticos, garantindo paz e harmonia sociais." },
          ]}
          resolution={<p>Nos Discursos, Maquiavel defende que o povo, como coletivo, é mais prudente do que qualquer governante individual — erra menos e é mais constante. Além disso, ele vê o conflito entre patrícios e plebeus em Roma não como fraqueza, mas como fonte de energia cívica: a competição entre grupos mantém a república viva e vigilante. Esse republicanismo de Maquiavel influenciou pensadores como Gramsci e Hannah Arendt.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Maquiavel e a Política Contemporânea"
          statement={<p>A afirmação de que "os fins justificam os meios" — frequentemente atribuída a Maquiavel — é usada hoje para criticar governantes que usam métodos ilegais ou antiéticos para atingir objetivos políticos. Com base no pensamento de Maquiavel, é correto afirmar que:</p>}
          options={[
            { letter: "a", text: "Maquiavel admitia o uso de meios questionáveis apenas quando necessário para a estabilidade e o bem do Estado, não como licença para qualquer ação arbitrária.", correct: true },
            { letter: "b", text: "Maquiavel defendia que qualquer meio é sempre justificado se o governante acreditar que seu objetivo é bom." },
            { letter: "c", text: "Maquiavel era totalmente contrário ao uso de qualquer meio duvidoso, defendendo que o príncipe deve sempre agir com virtude moral." },
            { letter: "d", text: "Maquiavel foi o primeiro a propor que a democracia é o único sistema capaz de garantir que os fins justifiquem os meios." },
          ]}
          resolution={<p>A frase "os fins justificam os meios" é uma simplificação do pensamento de Maquiavel. Ele admitia que o príncipe pode usar meios moralmente questionáveis quando a <em>necessidade</em> política assim exige — mas isso não é uma licença para qualquer ação. O uso da crueldade deve ser calculado, temporário e visando à estabilidade do Estado e ao bem dos súditos. Um governante que usa meios cruéis por prazer próprio ou por ambição pessoal não segue Maquiavel.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) O Leão e a Raposa"
          statement={<p>Maquiavel afirma que o príncipe deve ser ao mesmo tempo leão e raposa: "É preciso ser raposa para conhecer as armadilhas e leão para aterrorizar os lobos." Essa metáfora expressa que o exercício do poder político exige:</p>}
          options={[
            { letter: "a", text: "A combinação de força (para enfrentar os adversários) com astúcia (para reconhecer e evitar armadilhas e manipulações).", correct: true },
            { letter: "b", text: "Que o príncipe seja feroz e cruel com todos, sem distinção entre amigos e inimigos." },
            { letter: "c", text: "Que o príncipe seja pacifista como a raposa e evite conflitos, usando apenas a inteligência." },
            { letter: "d", text: "Que a única forma legítima de governo é aquela que combina o poder militar com a autoridade religiosa." },
          ]}
          resolution={<p>A metáfora do leão e da raposa é uma das mais célebres de Maquiavel. O <strong>leão</strong> representa a força bruta — necessária para enfrentar adversários e aterrorizar potenciais ameaças. A <strong>raposa</strong> representa a astúcia — necessária para reconhecer traições, armadilhas e enganos que a força bruta não pode desfazer. O príncipe eficaz combina as duas capacidades, usando cada uma quando a situação exige. Isso ilustra o realismo político maquiaveliano.</p>}
        />
      </section>
    </article>
  );
}
