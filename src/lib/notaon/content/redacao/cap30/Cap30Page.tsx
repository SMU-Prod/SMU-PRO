"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 30</span>
          <h1>Técnicas de Persuasão</h1>
          <p>
            Domine as três dimensões da persuasão aristotélica — ethos, pathos e logos —
            e as técnicas argumentativas que transformam uma redação convincente em
            uma redação irresistível, maximizando as Competências 2 e 3.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Persuasão na redação: convicção racional, não manipulação</h2>
        <p>
          Persuadir, no contexto da redação ENEM, não significa manipular o leitor
          com emoções ou meias-verdades. Significa construir um argumento tão
          sólido, tão bem evidenciado e tão bem articulado que o leitor seja levado,
          pela lógica e pela evidência, a compartilhar do ponto de vista do autor.
          É a diferença entre gritar "tenho razão!" e demonstrar pacientemente por
          quê você tem razão.
        </p>
        <div className="lesson-highlight">
          <h3>Os três pilares da persuasão — Aristóteles</h3>
          <p>
            Aristóteles identificou que todo discurso persuasivo opera em três
            dimensões: <strong>Ethos</strong> (credibilidade do emissor),
            <strong> Pathos</strong> (apelo emocional ao receptor) e
            <strong> Logos</strong> (lógica e razão do argumento). Uma redação
            forte combina as três — não depende exclusivamente de nenhuma delas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ethos</span>
        <h2>2. Ethos: credibilidade do autor no texto</h2>
        <p>
          Ethos é a credibilidade que o autor constrói ao longo do texto. Na
          redação ENEM, o candidato não tem nome nem história — sua credibilidade
          vem exclusivamente do que escreve: a precisão dos dados, a sofisticação
          do vocabulário, a coerência do argumento e o domínio do repertório.
        </p>
        <div className="lesson-highlight">
          <h3>Como construir ethos na redação</h3>
          <p>
            <strong>1. Precisão factual:</strong> Usar dados corretos de fontes
            confiáveis transmite seriedade intelectual.
          </p>
          <p>
            <strong>2. Domínio do tema:</strong> Demonstrar conhecimento das causas
            estruturais, não apenas dos sintomas superficiais.
          </p>
          <p>
            <strong>3. Linguagem formal e precisa:</strong> Vocabulário adequado
            ao registro dissertativo demonstra competência linguística (C1).
          </p>
          <p>
            <strong>4. Reconhecer a complexidade:</strong> Um autor que reconhece
            que o problema tem múltiplas dimensões parece mais sábio do que um
            que afirma ter a solução simples para tudo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pathos</span>
        <h2>3. Pathos: apelo emocional que humaniza o problema</h2>
        <p>
          Pathos é o apelo à emoção do leitor. Na redação ENEM, o pathos funciona
          melhor quando humaniza o problema — quando o candidato não fala de "os
          pobres" de forma abstrata, mas de "uma criança que deixa a escola aos 12
          anos para ajudar a sustentar a família". Esse nível de concretude
          provoca empatia.
        </p>
        <div className="lesson-highlight">
          <h3>Como usar pathos sem exagero</h3>
          <p>
            <strong>Técnica do exemplo concreto:</strong> Em vez de "milhões de
            brasileiros não têm saneamento", escreva "famílias inteiras dependem
            de água não tratada para cozinhar, tomar banho e dar de beber a seus
            filhos — expostas diariamente a doenças que o saneamento básico poderia
            prevenir".
          </p>
          <p>
            <strong>Limite do pathos:</strong> O apelo emocional sem base lógica
            é manipulação, não persuasão. A emoção deve sempre estar ancorada em
            dados reais e argumentos sólidos.
          </p>
          <p>
            <strong>Evitar:</strong> Tom melodramático excessivo ("é uma tragédia
            horrível e chocante que crianças morram de fome") — o ENEM valoriza
            a análise fria e precisa, com emoção dosada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Logos</span>
        <h2>4. Logos: lógica e racionalidade do argumento</h2>
        <p>
          Logos é a dimensão lógica da persuasão — a solidez racional do argumento.
          Na redação ENEM, logos se manifesta na cadeia lógica entre premissas e
          conclusão, no uso de dados, na identificação de causas e consequências e
          na coerência interna do texto.
        </p>
        <div className="lesson-highlight">
          <h3>Argumento dedutivo vs. indutivo</h3>
          <p>
            <strong>Dedutivo (do geral para o particular):</strong> Parte de um
            princípio geral (ex: toda criança tem direito à educação) e aplica
            ao caso específico (ex: mas 1 em cada 5 jovens está fora da escola
            — violação sistemática do princípio).
          </p>
          <p>
            <strong>Indutivo (do particular para o geral):</strong> Parte de um
            caso específico ou dado (ex: crianças que trabalham têm 3x mais chance
            de abandonar a escola) e extrai uma conclusão geral (ex: trabalho
            infantil é um dos principais vetores da evasão escolar).
          </p>
          <p>
            O ENEM aceita ambos. A mistura dos dois tipos ao longo do texto
            demonstra versatilidade argumentativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>5. Triângulo de Aristóteles aplicado à redação</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Triângulo de Aristóteles com ethos, pathos e logos nos três vértices e persuasão eficaz no centro">
            <polygon points="240,15 50,175 430,175" fill="none" stroke="#6b7280" strokeWidth="2"/>
            <rect x="185" y="5" width="110" height="45" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="240" y="26" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">ETHOS</text>
            <text x="240" y="42" textAnchor="middle" fontSize="9" fill="#1e3a8a">Credibilidade, domínio</text>
            <rect x="10" y="163" width="110" height="32" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="65" y="178" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#15803d">PATHOS</text>
            <text x="65" y="191" textAnchor="middle" fontSize="9" fill="#14532d">Emoção, humanização</text>
            <rect x="360" y="163" width="110" height="32" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="415" y="178" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#713f12">LOGOS</text>
            <text x="415" y="191" textAnchor="middle" fontSize="9" fill="#92400e">Lógica, dados, razão</text>
            <ellipse cx="240" cy="130" rx="65" ry="30" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2"/>
            <text x="240" y="125" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#6b21a8">PERSUASÃO</text>
            <text x="240" y="141" textAnchor="middle" fontSize="10" fill="#581c87">EFICAZ</text>
          </svg>
          <figcaption>A persuasão eficaz combina as três dimensões: credibilidade, emoção e lógica. Depender de apenas uma enfraquece o argumento.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concessão</span>
        <h2>6. Técnica da concessão: antecipar e refutar o contra-argumento</h2>
        <p>
          A técnica da concessão é uma das mais sofisticadas do arsenal argumentativo.
          O candidato apresenta o argumento contrário à sua tese, reconhece seu valor
          parcial e depois o refuta. Isso demonstra que o autor considerou todos os
          lados da questão — o que aumenta sua credibilidade (ethos).
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura da concessão</h3>
          <p>
            "Embora alguns defendam que [argumento contrário], é preciso reconhecer
            que [limitação do argumento contrário], o que demonstra que [reafirmação
            da sua tese]."
          </p>
          <p>
            <strong>Exemplo:</strong> "Embora alguns defensores do livre mercado
            sustentem que a regulação estatal da internet prejudicaria a inovação
            tecnológica, é preciso reconhecer que a ausência completa de regulação
            já criou monopólios digitais que manipulam o comportamento de bilhões de
            pessoas — demonstrando que o mercado não é autorregulador suficiente
            para proteger a democracia digital."
          </p>
        </div>
        <p>
          A concessão nunca abandona a tese do autor. Ela reconhece um ponto válido
          no argumento contrário, mas imediatamente mostra por que esse ponto não
          invalida a posição defendida no texto.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gradação</span>
        <h2>7. Técnica da gradação: do mais fraco ao mais forte</h2>
        <p>
          A técnica da gradação organiza os argumentos em ordem crescente de força —
          do mais simples ao mais complexo, do mais óbvio ao mais profundo. Isso
          cria uma progressão lógica que mantém o interesse do leitor e culmina
          no argumento mais poderoso.
        </p>
        <div className="lesson-highlight">
          <h3>Gradação aplicada ao tema "desigualdade educacional"</h3>
          <p>
            <strong>Argumento 1 (mais simples — desenvolv. 1):</strong> A desigualdade
            de recursos entre escolas públicas e privadas gera diferença de qualidade
            no ensino.
          </p>
          <p>
            <strong>Argumento 2 (mais profundo — desenvolv. 2):</strong> Essa
            disparidade educacional reproduz e amplia a desigualdade socioeconômica
            ao garantir que os filhos de quem já tem privilégios mantenham o acesso
            ao ensino superior e ao mercado formal — perpetuando um ciclo de exclusão
            que o Estado não está conseguindo romper.
          </p>
          <p>
            O Desenvolvimento 1 apresenta o problema. O Desenvolvimento 2 aprofunda
            suas consequências sistêmicas. A progressão cria acumulação de convicção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplificação</span>
        <h2>8. Técnica da exemplificação específica</h2>
        <p>
          Um exemplo concreto persuade mais do que uma afirmação abstrata. A
          exemplificação específica é mais eficaz que a vaga porque cria uma imagem
          mental no leitor — e imagens mentais convencem mais do que estatísticas.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo vago vs. exemplo específico</h3>
          <p>
            <strong>Vago:</strong> "Muitas crianças no Brasil sofrem com a falta
            de educação de qualidade."
          </p>
          <p>
            <strong>Específico:</strong> "Uma criança que estuda em uma escola
            pública no interior do Maranhão, sem laboratório de ciências, sem
            bibliotecas e com professores sobrecarregados ensinando turmas de 40
            alunos, parte com desvantagem estrutural que nenhum esforço individual
            consegue superar completamente."
          </p>
          <p>
            O exemplo específico é mais persuasivo porque humaniza o dado,
            cria concretude e demonstra que o autor entende a realidade vivida —
            não apenas os números.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pergunta retórica</span>
        <h2>9. Técnica da pergunta retórica na introdução</h2>
        <p>
          A pergunta retórica é um recurso que provoca reflexão no leitor sem
          esperar resposta. Na redação ENEM, ela funciona bem exclusivamente na
          introdução — como gancho de abertura — e deve ser usada com parcimônia.
          Uma pergunta retórica por texto é suficiente.
        </p>
        <div className="lesson-highlight">
          <h3>Quando e como usar</h3>
          <p>
            <strong>Adequado (abertura da introdução):</strong> "Como pode um país
            que se orgulha de sua diversidade cultural conviver com a exclusão
            sistemática das línguas e tradições indígenas do sistema educacional?"
          </p>
          <p>
            <strong>Inadequado (no meio do desenvolvimento):</strong> "Mas por que
            o governo não faz nada? E onde estão as leis que prometem proteger
            esses cidadãos?" — Uso excessivo de perguntas retóricas no desenvolvimento
            prejudica a coesão do argumento e parece retórica vazia.
          </p>
          <p>
            <strong>Regra:</strong> Use pergunta retórica apenas se for seguida de
            resposta na própria introdução. Ela não pode ficar no ar sem que o
            candidato responda com a tese.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>10. Erros de persuasão: armadilhas retóricas</h2>
        <div className="lesson-highlight">
          <h3>Os 5 erros de persuasão mais comuns</h3>
          <p>
            <strong>1. Emoção sem lógica:</strong> Texto que apenas apela para
            sentimentos sem fundamentar os argumentos — percebido pelo corretor
            como superficial e manipulador.
          </p>
          <p>
            <strong>2. Generalização:</strong> "Todos os políticos são corruptos",
            "todo brasileiro é pobre" — generalizações prejudicam a credibilidade
            e violam a complexidade que o ENEM valoriza.
          </p>
          <p>
            <strong>3. Argumento de autoridade inválido:</strong> "Meu professor
            disse que...", "todo mundo sabe que..." — autoridades vagas não
            convencem.
          </p>
          <p>
            <strong>4. Falácia do espantalho:</strong> Atacar uma versão exagerada
            ou distorcida do argumento contrário, em vez do argumento real.
          </p>
          <p>
            <strong>5. Petição de princípio:</strong> Usar como premissa o que
            deveria ser provado: "A educação é importante porque sem educação
            as pessoas não são educadas."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. Técnicas de persuasão: quando usar e como aplicar</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Técnica</th>
                <th>Quando usar</th>
                <th>Exemplo de frase</th>
                <th>Competência fortalecida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Concessão</td>
                <td>Quando há argumento contrário forte que precisa ser reconhecido</td>
                <td>"Embora X possa parecer válido, é preciso reconhecer que Y..."</td>
                <td>C2 (sofisticação), C3 (coerência)</td>
              </tr>
              <tr>
                <td>Gradação</td>
                <td>Para organizar dois argumentos de forma progressiva</td>
                <td>D1 simples → D2 mais profundo e sistêmico</td>
                <td>C3 (progressão temática)</td>
              </tr>
              <tr>
                <td>Exemplificação específica</td>
                <td>Para humanizar dado abstrato ou generalização</td>
                <td>"Uma criança que... sem... e com..." cria imagem concreta</td>
                <td>C2 (repertório), C3 (argumentação)</td>
              </tr>
              <tr>
                <td>Pergunta retórica</td>
                <td>Apenas na introdução, como gancho de abertura</td>
                <td>"Como pode um país... conviver com...?"</td>
                <td>C1 (elegância), C3 (engajamento)</td>
              </tr>
              <tr>
                <td>Pathos (humanização)</td>
                <td>Para criar empatia com o grupo afetado pelo problema</td>
                <td>"Famílias inteiras que dependem de..." em vez de "as pessoas"</td>
                <td>C2 (sensibilidade), C5 (DH)</td>
              </tr>
              <tr>
                <td>Ethos (credibilidade)</td>
                <td>Em todo o texto — via precisão, domínio e linguagem</td>
                <td>Dados com fonte + vocabulário preciso + reconhecer complexidade</td>
                <td>C1, C2, C3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo da Aula</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎤</span>
            <h3>Ethos</h3>
            <p>Construa credibilidade com dados precisos, linguagem formal e reconhecimento da complexidade do problema.</p>
          </div>
          <div className="math-card">
            <span>❤️</span>
            <h3>Pathos</h3>
            <p>Humanize o problema com exemplos concretos. Emoção dosada — sempre ancorada em dados reais.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Logos</h3>
            <p>Cadeia lógica sólida: premissa → evidência → análise → conclusão. Use dedução e indução.</p>
          </div>
          <div className="math-card">
            <span>🤝</span>
            <h3>Concessão</h3>
            <p>"Embora X, é preciso reconhecer que Y" — antecipe o contra-argumento e refute com elegância.</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Gradação</h3>
            <p>D1 mais simples → D2 mais profundo. A progressão acumula convicção ao longo do texto.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Erros</h3>
            <p>Emoção sem lógica, generalização, autoridade inválida, falácia do espantalho — todos prejudicam C3.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Triângulo aristotélico"
          statement={<p>Segundo a retórica aristotélica, qual das alternativas representa corretamente o conceito de "logos"?</p>}
          options={[
            { letter: "a", text: "O apelo à emoção do leitor para criar empatia com o problema" },
            { letter: "b", text: "A credibilidade e autoridade construída pelo emissor do discurso" },
            { letter: "c", text: "A dimensão lógica e racional do argumento, baseada em evidências e raciocínio", correct: true },
            { letter: "d", text: "O uso de linguagem figurada para tornar o texto mais expressivo" },
          ]}
          resolution={<p>Logos é a dimensão lógica e racional da persuasão — a solidez do argumento em si: premissas verdadeiras, evidências confiáveis, raciocínio coerente. Ethos é a credibilidade do autor; Pathos é o apelo emocional. Os três juntos formam o triângulo da persuasão eficaz.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Técnica da concessão"
          statement={<p>Analise o trecho: "Embora defensores do livre mercado argumentem que a regulação do setor privado de saúde prejudicaria a inovação, é necessário reconhecer que, sem regulação, as operadoras de plano priorizam o lucro em detrimento do atendimento integral ao paciente — demonstrando que a saúde, como direito fundamental, não pode ser deixada à lógica mercantil." Que técnica argumentativa está sendo usada?</p>}
          options={[
            { letter: "a", text: "Gradação — apresentação de argumento crescente em complexidade" },
            { letter: "b", text: "Pergunta retórica — provocação reflexiva ao leitor" },
            { letter: "c", text: "Concessão — reconhecimento parcial do argumento contrário seguido de refutação", correct: true },
            { letter: "d", text: "Exemplificação específica — uso de caso concreto para humanizar o problema" },
          ]}
          resolution={<p>A estrutura "embora [argumento contrário], é necessário reconhecer que [limitação] — demonstrando que [reafirmação da tese]" é a técnica da concessão. O autor reconhece que o argumento contrário tem alguma base, mas imediatamente demonstra por que ele não invalida a posição defendida.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Exemplificação específica vs. vaga"
          statement={<p>Para o tema "desigualdade no acesso ao saneamento básico", qual uso da técnica de exemplificação é mais persuasivo?</p>}
          options={[
            { letter: "a", text: "Muitos brasileiros não têm saneamento básico, o que é um problema muito sério que afeta sua saúde." },
            { letter: "b", text: "O saneamento básico é importante para a saúde. Países desenvolvidos têm saneamento universal." },
            { letter: "c", text: "Crianças ribeirinhas da Amazônia que bebem água do mesmo rio onde descartam esgoto doméstico enfrentam taxas de diarreia, verminoses e hepatite A que seriam eliminadas em semanas com infraestrutura básica de saneamento — revelando que a mortalidade infantil nessas comunidades é resultado de uma escolha política, não de uma fatalidade natural.", correct: true },
            { letter: "d", text: "De acordo com dados, muitas pessoas no Brasil não têm saneamento, e isso causa problemas de saúde para a população." },
          ]}
          resolution={<p>A opção C usa exemplificação específica: comunidade concreta (ribeirinhos da Amazônia), doenças específicas (diarreia, verminose, hepatite A), e análise crítica (mortalidade como escolha política, não fatalidade). Essa especificidade cria imagem mental, provoca empatia (pathos) e ao mesmo tempo demonstra domínio do tema (ethos). As outras opções são vagas e não criam concretude argumentativa.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Pergunta retórica"
          statement={<p>Qual uso da pergunta retórica é mais adequado para uma redação ENEM?</p>}
          options={[
            { letter: "a", text: "Usar três perguntas retóricas no final de cada parágrafo de desenvolvimento para manter o leitor engajado" },
            { letter: "b", text: "Abrir a introdução com uma pergunta retórica que é respondida pela tese do candidato, sem usar o recurso em outros momentos do texto", correct: true },
            { letter: "c", text: "Usar uma pergunta retórica na conclusão para abrir espaço para reflexão após a proposta de intervenção" },
            { letter: "d", text: "Perguntas retóricas não devem ser usadas no ENEM pois são um recurso de texto dissertativo informal" },
          ]}
          resolution={<p>A pergunta retórica funciona bem como gancho de abertura na introdução — ela capta atenção e é imediatamente respondida pela tese. Usá-la em excesso ou nos parágrafos de desenvolvimento prejudica a fluidez argumentativa e pode parecer retórica vazia. Um uso pontual e bem resolvido (pergunta + resposta na própria introdução) demonstra elegância discursiva.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Erro de persuasão"
          statement={<p>Um candidato escreve em sua redação: "Todo político brasileiro é corrupto e por isso o país não avança. Se acabarmos com a política, o Brasil será um país melhor." Quais erros de persuasão estão presentes?</p>}
          options={[
            { letter: "a", text: "Apenas excesso de pathos — argumento emocional sem base lógica" },
            { letter: "b", text: "Generalização abusiva ('todo político') e proposta que viola direitos humanos (acabar com a política = fim da democracia)", correct: true },
            { letter: "c", text: "Falta de ethos — o candidato não citou nenhuma fonte para embasar sua afirmação" },
            { letter: "d", text: "Excesso de logos — argumento muito racional e frio, sem humanização" },
          ]}
          resolution={<p>O trecho contém dois erros graves: (1) generalização abusiva ("todo político é corrupto" — há políticos honestos, e a afirmação absoluta prejudica a credibilidade); (2) a proposta de "acabar com a política" viola explicitamente os direitos humanos e o Estado democrático de Direito — o que é penalizado com zero na C5 do ENEM. Propostas antidemocráticas invalidam toda a nota de competência 5.</p>}
        />
      </section>
    </article>
  );
}
