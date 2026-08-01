"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 29</span>
          <h1>Letras de músicas, poemas e textos literários</h1>
          <p>
            Textos literários em inglês — letras de músicas, poemas e trechos
            de prosa — aparecem regularmente no ENEM e exigem uma habilidade
            específica: interpretar a <strong>linguagem figurada</strong>, o tema
            central e a emoção transmitida, sem se prender em cada palavra desconhecida.
          </p>
          <p>
            Neste capítulo você vai aprender a identificar os principais recursos
            expressivos da linguagem poética em inglês, compreender como o ENEM
            avalia esses textos e desenvolver estratégias de leitura para gêneros
            com linguagem conotativa.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Linguagem Denotativa vs. Conotativa</h2>
        <p>
          A principal diferença entre textos literários e textos informativos está
          no uso da linguagem:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Característica</th>
                <th>Exemplo em inglês</th>
                <th>Ocorre em</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Denotativa</td>
                <td>Sentido literal, objetivo, direto</td>
                <td>"The ocean covers 70% of Earth's surface."</td>
                <td>Artigos científicos, notícias</td>
              </tr>
              <tr>
                <td>Conotativa</td>
                <td>Sentido figurado, subjetivo, simbólico</td>
                <td>"She drowned in an ocean of sorrow."</td>
                <td>Poemas, letras de música, literatura</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Foco do ENEM:</strong> Em textos literários, o ENEM quase sempre
          pergunta sobre o sentido figurado de uma expressão, o tema central ou a
          emoção transmitida — não sobre o significado literal das palavras.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Recursos expressivos</span>
        <h2>2. Figuras de Linguagem em Inglês</h2>
        <p>
          Conhecer os recursos expressivos mais comuns permite identificá-los
          rapidamente em textos do ENEM:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Figura</th>
                <th>O que é</th>
                <th>Exemplo em inglês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metaphor (metáfora)</td>
                <td>Comparação implícita, sem "like" ou "as"</td>
                <td>"Life is a journey." / "Time is money."</td>
              </tr>
              <tr>
                <td>Simile (símile)</td>
                <td>Comparação explícita com "like" ou "as"</td>
                <td>"Her voice is like music." / "As cold as ice."</td>
              </tr>
              <tr>
                <td>Personification (personificação)</td>
                <td>Atribui características humanas a coisas</td>
                <td>"The wind whispered through the trees."</td>
              </tr>
              <tr>
                <td>Hyperbole (hipérbole)</td>
                <td>Exagero para criar ênfase</td>
                <td>"I've told you a million times." / "I'm starving."</td>
              </tr>
              <tr>
                <td>Irony (ironia)</td>
                <td>O significado oposto ao que é dito</td>
                <td>"Oh, great, another Monday." (quando a pessoa odeia segundas)</td>
              </tr>
              <tr>
                <td>Alliteration (aliteração)</td>
                <td>Repetição de sons no início de palavras</td>
                <td>"Peter Piper picked a peck of pickled peppers."</td>
              </tr>
              <tr>
                <td>Repetition (repetição)</td>
                <td>Palavra ou estrutura repetida para ênfase</td>
                <td>"I have a dream… I have a dream…" (Martin Luther King)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> O ENEM raramente pede o nome da figura de
          linguagem. Em geral, pede o <em>efeito</em> que ela produz — o que a
          expressão comunica, sugere ou provoca no leitor.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Letras de música</span>
        <h2>3. Como o ENEM usa Letras de Música</h2>
        <p>
          Letras de música são gêneros híbridos: combinam linguagem poética com
          ritmo, rima e referências culturais. Nas questões do ENEM, o foco está
          sempre no <strong>tema central</strong>, na <strong>emoção transmitida</strong>{" "}
          ou no <strong>posicionamento do eu lírico</strong> — a voz que canta.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Tema central</h3>
            <p>Amor, perda, resistência, saudade, crítica social. Identifique o assunto global antes de ler cada verso.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Eu lírico</h3>
            <p>Quem fala na letra? Qual é seu estado emocional? O que ele sente ou reivindica?</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Linguagem figurada</h3>
            <p>Metáforas e símiles criam imagens poderosas. Não traduza literalmente — interprete o efeito.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Contexto cultural</h3>
            <p>Letras de protesto, gospel, reggae ou hip-hop carregam referências culturais que informam o sentido.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>4. Como Analisar um Poema ou Letra de Música no ENEM</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            aria-label="Fluxograma de análise de poema ou letra de música no ENEM"
            role="img"
          >
            <defs>
              <marker id="arrow-lit" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#374151" />
              </marker>
            </defs>
            {/* Passo 1 */}
            <rect x="240" y="15" width="220" height="38" rx="19" fill="#4f46e5" />
            <text x="350" y="39" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1. Leia o enunciado da questão</text>
            <line x1="350" y1="53" x2="350" y2="73" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-lit)" />

            {/* Passo 2 */}
            <rect x="210" y="73" width="280" height="38" rx="8" fill="#6366f1" />
            <text x="350" y="97" textAnchor="middle" fill="white" fontSize="12">2. Identifique o gênero (poema / letra)</text>
            <line x1="350" y1="111" x2="350" y2="131" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-lit)" />

            {/* Passo 3 */}
            <rect x="200" y="131" width="300" height="38" rx="8" fill="#818cf8" />
            <text x="350" y="155" textAnchor="middle" fill="white" fontSize="12">3. Capte o tema global (skimming)</text>
            <line x1="350" y1="169" x2="350" y2="189" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-lit)" />

            {/* Passo 4 */}
            <rect x="190" y="189" width="320" height="38" rx="8" fill="#a5b4fc" />
            <text x="350" y="208" textAnchor="middle" fill="#1e1b4b" fontSize="12">4. Identifique figuras de linguagem-chave</text>
            <line x1="350" y1="227" x2="350" y2="247" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-lit)" />

            {/* Passo 5 */}
            <rect x="230" y="247" width="240" height="30" rx="15" fill="#059669" />
            <text x="350" y="267" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">5. Responda com base no texto</text>

            {/* Dica lateral */}
            <rect x="20" y="73" width="165" height="120" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="103" y="96" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Atenção</text>
            <text x="103" y="114" textAnchor="middle" fill="#92400e" fontSize="11">Não traduza verso</text>
            <text x="103" y="132" textAnchor="middle" fill="#92400e" fontSize="11">por verso — capte</text>
            <text x="103" y="150" textAnchor="middle" fill="#92400e" fontSize="11">o sentido global</text>
            <text x="103" y="168" textAnchor="middle" fill="#92400e" fontSize="11">e o efeito emocional</text>

            {/* Alvo */}
            <rect x="515" y="73" width="165" height="120" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="597" y="96" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">O ENEM pergunta</text>
            <text x="597" y="114" textAnchor="middle" fill="#991b1b" fontSize="11">• Tema da letra</text>
            <text x="597" y="132" textAnchor="middle" fill="#991b1b" fontSize="11">• Sentido de expressão</text>
            <text x="597" y="150" textAnchor="middle" fill="#991b1b" fontSize="11">• Emoção transmitida</text>
            <text x="597" y="168" textAnchor="middle" fill="#991b1b" fontSize="11">• Posição do eu lírico</text>
          </svg>
          <figcaption>Fluxo de análise de poemas e letras de música no ENEM. O foco está no sentido global e nos efeitos expressivos, não na tradução literal.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de poema</span>
        <h2>5. Tipos de Texto Poético no ENEM</h2>
        <p>
          O ENEM apresenta diferentes tipos de texto poético. Conhecer suas
          características ajuda a definir a estratégia de leitura:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Características</th>
                <th>O que o ENEM costuma perguntar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Letra de música (pop, rock, folk)</td>
                <td>Rima, refrão, linguagem acessível</td>
                <td>Tema central, estado emocional do eu lírico</td>
              </tr>
              <tr>
                <td>Letra de protesto (rap, reggae)</td>
                <td>Crítica social, linguagem direta ou metafórica</td>
                <td>Posicionamento, denúncia, intenção comunicativa</td>
              </tr>
              <tr>
                <td>Poema lírico clássico</td>
                <td>Forma estruturada, recursos estilísticos densos</td>
                <td>Sentido de metáfora, emoção central</td>
              </tr>
              <tr>
                <td>Poema concreto ou visual</td>
                <td>Disposição gráfica, relação texto-imagem</td>
                <td>Efeito da forma visual sobre o sentido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário poético</span>
        <h2>6. Vocabulário Frequente em Textos Poéticos</h2>
        <p>
          Algumas palavras aparecem com frequência em textos poéticos em inglês
          e carregam sentidos conotativos importantes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra/expressão</th>
                <th>Sentido literal</th>
                <th>Sentido conotativo frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>storm / thunder</td><td>tempestade / trovão</td><td>conflito emocional, crise</td></tr>
              <tr><td>dawn / sunrise</td><td>amanhecer</td><td>esperança, novo começo</td></tr>
              <tr><td>chains / cage</td><td>correntes / gaiola</td><td>opressão, falta de liberdade</td></tr>
              <tr><td>wings / fly</td><td>asas / voar</td><td>liberdade, superação</td></tr>
              <tr><td>shadow / darkness</td><td>sombra / escuridão</td><td>tristeza, medo, ignorância</td></tr>
              <tr><td>fire / flame</td><td>fogo / chama</td><td>paixão, destruição, transformação</td></tr>
              <tr><td>road / journey / path</td><td>estrada / jornada / caminho</td><td>vida, escolhas, destino</td></tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando encontrar uma palavra concreta em
          contexto claramente emocional (ex.: "chains" em uma letra de protesto),
          trate-a como símbolo — pergunta-se o que ela representa, não o que
          literalmente significa.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Textos literários em prosa</span>
        <h2>7. Trechos de Romance e Conto no ENEM</h2>
        <p>
          Além de poemas e letras, o ENEM pode apresentar trechos de prosa
          literária. Para esses textos, identifique:
        </p>
        <ul>
          <li>
            <strong>Narrador:</strong> Primeira pessoa (<em>I</em>) = narrador
            personagem. Terceira pessoa (<em>he/she/they</em>) = narrador
            observador ou onisciente.
          </li>
          <li>
            <strong>Tom:</strong> O texto é melancólico? Irônico? Esperançoso?
            O tom orienta a interpretação das expressões.
          </li>
          <li>
            <strong>Descrição vs. ação:</strong> Trechos descritivos criam
            atmosfera; trechos de ação revelam personalidade do personagem.
          </li>
          <li>
            <strong>Diálogos:</strong> Revelam relações de poder, afeto ou
            conflito entre personagens — elementos que o ENEM pode perguntar.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Regra prática:</strong> Em trechos de prosa literária, o ENEM
          geralmente pergunta sobre o tema, a relação entre personagens ou o
          sentido de uma expressão específica — nunca sobre estrutura gramatical.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>8. Armadilhas nas Questões de Textos Literários</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Traduzir literalmente</h3>
            <p>"She has a heart of stone" não significa que o coração dela é feito de pedra — significa que ela é insensível. Nunca interprete a linguagem poética ao pé da letra.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ignorar o contexto emocional</h3>
            <p>A mesma palavra pode ter sentidos opostos dependendo do tom do texto. "Silence" pode ser paz ou solidão — depende do contexto.</p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Confundir eu lírico com o autor</h3>
            <p>O eu lírico é a voz do poema, não necessariamente quem o escreveu. O ENEM pergunta sobre o eu lírico, não sobre a biografia do poeta.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Buscar sentido gramatical</h3>
            <p>Poemas frequentemente invertem a ordem sintática normal. Não analise a gramática — identifique o sentido geral e o efeito expressivo.</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificar sentido figurado"
          statement={
            <div>
              <p>
                <em>Trecho de letra de música (situação típica ENEM):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "I've been walking through fire / And I'm still standing tall / These
                broken wings will carry me / Above it all"
              </p>
              <p>
                A expressão <strong>"broken wings"</strong> (asas quebradas)
                representa, no contexto da letra:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Um acidente físico sofrido pelo eu lírico que o impediu de voar literalmente." },
            { letter: "B", text: "Asas de um pássaro que aparece no cenário descrito pela música." },
            { letter: "C", text: "As dificuldades e limitações enfrentadas pelo eu lírico, que mesmo assim segue em frente.", correct: true },
            { letter: "D", text: "A impossibilidade de o eu lírico sonhar com liberdade devido a traumas do passado." },
            { letter: "E", text: "Um recurso gramatical que indica passado e movimento no texto da canção." },
          ]}
          resolution={
            <p>
              No contexto da letra — fogo, resistência, superação —{" "}
              <em>broken wings</em> é uma <strong>metáfora</strong> para
              dificuldades e limitações pessoais. O verso afirma que mesmo
              com essas limitações (<em>broken wings</em>), o eu lírico se
              manterá de pé e superará os obstáculos (<em>above it all</em>).
              A A é incorreta porque não há referência literal a acidentes. A
              D distorce o sentido: o texto é de superação, não de impossibilidade.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Tema central de uma letra de protesto"
          statement={
            <div>
              <p>
                <em>Trecho de letra (situação típica ENEM):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "They built these walls to keep us out / Said we don't belong in here /
                But every brick they lay down / Only makes our voices clear"
              </p>
              <p>O tema central dessa letra é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "A construção de muros como solução para conflitos territoriais." },
            { letter: "B", text: "A resistência de um grupo marginalizado que, diante da exclusão, fortalece sua voz.", correct: true },
            { letter: "C", text: "A nostalgia de um passado quando as pessoas viviam sem fronteiras." },
            { letter: "D", text: "A admiração do eu lírico pela arquitetura e pela engenharia civil." },
            { letter: "E", text: "O isolamento voluntário de pessoas que preferem viver separadas da sociedade." },
          ]}
          resolution={
            <p>
              A letra usa <em>walls</em> (muros) como metáfora de exclusão
              social. O grupo é impedido de pertencer (<em>"we don't belong"</em>),
              mas a resposta é de <strong>resistência</strong>: os muros não
              silenciam — amplificam a voz (<em>"makes our voices clear"</em>).
              O tema é de superação coletiva diante da marginalização. A A
              interpreta <em>walls</em> literalmente. A C e D contradizem o
              tom de resistência presente no texto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Ironia em texto poético"
          statement={
            <div>
              <p>
                <em>Trecho de poema (situação típica ENEM):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "How delightful it is to be ignored by the ones you love most, / To
                pour your heart into words that dissolve before they're read."
              </p>
              <p>
                O recurso expressivo central nesse trecho e seu efeito são:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Hipérbole — exagera a solidão para indicar que o eu lírico está feliz." },
            { letter: "B", text: "Aliteração — a repetição de sons cria ritmo e indica que o eu lírico está satisfeito." },
            { letter: "C", text: "Ironia — o eu lírico usa palavras positivas ('delightful') para descrever uma experiência dolorosa de rejeição emocional.", correct: true },
            { letter: "D", text: "Personificação — as palavras são apresentadas como seres vivos que se dissolvem antes de serem lidas." },
            { letter: "E", text: "Símile — compara o coração a palavras dissolvidas para indicar superação do sofrimento." },
          ]}
          resolution={
            <p>
              O eu lírico usa <em>delightful</em> (delicioso, maravilhoso) para
              descrever ser ignorado e ver suas palavras desperdiçadas —
              experiências claramente dolorosas. Isso é <strong>ironia</strong>:
              dizer o oposto do que se sente para criar um efeito expressivo de
              amargura sutil. A D tem parte de razão (palavras que se dissolvem
              podem ser personificação), mas o recurso <em>central</em> e mais
              significativo para a questão é a ironia na escolha de "delightful".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Eu lírico e emoção transmitida"
          statement={
            <div>
              <p>
                <em>Trecho de letra de música (situação típica ENEM):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "I keep your photograph beside my bed / Every night I trace the lines of
                your face / Missing you is something I've learned to carry / Like a
                stone inside a river — worn smooth with time"
              </p>
              <p>
                O estado emocional do eu lírico e o sentido da metáfora da pedra
                no rio são, respectivamente:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Raiva / a pedra representa a dureza do relacionamento passado." },
            { letter: "B", text: "Alegria / a pedra simboliza a solidez do amor que persiste." },
            { letter: "C", text: "Saudade / a pedra representa a dor da ausência que, com o tempo, torna-se mais suave mas não desaparece.", correct: true },
            { letter: "D", text: "Indiferença / a pedra indica que o eu lírico já superou completamente a perda." },
            { letter: "E", text: "Confusão / a pedra simboliza a dificuldade de entender o próprio sentimento." },
          ]}
          resolution={
            <p>
              A fotografia na cabeceira, o gesto de traçar o rosto amado, o
              verbo <em>missing</em> (sentir falta) — tudo aponta para{" "}
              <strong>saudade</strong>. A metáfora da pedra num rio é precisa:
              a pedra é polida pelo rio com o tempo, mas não some — assim como
              a dor da ausência torna-se mais tolerável mas permanece. A D é
              incorreta porque <em>"worn smooth"</em> não significa superação
              completa, apenas suavização da dor.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Metáfora em contexto de crítica social"
          statement={
            <div>
              <p>
                <em>Trecho de poema (situação típica ENEM):</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "They plant seeds of doubt in fertile minds / Water them with fear, with
                lies refined / And harvest fields of silence, row on row — / A nation
                kept in darkness, forced to grow."
              </p>
              <p>
                A metáfora agrícola (semear, regar, colher) é usada nesse poema
                para representar:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O orgulho de uma nação pela sua produção agrícola e sustentabilidade alimentar." },
            { letter: "B", text: "A manipulação sistemática da população por meio da desinformação e do medo, gerando silêncio e conformidade.", correct: true },
            { letter: "C", text: "A metáfora de crescimento pessoal: apesar das dificuldades, as pessoas crescem como plantas." },
            { letter: "D", text: "Uma crítica ao agronegócio e ao uso de agrotóxicos que prejudicam a saúde da população." },
            { letter: "E", text: "A nostalgia de um passado rural e simples em contraste com a complexidade da vida moderna." },
          ]}
          resolution={
            <p>
              A metáfora agrícola é aplicada ao campo político: "seeds of doubt"
              (sementes de dúvida), "watered with fear" (regadas com medo),
              "harvest fields of silence" (colheita de silêncio). O cultivo
              não é de plantas, mas de <strong>conformismo e silêncio</strong>
              em uma população mantida na ignorância ("darkness"). O tom crítico
              é reforçado por "lies refined" e "forced to grow" — crescimento
              imposto, não livre. Trata-se de uma metáfora de{" "}
              <strong>manipulação política</strong> via desinformação.
            </p>
          }
        />
      </section>
    </article>
  );
}
