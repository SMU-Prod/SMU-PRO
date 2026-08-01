"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 2</span>
          <h1>História como ciência: fontes históricas, tempo histórico e historiografia</h1>
          <p>
            A História não é um simples relato do passado, mas uma ciência que produz conhecimento
            crítico sobre as sociedades humanas ao longo do tempo. Compreender o que é a História
            como disciplina científica — seus métodos, seus objetos, suas limitações e seus debates
            internos — é indispensável tanto para a prova do ENEM quanto para o exercício da
            cidadania. Neste capítulo, exploraremos a evolução do pensamento historiográfico desde
            Heródoto até a Nova História, os tipos de fontes que os historiadores utilizam, os
            conceitos fundamentais de tempo histórico e periodização, e a distinção entre fato,
            evento, processo e estrutura.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">O que é História</span>
        <h2>1. História: definição, objeto e método</h2>
        <p>
          A palavra "história" vem do grego <em>historía</em>, que significa investigação ou
          pesquisa. O grego Heródoto de Halicarnasso (484–425 a.C.), considerado o "pai da
          História", foi o primeiro a usar esse termo para designar uma investigação sistemática
          sobre o passado humano em sua obra sobre as Guerras Médicas entre gregos e persas.
          No entanto, Heródoto ainda misturava fatos verificáveis com mitos e narrativas
          lendárias. Seu contemporâneo Tucídides (460–400 a.C.) foi mais rigoroso na busca
          por evidências e na análise de causas políticas, aproximando-se mais do que hoje
          chamamos de método histórico.
        </p>
        <p>
          A História como ciência moderna — com método crítico, uso sistemático de fontes e
          construção de interpretações fundamentadas — consolida-se no século XIX, com a
          chamada <strong>Escola Histórica Alemã</strong>, liderada por Leopold von Ranke
          (1795–1886). Ranke propôs que a tarefa do historiador era descrever "como as coisas
          realmente aconteceram" (<em>wie es eigentlich gewesen</em>), com base em documentos
          escritos preservados em arquivos. Esse positivismo histórico dominou a historiografia
          por décadas, mas foi duramente criticado no século XX por sua excessiva ênfase em
          documentos oficiais e sua pretensão de objetividade total.
        </p>
        <p>
          Hoje, a História é compreendida como uma <strong>construção interpretativa</strong>:
          o historiador seleciona fontes, formula perguntas, aplica métodos e produz uma
          narrativa que é sempre parcial, situada e sujeita a revisão. Isso não significa
          que "qualquer interpretação vale" — a história é regida por regras metodológicas
          rigorosas —, mas significa que a neutralidade absoluta é impossível. Todo historiador
          está situado em um tempo, uma cultura, uma classe social, um gênero.
        </p>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Historiografia</span>
        <h2>2. A evolução do pensamento historiográfico</h2>
        <p>
          A historiografia é a história da própria História — o estudo de como os historiadores
          interpretaram o passado em diferentes épocas. Cada escola historiográfica reflete os
          valores, as preocupações e os métodos de seu tempo.
        </p>
        <p>
          A <strong>Escola dos Annales</strong>, fundada na França em 1929 pelos historiadores
          Marc Bloch e Lucien Febvre, foi a maior revolução da historiografia do século XX.
          Os Annales criticaram a história política e événementielle (dos eventos) de Ranke
          e propuseram uma história total, que integrasse economia, sociedade, mentalidades
          e meio ambiente. A segunda geração dos Annales, liderada por Fernand Braudel
          (1902–1985), desenvolveu o conceito de <strong>longa duração</strong>: estruturas
          profundas — geográficas, climáticas, demográficas — que mudam muito lentamente
          e moldam a vida humana mais do que os eventos políticos.
        </p>
        <p>
          A <strong>Nova História</strong>, a partir da década de 1970, ampliou ainda mais
          os objetos e sujeitos da história. Se Ranke se concentrava em reis e diplomatas,
          a Nova História passou a estudar camponeses, mulheres, crianças, loucos, sexualidade,
          alimentação, morte, religiosidade popular. Figuras como Georges Duby, Jacques Le Goff,
          E. P. Thompson (história vista "de baixo") e Carlo Ginzburg (micro-história)
          transformaram radicalmente o campo. No Brasil, esse movimento inspirou pesquisas
          sobre escravidão, quilombos, trabalhadores e populações indígenas que antes eram
          invisíveis na historiografia oficial.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Escola Historiográfica</th>
                <th>Período</th>
                <th>Foco principal</th>
                <th>Representantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>História Clássica (Antiga)</td>
                <td>Séc. V a.C.</td>
                <td>Guerras, reis, política</td>
                <td>Heródoto, Tucídides</td>
              </tr>
              <tr>
                <td>Positivismo Histórico</td>
                <td>Séc. XIX</td>
                <td>Documentos oficiais, "fatos como aconteceram"</td>
                <td>Ranke, Michelet</td>
              </tr>
              <tr>
                <td>Marxismo histórico</td>
                <td>Séc. XIX–XX</td>
                <td>Luta de classes, modos de produção</td>
                <td>Marx, Engels, Hobsbawm</td>
              </tr>
              <tr>
                <td>Escola dos Annales</td>
                <td>1929–hoje</td>
                <td>História total: economia, sociedade, mentalidades</td>
                <td>Bloch, Febvre, Braudel</td>
              </tr>
              <tr>
                <td>Nova História</td>
                <td>1970–hoje</td>
                <td>Sujeitos marginalizados, cotidiano, cultura</td>
                <td>Le Goff, Thompson, Ginzburg</td>
              </tr>
              <tr>
                <td>História Pós-Colonial</td>
                <td>1980–hoje</td>
                <td>Perspectivas não-europeias, colonialidade do poder</td>
                <td>Fanon, Said, Spivak, Quijano</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Linha do tempo da historiografia ocidental">
            <rect x="0" y="0" width="720" height="180" fill="#f8f9fa" rx="8"/>
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Evolução da Historiografia Ocidental</text>

            {/* Linha do tempo */}
            <line x1="40" y1="80" x2="680" y2="80" stroke="#333" strokeWidth="2"/>

            {/* Pontos e labels */}
            <circle cx="80" cy="80" r="8" fill="#4361ee"/>
            <text x="80" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4361ee">Heródoto</text>
            <text x="80" y="100" textAnchor="middle" fontSize="8" fill="#555">~450 a.C.</text>

            <circle cx="200" cy="80" r="8" fill="#3a0ca3"/>
            <text x="200" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3a0ca3">Positivismo</text>
            <text x="200" y="100" textAnchor="middle" fontSize="8" fill="#555">Séc. XIX</text>
            <text x="200" y="112" textAnchor="middle" fontSize="8" fill="#555">(Ranke)</text>

            <circle cx="340" cy="80" r="8" fill="#7209b7"/>
            <text x="340" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7209b7">Annales</text>
            <text x="340" y="100" textAnchor="middle" fontSize="8" fill="#555">1929</text>
            <text x="340" y="112" textAnchor="middle" fontSize="8" fill="#555">(Bloch/Febvre)</text>

            <circle cx="470" cy="80" r="8" fill="#f72585"/>
            <text x="470" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f72585">Nova História</text>
            <text x="470" y="100" textAnchor="middle" fontSize="8" fill="#555">1970s</text>
            <text x="470" y="112" textAnchor="middle" fontSize="8" fill="#555">(Le Goff)</text>

            <circle cx="600" cy="80" r="8" fill="#b5179e"/>
            <text x="600" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b5179e">Pós-Colonial</text>
            <text x="600" y="100" textAnchor="middle" fontSize="8" fill="#555">1980s+</text>
            <text x="600" y="112" textAnchor="middle" fontSize="8" fill="#555">(Said, Spivak)</text>

            {/* Seta */}
            <polygon points="680,76 690,80 680,84" fill="#333"/>

            <text x="360" y="155" textAnchor="middle" fontSize="10" fill="#555">Cada escola amplia objetos, sujeitos e métodos — nenhuma substituição total, mas acumulação crítica</text>
          </svg>
          <figcaption>Linha do tempo simplificada da evolução do pensamento historiográfico ocidental, da Antiguidade ao presente.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Históricas</span>
        <h2>3. Tipos de fontes históricas: o que os historiadores usam</h2>
        <p>
          Fontes históricas são todos os vestígios do passado que o historiador utiliza para
          construir seu conhecimento. A ampliação do conceito de fonte ao longo do século XX
          foi uma das maiores transformações da disciplina: se antes apenas documentos escritos
          eram considerados fontes legítimas, hoje qualquer evidência do passado humano pode
          ser objeto de análise histórica.
        </p>
        <p>
          A distinção mais fundamental é entre <strong>fontes primárias</strong> e
          <strong> fontes secundárias</strong>. Fontes primárias são os vestígios originais
          do período estudado — produzidos na época, seja por participantes dos eventos, seja
          por contemporâneos. Fontes secundárias são interpretações produzidas posteriormente,
          como livros de história escritos por historiadores que analisam eventos passados.
          No ENEM, a distinção entre os dois tipos é frequentemente testada.
        </p>
        <p>
          Dentro das fontes primárias, há uma grande variedade de tipos. As
          <strong> fontes documentais escritas</strong> incluem cartas, decretos, leis, diários,
          jornais, contratos e atas. As <strong>fontes iconográficas</strong> incluem pinturas,
          gravuras, fotografias, mapas e charges. As <strong>fontes materiais ou arqueológicas</strong>
          incluem artefatos, ferramentas, arquitetura, moedas e objetos do cotidiano. As
          <strong> fontes orais</strong> são depoimentos, entrevistas e tradições transmitidas
          pela oralidade — fundamentais para a história de povos sem escrita, como muitos povos
          africanos e indígenas. As <strong>fontes digitais</strong>, cada vez mais presentes,
          incluem sites, redes sociais, e-mails e dados digitais.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Diagrama classificando os tipos de fontes históricas">
            <rect x="0" y="0" width="720" height="200" fill="#f8f9fa" rx="8"/>
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Classificação das Fontes Históricas</text>

            {/* Nó central */}
            <ellipse cx="360" cy="100" rx="60" ry="30" fill="#4361ee"/>
            <text x="360" y="96" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">FONTES</text>
            <text x="360" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">HISTÓRICAS</text>

            {/* Ramo esquerdo: Primárias */}
            <line x1="300" y1="95" x2="200" y2="70" stroke="#3a0ca3" strokeWidth="2"/>
            <rect x="120" y="50" width="80" height="38" rx="6" fill="#3a0ca3"/>
            <text x="160" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">PRIMÁRIAS</text>
            <text x="160" y="80" textAnchor="middle" fontSize="8" fill="#ddd">da época</text>

            {/* Sub-ramos primárias */}
            <line x1="120" y1="65" x2="70" y2="45" stroke="#7209b7" strokeWidth="1.5"/>
            <rect x="5" y="30" width="65" height="28" rx="4" fill="#7209b7" opacity="0.8"/>
            <text x="37" y="44" textAnchor="middle" fontSize="8" fill="#fff">Documentais</text>
            <text x="37" y="55" textAnchor="middle" fontSize="7" fill="#ddd">(cartas, leis)</text>

            <line x1="120" y1="75" x2="70" y2="95" stroke="#7209b7" strokeWidth="1.5"/>
            <rect x="5" y="80" width="65" height="28" rx="4" fill="#7209b7" opacity="0.8"/>
            <text x="37" y="94" textAnchor="middle" fontSize="8" fill="#fff">Iconográficas</text>
            <text x="37" y="105" textAnchor="middle" fontSize="7" fill="#ddd">(imagens)</text>

            <line x1="160" y1="88" x2="90" y2="130" stroke="#7209b7" strokeWidth="1.5"/>
            <rect x="15" y="122" width="75" height="28" rx="4" fill="#7209b7" opacity="0.8"/>
            <text x="52" y="136" textAnchor="middle" fontSize="8" fill="#fff">Materiais</text>
            <text x="52" y="147" textAnchor="middle" fontSize="7" fill="#ddd">(artefatos)</text>

            {/* Ramo direito: Secundárias */}
            <line x1="420" y1="95" x2="520" y2="70" stroke="#f72585" strokeWidth="2"/>
            <rect x="520" y="50" width="80" height="38" rx="6" fill="#f72585"/>
            <text x="560" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">SECUNDÁRIAS</text>
            <text x="560" y="80" textAnchor="middle" fontSize="8" fill="#ddd">análise posterior</text>

            {/* Sub-ramos secundárias */}
            <line x1="600" y1="65" x2="650" y2="45" stroke="#b5179e" strokeWidth="1.5"/>
            <rect x="648" y="30" width="65" height="28" rx="4" fill="#b5179e" opacity="0.8"/>
            <text x="681" y="44" textAnchor="middle" fontSize="8" fill="#fff">Livros de</text>
            <text x="681" y="55" textAnchor="middle" fontSize="7" fill="#ddd">história</text>

            <line x1="600" y1="75" x2="650" y2="95" stroke="#b5179e" strokeWidth="1.5"/>
            <rect x="648" y="80" width="65" height="28" rx="4" fill="#b5179e" opacity="0.8"/>
            <text x="681" y="94" textAnchor="middle" fontSize="8" fill="#fff">Artigos</text>
            <text x="681" y="105" textAnchor="middle" fontSize="7" fill="#ddd">científicos</text>

            {/* Fontes orais - abaixo */}
            <line x1="360" y1="130" x2="360" y2="155" stroke="#480ca8" strokeWidth="2"/>
            <rect x="270" y="155" width="180" height="35" rx="6" fill="#480ca8"/>
            <text x="360" y="170" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Fontes Orais</text>
            <text x="360" y="183" textAnchor="middle" fontSize="8" fill="#ddd">Depoimentos, tradições, cantos — essenciais para povos ágrafos</text>
          </svg>
          <figcaption>Classificação das fontes históricas: primárias (documentais, iconográficas, materiais, orais) e secundárias (análises historiográficas posteriores).</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Fonte</th>
                <th>Exemplos</th>
                <th>Potencialidades</th>
                <th>Limitações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Documentos escritos (primários)</td>
                <td>Carta de Caminha, Código de Hamurabi, Constituição de 1988</td>
                <td>Perspectiva direta do período; linguagem e mentalidade da época</td>
                <td>Refletem apenas o ponto de vista do autor; silenciam grupos sem acesso à escrita</td>
              </tr>
              <tr>
                <td>Iconografia</td>
                <td>Pinturas de Debret, charges de Ângelo Agostini, fotografias do século XIX</td>
                <td>Revelam aspectos visuais da época; permitem análise de simbolismo e ideologia</td>
                <td>Interpretação exige contexto; imagens também têm ponto de vista</td>
              </tr>
              <tr>
                <td>Fontes materiais (arqueológicas)</td>
                <td>Sítios arqueológicos, cerâmica, ferramentas, moedas</td>
                <td>Permitem estudar períodos sem escrita; revelam cultura material</td>
                <td>Não fornecem informações diretas sobre intenções ou ideias</td>
              </tr>
              <tr>
                <td>Fontes orais</td>
                <td>Entrevistas com sobreviventes da ditadura, mitos indígenas, griots africanos</td>
                <td>Vozes de grupos historicamente silenciados; memória viva</td>
                <td>Sujeitas à memória seletiva; risco de anacronismo nas entrevistas</td>
              </tr>
              <tr>
                <td>Fontes secundárias</td>
                <td>Livros de história, artigos acadêmicos, documentários</td>
                <td>Síntese interpretativa com distância crítica; acesso a múltiplas fontes</td>
                <td>Já filtradas pela perspectiva do historiador; não substituem as fontes primárias</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tempo Histórico</span>
        <h2>4. Tempo cronológico versus tempo histórico</h2>
        <p>
          Uma das distinções mais importantes da teoria histórica é aquela entre <strong>tempo
          cronológico</strong> e <strong>tempo histórico</strong>. O tempo cronológico é linear,
          uniforme e mensurável: cada segundo tem a mesma duração, cada ano tem os mesmos 365 dias.
          O tempo histórico, por sua vez, é relativo e qualitativo: alguns períodos são carregados
          de transformações profundas em poucos anos (como a Revolução Francesa entre 1789 e 1799),
          enquanto outros se estendem por séculos com poucas mudanças visíveis.
        </p>
        <p>
          Fernand Braudel, da Escola dos Annales, desenvolveu uma teoria dos múltiplos tempos
          históricos. Para Braudel, a história se desdobra em três durações simultâneas: a
          <strong> curta duração</strong> (os eventos, as conjunturas políticas imediatas),
          a <strong>média duração</strong> (os ciclos econômicos, as tendências sociais que
          duram décadas) e a <strong>longa duração</strong> (as estruturas geográficas,
          demográficas e mentais que mudam muito lentamente, ao longo de séculos ou milênios).
        </p>
        <p>
          O conceito de longa duração é particularmente relevante para entender fenômenos como
          o <strong>racismo no Brasil</strong>: embora a escravidão tenha sido abolida formalmente
          em 1888, as estruturas de desigualdade racial construídas ao longo de 350 anos de
          escravidão persistem no tempo presente — são uma estrutura de longa duração. O ENEM
          frequentemente testa a capacidade de identificar continuidades históricas de longa
          duração em fenômenos contemporâneos.
        </p>

        <div className="lesson-highlight">
          <h3>As três durações de Braudel aplicadas ao Brasil</h3>
          <p>
            <strong>Curta duração (evento):</strong> A assinatura da Lei Áurea em 13 de maio de 1888 pela Princesa Isabel.<br/>
            <strong>Média duração (conjuntura):</strong> O processo de abolição gradual da escravidão entre 1850 (Lei Eusébio de Queirós) e 1888 — 38 anos de transição.<br/>
            <strong>Longa duração (estrutura):</strong> A desigualdade racial construída por 350 anos de escravidão, que ainda estrutura as relações sociais e econômicas no Brasil do século XXI.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Periodização</span>
        <h2>5. A periodização convencional e seus limites</h2>
        <p>
          A periodização é a divisão do tempo histórico em períodos com características comuns.
          A periodização tradicional ocidental divide a história em cinco grandes períodos:
          <strong> Pré-História</strong> (antes da escrita), <strong>Antiguidade</strong>
          (escrita até queda de Roma Ocidental, 476 d.C.), <strong>Idade Média</strong>
          (476 até queda de Constantinopla ou descoberta da América, 1453/1492),
          <strong> Idade Moderna</strong> (1453/1492 até Revolução Francesa, 1789) e
          <strong> Idade Contemporânea</strong> (1789 até hoje).
        </p>
        <p>
          É fundamental compreender que essa periodização é uma <strong>convenção analítica</strong>,
          não uma divisão objetiva da realidade. Ela foi criada por historiadores europeus do
          século XIX e reflete uma perspectiva eurocêntrica. Para a história da China, do
          Japão, da África ou das Américas, essa periodização frequentemente não faz sentido:
          a "queda de Roma" em 476 d.C. não teve qualquer impacto sobre os impérios asteca,
          inca ou mali. O ENEM valoriza a capacidade de problematizar esse eurocentrismo
          na periodização histórica.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Delimitação convencional</th>
                <th>Marco inicial/final</th>
                <th>Crítica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pré-História</td>
                <td>Surgimento do Homo sapiens → invenção da escrita</td>
                <td>~200.000 a.C. → ~3.500 a.C.</td>
                <td>Povos sem escrita não são "sem história"</td>
              </tr>
              <tr>
                <td>Antiguidade</td>
                <td>Escrita → queda de Roma Ocidental</td>
                <td>~3.500 a.C. → 476 d.C.</td>
                <td>Centrada em civilizações mediterrâneas</td>
              </tr>
              <tr>
                <td>Idade Média</td>
                <td>Queda de Roma → descoberta da América ou Queda de Constantinopla</td>
                <td>476 → 1453/1492</td>
                <td>Europeia; outras regiões vivem seus próprios processos</td>
              </tr>
              <tr>
                <td>Idade Moderna</td>
                <td>Descobertas até Revolução Francesa</td>
                <td>1453/1492 → 1789</td>
                <td>Início representa invasão e genocídio para povos americanos</td>
              </tr>
              <tr>
                <td>Idade Contemporânea</td>
                <td>Revolução Francesa até hoje</td>
                <td>1789 → presente</td>
                <td>Início eurocêntrico; mais abrangente para história global</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>6. Fato, evento, processo e estrutura</h2>
        <p>
          A análise histórica opera com quatro conceitos fundamentais que estruturam a compreensão
          do passado: <strong>fato</strong>, <strong>evento</strong>, <strong>processo</strong>
          e <strong>estrutura</strong>. Compreendê-los é essencial para responder questões
          do ENEM que pedem a identificação de causas, consequências e relações no tempo.
        </p>
        <p>
          O <strong>fato histórico</strong> não é qualquer acontecimento, mas aquele selecionado
          pelo historiador como relevante para compreender determinado processo. Essa seleção
          é sempre um ato interpretativo: a assinatura da Lei Áurea é um fato histórico não
          porque aconteceu, mas porque o historiador escolheu destacá-la como significativa.
          Todos os dias acontecem milhares de eventos; apenas alguns se tornam fatos históricos.
        </p>
        <p>
          O <strong>evento</strong> é a ocorrência específica e datável no tempo: a Proclamação
          da República em 15 de novembro de 1889, o início da Segunda Guerra Mundial em
          1° de setembro de 1939. O <strong>processo</strong> é uma série de eventos e
          transformações encadeados ao longo do tempo, com uma dinâmica interna: a industrialização
          do Brasil, o processo de abolição da escravidão, a democratização pós-1985. A
          <strong> estrutura</strong> é o conjunto de condições profundas e de longa duração que
          determinam o funcionamento de uma sociedade: a estrutura escravocrata, o capitalismo,
          o patriarcado, a divisão de classes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Exemplo concreto</th>
                <th>Duração típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fato histórico</td>
                <td>Acontecimento selecionado como historicamente relevante</td>
                <td>Assinatura da Lei Áurea (13/05/1888)</td>
                <td>Momento específico</td>
              </tr>
              <tr>
                <td>Evento</td>
                <td>Ocorrência datável e localizada</td>
                <td>Bombardeio de Hiroshima (6/08/1945)</td>
                <td>Horas, dias, semanas</td>
              </tr>
              <tr>
                <td>Processo</td>
                <td>Encadeamento de eventos e transformações</td>
                <td>A abolição gradual da escravidão (1850–1888)</td>
                <td>Anos a décadas</td>
              </tr>
              <tr>
                <td>Estrutura</td>
                <td>Condições profundas e de longa duração</td>
                <td>Racismo estrutural no Brasil pós-colonial</td>
                <td>Séculos a milênios</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes e África</span>
        <h2>7. Fontes históricas africanas e a perspectiva afrocêntrica</h2>
        <p>
          Um dos preconceitos mais arraigados da historiografia tradicional é a ideia de que
          a África é um continente "sem história escrita" e, portanto, sem história. Esse mito
          foi desmontado ao longo do século XX por historiadores africanos e africanistas que
          demonstraram a riqueza e diversidade das fontes históricas africanas e a sofisticação
          das civilizações que elas documentam.
        </p>
        <p>
          A África possui uma variedade enorme de fontes históricas: textos em árabe produzidos
          por estudiosos do Mali e Songai nos séculos XIV e XV (como os manuscritos de Timbuktu),
          crônicas escritas por historiadores da corte em suaíli e amárico, fontes arqueológicas
          riquíssimas (como os Grandes Zimbábues), tradições orais preservadas pelos
          <strong> griots</strong> (contadores de história africanos que memorizam genealogias
          e narrativas históricas por gerações), arte (bronzes do Benin, estatuária do Congo).
        </p>
        <p>
          A perspectiva <strong>afrocêntrica</strong>, desenvolvida por pensadores como Cheikh Anta Diop
          e Molefi Kete Asante, propõe que a história da África seja estudada a partir de referenciais
          africanos, e não apenas como apêndice da história europeia. Para o ENEM, isso significa
          reconhecer que o Egito Antigo era uma civilização africana (Kemet), que os impérios
          do Mali e Songai eram potências comerciais e culturais sofisticadas, e que a diáspora
          africana nas Américas trouxe culturas ricas e dinâmicas, não apenas mão de obra.
        </p>

        <div className="lesson-highlight">
          <h3>Manuscritos de Timbuktu: fontes primárias africanas</h3>
          <p>
            A cidade de Timbuktu, no atual Mali, foi um grande centro intelectual nos séculos
            XIV–XVI. A Universidade de Sankore reunia milhares de estudantes e produziu centenas
            de milhares de manuscritos em árabe sobre astronomia, matemática, medicina, filosofia
            e história. Esses manuscritos, muitos dos quais sobrevivem até hoje, demonstram a
            sofisticação intelectual das civilizações africanas medievais — muito além da imagem
            de "continente sem história" propagada pelo colonialismo europeu.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Memória e História</span>
        <h2>8. A diferença entre memória e história</h2>
        <p>
          Uma distinção fundamental para o ENEM é aquela entre <strong>memória</strong> e
          <strong> história</strong>. A memória é a lembrança viva do passado, carregada de
          emoção, identidade e pertencimento. É seletiva e subjetiva: lembramos o que nos
          importa, o que nos constitui como grupo. A memória coletiva é construída por
          comunidades — uma família, uma nação, um grupo étnico — e pode divergir
          profundamente da análise histórica crítica.
        </p>
        <p>
          A história, por sua vez, é o esforço científico de compreender o passado com base
          em evidências, método e distanciamento crítico. Enquanto a memória tende a glorificar
          ou vitimizar, a história procura compreender. O historiador Pierre Nora desenvolveu
          o conceito de <strong>lugares de memória</strong> (museus, monumentos, datas
          comemorativas, arquivos): são lugares onde a memória coletiva se cristaliza, muitas
          vezes com fins políticos e ideológicos.
        </p>
        <p>
          O ENEM frequentemente trabalha com a tensão entre memória e história. Por exemplo:
          a memória oficial sobre a Abolição da Escravidão celebra a "bondade" da Princesa Isabel,
          enquanto a análise histórica crítica mostra que a abolição foi resultado de décadas
          de resistência dos próprios escravizados, pressão internacional e crise econômica
          do escravismo. A data comemorativa (13 de maio) é um lugar de memória que esconde
          essa complexidade histórica.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Cidadania Histórica</span>
        <h2>9. Por que estudar História importa para a cidadania</h2>
        <p>
          O estudo da História não é um exercício nostálgico ou meramente acadêmico: é
          uma ferramenta fundamental para o exercício da cidadania. Compreender os processos
          que formaram as estruturas sociais, políticas e econômicas do presente — desigualdade,
          racismo, autoritarismo, democracia — é condição para agir criticamente sobre eles.
        </p>
        <p>
          O filósofo George Santayana disse que "aqueles que não se lembram do passado estão
          condenados a repeti-lo". Mais do que uma frase de efeito, essa afirmação aponta para
          a função social do conhecimento histórico: identificar padrões de autoritarismo,
          de exclusão e de resistência que se repetem em formas variadas. O nazismo não foi
          um acidente único: foi precedido por décadas de crise econômica, discurso de ódio
          e enfraquecimento das instituições democráticas — padrões que precisam ser reconhecidos.
        </p>
        <p>
          Para o ENEM, isso se traduz na habilidade de articular conhecimento histórico com
          análise do presente, identificando heranças, continuidades e rupturas. A prova
          não testa apenas o que você sabe sobre o passado, mas se você consegue usar esse
          conhecimento para compreender o mundo em que vive.
        </p>
      </section>

      {/* ===== SEÇÃO 10 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Tipos de fontes históricas"
          statement={
            <p>
              Uma pesquisadora estuda a vida cotidiana dos escravizados no Brasil no século XIX.
              Ela analisa cartas escritas por fazendeiros, registros de batismo de escravizados,
              fotografias da época, ferramentas encontradas em sítios arqueológicos e depoimentos
              de descendentes de escravizados registrados no século XX. Qual das fontes utilizadas
              constitui uma fonte primária do período estudado?
            </p>
          }
          options={[
            { letter: "a", text: "Os depoimentos de descendentes de escravizados registrados no século XX, pois relatam diretamente a experiência da escravidão." },
            { letter: "b", text: "Um livro sobre escravidão no Brasil publicado em 2015 por um historiador contemporâneo." },
            { letter: "c", text: "As fotografias do século XIX, os registros de batismo e as cartas dos fazendeiros, pois foram produzidas durante o período estudado.", correct: true },
            { letter: "d", text: "Os depoimentos de descendentes são mais confiáveis do que as cartas dos fazendeiros, pois não têm interesse em ocultar a realidade." },
            { letter: "e", text: "As ferramentas arqueológicas não são fontes históricas, pois não contêm informações escritas." },
          ]}
          resolution={
            <p>
              Fontes primárias são aquelas produzidas no período histórico estudado. As fotografias
              do século XIX, os registros de batismo e as cartas dos fazendeiros foram produzidos
              durante a escravidão e, portanto, são fontes primárias. Os depoimentos de descendentes
              do século XX são fontes primárias de memória oral, mas não do período estudado —
              são fontes indiretas sobre a escravidão, mediadas pela memória e transmissão oral.
              As ferramentas arqueológicas também são fontes primárias do período. O livro de
              2015 é uma fonte secundária.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Tempo histórico: continuidade e ruptura"
          statement={
            <div>
              <p>
                "A abolição da escravidão em 1888 representou o fim legal de um sistema que
                durante séculos fundamentou a economia e a sociedade brasileira. No entanto,
                a população negra não recebeu terra, educação nem qualquer forma de reparação.
                Décadas depois, o Brasil continua sendo um dos países com maior desigualdade
                racial do mundo, com negros representando a maioria dos mais pobres, dos
                presos e dos assassinados pela violência."
              </p>
              <p>
                O trecho acima ilustra principalmente qual conceito da teoria histórica?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Ruptura histórica, pois a abolição representou uma transformação radical na sociedade brasileira que inaugurou um novo período." },
            { letter: "b", text: "Evento histórico, pois a Lei Áurea de 1888 foi um acontecimento datado e localizado no tempo." },
            { letter: "c", text: "Continuidade estrutural de longa duração, pois as desigualdades raciais construídas durante séculos de escravidão persistem como estrutura no Brasil contemporâneo.", correct: true },
            { letter: "d", text: "Periodização histórica, pois o texto divide o Brasil em dois períodos: antes e depois da abolição." },
            { letter: "e", text: "Fonte secundária, pois o texto é uma análise crítica sobre a história brasileira." },
          ]}
          resolution={
            <p>
              O trecho descreve uma continuidade estrutural: embora a escravidão tenha sido
              abolida juridicamente (ruptura no nível do evento), as estruturas de desigualdade
              racial que ela criou persistem. Isso é exatamente o que Braudel chamou de longa
              duração: estruturas profundas que resistem a mudanças no nível dos eventos
              políticos. A escravidão criou um sistema de exclusão que não foi desmantelado
              pela simples assinatura de uma lei — exigiria políticas estruturais de inclusão,
              redistribuição e reparação que não foram implementadas. Essa é uma análise
              histórica fundamental para compreender o Brasil contemporâneo.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escola dos Annales e a crítica ao positivismo histórico"
          statement={
            <div>
              <p>
                Fernand Braudel, historiador da Escola dos Annales, escreveu: "A história
                événementielle [dos eventos] é a mais apaixonante das histórias, a mais rica
                em humanidade, a mais perigosa também [...] Estamos ainda, demasiadas vezes,
                prisioneiros dos acontecimentos, dos grandes eventos, das personalidades marcantes."
              </p>
              <p>
                A crítica de Braudel ao positivismo histórico de Ranke expressa a defesa de qual
                abordagem metodológica?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Da eliminação completa dos eventos políticos como objetos legítimos da pesquisa histórica, substituindo-os por análises puramente econômicas." },
            { letter: "b", text: "Da história como ciência objetiva que deve descrever os fatos exatamente como aconteceram, sem interpretação ou seleção." },
            { letter: "c", text: "Da análise das estruturas de longa duração — geográficas, econômicas, demográficas, mentais — que moldam a história humana mais profundamente do que os eventos políticos imediatos.", correct: true },
            { letter: "d", text: "Da história oral como único método válido para a recuperação do passado, substituindo os documentos escritos." },
            { letter: "e", text: "Do retorno à narrativa histórica centrada em grandes personagens e batalhas decisivas, como propunha a historiografia do século XVIII." },
          ]}
          resolution={
            <p>
              Braudel não quer eliminar os eventos, mas recolocá-los em perspectiva: os eventos
              são a "espuma das ondas", enquanto as estruturas profundas (a "maré") determinam
              os movimentos mais fundamentais da história. Sua crítica ao positivismo de Ranke
              é precisamente que este ficava preso nos eventos políticos (batalhas, tratados,
              decisões de reis) e perdia de vista as estruturas mais lentas e poderosas.
              A alternativa C captura corretamente essa proposta de história das estruturas
              de longa duração, que é o cerne da contribuição de Braudel à historiografia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Memória histórica e lugares de memória"
          statement={
            <div>
              <p>
                Em 2006, o governo federal criou a Comissão Nacional da Verdade, que concluiu
                seus trabalhos em 2014 com um relatório documentando 434 mortes e desaparecimentos
                durante a ditadura militar (1964–1985). O relatório causou reações contraditórias:
                parte da sociedade comemorou como avanço na verdade histórica; outra parte
                contestou as conclusões e defendeu uma "memória" diferente da ditadura.
              </p>
              <p>
                Essa disputa em torno do relatório da Comissão da Verdade ilustra principalmente:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Que é impossível conhecer o que realmente aconteceu durante a ditadura, pois os documentos foram destruídos." },
            { letter: "b", text: "Que a história e a memória são a mesma coisa, e que diferentes memórias têm igual validade científica." },
            { letter: "c", text: "A disputa entre análise histórica crítica (baseada em evidências e método) e memórias coletivas que constroem narrativas sobre o passado com funções identitárias e políticas no presente.", correct: true },
            { letter: "d", text: "Que relatórios de comissões governamentais são sempre mais confiáveis do que a memória individual." },
            { letter: "e", text: "A ausência de fontes primárias confiáveis sobre o período da ditadura militar, o que tornaria qualquer conclusão histórica inválida." },
          ]}
          resolution={
            <p>
              A disputa em torno da Comissão da Verdade é um caso exemplar da tensão entre
              história e memória. A Comissão produziu análise histórica baseada em evidências
              — documentos, depoimentos de sobreviventes, registros médicos, arquivos secretos.
              A contestação de parte da sociedade não é baseada em evidências contraditórias,
              mas em memórias coletivas que têm funções políticas no presente: grupos ligados
              à ditadura constroem uma memória que a legitima ou minimiza seus crimes.
              Isso demonstra que a memória é sempre uma construção presente sobre o passado,
              seletiva e orientada por interesses — diferente do esforço crítico da historiografia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Fontes orais e história indígena"
          statement={
            <div>
              <p>
                Historiadores que estudam os povos Guarani no Brasil colonial enfrentam o seguinte
                desafio: a maioria das fontes escritas sobre esses povos foi produzida por jesuítas,
                administradores coloniais e viajantes europeus — todos com perspectivas externas
                e frequentemente hostis. Para superar essa limitação, pesquisadores passaram a
                utilizar mitos, cantos rituais e tradições orais transmitidas pelas próprias
                comunidades Guarani até o presente.
              </p>
              <p>
                Esse procedimento metodológico representa:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Um erro metodológico, pois fontes orais são sempre menos confiáveis do que fontes escritas e não devem ser usadas em pesquisa histórica." },
            { letter: "b", text: "A ampliação das fontes históricas para incluir vozes de grupos historicamente silenciados pelas fontes escritas coloniais, superando o viés eurocêntrico da documentação colonial.", correct: true },
            { letter: "c", text: "A substituição total das fontes escritas coloniais pelas fontes orais indígenas, que seriam a única forma válida de conhecer essa história." },
            { letter: "d", text: "Uma abordagem anacrônica, pois tradições orais do presente não podem ser usadas para compreender o passado colonial." },
            { letter: "e", text: "A negação de que os jesuítas produziram fontes históricas relevantes sobre os povos Guarani." },
          ]}
          resolution={
            <p>
              O uso de fontes orais para complementar e questionar fontes escritas coloniais é
              um dos avanços mais importantes da historiografia contemporânea, especialmente
              para a história de povos que não produziam escrita ou cujos documentos foram
              destruídos. As tradições orais dos Guarani — mitos, cantos, genealogias —
              preservam memórias históricas que as fontes jesuíticas ignoram ou distorcem.
              Isso não significa que as fontes escritas coloniais devem ser descartadas,
              mas que precisam ser lidas criticamente e contrastadas com outras perspectivas.
              A ampliação das fontes históricas para incluir vozes marginalizadas é central
              à Nova História e ao pensamento pós-colonial.
            </p>
          }
        />
      </section>
    </article>
  );
}
