"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 32</span>

          <h1>Botânica Fanerogâmica: Gimnospermas e Angiospermas</h1>

          <p>
            As fanerógamas — ou espermatófitas — representam o grupo de plantas
            que dominou os ecossistemas terrestres graças a uma inovação
            evolutiva fundamental: a <strong>semente</strong>. Neste capítulo
            você vai compreender por que a semente libertou as plantas da
            dependência da água, conhecer os dois grandes grupos (gimnospermas e
            angiospermas), dominar a estrutura da flor e o fenômeno exclusivo da{" "}
            <strong>dupla fecundação</strong>, e distinguir monocotiledôneas de
            eudicotiledôneas — temas entre os mais recorrentes no ENEM e nos
            vestibulares.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Espermatófitas</span>

        <h2>1. Fanerógamas: Plantas com Semente</h2>

        <p>
          O nome <strong>fanerógamas</strong> (do grego{" "}
          <em>phaneros</em> = visível + <em>gamos</em> = casamento) refere-se
          ao fato de suas estruturas reprodutivas serem conspícuas — flores,
          frutos ou cones. O nome alternativo, <strong>espermatófitas</strong>{" "}
          (do grego <em>sperma</em> = semente), destaca o traço mais importante
          do grupo: a produção de sementes.
        </p>

        <p>
          Durante a evolução vegetal, o grupo ancestral das plantas vasculares
          (traqueófitas) deu origem, entre outros, às{" "}
          <strong>pteridófitas</strong> (samambaias, avencas) — que ainda
          dependem de água líquida para que os anterozoides nadem até o
          arquegônio — e, num salto evolutivo decisivo, às{" "}
          <strong>espermatófitas</strong>, que substituíram a água pelo{" "}
          <strong>tubo polínico</strong>, levando o gameta masculino diretamente
          ao óvulo. Essa conquista permitiu a colonização de ambientes áridos e
          transformou as plantas com semente nos vegetais dominantes do planeta.
        </p>

        <div className="lesson-highlight">
          <h3>A semente como vantagem adaptativa</h3>
          <p>
            A semente reúne três estruturas fundamentais: o{" "}
            <strong>embrião</strong> (esporófito jovem com radícula, plúmula e
            cotilédone(s)); a <strong>reserva nutritiva</strong> (endosperma ou
            tecido do cotilédone); e o <strong>tegumento</strong> (proteção
            contra dessecação, predação e choques mecânicos). Juntas, essas
            estruturas conferem dormência e resistência que as pteridófitas
            — com esporos haploides nus — jamais possuíram.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Proteção do embrião</h3>
            <p>O tegumento isola o embrião de variações ambientais extremas.</p>
          </div>
          <div className="lesson-card">
            <span>🍯</span>
            <h3>Reserva nutritiva</h3>
            <p>Endosperma ou cotilédones fornecem energia para a germinação.</p>
          </div>
          <div className="lesson-card">
            <span>💨</span>
            <h3>Dispersão eficiente</h3>
            <p>Estruturas como asas, ganchos e polpa permitem ampla disseminação.</p>
          </div>
          <div className="lesson-card">
            <span>⏸️</span>
            <h3>Dormência</h3>
            <p>A germinação pode aguardar condições ideais de umidade e temperatura.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gimnospermas</span>

        <h2>2. Gimnospermas: Sementes Nuas</h2>

        <p>
          <strong>Gimnospermas</strong> (do grego <em>gymnos</em> = nu +{" "}
          <em>sperma</em> = semente) são as plantas vasculares com semente mais
          primitivas ainda existentes. Sua característica diagnóstica é
          possuírem <strong>sementes expostas</strong>, ou seja, não
          envoltas por um fruto — os óvulos ficam sobre as escamas de estruturas
          chamadas <strong>estróbilos</strong> (popularmente conhecidas como
          "pinhas" ou "cones"), sem que haja um ovário fechado ao redor deles.
        </p>

        <p>
          As gimnospermas atuais dividem-se em quatro filos principais:{" "}
          <strong>Coniferophyta</strong> (pinheiros, ciprestes, sequoias,
          araucárias — o maior grupo), <strong>Cycadophyta</strong> (cicas,
          relíquias do Jurássico), <strong>Ginkgophyta</strong> (o famoso{" "}
          <em>Ginkgo biloba</em>, considerado fóssil vivo) e{" "}
          <strong>Gnetophyta</strong> (gêneros tropicais e desérticos como{" "}
          <em>Welwitschia</em>). No Brasil, a araucária (pinheiro-do-paraná,{" "}
          <em>Araucaria angustifolia</em>) é a conífera nativa mais conhecida,
          símbolo da Mata de Araucárias ou Floresta Ombrófila Mista.
        </p>

        <div className="lesson-highlight">
          <h3>Características diagnósticas das gimnospermas</h3>
          <p>
            São plantas <strong>vasculares</strong> (xilema e floema presentes),{" "}
            <strong>heterosporadas</strong> (produzem micrósporos e macrós­poros
            em estruturas separadas), com <strong>sementes nuas</strong>{" "}
            (óvulos expostos nas escamas do estróbilo feminino),{" "}
            <strong>sem flores verdadeiras</strong> e <strong>sem frutos</strong>.
            A polinização é predominantemente <strong>anemófila</strong>{" "}
            (pelo vento), e o <strong>esporófito diploide (2n)</strong>{" "}
            é a geração dominante e visivelmente desenvolvida — o gametófito é
            microscópico e totalmente dependente do esporófito.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 260"
            width="680"
            height="260"
            aria-label="Ciclo reprodutivo simplificado das gimnospermas"
          >
            {/* Background */}
            <rect x={0} y={0} width={680} height={260} rx={16} fill="#f0fdf4" />

            {/* Título */}
            <text x={340} y={26} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">
              Ciclo reprodutivo das gimnospermas (conífera)
            </text>

            {/* Estróbilo masculino */}
            <rect x={30} y={50} width={140} height={60} rx={10} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
            <text x={100} y={74} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Estróbilo</text>
            <text x={100} y={90} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">masculino (♂)</text>
            <text x={100} y={106} textAnchor="middle" fontSize={10} fill="#78350f">→ grãos de pólen</text>

            {/* Seta para pólen no vento */}
            <path d="M 170 80 C 230 60, 290 55, 340 75" fill="none" stroke="#d97706" strokeWidth={1.8} strokeDasharray="5 3" markerEnd="url(#arr1)" />
            <text x={255} y={55} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#d97706">vento (anemofilia)</text>

            {/* Estróbilo feminino */}
            <rect x={270} y={50} width={140} height={60} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={340} y={74} textAnchor="middle" fontSize={12} fontWeight={700} fill="#15803d">Estróbilo</text>
            <text x={340} y={90} textAnchor="middle" fontSize={12} fontWeight={700} fill="#15803d">feminino (♀)</text>
            <text x={340} y={106} textAnchor="middle" fontSize={10} fill="#14532d">→ óvulos expostos</text>

            {/* Seta para fecundação */}
            <line x1={340} y1={110} x2={340} y2={150} stroke="#16a34a" strokeWidth={1.8} markerEnd="url(#arr2)" />
            <text x={360} y={135} fontSize={10} fill="#16a34a">fecundação</text>

            {/* Semente */}
            <rect x={270} y={150} width={140} height={50} rx={10} fill="#bbf7d0" stroke="#15803d" strokeWidth={1.5} />
            <text x={340} y={172} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Semente</text>
            <text x={340} y={188} textAnchor="middle" fontSize={10} fill="#14532d">nua (sem fruto)</text>

            {/* Plântula */}
            <rect x={500} y={50} width={140} height={60} rx={10} fill="#d1fae5" stroke="#059669" strokeWidth={1.5} />
            <text x={570} y={75} textAnchor="middle" fontSize={12} fontWeight={700} fill="#064e3b">Nova planta</text>
            <text x={570} y={91} textAnchor="middle" fontSize={10} fill="#064e3b">esporófito 2n</text>
            <text x={570} y={106} textAnchor="middle" fontSize={10} fill="#064e3b">(pinheiro adulto)</text>

            {/* Seta semente → plântula */}
            <path d="M 410 175 C 450 175, 500 130, 540 100" fill="none" stroke="#059669" strokeWidth={1.8} markerEnd="url(#arr3)" />
            <text x={480} y={165} fontSize={10} fontStyle="italic" fill="#059669">germinação</text>

            {/* Nota sem fruto */}
            <rect x={30} y={160} width={200} height={44} rx={8} fill="#fff7ed" stroke="#ea580c" strokeWidth={1} />
            <text x={130} y={178} textAnchor="middle" fontSize={11} fontWeight={700} fill="#c2410c">Sem fruto!</text>
            <text x={130} y={194} textAnchor="middle" fontSize={10} fill="#c2410c">óvulo fica exposto na escama</text>

            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#d97706" />
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
              <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#059669" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Ciclo simplificado das gimnospermas: o pólen é transportado pelo
            vento até o estróbilo feminino; após a fecundação forma-se a semente
            nua — sem fruto envolvente.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Angiospermas — Visão Geral</span>

        <h2>3. Angiospermas: Flor, Fruto e Semente Protegida</h2>

        <p>
          As <strong>angiospermas</strong> (do grego <em>angeion</em> = urna,
          vaso + <em>sperma</em> = semente) são o grupo de plantas com o maior
          sucesso evolutivo: mais de <strong>300 000 espécies</strong>{" "}
          conhecidas, representando cerca de 80% de todas as espécies vegetais
          atuais. A inovação central que as distingue das gimnospermas é o{" "}
          <strong>ovário fechado</strong>: os óvulos ficam encerrados dentro do
          pistilo (gineceu), protegidos. Após a fecundação, o ovário se
          desenvolve em <strong>fruto</strong>, e os óvulos tornam-se{" "}
          <strong>sementes</strong>.
        </p>

        <p>
          A flor é a estrutura reprodutiva exclusiva das angiospermas. Ela
          centraliza o encontro dos gametas (polinização), a fecundação e o
          início do desenvolvimento da semente — tudo em uma estrutura única e
          altamente adaptada para atrair polinizadores ou aproveitar o vento.
          Além disso, as angiospermas são as únicas plantas que realizam a
          chamada <strong>dupla fecundação</strong>, gerando um endosperma
          nutrido e triploide (3n) que confere vantagem no desenvolvimento do
          embrião.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌸</span>
            <h3>Flor</h3>
            <p>Estrutura reprodutiva exclusiva; atrai polinizadores e centraliza a fecundação.</p>
          </div>
          <div className="lesson-card">
            <span>🍎</span>
            <h3>Fruto</h3>
            <p>Ovário maduro que protege e auxilia na dispersão das sementes.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Ampla distribuição</h3>
            <p>Presente em todos os biomas, de florestas tropicais a desertos.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Dupla fecundação</h3>
            <p>Exclusiva das angiospermas; gera zigoto (2n) e endosperma (3n).</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura da Flor</span>

        <h2>4. A Flor em Detalhe: Peças Florais</h2>

        <p>
          A flor completa é composta por quatro verticilos (conjuntos de peças
          inseridos no receptáculo floral), de fora para dentro:{" "}
          <strong>cálice</strong>, <strong>corola</strong>,{" "}
          <strong>androceu</strong> e <strong>gineceu</strong>. Flores que
          possuem os quatro verticilos são chamadas <strong>completas</strong>;
          aquelas que possuem androceu e gineceu são <strong>perfeitas</strong>{" "}
          (hermafroditas); as que possuem apenas um dos dois são{" "}
          <strong>imperfeitas</strong> (unissexuadas).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 620 320"
            width="620"
            height="320"
            aria-label="Estrutura completa de uma flor com peças rotuladas"
          >
            <rect x={0} y={0} width={620} height={320} rx={14} fill="#fff7f9" />
            <text x={310} y={24} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7c1d35">
              Estrutura da Flor — corte esquemático
            </text>

            {/* Pedúnculo */}
            <rect x={290} y={270} width={40} height={40} rx={4} fill="#92400e" />
            <text x={345} y={295} fontSize={11} fill="#92400e">pedúnculo</text>

            {/* Receptáculo */}
            <ellipse cx={310} cy={265} rx={50} ry={12} fill="#d97706" />
            <text x={375} y={269} fontSize={11} fill="#d97706">receptáculo</text>

            {/* Sépalas / Cálice */}
            <ellipse cx={310} cy={240} rx={65} ry={14} fill="#16a34a" opacity={0.7} />
            <text x={385} y={244} fontSize={11} fill="#15803d">cálice (sépalas)</text>

            {/* Pétalas / Corola — grandes, coloridas */}
            <ellipse cx={210} cy={190} rx={38} ry={18} fill="#f472b6" opacity={0.85} transform="rotate(-30,210,190)" />
            <ellipse cx={260} cy={155} rx={38} ry={18} fill="#fb7185" opacity={0.85} transform="rotate(-10,260,155)" />
            <ellipse cx={360} cy={155} rx={38} ry={18} fill="#fb923c" opacity={0.85} transform="rotate(10,360,155)" />
            <ellipse cx={410} cy={190} rx={38} ry={18} fill="#fbbf24" opacity={0.85} transform="rotate(30,410,190)" />
            <text x={440} y={158} fontSize={11} fill="#be185d">corola (pétalas)</text>

            {/* Estames / Androceu */}
            {[285, 300, 315, 330].map((cx, i) => (
              <g key={i}>
                <line x1={cx} y1={215} x2={cx} y2={170} stroke="#92400e" strokeWidth={2} />
                <ellipse cx={cx} cy={165} rx={6} ry={5} fill="#fbbf24" stroke="#92400e" strokeWidth={1} />
              </g>
            ))}
            <text x={350} y={168} fontSize={11} fill="#92400e">androceu</text>
            <text x={350} y={180} fontSize={10} fill="#92400e">(estames: filete + antera)</text>

            {/* Pistilo / Gineceu */}
            <ellipse cx={310} cy={225} rx={20} ry={8} fill="#15803d" />
            <rect x={305} y={175} width={10} height={50} rx={4} fill="#4ade80" />
            <ellipse cx={310} cy={173} rx={12} ry={8} fill="#16a34a" />
            <text x={215} y={178} textAnchor="end" fontSize={11} fill="#14532d">gineceu</text>
            <text x={215} y={190} textAnchor="end" fontSize={10} fill="#14532d">(estigma+estilete+ovário)</text>
            <line x1={218} y1={183} x2={298} y2={183} stroke="#14532d" strokeWidth={1} strokeDasharray="3 2" />

            {/* Ovário com óvulo */}
            <ellipse cx={310} cy={225} rx={20} ry={8} fill="#bbf7d0" stroke="#15803d" strokeWidth={1.5} />
            <circle cx={310} cy={225} r={4} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
            <text x={215} y={228} textAnchor="end" fontSize={10} fill="#14532d">ovário + óvulo</text>
            <line x1={218} y1={225} x2={288} y2={225} stroke="#14532d" strokeWidth={1} strokeDasharray="3 2" />
          </svg>
          <figcaption>
            Flor completa e perfeita em corte esquemático. O gineceu (pistilo)
            possui estigma, estilete e ovário, onde ficam os óvulos. Os estames
            compõem o androceu (filete + antera, que produz o pólen).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verticilo</th>
                <th>Peças</th>
                <th>Função</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cálice</strong></td>
                <td>Sépalas (geralmente verdes)</td>
                <td>Proteger o botão floral</td>
                <td>Verticilo mais externo</td>
              </tr>
              <tr>
                <td><strong>Corola</strong></td>
                <td>Pétalas (coloridas/aromáticas)</td>
                <td>Atrair polinizadores</td>
                <td>Ausente em flores anemófilas</td>
              </tr>
              <tr>
                <td><strong>Androceu</strong></td>
                <td>Estames (filete + antera)</td>
                <td>Produzir grãos de pólen</td>
                <td>Parte masculina da flor</td>
              </tr>
              <tr>
                <td><strong>Gineceu</strong></td>
                <td>Carpelos (estigma + estilete + ovário)</td>
                <td>Receber o pólen; conter os óvulos</td>
                <td>Parte feminina; ovário → fruto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dupla Fecundação</span>

        <h2>5. Dupla Fecundação e Formação do Endosperma</h2>

        <p>
          O processo reprodutivo das angiospermas é único no reino vegetal. O{" "}
          <strong>tubo polínico</strong> cresce pelo estilete e conduz{" "}
          <strong>dois núcleos espermáticos</strong> (n) até o saco embrionário,
          que contém a <strong>oosfera</strong> (n) e os{" "}
          <strong>dois núcleos polares</strong> (n + n). A seguir ocorrem duas
          fecundações simultâneas:
        </p>

        <div className="lesson-highlight">
          <h3>As duas fecundações</h3>
          <p>
            <strong>1ª fecundação:</strong> um núcleo espermático (n) funde-se
            com a oosfera (n) → zigoto diploidie <strong>2n</strong>, que dará
            origem ao embrião.
          </p>
          <p>
            <strong>2ª fecundação:</strong> o outro núcleo espermático (n)
            funde-se com os dois núcleos polares (n + n) → célula-mãe do
            endosperma <strong>3n</strong> (triploide), que por mitoses repetidas
            origina o <strong>endosperma</strong> — tecido nutritivo que sustenta
            o embrião durante a germinação.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 640 230"
            width="640"
            height="230"
            aria-label="Diagrama da dupla fecundação das angiospermas"
          >
            <rect x={0} y={0} width={640} height={230} rx={14} fill="#faf5ff" />
            <text x={320} y={24} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4c1d95">
              Dupla Fecundação nas Angiospermas
            </text>

            {/* Grão de pólen + tubo polínico */}
            <ellipse cx={60} cy={100} rx={36} ry={22} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
            <text x={60} y={96} textAnchor="middle" fontSize={10} fontWeight={700} fill="#92400e">grão de</text>
            <text x={60} y={108} textAnchor="middle" fontSize={10} fontWeight={700} fill="#92400e">pólen</text>
            <path d="M 96 100 L 220 100" fill="none" stroke="#d97706" strokeWidth={2} markerEnd="url(#ap)" />
            <text x={158} y={92} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#d97706">tubo polínico</text>

            {/* Saco embrionário */}
            <ellipse cx={360} cy={115} rx={120} ry={75} fill="#ede9fe" stroke="#7c3aed" strokeWidth={2} />
            <text x={360} y={52} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4c1d95">saco embrionário</text>

            {/* Oosfera */}
            <circle cx={310} cy={100} r={18} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={310} y={96} textAnchor="middle" fontSize={10} fontWeight={700} fill="#3b0764">oosfera</text>
            <text x={310} y={108} textAnchor="middle" fontSize={9} fill="#4c1d95">(n)</text>

            {/* Núcleos polares */}
            <circle cx={395} cy={120} r={14} fill="#ddd6fe" stroke="#7c3aed" strokeWidth={1.2} />
            <text x={395} y={116} textAnchor="middle" fontSize={9} fill="#4c1d95">n. polar</text>
            <text x={395} y={126} textAnchor="middle" fontSize={9} fill="#4c1d95">(n)</text>
            <circle cx={425} cy={100} r={14} fill="#ddd6fe" stroke="#7c3aed" strokeWidth={1.2} />
            <text x={425} y={96} textAnchor="middle" fontSize={9} fill="#4c1d95">n. polar</text>
            <text x={425} y={106} textAnchor="middle" fontSize={9} fill="#4c1d95">(n)</text>

            {/* Núcleos espermáticos chegando */}
            <circle cx={235} cy={88} r={10} fill="#fcd34d" stroke="#92400e" strokeWidth={1.2} />
            <text x={235} y={84} textAnchor="middle" fontSize={8} fill="#78350f">esp.</text>
            <text x={235} y={94} textAnchor="middle" fontSize={8} fill="#78350f">(n)</text>
            <circle cx={235} cy={115} r={10} fill="#fcd34d" stroke="#92400e" strokeWidth={1.2} />
            <text x={235} y={111} textAnchor="middle" fontSize={8} fill="#78350f">esp.</text>
            <text x={235} y={121} textAnchor="middle" fontSize={8} fill="#78350f">(n)</text>

            {/* Setas de fecundação */}
            <line x1={245} y1={88} x2={292} y2={98} stroke="#7c3aed" strokeWidth={1.5} markerEnd="url(#ap2)" />
            <line x1={245} y1={115} x2={380} y2={115} stroke="#7c3aed" strokeWidth={1.5} markerEnd="url(#ap2)" />

            {/* Resultados */}
            <rect x={490} y={65} width={130} height={44} rx={8} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={555} y={83} textAnchor="middle" fontSize={11} fontWeight={700} fill="#3b0764">Zigoto (2n)</text>
            <text x={555} y={97} textAnchor="middle" fontSize={10} fill="#4c1d95">→ embrião</text>

            <rect x={490} y={130} width={130} height={44} rx={8} fill="#a78bfa" stroke="#6d28d9" strokeWidth={1.5} />
            <text x={555} y={148} textAnchor="middle" fontSize={11} fontWeight={700} fill="#2e1065">Endosperma (3n)</text>
            <text x={555} y={162} textAnchor="middle" fontSize={10} fill="#2e1065">→ tecido nutritivo</text>

            <line x1={315} y1={100} x2={489} y2={87} stroke="#7c3aed" strokeWidth={1.2} strokeDasharray="4 2" markerEnd="url(#ap2)" />
            <line x1={410} y1={115} x2={489} y2={148} stroke="#6d28d9" strokeWidth={1.2} strokeDasharray="4 2" markerEnd="url(#ap3)" />

            <defs>
              <marker id="ap" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#d97706" />
              </marker>
              <marker id="ap2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
              </marker>
              <marker id="ap3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6d28d9" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Na dupla fecundação, um núcleo espermático (n) funde-se com a
            oosfera (n) formando o zigoto (2n); o outro funde-se com os dois
            núcleos polares (n + n) originando o endosperma triploide (3n).
          </figcaption>
        </figure>

        <p>
          Após a dupla fecundação, o <strong>ovário se desenvolve em fruto</strong>{" "}
          e os <strong>óvulos se tornam sementes</strong>. O endosperma (3n)
          pode ser mantido na semente madura (como no milho, onde forma o
          "albúmen") ou ser absorvido pelos cotilédones durante o
          desenvolvimento embrionário (como no feijão, em que os cotilédones
          incham com reservas). Nas monocotiledôneas, o endosperma persiste na
          semente; nas eudicotiledôneas, em geral é absorvido.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Polinização e Dispersão</span>

        <h2>6. Polinização, Fruto e Dispersão de Sementes</h2>

        <p>
          <strong>Polinização</strong> é a transferência do grão de pólen da
          antera até o estigma. Pode ocorrer dentro da mesma flor
          (<strong>autopolinização</strong>) ou entre flores de plantas
          diferentes (<strong>polinização cruzada</strong>), sendo esta última
          mais vantajosa evolutivamente por aumentar a variabilidade genética.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐝</span>
            <h3>Entomofilia</h3>
            <p>Polinização por insetos (abelhas, borboletas). Flores vistosas, aromáticas, com néctar.</p>
          </div>
          <div className="lesson-card">
            <span>🦜</span>
            <h3>Ornitofilia</h3>
            <p>Polinização por aves (beija-flores). Flores tubulares, vermelhas/laranja, sem cheiro.</p>
          </div>
          <div className="lesson-card">
            <span>🦇</span>
            <h3>Quiropterofilia</h3>
            <p>Polinização por morcegos. Flores brancas, grandes, abertas à noite, odor forte.</p>
          </div>
          <div className="lesson-card">
            <span>💨</span>
            <h3>Anemofilia</h3>
            <p>Polinização pelo vento. Flores inconspícuas, sem pétalas, muito pólen leve e seco.</p>
          </div>
        </div>

        <p>
          Após a fecundação, o <strong>fruto</strong> (ovário maduro + semente)
          tem papel fundamental na <strong>dispersão</strong>. Os mecanismos
          incluem: <strong>zoocoria</strong> (por animais — frutos carnosos
          atraentes, ou frutos com ganchos que prendem ao pelo);
          <strong> anemocoria</strong> (pelo vento — frutos com asas ou plumas,
          como o dente-de-leão); <strong>hidrocoria</strong> (pela água — frutos
          flutuantes como o coco); e <strong>autocoria</strong> (dispersão
          explosiva pela própria planta, como o feijão-do-campo).
        </p>

        <div className="lesson-highlight">
          <h3>Fruto verdadeiro vs. pseudofruto</h3>
          <p>
            <strong>Fruto verdadeiro</strong> é desenvolvido exclusivamente a
            partir do ovário (ex.: uva, tomate, manga). O{" "}
            <strong>pseudofruto</strong> inclui outras partes florais além do
            ovário — no morango, a parte carnosa e comestível é o receptáculo
            floral engrossado; no caju, o pedúnculo engrossado; na maçã, o
            hipanto (receptáculo tubular). As sementes verdadeiras ficam na
            periferia (morango) ou no interior (maçã, caju).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mono vs. Eudicotiledôneas</span>

        <h2>7. Monocotiledôneas × Eudicotiledôneas</h2>

        <p>
          As angiospermas são divididas, na classificação filogenética moderna,
          em vários grupos, sendo os dois maiores{" "}
          <strong>Monocotiledôneas</strong> (monocots) e{" "}
          <strong>Eudicotiledôneas</strong> (eudicots, o antigo grupo das
          "dicotiledôneas"). A diferença mais simples está no número de{" "}
          <strong>cotilédones</strong> — folhas embrionárias presentes na
          semente —, mas vários outros caracteres acompanham essa distinção de
          forma consistente.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 260"
            width="680"
            height="260"
            aria-label="Comparação visual entre monocotiledônea e eudicotiledônea"
          >
            <rect x={0} y={0} width={680} height={260} rx={14} fill="#f0f9ff" />
            <text x={340} y={24} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0c4a6e">
              Monocotiledônea × Eudicotiledônea
            </text>

            {/* ── Monocotiledônea ── */}
            <text x={170} y={50} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0369a1">Monocotiledônea</text>

            {/* Folha paralela */}
            <ellipse cx={170} cy={100} rx={40} ry={60} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            {[-20,-8,0,8,20].map((dx) => (
              <line key={dx} x1={170+dx} y1={48} x2={170+dx} y2={152} stroke="#15803d" strokeWidth={1} />
            ))}
            <text x={170} y={175} textAnchor="middle" fontSize={10} fill="#15803d">nervuras paralelas</text>

            {/* Raiz fasciculada */}
            {[-20,-12,-4,4,12,20].map((dx,i) => (
              <path key={i} d={`M 170 200 Q ${170+dx} ${220+Math.abs(dx)} ${170+dx*1.5} 248`} fill="none" stroke="#92400e" strokeWidth={1.5} />
            ))}
            <text x={170} y={258} textAnchor="middle" fontSize={10} fill="#92400e">raiz fasciculada</text>

            {/* Flor trímera */}
            {[0,60,120,180,240,300].map((a,i) => {
              const rad = (a * Math.PI) / 180;
              const cx = 510 + Math.cos(rad) * 28;
              const cy = 100 + Math.sin(rad) * 28;
              return <ellipse key={i} cx={cx} cy={cy} rx={12} ry={6} fill={i<3?"#f472b6":"#fde68a"} stroke="#be185d" strokeWidth={1} transform={`rotate(${a},${cx},${cy})`} />;
            })}
            <circle cx={510} cy={100} r={10} fill="#fbbf24" stroke="#d97706" strokeWidth={1.2} />
            <text x={510} y={145} textAnchor="middle" fontSize={10} fill="#be185d">flor trímera (3 ou múlt. de 3)</text>

            {/* Feixe monocot */}
            {[470,500,530,560].map((cx) => (
              <circle key={cx} cx={cx} cy={190} r={10} fill="#c7d2fe" stroke="#4338ca" strokeWidth={1.2} />
            ))}
            <text x={515} y={218} textAnchor="middle" fontSize={10} fill="#4338ca">feixes vasculares dispersos</text>

            {/* Separador */}
            <line x1={340} y1={40} x2={340} y2={255} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6 4" />
            <text x={340} y={140} textAnchor="middle" fontSize={22} fill="#94a3b8">|</text>

            {/* ── Eudicotiledônea ── */}
            <text x={510} y={50} textAnchor="middle" fontSize={12} fontWeight={700} fill="#b45309">Eudicotiledônea</text>
            {/* já colocado acima o círculo da flor; precisa redefinir posições */}

            {/* Folha reticulada */}
            <ellipse cx={170} cy={100} rx={40} ry={60} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            {/* (já renderizado acima como monocot leaf — eudicot leaf deslocado) */}

            {/* Redesenhando do lado eudicot corretamente */}
            {/* Folha eudicot */}
            <ellipse cx={510} cy={100} rx={40} ry={60} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            {/* nervura central */}
            <line x1={510} y1={48} x2={510} y2={152} stroke="#92400e" strokeWidth={2} />
            {/* nervuras laterais */}
            {[-3,-1,1,3].map((n) => (
              <line key={n} x1={510} y1={80+n*18} x2={510+35*Math.sign(1)} y2={80+n*18+8} stroke="#ca8a04" strokeWidth={1} />
            ))}
            {[-3,-1,1,3].map((n) => (
              <line key={n+"l"} x1={510} y1={80+n*18} x2={510-35} y2={80+n*18+8} stroke="#ca8a04" strokeWidth={1} />
            ))}
            <text x={510} y={175} textAnchor="middle" fontSize={10} fill="#92400e">nervuras reticuladas</text>

            {/* Raiz pivotante */}
            <line x1={510} y1={200} x2={510} y2={248} stroke="#92400e" strokeWidth={3} />
            {[-18,-10,10,18].map((dx,i) => (
              <line key={i} x1={510} y1={215+i*6} x2={510+dx} y2={228+i*6} stroke="#92400e" strokeWidth={1.2} />
            ))}
            <text x={510} y={258} textAnchor="middle" fontSize={10} fill="#92400e">raiz pivotante (axial)</text>

            {/* Monocot — reescrevendo flor e feixes no lado correto */}
            {/* Flor trímera do lado monocot */}
            {[0,60,120,180,240,300].map((a,i) => {
              const rad = (a * Math.PI) / 180;
              const cx = 170 + Math.cos(rad) * 28;
              const cy = 320 + Math.sin(rad) * 28;
              return <ellipse key={"m"+i} cx={cx} cy={cy} rx={12} ry={6} fill={i<3?"#f472b6":"#fde68a"} stroke="#be185d" strokeWidth={1} transform={`rotate(${a},${cx},${cy})`} />;
            })}
          </svg>
          <figcaption>
            Comparação morfológica: monocotiledôneas têm nervuras paralelas,
            raiz fasciculada e flores trímeras; eudicotiledôneas apresentam
            nervuras reticuladas, raiz pivotante e flores tetra ou pentâmeras.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Monocotiledôneas</th>
                <th>Eudicotiledôneas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cotilédones na semente</td>
                <td>1 (um)</td>
                <td>2 (dois)</td>
              </tr>
              <tr>
                <td>Nervação foliar</td>
                <td>Paralela (paralelinérvia)</td>
                <td>Reticulada (peninérvia ou palminérvia)</td>
              </tr>
              <tr>
                <td>Raízes</td>
                <td>Fasciculadas (cabelosas)</td>
                <td>Pivotante (axial com raízes secundárias)</td>
              </tr>
              <tr>
                <td>Feixes vasculares no caule</td>
                <td>Dispersos (sem câmbio)</td>
                <td>Organizados em anel (com câmbio)</td>
              </tr>
              <tr>
                <td>Crescimento secundário</td>
                <td>Ausente (geralmente)</td>
                <td>Presente (madeira, cortiça)</td>
              </tr>
              <tr>
                <td>Peças florais</td>
                <td>Trímeras (3 ou múltiplos de 3)</td>
                <td>Tetrâmeras ou pentâmeras (4 ou 5)</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Milho, arroz, cana, bambu, orquídeas, lírios</td>
                <td>Feijão, soja, rosa, girassol, carvalho, ervilha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo Geral</span>

        <h2>8. Gimnospermas × Angiospermas: Quadro Comparativo</h2>

        <p>
          A transição de gimnospermas para angiospermas representa um dos
          saltos evolutivos mais significativos da história das plantas. A
          "invenção" do <strong>fruto</strong> e da{" "}
          <strong>dupla fecundação</strong>, aliada à diversificação das flores
          para atrair polinizadores, conferiu às angiospermas uma eficiência
          reprodutiva e uma capacidade de adaptação sem precedentes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Gimnospermas</th>
                <th>Angiospermas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Óvulo / semente</td>
                <td>Nua (exposta na escama do estróbilo)</td>
                <td>Protegida dentro do ovário (→ fruto)</td>
              </tr>
              <tr>
                <td>Estrutura reprodutiva</td>
                <td>Estróbilo / cone (pinha)</td>
                <td>Flor</td>
              </tr>
              <tr>
                <td>Fruto</td>
                <td>Ausente</td>
                <td>Presente (ovário maduro)</td>
              </tr>
              <tr>
                <td>Polinização</td>
                <td>Predominantemente anemófila</td>
                <td>Anemófila ou biótica (insetos, aves, etc.)</td>
              </tr>
              <tr>
                <td>Fecundação</td>
                <td>Simples (1 espermatozoide + oosfera)</td>
                <td>Dupla (zigoto 2n + endosperma 3n)</td>
              </tr>
              <tr>
                <td>Endosperma</td>
                <td>Formado antes da fecundação (haploide)</td>
                <td>Formado após a fecundação (triploide 3n)</td>
              </tr>
              <tr>
                <td>Folhas</td>
                <td>Geralmente aciculares (agulhas)</td>
                <td>Grande diversidade morfológica</td>
              </tr>
              <tr>
                <td>Diversidade de espécies</td>
                <td>~1 000 espécies</td>
                <td>~300 000 espécies</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Pinheiros, araucárias, cicas, <em>Ginkgo</em></td>
                <td>Arroz, feijão, mangueira, girassol, orquídeas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Ponto-chave para o ENEM</h3>
          <p>
            Questões frequentes envolvem: (1) identificar se uma estrutura é
            fruto verdadeiro ou pseudofruto; (2) distinguir o produto das duas
            fecundações (zigoto 2n vs. endosperma 3n); (3) classificar uma
            planta como mono ou eudicotiledônea a partir de uma figura de folha,
            raiz ou flor; (4) relacionar o surgimento do grão de pólen com a
            independência da água. Esses quatro pontos cobrem a maioria das
            questões de fanerógamas no ENEM e nos grandes vestibulares.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Gimnospermas e a semente nua"
          statement={
            <p>
              Assinale a alternativa que indica corretamente a principal
              diferença entre gimnospermas e angiospermas quanto à proteção das
              sementes.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Gimnospermas possuem frutos carnosos; angiospermas possuem cones.",
            },
            {
              letter: "b",
              text: "Gimnospermas possuem sementes nuas (óvulos expostos); angiospermas possuem sementes protegidas pelo fruto.",
              correct: true,
            },
            {
              letter: "c",
              text: "Gimnospermas dependem de água para a fecundação; angiospermas não possuem gametas.",
            },
            {
              letter: "d",
              text: "Angiospermas não produzem sementes; gimnospermas sim.",
            },
          ]}
          resolution={
            <p>
              A palavra "gimnosperma" significa "semente nua": os óvulos ficam
              expostos nas escamas dos estróbilos, sem que haja um ovário
              fechado ao redor deles. Nas angiospermas, o ovário envolve os
              óvulos e, após a fecundação, desenvolve-se em fruto — protegendo
              a semente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Dupla fecundação e ploidia"
          statement={
            <p>
              Na dupla fecundação das angiospermas, dois núcleos espermáticos
              haploides (n) participam de dois eventos distintos. Qual é a
              ploidia correta dos produtos dessas duas fecundações?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Zigoto haploide (n) e endosperma diploide (2n).",
            },
            {
              letter: "b",
              text: "Zigoto diploide (2n) e endosperma triploide (3n).",
              correct: true,
            },
            {
              letter: "c",
              text: "Zigoto triploide (3n) e endosperma diploide (2n).",
            },
            {
              letter: "d",
              text: "Ambos os produtos são diploides (2n).",
            },
          ]}
          resolution={
            <p>
              Na 1ª fecundação: núcleo espermático (n) + oosfera (n) = zigoto{" "}
              <strong>2n</strong>. Na 2ª fecundação: núcleo espermático (n) +
              dois núcleos polares (n + n) = endosperma <strong>3n</strong>{" "}
              (triploide). O endosperma 3n é tecido nutritivo exclusivo das
              angiospermas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mono vs. eudicot — identificação morfológica"
          statement={
            <p>
              Um botânico encontra uma planta com as seguintes características:
              folhas com nervação reticulada, raiz com eixo principal
              desenvolvido (pivotante), flores com cinco pétalas e dois
              cotilédones na semente. Essa planta deve ser classificada como:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Gimnosperma, pois possui semente com dois cotilédones.",
            },
            {
              letter: "b",
              text: "Monocotiledônea, pois as flores possuem múltiplos de cinco.",
            },
            {
              letter: "c",
              text: "Eudicotiledônea, pois apresenta nervação reticulada, raiz pivotante, flor pentâmera e dois cotilédones.",
              correct: true,
            },
            {
              letter: "d",
              text: "Pteridófita, pois possui folhas com nervuras visíveis.",
            },
          ]}
          resolution={
            <p>
              Todos os caracteres indicam eudicotiledônea: <strong>nervação
              reticulada</strong> (vs. paralela nas monocots),{" "}
              <strong>raiz pivotante</strong> (vs. fasciculada),{" "}
              <strong>flor pentâmera</strong> (5 pétalas — múltiplo de 5, típico
              de eudicots; monocots têm múltiplos de 3) e{" "}
              <strong>dois cotilédones</strong>. Pteridófitas não possuem semente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Fruto verdadeiro ou pseudofruto? (ENEM)"
          statement={
            <p>
              No ENEM de 2019 foi apresentado um texto sobre a produção de
              morango no Brasil. Do ponto de vista botânico, a parte carnosa e
              vermelha que consumimos no morango é classificada como pseudofruto.
              Isso ocorre porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O morango não possui sementes.",
            },
            {
              letter: "b",
              text: "A parte comestível do morango se desenvolve a partir do receptáculo floral engrossado, e não do ovário.",
              correct: true,
            },
            {
              letter: "c",
              text: "O morango é uma gimnosperma, portanto não pode formar fruto verdadeiro.",
            },
            {
              letter: "d",
              text: "O morango realiza dupla fecundação, o que impede a formação de fruto verdadeiro.",
            },
          ]}
          resolution={
            <p>
              Fruto verdadeiro é formado exclusivamente pelo ovário maduro. No
              morango, os "pontinhos" na superfície são os frutos verdadeiros
              (aquênios), cada um com uma semente. A polpa vermelha e carnosa é
              o <strong>receptáculo floral</strong> engrossado — um{" "}
              <strong>pseudofruto</strong>. Situação similar ocorre no caju
              (pedúnculo engrossado) e na maçã (hipanto).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Araucária e importância ecológica"
          statement={
            <p>
              A araucária (<em>Araucaria angustifolia</em>), espécie ameaçada
              de extinção da Mata Atlântica, produz os "pinhões" — sementes
              nutritivas consumidas por humanos e animais como a gralha-azul.
              Com base nas características das gimnospermas, qual afirmativa
              sobre a araucária está INCORRETA?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A araucária produz sementes nuas, sem fruto verdadeiro envolvente.",
            },
            {
              letter: "b",
              text: "A polinização da araucária é realizada principalmente pelo vento.",
            },
            {
              letter: "c",
              text: "A araucária realiza dupla fecundação, originando endosperma triploide (3n) como reserva do pinhão.",
              correct: true,
            },
            {
              letter: "d",
              text: "A araucária possui estróbilos masculinos e femininos como estruturas reprodutivas.",
            },
          ]}
          resolution={
            <p>
              A dupla fecundação com formação de endosperma triploide (3n){" "}
              <strong>é exclusiva das angiospermas</strong>. A araucária é uma
              gimnosperma: realiza apenas fecundação simples (um núcleo
              espermático + oosfera), e a reserva nutritiva do pinhão
              (endosperma haploide ou gametofítico) é formada{" "}
              <strong>antes</strong> da fecundação, derivado do gametófito
              feminino — processo completamente distinto da dupla fecundação das
              angiospermas.
            </p>
          }
        />
      </section>
    </article>
  );
}
