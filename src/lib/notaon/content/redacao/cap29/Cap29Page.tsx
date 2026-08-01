"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 29</span>
          <h1>Construindo Parágrafos Fortes</h1>
          <p>
            Aprenda a anatomia do parágrafo perfeito — frase tópico, evidência,
            análise crítica e conclusão parcial — e domine as técnicas que transformam
            argumentos fracos em parágrafos de desenvolvimento nota 200.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O parágrafo perfeito: 5-8 linhas com estrutura completa</h2>
        <p>
          Um parágrafo de desenvolvimento bem construído é a unidade fundamental
          de uma redação nota 1000. Ele deve ter entre 5 e 8 linhas — nem tão curto
          que pareça superficial, nem tão longo que se perca sem foco. Sua estrutura
          interna é sempre a mesma: frase tópico → evidência/desenvolvimento →
          análise crítica → conclusão parcial → conector de saída.
        </p>
        <div className="lesson-highlight">
          <h3>Por que a estrutura importa tanto</h3>
          <p>
            O corretor da C3 avalia se o candidato desenvolve seus argumentos com
            coerência e progressão. Um parágrafo que apresenta a ideia, a evidencia
            e a analisa demonstra raciocínio estruturado. Um parágrafo que apenas
            lista informações sem organização demonstra dificuldade argumentativa.
          </p>
        </div>
        <p>
          A regra prática: ao terminar cada parágrafo de desenvolvimento, pergunte
          "eu afirmei algo, provei e analisei por que isso é importante para o tema?"
          Se a resposta for não, o parágrafo precisa de revisão.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Frase tópico</span>
        <h2>2. Frase tópico: a ideia principal do parágrafo</h2>
        <p>
          A frase tópico é a primeira frase do parágrafo e apresenta sua ideia
          central. Ela funciona como uma "micro-tese": específica, argumentativa
          e diretamente conectada à tese da introdução. Uma boa frase tópico
          anuncia o argumento que será desenvolvido — não apenas o assunto.
        </p>
        <div className="lesson-highlight">
          <h3>Frase tópico fraca vs. frase tópico forte</h3>
          <p>
            <strong>Fraca (assunto, não argumento):</strong> "A educação é um
            tema muito importante no Brasil."
          </p>
          <p>
            <strong>Forte (argumento específico):</strong> "A desvalorização
            histórica da carreira docente é uma das principais causas da crise
            de qualidade no ensino público brasileiro."
          </p>
          <p>
            A diferença: a frase forte toma uma posição (causa identificada) que
            pode ser desenvolvida, evidenciada e analisada. A frase fraca é uma
            afirmação vaga que qualquer pessoa poderia fazer.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Evidência</span>
        <h2>3. Desenvolvimento do argumento: evidência e análise</h2>
        <p>
          Após a frase tópico, o parágrafo deve apresentar a evidência — um dado,
          um exemplo, uma referência ou uma causa — e em seguida analisá-la. A
          evidência sem análise é descritiva; a análise sem evidência é opinativa.
          A combinação dos dois é o argumento.
        </p>
        <div className="lesson-highlight">
          <h3>Tipos de evidência e como analisar cada uma</h3>
          <p>
            <strong>Dado estatístico:</strong> "Segundo o IBGE, professores do
            ensino público ganham 60% do salário médio de profissionais com formação
            equivalente." → Análise: "Tal disparidade desincentiva jovens talentos
            a ingressarem na carreira docente, comprometendo a qualidade do ensino."
          </p>
          <p>
            <strong>Exemplo histórico/contemporâneo:</strong> "A Finlândia,
            ao investir prioritariamente em formação e remuneração docente,
            alcançou os melhores resultados educacionais do mundo." → Análise:
            "Esse modelo demonstra que a valorização do professor é condição
            necessária para a melhoria do ensino público."
          </p>
          <p>
            <strong>Repertório cultural:</strong> "O filósofo Paulo Freire afirmava
            que 'ensinar não é transferir conhecimento, mas criar possibilidades
            para a sua produção'." → Análise: "Essa perspectiva evidencia que um
            professor mal remunerado e sobrecarregado dificilmente consegue
            oferecer educação transformadora."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conclusão</span>
        <h2>4. Conclusão parcial: retomar a frase tópico com nova formulação</h2>
        <p>
          A conclusão parcial fecha o parágrafo retomando sua ideia central com
          outras palavras — demonstrando que o argumento foi desenvolvido, não apenas
          apresentado. Ela não deve repetir a frase tópico literalmente, mas
          reformulá-la de forma que incorpore o que foi desenvolvido no parágrafo.
        </p>
        <div className="lesson-highlight">
          <h3>Como escrever a conclusão parcial</h3>
          <p>
            <strong>Frase tópico:</strong> "A desvalorização da carreira docente
            compromete a qualidade da educação pública."
          </p>
          <p>
            <strong>Conclusão parcial:</strong> "Fica evidente, portanto, que
            investir na formação e remuneração dos professores é condição fundamental
            para que a educação pública cumpra seu papel transformador."
          </p>
          <p>
            Perceba que a conclusão parcial retoma a ideia (desvalorização docente =
            problema) mas a reformula em positivo (investir em docentes = solução),
            preparando o terreno para a PI.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>5. Anatomia do parágrafo: diagrama visual</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Diagrama da anatomia do parágrafo com quatro blocos coloridos empilhados">
            <rect x="10" y="10" width="460" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="240" y="27" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">FRASE TÓPICO</text>
            <text x="240" y="43" textAnchor="middle" fontSize="10" fill="#1e3a8a">Argumento central do parágrafo — específico e diretamente ligado à tese</text>
            <rect x="10" y="55" width="460" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="240" y="72" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#15803d">EVIDÊNCIA / DADO</text>
            <text x="240" y="88" textAnchor="middle" fontSize="10" fill="#14532d">Dado, exemplo, referência ou citação que fundamenta a afirmação</text>
            <rect x="10" y="100" width="460" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="240" y="117" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#713f12">ANÁLISE CRÍTICA</text>
            <text x="240" y="133" textAnchor="middle" fontSize="10" fill="#92400e">Interpretação do significado da evidência — "isso demonstra que...", "tal cenário revela..."</text>
            <rect x="10" y="145" width="350" height="40" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2"/>
            <text x="185" y="162" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#6b21a8">CONCLUSÃO PARCIAL</text>
            <text x="185" y="178" textAnchor="middle" fontSize="10" fill="#581c87">Retomada da frase tópico com nova formulação</text>
            <rect x="368" y="145" width="102" height="40" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="419" y="162" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#991b1b">CONECTOR</text>
            <text x="419" y="178" textAnchor="middle" fontSize="10" fill="#7f1d1d">→ próx. §</text>
          </svg>
          <figcaption>A anatomia completa do parágrafo de desenvolvimento: quatro blocos funcionais que garantem coerência e profundidade argumentativa.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diferenças</span>
        <h2>6. Parágrafos de desenvolvimento vs. introdução vs. conclusão</h2>
        <p>
          Cada tipo de parágrafo tem uma função específica e uma estrutura diferente.
          Confundir essas funções é um dos erros mais comuns que prejudicam a C3.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura por tipo de parágrafo</h3>
          <p>
            <strong>Introdução:</strong> Contextualização (3-4 linhas) + Tese
            (1-2 linhas). Não tem evidências detalhadas nem proposta de intervenção.
          </p>
          <p>
            <strong>Desenvolvimento 1:</strong> FT + causa estrutural + evidência +
            análise + conclusão parcial. Foco na 1ª dimensão do problema.
          </p>
          <p>
            <strong>Desenvolvimento 2:</strong> FT + consequência + evidência +
            análise + conclusão parcial. Foco na 2ª dimensão ou no agravamento.
          </p>
          <p>
            <strong>Conclusão:</strong> Retomada da tese (1-2 linhas) + Proposta
            de Intervenção completa (3-4 linhas com os 5 elementos). Não introduz
            argumentos novos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho</span>
        <h2>7. Tamanho ideal: nem bloco nem frase</h2>
        <p>
          O tamanho do parágrafo importa para a avaliação. Parágrafos muito curtos
          parecem superficiais; parágrafos muito longos perdem o foco e se tornam
          difíceis de acompanhar.
        </p>
        <div className="lesson-highlight">
          <h3>Referência de tamanho por tipo de parágrafo</h3>
          <p>
            <strong>Introdução:</strong> 5-7 linhas (contextualização + tese).
          </p>
          <p>
            <strong>Desenvolvimento:</strong> 6-10 linhas por parágrafo.
            Cada parágrafo deve conter UM argumento bem desenvolvido.
          </p>
          <p>
            <strong>Conclusão:</strong> 5-7 linhas (retomada + PI completa).
          </p>
          <p>
            <strong>Parágrafo-frase (evitar):</strong> Um parágrafo de 2-3 linhas
            não consegue desenvolver nenhum argumento adequadamente.
          </p>
          <p>
            <strong>Parágrafo-bloco (evitar):</strong> Um parágrafo de 15+ linhas
            provavelmente está tentando desenvolver 2-3 argumentos diferentes —
            cada um deveria ser um parágrafo separado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Profundidade</span>
        <h2>8. Como tornar o argumento mais profundo: da causa superficial à estrutural</h2>
        <p>
          Um argumento ganha profundidade quando vai além da causa óbvia e identifica
          a causa estrutural. A técnica do "por quê?" repetido é a forma mais simples
          de alcançar essa profundidade.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo: aprofundando o argumento sobre analfabetismo</h3>
          <p>
            <strong>Nível 1 (superficial):</strong> "O analfabetismo é ruim para o Brasil."
          </p>
          <p>
            <strong>Nível 2 (um por quê?):</strong> "O analfabetismo persiste porque
            muitas crianças não frequentam a escola."
          </p>
          <p>
            <strong>Nível 3 (dois por quês?):</strong> "Muitas crianças não frequentam
            a escola porque precisam trabalhar para complementar a renda familiar."
          </p>
          <p>
            <strong>Nível 4 (três por quês? — causa estrutural):</strong> "Famílias
            dependem do trabalho infantil porque a concentração histórica de renda
            no Brasil não foi corrigida por políticas redistributivas efetivas,
            deixando milhões de famílias em situação de pobreza estrutural que
            reproduz o ciclo de exclusão entre gerações."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>9. Parágrafo fraco vs. parágrafo forte sobre mesmo tema</h2>
        <div className="lesson-highlight">
          <h3>Tema: exclusão digital — comparação direta</h3>
          <p>
            <strong>PARÁGRAFO FRACO:</strong> "A exclusão digital é um problema sério
            no Brasil. Muitos brasileiros não têm acesso à internet. Isso é ruim porque
            a internet é muito importante nos dias de hoje. Sem internet, as pessoas
            ficam desinformadas e não conseguem emprego."
          </p>
          <p>
            Problemas: frase tópico vaga, sem evidência, sem análise de causa,
            sem análise crítica, sem conclusão parcial. Parágrafo de descrição,
            não de argumento.
          </p>
          <p>
            <strong>PARÁGRAFO FORTE:</strong> "A desigualdade econômica histórica
            do Brasil tem como consequência direta a exclusão digital de cerca de
            40 milhões de cidadãos que não têm acesso à internet (IBGE) — privados
            pelo alto custo dos planos e pela ausência de infraestrutura nas periferias
            e zonas rurais. Em um mundo cada vez mais digitalizado, essa exclusão
            não é apenas tecnológica: ela marginaliza essas populações do mercado de
            trabalho formal, dos serviços públicos on-line e do debate político nas
            redes sociais, aprofundando o ciclo de vulnerabilidade já estabelecido
            pela pobreza. Torna-se imperioso, portanto, que o Estado invista em
            infraestrutura digital universal como política de inclusão social."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica</span>
        <h2>10. Técnica do "por quê?" repetido: 3 níveis de profundidade</h2>
        <div className="lesson-highlight">
          <h3>Aplicando a técnica ao tema "violência contra a mulher"</h3>
          <p>
            <strong>Afirmação inicial:</strong> "A violência contra a mulher é
            recorrente no Brasil."
          </p>
          <p>
            <strong>Por quê? (nível 1):</strong> "Porque homens cometem atos de
            violência contra suas parceiras."
          </p>
          <p>
            <strong>Por quê? (nível 2):</strong> "Porque a cultura machista
            naturaliza a posse masculina sobre a mulher."
          </p>
          <p>
            <strong>Por quê? (nível 3 — causa estrutural):</strong> "Porque as
            instituições — família, escola, mídia e Igreja — historicamente
            reproduziram a subordinação feminina como norma, sem que o Estado
            tivesse políticas sistemáticas de educação para a igualdade de gênero."
          </p>
          <p>
            O argumento de nível 3 é o mais sofisticado e é o que diferencia uma
            redação de 680 de uma de 900 pontos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. Fraquezas de parágrafo: diagnóstico e solução</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fraqueza</th>
                <th>Diagnóstico</th>
                <th>Solução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parágrafo muito curto (2-3 linhas)</td>
                <td>Argumento não desenvolvido, falta evidência ou análise</td>
                <td>Adicionar dado + análise de causa e consequência</td>
              </tr>
              <tr>
                <td>Parágrafo muito longo (15+ linhas)</td>
                <td>Dois ou mais argumentos misturados no mesmo parágrafo</td>
                <td>Separar em dois parágrafos com FTs distintas</td>
              </tr>
              <tr>
                <td>Frase tópico vaga</td>
                <td>"X é importante" — não é argumento, é afirmação genérica</td>
                <td>Especificar: "a ausência de X causa Y" — posição e causa</td>
              </tr>
              <tr>
                <td>Dado sem análise</td>
                <td>O número aparece solto, sem interpretação</td>
                <td>Adicionar "tal dado revela que..." ou "esse número demonstra..."</td>
              </tr>
              <tr>
                <td>Causa superficial</td>
                <td>Identifica a causa imediata, não a estrutural</td>
                <td>Aplicar técnica do "por quê?" três vezes</td>
              </tr>
              <tr>
                <td>Sem conclusão parcial</td>
                <td>Parágrafo "cai" sem fechar — passagem abrupta</td>
                <td>Adicionar "fica evidente, portanto, que..." antes do conector</td>
              </tr>
              <tr>
                <td>Sem conector de saída</td>
                <td>Parágrafos parecem textos independentes sem progressão</td>
                <td>Usar "Além disso...", "Ademais...", "Nesse contexto..." para ligar</td>
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
            <span>🎯</span>
            <h3>Frase tópico</h3>
            <p>Específica e argumentativa — apresenta o argumento do parágrafo, não apenas o assunto.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Evidência</h3>
            <p>Dado, exemplo ou referência que fundamenta a afirmação. Sem evidência, é apenas opinião.</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Análise crítica</h3>
            <p>"Isso demonstra que...", "tal cenário revela..." — interprete o significado da evidência.</p>
          </div>
          <div className="math-card">
            <span>🔁</span>
            <h3>Conclusão parcial</h3>
            <p>Retome a FT com nova formulação, incorporando o que foi desenvolvido no parágrafo.</p>
          </div>
          <div className="math-card">
            <span>❓</span>
            <h3>Por quê? x3</h3>
            <p>Pergunte "por quê?" três vezes para chegar à causa estrutural — o que diferencia notas 680 e 960.</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>Tamanho</h3>
            <p>6-10 linhas por parágrafo de desenvolvimento. Um argumento por parágrafo — nem mais, nem menos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Frase tópico"
          statement={<p>Qual das seguintes frases seria a melhor frase tópico para um parágrafo sobre desigualdade racial no mercado de trabalho?</p>}
          options={[
            { letter: "a", text: "O racismo existe no Brasil e é um problema muito sério." },
            { letter: "b", text: "Existem muitos tipos de discriminação na sociedade brasileira." },
            { letter: "c", text: "O racismo estrutural opera como barreira invisível que impede trabalhadores negros de alcançar posições de liderança, mesmo com qualificação equivalente à de seus pares brancos.", correct: true },
            { letter: "d", text: "O mercado de trabalho brasileiro tem muitos problemas que precisam ser resolvidos." },
          ]}
          resolution={<p>A opção C é uma frase tópico de qualidade porque: (1) é específica (mercado de trabalho → posições de liderança), (2) identifica a causa (racismo estrutural como barreira invisível), (3) usa linguagem crítica e analítica. As outras opções são afirmações genéricas que poderiam abrir qualquer texto sobre o tema — sem argumento específico para desenvolver.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Estrutura do parágrafo"
          statement={<p>Em um parágrafo de desenvolvimento, qual é a função da "análise crítica"?</p>}
          options={[
            { letter: "a", text: "Apresentar a proposta de intervenção para o problema" },
            { letter: "b", text: "Repetir a evidência apresentada com outras palavras" },
            { letter: "c", text: "Interpretar o significado da evidência e conectá-la ao argumento central", correct: true },
            { letter: "d", text: "Introduzir um novo argumento que será desenvolvido no próximo parágrafo" },
          ]}
          resolution={<p>A análise crítica é o elemento que transforma a evidência em argumento. Ela responde: "o que esse dado/exemplo significa?", "por que ele comprova o argumento da FT?", "o que ele revela sobre o problema maior?". Sem a análise, o parágrafo permanece descritivo — o candidato apresenta informações mas não as argumenta.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Parágrafo fraco vs. forte"
          statement={<p>Compare os dois parágrafos sobre saúde pública e identifique qual apresenta estrutura mais adequada para uma redação nota 1000: (A) "A saúde pública no Brasil tem muitos problemas. Muitas pessoas precisam esperar muito tempo para ser atendidas. Além disso, faltam médicos em muitas regiões. Por isso, o governo precisa melhorar a saúde." (B) "O subfinanciamento histórico do Sistema Único de Saúde é uma das principais causas da precariedade do atendimento nas regiões periféricas brasileiras. Segundo dados do Ministério da Saúde, o Brasil investe cerca de R$800 por habitante/ano no SUS — menos da metade do valor recomendado pela OMS — o que resulta em filas de meses para consultas especializadas e na ausência de médicos em centenas de municípios do interior. Tal realidade evidencia que a saúde, embora assegurada como direito universal pela Constituição, permanece como privilégio daqueles que podem pagar pelo sistema privado."</p>}
          options={[
            { letter: "a", text: "O parágrafo A é melhor por ser mais direto e claro" },
            { letter: "b", text: "Os dois parágrafos são equivalentes em qualidade" },
            { letter: "c", text: "O parágrafo B é melhor: tem FT específica, dado com fonte, análise de causa e consequência, e conclusão parcial que retoma a tese", correct: true },
            { letter: "d", text: "O parágrafo A é melhor porque o B é muito longo e confuso" },
          ]}
          resolution={<p>O parágrafo B tem todas as marcas de um argumento bem estruturado: FT específica (subfinanciamento → precariedade), dado com fonte (R$800/habitante vs. OMS), análise de consequências (filas, ausência de médicos), e conclusão parcial que retoma o problema de forma ampliada (saúde como privilégio, não direito). O parágrafo A é uma listagem de problemas sem causa identificada, sem evidência e sem análise.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Profundidade argumentativa"
          statement={<p>Aplicando a técnica do "por quê?" repetido ao problema "jovens negros são maioria entre as vítimas de homicídio no Brasil", qual representa o argumento de maior profundidade analítica?</p>}
          options={[
            { letter: "a", text: "Jovens negros são mortos porque se envolvem com o tráfico de drogas." },
            { letter: "b", text: "O racismo estrutural, que historicamente concentrou jovens negros em territórios periféricos com ausência de Estado, escola e oportunidades, cria uma exposição diferencial à violência — tanto por parte do crime organizado quanto por parte de uma polícia que atua com seletividade racial.", correct: true },
            { letter: "c", text: "O Brasil tem muita violência e os negros sofrem mais por causa da discriminação histórica." },
            { letter: "d", text: "A violência no Brasil é causada pela pobreza, e os negros são mais pobres, por isso morrem mais." },
          ]}
          resolution={<p>A opção B identifica a causa estrutural mais profunda (racismo estrutural que concentra negros em territórios marginalizados) e aponta para dois mecanismos distintos (crime organizado E violência policial seletiva) — demonstrando sofisticação analítica que vai além da simples correlação entre pobreza e violência. A opção D identifica uma causa próxima mas não estrutural — é um passo acima da A, mas não alcança a profundidade da B.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Conclusão parcial"
          statement={<p>Após desenvolver um parágrafo sobre como o trabalho infantil causa evasão escolar, qual seria a melhor conclusão parcial?</p>}
          options={[
            { letter: "a", text: "Portanto, o trabalho infantil é uma coisa muito ruim para as crianças brasileiras." },
            { letter: "b", text: "Em síntese, fica evidente que enquanto o Estado não erradicar o trabalho infantil por meio de transferência de renda e fiscalização, a evasão escolar permanecerá como consequência inevitável da pobreza estrutural que condena famílias a depender do trabalho dos filhos.", correct: true },
            { letter: "c", text: "Assim, é necessário fazer mais pesquisas sobre esse tema para entender melhor o problema." },
            { letter: "d", text: "Em conclusão, o governo deve proibir o trabalho infantil com leis mais severas." },
          ]}
          resolution={<p>A opção B é a melhor conclusão parcial porque: (1) retoma a relação estabelecida no parágrafo (trabalho infantil → evasão), (2) identifica a condição necessária para resolução (erradicação via transferência de renda + fiscalização), (3) recontextualiza o problema na causa estrutural (pobreza que cria dependência), e (4) usa linguagem sofisticada. As outras opções são vagas, superficiais ou introduzem argumento novo inadequado para conclusão parcial.</p>}
        />
      </section>
    </article>
  );
}
