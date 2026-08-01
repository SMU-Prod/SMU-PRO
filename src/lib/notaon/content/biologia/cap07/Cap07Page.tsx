"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 7</span>

          <h1>Citoplasma e Organelas (Membranosas e Não-Membranosas)</h1>

          <p>
            O citoplasma é o cenário dinâmico onde a vida celular se manifesta
            em toda a sua complexidade. Nele flutuam, interagem e se reorganizam
            continuamente dezenas de estruturas especializadas — as{" "}
            <strong>organelas</strong> — cada uma com identidade molecular e
            função precisa. Compreender o citoplasma e suas organelas é essencial
            para dominar temas do ENEM e dos vestibulares que envolvem
            metabolismo energético, síntese e secreção de proteínas, digestão
            intracelular, fotossíntese, divisão celular e a fascinante teoria
            endossimbiótica. Este capítulo organiza esse universo de forma
            progressiva, relacionando estrutura com função em cada passo.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Organização Interna</span>

        <h2>1. O Citoplasma — Composição e Funções</h2>

        <p>
          O <strong>citoplasma</strong> é a região da célula eucariótica
          delimitada externamente pela membrana plasmática e internamente pelo
          envoltório nuclear. Ele é um ambiente aquoso, viscoso e altamente
          organizado que ocupa a maior parte do volume celular. Sua composição
          pode ser dividida em quatro compartimentos funcionais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Citosol (Hialoplasma)</h3>
            <p>
              Fase líquida coloidal (~70% de água) onde ocorrem reações da
              glicólise, síntese de aminoácidos e tradução ribossômica livre.
              Mantém o pH celular e dissolve íons, metabólitos e proteínas
              solúveis.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Organelas</h3>
            <p>
              Estruturas especializadas, membranosas ou não, responsáveis por
              funções específicas — de produção de energia à digestão
              intracelular e secreção.
            </p>
          </div>

          <div className="lesson-card">
            <span>🕸️</span>
            <h3>Citoesqueleto</h3>
            <p>
              Rede dinâmica de filamentos proteicos que sustenta a forma
              celular, ancora organelas, permite movimentos e participa da
              divisão celular.
            </p>
          </div>

          <div className="lesson-card">
            <span>📦</span>
            <h3>Inclusões Citoplasmáticas</h3>
            <p>
              Depósitos temporários de reserva: grânulos de glicogênio (células
              animais), grãos de amido (vegetais), gotículas lipídicas e
              pigmentos.
            </p>
          </div>
        </div>

        <p>
          O citosol não é um simples "líquido de relleno": nele ocorrem a{" "}
          <strong>glicólise</strong> (10 reações que convertem glicose em
          piruvato), a síntese de nucleotídeos, a regulação do cálcio citossólico
          e o trânsito contínuo de vesículas guiadas pelo citoesqueleto. A
          <strong> viscosidade do citosol</strong> varia regionalmente — mais
          fluida ao redor de organelas metabolicamente ativas, mais gel-like
          sob a membrana plasmática (córtex celular).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Diagrama esquemático da célula eucariótica animal com organelas rotuladas">
            {/* Célula — contorno */}
            <ellipse cx={350} cy={130} rx={320} ry={115} fill="#fef9f0" stroke="#d97706" strokeWidth={2} />
            {/* Núcleo */}
            <ellipse cx={350} cy={130} rx={72} ry={58} fill="#ede9fe" stroke="#7c3aed" strokeWidth={2} />
            <text x={350} y={125} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">Núcleo</text>
            <text x={350} y={140} textAnchor="middle" fontSize={9} fill="#5b21b6">(nucleoplasma+</text>
            <text x={350} y={152} textAnchor="middle" fontSize={9} fill="#5b21b6">cromatina)</text>
            {/* Mitocôndria */}
            <ellipse cx={175} cy={100} rx={38} ry={22} fill="#d1fae5" stroke="#059669" strokeWidth={1.5} />
            <path d="M 155 100 Q 165 90, 175 100 Q 185 110, 195 100" fill="none" stroke="#059669" strokeWidth={1.5} />
            <text x={175} y={85} textAnchor="middle" fontSize={9} fontWeight={700} fill="#065f46">Mitocôndria</text>
            {/* RER */}
            <path d="M 490 85 Q 520 78, 540 95 Q 520 103, 490 97 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth={1.2} />
            <circle cx={496} cy={91} r={3} fill="#1d4ed8" />
            <circle cx={505} cy={88} r={3} fill="#1d4ed8" />
            <circle cx={514} cy={91} r={3} fill="#1d4ed8" />
            <text x={515} y={78} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e3a8a">RER</text>
            {/* Golgi */}
            <path d="M 490 120 Q 525 112, 540 128" fill="none" stroke="#f59e0b" strokeWidth={4} strokeLinecap="round" />
            <path d="M 492 132 Q 527 124, 540 140" fill="none" stroke="#f59e0b" strokeWidth={4} strokeLinecap="round" />
            <path d="M 494 144 Q 529 136, 540 152" fill="none" stroke="#f59e0b" strokeWidth={4} strokeLinecap="round" />
            <text x={555} y={138} textAnchor="start" fontSize={9} fontWeight={700} fill="#92400e">Golgi</text>
            {/* Lisossomo */}
            <circle cx={185} cy={175} r={16} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} />
            <text x={185} y={179} textAnchor="middle" fontSize={8} fontWeight={700} fill="#991b1b">Lisoss.</text>
            {/* Ribossomos livres */}
            <circle cx={260} cy={85} r={4} fill="#6366f1" />
            <circle cx={272} cy={90} r={4} fill="#6366f1" />
            <circle cx={264} cy={100} r={4} fill="#6366f1" />
            <text x={266} y={72} textAnchor="middle" fontSize={8} fill="#3730a3">Riboss.</text>
            {/* Centríolo */}
            <rect x={290} y={185} width={20} height={12} rx={3} fill="#fce7f3" stroke="#ec4899" strokeWidth={1.2} />
            <text x={300} y={210} textAnchor="middle" fontSize={8} fontWeight={700} fill="#9d174d">Centríolo</text>
            {/* REL */}
            <path d="M 160 140 Q 200 150, 215 135 Q 230 120, 215 108" fill="none" stroke="#a78bfa" strokeWidth={2} strokeDasharray="4 2" />
            <text x={160} y={160} textAnchor="middle" fontSize={8} fontWeight={700} fill="#6d28d9">REL</text>
            {/* Peroxissomo */}
            <circle cx={430} cy={75} r={14} fill="#ecfdf5" stroke="#10b981" strokeWidth={1.2} />
            <text x={430} y={72} textAnchor="middle" fontSize={7} fontWeight={700} fill="#065f46">Perox.</text>
            <text x={430} y={82} textAnchor="middle" fontSize={7} fill="#065f46">issomo</text>
            {/* Membrana */}
            <text x={90} y={130} textAnchor="middle" fontSize={8} fill="#b45309" fontStyle="italic">Membrana</text>
            <text x={90} y={142} textAnchor="middle" fontSize={8} fill="#b45309" fontStyle="italic">plasmática</text>
            {/* Citosol label */}
            <text x={350} y={215} textAnchor="middle" fontSize={10} fill="#9ca3af" fontStyle="italic">citosol (hialoplasma)</text>
          </svg>
          <figcaption>Visão esquemática de uma célula animal com as principais organelas — posições aproximadas para fins didáticos.</figcaption>
        </figure>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação Geral</span>

        <h2>2. Organelas Membranosas vs. Não-Membranosas</h2>

        <p>
          A primeira grande divisão das organelas baseia-se na presença ou
          ausência de membrana lipoproteica envolvente. Essa distinção tem
          consequências funcionais diretas: organelas membranosas criam{" "}
          <strong>compartimentos isolados</strong> com pH e composição química
          próprios, essenciais para reações que seriam destrutivas no citosol
          (p. ex., as hidrolases ácidas dos lisossomos). As organelas
          não-membranosas, por sua vez, interagem diretamente com o citosol
          e, em geral, funcionam como máquinas moleculares de grande
          complexidade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Organelas / estruturas</th>
                <th>Característica essencial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Membranosas simples</strong></td>
                <td>RE liso, RE rugoso, Complexo de Golgi, Lisossomos, Peroxissomos, Vacúolos</td>
                <td>Uma membrana lipoproteica delimita o compartimento interno</td>
              </tr>
              <tr>
                <td><strong>Membranosas duplas</strong></td>
                <td>Mitocôndrias, Cloroplastos</td>
                <td>Duas membranas concêntricas; possuem DNA e ribossomos próprios</td>
              </tr>
              <tr>
                <td><strong>Não-membranosas</strong></td>
                <td>Ribossomos, Centríolos, Citoesqueleto (microtúbulos, microfilamentos, filamentos intermediários)</td>
                <td>Complexos ribonucleoproteicos ou proteicos sem membrana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que a dupla membrana importa no ENEM?</h3>
          <p>
            Mitocôndrias e cloroplastos possuem{" "}
            <strong>DNA circular, ribossomos 70S e divisão por fissão binária</strong>
            , evidências que sustentam a{" "}
            <strong>Teoria Endossimbiótica</strong> de Lynn Margulis: essas
            organelas teriam origem em bactérias englobadas por células
            hospedeiras ancestrais há mais de 1,5 bilhão de anos. Questões de
            vestibular frequentemente exploram esses argumentos comparativos.
          </p>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Proteica</span>

        <h2>3. Ribossomos — A Fábrica de Proteínas</h2>

        <p>
          Os <strong>ribossomos</strong> são os únicos responsáveis pela{" "}
          <strong>tradução</strong> — o processo de ler a sequência de códons do
          RNA mensageiro e montar a cadeia polipeptídica correspondente. São
          compostos por <strong>RNA ribossômico (rRNA)</strong> e{" "}
          <strong>proteínas ribossômicas</strong>, organizados em duas
          subunidades (grande e pequena) que se associam ao mRNA durante a
          tradução.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Ribossomos Livres</h3>
            <p>
              Dispersos no citosol; sintetizam proteínas que permanecem no
              citoplasma, no núcleo ou são destinadas a organelas (mitocôndria,
              cloroplasto, peroxissomo).
            </p>
          </div>

          <div className="lesson-card">
            <span>📎</span>
            <h3>Ribossomos Aderidos ao RER</h3>
            <p>
              Ancorados na face citossólica do Retículo Endoplasmático Rugoso;
              sintetizam proteínas secretadas, proteínas de membrana e enzimas
              lisossômicas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Polirribossomos (Polissomos)</h3>
            <p>
              Vários ribossomos lendo o mesmo mRNA simultaneamente, aumentando
              a eficiência da tradução. Comuns em células de alta demanda
              proteica, como células pancreáticas exócrinas.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Ribossomos 70S vs. 80S</h3>
          <p>
            Procariotos e organelas semi-autônomas (mitocôndrias, cloroplastos)
            possuem ribossomos <strong>70S</strong> (subunidades 50S + 30S).
            Eucariotos citossólicos possuem ribossomos <strong>80S</strong>{" "}
            (60S + 40S). Essa diferença é explorada pelos antibióticos:
            estreptomicina e tetraciclina inibem o 70S sem afetar
            significativamente o 80S humano.
          </p>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Via Secretora</span>

        <h2>4. Retículo Endoplasmático e Complexo de Golgi</h2>

        <p>
          O <strong>Retículo Endoplasmático (RE)</strong> é uma extensa rede de
          túbulos e cisternas membranosas contínua com o envoltório nuclear. Ele
          existe em duas formas funcionalmente distintas: o{" "}
          <strong>Retículo Endoplasmático Rugoso (RER)</strong>, hérissado de
          ribossomos, e o{" "}
          <strong>Retículo Endoplasmático Liso (REL)</strong>, sem ribossomos.
          Juntos, formam o ponto de partida da <em>via secretora</em>, que
          culmina no Complexo de Golgi.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>RER — Retículo Rugoso</h3>
            <p>
              Ribossomos aderidos inserem proteínas nascentes no lúmen ou na
              membrana do RE. Realiza dobramento proteico com auxílio de
              chaperonas, N-glicosilação inicial e controle de qualidade
              (proteínas mal dobradas são degradadas pelo proteassomo).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>REL — Retículo Liso</h3>
            <p>
              Síntese de fosfolipídios e lipídios de membrana; produção de
              hormônios esteroides (células das gônadas e córtex adrenal);
              desintoxicação (células do fígado — hepatócitos); armazenamento
              e liberação de Ca²⁺ (retículo sarcoplasmático muscular).
            </p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>
            <h3>Complexo de Golgi</h3>
            <p>
              Pilhas de cisternas achatadas (<em>dictiossomos</em>) com face{" "}
              <em>cis</em> (recebe vesículas do RER) e face <em>trans</em>{" "}
              (expede vesículas ao destino final). Processa glicosilações,
              fosforilações e sulfatações; endereça proteínas para lisossomos,
              membrana plasmática ou secreção extracelular.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 190" width="680" height="190" aria-label="Via secretora: RER → Golgi → vesícula → secreção">
            {/* RER */}
            <rect x={20} y={60} width={130} height={70} rx={10} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={85} y={88} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a8a">RER</text>
            <text x={85} y={104} textAnchor="middle" fontSize={10} fill="#1e3a8a">síntese +</text>
            <text x={85} y={117} textAnchor="middle" fontSize={10} fill="#1e3a8a">glicosilação inicial</text>
            {/* Ribossomos no RER */}
            {[30, 44, 58, 72, 86, 100, 114, 128].map((cx) => (
              <circle key={cx} cx={cx} cy={60} r={4} fill="#1d4ed8" />
            ))}
            {/* Seta RER → Golgi */}
            <polygon points="160,92 180,86 180,98" fill="#6b7280" />
            <line x1={150} y1={92} x2={178} y2={92} stroke="#6b7280" strokeWidth={1.5} />
            <text x={165} y={82} textAnchor="middle" fontSize={9} fill="#6b7280">vesícula</text>
            {/* Golgi cis */}
            <path d="M 185 70 Q 295 62, 305 80" fill="none" stroke="#f59e0b" strokeWidth={8} strokeLinecap="round" />
            <path d="M 185 88 Q 295 80, 305 98" fill="none" stroke="#f59e0b" strokeWidth={8} strokeLinecap="round" />
            <path d="M 185 106 Q 295 98, 305 116" fill="none" stroke="#f59e0b" strokeWidth={8} strokeLinecap="round" />
            <path d="M 185 124 Q 295 116, 305 134" fill="none" stroke="#f59e0b" strokeWidth={8} strokeLinecap="round" />
            <text x={245} y={55} textAnchor="middle" fontSize={9} fill="#92400e" fontStyle="italic">← cis</text>
            <text x={245} y={150} textAnchor="middle" fontSize={9} fill="#92400e" fontStyle="italic">trans →</text>
            <text x={245} y={170} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">Complexo de Golgi</text>
            {/* Seta Golgi → destinos */}
            <polygon points="316,92 336,86 336,98" fill="#6b7280" />
            <line x1={306} y1={92} x2={334} y2={92} stroke="#6b7280" strokeWidth={1.5} />
            {/* Destinos */}
            <rect x={340} y={28} width={130} height={42} rx={8} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.2} />
            <text x={405} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill="#991b1b">Lisossomo</text>
            <text x={405} y={63} textAnchor="middle" fontSize={9} fill="#991b1b">enzimas hidrolíticas</text>
            <rect x={340} y={80} width={130} height={42} rx={8} fill="#d1fae5" stroke="#059669" strokeWidth={1.2} />
            <text x={405} y={102} textAnchor="middle" fontSize={11} fontWeight={700} fill="#065f46">Secreção</text>
            <text x={405} y={115} textAnchor="middle" fontSize={9} fill="#065f46">exocitose extracelular</text>
            <rect x={340} y={132} width={130} height={42} rx={8} fill="#f3e8ff" stroke="#9333ea" strokeWidth={1.2} />
            <text x={405} y={154} textAnchor="middle" fontSize={11} fontWeight={700} fill="#6b21a8">Membrana</text>
            <text x={405} y={167} textAnchor="middle" fontSize={9} fill="#6b21a8">proteínas integrais</text>
            {/* Linhas destinos */}
            <line x1={336} y1={92} x2={340} y2={49} stroke="#9ca3af" strokeWidth={1} strokeDasharray="3 2" />
            <line x1={336} y1={92} x2={340} y2={101} stroke="#9ca3af" strokeWidth={1} />
            <line x1={336} y1={92} x2={340} y2={153} stroke="#9ca3af" strokeWidth={1} strokeDasharray="3 2" />
          </svg>
          <figcaption>Via secretora clássica: o RER sintetiza proteínas, vesículas transportam-nas ao Golgi (face <em>cis</em>), que as processa e as direciona pela face <em>trans</em> a lisossomos, membrana ou secreção.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Dictiossomos — detalhe vegetal</h3>
          <p>
            Em células vegetais, os dictiossomos (empilhamentos individuais do
            Golgi) são mais numerosos e dispersos pelo citoplasma. Eles
            participam da síntese de <strong>pectinas e hemiceluloses</strong>{" "}
            que compõem a parede celular, além de produzir a{" "}
            <strong>lamela média</strong> durante a divisão celular.
          </p>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Digestão Intracelular</span>

        <h2>5. Lisossomos e Peroxissomos</h2>

        <p>
          <strong>Lisossomos</strong> são vesículas membranosas originadas do
          Complexo de Golgi que contêm mais de 50 tipos de{" "}
          <strong>enzimas hidrolíticas ácidas</strong> (proteases, lipases,
          nucleases, glicosidases). O pH interno é mantido em torno de{" "}
          <strong>4,5–5,0</strong> por bombas de prótons (H⁺-ATPases) na
          membrana lisossômica — pH incompatível com o funcionamento normal das
          enzimas no citosol, o que protege a célula de autodigestão acidental.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍽️</span>
            <h3>Heterofagia</h3>
            <p>
              Digestão de material externo captado por endocitose (fagocitose
              ou pinocitose). O fagossomo funde-se ao lisossomo formando o
              fagolisossomo. Exemplo clássico: macrófagos destruindo bactérias.
            </p>
          </div>

          <div className="lesson-card">
            <span>♻️</span>
            <h3>Autofagia</h3>
            <p>
              Degradação de organelas danificadas ou envelhecidas da própria
              célula. O autofagossomo isola o alvo e funde-se ao lisossomo.
              Processo essencial no jejum celular e remodelação tecidual.
            </p>
          </div>

          <div className="lesson-card">
            <span>💀</span>
            <h3>Autólise</h3>
            <p>
              Ruptura dos lisossomos que libera enzimas no citoplasma e
              destrói a célula. Fisiológica em metamorfose (reabsorção da cauda
              de girino) e patológica em isquemia tecidual.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Peroxissomos — oxidação e detoxificação</h3>
          <p>
            Os <strong>peroxissomos</strong> (microcorpos) realizam reações
            oxidativas que produzem peróxido de hidrogênio (H₂O₂) como
            subproduto — daí o nome. A enzima <strong>catalase</strong> decompõe
            imediatamente o H₂O₂ em H₂O + O₂, evitando dano oxidativo. São
            abundantes em células do fígado e rim, onde participam da
            β-oxidação de ácidos graxos de cadeia muito longa e da
            neutralização de álcool etílico e outros tóxicos.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Organela</th>
                <th>Origem</th>
                <th>pH interno</th>
                <th>Funções principais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lisossomo</td>
                <td>Complexo de Golgi</td>
                <td>~4,5–5,0 (ácido)</td>
                <td>Heterofagia, autofagia, autólise, remodelação óssea</td>
              </tr>
              <tr>
                <td>Peroxissomo</td>
                <td>Fissão de peroxissomos preexistentes + importação de proteínas</td>
                <td>~7,0 (neutro)</td>
                <td>β-oxidação de ácidos graxos, detoxificação, catálise do H₂O₂</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Produção de Energia</span>

        <h2>6. Mitocôndrias — A Central Energética da Célula</h2>

        <p>
          As <strong>mitocôndrias</strong> são organelas de dupla membrana
          presentes em praticamente todas as células eucarióticas aeróbicas.
          Sua função central é a realização da{" "}
          <strong>respiração celular aeróbica</strong>, processo que oxida
          substratos orgânicos (principalmente piruvato derivado da glicólise) e
          conserva energia na forma de <strong>ATP</strong>. Uma célula hepática
          típica possui entre 1 000 e 2 000 mitocôndrias — as células com maior
          demanda energética, como as fibras musculares cardíacas, podem ter até
          5 000.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 560 200" width="560" height="200" aria-label="Estrutura da mitocôndria em corte longitudinal">
            {/* Contorno externo */}
            <ellipse cx={280} cy={100} rx={250} ry={88} fill="#f0fdf4" stroke="#16a34a" strokeWidth={2} />
            {/* Membrana interna */}
            <ellipse cx={280} cy={100} rx={230} ry={70} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="6 3" />
            {/* Cristas mitocondriais */}
            {[100, 160, 220, 280, 340, 400].map((cx) => (
              <path key={cx} d={`M ${cx} 30 Q ${cx + 20} 60, ${cx} 90`} fill="none" stroke="#059669" strokeWidth={3} strokeLinecap="round" />
            ))}
            {/* Espaço intermembrana */}
            <text x={60} y={70} textAnchor="middle" fontSize={9} fill="#065f46" fontStyle="italic">espaço</text>
            <text x={60} y={82} textAnchor="middle" fontSize={9} fill="#065f46" fontStyle="italic">intermbr.</text>
            {/* Matriz */}
            <text x={280} y={148} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Matriz mitocondrial</text>
            <text x={280} y={163} textAnchor="middle" fontSize={10} fill="#166534">(Ciclo de Krebs • DNA circular • Ribossomos 70S)</text>
            {/* Labels membrana */}
            <text x={280} y={22} textAnchor="middle" fontSize={10} fontWeight={700} fill="#166534">Membrana externa</text>
            <text x={480} y={105} textAnchor="start" fontSize={9} fill="#15803d">Membrana</text>
            <text x={480} y={117} textAnchor="start" fontSize={9} fill="#15803d">interna</text>
            {/* Crista label */}
            <text x={195} y={58} textAnchor="middle" fontSize={9} fill="#047857">cristas</text>
          </svg>
          <figcaption>Corte longitudinal de mitocôndria: membrana interna dobrada em cristas aumenta a superfície para a cadeia respiratória e a ATP-sintase.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Glicólise (citosol)</h3>
            <p>
              Glicose → 2 piruvatos + 2 ATP líquidos + 2 NADH. Ocorre no
              citosol, independente de O₂ (anaeróbica).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ciclo de Krebs (matriz)</h3>
            <p>
              Acetil-CoA é oxidado a CO₂; gera NADH, FADH₂ e 2 ATP por ciclo.
              Supre a cadeia de transporte de elétrons com portadores de
              hidrogênio.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Fosforilação Oxidativa (membrana interna)</h3>
            <p>
              Cadeia respiratória oxida NADH e FADH₂; gradiente de H⁺ impulsiona
              a ATP-sintase. Produto: ~30–32 ATP por molécula de glicose.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Evidências da Teoria Endossimbiótica</h3>
          <p>
            Mitocôndrias apresentam: (1) <strong>dupla membrana</strong> — a
            interna é homóloga à membrana de bactérias aeróbicas; (2){" "}
            <strong>DNA circular</strong> sem histonas; (3){" "}
            <strong>ribossomos 70S</strong>, sensíveis a antibióticos como
            cloranfenicol e estreptomicina; (4) <strong>divisão por fissão
            binária</strong> independente do ciclo celular; (5) fosfatidilglicerol
            (cardiolipina) na membrana interna — lipídio bacteriano ausente em
            outras membranas eucarióticas.
          </p>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fotossíntese</span>

        <h2>7. Cloroplastos e Outros Plastos</h2>

        <p>
          Os <strong>cloroplastos</strong> são organelas de dupla membrana
          exclusivas das células vegetais e das algas, responsáveis pela{" "}
          <strong>fotossíntese</strong> — a conversão de energia luminosa em
          energia química armazenada na glicose. Como as mitocôndrias, possuem
          DNA circular e ribossomos 70S, reforçando a origem endossimbiótica
          (a partir de uma cianobactéria ancestral).
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 300 210" width="300" height="210" aria-label="Estrutura do cloroplasto em corte">
              {/* Membrana externa */}
              <ellipse cx={150} cy={105} rx={135} ry={90} fill="#f0fdf4" stroke="#16a34a" strokeWidth={2} />
              {/* Membrana interna */}
              <ellipse cx={150} cy={105} rx={118} ry={75} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.2} strokeDasharray="5 3" />
              {/* Tilacoides — grana */}
              {/* grana 1 */}
              <ellipse cx={90} cy={95} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              <ellipse cx={90} cy={80} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              <ellipse cx={90} cy={65} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              {/* grana 2 */}
              <ellipse cx={170} cy={115} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              <ellipse cx={170} cy={100} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              <ellipse cx={170} cy={85} rx={28} ry={10} fill="#4ade80" stroke="#15803d" strokeWidth={1} />
              {/* estroma lamela (linha entre grana) */}
              <line x1={118} y1={80} x2={142} y2={100} stroke="#15803d" strokeWidth={1.5} strokeDasharray="3 2" />
              {/* Labels */}
              <text x={90} y={116} textAnchor="middle" fontSize={8} fill="#14532d">grana</text>
              <text x={90} y={127} textAnchor="middle" fontSize={8} fill="#14532d">(tilacoides)</text>
              <text x={150} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="#14532d">Estroma</text>
              <text x={150} y={173} textAnchor="middle" fontSize={8} fill="#166534">(Ciclo de Calvin • DNA • Riboss.)</text>
              <text x={150} y={20} textAnchor="middle" fontSize={9} fontWeight={700} fill="#166534">Cloroplasto</text>
            </svg>
            <figcaption>Estrutura interna do cloroplasto: grana (pilhas de tilacoides) imersos no estroma.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 300 210" width="300" height="210" aria-label="Diagrama das fases da fotossíntese">
              {/* Fase clara */}
              <rect x={20} y={30} width={120} height={70} rx={10} fill="#fefce8" stroke="#ca8a04" strokeWidth={1.5} />
              <text x={80} y={58} textAnchor="middle" fontSize={12} fontWeight={700} fill="#713f12">Fase Clara</text>
              <text x={80} y={72} textAnchor="middle" fontSize={9} fill="#713f12">(reações de luz)</text>
              <text x={80} y={86} textAnchor="middle" fontSize={9} fill="#713f12">Tilacoide — grana</text>
              {/* Entradas fase clara */}
              <text x={20} y={20} textAnchor="start" fontSize={9} fill="#b45309">luz + H₂O</text>
              <polygon points="50,30 44,22 56,22" fill="#ca8a04" />
              {/* Saídas fase clara */}
              <text x={20} y={120} textAnchor="start" fontSize={9} fill="#065f46">ATP + NADPH + O₂</text>
              <polygon points="50,110 44,118 56,118" fill="#ca8a04" />
              {/* Fase escura */}
              <rect x={160} y={30} width={120} height={70} rx={10} fill="#f0fdf4" stroke="#16a34a" strokeWidth={1.5} />
              <text x={220} y={58} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Fase Escura</text>
              <text x={220} y={72} textAnchor="middle" fontSize={9} fill="#14532d">(Ciclo de Calvin)</text>
              <text x={220} y={86} textAnchor="middle" fontSize={9} fill="#14532d">Estroma</text>
              {/* Entradas fase escura */}
              <text x={165} y={20} textAnchor="start" fontSize={9} fill="#065f46">CO₂ + ATP + NADPH</text>
              <polygon points="215,30 209,22 221,22" fill="#16a34a" />
              {/* Saídas fase escura */}
              <text x={175} y={120} textAnchor="start" fontSize={9} fill="#065f46">Glicose (C₆H₁₂O₆)</text>
              <polygon points="215,110 209,118 221,118" fill="#16a34a" />
              {/* Seta entre fases */}
              <polygon points="150,65 140,59 140,71" fill="#6b7280" />
              <line x1={140} y1={65} x2={158} y2={65} stroke="#6b7280" strokeWidth={1.5} />
              {/* Equação resumo */}
              <rect x={20} y={140} width={260} height={55} rx={8} fill="#ecfdf5" stroke="#059669" strokeWidth={1} />
              <text x={150} y={158} textAnchor="middle" fontSize={10} fontWeight={700} fill="#065f46">Equação global</text>
              <text x={150} y={174} textAnchor="middle" fontSize={11} fill="#14532d">6CO₂ + 6H₂O + luz →</text>
              <text x={150} y={188} textAnchor="middle" fontSize={11} fill="#14532d">C₆H₁₂O₆ + 6O₂</text>
            </svg>
            <figcaption>Fase clara (fotossistemas I e II, tilacoide) e fase escura — Ciclo de Calvin (estroma) da fotossíntese.</figcaption>
          </figure>
        </div>

        <div className="lesson-highlight">
          <h3>Outros tipos de plastos em células vegetais</h3>
          <p>
            Os cloroplastos pertencem ao grupo dos{" "}
            <strong>plastos</strong>. Os demais tipos incluem:{" "}
            <strong>cromoplastos</strong> (contêm carotenoides — pigmentos
            amarelos, laranja e vermelhos em flores e frutos);{" "}
            <strong>leucoplastos</strong> (incolores — armazenam amido,
            proteínas ou lipídios); e{" "}
            <strong>amiloplastos</strong> (leucoplastos especializados em
            amido, presentes em células de batata). Todos derivam de
            proplastos indiferenciados e são interconversíveis.
          </p>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Suporte e Movimento</span>

        <h2>8. Citoesqueleto, Centríolos e Vacúolos</h2>

        <p>
          O <strong>citoesqueleto</strong> é uma rede dinâmica de filamentos
          proteicos que permeia o citoplasma, conferindo forma à célula,
          ancorando organelas em posições funcionais, orientando o transporte
          de vesículas e viabilizando a divisão celular. Diferente de um
          esqueleto rígido, o citoesqueleto se reconstrói continuamente por
          polimerização e despolimerização.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Proteína principal</th>
                <th>Diâmetro</th>
                <th>Funções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microtúbulos</td>
                <td>Tubulina (α e β)</td>
                <td>~25 nm</td>
                <td>Fuso mitótico, transporte axonal, cílios e flagelos, forma celular</td>
              </tr>
              <tr>
                <td>Microfilamentos (actina)</td>
                <td>Actina</td>
                <td>~7 nm</td>
                <td>Contração muscular, movimento ameboide, citocinese, microvilosidades</td>
              </tr>
              <tr>
                <td>Filamentos intermediários</td>
                <td>Queratina, vimentina, lâmina nuclear</td>
                <td>~10 nm</td>
                <td>Resistência mecânica, suporte nuclear, forma celular estável</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Centríolos</h3>
            <p>
              Estruturas cilíndricas formadas por 9 tripletes de microtúbulos
              (arranjo 9×3 + 0), presentes aos pares formando o{" "}
              <strong>centrossomo</strong>. Organizam o fuso mitótico durante a
              divisão celular e originam os corpos basais de cílios e flagelos.
              Ausentes em células vegetais superiores.
            </p>
          </div>

          <div className="lesson-card">
            <span>💾</span>
            <h3>Vacúolo Central (vegetal)</h3>
            <p>
              Organela membranosa (tonoplasto) que pode ocupar até 90% do
              volume da célula vegetal adulta. Armazena água, íons, pigmentos
              antocianínicos, compostos tóxicos e metabólitos secundários;
              mantém a <strong>pressão de turgor</strong> essencial à rigidez
              vegetal.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌀</span>
            <h3>Cílios e Flagelos</h3>
            <p>
              Projeções membranosas sustentadas por axonema (arranjo 9×2 + 2
              de microtúbulos). Flagelos movem a célula inteira (espermatozoides);
              cílios movem fluidos sobre a superfície celular (epitélio traqueal,
              tuba uterina).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Drogas que afetam o citoesqueleto — questão frequente</h3>
          <p>
            A <strong>colchicina</strong> inibe a polimerização de tubulinas,
            bloqueando o fuso mitótico na metáfase — usada para obter
            cariótipo. A <strong>citocalasina B</strong> despolimeriza
            microfilamentos de actina, impedindo a citocinese e a locomoção
            celular. A <strong>taxol</strong> (paclitaxel) estabiliza
            microtúbulos impedindo a despolimerização — antineoplásico.
          </p>
        </div>
      </section>

      {/* ── Seção 9 — Tabela comparativa geral ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>9. Tabela Mestra — Organelas e Funções</h2>

        <p>
          A tabela abaixo compila as principais organelas eucarióticas, sua
          classificação, localização funcional e função central — o resumo
          ideal para revisão antes das provas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Organela / Estrutura</th>
                <th>Membrana</th>
                <th>Localização</th>
                <th>Função Central</th>
                <th>Ocorre em</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ribossomo</td>
                <td>Não</td>
                <td>Citosol / RER / mito. / cloro.</td>
                <td>Síntese de proteínas (tradução)</td>
                <td>Todas as células vivas</td>
              </tr>
              <tr>
                <td>Retículo Endoplasmático Rugoso</td>
                <td>Simples</td>
                <td>Próximo ao núcleo</td>
                <td>Síntese + dobragem de proteínas secretadas/membrana</td>
                <td>Eucariotos</td>
              </tr>
              <tr>
                <td>Retículo Endoplasmático Liso</td>
                <td>Simples</td>
                <td>Citoplasma</td>
                <td>Síntese de lipídios, esteroides, detoxificação, Ca²⁺</td>
                <td>Eucariotos</td>
              </tr>
              <tr>
                <td>Complexo de Golgi</td>
                <td>Simples</td>
                <td>Entre RER e membrana plasmática</td>
                <td>Processamento, glicosilação e endereçamento de proteínas</td>
                <td>Eucariotos</td>
              </tr>
              <tr>
                <td>Lisossomo</td>
                <td>Simples</td>
                <td>Citoplasma</td>
                <td>Digestão intracelular (heterofagia, autofagia)</td>
                <td>Células animais (principalmente)</td>
              </tr>
              <tr>
                <td>Peroxissomo</td>
                <td>Simples</td>
                <td>Citoplasma</td>
                <td>β-oxidação, detoxificação, decomposição de H₂O₂</td>
                <td>Eucariotos (fígado, rim)</td>
              </tr>
              <tr>
                <td>Mitocôndria</td>
                <td>Dupla</td>
                <td>Citoplasma</td>
                <td>Respiração aeróbica — produção de ATP</td>
                <td>Eucariotos aeróbicos</td>
              </tr>
              <tr>
                <td>Cloroplasto</td>
                <td>Dupla</td>
                <td>Citoplasma</td>
                <td>Fotossíntese — conversão de luz em glicose</td>
                <td>Plantas e algas</td>
              </tr>
              <tr>
                <td>Vacúolo central</td>
                <td>Simples</td>
                <td>Centro da célula</td>
                <td>Turgor, armazenamento, pigmentação</td>
                <td>Células vegetais adultas</td>
              </tr>
              <tr>
                <td>Centrossomo / Centríolos</td>
                <td>Não</td>
                <td>Próximo ao núcleo</td>
                <td>Organização do fuso mitótico, nucleação de microtúbulos</td>
                <td>Células animais e fungos</td>
              </tr>
              <tr>
                <td>Citoesqueleto</td>
                <td>Não</td>
                <td>Toda a célula</td>
                <td>Forma, transporte interno, divisão, movimento</td>
                <td>Eucariotos (variações em procariotos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 — Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de organelas"
          statement={
            <p>
              Uma célula foi analisada em microscópio eletrônico e identificou-se
              uma estrutura sem membrana, formada por RNA e proteínas, presente
              tanto livre no citosol quanto associada ao retículo
              endoplasmático. Trata-se de:
            </p>
          }
          options={[
            { letter: "a", text: "Lisossomo" },
            { letter: "b", text: "Peroxissomo" },
            { letter: "c", text: "Ribossomo", correct: true },
            { letter: "d", text: "Centríolo" },
          ]}
          resolution={
            <p>
              O ribossomo é a única organela sem membrana lipoproteica formada
              por rRNA e proteínas ribossômicas. Pode ser encontrado livre no
              citosol (sintetizando proteínas para uso interno) ou aderido ao
              RER (sintetizando proteínas para secreção ou lisossomos). Lisossomos
              e peroxissomos possuem uma membrana; centríolos são formados por
              microtúbulos proteicos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Via secretora e destino de proteínas"
          statement={
            <p>
              Células pancreáticas produzem enzimas digestivas (como tripsina)
              que são liberadas no duodeno. Qual é a sequência correta do
              trajeto dessas enzimas desde sua síntese até a secreção?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ribossomo livre → citosol → membrana plasmática",
            },
            {
              letter: "b",
              text: "RER → vesícula de transporte → Complexo de Golgi → vesícula secretora → exocitose",
              correct: true,
            },
            {
              letter: "c",
              text: "Mitocôndria → Golgi → lisossomo",
            },
            {
              letter: "d",
              text: "Núcleo → ribossomo livre → vesícula → exocitose",
            },
          ]}
          resolution={
            <p>
              Proteínas destinadas à secreção são sintetizadas em ribossomos
              aderidos ao RER, passam para o lúmen do retículo, são
              transportadas em vesículas até o Complexo de Golgi (face{" "}
              <em>cis</em>), onde sofrem modificações pós-traducionais. As
              vesículas secretoras brotam da face <em>trans</em> e fundem-se
              à membrana plasmática (exocitose), liberando o conteúdo ao meio
              extracelular.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Teoria Endossimbiótica — evidências moleculares"
          statement={
            <p>
              A Teoria Endossimbiótica de Lynn Margulis propõe que mitocôndrias
              e cloroplastos tiveram origem em procariotos que foram fagocitados
              por células hospedeiras ancestrais. Qual das afirmativas a seguir
              representa a evidência MAIS direta para essa hipótese?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Mitocôndrias possuem membrana dupla e o DNA circular com ribossomos 70S semelhantes aos de bactérias, além de se dividirem por fissão binária",
              correct: true,
            },
            {
              letter: "b",
              text: "O número de mitocôndrias é maior em células com alta atividade metabólica",
            },
            {
              letter: "c",
              text: "A cadeia respiratória ocorre na membrana interna mitocondrial",
            },
            {
              letter: "d",
              text: "Cloroplastos são exclusivos de células vegetais e contêm clorofila",
            },
          ]}
          resolution={
            <>
              <p>
                A evidência mais direta é o conjunto de características
                procarióticas conservadas nas organelas: DNA circular sem
                histonas (como em bactérias), ribossomos 70S sensíveis a
                antibióticos bactericidas (cloranfenicol, estreptomicina),
                divisão por fissão binária independente do ciclo celular e a
                membrana interna com cardiolipina — fosfolipídio ausente em
                outras membranas eucarióticas, mas abundante em bactérias.
              </p>
              <p>
                As demais alternativas descrevem características funcionais
                corretas, mas não constituem evidências de origem evolutiva
                procariótica.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Doenças lisossômicas (ENEM)"
          statement={
            <p>
              As <strong>doenças de depósito lisossômico</strong>, como a Doença
              de Gaucher e a Doença de Tay-Sachs, são causadas por mutações que
              inativam enzimas hidrolíticas específicas dos lisossomos. Como
              consequência, substâncias que deveriam ser degradadas se
              acumulam nas células, causando disfunção orgânica progressiva.
              Com base no conhecimento sobre lisossomos, qual afirmativa
              explica corretamente o mecanismo dessas doenças?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A falta de enzimas lisossômicas impede a síntese de ATP, levando à morte celular por falta de energia",
            },
            {
              letter: "b",
              text: "Sem as hidrolases ácidas funcionais, o material internalizado por endocitose ou as organelas obsoletas não são digeridos, acumulando-se no interior dos lisossomos",
              correct: true,
            },
            {
              letter: "c",
              text: "A mutação impede a formação do fuso mitótico, causando aneuploidia e acúmulo de substâncias no núcleo",
            },
            {
              letter: "d",
              text: "Sem enzimas lisossômicas, as mitocôndrias não conseguem realizar o Ciclo de Krebs",
            },
          ]}
          resolution={
            <p>
              Os lisossomos digerem material endocitado (heterofagia) e organelas
              envelhecidas (autofagia) graças às suas hidrolases ácidas. Quando
              uma dessas enzimas é ausente ou inativa (por mutação genética),
              o substrato específico não é degradado e se acumula no interior
              dos lisossomos. Com o tempo, os lisossomos ficam repletos de
              material não digerido — o depósito causa disfunção celular
              progressiva, especialmente em neurônios e células do fígado e
              baço. Não há relação direta com ATP mitocondrial, fuso ou Krebs.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Citoesqueleto e câncer"
          statement={
            <p>
              O paclitaxel (Taxol) é um quimioterápico amplamente usado no
              tratamento de câncer de mama e ovário. Ele age se ligando aos
              microtúbulos e impedindo sua despolimerização. Considerando que
              células cancerosas se dividem rapidamente, por que o paclitaxel
              é eficaz contra tumores?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ele inibe a síntese de DNA, impedindo a replicação das células tumorais",
            },
            {
              letter: "b",
              text: "Ao estabilizar os microtúbulos e impedir sua despolimerização, bloqueia a separação dos cromossomos na anáfase, impedindo a conclusão da mitose",
              correct: true,
            },
            {
              letter: "c",
              text: "Ele destrói as mitocôndrias das células tumorais, cortando o suprimento de ATP",
            },
            {
              letter: "d",
              text: "Inativa os lisossomos, causando acúmulo de proteínas e morte celular por autofagia",
            },
          ]}
          resolution={
            <p>
              O fuso mitótico é formado por microtúbulos que se polimerizam na
              pró-fase e se despolimerizam durante a anáfase para puxar os
              cromossomos aos polos. O paclitaxel "congela" os microtúbulos
              em estado polimerizado — o fuso se forma, mas não consegue
              encurtar para separar os cromossomos. A célula fica presa na
              mitáfase/anáfase e recebe sinais de apoptose. Como células
              cancerosas se dividem muito mais frequentemente do que células
              normais, elas são afetadas de forma desproporcional, o que
              confere seletividade relativa ao fármaco.
            </p>
          }
        />
      </section>
    </article>
  );
}
