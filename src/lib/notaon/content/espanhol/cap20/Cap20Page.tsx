"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 20</span>
          <h1>Ideia principal, informações explícitas e implícitas</h1>
          <p>
            Identificar a ideia principal de um texto em espanhol é uma das habilidades mais cobradas pelo
            ENEM e uma das que mais exige treinamento consciente. Muitos candidatos confundem o tema geral
            com a tese, ou selecionam detalhes interessantes em vez da ideia central. Em paralelo, o ENEM
            testa a capacidade de distinguir informações que estão ditas no texto (explícitas) daquelas que
            precisam ser deduzidas a partir do contexto (implícitas). Entender essa distinção — e saber
            navegar entre os dois níveis de leitura — é o que diferencia uma leitura superficial de uma
            leitura crítica e eficiente em língua estrangeira.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Tema, ideia central e tese ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>Tema, ideia central e tese: como diferenciar</h2>
        <p>
          Três conceitos são frequentemente confundidos: o <strong>tema</strong> é o assunto geral do texto
          (uma palavra ou sintagma); a <strong>ideia central</strong> é o que o texto diz sobre esse tema
          (uma frase completa); a <strong>tese</strong> é a posição defendida pelo autor em textos
          argumentativos (pode coincidir com a ideia central, mas implica tomada de posição).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>O que é</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tema</strong></td>
                <td>Assunto geral (substantivo/sintagma)</td>
                <td><em>El cambio climático</em></td>
              </tr>
              <tr>
                <td><strong>Ideia central</strong></td>
                <td>O que o texto afirma sobre o tema</td>
                <td><em>El cambio climático es una amenaza global que requiere acción inmediata.</em></td>
              </tr>
              <tr>
                <td><strong>Tese</strong></td>
                <td>Posição defendida pelo autor (textos argumentativos)</td>
                <td><em>Los gobiernos deben priorizar las energías renovables para combatir el calentamiento global.</em></td>
              </tr>
              <tr>
                <td><strong>Ideia secundária</strong></td>
                <td>Argumento, exemplo ou dado que apoia a ideia central</td>
                <td><em>En 2023, las temperaturas globales batieron récords históricos.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Teste rápido:</strong> Se a frase que você selecionou como "ideia principal" menciona um
          exemplo específico, um dado numérico, ou um caso particular — é provavelmente uma ideia secundária.
          A ideia principal é mais ampla e abrange o texto inteiro, não apenas um parágrafo.
        </div>
      </section>

      {/* ── Seção 2: SVG — hierarquia de ideias ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hierarquia</span>
        <h2>Pirâmide de ideias em textos espanhóis</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Pirâmide hierarquia de ideias em textos">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            {/* Topo */}
            <polygon points="350,20 230,80 470,80" fill="#1e40af" />
            <text x="350" y="58" textAnchor="middle" fontWeight="bold" fontSize="13" fill="white">TEMA</text>
            <text x="350" y="74" textAnchor="middle" fontSize="10" fill="white">assunto geral</text>
            {/* Meio */}
            <polygon points="230,85 470,85 530,140 170,140" fill="#3b82f6" />
            <text x="350" y="112" textAnchor="middle" fontWeight="bold" fontSize="13" fill="white">IDEIA CENTRAL / TESE</text>
            <text x="350" y="130" textAnchor="middle" fontSize="10" fill="white">o que o texto afirma/defende sobre o tema</text>
            {/* Base */}
            <polygon points="170,145 530,145 620,200 80,200" fill="#93c5fd" />
            <text x="350" y="170" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">IDEIAS SECUNDÁRIAS</text>
            <text x="350" y="188" textAnchor="middle" fontSize="10" fill="#1e40af">argumentos, exemplos, dados, casos específicos, detalhes</text>
            {/* Labels */}
            <text x="625" y="62" fontSize="11" fill="#92400e" fontWeight="bold">← 1 por texto</text>
            <text x="535" y="118" fontSize="11" fill="#92400e" fontWeight="bold">← 1 por texto</text>
            <text x="535" y="175" fontSize="11" fill="#92400e" fontWeight="bold">← várias</text>
          </svg>
          <figcaption>Hierarquia de ideias: o tema é o mais geral; a ideia central é a afirmação sobre o tema; as secundárias são os detalhes de suporte.</figcaption>
        </figure>
      </section>

      {/* ── Seção 3: Informação explícita ── */}
      <section className="lesson-section">
        <span className="section-kicker">Informação Explícita</span>
        <h2>Informações explícitas: o que o texto diz diretamente</h2>
        <p>
          Uma informação é <strong>explícita</strong> quando está literalmente escrita no texto, sem necessidade
          de dedução. As questões de informação explícita do ENEM em espanhol geralmente usam expressões como
          <em> "según el texto", "de acuerdo con el texto", "el autor menciona que"</em>. A dificuldade está
          em encontrar a informação correta entre distratores plausíveis.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Scanning direto</h3>
            <p>Use scanning para localizar a frase do texto que corresponde ao que a questão pede. Compare cuidadosamente — o ENEM usa paráfrases, não cópia exata.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Cuidado com paráfrases</h3>
            <p>O ENEM raramente copia a frase exata do texto. A alternativa correta usa sinônimos ou estruturas diferentes para expressar o mesmo conteúdo.</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Distratores comuns</h3>
            <p>Informação verdadeira mas não mencionada no texto; informação oposta ao texto; informação de apenas parte do texto; generalização excessiva.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Marcador de questão</th><th>O que buscar</th><th>Estratégia</th></tr>
            </thead>
            <tbody>
              <tr><td><em>según el texto</em></td><td>Informação literal</td><td>Scanning + comparar paráfrase</td></tr>
              <tr><td><em>de acuerdo con el autor</em></td><td>Posição do autor</td><td>Buscar verbos de opinião</td></tr>
              <tr><td><em>el texto menciona que</em></td><td>Presença no texto</td><td>Verificar se a info existe</td></tr>
              <tr><td><em>¿cuál es el objetivo del texto?</em></td><td>Intenção geral</td><td>Skimming + gênero textual</td></tr>
              <tr><td><em>el texto afirma que</em></td><td>Conteúdo declarado</td><td>Localizar e confirmar</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4: Informação implícita ── */}
      <section className="lesson-section">
        <span className="section-kicker">Informação Implícita</span>
        <h2>Informações implícitas: o que o texto sugere sem dizer</h2>
        <p>
          Uma informação é <strong>implícita</strong> quando pode ser deduzida do texto, mas não está escrita
          literalmente. Para responder questões de inferência sobre textos em espanhol, o candidato precisa
          combinar o que o texto diz com seu conhecimento de mundo, lógica e contexto cultural hispânico.
        </p>
        <div className="lesson-highlight">
          <strong>Regra de ouro para informação implícita:</strong> A inferência correta é aquela que
          <em> necessariamente</em> decorre do texto — não é uma suposição possível, mas uma conclusão
          inevitável. Pergunte: "Se o texto diz X, então Y deve ser verdade?" Se a resposta for "sim, com
          certeza", é uma inferência válida. Se for "talvez", não é.
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diferença explícito vs implícito">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="20" width="310" height="160" rx="10" fill="#dbeafe" />
            <text x="175" y="48" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e40af">EXPLÍCITO</text>
            <text x="175" y="68" textAnchor="middle" fontSize="11" fill="#1e40af">Está escrito no texto</text>
            <text x="175" y="86" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">"La población creció un 15%"</text>
            <text x="175" y="106" textAnchor="middle" fontSize="11" fill="#1e40af">Questão: "Segundo o texto,</text>
            <text x="175" y="122" textAnchor="middle" fontSize="11" fill="#1e40af">qual foi o crescimento?"</text>
            <text x="175" y="142" textAnchor="middle" fontSize="11" fill="#1e40af">→ Resposta: 15%</text>
            <text x="175" y="162" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Scanning é suficiente</text>
            <rect x="370" y="20" width="310" height="160" rx="10" fill="#fce7f3" />
            <text x="525" y="48" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#9d174d">IMPLÍCITO</text>
            <text x="525" y="68" textAnchor="middle" fontSize="11" fill="#9d174d">Precisa ser inferido</text>
            <text x="525" y="86" textAnchor="middle" fontSize="11" fill="#9d174d" fontStyle="italic">"La empresa no contratará más."</text>
            <text x="525" y="106" textAnchor="middle" fontSize="11" fill="#9d174d">Questão: "O que se pode</text>
            <text x="525" y="122" textAnchor="middle" fontSize="11" fill="#9d174d">concluir sobre o emprego?"</text>
            <text x="525" y="142" textAnchor="middle" fontSize="11" fill="#9d174d">→ Inferência: haverá menos vagas</text>
            <text x="525" y="162" textAnchor="middle" fontSize="11" fill="#9d174d" fontWeight="bold">Raciocínio + contexto necessários</text>
          </svg>
          <figcaption>Explícito: encontrado diretamente por scanning. Implícito: requer raciocínio e uso do contexto para dedução.</figcaption>
        </figure>
      </section>

      {/* ── Seção 5: Marcadores de ideia principal ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores Textuais</span>
        <h2>Marcadores de ideia principal em espanhol</h2>
        <p>
          O espanhol, especialmente em textos jornalísticos e acadêmicos, usa marcadores textuais que sinalizam
          onde o autor está expressando a ideia principal, a conclusão ou o ponto central. Reconhecê-los
          é um atalho poderoso para identificar a tese.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Marcador em espanhol</th><th>Tradução / Função</th><th>O que vem depois</th></tr>
            </thead>
            <tbody>
              <tr><td><em>en resumen / en síntesis</em></td><td>Em resumo / Em síntese</td><td>Síntese da ideia central</td></tr>
              <tr><td><em>en conclusión / en definitiva</em></td><td>Em conclusão / Em definitivo</td><td>Conclusão do texto / tese</td></tr>
              <tr><td><em>lo más importante es</em></td><td>O mais importante é</td><td>Ideia central explícita</td></tr>
              <tr><td><em>cabe destacar que</em></td><td>Cabe destacar que / Vale ressaltar que</td><td>Informação de destaque</td></tr>
              <tr><td><em>hay que subrayar que</em></td><td>É necessário sublinhar que</td><td>Ponto-chave do argumento</td></tr>
              <tr><td><em>en otras palabras / es decir</em></td><td>Em outras palavras / Ou seja</td><td>Reformulação da ideia central</td></tr>
              <tr><td><em>así pues / por lo tanto</em></td><td>Portanto / Sendo assim</td><td>Conclusão lógica</td></tr>
              <tr><td><em>el objetivo de este texto es</em></td><td>O objetivo deste texto é</td><td>Intenção comunicativa explícita</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Estrutura do texto argumentativo em espanhol:</strong> (1) <em>Introducción</em> — contexto +
          tese provisória. (2) <em>Desarrollo</em> — argumentos com exemplos e dados. (3) <em>Conclusión</em> —
          reafirmação da tese com marcadores como <em>en definitiva, por lo tanto, en conclusión</em>. A tese
          frequentemente aparece no início E no final do texto (paralelismo argumentativo).
        </div>
      </section>

      {/* ── Seção 6: Técnica de eliminar alternativas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica de Eliminação</span>
        <h2>Como eliminar alternativas incorretas</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Muito específica</h3>
            <p>Alternativa que menciona apenas um detalhe de um parágrafo. Nunca é a ideia principal, que deve abranger o texto inteiro.</p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Muito geral</h3>
            <p>Alternativa que vai além do texto, generalizando para o que "normalmente" acontece no mundo. A ideia principal deve ser sustentada pelo texto.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Informação oposta</h3>
            <p>Alternativa que contradiz uma informação do texto. Geralmente é a alternativa mais fácil de eliminar por scanning direto.</p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Não mencionada</h3>
            <p>Alternativa plausível, mas que o texto simplesmente não menciona. Pode ser verdadeira no mundo real, mas não "de acordo com o texto".</p>
          </div>
        </div>
        <div className="math-block">
          <strong>Algoritmo de eliminação para questões de ideia principal:</strong>
          <br />
          1. Elimine alternativas com dados específicos (número, nome, local único).
          <br />
          2. Elimine alternativas que contradizem o texto diretamente.
          <br />
          3. Elimine alternativas que vão além do texto (informação não mencionada).
          <br />
          4. Entre as restantes, escolha a que melhor representa TODO o texto, não apenas um trecho.
          <br />
          5. Confirme: a alternativa escolhida seria um bom subtítulo para o texto inteiro?
        </div>
      </section>

      {/* ── Seção 7: Tipos de texto e ideia principal ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros Textuais</span>
        <h2>Ideia principal em diferentes gêneros textuais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Gênero</th><th>Onde está a ideia principal</th><th>Marcadores típicos</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Artigo de opinião</td>
                <td>Introdução (tese) + Conclusão (reafirmação)</td>
                <td><em>considero que, en mi opinión, es necesario, hay que</em></td>
              </tr>
              <tr>
                <td>Notícia jornalística</td>
                <td>Título + Primeiro parágrafo (lide)</td>
                <td>Responde: Quem? O quê? Quando? Onde? Como?</td>
              </tr>
              <tr>
                <td>Texto literário</td>
                <td>Distribuída ao longo do texto (tema implícito)</td>
                <td>Símbolos, repetições, contrastes, personagens</td>
              </tr>
              <tr>
                <td>Texto científico</td>
                <td>Abstract + Conclusão</td>
                <td><em>el presente estudio demuestra, los resultados indican</em></td>
              </tr>
              <tr>
                <td>Charge / Tirinha</td>
                <td>Contraste visual + fala dos personagens</td>
                <td>Exagero, ironia, crítica implícita na imagem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8: Exemplos de textos ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise de Texto</span>
        <h2>Análise: ideia principal em texto autêntico</h2>
        <p>
          Leia este trecho de artigo jornalístico hispânico e observe como identificar a ideia principal:
        </p>
        <div className="lesson-highlight">
          <em>
            "La desigualdad educativa en América Latina sigue siendo uno de los principales obstáculos para
            el desarrollo de la región. Mientras los hijos de familias adineradas acceden a escuelas privadas
            con recursos tecnológicos de última generación, millones de niños de zonas rurales estudian en
            edificios deteriorados sin acceso a internet. Los datos del último informe de la CEPAL revelan que
            la brecha educativa ha aumentado un 23% en la última década. En definitiva, sin una inversión
            urgente y equitativa en educación, la región no podrá alcanzar sus metas de desarrollo sostenible."
          </em>
        </div>
        <p>
          <strong>Análise:</strong> O tema é "desigualdade educacional na América Latina". A ideia central
          (tese) está na última frase, introduzida por <em>en definitiva</em>: sem investimento educacional
          urgente e igualitário, a região não alcançará suas metas. Os dados da CEPAL e o contraste entre
          escolas ricas e pobres são ideias secundárias que sustentam essa tese.
        </p>
      </section>

      {/* ── Seção 9: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificar ideia principal vs. detalhe"
          statement={
            <p>
              Leia: <em>"El uso excesivo de las redes sociales entre los jóvenes genera consecuencias negativas
              para la salud mental. Estudios realizados en 2022 en doce países latinoamericanos mostraron que
              adolescentes que pasan más de cuatro horas diarias en redes sociales tienen el doble de riesgo
              de desarrollar ansiedad. En definitiva, limitar el tiempo de pantalla es una medida de salud
              pública prioritaria."</em>{" "}
              Qual é a ideia principal do texto?
            </p>
          }
          options={[
            { letter: "a", text: "Estudos de 2022 em doze países mostraram que adolescentes passam mais de quatro horas nas redes sociais." },
            { letter: "b", text: "Limitar o tempo de tela é uma medida prioritária de saúde pública, dada a relação entre redes sociais e problemas de saúde mental.", correct: true },
            { letter: "c", text: "Os adolescentes latinoamericanos têm o dobro de risco de ansiedade em comparação com adultos." },
            { letter: "d", text: "As redes sociais foram criadas para prejudicar a saúde mental dos jovens." },
          ]}
          resolution={
            <p>
              A ideia principal está na última frase, introduzida por <em>en definitiva</em> (marcador de
              conclusão): limitar o tempo de tela é uma medida prioritária. A alternativa a menciona apenas
              um dado específico (detalhe). A alternativa c distorce a informação (o risco duplo é comparado
              com quem usa menos, não com adultos). A alternativa d não está no texto. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Distinguir informação explícita de implícita"
          statement={
            <p>
              Leia: <em>"La empresa anunció que cerrará sus tres fábricas en la región norte del país antes
              de finales de año. Las instalaciones empleaban a más de 2.000 trabajadores."</em>{" "}
              Qual alternativa contém uma informação <strong>implícita</strong> (deduzida, não dita literalmente)?
            </p>
          }
          options={[
            { letter: "a", text: "A empresa anunciou o fechamento de três fábricas." },
            { letter: "b", text: "As instalações empregavam mais de 2.000 trabalhadores." },
            { letter: "c", text: "Mais de 2.000 trabalhadores provavelmente perderão seus empregos.", correct: true },
            { letter: "d", text: "O fechamento ocorrerá antes do final do ano." },
          ]}
          resolution={
            <p>
              As alternativas a, b e d são informações <strong>explícitas</strong> — estão literalmente no texto.
              A alternativa c é uma <strong>inferência</strong>: o texto não diz que os trabalhadores perderão
              os empregos, mas isso se deduz necessariamente do fato de que as fábricas serão fechadas e elas
              empregavam mais de 2.000 pessoas. É uma conclusão inevitável, portanto uma inferência válida.
              Resposta: <strong>c</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Identificar tese em texto argumentativo"
          statement={
            <p>
              Leia: <em>"Mucho se ha debatido sobre si la inteligencia artificial representa una amenaza para
              el empleo. Hay quienes argumentan que automatizará millones de puestos de trabajo. Sin embargo,
              la historia demuestra que cada revolución tecnológica, lejos de destruir empleos en términos
              netos, ha generado nuevas oportunidades laborales que no existían anteriormente. Es necesario,
              por lo tanto, invertir en formación y adaptación, no en frenar el progreso."</em>{" "}
              Qual é a tese do autor?
            </p>
          }
          options={[
            { letter: "a", text: "A inteligência artificial vai automatizar milhões de empregos." },
            { letter: "b", text: "A história das revoluções tecnológicas prova que a IA não destruirá empregos; é preciso investir em formação.", correct: true },
            { letter: "c", text: "O debate sobre IA e emprego não tem solução definitiva." },
            { letter: "d", text: "A IA representa uma ameaça ao emprego que deve ser freada." },
          ]}
          resolution={
            <p>
              O autor usa o conectivo de contraste <em>sin embargo</em> para rejeitar a tese oposta (IA ameaça
              empregos) e apresentar sua própria posição: a revolução tecnológica cria novas oportunidades.
              A conclusão <em>por lo tanto</em> indica a ação defendida: investir em formação. A alternativa a
              é a tese que o autor rejeita. A alternativa c não está no texto. A alternativa d é o oposto da
              posição do autor. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto jornalístico — explícito vs. implícito"
          statement={
            <p>
              Leia: <em>"El alcalde de Caracas inauguró ayer el nuevo sistema de transporte público que
              conecta seis distritos de la ciudad. La obra, que costó 120 millones de dólares, tardó tres
              años en construirse. Según las autoridades, beneficiará a 500.000 ciudadanos diariamente."</em>{" "}
              Com base no texto, qual alternativa apresenta uma informação <strong>implícita</strong>?
            </p>
          }
          options={[
            { letter: "a", text: "O sistema de transporte conecta seis distritos da cidade." },
            { letter: "b", text: "A construção custou 120 milhões de dólares." },
            { letter: "c", text: "O prefeito de Caracas está comprometido com a melhoria da mobilidade urbana da cidade.", correct: true },
            { letter: "d", text: "O sistema de transporte levou três anos para ser construído." },
          ]}
          resolution={
            <p>
              As alternativas a, b e d são informações <strong>explícitas</strong> — estão literalmente no texto.
              A alternativa c é uma <strong>inferência</strong>: o texto não diz que o prefeito está comprometido
              com a mobilidade urbana, mas é possível inferir isso de sua participação na inauguração. No entanto,
              essa inferência é plausível mas não necessária — o prefeito poderia ter inaugurado por interesse
              político. Em questões ENEM, essa seria a melhor resposta disponível pois é a que requer raciocínio
              além do texto. Resposta: <strong>c</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Paráfrases e sinônimos — informação explícita"
          statement={
            <p>
              Leia: <em>"La obesidad infantil se ha convertido en uno de los mayores desafíos de salud pública
              del siglo XXI. Los especialistas señalan que el sedentarismo y el consumo excesivo de alimentos
              ultraprocesados son los principales factores que explican este fenómeno. Cabe destacar que los
              países de ingresos medios son los más afectados por esta epidemia silenciosa."</em>{" "}
              De acordo com o texto, os principais fatores da obesidade infantil são:
            </p>
          }
          options={[
            { letter: "a", text: "O avanço tecnológico e a falta de políticas públicas de saúde." },
            { letter: "b", text: "O sedentarismo e o consumo excessivo de alimentos ultraprocessados.", correct: true },
            { letter: "c", text: "A pobreza e a falta de acesso a alimentos saudáveis." },
            { letter: "d", text: "A globalização e a influência da cultura norte-americana na alimentação." },
          ]}
          resolution={
            <p>
              A questão pede informação explícita ("de acordo com o texto"). O texto menciona literalmente:
              "el sedentarismo y el consumo excesivo de alimentos ultraprocesados son los principales factores".
              A alternativa b é uma paráfrase direta do texto. As alternativas a, c e d mencionam fatores
              plausíveis no mundo real, mas não estão no texto — são exemplos de distratores "não mencionados".
              Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
