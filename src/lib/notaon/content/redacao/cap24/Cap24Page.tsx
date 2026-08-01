"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 24</span>
          <h1>Desenvolvimento por Comparação</h1>
          <p>
            Aprenda a usar a comparação como argumento produtivo: como contrastar
            realidades, países, períodos históricos e grupos sociais de forma que
            revele o problema e fundamente a tese com profundidade analítica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Quando usar comparação no desenvolvimento</h2>
        <p>
          A comparação é uma estratégia argumentativa poderosa quando há um contraste
          revelador entre duas realidades. Ela funciona melhor quando o confronto
          entre os dois elementos não é óbvio, mas ilumina algo sobre o problema que
          não seria visível sem o paralelo. Não é "mencionar que outro país faz
          diferente" — é usar essa diferença para revelar a causa ou a solução do
          problema brasileiro.
        </p>
        <div className="lesson-highlight">
          <h3>Quando a comparação é produtiva</h3>
          <p>
            Use comparação quando ela responder a uma dessas perguntas: (1) O contraste
            revela a causa do problema? (2) O exemplo externo mostra que uma solução
            é viável? (3) A diferença entre grupos sociais evidencia desigualdade
            sistemática? Se a comparação não responder a nenhuma dessas perguntas,
            ela é decorativa.
          </p>
        </div>
        <p>
          Exemplos de comparações produtivas: Brasil (alta evasão escolar) vs.
          Finlândia (educação pública de qualidade) → revela que qualidade de ensino
          público é viável; negros vs. brancos no mercado de trabalho brasileiro →
          revela discriminação estrutural; periferias vs. bairros ricos em acesso
          a saneamento → revela desigualdade territorial.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>
        <h2>2. Tipos de comparação válidos no ENEM</h2>
        <p>
          Existem quatro tipos principais de comparação que funcionam bem na redação
          dissertativo-argumentativa do ENEM. Cada um cria um tipo diferente de
          contraste e serve para objetivos argumentativos distintos.
        </p>
        <div className="lesson-highlight">
          <h3>Os 4 tipos de comparação produtiva</h3>
          <p>
            <strong>1. Brasil vs. outro país:</strong> Compara a situação brasileira
            com a de um país que lidera no tema — educação (Finlândia), saúde (Cuba,
            França), ambiental (Alemanha, Costa Rica). O objetivo é mostrar que a
            solução existe e é viável.
          </p>
          <p>
            <strong>2. Passado vs. presente:</strong> Compara um período histórico
            com a situação atual, evidenciando avanços parciais ou retrocessos que
            revelam a persistência do problema.
          </p>
          <p>
            <strong>3. Grupo privilegiado vs. grupo marginalizado:</strong> Compara
            dados de negros e brancos, ricos e pobres, homens e mulheres, urbanos
            e rurais — evidenciando desigualdade estrutural.
          </p>
          <p>
            <strong>4. Ideal vs. real (lei vs. prática):</strong> Compara o que a
            lei garante com o que a realidade entrega — especialmente eficaz para
            temas de direitos sociais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contraste</span>
        <h2>3. Comparação por contraste: "Se por um lado... por outro..."</h2>
        <p>
          A estrutura "se por um lado... por outro..." é a forma mais clássica de
          comparação na redação ENEM. Ela apresenta primeiro o dado positivo ou o
          ideal, depois o dado negativo ou a realidade problemática — criando uma
          tensão que justifica a tese.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo da estrutura de contraste</h3>
          <p>
            "Se por um lado [realidade A — positiva, esperada, prometida], por outro
            [realidade B — negativa, excludente, problemática] — contraste que evidencia
            [análise: o que esse paradoxo revela sobre o problema]."
          </p>
        </div>
        <p>
          <strong>Exemplo para "desigualdade racial":</strong> "Se por um lado o
          Brasil se proclama uma das nações mais diversas e mestiças do mundo,
          exaltando sua identidade multirracial, por outro os dados do IBGE revelam
          que trabalhadores negros ganham, em média, 58% do salário de trabalhadores
          brancos com a mesma escolaridade — contraste que desmascara o mito da
          democracia racial e evidencia que a discriminação estrutural opera de
          forma sistemática no mercado de trabalho."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Analogia</span>
        <h2>4. Comparação por analogia: iluminar o tema com realidade semelhante</h2>
        <p>
          A comparação por analogia não apresenta um contraste, mas uma semelhança:
          usa uma realidade conhecida para iluminar o tema principal. É especialmente
          útil quando o candidato quer mostrar que o problema do tema já foi enfrentado
          com sucesso em outro contexto, ou quando quer criar uma metáfora analítica.
        </p>
        <div className="lesson-highlight">
          <h3>Como usar analogia de forma produtiva</h3>
          <p>
            A analogia deve ser explicitamente conectada ao tema. Não basta dizer
            "assim como X, Y também..."; é preciso extrair o aprendizado da comparação
            e aplicá-lo ao problema discutido.
          </p>
        </div>
        <p>
          <strong>Exemplo — "políticas de cotas":</strong> "Assim como os Estados
          Unidos implementaram políticas de ação afirmativa para reparar os efeitos
          da segregação racial pós-escravidão, o Brasil precisou adotar as cotas
          raciais nas universidades para enfrentar a sub-representação histórica
          de negros no ensino superior — demonstrando que políticas de equidade
          são, em contextos de desigualdade estrutural, mais eficazes do que a
          simples igualdade formal."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cuidados</span>
        <h2>5. Cuidados com a comparação: como evitar a superficialidade</h2>
        <p>
          A comparação é uma das estratégias mais mal utilizadas no ENEM. O erro
          mais comum é citar outro país sem análise — apenas mencionar que "na
          Finlândia a educação é melhor" sem explorar o que isso revela sobre o
          problema brasileiro.
        </p>
        <div className="lesson-highlight">
          <h3>O que transforma a comparação de superficial em sólida</h3>
          <p>
            <strong>Comparação superficial (evitar):</strong> "Na Finlândia, a
            educação é excelente. No Brasil, a educação é péssima. Por isso,
            o governo deve melhorar a educação."
          </p>
          <p>
            <strong>Comparação sólida (usar):</strong> "A experiência finlandesa
            demonstra que investimento robusto em formação docente e autonomia
            pedagógica — pilares que o Brasil ainda negligencia — pode transformar
            a qualidade do ensino público em menos de duas décadas. O contraste
            entre os dois sistemas revela que a crise educacional brasileira não é
            inevitável, mas resultado de escolhas políticas que priorizaram outros
            setores em detrimento da educação básica."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Dois blocos paralelos com seta de comparação</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Diagrama de comparação com dois blocos paralelos e seta entre eles">
            <rect x="10" y="10" width="185" height="120" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="102" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">BRASIL</text>
            <text x="102" y="52" textAnchor="middle" fontSize="10" fill="#1e3a8a">• Alta concentração de renda</text>
            <text x="102" y="68" textAnchor="middle" fontSize="10" fill="#1e3a8a">• Baixo investimento em educação</text>
            <text x="102" y="84" textAnchor="middle" fontSize="10" fill="#1e3a8a">• Evasão escolar elevada</text>
            <text x="102" y="100" textAnchor="middle" fontSize="10" fill="#1e3a8a">• Infraestrutura precária</text>
            <text x="102" y="116" textAnchor="middle" fontSize="10" fill="#1e3a8a">• Desigualdade regional</text>

            <line x1="197" y1="70" x2="283" y2="70" stroke="#6b7280" strokeWidth="2"/>
            <polygon points="280,64 292,70 280,76" fill="#6b7280"/>
            <polygon points="200,64 188,70 200,76" fill="#6b7280"/>
            <text x="240" y="65" textAnchor="middle" fontSize="10" fill="#374151">contraste</text>

            <rect x="285" y="10" width="185" height="120" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="377" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#15803d">REFERÊNCIA</text>
            <text x="377" y="52" textAnchor="middle" fontSize="10" fill="#14532d">• Distribuição de renda equilibrada</text>
            <text x="377" y="68" textAnchor="middle" fontSize="10" fill="#14532d">• Alto investimento docente</text>
            <text x="377" y="84" textAnchor="middle" fontSize="10" fill="#14532d">• Permanência escolar garantida</text>
            <text x="377" y="100" textAnchor="middle" fontSize="10" fill="#14532d">• Infraestrutura robusta</text>
            <text x="377" y="116" textAnchor="middle" fontSize="10" fill="#14532d">• Equidade territorial</text>

            <rect x="10" y="148" width="460" height="45" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="240" y="168" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#713f12">ANÁLISE: o contraste revela que...</text>
            <text x="240" y="185" textAnchor="middle" fontSize="11" fill="#92400e">→ o problema não é inevitável, mas resultado de escolhas políticas</text>
          </svg>
          <figcaption>O contraste entre Brasil e um país de referência deve sempre culminar em análise crítica, não apenas em listagem de diferenças.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentação</span>
        <h2>7. Como usar comparação para fundamentar a tese</h2>
        <p>
          A comparação deve estar a serviço da tese — não ser um desvio para mostrar
          conhecimento enciclopédico. Para isso, a análise final da comparação deve
          retornar ao problema central e apontar na direção da solução proposta
          na PI.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura: comparação → análise → conexão com a tese</h3>
          <p>
            "Ao comparar [elemento A] com [elemento B], percebe-se que [conclusão
            da comparação]. Esse contraste/essa semelhança evidencia que [análise
            crítica conectada ao tema], o que reforça a necessidade de [tese/PI]."
          </p>
        </div>
        <p>
          <strong>Exemplo para "acesso à saúde":</strong> "Ao comparar o sistema
          de saúde cubano — que, mesmo com recursos limitados, alcançou indicadores
          de mortalidade infantil equiparáveis aos de países ricos, graças ao modelo
          de atenção básica capilada — com o modelo brasileiro, percebe-se que o
          subfinanciamento do SUS nas regiões periféricas é uma escolha política,
          não uma fatalidade econômica. Esse contraste reforça a necessidade de
          ampliar os recursos destinados à atenção primária no Brasil."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Países</span>
        <h2>8. Brasil vs. países nórdicos em educação e saúde</h2>
        <p>
          A comparação com países nórdicos (Finlândia, Suécia, Noruega, Dinamarca)
          é uma das mais usadas no ENEM. Para que seja produtiva e não superficial,
          é preciso entender o que torna esses países diferentes — e o que isso
          revela sobre as escolhas políticas brasileiras.
        </p>
        <div className="lesson-highlight">
          <h3>Como usar sem ser superficial</h3>
          <p>
            <strong>Superficial:</strong> "Na Finlândia, a educação é ótima porque
            o governo investe muito."
          </p>
          <p>
            <strong>Profundo:</strong> "O modelo finlandês investe prioritariamente
            na formação e valorização docente — professores ganham salários equivalentes
            aos de engenheiros e têm autonomia pedagógica real. No Brasil, em contraste,
            o professor do ensino público ganha em média 60% do salário de um profissional
            com formação equivalente em outras áreas, o que compromete a atração de
            talentos para a carreira docente e, por consequência, a qualidade do ensino."
          </p>
        </div>
        <p>
          A diferença está em <strong>especificar o mecanismo</strong>: não basta
          dizer que eles investem mais — é preciso mostrar onde, como e o que isso
          produz de diferente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conectivos</span>
        <h2>9. Conectivos de comparação e contraste</h2>
        <div className="lesson-highlight">
          <h3>Conectivos comparativos com exemplos de uso</h3>
          <p>
            <strong>Da mesma forma</strong> — Indica semelhança: "Da mesma forma
            que o movimento sufragista ampliou a democracia no século XX, o movimento
            negro busca expandir a cidadania plena no século XXI."
          </p>
          <p>
            <strong>Analogamente</strong> — Formal, indica paralelo: "Analogamente
            ao ocorrido nos EUA, o Brasil precisou de décadas de luta para reconhecer
            os direitos civis de populações historicamente excluídas."
          </p>
          <p>
            <strong>Em contraposição</strong> — Contraste direto: "Em contraposição
            ao modelo nórdico de valorização docente, o Brasil mantém uma das piores
            remunerações para professores da América Latina."
          </p>
          <p>
            <strong>Ao contrário de</strong> — Contraste: "Ao contrário de países
            que investem 6% do PIB em educação, o Brasil oscila entre 4% e 5%."
          </p>
          <p>
            <strong>Enquanto</strong> — Simultaneidade contrastiva: "Enquanto países
            europeus avançam na agenda de energias renováveis, o Brasil ainda debate
            a expansão de termelétricas a carvão."
          </p>
          <p>
            <strong>Por outro lado / Em contrapartida</strong> — Para a segunda parte
            da comparação: "Por outro lado, o modelo cubano demonstra que..."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelo</span>
        <h2>10. Parágrafo por comparação: Brasil × Europa em acesso à internet</h2>
        <div className="lesson-highlight">
          <h3>Parágrafo modelo anotado</h3>
          <p>
            <strong>[Frase tópico com comparação anunciada]</strong> O contraste
            entre o acesso à internet no Brasil e na Europa evidencia que a exclusão
            digital não é fenômeno técnico, mas social e político.
          </p>
          <p>
            <strong>[Desenvolvimento do primeiro polo]</strong> Enquanto países
            como a França e a Alemanha garantem acesso à internet em banda larga
            como direito universal, com taxas de conectividade superiores a 90%
            da população, o Brasil mantém cerca de 40 milhões de cidadãos sem
            qualquer acesso à rede.
          </p>
          <p>
            <strong>[Análise do contraste]</strong> Tal disparidade não é explicada
            apenas pela diferença de renda per capita, mas pela ausência de políticas
            públicas de infraestrutura digital nas periferias urbanas e nas zonas
            rurais — áreas sistematicamente ignoradas pelos provedores privados,
            que concentram seus investimentos nas regiões mais lucrativas.
          </p>
          <p>
            <strong>[Conclusão parcial conectada à tese]</strong> Isso demonstra
            que a universalização do acesso à internet exige intervenção estatal
            direta, e não pode depender exclusivamente das forças de mercado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. Comparações válidas para temas ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ENEM</th>
                <th>Elemento A (Brasil/passado)</th>
                <th>Elemento B (referência)</th>
                <th>O que a comparação revela</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Educação pública</td>
                <td>Professor com baixo salário, alta evasão</td>
                <td>Finlândia: valorização docente, PISA alto</td>
                <td>Problema não é inevitável — é escolha política</td>
              </tr>
              <tr>
                <td>Desigualdade racial</td>
                <td>Trabalhadores negros com 58% do salário de brancos</td>
                <td>Políticas de ação afirmativa nos EUA pós-1960s</td>
                <td>Reparação histórica é viável e necessária</td>
              </tr>
              <tr>
                <td>Saúde pública</td>
                <td>SUS subfinanciado, filas, precariedade</td>
                <td>Cuba: atenção primária universal com baixo custo</td>
                <td>Modelo preventivo é mais eficiente que curativo</td>
              </tr>
              <tr>
                <td>Violência contra a mulher</td>
                <td>Brasil: 1.400+ feminicídios/ano, subnotificação</td>
                <td>Islândia: menor índice de violência de gênero do mundo</td>
                <td>Cultura de igualdade e educação reduzem violência</td>
              </tr>
              <tr>
                <td>Meio ambiente</td>
                <td>Brasil: desmatamento em alta, fiscalização frágil</td>
                <td>Alemanha: meta de neutralidade carbônica até 2045</td>
                <td>Compromisso político é determinante da ação ambiental</td>
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
            <span>⚖️</span>
            <h3>Contraste</h3>
            <p>"Se por um lado... por outro..." — estrutura clássica que cria tensão produtiva entre ideal e real.</p>
          </div>
          <div className="math-card">
            <span>🔁</span>
            <h3>Analogia</h3>
            <p>Use realidade semelhante para iluminar o tema. Extraia o aprendizado e aplique ao problema.</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Brasil vs. mundo</h3>
            <p>Especifique o mecanismo da diferença — não apenas "lá é melhor", mas por quê e o que revela.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Conectivos</h3>
            <p>Em contraposição, ao contrário de, enquanto, da mesma forma, analogamente, por outro lado.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Fundamente a tese</h3>
            <p>A análise da comparação deve sempre retornar ao problema e apontar na direção da solução proposta.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Evite</h3>
            <p>Comparação superficial sem análise — mencionar outro país sem extrair o que o contraste revela.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Quando usar comparação"
          statement={<p>A comparação como argumento de desenvolvimento é mais produtiva quando:</p>}
          options={[
            { letter: "a", text: "Serve para mostrar que o candidato conhece outros países" },
            { letter: "b", text: "O contraste entre os elementos revela a causa do problema ou a viabilidade da solução", correct: true },
            { letter: "c", text: "Substitui a necessidade de dados estatísticos no argumento" },
            { letter: "d", text: "É usada apenas na introdução para contextualizar o tema" },
          ]}
          resolution={<p>A comparação é produtiva quando o contraste revela algo sobre o problema que justifica a tese ou a solução. Usar outro país apenas para mostrar erudição sem extrair análise é comparação decorativa, que não pontua em C2 ou C3.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Conectivo de contraste"
          statement={<p>Qual conector é mais adequado para iniciar a segunda parte de uma comparação contrastiva no desenvolvimento?</p>}
          options={[
            { letter: "a", text: "Portanto" },
            { letter: "b", text: "Visto que" },
            { letter: "c", text: "Em contraposição", correct: true },
            { letter: "d", text: "Uma vez que" },
          ]}
          resolution={<p>"Em contraposição" é conector de contraste que indica oposição entre duas realidades comparadas. "Portanto" é conclusivo; "visto que" e "uma vez que" são causais. Para a segunda parte de uma comparação (onde se apresenta o elemento oposto ao primeiro), os conectivos mais adequados são: em contraposição, por outro lado, em contrapartida, ao contrário de, enquanto.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Comparação profunda vs. superficial"
          statement={<p>Para o tema "evasão escolar", qual uso de comparação é mais sofisticado e adequado para uma redação nota 1000?</p>}
          options={[
            { letter: "a", text: "Na Finlândia não há evasão. No Brasil há muita evasão. O governo brasileiro deveria fazer igual à Finlândia." },
            { letter: "b", text: "Comparando o Brasil com a Finlândia, percebe-se que os dois países têm realidades bem diferentes em termos educacionais." },
            { letter: "c", text: "Ao contrário do Brasil, onde professores recebem salários abaixo da média de profissionais com formação equivalente, a Finlândia investe prioritariamente na carreira docente — mecanismo que atrai os melhores talentos para a educação e reduz a evasão ao criar vínculos mais fortes entre escola e comunidade.", correct: true },
            { letter: "d", text: "A Finlândia é um país desenvolvido, por isso tem menos evasão. O Brasil ainda é um país em desenvolvimento." },
          ]}
          resolution={<p>A opção C especifica o mecanismo (valorização docente → atração de talentos → vínculos com a comunidade → redução da evasão) e torna a comparação analítica, não apenas descritiva. As outras opções fazem comparações sem explicar por quê a diferença existe ou o que ela revela sobre as escolhas políticas brasileiras.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Comparação grupo privilegiado vs. marginalizado"
          statement={<p>Para o tema "desigualdade de gênero no mercado de trabalho", qual comparação é mais reveladora e adequada para fundamentar a tese?</p>}
          options={[
            { letter: "a", text: "Mulheres são diferentes de homens, e por isso há diferenças no mercado de trabalho." },
            { letter: "b", text: "Mulheres recebem, em média, 20% menos do que homens com a mesma formação e função — disparidade que não encontra justificativa em produtividade, mas em discriminação estrutural de gênero que o mercado de trabalho brasileiro ainda normaliza.", correct: true },
            { letter: "c", text: "Alguns países têm mais mulheres em cargos de liderança do que o Brasil, o que mostra que é possível ter mais igualdade." },
            { letter: "d", text: "A desigualdade salarial entre homens e mulheres é um problema mundial que afeta todos os países." },
          ]}
          resolution={<p>A opção B usa dado concreto (20% de disparidade), identifica a causa (discriminação estrutural) e revela que o problema não é natural, mas construído socialmente. Isso fundamenta diretamente a tese de que políticas de equidade salarial são necessárias. As outras opções são vagas, imprecisas ou não extraem análise da comparação.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Tipo de comparação"
          statement={<p>O trecho "Enquanto a Constituição Federal de 1988 garante saúde como direito universal de todos os brasileiros, a realidade do Sistema Único de Saúde nas periferias — marcada por filas de meses, falta de medicamentos e ausência de especialistas — demonstra que a lei e a prática distam décadas entre si" usa qual tipo de comparação?</p>}
          options={[
            { letter: "a", text: "Comparação Brasil vs. outro país" },
            { letter: "b", text: "Comparação passado vs. presente" },
            { letter: "c", text: "Comparação ideal (lei) vs. real (prática)", correct: true },
            { letter: "d", text: "Comparação grupo privilegiado vs. marginalizado" },
          ]}
          resolution={<p>A comparação é do tipo ideal vs. real (lei vs. prática): a Constituição promete (ideal) e a realidade entrega o oposto (real). Esse tipo é especialmente eficaz para temas de direitos sociais, pois revela a contradição entre o discurso oficial e a experiência concreta das populações mais vulneráveis.</p>}
        />
      </section>
    </article>
  );
}
