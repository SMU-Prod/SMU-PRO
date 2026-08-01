"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 9</span>
          <h1>As Leis de Newton: Inércia, Dinâmica e Ação-Reação</h1>
          <p>
            As três Leis de Newton são a base de toda a mecânica clássica e estão presentes em praticamente todos os problemas de Física do ENEM e vestibulares.
            Neste capítulo você entenderá a inércia, a relação entre força e aceleração, e o princípio da ação e reação, com exemplos do cotidiano e técnicas de resolução por diagrama de corpo livre.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. Histórico: Galileu e Newton</h2>
        <p>
          Antes de Isaac Newton, a visão aristotélica dominava a física: acreditava-se que um corpo só se movia enquanto houvesse uma força empurrando-o continuamente. Galileu Galilei (1564–1642) foi o primeiro a questionar essa ideia com experimentos em planos inclinados, concluindo que um corpo em movimento tende a permanecer em movimento se não houver resistência.
        </p>
        <p>
          Isaac Newton (1643–1727) sistematizou essas ideias na obra <em>Principia Mathematica</em> (1687), enunciando as três leis fundamentais da dinâmica. Essas leis explicam desde a queda de uma maçã até o movimento dos planetas, e continuam válidas para velocidades muito menores que a da luz.
        </p>
        <div className="lesson-highlight">
          <h3>Base da Mecânica Clássica</h3>
          <p>
            As Leis de Newton são válidas em <strong>referenciais inerciais</strong> — aqueles que não estão em aceleração. Em referenciais não inerciais (acelerados), surgem "forças fictícias" como a força centrífuga e a força de Coriolis, que não têm agente físico real.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Lei</span>
        <h2>2. 1ª Lei de Newton: Princípio da Inércia</h2>
        <p>
          <strong>Enunciado:</strong> "Todo corpo permanece em seu estado de repouso ou de movimento retilíneo uniforme, a menos que seja obrigado a mudar esse estado por forças que sobre ele atuem."
        </p>
        <M block={true}>{"\\vec{F}_{\\text{resultante}} = \\vec{0} \\Rightarrow \\vec{a} = \\vec{0} \\quad (\\text{repouso ou MRU})"}</M>
        <p>
          A <strong>inércia</strong> é a tendência de um corpo resistir a mudanças no seu estado de movimento. Quanto maior a massa, maior a inércia. Um caminhão carregado em alta velocidade precisa de muito mais força para parar do que uma bicicleta na mesma velocidade — ele tem muito mais inércia.
        </p>
        <p>
          Exemplos cotidianos: passageiro que vai para a frente quando o ônibus freia bruscamente; líquido que transborda ao empurrar bruscamente um copo para o lado; a Terra que continua orbitando o Sol indefinidamente (sem atrito no vácuo do espaço).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Massa</span>
        <h2>3. Massa Inercial vs Massa Gravitacional</h2>
        <p>
          Existem dois conceitos distintos de massa, e sua equivalência é um dos fatos mais profundos da física:
        </p>
        <p>
          <strong>Massa inercial:</strong> mede a resistência de um corpo à aceleração. Aparece na 2ª Lei: <M>{"F = m_i \\cdot a"}</M>. Quanto mais massa inercial, mais difícil é acelerar o corpo.
        </p>
        <p>
          <strong>Massa gravitacional:</strong> mede a intensidade da atração gravitacional entre dois corpos. Aparece na Lei da Gravitação Universal: <M>{"F = G \\frac{m_g M}{r^2}"}</M>.
        </p>
        <p>
          Experimentos de altíssima precisão (incluindo os de Eötvös no século XIX) mostram que <M>{"m_i = m_g"}</M> com precisão de 1 parte em 10¹². Essa equivalência entre massa inercial e gravitacional é a base do <strong>Princípio da Equivalência</strong> de Einstein — fundamento da Relatividade Geral.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de Massa</th><th>Definição</th><th>Aparece em</th></tr>
            </thead>
            <tbody>
              <tr><td>Inercial (m_i)</td><td>Resistência à aceleração</td><td>F = m·a</td></tr>
              <tr><td>Gravitacional (m_g)</td><td>Intensidade da atração gravitacional</td><td>F = GMm/r²</td></tr>
              <tr><td>Equivalência</td><td>m_i = m_g (verificado experimentalmente)</td><td>Base da Relatividade Geral</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2ª Lei</span>
        <h2>4. 2ª Lei de Newton: F = ma</h2>
        <p>
          <strong>Enunciado:</strong> "A aceleração de um corpo é diretamente proporcional à força resultante sobre ele e inversamente proporcional à sua massa, tendo a mesma direção e sentido da força resultante."
        </p>
        <M block={true}>{"\\vec{F}_{\\text{resultante}} = m \\cdot \\vec{a}"}</M>
        <p>
          A aceleração tem sempre a mesma direção e sentido da força resultante. Se a resultante for zero, a aceleração é zero (corpo em equilíbrio — 1ª Lei é caso particular da 2ª). A 2ª Lei é vetorial: cada componente deve ser analisada separadamente por eixo de coordenadas:
        </p>
        <M block={true}>{"\\sum F_x = m a_x \\qquad \\sum F_y = m a_y"}</M>
        <div className="lesson-highlight">
          <h3>Força Resultante: Soma Vetorial</h3>
          <p>
            A força resultante é a soma vetorial de todas as forças que agem sobre o corpo. Forças colineares em sentidos opostos se subtraem; forças perpendiculares se combinam pelo Teorema de Pitágoras: <M>{"F_R = \\sqrt{F_x^2 + F_y^2}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Unidades</span>
        <h2>5. Unidade de Força: Newton (N = kg·m/s²)</h2>
        <p>
          A unidade de força no Sistema Internacional (SI) é o <strong>Newton (N)</strong>, definido como a força necessária para dar uma aceleração de 1 m/s² a uma massa de 1 kg:
        </p>
        <M block={true}>{"1 \\text{ N} = 1 \\text{ kg} \\cdot \\frac{\\text{m}}{\\text{s}^2}"}</M>
        <p>
          Para referência: o peso de uma maçã média (100 g) é aproximadamente 1 N. O peso de uma pessoa de 70 kg é 700 N (usando g = 10 m/s²). Forças musculares humanas variam de poucos N (dedo) a centenas de N (pernas).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grandeza</th><th>Símbolo</th><th>Unidade SI</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Força</td><td>F</td><td>Newton (N)</td><td>kg·m/s²</td></tr>
              <tr><td>Massa</td><td>m</td><td>quilograma (kg)</td><td>quantidade de matéria</td></tr>
              <tr><td>Aceleração</td><td>a</td><td>m/s²</td><td>variação de velocidade por tempo</td></tr>
              <tr><td>Peso</td><td>P</td><td>Newton (N)</td><td>P = mg</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Corpo Livre</span>
        <h2>6. Resultante de Forças: Diagrama de Corpo Livre (DCL)</h2>
        <p>
          O <strong>Diagrama de Corpo Livre (DCL)</strong> é a ferramenta essencial para aplicar a 2ª Lei. Isola-se o corpo de interesse e representam-se todas as forças que agem sobre ele como vetores partindo do centro de massa:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Diagrama de corpo livre de um bloco com peso, normal, tração e atrito">
            <rect x="50" y="175" width="300" height="10" fill="#d1d5db" />
            {/* hatching for floor */}
            {Array.from({length: 10}).map((_, i) => (
              <line key={i} x1={55 + i*30} y1="185" x2={45 + i*30} y2="200" stroke="#9ca3af" strokeWidth="1.5" />
            ))}
            <rect x="160" y="125" width="80" height="50" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" rx="4" />
            <text x="190" y="155" fontSize="14" fill="#1e40af" fontWeight="bold">m</text>
            {/* Weight arrow down */}
            <line x1="200" y1="175" x2="200" y2="218" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="200,222 195,210 205,210" fill="#dc2626" />
            <text x="207" y="218" fontSize="13" fill="#dc2626" fontWeight="bold">P = mg</text>
            {/* Normal arrow up */}
            <line x1="200" y1="125" x2="200" y2="78" stroke="#16a34a" strokeWidth="2.5" />
            <polygon points="200,73 195,86 205,86" fill="#16a34a" />
            <text x="207" y="83" fontSize="13" fill="#16a34a" fontWeight="bold">N</text>
            {/* Tension arrow right */}
            <line x1="240" y1="150" x2="308" y2="150" stroke="#7c3aed" strokeWidth="2.5" />
            <polygon points="313,150 300,145 300,155" fill="#7c3aed" />
            <text x="315" y="155" fontSize="13" fill="#7c3aed" fontWeight="bold">T</text>
            {/* Friction arrow left */}
            <line x1="160" y1="150" x2="92" y2="150" stroke="#d97706" strokeWidth="2.5" />
            <polygon points="87,150 100,145 100,155" fill="#d97706" />
            <text x="54" y="145" fontSize="13" fill="#d97706" fontWeight="bold">f</text>
            <text x="60" y="228" fontSize="10" fill="#374151">DCL: eixo y → N - P = 0 ; eixo x → T - f = ma</text>
          </svg>
          <figcaption>Diagrama de Corpo Livre: bloco sobre superfície horizontal sujeito a peso (P) para baixo, força normal (N) para cima, tração (T) para a direita e atrito (f) para a esquerda. Aplica-se a 2ª Lei separadamente em cada eixo.</figcaption>
        </figure>
        <p>
          No eixo vertical: <M>{"N - mg = 0 \\Rightarrow N = mg"}</M> (sem aceleração vertical). No eixo horizontal: <M>{"T - f = m \\cdot a"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3ª Lei</span>
        <h2>7. 3ª Lei de Newton: Ação e Reação</h2>
        <p>
          <strong>Enunciado:</strong> "Quando um corpo A exerce uma força sobre um corpo B, o corpo B exerce sobre o corpo A uma força de mesma intensidade, mesma direção e sentido oposto."
        </p>
        <M block={true}>{"\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}"}</M>
        <p>
          As forças de ação e reação <strong>NUNCA se anulam</strong>, pois agem em corpos diferentes. Quando estudamos o movimento de um único corpo no DCL, representamos apenas as forças que agem <em>sobre ele</em> — não a reação que ele exerce sobre outro corpo.
        </p>
        <div className="lesson-highlight">
          <h3>Características do Par Ação-Reação</h3>
          <p>
            Todo par de forças ação-reação: (1) tem mesma natureza física (ambas gravitacionais, ou ambas de contato); (2) mesmo módulo; (3) mesma direção; (4) sentidos opostos; (5) agem em corpos diferentes; (6) surgem e desaparecem simultaneamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos da 3ª Lei</span>
        <h2>8. Exemplos da 3ª Lei: Foguete, Natação e Recuo de Arma</h2>
        <p>
          <strong>Foguete:</strong> Os gases são expelidos para trás com grande velocidade (ação). O foguete é empurrado para a frente (reação). Nenhum meio de apoio é necessário — funciona perfeitamente no vácuo do espaço.
        </p>
        <p>
          <strong>Natação:</strong> O nadador empurra a água para trás com as mãos e pés (ação). A água empurra o nadador para a frente (reação). Quanto maior a força exercida na água, maior a força de propulsão.
        </p>
        <p>
          <strong>Recuo de arma de fogo:</strong> A explosão empurra a bala para a frente (ação). A mesma explosão empurra a arma para trás — o recuo (reação). Como a massa da arma é muito maior que a da bala, ela recua com velocidade muito menor, pela conservação do momento linear.
        </p>
        <p>
          <strong>Caminhada:</strong> O pé empurra o chão para trás e para baixo (ação). O chão empurra o pé para a frente e para cima — é o atrito estático que nos permite andar (reação).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica</span>
        <h2>9. Técnica do DCL: Passo a Passo</h2>
        <p>Para resolver qualquer problema de dinâmica newtoniana, siga este roteiro:</p>
        <p><strong>1. Identifique o sistema:</strong> qual corpo (ou conjunto) você vai analisar.</p>
        <p><strong>2. Isole e represente:</strong> desenhe o DCL com todas as forças sobre o corpo.</p>
        <p><strong>3. Escolha eixos:</strong> x na direção do movimento (ou da aceleração esperada), y perpendicular.</p>
        <p><strong>4. Aplique a 2ª Lei:</strong> <M>{"\\sum F_x = ma"}</M> e <M>{"\\sum F_y = 0"}</M> (se não há aceleração vertical).</p>
        <p><strong>5. Resolva:</strong> sistema de equações para encontrar as incógnitas.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistema de Blocos</span>
        <h2>10. Sistema de Blocos Ligados por Fio: Aceleração Comum</h2>
        <p>
          Dois blocos de massas <M>{"m_1"}</M> e <M>{"m_2"}</M> ligados por fio ideal sobre superfície sem atrito, com força <M>{"F"}</M> aplicada em <M>{"m_1"}</M>:
        </p>
        <M block={true}>{"a = \\frac{F}{m_1 + m_2} \\quad \\text{(aceleração comum do sistema)}"}</M>
        <p>Para encontrar a tensão T no fio, analise apenas o bloco <M>{"m_2"}</M>:</p>
        <M block={true}>{"T = m_2 \\cdot a = \\frac{m_2 \\cdot F}{m_1 + m_2}"}</M>
        <p>
          Com atrito <M>{"f"}</M> na superfície: <M>{"a = (F - f)/(m_1 + m_2)"}</M>. A tensão no fio entre os blocos é sempre menor que a força aplicada.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">As Três Leis</span>
        <h2>11. Tabela das 3 Leis de Newton</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Lei</th><th>Nome</th><th>Condição</th><th>Fórmula</th><th>Exemplo clássico</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª</td>
                <td>Inércia</td>
                <td>Sem força resultante</td>
                <td><M>{"\\vec{F}_R = 0 \\Rightarrow a = 0"}</M></td>
                <td>Puck de hóquei no gelo</td>
              </tr>
              <tr>
                <td>2ª</td>
                <td>Dinâmica (F=ma)</td>
                <td>Força resultante não nula</td>
                <td><M>{"\\vec{F} = m\\vec{a}"}</M></td>
                <td>Empurrar carrinho de supermercado</td>
              </tr>
              <tr>
                <td>3ª</td>
                <td>Ação e Reação</td>
                <td>Interação entre dois corpos</td>
                <td><M>{"\\vec{F}_{AB} = -\\vec{F}_{BA}"}</M></td>
                <td>Foguete expelindo gases</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Leis de Newton</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>1ª Lei</span>
            <h3>Inércia</h3>
            <M block={true}>{"\\vec{F}_R = 0 \\Rightarrow \\vec{a} = 0"}</M>
          </div>
          <div className="math-card">
            <span>2ª Lei</span>
            <h3>Dinâmica</h3>
            <M block={true}>{"\\vec{F}_R = m \\cdot \\vec{a}"}</M>
          </div>
          <div className="math-card">
            <span>3ª Lei</span>
            <h3>Ação e Reação</h3>
            <M block={true}>{"\\vec{F}_{AB} = -\\vec{F}_{BA}"}</M>
          </div>
          <div className="math-card">
            <span>Sistema</span>
            <h3>Blocos Ligados</h3>
            <M block={true}>{"a = \\frac{F}{m_1 + m_2}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Força</span>
        <h2>Síntese Visual: Diagrama de Corpo Livre</h2>
        <p>
          Identificar corretamente todas as forças sobre um corpo é o passo
          essencial antes de aplicar a 2ª Lei de Newton.
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Diagrama de corpo livre: bloco sobre plano inclinado">
          <defs>
            <marker id="arr09a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr09b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr09c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* plano inclinado */}
          <polygon points="100,200 500,200 500,80" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <text x="200" y="215" textAnchor="middle" fontSize="12" fill="#64748b">θ</text>
          {/* bloco */}
          <rect x="340" y="110" width="60" height="50" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" transform="rotate(-20, 370, 135)" />
          <text x="370" y="138" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">m</text>
          {/* Peso (para baixo) */}
          <line x1="370" y1="145" x2="370" y2="205" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr09a)" />
          <text x="385" y="185" textAnchor="start" fontSize="12" fill="#dc2626">P = mg</text>
          {/* Normal (perpendicular ao plano) */}
          <line x1="370" y1="118" x2="325" y2="65" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr09c)" />
          <text x="305" y="60" textAnchor="end" fontSize="12" fill="#16a34a">N</text>
          {/* Atrito (subindo o plano) */}
          <line x1="355" y1="128" x2="290" y2="105" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr09b)" />
          <text x="270" y="100" textAnchor="end" fontSize="12" fill="#f59e0b">fat</text>
          {/* ângulo */}
          <text x="420" y="200" textAnchor="middle" fontSize="13" fill="#0f172a">P‖ = mg·sen θ (desce o plano)</text>
          <text x="420" y="218" textAnchor="middle" fontSize="13" fill="#0f172a">N = mg·cos θ</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="3ª Lei de Newton: ação e reação em dois blocos">
          <defs>
            <marker id="arr09d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr09e" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* bloco A */}
          <rect x="100" y="80" width="180" height="70" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="190" y="120" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9d174d">A</text>
          {/* bloco B */}
          <rect x="420" y="80" width="180" height="70" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="510" y="120" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1d4ed8">B</text>
          {/* F_AB (A empurra B → direita) */}
          <line x1="280" y1="115" x2="418" y2="115" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arr09d)" />
          <text x="350" y="105" textAnchor="middle" fontSize="13" fill="#dc2626">F<tspan baselineShift="sub" fontSize="10">AB</tspan></text>
          {/* F_BA (B empurra A ← esquerda) */}
          <line x1="420" y1="130" x2="282" y2="130" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arr09e)" />
          <text x="350" y="148" textAnchor="middle" fontSize="13" fill="#2563eb">F<tspan baselineShift="sub" fontSize="10">BA</tspan></text>
          <text x="350" y="185" textAnchor="middle" fontSize="13" fill="#0f172a">|F<tspan baselineShift="sub" fontSize="10">AB</tspan>| = |F<tspan baselineShift="sub" fontSize="10">BA</tspan>| — mesma intensidade, sentidos opostos, corpos diferentes</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Força Resultante e Aceleração"
          statement={<p>Uma força resultante de 60 N é aplicada a um bloco de 12 kg sobre uma superfície sem atrito. Qual é a aceleração do bloco?</p>}
          options={[
            { letter: "a", text: "0,2 m/s²" },
            { letter: "b", text: "5 m/s²", correct: true },
            { letter: "c", text: "12 m/s²" },
            { letter: "d", text: "720 m/s²" },
          ]}
          resolution={
            <>
              <M block={true}>{"F = ma \\Rightarrow a = \\frac{F}{m} = \\frac{60}{12} = 5 \\text{ m/s}^2"}</M>
              <p>Aplicação direta da 2ª Lei de Newton. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Sistema de Dois Blocos com Fio"
          statement={<p>Dois blocos de 3 kg e 5 kg estão ligados por um fio ideal sobre superfície sem atrito. Uma força F = 32 N é aplicada horizontalmente no bloco de 5 kg. Calcule a aceleração do sistema e a tensão no fio.</p>}
          options={[
            { letter: "a", text: "a = 5 m/s² e T = 15 N" },
            { letter: "b", text: "a = 4 m/s² e T = 12 N", correct: true },
            { letter: "c", text: "a = 4 m/s² e T = 20 N" },
            { letter: "d", text: "a = 6 m/s² e T = 18 N" },
          ]}
          resolution={
            <>
              <p><strong>Aceleração do sistema:</strong></p>
              <M block={true}>{"a = \\frac{F}{m_1 + m_2} = \\frac{32}{5 + 3} = 4 \\text{ m/s}^2"}</M>
              <p><strong>Tensão (analisando só o bloco de 3 kg):</strong></p>
              <M block={true}>{"T = m_2 \\cdot a = 3 \\times 4 = 12 \\text{ N}"}</M>
              <p>Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Bloco em Plano Inclinado 30°"
          statement={<p>Um bloco de 10 kg é colocado em um plano inclinado de 30° (sem atrito). Usando g = 10 m/s², calcule a força resultante sobre o bloco e sua aceleração. (sen 30° = 0,5; cos 30° ≈ 0,87)</p>}
          options={[
            { letter: "a", text: "F = 87 N e a = 8,7 m/s²" },
            { letter: "b", text: "F = 50 N e a = 5 m/s²", correct: true },
            { letter: "c", text: "F = 100 N e a = 10 m/s²" },
            { letter: "d", text: "F = 30 N e a = 3 m/s²" },
          ]}
          resolution={
            <>
              <p>A componente do peso paralela ao plano é a resultante (sem atrito):</p>
              <M block={true}>{"F_R = mg \\cdot \\text{sen}\\,30° = 10 \\times 10 \\times 0{,}5 = 50 \\text{ N}"}</M>
              <M block={true}>{"a = \\frac{F_R}{m} = \\frac{50}{10} = 5 \\text{ m/s}^2"}</M>
              <p>A normal é N = mg·cos30° = 87 N, perpendicular ao plano. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Cinto de Segurança e Inércia"
          statement={<p>Um carro trafega a 72 km/h quando freia bruscamente e para em 4 segundos. Um passageiro de 70 kg não usa cinto. Que lei explica o que acontece com o passageiro? Qual força o cinto deveria exercer para detê-lo junto com o carro?</p>}
          options={[
            { letter: "a", text: "3ª Lei: reação do banco; F ≈ 350 N" },
            { letter: "b", text: "1ª Lei: inércia; F ≈ 350 N", correct: true },
            { letter: "c", text: "2ª Lei: aceleração do carro; F ≈ 700 N" },
            { letter: "d", text: "1ª Lei: inércia; F ≈ 70 N" },
          ]}
          resolution={
            <>
              <p><strong>Lei envolvida:</strong> 1ª Lei de Newton — o passageiro tende a manter sua velocidade de 72 km/h = 20 m/s.</p>
              <M block={true}>{"a_{\\text{freio}} = \\frac{\\Delta v}{\\Delta t} = \\frac{20}{4} = 5 \\text{ m/s}^2"}</M>
              <M block={true}>{"F_{\\text{cinto}} = m \\cdot a = 70 \\times 5 = 350 \\text{ N}"}</M>
              <p>Sem o cinto, o passageiro continua em movimento para a frente enquanto o carro para — podendo colidir violentamente com o painel. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Propulsão de Foguete pela 3ª Lei"
          statement={<p>Um foguete de massa 5000 kg expele gases a uma taxa de 50 kg/s com velocidade de saída de 3000 m/s. Qual é o empuxo (thrust) gerado e a aceleração inicial (sem gravidade)?</p>}
          options={[
            { letter: "a", text: "Empuxo = 15.000 N e a = 3 m/s²" },
            { letter: "b", text: "Empuxo = 150.000 N e a = 30 m/s²", correct: true },
            { letter: "c", text: "Empuxo = 1.500.000 N e a = 300 m/s²" },
            { letter: "d", text: "Empuxo = 50.000 N e a = 10 m/s²" },
          ]}
          resolution={
            <>
              <p>Pela 3ª Lei, a força que o foguete exerce nos gases para trás é igual e oposta ao empuxo para a frente:</p>
              <M block={true}>{"F_{\\text{empuxo}} = \\dot{m} \\cdot v_{\\text{gases}} = 50 \\times 3000 = 150{.}000 \\text{ N}"}</M>
              <M block={true}>{"a = \\frac{F}{m} = \\frac{150{.}000}{5000} = 30 \\text{ m/s}^2"}</M>
              <p>Os gases saem para baixo (ação) e o foguete é empurrado para cima (reação) — princípio da propulsão a jato. Alternativa b.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
