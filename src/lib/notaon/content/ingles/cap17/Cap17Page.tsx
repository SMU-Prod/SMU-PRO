"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 17</span>

          <h1>Preposições mais utilizadas</h1>

          <p>
            As <strong>preposições</strong> são pequenas palavras que estabelecem
            relações de lugar, tempo, direção e associação entre os elementos de
            uma frase. Embora curtas, elas mudam completamente o sentido de uma
            oração — e o ENEM explora exatamente essa sensibilidade em seus textos.
            Neste capítulo, você vai dominar as preposições de lugar, tempo e
            movimento, além de aprender as <strong>colocações fixas</strong> (verb +
            preposition e adjective + preposition) que aparecem sistematicamente nos
            textos de inglês do ENEM.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. A importância das preposições no ENEM</h2>

        <p>
          O ENEM avalia <strong>leitura e compreensão textual</strong>, não gramática
          isolada. Mas entender preposições é indispensável para interpretar relações
          de lugar ("the factory <em>at</em> the river bank"), tempo ("the law was
          passed <em>in</em> 1988") e associação ("responsible <em>for</em> the
          environment"). Errar uma preposição pode inverter o sentido de uma cláusula
          e levar à alternativa errada.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📍</span>
            <h3>Lugar</h3>
            <p>
              Indicam posição e localização: <em>in, on, at, above, below,
              between, among, next to, behind…</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🕐</span>
            <h3>Tempo</h3>
            <p>
              Localizam eventos na linha do tempo: <em>in, on, at, since, for,
              before, after, during, while…</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>➡️</span>
            <h3>Movimento</h3>
            <p>
              Expressam deslocamento e trajetória: <em>to, from, into, out of,
              through, across, along, towards…</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Colocações Fixas</h3>
            <p>
              Combinações verbo/adjetivo + preposição que não seguem regra lógica:
              <em> depend on, interested in, responsible for…</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            💡 <strong>Estratégia ENEM:</strong> quando uma questão usa uma preposição
            em negrito ou itálico, o examinador está testando se você percebe a
            diferença que ela faz no sentido. Leia sempre a frase inteira antes de
            escolher a alternativa.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de Lugar</span>

        <h2>2. Preposições de Lugar: IN, ON, AT</h2>

        <p>
          As três preposições de lugar mais cobradas são <strong>in</strong>,{" "}
          <strong>on</strong> e <strong>at</strong>. A lógica central é o grau de
          especificidade: <em>in</em> evoca um espaço fechado/delimitado, <em>on</em>{" "}
          uma superfície ou linha, e <em>at</em> um ponto preciso.
        </p>

        {/* SVG 1 — Diagrama visual IN / ON / AT de lugar */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Diagrama visual comparando IN, ON e AT para lugar"
            style={{ width: "100%", maxWidth: 720, display: "block", margin: "0 auto" }}
          >
            {/* Background */}
            <rect width="720" height="260" rx="12" fill="#f8fafc" />

            {/* --- IN panel --- */}
            <rect x="20" y="20" width="200" height="220" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="120" y="48" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1d4ed8">IN</text>
            {/* Box representing enclosed space */}
            <rect x="55" y="65" width="130" height="80" rx="6" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="120" y="108" textAnchor="middle" fontSize="13" fill="#1e40af">espaço fechado</text>
            <text x="120" y="125" textAnchor="middle" fontSize="11" fill="#3730a3">the box / the room</text>
            {/* Dot inside box */}
            <circle cx="120" cy="95" r="7" fill="#2563eb" />
            <text x="120" y="165" textAnchor="middle" fontSize="12" fill="#1e40af">She is</text>
            <text x="120" y="180" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1e40af">in the kitchen</text>
            <text x="120" y="200" textAnchor="middle" fontSize="11" fill="#3730a3">He lives in Brazil</text>
            <text x="120" y="215" textAnchor="middle" fontSize="11" fill="#3730a3">a fly in the bottle</text>
          </svg>

          <svg
            viewBox="0 0 720 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Diagrama visual comparando ON e AT para lugar"
            style={{ width: "100%", maxWidth: 720, display: "block", margin: "0 auto", marginTop: 8 }}
          >
            <rect width="720" height="260" rx="12" fill="#f8fafc" />

            {/* --- ON panel --- */}
            <rect x="20" y="20" width="330" height="220" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="185" y="48" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#15803d">ON</text>
            {/* Surface line */}
            <line x1="55" y1="130" x2="315" y2="130" stroke="#15803d" strokeWidth="3" />
            <text x="185" y="150" textAnchor="middle" fontSize="12" fill="#166534">superfície / rua / linha</text>
            {/* Object on surface */}
            <rect x="155" y="100" width="60" height="30" rx="4" fill="#86efac" stroke="#15803d" strokeWidth="1.5" />
            <text x="185" y="118" textAnchor="middle" fontSize="11" fill="#14532d">objeto</text>
            <text x="185" y="175" textAnchor="middle" fontSize="12" fill="#15803d">The book is</text>
            <text x="185" y="190" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#15803d">on the table</text>
            <text x="185" y="210" textAnchor="middle" fontSize="11" fill="#166534">They live on Maple Street</text>
            <text x="185" y="225" textAnchor="middle" fontSize="11" fill="#166534">a fly on the wall</text>

            {/* --- AT panel --- */}
            <rect x="370" y="20" width="330" height="220" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="535" y="48" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#b45309">AT</text>
            {/* Point / pin */}
            <circle cx="535" cy="105" r="10" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
            <line x1="535" y1="115" x2="535" y2="140" stroke="#b45309" strokeWidth="2" />
            <text x="535" y="160" textAnchor="middle" fontSize="12" fill="#92400e">ponto específico / endereço</text>
            <text x="535" y="175" textAnchor="middle" fontSize="12" fill="#b45309">She is</text>
            <text x="535" y="190" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#b45309">at the bus stop</text>
            <text x="535" y="210" textAnchor="middle" fontSize="11" fill="#92400e">He works at 10 Downing St.</text>
            <text x="535" y="225" textAnchor="middle" fontSize="11" fill="#92400e">Meet me at the corner</text>
          </svg>
          <figcaption>Figura 1 — IN (espaço fechado), ON (superfície) e AT (ponto específico) para lugar.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Preposição</th>
                <th>Uso principal</th>
                <th>Exemplos</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IN</strong></td>
                <td>Espaço fechado/delimitado; cidades, países, continentes</td>
                <td><em>in the box, in Brazil, in Europe, in the car</em></td>
                <td>na caixa, no Brasil, na Europa, no carro</td>
              </tr>
              <tr>
                <td><strong>ON</strong></td>
                <td>Superfície; rua/avenida; mídia; transporte público</td>
                <td><em>on the table, on Elm Street, on TV, on the bus</em></td>
                <td>na mesa, na Rua Elm, na TV, no ônibus</td>
              </tr>
              <tr>
                <td><strong>AT</strong></td>
                <td>Ponto específico; endereço completo; estabelecimento</td>
                <td><em>at the door, at 42 Baker St., at school, at work</em></td>
                <td>na porta, no nº 42 da Baker St., na escola, no trabalho</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Algumas expressões precisam de atenção especial porque fogem da lógica
          aparente: dizemos <em>on the farm</em> (superfície rural), mas{" "}
          <em>in the field</em> (espaço aberto delimitado). Dizemos{" "}
          <em>at the hospital</em> quando falamos do lugar como ponto de destino,
          mas <em>in the hospital</em> quando enfatizamos que a pessoa está
          internada (dentro do espaço).
        </p>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção:</strong> dizemos <em>in a taxi / in a car</em> (você
            está dentro do veículo fechado), mas <em>on a bus / on a train / on a
            plane</em> (você está sobre/dentro de um meio de transporte coletivo,
            em pé ou sentado em superfície). A lógica é histórica e deve ser
            memorizada.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de Lugar</span>

        <h2>3. Outras Preposições de Lugar</h2>

        <p>
          Além de <em>in/on/at</em>, os textos do ENEM usam frequentemente preposições
          que expressam posição relativa entre dois ou mais elementos. Conhecê-las
          permite interpretar corretamente descrições de ambiente, infográficos e
          gráficos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬆️</span>
            <h3>Above / Over</h3>
            <p>
              <em>Above</em> = acima de (sem contato).<br />
              <em>Over</em> = acima/por cima (pode implicar cobertura ou movimento).<br />
              <em>"The sign is above the door."</em><br />
              <em>"She put a blanket over the child."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Below / Under / Beneath</h3>
            <p>
              <em>Below</em> = abaixo de (posição).<br />
              <em>Under</em> = debaixo de (mais próximo, com ou sem contato).<br />
              <em>"Temperatures fell below zero."</em><br />
              <em>"The cat hid under the bed."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>↔️</span>
            <h3>Between / Among</h3>
            <p>
              <em>Between</em> = entre <strong>dois</strong> elementos definidos.<br />
              <em>Among</em> = entre <strong>três ou mais</strong> (grupo).<br />
              <em>"between the two cities"</em><br />
              <em>"among the students"</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🏠</span>
            <h3>Next to / Beside / Near</h3>
            <p>
              <em>Next to / beside</em> = ao lado de (adjacente).<br />
              <em>Near</em> = perto de (proximidade relativa).<br />
              <em>"Sit next to me."</em><br />
              <em>"The school is near the park."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>In front of / Behind</h3>
            <p>
              <em>In front of</em> = na frente de.<br />
              <em>Behind</em> = atrás de.<br />
              <em>"The fountain is in front of the museum."</em><br />
              <em>"There is a garden behind the house."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🚪</span>
            <h3>Inside / Outside</h3>
            <p>
              <em>Inside</em> = dentro de (ênfase no interior).<br />
              <em>Outside</em> = fora de (ênfase no exterior).<br />
              <em>"Stay inside the building."</em><br />
              <em>"There are protesters outside the parliament."</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            💡 <strong>Dica de texto:</strong> em gráficos e infográficos do ENEM,
            é comum encontrar frases como <em>"the data presented below the chart"</em>{" "}
            ou <em>"the region between the two rivers."</em> Identifique a preposição
            e visualize a relação espacial descrita antes de responder.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de Tempo</span>

        <h2>4. Preposições de Tempo: IN, ON, AT</h2>

        <p>
          A mesma tríade <strong>in / on / at</strong> organiza o tempo com uma
          lógica de precisão crescente: períodos longos usam <em>in</em>, datas e
          dias usam <em>on</em>, e horários ou momentos pontuais usam <em>at</em>.
        </p>

        {/* SVG 2 — Timeline IN / ON / AT de tempo */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 210"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Linha do tempo mostrando IN para século/ano/mês, ON para dia/data, AT para hora"
            style={{ width: "100%", maxWidth: 720, display: "block", margin: "0 auto" }}
          >
            <rect width="720" height="210" rx="12" fill="#f8fafc" />

            {/* Title */}
            <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Preposições de Tempo — do maior para o menor período</text>

            {/* Timeline bar background */}
            <rect x="30" y="60" width="660" height="28" rx="6" fill="#e2e8f0" />

            {/* IN band — centuries / years / months / seasons */}
            <rect x="30" y="60" width="300" height="28" rx="6" fill="#bfdbfe" />
            <text x="180" y="78" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">IN</text>

            {/* ON band — days / dates */}
            <rect x="330" y="60" width="180" height="28" rx="0" fill="#bbf7d0" />
            <text x="420" y="78" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803d">ON</text>

            {/* AT band — time / holiday / night */}
            <rect x="510" y="60" width="180" height="28" rx="6" fill="#fde68a" />
            <text x="600" y="78" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b45309">AT</text>

            {/* Arrows and labels below */}
            <text x="180" y="112" textAnchor="middle" fontSize="11" fill="#1e40af">século / ano / mês / estação</text>
            <text x="180" y="126" textAnchor="middle" fontSize="10" fill="#3730a3">in the 21st century</text>
            <text x="180" y="139" textAnchor="middle" fontSize="10" fill="#3730a3">in 2022 • in March • in winter</text>

            <text x="420" y="112" textAnchor="middle" fontSize="11" fill="#166534">dia da semana / data</text>
            <text x="420" y="126" textAnchor="middle" fontSize="10" fill="#14532d">on Monday</text>
            <text x="420" y="139" textAnchor="middle" fontSize="10" fill="#14532d">on June 5th • on weekdays</text>

            <text x="600" y="112" textAnchor="middle" fontSize="11" fill="#92400e">hora / feriado / momento</text>
            <text x="600" y="126" textAnchor="middle" fontSize="10" fill="#78350f">at 8 a.m. • at noon</text>
            <text x="600" y="139" textAnchor="middle" fontSize="10" fill="#78350f">at Christmas • at night</text>

            {/* Scale arrow */}
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
              </marker>
            </defs>
            <line x1="35" y1="178" x2="685" y2="178" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="35" y="196" fontSize="11" fill="#475569">← maior período</text>
            <text x="585" y="196" fontSize="11" fill="#475569">momento preciso →</text>
          </svg>
          <figcaption>Figura 2 — IN, ON e AT para tempo: do período mais longo ao ponto mais preciso.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Preposição</th>
                <th>Uso</th>
                <th>Exemplos em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={4}><strong>IN</strong></td>
                <td>Século</td>
                <td><em>in the 20th century</em></td>
                <td>no século XX</td>
              </tr>
              <tr>
                <td>Ano</td>
                <td><em>in 1988, in 2024</em></td>
                <td>em 1988, em 2024</td>
              </tr>
              <tr>
                <td>Mês</td>
                <td><em>in November, in March</em></td>
                <td>em novembro, em março</td>
              </tr>
              <tr>
                <td>Estação</td>
                <td><em>in summer, in winter</em></td>
                <td>no verão, no inverno</td>
              </tr>
              <tr>
                <td rowSpan={3}><strong>ON</strong></td>
                <td>Dia da semana</td>
                <td><em>on Monday, on weekdays</em></td>
                <td>na segunda-feira, nos dias úteis</td>
              </tr>
              <tr>
                <td>Data completa</td>
                <td><em>on June 5th, on 15 November</em></td>
                <td>em 5 de junho, em 15 de novembro</td>
              </tr>
              <tr>
                <td>Datas especiais com dia</td>
                <td><em>on New Year's Day, on my birthday</em></td>
                <td>no Ano Novo, no meu aniversário</td>
              </tr>
              <tr>
                <td rowSpan={4}><strong>AT</strong></td>
                <td>Hora exata</td>
                <td><em>at 7 o'clock, at 8:30 a.m.</em></td>
                <td>às 7 horas, às 8h30</td>
              </tr>
              <tr>
                <td>Momento do dia</td>
                <td><em>at noon, at midnight, at night</em></td>
                <td>ao meio-dia, à meia-noite, à noite</td>
              </tr>
              <tr>
                <td>Feriado (período)</td>
                <td><em>at Christmas, at Easter</em></td>
                <td>no Natal, na Páscoa</td>
              </tr>
              <tr>
                <td>Expressões fixas</td>
                <td><em>at the moment, at present, at that time</em></td>
                <td>no momento, atualmente, naquele tempo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Exceção importante:</strong> dizemos <em>at night</em> (à noite),
            mas <em>in the morning / in the afternoon / in the evening</em> (de manhã /
            de tarde / à tardezinha). A noite é tratada como ponto, as demais partes
            do dia como períodos.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de Tempo</span>

        <h2>5. SINCE vs FOR</h2>

        <p>
          <strong>Since</strong> e <strong>for</strong> são usados com tempos verbais
          perfeitos (<em>present perfect, past perfect</em>) e expressam duração, mas
          de formas distintas: <em>since</em> marca o <strong>ponto de início</strong>{" "}
          de uma situação; <em>for</em> marca a <strong>duração total</strong> de um
          período.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>SINCE — ponto de início</h3>
            <p>
              Acompanha uma data, hora ou evento específico:<br />
              <em>since 2010, since Monday, since the war,
              since she was born.</em><br /><br />
              "She has lived here <strong>since 2015</strong>."<br />
              <em>(Ela mora aqui desde 2015.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>⏳</span>
            <h3>FOR — duração total</h3>
            <p>
              Acompanha um período de tempo quantificado:<br />
              <em>for two years, for decades, for a long time,
              for centuries.</em><br /><br />
              "She has lived here <strong>for nine years</strong>."<br />
              <em>(Ela mora aqui há nove anos.)</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <p>
            <strong>Dica ENEM:</strong> quando o texto usa <em>since</em> ou{" "}
            <em>for</em> com <em>have/has + particípio</em>, a frase descreve uma
            situação que <strong>começou no passado e continua até agora</strong>.
            Isso é fundamental para questões de linha do tempo e causa/consequência.
          </p>
          <p>
            Exemplos de textos típicos do ENEM:
          </p>
          <p>
            <em>"Scientists have been warning about climate change for decades."</em><br />
            → Cientistas alertam sobre a mudança climática <strong>há décadas</strong>{" "}
            (duração = for).
          </p>
          <p>
            <em>"The species has been endangered since the 1990s."</em><br />
            → A espécie está ameaçada <strong>desde os anos 1990</strong>{" "}
            (ponto de início = since).
          </p>
        </div>

        <p>
          Outras preposições de tempo que organizam eventos entre si:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Preposição</th>
                <th>Significado</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Before</strong></td>
                <td>antes de</td>
                <td><em>Wash your hands before eating.</em></td>
                <td>Lave as mãos antes de comer.</td>
              </tr>
              <tr>
                <td><strong>After</strong></td>
                <td>depois de</td>
                <td><em>She called me after the meeting.</em></td>
                <td>Ela me ligou depois da reunião.</td>
              </tr>
              <tr>
                <td><strong>During</strong></td>
                <td>durante (ao longo de)</td>
                <td><em>He fell asleep during the lecture.</em></td>
                <td>Ele dormiu durante a palestra.</td>
              </tr>
              <tr>
                <td><strong>While</strong></td>
                <td>enquanto (ação simultânea)</td>
                <td><em>She read while he cooked.</em></td>
                <td>Ela leu enquanto ele cozinhava.</td>
              </tr>
              <tr>
                <td><strong>Until / Till</strong></td>
                <td>até (limite temporal)</td>
                <td><em>Wait until I arrive.</em></td>
                <td>Espere até eu chegar.</td>
              </tr>
              <tr>
                <td><strong>By</strong></td>
                <td>até (prazo máximo)</td>
                <td><em>Submit the report by Friday.</em></td>
                <td>Entregue o relatório até sexta-feira.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de Movimento</span>

        <h2>6. Preposições de Movimento</h2>

        <p>
          Preposições de movimento descrevem <strong>trajetória e deslocamento</strong>.
          Nos textos do ENEM — especialmente em notícias, reportagens e textos
          científicos —, elas aparecem descrevendo migração, rotas comerciais, fluxo
          de dados e fenômenos naturais.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>To / From</h3>
            <p>
              <em>To</em> = em direção a (destino).<br />
              <em>From</em> = a partir de (origem).<br />
              <em>"They moved to the city from the countryside."</em><br />
              <em>(Eles se mudaram para a cidade vindo do interior.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🚪</span>
            <h3>Into / Out of</h3>
            <p>
              <em>Into</em> = para dentro de (entrando).<br />
              <em>Out of</em> = para fora de (saindo).<br />
              <em>"She walked into the room."</em><br />
              <em>"He ran out of the building."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🌀</span>
            <h3>Through / Across</h3>
            <p>
              <em>Through</em> = de um lado ao outro (atravessando o interior).<br />
              <em>Across</em> = de um lado ao outro (superfície ou espaço aberto).<br />
              <em>"Water flows through the pipes."</em><br />
              <em>"She swam across the river."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>➡️</span>
            <h3>Along / Past</h3>
            <p>
              <em>Along</em> = ao longo de (paralelo).<br />
              <em>Past</em> = passando por (sem parar).<br />
              <em>"We walked along the beach."</em><br />
              <em>"Drive past the school and turn left."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🧭</span>
            <h3>Towards / Away from</h3>
            <p>
              <em>Towards</em> = em direção a (movimento aproximado).<br />
              <em>Away from</em> = afastando-se de.<br />
              <em>"She walked towards the exit."</em><br />
              <em>"Refugees fled away from the conflict."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>⬆️</span>
            <h3>Up / Down</h3>
            <p>
              <em>Up</em> = subindo / para cima.<br />
              <em>Down</em> = descendo / para baixo.<br />
              <em>"Prices went up sharply."</em><br />
              <em>"Unemployment fell down to 4%."</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            💡 <strong>Diferença crítica:</strong> <em>go to school</em> (sem artigo)
            indica a função do lugar, enquanto <em>go to the school</em> (com artigo)
            indica o lugar físico. O mesmo vale para <em>in hospital</em> (internado)
            vs. <em>in the hospital</em> (dentro do prédio) no inglês britânico.
            O ENEM geralmente segue o inglês americano.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Colocações Fixas</span>

        <h2>7. Verbos + Preposições Fixas</h2>

        <p>
          Muitos verbos em inglês exigem uma preposição específica que{" "}
          <strong>não segue lógica tradutória</strong> do português. Essas
          combinações devem ser memorizadas como unidades. O ENEM usa-as em contexto
          de textos argumentativos, científicos e de opinião.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo + Prep.</th>
                <th>Significado</th>
                <th>Exemplo em contexto</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>depend on</em></td>
                <td>depender de</td>
                <td><em>Success depends on hard work.</em></td>
                <td>O sucesso depende do esforço.</td>
              </tr>
              <tr>
                <td><em>consist of</em></td>
                <td>consistir em / ser composto de</td>
                <td><em>The team consists of five members.</em></td>
                <td>A equipe é composta por cinco membros.</td>
              </tr>
              <tr>
                <td><em>result in</em></td>
                <td>resultar em (consequência)</td>
                <td><em>Deforestation results in biodiversity loss.</em></td>
                <td>O desmatamento resulta em perda de biodiversidade.</td>
              </tr>
              <tr>
                <td><em>result from</em></td>
                <td>resultar de (causa)</td>
                <td><em>The crisis resulted from poor planning.</em></td>
                <td>A crise resultou de planejamento ruim.</td>
              </tr>
              <tr>
                <td><em>belong to</em></td>
                <td>pertencer a</td>
                <td><em>This land belongs to the community.</em></td>
                <td>Esta terra pertence à comunidade.</td>
              </tr>
              <tr>
                <td><em>apply for</em></td>
                <td>candidatar-se a / solicitar</td>
                <td><em>She applied for a scholarship.</em></td>
                <td>Ela se candidatou a uma bolsa.</td>
              </tr>
              <tr>
                <td><em>look for</em></td>
                <td>procurar</td>
                <td><em>We are looking for a solution.</em></td>
                <td>Estamos procurando uma solução.</td>
              </tr>
              <tr>
                <td><em>deal with</em></td>
                <td>lidar com / tratar de</td>
                <td><em>The article deals with climate change.</em></td>
                <td>O artigo trata de mudança climática.</td>
              </tr>
              <tr>
                <td><em>suffer from</em></td>
                <td>sofrer de</td>
                <td><em>Millions suffer from hunger.</em></td>
                <td>Milhões sofrem de fome.</td>
              </tr>
              <tr>
                <td><em>contribute to</em></td>
                <td>contribuir para</td>
                <td><em>Technology can contribute to equality.</em></td>
                <td>A tecnologia pode contribuir para a igualdade.</td>
              </tr>
              <tr>
                <td><em>focus on</em></td>
                <td>focar em / concentrar-se em</td>
                <td><em>The report focuses on urban poverty.</em></td>
                <td>O relatório foca na pobreza urbana.</td>
              </tr>
              <tr>
                <td><em>rely on</em></td>
                <td>depender de / contar com</td>
                <td><em>We rely on fossil fuels too much.</em></td>
                <td>Dependemos demais de combustíveis fósseis.</td>
              </tr>
              <tr>
                <td><em>insist on</em></td>
                <td>insistir em</td>
                <td><em>She insists on using public transport.</em></td>
                <td>Ela insiste em usar transporte público.</td>
              </tr>
              <tr>
                <td><em>agree with</em></td>
                <td>concordar com (pessoa/ideia)</td>
                <td><em>I agree with the author's view.</em></td>
                <td>Concordo com a visão do autor.</td>
              </tr>
              <tr>
                <td><em>believe in</em></td>
                <td>acreditar em</td>
                <td><em>They believe in renewable energy.</em></td>
                <td>Eles acreditam em energia renovável.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <p>
            <strong>Dica ENEM — result in vs. result from:</strong> essas duas
            estruturas são armadilhas clássicas. <em>Result in</em> aponta para a
            <strong> consequência</strong>; <em>result from</em> aponta para a{" "}
            <strong>causa</strong>. Exemplo real de questão:<br />
            <em>"The increase in CO₂ levels results <u>from</u> the burning of fossil fuels
            and results <u>in</u> global warming."</em><br />
            → A queima de combustíveis é a <strong>causa</strong>; o aquecimento global
            é a <strong>consequência</strong>.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Colocações Fixas</span>

        <h2>8. Adjetivos + Preposições</h2>

        <p>
          Assim como os verbos, muitos adjetivos em inglês exigem preposições
          específicas. Nos textos do ENEM — argumentativos, jornalísticos e
          científicos —, essas estruturas aparecem em predicados e aposto. Confundi-las
          pode alterar completamente o sentido da frase.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>interested IN</h3>
            <p>
              interessado em<br />
              <em>"She is interested in politics."</em><br />
              <em>(Ela tem interesse em política.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🏆</span>
            <h3>responsible FOR</h3>
            <p>
              responsável por<br />
              <em>"Who is responsible for this policy?"</em><br />
              <em>(Quem é responsável por esta política?)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>⭐</span>
            <h3>famous FOR</h3>
            <p>
              famoso por<br />
              <em>"Brazil is famous for its biodiversity."</em><br />
              <em>(O Brasil é famoso por sua biodiversidade.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>≠</span>
            <h3>different FROM</h3>
            <p>
              diferente de<br />
              <em>"This approach is different from the traditional one."</em><br />
              <em>(Esta abordagem é diferente da tradicional.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>✅</span>
            <h3>good AT</h3>
            <p>
              bom em (habilidade)<br />
              <em>"She is good at negotiating."</em><br />
              <em>(Ela é boa em negociar.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>😨</span>
            <h3>afraid OF</h3>
            <p>
              com medo de<br />
              <em>"Many people are afraid of change."</em><br />
              <em>(Muitas pessoas têm medo de mudança.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🥇</span>
            <h3>proud OF</h3>
            <p>
              orgulhoso de<br />
              <em>"The country is proud of its scientists."</em><br />
              <em>(O país tem orgulho de seus cientistas.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>≈</span>
            <h3>similar TO</h3>
            <p>
              similar a / parecido com<br />
              <em>"This technology is similar to the Japanese model."</em><br />
              <em>(Esta tecnologia é similar ao modelo japonês.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>aware OF</h3>
            <p>
              ciente de / consciente de<br />
              <em>"Citizens must be aware of their rights."</em><br />
              <em>(Os cidadãos devem estar cientes de seus direitos.)</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>capable OF</h3>
            <p>
              capaz de<br />
              <em>"Young people are capable of great innovation."</em><br />
              <em>(Jovens são capazes de grande inovação.)</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Armadilha frequente:</strong> em português dizemos "diferente{" "}
            <em>de</em>" e "similar <em>a</em>", mas em inglês é{" "}
            <em>different <strong>from</strong></em> e{" "}
            <em>similar <strong>to</strong></em>. Não traduza literalmente!
            O ENEM costuma incluir alternativas que trocam essas preposições para
            testar sua atenção.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário em Contexto</span>

        <h2>9. Collocations frequentes no ENEM</h2>

        <p>
          <strong>Collocations</strong> são combinações de palavras que os falantes
          nativos usam naturalmente. Nos textos do ENEM, elas aparecem em manchetes,
          artigos de opinião e textos científicos. Reconhecê-las evita traduções
          literais que distorcem o sentido.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Collocation</th>
                <th>Significado</th>
                <th>Exemplo ENEM-style</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>in charge of</em></td>
                <td>responsável por (no comando de)</td>
                <td><em>"The minister in charge of education announced new policies."</em></td>
              </tr>
              <tr>
                <td><em>at risk of</em></td>
                <td>em risco de</td>
                <td><em>"Species at risk of extinction need immediate protection."</em></td>
              </tr>
              <tr>
                <td><em>in favour of / in favor of</em></td>
                <td>a favor de</td>
                <td><em>"Most respondents were in favor of stricter regulations."</em></td>
              </tr>
              <tr>
                <td><em>on behalf of</em></td>
                <td>em nome de</td>
                <td><em>"She signed the agreement on behalf of the organization."</em></td>
              </tr>
              <tr>
                <td><em>in terms of</em></td>
                <td>em termos de</td>
                <td><em>"In terms of GDP, the country has grown significantly."</em></td>
              </tr>
              <tr>
                <td><em>at the expense of</em></td>
                <td>às custas de</td>
                <td><em>"Economic growth cannot come at the expense of the environment."</em></td>
              </tr>
              <tr>
                <td><em>in contrast to / with</em></td>
                <td>em contraste com</td>
                <td><em>"In contrast to rural areas, cities consume more energy per capita."</em></td>
              </tr>
              <tr>
                <td><em>in addition to</em></td>
                <td>além de</td>
                <td><em>"In addition to CO₂, methane is a major greenhouse gas."</em></td>
              </tr>
              <tr>
                <td><em>as a result of</em></td>
                <td>como resultado de</td>
                <td><em>"Many jobs were lost as a result of automation."</em></td>
              </tr>
              <tr>
                <td><em>according to</em></td>
                <td>de acordo com</td>
                <td><em>"According to the UN, hunger affects 700 million people."</em></td>
              </tr>
              <tr>
                <td><em>on the other hand</em></td>
                <td>por outro lado</td>
                <td><em>"On the other hand, technology can create new job opportunities."</em></td>
              </tr>
              <tr>
                <td><em>due to</em></td>
                <td>devido a</td>
                <td><em>"The delay was due to technical problems."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            💡 <strong>Dica de leitura:</strong> collocations prepositivas como{" "}
            <em>as a result of</em>, <em>due to</em> e <em>in contrast to</em>{" "}
            são conectivos argumentativos. Identificá-las no texto ajuda a mapear a
            estrutura do argumento — causa, consequência, contraste, adição — o que
            é essencial para responder questões de <strong>inferência e opinião
            do autor</strong>.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 10 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão Final</span>

        <h2>10. Dicas ENEM e Armadilhas</h2>

        <p>
          O ENEM raramente testa preposições de forma isolada. Elas aparecem
          integradas ao texto, e o estudante precisa reconhecer o impacto semântico
          da preposição na frase. Veja os erros mais comuns e como evitá-los.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❌</span>
            <h3>Armadilha 1: since vs. for</h3>
            <p>
              Errado: <em>"I've worked here since five years."</em><br />
              Certo: <em>"I've worked here <strong>for</strong> five years."</em><br />
              <em>Since</em> pede ponto no tempo; <em>for</em> pede duração.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Armadilha 2: in vs. on (tempo)</h3>
            <p>
              Errado: <em>"I'll see you in Monday."</em><br />
              Certo: <em>"I'll see you <strong>on</strong> Monday."</em><br />
              Dias da semana sempre usam <em>on</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Armadilha 3: different from</h3>
            <p>
              Errado: <em>"This is different to/than that."</em><br />
              Certo (inglês formal): <em>"This is <strong>different from</strong> that."</em><br />
              O ENEM usa o padrão formal americano: <em>different from</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Armadilha 4: interested in</h3>
            <p>
              Errado: <em>"She is interested on the subject."</em><br />
              Certo: <em>"She is interested <strong>in</strong> the subject."</em><br />
              <em>Interested</em> sempre pede <em>in</em>, nunca <em>on</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Armadilha 5: at vs. in (lugar)</h3>
            <p>
              Contexto muda tudo:<br />
              <em>"She is <strong>at</strong> the hospital"</em> = ela foi lá (visita).<br />
              <em>"She is <strong>in</strong> the hospital"</em> = ela está internada.
            </p>
          </div>

          <div className="lesson-card">
            <span>✅</span>
            <h3>Estratégia geral</h3>
            <p>
              Ao encontrar uma preposição sublinhada ou em negrito no texto do ENEM,
              pergunte-se: ela indica <strong>lugar</strong>, <strong>tempo</strong>,
              <strong>movimento</strong> ou é uma <strong>colocação fixa</strong>?
              Classifique e aplique a regra.
            </p>
          </div>
        </div>

        <div className="math-block">
          <p>
            <strong>Resumo rápido — checklist do ENEM:</strong>
          </p>
          <p>
            📍 <strong>Lugar:</strong> IN (dentro) → ON (superfície) → AT (ponto preciso)<br />
            🕐 <strong>Tempo:</strong> IN (mês/ano/século) → ON (dia/data) → AT (hora/momento)<br />
            ⏳ <strong>Duração:</strong> SINCE (ponto de início) vs. FOR (período total)<br />
            🔗 <strong>Verbos fixos:</strong> depend <em>on</em>, consist <em>of</em>,
            result <em>in/from</em>, apply <em>for</em>, deal <em>with</em><br />
            🏷️ <strong>Adjetivos fixos:</strong> interested <em>in</em>, responsible <em>for</em>,
            different <em>from</em>, similar <em>to</em>, aware <em>of</em>
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 11 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>11. Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. IN, ON ou AT para tempo"
          statement={
            <p>
              Assinale a alternativa que preenche corretamente as lacunas com as
              preposições de tempo adequadas:
            </p>
          }
          options={[
            {
              letter: "a",
              text: 'The Constitution was signed ___ 1988, ___ October 5th, ___ 10 a.m. → "in / on / at"',
              correct: true,
            },
            {
              letter: "b",
              text: 'The Constitution was signed ___ 1988, ___ October 5th, ___ 10 a.m. → "on / at / in"',
            },
            {
              letter: "c",
              text: 'The Constitution was signed ___ 1988, ___ October 5th, ___ 10 a.m. → "at / on / in"',
            },
            {
              letter: "d",
              text: 'The Constitution was signed ___ 1988, ___ October 5th, ___ 10 a.m. → "in / at / on"',
            },
          ]}
          resolution={
            <p>
              A lógica de <em>in/on/at</em> para tempo segue o grau de precisão:{" "}
              <strong>in 1988</strong> (ano = período longo → <em>in</em>),{" "}
              <strong>on October 5th</strong> (data completa com dia → <em>on</em>),{" "}
              <strong>at 10 a.m.</strong> (hora exata → <em>at</em>). A frase
              completa seria: <em>"The Constitution was signed in 1988, on October 5th,
              at 10 a.m."</em>
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. SINCE vs. FOR"
          statement={
            <p>
              Leia o trecho abaixo e escolha a alternativa que preenche as lacunas
              corretamente:
            </p>
          }
          options={[
            {
              letter: "a",
              text: '"Researchers have been studying the Amazon rainforest ___ decades and ___ 1980 they have documented thousands of new species." → "for / since"',
              correct: true,
            },
            {
              letter: "b",
              text: '"Researchers have been studying the Amazon rainforest ___ decades and ___ 1980 they have documented thousands of new species." → "since / for"',
            },
            {
              letter: "c",
              text: '"Researchers have been studying the Amazon rainforest ___ decades and ___ 1980 they have documented thousands of new species." → "for / for"',
            },
            {
              letter: "d",
              text: '"Researchers have been studying the Amazon rainforest ___ decades and ___ 1980 they have documented thousands of new species." → "since / since"',
            },
          ]}
          resolution={
            <p>
              <em>"For decades"</em> usa <strong>for</strong> porque <em>decades</em>{" "}
              indica uma <strong>duração</strong> (quantidade de tempo). Já{" "}
              <em>"since 1980"</em> usa <strong>since</strong> porque <em>1980</em>{" "}
              é um <strong>ponto específico no passado</strong> de onde a ação começa.
              Ambas as estruturas combinam com o <em>present perfect continuous</em>{" "}
              (<em>have been studying / have documented</em>).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Verbos com preposições fixas — result in vs. result from"
          statement={
            <p>
              Analise o trecho científico e identifique o uso correto das preposições:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Deforestation results from biodiversity loss, which results in carbon emissions. (causa: deforestation → consequência: emissions)",
            },
            {
              letter: "b",
              text: "Carbon emissions result from deforestation, which results in temperature rises. (causa: deforestation → consequência: temperature rises)",
              correct: true,
            },
            {
              letter: "c",
              text: "Temperature rises result in carbon emissions, which result from deforestation.",
            },
            {
              letter: "d",
              text: "Biodiversity loss results from temperature rises, which result from reforestation.",
            },
          ]}
          resolution={
            <p>
              <em>Result <strong>from</strong></em> aponta para a <strong>causa</strong>:{" "}
              as emissões de carbono resultam <em>do</em> desmatamento (o desmatamento
              é a causa). <em>Result <strong>in</strong></em> aponta para a{" "}
              <strong>consequência</strong>: o desmatamento resulta <em>em</em> aumento
              de temperatura (o aumento é a consequência). A cadeia lógica correta é:
              desmatamento → emissões → aquecimento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Leitura de texto jornalístico — collocations (ENEM)"
          statement={
            <div>
              <p>Leia o trecho adaptado de uma reportagem sobre mobilidade urbana:</p>
              <blockquote style={{ borderLeft: "3px solid #3b82f6", paddingLeft: "1rem", margin: "0.75rem 0", fontStyle: "italic" }}>
                "Cities around the world are struggling to deal{" "}
                <strong>with</strong> the consequences of rapid urbanization. According{" "}
                <strong>to</strong> a recent UN report, more than half of the global
                population now lives in urban areas, a figure that is expected to
                rise to two-thirds by 2050. As a result{" "}
                <strong>of</strong> poor urban planning, many residents suffer{" "}
                <strong>from</strong> inadequate public transport, which contributes{" "}
                <strong>to</strong> increased pollution and social inequality."
              </blockquote>
              <p>
                Com base no texto, a preposição sublinhada que indica{" "}
                <strong>causa</strong> de um problema urbano é:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: '"deal with" — pois trata do problema de forma direta.' },
            { letter: "b", text: '"According to" — pois cita a fonte do problema.' },
            {
              letter: "c",
              text: '"As a result of" — pois introduz a causa (mau planejamento) do problema (transporte inadequado).',
              correct: true,
            },
            { letter: "d", text: '"contributes to" — pois indica o que o problema gera como consequência.' },
          ]}
          resolution={
            <p>
              <em>"As a result <strong>of</strong> poor urban planning"</em> introduz
              a <strong>causa</strong> do problema: o mau planejamento urbano é o que
              causa o transporte público inadequado. Já <em>"contributes to"</em>{" "}
              indica uma <strong>consequência</strong> (o transporte ruim contribui
              para poluição e desigualdade). A questão testa a capacidade de distinguir
              relações de causa e consequência por meio de collocations prepositivas —
              habilidade central do ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Preposições de lugar e movimento em texto sobre migração (ENEM)"
          statement={
            <div>
              <p>Leia o trecho adaptado sobre migração climática:</p>
              <blockquote style={{ borderLeft: "3px solid #3b82f6", paddingLeft: "1rem", margin: "0.75rem 0", fontStyle: "italic" }}>
                "Climate refugees — people forced to move <strong>away from</strong>{" "}
                their homes due to extreme weather events — are among the most{" "}
                vulnerable populations <strong>on</strong> the planet. Many of them
                travel <strong>across</strong> borders and settle <strong>in</strong>{" "}
                overcrowded urban areas, often <strong>at</strong> the margins of
                society, with limited access to basic services. Governments must
                be aware <strong>of</strong> this reality and responsible{" "}
                <strong>for</strong> guaranteeing their rights."
              </blockquote>
              <p>
                Considerando as preposições destacadas, qual alternativa descreve
                corretamente a situação dos refugiados climáticos segundo o texto?
              </p>
            </div>
          }
          options={[
            {
              letter: "a",
              text: "Eles se deslocam em direção a suas casas e se fixam em áreas rurais com amplo acesso a serviços.",
            },
            {
              letter: "b",
              text: "Eles são expulsos de suas casas, cruzam fronteiras e vivem às margens da sociedade em áreas urbanas superlotadas.",
              correct: true,
            },
            {
              letter: "c",
              text: "Eles têm ampla consciência de seus direitos e os governos não são responsáveis por sua situação.",
            },
            {
              letter: "d",
              text: "Eles vivem dentro de fronteiras nacionais fixas, com pleno acesso a serviços básicos garantidos pelos governos.",
            },
          ]}
          resolution={
            <p>
              O texto usa uma cadeia de preposições para narrar o deslocamento:{" "}
              <em>away from</em> (afastando-se de casa), <em>across</em> borders
              (cruzando fronteiras), <em>in</em> overcrowded areas (estabelecendo-se
              dentro de áreas superlotadas), <em>at</em> the margins (ponto preciso
              de exclusão social). Além disso, <em>aware of</em> e{" "}
              <em>responsible for</em> indicam que os governos <strong>devem</strong>{" "}
              ser conscientes e responsáveis — não que já o sejam. A alternativa B
              sintetiza corretamente a trajetória descrita pelas preposições.
            </p>
          }
        />
      </section>
    </article>
  );
}
