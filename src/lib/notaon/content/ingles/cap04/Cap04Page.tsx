"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 04</span>
          <h1>Uso do contexto para descobrir o significado das palavras</h1>
          <p>
            A habilidade de inferir o significado de palavras desconhecidas a
            partir do contexto (H27 na matriz do ENEM) é uma das mais avaliadas
            e também uma das mais desenvolvíveis. Você não precisa de dicionário
            — precisa de <strong>método</strong>.
          </p>
          <p>
            Neste capítulo você vai aprender os cinco tipos de pistas contextuais,
            as palavras-gatilho que sinalizam cada tipo de pista, a técnica do
            funil contextual e como usar pontuação e estrutura sintática para
            descobrir o sentido de qualquer palavra desconhecida em inglês.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Por que o Contexto é Suficiente</h2>
        <p>
          Textos são <strong>sistemas coerentes</strong>: cada palavra se
          relaciona com as outras ao redor. Quando um autor usa uma palavra
          difícil, ele frequentemente já fornece, no próprio texto, as
          informações necessárias para que o leitor entenda o sentido — seja
          por meio de uma definição, um exemplo, um contraste ou uma
          repetição sinonímica.
        </p>
        <p>
          Isso é especialmente verdadeiro em textos de divulgação científica,
          jornalísticos e educativos — exatamente os gêneros mais comuns no ENEM.
          Esses textos são escritos para um público amplo, e seus autores
          conscientemente incluem pistas para facilitar a compreensão de termos
          técnicos.
        </p>
        <div className="lesson-highlight">
          <strong>Princípio-chave:</strong> No ENEM, você nunca precisa saber o
          significado exato de uma palavra antes de ler o texto. O texto sempre
          fornece pistas suficientes para inferir o sentido dentro do contexto
          da questão.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pista tipo 1</span>
        <h2>2. Pista de Definição</h2>
        <p>
          A pista de <strong>definição</strong> ocorre quando o autor explica
          diretamente o significado da palavra no texto. É o tipo mais fácil
          de identificar — basta reconhecer as estruturas que introduzem
          definições:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra-gatilho</th>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>is / are / means</em></td>
                <td><em>"Photosynthesis <strong>is</strong> the process by which plants…"</em></td>
                <td>Fotossíntese é o processo pelo qual as plantas…</td>
              </tr>
              <tr>
                <td><em>which is / that is</em></td>
                <td><em>"The algorithm, <strong>which is</strong> a set of rules…"</em></td>
                <td>O algoritmo, que é um conjunto de regras…</td>
              </tr>
              <tr>
                <td><em>defined as / known as</em></td>
                <td><em>"Obesity, <strong>defined as</strong> a BMI over 30…"</em></td>
                <td>Obesidade, definida como IMC acima de 30…</td>
              </tr>
              <tr>
                <td><em>referred to as / called</em></td>
                <td><em>"This condition is <strong>called</strong> insomnia…"</em></td>
                <td>Esta condição é chamada de insônia…</td>
              </tr>
              <tr>
                <td>Travessão ou parênteses</td>
                <td><em>"Biodiversity — the variety of life on Earth — is…"</em></td>
                <td>Biodiversidade — a variedade de vida na Terra — é…</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando você encontrar um travessão (—) ou
          parênteses logo após uma palavra desconhecida, quase certamente o que
          vem a seguir é uma explicação ou definição daquela palavra.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pista tipo 2</span>
        <h2>3. Pista de Exemplo</h2>
        <p>
          A pista de <strong>exemplo</strong> ocorre quando o autor ilustra o
          sentido de uma palavra com casos concretos. Os exemplos tornam o
          sentido inferível mesmo sem a definição explícita.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>such as / like</h3>
            <p><em>"Legumes, <strong>such as</strong> beans, lentils and peas, are rich in protein."</em><br />(Leguminosas como feijão, lentilha e ervilha…)</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>for example / for instance</h3>
            <p><em>"Many mammals, <strong>for example</strong>, dogs and dolphins, have highly developed social behavior."</em></p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>including / among them</h3>
            <p><em>"Renewable energy sources, <strong>including</strong> solar and wind, are growing rapidly."</em></p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>e.g. / i.e.</h3>
            <p><em>"Chronic diseases (<strong>e.g.</strong>, diabetes, hypertension) affect millions."</em><br />(<em>e.g.</em> = exempli gratia = por exemplo)</p>
          </div>
        </div>
        <p>
          <strong>Como usar:</strong> Identifique os exemplos e pergunte-se
          "O que todos esses exemplos têm em comum?" A resposta é o significado
          da palavra desconhecida.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pista tipo 3</span>
        <h2>4. Pista de Contraste</h2>
        <p>
          A pista de <strong>contraste</strong> é uma das mais poderosas: o
          autor coloca a palavra desconhecida em oposição a outra que você
          conhece. Se você sabe o que está sendo contrastado, pode deduzir
          o oposto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra-gatilho de contraste</th>
                <th>Exemplo em inglês</th>
                <th>Inferência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>however / but / yet</em></td>
                <td><em>"He seemed <strong>timid</strong>, but his sister was very confident."</em></td>
                <td><em>timid</em> = oposto de confident = tímido</td>
              </tr>
              <tr>
                <td><em>unlike / in contrast</em></td>
                <td><em>"Unlike the <strong>affluent</strong> neighborhoods, the poor districts lacked infrastructure."</em></td>
                <td><em>affluent</em> = oposto de poor = rico, abastado</td>
              </tr>
              <tr>
                <td><em>although / even though</em></td>
                <td><em>"<strong>Although</strong> the task seemed <strong>daunting</strong>, she completed it easily."</em></td>
                <td><em>daunting</em> = algo que causa dificuldade = intimidador</td>
              </tr>
              <tr>
                <td><em>on the other hand</em></td>
                <td><em>"Traditional methods are slow; <strong>on the other hand</strong>, digital tools are <strong>expedient</strong>."</em></td>
                <td><em>expedient</em> = oposto de slow = rápido, eficiente</td>
              </tr>
              <tr>
                <td><em>while / whereas</em></td>
                <td><em>"<strong>While</strong> some species are <strong>nocturnal</strong>, others are active during the day."</em></td>
                <td><em>nocturnal</em> = oposto de "active during the day" = noturno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 (SVG 1) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pistas tipo 4 e 5</span>
        <h2>5. Pistas de Sinonímia e Antonímia</h2>
        <p>
          Autores frequentemente evitam repetir a mesma palavra usando{" "}
          <strong>sinônimos</strong> — ou reforçam um sentido negativo usando{" "}
          <strong>antônimos</strong>. Identificar esses recursos revela o
          significado da palavra desconhecida.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 230"
            aria-label="Diagrama das cinco pistas contextuais para inferência de vocabulário em inglês"
            role="img"
          >
            {/* Centro */}
            <ellipse cx="350" cy="115" rx="70" ry="35" fill="#4f46e5" />
            <text x="350" y="110" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PISTAS</text>
            <text x="350" y="126" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CONTEXTUAIS</text>

            {/* Definição */}
            <rect x="10" y="10" width="130" height="50" rx="8" fill="#7c3aed" />
            <text x="75" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1. Definição</text>
            <text x="75" y="50" textAnchor="middle" fill="white" fontSize="10">is / means / —</text>
            <line x1="140" y1="35" x2="282" y2="95" stroke="#7c3aed" strokeWidth="1.5" />

            {/* Exemplo */}
            <rect x="560" y="10" width="130" height="50" rx="8" fill="#059669" />
            <text x="625" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2. Exemplo</text>
            <text x="625" y="50" textAnchor="middle" fill="white" fontSize="10">such as / e.g.</text>
            <line x1="560" y1="35" x2="418" y2="95" stroke="#059669" strokeWidth="1.5" />

            {/* Contraste */}
            <rect x="10" y="170" width="130" height="50" rx="8" fill="#dc2626" />
            <text x="75" y="192" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3. Contraste</text>
            <text x="75" y="210" textAnchor="middle" fill="white" fontSize="10">but / however / unlike</text>
            <line x1="140" y1="195" x2="282" y2="138" stroke="#dc2626" strokeWidth="1.5" />

            {/* Sinonímia */}
            <rect x="280" y="175" width="140" height="50" rx="8" fill="#d97706" />
            <text x="350" y="197" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">4. Sinonímia</text>
            <text x="350" y="215" textAnchor="middle" fill="white" fontSize="10">ou seja / in other words</text>
            <line x1="350" y1="175" x2="350" y2="150" stroke="#d97706" strokeWidth="1.5" />

            {/* Antonímia */}
            <rect x="560" y="170" width="130" height="50" rx="8" fill="#0891b2" />
            <text x="625" y="192" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">5. Antonímia</text>
            <text x="625" y="210" textAnchor="middle" fill="white" fontSize="10">oposto / negação</text>
            <line x1="560" y1="195" x2="418" y2="138" stroke="#0891b2" strokeWidth="1.5" />
          </svg>
          <figcaption>Os cinco tipos de pistas contextuais para inferência de vocabulário. Identificar qual tipo de pista está presente no texto é o primeiro passo para descobrir o significado da palavra.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de pista</th>
                <th>Palavras-gatilho</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sinonímia</td>
                <td><em>or, in other words, that is, i.e., also known as</em></td>
                <td><em>"The <strong>pandemic</strong>, or global disease outbreak, affected…"</em></td>
              </tr>
              <tr>
                <td>Antonímia</td>
                <td>Negação + palavra conhecida</td>
                <td><em>"She was not <strong>gregarious</strong>; she preferred to be alone."</em><br />(gregarious = oposto de solitário = sociável)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica avançada</span>
        <h2>6. A Técnica do Funil Contextual</h2>
        <p>
          O <strong>funil contextual</strong> é uma técnica sistemática para
          inferir o significado de palavras desconhecidas. Funciona em três
          níveis de análise, do mais amplo ao mais específico:
        </p>
        <ol>
          <li>
            <strong>Nível macro — Tema do texto:</strong> Qual é o assunto geral
            do texto? (meio ambiente, tecnologia, saúde, política…) Isso já
            delimita o campo semântico da palavra.
          </li>
          <li>
            <strong>Nível médio — Parágrafo:</strong> Qual é a ideia do parágrafo
            em que a palavra aparece? O parágrafo trata de causas, consequências,
            soluções, exemplos?
          </li>
          <li>
            <strong>Nível micro — Frase:</strong> Quais palavras imediatamente
            antes e depois da palavra desconhecida? Há palavras-gatilho de
            definição, contraste ou exemplo?
          </li>
        </ol>
        <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "16px", marginTop: "16px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Exemplo prático do funil:</p>
          <p style={{ fontStyle: "italic", marginBottom: "8px" }}>
            "Scientists are developing new ways to combat the growing{" "}
            <strong>proliferation</strong> of plastic waste in the oceans,
            which has tripled in the past decade."
          </p>
          <ul>
            <li><strong>Nível macro:</strong> Texto sobre poluição plástica nos oceanos.</li>
            <li><strong>Nível médio:</strong> Parágrafo sobre o problema (crescimento do lixo plástico).</li>
            <li><strong>Nível micro:</strong> "growing" + "has tripled" = algo que cresceu muito. <em>Proliferation</em> = multiplicação excessiva, proliferação.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pontuação como pista</span>
        <h2>7. A Pontuação como Pista de Significado</h2>
        <p>
          A pontuação em inglês frequentemente sinaliza que uma explicação ou
          reformulação está vindo. Saber interpretar esses sinais é fundamental:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sinal de pontuação</th>
                <th>O que sinaliza</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Travessão (—)</td>
                <td>Definição ou explicação a seguir</td>
                <td><em>"Empathy — the ability to feel what others feel — is essential."</em></td>
              </tr>
              <tr>
                <td>Parênteses ( )</td>
                <td>Explicação ou equivalência</td>
                <td><em>"The WHO (World Health Organization) reported…"</em></td>
              </tr>
              <tr>
                <td>Vírgula + aposto</td>
                <td>Descrição ou definição complementar</td>
                <td><em>"Arachnophobia, the fear of spiders, is very common."</em></td>
              </tr>
              <tr>
                <td>Dois-pontos (:)</td>
                <td>Explicação ou listagem a seguir</td>
                <td><em>"She had one goal: to <strong>alleviate</strong> suffering."</em></td>
              </tr>
              <tr>
                <td>Aspas (" ")</td>
                <td>Termo técnico ou irônico sendo introduzido</td>
                <td><em>"This "miracle" drug turned out to be dangerous."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 (SVG 2) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura sintática</span>
        <h2>8. Estrutura da Frase como Pista</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            aria-label="Diagrama mostrando como a posição da palavra na frase revela sua função gramatical e semântica"
            role="img"
          >
            {/* Título */}
            <rect x="150" y="10" width="400" height="35" rx="8" fill="#4f46e5" />
            <text x="350" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ESTRUTURA FRASAL → FUNÇÃO DA PALAVRA</text>

            {/* Estrutura 1 */}
            <rect x="20" y="60" width="310" height="60" rx="8" fill="#ede9fe" />
            <text x="175" y="82" textAnchor="middle" fill="#4c1d95" fontSize="13" fontWeight="bold">SUJEITO + VERBO + COMPLEMENTO</text>
            <text x="175" y="105" textAnchor="middle" fill="#5b21b6" fontSize="11">Se a palavra desconhecida é SUJEITO →</text>
            <text x="175" y="118" textAnchor="middle" fill="#5b21b6" fontSize="11">provavelmente é substantivo (quem pratica a ação)</text>

            {/* Estrutura 2 */}
            <rect x="370" y="60" width="310" height="60" rx="8" fill="#d1fae5" />
            <text x="525" y="82" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">ARTIGO + [?] + SUBSTANTIVO</text>
            <text x="525" y="105" textAnchor="middle" fill="#065f46" fontSize="11">Se a palavra desconhecida está nessa posição →</text>
            <text x="525" y="118" textAnchor="middle" fill="#065f46" fontSize="11">provavelmente é adjetivo (modifica o substantivo)</text>

            {/* Estrutura 3 */}
            <rect x="20" y="140" width="310" height="60" rx="8" fill="#fef3c7" />
            <text x="175" y="162" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold">VERBO + [?] + COMPLEMENTO</text>
            <text x="175" y="183" textAnchor="middle" fill="#92400e" fontSize="11">Se a palavra desconhecida está aqui →</text>
            <text x="175" y="196" textAnchor="middle" fill="#92400e" fontSize="11">provavelmente é advérbio (modifica o verbo)</text>

            {/* Estrutura 4 */}
            <rect x="370" y="140" width="310" height="60" rx="8" fill="#fee2e2" />
            <text x="525" y="162" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="bold">PREPOSIÇÃO + [?]</text>
            <text x="525" y="183" textAnchor="middle" fill="#991b1b" fontSize="11">Se a palavra segue uma preposição →</text>
            <text x="525" y="196" textAnchor="middle" fill="#991b1b" fontSize="11">provavelmente é substantivo ou pronome</text>
          </svg>
          <figcaption>A posição da palavra na frase revela sua função gramatical, o que ajuda a delimitar seu sentido e eliminar interpretações impossíveis.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Palavras de aviso</span>
        <h2>9. Palavras-Gatilho: seu Guia de Pistas Contextuais</h2>
        <p>
          As <strong>palavras-gatilho</strong> são termos que sinalizam o tipo
          de relação entre as ideias do texto. Dominá-las permite navegar em
          textos em inglês com muito mais segurança:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de relação</th>
                <th>Palavras-gatilho em inglês</th>
                <th>Equivalente em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adição</td>
                <td><em>also, furthermore, moreover, additionally, besides, in addition</em></td>
                <td>também, além disso, ademais</td>
              </tr>
              <tr>
                <td>Contraste</td>
                <td><em>however, but, yet, although, despite, on the other hand, unlike, while</em></td>
                <td>porém, mas, embora, apesar de, por outro lado</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td><em>because, since, as, due to, caused by, owing to, for</em></td>
                <td>porque, pois, por causa de, devido a</td>
              </tr>
              <tr>
                <td>Consequência</td>
                <td><em>therefore, thus, consequently, as a result, so, hence</em></td>
                <td>portanto, assim, consequentemente, como resultado</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td><em>in conclusion, to sum up, finally, in summary, overall</em></td>
                <td>em conclusão, para resumir, enfim</td>
              </tr>
              <tr>
                <td>Exemplificação</td>
                <td><em>for example, for instance, such as, like, including, e.g.</em></td>
                <td>por exemplo, como, incluindo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Estratégia de prova:</strong> Quando encontrar uma palavra
          desconhecida, sempre leia a frase <em>inteira</em> — não apenas o
          trecho imediato. Muitas vezes a pista está no início ou no fim da
          frase, ligada por uma das palavras-gatilho acima.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática guiada</span>
        <h2>10. Aplicação Prática: Análise Passo a Passo</h2>
        <p>
          Vamos aplicar as técnicas a uma questão típica do ENEM. Leia o texto
          e observe como cada nível do funil contextual funciona:
        </p>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
          <p style={{ fontStyle: "italic" }}>
            "The rise of social media has given ordinary people an unprecedented
            platform to <strong>disseminate</strong> their ideas. Unlike
            traditional media, which was controlled by a few corporations, the
            internet allows anyone to share information instantly and globally."
          </p>
        </div>
        <p>Aplicando o funil contextual à palavra <em>disseminate</em>:</p>
        <ul>
          <li>
            <strong>Macro:</strong> Texto sobre redes sociais e democratização da
            comunicação.
          </li>
          <li>
            <strong>Médio:</strong> O parágrafo fala que as pessoas agora têm
            uma "plataforma" (plataforma) para fazer algo com suas ideias.
          </li>
          <li>
            <strong>Micro:</strong> "platform to <em>disseminate</em> their ideas"
            + contraste com "traditional media" que "controlava". A segunda
            frase confirma: "share information" = compartilhar informação.
          </li>
          <li>
            <strong>Conclusão:</strong> <em>disseminate</em> = disseminar,
            espalhar, compartilhar (sinônimo de "share information" dado na
            frase seguinte — pista de sinonímia!).
          </li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> A frase imediatamente após a palavra
          desconhecida frequentemente a parafraseia (explica com outras palavras).
          Esta é a pista de sinonímia — a mais comum nos textos do ENEM.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Pista de definição — travessão"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Empathy — the ability to understand and share the feelings of
                another person — is considered a fundamental skill for social harmony."
              </p>
              <p>
                Com base na pista contextual presente no texto, a palavra{" "}
                <strong>empathy</strong> significa:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "A capacidade de resolver conflitos sociais de forma jurídica." },
            { letter: "B", text: "A habilidade de entender e compartilhar os sentimentos de outra pessoa.", correct: true },
            { letter: "C", text: "A tendência de evitar interações sociais para preservar a harmonia." },
            { letter: "D", text: "A inteligência emocional necessária para liderar grupos grandes." },
            { letter: "E", text: "O estudo científico das emoções humanas e suas causas biológicas." },
          ]}
          resolution={
            <p>
              O texto usa a <strong>pista de definição com travessão</strong>:
              "Empathy — <em>the ability to understand and share the feelings
              of another person</em> —". O próprio texto define a palavra entre
              travessões. A alternativa B é a tradução direta dessa definição.
              Este é o tipo mais direto de pista contextual — quando você a
              identifica, a resposta está explícita no texto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Pista de contraste"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "While some teenagers are extremely <strong>reticent</strong> in
                class, rarely speaking or participating, others talk constantly
                and dominate discussions."
              </p>
              <p>
                O tipo de pista contextual presente na frase e o significado de{" "}
                <strong>reticent</strong> são, respectivamente:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Pista de exemplo; reticent = comunicativo e expressivo." },
            { letter: "B", text: "Pista de definição; reticent = tímido por problemas psicológicos." },
            { letter: "C", text: "Pista de contraste; reticent = reservado, que fala pouco.", correct: true },
            { letter: "D", text: "Pista de sinonímia; reticent = dominante nas discussões em grupo." },
            { letter: "E", text: "Pista de antonímia; reticent = falante e participativo." },
          ]}
          resolution={
            <p>
              A pista é de <strong>contraste</strong>: a palavra-gatilho{" "}
              <em>while</em> (enquanto) coloca dois grupos em oposição —
              teenagers "reticent" vs. "others talk constantly". Como o
              segundo grupo fala muito, o primeiro (reticent) faz o oposto:
              fala pouco, é reservado. Isso é confirmado pelo detalhe
              "rarely speaking or participating" na mesma cláusula.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Funil contextual — múltiplas pistas"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The government's response to the crisis was heavily criticized
                for being too <strong>lenient</strong>. Critics argued that the
                penalties imposed were far too light and that more severe
                punishments were necessary to deter future violations."
              </p>
              <p>
                Usando o funil contextual, o significado de <strong>lenient</strong> é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Severo, rígido — que impõe punições pesadas." },
            { letter: "B", text: "Brando, permissivo — que não impõe punições suficientemente severas.", correct: true },
            { letter: "C", text: "Eficaz, eficiente — que resolve problemas rapidamente." },
            { letter: "D", text: "Transparente, honesto — que age de forma ética e aberta." },
            { letter: "E", text: "Contraditório — que age de forma inconsistente." },
          ]}
          resolution={
            <p>
              Aplicando o funil: <strong>Macro</strong> = crise + resposta do
              governo. <strong>Médio</strong> = crítica ao governo.{" "}
              <strong>Micro</strong>: "too lenient" é criticado → as penalidades
              foram "too light" (muito leves) → é necessário punição "more severe"
              (mais severa). Portanto, <em>lenient</em> é sinônimo de "too light"
              e oposto de "severe" = brando, permissivo. A alternativa B está
              correta. Note como a pista de sinonímia (<em>light</em>) e de
              contraste (<em>severe</em>) funcionam juntas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Pista de exemplo + estrutura sintática"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The Amazon basin is home to an extraordinary array of{" "}
                <strong>fauna</strong>, including jaguars, toucans, anacondas,
                pink river dolphins and thousands of insect species."
              </p>
              <p>
                O tipo de pista contextual e o significado de{" "}
                <strong>fauna</strong> são:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Pista de definição; fauna = variedade de plantas de uma região." },
            { letter: "B", text: "Pista de contraste; fauna = habitat natural de animais silvestres." },
            { letter: "C", text: "Pista de exemplo; fauna = conjunto de animais de uma região.", correct: true },
            { letter: "D", text: "Pista de sinonímia; fauna = ecossistema completo de uma floresta." },
            { letter: "E", text: "Pista de antonímia; fauna = conjunto de espécies extintas de uma área." },
          ]}
          resolution={
            <p>
              A pista é de <strong>exemplo</strong>: a palavra-gatilho{" "}
              <em>including</em> introduz exemplos de fauna (jaguares, tucanos,
              anacondas, botos-cor-de-rosa, insetos). Todos são animais —
              portanto <em>fauna</em> = conjunto de animais de uma região.
              A alternativa A confunde com flora (plantas). Note também a
              estrutura sintática: <em>fauna</em> é o objeto direto de
              "is home to" — posição de substantivo, confirmando que é um
              substantivo referindo-se a um conjunto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Aplicação integrada — questão estilo ENEM"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Digital misinformation — false or misleading information spread
                online — has become one of the most <strong>pervasive</strong>{" "}
                threats to modern democracy. Unlike traditional fake news, which
                was limited to certain regions, digital misinformation spreads
                globally within minutes, reaching every corner of the world."
              </p>
              <p>
                De acordo com o texto, a palavra <strong>pervasive</strong>
                refere-se a algo que:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "É facilmente detectado e combatido pelas autoridades competentes." },
            { letter: "B", text: "Afeta apenas regiões específicas, com impacto local limitado." },
            { letter: "C", text: "Está amplamente espalhado e presente em todos os lugares.", correct: true },
            { letter: "D", text: "É recente e surgiu especificamente com o advento das redes sociais." },
            { letter: "E", text: "Pode ser controlado com legislação adequada e educação midiática." },
          ]}
          resolution={
            <p>
              O texto usa múltiplas pistas. A <strong>pista de definição</strong>
              vem pelo travessão: "false or misleading information spread online".
              A pista para <em>pervasive</em> vem do <strong>contraste</strong>:
              "Unlike traditional fake news, which was limited to certain regions"
              vs. "spreads globally within minutes, reaching every corner of the
              world". <em>Pervasive</em> = oposto de "limited to certain regions"
              = amplamente espalhado, que está em todo lugar. A alternativa C
              é a única que captura esse sentido.
            </p>
          }
        />
      </section>
    </article>
  );
}
