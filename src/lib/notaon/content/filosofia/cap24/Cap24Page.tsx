"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 24</span>
          <h1>Poder, Ideologia e Participação Política</h1>
          <p>
            Compreender o poder é essencial para analisar a política e a sociedade. Neste capítulo,
            estudamos as teorias de Weber, Marx, Althusser, Foucault e Gramsci sobre o poder e a
            ideologia, além das formas de participação política na democracia contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Weber</span>
        <h2>1. Max Weber: As Três Formas de Dominação Legítima</h2>
        <p>
          Max Weber (1864–1920) distingue <strong>poder</strong> (capacidade de impor a própria
          vontade mesmo contra resistência) de <strong>dominação</strong> (quando o poder é aceito
          como legítimo pelos dominados). Para Weber, a legitimidade é o que transforma a força
          bruta em autoridade reconhecida.
        </p>
        <p>Ele identificou três tipos ideais de dominação legítima:</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Base da legitimidade</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tradicional</strong></td>
                <td>Costumes e tradições imemoriáveis; obediência ao senhor ancestral</td>
                <td>Monarquias feudais, patriarcalismo, chefias tribais</td>
              </tr>
              <tr>
                <td><strong>Carismática</strong></td>
                <td>Qualidades extraordinárias do líder; devoção pessoal e emocional</td>
                <td>Líderes religiosos, líderes revolucionários, líderes populistas</td>
              </tr>
              <tr>
                <td><strong>Racional-legal</strong></td>
                <td>Normas racionais e impessoais; obediência à lei, não à pessoa</td>
                <td>Estados modernos, burocracia, democracias constitucionais</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A burocracia e a "jaula de ferro"</h3>
          <p>
            Weber via na burocracia racional-legal a forma mais eficiente de organização moderna,
            mas também alertava para seu risco: a <strong>"jaula de ferro"</strong> — uma sociedade
            cada vez mais engessada por regulamentos e procedimentos, sufocando a criatividade e a
            liberdade individual. A racionalização excessiva poderia levar ao desencantamento do
            mundo (<em>Entzauberung der Welt</em>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Marx</span>
        <h2>2. Karl Marx: Ideologia como Falsa Consciência</h2>
        <p>
          Para Marx, a <strong>ideologia</strong> é o conjunto de ideias, valores e representações
          que a classe dominante apresenta como universais e naturais, mas que na verdade servem
          para justificar e perpetuar sua dominação. Em <em>A Ideologia Alemã</em> (1846), Marx
          e Engels escreveram: "As ideias da classe dominante são, em cada época, as ideias
          dominantes."
        </p>
        <p>
          A ideologia funciona como uma <strong>"falsa consciência"</strong>: os trabalhadores
          aceitam como natural uma ordem social que os explora, porque a ideologia burguesa apresenta
          o capitalismo como expressão da "natureza humana" e da "liberdade". A superestrutura
          jurídico-política e cultural é determinada pela base econômica (modo de produção).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Althusser</span>
        <h2>3. Louis Althusser: Aparelhos Ideológicos de Estado</h2>
        <p>
          Louis Althusser (1918–1990) aprofundou a análise marxista da ideologia em seu ensaio
          <em> Ideologia e Aparelhos Ideológicos de Estado</em> (1970). Ele distingue dois tipos
          de aparelhos estatais:
        </p>
        <ul>
          <li>
            <strong>Aparelhos Repressivos de Estado (ARE):</strong> agem pela violência e coerção
            física — polícia, exército, tribunais, prisões. Garantem as condições de produção pela
            força.
          </li>
          <li>
            <strong>Aparelhos Ideológicos de Estado (AIE):</strong> agem pela ideologia — escola,
            família, igrejas, partidos políticos, sindicatos, meios de comunicação, cultura.
            Garantem a reprodução das relações de produção pela adesão voluntária.
          </li>
        </ul>
        <p>
          Para Althusser, o AIE escolar é o mais importante na sociedade capitalista moderna: é
          na escola que os indivíduos aprendem não apenas conteúdos, mas também valores, atitudes
          e "formas de ser" compatíveis com a ordem social dominante.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Foucault</span>
        <h2>4. Michel Foucault: O Poder como Relação</h2>
        <p>
          Michel Foucault (1926–1984) revolucionou a análise do poder ao rejeitar a ideia de que
          o poder é algo que se possui ou está centralizado no Estado. Para Foucault, o poder é uma
          <strong> relação</strong> que se exerce em todos os níveis da sociedade — nas escolas,
          hospitais, prisões, famílias, sexualidade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Pirâmide do poder de Weber e rede do poder de Foucault">
            {/* Pirâmide (Weber) */}
            <polygon points="120,40 30,220 210,220" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="120" y="90" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Estado</text>
            <text x="120" y="150" textAnchor="middle" fontSize="11" fill="#1e40af">Dominação</text>
            <text x="120" y="200" textAnchor="middle" fontSize="11" fill="#1e40af">Legitimidade</text>
            <text x="120" y="240" textAnchor="middle" fontSize="12" fill="#1d4ed8" fontWeight="bold">Weber: Pirâmide</text>

            {/* Rede (Foucault) */}
            <circle cx="360" cy="130" r="8" fill="#7c3aed"/>
            <circle cx="310" cy="80" r="8" fill="#7c3aed"/>
            <circle cx="410" cy="80" r="8" fill="#7c3aed"/>
            <circle cx="310" cy="180" r="8" fill="#7c3aed"/>
            <circle cx="410" cy="180" r="8" fill="#7c3aed"/>
            <circle cx="360" cy="55" r="8" fill="#7c3aed"/>
            <circle cx="360" cy="205" r="8" fill="#7c3aed"/>
            <line x1="360" y1="130" x2="310" y2="80" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="360" y1="130" x2="410" y2="80" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="360" y1="130" x2="310" y2="180" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="360" y1="130" x2="410" y2="180" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="310" y1="80" x2="360" y2="55" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="410" y1="80" x2="360" y2="55" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="310" y1="180" x2="360" y2="205" stroke="#7c3aed" strokeWidth="1.5"/>
            <line x1="410" y1="180" x2="360" y2="205" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="360" y="240" textAnchor="middle" fontSize="12" fill="#5b21b6" fontWeight="bold">Foucault: Rede</text>
          </svg>
          <figcaption>Para Weber, o poder é hierárquico e centralizado no Estado. Para Foucault, o poder circula em rede por toda a sociedade.</figcaption>
        </figure>
        <p>
          Em <em>Vigiar e Punir</em> (1975), Foucault analisa como as sociedades modernas substituíram
          o suplício público (punição visível do corpo) pela <strong>disciplina</strong> (vigilância
          constante que produz corpos dóceis). O <strong>Panopticon</strong> de Bentham — uma prisão
          circular onde os presos nunca sabem quando estão sendo observados — é a metáfora perfeita
          do poder disciplinar.
        </p>
        <div className="lesson-highlight">
          <h3>Biopoder e biopolítica</h3>
          <p>
            Em seus cursos no Collège de France, Foucault elaborou o conceito de <strong>biopoder</strong>:
            o poder que se exerce sobre a vida das populações (controle de natalidade, saúde pública,
            higiene, imigração). A <strong>biopolítica</strong> é a política que toma a vida humana
            como seu objeto — algo que Agamben radicalizou no conceito de <em>homo sacer</em> (a vida
            nua que pode ser eliminada pelo poder soberano).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gramsci</span>
        <h2>5. Antonio Gramsci: Hegemonia Cultural</h2>
        <p>
          Antonio Gramsci (1891–1937), pensador marxista italiano preso pelo fascismo, desenvolveu
          o conceito de <strong>hegemonia</strong>: a dominação de classe não se sustenta apenas
          pela força (coerção), mas principalmente pelo <em>consenso</em> — a capacidade da classe
          dominante de apresentar seus valores e visão de mundo como universais e legítimos.
        </p>
        <p>
          Para Gramsci, os <strong>intelectuais orgânicos</strong> são fundamentais: ao contrário
          dos intelectuais tradicionais (que se pretendem neutros), os intelectuais orgânicos estão
          ligados a uma classe social e ajudam a elaborar e difundir sua visão de mundo. A luta
          pela hegemonia cultural é travada na <strong>sociedade civil</strong> — igrejas, sindicatos,
          partidos, escolas, meios de comunicação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Participação</span>
        <h2>6. Formas de Participação Política</h2>
        <p>
          Em uma democracia, a participação política vai muito além do voto. As principais formas
          são:
        </p>
        <ul>
          <li><strong>Voto:</strong> forma básica de participação; no Brasil, obrigatório para maiores de 18 e facultativo para 16–17 anos e maiores de 70.</li>
          <li><strong>Partidos políticos:</strong> organismos de agregação de interesses e formulação de projetos políticos.</li>
          <li><strong>Movimentos sociais:</strong> ação coletiva organizada em torno de causas específicas (trabalhistas, ambientais, feministas, raciais).</li>
          <li><strong>Conselhos de políticas públicas:</strong> fóruns participativos em saúde, educação, assistência social.</li>
          <li><strong>Orçamento participativo:</strong> instrumento pelo qual a população decide parte dos gastos públicos.</li>
          <li><strong>Ativismo digital:</strong> uso das redes sociais para mobilização, pressão política e formação de opinião.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>A esfera pública em Habermas</h3>
          <p>
            Jürgen Habermas desenvolveu o conceito de <strong>esfera pública</strong>: um espaço
            de debate racional entre cidadãos livres e iguais, fora do mercado e do Estado, onde
            se forma a opinião pública. A qualidade da democracia depende da qualidade da esfera
            pública — ameaçada hoje pela concentração midiática e pela desinformação digital.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bourdieu</span>
        <h2>7. Pierre Bourdieu: Poder Simbólico e Capital Cultural</h2>
        <p>
          Pierre Bourdieu (1930–2002), sociólogo francês, desenvolveu conceitos fundamentais para
          entender como o poder se reproduz de forma invisível na sociedade. Diferentemente do poder
          físico (coerção) ou econômico (dinheiro), o <strong>poder simbólico</strong> é aquele que
          se exerce por meio de símbolos, linguagem, distinções culturais e prestígio — e que os
          próprios dominados tendem a reconhecer como legítimo.
        </p>
        <p>
          Para Bourdieu, os indivíduos e grupos competem em diferentes <strong>campos</strong>{" "}
          (campo econômico, campo educacional, campo artístico, campo político) por formas de
          <strong> capital</strong>:
        </p>
        <ul>
          <li><strong>Capital econômico:</strong> riqueza material, dinheiro, propriedades.</li>
          <li><strong>Capital cultural:</strong> conhecimento, diplomas, habilidades, bens culturais. Pode ser incorporado (habitus), objetivado (livros, obras de arte) ou institucionalizado (títulos acadêmicos).</li>
          <li><strong>Capital social:</strong> redes de relações, conexões, pertencimento a grupos.</li>
          <li><strong>Capital simbólico:</strong> prestígio, reconhecimento, honra — qualquer capital que é percebido como legítimo.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Habitus e reprodução social</h3>
          <p>
            O <strong>habitus</strong> é o conjunto de disposições duráveis que os indivíduos
            incorporam ao longo de sua socialização — maneiras de falar, vestir, pensar, agir —
            e que refletem sua posição na estrutura social. O habitus da classe dominante
            coincide com o que a escola e as instituições valorizam, gerando uma
            <em> violência simbólica</em>: a dominação que se exerce com a cumplicidade dos
            dominados, pois eles internalizam como "natural" uma ordem que os desfavorece.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pós-Verdade</span>
        <h2>8. Desinformação, Pós-Verdade e a Crise da Esfera Pública</h2>
        <p>
          A emergência das redes sociais digitais transformou radicalmente a esfera pública.
          O conceito de <strong>pós-verdade</strong> — eleito palavra do ano em 2016 pelo dicionário
          Oxford — descreve um ambiente em que os apelos emocionais e as crenças pessoais influenciam
          mais a opinião pública do que os fatos verificáveis.
        </p>
        <p>
          Do ponto de vista filosófico, a pós-verdade representa a derrota da
          <strong> razão comunicativa</strong> (Habermas) pela <strong>ação estratégica</strong>:
          as fake news não buscam o entendimento mútuo, mas manipular emoções e confirmar vieses
          preexistentes. Isso fragmenta a esfera pública em <em>bolhas informacionais</em> e
          inviabiliza o debate democrático racional.
        </p>
        <p>
          As consequências filosófico-políticas incluem:
        </p>
        <ul>
          <li>Enfraquecimento da distinção entre fato e opinião — base da epistemologia democrática.</li>
          <li>Erosão da confiança nas instituições científicas e jornalísticas.</li>
          <li>Polarização política que impede o compromisso e o consenso deliberativo.</li>
          <li>Vulnerabilidade a líderes autoritários que exploram a desorientação informacional.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>A resposta filosófica</h3>
          <p>
            Filósofos como Habermas e Onora O'Neill defendem que a saída passa pela
            <strong> educação para o pensamento crítico</strong> e pelo fortalecimento de espaços
            públicos que valorizem a responsabilidade epistêmica: verificar fontes, distinguir
            argumento de apelo emocional, reconhecer falácias. Isso torna o estudo da lógica e
            da epistemologia ferramentas políticas fundamentais — e temas recorrentes no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>👑</span>
            <h3>Weber: Dominação</h3>
            <p>Três tipos: tradicional (costume), carismática (líder) e racional-legal (lei).</p>
          </div>
          <div className="math-card">
            <span>🔴</span>
            <h3>Marx: Ideologia</h3>
            <p>Ideias da classe dominante apresentadas como universais para justificar a exploração.</p>
          </div>
          <div className="math-card">
            <span>🏫</span>
            <h3>Althusser: AIE</h3>
            <p>Escola, família, mídia e religião reproduzem ideologicamente as relações de produção.</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Foucault: Micropoder</h3>
            <p>Poder como rede de relações, não pirâmide. Disciplina e biopoder.</p>
          </div>
          <div className="math-card">
            <span>✊</span>
            <h3>Gramsci: Hegemonia</h3>
            <p>Dominação por consenso cultural. Intelectuais orgânicos e sociedade civil.</p>
          </div>
          <div className="math-card">
            <span>🗣️</span>
            <h3>Participação</h3>
            <p>Voto, movimentos sociais, conselhos, orçamento participativo, ativismo digital.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tipos de Dominação em Weber"
          statement={<p>Segundo Max Weber, a dominação exercida por um líder carismático fundamenta-se:</p>}
          options={[
            { letter: "a", text: "Em leis e normas racionalmente estabelecidas pela sociedade." },
            { letter: "b", text: "Em tradições e costumes transmitidos de geração em geração." },
            { letter: "c", text: "Nas qualidades pessoais extraordinárias que inspiram devoção nos seguidores.", correct: true },
            { letter: "d", text: "Na superioridade econômica do líder sobre os demais membros do grupo." },
          ]}
          resolution={<p>Weber define dominação carismática como aquela baseada em qualidades excepcionais do líder — proféticas, heroicas ou de personalidade — que geram devoção pessoal e emocional de seus seguidores. Exemplos: Jesus, Napoleão, líderes revolucionários. Difere da dominação tradicional (costume) e da racional-legal (normas impessoais).</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Marx e a Ideologia"
          statement={<p>A afirmação marxista de que "as ideias da classe dominante são as ideias dominantes de cada época" implica que:</p>}
          options={[
            { letter: "a", text: "O Estado é neutro e arbitra os conflitos entre as classes sociais de forma imparcial." },
            { letter: "b", text: "A superestrutura ideológica serve para naturalizar e legitimar a exploração econômica.", correct: true },
            { letter: "c", text: "As ideias filosóficas são completamente autônomas em relação às condições materiais." },
            { letter: "d", text: "A luta de classes é determinada pelas ideias, e não pelas condições econômicas." },
          ]}
          resolution={<p>Para Marx, a <strong>superestrutura</strong> (direito, política, religião, filosofia, arte) é determinada pela <strong>base</strong> (modo de produção econômica). As ideias dominantes em cada época refletem os interesses da classe que controla os meios de produção. Assim, a ideologia burguesa apresenta o capitalismo como natural, justo e universal, dificultando que os trabalhadores percebam sua situação de exploração — o que Marx chamava de "falsa consciência".</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Foucault: Disciplina e Panopticon"
          statement={<p>O conceito de Panopticon, utilizado por Foucault em <em>Vigiar e Punir</em>, serve para ilustrar:</p>}
          options={[
            { letter: "a", text: "A organização ideal da democracia representativa, com transparência total do governo." },
            { letter: "b", text: "A mecanismo de punição corporal típico das sociedades medievais." },
            { letter: "c", text: "Como a vigilância constante e internalizável produz corpos disciplinados e autovigilantes.", correct: true },
            { letter: "d", text: "O modelo de administração burocrática racional-legal descrito por Weber." },
          ]}
          resolution={<p>O Panopticon (Bentham) é uma prisão circular com uma torre central de vigilância. Os presos não sabem quando são observados, e por isso se comportam como se sempre estivessem. Para Foucault, isso exemplifica o poder disciplinar moderno: o poder que não precisa de violência explícita porque os próprios indivíduos passam a se autovigilar e se disciplinar. É uma metáfora de escolas, fábricas, hospitais e demais instituições modernas.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Gramsci e a Hegemonia Cultural"
          statement={
            <p>
              "A supremacia de um grupo social se manifesta de dois modos: como 'domínio' e como 'direção intelectual e moral'. Um grupo social domina os grupos adversários, que tende a 'liquidar' ou a submeter inclusive com a força armada, e dirige os grupos afins e aliados." (Antonio Gramsci, <em>Cadernos do Cárcere</em>)<br/><br/>
              Com base no texto, o conceito gramsciano de <strong>hegemonia</strong> refere-se a:
            </p>
          }
          options={[
            { letter: "a", text: "A dominação exclusivamente militar e policial exercida pelo Estado sobre os cidadãos." },
            { letter: "b", text: "A combinação de coerção (domínio) e consenso (direção cultural e moral) para manter o poder.", correct: true },
            { letter: "c", text: "A resistência dos grupos subalternos contra a exploração econômica capitalista." },
            { letter: "d", text: "A neutralidade do Estado na arbitragem dos conflitos entre diferentes grupos sociais." },
          ]}
          resolution={<p>Gramsci distingue duas formas de poder: <strong>coerção</strong> (força, violência, repressão) e <strong>consenso</strong> (liderança intelectual e moral, capacidade de convencer). A hegemonia efetiva combina os dois: a classe dominante não apenas reprime, mas obtém o consentimento ativo ou passivo dos dominados, apresentando seus interesses como interesses de todos. A luta contra a hegemonia, para Gramsci, passa pela conquista da "sociedade civil" — escolas, igrejas, partidos, sindicatos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Participação Política e Democracia"
          statement={
            <p>
              Ao longo do século XX e início do XXI, diversas formas de participação política além do voto foram institucionalizadas no Brasil: conselhos gestores de políticas públicas, conferências nacionais, orçamentos participativos, audiências públicas e plebiscitos. A Constituição Federal de 1988 prevê explicitamente que "todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente".<br/><br/>
              Esses mecanismos expressam qual modelo democrático?
            </p>
          }
          options={[
            { letter: "a", text: "Democracia direta pura, nos moldes da Atenas clássica." },
            { letter: "b", text: "Democracia representativa exclusiva, com participação restrita ao período eleitoral." },
            { letter: "c", text: "Democracia participativa, que combina representação com mecanismos de participação direta.", correct: true },
            { letter: "d", text: "Democracia teocrática, na qual as decisões são guiadas por valores religiosos." },
          ]}
          resolution={<p>A <strong>democracia participativa</strong> vai além da simples eleição de representantes: cria espaços institucionalizados de participação direta dos cidadãos nas decisões públicas. No Brasil, a CF/1988 combina a democracia representativa (eleições) com mecanismos de participação direta (referendos, plebiscitos, iniciativa popular de leis) e com instâncias de deliberação coletiva (conselhos, conferências), aproximando-se também do modelo deliberativo habermasiano.</p>}
        />
      </section>
    </article>
  );
}
