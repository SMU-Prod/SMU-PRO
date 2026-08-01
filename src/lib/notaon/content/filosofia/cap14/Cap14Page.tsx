"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 14</span>
          <h1>Universidades Medievais e a Construção do Pensamento Ocidental</h1>
          <p>
            As universidades medievais foram um dos mais importantes legados da Idade Média para a
            civilização ocidental. Nascidas das escolas catedrais e dos debates escolásticos, tornaram-se
            espaços de liberdade intelectual, debate filosófico e sistematização do saber. O problema dos
            universais e a navalha de Ockham são dois dos temas mais cobrados pelo ENEM neste período.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem</span>
        <h2>1. O Surgimento das Universidades (Sécs. XII–XIII)</h2>
        <p>
          As primeiras universidades europeias emergiram no final do século XI e ao longo do século XII,
          a partir da concentração de professores e estudantes nas escolas catedrais. O modelo universitário
          medieval se desenvolveu em torno de dois polos:
        </p>
        <ul>
          <li>
            <strong>Bolonha (1088):</strong> considerada a mais antiga universidade do Ocidente,
            especializada em Direito (Direito Romano). Surgiu da iniciativa dos próprios estudantes,
            que contratavam e demitiam professores.
          </li>
          <li>
            <strong>Paris (c. 1150–1200):</strong> especializada em Teologia e Filosofia. Tornou-se
            o principal centro intelectual da Cristandade medieval. Tomás de Aquino, Alberto Magno
            e Boaventura aqui ensinaram.
          </li>
          <li>
            <strong>Oxford (c. 1167):</strong> surgiu com a migração de estudantes ingleses de Paris.
            Destacou-se em Filosofia Natural (precursora das ciências naturais).
          </li>
          <li>
            <strong>Cambridge (1209), Salamanca (1218), Nápoles (1224)</strong> e muitas outras se
            seguiram ao longo do século XIII.
          </li>
        </ul>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 180" width="520" height="180" aria-label="Linha do tempo das universidades medievais">
            <rect x="10" y="10" width="500" height="160" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Surgimento das Primeiras Universidades</text>
            {/* Linha do tempo */}
            <line x1="50" y1="100" x2="470" y2="100" stroke="#92400e" strokeWidth="2"/>
            {/* Marcos */}
            <circle cx="80" cy="100" r="7" fill="#f59e0b"/>
            <text x="80" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">1088</text>
            <text x="80" y="120" textAnchor="middle" fontSize="10" fill="#713f12">Bolonha</text>
            <text x="80" y="133" textAnchor="middle" fontSize="9" fill="#713f12">(Direito)</text>

            <circle cx="180" cy="100" r="7" fill="#f59e0b"/>
            <text x="180" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">c.1200</text>
            <text x="180" y="120" textAnchor="middle" fontSize="10" fill="#713f12">Paris</text>
            <text x="180" y="133" textAnchor="middle" fontSize="9" fill="#713f12">(Teologia)</text>

            <circle cx="270" cy="100" r="7" fill="#f59e0b"/>
            <text x="270" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">1209</text>
            <text x="270" y="120" textAnchor="middle" fontSize="10" fill="#713f12">Cambridge</text>

            <circle cx="360" cy="100" r="7" fill="#f59e0b"/>
            <text x="360" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">1218</text>
            <text x="360" y="120" textAnchor="middle" fontSize="10" fill="#713f12">Salamanca</text>

            <circle cx="450" cy="100" r="7" fill="#f59e0b"/>
            <text x="450" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">1224</text>
            <text x="450" y="120" textAnchor="middle" fontSize="10" fill="#713f12">Nápoles</text>
          </svg>
          <figcaption>As primeiras universidades europeias medievais e suas especializações.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>2. Organização e Currículo Universitário Medieval</h2>
        <p>
          A universidade medieval (<em>universitas magistrorum et scholarium</em> — corporação de
          mestres e estudantes) era organizada em <strong>faculdades</strong>:
        </p>
        <ul>
          <li>
            <strong>Faculdade de Artes:</strong> propedêutica (base); ensinava o <em>trivium</em>
            (gramática, retórica, dialética/lógica) e o <em>quadrivium</em> (aritmética, geometria,
            música, astronomia). Era o grau básico para acesso às demais.
          </li>
          <li>
            <strong>Faculdade de Teologia:</strong> o estudo superior por excelência; base bíblica e
            patrística; 15 a 16 anos de formação.
          </li>
          <li>
            <strong>Faculdade de Direito:</strong> Direito Romano e Direito Canônico.
          </li>
          <li>
            <strong>Faculdade de Medicina:</strong> baseada em Galeno, Hipócrates e Avicena.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A Liberdade Acadêmica Medieval</h3>
          <p>
            As universidades medievais gozavam de autonomia (imunidades e privilégios concedidos por
            papas e reis) e de liberdade de ensino e debate — uma liberdade que, paradoxalmente, às
            vezes entrava em conflito com as autoridades eclesiásticas (como as condenações de 1277
            em Paris). Ainda assim, criaram a cultura do debate racional que é o fundamento da
            universidade moderna.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Grande Debate</span>
        <h2>3. O Problema dos Universais: Realismo vs. Nominalismo</h2>
        <p>
          Um dos maiores debates filosóficos medievais foi o <strong>problema dos universais</strong>:
          o que são os conceitos gerais (como "homem", "beleza", "justiça")? Existem realmente ou são
          apenas nomes?
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Resposta</th>
                <th>Representantes</th>
                <th>Exemplo ("homem")</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Realismo extremo</strong></td>
                <td>Os universais existem realmente, antes e independentemente das coisas individuais (<em>ante rem</em>)</td>
                <td>Platão, Guilherme de Champeaux</td>
                <td>"Homem" existe como ideia perfeita antes de qualquer homem concreto</td>
              </tr>
              <tr>
                <td><strong>Realismo moderado</strong></td>
                <td>Os universais existem nas próprias coisas (<em>in re</em>) e na mente como abstração</td>
                <td>Aristóteles, Tomás de Aquino</td>
                <td>"Homem" é uma natureza comum extraída por abstração dos homens concretos</td>
              </tr>
              <tr>
                <td><strong>Nominalismo</strong></td>
                <td>Os universais são apenas nomes ou conceitos mentais (<em>post rem</em>); só existem indivíduos concretos</td>
                <td>Roscelino, Guilherme de Ockham</td>
                <td>"Homem" é um som vocal (flatus vocis) ou um conceito mental; não existe "homem em geral"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Por que isso importa?</h3>
          <p>
            O debate não era apenas abstrato: se os universais não existem, a Trindade (três pessoas
            numa única essência) se torna problemática. Se existem, corre-se o risco de subordinar o
            indivíduo a abstrações. O problema dos universais antecipa debates modernos sobre
            generalização científica, conceitos e linguagem.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Guilherme de Ockham</span>
        <h2>4. Guilherme de Ockham e a "Navalha de Ockham"</h2>
        <p>
          <strong>Guilherme de Ockham</strong> (c. 1287–1347) foi um frade franciscano inglês e o
          maior representante do nominalismo medieval tardio. Sua filosofia é marcada por duas teses
          centrais:
        </p>
        <ul>
          <li>
            <strong>Nominalismo radical:</strong> apenas os indivíduos concretos existem. Os conceitos
            universais são <em>termini</em> — signos mentais ou verbais que nos permitem falar de
            grupos de indivíduos, mas não correspondem a entidades reais.
          </li>
          <li>
            <strong>Separação entre fé e razão:</strong> contrariamente a Tomás, Ockham defendia que
            as verdades teológicas (Trindade, Encarnação) não podem ser demonstradas pela razão. A fé
            e a razão são domínios separados — o que antecipa a secularização do saber.
          </li>
        </ul>
        <p>
          Sua famosa <strong>"Navalha de Ockham"</strong> (<em>Ockham's razor</em>) é o princípio de
          parcimônia: <em>"Não se deve multiplicar entidades além do necessário"</em>
          (<em>Entia non sunt multiplicanda praeter necessitatem</em>). Em outras palavras: a explicação
          mais simples, que não postule mais entidades do que o necessário, é preferível. Este princípio
          é um dos fundamentos do método científico moderno.
        </p>
        <div className="lesson-highlight">
          <h3>Navalha de Ockham e Ciência</h3>
          <p>
            A navalha de Ockham influenciou diretamente o desenvolvimento do método científico: em
            vez de multiplicar causas ocultas, explicações sobrenaturais ou entidades filosóficas
            desnecessárias, a ciência moderna prefere as hipóteses mais simples e testáveis.
            Einstein, Copérnico e Newton aplicaram esse princípio inconscientemente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crise e Transição</span>
        <h2>5. A Crise do Pensamento Medieval e os Germes da Modernidade</h2>
        <p>
          A partir do século XIV, a síntese escolástica começou a se fragmentar:
        </p>
        <ul>
          <li>
            A <strong>Peste Negra</strong> (1347–1351) matou um terço da população europeia, abalando
            a confiança na ordem providencial divina.
          </li>
          <li>
            O <strong>Cisma do Ocidente</strong> (1378–1417) — dois e depois três papas simultaneamente
            — enfraqueceu a autoridade da Igreja.
          </li>
          <li>
            O <strong>nominalismo de Ockham</strong> separou fé e razão, abrindo espaço para o estudo
            autônomo da natureza.
          </li>
          <li>
            O movimento <strong>conciliarista</strong> questionou a autoridade papal em favor do
            Concílio Geral.
          </li>
          <li>
            <strong>Místicos</strong> como Meister Eckhart e João da Cruz buscaram a experiência
            direta de Deus, contornando a mediação da razão escolástica.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>6. O Legado das Universidades para o Pensamento Ocidental</h2>
        <p>
          As universidades medievais legaram à civilização ocidental:
        </p>
        <ul>
          <li>
            O <strong>método de debate e argumentação rigorosa</strong> — a disputatio como cultura
            do argumento racional.
          </li>
          <li>
            A ideia de <strong>liberdade acadêmica</strong> e autonomia do espaço universitário em
            relação ao poder político e religioso.
          </li>
          <li>
            A <strong>institucionalização do saber</strong> — a transmissão sistemática do conhecimento
            por gerações de mestres e alunos.
          </li>
          <li>
            Os <strong>graus universitários</strong> (bacharel, licenciado, mestre, doutor) ainda
            usados hoje.
          </li>
          <li>
            O <strong>modelo corporativo</strong> de organização que deu origem às corporações
            profissionais e aos sindicatos modernos.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instituição Social</span>
        <h2>7. A universidade medieval como instituição social</h2>
        <p>
          A universidade medieval foi muito mais do que um centro de ensino — foi uma
          <strong> instituição social inédita</strong>, sem precedente direto no mundo antigo. Nem
          as academias gregas, nem as bibliotecas de Alexandria, nem as escolas monásticas da Alta
          Idade Média tinham a estrutura corporativa, os privilégios legais e a capacidade de
          conferir graus reconhecidos internacionalmente que a universidade medieval possuía.
        </p>
        <p>
          Como <em>universitas</em> (corporação), a universidade funcionava segundo o modelo das
          guildas medievais: tinha estatutos, hierarquias (aprendiz → oficial → mestre), deveres
          mútuos e proteção coletiva. Essa forma organizacional garantia:
        </p>
        <ul>
          <li><strong>Mobilidade dos estudantes:</strong> estudantes viajavam de toda a Europa para Paris, Bolonha ou Oxford, criando uma comunidade intelectual transnacional.</li>
          <li><strong>Padronização do saber:</strong> os mesmos textos (Aristóteles, Bíblia, Justiniano, Galeno) eram ensinados em toda a Europa, criando uma cultura intelectual comum.</li>
          <li><strong>Reconhecimento social dos intelectuais:</strong> pela primeira vez, o trabalho intelectual foi institucionalizado e reconhecido como profissão.</li>
          <li><strong>Produção de quadros profissionais:</strong> clérigos, advogados, médicos e administradores treinados nas universidades tornaram-se indispensáveis ao Estado e à Igreja medievais.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>A universidade e a cidade</h3>
          <p>
            As universidades transformaram as cidades que as abrigavam. Paris, Bolonha e Oxford
            desenvolveram uma intensa vida intelectual, econômica e cultural em torno do comércio
            de livros, da hospedagem de estudantes e da atividade dos copistas. A "cidade universitária"
            é uma criação medieval que permanece viva até hoje.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Disputatio e Legado Pedagógico</span>
        <h2>8. Disputatio, método e legado para a pedagogia moderna</h2>
        <p>
          O método universitário medieval por excelência era a <strong>disputatio</strong>
          (disputa, debate). Em seu formato típico:
        </p>
        <ol>
          <li>Uma <em>quaestio</em> (questão) era formulada — por exemplo: "Deus existe?"</li>
          <li>Apresentavam-se os argumentos contrários (<em>objectiones</em>).</li>
          <li>O mestre respondia com sua <em>responsio</em> (tese e argumentação).</li>
          <li>Cada objeção era refutada individualmente (<em>ad singula</em>).</li>
        </ol>
        <p>
          Esse método aparece em toda a grande literatura escolástica: a <em>Suma Teológica</em> de
          Tomás de Aquino tem exatamente esse formato, com mais de 10.000 objeções e respostas. Ele
          cultivou hábitos intelectuais que atravessaram séculos:
        </p>
        <ul>
          <li><strong>Precisão conceitual:</strong> definir termos antes de argumentar.</li>
          <li><strong>Caridade intelectual:</strong> apresentar o argumento contrário em sua forma mais forte antes de refutá-lo.</li>
          <li><strong>Distinções:</strong> resolver aparentes contradições mostrando que os termos são usados em sentidos diferentes.</li>
          <li><strong>Hierarquia de autoridades:</strong> citar fontes reconhecidas como base para o argumento.</li>
        </ul>
        <p>
          Para o ENEM, o legado pedagógico da Escolástica é relevante em questões sobre a
          construção do conhecimento, a cultura do debate democrático e as origens do pensamento
          científico ocidental.
        </p>
        <div className="lesson-highlight">
          <h3>Disputatio e Pensamento Crítico Atual</h3>
          <p>
            O método socrático de Platão + a disputatio escolástica + o debate parlamentar moderno
            formam uma linhagem contínua: a convicção de que a verdade emerge do confronto
            argumentativo rigoroso entre posições opostas, e não da simples imposição de autoridade.
            Isso é o núcleo do pensamento crítico que o ENEM valoriza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🏛️</span>
            <h3>Primeiras Universidades</h3>
            <p>Bolonha (1088), Paris (c.1200), Oxford (c.1167): centros de saber e debate.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Trivium e Quadrivium</h3>
            <p>Base curricular das Artes: lógica, gramática, retórica + aritmética, geometria, música, astronomia.</p>
          </div>
          <div className="math-card">
            <span>🌐</span>
            <h3>Problema dos Universais</h3>
            <p>Realismo (universais existem) vs. Nominalismo (universais são nomes). Debate central da Escolástica.</p>
          </div>
          <div className="math-card">
            <span>✂️</span>
            <h3>Navalha de Ockham</h3>
            <p>Não multiplicar entidades além do necessário. Princípio de parcimônia; fundamento do método científico.</p>
          </div>
          <div className="math-card">
            <span>⛪</span>
            <h3>Crise Medieval</h3>
            <p>Peste Negra, Cisma, nominalismo: fragmentação da síntese escolástica e abertura para a Modernidade.</p>
          </div>
          <div className="math-card">
            <span>🎓</span>
            <h3>Legado</h3>
            <p>Liberdade acadêmica, debate argumentativo, graus universitários: heranças vivas das universidades medievais.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Navalha de Ockham"
          statement={<p>O princípio conhecido como "Navalha de Ockham", formulado por Guilherme de Ockham no século XIV, afirma que:</p>}
          options={[
            { letter: "a", text: "Não se devem multiplicar entidades além do necessário — a explicação mais simples é preferível.", correct: true },
            { letter: "b", text: "A razão deve ser totalmente submetida à fé para evitar heresias." },
            { letter: "c", text: "Os conceitos universais existem realmente, antes e independentemente das coisas." },
            { letter: "d", text: "O conhecimento só é possível por meio da experiência sensorial direta." },
          ]}
          resolution={<p>A <strong>Navalha de Ockham</strong> (ou princípio de parcimônia) diz: <em>entia non sunt multiplicanda praeter necessitatem</em> — não multiplique entidades além do necessário. Diante de duas explicações igualmente válidas, prefira a mais simples, que não postule mais elementos do que o necessário. É um princípio fundamental do método científico moderno.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Nominalismo e Realismo"
          statement={<p>No debate medieval sobre os universais, os nominalistas — como Ockham — defendiam que:</p>}
          options={[
            { letter: "a", text: "Os conceitos gerais (como 'humanidade') são apenas nomes ou signos mentais; na realidade, só existem indivíduos concretos.", correct: true },
            { letter: "b", text: "Os conceitos gerais existem realmente antes das coisas particulares, como as Ideias de Platão." },
            { letter: "c", text: "Os conceitos gerais existem nas próprias coisas, como formas substanciais aristotélicas." },
            { letter: "d", text: "Os conceitos gerais são revelados por Deus e, por isso, existem independentemente da mente humana." },
          ]}
          resolution={<p>O <strong>nominalismo</strong> nega a existência real dos universais: eles são apenas <em>termini</em> — nomes ou conceitos que usamos para agrupar indivíduos semelhantes. Não existe "humanidade" em geral; existem Pedro, Maria, João, etc. Ockham era o mais rigoroso: os universais são apenas signos mentais (<em>intentiones animae</em>), sem correspondente real no mundo externo.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Ockham e a Separação Fé/Razão"
          statement={<p>Ao contrário de Tomás de Aquino, Guilherme de Ockham defendeu uma separação radical entre fé e razão. Qual foi a principal consequência filosófica e histórica dessa posição?</p>}
          options={[
            { letter: "a", text: "Abriu caminho para o estudo autônomo da natureza e das ciências, libertando o conhecimento empírico da tutela teológica.", correct: true },
            { letter: "b", text: "Levou ao ateísmo generalizado nas universidades medievais do século XIV." },
            { letter: "c", text: "Reforçou a autoridade papal sobre o ensino universitário, pois a razão precisava de guia externo." },
            { letter: "d", text: "Eliminou a filosofia das universidades, substituindo-a pelo misticismo." },
          ]}
          resolution={<p>Ao afirmar que as verdades da fé (Trindade, Criação, Encarnação) não podem ser demonstradas pela razão, Ockham liberou a razão para investigar o mundo natural sem precisar provar verdades teológicas. Isso é um dos fatores que abriram caminho para a ciência moderna e para a laicização do saber. A separação ockhamista entre teologia e filosofia foi um dos germes da revolução científica do século XVII.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Universidades e Liberdade Intelectual"
          statement={<p>As universidades medievais obtiveram de papas e reis cartas de privilégios que garantiam autonomia — imunidade de autoridades locais, direito de greve, de migrar para outras cidades. Esse fenômeno indica que:</p>}
          options={[
            { letter: "a", text: "Desde sua origem, as universidades reivindicaram e conquistaram um espaço de relativa autonomia intelectual frente ao poder político e religioso.", correct: true },
            { letter: "b", text: "As universidades eram simples instrumentos da Igreja para controlar o pensamento e suprimir heresias." },
            { letter: "c", text: "O conhecimento medieval era exclusivamente teológico, sem qualquer dimensão crítica ou filosófica." },
            { letter: "d", text: "A liberdade intelectual foi uma conquista exclusivamente moderna, impossível de existir na Idade Média." },
          ]}
          resolution={<p>As universidades medievais não eram simples extensões do poder eclesiástico. Ao contrário, conquistaram privilégios (como a <em>licentia ubique docendi</em> e a imunidade à jurisdição local) que lhes garantiam considerável autonomia. Os conflitos entre professores e autoridades eclesiásticas (como as condenações de 1277 em Paris) mostram que havia espaço real de debate e resistência intelectual. A liberdade acadêmica moderna tem raízes medievais.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Legado do Método Universitário"
          statement={<p>O método da disputatio, praticado nas universidades medievais, consistia em formular uma questão, apresentar argumentos contrários, defender uma tese e refutar as objeções. Qual valor intelectual esse método cultivava e que ainda fundamenta o pensamento científico moderno?</p>}
          options={[
            { letter: "a", text: "A valorização do argumento racional, da crítica e do debate como formas legítimas de construção do conhecimento.", correct: true },
            { letter: "b", text: "A submissão incondicional à autoridade dos textos bíblicos como critério de toda verdade." },
            { letter: "c", text: "A intuição mística como caminho superior para o conhecimento verdadeiro." },
            { letter: "d", text: "A observação experimental como único método válido para produzir conhecimento." },
          ]}
          resolution={<p>A <strong>disputatio</strong> cultivava o hábito de argumentar com rigor, apresentar objeções, responder criticamente e defender posições com razões — práticas que são o coração do debate acadêmico e científico moderno. Embora o método científico moderno tenha acrescentado a experimentação, a cultura do debate racional e da crítica de hipóteses tem raízes diretas na tradição universitária medieval.</p>}
        />
      </section>
    </article>
  );
}
