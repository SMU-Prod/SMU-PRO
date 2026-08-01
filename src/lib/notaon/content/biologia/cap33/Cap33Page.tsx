"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 33</span>

          <h1>Histologia Vegetal: Meristemas e Tecidos Adultos</h1>

          <p>
            A histologia vegetal revela como as plantas constroem e organizam
            seus corpos a partir de células indiferenciadas — os{" "}
            <strong>meristemas</strong> — que dão origem a tecidos adultos
            especializados em revestimento, sustentação, preenchimento e
            condução. Entender essa arquitetura é fundamental para compreender
            o crescimento, a nutrição e a adaptação das plantas ao ambiente
            terrestre, temas amplamente cobrados no ENEM e nos principais
            vestibulares do Brasil.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Organização dos Tecidos Vegetais</h2>

        <p>
          O corpo das plantas vasculares é formado por um conjunto hierárquico
          de tecidos que derivam, todos, de células indiferenciadas chamadas{" "}
          <strong>meristemas</strong>. Ao se diferenciarem, essas células
          originam os <strong>tecidos adultos</strong> (ou permanentes), cada
          qual especializado em uma função precisa: proteger, sustentar,
          armazenar, fotosintetizar ou transportar substâncias. A organização
          tisular das plantas é, portanto, a base para compreender sua
          fisiologia completa.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Meristemas</h3>
            <p>
              Tecidos embrionários com células em divisão ativa; responsáveis
              pelo crescimento da planta.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Revestimento</h3>
            <p>
              Epiderme (plantas jovens) e periderme (órgãos com crescimento
              secundário); proteção externa.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Sustentação</h3>
            <p>
              Colênquima (vivo, flexível) e esclerênquima (morto, rígido);
              suporte mecânico.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧱</span>
            <h3>Preenchimento</h3>
            <p>
              Parênquimas — clorofiliano, de reserva, aquífero e aerífero;
              constituem a maior parte do corpo vegetal.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Condução</h3>
            <p>
              Xilema (seiva bruta, sentido ascendente) e floema (seiva
              elaborada, bidirecional).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Secreção</h3>
            <p>
              Tricomas glandulares, nectários e laticíferos; produzem e
              liberam substâncias especializadas.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 200"
            width="760"
            height="200"
            aria-label="Esquema geral dos tecidos vegetais derivados de meristemas"
          >
            {/* Meristema central */}
            <rect x={310} y={70} width={140} height={52} rx={14} fill="#6366f1" opacity={0.18} stroke="#6366f1" strokeWidth={2} />
            <text x={380} y={101} textAnchor="middle" fontSize={14} fontWeight={700} fill="#3730a3">Meristemas</text>

            {/* Tecidos derivados */}
            {[
              { x: 20,  label: "Revestimento", c: "#0ea5e9" },
              { x: 160, label: "Sustentação",  c: "#f59e0b" },
              { x: 480, label: "Preenchimento",c: "#16a34a" },
              { x: 620, label: "Condução",     c: "#ef4444" },
            ].map((t) => (
              <g key={t.label}>
                <rect x={t.x} y={138} width={120} height={44} rx={10} fill={t.c} opacity={0.15} stroke={t.c} strokeWidth={1.5} />
                <text x={t.x + 60} y={165} textAnchor="middle" fontSize={12.5} fontWeight={700} fill="#1f2937">{t.label}</text>
                <line x1={380} y1={122} x2={t.x + 60} y2={138} stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="5 3" />
              </g>
            ))}

            <text x={380} y={26} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#6b7280">
              Todos os tecidos adultos derivam de células meristemáticas
            </text>
          </svg>
          <figcaption>
            Visão esquemática da derivação dos tecidos vegetais a partir dos
            meristemas.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Meristemas</span>

        <h2>2. Meristemas: Os Tecidos do Crescimento</h2>

        <p>
          Os <strong>meristemas</strong> são tecidos embrionários formados por
          células indiferenciadas, totipotentes, que mantêm a capacidade de
          divisão mitótica durante toda a vida da planta. Morfologicamente,
          essas células são reconhecidas por serem <strong>pequenas</strong>,
          com <strong>paredes celulares finas</strong>,{" "}
          <strong>núcleo proporcionalmente grande</strong>, citoplasma denso e
          vacúolos centrais ausentes ou muito reduzidos — características
          típicas de alta atividade metabólica e divisão celular intensa. Os
          meristemas são classificados em <strong>primários</strong> e{" "}
          <strong>secundários</strong> conforme sua origem e o tipo de
          crescimento que promovem.
        </p>

        <div className="lesson-highlight">
          <h3>Meristemas Primários — crescimento em comprimento</h3>
          <p>
            Derivam diretamente do embrião e permanecem ativos nos{" "}
            <strong>ápices</strong> de raízes e caules (meristemas apicais) e
            na base dos entrenós em monocotiledôneas (meristemas intercalares).
            São subdivididos em três tecidos meristemáticos primários:
          </p>
          <ul>
            <li>
              <strong>Protoderme:</strong> camada mais externa; origina a{" "}
              <em>epiderme</em> primária de todos os órgãos jovens.
            </li>
            <li>
              <strong>Meristema fundamental:</strong> porção intermediária;
              origina os <em>parênquimas</em>, o <em>colênquima</em> e o{" "}
              <em>esclerênquima</em>.
            </li>
            <li>
              <strong>Procâmbio:</strong> cordões centrais; origina o{" "}
              <em>xilema primário</em> e o <em>floema primário</em>.
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Meristemas Secundários — crescimento em espessura</h3>
          <p>
            Surgem por <strong>desdiferenciação</strong> (células adultas que
            retornam à capacidade divisória). São exclusivos de plantas com
            crescimento secundário (a maioria das eudicotiledôneas lenhosas e
            gimnospermas):
          </p>
          <ul>
            <li>
              <strong>Câmbio vascular (câmbio fasicular + interfasicular):</strong>{" "}
              produz <em>xilema secundário (lenho)</em> para o interior e{" "}
              <em>floema secundário (líber)</em> para o exterior. É o
              responsável pelo engrossamento do tronco e pela formação dos
              anéis de crescimento.
            </li>
            <li>
              <strong>Felogênio (câmbio suberoso):</strong> produz{" "}
              <em>súber (cortiça)</em> para o exterior e{" "}
              <em>feloderme</em> para o interior, formando o tecido de
              revestimento secundário denominado <em>periderme</em>.
            </li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Localização</th>
                <th>Tecidos que origina</th>
                <th>Crescimento promovido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Protoderme (primário)</td>
                <td>Ápice caulinar e radicular</td>
                <td>Epiderme</td>
                <td>Comprimento (primário)</td>
              </tr>
              <tr>
                <td>Meristema fundamental (primário)</td>
                <td>Ápice caulinar e radicular</td>
                <td>Parênquimas, colênquima, esclerênquima</td>
                <td>Comprimento (primário)</td>
              </tr>
              <tr>
                <td>Procâmbio (primário)</td>
                <td>Ápice caulinar e radicular</td>
                <td>Xilema e floema primários</td>
                <td>Comprimento (primário)</td>
              </tr>
              <tr>
                <td>Câmbio vascular (secundário)</td>
                <td>Entre xilema e floema no caule/raiz</td>
                <td>Xilema e floema secundários</td>
                <td>Espessura (secundário)</td>
              </tr>
              <tr>
                <td>Felogênio (secundário)</td>
                <td>Córtex externo do caule/raiz</td>
                <td>Súber (para fora) e feloderme (para dentro)</td>
                <td>Espessura (secundário)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 280"
            width="560"
            height="280"
            aria-label="Localização dos meristemas primários e secundários na planta"
          >
            {/* Caule */}
            <rect x={240} y={30} width={80} height={180} rx={10} fill="#d1fae5" stroke="#16a34a" strokeWidth={2} />
            <text x={280} y={24} textAnchor="middle" fontSize={12} fontWeight={700} fill="#065f46">Caule</text>

            {/* Ápice caulinar */}
            <ellipse cx={280} cy={30} rx={36} ry={18} fill="#6366f1" opacity={0.25} stroke="#6366f1" strokeWidth={2} />
            <text x={280} y={14} textAnchor="middle" fontSize={10} fill="#3730a3">Ápice caulinar</text>
            <text x={280} y={33} textAnchor="middle" fontSize={9} fill="#3730a3">(meristema apical)</text>

            {/* Câmbio — linha no meio do caule */}
            <line x1={240} y1={120} x2={320} y2={120} stroke="#f59e0b" strokeWidth={3} strokeDasharray="6 3" />
            <text x={330} y={124} fontSize={10} fill="#b45309">Câmbio</text>

            {/* Felogênio — linha externa */}
            <line x1={240} y1={100} x2={320} y2={100} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <text x={330} y={104} fontSize={10} fill="#b91c1c">Felogênio</text>

            {/* Raiz */}
            <rect x={240} y={210} width={80} height={50} rx={8} fill="#fef3c7" stroke="#d97706" strokeWidth={2} />
            <text x={280} y={240} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Raiz</text>

            {/* Ápice radicular */}
            <ellipse cx={280} cy={268} rx={32} ry={15} fill="#6366f1" opacity={0.25} stroke="#6366f1" strokeWidth={2} />
            <text x={280} y={271} textAnchor="middle" fontSize={9} fill="#3730a3">Ápice radicular</text>

            {/* Seta crescimento comprimento */}
            <line x1={200} y1={30} x2={200} y2={268} stroke="#6366f1" strokeWidth={1.5} strokeDasharray="4 3" />
            <polygon points="200,270 194,255 206,255" fill="#6366f1" />
            <text x={145} y={155} fontSize={10} fill="#3730a3" textAnchor="middle">crescimento em</text>
            <text x={145} y={168} fontSize={10} fill="#3730a3" textAnchor="middle">comprimento ↕</text>

            {/* Seta crescimento espessura */}
            <line x1={380} y1={110} x2={450} y2={110} stroke="#f59e0b" strokeWidth={1.5} />
            <polygon points="452,110 440,104 440,116" fill="#f59e0b" />
            <line x1={380} y1={130} x2={450} y2={130} stroke="#f59e0b" strokeWidth={1.5} />
            <polygon points="452,130 440,124 440,136" fill="#f59e0b" />
            <text x={480} y={120} fontSize={10} fill="#b45309">crescimento em</text>
            <text x={480} y={133} fontSize={10} fill="#b45309">espessura ↔</text>
          </svg>
          <figcaption>
            Localização dos meristemas apicais (ápices de caule e raiz) e dos
            meristemas laterais câmbio e felogênio (crescimento em espessura).
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Revestimento</span>

        <h2>3. Tecidos de Revestimento: Epiderme e Periderme</h2>

        <p>
          Os tecidos de revestimento formam a fronteira entre o corpo da planta
          e o ambiente externo. Sua função primordial é a{" "}
          <strong>proteção</strong>: reduzir a perda de água por evaporação,
          impedir a entrada de patógenos, regular as trocas gasosas e absorver
          luz e nutrientes. Existem dois tipos principais conforme a fase de
          desenvolvimento: a <strong>epiderme</strong> (crescimento primário) e
          a <strong>periderme</strong> (crescimento secundário).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Epiderme</h3>
            <p>
              Camada única de células vivas, achatadas e justapostas, revestida
              por cutícula (cutina + ceras) impermeável ao H₂O.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪵</span>
            <h3>Periderme</h3>
            <p>
              Substitui a epiderme em caules e raízes com crescimento
              secundário; composta por súber, felogênio e feloderme.
            </p>
          </div>

          <div className="lesson-card">
            <span>💨</span>
            <h3>Estômatos</h3>
            <p>
              Poros epidérmicos formados por duas células-guarda; controlam
              trocas gasosas (CO₂/O₂) e transpiração.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧵</span>
            <h3>Tricomas</h3>
            <p>
              Pelos epidérmicos: proteção física, secreção (nectários),
              redução da transpiração e reflexão de luz.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Epiderme em detalhe</h3>
          <p>
            Formada por uma única camada de células vivas, achatadas,
            justapostas e sem cloroplastos (exceto nas células-guarda dos
            estômatos). Externamente é recoberta pela <strong>cutícula</strong>{" "}
            — uma camada de <em>cutina</em> e ceras impregnadas que reduz
            drasticamente a perda de H₂O por evaporação (transpiração
            cuticular). A espessura da cutícula é maior em plantas de
            ambientes secos (xerófitas). A epiderme pode apresentar extensões
            especializadas:
          </p>
          <ul>
            <li>
              <strong>Estômatos:</strong> abertura flanqueada por{" "}
              <em>células-guarda</em> (com cloroplastos), que se abrem e
              fecham regulando as trocas gasosas e a transpiração.
            </li>
            <li>
              <strong>Tricomas (pelos epidérmicos):</strong> unicelulares ou
              pluricelulares; podem ser simples (proteção mecânica), glandulares
              (secreção de óleos, resinas, néctar) ou absorventes (pêlos
              radiculares, que aumentam a superfície de absorção de água e
              minerais).
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Periderme em detalhe</h3>
          <p>
            Quando caules e raízes passam pelo crescimento secundário, a
            epiderme é substituída pela <strong>periderme</strong>, formada
            por três camadas:
          </p>
          <ul>
            <li>
              <strong>Súber (cortiça):</strong> células mortas com paredes
              impregnadas de <em>suberina</em> (substância impermeável);
              constituem a camada mais externa e protetora.
            </li>
            <li>
              <strong>Felogênio:</strong> meristema secundário que gera súber
              para fora e feloderme para dentro.
            </li>
            <li>
              <strong>Feloderme:</strong> células parenquimáticas vivas,
              internas ao felogênio.
            </li>
          </ul>
          <p>
            A periderme apresenta <strong>lenticelas</strong> — regiões de
            células frouxas que permitem trocas gasosas entre o interior do
            caule/raiz e o ambiente.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 220"
            width="520"
            height="220"
            aria-label="Estômato com células-guarda em vista superficial"
          >
            {/* Células epidérmicas */}
            {[
              [60,30,130,80], [200,30,130,80], [340,30,130,80],
              [60,120,80,80], [350,120,80,80],
              [60,30,80,80],
            ].map((r, i) => (
              <rect key={i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} rx={8} fill="#d1fae5" stroke="#6ee7b7" strokeWidth={1.2} />
            ))}
            <text x={260} y={20} textAnchor="middle" fontSize={11} fill="#374151">células epidérmicas</text>

            {/* Ostíolo (abertura) */}
            <ellipse cx={260} cy={130} rx={18} ry={36} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={260} y={134} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e40af">ostíolo</text>

            {/* Células-guarda */}
            <ellipse cx={238} cy={130} rx={22} ry={38} fill="#86efac" stroke="#16a34a" strokeWidth={2} />
            <ellipse cx={282} cy={130} rx={22} ry={38} fill="#86efac" stroke="#16a34a" strokeWidth={2} />
            <ellipse cx={260} cy={130} rx={18} ry={36} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.5} />

            <line x1={200} y1={175} x2={238} y2={158} stroke="#16a34a" strokeWidth={1} />
            <text x={155} y={183} fontSize={10} fill="#065f46">célula-guarda</text>

            <line x1={320} y1={175} x2={282} y2={158} stroke="#16a34a" strokeWidth={1} />
            <text x={325} y={183} fontSize={10} fill="#065f46">célula-guarda</text>

            {/* Cloroplastos */}
            {[[228,115],[248,140],[272,120],[292,142]].map((pos,i) => (
              <ellipse key={i} cx={pos[0]} cy={pos[1]} rx={6} ry={4} fill="#22c55e" opacity={0.85} />
            ))}
            <text x={260} y={210} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              cloroplastos presentes nas células-guarda
            </text>
          </svg>
          <figcaption>
            Estômato em vista superficial: as duas células-guarda (com
            cloroplastos) delimitam o ostíolo, cuja abertura controla a troca
            gasosa e a transpiração.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentação</span>

        <h2>4. Tecidos de Sustentação: Colênquima e Esclerênquima</h2>

        <p>
          Para crescer contra a gravidade e resistir ao vento sem possuir
          esqueleto, as plantas desenvolveram tecidos de sustentação com
          paredes celulares reforçadas. Há dois tipos principais, com
          características e funções distintas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Colênquima</th>
                <th>Esclerênquima</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estado das células</td>
                <td>Vivas na maturidade</td>
                <td>Mortas na maturidade</td>
              </tr>
              <tr>
                <td>Espessamento da parede</td>
                <td>Irregular (cantos e faces)</td>
                <td>Uniforme em toda a parede</td>
              </tr>
              <tr>
                <td>Substância depositada</td>
                <td>Celulose e pectina</td>
                <td>Lignina</td>
              </tr>
              <tr>
                <td>Flexibilidade</td>
                <td>Alta (suporta alongamento)</td>
                <td>Rígida (nenhuma)</td>
              </tr>
              <tr>
                <td>Localização</td>
                <td>Regiões jovens (caule, pecíolo)</td>
                <td>Regiões que pararam de crescer</td>
              </tr>
              <tr>
                <td>Tipos celulares</td>
                <td>Células de colênquima</td>
                <td>Fibras e esclereídes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Colênquima</h3>
          <p>
            Tecido <strong>vivo</strong> e <strong>maleável</strong>, de grande
            importância em órgãos jovens ainda em elongação. O espessamento
            irregular da parede (por celulose e pectina, sem lignina) confere
            resistência sem impedir o alongamento celular. Por isso, o
            colênquima é o tecido de sustentação dos caules herbáceos jovens,
            pecíolos e nervuras das folhas. É facilmente visível como o "fio"
            branco presente nos talos de aipo (salsão).
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Esclerênquima</h3>
          <p>
            Tecido <strong>morto</strong> na maturidade funcional, com paredes
            uniformemente espessadas por <strong>lignina</strong> — polímero
            que confere dureza e impermeabilidade extremas. Subdividido em:
          </p>
          <ul>
            <li>
              <strong>Fibras:</strong> células alongadas (fusiformes) em
              feixes; base das fibras têxteis vegetais como linho, juta,
              cânhamo e sisal.
            </li>
            <li>
              <strong>Esclereídes (células pétreas):</strong> células curtas
              e isodiamétricas; formam a casca dura das nozes, o caroço de
              peras e a dureza das sementes de leguminosas.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Preenchimento</span>

        <h2>5. Tecidos de Preenchimento: Os Parênquimas</h2>

        <p>
          O <strong>parênquima</strong> é o tecido mais abundante e versátil
          do corpo vegetal. Suas células são <strong>vivas</strong>, com paredes
          celulares primárias finas, vacúolo central proeminente e grande
          capacidade de <strong>desdiferenciação</strong> — ou seja, podem
          voltar a se dividir e originar outros tecidos, propriedade
          explorada amplamente nas técnicas de cultura de tecidos vegetais.
          Os parênquimas são classificados conforme sua função especializada:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍃</span>
            <h3>Clorofiliano (clorênquima)</h3>
            <p>
              Realiza fotossíntese; rico em cloroplastos. Localiza-se nas
              folhas (paliçádico e lacunoso) e em caules verdes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥔</span>
            <h3>De reserva</h3>
            <p>
              Armazena amido (batata, mandioca), óleos (soja, girassol) ou
              proteínas; presente em raízes, tubérculos e sementes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌵</span>
            <h3>Aquífero</h3>
            <p>
              Armazena H₂O em grandes vacúolos; confere suculência a cactos
              e outras xerófitas adaptadas à seca.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪷</span>
            <h3>Aerífero (aerênquima)</h3>
            <p>
              Possui grandes espaços intercelulares com ar; garante
              flutuabilidade e aeração em plantas aquáticas como
              vitória-régia.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Parênquima clorofiliano nas folhas</h3>
          <p>
            O mesofilo foliar (região entre as duas epidermes) é composto por
            dois subtipos de parênquima clorofiliano:
          </p>
          <ul>
            <li>
              <strong>Parênquima paliçádico:</strong> células cilíndricas,
              alongadas e justapostas perpendicularmente à epiderme adaxial
              (superior); alta concentração de cloroplastos — principal sítio
              de fixação de CO₂ pela fotossíntese.
            </li>
            <li>
              <strong>Parênquima lacunoso (esponjoso):</strong> células
              arredondadas com grandes espaços intercelulares; menor
              densidade de cloroplastos, mas papel fundamental na difusão
              de CO₂ e O₂ entre o ostíolo dos estômatos e as células
              fotossintetizantes.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Condução</span>

        <h2>6. Tecidos Vasculares: Xilema e Floema</h2>

        <p>
          A evolução dos tecidos vasculares foi uma das principais
          inovações que permitiu às plantas conquistar o ambiente terrestre.
          Xilema e floema formam o <strong>sistema vascular</strong> das
          traqueófitas (pteridófitas, gimnospermas e angiospermas), possibilitando
          o transporte eficiente de água, nutrientes e fotoassimilados a longas
          distâncias — algo inviável por simples difusão celular a célula.
        </p>

        <div className="lesson-highlight">
          <h3>Xilema (lenho) — seiva bruta</h3>
          <p>
            Conduz a <strong>seiva bruta</strong> (H₂O + sais minerais
            absorvidos pelas raízes) em sentido predominantemente{" "}
            <strong>ascendente</strong> (raiz → caule → folhas), impulsionada
            pela tensão de transpiração (mecanismo de coesão-tensão). É formado
            por:
          </p>
          <ul>
            <li>
              <strong>Elementos traqueais</strong> (células mortas e
              lignificadas):
              <ul>
                <li>
                  <em>Traqueídes:</em> células alongadas sem perfurações nas
                  extremidades; predominam em gimnospermas.
                </li>
                <li>
                  <em>Elementos de vaso (vasos lenhosos):</em> células com
                  paredes terminais perfuradas ou dissolvidas, formando tubos
                  contínuos; predominam em angiospermas e permitem fluxo mais
                  eficiente.
                </li>
              </ul>
            </li>
            <li>
              <strong>Fibras lenhosas:</strong> função de sustentação mecânica
              do tronco.
            </li>
            <li>
              <strong>Parênquima xilemático:</strong> células vivas para
              armazenamento e radiotransporte de compostos.
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Floema (líber) — seiva elaborada</h3>
          <p>
            Conduz a <strong>seiva elaborada</strong> (água + açúcares
            produzidos na fotossíntese, principalmente sacarose) em sentido{" "}
            <strong>bidirecional</strong> — das folhas (fontes) para
            raízes, frutos e sementes (drenos). É formado por:
          </p>
          <ul>
            <li>
              <strong>Elementos crivados</strong> (células vivas, mas
              anucleadas na maturidade): dispostos em fileiras formando vasos
              crivados; as paredes terminais, perfuradas em padrão de crivo,
              constituem as <em>placas crivadas</em>.
            </li>
            <li>
              <strong>Células companheiras:</strong> nucleadas, adjacentes aos
              elementos crivados; regulam o metabolismo deles fornecendo
              proteínas e energia.
            </li>
            <li>
              <strong>Parênquima e fibras floemáticas:</strong> reserva e
              suporte.
            </li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Xilema (lenho)</th>
                <th>Floema (líber)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seiva transportada</td>
                <td>Bruta (H₂O + sais)</td>
                <td>Elaborada (H₂O + açúcares)</td>
              </tr>
              <tr>
                <td>Estado das células condutoras</td>
                <td>Mortas (lignificadas)</td>
                <td>Vivas (anucleadas)</td>
              </tr>
              <tr>
                <td>Sentido do fluxo</td>
                <td>Ascendente (raiz → folha)</td>
                <td>Bidirecional (fonte → dreno)</td>
              </tr>
              <tr>
                <td>Força motriz</td>
                <td>Tensão de transpiração (coesão-tensão)</td>
                <td>Gradiente de pressão osmótica (pressão de fluxo)</td>
              </tr>
              <tr>
                <td>Células de suporte</td>
                <td>Ausentes no elemento condutor</td>
                <td>Células companheiras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 240"
            width="580"
            height="240"
            aria-label="Corte transversal esquemático de caule mostrando xilema, câmbio e floema"
          >
            {/* Círculo externo — periderme */}
            <circle cx={290} cy={120} r={108} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            <text x={290} y={20} textAnchor="middle" fontSize={11} fill="#92400e">Periderme (súber)</text>

            {/* Floema secundário */}
            <circle cx={290} cy={120} r={90} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={290} y={50} textAnchor="middle" fontSize={11} fill="#b45309">Floema secundário</text>

            {/* Câmbio */}
            <circle cx={290} cy={120} r={72} fill="#bbf7d0" stroke="#16a34a" strokeWidth={3} />
            <text x={290} y={72} textAnchor="middle" fontSize={11} fontWeight={700} fill="#065f46">Câmbio</text>

            {/* Xilema secundário */}
            <circle cx={290} cy={120} r={52} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={290} y={115} textAnchor="middle" fontSize={11} fill="#1e40af">Xilema</text>
            <text x={290} y={129} textAnchor="middle" fontSize={11} fill="#1e40af">secundário</text>

            {/* Medula */}
            <circle cx={290} cy={120} r={22} fill="#e0e7ff" stroke="#6366f1" strokeWidth={1.5} />
            <text x={290} y={124} textAnchor="middle" fontSize={10} fill="#3730a3">medula</text>

            {/* Raios medulares */}
            {[0,45,90,135,180,225,270,315].map((ang, i) => {
              const rad = (ang * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={290 + 22 * Math.cos(rad)}
                  y1={120 + 22 * Math.sin(rad)}
                  x2={290 + 70 * Math.cos(rad)}
                  y2={120 + 70 * Math.sin(rad)}
                  stroke="#9ca3af"
                  strokeWidth={1}
                  strokeDasharray="3 2"
                />
              );
            })}

            <text x={290} y={232} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              Corte transversal: câmbio entre xilema (interno) e floema (externo)
            </text>
          </svg>
          <figcaption>
            Corte transversal esquemático de um caule com crescimento
            secundário: câmbio vascular posicionado entre xilema secundário
            (lenho, interno) e floema secundário (líber, externo).
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Crescimento Secundário</span>

        <h2>7. Crescimento Secundário e Anéis de Crescimento</h2>

        <p>
          O <strong>crescimento secundário</strong> é a ampliação do diâmetro
          de caules e raízes graças à atividade dos meristemas laterais
          (câmbio vascular e felogênio). Está presente na grande maioria das
          eudicotiledôneas lenhosas (árvores e arbustos) e nas gimnospermas,
          sendo <strong>ausente</strong> nas monocotiledôneas (que carecem de
          câmbio vascular típico) e nas plantas herbáceas anuais.
        </p>

        <div className="lesson-highlight">
          <h3>Anéis de crescimento (dendrocronologia)</h3>
          <p>
            Em regiões com <strong>sazonalidade climática</strong> (estações
            distintas ou períodos de seca/chuva), o câmbio vascular produz
            xilema secundário de maneira irregular ao longo do ano,
            originando os famosos <strong>anéis de crescimento</strong>
            visíveis no corte transversal do tronco:
          </p>
          <ul>
            <li>
              <strong>Lenho inicial (anel claro):</strong> formado na
              primavera/início do verão, quando há água e nutrientes
              abundantes; células grandes, paredes finas, lúmen amplo —
              aparência clara.
            </li>
            <li>
              <strong>Lenho tardio (anel escuro):</strong> formado no
              outono/inverno, quando o crescimento desacelera; células
              pequenas, paredes espessas, lúmen reduzido — aparência escura
              e densa.
            </li>
          </ul>
          <p>
            Cada par (claro + escuro) corresponde a <strong>um ano</strong> de
            crescimento. A contagem dos anéis (técnica de{" "}
            <strong>dendrocronologia</strong>) permite determinar a idade
            exata da árvore e, ao analisar a largura de cada anel, inferir
            as condições climáticas do passado (anos chuvosos geram anéis
            mais largos; anos de seca, anéis estreitos).
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 480 240"
            width="480"
            height="240"
            aria-label="Anéis de crescimento em corte transversal de tronco"
          >
            {/* Anéis alternados escuro/claro */}
            {[100, 86, 72, 58, 44, 30, 18].map((r, i) => (
              <circle
                key={i}
                cx={240}
                cy={120}
                r={r}
                fill={i % 2 === 0 ? "#fef3c7" : "#92400e"}
                fillOpacity={i % 2 === 0 ? 0.9 : 0.45}
                stroke={i % 2 === 0 ? "#d97706" : "#78350f"}
                strokeWidth={1.2}
              />
            ))}

            {/* Medula */}
            <circle cx={240} cy={120} r={10} fill="#e0e7ff" stroke="#6366f1" strokeWidth={1.5} />
            <text x={240} y={124} textAnchor="middle" fontSize={8} fill="#3730a3">medula</text>

            {/* Seta + legenda anel claro */}
            <line x1={340} y1={80} x2={280} y2={105} stroke="#d97706" strokeWidth={1.2} />
            <text x={345} y={78} fontSize={10} fill="#92400e">anel claro</text>
            <text x={345} y={90} fontSize={9} fill="#6b7280">(lenho inicial)</text>

            {/* Seta + legenda anel escuro */}
            <line x1={340} y1={140} x2={295} y2={130} stroke="#78350f" strokeWidth={1.2} />
            <text x={345} y={138} fontSize={10} fill="#78350f">anel escuro</text>
            <text x={345} y={150} fontSize={9} fill="#6b7280">(lenho tardio)</text>

            <text x={240} y={235} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              Cada par claro + escuro = 1 ano de crescimento
            </text>
          </svg>
          <figcaption>
            Anéis de crescimento em corte transversal de tronco: alternância
            de lenho inicial (claro, primavera) e lenho tardio (escuro,
            outono/inverno). A contagem dos pares fornece a idade da árvore.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Comparativa</span>

        <h2>8. Quadro-Resumo dos Tecidos Vegetais</h2>

        <p>
          A tabela a seguir sintetiza os principais tecidos vegetais, sua
          origem, composição celular, características marcantes e funções —
          exatamente o tipo de conteúdo sistematizado exigido nas questões
          de maior dificuldade do ENEM e dos vestibulares de medicina.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tecido</th>
                <th>Células</th>
                <th>Parede / composto</th>
                <th>Vivas?</th>
                <th>Função principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Epiderme</td>
                <td>Achatadas e justapostas</td>
                <td>Cutícula (cutina)</td>
                <td>Sim</td>
                <td>Proteção, trocas gasosas (estômatos)</td>
              </tr>
              <tr>
                <td>Súber (cortiça)</td>
                <td>Compactas, mortas</td>
                <td>Suberina</td>
                <td>Não</td>
                <td>Impermeabilização e proteção secundária</td>
              </tr>
              <tr>
                <td>Colênquima</td>
                <td>Irregularmente espessadas</td>
                <td>Celulose + pectina</td>
                <td>Sim</td>
                <td>Sustentação em órgãos jovens</td>
              </tr>
              <tr>
                <td>Esclerênquima</td>
                <td>Fibras e esclereídes</td>
                <td>Lignina</td>
                <td>Não</td>
                <td>Sustentação rígida</td>
              </tr>
              <tr>
                <td>Parênquima clorofiliano</td>
                <td>Paredes finas, vacúolo amplo</td>
                <td>Celulose</td>
                <td>Sim</td>
                <td>Fotossíntese</td>
              </tr>
              <tr>
                <td>Parênquima de reserva</td>
                <td>Paredes finas, vacúolo amplo</td>
                <td>Celulose</td>
                <td>Sim</td>
                <td>Armazenamento (amido, óleos)</td>
              </tr>
              <tr>
                <td>Xilema</td>
                <td>Traqueídes e vasos</td>
                <td>Lignina</td>
                <td>Não</td>
                <td>Condução de seiva bruta (ascendente)</td>
              </tr>
              <tr>
                <td>Floema</td>
                <td>Elementos crivados + companheiras</td>
                <td>Celulose (sem lignina)</td>
                <td>Sim (anucleados)</td>
                <td>Condução de seiva elaborada (bidirecional)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Pontos mais cobrados em provas</h3>
          <p>
            Atenção especial para as oposições clássicas exploradas pelo ENEM:
          </p>
          <ul>
            <li>
              <strong>Colênquima × esclerênquima:</strong> ambos sustentam, mas
              o colênquima é <em>vivo e flexível</em> (sem lignina); o
              esclerênquima é <em>morto e rígido</em> (com lignina).
            </li>
            <li>
              <strong>Xilema × floema:</strong> xilema conduz seiva{" "}
              <em>bruta</em> de forma <em>ascendente</em> por células{" "}
              <em>mortas</em>; floema conduz seiva <em>elaborada</em>{" "}
              bidirecionalmente por células <em>vivas</em> (anucleadas).
            </li>
            <li>
              <strong>Epiderme × periderme:</strong> epiderme é o revestimento
              primário (células vivas, cutícula); periderme é o secundário
              (súber morto, suberina), substituindo a epiderme quando há
              crescimento em espessura.
            </li>
            <li>
              <strong>Câmbio × felogênio:</strong> câmbio produz xilema/floema
              secundários (aumenta espessura vascular); felogênio produz súber
              + feloderme (aumenta espessura do revestimento).
            </li>
          </ul>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Técnicas e Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Tecido meristemático"
          statement={
            <p>
              Qual das seguintes características é típica das células
              meristemáticas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Células grandes, com vacúolo central volumoso e paredes espessadas por lignina",
            },
            {
              letter: "b",
              text: "Células pequenas, com núcleo grande, citoplasma denso e intensa atividade de divisão mitótica",
              correct: true,
            },
            {
              letter: "c",
              text: "Células mortas na maturidade, especializadas em condução de seiva",
            },
            {
              letter: "d",
              text: "Células arredondadas com abundantes cloroplastos, responsáveis pela fotossíntese",
            },
          ]}
          resolution={
            <p>
              Os meristemas são tecidos embrionários cujas células estão em
              constante divisão. Por isso são pequenas (ciclo celular rápido),
              possuem núcleo proporcionalmente grande (muita transcrição),
              citoplasma denso e vacúolos reduzidos ou ausentes. As demais
              alternativas descrevem células adultas diferenciadas.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Colênquima versus esclerênquima"
          statement={
            <p>
              Ao examinar ao microscópio o caule de uma planta jovem em fase de
              elongação, um pesquisador identifica um tecido de sustentação
              cujas células apresentam paredes espessadas irregularmente —
              principalmente nos cantos — sem impregnação de lignina, e que
              ainda estão vivas. Esse tecido é o:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Esclerênquima, por apresentar espessamento de parede",
            },
            {
              letter: "b",
              text: "Colênquima, pois é vivo, flexível e sem lignina, adequado a regiões em crescimento",
              correct: true,
            },
            {
              letter: "c",
              text: "Parênquima clorofiliano, por estar no caule e realizar fotossíntese",
            },
            {
              letter: "d",
              text: "Xilema primário, por estar associado à condução e ao reforço estrutural",
            },
          ]}
          resolution={
            <p>
              O colênquima é o único tecido de sustentação formado por células
              vivas, com parede espessada por celulose e pectina (sem lignina)
              de forma irregular. Essa combinação permite sustentar sem impedir
              o alongamento celular — por isso predomina em caules jovens e
              pecíolos ainda em crescimento. O esclerênquima, ao contrário,
              possui lignina e células mortas, adequado a regiões que cessaram
              o crescimento.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Câmbio vascular e produção tecidual"
          statement={
            <p>
              Em uma árvore adulta, o câmbio vascular produz, ao longo de anos,
              volumes muito maiores de xilema secundário (lenho) do que de
              floema secundário (líber). Isso ocorre porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O câmbio é unidirecional e só consegue produzir tecido para o interior",
            },
            {
              letter: "b",
              text: "As células do xilema são maiores que as do floema, ocupando mais espaço",
            },
            {
              letter: "c",
              text: "O câmbio produz, em média, mais células para o lado interno (xilema) do que para o externo (floema), e o xilema não é destruído com o tempo, acumulando-se",
              correct: true,
            },
            {
              letter: "d",
              text: "O floema secundário substitui continuamente o xilema, mantendo equilíbrio de volume",
            },
          ]}
          resolution={
            <p>
              O câmbio fusiforme produz mais células xilemáticas (lenho) para o
              interior do que floemáticas para o exterior. Além disso, o xilema
              secundário é persistente — acumula-se ano a ano formando a madeira
              —, enquanto o floema externo é parcialmente comprimido e
              substituído pelo crescimento contínuo. Isso explica por que o
              tronco de uma árvore é, na sua maior parte, madeira (lenho).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Rolha de cortiça (ENEM-estilo)"
          statement={
            <p>
              A rolha utilizada para vedar garrafas de vinho é extraída da
              cortiça do sobreiro (<em>Quercus suber</em>). A cortiça é um
              material leve, impermeável e compressível, obtido da casca dessa
              árvore sem matá-la, pois a camada geradora se regenera. Com base
              na histologia vegetal, o tecido de onde a cortiça é extraída e a
              substância responsável por sua impermeabilidade são,
              respectivamente:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Floema secundário; lignina",
            },
            {
              letter: "b",
              text: "Epiderme primária; cutina",
            },
            {
              letter: "c",
              text: "Súber (tecido da periderme); suberina",
              correct: true,
            },
            {
              letter: "d",
              text: "Colênquima; pectina",
            },
          ]}
          resolution={
            <p>
              A cortiça comercial corresponde ao <strong>súber</strong>, camada
              de células mortas da <strong>periderme</strong> impregnadas de{" "}
              <strong>suberina</strong> — lipídio que confere impermeabilidade
              e leveza. O felogênio (meristema secundário) permanece ativo e
              regenera o súber após a extração. A cutina impermeabiliza a
              epiderme primária; a lignina reforça xilema e esclerênquima; a
              pectina compõe as paredes do colênquima.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Anéis de crescimento e mudanças climáticas"
          statement={
            <p>
              Pesquisadores analisaram anéis de crescimento de uma árvore
              centenária e verificaram que, nos últimos 30 anos, os anéis
              claros (lenho inicial) tornaram-se progressivamente mais estreitos,
              enquanto os anéis escuros (lenho tardio) mantiveram espessura
              estável. Essa observação sugere que, no período estudado, ocorreu:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Aumento nas precipitações de primavera e verão, favorecendo maior crescimento anual",
            },
            {
              letter: "b",
              text: "Redução do período favorável de crescimento (primavera/verão mais curtos ou secos), diminuindo a produção de lenho inicial pelo câmbio",
              correct: true,
            },
            {
              letter: "c",
              text: "Maior atividade do felogênio, produzindo mais súber e comprimindo os anéis de lenho",
            },
            {
              letter: "d",
              text: "Substituição do xilema secundário por floema secundário durante períodos quentes",
            },
          ]}
          resolution={
            <p>
              O lenho inicial (anel claro) é produzido na primavera/verão,
              quando o câmbio está mais ativo graças à disponibilidade de água
              e temperatura favorável. Anéis claros mais estreitos indicam que
              a estação favorável de crescimento foi mais curta ou mais seca —
              padrão consistente com as alterações climáticas observadas em
              diversas regiões temperadas (verões mais quentes e secos). A
              dendrocronologia é, portanto, uma importante ferramenta para
              reconstruir o clima do passado.
            </p>
          }
        />
      </section>
    </article>
  );
}
