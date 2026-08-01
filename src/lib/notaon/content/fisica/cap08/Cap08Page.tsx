"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 8</span>
          <h1>Acoplamento de Polias e Engrenagens</h1>
          <p>
            Polias e engrenagens são máquinas simples que permitem transmitir força e movimento circular com ganho mecânico.
            Neste capítulo você aprenderá a calcular a vantagem mecânica de sistemas de polias, a relação de transmissão entre engrenagens e as aplicações práticas em bicicletas, guindastes e motores.
            Esses conceitos aparecem frequentemente no ENEM e nos principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Sistema de Polias: Definição e Finalidade</h2>
        <p>
          Uma <strong>polia</strong> é uma roda com ranhura por onde passa uma corda, cabo ou correia. Seu objetivo principal é <em>mudar a direção de uma força</em> ou <em>ampliar a força aplicada</em>, reduzindo o esforço necessário para mover cargas pesadas. A <strong>vantagem mecânica</strong> (VM) indica quantas vezes a máquina multiplica a força:
        </p>
        <M block={true}>{"VM = \\frac{F_{\\text{resistente}}}{F_{\\text{motriz}}}"}</M>
        <p>
          Quanto maior a VM, menor a força necessária para mover a carga — porém, pela conservação de energia, o deslocamento da força motriz será proporcionalmente maior. Sistemas de polias são utilizados em elevadores, guindastes, blocos de içamento e equipamentos de ginástica.
        </p>
        <div className="lesson-highlight">
          <h3>Princípio da Conservação de Energia em Polias Ideais</h3>
          <p>
            Em polias sem atrito e com corda sem massa, o trabalho realizado pela força motriz é igual ao trabalho realizado sobre a carga: <M>{"F_{\\text{motriz}} \\cdot d_{\\text{motriz}} = F_{\\text{resistente}} \\cdot d_{\\text{resistente}}"}</M>. Logo, ganhar força significa percorrer maior distância.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Polia Fixa</span>
        <h2>2. Polia Fixa: Muda a Direção da Força</h2>
        <p>
          Na <strong>polia fixa</strong>, o eixo está preso a uma estrutura e não se desloca. A corda passa pela ranhura e a força aplicada de um lado é transmitida ao outro. A vantagem mecânica é <M>{"VM = 1"}</M>: não há multiplicação de força, apenas mudança de direção. Isso é útil quando é mais fácil puxar para baixo do que para cima.
        </p>
        <M block={true}>{"F_{\\text{aplicada}} = F_{\\text{carga}} \\quad (VM = 1)"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 220" width="400" height="220" aria-label="Polia fixa e polia móvel comparadas">
            {/* Fixed pulley */}
            <circle cx="100" cy="60" r="30" fill="none" stroke="#2563eb" strokeWidth="3" />
            <circle cx="100" cy="60" r="5" fill="#2563eb" />
            <line x1="100" y1="30" x2="100" y2="10" stroke="#1e40af" strokeWidth="2" strokeDasharray="4 2" />
            <text x="55" y="15" fontSize="11" fill="#1e40af">eixo fixo</text>
            {/* Rope left side */}
            <line x1="70" y1="60" x2="70" y2="180" stroke="#374151" strokeWidth="3" />
            <polygon points="70,180 65,165 75,165" fill="#374151" />
            <text x="20" y="185" fontSize="12" fill="#374151">F</text>
            {/* Rope right side with load */}
            <line x1="130" y1="60" x2="130" y2="150" stroke="#374151" strokeWidth="3" />
            <rect x="110" y="150" width="40" height="25" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
            <text x="118" y="167" fontSize="11" fill="#1e3a8a">carga</text>
            <text x="60" y="100" fontSize="11" fill="#dc2626">F</text>
            <text x="135" y="110" fontSize="11" fill="#dc2626">F</text>
            <text x="70" y="210" fontSize="12" fill="#2563eb" fontWeight="bold">Polia Fixa (VM=1)</text>

            {/* Movable pulley */}
            <circle cx="300" cy="120" r="35" fill="none" stroke="#16a34a" strokeWidth="3" />
            <circle cx="300" cy="120" r="5" fill="#16a34a" />
            {/* Ropes */}
            <line x1="265" y1="120" x2="265" y2="30" stroke="#374151" strokeWidth="3" />
            <line x1="335" y1="120" x2="335" y2="30" stroke="#374151" strokeWidth="3" />
            <line x1="335" y1="30" x2="350" y2="30" stroke="#374151" strokeWidth="3" />
            <polygon points="350,25 365,30 350,35" fill="#374151" />
            <text x="370" y="33" fontSize="12" fill="#374151">F</text>
            {/* Fixed point left */}
            <line x1="265" y1="30" x2="265" y2="10" stroke="#1e40af" strokeWidth="2" strokeDasharray="4 2" />
            <text x="240" y="8" fontSize="10" fill="#1e40af">fixo</text>
            {/* Load below movable pulley */}
            <line x1="300" y1="155" x2="300" y2="185" stroke="#374151" strokeWidth="3" />
            <rect x="280" y="185" width="40" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
            <text x="284" y="202" fontSize="11" fill="#14532d">2F</text>
            <text x="230" y="210" fontSize="12" fill="#16a34a" fontWeight="bold">Polia Móvel (VM=2)</text>
          </svg>
          <figcaption>Comparação entre polia fixa (VM=1) e polia móvel (VM=2). Na polia móvel, dois segmentos de corda sustentam a carga, dividindo a força pela metade.</figcaption>
        </figure>
      </section>

      {/* SECTION 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Polia Móvel</span>
        <h2>3. Polia Móvel: Multiplica a Força</h2>
        <p>
          Na <strong>polia móvel</strong>, o eixo se desloca junto com a carga. Dois segmentos de corda sustentam o peso: um preso a um ponto fixo e outro onde se aplica a força. A carga é dividida entre os dois segmentos, resultando em <M>{"VM = 2"}</M>.
        </p>
        <M block={true}>{"F_{\\text{aplicada}} = \\frac{P}{2} \\quad (VM = 2)"}</M>
        <p>
          Para elevar a carga em <M>{"h"}</M>, é necessário puxar a corda por <M>{"2h"}</M>. A energia se conserva: o que se ganha em força, perde-se em distância percorrida.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Sistemas Compostos</span>
        <h2>4. Combinações de Polias: Vantagem Mecânica VM = n° de polias</h2>
        <p>
          Combinando uma polia fixa com uma ou mais polias móveis, obtemos sistemas com VM cada vez maiores. A regra geral para sistemas ideais é:
        </p>
        <M block={true}>{"VM = n_{\\text{segmentos de corda que sustentam a carga}}"}</M>
        <p>
          Cada segmento de corda que sustenta diretamente a polia móvel (ou bloco de polias) contribui com uma parcela da força. Para <M>{"n"}</M> polias móveis em cascata:
        </p>
        <M block={true}>{"VM = 2^{n}"}</M>
        <p>
          onde <M>{"n"}</M> é o número de polias móveis. Com 1 polia móvel, VM=2; com 2 polias móveis, VM=4; com 3, VM=8.
        </p>
        <div className="lesson-highlight">
          <h3>Regra Prática para Contar Segmentos</h3>
          <p>
            Conte quantos segmentos de corda partem do bloco de polias móveis (inclusive o segmento onde se aplica a força, se ele sair do bloco). O número de segmentos é a VM.
          </p>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Talha</span>
        <h2>5. Talha (Cadernal): Múltiplas Polias e Fórmula da VM</h2>
        <p>
          A <strong>talha</strong> (ou cadernal) é um sistema de múltiplas polias montadas em dois blocos paralelos — um bloco fixo (com <M>{"n"}</M> polias) e um bloco móvel (com <M>{"n"}</M> polias). A corda serpenteia entre eles, e a vantagem mecânica é:
        </p>
        <M block={true}>{"VM = 2n"}</M>
        <p>
          onde <M>{"n"}</M> é o número de polias em cada bloco. Uma talha com 3 polias em cada bloco tem VM=6: basta aplicar 1/6 do peso para içar a carga. Guindastes de construção civil usam talhas com VM de 6 a 10.
        </p>
        <M block={true}>{"F_{\\text{aplicada}} = \\frac{P}{VM} = \\frac{P}{2n}"}</M>
      </section>

      {/* SECTION 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Engrenagens</span>
        <h2>6. Engrenagens: Dentes, Módulo e Transmissão de Rotação</h2>
        <p>
          <strong>Engrenagens</strong> são rodas dentadas que se encaixam entre si para transmitir movimento circular com força. Os <strong>dentes</strong> garantem que não haja escorregamento, ao contrário das correias. O <strong>módulo</strong> <M>{"m"}</M> de uma engrenagem define o tamanho de cada dente:
        </p>
        <M block={true}>{"m = \\frac{D}{N}"}</M>
        <p>
          onde <M>{"D"}</M> é o diâmetro primitivo (em mm) e <M>{"N"}</M> é o número de dentes. Para duas engrenagens se encaixarem, devem ter o mesmo módulo. Engrenagens externas giram em sentidos opostos; engrenagens internas giram no mesmo sentido.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Relação de Transmissão</span>
        <h2>7. Relação de Transmissão: ω₁/ω₂ = N₂/N₁</h2>
        <p>
          Como os dentes se encaixam, as velocidades lineares nas periferias das engrenagens são iguais. Isso implica a <strong>relação de transmissão</strong>:
        </p>
        <M block={true}>{"\\frac{\\omega_1}{\\omega_2} = \\frac{N_2}{N_1} = \\frac{R_2}{R_1}"}</M>
        <p>
          A engrenagem com mais dentes (maior raio) gira mais devagar. A relação de transmissão <M>{"i = N_2/N_1"}</M> é chamada de <em>razão de transmissão</em>. Se <M>{"i > 1"}</M>, há redução de velocidade (e aumento de torque); se <M>{"i < 1"}</M>, há aumento de velocidade (e redução de torque).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 220" width="400" height="220" aria-label="Duas engrenagens com N1 e N2 dentes mostrando relação inversa">
            {/* Gear 1 (small, 20 teeth) */}
            <circle cx="130" cy="110" r="55" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
            <circle cx="130" cy="110" r="45" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 2" />
            {/* Teeth gear 1 */}
            {Array.from({length: 16}).map((_, i) => {
              const angle = (i * 360) / 16 * Math.PI / 180;
              const x1 = 130 + 55 * Math.cos(angle);
              const y1 = 110 + 55 * Math.sin(angle);
              const x2 = 130 + 65 * Math.cos(angle);
              const y2 = 110 + 65 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />;
            })}
            <text x="90" y="105" fontSize="14" fill="#1e40af" fontWeight="bold">N₁</text>
            <text x="90" y="120" fontSize="11" fill="#1e40af">(menor)</text>
            <text x="108" y="130" fontSize="12" fill="#dc2626">ω₁ ↻</text>

            {/* Gear 2 (large, 40 teeth) */}
            <circle cx="290" cy="110" r="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
            <circle cx="290" cy="110" r="68" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" strokeDasharray="4 2" />
            {/* Teeth gear 2 */}
            {Array.from({length: 24}).map((_, i) => {
              const angle = (i * 360) / 24 * Math.PI / 180;
              const x1 = 290 + 80 * Math.cos(angle);
              const y1 = 110 + 80 * Math.sin(angle);
              const x2 = 290 + 92 * Math.cos(angle);
              const y2 = 110 + 92 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />;
            })}
            <text x="268" y="100" fontSize="14" fill="#14532d" fontWeight="bold">N₂</text>
            <text x="264" y="115" fontSize="11" fill="#14532d">(maior)</text>
            <text x="268" y="130" fontSize="12" fill="#dc2626">ω₂ ↺</text>

            {/* Equation */}
            <text x="110" y="205" fontSize="13" fill="#374151">ω₁/ω₂ = N₂/N₁ → engrenagem maior gira mais devagar</text>
          </svg>
          <figcaption>Duas engrenagens engrenadas: a menor (N₁ dentes) gira mais rápido (ω₁ maior), enquanto a maior (N₂ dentes) gira mais devagar (ω₂ menor). Os sentidos de rotação são opostos.</figcaption>
        </figure>
      </section>

      {/* SECTION 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Correias e Correntes</span>
        <h2>8. Correntes e Correias: Relação entre Raios</h2>
        <p>
          Quando dois eixos são conectados por <strong>correia</strong> ou <strong>corrente</strong>, a velocidade linear na borda das polias é a mesma (correia não escorrega em condições ideais):
        </p>
        <M block={true}>{"v_1 = v_2 \\Rightarrow \\omega_1 R_1 = \\omega_2 R_2 \\Rightarrow \\frac{\\omega_1}{\\omega_2} = \\frac{R_2}{R_1}"}</M>
        <p>
          A polia com maior raio gira mais devagar. Diferente das engrenagens, correias cruzadas fazem as polias girarem em sentidos opostos, enquanto correias abertas mantêm o mesmo sentido. A corrente de bicicleta é um exemplo clássico: a coroa (grande) e a catraca (pequena) determinam a marcha.
        </p>
      </section>

      {/* SECTION 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Trem de Engrenagens</span>
        <h2>9. Trem de Engrenagens: Produto das Relações</h2>
        <p>
          Um <strong>trem de engrenagens</strong> é uma série de engrenagens encadeadas. A relação total de transmissão é o <em>produto</em> das relações individuais:
        </p>
        <M block={true}>{"i_{\\text{total}} = i_1 \\cdot i_2 \\cdot i_3 \\cdots = \\frac{\\omega_{\\text{entrada}}}{\\omega_{\\text{saída}}} = \\frac{N_2}{N_1} \\cdot \\frac{N_4}{N_3} \\cdots"}</M>
        <p>
          As engrenagens intermediárias (chamadas de <em>engrenagens loucas</em>) afetam o sentido de rotação, mas não a relação de velocidade entre a primeira e a última. A caixa de câmbio de um automóvel é um trem de engrenagens que permite selecionar diferentes relações de transmissão.
        </p>
        <div className="lesson-highlight">
          <h3>Torque em Trens de Engrenagens</h3>
          <p>
            Em sistemas conservativos, quando a velocidade cai por fator <M>{"i"}</M>, o torque aumenta pelo mesmo fator: <M>{"T_2 = T_1 \\cdot i"}</M>. É por isso que engrenagens de redução aumentam a força de saída.
          </p>
        </div>
      </section>

      {/* SECTION 10 */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>10. Tabela Comparativa: Polia Fixa vs Móvel vs Talha</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>VM</th>
                <th>Muda direção?</th>
                <th>Força aplicada</th>
                <th>Deslocamento da corda</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Polia fixa</td><td>1</td><td>Sim</td><td>F = P</td><td>d = h</td></tr>
              <tr><td>Polia móvel</td><td>2</td><td>Não necessariamente</td><td>F = P/2</td><td>d = 2h</td></tr>
              <tr><td>Talha (2 polias/bloco)</td><td>4</td><td>Sim (com polia fixa)</td><td>F = P/4</td><td>d = 4h</td></tr>
              <tr><td>Talha (3 polias/bloco)</td><td>6</td><td>Sim</td><td>F = P/6</td><td>d = 6h</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 11 */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>11. Aplicações: Bicicleta, Guindaste e Motor de Carro</h2>
        <p>
          <strong>Bicicleta:</strong> A coroa (presa ao pedal) e a catraca (presa à roda traseira) são ligadas por corrente. Trocando de marcha, seleciona-se catraca de diferente número de dentes, variando a relação de transmissão e a força necessária para pedalar.
        </p>
        <p>
          <strong>Guindaste de torre:</strong> Usa combinação de talha com motor elétrico. Com VM=8 a 12, o motor pode içar cargas de toneladas com cabos de aço de menor tração.
        </p>
        <p>
          <strong>Caixa de câmbio automotiva:</strong> A 1ª marcha tem relação alta (ex.: 3,5:1), fornecendo grande torque para partir. A 5ª marcha tem relação baixa (ex.: 0,8:1), priorizando velocidade no regime de cruzeiro. O torque e a velocidade trocam de papel conforme a marcha selecionada.
        </p>
      </section>

      {/* SECTION 12 - Resumo */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>VM</span>
            <h3>Vantagem Mecânica</h3>
            <M block={true}>{"VM = \\frac{F_{\\text{resistente}}}{F_{\\text{motriz}}}"}</M>
          </div>
          <div className="math-card">
            <span>Talha</span>
            <h3>VM da Talha</h3>
            <M block={true}>{"VM = 2n"}</M>
          </div>
          <div className="math-card">
            <span>Engrenagem</span>
            <h3>Relação de Transmissão</h3>
            <M block={true}>{"\\frac{\\omega_1}{\\omega_2} = \\frac{N_2}{N_1}"}</M>
          </div>
          <div className="math-card">
            <span>Correia</span>
            <h3>Relação por Raio</h3>
            <M block={true}>{"\\omega_1 R_1 = \\omega_2 R_2"}</M>
          </div>
        </div>
      </section>

      {/* EXERCISES */}
      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Transmissão</span>
        <h2>Síntese Visual: Polias, Engrenagens e Acoplamento</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Polia simples e polia composta">
          <defs>
            <marker id="arr08a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* Polia simples */}
          <text x="175" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Polia Simples (muda direção)</text>
          <circle cx="175" cy="80" r="45" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <circle cx="175" cy="80" r="8" fill="#64748b" />
          {/* cordas */}
          <line x1="130" y1="80" x2="80" y2="160" stroke="#1e293b" strokeWidth="2" />
          <line x1="220" y1="80" x2="270" y2="160" stroke="#1e293b" strokeWidth="2" />
          <line x1="80" y1="160" x2="80" y2="190" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr08a)" />
          <text x="68" y="185" textAnchor="end" fontSize="12" fill="#dc2626">F</text>
          <line x1="270" y1="160" x2="270" y2="190" stroke="#2563eb" strokeWidth="2" />
          <text x="285" y="185" textAnchor="start" fontSize="12" fill="#2563eb">P</text>
          <text x="175" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">F = P (vantagem = 1)</text>

          {/* Sistema de polias (polia móvel) */}
          <text x="520" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Polia Móvel (vantagem = 2)</text>
          <circle cx="520" cy="100" r="35" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <circle cx="520" cy="100" r="6" fill="#2563eb" />
          {/* suporte */}
          <line x1="380" y1="40" x2="660" y2="40" stroke="#64748b" strokeWidth="3" />
          {/* corda esquerda */}
          <line x1="485" y1="100" x2="420" y2="40" stroke="#1e293b" strokeWidth="2" />
          {/* corda direita (força) */}
          <line x1="555" y1="100" x2="620" y2="40" stroke="#1e293b" strokeWidth="2" />
          <line x1="620" y1="40" x2="660" y2="40" stroke="#dc2626" strokeWidth="2" />
          <line x1="660" y1="40" x2="700" y2="40" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr08a)" />
          {/* peso */}
          <line x1="520" y1="135" x2="520" y2="180" stroke="#475569" strokeWidth="2" />
          <rect x="480" y="180" width="80" height="25" rx="3" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="520" y="197" textAnchor="middle" fontSize="12" fill="#475569">P</text>
          <text x="520" y="158" textAnchor="middle" fontSize="12" fill="#0f172a">F = P/2</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Engrenagens: relação de transmissão">
          {/* engrenagem motriz */}
          <circle cx="220" cy="95" r="70" fill="#f3f4f6" stroke="#4b5563" strokeWidth="2" />
          <text x="220" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Z₁ = 40</text>
          <text x="220" y="106" textAnchor="middle" fontSize="12" fill="#4b5563">motriz</text>
          <text x="220" y="120" textAnchor="middle" fontSize="12" fill="#4b5563">ω₁, n₁</text>
          {/* engrenagem movida */}
          <circle cx="480" cy="95" r="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="480" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Z₂ = 20</text>
          <text x="480" y="106" textAnchor="middle" fontSize="12" fill="#2563eb">movida</text>
          <text x="480" y="120" textAnchor="middle" fontSize="12" fill="#2563eb">ω₂ = 2ω₁</text>
          {/* ponto de engrenagem */}
          <circle cx="290" cy="95" r="5" fill="#dc2626" />
          <circle cx="440" cy="95" r="5" fill="#dc2626" />
          <text x="365" y="60" textAnchor="middle" fontSize="13" fill="#dc2626">v tangencial igual</text>
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#0f172a">Z₁/Z₂ = ω₂/ω₁ = n₂/n₁ | engrenagem menor gira mais rápido</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Sistema</th><th>Relação de transmissão</th><th>Vantagem mecânica</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td>Polia simples</td><td>v₁ = v₂</td><td>1 (só muda direção)</td><td>Içar bandeira</td></tr>
            <tr><td>Polia móvel</td><td>F = P/n° de tramos</td><td>2 (um tramo fixo)</td><td>Polipasto de construção</td></tr>
            <tr><td>Engrenagem</td><td>Z₁·ω₁ = Z₂·ω₂</td><td>i = Z₂/Z₁</td><td>Câmbio de bicicleta</td></tr>
            <tr><td>Polia com correia</td><td>R₁·ω₁ = R₂·ω₂</td><td>Depende dos raios</td><td>Motor de lavadora</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Sistema de Polias com VM = 4"
          statement={
            <p>
              Um sistema de polias possui vantagem mecânica VM = 4 e é usado para levantar uma carga de 800 N.
              Qual deve ser a força aplicada na corda para manter a carga em equilíbrio (sistema ideal, sem atrito)?
            </p>
          }
          options={[
            { letter: "a", text: "100 N" },
            { letter: "b", text: "200 N", correct: true },
            { letter: "c", text: "400 N" },
            { letter: "d", text: "800 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"VM = \\frac{P}{F} \\Rightarrow F = \\frac{P}{VM} = \\frac{800}{4} = 200 \\text{ N}"}</M>
              <p>Com VM = 4, a força necessária é 4 vezes menor que o peso da carga. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Engrenagens: N₁ = 20 dentes, N₂ = 60 dentes"
          statement={
            <p>
              Duas engrenagens estão engrenadas. A engrenagem motora possui N₁ = 20 dentes e gira a ω₁ = 300 rpm.
              A engrenagem conduzida possui N₂ = 60 dentes. Qual é a velocidade angular ω₂ da engrenagem conduzida?
            </p>
          }
          options={[
            { letter: "a", text: "900 rpm" },
            { letter: "b", text: "300 rpm" },
            { letter: "c", text: "100 rpm", correct: true },
            { letter: "d", text: "60 rpm" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\frac{\\omega_1}{\\omega_2} = \\frac{N_2}{N_1} \\Rightarrow \\omega_2 = \\omega_1 \\cdot \\frac{N_1}{N_2} = 300 \\cdot \\frac{20}{60} = 100 \\text{ rpm}"}</M>
              <p>A engrenagem maior (N₂ = 60) gira 3 vezes mais devagar. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Bicicleta: coroa 48 dentes, catraca 16 dentes, raio = 0,35 m"
          statement={
            <p>
              Uma bicicleta tem coroa com 48 dentes (ligada ao pedal) e catraca com 16 dentes (ligada à roda traseira).
              O raio da roda traseira é 0,35 m. O ciclista pedala a 60 rpm.
              Calcule a velocidade da bicicleta em km/h.
            </p>
          }
          options={[
            { letter: "a", text: "19,8 km/h" },
            { letter: "b", text: "39,6 km/h", correct: true },
            { letter: "c", text: "13,2 km/h" },
            { letter: "d", text: "60,0 km/h" },
          ]}
          resolution={
            <>
              <p><strong>Passo 1:</strong> Relação de transmissão</p>
              <M block={true}>{"\\frac{\\omega_{\\text{roda}}}{\\omega_{\\text{pedal}}} = \\frac{N_{\\text{coroa}}}{N_{\\text{catraca}}} = \\frac{48}{16} = 3"}</M>
              <p><strong>Passo 2:</strong> Velocidade angular da roda</p>
              <M block={true}>{"\\omega_{\\text{roda}} = 3 \\times 60 = 180 \\text{ rpm} = 3 \\text{ rev/s} = 3 \\times 2\\pi \\text{ rad/s} \\approx 18{,}85 \\text{ rad/s}"}</M>
              <p><strong>Passo 3:</strong> Velocidade linear da bicicleta</p>
              <M block={true}>{"v = \\omega_{\\text{roda}} \\cdot R = 18{,}85 \\times 0{,}35 \\approx 6{,}6 \\text{ m/s} = 6{,}6 \\times 3{,}6 \\approx 39{,}6 \\text{ km/h}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Guindaste de Construção com 6 Polias"
          statement={
            <p>
              Uma obra civil usa um guindaste com sistema de talha de 6 polias móveis (VM = 6) para içar uma viga de aço de 600 kg.
              Considerando g = 10 m/s², qual é a tensão no cabo puxado pelo operador para manter a viga suspensa?
            </p>
          }
          options={[
            { letter: "a", text: "6000 N" },
            { letter: "b", text: "1200 N" },
            { letter: "c", text: "1000 N", correct: true },
            { letter: "d", text: "600 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = mg = 600 \\times 10 = 6000 \\text{ N}"}</M>
              <M block={true}>{"F = \\frac{P}{VM} = \\frac{6000}{6} = 1000 \\text{ N}"}</M>
              <p>O sistema de 6 segmentos reduz a força necessária para 1/6 do peso. O operador aplica apenas 1000 N no cabo. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Caixa de Câmbio: 1ª Marcha, relação 3,5:1"
          statement={
            <p>
              Um carro com caixa de câmbio na 1ª marcha tem relação de transmissão 3,5:1 (motor/roda).
              O motor gira a 2000 rpm. Qual é a rotação das rodas em rpm?
              Se a relação final do diferencial for 4:1 e o raio da roda for 0,3 m, qual é a velocidade do carro em km/h?
            </p>
          }
          options={[
            { letter: "a", text: "≈ 143 rpm nas rodas e ≈ 8,1 km/h" },
            { letter: "b", text: "≈ 571 rpm nas rodas e ≈ 32,4 km/h" },
            { letter: "c", text: "≈ 143 rpm nas rodas e ≈ 16,2 km/h" },
            { letter: "d", text: "≈ 71 rpm nas rodas e ≈ 8,1 km/h", correct: true },
          ]}
          resolution={
            <>
              <p><strong>Rotação após caixa:</strong></p>
              <M block={true}>{"\\omega_1 = \\frac{2000}{3{,}5} \\approx 571 \\text{ rpm}"}</M>
              <p><strong>Rotação da roda (após diferencial 4:1):</strong></p>
              <M block={true}>{"\\omega_{\\text{roda}} = \\frac{571}{4} \\approx 143 \\text{ rpm} = \\frac{143}{60} \\approx 2{,}38 \\text{ rev/s}"}</M>
              <p><strong>Velocidade linear:</strong></p>
              <M block={true}>{"v = \\omega \\cdot 2\\pi R = 2{,}38 \\times 2\\pi \\times 0{,}3 \\approx 4{,}49 \\text{ m/s} \\approx 16{,}2 \\text{ km/h}"}</M>
              <p>Alternativa c. A 1ª marcha oferece baixa velocidade e grande torque para partida e subidas.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
