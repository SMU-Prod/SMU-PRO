"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 3</span>
          <h1>Como Interpretar o Tema</h1>
          <p>
            Aprender a ler e interpretar a proposta de redação do ENEM com precisão é o
            primeiro passo para uma nota alta. Entenda como identificar o recorte correto,
            evitar a fuga ao tema e fazer um brainstorm eficaz antes de escrever.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Ponto de Partida</span>
        <h2>1. O que é o Tema: O Problema Social a Discutir</h2>
        <p>
          O tema da redação ENEM é sempre um <strong>problema social de relevância nacional</strong>.
          Ele envolve questões que afetam grupos de pessoas, direitos, desigualdades ou
          contradições da sociedade brasileira. O ENEM nunca pede redações sobre temas pessoais,
          opiniões individuais sem base social, ou assuntos meramente técnicos.
        </p>
        <p>
          O tema é apresentado em uma <strong>proposta de redação</strong> composta por:
          (1) um enunciado com o problema central; (2) textos motivadores que fornecem
          perspectivas, dados e informações; (3) a instrução de produção que especifica o
          que se espera do texto. Ler essas três partes com atenção é obrigatório antes de
          começar a escrever.
        </p>
        <div className="lesson-highlight">
          <h3>O que o tema NÃO é</h3>
          <p>
            O tema não é uma pergunta que você deve responder com "sim" ou "não". Não é
            uma redação sobre <em>sua opinião pessoal</em>. Não é uma lista de dados sobre
            o assunto. É uma <strong>tese defendida com argumentos sobre um problema social</strong>,
            sempre com proposta de solução concreta que respeite os direitos humanos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Textos Motivadores</span>
        <h2>2. O que São os Textos Motivadores: Base de Repertório</h2>
        <p>
          Os textos motivadores são trechos de artigos, notícias, dados estatísticos, charges,
          poemas ou imagens que acompanham a proposta de redação. Eles servem para <strong>estimular
          a reflexão</strong> e fornecer informações iniciais sobre o tema — mas <em>não são
          a única fonte</em> que você deve usar.
        </p>
        <p>
          O candidato que usa apenas os textos motivadores como base de argumentação tende a
          obter notas médias em C2. Para notas altas, é necessário <strong>acrescentar repertório
          próprio</strong>: dados atualizados, citações de autores, exemplos históricos,
          comparações com outros países, referências literárias ou filosóficas. O texto
          motivador é o ponto de partida, nunca o destino.
        </p>
        <div className="lesson-highlight">
          <h3>Cuidado: copiar é punido</h3>
          <p>
            Copiar trechos dos textos motivadores literalmente é considerado plágio pelo ENEM.
            Os corretores ignoram essas partes como se não tivessem sido escritas, reduzindo
            efetivamente o tamanho do seu texto. Parafrasear (dizer com suas palavras) é
            permitido, mas citar a fonte é mais valorizado: "Conforme indicado nos textos
            motivadores, ..."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lendo a Proposta</span>
        <h2>3. Lendo a Proposta de Redação: Identificando o Verbo-Chave</h2>
        <p>
          A instrução de produção geralmente contém um <strong>verbo-chave</strong> que indica
          o que você deve fazer: <em>discuta</em> (defenda posição com argumentos),
          <em> apresente</em> (exponha com clareza), <em>proponha</em> (sugira solução),
          <em> analise</em> (examine causas e consequências). No ENEM, o verbo mais comum é
          <strong>"escreva um texto dissertativo-argumentativo"</strong>, que combina todas
          essas ações.
        </p>
        <p>
          A instrução também especifica o <strong>destinatário</strong> (o leitor ideal do
          texto), os <strong>meios</strong> (a partir dos textos motivadores e de seus
          conhecimentos) e o <strong>objetivo</strong> (defender ponto de vista e propor
          intervenção social). Leia a instrução completa e sublinho as palavras que definem
          o escopo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Recorte Temático</span>
        <h2>4. Identificando o Recorte: Não Escreva Sobre Tudo</h2>
        <p>
          Todo tema do ENEM tem um <strong>recorte</strong> — um aspecto específico do problema
          maior que deve ser o foco da redação. Escrever sobre o tema amplo sem respeitar o
          recorte é tangenciamento, que penaliza a C2.
        </p>
        <p>
          Exemplo: o tema "violência" é amplo demais. O recorte pode ser "violência doméstica
          contra a mulher", "violência no trânsito", "violência urbana e segurança pública",
          ou "violência simbólica nas redes sociais". Cada recorte exige argumentos diferentes.
          Identificar corretamente o recorte é a diferença entre um texto focado e relevante
          e um texto disperso que "toca em tudo e não aprofunda nada".
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema amplo</th><th>Recorte correto (ENEM)</th><th>Recorte incorreto (fuga/tangenciamento)</th></tr>
            </thead>
            <tbody>
              <tr><td>Saúde</td><td>"Saúde mental de jovens no Brasil"</td><td>Escrever sobre saúde pública em geral</td></tr>
              <tr><td>Educação</td><td>"Evasão escolar no ensino médio"</td><td>Escrever sobre a importância da educação</td></tr>
              <tr><td>Tecnologia</td><td>"Fake news e desinformação"</td><td>Escrever sobre os benefícios da internet</td></tr>
              <tr><td>Gênero</td><td>"Invisibilidade do trabalho de cuidado feminino"</td><td>Escrever sobre igualdade de gênero no geral</td></tr>
              <tr><td>Meio ambiente</td><td>"Desmatamento e populações indígenas"</td><td>Escrever sobre aquecimento global em geral</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fluxo de Interpretação</span>
        <h2>5. Fluxograma de Interpretação do Tema</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Fluxograma de interpretação do tema da redação ENEM">
            <defs>
              <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>
            {/* Etapa 1 */}
            <rect x="160" y="10" width="160" height="36" rx="18" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="240" y="33" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3730a3">Leia o enunciado</text>
            <line x1="240" y1="46" x2="240" y2="68" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr3)" />
            {/* Etapa 2 */}
            <rect x="140" y="70" width="200" height="36" rx="18" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="240" y="93" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3730a3">Sublinhe palavras-chave</text>
            <line x1="240" y1="106" x2="240" y2="128" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr3)" />
            {/* Etapa 3 - Diamante */}
            <polygon points="240,130 320,160 240,190 160,160" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="240" y="157" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">Identifiquei</text>
            <text x="240" y="171" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">o recorte?</text>
            {/* Sim → direita */}
            <line x1="320" y1="160" x2="380" y2="160" stroke="#059669" strokeWidth="2" markerEnd="url(#arr3)" />
            <text x="348" y="153" fontSize="9" fill="#059669">Sim</text>
            {/* Não → baixo */}
            <line x1="240" y1="190" x2="240" y2="215" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr3)" />
            <text x="248" y="208" fontSize="9" fill="#dc2626">Não</text>
            {/* Releia */}
            <rect x="170" y="217" width="140" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
            <text x="240" y="237" textAnchor="middle" fontSize="10" fill="#dc2626">Releia e sublinho mais</text>
            <line x1="170" y1="232" x2="120" y2="232" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="120" y1="160" x2="120" y2="232" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="120" y1="160" x2="160" y2="160" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr3)" />
            {/* Próximos passos */}
            <rect x="382" y="130" width="90" height="60" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="427" y="153" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">Formule</text>
            <text x="427" y="168" textAnchor="middle" fontSize="10" fill="#065f46">a tese</text>
            <text x="427" y="183" textAnchor="middle" fontSize="10" fill="#065f46">específica</text>
          </svg>
          <figcaption>Fluxograma de interpretação: leia → sublinhe → identifique o recorte → formule a tese</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Palavras-Chave</span>
        <h2>6. Palavras-Chave do Tema: Como Identificá-las</h2>
        <p>
          As palavras-chave são os termos centrais que definem o escopo da redação. Geralmente
          são <strong>substantivos abstratos</strong> (invisibilidade, exclusão, desigualdade),
          <strong>grupos afetados</strong> (mulher, jovem, indígena, idoso) e
          <strong>contextos</strong> (mercado de trabalho, sistema de saúde, educação pública).
          Sublinhe todas e pergunte-se: "meu texto fala sobre <em>cada uma</em> dessas palavras?"
        </p>
        <p>
          Para o tema ENEM 2023 — "Desafios para o enfrentamento da invisibilidade do trabalho
          de cuidado realizado pela mulher no Brasil" — as palavras-chave são: <em>desafios</em>
          (o que impede), <em>invisibilidade</em> (falta de reconhecimento), <em>trabalho de
          cuidado</em> (atividade específica), <em>mulher</em> (grupo afetado), <em>Brasil</em>
          (contexto nacional). Um texto que fale sobre "desigualdade de gênero em geral" sem
          mencionar o trabalho de cuidado especificamente está tangenciando.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>7. Armadilhas Comuns: Fuga, Tangenciamento e Parcialidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de erro</th><th>Definição</th><th>Exemplo</th><th>Nota em C2</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fuga total</strong></td>
                <td>Aborda tema completamente diferente</td>
                <td>Tema: cyberbullying → Texto: bullying físico na escola</td>
                <td>0</td>
              </tr>
              <tr>
                <td><strong>Tangenciamento</strong></td>
                <td>Toca superficialmente no tema sem aprofundar</td>
                <td>Tema: saúde mental → Texto: "é importante cuidar da saúde" sem falar em saúde mental especificamente</td>
                <td>40–80</td>
              </tr>
              <tr>
                <td><strong>Parcialidade excessiva</strong></td>
                <td>Aborda apenas um aspecto, ignorando o núcleo</td>
                <td>Tema: invisibilidade do trabalho de cuidado → Texto: só fala em violência doméstica</td>
                <td>80–120</td>
              </tr>
              <tr>
                <td><strong>Dentro do recorte</strong></td>
                <td>Trata o tema em seu aspecto central</td>
                <td>Texto debate diretamente o trabalho não remunerado e sua invisibilidade</td>
                <td>160–200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Amplitude Temática</span>
        <h2>8. Diferença entre Tema Amplo e Recorte Específico</h2>
        <p>
          O ENEM nunca pede para você escrever sobre um tema amplo — sempre há um recorte
          específico que delimita o que deve ser discutido. Identificar esse recorte é
          fundamental para não dispersar o texto.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo comparativo: violência</h3>
          <p>
            <strong>Tema amplo:</strong> "Violência no Brasil" — envolve violência urbana,
            doméstica, simbólica, no trânsito, racial, de gênero, etc.<br /><br />
            <strong>Recorte ENEM 2015:</strong> "A persistência da violência contra a mulher
            na sociedade brasileira" — foco específico em violência de gênero, suas causas
            culturais e institucionais, e o papel do Estado na proteção.<br /><br />
            Quem escreve sobre "violência urbana" nesse tema está tangenciando. Quem escreve
            sobre "violência doméstica" está no recorte correto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planejamento</span>
        <h2>9. Como Fazer um Mini-Brainstorm em 5 Minutos</h2>
        <p>
          Antes de escrever, reserve <strong>5 minutos para planejamento</strong> na área de
          rascunho. Um brainstorm rápido e estruturado evita que você comece a escrever sem
          direção e precise apagar ou reformular no meio da redação.
        </p>
        <p>
          Siga esta sequência no rascunho:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Passo</th><th>O que fazer</th><th>Tempo</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Sublinhar palavras-chave da proposta</td><td>30 segundos</td></tr>
              <tr><td>2</td><td>Escrever a tese em 1 frase</td><td>30 segundos</td></tr>
              <tr><td>3</td><td>Anotar argumento 1 (causa/contexto)</td><td>45 segundos</td></tr>
              <tr><td>4</td><td>Anotar evidência para argumento 1</td><td>30 segundos</td></tr>
              <tr><td>5</td><td>Anotar argumento 2 (consequência/outro ângulo)</td><td>45 segundos</td></tr>
              <tr><td>6</td><td>Anotar evidência para argumento 2</td><td>30 segundos</td></tr>
              <tr><td>7</td><td>Esboçar a PI (agente + ação)</td><td>30 segundos</td></tr>
              <tr><td>8</td><td>Revisar se tudo está dentro do recorte</td><td>20 segundos</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Com esse planejamento, você sabe exatamente o que vai escrever em cada parágrafo
          antes de começar, eliminando o "branco criativo" e garantindo coerência estrutural.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Histórico ENEM</span>
        <h2>10. Temas ENEM 2015–2023 com Recorte Correto</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ano</th><th>Tema</th><th>Recorte correto</th><th>Erro comum</th></tr>
            </thead>
            <tbody>
              <tr><td>2015</td><td>A persistência da violência contra a mulher</td><td>Causas culturais/institucionais e combate à violência de gênero</td><td>Falar sobre violência urbana em geral</td></tr>
              <tr><td>2016</td><td>Caminhos para combater o racismo no Brasil</td><td>Racismo estrutural, histórico e formas concretas de combate</td><td>Falar sobre preconceito em geral sem focar em raça</td></tr>
              <tr><td>2017</td><td>Desafios para a formação educacional de surdos no Brasil</td><td>Barreiras de acesso e inclusão educacional de deficientes auditivos</td><td>Escrever sobre inclusão de pessoas com deficiência em geral</td></tr>
              <tr><td>2018</td><td>Manipulação do comportamento do usuário pelo controle de dados</td><td>Privacidade digital, Big Data, algoritmos de manipulação</td><td>Escrever sobre os perigos da internet de forma genérica</td></tr>
              <tr><td>2019</td><td>Democratização do acesso ao cinema no Brasil</td><td>Desigualdade no acesso a bens culturais, especialmente cinema</td><td>Escrever sobre cultura ou arte em geral</td></tr>
              <tr><td>2020</td><td>O estigma associado às doenças mentais na sociedade brasileira</td><td>Preconceito, invisibilidade e barreiras de acesso ao tratamento</td><td>Escrever sobre saúde mental sem focar no estigma/preconceito</td></tr>
              <tr><td>2021</td><td>Invisibilidade e registro civil</td><td>Cidadãos sem documentação e exclusão do sistema público</td><td>Escrever sobre exclusão social de forma ampla</td></tr>
              <tr><td>2022</td><td>Desafios para a valorização de comunidades e povos tradicionais</td><td>Reconhecimento cultural, territorial e de direitos de populações tradicionais</td><td>Confundir com tema de meio ambiente</td></tr>
              <tr><td>2023</td><td>Desafios para enfrentar a invisibilidade do trabalho de cuidado feminino</td><td>Trabalho doméstico não remunerado, desigualdade de gênero, políticas públicas</td><td>Escrever sobre violência doméstica ou feminismo em geral</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas Recorrentes</span>
        <h2>11. Padrões Temáticos do ENEM: Como se Preparar</h2>
        <p>
          O ENEM privilegia temas ligados a <strong>grupos vulneráveis</strong> (mulheres,
          negros, indígenas, LGBTQIA+, pessoas com deficiência, idosos, sem-teto),
          <strong>direitos e cidadania</strong> (saúde, educação, moradia, cultura, acesso à
          justiça), <strong>tecnologia e sociedade</strong> (privacidade, fake news, exclusão
          digital) e <strong>meio ambiente</strong> (desenvolvimento sustentável, povos da
          floresta, saneamento). Ter repertório atualizado nessas áreas aumenta muito as
          chances de obter nota alta em C2.
        </p>
        <div className="lesson-highlight">
          <h3>Fontes para repertório</h3>
          <p>
            <strong>Dados:</strong> IBGE, DataSUS, Inep, ONU, IPEA, Anatel<br />
            <strong>Legislação:</strong> Constituição Federal, ECA, Maria da Penha, Estatuto
            do Idoso, Lei Áurea, Lei de Cotas<br />
            <strong>Pensadores:</strong> Foucault (poder/saber), Bourdieu (capital cultural),
            Simone de Beauvoir (gênero), Fanon (colonialismo racial)<br />
            <strong>Literatura:</strong> Graciliano Ramos, Carolina de Jesus, Clarice Lispector,
            Machado de Assis (para exemplificar desigualdade social brasileira)
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔍</span>
            <h3>Leia com atenção</h3>
            <p>Sublinhe palavras-chave e identifique o recorte antes de começar a escrever</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Recorte específico</h3>
            <p>O ENEM sempre pede um aspecto específico — não escreva sobre o tema amplo</p>
          </div>
          <div className="math-card">
            <span>⏱️</span>
            <h3>5 min de planejamento</h3>
            <p>Brainstorm no rascunho: tese + 2 argumentos + evidências + PI</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Além dos motivadores</h3>
            <p>Use repertório próprio — dados, citações, história, literatura, filosofia</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Evite tangenciamento</h3>
            <p>Falar "perto" do tema sem abordar o núcleo = C2 até 80 pontos</p>
          </div>
          <div className="math-card">
            <span>📰</span>
            <h3>Temas recorrentes</h3>
            <p>Grupos vulneráveis, direitos, tecnologia, meio ambiente — prepare repertório</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. ENEM 2019 — foco correto do tema"
          statement={
            <p>
              O tema do ENEM 2019 foi <em>"Democratização do acesso ao cinema no Brasil"</em>.
              Qual é o recorte correto que deve orientar a redação?
            </p>
          }
          options={[
            { letter: "a", text: "Discutir a história do cinema brasileiro e os grandes cineastas nacionais." },
            { letter: "b", text: "Analisar as barreiras econômicas, geográficas e sociais que impedem parte da população de acessar o cinema como bem cultural.", correct: true },
            { letter: "c", text: "Defender a importância do cinema como forma de entretenimento e arte para toda a família." },
            { letter: "d", text: "Comparar o cinema brasileiro com o cinema hollywoodiano em termos de produção e distribuição." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A palavra-chave do tema é
              "democratização" — o acesso desigual ao cinema como bem cultural. O recorte
              exige discutir <em>por que</em> parte da população não acessa o cinema
              (renda, localização, infraestrutura, pirataria, preços) e <em>como</em>
              esse acesso pode ser ampliado. Falar sobre a história do cinema (a) é
              tangenciamento; defender sua importância (c) é genérico demais; comparar
              com Hollywood (d) ignora o recorte nacional e social.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Saúde mental de jovens — tangenciamento vs fuga"
          statement={
            <p>
              Para o tema <em>"Saúde mental de jovens no Brasil"</em>, qual das afirmações
              descreve corretamente a diferença entre tangenciamento e fuga ao tema?
            </p>
          }
          options={[
            { letter: "a", text: "Tangenciamento é quando o candidato escreve sobre saúde mental de idosos; fuga é quando escreve sobre qualquer outro tema de saúde." },
            { letter: "b", text: "Tangenciamento é quando o texto menciona saúde mental apenas superficialmente (ex.: foca em bullying sem relacionar à saúde mental); fuga é quando o texto aborda tema completamente diferente, como violência ou desemprego, sem mencionar saúde mental.", correct: true },
            { letter: "c", text: "Tangenciamento e fuga são sinônimos — ambos resultam em nota zero na C2." },
            { letter: "d", text: "Fuga ocorre apenas quando o candidato escreve em outro gênero textual, como carta ou poema." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. O tangenciamento é um desvio parcial:
              o texto está relacionado ao universo do tema, mas não aborda seu núcleo central.
              Por exemplo, escrever extensamente sobre "pressão escolar e bullying" sem
              relacionar explicitamente ao impacto na saúde mental dos jovens é tangenciar.
              A fuga é total: o texto aborda assunto completamente diferente — como violência
              urbana, desigualdade social ou desemprego — sem qualquer conexão com saúde
              mental. O tangenciamento resulta em C2 = 40–80; a fuga total resulta em C2 = 0
              e zera toda a redação.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Cyberbullying vs bullying — identificar o erro"
          statement={
            <p>
              Um candidato escreveu sobre <em>"bullying em geral — físico, verbal e psicológico
              nas escolas"</em> para um tema que pedia especificamente sobre
              <em>"cyberbullying e violência digital entre jovens"</em>. Qual é o erro
              cometido e qual seria o impacto nas competências?
            </p>
          }
          options={[
            { letter: "a", text: "Fuga total ao tema — nota 0 em C2, pois bullying e cyberbullying são completamente diferentes." },
            { letter: "b", text: "Tangenciamento — o candidato trata de assunto relacionado (bullying) mas ignora o recorte específico (digital/virtual); C2 = 40–80.", correct: true },
            { letter: "c", text: "Não há erro — bullying e cyberbullying são o mesmo tema, apenas em contextos diferentes." },
            { letter: "d", text: "Parcialidade excessiva em C3 — o argumento é fraco, mas o tema não foi desrespeitado." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Bullying e cyberbullying são
              fenômenos relacionados, mas o recorte pedido é o contexto digital — plataformas,
              anonimato, velocidade de propagação, dificuldade de denúncia, permanência das
              ofensas online. Um texto sobre bullying físico escolar não aborda nenhuma dessas
              especificidades. Isso configura tangenciamento (não fuga total, pois há relação
              temática), resultando em C2 = 40 a 80 pontos. Para evitar o erro, o candidato
              deveria ter identificado a palavra "cyber" como recorte específico obrigatório.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM 2022 — tese correta vs incorreta"
          statement={
            <p>
              Para o tema <em>"O estigma associado às doenças mentais na sociedade brasileira"</em>
              (ENEM 2022), qual das alternativas apresenta uma TESE CORRETA e adequada ao
              recorte temático?
            </p>
          }
          options={[
            { letter: "a", text: "Incorreta: 'A saúde mental é importante e o Brasil precisa investir mais em hospitais.' — Foca em infraestrutura, ignora o estigma." },
            { letter: "b", text: "Correta: 'O estigma em torno das doenças mentais, enraizado em preconceitos culturais e na medicalização excessiva, perpetua o isolamento social dos pacientes e dificulta a busca por tratamento.'", correct: true },
            { letter: "c", text: "Correta: 'A depressão é a doença do século XXI e afeta milhões de brasileiros que precisam de atenção médica especializada.' — Específica sobre depressão e tratamento." },
            { letter: "d", text: "Incorreta: 'A violência contra pessoas com doenças mentais deve ser combatida por leis mais rígidas.' — Tangência o estigma mas não o aborda diretamente." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A tese em (b) aborda diretamente o
              núcleo do tema: <em>estigma</em> (palavra-chave), sua <em>origem cultural</em>
              (argumento de causa) e seu <em>efeito</em> (isolamento e evitação do tratamento).
              A alternativa (a) foge para infraestrutura hospitalar; (c) foca em depressão
              especificamente, ignorando o conceito de estigma; (d) trata de violência, que
              é consequência, não o estigma em si. A palavra "estigma" deve aparecer como
              conceito central da tese.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Populações indígenas — brainstorm de recortes"
          statement={
            <p>
              Para um tema sobre <em>"populações indígenas no Brasil"</em>, um candidato
              precisa escolher o recorte mais específico e adequado para uma dissertação
              argumentativa sólida. Qual das opções apresenta o recorte mais forte?
            </p>
          }
          options={[
            { letter: "a", text: "Escrever sobre a história dos indígenas desde o período colonial até hoje." },
            { letter: "b", text: "Discutir a importância das culturas indígenas para a biodiversidade e o patrimônio nacional." },
            { letter: "c", text: "Analisar as ameaças ao território e à identidade cultural dos povos indígenas no Brasil contemporâneo, considerando os conflitos fundiários e a demarcação de terras.", correct: true },
            { letter: "d", text: "Comparar os indígenas brasileiros com os de outros países da América Latina em termos de direitos legais." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. Esse recorte é mais forte porque
              é <em>específico</em> (conflitos fundiários e demarcação de terras),
              <em>contemporâneo</em> (relevante para o contexto atual), <em>argumentável</em>
              (permite defender posição sobre políticas públicas e direitos), e abre espaço
              para a proposta de intervenção (regularização fundiária, ação do STF, FUNAI etc.).
              O recorte histórico (a) tende a virar texto narrativo; o recorte cultural (b)
              é genérico; a comparação (d) desvia do foco nacional exigido pelo ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
