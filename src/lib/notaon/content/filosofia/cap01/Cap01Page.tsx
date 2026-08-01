"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 1</span>
          <h1>O que o ENEM cobra em Filosofia: competências, habilidades e interpretação de textos filosóficos</h1>
          <p>
            Entender como o ENEM avalia a Filosofia é o primeiro passo para uma preparação eficiente.
            Neste capítulo, você aprenderá quais competências e habilidades são cobradas, como identificar
            argumentos filosóficos em textos e quais estratégias usar para gabaritar as questões da área.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. Como a Filosofia aparece no ENEM</h2>
        <p>
          A Filosofia no ENEM não é avaliada como disciplina isolada, mas integrada à área de
          <strong> Ciências Humanas e Sociais Aplicadas</strong>. Isso significa que as questões
          articulam Filosofia com História, Sociologia, Geografia e temas da atualidade.
        </p>
        <p>
          Em média, o ENEM apresenta <strong>45 questões</strong> de Ciências Humanas, das quais
          cerca de <strong>8 a 12</strong> envolvem diretamente conceitos filosóficos. As questões
          podem trazer textos de filósofos clássicos ou contemporâneos, imagens, charges ou situações-problema.
        </p>
        <div className="lesson-highlight">
          <h3>O que o ENEM não cobra</h3>
          <p>
            O ENEM <strong>não</strong> cobra memorização de datas, biografias detalhadas ou
            terminologia técnica isolada. O foco é na <em>compreensão de ideias</em>, na
            <em> identificação de argumentos</em> e na <em>aplicação de conceitos</em> a situações concretas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências BNCC</span>
        <h2>2. As competências da área de Ciências Humanas no ENEM</h2>
        <p>
          A Matriz de Referência do ENEM para Ciências Humanas organiza as habilidades em torno de
          competências centrais. Veja abaixo as principais competências com foco filosófico:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>Descrição</th>
                <th>Conexão filosófica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C1</td>
                <td>Compreender os elementos culturais que constituem as identidades</td>
                <td>Filosofia da cultura, identidade, pluralismo</td>
              </tr>
              <tr>
                <td>C2</td>
                <td>Compreender as transformações dos espaços geográficos como produto das relações humanas</td>
                <td>Filosofia política, poder e território</td>
              </tr>
              <tr>
                <td>C3</td>
                <td>Compreender a produção e o papel histórico das instituições sociais, políticas e econômicas</td>
                <td>Contrato social, Estado, democracia</td>
              </tr>
              <tr>
                <td>C4</td>
                <td>Entender as relações entre recursos naturais e desenvolvimento sustentável</td>
                <td>Ética ambiental, responsabilidade</td>
              </tr>
              <tr>
                <td>C5</td>
                <td>Utilizar os conhecimentos históricos para compreender e valorizar os fundamentos da cidadania</td>
                <td>Direitos humanos, justiça, ética</td>
              </tr>
              <tr>
                <td>C6</td>
                <td>Compreender a sociedade e a natureza, reconhecendo suas interações no espaço</td>
                <td>Filosofia da ciência, tecnologia e sociedade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa do ENEM</span>
        <h2>3. Mapa das competências e temas filosóficos no ENEM</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 320" width="520" height="320" aria-label="Mapa das competências filosóficas no ENEM">
            {/* Centro */}
            <ellipse cx="260" cy="160" rx="70" ry="40" fill="#4f46e5" />
            <text x="260" y="155" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">ENEM</text>
            <text x="260" y="172" textAnchor="middle" fontSize="11" fill="#c7d2fe">Filosofia</text>

            {/* Nós temáticos */}
            <ellipse cx="120" cy="60" rx="60" ry="28" fill="#818cf8" />
            <text x="120" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Ética e Moral</text>
            <text x="120" y="70" textAnchor="middle" fontSize="10" fill="#e0e7ff">Kant, Aristóteles</text>

            <ellipse cx="400" cy="60" rx="65" ry="28" fill="#818cf8" />
            <text x="400" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Filosofia Política</text>
            <text x="400" y="70" textAnchor="middle" fontSize="10" fill="#e0e7ff">Locke, Rousseau</text>

            <ellipse cx="80" cy="200" rx="62" ry="28" fill="#818cf8" />
            <text x="80" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Epistemologia</text>
            <text x="80" y="210" textAnchor="middle" fontSize="10" fill="#e0e7ff">Descartes, Hume</text>

            <ellipse cx="440" cy="200" rx="65" ry="28" fill="#818cf8" />
            <text x="440" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Filosofia Social</text>
            <text x="440" y="210" textAnchor="middle" fontSize="10" fill="#e0e7ff">Marx, Frankfurt</text>

            <ellipse cx="160" cy="285" rx="65" ry="28" fill="#818cf8" />
            <text x="160" y="280" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Direitos Humanos</text>
            <text x="160" y="295" textAnchor="middle" fontSize="10" fill="#e0e7ff">Arendt, ONU</text>

            <ellipse cx="360" cy="285" rx="65" ry="28" fill="#818cf8" />
            <text x="360" y="280" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Ciência e Tecnol.</text>
            <text x="360" y="295" textAnchor="middle" fontSize="10" fill="#e0e7ff">Popper, Kuhn</text>

            {/* Linhas */}
            <line x1="180" y1="80" x2="210" y2="135" stroke="#c7d2fe" strokeWidth="1.5"/>
            <line x1="340" y1="80" x2="310" y2="135" stroke="#c7d2fe" strokeWidth="1.5"/>
            <line x1="142" y1="200" x2="195" y2="170" stroke="#c7d2fe" strokeWidth="1.5"/>
            <line x1="378" y1="200" x2="325" y2="170" stroke="#c7d2fe" strokeWidth="1.5"/>
            <line x1="200" y1="270" x2="230" y2="195" stroke="#c7d2fe" strokeWidth="1.5"/>
            <line x1="310" y1="270" x2="290" y2="195" stroke="#c7d2fe" strokeWidth="1.5"/>
          </svg>
          <figcaption>Principais eixos temáticos filosóficos cobrados pelo ENEM.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Habilidades BNCC</span>
        <h2>4. Habilidades da BNCC mais cobradas em Filosofia</h2>
        <p>
          A Base Nacional Comum Curricular (BNCC) organiza as habilidades do Ensino Médio em códigos
          como <strong>EM13CHS101</strong>. As habilidades mais frequentes em questões filosóficas do ENEM são:
        </p>
        <ul>
          <li><strong>EM13CHS101:</strong> analisar e comparar diferentes fontes e narrativas, identificando produção de sentido e relações de poder.</li>
          <li><strong>EM13CHS201:</strong> compreender e analisar o conceito de território, poder e identidade.</li>
          <li><strong>EM13CHS301:</strong> problematizar hábitos e valores, relacionando-os com diferentes contextos históricos e filosóficos.</li>
          <li><strong>EM13CHS401:</strong> identificar e combater propostas que promovam o desrespeito aos direitos humanos.</li>
          <li><strong>EM13CHS501:</strong> compreender e aplicar conceitos de cidadania, democracia e Estado.</li>
          <li><strong>EM13CHS601:</strong> analisar as relações entre ciência, tecnologia, cultura e sociedade.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            Quando uma questão traz um trecho de filósofo, leia primeiro a <strong>pergunta</strong> e
            depois o trecho. Isso orienta sua leitura para o que realmente importa na resolução.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Leitura Filosófica</span>
        <h2>5. Como ler textos filosóficos no ENEM</h2>
        <p>
          Os textos filosóficos do ENEM costumam ser trechos de obras clássicas ou contemporâneas.
          Eles apresentam uma <strong>tese</strong> (afirmação central) e <strong>argumentos</strong>
          que a sustentam. Saber identificar esses elementos é fundamental.
        </p>
        <p>
          <strong>Passo 1 — Identifique o tema:</strong> De que assunto o texto trata? Ética? Política? Conhecimento?
        </p>
        <p>
          <strong>Passo 2 — Identifique a tese:</strong> O que o autor afirma? Procure a ideia central, geralmente
          na abertura ou no fechamento do trecho.
        </p>
        <p>
          <strong>Passo 3 — Identifique os argumentos:</strong> Que razões o autor apresenta para sustentar sua tese?
        </p>
        <p>
          <strong>Passo 4 — Relacione ao contexto:</strong> O argumento do autor serve para criticar, defender ou
          problematizar algum aspecto social, político ou histórico?
        </p>
        <p>
          <strong>Passo 5 — Leia as alternativas com atenção:</strong> Descarte as que distorcem o texto e as que
          introduzem ideias não presentes no trecho.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura Argumentativa</span>
        <h2>6. Identificando premissas, argumentos e conclusões</h2>
        <p>
          Todo texto filosófico tem uma <strong>estrutura lógica</strong>. Reconhecer essa estrutura
          é essencial para responder corretamente às questões do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Premissa</strong></td>
                <td>Afirmação usada como base do argumento</td>
                <td>"Todo ser humano busca a felicidade."</td>
              </tr>
              <tr>
                <td><strong>Argumento</strong></td>
                <td>Conjunto de premissas que justificam uma conclusão</td>
                <td>"Logo, as leis devem promover a felicidade dos cidadãos."</td>
              </tr>
              <tr>
                <td><strong>Conclusão</strong></td>
                <td>A tese que se pretende demonstrar</td>
                <td>"Portanto, o Estado deve ser guiado pelo bem comum."</td>
              </tr>
              <tr>
                <td><strong>Falácia</strong></td>
                <td>Argumento que parece válido, mas contém erro lógico</td>
                <td>"Todo mundo faz isso, logo deve ser correto."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Conectivos filosóficos</h3>
          <p>
            Preste atenção em palavras como <em>portanto, logo, pois, porque, dado que, assim, consequentemente</em> —
            elas indicam a passagem de premissas para conclusão nos textos filosóficos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filósofos Mais Cobrados</span>
        <h2>7. Os filósofos que mais aparecem no ENEM</h2>
        <p>
          Com base nas provas aplicadas desde 2009, alguns filósofos aparecem com muito mais frequência.
          Conheça os principais e o tema central de suas contribuições:
        </p>
        <ul>
          <li><strong>Platão:</strong> teoria das ideias, mito da caverna, justiça, República.</li>
          <li><strong>Aristóteles:</strong> ética, política, lógica, eudaimonia.</li>
          <li><strong>Kant:</strong> imperativo categórico, autonomia, razão, iluminismo.</li>
          <li><strong>Rousseau:</strong> contrato social, vontade geral, liberdade natural.</li>
          <li><strong>Locke:</strong> empirismo, direitos naturais, propriedade, governo limitado.</li>
          <li><strong>Marx:</strong> alienação, luta de classes, capitalismo, ideologia.</li>
          <li><strong>Nietzsche:</strong> crítica à moral, além-do-homem, niilismo, vontade de potência.</li>
          <li><strong>Sartre:</strong> existencialismo, liberdade, má-fé, responsabilidade.</li>
          <li><strong>Foucault:</strong> poder, disciplina, biopoder, discurso.</li>
          <li><strong>Hannah Arendt:</strong> banalidade do mal, ação política, totalitarismo.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Prova</span>
        <h2>8. Estratégias práticas para as questões de Filosofia</h2>
        <p>
          Resolver questões de Filosofia no ENEM exige técnica além do conhecimento. Veja as principais
          estratégias comprovadas:
        </p>
        <ul>
          <li><strong>Não invente:</strong> Responda com base no texto, não em conhecimento prévio isolado.</li>
          <li><strong>Descarte distorções:</strong> Alternativas que forçam interpretações não presentes no trecho são erros clássicos.</li>
          <li><strong>Fique atento ao "não":</strong> Questões com "EXCETO" ou "NÃO" mudam completamente o gabarito esperado.</li>
          <li><strong>Conecte ao contexto histórico:</strong> A Filosofia no ENEM sempre dialoga com um momento histórico.</li>
          <li><strong>Use a eliminação:</strong> Mesmo sem saber a resposta correta, elimine as claramente erradas.</li>
          <li><strong>Leia a questão antes do texto:</strong> Isso direciona a leitura para o que importa.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Tipos de questão filosófica no ENEM</h3>
          <p>
            <strong>Tipo 1 — Interpretação de trecho:</strong> o texto é apresentado e você deve identificar a ideia central.<br/>
            <strong>Tipo 2 — Identificação de autor:</strong> uma ideia é descrita e você associa ao filósofo correto.<br/>
            <strong>Tipo 3 — Aplicação de conceito:</strong> um conceito filosófico é aplicado a uma situação contemporânea.<br/>
            <strong>Tipo 4 — Relação entre filósofos:</strong> duas visões são confrontadas e você identifica concordância ou discordância.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas Transversais</span>
        <h2>9. Temas transversais da Filosofia no ENEM</h2>
        <p>
          O ENEM frequentemente conecta a Filosofia a temas da atualidade. Esses são os temas
          transversais que mais aparecem nas provas:
        </p>
        <ul>
          <li>Democracia e cidadania</li>
          <li>Direitos Humanos e dignidade</li>
          <li>Ética e responsabilidade social</li>
          <li>Liberdade e autonomia</li>
          <li>Justiça social e desigualdade</li>
          <li>Ciência, tecnologia e sociedade</li>
          <li>Meio ambiente e sustentabilidade</li>
          <li>Diversidade cultural e tolerância</li>
          <li>Gênero e identidade</li>
          <li>Indústria cultural e mídia</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo Comentado</span>
        <h2>10. Análise de questão real do ENEM</h2>
        <p>
          Veja como analisar uma questão típica de Filosofia:
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo de questão</h3>
          <p>
            <em>"Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal."</em>
            (Kant, Fundamentação da Metafísica dos Costumes)
          </p>
          <p>
            <strong>Pergunta:</strong> O trecho acima expressa um princípio moral que pode ser caracterizado como:
          </p>
          <p>
            <strong>Resposta correta:</strong> O imperativo categórico kantiano — uma lei moral universal, racional e
            incondicional que deve orientar toda ação humana independentemente de consequências ou desejos.
          </p>
          <p>
            <strong>Análise:</strong> A palavra-chave é "lei universal". Kant quer dizer que uma ação é moral se,
            e somente se, pudesse ser adotada por todos os seres racionais sem contradição.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📋</span>
            <h3>Integração</h3>
            <p>Filosofia no ENEM é integrada a Ciências Humanas — cobra conceitos aplicados a contextos reais.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Competências</h3>
            <p>6 competências principais: cultura, espaço, instituições, natureza, cidadania e ciência.</p>
          </div>
          <div className="math-card">
            <span>📖</span>
            <h3>Leitura</h3>
            <p>Leia a questão antes do texto. Identifique tese, premissas e conclusão no trecho filosófico.</p>
          </div>
          <div className="math-card">
            <span>🧑‍🏫</span>
            <h3>Filósofos</h3>
            <p>Platão, Aristóteles, Kant, Marx, Rousseau, Nietzsche, Sartre e Foucault são os mais cobrados.</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Tipos de questão</h3>
            <p>Interpretação, identificação de autor, aplicação de conceito e relação entre filósofos.</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Estratégia</h3>
            <p>Descarte distorções, atenção ao "EXCETO/NÃO", relacione ao contexto histórico.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de Elemento Textual"
          statement={<p>Em um texto filosófico, a afirmação central que o autor pretende demonstrar por meio de argumentos é chamada de:</p>}
          options={[
            { letter: "a", text: "Premissa" },
            { letter: "b", text: "Falácia" },
            { letter: "c", text: "Tese", correct: true },
            { letter: "d", text: "Silogismo" },
          ]}
          resolution={<p>A <strong>tese</strong> é a proposição central que o autor busca defender. As premissas são as razões que a sustentam, e o conjunto de premissas que leva à tese forma o argumento. Falácia é um argumento com erro lógico. Silogismo é uma forma específica de argumento dedutivo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Competências do ENEM"
          statement={<p>Segundo a Matriz de Referência do ENEM para Ciências Humanas, a abordagem filosófica que mais articula questões de ética, cidadania e direitos humanos está associada à competência que trata de:</p>}
          options={[
            { letter: "a", text: "Compreender a produção cultural e artística como expressão das identidades." },
            { letter: "b", text: "Utilizar os conhecimentos históricos para compreender e valorizar os fundamentos da cidadania e da democracia.", correct: true },
            { letter: "c", text: "Entender as relações entre os recursos naturais e o desenvolvimento sustentável." },
            { letter: "d", text: "Compreender as transformações dos espaços geográficos como produto das relações humanas." },
          ]}
          resolution={<p>A Competência 5 da Matriz do ENEM trata justamente da relação entre conhecimentos históricos e filosóficos e os fundamentos da cidadania e da democracia — articulando diretamente Filosofia Política, Ética e Direitos Humanos. Essa competência é central para questões sobre contrato social, autonomia, justiça e participação política.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Estrutura Argumentativa"
          statement={<p>Analise o seguinte argumento: "Todo ser racional deve agir de acordo com a razão. Seres humanos são racionais. Logo, seres humanos devem agir de acordo com a razão." Identifique corretamente a estrutura desse argumento:</p>}
          options={[
            { letter: "a", text: "É uma falácia ad hominem, pois ataca os seres humanos." },
            { letter: "b", text: "É um argumento indutivo baseado em casos particulares." },
            { letter: "c", text: "É um silogismo dedutivo válido com duas premissas e uma conclusão.", correct: true },
            { letter: "d", text: "É uma tese sem argumentos, pois não apresenta justificativa." },
          ]}
          resolution={<p>O argumento apresentado é um <strong>silogismo dedutivo</strong> clássico: Premissa maior (universal): "Todo ser racional deve agir de acordo com a razão." Premissa menor (particular): "Seres humanos são racionais." Conclusão: "Logo, seres humanos devem agir de acordo com a razão." É válido formalmente, pois a conclusão se segue necessariamente das premissas. Esse é o formato básico que Aristóteles sistematizou e que Kant utilizou em sua ética racional.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Aplicação de Conceito Filosófico"
          statement={<p>Uma campanha publicitária afirma: "Nove em cada dez dentistas recomendam este produto, logo ele é o melhor do mercado." Um estudante de Filosofia identificou nessa afirmação um erro lógico. Que tipo de falácia está sendo utilizada?</p>}
          options={[
            { letter: "a", text: "Falácia ad hominem, pois ataca a credibilidade dos dentistas que não recomendam." },
            { letter: "b", text: "Falácia do espantalho, pois deforma o argumento contrário." },
            { letter: "c", text: "Falácia de apelo à autoridade, pois usa a opinião de especialistas como prova definitiva.", correct: true },
            { letter: "d", text: "Falácia da generalização apressada, pois extrapola de um caso para todos." },
          ]}
          resolution={<p>A <strong>falácia de apelo à autoridade</strong> (argumentum ad verecundiam) ocorre quando a opinião de alguém considerado autoridade é usada como prova conclusiva, sem apresentar evidências adicionais. O fato de dentistas recomendarem não prova que o produto é "o melhor" — seria necessário critérios objetivos, comparações e evidências científicas. A opinião de especialistas é um dado relevante, mas não suficiente por si só.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Texto Filosófico e Interpretação"
          statement={<p>"Atrevo-me a dizer que o estado de reflexão é um estado contra a natureza, e que o homem que medita é um animal depravado." (Jean-Jacques Rousseau, Discurso sobre a Origem e os Fundamentos da Desigualdade entre os Homens). Com base no contexto filosófico de Rousseau, a crítica contida no trecho é direcionada a:</p>}
          options={[
            { letter: "a", text: "A ignorância dos homens primitivos que não desenvolveram a razão." },
            { letter: "b", text: "A civilização e a razão como fontes de corrupção moral do ser humano naturalmente bom.", correct: true },
            { letter: "c", text: "A superioridade da vida urbana sobre a vida rural no século XVIII." },
            { letter: "d", text: "A necessidade de abolir completamente a filosofia como prática intelectual." },
          ]}
          resolution={<p>Rousseau defende a <strong>bondade natural do ser humano</strong> — corrompida pela sociedade e pela razão excessiva. Ao dizer que "o homem que medita é um animal depravado", ele critica a sofisticação racional da civilização, que, ao invés de tornar o ser humano melhor, o afasta de sua natureza boa e simples. Esse argumento é central no pensamento de Rousseau e aparece frequentemente no ENEM em questões sobre contrato social e desigualdade.</p>}
        />
      </section>
    </article>
  );
}
