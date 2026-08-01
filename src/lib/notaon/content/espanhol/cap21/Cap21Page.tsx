"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 21</span>
          <h1>Inferência, ironia, humor e intenção comunicativa</h1>
          <p>
            As questões mais sofisticadas da prova de espanhol do ENEM testam habilidades que vão muito além do
            vocabulário: pedem que o candidato <strong>infira</strong> informações que o texto sugere sem dizer
            explicitamente, que reconheça <strong>ironia</strong> e <strong>humor</strong> em textos e charges
            hispânicas, e que identifique a <strong>intenção comunicativa</strong> do autor — se deseja informar,
            persuadir, criticar, entreter ou expressar emoções. Essas são habilidades de leitura crítica que
            se desenvolvem com prática e que, uma vez dominadas, permitem resolver questões mesmo com vocabulário
            limitado, pois dependem mais de lógica e sensibilidade textual do que de conhecimento lexical puro.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Inferência ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inferência</span>
        <h2>O que é inferência e como o ENEM a testa</h2>
        <p>
          <strong>Inferir</strong> é ir além do que está literalmente escrito no texto usando pistas linguísticas,
          conhecimento de mundo e raciocínio lógico. Uma inferência válida é aquela que decorre
          <em> necessariamente</em> das informações fornecidas — não é uma suposição possível, mas uma conclusão
          quase obrigatória dada a evidência textual.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de inferência</th>
                <th>Como funciona</th>
                <th>Exemplo em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inferência léxica</td>
                <td>Deduzir o significado de uma palavra pelo contexto</td>
                <td><em>"El vetusto edificio..."</em> → vetusto = muito antigo (pelo contexto de deterioração)</td>
              </tr>
              <tr>
                <td>Inferência pragmática</td>
                <td>Deduzir intenção ou consequência não dita</td>
                <td><em>"La empresa redujo costos eliminando puestos de trabajo"</em> → houve demissões</td>
              </tr>
              <tr>
                <td>Inferência cultural</td>
                <td>Usar conhecimento cultural para completar o sentido</td>
                <td>Referência a "el Día de los Muertos" → contexto mexicano de celebração da morte</td>
              </tr>
              <tr>
                <td>Inferência lógica</td>
                <td>Dedução pela lógica da argumentação</td>
                <td>Se A causa B e B causa C, então A causa C (cadeia causal no texto)</td>
              </tr>
              <tr>
                <td>Inferência por contraste</td>
                <td>O que é dito sobre A implica o oposto sobre B</td>
                <td><em>"A diferencia de sus colegas, María siempre llegaba puntual"</em> → colegas atrasavam</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Teste da necessidade:</strong> Antes de marcar uma inferência, pergunte: "Essa conclusão
          é <em>necessariamente</em> verdadeira dado o texto, ou apenas <em>possivelmente</em> verdadeira?"
          O ENEM cobra inferências necessárias, não especulações. Se a conclusão depende de informações
          que estão fora do texto, provavelmente é um distrator.
        </div>
      </section>

      {/* ── Seção 2: Pistas linguísticas de inferência ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pistas Linguísticas</span>
        <h2>Pistas que sinalizam inferência em textos espanhóis</h2>
        <p>
          Certos elementos linguísticos em textos em espanhol funcionam como sinais de que há informação
          implícita a ser inferida. Reconhecê-los acelera a leitura e orienta a busca pela inferência correta.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Conectivos causais</h3>
            <p><em>porque, ya que, puesto que, dado que, a causa de</em> → inferir a relação causa-efeito implícita nos argumentos que seguem.</p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Conectivos de contraste</h3>
            <p><em>sin embargo, aunque, a pesar de, no obstante, pero</em> → o que vem depois contradiz ou limita o que foi dito, revelando a posição real do autor.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Advérbios de modo</h3>
            <p><em>sorprendentemente, curiosamente, lamentablemente, por suerte</em> → revelam a avaliação do autor sobre o fato, mesmo sem declarar explicitamente sua opinião.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Pressupostos</h3>
            <p><em>"Dejó de fumar"</em> pressupõe que fumava antes. <em>"Volvió a intentarlo"</em> pressupõe que havia tentado antes e falhado. Pressupostos são informações inferidas estruturalmente.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 3: Ironia ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ironia</span>
        <h2>Ironia em textos hispânicos</h2>
        <p>
          A ironia ocorre quando o significado real de uma afirmação é <strong>oposto</strong> ao seu significado
          literal. Em textos em espanhol, a ironia é especialmente frequente em artigos de opinião, charges,
          crônicas e literatura. O ENEM cobra a capacidade de reconhecer a ironia mesmo sem conhecer todo o
          vocabulário.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Mecanismos de ironia em espanhol">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <rect x="20" y="15" width="200" height="175" rx="10" fill="#dbeafe" />
            <text x="120" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">Elogio como crítica</text>
            <text x="120" y="62" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">"¡Qué magnífica idea</text>
            <text x="120" y="78" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic"> subir los impuestos!"</text>
            <text x="120" y="100" textAnchor="middle" fontSize="11" fill="#1e40af">Elogio exagerado</text>
            <text x="120" y="118" textAnchor="middle" fontSize="11" fill="#1e40af">em contexto negativo</text>
            <text x="120" y="138" textAnchor="middle" fontSize="11" fill="#1e40af">→ Real: crítica à</text>
            <text x="120" y="156" textAnchor="middle" fontSize="11" fill="#1e40af">medida tributária</text>
            <rect x="245" y="15" width="200" height="175" rx="10" fill="#fef3c7" />
            <text x="345" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">Exagero absurdo</text>
            <text x="345" y="62" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic">"Gracias a la reforma,</text>
            <text x="345" y="78" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic"> todos somos millonarios."</text>
            <text x="345" y="100" textAnchor="middle" fontSize="11" fill="#92400e">Afirmação claramente</text>
            <text x="345" y="118" textAnchor="middle" fontSize="11" fill="#92400e">falsa/impossível</text>
            <text x="345" y="138" textAnchor="middle" fontSize="11" fill="#92400e">→ Real: a reforma</text>
            <text x="345" y="156" textAnchor="middle" fontSize="11" fill="#92400e">não beneficiou ninguém</text>
            <rect x="470" y="15" width="210" height="175" rx="10" fill="#fce7f3" />
            <text x="575" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#9d174d">Contraste situacional</text>
            <text x="575" y="62" textAnchor="middle" fontSize="11" fill="#9d174d" fontStyle="italic">"El ministro de salud</text>
            <text x="575" y="78" textAnchor="middle" fontSize="11" fill="#9d174d" fontStyle="italic"> fuma tres cajetillas</text>
            <text x="575" y="94" textAnchor="middle" fontSize="11" fill="#9d174d" fontStyle="italic"> al día."</text>
            <text x="575" y="114" textAnchor="middle" fontSize="11" fill="#9d174d">Contradição entre</text>
            <text x="575" y="132" textAnchor="middle" fontSize="11" fill="#9d174d">papel e comportamento</text>
            <text x="575" y="152" textAnchor="middle" fontSize="11" fill="#9d174d">→ Real: hipocrisia</text>
            <text x="575" y="170" textAnchor="middle" fontSize="11" fill="#9d174d">do personagem</text>
          </svg>
          <figcaption>Três mecanismos principais de ironia em textos e charges hispânicas.</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Marcador de ironia</th><th>Função</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>Aspas (" ")</td><td>Distanciamento irônico do termo</td><td><em>El "milagro" económico duró tres meses.</em></td></tr>
              <tr><td>Elogios exagerados</td><td>Hipérbole com intenção crítica</td><td><em>¡Claro, como siempre, brillante decisión!</em></td></tr>
              <tr><td>Tom formal em contexto absurdo</td><td>Incongruência de registro</td><td><em>El honorable candidato robó apenas 2 millones.</em></td></tr>
              <tr><td>Contraste explícito</td><td>Realidade vs. expectativa</td><td><em>El partido de la honestidad fue hallado culpable.</em></td></tr>
              <tr><td>Exclamações em contexto negativo</td><td>Simulação de entusiasmo</td><td><em>¡Fantástico! Otro año sin aumento de sueldo.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4: Humor ── */}
      <section className="lesson-section">
        <span className="section-kicker">Humor</span>
        <h2>Humor em textos e charges hispânicos</h2>
        <p>
          O humor em espanhol funciona por mecanismos que frequentemente independem do vocabulário exato: a
          <strong> violação de expectativas</strong>, o <strong>duplo sentido</strong> e a <strong>incongruência
          situacional</strong> são os mais comuns em textos do ENEM. Reconhecer esses mecanismos permite
          responder questões sobre humor mesmo com limitações lexicais.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😂</span>
            <h3>Violação de expectativa</h3>
            <p>O texto cria uma expectativa e a quebra de forma inesperada. <em>"El político prometió acabar con la corrupción... y lo hizo: él se quedó solo con ella."</em></p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Duplo sentido (juego de palabras)</h3>
            <p>Uma palavra ou frase tem dois significados possíveis. <em>"Los economistas tienen muchas cifras... y pocas certezas."</em> (cifras = números / cifras escondidas)</p>
          </div>
          <div className="lesson-card">
            <span>🤡</span>
            <h3>Incongruência situacional</h3>
            <p>Personagem ou situação em contexto radicalmente inadequado para criar efeito cômico. Usado com frequência em charges hispânicas do ENEM.</p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Humor por absurdo</h3>
            <p>A situação é levada ao extremo impossível para revelar o ridículo de uma posição real. Comum em textos satíricos de jornais hispânicos de opinião.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 5: Charges e tirinhas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Charges e Tirinhas</span>
        <h2>Como interpretar charges e tirinhas em espanhol</h2>
        <p>
          O ENEM frequentemente usa charges e tirinhas em espanhol. A vantagem para o candidato é que esses
          gêneros comunicam principalmente por imagens — o texto verbal (balões, legenda) é secundário. Saber
          interpretar os elementos visuais é tão importante quanto o texto linguístico.
        </p>
        <div className="lesson-highlight">
          <strong>Protocolo para charges em espanhol:</strong> (1) Identifique quem são os personagens
          (políticos, trabalhadores, cidadãos comuns — símbolos como gravata, uniforme, coroa). (2) Identifique
          o contexto visual (o que está acontecendo na imagem). (3) Leia os balões (mesmo com vocabulário
          limitado, pistas do contexto ajudam). (4) Identifique o contraste ou incongruência principal.
          (5) Pergunta-guia: <em>"¿Qué crítica hace el autor?"</em>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Elementos de análise de charges em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="15" width="310" height="165" rx="10" fill="#d1fae5" />
            <text x="175" y="40" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">O que analisar na charge</text>
            <text x="30" y="62" fontSize="11" fill="#065f46">🎭 Quem são os personagens?</text>
            <text x="30" y="80" fontSize="11" fill="#065f46">📍 Qual é o cenário / contexto visual?</text>
            <text x="30" y="98" fontSize="11" fill="#065f46">💬 O que dizem os balões?</text>
            <text x="30" y="116" fontSize="11" fill="#065f46">⚡ Qual é o contraste principal?</text>
            <text x="30" y="134" fontSize="11" fill="#065f46">🎯 Qual é a crítica implícita?</text>
            <text x="30" y="152" fontSize="11" fill="#065f46">🔍 Há exagero ou ironia visual?</text>
            <text x="30" y="170" fontSize="11" fill="#065f46">🌍 Qual é o contexto sociopolítico?</text>
            <rect x="360" y="15" width="320" height="165" rx="10" fill="#fef3c7" />
            <text x="520" y="40" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#92400e">Elementos visuais típicos</text>
            <text x="370" y="62" fontSize="11" fill="#92400e">👔 Gravata / terno = político / executivo</text>
            <text x="370" y="80" fontSize="11" fill="#92400e">👷 Capacete = trabalhador</text>
            <text x="370" y="98" fontSize="11" fill="#92400e">⚖️ Balança = Justiça</text>
            <text x="370" y="116" fontSize="11" fill="#92400e">💰 Saco de dinheiro = corrupção/riqueza</text>
            <text x="370" y="134" fontSize="11" fill="#92400e">🐘/🐴 Animais = partidos políticos (EUA)</text>
            <text x="370" y="152" fontSize="11" fill="#92400e">📉 Gráfico em queda = crise econômica</text>
            <text x="370" y="170" fontSize="11" fill="#92400e">👑 Coroa = poder absoluto</text>
          </svg>
          <figcaption>Elementos de análise visual de charges hispânicas — compreensão independe de vocabulário completo.</figcaption>
        </figure>
      </section>

      {/* ── Seção 6: Intenção comunicativa ── */}
      <section className="lesson-section">
        <span className="section-kicker">Intenção Comunicativa</span>
        <h2>Intenção comunicativa: por que o autor escreveu isso?</h2>
        <p>
          Todo texto tem uma <strong>intenção comunicativa</strong> — um propósito que o autor quer atingir
          com o leitor. O ENEM testa a capacidade de identificar essa intenção, que nem sempre está declarada
          explicitamente no texto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Intenção</th>
                <th>Gênero típico</th>
                <th>Marcadores em espanhol</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Informar</td>
                <td>Notícia, relatório</td>
                <td><em>según, de acuerdo con, los datos muestran</em></td>
                <td>Notícia sobre eleições</td>
              </tr>
              <tr>
                <td>Persuadir</td>
                <td>Artigo de opinião, publicidade</td>
                <td><em>es necesario, hay que, debemos, por eso</em></td>
                <td>Editorial pedindo reforma</td>
              </tr>
              <tr>
                <td>Criticar</td>
                <td>Charge, crônica, sátira</td>
                <td>Ironia, exagero, contraste, aspas</td>
                <td>Charge sobre corrupção</td>
              </tr>
              <tr>
                <td>Entreter</td>
                <td>Crônica humorística, conto</td>
                <td>Humor, anedota, narração lúdica</td>
                <td>Crônica cômica de jornal</td>
              </tr>
              <tr>
                <td>Expressar emoção</td>
                <td>Poema, carta, diário</td>
                <td>Vocativos, exclamações, linguagem figurada</td>
                <td>Poema de Pablo Neruda</td>
              </tr>
              <tr>
                <td>Instruir</td>
                <td>Manual, receita, tutorial</td>
                <td>Imperativo, sequência numérica, <em>primero... luego... finalmente</em></td>
                <td>Receita de cocina mexicana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: Análise de gênero e intenção ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gênero e Intenção</span>
        <h2>Como gênero e intenção se relacionam</h2>
        <p>
          A identificação do gênero textual é o primeiro passo para determinar a intenção comunicativa. Um
          mesmo tema pode ser tratado com intenções completamente diferentes dependendo do gênero. Compare:
        </p>
        <div className="lesson-highlight">
          <strong>Mesmo tema, intenções diferentes:</strong>
          <br />
          Tema: <em>desigualdade social</em>
          <br />
          • <em>Notícia:</em> "La pobreza afecta al 30% de la población, según el INE." → <strong>informar</strong>
          <br />
          • <em>Artigo de opinião:</em> "Es urgente que el gobierno actúe ante la pobreza estructural." → <strong>persuadir</strong>
          <br />
          • <em>Charge:</em> Político em palácio de luxo enquanto cidadãos passam fome → <strong>criticar</strong>
          <br />
          • <em>Conto:</em> História de uma família que supera a pobreza → <strong>entreter / emocionar</strong>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Identificar o gênero</h3>
            <p>Formato, fonte, estrutura. Uma notícia tem lide; um poema tem versos; uma charge tem imagem + pouquíssimo texto verbal.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Quem é o público</h3>
            <p>Um artigo em jornal de negócios tem intenção diferente do mesmo tema em jornal popular. O público-alvo molda a intenção.</p>
          </div>
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Tom do texto</h3>
            <p>Formal, informal, irônico, emocional, neutro? O tom revela a intenção mesmo quando ela não é declarada.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 8: Dica ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>Como resolver questões de inferência e ironia no ENEM</h2>
        <div className="math-block">
          <strong>Para questões de inferência:</strong>
          <br />
          1. Leia a questão antes do texto — saiba o que inferir.
          <br />
          2. Encontre a parte do texto mais relevante por scanning.
          <br />
          3. Pergunte: "Essa conclusão é NECESSÁRIA ou apenas POSSÍVEL?"
          <br />
          4. Elimine alternativas que vão além do texto ou o contradizem.
          <br /><br />
          <strong>Para questões de ironia/humor:</strong>
          <br />
          1. Identifique o contraste ou incongruência central.
          <br />
          2. Pergunte: "O que o autor diz" vs. "O que o autor quer dizer".
          <br />
          3. Para charges: a crítica quase sempre vai de "aparência" (o que é dito/mostrado) para "realidade" (o que está sendo denunciado).
          <br />
          4. Elimine alternativas que tomam o texto irônico ao pé da letra.
        </div>
        <div className="lesson-highlight">
          <strong>Dica para charges:</strong> Se os personagens parecem contentes com uma situação absurda,
          o autor está sendo irônico — está criticando exatamente essa conformidade. Se um personagem poderoso
          age de forma contrária ao seu papel (ministro da saúde fumando, juiz recebendo suborno), o humor vem
          da hipocrisia exposta.
        </div>
      </section>

      {/* ── Seção 9: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Inferência léxica pelo contexto"
          statement={
            <p>
              Leia: <em>"El magnate, rodeado de sus numerosos sirvientes en su opulenta mansión, afirmó no
              entender por qué la gente se quejaba de la crisis económica."</em>{" "}
              Mesmo sem conhecer a palavra <em>opulenta</em>, o que é possível inferir sobre a mansão?
            </p>
          }
          options={[
            { letter: "a", text: "A mansão é simples e modesta." },
            { letter: "b", text: "A mansão é luxuosa e rica.", correct: true },
            { letter: "c", text: "A mansão está em mau estado de conservação." },
            { letter: "d", text: "A mansão é histórica e muito antiga." },
          ]}
          resolution={
            <p>
              A inferência léxica usa o contexto: o personagem é um <em>magnata</em> (pessoa muito rica), tem
              "numerosos sirvientes" (muitos empregados), e a palavra <em>opulenta</em> acompanha "mansão" —
              todos esses elementos apontam para <strong>riqueza e luxo</strong>. Além disso, o contraste entre
              a vida do magnata e a "crise econômica" reforça a ideia de opulência. <em>Opulenta</em> = opulenta,
              luxuosa. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ironia em artigo de opinião"
          statement={
            <p>
              Leia o trecho de um artigo de opinião espanhol:{" "}
              <em>"¡Qué buena noticia para los trabajadores! La empresa decidió 'optimizar recursos' —
              elegante expresión para despedir a 500 empleados — justo antes de anunciar que sus ganancias
              crecieron un 40% en el último trimestre."</em>{" "}
              O autor usa ironia para:
            </p>
          }
          options={[
            { letter: "a", text: "Elogiar a decisão da empresa de otimizar recursos." },
            { letter: "b", text: "Criticar a empresa por demitir funcionários enquanto registrava lucros altos.", correct: true },
            { letter: "c", text: "Informar neutralmente sobre as decisões econômicas da empresa." },
            { letter: "d", text: "Expressar entusiasmo com o crescimento dos lucros empresariais." },
          ]}
          resolution={
            <p>
              O autor usa dois recursos irônicos: (1) <em>"¡Qué buena noticia para los trabajadores!"</em> —
              elogio falso em contexto claramente negativo (demissões); (2) As aspas em <em>'optimizar
              recursos'</em> — distanciamento irônico do eufemismo corporativo, seguido de tradução direta
              ("elegante expresión para despedir a 500 empleados"). O contraste entre demissões e lucros
              crescentes é o núcleo da crítica. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inferência pragmática em texto literário"
          statement={
            <p>
              Leia: <em>"Don Aurelio llegó al banco a las 9 en punto, como todos los días. El cajero lo
              saludó por su nombre. La gerente lo invitó a sentarse en el área VIP. El café ya estaba
              servido. Pero cuando el agente de seguridad le susurró algo al oído, el color del rostro de
              Don Aurelio cambió de golpe."</em>{" "}
              O que se pode inferir sobre o que ocorreu?
            </p>
          }
          options={[
            { letter: "a", text: "Don Aurelio descobriu que o banco estava fechado naquele dia." },
            { letter: "b", text: "Don Aurelio recebeu uma má notícia inesperada que perturbou sua rotina privilegiada.", correct: true },
            { letter: "c", text: "Don Aurelio ficou feliz com a mensagem do segurança." },
            { letter: "d", text: "O agente de segurança cumprimentou Don Aurelio como de costume." },
          ]}
          resolution={
            <p>
              O texto constrói uma cena de rotina confortável (tratamento VIP, café servido, cumprimentos pelo
              nome) e a interrompe abruptamente com uma mensagem susurrada que faz Don Aurelio mudar de cor
              (<em>"el color del rostro cambió de golpe"</em> — expressão de choque/susto). A inferência
              pragmática é que a mensagem foi uma <strong>má notícia inesperada</strong> — contrária à rotina
              tranquila estabelecida. O texto não especifica o conteúdo, mas a reação física é inequívoca.
              Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Charge hispânica — intenção comunicativa"
          statement={
            <p>
              Uma charge mostra um médico com estetoscópio examinando um paciente chamado "Planeta Tierra".
              O planeta está deitado numa maca hospitalar, com febre alta, e o médico, olhando para o paciente,
              diz: <em>"El diagnóstico es grave. Pero el problema es que el paciente no quiere cambiar sus
              hábitos."</em> A intenção comunicativa da charge é:
            </p>
          }
          options={[
            { letter: "a", text: "Informar sobre as causas das doenças em países em desenvolvimento." },
            { letter: "b", text: "Entreter o leitor com uma situação fantasiosa e sem sentido." },
            { letter: "c", text: "Criticar a inação humana diante da crise ambiental, usando a metáfora do planeta doente que não muda seus hábitos.", correct: true },
            { letter: "d", text: "Persuadir o leitor a visitar médicos com mais frequência para prevenir doenças." },
          ]}
          resolution={
            <p>
              A charge usa <strong>personificação metafórica</strong>: o Planeta Terra como paciente doente =
              crise ambiental. O médico representa a ciência/especialistas. A fala central é a chave: "o paciente
              não quer mudar seus hábitos" = a humanidade não quer mudar comportamentos poluidores apesar dos
              alertas científicos. A <strong>intenção é crítica</strong>: denuncia a inércia humana diante da
              emergência ambiental. Resposta: <strong>c</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Humor por violação de expectativa em tirinha"
          statement={
            <p>
              Em uma tirinha em espanhol, um candidato político sobe ao palanque e anuncia:
              <em> "¡Ciudadanos, prometo que en mi gobierno habrá total transparencia!"</em>. No último quadro,
              ele é fotografado, mas aparece completamente invisível na foto. A legenda final diz:
              <em> "Y cumplió su promesa."</em> O humor da tirinha se baseia em:
            </p>
          }
          options={[
            { letter: "a", text: "O político cumpriu sua promessa de transparência ao se tornar literalmente transparente, revelando que a promessa era vazia e irônica.", correct: true },
            { letter: "b", text: "O político tinha superpoderes de invisibilidade, o que o tornava um candidato diferente." },
            { letter: "c", text: "A tirinha critica os fotógrafos que não souberam tirar uma boa foto do candidato." },
            { letter: "d", text: "O humor está na dificuldade técnica de fotografar políticos em eventos públicos." },
          ]}
          resolution={
            <p>
              O humor funciona por <strong>duplo sentido e violação de expectativa</strong>: "transparência"
              em política significa honestidade e clareza — mas a tirinha realiza o sentido literal de
              "transparente" (invisível/não visto). O candidato torna-se literalmente invisível, o que é
              <strong>irônico</strong>: ao "cumprir" a promessa de transparência, ele desaparece — crítica
              ao político que faz promessas vazias e some depois de eleito. A frase <em>"Y cumplió su promesa"</em>
              reforça a ironia. Resposta: <strong>a</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
