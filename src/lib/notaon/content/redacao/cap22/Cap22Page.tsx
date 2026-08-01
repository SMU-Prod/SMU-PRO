"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 22</span>
          <h1>Introdução com Repertório</h1>
          <p>
            Aprenda a abrir sua redação com citações filosóficas, dados estatísticos
            e referências culturais de forma produtiva — conectando o repertório
            diretamente ao tema e à tese para maximizar a Competência 2.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que significa "abrir com repertório"</h2>
        <p>
          Abrir com repertório significa utilizar uma citação, um dado estatístico,
          uma referência literária, artística ou histórica como ponto de partida da
          introdução. O repertório funciona como uma "chave" que abre a discussão:
          ele apresenta o problema de um ângulo específico, demonstra erudição e
          prepara o leitor para a tese.
        </p>
        <div className="lesson-highlight">
          <h3>Repertório produtivo vs. repertório decorativo</h3>
          <p>
            O ENEM não pontua repertório pela simples presença — pontua pela
            <strong> produtividade</strong>. Um repertório é produtivo quando contribui
            para a argumentação: explica, problematiza ou fundamenta a tese. É
            decorativo quando aparece apenas como enfeite, sem conexão real com o
            problema discutido. A distinção é avaliada pela Competência 2 (C2) e
            pode representar 40 a 80 pontos de diferença.
          </p>
        </div>
        <p>
          A regra de ouro: depois de escrever sua abertura com repertório, pergunte
          "se eu tirasse essa referência, a introdução ficaria incompleta ou faria
          menos sentido?" Se a resposta for não, o repertório é decorativo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>2. Abertura com citação filosófica</h2>
        <p>
          A abertura com citação filosófica é uma das mais valorizadas no ENEM porque
          demonstra profundidade intelectual. O candidato deve, porém, ter cuidado
          com a precisão: citar mal um filósofo é pior do que não citá-lo.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura da abertura filosófica</h3>
          <p>
            <strong>Passo 1:</strong> Apresentar a ideia do filósofo (parafrasear
            ou citar com aspas).<br />
            <strong>Passo 2:</strong> Conectar a ideia ao tema específico ("tal
            perspectiva revela-se pertinente ao analisar...").<br />
            <strong>Passo 3:</strong> Apresentar o problema brasileiro ou atual.<br />
            <strong>Passo 4:</strong> Tese.
          </p>
        </div>
        <p>
          <strong>Exemplo — Tema "violência urbana":</strong> "Para o filósofo
          Thomas Hobbes, o Estado existe para garantir a segurança dos cidadãos,
          evitando o 'estado de natureza', marcado pela guerra de todos contra todos.
          No Brasil contemporâneo, entretanto, o poder público falha sistematicamente
          em sua função protetora, deixando populações periféricas à mercê de ciclos
          de violência estrutural que ceifam principalmente vidas jovens e negras.
          Portanto, é urgente que o Estado reformule suas políticas de segurança
          pública com foco na prevenção social."
        </p>
        <p>
          <strong>Filósofos mais versáteis para o ENEM:</strong> Aristóteles (ética,
          política), Rousseau (desigualdade, educação), Foucault (poder, prisões,
          norma), Hannah Arendt (totalitarismo, política), Simone de Beauvoir
          (gênero), Karl Marx (desigualdade, trabalho), Kant (dignidade, moral).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>3. Abertura com dado estatístico</h2>
        <p>
          Começar com um dado estatístico cria credibilidade imediata: o argumento
          se ancora em evidência objetiva, não apenas em opinião. Para funcionar
          bem, o dado precisa ser específico ao tema e analisado — não apenas citado.
        </p>
        <div className="lesson-highlight">
          <h3>Template de abertura com dado</h3>
          <p>
            "Segundo [fonte confiável], [dado específico sobre o tema] — realidade
            que evidencia [problema central]. Nesse viés, [conexão com o problema
            mais amplo], o que demonstra que [tese]."
          </p>
        </div>
        <p>
          <strong>Exemplo — Tema "evasão escolar":</strong> "Segundo o Instituto
          Nacional de Estudos e Pesquisas Educacionais (INEP), cerca de 20% dos
          jovens entre 15 e 17 anos no Brasil estão fora da escola — realidade que
          evidencia a profunda crise do ensino médio público. Nesse viés, a evasão
          escolar não é fenômeno espontâneo, mas resultado de um sistema educacional
          que falha em valorizar o professor, oferecer infraestrutura adequada e
          proporcionar ao estudante razões concretas para permanecer estudando."
        </p>
        <p>
          <strong>Dica de segurança:</strong> se não souber o dado exato, use
          aproximações: "Cerca de um quinto dos jovens...", "Mais da metade da
          população...", "Dados do IBGE apontam que milhões de brasileiros...".
          Isso é mais seguro do que inventar um percentual e ser penalizado.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>4. Abertura com referência literária</h2>
        <p>
          A literatura oferece personagens e situações que funcionam como metáforas
          poderosas para problemas sociais. Usar um personagem ou obra literária
          na abertura demonstra repertório cultural sofisticado e cria um gancho
          narrativo que torna a introdução mais envolvente.
        </p>
        <div className="lesson-highlight">
          <h3>Como usar sem contar o enredo</h3>
          <p>
            Não resuma o livro. Mencione o personagem, sua condição social ou
            dilema, e faça a conexão direta com o problema do tema. O foco é na
            mensagem social da obra, não na história.
          </p>
        </div>
        <p>
          <strong>Exemplo — Tema "invisibilidade social":</strong> "Macabéa, a
          protagonista do romance 'A Hora da Estrela', de Clarice Lispector,
          representa uma categoria de brasileiros para quem existir já é ato
          de resistência: migrantes nordestinos, periféricos, invisíveis ao Estado
          e à sociedade. Décadas após a publicação da obra, essa invisibilidade
          persiste — manifestando-se no trabalhador informal sem proteção social,
          no morador de rua ignorado e na mulher negra sub-representada em
          posições de poder."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>5. Abertura com evento histórico</h2>
        <p>
          Eventos históricos funcionam como "espelhos do presente": eles mostram
          que o problema atual tem raízes profundas ou que já foi enfrentado antes
          com mais ou menos sucesso. A chave é conectar o evento histórico ao
          problema contemporâneo de forma explícita.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura do evento histórico</h3>
          <p>
            Evento histórico específico → o que ele revelou/gerou → paralelo com
            o presente → problema atual → tese.
          </p>
        </div>
        <p>
          <strong>Exemplo — Tema "participação política da juventude":</strong>
          "Em 1968, estudantes em Paris, Praga e São Paulo ocuparam as ruas em
          movimentos que transformaram a história política de seus países.
          No Brasil, a geração que protagonizou as manifestações contra a ditadura
          militar mostrou que a juventude é agente ativo de mudança democrática.
          Décadas depois, entretanto, o desengajamento político dos jovens
          brasileiros — evidenciado pelos altos índices de abstenção nas eleições —
          aponta para uma crise de representação que precisa ser enfrentada."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Fluxo: repertório → contextualização → tese</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Três colunas mostrando tipos de repertório conectando à tese">
            <rect x="10" y="10" width="130" height="80" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="75" y="32" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#713f12">Citação</text>
            <text x="75" y="48" textAnchor="middle" fontSize="11" fill="#713f12">Filosófica</text>
            <text x="75" y="64" textAnchor="middle" fontSize="10" fill="#713f12">Hobbes, Foucault</text>
            <text x="75" y="80" textAnchor="middle" fontSize="10" fill="#713f12">Beauvoir, Marx...</text>

            <rect x="175" y="10" width="130" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="240" y="32" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">Dado</text>
            <text x="240" y="48" textAnchor="middle" fontSize="11" fill="#1e40af">Estatístico</text>
            <text x="240" y="64" textAnchor="middle" fontSize="10" fill="#1e40af">IBGE, INEP, OMS</text>
            <text x="240" y="80" textAnchor="middle" fontSize="10" fill="#1e40af">MS, IPEA...</text>

            <rect x="340" y="10" width="130" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="405" y="32" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#15803d">Referência</text>
            <text x="405" y="48" textAnchor="middle" fontSize="11" fill="#15803d">Histórica/Cultural</text>
            <text x="405" y="64" textAnchor="middle" fontSize="10" fill="#15803d">Obra, evento,</text>
            <text x="405" y="80" textAnchor="middle" fontSize="10" fill="#15803d">personagem...</text>

            <line x1="75" y1="90" x2="240" y2="130" stroke="#6b7280" strokeWidth="1.5"/>
            <line x1="240" y1="90" x2="240" y2="130" stroke="#6b7280" strokeWidth="1.5"/>
            <line x1="405" y1="90" x2="240" y2="130" stroke="#6b7280" strokeWidth="1.5"/>

            <rect x="100" y="130" width="280" height="55" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2"/>
            <text x="240" y="152" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#6b21a8">Conexão com o tema</text>
            <text x="240" y="168" textAnchor="middle" fontSize="11" fill="#6b21a8">→ Análise crítica → TESE</text>
          </svg>
          <figcaption>Qualquer tipo de repertório deve convergir para a conexão explícita com o tema e desembocar na tese.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>7. Como NÃO usar repertório na introdução</h2>
        <p>
          O uso inadequado de repertório pode prejudicar mais do que ajudar.
          Conhecer os erros mais comuns é essencial para evitá-los.
        </p>
        <div className="lesson-highlight">
          <h3>Erros graves com repertório</h3>
          <p>
            <strong>1. Citação sem conexão:</strong> "Como dizia Einstein, a
            imaginação é mais importante que o conhecimento" — seguido de uma
            redação sobre acesso à água. O corretor não vê conexão, e o repertório
            não pontua.
          </p>
          <p>
            <strong>2. Nome errado ou obra errada:</strong> Atribuir "A Hora da
            Estrela" a Guimarães Rosa ou "Dom Casmurro" a Drummond prejudica a
            credibilidade do texto e pode zerar a C2 no quesito.
          </p>
          <p>
            <strong>3. Conceito filosófico equivocado:</strong> Usar "alienação"
            no sentido popular ("ela é alienada") quando deveria ser no sentido
            marxista (distanciamento do trabalhador em relação ao produto de seu
            trabalho) demonstra conhecimento superficial.
          </p>
          <p>
            <strong>4. Dois ou três repertórios na introdução:</strong> Uma
            introdução com Hobbes, Foucault e um dado do IBGE em 6 linhas parece
            enciclopédia, não argumento. Um repertório bem desenvolvido vale mais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Template</span>
        <h2>8. Template completo: abertura com citação filosófica</h2>
        <div className="lesson-highlight">
          <h3>Modelo estruturado passo a passo</h3>
          <p>
            <strong>Linha 1-2 (repertório):</strong> "Para [filósofo/pensador],
            [ideia central parafrasada ou citada com aspas]."
          </p>
          <p>
            <strong>Linha 2-3 (conexão com o tema):</strong> "Essa perspectiva
            revela-se especialmente pertinente na análise de [tema atual/problema
            brasileiro], onde [manifestação concreta do problema]."
          </p>
          <p>
            <strong>Linha 4-5 (aprofundamento do problema):</strong> "[Dado ou
            evidência que agrava o problema], demonstrando que [consequência
            ou dimensão do problema]."
          </p>
          <p>
            <strong>Linha 5-6 (tese):</strong> "Nesse sentido/Diante disso/
            Portanto, é [adjetivo] que [posicionamento do autor sobre como o
            problema deve ser enfrentado]."
          </p>
        </div>
        <p>
          <strong>Preenchendo o template para o tema "desigualdade social":</strong>
          "Para Jean-Jacques Rousseau, a desigualdade social não é natural ao ser
          humano, mas produto das instituições criadas pela civilização. Essa
          perspectiva revela-se especialmente pertinente na análise da realidade
          brasileira, onde o país figura entre os dez mais desiguais do mundo,
          com um coeficiente de Gini próximo a 0,53. Tal índice demonstra que
          séculos de escravidão e a ausência de reformas estruturais consolidaram
          um abismo socioeconômico que o crescimento econômico, por si só, não
          tem conseguido superar. Nesse sentido, é imperioso que o Estado brasileiro
          adote políticas redistributivas efetivas e amplie o acesso a serviços
          públicos de qualidade."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dado</span>
        <h2>9. Template com dado estatístico</h2>
        <div className="lesson-highlight">
          <h3>Modelo de abertura com dado</h3>
          <p>
            "Segundo dados do [fonte confiável: IBGE/INEP/OMS/IPEA/Ministério X],
            [dado específico e relevante ao tema] — realidade que evidencia [problema
            central do tema]. Nesse viés, [análise da causa ou dimensão do problema],
            o que impõe ao Estado a responsabilidade de [tese/posicionamento]."
          </p>
        </div>
        <p>
          <strong>Exemplo aplicado ao tema "violência contra a mulher":</strong>
          "Segundo dados do Fórum Brasileiro de Segurança Pública, o Brasil registra
          mais de 1.400 casos de feminicídio por ano — realidade que evidencia que
          a violência de gênero atingiu dimensões de crise nacional. Nesse viés,
          a persistência desses números, mesmo após a promulgação da Lei Maria da
          Penha em 2006, revela que a lei por si só não basta: é necessário que
          o Estado amplie a rede de proteção à mulher e que a escola promova uma
          cultura de igualdade de gênero desde a infância."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>10. Introduções com repertório anotadas — 3 temas distintos</h2>
        <div className="lesson-highlight">
          <h3>Tema 1: "Caminhos para garantir o acesso à saúde mental" — abertura com filósofo</h3>
          <p>
            "O filósofo sul-coreano Byung-Chul Han, em 'A Sociedade do Cansaço',
            sustenta que a cultura do desempenho e da produtividade ilimitada gera
            uma epidemia silenciosa de esgotamento psíquico. [repertório introduzido]
            No Brasil, essa realidade se agrava: dados do Ministério da Saúde indicam
            que a depressão afeta cerca de 12 milhões de brasileiros, tornando o país
            um dos líderes mundiais em transtornos de ansiedade. [dado que aprofunda]
            Diante desse cenário, é fundamental que o poder público invista na
            expansão dos Centros de Atenção Psicossocial e que as escolas incorporem
            a saúde emocional como parte do currículo. [tese com PI antecipado]"
          </p>
          <h3>Tema 2: "O papel da educação para a redução da desigualdade" — abertura com dado</h3>
          <p>
            "Segundo a PNAD Contínua do IBGE, trabalhadores com ensino superior
            ganham, em média, 3,4 vezes mais do que aqueles com apenas o ensino
            fundamental — dado que revela a educação como principal fator de
            mobilidade social no Brasil. [dado específico e relevante] Paradoxalmente,
            o acesso ao ensino superior permanece profundamente desigual: enquanto
            75% dos estudantes das escolas particulares chegam à universidade, apenas
            15% dos egressos do ensino público conseguem o mesmo feito. [contraste que
            aprofunda] Portanto, garantir educação pública de qualidade é condição
            indispensável para romper o ciclo de pobreza que perpassa gerações. [tese]"
          </p>
          <h3>Tema 3: "Fake news e a democracia" — abertura com referência histórica</h3>
          <p>
            "Em 1938, a transmissão radiofônica de Orson Welles sobre uma suposta
            invasão alienígena provocou pânico generalizado nos Estados Unidos,
            demonstrando o poder da desinformação sobre o comportamento coletivo.
            [referência histórica conectada ao tema] Oitenta anos depois, o
            fenômeno das fake news nas redes sociais ampliou exponencialmente esse
            potencial destrutivo: pesquisas do MIT revelam que notícias falsas se
            espalham seis vezes mais rápido do que verdadeiras no ambiente digital.
            [dado contemporâneo] Nesse cenário, regulamentar as plataformas digitais
            e promover educação midiática nas escolas são medidas urgentes para
            proteger a integridade do processo democrático. [tese]"
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. Frases de transição entre repertório e tese</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Após citar/apresentar o repertório</th>
                <th>Conector de transição</th>
                <th>Para a tese</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citação filosófica</td>
                <td>"Essa perspectiva revela-se pertinente ao analisar..."</td>
                <td>"...o que torna imperioso que [tese]"</td>
              </tr>
              <tr>
                <td>Dado estatístico</td>
                <td>"Tal realidade evidencia que..." / "Nesse viés..."</td>
                <td>"...tornando urgente que [tese]"</td>
              </tr>
              <tr>
                <td>Referência literária</td>
                <td>"Décadas após a publicação, essa realidade persiste..."</td>
                <td>"...demonstrando a necessidade de [tese]"</td>
              </tr>
              <tr>
                <td>Evento histórico</td>
                <td>"Décadas depois, o problema se reapresenta sob nova forma..."</td>
                <td>"...exigindo que [tese]"</td>
              </tr>
              <tr>
                <td>Qualquer repertório</td>
                <td>"Diante desse cenário..." / "Nesse contexto..."</td>
                <td>"...é fundamental/urgente/imprescindível que [tese]"</td>
              </tr>
              <tr>
                <td>Qualquer repertório</td>
                <td>"Portanto..." / "Assim..."</td>
                <td>"...o Estado deve [tese] a fim de [finalidade]"</td>
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
            <span>🧠</span>
            <h3>Citação filosófica</h3>
            <p>Apresente a ideia do filósofo, conecte ao tema, aprofunde o problema e chegue à tese.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Dado estatístico</h3>
            <p>Use fonte confiável, seja específico ao tema, analise o dado — não apenas o cite.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Referência literária</h3>
            <p>Foco na mensagem social, não no enredo. Conecte personagem/obra ao problema atual.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Evento histórico</h3>
            <p>Conecte o passado ao presente de forma explícita — mostre que o problema tem raízes.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Produtividade</h3>
            <p>O repertório só pontua se contribui para o argumento — não como enfeite.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Erros a evitar</h3>
            <p>Citação desconectada, nome errado, conceito equivocado, mais de um repertório na introdução.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Repertório produtivo"
          statement={<p>O que caracteriza um repertório "produtivo" na avaliação do ENEM?</p>}
          options={[
            { letter: "a", text: "Ser uma citação longa de autor famoso" },
            { letter: "b", text: "Aparecer na introdução e na conclusão do texto" },
            { letter: "c", text: "Contribuir diretamente para a construção do argumento e conexão com o tema", correct: true },
            { letter: "d", text: "Ser retirado exclusivamente de filósofos clássicos gregos" },
          ]}
          resolution={<p>Repertório produtivo é aquele que tem função argumentativa: explica, contextualiza ou fundamenta a tese. O ENEM avalia a produtividade do repertório na C2, não sua simples presença. Uma citação de Einstein sobre energia nuclear para uma redação sobre acesso à água é improdutiva, mesmo sendo de autor famoso.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Template com dado"
          statement={<p>Analise o trecho: "Segundo dados do IBGE, cerca de 33 milhões de brasileiros passam fome — realidade que evidencia o fracasso das políticas de segurança alimentar no país. Nesse viés, a fome não é fenômeno natural, mas resultado de escolhas políticas e econômicas que perpetuam a concentração de renda." Qual é a função da expressão "nesse viés"?</p>}
          options={[
            { letter: "a", text: "Indicar que o autor vai mudar de assunto" },
            { letter: "b", text: "Conectar o dado apresentado à análise crítica que fundamenta a tese", correct: true },
            { letter: "c", text: "Introduzir a proposta de intervenção" },
            { letter: "d", text: "Demonstrar discordância com o dado citado" },
          ]}
          resolution={<p>"Nesse viés" é um conector de continuidade que indica que o raciocínio seguinte parte da mesma perspectiva do dado apresentado. Ele conecta a evidência objetiva (dado) à análise subjetiva (interpretação crítica), que é justamente o movimento que o ENEM exige para um repertório produtivo.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Erro com filósofo"
          statement={<p>Um candidato escreve: "Como dizia Nietzsche em 'A República', o poder corrompe o homem de bem." Qual é o erro cometido?</p>}
          options={[
            { letter: "a", text: "Nietzsche não deveria ser usado em redações do ENEM" },
            { letter: "b", text: "A obra 'A República' é de Platão, não de Nietzsche — erro de atribuição que prejudica a credibilidade", correct: true },
            { letter: "c", text: "A citação é longa demais para uma introdução" },
            { letter: "d", text: "O conteúdo da citação está equivocado em relação ao pensamento de Nietzsche" },
          ]}
          resolution={<p>Atribuir "A República" a Nietzsche é um erro grave de erudição. A obra é de Platão. Esse tipo de erro demonstra conhecimento superficial e pode prejudicar a C2. A regra é: se não tiver certeza sobre a obra ou autoria, parafrasear a ideia sem citar a obra específica — "Para o filósofo Nietzsche, [ideia]" sem mencionar obra específica é mais seguro.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Abertura com referência literária"
          statement={<p>Para uma redação sobre "invisibilidade social de migrantes nordestinos", qual uso de repertório literário é mais eficaz e correto?</p>}
          options={[
            { letter: "a", text: "'Dom Casmurro', de Machado de Assis, retrata a traição de Capitu — tema que ilumina a desconfiança que a sociedade tem dos migrantes nordestinos." },
            { letter: "b", text: "O romance 'Grande Sertão: Veredas', de Guimarães Rosa, ao retratar a vida no sertão, evidencia a riqueza cultural nordestina ignorada pela elite urbana.", correct: true },
            { letter: "c", text: "'Memórias Póstumas de Brás Cubas', ao narrar em primeira pessoa, mostra que todos têm direito de contar sua história, inclusive os migrantes." },
            { letter: "d", text: "Clarice Lispector nunca escreveu sobre migrantes, portanto nenhuma obra dela pode ser usada para esse tema." },
          ]}
          resolution={<p>Guimarães Rosa em 'Grande Sertão: Veredas' é a referência mais diretamente conectada à realidade nordestina e ao silenciamento dessas populações. Também seria excelente 'A Hora da Estrela' de Clarice Lispector com Macabéa. A opção A força uma conexão artificial. A opção C usa a obra mas de forma superficial, sem conexão real com migrantes nordestinos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Construção da introdução completa"
          statement={<p>Para o tema "o impacto das redes sociais na saúde mental dos adolescentes", qual sequência melhor representa uma introdução com repertório bem estruturada?</p>}
          options={[
            { letter: "a", text: "Tese → dado sobre redes sociais → citação filosófica → contextualização" },
            { letter: "b", text: "Citação de Byung-Chul Han sobre a sociedade do cansaço → conexão com uso excessivo de redes sociais → dado sobre aumento de depressão em jovens → tese sobre necessidade de regulação", correct: true },
            { letter: "c", text: "Definição de redes sociais → dados históricos do surgimento do Facebook → tese → proposta de intervenção" },
            { letter: "d", text: "Três citações filosóficas diferentes → análise comparativa → tese" },
          ]}
          resolution={<p>A sequência correta é: repertório (Byung-Chul Han) → conexão com o tema (redes sociais) → dado que comprova o problema (depressão em jovens) → tese. Essa progressão é coerente, produtiva e demonstra tanto conhecimento cultural (C2) quanto capacidade argumentativa (C3). A opção C coloca a proposta de intervenção na introdução, o que é estruturalmente inadequado.</p>}
        />
      </section>
    </article>
  );
}
