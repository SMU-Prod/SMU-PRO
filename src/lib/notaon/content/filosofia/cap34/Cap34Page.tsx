"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 34</span>
          <h1>Filosofia da Linguagem e Comunicação</h1>
          <p>
            A linguagem não é apenas um instrumento de comunicação — ela molda nossa visão de mundo,
            constitui significados e estrutura o pensamento. Da lógica de Frege aos jogos de linguagem
            de Wittgenstein, passando pelos atos de fala de Austin e Searle e pela ação comunicativa
            de Habermas, este capítulo revela como a filosofia analítica transformou a compreensão
            da linguagem no século XX e o que isso significa para a comunicação contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O que é Filosofia da Linguagem?</h2>
        <p>
          A <strong>filosofia da linguagem</strong> investiga a natureza, a origem e o uso da
          linguagem humana. As principais questões são: Como as palavras se referem ao mundo?
          O que é o significado? A linguagem constitui a realidade ou apenas a descreve?
        </p>
        <p>
          Durante séculos, a linguagem foi tratada como ferramenta transparente do pensamento —
          um meio para expressar ideias já formadas na mente. A <em>virada linguística</em>
          (século XX) inverteu essa perspectiva: a linguagem passou a ser vista como condição de
          possibilidade do próprio pensamento. Não pensamos e depois falamos; pensamos
          <em>na</em> e <em>pela</em> linguagem.
        </p>
        <div className="lesson-highlight">
          <h3>A virada linguística</h3>
          <p>
            O termo "virada linguística" designa o movimento filosófico do século XX que colocou
            a linguagem no centro da filosofia. Em vez de perguntar "o que é a realidade?", os
            filósofos passaram a perguntar "como a linguagem constrói nossa compreensão da
            realidade?". Isso afetou não só a filosofia, mas também a história, a sociologia, a
            psicanálise e a teoria literária.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Frege e Russell</span>
        <h2>2. Lógica e Análise da Linguagem: Frege e Russell</h2>
        <p>
          <strong>Gottlob Frege</strong> (1848–1925) é considerado o pai da lógica moderna e da
          filosofia analítica da linguagem. Ele distinguiu dois aspectos do significado:
        </p>
        <ul>
          <li>
            <strong>Sentido (Sinn):</strong> o modo como algo é apresentado — o "caminho" pelo
            qual chegamos à referência.
          </li>
          <li>
            <strong>Referência (Bedeutung):</strong> o objeto real ao qual a expressão aponta.
          </li>
        </ul>
        <p>
          Exemplo clássico: "Estrela da manhã" e "Estrela da tarde" têm <em>sentidos diferentes</em>
          (modos diferentes de apresentação), mas a mesma <em>referência</em> — o planeta Vênus.
        </p>
        <p>
          <strong>Bertrand Russell</strong> (1872–1970) desenvolveu a teoria das descrições
          definidas. Para Russell, frases como "O atual rei da França é careca" têm forma lógica
          oculta e só se tornam inteligíveis quando analisadas logicamente. A linguagem ordinária
          esconde ambiguidades que a análise lógica resolve.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Wittgenstein I</span>
        <h2>3. Tractatus Logico-Philosophicus: a Linguagem como Espelho</h2>
        <p>
          No <em>Tractatus</em> (1921), o jovem <strong>Ludwig Wittgenstein</strong> apresentou
          uma visão pictórica do significado. As proposições são "imagens" (quadros) dos fatos do
          mundo — cada proposição elementar corresponde a um estado de coisas possível na
          realidade.
        </p>
        <p>
          A tese central: <em>"Os limites da minha linguagem significam os limites do meu
          mundo."</em> O que não pode ser dito com sentido (Deus, ética, estética, o próprio eu
          transcendental) deve ser <strong>silenciado</strong> — daí a famosa frase final:
          "Sobre aquilo de que não se pode falar, deve-se calar."
        </p>
        <div className="lesson-highlight">
          <h3>A teoria pictórica do significado</h3>
          <p>
            Para o Wittgenstein do <em>Tractatus</em>, uma proposição é como uma imagem: ela
            representa os objetos do mundo arranjados de determinada maneira. "A neve é branca" é
            verdadeira se, e somente se, a neve é, de fato, branca. O significado está na
            correspondência entre estrutura linguística e estrutura do mundo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Wittgenstein II</span>
        <h2>4. Investigações Filosóficas: Jogos de Linguagem</h2>
        <p>
          O <em>segundo Wittgenstein</em> (Investigações Filosóficas, 1953, póstumo) rompe com
          o <em>Tractatus</em>. Agora, o significado não é correspondência com a realidade, mas
          <strong>uso</strong>: "O significado de uma palavra é seu uso na linguagem."
        </p>
        <p>
          O conceito central é o de <strong>jogo de linguagem</strong>: cada prática social tem
          suas próprias regras, e as palavras ganham sentido dentro dessas práticas. Pedir ordem
          num restaurante, fazer uma promessa, jogar xadrez — cada contexto define regras
          diferentes para o uso das palavras.
        </p>
        <p>
          Wittgenstein também critica a ideia de linguagem privada: não é possível ter uma
          linguagem totalmente privada, pois o significado é sempre público e social, aprendido
          em comunidade.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Jogos de Linguagem — Diagrama</span>
        <h2>5. Visualizando os Jogos de Linguagem</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 300" width="520" height="300" aria-label="Diagrama dos jogos de linguagem de Wittgenstein">
            <rect x="10" y="10" width="500" height="280" rx="12" fill="#f0f4ff" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="260" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e1b4b">Jogos de Linguagem (Wittgenstein)</text>

            <rect x="30" y="55" width="130" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="95" y="83" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Ciência</text>
            <text x="95" y="100" textAnchor="middle" fontSize="10" fill="#1e40af">Hipóteses, provas,</text>
            <text x="95" y="114" textAnchor="middle" fontSize="10" fill="#1e40af">falsificabilidade</text>

            <rect x="195" y="55" width="130" height="70" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="260" y="83" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Direito</text>
            <text x="260" y="100" textAnchor="middle" fontSize="10" fill="#065f46">Normas, leis,</text>
            <text x="260" y="114" textAnchor="middle" fontSize="10" fill="#065f46">sentenças</text>

            <rect x="360" y="55" width="130" height="70" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="425" y="83" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Religião</text>
            <text x="425" y="100" textAnchor="middle" fontSize="10" fill="#92400e">Orações, ritos,</text>
            <text x="425" y="114" textAnchor="middle" fontSize="10" fill="#92400e">profissões de fé</text>

            <rect x="30" y="165" width="130" height="70" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="95" y="193" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Arte</text>
            <text x="95" y="210" textAnchor="middle" fontSize="10" fill="#9d174d">Crítica, apreciação,</text>
            <text x="95" y="224" textAnchor="middle" fontSize="10" fill="#9d174d">criação</text>

            <rect x="195" y="165" width="130" height="70" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="260" y="193" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4c1d95">Cotidiano</text>
            <text x="260" y="210" textAnchor="middle" fontSize="10" fill="#4c1d95">Cumprimentos,</text>
            <text x="260" y="224" textAnchor="middle" fontSize="10" fill="#4c1d95">pedidos, ordens</text>

            <rect x="360" y="165" width="130" height="70" rx="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5"/>
            <text x="425" y="193" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c2d12">Jogo</text>
            <text x="425" y="210" textAnchor="middle" fontSize="10" fill="#7c2d12">Xadrez, futebol,</text>
            <text x="425" y="224" textAnchor="middle" fontSize="10" fill="#7c2d12">cartas</text>

            <text x="260" y="275" textAnchor="middle" fontSize="11" fill="#6b7280" fontStyle="italic">Cada contexto define suas próprias regras de uso das palavras</text>
          </svg>
          <figcaption>Cada jogo de linguagem possui regras próprias. O significado emerge do uso dentro de cada prática social.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Austin e Searle</span>
        <h2>6. Atos de Fala: Austin e Searle</h2>
        <p>
          <strong>J. L. Austin</strong> (1911–1960) mostrou que a linguagem não apenas descreve
          o mundo — ela também <em>age</em> sobre ele. Ao dizer "Prometo", "Declaro guerra",
          "Batizo este navio", não estamos descrevendo uma ação, mas realizando-a. Austin chamou
          esses enunciados de <strong>performativos</strong>.
        </p>
        <p>
          Austin distinguiu três dimensões de todo ato de fala:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Dimensão</th><th>Definição</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Ato locucionário</strong></td><td>O conteúdo proposicional do enunciado</td><td>"A porta está aberta."</td></tr>
              <tr><td><strong>Ato ilocucionário</strong></td><td>A intenção/força do enunciado</td><td>Ordem, pedido, promessa, declaração</td></tr>
              <tr><td><strong>Ato perlocucionário</strong></td><td>O efeito produzido no ouvinte</td><td>Convencimento, susto, ação realizada</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>John Searle</strong> (1932–) desenvolveu a teoria dos atos de fala, propondo
          que toda comunicação pressupõe regras constitutivas e regulativas. Para Searle, a
          mente, a linguagem e a realidade estão profundamente interligadas — e a intencionalidade
          é o fio condutor.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Habermas</span>
        <h2>7. Habermas e a Ação Comunicativa</h2>
        <p>
          <strong>Jürgen Habermas</strong> (1929–) propõe uma teoria filosófica da comunicação
          baseada na <strong>razão comunicativa</strong>. Para ele, a linguagem não é apenas
          instrumento de poder ou dominação — ela carrega em si uma vocação para o entendimento
          mútuo racional.
        </p>
        <p>
          A <strong>ação comunicativa</strong> ocorre quando os falantes buscam, de boa-fé, o
          entendimento mútuo por meio de argumentos válidos — ao contrário da <em>ação
          estratégica</em>, que usa a linguagem para manipular o outro. Habermas propõe a ideia
          de uma <strong>situação ideal de fala</strong>: um diálogo em que todos os participantes
          têm igualdade de condições para argumentar, questionar e defender posições.
        </p>
        <div className="lesson-highlight">
          <h3>Razão comunicativa vs. razão instrumental</h3>
          <p>
            Para Habermas, a modernidade desenvolveu a <em>razão instrumental</em> (eficiência,
            cálculo, dominação da natureza) em detrimento da <em>razão comunicativa</em>
            (entendimento, solidariedade, democracia). Recuperar a razão comunicativa é essencial
            para uma sociedade democrática e emancipada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linguagem e Poder</span>
        <h2>8. Linguagem, Poder e Emancipação</h2>
        <p>
          A filosofia da linguagem também revela como a linguagem pode ser instrumento de poder
          e dominação. <strong>Michel Foucault</strong> analisou os <em>discursos</em> como
          práticas que produzem verdades, identidades e exclusões. Quem controla o discurso
          controla o que pode ser dito, pensado e feito.
        </p>
        <p>
          Exemplos concretos:
        </p>
        <ul>
          <li>O vocabulário médico que classifica comportamentos como "doença" ou "normalidade".</li>
          <li>A linguagem jurídica que inclui ou exclui cidadãos de direitos.</li>
          <li>O discurso colonial que nomeia povos como "selvagens" ou "primitivos".</li>
          <li>A linguagem de gênero que naturaliza hierarquias sociais.</li>
        </ul>
        <p>
          Em contrapartida, a linguagem também pode ser <strong>emancipatória</strong>: nomear
          a opressão é o primeiro passo para combatê-la. Paulo Freire, por exemplo, via a
          conscientização — aprender a nomear a própria realidade — como ato de libertação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>
        <h2>9. Principais Filósofos da Linguagem — Síntese</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Filósofo</th><th>Conceito central</th><th>Tese principal</th></tr>
            </thead>
            <tbody>
              <tr><td>Frege</td><td>Sentido / Referência</td><td>Distinção entre o modo de apresentação e o objeto designado</td></tr>
              <tr><td>Russell</td><td>Descrições definidas</td><td>A análise lógica dissolve ambiguidades da linguagem ordinária</td></tr>
              <tr><td>Wittgenstein I</td><td>Teoria pictórica</td><td>A proposição é imagem de um fato; limites da linguagem = limites do mundo</td></tr>
              <tr><td>Wittgenstein II</td><td>Jogos de linguagem</td><td>Significado = uso; não há linguagem privada</td></tr>
              <tr><td>Austin</td><td>Atos de fala</td><td>Falar é agir: locucionário, ilocucionário, perlocucionário</td></tr>
              <tr><td>Searle</td><td>Intencionalidade</td><td>Atos de fala pressupõem regras constitutivas e intencionalidade</td></tr>
              <tr><td>Habermas</td><td>Ação comunicativa</td><td>A linguagem orienta-se para o entendimento mútuo racional</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>🔤</span><h3>Virada Linguística</h3><p>A linguagem deixa de ser ferramenta e passa a ser condição do pensamento.</p></div>
          <div className="math-card"><span>🧮</span><h3>Frege</h3><p>Sentido ≠ Referência. "Estrela da manhã" e "Estrela da tarde" diferem em sentido, não em referência.</p></div>
          <div className="math-card"><span>🧩</span><h3>Wittgenstein II</h3><p>Significado = uso. Jogos de linguagem definem regras contextuais para as palavras.</p></div>
          <div className="math-card"><span>🗣️</span><h3>Austin</h3><p>Atos de fala: locucionário (o que se diz), ilocucionário (intenção), perlocucionário (efeito).</p></div>
          <div className="math-card"><span>🤝</span><h3>Habermas</h3><p>Ação comunicativa visa o entendimento racional. Razão comunicativa vs. razão instrumental.</p></div>
          <div className="math-card"><span>⚡</span><h3>Linguagem e Poder</h3><p>Foucault: discursos produzem verdades e identidades. Nomear é um ato político.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Frege e o Significado"
          statement={<p>Para Frege, "Estrela da manhã" e "Estrela da tarde" referem-se ao planeta Vênus. Com base na distinção fregeana, pode-se afirmar que as duas expressões têm:</p>}
          options={[
            { letter: "a", text: "O mesmo sentido e a mesma referência." },
            { letter: "b", text: "Sentidos diferentes, mas a mesma referência.", correct: true },
            { letter: "c", text: "A mesma referência e nenhum sentido." },
            { letter: "d", text: "Sentidos diferentes e referências diferentes." },
          ]}
          resolution={<p>Frege distinguiu sentido (Sinn — o modo de apresentação) de referência (Bedeutung — o objeto designado). "Estrela da manhã" e "Estrela da tarde" são formas diferentes de apresentar o mesmo objeto (Vênus), logo têm sentidos diferentes mas a mesma referência.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Wittgenstein e os Jogos de Linguagem"
          statement={<p>Para o segundo Wittgenstein, o significado de uma palavra é determinado por seu uso em jogos de linguagem. Com base nessa tese, qual das afirmações abaixo está INCORRETA?</p>}
          options={[
            { letter: "a", text: "O significado é sempre contextual e social, não privado." },
            { letter: "b", text: "Uma mesma palavra pode ter significados distintos em diferentes jogos de linguagem." },
            { letter: "c", text: "O significado de uma palavra é dado por sua correspondência com um objeto no mundo, independentemente do uso.", correct: true },
            { letter: "d", text: "Aprender uma linguagem é aprender a participar de práticas sociais com regras." },
          ]}
          resolution={<p>A alternativa C descreve a posição do primeiro Wittgenstein (teoria pictórica do Tractatus), que o segundo Wittgenstein abandonou. Para o Wittgenstein das Investigações Filosóficas, o significado não é correspondência com objetos, mas uso em jogos de linguagem — algo social, contextual e aprendido em comunidade.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Habermas e a Ação Comunicativa"
          statement={<p>Habermas distingue ação comunicativa de ação estratégica. Qual das situações abaixo exemplifica melhor a ação comunicativa no sentido habermasiano?</p>}
          options={[
            { letter: "a", text: "Um político usa dados falsos para convencer eleitores a votar nele." },
            { letter: "b", text: "Uma empresa veicula publicidade emocional para vender produtos sem explicar seus reais atributos." },
            { letter: "c", text: "Dois cidadãos debatem em fórum público, apresentando argumentos, ouvindo o outro e revisando posições a partir de razões.", correct: true },
            { letter: "d", text: "Um negociador cede em aparência para ganhar vantagem futura na negociação." },
          ]}
          resolution={<p>A ação comunicativa, para Habermas, ocorre quando os falantes buscam genuinamente o entendimento mútuo por meio de argumentos racionais, dispostos a revisar suas posições. A alternativa C é o único cenário em que os participantes agem orientados para a compreensão, não para a manipulação ou o ganho estratégico.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Austin e os Atos de Fala"
          statement={<p>"Ao dizer 'Prometo estar lá às 18h', não estou descrevendo um estado mental futuro: estou realizando o ato de prometer." Essa afirmação remete à teoria de J. L. Austin sobre os atos de fala. Com base no texto, o ato descrito é classificado como:</p>}
          options={[
            { letter: "a", text: "Locucionário, porque envolve a emissão de sons com sentido." },
            { letter: "b", text: "Perlocucionário, porque produz efeito de confiança no interlocutor." },
            { letter: "c", text: "Ilocucionário, porque a força da fala é a realização da própria promessa.", correct: true },
            { letter: "d", text: "Constativo, porque descreve um evento futuro verificável." },
          ]}
          resolution={<p>Austin distinguiu atos locucionários (o que é dito), ilocucionários (a força da ação realizada ao dizer, como prometer, ordenar, declarar) e perlocucionários (o efeito no ouvinte). "Prometo" é um ato ilocucionário performativo: ao dizê-lo nas condições adequadas, a promessa se realiza. A dimensão perlocucionária seria o efeito de confiança criado no ouvinte.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Linguagem e Poder"
          statement={<p>Michel Foucault analisou como os discursos médicos, jurídicos e científicos produzem "verdades" que definem o que é normal ou patológico, legal ou ilegal. Com base nessa perspectiva, a afirmação de que um determinado grupo étnico é "primitivo" exemplifica como:</p>}
          options={[
            { letter: "a", text: "A linguagem reflete neutralmente estados de coisas no mundo." },
            { letter: "b", text: "O discurso produz identidades, hierarquias e exclusões sociais, funcionando como instrumento de poder.", correct: true },
            { letter: "c", text: "A linguagem científica é sempre objetiva e isenta de relações de poder." },
            { letter: "d", text: "Os atos de fala são sempre performativos e nunca constatativos." },
          ]}
          resolution={<p>Para Foucault, os discursos não apenas descrevem a realidade — eles a produzem, classificando, hierarquizando e excluindo. Chamar um povo de "primitivo" não é uma constatação neutra: é um ato discursivo que legitima colonização, exploração e apagamento cultural. A linguagem, portanto, é inseparável das relações de poder.</p>}
        />
      </section>
    </article>
  );
}
