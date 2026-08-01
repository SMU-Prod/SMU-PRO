"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 12</span>

          <h1>Divisão Celular II: Meiose, Gametogênese e Crossing-over</h1>

          <p>
            A meiose é a divisão que torna a reprodução sexuada possível: ela
            reduz o número de cromossomos à metade, embaralha o material
            genético por meio do crossing-over e da segregação independente, e
            dá origem aos gametas. Dominar este capítulo é essencial para
            entender herança genética, variabilidade e evolução — temas
            recorrentes no ENEM e nos principais vestibulares do Brasil.
          </p>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 1 — O QUE É A MEIOSE
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. O Que É a Meiose e Por Que Ela Existe</h2>

        <p>
          A <strong>meiose</strong> é um tipo especial de divisão celular
          restrita às células germinativas (espermatogônias e ovogônias) e,
          em algumas espécies, às células que originam esporos. Partindo de
          uma única célula <strong>diploide (2n)</strong>, a meiose produz
          quatro células <strong>haploides (n)</strong>, cada uma com metade
          do conjunto cromossômico original e uma combinação única de alelos.
        </p>

        <p>
          A necessidade biológica da meiose é direta: sem ela, a{" "}
          <strong>fecundação duplicaria o número de cromossomos</strong> a
          cada geração. Em humanos (2n = 46), os filhos teriam 92
          cromossomos, os netos 184 e assim por diante — tornando a espécie
          inviável em poucas gerações. A meiose garante que os gametas
          (ovócito e espermatozoide) tenham n = 23 cromossomos, de modo que
          a fusão deles restitua o 2n = 46 no zigoto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Redução cromossômica</h3>
            <p>
              Célula 2n → 4 células n. O número haploide é restaurado pela
              fecundação.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Variabilidade genética</h3>
            <p>
              Crossing-over e segregação independente geram combinações
              alélicas únicas em cada gameta.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Exclusiva das células germinativas</h3>
            <p>
              Ocorre nos testículos (espermatogênese) e nos ovários
              (ovogênese) dos animais.
            </p>
          </div>

          <div className="lesson-card">
            <span>♻️</span>
            <h3>Duas divisões consecutivas</h3>
            <p>
              Meiose I (reducional) + Meiose II (equacional), sem nova
              síntese de DNA entre elas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção:</strong> meiose ocorre{" "}
            <strong>antes</strong> da fecundação — e NÃO durante. A
            fecundação reune dois gametas haploides já prontos, formando o
            zigoto diploide.
          </p>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 2 — VISÃO PANORÂMICA DAS DUAS DIVISÕES
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Geral</span>

        <h2>2. Meiose I (Reducional) e Meiose II (Equacional)</h2>

        <p>
          A meiose é composta por duas rodadas de divisão. Entre elas{" "}
          <strong>não há replicação de DNA</strong> — essa é uma das
          diferenças fundamentais em relação à mitose. Cada divisão segue as
          mesmas fases clássicas (prófase, metáfase, anáfase e telófase),
          mas com eventos moleculares distintos.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 800 260"
            width="800"
            height="260"
            aria-label="Diagrama geral da meiose: 2n para n"
          >
            {/* Célula mãe 2n */}
            <ellipse cx={80} cy={130} rx={62} ry={62} fill="#dbeafe" stroke="#2563eb" strokeWidth={2} />
            <text x={80} y={125} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">célula</text>
            <text x={80} y={142} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">2n = 4</text>
            {/* Cromossomos par 1 */}
            <rect x={55} y={95} width={9} height={22} rx={4} fill="#dc2626" />
            <rect x={66} y={95} width={9} height={22} rx={4} fill="#dc2626" opacity={0.5} />
            {/* Cromossomos par 2 */}
            <rect x={55} y={122} width={9} height={22} rx={4} fill="#16a34a" />
            <rect x={66} y={122} width={9} height={22} rx={4} fill="#16a34a" opacity={0.5} />

            {/* Seta Meiose I */}
            <path d="M145 130 L210 130" stroke="#374151" strokeWidth={2} markerEnd="url(#arr)" />
            <text x={177} y={118} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Meiose I</text>
            <text x={177} y={148} textAnchor="middle" fontSize={10} fill="#6b7280">homólogos</text>
            <text x={177} y={159} textAnchor="middle" fontSize={10} fill="#6b7280">separam-se</text>

            {/* Células n após Meiose I */}
            <ellipse cx={268} cy={80} rx={46} ry={46} fill="#dcfce7" stroke="#16a34a" strokeWidth={2} />
            <text x={268} y={75} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">n = 2</text>
            <text x={268} y={91} textAnchor="middle" fontSize={10} fill="#166534">(dup.)</text>
            <rect x={249} y={55} width={8} height={18} rx={3} fill="#dc2626" />
            <rect x={259} y={55} width={8} height={18} rx={3} fill="#16a34a" />

            <ellipse cx={268} cy={180} rx={46} ry={46} fill="#dcfce7" stroke="#16a34a" strokeWidth={2} />
            <text x={268} y={175} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">n = 2</text>
            <text x={268} y={191} textAnchor="middle" fontSize={10} fill="#166534">(dup.)</text>
            <rect x={249} y={155} width={8} height={18} rx={3} fill="#dc2626" opacity={0.5} />
            <rect x={259} y={155} width={8} height={18} rx={3} fill="#16a34a" opacity={0.5} />

            {/* Seta Meiose II */}
            <path d="M316 80 L390 60" stroke="#374151" strokeWidth={2} markerEnd="url(#arr)" />
            <path d="M316 80 L390 100" stroke="#374151" strokeWidth={2} markerEnd="url(#arr)" />
            <path d="M316 180 L390 160" stroke="#374151" strokeWidth={2} markerEnd="url(#arr)" />
            <path d="M316 180 L390 200" stroke="#374151" strokeWidth={2} markerEnd="url(#arr)" />
            <text x={353} y={126} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Meiose II</text>
            <text x={353} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">cromátides</text>
            <text x={353} y={149} textAnchor="middle" fontSize={10} fill="#6b7280">separam-se</text>

            {/* 4 células n finais */}
            {[50, 90, 150, 190].map((cy, i) => (
              <g key={i}>
                <ellipse cx={430} cy={cy} rx={34} ry={34} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.8} />
                <text x={430} y={cy - 5} textAnchor="middle" fontSize={11} fontWeight={700} fill="#713f12">n = 2</text>
                <text x={430} y={cy + 10} textAnchor="middle" fontSize={9} fill="#78716c">gameta</text>
              </g>
            ))}

            {/* Rotulagem lateral */}
            <text x={490} y={50} fontSize={12} fontWeight={700} fill="#0369a1">4 células haploides</text>
            <text x={490} y={66} fontSize={11} fill="#0369a1">geneticamente</text>
            <text x={490} y={80} fontSize={11} fill="#0369a1">diferentes entre si</text>

            {/* Linha do tempo */}
            <line x1={20} y1={242} x2={470} y2={242} stroke="#d1d5db" strokeWidth={1.5} />
            <text x={80} y={258} textAnchor="middle" fontSize={10} fill="#6b7280">Início (2n)</text>
            <text x={268} y={258} textAnchor="middle" fontSize={10} fill="#6b7280">Após Meiose I (n, dup.)</text>
            <text x={430} y={258} textAnchor="middle" fontSize={10} fill="#6b7280">Após Meiose II (n)</text>

            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6 Z" fill="#374151" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Da célula diploide (2n = 4) às quatro células haploides (n = 2):
            a Meiose I separa homólogos; a Meiose II separa cromátides-irmãs.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Meiose I</th>
                <th>Meiose II</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de divisão</td>
                <td>Reducional (2n → n)</td>
                <td>Equacional (n → n)</td>
              </tr>
              <tr>
                <td>O que se separa</td>
                <td>Cromossomos homólogos</td>
                <td>Cromátides-irmãs</td>
              </tr>
              <tr>
                <td>Pareamento (sinapse)</td>
                <td>Sim (bivalentes)</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Crossing-over</td>
                <td>Sim (paquíteno)</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Resultado</td>
                <td>2 células n (cromossomos duplicados)</td>
                <td>4 células n (cromossomos simples)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 3 — PRÓFASE I E CROSSING-OVER
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Prófase I em Detalhe</span>

        <h2>3. A Prófase I: o Coração da Meiose</h2>

        <p>
          A <strong>prófase I</strong> é a fase mais longa e biologicamente
          mais importante da meiose. Nela, os pares de cromossomos homólogos
          se aproximam, ficam lado a lado — evento chamado de{" "}
          <strong>sinapse</strong> — e trocam fragmentos entre si pelo{" "}
          <strong>crossing-over</strong>. Esse processo é subdividido em
          cinco subestágios clássicos, resumidos pelo acrônimo{" "}
          <strong>L-Z-P-D-D</strong>:
        </p>

        <div className="lesson-highlight">
          <h3>Os cinco subestágios da Prófase I</h3>
          <ol>
            <li>
              <strong>Leptóteno</strong> — os cromossomos começam a
              condensar-se; cada cromossomo já está duplicado (duas
              cromátides-irmãs unidas pelo centrômero), mas ainda se
              apresenta como um fio fino.
            </li>
            <li>
              <strong>Zigóteno</strong> — homólogos se aproximam e iniciam a
              sinapse (pareamento gene a gene), formando os{" "}
              <strong>bivalentes</strong> (= tétrades, pois reúnem 4
              cromátides).
            </li>
            <li>
              <strong>Paquíteno</strong> — sinapse completa; ocorre o{" "}
              <strong>crossing-over</strong>: cromátides não-irmãs trocam
              segmentos idênticos. Cada ponto de troca visível ao microscópio
              é um <strong>quiasma</strong>.
            </li>
            <li>
              <strong>Diplóteno</strong> — os homólogos começam a se afastar,
              mas permanecem unidos nos quiasmas; em ovócitos de mamíferos
              pode durar anos (dictióteno).
            </li>
            <li>
              <strong>Diacinese</strong> — máxima condensação cromossômica; o
              envelope nuclear desaparece; os quiasmas migram para as
              extremidades (terminalização).
            </li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 200"
            width="720"
            height="200"
            aria-label="Crossing-over entre cromátides homólogas"
          >
            {/* Título */}
            <text x={360} y={18} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1f2937">
              Crossing-over no Paquíteno
            </text>

            {/* Antes */}
            <text x={150} y={42} textAnchor="middle" fontSize={12} fill="#6b7280">Antes (bivalente)</text>
            {/* Homólogo 1 — cromátides A e A' */}
            <rect x={110} y={52} width={16} height={110} rx={6} fill="#dc2626" />
            <rect x={130} y={52} width={16} height={110} rx={6} fill="#dc2626" opacity={0.5} />
            {/* Homólogo 2 — cromátides B e B' */}
            <rect x={160} y={52} width={16} height={110} rx={6} fill="#2563eb" />
            <rect x={180} y={52} width={16} height={110} rx={6} fill="#2563eb" opacity={0.5} />
            {/* Labels */}
            <text x={118} y={175} textAnchor="middle" fontSize={10} fill="#dc2626">A</text>
            <text x={138} y={175} textAnchor="middle" fontSize={10} fill="#dc2626">A'</text>
            <text x={168} y={175} textAnchor="middle" fontSize={10} fill="#2563eb">B</text>
            <text x={188} y={175} textAnchor="middle" fontSize={10} fill="#2563eb">B'</text>

            {/* Seta */}
            <path d="M 230 107 L 290 107" stroke="#374151" strokeWidth={2} markerEnd="url(#arr2)" />
            <text x={260} y={97} textAnchor="middle" fontSize={11} fill="#374151">troca</text>

            {/* Depois */}
            <text x={430} y={42} textAnchor="middle" fontSize={12} fill="#6b7280">Depois (recombinação)</text>
            {/* Cromátide A: parte vermelha + parte azul */}
            <rect x={350} y={52} width={16} height={60} rx={6} fill="#dc2626" />
            <rect x={350} y={112} width={16} height={50} rx={6} fill="#2563eb" />
            {/* Cromátide A': vermelha completa */}
            <rect x={370} y={52} width={16} height={110} rx={6} fill="#dc2626" opacity={0.5} />
            {/* Cromátide B: azul + vermelho */}
            <rect x={400} y={52} width={16} height={60} rx={6} fill="#2563eb" />
            <rect x={400} y={112} width={16} height={50} rx={6} fill="#dc2626" />
            {/* Cromátide B': azul completa */}
            <rect x={420} y={52} width={16} height={110} rx={6} fill="#2563eb" opacity={0.5} />
            {/* Quiasma */}
            <line x1={366} y1={112} x2={400} y2={112} stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="4 2" />
            <text x={383} y={108} textAnchor="middle" fontSize={9} fill="#d97706">quiasma</text>
            {/* Labels */}
            <text x={358} y={175} textAnchor="middle" fontSize={10} fill="#374151">A*</text>
            <text x={378} y={175} textAnchor="middle" fontSize={10} fill="#dc2626">A'</text>
            <text x={408} y={175} textAnchor="middle" fontSize={10} fill="#374151">B*</text>
            <text x={428} y={175} textAnchor="middle" fontSize={10} fill="#2563eb">B'</text>

            {/* Legenda */}
            <rect x={510} y={75} width={14} height={14} rx={3} fill="#dc2626" />
            <text x={528} y={87} fontSize={11} fill="#374151">alelos do pai</text>
            <rect x={510} y={97} width={14} height={14} rx={3} fill="#2563eb" />
            <text x={528} y={109} fontSize={11} fill="#374151">alelos da mãe</text>
            <line x1={510} y1={126} x2={524} y2={126} stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="4 2" />
            <text x={528} y={130} fontSize={11} fill="#374151">quiasma</text>

            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6 Z" fill="#374151" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            No paquíteno, cromátides não-irmãs trocam segmentos no quiasma,
            gerando cromátides recombinantes (A* e B*) com combinações novas
            de alelos.
          </figcaption>
        </figure>

        <p>
          O <strong>crossing-over</strong> (ou permutação, ou recombinação
          meiótica) é um processo enzimático que envolve a ruptura e a
          nova ligação de fitas de DNA entre cromátides não-irmãs. O
          resultado são cromátides <strong>recombinantes</strong>, que
          carregam combinações de alelos que não existiam nos cromossomos
          parentais. Quanto mais distantes dois genes estiverem no
          cromossomo, maior a probabilidade de um quiasma se formar entre
          eles — base do <strong>mapeamento gênico</strong>.
        </p>
      </section>

      {/* ============================================================
          SEÇÃO 4 — FONTES DE VARIABILIDADE GENÉTICA
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Variabilidade Genética</span>

        <h2>4. Por Que a Meiose Gera Variabilidade Sem Precedentes</h2>

        <p>
          Três mecanismos independentes se combinam para produzir gametas
          extremamente diversos, tornando cada ser humano geneticamente
          único:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Crossing-over</h3>
            <p>
              Troca de segmentos entre cromátides homólogas no paquíteno da
              prófase I. Em média, ocorrem 1 a 3 quiasmas por par
              cromossômico em humanos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎲</span>
            <h3>Segregação independente</h3>
            <p>
              Na metáfase I, cada par de bivalentes se orienta
              aleatoriamente no equador: o homólogo materno pode ir para
              qualquer polo. Com 23 pares: 2²³ ≈ 8,4 milhões de combinações
              possíveis.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥚</span>
            <h3>Fecundação aleatória</h3>
            <p>
              Qualquer espermatozoide (dentre milhões) pode fecundar qualquer
              ovócito. Combina os 2²³ do pai com os 2²³ da mãe: mais de 70
              trilhões de zigotos diferentes são possíveis — sem contar o
              crossing-over.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Cálculo de combinações gaméticas em humanos</h3>
          <p>
            Considerando apenas a segregação independente (23 pares de
            cromossomos), cada pessoa pode produzir{" "}
            <strong>2²³ = 8.388.608</strong> tipos de gametas. Levando em
            conta o crossing-over, esse número se torna{" "}
            <strong>virtualmente infinito</strong>. É por isso que irmãos
            gerados pelos mesmos pais (exceto gêmeos idênticos) são
            geneticamente diferentes entre si.
          </p>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 5 — GAMETOGÊNESE: ESPERMATOGÊNESE E OVOGÊNESE
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Gametogênese</span>

        <h2>5. Gametogênese: Espermatogênese e Ovogênese</h2>

        <p>
          A <strong>gametogênese</strong> é o processo de formação dos
          gametas a partir das células germinativas primordiais. Em animais,
          ocorre nos <strong>gônadas</strong> (testículos e ovários) e
          envolve quatro fases sucessivas: multiplicação, crescimento,
          maturação e — apenas em machos — diferenciação (espermiogênese).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 310"
            width="760"
            height="310"
            aria-label="Comparação entre espermatogênese e ovogênese"
          >
            {/* Espermatogênese — lado esquerdo */}
            <text x={185} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#1d4ed8">
              Espermatogênese
            </text>

            {/* Espermatogônia */}
            <ellipse cx={185} cy={55} rx={44} ry={18} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.8} />
            <text x={185} y={59} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">espermatogônia (2n)</text>
            {/* seta fase mitose */}
            <line x1={185} y1={73} x2={185} y2={90} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={222} y={85} fontSize={9} fill="#6b7280">mitose</text>

            {/* Espermatócito I */}
            <ellipse cx={185} cy={107} rx={44} ry={18} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.8} />
            <text x={185} y={111} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">espermatócito I (2n)</text>
            {/* seta Meiose I */}
            <line x1={185} y1={125} x2={185} y2={143} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={225} y={137} fontSize={9} fill="#6b7280">Meiose I</text>

            {/* 2 espermatócitos II */}
            <ellipse cx={120} cy={162} rx={40} ry={16} fill="#93c5fd" stroke="#2563eb" strokeWidth={1.8} />
            <text x={120} y={166} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e3a8a">espermatócito II (n)</text>
            <ellipse cx={252} cy={162} rx={40} ry={16} fill="#93c5fd" stroke="#2563eb" strokeWidth={1.8} />
            <text x={252} y={166} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e3a8a">espermatócito II (n)</text>
            {/* linhas da bifurcação */}
            <line x1={185} y1={143} x2={120} y2={146} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={185} y1={143} x2={252} y2={146} stroke="#6b7280" strokeWidth={1.2} />
            {/* seta Meiose II */}
            <line x1={120} y1={178} x2={120} y2={195} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <line x1={252} y1={178} x2={252} y2={195} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={225} y={190} fontSize={9} fill="#6b7280">Meiose II</text>

            {/* 4 espermátides */}
            {[68, 120, 220, 285].map((cx, i) => (
              <g key={i}>
                <ellipse cx={cx} cy={213} rx={28} ry={13} fill="#60a5fa" stroke="#2563eb" strokeWidth={1.5} />
                <text x={cx} y={217} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e3a8a">espermátide (n)</text>
              </g>
            ))}
            {/* linhas das 4 */}
            <line x1={120} y1={195} x2={68} y2={200} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={120} y1={195} x2={120} y2={200} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={252} y1={195} x2={220} y2={200} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={252} y1={195} x2={285} y2={200} stroke="#6b7280" strokeWidth={1.2} />

            {/* seta diferenciação */}
            <line x1={185} y1={226} x2={185} y2={245} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={222} y={240} fontSize={9} fill="#6b7280">diferenciação</text>

            {/* 4 espermatozoides */}
            {[68, 120, 220, 285].map((cx, i) => (
              <g key={i}>
                <ellipse cx={cx} cy={265} rx={26} ry={12} fill="#1d4ed8" stroke="#1e40af" strokeWidth={1.5} />
                <text x={cx} y={269} textAnchor="middle" fontSize={9} fontWeight={600} fill="#eff6ff">spz (n)</text>
                {/* flagelo estilizado */}
                <path d={`M ${cx + 20} 265 q 12 5 16 15`} stroke="#1d4ed8" strokeWidth={1.5} fill="none" />
              </g>
            ))}
            <text x={185} y={294} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1d4ed8">4 espermatozoides funcionais</text>

            {/* Divisor vertical */}
            <line x1={380} y1={15} x2={380} y2={300} stroke="#e5e7eb" strokeWidth={2} strokeDasharray="8 4" />

            {/* Ovogênese — lado direito */}
            <text x={565} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#be185d">
              Ovogênese
            </text>

            {/* Ovogônia */}
            <ellipse cx={565} cy={55} rx={44} ry={18} fill="#fce7f3" stroke="#db2777" strokeWidth={1.8} />
            <text x={565} y={59} textAnchor="middle" fontSize={11} fontWeight={700} fill="#831843">ovogônia (2n)</text>
            <line x1={565} y1={73} x2={565} y2={90} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={602} y={85} fontSize={9} fill="#6b7280">mitose</text>

            {/* Ovócito I */}
            <ellipse cx={565} cy={107} rx={44} ry={18} fill="#fbcfe8" stroke="#db2777" strokeWidth={1.8} />
            <text x={565} y={111} textAnchor="middle" fontSize={11} fontWeight={700} fill="#831843">ovócito I (2n)</text>
            <line x1={565} y1={125} x2={565} y2={143} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={602} y={137} fontSize={9} fill="#6b7280">Meiose I</text>

            {/* Ovócito II + 1° corpúsculo polar */}
            <ellipse cx={530} cy={162} rx={42} ry={16} fill="#f9a8d4" stroke="#db2777" strokeWidth={1.8} />
            <text x={530} y={166} textAnchor="middle" fontSize={10} fontWeight={700} fill="#831843">ovócito II (n)</text>
            <ellipse cx={618} cy={162} rx={30} ry={13} fill="#fde8f4" stroke="#db2777" strokeWidth={1.2} strokeDasharray="3 2" />
            <text x={618} y={166} textAnchor="middle" fontSize={9} fill="#9d174d">1° CP (n)</text>
            <line x1={565} y1={143} x2={530} y2={146} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={565} y1={143} x2={618} y2={146} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={530} y1={178} x2={530} y2={195} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrs)" />
            <text x={568} y={192} fontSize={9} fill="#6b7280">Meiose II</text>
            <text x={568} y={202} fontSize={9} fill="#9d174d">(só se fecundado)</text>

            {/* Óvulo + 2° corpúsculos */}
            <ellipse cx={508} cy={228} rx={34} ry={16} fill="#ec4899" stroke="#be185d" strokeWidth={2} />
            <text x={508} y={232} textAnchor="middle" fontSize={10} fontWeight={700} fill="#fff">óvulo (n)</text>
            <ellipse cx={560} cy={228} rx={22} ry={11} fill="#fde8f4" stroke="#db2777" strokeWidth={1.2} strokeDasharray="3 2" />
            <text x={560} y={232} textAnchor="middle" fontSize={9} fill="#9d174d">2° CP (n)</text>
            <line x1={530} y1={195} x2={508} y2={212} stroke="#6b7280" strokeWidth={1.2} />
            <line x1={530} y1={195} x2={560} y2={212} stroke="#6b7280" strokeWidth={1.2} />

            {/* Corpúsculos polares do 1° CP */}
            <ellipse cx={628} cy={210} rx={20} ry={10} fill="#fde8f4" stroke="#db2777" strokeWidth={1} strokeDasharray="3 2" />
            <text x={628} y={214} textAnchor="middle" fontSize={8} fill="#9d174d">CP (n)</text>
            <ellipse cx={655} cy={228} rx={20} ry={10} fill="#fde8f4" stroke="#db2777" strokeWidth={1} strokeDasharray="3 2" />
            <text x={655} y={232} textAnchor="middle" fontSize={8} fill="#9d174d">CP (n)</text>
            <line x1={618} y1={175} x2={628} y2={200} stroke="#d1d5db" strokeWidth={1} />
            <line x1={618} y1={175} x2={655} y2={218} stroke="#d1d5db" strokeWidth={1} />

            <text x={565} y={260} textAnchor="middle" fontSize={10} fontWeight={700} fill="#be185d">1 óvulo funcional + 3 corpúsculos polares</text>

            <defs>
              <marker id="arrs" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6 Z" fill="#6b7280" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Comparação entre espermatogênese (esquerda) e ovogênese
            (direita): a espermatogênese produz 4 gametas funcionais; a
            ovogênese produz 1 óvulo + 3 corpúsculos polares (CP).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Espermatogênese</th>
                <th>Ovogênese</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local</td>
                <td>Túbulos seminíferos (testículos)</td>
                <td>Folículos ovarianos (ovários)</td>
              </tr>
              <tr>
                <td>Gametas funcionais por célula-mãe</td>
                <td>4 espermatozoides</td>
                <td>1 óvulo + 3 corpúsculos polares</td>
              </tr>
              <tr>
                <td>Continuidade</td>
                <td>Contínua a partir da puberdade</td>
                <td>Descontínua (interrompida em prófase I até puberdade; meiose II só se completa com fecundação)</td>
              </tr>
              <tr>
                <td>Divisão citoplasmática</td>
                <td>Equitativa (4 células iguais)</td>
                <td>Assimétrica (óvulo grande; CPs pequenos)</td>
              </tr>
              <tr>
                <td>Fase de diferenciação</td>
                <td>Sim (espermiogênese: flagelo, acrossomo)</td>
                <td>Não (óvulo já funcional após meiose)</td>
              </tr>
              <tr>
                <td>Reserva citoplasmática</td>
                <td>Mínima (apenas organelas basais)</td>
                <td>Abundante (vitelo para o embrião)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 6 — COMPARAÇÃO MITOSE × MEIOSE
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Mitose × Meiose</span>

        <h2>6. Mitose versus Meiose: Quadro Comparativo Completo</h2>

        <p>
          Uma das comparações mais cobradas no ENEM e nos vestibulares é a
          diferença entre mitose e meiose. Ambas compartilham as mesmas
          fases e usam fusos mitóticos, mas divergem em propósito,
          produto e genética.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Mitose</th>
                <th>Meiose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Onde ocorre</td>
                <td>Células somáticas (corpo inteiro)</td>
                <td>Células germinativas (gônadas)</td>
              </tr>
              <tr>
                <td>Número de divisões</td>
                <td>1</td>
                <td>2 (I e II)</td>
              </tr>
              <tr>
                <td>Célula-mãe → produto</td>
                <td>1 célula 2n → 2 células 2n</td>
                <td>1 célula 2n → 4 células n</td>
              </tr>
              <tr>
                <td>Pareamento de homólogos</td>
                <td>Não</td>
                <td>Sim (bivalentes na prófase I)</td>
              </tr>
              <tr>
                <td>Crossing-over</td>
                <td>Não (raro, quando ocorre é patológico)</td>
                <td>Sim (paquíteno da prófase I)</td>
              </tr>
              <tr>
                <td>Variabilidade genética</td>
                <td>Células-filhas idênticas à mãe</td>
                <td>Células-filhas geneticamente únicas</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>Crescimento, regeneração, reprodução assexuada</td>
                <td>Formação de gametas (reprodução sexuada)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Pegadinha clássica do ENEM</h3>
          <p>
            A questão afirma que "a mitose só ocorre em organismos
            diploides". Isso é <strong>errado</strong>: organismos haploides
            (como algas verdes e fungos em certas fases do ciclo de vida)
            também fazem mitose para crescer. Da mesma forma, meiose pode
            ocorrer em organismos haploides para formar esporos — como na
            fase gametofítica de briófitas e pteridófitas. O que determina o
            tipo de divisão é a <strong>finalidade biológica</strong>, não o
            nível de ploidia.
          </p>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 7 — ERROS DA MEIOSE E NÃO-DISJUNÇÃO
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Erros Meióticos</span>

        <h2>7. Não-disjunção Meiótica e Aneuploidias</h2>

        <p>
          Quando os homólogos (meiose I) ou as cromátides-irmãs (meiose II)
          não se separam corretamente, ocorre a{" "}
          <strong>não-disjunção</strong>. Os gametas resultantes têm um
          cromossomo a mais (<strong>n + 1</strong>) ou a menos (
          <strong>n - 1</strong>). Após fecundação com gameta normal (n),
          origina-se uma aneuploidia: <strong>trissomia (2n + 1)</strong> ou{" "}
          <strong>monossomia (2n - 1)</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Síndrome de Down</h3>
            <p>
              Trissomia do cromossomo 21 (2n = 47). Causa mais frequente:
              não-disjunção na meiose I materna. Incidência aumenta com a
              idade materna.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Síndrome de Turner</h3>
            <p>
              Monossomia do X (45, X0) em indivíduos com fenótipo feminino.
              Ocorre quando o espermatozoide não carrega cromossomo sexual.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Síndrome de Klinefelter</h3>
            <p>
              Trissomia XXY (47). Resulta de não-disjunção gerando gametas
              XX (óvulo) ou XY (espermatozoide), fecundados por Y ou X.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Por que é grave?</h3>
            <p>
              Aneuploidias alteram a dosagem de centenas de genes,
              desequilibrando as redes regulatórias celulares e causando
              malformações variadas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            💡 A maioria das trissomias de autossomos resulta em inviabilidade
            do embrião. As trissomias dos cromossomos 13 (Patau), 18 (Edwards)
            e 21 (Down) são as únicas que permitem sobrevida pós-natal — e
            somente a do 21 com frequência elevada, pois o cromossomo 21 é o
            menor autossomo humano e possui menos genes.
          </p>
        </div>
      </section>

      {/* ============================================================
          SEÇÃO 8 — SÍNTESE E MAPA CONCEITUAL
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>8. Síntese: Meiose, Gametogênese e Evolução</h2>

        <p>
          A meiose é muito mais do que uma simples divisão reducional — ela
          é o mecanismo central que conecta a <strong>genética molecular</strong>{" "}
          à <strong>evolução das populações</strong>. O crossing-over e a
          segregação independente asseguram que cada indivíduo seja
          biologicamente único, fornecendo a variação sobre a qual a
          seleção natural age. Sem meiose, a reprodução sexuada seria
          impossível e a diversidade genética das populações estaria
          limitada apenas às mutações.
        </p>

        <p>
          Do ponto de vista médico, a correta execução da meiose é
          essencial: erros nos fusos, quiasmas ou na separação das
          cromátides são as causas de abortos espontâneos e de síndromes
          cromossômicas. Estudar a meiose é, portanto, estudar a base da
          saúde reprodutiva humana.
        </p>

        <div className="lesson-highlight">
          <h3>Checklist do ENEM — o que você deve dominar</h3>
          <ul>
            <li>
              Diferença entre <strong>cromossomos homólogos</strong> e{" "}
              <strong>cromátides-irmãs</strong> e o que se separa em cada
              anáfase.
            </li>
            <li>
              As cinco subfases da prófase I e o que ocorre em cada uma
              (especialmente crossing-over no <strong>paquíteno</strong>).
            </li>
            <li>
              Por que a meiose I é reducional e a meiose II é equacional.
            </li>
            <li>
              Diferença quantitativa entre espermatogênese (4 gametas) e
              ovogênese (1 gameta + 3 corpúsculos polares).
            </li>
            <li>
              Cálculo de combinações: 2²³ para humanos; entender por que o
              número é tão alto.
            </li>
            <li>
              O que é não-disjunção e quais síndromes ela causa.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================
          EXERCÍCIOS
      ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Produto da meiose"
          statement={
            <p>
              Uma célula germinativa humana com 2n = 46 cromossomos passa
              pela meiose completa. Qual é o resultado esperado?
            </p>
          }
          options={[
            { letter: "a", text: "2 células com 2n = 46, genéticamente idênticas" },
            { letter: "b", text: "4 células com 2n = 46, geneticamente diferentes" },
            { letter: "c", text: "2 células com n = 23, genéticamente idênticas" },
            { letter: "d", text: "4 células com n = 23, geneticamente diferentes", correct: true },
          ]}
          resolution={
            <p>
              A meiose é composta de duas divisões: a Meiose I (reducional,
              2n → n) e a Meiose II (equacional, n → n). O resultado final
              são <strong>4 células haploides (n = 23)</strong>, cada uma
              com combinação única de alelos devido ao crossing-over e à
              segregação independente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Anáfase I versus Anáfase II"
          statement={
            <p>
              Durante a meiose de uma célula com 2n = 4, quais estruturas
              migram para os polos na anáfase I e na anáfase II,
              respectivamente?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Cromátides-irmãs na anáfase I; cromossomos homólogos na anáfase II",
            },
            {
              letter: "b",
              text: "Cromossomos homólogos (cada um com 2 cromátides) na anáfase I; cromátides-irmãs na anáfase II",
              correct: true,
            },
            {
              letter: "c",
              text: "Cromossomos simples na anáfase I; bivalentes na anáfase II",
            },
            {
              letter: "d",
              text: "Bivalentes na anáfase I; bivalentes na anáfase II",
            },
          ]}
          resolution={
            <p>
              Na <strong>anáfase I</strong>, os cromossomos homólogos se
              separam — cada um ainda possui duas cromátides unidas pelo
              centrômero. Na <strong>anáfase II</strong>, os centrômeros se
              dividem e as <strong>cromátides-irmãs</strong> migram para
              polos opostos, como em uma mitose, resultando em cromossomos
              simples.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Não-disjunção e aneuploidia"
          statement={
            <p>
              Durante a ovogênese humana, os cromossomos 21 não se separam
              corretamente na anáfase I. O óvulo resultante, ao ser
              fecundado por espermatozoide normal, originará um zigoto com
              qual cariótipo e qual síndrome?
            </p>
          }
          options={[
            { letter: "a", text: "45, XX — Síndrome de Turner" },
            { letter: "b", text: "47, XXY — Síndrome de Klinefelter" },
            {
              letter: "c",
              text: "47, +21 — Síndrome de Down (trissomia do 21)",
              correct: true,
            },
            { letter: "d", text: "46, XY — cariótipo normal masculino" },
          ]}
          resolution={
            <p>
              Quando os homólogos do par 21 não se separam na anáfase I, um
              dos óvulos recebe <strong>dois cromossomos 21</strong> (n + 1
              = 24). Ao ser fecundado por espermatozoide normal (n = 23,
              incluindo 1 cromossomo 21), o zigoto terá{" "}
              <strong>47 cromossomos</strong>, com trissomia do 21 —
              característica da <strong>Síndrome de Down</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Gêmeos fraternos e variabilidade (ENEM)"
          statement={
            <p>
              Dois irmãos, filhos dos mesmos pais, apresentam características
              físicas muito diferentes entre si, como cor dos olhos, altura e
              tipo sanguíneo. Um estudante afirma que isso contradiz a genética
              mendeliana, pois os pais são os mesmos. Com base no conhecimento
              sobre meiose, a explicação correta para a diversidade entre irmãos
              é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Os pais sofrem mutações que criam novos genes a cada filho gerado.",
            },
            {
              letter: "b",
              text: "O crossing-over e a segregação independente na meiose geram gametas com combinações únicas de alelos a cada ciclo reprodutivo.",
              correct: true,
            },
            {
              letter: "c",
              text: "A mitose nos gônadas modifica o DNA dos pais ao longo dos anos.",
            },
            {
              letter: "d",
              text: "A fecundação sempre seleciona os gametas com mais alelos dominantes.",
            },
          ]}
          resolution={
            <p>
              Cada evento meiótico produz gametas com combinação única de
              alelos, graças ao <strong>crossing-over</strong> (que
              recombina alelos dentro de cada cromossomo) e à{" "}
              <strong>segregação independente</strong> (que distribui
              aleatoriamente os homólogos maternos e paternos). Como cada
              filho resulta de gametas diferentes, a variabilidade entre
              irmãos é a consequência direta e esperada da meiose — e não
              uma contradição da genética mendeliana.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Espermograma e infertilidade masculina"
          statement={
            <p>
              Em um espermograma, detectou-se que a grande maioria dos
              espermatozoides de um paciente carrega dois cromossomos 13
              (em vez de um). Esse achado indica um erro ocorrido durante:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A fase de diferenciação (espermiogênese), quando o flagelo é formado.",
            },
            {
              letter: "b",
              text: "A fase de multiplicação, durante as mitoses das espermatogônias.",
            },
            {
              letter: "c",
              text: "A meiose, por não-disjunção dos cromossomos homólogos 13 ou das cromátides-irmãs.",
              correct: true,
            },
            {
              letter: "d",
              text: "A fase de crescimento, quando os espermatócitos I aumentam de volume.",
            },
          ]}
          resolution={
            <p>
              A presença de dois cromossomos 13 no mesmo gameta é uma
              aneuploidia (<strong>n + 1</strong>) que só pode resultar de{" "}
              <strong>não-disjunção na meiose</strong>: ou os homólogos 13
              não se separaram na anáfase I, ou as cromátides-irmãs não se
              separaram na anáfase II. As fases de multiplicação
              (mitose), crescimento e diferenciação não envolvem segregação
              meiótica e, portanto, não são responsáveis por esse tipo de
              erro cromossômico.
            </p>
          }
        />
      </section>
    </article>
  );
}
