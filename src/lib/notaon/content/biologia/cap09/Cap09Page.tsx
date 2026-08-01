"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 9</span>

          <h1>Bioenergética II: Fotossíntese (Etapas Clara e Escura) e Quimiossíntese</h1>

          <p>
            A fotossíntese é o processo mais importante de conversão de energia do planeta: ela captura a
            radiação solar e a transforma em energia química armazenada em moléculas orgânicas, liberando o
            O₂ que tornou a vida aeróbica possível. Neste capítulo você vai dominar a estrutura do cloroplasto,
            o funcionamento detalhado da fase fotoquímica (clara) e do Ciclo de Calvin (escura), os fatores que
            regulam a taxa fotossintética, a quimiossíntese como alternativa autotrófica independente da luz
            — e ainda comparar todas essas vias em tabelas e esquemas diagramáticos, nível ENEM e vestibulares de ponta.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Fotossíntese: Definição e Equação Global</h2>

        <p>
          A <strong>fotossíntese</strong> é um processo <strong>anabólico</strong> e{" "}
          <strong>endergônico</strong> pelo qual organismos autotróficos fotossintetizantes —
          plantas, algas e cianobactérias — utilizam a energia da luz para converter{" "}
          <strong>dióxido de carbono (CO₂)</strong> e <strong>água (H₂O)</strong> em{" "}
          <strong>glicose (C₆H₁₂O₆)</strong>, liberando <strong>oxigênio molecular (O₂)</strong>{" "}
          como subproduto. A equação global simplificada é:
        </p>

        <div className="math-block">
          <h3>Equação global da fotossíntese</h3>
          <M block={true}>{"6\\,CO_2 + 6\\,H_2O \\xrightarrow{\\text{luz}} C_6H_{12}O_6 + 6\\,O_2"}</M>
          <p>
            A equação balanceada completa inclui 12 moléculas de água no reagente (6 são regeneradas),
            deixando um saldo líquido de 6 H₂O consumidas. O ponto crucial — cobrado em questões de
            isótopos — é que todo o O₂ liberado tem origem na <strong>fotólise da água</strong>, e não
            na molécula de CO₂. Isso foi comprovado na década de 1940 com experimentos usando
            o isótopo ¹⁸O marcado na molécula de H₂O.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Importância ecológica e biológica</h3>
          <p>
            A fotossíntese é responsável pela <strong>produção primária</strong> de praticamente toda a
            matéria orgânica dos ecossistemas, sustenta a base de quase todas as cadeias alimentares,
            mantém a concentração de O₂ atmosférico (~21%) e regula o CO₂, freando o efeito estufa.
            Sem ela, a vida aeróbica — incluindo a humana — seria impossível.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Plantas vasculares</h3>
            <p>Fotossíntese nas folhas (mesofilo), principalmente nas células do parênquima paliçádico.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Algas e fitoplâncton</h3>
            <p>Responsáveis por cerca de 50% de toda a fotossíntese da Terra, nos oceanos.</p>
          </div>
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Cianobactérias</h3>
            <p>Procariontes fotossintetizantes que produziram o O₂ primordial da atmosfera terrestre.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ultraestrutura</span>

        <h2>2. O Cloroplasto: A Fábrica de Energia</h2>

        <p>
          O <strong>cloroplasto</strong> é a organela onde a fotossíntese acontece nas células eucarióticas.
          Assim como a mitocôndria, possui <strong>dupla membrana</strong> e <strong>DNA próprio circular</strong>,
          evidências de origem endossimbiótica (teoria de Margulis): um ancestral procariótico semelhante a uma
          cianobactéria foi englobado por uma célula eucariótica e passou a viver em simbiose permanente.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 280" width="700" height="280" aria-label="Diagrama do cloroplasto com tilacoides, grana e estroma">
            {/* contorno externo do cloroplasto */}
            <ellipse cx={350} cy={140} rx={320} ry={120} fill="#d1fae5" stroke="#16a34a" strokeWidth={2.5} />
            {/* membrana interna */}
            <ellipse cx={350} cy={140} rx={295} ry={100} fill="#f0fdf4" stroke="#4ade80" strokeWidth={1.5} strokeDasharray="6 4" />
            {/* Granum 1 – 5 tilacoides empilhados */}
            {[0,1,2,3,4].map((i) => (
              <ellipse key={`g1-${i}`} cx={190} cy={110 + i * 22} rx={58} ry={9} fill="#16a34a" opacity={0.65 + i * 0.04} stroke="#15803d" strokeWidth={1} />
            ))}
            <text x={190} y={220} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Granum 1</text>
            {/* Granum 2 */}
            {[0,1,2,3].map((i) => (
              <ellipse key={`g2-${i}`} cx={350} cy={95 + i * 22} rx={58} ry={9} fill="#16a34a" opacity={0.65 + i * 0.04} stroke="#15803d" strokeWidth={1} />
            ))}
            <text x={350} y={220} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Granum 2</text>
            {/* Granum 3 */}
            {[0,1,2,3,4,5].map((i) => (
              <ellipse key={`g3-${i}`} cx={510} cy={95 + i * 22} rx={58} ry={9} fill="#16a34a" opacity={0.65 + i * 0.04} stroke="#15803d" strokeWidth={1} />
            ))}
            <text x={510} y={237} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Granum 3</text>
            {/* lamelas do estroma ligando grana */}
            <path d="M 248 132 Q 299 148 292 120" fill="none" stroke="#86efac" strokeWidth={2} />
            <path d="M 408 118 Q 460 145 452 112" fill="none" stroke="#86efac" strokeWidth={2} />
            {/* label estroma */}
            <text x={350} y={178} textAnchor="middle" fontSize={13} fontStyle="italic" fill="#166534">Estroma</text>
            <text x={350} y={192} textAnchor="middle" fontSize={11} fill="#166534">(fase escura / Ciclo de Calvin)</text>
            {/* label membrana */}
            <text x={68} y={68} fontSize={11} fill="#15803d">Membrana</text>
            <text x={68} y={80} fontSize={11} fill="#15803d">dupla</text>
            <line x1={95} y1={85} x2={60} y2={95} stroke="#15803d" strokeWidth={1} />
            <line x1={60} y1={95} x2={40} y2={78} stroke="#15803d" strokeWidth={1} />
            {/* seta tilacoide */}
            <text x={75} y={130} fontSize={11} fill="#14532d">Tilacoide</text>
            <line x1={120} y1={127} x2={132} y2={121} stroke="#14532d" strokeWidth={1} />
          </svg>
          <figcaption>Estrutura do cloroplasto: grana (pilhas de tilacoides) onde ocorre a fase clara, e estroma onde ocorre o Ciclo de Calvin.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Tilacoide</h3>
            <p>Saco membranoso achatado. Contém os fotossistemas, a cadeia de transporte de elétrons e a ATP-sintase. Local da fase clara.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Granum</h3>
            <p>Pilha de tilacoides sobrepostos. Cada cloroplasto tem dezenas de grana interligados por lamelas do estroma.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Estroma</h3>
            <p>Matriz fluida entre os grana. Contém as enzimas do Ciclo de Calvin (RuBisCO), DNA e ribossomos.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Clorofila a e b</h3>
            <p>Pigmentos verdes nos tilacoides. A clorofila a (P680/P700) é o centro de reação; a b é acessória.</p>
          </div>
          <div className="lesson-card">
            <span>🟠</span>
            <h3>Carotenoides</h3>
            <p>Pigmentos alaranjados/amarelos que absorvem comprimentos de onda diferentes e transferem energia às clorofilas.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>DNA cloroplastidial</h3>
            <p>DNA circular, herdado exclusivamente pela linhagem materna em angiospermas — prova da origem endossimbiótica.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Espectro de absorção × espectro de ação</h3>
          <p>
            O <strong>espectro de absorção</strong> mostra quais comprimentos de onda cada pigmento capta.
            O <strong>espectro de ação</strong> mostra a que comprimentos de onda a fotossíntese é mais eficiente.
            Os dois se sobrepõem, confirmando que a luz absorvida é efetivamente usada no processo. A luz
            vermelha (~680 nm) e a azul-violeta (~450 nm) são as mais eficientes; a verde é refletida — daí a cor das folhas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fase Fotoquímica</span>

        <h2>3. Etapa Clara: Fotofosforilação e Fotólise da Água</h2>

        <p>
          A <strong>fase clara</strong> (ou fotoquímica) ocorre nas membranas dos <strong>tilacoides</strong>{" "}
          e requer luz diretamente. Seus três resultados essenciais são: (1) fotólise da água com liberação
          de O₂; (2) síntese de <strong>ATP</strong> por fotofosforilação; e (3) redução do NADP⁺ a{" "}
          <strong>NADPH</strong>. O ATP e o NADPH produzidos aqui alimentarão o Ciclo de Calvin na fase escura.
        </p>

        <div className="math-block">
          <h3>Fotólise da água (reação de Hill)</h3>
          <M block={true}>{"2\\,H_2O \\xrightarrow{\\text{luz}} 4\\,H^+ + 4\\,e^- + O_2"}</M>
          <p>
            A quebra da água é catalisada pelo <strong>complexo de evolução de oxigênio (OEC)</strong>,
            associado ao Fotossistema II. Os elétrons liberados recompõem o centro de reação P680
            que foi oxidado pela luz; os prótons (H⁺) formam o gradiente eletroquímico usado para
            sintetizar ATP; e o O₂ é liberado como gás.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 740 260" width="740" height="260" aria-label="Esquema da cadeia de transporte de elétrons nos tilacoides — etapa clara">
            {/* fundo tilacoide */}
            <rect x={20} y={20} width={700} height={220} rx={18} fill="#f0fdf4" stroke="#4ade80" strokeWidth={1.5} />
            {/* lúmen do tilacoide */}
            <rect x={20} y={155} width={700} height={85} rx={0} fill="#dcfce7" opacity={0.6} />
            <line x1={20} y1={155} x2={720} y2={155} stroke="#16a34a" strokeWidth={1.5} strokeDasharray="7 4" />
            <text x={50} y={195} fontSize={11} fill="#15803d" fontStyle="italic">Lúmen do tilacoide (H⁺ acumulado)</text>
            <text x={50} y={90} fontSize={11} fill="#166534" fontStyle="italic">Estroma (NADP⁺ → NADPH; ADP → ATP)</text>
            {/* PSII */}
            <rect x={60} y={60} width={100} height={110} rx={10} fill="#16a34a" opacity={0.8} />
            <text x={110} y={100} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">PSII</text>
            <text x={110} y={116} textAnchor="middle" fontSize={11} fill="#bbf7d0">P680</text>
            {/* fotólise */}
            <text x={110} y={148} textAnchor="middle" fontSize={10} fill="white">Fotólise H₂O</text>
            <text x={110} y={160} textAnchor="middle" fontSize={10} fill="#86efac">→ O₂ + H⁺ + e⁻</text>
            {/* seta e- PSII → cadeia */}
            <path d="M 160 90 L 220 90" fill="none" stroke="#fbbf24" strokeWidth={2.5} markerEnd="url(#arr1)" />
            {/* cadeia transporte */}
            <rect x={220} y={70} width={80} height={60} rx={8} fill="#f59e0b" opacity={0.85} />
            <text x={260} y={105} textAnchor="middle" fontSize={12} fontWeight={700} fill="white">Cadeia e⁻</text>
            {/* bombeamento H+ */}
            <path d="M 260 130 L 260 155" fill="none" stroke="#0ea5e9" strokeWidth={2} />
            <text x={270} y={148} fontSize={10} fill="#0ea5e9">H⁺ ↓</text>
            {/* ATP sintase */}
            <rect x={340} y={55} width={85} height={150} rx={10} fill="#0ea5e9" opacity={0.8} />
            <text x={382} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="white">ATP-</text>
            <text x={382} y={134} textAnchor="middle" fontSize={12} fontWeight={700} fill="white">sintase</text>
            <text x={382} y={152} textAnchor="middle" fontSize={10} fill="#bae6fd">ADP+P → ATP</text>
            <path d="M 310 170 L 342 140" fill="none" stroke="#0ea5e9" strokeWidth={1.5} />
            {/* seta e- cadeia → PSI */}
            <path d="M 300 90 L 450 90" fill="none" stroke="#fbbf24" strokeWidth={2.5} />
            {/* PSI */}
            <rect x={450} y={60} width={100} height={110} rx={10} fill="#7c3aed" opacity={0.8} />
            <text x={500} y={100} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">PSI</text>
            <text x={500} y={116} textAnchor="middle" fontSize={11} fill="#e9d5ff">P700</text>
            <text x={500} y={148} textAnchor="middle" fontSize={10} fill="white">NADP⁺ + H⁺</text>
            <text x={500} y={160} textAnchor="middle" fontSize={10} fill="#c4b5fd">→ NADPH</text>
            {/* seta final */}
            <path d="M 550 90 L 650 90" fill="none" stroke="#fbbf24" strokeWidth={2.5} />
            <rect x={650} y={70} width={55} height={40} rx={8} fill="#6d28d9" opacity={0.7} />
            <text x={677} y={94} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">NADPH</text>
            {/* luz arrows */}
            <text x={90} y={45} textAnchor="middle" fontSize={10} fill="#ca8a04">☀ luz</text>
            <line x1={90} y1={50} x2={90} y2={62} stroke="#ca8a04" strokeWidth={1.5} />
            <text x={480} y={45} textAnchor="middle" fontSize={10} fill="#ca8a04">☀ luz</text>
            <line x1={480} y1={50} x2={480} y2={62} stroke="#ca8a04" strokeWidth={1.5} />
            {/* defs */}
            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 Z" fill="#fbbf24" />
              </marker>
            </defs>
          </svg>
          <figcaption>Cadeia de transporte de elétrons na membrana tilacoidal: PSII → cadeia → PSI → NADPH, com geração de ATP pela ATP-sintase.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Fotofosforilação acíclica vs. cíclica</h3>
          <p>
            Na <strong>fotofosforilação acíclica</strong> (via mais comum), os elétrons seguem do PSII ao PSI e
            terminam reduzindo NADP⁺. São produzidos ATP, NADPH e O₂. Na{" "}
            <strong>fotofosforilação cíclica</strong>, os elétrons do PSI retornam ao próprio PSI pela cadeia,
            gerando apenas ATP — sem produção de NADPH nem O₂. Usada quando a célula precisa de mais ATP do que NADPH.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Local na membrana</th>
                <th>Função na etapa clara</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fotossistema II (P680)</td>
                <td>Membrana tilacoidal</td>
                <td>Absorve luz (680 nm), aciona fotólise da água, inicia fluxo de elétrons</td>
              </tr>
              <tr>
                <td>Cadeia de transporte</td>
                <td>Membrana tilacoidal</td>
                <td>Transporta e⁻ e bombeia H⁺ para o lúmen do tilacoide</td>
              </tr>
              <tr>
                <td>ATP-sintase (CF₀CF₁)</td>
                <td>Membrana tilacoidal</td>
                <td>Usa gradiente de H⁺ para sintetizar ATP (quimiosmose)</td>
              </tr>
              <tr>
                <td>Fotossistema I (P700)</td>
                <td>Membrana tilacoidal</td>
                <td>Absorve luz (700 nm), reexcita e⁻, reduz NADP⁺ a NADPH</td>
              </tr>
              <tr>
                <td>Ferredoxina / NADP⁺-redutase</td>
                <td>Lado do estroma</td>
                <td>Transfere e⁻ do PSI ao NADP⁺, finalizando a formação de NADPH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclo de Calvin</span>

        <h2>4. Etapa Escura: O Ciclo de Calvin-Benson</h2>

        <p>
          A <strong>fase escura</strong> (ou química) ocorre no <strong>estroma</strong> do cloroplasto.
          Apesar do nome, ela <em>não</em> requer ausência de luz — simplesmente não utiliza a luz de forma
          direta. Ela consome o ATP e o NADPH produzidos na fase clara para <strong>fixar CO₂ em moléculas
          orgânicas</strong>, num ciclo de três etapas descrito por Melvin Calvin e Andrew Benson (Nobel, 1961).
        </p>

        <div className="lesson-highlight">
          <h3>As três etapas do Ciclo de Calvin</h3>
          <p>
            <strong>1. Fixação do carbono:</strong> a enzima <strong>RuBisCO</strong> (ribulose-1,5-bifosfato
            carboxilase/oxigenase) catalisa a união de uma molécula de CO₂ (1C) à RuBP — ribulose-1,5-bifosfato
            (5C) —, formando um intermediário instável de 6C que se divide em <strong>duas moléculas de
            3-fosfoglicerato (PGA, 3C)</strong>. Por isso as plantas C3 são chamadas assim: o primeiro produto
            estável tem 3 carbonos.
          </p>
          <p>
            <strong>2. Redução:</strong> cada PGA é fosforilado pelo ATP e depois reduzido pelo NADPH,
            formando <strong>gliceraldeído-3-fosfato (G3P)</strong>, também com 3 carbonos. O G3P é o
            primeiro açúcar real do ciclo e o ponto de partida para a síntese de glicose e outros
            compostos orgânicos.
          </p>
          <p>
            <strong>3. Regeneração da RuBP:</strong> a maior parte das moléculas de G3P é usada para
            regenerar a RuBP através de uma série de reações que consomem mais ATP. Apenas 1 a cada 6
            G3P sai do ciclo para ser usada na síntese de glicose e outros produtos.
          </p>
        </div>

        <div className="math-block">
          <h3>Balanço para síntese de 1 glicose (6 voltas do ciclo)</h3>
          <p>
            6 CO₂ fixados + 18 ATP + 12 NADPH → C₆H₁₂O₆ + 18 ADP + 18 Pᵢ + 12 NADP⁺
          </p>
          <p>
            Cada volta do ciclo fixa <strong>1 molécula de CO₂</strong>. Para formar os 6 carbonos
            de uma glicose são necessárias <strong>6 voltas</strong>, consumindo{" "}
            <strong>18 ATP e 12 NADPH</strong>.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 580 360" width="580" height="360" aria-label="Diagrama circular do Ciclo de Calvin com as três etapas">
            {/* círculo de fundo */}
            <circle cx={290} cy={180} r={140} fill="#f0fdf4" stroke="#4ade80" strokeWidth={2} strokeDasharray="9 5" />
            {/* RuBP */}
            <rect x={215} y={20} width={150} height={45} rx={10} fill="#16a34a" opacity={0.9} />
            <text x={290} y={47} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">RuBP (5C)</text>
            {/* CO2 entrada */}
            <text x={162} y={55} textAnchor="end" fontSize={12} fill="#0369a1">CO₂ →</text>
            <line x1={162} y1={50} x2={215} y2={42} stroke="#0369a1" strokeWidth={1.5} />
            {/* RuBisCO */}
            <text x={290} y={85} textAnchor="middle" fontSize={11} fill="#6b7280" fontStyle="italic">RuBisCO</text>
            <line x1={290} y1={65} x2={290} y2={90} stroke="#6b7280" strokeWidth={1.5} />
            {/* PGA */}
            <rect x={360} y={100} width={150} height={45} rx={10} fill="#0ea5e9" opacity={0.85} />
            <text x={435} y={127} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">PGA (3C) ×2</text>
            {/* ATP, NADPH entrada */}
            <text x={548} y={178} fontSize={11} fill="#7c3aed">ATP</text>
            <text x={548} y={192} fontSize={11} fill="#7c3aed">NADPH</text>
            <line x1={540} y1={175} x2={510} y2={155} stroke="#7c3aed" strokeWidth={1.5} />
            {/* G3P */}
            <rect x={360} y={225} width={150} height={45} rx={10} fill="#f59e0b" opacity={0.9} />
            <text x={435} y={252} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">G3P (3C) ×2</text>
            {/* saída para glicose */}
            <text x={548} y={260} fontSize={11} fill="#6b7280">→ glicose</text>
            <line x1={510} y1={253} x2={542} y2={258} stroke="#6b7280" strokeWidth={1.5} />
            {/* ATP regeneração */}
            <text x={100} y={300} fontSize={11} fill="#7c3aed">ATP ←</text>
            <line x1={127} y1={296} x2={182} y2={272} stroke="#7c3aed" strokeWidth={1.5} />
            {/* RuBP regenerada */}
            <rect x={120} y={225} width={150} height={45} rx={10} fill="#16a34a" opacity={0.7} />
            <text x={195} y={252} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">RuBP (5C)</text>
            {/* setas do ciclo */}
            {/* RuBP → PGA */}
            <path d="M 365 43 Q 450 70 440 100" fill="none" stroke="#374151" strokeWidth={2} markerEnd="url(#arrCalvin)" />
            {/* PGA → G3P */}
            <path d="M 440 145 Q 450 185 440 225" fill="none" stroke="#374151" strokeWidth={2} markerEnd="url(#arrCalvin)" />
            {/* G3P → RuBP */}
            <path d="M 360 250 Q 250 285 270 250" fill="none" stroke="#374151" strokeWidth={2} markerEnd="url(#arrCalvin)" />
            {/* RuBP (regenerada) → RuBP topo */}
            <path d="M 215 248 Q 148 200 180 78 Q 200 45 215 42" fill="none" stroke="#374151" strokeWidth={2} markerEnd="url(#arrCalvin)" />
            <defs>
              <marker id="arrCalvin" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 Z" fill="#374151" />
              </marker>
            </defs>
          </svg>
          <figcaption>Ciclo de Calvin: fixação do CO₂ (RuBisCO), redução (PGA → G3P) e regeneração da RuBP. A glicose sai a cada 6 voltas.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Plantas C3, C4 e CAM — adaptações da fixação de carbono</h3>
          <p>
            <strong>Plantas C3</strong> (trigo, soja, arroz): fixam CO₂ diretamente pela RuBisCO no mesofilo.
            Em dias quentes, perdem eficiência pela <strong>fotorrespiração</strong> (RuBisCO fixa O₂ em vez
            de CO₂). <strong>Plantas C4</strong> (milho, cana-de-açúcar, sorgo): pré-fixam CO₂ como ácido de
            4 carbonos (OAA) nas células do mesofilo e o liberam nas células da bainha do feixe vascular, onde
            a RuBisCO opera em alta concentração de CO₂ — eliminando a fotorrespiração.{" "}
            <strong>Plantas CAM</strong> (cactáceas, bromélias, abacaxi): fixam CO₂ à noite (estômatos abertos)
            e o usam durante o dia com estômatos fechados, minimizando a perda de água em ambientes áridos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação das Etapas</span>

        <h2>5. Fase Clara × Fase Escura: Tabela Comparativa</h2>

        <p>
          Comparar as duas etapas lado a lado é uma das formas mais eficazes de consolidar o conteúdo e se
          preparar para questões que cobram a localização, as substâncias envolvidas, os produtos e a
          dependência ou não de luz de cada fase. Dominar essa tabela resolve a maioria das questões diretas
          sobre fotossíntese no ENEM e vestibulares.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Fase Clara (Fotoquímica)</th>
                <th>Fase Escura (Química / Calvin)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dependência de luz</td>
                <td>Sim — luz diretamente necessária</td>
                <td>Não diretamente (mas depende dos produtos da fase clara)</td>
              </tr>
              <tr>
                <td>Local</td>
                <td>Membrana tilacoidal (grana)</td>
                <td>Estroma do cloroplasto</td>
              </tr>
              <tr>
                <td>Principais reagentes</td>
                <td>Luz, H₂O, ADP, NADP⁺</td>
                <td>CO₂, ATP, NADPH, RuBP</td>
              </tr>
              <tr>
                <td>Principais produtos</td>
                <td>ATP, NADPH, O₂ (subproduto)</td>
                <td>G3P → glicose; ADP, NADP⁺ (reciclados)</td>
              </tr>
              <tr>
                <td>Enzima-chave</td>
                <td>ATP-sintase (fotofosforilação)</td>
                <td>RuBisCO (fixação do CO₂)</td>
              </tr>
              <tr>
                <td>Fotossistemas</td>
                <td>PSII (P680) e PSI (P700)</td>
                <td>Não envolvidos</td>
              </tr>
              <tr>
                <td>O₂ liberado?</td>
                <td>Sim (fotólise da H₂O)</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>CO₂ consumido?</td>
                <td>Não</td>
                <td>Sim (fixado pela RuBisCO)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores Limitantes</span>

        <h2>6. Fatores que Controlam a Taxa de Fotossíntese</h2>

        <p>
          A velocidade da fotossíntese depende de fatores ambientais. Segundo a{" "}
          <strong>Lei do Fator Limitante de Blackman</strong>, quando vários fatores são necessários ao
          processo, a taxa é limitada pelo fator que está em menor oferta relativa. Ao elevar apenas esse
          fator, a taxa sobe; ao saturá-lo, outro fator passa a ser limitante.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Intensidade luminosa</h3>
            <p>Aumenta a taxa até o <strong>ponto de saturação luminosa</strong>, após o qual não há mais ganho — a cadeia de elétrons está a plena capacidade.</p>
          </div>
          <div className="lesson-card">
            <span>💨</span>
            <h3>Concentração de CO₂</h3>
            <p>Substrato da RuBisCO. Aumentar CO₂ eleva a taxa até saturação enzimática — relevante para o efeito estufa e fotorrespiração.</p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Temperatura</h3>
            <p>Afeta as enzimas (RuBisCO, ATP-sintase). Ótimo ~25–35 °C para plantas C3; acima disso, desnaturação reduz a taxa.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Disponibilidade de água</h3>
            <p>Substrato da fotólise e regulador estomático: estômatos fechados (seca) bloqueiam entrada de CO₂.</p>
          </div>
          <div className="lesson-card">
            <span>🌈</span>
            <h3>Qualidade da luz</h3>
            <p>Comprimentos de onda vermelho e azul são mais eficientes que o verde, que é refletido pelos pigmentos.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Quantidade de clorofila</h3>
            <p>Plantas com deficiência de magnésio (Mg é o átomo central da clorofila) produzem menos pigmento — clorose foliar.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 520 280" width="520" height="280" aria-label="Gráfico de taxa de fotossíntese líquida versus intensidade luminosa, com ponto de compensação fótico e ponto de saturação">
            {/* eixos */}
            <line x1={60} y1={20} x2={60} y2={230} stroke="#374151" strokeWidth={2} />
            <line x1={60} y1={230} x2={490} y2={230} stroke="#374151" strokeWidth={2} />
            {/* labels eixos */}
            <text x={270} y={270} textAnchor="middle" fontSize={13} fill="#374151">Intensidade luminosa →</text>
            <text x={16} y={130} textAnchor="middle" fontSize={12} fill="#374151" transform="rotate(-90,16,130)">Taxa de fotossíntese líquida</text>
            {/* linha de zero */}
            <line x1={60} y1={150} x2={490} y2={150} stroke="#9ca3af" strokeWidth={1} strokeDasharray="5 4" />
            <text x={55} y={153} textAnchor="end" fontSize={11} fill="#6b7280">0</text>
            {/* curva planta de sol */}
            <path d="M 60 195 Q 130 165 165 150 Q 240 120 300 90 Q 380 65 470 60" fill="none" stroke="#16a34a" strokeWidth={3} />
            <text x={475} y={58} fontSize={11} fill="#16a34a" fontWeight={700}>planta de sol</text>
            {/* curva planta de sombra */}
            <path d="M 60 195 Q 100 172 120 150 Q 160 120 200 105 Q 260 90 350 88" fill="none" stroke="#4ade80" strokeWidth={2.5} strokeDasharray="8 4" />
            <text x={355} y={86} fontSize={11} fill="#4ade80" fontWeight={700}>planta de sombra</text>
            {/* ponto de compensação – sol */}
            <circle cx={165} cy={150} r={5} fill="#dc2626" />
            <line x1={165} y1={150} x2={165} y2={230} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="4 3" />
            <text x={168} y={246} fontSize={10} fill="#dc2626">Comp. sol</text>
            {/* ponto de compensação – sombra */}
            <circle cx={120} cy={150} r={5} fill="#f97316" />
            <line x1={120} y1={150} x2={120} y2={230} stroke="#f97316" strokeWidth={1.2} strokeDasharray="4 3" />
            <text x={105} y={246} fontSize={10} fill="#f97316">Comp. sombra</text>
            {/* saturação */}
            <line x1={380} y1={40} x2={380} y2={230} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={382} y={35} fontSize={10} fill="#6b7280">Saturação</text>
            {/* seta respiração */}
            <text x={62} y={192} fontSize={10} fill="#7c3aed">Respiração (−)</text>
            <text x={62} y={142} fontSize={10} fill="#0369a1">Fotoss. = Resp.</text>
          </svg>
          <figcaption>Curva de fotossíntese líquida: planta de sombra satura em menor intensidade; planta de sol tem ponto de compensação fótico mais alto.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Ponto de compensação fótico e ponto de saturação luminosa</h3>
          <p>
            O <strong>ponto de compensação fótico</strong> é a intensidade de luz na qual a taxa de
            fotossíntese bruta se iguala à taxa de respiração celular — o saldo líquido de trocas gasosas é zero.
            Abaixo desse ponto, a planta consome mais orgânico do que produz e perde massa seca. Acima dele,
            há acúmulo líquido de matéria orgânica. <strong>Plantas de sombra</strong> têm ponto de compensação
            baixo (eficientes com pouca luz) e saturam cedo. <strong>Plantas de sol</strong> têm ponto de
            compensação mais alto e aproveitam maior faixa de intensidade.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Quimiossíntese</span>

        <h2>7. Quimiossíntese: Autotrofismo Independente da Luz</h2>

        <p>
          A <strong>quimiossíntese</strong> é o processo pelo qual certos organismos procariontes autotróficos
          (quimioautotróficos) obtêm energia a partir da <strong>oxidação de compostos inorgânicos</strong> e
          usam essa energia para fixar CO₂ em matéria orgânica — sem necessidade de luz solar. Descoberta no
          final do século XIX por Sergei Winogradsky, a quimiossíntese sustenta ecossistemas em ambientes
          completamente desprovidos de luz, como as <strong>fontes hidrotermais abissais</strong>.
        </p>

        <div className="math-block">
          <h3>Esquema geral da quimiossíntese</h3>
          <p>
            Composto inorgânico oxidado + O₂ → produto oxidado + energia química
          </p>
          <p>
            CO₂ + H₂O + energia química → matéria orgânica (C₆H₁₂O₆)
          </p>
          <p>
            A primeira reação (oxidação do composto inorgânico) gera o equivalente ao NADH e ATP que a
            fase clara gera na fotossíntese. A segunda reação é análoga ao Ciclo de Calvin.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Bactérias nitrificantes</h3>
            <p><em>Nitrosomonas</em>: NH₃ → NO₂⁻. <em>Nitrobacter</em>: NO₂⁻ → NO₃⁻. Essenciais no ciclo do nitrogênio e na fertilidade do solo.</p>
          </div>
          <div className="lesson-card">
            <span>🌋</span>
            <h3>Sulfobactérias</h3>
            <p>Oxidam H₂S → S⁰ ou SO₄²⁻. Base dos ecossistemas de chaminés hidrotermais no fundo oceânico (ex.: riftes do Pacífico).</p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Ferrobactérias</h3>
            <p>Oxidam Fe²⁺ → Fe³⁺. Atuam na formação de depósitos de minério e em ambientes de baixo pH.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Fontes hidrotermais: ecosistemas sem luz solar</h3>
          <p>
            As chaminés hidrotermais ("black smokers") liberam água a mais de 300 °C rica em H₂S e outros
            compostos inorgânicos. Sulfobactérias quimiossintetizantes são a base de uma cadeia alimentar
            exclusiva, que inclui vermes tubulares (<em>Riftia pachyptila</em>), mariscos e crustáceos —
            completamente independente da fotossíntese e da luz solar. Esse fato é muito recorrente em
            vestibulares como prova de que a fotossíntese <em>não</em> é a única forma de produção primária.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Fotossíntese</th>
                <th>Quimiossíntese</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fonte de energia</td>
                <td>Luz solar (fótons)</td>
                <td>Oxidação de compostos inorgânicos</td>
              </tr>
              <tr>
                <td>Dependência de luz</td>
                <td>Sim (obrigatória)</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Organismos</td>
                <td>Plantas, algas, cianobactérias</td>
                <td>Bactérias quimioautotróficas</td>
              </tr>
              <tr>
                <td>Domínio</td>
                <td>Bacteria (ciano), Eukarya</td>
                <td>Bacteria (e algumas Archaea)</td>
              </tr>
              <tr>
                <td>Fixação de CO₂</td>
                <td>Sim (Ciclo de Calvin)</td>
                <td>Sim (via análoga ao Calvin)</td>
              </tr>
              <tr>
                <td>O₂ liberado?</td>
                <td>Sim (em organismos com fotólise da água)</td>
                <td>Não (geralmente consome O₂)</td>
              </tr>
              <tr>
                <td>Exemplos de ambientes</td>
                <td>Superfície terrestre e aquática iluminada</td>
                <td>Fundo oceânico, solo, ambientes anóxicos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conexões e Revisão Final</span>

        <h2>8. Fotossíntese × Respiração Celular e Síntese Integradora</h2>

        <p>
          A fotossíntese e a <strong>respiração celular aeróbica</strong> são processos opostos e
          complementares: a fotossíntese armazena energia química em glicose consumindo CO₂ e H₂O;
          a respiração libera essa energia em forma de ATP, regenerando CO₂ e H₂O. Juntos, mantêm
          o equilíbrio dos gases atmosféricos e o fluxo de energia nos ecossistemas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Fotossíntese</th>
                <th>Respiração Aeróbica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de reação</td>
                <td>Anabólica (endergônica)</td>
                <td>Catabólica (exergônica)</td>
              </tr>
              <tr>
                <td>Organismos</td>
                <td>Autótrofos (produtores)</td>
                <td>Todos os seres vivos aeróbicos</td>
              </tr>
              <tr>
                <td>Local na célula</td>
                <td>Cloroplasto</td>
                <td>Citosol (glicólise) + mitocôndria</td>
              </tr>
              <tr>
                <td>Reagentes</td>
                <td>CO₂ + H₂O + luz</td>
                <td>C₆H₁₂O₆ + O₂</td>
              </tr>
              <tr>
                <td>Produtos</td>
                <td>C₆H₁₂O₆ + O₂</td>
                <td>CO₂ + H₂O + ATP (~30-32 ATP/glicose)</td>
              </tr>
              <tr>
                <td>O₂</td>
                <td>Produzido</td>
                <td>Consumido</td>
              </tr>
              <tr>
                <td>CO₂</td>
                <td>Consumido</td>
                <td>Produzido</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Planta respira? — Armadilha clássica do ENEM</h3>
          <p>
            <strong>Sim!</strong> Plantas realizam respiração celular 24 horas por dia, consumindo O₂ e
            liberando CO₂. Durante o dia, quando a fotossíntese supera a respiração, há saldo{" "}
            <strong>positivo</strong> de O₂ e negativo de CO₂. À noite, sem luz, apenas a respiração
            ocorre, e a planta consome O₂ e libera CO₂. O crescimento líquido depende de a planta
            receber luz suficiente para ultrapassar o ponto de compensação fótico.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌞</span>
            <h3>Dia (luz intensa)</h3>
            <p>Fotossíntese {">"} respiração → absorção líquida de CO₂, liberação líquida de O₂.</p>
          </div>
          <div className="lesson-card">
            <span>🌙</span>
            <h3>Noite (sem luz)</h3>
            <p>Apenas respiração → absorção de O₂, liberação de CO₂. Sem variação nos estoques de glicose se o dia foi produtivo.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Ponto de compensação</h3>
            <p>Fotossíntese = respiração → trocas gasosas líquidas nulas. Abaixo disso, a planta "perde" matéria orgânica.</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Níveis Progressivos</h2>

        <Exercise
          level="Básico"
          title="1. Origem do oxigênio liberado na fotossíntese"
          statement={
            <p>
              Em experimentos com isótopos de oxigênio (¹⁸O), verificou-se que todo o O₂ liberado
              durante a fotossíntese é proveniente de:
            </p>
          }
          options={[
            { letter: "a", text: "Do CO₂ absorvido pelas folhas pelos estômatos" },
            { letter: "b", text: "Da glicose sintetizada no Ciclo de Calvin" },
            { letter: "c", text: "Da fotólise da água realizada no Fotossistema II", correct: true },
            { letter: "d", text: "Do NADPH formado durante a fotofosforilação acíclica" },
          ]}
          resolution={
            <p>
              Experimentos com ¹⁸O marcado na molécula de H₂O comprovaram que o oxigênio molecular
              liberado pela fotossíntese provém exclusivamente da <strong>quebra da água (fotólise)</strong>,
              catalisada pelo complexo de evolução de oxigênio associado ao Fotossistema II. Se o ¹⁸O
              estava no CO₂, ele aparecia na glicose — não no O₂ gasoso.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Produtos da fase clara e sua utilização"
          statement={
            <p>
              A fase clara da fotossíntese ocorre nos tilacoides e produz ATP, NADPH e O₂. Qual é o
              destino correto do ATP e do NADPH produzidos nessa etapa?
            </p>
          }
          options={[
            { letter: "a", text: "São exportados para as mitocôndrias para complementar a respiração celular" },
            { letter: "b", text: "São consumidos no Ciclo de Calvin (fase escura) para reduzir CO₂ a G3P e regenerar a RuBP", correct: true },
            { letter: "c", text: "São usados diretamente na fotólise da água para gerar mais elétrons" },
            { letter: "d", text: "São armazenados nas membranas tilacoidais como reserva energética" },
          ]}
          resolution={
            <p>
              O ATP e o NADPH produzidos na fase clara são os <strong>agentes energéticos e redutores</strong>{" "}
              que alimentam o Ciclo de Calvin no estroma: o ATP fosforila o PGA e energiza a regeneração da
              RuBP; o NADPH reduz o PGA a G3P. Ao final do ciclo, ADP e NADP⁺ retornam aos tilacoides para
              serem regenerados — um fluxo contínuo entre as duas fases.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fotofosforilação cíclica e acíclica"
          statement={
            <p>
              Na fotofosforilação acíclica, os elétrons excitados pelo Fotossistema II seguem um caminho
              linear até o NADP⁺. Na fotofosforilação cíclica, os elétrons do Fotossistema I retornam ao
              próprio PSI. Qual afirmativa sobre as diferenças entre essas vias é correta?
            </p>
          }
          options={[
            { letter: "a", text: "A via cíclica produz mais NADPH do que a acíclica, mas menos ATP" },
            { letter: "b", text: "A via acíclica não produz O₂ porque não há fotólise da água" },
            {
              letter: "c",
              text: "A via cíclica produz apenas ATP (sem NADPH e sem O₂), sendo usada quando a demanda de ATP supera a de NADPH",
              correct: true,
            },
            { letter: "d", text: "Na via acíclica, o Fotossistema I é o único envolvido e não há PSII" },
          ]}
          resolution={
            <p>
              Na <strong>fotofosforilação cíclica</strong>, os elétrons do PSI retornam pela cadeia de
              transporte ao próprio PSI — apenas o gradiente de H⁺ é gerado e, portanto, apenas ATP é
              produzido. Não há redução de NADP⁺ nem fotólise de água. Isso é vantajoso quando a célula
              precisa de mais ATP do que NADPH — por exemplo, para reações de síntese fora do cloroplasto.
              A <strong>via acíclica</strong> é a predominante e produz ATP, NADPH e O₂.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Plantas C4 e adaptação à fotorrespiração (ENEM)"
          statement={
            <p>
              O milho e a cana-de-açúcar são plantas C4: pré-fixam CO₂ como oxaloacetato (OAA, 4 carbonos)
              nas células do mesofilo e liberam CO₂ concentrado nas células da bainha do feixe vascular, onde
              a RuBisCO opera. Essa estratégia é uma adaptação evolutiva para:
            </p>
          }
          options={[
            { letter: "a", text: "Realizar fotossíntese no escuro, eliminando a dependência de luz" },
            {
              letter: "b",
              text: "Reduzir a fotorrespiração ao manter alta concentração de CO₂ junto à RuBisCO, aumentando a eficiência em dias quentes e ensolarados",
              correct: true,
            },
            { letter: "c", text: "Absorver luz verde com maior eficiência do que as plantas C3" },
            { letter: "d", text: "Eliminar o Ciclo de Calvin, fixando carbono diretamente em lipídios" },
          ]}
          resolution={
            <p>
              Em dias quentes, a RuBisCO das plantas C3 pode fixar O₂ em vez de CO₂ (fotorrespiração),
              desperdiçando energia. As plantas C4 resolvem esse problema concentrando CO₂ nas células
              da bainha do feixe vascular, onde a RuBisCO opera — eliminando praticamente a fotorrespiração.
              Por isso o milho e a cana têm maior produtividade em climas tropicais quentes do que plantas
              C3 como o arroz e o trigo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ecossistemas de fontes hidrotermais abissais"
          statement={
            <p>
              Em 1977, cientistas descobriram, a mais de 2 000 m de profundidade no Pacífico, comunidades
              biológicas ricas em organismos (vermes tubulares, mariscos, camarões) em total ausência de luz
              solar. A base dessas cadeias alimentares é sustentada por bactérias que oxidam H₂S liberado
              pelas chaminés vulcânicas. Com base nessa informação, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Esses ecossistemas dependem indiretamente da fotossíntese, pois o H₂S é derivado de matéria orgânica produzida na superfície",
            },
            { letter: "b", text: "As bactérias realizam fotossíntese usando luz infravermelha emitida pelas chaminés" },
            {
              letter: "c",
              text: "A quimiossíntese é o processo de produção primária desses ecossistemas: bactérias obtêm energia química da oxidação de H₂S e fixam CO₂ em matéria orgânica",
              correct: true,
            },
            { letter: "d", text: "Os organismos heterotróficos do fundo dependem da matéria orgânica depositada pela neve marinha vinda da superfície" },
          ]}
          resolution={
            <p>
              As <strong>sulfobactérias quimiossintetizantes</strong> oxidam H₂S → SO₄²⁻, obtendo energia
              química que usam para fixar CO₂ via um ciclo análogo ao de Calvin — sem qualquer dependência de
              luz solar. Essa <strong>quimiossíntese</strong> é a produção primária do ecossistema, demonstrando
              que a fotossíntese não é a única porta de entrada de energia nos ecossistemas da Terra.
              Esse exemplo é clássico em vestibulares para distinguir quimiossíntese de fotossíntese
              e para contextualizar autotrofismo.
            </p>
          }
        />
      </section>
    </article>
  );
}
