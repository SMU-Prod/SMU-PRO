"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 19</span>

          <h1>Teorias Evolutivas: Fixismo, Lamarckismo, Darwinismo e Neodarwinismo</h1>

          <p>
            De Aristóteles a Darwin, e de Darwin à síntese genética do século XX,
            o pensamento humano sobre a origem e a transformação das espécies
            percorreu um longo caminho. Neste capítulo você vai entender por que o
            fixismo entrou em colapso, como Lamarck inaugurou o evolucionismo
            formal, de que forma Darwin e Wallace construíram a teoria da seleção
            natural com base em evidências sólidas, e como a Teoria Sintética
            moderna unificou Darwinismo e Genética — tornando-se o paradigma
            científico mais bem suportado da Biologia. Todos esses temas são
            recorrentes no ENEM e nos principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 1 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>

        <h2>1. Fixismo e Criacionismo: quando as espécies eram imutáveis</h2>

        <p>
          Durante mais de dois mil anos a visão dominante sobre a natureza dos
          seres vivos foi o <strong>fixismo</strong>: as espécies teriam sido
          criadas exatamente como são hoje, sem qualquer alteração ao longo do
          tempo. Essa concepção foi sustentada tanto pela filosofia grega quanto
          pela tradição religiosa ocidental, e permaneceu praticamente
          incontestada até o final do século XVIII.
        </p>

        <p>
          Aristóteles (384–322 a.C.) organizou os seres vivos em uma{" "}
          <strong>Scala Naturae</strong> ("Escada da Natureza"), uma hierarquia
          estática do mais simples ao mais complexo, onde cada ser ocupava um
          degrau imutável. Séculos depois, o naturalista sueco{" "}
          <strong>Carl Lineu</strong> (1707–1778) — o criador da nomenclatura
          binomial e pai da taxonomia moderna — era inicialmente fixista: para ele,
          tantas espécies existiam quantas foram criadas no princípio. Porém, ao
          descobrir híbridos entre espécies, Lineu chegou a admitir a
          possibilidade de pequenas variações, abrindo uma fresta no muro fixista.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Aristóteles</h3>
            <p>
              Propôs a Scala Naturae: hierarquia fixa e imutável dos seres vivos,
              do mais simples ao ser humano.
            </p>
          </div>

          <div className="lesson-card">
            <span>⛪</span>
            <h3>Criacionismo</h3>
            <p>
              Cada espécie criada de forma imutável por intervenção divina; as
              origens relatadas em textos sagrados eram interpretadas literalmente.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Carl Lineu</h3>
            <p>
              Pai da taxonomia; nomenclatura binomial ainda em uso. Inicialmente
              fixista, vacilou ao encontrar híbridos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦕</span>
            <h3>Georges Cuvier</h3>
            <p>
              Paleontólogo fixista que explicava extinções por catástrofes
              ("catastrofismo"), não por evolução.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o fixismo entrou em colapso</h3>
          <p>
            A descoberta sistemática de <strong>fósseis</strong> em estratos
            geológicos revelou espécies extintas que ninguém conhecia — e que
            guardavam semelhanças óbvias com formas vivas. O geólogo{" "}
            <strong>Charles Lyell</strong> demonstrou em <em>Princípios de
            Geologia</em> (1830) que a Terra era vastamente mais antiga do que
            os cerca de 6.000 anos admitidos pela tradição, e que processos
            lentos e graduais poderiam remodelar continentes. Com uma Terra
            antiga e fósseis em transformação, o fixismo perdeu terreno
            irrecuperável.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 2 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Lamarck</span>

        <h2>2. Lamarckismo: a primeira teoria evolucionista coerente (1809)</h2>

        <p>
          Jean-Baptiste de Monet, cavaleiro de Lamarck (1744–1829), foi o
          primeiro naturalista a elaborar uma teoria sistemática da evolução
          biológica. Em sua obra <em>Philosophie Zoologique</em> (1809), Lamarck
          propôs que os organismos se transformam <strong>progressivamente</strong>{" "}
          ao longo do tempo em resposta às demandas do ambiente, e que essas
          transformações são transmitidas aos descendentes.
        </p>

        <p>
          Sua teoria repousa em dois pilares fundamentais:
        </p>

        <div className="lesson-highlight">
          <h3>1. Lei do uso e do desuso</h3>
          <p>
            O uso repetido de um órgão ou estrutura ao longo da vida de um
            indivíduo desenvolve e hipertrofia esse órgão, tornando-o maior,
            mais forte ou mais eficiente. Por outro lado, a falta de uso leva
            à atrofia e eventual redução do órgão. Lamarck via nessa lei o motor
            das mudanças morfológicas que ocorrem em cada geração.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>2. Lei da herança dos caracteres adquiridos</h3>
          <p>
            As alterações produzidas pelo uso e desuso durante a vida de um
            indivíduo seriam <strong>herdadas pelos descendentes</strong>. Assim,
            cada geração partiria de uma base ligeiramente modificada pela
            geração anterior, e as populações iriam se transformando
            progressivamente em resposta às pressões ambientais.
          </p>
        </div>

        <p>
          O exemplo mais famoso — e mais cobrado no ENEM — é o do{" "}
          <strong>pescoço da girafa segundo Lamarck</strong>: os ancestrais
          viviam em savanas com pouca vegetação baixa e precisavam esticar o
          pescoço para alcançar folhas nos galhos altos. Esse esforço contínuo
          ao longo da vida <em>produzia</em> um pescoço um pouco mais longo.
          Esse pescoço mais longo era herdado pelos filhotes, que por sua vez
          continuavam a esticá-lo ainda mais, e assim por diante. Geração após
          geração, as girafas teriam adquirido o pescoço longo que vemos hoje.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>O que Lamarck acertou</h3>
            <p>
              Reconheceu que as espécies mudam ao longo do tempo e que o
              ambiente exerce influência sobre essa mudança — rompendo com o
              fixismo.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>O que está errado</h3>
            <p>
              Caracteres adquiridos durante a vida <strong>não são herdados</strong>.
              Mudanças no fenótipo por uso e desuso não alteram o DNA da
              linhagem germinativa.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐭</span>
            <h3>Experimento de Weismann</h3>
            <p>
              Cortou a cauda de ratos por 22 gerações seguidas. Nenhum filhote
              nasceu sem cauda — refutando diretamente a herança de caracteres
              adquiridos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Barreira de Weismann</h3>
            <p>
              Células somáticas (corpo) não comunicam informações ao DNA das
              células germinativas (óvulos e espermatozoides) — logo, uso e
              desuso não herda.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 3 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Darwin e Wallace</span>

        <h2>3. Darwin, Wallace e a Teoria da Seleção Natural</h2>

        <p>
          Charles Darwin (1809–1882) embarcou em dezembro de 1831 no HMS Beagle
          para uma expedição científica que duraria cinco anos ao redor do mundo.
          Ao longo da viagem, Darwin colecionou espécimes, registrou variações
          geográficas em espécies semelhantes e ficou especialmente impressionado
          com os animais das <strong>Ilhas Galápagos</strong> — um arquipélago
          vulcânico no Pacífico, a cerca de 1.000 km da costa do Equador.
        </p>

        <p>
          Cada ilha de Galápagos tinha uma fauna ligeiramente diferente,
          notadamente os <strong>tentilhões</strong> (pássaros da família
          Thraupidae): embora claramente aparentados entre si, cada espécie
          possuía um tipo de bico adaptado ao alimento disponível na sua ilha —
          bicos fortes para sementes duras, finos para insetos, curvados para
          flores. Darwin percebeu que essas espécies deviam ter divergido de um
          ancestral comum que colonizou o arquipélago.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🛳️</span>
            <h3>1831–1836</h3>
            <p>
              Viagem do Beagle ao redor do mundo; Galápagos visitadas em 1835.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐦</span>
            <h3>Tentilhões de Darwin</h3>
            <p>
              14 espécies com bicos distintos; evidência de radiação adaptativa
              a partir de um ancestral comum.
            </p>
          </div>

          <div className="lesson-card">
            <span>📚</span>
            <h3>Influência de Malthus</h3>
            <p>
              Thomas Malthus mostrou que populações crescem mais rápido que
              recursos — implicando luta pela sobrevivência.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌋</span>
            <h3>Influência de Lyell</h3>
            <p>
              Terra antiga e em constante transformação; tempo suficiente para
              a evolução gradual das espécies.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Alfred Russel Wallace — o coautor esquecido</h3>
          <p>
            Enquanto Darwin acumulava evidências por 20 anos sem publicar,
            Alfred Russel Wallace chegou, de forma independente, às mesmas
            conclusões estudando a fauna do arquipélago malaio (Indonésia).
            Em 1858 enviou a Darwin um manuscrito descrevendo a seleção
            natural. Os dois apresentaram conjuntamente suas ideias à{" "}
            <strong>Sociedade Lineana de Londres</strong> em julho de 1858.
            Darwin publicou <em>A Origem das Espécies</em> em novembro de 1859.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 160" width="720" height="160" aria-label="Rota simplificada da viagem do Beagle e pontos-chave">
            <rect x={0} y={0} width={720} height={160} rx={14} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1.5} />
            {/* linha da rota */}
            <path d="M 60 80 C 130 50, 200 110, 280 90 C 340 75, 400 120, 480 80 C 540 50, 600 90, 660 70"
              fill="none" stroke="#2563eb" strokeWidth={2.5} strokeDasharray="8 4" />
            {/* pontos */}
            {[
              { cx: 60,  cy: 80,  label: "Plymouth\n(partida)", dy: 20 },
              { cx: 200, cy: 105, label: "Brasil", dy: 20 },
              { cx: 310, cy: 80,  label: "Patagônia\n(fósseis)", dy: 20 },
              { cx: 480, cy: 75,  label: "Galápagos\n★", dy: -14 },
              { cx: 660, cy: 68,  label: "Retorno\n1836", dy: 20 },
            ].map((p) => (
              <g key={p.label}>
                <circle cx={p.cx} cy={p.cy} r={7} fill="#2563eb" opacity={0.85} />
                <text x={p.cx} y={p.cy + p.dy} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#1e3a8a">{p.label}</text>
              </g>
            ))}
            <text x={360} y={148} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">
              Rota simplificada da viagem do HMS Beagle (1831–1836)
            </text>
          </svg>
          <figcaption>
            A viagem do Beagle levou Darwin por costas da América do Sul, das ilhas
            Galápagos e do Pacífico — acúmulo decisivo de evidências para a teoria
            da seleção natural.
          </figcaption>
        </figure>
      </section>

      {/* ─────────────────────────────── SEÇÃO 4 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Seleção Natural</span>

        <h2>4. Os Pilares do Darwinismo e a Lógica da Seleção Natural</h2>

        <p>
          O Darwinismo explica a evolução por um mecanismo elegantemente simples:
          a <strong>seleção natural</strong>. O argumento de Darwin é quase
          silogístico — se você aceita as três premissas, a conclusão é
          inevitável:
        </p>

        <div className="lesson-highlight">
          <h3>O argumento darwiniano (passo a passo)</h3>
          <ol>
            <li>
              <strong>Variação:</strong> os indivíduos de uma população não são
              idênticos — existem diferenças naturais em morfologia, fisiologia
              e comportamento;
            </li>
            <li>
              <strong>Hereditariedade:</strong> boa parte dessas variações é
              transmitida dos pais para os filhos;
            </li>
            <li>
              <strong>Superprodução:</strong> todos os seres vivos produzem mais
              descendentes do que o ambiente consegue sustentar (influência de
              Malthus);
            </li>
            <li>
              <strong>Luta pela sobrevivência:</strong> com recursos limitados,
              há competição — nem todos sobrevivem e se reproduzem;
            </li>
            <li>
              <strong>Sobrevivência diferencial:</strong> os indivíduos com
              variações mais favoráveis ao ambiente sobrevivem mais e deixam
              mais descendentes;
            </li>
            <li>
              <strong>Acúmulo:</strong> ao longo de muitas gerações, as variações
              favoráveis tornam-se mais frequentes na população — a espécie se
              transforma.
            </li>
          </ol>
        </div>

        <p>
          Atenção para uma diferença crucial em relação a Lamarck:{" "}
          <strong>no Darwinismo, a variação já existe na população antes de
          qualquer pressão ambiental</strong>. O ambiente não cria a variação
          — ele apenas <em>seleciona</em> as que já existem. Essa distinção é
          cobrada sistematicamente no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎲</span>
            <h3>Variação preexistente</h3>
            <p>
              A variação é anterior ao desafio ambiental; o ambiente apenas
              filtra quais indivíduos sobrevivem.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Luta pela vida</h3>
            <p>
              Recursos limitados + superprodução de descendentes = competição
              por espaço, alimento e parceiros.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏆</span>
            <h3>Reprodução diferencial</h3>
            <p>
              "Mais adaptado" significa <em>deixar mais descendentes férteis</em>,
              não ser mais forte ou mais inteligente.
            </p>
          </div>

          <div className="lesson-card">
            <span>⏳</span>
            <h3>Tempo geológico</h3>
            <p>
              O acúmulo de pequenas vantagens ao longo de milhões de gerações
              gera grandes transformações morfológicas.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 5 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Lamarck × Darwin</span>

        <h2>5. Comparação Direta: Lamarck × Darwin no pescoço da girafa</h2>

        <p>
          O exemplo do pescoço da girafa é o comparativo mais clássico entre as
          duas teorias e aparece com regularidade em provas. A diferença
          fundamental está em <strong>quando</strong> e <strong>como</strong> a
          variação surge:
        </p>

        <div className="lesson-figure-row">
          {/* Painel Lamarck */}
          <figure className="lesson-figure">
            <svg viewBox="0 0 260 260" width="260" height="260" aria-label="Explicação de Lamarck para o pescoço da girafa">
              <rect x={0} y={0} width={260} height={260} rx={14} fill="#fef9c3" stroke="#fbbf24" strokeWidth={1.5} />
              <text x={130} y={24} textAnchor="middle" fontSize={13} fontWeight={800} fill="#78350f">Lamarck</text>
              {/* Girafa 1 — pescoço curto */}
              <rect x={30} y={80} width={14} height={60} rx={4} fill="#d97706" />
              <ellipse cx={37} cy={75} rx={14} ry={14} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
              <text x={37} y={78} textAnchor="middle" fontSize={9} fill="#78350f">🦒</text>
              <text x={37} y={160} textAnchor="middle" fontSize={9} fill="#78350f">curto</text>
              {/* seta de esforço */}
              <text x={80} y={100} fontSize={10} fill="#92400e">estica →</text>
              {/* Girafa 2 — pescoço médio */}
              <rect x={120} y={65} width={14} height={75} rx={4} fill="#d97706" />
              <ellipse cx={127} cy={60} rx={14} ry={14} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
              <text x={127} y={63} textAnchor="middle" fontSize={9} fill="#78350f">🦒</text>
              <text x={127} y={160} textAnchor="middle" fontSize={9} fill="#78350f">médio</text>
              {/* seta herança */}
              <text x={168} y={100} fontSize={10} fill="#92400e">herda →</text>
              {/* Girafa 3 — pescoço longo */}
              <rect x={210} y={48} width={14} height={92} rx={4} fill="#d97706" />
              <ellipse cx={217} cy={43} rx={14} ry={14} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
              <text x={217} y={46} textAnchor="middle" fontSize={9} fill="#78350f">🦒</text>
              <text x={217} y={160} textAnchor="middle" fontSize={9} fill="#78350f">longo</text>
              {/* label explicação */}
              <text x={130} y={188} textAnchor="middle" fontSize={10} fill="#92400e">Uso →  alonga →  herda</text>
              <rect x={20} y={200} width={220} height={46} rx={8} fill="#fef3c7" stroke="#fbbf24" strokeWidth={1} />
              <text x={130} y={218} textAnchor="middle" fontSize={9.5} fill="#78350f">Variação produzida pelo esforço</text>
              <text x={130} y={234} textAnchor="middle" fontSize={9.5} fill="#78350f">individual e transmitida à prole</text>
            </svg>
            <figcaption>
              Para Lamarck, o esforço de esticar o pescoço durante a vida produz
              um pescoço maior, e essa mudança é herdada pelos filhotes.
            </figcaption>
          </figure>

          {/* Painel Darwin */}
          <figure className="lesson-figure">
            <svg viewBox="0 0 260 260" width="260" height="260" aria-label="Explicação de Darwin para o pescoço da girafa">
              <rect x={0} y={0} width={260} height={260} rx={14} fill="#dcfce7" stroke="#4ade80" strokeWidth={1.5} />
              <text x={130} y={24} textAnchor="middle" fontSize={13} fontWeight={800} fill="#14532d">Darwin</text>
              {/* população inicial variada */}
              <text x={130} y={44} textAnchor="middle" fontSize={10} fill="#166534">população inicial com variação natural</text>
              {/* 3 girafas com pescoços variados, lado a lado */}
              {[
                { x: 30,  neckH: 40, label: "curto" },
                { x: 115, neckH: 65, label: "médio" },
                { x: 200, neckH: 88, label: "longo ★" },
              ].map((g) => (
                <g key={g.label}>
                  <rect x={g.x + 3} y={148 - g.neckH} width={12} height={g.neckH} rx={4} fill="#22c55e" />
                  <ellipse cx={g.x + 9} cy={142 - g.neckH} rx={12} ry={12} fill="#4ade80" stroke="#22c55e" strokeWidth={1.5} />
                  <text x={g.x + 9} y={168} textAnchor="middle" fontSize={9} fill="#14532d">{g.label}</text>
                </g>
              ))}
              {/* seta seleção */}
              <text x={130} y={192} textAnchor="middle" fontSize={10} fontWeight={700} fill="#15803d">seleção natural</text>
              <polygon points="115,196 145,196 130,204" fill="#15803d" />
              {/* resultado */}
              <rect x={20} y={210} width={220} height={40} rx={8} fill="#f0fdf4" stroke="#4ade80" strokeWidth={1} />
              <text x={130} y={226} textAnchor="middle" fontSize={9.5} fill="#14532d">Variação prévia; pescoço longo é</text>
              <text x={130} y={242} textAnchor="middle" fontSize={9.5} fill="#14532d">selecionado por sobreviver mais</text>
            </svg>
            <figcaption>
              Para Darwin, a variação no comprimento do pescoço já existia na
              população. Em épocas de escassez, as girafas de pescoço longo
              sobrevivem e deixam mais descendentes.
            </figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Lamarck (1809)</th>
                <th>Darwin (1859)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem da variação</td>
                <td>Produzida durante a vida pelo uso e desuso</td>
                <td>Preexistente na população (aleatória)</td>
              </tr>
              <tr>
                <td>Papel do ambiente</td>
                <td>Induz diretamente a mudança no indivíduo</td>
                <td>Seleciona variantes já existentes</td>
              </tr>
              <tr>
                <td>Herança</td>
                <td>Caracteres adquiridos são herdados</td>
                <td>Apenas a variação genética preexistente é herdada</td>
              </tr>
              <tr>
                <td>Unidade de seleção</td>
                <td>Indivíduo (se modifica durante a vida)</td>
                <td>Indivíduo (mas a mudança ocorre na população ao longo das gerações)</td>
              </tr>
              <tr>
                <td>Status atual</td>
                <td>Refutado experimentalmente (Weismann; genética)</td>
                <td>Base do paradigma evolutivo atual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 6 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Neodarwinismo</span>

        <h2>6. Teoria Sintética (Neodarwinismo): Darwin encontra Mendel</h2>

        <p>
          O maior ponto fraco da teoria de Darwin era que ele não sabia{" "}
          <em>de onde vinha</em> a variação nem{" "}
          <em>como ela era transmitida</em> com precisão. Gregor Mendel havia
          publicado as leis da herança em 1866, mas seu trabalho ficou ignorado
          por décadas. Com o redescobimento da genética mendeliana em 1900 e o
          surgimento da genética de populações nas décadas de 1920 e 1930, criou-
          se o arcabouço para unificar as duas tradições.
        </p>

        <p>
          Entre 1930 e 1950, um grupo de biólogos de diversas áreas — incluindo{" "}
          <strong>Theodosius Dobzhansky</strong> (genética),{" "}
          <strong>Ernst Mayr</strong> (zoologia e conceito biológico de espécie),{" "}
          <strong>Julian Huxley</strong> (biologia evolutiva) e{" "}
          <strong>George Gaylord Simpson</strong> (paleontologia) — construiu a{" "}
          <strong>Teoria Sintética da Evolução</strong>, também chamada de{" "}
          <strong>Neodarwinismo</strong> ou <strong>Síntese Moderna</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Fontes de variabilidade genética</h3>
          <ol>
            <li>
              <strong>Mutações gênicas e cromossômicas:</strong> alterações
              aleatórias na sequência do DNA ou na estrutura dos cromossomos;
              são a <em>matéria-prima primária</em> da evolução;
            </li>
            <li>
              <strong>Recombinação genética (crossing-over):</strong> durante a
              meiose, segmentos de cromossomos homólogos se trocam, gerando
              novas combinações de alelos;
            </li>
            <li>
              <strong>Segregação independente</strong> (2ª Lei de Mendel): genes
              em cromossomos diferentes são distribuídos de forma independente
              para os gametas;
            </li>
            <li>
              <strong>Reprodução sexuada:</strong> a união aleatória de gametas
              de dois indivíduos gera descendentes com combinações únicas de
              alelos.
            </li>
          </ol>
        </div>

        <div className="lesson-highlight">
          <h3>Forças evolutivas que alteram as frequências alélicas</h3>
          <ol>
            <li>
              <strong>Seleção natural:</strong> filtra os fenótipos — alelos que
              conferem maior aptidão (fitness) tornam-se mais frequentes;
            </li>
            <li>
              <strong>Deriva genética:</strong> flutuações aleatórias das
              frequências alélicas, com maior impacto em populações pequenas —
              pode fixar ou eliminar alelos por acaso, sem valor adaptativo;
            </li>
            <li>
              <strong>Fluxo gênico:</strong> migração de indivíduos (ou gametas)
              entre populações, que introduz ou remove alelos, homogeneizando
              populações;
            </li>
            <li>
              <strong>Mutação:</strong> introduz constantemente novos alelos na
              população, sendo a fonte última de toda variação genética.
            </li>
          </ol>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Mutação</h3>
            <p>
              Fonte primária de variação; aleatória em relação à adaptação —
              não é "guiada" pelo ambiente.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Recombinação</h3>
            <p>
              Crossing-over e segregação independente amplificam a variabilidade
              a cada geração.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌬️</span>
            <h3>Deriva genética</h3>
            <p>
              O acaso domina em populações pequenas: o efeito gargalo e o efeito
              fundador são exemplos clássicos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌍</span>
            <h3>Fluxo gênico</h3>
            <p>
              Migrações conectam populações e impedem a diferenciação; seu bloqueio
              favorece a especiação.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Ponto de atenção para o ENEM:</strong> no Neodarwinismo, as
            mutações são <strong>aleatórias e não dirigidas</strong> — elas não
            ocorrem "porque o organismo precisa". A seleção natural age
            posteriormente sobre a variação já existente. Qualquer alternativa
            que afirme que o ambiente "induz" mutações específicas está descrevendo
            Lamarckismo, não Neodarwinismo.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 7 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exemplo Clássico</span>

        <h2>7. Mariposas de Manchester — Seleção Natural em Ação</h2>

        <p>
          O caso das mariposas <em>Biston betularia</em> na Inglaterra vitoriana
          é o exemplo empírico mais célebre de seleção natural observada em tempo
          real, e aparece frequentemente em questões de vestibular e no ENEM.
        </p>

        <p>
          Antes da Revolução Industrial (séculos XVII–XVIII), os troncos das
          árvores na região de Manchester eram cobertos por <strong>líquens
          claros</strong>. A maioria das mariposas da espécie <em>B. betularia</em>{" "}
          era de coloração <strong>clara</strong>, o que lhes conferia{" "}
          <strong>camuflagem</strong> contra os troncos e as protegia de
          predadores (pássaros). A variante escura (melânica) existia, mas era
          rara e facilmente detectada e consumida.
        </p>

        <p>
          Com a industrialização, a fuligem das fábricas{" "}
          <strong>enegreceu os troncos</strong> e eliminou os líquens. A situação
          se inverteu: as mariposas claras passaram a se destacar nos troncos
          escuros e foram predadas em grande número; as mariposas escuras, agora
          camufladas, sobreviveram e se reproduziram mais. Em poucas décadas, a
          variante escura tornou-se <strong>dominante</strong> na população.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Mudança na frequência de mariposas claras e escuras com a Revolução Industrial">
            {/* fundo */}
            <rect x={0} y={0} width={700} height={200} rx={14} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={1.5} />
            {/* eixo y */}
            <line x1={70} y1={20} x2={70} y2={160} stroke="#374151" strokeWidth={1.5} />
            {/* eixo x */}
            <line x1={70} y1={160} x2={670} y2={160} stroke="#374151" strokeWidth={1.5} />
            {/* label eixos */}
            <text x={28} y={92} fontSize={11} fill="#374151" transform="rotate(-90,28,92)">Frequência (%)</text>
            <text x={370} y={185} textAnchor="middle" fontSize={11} fill="#374151">Tempo (gerações)</text>
            {/* curva mariposa clara — declina com industrialização */}
            <path d="M 70 30 C 160 32, 240 35, 300 80 C 360 125, 430 148, 520 152 C 580 154, 630 153, 670 152"
              fill="none" stroke="#e2e8f0" strokeWidth={3} />
            {/* curva mariposa escura — sobe */}
            <path d="M 70 152 C 160 150, 240 147, 300 110 C 360 72, 430 46, 520 38 C 580 34, 630 34, 670 34"
              fill="none" stroke="#1e293b" strokeWidth={3} />
            {/* linha Revolução Industrial */}
            <line x1={300} y1={20} x2={300} y2={160} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="6 4" />
            <text x={304} y={36} fontSize={10} fill="#ef4444">Revolução Industrial</text>
            {/* legenda */}
            <rect x={490} y={22} width={14} height={10} rx={2} fill="#e2e8f0" stroke="#94a3b8" strokeWidth={1} />
            <text x={510} y={32} fontSize={10} fill="#374151">clara (camuflada antes)</text>
            <rect x={490} y={40} width={14} height={10} rx={2} fill="#1e293b" />
            <text x={510} y={50} fontSize={10} fill="#374151">escura (selecionada depois)</text>
          </svg>
          <figcaption>
            A poluição industrial inverteu a pressão seletiva: as mariposas escuras
            passaram de raras a dominantes em poucas décadas — seleção natural
            direcional observada em tempo real.
          </figcaption>
        </figure>

        <p>
          Com a aprovação de legislações antipoluição na segunda metade do século
          XX, os troncos voltaram a clarear com a recuperação dos líquens, e as
          mariposas claras readquiriram vantagem seletiva — tornando-se novamente
          mais frequentes. O caso demonstra que a seleção natural é{" "}
          <strong>reversível</strong> e <strong>dependente do ambiente</strong>,
          nunca "progressiva" em sentido absoluto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Teoria</th>
                <th>Base da variação</th>
                <th>Mecanismo evolutivo</th>
                <th>Herança de adquiridos</th>
                <th>Status científico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fixismo</strong></td>
                <td>Sem variação; espécies imutáveis</td>
                <td>Nenhum</td>
                <td>Irrelevante</td>
                <td>Refutado</td>
              </tr>
              <tr>
                <td><strong>Lamarckismo</strong></td>
                <td>Uso e desuso geram variação durante a vida</td>
                <td>Necessidade + esforço individual</td>
                <td>Sim (refutado)</td>
                <td>Refutado</td>
              </tr>
              <tr>
                <td><strong>Darwinismo</strong></td>
                <td>Variação preexistente (origem não explicada)</td>
                <td>Seleção natural</td>
                <td>Não</td>
                <td>Parcialmente correto; sem mecanismo genético</td>
              </tr>
              <tr>
                <td><strong>Neodarwinismo</strong></td>
                <td>Mutações aleatórias + recombinação</td>
                <td>Seleção natural + deriva + fluxo gênico + mutação</td>
                <td>Não</td>
                <td>Paradigma científico atual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────── SEÇÃO 8 ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Modalidades de Seleção e Evidências</span>

        <h2>8. Modalidades de Seleção Natural e Evidências da Evolução</h2>

        <p>
          A seleção natural não age sempre da mesma forma sobre a variação
          fenotípica. Dependendo de qual extremo ou do valor médio da distribuição
          é favorecido, distinguem-se três modalidades principais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📈</span>
            <h3>Seleção direcional</h3>
            <p>
              Favorece um dos extremos da distribuição fenotípica. Resultado: a
              média da população desloca-se na direção do extremo favorecido.
              Exemplo: mariposas escuras de Manchester; resistência a
              antibióticos em bactérias.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔔</span>
            <h3>Seleção estabilizadora</h3>
            <p>
              Favorece os indivíduos com valores intermediários, eliminando os
              extremos. Resultado: a variabilidade diminui. Exemplo: peso ao
              nascer de bebês humanos (muito leve ou muito pesado aumenta
              mortalidade).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Seleção disruptiva</h3>
            <p>
              Favorece os dois extremos e elimina os intermediários. Resultado:
              a população se divide em dois grupos distintos — pode levar a
              especiação. Exemplo: bicos de tentilhões de Galápagos.
            </p>
          </div>

          <div className="lesson-card">
            <span>💞</span>
            <h3>Seleção sexual</h3>
            <p>
              Favorece características que aumentam o sucesso reprodutivo na
              escolha de parceiros. Pode produzir estruturas aparentemente
              desvantajosas para a sobrevivência (cauda do pavão, chifres
              de alce).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Principais evidências da evolução</h3>
          <p>
            A teoria evolutiva não repousa em um único tipo de evidência, mas em
            um conjunto convergente de fontes independentes:
          </p>
          <ul>
            <li>
              <strong>Paleontologia:</strong> fósseis mostram formas
              intermediárias e a progressão temporal das espécies (ex.:
              Archaeopteryx entre répteis e aves);
            </li>
            <li>
              <strong>Anatomia comparada:</strong> órgãos homólogos (mesma
              origem embrionária, funções diferentes — ex.: braço humano, asa de
              baleia, pata de cavalo) e órgãos vestigiais (ex.: apêndice humano,
              ossos pélvicos de baleias);
            </li>
            <li>
              <strong>Embriologia comparada:</strong> embriões de vertebrados
              muito distintos são morfologicamente semelhantes nos estágios
              iniciais;
            </li>
            <li>
              <strong>Biogeografia:</strong> a distribuição geográfica das
              espécies reflete sua história evolutiva (ex.: marsupiais
              concentrados na Austrália);
            </li>
            <li>
              <strong>Biologia molecular:</strong> genes homólogos compartilhados
              entre espécies distantes; análises filogenéticas de DNA confirmam
              as relações propostas pela morfologia.
            </li>
          </ul>
        </div>
      </section>

      {/* ─────────────────────────────── EXERCÍCIOS ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Lei do uso e desuso"
          statement={
            <p>
              De acordo com Lamarck, o pescoço das girafas teria se alongado
              porque os ancestrais esticavam repetidamente o pescoço para alcançar
              folhas altas, e essa característica era transmitida aos
              descendentes. Essa explicação envolve, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Seleção natural e mutação" },
            {
              letter: "b",
              text: "Lei do uso e desuso e herança dos caracteres adquiridos",
              correct: true,
            },
            { letter: "c", text: "Deriva genética e fluxo gênico" },
            { letter: "d", text: "Seleção natural e recombinação gênica" },
          ]}
          resolution={
            <p>
              A lei do uso e desuso diz que órgãos mais utilizados se
              desenvolvem; a lei da herança dos caracteres adquiridos diz que
              essas alterações são transmitidas à prole. Ambas são pilares do
              Lamarckismo. O experimento de Weismann (corte de caudas de ratos
              por 22 gerações) refutou diretamente a herança de caracteres
              adquiridos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Resistência bacteriana a antibióticos"
          statement={
            <p>
              Em um hospital, uma cepa de <em>Staphylococcus aureus</em> tornou-
              se resistente à meticilina (MRSA) após exposição prolongada ao
              antibiótico. Qual teoria evolutiva explica corretamente esse
              fenômeno?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Lamarckismo — as bactérias desenvolveram resistência pelo uso constante do mecanismo de defesa",
            },
            {
              letter: "b",
              text: "Neodarwinismo — mutantes resistentes preexistiam; o antibiótico selecionou os sobreviventes",
              correct: true,
            },
            {
              letter: "c",
              text: "Fixismo — as espécies bacterianas não se modificam",
            },
            {
              letter: "d",
              text: "Darwinismo clássico — a variação surgiu após o contato com o antibiótico",
            },
          ]}
          resolution={
            <p>
              No Neodarwinismo, mutações aleatórias que conferem resistência já
              existiam em uma pequena fração da população <em>antes</em> da
              exposição ao antibiótico. O antibiótico elimina as bactérias
              sensíveis e <strong>seleciona</strong> as resistentes, que se
              reproduzem e dominam a população. O ambiente não cria a resistência
              — ele filtra o que já existia.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Deriva genética vs. seleção natural"
          statement={
            <p>
              Uma pequena população de pássaros colonizou uma ilha desabitada.
              Com o passar das gerações, a frequência de certo alelo recessivo
              aumentou drasticamente, mesmo sem conferir qualquer vantagem
              adaptativa aos seus portadores. Esse fenômeno é mais bem
              explicado por:
            </p>
          }
          options={[
            { letter: "a", text: "Seleção natural direcional" },
            { letter: "b", text: "Fluxo gênico com a população de origem" },
            {
              letter: "c",
              text: "Deriva genética — efeito fundador em população pequena",
              correct: true,
            },
            { letter: "d", text: "Lamarckismo — adaptação progressiva ao ambiente" },
          ]}
          resolution={
            <p>
              A <strong>deriva genética</strong> é a flutuação aleatória das
              frequências alélicas, com maior impacto em populações pequenas. O{" "}
              <strong>efeito fundador</strong> ocorre quando uma nova população é
              estabelecida por poucos indivíduos: as frequências alélicas dessa
              população podem diferir muito da original simplesmente por acaso,
              sem nenhuma pressão seletiva envolvida.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM — Girafa: Lamarck ou Darwin?"
          statement={
            <p>
              (Adaptado ENEM) Dois estudantes discutem a evolução do pescoço
              longo das girafas. O estudante A afirma: "Os ancestrais esticavam
              o pescoço, que ficava maior, e os filhotes herdavam esse pescoço
              maior." O estudante B afirma: "Na população ancestral já havia
              variação no tamanho do pescoço; em períodos de escassez,
              girafas com pescoço mais longo sobreviviam e se reproduziam mais."
              As afirmações de A e B correspondem, respectivamente, a:
            </p>
          }
          options={[
            { letter: "a", text: "Darwinismo e Lamarckismo" },
            { letter: "b", text: "Fixismo e Neodarwinismo" },
            {
              letter: "c",
              text: "Lamarckismo e Darwinismo",
              correct: true,
            },
            { letter: "d", text: "Neodarwinismo e Lamarckismo" },
          ]}
          resolution={
            <p>
              O estudante A descreve a lei do uso e desuso + herança de
              caracteres adquiridos de <strong>Lamarck</strong>: a mudança ocorre
              no indivíduo durante a vida e é herdada. O estudante B descreve
              a <strong>seleção natural de Darwin</strong>: variação preexistente
              + pressão ambiental + reprodução diferencial. A diferença central é
              o <em>momento</em> em que a variação surge: no Lamarckismo ela é
              produzida; no Darwinismo ela já existe.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Mariposas industriais e seleção direcional"
          statement={
            <p>
              (Adaptado vestibular) Antes da Revolução Industrial inglesa,
              mariposas claras da espécie <em>Biston betularia</em> eram muito
              mais comuns do que as escuras. Com a industrialização e a deposição
              de fuligem nos troncos das árvores, as mariposas escuras tornaram-
              se predominantes em poucas décadas. Após leis antipoluição no
              século XX, as claras voltaram a predominar. Com base nisso, assinale
              a alternativa CORRETA:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A fuligem induziu mutações que tornaram as mariposas escuras — interpretação lamarckista",
            },
            {
              letter: "b",
              text: "As mariposas claras desenvolveram pigmentação escura pelo uso — uso e desuso de Lamarck",
            },
            {
              letter: "c",
              text: "A variação de cor já existia; a fuligem criou pressão seletiva favorecendo as escuras — seleção natural direcional",
              correct: true,
            },
            {
              letter: "d",
              text: "A predominância das escuras é resultado de deriva genética em população pequena",
            },
          ]}
          resolution={
            <p>
              A variante escura (melânica) já existia na população antes da
              industrialização, mas era rara pois se destacava nos troncos claros.
              A fuligem alterou o ambiente e, com isso, a{" "}
              <strong>pressão seletiva</strong>: as escuras passaram a ter
              vantagem de camuflagem e sobreviveram mais. Quando o ambiente
              voltou a ser claro, as claras readquiriram vantagem. Trata-se de{" "}
              <strong>seleção natural direcional</strong> — reversível e dependente
              do ambiente, sem qualquer indução de mutações pelo ambiente (o
              que seria lamarckismo).
            </p>
          }
        />
      </section>
    </article>
  );
}
