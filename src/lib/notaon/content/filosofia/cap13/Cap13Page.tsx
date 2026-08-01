"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 13</span>
          <h1>Filosofia Islâmica e Judaica na Idade Média</h1>
          <p>
            Enquanto a Europa Ocidental atravessava os séculos das trevas, o mundo islâmico e as
            comunidades judaicas preservaram, traduziram e desenvolveram o legado filosófico grego.
            Pensadores como Avicena, Averróis e Maimônides foram fundamentais para que o aristotelismo
            chegasse às universidades medievais cristãs e moldasse o pensamento ocidental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Papel do Islã na Preservação do Saber Grego</h2>
        <p>
          Com a queda do Império Romano do Ocidente (476 d.C.) e as invasões bárbaras, grande parte
          do saber filosófico e científico grego se perdeu na Europa. Contudo, no mundo islâmico —
          especialmente em Bagdá, Córdoba e Cairo — floresceu uma vigorosa atividade de tradução e
          comentário dos textos gregos a partir do século VIII.
        </p>
        <p>
          A <strong>Casa da Sabedoria</strong> (<em>Bayt al-Hikma</em>), fundada em Bagdá pelo califa
          Harum al-Rashid e expandida por al-Mamun no século IX, foi o maior centro de tradução do
          mundo medieval. Obras de Aristóteles, Platão, Galeno, Euclides e Ptolomeu foram vertidas para
          o árabe e comentadas por sábios muçulmanos.
        </p>
        <div className="lesson-highlight">
          <h3>Rota do saber: Grécia → Islã → Europa cristã</h3>
          <p>
            A filosofia grega seguiu o caminho: texto grego → tradução siríaca → tradução árabe →
            comentário islâmico → tradução latina → universidades europeias. Sem esse percurso, a
            Escolástica e a síntese tomista seriam impossíveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Al-Farabi</span>
        <h2>2. Al-Farabi (872–950): O Segundo Mestre</h2>
        <p>
          <strong>Al-Farabi</strong> (Abu Nasr Muhammad al-Farabi) foi chamado de "O Segundo Mestre"
          — sendo Aristóteles o primeiro. Nascido na atual Turquia ou Cazaquistão, estudou em Bagdá e
          Damasco. Sua obra abrangeu lógica, música, política e filosofia.
        </p>
        <p>
          Sua contribuição mais importante foi a <strong>filosofia política</strong>: em <em>A Cidade
          Virtuosa</em>, Al-Farabi descreve uma cidade ideal governada pelo "filósofo-rei", fortemente
          influenciado pela República de Platão. Para ele, o filósofo ideal é também um profeta e
          líder espiritual, capaz de conhecer as verdades filosóficas mais elevadas e traduzi-las em
          leis e costumes acessíveis ao povo.
        </p>
        <ul>
          <li>Defendia a razão como guia do governo e da organização social.</li>
          <li>Distinguia a filosofia (para os intelectuais) da religião (para o povo), ambas expressando a mesma verdade em linguagens diferentes.</li>
          <li>Influenciou profundamente Avicena e toda a tradição islâmica posterior.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Avicena</span>
        <h2>3. Avicena / Ibn Sina (980–1037): Ser, Existência e Mente</h2>
        <p>
          <strong>Avicena</strong> (Ibn Sina) nasceu em Bujara (atual Uzbequistão) e é um dos maiores
          polímatas da história: filósofo, médico, matemático e astrônomo. Sua obra médica,
          <em> Cânon da Medicina</em>, foi usada como manual nas universidades europeias até o século XVII.
        </p>
        <p>
          Em filosofia, sua maior contribuição foi a metafísica do ser:
        </p>
        <ul>
          <li>
            <strong>Distinção essência/existência:</strong> em todo ser contingente, a essência
            (o que a coisa é) é diferente da existência (o fato de existir). Apenas em Deus essência
            e existência são idênticas — Deus existe necessariamente.
          </li>
          <li>
            <strong>O "Homem Voador":</strong> famoso experimento mental — imagine um ser humano
            nascendo no ar, privado de todos os sentidos. Ele ainda pensaria e teria consciência de si.
            Isso prova que a alma (mente) é distinta e independente do corpo — antecipando Descartes.
          </li>
          <li>
            <strong>Emanação:</strong> adotou a cosmologia neoplatônica — o universo emana de Deus
            por uma série de inteligências celestiais.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Avicena e Tomás de Aquino</h3>
          <p>
            A distinção aviceniana entre essência e existência foi adotada e adaptada por Tomás de
            Aquino em sua metafísica cristã. Para Tomás, assim como para Avicena, somente Deus é
            aquele em quem essência e existência se identificam plenamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Averróis</span>
        <h2>4. Averróis / Ibn Rushd (1126–1198): O Grande Comentador</h2>
        <p>
          <strong>Averróis</strong> (Ibn Rushd) nasceu em Córdoba, na Espanha islâmica (<em>Al-Andalus</em>).
          Foi juiz, médico e o maior comentador de Aristóteles da Idade Média. Tão detalhados eram seus
          comentários que na Europa medieval Aristóteles era chamado simplesmente de "O Filósofo" e
          Averróis de "O Comentador".
        </p>
        <p>
          Suas principais ideias e controvérsias:
        </p>
        <ul>
          <li>
            <strong>Fidelidade a Aristóteles:</strong> buscou expurgar dos textos de Aristóteles as
            interpretações neoplatônicas de Avicena, retornando ao aristotelismo "puro".
          </li>
          <li>
            <strong>Intelecto ativo único:</strong> defendia que o intelecto ativo (capaz de conhecer
            os universais) é único e compartilhado por toda a humanidade — o que implica a negação da
            imortalidade da alma individual.
          </li>
          <li>
            <strong>Dupla verdade (mal-interpretada):</strong> embora não tenha proposto literalmente
            uma "dupla verdade", seus seguidores cristãos (averroístas latinos) sustentavam que algo
            pode ser verdadeiro filosoficamente mas falso teologicamente — o que Tomás combateu.
          </li>
          <li>
            <strong>Condenação:</strong> o califa al-Mansur proibiu suas obras; na Europa cristã,
            o averroísmo foi condenado pelo bispo Estêvão Tempier em 1277.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Maimônides</span>
        <h2>5. Maimônides (1138–1204): Razão e Revelação no Judaísmo</h2>
        <p>
          <strong>Moisés Maimônides</strong> (Rabbi Moshe ben Maimon) nasceu em Córdoba e viveu no
          Egito, onde foi médico do sultão Saladino. É o maior filósofo judeu da Idade Média.
        </p>
        <p>
          Sua obra filosófica mais importante é o <em>Guia dos Perplexos</em> (<em>More Nevukhim</em>),
          escrita em árabe e destinada a intelectuais judeus que se sentiam "perplexos" diante do
          aparente conflito entre a filosofia aristotélica e as Escrituras.
        </p>
        <ul>
          <li>
            <strong>Teologia negativa:</strong> não podemos dizer o que Deus é, apenas o que Deus
            não é. Dizer que "Deus é bom" significa apenas que Deus não é mau, não que possua bondade
            como os humanos.
          </li>
          <li>
            <strong>Profecias:</strong> o profeta é um ser de inteligência e imaginação elevadíssimas,
            capaz de receber a emanação divina — integrando filosofia e tradição hebraica.
          </li>
          <li>
            <strong>Os Treze Princípios:</strong> formulou os treze princípios fundamentais da fé
            judaica, ainda hoje recitados nas sinagogas.
          </li>
          <li>
            <strong>Halachá:</strong> sua obra jurídica (<em>Mishnê Torá</em>) sistematizou toda a
            lei judaica.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Influência de Maimônides na Escolástica</h3>
          <p>
            Tomás de Aquino conhecia e citava Maimônides (chamando-o de "Rabbi Moyses"). A teologia
            negativa maimonidesiana influenciou o pensamento tomista sobre os atributos divinos,
            mostrando a profunda interconexão entre as três tradições filosófico-religiosas medievais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>6. Tabela Comparativa dos Grandes Filósofos Medievais Não-Cristãos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Tradição</th>
                <th>Período</th>
                <th>Contribuição Central</th>
                <th>Influência no Ocidente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Al-Farabi</td>
                <td>Islâmica</td>
                <td>872–950</td>
                <td>Cidade virtuosa; filosofia política</td>
                <td>Transmissão de Platão e Aristóteles</td>
              </tr>
              <tr>
                <td>Avicena (Ibn Sina)</td>
                <td>Islâmica</td>
                <td>980–1037</td>
                <td>Essência/existência; Homem Voador</td>
                <td>Metafísica e medicina nas universidades</td>
              </tr>
              <tr>
                <td>Averróis (Ibn Rushd)</td>
                <td>Islâmica</td>
                <td>1126–1198</td>
                <td>Comentários a Aristóteles</td>
                <td>Aristotelismo latino; averroísmo</td>
              </tr>
              <tr>
                <td>Maimônides</td>
                <td>Judaica</td>
                <td>1138–1204</td>
                <td>Guia dos Perplexos; teologia negativa</td>
                <td>Influência em Tomás e escolástica</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Rotas do saber filosófico medieval">
            <rect x="10" y="10" width="500" height="180" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#14532d">Rotas do Saber Filosófico Medieval</text>
            {/* Nós */}
            <ellipse cx="80" cy="100" rx="55" ry="28" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="80" y="97" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Grécia</text>
            <text x="80" y="112" textAnchor="middle" fontSize="10" fill="#166534">Aristóteles, Platão</text>

            <ellipse cx="210" cy="65" rx="60" ry="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="210" y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#713f12">Islã</text>
            <text x="210" y="77" textAnchor="middle" fontSize="10" fill="#713f12">Al-Farabi, Avicena, Averróis</text>

            <ellipse cx="210" cy="145" rx="60" ry="28" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="210" y="142" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">Judaísmo</text>
            <text x="210" y="157" textAnchor="middle" fontSize="10" fill="#1e40af">Maimônides</text>

            <ellipse cx="400" cy="100" rx="80" ry="28" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="400" y="97" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">Europa Cristã</text>
            <text x="400" y="112" textAnchor="middle" fontSize="10" fill="#5b21b6">Escolástica, Tomás de Aquino</text>

            {/* Setas */}
            <line x1="135" y1="88" x2="148" y2="75" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrF)"/>
            <line x1="135" y1="112" x2="148" y2="133" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrF2)"/>
            <line x1="270" y1="65" x2="318" y2="88" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrF3)"/>
            <line x1="270" y1="145" x2="318" y2="118" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrF3)"/>
            <defs>
              <marker id="arrF" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ca8a04"/></marker>
              <marker id="arrF2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
              <marker id="arrF3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>O saber filosófico grego chegou à Europa medieval via tradições islâmica e judaica.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Traduções Árabes</span>
        <h2>7. O papel das traduções árabes na preservação da filosofia grega</h2>
        <p>
          Entre os séculos VIII e XI, a <strong>atividade de tradução árabe</strong> foi o principal
          mecanismo de preservação do saber filosófico e científico da Grécia Antiga. Esse esforço
          coletivo foi organizado, financiado e executado por intelectuais de diferentes tradições
          religiosas — muçulmanos, cristãos nestorianos e judeus — sob o patrocínio dos califas abássidas.
        </p>
        <p>
          A <strong>Escola de Tradutores de Toledo</strong> (século XII), já em território cristão
          reconquistado, foi o segundo grande centro de transmissão: ali, o saber árabe — que continha
          tanto os textos gregos quanto os comentários islâmicos — foi vertido para o latim e chegou
          às nascentes universidades europeias. Figuras como Gerardo de Cremona traduziram mais de
          setenta obras de árabe para o latim.
        </p>
        <ul>
          <li><strong>Obras traduzidas:</strong> Aristóteles (Organon, Física, Metafísica, Ética), Platão, Euclides (Elementos), Ptolomeu (Almagesto), Galeno (medicina).</li>
          <li><strong>Línguas intermediárias:</strong> grego → siríaco → árabe → hebraico → latim.</li>
          <li><strong>Impacto imediato:</strong> a chegada do aristotelismo completo à Europa provocou uma revolução intelectual nas universidades do século XIII — criando o contexto para a Escolástica e a síntese tomista.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Sem as traduções, sem a Escolástica</h3>
          <p>
            Tomás de Aquino não poderia ter escrito a <em>Suma Teológica</em> sem Aristóteles.
            E sem as traduções árabes, Aristóteles estaria perdido para a Europa medieval. A
            filosofia islâmica não foi apenas uma transmissora passiva — ela enriqueceu,
            comentou e problematizou o aristotelismo, entregando à Europa uma herança
            muito mais rica do que a original.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Herança e Renascimento</span>
        <h2>8. Legado da filosofia islâmica e judaica para o Renascimento europeu</h2>
        <p>
          A influência da filosofia árabe e judaica não terminou com a Escolástica. Ela continuou
          moldando o pensamento europeu ao longo do Renascimento (séculos XIV–XVI):
        </p>
        <ul>
          <li>
            <strong>A medicina de Avicena</strong> permaneceu como referência nas universidades europeias
            até o século XVII. O <em>Cânon da Medicina</em> foi manual obrigatório em Paris e Oxford.
          </li>
          <li>
            <strong>O averroísmo</strong> persistiu nas universidades italianas (especialmente Pádua)
            como corrente filosófica secular que separava razão e fé — abrindo espaço para o pensamento
            científico moderno.
          </li>
          <li>
            <strong>A cabala judaica</strong> e o pensamento de Maimônides influenciaram humanistas
            cristãos como Pico della Mirandola, que buscou sintetizar Platão, Aristóteles, hermetismo
            e cabala numa filosofia universal.
          </li>
          <li>
            <strong>O conceito de "luz"</strong> na física óptica árabe (Alhazen/Ibn al-Haytham)
            influenciou diretamente a filosofia da natureza renascentista e a nascente ciência moderna.
          </li>
        </ul>
        <p>
          Do ponto de vista filosófico, o mais importante legado foi a consolidação de um
          vocabulário conceitual — ser, essência, existência, intelecto, potência, ato —
          que se tornou a língua comum da filosofia ocidental até o século XVII.
        </p>
        <div className="lesson-highlight">
          <h3>No ENEM</h3>
          <p>
            O ENEM aborda essa temática em questões sobre a produção do conhecimento medieval,
            a relação entre fé e razão e a contribuição de culturas não-europeias para o desenvolvimento
            do pensamento ocidental. Lembre-se: a Idade Média não foi um período de estagnação —
            foi de intensa produção filosófica e científica, especialmente no mundo islâmico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🕌</span>
            <h3>Casa da Sabedoria</h3>
            <p>Centro de tradução árabe em Bagdá; preservou o saber grego para o Ocidente.</p>
          </div>
          <div className="math-card">
            <span>🏙️</span>
            <h3>Al-Farabi</h3>
            <p>Cidade virtuosa; filósofo-profeta; influenciou a filosofia política islâmica.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Avicena</h3>
            <p>Essência ≠ existência; Homem Voador; medicina; influência direta em Tomás.</p>
          </div>
          <div className="math-card">
            <span>📜</span>
            <h3>Averróis</h3>
            <p>O Comentador de Aristóteles; intelecto ativo único; averroísmo latino.</p>
          </div>
          <div className="math-card">
            <span>✡️</span>
            <h3>Maimônides</h3>
            <p>Guia dos Perplexos; teologia negativa; harmonizou Aristóteles com o judaísmo.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Herança</h3>
            <p>Sem a filosofia islâmica e judaica, a Escolástica cristã seria impossível.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Rota do Saber"
          statement={<p>A filosofia aristotélica chegou às universidades medievais cristãs principalmente por qual caminho?</p>}
          options={[
            { letter: "a", text: "Diretamente da Grécia, pois os textos gregos eram amplamente lidos em latim desde o Império Romano.", correct: false },
            { letter: "b", text: "Por meio de traduções e comentários islâmicos e judaicos, especialmente via Espanha e Sicília.", correct: true },
            { letter: "c", text: "Por intermédio das Cruzadas, que trouxeram manuscritos diretamente de Bizâncio para a França.", correct: false },
            { letter: "d", text: "Pelos mosteiros beneditinos da Irlanda, que copiaram todos os textos gregos durante o século VI.", correct: false },
          ]}
          resolution={<p>A principal rota foi: texto grego → tradução árabe (via Casa da Sabedoria em Bagdá e centros como Córdoba) → tradução latina (especialmente em Toledo, no século XII). Pensadores islâmicos como Averróis e judaicos como Maimônides foram centrais nesse processo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Avicena e a Distinção Essência/Existência"
          statement={<p>Avicena afirmou que, em todos os seres contingentes, essência e existência são distintas. Isso significa que:</p>}
          options={[
            { letter: "a", text: "A essência de algo (o que é) não implica necessariamente sua existência (o fato de existir), exceto em Deus.", correct: true },
            { letter: "b", text: "A existência sempre precede a essência, pois os seres existem antes de serem definidos." },
            { letter: "c", text: "Apenas os seres materiais têm essência; os seres espirituais têm apenas existência." },
            { letter: "d", text: "Todos os seres existem necessariamente, pois a existência é a essência de qualquer coisa." },
          ]}
          resolution={<p>Para Avicena, nos seres contingentes (aqueles que podem ou não existir) a essência — "o que a coisa é" — não contém em si mesma a existência. Um cavalo pode ser concebido sem existir. Somente Deus, o Ser Necessário, tem na própria essência a exigência de existir. Essa distinção foi absorvida por Tomás de Aquino em sua metafísica.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Averróis e o Intelecto Ativo"
          statement={<p>A teoria de Averróis sobre o "intelecto ativo único" causou grande polêmica nas universidades medievais cristãs porque:</p>}
          options={[
            { letter: "a", text: "Implicava que a alma intelectual individual não é imortal, pois o intelecto compartilhado por todos não sobrevive à morte do indivíduo como pessoa particular.", correct: true },
            { letter: "b", text: "Defendia que apenas os filósofos possuem intelecto ativo, excluindo as mulheres e os não-letrados." },
            { letter: "c", text: "Afirmava que Deus não possui intelecto, sendo apenas uma força material impessoal." },
            { letter: "d", text: "Propunha que o intelecto ativo é uma faculdade exclusiva dos profetas e não pode ser desenvolvida pela educação." },
          ]}
          resolution={<p>Se o intelecto ativo (a parte da mente capaz de conhecer os universais) é único e compartilhado por toda a humanidade — uma espécie de "mente cósmica" —, então ele não pertence ao indivíduo particular. Com a morte do indivíduo, o que sobrevive é esse intelecto impessoal, não a alma individual. Isso contradiz a doutrina cristã da imortalidade pessoal da alma, daí a condenação do averroísmo em 1277.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Diálogo entre Tradições"
          statement={<p>Durante a Idade Média, cristãos, muçulmanos e judeus conviveram em regiões como a Espanha islâmica (Al-Andalus) e a Sicília, produzindo um rico intercâmbio cultural e intelectual. Esse fenômeno demonstra que:</p>}
          options={[
            { letter: "a", text: "A produção do conhecimento filosófico e científico é favorecida pelo contato e diálogo entre culturas e tradições diversas.", correct: true },
            { letter: "b", text: "O pensamento filosófico só pode se desenvolver em sociedades monorreligiosas, sem conflitos teológicos." },
            { letter: "c", text: "A filosofia islâmica e judaica eram inferiores à cristã e só se desenvolveram pela influência europeia." },
            { letter: "d", text: "O intercâmbio cultural medieval foi unidirecional, com o Ocidente cristão ensinando o Oriente islâmico." },
          ]}
          resolution={<p>O intercâmbio entre as três tradições — exemplificado pela tradução em Toledo, pela convivência em Córdoba e pela produção em Cairo — mostra que o conhecimento se enriquece com a diversidade. Al-Andalus (Espanha muçulmana) foi um dos centros mais avançados do mundo medieval exatamente pela pluralidade cultural. O ENEM valoriza a percepção de que a diversidade cultural é fator de enriquecimento intelectual.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Maimônides e a Teologia Negativa"
          statement={<p>Maimônides defendia que, ao falar de Deus, devemos usar a "teologia negativa" — dizer apenas o que Deus não é, e não o que é. Afirmar que "Deus é misericordioso" significaria, nessa perspectiva:</p>}
          options={[
            { letter: "a", text: "Que Deus age como age o misericordioso, mas não possui a qualidade humana da misericórdia em sentido literal.", correct: true },
            { letter: "b", text: "Que Deus sente emoções exatamente como os seres humanos, inclusive a compaixão." },
            { letter: "c", text: "Que é possível conhecer completamente a essência divina por meio da razão filosófica." },
            { letter: "d", text: "Que a misericórdia é a principal qualidade de Deus, superior a sua justiça." },
          ]}
          resolution={<p>A teologia negativa de Maimônides parte do princípio de que Deus é radicalmente diferente de qualquer ser criado. Atribuir a Deus qualidades positivas como "bom" ou "misericordioso" poderia antropomorfizá-lo. Por isso, ao dizer que "Deus é misericordioso", estamos dizendo que Deus não age com crueldade, não que ele tenha a emoção humana da misericórdia. Essa abordagem influenciou a teologia cristã e islâmica medievais.</p>}
        />
      </section>
    </article>
  );
}
