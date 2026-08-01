"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 33</span>
          <h1>Questões comentadas das últimas provas de Espanhol do ENEM</h1>
          <p>
            Analisar questões reais do ENEM é a estratégia mais eficiente para se preparar para a prova.
            As questões de Espanhol do ENEM seguem um padrão bem definido: sempre há um texto autêntico em
            espanhol (jornalístico, literário, publicitário, poético ou de charge), seguido de um enunciado
            em português e quatro alternativas. A banca valoriza a competência de leitura — jamais a tradução
            palavra por palavra. Neste capítulo, você vai conhecer a fundo os tipos de questão mais frequentes
            das edições 2018-2023, as estratégias específicas para cada tipo e os erros mais comuns que custam
            pontos preciosos na prova.
          </p>
        </div>
      </section>

      {/* Seção 1: Tipos de Textos Mais Cobrados */}
      <section className="lesson-section">
        <span className="section-kicker">Análise da Prova</span>
        <h2>Tipos de Textos Mais Cobrados no ENEM (2018-2023)</h2>
        <p>
          O ENEM seleciona textos autênticos em espanhol de fontes hispânicas reais. Conhecer os gêneros
          mais utilizados permite ao candidato antecipar o tipo de leitura exigida e aplicar a estratégia
          correta de imediato.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero textual</th>
                <th>Frequência no ENEM</th>
                <th>O que é exigido do candidato</th>
                <th>Dica de leitura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Texto jornalístico / reportagem</td>
                <td>Alta (30% das questões)</td>
                <td>Identificar tema central, inferir dados, compreender posição do veículo</td>
                <td>Leia o título e o primeiro parágrafo com atenção máxima</td>
              </tr>
              <tr>
                <td>Texto de opinião / crônica</td>
                <td>Alta (25%)</td>
                <td>Identificar tese, reconhecer argumentos, inferir intenção do autor</td>
                <td>Procure a tese no 1.º ou no último parágrafo</td>
              </tr>
              <tr>
                <td>Texto literário (conto, poema, excerto de romance)</td>
                <td>Média (20%)</td>
                <td>Interpretar linguagem figurada, identificar o narrador, compreender o contexto</td>
                <td>Atenção às metáforas e ao tom do texto (irônico? melancólico? crítico?)</td>
              </tr>
              <tr>
                <td>Publicidade / anúncio / chamada</td>
                <td>Média (15%)</td>
                <td>Identificar o público-alvo, a estratégia persuasiva, o produto ou causa</td>
                <td>Procure verbos no imperativo e o "call to action"</td>
              </tr>
              <tr>
                <td>Charge / cartum / infográfico</td>
                <td>Baixa-média (10%)</td>
                <td>Relacionar imagem e texto verbal, identificar crítica ou ironia</td>
                <td>A legenda ou o texto na charge é tão importante quanto a imagem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2: Tipos de Questão Mais Frequentes */}
      <section className="lesson-section">
        <span className="section-kicker">Taxonomia das Questões</span>
        <h2>Tipos de Questão Mais Frequentes nas Provas</h2>
        <p>
          Cada tipo de questão exige uma estratégia de resposta diferente. Reconhecer o tipo antes de ler
          as alternativas é um ganho de tempo e de precisão significativo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Inferência</h3>
            <p>
              "O texto permite concluir que...", "De acordo com o texto, pode-se inferir...".
              A resposta nunca está explícita — é uma conclusão lógica a partir do que o texto diz.
            </p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Vocabulário em contexto</h3>
            <p>
              "No texto, o termo X significa...". Sempre use o contexto para interpretar — nunca traduza
              isoladamente. A alternativa correta parafraseia o sentido no contexto, não a tradução literal.
            </p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Intenção comunicativa</h3>
            <p>
              "O objetivo do texto é...", "A finalidade do autor ao escrever o texto é...".
              Identifique o gênero e o propósito: informar, persuadir, criticar, emocionar, entreter.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Relação entre partes</h3>
            <p>
              "No trecho X, o conectivo Y estabelece uma relação de...". Foco nos conectores: <em>sin embargo,
              aunque, por lo tanto, debido a, pese a que</em> etc.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de questão</th>
                <th>Pista no enunciado</th>
                <th>Estratégia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tema central / ideia principal</td>
                <td>"O texto trata de...", "O assunto principal é..."</td>
                <td>Leia título + primeiro e último parágrafo</td>
              </tr>
              <tr>
                <td>Posição do autor</td>
                <td>"O autor defende...", "Na perspectiva do texto..."</td>
                <td>Procure marcadores de opinião: <em>a mi juicio, creo que, sin duda</em></td>
              </tr>
              <tr>
                <td>Vocabulário em contexto</td>
                <td>"A expressão X, no texto, significa..."</td>
                <td>Substitua mentalmente pelo significado de cada alternativa no contexto</td>
              </tr>
              <tr>
                <td>Função do conector</td>
                <td>"O trecho 'X' expressa uma relação de..."</td>
                <td>Saiba de cor as relações: causa (<em>porque</em>), contraste (<em>pero, sin embargo</em>), conclusão (<em>por lo tanto</em>)</td>
              </tr>
              <tr>
                <td>Identificação do gênero</td>
                <td>"O texto é um exemplo de..."</td>
                <td>Analise a estrutura, o tom e o suporte (jornal, cartaz, blog)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 3: SVG — Padrão das Questões */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura da Prova</span>
        <h2>Anatomia de uma Questão de Espanhol do ENEM</h2>
        <p>
          Toda questão de espanhol do ENEM segue a mesma estrutura. Reconhecê-la permite ler com mais
          eficiência, focando a atenção nas partes certas do texto e do enunciado.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 280" width="700" height="280" aria-label="Anatomia de uma questão de espanhol do ENEM">
            <rect x="0" y="0" width="700" height="280" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap33arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>
            <text x="350" y="28" textAnchor="middle" fill="#312e81" fontSize="14" fontWeight="bold">
              Anatomia de uma questão de Espanhol do ENEM
            </text>
            {/* Texto em espanhol */}
            <rect x="20" y="45" width="300" height="80" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="170" y="68" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">TEXTO EM ESPANHOL</text>
            <text x="170" y="85" textAnchor="middle" fill="#4b5563" fontSize="10">(3 a 10 linhas)</text>
            <text x="170" y="100" textAnchor="middle" fill="#4b5563" fontSize="10">Gênero autêntico: reportagem,</text>
            <text x="170" y="115" textAnchor="middle" fill="#4b5563" fontSize="10">poema, publicidade, crônica...</text>

            {/* Fonte */}
            <rect x="20" y="135" width="300" height="30" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <text x="170" y="154" textAnchor="middle" fill="#64748b" fontSize="10">Fonte: El País, García Márquez, Neruda...</text>

            {/* Enunciado */}
            <rect x="380" y="45" width="300" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="530" y="68" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">ENUNCIADO EM PORTUGUÊS</text>
            <text x="530" y="85" textAnchor="middle" fill="#78350f" fontSize="10">Pergunta sobre o texto (inferência, vocabulário...)</text>

            {/* Alternativas */}
            <rect x="380" y="108" width="300" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
            <text x="530" y="128" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">ALTERNATIVAS EM PORTUGUÊS</text>
            <text x="530" y="148" textAnchor="middle" fill="#374151" fontSize="10">a) Distrator (errado, mas plausível)</text>
            <text x="530" y="163" textAnchor="middle" fill="#374151" fontSize="10">b) Gabarito (correto) ✓</text>
            <text x="530" y="178" textAnchor="middle" fill="#374151" fontSize="10">c) Distrator (exagerado ou parcial)</text>
            <text x="530" y="193" textAnchor="middle" fill="#374151" fontSize="10">d) Distrator (contradiz o texto)</text>

            {/* Setas */}
            <line x1="320" y1="85" x2="378" y2="68" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#cap33arr1)" />
            <line x1="320" y1="85" x2="378" y2="155" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#cap33arr1)" />

            {/* Dica */}
            <rect x="20" y="215" width="660" height="50" rx="8" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1" />
            <text x="350" y="237" textAnchor="middle" fill="#9f1239" fontSize="11" fontWeight="bold">
              ATENÇÃO: Os distratores são construídos para atrair quem não leu bem o texto!
            </text>
            <text x="350" y="255" textAnchor="middle" fill="#374151" fontSize="10">
              Alternativas erradas geralmente distorcem o texto, exageram, mudam o sujeito ou afirmam o contrário.
            </text>
          </svg>
          <figcaption>Anatomia de uma questão de espanhol do ENEM — entender a estrutura é o primeiro passo para responder com eficiência.</figcaption>
        </figure>
      </section>

      {/* Seção 4: Espanhol vs. Inglês no ENEM */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>Espanhol vs. Inglês no ENEM — Nível de Dificuldade</h2>
        <p>
          A escolha entre espanhol e inglês na prova de Língua Estrangeira do ENEM é uma decisão estratégica.
          Entender as diferenças ajuda você a confirmar que fez a escolha certa — ou a se preparar melhor
          para a língua escolhida.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Espanhol</th>
                <th>Inglês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proximidade com o português</td>
                <td>Alta — muitos cognatos, gramática semelhante</td>
                <td>Baixa — estrutura e vocabulário bem diferentes</td>
              </tr>
              <tr>
                <td>Nível de dificuldade geral</td>
                <td>Considerado mais acessível para brasileiros</td>
                <td>Considerado mais difícil para falantes do português</td>
              </tr>
              <tr>
                <td>Textos literários</td>
                <td>García Márquez, Neruda, Borges — densos mas compreensíveis</td>
                <td>Podem ser mais abstratos ou coloquiais</td>
              </tr>
              <tr>
                <td>Falsos cognatos</td>
                <td>Existem, mas são minoria — maioria dos cognatos é verdadeira</td>
                <td>Muitos falsos cognatos e expressões idiomáticas</td>
              </tr>
              <tr>
                <td>Estratégia recomendada</td>
                <td>Leitura global + foco em conectores e vocabulário-chave</td>
                <td>Análise cuidadosa de cada palavra e estrutura</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção aos falsos cognatos no espanhol:</strong>
          <ul>
            <li><em>embarazada</em> = grávida (NOT "embaraçada")</li>
            <li><em>borracha</em> = bêbada (NOT "borracha/látex")</li>
            <li><em>polvo</em> = pó / poeira (NOT "polvo"/cephalopod)</li>
            <li><em>exquisito</em> = delicioso, requintado (NOT "esquisito")</li>
            <li><em>largo</em> = longo, comprido (NOT "largo"/espaçoso)</li>
            <li><em>bordar</em> = bordar (costuras) — aqui É cognato verdadeiro</li>
            <li><em>pretender</em> = ter intenção de, querer (NOT "fingir")</li>
            <li><em>apología</em> = defesa, elogio (NOT "apologia" no sentido de pedido de desculpa)</li>
          </ul>
        </div>
      </section>

      {/* Seção 5: Erros Mais Comuns */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>Erros Mais Comuns dos Candidatos e Como Evitá-los</h2>
        <p>
          Conhecer os erros mais frequentes é tão valioso quanto conhecer o conteúdo. Os erros que mais
          custam pontos nas questões de espanhol do ENEM são previsíveis e evitáveis.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Traduzir palavra por palavra</h3>
            <p>
              O espanhol é próximo do português, mas não é idêntico. Traduzir literalmente pode levar a
              erros graves — especialmente com falsos cognatos. Leia o texto como um todo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Escolher o distrator "quase certo"</h3>
            <p>
              Os distratores são feitos para atrair quem leu parcialmente o texto. Eles distorcem,
              exageram ou mudam o sujeito. Compare TODAS as alternativas antes de marcar.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Ignorar o contexto cultural</h3>
            <p>
              Textos sobre tango, movimentos indígenas, integração regional ou figuras literárias exigem
              conhecimento de contexto. O cap. 32 deste curso foi feito para isso.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Confundir a posição do autor com o conteúdo</h3>
            <p>
              Um texto que descreve a discriminação não defende a discriminação. Sempre pergunte:
              o autor CONCORDA ou CRITICA o que está sendo descrito?
            </p>
          </div>
        </div>
      </section>

      {/* Seção 6: Revisão de Pontos Gramaticais Cobrados */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática</span>
        <h2>Pontos Gramaticais Mais Cobrados nas Últimas Provas</h2>
        <p>
          Embora o ENEM não cobre gramática isolada, os pontos gramaticais aparecem em questões de
          compreensão de texto. Saber reconhecê-los acelera muito a leitura.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ponto gramatical</th>
                <th>Como aparece no ENEM</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conectores / nexos</td>
                <td>Questões sobre relação lógica entre orações</td>
                <td><em>sin embargo</em> (contraste), <em>por lo tanto</em> (conclusão), <em>aunque</em> (concessão)</td>
              </tr>
              <tr>
                <td>Subjuntivo</td>
                <td>Aparece em textos formais e literários</td>
                <td><em>Es importante que el gobierno actúe</em> (desejo); <em>aunque sea difícil</em> (concessão)</td>
              </tr>
              <tr>
                <td>Verbos modais</td>
                <td>Indicam obrigação, possibilidade, desejo</td>
                <td><em>deben, pueden, deberían, es necesario que, es posible que</em></td>
              </tr>
              <tr>
                <td>Tempos verbais do passado</td>
                <td>Distinção entre Pretérito Indefinido e Imperfecto</td>
                <td><em>fue / era; llegó / llegaba; vivió / vivía</em></td>
              </tr>
              <tr>
                <td>Voz passiva</td>
                <td>Textos formais e jornalísticos</td>
                <td><em>Fue fundado en 1948; son consumidos por millones</em></td>
              </tr>
              <tr>
                <td>Pronomes relativos</td>
                <td>Textos complexos com orações subordinadas</td>
                <td><em>que, quien, cuyo, donde, el cual</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 7: SVG — Estratégia de Tempo */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>Como Estudar Espanhol nos Últimos Dias antes do ENEM</h2>
        <p>
          Nos últimos dias antes da prova, o foco deve ser em revisão estratégica, não em aprender coisas
          novas. O tempo disponível deve ser alocado com inteligência para maximizar os ganhos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Cronograma de estudo para os últimos dias antes do ENEM">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f0f9ff" />
            <text x="350" y="28" textAnchor="middle" fill="#0369a1" fontSize="14" fontWeight="bold">
              Plano de Revisão — Últimos 7 dias antes do ENEM
            </text>
            {/* Dias */}
            {[
              { x: 20, day: "D-7", color: "#bfdbfe", border: "#2563eb", text1: "Revisão de", text2: "vocabulário", text3: "falsos cognatos" },
              { x: 115, day: "D-6", color: "#bbf7d0", border: "#16a34a", text1: "Conectores e", text2: "gramática em", text3: "contexto" },
              { x: 210, day: "D-5", color: "#fef9c3", border: "#ca8a04", text1: "Simulado", text2: "5 questões", text3: "comentadas" },
              { x: 305, day: "D-4", color: "#e9d5ff", border: "#7c3aed", text1: "Gêneros", text2: "textuais e", text3: "tipos de questão" },
              { x: 400, day: "D-3", color: "#fde68a", border: "#d97706", text1: "Cultura e", text2: "contexto", text3: "Latino-americano" },
              { x: 495, day: "D-2", color: "#fecaca", border: "#dc2626", text1: "Revisão leve", text2: "questões", text3: "anteriores" },
              { x: 590, day: "D-1", color: "#d1fae5", border: "#059669", text1: "Descanso", text2: "Revisão mín.", text3: "Organizar docs." },
            ].map((item) => (
              <g key={item.day}>
                <rect x={item.x} y="45" width="90" height="140" rx="8" fill={item.color} stroke={item.border} strokeWidth="2" />
                <text x={item.x + 45} y="65" textAnchor="middle" fill="#111827" fontSize="11" fontWeight="bold">{item.day}</text>
                <text x={item.x + 45} y="90" textAnchor="middle" fill="#374151" fontSize="10">{item.text1}</text>
                <text x={item.x + 45} y="107" textAnchor="middle" fill="#374151" fontSize="10">{item.text2}</text>
                <text x={item.x + 45} y="124" textAnchor="middle" fill="#374151" fontSize="10">{item.text3}</text>
              </g>
            ))}
            <rect x="20" y="200" width="660" height="22" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <text x="350" y="216" textAnchor="middle" fill="#1e40af" fontSize="10">
              Prioridade: qualidade (questões resolvidas e analisadas) &gt; quantidade de horas estudadas
            </text>
          </svg>
          <figcaption>Plano de revisão para os últimos 7 dias antes do ENEM — distribuição estratégica dos conteúdos de espanhol.</figcaption>
        </figure>
        <div className="math-block">
          <strong>Dica ENEM — Gerenciamento de tempo na prova:</strong> As questões de Língua Estrangeira
          ficam no Caderno de Ciências Humanas (tarde do 2.º dia). Reserve 12-15 minutos para as 5 questões
          de espanhol. Se uma questão estiver muito difícil, marque sua melhor opção, continue a prova e
          volte se sobrar tempo. Nunca deixe em branco — não há desconto por erro no ENEM.
        </div>
      </section>

      {/* Seção 8: Questões Estilo ENEM 2018-2023 */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Estilo ENEM 2018-2023</h2>
        <p>
          As cinco questões a seguir simulam com precisão o padrão das provas de Espanhol do ENEM das
          últimas edições — textos autênticos em espanhol, enunciados em português, quatro alternativas
          e resolução comentada.
        </p>

        <Exercise
          level="Básico"
          title="1. Texto jornalístico — vocabulário em contexto (estilo ENEM 2019)"
          statement={
            <p>
              Leia o texto: <em>"La desigualdad en América Latina sigue siendo una de las más pronunciadas
              del mundo. Según la CEPAL, el 10% más rico de la región concentra el 54% de la riqueza total,
              mientras que el 40% más pobre apenas accede al 13%. Esta brecha no es un fenómeno nuevo:
              sus raíces se hunden en siglos de colonialismo, esclavitud y exclusión sistémica."</em>
              <br /><br />
              No texto, a expressão <strong>"sus raíces se hunden"</strong> indica que a desigualdade descrita:
            </p>
          }
          options={[
            { letter: "a", text: "É um problema recente, surgido apenas nas últimas décadas do século XX." },
            { letter: "b", text: "Tem causas profundas que remontam ao período colonial e à escravidão.", correct: true },
            { letter: "c", text: "Está sendo eliminada gradualmente graças às políticas da CEPAL." },
            { letter: "d", text: "É exclusiva da América Latina, não existindo em outras regiões do mundo." },
          ]}
          resolution={
            <p>
              <em>Raíces</em> = raízes; <em>se hunden</em> = afundam-se, estão enterradas. A metáfora
              indica que a desigualdade tem raízes profundas — e o próprio texto explica onde: no colonialismo,
              na escravidão e na exclusão sistêmica. O texto também diz explicitamente "este fenómeno no es
              nuevo" (não é novo). A alternativa (b) captura precisamente essa ideia. Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Texto literário — posição do narrador (estilo ENEM 2020)"
          statement={
            <p>
              Leia o trecho: <em>"Muchos años después, frente al pelotón de fusilamiento, el coronel
              Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer
              el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a
              la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas,
              blancas y enormes como huevos prehistóricos."</em>
              <br /><br />
              O narrador desse texto apresenta os eventos:
            </p>
          }
          options={[
            { letter: "a", text: "Em ordem cronológica linear, do passado distante até o presente da narrativa." },
            { letter: "b", text: "Apenas no presente, sem qualquer referência ao passado ou ao futuro da história." },
            { letter: "c", text: "A partir de um ponto no futuro, recordando eventos do passado, criando uma analepse.", correct: true },
            { letter: "d", text: "Em primeira pessoa, relatando sua própria experiência de infância em Macondo." },
          ]}
          resolution={
            <p>
              O texto começa "Muchos años después" — no futuro (pelotão de fuzilamento) — e a partir daí
              o personagem recorda o passado (a tarde em que conheceu o gelo). Isso é uma analepse
              (flashback): a narrativa parte de um ponto futuro para recuperar o passado. O narrador é em
              terceira pessoa (ele, o coronel). Este é o célebre incipit de <em>Cien años de soledad</em>,
              de García Márquez. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Texto de opinião — relação entre argumentos (estilo ENEM 2021)"
          statement={
            <p>
              Leia: <em>"Aunque el acceso a la información nunca ha sido tan fácil, vivimos paradójicamente
              en una era de desinformación masiva. Las redes sociales amplifican bulos con más velocidad
              que la verdad porque el contenido emocional genera más interacciones. Por lo tanto, la
              solución no puede ser solo tecnológica: requiere una ciudadanía crítica, capaz de verificar
              fuentes antes de compartir."</em>
              <br /><br />
              No texto, a expressão <strong>"por lo tanto"</strong> introduz:
            </p>
          }
          options={[
            { letter: "a", text: "Uma ressalva que contradiz o argumento apresentado anteriormente." },
            { letter: "b", text: "Uma causa que explica por que a desinformação se espalha rapidamente." },
            { letter: "c", text: "Uma conclusão que decorre do problema descrito nos períodos anteriores.", correct: true },
            { letter: "d", text: "Um exemplo concreto de como as redes sociais amplificam boatos falsos." },
          ]}
          resolution={
            <p>
              <em>Por lo tanto</em> é um conector conclusivo — equivale a "portanto", "logo", "por isso".
              Introduz sempre uma conclusão que deriva logicamente do que foi dito antes. O texto descreve
              o problema (desinformação + amplificação emocional nas redes) e então conclui com a solução:
              cidadania crítica. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto publicitário — estratégia persuasiva (estilo ENEM 2022)"
          statement={
            <p>
              Leia o anúncio: <em>"¿Sabías que más de 8 millones de toneladas de plástico llegan al
              océano cada año? Tú puedes ser parte de la solución. Compra nuestras bolsas reutilizables
              de algodón orgánico y ayuda a reducir la contaminación marina. Cada compra planta un árbol.
              ¡Únete al cambio!"</em>
              <br /><br />
              A estratégia persuasiva predominante nesse anúncio é:
            </p>
          }
          options={[
            { letter: "a", text: "Argumento de autoridade, citando especialistas em oceanografia para embasar as afirmações." },
            { letter: "b", text: "Ironia, usando o humor para criticar o consumo excessivo de plástico pelos consumidores." },
            { letter: "c", text: "Apelo à responsabilidade individual, associando a compra do produto a um impacto ambiental positivo.", correct: true },
            { letter: "d", text: "Argumentação lógica, apresentando dados científicos que comprovam a eficácia das sacolas reutilizáveis." },
          ]}
          resolution={
            <p>
              O anúncio começa com um dado alarmante para criar consciência, depois apela diretamente ao
              leitor (<em>"Tú puedes ser parte de la solución"</em>) e associa a compra a um impacto positivo
              (plantar árvores, reduzir poluição). Isso é apelo à responsabilidade individual — técnica
              clássica do marketing sustentável. Não há autoridade científica citada, nem ironia, nem
              argumentação estritamente lógica. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Texto poético — linguagem figurada (estilo ENEM 2023)"
          statement={
            <p>
              Leia o poema de Pablo Neruda: <em>"Puedo escribir los versos más tristes esta noche. / Yo
              la quise, y ella también me quería. / Cómo no haber amado sus grandes ojos fijos. / La quise,
              y a veces ella también me quería."</em>
              <br /><br />
              No poema, a variação entre <strong>"ella también me quería"</strong> e <strong>"a veces ella
              también me quería"</strong> sugere:
            </p>
          }
          options={[
            { letter: "a", text: "Que o poema é narrado por duas pessoas diferentes com experiências amorosas distintas." },
            { letter: "b", text: "Que a amada sempre correspondeu ao amor do poeta de forma constante e dedicada." },
            { letter: "c", text: "Uma ambiguidade sobre a reciprocidade do amor — ora certeza, ora dúvida sobre o sentimento dela.", correct: true },
            { letter: "d", text: "Que o poeta não tem certeza se amou a mulher, variando entre amor e indiferença." },
          ]}
          resolution={
            <p>
              A diferença entre as duas frases é sutil mas significativa: na primeira, o poeta afirma com
              segurança que ela o amava (<em>"ella también me quería"</em>); na segunda, introduz
              <em>"a veces"</em> (às vezes), criando incerteza. Essa oscilação — certeza vs. dúvida — é
              um recurso poético que traduz a ambiguidade das memórias amorosas: o eu lírico não tem certeza
              se o amor era de fato correspondido plenamente. É um poema de <em>Veinte poemas de amor</em>,
              de Neruda. Resposta: (c).
            </p>
          }
        />
      </section>
    </article>
  );
}
