"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 19</span>
          <h1>Tipos de Alavancas, Vínculos e Centro de Gravidade</h1>
          <p>
            Tesouras, carrinhos de mão, pinças — todos são alavancas. Entenda as três classes de alavancas,
            como os vínculos condicionam o equilíbrio e onde está o centro de gravidade de qualquer objeto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Alavanca — Elementos Básicos</h2>
        <p>
          Uma <strong>alavanca</strong> é uma barra rígida que pode girar em torno de um ponto fixo chamado
          <strong> fulcro</strong> (ou pivô). Três elementos definem qualquer alavanca:
        </p>
        <ul>
          <li><strong>Potência (P):</strong> a força aplicada pelo operador.</li>
          <li><strong>Resistência (R):</strong> a força que se deseja vencer (carga).</li>
          <li><strong>Fulcro (F):</strong> o ponto de apoio (pivô).</li>
        </ul>
        <p>
          O princípio de funcionamento é o equilíbrio de torques:
        </p>
        <M block={true}>{"P \\cdot d_P = R \\cdot d_R"}</M>
        <p>
          onde <M>{"d_P"}</M> e <M>{"d_R"}</M> são os braços de alavanca da potência e da resistência, respectivamente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Classe</span>
        <h2>2. Alavanca de 1ª Classe (Interpotente)</h2>
        <p>
          Na alavanca de <strong>1ª classe</strong>, o <em>fulcro</em> está localizado entre a potência
          e a resistência. Pode produzir vantagem mecânica (se <M>{"d_P > d_R"}</M>) ou desvantagem
          (se <M>{"d_P < d_R"}</M>), dependendo das posições.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos do cotidiano</h3>
          <p>Balança de dois pratos, tesoura, alicate, pé de cabra, gangorra.</p>
        </div>
        <M block={true}>{"\\text{1ª classe: } \\underbrace{P}_{\\text{potência}} \\cdots \\underbrace{F}_{\\text{fulcro}} \\cdots \\underbrace{R}_{\\text{resistência}}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2ª Classe</span>
        <h2>3. Alavanca de 2ª Classe (Inter-resistente)</h2>
        <p>
          Na alavanca de <strong>2ª classe</strong>, a <em>resistência</em> fica entre o fulcro e a
          potência. Sempre produz vantagem mecânica (<M>{"d_P > d_R"}</M>), pois a potência atua no
          braço mais longo.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos do cotidiano</h3>
          <p>Carrinho de mão (a carga fica entre a roda e as alças), abridor de garrafa, quebra-nozes.</p>
        </div>
        <M block={true}>{"\\text{2ª classe: } \\underbrace{F}_{\\text{fulcro}} \\cdots \\underbrace{R}_{\\text{resistência}} \\cdots \\underbrace{P}_{\\text{potência}}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3ª Classe</span>
        <h2>4. Alavanca de 3ª Classe (Interesforço)</h2>
        <p>
          Na alavanca de <strong>3ª classe</strong>, a <em>potência</em> age entre o fulcro e a
          resistência. Sempre produz desvantagem mecânica (<M>{"d_P < d_R"}</M>), mas amplifica o
          deslocamento e a velocidade. É por isso que músculos do braço humano conseguem movimentos rápidos.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos do cotidiano</h3>
          <p>Pinça, boca (maxilar inferior), bíceps braquial, pá de cavar.</p>
        </div>
        <M block={true}>{"\\text{3ª classe: } \\underbrace{F}_{\\text{fulcro}} \\cdots \\underbrace{P}_{\\text{potência}} \\cdots \\underbrace{R}_{\\text{resistência}}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vantagem</span>
        <h2>5. Vantagem Mecânica</h2>
        <p>
          A <strong>vantagem mecânica</strong> (VM) quantifica o ganho de força proporcionado pela alavanca:
        </p>
        <M block={true}>{"VM = \\frac{R}{P} = \\frac{d_P}{d_R}"}</M>
        <p>
          <M>{"VM > 1"}</M>: a alavanca amplifica a força (1ª ou 2ª classe favorável). <br/>
          <M>{"VM < 1"}</M>: a alavanca amplifica o deslocamento/velocidade (3ª classe ou 1ª desfavorável). <br/>
          <M>{"VM = 1"}</M>: fulcro no centro — sem ganho de força, apenas mudança de direção.
        </p>
        <div className="lesson-highlight">
          <h3>Conservação de energia na alavanca</h3>
          <p>
            A alavanca ideal não cria nem destrói energia. Se a força é multiplicada, o deslocamento é
            dividido pela mesma razão: <M>{"W = P \\cdot d_{P,deslocamento} = R \\cdot d_{R,deslocamento}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. As Três Classes de Alavanca</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 210" width="420" height="210" aria-label="Três classes de alavanca com posições relativas de P, F e R">
            {/* === 1ª CLASSE === */}
            <text x="65" y="18" fontSize="11" fill="#333" fontWeight="bold" textAnchor="middle">1ª Classe</text>
            <rect x="15" y="55" width="100" height="8" fill="#8B7355" rx="2"/>
            {/* Fulcro triângulo no centro */}
            <polygon points="65,63 75,80 55,80" fill="#555"/>
            <line x1="48" y1="80" x2="82" y2="80" stroke="#555" strokeWidth="2"/>
            {/* P esquerda */}
            <line x1="28" y1="30" x2="28" y2="55" stroke="#3b82f6" strokeWidth="2"/>
            <text x="22" y="26" fontSize="11" fill="#3b82f6" fontWeight="bold">P</text>
            {/* R direita */}
            <line x1="102" y1="30" x2="102" y2="55" stroke="#e07b39" strokeWidth="2"/>
            <text x="96" y="26" fontSize="11" fill="#e07b39" fontWeight="bold">R</text>
            <text x="61" y="97" fontSize="9" fill="#555" textAnchor="middle">F entre P e R</text>

            {/* Separadores verticais */}
            <line x1="145" y1="10" x2="145" y2="110" stroke="#ddd" strokeWidth="1"/>
            <line x1="285" y1="10" x2="285" y2="110" stroke="#ddd" strokeWidth="1"/>

            {/* === 2ª CLASSE === */}
            <text x="213" y="18" fontSize="11" fill="#333" fontWeight="bold" textAnchor="middle">2ª Classe</text>
            <rect x="158" y="55" width="110" height="8" fill="#8B7355" rx="2"/>
            {/* Fulcro triângulo na esquerda */}
            <polygon points="168,63 178,80 158,80" fill="#555"/>
            <line x1="150" y1="80" x2="184" y2="80" stroke="#555" strokeWidth="2"/>
            {/* R no centro */}
            <line x1="213" y1="30" x2="213" y2="55" stroke="#e07b39" strokeWidth="2"/>
            <text x="207" y="26" fontSize="11" fill="#e07b39" fontWeight="bold">R</text>
            {/* P na extremidade direita */}
            <line x1="263" y1="30" x2="263" y2="55" stroke="#3b82f6" strokeWidth="2"/>
            <text x="257" y="26" fontSize="11" fill="#3b82f6" fontWeight="bold">P</text>
            <text x="213" y="97" fontSize="9" fill="#555" textAnchor="middle">R entre F e P</text>

            {/* === 3ª CLASSE === */}
            <text x="353" y="18" fontSize="11" fill="#333" fontWeight="bold" textAnchor="middle">3ª Classe</text>
            <rect x="298" y="55" width="110" height="8" fill="#8B7355" rx="2"/>
            {/* Fulcro triângulo na esquerda */}
            <polygon points="308,63 318,80 298,80" fill="#555"/>
            <line x1="290" y1="80" x2="324" y2="80" stroke="#555" strokeWidth="2"/>
            {/* P entre fulcro e resistência */}
            <line x1="340" y1="30" x2="340" y2="55" stroke="#3b82f6" strokeWidth="2"/>
            <text x="334" y="26" fontSize="11" fill="#3b82f6" fontWeight="bold">P</text>
            {/* R na extremidade direita */}
            <line x1="400" y1="30" x2="400" y2="55" stroke="#e07b39" strokeWidth="2"/>
            <text x="394" y="26" fontSize="11" fill="#e07b39" fontWeight="bold">R</text>
            <text x="353" y="97" fontSize="9" fill="#555" textAnchor="middle">P entre F e R</text>

            {/* Legenda */}
            <rect x="30" y="120" width="10" height="10" fill="#3b82f6" opacity="0.8"/>
            <text x="44" y="129" fontSize="10" fill="#555">P = Potência</text>
            <rect x="30" y="138" width="10" height="10" fill="#e07b39" opacity="0.8"/>
            <text x="44" y="147" fontSize="10" fill="#555">R = Resistência</text>
            <polygon points="150,128 160,148 140,148" fill="#555" transform="scale(0.5) translate(152,130)"/>
            <text x="180" y="129" fontSize="10" fill="#555">F = Fulcro (pivô)</text>
          </svg>
          <figcaption>As três classes de alavanca diferem pela posição relativa de P (potência), R (resistência) e F (fulcro). A 2ª classe sempre oferece vantagem mecânica; a 3ª classe amplifica deslocamento.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estruturas</span>
        <h2>7. Vínculos — Tipos de Apoio</h2>
        <p>
          Um <strong>vínculo</strong> é uma restrição imposta ao movimento de uma estrutura. O tipo de
          apoio determina quais reações ele pode exercer:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de vínculo</th>
                <th>Graus de liberdade restritos</th>
                <th>Reações possíveis</th>
                <th>Incógnitas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apoio simples (rolete)</td>
                <td>Translação ⊥ à superfície</td>
                <td>Força normal</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Apoio articulado (pino)</td>
                <td>Todas as translações</td>
                <td>Força em qualquer direção (Rx, Ry)</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Engaste (fixo na parede)</td>
                <td>Translação + rotação</td>
                <td>Fx, Fy e momento fletor M</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para determinar as reações, é necessário ter o mesmo número de equações de equilíbrio que
          incógnitas. Se as incógnitas forem mais que 3, a estrutura é <strong>hiperestática</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Centro de Gravidade</span>
        <h2>8. Cálculo do Centro de Gravidade</h2>
        <p>
          Para um sistema discreto de partículas ou corpos com massas <M>{"m_i"}</M> em posições
          <M>{"(x_i, y_i)"}</M>:
        </p>
        <M block={true}>{"x_{CG} = \\frac{\\sum m_i x_i}{\\sum m_i} \\qquad y_{CG} = \\frac{\\sum m_i y_i}{\\sum m_i}"}</M>
        <p>
          Para corpos homogêneos (densidade uniforme), a massa <M>{"m_i"}</M> pode ser substituída pela
          área (2D) ou volume (3D) da subpeça, pois <M>{"m = \\rho V"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Geometria</span>
        <h2>9. CG de Formas Planas Simples</h2>
        <p>
          Alguns CGs importantes para composição de corpos planos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Posição do CG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retângulo</td>
                <td>Interseção das diagonais (centro geométrico)</td>
              </tr>
              <tr>
                <td>Triângulo</td>
                <td>Interseção das medianas (1/3 de cada lado)</td>
              </tr>
              <tr>
                <td>Círculo / semicírculo</td>
                <td>Centro / <M>{"4r/(3\\pi)"}</M> do diâmetro</td>
              </tr>
              <tr>
                <td>L ou T (composição)</td>
                <td>Média ponderada dos CGs das partes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estabilidade</span>
        <h2>10. Estabilidade e Base de Apoio</h2>
        <p>
          A estabilidade de um objeto depende da posição do CG em relação à base de apoio:
        </p>
        <ul>
          <li><strong>Equilíbrio estável:</strong> o CG está baixo e a base é larga. Pequenas perturbações
            geram torques restauradores. Exemplo: pirâmide.</li>
          <li><strong>Equilíbrio instável:</strong> o CG está acima do pivô. Qualquer perturbação derruba
            o objeto. Exemplo: lápis em pé na ponta.</li>
          <li><strong>Equilíbrio indiferente:</strong> o CG permanece na mesma altura independentemente
            da orientação. Exemplo: esfera em superfície plana.</li>
        </ul>
        <p>
          Um carro capota quando o torque do peso (em relação à roda de fora da curva) supera o torque
          restaurador. Isso ocorre mais facilmente com CG alto (SUVs) que com CG baixo (carros esportivos):
        </p>
        <M block={true}>{"\\text{Capota se: } P \\cdot d_{horizontal} > 0 \\quad \\Leftrightarrow \\quad \\text{CG sai da base de apoio}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Biomecânica</span>
        <h2>11. Alavancas do Corpo Humano</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Articulação</th>
                <th>Músculo</th>
                <th>Classe</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cotovelo (flexão)</td>
                <td>Bíceps braquial</td>
                <td>3ª</td>
                <td>Amplifica deslocamento da mão; força muscular &gt; carga</td>
              </tr>
              <tr>
                <td>Tornozelo (flexão plantar)</td>
                <td>Gastrocnêmio (panturrilha)</td>
                <td>2ª</td>
                <td>Vantagem mecânica; sustenta peso do corpo</td>
              </tr>
              <tr>
                <td>Pescoço (extensão)</td>
                <td>Músculos cervicais posteriores</td>
                <td>1ª</td>
                <td>Equilíbrio da cabeça sobre a coluna</td>
              </tr>
              <tr>
                <td>Mandíbula (mastigação)</td>
                <td>Masseter</td>
                <td>3ª</td>
                <td>Força de mordida amplificada pelos molares</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Al.</span>
            <h3>Lei da Alavanca</h3>
            <M block={true}>{"P \\cdot d_P = R \\cdot d_R"}</M>
          </div>
          <div className="math-card">
            <span>VM</span>
            <h3>Vantagem Mecânica</h3>
            <M block={true}>{"VM = \\frac{d_P}{d_R} = \\frac{R}{P}"}</M>
          </div>
          <div className="math-card">
            <span>CG</span>
            <h3>Centro de Gravidade</h3>
            <M block={true}>{"x_{CG} = \\frac{\\sum m_i x_i}{M}"}</M>
          </div>
          <div className="math-card">
            <span>1ª</span>
            <h3>1ª Classe</h3>
            <M block={true}>{"P \\cdots F \\cdots R"}</M>
          </div>
          <div className="math-card">
            <span>2ª</span>
            <h3>2ª Classe</h3>
            <M block={true}>{"F \\cdots R \\cdots P"}</M>
          </div>
          <div className="math-card">
            <span>3ª</span>
            <h3>3ª Classe</h3>
            <M block={true}>{"F \\cdots P \\cdots R"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Alavanca</span>
        <h2>Síntese Visual: Classes de Alavancas</h2>
        <p>
          Identificar a classe de uma alavanca é determinar a posição relativa de
          Fulcro (F), Potência (P) e Resistência (R).
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Três classes de alavanca">
          {/* 1ª classe: F no meio */}
          <line x1="60" y1="70" x2="300" y2="70" stroke="#1e293b" strokeWidth="3" />
          <circle cx="180" cy="70" r="8" fill="#dc2626" />
          <text x="180" y="90" textAnchor="middle" fontSize="11" fill="#dc2626">F</text>
          <line x1="80" y1="55" x2="80" y2="30" stroke="#2563eb" strokeWidth="2" />
          <text x="80" y="25" textAnchor="middle" fontSize="11" fill="#2563eb">P↓</text>
          <line x1="280" y1="55" x2="280" y2="30" stroke="#16a34a" strokeWidth="2" />
          <text x="280" y="25" textAnchor="middle" fontSize="11" fill="#16a34a">R↓</text>
          <text x="180" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">1ª Classe — tesoura, gangorra</text>

          {/* 2ª classe: R no meio */}
          <line x1="60" y1="160" x2="300" y2="160" stroke="#1e293b" strokeWidth="3" />
          <circle cx="60" cy="160" r="8" fill="#dc2626" />
          <text x="60" y="180" textAnchor="middle" fontSize="11" fill="#dc2626">F</text>
          <line x1="180" y1="145" x2="180" y2="120" stroke="#16a34a" strokeWidth="2" />
          <text x="180" y="115" textAnchor="middle" fontSize="11" fill="#16a34a">R↓</text>
          <line x1="285" y1="145" x2="285" y2="120" stroke="#2563eb" strokeWidth="2" />
          <text x="285" y="115" textAnchor="middle" fontSize="11" fill="#2563eb">P↓</text>
          <text x="180" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">2ª Classe — carrinho de mão</text>

          {/* 3ª classe: P no meio */}
          <line x1="400" y1="120" x2="640" y2="120" stroke="#1e293b" strokeWidth="3" />
          <circle cx="400" cy="120" r="8" fill="#dc2626" />
          <text x="400" y="140" textAnchor="middle" fontSize="11" fill="#dc2626">F</text>
          <line x1="500" y1="105" x2="500" y2="80" stroke="#2563eb" strokeWidth="2" />
          <text x="500" y="75" textAnchor="middle" fontSize="11" fill="#2563eb">P↓</text>
          <line x1="620" y1="105" x2="620" y2="80" stroke="#16a34a" strokeWidth="2" />
          <text x="620" y="75" textAnchor="middle" fontSize="11" fill="#16a34a">R↓</text>
          <text x="520" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">3ª Classe — pinça, boca</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Centro de gravidade de objeto composto">
          <defs>
            <marker id="arr19a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          <rect x="80" y="60" width="200" height="100" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="180" y="115" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">m₁ = 4 kg</text>
          <circle cx="180" cy="110" r="5" fill="#2563eb" />
          <text x="180" y="178" textAnchor="middle" fontSize="12" fill="#2563eb">x₁ = 2 m</text>
          <rect x="380" y="80" width="120" height="80" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="440" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">m₂ = 2 kg</text>
          <circle cx="440" cy="120" r="5" fill="#16a34a" />
          <text x="440" y="178" textAnchor="middle" fontSize="12" fill="#16a34a">x₂ = 5 m</text>
          <circle cx="267" cy="115" r="8" fill="#dc2626" />
          <line x1="267" y1="60" x2="267" y2="30" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr19a)" />
          <text x="267" y="25" textAnchor="middle" fontSize="12" fill="#dc2626">CG</text>
          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">x<tspan baselineShift="sub" fontSize="10">CG</tspan> = (m₁·x₁ + m₂·x₂)/(m₁+m₂) = (4·2 + 2·5)/6 ≈ 3 m</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Cálculo da Potência numa Alavanca"
          statement={
            <p>
              Numa alavanca de 1ª classe, o braço da potência mede <M>{"d_P = 3\\,\\text{m}"}</M> e o
              braço da resistência mede <M>{"d_R = 1\\,\\text{m}"}</M>. A resistência a vencer é
              <M>{"R = 600\\,\\text{N}"}</M>. Qual é a potência mínima necessária?
            </p>
          }
          options={[
            { letter: "a", text: "600 N" },
            { letter: "b", text: "200 N", correct: true },
            { letter: "c", text: "1800 N" },
            { letter: "d", text: "300 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"P \\cdot d_P = R \\cdot d_R \\Rightarrow P = \\frac{R \\cdot d_R}{d_P} = \\frac{600 \\times 1}{3} = 200\\,\\text{N}"}</M>
              <p>Vantagem mecânica VM = 3. A alavanca multiplica a força 3 vezes.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Carrinho de Mão (2ª Classe)"
          statement={
            <p>
              Um carrinho de mão (2ª classe) tem a carga de <M>{"300\\,\\text{N}"}</M> aplicada a
              <M>{"0{,}4\\,\\text{m}"}</M> do eixo da roda (fulcro). O operador empurra as alças a
              <M>{"1{,}2\\,\\text{m}"}</M> do fulcro. Qual é a força mínima necessária?
            </p>
          }
          options={[
            { letter: "a", text: "300 N" },
            { letter: "b", text: "100 N", correct: true },
            { letter: "c", text: "150 N" },
            { letter: "d", text: "90 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = \\frac{R \\cdot d_R}{d_P} = \\frac{300 \\times 0{,}4}{1{,}2} = \\frac{120}{1{,}2} = 100\\,\\text{N}"}</M>
              <p>VM = 3. A 2ª classe sempre oferece vantagem mecânica (VM &gt; 1).</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Centro de Gravidade de Placa em L"
          statement={
            <p>
              Uma placa plana homogênea em forma de L é composta de dois retângulos: Rect 1 com dimensões
              <M>{"4 \\times 2"}</M> com CG em <M>{"(2;\\,1)"}</M>, e Rect 2 com dimensões <M>{"2 \\times 4"}</M>
              com CG em <M>{"(5;\\,2)"}</M> (em cm). As áreas são 8 e 8 unidades respectivamente.
              Determine o CG da placa.
            </p>
          }
          options={[
            { letter: "a", text: "(3,5; 1,5)" },
            { letter: "b", text: "(3; 1,5)" },
            { letter: "c", text: "(3,5; 1,5) cm", correct: true },
            { letter: "d", text: "(4; 2)" },
          ]}
          resolution={
            <>
              <p>Com áreas iguais (A = 8 cada), o CG fica na média simples:</p>
              <M block={true}>{"x_{CG} = \\frac{A_1 x_1 + A_2 x_2}{A_1 + A_2} = \\frac{8 \\times 2 + 8 \\times 5}{16} = \\frac{56}{16} = 3{,}5\\,\\text{cm}"}</M>
              <M block={true}>{"y_{CG} = \\frac{8 \\times 1 + 8 \\times 2}{16} = \\frac{24}{16} = 1{,}5\\,\\text{cm}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Estabilidade de Carro de Corrida vs. SUV"
          statement={
            <p>
              Um carro de corrida tem CG a <M>{"h = 0{,}4\\,\\text{m}"}</M> do solo e largura de vias
              <M>{"b = 1{,}6\\,\\text{m}"}</M>. Um SUV tem CG a <M>{"h = 0{,}8\\,\\text{m}"}</M> e mesma
              largura. Qual veículo tem menor tendência a capotar em uma curva? Justifique com torques.
            </p>
          }
          options={[
            { letter: "a", text: "O SUV, pois tem maior CG que acumula momento" },
            { letter: "b", text: "O carro de corrida, pois CG baixo desloca menos a força resultante para fora da base", correct: true },
            { letter: "c", text: "São iguais, pois a largura é a mesma" },
            { letter: "d", text: "Depende exclusivamente da velocidade, não do CG" },
          ]}
          resolution={
            <>
              <p>
                Em uma curva, a força centrífuga (inercial) atua horizontalmente no CG. O torque de capotagem
                em relação à roda externa é <M>{"\\tau_{cap} = F_c \\cdot h"}</M>. O torque estabilizador é
                <M>{"\\tau_{est} = P \\cdot (b/2)"}</M>.
              </p>
              <M block={true}>{"\\text{Carro: } \\tau_{cap} \\propto 0{,}4\\,h \\qquad \\text{SUV: } \\tau_{cap} \\propto 0{,}8\\,h"}</M>
              <p>
                Com h menor, o carro de corrida exige uma força centrífuga duas vezes maior para capotar.
                CG baixo = estabilidade maior.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Contrapeso de Grua"
          statement={
            <p>
              O braço de uma grua de construção tem <M>{"20\\,\\text{m}"}</M>. Uma carga de
              <M>{"10{.}000\\,\\text{N}"}</M> é suspensa na extremidade. Um contrapeso é posicionado a
              <M>{"4\\,\\text{m}"}</M> do pivô (do outro lado). Qual é o peso mínimo do contrapeso para
              equilibrar os torques?
            </p>
          }
          options={[
            { letter: "a", text: "2000 N" },
            { letter: "b", text: "50000 N", correct: true },
            { letter: "c", text: "40000 N" },
            { letter: "d", text: "25000 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sum\\tau = 0: \\quad F_c \\times 4 = 10{.}000 \\times 20"}</M>
              <M block={true}>{"F_c = \\frac{10{.}000 \\times 20}{4} = 50{.}000\\,\\text{N}"}</M>
              <p>
                O contrapeso precisa ter 50 kN (≈ 5000 kg). Isso mostra por que gruas têm contrapesos tão
                pesados — a desvantagem mecânica é grande quando o braço de carga é muito maior.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
