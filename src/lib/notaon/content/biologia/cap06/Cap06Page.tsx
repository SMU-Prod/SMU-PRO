"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 6</span>

          <h1>Membrana Plasmática: Mosaico Fluido, Especializações e Transportes</h1>

          <p>
            A membrana plasmática é uma das estruturas mais sofisticadas da natureza:
            uma barreira dinâmica com apenas ~7 nm de espessura que separa o citoplasma
            do ambiente externo, controla rigorosamente o trânsito de íons, moléculas e
            partículas, e ainda serve como plataforma de sinalização, reconhecimento
            e adesão celular. Compreender o modelo do mosaico fluido, os tipos de
            proteínas de membrana, as especializações estruturais e todos os mecanismos
            de transporte — passivo, ativo e em massa — é fundamental para o ENEM
            e para qualquer vestibular de biologia.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Molecular</span>

        <h2>1. Composição e Organização da Membrana Plasmática</h2>

        <p>
          A membrana plasmática é formada principalmente por uma{" "}
          <strong>bicamada de fosfolipídios</strong>, entremeada de{" "}
          <strong>proteínas</strong> e, nas células animais, de{" "}
          <strong>colesterol</strong>. Na face externa, carboidratos ligados às
          proteínas (glicoproteínas) e aos lipídios (glicolipídios) formam o{" "}
          <strong>glicocálix</strong>. Cada fosfolipídio possui uma{" "}
          <strong>cabeça polar hidrofílica</strong> (interage com água) e duas{" "}
          <strong>caudas apolares hidrofóbicas</strong> (repelem água); por
          isso, em meio aquoso as moléculas se organizam espontaneamente de
          modo que as cabeças ficam voltadas para os meios aquosos interno e
          externo, enquanto as caudas se voltam para o interior hidrofóbico da
          bicamada.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Bicamada fosfolipídica com proteínas integrais e colesterol">
            {/* fundo */}
            <rect x={0} y={0} width={720} height={220} fill="#f0f9ff" rx={14} />

            {/* rótulos camadas aquosas */}
            <text x={360} y={22} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={600}>Meio extracelular (aquoso)</text>
            <text x={360} y={208} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={600}>Citoplasma (aquoso)</text>

            {/* ====== FOLHA EXTERNA: cabeças ====== */}
            {[60,120,180,240,300,360,420,480,540,600,660].map((cx) => (
              <g key={"h-ext-" + cx}>
                <circle cx={cx} cy={55} r={13} fill="#3b82f6" opacity={0.85} />
              </g>
            ))}

            {/* ====== FOLHA EXTERNA: caudas ====== */}
            {[60,120,180,240,300,360,420,480,540,600,660].map((cx) => (
              <g key={"t-ext-" + cx}>
                <line x1={cx - 4} y1={68} x2={cx - 4} y2={105} stroke="#facc15" strokeWidth={3} strokeLinecap="round" />
                <line x1={cx + 4} y1={68} x2={cx + 4} y2={105} stroke="#facc15" strokeWidth={3} strokeLinecap="round" />
              </g>
            ))}

            {/* ====== FOLHA INTERNA: caudas ====== */}
            {[60,120,180,240,300,360,420,480,540,600,660].map((cx) => (
              <g key={"t-int-" + cx}>
                <line x1={cx - 4} y1={115} x2={cx - 4} y2={152} stroke="#facc15" strokeWidth={3} strokeLinecap="round" />
                <line x1={cx + 4} y1={115} x2={cx + 4} y2={152} stroke="#facc15" strokeWidth={3} strokeLinecap="round" />
              </g>
            ))}

            {/* ====== FOLHA INTERNA: cabeças ====== */}
            {[60,120,180,240,300,360,420,480,540,600,660].map((cx) => (
              <g key={"h-int-" + cx}>
                <circle cx={cx} cy={165} r={13} fill="#3b82f6" opacity={0.85} />
              </g>
            ))}

            {/* proteína integral (canal) */}
            <rect x={158} y={42} width={44} height={136} rx={10} fill="#16a34a" opacity={0.75} />
            <text x={180} y={116} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">canal</text>

            {/* proteína integral (receptora) */}
            <rect x={390} y={42} width={44} height={136} rx={10} fill="#8b5cf6" opacity={0.75} />
            <text x={412} y={116} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">receptor</text>

            {/* colesterol (losango) */}
            <polygon points="540,88 555,108 540,128 525,108" fill="#f97316" opacity={0.8} />
            <text x={540} y={148} textAnchor="middle" fontSize={9} fill="#c2410c" fontWeight={700}>col.</text>

            {/* glicocálix (antenas) */}
            <path d="M 60 42 Q 50 22 40 18" fill="none" stroke="#ec4899" strokeWidth={2} />
            <circle cx={40} cy={16} r={5} fill="#ec4899" opacity={0.8} />
            <path d="M 60 42 Q 70 24 80 18" fill="none" stroke="#ec4899" strokeWidth={2} />
            <circle cx={80} cy={16} r={5} fill="#ec4899" opacity={0.8} />
            <text x={52} y={10} textAnchor="middle" fontSize={9} fill="#be185d" fontWeight={700}>glicocálix</text>

            {/* legenda */}
            <circle cx={30} cy={194} r={8} fill="#3b82f6" />
            <text x={43} y={198} fontSize={10} fill="#1e3a8a">cabeça hidrofílica</text>
            <line x1={170} y1={190} x2={185} y2={200} stroke="#facc15" strokeWidth={3} />
            <text x={190} y={198} fontSize={10} fill="#713f12">cauda hidrofóbica</text>
            <rect x={320} y={188} width={14} height={14} rx={3} fill="#16a34a" opacity={0.75} />
            <text x={338} y={198} fontSize={10} fill="#14532d">proteína integral</text>
            <polygon points="510,194 518,205 502,205" fill="#f97316" opacity={0.8} />
            <text x={525} y={202} fontSize={10} fill="#c2410c">colesterol</text>
          </svg>
          <figcaption>
            Bicamada fosfolipídica: cabeças azuis (hidrofílicas) voltadas para os meios aquosos;
            caudas amarelas (hidrofóbicas) no interior. Proteínas integrais (verde = canal; roxo = receptor),
            colesterol (laranja) e glicocálix (rosa) completam o mosaico fluido.
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧈</span>
            <h3>Fosfolipídios</h3>
            <p>Constituem ~50% da membrana em massa. Sua anfifilia (cabeça hidrofílica + caudas hidrofóbicas) é a base estrutural da bicamada.</p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Proteínas</h3>
            <p>Correspondem a ~50% da massa em membranas ativas (ex.: mitocôndria). Exercem funções de transporte, sinalização, enzimática e estrutural.</p>
          </div>
          <div className="lesson-card">
            <span>💠</span>
            <h3>Colesterol</h3>
            <p>Presente apenas em células eucariontes animais. Intercala-se entre os fosfolipídios e regula a fluidez: reduz em altas temperaturas, aumenta em baixas.</p>
          </div>
          <div className="lesson-card">
            <span>🍬</span>
            <h3>Glicocálix</h3>
            <p>Revestimento de carboidratos na face externa. Participa do reconhecimento celular, adesão e proteção contra danos mecânicos e enzimáticos.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Glicolipídios</h3>
            <p>Lipídios da folha externa com cadeias de açúcar associadas. Fundamentais para o sistema ABO de grupos sanguíneos.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Fluidez</h3>
            <p>A temperatura corporal (~37 °C) mantém a membrana em estado gel-fluido, permitindo mobilidade lateral de lipídios e proteínas.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Assimetria das duas folhas</h3>
          <p>
            As duas monocamadas da bicamada <strong>não são idênticas</strong>: o glicocálix
            (glicoproteínas e glicolipídios) fica exclusivamente na face externa, enquanto
            alguns fosfolipídios carregados negativamente (ex.: fosfatidilserina) se
            concentram na face interna. Essa <strong>assimetria é essencial</strong> para
            processos como a sinalização apoptótica e a fusão de membranas.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Modelo Atual</span>

        <h2>2. Modelo do Mosaico Fluido (Singer e Nicolson, 1972)</h2>

        <p>
          Até a década de 1970 o modelo predominante descrevia a membrana como
          uma estrutura rígida com proteínas dispostas em camadas fixas
          (modelo sanduíche de Danielli-Davson). Em 1972,{" "}
          <strong>S. Jonathan Singer e Garth Nicolson</strong> propuseram o
          revolucionário <strong>modelo do mosaico fluido</strong>, apoiado em
          experimentos de fusão celular (Frye e Edidin, 1970) que mostraram que
          proteínas marcadas fluorescentemente de duas células distintas se
          misturavam rapidamente após a fusão — prova da mobilidade lateral.
        </p>

        <p>
          O modelo tem dois aspectos centrais: (1){" "}
          <strong>fluidez</strong> — fosfolipídios e proteínas podem se difundir
          lateralmente no plano da bicamada (movimento "flip-flop" transversal
          é raro e lento); (2) <strong>mosaico</strong> — proteínas se
          distribuem de forma heterogênea, como peças de um mosaico na "tela"
          fosfolipídica.
        </p>

        <div className="lesson-highlight">
          <h3>Atualizações pós-1972 — modelo do mosaico fluido revisado</h3>
          <p>
            Evidências recentes mostram que a membrana não é tão fluida e homogênea
            quanto se imaginava. Existem <strong>jangadas lipídicas</strong>{" "}
            (<em>lipid rafts</em>): microdomínios ricos em colesterol e esfingolipídios
            onde certas proteínas se agrupam para realizar sinalização eficiente.
            Além disso, o citoesqueleto subjacente (actina e espectrina) ancora
            proteínas e restringe sua mobilidade em zonas definidas.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Modelo Sanduíche (Danielli-Davson)</th>
                <th>Modelo Mosaico Fluido (Singer-Nicolson)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Posição das proteínas</td>
                <td>Camadas externas fixas sobre os lipídios</td>
                <td>Imersas ou periféricas, móveis lateralmente</td>
              </tr>
              <tr>
                <td>Fluidez</td>
                <td>Estrutura rígida</td>
                <td>Dinâmica — lipídios e proteínas se deslocam</td>
              </tr>
              <tr>
                <td>Bicamada</td>
                <td>Reconhecida</td>
                <td>Reconhecida + assimetria entre folhas</td>
              </tr>
              <tr>
                <td>Evidência experimental</td>
                <td>Espessura por microscopia eletrônica</td>
                <td>Fusão celular + fluorescência (Frye e Edidin, 1970)</td>
              </tr>
              <tr>
                <td>Status atual</td>
                <td>Superado</td>
                <td>Aceito (com revisões sobre microdomínios)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Proteínas de Membrana</span>

        <h2>3. Tipos e Funções das Proteínas de Membrana</h2>

        <p>
          As proteínas são os principais atores funcionais da membrana. Dividem-se em
          dois grandes grupos conforme sua associação com a bicamada, e desempenham
          papéis extremamente variados:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Localização</th>
                <th>Exemplos e Funções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Integral (transmembrana)</strong></td>
                <td>Atravessa completamente a bicamada uma ou mais vezes</td>
                <td>Canais iônicos (Na⁺, K⁺, Ca²⁺), transportadores de glicose (GLUT), bomba Na⁺/K⁺-ATPase, receptores de hormônios</td>
              </tr>
              <tr>
                <td><strong>Integral (monotópica)</strong></td>
                <td>Inserida em apenas uma folha da bicamada</td>
                <td>Enzimas de membrana (ex.: ciclase de adenilil)</td>
              </tr>
              <tr>
                <td><strong>Periférica</strong></td>
                <td>Associada à superfície interna ou externa por interações eletrostáticas</td>
                <td>Espectrina (suporte estrutural em hemácias), proteínas do citoesqueleto</td>
              </tr>
              <tr>
                <td><strong>Ancorada a lipídio</strong></td>
                <td>Ligada covalentemente a um lipídio da bicamada</td>
                <td>Proteínas G, priões normais (PrP^c)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚪</span>
            <h3>Canais Iônicos</h3>
            <p>Poros protéicos seletivos para íons específicos (Na⁺, K⁺, Cl⁻, Ca²⁺). Podem ser dependentes de voltagem ou de ligante.</p>
          </div>
          <div className="lesson-card">
            <span>🚛</span>
            <h3>Transportadores</h3>
            <p>Ligam-se à substância e sofrem mudança conformacional para liberá-la do outro lado. Ex.: GLUT1 para glicose; permease de aminoácidos.</p>
          </div>
          <div className="lesson-card">
            <span>📡</span>
            <h3>Receptores</h3>
            <p>Reconhecem hormônios, neurotransmissores e fatores de crescimento, desencadeando cascatas de sinalização intracelular.</p>
          </div>
          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Enzimas</h3>
            <p>Catalisam reações na superfície da membrana. Ex.: adenilil ciclase converte ATP em AMPc (segundo mensageiro).</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Moléculas de Adesão</h3>
            <p>Integramins, caderinas e selectinas medeiam a adesão célula-célula e célula-matriz extracelular.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Antígenos</h3>
            <p>Glicoproteínas que identificam a célula para o sistema imunológico. MHC I e II apresentam peptídeos a linfócitos T.</p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Especializações</span>

        <h2>4. Especializações da Membrana Plasmática</h2>

        <p>
          Diferentes tipos celulares desenvolvem <strong>diferenciações regionais da
          membrana</strong> que amplificam ou modificam suas funções básicas. Essas
          especializações são altamente cobradas em questões contextualizadas do ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Microvilosidades</h3>
            <p>Projeções digitiformes imóveis que aumentam a área de absorção. No intestino delgado formam a "borda em escova" (aumento de ~20× na área).</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Cílios</h3>
            <p>Projeções curtas com microtúbulos internos (axonema 9+2). Móveis — batem em sincronia para deslocar muco, óvulos ou líquido cefalorraquidiano.</p>
          </div>
          <div className="lesson-card">
            <span>🏊</span>
            <h3>Flagelos</h3>
            <p>Estrutura longa semelhante ao cílio (axonema 9+2). Nos espermatozoides, propulsiona a célula em direção ao óvulo.</p>
          </div>
          <div className="lesson-card">
            <span>🔒</span>
            <h3>Junções Tight (Ocludentes)</h3>
            <p>Selam o espaço entre células epiteliais adjacentes, impedindo passagem de substâncias pelo espaço intercelular (barreira paracelular).</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Desmossomos</h3>
            <p>Junções de adesão que ancoram células vizinhas via filamentos intermediários. Abundantes na pele e no músculo cardíaco.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Junções Gap (Comunicantes)</h3>
            <p>Canais proteicos (conexinas) que conectam os citoplasmas de células vizinhas, permitindo troca direta de íons e pequenas moléculas.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Doença cílios imóveis (discinesia ciliar primária)</h3>
          <p>
            Mutações que afetam as proteínas dos cílios causam{" "}
            <strong>discinesia ciliar primária</strong>: os cílios ficam imóveis ou
            batem de forma descoordenada, levando a infecções respiratórias crônicas
            (muco não é removido das vias aéreas), infertilidade masculina (flagelos
            de espermatozoides comprometidos) e, em metade dos casos, situs inversus
            (órgãos espelhados) — pois os cílios são necessários para estabelecer a
            assimetria esquerda-direita no embrião.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Transporte Passivo</span>

        <h2>5. Transporte Passivo — Difusão e Osmose</h2>

        <p>
          O <strong>transporte passivo</strong> é todo transporte que ocorre{" "}
          <strong>sem gasto de ATP</strong>, sempre a favor do gradiente
          eletroquímico (do maior para o menor potencial). Existem três modalidades
          principais:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Esquema de difusão simples, difusão facilitada e osmose">
            <rect x={0} y={0} width={720} height={200} fill="#f8fafc" rx={14} />

            {/* divisórias */}
            <line x1={240} y1={10} x2={240} y2={190} stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="6 4" />
            <line x1={480} y1={10} x2={480} y2={190} stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="6 4" />

            {/* títulos */}
            <text x={120} y={28} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0f172a">Difusão Simples</text>
            <text x={360} y={28} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0f172a">Difusão Facilitada</text>
            <text x={600} y={28} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0f172a">Osmose</text>

            {/* === DIFUSÃO SIMPLES === */}
            {/* bicamada */}
            <rect x={60} y={80} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            <rect x={60} y={96} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            {/* moléculas lado esquerdo (alta conc) */}
            {[70,85,100,115,75,90,105].map((cx,i) => (
              <circle key={"ds-l-"+i} cx={cx} cy={65} r={5} fill="#f59e0b" opacity={0.8} />
            ))}
            {/* moléculas lado direito (baixa conc) */}
            {[145,165].map((cx,i) => (
              <circle key={"ds-r-"+i} cx={cx} cy={120} r={5} fill="#f59e0b" opacity={0.6} />
            ))}
            {/* seta */}
            <line x1={120} y1={74} x2={120} y2={106} stroke="#f59e0b" strokeWidth={2.5} />
            <polygon points="120,108 115,100 125,100" fill="#f59e0b" />
            <text x={120} y={150} textAnchor="middle" fontSize={10} fill="#374151">O₂, CO₂, álcool</text>
            <text x={120} y={163} textAnchor="middle" fontSize={10} fill="#374151">(apolar / pequeno)</text>

            {/* === DIFUSÃO FACILITADA === */}
            {/* bicamada */}
            <rect x={300} y={80} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            <rect x={300} y={96} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            {/* proteína canal */}
            <rect x={348} y={75} width={24} height={38} rx={6} fill="#16a34a" opacity={0.75} />
            {/* moléculas */}
            {[310,325,335,315,330].map((cx,i) => (
              <circle key={"df-l-"+i} cx={cx} cy={65} r={5} fill="#a855f7" opacity={0.8} />
            ))}
            {[390,405].map((cx,i) => (
              <circle key={"df-r-"+i} cx={cx} cy={122} r={5} fill="#a855f7" opacity={0.6} />
            ))}
            {/* seta */}
            <line x1={360} y1={76} x2={360} y2={112} stroke="#a855f7" strokeWidth={2.5} />
            <polygon points="360,114 355,106 365,106" fill="#a855f7" />
            <text x={360} y={150} textAnchor="middle" fontSize={10} fill="#374151">Glicose, aminoácidos</text>
            <text x={360} y={163} textAnchor="middle" fontSize={10} fill="#374151">(polar / via proteína)</text>

            {/* === OSMOSE === */}
            {/* bicamada */}
            <rect x={540} y={80} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            <rect x={540} y={96} width={120} height={12} rx={4} fill="#3b82f6" opacity={0.3} />
            {/* aquaporina */}
            <rect x={591} y={75} width={18} height={38} rx={4} fill="#06b6d4" opacity={0.75} />
            <text x={600} y={70} textAnchor="middle" fontSize={8} fill="#0e7490">aquaporina</text>
            {/* moléculas H2O */}
            {[548,558,568,578,588].map((cx,i) => (
              <circle key={"os-l-"+i} cx={cx} cy={65} r={4} fill="#38bdf8" opacity={0.85} />
            ))}
            {/* soluto (impede saída de água) */}
            <circle cx={640} cy={120} r={8} fill="#ef4444" opacity={0.75} />
            <circle cx={655} cy={125} r={8} fill="#ef4444" opacity={0.75} />
            <text x={647} y={143} textAnchor="middle" fontSize={9} fill="#991b1b">soluto</text>
            {/* seta água */}
            <line x1={600} y1={76} x2={600} y2={112} stroke="#38bdf8" strokeWidth={2.5} />
            <polygon points="600,114 595,106 605,106" fill="#38bdf8" />
            <text x={600} y={163} textAnchor="middle" fontSize={10} fill="#374151">H₂O: hipotônico → hipertônico</text>
          </svg>
          <figcaption>
            Três modalidades de transporte passivo: difusão simples (moléculas apolares atravessam diretamente),
            difusão facilitada (moléculas polares usam proteínas) e osmose (H₂O via aquaporinas ou diretamente).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modalidade</th>
                <th>Requer proteína?</th>
                <th>Substâncias típicas</th>
                <th>Direção do fluxo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Difusão simples</strong></td>
                <td>Não</td>
                <td>O₂, CO₂, N₂, lipídios, álcool etílico, água (lenta)</td>
                <td>Alta → baixa concentração</td>
              </tr>
              <tr>
                <td><strong>Difusão facilitada</strong></td>
                <td>Sim (canal ou transportador)</td>
                <td>Glicose, frutose, aminoácidos, íons Na⁺, K⁺, Cl⁻</td>
                <td>Alta → baixa concentração (favorável)</td>
              </tr>
              <tr>
                <td><strong>Osmose</strong></td>
                <td>Não (ou sim via aquaporinas)</td>
                <td>H₂O</td>
                <td>Hipotônico → hipertônico (menor [soluto] → maior [soluto])</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Osmose e equilíbrio hídrico celular</h3>
          <p>
            Quando uma hemácia é colocada em meio <strong>hipotônico</strong> (menos
            solutos que o interior), a água entra e a célula incha podendo romper — fenômeno
            chamado <strong>hemólise</strong>. Em meio <strong>hipertônico</strong> (mais
            solutos que o interior), a água sai e a hemácia murcha e se deforma —{" "}
            <strong>crenação</strong>. Em meio <strong>isotônico</strong> (mesma
            concentração de solutos), o fluxo líquido de água é zero e a célula mantém
            seu volume normal. O soro fisiológico (0,9% NaCl) é isotônico ao plasma humano
            por essa razão.
          </p>
        </div>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 220 180" width="220" height="180" aria-label="Hemácia em meio hipotônico, isotônico e hipertônico">
              <rect x={0} y={0} width={220} height={180} fill="#fefce8" rx={12} />
              {/* hipotônico */}
              <ellipse cx={37} cy={90} rx={28} ry={34} fill="#93c5fd" opacity={0.6} stroke="#2563eb" strokeWidth={1.5} />
              <text x={37} y={142} textAnchor="middle" fontSize={10} fill="#1e40af" fontWeight={700}>Hipotônico</text>
              <text x={37} y={154} textAnchor="middle" fontSize={9} fill="#374151">hemólise</text>
              {/* isotônico */}
              <ellipse cx={110} cy={93} rx={22} ry={25} fill="#86efac" opacity={0.6} stroke="#16a34a" strokeWidth={1.5} />
              <text x={110} y={142} textAnchor="middle" fontSize={10} fill="#14532d" fontWeight={700}>Isotônico</text>
              <text x={110} y={154} textAnchor="middle" fontSize={9} fill="#374151">normal</text>
              {/* hipertônico */}
              <ellipse cx={183} cy={96} rx={16} ry={17} fill="#fca5a5" opacity={0.6} stroke="#dc2626" strokeWidth={1.5} />
              {/* crenação — bordas irregulares */}
              {[0,45,90,135,180,225,270,315].map((ang,i) => {
                const rad = ang * Math.PI / 180;
                const x1 = 183 + 16 * Math.cos(rad);
                const y1 = 96 + 17 * Math.sin(rad);
                const x2 = 183 + 20 * Math.cos(rad);
                const y2 = 96 + 21 * Math.sin(rad);
                return <line key={"cr-"+i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#dc2626" strokeWidth={1.5} />;
              })}
              <text x={183} y={142} textAnchor="middle" fontSize={10} fill="#991b1b" fontWeight={700}>Hipertônico</text>
              <text x={183} y={154} textAnchor="middle" fontSize={9} fill="#374151">crenação</text>
            </svg>
            <figcaption>Efeito osmótico sobre hemácias nos três tipos de meio.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 260 180" width="260" height="180" aria-label="Plasmólise em célula vegetal">
              <rect x={0} y={0} width={260} height={180} fill="#f0fdf4" rx={12} />
              <text x={130} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Plasmólise (célula vegetal)</text>
              {/* parede celular */}
              <rect x={25} y={35} width={90} height={120} rx={6} fill="none" stroke="#78350f" strokeWidth={3} />
              {/* membrana colada */}
              <rect x={28} y={38} width={84} height={114} rx={4} fill="#86efac" opacity={0.5} stroke="#16a34a" strokeWidth={1.5} />
              <text x={70} y={100} textAnchor="middle" fontSize={9} fill="#14532d">isotônico</text>
              <text x={70} y={113} textAnchor="middle" fontSize={9} fill="#14532d">(turgescente)</text>

              {/* parede celular plasmolisada */}
              <rect x={145} y={35} width={90} height={120} rx={6} fill="none" stroke="#78350f" strokeWidth={3} />
              {/* membrana retraída */}
              <rect x={158} y={52} width={64} height={86} rx={4} fill="#fca5a5" opacity={0.5} stroke="#dc2626" strokeWidth={1.5} />
              <text x={190} y={100} textAnchor="middle" fontSize={9} fill="#991b1b">hipertônico</text>
              <text x={190} y={113} textAnchor="middle" fontSize={9} fill="#991b1b">(plasmolisada)</text>

              <text x={130} y={170} textAnchor="middle" fontSize={9} fill="#6b7280">espaço entre parede e membrana = apoplasto</text>
            </svg>
            <figcaption>Plasmólise: em meio hipertônico, o protoplasto se retrai da parede celular.</figcaption>
          </figure>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Transporte Ativo</span>

        <h2>6. Transporte Ativo — Contra o Gradiente com Gasto de ATP</h2>

        <p>
          O <strong>transporte ativo</strong> move substâncias{" "}
          <strong>contra o gradiente de concentração</strong> (do menor para o maior
          potencial), o que exige energia fornecida pelo ATP. Essa capacidade é
          fundamental para manter a composição iônica intracelular distinta da
          extracelular — base do potencial de membrana, da excitabilidade neuronal e
          do equilíbrio osmótico celular.
        </p>

        <div className="lesson-highlight">
          <h3>Bomba de Sódio e Potássio (Na⁺/K⁺-ATPase)</h3>
          <p>
            A <strong>bomba Na⁺/K⁺</strong> é a proteína mais abundante na membrana
            de neurônios e células musculares. A cada ciclo ela:
          </p>
          <ol>
            <li>Liga-se a <strong>3 íons Na⁺</strong> no lado intracelular;</li>
            <li>Hidrolisa uma molécula de <strong>ATP</strong>, sofrendo fosforilação e mudança conformacional;</li>
            <li>Libera os 3 Na⁺ no <strong>meio extracelular</strong>;</li>
            <li>Liga-se a <strong>2 íons K⁺</strong> no lado extracelular;</li>
            <li>Defosforila-se, retorna à conformação original e libera os 2 K⁺ no <strong>citoplasma</strong>.</li>
          </ol>
          <p>
            Resultado: o meio intracelular fica rico em K⁺ e pobre em Na⁺; o meio
            extracelular, o inverso. Esse gradiente sustenta o{" "}
            <strong>potencial de repouso</strong> (-70 mV) dos neurônios e a
            propagação do impulso nervoso.
          </p>
        </div>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 280 200" width="280" height="200" aria-label="Bomba Na K ATPase ciclo">
              <rect x={0} y={0} width={280} height={200} fill="#f5f3ff" rx={12} />
              <text x={140} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Bomba Na⁺/K⁺-ATPase</text>

              {/* bicamada */}
              <rect x={20} y={75} width={240} height={14} rx={4} fill="#a5b4fc" opacity={0.5} />
              <rect x={20} y={95} width={240} height={14} rx={4} fill="#a5b4fc" opacity={0.5} />

              {/* proteína da bomba */}
              <rect x={110} y={60} width={60} height={64} rx={10} fill="#6366f1" opacity={0.8} />
              <text x={140} y={96} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">ATPase</text>

              {/* Na saindo */}
              <circle cx={80} cy={58} r={10} fill="#ef4444" opacity={0.85} />
              <text x={80} y={62} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">Na⁺</text>
              <circle cx={55} cy={44} r={10} fill="#ef4444" opacity={0.85} />
              <text x={55} y={48} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">Na⁺</text>
              <circle cx={105} cy={42} r={10} fill="#ef4444" opacity={0.85} />
              <text x={105} y={46} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">Na⁺</text>
              <text x={72} y={32} textAnchor="middle" fontSize={9} fill="#991b1b">3 Na⁺ saem →</text>

              {/* K entrando */}
              <circle cx={185} cy={138} r={10} fill="#16a34a" opacity={0.85} />
              <text x={185} y={142} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">K⁺</text>
              <circle cx={205} cy={152} r={10} fill="#16a34a" opacity={0.85} />
              <text x={205} y={156} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">K⁺</text>
              <text x={200} y={172} textAnchor="middle" fontSize={9} fill="#14532d">← 2 K⁺ entram</text>

              {/* ATP */}
              <text x={50} y={112} fontSize={10} fill="#7c3aed" fontWeight={700}>ATP</text>
              <polygon points="70,105 80,100 80,110" fill="#7c3aed" />

              <text x={140} y={192} textAnchor="middle" fontSize={9} fill="#374151">1 ATP por ciclo (3Na⁺ fora / 2K⁺ dentro)</text>
            </svg>
            <figcaption>Ciclo da bomba Na⁺/K⁺: 1 ATP expulsa 3 Na⁺ e capta 2 K⁺.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 280 200" width="280" height="200" aria-label="Cotransporte e contratransporte">
              <rect x={0} y={0} width={280} height={200} fill="#fff7ed" rx={12} />
              <text x={140} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Transporte Ativo Secundário</text>

              {/* bicamada */}
              <rect x={20} y={80} width={240} height={12} rx={3} fill="#fed7aa" opacity={0.7} />
              <rect x={20} y={96} width={240} height={12} rx={3} fill="#fed7aa" opacity={0.7} />

              {/* cotransporte (simporte) */}
              <rect x={50} y={68} width={50} height={52} rx={8} fill="#f97316" opacity={0.8} />
              <text x={75} y={97} textAnchor="middle" fontSize={8} fontWeight={700} fill="white">simporte</text>
              <line x1={75} y1={60} x2={75} y2={68} stroke="#f97316" strokeWidth={2} />
              <polygon points="75,120 70,115 80,115" fill="#f97316" />
              <text x={75} y={135} textAnchor="middle" fontSize={8} fill="#7c2d12">Na⁺ + glicose</text>
              <text x={75} y={145} textAnchor="middle" fontSize={8} fill="#7c2d12">(mesma direção)</text>

              {/* contratransporte (antiporte) */}
              <rect x={165} y={68} width={50} height={52} rx={8} fill="#8b5cf6" opacity={0.8} />
              <text x={190} y={97} textAnchor="middle" fontSize={8} fontWeight={700} fill="white">antiporte</text>
              <line x1={180} y1={60} x2={180} y2={68} stroke="#8b5cf6" strokeWidth={2} />
              <polygon points="180,120 175,115 185,115" fill="#8b5cf6" />
              <line x1={200} y1={120} x2={200} y2={128} stroke="#dc2626" strokeWidth={2} />
              <polygon points="200,60 195,68 205,68" fill="#dc2626" />
              <text x={190} y={142} textAnchor="middle" fontSize={8} fill="#4c1d95">Na⁺/H⁺</text>
              <text x={190} y={152} textAnchor="middle" fontSize={8} fill="#4c1d95">(direções opostas)</text>

              <text x={140} y={185} textAnchor="middle" fontSize={9} fill="#374151">energia do gradiente de Na⁺ (criado pela bomba)</text>
            </svg>
            <figcaption>Transporte ativo secundário usa o gradiente de Na⁺ (gerado pela bomba) para mover outras moléculas.</figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Transporte Passivo</th>
                <th>Transporte Ativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gasto de ATP</td>
                <td>Não</td>
                <td>Sim (direto ou indireto)</td>
              </tr>
              <tr>
                <td>Direção</td>
                <td>Favor do gradiente</td>
                <td>Contra o gradiente</td>
              </tr>
              <tr>
                <td>Proteína necessária</td>
                <td>Não (difusão simples) / Sim (facilitada)</td>
                <td>Sempre (bomba ou cotransportador)</td>
              </tr>
              <tr>
                <td>Saturação</td>
                <td>Não há saturação (difusão simples)</td>
                <td>Pode saturar (número finito de bombas)</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>O₂, CO₂, osmose, glicose (GLUT)</td>
                <td>Bomba Na⁺/K⁺, bomba H⁺ (lisossomo), simporte Na⁺/glicose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Transporte em Massa</span>

        <h2>7. Endocitose, Exocitose e Transcitose</h2>

        <p>
          Para partículas e macromoléculas grandes demais para atravessar canais ou
          transportadores, a célula utiliza <strong>transporte em massa</strong>: a
          própria membrana se deforma e forma vesículas para ingerir
          (<strong>endocitose</strong>) ou secretar (<strong>exocitose</strong>)
          material.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍽️</span>
            <h3>Fagocitose</h3>
            <p>A célula emite pseudópodes que englobam partículas sólidas (bactérias, detritos). Forma um fagossomo que se funde com lisossomos para digestão. Realizada por macrófagos, neutrófilos e amebas.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Pinocitose</h3>
            <p>Invaginação da membrana que engloba gotículas de líquido com solutos dissolvidos. Ocorre continuamente na maioria das células eucariontes para amostragem do meio extracelular.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Endocitose Mediada por Receptor</h3>
            <p>Ligantes específicos ligam-se a receptores em fossetas revestidas de clatrina. Forma vesículas revestidas altamente seletivas. Ex.: captação de LDL (colesterol) e de insulina.</p>
          </div>
          <div className="lesson-card">
            <span>📦</span>
            <h3>Exocitose</h3>
            <p>Vesículas intracelulares fundem-se com a membrana plasmática e liberam seu conteúdo no exterior. Fundamental para secreção de hormônios, neurotransmissores e enzimas digestivas.</p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Transcitose</h3>
            <p>Material é endocitado em um lado da célula e exocitado no lado oposto. Permite transporte de macromoléculas através de epitélios (ex.: anticorpos maternos pelo intestino do recém-nascido).</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Gasto energético</h3>
            <p>Endocitose e exocitose consomem ATP para a reorganização do citoesqueleto de actina e para a fusão das membranas mediada por proteínas SNARE.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Colesterol e endocitose mediada por receptor — relevância clínica</h3>
          <p>
            Na <strong>hipercolesterolemia familiar</strong>, mutações no gene do
            receptor de LDL impedem a captação normal de partículas de LDL por
            endocitose mediada por receptor. O LDL acumula-se no plasma, deposita-se
            nas paredes arteriais e causa aterosclerose precoce. Esse exemplo ilustra
            diretamente a conexão entre falha de membrana e doença cardiovascular —
            contexto frequente em questões do ENEM.
          </p>
        </div>

        <div className="math-block">
          <h3>Reciclagem de membrana</h3>
          <p>
            A endocitose continuamente remove membrana da superfície celular. Para
            compensar, a exocitose reinsere membrana de volta. Em células muito ativas
            (ex.: macrófagos em processo inflamatório), o equilíbrio entre os dois
            processos é finamente regulado para manter a área superficial constante.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Integração e Revisão</span>

        <h2>8. Mapa Geral — Todos os Transportes de Membrana</h2>

        <p>
          A tabela abaixo integra todos os mecanismos de transporte estudados,
          facilitando a revisão comparativa tão exigida em vestibulares:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Subtipo</th>
                <th>Energia (ATP)</th>
                <th>Proteína</th>
                <th>Substâncias</th>
                <th>Direção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}><strong>Passivo</strong></td>
                <td>Difusão simples</td>
                <td>Não</td>
                <td>Não</td>
                <td>O₂, CO₂, lipídios, álcool</td>
                <td>Alta → baixa [c]</td>
              </tr>
              <tr>
                <td>Difusão facilitada</td>
                <td>Não</td>
                <td>Sim (canal/transportador)</td>
                <td>Glicose, aminoácidos, íons</td>
                <td>Alta → baixa [c]</td>
              </tr>
              <tr>
                <td>Osmose</td>
                <td>Não</td>
                <td>Não (ou aquaporina)</td>
                <td>H₂O</td>
                <td>Hipotônico → hipertônico</td>
              </tr>
              <tr>
                <td rowSpan={2}><strong>Ativo</strong></td>
                <td>Primário (bomba)</td>
                <td>Sim (direto)</td>
                <td>Sim (ATPase)</td>
                <td>Na⁺, K⁺, H⁺, Ca²⁺</td>
                <td>Baixa → alta [c]</td>
              </tr>
              <tr>
                <td>Secundário (cotransporte)</td>
                <td>Sim (indireto)</td>
                <td>Sim (cotransportador)</td>
                <td>Glicose + Na⁺ (simporte)</td>
                <td>Baixa → alta [c] (um soluto)</td>
              </tr>
              <tr>
                <td rowSpan={3}><strong>Em massa</strong></td>
                <td>Fagocitose</td>
                <td>Sim</td>
                <td>Receptores de superfície</td>
                <td>Partículas sólidas, bactérias</td>
                <td>Entrada</td>
              </tr>
              <tr>
                <td>Pinocitose</td>
                <td>Sim</td>
                <td>Não obrigatório</td>
                <td>Líquidos e solutos</td>
                <td>Entrada</td>
              </tr>
              <tr>
                <td>Exocitose</td>
                <td>Sim</td>
                <td>SNAREs</td>
                <td>Hormônios, neurotransmissores</td>
                <td>Saída</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — palavras-chave que aparecem nas questões</h3>
          <p>
            "Sem gasto de energia" ou "a favor do gradiente" = transporte passivo.
            "Com gasto de ATP" ou "contra o gradiente" = transporte ativo.
            "Englobamento de partícula sólida" = fagocitose.
            "Secreção de hormônio" = exocitose.
            "Meio hipotônico + hemácia" = hemólise. "Meio hipertônico + hemácia" = crenação.
            "Microvilosidades" = aumento de superfície de absorção.
            "Bomba Na⁺/K⁺" = 3 Na⁺ saem, 2 K⁺ entram, 1 ATP gasto.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 5 Exercícios</h2>

        <Exercise
          level="Básico"
          title="1. Modelo do mosaico fluido"
          statement={
            <p>
              O modelo do mosaico fluido, proposto por Singer e Nicolson em 1972, descreve
              a membrana plasmática como uma estrutura dinâmica. Qual das alternativas a
              seguir apresenta corretamente as características fundamentais desse modelo?
            </p>
          }
          options={[
            { letter: "a", text: "A membrana é rígida, com proteínas dispostas em camadas fixas externas aos fosfolipídios." },
            {
              letter: "b",
              text: "A membrana é formada por uma bicamada de fosfolipídios com proteínas imersas que podem se mover lateralmente.",
              correct: true,
            },
            { letter: "c", text: "A membrana é constituída exclusivamente por carboidratos e colesterol." },
            { letter: "d", text: "A membrana possui proteínas estáticas que bloqueiam toda passagem de substâncias." },
          ]}
          resolution={
            <p>
              O modelo do mosaico fluido caracteriza a membrana como uma bicamada fosfolipídica
              dinâmica, na qual as proteínas estão imersas ou associadas à superfície e podem se
              mover lateralmente — como "peças" de um "mosaico" numa "tela" fluida de lipídios.
              A alternativa A descreve o modelo sanduíche de Danielli-Davson, que foi superado.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Bomba de Sódio e Potássio"
          statement={
            <p>
              A bomba Na⁺/K⁺-ATPase é essencial para a manutenção do potencial de repouso
              neuronal. Sobre esse mecanismo, assinale a alternativa correta.
            </p>
          }
          options={[
            { letter: "a", text: "Transporta 2 Na⁺ para fora e 3 K⁺ para dentro, consumindo ATP." },
            {
              letter: "b",
              text: "Transporta 3 Na⁺ para fora e 2 K⁺ para dentro, consumindo ATP.",
              correct: true,
            },
            { letter: "c", text: "Transporta Na⁺ e K⁺ a favor do gradiente, sem gasto de energia." },
            { letter: "d", text: "Só funciona em células vegetais, pois animais possuem canais iônicos." },
          ]}
          resolution={
            <p>
              A bomba Na⁺/K⁺-ATPase é um exemplo clássico de transporte ativo primário. A cada
              ciclo, hidrolisa 1 ATP e usa a energia para expulsar <strong>3 Na⁺</strong> e captar{" "}
              <strong>2 K⁺</strong> — sempre contra o gradiente de concentração. Isso cria o
              potencial eletroquímico negativo no interior celular (-70 mV em neurônios) e controla
              o volume celular por osmose.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Transporte ativo secundário no intestino"
          statement={
            <p>
              No epitélio intestinal, a absorção de glicose luminal ocorre via simporte Na⁺/glicose
              (SGLT1) na membrana apical. Esse processo é classificado como transporte ativo
              secundário. A respeito desse mecanismo, analise as afirmações:
              I. A glicose entra contra seu próprio gradiente de concentração.
              II. O gradiente de Na⁺ que impulsiona o simporte é mantido pela bomba Na⁺/K⁺ na membrana basolateral.
              III. O processo não depende indiretamente de ATP.
              Estão corretas apenas:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I" },
            { letter: "b", text: "Apenas II e III" },
            {
              letter: "c",
              text: "Apenas I e II",
              correct: true,
            },
            { letter: "d", text: "I, II e III" },
          ]}
          resolution={
            <>
              <p>
                <strong>Afirmação I — Correta:</strong> o SGLT1 move glicose do lúmen intestinal
                (baixa [glicose]) para o interior da célula (alta [glicose]), ou seja, contra o
                gradiente, às custas do gradiente de Na⁺.
              </p>
              <p>
                <strong>Afirmação II — Correta:</strong> a bomba Na⁺/K⁺ na face basolateral
                expulsa continuamente os Na⁺ que entraram, mantendo a [Na⁺] intracelular baixa
                e, portanto, o gradiente que impulsiona o simporte.
              </p>
              <p>
                <strong>Afirmação III — Incorreta:</strong> embora o SGLT1 não hidrolise ATP
                diretamente, o sistema depende <em>indiretamente</em> de ATP: sem a bomba
                Na⁺/K⁺ (que usa ATP), o gradiente de Na⁺ desapareceria e o simporte pararia.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Hemácia em solução salina"
          statement={
            <p>
              Uma estudante de biomedicina realiza um experimento e coloca hemácias em três
              soluções: A (0,3% NaCl), B (0,9% NaCl) e C (3% NaCl). Após 30 minutos, ela
              observa que nas soluções A e C as hemácias apresentam alterações morfológicas
              marcantes. Qual é a sequência correta de fenômenos nas soluções A e C,
              respectivamente?
            </p>
          }
          options={[
            { letter: "a", text: "Crenação em A; hemólise em C." },
            {
              letter: "b",
              text: "Hemólise em A; crenação em C.",
              correct: true,
            },
            { letter: "c", text: "Plasmólise em A; hemólise em C." },
            { letter: "d", text: "Turgescência em A; crenação em C." },
          ]}
          resolution={
            <p>
              A solução A (0,3% NaCl) é <strong>hipotônica</strong> em relação ao interior da
              hemácia (~0,9% de equivalente osmótico): a água entra por osmose, a célula incha
              e pode romper — <strong>hemólise</strong>. A solução C (3% NaCl) é{" "}
              <strong>hipertônica</strong>: a água sai da hemácia por osmose, a célula murcha e
              seus prolongamentos citoplasmáticos se retraem — <strong>crenação</strong>. A
              solução B (0,9% NaCl) é isotônica e não causa alteração. Plasmólise é o termo
              correto para células vegetais, não hemácias; turgescência também é exclusiva de
              células vegetais (com parede celular).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Macrófago e fagocitose (contexto imunológico)"
          statement={
            <p>
              Durante uma infecção bacteriana, os macrófagos do sistema imune são recrutados
              para eliminar as bactérias invasoras. Para realizar essa função, essas células
              utilizam um mecanismo de transporte em que a membrana plasmática sofre
              deformação ativa para englobar os microrganismos. Com base nessa descrição,
              identifique o mecanismo correto e uma consequência celular direta desse processo.
            </p>
          }
          options={[
            { letter: "a", text: "Osmose — a bactéria entra por diferença de concentração de água." },
            { letter: "b", text: "Difusão facilitada — a bactéria atravessa canais proteicos específicos." },
            {
              letter: "c",
              text: "Fagocitose — forma-se um fagossomo que se funde com lisossomos para digerir a bactéria.",
              correct: true,
            },
            { letter: "d", text: "Exocitose — o macrófago secreta enzimas que destroem a bactéria externamente." },
          ]}
          resolution={
            <p>
              O mecanismo descrito é a <strong>fagocitose</strong>, uma forma de endocitose na qual
              a célula emite pseudópodes que envolvem a bactéria e a incorporam em uma vesícula
              chamada <strong>fagossomo</strong>. Esse fagossomo se funde com <strong>lisossomos</strong>,
              que contêm enzimas hidrolíticas e espécies reativas de oxigênio capazes de destruir
              o microrganismo. O processo consome ATP (reorganização do citoesqueleto de actina)
              e é essencial para a imunidade inata. A exocitose teria o sentido oposto: liberaria
              substâncias para fora da célula.
            </p>
          }
        />
      </section>
    </article>
  );
}
