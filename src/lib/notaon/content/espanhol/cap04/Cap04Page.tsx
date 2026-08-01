"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 04</span>
          <h1>Contexto, inferência e técnicas de interpretação textual</h1>
          <p>
            A leitura inferencial é a competência mais cobrada nas questões de Espanhol do ENEM. Diferentemente da leitura literal — que simplesmente localiza informações explicitamente declaradas no texto — a leitura inferencial exige que o candidato vá além das palavras e reconstrua significados implícitos, pressupostos, intenções do autor e relações entre ideias. Em espanhol, esse processo é facilitado pela proximidade com o Português, mas exige domínio de técnicas específicas: reconhecer marcadores coesivos, identificar pressupostos, distinguir o que o texto diz explicitamente do que ele sugere, e usar o contexto cultural hispânico para interpretações mais precisas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura Literal vs. Inferencial</span>
        <h2>1. Diferença entre leitura literal e leitura inferencial</h2>
        <p>
          A leitura literal é o nível mais básico de compreensão: o leitor localiza informações que estão explicitamente declaradas no texto, sem necessidade de interpretação. "O texto diz que X" é uma leitura literal. Já a leitura inferencial exige que o leitor conecte informações, use conhecimento de mundo, interprete expressões figuradas e deduza o que o autor sugere mas não afirma diretamente. "O texto sugere/implica/pressupõe que Y" é leitura inferencial. O ENEM cobra predominantemente o segundo tipo, mas as questões de nível básico ainda trabalham com leitura literal.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de leitura</th>
                <th>O que exige</th>
                <th>Exemplo de questão ENEM</th>
                <th>Palavras-gatilho nas questões</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Literal</td>
                <td>Localizar informação explícita no texto</td>
                <td>"Segundo o texto, o que aconteceu com X?"</td>
                <td><em>segundo, de acordo com, o texto afirma, menciona</em></td>
              </tr>
              <tr>
                <td>Inferencial</td>
                <td>Deduzir o que não está explícito; interpretar</td>
                <td>"O texto sugere que o autor acredita que..."</td>
                <td><em>implica, sugere, pressupõe, indica, permite inferir</em></td>
              </tr>
              <tr>
                <td>Avaliativo</td>
                <td>Julgamento crítico sobre o texto</td>
                <td>"Qual recurso expressivo predomina no texto?"</td>
                <td><em>recurso, estratégia, efeito, função, propósito</em></td>
              </tr>
              <tr>
                <td>Intertextual</td>
                <td>Relacionar o texto a outros textos/contextos</td>
                <td>"O texto dialoga com qual tradição literária?"</td>
                <td><em>dialoga, relaciona, remete, referencia</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica prática:</strong> Leia as questões do ENEM com atenção às palavras-gatilho. Se a questão diz "segundo o texto", procure a informação literalmente. Se diz "o texto permite inferir", você precisará ir além do que está escrito. Essas palavras definem o tipo de leitura exigido.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Como o ENEM Testa Inferência</span>
        <h2>2. Como o ENEM testa a leitura inferencial em textos hispânicos</h2>
        <p>
          O ENEM não testa se você memorizou fatos sobre o texto — testa se você compreendeu o que o texto comunica como um todo, incluindo suas camadas implícitas. Os tipos de inferência mais cobrados incluem: (1) inferência sobre a intenção comunicativa do autor; (2) inferência sobre o público-alvo do texto; (3) dedução do tom/atitude do autor (favorável/crítico/irônico); (4) identificação da tese implícita em textos de opinião; e (5) reconhecimento de pressupostos culturais que o texto assume como verdade sem declará-los.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Pirâmide dos níveis de leitura no ENEM de espanhol">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f0fdf4" />
            <text x="350" y="26" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="bold">Pirâmide dos Níveis de Leitura — ENEM Espanhol</text>
            {/* Base - Literal */}
            <polygon points="140,200 560,200 480,155 220,155" fill="#bbf7d0" />
            <text x="350" y="185" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">Nível 1: Leitura Literal</text>
            <text x="350" y="200" textAnchor="middle" fill="#065f46" fontSize="10">Localizar informações explícitas no texto</text>
            {/* Meio - Inferencial */}
            <polygon points="220,150 480,150 420,100 280,100" fill="#4ade80" />
            <text x="350" y="133" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="bold">Nível 2: Inferencial</text>
            <text x="350" y="148" textAnchor="middle" fill="#14532d" fontSize="10">Deduzir implícitos, pressupostos e intenções</text>
            {/* Topo - Avaliativo */}
            <polygon points="280,95 420,95 380,50 320,50" fill="#16a34a" />
            <text x="350" y="78" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Nível 3</text>
            <text x="350" y="93" textAnchor="middle" fill="white" fontSize="10">Avaliativo</text>
            {/* Labels laterais */}
            <text x="110" y="188" textAnchor="end" fill="#6b7280" fontSize="10">40% das questões</text>
            <text x="200" y="132" textAnchor="end" fill="#6b7280" fontSize="10">45% das questões</text>
            <text x="265" y="76" textAnchor="end" fill="#6b7280" fontSize="10">15%</text>
          </svg>
          <figcaption>Os três níveis de leitura cobrados no ENEM: a maioria das questões de Espanhol exige leitura inferencial ou avaliativa.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Intenção do autor</h3>
            <p>Para que o autor escreveu este texto? Informar, convencer, criticar, entreter? A intenção raramente é declarada explicitamente.</p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Público-alvo</h3>
            <p>Para quem este texto foi escrito? Especialistas, leigos, jovens, consumidores? O vocabulário e o nível de detalhamento revelam o público.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Tom e atitude</h3>
            <p>O autor é favorável, crítico, irônico, neutro em relação ao tema? O tom é revelado pelas escolhas lexicais e pela seleção de informações.</p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Tese implícita</h3>
            <p>Qual é a posição central do autor, mesmo que não declarada? Textos de opinião frequentemente "mostram" sua tese sem nunca afirmá-la diretamente.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pressupostos e Subentendidos</span>
        <h2>3. Identificação de pressupostos e subentendidos</h2>
        <p>
          Em linguística, <strong>pressuposto</strong> é uma informação que o falante/escritor assume como verdade sem precisar declará-la — ela fica "nas entrelinhas". O <strong>subentendido</strong> é uma informação que pode ser inferida da situação de comunicação mas que o autor não declara explicitamente por razões pragmáticas (educação, estratégia, ironia etc.). Distinguir pressupostos de informações explícitas é uma habilidade central nas questões mais difíceis do ENEM de Espanhol.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplo de pressuposto em espanhol:</strong><br />
          Frase: <em>"Juan dejó de fumar después de su diagnóstico."</em><br />
          — Informação explícita: Juan parou de fumar após o diagnóstico<br />
          — Pressuposto 1: Juan fumava antes do diagnóstico<br />
          — Pressuposto 2: Juan recebeu um diagnóstico (médico, provavelmente negativo)<br />
          — Subentendido: O diagnóstico provavelmente foi de uma doença relacionada ao fumo<br />
          <br />
          Nenhuma das informações em itálico está escrita na frase, mas todas podem ser inferidas com segurança.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Frase em Espanhol</th>
                <th>Informação explícita</th>
                <th>Pressuposto inferível</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Ella volvió a estudiar</em></td>
                <td>Ela voltou a estudar</td>
                <td>Ela havia estudado antes e parado</td>
              </tr>
              <tr>
                <td><em>El gobierno no actuó a tiempo</em></td>
                <td>O governo não agiu a tempo</td>
                <td>Existia um prazo ou momento ideal para ação; o governo deveria ter agido</td>
              </tr>
              <tr>
                <td><em>Incluso los ricos sufren</em></td>
                <td>Até os ricos sofrem</td>
                <td>Era inesperado que os ricos sofressem; os pobres sofrem ainda mais</td>
              </tr>
              <tr>
                <td><em>Solo un experto podría resolver esto</em></td>
                <td>Só um especialista poderia resolver</td>
                <td>O problema é difícil; a maioria das pessoas não conseguiria resolver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Explícito vs. Implícito</span>
        <h2>4. Relação entre informações explícitas e implícitas</h2>
        <p>
          Todo texto tem duas camadas de significado: o que é dito explicitamente (a superfície textual) e o que é comunicado implicitamente (o subtexto). No ENEM, as questões mais difíceis exploram justamente essa segunda camada. Uma questão típica pode perguntar: "O que o texto implica sobre a posição do autor em relação à globalização?" — e a resposta exigirá que você interprete a seleção de evidências, o vocabulário escolhido e a estrutura argumentativa, não apenas busque uma frase que declare diretamente a opinião do autor.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama de iceberg mostrando a relação entre texto explícito e implícito">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#dbeafe" />
            <text x="350" y="26" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">O "Iceberg" do Texto — Explícito e Implícito</text>
            {/* Parte acima da água - explícita */}
            <polygon points="250,50 450,50 400,100 300,100" fill="#bfdbfe" stroke="#1e40af" strokeWidth="1.5" />
            <text x="350" y="72" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">EXPLÍCITO</text>
            <text x="350" y="88" textAnchor="middle" fill="#1e40af" fontSize="10">O que o texto afirma diretamente</text>
            {/* Linha da água */}
            <line x1="30" y1="100" x2="670" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,4" />
            <text x="40" y="96" fill="#3b82f6" fontSize="10" fontStyle="italic">nível da água (superfície do texto)</text>
            {/* Parte abaixo - implícita */}
            <polygon points="300,102 400,102 480,165 220,165" fill="#1e40af" />
            <text x="350" y="128" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">IMPLÍCITO</text>
            <text x="350" y="145" textAnchor="middle" fill="white" fontSize="10">Pressupostos, subentendidos,</text>
            <text x="350" y="160" textAnchor="middle" fill="white" fontSize="10">intenções, valores culturais</text>
          </svg>
          <figcaption>Como um iceberg, a maior parte do significado de um texto está abaixo da superfície — no que é implícito, pressuposto e subentendido.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto e Sentido</span>
        <h2>5. Como o contexto determina o sentido das palavras</h2>
        <p>
          Uma mesma palavra em espanhol pode ter sentidos completamente diferentes dependendo do contexto em que aparece. <em>Liga</em> pode ser "liga esportiva" (campeonato), "liga" (material elástico), "se conecta" (liga/conecta) ou "importa" (<em>no me liga</em> = não me importa, em algumas variedades). O contexto é sempre soberano na determinação do sentido, e o ENEM frequentemente testa a capacidade do candidato de identificar o sentido contextual correto de palavras polissêmicas ou com uso figurado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra em Espanhol</th>
                <th>Sentido 1 (contexto A)</th>
                <th>Sentido 2 (contexto B)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>banco</em></td>
                <td>banco (instituição financeira): <em>el banco cerró</em></td>
                <td>banco (assento): <em>siéntate en el banco</em></td>
              </tr>
              <tr>
                <td><em>duro</em></td>
                <td>duro/rígido (físico): <em>el suelo está duro</em></td>
                <td>difícil/severo: <em>es un trabajo muy duro</em></td>
              </tr>
              <tr>
                <td><em>fresco</em></td>
                <td>temperatura agradável: <em>hace fresco hoy</em></td>
                <td>atrevido/insolente: <em>¡qué fresco eres!</em></td>
              </tr>
              <tr>
                <td><em>ganar</em></td>
                <td>vencer (competição): <em>ganó el partido</em></td>
                <td>ganhar (dinheiro): <em>gana mucho dinero</em></td>
              </tr>
              <tr>
                <td><em>corriente</em></td>
                <td>corrente elétrica: <em>la corriente eléctrica</em></td>
                <td>comum/ordinário: <em>una persona corriente</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Técnica da releitura seletiva:</strong> Quando uma questão pede o significado de uma palavra específica, não basta olhar para a palavra isolada. Releia toda a frase em que ela aparece, depois o parágrafo, e depois identifique o tema geral do trecho. O sentido correto sempre é aquele que melhor se encaixa em TODOS esses níveis de contexto simultaneamente.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica de Releitura Seletiva</span>
        <h2>6. A técnica de releitura seletiva para encontrar a informação certa</h2>
        <p>
          A releitura seletiva consiste em ler o texto não de forma linear completa novamente, mas de forma direcionada — procurando especificamente a informação que a questão pede. É uma técnica de varredura textual (em inglês, <em>scanning</em>) aplicada de forma estratégica: você identifica palavras-chave da questão, busca essas palavras no texto, e relê apenas o trecho relevante com atenção total. Esta técnica economiza tempo precioso na prova e evita que você "mergulhe" no texto inteiro a cada questão.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Leia a questão</h3>
            <p>Identifique o que exatamente é perguntado e quais são as palavras-chave da pergunta (nomes próprios, datas, conceitos específicos).</p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Busque no texto</h3>
            <p>Varra o texto visualmente procurando as palavras-chave da questão ou seus sinônimos. Não releia tudo — use os olhos como um scanner.</p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Releia o trecho</h3>
            <p>Ao localizar a palavra/trecho relevante, releia esse parágrafo com atenção total, verificando o contexto imediato.</p>
          </div>
          <div className="lesson-card">
            <span>4️⃣</span>
            <h3>Confira a alternativa</h3>
            <p>Compare o que o texto diz com cada alternativa. A correta deve ser uma paráfrase fiel do texto; as incorretas terão contradições ou adições externas.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores Discursivos</span>
        <h2>7. Marcadores de coesão e coerência em espanhol</h2>
        <p>
          Os marcadores discursivos em espanhol sinalizam as relações lógicas entre as partes do texto. Compreendê-los é essencial para a leitura inferencial, pois eles revelam como o autor organiza seu raciocínio — quais ideias ele opõe, quais ele encadeia como causa-efeito, quais são exemplos e quais são conclusões. Um texto cujos marcadores você entende é um texto cuja lógica você domina, mesmo sem entender cada palavra individualmente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marcador em Espanhol</th>
                <th>Função discursiva</th>
                <th>Equivalente em Português</th>
                <th>Implicação para leitura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>sin embargo</em></td>
                <td>Contraste/oposição</td>
                <td>no entanto, porém</td>
                <td>O que segue CONTRADIZ ou limita o que veio antes</td>
              </tr>
              <tr>
                <td><em>además</em></td>
                <td>Adição/reforço</td>
                <td>além disso, ademais</td>
                <td>O que segue ACRESCENTA argumento na mesma direção</td>
              </tr>
              <tr>
                <td><em>por lo tanto</em></td>
                <td>Conclusão/consequência</td>
                <td>portanto, logo</td>
                <td>O que segue é CONSEQUÊNCIA lógica do que veio antes</td>
              </tr>
              <tr>
                <td><em>no obstante</em></td>
                <td>Concessão/contraste formal</td>
                <td>não obstante, apesar disso</td>
                <td>Reconhece um argumento mas apresenta contraposição</td>
              </tr>
              <tr>
                <td><em>es decir</em></td>
                <td>Explicação/reformulação</td>
                <td>ou seja, isto é</td>
                <td>O que segue REFORMULA ou esclarece o que veio antes</td>
              </tr>
              <tr>
                <td><em>a pesar de que</em></td>
                <td>Concessão</td>
                <td>apesar de que, embora</td>
                <td>Admite uma realidade mas afirma outra apesar dela</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inferência em Textos Hispânicos</span>
        <h2>8. Exemplos de inferência em textos de culturas hispânicas</h2>
        <p>
          Textos provenientes de países hispânicos frequentemente carregam referências culturais específicas que exigem inferência a partir do contexto. Uma referência a <em>el Caudillo</em> em um texto espanhol pressupõe conhecimento sobre a ditadura de Franco; uma menção a <em>los desaparecidos</em> em texto argentino pressupõe o período da ditadura militar (1976–1983); <em>el Zócalo</em> em texto mexicano refere-se à praça central da Cidade do México. O ENEM raramente exige esse conhecimento prévio — o contexto do texto deve fornecer as pistas necessárias — mas familiarizar-se com referências culturais hispânicas é uma vantagem adicional.
        </p>

        <div className="lesson-highlight">
          <strong>Referências culturais hispânicas que aparecem no ENEM:</strong><br />
          • <strong>América Latina:</strong> realismo mágico, boom literário latino-americano, ditaduras militares do século XX, movimentos indígenas<br />
          • <strong>Espanha:</strong> Guerra Civil Espanhola, Geração de 98, Transição Democrática, línguas regionais (catalão, basco, galego)<br />
          • <strong>Literatura:</strong> García Márquez (Colômbia), Borges (Argentina), Neruda (Chile), Cortázar (Argentina), Vargas Llosa (Peru), Isabel Allende (Chile)<br />
          • <strong>Movimento social:</strong> <em>Madres de la Plaza de Mayo</em> (Argentina), zapatistas (México), <em>Las Abuelas</em>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Mapa esquemático dos países hispânicos e suas referências culturais mais frequentes no ENEM">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#fef3c7" />
            <text x="350" y="26" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">Referências Culturais Hispânicas no ENEM</text>
            <rect x="20" y="44" width="200" height="130" rx="8" fill="#fde68a" />
            <text x="120" y="66" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Espanha</text>
            <text x="120" y="84" textAnchor="middle" fill="#92400e" fontSize="10">• Geração de 98</text>
            <text x="120" y="100" textAnchor="middle" fill="#92400e" fontSize="10">• Guerra Civil (1936-39)</text>
            <text x="120" y="116" textAnchor="middle" fill="#92400e" fontSize="10">• Transição Democrática</text>
            <text x="120" y="132" textAnchor="middle" fill="#92400e" fontSize="10">• Línguas regionais</text>
            <text x="120" y="148" textAnchor="middle" fill="#92400e" fontSize="10">• Federico García Lorca</text>
            <rect x="240" y="44" width="220" height="130" rx="8" fill="#f59e0b" />
            <text x="350" y="66" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">América do Sul</text>
            <text x="350" y="84" textAnchor="middle" fill="white" fontSize="10">• Realismo mágico</text>
            <text x="350" y="100" textAnchor="middle" fill="white" fontSize="10">• Boom literário (1960-70)</text>
            <text x="350" y="116" textAnchor="middle" fill="white" fontSize="10">• Ditaduras militares séc. XX</text>
            <text x="350" y="132" textAnchor="middle" fill="white" fontSize="10">• García Márquez, Borges</text>
            <text x="350" y="148" textAnchor="middle" fill="white" fontSize="10">• Neruda, Cortázar, Allende</text>
            <rect x="480" y="44" width="200" height="130" rx="8" fill="#fde68a" />
            <text x="580" y="66" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">México / Caribe</text>
            <text x="580" y="84" textAnchor="middle" fill="#92400e" fontSize="10">• Revolução Mexicana</text>
            <text x="580" y="100" textAnchor="middle" fill="#92400e" fontSize="10">• Frida Kahlo / Diego Rivera</text>
            <text x="580" y="116" textAnchor="middle" fill="#92400e" fontSize="10">• Zapatistas</text>
            <text x="580" y="132" textAnchor="middle" fill="#92400e" fontSize="10">• Octavio Paz, Carlos Fuentes</text>
            <text x="580" y="148" textAnchor="middle" fill="#92400e" fontSize="10">• Cultura pré-colombiana</text>
          </svg>
          <figcaption>Principais referências culturais hispânicas por região que podem aparecer em textos do ENEM de Espanhol.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática de Inferência</span>
        <h2>9. Exercitando a inferência: do texto à resposta</h2>
        <p>
          A melhor forma de desenvolver a leitura inferencial é praticar com textos reais e identificar conscientemente o que está explícito e o que pode ser inferido. Para cada parágrafo que você ler, tente responder: (1) O que o texto diz literalmente? (2) O que ele pressupõe que eu saiba? (3) O que ele implica sem dizer? (4) Qual a intenção do autor ao escolher estas palavras e não outras? Esse exercício de "leitura em quatro camadas" é exatamente o que o ENEM avalia nas questões de nível avançado.
        </p>

        <div className="math-block">
          🎯 ESTRATÉGIA AVANÇADA: Nas questões mais difíceis de Espanhol do ENEM, a resposta correta frequentemente é a que "vai além do texto mas não extrapola". Isso significa que a alternativa correta é uma inferência justificável pelas evidências textuais, enquanto as incorretas ou afirmam o que não está no texto ou contradizem explicitamente o que está escrito.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Leitura literal — localizar informação explícita"
          statement={
            <div>
              <p>Leia o trecho: <em>"Según el informe de la OMS publicado en 2022, más de 500 millones de personas en el mundo padecen depresión o ansiedad. La pandemia de COVID-19 agravó significativamente esta situación, aumentando un 25% el número de casos."</em></p>
              <p>Segundo o texto, qual foi o impacto da pandemia de COVID-19 na saúde mental global?</p>
            </div>
          }
          options={[
            { letter: "a", text: "A pandemia reduziu em 25% os casos de depressão e ansiedade no mundo." },
            { letter: "b", text: "A pandemia causou mais de 500 milhões de novos casos de doenças mentais." },
            { letter: "c", text: "A pandemia agravou a situação, aumentando em 25% o número de casos de depressão e ansiedade.", correct: true },
            { letter: "d", text: "A OMS publicou um relatório negando que a pandemia afetou a saúde mental das pessoas." },
            { letter: "e", text: "A pandemia criou novas doenças mentais que não existiam anteriormente." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> está correta. Esta é uma questão de leitura literal — a resposta está explicitamente no texto: <em>"La pandemia de COVID-19 agravó significativamente esta situación, aumentando un 25% el número de casos."</em> A tradução direta é: "A pandemia de COVID-19 agravou significativamente esta situação, aumentando em 25% o número de casos." A alternativa a) inverte o dado (reduziu × aumentou). A alternativa b) confunde o dado dos 500 milhões (total global) com novos casos causados pela pandemia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Inferência — identificar posição implícita do autor"
          statement={
            <div>
              <p>Leia o trecho de artigo de opinião: <em>"Resulta paradójico que los países más ricos del planeta, que generan la mayor parte de las emisiones de carbono históricas, sean precisamente los que menos sufren las consecuencias inmediatas del cambio climático, mientras que las naciones más pobres, responsables de una fracción mínima de la contaminación, enfrentan inundaciones, sequías y desastres naturales de creciente intensidad."</em></p>
              <p>Qual é a posição implícita do autor neste texto?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Os países ricos estão ajudando adequadamente os países pobres a enfrentar as mudanças climáticas." },
            { letter: "b", text: "O autor não tem posição clara — apenas apresenta dados sobre mudanças climáticas de forma neutra." },
            { letter: "c", text: "Existe uma injustiça climática profunda: os maiores responsáveis pelas emissões sofrem menos consequências que os menos responsáveis.", correct: true },
            { letter: "d", text: "Os países pobres são igualmente responsáveis pelas mudanças climáticas que os países ricos." },
            { letter: "e", text: "As mudanças climáticas afetam igualmente todos os países, independentemente de riqueza ou emissões." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta. O autor não afirma explicitamente que há "injustiça", mas a estrutura retórica do texto implica claramente essa posição. A palavra <em>paradójico</em> (= paradoxal/contraditório) revela que o autor vê a situação como algo que não deveria ser assim. A oposição entre "países mais ricos que geram a maior parte das emissões" e "nações mais pobres responsáveis por fração mínima" que sofrem mais as consequências — essa estrutura de contraste revela a tese implícita de injustiça climática. O ENEM frequentemente pede esse tipo de inferência sobre a posição do autor.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Pressupostos em texto literário"
          statement={
            <div>
              <p>Leia o fragmento: <em>"Aquella noche, por última vez, María volvió a escuchar la voz de su madre."</em></p>
              <p>Quais pressupostos estão contidos nessa frase, sem serem declarados explicitamente?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Apenas um pressuposto: que María existe como personagem." },
            { letter: "b", text: "Nenhum pressuposto — tudo está explicitamente declarado na frase." },
            { letter: "c", text: "Múltiplos pressupostos: que María havia escutado a voz da mãe antes (volvió a), que nunca mais a escutaria depois (por última vez), e que a mãe possivelmente morreu depois dessa noite.", correct: true },
            { letter: "d", text: "O único pressuposto é que a mãe de María ainda estava viva nessa noite." },
            { letter: "e", text: "A frase é completamente ambígua e não permite nenhuma inferência segura." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> está correta. A frase contém três camadas de pressupostos: (1) <em>"volvió a escuchar"</em> (= voltou a escutar) pressupõe que ela já havia escutado antes — a voz da mãe não era nova para ela; (2) <em>"por última vez"</em> (= pela última vez) pressupõe que nunca mais ocorreria — algo definitivo vai acontecer; (3) A combinação dos dois elementos mais o contexto literário sugere fortemente a morte da mãe (ou alguma separação definitiva). Em textos literários no ENEM, essa leitura em camadas é essencial para compreender o efeito narrativo e responder questões sobre o sentido do trecho.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Marcadores coesivos e estrutura de argumento"
          statement={
            <div>
              <p>Leia o texto: <em>"El trabajo remoto ofrece innegables ventajas en términos de flexibilidad y conciliación familiar. No obstante, estudios recientes sugieren que puede generar aislamiento social y dificultades para separar el espacio laboral del personal. Es decir, la tecnología que nos permite trabajar desde casa también puede convertirse en una fuente de estrés si no se establecen límites claros."</em></p>
              <p>Com base nos marcadores discursivos, qual é a estrutura lógica desse parágrafo?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Apenas defende as vantagens do trabalho remoto sem reconhecer problemas." },
            { letter: "b", text: "Apresenta vantagens do trabalho remoto → reconhece limitações → reformula a tensão e aponta uma solução.", correct: true },
            { letter: "c", text: "Apenas critica o trabalho remoto e suas consequências negativas para o trabalhador." },
            { letter: "d", text: "Apresenta dois estudos contraditórios sem posição definida do autor." },
            { letter: "e", text: "Define o conceito de trabalho remoto e enumera seus benefícios cronologicamente." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> é correta. Os marcadores discursivos revelam a estrutura: (1) "El trabajo remoto ofrece innegables ventajas..." = apresentação das vantagens; (2) <em>"No obstante"</em> (= no entanto) = mudança de direção — apresentação das limitações/problemas; (3) <em>"Es decir"</em> (= ou seja) = reformulação que integra as duas perspectivas e aponta para uma solução (estabelecer limites claros). Esta estrutura tese→antítese→síntese é muito comum em textos argumentativos e o ENEM frequentemente pede que o candidato a identifique a partir dos marcadores coesivos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Inferência em texto de crônica hispânica"
          statement={
            <div>
              <p>Leia a crônica: <em>"En esta ciudad, los semáforos son meras sugerencias. Los peatones cruzan sin mirar, los conductores aceleran en el amarillo, y los ciclistas van por donde les parece. Y sin embargo, la ciudad funciona. Tal vez el caos tiene su propia lógica, su propio orden invisible que los urbanistas no han sabido capturar en ningún manual."</em></p>
              <p>Qual é a tese central da crônica e o tom do autor?</p>
            </div>
          }
          options={[
            { letter: "a", text: "O autor critica duramente o trânsito caótico da cidade e exige maior fiscalização." },
            { letter: "b", text: "O autor descreve o caos do trânsito de forma neutra e objetiva, sem posição pessoal." },
            { letter: "c", text: "O autor observa com certo humor e admiração que o caos urbano aparente tem uma lógica própria não capturável por normas formais.", correct: true },
            { letter: "d", text: "O autor propõe uma reforma urbanística para melhorar o funcionamento do trânsito urbano." },
            { letter: "e", text: "O autor afirma que os semáforos são inúteis e deveriam ser removidos das cidades." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta. O tom do autor é revelado por várias escolhas linguísticas: (1) <em>"meras sugerencias"</em> (= meras sugestões) revela ironia bem-humorada, não crítica feroz; (2) <em>"Y sin embargo, la ciudad funciona"</em> (= e no entanto a cidade funciona) — surpresa positiva; (3) <em>"el caos tiene su propia lógica, su propio orden invisible"</em> = admiração filosófica pelo fenômeno; (4) a crítica a "urbanistas" que não conseguem capturar isso em manuais é mais irônica que agressiva. O texto é uma crônica — gênero que mistura observação da vida cotidiana com reflexão pessoal e, frequentemente, humor. O ENEM frequentemente inclui crônicas de escritores hispânicos justamente por exigirem esse tipo de leitura inferencial do tom.
            </p>
          }
        />
      </section>

    </article>
  );
}
