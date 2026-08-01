"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 9</span>

          <h1>Coesão Textual</h1>

          <p>
            Entenda como os mecanismos de coesão constroem a unidade do texto,
            conectando frases, parágrafos e ideias de forma lógica e fluente —
            habilidade central nas provas de redação e interpretação do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>

        <h2>1. O que é Coesão Textual?</h2>

        <p>
          A <strong>coesão textual</strong> é o conjunto de recursos linguísticos que
          garantem a ligação e a continuidade entre as partes de um texto. Um texto
          coeso é aquele em que palavras, frases e parágrafos se articulam com
          clareza, sem rupturas nem ambiguidades desnecessárias.
        </p>

        <p>
          É fundamental distinguir coesão de <em>coerência</em>: a coerência diz
          respeito à unidade de sentido (lógica das ideias), enquanto a coesão
          refere-se aos mecanismos formais — pronomes, conectivos, sinônimos,
          elipses — que cosuram o tecido textual. Um texto pode ser coerente e
          ter falhas de coesão, e vice-versa; o ideal é que ambos os princípios
          funcionem juntos.
        </p>

        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            A prova de redação avalia explicitamente a coesão na competência IV
            ("Conhecimento dos mecanismos linguísticos necessários para a
            construção da argumentação"). Conhecer cada mecanismo vale pontos
            concretos.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Coesão Referencial</h3>
            <p>
              Retoma ou antecipa termos já mencionados ou a mencionar no texto.
            </p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Coesão Sequencial</h3>
            <p>
              Organiza a progressão das ideias por meio de conectivos e articuladores.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coesão Referencial</span>

        <h2>2. Anáfora e Catáfora</h2>

        <p>
          A coesão referencial é construída pela relação que um elemento textual
          estabelece com outro. Essa relação pode ser retrospectiva ou prospectiva.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬅️</span>
            <h3>Anáfora</h3>
            <p>
              Retoma um elemento já apresentado no texto. O pronome ou sinônimo
              aponta para algo que veio antes. Ex.: "Pedro chegou tarde.
              <strong> Ele</strong> estava preso no trânsito."
            </p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Catáfora</h3>
            <p>
              Antecipa algo que será apresentado logo depois. Ex.: "Digo
              <strong> isto</strong>: o esforço é a única chave do sucesso."
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos comparados</h3>
          <p>
            <strong>Anáfora:</strong> "A pesquisadora concluiu o experimento.
            <em> Ela</em> publicou os resultados na semana seguinte."
            — <em>Ela</em> retoma <em>a pesquisadora</em>.
          </p>
          <p>
            <strong>Catáfora:</strong> "<em>Este</em> é o maior problema do
            Brasil: a desigualdade social." — <em>Este</em> antecipa
            <em> a desigualdade social</em>.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 160"
            width="520"
            height="160"
            aria-label="Diagrama comparando anáfora e catáfora"
          >
            <rect x="0" y="0" width="520" height="160" rx="12" fill="#f0f4ff" />
            <text x="130" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3730a3">ANÁFORA</text>
            <rect x="30" y="45" width="100" height="34" rx="8" fill="#6366f1" />
            <text x="80" y="67" textAnchor="middle" fontSize="12" fill="white">Antecedente</text>
            <rect x="160" y="45" width="100" height="34" rx="8" fill="#a5b4fc" />
            <text x="210" y="67" textAnchor="middle" fontSize="12" fill="#1e1b4b">Pronome/sinônimo</text>
            <line x1="130" y1="62" x2="160" y2="62" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow1)" />
            <defs>
              <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 z" fill="#0891b2" />
              </marker>
            </defs>

            <text x="390" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0e7490">CATÁFORA</text>
            <rect x="290" y="45" width="100" height="34" rx="8" fill="#67e8f9" />
            <text x="340" y="67" textAnchor="middle" fontSize="12" fill="#164e63">Pronome/sinônimo</text>
            <rect x="420" y="45" width="90" height="34" rx="8" fill="#0891b2" />
            <text x="465" y="67" textAnchor="middle" fontSize="12" fill="white">Referente</text>
            <line x1="390" y1="62" x2="420" y2="62" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arrow2)" />

            <text x="260" y="130" textAnchor="middle" fontSize="11" fill="#6b7280">← retoma o que veio antes | antecipa o que vem depois →</text>
          </svg>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Substituição</span>

        <h2>3. Substituição Pronominal</h2>

        <p>
          A <strong>substituição pronominal</strong> é o mecanismo mais frequente de
          coesão referencial. Pronomes de diversas classes assumem o lugar de
          substantivos, sintagmas ou orações inteiras, evitando a repetição
          desnecessária e garantindo a fluidez do texto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de pronome</th>
                <th>Função coesiva</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pessoal</strong> (ele, ela, eles…)</td>
                <td>Retoma o sujeito ou objeto anteriormente citado</td>
                <td>"A ministra discursou. <em>Ela</em> foi aplaudida."</td>
              </tr>
              <tr>
                <td><strong>Demonstrativo</strong> (este, esse, aquele…)</td>
                <td>Localiza o referente no espaço textual (anáfora ou catáfora)</td>
                <td>"Comprei um livro e um caderno. <em>Este</em> ficou em casa."</td>
              </tr>
              <tr>
                <td><strong>Relativo</strong> (que, o qual, cujo…)</td>
                <td>Retoma o antecedente e subordina uma oração</td>
                <td>"O projeto <em>que</em> apresentamos foi aprovado."</td>
              </tr>
              <tr>
                <td><strong>Indefinido</strong> (alguém, ninguém…)</td>
                <td>Retoma referentes de forma vaga ou genérica</td>
                <td>"<em>Ninguém</em> contestou a decisão."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Armadilha clássica do ENEM</h3>
          <p>
            Ambiguidade pronominal ocorre quando o pronome pode retomar mais de um
            referente. Ex.: "O diretor chamou o aluno porque <em>ele</em> estava
            atrasado." — Quem estava atrasado? O uso ambíguo do pronome rompe a
            coesão e prejudica a clareza do texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Substituição Lexical</span>

        <h2>4. Sinônimos, Hiperônimos e Nominalização</h2>

        <p>
          Além dos pronomes, o texto pode recorrer a <strong>substituições
          lexicais</strong> para retomar referentes sem repeti-los. Esse recurso
          enriquece o vocabulário e mantém a coesão ao mesmo tempo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Sinônimos</h3>
            <p>
              Palavras de sentido equivalente no contexto. "O automóvel
              derrapou. O <em>veículo</em> colidiu com o muro."
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Hiperônimos</h3>
            <p>
              Termo de sentido mais amplo que abrange o referente anterior.
              "Encontrei um beija-flor ferido. O <em>pássaro</em> precisava de
              cuidados."
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Nominalização</h3>
            <p>
              Transformação de um verbo ou adjetivo em substantivo para retomar
              uma ação ou qualidade. "O governo aumentou impostos. <em>O
              aumento</em> gerou protestos."
            </p>
          </div>
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Expressão Síntese</h3>
            <p>
              Uma expressão que resume ou rotula o que foi dito antes. "Pobreza,
              violência e falta de educação: <em>esses problemas</em> exigem
              políticas urgentes."
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Hierarquia lexical — exemplo prático</h3>
          <p>
            Frase inicial: "O juiz condenou o réu por corrupção." Substituições
            possíveis: <em>magistrado</em> (sinônimo) | <em>o profissional do
            direito</em> (descrição) | <em>a autoridade</em> (hiperônimo) |
            <em> essa decisão</em> (expressão síntese nominalizadora).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Omissão</span>

        <h2>5. Elipse — A Omissão Coesiva</h2>

        <p>
          A <strong>elipse</strong> é a omissão de um termo que pode ser
          recuperado pelo contexto. É um recurso de economia linguística: evita a
          repetição sem comprometer a compreensão, pois o elemento omitido está
          implícito na estrutura da frase anterior ou seguinte.
        </p>

        <div className="math-block">
          <h3>Tipos de elipse</h3>
          <p>
            <strong>Elipse do sujeito:</strong> "Maria estudou a tarde toda e
            [<em>ela</em>] passou na prova." — O sujeito <em>ela</em> é omitido
            porque foi mencionado antes.
          </p>
          <p>
            <strong>Elipse do verbo:</strong> "Pedro gosta de cinema;
            Ana, [<em>gosta</em>] de teatro." — O verbo é suprimido por já ter
            aparecido.
          </p>
          <p>
            <strong>Elipse de sintagma inteiro:</strong> "Quem terminou a prova
            pode sair. [<em>Os que terminaram</em>] saíram em silêncio."
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Elipse x Ambiguidade</h3>
          <p>
            A elipse é positiva quando o elemento omitido é facilmente
            recuperável. Torna-se problema quando gera ambiguidade — situação em
            que o leitor não sabe qual referente está implícito. Na redação do
            ENEM, prefira a elipse do sujeito (muito natural em português) e
            evite omissões que obscureçam o sentido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coesão Sequencial</span>

        <h2>6. Conectivos: Adição, Adversidade e Conclusão</h2>

        <p>
          A <strong>coesão sequencial</strong> organiza a progressão lógica das
          ideias por meio de <em>articuladores</em> ou <em>conectivos</em>. Eles
          indicam as relações semânticas entre as orações e os parágrafos.
          Dominá-los é fundamental tanto para a leitura quanto para a redação.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 220"
            width="580"
            height="220"
            aria-label="Mapa visual dos principais conectivos e suas relações lógicas"
          >
            <rect x="0" y="0" width="580" height="220" rx="12" fill="#fafafa" />
            <rect x="10" y="10" width="170" height="90" rx="10" fill="#dcfce7" />
            <text x="95" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Aditivos</text>
            <text x="95" y="52" textAnchor="middle" fontSize="11" fill="#166534">e, também, além disso,</text>
            <text x="95" y="68" textAnchor="middle" fontSize="11" fill="#166534">ademais, outrossim,</text>
            <text x="95" y="84" textAnchor="middle" fontSize="11" fill="#166534">não só… mas também</text>

            <rect x="200" y="10" width="170" height="90" rx="10" fill="#fee2e2" />
            <text x="285" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">Adversativos</text>
            <text x="285" y="52" textAnchor="middle" fontSize="11" fill="#991b1b">mas, porém, contudo,</text>
            <text x="285" y="68" textAnchor="middle" fontSize="11" fill="#991b1b">entretanto, no entanto,</text>
            <text x="285" y="84" textAnchor="middle" fontSize="11" fill="#991b1b">todavia, não obstante</text>

            <rect x="390" y="10" width="178" height="90" rx="10" fill="#e0e7ff" />
            <text x="479" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3730a3">Conclusivos</text>
            <text x="479" y="52" textAnchor="middle" fontSize="11" fill="#3730a3">portanto, logo, assim,</text>
            <text x="479" y="68" textAnchor="middle" fontSize="11" fill="#3730a3">então, por isso,</text>
            <text x="479" y="84" textAnchor="middle" fontSize="11" fill="#3730a3">consequentemente</text>

            <rect x="10" y="118" width="170" height="90" rx="10" fill="#fef9c3" />
            <text x="95" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Explicativos</text>
            <text x="95" y="160" textAnchor="middle" fontSize="11" fill="#713f12">pois, porque, que,</text>
            <text x="95" y="176" textAnchor="middle" fontSize="11" fill="#713f12">isto é, ou seja,</text>
            <text x="95" y="192" textAnchor="middle" fontSize="11" fill="#713f12">a saber</text>

            <rect x="200" y="118" width="170" height="90" rx="10" fill="#fce7f3" />
            <text x="285" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Concessivos</text>
            <text x="285" y="160" textAnchor="middle" fontSize="11" fill="#9d174d">embora, ainda que,</text>
            <text x="285" y="176" textAnchor="middle" fontSize="11" fill="#9d174d">mesmo que, apesar de,</text>
            <text x="285" y="192" textAnchor="middle" fontSize="11" fill="#9d174d">por mais que</text>

            <rect x="390" y="118" width="178" height="90" rx="10" fill="#f0fdf4" />
            <text x="479" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Causais</text>
            <text x="479" y="160" textAnchor="middle" fontSize="11" fill="#065f46">porque, já que,</text>
            <text x="479" y="176" textAnchor="middle" fontSize="11" fill="#065f46">visto que, uma vez que,</text>
            <text x="479" y="192" textAnchor="middle" fontSize="11" fill="#065f46">dado que</text>
          </svg>
        </figure>

        <div className="lesson-highlight">
          <h3>Distinção crucial: adversativo x concessivo</h3>
          <p>
            Ambos expressam oposição, mas de formas diferentes. O
            <strong> adversativo</strong> simplesmente contrapõe duas ideias:
            "Estudou muito, <em>mas</em> não passou." O
            <strong> concessivo</strong> admite uma ressalva antes de afirmar a
            ideia principal: "<em>Embora</em> tenha estudado muito, não passou."
            No concessivo, a oração subordinada cede terreno para a principal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações Temporais e Condicionais</span>

        <h2>7. Outros Conectivos Essenciais</h2>

        <p>
          Além das relações básicas de adição, oposição e conclusão, o texto
          argumentativo e narrativo recorre a outros tipos de articulação
          semântica que organizam a progressão das ideias no tempo, nas condições
          e nas comparações.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação</th>
                <th>Conectivos principais</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Temporal</strong></td>
                <td>quando, enquanto, depois que, antes que, assim que, logo que</td>
                <td>"<em>Depois que</em> a lei foi aprovada, os índices melhoraram."</td>
              </tr>
              <tr>
                <td><strong>Condicional</strong></td>
                <td>se, caso, desde que, contanto que, a menos que</td>
                <td>"<em>Se</em> o governo investir em educação, os resultados serão melhores."</td>
              </tr>
              <tr>
                <td><strong>Comparativo</strong></td>
                <td>assim como, da mesma forma que, tal qual, como</td>
                <td>"<em>Assim como</em> a saúde, a educação é um direito fundamental."</td>
              </tr>
              <tr>
                <td><strong>Consecutivo</strong></td>
                <td>de modo que, tanto que, de forma que, de maneira que</td>
                <td>"A violência cresceu <em>de modo que</em> a população se sentiu insegura."</td>
              </tr>
              <tr>
                <td><strong>Proporcional</strong></td>
                <td>à medida que, à proporção que, quanto mais… mais</td>
                <td>"<em>À medida que</em> a renda cresce, o consumo aumenta."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Consecutivo x Conclusivo — confusão comum</h3>
          <p>
            O <strong>consecutivo</strong> indica uma consequência que decorre
            da intensidade descrita na oração anterior ("Choveu
            <em> tanto que</em> as ruas alagaram"). O
            <strong> conclusivo</strong> tira uma conclusão de uma premissa
            anteriormente apresentada ("Choveu muito e as ruas estão molhadas;
            <em> portanto</em>, haverá engarrafamentos"). A diferença está no
            vínculo: no consecutivo, a intensidade da causa determina o efeito;
            no conclusivo, a conclusão é lógica, não necessariamente resultado
            de intensidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>

        <h2>8. Paralelismo — A Coesão pela Simetria</h2>

        <p>
          O <strong>paralelismo sintático</strong> consiste em manter a mesma
          estrutura gramatical para elementos que exercem a mesma função na
          frase. É um poderoso recurso de coesão porque cria simetria visual e
          rítmica, facilitando a leitura e reforçando a equivalência semântica
          entre os elementos paralelos.
        </p>

        <div className="math-block">
          <h3>Paralelismo correto x incorreto</h3>
          <p>
            <strong>Incorreto (quebra de paralelismo):</strong>
            "O projeto visa <em>a reduzir</em> os custos, <em>à melhoria</em>
            dos serviços e <em>que os funcionários sejam capacitados</em>."
            — Infinitivo + Substantivo + Oração = estruturas diferentes.
          </p>
          <p>
            <strong>Correto (paralelismo verbal):</strong>
            "O projeto visa <em>a reduzir</em> os custos, <em>a melhorar</em>
            os serviços e <em>a capacitar</em> os funcionários."
            — Todos no infinitivo.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📐</span>
            <h3>Paralelismo Nominal</h3>
            <p>
              Usa substantivos ou adjetivos na mesma posição e com a mesma
              função. Ex.: "Buscamos paz, <em>justiça</em> e <em>liberdade</em>."
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Paralelismo Verbal</h3>
            <p>
              Alinha verbos no mesmo modo e tempo. Ex.: "Ele chegou, viu e
              venceu."
            </p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Paralelismo Oracional</h3>
            <p>
              Coloca orações subordinadas ou coordenadas com a mesma estrutura.
              Ex.: "Quero que você estude, que você se dedique e que você
              vença."
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o ENEM cobra paralelismo?</h3>
          <p>
            Quebras de paralelismo são erros frequentes que comprometem a
            coesão e a clareza textual. Na redação, a falta de paralelismo em
            listas e enumerações é penalizada diretamente na competência IV.
            Na interpretação de textos, o ENEM pede que o candidato reconheça
            os efeitos estilísticos do paralelismo em textos literários e
            argumentativos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pontuação</span>

        <h2>9. Pontuação Coesiva</h2>

        <p>
          A <strong>pontuação</strong> é um mecanismo de coesão muitas vezes
          subestimado. Os sinais de pontuação organizam a estrutura do texto,
          indicam pausas, hierarquizam as informações e delimitam as relações
          entre orações. Um texto com pontuação inadequada perde coesão mesmo
          que use conectivos corretos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sinal</th>
                <th>Função coesiva</th>
                <th>Cuidado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vírgula (,)</strong></td>
                <td>Separa termos de mesma função, orações adverbiais deslocadas, apostos e vocativos</td>
                <td>Não separar sujeito do predicado; não separar verbo do objeto direto</td>
              </tr>
              <tr>
                <td><strong>Ponto-e-vírgula (;)</strong></td>
                <td>Indica pausa mais longa que a vírgula; separa itens de enumeração complexa</td>
                <td>Evitar uso excessivo; o ponto simples ou o travessão podem ser mais claros</td>
              </tr>
              <tr>
                <td><strong>Dois-pontos (:)</strong></td>
                <td>Introduz explicação, enumeração ou discurso direto — função catafórica</td>
                <td>Não usar após preposição ou em início de oração</td>
              </tr>
              <tr>
                <td><strong>Travessão (—)</strong></td>
                <td>Isola apostos explicativos com ênfase ou introduz fala em diálogos</td>
                <td>Não confundir com hífen; o travessão duplo exige par de abertura e fechamento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Vírgula antes de "porque"</h3>
          <p>
            A vírgula muda o sentido: "Não fui à festa<strong>,</strong> porque estava doente"
            (causa da negativa — oração causal) vs. "Não fui à festa porque
            estava doente<strong>,</strong> mas sim porque não fui convidado"
            (explicação). Quando a oração com "porque" é causal (explica o
            fato), costuma-se usar vírgula; quando é explicativa do que veio
            antes, a vírgula se torna obrigatória.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>10. Coesão na Redação do ENEM — Guia Prático</h2>

        <p>
          Para dominar a coesão na redação dissertativo-argumentativa do ENEM,
          é preciso articular todos os mecanismos estudados de forma estratégica.
          A seguir, um guia de uso por parte do texto:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Introdução</h3>
            <p>
              Use catáfora para antecipar a tese. Evite pronomes sem referente
              claro. Conectivos de contextualização: "Atualmente…", "No contexto
              contemporâneo…"
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Desenvolvimento 1</h3>
            <p>
              Inicie com conectivo que retome a tese (aditivo ou explanatório).
              Use anáforas para evitar repetição do tema. Substitua lexicalmente
              o tema com sinônimos e hiperônimos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Desenvolvimento 2</h3>
            <p>
              Use adversativo ou concessivo para apresentar segunda perspectiva
              ou contraponto. Retome o argumento anterior por nominalização ou
              expressão síntese.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Conclusão</h3>
            <p>
              Use conectivo conclusivo para fechar a argumentação. Retome a tese
              com substituição lexical (nunca copiando literalmente). Elipse do
              sujeito é eficaz aqui.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Checklist de coesão antes de entregar a redação</h3>
          <p>
            ✔ Há pronomes claros, sem ambiguidade? ✔ Os conectivos entre
            parágrafos indicam a relação lógica correta? ✔ As enumerações têm
            paralelismo sintático? ✔ A pontuação delimita corretamente as
            orações? ✔ Usei sinônimos e hiperônimos para evitar repetição
            temática?
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Resumo dos mecanismos de coesão</h3>
          <p>
            <strong>Referencial:</strong> anáfora, catáfora, pronomes pessoais/
            demonstrativos/relativos, sinônimos, hiperônimos, nominalização,
            expressão síntese, elipse. <strong>Sequencial:</strong> conectivos
            aditivos, adversativos, conclusivos, explicativos, causais,
            temporais, condicionais, concessivos, comparativos, consecutivos,
            proporcionais. <strong>Estrutural:</strong> paralelismo sintático e
            pontuação coesiva.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Anáfora Pronominal"
          statement={
            <p>
              Leia o trecho: "A pesquisadora publicou um artigo inovador. <strong>Ela</strong> foi
              convidada a apresentá-lo em congresso." O pronome destacado
              exerce, em relação ao texto, a função de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "catáfora, pois antecipa o referente que será apresentado",
            },
            {
              letter: "b",
              text: "anáfora, pois retoma o referente já mencionado anteriormente",
              correct: true,
            },
            {
              letter: "c",
              text: "elipse, pois omite um termo recuperável pelo contexto",
            },
            {
              letter: "d",
              text: "substituição lexical, pois usa sinônimo do referente anterior",
            },
          ]}
          resolution={
            <p>
              O pronome <strong>ela</strong> retoma <em>a pesquisadora</em>, que já foi
              mencionada na frase anterior — trata-se, portanto, de
              <strong> anáfora</strong>: referência retrospectiva a um elemento textual
              já apresentado. A catáfora seria o oposto: o pronome viria antes
              do referente. A elipse implica omissão, não substituição por
              pronome explícito. A substituição lexical envolve sinônimos ou
              hiperônimos, não pronomes.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Conectivos e Relação Lógica"
          statement={
            <p>
              Assinale a alternativa em que o conectivo sublinhado estabelece
              corretamente uma relação de <strong>concessão</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"O Brasil cresceu economicamente; portanto, a desigualdade persiste.\"",
            },
            {
              letter: "b",
              text: "\"A violência aumentou porque o investimento em segurança diminuiu.\"",
            },
            {
              letter: "c",
              text: "\"Embora o governo tenha investido em saúde, os indicadores pioraram.\"",
              correct: true,
            },
            {
              letter: "d",
              text: "\"O desemprego cresceu tanto que a economia entrou em recessão.\"",
            },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a conjunção <strong>embora</strong>, típica
              das orações concessivas: a subordinada (<em>embora o governo tenha
              investido em saúde</em>) admite uma ressalva que, apesar de ser
              verdadeira, não impede a ideia da oração principal (<em>os
              indicadores pioraram</em>). A alternativa A usa conectivo conclusivo
              (<em>portanto</em>). B usa conector causal (<em>porque</em>). D usa
              conectivo consecutivo (<em>tanto que</em>).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Paralelismo e Coesão Estrutural"
          statement={
            <p>
              Identifique a frase em que há <strong>quebra de paralelismo</strong>
              comprometendo a coesão textual:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"O plano prevê construir escolas, ampliar hospitais e pavimentar estradas.\"",
            },
            {
              letter: "b",
              text: "\"A meta é estudar mais, dormir bem e praticar exercícios.\"",
            },
            {
              letter: "c",
              text: "\"O relatório aponta para a redução dos gastos, o aumento da receita e que os funcionários sejam demitidos.\"",
              correct: true,
            },
            {
              letter: "d",
              text: "\"Chegou, examinou e tomou uma decisão imediata.\"",
            },
          ]}
          resolution={
            <p>
              Na alternativa C, há quebra de paralelismo: os dois primeiros
              termos da enumeração são sintagmas nominais (<em>a redução dos
              gastos</em>, <em>o aumento da receita</em>), mas o terceiro é uma
              oração subordinada substantiva (<em>que os funcionários sejam
              demitidos</em>). Para manter o paralelismo, o correto seria
              <em> a demissão dos funcionários</em> (nominalização). As demais
              alternativas mantêm estruturas equivalentes em todos os termos
              enumerados.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Coesão em Texto Argumentativo (estilo ENEM)"
          statement={
            <p>
              Leia o fragmento de redação: "A falta de saneamento básico afeta
              milhões de brasileiros. <strong>Esse problema</strong>, historicamente
              negligenciado pelo poder público, compromete a saúde, a dignidade
              e o desenvolvimento social do país." O termo destacado exerce
              função coesiva de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "catáfora, antecipando um referente a ser definido no restante do período",
            },
            {
              letter: "b",
              text: "elipse, omitindo o sujeito para evitar repetição desnecessária",
            },
            {
              letter: "c",
              text: "substituição pronominal, usando pronome pessoal em lugar do substantivo",
            },
            {
              letter: "d",
              text: "anáfora por expressão síntese, retomando e rotulando o conteúdo da frase anterior",
              correct: true,
            },
          ]}
          resolution={
            <p>
              <em>Esse problema</em> é uma <strong>expressão síntese</strong>: o
              demonstrativo <em>esse</em> aponta para o referente já apresentado
              (anáfora), e o substantivo <em>problema</em> funciona como rótulo
              que condensa e reinterpreta o conteúdo da frase anterior (<em>a
              falta de saneamento básico afeta milhões de brasileiros</em>).
              Esse recurso é muito valorizado na redação do ENEM porque demonstra
              domínio da coesão referencial e permite ao autor comentar e
              qualificar o referente ao mesmo tempo que o retoma.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Efeito dos Conectivos na Argumentação (estilo ENEM)"
          statement={
            <p>
              Dois estudantes escreveram versões diferentes de um parágrafo sobre
              desigualdade social. Versão A: "O Brasil tem crescido economicamente.
              <strong>Portanto</strong>, a desigualdade social ainda é elevada."
              Versão B: "O Brasil tem crescido economicamente. <strong>No
              entanto</strong>, a desigualdade social ainda é elevada." Sobre
              o uso dos conectivos, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ambas as versões são coesas e equivalentes, pois os conectivos têm sentido semelhante.",
            },
            {
              letter: "b",
              text: "A versão A é mais coesa porque o conectivo conclusivo organiza melhor as ideias.",
            },
            {
              letter: "c",
              text: "A versão A apresenta incoerência lógica: o conectivo \"portanto\" indica conclusão, mas a desigualdade não é consequência lógica do crescimento.",
              correct: true,
            },
            {
              letter: "d",
              text: "A versão B é incoesa porque conectivos adversativos não podem ligar parágrafos distintos.",
            },
          ]}
          resolution={
            <p>
              A versão A é logicamente incoerente: o conectivo <strong>portanto</strong>
              indica que a segunda ideia é conclusão ou consequência da primeira.
              Mas dizer que a desigualdade persiste <em>porque</em> o Brasil cresceu
              não faz sentido lógico — crescimento econômico não conclui
              desigualdade. Já <strong>no entanto</strong> (versão B) estabelece
              relação adversativa: apesar do crescimento, a desigualdade persiste
              — relação perfeitamente coerente. Este é um exemplo típico do que
              o ENEM avalia: o candidato deve escolher conectivos que expressem
              a relação lógica correta entre as ideias, não apenas qualquer
              articulador que pareça sofisticado.
            </p>
          }
        />
      </section>
    </article>
  );
}
