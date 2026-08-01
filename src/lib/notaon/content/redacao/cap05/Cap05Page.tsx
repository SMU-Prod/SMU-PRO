"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 5</span>
          <h1>Construção da Introdução</h1>
          <p>
            A introdução é a primeira impressão que o corretor tem do seu texto. Aprenda os
            cinco tipos de contextualização, como evitar clichês que prejudicam sua nota e
            como encerrar sempre com uma tese precisa e impactante.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função</span>
        <h2>1. Função da Introdução: Contextualizar, Apresentar e Posicionar</h2>
        <p>
          A introdução da redação ENEM cumpre três funções essenciais: (1) <strong>contextualizar
          o tema</strong> — mostrar ao corretor que você compreende o problema social em seu
          contexto histórico, econômico ou cultural; (2) <strong>apresentar o recorte</strong>
          — delimitar qual aspecto específico será discutido; (3) <strong>enunciar a tese</strong>
          — apresentar seu posicionamento claro sobre o problema na última frase.
        </p>
        <p>
          Uma introdução bem escrita tem entre <strong>5 e 7 linhas</strong> e funciona como
          um "funil" — começa ampla (contextualização geral) e vai estreitando até chegar ao
          ponto específico (tese). Evite introduções muito longas (acima de 8 linhas) ou muito
          curtas (abaixo de 4 linhas). O corretor lê a introdução com atenção especial — é a
          sua "carta de apresentação".
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>2. Contextualização Histórica: Ancoragem Temporal</h2>
        <p>
          A contextualização histórica ancora o problema em um período específico da história,
          mostrando quando e como ele surgiu ou se agravou. É ideal para temas com raízes
          históricas claras (racismo, desigualdade social, direitos humanos, colonialismo).
        </p>
        <div className="lesson-highlight">
          <h3>Modelo — Tema: racismo no Brasil</h3>
          <p>
            "Desde a abolição formal da escravidão em 1888, o Brasil nunca implementou políticas
            sistemáticas de reparação para os ex-escravizados e seus descendentes. Ao contrário,
            o mito da democracia racial — difundido por sociólogos como Gilberto Freyre — serviu
            para mascarar as profundas desigualdades raciais que persistem até hoje. Segundo o
            IBGE, negros e pardos representam 76% da população mais pobre do país e apenas 29%
            dos cargos de gerência nas empresas privadas. Diante dessa realidade, o racismo
            estrutural no Brasil se revela como herança direta da escravidão, demandando políticas
            afirmativas urgentes para sua superação."
          </p>
        </div>
        <p>
          <strong>Vantagem:</strong> demonstra repertório histórico sólido e situa o problema
          em perspectiva temporal. <strong>Cuidado:</strong> não abra com datas sem contexto
          ("Em 1888, foi abolida a escravidão") — a contextualização deve ser discursiva, não
          enciclopédica.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>3. Citação ou Dado Estatístico: Dar Autoridade ao Argumento</h2>
        <p>
          Abrir com uma citação de autoridade (filósofo, cientista, escritor) ou com dado
          estatístico de fonte confiável confere <strong>credibilidade imediata</strong> ao
          texto e demonstra repertório sociocultural — valorizado em C2.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo — Tema: saúde mental de jovens</h3>
          <p>
            "O filósofo Michel Foucault, ao analisar as instituições modernas em 'Vigiar e
            Punir', identificou como a sociedade disciplinar cria mecanismos de controle que
            oprimem subjetividades dissidentes. Esse diagnóstico ressoa no cenário contemporâneo:
            segundo a OMS, a depressão é a principal causa de incapacidade entre jovens de 15
            a 29 anos no mundo, e o Brasil registra 12 milhões de pessoas com o transtorno.
            A saúde mental juvenil tornou-se, portanto, uma emergência de saúde pública ignorada
            por décadas — crise agravada pelo estigma cultural que afasta os jovens do
            tratamento e os condena ao silêncio."
          </p>
        </div>
        <p>
          <strong>Fontes confiáveis para citar:</strong> ONU, OMS, IBGE, DataSUS, INEP, IPEA,
          Anatel, UNESCO, Banco Mundial, além de filósofos como Kant, Rousseau, Tocqueville,
          Bourdieu, Foucault, Gramsci, e literatos como Machado de Assis, Graciliano Ramos,
          Carolina de Jesus.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>4. Situação Hipotética: "Imagine que..." / "Suponha..."</h2>
        <p>
          A situação hipotética convida o leitor a imaginar um cenário concreto que ilustra
          o problema. É eficaz para humanizar temas abstratos e criar impacto emocional
          imediato. Ideal para temas sobre grupos vulneráveis ou situações de exclusão.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo — Tema: exclusão digital</h3>
          <p>
            "Imagine uma estudante de 16 anos moradora de uma comunidade ribeirinha no Amazonas.
            Ao ouvir no rádio que as aulas foram transferidas para plataformas online durante a
            pandemia, ela percebe que o único dispositivo disponível em casa é um celular antigo
            sem dados móveis. Para ela, 'estudar de casa' é uma ficção — uma promessa que os
            marcos tecnológicos do século XXI fizeram, mas que a infraestrutura desigual do
            Brasil não cumpriu. Esse cenário, longe de ser exceção, representa a realidade de
            cerca de 4,3 milhões de estudantes brasileiros sem acesso à internet em 2021,
            segundo o IBGE, evidenciando que a exclusão digital é uma forma contemporânea de
            exclusão social que reproduz e aprofunda desigualdades históricas."
          </p>
        </div>
        <p>
          <strong>Cuidado:</strong> a situação hipotética deve ser plausível e conectada ao
          tema — não invente cenários fantásticos ou impossíveis. Sempre termine com dado ou
          frase que conecte o hipotético ao real.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 4</span>
        <h2>5. Definição Conceitual: Definir Termos-Chave do Tema</h2>
        <p>
          A definição conceitual abre a introdução explicando o significado de um termo central
          do tema. É ideal quando o tema usa conceito específico que precisa ser delimitado
          (ex.: "estigma", "trabalho de cuidado", "invisibilidade", "racismo estrutural").
        </p>
        <div className="lesson-highlight">
          <h3>Modelo — Tema: trabalho de cuidado feminino</h3>
          <p>
            "Entende-se por 'trabalho de cuidado' o conjunto de atividades domésticas e de
            assistência — criação de filhos, cuidado de idosos e doentes, limpeza e alimentação
            familiar — realizadas predominantemente por mulheres de forma gratuita no âmbito
            privado. Embora esse trabalho seja indispensável para a reprodução social, ele
            permanece invisível nas estatísticas econômicas e desvalorizado na cultura brasileira.
            Segundo o IBGE, mulheres dedicam em média 21,4 horas semanais a afazeres domésticos,
            contra 11 horas dos homens — diferença que se traduz em menor participação feminina
            no mercado formal e em maior vulnerabilidade econômica. A invisibilidade do trabalho
            de cuidado, portanto, reflete e perpetua a desigualdade de gênero estrutural no Brasil."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 5</span>
        <h2>6. Comparação ou Contraste: "Se por um lado... por outro..."</h2>
        <p>
          A introdução por contraste evidencia uma contradição ou paradoxo da realidade social
          brasileira. É muito eficaz para temas que envolvem avanços legais ou formais
          contrastados com a persistência do problema na prática.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo — Tema: violência contra a mulher</h3>
          <p>
            "Se por um lado o Brasil conta com a Lei Maria da Penha — considerada pela ONU uma
            das legislações mais avançadas do mundo no combate à violência doméstica —, por
            outro registra uma mulher assassinada a cada 7 horas, segundo o Atlas da Violência
            2023. Esse paradoxo revela que legislação e realidade são dimensões distintas: a lei
            existe, mas o aparato de proteção, o acesso à justiça e a transformação cultural
            necessários para sua efetividade ainda são insuficientes. A persistência da violência
            doméstica no Brasil, portanto, decorre não da ausência de marcos legais, mas da
            manutenção de uma cultura patriarcal que naturaliza o controle masculino sobre o
            corpo e a vida das mulheres."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>7. Os 5 Tipos de Introdução em Blocos Paralelos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 160" width="520" height="160" aria-label="Cinco tipos de introdução em blocos paralelos coloridos">
            {/* Tipo 1 */}
            <rect x="10" y="20" width="88" height="90" rx="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
            <text x="54" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3730a3">HISTÓRICA</text>
            <text x="54" y="58" textAnchor="middle" fontSize="8" fill="#4338ca">Ancoragem</text>
            <text x="54" y="71" textAnchor="middle" fontSize="8" fill="#4338ca">temporal</text>
            <text x="54" y="88" textAnchor="middle" fontSize="8" fill="#6366f1">"Desde o</text>
            <text x="54" y="100" textAnchor="middle" fontSize="8" fill="#6366f1">século XX..."</text>
            {/* Tipo 2 */}
            <rect x="112" y="20" width="88" height="90" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="156" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">CITAÇÃO/</text>
            <text x="156" y="56" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">DADO</text>
            <text x="156" y="71" textAnchor="middle" fontSize="8" fill="#047857">Autoridade</text>
            <text x="156" y="84" textAnchor="middle" fontSize="8" fill="#047857">ou estatística</text>
            <text x="156" y="100" textAnchor="middle" fontSize="8" fill="#059669">"Segundo OMS..."</text>
            {/* Tipo 3 */}
            <rect x="214" y="20" width="88" height="90" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="258" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">HIPOTÉTICA</text>
            <text x="258" y="58" textAnchor="middle" fontSize="8" fill="#b45309">Cenário</text>
            <text x="258" y="71" textAnchor="middle" fontSize="8" fill="#b45309">imaginário</text>
            <text x="258" y="88" textAnchor="middle" fontSize="8" fill="#d97706">"Imagine</text>
            <text x="258" y="100" textAnchor="middle" fontSize="8" fill="#d97706">que..."</text>
            {/* Tipo 4 */}
            <rect x="316" y="20" width="88" height="90" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="360" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9d174d">CONCEITUAL</text>
            <text x="360" y="58" textAnchor="middle" fontSize="8" fill="#be185d">Define</text>
            <text x="360" y="71" textAnchor="middle" fontSize="8" fill="#be185d">termos-chave</text>
            <text x="360" y="88" textAnchor="middle" fontSize="8" fill="#db2777">"Entende-se</text>
            <text x="360" y="100" textAnchor="middle" fontSize="8" fill="#db2777">por..."</text>
            {/* Tipo 5 */}
            <rect x="418" y="20" width="88" height="90" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5" />
            <text x="462" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b21a8">CONTRASTE</text>
            <text x="462" y="58" textAnchor="middle" fontSize="8" fill="#7e22ce">Paradoxo</text>
            <text x="462" y="71" textAnchor="middle" fontSize="8" fill="#7e22ce">ou contradição</text>
            <text x="462" y="88" textAnchor="middle" fontSize="8" fill="#9333ea">"Se por um</text>
            <text x="462" y="100" textAnchor="middle" fontSize="8" fill="#9333ea">lado..."</text>
            {/* Tese em baixo */}
            <rect x="10" y="125" width="496" height="25" rx="5" fill="#1e1b4b" />
            <text x="258" y="142" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">TODOS os tipos terminam com TESE na última frase da introdução</text>
          </svg>
          <figcaption>Os cinco tipos de contextualização para a introdução — todos encerram com a tese</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho e Posição</span>
        <h2>8. Tamanho Ideal e Estrutura em Funil</h2>
        <p>
          A introdução ideal tem <strong>5 a 7 linhas</strong> e segue a lógica de funil:
          começa ampla e vai estreitando até chegar à tese.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Linha(s)</th><th>Conteúdo</th><th>Proporção</th></tr>
            </thead>
            <tbody>
              <tr><td>1–2</td><td>Contextualização geral do problema — cenário amplo</td><td>~35%</td></tr>
              <tr><td>3–4</td><td>Aprofundamento / dado / evidência do problema</td><td>~35%</td></tr>
              <tr><td>5–6</td><td>Conexão com o recorte específico do tema</td><td>~20%</td></tr>
              <tr><td>7 (última)</td><td>TESE — posicionamento específico e argumentável</td><td>~10%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Clichês Proibidos</span>
        <h2>9. Como Evitar Clichês que Prejudicam a Nota</h2>
        <p>
          Algumas abertura de introdução são tão repetitivas que sinalizam ao corretor
          ausência de criatividade e repertório — o que prejudica a nota em C2. Memorize
          as frases proibidas e saiba como substituí-las:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Clichê proibido</th><th>Por que evitar</th><th>Substituto eficaz</th></tr>
            </thead>
            <tbody>
              <tr><td>"Desde os primórdios da humanidade..."</td><td>Vago e sem informação; usado por 30% dos candidatos</td><td>Cite um período histórico específico: "Desde a Revolução Industrial no século XVIII..."</td></tr>
              <tr><td>"Nos tempos atuais..."</td><td>Óbvio e sem ancoragem — não informa nada</td><td>"No contexto do pós-pandemia, marcado por [...]"</td></tr>
              <tr><td>"Com o advento da globalização..."</td><td>Usado excessivamente sem conexão real com o tema</td><td>Cite fenômeno específico: "Com a expansão das redes sociais a partir dos anos 2000..."</td></tr>
              <tr><td>"O mundo moderno..."</td><td>Expressão vaga que não contextualiza nada</td><td>"A sociedade brasileira contemporânea, marcada por [dados]..."</td></tr>
              <tr><td>"É notório que..." / "Sabe-se que..."</td><td>Informalidade disfarçada; apela para senso comum</td><td>Apresente o dado diretamente: "Segundo o IBGE, [dados concretos]..."</td></tr>
              <tr><td>"Deus criou o homem à sua imagem e semelhança..."</td><td>Referência religiosa pode ser interpretada como apelo à emoção sem argumento</td><td>Use referência filosófica ou literária laica</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelo Anotado</span>
        <h2>10. Exemplo Completo Anotado: Contextualização Histórica</h2>
        <p>
          A seguir, uma introdução modelo para o tema <em>"Evasão escolar no ensino médio
          brasileiro"</em>, com anotações de cada elemento:
        </p>
        <div className="lesson-highlight">
          <h3>Introdução anotada</h3>
          <p>
            <em>[Contextualização histórica]</em> "A educação pública brasileira herdou do
            período colonial um modelo excludente, voltado para a formação das elites e
            indiferente às necessidades das classes populares. <em>[Aprofundamento com dado]</em>
            Essa herança manifesta-se hoje nas taxas de evasão: segundo o INEP, apenas 65% dos
            jovens de 15 a 17 anos estão matriculados no ensino médio, sendo que entre os 20%
            mais pobres, o abandono supera 40%. <em>[Conexão com recorte]</em> Esse fenômeno
            não decorre de desinteresse dos jovens, mas de condições estruturais que os forçam
            a escolher entre estudar e trabalhar para sobreviver. <em>[TESE]</em> A evasão
            escolar no ensino médio, portanto, é consequência direta da desigualdade econômica
            e da insuficiência de políticas de permanência escolar, exigindo intervenção
            articulada entre Estado e comunidade."
          </p>
        </div>
        <p>
          Observe como o funil funciona: partiu do panorama histórico geral, aprofundou com
          dado atual, conectou ao recorte específico (evasão + causa estrutural) e terminou
          com tese clara e argumentável que define os dois eixos do texto (desigualdade
          econômica + políticas de permanência).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>11. Os 5 Tipos: Prós, Contras e Frase de Abertura Modelo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Vantagem</th><th>Desvantagem</th><th>Frase de abertura modelo</th></tr>
            </thead>
            <tbody>
              <tr><td>Histórica</td><td>Mostra repertório sólido</td><td>Pode ficar enciclopédica</td><td>"Desde [período histórico], [problema] se manifesta como..."</td></tr>
              <tr><td>Citação/Dado</td><td>Credibilidade imediata</td><td>Exige dados precisos e verificáveis</td><td>"Segundo [fonte confiável], [dado], revelando que..."</td></tr>
              <tr><td>Hipotética</td><td>Impacto emocional imediato</td><td>Pode soar artificial se mal executada</td><td>"Imagine [sujeito específico] em [situação concreta que ilustra o problema]..."</td></tr>
              <tr><td>Conceitual</td><td>Precisão terminológica valorizada</td><td>Pode ser fria e distante</td><td>"Entende-se por [conceito-chave] o conjunto de [definição precisa]..."</td></tr>
              <tr><td>Contraste</td><td>Revela sofisticação argumentativa</td><td>Requer bom conhecimento do paradoxo</td><td>"Se por um lado [aspecto positivo], por outro [contradição da realidade]..."</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📜</span>
            <h3>5 tipos</h3>
            <p>Histórica, Citação/Dado, Hipotética, Conceitual, Contraste — todos terminam com tese</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Funil</h3>
            <p>Começa amplo → aprofunda → conecta ao recorte → tese específica</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>5–7 linhas</h3>
            <p>Ideal para a introdução — nem curta demais, nem longa demais</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Sem clichês</h3>
            <p>"Desde os primórdios...", "Com a globalização..." — proibidos</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Tese na última linha</h3>
            <p>Específica, argumentável, coerente — encerra a introdução com posicionamento</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Use dados reais</h3>
            <p>IBGE, OMS, INEP, IPEA — números concretos elevam C2</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificar tipo de introdução"
          statement={
            <p>
              A introdução que começa com <em>"Segundo dados do IBGE de 2022, cerca de 33 milhões
              de brasileiros vivem em situação de insegurança alimentar grave, número que triplicou
              durante a pandemia de Covid-19..."</em> pertence a qual tipo de contextualização?
            </p>
          }
          options={[
            { letter: "a", text: "Contextualização histórica — faz referência a um período específico do passado." },
            { letter: "b", text: "Situação hipotética — convida o leitor a imaginar o problema." },
            { letter: "c", text: "Citação ou dado estatístico — abre com fonte confiável e dado concreto.", correct: true },
            { letter: "d", text: "Definição conceitual — define o que é insegurança alimentar." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. A abertura com "Segundo dados do IBGE"
              é característica da introdução por <em>citação ou dado estatístico</em>, que usa
              uma fonte confiável para conferir credibilidade imediata ao texto. O dado (33 milhões
              em insegurança alimentar) cumpre a função de evidenciar a gravidade do problema
              antes de apresentar o argumento da tese. Esse tipo de abertura é especialmente
              valorizado em C2 por demonstrar repertório factual.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificar clichê na abertura"
          statement={
            <p>
              Identifique o clichê problemático na seguinte abertura de introdução:
              <em>"Desde os primórdios da humanidade, a sociedade enfrenta desigualdades que
              prejudicam os mais vulneráveis. Com o advento da globalização, esse problema
              se agravou ainda mais, e hoje, nos tempos atuais, precisamos buscar soluções."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Apenas 'nos tempos atuais' é clichê — as demais expressões são aceitáveis." },
            { letter: "b", text: "Todas as expressões destacadas são clichês: 'primórdios da humanidade', 'advento da globalização' e 'nos tempos atuais', tornando a abertura vaga e sem informação.", correct: true },
            { letter: "c", text: "O problema não é o clichê, mas a falta de dado estatístico para fundamentar a afirmação." },
            { letter: "d", text: "Apenas 'advento da globalização' é problemático; as demais expressões são aceitáveis em redações formais." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. As três expressões são clichês
              clássicos do ENEM: "primórdios da humanidade" é vaga e não informa nada;
              "advento da globalização" é usada indiscriminadamente sem conexão com o tema;
              "nos tempos atuais" é redundante e óbvia. Juntas, essas três expressões em
              um único parágrafo sinalizam ao corretor ausência de repertório específico e
              tendem a rebaixar a nota em C2. A regra é: se a frase pode ser usada em qualquer
              tema do ENEM, ela é clichê e deve ser eliminada.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escrever introdução hipotética para segurança pública"
          statement={
            <p>
              Para o tema <em>"A crise de segurança pública nas periferias urbanas brasileiras"</em>,
              qual alternativa apresenta a introdução por situação hipotética mais adequada e
              completa — com cenário plausível, dado real e tese no final?
            </p>
          }
          options={[
            { letter: "a", text: "'Imagine um policial que trabalha nas periferias do Rio de Janeiro. Ele enfrenta muitos desafios todos os dias. A segurança pública é um problema grave no Brasil.'" },
            { letter: "b", text: "'Imagine um jovem de 17 anos que mora em uma favela de São Paulo e precisa percorrer 4 quilômetros a pé para chegar à escola, atravessando territórios disputados por facções. Para ele, o direito à educação e o direito à segurança são contradições vividas na pele. Segundo o Atlas da Violência, as periferias concentram 70% dos homicídios do país, vitimando majoritariamente jovens negros. A segurança pública, portanto, é uma questão de desigualdade racial e territorial que exige políticas integradas de desenvolvimento social, e não apenas de policiamento.'", correct: true },
            { letter: "c", text: "'Suponha que o Brasil aumentasse em 50% o número de policiais. Isso resolveria o problema da violência? Talvez sim, talvez não. A verdade é que a segurança pública é complexa e precisa de muitos investimentos.'" },
            { letter: "d", text: "'Nos tempos atuais, a violência é um problema que afeta muitas pessoas nas cidades. Com o avanço das facções criminosas, o Estado perdeu o controle das periferias, e agora precisamos de soluções urgentes.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Essa introdução tem todos os elementos
              de qualidade: (1) cenário hipotético plausível e humanizado (jovem de 17 anos,
              situação concreta); (2) conexão com a realidade por dado factual (Atlas da
              Violência, 70% dos homicídios em periferias); (3) tese forte na última frase
              (problema de desigualdade racial e territorial, não apenas policiamento).
              A alternativa (a) é rasa; (c) levanta questão sem posicionamento; (d) usa
              clichê "nos tempos atuais".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Trabalho infantil — tipo de introdução mais eficaz"
          statement={
            <p>
              Para o tema <em>"Trabalho infantil no Brasil: causas e consequências"</em>,
              qual tipo de introdução seria mais eficaz e por quê?
            </p>
          }
          options={[
            { letter: "a", text: "Definição conceitual — porque 'trabalho infantil' precisa ser definido com precisão técnica antes de qualquer argumentação." },
            { letter: "b", text: "Contextualização histórica — porque o trabalho infantil tem raízes no período colonial e imperial, o que explica sua persistência estrutural no Brasil contemporâneo.", correct: true },
            { letter: "c", text: "Comparação/contraste — porque comparar o Brasil com países desenvolvidos que eliminaram o trabalho infantil é mais persuasivo." },
            { letter: "d", text: "Situação hipotética — porque criar um cenário imaginário é sempre mais impactante do que dados ou contexto histórico." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A contextualização histórica é
              especialmente eficaz para o tema do trabalho infantil porque permite mostrar
              como o problema tem raízes na escravidão (crianças escravizadas), no trabalho
              infantil regulamentado pelo Código Civil de 1916 (que permitia trabalho a
              partir de 12 anos), e na herança de uma cultura que normalizou o trabalho
              precoce das crianças pobres como "formação de caráter". Essa ancoragem histórica
              fortalece a tese sobre as causas estruturais do problema. A definição conceitual
              (a) é técnica mas fria; o contraste com outros países (c) pode desviar do
              contexto nacional; a hipotética (d) pode funcionar, mas é menos eficaz que
              a histórica para um problema com raízes tão definidas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Diagnosticar introdução com problema e reescrever tese"
          statement={
            <p>
              Leia a introdução com problema: <em>"A internet é muito importante para as
              pessoas hoje em dia. Todo mundo usa o celular e as redes sociais. Mas nem
              todos têm acesso à internet no Brasil. Isso é um problema que o governo
              precisa resolver."</em> Quais são os problemas e qual seria a última frase
              reescrita como tese adequada?
            </p>
          }
          options={[
            { letter: "a", text: "Problemas: uso de linguagem informal ('todo mundo'), ausência de dado, tese vaga. Tese reescrita: 'A exclusão digital, decorrente da histórica concentração de infraestrutura nas regiões metropolitanas, aprofunda desigualdades e demanda políticas públicas de universalização da conectividade.'", correct: true },
            { letter: "b", text: "Problemas: apenas a última frase é problemática. Tese reescrita: 'O governo deve criar mais programas de internet gratuita para a população carente.'" },
            { letter: "c", text: "Não há problema na introdução — ela é adequada para um texto dissertativo do ENEM." },
            { letter: "d", text: "Problemas: falta de citação e de contextualização histórica. Tese reescrita: 'Desde os primórdios da globalização, o acesso à internet tornou-se fundamental para o desenvolvimento social.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. A introdução tem múltiplos problemas:
              (1) <em>linguagem informal</em> ("todo mundo usa o celular") — incompatível com
              C1; (2) <em>ausência de dado</em> — nenhuma fonte ou estatística que fundamente
              a gravidade do problema; (3) <em>ausência de contextualização</em> — não há
              ancoragem histórica, conceitual ou estatística; (4) <em>tese vaga</em> — "o
              governo precisa resolver" não especifica causa, consequência nem tipo de
              intervenção. A tese reescrita em (a) corrige todos esses problemas: é específica
              (concentração de infraestrutura), aponta consequência (aprofundamento de
              desigualdades) e indica solução (políticas de universalização).
            </p>
          }
        />
      </section>
    </article>
  );
}
