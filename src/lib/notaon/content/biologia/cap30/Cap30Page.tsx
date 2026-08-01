"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 30</span>

          <h1>Reino Animalia IV: Cordados Homeotérmicos</h1>

          <p>
            Dos primeiros tetrápodes que saíram dos mares há 375 milhões de
            anos até as aves que cruzam oceanos e os mamíferos que colonizaram
            do Ártico às profundezas abissais — a história dos vertebrados
            terrestres é uma saga de inovações anatômicas, fisiológicas e
            comportamentais. Neste capítulo você vai compreender a diferença
            entre <strong>pecilotermia e homeotermia</strong>, dominar as
            adaptações dos répteis ao ambiente terrestre, mergulhar na biologia
            das aves com seu revolucionário sistema respiratório de fluxo
            unidirecional e conhecer as três subclasses de mamíferos — tudo no
            nível de profundidade exigido pelo ENEM e pelos principais
            vestibulares.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Termorregulação</span>

        <h2>1. Pecilotermia × Homeotermia: Endo e Ectotermia</h2>

        <p>
          A temperatura influencia diretamente a velocidade de todas as reações
          enzimáticas do organismo. Dois grandes estratégias evolutivas
          surgiram para lidar com a variação térmica do ambiente:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Pecilotermia (ectotermia)</h3>
            <p>
              A temperatura corporal <strong>varia</strong> com a do ambiente.
              O animal depende de fontes externas de calor (sol, substrato
              quente) para atingir a temperatura ótima de funcionamento.
              Exemplos: peixes, anfíbios e a maioria dos répteis.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔥</span>
            <h3>Homeotermia (endotermia)</h3>
            <p>
              A temperatura corporal é mantida <strong>constante</strong> pelo
              próprio metabolismo, independentemente das condições externas.
              Exige alto consumo de energia. Exemplos: aves e mamíferos.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Vantagem evolutiva</h3>
            <p>
              A homeotermia permite atividade muscular intensa em ambientes
              frios, colonização de regiões polares e voos migratórios de
              longa distância — impossíveis para animais ectotérmicos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍖</span>
            <h3>Custo energético</h3>
            <p>
              Homeotérmicos gastam entre <strong>5 a 10 vezes mais</strong>{" "}
              energia em repouso do que ectotérmicos de massa equivalente,
              necessitando de alimentação contínua e abundante.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção à terminologia</h3>
          <p>
            Os termos <strong>pecilotérmico/homeotérmico</strong> descrevem o
            resultado (temperatura variável ou constante), enquanto{" "}
            <strong>ectotérmico/endotérmico</strong> descrevem a fonte do
            calor (externa ou interna). Na prática do ENEM, os dois pares são
            usados como equivalentes: pecilotérmico ≈ ectotérmico;
            homeotérmico ≈ endotérmico.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Conquista Terrestre</span>

        <h2>2. O Ovo Amniótico e a Conquista do Ambiente Terrestre</h2>

        <p>
          O surgimento do <strong>ovo amniótico</strong> nos reptílios ancestrais
          há cerca de 310 milhões de anos foi uma das maiores inovações
          evolutivas dos vertebrados. Antes dele, anfíbios precisavam retornar
          à água para se reproduzir — o ovo amniótico "levou o oceano consigo",
          embalando o embrião em líquidos protetores dentro de membranas
          especializadas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Estrutura do ovo amniótico e suas membranas">
            {/* casca */}
            <ellipse cx={350} cy={100} rx={310} ry={90} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            {/* albumina / albúmen */}
            <ellipse cx={350} cy={100} rx={270} ry={72} fill="#fef3c7" stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="6 3" />
            {/* córion */}
            <ellipse cx={350} cy={100} rx={230} ry={60} fill="#fff7ed" stroke="#f97316" strokeWidth={1.5} strokeDasharray="6 3" />
            {/* âmnio */}
            <ellipse cx={350} cy={100} rx={170} ry={44} fill="#ecfdf5" stroke="#16a34a" strokeWidth={1.5} />
            {/* saco vitelino */}
            <ellipse cx={270} cy={110} rx={52} ry={38} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={270} y={114} textAnchor="middle" fontSize={10} fontWeight={700} fill="#92400e">Saco vitelino</text>
            {/* embrião */}
            <ellipse cx={370} cy={96} rx={36} ry={26} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={370} y={100} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">Embrião</text>
            {/* alantoide */}
            <ellipse cx={440} cy={118} rx={44} ry={28} fill="#e9d5ff" stroke="#9333ea" strokeWidth={1.5} />
            <text x={440} y={122} textAnchor="middle" fontSize={10} fontWeight={700} fill="#6b21a8">Alantoide</text>
            {/* labels externos */}
            <text x={50} y={38} fontSize={11} fill="#ca8a04" fontWeight={700}>Casca (CaCO₃)</text>
            <text x={62} y={58} fontSize={10} fill="#b45309">Albumina</text>
            <text x={100} y={76} fontSize={10} fill="#ea580c">Córion</text>
            <text x={152} y={92} fontSize={10} fill="#15803d">Âmnio</text>
            <line x1={105} y1={72} x2={200} y2={85} stroke="#ea580c" strokeWidth={1} />
            <line x1={155} y1={89} x2={210} y2={97} stroke="#15803d" strokeWidth={1} />
          </svg>
          <figcaption>
            Ovo amniótico: as membranas extraembrionárias (âmnio, alantoide,
            córion e saco vitelino) protegem o embrião e garantem trocas gasosas
            e excreção sem dependência da água.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Membrana</th>
                <th>Origem</th>
                <th>Função principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Âmnio</strong></td>
                <td>Ectoderme + mesoderme</td>
                <td>Forma a câmara amniótica cheia de líquido; protege contra choques</td>
              </tr>
              <tr>
                <td><strong>Córion</strong></td>
                <td>Ectoderme + mesoderme</td>
                <td>Envolve todo o embrião; trocas gasosas com o exterior (em placentários, origina parte da placenta)</td>
              </tr>
              <tr>
                <td><strong>Alantoide</strong></td>
                <td>Endoderme + mesoderme</td>
                <td>Armazena excretas nitrogenadas; participa de trocas gasosas</td>
              </tr>
              <tr>
                <td><strong>Saco vitelino</strong></td>
                <td>Endoderme + mesoderme</td>
                <td>Reserva nutritiva (vitelo) para o embrião</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Junto ao ovo amniótico, outras adaptações ao ambiente terrestre
          foram decisivas: <strong>pele queratinizada</strong> impermeável,{" "}
          <strong>fecundação interna</strong>, <strong>pulmões</strong> mais
          eficientes que os de anfíbios, rins capazes de concentrar urina e
          membros pentadáctilos reforçados para suportar o peso do corpo
          fora da água.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Répteis</span>

        <h2>3. Répteis: Os Primeiros Amniota Pecilotérmicos</h2>

        <p>
          Embora os répteis não formem um grupo <em>monofilético</em> — as aves
          são répteis em termos filogenéticos —, a tradição pedagógica agrupa
          como "répteis" os lagartos, cobras, tartarugas, jacarés e o tuatara,
          excluindo as aves. São animais{" "}
          <strong>ectotérmicos, com pele seca e escamosa</strong>, e foram os
          primeiros vertebrados completamente independentes da água para a
          reprodução.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐍</span>
            <h3>Escamados</h3>
            <p>
              Lagartos e serpentes. A maioria das 10 000 espécies de répteis
              viventes pertence a este grupo. Serpentes perderam os membros
              secundariamente.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐢</span>
            <h3>Quelônios</h3>
            <p>
              Tartarugas, jabutis e cágados. Possuem carapaça derivada de
              costelas fundidas e não trocam de casca ao crescer.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐊</span>
            <h3>Crocodilianos</h3>
            <p>
              Jacarés, crocodilos e gaviais. Únicos répteis com{" "}
              <strong>coração totalmente dividido em 4 câmaras</strong>,
              mais próximos filogeneticamente das aves.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦎</span>
            <h3>Rincocéfalos</h3>
            <p>
              Representado apenas pelo tuatara da Nova Zelândia; fóssil
              vivo com características ancestrais únicas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Circulação nos répteis</h3>
          <p>
            A maioria dos répteis possui coração com{" "}
            <strong>2 átrios e 1 ventrículo parcialmente dividido</strong>{" "}
            (septo incompleto), o que permite certa mistura de sangue
            oxigenado e desoxigenado. A exceção são os{" "}
            <strong>crocodilianos</strong>, cujo septo ventricular é
            completo — 4 câmaras verdadeiras. Esse coração mais eficiente
            está relacionado ao maior gasto energético desses predadores de
            topo.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Evolução Cardíaca</span>

        <h2>4. Evolução do Coração nos Vertebrados</h2>

        <p>
          Um dos temas mais recorrentes no ENEM é a evolução do número de
          câmaras cardíacas nos vertebrados e sua relação com a eficiência
          circulatória. O gráfico a seguir resume essa progressão:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 740 220" width="740" height="220" aria-label="Evolução do coração nos vertebrados">
            {/* fundo */}
            <rect x={0} y={0} width={740} height={220} rx={14} fill="#f8fafc" />
            {/* grupos */}
            {[
              { x: 30,  label: "Peixes",       cavidades: 2, cor: "#0ea5e9", info: "1 átrio + 1 ventrículo\ncirculação simples" },
              { x: 195, label: "Anfíbios",     cavidades: 3, cor: "#f59e0b", info: "2 átrios + 1 ventrículo\nmistura parcial" },
              { x: 360, label: "Répteis",      cavidades: 3, cor: "#f97316", info: "2 átrios + 1 ventrículo\nsepto incompleto" },
              { x: 525, label: "Crocodil./Aves/Mamíf.", cavidades: 4, cor: "#16a34a", info: "2 átrios + 2 ventrículos\ncirculação dupla completa" },
            ].map((g) => (
              <g key={g.label}>
                {/* coração estilizado */}
                {Array.from({ length: g.cavidades }).map((_, i) => (
                  <rect
                    key={i}
                    x={g.x + i * 28}
                    y={50}
                    width={24}
                    height={60}
                    rx={6}
                    fill={g.cor}
                    opacity={0.75 - i * 0.1}
                    stroke={g.cor}
                    strokeWidth={1.5}
                  />
                ))}
                <text x={g.x + g.cavidades * 14} y={130} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">{g.label}</text>
                <text x={g.x + g.cavidades * 14} y={148} textAnchor="middle" fontSize={11} fill={g.cor} fontWeight={600}>
                  {g.cavidades} câmaras
                </text>
              </g>
            ))}
            {/* setas de evolução */}
            {[160, 325, 490].map((x) => (
              <polygon key={x} points={`${x},78 ${x + 18},68 ${x + 18},88`} fill="#9ca3af" />
            ))}
            {/* legenda */}
            <text x={370} y={200} textAnchor="middle" fontSize={11} fill="#6b7280" fontStyle="italic">
              ↑ Eficiência circulatória: separação total ⟹ maior oxigenação dos tecidos
            </text>
          </svg>
          <figcaption>
            Evolução do coração nos vertebrados: de 2 câmaras nos peixes a 4
            câmaras completamente separadas em aves e mamíferos, garantindo
            circulação dupla e completa.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Câmaras</th>
                <th>Circulação</th>
                <th>Mistura de sangue</th>
                <th>Termorregulação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peixes</td>
                <td>2 (1 átrio + 1 ventrículo)</td>
                <td>Simples (1 circuito)</td>
                <td>Não há (circuito único)</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td>Anfíbios</td>
                <td>3 (2 átrios + 1 vent.)</td>
                <td>Dupla incompleta</td>
                <td>Parcial no ventrículo</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td>Répteis (exceto crocodilianos)</td>
                <td>3 (septo incompleto)</td>
                <td>Dupla incompleta</td>
                <td>Reduzida</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td>Crocodilianos</td>
                <td>4 completas</td>
                <td>Dupla completa</td>
                <td>Não há</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td>Aves</td>
                <td>4 completas</td>
                <td>Dupla completa</td>
                <td>Não há</td>
                <td>Homeotérmico</td>
              </tr>
              <tr>
                <td>Mamíferos</td>
                <td>4 completas</td>
                <td>Dupla completa</td>
                <td>Não há</td>
                <td>Homeotérmico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Aves</span>

        <h2>5. Aves: Anatomia e Fisiologia do Voo</h2>

        <p>
          As aves (classe <em>Aves</em>) descendem diretamente dos dinossauros
          terópodes, o que as torna, filogeneticamente, os únicos dinossauros
          sobreviventes. Toda a anatomia das aves é moldada pela exigência
          energética extrema do voo ativo, que demanda leveza estrutural,
          alto fornecimento de oxigênio e temperatura corporal elevada e
          constante.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪶</span>
            <h3>Penas</h3>
            <p>
              Estruturas de queratina derivadas evolutivamente das escamas dos
              répteis. As <strong>rêmiges</strong> (penas das asas) e as{" "}
              <strong>retrizes</strong> (cauda) geram sustentação e
              propulsão; as penas de contorno e o plumão (pluma) têm função
              de <strong>isolamento térmico</strong>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦴</span>
            <h3>Ossos pneumáticos</h3>
            <p>
              A maioria dos ossos das aves é <strong>oca (pneumatizada)</strong>,
              conectada ao sistema de sacos aéreos. Isso reduz drasticamente a
              densidade corporal sem comprometer a resistência mecânica —
              fundamental para reduzir o custo energético do voo.
            </p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>Carina e músculos peitorais</h3>
            <p>
              A <strong>carina</strong> é uma quilha proeminente do esterno
              que aumenta a área de inserção dos músculos peitorais —
              responsáveis por até <strong>25% da massa total</strong> do
              corpo em aves voadoras, gerando a batida de asa.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫁</span>
            <h3>Pulmões rígidos + sacos aéreos</h3>
            <p>
              Sistema único entre vertebrados: os pulmões não se expandem; o
              ar flui <strong>unidirecionalmente</strong> de trás para frente,
              mantendo alta concentração de O₂ durante toda a fase
              respiratória — inspiração e expiração.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎵</span>
            <h3>Syrinx</h3>
            <p>
              Órgão vocal único das aves, localizado na bifurcação da traqueia
              (diferente da laringe dos mamíferos). Permite sons complexos e
              o canto característico de cada espécie.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥚</span>
            <h3>Ovíparas sem dentes</h3>
            <p>
              Aves são <strong>ovíparas</strong>, com ovos cobertos por casca
              calcária. O <strong>bico córneo sem dentes</strong> (como nos
              quelônios) reduz o peso da cabeça. A digestão é auxiliada pela
              moela muscular.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Sistema respiratório da ave com sacos aéreos e fluxo unidirecional">
            <rect x={0} y={0} width={700} height={230} rx={14} fill="#eff6ff" />
            {/* pulmão */}
            <ellipse cx={280} cy={110} rx={80} ry={50} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2} />
            <text x={280} y={113} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Pulmão</text>
            <text x={280} y={128} textAnchor="middle" fontSize={10} fill="#1e40af">(rígido)</text>
            {/* sacos aéreos posteriores */}
            <ellipse cx={490} cy={130} rx={90} ry={55} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={490} y={124} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">Sacos aéreos</text>
            <text x={490} y={139} textAnchor="middle" fontSize={10} fill="#1e40af">posteriores</text>
            {/* sacos aéreos anteriores */}
            <ellipse cx={100} cy={130} rx={75} ry={50} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={100} y={124} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">Sacos aéreos</text>
            <text x={100} y={139} textAnchor="middle" fontSize={10} fill="#1e40af">anteriores</text>
            {/* setas fluxo inspiração */}
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
              <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
            </defs>
            {/* Inspiração 1: ar entra nos sacos posteriores */}
            <path d="M 580 130 L 410 130" stroke="#2563eb" strokeWidth={2} fill="none" markerEnd="url(#arrowBlue)" />
            <text x={495} y={192} textAnchor="middle" fontSize={10} fill="#1d4ed8">1ª inspiração</text>
            <text x={495} y={204} textAnchor="middle" fontSize={10} fill="#1d4ed8">→ sacos post.</text>
            {/* Expiração 1: sacos post. → pulmão */}
            <path d="M 360 110 L 220 110" stroke="#16a34a" strokeWidth={2} fill="none" markerEnd="url(#arrowGreen)" />
            <text x={290} y={172} textAnchor="middle" fontSize={10} fill="#15803d">1ª expiração</text>
            <text x={290} y={184} textAnchor="middle" fontSize={10} fill="#15803d">sacos post. → pulmão</text>
            {/* Expiração 2: pulmão → sacos ant. */}
            <path d="M 200 110 L 100 100" stroke="#16a34a" strokeWidth={2} fill="none" markerEnd="url(#arrowGreen)" />
            {/* saída */}
            <path d="M 25 130 L 25 130" stroke="#9ca3af" strokeWidth={1} />
            <text x={30} y={186} fontSize={10} fill="#6b7280">saída pelo bico/narina</text>
            <text x={350} y={20} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">
              Fluxo unidirecional de ar nas aves
            </text>
            <text x={350} y={36} textAnchor="middle" fontSize={10} fill="#374151">
              O ar percorre 2 ciclos respiratórios completos antes de sair — O₂ disponível em inspiração E expiração
            </text>
          </svg>
          <figcaption>
            Respiração das aves: os sacos aéreos funcionam como foles que
            impulsionam o ar de forma contínua pelos pulmões rígidos, de posterior
            para anterior. São necessários dois ciclos completos (inspiração +
            expiração) para uma mesma porção de ar atravessar o pulmão.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que o fluxo unidirecional é tão eficiente?</h3>
          <p>
            Nos pulmões de mamíferos, o ar inspirado e o expirado se misturam
            (fluxo bidirecional) e sempre há ar "velho" (rico em CO₂) nos
            alvéolos — o chamado <strong>espaço morto respiratório</strong>.
            Nas aves, o fluxo unidirecional elimina esse espaço morto: o
            sangue encontra ar fresco com alta pressão parcial de O₂ tanto
            durante a inspiração quanto durante a expiração. Isso permite que
            aves voem a altitudes de 8 000–9 000 m (onde há apenas 30% do O₂
            ao nível do mar) — altitude que incapacitaria um mamífero
            equivalente.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Mamíferos</span>

        <h2>6. Mamíferos: Diversidade e Características Diagnósticas</h2>

        <p>
          Os mamíferos (classe <em>Mammalia</em>) surgiram há cerca de{" "}
          <strong>225 milhões de anos</strong> a partir de répteis
          cinodontes. Três características são exclusivas e definem o grupo:
          a presença de <strong>pelos</strong>, de{" "}
          <strong>glândulas mamárias</strong> (que produzem leite para
          amamentação dos filhotes) e do{" "}
          <strong>diafragma muscular</strong> (que aumenta a eficiência da
          ventilação pulmonar).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Pelos</h3>
            <p>
              Derivados de queratina, os pelos são exclusivos dos mamíferos.
              Funcionam como <strong>isolantes térmicos</strong>, permitindo a
              manutenção da homeotermia, e também como órgãos sensoriais
              (vibrissas) e de camuflagem.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍼</span>
            <h3>Glândulas mamárias</h3>
            <p>
              Glândulas exócrinas modificadas que secretam leite rico em
              gordura, proteínas (caseína), carboidratos (lactose) e
              anticorpos maternos. Garantem nutrição e proteção imunológica
              ao filhote nos primeiros meses de vida.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫁</span>
            <h3>Diafragma</h3>
            <p>
              Músculo que separa as cavidades torácica e abdominal. Sua
              contração aumenta o volume torácico, criando pressão negativa
              que puxa o ar para os pulmões — ventilação muito mais eficiente
              do que a dos répteis, que usam movimentos das costelas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦷</span>
            <h3>Heterodontia</h3>
            <p>
              Mamíferos possuem dentes <strong>diferenciados</strong> em
              incisivos, caninos, pré-molares e molares, cada um adaptado
              a uma função mastigatória. A mastigação aumenta a superfície
              de digestão, essencial para o alto metabolismo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Neocórtex</h3>
            <p>
              Estrutura exclusiva do cérebro dos mamíferos que permite
              aprendizado complexo, memória e comportamento social sofisticado.
              Primatas têm neocórtex altamente desenvolvido e pregueado
              (giriforme), ampliando a superfície de processamento.
            </p>
          </div>

          <div className="lesson-card">
            <span>❤️</span>
            <h3>Coração tetracameral</h3>
            <p>
              Dois átrios e dois ventrículos completamente separados garantem
              circulação <strong>dupla e completa</strong>: sangue venoso e
              arterial nunca se misturam, maximizando o aporte de O₂ aos
              tecidos para sustentar o metabolismo homeotérmico.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Subclasse</th>
                <th>Reprodução</th>
                <th>Amamentação</th>
                <th>Exemplos</th>
                <th>Distribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monotremados</strong> (Prototheria)</td>
                <td>Ovíparos — botam ovos com casca coriácea</td>
                <td>Sim (por poros na pele — sem tetos)</td>
                <td>Ornitorrinco, equidnas</td>
                <td>Austrália, Nova Guiné</td>
              </tr>
              <tr>
                <td><strong>Marsupiais</strong> (Metatheria)</td>
                <td>Viviparidade incompleta — filhote nasce imaturo</td>
                <td>Sim (dentro do marsúpio)</td>
                <td>Canguru, gambá, koala, quoll</td>
                <td>Américas e Australásia</td>
              </tr>
              <tr>
                <td><strong>Placentários</strong> (Eutheria)</td>
                <td>Vivíparos — placenta cório-alantoica</td>
                <td>Sim (tetos mamários)</td>
                <td>Humanos, baleias, morcegos, elefantes</td>
                <td>Todos os continentes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Detalhe sobre os monotremados</h3>
          <p>
            O <strong>ornitorrinco</strong> é um dos animais mais
            desconcertantes da zoologia: é um mamífero que bota ovos, possui
            bico córneo, membros palmados, esporão venenoso nos machos e detecta
            campos elétricos das presas pela eletrorrecepção do bico. Apesar de
            todas essas características "não-mamíferas", possui pelos e
            amamenta os filhotes — critérios suficientes para classificá-lo
            como mamífero.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>

        <h2>7. Aves × Mamíferos: Convergências e Divergências</h2>

        <p>
          Aves e mamíferos conquistaram de modo independente a{" "}
          <strong>homeotermia e o coração tetracameral</strong> — um exemplo
          notável de <strong>evolução convergente</strong>. Apesar das
          semelhanças funcionais, os dois grupos apresentam diferenças
          marcantes em praticamente todos os sistemas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Aves</th>
                <th>Mamíferos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cobertura corporal</td>
                <td>Penas (queratina)</td>
                <td>Pelos (queratina)</td>
              </tr>
              <tr>
                <td>Termorregulação</td>
                <td>Homeotérmicos (endotérmicos)</td>
                <td>Homeotérmicos (endotérmicos)</td>
              </tr>
              <tr>
                <td>Reprodução</td>
                <td>Ovíparas — ovos com casca calcária</td>
                <td>Maioria vivípara (exceto monotremados)</td>
              </tr>
              <tr>
                <td>Cuidado parental</td>
                <td>Incubação + alimentação dos filhotes</td>
                <td>Amamentação com leite das glândulas mamárias</td>
              </tr>
              <tr>
                <td>Respiração</td>
                <td>Fluxo unidirecional (sacos aéreos)</td>
                <td>Fluxo bidirecional (alvéolos + diafragma)</td>
              </tr>
              <tr>
                <td>Dentição</td>
                <td>Bico sem dentes (córneo)</td>
                <td>Dentes heterodônticos</td>
              </tr>
              <tr>
                <td>Coração</td>
                <td>4 câmaras; VE com parede espessa</td>
                <td>4 câmaras; VE com parede espessa</td>
              </tr>
              <tr>
                <td>Esqueleto</td>
                <td>Ossos pneumáticos (ocos); clavícula fundida em fúrcula</td>
                <td>Ossos maciços; mandíbula de 1 osso (dentário)</td>
              </tr>
              <tr>
                <td>Órgão vocal</td>
                <td>Syrinx (bifurcação traqueal)</td>
                <td>Laringe</td>
              </tr>
              <tr>
                <td>Excreção nitrogenada</td>
                <td>Ácido úrico (sólido) — economiza água</td>
                <td>Ureia (solúvel em água)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Evolução convergente × estruturas homólogas</h3>
          <p>
            A asa da ave e o braço do ser humano são <strong>estruturas
            homólogas</strong> — mesma origem embrionária (membro anterior de
            tetrápodes), funções diferentes. Já a asa da ave e a asa do
            morcego são <strong>estruturas análogas (convergentes)</strong> —
            mesma função (voo), mas origens evolutivas que divergiram e foram
            "redesenhadas" independentemente. A asa do morcego usa a membrana
            entre os dedos alongados; a da ave usa as penas nas asas com dedos
            fundidos.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Evolutiva</span>

        <h2>8. Síntese: As Cinco Classes de Vertebrados e a Conquista de Novos Ambientes</h2>

        <p>
          A história evolutiva dos vertebrados é marcada por uma progressão
          de inovações que permitiram a colonização de novos ambientes. A
          tabela a seguir resume as características-chave de cada classe,
          fornecendo um mapa conceitual completo para o ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Habitat</th>
                <th>Tegumento</th>
                <th>Respiração</th>
                <th>Coração</th>
                <th>Reprodução</th>
                <th>Termorreg.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Peixes</strong></td>
                <td>Aquático</td>
                <td>Escamas + muco</td>
                <td>Branquial</td>
                <td>2 câmaras</td>
                <td>Ovíparos (maioria)</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td><strong>Anfíbios</strong></td>
                <td>Aquático / terrestre</td>
                <td>Pele nua e úmida</td>
                <td>Pulmonar + cutânea</td>
                <td>3 câmaras</td>
                <td>Ovo sem casca na água</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td><strong>Répteis</strong></td>
                <td>Terrestre</td>
                <td>Escamas queratinosas</td>
                <td>Pulmonar</td>
                <td>3 (crocodil.: 4)</td>
                <td>Ovo amniótico com casca</td>
                <td>Pecilotérmico</td>
              </tr>
              <tr>
                <td><strong>Aves</strong></td>
                <td>Terrestre / aéreo</td>
                <td>Penas</td>
                <td>Pulmonar (sacos aéreos)</td>
                <td>4 câmaras</td>
                <td>Ovo com casca calcária</td>
                <td>Homeotérmico</td>
              </tr>
              <tr>
                <td><strong>Mamíferos</strong></td>
                <td>Todos</td>
                <td>Pelos</td>
                <td>Pulmonar (diafragma)</td>
                <td>4 câmaras</td>
                <td>Maioria vivípara</td>
                <td>Homeotérmico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Inovação 1: Membros</h3>
            <p>
              Peixes com nadadeiras lobadas originaram os primeiros tetrápodes
              (anfíbios ancestrais), permitindo locomoção em terra —
              há 375 Ma.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥚</span>
            <h3>Inovação 2: Ovo amniótico</h3>
            <p>
              Libertou os répteis ancestrais da dependência da água para
              reprodução, permitindo colonizar desertos e florestas secas —
              há 310 Ma.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Inovação 3: Homeotermia</h3>
            <p>
              Surgiu independentemente em aves e mamíferos; permitiu
              atividade noturna, regiões polares e altitudes elevadas —
              há cerca de 150–200 Ma.
            </p>
          </div>

          <div className="lesson-card">
            <span>👶</span>
            <h3>Inovação 4: Placentação</h3>
            <p>
              A placenta dos mamíferos eutérios permitiu gestação prolongada
              e filhotes mais desenvolvidos, reduzindo mortalidade pós-natal
              — vantagem evolutiva enorme.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 2 Técnicas, 1 Avançada e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Adaptações das Aves ao Voo"
          statement={
            <p>
              As aves apresentam diversas adaptações que reduzem seu peso
              corporal e aumentam a eficiência do voo. Qual das
              características a seguir é responsável, simultaneamente, por
              reduzir a densidade óssea e melhorar a oxigenação dos tecidos?
            </p>
          }
          options={[
            { letter: "a", text: "Presença de penas com estrutura de queratina" },
            { letter: "b", text: "Bico sem dentes e moela muscular" },
            {
              letter: "c",
              text: "Ossos pneumáticos conectados ao sistema de sacos aéreos",
              correct: true,
            },
            { letter: "d", text: "Carina esternal ampliada para inserção muscular" },
          ]}
          resolution={
            <p>
              Os <strong>ossos pneumáticos</strong> das aves são ocos e
              comunicam-se com os sacos aéreos. Isso os torna mais leves
              (reduzindo o peso total) e, ao mesmo tempo, integra o esqueleto
              ao sistema respiratório, aumentando o volume de ar disponível.
              As penas (a) isolam termicamente; o bico/moela (b) auxiliam na
              digestão; a carina (d) serve à musculatura peitoral — nenhum
              desses cumpre os dois papéis descritos na questão.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Subclasses de Mamíferos"
          statement={
            <p>
              O ornitorrinco é classificado como mamífero apesar de apresentar
              bico córneo, botar ovos e possuir esporão venenoso. A principal
              justificativa para sua inclusão na classe Mammalia é a presença
              de:
            </p>
          }
          options={[
            { letter: "a", text: "Quatro câmaras cardíacas e circulação dupla completa" },
            { letter: "b", text: "Respiração exclusivamente pulmonar" },
            {
              letter: "c",
              text: "Pelos e glândulas mamárias produtoras de leite",
              correct: true,
            },
            { letter: "d", text: "Ectotermia e fecundação interna" },
          ]}
          resolution={
            <p>
              Os critérios diagnósticos exclusivos de Mammalia são{" "}
              <strong>pelos e glândulas mamárias</strong>. O ornitorrinco
              possui ambos: seu corpo é coberto de pelos e, embora não tenha
              tetos, secreta leite por glândulas dérmicas modificadas. Coração
              tetracameral (a) e respiração pulmonar (b) ocorrem também em
              aves e répteis; ectotermia (d) é característica de répteis, não
              de mamíferos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fluxo Unidirecional de Ar nas Aves"
          statement={
            <p>
              Pesquisadores mediram a concentração de O₂ no ar que entra e sai
              dos pulmões de uma ave durante um voo a 6 000 m de altitude.
              Observaram que a extração de O₂ pelo pulmão era de ~40%, enquanto
              em mamíferos de tamanho semelhante na mesma altitude era de ~25%.
              Qual propriedade do sistema respiratório das aves explica essa
              maior eficiência?
            </p>
          }
          options={[
            { letter: "a", text: "Presença de alvéolos com maior área de superfície do que nos mamíferos" },
            { letter: "b", text: "Maior frequência respiratória que aumenta a renovação do ar nos pulmões" },
            {
              letter: "c",
              text: "Fluxo unidirecional do ar elimina o espaço morto respiratório, mantendo alta pO₂ no pulmão tanto na inspiração quanto na expiração",
              correct: true,
            },
            { letter: "d", text: "Pulmões maiores em proporção ao corpo quando comparados aos mamíferos" },
          ]}
          resolution={
            <p>
              As aves não possuem alvéolos; seus pulmões são formados por{" "}
              <strong>parabrônquios</strong>. Os sacos aéreos funcionam como
              foles que impulsionam o ar de forma <strong>unidirecional</strong>{" "}
              pelos parabrônquios: primeiro para os sacos posteriores
              (inspiração 1), depois pelo pulmão (expiração 1) e daí para os
              sacos anteriores (inspiração 2) e para fora (expiração 2).
              Isso elimina o "espaço morto" dos mamíferos, nos quais ar rico
              em CO₂ fica nos alvéolos ao final de cada expiração, diluindo
              o ar fresco da próxima inspiração. A maior extração de O₂ a
              altitudes elevadas é a consequência direta desse mecanismo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Temperatura e Atividade Animal (ENEM)"
          statement={
            <p>
              Em uma região de clima temperado, um ecólogo observou que cobras
              e lagartos ficam imóveis e enterrados durante o inverno, enquanto
              pássaros e esquilos mantêm atividade plena mesmo com temperaturas
              abaixo de 0 °C. Com base na fisiologia desses animais, a
              explicação correta para esse comportamento diferencial é:
            </p>
          }
          options={[
            { letter: "a", text: "Cobras e lagartos migram para regiões quentes, enquanto aves e esquilos suportam o frio por serem maiores" },
            { letter: "b", text: "Répteis possuem respiração branquial, que é ineficiente no frio; aves e mamíferos têm respiração pulmonar mais eficiente" },
            {
              letter: "c",
              text: "Répteis são ectotérmicos e dependem do calor ambiental para ativar seu metabolismo; aves e mamíferos são endotérmicos e geram calor internamente, independentemente da temperatura externa",
              correct: true,
            },
            { letter: "d", text: "A diferença se deve apenas ao tipo de alimento: répteis se alimentam de plantas que desaparecem no inverno" },
          ]}
          resolution={
            <p>
              Cobras e lagartos são <strong>ectotérmicos (pecilotérmicos)</strong>:
              em baixas temperaturas, as reações enzimáticas do metabolismo
              desaceleram a tal ponto que a locomoção e a captura de presas
              se tornam inviáveis. A torpor invernal (hibernação nos répteis)
              é uma estratégia de sobrevivência. Já aves e mamíferos são{" "}
              <strong>endotérmicos (homeotérmicos)</strong>: seu metabolismo
              gera calor suficiente para manter ~37–42 °C internamente,
              independentemente do ambiente, permitindo atividade contínua
              no inverno.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Evolução do Coração e Desempenho Atlético"
          statement={
            <p>
              Um estudante afirma que o coração de quatro câmaras de aves e
              mamíferos é resultado de evolução convergente a partir de um
              ancestral réptil com coração de três câmaras. Ao analisar essa
              afirmação sob a perspectiva da fisiologia cardíaca, qual vantagem
              adaptativa direta a separação completa das cavidades ventriculares
              conferiu a esses animais homeotérmicos?
            </p>
          }
          options={[
            { letter: "a", text: "Reduziu a frequência cardíaca, diminuindo o gasto energético em repouso" },
            {
              letter: "b",
              text: "Impediu a mistura de sangue oxigenado e venoso, aumentando o aporte de O₂ aos tecidos e sustentando o alto metabolismo homeotérmico",
              correct: true,
            },
            { letter: "c", text: "Permitiu respiração cutânea simultânea à respiração pulmonar" },
            { letter: "d", text: "Eliminou a necessidade de capilares sanguíneos na pele, reduzindo a perda de calor" },
          ]}
          resolution={
            <p>
              Com o septo ventricular completo, o lado direito do coração
              bombeia sangue <strong>desoxigenado</strong> exclusivamente para
              os pulmões (circulação pulmonar), e o esquerdo bombeia sangue{" "}
              <strong>totalmente oxigenado</strong> para o corpo (circulação
              sistêmica). Essa separação garante que os tecidos recebam sangue
              com máxima concentração de O₂, essencial para sustentar o alto
              metabolismo dos animais homeotérmicos — que podem consumir até
              10× mais O₂ por grama de tecido do que répteis ectotérmicos
              equivalentes. A afirmação do estudante está correta: crocodilianos
              desenvolveram o septo completo independentemente das aves (apesar
              de serem parentes próximos), e os mamíferos o desenvolveram a
              partir de cinodontes, confirmando a convergência evolutiva.
            </p>
          }
        />
      </section>
    </article>
  );
}
