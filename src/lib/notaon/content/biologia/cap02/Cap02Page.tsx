"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 2</span>

          <h1>Bioquímica Celular I: Água, Sais Minerais e Carboidratos</h1>

          <p>
            A vida, em sua essência, é química. Cada batimento cardíaco, cada
            pensamento e cada reação imunológica dependem de moléculas específicas
            organizadas em estruturas precisas. Neste capítulo você vai dominar as
            substâncias inorgânicas — <strong>água</strong> e{" "}
            <strong>sais minerais</strong> — e o primeiro grande grupo de
            biomoléculas orgânicas: os <strong>carboidratos</strong>. Esses
            conteúdos são recorrentes no ENEM e nos principais vestibulares,
            aparecendo tanto em questões conceituais quanto em situações-problema
            do cotidiano, como alimentação, saúde e biotecnologia.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Composição Química da Célula</h2>

        <p>
          A célula viva não é apenas um "saco de líquido" — é um sistema químico
          altamente organizado. Sua composição divide-se em dois grandes grupos:
          as substâncias <strong>inorgânicas</strong> (água e sais minerais),
          presentes em todos os seres vivos, e as substâncias{" "}
          <strong>orgânicas</strong> (carboidratos, lipídios, proteínas e ácidos
          nucleicos), caracterizadas pelo esqueleto de carbono e pela presença de
          ligações covalentes complexas.
        </p>

        <p>
          A <strong>água</strong> é disparada a substância mais abundante,
          representando entre 65% e 95% da massa de células metabolicamente
          ativas. Os sais minerais, embora correspondam a apenas cerca de 1% da
          massa, exercem funções regulatórias e estruturais insubstituíveis. Os
          compostos orgânicos formam o restante da biomassa celular, com as
          proteínas ocupando o maior percentual em massa seca.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Água</h3>
            <p>65–95% da massa celular; solvente e reagente universal.</p>
          </div>

          <div className="lesson-card">
            <span>🧂</span>
            <h3>Sais Minerais</h3>
            <p>~1%; estrutura e regulação iônica.</p>
          </div>

          <div className="lesson-card">
            <span>🍞</span>
            <h3>Carboidratos</h3>
            <p>Energia imediata e componentes estruturais.</p>
          </div>

          <div className="lesson-card">
            <span>🥑</span>
            <h3>Lipídios</h3>
            <p>Reserva energética e membranas biológicas.</p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Proteínas</h3>
            <p>Maior fração orgânica; estrutura, enzimas, defesa.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Ácidos Nucleicos</h3>
            <p>DNA e RNA; armazenam e expressam informação genética.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Água</span>

        <h2>2. A Água: Estrutura, Polaridade e Pontes de Hidrogênio</h2>

        <p>
          A molécula de água (<M>{"H_2O"}</M>) tem geometria <strong>angular</strong>:
          os dois átomos de hidrogênio formam um ângulo de aproximadamente 104,5°
          com o átomo de oxigênio. O oxigênio é muito mais <strong>eletronegativo</strong>{" "}
          do que o hidrogênio, atraindo os elétrons das ligações para si. Resultado: o
          oxigênio fica com carga parcial negativa (<M>{"\\delta^-"}</M>) e cada
          hidrogênio com carga parcial positiva (<M>{"\\delta^+"}</M>), tornando a
          molécula um <strong>dipolo elétrico</strong> permanente.
        </p>

        <p>
          Essa polaridade permite que moléculas de água vizinhas se atraiam: o
          H com carga <M>{"\\delta^+"}</M> de uma molécula interage com o O com carga{" "}
          <M>{"\\delta^-"}</M> de outra, formando as chamadas{" "}
          <strong>pontes de hidrogênio</strong>. Cada molécula pode estabelecer
          até quatro pontes simultâneas com vizinhas. Embora individualmente
          fracas, a enorme quantidade dessas pontes confere à água propriedades
          físicas extraordinárias — coesão, alto calor específico, alto calor
          latente de vaporização — que são essenciais para a vida.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 620 220" width="620" height="220" aria-label="Estrutura angular da água e pontes de hidrogênio">
            {/* molécula central */}
            <circle cx={140} cy={110} r={26} fill="#3b82f6" opacity={0.85} />
            <text x={140} y={116} textAnchor="middle" fontSize={15} fontWeight={700} fill="white">O</text>
            {/* H esquerdo */}
            <line x1={114} y1={95} x2={82} y2={72} stroke="#374151" strokeWidth={2.5} />
            <circle cx={74} cy={66} r={16} fill="#f9a8d4" opacity={0.9} />
            <text x={74} y={71} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7c1c4a">H</text>
            {/* H direito */}
            <line x1={166} y1={95} x2={198} y2={72} stroke="#374151" strokeWidth={2.5} />
            <circle cx={206} cy={66} r={16} fill="#f9a8d4" opacity={0.9} />
            <text x={206} y={71} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7c1c4a">H</text>
            {/* ângulo */}
            <path d="M 88 80 A 40 40 0 0 1 192 80" fill="none" stroke="#9ca3af" strokeWidth={1.2} strokeDasharray="4 3" />
            <text x={140} y={60} textAnchor="middle" fontSize={11} fill="#6b7280">104,5°</text>
            {/* cargas parciais */}
            <text x={140} y={148} textAnchor="middle" fontSize={12} fill="#2563eb">δ⁻</text>
            <text x={57} y={68} textAnchor="middle" fontSize={11} fill="#be185d">δ⁺</text>
            <text x={223} y={68} textAnchor="middle" fontSize={11} fill="#be185d">δ⁺</text>
            {/* separador */}
            <line x1={280} y1={20} x2={280} y2={200} stroke="#e5e7eb" strokeWidth={1.5} strokeDasharray="6 4" />
            {/* pontes de hidrogênio — esquema com 3 moléculas */}
            {/* molécula superior */}
            <circle cx={420} cy={50} r={22} fill="#3b82f6" opacity={0.8} />
            <text x={420} y={56} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">O</text>
            <circle cx={390} cy={26} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={390} y={31} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <circle cx={450} cy={26} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={450} y={31} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <line x1={404} y1={38} x2={393} y2={30} stroke="#374151" strokeWidth={2} />
            <line x1={436} y1={38} x2={447} y2={30} stroke="#374151" strokeWidth={2} />
            {/* ponte H superior → central */}
            <line x1={420} y1={72} x2={420} y2={95} stroke="#16a34a" strokeWidth={2} strokeDasharray="5 3" />
            {/* molécula central */}
            <circle cx={420} cy={118} r={22} fill="#3b82f6" opacity={0.8} />
            <text x={420} y={124} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">O</text>
            <circle cx={388} cy={94} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={388} y={99} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <circle cx={452} cy={94} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={452} y={99} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <line x1={404} y1={108} x2={393} y2={97} stroke="#374151" strokeWidth={2} />
            <line x1={436} y1={108} x2={447} y2={97} stroke="#374151" strokeWidth={2} />
            {/* ponte H central → inferior */}
            <line x1={420} y1={140} x2={420} y2={160} stroke="#16a34a" strokeWidth={2} strokeDasharray="5 3" />
            {/* molécula inferior */}
            <circle cx={420} cy={182} r={22} fill="#3b82f6" opacity={0.8} />
            <text x={420} y={188} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">O</text>
            <circle cx={390} cy={200} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={390} y={205} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <circle cx={450} cy={200} r={13} fill="#f9a8d4" opacity={0.9} />
            <text x={450} y={205} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c1c4a">H</text>
            <line x1={403} y1={192} x2={392} y2={198} stroke="#374151" strokeWidth={2} />
            <line x1={437} y1={192} x2={448} y2={198} stroke="#374151" strokeWidth={2} />
            {/* legenda */}
            <line x1={520} y1={110} x2={550} y2={110} stroke="#16a34a" strokeWidth={2} strokeDasharray="5 3" />
            <text x={555} y={114} fontSize={11} fill="#16a34a">ponte H</text>
            <text x={310} y={114} fontSize={12} fontWeight={700} fill="#374151">Polaridade</text>
            <text x={490} y={20} fontSize={12} fontWeight={700} fill="#374151">Pontes de H</text>
          </svg>
          <figcaption>
            Esquerda: geometria angular da H₂O com cargas parciais. Direita: pontes de hidrogênio (tracejado verde) entre moléculas vizinhas.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que o gelo flutua na água líquida?</h3>
          <p>
            No estado sólido, as pontes de hidrogênio se organizam em uma rede
            cristalina <strong>hexagonal aberta</strong>, com maior espaçamento
            entre as moléculas do que na fase líquida. Isso faz o gelo ser{" "}
            <strong>menos denso</strong> que a água líquida — propriedade única
            que permite a sobrevivência de organismos aquáticos no inverno, pois
            o gelo forma uma camada isolante na superfície.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Propriedades Biológicas da Água</span>

        <h2>3. Propriedades da Água e Suas Funções nos Seres Vivos</h2>

        <p>
          As propriedades físico-químicas da água decorrem diretamente da sua
          polaridade e das pontes de hidrogênio. Cada uma dessas propriedades tem
          implicações biológicas diretas que o ENEM explora regularmente:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Alto Calor Específico</h3>
            <p>
              A água absorve ou libera grande quantidade de calor com pequena
              variação de temperatura. Estabiliza a temperatura corporal e dos
              ambientes aquáticos.
            </p>
          </div>

          <div className="lesson-card">
            <span>💨</span>
            <h3>Alto Calor Latente de Vaporização</h3>
            <p>
              Precisa de muita energia para evaporar. A transpiração remove calor
              eficientemente — fundamental para a termorregulação em mamíferos e
              na transpiração vegetal.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Coesão e Tensão Superficial</h3>
            <p>
              Moléculas de água se atraem mutuamente. Permite que insetos andem
              sobre a água e é essencial para a ascensão da seiva bruta no xilema
              (teoria da coesão-tensão).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧲</span>
            <h3>Adesão</h3>
            <p>
              A água adere a superfícies polares. Juntamente com a coesão,
              possibilita a capilaridade em vasos vegetais de até 100 m de altura.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Solvente Universal</h3>
            <p>
              Dissolve substâncias iônicas e polares (sais, açúcares, aminoácidos),
              tornando-se o meio das reações metabólicas e o veículo do transporte
              de nutrientes no sangue e na seiva elaborada.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Reagente Metabólico</h3>
            <p>
              Participa diretamente de reações de <strong>síntese por
              desidratação</strong> (produzindo polímeros) e de{" "}
              <strong>hidrólise</strong> (quebrando polímeros na digestão e no
              catabolismo celular).
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Propriedade</th>
                <th>Base molecular</th>
                <th>Exemplo biológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alto calor específico</td>
                <td>Pontes de H absorvem energia sem mover moléculas</td>
                <td>Homeotermia em mamíferos</td>
              </tr>
              <tr>
                <td>Alto calor latente de vaporização</td>
                <td>Muita energia para quebrar pontes de H na evaporação</td>
                <td>Suor, transpiração vegetal</td>
              </tr>
              <tr>
                <td>Coesão</td>
                <td>Atração entre moléculas de água</td>
                <td>Ascensão da seiva bruta no xilema</td>
              </tr>
              <tr>
                <td>Solvente polar</td>
                <td>Extremidades δ⁺ e δ⁻ interagem com íons/polos</td>
                <td>Transporte de glicose e sais no sangue</td>
              </tr>
              <tr>
                <td>Reagente</td>
                <td>Participa de hidrólise e desidratação</td>
                <td>Digestão, síntese de proteínas</td>
              </tr>
              <tr>
                <td>Menor densidade no estado sólido</td>
                <td>Rede cristalina hexagonal aberta do gelo</td>
                <td>Gelo flutua; vida subsiste abaixo do gelo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Síntese por desidratação × Hidrólise</h3>
          <p>
            Todas as grandes biomoléculas são montadas ligando monômeros com
            liberação de água, e desmontadas com consumo de água:
          </p>
          <M block={true}>{"\\text{Monômero}_1 + \\text{Monômero}_2 \\xrightarrow{\\text{desidratação}} \\text{Dímero} + H_2O"}</M>
          <M block={true}>{"\\text{Polímero} + H_2O \\xrightarrow{\\text{hidrólise}} \\text{Monômeros}"}</M>
          <p>
            A digestão é uma cadeia de hidrólises: amido → glicose; proteínas →
            aminoácidos; triglicerídeos → ácidos graxos + glicerol.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sais Minerais</span>

        <h2>4. Sais Minerais: Íons e Funções Vitais</h2>

        <p>
          Os sais minerais são substâncias inorgânicas compostas por íons
          metálicos e não metálicos. Nos seres vivos eles aparecem em dois
          estados: na forma <strong>insolúvel</strong> (cristais que conferem
          rigidez a estruturas como ossos e dentes) e na forma{" "}
          <strong>dissolvida em íons</strong> (regulando o pH, a pressão
          osmótica, a transmissão nervosa e a atividade enzimática). Apesar de
          representarem apenas cerca de 1% da massa celular, sua ausência causa
          doenças graves e pode ser letal.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Diagrama de funções dos principais sais minerais">
            {/* título */}
            <text x={340} y={20} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1f2937">Principais íons e suas funções biológicas</text>
            {/* barras horizontais representando importância relativa */}
            {[
              { ion: "Ca²⁺", cor: "#0ea5e9", barra: 310, func: "Ossos, dentes, coagulação, sinalização" },
              { ion: "K⁺",   cor: "#f59e0b", barra: 260, func: "Potencial de ação, contração muscular" },
              { ion: "Na⁺",  cor: "#6366f1", barra: 240, func: "Osmose, impulso nervoso, pressão" },
              { ion: "Fe²⁺", cor: "#ef4444", barra: 200, func: "Hemoglobina, mioglobina, citocromos" },
              { ion: "Mg²⁺", cor: "#16a34a", barra: 180, func: "Clorofila, ativador enzimático" },
              { ion: "PO₄³⁻",cor: "#a855f7", barra: 290, func: "DNA, RNA, ATP, ossos" },
            ].map((item, i) => (
              <g key={item.ion}>
                <text x={50} y={45 + i * 28} textAnchor="end" fontSize={12} fontWeight={700} fill={item.cor}>{item.ion}</text>
                <rect x={55} y={32 + i * 28} width={item.barra} height={18} rx={6} fill={item.cor} opacity={0.2} stroke={item.cor} strokeWidth={1} />
                <rect x={55} y={32 + i * 28} width={item.barra} height={18} rx={6} fill={item.cor} opacity={0.5} />
                <text x={60} y={45 + i * 28} fontSize={10} fill="#1f2937">{item.func}</text>
              </g>
            ))}
          </svg>
          <figcaption>Principais íons minerais e suas funções biológicas — presença no organismo representada proporcionalmente.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Mineral (íon)</th>
                <th>Forma de atuação</th>
                <th>Principais funções</th>
                <th>Deficiência / excesso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cálcio (Ca²⁺)</strong></td>
                <td>Insolúvel e iônica</td>
                <td>Ossos, dentes, coagulação, contração muscular, sinapse</td>
                <td>Osteoporose, raquitismo / hipercalcemia</td>
              </tr>
              <tr>
                <td><strong>Fósforo (PO₄³⁻)</strong></td>
                <td>Insolúvel e iônica</td>
                <td>DNA, RNA, ATP, fosfolipídios, ossos</td>
                <td>Fraqueza óssea / raras intoxicações</td>
              </tr>
              <tr>
                <td><strong>Ferro (Fe²⁺ / Fe³⁺)</strong></td>
                <td>Incorporado em proteínas</td>
                <td>Hemoglobina (O₂), mioglobina, citocromos</td>
                <td>Anemia ferropriva / hemocromatose</td>
              </tr>
              <tr>
                <td><strong>Sódio (Na⁺)</strong></td>
                <td>Iônica</td>
                <td>Impulso nervoso, pressão osmótica, pH</td>
                <td>Hiponatremia / hipertensão</td>
              </tr>
              <tr>
                <td><strong>Potássio (K⁺)</strong></td>
                <td>Iônica</td>
                <td>Impulso nervoso, contração muscular, bomba Na⁺/K⁺</td>
                <td>Câibras / arritmia cardíaca</td>
              </tr>
              <tr>
                <td><strong>Magnésio (Mg²⁺)</strong></td>
                <td>Iônica e estrutural</td>
                <td>Centro da clorofila, cofator enzimático, síntese de DNA</td>
                <td>Espasmos musculares / raro</td>
              </tr>
              <tr>
                <td><strong>Iodo (I⁻)</strong></td>
                <td>Incorporado em hormônios</td>
                <td>Síntese dos hormônios T3 e T4 (tireoide)</td>
                <td>Bócio, hipotireoidismo / hipertireoidismo</td>
              </tr>
              <tr>
                <td><strong>Flúor (F⁻)</strong></td>
                <td>Insolúvel</td>
                <td>Fortalecimento do esmalte dentário (fluorapatita)</td>
                <td>Cárie / fluorose dentária</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Deficiências clássicas cobradas no ENEM</h3>
          <p>
            <strong>Anemia ferropriva:</strong> falta de Fe²⁺ reduz a síntese de hemoglobina, diminuindo o transporte de O₂.
            Sintomas: palidez, fadiga e taquicardia.
          </p>
          <p>
            <strong>Bócio endêmico:</strong> deficiência de iodo impede a produção dos hormônios tireoidianos; a tireoide
            cresce tentando compensar, formando um bócio visível no pescoço.
          </p>
          <p>
            <strong>Osteoporose:</strong> perda progressiva de Ca²⁺ e fosfato dos ossos, tornando-os porosos e frágeis —
            problema comum em idosos e mulheres pós-menopausa.
          </p>
          <p>
            <strong>Raquitismo (crianças) / Osteomalácia (adultos):</strong> deficiência conjunta de Ca²⁺ e vitamina D
            (que regula a absorção intestinal do cálcio), causando deformações ósseas.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Carboidratos — Introdução</span>

        <h2>5. Carboidratos: Definição, Fórmula Geral e Classificação</h2>

        <p>
          Os <strong>carboidratos</strong> (também chamados de{" "}
          <strong>glicídios</strong>, <strong>sacarídeos</strong> ou{" "}
          <strong>açúcares</strong>) são biomoléculas orgânicas constituídas por
          carbono, hidrogênio e oxigênio. A fórmula geral é{" "}
          <M>{"(CH_2O)_n"}</M>, de onde vem o nome "hidrato de carbono" —
          embora não sejam literalmente moléculas de água ligadas ao carbono.
        </p>

        <p>
          A unidade mínima é o <strong>monossacarídeo</strong>. Dois monômeros
          ligam-se por uma <strong>ligação glicosídica</strong> (com saída de
          H₂O) formando um <strong>dissacarídeo</strong>; muitos formam um{" "}
          <strong>polissacarídeo</strong>. Os carboidratos são classificados
          principalmente pelo número de unidades de açúcar e pela finalidade
          (energética ou estrutural).
        </p>

        <div className="math-block">
          <h3>Fórmula geral e exemplos</h3>
          <M block={true}>{"(CH_2O)_n"}</M>
          <p>
            Glicose: <M>{"C_6H_{12}O_6"}</M> (n = 6) — o combustível celular
            universal.
          </p>
          <p>
            Ribose: <M>{"C_5H_{10}O_5"}</M> (n = 5) — componente do RNA e do ATP.
          </p>
          <p>
            Sacarose: <M>{"C_{12}H_{22}O_{11}"}</M> — dissacarídeo (glicose + frutose).
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Monossacarídeos e Dissacarídeos</span>

        <h2>6. Monossacarídeos e Dissacarídeos</h2>

        <p>
          Os <strong>monossacarídeos</strong> são os carboidratos mais simples e
          as unidades básicas dos carboidratos maiores. Não sofrem hidrólise. São
          classificados pelo número de carbonos: <em>trioses</em> (3C),{" "}
          <em>pentoses</em> (5C), <em>hexoses</em> (6C) etc. As hexoses e pentoses
          são as mais relevantes biologicamente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍇</span>
            <h3>Glicose (C₆H₁₂O₆)</h3>
            <p>Combustível universal; produto final da digestão de carboidratos; usada na respiração celular.</p>
          </div>

          <div className="lesson-card">
            <span>🍎</span>
            <h3>Frutose (C₆H₁₂O₆)</h3>
            <p>Açúcar das frutas e do mel; isômero estrutural da glicose; mais doce que a sacarose.</p>
          </div>

          <div className="lesson-card">
            <span>🥛</span>
            <h3>Galactose (C₆H₁₂O₆)</h3>
            <p>Componente da lactose (açúcar do leite); importante no desenvolvimento cerebral de neonatos.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Ribose (C₅H₁₀O₅)</h3>
            <p>Pentose; integra o RNA, ATP, FAD e NAD — moléculas centrais no metabolismo energético.</p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Desoxirribose (C₅H₁₀O₄)</h3>
            <p>Pentose com um OH a menos; integra exclusivamente o DNA — base da informação genética.</p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Isômeros de posição</h3>
            <p>Glicose, frutose e galactose têm a mesma fórmula molecular mas estruturas diferentes — daí suas propriedades distintas.</p>
          </div>
        </div>

        <p>
          Os <strong>dissacarídeos</strong> formam-se pela ligação de dois
          monossacarídeos via <strong>ligação glicosídica</strong>, com liberação
          de uma molécula de H₂O (síntese por desidratação). São solúveis em água
          e têm sabor adocicado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dissacarídeo</th>
                <th>Monômeros</th>
                <th>Fonte principal</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sacarose</strong></td>
                <td>Glicose + Frutose</td>
                <td>Cana-de-açúcar, beterraba</td>
                <td>Açúcar de mesa; principal açúcar de transporte nos vegetais</td>
              </tr>
              <tr>
                <td><strong>Lactose</strong></td>
                <td>Glicose + Galactose</td>
                <td>Leite de mamíferos</td>
                <td>Requer lactase para digestão; intolerância à lactose = falta de lactase</td>
              </tr>
              <tr>
                <td><strong>Maltose</strong></td>
                <td>Glicose + Glicose</td>
                <td>Malte, germinação de sementes</td>
                <td>Produto intermediário da digestão do amido pela amilase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 660 170" width="660" height="170" aria-label="Diagrama de formação de dissacarídeo por síntese de desidratação">
            {/* hexágono da glicose (simplificado como retângulo arredondado) */}
            <rect x={20} y={55} width={120} height={60} rx={14} fill="#0ea5e9" opacity={0.18} stroke="#0ea5e9" strokeWidth={2} />
            <text x={80} y={88} textAnchor="middle" fontSize={14} fontWeight={700} fill="#0369a1">Glicose</text>
            <text x={80} y={106} textAnchor="middle" fontSize={11} fill="#0369a1">C₆H₁₂O₆</text>
            {/* sinal + */}
            <text x={162} y={92} textAnchor="middle" fontSize={24} fontWeight={700} fill="#374151">+</text>
            {/* frutose */}
            <rect x={185} y={55} width={120} height={60} rx={14} fill="#f59e0b" opacity={0.18} stroke="#f59e0b" strokeWidth={2} />
            <text x={245} y={88} textAnchor="middle" fontSize={14} fontWeight={700} fill="#92400e">Frutose</text>
            <text x={245} y={106} textAnchor="middle" fontSize={11} fill="#92400e">C₆H₁₂O₆</text>
            {/* seta */}
            <line x1={320} y1={85} x2={370} y2={85} stroke="#374151" strokeWidth={2} />
            <polygon points="370,80 382,85 370,90" fill="#374151" />
            <text x={349} y={76} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#16a34a">–H₂O</text>
            {/* sacarose */}
            <rect x={390} y={45} width={150} height={70} rx={14} fill="#a855f7" opacity={0.15} stroke="#a855f7" strokeWidth={2} />
            <text x={465} y={83} textAnchor="middle" fontSize={14} fontWeight={700} fill="#6b21a8">Sacarose</text>
            <text x={465} y={101} textAnchor="middle" fontSize={11} fill="#6b21a8">C₁₂H₂₂O₁₁</text>
            {/* sinal + H2O */}
            <text x={558} y={92} textAnchor="middle" fontSize={20} fontWeight={700} fill="#374151">+</text>
            <rect x={574} y={65} width={68} height={40} rx={10} fill="#3b82f6" opacity={0.1} stroke="#3b82f6" strokeWidth={1.5} />
            <text x={608} y={88} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1d4ed8">H₂O</text>
            {/* legenda */}
            <text x={330} y={140} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Síntese por desidratação — ligação glicosídica formada, H₂O liberada</text>
          </svg>
          <figcaption>Formação da sacarose: dois monossacarídeos se unem por síntese de desidratação, liberando uma molécula de H₂O.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Polissacarídeos</span>

        <h2>7. Polissacarídeos: Reserva Energética e Função Estrutural</h2>

        <p>
          Os <strong>polissacarídeos</strong> são macromoléculas formadas por
          centenas ou até milhares de unidades de monossacarídeos. Não têm sabor
          doce e geralmente são insolúveis. Dividem-se em dois grupos funcionais:{" "}
          <strong>polissacarídeos de reserva</strong> (armazenam energia para uso
          posterior) e <strong>polissacarídeos estruturais</strong> (compõem
          paredes e exoesqueletos).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌽</span>
            <h3>Amido</h3>
            <p>
              Reserva <em>vegetal</em>; polímero de glicose com ligações
              α-1,4 (amilose) e ramificações α-1,6 (amilopectina). Fonte: arroz,
              batata, milho, trigo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍖</span>
            <h3>Glicogênio</h3>
            <p>
              Reserva <em>animal</em>; polímero de glicose mais ramificado que o
              amido. Armazenado no fígado (controle da glicemia) e nos músculos
              (energia para contração).
            </p>
          </div>

          <div className="lesson-card">
            <span>🌳</span>
            <h3>Celulose</h3>
            <p>
              Estrutural vegetal; polímero de glicose com ligações β-1,4. Forma
              a parede celular. Humanos não a digerem (sem celulase) — atua como
              fibra alimentar.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦐</span>
            <h3>Quitina</h3>
            <p>
              Estrutural de artrópodes (exoesqueleto) e fungos (parede celular);
              polímero de N-acetilglucosamina. Resistente e leve.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Peptidioglicano</h3>
            <p>
              Polissacarídeo estrutural da parede de bactérias. Alvo dos
              antibióticos β-lactâmicos como a penicilina.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Pectina e Hemicelulose</h3>
            <p>
              Polissacarídeos da parede vegetal que, juntamente com a celulose,
              compõem as fibras dietéticas. Papel na textura das frutas e
              vegetais.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Polissacarídeo</th>
                <th>Monômero</th>
                <th>Tipo de ligação</th>
                <th>Função</th>
                <th>Organismos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Amido</strong></td>
                <td>α-Glicose</td>
                <td>α-1,4 e α-1,6</td>
                <td>Reserva energética</td>
                <td>Vegetais</td>
              </tr>
              <tr>
                <td><strong>Glicogênio</strong></td>
                <td>α-Glicose</td>
                <td>α-1,4 e α-1,6 (mais ramif.)</td>
                <td>Reserva energética</td>
                <td>Animais, fungos</td>
              </tr>
              <tr>
                <td><strong>Celulose</strong></td>
                <td>β-Glicose</td>
                <td>β-1,4</td>
                <td>Estrutural (parede celular)</td>
                <td>Vegetais, algas</td>
              </tr>
              <tr>
                <td><strong>Quitina</strong></td>
                <td>N-acetilglucosamina</td>
                <td>β-1,4</td>
                <td>Estrutural (exoesqueleto, parede)</td>
                <td>Artrópodes, fungos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Pegadinhas frequentes no ENEM</h3>
          <p>
            <strong>Celulose vs. amido:</strong> ambos são polímeros de glicose, mas a diferença está no tipo
            de ligação (β-1,4 na celulose vs. α-1,4 no amido). Essa diferença
            de configuração espacial impossibilita que as enzimas humanas (amilases)
            digiram a celulose.
          </p>
          <p>
            <strong>Ruminantes e cupins digerem celulose</strong> graças a
            microrganismos simbiontes (bactérias e protozoários) que produzem celulase
            em seus intestinos.
          </p>
          <p>
            <strong>Glicogênio vs. amido:</strong> o glicogênio é mais ramificado,
            o que permite mobilização mais rápida da glicose — essencial para respostas
            rápidas ao exercício ou ao estresse.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Funções dos Carboidratos</span>

        <h2>8. Funções Biológicas dos Carboidratos e Resumo Integrado</h2>

        <p>
          Os carboidratos têm funções que vão muito além de "dar energia". O
          reconhecimento celular, a estrutura física dos tecidos vegetais, a
          composição dos ácidos nucleicos e até a proteção mecânica de
          artrópodes dependem de carboidratos. A tabela abaixo sintetiza as
          funções com exemplos concretos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Energética</h3>
            <p>
              A glicose é o combustível preferencial das células. Cada grama de
              carboidrato libera ≈4 kcal na respiração celular aeróbica.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Estrutural</h3>
            <p>
              Celulose na parede vegetal; quitina no exoesqueleto de insetos e
              carapaça de crustáceos; peptidioglicano em paredes bacterianas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Componente de ácidos nucleicos</h3>
            <p>
              Ribose no RNA, ATP, GTP, FAD e NAD; desoxirribose no DNA. Sem
              essas pentoses não haveria armazenamento nem expressão gênica.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪪</span>
            <h3>Reconhecimento celular</h3>
            <p>
              Glicoproteínas e glicolipídios na face externa da membrana plasmática
              funcionam como "etiquetas" que identificam tipo celular, grupo
              sanguíneo ABO e permitem a comunicação celular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Reserva de energia</h3>
            <p>
              Amido nas sementes e tubérculos; glicogênio no fígado e músculos —
              mobilizados rapidamente quando a oferta de glicose cai.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Fibra alimentar</h3>
            <p>
              Celulose, pectina e hemicelulose não são digeridas, mas regulam a
              microbiota, o trânsito intestinal e reduzem a absorção de gorduras
              e colesterol.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Equação da respiração aeróbica da glicose</h3>
          <M block={true}>{"C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O + \\text{energia (ATP)}"}</M>
          <p>
            Esta equação resume o caminho completo de oxidação da glicose,
            gerando em média 30–32 moléculas de ATP por molécula de glicose em
            células eucarióticas.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Carboidrato</th>
                <th>Tipo</th>
                <th>Função principal</th>
                <th>Onde é encontrado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glicose</td>
                <td>Monossacarídeo</td>
                <td>Combustível celular</td>
                <td>Sangue, frutas, mel</td>
              </tr>
              <tr>
                <td>Frutose</td>
                <td>Monossacarídeo</td>
                <td>Energética</td>
                <td>Frutas, mel, xarope de milho</td>
              </tr>
              <tr>
                <td>Ribose</td>
                <td>Monossacarídeo</td>
                <td>Componente RNA/ATP</td>
                <td>Todas as células vivas</td>
              </tr>
              <tr>
                <td>Desoxirribose</td>
                <td>Monossacarídeo</td>
                <td>Componente do DNA</td>
                <td>Núcleo celular</td>
              </tr>
              <tr>
                <td>Sacarose</td>
                <td>Dissacarídeo</td>
                <td>Transporte (floema) e energética</td>
                <td>Cana, beterraba</td>
              </tr>
              <tr>
                <td>Lactose</td>
                <td>Dissacarídeo</td>
                <td>Energética (neonatos)</td>
                <td>Leite de mamíferos</td>
              </tr>
              <tr>
                <td>Amido</td>
                <td>Polissacarídeo</td>
                <td>Reserva vegetal</td>
                <td>Batata, arroz, milho</td>
              </tr>
              <tr>
                <td>Glicogênio</td>
                <td>Polissacarídeo</td>
                <td>Reserva animal</td>
                <td>Fígado, músculos</td>
              </tr>
              <tr>
                <td>Celulose</td>
                <td>Polissacarídeo</td>
                <td>Estrutural / fibra alimentar</td>
                <td>Parede celular vegetal</td>
              </tr>
              <tr>
                <td>Quitina</td>
                <td>Polissacarídeo</td>
                <td>Estrutural</td>
                <td>Artrópodes, fungos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Água, Sais Minerais e Carboidratos</h2>

        <Exercise
          level="Básico"
          title="1. Propriedades da água"
          statement={
            <p>
              A capacidade da água de absorver grande quantidade de calor sem
              apresentar variação significativa de temperatura é chamada de alto
              calor específico. Essa propriedade tem importância biológica direta
              porque:
            </p>
          }
          options={[
            { letter: "a", text: "Permite que a água dissolva substâncias apolares, como lipídios" },
            {
              letter: "b",
              text: "Estabiliza a temperatura corporal dos organismos, evitando variações bruscas prejudiciais ao metabolismo",
              correct: true,
            },
            { letter: "c", text: "Garante que o gelo seja mais denso que a água líquida, afundando nos lagos no inverno" },
            { letter: "d", text: "Possibilita a formação de pontes de hidrogênio apenas no estado gasoso" },
          ]}
          resolution={
            <p>
              O alto calor específico da água (≈ 1 cal/g·°C) resulta das pontes
              de hidrogênio, que absorvem energia sem traduzir em movimento
              molecular (temperatura). Isso protege as células de oscilações
              térmicas que desnaturariam enzimas e desorganizariam membranas,
              sendo fundamental para a homeostase. As outras alternativas são
              incorretas: a água dissolve substâncias <em>polares</em>; o gelo é{" "}
              <em>menos</em> denso; e as pontes de hidrogênio ocorrem no estado
              líquido e sólido, não no gasoso.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Sais minerais e deficiências"
          statement={
            <p>
              Um paciente apresenta fadiga intensa, palidez cutânea e baixa
              concentração de hemoglobina no sangue. O médico diagnostica anemia
              ferropriva. Isso ocorre porque o ferro (Fe²⁺) é componente
              essencial da:
            </p>
          }
          options={[
            { letter: "a", text: "Miosina, proteína contrátil dos músculos esqueléticos" },
            { letter: "b", text: "Insulina, hormônio pancreático regulador da glicemia" },
            {
              letter: "c",
              text: "Hemoglobina, proteína eritrocitária responsável pelo transporte de O₂",
              correct: true,
            },
            { letter: "d", text: "Colágeno, proteína estrutural do tecido conjuntivo" },
          ]}
          resolution={
            <p>
              A hemoglobina é uma proteína formada por quatro subunidades, cada
              uma contendo um grupo <strong>heme</strong> com um átomo de Fe²⁺
              no centro. Esse ferro é exatamente o sítio de ligação do O₂. Sem
              ferro suficiente, a síntese de hemoglobina cai, reduzindo a
              capacidade de transporte de oxigênio — daí a fadiga e a palidez.
              Miosina, insulina e colágeno não contêm ferro em sua estrutura.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Celulose × amido: mesmos monômeros, funções distintas"
          statement={
            <p>
              Amido e celulose são polímeros de glicose, mas exercem funções
              opostas: um é digerível e serve de reserva, o outro é indigerível e
              estrutural. A diferença funcional entre eles decorre fundamentalmente
              de:
            </p>
          }
          options={[
            { letter: "a", text: "O amido conter mais átomos de carbono por monômero do que a celulose" },
            {
              letter: "b",
              text: "O tipo de ligação glicosídica: α-1,4 no amido (reconhecida por amilases humanas) vs. β-1,4 na celulose (não reconhecida por enzimas humanas)",
              correct: true,
            },
            { letter: "c", text: "A celulose ser formada por frutose e o amido por glicose" },
            { letter: "d", text: "O amido ser solúvel em água fria e a celulose insolúvel, independentemente de suas ligações" },
          ]}
          resolution={
            <p>
              A distinção essencial é a <strong>configuração estérica da ligação
              glicosídica</strong>. No amido, a glicose está na conformação alfa
              (α), formando ligações α-1,4 (e α-1,6 nas ramificações) que a
              amilase salivar e pancreática reconhece e hidrolisa. Na celulose, a
              glicose está na conformação beta (β), originando ligações β-1,4 que
              conferem uma estrutura fibrilar rígida — insolúvel e resistente a
              enzimas digestivas humanas. Ambos têm o mesmo monômero (glicose) e
              a celulose não é formada por frutose.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Intolerância à lactose (ENEM)"
          statement={
            <p>
              Pessoas com intolerância à lactose apresentam deficiência na enzima
              lactase, produzida pelo intestino delgado. Ao consumirem leite, a
              lactose não absorvida chega ao intestino grosso, onde bactérias a
              fermentam, produzindo gases e ácidos. Com base nessas informações,
              assinale a alternativa correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A lactose é um polissacarídeo formado por muitas unidades de glicose",
            },
            {
              letter: "b",
              text: "A falta de lactase impede a hidrólise da lactose em glicose e galactose, impedindo sua absorção intestinal",
              correct: true,
            },
            {
              letter: "c",
              text: "A intolerância à lactose causa imunossupressão porque a galactose é componente dos anticorpos",
            },
            {
              letter: "d",
              text: "A lactose é digerida pelas amilases salivares da mesma forma que o amido",
            },
          ]}
          resolution={
            <p>
              A <strong>lactose</strong> é um <em>dissacarídeo</em> (glicose +
              galactose). A enzima <strong>lactase</strong> hidrolisa a ligação
              glicosídica, liberando os dois monossacarídeos que são então
              absorvidos. Sem lactase, a lactose intacta chega ao cólon, onde
              bactérias anaeróbias a fermentam, gerando H₂, CH₄ e ácidos
              orgânicos — causando flatulência, cólicas e diarreia osmótica.
              Lactose não é polissacarídeo; galactose não compõe anticorpos; e
              amilases atuam sobre amido (α-1,4-glicosídeos), não sobre lactose.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ascensão da seiva e propriedades da água"
          statement={
            <p>
              Uma árvore tropical pode elevar água das raízes até o dossel a
              mais de 40 metros de altura, sem bomba muscular. Esse fenômeno
              depende de propriedades físico-químicas da água e de estruturas do
              xilema. Assinale a alternativa que explica corretamente esse
              processo:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A alta densidade da água facilita sua subida por gradiente de concentração",
            },
            {
              letter: "b",
              text: "A pressão osmótica das raízes empurra a coluna de água independentemente das folhas",
            },
            {
              letter: "c",
              text: "A coesão entre moléculas de água e a adesão às paredes do xilema, combinadas com a transpiração foliar, criam tensão que puxa a coluna hídrica para cima",
              correct: true,
            },
            {
              letter: "d",
              text: "A evaporação do CO₂ pelas estômatos gera pressão positiva que empurra a água",
            },
          ]}
          resolution={
            <p>
              A teoria da <strong>coesão-tensão</strong> explica a ascensão da
              seiva bruta: (1) a transpiração pelas folhas evapora água pelos
              estômatos, criando pressão negativa (tensão) nos vasos do xilema;
              (2) a <strong>coesão</strong> (pontes de hidrogênio entre moléculas
              de água) mantém a coluna de água contínua sem quebrar; (3) a{" "}
              <strong>adesão</strong> às paredes hidrófilas do xilema evita que a
              coluna se separe das paredes. A pressão osmótica radicular contribui
              à noite, mas é insuficiente para árvores altas durante o dia. O CO₂
              é liberado pela respiração, não pela transpiração.
            </p>
          }
        />
      </section>
    </article>
  );
}
