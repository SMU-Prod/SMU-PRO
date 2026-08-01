"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 21</span>
          <h1>Hidrostática II: Pascal (Prensa) e Arquimedes (Empuxo)</h1>
          <p>
            Como um macaco hidráulico levanta um carro com o esforço de uma mão? Por que navios de aço
            flutuam? O Princípio de Pascal e o Princípio de Arquimedes revelam os segredos dos fluidos e
            explicam desde balanças de laboratório até submarinos e balões.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pascal</span>
        <h2>1. Princípio de Pascal</h2>
        <p>
          O <strong>Princípio de Pascal</strong> afirma que qualquer variação de pressão aplicada a um
          fluido em equilíbrio confinado transmite-se integralmente e igualmente a todos os pontos do
          fluido e às paredes do recipiente:
        </p>
        <M block={true}>{"\\Delta p_1 = \\Delta p_2 \\quad \\text{(transmissão integral da pressão)}"}</M>
        <p>
          Isso ocorre porque os fluidos são (praticamente) incompressíveis em condições normais. A variação
          de pressão se propaga instantaneamente em todas as direções.
        </p>
        <div className="lesson-highlight">
          <h3>Condição de aplicação</h3>
          <p>
            O princípio é válido para fluidos em equilíbrio, confinados e (praticamente) incompressíveis.
            Gases compressíveis seguem comportamento diferente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>2. Prensa Hidráulica</h2>
        <p>
          A <strong>prensa hidráulica</strong> é a aplicação mais icônica do Princípio de Pascal. Dois
          pistões de áreas <M>{"A_1"}</M> e <M>{"A_2"}</M> comunicam-se através de um fluido. Aplicando
          força <M>{"F_1"}</M> no pistão menor:
        </p>
        <M block={true}>{"\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\Rightarrow F_2 = F_1 \\cdot \\frac{A_2}{A_1}"}</M>
        <p>
          Se <M>{"A_2 \\gg A_1"}</M>, então <M>{"F_2 \\gg F_1"}</M>: uma força pequena gera uma força
          muito grande. Este é o princípio da <strong>multiplicação hidráulica de força</strong>.
        </p>
        <p>
          A conservação de energia é mantida: o trabalho feito no pistão pequeno iguala o trabalho feito
          pelo pistão grande (em fluido ideal):
        </p>
        <M block={true}>{"W_1 = F_1 d_1 = F_2 d_2 = W_2 \\Rightarrow \\frac{d_1}{d_2} = \\frac{A_2}{A_1}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia</span>
        <h2>3. Aplicações do Princípio de Pascal</h2>
        <p>
          O Princípio de Pascal está na base de diversas tecnologias modernas:
        </p>
        <ul>
          <li><strong>Freio hidráulico:</strong> a pressão da pedal de freio transmite-se a todos os
            quatro discos (ou tambores) simultaneamente.</li>
          <li><strong>Macaco hidráulico:</strong> pequena força na bomba de mão eleva cargas toneladas.</li>
          <li><strong>Escavadeira hidráulica:</strong> cilindros hidráulicos controlam braços e caçamba.</li>
          <li><strong>Cadeira de dentista e elevador hidráulico:</strong> ajuste de altura com bomba de
            óleo.</li>
          <li><strong>Direção hidráulica:</strong> amplifica a força do motorista no volante.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>4. SVG da Prensa Hidráulica</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 230" width="400" height="230" aria-label="Prensa hidráulica mostrando F1 pequena e F2 grande com áreas A1 e A2">
            {/* Fluido (corpo da prensa) */}
            <rect x="30" y="120" width="340" height="80" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" rx="4"/>

            {/* Pistão esquerdo (pequeno A1) */}
            <rect x="60" y="80" width="40" height="42" fill="#6b7280" rx="2"/>
            <rect x="65" y="122" width="30" height="8" fill="#3b82f6" opacity="0.8"/>
            {/* Cilindro esquerdo */}
            <rect x="60" y="120" width="40" height="80" fill="none" stroke="#3b82f6" strokeWidth="2"/>

            {/* Pistão direito (grande A2) */}
            <rect x="260" y="60" width="100" height="62" fill="#4b5563" rx="2"/>
            <rect x="265" y="122" width="90" height="8" fill="#3b82f6" opacity="0.8"/>
            {/* Cilindro direito */}
            <rect x="260" y="120" width="100" height="80" fill="none" stroke="#3b82f6" strokeWidth="2"/>

            {/* Força F1 (seta pequena para baixo) */}
            <line x1="80" y1="30" x2="80" y2="78" stroke="#e07b39" strokeWidth="2.5" markerEnd="url(#arrOrgDown21)"/>
            <text x="60" y="24" fontSize="11" fill="#e07b39" fontWeight="bold">F₁ (pequena)</text>

            {/* Força F2 (seta grande para cima) */}
            <line x1="310" y1="56" x2="310" y2="15" stroke="#16a34a" strokeWidth="3.5" markerEnd="url(#arrGreenUp21)"/>
            <text x="260" y="10" fontSize="11" fill="#16a34a" fontWeight="bold">F₂ (grande)</text>

            {/* Labels áreas */}
            <text x="52" y="110" fontSize="10" fill="#555">A₁</text>
            <text x="285" y="108" fontSize="10" fill="#555">A₂ ≫ A₁</text>

            {/* Equação */}
            <text x="120" y="167" fontSize="12" fill="#1e3a8a" fontWeight="bold">F₁/A₁ = F₂/A₂</text>

            {/* Deslocamento d1 maior */}
            <line x1="108" y1="80" x2="108" y2="52" stroke="#e07b39" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="112" y="68" fontSize="9" fill="#e07b39">d₁ ↑ maior</text>

            {/* Deslocamento d2 menor */}
            <line x1="368" y1="60" x2="368" y2="48" stroke="#16a34a" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="330" y="44" fontSize="9" fill="#16a34a">d₂ ↑ menor</text>

            <defs>
              <marker id="arrOrgDown21" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
                <path d="M0,0 L3,6 L6,0 z" fill="#e07b39"/>
              </marker>
              <marker id="arrGreenUp21" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
                <path d="M0,6 L3,0 L6,6 z" fill="#16a34a"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Prensa hidráulica: F₁ pequena aplicada ao pistão de área A₁ gera F₂ muito maior no pistão de área A₂. A energia é conservada: o pistão pequeno desce mais que o pistão grande sobe.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arquimedes</span>
        <h2>5. Princípio de Arquimedes — Empuxo</h2>
        <p>
          O <strong>Princípio de Arquimedes</strong> afirma que todo corpo submerso (total ou parcialmente)
          em um fluido recebe deste uma força vertical para cima, chamada <strong>empuxo</strong>, igual
          ao peso do fluido deslocado:
        </p>
        <M block={true}>{"E = \\rho_{fluido} \\cdot V_{submerso} \\cdot g"}</M>
        <p>
          O empuxo é independente da forma, da composição e da densidade do objeto — depende apenas do
          volume de fluido deslocado e da densidade do fluido.
        </p>
        <div className="lesson-highlight">
          <h3>Origem física do empuxo</h3>
          <p>
            O empuxo resulta da diferença de pressão hidrostática entre a face inferior (maior pressão) e
            a face superior (menor pressão) do objeto submerso:
            <M>{"E = (p_{inferior} - p_{superior}) \\cdot A = \\rho_{fl}\\,g\\,h\\,A = \\rho_{fl}\\,g\\,V"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equilíbrio</span>
        <h2>6. Condição de Flutuação</h2>
        <p>
          O comportamento de um objeto em um fluido depende da relação entre o empuxo <M>{"E"}</M> e o
          peso <M>{"P = mg"}</M>:
        </p>
        <M block={true}>{"E > P \\Rightarrow \\text{objeto sobe (flutua ou emerge)}"}</M>
        <M block={true}>{"E = P \\Rightarrow \\text{objeto fica em equilíbrio (flutua parcialmente)}"}</M>
        <M block={true}>{"E < P \\Rightarrow \\text{objeto desce (afunda)}"}</M>
        <p>
          Para objeto <em>flutuante</em> (E = P), a fração submersa é:
        </p>
        <M block={true}>{"\\frac{V_{submerso}}{V_{total}} = \\frac{\\rho_{objeto}}{\\rho_{fluido}}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Densidade</span>
        <h2>7. Densidade e Flutuação</h2>
        <p>
          A condição de flutuação pode ser reescrita em termos de densidades. Um objeto flutua em um
          fluido se e somente se sua densidade média for menor ou igual à do fluido:
        </p>
        <M block={true}>{"\\rho_{objeto} \\leq \\rho_{fluido} \\Rightarrow \\text{flutua}"}</M>
        <M block={true}>{"\\rho_{objeto} > \\rho_{fluido} \\Rightarrow \\text{afunda}"}</M>
        <p>
          Atenção: isso se aplica à <em>densidade média</em> do objeto — que inclui cavidades. Um navio
          de aço tem densidade média menor que a água porque é oco (cheio de ar).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>8. Objeto Submerso — Empuxo vs. Peso</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Objeto submerso mostrando empuxo para cima e peso para baixo">
            {/* Fluido */}
            <rect x="40" y="30" width="320" height="190" fill="#bfdbfe" opacity="0.4" rx="4"/>
            <line x1="40" y1="30" x2="360" y2="30" stroke="#3b82f6" strokeWidth="2"/>
            <text x="50" y="24" fontSize="10" fill="#3b82f6">Superfície do fluido</text>

            {/* Objeto parcialmente submerso */}
            <rect x="160" y="10" width="80" height="100" fill="#8B7355" rx="4" stroke="#555" strokeWidth="1.5"/>
            {/* Parte submersa marcada */}
            <rect x="160" y="30" width="80" height="80" fill="#6b7280" opacity="0.5" rx="2"/>
            <text x="175" y="20" fontSize="9" fill="#555">Objeto</text>
            <text x="168" y="75" fontSize="9" fill="#333">Submerso</text>

            {/* Seta Empuxo (para cima) */}
            <line x1="200" y1="115" x2="200" y2="55" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrGreenUp21b)"/>
            <text x="208" y="95" fontSize="12" fill="#16a34a" fontWeight="bold">E ↑</text>
            <text x="205" y="130" fontSize="10" fill="#16a34a">Empuxo</text>
            <text x="195" y="143" fontSize="9" fill="#16a34a">= ρ_fl · V_sub · g</text>

            {/* Seta Peso (para baixo) */}
            <line x1="155" y1="5" x2="155" y2="55" stroke="#e07b39" strokeWidth="3" markerEnd="url(#arrOrgDown21b)"/>
            <text x="120" y="30" fontSize="12" fill="#e07b39" fontWeight="bold">P ↓</text>
            <text x="118" y="70" fontSize="10" fill="#e07b39">Peso = mg</text>

            {/* Nível de flutuação */}
            <line x1="140" y1="30" x2="270" y2="30" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Fração submersa */}
            <line x1="250" y1="10" x2="250" y2="110" stroke="#aaa" strokeWidth="1" strokeDasharray="2,2"/>
            <line x1="245" y1="10" x2="255" y2="10" stroke="#aaa" strokeWidth="1"/>
            <line x1="245" y1="30" x2="255" y2="30" stroke="#aaa" strokeWidth="1"/>
            <line x1="245" y1="110" x2="255" y2="110" stroke="#aaa" strokeWidth="1"/>
            <text x="258" y="22" fontSize="9" fill="#555">parte fora</text>
            <text x="258" y="75" fontSize="9" fill="#555">V_sub</text>

            <defs>
              <marker id="arrGreenUp21b" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
                <path d="M0,6 L3,0 L6,6 z" fill="#16a34a"/>
              </marker>
              <marker id="arrOrgDown21b" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
                <path d="M0,0 L3,6 L6,0 z" fill="#e07b39"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Objeto parcialmente submerso em equilíbrio: o empuxo E (para cima, em verde) iguala o peso P (para baixo, em laranja). A fração submersa é igual à razão ρ_objeto/ρ_fluido.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Engenharia</span>
        <h2>9. Navio de Aço e o Lastro</h2>
        <p>
          Um navio de aço flutua porque seu volume total (casco + espaço interno cheio de ar) deslocado
          é suficientemente grande para que a densidade média seja menor que a da água do mar:
        </p>
        <M block={true}>{"\\rho_{média} = \\frac{m_{total}}{V_{total}} < \\rho_{agua}"}</M>
        <p>
          O <strong>lastro</strong> é água de mar bombeada para tanques internos do navio, controlando
          a densidade média e, portanto, o calado (profundidade de imersão). Submarinos usam esse princípio
          para mergulhar (enchendo tanques de lastro) e emergir (expulsando água com ar comprimido).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Física do Ar</span>
        <h2>10. Balão de Ar Quente — Empuxo no Ar</h2>
        <p>
          O Princípio de Arquimedes também se aplica a gases. Um balão de ar quente flutua porque o ar
          quente em seu interior tem menor densidade que o ar frio externo:
        </p>
        <M block={true}>{"E = \\rho_{ar\\,frio} \\cdot V_{balão} \\cdot g"}</M>
        <M block={true}>{"P_{total} = (m_{estrutura} + m_{ar\\,quente}) \\cdot g = (m_{est} + \\rho_{ar\\,quente}\\cdot V) \\cdot g"}</M>
        <p>
          O balão decola quando <M>{"E > P_{total}"}</M>:
        </p>
        <M block={true}>{"\\rho_{ar\\,frio} \\cdot V > m_{est} + \\rho_{ar\\,quente} \\cdot V"}</M>
        <M block={true}>{"(\\rho_{ar\\,frio} - \\rho_{ar\\,quente}) \\cdot V > m_{est}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>11. Flutuação vs. Afundamento em Água</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Objeto</th>
                <th>ρ (kg/m³)</th>
                <th>Comportamento em água</th>
                <th>Fração submersa</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Madeira (pinho)</td><td>~500</td><td>Flutua</td><td>~50%</td></tr>
              <tr><td>Gelo</td><td>917</td><td>Flutua</td><td>~91,7%</td></tr>
              <tr><td>Cortiça</td><td>~120</td><td>Flutua</td><td>~12%</td></tr>
              <tr><td>Alumínio</td><td>2700</td><td>Afunda</td><td>100% (E &lt; P)</td></tr>
              <tr><td>Ferro/Aço</td><td>7800</td><td>Afunda</td><td>100% (E &lt; P)</td></tr>
              <tr><td>Corpo humano</td><td>~985</td><td>Quase flutua</td><td>~98,5%</td></tr>
              <tr><td>Navio de aço (média)</td><td>&lt;1025</td><td>Flutua</td><td>Variável (calado)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Pascal</span>
            <h3>Transmissão</h3>
            <M block={true}>{"\\frac{F_1}{A_1} = \\frac{F_2}{A_2}"}</M>
          </div>
          <div className="math-card">
            <span>E</span>
            <h3>Empuxo</h3>
            <M block={true}>{"E = \\rho_{fl}\\,V_{sub}\\,g"}</M>
          </div>
          <div className="math-card">
            <span>Flut.</span>
            <h3>Condição de Flutuar</h3>
            <M block={true}>{"E = P \\Rightarrow \\rho_{obj} \\leq \\rho_{fl}"}</M>
          </div>
          <div className="math-card">
            <span>%</span>
            <h3>Fração Submersa</h3>
            <M block={true}>{"\\frac{V_{sub}}{V} = \\frac{\\rho_{obj}}{\\rho_{fl}}"}</M>
          </div>
          <div className="math-card">
            <span>Bal.</span>
            <h3>Balão Decola se</h3>
            <M block={true}>{"(\\rho_{frio}-\\rho_{qte})V > m_{est}"}</M>
          </div>
          <div className="math-card">
            <span>W</span>
            <h3>Conservação (prensa)</h3>
            <M block={true}>{"F_1 d_1 = F_2 d_2"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Hidrostática II</span>
        <h2>Síntese Visual: Empuxo e Prensa Hidráulica</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Empuxo de Arquimedes: corpo imerso e fluido deslocado">
          <defs>
            <marker id="arr21a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr21b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* recipiente com fluido */}
          <rect x="100" y="40" width="240" height="160" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="220" y="165" textAnchor="middle" fontSize="12" fill="#2563eb">fluido ρf</text>
          {/* objeto imerso */}
          <rect x="160" y="80" width="120" height="80" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="220" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">objeto ρo</text>
          {/* empuxo (para cima) */}
          <line x1="220" y1="80" x2="220" y2="30" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr21a)" />
          <text x="240" y="55" textAnchor="start" fontSize="13" fill="#2563eb">E = ρf·Vf·g</text>
          {/* peso (para baixo) */}
          <line x1="220" y1="160" x2="220" y2="195" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr21b)" />
          <text x="240" y="185" textAnchor="start" fontSize="13" fill="#dc2626">P = ρo·V·g</text>
          {/* condições flutuação */}
          <text x="480" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Condições:</text>
          <text x="480" y="100" textAnchor="middle" fontSize="12" fill="#16a34a">ρo {"<"} ρf → flutua</text>
          <text x="480" y="118" textAnchor="middle" fontSize="12" fill="#2563eb">ρo = ρf → equilíbrio</text>
          <text x="480" y="136" textAnchor="middle" fontSize="12" fill="#dc2626">ρo {">"} ρf → afunda</text>
          <text x="350" y="198" textAnchor="middle" fontSize="13" fill="#0f172a">E = ρ<tspan baselineShift="sub" fontSize="10">fluido</tspan>·V<tspan baselineShift="sub" fontSize="10">submerso</tspan>·g = peso do fluido deslocado</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Prensa hidráulica de Pascal: F1/A1 = F2/A2">
          <defs>
            <marker id="arr21c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr21d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* câmara hidráulica */}
          <path d="M 80 160 L 80 100 L 200 100 L 200 50 L 500 50 L 500 100 L 620 100 L 620 160 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          {/* pistão esquerdo (pequeno) */}
          <rect x="80" y="80" width="120" height="20" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
          <text x="140" y="75" textAnchor="middle" fontSize="12" fill="#475569">A₁ (pequena)</text>
          {/* força F1 */}
          <line x1="140" y1="55" x2="140" y2="80" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr21c)" />
          <text x="155" y="70" textAnchor="start" fontSize="13" fill="#dc2626">F₁</text>
          {/* pistão direito (grande) */}
          <rect x="500" y="60" width="120" height="40" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
          <text x="560" y="55" textAnchor="middle" fontSize="12" fill="#475569">A₂ (grande)</text>
          {/* força F2 */}
          <line x1="560" y1="100" x2="560" y2="130" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr21d)" />
          <text x="575" y="120" textAnchor="start" fontSize="13" fill="#16a34a">F₂</text>
          <text x="350" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">F₁/A₁ = F₂/A₂ → F₂ = F₁·(A₂/A₁)</text>
          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#475569">Vantagem mecânica = A₂/A₁ — ex: freio hidráulico, elevador de carros</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Princípio</th><th>Fórmula</th><th>Condição/Aplicação</th></tr>
          </thead>
          <tbody>
            <tr><td>Empuxo (Arquimedes)</td><td>E = ρf·Vsubm·g</td><td>Vsubm = volume de fluido deslocado</td></tr>
            <tr><td>Flutuação</td><td>E = P → ρf·Vsubm = ρo·V</td><td>ρo &lt; ρf: parte do objeto fica acima</td></tr>
            <tr><td>Prensa hidráulica (Pascal)</td><td>F₁/A₁ = F₂/A₂</td><td>Pressão transmitida integralmente</td></tr>
            <tr><td>Volume submerso (flutuação)</td><td>Vsubm/V = ρo/ρf</td><td>Ex: iceberg — 90% submerso (ρgelo/ρágua ≈ 0,9)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Prensa Hidráulica"
          statement={
            <p>
              Numa prensa hidráulica, o pistão menor tem área <M>{"A_1 = 10\\,\\text{cm}^2"}</M> e o
              maior tem área <M>{"A_2 = 200\\,\\text{cm}^2"}</M>. Uma força <M>{"F_1 = 50\\,\\text{N}"}</M>
              é aplicada no pistão menor. Qual é a força <M>{"F_2"}</M> exercida pelo pistão maior?
            </p>
          }
          options={[
            { letter: "a", text: "500 N" },
            { letter: "b", text: "100 N" },
            { letter: "c", text: "1000 N", correct: true },
            { letter: "d", text: "2000 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"F_2 = F_1 \\cdot \\frac{A_2}{A_1} = 50 \\times \\frac{200}{10} = 50 \\times 20 = 1000\\,\\text{N}"}</M>
              <p>Vantagem mecânica hidráulica = 20. Com apenas 50 N movemos uma carga de 1000 N.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Empuxo em Cubo de Ferro"
          statement={
            <p>
              Um cubo de ferro com aresta <M>{"L = 0{,}5\\,\\text{m}"}</M> é totalmente submerso em água
              (<M>{"\\rho_{agua} = 1000\\,\\text{kg/m}^3"}</M>). Adote <M>{"g = 10\\,\\text{m/s}^2"}</M>.
              Qual é o empuxo que a água exerce sobre o cubo?
            </p>
          }
          options={[
            { letter: "a", text: "500 N" },
            { letter: "b", text: "1250 N", correct: true },
            { letter: "c", text: "2500 N" },
            { letter: "d", text: "250 N" },
          ]}
          resolution={
            <>
              <p>Volume do cubo:</p>
              <M block={true}>{"V = L^3 = (0{,}5)^3 = 0{,}125\\,\\text{m}^3"}</M>
              <M block={true}>{"E = \\rho_{agua}\\,V\\,g = 1000 \\times 0{,}125 \\times 10 = 1250\\,\\text{N}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Percentual Submerso de Bloco de Madeira"
          statement={
            <p>
              Um bloco de madeira com densidade <M>{"\\rho_{mad} = 600\\,\\text{kg/m}^3"}</M> é colocado
              em água (<M>{"\\rho_{agua} = 1000\\,\\text{kg/m}^3"}</M>). Qual é a porcentagem do volume
              do bloco que fica submersa quando está em equilíbrio?
            </p>
          }
          options={[
            { letter: "a", text: "40%" },
            { letter: "b", text: "60%", correct: true },
            { letter: "c", text: "80%" },
            { letter: "d", text: "100%" },
          ]}
          resolution={
            <>
              <p>Em equilíbrio de flutuação, E = P:</p>
              <M block={true}>{"\\rho_{agua}\\,V_{sub}\\,g = \\rho_{mad}\\,V\\,g \\Rightarrow \\frac{V_{sub}}{V} = \\frac{\\rho_{mad}}{\\rho_{agua}} = \\frac{600}{1000} = 0{,}6"}</M>
              <p>60% do volume fica submerso, 40% fica acima da superfície.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Navio e Água do Mar"
          statement={
            <p>
              Um navio desloca <M>{"50{.}000\\,\\text{m}^3"}</M> de água do mar
              (<M>{"\\rho = 1025\\,\\text{kg/m}^3"}</M>). Adote <M>{"g = 10\\,\\text{m/s}^2"}</M>.
              Qual é o peso total do navio (casco + carga + tripulação)?
            </p>
          }
          options={[
            { letter: "a", text: "5×10⁸ N" },
            { letter: "b", text: "5,125×10⁸ N", correct: true },
            { letter: "c", text: "1,025×10⁹ N" },
            { letter: "d", text: "2×10⁸ N" },
          ]}
          resolution={
            <>
              <p>Em equilíbrio de flutuação, P = E:</p>
              <M block={true}>{"P = E = \\rho_{mar}\\,V_{deslocado}\\,g = 1025 \\times 50{.}000 \\times 10 = 5{,}125 \\times 10^8\\,\\text{N}"}</M>
              <p>
                Isso equivale a uma massa de <M>{"5{,}125 \\times 10^7\\,\\text{kg} = 51{.}250\\,\\text{t}"}</M> — um
                navio de médio porte.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Balão de Ar Quente"
          statement={
            <p>
              Um balão de ar quente tem volume <M>{"V = 2000\\,\\text{m}^3"}</M>. A estrutura (cesta,
              queimador e envelope) tem massa <M>{"m_{est} = 300\\,\\text{kg}"}</M>. O ar quente interior
              tem densidade <M>{"\\rho_{qte} = 0{,}9\\,\\text{kg/m}^3"}</M> e o ar frio externo tem
              <M>{"\\rho_{frio} = 1{,}25\\,\\text{kg/m}^3"}</M>. Adote <M>{"g = 10\\,\\text{m/s}^2"}</M>.
              O balão consegue decolar? Qual a carga adicional máxima?
            </p>
          }
          options={[
            { letter: "a", text: "Não decola; falta 100 N de empuxo" },
            { letter: "b", text: "Decola; pode carregar mais 40 kg adicionais", correct: true },
            { letter: "c", text: "Decola; pode carregar mais 400 kg adicionais" },
            { letter: "d", text: "Não decola; o ar quente é muito pesado" },
          ]}
          resolution={
            <>
              <p>Empuxo (força do ar frio sobre o balão):</p>
              <M block={true}>{"E = \\rho_{frio}\\,V\\,g = 1{,}25 \\times 2000 \\times 10 = 25{.}000\\,\\text{N}"}</M>
              <p>Peso do sistema (estrutura + ar quente interior):</p>
              <M block={true}>{"P = (m_{est} + \\rho_{qte}\\,V)\\,g = (300 + 0{,}9 \\times 2000) \\times 10 = (300 + 1800) \\times 10 = 21{.}000\\,\\text{N}"}</M>
              <p>Força resultante: <M>{"E - P = 25{.}000 - 21{.}000 = 4{.}000\\,\\text{N}"}</M> (para cima) → decola!</p>
              <M block={true}>{"m_{adicional} = \\frac{4{.}000}{g} = \\frac{4{.}000}{10} = 400\\,\\text{kg}"}</M>
              <p>
                O balão pode carregar 400 kg adicionais. Com passageiros médios de 70 kg, isso representa
                aproximadamente 5 passageiros além da estrutura.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
