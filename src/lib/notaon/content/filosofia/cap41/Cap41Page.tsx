"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 41</span>
          <h1>Leitura e Interpretação de Textos Filosóficos no ENEM</h1>
          <p>
            A prova de Ciências Humanas do ENEM apresenta textos filosóficos densos, em geral
            adaptados ou traduzidos. Saber interpretá-los é tão importante quanto conhecer os
            conteúdos. Neste capítulo você aprende estratégias práticas: como identificar a tese,
            mapear os argumentos, reconhecer o autor pelo vocabulário e evitar as armadilhas
            clássicas dos distratores.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura das Questões</span>
        <h2>1. Como o ENEM Apresenta Textos Filosóficos</h2>
        <p>
          As questões de Filosofia no ENEM seguem um padrão relativamente estável:
        </p>
        <ul>
          <li>
            <strong>Texto-base:</strong> trecho adaptado de obra filosófica (3–10 linhas), com
            referência ao autor e obra. Pode ser acompanhado de imagem, gráfico ou outro texto.
          </li>
          <li>
            <strong>Enunciado da questão:</strong> geralmente pede que o candidato identifique
            a tese, relacione com outro conceito ou aplique a ideia a uma situação concreta.
          </li>
          <li>
            <strong>5 alternativas (A–E):</strong> apenas uma é correta; as outras quatro são
            distratores cuidadosamente construídos para enganar quem não leu com atenção.
          </li>
        </ul>
        <p>
          Os tipos mais comuns de enunciado:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de enunciado</th><th>O que pede</th><th>Estratégia</th></tr>
            </thead>
            <tbody>
              <tr><td>"Com base no texto…"</td><td>A resposta está no texto</td><td>Releia o trecho; não use conhecimento externo que contradiga o texto</td></tr>
              <tr><td>"Segundo o autor…"</td><td>A perspectiva específica do filósofo</td><td>Identifique quem é o autor e sua posição característica</td></tr>
              <tr><td>"A posição descrita exemplifica…"</td><td>Identificar o conceito pelo exemplo</td><td>Abstraia o princípio geral descrito na situação concreta</td></tr>
              <tr><td>"Essa crítica é coerente com…"</td><td>Relacionar a um autor ou corrente filosófica</td><td>Identifique a posição criticada e quem faria essa crítica</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Leitura</span>
        <h2>2. Estratégias de Leitura: Tese, Argumentos e Conclusão</h2>
        <p>
          Todo texto filosófico tem uma estrutura argumentativa. Aprender a identificá-la é
          metade do trabalho:
        </p>
        <ul>
          <li>
            <strong>Tese (ou posição principal):</strong> a afirmação central que o autor defende
            ou analisa. Pode aparecer no início ("Sustento que…"), no final ("Logo, …") ou estar
            implícita na argumentação.
          </li>
          <li>
            <strong>Argumentos/razões:</strong> as premissas que sustentam a tese. Identificá-las
            ajuda a compreender "por que" o autor defende aquela posição.
          </li>
          <li>
            <strong>Conclusão:</strong> frequentemente introduzida por "portanto", "logo",
            "assim", "dessa forma", "por conseguinte".
          </li>
          <li>
            <strong>Conceitos-chave:</strong> palavras técnicas que identificam a corrente ou o
            autor (ex.: "imperatou categórico" → Kant; "vontade de potência" → Nietzsche;
            "mais-valia" → Marx).
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Dica prática: leia a questão antes do texto</h3>
          <p>
            Ler a questão e as alternativas antes de ler o texto permite saber o que procurar.
            Se a questão pergunta sobre a "tese do autor sobre liberdade", você já sabe o foco
            da leitura antes de começar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Filosófico</span>
        <h2>3. Glossário dos Termos Filosóficos Mais Frequentes no ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Termo</th><th>Significado resumido</th><th>Autor associado</th></tr>
            </thead>
            <tbody>
              <tr><td>Imperativo categórico</td><td>Lei moral universal e incondicional da razão</td><td>Kant</td></tr>
              <tr><td>Mais-valia</td><td>Valor excedente produzido pelo trabalhador e apropriado pelo capitalista</td><td>Marx</td></tr>
              <tr><td>Vontade de potência</td><td>Força criadora que supera os valores estabelecidos</td><td>Nietzsche</td></tr>
              <tr><td>Alienação</td><td>Perda do controle sobre o produto do próprio trabalho ou sobre si mesmo</td><td>Marx / Hegel</td></tr>
              <tr><td>Contrato social</td><td>Acordo (real ou hipotético) que funda a sociedade política</td><td>Hobbes, Locke, Rousseau</td></tr>
              <tr><td>Dialética</td><td>Método de desenvolvimento do pensamento por contradições (tese–antítese–síntese)</td><td>Hegel, Marx</td></tr>
              <tr><td>Práxis</td><td>Prática transformadora orientada pela reflexão teórica</td><td>Marx, Freire</td></tr>
              <tr><td>Dasein</td><td>"Ser-aí"; existência humana lançada no mundo com possibilidades abertas</td><td>Heidegger</td></tr>
              <tr><td>Biopoder</td><td>Poder que administra as populações e os corpos vivos</td><td>Foucault</td></tr>
              <tr><td>Ação comunicativa</td><td>Interação orientada para o entendimento mútuo racional</td><td>Habermas</td></tr>
              <tr><td>Maiêutica</td><td>Método socrático de "partejar" o conhecimento por perguntas</td><td>Sócrates</td></tr>
              <tr><td>Simulacro</td><td>Cópia sem original; imagem que substituiu a realidade</td><td>Baudrillard</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>4. Distratores: As Armadilhas Clássicas do ENEM</h2>
        <p>
          Os distratores (alternativas erradas) do ENEM são cuidadosamente construídos. Os tipos
          mais comuns:
        </p>
        <ul>
          <li>
            <strong>Inversão de sentido:</strong> afirma exatamente o contrário do que o texto diz.
            Ex.: o texto critica o individualismo, e o distrator diz que o autor o defende.
          </li>
          <li>
            <strong>Extrapolação:</strong> vai além do que o texto afirma, acrescentando conclusões
            que o autor não tirou.
          </li>
          <li>
            <strong>Confusão de autores:</strong> atribui a um filósofo uma posição de outro.
            Ex.: diz que é Kant o que é Hume.
          </li>
          <li>
            <strong>Parcialmente correto:</strong> a alternativa é verdadeira em parte, mas erra
            num elemento essencial — ou deixa de dizer algo decisivo.
          </li>
          <li>
            <strong>Verdadeiro, mas irrelevante:</strong> a afirmação é correta filosoficamente,
            mas não responde ao que a questão pergunta.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Como eliminar distratores</h3>
          <p>
            1. Releia o trecho-chave do texto antes de comparar as alternativas. 2. Elimine o que
            contradiz o texto explicitamente. 3. Elimine o que vai além do texto sem base nele.
            4. Entre as restantes, escolha a que melhor parafraseia ou aplica a tese do texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercício Guiado</span>
        <h2>5. Análise Passo a Passo de uma Questão</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 240" width="520" height="240" aria-label="Fluxograma de leitura de texto filosófico no ENEM">
            <rect x="10" y="10" width="500" height="220" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="260" y="33" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0c4a6e">Fluxograma: Como Ler Texto Filosófico no ENEM</text>

            <rect x="180" y="45" width="160" height="32" rx="6" fill="#0284c7" stroke="#0369a1" strokeWidth="1"/>
            <text x="260" y="66" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">1. Leia a questão e as alternativas</text>

            <line x1="260" y1="77" x2="260" y2="92" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#arrFlow)"/>
            <defs><marker id="arrFlow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#0284c7"/></marker></defs>

            <rect x="155" y="92" width="210" height="32" rx="6" fill="#0891b2" stroke="#0e7490" strokeWidth="1"/>
            <text x="260" y="113" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">2. Leia o texto buscando tese e argumentos</text>

            <line x1="260" y1="124" x2="260" y2="139" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#arrFlow)"/>

            <rect x="160" y="139" width="200" height="32" rx="6" fill="#059669" stroke="#047857" strokeWidth="1"/>
            <text x="260" y="160" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">3. Identifique o autor / corrente filosófica</text>

            <line x1="260" y1="171" x2="260" y2="186" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrFlow)"/>

            <rect x="160" y="186" width="200" height="32" rx="6" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1"/>
            <text x="260" y="207" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">4. Elimine distratores; escolha a resposta</text>
          </svg>
          <figcaption>Processo de leitura sistemática de questões filosóficas no ENEM.</figcaption>
        </figure>
        <p>
          <strong>Exemplo guiado:</strong> Texto — "A natureza humana é solitária, pobre, sórdida,
          brutal e curta." (Hobbes) Questão: "Esse trecho justifica qual tipo de organização
          política?"
        </p>
        <p>
          Passo 1: A questão pede o tipo de organização política decorrente da visão de Hobbes
          sobre a natureza humana. Passo 2: O texto descreve o estado de natureza como guerra
          permanente. Passo 3: É Hobbes — que defende o Leviatã (Estado absoluto) como solução.
          Passo 4: A resposta é um Estado soberano forte que garanta a paz civil —
          eliminando alternativas que digam "democracia participativa" ou "anarquia".
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revisão Rápida</span>
        <h2>6. Técnicas de Revisão antes da Prova</h2>
        <ul>
          <li><strong>Flashcards de filósofos:</strong> Filósofo → Período → 3 conceitos-chave → 1 obra.</li>
          <li><strong>Linha do tempo:</strong> posicionar os filósofos cronologicamente ajuda a identificar influências e rupturas.</li>
          <li><strong>Questões anteriores:</strong> resolver questões do ENEM dos últimos 10 anos em Filosofia é a melhor preparação prática.</li>
          <li><strong>Mapas conceituais:</strong> conectar conceitos (ex.: contrato social → Hobbes, Locke, Rousseau → diferenças) consolida a memória.</li>
          <li><strong>Leitura de fragmentos:</strong> praticar a leitura de trechos filosóficos sem contexto e tentar identificar o autor pelo estilo e vocabulário.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Textos Difíceis</span>
        <h2>7. Estratégias para Textos Difíceis: Kant, Hegel e Marx no ENEM</h2>
        <p>
          Alguns filósofos têm vocabulário e estilo particularmente densos, o que aumenta o risco
          de erro mesmo para quem estudou. Veja estratégias específicas para os três mais
          desafiadores no ENEM:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Armadilha principal</th>
                <th>Vocabulário-chave</th>
                <th>Estratégia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kant</strong></td>
                <td>Confundir imperativo categórico (incondicional) com hipotético (se… então…)</td>
                <td>Imperativo categórico, autonomia, dever, razão prática, universalidade</td>
                <td>Pergunte: a lei moral vale sem condições? Se sim, é categórico.</td>
              </tr>
              <tr>
                <td><strong>Hegel</strong></td>
                <td>Tomar "dialética" como simples debate, ou "Espírito" como algo religioso</td>
                <td>Dialética, Geist, tese-antítese-síntese, negação determinada, Aufhebung</td>
                <td>Foque na ideia de que a contradição é motor do desenvolvimento — da história, do pensamento.</td>
              </tr>
              <tr>
                <td><strong>Marx</strong></td>
                <td>Reduzir Marx a "comunismo" sem entender alienação, mais-valia ou infraestrutura</td>
                <td>Alienação, mais-valia, infraestrutura, superestrutura, luta de classes, materialismo histórico</td>
                <td>Identifique se o texto trata de trabalho (alienação/mais-valia) ou de poder/cultura (ideologia/superestrutura).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Para Kant:</strong> um texto de Kant quase sempre trata de autonomia moral,
          dever, universalidade ou limite do conhecimento. A questão vai pedir que você identifique
          qual desses temas está sendo tratado e o que Kant afirma sobre ele.
        </p>
        <p>
          <strong>Para Hegel:</strong> o ENEM raramente apresenta Hegel sozinho — quase sempre é
          em relação com Marx ("o que Marx pegou de Hegel e inverteu"). Foque na ideia de dialética
          e na diferença entre idealismo (Hegel) e materialismo (Marx).
        </p>
        <p>
          <strong>Para Marx:</strong> identifique se o texto fala de <em>trabalho</em> (alienação,
          mais-valia) ou de <em>consciência e cultura</em> (ideologia, superestrutura). Os
          distratores clássicos de Marx tentam reduzi-lo a defensor do "comunismo soviético" —
          o que não é fiel ao texto original.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Simulado de Interpretação</span>
        <h2>8. Análise Comentada de Três Trechos Filosóficos Clássicos</h2>
        <p>
          Pratique a interpretação com três trechos reais, analisando passo a passo:
        </p>
        <div className="lesson-highlight">
          <h3>Trecho 1 — Rousseau</h3>
          <p>
            <em>"O homem nasce livre, e em toda parte encontra-se acorrentado."</em>
            (Jean-Jacques Rousseau, Do Contrato Social)
          </p>
          <p>
            <strong>Passo 1 — Tema:</strong> liberdade e sociedade. <strong>Passo 2 — Tese:</strong>
            o ser humano é naturalmente livre, mas a sociedade o escraviza. <strong>Passo 3 —
            Contexto Rousseau:</strong> ele acredita na bondade natural humana corrompida pela
            civilização. <strong>Conclusão:</strong> a questão vai pedir como recuperar a liberdade
            — resposta: o contrato social baseado na vontade geral.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Trecho 2 — Foucault</h3>
          <p>
            <em>"O poder não está em nenhum lugar em particular, mas circula por toda a rede social,
            exercendo-se em relações."</em> (Michel Foucault, Microfísica do Poder)
          </p>
          <p>
            <strong>Passo 1 — Tema:</strong> poder e sociedade. <strong>Passo 2 — Tese:</strong>
            o poder não é propriedade de um sujeito ou instituição — é relacional e difuso.
            <strong>Passo 3 — Armadilha:</strong> o distrator vai dizer que Foucault defende que
            "todo poder está no Estado" — o contrário do que o texto diz. <strong>Conclusão:</strong>
            poder é microfísico, circula em relações cotidianas (família, escola, hospital, prisão).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Trecho 3 — Sartre</h3>
          <p>
            <em>"A existência precede a essência. O ser humano primeiro existe, se encontra, surge
            no mundo, e depois se define."</em> (Jean-Paul Sartre, O Existencialismo é um Humanismo)
          </p>
          <p>
            <strong>Passo 1 — Tema:</strong> liberdade humana e identidade. <strong>Passo 2 —
            Tese:</strong> não há natureza humana fixa prévia — nos tornamos o que fazemos.
            <strong>Passo 3 — Implicação:</strong> o ser humano é radicalmente livre e totalmente
            responsável por si mesmo. <strong>Armadilha:</strong> o distrator vai dizer que isso
            significa que "a biologia determina o ser humano" — inversão total da tese.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>📖</span><h3>Leia a questão primeiro</h3><p>Leia a questão antes do texto para saber o que procurar na leitura.</p></div>
          <div className="math-card"><span>🎯</span><h3>Tese e argumentos</h3><p>Identifique a afirmação central e as razões que a sustentam antes de olhar as alternativas.</p></div>
          <div className="math-card"><span>🔑</span><h3>Vocabulário</h3><p>Termos técnicos identificam o autor: "mais-valia" = Marx; "imperativo categórico" = Kant.</p></div>
          <div className="math-card"><span>⚠️</span><h3>Distratores</h3><p>Inversão, extrapolação, confusão de autores. Elimine sistematicamente antes de escolher.</p></div>
          <div className="math-card"><span>🗺️</span><h3>Contexto histórico</h3><p>Saber o período do filósofo ajuda a entender o problema que ele estava respondendo.</p></div>
          <div className="math-card"><span>📝</span><h3>Prática</h3><p>Resolver questões reais do ENEM em filosofia é insubstituível. Quantidade + análise do erro.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificando a Tese"
          statement={<p>"O homem é a medida de todas as coisas: das que são, enquanto são; das que não são, enquanto não são." (Protágoras) A tese central desse fragmento defende que:</p>}
          options={[
            { letter: "a", text: "Existe uma verdade objetiva e universal acessível a todos os seres humanos." },
            { letter: "b", text: "O conhecimento e a verdade são relativos ao ponto de vista de cada sujeito humano.", correct: true },
            { letter: "c", text: "Apenas os sábios são capazes de conhecer a realidade verdadeira." },
            { letter: "d", text: "Os deuses são os verdadeiros juízes da realidade e da verdade." },
          ]}
          resolution={<p>Protágoras é o principal representante do relativismo sofista. A frase é a formulação mais clássica do relativismo: o ser humano (individualmente) é o critério do verdadeiro e do falso, do justo e do injusto. Isso significa que não há verdade absoluta e universal — apenas verdades relativas a cada perspectiva humana.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Identificando Distratores"
          statement={<p>"Age de tal forma que a máxima da tua ação possa valer como princípio de uma legislação universal." (Kant) Um distrator típico de ENEM para esse texto afirmaria que Kant defende:</p>}
          options={[
            { letter: "a", text: "Uma ética baseada em regras universais da razão, independente de consequências.", correct: true },
            { letter: "b", text: "Uma ética consequencialista: aja de forma que suas ações produzam o maior bem para o maior número." },
            { letter: "c", text: "Uma ética deontológica: o valor moral de uma ação está no princípio que a fundamenta, não em seus resultados." },
            { letter: "d", text: "A lei moral como imperativo formal derivado da razão prática universal." },
          ]}
          resolution={<p>Nesse exercício invertido, a alternativa B é o distrator clássico: ela descreve o utilitarismo (Bentham/Mill), não Kant. As alternativas A, C e D são todas corretas sobre Kant — a questão pede o distrator (alternativa errada). No ENEM real, B seria o distrator a ser eliminado por confundir Kant com o consequencialismo utilitarista.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Extrapolação no ENEM"
          statement={<p>"A liberdade é o reconhecimento da necessidade." (Hegel) Uma resposta que extrapola o texto seria aquela que afirma que, para Hegel:</p>}
          options={[
            { letter: "a", text: "A liberdade humana é condicionada pela compreensão racional das leis necessárias que governam a realidade." },
            { letter: "b", text: "A liberdade se realiza plenamente apenas quando o ser humano compreende e age de acordo com a razão que se manifesta na história." },
            { letter: "c", text: "A liberdade implica a abolição de todas as leis e constrangimentos externos ao indivíduo, pois apenas a ausência de necessidade é liberdade verdadeira.", correct: true },
            { letter: "d", text: "Liberdade e necessidade, longe de se oporem, se articulam dialeticamente na realização do Espírito." },
          ]}
          resolution={<p>A alternativa C é uma extrapolação que inverte o sentido do texto: Hegel não diz que liberdade é ausência de necessidade — diz exatamente o contrário: liberdade é o reconhecimento (compreensão racional) da necessidade. Confundir isso com "liberalismo negativo" (ausência de constrangimentos) é um erro clássico de interpretação filosófica.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Texto Filosófico Real"
          statement={<p>"O inferno são os outros." (Jean-Paul Sartre, Huis Clos) Com base nessa afirmação, e considerando a filosofia existencialista de Sartre, pode-se inferir que:</p>}
          options={[
            { letter: "a", text: "Sartre defende que o ser humano deve evitar toda forma de convívio social para alcançar a autenticidade." },
            { letter: "b", text: "A frase indica que o outro representa uma ameaça permanente à liberdade radical do sujeito, pois ao me olhar, o outro me objetifica e me define, comprometendo minha liberdade de me definir.", correct: true },
            { letter: "c", text: "Para Sartre, a existência do outro prova a existência de Deus como fundamento da consciência humana." },
            { letter: "d", text: "A frase exprime o pessimismo cristão de Sartre, que via na socialização a fonte do pecado humano." },
          ]}
          resolution={<p>Para Sartre, "o inferno são os outros" não é um elogio ao isolamento, mas uma análise da estrutura das relações intersubjetivas: o olhar do outro me reduz a objeto, me congela numa definição que eu não escolhi. A liberdade radical de "ser o que sou" é ameaçada pelo "ser-para-outro" — a dimensão da minha existência tal como o outro a vê e define. Sartre não é cristão nem defende o isolamento — é ateu e reconhece que a intersubjetividade é inevitável, mas tensa.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Vocabulário e Autor"
          statement={<p>"O conhecimento humano não deriva de princípios inatos da razão, mas de impressões sensíveis e da experiência. A mente, ao nascer, é uma tabula rasa." Essa posição filosófica é característica do:</p>}
          options={[
            { letter: "a", text: "Racionalismo cartesiano, pois Descartes afirmou que o conhecimento parte da dúvida metódica e das ideias claras e distintas da razão." },
            { letter: "b", text: "Empirismo britânico, especialmente de John Locke, para quem todo conhecimento deriva da experiência sensível.", correct: true },
            { letter: "c", text: "Idealismo alemão de Kant, que afirmou que a mente impõe formas a priori à experiência." },
            { letter: "d", text: "Positivismo de Comte, que defende que o conhecimento positivo supera o teológico e o metafísico." },
          ]}
          resolution={<p>O conceito de "tabula rasa" e a origem sensível de todo conhecimento são marcas do empirismo britânico — especialmente de John Locke. O racionalismo cartesiano afirma ideias inatas; Kant síntese empirismo e racionalismo; Comte, embora valorize a experiência, não usa "tabula rasa". Reconhecer o vocabulário (tabula rasa, impressões sensíveis, experiência) é suficiente para identificar o empirismo.</p>}
        />
      </section>
    </article>
  );
}
