"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 16</span>
          <h1>Renascimento, Humanismo e a Valorização da Razão</h1>
          <p>
            O Renascimento (séculos XIV–XVI) foi um dos movimentos culturais mais importantes da história
            ocidental. Nascido nas cidades italianas e espalhando-se pela Europa, celebrou o ser humano,
            a natureza, a ciência e as artes, rompendo com a visão de mundo medieval e lançando as bases
            da Modernidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Renascimento: Contexto e Características Gerais</h2>
        <p>
          O termo <strong>Renascimento</strong> (<em>Renaissance</em>, em francês) foi cunhado pelo
          historiador da arte Giorgio Vasari para descrever o florescimento cultural italiano dos séculos
          XIV–XVI. O movimento surgiu primeiro nas cidades-estado italianas — Florença, Veneza, Milão —
          onde uma próspera burguesia mercantil financiava artistas e intelectuais.
        </p>
        <p>
          Suas características centrais:
        </p>
        <ul>
          <li><strong>Retorno aos clássicos</strong> greco-romanos como modelos de excelência.</li>
          <li><strong>Antropocentrismo:</strong> o ser humano como medida de todas as coisas.</li>
          <li><strong>Valorização da razão</strong> e da experiência sobre a autoridade religiosa.</li>
          <li><strong>Naturalismo</strong> na arte: representação realista do corpo humano e da natureza.</li>
          <li><strong>Individualismo:</strong> o artista como gênio criador, não mais artesão anônimo.</li>
          <li><strong>Laicismo:</strong> crescente separação entre esfera religiosa e secular.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>O papel de Florença e os Médici</h3>
          <p>
            A família Médici — banqueiros que governavam Florença — foi o principal mecenato do
            Renascimento. Cosimo de Médici fundou a Academia Platônica; Lourenço, o Magnífico,
            patrocinou Botticelli, Michelangelo e Leonardo da Vinci. A riqueza comercial italiana
            foi o combustível do Renascimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Humanismo</span>
        <h2>2. O Humanismo: O Ser Humano como Centro</h2>
        <p>
          O <strong>Humanismo</strong> foi a corrente intelectual central do Renascimento. Os humanistas
          (<em>umanisti</em>) eram estudiosos dedicados às <em>Humanidades</em> (<em>studia humanitatis</em>):
          gramática, retórica, poesia, história e filosofia moral, com base nos textos clássicos greco-romanos.
        </p>
        <p>
          O humanismo renascentista se caracterizava por:
        </p>
        <ul>
          <li>
            <strong>Dignidade humana:</strong> o ser humano é dotado de razão, liberdade e criatividade,
            capaz de moldar seu próprio destino.
          </li>
          <li>
            <strong>Educação:</strong> a <em>paideia</em> clássica — formação integral do ser humano —
            era o ideal educativo.
          </li>
          <li>
            <strong>Laicidade:</strong> o interesse pelo mundo terreno e pela realização humana neste
            mundo, não apenas na vida eterna.
          </li>
          <li>
            <strong>Crítica textual:</strong> Lorenzo Valla (1407–1457) demonstrou, por análise filológica,
            que a "Doação de Constantino" era um documento falso — um golpe devastador na autoridade
            papal.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pico della Mirandola</span>
        <h2>3. Pico della Mirandola: "Discurso sobre a Dignidade do Homem"</h2>
        <p>
          <strong>Giovanni Pico della Mirandola</strong> (1463–1494) escreveu o texto que é considerado
          o "manifesto do Humanismo": o <em>Discurso sobre a Dignidade do Homem</em> (<em>Oratio de
          Hominis Dignitate</em>).
        </p>
        <p>
          Sua tese central: Deus criou o ser humano sem natureza fixa e o colocou no centro do universo
          dizendo: "Te coloquei no centro do mundo para que daí pudesses ver melhor tudo o que existe.
          Não te fiz celestial nem terreno, mortal ou imortal, para que tu mesmo, como árbitro soberano,
          te modelasses na forma que preferires."
        </p>
        <p>
          Isso significa que o ser humano é o único ser que pode escolher sua própria natureza: pode
          tornar-se animal (se seguir as paixões) ou divino (se exercer a razão e a contemplação).
          A <strong>liberdade</strong> e a <strong>dignidade</strong> humanas derivam dessa capacidade
          de autodeterminação.
        </p>
        <div className="lesson-highlight">
          <h3>Relevância para o ENEM</h3>
          <p>
            O texto de Pico é frequentemente citado no ENEM como exemplo do humanismo renascentista
            e da valorização da dignidade e da liberdade humanas. A ideia de que o ser humano tem uma
            natureza aberta e livre que o distingue de todos os outros seres antecipa discussões modernas
            sobre autonomia e direitos humanos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revolução Científica</span>
        <h2>4. Copérnico e a Revolução Científica</h2>
        <p>
          O Renascimento também foi o berço da <strong>Revolução Científica</strong>:
        </p>
        <ul>
          <li>
            <strong>Nicolau Copérnico (1473–1543):</strong> propôs o <em>heliocentrismo</em> — a Terra
            gira ao redor do Sol, não o contrário. Sua obra <em>De Revolutionibus Orbium Coelestium</em>
            (1543) derrubou o geocentrismo de Ptolomeu, aceito pela Igreja.
          </li>
          <li>
            <strong>Galileu Galilei (1564–1642):</strong> confirmou o heliocentrismo com o telescópio;
            defendeu que a linguagem da natureza é a matemática; foi condenado pela Inquisição.
          </li>
          <li>
            <strong>Johannes Kepler (1571–1630):</strong> descobriu que as órbitas planetárias são
            elípticas, não circulares.
          </li>
          <li>
            <strong>Isaac Newton (1643–1727):</strong> unificou a física terrestre e celeste com a Lei
            da Gravitação Universal — o ápice da Revolução Científica.
          </li>
        </ul>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Geocentrismo vs. Heliocentrismo">
            <rect x="10" y="10" width="460" height="180" rx="10" fill="#fafafa" stroke="#374151" strokeWidth="1.5"/>
            <text x="240" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827">Geocentrismo → Heliocentrismo</text>
            {/* Geocentrismo */}
            <text x="105" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6b7280">Ptolemeu (Medieval)</text>
            <circle cx="105" cy="115" r="20" fill="#3b82f6"/>
            <text x="105" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Terra</text>
            <circle cx="105" cy="115" r="50" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3"/>
            <circle cx="155" cy="115" r="10" fill="#fbbf24"/>
            <text x="155" y="119" textAnchor="middle" fontSize="8" fill="#111827">Sol</text>
            <text x="105" y="175" textAnchor="middle" fontSize="9" fill="#6b7280">Terra no centro</text>
            {/* Seta */}
            <text x="240" y="120" textAnchor="middle" fontSize="20" fill="#374151">→</text>
            {/* Heliocentrismo */}
            <text x="370" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">Copérnico (Moderno)</text>
            <circle cx="370" cy="115" r="18" fill="#fbbf24"/>
            <text x="370" y="119" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111827">Sol</text>
            <circle cx="370" cy="115" r="50" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3"/>
            <circle cx="420" cy="115" r="10" fill="#3b82f6"/>
            <text x="420" y="119" textAnchor="middle" fontSize="8" fill="white">Terra</text>
            <text x="370" y="175" textAnchor="middle" fontSize="9" fill="#16a34a">Sol no centro</text>
          </svg>
          <figcaption>A Revolução Copernicana deslocou a Terra do centro do universo, abalando a cosmologia medieval.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arte e Ciência</span>
        <h2>5. Leonardo da Vinci: Arte e Ciência Unidas</h2>
        <p>
          <strong>Leonardo da Vinci</strong> (1452–1519) encarna o ideal renascentista do <em>uomo
          universale</em> — o homem universal, capaz de dominar todas as áreas do saber. Foi pintor
          (Mona Lisa, Última Ceia), escultor, arquiteto, engenheiro, anatomista, botânico, geólogo
          e filósofo.
        </p>
        <p>
          Para Leonardo, arte e ciência eram inseparáveis: a pintura requeria o conhecimento profundo
          da anatomia humana, da perspectiva matemática, das leis da óptica e da física. Seus
          cadernos de anotações (mais de 13 000 páginas) contêm projetos de máquinas voadoras,
          submarinos, turbinas hidráulicas — séculos antes de sua invenção.
        </p>
        <div className="lesson-highlight">
          <h3>O Homem Vitruviano</h3>
          <p>
            O desenho do <em>Homem Vitruviano</em> de Leonardo (1490) representa o ser humano inscrito
            em um círculo e um quadrado — as formas perfeitas. É uma metáfora do humanismo: o ser
            humano como medida e síntese do universo, unindo o divino (círculo) e o terreno (quadrado).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Empirismo Inicial</span>
        <h2>6. Francis Bacon: Empirismo e o "Novum Organum"</h2>
        <p>
          <strong>Francis Bacon</strong> (1561–1626) foi o filósofo que sistematizou o método empírico
          como alternativa ao método escolástico. Sua obra <em>Novum Organum</em> (1620) propôs uma
          reforma do conhecimento baseada em:
        </p>
        <ul>
          <li>
            <strong>Indução:</strong> partir da observação de casos particulares para chegar a leis
            gerais — o caminho inverso da dedução aristotélica.
          </li>
          <li>
            <strong>Crítica aos ídolos:</strong> Bacon identificou quatro tipos de preconceito que
            distorcem o conhecimento humano:
            <ul>
              <li><em>Ídolos da tribo:</em> tendências naturais da mente humana (confirmação de crenças).</li>
              <li><em>Ídolos da caverna:</em> preconceitos individuais (educação, temperamento).</li>
              <li><em>Ídolos do mercado:</em> confusões da linguagem e do uso comum das palavras.</li>
              <li><em>Ídolos do teatro:</em> doutrinas filosóficas falsas aceitas como verdades.</li>
            </ul>
          </li>
          <li>
            <strong>"Saber é poder":</strong> o conhecimento científico deve servir ao domínio da
            natureza e ao bem-estar humano.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Humanismo Cívico e Político</span>
        <h2>7. O humanismo cívico, Erasmo e a crítica ao poder</h2>
        <p>
          O humanismo renascentista não foi apenas um movimento filosófico e artístico — teve
          uma dimensão política e crítica profunda. Dois grandes humanistas do período expressam
          essa dimensão de formas complementares:
        </p>
        <p>
          <strong>Erasmo de Roterdã</strong> (1469–1536), o maior humanista do norte europeu,
          escreveu o <em>Elogio da Loucura</em> (1511) — uma sátira mordaz à hipocrisia da Igreja,
          da nobreza e dos reis. Com ironia socrática, colocou na boca da "Loucura" a crítica
          mais severa ao poder: que o papa, os bispos e os reis são os maiores "loucos" de todos,
          pois governam uma multidão em nome da sabedoria que não possuem.
        </p>
        <ul>
          <li><strong>Erasmo e a paz:</strong> foi um dos primeiros intelectuais europeus a denunciar sistematicamente a guerra como absurda e contrária ao Evangelho.</li>
          <li><strong>Erasmo e a educação:</strong> defendia uma educação humanista para todos — inclusive para as mulheres, ideia radical para a época.</li>
          <li><strong>Tomás Morus (1478–1535):</strong> amigo de Erasmo, escreveu a <em>Utopia</em> (1516), descrevendo uma sociedade ideal sem propriedade privada, com igualdade e tolerância religiosa — o primeiro grande texto de utopismo político moderno.</li>
        </ul>
        <p>
          Esses humanistas políticos mostraram que o Renascimento não foi apenas uma celebração
          da beleza e da razão — foi também um movimento crítico que questionou as estruturas de
          poder da época. Essa dimensão crítica do humanismo é herdeira direta do método socrático.
        </p>
        <div className="lesson-highlight">
          <h3>Humanismo e crítica social</h3>
          <p>
            A linha que vai de Erasmo e Morus ao Iluminismo do século XVIII (Voltaire, Rousseau)
            e à filosofia crítica do século XX (Escola de Frankfurt) é contínua: intelectuais
            que usam a razão e a cultura para criticar o poder, a injustiça e a hipocrisia das
            instituições. O humanismo não é apenas otimismo — é também inconformismo crítico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Renascimento e ENEM</span>
        <h2>8. Como o Renascimento aparece no ENEM: autores e abordagens típicas</h2>
        <p>
          O ENEM aborda o Renascimento frequentemente, tanto em Ciências Humanas (Filosofia e
          História) quanto indiretamente em Linguagens (arte e literatura). Entender as questões
          mais recorrentes ajuda a gabaritar:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Autor/Conceito central</th>
                <th>O que o ENEM costuma cobrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dignidade humana</td>
                <td>Pico della Mirandola</td>
                <td>A liberdade humana como autodeterminação; conexão com direitos humanos</td>
              </tr>
              <tr>
                <td>Método científico</td>
                <td>Francis Bacon / Galileu</td>
                <td>Indução vs. dedução; observação; conflito com a Igreja</td>
              </tr>
              <tr>
                <td>Arte e visão de mundo</td>
                <td>Leonardo da Vinci</td>
                <td>Como a arte renascentista expressa o antropocentrismo</td>
              </tr>
              <tr>
                <td>Crítica ao poder</td>
                <td>Erasmo / Morus</td>
                <td>Sátira social; utopia; humanismo crítico</td>
              </tr>
              <tr>
                <td>Cosmologia</td>
                <td>Copérnico / Galileu</td>
                <td>Ruptura com o geocentrismo; conflito ciência/religião</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Uma dica fundamental: o ENEM raramente cobra apenas fatos históricos sobre o Renascimento.
          Ele pede que você <strong>interprete textos filosóficos</strong> renascentistas ou os
          relacione com fenômenos contemporâneos. Pico della Mirandola e a dignidade humana,
          Bacon e o método científico, Erasmo e a crítica às instituições — esses são os textos
          que mais aparecem como base das questões.
        </p>
        <div className="lesson-highlight">
          <h3>Palavra-chave para o ENEM</h3>
          <p>
            Se uma questão mencionar <em>dignidade humana, liberdade, anthropocentrismo, uomo universale,
            indução, ídolos, heliocentrismo</em> ou <em>utopia</em>, estamos no território do Renascimento.
            Identifique o autor e o conceito específico — a alternativa correta quase sempre é a que
            conecta corretamente o texto ao seu contexto histórico-filosófico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🌅</span>
            <h3>Renascimento</h3>
            <p>Sécs. XIV–XVI; Itália; retorno aos clássicos; antropocentrismo; naturalismo na arte.</p>
          </div>
          <div className="math-card">
            <span>🧍</span>
            <h3>Humanismo</h3>
            <p>Studia humanitatis; dignidade humana; liberdade; educação integral; laicidade.</p>
          </div>
          <div className="math-card">
            <span>🗣️</span>
            <h3>Pico della Mirandola</h3>
            <p>Ser humano como ser aberto e livre para moldar sua própria natureza. Manifesto do humanismo.</p>
          </div>
          <div className="math-card">
            <span>☀️</span>
            <h3>Revolução Científica</h3>
            <p>Copérnico (heliocentrismo), Galileu, Kepler, Newton: nova imagem do cosmos.</p>
          </div>
          <div className="math-card">
            <span>🎨</span>
            <h3>Leonardo da Vinci</h3>
            <p>Uomo universale: arte e ciência unidas. Homem Vitruviano como símbolo do humanismo.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Francis Bacon</h3>
            <p>Novum Organum; método indutivo; crítica aos ídolos; "saber é poder".</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Humanismo Renascentista"
          statement={<p>O humanismo renascentista, como movimento intelectual, se caracterizava principalmente por:</p>}
          options={[
            { letter: "a", text: "Valorizar o ser humano, sua razão e dignidade, tomando os clássicos greco-romanos como modelo e celebrando a vida terrena.", correct: true },
            { letter: "b", text: "Reafirmar os dogmas da Igreja Católica e a subordinação da razão à fé, contra os avanços científicos." },
            { letter: "c", text: "Negar qualquer valor à tradição clássica greco-romana, buscando uma cultura inteiramente nova." },
            { letter: "d", text: "Limitar-se às artes plásticas, sem relação com a filosofia, a ciência ou a política." },
          ]}
          resolution={<p>O humanismo renascentista se caracterizou pela valorização do ser humano (antropocentrismo), da razão, da dignidade humana e da vida terrena. Os humanistas retornavam aos textos clássicos gregos e romanos não para imitá-los cegamente, mas para aprender com eles e criar uma cultura que celebrasse a criatividade e a liberdade humanas.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Pico della Mirandola e a Liberdade Humana"
          statement={<p>No "Discurso sobre a Dignidade do Homem", Pico della Mirandola afirma que Deus não deu ao ser humano uma natureza fixa. Qual é a implicação filosófica central dessa afirmação?</p>}
          options={[
            { letter: "a", text: "O ser humano é o único ser dotado de liberdade radical para moldar sua própria natureza e destino.", correct: true },
            { letter: "b", text: "O ser humano é inferior aos anjos e animais, pois eles têm natureza definida e ele não." },
            { letter: "c", text: "A falta de natureza fixa implica que o ser humano não tem responsabilidade moral." },
            { letter: "d", text: "Pico nega a existência de Deus ao afirmar que o ser humano cria a si mesmo." },
          ]}
          resolution={<p>Para Pico, a ausência de natureza fixa é a maior dignidade humana: enquanto plantas, animais e anjos têm uma essência determinada, o ser humano pode escolher o que ser. Pode rebaixar-se ao nível animal ou elevar-se ao divino pela razão e pela contemplação. Essa <strong>liberdade radical</strong> é a base da dignidade humana — tema central do humanismo e da filosofia moderna.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Os Ídolos de Bacon"
          statement={<p>Francis Bacon identificou quatro tipos de "ídolos" que distorcem o conhecimento humano. Os "ídolos do mercado" se referem a:</p>}
          options={[
            { letter: "a", text: "Confusões geradas pelo uso impreciso da linguagem e das palavras no pensamento e na comunicação.", correct: true },
            { letter: "b", text: "Preconceitos individuais ligados à educação, temperamento e experiência pessoal de cada pensador." },
            { letter: "c", text: "Tendências naturais da mente humana, como a tendência a confirmar crenças já formadas." },
            { letter: "d", text: "Doutrinas filosóficas falsas, aceitas por autoridade como se fossem verdades demonstradas." },
          ]}
          resolution={<p>Os quatro ídolos de Bacon: <strong>Ídolos da Tribo</strong> = tendências da mente humana em geral; <strong>Ídolos da Caverna</strong> = preconceitos individuais; <strong>Ídolos do Mercado</strong> = problemas da linguagem (o "mercado" é o espaço de troca de palavras — quando as palavras são imprecisas ou mal usadas, distorcem o pensamento); <strong>Ídolos do Teatro</strong> = doutrinas filosóficas falsas aceitas por autoridade (como peças de teatro, são ficções convincentes).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Galileu e a Autoridade da Igreja"
          statement={<p>Galileu Galilei foi condenado pela Inquisição em 1633 por defender o heliocentrismo copernicano. Esse episódio ilustra um conflito central do período moderno, que é:</p>}
          options={[
            { letter: "a", text: "O conflito entre a autoridade religiosa e a autonomia da razão científica na produção do conhecimento.", correct: true },
            { letter: "b", text: "O conflito entre Itália e Espanha pelo controle da produção científica europeia." },
            { letter: "c", text: "A disputa entre ciências naturais e ciências humanas sobre qual campo tem mais autoridade." },
            { letter: "d", text: "O conflito entre empirismo e racionalismo como métodos filosóficos incompatíveis." },
          ]}
          resolution={<p>O caso Galileu é um dos símbolos mais poderosos do conflito entre a autoridade religiosa (que definia o que era verdadeiro com base nas Escrituras e em Aristóteles) e a <strong>razão científica autônoma</strong> (que afirmava o direito de investigar e afirmar verdades sobre a natureza baseadas na observação e na matemática, independentemente da aprovação eclesiástica). Esse conflito é estruturante para a filosofia moderna.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Arte Renascentista e Visão de Mundo"
          statement={<p>A arte medieval representava os seres humanos de forma hierárquica e simbólica (maior = mais importante), sem perspectiva realista e sem representação fiel do corpo. A arte renascentista introduziu a perspectiva linear, o realismo anatômico e o retrato individual. Que mudança filosófica essa transformação artística expressa?</p>}
          options={[
            { letter: "a", text: "A valorização do ser humano concreto e do mundo sensível como objetos dignos de representação e estudo.", correct: true },
            { letter: "b", text: "O abandono total da temática religiosa na arte em favor de temas exclusivamente pagãos." },
            { letter: "c", text: "A subordinação da arte à ciência, tornando os artistas meros técnicos de anatomia." },
            { letter: "d", text: "A crença de que a arte deve representar apenas o ideal matemático, sem qualquer referência ao mundo real." },
          ]}
          resolution={<p>A arte renascentista expressa filosoficamente o <strong>antropocentrismo</strong>: o ser humano concreto — com sua anatomia, seus rostos individuais, suas emoções — passa a merecer representação cuidadosa e realista. A perspectiva linear expressa que o ponto de vista do observador humano organiza o espaço. A arte deixa de ser apenas símbolo do sagrado para se tornar também celebração do humano e do natural.</p>}
        />
      </section>
    </article>
  );
}
