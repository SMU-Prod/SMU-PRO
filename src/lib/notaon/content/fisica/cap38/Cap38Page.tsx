"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 38</span>
          <h1>Eletrostática I: Carga, Eletrização e Lei de Coulomb</h1>
          <p>
            A eletrostática estuda as cargas elétricas em repouso e as forças que exercem
            entre si. Desde a carga elementar do elétron até os relâmpagos das tempestades,
            a Lei de Coulomb descreve com precisão quantitativa as interações elétricas
            que formam a base de toda a eletricidade e química.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Carga Elétrica</h2>
        <p>
          A <strong>carga elétrica</strong> é uma propriedade fundamental da matéria,
          assim como a massa. Existem dois tipos: <strong>positiva</strong> (associada ao
          próton) e <strong>negativa</strong> (associada ao elétron). Cargas de mesmo sinal
          se repelem; cargas de sinais opostos se atraem. A unidade no SI é o
          <strong> Coulomb (C)</strong>.
        </p>
        <p>
          A <strong>carga elementar</strong> é a menor carga livre observada na natureza:
        </p>
        <M block={true}>{"e = 1{,}6 \\times 10^{-19}\\;\\text{C}"}</M>
        <div className="lesson-highlight">
          <h3>Carga do elétron e do próton</h3>
          <p>
            Elétron: carga −e = −1,6×10⁻¹⁹ C | Próton: carga +e = +1,6×10⁻¹⁹ C |
            Nêutron: carga 0 (neutro). Um Coulomb equivale a aproximadamente
            6,24×10¹⁸ cargas elementares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípios</span>
        <h2>2. Conservação e Quantização da Carga</h2>
        <p>
          A <strong>conservação da carga</strong> estabelece que a carga elétrica total
          de um sistema isolado permanece constante ao longo do tempo. Não é possível criar
          ou destruir carga — apenas transferi-la entre objetos ou criar pares
          partícula-antipartícula com cargas opostas.
        </p>
        <p>
          A <strong>quantização da carga</strong> expressa que qualquer carga macroscópica
          observável é um múltiplo inteiro da carga elementar:
        </p>
        <M block={true}>{"Q = n \\cdot e \\quad (n \\in \\mathbb{Z})"}</M>
        <p>
          Por exemplo, um corpo com excesso de 3 elétrons tem carga
          <M>{" Q = -3 \\times 1{,}6 \\times 10^{-19} = -4{,}8 \\times 10^{-19}\\;\\text{C}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mecanismos</span>
        <h2>3. Processos de Eletrização</h2>
        <p>
          Existem três processos fundamentais de eletrização de corpos:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "2rem" }}>
          <li>
            <strong>Por atrito:</strong> dois materiais diferentes esfregados transferem
            elétrons do material com menor afinidade eletrônica para o outro. Ex.: âmbar
            esfregado com lã.
          </li>
          <li>
            <strong>Por contato:</strong> um condutor eletrizado toca um neutro —
            parte da carga se redistribui. Ambos ficam com o mesmo sinal.
          </li>
          <li>
            <strong>Por indução:</strong> um corpo eletrizado aproximado redistribui
            cargas em um condutor neutro próximo sem tocá-lo. Aterrado durante a
            indução, o condutor fica com sinal contrário ao indutor.
          </li>
        </ul>

        <figure className="lesson-figure">
          <svg viewBox="0 0 460 200" width="460" height="200" aria-label="Três processos de eletrização">
            {/* Atrito */}
            <text x="30" y="16" fontSize="11" fontWeight="bold" fill="#374151">Atrito</text>
            <rect x="15" y="25" width="55" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="42" y="44" textAnchor="middle" fontSize="9" fill="#92400e">- - - -</text>
            <rect x="85" y="25" width="55" height="30" rx="6" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
            <text x="112" y="44" textAnchor="middle" fontSize="9" fill="#0369a1">+ + + +</text>
            <path d="M 70 30 Q 77 40 70 50" fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <text x="42" y="70" textAnchor="middle" fontSize="8" fill="#374151">corpo A (−)</text>
            <text x="112" y="70" textAnchor="middle" fontSize="8" fill="#374151">corpo B (+)</text>

            {/* Contato */}
            <text x="180" y="16" fontSize="11" fontWeight="bold" fill="#374151">Contato</text>
            <rect x="165" y="25" width="50" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="190" y="44" textAnchor="middle" fontSize="9" fill="#92400e">- - -</text>
            <rect x="230" y="25" width="50" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2"/>
            <text x="255" y="44" textAnchor="middle" fontSize="9" fill="#6b7280">neutro</text>
            <line x1="215" y1="40" x2="230" y2="40" stroke="#374151" strokeWidth="2"/>
            <rect x="165" y="85" width="50" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="190" y="104" textAnchor="middle" fontSize="9" fill="#92400e">- -</text>
            <rect x="230" y="85" width="50" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="255" y="104" textAnchor="middle" fontSize="9" fill="#92400e">- -</text>
            <text x="210" y="130" textAnchor="middle" fontSize="8" fill="#374151">mesmo sinal após contato</text>

            {/* Indução */}
            <text x="340" y="16" fontSize="11" fontWeight="bold" fill="#374151">Indução</text>
            <rect x="320" y="25" width="50" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="345" y="44" textAnchor="middle" fontSize="9" fill="#92400e">+ + +</text>
            <rect x="395" y="25" width="55" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2"/>
            <text x="403" y="40" fontSize="9" fill="#0369a1">- -</text>
            <text x="432" y="40" fontSize="9" fill="#ef4444">+ +</text>
            <text x="422" y="70" textAnchor="middle" fontSize="8" fill="#374151">induzido</text>
            <line x1="370" y1="40" x2="395" y2="40" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>
          </svg>
          <figcaption>Processos de eletrização: atrito, contato e indução</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Materiais</span>
        <h2>4. Condutores e Isolantes</h2>
        <p>
          Os <strong>condutores elétricos</strong> possuem elétrons livres que se movem
          facilmente pela estrutura cristalina. Metais como cobre, prata e ouro são
          excelentes condutores. Quando carregados, as cargas se redistribuem na
          superfície externa do condutor em equilíbrio eletrostático.
        </p>
        <p>
          Os <strong>isolantes (dielétricos)</strong> não possuem cargas livres em
          quantidade significativa. As cargas ficam presas nas posições em que foram
          depositadas. Exemplos: borracha, vidro, plástico, ar seco.
          Os <strong>semicondutores</strong> (Si, Ge) têm condutividade intermediária
          controlável — base da eletrônica moderna.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei Fundamental</span>
        <h2>5. Lei de Coulomb</h2>
        <p>
          A <strong>Lei de Coulomb</strong> quantifica a força elétrica entre duas cargas
          puntiformes q₁ e q₂ separadas por uma distância r:
        </p>
        <M block={true}>{"F = k \\cdot \\frac{|q_1| \\cdot |q_2|}{r^2}"}</M>
        <p>
          A força é atrativa se as cargas têm sinais opostos e repulsiva se têm mesmo sinal.
          A direção é sempre ao longo da reta que une as duas cargas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 400 140" width="400" height="140" aria-label="Força de Coulomb entre duas cargas">
            <defs>
              <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/>
              </marker>
              <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto-start-reverse">
                <path d="M8,0 L8,6 L0,3 z" fill="#ef4444"/>
              </marker>
            </defs>
            <circle cx="100" cy="70" r="22" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="100" y="74" textAnchor="middle" fontSize="14" fill="#92400e">q₁</text>
            <circle cx="300" cy="70" r="22" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="300" y="74" textAnchor="middle" fontSize="14" fill="#92400e">q₂</text>
            {/* distance arrow */}
            <line x1="100" y1="105" x2="300" y2="105" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
            <text x="200" y="120" textAnchor="middle" fontSize="11" fill="#6b7280">r</text>
            {/* repulsion forces */}
            <line x1="78" y1="70" x2="30" y2="70" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowL)"/>
            <text x="54" y="62" fontSize="10" fill="#ef4444">F₁₂</text>
            <line x1="322" y1="70" x2="370" y2="70" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowR)"/>
            <text x="340" y="62" fontSize="10" fill="#ef4444">F₂₁</text>
            <text x="200" y="40" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="bold">Repulsão (mesmo sinal)</text>
            <text x="200" y="58" textAnchor="middle" fontSize="10" fill="#374151">F = k·|q₁|·|q₂|/r²</text>
          </svg>
          <figcaption>Força de Coulomb entre dois corpos com cargas de mesmo sinal (repulsão)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante</span>
        <h2>6. Constante Eletrostática</h2>
        <p>
          A constante eletrostática (ou constante de Coulomb) no vácuo vale:
        </p>
        <M block={true}>{"k_0 = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\;\\text{N·m}^2/\\text{C}^2"}</M>
        <p>
          onde <M>{"\\varepsilon_0 = 8{,}85 \\times 10^{-12}\\;\\text{C}^2/(\\text{N·m}^2)"}</M>
          é a permissividade elétrica do vácuo. Em outros meios,
          <M>{" k = k_0/\\varepsilon_r"}</M>, onde <M>{"\\varepsilon_r"}</M> é a constante
          dielétrica relativa do meio.
        </p>
        <div className="lesson-highlight">
          <h3>Comparação: força elétrica vs gravitacional</h3>
          <p>
            Para um par elétron-próton separados por 5×10⁻¹¹ m (átomo de hidrogênio):
            Fe ≈ 9×10⁻⁸ N, Fg ≈ 3,6×10⁻⁴⁷ N. Razão Fe/Fg ≈ 2×10³⁹ — a força elétrica
            é 39 ordens de grandeza maior que a gravitacional!
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vetorial</span>
        <h2>7. Princípio da Superposição</h2>
        <p>
          Quando múltiplas cargas estão presentes, a força sobre uma carga de referência
          é a <strong>soma vetorial</strong> das forças de Coulomb individuais de cada
          carga sobre ela. Isso é o <strong>princípio da superposição</strong>:
        </p>
        <M block={true}>{"\\vec{F}_{\\text{total}} = \\sum_{i} \\vec{F}_i = \\vec{F}_{01} + \\vec{F}_{02} + \\cdots + \\vec{F}_{0n}"}</M>
        <p>
          O cálculo requer decompor cada força em componentes x e y, somar separadamente,
          e recombinar. A direção de cada <M>{"\\vec{F}_i"}</M> segue a linha que une as
          cargas, sendo atrativa ou repulsiva conforme os sinais.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>8. Tabela: Partículas Subatômicas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Partícula</th>
                <th>Símbolo</th>
                <th>Carga (C)</th>
                <th>Massa (kg)</th>
                <th>Localização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Próton</td>
                <td>p⁺</td>
                <td>+1,6×10⁻¹⁹</td>
                <td>1,67×10⁻²⁷</td>
                <td>Núcleo</td>
              </tr>
              <tr>
                <td>Nêutron</td>
                <td>n⁰</td>
                <td>0</td>
                <td>1,67×10⁻²⁷</td>
                <td>Núcleo</td>
              </tr>
              <tr>
                <td>Elétron</td>
                <td>e⁻</td>
                <td>−1,6×10⁻¹⁹</td>
                <td>9,11×10⁻³¹</td>
                <td>Eletrosfera</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Fenômenos Elétricos Naturais</h2>
        <p>
          Os raios são resultados de separação de cargas em nuvens de tempestade. Correntes
          ascendentes de ar carregam gotículas de água e cristais de gelo que colidem,
          transferindo cargas: a base da nuvem acumula carga negativa e o topo,
          positiva. Quando a diferença de potencial supera a rigidez dielétrica do ar
          (~3×10⁶ V/m), ocorre a descarga elétrica — o relâmpago.
        </p>
        <p>
          Estimativas apontam que um relâmpago típico transporta 5 C de carga em
          ~30μs, com corrente de pico de 20.000 A e potência de até 10¹² W.
          A energia total (~5×10⁹ J) poderia acender uma lâmpada de 100W por 2 meses.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia</span>
        <h2>10. Precipitadores Eletrostáticos</h2>
        <p>
          Os <strong>precipitadores eletrostáticos</strong> são usados em chaminés
          industriais e usinas termelétricas para capturar partículas de fumaça.
          Um fio central sob alta tensão negativa (~50 kV) ioniza o ar ao redor,
          que carrega as partículas de poeira negativamente. Estas são então atraídas
          pelas placas coletoras positivas (Lei de Coulomb) e removidas mecanicamente.
          Eficiência de captura superior a 99%.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Q</span>
            <h3>Quantização</h3>
            <M block={true}>{"Q = n \\cdot e"}</M>
          </div>
          <div className="math-card">
            <span>F</span>
            <h3>Lei de Coulomb</h3>
            <M block={true}>{"F = k\\frac{|q_1||q_2|}{r^2}"}</M>
          </div>
          <div className="math-card">
            <span>k</span>
            <h3>Constante</h3>
            <M block={true}>{"k = 9\\times10^9\\;\\frac{\\text{N·m}^2}{\\text{C}^2}"}</M>
          </div>
          <div className="math-card">
            <span>e</span>
            <h3>Carga Elementar</h3>
            <M block={true}>{"e = 1{,}6\\times10^{-19}\\;\\text{C}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Eletrostática</span>
        <h2>Síntese Visual: Eletrização e Lei de Coulomb</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Métodos de eletrização: atrito, contato e indução">
          <rect x="40" y="30" width="185" height="150" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Atrito</text>
          <text x="132" y="75" textAnchor="middle" fontSize="12" fill="#1d4ed8">Dois isolantes</text>
          <text x="132" y="93" textAnchor="middle" fontSize="12" fill="#1d4ed8">se atritam →</text>
          <text x="132" y="111" textAnchor="middle" fontSize="12" fill="#1d4ed8">transferência</text>
          <text x="132" y="129" textAnchor="middle" fontSize="12" fill="#1d4ed8">de elétrons</text>
          <text x="132" y="165" textAnchor="middle" fontSize="11" fill="#1e40af">ex: caneta + cabelo</text>

          <rect x="257" y="30" width="185" height="150" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="349" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Contato</text>
          <text x="349" y="75" textAnchor="middle" fontSize="12" fill="#166534">Corpo carregado</text>
          <text x="349" y="93" textAnchor="middle" fontSize="12" fill="#166534">toca neutro →</text>
          <text x="349" y="111" textAnchor="middle" fontSize="12" fill="#166534">compartilham</text>
          <text x="349" y="129" textAnchor="middle" fontSize="12" fill="#166534">mesma carga</text>
          <text x="349" y="165" textAnchor="middle" fontSize="11" fill="#14532d">mesmos sinais</text>

          <rect x="474" y="30" width="185" height="150" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="566" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Indução</text>
          <text x="566" y="75" textAnchor="middle" fontSize="12" fill="#713f12">Corpo carregado</text>
          <text x="566" y="93" textAnchor="middle" fontSize="12" fill="#713f12">aproxima →</text>
          <text x="566" y="111" textAnchor="middle" fontSize="12" fill="#713f12">sem contato →</text>
          <text x="566" y="129" textAnchor="middle" fontSize="12" fill="#713f12">sinal oposto</text>
          <text x="566" y="165" textAnchor="middle" fontSize="11" fill="#92400e">eletroscópio</text>

          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#0f172a">Conservação: carga total antes = carga total depois</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Lei de Coulomb: força entre duas cargas">
          <defs>
            <marker id="arr38a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr38b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* carga q1 (+) */}
          <circle cx="180" cy="100" r="30" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="180" y="105" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#92400e">+q₁</text>
          {/* carga q2 (-) */}
          <circle cx="520" cy="100" r="30" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="520" y="105" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#9d174d">−q₂</text>
          {/* força atrativa */}
          <line x1="210" y1="90" x2="488" y2="90" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr38a)" />
          <line x1="490" y1="110" x2="212" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr38b)" />
          <text x="350" y="80" textAnchor="middle" fontSize="13" fill="#dc2626">F atrativa (cargas opostas)</text>
          {/* distância */}
          <line x1="180" y1="145" x2="520" y2="145" stroke="#475569" strokeWidth="1.5" />
          <text x="350" y="160" textAnchor="middle" fontSize="13" fill="#475569">d</text>
          {/* fórmula */}
          <text x="350" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">F = k·|q₁|·|q₂|/d² | k = 9×10⁹ N·m²/C²</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Símbolo</th><th>Unidade</th><th>Relação</th></tr>
          </thead>
          <tbody>
            <tr><td>Carga elétrica</td><td>q</td><td>Coulomb (C)</td><td>q = n·e; e = 1,6×10⁻¹⁹ C</td></tr>
            <tr><td>Força de Coulomb</td><td>F</td><td>Newton (N)</td><td>F = k·|q₁||q₂|/d²</td></tr>
            <tr><td>Constante eletrostática</td><td>k</td><td>N·m²/C²</td><td>k = 9×10⁹ N·m²/C² (ar/vácuo)</td></tr>
            <tr><td>Permissividade</td><td>ε₀</td><td>C²/(N·m²)</td><td>k = 1/(4πε₀); ε₀ = 8,85×10⁻¹² C²/(N·m²)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Força de Coulomb"
          statement={
            <p>
              Duas cargas puntiformes q₁ = 3 μC e q₂ = 6 μC estão separadas por
              r = 0,3 m no vácuo. Qual é a intensidade da força elétrica entre elas?
              (k = 9×10⁹ N·m²/C²)
            </p>
          }
          options={[
            { letter: "a", text: "1,8 N", correct: true },
            { letter: "b", text: "0,18 N" },
            { letter: "c", text: "18 N" },
            { letter: "d", text: "0,018 N" },
          ]}
          resolution={
            <>
              <p>Convertendo: q₁ = 3×10⁻⁶ C, q₂ = 6×10⁻⁶ C, r = 0,3 m</p>
              <M block={true}>{"F = 9\\times10^9 \\cdot \\frac{3\\times10^{-6} \\times 6\\times10^{-6}}{(0{,}3)^2} = 9\\times10^9 \\cdot \\frac{18\\times10^{-12}}{0{,}09} = 9\\times10^9 \\times 2\\times10^{-10} = 1{,}8\\;\\text{N}"}</M>
              <p>Resposta: <strong>a) 1,8 N</strong></p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Superposição de Forças"
          statement={
            <p>
              Três cargas colineares: q₁ = +2 μC na origem, q₂ = −4 μC em x = 1 m.
              Encontre a força resultante sobre q₃ = +1 μC em x = 2 m.
              (k = 9×10⁹ N·m²/C²). Considere sentido positivo para x crescente.
            </p>
          }
          options={[
            { letter: "a", text: "F = −0,027 N (para a esquerda, em direção a q₂)", correct: true },
            { letter: "b", text: "F = +0,027 N (para a direita)" },
            { letter: "c", text: "F = −0,009 N" },
            { letter: "d", text: "F = +0,036 N" },
          ]}
          resolution={
            <>
              <p>Força de q₁ sobre q₃ (r = 2 m, mesmo sinal → repulsão, para direita +):</p>
              <M block={true}>{"F_{13} = 9\\times10^9 \\cdot \\frac{2\\times10^{-6}\\times1\\times10^{-6}}{4} = +4{,}5\\times10^{-3}\\;\\text{N}"}</M>
              <p>Força de q₂ sobre q₃ (r = 1 m, sinais opostos → atração, para esquerda −):</p>
              <M block={true}>{"F_{23} = -9\\times10^9 \\cdot \\frac{4\\times10^{-6}\\times1\\times10^{-6}}{1} = -36\\times10^{-3}\\;\\text{N}"}</M>
              <M block={true}>{"F_{\\text{res}} = 4{,}5\\times10^{-3} - 36\\times10^{-3} \\approx -0{,}027\\;\\text{N}"}</M>
              <p>Resposta: <strong>a) −0,027 N (para esquerda)</strong></p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Determinação da Carga"
          statement={
            <p>
              Duas cargas iguais q se repelem com força F = 0,9 N quando separadas
              por r = 0,1 m. Encontre o valor de q e o número de elétrons em excesso.
              (k = 9×10⁹, e = 1,6×10⁻¹⁹ C)
            </p>
          }
          options={[
            { letter: "a", text: "q = 1 μC; n ≈ 6,25×10¹²", correct: true },
            { letter: "b", text: "q = 3 μC; n ≈ 1,9×10¹³" },
            { letter: "c", text: "q = 0,1 μC; n ≈ 6,25×10¹¹" },
            { letter: "d", text: "q = 10 μC; n ≈ 6,25×10¹³" },
          ]}
          resolution={
            <>
              <M block={true}>{"F = k\\frac{q^2}{r^2} \\Rightarrow q^2 = \\frac{F\\cdot r^2}{k} = \\frac{0{,}9 \\times 0{,}01}{9\\times10^9} = 10^{-12}"}</M>
              <M block={true}>{"q = 10^{-6}\\;\\text{C} = 1\\;\\mu\\text{C}"}</M>
              <M block={true}>{"n = \\frac{q}{e} = \\frac{10^{-6}}{1{,}6\\times10^{-19}} \\approx 6{,}25\\times10^{12}\\;\\text{elétrons}"}</M>
              <p>Resposta: <strong>a) q = 1 μC; n ≈ 6,25×10¹²</strong></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Relâmpagos e Eletrização"
          statement={
            <p>
              Relâmpagos ocorrem quando a diferença de potencial entre nuvem e solo
              supera a rigidez dielétrica do ar (≈3×10⁶ V/m). Nas nuvens de tempestade,
              correntes ascendentes provocam colisões entre partículas de gelo e gotículas,
              separando cargas. Explique o mecanismo de eletrização envolvido e estime a
              carga típica de um relâmpago se a corrente média é 20.000 A e a duração é 30 μs.
            </p>
          }
          options={[
            { letter: "a", text: "Eletrização por atrito (colisões); Q = I·t = 20000 × 30×10⁻⁶ = 0,6 C", correct: true },
            { letter: "b", text: "Eletrização por contato; Q = 5 C" },
            { letter: "c", text: "Eletrização por indução; Q = I/t = 0,6 μC" },
            { letter: "d", text: "Eletrização por radiação; Q = 20 mC" },
          ]}
          resolution={
            <>
              <p>
                O mecanismo é a <strong>eletrização por atrito/colisão</strong>: partículas
                de gelo maiores (graupel) caem e colidem com cristais de gelo menores.
                Os cristais menores perdem elétrons e sobem com correntes ascendentes
                (topo da nuvem fica positivo); o graupel desce com carga negativa
                (base fica negativa).
              </p>
              <M block={true}>{"Q = I \\cdot \\Delta t = 20{.}000 \\times 30\\times10^{-6} = 0{,}6\\;\\text{C}"}</M>
              <p>Resposta: <strong>a)</strong> — eletrização por atrito; Q = 0,6 C</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Precipitador Eletrostático Industrial"
          statement={
            <p>
              Um precipitador eletrostático em uma usina termelétrica usa um fio central
              a −50.000 V para ionizar partículas de fumaça. As partículas ionizadas são
              atraídas por placas coletoras positivas separadas 15 cm do fio. Se uma
              partícula adquire carga q = −10⁻¹⁵ C, qual é a força elétrica sobre ela
              (use E = V/d)? Qual princípio físico fundamenta esse processo?
            </p>
          }
          options={[
            { letter: "a", text: "E = 3,3×10⁵ V/m; F = qE ≈ 3,3×10⁻¹⁰ N; Lei de Coulomb e campo elétrico uniforme", correct: true },
            { letter: "b", text: "E = 10⁶ V/m; F = 10⁻⁹ N; força gravitacional domina" },
            { letter: "c", text: "E = 5×10⁴ V/m; F = 5×10⁻¹¹ N; indução eletrostática" },
            { letter: "d", text: "E = 3,3×10³ V/m; F = 3,3×10⁻¹² N; efeito fotoelétrico" },
          ]}
          resolution={
            <>
              <M block={true}>{"E = \\frac{V}{d} = \\frac{50{.}000}{0{,}15} \\approx 3{,}33\\times10^5\\;\\text{V/m}"}</M>
              <M block={true}>{"F = |q| \\cdot E = 10^{-15} \\times 3{,}33\\times10^5 \\approx 3{,}3\\times10^{-10}\\;\\text{N}"}</M>
              <p>
                Princípio: campo elétrico exerce força sobre cargas (Lei de Coulomb).
                A força, embora minúscula, acelera partículas leves de fumaça o suficiente
                para depositá-las nas placas coletoras antes de saírem pela chaminé.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
